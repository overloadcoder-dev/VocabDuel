import { describe, expect, it } from 'vitest'
import { VOCABULARY_CATEGORIES, type VocabularyItem } from '../../types'
import {
  level1Vocabulary,
  level2Vocabulary,
  level3Vocabulary,
  level4Vocabulary,
  level5Vocabulary,
} from '../vocabulary'

const levels = [
  level1Vocabulary,
  level2Vocabulary,
  level3Vocabulary,
  level4Vocabulary,
  level5Vocabulary,
] as const

const expectedLengths = [710, 710, 710, 610, 800] as const
const allowedCategories = new Set<string>(VOCABULARY_CATEGORIES)
const americanSpelling = /\b(?:color(?:s|ed|ing|ful|less)?|organize(?:s|d|r|rs|ing|ation|ations)?|behavior(?:s|al)?|recognize(?:s|d|r|rs|ing)?|grayish|colored)\b/i

function expectCompleteItem(item: VocabularyItem, expectedLevel: number) {
  expect(item.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  expect(item.term.trim()).not.toBe('')
  expect(item.normalizedTerm).toBe(item.term.toLocaleLowerCase())
  expect(item.partOfSpeech.length).toBeGreaterThan(0)
  expect(item.chineseShort.trim()).not.toBe('')
  expect(item.chineseExplanation.trim()).not.toBe('')
  expect(item.englishDefinition.trim()).not.toBe('')
  expect(item.examples.length).toBeGreaterThan(0)
  expect(item.examples.every(({ english, malay, chinese }) => english.trim() && malay.trim() && chinese.trim())).toBe(true)
  expect(item.level).toBe(expectedLevel)
  expect(item.categories.length).toBeGreaterThan(0)
  expect(item.categories.every((category) => allowedCategories.has(category))).toBe(true)
}

describe('vocabulary catalogue integrity', () => {
  it('has the expected expanded size at every level', () => {
    levels.forEach((items, index) => expect(items).toHaveLength(expectedLengths[index]!))
  })

  it('keeps IDs unique within each level and every record complete', () => {
    levels.forEach((items, index) => {
      expect(new Set(items.map(({ id }) => id)).size).toBe(items.length)
      items.forEach((item) => expectCompleteItem(item, index + 1))
    })
  })

  it('uses British English in learner-facing definitions and examples', () => {
    levels.flat().forEach((item) => {
      expect(item.englishDefinition, `${item.id} definition`).not.toMatch(americanSpelling)
      item.examples.forEach(({ english }) => expect(english, `${item.id} example`).not.toMatch(americanSpelling))
    })
  })
})
