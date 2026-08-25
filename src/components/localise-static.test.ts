import { describe, expect, it } from 'vitest'
import { gameDirectionLabel, localisedStaticText } from './localise-static'

describe('static duel localisation', () => {
  it('translates Duel explanations from their Chinese source', () => {
    const source = '轻松练习，和朋友一起进步'
    expect(localisedStaticText(source, 'en')).toBe('Practise casually and improve together')
    expect(localisedStaticText(source, 'ms')).toBe('Berlatih santai dan maju bersama rakan')
    expect(localisedStaticText(source, 'zh')).toBe(source)
  })

  it('translates Multi Duel explanations from their Chinese source', () => {
    const source = 'Multi Duel 与原有 1v1 Duel 分开运行'
    expect(localisedStaticText(source, 'en')).toBe('Multi Duel runs separately from 1v1 Duel')
    expect(localisedStaticText(source, 'ms')).toBe('Multi Duel beroperasi berasingan daripada 1v1 Duel')
    expect(localisedStaticText(source, 'zh')).toBe(source)
  })

  it('uses locale-appropriate game direction abbreviations', () => {
    expect(gameDirectionLabel('forward', 'ms')).toBe('EN → BM')
    expect(gameDirectionLabel('reverse', 'ms')).toBe('BM → EN')
    expect(gameDirectionLabel('forward', 'en')).toBe('EN → Meaning')
    expect(gameDirectionLabel('reverse', 'en')).toBe('Meaning → EN')
    expect(gameDirectionLabel('forward', 'zh')).toBe('EN → 中')
  })
})
