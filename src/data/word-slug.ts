const WINDOWS_RESERVED_NAME = /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])$/i

export function vocabularyWordSlug(id: string): string {
  return WINDOWS_RESERVED_NAME.test(id) ? `term-${id}` : id
}
