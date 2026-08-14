import type { MatchState } from './types'

const transitions: Record<MatchState, readonly MatchState[]> = {
  waiting: ['countdown', 'cancelled'],
  countdown: ['playing', 'cancelled'],
  playing: ['finished', 'cancelled'],
  finished: ['waiting', 'countdown', 'cancelled'],
  cancelled: []
}

export function canTransition(from: MatchState, to: MatchState): boolean {
  return transitions[from].includes(to)
}

export function assertTransition(from: MatchState, to: MatchState): void {
  if (!canTransition(from, to)) throw new Error(`Illegal match transition: ${from} -> ${to}`)
}
