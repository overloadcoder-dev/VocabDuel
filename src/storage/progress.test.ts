import { describe, expect, it } from 'vitest'
import { createDefaultProgress, createProgressRepository, PROGRESS_STORAGE_KEY, rankWeakWords, recordWordResult, setWordStatus } from './index'

class MemoryStorage {
  data = new Map<string, string>()
  getItem(key: string) { return this.data.get(key) ?? null }
  setItem(key: string, value: string) { this.data.set(key, value) }
  removeItem(key: string) { this.data.delete(key) }
}

describe('local progress', () => {
  it('persists, reloads, and resets safe progress', () => {
    const storage = new MemoryStorage()
    const repository = createProgressRepository(storage)
    repository.save({ ...createDefaultProgress(), xp: 120 })
    expect(repository.load().xp).toBe(120)
    expect(repository.reset().xp).toBe(0)
    expect(storage.getItem(PROGRESS_STORAGE_KEY)).toBeNull()
  })

  it('recovers from malformed storage', () => {
    const storage = new MemoryStorage()
    storage.setItem(PROGRESS_STORAGE_KEY, '{broken')
    expect(createProgressRepository(storage).load()).toEqual(createDefaultProgress())
  })

  it('preserves selected pronunciation rates and migrates the old slow setting', () => {
    const storage = new MemoryStorage()
    const repository = createProgressRepository(storage)
    repository.save({ ...createDefaultProgress(), audioSpeed: 1.25 })
    expect(repository.load().audioSpeed).toBe(1.25)

    storage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({ ...createDefaultProgress(), audioSpeed: 'slow' }))
    expect(repository.load().audioSpeed).toBe(0.75)
  })

  it('prioritizes explicitly difficult and repeatedly missed words', () => {
    let progress = createDefaultProgress()
    progress = recordWordResult(progress, 'acquire', false, 1)
    progress = recordWordResult(progress, 'acquire', false, 2)
    progress = recordWordResult(progress, 'apple', true, 3)
    progress = setWordStatus(progress, 'reluctant', 'difficult', true)
    expect(rankWeakWords(progress)).toEqual(['acquire', 'reluctant'])
  })
})
