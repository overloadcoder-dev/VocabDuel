import '../styles/main.css'
import { SITE } from '../config'
import { generateQuestions, calculateScore } from '../games'
import type { GameQuestion, VocabularyCategory } from '../types'
import { authenticateGuest, isFirebaseConfigured } from './firebase/client'
import {
  beginRematch,
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
import { remainingRoundMs, roundWindow, synchronizedNow } from './time'
import type { MultiplayerIdentity, RoomConfig, RoomRecord } from './types'
import { normalizeRoomCode, sanitizeNickname, validateNickname } from './validation'

const rootElement = document.querySelector<HTMLElement>('#multiplayer-app')
if (!rootElement) throw new Error('Multiplayer root is missing.')
const root: HTMLElement = rootElement

const resultTimeMs = 1_800
const disconnectGraceMs = 30_000
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
let notice = ''

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
  return { level: 3, category: 'All', gameType: 'meaning', questionCount: 5, roundTimeMs: 10_000 }
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
        <div class="form-row"><label>题数<select name="questionCount"><option>5</option><option>10</option><option>15</option></select></label><label>每题时间<select name="roundTime"><option value="10000">10 秒</option><option value="15000">15 秒</option><option value="20000">20 秒</option></select></label></div>
        <button class="button primary" type="submit" ${actionPending ? 'disabled' : ''}>${actionPending ? '创建中…' : '创建房间'}</button>
      </form>
      <form class="panel multiplayer-form" data-join-form>
        <h2>加入好友房间</h2>
        <label>昵称<input name="nickname" minlength="2" maxlength="16" value="${escapeHtml(identity?.displayName ?? '')}" required></label>
        <label>六位房间码<input name="code" inputmode="text" autocomplete="off" maxlength="6" placeholder="K7PM42" value="${escapeHtml(new URLSearchParams(location.search).get('room') ?? '')}" required></label>
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
    const window = roundWindow(current.match.startAt, index, current.config.roundTimeMs, resultTimeMs)
    const isCorrect = answer.selectedAnswer === question.correctAnswer
    if (isCorrect) correct += 1
    const elapsed = Math.max(0, Math.min(current.config.roundTimeMs, answer.submittedAt - window.roundStartAt))
    totalTime += elapsed
    score += calculateScore({ correct: isCorrect, timeRemainingMs: current.config.roundTimeMs - elapsed, roundDurationMs: current.config.roundTimeMs }).total
  })
  return { score, correct, totalTime }
}

function gameTemplate(current: RoomRecord): string {
  if (!current.match || !identity) return '<div class="panel"><p>正在同步比赛时间…</p></div>'
  const now = synchronizedNow(serverOffset)
  const untilStart = current.match.startAt - now
  if (untilStart > 0) {
    const count = Math.ceil(untilStart / 1000)
    return `<section class="panel countdown-panel" aria-live="assertive"><p>双方已准备</p><div class="countdown-number">${count > 3 ? 'READY' : count}</div><p>保持专注，比赛马上开始</p></section>`
  }
  const questions = questionsFor(current)
  const span = current.config.roundTimeMs + resultTimeMs
  const index = Math.floor((now - current.match.startAt) / span)
  if (index >= questions.length) {
    if (current.metadata.hostUid === identity.uid && current.metadata.state !== 'finished') void finishMatch(roomCode, identity.uid)
    return '<section class="panel loading-panel"><span class="spinner" aria-hidden="true"></span><p>正在核对最终比分…</p></section>'
  }
  if (current.metadata.hostUid === identity.uid && current.metadata.state === 'countdown') void markPlaying(roomCode, identity.uid)
  const question = questions[index]
  if (!question) return '<div class="panel"><p>题目生成失败。</p></div>'
  const window = roundWindow(current.match.startAt, index, current.config.roundTimeMs, resultTimeMs)
  const inResult = now >= window.roundEndAt
  const answer = current.answers?.[question.id]?.[identity.uid]
  const opponent = Object.values(current.players).find((player) => player.uid !== identity?.uid)
  const opponentAnswer = opponent ? current.answers?.[question.id]?.[opponent.uid] : undefined
  const reconnectRemaining = opponent && !opponent.connected ? Math.max(0, disconnectGraceMs - (now - opponent.lastSeenAt)) : 0
  if (opponent && !opponent.connected && reconnectRemaining <= 0) {
    return `<section class="panel unavailable-panel"><p class="eyebrow">MATCH PAUSED</p><h2>对手已离开比赛</h2><p>等待 30 秒后仍未恢复连接。本局不再继续计分。</p><button class="button primary" data-leave>返回多人菜单</button><a class="button ghost" href="${SITE.routes.play}">玩单人模式</a></section>`
  }
  const mine = scoreFor(identity.uid, current, questions)
  const theirs = opponent ? scoreFor(opponent.uid, current, questions) : { score: 0, correct: 0, totalTime: 0 }
  const remaining = remainingRoundMs(window.roundEndAt, serverOffset)
  const correctLabel = question.choices?.find((choice) => choice.id === question.correctAnswer)?.label ?? question.correctAnswer
  const acceptingAnswers = current.metadata.state === 'playing'
  return `<section class="panel battle-panel">
    <div class="battle-meta"><span>Level ${current.config.level}</span><span>第 ${index + 1} / ${questions.length} 题</span></div>
    <div class="timer" role="timer" aria-label="剩余 ${(remaining / 1000).toFixed(1)} 秒"><span style="--progress:${remaining / current.config.roundTimeMs}"></span>${(remaining / 1000).toFixed(1)}s</div>
    ${question.gameType === 'audio' ? `<p class="question-kicker">听音辨词</p><button class="audio-orb" data-speak="${escapeHtml(question.audioTerm ?? '')}" aria-label="播放单词发音">▶</button>` : `<p class="question-kicker">选择正确答案</p><h2 class="battle-question">${escapeHtml(question.prompt)}</h2>`}
    ${inResult ? `<div class="round-result ${answer?.selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}"><strong>${answer?.selectedAnswer === question.correctAnswer ? '✓ 回答正确' : '✕ 正确答案'}</strong><p>${escapeHtml(correctLabel)}</p><small>${escapeHtml(question.explanation)}</small></div>` : `<div class="answer-grid">${question.choices?.map((choice, choiceIndex) => `<button class="answer-button" data-answer="${choice.id}" ${answer || !acceptingAnswers ? 'disabled' : ''}><span>${choiceIndex + 1}</span>${escapeHtml(choice.label)}</button>`).join('') ?? ''}</div>`}
    <p class="opponent-status">${opponent && !opponent.connected ? `对手正在重连… ${Math.ceil(reconnectRemaining / 1000)}s` : opponentAnswer ? '✓ 对手已作答' : '对手正在思考…'}</p>
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
  const voted = Boolean(current.rematchVotes?.[identity.uid])
  const opponentAvailable = Boolean(opponent?.connected)
  return `<section class="panel results-panel"><p class="eyebrow">MATCH COMPLETE</p><h2>${verdict}</h2>
    <div class="final-score"><strong>${mine.score}</strong><span>—</span><strong>${theirs.score}</strong></div>
    <div class="result-stats"><p><span>正确率</span><strong>${Math.round(mine.correct / questions.length * 100)}%</strong></p><p><span>答对</span><strong>${mine.correct}/${questions.length}</strong></p><p><span>平均用时</span><strong>${mine.correct ? (mine.totalTime / Math.max(1, Object.keys(current.answers ?? {}).length) / 1000).toFixed(1) : '—'}s</strong></p></div>
    ${wrong.length ? `<details><summary>复习错词 (${wrong.length})</summary><ul>${wrong.map((question) => `<li>${escapeHtml(question.explanation)}</li>`).join('')}</ul></details>` : '<p>全对！这组词掌握得很好。</p>'}
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

async function watchRoom(code: string): Promise<void> {
  roomUnsubscribe?.()
  offsetUnsubscribe?.()
  roomCode = code
  history.replaceState({}, '', `${SITE.routes.multiplayer}?room=${code}`)
  offsetUnsubscribe = await observeServerOffset((value) => { serverOffset = value })
  roomUnsubscribe = await subscribeRoom(code, (value) => {
    room = value
    if (!value) { roomCode = ''; history.replaceState({}, '', SITE.routes.multiplayer); setNotice('房间已关闭。'); return }
    if (value.metadata.state !== 'waiting') startRequested = false
    if (value.metadata.state !== 'finished') rematchRequested = false
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
  window.clearInterval(tickHandle)
  tickHandle = window.setInterval(() => { if (room && ['countdown', 'playing'].includes(room.metadata.state)) render() }, 150)
}

function bindActions(): void {
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
    const index = Math.floor((synchronizedNow(serverOffset) - room.match.startAt) / (room.config.roundTimeMs + resultTimeMs))
    const question = questions[index]
    if (!question) return
    root.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach((item) => { item.disabled = true })
    void submitAnswer(roomCode, question.id, identity.uid, button.dataset.answer ?? '').catch(() => setNotice('答案提交失败，请检查连接。'))
  }))
  root.querySelector<HTMLButtonElement>('[data-speak]')?.addEventListener('click', (event) => {
    if (!('speechSynthesis' in window)) { setNotice('此浏览器不支持语音播放。'); return }
    const button = event.currentTarget as HTMLButtonElement
    const utterance = new SpeechSynthesisUtterance(button.dataset.speak ?? '')
    utterance.lang = 'en-US'; speechSynthesis.cancel(); speechSynthesis.speak(utterance)
  })
  root.querySelector<HTMLButtonElement>('[data-rematch]')?.addEventListener('click', () => { if (identity) void voteRematch(roomCode, identity.uid) })
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

window.addEventListener('beforeunload', () => { roomUnsubscribe?.(); offsetUnsubscribe?.(); window.clearInterval(tickHandle) })
void initialize()
