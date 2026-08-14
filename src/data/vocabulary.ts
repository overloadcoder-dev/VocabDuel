import type { VocabularyItem } from '../types'
import { level1Vocabulary } from './vocabulary/level-1'
import { level2Vocabulary } from './vocabulary/level-2'
import { level3Vocabulary } from './vocabulary/level-3'
import { level4Vocabulary } from './vocabulary/level-4'
import { level5Vocabulary } from './vocabulary/level-5'

export {
  level1Vocabulary,
  level2Vocabulary,
  level3Vocabulary,
  level4Vocabulary,
  level5Vocabulary,
}

const allVocabulary: readonly VocabularyItem[] = [
  ...level1Vocabulary,
  ...level2Vocabulary,
  ...level3Vocabulary,
  ...level4Vocabulary,
  ...level5Vocabulary,
]

// Some words are useful at more than one teaching level. The application needs
// one stable record per ID, so the earliest (and therefore simplest) level wins.
const vocabularyById = new Map<string, VocabularyItem>()
for (const item of allVocabulary) {
  if (!vocabularyById.has(item.id)) vocabularyById.set(item.id, item)
}
export const vocabulary: readonly VocabularyItem[] = [...vocabularyById.values()]
