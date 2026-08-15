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
})
