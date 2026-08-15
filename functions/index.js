import { initializeApp } from 'firebase-admin/app'
import { getDatabase } from 'firebase-admin/database'
import { logger } from 'firebase-functions'
import { onSchedule } from 'firebase-functions/v2/scheduler'
import { CLEANUP_BATCH_SIZE, CLEANUP_MAX_BATCHES, expiredRoomUpdates } from './cleanup.js'

initializeApp()

export const cleanupExpiredRooms = onSchedule({
  schedule: 'every 15 minutes',
  timeoutSeconds: 120,
  memory: '256MiB',
}, async () => {
  const roomsRef = getDatabase().ref('rooms')
  const cutoff = Date.now()
  let deletedCount = 0
  let batches = 0

  for (; batches < CLEANUP_MAX_BATCHES; batches += 1) {
    const snapshot = await roomsRef.orderByChild('metadata/expiresAt').startAt(0).endAt(cutoff).limitToFirst(CLEANUP_BATCH_SIZE).get()
    if (!snapshot.exists()) break
    const updates = expiredRoomUpdates(snapshot.val(), cutoff)
    const keys = Object.keys(updates)
    if (keys.length === 0) {
      logger.warn('Expired-room query returned no safe deletion candidates.')
      break
    }
    await roomsRef.update(updates)
    deletedCount += keys.length
    if (snapshot.numChildren() < CLEANUP_BATCH_SIZE) break
  }

  logger.info('Expired-room cleanup completed.', { deletedCount, batches: Math.min(batches + 1, CLEANUP_MAX_BATCHES), cutoff })
  if (batches === CLEANUP_MAX_BATCHES) logger.warn('Expired-room cleanup reached its batch cap; remaining rooms will be retried.', { deletedCount })
})

export const cleanupExpiredMultiRooms = onSchedule({
  schedule: 'every 15 minutes',
  timeoutSeconds: 120,
  memory: '256MiB',
}, async () => {
  const roomsRef = getDatabase().ref('multiRooms')
  const cutoff = Date.now()
  let deletedCount = 0
  let batches = 0

  for (; batches < CLEANUP_MAX_BATCHES; batches += 1) {
    const snapshot = await roomsRef.orderByChild('metadata/expiresAt').startAt(0).endAt(cutoff).limitToFirst(CLEANUP_BATCH_SIZE).get()
    if (!snapshot.exists()) break
    const updates = expiredRoomUpdates(snapshot.val(), cutoff)
    const keys = Object.keys(updates)
    if (keys.length === 0) {
      logger.warn('Expired multi-room query returned no safe deletion candidates.')
      break
    }
    await roomsRef.update(updates)
    deletedCount += keys.length
    if (snapshot.numChildren() < CLEANUP_BATCH_SIZE) break
  }

  logger.info('Expired multi-room cleanup completed.', { deletedCount, batches: Math.min(batches + 1, CLEANUP_MAX_BATCHES), cutoff })
  if (batches === CLEANUP_MAX_BATCHES) logger.warn('Expired multi-room cleanup reached its batch cap; remaining rooms will be retried.', { deletedCount })
})
