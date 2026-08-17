import { describe, expect, it } from 'vitest'
import { bothPlayersAnswered, canTransition } from './state-machine'
import { activeRoundTiming, remainingRoundMs, ROUND_REVIEW_MS, roundWindow } from './time'
import { joinRoomErrorCopy, normalizeRoomCode, readInviteRoomCode, sanitizeNickname, validateNickname } from './validation'

describe('multiplayer state transitions', () => {
  it('accepts legal progress and rejects state skipping', () => {
    expect(canTransition('waiting', 'countdown')).toBe(true)
    expect(canTransition('waiting', 'finished')).toBe(false)
    expect(canTransition('finished', 'countdown')).toBe(true)
  })
})

describe('synchronised timing', () => {
  it('calculates round boundaries and clamps remaining time', () => {
    expect(roundWindow(1_000, 2, 5_000, 1_000)).toEqual({ roundStartAt: 13_000, roundEndAt: 18_000, resultEndAt: 19_000 })
    expect(roundWindow(1_000, 0, 10_000)).toEqual({ roundStartAt: 1_000, roundEndAt: 11_000, resultEndAt: 11_000 + ROUND_REVIEW_MS })
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

describe('early round completion', () => {
  it('starts review as soon as both players answer, regardless of their selections', () => {
    expect(bothPlayersAnswered(0)).toBe(false)
    expect(bothPlayersAnswered(1)).toBe(false)
    expect(bothPlayersAnswered(2)).toBe(true)
  })
})

describe('nickname validation', () => {
  it('normalizes spaces and rejects unsafe characters', () => {
    expect(sanitizeNickname('  小 明  ')).toBe('小 明')
    expect(validateNickname('<script>')).not.toBeNull()
    expect(validateNickname('Guest 4821')).toBeNull()
  })
})

describe('room code input', () => {
  it('uppercases valid characters and removes ambiguous or unsafe input', () => {
    expect(normalizeRoomCode(' ab-cd29 ')).toBe('ABCD29')
    expect(normalizeRoomCode('io01k7pm42')).toBe('K7PM42')
  })

  it('accepts full-width characters produced by mobile keyboards', () => {
    expect(normalizeRoomCode('ａｂＣＤ２９')).toBe('ABCD29')
  })

  it('recognizes only complete room codes in shared invitation links', () => {
    expect(readInviteRoomCode('?room=%EF%BD%81%EF%BD%82%EF%BC%A3%EF%BC%A4%EF%BC%92%EF%BC%99')).toBe('ABCD29')
    expect(readInviteRoomCode('?room=ABC')).toBeNull()
    expect(readInviteRoomCode('?other=ABCD29')).toBeNull()
  })

  it('turns common join failures into clear popup copy', () => {
    expect(joinRoomErrorCopy('此房间人数已满。').title).toBe('房间已满')
    expect(joinRoomErrorCopy('此房间的对战已经开始。').title).toBe('对战已经开始')
    expect(joinRoomErrorCopy('找不到此房间，请检查房间码。').title).toBe('找不到房间')
  })
})
