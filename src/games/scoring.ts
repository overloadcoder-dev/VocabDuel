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

