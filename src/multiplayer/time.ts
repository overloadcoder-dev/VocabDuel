export function synchronizedNow(offsetMs: number, localNow = Date.now()): number {
  return localNow + offsetMs
}

export function remainingRoundMs(deadline: number, offsetMs: number, localNow = Date.now()): number {
  return Math.max(0, deadline - synchronizedNow(offsetMs, localNow))
}

export function roundWindow(startAt: number, index: number, roundTimeMs: number, resultTimeMs = 1800) {
  const roundStartAt = startAt + index * (roundTimeMs + resultTimeMs)
  return { roundStartAt, roundEndAt: roundStartAt + roundTimeMs, resultEndAt: roundStartAt + roundTimeMs + resultTimeMs }
}
