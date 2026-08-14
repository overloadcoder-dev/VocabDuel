import { vocabulary } from './vocabulary'

export { filterVocabulary } from './filters'
export type { VocabularyFilters } from './filters'
export { vocabulary }

export const getVocabularyById = (id: string) => vocabulary.find((item) => item.id === id)
export const vocabularyCategories = [...new Set(vocabulary.flatMap((item) => item.categories))]
export const vocabularyLevels = [1, 2, 3, 4, 5] as const
