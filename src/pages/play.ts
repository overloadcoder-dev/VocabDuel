import '../styles/main.css'
import { announce, confirmAction } from '../components/feedback'
import { siteFooter, siteHeader } from '../components/site-shell'
import { SITE } from '../config'
import { loadVocabulary } from '../data'
import { answersMatch, calculateSoloQuestionScore, generateQuestions, SESSION_CONFIGS } from '../games'
import { progressRepository, recordWordResult } from '../storage'
import { speechService } from '../speech'
import { VOCABULARY_CATEGORIES } from '../types'
import type { GameQuestion, GameType, LocalProgress, SessionType, VocabularyCategory, VocabularyItem, VocabularyLevel } from '../types'

document.querySelector('#site-header')!.innerHTML = siteHeader('play')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const el = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector)!
const categorySelect = el<HTMLSelectElement>('#game-category')
VOCABULARY_CATEGORIES.forEach((category) => categorySelect.insertAdjacentHTML('beforeend', `<option>${category}</option>`))

let vocabulary: readonly VocabularyItem[] = []
let questions: GameQuestion[] = []
let gameType: GameType = 'meaning'
let sessionType: SessionType = 'practice'
let questionIndex = 0
let correctCount = 0
let score = 0
let lives = 3
let answered = false
let sessionStartedAt = 0
let questionStartedAt = 0
let endAt: number | undefined
let questionEndAt: number | undefined
let questionTimeLimitMs = 0
let feedbackPace: 'manual' | 'auto' = 'manual'
let timerFrame = 0
let lastRenderedTimerSecond = -1
let advanceHandle = 0
let replayCount = 0
let incorrectIds: string[] = []
let progressBefore: LocalProgress = progressRepository.load()

const gameLabels: Record<GameType, string> = { meaning: 'Meaning Match', reverse: 'Reverse Match', audio: 'Audio Challenge', spelling: 'Spell Rush', context: 'Context Challenge' }
const sessionLabels: Record<SessionType, string> = { practice: 'Practice', 'time-attack': 'Time Attack', survival: 'Survival', 'level-challenge': 'Level Challenge' }

function showScreen(name: 'setup' | 'game' | 'result'): void {
  el('#setup-screen').classList.toggle('hidden', name !== 'setup')
  el('#game-screen').classList.toggle('hidden', name !== 'game')
  el('#result-screen').classList.toggle('hidden', name !== 'result')
  if (name !== 'game') { cancelAnimationFrame(timerFrame); window.clearTimeout(advanceHandle) }
  const focusTarget = name === 'setup' ? document.querySelector<HTMLElement>('#setup-screen h1') : name === 'result' ? el('#result-title') : undefined
  if (focusTarget) { focusTarget.tabIndex = -1; focusTarget.focus({ preventScroll: true }) }
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

function createQuestionSet(count: number, level?: VocabularyLevel, category?: VocabularyCategory, ids?: string[]): GameQuestion[] {
  const matching = vocabulary.filter((word) => (!level || word.level === level) && (!category || word.categories.some((item) => item === category)))
  const prioritised = ids?.length ? matching.filter((word) => ids.includes(word.id)) : matching
  if (!prioritised.length) throw new Error('No vocabulary matches those filters.')
  const supplements = vocabulary.filter((word) => !prioritised.some((item) => item.id === word.id)).sort((a, b) => Math.abs(a.level - prioritised[0]!.level) - Math.abs(b.level - prioritised[0]!.level))
  const eligible = gameType === 'spelling' ? prioritised : [...prioritised, ...supplements].slice(0, Math.max(4, prioritised.length))
  const result: GameQuestion[] = []
  let round = 0
  while (result.length < count) {
    const amount = Math.min(count - result.length, eligible.length)
    const batch = generateQuestions({ gameType, questionCount: amount, seed: `${Date.now()}-${round}` }, eligible)
    result.push(...batch.map((question) => ({ ...question, id: `${question.id}-batch${round}` })))
    round += 1
  }
  return result
}

async function startGame(): Promise<void> {
  const selectedLevel = el<HTMLSelectElement>('#game-level').value
  const selectedCategory = categorySelect.value
  const ids = new URLSearchParams(location.search).get('words')?.split(',').filter(Boolean)
  const count = Number(el<HTMLSelectElement>('#question-total').value)
  questionTimeLimitMs = Number(el<HTMLSelectElement>('#question-timer').value)
  feedbackPace = el<HTMLSelectElement>('#feedback-pace').value === 'auto' ? 'auto' : 'manual'
  const level = selectedLevel === 'all' ? undefined : Number(selectedLevel) as VocabularyLevel
  const submit = el<HTMLButtonElement>('#game-setup button[type="submit"]')
  submit.disabled = true
  submit.setAttribute('aria-busy', 'true')
  try {
    const dataset = await loadVocabulary(ids?.length || !level ? undefined : [level])
    vocabulary = dataset.items
    questions = createQuestionSet(count, level, selectedCategory === 'all' ? undefined : selectedCategory as VocabularyCategory, ids)
  } catch (error) {
    announce(error instanceof Error ? error.message : 'Could not create this session.', 'error')
    return
  } finally {
    submit.disabled = false
    submit.removeAttribute('aria-busy')
  }
  questionIndex = 0; correctCount = 0; score = 0; lives = SESSION_CONFIGS.survival.lives ?? 3; incorrectIds = []; answered = false
  progressBefore = progressRepository.load(); sessionStartedAt = Date.now(); endAt = sessionType === 'time-attack' ? sessionStartedAt + (SESSION_CONFIGS['time-attack'].timeLimitMs ?? 60_000) : undefined
  el('#session-label').textContent = `${gameLabels[gameType]} · ${sessionLabels[sessionType]}`
  showScreen('game'); renderQuestion(); updateStats()
}

function renderQuestion(): void {
  const question = questions[questionIndex]
  if (!question) { finishGame(); return }
  answered = false; replayCount = 0; questionStartedAt = Date.now(); questionEndAt = questionTimeLimitMs ? questionStartedAt + questionTimeLimitMs : undefined
  el('#question-kind').textContent = gameType === 'audio' ? 'Press listen, then identify the word' : gameLabels[gameType]
  const prompt = el('#question-prompt')
  prompt.textContent = question.prompt
  prompt.lang = gameType === 'reverse' || gameType === 'spelling' ? 'zh-Hans' : 'en'
  prompt.classList.remove('blur-sm')
  el('#question-ipa').textContent = gameType === 'audio' ? 'The word stays hidden until you answer.' : question.ipa ?? ''
  const listen = el<HTMLButtonElement>('#listen-button'); listen.classList.toggle('hidden', gameType !== 'audio' && gameType !== 'spelling'); listen.disabled = false
  el('#replay-count').textContent = gameType === 'audio' ? '(3 plays left)' : ''
  const choices = el('#answer-choices'); choices.innerHTML = ''; choices.classList.toggle('hidden', !question.choices)
  question.choices?.forEach((choice, optionIndex) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'answer-option'; button.dataset.answer = choice.id
    button.innerHTML = `<span class="answer-key">${optionIndex + 1}</span><span>${choice.label}</span>`
    button.addEventListener('click', () => submitAnswer(choice.id, button)); choices.append(button)
  })
  const form = el<HTMLFormElement>('#spelling-form'); form.classList.toggle('hidden', gameType !== 'spelling')
  const input = el<HTMLInputElement>('#spelling-answer'); input.value = ''
  el('#answer-feedback').classList.add('hidden')
  if (gameType === 'spelling') window.setTimeout(() => input.focus(), 50)
  else window.setTimeout(() => { prompt.tabIndex = -1; prompt.focus({ preventScroll: true }) }, 50)
  updateStats(); startTimer()
}

function submitAnswer(value: string, selected?: HTMLButtonElement): void {
  if (answered) return
  const question = questions[questionIndex]; if (!question) return
  answered = true
  questionEndAt = undefined
  cancelAnimationFrame(timerFrame)
  const correct = gameType === 'spelling' ? answersMatch(value, question.correctAnswer) : value === question.correctAnswer
  const elapsed = Date.now() - questionStartedAt
  const earned = calculateSoloQuestionScore({ correct, elapsedMs: elapsed, timeLimitMs: questionTimeLimitMs }).total
  score += earned; correctCount += Number(correct)
  if (!correct) { lives -= Number(sessionType === 'survival'); incorrectIds.push(question.vocabularyId) }
  document.querySelectorAll<HTMLButtonElement>('#answer-choices button').forEach((button) => { button.disabled = true; if (button.dataset.answer === question.correctAnswer) button.dataset.state = 'correct' })
  if (!correct && selected) selected.dataset.state = 'wrong'
  const feedback = el('#answer-feedback'); feedback.className = `mt-6 rounded-2xl p-5 ${correct ? 'bg-mint text-success' : 'bg-red-50 text-danger'}`
  el('#feedback-title').textContent = correct ? `✓ Correct · +${earned} points` : `✕ Not quite · Correct: ${answerLabel(question)}`
  el('#feedback-explanation').textContent = question.explanation
  const continueButton = el<HTMLButtonElement>('#continue-button')
  const automatic = feedbackPace === 'auto' || sessionType === 'time-attack' || (sessionType === 'survival' && lives <= 0)
  continueButton.classList.toggle('hidden', automatic)
  if (!automatic) continueButton.focus({ preventScroll: true })
  else el('#answer-feedback').focus({ preventScroll: true })
  updateStats(); saveAnswer(question.vocabularyId, correct)
  if (sessionType === 'survival' && lives <= 0) advanceHandle = window.setTimeout(finishGame, 900)
  else if (automatic) advanceHandle = window.setTimeout(nextQuestion, sessionType === 'time-attack' ? 650 : 1000)
}

function answerLabel(question: GameQuestion): string { return question.choices?.find((choice) => choice.id === question.correctAnswer)?.label ?? question.correctAnswer }
function saveAnswer(wordId: string, correct: boolean): void {
  progressRepository.update((current) => ({ ...recordWordResult(current, wordId, correct), xp: current.xp + (correct ? 10 : 2) }))
}
function nextQuestion(): void { if (!answered) return; questionIndex += 1; if (questionIndex >= questions.length) finishGame(); else renderQuestion() }

function updateStats(): void {
  el('#score-display').textContent = `Score ${score}`
  el('#question-count').textContent = sessionType === 'time-attack' ? `${questionIndex + 1} answered at speed` : `Question ${Math.min(questionIndex + 1, questions.length)} / ${questions.length}`
  const progressValue = sessionType === 'time-attack' && endAt ? Math.max(0, (endAt - Date.now()) / 600) : questionIndex / questions.length * 100
  el('#game-progress').style.width = `${progressValue}%`
  el('#game-progress-track').setAttribute('aria-valuenow', String(Math.round(progressValue)))
  const livesDisplay = el('#lives-display'); livesDisplay.classList.toggle('hidden', sessionType !== 'survival'); livesDisplay.textContent = `Lives ${'♥'.repeat(Math.max(0, lives))}${'♡'.repeat(Math.max(0, 3 - lives))}`
}

function startTimer(): void {
  cancelAnimationFrame(timerFrame)
  lastRenderedTimerSecond = -1
  const timer = el('#timer-display')
  const deadline = [endAt, questionEndAt].filter((value): value is number => value !== undefined).sort((a, b) => a - b)[0]
  timer.classList.toggle('hidden', !deadline)
  if (!deadline) return
  const tick = (): void => {
    if (el('#game-screen').classList.contains('hidden') || answered) return
    const now = Date.now()
    const activeDeadline = [endAt, questionEndAt].filter((value): value is number => value !== undefined).sort((a, b) => a - b)[0]
    if (!activeDeadline) return
    const remaining = Math.max(0, activeDeadline - now)
    const displayedSecond = Math.ceil(remaining / 1000)
    if (displayedSecond !== lastRenderedTimerSecond) {
      lastRenderedTimerSecond = displayedSecond
      timer.textContent = `${displayedSecond}s`
      timer.setAttribute('aria-label', `${displayedSecond} seconds remaining`)
      updateStats()
    }
    if (remaining <= 0) {
      if (endAt !== undefined && endAt <= now) finishGame()
      else submitAnswer('')
      return
    }
    timerFrame = requestAnimationFrame(tick)
  }
  timerFrame = requestAnimationFrame(tick)
}

function finishGame(): void {
  if (el('#game-screen').classList.contains('hidden')) return
  cancelAnimationFrame(timerFrame)
  window.clearTimeout(advanceHandle)
  const attempted = Math.min(questionIndex + Number(answered), questions.length); const accuracy = attempted ? Math.round(correctCount / attempted * 100) : 0
  const passed = sessionType !== 'level-challenge' || accuracy >= (SESSION_CONFIGS['level-challenge'].passingScore ?? .8) * 100
  const current = progressRepository.update((saved) => ({ ...saved, bestTimeAttackScore: sessionType === 'time-attack' ? Math.max(saved.bestTimeAttackScore, score) : saved.bestTimeAttackScore, longestSurvivalRun: sessionType === 'survival' ? Math.max(saved.longestSurvivalRun, attempted) : saved.longestSurvivalRun }))
  el('#result-title').textContent = sessionType === 'level-challenge' ? (passed ? 'Challenge passed!' : 'Keep building') : sessionType === 'survival' && lives <= 0 ? 'Great run!' : 'Round complete!'
  el('#result-subtitle').textContent = sessionType === 'level-challenge' ? `${accuracy}% accuracy · ${passed ? 'Level cleared' : '80% needed to pass'}` : `You answered ${correctCount} of ${attempted} correctly.`
  el('#result-score').textContent = String(score); el('#result-accuracy').textContent = `${accuracy}%`; el('#result-xp').textContent = `+${Math.max(0, current.xp - progressBefore.xp)}`
  const uniqueWrong = [...new Set(incorrectIds)].map((id) => vocabulary.find((word) => word.id === id)).filter((word) => word !== undefined)
  el('#review-words').innerHTML = uniqueWrong.length ? `<h2 class="font-extrabold">Words to revisit</h2><div class="mt-3 flex flex-wrap gap-2">${uniqueWrong.map((word) => `<a class="tag hover:bg-brand-soft" href="${SITE.routes.learn}#${word.id}">${word.term} · ${word.chineseShort}</a>`).join('')}</div>` : '<p class="font-bold text-success">✓ No missed words in this round.</p>'
  showScreen('result')
}

function speakCurrent(): void {
  const question = questions[questionIndex]; if (!question?.audioTerm) return
  if (gameType === 'audio' && replayCount >= 3) { announce('You have used all three listens for this question.'); return }
  replayCount += 1; el('#replay-count').textContent = gameType === 'audio' ? `(${Math.max(0, 3 - replayCount)} plays left)` : ''
  void speechService.speak(question.audioTerm).then((result) => { if (!result.ok && !result.cancelled) announce(result.message ?? 'Speech playback is unavailable.', 'error') })
}

el<HTMLFormElement>('#game-setup').addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(el<HTMLFormElement>('#game-setup')); gameType = data.get('game-type') as GameType; sessionType = data.get('session-type') as SessionType; void startGame() })
el<HTMLFormElement>('#spelling-form').addEventListener('submit', (event) => { event.preventDefault(); submitAnswer(el<HTMLInputElement>('#spelling-answer').value) })
el('#listen-button').addEventListener('click', speakCurrent); el('#continue-button').addEventListener('click', nextQuestion); el('#play-again').addEventListener('click', () => showScreen('setup'))
el('#quit-game').addEventListener('click', async () => { if (await confirmAction({ title: 'Leave this session?', message: 'Answers already completed stay in your local progress, but this round will end.', confirmLabel: 'Leave session', danger: true })) { cancelAnimationFrame(timerFrame); showScreen('setup') } })
document.addEventListener('keydown', (event) => {
  if (el('#game-screen').classList.contains('hidden')) return
  const isTyping = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement
  if (!isTyping && ['1', '2', '3', '4'].includes(event.key)) document.querySelectorAll<HTMLButtonElement>('#answer-choices button')[Number(event.key) - 1]?.click()
  if (!isTyping && event.key === 'Enter' && answered) el<HTMLButtonElement>('#continue-button').click()
  if (event.key === 'Escape') el<HTMLButtonElement>('#quit-game').click()
})
const requestedIds = new URLSearchParams(location.search).get('words')?.split(',').filter(Boolean) ?? []
if (requestedIds.length) el('#setup-note').textContent = `Focused practice: ${requestedIds.length} selected word${requestedIds.length === 1 ? '' : 's'}.`
const requestedLevel = new URLSearchParams(location.search).get('level')
if (requestedLevel && /^[1-5]$/.test(requestedLevel)) el<HTMLSelectElement>('#game-level').value = requestedLevel
