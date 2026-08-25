import { describe, expect, it } from 'vitest'
import { vocabularyWordSlug } from './word-slug'

describe('vocabularyWordSlug', () => {
  it('preserves normal IDs and prefixes Windows-reserved names', () => {
    expect(vocabularyWordSlug('apple')).toBe('apple')
    expect(vocabularyWordSlug('con')).toBe('term-con')
    expect(vocabularyWordSlug('LPT1')).toBe('term-LPT1')
  })
})
