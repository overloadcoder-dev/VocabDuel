import '../styles/main.css'
import { siteFooter, siteHeader } from '../components/site-shell'
import { SITE } from '../config'
import { vocabulary } from '../data'
import { getVocabularyLevelGuide } from '../data/vocabulary/levels'
import {
  createPlacementState,
  generateQuestions,
  PLACEMENT_QUESTION_COUNT,
  placementLevelForRating,
  recommendedPlacementLevel,
  recordPlacementAnswer,
} from '../games'
import type { PlacementState } from '../games'
import { progressRepository } from '../storage'
import type { GameQuestion, VocabularyLevel } from '../types'

document.querySelector('#site-header')!.innerHTML = siteHeader('placement')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const el = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector)!
let state: PlacementState = createPlacementState()
let question: GameQuestion | undefined
let answered = false
let usedIds = new Set<string>()
let seed = crypto.getRandomValues(new Uint32Array(1))[0] ?? Date.now()

function show(name: 'intro' | 'quiz' | 'result'): void {
  el('#placement-intro').classList.toggle('hidden', name !== 'intro')
  el('#placement-quiz').classList.toggle('hidden', name !== 'quiz')
  el('#placement-result').classList.toggle('hidden', name !== 'result')
  document.querySelector<HTMLElement>(name === 'quiz' ? '#placement-question' : name === 'result' ? '#placement-result-title' : '#start-placement')?.focus({ preventScroll: true })
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

function nextQuestion(): void {
  if (state.answered >= PLACEMENT_QUESTION_COUNT) { finish(); return }
  const level = placementLevelForRating(state.rating)
  const candidates = vocabulary.filter((item) => item.level === level && !usedIds.has(item.id))
  const source = candidates.length ? candidates : vocabulary.filter((item) => item.level === level)
  const target = source[(seed + state.answered * 997) % source.length]
  if (!target) throw new Error(`No vocabulary is available for Level ${level}.`)
  question = generateQuestions({ gameType: 'meaning', vocabularyIds: [target.id], questionCount: 1, seed: `${seed}-${state.answered}` }, vocabulary)[0]
  usedIds.add(target.id)
  answered = false
  renderQuestion(level)
}

function renderQuestion(level: VocabularyLevel): void {
  if (!question?.choices) return
  el('#placement-level').textContent = `Adaptive difficulty · Level ${level}`
  el('#placement-question').textContent = question.prompt
  el('#placement-progress-text').textContent = `Question ${state.answered + 1} of ${PLACEMENT_QUESTION_COUNT}`
  const progress = el('#placement-progress')
  progress.setAttribute('aria-valuenow', String(state.answered))
  progress.querySelector<HTMLElement>('.progress-fill')!.style.width = `${state.answered / PLACEMENT_QUESTION_COUNT * 100}%`
  const answers = el('#placement-answers'); answers.innerHTML = ''
  question.choices.forEach((choice, index) => {
    const button = document.createElement('button')
    button.type = 'button'; button.className = 'answer-option'; button.dataset.answer = choice.id
    button.innerHTML = `<span class="answer-key">${index + 1}</span><span>${choice.label}</span>`
    button.addEventListener('click', () => answer(choice.id, button)); answers.append(button)
  })
  el('#placement-feedback').classList.add('hidden')
  answers.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true })
}

function answer(value: string, selected: HTMLButtonElement): void {
  if (answered || !question) return
  answered = true
  const correct = value === question.correctAnswer
  state = recordPlacementAnswer(state, correct)
  document.querySelectorAll<HTMLButtonElement>('#placement-answers button').forEach((button) => {
    button.disabled = true
    if (button.dataset.answer === question?.correctAnswer) button.dataset.state = 'correct'
  })
  if (!correct) selected.dataset.state = 'wrong'
  const feedback = el('#placement-feedback')
  feedback.className = `mt-5 rounded-2xl p-5 ${correct ? 'bg-mint text-success' : 'bg-red-50 text-danger'}`
  el('#placement-feedback-title').textContent = correct ? '✓ Correct' : '✕ Not quite'
  el('#placement-feedback-copy').textContent = question.explanation
  const next = el<HTMLButtonElement>('#placement-next')
  next.textContent = state.answered === PLACEMENT_QUESTION_COUNT ? 'See my suggested level →' : 'Next question →'
  next.focus({ preventScroll: true })
}

function finish(): void {
  const level = recommendedPlacementLevel(state)
  const guide = getVocabularyLevelGuide(level)!
  progressRepository.update((current) => ({ ...current, preferredLevel: level, unlockedLevels: [...new Set([...current.unlockedLevels, level])] }))
  el('#placement-result-title').textContent = `Level ${level} · ${guide.label}`
  el('#placement-result-range').textContent = `${guide.cefr.join('–')} · Approx. ${guide.approximateIelts}`
  el('#placement-result-copy').textContent = guide.classification
  el('#placement-result-score').textContent = `${state.correct} of ${PLACEMENT_QUESTION_COUNT} correct · Recommendation saved on this device`
  el<HTMLAnchorElement>('#placement-practice').href = `${SITE.routes.play}?level=${level}`
  show('result')
}

function start(): void {
  state = createPlacementState(); answered = false; usedIds = new Set(); seed = crypto.getRandomValues(new Uint32Array(1))[0] ?? Date.now()
  show('quiz'); nextQuestion()
}

el('#start-placement').addEventListener('click', start)
el('#restart-placement').addEventListener('click', start)
el('#retake-placement').addEventListener('click', start)
el('#placement-next').addEventListener('click', nextQuestion)
document.addEventListener('keydown', (event) => {
  if (el('#placement-quiz').classList.contains('hidden')) return
  if (!answered && /^[1-4]$/.test(event.key)) document.querySelectorAll<HTMLButtonElement>('#placement-answers button')[Number(event.key) - 1]?.click()
  if (answered && event.key === 'Enter') el<HTMLButtonElement>('#placement-next').click()
})
