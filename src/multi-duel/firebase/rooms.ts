import { get, increment, onDisconnect, onValue, ref, remove, runTransaction, serverTimestamp, set, update, type Unsubscribe } from 'firebase/database'
import { getFirebaseServices } from '../../multiplayer/firebase/client'
import { allPlayersAnswered, allPlayersVoted, canStartMultiMatch } from '../state-machine'
import type { AnswerRecord, MultiRoomConfig, MultiRoomRecord, MultiplayerIdentity, RoomPlayer } from '../types'

const ROOM_LIFETIME_MS = 2 * 60 * 60 * 1000
const REMATCH_COUNTDOWN_MS = 10_000
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function randomCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(6))
  return [...bytes].map((byte) => CODE_CHARS[byte % CODE_CHARS.length]).join('')
}

export async function createMultiRoom(identity: MultiplayerIdentity, config: MultiRoomConfig): Promise<string> {
  const { database } = await getFirebaseServices()
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const code = randomCode()
    const roomRef = ref(database, `multiRooms/${code}`)
    const now = Date.now()
    const result = await runTransaction(roomRef, (room: MultiRoomRecord | null) => room ?? {
      metadata: { code, hostUid: identity.uid, playerCount: 1, state: 'waiting', seed: crypto.getRandomValues(new Uint32Array(1))[0] ?? now, createdAt: now, expiresAt: now + ROOM_LIFETIME_MS },
      config,
      players: { [identity.uid]: { ...identity, ready: false, connected: true, joinedAt: now, lastSeenAt: now } },
    }, { applyLocally: false })
    if (result.committed) {
      await attachPresence(code, identity.uid)
      return code
    }
  }
  throw new Error('无法建立多人房间，请重新尝试。')
}

export async function joinMultiRoom(code: string, identity: MultiplayerIdentity): Promise<MultiRoomRecord> {
  const { database } = await getFirebaseServices()
  const roomRef = ref(database, `multiRooms/${code}`)
  const snapshot = await get(roomRef)
  const room = snapshot.val() as MultiRoomRecord | null
  if (!room) throw new Error('找不到此多人房间，请检查房间码。')
  if (room.metadata.expiresAt < Date.now()) throw new Error('此多人房间已过期。')
  if (room.metadata.state !== 'waiting') throw new Error('此多人对战已经开始。')
  if (room.players?.[identity.uid]) {
    await attachPresence(code, identity.uid)
    return room
  }
  if (Object.keys(room.players ?? {}).length >= room.config.maxPlayers) throw new Error('此多人房间人数已满。')

  const now = Date.now()
  const player: RoomPlayer = { ...identity, ready: false, connected: true, joinedAt: now, lastSeenAt: now }
  await update(roomRef, {
    'metadata/playerCount': increment(1),
    [`players/${identity.uid}`]: player,
  }).catch(() => { throw new Error('此多人房间人数已满或已无法加入。') })
  await attachPresence(code, identity.uid)
  return (await get(roomRef)).val() as MultiRoomRecord
}

async function attachPresence(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const playerRef = ref(database, `multiRooms/${code}/players/${uid}`)
  await onDisconnect(playerRef).update({ connected: false, ready: false, lastSeenAt: serverTimestamp() })
  await update(playerRef, { connected: true, lastSeenAt: serverTimestamp() })
}

export async function observeMultiServerOffset(callback: (offset: number) => void): Promise<Unsubscribe> {
  const { database } = await getFirebaseServices()
  return onValue(ref(database, '.info/serverTimeOffset'), (snapshot) => callback(snapshot.val() ?? 0))
}

export async function subscribeMultiRoom(code: string, callback: (room: MultiRoomRecord | null) => void): Promise<Unsubscribe> {
  const { database } = await getFirebaseServices()
  return onValue(ref(database, `multiRooms/${code}`), (snapshot) => callback(snapshot.val()))
}

export async function setMultiReady(code: string, uid: string, ready: boolean): Promise<void> {
  const { database } = await getFirebaseServices()
  await update(ref(database, `multiRooms/${code}/players/${uid}`), { ready, lastSeenAt: serverTimestamp() })
}

export async function startMultiMatch(code: string, uid: string, offsetMs: number): Promise<void> {
  const { database } = await getFirebaseServices()
  const roomRef = ref(database, `multiRooms/${code}`)
  const room = (await get(roomRef)).val() as MultiRoomRecord | null
  if (!room || room.metadata.hostUid !== uid || room.metadata.state !== 'waiting') return
  const players = Object.values(room.players ?? {})
  if (!canStartMultiMatch(players, room.config.maxPlayers)) return
  await update(roomRef, {
    'metadata/state': 'countdown',
    match: { startAt: Date.now() + offsetMs + 3500, rematchNumber: room.match?.rematchNumber ?? 0 },
  })
}

export async function markMultiPlaying(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const metadataRef = ref(database, `multiRooms/${code}/metadata`)
  const metadata = (await get(metadataRef)).val()
  if (metadata?.hostUid === uid && metadata?.state === 'countdown') await set(ref(database, `multiRooms/${code}/metadata/state`), 'playing')
}

export async function finishMultiMatch(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const metadata = (await get(ref(database, `multiRooms/${code}/metadata`))).val()
  if (metadata?.hostUid !== uid) return
  await runTransaction(ref(database, `multiRooms/${code}/metadata/state`), (state) => ['playing', 'countdown'].includes(state) ? 'finished' : undefined)
}

export async function submitMultiAnswer(code: string, roundId: string, uid: string, selectedAnswer: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const record = { selectedAnswer, submittedAt: serverTimestamp() } as unknown as AnswerRecord
  await update(ref(database, `multiRooms/${code}`), {
    [`answers/${roundId}/${uid}`]: record,
    [`answerCounts/${roundId}`]: increment(1),
  }).catch(() => { throw new Error('此题已经提交答案或无法提交。') })
}

export async function closeMultiRoundEarly(code: string, roundId: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const room = (await get(ref(database, `multiRooms/${code}`))).val() as MultiRoomRecord | null
  if (!room || room.metadata.hostUid !== uid || room.metadata.state !== 'playing') return
  const answerCount = Object.keys(room.answers?.[roundId] ?? {}).length
  const playerCount = Object.keys(room.players ?? {}).length
  if (!allPlayersAnswered(answerCount, playerCount)) return
  await runTransaction(
    ref(database, `multiRooms/${code}/roundEnds/${roundId}`),
    (current) => current ?? serverTimestamp(),
    { applyLocally: false },
  )
}

export async function voteMultiRematch(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  await set(ref(database, `multiRooms/${code}/rematchVotes/${uid}`), true)
}

export async function beginMultiRematch(code: string, uid: string, offsetMs: number): Promise<void> {
  const { database } = await getFirebaseServices()
  const roomRef = ref(database, `multiRooms/${code}`)
  const room = (await get(roomRef)).val() as MultiRoomRecord | null
  if (!room || room.metadata.hostUid !== uid || room.metadata.state !== 'finished') return
  const players = Object.values(room.players ?? {})
  if (!allPlayersVoted(players, room.rematchVotes)) return
  await update(roomRef, {
    'metadata/seed': (room.metadata.seed + 1) >>> 0,
    'metadata/state': 'countdown',
    match: { startAt: Date.now() + offsetMs + REMATCH_COUNTDOWN_MS, rematchNumber: (room.match?.rematchNumber ?? 0) + 1 },
    answers: null,
    answerCounts: null,
    roundEnds: null,
    rematchVotes: null,
  })
}

export async function leaveMultiRoom(code: string, uid: string): Promise<void> {
  const { database } = await getFirebaseServices()
  const roomRef = ref(database, `multiRooms/${code}`)
  const room = (await get(roomRef)).val() as MultiRoomRecord | null
  if (!room) return
  if (room.metadata.hostUid === uid) {
    await remove(roomRef)
    return
  }
  const playerRef = ref(database, `multiRooms/${code}/players/${uid}`)
  if (room.metadata.state === 'waiting' || room.metadata.state === 'finished') {
    await update(roomRef, {
      'metadata/playerCount': increment(-1),
      [`players/${uid}`]: null,
    })
  }
  else await update(playerRef, { connected: false, ready: false, lastSeenAt: serverTimestamp() })
}
