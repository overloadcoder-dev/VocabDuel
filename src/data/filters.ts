import type { VocabularyCategory, VocabularyItem, VocabularyLevel } from '../types'

export interface VocabularyFilters {
  levels?: VocabularyLevel | readonly VocabularyLevel[]
  categories?: VocabularyCategory | readonly VocabularyCategory[]
  ids?: readonly string[]
  query?: string
}

const toArray = <T>(value: T | readonly T[] | undefined): readonly T[] =>
  value === undefined ? [] : Array.isArray(value) ? value : [value as T]

export function filterVocabulary(items: readonly VocabularyItem[], filters: VocabularyFilters = {}): VocabularyItem[] {
  const levels = toArray(filters.levels)
  const categories = toArray(filters.categories)
  const ids = new Set(filters.ids)
  const query = filters.query?.trim().toLocaleLowerCase()

  return items.filter((item) =>
    (levels.length === 0 || levels.includes(item.level))
    && (categories.length === 0 || categories.some((category) => item.categories.includes(category)))
    && (ids.size === 0 || ids.has(item.id))
    && (!query || [item.term, item.chineseShort, item.englishDefinition].some((value) => value.toLocaleLowerCase().includes(query))),
  )
}

