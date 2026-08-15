import type { VocabularyItem, VocabularyLevel } from '../types'

export interface VocabularyDataset {
  readonly items: readonly VocabularyItem[]
  readonly byId: ReadonlyMap<string, VocabularyItem>
}

const ALL_LEVELS: readonly VocabularyLevel[] = [1, 2, 3, 4, 5]

const levelLoaders: Record<VocabularyLevel, () => Promise<readonly VocabularyItem[]>> = {
  1: async () => (await import('./vocabulary/level-1')).level1Vocabulary,
  2: async () => (await import('./vocabulary/level-2')).level2Vocabulary,
  3: async () => (await import('./vocabulary/level-3')).level3Vocabulary,
  4: async () => (await import('./vocabulary/level-4')).level4Vocabulary,
  5: async () => (await import('./vocabulary/level-5')).level5Vocabulary,
}

const levelPromises = new Map<VocabularyLevel, Promise<readonly VocabularyItem[]>>()
const datasetPromises = new Map<string, Promise<VocabularyDataset>>()

function loadLevelItems(level: VocabularyLevel): Promise<readonly VocabularyItem[]> {
  const cached = levelPromises.get(level)
  if (cached) return cached
  const pending = levelLoaders[level]()
  levelPromises.set(level, pending)
  return pending
}

export function loadVocabularyLevel(level: VocabularyLevel): Promise<VocabularyDataset> {
  return loadVocabulary([level])
}

export function loadVocabulary(levels: readonly VocabularyLevel[] = ALL_LEVELS): Promise<VocabularyDataset> {
  const selectedLevels = [...new Set(levels)].sort((left, right) => left - right)
  if (selectedLevels.length === 0) return Promise.resolve({ items: [], byId: new Map() })
  const cacheKey = selectedLevels.join(',')
  const cached = datasetPromises.get(cacheKey)
  if (cached) return cached

  const pending = Promise.all(selectedLevels.map(loadLevelItems)).then((groups) => {
    const byId = new Map<string, VocabularyItem>()
    for (const item of groups.flat()) {
      if (!byId.has(item.id)) byId.set(item.id, item)
    }
    return { items: [...byId.values()], byId }
  })
  datasetPromises.set(cacheKey, pending)
  return pending
}

export function loadAllVocabulary(): Promise<VocabularyDataset> {
  return loadVocabulary(ALL_LEVELS)
}
