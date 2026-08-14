import type { GameType } from '../types/games'

export type MatchState = 'waiting' | 'countdown' | 'playing' | 'finished' | 'cancelled'

export interface RoomConfig {
  level: 1 | 2 | 3 | 4 | 5
  category: string
  gameType: Exclude<GameType, 'spelling'>
  questionCount: number
  roundTimeMs: number
}

export interface RoomPlayer {
  uid: string
  displayName: string
  ready: boolean
  connected: boolean
  joinedAt: number
  lastSeenAt: number
}

export interface AnswerRecord {
  selectedAnswer: string
  submittedAt: number
}

export interface RoomRecord {
  metadata: {
    code: string
    hostUid: string
    guestUid?: string
    state: MatchState
    seed: number
    createdAt: number
    expiresAt: number
  }
  config: RoomConfig
  players: Record<string, RoomPlayer>
  match?: { startAt: number; rematchNumber: number }
  answers?: Record<string, Record<string, AnswerRecord>>
  roundEnds?: Record<string, number>
  rematchVotes?: Record<string, boolean>
}

export interface MultiplayerIdentity {
  uid: string
  displayName: string
}
