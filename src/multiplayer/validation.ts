export function sanitizeNickname(value: string): string {
  return value.normalize('NFKC').trim().replace(/\s+/g, ' ')
}

export function validateNickname(value: string): string | null {
  const name = sanitizeNickname(value)
  if (name.length < 2 || name.length > 16) return '昵称须为 2–16 个字符。'
  if (!/^[\p{L}\p{N}_\- ]+$/u.test(name)) return '昵称只可包含文字、数字、空格、连字号及底线。'
  return null
}

export function normalizeRoomCode(value: string): string {
  return value.toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, '').slice(0, 6)
}
