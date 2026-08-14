import { describe, expect, it } from 'vitest'
import {
  createPlacementState,
  placementLevelForRating,
  recommendedPlacementLevel,
  recordPlacementAnswer,
} from './placement'

describe('placement quiz', () => {
  it('starts at the middle level and adapts by half a level per answer', () => {
    const start = createPlacementState()
    expect(placementLevelForRating(start.rating)).toBe(3)
    expect(recordPlacementAnswer(start, true)).toEqual({ rating: 3.5, answered: 1, correct: 1 })
    expect(recordPlacementAnswer(start, false)).toEqual({ rating: 2.5, answered: 1, correct: 0 })
  })

  it('keeps recommendations inside the five app levels', () => {
    let strong = createPlacementState()
    let developing = createPlacementState()
    for (let index = 0; index < 10; index += 1) {
      strong = recordPlacementAnswer(strong, true)
      developing = recordPlacementAnswer(developing, false)
    }
    expect(recommendedPlacementLevel(strong)).toBe(5)
    expect(recommendedPlacementLevel(developing)).toBe(1)
  })

  it('tracks answer totals independently from the recommendation', () => {
    const state = [true, false, true].reduce(recordPlacementAnswer, createPlacementState())
    expect(state).toMatchObject({ answered: 3, correct: 2 })
    expect(recommendedPlacementLevel(state)).toBe(4)
  })
})
