import { get, onDisconnect, onValue, ref, remove, runTransaction, serverTimestamp, set, update, type Unsubscribe } from 'firebase/database'
import { getFirebaseServices } from './client'
import type { AnswerRecord, MultiplayerIdentity, RoomConfig, RoomPlayer, RoomRecord } from '../types'

const ROOM_LIFETIME_MS = 2 * 60 * 60 * 1000
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function randomCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(6))
  return [...bytes].map((byte) => CODE_CHARS[byte % CODE_CHARS.length]).join('')
}

export async function createRoom(identity: MultiplayerIdentity, config: RoomConfig): Promise<string> {
  const { database } = await getFirebaseServices()
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const code = randomCode()
    const roomRef = ref(database, `rooms/${code}`)
    const now = Date.now()
    const result = await runTransaction(roomRef, (room: RoomRecord | null) => room ?? {
      metadata: { code, hostUid: identity.uid, state: 'waiting', seed: crypto.getRandomValues(new Uint32Array(1))[0] ?? now, createdAt: now, expiresAt: now + ROOM_LIFETIME_MS },
      config,
      players: { [identity.uid]: { ...identity, ready: false, connected: true, joinedAt: now, lastSeenAt: now } }
    }, { applyLocally: false })
    if (result.committed) { await attachPresence(code, identity.uid); return code }
  }
  throw new Error('暂时无法创建房间，请重试。')
}

export async function joinRoom(code: string, identity: MultiplayerIdentity): Promise<void> {
  const { database } = await getFirebaseServices()
  const roomRef = ref(database, `rooms/${code}`)
  const snapshot = await get(roomRef)
  const room = snapshot.val() as RoomRecord | null
  if (!room) throw new Error('找不到该房间。')
  if (room.metadata.expiresAt < Date.now()) throw new Error('房间已过期。')
  if (room.metadata.state !== 'waiting') throw new Error('对战已经开始。')
  if (room.players?.[identity.uid]) {
    await attachPresence(code, identity.uid)
    return
  }
  if (room.metadata.guestUid && room.metadata.guestUid !== identity.uid) throw new Error('房间已满。')
  const now = Date.now()
  const player: RoomPlayer = { ...identity, ready: false, connected: true, joinedAt: now, lastSeenAt: now }
  await update(roomRef, {
    'metadata/guestUid': identity.uid,
    [`players/${identity.uid}`]: player
  }).catch(() => { throw new Error('房间已满或已不可加入。') })
  await attachPresence(code, identity.uid)
}

async function attachPresence(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const playerRef = ref(database, `rooms/${code}/players/${uid}`)
  await onDisconnect(playerRef).update({ connected: false, ready: false, lastSeenAt: serverTimestamp() })
  await update(playerRef, { connected: true, lastSeenAt: serverTimestamp() })
}

export async function observeServerOffset(callback: (offset: number) => void): Promise<Unsubscribe> {
  const { database } = await getFirebaseServices()
  return onValue(ref(database, '.info/serverTimeOffset'), (snapshot) => callback(snapshot.val() ?? 0))
}

export async function subscribeRoom(code: string, callback: (room: RoomRecord | null) => void): Promise<Unsubscribe> {
  const { database } = await getFirebaseServices()
  return onValue(ref(database, `rooms/${code}`), (snapshot) => callback(snapshot.val()))
}

export async function setReady(code: string, uid: string, ready: boolean): Promise<void> {
  const { database } = await getFirebaseServices()
  await update(ref(database, `rooms/${code}/players/${uid}`), { ready, lastSeenAt: serverTimestamp() })
}

export async function startMatch(code: string, uid: string, offsetMs: number): Promise<void> {
  const { database } = await getFirebaseServices()
  const roomSnapshot = await get(ref(database, `rooms/${code}`))
  const room = roomSnapshot.val() as RoomRecord | null
  if (!room || room.metadata.hostUid !== uid || room.metadata.state !== 'waiting') return
  const players = Object.values(room.players ?? {})
  if (players.length !== 2 || !players.every((player) => player.ready && player.connected)) return
  await set(ref(database, `rooms/${code}/match`), { startAt: Date.now() + offsetMs + 3500, rematchNumber: room.match?.rematchNumber ?? 0 })
  await runTransaction(ref(database, `rooms/${code}/metadata/state`), (state) => state === 'waiting' ? 'countdown' : undefined, { applyLocally: false })
}

export async function markPlaying(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const snapshot = await get(ref(database, `rooms/${code}/metadata`))
  if (snapshot.val()?.hostUid === uid && snapshot.val()?.state === 'countdown') await set(ref(database, `rooms/${code}/metadata/state`), 'playing')
}

export async function finishMatch(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const metadata = (await get(ref(database, `rooms/${code}/metadata`))).val()
  if (metadata?.hostUid !== uid) return
  await runTransaction(ref(database, `rooms/${code}/metadata/state`), (state) => ['playing', 'countdown'].includes(state) ? 'finished' : undefined)
}

export async function submitAnswer(code: string, roundId: string, uid: string, selectedAnswer: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const answerRef = ref(database, `rooms/${code}/answers/${roundId}/${uid}`)
  const record = { selectedAnswer, submittedAt: serverTimestamp() } as unknown as AnswerRecord
  const result = await runTransaction(answerRef, (current) => current ?? record, { applyLocally: false })
  if (!result.committed) throw new Error('本题答案已经提交。')
}

export async function voteRematch(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  await set(ref(database, `rooms/${code}/rematchVotes/${uid}`), true)
}

export async function beginRematch(code: string, uid: string, offsetMs: number): Promise<void> {
  const { database } = await getFirebaseServices()
  const room = (await get(ref(database, `rooms/${code}`))).val() as RoomRecord | null
  if (!room || room.metadata.hostUid !== uid || room.metadata.state !== 'finished') return
  const ids = Object.keys(room.players ?? {})
  if (ids.length !== 2 || !ids.every((id) => room.rematchVotes?.[id])) return
  await set(ref(database, `rooms/${code}/metadata/seed`), (room.metadata.seed + 1) >>> 0)
  await set(ref(database, `rooms/${code}/match`), { startAt: Date.now() + offsetMs + 3500, rematchNumber: (room.match?.rematchNumber ?? 0) + 1 })
  await remove(ref(database, `rooms/${code}/answers`))
  await remove(ref(database, `rooms/${code}/rematchVotes`))
  await runTransaction(ref(database, `rooms/${code}/metadata/state`), (state) => state === 'finished' ? 'countdown' : undefined)
}

export async function leaveRoom(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const roomRef = ref(database, `rooms/${code}`)
  const snapshot = await get(roomRef)
  const room = snapshot.val() as RoomRecord | null
  if (!room) return
  if (room.metadata.hostUid === uid) await remove(roomRef)
  else if (room.metadata.guestUid === uid) {
    await update(roomRef, {
      'metadata/guestUid': null,
      [`players/${uid}`]: null
    })
  } else await remove(ref(database, `rooms/${code}/players/${uid}`))
}
