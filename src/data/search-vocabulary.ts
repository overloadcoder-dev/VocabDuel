function normalizeSearchText(value: string): string {
  return value.normalize('NFKC').trim().toLocaleLowerCase('en')
}

export function matchesVocabularyTerm(term: string, query: string): boolean {
  const normalizedQuery = normalizeSearchText(query)
  return !normalizedQuery || normalizeSearchText(term).includes(normalizedQuery)
}
