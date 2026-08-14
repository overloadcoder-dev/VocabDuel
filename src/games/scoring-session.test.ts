import { describe, expect, it } from 'vitest'
import { calculateScore, createSession, getRemainingTime, getTimerProgress, recordSessionAnswer, SESSION_CONFIGS, startSession } from './index'

describe('scoring and timers', () => {
  it('calculates deterministic bounded speed bonuses', () => {
    expect(calculateScore({ correct: true, timeRemainingMs: 5_000, roundDurationMs: 10_000 })).toEqual({ base: 100, speedBonus: 50, total: 150 })
    expect(calculateScore({ correct: true, timeRemainingMs: 20_000, roundDurationMs: 10_000 }).total).toBe(200)
    expect(calculateScore({ correct: false, timeRemainingMs: 10_000, roundDurationMs: 10_000 }).total).toBe(0)
  })

  it('clamps timer values at their boundaries', () => {
    expect(getRemainingTime(2_000, 500)).toBe(1_500)
    expect(getRemainingTime(2_000, 3_000)).toBe(0)
    expect(getTimerProgress(1_000, 2_000, 1_500)).toBe(0.5)
    expect(getTimerProgress(1_000, 2_000, 3_000)).toBe(1)
  })
})

describe('session transitions', () => {
  it('starts a time attack with a reusable configured deadline', () => {
    const session = startSession(createSession(SESSION_CONFIGS['time-attack']), 1_000)
    expect(session.status).toBe('playing')
    expect(session.endsAt).toBe(61_000)
  })

  it('ends survival at zero lives', () => {
    let session = startSession(createSession({ ...SESSION_CONFIGS.survival, lives: 2 }), 0)
    session = recordSessionAnswer(session, false, 0, 1)
    session = recordSessionAnswer(session, false, 0, 2)
    expect(session).toMatchObject({ status: 'finished', finishReason: 'out-of-lives', livesRemaining: 0, attempted: 2 })
  })

  it('rejects illegal answer transitions', () => {
    expect(() => recordSessionAnswer(createSession(SESSION_CONFIGS.practice), true)).toThrow(/only be recorded/)
  })
})

