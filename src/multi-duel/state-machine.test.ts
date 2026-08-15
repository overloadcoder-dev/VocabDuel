import { describe, expect, it } from 'vitest'
import { allPlayersAnswered, allPlayersVoted, canStartMultiMatch } from './state-machine'
import type { RoomPlayer } from './types'

function player(uid: string, ready = true, connected = true): RoomPlayer {
  return { uid, displayName: uid, ready, connected, joinedAt: 1, lastSeenAt: 1 }
}

describe('multi-duel match readiness', () => {
  it('allows a four-player room to start early with two or three ready players', () => {
    expect(canStartMultiMatch([player('a'), player('b')], 4)).toBe(true)
    expect(canStartMultiMatch([player('a'), player('b'), player('c')], 4)).toBe(true)
  })

  it('rejects solo, over-capacity, unready, and disconnected groups', () => {
    expect(canStartMultiMatch([player('a')], 4)).toBe(false)
    expect(canStartMultiMatch([player('a'), player('b'), player('c'), player('d')], 3)).toBe(false)
    expect(canStartMultiMatch([player('a'), player('b', false)], 4)).toBe(false)
    expect(canStartMultiMatch([player('a'), player('b', true, false)], 4)).toBe(false)
  })
})

describe('multi-duel round completion and rematches', () => {
  it('closes a round only when every participating player has answered', () => {
    expect(allPlayersAnswered(2, 3)).toBe(false)
    expect(allPlayersAnswered(3, 3)).toBe(true)
    expect(allPlayersAnswered(4, 4)).toBe(true)
  })

  it('requires every connected player to vote before a rematch', () => {
    const players = [player('a'), player('b'), player('c')]
    expect(allPlayersVoted(players, { a: true, b: true })).toBe(false)
    expect(allPlayersVoted(players, { a: true, b: true, c: true })).toBe(true)
    expect(allPlayersVoted([player('a'), player('b', true, false)], { a: true, b: true })).toBe(false)
  })
})
