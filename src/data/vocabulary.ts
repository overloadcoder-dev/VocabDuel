import type { VocabularyItem } from '../types'

export const vocabulary: readonly VocabularyItem[] = [
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
    id: 'implement', term: 'implement', normalizedTerm: 'implement', partOfSpeech: ['verb'], ipa: '/ˈɪmplɪment/',
    chineseShort: '实施；执行', chineseExplanation: '使计划、决定或系统开始实际运作。', englishDefinition: 'To put a plan, decision, or system into effect.',
    examples: [{ english: 'The company will implement a new security policy.', chinese: '公司将实施一项新的安全政策。' }], collocations: ['implement a plan', 'implement changes'], synonyms: ['execute'], level: 4, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'sustainable', term: 'sustainable', normalizedTerm: 'sustainable', partOfSpeech: ['adjective'], ipa: '/səˈsteɪnəbəl/',
    chineseShort: '可持续的', chineseExplanation: '能够长期维持，同时不过度消耗资源或损害环境的。', englishDefinition: 'Able to continue over time without exhausting resources or causing severe harm.',
    examples: [{ english: 'The city is investing in sustainable transport.', chinese: '这座城市正在投资可持续交通。' }], collocations: ['sustainable development', 'sustainable growth'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'ambiguous', term: 'ambiguous', normalizedTerm: 'ambiguous', partOfSpeech: ['adjective'], ipa: '/æmˈbɪɡjuəs/',
    chineseShort: '含糊不清的；有歧义的', chineseExplanation: '可以有多种解释，因此意思不明确。', englishDefinition: 'Open to more than one interpretation and therefore unclear.',
    examples: [{ english: 'The contract contains several ambiguous phrases.', chinese: '合同中有几个含义不清的短语。' }], synonyms: ['unclear', 'equivocal'], antonyms: ['unambiguous'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'mitigate', term: 'mitigate', normalizedTerm: 'mitigate', partOfSpeech: ['verb'], ipa: '/ˈmɪtɪɡeɪt/',
    chineseShort: '减轻；缓和', chineseExplanation: '降低有害、严重或令人不快之事的程度。', englishDefinition: 'To make something harmful, serious, or unpleasant less severe.',
    examples: [{ english: 'Trees can help mitigate the effects of urban heat.', chinese: '树木有助于缓解城市高温的影响。' }], collocations: ['mitigate risk', 'mitigate damage'], synonyms: ['alleviate'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'allocate', term: 'allocate', normalizedTerm: 'allocate', partOfSpeech: ['verb'], ipa: '/ˈæləkeɪt/',
    chineseShort: '分配；划拨', chineseExplanation: '为特定目的正式分配金钱、时间、空间或其他资源。', englishDefinition: 'To distribute resources or duties for a particular purpose.',
    examples: [{ english: 'We should allocate more time to user testing.', chinese: '我们应该为用户测试分配更多时间。' }], collocations: ['allocate resources', 'allocate funds'], synonyms: ['assign'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'vulnerable', term: 'vulnerable', normalizedTerm: 'vulnerable', partOfSpeech: ['adjective'], ipa: '/ˈvʌlnərəbəl/',
    chineseShort: '易受伤害的；脆弱的', chineseExplanation: '容易受到身体、情感或系统层面的伤害或攻击。', englishDefinition: 'Exposed to the possibility of being harmed or attacked.',
    examples: [{ english: 'Old software may be vulnerable to attack.', chinese: '旧软件可能容易受到攻击。' }], collocations: ['vulnerable to attack', 'vulnerable groups'], antonyms: ['protected'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
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
]
