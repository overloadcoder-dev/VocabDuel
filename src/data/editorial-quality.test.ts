import { describe, expect, it } from 'vitest'
import type { VocabularyItem } from '../types/vocabulary'
import { hasTemplatedEditorialContent, isEditoriallyIndexable } from './editorial-quality'
import { vocabulary } from './vocabulary'

function wordWithExample(english: string): VocabularyItem {
  return {
    id: 'sample', term: 'sample', normalizedTerm: 'sample', partOfSpeech: ['noun'],
    chineseShort: '示例', chineseExplanation: '用于测试的示例。',
    englishDefinition: 'An item used to demonstrate something.',
    examples: [{ english, malay: 'Ini ialah contoh untuk ujian.', chinese: '这是一个示例。' }], level: 1, categories: ['Daily English'],
  }
}

describe('editorial quality', () => {
  it('keeps specific natural examples indexable', () => {
    const word = wordWithExample('She mailed a fabric sample to the design team before approving the order.')
    expect(hasTemplatedEditorialContent(word)).toBe(false)
    expect(isEditoriallyIndexable(word)).toBe(true)
  })

  it.each([
    'The report identifies telemetry as a significant feature of the broader analysis.',
    'Researchers may encounter the expression "industry benchmark" in advanced writing.',
    'The phrase "critical appraisal" is common in formal academic or professional contexts.',
  ])('holds templated examples out of search indexing: %s', (example) => {
    const word = wordWithExample(example)
    expect(hasTemplatedEditorialContent(word)).toBe(true)
    expect(isEditoriallyIndexable(word)).toBe(false)
  })

  it('tracks the current editorial-review backlog explicitly', () => {
    expect(vocabulary.filter(hasTemplatedEditorialContent)).toHaveLength(615)
  })
})
