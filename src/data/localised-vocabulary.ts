import type { AppLanguage } from '../config/locale'
import type { VocabularyItem } from '../types'

export function vocabularyMeaning(item: VocabularyItem, language: AppLanguage): string {
  if (language === 'zh') return item.chineseShort
  if (language === 'ms') return item.malayShort ?? item.englishDefinition
  return item.englishDefinition
}

export function vocabularyExplanation(item: VocabularyItem, language: AppLanguage): string {
  if (language === 'zh') return item.chineseExplanation
  if (language === 'ms') return item.malayExplanation ?? item.malayShort ?? item.englishDefinition
  return item.englishDefinition
}

export function vocabularyExample(item: VocabularyItem, language: AppLanguage): string {
  if (language === 'zh') return item.examples[0]?.chinese ?? ''
  if (language === 'ms') return item.examples[0]?.malay ?? ''
  return item.examples[0]?.english ?? ''
}
