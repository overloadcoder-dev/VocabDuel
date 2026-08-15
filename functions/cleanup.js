export const CLEANUP_BATCH_SIZE = 100
export const CLEANUP_MAX_BATCHES = 10

const ROOM_CODE = /^[A-HJ-NP-Z2-9]{6}$/

export function expiredRoomUpdates(rooms, cutoff) {
  if (!Number.isFinite(cutoff)) throw new TypeError('cutoff must be a finite timestamp.')
  const updates = {}
  for (const [roomCode, room] of Object.entries(rooms ?? {})) {
    const expiresAt = room?.metadata?.expiresAt
    if (ROOM_CODE.test(roomCode) && Number.isFinite(expiresAt) && expiresAt <= cutoff) updates[roomCode] = null
  }
  return updates
}
