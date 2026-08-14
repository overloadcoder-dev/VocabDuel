import type { VocabularyCategory, VocabularyLevel } from './vocabulary'

export interface WordPerformance {
  attempted: number
  correct: number
  recentResults: boolean[]
  lastPractisedAt?: number
}

export interface LocalProgress {
  version: 1
  preferredLevel: VocabularyLevel
  preferredCategories: VocabularyCategory[]
  totalQuestionsAttempted: number
  correctAnswers: number
  bestTimeAttackScore: number
  longestSurvivalRun: number
  recentVocabulary: string[]
  learnedWords: string[]
  difficultWords: string[]
  xp: number
  unlockedLevels: VocabularyLevel[]
  theme: 'light' | 'dark' | 'system'
  audioSpeed: 'normal' | 'slow'
  wordPerformance: Record<string, WordPerformance>
}

