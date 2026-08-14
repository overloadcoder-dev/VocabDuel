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

export interface RoundTiming {
  index: number
  roundStartAt: number
  roundEndAt: number
  resultEndAt: number
}

export function roundTimingAtIndex(
  startAt: number,
  index: number,
  questionIds: readonly string[],
  roundTimeMs: number,
  resultTimeMs = 1800,
  earlyRoundEnds: Readonly<Record<string, number>> = {},
): RoundTiming {
  let roundStartAt = startAt
  for (let currentIndex = 0; currentIndex <= index; currentIndex += 1) {
    const scheduledEndAt = roundStartAt + roundTimeMs
    const recordedEndAt = earlyRoundEnds[questionIds[currentIndex]!]
    const roundEndAt = Number.isFinite(recordedEndAt)
      ? Math.max(roundStartAt, Math.min(scheduledEndAt, recordedEndAt!))
      : scheduledEndAt
    const resultEndAt = roundEndAt + resultTimeMs
    if (currentIndex === index) return { index, roundStartAt, roundEndAt, resultEndAt }
    roundStartAt = resultEndAt
  }
  return { index, roundStartAt, roundEndAt: roundStartAt, resultEndAt: roundStartAt }
}

export function activeRoundTiming(
  startAt: number,
  now: number,
  questionIds: readonly string[],
  roundTimeMs: number,
  resultTimeMs = 1800,
  earlyRoundEnds: Readonly<Record<string, number>> = {},
): RoundTiming {
  for (let index = 0; index < questionIds.length; index += 1) {
    const timing = roundTimingAtIndex(startAt, index, questionIds, roundTimeMs, resultTimeMs, earlyRoundEnds)
    if (now < timing.resultEndAt) return timing
  }
  const roundStartAt = questionIds.length
    ? roundTimingAtIndex(startAt, questionIds.length - 1, questionIds, roundTimeMs, resultTimeMs, earlyRoundEnds).resultEndAt
    : startAt
  return { index: questionIds.length, roundStartAt, roundEndAt: roundStartAt, resultEndAt: roundStartAt }
}
