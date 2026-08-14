import '../styles/main.css'
import { siteFooter, siteHeader } from '../components/site-shell'
import { getVocabularyById, vocabulary } from '../data'
import { generateQuestions } from '../games'
import type { GameQuestion } from '../types'

document.querySelector('#site-header')!.innerHTML = siteHeader('home')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const previewWord = document.querySelector<HTMLParagraphElement>('#preview-word')!
const previewIpa = document.querySelector<HTMLParagraphElement>('#preview-ipa')!
const previewOptions = document.querySelector<HTMLDivElement>('#preview-options')!
const feedback = document.querySelector<HTMLParagraphElement>('#preview-feedback')!
const nextButton = document.querySelector<HTMLButtonElement>('#preview-next')!

let deck: GameQuestion[] = []
let deckIndex = 0
let answered = false
let advanceTimer: number | undefined

function randomSeed(): number {
  return crypto.getRandomValues(new Uint32Array(1))[0] ?? Date.now()
}

function refillDeck(previousVocabularyId?: string): void {
  deck = generateQuestions({ gameType: 'meaning', questionCount: vocabulary.length, seed: randomSeed() })
  if (deck.length > 1 && deck[0]?.vocabularyId === previousVocabularyId) {
    ;[deck[0], deck[1]] = [deck[1]!, deck[0]!]
  }
  deckIndex = 0
}

function currentQuestion(): GameQuestion {
  const question = deck[deckIndex]
  if (!question) throw new Error('The homepage question deck is empty.')
  return question
}

function renderQuestion(): void {
  const question = currentQuestion()
  const word = getVocabularyById(question.vocabularyId)
  answered = false
  previewWord.textContent = question.prompt
  previewIpa.textContent = word?.ipa ?? 'Pronunciation guide unavailable'
  previewOptions.replaceChildren()
  question.choices?.forEach((choice, index) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'answer-option'
    button.dataset.answer = choice.id
    const key = document.createElement('span')
    key.className = 'answer-key'
    key.textContent = String(index + 1)
    const label = document.createElement('span')
    label.textContent = choice.label
    button.append(key, label)
    button.addEventListener('click', () => answerQuestion(button))
    previewOptions.append(button)
  })
  feedback.textContent = 'Choose the matching meaning.'
  feedback.className = 'mt-4 min-h-6 text-center text-sm font-bold text-muted'
  nextButton.hidden = true
}

function showNextQuestion(): void {
  window.clearTimeout(advanceTimer)
  const previousVocabularyId = currentQuestion().vocabularyId
  deckIndex += 1
  if (deckIndex >= deck.length) refillDeck(previousVocabularyId)
  renderQuestion()
}

function answerQuestion(selected: HTMLButtonElement): void {
  if (answered) return
  answered = true
  const question = currentQuestion()
  const correctChoice = question.choices?.find((choice) => choice.id === question.correctAnswer)
  previewOptions.querySelectorAll<HTMLButtonElement>('button').forEach((button) => {
    button.disabled = true
    if (button.dataset.answer === question.correctAnswer) button.dataset.state = 'correct'
  })
  const correct = selected.dataset.answer === question.correctAnswer
  if (!correct) selected.dataset.state = 'wrong'
  feedback.textContent = correct
    ? `✓ Correct — ${question.prompt} means ${correctChoice?.label ?? question.correctAnswer}.`
    : `✕ Not quite — ${question.prompt} means ${correctChoice?.label ?? question.correctAnswer}.`
  feedback.className = `mt-4 min-h-6 text-center text-sm font-bold ${correct ? 'text-success' : 'text-danger'}`
  nextButton.hidden = false
  advanceTimer = window.setTimeout(showNextQuestion, 3200)
}

nextButton.addEventListener('click', showNextQuestion)
refillDeck()
renderQuestion()
