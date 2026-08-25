import '../styles/main.css'
import { answerMarker, getAnswerState } from '../components/answer-state'
import { siteFooter, siteHeader } from '../components/site-shell'
import { currentLanguage } from '../config'
import { loadVocabularyLevel, type VocabularyDataset } from '../data'
import { generateQuestions } from '../games'
import type { GameQuestion } from '../types'

document.querySelector('#site-header')!.innerHTML = siteHeader('home')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const previewWord = document.querySelector<HTMLParagraphElement>('#preview-word')!
const previewIpa = document.querySelector<HTMLParagraphElement>('#preview-ipa')!
const previewOptions = document.querySelector<HTMLDivElement>('#preview-options')!
const feedback = document.querySelector<HTMLParagraphElement>('#preview-feedback')!
const previousButton = document.querySelector<HTMLButtonElement>('#preview-previous')!
const nextButton = document.querySelector<HTMLButtonElement>('#preview-next')!

let deck: GameQuestion[] = []
let vocabulary: VocabularyDataset | undefined
let deckIndex = 0
let answered = false
const selectedAnswers = new Map<number, string>()

function randomSeed(): number {
  return crypto.getRandomValues(new Uint32Array(1))[0] ?? Date.now()
}

function refillDeck(previousVocabularyId?: string): void {
  if (!vocabulary) throw new Error('Vocabulary is still loading.')
  deck = generateQuestions({ gameType: 'meaning', questionCount: vocabulary.items.length, seed: randomSeed(), language: currentLanguage() }, vocabulary.items)
  if (deck.length > 1 && deck[0]?.vocabularyId === previousVocabularyId) {
    ;[deck[0], deck[1]] = [deck[1]!, deck[0]!]
  }
  deckIndex = 0
  selectedAnswers.clear()
}

function currentQuestion(): GameQuestion {
  const question = deck[deckIndex]
  if (!question) throw new Error('The homepage question deck is empty.')
  return question
}

function renderQuestion(): void {
  const question = currentQuestion()
  const word = vocabulary?.byId.get(question.vocabularyId)
  const selectedAnswer = selectedAnswers.get(deckIndex)
  answered = selectedAnswer !== undefined
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
  previousButton.hidden = deckIndex === 0
  nextButton.hidden = !answered
  if (selectedAnswer) showAnswerReview(question, selectedAnswer)
}

function showAnswerReview(question: GameQuestion, selectedAnswer: string): void {
  const correctChoice = question.choices?.find((choice) => choice.id === question.correctAnswer)
  previewOptions.querySelectorAll<HTMLButtonElement>('button').forEach((button, index) => {
    const state = getAnswerState(button.dataset.answer ?? '', selectedAnswer, question.correctAnswer, true)
    button.disabled = true
    if (state) button.dataset.state = state
    const key = button.querySelector<HTMLElement>('.answer-key')
    if (key) key.textContent = answerMarker(state, index)
    const status = state === 'correct' ? ', correct answer' : state === 'wrong' ? ', your answer, incorrect' : ''
    const label = question.choices?.[index]?.label ?? button.textContent ?? ''
    button.setAttribute('aria-label', `${label}${status}`)
  })
  const correct = selectedAnswer === question.correctAnswer
  feedback.textContent = correct
    ? `✓ Correct — ${question.prompt} means ${correctChoice?.label ?? question.correctAnswer}.`
    : `✕ Not quite — ${question.prompt} means ${correctChoice?.label ?? question.correctAnswer}.`
  feedback.className = `mt-4 min-h-6 text-center text-sm font-bold ${correct ? 'text-success' : 'text-danger'}`
  nextButton.hidden = false
}

function showNextQuestion(): void {
  const previousVocabularyId = currentQuestion().vocabularyId
  deckIndex += 1
  if (deckIndex >= deck.length) refillDeck(previousVocabularyId)
  renderQuestion()
}

function showPreviousQuestion(): void {
  if (deckIndex === 0) return
  deckIndex -= 1
  renderQuestion()
}

function answerQuestion(selected: HTMLButtonElement): void {
  if (answered) return
  const question = currentQuestion()
  const selectedAnswer = selected.dataset.answer
  if (!selectedAnswer) return
  answered = true
  selectedAnswers.set(deckIndex, selectedAnswer)
  showAnswerReview(question, selectedAnswer)
}

previousButton.addEventListener('click', showPreviousQuestion)
nextButton.addEventListener('click', showNextQuestion)
void loadVocabularyLevel(4).then((dataset) => {
  vocabulary = dataset
  refillDeck()
  renderQuestion()
}).catch(() => {
  feedback.textContent = 'The vocabulary preview could not be loaded. Refresh to try again.'
  feedback.className = 'mt-4 min-h-6 text-center text-sm font-bold text-danger'
})
