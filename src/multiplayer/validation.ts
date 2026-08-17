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
  return value.normalize('NFKC').toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, '').slice(0, 6)
}

export function readInviteRoomCode(search: string): string | null {
  const code = normalizeRoomCode(new URLSearchParams(search).get('room') ?? '')
  return code.length === 6 ? code : null
}

export function joinRoomErrorCopy(message: string): { title: string; message: string } {
  if (message.includes('人数已满')) {
    return { title: '房间已满', message: '这个房间已经没有空位了。请向房主确认，或建立一个新房间。' }
  }
  if (message.includes('已经开始')) {
    return { title: '对战已经开始', message: '这场对战已经开始，暂时不能加入。请等待下一场，或建立一个新房间。' }
  }
  if (message.includes('已过期')) {
    return { title: '房间已过期', message: '这个房间码已经过期。请向房主索取新的房间码。' }
  }
  if (message.includes('找不到')) {
    return { title: '找不到房间', message: '请检查六位房间码是否正确，然后再试一次。' }
  }
  return { title: '无法加入房间', message: message || '暂时无法加入房间，请稍后再试。' }
}
