import { describe, expect, it } from 'vitest'
import { languageFromPath, languagePath, stripLanguageSegment } from './locale'

describe('locale routing', () => {
  it('recognises canonical and compatibility language segments', () => {
    expect(languageFromPath('/my/learn/')).toBe('ms')
    expect(languageFromPath('/en/play/')).toBe('en')
    expect(languageFromPath('/zh/words/apple/')).toBe('zh')
    expect(languageFromPath('/cn/levels/')).toBe('zh')
    expect(languageFromPath('/VocabDuel/my/learn/', '/VocabDuel/')).toBe('ms')
    expect(languageFromPath('/VocabDuel/zh/play/', '/VocabDuel/')).toBe('zh')
    expect(languageFromPath('/VocabDuel/en/', '/VocabDuel/')).toBe('en')
  })

  it('changes language without changing the current route', () => {
    expect(languagePath('/en/learn/', 'ms')).toBe('/my/learn/')
    expect(languagePath('/my/play/', 'zh')).toBe('/zh/play/')
    expect(languagePath('/levels/', 'en')).toBe('/en/levels/')
    expect(stripLanguageSegment('/zh/words/apple/')).toBe('/words/apple/')
  })
})
