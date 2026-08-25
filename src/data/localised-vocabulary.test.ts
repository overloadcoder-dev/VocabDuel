import { describe, expect, it } from 'vitest'
import type { VocabularyItem } from '../types'
import { vocabularyExplanation, vocabularyMeaning } from './localised-vocabulary'

const word = {
  id: 'sample', term: 'sample', normalizedTerm: 'sample', partOfSpeech: ['noun'],
  englishDefinition: 'A representative part of a larger whole.',
  chineseShort: '样本', chineseExplanation: '代表较大整体的一部分。',
  examples: [{ english: 'We tested a sample.', malay: 'Kami menguji satu sampel.', chinese: '我们测试了一个样本。' }],
  level: 1, categories: ['Academic'],
} satisfies VocabularyItem

describe('localised vocabulary', () => {
  it('never substitutes a Malay example sentence for a missing definition', () => {
    expect(vocabularyMeaning(word, 'ms')).toBe(word.englishDefinition)
    expect(vocabularyExplanation(word, 'ms')).toBe(word.englishDefinition)
    expect(vocabularyMeaning(word, 'ms')).not.toBe(word.examples[0]!.malay)
  })

  it('uses editorial Malay definition fields when available', () => {
    const translated = { ...word, malayShort: 'Sampel atau contoh perwakilan.', malayExplanation: 'Bahagian kecil yang mewakili keseluruhan yang lebih besar.' }
    expect(vocabularyMeaning(translated, 'ms')).toBe(translated.malayShort)
    expect(vocabularyExplanation(translated, 'ms')).toBe(translated.malayExplanation)
  })
})
