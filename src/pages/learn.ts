import '../styles/main.css'
import { announce, confirmAction } from '../components/feedback'
import { siteFooter, siteHeader } from '../components/site-shell'
import { SITE } from '../config'
import { vocabulary, vocabularyCategories } from '../data'
import { progressRepository, rankWeakWords, setWordStatus } from '../storage'
import { speechService } from '../speech'
import type { LocalProgress, VocabularyItem } from '../types'

document.querySelector('#site-header')!.innerHTML = siteHeader('learn')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

let study: LocalProgress = progressRepository.load()
let filtered: readonly VocabularyItem[] = vocabulary
let index = 0

const element = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector)!
const search = element<HTMLInputElement>('#word-search')
const level = element<HTMLSelectElement>('#level-filter')
const category = element<HTMLSelectElement>('#category-filter')
vocabularyCategories.forEach((name) => category.insertAdjacentHTML('beforeend', `<option value="${name}">${name}</option>`))

const tags = (values?: readonly string[]) => values?.length ? values.map((value) => `<span class="tag">${value}</span>`).join('') : '<span class="text-sm text-muted">—</span>'

function render(): void {
  const word = filtered[index]
  element('#word-card').classList.toggle('hidden', !word)
  element('#empty-state').classList.toggle('hidden', Boolean(word))
  if (!word) return
  element('#word-term').textContent = word.term
  element('#word-ipa').textContent = word.ipa ?? 'Pronunciation guide unavailable'
  element('#word-pos').textContent = word.partOfSpeech.join(' · ')
  element('#word-short').textContent = word.chineseShort
  element('#word-explanation').textContent = word.chineseExplanation
  element('#word-definition').textContent = word.englishDefinition
  element('#word-example').textContent = word.examples[0]?.english ?? '—'
  element('#word-example-cn').textContent = word.examples[0]?.chinese ?? ''
  element('#word-level').textContent = `Level ${word.level}`
  const cefr = element('#word-cefr'); cefr.textContent = word.cefr ?? ''; cefr.classList.toggle('hidden', !word.cefr)
  element('#word-collocations').innerHTML = tags(word.collocations)
  element('#word-synonyms').innerHTML = tags(word.synonyms)
  element('#word-antonyms').innerHTML = tags(word.antonyms)
  element('#word-categories').innerHTML = tags(word.categories)
  element('#word-position').textContent = `${index + 1} of ${filtered.length}`
  const learned = element<HTMLButtonElement>('#learned-word'); learned.setAttribute('aria-pressed', String(study.learnedWords.includes(word.id))); learned.textContent = study.learnedWords.includes(word.id) ? '✓ Learned' : '○ Mark learned'; learned.classList.toggle('button-quiet', study.learnedWords.includes(word.id))
  const difficult = element<HTMLButtonElement>('#difficult-word'); difficult.setAttribute('aria-pressed', String(study.difficultWords.includes(word.id))); difficult.textContent = study.difficultWords.includes(word.id) ? '★ Difficult' : '☆ Difficult'; difficult.classList.toggle('button-quiet', study.difficultWords.includes(word.id))
  element<HTMLAnchorElement>('#practice-word').href = `${SITE.routes.play}?words=${encodeURIComponent(word.id)}`
  element<HTMLButtonElement>('#previous-word').disabled = filtered.length < 2
  element<HTMLButtonElement>('#next-word').disabled = filtered.length < 2
  history.replaceState(null, '', `#${word.id}`)
  updateWeakCount()
}

function toggle(status: 'learned' | 'difficult'): void {
  const word = filtered[index]; if (!word) return
  const current = status === 'learned' ? study.learnedWords : study.difficultWords
  study = setWordStatus(study, word.id, status, !current.includes(word.id))
  progressRepository.save(study); render(); announce(status === 'learned' ? 'Learning status saved on this device.' : 'Difficult-word list updated.', 'success')
}
function updateWeakCount(): void { element('#weak-count').textContent = String(rankWeakWords(study).length) }
function applyFilters(): void {
  const query = search.value.trim().toLocaleLowerCase()
  filtered = vocabulary.filter((word) => (level.value === 'all' || String(word.level) === level.value) && (category.value === 'all' || word.categories.includes(category.value as never)) && (!query || `${word.term} ${word.chineseShort} ${word.englishDefinition}`.toLocaleLowerCase().includes(query)))
  index = 0; render()
}
async function speak(speed: 'normal' | 'slow'): Promise<void> {
  const word = filtered[index]; if (!word) return
  const result = await speechService.speak(word.term, { speed }); if (!result.ok) announce(result.message ?? 'Pronunciation could not be played.', 'error')
}

search.addEventListener('input', applyFilters); level.addEventListener('change', applyFilters); category.addEventListener('change', applyFilters)
element('#clear-filters').addEventListener('click', () => { search.value = ''; level.value = 'all'; category.value = 'all'; applyFilters(); search.focus() })
element('#previous-word').addEventListener('click', () => { index = (index - 1 + filtered.length) % filtered.length; render() })
element('#next-word').addEventListener('click', () => { index = (index + 1) % filtered.length; render() })
element('#random-word').addEventListener('click', () => { if (filtered.length > 1) index = (index + 1 + Math.floor(Math.random() * (filtered.length - 1))) % filtered.length; render() })
element('#learned-word').addEventListener('click', () => toggle('learned')); element('#difficult-word').addEventListener('click', () => toggle('difficult'))
element('#speak-word').addEventListener('click', () => { void speak('normal') }); element('#slow-word').addEventListener('click', () => { void speak('slow') })
element<HTMLButtonElement>('#weak-practice').addEventListener('click', () => { const weak = rankWeakWords(study); if (!weak.length) announce('Mark difficult words or complete a few quizzes first.'); else location.href = `${SITE.routes.play}?words=${weak.join(',')}` })
element('#progress-button').addEventListener('click', async () => { const accuracy = study.totalQuestionsAttempted ? Math.round(study.correctAnswers / study.totalQuestionsAttempted * 100) : 0; if (await confirmAction({ title: 'Local progress', message: `${study.learnedWords.length} learned · ${study.difficultWords.length} difficult · ${accuracy}% quiz accuracy. Reset all local progress?`, confirmLabel: 'Reset progress', danger: true })) { study = progressRepository.reset(); render(); announce('Local progress has been reset.', 'success') } })
const hashId = decodeURIComponent(location.hash.slice(1)); const hashIndex = vocabulary.findIndex((word) => word.id === hashId); if (hashIndex >= 0) index = hashIndex
render()
