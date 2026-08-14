import { describe, expect, it } from 'vitest'
import { canTransition } from './state-machine'
import { activeRoundTiming, remainingRoundMs, roundWindow } from './time'
import { sanitizeNickname, validateNickname } from './validation'

describe('multiplayer state transitions', () => {
  it('accepts legal progress and rejects state skipping', () => {
    expect(canTransition('waiting', 'countdown')).toBe(true)
    expect(canTransition('waiting', 'finished')).toBe(false)
    expect(canTransition('finished', 'countdown')).toBe(true)
  })
})

describe('synchronized timing', () => {
  it('calculates round boundaries and clamps remaining time', () => {
    expect(roundWindow(1_000, 2, 5_000, 1_000)).toEqual({ roundStartAt: 13_000, roundEndAt: 18_000, resultEndAt: 19_000 })
    expect(remainingRoundMs(5_000, 200, 4_000)).toBe(800)
    expect(remainingRoundMs(5_000, 200, 6_000)).toBe(0)
  })


  it('shortens only a recorded round and carries the saved time into later rounds', () => {
    expect(activeRoundTiming(1_000, 5_500, ['one', 'two'], 5_000, 1_000, { one: 3_000 })).toEqual({
      index: 1,
      roundStartAt: 4_000,
      roundEndAt: 9_000,
      resultEndAt: 10_000,
    })
    expect(activeRoundTiming(1_000, 10_000, ['one', 'two'], 5_000, 1_000, { one: 3_000 }).index).toBe(2)
  })
})

describe('nickname validation', () => {
  it('normalizes spaces and rejects unsafe characters', () => {
    expect(sanitizeNickname('  小 明  ')).toBe('小 明')
    expect(validateNickname('<script>')).not.toBeNull()
    expect(validateNickname('Guest 4821')).toBeNull()
  })
})
