import { describe, expect, it } from 'vitest'
import { vocabulary } from './vocabulary'
import { loadAllVocabulary, loadVocabularyLevel } from './load-vocabulary'

describe('lazy vocabulary loading', () => {
  it('preserves the canonical all-level order and earliest-level duplicate precedence', async () => {
    const dataset = await loadAllVocabulary()

    expect(dataset.items).toEqual(vocabulary)
    expect(dataset.items).toHaveLength(2220)
    expect(dataset.byId.size).toBe(dataset.items.length)
  })

  it('caches datasets and supports loading one level independently', async () => {
    const first = await loadVocabularyLevel(2)
    const second = await loadVocabularyLevel(2)

    expect(second).toBe(first)
    expect(first.items.length).toBeGreaterThan(4)
    expect(first.items.every((item) => item.level === 2)).toBe(true)
  })
})
