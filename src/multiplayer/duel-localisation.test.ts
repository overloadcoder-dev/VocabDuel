import { describe, expect, it } from 'vitest'
import { localisedDuelText } from './duel-localisation'

describe('Duel localisation', () => {
  it('localises parameterised game status text', () => {
    expect(localisedDuelText('第 3 / 10 题', 'en')).toBe('Question 3 / 10')
    expect(localisedDuelText('每题 15 秒', 'ms')).toBe('15 saat setiap soalan')
    expect(localisedDuelText('对战将在 3 秒后开始', 'en')).toBe('Duel starts in 3 seconds')
    expect(localisedDuelText('查看结果还有 2 秒', 'ms')).toBe('Lihat keputusan dalam 2 saat')
  })

  it('localises accessibility labels', () => {
    expect(localisedDuelText('播放 apple 的发音', 'en')).toBe('Play apple pronunciation')
    expect(localisedDuelText('多人对战特色', 'ms')).toBe('Ciri Multi Duel')
  })

  it('keeps Chinese copy unchanged for the Chinese route', () => {
    expect(localisedDuelText('第 3 / 10 题', 'zh')).toBe('第 3 / 10 题')
  })
})
