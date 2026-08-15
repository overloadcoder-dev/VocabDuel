import { describe, expect, it } from 'vitest'
import { answerMarker, getAnswerState } from './answer-state'

describe('answer state presentation', () => {
  it('marks only the chosen answer while the result is pending', () => {
    expect(getAnswerState('choice-b', 'choice-b', 'choice-a', false)).toBe('selected')
    expect(getAnswerState('choice-a', 'choice-b', 'choice-a', false)).toBe('')
    expect(answerMarker('selected', 1)).toBe('●')
  })

  it('reveals the correct answer and a wrong selection', () => {
    expect(getAnswerState('choice-a', 'choice-b', 'choice-a', true)).toBe('correct')
    expect(getAnswerState('choice-b', 'choice-b', 'choice-a', true)).toBe('wrong')
    expect(answerMarker('correct', 0)).toBe('✓')
    expect(answerMarker('wrong', 1)).toBe('×')
  })

  it('turns a correct selection into the revealed correct state', () => {
    expect(getAnswerState('choice-a', 'choice-a', 'choice-a', true)).toBe('correct')
  })
})
