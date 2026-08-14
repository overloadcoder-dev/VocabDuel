import type { SessionConfiguration, SessionState, SessionType } from '../types'

export const SESSION_CONFIGS: Readonly<Record<SessionType, SessionConfiguration>> = {
  practice: { type: 'practice', immediateExplanation: true },
  'time-attack': { type: 'time-attack', timeLimitMs: 60_000, immediateExplanation: false },
  survival: { type: 'survival', lives: 3, immediateExplanation: true },
  'level-challenge': { type: 'level-challenge', questionCount: 15, passingScore: 0.8, immediateExplanation: true },
}

export function createSession(configuration: SessionConfiguration): SessionState {
  return {
    status: 'ready', configuration, questionIndex: 0, attempted: 0, correct: 0, score: 0,
    livesRemaining: configuration.lives,
  }
}

export function startSession(state: SessionState, now: number = Date.now()): SessionState {
  if (state.status !== 'ready') throw new Error(`Cannot start a ${state.status} session.`)
  return {
    ...state, status: 'playing', startedAt: now,
    endsAt: state.configuration.timeLimitMs ? now + state.configuration.timeLimitMs : undefined,
  }
}

export function recordSessionAnswer(state: SessionState, wasCorrect: boolean, points = 0, now: number = Date.now()): SessionState {
  if (state.status !== 'playing') throw new Error('Answers can only be recorded while playing.')
  if (state.endsAt !== undefined && now >= state.endsAt) return finishSession(state, 'time-expired', now)
  const attempted = state.attempted + 1
  const correct = state.correct + Number(wasCorrect)
  const livesRemaining = state.livesRemaining === undefined
    ? undefined
    : Math.max(0, state.livesRemaining - Number(!wasCorrect))
  const next = { ...state, questionIndex: state.questionIndex + 1, attempted, correct, score: state.score + points, livesRemaining }
  if (livesRemaining === 0) return finishSession(next, 'out-of-lives', now)
  if (state.configuration.questionCount !== undefined && attempted >= state.configuration.questionCount) {
    return finishSession(next, 'completed', now)
  }
  return next
}

export function finishSession(state: SessionState, reason: NonNullable<SessionState['finishReason']> = 'completed', now: number = Date.now()): SessionState {
  return { ...state, status: 'finished', finishReason: reason, finishedAt: now }
}

export const getSessionAccuracy = (state: Pick<SessionState, 'attempted' | 'correct'>): number =>
  state.attempted === 0 ? 0 : state.correct / state.attempted

export const hasPassedSession = (state: SessionState): boolean =>
  state.configuration.passingScore === undefined || getSessionAccuracy(state) >= state.configuration.passingScore

