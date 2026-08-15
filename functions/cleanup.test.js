import test from 'node:test'
import assert from 'node:assert/strict'
import { expiredRoomUpdates } from './cleanup.js'

test('selects rooms expired at or before the cutoff', () => {
  assert.deepEqual(expiredRoomUpdates({
    ABC234: { metadata: { expiresAt: 999 } },
    DEF567: { metadata: { expiresAt: 1_000 } },
    GHJ789: { metadata: { expiresAt: 1_001 } },
  }, 1_000), { ABC234: null, DEF567: null })
})

test('retains malformed records and unsafe update paths', () => {
  assert.deepEqual(expiredRoomUpdates({
    ABC234: { metadata: {} },
    DEF567: { metadata: { expiresAt: null } },
    GHJ789: { metadata: { expiresAt: '900' } },
    'BAD/PATH': { metadata: { expiresAt: 900 } },
  }, 1_000), {})
})

test('is idempotent when no expired rooms remain', () => {
  assert.deepEqual(expiredRoomUpdates({ ABC234: { metadata: { expiresAt: 2_000 } } }, 1_000), {})
  assert.deepEqual(expiredRoomUpdates({}, 1_000), {})
})
