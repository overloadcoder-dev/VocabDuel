import '../styles/main.css'
import { answerMarker, getAnswerState } from '../components/answer-state'
import { siteFooter, siteHeader } from '../components/site-shell'
import { SITE } from '../config'
import { loadVocabularyLevel, type VocabularyDataset } from '../data'
import { generateQuestions, calculateScore } from '../games'
import { speechService } from '../speech'
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
import { bothPlayersAnswered } from './state-machine'
import { activeRoundTiming, remainingRoundMs, ROUND_REVIEW_MS, roundTimingAtIndex, synchronizedNow } from './time'
import type { MultiplayerIdentity, RoomConfig, RoomRecord } from './types'
import { normalizeRoomCode, sanitizeNickname, validateNickname } from './validation'

document.querySelector('#site-header')!.innerHTML = siteHeader('multiplayer')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const rootElement = document.querySelector<HTMLElement>('#multiplayer-app')
if (!rootElement) throw new Error('Multiplayer root is missing.')
const root: HTMLElement = rootElement

const resultTimeMs = ROUND_REVIEW_MS
const disconnectGraceMs = 30_000
const initialCountdownMs = 3_500
const rematchCountdownMs = 10_000
let identity: MultiplayerIdentity | null = null
let roomCode = ''
let room: RoomRecord | null = null
let vocabularyDataset: VocabularyDataset | undefined
let serverOffset = 0
let roomUnsubscribe: (() => void) | undefined
let offsetUnsubscribe: (() => void) | undefined
let tickHandle: number | undefined
let lastView = ''
let lastRoundKey = ''
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
  return saved && !validateNickname(saved) ? saved : `玩家 ${uid.slice(-4).toUpperCase()}`
}

const categoryLabels: Record<string, string> = {
  All: '全部类别',
  'Daily English': '日常英语',
  Travel: '旅游',
  School: '校园',
  Business: '商务',
  Technology: '科技',
  Academic: '学术',
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
  </div><small id="room-code-hint" class="field-hint">输入或贴上 6 位房间码，英文字母会自动转为大写。</small>`
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
  if (!vocabularyDataset) throw new Error('Vocabulary is still loading.')
  const source = vocabularyDataset.items
  const base = { gameType: current.config.gameType, questionCount: current.config.questionCount, seed: current.metadata.seed }
  try {
    return generateQuestions({ ...base, level: current.config.level, category: current.config.category === 'All' ? undefined : current.config.category as VocabularyCategory }, source)
  } catch {
    try { return generateQuestions({ ...base, level: current.config.level }, source) }
    catch { return generateQuestions(base, source) }
  }
}

function menuTemplate(): string {
  return `
    <section class="multiplayer-grid">
      <form class="panel multiplayer-form create-room-form" data-create-form>
        <div class="multiplayer-form-heading"><span class="form-step" aria-hidden="true">建</span><div><h2>建立私人房间</h2><p class="form-copy">设定题目后，把房间码分享给朋友。</p></div></div>
        <label>你的昵称<input name="nickname" autocomplete="nickname" minlength="2" maxlength="16" value="${escapeHtml(identity?.displayName ?? '')}" required></label>
        <div class="form-row"><label>词汇等级<select name="level">${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${n === 3 ? 'selected' : ''}>Level ${n}</option>`).join('')}</select></label>
        <label>词汇类别<select name="category"><option value="All">全部类别</option>${[['Daily English', '日常英语'], ['Travel', '旅游'], ['School', '校园'], ['Business', '商务'], ['Technology', '科技'], ['Academic', '学术']].map(([value, label]) => `<option value="${value}">${label}</option>`).join('')}</select></label></div>
        <label>挑战模式<select name="gameType"><option value="meaning">英文 → 中文</option><option value="reverse">中文 → 英文</option><option value="audio">听发音选单词</option><option value="context">语境判断</option></select></label>
        <div class="form-row"><label>题目数量<select name="questionCount"><option value="10">10 题</option><option value="15">15 题</option><option value="20">20 题</option></select></label><label>每题时间<select name="roundTime"><option value="10000">10 秒</option><option value="15000">15 秒</option><option value="20000">20 秒</option></select></label></div>
        <button class="button primary" type="submit" ${actionPending ? 'disabled aria-busy="true"' : ''}>${actionPending ? '正在建立房间…' : '建立房间并邀请朋友'}</button>
      </form>
      <form class="panel multiplayer-form join-room-form" data-join-form>
        <div class="multiplayer-form-heading"><span class="form-step alternate" aria-hidden="true">加</span><div><h2>加入朋友的房间</h2><p class="form-copy">向房主取得 6 位房间码即可加入。</p></div></div>
        <label>你的昵称<input name="nickname" autocomplete="nickname" minlength="2" maxlength="16" value="${escapeHtml(identity?.displayName ?? '')}" required></label>
        <label>房间码${roomCodeInputTemplate(new URLSearchParams(location.search).get('room') ?? '')}</label>
        <button class="button secondary join-room-button" type="submit" ${actionPending ? 'disabled aria-busy="true"' : ''}>${actionPending ? '正在加入…' : '加入房间'}</button>
      </form>
    </section>${notice ? `<p class="status-message" role="alert">${escapeHtml(notice)}</p>` : ''}`
}

function lobbyTemplate(current: RoomRecord): string {
  const players = Object.values(current.players ?? {})
  const me = identity ? current.players?.[identity.uid] : undefined
  const shareUrl = new URL(`${SITE.routes.multiplayer}?room=${roomCode}`, location.origin).toString()
  return `<section class="panel lobby-panel">
    <p class="eyebrow">房间码 · ROOM CODE</p><div class="room-code">${roomCode}</div>
    <div class="room-actions"><button class="button small" data-copy="${roomCode}">复制房间码</button><button class="button small" data-share="${escapeHtml(shareUrl)}">分享邀请</button></div>
    <ul class="room-settings" aria-label="对战设定"><li>Level ${current.config.level}</li><li>${escapeHtml(categoryLabels[current.config.category] ?? current.config.category)}</li><li>${current.config.questionCount} 题</li><li>每题 ${current.config.roundTimeMs / 1000} 秒</li></ul>
    <div class="versus-grid">${players.map((player, index) => `<article class="player-card"><span class="presence ${player.connected ? 'online' : ''}" aria-hidden="true"></span><h2>${escapeHtml(player.displayName)}</h2><p>${player.connected ? (player.ready ? '✓ 已准备' : '尚未准备') : '正在重新连接…'}</p></article>${index === 0 ? '<strong class="versus">VS</strong>' : ''}`).join('')}</div>
    ${players.length < 2 ? '<p class="waiting-copy" role="status">把房间码分享给朋友，等待对方加入。</p>' : ''}
    <div class="lobby-actions"><button class="button primary" data-ready ${!me?.connected ? 'disabled' : ''}>${me?.ready ? '取消准备' : '我准备好了'}</button><button class="button ghost" data-leave>离开房间</button></div>
    <p class="connection-label">● ${me?.connected ? '连接正常' : '连接中断'}</p>${notice ? `<p class="status-message" role="alert">${escapeHtml(notice)}</p>` : ''}
  </section>`
}

function scoreFor(uid: string, current: RoomRecord, questions: GameQuestion[]): { score: number; correct: number; attempted: number; totalTime: number } {
  let score = 0; let correct = 0; let attempted = 0; let totalTime = 0
  questions.forEach((question, index) => {
    const answer = current.answers?.[question.id]?.[uid]
    if (!answer || !current.match) return
    attempted += 1
    const window = roundTimingAtIndex(current.match.startAt, index, questions.map(({ id }) => id), current.config.roundTimeMs, resultTimeMs, current.roundEnds)
    const isCorrect = answer.selectedAnswer === question.correctAnswer
    if (isCorrect) correct += 1
    const elapsed = Math.max(0, Math.min(current.config.roundTimeMs, answer.submittedAt - window.roundStartAt))
    totalTime += elapsed
    score += calculateScore({ correct: isCorrect, timeRemainingMs: current.config.roundTimeMs - elapsed, roundDurationMs: current.config.roundTimeMs }).total
  })
  return { score, correct, attempted, totalTime }
}

function countdownTemplate(untilStart: number, isRematch: boolean): string {
  const duration = isRematch ? rematchCountdownMs : initialCountdownMs
  const progress = Math.max(0, Math.min(1, untilStart / duration))
  const count = Math.ceil(untilStart / 1000)
  const display = !isRematch && count > 3 ? '准备' : String(count)
  const unit = display === '准备' ? '' : '<small>秒</small>'
  return `<section class="panel countdown-panel">
    <p class="countdown-status">${isRematch ? '双方已接受再战' : '双方都准备好了'}</p>
    <div class="countdown-dial" data-countdown-dial role="timer" aria-label="对战将在 ${count} 秒后开始" style="--countdown-progress:${progress}">
      <div class="countdown-dial-inner"><strong class="countdown-number" data-countdown-number ${display === '准备' ? '' : 'data-numeric'}>${display}</strong><span data-countdown-unit>${unit}</span></div>
    </div>
    <p class="countdown-caption">${isRematch ? '下一场对决即将开始。' : '集中精神，对战即将开始！'}</p>
  </section>`
}

function gameTemplate(current: RoomRecord): string {
  if (!current.match || !identity) return '<div class="panel loading-panel" role="status"><span class="spinner" aria-hidden="true"></span><p>正在同步对战…</p></div>'
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
    return '<section class="panel loading-panel" role="status"><span class="spinner" aria-hidden="true"></span><p>正在计算最终分数…</p></section>'
  }
  if (current.metadata.hostUid === identity.uid && current.metadata.state === 'countdown') void markPlaying(roomCode, identity.uid)
  const question = questions[index]
  if (!question) return '<div class="panel" role="alert"><p>暂时无法产生题目，请重新尝试。</p></div>'
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
    return `<section class="panel unavailable-panel"><p class="eyebrow">对战已结束</p><h2>对手已断线</h2><p>连接在 30 秒内没有恢复，本场计分已停止。</p><button class="button primary" data-leave>返回多人对战</button><a class="button ghost" href="${SITE.routes.play}">单人练习</a></section>`
  }
  const mine = scoreFor(identity.uid, current, questions)
  const theirs = opponent ? scoreFor(opponent.uid, current, questions) : { score: 0, correct: 0, attempted: 0, totalTime: 0 }
  const nextStepLabel = index === questions.length - 1 ? '查看结果' : '下一题'
  const timerRemaining = remainingRoundMs(inResult ? window.resultEndAt : window.roundEndAt, serverOffset)
  const timerDuration = inResult ? resultTimeMs : current.config.roundTimeMs
  const timerProgress = Math.max(0, Math.min(1, timerRemaining / timerDuration))
  const timerText = inResult ? `${nextStepLabel} ${(timerRemaining / 1000).toFixed(1)}s` : `${(timerRemaining / 1000).toFixed(1)}s`
  const timerLabel = inResult ? `${nextStepLabel}还有 ${Math.ceil(timerRemaining / 1000)} 秒` : `剩余 ${Math.ceil(timerRemaining / 1000)} 秒`
  const correctLabel = question.choices?.find((choice) => choice.id === question.correctAnswer)?.label ?? question.correctAnswer
  const vocabularyItem = vocabularyDataset?.byId.get(question.vocabularyId)
  const meaning = vocabularyItem?.chineseExplanation ?? question.explanation
  const acceptingAnswers = current.metadata.state === 'playing'
  const opponentStatusState = opponent && !opponent.connected
    ? 'reconnecting'
    : !opponentAnswer
      ? 'thinking'
      : revealAnswers
        ? opponentAnswer.selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'
        : 'answered'
  const opponentStatus = {
    reconnecting: { icon: '↻', text: `对手正在重新连接… ${Math.ceil(reconnectRemaining / 1000)} 秒` },
    thinking: { icon: '…', text: '对手正在思考…' },
    answered: { icon: '✓', text: '对手已作答' },
    correct: { icon: '✓', text: '对手回答正确' },
    incorrect: { icon: '×', text: '对手回答错误' },
  }[opponentStatusState]
  return `<section class="panel battle-panel" data-round-index="${index}" data-round-result="${inResult}">
    <div class="battle-meta"><span>Level ${current.config.level}</span><span>第 ${index + 1} / ${questions.length} 题</span></div>
    <div class="timer" role="timer" aria-label="${timerLabel}" style="--progress:${timerProgress}" ${inResult ? 'data-transition' : timerProgress <= .25 ? 'data-urgent' : ''}><span class="timer-fill" aria-hidden="true"></span><strong data-timer-value>${timerText}</strong></div>
    <p class="opponent-status" data-state="${opponentStatusState}" role="status" aria-atomic="true"><span class="opponent-status-icon" aria-hidden="true">${opponentStatus.icon}</span><span>${opponentStatus.text}</span></p>
    ${question.gameType === 'audio' ? `<p class="question-kicker">听发音，选出正确答案</p><button class="audio-orb" data-speak="${escapeHtml(question.audioTerm ?? '')}" aria-label="播放单词发音">▶</button>` : `<p class="question-kicker">请选择正确答案</p><h2 class="battle-question">${escapeHtml(question.prompt)}</h2>`}
    <div class="answer-grid">${question.choices?.map((choice, choiceIndex) => {
      const isMine = selectedAnswer === choice.id
      const state = getAnswerState(choice.id, selectedAnswer, question.correctAnswer, revealAnswers)
      const marker = answerMarker(state, choiceIndex)
      const answerStatus = state === 'correct' ? (isMine ? '，回答正确' : '，正确答案') : state === 'wrong' ? '，回答错误' : state === 'selected' ? '，已选择' : ''
      return `<button class="answer-button" data-answer="${choice.id}" aria-label="${escapeHtml(choice.label)}${answerStatus}" ${state ? `data-state="${state}"` : ''} ${selectedAnswer || revealAnswers || !acceptingAnswers ? 'disabled' : ''}><span aria-hidden="true">${marker}</span>${escapeHtml(choice.label)}</button>`
    }).join('') ?? ''}</div>
    ${revealAnswers ? `<div class="round-result ${selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}"><strong>${selectedAnswer === question.correctAnswer ? '✓ 回答正确' : selectedAnswer ? '✕ 回答错误' : '时间到'}</strong><p>${escapeHtml(correctLabel)}</p><small><strong>${escapeHtml(vocabularyItem?.term ?? question.prompt)}</strong> — ${escapeHtml(meaning)}</small></div>` : selectedAnswer ? '<p class="answer-locked" role="status">答案已锁定，等待对手作答…</p>' : ''}
    <div class="score-strip"><span>你 <strong>${mine.score}</strong></span><span>${escapeHtml(opponent?.displayName ?? '对手')} <strong>${theirs.score}</strong></span></div>
    ${notice ? `<p class="status-message" role="alert">${escapeHtml(notice)}</p>` : ''}
  </section>`
}

function resultsTemplate(current: RoomRecord, suppliedQuestions?: GameQuestion[]): string {
  if (!identity) return ''
  const questions = suppliedQuestions ?? questionsFor(current)
  const opponent = Object.values(current.players).find((player) => player.uid !== identity?.uid)
  const mine = scoreFor(identity.uid, current, questions)
  const theirs = opponent ? scoreFor(opponent.uid, current, questions) : { score: 0, correct: 0, attempted: 0, totalTime: 0 }
  const verdict = mine.score === theirs.score ? '平手' : mine.score > theirs.score ? '胜利！' : '再接再厉'
  const wrong = questions.filter((question) => current.answers?.[question.id]?.[identity?.uid ?? '']?.selectedAnswer !== question.correctAnswer)
  const reviewedWords = questions.map((question) => vocabularyDataset?.byId.get(question.vocabularyId)).filter((item) => item !== undefined)
  const voted = Boolean(current.rematchVotes?.[identity.uid]) || rematchVotePending
  const opponentAvailable = Boolean(opponent?.connected)
  const mineAccuracy = questions.length ? Math.round(mine.correct / questions.length * 100) : 0
  const theirsAccuracy = questions.length ? Math.round(theirs.correct / questions.length * 100) : 0
  const mineAverageTime = mine.attempted ? `${(mine.totalTime / mine.attempted / 1000).toFixed(1)}s` : '—'
  const theirsAverageTime = theirs.attempted ? `${(theirs.totalTime / theirs.attempted / 1000).toFixed(1)}s` : '—'
  return `<section class="panel results-panel"><p class="eyebrow">对战完成 · MATCH COMPLETE</p><h2>${verdict}</h2>
    <div class="result-comparison" role="group" aria-label="双方成绩对比">
      <div class="result-player-card" ${mine.score > theirs.score ? 'data-leading' : ''}><p class="result-player-name">你</p><p class="result-player-score"><strong>${mine.score}</strong><span>得分</span></p><p class="result-player-rate"><span>正确率</span><strong>${mineAccuracy}%</strong></p><dl class="result-player-details"><div><dt>答对</dt><dd>${mine.correct}/${questions.length}</dd></div><div><dt>答错</dt><dd>${questions.length - mine.correct}</dd></div><div><dt>平均用时</dt><dd>${mineAverageTime}</dd></div></dl></div>
      <span class="result-versus" aria-hidden="true">VS</span>
      <div class="result-player-card" ${theirs.score > mine.score ? 'data-leading' : ''}><p class="result-player-name">${escapeHtml(opponent?.displayName ?? '对手')}</p><p class="result-player-score"><strong>${theirs.score}</strong><span>得分</span></p><p class="result-player-rate"><span>正确率</span><strong>${theirsAccuracy}%</strong></p><dl class="result-player-details"><div><dt>答对</dt><dd>${theirs.correct}/${questions.length}</dd></div><div><dt>答错</dt><dd>${questions.length - theirs.correct}</dd></div><div><dt>平均用时</dt><dd>${theirsAverageTime}</dd></div></dl></div>
    </div>
    ${wrong.length ? `<details open><summary>复习答错的单词（${wrong.length}）</summary><ul class="word-review-list">${wrong.map((question) => `<li>${escapeHtml(question.explanation)}</li>`).join('')}</ul></details>` : '<p>满分！所有单词都答对了。</p>'}
    <details><summary>查看全部单词与词义（${reviewedWords.length}）</summary><dl class="match-word-list">${reviewedWords.map((item) => `<div><dt>${escapeHtml(item.term)}</dt><dd>${escapeHtml(item.chineseShort)} · ${escapeHtml(item.englishDefinition)}</dd></div>`).join('')}</dl></details>
    <div class="result-actions"><button class="button primary" data-rematch ${voted || !opponentAvailable ? 'disabled' : ''}>${!opponentAvailable ? '对手已离线' : voted ? '已提出再战…' : '再战一场'}</button><a class="button secondary" href="${SITE.routes.play}">单人练习</a><button class="button ghost" data-leave>离开房间</button></div>${voted && opponentAvailable ? '<p class="waiting-copy" role="status">正在等待对手；双方都同意后会自动开始下一场。</p>' : ''}
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
  root.setAttribute('aria-busy', String(actionPending))
  const roundKey = root.querySelector<HTMLElement>('[data-round-index]')?.dataset.roundIndex ?? ''
  if (lastView !== view || (roundKey && roundKey !== lastRoundKey)) {
    const focusTarget = root.querySelector<HTMLElement>('.battle-question, h2, button, input')
    if (focusTarget && !focusTarget.matches('button, input, a')) focusTarget.tabIndex = -1
    focusTarget?.focus({ preventScroll: true })
  }
  lastView = view
  lastRoundKey = roundKey
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
  const display = !isRematch && count > 3 ? '准备' : String(count)
  dial.style.setProperty('--countdown-progress', String(Math.max(0, Math.min(1, untilStart / duration))))
  number.toggleAttribute('data-numeric', display !== '准备')
  if (number.textContent !== display) {
    number.textContent = display
    unit.innerHTML = display === '准备' ? '' : '<small>秒</small>'
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      number.animate([{ opacity: .35, transform: 'scale(.78)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' })
    }
  }
  if (dial.dataset.announcedSecond !== String(count)) {
    dial.dataset.announcedSecond = String(count)
    dial.setAttribute('aria-label', `对战将在 ${count} 秒后开始`)
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
  const nextStepLabel = timing.index === questions.length - 1 ? '查看结果' : '下一题'
  const remaining = remainingRoundMs(inResult ? timing.resultEndAt : timing.roundEndAt, serverOffset)
  const duration = inResult ? resultTimeMs : current.config.roundTimeMs
  const progress = Math.max(0, Math.min(1, remaining / duration))
  timer.style.setProperty('--progress', String(progress))
  timer.toggleAttribute('data-transition', inResult)
  timer.toggleAttribute('data-urgent', !inResult && progress <= .25)
  timerValue.textContent = inResult ? `${nextStepLabel} ${(remaining / 1000).toFixed(1)}s` : `${(remaining / 1000).toFixed(1)}s`
  const announcedSecond = Math.ceil(remaining / 1000)
  const announcementKey = `${inResult ? 'transition' : 'round'}-${announcedSecond}`
  if (timer.dataset.announcedSecond !== announcementKey) {
    timer.dataset.announcedSecond = announcementKey
    timer.setAttribute('aria-label', inResult ? `${nextStepLabel}还有 ${announcedSecond} 秒` : `剩余 ${announcedSecond} 秒`)
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
      if (question && !value.roundEnds?.[question.id] && bothPlayersAnswered(answers.length) && !earlyClosePending.has(question.id)) {
        earlyClosePending.add(question.id)
        void closeRoundEarly(code, question.id, identity.uid).catch(() => undefined).finally(() => earlyClosePending.delete(question.id))
      }
    }
    if (identity && value.metadata.hostUid === identity.uid && value.metadata.state === 'waiting' && !startRequested) {
      const players = Object.values(value.players ?? {})
      if (players.length === 2 && players.every((player) => player.ready && player.connected)) {
        startRequested = true
        void startMatch(code, identity.uid, serverOffset).catch(() => { startRequested = false; setNotice('无法开始对战，请双方重新按下准备。') })
      }
    }
    if (identity && value.metadata.hostUid === identity.uid && value.metadata.state === 'finished' && !rematchRequested) {
      const ids = Object.keys(value.players ?? {})
      if (ids.length === 2 && ids.every((uid) => value.rematchVotes?.[uid])) {
        rematchRequested = true
        void beginRematch(code, identity.uid, serverOffset).catch(() => { rematchRequested = false; setNotice('无法开始再战，请重新尝试。') })
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
    try {
      vocabularyDataset = await loadVocabularyLevel(config.level)
      await watchRoom(await createRoom(currentIdentity, config))
    }
    catch (error) { setNotice(error instanceof Error ? error.message : '无法建立房间，请稍后再试。') }
    finally { actionPending = false; render() }
  })
  root.querySelector<HTMLFormElement>('[data-join-form]')?.addEventListener('submit', async (event) => {
    event.preventDefault(); notice = ''
    const form = event.currentTarget as HTMLFormElement
    const currentIdentity = readIdentity(form); if (!currentIdentity) return
    const code = normalizeRoomCode(String(new FormData(form).get('code') ?? ''))
    if (code.length !== 6) { setNotice('请输入完整的 6 位房间码。'); return }
    actionPending = true; render()
    try {
      const joinedRoom = await joinRoom(code, currentIdentity)
      vocabularyDataset = await loadVocabularyLevel(joinedRoom.config.level)
      await watchRoom(code)
    }
    catch (error) { setNotice(error instanceof Error ? error.message : '无法加入房间，请检查房间码。') }
    finally { actionPending = false; render() }
  })
  root.querySelector<HTMLButtonElement>('[data-ready]')?.addEventListener('click', () => {
    if (identity && room) void setReady(roomCode, identity.uid, !room.players[identity.uid]?.ready).catch(() => setNotice('无法更新准备状态，请检查网络连接。'))
  })
  root.querySelectorAll<HTMLButtonElement>('[data-leave]').forEach((button) => button.addEventListener('click', async () => {
    if (identity && roomCode) await leaveRoom(roomCode, identity.uid).catch(() => undefined)
    roomUnsubscribe?.(); offsetUnsubscribe?.(); room = null; roomCode = ''; history.replaceState({}, '', SITE.routes.multiplayer); render()
  }))
  root.querySelector<HTMLButtonElement>('[data-copy]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget as HTMLButtonElement
    try { await navigator.clipboard.writeText(button.dataset.copy ?? roomCode); setNotice('房间码已复制。') }
    catch { setNotice('复制失败，请手动选择并复制房间码。') }
  })
  root.querySelector<HTMLButtonElement>('[data-share]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget as HTMLButtonElement
    const url = button.dataset.share ?? location.href
    try {
      if (navigator.share) await navigator.share({ title: '加入我的 VocabDuel 单词对战', url })
      else { await navigator.clipboard.writeText(url); setNotice('邀请链接已复制。') }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setNotice('无法分享邀请，请改为复制房间码。')
    }
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
      setNotice('答案提交失败，请检查网络连接。')
    })
  }))
  root.querySelector<HTMLButtonElement>('[data-speak]')?.addEventListener('click', (event) => {
    const button = event.currentTarget as HTMLButtonElement
    void speechService.speak(button.dataset.speak ?? '').then((result) => {
      if (!result.ok && !result.cancelled) setNotice(result.message ?? '此浏览器无法播放语音。')
    })
  })
  root.querySelector<HTMLButtonElement>('[data-rematch]')?.addEventListener('click', () => {
    if (!identity || rematchVotePending || room?.rematchVotes?.[identity.uid]) return
    rematchVotePending = true
    notice = ''
    render()
    void voteRematch(roomCode, identity.uid).catch(() => {
      rematchVotePending = false
      setNotice('再战请求失败，请检查网络后重试。')
    })
  })
}

document.addEventListener('keydown', (event) => {
  if (!room || !['countdown', 'playing'].includes(room.metadata.state) || !/^[1-4]$/.test(event.key)) return
  root.querySelectorAll<HTMLButtonElement>('[data-answer]')[Number(event.key) - 1]?.click()
})

async function initialize(): Promise<void> {
  if (!isFirebaseConfigured()) {
    root.innerHTML = `<section class="panel unavailable-panel"><p class="eyebrow">多人对战未连接</p><h2>暂时无法使用多人对战</h2><p>Firebase 环境变量尚未设定；单词学习和单人游戏仍可正常使用。</p><a class="button primary" href="${SITE.routes.play}">单人练习</a><p class="technical-note">开发者可按照 README 设定 Firebase 或本地模拟器。</p></section>`
    return
  }
  try {
    const uid = await authenticateGuest()
    identity = { uid, displayName: guestName(uid) }
    render()
    const invite = normalizeRoomCode(new URLSearchParams(location.search).get('room') ?? '')
    if (invite.length === 6) root.querySelector<HTMLInputElement>('[name="code"]')?.focus()
  } catch (error) {
    root.innerHTML = `<section class="panel unavailable-panel" role="alert"><h2>无法连接多人对战</h2><p>${escapeHtml(error instanceof Error ? error.message : '请稍后再试。')}</p><button class="button primary" data-retry>重新连接</button><a class="button ghost" href="${SITE.routes.play}">单人练习</a></section>`
    root.querySelector('[data-retry]')?.addEventListener('click', () => { location.reload() })
  }
}

window.addEventListener('beforeunload', () => { roomUnsubscribe?.(); offsetUnsubscribe?.(); if (tickHandle !== undefined) window.cancelAnimationFrame(tickHandle) })
void initialize()
