export type VocabularyLevel = 1 | 2 | 3 | 4 | 5

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export const VOCABULARY_CATEGORIES = [
  'Daily English',
  'Travel',
  'School',
  'Business',
  'Technology',
  'Academic',
] as const

export type VocabularyCategory = (typeof VOCABULARY_CATEGORIES)[number]

export interface VocabularyExample {
  english: string
  malay: string
  chinese: string
}

export interface VocabularyItem {
  id: string
  term: string
  normalizedTerm: string
  partOfSpeech: string[]
  ipa?: string
  chineseShort: string
  chineseExplanation: string
  englishDefinition: string
  examples: VocabularyExample[]
  collocations?: string[]
  synonyms?: string[]
  antonyms?: string[]
  level: VocabularyLevel
  cefr?: CefrLevel
  categories: VocabularyCategory[]
}
