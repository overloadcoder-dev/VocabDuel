import { describe, expect, it } from 'vitest'
import { allConnectedPlayersAnswered, allPlayersVoted, canStartMultiMatch, nextConnectedHost } from './state-machine'
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
  it('treats disconnected players as unanswered without blocking connected players', () => {
    const players = [player('a'), player('b'), player('c', true, false)]
    expect(allConnectedPlayersAnswered(players, { a: true })).toBe(false)
    expect(allConnectedPlayersAnswered(players, { a: true, b: true })).toBe(true)
    expect(allConnectedPlayersAnswered([player('a')], { a: true })).toBe(true)
  })

  it('requires every remaining connected player to vote before a rematch', () => {
    const players = [player('a'), player('b'), player('c', true, false)]
    expect(allPlayersVoted(players, { a: true })).toBe(false)
    expect(allPlayersVoted(players, { a: true, b: true })).toBe(true)
    expect(allPlayersVoted([player('a'), player('b', true, false)], { a: true })).toBe(false)
  })

  it('passes host control to the earliest connected remaining player', () => {
    const players = [
      { ...player('host', true, false), joinedAt: 1 },
      { ...player('later'), joinedAt: 3 },
      { ...player('next'), joinedAt: 2 },
    ]
    expect(nextConnectedHost(players, 'host')).toBe('next')
    expect(nextConnectedHost([player('host', true, false)], 'host')).toBeUndefined()
  })
})
