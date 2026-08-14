import type { VocabularyItem } from '../../types'

/** Highly advanced C1-C2 vocabulary with nuanced, specialised, or uncommon usage. */
export const level5Vocabulary = [
  {
    id: 'ubiquitous', term: 'ubiquitous', normalizedTerm: 'ubiquitous', partOfSpeech: ['adjective'], ipa: '/juːˈbɪkwɪtəs/',
    chineseShort: '无处不在的；普遍存在的', chineseExplanation: '看起来在所有地方都存在或出现。', englishDefinition: 'Present, appearing, or found everywhere.',
    examples: [{ english: 'Smartphones have become ubiquitous in modern life.', chinese: '智能手机在现代生活中已经无处不在。' }], synonyms: ['omnipresent'], level: 5, cefr: 'C2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'pragmatic', term: 'pragmatic', normalizedTerm: 'pragmatic', partOfSpeech: ['adjective'], ipa: '/præɡˈmætɪk/',
    chineseShort: '务实的；实用主义的', chineseExplanation: '以实际效果和现实条件为依据，而不是只依靠理论。', englishDefinition: 'Dealing with problems in a practical way based on real conditions.',
    examples: [{ english: 'They took a pragmatic approach to the budget problem.', chinese: '他们采取务实的方法处理预算问题。' }], collocations: ['pragmatic approach', 'pragmatic solution'], synonyms: ['practical'], level: 5, cefr: 'C2', categories: ['Business', 'Academic'],
  },
  {
    id: 'scrutinize', term: 'scrutinize', normalizedTerm: 'scrutinize', partOfSpeech: ['verb'], ipa: '/ˈskruːtənaɪz/',
    chineseShort: '仔细检查；审查', chineseExplanation: '非常认真、详细地检查某事物，常为寻找问题。', englishDefinition: 'To examine something very carefully and in detail.',
    examples: [{ english: 'The committee will scrutinize every line of the proposal.', chinese: '委员会将仔细审查提案的每一行。' }], collocations: ['scrutinize evidence', 'closely scrutinize'], synonyms: ['inspect'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'counterintuitive', term: 'counterintuitive', normalizedTerm: 'counterintuitive', partOfSpeech: ['adjective'], ipa: '/ˌkaʊntərɪnˈtjuːɪtɪv/',
    chineseShort: '违反直觉的', chineseExplanation: '与人们凭直觉预期的结果相反。', englishDefinition: 'Contrary to what common sense or intuition would lead one to expect.',
    examples: [{ english: 'It seems counterintuitive, but resting can improve productivity.', chinese: '这似乎违反直觉，但休息能提高生产力。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'disseminate', term: 'disseminate', normalizedTerm: 'disseminate', partOfSpeech: ['verb'], ipa: '/dɪˈsemɪneɪt/',
    chineseShort: '传播；散布', chineseExplanation: '向许多人或广泛地区传播信息、知识或思想。', englishDefinition: 'To spread information or ideas widely.',
    examples: [{ english: 'The organization works to disseminate reliable health information.', chinese: '该组织致力于广泛传播可靠的健康信息。' }], collocations: ['disseminate information', 'widely disseminated'], synonyms: ['circulate'], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'meticulous', term: 'meticulous', normalizedTerm: 'meticulous', partOfSpeech: ['adjective'], ipa: '/məˈtɪkjələs/',
    chineseShort: '一丝不苟的；极仔细的', chineseExplanation: '对每个细节都给予极大关注，力求准确无误。', englishDefinition: 'Showing extremely careful attention to every detail.',
    examples: [{ english: 'The researcher kept meticulous records of every trial.', chinese: '研究人员一丝不苟地记录了每次试验。' }], collocations: ['meticulous attention', 'meticulous planning'], synonyms: ['thorough'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'unequivocal', term: 'unequivocal', normalizedTerm: 'unequivocal', partOfSpeech: ['adjective'], ipa: '/ˌʌnɪˈkwɪvəkəl/',
    chineseShort: '明确无误的；毫不含糊的', chineseExplanation: '意思或态度完全清楚，不容许不同解释。', englishDefinition: 'Completely clear and leaving no possibility for doubt.',
    examples: [{ english: 'The board gave its unequivocal support to the proposal.', chinese: '董事会明确表示支持这项提案。' }], collocations: ['unequivocal support', 'unequivocal statement'], antonyms: ['ambiguous'], level: 5, cefr: 'C2', categories: ['Business', 'Academic'],
  },
  {
    id: 'corroborate', term: 'corroborate', normalizedTerm: 'corroborate', partOfSpeech: ['verb'], ipa: '/kəˈrɒbəreɪt/',
    chineseShort: '证实；佐证', chineseExplanation: '提供额外的信息或证据，支持某个陈述可能是真实的。', englishDefinition: 'To provide additional evidence that supports a statement or account.',
    examples: [{ english: 'Independent records corroborate the witness account.', chinese: '独立记录佐证了证人的说法。' }], collocations: ['corroborate evidence', 'corroborate a claim'], synonyms: ['verify'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'paradigm', term: 'paradigm', normalizedTerm: 'paradigm', partOfSpeech: ['noun'], ipa: '/ˈpærədaɪm/',
    chineseShort: '范式；典型模式', chineseExplanation: '影响人们理解某个领域的一套典型观念、理论或方法。', englishDefinition: 'A model or framework that shapes how a subject is understood.',
    examples: [{ english: 'Cloud computing created a new paradigm for software delivery.', chinese: '云计算为软件交付创造了新的范式。' }], collocations: ['paradigm shift', 'dominant paradigm'], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'ostensibly', term: 'ostensibly', normalizedTerm: 'ostensibly', partOfSpeech: ['adverb'], ipa: '/ɒˈstensəbli/',
    chineseShort: '表面上；据称', chineseExplanation: '表示某事看起来或被声称如此，但实际情况可能不同。', englishDefinition: 'Apparently or according to what is stated, though perhaps not actually.',
    examples: [{ english: 'The update was ostensibly designed to improve security.', chinese: '据称这次更新旨在提高安全性。' }], synonyms: ['apparently'], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
] satisfies readonly VocabularyItem[]
