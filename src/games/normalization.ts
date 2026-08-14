/** Normalizes only presentation differences; punctuation and spelling remain significant. */
export function normalizeAnswer(answer: string): string {
  return answer.normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('en')
}

export const answersMatch = (answer: string, expected: string): boolean =>
  normalizeAnswer(answer) === normalizeAnswer(expected)

