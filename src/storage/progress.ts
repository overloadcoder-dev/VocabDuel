import type { LocalProgress, VocabularyCategory, VocabularyLevel, WordPerformance } from '../types'

export const PROGRESS_STORAGE_KEY = 'vocabduel.progress.v1'

export function createDefaultProgress(): LocalProgress {
  return {
    version: 1,
    preferredLevel: 1,
    preferredCategories: [],
    totalQuestionsAttempted: 0,
    correctAnswers: 0,
    bestTimeAttackScore: 0,
    longestSurvivalRun: 0,
    recentVocabulary: [],
    learnedWords: [],
    difficultWords: [],
    xp: 0,
    unlockedLevels: [1],
    theme: 'system',
    audioSpeed: 1,
    wordPerformance: {},
  }
}

const validLevel = (value: unknown): value is VocabularyLevel =>
  typeof value === 'number' && [1, 2, 3, 4, 5].includes(value)

const stringArray = (value: unknown): string[] =>
  Array.isArray(value) ? [...new Set(value.filter((entry): entry is string => typeof entry === 'string'))] : []

function nonNegative(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : fallback
}

export function sanitizeProgress(value: unknown): LocalProgress {
  const defaults = createDefaultProgress()
  if (!value || typeof value !== 'object') return defaults
  const source = value as Partial<LocalProgress>
  const storedAudioSpeed = (value as { audioSpeed?: unknown }).audioSpeed
  const performances: Record<string, WordPerformance> = {}
  if (source.wordPerformance && typeof source.wordPerformance === 'object') {
    for (const [id, performance] of Object.entries(source.wordPerformance)) {
      if (!performance || typeof performance !== 'object') continue
      performances[id] = {
        attempted: nonNegative(performance.attempted),
        correct: nonNegative(performance.correct),
        recentResults: Array.isArray(performance.recentResults) ? performance.recentResults.filter((entry): entry is boolean => typeof entry === 'boolean').slice(-10) : [],
        lastPractisedAt: typeof performance.lastPractisedAt === 'number' ? performance.lastPractisedAt : undefined,
      }
      performances[id].correct = Math.min(performances[id].correct, performances[id].attempted)
    }
  }
  const allowedCategories: VocabularyCategory[] = ['Daily English', 'Travel', 'School', 'Business', 'Technology', 'Academic']
  return {
    version: 1,
    preferredLevel: validLevel(source.preferredLevel) ? source.preferredLevel : defaults.preferredLevel,
    preferredCategories: stringArray(source.preferredCategories).filter((category): category is VocabularyCategory => allowedCategories.includes(category as VocabularyCategory)),
    totalQuestionsAttempted: nonNegative(source.totalQuestionsAttempted),
    correctAnswers: Math.min(nonNegative(source.correctAnswers), nonNegative(source.totalQuestionsAttempted)),
    bestTimeAttackScore: nonNegative(source.bestTimeAttackScore),
    longestSurvivalRun: nonNegative(source.longestSurvivalRun),
    recentVocabulary: stringArray(source.recentVocabulary).slice(-20),
    learnedWords: stringArray(source.learnedWords),
    difficultWords: stringArray(source.difficultWords),
    xp: nonNegative(source.xp),
    unlockedLevels: Array.isArray(source.unlockedLevels) ? [...new Set(source.unlockedLevels.filter(validLevel))] : defaults.unlockedLevels,
    theme: source.theme === 'light' || source.theme === 'dark' ? source.theme : 'system',
    audioSpeed: storedAudioSpeed === 'slow' ? 0.75 : storedAudioSpeed === 'normal' ? 1 : storedAudioSpeed === 0.5 || storedAudioSpeed === 0.75 || storedAudioSpeed === 1 || storedAudioSpeed === 1.25 ? storedAudioSpeed : 1,
    wordPerformance: performances,
  }
}

export interface ProgressRepository {
  load(): LocalProgress
  save(progress: LocalProgress): boolean
  update(updater: (progress: LocalProgress) => LocalProgress): LocalProgress
  reset(): LocalProgress
}

export function createProgressRepository(storage?: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>): ProgressRepository {
  const target = storage ?? (typeof localStorage === 'undefined' ? undefined : localStorage)
  return {
    load() {
      if (!target) return createDefaultProgress()
      try {
        const raw = target.getItem(PROGRESS_STORAGE_KEY)
        return raw ? sanitizeProgress(JSON.parse(raw)) : createDefaultProgress()
      } catch {
        return createDefaultProgress()
      }
    },
    save(progress) {
      if (!target) return false
      try {
        target.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(sanitizeProgress(progress)))
        return true
      } catch {
        return false
      }
    },
    update(updater) {
      const next = sanitizeProgress(updater(this.load()))
      this.save(next)
      return next
    },
    reset() {
      try { target?.removeItem(PROGRESS_STORAGE_KEY) } catch { /* Storage can be denied. */ }
      return createDefaultProgress()
    },
  }
}

export const progressRepository = createProgressRepository()

export function recordWordResult(progress: LocalProgress, vocabularyId: string, correct: boolean, practisedAt: number = Date.now()): LocalProgress {
  const previous = progress.wordPerformance[vocabularyId] ?? { attempted: 0, correct: 0, recentResults: [] }
  return {
    ...progress,
    totalQuestionsAttempted: progress.totalQuestionsAttempted + 1,
    correctAnswers: progress.correctAnswers + Number(correct),
    recentVocabulary: [...progress.recentVocabulary.filter((id) => id !== vocabularyId), vocabularyId].slice(-20),
    wordPerformance: {
      ...progress.wordPerformance,
      [vocabularyId]: {
        attempted: previous.attempted + 1,
        correct: previous.correct + Number(correct),
        recentResults: [...previous.recentResults, correct].slice(-10),
        lastPractisedAt: practisedAt,
      },
    },
  }
}

export function setWordStatus(progress: LocalProgress, vocabularyId: string, status: 'learned' | 'difficult', enabled: boolean): LocalProgress {
  const key = status === 'learned' ? 'learnedWords' : 'difficultWords'
  const current = progress[key]
  return { ...progress, [key]: enabled ? [...new Set([...current, vocabularyId])] : current.filter((id) => id !== vocabularyId) }
}

export function rankWeakWords(progress: LocalProgress, limit = 20): string[] {
  const candidates = new Set([...Object.keys(progress.wordPerformance), ...progress.difficultWords])
  return [...candidates]
    .map((id) => {
      const performance = progress.wordPerformance[id]
      const recent = performance?.recentResults ?? []
      const recentWrongRate = recent.length ? recent.filter((result) => !result).length / recent.length : 0
      const lifetimeWrongRate = performance?.attempted ? 1 - performance.correct / performance.attempted : 0
      const explicitBoost = progress.difficultWords.includes(id) ? 1 : 0
      return { id, score: explicitBoost + recentWrongRate * 2 + lifetimeWrongRate }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, Math.max(0, limit))
    .map(({ id }) => id)
}
