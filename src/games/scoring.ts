export interface ScoreOptions {
  correct: boolean
  timeRemainingMs: number
  roundDurationMs: number
  basePoints?: number
  maximumSpeedBonus?: number
}

export interface ScoreResult {
  base: number
  speedBonus: number
  total: number
}

export interface SoloQuestionScoreOptions {
  correct: boolean
  elapsedMs: number
  timeLimitMs: number
}

export function calculateScore({
  correct,
  timeRemainingMs,
  roundDurationMs,
  basePoints = 100,
  maximumSpeedBonus = 100,
}: ScoreOptions): ScoreResult {
  if (roundDurationMs <= 0 || !Number.isFinite(roundDurationMs)) throw new RangeError('roundDurationMs must be positive.')
  if (!correct) return { base: 0, speedBonus: 0, total: 0 }
  const remainingRatio = Math.min(1, Math.max(0, timeRemainingMs / roundDurationMs))
  const speedBonus = Math.round(maximumSpeedBonus * remainingRatio)
  return { base: basePoints, speedBonus, total: basePoints + speedBonus }
}

export function calculateSoloQuestionScore({ correct, elapsedMs, timeLimitMs }: SoloQuestionScoreOptions): ScoreResult {
  if (!Number.isFinite(elapsedMs) || elapsedMs < 0) throw new RangeError('elapsedMs must be non-negative.')
  if (!Number.isFinite(timeLimitMs) || timeLimitMs < 0) throw new RangeError('timeLimitMs must be non-negative.')
  if (timeLimitMs === 0) {
    return calculateScore({ correct, timeRemainingMs: 0, roundDurationMs: 1, maximumSpeedBonus: 0 })
  }
  return calculateScore({
    correct,
    timeRemainingMs: Math.max(0, timeLimitMs - elapsedMs),
    roundDurationMs: timeLimitMs,
  })
}
