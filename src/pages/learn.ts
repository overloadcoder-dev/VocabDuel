import '../styles/main.css'
import { announce, confirmAction } from '../components/feedback'
import { siteFooter, siteHeader } from '../components/site-shell'
import { currentLanguage, SITE, sitePath } from '../config'
import { loadAllVocabulary, vocabularyExample, vocabularyExplanation } from '../data'
import { matchesVocabularyTerm } from '../data/search-vocabulary'
import { vocabularyWordSlug } from '../data/word-slug'
import { progressRepository, rankWeakWords, setWordStatus } from '../storage'
import { isSpeechRate, speechService } from '../speech'
import { VOCABULARY_CATEGORIES } from '../types'
import type { LocalProgress, VocabularyItem } from '../types'

interface LearnPreferences { level: string; category: string; query: string; bookmarks: string[]; recent: string[] }

const PREFERENCES_KEY = 'vocabduel.learn.preferences.v1'
const RESULT_STEP = 36
const language = currentLanguage()

document.querySelector('#site-header')!.innerHTML = siteHeader('learn')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

let study: LocalProgress = progressRepository.load()
let vocabulary: readonly VocabularyItem[] = []
let filtered: readonly VocabularyItem[] = []
let index = 0
let visibleResults = RESULT_STEP
let loading = false
let preferences = loadPreferences()

const element = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector)!
const level = element<HTMLSelectElement>('#level-filter')
const category = element<HTMLSelectElement>('#category-filter')
const termSearch = element<HTMLInputElement>('#term-search-input')
const searchForm = element<HTMLFormElement>('#vocabulary-search')
const filterToggle = element<HTMLButtonElement>('#filter-toggle')
const filters = element<HTMLElement>('#vocabulary-filters')
const pronunciationSpeed = element<HTMLSelectElement>('#pronunciation-speed')

pronunciationSpeed.value = String(study.audioSpeed)
VOCABULARY_CATEGORIES.forEach((name) => category.insertAdjacentHTML('beforeend', `<option value="${name}">${name}</option>`))
level.value = preferences.level
category.value = preferences.category
termSearch.value = preferences.query

function loadPreferences(): LearnPreferences {
  const defaults: LearnPreferences = { level: 'all', category: 'all', query: '', bookmarks: [], recent: [] }
  try {
    const stored = JSON.parse(localStorage.getItem(PREFERENCES_KEY) ?? '') as Partial<LearnPreferences>
    return {
      level: ['all', '1', '2', '3', '4', '5'].includes(stored.level ?? '') ? stored.level! : defaults.level,
      category: stored.category === 'all' || VOCABULARY_CATEGORIES.includes(stored.category as never) ? stored.category! : defaults.category,
      query: typeof stored.query === 'string' ? stored.query.slice(0, 80) : '',
      bookmarks: Array.isArray(stored.bookmarks) ? stored.bookmarks.filter((value): value is string => typeof value === 'string').slice(-100) : [],
      recent: Array.isArray(stored.recent) ? stored.recent.filter((value): value is string => typeof value === 'string').slice(-12) : [],
    }
  } catch { return defaults }
}

function savePreferences(): void {
  try { localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences)) } catch { /* Storage can be unavailable. */ }
}

const wordPath = (word: VocabularyItem) => sitePath(`/words/${encodeURIComponent(vocabularyWordSlug(word.id))}/`)

function escapeHtml(value: string): string {
  const node = document.createElement('div')
  node.textContent = value
  return node.innerHTML
}

function relatedTags(values?: readonly string[]): string {
  if (!values?.length) return '<span class="text-sm text-muted">—</span>'
  return values.map((value) => {
    const related = vocabulary.find((word) => word.normalizedTerm === value.trim().toLocaleLowerCase())
    return related ? `<a class="tag" href="${wordPath(related)}" data-word-id="${escapeHtml(related.id)}">${escapeHtml(value)}</a>` : `<span class="tag">${escapeHtml(value)}</span>`
  }).join('')
}

function recordRecent(word: VocabularyItem): void {
  const next = [...preferences.recent.filter((id) => id !== word.id), word.id].slice(-12)
  if (next.join('|') === preferences.recent.join('|')) return
  preferences = { ...preferences, recent: next }
  savePreferences()
}

function savedLinks(ids: readonly string[], emptyCopy: string): string {
  const words = [...ids].reverse().map((id) => vocabulary.find((word) => word.id === id)).filter((word): word is VocabularyItem => Boolean(word))
  return words.length ? words.map((word) => `<a class="tag" href="${wordPath(word)}" data-word-id="${escapeHtml(word.id)}">${escapeHtml(word.term)}</a>`).join('') : `<span class="text-sm text-muted">${emptyCopy}</span>`
}

function renderBrowser(): void {
  const browser = element('#word-browser')
  browser.classList.toggle('hidden', !filtered.length)
  if (!filtered.length) return
  const shown = filtered.slice(0, visibleResults)
  element('#result-summary').textContent = `Showing ${shown.length} of ${filtered.length} matching terms.`
  element('#search-results').innerHTML = shown.map((word) => `<a class="learn-result-link" role="listitem" href="${wordPath(word)}" data-word-id="${escapeHtml(word.id)}" ${word.id === filtered[index]?.id ? 'aria-current="true"' : ''}><strong>${escapeHtml(word.term)}</strong><small>Level ${word.level}</small></a>`).join('')
  element('#show-more-results').classList.toggle('hidden', shown.length >= filtered.length)
  element('#recent-words').innerHTML = savedLinks(preferences.recent, 'Words you open will appear here.')
  element('#bookmarked-words').innerHTML = savedLinks(preferences.bookmarks, 'Bookmark a word to keep it close.')
}

function render(): void {
  const word = filtered[index]
  element('#learn-loading').classList.add('hidden')
  element('#word-card').classList.toggle('hidden', !word)
  element('#empty-state').classList.toggle('hidden', Boolean(word) || loading)
  renderBrowser()
  if (!word) return
  recordRecent(word)
  element('#word-term').textContent = word.term
  element('#word-ipa').textContent = word.ipa ?? 'Pronunciation guide unavailable'
  element('#word-pos').textContent = word.partOfSpeech.join(' · ')
  const wordShort = element('#word-short')
  wordShort.textContent = language === 'zh' ? word.chineseShort : language === 'ms' ? word.examples[0]?.malay ?? '' : ''
  wordShort.hidden = language === 'en'
  wordShort.lang = language === 'zh' ? 'zh-Hans' : language === 'ms' ? 'ms-MY' : 'en-GB'
  element('#word-explanation').textContent = vocabularyExplanation(word, language)
  element('#word-definition').textContent = word.englishDefinition
  element('#word-example').textContent = word.examples[0]?.english ?? '—'
  const localisedExample = element('#word-example-cn')
  localisedExample.textContent = language === 'en' ? '' : vocabularyExample(word, language)
  localisedExample.hidden = language === 'en'
  localisedExample.lang = language === 'zh' ? 'zh-Hans' : 'ms-MY'
  const localisedExplanation = element('#word-localised-explanation')
  localisedExplanation.hidden = language === 'en'
  localisedExplanation.lang = language === 'zh' ? 'zh-Hans' : 'ms-MY'
  element('#word-level').textContent = `Level ${word.level}`
  const cefr = element('#word-cefr'); cefr.textContent = word.cefr ?? ''; cefr.classList.toggle('hidden', !word.cefr)
  element('#word-collocations').innerHTML = relatedTags(word.collocations)
  element('#word-synonyms').innerHTML = relatedTags(word.synonyms)
  element('#word-antonyms').innerHTML = relatedTags(word.antonyms)
  element('#word-categories').innerHTML = relatedTags(word.categories)
  element('#word-position').textContent = `${index + 1} of ${filtered.length}`
  const learned = element<HTMLButtonElement>('#learned-word'); learned.setAttribute('aria-pressed', String(study.learnedWords.includes(word.id))); learned.textContent = study.learnedWords.includes(word.id) ? '✓ Learned' : '○ Mark learned'; learned.classList.toggle('button-quiet', study.learnedWords.includes(word.id))
  const difficult = element<HTMLButtonElement>('#difficult-word'); difficult.setAttribute('aria-pressed', String(study.difficultWords.includes(word.id))); difficult.textContent = study.difficultWords.includes(word.id) ? '★ Difficult' : '☆ Difficult'; difficult.classList.toggle('button-quiet', study.difficultWords.includes(word.id))
  const isBookmarked = preferences.bookmarks.includes(word.id)
  const bookmark = element<HTMLButtonElement>('#bookmark-word'); bookmark.setAttribute('aria-pressed', String(isBookmarked)); bookmark.textContent = isBookmarked ? '★ Bookmarked' : '☆ Bookmark'; bookmark.classList.toggle('button-quiet', isBookmarked)
  element<HTMLAnchorElement>('#practice-word').href = `${SITE.routes.play}?words=${encodeURIComponent(word.id)}`
  element<HTMLButtonElement>('#previous-word').disabled = filtered.length < 2
  element<HTMLButtonElement>('#next-word').disabled = filtered.length < 2
  history.replaceState(null, '', `#${word.id}`)
  updateWeakCount()
  renderBrowser()
}

function toggle(status: 'learned' | 'difficult'): void {
  const word = filtered[index]; if (!word) return
  const current = status === 'learned' ? study.learnedWords : study.difficultWords
  study = setWordStatus(study, word.id, status, !current.includes(word.id))
  progressRepository.save(study); render(); announce(status === 'learned' ? 'Learning status saved on this device.' : 'Difficult-word list updated.', 'success')
}

function toggleBookmark(): void {
  const word = filtered[index]; if (!word) return
  const active = preferences.bookmarks.includes(word.id)
  preferences = { ...preferences, bookmarks: active ? preferences.bookmarks.filter((id) => id !== word.id) : [...preferences.bookmarks, word.id].slice(-100) }
  savePreferences(); render(); announce(active ? 'Bookmark removed.' : 'Word bookmarked on this device.', 'success')
}

function updateWeakCount(): void { element('#weak-count').textContent = String(rankWeakWords(study).length) }

function applyFilters(): void {
  filtered = vocabulary.filter((word) => (level.value === 'all' || String(word.level) === level.value) && (category.value === 'all' || word.categories.includes(category.value as never)) && matchesVocabularyTerm(word.term, termSearch.value))
  preferences = { ...preferences, level: level.value, category: category.value, query: termSearch.value.trim() }
  savePreferences(); visibleResults = RESULT_STEP
  const hasSearch = Boolean(termSearch.value.trim())
  element('#search-status').textContent = hasSearch ? `${filtered.length} matching term${filtered.length === 1 ? '' : 's'} found in the VocabDuel library.` : `${filtered.length} terms available.`
  element('#empty-title').textContent = 'No words found'; element('#empty-message').textContent = 'Try another term, level, or category.'
  element('#retry-vocabulary').classList.add('hidden'); element('#clear-filters').classList.remove('hidden')
  index = 0; render()
}

function openWordById(id: string, focus = true): void {
  if (!vocabulary.some((word) => word.id === id)) return
  let targetIndex = filtered.findIndex((word) => word.id === id)
  if (targetIndex < 0) { level.value = 'all'; category.value = 'all'; termSearch.value = ''; applyFilters(); targetIndex = filtered.findIndex((word) => word.id === id) }
  index = targetIndex
  render()
  if (focus) element('#word-term').focus({ preventScroll: true })
}

function moveTo(nextIndex: number): void { index = nextIndex; render(); element('#word-term').focus({ preventScroll: true }) }
function setFiltersExpanded(expanded: boolean): void { filters.toggleAttribute('data-collapsed', !expanded); filterToggle.setAttribute('aria-expanded', String(expanded)); filterToggle.textContent = expanded ? 'Hide filters' : 'Show filters' }

async function speak(): Promise<void> {
  const word = filtered[index]; if (!word) return
  const selectedRate = Number(pronunciationSpeed.value)
  const result = await speechService.speak(word.term, { rate: isSpeechRate(selectedRate) ? selectedRate : 1 }); if (!result.ok && !result.cancelled) announce(result.message ?? 'Pronunciation could not be played.', 'error')
}

async function loadVocabulary(): Promise<void> {
  if (loading) return
  loading = true; element('#learn-loading').classList.remove('hidden'); element('#learn-loading').setAttribute('aria-busy', 'true'); element('#empty-state').classList.add('hidden')
  try {
    const dataset = await loadAllVocabulary(); vocabulary = dataset.items; applyFilters()
    const hashId = decodeURIComponent(location.hash.slice(1)); if (hashId) openWordById(hashId, false)
  } catch {
    filtered = []; element('#learn-loading').classList.add('hidden'); element('#empty-state').classList.remove('hidden')
    element('#empty-title').textContent = 'The word library did not load'; element('#empty-message').textContent = 'Check your connection and try again.'
    element('#retry-vocabulary').classList.remove('hidden'); element('#clear-filters').classList.add('hidden'); announce('Vocabulary could not be loaded. Try again.', 'error')
  } finally { loading = false; element('#learn-loading').setAttribute('aria-busy', 'false') }
}

level.addEventListener('change', applyFilters); category.addEventListener('change', applyFilters)
searchForm.addEventListener('submit', (event) => { event.preventDefault(); applyFilters() })
termSearch.addEventListener('search', () => { if (!termSearch.value) applyFilters() })
pronunciationSpeed.addEventListener('change', () => { const selectedRate = Number(pronunciationSpeed.value); if (isSpeechRate(selectedRate)) study = progressRepository.update((current) => ({ ...current, audioSpeed: selectedRate })) })
filterToggle.addEventListener('click', () => setFiltersExpanded(filterToggle.getAttribute('aria-expanded') !== 'true'))
element('#clear-filters').addEventListener('click', () => { level.value = 'all'; category.value = 'all'; termSearch.value = ''; applyFilters(); termSearch.focus() })
element('#retry-vocabulary').addEventListener('click', () => { void loadVocabulary() })
element('#previous-word').addEventListener('click', () => moveTo((index - 1 + filtered.length) % filtered.length))
element('#next-word').addEventListener('click', () => moveTo((index + 1) % filtered.length))
element('#random-word').addEventListener('click', () => { if (filtered.length > 1) moveTo((index + 1 + Math.floor(Math.random() * (filtered.length - 1))) % filtered.length) })
element('#learned-word').addEventListener('click', () => toggle('learned')); element('#difficult-word').addEventListener('click', () => toggle('difficult')); element('#bookmark-word').addEventListener('click', toggleBookmark)
element('#speak-word').addEventListener('click', () => { void speak() })
element('#show-more-results').addEventListener('click', () => { visibleResults += RESULT_STEP; renderBrowser() })
element('#toggle-saved-words').addEventListener('click', (event) => { const button = event.currentTarget as HTMLButtonElement; const expanded = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!expanded)); element('#saved-word-lists').classList.toggle('hidden', expanded) })
for (const selector of ['#word-browser', '#word-card']) element(selector).addEventListener('click', (event) => { const link = (event.target as Element).closest<HTMLAnchorElement>('[data-word-id]'); if (!link) return; event.preventDefault(); openWordById(link.dataset.wordId ?? '') })
element<HTMLButtonElement>('#weak-practice').addEventListener('click', () => { const weak = rankWeakWords(study); if (!weak.length) announce('Mark difficult words or complete a few quizzes first.'); else location.href = `${SITE.routes.play}?words=${weak.join(',')}` })
element('#progress-button').addEventListener('click', async () => { const accuracy = study.totalQuestionsAttempted ? Math.round(study.correctAnswers / study.totalQuestionsAttempted * 100) : 0; if (await confirmAction({ eyebrow: 'Your learning data', title: 'Local progress', metrics: [{ label: 'Learned', value: String(study.learnedWords.length), tone: 'success' }, { label: 'Difficult', value: String(study.difficultWords.length), tone: 'warning' }, { label: 'Accuracy', value: `${accuracy}%` }], message: 'Resetting will permanently remove your saved learning progress from this device.', confirmLabel: 'Reset progress', danger: true })) { study = progressRepository.reset(); render(); announce('Local progress has been reset.', 'success') } })

setFiltersExpanded(false)
void loadVocabulary()
