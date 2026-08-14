import type { VocabularyCategory, VocabularyLevel } from './vocabulary'

export type GameType = 'meaning' | 'reverse' | 'audio' | 'spelling' | 'context'
export type SessionType = 'practice' | 'time-attack' | 'survival' | 'level-challenge'

export interface QuestionGenerationOptions {
  gameType: GameType
  level?: VocabularyLevel | readonly VocabularyLevel[]
  category?: VocabularyCategory | readonly VocabularyCategory[]
  questionCount: number
  seed: string | number
  vocabularyIds?: readonly string[]
}

export interface Choice {
  id: string
  label: string
}

export interface GameQuestion {
  id: string
  gameType: GameType
  vocabularyId: string
  prompt: string
  choices?: Choice[]
  correctAnswer: string
  explanation: string
  ipa?: string
  example?: string
  audioTerm?: string
}

export interface SessionConfiguration {
  type: SessionType
  timeLimitMs?: number
  lives?: number
  questionCount?: number
  passingScore?: number
  immediateExplanation: boolean
}

export type SessionStatus = 'ready' | 'playing' | 'finished'

export interface SessionState {
  status: SessionStatus
  configuration: SessionConfiguration
  questionIndex: number
  attempted: number
  correct: number
  score: number
  livesRemaining?: number
  startedAt?: number
  endsAt?: number
  finishedAt?: number
  finishReason?: 'completed' | 'time-expired' | 'out-of-lives'
}

