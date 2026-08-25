import { normalizeRoomCode, validateNickname } from './validation'

export function escapeHtml(value: string): string {
  const node = document.createElement('div')
  node.textContent = value
  return node.innerHTML
}

export function reviewSpeakButton(term: string): string {
  const safeTerm = escapeHtml(term)
  return `<button class="review-speak-button" type="button" data-speak="${safeTerm}" aria-label="播放 ${safeTerm} 的发音" title="播放发音"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z"/><path d="M15 9.5a4 4 0 0 1 0 5M17.8 6.8a8 8 0 0 1 0 10.4"/></svg></button>`
}

export function leaderboardRankBadge(place: number, rankingDecided: boolean, imageCount = 2): string {
  if (!rankingDecided) return '<span class="multi-rank" data-undecided aria-label="排名未定"><span aria-hidden="true">–</span></span>'
  const rank = place + 1
  const imageFiles = ['first.webp', 'second.webp', 'third.webp', 'fourth.webp'] as const
  const imageFile = place < imageCount ? imageFiles[place] : undefined
  if (!imageFile) return `<span class="multi-rank" aria-label="第 ${rank} 名">${rank}</span>`
  return `<span class="multi-rank" data-ranked aria-label="第 ${rank} 名"><img class="multi-rank-image" src="${import.meta.env.BASE_URL}images/multi-duel/${imageFile}" alt="" width="64" height="64" decoding="async"></span>`
}

export function guestName(uid: string): string {
  let saved: string | null = null
  try { saved = localStorage.getItem('vocabduel.nickname') } catch { /* Storage can be denied. */ }
  return saved && !validateNickname(saved) ? saved : `玩家 ${uid.slice(-4).toUpperCase()}`
}

export function saveGuestName(name: string, storage: Pick<Storage, 'setItem'> = localStorage): boolean {
  try {
    storage.setItem('vocabduel.nickname', name)
    return true
  } catch {
    return false
  }
}

export function roomCodeInputTemplate(value: string): string {
  const code = normalizeRoomCode(value)
  const slots = Array.from({ length: 6 }, (_item, index) => `<span class="room-code-slot" ${code[index] ? 'data-filled' : ''}>${escapeHtml(code[index] ?? '')}</span>`).join('')
  return `<div class="room-code-input" data-room-code-input>
    <input class="room-code-entry" name="code" inputmode="text" autocomplete="one-time-code" autocapitalize="characters" autocorrect="off" enterkeyhint="go" spellcheck="false" value="${escapeHtml(code)}" aria-label="6 位房间码" aria-describedby="room-code-hint" required>
    <div class="room-code-slots" aria-hidden="true">${slots}</div>
  </div><small id="room-code-hint" class="field-hint">输入或贴上 6 位房间码，英文字母会自动转为大写。</small>`
}

export function refreshRoomCodeInput(input: HTMLInputElement, commit = false): void {
  const code = normalizeRoomCode(input.value)
  if (commit) input.value = code
  input.closest<HTMLElement>('[data-room-code-input]')?.querySelectorAll<HTMLElement>('.room-code-slot').forEach((slot, index) => {
    slot.textContent = code[index] ?? ''
    slot.toggleAttribute('data-filled', Boolean(code[index]))
    slot.toggleAttribute('data-active', document.activeElement === input && index === Math.min(code.length, 5))
  })
}
