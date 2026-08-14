import type { VocabularyItem } from '../../types'

/** Independent B1-B2 vocabulary with broader meanings and common academic use. */
export const level3Vocabulary = [
  {
    id: 'acquire', term: 'acquire', normalizedTerm: 'acquire', partOfSpeech: ['verb'], ipa: '/əˈkwaɪə/',
    chineseShort: '获得；取得；习得', chineseExplanation: '通常表示经过努力、购买、学习或某种过程之后获得某物，比 get 更正式。', englishDefinition: 'To obtain or gain something.',
    examples: [{ english: 'Students acquire strong English skills through regular practice.', chinese: '学生通过经常练习掌握扎实的英语能力。' }], collocations: ['acquire knowledge', 'acquire skills', 'acquire experience'], synonyms: ['obtain', 'gain'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'gradually', term: 'gradually', normalizedTerm: 'gradually', partOfSpeech: ['adverb'], ipa: '/ˈɡrædʒuəli/',
    chineseShort: '逐渐地；渐渐地', chineseExplanation: '表示变化缓慢地、分阶段地发生，而不是突然发生。', englishDefinition: 'Slowly over a period of time or in stages.',
    examples: [{ english: 'The weather gradually became warmer.', chinese: '天气逐渐变暖了。' }], synonyms: ['progressively'], antonyms: ['suddenly'], level: 3, cefr: 'B1', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'reluctant', term: 'reluctant', normalizedTerm: 'reluctant', partOfSpeech: ['adjective'], ipa: '/rɪˈlʌktənt/',
    chineseShort: '不情愿的；勉强的', chineseExplanation: '因为犹豫、不喜欢或缺乏信心而不愿意做某事。', englishDefinition: 'Unwilling and hesitant to do something.',
    examples: [{ english: 'He was reluctant to admit his mistake.', chinese: '他不情愿承认自己的错误。' }], collocations: ['reluctant to agree'], synonyms: ['unwilling'], antonyms: ['willing'], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'evaluate', term: 'evaluate', normalizedTerm: 'evaluate', partOfSpeech: ['verb'], ipa: '/ɪˈvæljueɪt/',
    chineseShort: '评估；评价', chineseExplanation: '根据证据或标准仔细判断某事物的质量、重要性或价值。', englishDefinition: 'To judge the quality, importance, or value of something carefully.',
    examples: [{ english: 'Researchers must evaluate the results of the experiment.', chinese: '研究人员必须评估实验结果。' }], collocations: ['evaluate performance', 'evaluate evidence'], synonyms: ['assess'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'maintain', term: 'maintain', normalizedTerm: 'maintain', partOfSpeech: ['verb'], ipa: '/meɪnˈteɪn/',
    chineseShort: '维持；保养；坚持认为', chineseExplanation: '使某事物保持某种状态；也可表示保养设备或坚持某一观点。', englishDefinition: 'To keep something in a particular condition or to continue to state something is true.',
    examples: [{ english: 'Regular updates help maintain system security.', chinese: '定期更新有助于维护系统安全。' }], collocations: ['maintain quality', 'maintain equipment'], synonyms: ['preserve'], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'efficient', term: 'efficient', normalizedTerm: 'efficient', partOfSpeech: ['adjective'], ipa: '/ɪˈfɪʃənt/',
    chineseShort: '高效的；效率高的', chineseExplanation: '以较少的时间、精力或资源取得良好结果的。', englishDefinition: 'Working well without wasting time, energy, or resources.',
    examples: [{ english: 'The new process is faster and more efficient.', chinese: '新流程更快，也更高效。' }], collocations: ['energy-efficient', 'highly efficient'], antonyms: ['inefficient'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'significant', term: 'significant', normalizedTerm: 'significant', partOfSpeech: ['adjective'], ipa: '/sɪɡˈnɪfɪkənt/',
    chineseShort: '重要的；显著的', chineseExplanation: '重要到值得注意，或在程度、数量上足够明显。', englishDefinition: 'Important or large enough to be noticed.',
    examples: [{ english: 'The study found a significant difference between the groups.', chinese: '研究发现两组之间存在显著差异。' }], collocations: ['significant change', 'statistically significant'], synonyms: ['notable'], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'consequence', term: 'consequence', normalizedTerm: 'consequence', partOfSpeech: ['noun'], ipa: '/ˈkɒnsɪkwəns/',
    chineseShort: '结果；后果', chineseExplanation: '由某个行为、决定或情况直接造成的结果，常指较重要的影响。', englishDefinition: 'A result or effect caused by an action, decision, or situation.',
    examples: [{ english: 'Every decision may have an unexpected consequence.', chinese: '每个决定都可能产生意想不到的后果。' }], collocations: ['serious consequence', 'as a consequence'], synonyms: ['result'], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'adapt', term: 'adapt', normalizedTerm: 'adapt', partOfSpeech: ['verb'], ipa: '/əˈdæpt/',
    chineseShort: '适应；改编', chineseExplanation: '为适合新的环境或用途而改变自己或某物。', englishDefinition: 'To change in order to suit new conditions or a new purpose.',
    examples: [{ english: 'Businesses must adapt to changing technology.', chinese: '企业必须适应不断变化的技术。' }], collocations: ['adapt to change', 'adapt a book'], synonyms: ['adjust'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'reliable', term: 'reliable', normalizedTerm: 'reliable', partOfSpeech: ['adjective'], ipa: '/rɪˈlaɪəbəl/',
    chineseShort: '可靠的；可信赖的', chineseExplanation: '能够持续正确工作，或可以被信任会按预期做事。', englishDefinition: 'Consistently dependable, accurate, or able to be trusted.',
    examples: [{ english: 'Use reliable sources in your research.', chinese: '研究时要使用可靠的资料来源。' }], collocations: ['reliable source', 'highly reliable'], antonyms: ['unreliable'], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
] satisfies readonly VocabularyItem[]
