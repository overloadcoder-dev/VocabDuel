import type { VocabularyItem } from '../../types'

/** Everyday, concrete A1-A2 vocabulary for foundation learners. */
export const level1Vocabulary = [
  {
    id: 'apple', term: 'apple', normalizedTerm: 'apple', partOfSpeech: ['noun'], ipa: '/ˈæpəl/',
    chineseShort: '苹果', chineseExplanation: '一种圆形水果，通常有红色或绿色的果皮。', englishDefinition: 'A round fruit with red, green, or yellow skin.',
    examples: [{ english: 'She packed an apple for lunch.', chinese: '她带了一个苹果当午餐。' }], collocations: ['apple tree', 'apple juice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'borrow', term: 'borrow', normalizedTerm: 'borrow', partOfSpeech: ['verb'], ipa: '/ˈbɒrəʊ/',
    chineseShort: '借入；借用', chineseExplanation: '暂时使用属于他人的东西，之后归还。注意 borrow 是“借入”，lend 是“借出”。', englishDefinition: 'To take and use something belonging to someone else with the intention of returning it.',
    examples: [{ english: 'May I borrow your dictionary?', chinese: '我可以借用你的词典吗？' }], collocations: ['borrow money', 'borrow a book'], antonyms: ['lend'], level: 1, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'journey', term: 'journey', normalizedTerm: 'journey', partOfSpeech: ['noun'], ipa: '/ˈdʒɜːni/',
    chineseShort: '旅程；行程', chineseExplanation: '从一个地方前往另一个地方的过程，常指较长的行程。', englishDefinition: 'The act of travelling from one place to another, especially over a long distance.',
    examples: [{ english: 'The train journey took three hours.', chinese: '这段火车旅程花了三个小时。' }], collocations: ['long journey', 'return journey'], synonyms: ['trip'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'quiet', term: 'quiet', normalizedTerm: 'quiet', partOfSpeech: ['adjective'], ipa: '/ˈkwaɪət/',
    chineseShort: '安静的', chineseExplanation: '几乎没有声音或活动的，也可形容人不爱说话。', englishDefinition: 'Making very little noise or having little activity.',
    examples: [{ english: 'The library is quiet in the morning.', chinese: '图书馆早上很安静。' }], antonyms: ['noisy'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'choose', term: 'choose', normalizedTerm: 'choose', partOfSpeech: ['verb'], ipa: '/tʃuːz/',
    chineseShort: '选择；挑选', chineseExplanation: '从两个或多个可能性中作出决定。', englishDefinition: 'To decide which person or thing you want from a number of possibilities.',
    examples: [{ english: 'You can choose any seat you like.', chinese: '你可以选择任何你喜欢的座位。' }], collocations: ['choose carefully', 'choose between'], synonyms: ['select'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'arrive', term: 'arrive', normalizedTerm: 'arrive', partOfSpeech: ['verb'], ipa: '/əˈraɪv/',
    chineseShort: '到达', chineseExplanation: '到达某个地点；arrive at 常接小地点，arrive in 常接城市或国家。', englishDefinition: 'To reach a place at the end of a journey.',
    examples: [{ english: 'We expect to arrive at the airport before noon.', chinese: '我们预计中午前到达机场。' }], collocations: ['arrive early', 'arrive at'], antonyms: ['depart'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'home', term: 'home', normalizedTerm: 'home', partOfSpeech: ['noun', 'adverb'], ipa: '/həʊm/',
    chineseShort: '家；在家', chineseExplanation: '一个人居住并感到归属的地方，也可表示回到或处于该处。', englishDefinition: 'The place where someone lives and feels they belong.',
    examples: [{ english: 'I usually get home at six.', chinese: '我通常六点到家。' }], collocations: ['at home', 'go home'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'teacher', term: 'teacher', normalizedTerm: 'teacher', partOfSpeech: ['noun'], ipa: '/ˈtiːtʃə/',
    chineseShort: '教师；老师', chineseExplanation: '在学校或其他环境中帮助别人学习知识或技能的人。', englishDefinition: 'A person whose job is to help others learn.',
    examples: [{ english: 'Our teacher explained the new lesson.', chinese: '老师讲解了新课。' }], collocations: ['English teacher', 'class teacher'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'ticket', term: 'ticket', normalizedTerm: 'ticket', partOfSpeech: ['noun'], ipa: '/ˈtɪkɪt/',
    chineseShort: '票；券', chineseExplanation: '允许乘车、乘机或进入某个场所的纸质或电子凭证。', englishDefinition: 'A paper or electronic pass that allows travel or entry.',
    examples: [{ english: 'I bought a train ticket online.', chinese: '我在网上买了一张火车票。' }], collocations: ['train ticket', 'return ticket'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'remember', term: 'remember', normalizedTerm: 'remember', partOfSpeech: ['verb'], ipa: '/rɪˈmembə/',
    chineseShort: '记得；想起', chineseExplanation: '在脑中保留某人或某事的信息，或再次想起它。', englishDefinition: 'To keep information in your mind or bring it back to mind.',
    examples: [{ english: 'Remember to bring your notebook.', chinese: '记得带上你的笔记本。' }], collocations: ['remember clearly', 'remember to do'], antonyms: ['forget'], level: 1, cefr: 'A2', categories: ['Daily English', 'School'],
  },
] satisfies readonly VocabularyItem[]
