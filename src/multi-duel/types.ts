import type { AnswerRecord, MatchState, MultiplayerIdentity, RoomConfig, RoomPlayer } from '../multiplayer/types'

export type MultiDuelCapacity = 3 | 4

export interface MultiRoomConfig extends RoomConfig {
  maxPlayers: MultiDuelCapacity
}

export interface MultiRoomRecord {
  metadata: {
    code: string
    hostUid: string
    playerCount: number
    state: MatchState
    seed: number
    createdAt: number
    expiresAt: number
  }
  config: MultiRoomConfig
  players: Record<string, RoomPlayer>
  match?: { startAt: number; rematchNumber: number }
  answers?: Record<string, Record<string, AnswerRecord>>
  answerCounts?: Record<string, number>
  roundEnds?: Record<string, number>
  rematchVotes?: Record<string, boolean>
}

export type { AnswerRecord, MultiplayerIdentity, RoomPlayer }
