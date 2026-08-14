import { describe, expect, it } from 'vitest'
import { filterVocabulary, vocabulary } from './index'

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
})

