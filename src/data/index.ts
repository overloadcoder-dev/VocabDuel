import { vocabulary } from './vocabulary'

export { filterVocabulary } from './filters'
export type { VocabularyFilters } from './filters'
export {
  level1Vocabulary,
  level2Vocabulary,
  level3Vocabulary,
  level4Vocabulary,
  level5Vocabulary,
  vocabulary,
} from './vocabulary'
export { getVocabularyLevelGuide, VOCABULARY_LEVEL_GUIDE } from './vocabulary/levels'
export type { VocabularyLevelGuide } from './vocabulary/levels'

export const getVocabularyById = (id: string) => vocabulary.find((item) => item.id === id)
export const vocabularyCategories = [...new Set(vocabulary.flatMap((item) => item.categories))]
export const vocabularyLevels = [1, 2, 3, 4, 5] as const
