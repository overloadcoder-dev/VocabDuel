import { describe, expect, it } from 'vitest'
import { vocabulary } from './vocabulary'
import { loadAllVocabulary, loadVocabularyLevel } from './load-vocabulary'

describe('lazy vocabulary loading', () => {
  it('preserves the canonical all-level order and earliest-level duplicate precedence', async () => {
    const dataset = await loadAllVocabulary()

    expect(dataset.items).toEqual(vocabulary)
    expect(dataset.items).toHaveLength(3420)
    expect(dataset.byId.size).toBe(dataset.items.length)
  })

  it('caches datasets and supports loading one level independently', async () => {
    const first = await loadVocabularyLevel(2)
    const second = await loadVocabularyLevel(2)

    expect(second).toBe(first)
    expect(first.items.length).toBeGreaterThan(4)
    expect(first.items.every((item) => item.level === 2)).toBe(true)
  })

  it('uses British spellings in learner-facing vocabulary while preserving stable IDs', async () => {
    const dataset = await loadAllVocabulary()
    const visibleEnglish = dataset.items.flatMap((item) => [
      item.term,
      item.normalizedTerm,
      item.englishDefinition,
      ...item.examples.map((example) => example.english),
      ...(item.collocations ?? []),
      ...(item.synonyms ?? []),
      ...(item.antonyms ?? []),
    ]).join('\n')
    const americanSpelling = /\b(?:acknowledgments?|analyz(?:e|ed|es|ing)|behaviors?|catalogs?|centers?|centered|centering|colors?|dialogs?|favorites?|favorable|favors|gray|humor|instill|jewelry|judgments?|labor|licenses?|modeling|neighbors?|neighborhood|offenses?|practiced|practicing|programs?|skeptical|skillful|toward|traveled|travelers?|traveling|(?:aesthetic|aggrand|amort|apolog|author|axiomat|balkan|bowdler|capital|cartel|character|collateral|contextual|critic|decentral|destabil|emphas|galvan|global|historic|hypostat|ideal|legitim|lexical|marginal|maxim|minim|monet|moral|neutral|operational|organ|polar|priorit|problemat|real|recogn|scrutin|securit|special|stabil|standard|summar|symbol|synthes|theor|util|vector|vernacular)iz(?:e|es|ed|ing|ation|ations))\b/i

    expect(visibleEnglish).not.toMatch(americanSpelling)
    expect(dataset.byId.get('behavior')).toMatchObject({ term: 'behaviour', normalizedTerm: 'behaviour' })
    expect(dataset.byId.get('organize')).toMatchObject({ term: 'organise', normalizedTerm: 'organise' })
    expect(dataset.byId.get('recognize')).toMatchObject({ term: 'recognise', normalizedTerm: 'recognise' })
  })
})
