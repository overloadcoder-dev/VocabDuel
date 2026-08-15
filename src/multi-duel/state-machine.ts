import type { RoomPlayer } from './types'

export function canStartMultiMatch(players: readonly RoomPlayer[], maxPlayers: number): boolean {
  return players.length >= 2
    && players.length <= maxPlayers
    && players.every((player) => player.connected && player.ready)
}

export function allConnectedPlayersAnswered(
  players: readonly RoomPlayer[],
  answers: Readonly<Record<string, unknown>> | undefined,
): boolean {
  const connectedPlayers = players.filter((player) => player.connected)
  return connectedPlayers.length >= 1
    && connectedPlayers.every((player) => answers?.[player.uid] !== undefined)
}

export function allPlayersVoted(
  players: readonly RoomPlayer[],
  votes: Readonly<Record<string, boolean>> | undefined,
): boolean {
  const connectedPlayers = players.filter((player) => player.connected)
  return connectedPlayers.length >= 2
    && connectedPlayers.every((player) => votes?.[player.uid] === true)
}

export function nextConnectedHost(players: readonly RoomPlayer[], currentHostUid: string): string | undefined {
  return players
    .filter((player) => player.uid !== currentHostUid && player.connected)
    .sort((a, b) => a.joinedAt - b.joinedAt || a.uid.localeCompare(b.uid))[0]?.uid
}
