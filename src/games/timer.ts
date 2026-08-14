export const getRemainingTime = (endsAt: number, now: number = Date.now()): number =>
  Math.max(0, endsAt - now)

export const isTimerExpired = (endsAt: number, now: number = Date.now()): boolean =>
  getRemainingTime(endsAt, now) === 0

export const getTimerProgress = (startsAt: number, endsAt: number, now: number = Date.now()): number => {
  if (endsAt <= startsAt) return now >= endsAt ? 1 : 0
  return Math.min(1, Math.max(0, (now - startsAt) / (endsAt - startsAt)))
}

