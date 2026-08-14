import type { VocabularyItem } from '../../types'

/** Familiar A2-B1 vocabulary used across everyday, study, travel, and work contexts. */
export const level2Vocabulary = [
  {
    id: 'patient', term: 'patient', normalizedTerm: 'patient', partOfSpeech: ['adjective', 'noun'], ipa: '/ˈpeɪʃənt/',
    chineseShort: '有耐心的；病人', chineseExplanation: '作形容词表示能够平静等待；作名词表示接受医疗的人。', englishDefinition: 'Able to wait calmly; also, a person receiving medical care.',
    examples: [{ english: 'Please be patient while the page loads.', chinese: '页面加载时请耐心等待。' }], collocations: ['be patient with'], antonyms: ['impatient'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'confirm', term: 'confirm', normalizedTerm: 'confirm', partOfSpeech: ['verb'], ipa: '/kənˈfɜːm/',
    chineseShort: '确认；证实', chineseExplanation: '说明某事确实如此，或正式确定安排。', englishDefinition: 'To state or show that something is true or correct.',
    examples: [{ english: 'Please confirm your flight details by email.', chinese: '请通过电子邮件确认你的航班信息。' }], collocations: ['confirm a booking', 'confirm that'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'improve', term: 'improve', normalizedTerm: 'improve', partOfSpeech: ['verb'], ipa: '/ɪmˈpruːv/',
    chineseShort: '改善；提高', chineseExplanation: '使某事物变得更好，或自身变得更好。', englishDefinition: 'To become better or to make something better.',
    examples: [{ english: 'Daily practice will improve your pronunciation.', chinese: '每天练习会提高你的发音。' }], collocations: ['improve skills', 'improve greatly'], synonyms: ['enhance'], level: 2, cefr: 'A2', categories: ['School', 'Daily English'],
  },
  {
    id: 'schedule', term: 'schedule', normalizedTerm: 'schedule', partOfSpeech: ['noun', 'verb'], ipa: '/ˈʃedjuːl/',
    chineseShort: '日程；安排', chineseExplanation: '列明活动时间的计划，也可指为某事安排时间。', englishDefinition: 'A plan listing when events will happen; to arrange an event for a time.',
    examples: [{ english: 'We need to schedule the meeting for Tuesday.', chinese: '我们需要把会议安排在星期二。' }], collocations: ['busy schedule', 'ahead of schedule'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'device', term: 'device', normalizedTerm: 'device', partOfSpeech: ['noun'], ipa: '/dɪˈvaɪs/',
    chineseShort: '设备；装置', chineseExplanation: '为特定用途制造的机器、工具或电子产品。', englishDefinition: 'A piece of equipment made for a particular purpose.',
    examples: [{ english: 'This device measures room temperature.', chinese: '这个设备测量室温。' }], collocations: ['mobile device', 'electronic device'], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'budget', term: 'budget', normalizedTerm: 'budget', partOfSpeech: ['noun', 'verb'], ipa: '/ˈbʌdʒɪt/',
    chineseShort: '预算', chineseExplanation: '一段时间内预计可支出或获得的金额，也可指按预算规划。', englishDefinition: 'A plan for how much money will be earned and spent.',
    examples: [{ english: 'The project stayed within its budget.', chinese: '这个项目的支出控制在预算内。' }], collocations: ['annual budget', 'tight budget'], level: 2, cefr: 'B1', categories: ['Business', 'Travel'],
  },
  {
    id: 'recommend', term: 'recommend', normalizedTerm: 'recommend', partOfSpeech: ['verb'], ipa: '/ˌrekəˈmend/',
    chineseShort: '推荐；建议', chineseExplanation: '认为某人或某物很好而向别人介绍，或建议采取某种行动。', englishDefinition: 'To suggest that someone or something is suitable or worth trying.',
    examples: [{ english: 'Can you recommend a good hotel?', chinese: '你能推荐一家好的酒店吗？' }], collocations: ['highly recommend', 'recommend doing'], synonyms: ['suggest'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'opportunity', term: 'opportunity', normalizedTerm: 'opportunity', partOfSpeech: ['noun'], ipa: '/ˌɒpəˈtjuːnəti/',
    chineseShort: '机会；时机', chineseExplanation: '能够做某事或实现目标的合适时间或条件。', englishDefinition: 'A suitable chance to do something or achieve a goal.',
    examples: [{ english: 'The course offers an opportunity to practise speaking.', chinese: '这门课程提供练习口语的机会。' }], collocations: ['job opportunity', 'take an opportunity'], synonyms: ['chance'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'convenient', term: 'convenient', normalizedTerm: 'convenient', partOfSpeech: ['adjective'], ipa: '/kənˈviːniənt/',
    chineseShort: '方便的；便利的', chineseExplanation: '容易使用、节省时间，或适合某人的安排。', englishDefinition: 'Easy to use, suitable, or requiring little effort.',
    examples: [{ english: 'Online booking is quick and convenient.', chinese: '网上订票既快捷又方便。' }], collocations: ['convenient time', 'convenient for'], antonyms: ['inconvenient'], level: 2, cefr: 'B1', categories: ['Travel', 'Technology'],
  },
  {
    id: 'solution', term: 'solution', normalizedTerm: 'solution', partOfSpeech: ['noun'], ipa: '/səˈluːʃən/',
    chineseShort: '解决办法；答案', chineseExplanation: '解决问题的方法，或对题目的正确回答。', englishDefinition: 'A way of solving a problem or answering a question.',
    examples: [{ english: 'We need a simple solution to this problem.', chinese: '我们需要一个简单的方法来解决这个问题。' }], collocations: ['practical solution', 'find a solution'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
] satisfies readonly VocabularyItem[]
