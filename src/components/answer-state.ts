export type AnswerState = 'selected' | 'correct' | 'wrong' | ''

export function getAnswerState(
  choiceId: string,
  selectedAnswer: string | undefined,
  correctAnswer: string,
  revealAnswers: boolean,
): AnswerState {
  if (revealAnswers) {
    if (choiceId === correctAnswer) return 'correct'
    if (choiceId === selectedAnswer) return 'wrong'
    return ''
  }
  return choiceId === selectedAnswer ? 'selected' : ''
}

export function answerMarker(state: AnswerState, choiceIndex: number): string {
  if (state === 'selected') return '●'
  if (state === 'correct') return '✓'
  if (state === 'wrong') return '×'
  return String(choiceIndex + 1)
}
