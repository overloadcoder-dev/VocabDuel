import { filterVocabulary, vocabulary as defaultVocabulary } from '../data'
import type { Choice, GameQuestion, QuestionGenerationOptions, VocabularyItem } from '../types'
import { createSeededRandom, shuffleSeeded } from './rng'

const meaning = (item: VocabularyItem) => item.chineseShort

function contextPrompt(item: VocabularyItem): { prompt: string; example: string } {
  const example = item.examples[0]?.english
  if (!example) throw new Error(`Vocabulary item "${item.id}" has no example sentence.`)
  const expression = new RegExp(`\\b${item.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
  const prompt = example.replace(expression, '______')
  if (prompt === example) throw new Error(`Example for "${item.id}" does not contain its term.`)
  return { prompt, example }
}

function choicesFor(
  correct: VocabularyItem,
  pool: readonly VocabularyItem[],
  label: (item: VocabularyItem) => string,
  random: () => number,
): Choice[] {
  const nearby = pool.filter((item) => item.id !== correct.id && Math.abs(item.level - correct.level) <= 1)
  const remaining = pool.filter((item) => item.id !== correct.id && !nearby.includes(item))
  const distractors = [...shuffleSeeded(nearby, random), ...shuffleSeeded(remaining, random)]
    .filter((item, index, all) => all.findIndex((candidate) => label(candidate) === label(item)) === index)
    .slice(0, 3)
  if (distractors.length < 3) throw new Error('At least four vocabulary items with distinct answers are required.')
  return shuffleSeeded([correct, ...distractors], random).map((item) => ({ id: item.id, label: label(item) }))
}

function createQuestion(
  item: VocabularyItem,
  gameType: QuestionGenerationOptions['gameType'],
  pool: readonly VocabularyItem[],
  random: () => number,
  index: number,
): GameQuestion {
  const base = {
    id: `${gameType}-${index + 1}-${item.id}`,
    gameType,
    vocabularyId: item.id,
    explanation: `${item.term}：${item.chineseExplanation}`,
    ipa: item.ipa,
  }
  switch (gameType) {
    case 'meaning':
      return { ...base, prompt: item.term, choices: choicesFor(item, pool, meaning, random), correctAnswer: item.id }
    case 'reverse':
      return { ...base, prompt: meaning(item), choices: choicesFor(item, pool, ({ term }) => term, random), correctAnswer: item.id }
    case 'audio':
      return { ...base, prompt: 'Listen, then choose the word you hear.', choices: choicesFor(item, pool, ({ term }) => term, random), correctAnswer: item.id, audioTerm: item.term }
    case 'spelling':
      return { ...base, prompt: meaning(item), correctAnswer: item.term, audioTerm: item.term }
    case 'context': {
      const context = contextPrompt(item)
      return { ...base, prompt: context.prompt, example: context.example, choices: choicesFor(item, pool, ({ term }) => term, random), correctAnswer: item.id }
    }
  }
}

export function generateQuestions(
  options: QuestionGenerationOptions,
  source: readonly VocabularyItem[] = defaultVocabulary,
): GameQuestion[] {
  if (!Number.isInteger(options.questionCount) || options.questionCount < 1) {
    throw new RangeError('questionCount must be a positive integer.')
  }
  const targets = filterVocabulary(source, {
    levels: options.level,
    categories: options.category,
    ids: options.vocabularyIds,
  })
  if (targets.length === 0) throw new Error('No vocabulary matches the selected filters.')
  if (options.questionCount > targets.length) {
    throw new RangeError(`Requested ${options.questionCount} unique questions from a pool of ${targets.length}.`)
  }
  if (options.gameType !== 'spelling' && source.length < 4) {
    throw new Error('Choice-based games require at least four vocabulary items.')
  }
  const random = createSeededRandom(options.seed)
  return shuffleSeeded(targets, random)
    .slice(0, options.questionCount)
    .map((item, index) => createQuestion(item, options.gameType, source, random, index))
}
