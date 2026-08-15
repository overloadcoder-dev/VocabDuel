import { describe, expect, it } from 'vitest'
import { filterVocabulary, VOCABULARY_LEVEL_GUIDE } from './index'
import { vocabulary } from './vocabulary'

describe('vocabulary filters', () => {
  it('filters by multiple levels', () => {
    const result = filterVocabulary(vocabulary, { levels: [1, 5] })
    expect(result.length).toBeGreaterThan(0)
    expect(result.every(({ level }) => level === 1 || level === 5)).toBe(true)
  })

  it('matches any selected category and supports Chinese search', () => {
    expect(filterVocabulary(vocabulary, { categories: ['Travel'] }).every(({ categories }) => categories.includes('Travel'))).toBe(true)
    expect(filterVocabulary(vocabulary, { query: '预算' }).map(({ id }) => id)).toContain('budget')
  })

  it('provides enough unique, valid terms at every app level', () => {
    expect(new Set(vocabulary.map(({ id }) => id)).size).toBe(vocabulary.length)

    for (const guide of VOCABULARY_LEVEL_GUIDE) {
      const terms = vocabulary.filter(({ level }) => level === guide.level)
      expect(terms.length).toBeGreaterThanOrEqual(10)
      expect(terms.every(({ cefr }) => cefr && guide.cefr.some((expected) => expected === cefr))).toBe(true)
    }
  })

  it('keeps normalized terms suitable for answer comparison', () => {
    expect(vocabulary.every(({ normalizedTerm, term }) => normalizedTerm === term.toLocaleLowerCase())).toBe(true)
  })
})
