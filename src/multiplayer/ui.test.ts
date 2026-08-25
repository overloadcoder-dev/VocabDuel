import { describe, expect, it, vi } from 'vitest'
import { saveGuestName } from './ui'

describe('multiplayer nickname persistence', () => {
  it('stores a nickname when browser storage is available', () => {
    const setItem = vi.fn()
    expect(saveGuestName('Learner', { setItem })).toBe(true)
    expect(setItem).toHaveBeenCalledWith('vocabduel.nickname', 'Learner')
  })

  it('keeps multiplayer usable when browser storage rejects writes', () => {
    const storage = { setItem: () => { throw new DOMException('Denied', 'SecurityError') } }
    expect(saveGuestName('Learner', storage)).toBe(false)
  })
})
