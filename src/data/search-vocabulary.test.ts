import { describe, expect, it } from 'vitest'
import { matchesVocabularyTerm } from './search-vocabulary'

describe('vocabulary term search', () => {
  it('matches available terms by partial, case-insensitive text', () => {
    expect(matchesVocabularyTerm('Apple', ' APP ')).toBe(true)
    expect(matchesVocabularyTerm('pineapple', 'apple')).toBe(true)
    expect(matchesVocabularyTerm('banana', 'apple')).toBe(false)
  })

  it('normalizes full-width characters and treats an empty query as no filter', () => {
    expect(matchesVocabularyTerm('apple', 'ＡＰＰＬＥ')).toBe(true)
    expect(matchesVocabularyTerm('apple', '  ')).toBe(true)
  })
})
