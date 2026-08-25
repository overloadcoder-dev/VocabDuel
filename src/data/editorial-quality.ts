import type { VocabularyItem } from '../types/vocabulary'

export const EDITORIAL_TEMPLATE_PATTERNS = [
  /The report identifies .+ as a significant feature of the broader analysis\./i,
  /Researchers may encounter the expression .+ in advanced writing\./i,
  /The phrase .+ is common in formal academic or professional contexts\./i,
] as const

export function hasTemplatedEditorialContent(word: VocabularyItem): boolean {
  return word.examples.some((example) => EDITORIAL_TEMPLATE_PATTERNS.some((pattern) => pattern.test(example.english)))
}

export function isEditoriallyIndexable(word: VocabularyItem): boolean {
  return !hasTemplatedEditorialContent(word)
}
