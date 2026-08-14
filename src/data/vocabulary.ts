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

export const vocabulary: readonly VocabularyItem[] = [
  ...level1Vocabulary,
  ...level2Vocabulary,
  ...level3Vocabulary,
  ...level4Vocabulary,
  ...level5Vocabulary,
]
