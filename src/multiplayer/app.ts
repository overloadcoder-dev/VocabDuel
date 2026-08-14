import '../styles/main.css'
import { siteFooter, siteHeader } from '../components/site-shell'
import { SITE } from '../config'
import { getVocabularyById } from '../data'
import { generateQuestions, calculateScore } from '../games'
import type { GameQuestion, VocabularyCategory } from '../types'
import { authenticateGuest, isFirebaseConfigured } from './firebase/client'
import {
  beginRematch,
  closeRoundEarly,
  createRoom,
  finishMatch,
  joinRoom,
  leaveRoom,
  markPlaying,
  observeServerOffset,
  setReady,
  startMatch,
  submitAnswer,
  subscribeRoom,
  voteRematch,
} from './firebase/rooms'
import { activeRoundTiming, remainingRoundMs, roundTimingAtIndex, synchronizedNow } from './time'
import type { MultiplayerIdentity, RoomConfig, RoomRecord } from './types'
import { normalizeRoomCode, sanitizeNickname, validateNickname } from './validation'

document.querySelector('#site-header')!.innerHTML = siteHeader('multiplayer')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const rootElement = document.querySelector<HTMLElement>('#multiplayer-app')
if (!rootElement) throw new Error('Multiplayer root is missing.')
const root: HTMLElement = rootElement

const resultTimeMs = 1_800
const disconnectGraceMs = 30_000
const initialCountdownMs = 3_500
const rematchCountdownMs = 10_000
let identity: MultiplayerIdentity | null = null
let roomCode = ''
let room: RoomRecord | null = null
let serverOffset = 0
let roomUnsubscribe: (() => void) | undefined
let offsetUnsubscribe: (() => void) | undefined
let tickHandle: number | undefined
let lastView = ''
let actionPending = false
let startRequested = false
let rematchRequested = false
let rematchVotePending = false
let notice = ''
const earlyClosePending = new Set<string>()
const answerSubmissions = new Map<string, string>()

function escapeHtml(value: string): string {
  const node = document.createElement('div')
  node.textContent = value
  return node.innerHTML
}

function setNotice(message: string): void {
  notice = message
  render()
}

function guestName(uid: string): string {
  const saved = localStorage.getItem('vocabduel.nickname')
  return saved && !validateNickname(saved) ? saved : `Guest ${uid.slice(-4).toUpperCase()}`
}

function defaultConfig(): RoomConfig {
  return { level: 3, category: 'All', gameType: 'meaning', questionCount: 10, roundTimeMs: 10_000 }
}

function roomCodeInputTemplate(value: string): string {
  const code = normalizeRoomCode(value)
  const slots = Array.from({ length: 6 }, (_item, index) => `<span class="room-code-slot" ${code[index] ? 'data-filled' : ''}>${escapeHtml(code[index] ?? '')}</span>`).join('')
  return `<div class="room-code-input" data-room-code-input>
    <input class="room-code-entry" name="code" inputmode="text" autocomplete="one-time-code" autocapitalize="characters" spellcheck="false" maxlength="6" pattern="[A-HJ-NP-Z2-9]{6}" value="${escapeHtml(code)}" aria-describedby="room-code-hint" required>
    <div class="room-code-slots" aria-hidden="true">${slots}</div>
  </div><small id="room-code-hint" class="field-hint">输入或粘贴六位房间码</small>`
}

function refreshRoomCodeInput(input: HTMLInputElement): void {
  input.value = normalizeRoomCode(input.value)
  const slots = input.closest<HTMLElement>('[data-room-code-input]')?.querySelectorAll<HTMLElement>('.room-code-slot')
  slots?.forEach((slot, index) => {
    slot.textContent = input.value[index] ?? ''
    slot.toggleAttribute('data-filled', Boolean(input.value[index]))
    slot.toggleAttribute('data-active', document.activeElement === input && index === Math.min(input.value.length, 5))
  })
}

function questionsFor(current: RoomRecord): GameQuestion[] {
  const base = { gameType: current.config.gameType, questionCount: current.config.questionCount, seed: current.metadata.seed }
  try {
    return generateQuestions({ ...base, level: current.config.level, category: current.config.category === 'All' ? undefined : current.config.category as VocabularyCategory })
  } catch {
    try { return generateQuestions({ ...base, level: current.config.level }) }
    catch { return generateQuestions(base) }
  }
}

function menuTemplate(): string {
  return `
    <section class="multiplayer-grid">
      <form class="panel multiplayer-form" data-create-form>
        <h2>创建私人房间</h2>
        <label>昵称<input name="nickname" minlength="2" maxlength="16" value="${escapeHtml(identity?.displayName ?? '')}" required></label>
        <div class="form-row"><label>难度<select name="level">${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${n === 3 ? 'selected' : ''}>Level ${n}</option>`).join('')}</select></label>
        <label>类别<select name="category"><option value="All">全部类别</option>${['Daily English', 'Travel', 'School', 'Business', 'Technology', 'Academic'].map((value) => `<option>${value}</option>`).join('')}</select></label></div>
        <label>题型<select name="gameType"><option value="meaning">英文选中文</option><option value="reverse">中文选英文</option><option value="audio">听音辨词</option><option value="context">语境挑战</option></select></label>
        <div class="form-row"><label>题数<select name="questionCount"><option>10</option><option>15</option><option>20</option></select></label><label>每题时间<select name="roundTime"><option value="10000">10 秒</option><option value="15000">15 秒</option><option value="20000">20 秒</option></select></label></div>
        <button class="button primary" type="submit" ${actionPending ? 'disabled' : ''}>${actionPending ? '创建中…' : '创建房间'}</button>
      </form>
      <form class="panel multiplayer-form" data-join-form>
        <h2>加入好友房间</h2>
        <label>昵称<input name="nickname" minlength="2" maxlength="16" value="${escapeHtml(identity?.displayName ?? '')}" required></label>
        <label>六位房间码${roomCodeInputTemplate(new URLSearchParams(location.search).get('room') ?? '')}</label>
        <button class="button secondary" type="submit" ${actionPending ? 'disabled' : ''}>加入房间</button>
      </form>
    </section>${notice ? `<p class="status-message" role="alert">${escapeHtml(notice)}</p>` : ''}`
}

function lobbyTemplate(current: RoomRecord): string {
  const players = Object.values(current.players ?? {})
  const me = identity ? current.players?.[identity.uid] : undefined
  const shareUrl = new URL(`${SITE.routes.multiplayer}?room=${roomCode}`, location.origin).toString()
  return `<section class="panel lobby-panel">
    <p class="eyebrow">ROOM CODE</p><div class="room-code">${roomCode}</div>
    <div class="room-actions"><button class="button small" data-copy="${roomCode}">复制代码</button><button class="button small" data-share="${escapeHtml(shareUrl)}">分享邀请</button></div>
    <div class="versus-grid">${players.map((player, index) => `<article class="player-card"><span class="presence ${player.connected ? 'online' : ''}" aria-hidden="true"></span><h2>${escapeHtml(player.displayName)}</h2><p>${player.connected ? (player.ready ? '✓ 已准备' : '等待准备') : '正在重连…'}</p></article>${index === 0 ? '<strong class="versus">VS</strong>' : ''}`).join('')}</div>
    ${players.length < 2 ? '<p class="waiting-copy">把房间码发给好友，等待对方加入…</p>' : ''}
    <div class="lobby-actions"><button class="button primary" data-ready ${!me?.connected ? 'disabled' : ''}>${me?.ready ? '取消准备' : '准备好了'}</button><button class="button ghost" data-leave>离开房间</button></div>
    <p class="connection-label">● ${me?.connected ? '已连接 Firebase' : '连接中断'}</p>${notice ? `<p class="status-message" role="alert">${escapeHtml(notice)}</p>` : ''}
  </section>`
}

function scoreFor(uid: string, current: RoomRecord, questions: GameQuestion[]): { score: number; correct: number; totalTime: number } {
  let score = 0; let correct = 0; let totalTime = 0
  questions.forEach((question, index) => {
    const answer = current.answers?.[question.id]?.[uid]
    if (!answer || !current.match) return
    const window = roundTimingAtIndex(current.match.startAt, index, questions.map(({ id }) => id), current.config.roundTimeMs, resultTimeMs, current.roundEnds)
    const isCorrect = answer.selectedAnswer === question.correctAnswer
    if (isCorrect) correct += 1
    const elapsed = Math.max(0, Math.min(current.config.roundTimeMs, answer.submittedAt - window.roundStartAt))
    totalTime += elapsed
    score += calculateScore({ correct: isCorrect, timeRemainingMs: current.config.roundTimeMs - elapsed, roundDurationMs: current.config.roundTimeMs }).total
  })
  return { score, correct, totalTime }
}

function countdownTemplate(untilStart: number, isRematch: boolean): string {
  const duration = isRematch ? rematchCountdownMs : initialCountdownMs
  const progress = Math.max(0, Math.min(1, untilStart / duration))
  const count = Math.ceil(untilStart / 1000)
  const display = !isRematch && count > 3 ? 'READY' : String(count)
  const unit = display === 'READY' ? '' : '<small>秒</small>'
  return `<section class="panel countdown-panel">
    <p class="countdown-status">${isRematch ? '双方已接受重赛' : '双方已准备'}</p>
    <div class="countdown-dial" data-countdown-dial role="timer" aria-label="距离比赛开始还有 ${count} 秒" style="--countdown-progress:${progress}">
      <div class="countdown-dial-inner"><strong class="countdown-number" data-countdown-number>${display}</strong><span data-countdown-unit>${unit}</span></div>
    </div>
    <p class="countdown-caption">${isRematch ? '下一场对决即将开始' : '保持专注，比赛马上开始'}</p>
  </section>`
}

function gameTemplate(current: RoomRecord): string {
  if (!current.match || !identity) return '<div class="panel"><p>正在同步比赛时间…</p></div>'
  const now = synchronizedNow(serverOffset)
  const untilStart = current.match.startAt - now
  if (untilStart > 0) {
    const isRematch = current.match.rematchNumber > 0
    return countdownTemplate(untilStart, isRematch)
  }
  const questions = questionsFor(current)
  const timing = activeRoundTiming(current.match.startAt, now, questions.map(({ id }) => id), current.config.roundTimeMs, resultTimeMs, current.roundEnds)
  const index = timing.index
  if (index >= questions.length) {
    if (current.metadata.hostUid === identity.uid && current.metadata.state !== 'finished') void finishMatch(roomCode, identity.uid)
    return '<section class="panel loading-panel"><span class="spinner" aria-hidden="true"></span><p>正在核对最终比分…</p></section>'
  }
  if (current.metadata.hostUid === identity.uid && current.metadata.state === 'countdown') void markPlaying(roomCode, identity.uid)
  const question = questions[index]
  if (!question) return '<div class="panel"><p>题目生成失败。</p></div>'
  const window = timing
  const inResult = now >= window.roundEndAt
  const answer = current.answers?.[question.id]?.[identity.uid]
  const selectedAnswer = answer?.selectedAnswer ?? answerSubmissions.get(question.id)
  const opponent = Object.values(current.players).find((player) => player.uid !== identity?.uid)
  const opponentAnswer = opponent ? current.answers?.[question.id]?.[opponent.uid] : undefined
  const bothAnswered = Boolean(answer && opponentAnswer)
  const revealAnswers = inResult || bothAnswered
  const reconnectRemaining = opponent && !opponent.connected ? Math.max(0, disconnectGraceMs - (now - opponent.lastSeenAt)) : 0
  if (opponent && !opponent.connected && reconnectRemaining <= 0) {
    return `<section class="panel unavailable-panel"><p class="eyebrow">MATCH PAUSED</p><h2>对手已离开比赛</h2><p>等待 30 秒后仍未恢复连接。本局不再继续计分。</p><button class="button primary" data-leave>返回多人菜单</button><a class="button ghost" href="${SITE.routes.play}">玩单人模式</a></section>`
  }
  const mine = scoreFor(identity.uid, current, questions)
  const theirs = opponent ? scoreFor(opponent.uid, current, questions) : { score: 0, correct: 0, totalTime: 0 }
  const remaining = remainingRoundMs(window.roundEndAt, serverOffset)
  const correctLabel = question.choices?.find((choice) => choice.id === question.correctAnswer)?.label ?? question.correctAnswer
  const vocabularyItem = getVocabularyById(question.vocabularyId)
  const meaning = vocabularyItem?.chineseExplanation ?? question.explanation
  const acceptingAnswers = current.metadata.state === 'playing'
  return `<section class="panel battle-panel" data-round-index="${index}" data-round-result="${inResult}">
    <div class="battle-meta"><span>Level ${current.config.level}</span><span>第 ${index + 1} / ${questions.length} 题</span></div>
    <div class="timer" role="timer" aria-label="剩余 ${Math.ceil(remaining / 1000)} 秒" style="--progress:${remaining / current.config.roundTimeMs}" ${remaining / current.config.roundTimeMs <= .25 ? 'data-urgent' : ''}><span class="timer-fill" aria-hidden="true"></span><strong data-timer-value>${(remaining / 1000).toFixed(1)}s</strong></div>
    ${question.gameType === 'audio' ? `<p class="question-kicker">听音辨词</p><button class="audio-orb" data-speak="${escapeHtml(question.audioTerm ?? '')}" aria-label="播放单词发音">▶</button>` : `<p class="question-kicker">选择正确答案</p><h2 class="battle-question">${escapeHtml(question.prompt)}</h2>`}
    <div class="answer-grid">${question.choices?.map((choice, choiceIndex) => {
      const isMine = selectedAnswer === choice.id
      const state = revealAnswers && isMine ? (choice.id === question.correctAnswer ? 'correct' : 'wrong') : isMine ? 'selected' : ''
      return `<button class="answer-button" data-answer="${choice.id}" ${state ? `data-state="${state}"` : ''} ${selectedAnswer || revealAnswers || !acceptingAnswers ? 'disabled' : ''}><span>${choiceIndex + 1}</span>${escapeHtml(choice.label)}</button>`
    }).join('') ?? ''}</div>
    ${revealAnswers ? `<div class="round-result ${selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}"><strong>${selectedAnswer === question.correctAnswer ? '✓ Correct' : selectedAnswer ? '✕ Incorrect' : 'Time is up'}</strong><p>${escapeHtml(correctLabel)}</p><small><strong>${escapeHtml(vocabularyItem?.term ?? question.prompt)}</strong> — ${escapeHtml(meaning)}</small></div>` : selectedAnswer ? '<p class="answer-locked" role="status">Answer locked in. Waiting for your opponent…</p>' : ''}
    <p class="opponent-status">${opponent && !opponent.connected ? `对手正在重连… ${Math.ceil(reconnectRemaining / 1000)}s` : !opponentAnswer ? 'Opponent is thinking…' : opponentAnswer.selectedAnswer === question.correctAnswer && revealAnswers ? '✓ Opponent answered correctly' : revealAnswers ? '✕ Opponent answered incorrectly' : '✓ Opponent has answered'}</p>
    <div class="score-strip"><span>你 <strong>${mine.score}</strong></span><span>${escapeHtml(opponent?.displayName ?? '对手')} <strong>${theirs.score}</strong></span></div>
    ${notice ? `<p class="status-message" role="alert">${escapeHtml(notice)}</p>` : ''}
  </section>`
}

function resultsTemplate(current: RoomRecord, suppliedQuestions?: GameQuestion[]): string {
  if (!identity) return ''
  const questions = suppliedQuestions ?? questionsFor(current)
  const opponent = Object.values(current.players).find((player) => player.uid !== identity?.uid)
  const mine = scoreFor(identity.uid, current, questions)
  const theirs = opponent ? scoreFor(opponent.uid, current, questions) : { score: 0, correct: 0, totalTime: 0 }
  const verdict = mine.score === theirs.score ? 'DRAW' : mine.score > theirs.score ? 'VICTORY' : 'DEFEAT'
  const wrong = questions.filter((question) => current.answers?.[question.id]?.[identity?.uid ?? '']?.selectedAnswer !== question.correctAnswer)
  const reviewedWords = questions.map((question) => getVocabularyById(question.vocabularyId)).filter((item) => item !== undefined)
  const voted = Boolean(current.rematchVotes?.[identity.uid]) || rematchVotePending
  const opponentAvailable = Boolean(opponent?.connected)
  return `<section class="panel results-panel"><p class="eyebrow">MATCH COMPLETE</p><h2>${verdict}</h2>
    <div class="final-score"><strong>${mine.score}</strong><span>—</span><strong>${theirs.score}</strong></div>
    <div class="result-stats"><p><span>正确率</span><strong>${Math.round(mine.correct / questions.length * 100)}%</strong></p><p><span>答对</span><strong>${mine.correct}/${questions.length}</strong></p><p><span>平均用时</span><strong>${mine.correct ? (mine.totalTime / Math.max(1, Object.keys(current.answers ?? {}).length) / 1000).toFixed(1) : '—'}s</strong></p></div>
    ${wrong.length ? `<details open><summary>Review incorrect words (${wrong.length})</summary><ul class="word-review-list">${wrong.map((question) => `<li>${escapeHtml(question.explanation)}</li>`).join('')}</ul></details>` : '<p>Perfect score — you got every word right.</p>'}
    <details><summary>All words and meanings (${reviewedWords.length})</summary><dl class="match-word-list">${reviewedWords.map((item) => `<div><dt>${escapeHtml(item.term)}</dt><dd>${escapeHtml(item.chineseShort)} · ${escapeHtml(item.englishDefinition)}</dd></div>`).join('')}</dl></details>
    <div class="result-actions"><button class="button primary" data-rematch ${voted || !opponentAvailable ? 'disabled' : ''}>${!opponentAvailable ? '对手已离线' : voted ? '等待对手…' : '再来一局'}</button><a class="button secondary" href="${SITE.routes.play}">玩单人模式</a><button class="button ghost" data-leave>离开</button></div>
  </section>`
}

function render(): void {
  if (!identity) return
  let view = 'menu'
  let html = menuTemplate()
  if (roomCode && room) {
    view = room.metadata.state
    html = room.metadata.state === 'waiting' ? lobbyTemplate(room) : room.metadata.state === 'finished' ? resultsTemplate(room) : gameTemplate(room)
  }
  root.innerHTML = html
  if (lastView !== view) { root.querySelector<HTMLElement>('h2, button, input')?.focus({ preventScroll: true }); lastView = view }
  bindActions()
}

function readIdentity(form: HTMLFormElement): MultiplayerIdentity | null {
  if (!identity) return null
  const data = new FormData(form)
  const name = sanitizeNickname(String(data.get('nickname') ?? ''))
  const error = validateNickname(name)
  if (error) { setNotice(error); return null }
  identity = { ...identity, displayName: name }
  localStorage.setItem('vocabduel.nickname', name)
  return identity
}

function updateCountdownDial(current: RoomRecord, untilStart: number): boolean {
  const dial = root.querySelector<HTMLElement>('[data-countdown-dial]')
  const number = root.querySelector<HTMLElement>('[data-countdown-number]')
  const unit = root.querySelector<HTMLElement>('[data-countdown-unit]')
  if (!dial || !number || !unit) return false

  const isRematch = (current.match?.rematchNumber ?? 0) > 0
  const duration = isRematch ? rematchCountdownMs : initialCountdownMs
  const count = Math.max(1, Math.ceil(untilStart / 1000))
  const display = !isRematch && count > 3 ? 'READY' : String(count)
  dial.style.setProperty('--countdown-progress', String(Math.max(0, Math.min(1, untilStart / duration))))
  if (number.textContent !== display) {
    number.textContent = display
    unit.innerHTML = display === 'READY' ? '' : '<small>秒</small>'
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      number.animate([{ opacity: .35, transform: 'scale(.78)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' })
    }
  }
  if (dial.dataset.announcedSecond !== String(count)) {
    dial.dataset.announcedSecond = String(count)
    dial.setAttribute('aria-label', `距离比赛开始还有 ${count} 秒`)
  }
  return true
}

function updateRoundTimer(current: RoomRecord, now: number): boolean {
  if (!current.match) return false
  const questions = questionsFor(current)
  const timing = activeRoundTiming(current.match.startAt, now, questions.map(({ id }) => id), current.config.roundTimeMs, resultTimeMs, current.roundEnds)
  const battle = root.querySelector<HTMLElement>('.battle-panel')
  const inResult = now >= timing.roundEndAt
  if (!battle) return Boolean(root.querySelector('.loading-panel, .unavailable-panel'))
  if (battle.dataset.roundIndex !== String(timing.index) || battle.dataset.roundResult !== String(inResult)) return false

  const timer = battle.querySelector<HTMLElement>('.timer')
  const timerValue = timer?.querySelector<HTMLElement>('[data-timer-value]')
  if (!timer || !timerValue) return false
  const remaining = remainingRoundMs(timing.roundEndAt, serverOffset)
  const progress = Math.max(0, Math.min(1, remaining / current.config.roundTimeMs))
  timer.style.setProperty('--progress', String(progress))
  timer.toggleAttribute('data-urgent', progress <= .25)
  timerValue.textContent = `${(remaining / 1000).toFixed(1)}s`
  const announcedSecond = Math.ceil(remaining / 1000)
  if (timer.dataset.announcedSecond !== String(announcedSecond)) {
    timer.dataset.announcedSecond = String(announcedSecond)
    timer.setAttribute('aria-label', `剩余 ${announcedSecond} 秒`)
  }
  return true
}

function runLiveTimer(): void {
  if (room?.match && ['countdown', 'playing'].includes(room.metadata.state)) {
    const now = synchronizedNow(serverOffset)
    const untilStart = room.match.startAt - now
    const updated = untilStart > 0 ? updateCountdownDial(room, untilStart) : updateRoundTimer(room, now)
    if (!updated) render()
  }
  tickHandle = window.requestAnimationFrame(runLiveTimer)
}

async function watchRoom(code: string): Promise<void> {
  roomUnsubscribe?.()
  offsetUnsubscribe?.()
  roomCode = code
  history.replaceState({}, '', `${SITE.routes.multiplayer}?room=${code}`)
  offsetUnsubscribe = await observeServerOffset((value) => { serverOffset = value })
  roomUnsubscribe = await subscribeRoom(code, (value) => {
    room = value
    if (!value) { answerSubmissions.clear(); roomCode = ''; history.replaceState({}, '', SITE.routes.multiplayer); setNotice('房间已关闭。'); return }
    if (identity) {
      answerSubmissions.forEach((_selection, roundId) => {
        if (value.answers?.[roundId]?.[identity!.uid]) answerSubmissions.delete(roundId)
      })
    }
    if (value.metadata.state !== 'waiting') startRequested = false
    if (value.metadata.state !== 'finished') { rematchRequested = false; rematchVotePending = false }
    else if (identity && value.rematchVotes?.[identity.uid]) rematchVotePending = false
    if (identity && value.match && value.metadata.hostUid === identity.uid && value.metadata.state === 'playing') {
      const questions = questionsFor(value)
      const timing = activeRoundTiming(value.match.startAt, synchronizedNow(serverOffset), questions.map(({ id }) => id), value.config.roundTimeMs, resultTimeMs, value.roundEnds)
      const question = questions[timing.index]
      const answers = question ? Object.values(value.answers?.[question.id] ?? {}) : []
      if (question && !value.roundEnds?.[question.id] && answers.length === 2 && answers.every(({ selectedAnswer }) => selectedAnswer === question.correctAnswer) && !earlyClosePending.has(question.id)) {
        earlyClosePending.add(question.id)
        void closeRoundEarly(code, question.id, identity.uid).catch(() => undefined).finally(() => earlyClosePending.delete(question.id))
      }
    }
    if (identity && value.metadata.hostUid === identity.uid && value.metadata.state === 'waiting' && !startRequested) {
      const players = Object.values(value.players ?? {})
      if (players.length === 2 && players.every((player) => player.ready && player.connected)) {
        startRequested = true
        void startMatch(code, identity.uid, serverOffset).catch(() => { startRequested = false; setNotice('比赛启动失败，请重新准备。') })
      }
    }
    if (identity && value.metadata.hostUid === identity.uid && value.metadata.state === 'finished' && !rematchRequested) {
      const ids = Object.keys(value.players ?? {})
      if (ids.length === 2 && ids.every((uid) => value.rematchVotes?.[uid])) {
        rematchRequested = true
        void beginRematch(code, identity.uid, serverOffset).catch(() => { rematchRequested = false; setNotice('无法开始重赛，请重试。') })
      }
    }
    render()
  })
  if (tickHandle !== undefined) window.cancelAnimationFrame(tickHandle)
  tickHandle = window.requestAnimationFrame(runLiveTimer)
}

function bindActions(): void {
  root.querySelectorAll<HTMLInputElement>('.room-code-entry').forEach((input) => {
    refreshRoomCodeInput(input)
    input.addEventListener('input', () => refreshRoomCodeInput(input))
    input.addEventListener('paste', (event) => {
      const pastedCode = normalizeRoomCode(event.clipboardData?.getData('text') ?? '')
      if (!pastedCode) return
      event.preventDefault()
      input.value = pastedCode
      refreshRoomCodeInput(input)
    })
    input.addEventListener('focus', () => refreshRoomCodeInput(input))
    input.addEventListener('blur', () => refreshRoomCodeInput(input))
  })
  root.querySelector<HTMLFormElement>('[data-create-form]')?.addEventListener('submit', async (event) => {
    event.preventDefault(); notice = ''
    const form = event.currentTarget as HTMLFormElement
    const currentIdentity = readIdentity(form); if (!currentIdentity) return
    const data = new FormData(form)
    const config = defaultConfig()
    config.level = Number(data.get('level')) as RoomConfig['level']
    config.category = String(data.get('category'))
    config.gameType = String(data.get('gameType')) as RoomConfig['gameType']
    config.questionCount = Number(data.get('questionCount'))
    config.roundTimeMs = Number(data.get('roundTime'))
    actionPending = true; render()
    try { await watchRoom(await createRoom(currentIdentity, config)) }
    catch (error) { setNotice(error instanceof Error ? error.message : '创建房间失败。') }
    finally { actionPending = false; render() }
  })
  root.querySelector<HTMLFormElement>('[data-join-form]')?.addEventListener('submit', async (event) => {
    event.preventDefault(); notice = ''
    const form = event.currentTarget as HTMLFormElement
    const currentIdentity = readIdentity(form); if (!currentIdentity) return
    const code = normalizeRoomCode(String(new FormData(form).get('code') ?? ''))
    if (code.length !== 6) { setNotice('请输入六位房间码。'); return }
    actionPending = true; render()
    try { await joinRoom(code, currentIdentity); await watchRoom(code) }
    catch (error) { setNotice(error instanceof Error ? error.message : '加入房间失败。') }
    finally { actionPending = false; render() }
  })
  root.querySelector<HTMLButtonElement>('[data-ready]')?.addEventListener('click', () => {
    if (identity && room) void setReady(roomCode, identity.uid, !room.players[identity.uid]?.ready).catch(() => setNotice('无法更新准备状态。'))
  })
  root.querySelectorAll<HTMLButtonElement>('[data-leave]').forEach((button) => button.addEventListener('click', async () => {
    if (identity && roomCode) await leaveRoom(roomCode, identity.uid).catch(() => undefined)
    roomUnsubscribe?.(); offsetUnsubscribe?.(); room = null; roomCode = ''; history.replaceState({}, '', SITE.routes.multiplayer); render()
  }))
  root.querySelector<HTMLButtonElement>('[data-copy]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget as HTMLButtonElement
    await navigator.clipboard.writeText(button.dataset.copy ?? roomCode); setNotice('房间码已复制。')
  })
  root.querySelector<HTMLButtonElement>('[data-share]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget as HTMLButtonElement
    const url = button.dataset.share ?? location.href
    if (navigator.share) await navigator.share({ title: '加入我的 VocabDuel 对战', url })
    else { await navigator.clipboard.writeText(url); setNotice('邀请链接已复制。') }
  })
  root.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach((button) => button.addEventListener('click', () => {
    if (!identity || !room?.match) return
    const questions = questionsFor(room)
    const index = activeRoundTiming(room.match.startAt, synchronizedNow(serverOffset), questions.map(({ id }) => id), room.config.roundTimeMs, resultTimeMs, room.roundEnds).index
    const question = questions[index]
    if (!question) return
    if (room.answers?.[question.id]?.[identity.uid] || answerSubmissions.has(question.id)) return
    const selectedAnswer = button.dataset.answer ?? ''
    answerSubmissions.set(question.id, selectedAnswer)
    render()
    void submitAnswer(roomCode, question.id, identity.uid, selectedAnswer).catch(() => {
      answerSubmissions.delete(question.id)
      setNotice('答案提交失败，请检查连接。')
    })
  }))
  root.querySelector<HTMLButtonElement>('[data-speak]')?.addEventListener('click', (event) => {
    if (!('speechSynthesis' in window)) { setNotice('此浏览器不支持语音播放。'); return }
    const button = event.currentTarget as HTMLButtonElement
    const utterance = new SpeechSynthesisUtterance(button.dataset.speak ?? '')
    utterance.lang = 'en-US'; speechSynthesis.cancel(); speechSynthesis.speak(utterance)
  })
  root.querySelector<HTMLButtonElement>('[data-rematch]')?.addEventListener('click', () => {
    if (!identity || rematchVotePending || room?.rematchVotes?.[identity.uid]) return
    rematchVotePending = true
    notice = ''
    render()
    void voteRematch(roomCode, identity.uid).catch(() => {
      rematchVotePending = false
      setNotice('无法提交重赛请求，请检查连接后重试。')
    })
  })
}

document.addEventListener('keydown', (event) => {
  if (!room || !['countdown', 'playing'].includes(room.metadata.state) || !/^[1-4]$/.test(event.key)) return
  root.querySelectorAll<HTMLButtonElement>('[data-answer]')[Number(event.key) - 1]?.click()
})

async function initialize(): Promise<void> {
  if (!isFirebaseConfigured()) {
    root.innerHTML = `<section class="panel unavailable-panel"><p class="eyebrow">MULTIPLAYER OFFLINE</p><h2>多人模式尚未连接</h2><p>Firebase 环境变量未配置。单词学习和所有单人游戏仍可正常使用。</p><a class="button primary" href="${SITE.routes.play}">玩单人模式</a><p class="technical-note">开发者可按 README 配置 Firebase 或本地模拟器。</p></section>`
    return
  }
  try {
    const uid = await authenticateGuest()
    identity = { uid, displayName: guestName(uid) }
    render()
    const invite = normalizeRoomCode(new URLSearchParams(location.search).get('room') ?? '')
    if (invite.length === 6) root.querySelector<HTMLInputElement>('[name="code"]')?.focus()
  } catch (error) {
    root.innerHTML = `<section class="panel unavailable-panel" role="alert"><h2>无法连接多人模式</h2><p>${escapeHtml(error instanceof Error ? error.message : '请稍后重试。')}</p><button class="button primary" data-retry>重试</button><a class="button ghost" href="${SITE.routes.play}">玩单人模式</a></section>`
    root.querySelector('[data-retry]')?.addEventListener('click', () => { location.reload() })
  }
}

window.addEventListener('beforeunload', () => { roomUnsubscribe?.(); offsetUnsubscribe?.(); if (tickHandle !== undefined) window.cancelAnimationFrame(tickHandle) })
void initialize()
