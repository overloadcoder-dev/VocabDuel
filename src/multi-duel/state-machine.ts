import type { RoomPlayer } from './types'

export function canStartMultiMatch(players: readonly RoomPlayer[], maxPlayers: number): boolean {
  return players.length >= 2
    && players.length <= maxPlayers
    && players.every((player) => player.connected && player.ready)
}

export function allPlayersAnswered(answerCount: number, playerCount: number): boolean {
  return playerCount >= 2 && answerCount >= playerCount
}

export function allPlayersVoted(
  players: readonly RoomPlayer[],
  votes: Readonly<Record<string, boolean>> | undefined,
): boolean {
  return players.length >= 2
    && players.every((player) => player.connected && votes?.[player.uid] === true)
}
