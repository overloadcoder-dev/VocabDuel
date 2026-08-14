import { describe, expect, it } from 'vitest'
import { vocabulary } from '../data'
import { answersMatch, generateQuestions } from './index'

describe('question generation', () => {
  it('is deterministic for the same seed and different for a different seed', () => {
    const options = { gameType: 'meaning' as const, level: 3 as const, questionCount: 5, seed: 'room-42' }
    expect(generateQuestions(options)).toEqual(generateQuestions(options))
    expect(generateQuestions(options)).not.toEqual(generateQuestions({ ...options, seed: 'room-43' }))
  })

  it('avoids duplicate targets and produces exactly one correct choice', () => {
    const questions = generateQuestions({ gameType: 'reverse', questionCount: 20, seed: 7 })
    expect(new Set(questions.map(({ vocabularyId }) => vocabularyId)).size).toBe(questions.length)
    for (const question of questions) {
      expect(question.choices).toHaveLength(4)
      expect(question.choices?.filter(({ id }) => id === question.correctAnswer)).toHaveLength(1)
    }
  })

  it('applies level and category filters to targets', () => {
    const questions = generateQuestions({ gameType: 'spelling', level: 4, category: 'Technology', questionCount: 3, seed: 10 })
    for (const question of questions) {
      const item = vocabulary.find(({ id }) => id === question.vocabularyId)
      expect(item?.level).toBe(4)
      expect(item?.categories).toContain('Technology')
    }
  })

  it.each(['meaning', 'reverse', 'audio', 'spelling', 'context'] as const)('creates valid %s questions', (gameType) => {
    const question = generateQuestions({ gameType, questionCount: 1, seed: 'all-modes' })[0]!
    expect(question.prompt.length).toBeGreaterThan(0)
    expect(question.correctAnswer.length).toBeGreaterThan(0)
    if (gameType === 'spelling') expect(question.choices).toBeUndefined()
    else expect(question.choices).toHaveLength(4)
    if (gameType === 'context') expect(question.prompt).toContain('______')
    if (gameType === 'audio' || gameType === 'spelling') expect(question.audioTerm).toBeTruthy()
  })

  it('can build context prompts for every curated entry', () => {
    const questions = generateQuestions({ gameType: 'context', questionCount: vocabulary.length, seed: 'contexts' })
    expect(questions.every(({ prompt }) => prompt.includes('______'))).toBe(true)
  })

  it('normalizes harmless input differences without accepting misspellings', () => {
    expect(answersMatch('  ACQUIRE  ', 'acquire')).toBe(true)
    expect(answersMatch('acqiure', 'acquire')).toBe(false)
  })
})
