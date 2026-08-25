import type { CefrLevel, VocabularyLevel } from '../../types'

export interface VocabularyLevelGuide {
  level: VocabularyLevel
  cefr: readonly CefrLevel[]
  approximateIelts: string
  approximateMuet: string
  label: string
  classification: string
}

/**
 * Editorial guidance for assigning app levels. IELTS ranges are approximate
 * learner targets, not official word-to-band mappings or score guarantees.
 */
export const VOCABULARY_LEVEL_GUIDE = [
  {
    level: 1,
    cefr: ['A1', 'A2'],
    approximateIelts: 'Foundation / below Band 4',
    approximateMuet: 'Band 1.0–2.5',
    label: 'Foundation',
    classification: 'Frequent, concrete words used in simple everyday exchanges.',
  },
  {
    level: 2,
    cefr: ['A2', 'B1'],
    approximateIelts: 'Band 4.0–5.0',
    approximateMuet: 'Band 2.5–3.5',
    label: 'Developing',
    classification: 'Familiar words for everyday, travel, study, and routine work situations.',
  },
  {
    level: 3,
    cefr: ['B1', 'B2'],
    approximateIelts: 'Band 5.5–6.5',
    approximateMuet: 'Band 3.5–4.5',
    label: 'Independent',
    classification: 'Broader or more abstract vocabulary used across general and academic topics.',
  },
  {
    level: 4,
    cefr: ['B2', 'C1'],
    approximateIelts: 'Band 7.0–8.0',
    approximateMuet: 'Band 4.5–5.0',
    label: 'Advanced',
    classification: 'Less-common vocabulary requiring accurate register, nuance, and collocation.',
  },
  {
    level: 5,
    cefr: ['C1', 'C2'],
    approximateIelts: 'Band 8.5–9.0',
    approximateMuet: 'Band 5.0–5+',
    label: 'Mastery',
    classification: 'Highly nuanced, specialised, idiomatic, or uncommon vocabulary.',
  },
] as const satisfies readonly VocabularyLevelGuide[]

export const getVocabularyLevelGuide = (level: VocabularyLevel) =>
  VOCABULARY_LEVEL_GUIDE.find((guide) => guide.level === level)
