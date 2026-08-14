export function sanitizeNickname(value: string): string {
  return value.normalize('NFKC').trim().replace(/\s+/g, ' ')
}

export function validateNickname(value: string): string | null {
  const name = sanitizeNickname(value)
  if (name.length < 2 || name.length > 16) return 'Nickname must contain 2–16 characters.'
  if (!/^[\p{L}\p{N}_\- ]+$/u.test(name)) return 'Nickname may contain letters, numbers, spaces, hyphens, and underscores.'
  return null
}

export function normalizeRoomCode(value: string): string {
  return value.toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, '').slice(0, 6)
}
