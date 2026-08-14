import type { VocabularyLevel } from '../types'

export const PLACEMENT_QUESTION_COUNT = 10

export interface PlacementState {
  rating: number
  answered: number
  correct: number
}

export function createPlacementState(): PlacementState {
  return { rating: 3, answered: 0, correct: 0 }
}

export function placementLevelForRating(rating: number): VocabularyLevel {
  return Math.max(1, Math.min(5, Math.round(rating))) as VocabularyLevel
}

export function recordPlacementAnswer(state: PlacementState, correct: boolean): PlacementState {
  return {
    rating: Math.max(1, Math.min(5, state.rating + (correct ? 0.5 : -0.5))),
    answered: state.answered + 1,
    correct: state.correct + Number(correct),
  }
}

export function recommendedPlacementLevel(state: PlacementState): VocabularyLevel {
  return placementLevelForRating(state.rating)
}
