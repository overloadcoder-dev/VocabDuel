import { readFileSync } from 'node:fs'
import { assertFails, assertSucceeds, initializeTestEnvironment, type RulesTestEnvironment } from '@firebase/rules-unit-testing'
import { get, ref, remove, set, update } from 'firebase/database'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const describeWithEmulator = process.env.FIREBASE_DATABASE_EMULATOR_HOST ? describe : describe.skip
const projectId = 'vocabduel-rules-test'
let environment: RulesTestEnvironment

function room(expiresAt: number, state = 'waiting') {
  const now = Date.now()
  return {
    metadata: { code: 'ABC234', hostUid: 'host', guestUid: 'guest', state, seed: 1, createdAt: now - 1_000, expiresAt },
    config: { level: 3, category: 'All', gameType: 'meaning', questionCount: 10, roundTimeMs: 10_000 },
    players: {
      host: { uid: 'host', displayName: 'Host', ready: false, connected: true, joinedAt: now - 1_000, lastSeenAt: now },
      guest: { uid: 'guest', displayName: 'Guest', ready: false, connected: true, joinedAt: now - 1_000, lastSeenAt: now },
    },
  }
}

function multiRoom(expiresAt: number, state = 'waiting') {
  const now = Date.now()
  return {
    metadata: { code: 'MUL234', hostUid: 'host', playerCount: 3, state, seed: 1, createdAt: now - 1_000, expiresAt },
    config: { level: 3, category: 'All', gameType: 'meaning', questionCount: 10, roundTimeMs: 10_000, maxPlayers: 4 },
    players: {
      host: { uid: 'host', displayName: 'Host', ready: false, connected: true, joinedAt: now - 1_000, lastSeenAt: now },
      second: { uid: 'second', displayName: 'Second', ready: false, connected: true, joinedAt: now - 900, lastSeenAt: now },
      third: { uid: 'third', displayName: 'Third', ready: false, connected: true, joinedAt: now - 800, lastSeenAt: now },
    },
  }
}

describeWithEmulator('Realtime Database room expiry rules', () => {
  beforeAll(async () => {
    environment = await initializeTestEnvironment({
      projectId,
      database: { rules: readFileSync('firebase/database.rules.json', 'utf8') },
    })
  })

  afterAll(async () => environment.cleanup())

  it('allows valid active-room reads and denies expired-room reads', async () => {
    await environment.withSecurityRulesDisabled(async (context) => {
      await set(ref(context.database(), 'rooms/ABC234'), room(Date.now() + 60_000))
    })
    await assertSucceeds(get(ref(environment.authenticatedContext('guest').database(), 'rooms/ABC234')))

    await environment.withSecurityRulesDisabled(async (context) => {
      await update(ref(context.database(), 'rooms/ABC234/metadata'), { expiresAt: Date.now() - 1 })
    })
    await assertFails(get(ref(environment.authenticatedContext('guest').database(), 'rooms/ABC234')))
  })

  it('rejects mutations after expiry but still allows the host to delete', async () => {
    await environment.withSecurityRulesDisabled(async (context) => {
      await set(ref(context.database(), 'rooms/ABC234'), room(Date.now() - 1))
    })
    await assertFails(update(ref(environment.authenticatedContext('guest').database(), 'rooms/ABC234/players/guest'), { ready: true }))
    await assertSucceeds(remove(ref(environment.authenticatedContext('host').database(), 'rooms/ABC234')))
  })

  it('requires new rooms to have a future expiry', async () => {
    const database = environment.authenticatedContext('host').database()
    await assertFails(set(ref(database, 'rooms/ABC234'), room(Date.now() - 1)))
    await assertSucceeds(set(ref(database, 'rooms/ABC234'), room(Date.now() + 60_000)))
    expect((await get(ref(database, 'rooms/ABC234'))).exists()).toBe(true)
  })

  it('keeps multi-duel rooms separate and enforces their configured capacity', async () => {
    await environment.withSecurityRulesDisabled(async (context) => {
      await set(ref(context.database(), 'multiRooms/MUL234'), multiRoom(Date.now() + 60_000))
    })
    const now = Date.now()
    const fourthPlayer = { uid: 'fourth', displayName: 'Fourth', ready: false, connected: true, joinedAt: now, lastSeenAt: now }
    await assertSucceeds(update(ref(environment.authenticatedContext('fourth').database(), 'multiRooms/MUL234'), {
      'metadata/playerCount': 4,
      'players/fourth': fourthPlayer,
    }))

    const fifthPlayer = { uid: 'fifth', displayName: 'Fifth', ready: false, connected: true, joinedAt: now, lastSeenAt: now }
    await assertFails(update(ref(environment.authenticatedContext('fifth').database(), 'multiRooms/MUL234'), {
      'metadata/playerCount': 5,
      'players/fifth': fifthPlayer,
    }))
    const originalRoomTree = await get(ref(environment.authenticatedContext('fourth').database(), 'rooms/MUL234'))
    expect(originalRoomTree.exists()).toBe(false)
  })

  it('allows a disconnected Multi Duel host to pass control to a connected player', async () => {
    await environment.withSecurityRulesDisabled(async (context) => {
      await set(ref(context.database(), 'multiRooms/MUL234'), multiRoom(Date.now() + 60_000))
    })
    await assertSucceeds(update(ref(environment.authenticatedContext('host').database(), 'multiRooms/MUL234/players/host'), {
      connected: false,
      ready: false,
      lastSeenAt: Date.now(),
    }))
    await assertSucceeds(set(ref(environment.authenticatedContext('second').database(), 'multiRooms/MUL234/metadata/hostUid'), 'second'))
    await assertFails(set(ref(environment.authenticatedContext('third').database(), 'multiRooms/MUL234/metadata/hostUid'), 'third'))
  })

  it('lets the host remove only offline players from a waiting Multi Duel room', async () => {
    await environment.withSecurityRulesDisabled(async (context) => {
      const fixture = multiRoom(Date.now() + 60_000)
      fixture.players.third.connected = false
      await set(ref(context.database(), 'multiRooms/MUL234'), fixture)
    })
    const hostRoom = ref(environment.authenticatedContext('host').database(), 'multiRooms/MUL234')
    await assertSucceeds(update(hostRoom, { 'metadata/playerCount': 2, 'players/third': null }))
    await assertFails(update(hostRoom, { 'metadata/playerCount': 1, 'players/second': null }))
  })

  it('allows connected survivors to close a round and replay without offline players', async () => {
    const now = Date.now()
    await environment.withSecurityRulesDisabled(async (context) => {
      const playingFixture = multiRoom(now + 60_000, 'playing')
      playingFixture.players.third.connected = false
      await set(ref(context.database(), 'multiRooms/MUL234'), {
        ...playingFixture,
        answerCounts: { q1: 2 },
        answers: {
          q1: {
            host: { selectedAnswer: 'a', submittedAt: now },
            second: { selectedAnswer: 'b', submittedAt: now },
          },
        },
      })
    })
    const hostDatabase = environment.authenticatedContext('host').database()
    await assertSucceeds(set(ref(hostDatabase, 'multiRooms/MUL234/roundEnds/q1'), Date.now()))

    await environment.withSecurityRulesDisabled(async (context) => {
      const finishedFixture = multiRoom(Date.now() + 60_000, 'finished')
      finishedFixture.players.third.connected = false
      await set(ref(context.database(), 'multiRooms/MUL234'), finishedFixture)
    })
    await assertSucceeds(update(ref(hostDatabase, 'multiRooms/MUL234'), {
      'metadata/playerCount': 2,
      'metadata/seed': 2,
      'metadata/state': 'countdown',
      match: { startAt: Date.now() + 10_000, rematchNumber: 1 },
      'players/third': null,
    }))
  })
})
