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
  {
    id: 'family', term: 'family', normalizedTerm: 'family', partOfSpeech: ['noun'], ipa: '/ˈfæmɪli/',
    chineseShort: '家庭；家人', chineseExplanation: '表示“家庭；家人”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A group of people related to one another, especially parents and children.',
    examples: [{ english: 'My family eats dinner together on Sundays.', chinese: '我的家人每个星期日一起吃晚餐。' }], collocations: ['family member', 'close family'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'friend', term: 'friend', normalizedTerm: 'friend', partOfSpeech: ['noun'], ipa: '/frɛnd/',
    chineseShort: '朋友', chineseExplanation: '表示“朋友”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A person you know well and like.',
    examples: [{ english: 'She is a close friend from school.', chinese: '她是我在学校认识的一位好朋友。' }], collocations: ['close friend', 'best friend'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'water', term: 'water', normalizedTerm: 'water', partOfSpeech: ['noun'], ipa: '/ˈwɔːtə/',
    chineseShort: '水', chineseExplanation: '表示“水”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The clear liquid that people, animals, and plants need to live.',
    examples: [{ english: 'Please drink enough water today.', chinese: '今天请喝足够的水。' }], collocations: ['drinking water', 'a glass of water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'food', term: 'food', normalizedTerm: 'food', partOfSpeech: ['noun'], ipa: '/fuːd/',
    chineseShort: '食物', chineseExplanation: '表示“食物”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'Things that people or animals eat.',
    examples: [{ english: 'The food at this restaurant is delicious.', chinese: '这家餐厅的食物很好吃。' }], collocations: ['healthy food', 'street food'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'house', term: 'house', normalizedTerm: 'house', partOfSpeech: ['noun'], ipa: '/haʊs/',
    chineseShort: '房子；住宅', chineseExplanation: '表示“房子；住宅”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A building where people live.',
    examples: [{ english: 'Their house is near the park.', chinese: '他们的房子在公园附近。' }], collocations: ['buy a house', 'house key'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'room', term: 'room', normalizedTerm: 'room', partOfSpeech: ['noun'], ipa: '/ruːm/',
    chineseShort: '房间', chineseExplanation: '表示“房间”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A part of a building separated by walls and a door.',
    examples: [{ english: 'My room has a large window.', chinese: '我的房间有一扇大窗户。' }], collocations: ['living room', 'hotel room'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'school', term: 'school', normalizedTerm: 'school', partOfSpeech: ['noun'], ipa: '/skuːl/',
    chineseShort: '学校', chineseExplanation: '表示“学校”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A place where people, especially children, go to learn.',
    examples: [{ english: 'The children walk to school every morning.', chinese: '孩子们每天早上走路去学校。' }], collocations: ['go to school', 'school day'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'teacher', term: 'teacher', normalizedTerm: 'teacher', partOfSpeech: ['noun'], ipa: '/ˈtiːtʃə/',
    chineseShort: '老师；教师', chineseExplanation: '表示“老师；教师”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A person whose job is to teach.',
    examples: [{ english: 'Our teacher explained the lesson clearly.', chinese: '我们的老师清楚地讲解了这一课。' }], collocations: ['English teacher', 'school teacher'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'student', term: 'student', normalizedTerm: 'student', partOfSpeech: ['noun'], ipa: '/ˈstjuːdənt/',
    chineseShort: '学生', chineseExplanation: '表示“学生”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A person who studies at a school, college, or university.',
    examples: [{ english: 'Every student needs a notebook.', chinese: '每个学生都需要一本笔记本。' }], collocations: ['university student', 'student ID'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'book', term: 'book', normalizedTerm: 'book', partOfSpeech: ['noun'], ipa: '/bʊk/',
    chineseShort: '书；书籍', chineseExplanation: '表示“书；书籍”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A set of printed or digital pages containing writing or pictures.',
    examples: [{ english: 'I borrowed a book from the library.', chinese: '我从图书馆借了一本书。' }], collocations: ['read a book', 'book cover'], level: 1, cefr: 'A1', categories: ['School', 'Daily English'],
  },
  {
    id: 'question', term: 'question', normalizedTerm: 'question', partOfSpeech: ['noun'], ipa: '/ˈkwɛstʃən/',
    chineseShort: '问题；疑问', chineseExplanation: '表示“问题；疑问”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A sentence or phrase used to ask for information.',
    examples: [{ english: 'Please ask a question if anything is unclear.', chinese: '如果有任何不清楚的地方，请提问。' }], collocations: ['ask a question', 'difficult question'], level: 1, cefr: 'A1', categories: ['School', 'Daily English'],
  },
  {
    id: 'answer', term: 'answer', normalizedTerm: 'answer', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɑːnsə/',
    chineseShort: '答案；回答', chineseExplanation: '可作名词或动词，表示“答案；回答”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A reply to a question; to give such a reply.',
    examples: [{ english: 'Do you know the answer to this question?', chinese: '你知道这道题的答案吗？' }], collocations: ['correct answer', 'answer a question'], level: 1, cefr: 'A1', categories: ['School', 'Daily English'],
  },
  {
    id: 'happy', term: 'happy', normalizedTerm: 'happy', partOfSpeech: ['adjective'], ipa: '/ˈhæpi/',
    chineseShort: '开心的；高兴的', chineseExplanation: '表示“开心的；高兴的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Feeling or showing pleasure or satisfaction.',
    examples: [{ english: 'She was happy to see her friends again.', chinese: '她很高兴再次见到朋友们。' }], collocations: ['feel happy', 'happy with'], synonyms: ['glad'], antonyms: ['sad'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tired', term: 'tired', normalizedTerm: 'tired', partOfSpeech: ['adjective'], ipa: '/ˈtaɪəd/',
    chineseShort: '疲倦的；累的', chineseExplanation: '表示“疲倦的；累的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Needing rest or sleep.',
    examples: [{ english: 'I am tired after the long journey.', chinese: '长途旅行后我很累。' }], collocations: ['feel tired', 'tired of'], synonyms: ['exhausted'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'hungry', term: 'hungry', normalizedTerm: 'hungry', partOfSpeech: ['adjective'], ipa: '/ˈhʌŋɡri/',
    chineseShort: '饿的；饥饿的', chineseExplanation: '表示“饿的；饥饿的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Feeling that you want or need food.',
    examples: [{ english: 'We were hungry after the game.', chinese: '比赛后我们都饿了。' }], collocations: ['feel hungry', 'get hungry'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'busy', term: 'busy', normalizedTerm: 'busy', partOfSpeech: ['adjective'], ipa: '/ˈbɪzi/',
    chineseShort: '忙碌的', chineseExplanation: '表示“忙碌的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Having a lot of things to do.',
    examples: [{ english: 'I am busy this afternoon.', chinese: '我今天下午很忙。' }], collocations: ['busy day', 'busy with'], level: 1, cefr: 'A1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'early', term: 'early', normalizedTerm: 'early', partOfSpeech: ['adjective', 'adverb'], ipa: '/ˈɜːli/',
    chineseShort: '早的；提早', chineseExplanation: '可作形容词或副词，表示“早的；提早”；可用于描述性质状态，也可说明动作发生的方式或程度。', englishDefinition: 'Before the usual or expected time.',
    examples: [{ english: 'We arrived early for the meeting.', chinese: '我们提早到达会议地点。' }], collocations: ['early morning', 'arrive early'], antonyms: ['late'], level: 1, cefr: 'A1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'late', term: 'late', normalizedTerm: 'late', partOfSpeech: ['adjective', 'adverb'], ipa: '/leɪt/',
    chineseShort: '迟的；迟到', chineseExplanation: '可作形容词或副词，表示“迟的；迟到”；可用于描述性质状态，也可说明动作发生的方式或程度。', englishDefinition: 'After the expected or usual time.',
    examples: [{ english: 'The bus was ten minutes late.', chinese: '巴士迟到了十分钟。' }], collocations: ['be late', 'late at night'], antonyms: ['early'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'open', term: 'open', normalizedTerm: 'open', partOfSpeech: ['adjective', 'verb'], ipa: '/ˈəʊpən/',
    chineseShort: '打开的；开放；打开', chineseExplanation: '表示“打开的；开放；打开”；可根据句子中的词性和语境判断具体含义。', englishDefinition: 'Not closed; to make something no longer closed.',
    examples: [{ english: 'The shop is open until nine tonight.', chinese: '这家店今晚营业到九点。' }], collocations: ['open the door', 'open to the public'], antonyms: ['closed'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'close', term: 'close', normalizedTerm: 'close', partOfSpeech: ['verb'], ipa: '/kləʊz/',
    chineseShort: '关闭；合上', chineseExplanation: '表示“关闭；合上”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To shut something such as a door, window, container, or business.',
    examples: [{ english: 'Please close the window before you leave.', chinese: '离开前请把窗户关上。' }], collocations: ['close the door', 'close a window'], synonyms: ['shut'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'buy', term: 'buy', normalizedTerm: 'buy', partOfSpeech: ['verb'], ipa: '/baɪ/',
    chineseShort: '购买；买', chineseExplanation: '表示“购买；买”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To get something by paying money for it.',
    examples: [{ english: 'I need to buy a new charger.', chinese: '我需要买一个新的充电器。' }], collocations: ['buy online', 'buy a ticket'], synonyms: ['purchase'], antonyms: ['sell'], level: 1, cefr: 'A1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'sell', term: 'sell', normalizedTerm: 'sell', partOfSpeech: ['verb'], ipa: '/sɛl/',
    chineseShort: '出售；卖', chineseExplanation: '表示“出售；卖”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To give something to someone in exchange for money.',
    examples: [{ english: 'They sell fresh fruit at the market.', chinese: '他们在市场卖新鲜水果。' }], collocations: ['sell products', 'sell online'], antonyms: ['buy'], level: 1, cefr: 'A1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'pay', term: 'pay', normalizedTerm: 'pay', partOfSpeech: ['verb'], ipa: '/peɪ/',
    chineseShort: '支付；付款', chineseExplanation: '表示“支付；付款”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To give money for something you buy or a service you use.',
    examples: [{ english: 'Can I pay by card?', chinese: '我可以用卡付款吗？' }], collocations: ['pay a bill', 'pay by card'], level: 1, cefr: 'A1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'bring', term: 'bring', normalizedTerm: 'bring', partOfSpeech: ['verb'], ipa: '/brɪŋ/',
    chineseShort: '带来；拿来', chineseExplanation: '表示“带来；拿来”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To take someone or something with you to a place.',
    examples: [{ english: 'Please bring your passport to the airport.', chinese: '请带护照去机场。' }], collocations: ['bring along', 'bring something back'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'carry', term: 'carry', normalizedTerm: 'carry', partOfSpeech: ['verb'], ipa: '/ˈkæri/',
    chineseShort: '携带；搬运', chineseExplanation: '表示“携带；搬运”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To hold or move something from one place to another.',
    examples: [{ english: 'She carried the bag upstairs.', chinese: '她把袋子拿上楼。' }], collocations: ['carry a bag', 'carry luggage'], level: 1, cefr: 'A2', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'wait', term: 'wait', normalizedTerm: 'wait', partOfSpeech: ['verb'], ipa: '/weɪt/',
    chineseShort: '等待', chineseExplanation: '表示“等待”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To stay until someone arrives or something happens.',
    examples: [{ english: 'Please wait here for five minutes.', chinese: '请在这里等五分钟。' }], collocations: ['wait for', 'wait patiently'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'meet', term: 'meet', normalizedTerm: 'meet', partOfSpeech: ['verb'], ipa: '/miːt/',
    chineseShort: '见面；遇见', chineseExplanation: '表示“见面；遇见”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To come together with someone, either by arrangement or by chance.',
    examples: [{ english: 'Let us meet at the station at six.', chinese: '我们六点在车站见面。' }], collocations: ['meet a friend', 'meet at'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'visit', term: 'visit', normalizedTerm: 'visit', partOfSpeech: ['verb', 'noun'], ipa: '/ˈvɪzɪt/',
    chineseShort: '参观；拜访；访问', chineseExplanation: '可作名词或动词，表示“参观；拜访；访问”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To go to see a person or place for a period of time; an occasion of doing this.',
    examples: [{ english: 'We plan to visit Penang next month.', chinese: '我们计划下个月去槟城游玩。' }], collocations: ['visit a place', 'pay a visit'], level: 1, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'travel', term: 'travel', normalizedTerm: 'travel', partOfSpeech: ['verb', 'noun'], ipa: '/ˈtrævəl/',
    chineseShort: '旅行；出行', chineseExplanation: '可作名词或动词，表示“旅行；出行”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To go from one place to another, especially over a long distance.',
    examples: [{ english: 'She loves to travel by train.', chinese: '她喜欢乘火车旅行。' }], collocations: ['travel abroad', 'business travel'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'ticket', term: 'ticket', normalizedTerm: 'ticket', partOfSpeech: ['noun'], ipa: '/ˈtɪkɪt/',
    chineseShort: '票；车票；门票', chineseExplanation: '表示“票；车票；门票”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A printed or digital document that gives you the right to travel or enter somewhere.',
    examples: [{ english: 'I bought my train ticket online.', chinese: '我在网上买了火车票。' }], collocations: ['train ticket', 'return ticket'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'train', term: 'train', normalizedTerm: 'train', partOfSpeech: ['noun'], ipa: '/treɪn/',
    chineseShort: '火车；列车', chineseExplanation: '表示“火车；列车”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A connected line of railway vehicles used to carry people or goods.',
    examples: [{ english: 'The train leaves at eight thirty.', chinese: '火车八点半出发。' }], collocations: ['catch a train', 'train station'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'hotel', term: 'hotel', normalizedTerm: 'hotel', partOfSpeech: ['noun'], ipa: '/həʊˈtɛl/',
    chineseShort: '酒店；旅馆', chineseExplanation: '表示“酒店；旅馆”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A place where people pay to stay for a short time.',
    examples: [{ english: 'We booked a hotel near the beach.', chinese: '我们订了一家靠近海滩的酒店。' }], collocations: ['hotel room', 'book a hotel'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'airport', term: 'airport', normalizedTerm: 'airport', partOfSpeech: ['noun'], ipa: '/ˈeəpɔːt/',
    chineseShort: '机场', chineseExplanation: '表示“机场”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A place where aircraft take off and land and where passengers begin or end flights.',
    examples: [{ english: 'We reached the airport two hours before the flight.', chinese: '我们在航班起飞前两小时到达机场。' }], collocations: ['international airport', 'airport terminal'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'street', term: 'street', normalizedTerm: 'street', partOfSpeech: ['noun'], ipa: '/striːt/',
    chineseShort: '街道', chineseExplanation: '表示“街道”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A public road in a town or city, usually with buildings along it.',
    examples: [{ english: 'There is a bakery across the street.', chinese: '街对面有一家面包店。' }], collocations: ['main street', 'street food'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'weather', term: 'weather', normalizedTerm: 'weather', partOfSpeech: ['noun'], ipa: '/ˈwɛðə/',
    chineseShort: '天气', chineseExplanation: '表示“天气”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The conditions in the air at a particular place and time, such as temperature, rain, or wind.',
    examples: [{ english: 'The weather is cool today.', chinese: '今天天气很凉爽。' }], collocations: ['bad weather', 'weather forecast'], level: 1, cefr: 'A2', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'morning', term: 'morning', normalizedTerm: 'morning', partOfSpeech: ['noun'], ipa: '/ˈmɔːnɪŋ/',
    chineseShort: '早上；上午', chineseExplanation: '表示“早上；上午”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The part of the day from when you wake up until around noon.',
    examples: [{ english: 'I exercise every morning.', chinese: '我每天早上运动。' }], collocations: ['early morning', 'this morning'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'evening', term: 'evening', normalizedTerm: 'evening', partOfSpeech: ['noun'], ipa: '/ˈiːvnɪŋ/',
    chineseShort: '傍晚；晚上', chineseExplanation: '表示“傍晚；晚上”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The later part of the day, usually from the end of the afternoon until night.',
    examples: [{ english: 'We went for a walk in the evening.', chinese: '我们傍晚去散步。' }], collocations: ['this evening', 'evening meal'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'today', term: 'today', normalizedTerm: 'today', partOfSpeech: ['adverb', 'noun'], ipa: '/təˈdeɪ/',
    chineseShort: '今天', chineseExplanation: '表示“今天”；可根据句子中的词性和语境判断具体含义。', englishDefinition: 'On or during the present day; the present day itself.',
    examples: [{ english: 'I have two classes today.', chinese: '我今天有两堂课。' }], collocations: ['today\'s meeting', 'earlier today'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'tomorrow', term: 'tomorrow', normalizedTerm: 'tomorrow', partOfSpeech: ['adverb', 'noun'], ipa: '/təˈmɒrəʊ/',
    chineseShort: '明天', chineseExplanation: '表示“明天”；可根据句子中的词性和语境判断具体含义。', englishDefinition: 'On or during the day after today; the day after today.',
    examples: [{ english: 'We will finish the work tomorrow.', chinese: '我们明天会完成这项工作。' }], collocations: ['tomorrow morning', 'see you tomorrow'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'yesterday', term: 'yesterday', normalizedTerm: 'yesterday', partOfSpeech: ['adverb', 'noun'], ipa: '/ˈjɛstəˌdeɪ/',
    chineseShort: '昨天', chineseExplanation: '表示“昨天”；可根据句子中的词性和语境判断具体含义。', englishDefinition: 'On or during the day before today; the day before today.',
    examples: [{ english: 'It rained heavily yesterday.', chinese: '昨天雨下得很大。' }], collocations: ['yesterday morning', 'since yesterday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'always', term: 'always', normalizedTerm: 'always', partOfSpeech: ['adverb'], ipa: '/ˈɔːlweɪz/',
    chineseShort: '总是；一直', chineseExplanation: '表示“总是；一直”，用于补充说明动作或状态发生的时间、频率、程度或方式。', englishDefinition: 'At all times or on every occasion.',
    examples: [{ english: 'He always checks the door before leaving.', chinese: '他离开前总会检查门有没有锁好。' }], collocations: ['almost always', 'always remember'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'usually', term: 'usually', normalizedTerm: 'usually', partOfSpeech: ['adverb'], ipa: '/ˈjuːʒuːəli/',
    chineseShort: '通常；一般', chineseExplanation: '表示“通常；一般”，用于补充说明动作或状态发生的时间、频率、程度或方式。', englishDefinition: 'In the way that happens most often.',
    examples: [{ english: 'I usually take the bus to work.', chinese: '我通常搭巴士上班。' }], collocations: ['usually happens', 'usually go'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sometimes', term: 'sometimes', normalizedTerm: 'sometimes', partOfSpeech: ['adverb'], ipa: '/ˈsʌmtaɪmz/',
    chineseShort: '有时；偶尔', chineseExplanation: '表示“有时；偶尔”，用于补充说明动作或状态发生的时间、频率、程度或方式。', englishDefinition: 'On some occasions but not always.',
    examples: [{ english: 'We sometimes eat outside on Fridays.', chinese: '我们星期五有时会在外面吃。' }], collocations: ['sometimes difficult', 'sometimes go'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'never', term: 'never', normalizedTerm: 'never', partOfSpeech: ['adverb'], ipa: '/ˈnɛvə/',
    chineseShort: '从不；绝不', chineseExplanation: '表示“从不；绝不”，用于补充说明动作或状态发生的时间、频率、程度或方式。', englishDefinition: 'At no time or not on any occasion.',
    examples: [{ english: 'I never share my password with anyone.', chinese: '我从不把密码告诉别人。' }], collocations: ['never again', 'almost never'], level: 1, cefr: 'A1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'easy', term: 'easy', normalizedTerm: 'easy', partOfSpeech: ['adjective'], ipa: '/ˈiːzi/',
    chineseShort: '容易的；简单的', chineseExplanation: '表示“容易的；简单的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not difficult and requiring little effort.',
    examples: [{ english: 'This exercise is easy to understand.', chinese: '这个练习很容易理解。' }], collocations: ['easy to use', 'easy task'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'difficult', term: 'difficult', normalizedTerm: 'difficult', partOfSpeech: ['adjective'], ipa: '/ˈdɪfɪkəlt/',
    chineseShort: '困难的；难的', chineseExplanation: '表示“困难的；难的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not easy and requiring effort or skill.',
    examples: [{ english: 'The final question was difficult.', chinese: '最后一道题很难。' }], collocations: ['difficult decision', 'difficult to understand'], synonyms: ['hard'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'clean', term: 'clean', normalizedTerm: 'clean', partOfSpeech: ['adjective', 'verb'], ipa: '/kliːn/',
    chineseShort: '干净的；清洁', chineseExplanation: '表示“干净的；清洁”；可根据句子中的词性和语境判断具体含义。', englishDefinition: 'Free from dirt; to remove dirt from something.',
    examples: [{ english: 'Please keep the kitchen clean.', chinese: '请保持厨房清洁。' }], collocations: ['clean water', 'clean the room'], antonyms: ['dirty'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dirty', term: 'dirty', normalizedTerm: 'dirty', partOfSpeech: ['adjective'], ipa: '/ˈdɜːti/',
    chineseShort: '肮脏的；脏的', chineseExplanation: '表示“肮脏的；脏的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Covered with or containing dirt.',
    examples: [{ english: 'Your shoes are dirty after the rain.', chinese: '下雨后你的鞋子很脏。' }], collocations: ['dirty clothes', 'get dirty'], antonyms: ['clean'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'strong', term: 'strong', normalizedTerm: 'strong', partOfSpeech: ['adjective'], ipa: '/strɒŋ/',
    chineseShort: '强壮的；强烈的', chineseExplanation: '表示“强壮的；强烈的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Having a lot of physical power or a powerful effect.',
    examples: [{ english: 'The coffee is too strong for me.', chinese: '这咖啡对我来说味道太浓。' }], collocations: ['strong person', 'strong smell'], antonyms: ['weak'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weak', term: 'weak', normalizedTerm: 'weak', partOfSpeech: ['adjective'], ipa: '/wiːk/',
    chineseShort: '虚弱的；弱的', chineseExplanation: '表示“虚弱的；弱的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not strong in power, strength, or effect.',
    examples: [{ english: 'He felt weak after missing lunch.', chinese: '他没吃午餐后觉得很虚弱。' }], collocations: ['weak signal', 'feel weak'], antonyms: ['strong'], level: 1, cefr: 'A1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'fast', term: 'fast', normalizedTerm: 'fast', partOfSpeech: ['adjective', 'adverb'], ipa: '/fɑːst/',
    chineseShort: '快的；快速地', chineseExplanation: '可作形容词或副词，表示“快的；快速地”；可用于描述性质状态，也可说明动作发生的方式或程度。', englishDefinition: 'Moving or happening quickly.',
    examples: [{ english: 'This train is much faster than the bus.', chinese: '这趟火车比巴士快得多。' }], collocations: ['fast car', 'move fast'], synonyms: ['quick'], antonyms: ['slow'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'slow', term: 'slow', normalizedTerm: 'slow', partOfSpeech: ['adjective', 'adverb'], ipa: '/sləʊ/',
    chineseShort: '慢的；缓慢地', chineseExplanation: '可作形容词或副词，表示“慢的；缓慢地”；可用于描述性质状态，也可说明动作发生的方式或程度。', englishDefinition: 'Moving or happening at a low speed.',
    examples: [{ english: 'The internet is slow this morning.', chinese: '今天早上的网络很慢。' }], collocations: ['slow progress', 'slow down'], antonyms: ['fast'], level: 1, cefr: 'A1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'near', term: 'near', normalizedTerm: 'near', partOfSpeech: ['adjective', 'adverb'], ipa: '/nɪə/',
    chineseShort: '附近的；在附近', chineseExplanation: '可作形容词或副词，表示“附近的；在附近”；可用于描述性质状态，也可说明动作发生的方式或程度。', englishDefinition: 'At or to a short distance from someone or something.',
    examples: [{ english: 'Our hotel is near the station.', chinese: '我们的酒店靠近车站。' }], collocations: ['near the airport', 'nearby area'], antonyms: ['far'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'far', term: 'far', normalizedTerm: 'far', partOfSpeech: ['adverb', 'adjective'], ipa: '/fɑː/',
    chineseShort: '远；遥远的', chineseExplanation: '可作形容词或副词，表示“远；遥远的”；可用于描述性质状态，也可说明动作发生的方式或程度。', englishDefinition: 'At or to a great distance.',
    examples: [{ english: 'The village is not far from here.', chinese: '那个村庄离这里不远。' }], collocations: ['far away', 'far from'], antonyms: ['near'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'advice', term: 'advice', normalizedTerm: 'advice', partOfSpeech: ['noun'], ipa: '/ədˈvaɪs/',
    chineseShort: '建议；忠告', chineseExplanation: '表示“建议、忠告”。advice 是不可数名词，通常说 some advice 或 a piece of advice，而不是 an advice。', englishDefinition: 'An opinion about what someone should do in a particular situation.',
    examples: [{ english: 'My teacher gave me useful advice about studying.', chinese: '老师给了我一些关于学习的有用建议。' }], collocations: ['give advice', 'ask for advice'], synonyms: ['guidance'], level: 2, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'agree', term: 'agree', normalizedTerm: 'agree', partOfSpeech: ['verb'], ipa: '/əˈɡriː/',
    chineseShort: '同意；赞成', chineseExplanation: '表示“同意、赞成”。agree with 常接人或观点，agree to 常接提议、条件或安排。', englishDefinition: 'To have the same opinion as someone or to accept a suggestion.',
    examples: [{ english: 'I agree with your idea.', chinese: '我同意你的想法。' }], collocations: ['agree with', 'agree to'], synonyms: ['accept'], antonyms: ['disagree'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'allow', term: 'allow', normalizedTerm: 'allow', partOfSpeech: ['verb'], ipa: '/əˈlaʊ/',
    chineseShort: '允许；准许', chineseExplanation: '表示“允许；准许”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To let someone do something or let something happen.',
    examples: [{ english: 'The app allows users to change the language.', chinese: '这个应用允许用户更改语言。' }], collocations: ['allow access', 'allow someone to'], antonyms: ['prohibit'], level: 2, cefr: 'A2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'apologize', term: 'apologize', normalizedTerm: 'apologize', partOfSpeech: ['verb'], ipa: '/əˈpɒləˌdʒaɪz/',
    chineseShort: '道歉', chineseExplanation: '表示“道歉”。常用 apologize to someone for something，表示“因某事向某人道歉”。', englishDefinition: 'To tell someone that you are sorry for something you did.',
    examples: [{ english: 'He apologized for being late.', chinese: '他为迟到而道歉。' }], collocations: ['apologize for', 'apologize to'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'appointment', term: 'appointment', normalizedTerm: 'appointment', partOfSpeech: ['noun'], ipa: '/əˈpɔɪntmənt/',
    chineseShort: '预约；约会', chineseExplanation: '表示“预约；约会”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'An arrangement to meet someone at a particular time, often for professional services.',
    examples: [{ english: 'I have a dentist appointment at three.', chinese: '我三点有牙医预约。' }], collocations: ['make an appointment', 'doctor\'s appointment'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'avoid', term: 'avoid', normalizedTerm: 'avoid', partOfSpeech: ['verb'], ipa: '/əˈvɔɪd/',
    chineseShort: '避免；避开', chineseExplanation: '表示“避免；避开”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To stay away from someone or something or prevent something from happening.',
    examples: [{ english: 'Try to avoid using your phone while driving.', chinese: '开车时尽量避免使用手机。' }], collocations: ['avoid mistakes', 'avoid doing'], synonyms: ['evade'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'balance', term: 'balance', normalizedTerm: 'balance', partOfSpeech: ['noun', 'verb'], ipa: '/ˈbæləns/',
    chineseShort: '平衡；使平衡', chineseExplanation: '可作名词或动词，表示“平衡；使平衡”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A state in which different things are equal or in the correct proportions; to keep such a state.',
    examples: [{ english: 'It is important to balance work and rest.', chinese: '平衡工作和休息很重要。' }], collocations: ['work-life balance', 'keep a balance'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'behaviour', term: 'behaviour', normalizedTerm: 'behaviour', partOfSpeech: ['noun'], ipa: '/bɪˈheɪvjə/',
    chineseShort: '行为；举止', chineseExplanation: '表示“行为；举止”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The way a person or animal acts.',
    examples: [{ english: 'Good behaviour is expected in the classroom.', chinese: '课堂上应保持良好行为。' }], collocations: ['human behaviour', 'good behaviour'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'cancel', term: 'cancel', normalizedTerm: 'cancel', partOfSpeech: ['verb'], ipa: '/ˈkænsəl/',
    chineseShort: '取消', chineseExplanation: '表示“取消”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To decide that a planned event or arrangement will not happen.',
    examples: [{ english: 'They cancelled the flight because of bad weather.', chinese: '他们因为天气恶劣取消了航班。' }], collocations: ['cancel a booking', 'cancel a meeting'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'chance', term: 'chance', normalizedTerm: 'chance', partOfSpeech: ['noun'], ipa: '/tʃɑːns/',
    chineseShort: '机会；可能性', chineseExplanation: '表示“机会；可能性”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'An opportunity to do something or the possibility that something will happen.',
    examples: [{ english: 'This is a good chance to practise your English.', chinese: '这是练习英语的好机会。' }], collocations: ['good chance', 'take a chance'], synonyms: ['opportunity'], level: 2, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'compare', term: 'compare', normalizedTerm: 'compare', partOfSpeech: ['verb'], ipa: '/kəmˈpeə/',
    chineseShort: '比较；对比', chineseExplanation: '表示“比较、对比”。compare A with B 常强调比较两者的相同和不同之处。', englishDefinition: 'To examine two or more things to see how they are similar or different.',
    examples: [{ english: 'Compare the two prices before you buy.', chinese: '购买前比较一下这两个价格。' }], collocations: ['compare prices', 'compare with'], synonyms: ['contrast'], level: 2, cefr: 'A2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'complain', term: 'complain', normalizedTerm: 'complain', partOfSpeech: ['verb'], ipa: '/kəmˈpleɪn/',
    chineseShort: '抱怨；投诉', chineseExplanation: '表示“抱怨；投诉”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To say that you are unhappy or dissatisfied with something.',
    examples: [{ english: 'The customer complained about the slow service.', chinese: '顾客抱怨服务太慢。' }], collocations: ['complain about', 'complain to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'decide', term: 'decide', normalizedTerm: 'decide', partOfSpeech: ['verb'], ipa: '/dɪˈsaɪd/',
    chineseShort: '决定', chineseExplanation: '表示“决定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make a choice after thinking about the possibilities.',
    examples: [{ english: 'We need to decide where to eat.', chinese: '我们需要决定去哪里吃。' }], collocations: ['decide to', 'decide between'], synonyms: ['determine'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'describe', term: 'describe', normalizedTerm: 'describe', partOfSpeech: ['verb'], ipa: '/dɪˈskraɪb/',
    chineseShort: '描述；形容', chineseExplanation: '表示“描述；形容”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To say what someone or something is like.',
    examples: [{ english: 'Can you describe the bag you lost?', chinese: '你能描述一下你丢失的袋子吗？' }], collocations: ['describe clearly', 'describe as'], synonyms: ['explain'], level: 2, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'discuss', term: 'discuss', normalizedTerm: 'discuss', partOfSpeech: ['verb'], ipa: '/dɪˈskʌs/',
    chineseShort: '讨论', chineseExplanation: '表示“讨论”。通常直接说 discuss something，不需要在 discuss 后加 about。', englishDefinition: 'To talk about something with another person or group in order to exchange ideas.',
    examples: [{ english: 'We discussed the problem after class.', chinese: '我们下课后讨论了这个问题。' }], collocations: ['discuss a problem', 'discuss with'], level: 2, cefr: 'A2', categories: ['School', 'Business'],
  },
  {
    id: 'explain', term: 'explain', normalizedTerm: 'explain', partOfSpeech: ['verb'], ipa: '/ɛkˈspleɪn/',
    chineseShort: '解释；说明', chineseExplanation: '表示“解释；说明”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make something clear or easy to understand by giving details.',
    examples: [{ english: 'Could you explain this rule again?', chinese: '你可以再解释一次这条规则吗？' }], collocations: ['explain clearly', 'explain why'], level: 2, cefr: 'A2', categories: ['School', 'Daily English'],
  },
  {
    id: 'experience', term: 'experience', normalizedTerm: 'experience', partOfSpeech: ['noun', 'verb'], ipa: '/ɪkˈspɪəriəns/',
    chineseShort: '经验；经历', chineseExplanation: '可作名词或动词，表示“经验；经历”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'Knowledge gained by doing or seeing something; to have something happen to you.',
    examples: [{ english: 'She has two years of work experience.', chinese: '她有两年的工作经验。' }], collocations: ['work experience', 'personal experience'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'favourite', term: 'favourite', normalizedTerm: 'favourite', partOfSpeech: ['adjective', 'noun'], ipa: '/ˈfeɪvərɪt/',
    chineseShort: '最喜欢的；最喜欢的人或物', chineseExplanation: '可作形容词或名词，表示“最喜欢的；最喜欢的人或物”；具体含义需根据句子结构判断。', englishDefinition: 'Liked more than other people or things; a person or thing liked best.',
    examples: [{ english: 'What is your favourite restaurant?', chinese: '你最喜欢哪一家餐厅？' }], collocations: ['favourite food', 'favourite place'], level: 2, cefr: 'A2', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'healthy', term: 'healthy', normalizedTerm: 'healthy', partOfSpeech: ['adjective'], ipa: '/ˈhɛlθi/',
    chineseShort: '健康的；有益健康的', chineseExplanation: '表示“健康的；有益健康的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'In good physical condition or helping to produce good health.',
    examples: [{ english: 'Walking every day is a healthy habit.', chinese: '每天走路是一种健康的习惯。' }], collocations: ['healthy food', 'healthy lifestyle'], antonyms: ['unhealthy'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'information', term: 'information', normalizedTerm: 'information', partOfSpeech: ['noun'], ipa: '/ˌɪnfəˈmeɪʃən/',
    chineseShort: '信息；资料', chineseExplanation: '表示“信息、资料”。information 通常是不可数名词，可说 some information 或 a piece of information。', englishDefinition: 'Facts or details about a person, place, thing, or situation.',
    examples: [{ english: 'The website provides information about train times.', chinese: '这个网站提供火车时刻的信息。' }], collocations: ['personal information', 'useful information'], level: 2, cefr: 'A2', categories: ['Technology', 'Travel'],
  },
  {
    id: 'invite', term: 'invite', normalizedTerm: 'invite', partOfSpeech: ['verb'], ipa: '/ɪnˈvaɪt/',
    chineseShort: '邀请', chineseExplanation: '表示“邀请”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To ask someone to come to an event, place, or activity.',
    examples: [{ english: 'We invited our friends to dinner.', chinese: '我们邀请朋友来吃晚餐。' }], collocations: ['invite someone to', 'invite friends'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'local', term: 'local', normalizedTerm: 'local', partOfSpeech: ['adjective', 'noun'], ipa: '/ˈləʊkəl/',
    chineseShort: '当地的；本地人', chineseExplanation: '可作形容词或名词，表示“当地的；本地人”；具体含义需根据句子结构判断。', englishDefinition: 'Relating to a particular area, especially the area where you live; a person who lives there.',
    examples: [{ english: 'We asked a local person for directions.', chinese: '我们向当地人问路。' }], collocations: ['local people', 'local area'], level: 2, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'manage', term: 'manage', normalizedTerm: 'manage', partOfSpeech: ['verb'], ipa: '/ˈmænɪdʒ/',
    chineseShort: '管理；设法做到', chineseExplanation: '表示“管理；设法做到”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To control or organize something, or to succeed in doing something difficult.',
    examples: [{ english: 'She manages a small online shop.', chinese: '她经营一家小型网店。' }], collocations: ['manage a team', 'manage to'], synonyms: ['handle'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'message', term: 'message', normalizedTerm: 'message', partOfSpeech: ['noun', 'verb'], ipa: '/ˈmɛsɪdʒ/',
    chineseShort: '信息；消息；发送消息', chineseExplanation: '可作名词或动词，表示“信息；消息；发送消息”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A piece of information sent to someone; to send such information.',
    examples: [{ english: 'I sent him a message after the meeting.', chinese: '会议后我给他发了消息。' }], collocations: ['text message', 'send a message'], level: 2, cefr: 'A2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'mistake', term: 'mistake', normalizedTerm: 'mistake', partOfSpeech: ['noun'], ipa: '/mɪˈsteɪk/',
    chineseShort: '错误', chineseExplanation: '表示“错误”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'Something that is done or understood incorrectly.',
    examples: [{ english: 'I made a mistake in the address.', chinese: '我把地址写错了。' }], collocations: ['make a mistake', 'common mistake'], synonyms: ['error'], level: 2, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'necessary', term: 'necessary', normalizedTerm: 'necessary', partOfSpeech: ['adjective'], ipa: '/ˈnɛsəsəri/',
    chineseShort: '必要的；必需的', chineseExplanation: '表示“必要的；必需的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Needed in order to achieve a particular result or purpose.',
    examples: [{ english: 'A passport is necessary for international travel.', chinese: '国际旅行需要护照。' }], collocations: ['necessary information', 'if necessary'], synonyms: ['essential'], antonyms: ['unnecessary'], level: 2, cefr: 'A2', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'offer', term: 'offer', normalizedTerm: 'offer', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɒfə/',
    chineseShort: '提供；提议；优惠', chineseExplanation: '可作名词或动词，表示“提供；提议；优惠”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To say that you are willing to give or do something; an act or proposal of doing so.',
    examples: [{ english: 'The hotel offered us a larger room.', chinese: '酒店给我们提供了一个更大的房间。' }], collocations: ['special offer', 'offer help'], level: 2, cefr: 'A2', categories: ['Business', 'Travel'],
  },
  {
    id: 'prepare', term: 'prepare', normalizedTerm: 'prepare', partOfSpeech: ['verb'], ipa: '/prɪˈpeə/',
    chineseShort: '准备', chineseExplanation: '表示“准备”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make someone or something ready for a future event or activity.',
    examples: [{ english: 'I prepared my notes before the presentation.', chinese: '我在演讲前准备好了笔记。' }], collocations: ['prepare for', 'prepare a meal'], level: 2, cefr: 'A2', categories: ['School', 'Business'],
  },
  {
    id: 'promise', term: 'promise', normalizedTerm: 'promise', partOfSpeech: ['verb', 'noun'], ipa: '/ˈprɒmɪs/',
    chineseShort: '承诺；保证', chineseExplanation: '可作名词或动词，表示“承诺；保证”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To say definitely that you will do something or that something will happen; such a statement.',
    examples: [{ english: 'I promise to return the book tomorrow.', chinese: '我保证明天归还这本书。' }], collocations: ['make a promise', 'promise to'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'recommend', term: 'recommend', normalizedTerm: 'recommend', partOfSpeech: ['verb'], ipa: '/ˌrɛkəˈmɛnd/',
    chineseShort: '推荐；建议', chineseExplanation: '表示“推荐、建议”。常见结构有 recommend something、recommend doing something，以及 recommend that...。', englishDefinition: 'To say that someone or something is good or suitable for a purpose.',
    examples: [{ english: 'Can you recommend a good hotel nearby?', chinese: '你能推荐附近一家不错的酒店吗？' }], collocations: ['highly recommend', 'recommend doing'], synonyms: ['suggest'], level: 2, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'remember', term: 'remember', normalizedTerm: 'remember', partOfSpeech: ['verb'], ipa: '/rɪˈmɛmbə/',
    chineseShort: '记得；记住', chineseExplanation: '表示“记得；记住”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To keep something in your mind or bring it back to your mind.',
    examples: [{ english: 'Remember to save your work before closing the app.', chinese: '关闭应用前记得保存你的工作。' }], collocations: ['remember to', 'remember clearly'], antonyms: ['forget'], level: 2, cefr: 'A2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'repair', term: 'repair', normalizedTerm: 'repair', partOfSpeech: ['verb', 'noun'], ipa: '/rɪˈpeə/',
    chineseShort: '修理；维修', chineseExplanation: '可作名词或动词，表示“修理；维修”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To fix something that is damaged or not working; the act of fixing it.',
    examples: [{ english: 'The technician repaired my laptop.', chinese: '技术人员修好了我的笔记本电脑。' }], collocations: ['repair a device', 'under repair'], synonyms: ['fix'], level: 2, cefr: 'A2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'request', term: 'request', normalizedTerm: 'request', partOfSpeech: ['noun', 'verb'], ipa: '/rɪˈkwɛst/',
    chineseShort: '请求；要求', chineseExplanation: '可作名词或动词，表示“请求；要求”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'An act of asking for something politely or formally; to ask in this way.',
    examples: [{ english: 'We received a request for more information.', chinese: '我们收到了一项要求提供更多信息的请求。' }], collocations: ['make a request', 'request access'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'reservation', term: 'reservation', normalizedTerm: 'reservation', partOfSpeech: ['noun'], ipa: '/ˌrɛzəˈveɪʃən/',
    chineseShort: '预订；预约', chineseExplanation: '表示“预订、预约”，常用于酒店、餐厅、座位或服务的预留安排。', englishDefinition: 'An arrangement to keep a seat, room, table, or service for someone at a particular time.',
    examples: [{ english: 'I made a dinner reservation for eight o\'clock.', chinese: '我预订了晚上八点的晚餐座位。' }], collocations: ['make a reservation', 'hotel reservation'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'return', term: 'return', normalizedTerm: 'return', partOfSpeech: ['verb', 'noun'], ipa: '/rɪˈtɜːn/',
    chineseShort: '返回；归还；退回', chineseExplanation: '可作名词或动词，表示“返回；归还；退回”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To go or come back, or to give something back; an act of coming or giving back.',
    examples: [{ english: 'Please return the key at reception.', chinese: '请在前台归还钥匙。' }], collocations: ['return home', 'return a product'], level: 2, cefr: 'A2', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'safe', term: 'safe', normalizedTerm: 'safe', partOfSpeech: ['adjective'], ipa: '/seɪf/',
    chineseShort: '安全的', chineseExplanation: '表示“安全的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Protected from or not likely to cause danger, harm, or loss.',
    examples: [{ english: 'Keep your password in a safe place.', chinese: '把密码保存在安全的地方。' }], collocations: ['safe place', 'stay safe'], antonyms: ['dangerous'], level: 2, cefr: 'A2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'service', term: 'service', normalizedTerm: 'service', partOfSpeech: ['noun'], ipa: '/ˈsɜːvɪs/',
    chineseShort: '服务', chineseExplanation: '表示“服务”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'Work done for a customer or a system provided for public use.',
    examples: [{ english: 'The restaurant provides excellent service.', chinese: '这家餐厅提供很好的服务。' }], collocations: ['customer service', 'online service'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'solution', term: 'solution', normalizedTerm: 'solution', partOfSpeech: ['noun'], ipa: '/səˈluːʃən/',
    chineseShort: '解决办法；答案', chineseExplanation: '表示“解决办法；答案”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A way of solving a problem or dealing with a difficult situation.',
    examples: [{ english: 'We found a simple solution to the problem.', chinese: '我们找到了一个简单的解决办法。' }], collocations: ['practical solution', 'find a solution'], synonyms: ['answer'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'spend', term: 'spend', normalizedTerm: 'spend', partOfSpeech: ['verb'], ipa: '/spɛnd/',
    chineseShort: '花费；度过', chineseExplanation: '表示“花费；度过”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To use money, time, or energy for a particular purpose.',
    examples: [{ english: 'I spent two hours studying last night.', chinese: '我昨晚花了两个小时学习。' }], collocations: ['spend money', 'spend time'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'suggest', term: 'suggest', normalizedTerm: 'suggest', partOfSpeech: ['verb'], ipa: '/səˈdʒɛst/',
    chineseShort: '建议；提议', chineseExplanation: '表示“建议；提议”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To mention an idea or plan for someone to consider.',
    examples: [{ english: 'I suggest taking an earlier train.', chinese: '我建议搭更早的火车。' }], collocations: ['suggest doing', 'suggest that'], level: 2, cefr: 'A2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'support', term: 'support', normalizedTerm: 'support', partOfSpeech: ['verb', 'noun'], ipa: '/səˈpɔːt/',
    chineseShort: '支持；帮助', chineseExplanation: '可作名词或动词，表示“支持；帮助”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To help someone or something succeed or continue; the help that is provided.',
    examples: [{ english: 'The team supported the new idea.', chinese: '团队支持这个新想法。' }], collocations: ['customer support', 'support a decision'], synonyms: ['assist'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'surprise', term: 'surprise', normalizedTerm: 'surprise', partOfSpeech: ['noun', 'verb'], ipa: '/səˈpraɪz/',
    chineseShort: '惊喜；使惊讶', chineseExplanation: '可作名词或动词，表示“惊喜；使惊讶”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'An unexpected event or feeling; to make someone feel surprised.',
    examples: [{ english: 'The birthday gift was a wonderful surprise.', chinese: '生日礼物是一个很棒的惊喜。' }], collocations: ['pleasant surprise', 'surprise someone'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'traffic', term: 'traffic', normalizedTerm: 'traffic', partOfSpeech: ['noun'], ipa: '/ˈtræfɪk/',
    chineseShort: '交通；车流', chineseExplanation: '表示“交通；车流”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The vehicles moving along roads in a particular area.',
    examples: [{ english: 'Traffic is heavy during the morning rush hour.', chinese: '早高峰时交通很拥堵。' }], collocations: ['heavy traffic', 'traffic jam'], level: 2, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'useful', term: 'useful', normalizedTerm: 'useful', partOfSpeech: ['adjective'], ipa: '/ˈjuːsfəl/',
    chineseShort: '有用的；实用的', chineseExplanation: '表示“有用的；实用的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Helping you do or achieve something.',
    examples: [{ english: 'This guide contains useful travel tips.', chinese: '这份指南包含有用的旅行建议。' }], collocations: ['useful information', 'useful tool'], antonyms: ['useless'], level: 2, cefr: 'A2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'worry', term: 'worry', normalizedTerm: 'worry', partOfSpeech: ['verb', 'noun'], ipa: '/ˈwʌri/',
    chineseShort: '担心；忧虑', chineseExplanation: '可作名词或动词，表示“担心；忧虑”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To feel anxious about something; a feeling of anxiety.',
    examples: [{ english: 'Do not worry about the small mistake.', chinese: '别为这个小错误担心。' }], collocations: ['worry about', 'no need to worry'], synonyms: ['be concerned'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'account', term: 'account', normalizedTerm: 'account', partOfSpeech: ['noun'], ipa: '/əˈkaʊnt/',
    chineseShort: '账户；账号', chineseExplanation: '表示“账户；账号”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A record or arrangement that allows a person to use a service, especially online or financial services.',
    examples: [{ english: 'Create an account before using the service.', chinese: '使用这项服务前先创建一个账号。' }], collocations: ['user account', 'bank account'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'customer', term: 'customer', normalizedTerm: 'customer', partOfSpeech: ['noun'], ipa: '/ˈkʌstəmə/',
    chineseShort: '顾客；客户', chineseExplanation: '表示“顾客；客户”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A person or organization that buys goods or services.',
    examples: [{ english: 'The customer asked for a receipt.', chinese: '顾客要求拿收据。' }], collocations: ['customer service', 'regular customer'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'delivery', term: 'delivery', normalizedTerm: 'delivery', partOfSpeech: ['noun'], ipa: '/dɪˈlɪvəri/',
    chineseShort: '送货；递送', chineseExplanation: '表示“送货；递送”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The act of taking goods, letters, or packages to a person or place.',
    examples: [{ english: 'The delivery arrived this morning.', chinese: '货物今天早上送到了。' }], collocations: ['free delivery', 'delivery time'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'email', term: 'email', normalizedTerm: 'email', partOfSpeech: ['noun', 'verb'], ipa: '/ˈiːmeɪl/',
    chineseShort: '电子邮件；发邮件', chineseExplanation: '可作名词或动词，表示“电子邮件；发邮件”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A message sent electronically over the internet; to send such a message.',
    examples: [{ english: 'Please email me the document tonight.', chinese: '请今晚把文件通过电子邮件发给我。' }], collocations: ['email address', 'send an email'], level: 2, cefr: 'A2', categories: ['Technology', 'Business'],
  },
  {
    id: 'password', term: 'password', normalizedTerm: 'password', partOfSpeech: ['noun'], ipa: '/ˈpɑːswɜːd/',
    chineseShort: '密码', chineseExplanation: '表示“密码”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A secret word or string of characters used to prove identity and gain access to a system.',
    examples: [{ english: 'Use a strong password for every important account.', chinese: '每个重要账号都要使用强密码。' }], collocations: ['strong password', 'reset a password'], level: 2, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'payment', term: 'payment', normalizedTerm: 'payment', partOfSpeech: ['noun'], ipa: '/ˈpeɪmənt/',
    chineseShort: '付款；支付', chineseExplanation: '表示“付款；支付”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'An amount of money paid or the act of paying it.',
    examples: [{ english: 'Your payment was received successfully.', chinese: '你的付款已成功收到。' }], collocations: ['make a payment', 'payment method'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'project', term: 'project', normalizedTerm: 'project', partOfSpeech: ['noun'], ipa: '/ˈprɒdʒɛkt/',
    chineseShort: '项目；课题', chineseExplanation: '表示“项目；课题”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A planned piece of work with a particular purpose and usually a clear beginning and end.',
    examples: [{ english: 'Our class is working on a science project.', chinese: '我们班正在做一个科学项目。' }], collocations: ['school project', 'project plan'], level: 2, cefr: 'A2', categories: ['School', 'Business'],
  },
  {
    id: 'receipt', term: 'receipt', normalizedTerm: 'receipt', partOfSpeech: ['noun'], ipa: '/rɪˈsiːt/',
    chineseShort: '收据；付款凭证', chineseExplanation: '表示“收据；付款凭证”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A document showing that money has been paid for goods or services.',
    examples: [{ english: 'Keep the receipt in case you need a refund.', chinese: '请保留收据，以防需要退款。' }], collocations: ['sales receipt', 'keep a receipt'], level: 2, cefr: 'A2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'website', term: 'website', normalizedTerm: 'website', partOfSpeech: ['noun'], ipa: '/ˈwɛbsaɪt/',
    chineseShort: '网站', chineseExplanation: '表示“网站”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A set of connected web pages available under one internet address.',
    examples: [{ english: 'The company updated its website yesterday.', chinese: '公司昨天更新了网站。' }], collocations: ['company website', 'visit a website'], level: 2, cefr: 'A2', categories: ['Technology', 'Business'],
  },
  {
    id: 'adapt', term: 'adapt', normalizedTerm: 'adapt', partOfSpeech: ['verb'], ipa: '/əˈdæpt/',
    chineseShort: '适应；调整', chineseExplanation: '表示“适应；调整”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To change your behaviour, ideas, or methods so that they suit a new situation.',
    examples: [{ english: 'Employees must adapt to new technology quickly.', chinese: '员工必须快速适应新技术。' }], collocations: ['adapt to', 'adapt a plan'], synonyms: ['adjust'], level: 3, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'analyze', term: 'analyze', normalizedTerm: 'analyze', partOfSpeech: ['verb'], ipa: '/ˈænəˌlaɪz/',
    chineseShort: '分析', chineseExplanation: '表示“分析”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To examine something carefully in order to understand it or explain it.',
    examples: [{ english: 'We need to analyze the survey results.', chinese: '我们需要分析调查结果。' }], collocations: ['analyze data', 'analyze results'], synonyms: ['examine'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'approach', term: 'approach', normalizedTerm: 'approach', partOfSpeech: ['noun', 'verb'], ipa: '/əˈprəʊtʃ/',
    chineseShort: '方法；接近', chineseExplanation: '可作名词或动词，表示“方法；接近”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A way of dealing with something; to move nearer to someone or something.',
    examples: [{ english: 'We need a different approach to this problem.', chinese: '我们需要用不同的方法处理这个问题。' }], collocations: ['practical approach', 'approach a problem'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'assume', term: 'assume', normalizedTerm: 'assume', partOfSpeech: ['verb'], ipa: '/əˈsuːm/',
    chineseShort: '假设；认为', chineseExplanation: '表示“假设；认为”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To accept something as true without having complete proof.',
    examples: [{ english: 'Do not assume that every user has the same needs.', chinese: '不要假设每个用户都有相同的需求。' }], collocations: ['assume that', 'reasonable to assume'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'benefit', term: 'benefit', normalizedTerm: 'benefit', partOfSpeech: ['noun', 'verb'], ipa: '/ˈbɛnɪˌfɪt/',
    chineseShort: '好处；受益', chineseExplanation: '可作名词或动词，表示“好处；受益”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'An advantage or useful effect; to gain an advantage from something.',
    examples: [{ english: 'Regular exercise has many health benefits.', chinese: '规律运动有很多健康益处。' }], collocations: ['major benefit', 'benefit from'], synonyms: ['advantage'], level: 3, cefr: 'B1', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'challenge', term: 'challenge', normalizedTerm: 'challenge', partOfSpeech: ['noun', 'verb'], ipa: '/ˈtʃælɪndʒ/',
    chineseShort: '挑战；质疑', chineseExplanation: '可作名词或动词，表示“挑战；质疑”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A difficult task or situation that tests ability; to question whether something is correct.',
    examples: [{ english: 'Learning a new language can be a challenge.', chinese: '学习一门新语言可能是一项挑战。' }], collocations: ['major challenge', 'face a challenge'], synonyms: ['difficulty'], level: 3, cefr: 'B1', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'consequence', term: 'consequence', normalizedTerm: 'consequence', partOfSpeech: ['noun'], ipa: '/ˈkɒnsɪkwəns/',
    chineseShort: '后果；结果', chineseExplanation: '表示“后果；结果”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'Something that happens as a result of a particular action or situation.',
    examples: [{ english: 'Poor planning can have serious consequences.', chinese: '规划不周可能带来严重后果。' }], collocations: ['serious consequence', 'as a consequence'], synonyms: ['result'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'contribute', term: 'contribute', normalizedTerm: 'contribute', partOfSpeech: ['verb'], ipa: '/kənˈtrɪbjuːt/',
    chineseShort: '贡献；促成', chineseExplanation: '表示“贡献；促成”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To give something such as time, money, or ideas, or to help cause a result.',
    examples: [{ english: 'Several factors contributed to the delay.', chinese: '几个因素导致了这次延误。' }], collocations: ['contribute to', 'contribute ideas'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'determine', term: 'determine', normalizedTerm: 'determine', partOfSpeech: ['verb'], ipa: '/dɪˈtɜːmɪn/',
    chineseShort: '确定；决定', chineseExplanation: '表示“确定；决定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To discover or establish something exactly, or to control what happens.',
    examples: [{ english: 'The test will determine whether the system is stable.', chinese: '这项测试将确定系统是否稳定。' }], collocations: ['determine whether', 'determine the cause'], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'develop', term: 'develop', normalizedTerm: 'develop', partOfSpeech: ['verb'], ipa: '/dɪˈvɛləp/',
    chineseShort: '发展；开发', chineseExplanation: '表示“发展；开发”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To grow or change over time, or to create something new or more advanced.',
    examples: [{ english: 'The team is developing a new mobile feature.', chinese: '团队正在开发一项新的手机功能。' }], collocations: ['develop skills', 'develop a product'], synonyms: ['create'], level: 3, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'evidence', term: 'evidence', normalizedTerm: 'evidence', partOfSpeech: ['noun'], ipa: '/ˈɛvɪdəns/',
    chineseShort: '证据；依据', chineseExplanation: '表示“证据；依据”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'Facts or information that support or show whether something is true.',
    examples: [{ english: 'There is strong evidence that the method works.', chinese: '有充分证据表明这种方法有效。' }], collocations: ['strong evidence', 'evidence suggests'], synonyms: ['proof'], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'factor', term: 'factor', normalizedTerm: 'factor', partOfSpeech: ['noun'], ipa: '/ˈfæktə/',
    chineseShort: '因素', chineseExplanation: '表示“因素”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'One of the things that affects a situation, decision, or result.',
    examples: [{ english: 'Cost is an important factor in our decision.', chinese: '成本是我们决定中的一个重要因素。' }], collocations: ['key factor', 'important factor'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'feature', term: 'feature', normalizedTerm: 'feature', partOfSpeech: ['noun', 'verb'], ipa: '/ˈfiːtʃə/',
    chineseShort: '功能；特征；以…为特色', chineseExplanation: '可作名词或动词，表示“功能；特征；以…为特色”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'An important or noticeable part of something; to include something as a special part.',
    examples: [{ english: 'The app includes a useful search feature.', chinese: '这个应用包含一个实用的搜索功能。' }], collocations: ['key feature', 'new feature'], level: 3, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'focus', term: 'focus', normalizedTerm: 'focus', partOfSpeech: ['noun', 'verb'], ipa: '/ˈfəʊkəs/',
    chineseShort: '重点；专注', chineseExplanation: '可作名词或动词，表示“重点；专注”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'The main subject or activity receiving attention; to give attention to something.',
    examples: [{ english: 'We should focus on the most important tasks first.', chinese: '我们应该先专注于最重要的任务。' }], collocations: ['main focus', 'focus on'], synonyms: ['concentrate'], level: 3, cefr: 'B1', categories: ['Academic', 'Business'],
  },
  {
    id: 'generate', term: 'generate', normalizedTerm: 'generate', partOfSpeech: ['verb'], ipa: '/ˈdʒɛnəˌreɪt/',
    chineseShort: '产生；生成', chineseExplanation: '表示“产生；生成”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To produce or create something, especially energy, ideas, data, or results.',
    examples: [{ english: 'The system can generate a report automatically.', chinese: '系统可以自动生成报告。' }], collocations: ['generate data', 'generate ideas'], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'identify', term: 'identify', normalizedTerm: 'identify', partOfSpeech: ['verb'], ipa: '/aɪˈdɛntɪˌfaɪ/',
    chineseShort: '识别；确定', chineseExplanation: '表示“识别；确定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To recognize someone or something and say what it is, or to find a particular issue.',
    examples: [{ english: 'The survey helped us identify the main problem.', chinese: '调查帮助我们确定了主要问题。' }], collocations: ['identify a problem', 'identify correctly'], synonyms: ['recognize'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'impact', term: 'impact', normalizedTerm: 'impact', partOfSpeech: ['noun'], ipa: '/ˈɪmpækt/',
    chineseShort: '影响；冲击', chineseExplanation: '表示“影响；冲击”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A strong effect that something has on a person, situation, or result.',
    examples: [{ english: 'The new policy had a positive impact on sales.', chinese: '新政策对销售产生了积极影响。' }], collocations: ['significant impact', 'impact on'], synonyms: ['effect'], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'indicate', term: 'indicate', normalizedTerm: 'indicate', partOfSpeech: ['verb'], ipa: '/ˈɪndɪˌkeɪt/',
    chineseShort: '表明；指出', chineseExplanation: '表示“表明；指出”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To show, suggest, or point to something.',
    examples: [{ english: 'The results indicate that users prefer the simpler design.', chinese: '结果表明用户更喜欢简单的设计。' }], collocations: ['indicate that', 'clearly indicate'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'involve', term: 'involve', normalizedTerm: 'involve', partOfSpeech: ['verb'], ipa: '/ɪnˈvɒlv/',
    chineseShort: '涉及；包含', chineseExplanation: '表示“涉及；包含”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To include someone or something as a necessary part of an activity or situation.',
    examples: [{ english: 'The job involves working with customers every day.', chinese: '这份工作需要每天与客户打交道。' }], collocations: ['involve doing', 'involve users'], level: 3, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'issue', term: 'issue', normalizedTerm: 'issue', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɪʃuː/',
    chineseShort: '问题；议题；发布', chineseExplanation: '可作名词或动词，表示“问题；议题；发布”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'An important topic or problem; to officially provide or publish something.',
    examples: [{ english: 'We found a security issue during testing.', chinese: '我们在测试期间发现了一个安全问题。' }], collocations: ['serious issue', 'security issue'], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'method', term: 'method', normalizedTerm: 'method', partOfSpeech: ['noun'], ipa: '/ˈmɛθəd/',
    chineseShort: '方法；方式', chineseExplanation: '表示“方法；方式”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A particular way of doing something.',
    examples: [{ english: 'This method is faster than the old one.', chinese: '这种方法比旧方法更快。' }], collocations: ['research method', 'effective method'], synonyms: ['approach'], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'occur', term: 'occur', normalizedTerm: 'occur', partOfSpeech: ['verb'], ipa: '/əˈkɜː/',
    chineseShort: '发生；出现', chineseExplanation: '表示“发生；出现”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To happen or exist, especially without being planned.',
    examples: [{ english: 'The error occurs only on older devices.', chinese: '这个错误只会在较旧的设备上出现。' }], collocations: ['occur frequently', 'occur when'], level: 3, cefr: 'B1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'outcome', term: 'outcome', normalizedTerm: 'outcome', partOfSpeech: ['noun'], ipa: '/ˈaʊtkʌm/',
    chineseShort: '结果；成果', chineseExplanation: '表示“结果；成果”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The final result of an event, process, or situation.',
    examples: [{ english: 'The outcome of the experiment was unexpected.', chinese: '实验结果出乎意料。' }], collocations: ['possible outcome', 'learning outcome'], level: 3, cefr: 'B2', categories: ['Academic', 'School'],
  },
  {
    id: 'participate', term: 'participate', normalizedTerm: 'participate', partOfSpeech: ['verb'], ipa: '/pɑːˈtɪsɪˌpeɪt/',
    chineseShort: '参加；参与', chineseExplanation: '表示“参加；参与”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To take part in an activity or event.',
    examples: [{ english: 'More than fifty students participated in the survey.', chinese: '五十多名学生参加了调查。' }], collocations: ['participate in', 'actively participate'], level: 3, cefr: 'B1', categories: ['School', 'Academic'],
  },
  {
    id: 'prevent', term: 'prevent', normalizedTerm: 'prevent', partOfSpeech: ['verb'], ipa: '/prɪˈvɛnt/',
    chineseShort: '防止；阻止', chineseExplanation: '表示“防止；阻止”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To stop something from happening or someone from doing something.',
    examples: [{ english: 'Strong passwords help prevent unauthorized access.', chinese: '强密码有助于防止未经授权的访问。' }], collocations: ['prevent damage', 'prevent someone from'], synonyms: ['stop'], level: 3, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'priority', term: 'priority', normalizedTerm: 'priority', partOfSpeech: ['noun'], ipa: '/praɪˈɒrɪti/',
    chineseShort: '优先事项；优先权', chineseExplanation: '表示“优先事项；优先权”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'Something that is considered more important than other things and should be dealt with first.',
    examples: [{ english: 'User safety is our highest priority.', chinese: '用户安全是我们的最高优先事项。' }], collocations: ['top priority', 'high priority'], synonyms: ['importance'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'process', term: 'process', normalizedTerm: 'process', partOfSpeech: ['noun', 'verb'], ipa: '/ˈprəʊsɛs/',
    chineseShort: '过程；流程；处理', chineseExplanation: '可作名词或动词，表示“过程；流程；处理”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'A series of actions or stages; to deal with information or materials in a systematic way.',
    examples: [{ english: 'The application process takes about ten minutes.', chinese: '申请流程大约需要十分钟。' }], collocations: ['decision-making process', 'process data'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'provide', term: 'provide', normalizedTerm: 'provide', partOfSpeech: ['verb'], ipa: '/prəˈvaɪd/',
    chineseShort: '提供', chineseExplanation: '表示“提供”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To give or make something available to someone.',
    examples: [{ english: 'The guide provides clear instructions for beginners.', chinese: '这份指南为初学者提供清晰的说明。' }], collocations: ['provide information', 'provide support'], level: 3, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'require', term: 'require', normalizedTerm: 'require', partOfSpeech: ['verb'], ipa: '/rɪˈkwaɪə/',
    chineseShort: '需要；要求', chineseExplanation: '表示“需要；要求”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To need something or make something necessary.',
    examples: [{ english: 'This feature requires an internet connection.', chinese: '这项功能需要网络连接。' }], collocations: ['require access', 'require someone to'], level: 3, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'respond', term: 'respond', normalizedTerm: 'respond', partOfSpeech: ['verb'], ipa: '/rɪˈspɒnd/',
    chineseShort: '回应；作出反应', chineseExplanation: '表示“回应；作出反应”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To answer someone or react to an event or situation.',
    examples: [{ english: 'Please respond to the email by Friday.', chinese: '请在星期五前回复这封电子邮件。' }], collocations: ['respond to', 'respond quickly'], synonyms: ['reply'], level: 3, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'responsibility', term: 'responsibility', normalizedTerm: 'responsibility', partOfSpeech: ['noun'], ipa: '/rɪˌspɒnsəˈbɪlɪti/',
    chineseShort: '责任；职责', chineseExplanation: '表示“责任；职责”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A duty or something that you are expected to deal with.',
    examples: [{ english: 'Managing the budget is one of her responsibilities.', chinese: '管理预算是她的职责之一。' }], collocations: ['take responsibility', 'responsibility for'], level: 3, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'result', term: 'result', normalizedTerm: 'result', partOfSpeech: ['noun', 'verb'], ipa: '/rɪˈzʌlt/',
    chineseShort: '结果；导致', chineseExplanation: '可作名词或动词，表示“结果；导致”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'Something that happens because of an action or event; to happen as a consequence.',
    examples: [{ english: 'The changes resulted in faster loading times.', chinese: '这些更改带来了更快的加载速度。' }], collocations: ['final result', 'result in'], level: 3, cefr: 'B1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'risk', term: 'risk', normalizedTerm: 'risk', partOfSpeech: ['noun', 'verb'], ipa: '/rɪsk/',
    chineseShort: '风险；冒险', chineseExplanation: '可作名词或动词，表示“风险；冒险”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'The possibility that something bad may happen; to expose someone or something to danger.',
    examples: [{ english: 'Using old software increases the risk of attack.', chinese: '使用旧软件会增加遭受攻击的风险。' }], collocations: ['security risk', 'reduce risk'], synonyms: ['danger'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'secure', term: 'secure', normalizedTerm: 'secure', partOfSpeech: ['adjective', 'verb'], ipa: '/sɪˈkjʊə/',
    chineseShort: '安全的；保护', chineseExplanation: '表示“安全的；保护”；可根据句子中的词性和语境判断具体含义。', englishDefinition: 'Protected from danger or unauthorized access; to make something safe or obtain it successfully.',
    examples: [{ english: 'Make sure your account is secure.', chinese: '确保你的账号是安全的。' }], collocations: ['secure connection', 'secure access'], antonyms: ['insecure'], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'strategy', term: 'strategy', normalizedTerm: 'strategy', partOfSpeech: ['noun'], ipa: '/ˈstrætədʒi/',
    chineseShort: '策略；战略', chineseExplanation: '表示“策略；战略”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A detailed plan designed to achieve a particular goal.',
    examples: [{ english: 'The company needs a clear marketing strategy.', chinese: '公司需要明确的营销策略。' }], collocations: ['business strategy', 'long-term strategy'], synonyms: ['plan'], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'achieve', term: 'achieve', normalizedTerm: 'achieve', partOfSpeech: ['verb'], ipa: '/əˈtʃiːv/',
    chineseShort: '实现；达到', chineseExplanation: '表示“实现；达到”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To succeed in reaching a goal or desired result through effort.',
    examples: [{ english: 'She achieved a high score in the exam.', chinese: '她在考试中取得了高分。' }], collocations: ['achieve a goal', 'achieve success'], synonyms: ['accomplish'], level: 3, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'affect', term: 'affect', normalizedTerm: 'affect', partOfSpeech: ['verb'], ipa: '/əˈfɛkt/',
    chineseShort: '影响', chineseExplanation: '表示“影响”，通常作动词。不要与名词 effect（影响、效果）混淆。', englishDefinition: 'To produce a change in someone or something.',
    examples: [{ english: 'Weather can affect travel plans.', chinese: '天气会影响旅行计划。' }], collocations: ['directly affect', 'affect performance'], synonyms: ['influence'], level: 3, cefr: 'B1', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'alternative', term: 'alternative', normalizedTerm: 'alternative', partOfSpeech: ['noun', 'adjective'], ipa: '/ɔːlˈtɜːnəˌtɪv/',
    chineseShort: '替代方案；可替代的', chineseExplanation: '表示“替代方案”或“可替代的”。常用 an alternative to something 表示“某事物的替代选择”。', englishDefinition: 'A different choice or possibility; available as another option.',
    examples: [{ english: 'We need an alternative plan in case it rains.', chinese: '如果下雨，我们需要一个替代方案。' }], collocations: ['alternative method', 'alternative to'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'appropriate', term: 'appropriate', normalizedTerm: 'appropriate', partOfSpeech: ['adjective'], ipa: '/əˈprəʊpriət/',
    chineseShort: '合适的；恰当的', chineseExplanation: '表示“合适的、恰当的”，强调符合特定场合、目的或条件。', englishDefinition: 'Suitable or correct for a particular situation or purpose.',
    examples: [{ english: 'Choose an appropriate password for the account.', chinese: '为账号选择一个合适的密码。' }], collocations: ['appropriate for', 'appropriate action'], synonyms: ['suitable'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'complex', term: 'complex', normalizedTerm: 'complex', partOfSpeech: ['adjective', 'noun'], ipa: '/ˈkɒmplɛks/',
    chineseShort: '复杂的；综合体', chineseExplanation: '可作形容词或名词，表示“复杂的；综合体”；具体含义需根据句子结构判断。', englishDefinition: 'Having many connected parts and therefore difficult to understand; a group of related buildings or structures.',
    examples: [{ english: 'The problem is more complex than it first appears.', chinese: '这个问题比最初看起来更复杂。' }], collocations: ['complex problem', 'complex system'], synonyms: ['complicated'], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'concentrate', term: 'concentrate', normalizedTerm: 'concentrate', partOfSpeech: ['verb'], ipa: '/ˈkɒnsənˌtreɪt/',
    chineseShort: '集中注意力；集中', chineseExplanation: '表示“集中注意力；集中”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To give all your attention to something or gather something in one place.',
    examples: [{ english: 'It is easier to concentrate in a quiet room.', chinese: '在安静的房间里更容易集中注意力。' }], collocations: ['concentrate on', 'concentrate efforts'], level: 3, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'conduct', term: 'conduct', normalizedTerm: 'conduct', partOfSpeech: ['verb'], ipa: '/kənˈdʌkt/',
    chineseShort: '进行；实施', chineseExplanation: '这里作动词，表示“进行、实施”，常用于 conduct research、conduct a survey 等较正式表达。', englishDefinition: 'To organize and carry out an activity such as research, a survey, or an investigation.',
    examples: [{ english: 'The team conducted a user survey.', chinese: '团队进行了一项用户调查。' }], collocations: ['conduct research', 'conduct a survey'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'consider', term: 'consider', normalizedTerm: 'consider', partOfSpeech: ['verb'], ipa: '/kənˈsɪdə/',
    chineseShort: '考虑；认为', chineseExplanation: '表示“考虑；认为”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To think carefully about something before making a decision, or to regard something in a particular way.',
    examples: [{ english: 'We should consider all available options.', chinese: '我们应该考虑所有可用的选项。' }], collocations: ['consider doing', 'carefully consider'], level: 3, cefr: 'B1', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'context', term: 'context', normalizedTerm: 'context', partOfSpeech: ['noun'], ipa: '/ˈkɒntɛkst/',
    chineseShort: '语境；背景', chineseExplanation: '表示“语境；背景”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The situation, information, or surrounding words that help explain the meaning of something.',
    examples: [{ english: 'The meaning of the word depends on the context.', chinese: '这个词的意思取决于语境。' }], collocations: ['in context', 'historical context'], level: 3, cefr: 'B2', categories: ['Academic', 'School'],
  },
  {
    id: 'cooperate', term: 'cooperate', normalizedTerm: 'cooperate', partOfSpeech: ['verb'], ipa: '/kəʊˈɒpəˌreɪt/',
    chineseShort: '合作；配合', chineseExplanation: '表示“合作；配合”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To work together with other people toward the same goal.',
    examples: [{ english: 'The two teams agreed to cooperate on the project.', chinese: '两个团队同意在这个项目上合作。' }], collocations: ['cooperate with', 'fully cooperate'], synonyms: ['collaborate'], level: 3, cefr: 'B1', categories: ['Business', 'Academic'],
  },
  {
    id: 'decline', term: 'decline', normalizedTerm: 'decline', partOfSpeech: ['verb', 'noun'], ipa: '/dɪˈklaɪn/',
    chineseShort: '下降；拒绝', chineseExplanation: '可作名词或动词，表示“下降；拒绝”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To become smaller or weaker, or to politely refuse; a decrease in amount or quality.',
    examples: [{ english: 'Sales declined slightly last month.', chinese: '上个月销售额略有下降。' }], collocations: ['decline sharply', 'decline an offer'], synonyms: ['decrease'], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'environment', term: 'environment', normalizedTerm: 'environment', partOfSpeech: ['noun'], ipa: '/ɛnˈvaɪrənmənt/',
    chineseShort: '环境', chineseExplanation: '表示“环境”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The natural world or the conditions in which people, animals, or systems exist and operate.',
    examples: [{ english: 'A quiet environment can improve concentration.', chinese: '安静的环境可以提高专注力。' }], collocations: ['work environment', 'natural environment'], level: 3, cefr: 'B1', categories: ['Academic', 'Business'],
  },
  {
    id: 'establish', term: 'establish', normalizedTerm: 'establish', partOfSpeech: ['verb'], ipa: '/ɪˈstæblɪʃ/',
    chineseShort: '建立；确定', chineseExplanation: '表示“建立；确定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To create something intended to last, or to prove a fact clearly.',
    examples: [{ english: 'The company established a new office in Singapore.', chinese: '公司在新加坡设立了一个新办公室。' }], collocations: ['establish a company', 'establish that'], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'estimate', term: 'estimate', normalizedTerm: 'estimate', partOfSpeech: ['verb'], ipa: '/ˈestɪmeɪt/',
    chineseShort: '估计；估算', chineseExplanation: '这里作动词，表示“估计、估算”；重点是根据现有信息作近似判断，而不是给出完全精确的数字。', englishDefinition: 'To calculate or judge an amount, value, time, or probability approximately.',
    examples: [{ english: 'We estimate that the repair will take two days.', chinese: '我们估计维修需要两天。' }], collocations: ['estimate costs', 'estimate that'], synonyms: ['approximate'], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'flexible', term: 'flexible', normalizedTerm: 'flexible', partOfSpeech: ['adjective'], ipa: '/ˈflɛksɪbəl/',
    chineseShort: '灵活的；可变通的', chineseExplanation: '表示“灵活的；可变通的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Able to change or be changed easily according to different needs or situations.',
    examples: [{ english: 'The job offers flexible working hours.', chinese: '这份工作提供灵活的工作时间。' }], collocations: ['flexible schedule', 'flexible approach'], synonyms: ['adaptable'], antonyms: ['rigid'], level: 3, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'guarantee', term: 'guarantee', normalizedTerm: 'guarantee', partOfSpeech: ['verb', 'noun'], ipa: '/ˌɡærənˈtiː/',
    chineseShort: '保证；担保', chineseExplanation: '可作名词或动词，表示“保证；担保”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To promise that something will happen or be of a certain quality; such a promise.',
    examples: [{ english: 'The company guarantees a full refund if the product is faulty.', chinese: '如果产品有问题，公司保证全额退款。' }], collocations: ['money-back guarantee', 'guarantee that'], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'independent', term: 'independent', normalizedTerm: 'independent', partOfSpeech: ['adjective'], ipa: '/ˌɪndɪˈpɛndənt/',
    chineseShort: '独立的；自主的', chineseExplanation: '表示“独立的；自主的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not controlled by another person or organization and able to act or think for yourself.',
    examples: [{ english: 'Students are encouraged to become independent learners.', chinese: '学校鼓励学生成为独立学习者。' }], collocations: ['independent study', 'independent company'], antonyms: ['dependent'], level: 3, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'influence', term: 'influence', normalizedTerm: 'influence', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɪnfluːəns/',
    chineseShort: '影响；影响力', chineseExplanation: '可作名词或动词，表示“影响；影响力”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'The power to affect how someone thinks or what happens; to have such an effect.',
    examples: [{ english: 'Social media can influence buying decisions.', chinese: '社交媒体会影响购买决定。' }], collocations: ['strong influence', 'influence behaviour'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'resource', term: 'resource', normalizedTerm: 'resource', partOfSpeech: ['noun'], ipa: '/rɪˈzɔːs/',
    chineseShort: '资源；资料', chineseExplanation: '表示“资源；资料”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A useful supply, source of information, or asset that can help achieve a purpose.',
    examples: [{ english: 'This website is a useful learning resource.', chinese: '这个网站是一项有用的学习资源。' }], collocations: ['natural resources', 'learning resource'], level: 3, cefr: 'B2', categories: ['Academic', 'School'],
  },
  {
    id: 'advocate', term: 'advocate', normalizedTerm: 'advocate', partOfSpeech: ['verb'], ipa: '/ˈædvəkeɪt/',
    chineseShort: '提倡；拥护', chineseExplanation: '表示“提倡；拥护”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To publicly support or recommend a particular idea, policy, or action.',
    examples: [{ english: 'Many experts advocate stronger privacy protections.', chinese: '许多专家提倡加强隐私保护。' }], collocations: ['advocate change', 'strongly advocate'], synonyms: ['support'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'anticipate', term: 'anticipate', normalizedTerm: 'anticipate', partOfSpeech: ['verb'], ipa: '/ænˈtɪsɪˌpeɪt/',
    chineseShort: '预期；预料', chineseExplanation: '表示“预期；预料”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To expect something to happen and often prepare for it in advance.',
    examples: [{ english: 'We anticipate higher demand during the holiday period.', chinese: '我们预计假日期间需求会增加。' }], collocations: ['anticipate problems', 'anticipate that'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'apparent', term: 'apparent', normalizedTerm: 'apparent', partOfSpeech: ['adjective'], ipa: '/əˈpærənt/',
    chineseShort: '明显的；表面上的', chineseExplanation: '表示“明显的；表面上的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Easy to notice or understand, or seeming to be true although it may not be certain.',
    examples: [{ english: 'The cause of the error was not immediately apparent.', chinese: '这个错误的原因并不是马上就能看出来。' }], collocations: ['become apparent', 'apparent reason'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'assess', term: 'assess', normalizedTerm: 'assess', partOfSpeech: ['verb'], ipa: '/əˈsɛs/',
    chineseShort: '评估；评定', chineseExplanation: '表示“评估；评定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To judge the quality, importance, amount, or condition of something.',
    examples: [{ english: 'The team assessed the risks before launch.', chinese: '团队在发布前评估了风险。' }], collocations: ['assess risk', 'assess performance'], synonyms: ['evaluate'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'coherent', term: 'coherent', normalizedTerm: 'coherent', partOfSpeech: ['adjective'], ipa: '/kəʊˈhɪərənt/',
    chineseShort: '连贯的；条理清楚的', chineseExplanation: '表示“连贯的；条理清楚的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Logical, consistent, and easy to understand as a whole.',
    examples: [{ english: 'The report presents a coherent argument.', chinese: '这份报告提出了一个连贯的论点。' }], collocations: ['coherent argument', 'coherent strategy'], synonyms: ['logical'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'compel', term: 'compel', normalizedTerm: 'compel', partOfSpeech: ['verb'], ipa: '/kəmˈpɛl/',
    chineseShort: '迫使；使必须', chineseExplanation: '表示“迫使；使必须”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To force or strongly persuade someone to do something.',
    examples: [{ english: 'The evidence compelled the company to investigate further.', chinese: '这些证据迫使公司进一步调查。' }], collocations: ['compel someone to', 'feel compelled'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'comprehensive', term: 'comprehensive', normalizedTerm: 'comprehensive', partOfSpeech: ['adjective'], ipa: '/ˌkɒmprɪˈhɛnsɪv/',
    chineseShort: '全面的；综合的', chineseExplanation: '表示“全面的；综合的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Including all or nearly all important details or aspects of something.',
    examples: [{ english: 'The guide provides a comprehensive overview of the system.', chinese: '这份指南对系统作了全面概述。' }], collocations: ['comprehensive review', 'comprehensive guide'], synonyms: ['thorough'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'compromise', term: 'compromise', normalizedTerm: 'compromise', partOfSpeech: ['noun', 'verb'], ipa: '/ˈkɒmprəˌmaɪz/',
    chineseShort: '妥协；折衷；损害', chineseExplanation: '可作名词或动词，表示“妥协；折衷；损害”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'An agreement in which each side accepts less than it wanted; to weaken or put something at risk.',
    examples: [{ english: 'Both sides reached a compromise after several meetings.', chinese: '双方经过几次会议后达成了妥协。' }], collocations: ['reach a compromise', 'compromise security'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'constraint', term: 'constraint', normalizedTerm: 'constraint', partOfSpeech: ['noun'], ipa: '/kənˈstreɪnt/',
    chineseShort: '限制；约束', chineseExplanation: '表示“限制；约束”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A rule, condition, or lack of resources that limits what can be done.',
    examples: [{ english: 'Time is the main constraint on this project.', chinese: '时间是这个项目的主要限制因素。' }], collocations: ['budget constraint', 'time constraint'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'controversial', term: 'controversial', normalizedTerm: 'controversial', partOfSpeech: ['adjective'], ipa: '/ˌkɒntrəˈvɜːʃəl/',
    chineseShort: '有争议的', chineseExplanation: '表示“有争议的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Causing strong disagreement or public debate.',
    examples: [{ english: 'The proposal remains highly controversial.', chinese: '这项提案仍然很有争议。' }], collocations: ['controversial issue', 'highly controversial'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'credible', term: 'credible', normalizedTerm: 'credible', partOfSpeech: ['adjective'], ipa: '/ˈkrɛdɪbəl/',
    chineseShort: '可信的；可靠的', chineseExplanation: '表示“可信的、可靠的”，强调某个说法、来源或证据具有足够理由让人相信。', englishDefinition: 'Able to be believed or trusted because it appears reasonable and reliable.',
    examples: [{ english: 'The report is based on credible sources.', chinese: '这份报告以可信来源为依据。' }], collocations: ['credible evidence', 'credible source'], synonyms: ['believable'], antonyms: ['unreliable'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'crucial', term: 'crucial', normalizedTerm: 'crucial', partOfSpeech: ['adjective'], ipa: '/ˈkruːʃəl/',
    chineseShort: '关键的；至关重要的', chineseExplanation: '表示“关键的；至关重要的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Extremely important to the success or outcome of something.',
    examples: [{ english: 'Accurate data is crucial for good decisions.', chinese: '准确的数据对正确决策至关重要。' }], collocations: ['crucial role', 'crucial factor'], synonyms: ['essential'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'derive', term: 'derive', normalizedTerm: 'derive', partOfSpeech: ['verb'], ipa: '/dɪˈraɪv/',
    chineseShort: '获得；源自', chineseExplanation: '表示“获得；源自”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To obtain something from a source or to originate from something.',
    examples: [{ english: 'Many English words derive from Latin.', chinese: '许多英语单词源自拉丁语。' }], collocations: ['derive from', 'derive benefit'], level: 4, cefr: 'C1', categories: ['Academic'],
  },
  {
    id: 'detect', term: 'detect', normalizedTerm: 'detect', partOfSpeech: ['verb'], ipa: '/dɪˈtɛkt/',
    chineseShort: '发现；检测', chineseExplanation: '表示“发现；检测”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To notice or discover something that is difficult to see or recognize.',
    examples: [{ english: 'The software can detect unusual login activity.', chinese: '该软件可以检测异常登录活动。' }], collocations: ['detect fraud', 'detect changes'], synonyms: ['discover'], level: 4, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'distinguish', term: 'distinguish', normalizedTerm: 'distinguish', partOfSpeech: ['verb'], ipa: '/dɪˈstɪŋɡwɪʃ/',
    chineseShort: '区分；辨别', chineseExplanation: '表示“区分；辨别”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To recognize or show the difference between two or more things.',
    examples: [{ english: 'It is important to distinguish fact from opinion.', chinese: '区分事实和观点很重要。' }], collocations: ['distinguish between', 'distinguish from'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'diverse', term: 'diverse', normalizedTerm: 'diverse', partOfSpeech: ['adjective'], ipa: '/daɪˈvɜːs/',
    chineseShort: '多样的；多元的', chineseExplanation: '表示“多样的；多元的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Including many different types of people, ideas, or things.',
    examples: [{ english: 'The team includes people from diverse backgrounds.', chinese: '团队成员来自多元背景。' }], collocations: ['diverse range', 'diverse backgrounds'], synonyms: ['varied'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'elaborate', term: 'elaborate', normalizedTerm: 'elaborate', partOfSpeech: ['verb'], ipa: '/ɪˈlæbəreɪt/',
    chineseShort: '详细说明；进一步解释', chineseExplanation: '表示“详细说明；进一步解释”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To explain or develop an idea in greater detail.',
    examples: [{ english: 'Could you elaborate on your proposal?', chinese: '你可以进一步详细说明你的提案吗？' }], collocations: ['elaborate on', 'elaborate further'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'emerge', term: 'emerge', normalizedTerm: 'emerge', partOfSpeech: ['verb'], ipa: '/ɪˈmɜːdʒ/',
    chineseShort: '出现；显现', chineseExplanation: '表示“出现；显现”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To become known, visible, or important after being hidden or unclear.',
    examples: [{ english: 'Several problems emerged during testing.', chinese: '测试期间出现了几个问题。' }], collocations: ['emerge from', 'clearly emerge'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'empirical', term: 'empirical', normalizedTerm: 'empirical', partOfSpeech: ['adjective'], ipa: '/ɪmˈpɪrɪkəl/',
    chineseShort: '实证的；经验性的', chineseExplanation: '表示“实证的”，强调结论来自观察、经验或实验数据，而不只是理论推理。', englishDefinition: 'Based on observation, experience, or experiment rather than only on theory.',
    examples: [{ english: 'The claim should be supported by empirical evidence.', chinese: '这项主张应有实证证据支持。' }], collocations: ['empirical evidence', 'empirical research'], level: 4, cefr: 'C1', categories: ['Academic'],
  },
  {
    id: 'enable', term: 'enable', normalizedTerm: 'enable', partOfSpeech: ['verb'], ipa: '/ɪˈneɪbəl/',
    chineseShort: '使能够；启用', chineseExplanation: '表示“使能够；启用”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make it possible for someone or something to do something.',
    examples: [{ english: 'Two-factor authentication enables stronger account protection.', chinese: '双重验证能提供更强的账号保护。' }], collocations: ['enable users to', 'enable access'], level: 4, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'encounter', term: 'encounter', normalizedTerm: 'encounter', partOfSpeech: ['verb', 'noun'], ipa: '/ɛnˈkaʊntə/',
    chineseShort: '遇到；遭遇', chineseExplanation: '可作名词或动词，表示“遇到；遭遇”；具体含义会根据句子中的词性和语境变化。', englishDefinition: 'To unexpectedly experience or meet someone or something, especially a difficulty.',
    examples: [{ english: 'Users may encounter this error on older browsers.', chinese: '用户在旧版浏览器上可能会遇到这个错误。' }], collocations: ['encounter a problem', 'first encounter'], level: 4, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'ethical', term: 'ethical', normalizedTerm: 'ethical', partOfSpeech: ['adjective'], ipa: '/ˈɛθɪkəl/',
    chineseShort: '道德的；符合伦理的', chineseExplanation: '表示“道德的；符合伦理的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Relating to principles of right and wrong behaviour.',
    examples: [{ english: 'Researchers must follow ethical guidelines.', chinese: '研究人员必须遵守伦理准则。' }], collocations: ['ethical issue', 'ethical standards'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'facilitate', term: 'facilitate', normalizedTerm: 'facilitate', partOfSpeech: ['verb'], ipa: '/fəˈsɪlɪˌteɪt/',
    chineseShort: '促进；使便利', chineseExplanation: '表示“促进；使便利”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make an action or process easier or more likely to happen.',
    examples: [{ english: 'The new tool facilitates collaboration between teams.', chinese: '新工具促进了团队之间的合作。' }], collocations: ['facilitate communication', 'facilitate learning'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'feasible', term: 'feasible', normalizedTerm: 'feasible', partOfSpeech: ['adjective'], ipa: '/ˈfiːzəbəl/',
    chineseShort: '可行的', chineseExplanation: '表示“可行的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Possible and practical to do successfully.',
    examples: [{ english: 'The team is checking whether the plan is financially feasible.', chinese: '团队正在确认这个计划在财务上是否可行。' }], collocations: ['feasible solution', 'technically feasible'], synonyms: ['practical'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'framework', term: 'framework', normalizedTerm: 'framework', partOfSpeech: ['noun'], ipa: '/ˈfreɪmwɜːk/',
    chineseShort: '框架；体系', chineseExplanation: '表示“框架；体系”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A basic structure of rules, ideas, or parts used to organize or build something.',
    examples: [{ english: 'The policy provides a framework for handling user data.', chinese: '这项政策为处理用户数据提供了框架。' }], collocations: ['legal framework', 'conceptual framework'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'infer', term: 'infer', normalizedTerm: 'infer', partOfSpeech: ['verb'], ipa: '/ɪnˈfɜː/',
    chineseShort: '推断；推论', chineseExplanation: '表示“推断”，指根据证据或线索得出没有被直接说明的结论。', englishDefinition: 'To reach a conclusion from evidence rather than from a direct statement.',
    examples: [{ english: 'We can infer from the data that demand is increasing.', chinese: '我们可以从数据推断需求正在增加。' }], collocations: ['infer from', 'reasonably infer'], synonyms: ['deduce'], level: 4, cefr: 'C1', categories: ['Academic'],
  },
  {
    id: 'integrate', term: 'integrate', normalizedTerm: 'integrate', partOfSpeech: ['verb'], ipa: '/ˈɪntɪˌɡreɪt/',
    chineseShort: '整合；使一体化', chineseExplanation: '表示“整合；使一体化”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To combine parts so that they work together as a whole.',
    examples: [{ english: 'The app integrates payment and booking features.', chinese: '这个应用整合了付款和预订功能。' }], collocations: ['integrate with', 'fully integrate'], synonyms: ['combine'], level: 4, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'interpret', term: 'interpret', normalizedTerm: 'interpret', partOfSpeech: ['verb'], ipa: '/ɪnˈtɜːprɪt/',
    chineseShort: '解释；理解；口译', chineseExplanation: '表示“解释；理解；口译”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To explain the meaning of something or understand it in a particular way.',
    examples: [{ english: 'Different readers may interpret the results differently.', chinese: '不同读者可能会以不同方式解读结果。' }], collocations: ['interpret data', 'interpret as'], level: 4, cefr: 'B2', categories: ['Academic', 'School'],
  },
  {
    id: 'justify', term: 'justify', normalizedTerm: 'justify', partOfSpeech: ['verb'], ipa: '/ˈdʒʌstɪˌfaɪ/',
    chineseShort: '证明…合理；为…辩护', chineseExplanation: '表示“证明…合理；为…辩护”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To give good reasons showing that an action, decision, or belief is reasonable.',
    examples: [{ english: 'The expected savings justify the initial cost.', chinese: '预期节省的费用足以证明初期成本是合理的。' }], collocations: ['justify a decision', 'justify doing'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'manipulate', term: 'manipulate', normalizedTerm: 'manipulate', partOfSpeech: ['verb'], ipa: '/məˈnɪpjʊˌleɪt/',
    chineseShort: '操纵；操作', chineseExplanation: '表示“操纵；操作”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To control someone or something, sometimes unfairly, or to handle data or objects skilfully.',
    examples: [{ english: 'The program allows users to manipulate images directly in the browser.', chinese: '这个程序允许用户直接在浏览器中处理图像。' }], collocations: ['manipulate data', 'manipulate information'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'objective', term: 'objective', normalizedTerm: 'objective', partOfSpeech: ['noun', 'adjective'], ipa: '/ɒbˈdʒɛktɪv/',
    chineseShort: '目标；客观的', chineseExplanation: '可表示“目标”，也可表示“客观的”。作形容词时强调基于事实，而不是个人感受。', englishDefinition: 'A goal to be achieved; based on facts rather than personal feelings.',
    examples: [{ english: 'Our main objective is to reduce loading time.', chinese: '我们的主要目标是缩短加载时间。' }], collocations: ['primary objective', 'objective evidence'], level: 4, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'perceive', term: 'perceive', normalizedTerm: 'perceive', partOfSpeech: ['verb'], ipa: '/pəˈsiːv/',
    chineseShort: '察觉；认为', chineseExplanation: '表示“察觉；认为”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To notice something through the senses or to understand it in a particular way.',
    examples: [{ english: 'Customers may perceive the new design as easier to use.', chinese: '顾客可能会认为新设计更容易使用。' }], collocations: ['perceive as', 'commonly perceived'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'perspective', term: 'perspective', normalizedTerm: 'perspective', partOfSpeech: ['noun'], ipa: '/pəˈspɛktɪv/',
    chineseShort: '观点；角度', chineseExplanation: '表示“观点；角度”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A particular way of thinking about or viewing a situation.',
    examples: [{ english: 'Try to consider the issue from the user\'s perspective.', chinese: '试着从用户的角度考虑这个问题。' }], collocations: ['different perspective', 'from a perspective'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'precise', term: 'precise', normalizedTerm: 'precise', partOfSpeech: ['adjective'], ipa: '/prɪˈsaɪs/',
    chineseShort: '精确的；准确的', chineseExplanation: '表示“精确的；准确的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Exact and accurate in detail.',
    examples: [{ english: 'Please provide the precise time of the error.', chinese: '请提供错误发生的准确时间。' }], collocations: ['precise measurement', 'precise location'], synonyms: ['exact'], level: 4, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'preliminary', term: 'preliminary', normalizedTerm: 'preliminary', partOfSpeech: ['adjective', 'noun'], ipa: '/prɪˈlɪmɪnəri/',
    chineseShort: '初步的；预备步骤', chineseExplanation: '可作形容词或名词，表示“初步的；预备步骤”；具体含义需根据句子结构判断。', englishDefinition: 'Coming before a more complete or final stage; an action or event that prepares for something else.',
    examples: [{ english: 'Preliminary results suggest that the update is stable.', chinese: '初步结果显示这次更新是稳定的。' }], collocations: ['preliminary results', 'preliminary analysis'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'prohibit', term: 'prohibit', normalizedTerm: 'prohibit', partOfSpeech: ['verb'], ipa: '/prəˈhɪbɪt/',
    chineseShort: '禁止', chineseExplanation: '表示“禁止”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To officially prevent an action by law, rule, or authority.',
    examples: [{ english: 'The policy prohibits sharing passwords with other users.', chinese: '这项政策禁止与其他用户共享密码。' }], collocations: ['strictly prohibit', 'prohibit someone from'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'promote', term: 'promote', normalizedTerm: 'promote', partOfSpeech: ['verb'], ipa: '/prəˈməʊt/',
    chineseShort: '促进；推广；晋升', chineseExplanation: '表示“促进；推广；晋升”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To encourage the development or use of something, advertise it, or raise someone to a higher position.',
    examples: [{ english: 'The campaign promotes safer online behaviour.', chinese: '这项活动推广更安全的上网行为。' }], collocations: ['promote awareness', 'promote a product'], level: 4, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'rational', term: 'rational', normalizedTerm: 'rational', partOfSpeech: ['adjective'], ipa: '/ˈræʃənəl/',
    chineseShort: '理性的；合理的', chineseExplanation: '表示“理性的；合理的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Based on clear thought, facts, and logical reasons rather than emotion.',
    examples: [{ english: 'We need a rational basis for the decision.', chinese: '我们的决定需要有合理依据。' }], collocations: ['rational decision', 'rational explanation'], synonyms: ['logical'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'reinforce', term: 'reinforce', normalizedTerm: 'reinforce', partOfSpeech: ['verb'], ipa: '/ˌriːɪnˈfɔːs/',
    chineseShort: '加强；强化', chineseExplanation: '表示“加强；强化”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make an idea, feeling, structure, or behaviour stronger.',
    examples: [{ english: 'Regular practice reinforces what students learn in class.', chinese: '规律练习能巩固学生在课堂上学到的内容。' }], collocations: ['reinforce learning', 'reinforce a message'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'relevant', term: 'relevant', normalizedTerm: 'relevant', partOfSpeech: ['adjective'], ipa: '/ˈrɛlɪvənt/',
    chineseShort: '相关的；切题的', chineseExplanation: '表示“相关的；切题的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Directly connected with the subject or situation being considered.',
    examples: [{ english: 'Only include information that is relevant to the question.', chinese: '只包含与问题相关的信息。' }], collocations: ['relevant information', 'highly relevant'], antonyms: ['irrelevant'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'robust', term: 'robust', normalizedTerm: 'robust', partOfSpeech: ['adjective'], ipa: '/rəʊˈbʌst/',
    chineseShort: '强健的；稳健的', chineseExplanation: '表示“强健的；稳健的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Strong and able to continue working well under difficult conditions.',
    examples: [{ english: 'The application needs a robust error-handling system.', chinese: '这个应用需要一个稳健的错误处理系统。' }], collocations: ['robust system', 'robust evidence'], synonyms: ['strong'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'scope', term: 'scope', normalizedTerm: 'scope', partOfSpeech: ['noun'], ipa: '/skəʊp/',
    chineseShort: '范围；领域', chineseExplanation: '表示“范围；领域”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The range of subjects, activities, or work included in something.',
    examples: [{ english: 'Payment processing is outside the scope of this project.', chinese: '付款处理不在这个项目的范围内。' }], collocations: ['project scope', 'within the scope'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'sector', term: 'sector', normalizedTerm: 'sector', partOfSpeech: ['noun'], ipa: '/ˈsɛktə/',
    chineseShort: '行业；部门', chineseExplanation: '表示“行业；部门”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A distinct part of an economy, society, or area of activity.',
    examples: [{ english: 'Demand is growing rapidly in the technology sector.', chinese: '科技行业的需求正在快速增长。' }], collocations: ['public sector', 'technology sector'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'specify', term: 'specify', normalizedTerm: 'specify', partOfSpeech: ['verb'], ipa: '/ˈspɛsɪˌfaɪ/',
    chineseShort: '明确说明；指定', chineseExplanation: '表示“明确说明；指定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To state something clearly and exactly.',
    examples: [{ english: 'Please specify which browser you are using.', chinese: '请明确说明你正在使用哪一种浏览器。' }], collocations: ['specify requirements', 'specify that'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'stable', term: 'stable', normalizedTerm: 'stable', partOfSpeech: ['adjective'], ipa: '/ˈsteɪbəl/',
    chineseShort: '稳定的；稳固的', chineseExplanation: '表示“稳定的；稳固的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not likely to change suddenly, fail, or move unexpectedly.',
    examples: [{ english: 'The latest version appears stable in testing.', chinese: '最新版本在测试中看起来很稳定。' }], collocations: ['stable connection', 'remain stable'], synonyms: ['steady'], antonyms: ['unstable'], level: 4, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'substantial', term: 'substantial', normalizedTerm: 'substantial', partOfSpeech: ['adjective'], ipa: '/səbˈstænʃəl/',
    chineseShort: '大量的；重大的', chineseExplanation: '表示“大量的；重大的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Large in amount, value, importance, or effect.',
    examples: [{ english: 'The update produced a substantial improvement in performance.', chinese: '这次更新大幅提升了性能。' }], collocations: ['substantial amount', 'substantial improvement'], synonyms: ['considerable'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'transform', term: 'transform', normalizedTerm: 'transform', partOfSpeech: ['verb'], ipa: '/trænsˈfɔːm/',
    chineseShort: '彻底改变；转变', chineseExplanation: '表示“彻底改变；转变”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To change something greatly in form, appearance, or character.',
    examples: [{ english: 'Digital tools have transformed how many people work.', chinese: '数字工具已经改变了许多人的工作方式。' }], collocations: ['transform into', 'digital transformation'], synonyms: ['change'], level: 4, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'transparent', term: 'transparent', normalizedTerm: 'transparent', partOfSpeech: ['adjective'], ipa: '/trænˈspærənt/',
    chineseShort: '透明的；公开清楚的', chineseExplanation: '表示“透明的；公开清楚的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Easy to see through, or open and clear about actions, reasons, or information.',
    examples: [{ english: 'The company should be transparent about how it uses customer data.', chinese: '公司应该清楚公开地说明如何使用客户数据。' }], collocations: ['transparent process', 'fully transparent'], antonyms: ['opaque'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'trend', term: 'trend', normalizedTerm: 'trend', partOfSpeech: ['noun'], ipa: '/trɛnd/',
    chineseShort: '趋势；倾向', chineseExplanation: '表示“趋势；倾向”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A general direction in which a situation is changing or developing.',
    examples: [{ english: 'The data shows a steady upward trend.', chinese: '数据显示出稳定的上升趋势。' }], collocations: ['market trend', 'upward trend'], level: 4, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'validate', term: 'validate', normalizedTerm: 'validate', partOfSpeech: ['verb'], ipa: '/ˈvælɪˌdeɪt/',
    chineseShort: '验证；确认有效', chineseExplanation: '表示“验证、确认有效”，常用于检查数据、方法、结果或输入是否符合要求或正确。', englishDefinition: 'To check or prove that something is accurate, acceptable, or legitimate.',
    examples: [{ english: 'The server validates the data before saving it.', chinese: '服务器在保存前验证数据。' }], collocations: ['validate input', 'validate results'], synonyms: ['verify'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'variable', term: 'variable', normalizedTerm: 'variable', partOfSpeech: ['noun', 'adjective'], ipa: '/ˈveəriəbəl/',
    chineseShort: '变量；可变的', chineseExplanation: '可作形容词或名词，表示“变量；可变的”；具体含义需根据句子结构判断。', englishDefinition: 'A quantity or factor that can change; likely to change rather than stay fixed.',
    examples: [{ english: 'Price is an important variable in the model.', chinese: '价格是这个模型中的一个重要变量。' }], collocations: ['dependent variable', 'variable cost'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'widespread', term: 'widespread', normalizedTerm: 'widespread', partOfSpeech: ['adjective'], ipa: '/ˈwaɪdspred/',
    chineseShort: '广泛的；普遍的', chineseExplanation: '表示“广泛的；普遍的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Existing or happening over a large area or among many people.',
    examples: [{ english: 'The new payment method gained widespread acceptance.', chinese: '这种新的付款方式获得了广泛接受。' }], collocations: ['widespread use', 'widespread concern'], synonyms: ['common'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'regulate', term: 'regulate', normalizedTerm: 'regulate', partOfSpeech: ['verb'], ipa: '/ˈrɛɡjuːˌleɪt/',
    chineseShort: '监管；调节', chineseExplanation: '表示“监管；调节”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To control an activity through rules or laws, or to control how a system operates.',
    examples: [{ english: 'The law regulates how companies store personal data.', chinese: '法律规范公司如何储存个人数据。' }], collocations: ['strictly regulate', 'regulate an industry'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'compliance', term: 'compliance', normalizedTerm: 'compliance', partOfSpeech: ['noun'], ipa: '/kəmˈplaɪəns/',
    chineseShort: '合规；遵守', chineseExplanation: '表示“合规；遵守”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'The act of obeying a law, rule, standard, or request.',
    examples: [{ english: 'The company reviewed its privacy practices for legal compliance.', chinese: '公司审查了隐私做法以确保符合法律要求。' }], collocations: ['legal compliance', 'compliance with'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'articulate', term: 'articulate', normalizedTerm: 'articulate', partOfSpeech: ['verb'], ipa: '/ɑːˈtɪkjuleɪt/',
    chineseShort: '清楚表达', chineseExplanation: '表示“清楚表达”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To express an idea, thought, or feeling clearly and effectively.',
    examples: [{ english: 'She articulated the main concern with great precision.', chinese: '她非常准确地表达了主要担忧。' }], collocations: ['articulate an idea', 'articulate clearly'], synonyms: ['express'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'ascertain', term: 'ascertain', normalizedTerm: 'ascertain', partOfSpeech: ['verb'], ipa: '/ˌæsəˈteɪn/',
    chineseShort: '查明；确定', chineseExplanation: '表示“查明；确定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To discover something with certainty by examining evidence or information.',
    examples: [{ english: 'We need to ascertain the exact cause of the failure.', chinese: '我们需要查明故障的确切原因。' }], collocations: ['ascertain whether', 'ascertain the cause'], synonyms: ['determine'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'bolster', term: 'bolster', normalizedTerm: 'bolster', partOfSpeech: ['verb'], ipa: '/ˈbəʊlstə/',
    chineseShort: '加强；支持', chineseExplanation: '表示“加强；支持”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make something stronger or give it additional support.',
    examples: [{ english: 'The new evidence bolstered their argument.', chinese: '新证据加强了他们的论点。' }], collocations: ['bolster confidence', 'bolster an argument'], synonyms: ['strengthen'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'circumvent', term: 'circumvent', normalizedTerm: 'circumvent', partOfSpeech: ['verb'], ipa: '/ˌsɜːkəmˈvent/',
    chineseShort: '规避；绕过', chineseExplanation: '表示“规避、绕过”，常指绕开规则、限制或安全措施，语气通常比 simply avoid 更正式。', englishDefinition: 'To find a way around a rule, restriction, or difficulty, often in a way not intended by its designers.',
    examples: [{ english: 'The policy prevents users from circumventing security controls.', chinese: '这项政策防止用户绕过安全控制。' }], collocations: ['circumvent restrictions', 'circumvent a rule'], level: 5, cefr: 'C2', categories: ['Technology', 'Business'],
  },
  {
    id: 'concise', term: 'concise', normalizedTerm: 'concise', partOfSpeech: ['adjective'], ipa: '/kənˈsaɪs/',
    chineseShort: '简明的；简洁的', chineseExplanation: '表示“简明的；简洁的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Giving necessary information clearly in relatively few words.',
    examples: [{ english: 'Keep the summary concise and focused.', chinese: '请让摘要保持简洁并紧扣重点。' }], collocations: ['concise explanation', 'clear and concise'], synonyms: ['brief'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'conclusive', term: 'conclusive', normalizedTerm: 'conclusive', partOfSpeech: ['adjective'], ipa: '/kənˈkluːsɪv/',
    chineseShort: '决定性的；确凿的', chineseExplanation: '表示“决定性的；确凿的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Strong enough to settle a question or prove something beyond reasonable doubt.',
    examples: [{ english: 'The investigation found no conclusive evidence of fraud.', chinese: '调查没有发现欺诈的确凿证据。' }], collocations: ['conclusive evidence', 'conclusive proof'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'corroborate', term: 'corroborate', normalizedTerm: 'corroborate', partOfSpeech: ['verb'], ipa: '/kəˈrɒbəˌreɪt/',
    chineseShort: '证实；佐证', chineseExplanation: '表示“证实、佐证”，指用额外且独立的证据支持已有的说法、证词或结论。', englishDefinition: 'To provide additional evidence that supports a statement, theory, or account.',
    examples: [{ english: 'Independent records corroborated the witness\'s account.', chinese: '独立记录佐证了证人的说法。' }], collocations: ['corroborate evidence', 'corroborate a claim'], synonyms: ['confirm'], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'detrimental', term: 'detrimental', normalizedTerm: 'detrimental', partOfSpeech: ['adjective'], ipa: '/ˌdɛtrɪˈmɛntəl/',
    chineseShort: '有害的；不利的', chineseExplanation: '表示“有害的；不利的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Causing harm or damage.',
    examples: [{ english: 'Excessive complexity can be detrimental to usability.', chinese: '过度复杂会对易用性产生不利影响。' }], collocations: ['detrimental effect', 'detrimental to'], synonyms: ['harmful'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'discrepancy', term: 'discrepancy', normalizedTerm: 'discrepancy', partOfSpeech: ['noun'], ipa: '/dɪˈskrɛpənsi/',
    chineseShort: '差异；不一致', chineseExplanation: '表示“差异、不一致”，通常用于本应一致的两组数字、记录或说法之间出现不同。', englishDefinition: 'A difference between two things that should be the same or consistent.',
    examples: [{ english: 'We found a discrepancy between the invoice and the payment record.', chinese: '我们发现发票和付款记录之间存在不一致。' }], collocations: ['significant discrepancy', 'discrepancy between'], level: 5, cefr: 'C2', categories: ['Business', 'Academic'],
  },
  {
    id: 'exacerbate', term: 'exacerbate', normalizedTerm: 'exacerbate', partOfSpeech: ['verb'], ipa: '/ɛɡˈzæsəˌbeɪt/',
    chineseShort: '使恶化；加剧', chineseExplanation: '表示“使恶化、加剧”，只能用于让问题或负面情况变得更严重。', englishDefinition: 'To make a problem, condition, or negative situation worse.',
    examples: [{ english: 'Delaying the update could exacerbate the security problem.', chinese: '延迟更新可能会加剧安全问题。' }], collocations: ['exacerbate a problem', 'exacerbate tensions'], synonyms: ['worsen'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'explicit', term: 'explicit', normalizedTerm: 'explicit', partOfSpeech: ['adjective'], ipa: '/ɛkˈsplɪsɪt/',
    chineseShort: '明确的；清楚表达的', chineseExplanation: '表示“明确的；清楚表达的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Stated clearly and directly, leaving no room for doubt or confusion.',
    examples: [{ english: 'The consent form must contain explicit information about data use.', chinese: '同意书必须明确说明数据用途。' }], collocations: ['explicit consent', 'explicit instruction'], synonyms: ['clear'], antonyms: ['implicit'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'formulate', term: 'formulate', normalizedTerm: 'formulate', partOfSpeech: ['verb'], ipa: '/ˈfɔːmjʊˌleɪt/',
    chineseShort: '制定；构想', chineseExplanation: '表示“制定；构想”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To develop or express a plan, idea, rule, or theory carefully and systematically.',
    examples: [{ english: 'The team formulated a new strategy based on the research.', chinese: '团队根据研究制定了新策略。' }], collocations: ['formulate a plan', 'formulate a hypothesis'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'inherent', term: 'inherent', normalizedTerm: 'inherent', partOfSpeech: ['adjective'], ipa: '/ɪnˈhiərənt/',
    chineseShort: '内在的；固有的', chineseExplanation: '表示“内在的；固有的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Existing as a natural or essential part of something.',
    examples: [{ english: 'Every prediction contains some inherent uncertainty.', chinese: '每项预测都带有一定的内在不确定性。' }], collocations: ['inherent risk', 'inherent limitation'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'intricate', term: 'intricate', normalizedTerm: 'intricate', partOfSpeech: ['adjective'], ipa: '/ˈɪntrɪkət/',
    chineseShort: '错综复杂的；精细的', chineseExplanation: '表示“错综复杂的；精细的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Containing many small or closely connected parts and therefore difficult to understand or make.',
    examples: [{ english: 'The system has an intricate network of dependencies.', chinese: '这个系统有一个错综复杂的依赖关系网络。' }], collocations: ['intricate detail', 'intricate system'], synonyms: ['complex'], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'invoke', term: 'invoke', normalizedTerm: 'invoke', partOfSpeech: ['verb'], ipa: '/ɪnˈvəʊk/',
    chineseShort: '援引；调用', chineseExplanation: '表示“援引；调用”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To refer to a rule, authority, or principle, or to cause a function or process to run.',
    examples: [{ english: 'The application invokes the backup routine when an error occurs.', chinese: '应用在发生错误时会调用备份程序。' }], collocations: ['invoke a rule', 'invoke a function'], level: 5, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'legitimate', term: 'legitimate', normalizedTerm: 'legitimate', partOfSpeech: ['adjective'], ipa: '/lɪˈdʒɪtɪmət/',
    chineseShort: '合法的；正当的', chineseExplanation: '表示“合法的；正当的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Allowed by law or rules, or reasonable and acceptable in the circumstances.',
    examples: [{ english: 'Customers have a legitimate concern about how their data is stored.', chinese: '顾客有理由关注他们的数据如何被储存。' }], collocations: ['legitimate concern', 'legitimate business'], synonyms: ['valid'], level: 5, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'nuanced', term: 'nuanced', normalizedTerm: 'nuanced', partOfSpeech: ['adjective'], ipa: '/ˈnjuːɑːnst/',
    chineseShort: '细致入微的；有细微差别的', chineseExplanation: '表示“细致入微的、有细微差别的”，强调不能只用简单的“对/错”或单一角度理解。', englishDefinition: 'Showing or requiring an understanding of small but important differences.',
    examples: [{ english: 'The issue requires a more nuanced analysis.', chinese: '这个问题需要更细致入微的分析。' }], collocations: ['nuanced view', 'nuanced understanding'], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'obsolete', term: 'obsolete', normalizedTerm: 'obsolete', partOfSpeech: ['adjective'], ipa: '/ˈɒbsəˌliːt/',
    chineseShort: '过时的；淘汰的', chineseExplanation: '表示“过时的；淘汰的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'No longer used because something newer or more effective has replaced it.',
    examples: [{ english: 'The old encryption method is now obsolete.', chinese: '旧的加密方法现在已经过时。' }], collocations: ['become obsolete', 'obsolete technology'], synonyms: ['outdated'], antonyms: ['current'], level: 5, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'paradox', term: 'paradox', normalizedTerm: 'paradox', partOfSpeech: ['noun'], ipa: '/ˈpærəˌdɒks/',
    chineseShort: '悖论；看似矛盾的事', chineseExplanation: '表示“悖论；看似矛盾的事”，用于指人、事物、概念、情况或结果等名词性内容，具体含义可结合语境理解。', englishDefinition: 'A situation or statement that appears contradictory but may contain a truth.',
    examples: [{ english: 'The productivity paradox is that working longer does not always produce more.', chinese: '生产力悖论在于，工作更久并不总能产生更多成果。' }], collocations: ['apparent paradox', 'paradox of'], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plausible', term: 'plausible', normalizedTerm: 'plausible', partOfSpeech: ['adjective'], ipa: '/ˈplɔːzəbəl/',
    chineseShort: '貌似合理的；可信的', chineseExplanation: '表示“貌似合理的；可信的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Seeming reasonable or likely to be true based on available information.',
    examples: [{ english: 'The explanation is plausible but has not yet been verified.', chinese: '这个解释看起来合理，但尚未得到验证。' }], collocations: ['plausible explanation', 'entirely plausible'], synonyms: ['believable'], antonyms: ['implausible'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'predominant', term: 'predominant', normalizedTerm: 'predominant', partOfSpeech: ['adjective'], ipa: '/prɪˈdɒmɪnənt/',
    chineseShort: '主要的；占主导的', chineseExplanation: '表示“主要的；占主导的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'More common, important, or powerful than other things of the same kind.',
    examples: [{ english: 'Cost was the predominant factor in the final decision.', chinese: '成本是最终决定中的主要因素。' }], collocations: ['predominant role', 'predominant factor'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'profound', term: 'profound', normalizedTerm: 'profound', partOfSpeech: ['adjective'], ipa: '/prəˈfaʊnd/',
    chineseShort: '深刻的；巨大的', chineseExplanation: '表示“深刻的；巨大的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Having a very strong, deep, or far-reaching effect or meaning.',
    examples: [{ english: 'Artificial intelligence may have a profound impact on many industries.', chinese: '人工智能可能会对许多行业产生深远影响。' }], collocations: ['profound impact', 'profound change'], synonyms: ['deep'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'reconcile', term: 'reconcile', normalizedTerm: 'reconcile', partOfSpeech: ['verb'], ipa: '/ˈrɛkənˌsaɪl/',
    chineseShort: '调和；使一致', chineseExplanation: '表示“调和、使一致”，常用于让彼此冲突的观点、数字、需求或关系重新协调起来。', englishDefinition: 'To find a way to make two apparently conflicting ideas, accounts, or needs compatible.',
    examples: [{ english: 'The team must reconcile user convenience with strict security requirements.', chinese: '团队必须在用户便利与严格安全要求之间取得协调。' }], collocations: ['reconcile differences', 'reconcile with'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'redundant', term: 'redundant', normalizedTerm: 'redundant', partOfSpeech: ['adjective'], ipa: '/rɪˈdʌndənt/',
    chineseShort: '多余的；冗余的', chineseExplanation: '表示“多余的；冗余的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not needed because it repeats something or no longer serves a useful purpose.',
    examples: [{ english: 'The update removed several redundant database queries.', chinese: '这次更新移除了几个多余的数据库查询。' }], collocations: ['redundant information', 'redundant system'], synonyms: ['unnecessary'], antonyms: ['necessary'], level: 5, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'resilient', term: 'resilient', normalizedTerm: 'resilient', partOfSpeech: ['adjective'], ipa: '/rɪˈzɪliənt/',
    chineseShort: '有韧性的；恢复力强的', chineseExplanation: '表示“有韧性的；恢复力强的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Able to recover quickly from difficulty, failure, or change.',
    examples: [{ english: 'A resilient system can continue operating after a minor failure.', chinese: '有韧性的系统在轻微故障后仍能继续运行。' }], collocations: ['resilient system', 'highly resilient'], synonyms: ['robust'], level: 5, cefr: 'C1', categories: ['Technology', 'Business'],
  },
  {
    id: 'rigorous', term: 'rigorous', normalizedTerm: 'rigorous', partOfSpeech: ['adjective'], ipa: '/ˈrɪɡərəs/',
    chineseShort: '严谨的；严格的', chineseExplanation: '表示“严谨的；严格的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Extremely thorough, careful, and based on strict standards.',
    examples: [{ english: 'The research went through a rigorous review process.', chinese: '这项研究经过了严格的审查流程。' }], collocations: ['rigorous analysis', 'rigorous testing'], synonyms: ['strict'], level: 5, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'sophisticated', term: 'sophisticated', normalizedTerm: 'sophisticated', partOfSpeech: ['adjective'], ipa: '/səˈfɪstɪˌkeɪtɪd/',
    chineseShort: '复杂先进的；老练的', chineseExplanation: '表示“复杂先进的；老练的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Highly developed, complex, or refined.',
    examples: [{ english: 'The software uses a sophisticated method to detect fraud.', chinese: '该软件使用一种先进复杂的方法来检测欺诈。' }], collocations: ['sophisticated system', 'highly sophisticated'], synonyms: ['advanced'], level: 5, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'sporadic', term: 'sporadic', normalizedTerm: 'sporadic', partOfSpeech: ['adjective'], ipa: '/spəˈrædɪk/',
    chineseShort: '零星的；偶发的', chineseExplanation: '表示“零星的；偶发的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Happening occasionally and irregularly rather than continuously.',
    examples: [{ english: 'The service experienced sporadic outages during the afternoon.', chinese: '该服务下午出现了零星中断。' }], collocations: ['sporadic reports', 'sporadic incidents'], level: 5, cefr: 'C2', categories: ['Technology', 'Business'],
  },
  {
    id: 'stringent', term: 'stringent', normalizedTerm: 'stringent', partOfSpeech: ['adjective'], ipa: '/ˈstrɪndʒənt/',
    chineseShort: '严格的；严厉的', chineseExplanation: '表示“严格的”，常形容规则、标准或要求，而且通常带有要求很高、限制较多的意思。', englishDefinition: 'Very strict and demanding careful compliance.',
    examples: [{ english: 'Financial institutions must meet stringent security requirements.', chinese: '金融机构必须满足严格的安全要求。' }], collocations: ['stringent rules', 'stringent standards'], synonyms: ['strict'], level: 5, cefr: 'C2', categories: ['Business', 'Academic'],
  },
  {
    id: 'subtle', term: 'subtle', normalizedTerm: 'subtle', partOfSpeech: ['adjective'], ipa: '/ˈsʌtəl/',
    chineseShort: '细微的；不易察觉的', chineseExplanation: '表示“细微的；不易察觉的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not obvious and therefore difficult to notice, understand, or describe.',
    examples: [{ english: 'There is a subtle difference between the two expressions.', chinese: '这两个表达之间有细微差别。' }], collocations: ['subtle difference', 'subtle change'], synonyms: ['slight'], antonyms: ['obvious'], level: 5, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'tentative', term: 'tentative', normalizedTerm: 'tentative', partOfSpeech: ['adjective'], ipa: '/ˈtɛntəˌtɪv/',
    chineseShort: '暂定的；试探性的', chineseExplanation: '表示“暂定的；试探性的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Not final or certain and therefore open to change.',
    examples: [{ english: 'We reached a tentative agreement on the project timeline.', chinese: '我们暂时同意了项目时间表的安排。' }], collocations: ['tentative conclusion', 'tentative agreement'], synonyms: ['provisional'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'undermine', term: 'undermine', normalizedTerm: 'undermine', partOfSpeech: ['verb'], ipa: '/ˌʌndəˈmaɪn/',
    chineseShort: '削弱；逐渐损害', chineseExplanation: '表示“削弱；逐渐损害”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make something weaker or less effective, often gradually.',
    examples: [{ english: 'Repeated errors can undermine user trust.', chinese: '反复出现的错误会削弱用户信任。' }], collocations: ['undermine confidence', 'undermine trust'], synonyms: ['weaken'], level: 5, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'unprecedented', term: 'unprecedented', normalizedTerm: 'unprecedented', partOfSpeech: ['adjective'], ipa: '/ʌnˈprɛsɪdəntɪd/',
    chineseShort: '前所未有的', chineseExplanation: '表示“前所未有的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Never having happened or existed before.',
    examples: [{ english: 'The platform experienced unprecedented growth last year.', chinese: '该平台去年经历了前所未有的增长。' }], collocations: ['unprecedented growth', 'unprecedented level'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'viable', term: 'viable', normalizedTerm: 'viable', partOfSpeech: ['adjective'], ipa: '/ˈvaɪəbəl/',
    chineseShort: '可行的；能生存发展的', chineseExplanation: '表示“可行的；能生存发展的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Capable of working successfully or continuing to exist.',
    examples: [{ english: 'The team is looking for a financially viable solution.', chinese: '团队正在寻找一个财务上可行的解决方案。' }], collocations: ['viable option', 'commercially viable'], synonyms: ['workable'], antonyms: ['unviable'], level: 5, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'volatile', term: 'volatile', normalizedTerm: 'volatile', partOfSpeech: ['adjective'], ipa: '/ˈvɒləˌtaɪl/',
    chineseShort: '不稳定的；易波动的', chineseExplanation: '表示“不稳定的；易波动的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Likely to change suddenly and unpredictably, especially in price, mood, or conditions.',
    examples: [{ english: 'The market remained volatile throughout the week.', chinese: '市场整周都保持剧烈波动。' }], collocations: ['volatile market', 'highly volatile'], synonyms: ['unstable'], antonyms: ['stable'], level: 5, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'arbitrary', term: 'arbitrary', normalizedTerm: 'arbitrary', partOfSpeech: ['adjective'], ipa: '/ˈɑːbɪtrəri/',
    chineseShort: '武断的；任意的', chineseExplanation: '表示“武断的；任意的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Based on personal choice or chance rather than a clear reason, rule, or system.',
    examples: [{ english: 'The limit should be based on evidence rather than an arbitrary number.', chinese: '这个限制应基于证据，而不是任意设定的数字。' }], collocations: ['arbitrary decision', 'arbitrary rule'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'complacent', term: 'complacent', normalizedTerm: 'complacent', partOfSpeech: ['adjective'], ipa: '/kəmˈpleɪsənt/',
    chineseShort: '自满的；安于现状的', chineseExplanation: '表示“自满的；安于现状的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Too satisfied with a situation to notice or prepare for possible problems.',
    examples: [{ english: 'Companies should not become complacent about cybersecurity.', chinese: '公司不应该对网络安全产生自满情绪。' }], collocations: ['become complacent', 'complacent attitude'], level: 5, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'contentious', term: 'contentious', normalizedTerm: 'contentious', partOfSpeech: ['adjective'], ipa: '/kənˈtɛnʃəs/',
    chineseShort: '有争议的；容易引发争论的', chineseExplanation: '表示“有争议的；容易引发争论的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Likely to cause disagreement or argument.',
    examples: [{ english: 'Data ownership remains a contentious issue.', chinese: '数据所有权仍然是一个有争议的问题。' }], collocations: ['contentious issue', 'highly contentious'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'delineate', term: 'delineate', normalizedTerm: 'delineate', partOfSpeech: ['verb'], ipa: '/dɪˈlɪniːˌeɪt/',
    chineseShort: '清楚说明；划定', chineseExplanation: '表示“清楚说明；划定”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To describe or mark the exact limits, features, or boundaries of something.',
    examples: [{ english: 'The contract clearly delineates each party\'s responsibilities.', chinese: '合同清楚列明了各方的责任范围。' }], collocations: ['delineate responsibilities', 'clearly delineate'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'expedite', term: 'expedite', normalizedTerm: 'expedite', partOfSpeech: ['verb'], ipa: '/ˈɛkspəˌdaɪt/',
    chineseShort: '加快；促进', chineseExplanation: '表示“加快；促进”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To make a process or action happen more quickly.',
    examples: [{ english: 'Automating the checks can expedite the approval process.', chinese: '自动化检查可以加快审批流程。' }], collocations: ['expedite delivery', 'expedite a process'], level: 5, cefr: 'C2', categories: ['Business', 'Technology'],
  },
  {
    id: 'exhaustive', term: 'exhaustive', normalizedTerm: 'exhaustive', partOfSpeech: ['adjective'], ipa: '/ɛɡˈzɔːstɪv/',
    chineseShort: '详尽的；全面无遗漏的', chineseExplanation: '表示“详尽的；全面无遗漏的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Including all possible details or examples and leaving nothing important out.',
    examples: [{ english: 'The report contains an exhaustive review of the available evidence.', chinese: '这份报告对现有证据进行了详尽审查。' }], collocations: ['exhaustive list', 'exhaustive review'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'futile', term: 'futile', normalizedTerm: 'futile', partOfSpeech: ['adjective'], ipa: '/ˈfjuːtaɪl/',
    chineseShort: '徒劳的；无效的', chineseExplanation: '表示“徒劳的；无效的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Unable to produce a useful result and therefore pointless.',
    examples: [{ english: 'Without the correct password, further attempts were futile.', chinese: '没有正确密码，再继续尝试也是徒劳的。' }], collocations: ['futile attempt', 'prove futile'], level: 5, cefr: 'C2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'impartial', term: 'impartial', normalizedTerm: 'impartial', partOfSpeech: ['adjective'], ipa: '/ɪmˈpɑːʃəl/',
    chineseShort: '公正的；不偏不倚的', chineseExplanation: '表示“公正的；不偏不倚的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Treating all sides fairly and not allowing personal opinions to influence judgment.',
    examples: [{ english: 'An impartial reviewer should examine the complaint.', chinese: '应由一名公正的审查人员处理这项投诉。' }], collocations: ['impartial assessment', 'remain impartial'], synonyms: ['unbiased'], antonyms: ['biased'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'indispensable', term: 'indispensable', normalizedTerm: 'indispensable', partOfSpeech: ['adjective'], ipa: '/ˌɪndɪˈspɛnsəbəl/',
    chineseShort: '不可或缺的', chineseExplanation: '表示“不可或缺的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'So important or useful that it would be very difficult to manage without it.',
    examples: [{ english: 'Reliable backups are indispensable for critical systems.', chinese: '可靠的备份对于关键系统不可或缺。' }], collocations: ['indispensable tool', 'indispensable to'], level: 5, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'meticulous', term: 'meticulous', normalizedTerm: 'meticulous', partOfSpeech: ['adjective'], ipa: '/məˈtɪkjələs/',
    chineseShort: '一丝不苟的；细致的', chineseExplanation: '表示“一丝不苟的；细致的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Extremely careful and precise about small details.',
    examples: [{ english: 'She kept meticulous records of every transaction.', chinese: '她细致地记录了每一笔交易。' }], collocations: ['meticulous attention', 'meticulous records'], synonyms: ['careful'], level: 5, cefr: 'C2', categories: ['Business', 'Academic'],
  },
  {
    id: 'negligible', term: 'negligible', normalizedTerm: 'negligible', partOfSpeech: ['adjective'], ipa: '/ˈnɛɡlɪdʒəbəl/',
    chineseShort: '微不足道的；可忽略的', chineseExplanation: '表示“微不足道的；可忽略的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'So small or unimportant that it has little practical effect.',
    examples: [{ english: 'The performance difference between the two versions was negligible.', chinese: '两个版本之间的性能差异微乎其微。' }], collocations: ['negligible effect', 'negligible amount'], synonyms: ['insignificant'], antonyms: ['significant'], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'pervasive', term: 'pervasive', normalizedTerm: 'pervasive', partOfSpeech: ['adjective'], ipa: '/pəˈveɪsɪv/',
    chineseShort: '普遍存在的；遍布的', chineseExplanation: '表示“普遍存在的；遍布的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Spreading widely throughout an area, group, or system.',
    examples: [{ english: 'Mobile technology has become pervasive in everyday life.', chinese: '移动技术已经广泛渗透到日常生活中。' }], collocations: ['pervasive influence', 'pervasive problem'], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'prevalent', term: 'prevalent', normalizedTerm: 'prevalent', partOfSpeech: ['adjective'], ipa: '/ˈprɛvələnt/',
    chineseShort: '盛行的；普遍的', chineseExplanation: '表示“盛行的；普遍的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Commonly existing or occurring in a particular place, group, or period.',
    examples: [{ english: 'Online scams are increasingly prevalent.', chinese: '网络诈骗越来越普遍。' }], collocations: ['highly prevalent', 'prevalent among'], synonyms: ['widespread'], level: 5, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'rectify', term: 'rectify', normalizedTerm: 'rectify', partOfSpeech: ['verb'], ipa: '/ˈrɛktɪˌfaɪ/',
    chineseShort: '纠正；修正', chineseExplanation: '表示“纠正；修正”，用于描述动作、行为、变化或过程，具体用法可结合常见搭配和例句理解。', englishDefinition: 'To correct something that is wrong or unsatisfactory.',
    examples: [{ english: 'The developer released a patch to rectify the error.', chinese: '开发者发布补丁来修正这个错误。' }], collocations: ['rectify a mistake', 'rectify the situation'], synonyms: ['correct'], level: 5, cefr: 'C2', categories: ['Business', 'Technology'],
  },
  {
    id: 'synonymous', term: 'synonymous', normalizedTerm: 'synonymous', partOfSpeech: ['adjective'], ipa: '/sɪˈnɒnɪməs/',
    chineseShort: '同义的；等同于…的', chineseExplanation: '表示“同义的；等同于…的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Having the same or nearly the same meaning, or being so closely associated that one suggests the other.',
    examples: [{ english: 'For many users, the brand became synonymous with reliability.', chinese: '对许多用户来说，这个品牌几乎成了可靠性的代名词。' }], collocations: ['synonymous with', 'almost synonymous'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'tangible', term: 'tangible', normalizedTerm: 'tangible', partOfSpeech: ['adjective'], ipa: '/ˈtændʒəbəl/',
    chineseShort: '有形的；明确可感的', chineseExplanation: '表示“有形的；明确可感的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Real and noticeable rather than abstract or imaginary.',
    examples: [{ english: 'The new process produced tangible improvements in response time.', chinese: '新流程在响应时间方面带来了明显改善。' }], collocations: ['tangible benefit', 'tangible evidence'], synonyms: ['concrete'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'unequivocal', term: 'unequivocal', normalizedTerm: 'unequivocal', partOfSpeech: ['adjective'], ipa: '/ʌnɪˈkwɪvəkəl/',
    chineseShort: '明确无误的；毫不含糊的', chineseExplanation: '表示“明确无误的、毫不含糊的”，强调没有合理的第二种解释。', englishDefinition: 'Completely clear and leaving no possibility of misunderstanding.',
    examples: [{ english: 'The policy contains an unequivocal prohibition on sharing access credentials.', chinese: '这项政策明确禁止共享访问凭证。' }], collocations: ['unequivocal evidence', 'unequivocal statement'], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'wary', term: 'wary', normalizedTerm: 'wary', partOfSpeech: ['adjective'], ipa: '/ˈweəri/',
    chineseShort: '谨慎的；警惕的', chineseExplanation: '表示“谨慎的；警惕的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Careful because you are aware that something may be dangerous or unreliable.',
    examples: [{ english: 'Users should be wary of unexpected links in emails.', chinese: '用户应警惕电子邮件中的意外链接。' }], collocations: ['wary of', 'remain wary'], synonyms: ['cautious'], antonyms: ['trusting'], level: 5, cefr: 'C1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'intrinsic', term: 'intrinsic', normalizedTerm: 'intrinsic', partOfSpeech: ['adjective'], ipa: '/ɪnˈtrɪnsɪk/',
    chineseShort: '内在的；本质的', chineseExplanation: '表示“内在的；本质的”，用于描述人、事物或情况的性质、特征或状态。', englishDefinition: 'Belonging naturally to something as an essential part of its character or value.',
    examples: [{ english: 'Trust is intrinsic to a successful partnership.', chinese: '信任是成功合作关系的内在基础。' }], collocations: ['intrinsic value', 'intrinsic to'], level: 5, cefr: 'C1', categories: ['Academic', 'Business'],
  },  {
    id: 'adhere', term: 'adhere', normalizedTerm: 'adhere', partOfSpeech: ['verb'], ipa: '/əd\'hɪr/',
    chineseShort: '依附；粘着；坚持', chineseExplanation: '表示“依附；粘着；坚持”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be compatible or in accordance with.',
    examples: [{ english: 'In this context, the word "adhere" is used to mean be compatible or in accordance with.', chinese: '在这个语境中，“adhere”用于表达“依附；粘着；坚持”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'assimilate', term: 'assimilate', normalizedTerm: 'assimilate', partOfSpeech: ['verb'], ipa: '/ə\'sɪmɪ.leɪt/',
    chineseShort: '使同化；吸收；使相拟', chineseExplanation: '表示“使同化；吸收；使相拟”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Become similar to one\'s environment.',
    examples: [{ english: 'In this context, the word "assimilate" is used to mean become similar to one\'s environment.', chinese: '在这个语境中，“assimilate”用于表达“使同化；吸收；使相拟”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'commodity', term: 'commodity', normalizedTerm: 'commodity', partOfSpeech: ['noun'], ipa: '/kə\'mɑdəti/',
    chineseShort: '农产品；商品；有用的物品', chineseExplanation: '表示“农产品；商品；有用的物品”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Articles of commerce.',
    examples: [{ english: 'In this context, the word "commodity" is used to mean articles of commerce.', chinese: '在这个语境中，“commodity”用于表达“农产品；商品；有用的物品”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'denounce', term: 'denounce', normalizedTerm: 'denounce', partOfSpeech: ['verb'], ipa: '/dɪ\'naʊns/',
    chineseShort: '告发；抨击；谴责', chineseExplanation: '表示“告发；抨击；谴责”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Speak out against.',
    examples: [{ english: 'In this context, the word "denounce" is used to mean speak out against.', chinese: '在这个语境中，“denounce”用于表达“告发；抨击；谴责”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'diffuse', term: 'diffuse', normalizedTerm: 'diffuse', partOfSpeech: ['adjective', 'verb'], ipa: '/dɪ\'fjuz/',
    chineseShort: '散开的；弥漫的', chineseExplanation: '表示“散开的；弥漫的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Spread out; not concentrated in one place.',
    examples: [{ english: 'In this context, the word "diffuse" is used to mean spread out; not concentrated in one place.', chinese: '在这个语境中，“diffuse”用于表达“散开的；弥漫的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'embody', term: 'embody', normalizedTerm: 'embody', partOfSpeech: ['verb'], ipa: '/ɪm\'bɑdi/',
    chineseShort: '具体表达；使具体化', chineseExplanation: '表示“具体表达；使具体化”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Represent, as of a character on stage.',
    examples: [{ english: 'In this context, the word "embody" is used to mean represent, as of a character on stage.', chinese: '在这个语境中，“embody”用于表达“具体表达；使具体化”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fluctuate', term: 'fluctuate', normalizedTerm: 'fluctuate', partOfSpeech: ['verb'], ipa: '/\'flʌktʃu.eɪt/',
    chineseShort: '变动；起伏；动摇', chineseExplanation: '表示“变动；起伏；动摇”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to fluctuate or move in a wavelike pattern.',
    examples: [{ english: 'In this context, the word "fluctuate" is used to mean cause to fluctuate or move in a wavelike pattern.', chinese: '在这个语境中，“fluctuate”用于表达“变动；起伏；动摇”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'grumble', term: 'grumble', normalizedTerm: 'grumble', partOfSpeech: ['verb', 'noun'], ipa: '/\'ɡrʌmb(ə)l/',
    chineseShort: '抱怨；发牢骚；发隆隆声', chineseExplanation: '表示“抱怨；发牢骚；发隆隆声”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'To utter or emit low dull rumbling sounds.',
    examples: [{ english: 'In this context, the word "grumble" is used to mean to utter or emit low dull rumbling sounds.', chinese: '在这个语境中，“grumble”用于表达“抱怨；发牢骚；发隆隆声”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hamper', term: 'hamper', normalizedTerm: 'hamper', partOfSpeech: ['verb', 'noun'], ipa: '/\'hæmpər/',
    chineseShort: '阻碍；使困累；妨碍', chineseExplanation: '表示“阻碍；使困累；妨碍”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Prevent the progress or free movement of.',
    examples: [{ english: 'In this context, the word "hamper" is used to mean prevent the progress or free movement of.', chinese: '在这个语境中，“hamper”用于表达“阻碍；使困累；妨碍”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hoist', term: 'hoist', normalizedTerm: 'hoist', partOfSpeech: ['verb', 'noun'], ipa: '/hɔɪst/',
    chineseShort: '升起；升高；举起', chineseExplanation: '表示“升起；升高；举起”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Raise or haul up with or as if with mechanical help.',
    examples: [{ english: 'In this context, the word "hoist" is used to mean raise or haul up with or as if with mechanical help.', chinese: '在这个语境中，“hoist”用于表达“升起；升高；举起”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'huddle', term: 'huddle', normalizedTerm: 'huddle', partOfSpeech: ['verb', 'noun'], ipa: '/\'hʌd(ə)l/',
    chineseShort: '把...挤在一起；乱堆；草率了事', chineseExplanation: '表示“把...挤在一起；乱堆；草率了事”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Crowd or draw together.',
    examples: [{ english: 'In this context, the word "huddle" is used to mean crowd or draw together.', chinese: '在这个语境中，“huddle”用于表达“把...挤在一起；乱堆；草率了事”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'indignant', term: 'indignant', normalizedTerm: 'indignant', partOfSpeech: ['adjective'], ipa: '/ɪn\'dɪɡnənt/',
    chineseShort: '愤怒的；愤慨的', chineseExplanation: '表示“愤怒的；愤慨的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Angered at something unjust or wrong.',
    examples: [{ english: 'In this context, the word "indignant" is used to mean angered at something unjust or wrong.', chinese: '在这个语境中，“indignant”用于表达“愤怒的；愤慨的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'marvel', term: 'marvel', normalizedTerm: 'marvel', partOfSpeech: ['noun', 'verb'], ipa: '/\'mɑrv(ə)l/',
    chineseShort: '奇异事物；罕见例子', chineseExplanation: '表示“奇异事物；罕见例子”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Express astonishment or surprise about something.',
    examples: [{ english: 'In this context, the word "marvel" is used to mean express astonishment or surprise about something.', chinese: '在这个语境中，“marvel”用于表达“奇异事物；罕见例子”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'mediate', term: 'mediate', normalizedTerm: 'mediate', partOfSpeech: ['verb', 'adjective'], ipa: '/\'midi.eɪt/',
    chineseShort: '斡旋；调停', chineseExplanation: '表示“斡旋；调停”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Occupy an intermediate or middle position or form a connecting link or stage between two others.',
    examples: [{ english: 'In this context, the word "mediate" is used to mean occupy an intermediate or middle position or form a connecting link or stage between two others.', chinese: '在这个语境中，“mediate”用于表达“斡旋；调停”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'melancholy', term: 'melancholy', normalizedTerm: 'melancholy', partOfSpeech: ['noun', 'adjective'], ipa: '/ˈmelənˌkɑli/',
    chineseShort: '忧郁；悲哀；愁思', chineseExplanation: '表示“忧郁；悲哀；愁思”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A feeling of thoughtful sadness.',
    examples: [{ english: 'In this context, the word "melancholy" is used to mean a feeling of thoughtful sadness.', chinese: '在这个语境中，“melancholy”用于表达“忧郁；悲哀；愁思”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'quiver', term: 'quiver', normalizedTerm: 'quiver', partOfSpeech: ['verb', 'noun'], ipa: '/\'kwivə/',
    chineseShort: '颤抖；振动', chineseExplanation: '表示“颤抖；振动”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Shake with fast, tremulous movements.',
    examples: [{ english: 'In this context, the word "quiver" is used to mean shake with fast, tremulous movements.', chinese: '在这个语境中，“quiver”用于表达“颤抖；振动”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reproach', term: 'reproach', normalizedTerm: 'reproach', partOfSpeech: ['verb', 'noun'], ipa: '/rɪ\'proʊtʃ/',
    chineseShort: '责备；申斥；使丢脸', chineseExplanation: '表示“责备；申斥；使丢脸”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Express criticism towards.',
    examples: [{ english: 'In this context, the word "reproach" is used to mean express criticism towards.', chinese: '在这个语境中，“reproach”用于表达“责备；申斥；使丢脸”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'solitary', term: 'solitary', normalizedTerm: 'solitary', partOfSpeech: ['adjective', 'noun'], ipa: '/\'sɑlə.teri/',
    chineseShort: '孤独的；独居的', chineseExplanation: '表示“孤独的；独居的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Characterized by or preferring solitude.',
    examples: [{ english: 'In this context, the word "solitary" is used to mean characterized by or preferring solitude.', chinese: '在这个语境中，“solitary”用于表达“孤独的；独居的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vicinity', term: 'vicinity', normalizedTerm: 'vicinity', partOfSpeech: ['noun'], ipa: '/vɪ\'sɪnəti/',
    chineseShort: '附近；邻近；附近地区', chineseExplanation: '表示“附近；邻近；附近地区”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A surrounding or nearby region.',
    examples: [{ english: 'In this context, the word "vicinity" is used to mean a surrounding or nearby region.', chinese: '在这个语境中，“vicinity”用于表达“附近；邻近；附近地区”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'disperse', term: 'disperse', normalizedTerm: 'disperse', partOfSpeech: ['verb', 'adjective'], ipa: '/dɪ\'spɜrs/',
    chineseShort: '分散；传播；散开', chineseExplanation: '表示“分散；传播；散开”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'To cause to separate and go in different directions.',
    examples: [{ english: 'In this context, the word "disperse" is used to mean to cause to separate and go in different directions.', chinese: '在这个语境中，“disperse”用于表达“分散；传播；散开”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'equilibrium', term: 'equilibrium', normalizedTerm: 'equilibrium', partOfSpeech: ['noun'], ipa: '/.ekwɪ\'lɪbriəm/',
    chineseShort: '平衡；平静；均衡', chineseExplanation: '表示“平衡；平静；均衡”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A stable situation in which forces cancel one another.',
    examples: [{ english: 'In this context, the word "equilibrium" is used to mean a stable situation in which forces cancel one another.', chinese: '在这个语境中，“equilibrium”用于表达“平衡；平静；均衡”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'opaque', term: 'opaque', normalizedTerm: 'opaque', partOfSpeech: ['adjective', 'noun'], ipa: '/oʊ\'peɪk/',
    chineseShort: '不透明的；不传热的；不传导的', chineseExplanation: '表示“不透明的；不传热的；不传导的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Not transmitting or reflecting light or radiant energy; impenetrable to sight.',
    examples: [{ english: 'In this context, the word "opaque" is used to mean not transmitting or reflecting light or radiant energy; impenetrable to sight.', chinese: '在这个语境中，“opaque”用于表达“不透明的；不传热的；不传导的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'physiological', term: 'physiological', normalizedTerm: 'physiological', partOfSpeech: ['adjective'], ipa: '/.fɪziə\'lɑdʒɪk(ə)l/',
    chineseShort: '生理学的；生理学上的；生理机能的', chineseExplanation: '表示“生理学的；生理学上的；生理机能的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to the biological study of physiology.',
    examples: [{ english: 'In this context, the word "physiological" is used to mean of or relating to the biological study of physiology.', chinese: '在这个语境中，“physiological”用于表达“生理学的；生理学上的；生理机能的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'prone', term: 'prone', normalizedTerm: 'prone', partOfSpeech: ['adjective'], ipa: '/proʊn/',
    chineseShort: '俯伏的；面向下的；有...倾向的', chineseExplanation: '表示“俯伏的；面向下的；有...倾向的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having a tendency (to); often used in combination.',
    examples: [{ english: 'In this context, the word "prone" is used to mean having a tendency (to); often used in combination.', chinese: '在这个语境中，“prone”用于表达“俯伏的；面向下的；有...倾向的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'spatial', term: 'spatial', normalizedTerm: 'spatial', partOfSpeech: ['adjective'], ipa: '/\'speɪʃ(ə)l/',
    chineseShort: '空间的；受空间条件限制的；占地位的', chineseExplanation: '表示“空间的；受空间条件限制的；占地位的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Pertaining to or involving or having the nature of space.',
    examples: [{ english: 'In this context, the word "spatial" is used to mean pertaining to or involving or having the nature of space.', chinese: '在这个语境中，“spatial”用于表达“空间的；受空间条件限制的；占地位的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'synthesis', term: 'synthesis', normalizedTerm: 'synthesis', partOfSpeech: ['noun'], ipa: '/\'sɪnθəsɪs/',
    chineseShort: '综合；组织；综合体', chineseExplanation: '表示“综合；组织；综合体”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The process of producing a chemical compound (usually by the union of simpler chemical compounds).',
    examples: [{ english: 'In this context, the word "synthesis" is used to mean the process of producing a chemical compound (usually by the union of simpler chemical compounds).', chinese: '在这个语境中，“synthesis”用于表达“综合；组织；综合体”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'malice', term: 'malice', normalizedTerm: 'malice', partOfSpeech: ['noun'], ipa: '/\'mælɪs/',
    chineseShort: '恶意；蓄意害人；怨恨', chineseExplanation: '表示“恶意；蓄意害人；怨恨”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Feeling a need to see others suffer.',
    examples: [{ english: 'In this context, the word "malice" is used to mean feeling a need to see others suffer.', chinese: '在这个语境中，“malice”用于表达“恶意；蓄意害人；怨恨”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'menace', term: 'menace', normalizedTerm: 'menace', partOfSpeech: ['noun', 'verb'], ipa: '/\'menəs/',
    chineseShort: '威胁；胁迫', chineseExplanation: '表示“威胁；胁迫”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Something that is a source of danger.',
    examples: [{ english: 'In this context, the word "menace" is used to mean something that is a source of danger.', chinese: '在这个语境中，“menace”用于表达“威胁；胁迫”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ore', term: 'ore', normalizedTerm: 'ore', partOfSpeech: ['noun'], ipa: '/ɔr/',
    chineseShort: '矿石', chineseExplanation: '表示“矿石”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A mineral that contains metal that is valuable enough to be mined.',
    examples: [{ english: 'In this context, the word "ore" is used to mean a mineral that contains metal that is valuable enough to be mined.', chinese: '在这个语境中，“ore”用于表达“矿石”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'merit', term: 'merit', normalizedTerm: 'merit', partOfSpeech: ['noun', 'verb'], ipa: '/\'merɪt/',
    chineseShort: '优点；功绩；价值', chineseExplanation: '表示“优点；功绩；价值”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any admirable quality or attribute.',
    examples: [{ english: 'In this context, the word "merit" is used to mean any admirable quality or attribute.', chinese: '在这个语境中，“merit”用于表达“优点；功绩；价值”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'contrive', term: 'contrive', normalizedTerm: 'contrive', partOfSpeech: ['verb'], ipa: '/kən\'traɪv/',
    chineseShort: '发明；设计；图谋', chineseExplanation: '表示“发明；设计；图谋”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make or work out a plan for; devise.',
    examples: [{ english: 'In this context, the word "contrive" is used to mean make or work out a plan for; devise.', chinese: '在这个语境中，“contrive”用于表达“发明；设计；图谋”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brood', term: 'brood', normalizedTerm: 'brood', partOfSpeech: ['verb', 'noun'], ipa: '/brud/',
    chineseShort: '孵；沉思', chineseExplanation: '表示“孵；沉思”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Think moodily or anxiously about something.',
    examples: [{ english: 'In this context, the word "brood" is used to mean think moodily or anxiously about something.', chinese: '在这个语境中，“brood”用于表达“孵；沉思”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cognitive', term: 'cognitive', normalizedTerm: 'cognitive', partOfSpeech: ['adjective'], ipa: '/\'kɑɡnətɪv/',
    chineseShort: '认知的；认识的', chineseExplanation: '表示“认知的；认识的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or being or relating to or involving cognition.',
    examples: [{ english: 'In this context, the word "cognitive" is used to mean of or being or relating to or involving cognition.', chinese: '在这个语境中，“cognitive”用于表达“认知的；认识的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'collide', term: 'collide', normalizedTerm: 'collide', partOfSpeech: ['verb'], ipa: '/kə\'laɪd/',
    chineseShort: '碰撞；互撞；抵触', chineseExplanation: '表示“碰撞；互撞；抵触”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to collide.',
    examples: [{ english: 'In this context, the word "collide" is used to mean cause to collide.', chinese: '在这个语境中，“collide”用于表达“碰撞；互撞；抵触”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'correlate', term: 'correlate', normalizedTerm: 'correlate', partOfSpeech: ['noun', 'verb'], ipa: '/\'kɔːrəleɪt/',
    chineseShort: '有相互关系的东西；相关物', chineseExplanation: '表示“有相互关系的东西；相关物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Either of two or more related or complementary variables.',
    examples: [{ english: 'In this context, the word "correlate" is used to mean either of two or more related or complementary variables.', chinese: '在这个语境中，“correlate”用于表达“有相互关系的东西；相关物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'diminish', term: 'diminish', normalizedTerm: 'diminish', partOfSpeech: ['verb'], ipa: '/diˈminiʃ/',
    chineseShort: '(使)减少；(使)变小', chineseExplanation: '表示“(使)减少；(使)变小”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Lessen the authority, dignity, or reputation of.',
    examples: [{ english: 'In this context, the word "diminish" is used to mean lessen the authority, dignity, or reputation of.', chinese: '在这个语境中，“diminish”用于表达“(使)减少；(使)变小”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hitherto', term: 'hitherto', normalizedTerm: 'hitherto', partOfSpeech: ['adverb'], ipa: '/\'hɪðər.tu/',
    chineseShort: '迄今；至今', chineseExplanation: '表示以“迄今；至今”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'Used in negative statement to describe a situation that has existed up to this point or up to the present time.',
    examples: [{ english: 'In this context, the word "hitherto" is used to mean used in negative statement to describe a situation that has existed up to this point or up to the present time.', chinese: '在这个语境中，“hitherto”用于表达“迄今；至今”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'trifle', term: 'trifle', normalizedTerm: 'trifle', partOfSpeech: ['noun', 'verb'], ipa: '/\'traɪf(ə)l/',
    chineseShort: '琐事；少量', chineseExplanation: '表示“琐事；少量”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A cold pudding made of layers of sponge cake spread with fruit or jelly; may be decorated with nuts, cream, or chocolate.',
    examples: [{ english: 'In this context, the word "trifle" is used to mean a cold pudding made of layers of sponge cake spread with fruit or jelly; may be decorated with nuts, cream, or chocolate.', chinese: '在这个语境中，“trifle”用于表达“琐事；少量”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vocational', term: 'vocational', normalizedTerm: 'vocational', partOfSpeech: ['adjective'], ipa: '/voʊ\'keɪʃən(ə)l/',
    chineseShort: '职业的', chineseExplanation: '表示“职业的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to a vocation or occupation; especially providing or undergoing training in special skills.',
    examples: [{ english: 'In this context, the word "vocational" is used to mean of or relating to a vocation or occupation; especially providing or undergoing training in special skills.', chinese: '在这个语境中，“vocational”用于表达“职业的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hypothesis', term: 'hypothesis', normalizedTerm: 'hypothesis', partOfSpeech: ['noun'], ipa: '/haɪ\'pɑθəsɪs/',
    chineseShort: '假设', chineseExplanation: '表示“假设”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A proposal intended to explain certain facts or observations.',
    examples: [{ english: 'In this context, the word "hypothesis" is used to mean a proposal intended to explain certain facts or observations.', chinese: '在这个语境中，“hypothesis”用于表达“假设”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'contemptuous', term: 'contemptuous', normalizedTerm: 'contemptuous', partOfSpeech: ['adjective'], ipa: '/kən\'temptʃuəs/',
    chineseShort: '轻蔑的；鄙视的；瞧不起人的', chineseExplanation: '表示“轻蔑的；鄙视的；瞧不起人的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Expressing extreme contempt.',
    examples: [{ english: 'In this context, the word "contemptuous" is used to mean expressing extreme contempt.', chinese: '在这个语境中，“contemptuous”用于表达“轻蔑的；鄙视的；瞧不起人的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'herald', term: 'herald', normalizedTerm: 'herald', partOfSpeech: ['verb', 'noun'], ipa: '/\'herəld/',
    chineseShort: '预报；宣布；传达', chineseExplanation: '表示“预报；宣布；传达”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: '(formal) a person who announces important news.',
    examples: [{ english: 'In this context, the word "herald" is used to mean (formal) a person who announces important news.', chinese: '在这个语境中，“herald”用于表达“预报；宣布；传达”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'malicious', term: 'malicious', normalizedTerm: 'malicious', partOfSpeech: ['adjective'], ipa: '/mə\'lɪʃəs/',
    chineseShort: '怀恶意的；恶毒的', chineseExplanation: '表示“怀恶意的；恶毒的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having the nature of or resulting from malice.',
    examples: [{ english: 'In this context, the word "malicious" is used to mean having the nature of or resulting from malice.', chinese: '在这个语境中，“malicious”用于表达“怀恶意的；恶毒的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'mesh', term: 'mesh', normalizedTerm: 'mesh', partOfSpeech: ['verb', 'noun'], ipa: '/meʃ/',
    chineseShort: '以网捕捉；啮合；使缠住', chineseExplanation: '表示“以网捕捉；啮合；使缠住”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Work together in harmony.',
    examples: [{ english: 'In this context, the word "mesh" is used to mean work together in harmony.', chinese: '在这个语境中，“mesh”用于表达“以网捕捉；啮合；使缠住”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'perch', term: 'perch', normalizedTerm: 'perch', partOfSpeech: ['verb', 'noun'], ipa: '/pɜː(r)tʃ/',
    chineseShort: '(使)栖息；就位；位于', chineseExplanation: '表示“(使)栖息；就位；位于”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Support consisting of a branch or rod that serves as a resting place (especially for a bird).',
    examples: [{ english: 'In this context, the word "perch" is used to mean support consisting of a branch or rod that serves as a resting place (especially for a bird).', chinese: '在这个语境中，“perch”用于表达“(使)栖息；就位；位于”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rebuke', term: 'rebuke', normalizedTerm: 'rebuke', partOfSpeech: ['verb', 'noun'], ipa: '/rɪ\'bjuk/',
    chineseShort: '斥责；指责；制止', chineseExplanation: '表示“斥责；指责；制止”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'An act or expression of criticism and censure.',
    examples: [{ english: 'In this context, the word "rebuke" is used to mean an act or expression of criticism and censure.', chinese: '在这个语境中，“rebuke”用于表达“斥责；指责；制止”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'residual', term: 'residual', normalizedTerm: 'residual', partOfSpeech: ['adjective', 'noun'], ipa: '/rɪ\'zɪdjuəl/',
    chineseShort: '残渣的；剩余的', chineseExplanation: '表示“残渣的；剩余的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or indicating a remainder.',
    examples: [{ english: 'In this context, the word "residual" is used to mean relating to or indicating a remainder.', chinese: '在这个语境中，“residual”用于表达“残渣的；剩余的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hinder', term: 'hinder', normalizedTerm: 'hinder', partOfSpeech: ['verb', 'adjective'], ipa: '/\'hɪndər/',
    chineseShort: '阻碍；打扰', chineseExplanation: '表示“阻碍；打扰”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be a hindrance or obstacle to.',
    examples: [{ english: 'In this context, the word "hinder" is used to mean be a hindrance or obstacle to.', chinese: '在这个语境中，“hinder”用于表达“阻碍；打扰”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brim', term: 'brim', normalizedTerm: 'brim', partOfSpeech: ['verb', 'noun'], ipa: '/brɪm/',
    chineseShort: '注满；使满溢', chineseExplanation: '表示“注满；使满溢”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be completely full.',
    examples: [{ english: 'In this context, the word "brim" is used to mean be completely full.', chinese: '在这个语境中，“brim”用于表达“注满；使满溢”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'kinetic', term: 'kinetic', normalizedTerm: 'kinetic', partOfSpeech: ['adjective'], ipa: '/kɪ\'netɪk/',
    chineseShort: '运动的；运动引起的；动力学的', chineseExplanation: '表示“运动的；运动引起的；动力学的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to the motion of material bodies and the forces associated therewith.',
    examples: [{ english: 'In this context, the word "kinetic" is used to mean relating to the motion of material bodies and the forces associated therewith.', chinese: '在这个语境中，“kinetic”用于表达“运动的；运动引起的；动力学的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'parameter', term: 'parameter', normalizedTerm: 'parameter', partOfSpeech: ['noun'], ipa: '/pə\'ræmɪtər/',
    chineseShort: '参变数；参变量；参数', chineseExplanation: '表示“参变数；参变量；参数”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A constant in the equation of a curve that can be varied to yield a family of similar curves.',
    examples: [{ english: 'In this context, the word "parameter" is used to mean a constant in the equation of a curve that can be varied to yield a family of similar curves.', chinese: '在这个语境中，“parameter”用于表达“参变数；参变量；参数”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'haughty', term: 'haughty', normalizedTerm: 'haughty', partOfSpeech: ['adjective'], ipa: '/\'hɔti/',
    chineseShort: '傲慢的；骄傲的；崇高的', chineseExplanation: '表示“傲慢的；骄傲的；崇高的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having or showing arrogant superiority to and disdain of those one views as unworthy.',
    examples: [{ english: 'In this context, the word "haughty" is used to mean having or showing arrogant superiority to and disdain of those one views as unworthy.', chinese: '在这个语境中，“haughty”用于表达“傲慢的；骄傲的；崇高的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'predecessor', term: 'predecessor', normalizedTerm: 'predecessor', partOfSpeech: ['noun'], ipa: '/\'predə.sesər/',
    chineseShort: '前任；先辈；前身', chineseExplanation: '表示“前任；先辈；前身”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'One who precedes you in time (as in holding a position or office).',
    examples: [{ english: 'In this context, the word "predecessor" is used to mean one who precedes you in time (as in holding a position or office).', chinese: '在这个语境中，“predecessor”用于表达“前任；先辈；前身”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'envisage', term: 'envisage', normalizedTerm: 'envisage', partOfSpeech: ['verb'], ipa: '/ɪn\'vɪzɪdʒ/',
    chineseShort: '面对；正视；想象', chineseExplanation: '表示“面对；正视；想象”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Form a mental image of something that is not present or that is not the case.',
    examples: [{ english: 'In this context, the word "envisage" is used to mean form a mental image of something that is not present or that is not the case.', chinese: '在这个语境中，“envisage”用于表达“面对；正视；想象”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'qualitative', term: 'qualitative', normalizedTerm: 'qualitative', partOfSpeech: ['adjective'], ipa: '/\'kwɑlə.teɪtɪv/',
    chineseShort: '性质的；质的；定性的', chineseExplanation: '表示“性质的；质的；定性的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Involving distinctions based on qualities.',
    examples: [{ english: 'In this context, the word "qualitative" is used to mean involving distinctions based on qualities.', chinese: '在这个语境中，“qualitative”用于表达“性质的；质的；定性的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cosmic', term: 'cosmic', normalizedTerm: 'cosmic', partOfSpeech: ['adjective'], ipa: '/\'kɑzmɪk/',
    chineseShort: '宇宙的；宇宙航行的；无限的', chineseExplanation: '表示“宇宙的；宇宙航行的；无限的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or from or pertaining to or characteristic of the cosmos or universe.',
    examples: [{ english: 'In this context, the word "cosmic" is used to mean of or from or pertaining to or characteristic of the cosmos or universe.', chinese: '在这个语境中，“cosmic”用于表达“宇宙的；宇宙航行的；无限的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'beneficiary', term: 'beneficiary', normalizedTerm: 'beneficiary', partOfSpeech: ['noun', 'adjective'], ipa: '/.benə\'fɪʃəri/',
    chineseShort: '受惠者；受益人', chineseExplanation: '表示“受惠者；受益人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The recipient of funds or other benefits.',
    examples: [{ english: 'In this context, the word "beneficiary" is used to mean the recipient of funds or other benefits.', chinese: '在这个语境中，“beneficiary”用于表达“受惠者；受益人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'crippling', term: 'crippling', normalizedTerm: 'crippling', partOfSpeech: ['adjective'], ipa: '/\'krɪplɪŋ/',
    chineseShort: '(往复)曲折；断裂；临界的', chineseExplanation: '表示“(往复)曲折；断裂；临界的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'That cripples or disables or incapacitates.',
    examples: [{ english: 'In this context, the word "crippling" is used to mean that cripples or disables or incapacitates.', chinese: '在这个语境中，“crippling”用于表达“(往复)曲折；断裂；临界的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deficient', term: 'deficient', normalizedTerm: 'deficient', partOfSpeech: ['adjective'], ipa: '/dɪ\'fɪʃ(ə)nt/',
    chineseShort: '不足的；不充分的；有缺陷的', chineseExplanation: '表示“不足的；不充分的；有缺陷的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Inadequate in amount or degree.',
    examples: [{ english: 'In this context, the word "deficient" is used to mean inadequate in amount or degree.', chinese: '在这个语境中，“deficient”用于表达“不足的；不充分的；有缺陷的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rapture', term: 'rapture', normalizedTerm: 'rapture', partOfSpeech: ['noun', 'verb'], ipa: '/\'ræptʃər/',
    chineseShort: '兴高采烈；着迷；欢天喜地', chineseExplanation: '表示“兴高采烈；着迷；欢天喜地”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A state of being carried away by overwhelming emotion.',
    examples: [{ english: 'In this context, the word "rapture" is used to mean a state of being carried away by overwhelming emotion.', chinese: '在这个语境中，“rapture”用于表达“兴高采烈；着迷；欢天喜地”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hysterical', term: 'hysterical', normalizedTerm: 'hysterical', partOfSpeech: ['adjective'], ipa: '/hɪ\'sterɪk(ə)l/',
    chineseShort: '歇斯底里的；异常兴奋的', chineseExplanation: '表示“歇斯底里的；异常兴奋的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Marked by excessive or uncontrollable emotion.',
    examples: [{ english: 'In this context, the word "hysterical" is used to mean marked by excessive or uncontrollable emotion.', chinese: '在这个语境中，“hysterical”用于表达“歇斯底里的；异常兴奋的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'echo', term: 'echo', normalizedTerm: 'echo', partOfSpeech: ['noun', 'verb'], ipa: '/\'ekoʊ/',
    chineseShort: '回声；回音；回波', chineseExplanation: '表示“回声；回音；回波”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The repetition of a sound resulting from reflection of the sound waves.',
    examples: [{ english: 'In this context, the word "echo" is used to mean the repetition of a sound resulting from reflection of the sound waves.', chinese: '在这个语境中，“echo”用于表达“回声；回音；回波”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'accord', term: 'accord', normalizedTerm: 'accord', partOfSpeech: ['noun', 'verb'], ipa: '/ə\'kɒːd/',
    chineseShort: '一致；调和；协定', chineseExplanation: '表示“一致；调和；协定”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Concurrence of opinion.',
    examples: [{ english: 'In this context, the word "accord" is used to mean concurrence of opinion.', chinese: '在这个语境中，“accord”用于表达“一致；调和；协定”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'acquaint', term: 'acquaint', normalizedTerm: 'acquaint', partOfSpeech: ['verb'], ipa: '/ə\'kweɪnt/',
    chineseShort: '使认识；介绍', chineseExplanation: '表示“使认识；介绍”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Inform.',
    examples: [{ english: 'In this context, the word "acquaint" is used to mean inform.', chinese: '在这个语境中，“acquaint”用于表达“使认识；介绍”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'aesthetic', term: 'aesthetic', normalizedTerm: 'aesthetic', partOfSpeech: ['adjective', 'noun'], ipa: '/es\'θetɪk/',
    chineseShort: '美学的；审美的；有美感的', chineseExplanation: '表示“美学的；审美的；有美感的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or dealing with the subject of aesthetics.',
    examples: [{ english: 'In this context, the word "aesthetic" is used to mean relating to or dealing with the subject of aesthetics.', chinese: '在这个语境中，“aesthetic”用于表达“美学的；审美的；有美感的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'affirm', term: 'affirm', normalizedTerm: 'affirm', partOfSpeech: ['verb'], ipa: '/ə\'fɜrm/',
    chineseShort: '断言；确认', chineseExplanation: '表示“断言；确认”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'To declare or affirm solemnly and formally as true.',
    examples: [{ english: 'In this context, the word "affirm" is used to mean to declare or affirm solemnly and formally as true.', chinese: '在这个语境中，“affirm”用于表达“断言；确认”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'afflict', term: 'afflict', normalizedTerm: 'afflict', partOfSpeech: ['verb'], ipa: '/ə\'flɪkt/',
    chineseShort: '使苦恼；折磨', chineseExplanation: '表示“使苦恼；折磨”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause great unhappiness for; distress.',
    examples: [{ english: 'In this context, the word "afflict" is used to mean cause great unhappiness for; distress.', chinese: '在这个语境中，“afflict”用于表达“使苦恼；折磨”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'aggravate', term: 'aggravate', normalizedTerm: 'aggravate', partOfSpeech: ['verb'], ipa: '/\'æɡrə.veɪt/',
    chineseShort: '使恶化；使更严重；加重', chineseExplanation: '表示“使恶化；使更严重；加重”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make worse.',
    examples: [{ english: 'In this context, the word "aggravate" is used to mean make worse.', chinese: '在这个语境中，“aggravate”用于表达“使恶化；使更严重；加重”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'appreciable', term: 'appreciable', normalizedTerm: 'appreciable', partOfSpeech: ['adjective'], ipa: '/ə\'priʃəb(ə)l/',
    chineseShort: '可感知的；可评估的', chineseExplanation: '表示“可感知的；可评估的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Enough to be estimated or measured.',
    examples: [{ english: 'In this context, the word "appreciable" is used to mean enough to be estimated or measured.', chinese: '在这个语境中，“appreciable”用于表达“可感知的；可评估的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ascribe', term: 'ascribe', normalizedTerm: 'ascribe', partOfSpeech: ['verb'], ipa: '/əˈskraɪb/',
    chineseShort: '归因于；归咎于', chineseExplanation: '表示“归因于；归咎于”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Attribute or credit to.',
    examples: [{ english: 'In this context, the word "ascribe" is used to mean attribute or credit to.', chinese: '在这个语境中，“ascribe”用于表达“归因于；归咎于”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'banquet', term: 'banquet', normalizedTerm: 'banquet', partOfSpeech: ['noun'], ipa: '/\'bæŋkwɪt/',
    chineseShort: '宴会', chineseExplanation: '表示“宴会”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A ceremonial dinner party for many people.',
    examples: [{ english: 'In this context, the word "banquet" is used to mean a ceremonial dinner party for many people.', chinese: '在这个语境中，“banquet”用于表达“宴会”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bleach', term: 'bleach', normalizedTerm: 'bleach', partOfSpeech: ['verb', 'noun'], ipa: '/blitʃ/',
    chineseShort: '漂白', chineseExplanation: '表示“漂白”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Remove color from.',
    examples: [{ english: 'In this context, the word "bleach" is used to mean remove color from.', chinese: '在这个语境中，“bleach”用于表达“漂白”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bleak', term: 'bleak', normalizedTerm: 'bleak', partOfSpeech: ['adjective'], ipa: '/blik/',
    chineseShort: '萧瑟的；荒凉的；阴冷的', chineseExplanation: '表示“萧瑟的；荒凉的；阴冷的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Unpleasantly cold and damp.',
    examples: [{ english: 'In this context, the word "bleak" is used to mean unpleasantly cold and damp.', chinese: '在这个语境中，“bleak”用于表达“萧瑟的；荒凉的；阴冷的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'blunder', term: 'blunder', normalizedTerm: 'blunder', partOfSpeech: ['noun', 'verb'], ipa: '/\'blʌndər/',
    chineseShort: '大错；大失策', chineseExplanation: '表示“大错；大失策”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An embarrassing mistake.',
    examples: [{ english: 'In this context, the word "blunder" is used to mean an embarrassing mistake.', chinese: '在这个语境中，“blunder”用于表达“大错；大失策”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'blunt', term: 'blunt', normalizedTerm: 'blunt', partOfSpeech: ['adjective', 'verb'], ipa: '/blʌnt/',
    chineseShort: '钝的；坦率的；麻痹的', chineseExplanation: '表示“钝的；坦率的；麻痹的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having a broad or rounded end.',
    examples: [{ english: 'In this context, the word "blunt" is used to mean having a broad or rounded end.', chinese: '在这个语境中，“blunt”用于表达“钝的；坦率的；麻痹的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'boycott', term: 'boycott', normalizedTerm: 'boycott', partOfSpeech: ['noun', 'verb'], ipa: '/\'bɔɪ.kɑt/',
    chineseShort: '联合抵制', chineseExplanation: '表示“联合抵制”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A group\'s refusal to have commercial dealings with some organization in protest against its policies.',
    examples: [{ english: 'In this context, the word "boycott" is used to mean a group\'s refusal to have commercial dealings with some organization in protest against its policies.', chinese: '在这个语境中，“boycott”用于表达“联合抵制”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'brisk', term: 'brisk', normalizedTerm: 'brisk', partOfSpeech: ['adjective', 'verb'], ipa: '/brɪsk/',
    chineseShort: '强烈的；寒冷而干燥的；活泼的', chineseExplanation: '表示“强烈的；寒冷而干燥的；活泼的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Very active.',
    examples: [{ english: 'In this context, the word "brisk" is used to mean very active.', chinese: '在这个语境中，“brisk”用于表达“强烈的；寒冷而干燥的；活泼的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'censor', term: 'censor', normalizedTerm: 'censor', partOfSpeech: ['noun', 'verb'], ipa: '/\'sensər/',
    chineseShort: '检查员', chineseExplanation: '表示“检查员”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone who censures or condemns.',
    examples: [{ english: 'In this context, the word "censor" is used to mean someone who censures or condemns.', chinese: '在这个语境中，“censor”用于表达“检查员”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'chasm', term: 'chasm', normalizedTerm: 'chasm', partOfSpeech: ['noun'], ipa: '/\'kæzəm/',
    chineseShort: '陷窟；裂口', chineseExplanation: '表示“陷窟；裂口”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A deep opening in the earth\'s surface.',
    examples: [{ english: 'In this context, the word "chasm" is used to mean a deep opening in the earth\'s surface.', chinese: '在这个语境中，“chasm”用于表达“陷窟；裂口”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'clamp', term: 'clamp', normalizedTerm: 'clamp', partOfSpeech: ['noun', 'verb'], ipa: '/klæmp/',
    chineseShort: '夹钳', chineseExplanation: '表示“夹钳”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A device (generally used by carpenters) that holds things firmly together.',
    examples: [{ english: 'In this context, the word "clamp" is used to mean a device (generally used by carpenters) that holds things firmly together.', chinese: '在这个语境中，“clamp”用于表达“夹钳”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'climax', term: 'climax', normalizedTerm: 'climax', partOfSpeech: ['noun', 'verb'], ipa: '/\'klaɪmæks/',
    chineseShort: '高潮；极点；层进法', chineseExplanation: '表示“高潮；极点；层进法”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The highest point of anything conceived of as growing or developing or unfolding.',
    examples: [{ english: 'In this context, the word "climax" is used to mean the highest point of anything conceived of as growing or developing or unfolding.', chinese: '在这个语境中，“climax”用于表达“高潮；极点；层进法”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'commonplace', term: 'commonplace', normalizedTerm: 'commonplace', partOfSpeech: ['noun', 'adjective'], ipa: '/\'kɑmən.pleɪs/',
    chineseShort: '寻常事；老生常谈；普通的东西', chineseExplanation: '表示“寻常事；老生常谈；普通的东西”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Completely ordinary and unremarkable.',
    examples: [{ english: 'In this context, the word "commonplace" is used to mean completely ordinary and unremarkable.', chinese: '在这个语境中，“commonplace”用于表达“寻常事；老生常谈；普通的东西”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'condense', term: 'condense', normalizedTerm: 'condense', partOfSpeech: ['verb'], ipa: '/kən\'dens/',
    chineseShort: '使浓缩；使压缩；缩短', chineseExplanation: '表示“使浓缩；使压缩；缩短”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Undergo condensation; change from a gaseous to a liquid state and fall in drops.',
    examples: [{ english: 'In this context, the word "condense" is used to mean undergo condensation; change from a gaseous to a liquid state and fall in drops.', chinese: '在这个语境中，“condense”用于表达“使浓缩；使压缩；缩短”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'confidential', term: 'confidential', normalizedTerm: 'confidential', partOfSpeech: ['adjective'], ipa: '/.kɑnfɪ\'denʃ(ə)l/',
    chineseShort: '机密的；获他人信赖的；易于信任他人的', chineseExplanation: '表示“机密的；获他人信赖的；易于信任他人的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Entrusted with private information and the confidence of another.',
    examples: [{ english: 'In this context, the word "confidential" is used to mean entrusted with private information and the confidence of another.', chinese: '在这个语境中，“confidential”用于表达“机密的；获他人信赖的；易于信任他人的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'conspicuous', term: 'conspicuous', normalizedTerm: 'conspicuous', partOfSpeech: ['adjective'], ipa: '/kən\'spɪkjuəs/',
    chineseShort: '显著的；显眼的；出众的', chineseExplanation: '表示“显著的；显眼的；出众的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Obvious to the eye or mind.',
    examples: [{ english: 'In this context, the word "conspicuous" is used to mean obvious to the eye or mind.', chinese: '在这个语境中，“conspicuous”用于表达“显著的；显眼的；出众的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'constituent', term: 'constituent', normalizedTerm: 'constituent', partOfSpeech: ['noun', 'adjective'], ipa: '/kən\'stɪtʃuənt/',
    chineseShort: '成分；选民；构成物', chineseExplanation: '表示“成分；选民；构成物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A member of a constituency; a citizen who is represented in a government by officials for whom he or she votes.',
    examples: [{ english: 'In this context, the word "constituent" is used to mean a member of a constituency; a citizen who is represented in a government by officials for whom he or she votes.', chinese: '在这个语境中，“constituent”用于表达“成分；选民；构成物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'constrain', term: 'constrain', normalizedTerm: 'constrain', partOfSpeech: ['verb'], ipa: '/kən\'streɪn/',
    chineseShort: '强迫；限制；关押', chineseExplanation: '表示“强迫；限制；关押”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Hold back.',
    examples: [{ english: 'In this context, the word "constrain" is used to mean hold back.', chinese: '在这个语境中，“constrain”用于表达“强迫；限制；关押”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'convene', term: 'convene', normalizedTerm: 'convene', partOfSpeech: ['verb'], ipa: '/kən\'vin/',
    chineseShort: '集合；召集；召唤', chineseExplanation: '表示“集合；召集；召唤”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Meet formally.',
    examples: [{ english: 'In this context, the word "convene" is used to mean meet formally.', chinese: '在这个语境中，“convene”用于表达“集合；召集；召唤”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'converge', term: 'converge', normalizedTerm: 'converge', partOfSpeech: ['verb'], ipa: '/kən\'vɜrdʒ/',
    chineseShort: '聚合；集中于一点', chineseExplanation: '表示“聚合；集中于一点”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be adjacent or come together.',
    examples: [{ english: 'In this context, the word "converge" is used to mean be adjacent or come together.', chinese: '在这个语境中，“converge”用于表达“聚合；集中于一点”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'convict', term: 'convict', normalizedTerm: 'convict', partOfSpeech: ['noun', 'verb'], ipa: '/kən\'vɪkt/',
    chineseShort: '囚犯；罪犯', chineseExplanation: '表示“囚犯；罪犯”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person serving a sentence in a jail or prison.',
    examples: [{ english: 'In this context, the word "convict" is used to mean a person serving a sentence in a jail or prison.', chinese: '在这个语境中，“convict”用于表达“囚犯；罪犯”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'crust', term: 'crust', normalizedTerm: 'crust', partOfSpeech: ['noun', 'verb'], ipa: '/krʌst/',
    chineseShort: '外壳；坚硬外皮；面包皮', chineseExplanation: '表示“外壳；坚硬外皮；面包皮”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The outer layer of the Earth.',
    examples: [{ english: 'In this context, the word "crust" is used to mean the outer layer of the Earth.', chinese: '在这个语境中，“crust”用于表达“外壳；坚硬外皮；面包皮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'decompose', term: 'decompose', normalizedTerm: 'decompose', partOfSpeech: ['verb'], ipa: '/ˌdiːkəm\'pəʊz/',
    chineseShort: '分解；(使)腐烂', chineseExplanation: '表示“分解；(使)腐烂”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Separate (substances) into constituent elements or parts.',
    examples: [{ english: 'In this context, the word "decompose" is used to mean separate (substances) into constituent elements or parts.', chinese: '在这个语境中，“decompose”用于表达“分解；(使)腐烂”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'decree', term: 'decree', normalizedTerm: 'decree', partOfSpeech: ['noun', 'verb'], ipa: '/dɪ\'kri/',
    chineseShort: '法令；判决；天意', chineseExplanation: '表示“法令；判决；天意”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A legally binding command or decision entered on the court record (as if issued by a court or judge).',
    examples: [{ english: 'In this context, the word "decree" is used to mean a legally binding command or decision entered on the court record (as if issued by a court or judge).', chinese: '在这个语境中，“decree”用于表达“法令；判决；天意”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deflect', term: 'deflect', normalizedTerm: 'deflect', partOfSpeech: ['verb'], ipa: '/dɪ\'flekt/',
    chineseShort: '转移；使偏斜', chineseExplanation: '表示“转移；使偏斜”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Turn from a straight course, fixed direction, or line of interest.',
    examples: [{ english: 'In this context, the word "deflect" is used to mean turn from a straight course, fixed direction, or line of interest.', chinese: '在这个语境中，“deflect”用于表达“转移；使偏斜”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'detain', term: 'detain', normalizedTerm: 'detain', partOfSpeech: ['verb'], ipa: '/dɪ\'teɪn/',
    chineseShort: '扣留；扣押；耽搁', chineseExplanation: '表示“扣留；扣押；耽搁”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Deprive of freedom; take into confinement.',
    examples: [{ english: 'In this context, the word "detain" is used to mean deprive of freedom; take into confinement.', chinese: '在这个语境中，“detain”用于表达“扣留；扣押；耽搁”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deteriorate', term: 'deteriorate', normalizedTerm: 'deteriorate', partOfSpeech: ['verb'], ipa: '/dɪˈtɪriəreɪt/',
    chineseShort: '(使)恶化', chineseExplanation: '表示“(使)恶化”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Become worse or disintegrate.',
    examples: [{ english: 'In this context, the word "deteriorate" is used to mean become worse or disintegrate.', chinese: '在这个语境中，“deteriorate”用于表达“(使)恶化”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deviate', term: 'deviate', normalizedTerm: 'deviate', partOfSpeech: ['verb', 'adjective'], ipa: '/\'diviət/',
    chineseShort: '脱离；偏离', chineseExplanation: '表示“脱离；偏离”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Turn aside; turn away from.',
    examples: [{ english: 'In this context, the word "deviate" is used to mean turn aside; turn away from.', chinese: '在这个语境中，“deviate”用于表达“脱离；偏离”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'devour', term: 'devour', normalizedTerm: 'devour', partOfSpeech: ['verb'], ipa: '/dɪ\'vaʊr/',
    chineseShort: '吞食；挥霍；吞没', chineseExplanation: '表示“吞食；挥霍；吞没”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Destroy completely.',
    examples: [{ english: 'In this context, the word "devour" is used to mean destroy completely.', chinese: '在这个语境中，“devour”用于表达“吞食；挥霍；吞没”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'diagnose', term: 'diagnose', normalizedTerm: 'diagnose', partOfSpeech: ['verb'], ipa: '/\'daɪəɡ.noʊz/',
    chineseShort: '诊断', chineseExplanation: '表示“诊断”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Determine or distinguish the nature of a problem or an illness through a diagnostic analysis.',
    examples: [{ english: 'In this context, the word "diagnose" is used to mean determine or distinguish the nature of a problem or an illness through a diagnostic analysis.', chinese: '在这个语境中，“diagnose”用于表达“诊断”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dictate', term: 'dictate', normalizedTerm: 'dictate', partOfSpeech: ['verb', 'noun'], ipa: '/\'dɪk.teɪt/',
    chineseShort: '听写；口述；口授', chineseExplanation: '表示“听写；口述；口授”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Say out loud for the purpose of recording.',
    examples: [{ english: 'In this context, the word "dictate" is used to mean say out loud for the purpose of recording.', chinese: '在这个语境中，“dictate”用于表达“听写；口述；口授”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dilute', term: 'dilute', normalizedTerm: 'dilute', partOfSpeech: ['verb', 'adjective'], ipa: '/daɪ\'luːt/',
    chineseShort: '冲淡；稀释', chineseExplanation: '表示“冲淡；稀释”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Lessen the strength or flavor of a solution or mixture.',
    examples: [{ english: 'In this context, the word "dilute" is used to mean lessen the strength or flavor of a solution or mixture.', chinese: '在这个语境中，“dilute”用于表达“冲淡；稀释”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'discern', term: 'discern', normalizedTerm: 'discern', partOfSpeech: ['verb'], ipa: '/dɪ\'sɜrn/',
    chineseShort: '辨别；看清楚；了解', chineseExplanation: '表示“辨别；看清楚；了解”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Detect with the senses.',
    examples: [{ english: 'In this context, the word "discern" is used to mean detect with the senses.', chinese: '在这个语境中，“discern”用于表达“辨别；看清楚；了解”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'disgust', term: 'disgust', normalizedTerm: 'disgust', partOfSpeech: ['noun', 'verb'], ipa: '/dɪs\'ɡʌst/',
    chineseShort: '厌恶；嫌恶', chineseExplanation: '表示“厌恶；嫌恶”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Strong feelings of dislike.',
    examples: [{ english: 'In this context, the word "disgust" is used to mean strong feelings of dislike.', chinese: '在这个语境中，“disgust”用于表达“厌恶；嫌恶”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ditch', term: 'ditch', normalizedTerm: 'ditch', partOfSpeech: ['noun', 'verb'], ipa: '/dɪtʃ/',
    chineseShort: '沟渠', chineseExplanation: '表示“沟渠”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A long narrow excavation in the earth.',
    examples: [{ english: 'In this context, the word "ditch" is used to mean a long narrow excavation in the earth.', chinese: '在这个语境中，“ditch”用于表达“沟渠”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elevate', term: 'elevate', normalizedTerm: 'elevate', partOfSpeech: ['verb'], ipa: '/\'elə.veɪt/',
    chineseShort: '举起；提拔；鼓舞', chineseExplanation: '表示“举起；提拔；鼓舞”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Give a promotion to or assign to a higher position.',
    examples: [{ english: 'In this context, the word "elevate" is used to mean give a promotion to or assign to a higher position.', chinese: '在这个语境中，“elevate”用于表达“举起；提拔；鼓舞”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elicit', term: 'elicit', normalizedTerm: 'elicit', partOfSpeech: ['verb'], ipa: '/ɪ\'lɪsɪt/',
    chineseShort: '引出；推导出；引起', chineseExplanation: '表示“引出；推导出；引起”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Derive by reason.',
    examples: [{ english: 'In this context, the word "elicit" is used to mean derive by reason.', chinese: '在这个语境中，“elicit”用于表达“引出；推导出；引起”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'emigrate', term: 'emigrate', normalizedTerm: 'emigrate', partOfSpeech: ['verb'], ipa: '/\'emɪ.ɡreɪt/',
    chineseShort: '(使)移居；(使)移民', chineseExplanation: '表示“(使)移居；(使)移民”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Leave one\'s country of residence for a new one.',
    examples: [{ english: 'In this context, the word "emigrate" is used to mean leave one\'s country of residence for a new one.', chinese: '在这个语境中，“emigrate”用于表达“(使)移居；(使)移民”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'endow', term: 'endow', normalizedTerm: 'endow', partOfSpeech: ['verb'], ipa: '/ɪn\'daʊ/',
    chineseShort: '捐赠；捐助；赋予', chineseExplanation: '表示“捐赠；捐助；赋予”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Give qualities or abilities to.',
    examples: [{ english: 'In this context, the word "endow" is used to mean give qualities or abilities to.', chinese: '在这个语境中，“endow”用于表达“捐赠；捐助；赋予”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'enlighten', term: 'enlighten', normalizedTerm: 'enlighten', partOfSpeech: ['verb'], ipa: '/ɪn\'laɪt(ə)n/',
    chineseShort: '教育；启发；启蒙', chineseExplanation: '表示“教育；启发；启蒙”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make understand.',
    examples: [{ english: 'In this context, the word "enlighten" is used to mean make understand.', chinese: '在这个语境中，“enlighten”用于表达“教育；启发；启蒙”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'entail', term: 'entail', normalizedTerm: 'entail', partOfSpeech: ['verb', 'noun'], ipa: '/ɪn\'teɪl/',
    chineseShort: '使成为必需；需要；使承担', chineseExplanation: '表示“使成为必需；需要；使承担”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Have as a logical consequence.',
    examples: [{ english: 'In this context, the word "entail" is used to mean have as a logical consequence.', chinese: '在这个语境中，“entail”用于表达“使成为必需；需要；使承担”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'epidemic', term: 'epidemic', normalizedTerm: 'epidemic', partOfSpeech: ['noun', 'adjective'], ipa: '/.epɪ\'demɪk/',
    chineseShort: '传染病；流行病', chineseExplanation: '表示“传染病；流行病”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A widespread outbreak of an infectious disease; many people are infected at the same time.',
    examples: [{ english: 'In this context, the word "epidemic" is used to mean a widespread outbreak of an infectious disease; many people are infected at the same time.', chinese: '在这个语境中，“epidemic”用于表达“传染病；流行病”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'epoch', term: 'epoch', normalizedTerm: 'epoch', partOfSpeech: ['noun'], ipa: '/\'iːpɒk/',
    chineseShort: '新纪元；时代；时期', chineseExplanation: '表示“新纪元；时代；时期”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(astronomy) an arbitrarily fixed date that is the point in time relative to which information (as coordinates of a celestial body) is recorded.',
    examples: [{ english: 'In this context, the word "epoch" is used to mean (astronomy) an arbitrarily fixed date that is the point in time relative to which information (as coordinates of a celestial body) is recorded.', chinese: '在这个语境中，“epoch”用于表达“新纪元；时代；时期”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'eradicate', term: 'eradicate', normalizedTerm: 'eradicate', partOfSpeech: ['verb'], ipa: '/iˈrædiˌkeɪt/',
    chineseShort: '根除；扑灭；根绝', chineseExplanation: '表示“根除；扑灭；根绝”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Kill in large numbers.',
    examples: [{ english: 'In this context, the word "eradicate" is used to mean kill in large numbers.', chinese: '在这个语境中，“eradicate”用于表达“根除；扑灭；根绝”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'escort', term: 'escort', normalizedTerm: 'escort', partOfSpeech: ['noun', 'verb'], ipa: '/\'es.kɔrt/',
    chineseShort: '护送者；护卫者；护航舰', chineseExplanation: '表示“护送者；护卫者；护航舰”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of accompanying someone or something in order to protect them.',
    examples: [{ english: 'In this context, the word "escort" is used to mean the act of accompanying someone or something in order to protect them.', chinese: '在这个语境中，“escort”用于表达“护送者；护卫者；护航舰”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'evaporate', term: 'evaporate', normalizedTerm: 'evaporate', partOfSpeech: ['verb'], ipa: '/ɪ\'væpə.reɪt/',
    chineseShort: '蒸发；失去水分；消失', chineseExplanation: '表示“蒸发；失去水分；消失”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Lose or cause to lose liquid by vaporization leaving a more concentrated residue.',
    examples: [{ english: 'In this context, the word "evaporate" is used to mean lose or cause to lose liquid by vaporization leaving a more concentrated residue.', chinese: '在这个语境中，“evaporate”用于表达“蒸发；失去水分；消失”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'evoke', term: 'evoke', normalizedTerm: 'evoke', partOfSpeech: ['verb'], ipa: '/ɪ\'voʊk/',
    chineseShort: '唤起；引起；召(魂)', chineseExplanation: '表示“唤起；引起；召(魂)”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Call forth (emotions, feelings, and responses).',
    examples: [{ english: 'In this context, the word "evoke" is used to mean call forth (emotions, feelings, and responses).', chinese: '在这个语境中，“evoke”用于表达“唤起；引起；召(魂)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'exemplify', term: 'exemplify', normalizedTerm: 'exemplify', partOfSpeech: ['verb'], ipa: '/ɪɡ\'zemplɪ.faɪ/',
    chineseShort: '例证；例示', chineseExplanation: '表示“例证；例示”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be characteristic of.',
    examples: [{ english: 'In this context, the word "exemplify" is used to mean be characteristic of.', chinese: '在这个语境中，“exemplify”用于表达“例证；例示”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'exempt', term: 'exempt', normalizedTerm: 'exempt', partOfSpeech: ['noun', 'adjective'], ipa: '/ɪɡ\'zempt/',
    chineseShort: '免税者；被免除义务者', chineseExplanation: '表示“免税者；被免除义务者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Grant relief or an exemption from a rule or requirement to.',
    examples: [{ english: 'In this context, the word "exempt" is used to mean grant relief or an exemption from a rule or requirement to.', chinese: '在这个语境中，“exempt”用于表达“免税者；被免除义务者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'exert', term: 'exert', normalizedTerm: 'exert', partOfSpeech: ['verb'], ipa: '/ɪɡ\'zɜrt/',
    chineseShort: '发挥；运用；施以影响', chineseExplanation: '表示“发挥；运用；施以影响”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Put to use.',
    examples: [{ english: 'In this context, the word "exert" is used to mean put to use.', chinese: '在这个语境中，“exert”用于表达“发挥；运用；施以影响”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'exposition', term: 'exposition', normalizedTerm: 'exposition', partOfSpeech: ['noun'], ipa: '/.ekspə\'zɪʃ(ə)n/',
    chineseShort: '阐述；讲解；说明', chineseExplanation: '表示“阐述；讲解；说明”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A systematic interpretation or explanation (usually written) of a specific topic.',
    examples: [{ english: 'In this context, the word "exposition" is used to mean a systematic interpretation or explanation (usually written) of a specific topic.', chinese: '在这个语境中，“exposition”用于表达“阐述；讲解；说明”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'fatigue', term: 'fatigue', normalizedTerm: 'fatigue', partOfSpeech: ['noun', 'verb'], ipa: '/fə\'tiɡ/',
    chineseShort: '疲乏；疲劳', chineseExplanation: '表示“疲乏；疲劳”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Temporary loss of strength and energy resulting from hard physical or mental work.',
    examples: [{ english: 'In this context, the word "fatigue" is used to mean temporary loss of strength and energy resulting from hard physical or mental work.', chinese: '在这个语境中，“fatigue”用于表达“疲乏；疲劳”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flare', term: 'flare', normalizedTerm: 'flare', partOfSpeech: ['noun', 'verb'], ipa: '/fler/',
    chineseShort: '闪光；闪耀', chineseExplanation: '表示“闪光；闪耀”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A shape that spreads outward.',
    examples: [{ english: 'In this context, the word "flare" is used to mean a shape that spreads outward.', chinese: '在这个语境中，“flare”用于表达“闪光；闪耀”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flush', term: 'flush', normalizedTerm: 'flush', partOfSpeech: ['noun', 'adjective'], ipa: '/flʌʃ/',
    chineseShort: '流溢；面红；旺盛', chineseExplanation: '表示“流溢；面红；旺盛”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A poker hand with all 5 cards in the same suit.',
    examples: [{ english: 'In this context, the word "flush" is used to mean a poker hand with all 5 cards in the same suit.', chinese: '在这个语境中，“flush”用于表达“流溢；面红；旺盛”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'forge', term: 'forge', normalizedTerm: 'forge', partOfSpeech: ['noun', 'verb'], ipa: '/fɒːdʒ/',
    chineseShort: '熔炉；铁工厂', chineseExplanation: '表示“熔炉；铁工厂”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Furnace consisting of a special hearth where metal is heated before shaping.',
    examples: [{ english: 'In this context, the word "forge" is used to mean furnace consisting of a special hearth where metal is heated before shaping.', chinese: '在这个语境中，“forge”用于表达“熔炉；铁工厂”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fracture', term: 'fracture', normalizedTerm: 'fracture', partOfSpeech: ['noun', 'verb'], ipa: '/\'fræktʃə(r)/',
    chineseShort: '破碎；骨折', chineseExplanation: '表示“破碎；骨折”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Breaking of hard tissue such as bone.',
    examples: [{ english: 'In this context, the word "fracture" is used to mean breaking of hard tissue such as bone.', chinese: '在这个语境中，“fracture”用于表达“破碎；骨折”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'frail', term: 'frail', normalizedTerm: 'frail', partOfSpeech: ['adjective', 'noun'], ipa: '/freɪl/',
    chineseShort: '脆弱的；虚弱的；意志薄弱的', chineseExplanation: '表示“脆弱的；虚弱的；意志薄弱的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Physically weak.',
    examples: [{ english: 'In this context, the word "frail" is used to mean physically weak.', chinese: '在这个语境中，“frail”用于表达“脆弱的；虚弱的；意志薄弱的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'freight', term: 'freight', normalizedTerm: 'freight', partOfSpeech: ['noun', 'verb'], ipa: '/freɪt/',
    chineseShort: '船货；运费；货运', chineseExplanation: '表示“船货；运费；货运”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Transporting goods commercially at rates cheaper than express rates.',
    examples: [{ english: 'In this context, the word "freight" is used to mean transporting goods commercially at rates cheaper than express rates.', chinese: '在这个语境中，“freight”用于表达“船货；运费；货运”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'frustrate', term: 'frustrate', normalizedTerm: 'frustrate', partOfSpeech: ['verb', 'adjective'], ipa: '/\'frʌ.streɪt/',
    chineseShort: '挫败；击败；破坏', chineseExplanation: '表示“挫败；击败；破坏”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Hinder or prevent (the efforts, plans, or desires) of.',
    examples: [{ english: 'In this context, the word "frustrate" is used to mean hinder or prevent (the efforts, plans, or desires) of.', chinese: '在这个语境中，“frustrate”用于表达“挫败；击败；破坏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gracious', term: 'gracious', normalizedTerm: 'gracious', partOfSpeech: ['adjective'], ipa: '/\'ɡreɪʃəs/',
    chineseShort: '亲切的；慈善的', chineseExplanation: '表示“亲切的；慈善的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Characterized by charm, good taste, and generosity of spirit.',
    examples: [{ english: 'In this context, the word "gracious" is used to mean characterized by charm, good taste, and generosity of spirit.', chinese: '在这个语境中，“gracious”用于表达“亲切的；慈善的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'graze', term: 'graze', normalizedTerm: 'graze', partOfSpeech: ['noun', 'verb'], ipa: '/ɡreɪz/',
    chineseShort: '吃草；放牧；擦伤', chineseExplanation: '表示“吃草；放牧；擦伤”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A superficial abrasion.',
    examples: [{ english: 'In this context, the word "graze" is used to mean a superficial abrasion.', chinese: '在这个语境中，“graze”用于表达“吃草；放牧；擦伤”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'grind', term: 'grind', normalizedTerm: 'grind', partOfSpeech: ['noun', 'verb'], ipa: '/ɡraɪnd/',
    chineseShort: '磨；碾；苦差', chineseExplanation: '表示“磨；碾；苦差”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The grade of particle fineness to which a substance is ground.',
    examples: [{ english: 'In this context, the word "grind" is used to mean the grade of particle fineness to which a substance is ground.', chinese: '在这个语境中，“grind”用于表达“磨；碾；苦差”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'grope', term: 'grope', normalizedTerm: 'grope', partOfSpeech: ['verb', 'noun'], ipa: '/ɡroʊp/',
    chineseShort: '摸索', chineseExplanation: '表示“摸索”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Feel about uncertainly or blindly.',
    examples: [{ english: 'In this context, the word "grope" is used to mean feel about uncertainly or blindly.', chinese: '在这个语境中，“grope”用于表达“摸索”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'heave', term: 'heave', normalizedTerm: 'heave', partOfSpeech: ['noun', 'verb'], ipa: '/hiv/',
    chineseShort: '举；抛；起伏', chineseExplanation: '表示“举；抛；起伏”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An upward movement (especially a rhythmical rising and falling).',
    examples: [{ english: 'In this context, the word "heave" is used to mean an upward movement (especially a rhythmical rising and falling).', chinese: '在这个语境中，“heave”用于表达“举；抛；起伏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hinge', term: 'hinge', normalizedTerm: 'hinge', partOfSpeech: ['noun', 'verb'], ipa: '/hɪndʒ/',
    chineseShort: '铰链；关键；枢纽', chineseExplanation: '表示“铰链；关键；枢纽”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A joint that holds two parts together so that one can swing relative to the other.',
    examples: [{ english: 'In this context, the word "hinge" is used to mean a joint that holds two parts together so that one can swing relative to the other.', chinese: '在这个语境中，“hinge”用于表达“铰链；关键；枢纽”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hostile', term: 'hostile', normalizedTerm: 'hostile', partOfSpeech: ['adjective', 'noun'], ipa: '/\'hɑst(ə)l/',
    chineseShort: '敌人的；怀敌意的；敌对的', chineseExplanation: '表示“敌人的；怀敌意的；敌对的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Characterized by enmity or ill will.',
    examples: [{ english: 'In this context, the word "hostile" is used to mean characterized by enmity or ill will.', chinese: '在这个语境中，“hostile”用于表达“敌人的；怀敌意的；敌对的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hull', term: 'hull', normalizedTerm: 'hull', partOfSpeech: ['noun', 'verb'], ipa: '/hʌl/',
    chineseShort: '壳；皮；船体', chineseExplanation: '表示“壳；皮；船体”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Dry outer covering of a fruit or seed or nut.',
    examples: [{ english: 'In this context, the word "hull" is used to mean dry outer covering of a fruit or seed or nut.', chinese: '在这个语境中，“hull”用于表达“壳；皮；船体”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hurricane', term: 'hurricane', normalizedTerm: 'hurricane', partOfSpeech: ['noun'], ipa: '/\'hʌrɪ.keɪn/',
    chineseShort: '飓风；暴风；暴风雨', chineseExplanation: '表示“飓风；暴风；暴风雨”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A severe tropical cyclone usually with heavy rains and winds moving a 73-136 knots (12 on the Beaufort scale).',
    examples: [{ english: 'In this context, the word "hurricane" is used to mean a severe tropical cyclone usually with heavy rains and winds moving a 73-136 knots (12 on the Beaufort scale).', chinese: '在这个语境中，“hurricane”用于表达“飓风；暴风；暴风雨”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ignite', term: 'ignite', normalizedTerm: 'ignite', partOfSpeech: ['verb'], ipa: '/ɪɡ\'naɪt/',
    chineseShort: '点燃；使灼热；使兴奋', chineseExplanation: '表示“点燃；使灼热；使兴奋”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to start burning; subject to fire or great heat.',
    examples: [{ english: 'In this context, the word "ignite" is used to mean cause to start burning; subject to fire or great heat.', chinese: '在这个语境中，“ignite”用于表达“点燃；使灼热；使兴奋”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'immense', term: 'immense', normalizedTerm: 'immense', partOfSpeech: ['adjective'], ipa: '/ɪˈmens/',
    chineseShort: '极广大的；无边的；非常好的', chineseExplanation: '表示“极广大的；无边的；非常好的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Unusually great in size or amount or degree or especially extent or scope.',
    examples: [{ english: 'In this context, the word "immense" is used to mean unusually great in size or amount or degree or especially extent or scope.', chinese: '在这个语境中，“immense”用于表达“极广大的；无边的；非常好的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'immune', term: 'immune', normalizedTerm: 'immune', partOfSpeech: ['adjective', 'noun'], ipa: '/ɪ\'mjun/',
    chineseShort: '免疫的；免除的；不受影响的', chineseExplanation: '表示“免疫的；免除的；不受影响的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to the condition of immunity.',
    examples: [{ english: 'In this context, the word "immune" is used to mean relating to the condition of immunity.', chinese: '在这个语境中，“immune”用于表达“免疫的；免除的；不受影响的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inclusive', term: 'inclusive', normalizedTerm: 'inclusive', partOfSpeech: ['adjective'], ipa: '/ɪn\'klusɪv/',
    chineseShort: '包含的；包括的', chineseExplanation: '表示“包含的；包括的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Including much or everything; and especially including stated limits.',
    examples: [{ english: 'In this context, the word "inclusive" is used to mean including much or everything; and especially including stated limits.', chinese: '在这个语境中，“inclusive”用于表达“包含的；包括的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inferior', term: 'inferior', normalizedTerm: 'inferior', partOfSpeech: ['adjective', 'noun'], ipa: '/ɪn\'fɪriər/',
    chineseShort: '次等的；较差的；下方的', chineseExplanation: '表示“次等的；较差的；下方的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or characteristic of low rank or importance.',
    examples: [{ english: 'In this context, the word "inferior" is used to mean of or characteristic of low rank or importance.', chinese: '在这个语境中，“inferior”用于表达“次等的；较差的；下方的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inflict', term: 'inflict', normalizedTerm: 'inflict', partOfSpeech: ['verb'], ipa: '/ɪn\'flɪkt/',
    chineseShort: '施以；加害；使承受', chineseExplanation: '表示“施以；加害；使承受”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Impose something unpleasant.',
    examples: [{ english: 'In this context, the word "inflict" is used to mean impose something unpleasant.', chinese: '在这个语境中，“inflict”用于表达“施以；加害；使承受”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intelligible', term: 'intelligible', normalizedTerm: 'intelligible', partOfSpeech: ['adjective'], ipa: '/ɪn\'telɪdʒəb(ə)l/',
    chineseShort: '可理解的；易理解的；纯概念性的', chineseExplanation: '表示“可理解的；易理解的；纯概念性的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Well articulated or enunciated, and loud enough to be heard distinctly.',
    examples: [{ english: 'In this context, the word "intelligible" is used to mean well articulated or enunciated, and loud enough to be heard distinctly.', chinese: '在这个语境中，“intelligible”用于表达“可理解的；易理解的；纯概念性的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intensify', term: 'intensify', normalizedTerm: 'intensify', partOfSpeech: ['verb'], ipa: '/ɪn\'tensɪ.faɪ/',
    chineseShort: '加强', chineseExplanation: '表示“加强”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make more intense, stronger, or more marked.',
    examples: [{ english: 'In this context, the word "intensify" is used to mean make more intense, stronger, or more marked.', chinese: '在这个语境中，“intensify”用于表达“加强”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intimidate', term: 'intimidate', normalizedTerm: 'intimidate', partOfSpeech: ['verb'], ipa: '/ɪn\'tɪmɪ.deɪt/',
    chineseShort: '威胁；恐吓', chineseExplanation: '表示“威胁；恐吓”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make timid or fearful.',
    examples: [{ english: 'In this context, the word "intimidate" is used to mean make timid or fearful.', chinese: '在这个语境中，“intimidate”用于表达“威胁；恐吓”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intrigue', term: 'intrigue', normalizedTerm: 'intrigue', partOfSpeech: ['noun', 'verb'], ipa: '/\'ɪn.triɡ/',
    chineseShort: '阴谋；复杂的事', chineseExplanation: '表示“阴谋；复杂的事”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A crafty and involved plot to achieve your (usually sinister) ends.',
    examples: [{ english: 'In this context, the word "intrigue" is used to mean a crafty and involved plot to achieve your (usually sinister) ends.', chinese: '在这个语境中，“intrigue”用于表达“阴谋；复杂的事”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'kidnap', term: 'kidnap', normalizedTerm: 'kidnap', partOfSpeech: ['verb'], ipa: '/\'kɪd.næp/',
    chineseShort: '绑架；诱拐；拐骗', chineseExplanation: '表示“绑架；诱拐；拐骗”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Take away to an undisclosed location against their will and usually in order to extract a ransom.',
    examples: [{ english: 'In this context, the word "kidnap" is used to mean take away to an undisclosed location against their will and usually in order to extract a ransom.', chinese: '在这个语境中，“kidnap”用于表达“绑架；诱拐；拐骗”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'kindle', term: 'kindle', normalizedTerm: 'kindle', partOfSpeech: ['verb'], ipa: '/\'kɪnd(ə)l/',
    chineseShort: '点燃；使着火；引起', chineseExplanation: '表示“点燃；使着火；引起”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Catch fire.',
    examples: [{ english: 'In this context, the word "kindle" is used to mean catch fire.', chinese: '在这个语境中，“kindle”用于表达“点燃；使着火；引起”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'maritime', term: 'maritime', normalizedTerm: 'maritime', partOfSpeech: ['adjective'], ipa: '/\'merə.taɪm/',
    chineseShort: '海的；海上的；海事的', chineseExplanation: '表示“海的；海上的；海事的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Bordering on or living or characteristic of those near the sea.',
    examples: [{ english: 'In this context, the word "maritime" is used to mean bordering on or living or characteristic of those near the sea.', chinese: '在这个语境中，“maritime”用于表达“海的；海上的；海事的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'militant', term: 'militant', normalizedTerm: 'militant', partOfSpeech: ['adjective', 'noun'], ipa: '/\'mɪlɪtənt/',
    chineseShort: '好战的', chineseExplanation: '表示“好战的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Disposed to warfare or hard-line policies.',
    examples: [{ english: 'In this context, the word "militant" is used to mean disposed to warfare or hard-line policies.', chinese: '在这个语境中，“militant”用于表达“好战的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'mingle', term: 'mingle', normalizedTerm: 'mingle', partOfSpeech: ['verb'], ipa: '/\'mɪŋɡ(ə)l/',
    chineseShort: '(使)混合', chineseExplanation: '表示“(使)混合”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Get involved or mixed-up with.',
    examples: [{ english: 'In this context, the word "mingle" is used to mean get involved or mixed-up with.', chinese: '在这个语境中，“mingle”用于表达“(使)混合”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'moor', term: 'moor', normalizedTerm: 'moor', partOfSpeech: ['noun', 'verb'], ipa: '/mʊr/',
    chineseShort: 'n.荒野；旷野', chineseExplanation: '表示“n.荒野；旷野”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'One of the Muslim people of north Africa; of mixed Arab and Berber descent; converted to Islam in the 8th century; conqueror of Spain in the 8th century.',
    examples: [{ english: 'In this context, the word "moor" is used to mean one of the Muslim people of north Africa; of mixed Arab and Berber descent; converted to Islam in the 8th century; conqueror of Spain in the 8th century.', chinese: '在这个语境中，“moor”用于表达“n.荒野；旷野”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'multitude', term: 'multitude', normalizedTerm: 'multitude', partOfSpeech: ['noun'], ipa: '/\'mʌltɪ.tud/',
    chineseShort: '多数；群众', chineseExplanation: '表示“多数；群众”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A large gathering of people.',
    examples: [{ english: 'In this context, the word "multitude" is used to mean a large gathering of people.', chinese: '在这个语境中，“multitude”用于表达“多数；群众”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'nominate', term: 'nominate', normalizedTerm: 'nominate', partOfSpeech: ['verb'], ipa: '/\'nɑmɪ.neɪt/',
    chineseShort: '提名；任命；命名', chineseExplanation: '表示“提名；任命；命名”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Propose as a candidate for some honor.',
    examples: [{ english: 'In this context, the word "nominate" is used to mean propose as a candidate for some honor.', chinese: '在这个语境中，“nominate”用于表达“提名；任命；命名”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'nurture', term: 'nurture', normalizedTerm: 'nurture', partOfSpeech: ['noun', 'verb'], ipa: '/\'nɜrtʃər/',
    chineseShort: '养育；营养物；培育', chineseExplanation: '表示“养育；营养物；培育”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The properties acquired as a consequence of the way you were treated as a child.',
    examples: [{ english: 'In this context, the word "nurture" is used to mean the properties acquired as a consequence of the way you were treated as a child.', chinese: '在这个语境中，“nurture”用于表达“养育；营养物；培育”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'oblige', term: 'oblige', normalizedTerm: 'oblige', partOfSpeech: ['verb'], ipa: '/ə\'blaɪdʒ/',
    chineseShort: '强制；施恩惠于；使感激', chineseExplanation: '表示“强制；施恩惠于；使感激”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Bind by an obligation; cause to be indebted.',
    examples: [{ english: 'In this context, the word "oblige" is used to mean bind by an obligation; cause to be indebted.', chinese: '在这个语境中，“oblige”用于表达“强制；施恩惠于；使感激”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'obscure', term: 'obscure', normalizedTerm: 'obscure', partOfSpeech: ['adjective', 'verb'], ipa: '/əb\'skjʊr/',
    chineseShort: '模糊的；昏暗的；难解的', chineseExplanation: '表示“模糊的；昏暗的；难解的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Make less visible or unclear.',
    examples: [{ english: 'In this context, the word "obscure" is used to mean make less visible or unclear.', chinese: '在这个语境中，“obscure”用于表达“模糊的；昏暗的；难解的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'obstinate', term: 'obstinate', normalizedTerm: 'obstinate', partOfSpeech: ['adjective', 'verb'], ipa: '/\'ɑbstɪnət/',
    chineseShort: '倔强的；顽固的；不让步的', chineseExplanation: '表示“倔强的；顽固的；不让步的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Persist stubbornly.',
    examples: [{ english: 'In this context, the word "obstinate" is used to mean persist stubbornly.', chinese: '在这个语境中，“obstinate”用于表达“倔强的；顽固的；不让步的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'offspring', term: 'offspring', normalizedTerm: 'offspring', partOfSpeech: ['noun'], ipa: '/\'ɔf.sprɪŋ/',
    chineseShort: '子孙；后代；产物', chineseExplanation: '表示“子孙；后代；产物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The immediate descendants of a person.',
    examples: [{ english: 'In this context, the word "offspring" is used to mean the immediate descendants of a person.', chinese: '在这个语境中，“offspring”用于表达“子孙；后代；产物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'optimum', term: 'optimum', normalizedTerm: 'optimum', partOfSpeech: ['noun', 'adjective'], ipa: '/\'ɑptɪməm/',
    chineseShort: '最适条件；最佳效果', chineseExplanation: '表示“最适条件；最佳效果”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Most favorable conditions or greatest degree or amount possible under given circumstances.',
    examples: [{ english: 'In this context, the word "optimum" is used to mean most favorable conditions or greatest degree or amount possible under given circumstances.', chinese: '在这个语境中，“optimum”用于表达“最适条件；最佳效果”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'overdue', term: 'overdue', normalizedTerm: 'overdue', partOfSpeech: ['adjective'], ipa: '/.oʊvər\'du/',
    chineseShort: '过期的；未兑的；迟到的', chineseExplanation: '表示“过期的；未兑的；迟到的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Past due; not paid at the scheduled time.',
    examples: [{ english: 'In this context, the word "overdue" is used to mean past due; not paid at the scheduled time.', chinese: '在这个语境中，“overdue”用于表达“过期的；未兑的；迟到的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'overt', term: 'overt', normalizedTerm: 'overt', partOfSpeech: ['adjective'], ipa: '/\'oʊ.vɜrt/',
    chineseShort: '明显的；公然的；蓄意的', chineseExplanation: '表示“明显的；公然的；蓄意的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Open and observable; not secret or hidden.',
    examples: [{ english: 'In this context, the word "overt" is used to mean open and observable; not secret or hidden.', chinese: '在这个语境中，“overt”用于表达“明显的；公然的；蓄意的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pamphlet', term: 'pamphlet', normalizedTerm: 'pamphlet', partOfSpeech: ['noun'], ipa: '/\'pæmflət/',
    chineseShort: '小册子；活页文选', chineseExplanation: '表示“小册子；活页文选”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A small book usually having a paper cover.',
    examples: [{ english: 'In this context, the word "pamphlet" is used to mean a small book usually having a paper cover.', chinese: '在这个语境中，“pamphlet”用于表达“小册子；活页文选”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'patent', term: 'patent', normalizedTerm: 'patent', partOfSpeech: ['noun', 'adjective'], ipa: '/\'peɪt(ə)nt/',
    chineseShort: '专利权；许可证；执照', chineseExplanation: '表示“专利权；许可证；执照”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A document granting an inventor sole rights to an invention.',
    examples: [{ english: 'In this context, the word "patent" is used to mean a document granting an inventor sole rights to an invention.', chinese: '在这个语境中，“patent”用于表达“专利权；许可证；执照”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'peril', term: 'peril', normalizedTerm: 'peril', partOfSpeech: ['noun', 'verb'], ipa: '/\'perəl/',
    chineseShort: '危险；冒...之险；险境', chineseExplanation: '表示“危险；冒...之险；险境”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A source of danger; a possibility of incurring loss or misfortune.',
    examples: [{ english: 'In this context, the word "peril" is used to mean a source of danger; a possibility of incurring loss or misfortune.', chinese: '在这个语境中，“peril”用于表达“危险；冒...之险；险境”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'petition', term: 'petition', normalizedTerm: 'petition', partOfSpeech: ['noun', 'verb'], ipa: '/pə\'tɪʃ(ə)n/',
    chineseShort: '请愿；诉状；陈情书', chineseExplanation: '表示“请愿；诉状；陈情书”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Write a petition for something to somebody; request formally and in writing.',
    examples: [{ english: 'In this context, the word "petition" is used to mean write a petition for something to somebody; request formally and in writing.', chinese: '在这个语境中，“petition”用于表达“请愿；诉状；陈情书”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pinch', term: 'pinch', normalizedTerm: 'pinch', partOfSpeech: ['noun', 'verb'], ipa: '/pɪntʃ/',
    chineseShort: '捏；拧；撮', chineseExplanation: '表示“捏；拧；撮”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A painful or straitened circumstance.',
    examples: [{ english: 'In this context, the word "pinch" is used to mean a painful or straitened circumstance.', chinese: '在这个语境中，“pinch”用于表达“捏；拧；撮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plunder', term: 'plunder', normalizedTerm: 'plunder', partOfSpeech: ['noun', 'verb'], ipa: '/\'plʌndər/',
    chineseShort: '抢夺；掠夺品；战利品', chineseExplanation: '表示“抢夺；掠夺品；战利品”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Steal goods; take as spoils.',
    examples: [{ english: 'In this context, the word "plunder" is used to mean steal goods; take as spoils.', chinese: '在这个语境中，“plunder”用于表达“抢夺；掠夺品；战利品”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plunge', term: 'plunge', normalizedTerm: 'plunge', partOfSpeech: ['noun', 'verb'], ipa: '/plʌndʒ/',
    chineseShort: '钻进；跳进；跳水', chineseExplanation: '表示“钻进；跳进；跳水”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A steep and rapid fall.',
    examples: [{ english: 'In this context, the word "plunge" is used to mean a steep and rapid fall.', chinese: '在这个语境中，“plunge”用于表达“钻进；跳进；跳水”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'polar', term: 'polar', normalizedTerm: 'polar', partOfSpeech: ['adjective', 'noun'], ipa: '/\'poʊlər/',
    chineseShort: '两极的；极地的；正好相反的', chineseExplanation: '表示“两极的；极地的；正好相反的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having a pair of equal and opposite charges.',
    examples: [{ english: 'In this context, the word "polar" is used to mean having a pair of equal and opposite charges.', chinese: '在这个语境中，“polar”用于表达“两极的；极地的；正好相反的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'porcelain', term: 'porcelain', normalizedTerm: 'porcelain', partOfSpeech: ['noun', 'adjective'], ipa: '/\'pɔrs(ə)lɪn/',
    chineseShort: '瓷器；瓷', chineseExplanation: '表示“瓷器；瓷”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Ceramic ware made of a more or less translucent ceramic.',
    examples: [{ english: 'In this context, the word "porcelain" is used to mean ceramic ware made of a more or less translucent ceramic.', chinese: '在这个语境中，“porcelain”用于表达“瓷器；瓷”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'portray', term: 'portray', normalizedTerm: 'portray', partOfSpeech: ['verb'], ipa: '/pɔr\'treɪ/',
    chineseShort: '描绘；描写；描绘...的肖像', chineseExplanation: '表示“描绘；描写；描绘...的肖像”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Portray in words.',
    examples: [{ english: 'In this context, the word "portray" is used to mean portray in words.', chinese: '在这个语境中，“portray”用于表达“描绘；描写；描绘...的肖像”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'preach', term: 'preach', normalizedTerm: 'preach', partOfSpeech: ['verb', 'noun'], ipa: '/pritʃ/',
    chineseShort: '传道；讲道；说教', chineseExplanation: '表示“传道；讲道；说教”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Deliver a sermon.',
    examples: [{ english: 'In this context, the word "preach" is used to mean deliver a sermon.', chinese: '在这个语境中，“preach”用于表达“传道；讲道；说教”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'precipitate', term: 'precipitate', normalizedTerm: 'precipitate', partOfSpeech: ['noun', 'verb'], ipa: '/prɪ\'sɪpɪ.teɪt/',
    chineseShort: '沉淀物；凝结物；结果', chineseExplanation: '表示“沉淀物；凝结物；结果”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A precipitated solid substance in suspension or after settling or filtering.',
    examples: [{ english: 'In this context, the word "precipitate" is used to mean a precipitated solid substance in suspension or after settling or filtering.', chinese: '在这个语境中，“precipitate”用于表达“沉淀物；凝结物；结果”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'quench', term: 'quench', normalizedTerm: 'quench', partOfSpeech: ['verb'], ipa: '/kwentʃ/',
    chineseShort: '熄灭；结束；使冷却', chineseExplanation: '表示“熄灭；结束；使冷却”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Satisfy (thirst).',
    examples: [{ english: 'In this context, the word "quench" is used to mean satisfy (thirst).', chinese: '在这个语境中，“quench”用于表达“熄灭；结束；使冷却”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'recipient', term: 'recipient', normalizedTerm: 'recipient', partOfSpeech: ['adjective', 'noun'], ipa: '/rɪ\'sɪpiənt/',
    chineseShort: '领受的；容易接受的；感受性强的', chineseExplanation: '表示“领受的；容易接受的；感受性强的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'A person who receives something.',
    examples: [{ english: 'In this context, the word "recipient" is used to mean a person who receives something.', chinese: '在这个语境中，“recipient”用于表达“领受的；容易接受的；感受性强的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reciprocal', term: 'reciprocal', normalizedTerm: 'reciprocal', partOfSpeech: ['adjective', 'noun'], ipa: '/rɪ\'sɪprək(ə)l/',
    chineseShort: '互惠的；相互的；相等的', chineseExplanation: '表示“互惠的；相互的；相等的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Concerning each of two or more persons or things; especially given or done in return.',
    examples: [{ english: 'In this context, the word "reciprocal" is used to mean concerning each of two or more persons or things; especially given or done in return.', chinese: '在这个语境中，“reciprocal”用于表达“互惠的；相互的；相等的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reimburse', term: 'reimburse', normalizedTerm: 'reimburse', partOfSpeech: ['verb'], ipa: '/.riɪm\'bɜrs/',
    chineseShort: '付还；偿还；赔偿', chineseExplanation: '表示“付还；偿还；赔偿”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Pay back for some expense incurred.',
    examples: [{ english: 'In this context, the word "reimburse" is used to mean pay back for some expense incurred.', chinese: '在这个语境中，“reimburse”用于表达“付还；偿还；赔偿”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'remnant', term: 'remnant', normalizedTerm: 'remnant', partOfSpeech: ['noun', 'adjective'], ipa: '/\'remnənt/',
    chineseShort: '剩余；零料；遗迹', chineseExplanation: '表示“剩余；零料；遗迹”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A small part or portion that remains after the main part no longer exists.',
    examples: [{ english: 'In this context, the word "remnant" is used to mean a small part or portion that remains after the main part no longer exists.', chinese: '在这个语境中，“remnant”用于表达“剩余；零料；遗迹”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'repel', term: 'repel', normalizedTerm: 'repel', partOfSpeech: ['verb'], ipa: '/rɪ\'pel/',
    chineseShort: '逐退；抵制；使厌恶', chineseExplanation: '表示“逐退；抵制；使厌恶”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to move back by force or influence.',
    examples: [{ english: 'In this context, the word "repel" is used to mean cause to move back by force or influence.', chinese: '在这个语境中，“repel”用于表达“逐退；抵制；使厌恶”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rupture', term: 'rupture', normalizedTerm: 'rupture', partOfSpeech: ['noun', 'verb'], ipa: '/\'rʌptʃər/',
    chineseShort: '破裂；断裂；裂开', chineseExplanation: '表示“破裂；断裂；裂开”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'State of being torn or burst open.',
    examples: [{ english: 'In this context, the word "rupture" is used to mean state of being torn or burst open.', chinese: '在这个语境中，“rupture”用于表达“破裂；断裂；裂开”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'saddle', term: 'saddle', normalizedTerm: 'saddle', partOfSpeech: ['noun', 'verb'], ipa: '/\'sæd(ə)l/',
    chineseShort: '鞍；马鞍；车座', chineseExplanation: '表示“鞍；马鞍；车座”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A seat for the rider of a horse or camel.',
    examples: [{ english: 'In this context, the word "saddle" is used to mean a seat for the rider of a horse or camel.', chinese: '在这个语境中，“saddle”用于表达“鞍；马鞍；车座”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sanction', term: 'sanction', normalizedTerm: 'sanction', partOfSpeech: ['noun', 'verb'], ipa: '/\'sæŋkʃ(ə)n/',
    chineseShort: '核准；制裁；处罚', chineseExplanation: '表示“核准；制裁；处罚”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Formal and explicit approval.',
    examples: [{ english: 'In this context, the word "sanction" is used to mean formal and explicit approval.', chinese: '在这个语境中，“sanction”用于表达“核准；制裁；处罚”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scorch', term: 'scorch', normalizedTerm: 'scorch', partOfSpeech: ['noun', 'verb'], ipa: '/skɔrtʃ/',
    chineseShort: '烧焦；枯萎', chineseExplanation: '表示“烧焦；枯萎”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A surface burn.',
    examples: [{ english: 'In this context, the word "scorch" is used to mean a surface burn.', chinese: '在这个语境中，“scorch”用于表达“烧焦；枯萎”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scrap', term: 'scrap', normalizedTerm: 'scrap', partOfSpeech: ['noun', 'verb'], ipa: '/skræp/',
    chineseShort: '碎片；残余物；些微', chineseExplanation: '表示“碎片；残余物；些微”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A small piece of something that is left over after the rest has been used.',
    examples: [{ english: 'In this context, the word "scrap" is used to mean a small piece of something that is left over after the rest has been used.', chinese: '在这个语境中，“scrap”用于表达“碎片；残余物；些微”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scrape', term: 'scrape', normalizedTerm: 'scrape', partOfSpeech: ['noun', 'verb'], ipa: '/skreɪp/',
    chineseShort: '刮；擦；挖', chineseExplanation: '表示“刮；擦；挖”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A harsh noise made by scraping.',
    examples: [{ english: 'In this context, the word "scrape" is used to mean a harsh noise made by scraping.', chinese: '在这个语境中，“scrape”用于表达“刮；擦；挖”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shear', term: 'shear', normalizedTerm: 'shear', partOfSpeech: ['noun', 'verb'], ipa: '/ʃɪr/',
    chineseShort: '修剪；剪下的东西；大剪刀', chineseExplanation: '表示“修剪；剪下的东西；大剪刀”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(physics) a deformation of an object in which parallel planes remain parallel but are shifted in a direction parallel to themselves.',
    examples: [{ english: 'In this context, the word "shear" is used to mean (physics) a deformation of an object in which parallel planes remain parallel but are shifted in a direction parallel to themselves.', chinese: '在这个语境中，“shear”用于表达“修剪；剪下的东西；大剪刀”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shrewd', term: 'shrewd', normalizedTerm: 'shrewd', partOfSpeech: ['adjective'], ipa: '/ʃrud/',
    chineseShort: '精明的；锐利的；剧烈的', chineseExplanation: '表示“精明的；锐利的；剧烈的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Marked by practical hardheaded intelligence.',
    examples: [{ english: 'In this context, the word "shrewd" is used to mean marked by practical hardheaded intelligence.', chinese: '在这个语境中，“shrewd”用于表达“精明的；锐利的；剧烈的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shrub', term: 'shrub', normalizedTerm: 'shrub', partOfSpeech: ['noun'], ipa: '/ʃrʌb/',
    chineseShort: '矮树；灌木；果汁甜酒', chineseExplanation: '表示“矮树；灌木；果汁甜酒”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A low woody perennial plant usually having several major stems.',
    examples: [{ english: 'In this context, the word "shrub" is used to mean a low woody perennial plant usually having several major stems.', chinese: '在这个语境中，“shrub”用于表达“矮树；灌木；果汁甜酒”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'simulate', term: 'simulate', normalizedTerm: 'simulate', partOfSpeech: ['verb'], ipa: '/\'sɪmjə.leɪt/',
    chineseShort: '模拟；假装；模仿', chineseExplanation: '表示“模拟；假装；模仿”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make a pretence of.',
    examples: [{ english: 'In this context, the word "simulate" is used to mean make a pretence of.', chinese: '在这个语境中，“simulate”用于表达“模拟；假装；模仿”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'slippery', term: 'slippery', normalizedTerm: 'slippery', partOfSpeech: ['adjective'], ipa: '/\'slɪp(ə)ri/',
    chineseShort: '滑的；光滑的；靠不住的', chineseExplanation: '表示“滑的；光滑的；靠不住的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Causing or tending to cause things to slip or slide.',
    examples: [{ english: 'In this context, the word "slippery" is used to mean causing or tending to cause things to slip or slide.', chinese: '在这个语境中，“slippery”用于表达“滑的；光滑的；靠不住的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'smuggle', term: 'smuggle', normalizedTerm: 'smuggle', partOfSpeech: ['verb'], ipa: '/\'smʌɡ(ə)l/',
    chineseShort: '偷运；走私；私运', chineseExplanation: '表示“偷运；走私；私运”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Import or export without paying customs duties.',
    examples: [{ english: 'In this context, the word "smuggle" is used to mean import or export without paying customs duties.', chinese: '在这个语境中，“smuggle”用于表达“偷运；走私；私运”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'spacious', term: 'spacious', normalizedTerm: 'spacious', partOfSpeech: ['adjective'], ipa: '/\'speɪʃəs/',
    chineseShort: '广大的；宽广的', chineseExplanation: '表示“广大的；宽广的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Very large in expanse or scope.',
    examples: [{ english: 'In this context, the word "spacious" is used to mean very large in expanse or scope.', chinese: '在这个语境中，“spacious”用于表达“广大的；宽广的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sting', term: 'sting', normalizedTerm: 'sting', partOfSpeech: ['noun', 'verb'], ipa: '/stɪŋ/',
    chineseShort: '叮；刺痛；刺激', chineseExplanation: '表示“叮；刺痛；刺激”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A kind of pain; something as sudden and painful as being stung.',
    examples: [{ english: 'In this context, the word "sting" is used to mean a kind of pain; something as sudden and painful as being stung.', chinese: '在这个语境中，“sting”用于表达“叮；刺痛；刺激”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'subdue', term: 'subdue', normalizedTerm: 'subdue', partOfSpeech: ['verb'], ipa: '/səb\'du/',
    chineseShort: '使服从；压制；减弱', chineseExplanation: '表示“使服从；压制；减弱”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Put down by force or intimidation.',
    examples: [{ english: 'In this context, the word "subdue" is used to mean put down by force or intimidation.', chinese: '在这个语境中，“subdue”用于表达“使服从；压制；减弱”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'summon', term: 'summon', normalizedTerm: 'summon', partOfSpeech: ['verb'], ipa: '/\'sʌmən/',
    chineseShort: '召唤；召集；号召', chineseExplanation: '表示“召唤；召集；号召”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Call in an official matter, such as to attend court.',
    examples: [{ english: 'In this context, the word "summon" is used to mean call in an official matter, such as to attend court.', chinese: '在这个语境中，“summon”用于表达“召唤；召集；号召”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'superficial', term: 'superficial', normalizedTerm: 'superficial', partOfSpeech: ['noun', 'adjective'], ipa: '/.supər\'fɪʃ(ə)l/',
    chineseShort: '表面；外表', chineseExplanation: '表示“表面；外表”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Concerned with or comprehending only what is apparent or obvious; not deep or penetrating emotionally or intellectually.',
    examples: [{ english: 'In this context, the word "superficial" is used to mean concerned with or comprehending only what is apparent or obvious; not deep or penetrating emotionally or intellectually.', chinese: '在这个语境中，“superficial”用于表达“表面；外表”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'surpass', term: 'surpass', normalizedTerm: 'surpass', partOfSpeech: ['verb'], ipa: '/sər\'pæs/',
    chineseShort: '超越；凌驾；胜过', chineseExplanation: '表示“超越；凌驾；胜过”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be or do something to a greater degree.',
    examples: [{ english: 'In this context, the word "surpass" is used to mean be or do something to a greater degree.', chinese: '在这个语境中，“surpass”用于表达“超越；凌驾；胜过”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'swamp', term: 'swamp', normalizedTerm: 'swamp', partOfSpeech: ['noun', 'verb'], ipa: '/swɑmp/',
    chineseShort: '沼泽；进退两难的困境', chineseExplanation: '表示“沼泽；进退两难的困境”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Low land that is seasonally flooded; has more woody plants than a marsh and better drainage than a bog.',
    examples: [{ english: 'In this context, the word "swamp" is used to mean low land that is seasonally flooded; has more woody plants than a marsh and better drainage than a bog.', chinese: '在这个语境中，“swamp”用于表达“沼泽；进退两难的困境”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tangle', term: 'tangle', normalizedTerm: 'tangle', partOfSpeech: ['noun', 'verb'], ipa: '/\'tæŋɡ(ə)l/',
    chineseShort: '缠结；纠结的一团；困惑', chineseExplanation: '表示“缠结；纠结的一团；困惑”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A twisted and tangled mass that is highly interwoven.',
    examples: [{ english: 'In this context, the word "tangle" is used to mean a twisted and tangled mass that is highly interwoven.', chinese: '在这个语境中，“tangle”用于表达“缠结；纠结的一团；困惑”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tedious', term: 'tedious', normalizedTerm: 'tedious', partOfSpeech: ['adjective'], ipa: '/\'tidiəs/',
    chineseShort: '沉闷的；冗长乏味的', chineseExplanation: '表示“沉闷的；冗长乏味的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'So lacking in interest as to cause mental weariness.',
    examples: [{ english: 'In this context, the word "tedious" is used to mean so lacking in interest as to cause mental weariness.', chinese: '在这个语境中，“tedious”用于表达“沉闷的；冗长乏味的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'terrain', term: 'terrain', normalizedTerm: 'terrain', partOfSpeech: ['noun'], ipa: '/tə\'reɪn/',
    chineseShort: '地带；地区；地形', chineseExplanation: '表示“地带；地区；地形”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A piece of ground having specific characteristics or military potential.',
    examples: [{ english: 'In this context, the word "terrain" is used to mean a piece of ground having specific characteristics or military potential.', chinese: '在这个语境中，“terrain”用于表达“地带；地区；地形”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'thermal', term: 'thermal', normalizedTerm: 'thermal', partOfSpeech: ['adjective', 'noun'], ipa: '/\'θɜrm(ə)l/',
    chineseShort: '热的；热量的；温泉的', chineseExplanation: '表示“热的；热量的；温泉的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or associated with heat.',
    examples: [{ english: 'In this context, the word "thermal" is used to mean relating to or associated with heat.', chinese: '在这个语境中，“thermal”用于表达“热的；热量的；温泉的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'throng', term: 'throng', normalizedTerm: 'throng', partOfSpeech: ['noun', 'adjective'], ipa: '/θrɔŋ/',
    chineseShort: '群；人群；群集', chineseExplanation: '表示“群；人群；群集”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Press tightly together or cram.',
    examples: [{ english: 'In this context, the word "throng" is used to mean press tightly together or cram.', chinese: '在这个语境中，“throng”用于表达“群；人群；群集”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'transcend', term: 'transcend', normalizedTerm: 'transcend', partOfSpeech: ['verb'], ipa: '/træn\'send/',
    chineseShort: '超越；胜过', chineseExplanation: '表示“超越；胜过”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be greater in scope or size than some standard.',
    examples: [{ english: 'In this context, the word "transcend" is used to mean be greater in scope or size than some standard.', chinese: '在这个语境中，“transcend”用于表达“超越；胜过”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'trench', term: 'trench', normalizedTerm: 'trench', partOfSpeech: ['noun', 'verb'], ipa: '/trentʃ/',
    chineseShort: '渠；沟渠；战壕', chineseExplanation: '表示“渠；沟渠；战壕”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A ditch dug as a fortification having a parapet of the excavated earth.',
    examples: [{ english: 'In this context, the word "trench" is used to mean a ditch dug as a fortification having a parapet of the excavated earth.', chinese: '在这个语境中，“trench”用于表达“渠；沟渠；战壕”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'valve', term: 'valve', normalizedTerm: 'valve', partOfSpeech: ['noun', 'verb'], ipa: '/vælv/',
    chineseShort: '活瓣；阀；活门', chineseExplanation: '表示“活瓣；阀；活门”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A structure in a hollow organ (like the heart) with a flap to insure one-way flow of fluid through it.',
    examples: [{ english: 'In this context, the word "valve" is used to mean a structure in a hollow organ (like the heart) with a flap to insure one-way flow of fluid through it.', chinese: '在这个语境中，“valve”用于表达“活瓣；阀；活门”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'versatile', term: 'versatile', normalizedTerm: 'versatile', partOfSpeech: ['adjective'], ipa: '/\'vɜrsət(ə)l/',
    chineseShort: '多才多艺的；万用的；万向的', chineseExplanation: '表示“多才多艺的；万用的；万向的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having great diversity or variety.',
    examples: [{ english: 'In this context, the word "versatile" is used to mean having great diversity or variety.', chinese: '在这个语境中，“versatile”用于表达“多才多艺的；万用的；万向的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vulgar', term: 'vulgar', normalizedTerm: 'vulgar', partOfSpeech: ['adjective'], ipa: '/\'vʌlɡər/',
    chineseShort: '粗俗的；庸俗的；普通的', chineseExplanation: '表示“粗俗的；庸俗的；普通的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Lacking refinement or cultivation or taste.',
    examples: [{ english: 'In this context, the word "vulgar" is used to mean lacking refinement or cultivation or taste.', chinese: '在这个语境中，“vulgar”用于表达“粗俗的；庸俗的；普通的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wholesome', term: 'wholesome', normalizedTerm: 'wholesome', partOfSpeech: ['adjective'], ipa: '/\'hoʊlsəm/',
    chineseShort: '有益健康的；合乎卫生的；健全的', chineseExplanation: '表示“有益健康的；合乎卫生的；健全的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Conducive to or characteristic of physical or moral well-being.',
    examples: [{ english: 'In this context, the word "wholesome" is used to mean conducive to or characteristic of physical or moral well-being.', chinese: '在这个语境中，“wholesome”用于表达“有益健康的；合乎卫生的；健全的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wield', term: 'wield', normalizedTerm: 'wield', partOfSpeech: ['verb'], ipa: '/wiːld/',
    chineseShort: '挥舞；运用', chineseExplanation: '表示“挥舞；运用”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Have and exercise.',
    examples: [{ english: 'In this context, the word "wield" is used to mean have and exercise.', chinese: '在这个语境中，“wield”用于表达“挥舞；运用”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'willow', term: 'willow', normalizedTerm: 'willow', partOfSpeech: ['noun', 'adjective'], ipa: '/ˈwiloʊ/',
    chineseShort: '柳树；柳木制品', chineseExplanation: '表示“柳树；柳木制品”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any of numerous deciduous trees and shrubs of the genus Salix.',
    examples: [{ english: 'In this context, the word "willow" is used to mean any of numerous deciduous trees and shrubs of the genus Salix.', chinese: '在这个语境中，“willow”用于表达“柳树；柳木制品”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wrinkle', term: 'wrinkle', normalizedTerm: 'wrinkle', partOfSpeech: ['noun', 'verb'], ipa: '/ˈriŋk(ə)l/',
    chineseShort: '皱纹；妙计；方法', chineseExplanation: '表示“皱纹；妙计；方法”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A slight depression in the smoothness of a surface.',
    examples: [{ english: 'In this context, the word "wrinkle" is used to mean a slight depression in the smoothness of a surface.', chinese: '在这个语境中，“wrinkle”用于表达“皱纹；妙计；方法”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'attorney', term: 'attorney', normalizedTerm: 'attorney', partOfSpeech: ['noun'], ipa: '/ə\'tɜrni/',
    chineseShort: '代理人；律师', chineseExplanation: '表示“代理人；律师”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A professional person authorized to practice law; conducts lawsuits or gives legal advice.',
    examples: [{ english: 'In this context, the word "attorney" is used to mean a professional person authorized to practice law; conducts lawsuits or gives legal advice.', chinese: '在这个语境中，“attorney”用于表达“代理人；律师”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'circulate', term: 'circulate', normalizedTerm: 'circulate', partOfSpeech: ['verb'], ipa: '/\'sɜrkjə.leɪt/',
    chineseShort: '(使)流通；(使)循环；(使)传播', chineseExplanation: '表示“(使)流通；(使)循环；(使)传播”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to become widely known.',
    examples: [{ english: 'In this context, the word "circulate" is used to mean cause to become widely known.', chinese: '在这个语境中，“circulate”用于表达“(使)流通；(使)循环；(使)传播”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fluctuation', term: 'fluctuation', normalizedTerm: 'fluctuation', partOfSpeech: ['noun'], ipa: '/.flʌktʃu\'eɪʃ(ə)n/',
    chineseShort: '变动；波动；动摇', chineseExplanation: '表示“变动；波动；动摇”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A wave motion.',
    examples: [{ english: 'In this context, the word "fluctuation" is used to mean a wave motion.', chinese: '在这个语境中，“fluctuation”用于表达“变动；波动；动摇”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hysteria', term: 'hysteria', normalizedTerm: 'hysteria', partOfSpeech: ['noun'], ipa: '/hɪ\'stɪriə/',
    chineseShort: '歇斯底里症；不正常的兴奋；癔病', chineseExplanation: '表示“歇斯底里症；不正常的兴奋；癔病”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Excessive or uncontrollable fear.',
    examples: [{ english: 'In this context, the word "hysteria" is used to mean excessive or uncontrollable fear.', chinese: '在这个语境中，“hysteria”用于表达“歇斯底里症；不正常的兴奋；癔病”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stale', term: 'stale', normalizedTerm: 'stale', partOfSpeech: ['noun', 'adjective'], ipa: '/steɪl/',
    chineseShort: '尿', chineseExplanation: '表示“尿”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Urinate, of cattle and horses.',
    examples: [{ english: 'In this context, the word "stale" is used to mean urinate, of cattle and horses.', chinese: '在这个语境中，“stale”用于表达“尿”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'creep', term: 'creep', normalizedTerm: 'creep', partOfSpeech: ['noun', 'verb'], ipa: '/krip/',
    chineseShort: '爬；徐行；蠕动', chineseExplanation: '表示“爬；徐行；蠕动”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone unpleasantly strange or eccentric.',
    examples: [{ english: 'In this context, the word "creep" is used to mean someone unpleasantly strange or eccentric.', chinese: '在这个语境中，“creep”用于表达“爬；徐行；蠕动”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'philanthropic', term: 'philanthropic', normalizedTerm: 'philanthropic', partOfSpeech: ['adjective'], ipa: '/.fɪlən\'θrɑpɪk/',
    chineseShort: '慈善(事业)的；博爱的；乐善好施的', chineseExplanation: '表示“慈善(事业)的；博爱的；乐善好施的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to or characterized by philanthropy.',
    examples: [{ english: 'In this context, the word "philanthropic" is used to mean of or relating to or characterized by philanthropy.', chinese: '在这个语境中，“philanthropic”用于表达“慈善(事业)的；博爱的；乐善好施的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cunning', term: 'cunning', normalizedTerm: 'cunning', partOfSpeech: ['adjective', 'noun'], ipa: '/\'kʌnɪŋ/',
    chineseShort: '狡猾的；巧妙的；可爱的', chineseExplanation: '表示“狡猾的；巧妙的；可爱的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Attractive especially by means of smallness or prettiness or quaintness.',
    examples: [{ english: 'In this context, the word "cunning" is used to mean attractive especially by means of smallness or prettiness or quaintness.', chinese: '在这个语境中，“cunning”用于表达“狡猾的；巧妙的；可爱的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'thrive', term: 'thrive', normalizedTerm: 'thrive', partOfSpeech: ['verb'], ipa: '/θraɪv/',
    chineseShort: '繁荣；兴旺；茁壮成长', chineseExplanation: '表示“繁荣；兴旺；茁壮成长”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make steady progress; be at the high point in one\'s career or reach a high point in historical significance or importance.',
    examples: [{ english: 'In this context, the word "thrive" is used to mean make steady progress; be at the high point in one\'s career or reach a high point in historical significance or importance.', chinese: '在这个语境中，“thrive”用于表达“繁荣；兴旺；茁壮成长”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dubious', term: 'dubious', normalizedTerm: 'dubious', partOfSpeech: ['adjective'], ipa: '/\'dubiəs/',
    chineseShort: '可疑的；不确定的', chineseExplanation: '表示“可疑的；不确定的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Not convinced.',
    examples: [{ english: 'In this context, the word "dubious" is used to mean not convinced.', chinese: '在这个语境中，“dubious”用于表达“可疑的；不确定的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'turmoil', term: 'turmoil', normalizedTerm: 'turmoil', partOfSpeech: ['noun'], ipa: '/\'tɜr.mɔɪl/',
    chineseShort: '骚动；混乱', chineseExplanation: '表示“骚动；混乱”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A violent disturbance.',
    examples: [{ english: 'In this context, the word "turmoil" is used to mean a violent disturbance.', chinese: '在这个语境中，“turmoil”用于表达“骚动；混乱”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dissipate', term: 'dissipate', normalizedTerm: 'dissipate', partOfSpeech: ['verb'], ipa: '/\'dɪsɪ.peɪt/',
    chineseShort: '散失；驱散；浪费', chineseExplanation: '表示“散失；驱散；浪费”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Live a life of pleasure, especially with respect to alcoholic consumption.',
    examples: [{ english: 'In this context, the word "dissipate" is used to mean live a life of pleasure, especially with respect to alcoholic consumption.', chinese: '在这个语境中，“dissipate”用于表达“散失；驱散；浪费”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bait', term: 'bait', normalizedTerm: 'bait', partOfSpeech: ['noun', 'verb'], ipa: '/beɪt/',
    chineseShort: '饵', chineseExplanation: '表示“饵”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Anything that serves as an enticement.',
    examples: [{ english: 'In this context, the word "bait" is used to mean anything that serves as an enticement.', chinese: '在这个语境中，“bait”用于表达“饵”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'curb', term: 'curb', normalizedTerm: 'curb', partOfSpeech: ['noun', 'verb'], ipa: '/kɜrb/',
    chineseShort: '抑制；勒马绳；边石', chineseExplanation: '表示“抑制；勒马绳；边石”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An edge between a sidewalk and a roadway consisting of a line of curbstones (usually forming part of a gutter).',
    examples: [{ english: 'In this context, the word "curb" is used to mean an edge between a sidewalk and a roadway consisting of a line of curbstones (usually forming part of a gutter).', chinese: '在这个语境中，“curb”用于表达“抑制；勒马绳；边石”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'foil', term: 'foil', normalizedTerm: 'foil', partOfSpeech: ['noun', 'verb'], ipa: '/fɔɪl/',
    chineseShort: '箔；烘托；衬托', chineseExplanation: '表示“箔；烘托；衬托”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A piece of thin and flexible sheet metal.',
    examples: [{ english: 'In this context, the word "foil" is used to mean a piece of thin and flexible sheet metal.', chinese: '在这个语境中，“foil”用于表达“箔；烘托；衬托”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fort', term: 'fort', normalizedTerm: 'fort', partOfSpeech: ['noun', 'verb'], ipa: '/fɔrt/',
    chineseShort: '堡垒；要塞；易货站', chineseExplanation: '表示“堡垒；要塞；易货站”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Gather in, or as if in, a fort, as for protection or defense.',
    examples: [{ english: 'In this context, the word "fort" is used to mean gather in, or as if in, a fort, as for protection or defense.', chinese: '在这个语境中，“fort”用于表达“堡垒；要塞；易货站”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fret', term: 'fret', normalizedTerm: 'fret', partOfSpeech: ['noun', 'verb'], ipa: '/frɛt/',
    chineseShort: '烦躁；磨损；焦急', chineseExplanation: '表示“烦躁；磨损；焦急”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Agitation resulting from active worry.',
    examples: [{ english: 'In this context, the word "fret" is used to mean agitation resulting from active worry.', chinese: '在这个语境中，“fret”用于表达“烦躁；磨损；焦急”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gust', term: 'gust', normalizedTerm: 'gust', partOfSpeech: ['noun'], ipa: '/ɡʌst/',
    chineseShort: '突然一阵；趣味；爱好', chineseExplanation: '表示“突然一阵；趣味；爱好”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A strong current of air.',
    examples: [{ english: 'In this context, the word "gust" is used to mean a strong current of air.', chinese: '在这个语境中，“gust”用于表达“突然一阵；趣味；爱好”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hurl', term: 'hurl', normalizedTerm: 'hurl', partOfSpeech: ['noun', 'verb'], ipa: '/hɜrl/',
    chineseShort: '用力的投掷', chineseExplanation: '表示“用力的投掷”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A violent throw.',
    examples: [{ english: 'In this context, the word "hurl" is used to mean a violent throw.', chinese: '在这个语境中，“hurl”用于表达“用力的投掷”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'jerk', term: 'jerk', normalizedTerm: 'jerk', partOfSpeech: ['noun', 'verb'], ipa: '/dʒɜrk/',
    chineseShort: '性情古怪的人；急拉；肌肉抽搐', chineseExplanation: '表示“性情古怪的人；急拉；肌肉抽搐”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A dull stupid fatuous person.',
    examples: [{ english: 'In this context, the word "jerk" is used to mean a dull stupid fatuous person.', chinese: '在这个语境中，“jerk”用于表达“性情古怪的人；急拉；肌肉抽搐”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lump', term: 'lump', normalizedTerm: 'lump', partOfSpeech: ['noun', 'verb'], ipa: '/lʌmp/',
    chineseShort: '块；瘤；很多', chineseExplanation: '表示“块；瘤；很多”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Put together indiscriminately.',
    examples: [{ english: 'In this context, the word "lump" is used to mean put together indiscriminately.', chinese: '在这个语境中，“lump”用于表达“块；瘤；很多”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pore', term: 'pore', normalizedTerm: 'pore', partOfSpeech: ['noun', 'verb'], ipa: '/pɔr/',
    chineseShort: '毛孔；小孔；气孔', chineseExplanation: '表示“毛孔；小孔；气孔”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any tiny hole admitting passage of a liquid (fluid or gas).',
    examples: [{ english: 'In this context, the word "pore" is used to mean any tiny hole admitting passage of a liquid (fluid or gas).', chinese: '在这个语境中，“pore”用于表达“毛孔；小孔；气孔”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'prey', term: 'prey', normalizedTerm: 'prey', partOfSpeech: ['noun', 'verb'], ipa: '/preɪ/',
    chineseShort: '被掠食者；牺牲者', chineseExplanation: '表示“被掠食者；牺牲者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person who is the aim of an attack (especially a victim of ridicule or exploitation) by some hostile person or influence.',
    examples: [{ english: 'In this context, the word "prey" is used to mean a person who is the aim of an attack (especially a victim of ridicule or exploitation) by some hostile person or influence.', chinese: '在这个语境中，“prey”用于表达“被掠食者；牺牲者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reap', term: 'reap', normalizedTerm: 'reap', partOfSpeech: ['verb'], ipa: '/rip/',
    chineseShort: '收割；收获；获得', chineseExplanation: '表示“收割；收获；获得”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Gather, as of natural products.',
    examples: [{ english: 'In this context, the word "reap" is used to mean gather, as of natural products.', chinese: '在这个语境中，“reap”用于表达“收割；收获；获得”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'seam', term: 'seam', normalizedTerm: 'seam', partOfSpeech: ['noun', 'verb'], ipa: '/sim/',
    chineseShort: '缝合线；衔接口；接缝', chineseExplanation: '表示“缝合线；衔接口；接缝”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Joint consisting of a line formed by joining two pieces.',
    examples: [{ english: 'In this context, the word "seam" is used to mean joint consisting of a line formed by joining two pieces.', chinese: '在这个语境中，“seam”用于表达“缝合线；衔接口；接缝”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'slit', term: 'slit', normalizedTerm: 'slit', partOfSpeech: ['noun', 'verb'], ipa: '/slɪt/',
    chineseShort: '裂缝；投币口；狭长裂口', chineseExplanation: '表示“裂缝；投币口；狭长裂口”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A long narrow opening.',
    examples: [{ english: 'In this context, the word "slit" is used to mean a long narrow opening.', chinese: '在这个语境中，“slit”用于表达“裂缝；投币口；狭长裂口”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sway', term: 'sway', normalizedTerm: 'sway', partOfSpeech: ['noun', 'verb'], ipa: '/sweɪ/',
    chineseShort: '摇摆；影响力；支配', chineseExplanation: '表示“摇摆；影响力；支配”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Controlling influence.',
    examples: [{ english: 'In this context, the word "sway" is used to mean controlling influence.', chinese: '在这个语境中，“sway”用于表达“摇摆；影响力；支配”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vent', term: 'vent', normalizedTerm: 'vent', partOfSpeech: ['noun', 'verb'], ipa: '/vent/',
    chineseShort: '排气口；出口；通风孔', chineseExplanation: '表示“排气口；出口；通风孔”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A hole for the escape of gas or air.',
    examples: [{ english: 'In this context, the word "vent" is used to mean a hole for the escape of gas or air.', chinese: '在这个语境中，“vent”用于表达“排气口；出口；通风孔”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'veto', term: 'veto', normalizedTerm: 'veto', partOfSpeech: ['noun', 'verb'], ipa: '/\'vitoʊ/',
    chineseShort: '否决权', chineseExplanation: '表示“否决权”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A vote that blocks a decision.',
    examples: [{ english: 'In this context, the word "veto" is used to mean a vote that blocks a decision.', chinese: '在这个语境中，“veto”用于表达“否决权”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'weld', term: 'weld', normalizedTerm: 'weld', partOfSpeech: ['noun', 'verb'], ipa: '/weld/',
    chineseShort: '焊接处；焊接', chineseExplanation: '表示“焊接处；焊接”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'United States abolitionist (1803-1895).',
    examples: [{ english: 'In this context, the word "weld" is used to mean united States abolitionist (1803-1895).', chinese: '在这个语境中，“weld”用于表达“焊接处；焊接”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vocation', term: 'vocation', normalizedTerm: 'vocation', partOfSpeech: ['noun'], ipa: '/vəu\'keiʃən/',
    chineseShort: '职业；天命；天职', chineseExplanation: '表示“职业；天命；天职”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The particular occupation for which you are trained.',
    examples: [{ english: 'In this context, the word "vocation" is used to mean the particular occupation for which you are trained.', chinese: '在这个语境中，“vocation”用于表达“职业；天命；天职”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fringe', term: 'fringe', normalizedTerm: 'fringe', partOfSpeech: ['noun', 'verb'], ipa: '/frɪndʒ/',
    chineseShort: '边缘；端；流苏', chineseExplanation: '表示“边缘；端；流苏”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'One of the light or dark bands produced by the interference and diffraction of light.',
    examples: [{ english: 'In this context, the word "fringe" is used to mean one of the light or dark bands produced by the interference and diffraction of light.', chinese: '在这个语境中，“fringe”用于表达“边缘；端；流苏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'agreeable', term: 'agreeable', normalizedTerm: 'agreeable', partOfSpeech: ['adjective'], ipa: '/ə\'ɡriəb(ə)l/',
    chineseShort: '令人愉快的；同意的', chineseExplanation: '表示“令人愉快的；同意的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Conforming to your own liking or feelings or nature.',
    examples: [{ english: 'In this context, the word "agreeable" is used to mean conforming to your own liking or feelings or nature.', chinese: '在这个语境中，“agreeable”用于表达“令人愉快的；同意的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brace', term: 'brace', normalizedTerm: 'brace', partOfSpeech: ['noun', 'verb'], ipa: '/breɪs/',
    chineseShort: '支柱；曲柄；支撑', chineseExplanation: '表示“支柱；曲柄；支撑”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A support that steadies or strengthens something else.',
    examples: [{ english: 'In this context, the word "brace" is used to mean a support that steadies or strengthens something else.', chinese: '在这个语境中，“brace”用于表达“支柱；曲柄；支撑”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brittle', term: 'brittle', normalizedTerm: 'brittle', partOfSpeech: ['adjective', 'noun'], ipa: '/\'brɪt(ə)l/',
    chineseShort: '易碎的；脆弱的；易坏的', chineseExplanation: '表示“易碎的；脆弱的；易坏的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having little elasticity; hence easily cracked or fractured or snapped.',
    examples: [{ english: 'In this context, the word "brittle" is used to mean having little elasticity; hence easily cracked or fractured or snapped.', chinese: '在这个语境中，“brittle”用于表达“易碎的；脆弱的；易坏的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cavity', term: 'cavity', normalizedTerm: 'cavity', partOfSpeech: ['noun'], ipa: '/ˈkævəti/',
    chineseShort: '洞；空穴；腔', chineseExplanation: '表示“洞；空穴；腔”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Space that is surrounded by something.',
    examples: [{ english: 'In this context, the word "cavity" is used to mean space that is surrounded by something.', chinese: '在这个语境中，“cavity”用于表达“洞；空穴；腔”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'chord', term: 'chord', normalizedTerm: 'chord', partOfSpeech: ['noun', 'verb'], ipa: '/kɔrd/',
    chineseShort: '弦；和音', chineseExplanation: '表示“弦；和音”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A straight line connecting two points on a curve.',
    examples: [{ english: 'In this context, the word "chord" is used to mean a straight line connecting two points on a curve.', chinese: '在这个语境中，“chord”用于表达“弦；和音”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'circumference', term: 'circumference', normalizedTerm: 'circumference', partOfSpeech: ['noun'], ipa: '/sər\'kʌmf(ə)rəns/',
    chineseShort: '圆周；周缘；胸围', chineseExplanation: '表示“圆周；周缘；胸围”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The size of something as given by the distance around it.',
    examples: [{ english: 'In this context, the word "circumference" is used to mean the size of something as given by the distance around it.', chinese: '在这个语境中，“circumference”用于表达“圆周；周缘；胸围”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cluster', term: 'cluster', normalizedTerm: 'cluster', partOfSpeech: ['noun', 'verb'], ipa: '/\'klʌstə(r)/',
    chineseShort: '串；丛；群', chineseExplanation: '表示“串；丛；群”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Come together as in a cluster or flock.',
    examples: [{ english: 'In this context, the word "cluster" is used to mean come together as in a cluster or flock.', chinese: '在这个语境中，“cluster”用于表达“串；丛；群”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'collision', term: 'collision', normalizedTerm: 'collision', partOfSpeech: ['noun'], ipa: '/kə\'lɪʒ(ə)n/',
    chineseShort: '碰撞；冲突；抵触', chineseExplanation: '表示“碰撞；冲突；抵触”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(physics) a brief event in which two or more bodies come together.',
    examples: [{ english: 'In this context, the word "collision" is used to mean (physics) a brief event in which two or more bodies come together.', chinese: '在这个语境中，“collision”用于表达“碰撞；冲突；抵触”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'configuration', term: 'configuration', normalizedTerm: 'configuration', partOfSpeech: ['noun'], ipa: '/kən.fɪɡə\'reɪʃ(ə)n/',
    chineseShort: '结构；表面配置；外形', chineseExplanation: '表示“结构；表面配置；外形”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An arrangement of parts or elements.',
    examples: [{ english: 'In this context, the word "configuration" is used to mean an arrangement of parts or elements.', chinese: '在这个语境中，“configuration”用于表达“结构；表面配置；外形”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cylinder', term: 'cylinder', normalizedTerm: 'cylinder', partOfSpeech: ['noun'], ipa: '/\'sɪlɪndər/',
    chineseShort: '圆筒；圆筒状物；汽缸', chineseExplanation: '表示“圆筒；圆筒状物；汽缸”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A solid bounded by a cylindrical surface and two parallel planes (the bases).',
    examples: [{ english: 'In this context, the word "cylinder" is used to mean a solid bounded by a cylindrical surface and two parallel planes (the bases).', chinese: '在这个语境中，“cylinder”用于表达“圆筒；圆筒状物；汽缸”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'defect', term: 'defect', normalizedTerm: 'defect', partOfSpeech: ['noun', 'verb'], ipa: '/dɪ\'fekt/',
    chineseShort: '缺点', chineseExplanation: '表示“缺点”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An imperfection in a bodily system.',
    examples: [{ english: 'In this context, the word "defect" is used to mean an imperfection in a bodily system.', chinese: '在这个语境中，“defect”用于表达“缺点”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'discrete', term: 'discrete', normalizedTerm: 'discrete', partOfSpeech: ['adjective'], ipa: '/dɪ\'skrit/',
    chineseShort: '不连续的；离散的', chineseExplanation: '表示“不连续的；离散的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Constituting a separate entity or part.',
    examples: [{ english: 'In this context, the word "discrete" is used to mean constituting a separate entity or part.', chinese: '在这个语境中，“discrete”用于表达“不连续的；离散的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'drastic', term: 'drastic', normalizedTerm: 'drastic', partOfSpeech: ['adjective'], ipa: '/\'dræstɪk/',
    chineseShort: '激烈的', chineseExplanation: '表示“激烈的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Forceful and extreme and rigorous.',
    examples: [{ english: 'In this context, the word "drastic" is used to mean forceful and extreme and rigorous.', chinese: '在这个语境中，“drastic”用于表达“激烈的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'enclosure', term: 'enclosure', normalizedTerm: 'enclosure', partOfSpeech: ['noun'], ipa: '/ɪn\'kloʊʒər/',
    chineseShort: '附件；围墙；围绕', chineseExplanation: '表示“附件；围墙；围绕”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A structure consisting of an area that has been enclosed for some purpose.',
    examples: [{ english: 'In this context, the word "enclosure" is used to mean a structure consisting of an area that has been enclosed for some purpose.', chinese: '在这个语境中，“enclosure”用于表达“附件；围墙；围绕”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'equator', term: 'equator', normalizedTerm: 'equator', partOfSpeech: ['noun'], ipa: '/ɪ\'kweɪtə(r)/',
    chineseShort: '赤道', chineseExplanation: '表示“赤道”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An imaginary line around the Earth forming the great circle that is equidistant from the north and south poles.',
    examples: [{ english: 'In this context, the word "equator" is used to mean an imaginary line around the Earth forming the great circle that is equidistant from the north and south poles.', chinese: '在这个语境中，“equator”用于表达“赤道”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'expel', term: 'expel', normalizedTerm: 'expel', partOfSpeech: ['verb'], ipa: '/ɪk\'spel/',
    chineseShort: '驱逐；逐出；排出', chineseExplanation: '表示“驱逐；逐出；排出”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Force to leave or move out.',
    examples: [{ english: 'In this context, the word "expel" is used to mean force to leave or move out.', chinese: '在这个语境中，“expel”用于表达“驱逐；逐出；排出”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'facet', term: 'facet', normalizedTerm: 'facet', partOfSpeech: ['noun'], ipa: '/\'fæsɪt/',
    chineseShort: '(多面体的)面；方面；琢面', chineseExplanation: '表示“(多面体的)面；方面；琢面”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A smooth surface (as of a bone or cut gemstone).',
    examples: [{ english: 'In this context, the word "facet" is used to mean a smooth surface (as of a bone or cut gemstone).', chinese: '在这个语境中，“facet”用于表达“(多面体的)面；方面；琢面”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'feeble', term: 'feeble', normalizedTerm: 'feeble', partOfSpeech: ['adjective'], ipa: '/\'fib(ə)l/',
    chineseShort: '微弱的；衰弱的；无效的', chineseExplanation: '表示“微弱的；衰弱的；无效的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Pathetically lacking in force or effectiveness.',
    examples: [{ english: 'In this context, the word "feeble" is used to mean pathetically lacking in force or effectiveness.', chinese: '在这个语境中，“feeble”用于表达“微弱的；衰弱的；无效的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'friction', term: 'friction', normalizedTerm: 'friction', partOfSpeech: ['noun'], ipa: '/\'frɪkʃ(ə)n/',
    chineseShort: '摩擦；摩擦治疗；不和', chineseExplanation: '表示“摩擦；摩擦治疗；不和”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The resistance encountered when one body is moved in contact with another.',
    examples: [{ english: 'In this context, the word "friction" is used to mean the resistance encountered when one body is moved in contact with another.', chinese: '在这个语境中，“friction”用于表达“摩擦；摩擦治疗；不和”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'galaxy', term: 'galaxy', normalizedTerm: 'galaxy', partOfSpeech: ['noun'], ipa: '/\'ɡæləksi/',
    chineseShort: '银河；星系；一群(显赫的人物)', chineseExplanation: '表示“银河；星系；一群(显赫的人物)”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A splendid assemblage (especially of famous people).',
    examples: [{ english: 'In this context, the word "galaxy" is used to mean a splendid assemblage (especially of famous people).', chinese: '在这个语境中，“galaxy”用于表达“银河；星系；一群(显赫的人物)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'glossary', term: 'glossary', normalizedTerm: 'glossary', partOfSpeech: ['noun'], ipa: '/\'ɡlɔsəri/',
    chineseShort: '专业词典；术语集；词表', chineseExplanation: '表示“专业词典；术语集；词表”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An alphabetical list of technical terms in some specialized field of knowledge; usually published as an appendix to a text on that field.',
    examples: [{ english: 'In this context, the word "glossary" is used to mean an alphabetical list of technical terms in some specialized field of knowledge; usually published as an appendix to a text on that field.', chinese: '在这个语境中，“glossary”用于表达“专业词典；术语集；词表”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'gravity', term: 'gravity', normalizedTerm: 'gravity', partOfSpeech: ['noun'], ipa: '/\'ɡrævəti/',
    chineseShort: '地心引力；重力', chineseExplanation: '表示“地心引力；重力”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(physics) the force of attraction between all masses in the universe; especially the attraction of the earth\'s mass for bodies near its surface.',
    examples: [{ english: 'In this context, the word "gravity" is used to mean (physics) the force of attraction between all masses in the universe; especially the attraction of the earth\'s mass for bodies near its surface.', chinese: '在这个语境中，“gravity”用于表达“地心引力；重力”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'humidity', term: 'humidity', normalizedTerm: 'humidity', partOfSpeech: ['noun'], ipa: '/hju\'mɪdəti/',
    chineseShort: '湿气；潮湿；湿度', chineseExplanation: '表示“湿气；潮湿；湿度”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Wetness in the atmosphere.',
    examples: [{ english: 'In this context, the word "humidity" is used to mean wetness in the atmosphere.', chinese: '在这个语境中，“humidity”用于表达“湿气；潮湿；湿度”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intellect', term: 'intellect', normalizedTerm: 'intellect', partOfSpeech: ['noun'], ipa: '/\'ɪnt(ə)l.ekt/',
    chineseShort: '智力；出众的才华；知识分子', chineseExplanation: '表示“智力；出众的才华；知识分子”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Knowledge and intellectual ability.',
    examples: [{ english: 'In this context, the word "intellect" is used to mean knowledge and intellectual ability.', chinese: '在这个语境中，“intellect”用于表达“智力；出众的才华；知识分子”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'kernel', term: 'kernel', normalizedTerm: 'kernel', partOfSpeech: ['noun'], ipa: '/\'kɜrn(ə)l/',
    chineseShort: '核心；中心；精髓', chineseExplanation: '表示“核心；中心；精髓”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The inner and usually edible part of a seed or grain or nut or fruit stone.',
    examples: [{ english: 'In this context, the word "kernel" is used to mean the inner and usually edible part of a seed or grain or nut or fruit stone.', chinese: '在这个语境中，“kernel”用于表达“核心；中心；精髓”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'latitude', term: 'latitude', normalizedTerm: 'latitude', partOfSpeech: ['noun'], ipa: '/\'lætə.tud/',
    chineseShort: '纬度；范围', chineseExplanation: '表示“纬度；范围”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The angular distance between an imaginary line around a heavenly body parallel to its equator and the equator itself.',
    examples: [{ english: 'In this context, the word "latitude" is used to mean the angular distance between an imaginary line around a heavenly body parallel to its equator and the equator itself.', chinese: '在这个语境中，“latitude”用于表达“纬度；范围”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'layman', term: 'layman', normalizedTerm: 'layman', partOfSpeech: ['noun'], ipa: '/\'leɪmən/',
    chineseShort: '俗人；门外汉；凡人', chineseExplanation: '表示“俗人；门外汉；凡人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone who is not a clergyman or a professional person.',
    examples: [{ english: 'In this context, the word "layman" is used to mean someone who is not a clergyman or a professional person.', chinese: '在这个语境中，“layman”用于表达“俗人；门外汉；凡人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lunar', term: 'lunar', normalizedTerm: 'lunar', partOfSpeech: ['adjective'], ipa: '/\'lunər/',
    chineseShort: '阴历的；月的；微亮的(指光)', chineseExplanation: '表示“阴历的；月的；微亮的(指光)”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to or associated with the moon.',
    examples: [{ english: 'In this context, the word "lunar" is used to mean of or relating to or associated with the moon.', chinese: '在这个语境中，“lunar”用于表达“阴历的；月的；微亮的(指光)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pendulum', term: 'pendulum', normalizedTerm: 'pendulum', partOfSpeech: ['noun'], ipa: '/\'pendʒələm/',
    chineseShort: '钟摆；摇锤；摇摆不定的事态(或局面)', chineseExplanation: '表示“钟摆；摇锤；摇摆不定的事态(或局面)”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An apparatus consisting of an object mounted so that it swings freely under the influence of gravity.',
    examples: [{ english: 'In this context, the word "pendulum" is used to mean an apparatus consisting of an object mounted so that it swings freely under the influence of gravity.', chinese: '在这个语境中，“pendulum”用于表达“钟摆；摇锤；摇摆不定的事态(或局面)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'perimeter', term: 'perimeter', normalizedTerm: 'perimeter', partOfSpeech: ['noun'], ipa: '/pə\'rimitə/',
    chineseShort: '周长；周界；边缘', chineseExplanation: '表示“周长；周界；边缘”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A line enclosing a plane areas.',
    examples: [{ english: 'In this context, the word "perimeter" is used to mean a line enclosing a plane areas.', chinese: '在这个语境中，“perimeter”用于表达“周长；周界；边缘”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'petroleum', term: 'petroleum', normalizedTerm: 'petroleum', partOfSpeech: ['noun'], ipa: '/pə\'troʊliəm/',
    chineseShort: '石油', chineseExplanation: '表示“石油”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A dark oil consisting mainly of hydrocarbons.',
    examples: [{ english: 'In this context, the word "petroleum" is used to mean a dark oil consisting mainly of hydrocarbons.', chinese: '在这个语境中，“petroleum”用于表达“石油”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plateau', term: 'plateau', normalizedTerm: 'plateau', partOfSpeech: ['noun'], ipa: '/plæˈtoʊ/',
    chineseShort: '高地；高原；(上升后的)稳定水平', chineseExplanation: '表示“高地；高原；(上升后的)稳定水平”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A relatively flat highland.',
    examples: [{ english: 'In this context, the word "plateau" is used to mean a relatively flat highland.', chinese: '在这个语境中，“plateau”用于表达“高地；高原；(上升后的)稳定水平”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'propel', term: 'propel', normalizedTerm: 'propel', partOfSpeech: ['verb'], ipa: '/prə\'pel/',
    chineseShort: '推进；驱使', chineseExplanation: '表示“推进；驱使”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to move forward with force.',
    examples: [{ english: 'In this context, the word "propel" is used to mean cause to move forward with force.', chinese: '在这个语境中，“propel”用于表达“推进；驱使”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'radius', term: 'radius', normalizedTerm: 'radius', partOfSpeech: ['noun'], ipa: '/\'reɪdiəs/',
    chineseShort: '半径；范围；辐射光线', chineseExplanation: '表示“半径；范围；辐射光线”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The length of a line segment between the center and circumference of a circle or sphere.',
    examples: [{ english: 'In this context, the word "radius" is used to mean the length of a line segment between the center and circumference of a circle or sphere.', chinese: '在这个语境中，“radius”用于表达“半径；范围；辐射光线”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rectangle', term: 'rectangle', normalizedTerm: 'rectangle', partOfSpeech: ['noun'], ipa: '/\'rek.tæŋɡ(ə)l/',
    chineseShort: '长方形；矩形', chineseExplanation: '表示“长方形；矩形”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A parallelogram with four right angles.',
    examples: [{ english: 'In this context, the word "rectangle" is used to mean a parallelogram with four right angles.', chinese: '在这个语境中，“rectangle”用于表达“长方形；矩形”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'soluble', term: 'soluble', normalizedTerm: 'soluble', partOfSpeech: ['adjective'], ipa: '/\'sɑljəb(ə)l/',
    chineseShort: '溶解的；可溶解的；可以解决的', chineseExplanation: '表示“溶解的；可溶解的；可以解决的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: '(of a substance) capable of being dissolved in some solvent (usually water).',
    examples: [{ english: 'In this context, the word "soluble" is used to mean (of a substance) capable of being dissolved in some solvent (usually water).', chinese: '在这个语境中，“soluble”用于表达“溶解的；可溶解的；可以解决的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'symmetry', term: 'symmetry', normalizedTerm: 'symmetry', partOfSpeech: ['noun'], ipa: '/\'sɪmətri/',
    chineseShort: '对称；匀称', chineseExplanation: '表示“对称；匀称”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(mathematics) an attribute of a shape or relation; exact reflection of form on opposite sides of a dividing line or plane.',
    examples: [{ english: 'In this context, the word "symmetry" is used to mean (mathematics) an attribute of a shape or relation; exact reflection of form on opposite sides of a dividing line or plane.', chinese: '在这个语境中，“symmetry”用于表达“对称；匀称”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tariff', term: 'tariff', normalizedTerm: 'tariff', partOfSpeech: ['noun', 'verb'], ipa: '/\'terɪf/',
    chineseShort: '关税；关税表；价格表', chineseExplanation: '表示“关税；关税表；价格表”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Charge a tariff.',
    examples: [{ english: 'In this context, the word "tariff" is used to mean charge a tariff.', chinese: '在这个语境中，“tariff”用于表达“关税；关税表；价格表”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ventilate', term: 'ventilate', normalizedTerm: 'ventilate', partOfSpeech: ['verb'], ipa: '/\'vent(ə)l.eɪt/',
    chineseShort: '使空气流通；使通风；公开讨论', chineseExplanation: '表示“使空气流通；使通风；公开讨论”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Expose to the circulation of fresh air so as to retard spoilage.',
    examples: [{ english: 'In this context, the word "ventilate" is used to mean expose to the circulation of fresh air so as to retard spoilage.', chinese: '在这个语境中，“ventilate”用于表达“使空气流通；使通风；公开讨论”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'expire', term: 'expire', normalizedTerm: 'expire', partOfSpeech: ['verb'], ipa: '/ɪk\'spaɪr/',
    chineseShort: '期满；呼气；断气', chineseExplanation: '表示“期满；呼气；断气”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Lose validity.',
    examples: [{ english: 'In this context, the word "expire" is used to mean lose validity.', chinese: '在这个语境中，“expire”用于表达“期满；呼气；断气”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flourish', term: 'flourish', normalizedTerm: 'flourish', partOfSpeech: ['verb', 'noun'], ipa: '/\'flɜrɪʃ/',
    chineseShort: '繁荣；茂盛；活跃', chineseExplanation: '表示“繁荣；茂盛；活跃”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'A showy gesture.',
    examples: [{ english: 'In this context, the word "flourish" is used to mean a showy gesture.', chinese: '在这个语境中，“flourish”用于表达“繁荣；茂盛；活跃”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'conserve', term: 'conserve', normalizedTerm: 'conserve', partOfSpeech: ['noun', 'verb'], ipa: '/\'kɑnsɜrv/',
    chineseShort: '蜜饯；果酱', chineseExplanation: '表示“蜜饯；果酱”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Fruit preserved by cooking with sugar.',
    examples: [{ english: 'In this context, the word "conserve" is used to mean fruit preserved by cooking with sugar.', chinese: '在这个语境中，“conserve”用于表达“蜜饯；果酱”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'propagate', term: 'propagate', normalizedTerm: 'propagate', partOfSpeech: ['verb'], ipa: '/\'prɑpə.ɡeɪt/',
    chineseShort: '繁殖；传播；传送', chineseExplanation: '表示“繁殖；传播；传送”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Transmit from one generation to the next.',
    examples: [{ english: 'In this context, the word "propagate" is used to mean transmit from one generation to the next.', chinese: '在这个语境中，“propagate”用于表达“繁殖；传播；传送”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'eccentric', term: 'eccentric', normalizedTerm: 'eccentric', partOfSpeech: ['noun', 'adjective'], ipa: '/ɪk\'sentrɪk/',
    chineseShort: '怪人；偏心圆', chineseExplanation: '表示“怪人；偏心圆”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person with an unusual or odd personality.',
    examples: [{ english: 'In this context, the word "eccentric" is used to mean a person with an unusual or odd personality.', chinese: '在这个语境中，“eccentric”用于表达“怪人；偏心圆”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'corrode', term: 'corrode', normalizedTerm: 'corrode', partOfSpeech: ['verb'], ipa: '/kə\'roʊd/',
    chineseShort: '使腐蚀；侵蚀；破坏', chineseExplanation: '表示“使腐蚀；侵蚀；破坏”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to deteriorate due to the action of water, air, or an acid.',
    examples: [{ english: 'In this context, the word "corrode" is used to mean cause to deteriorate due to the action of water, air, or an acid.', chinese: '在这个语境中，“corrode”用于表达“使腐蚀；侵蚀；破坏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'perpendicular', term: 'perpendicular', normalizedTerm: 'perpendicular', partOfSpeech: ['noun', 'adjective'], ipa: '/.pɜrpən\'dɪkjələr/',
    chineseShort: '垂直线；垂直的位置；直立(姿势)', chineseExplanation: '表示“垂直线；垂直的位置；直立(姿势)”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A straight line at right angles to another line.',
    examples: [{ english: 'In this context, the word "perpendicular" is used to mean a straight line at right angles to another line.', chinese: '在这个语境中，“perpendicular”用于表达“垂直线；垂直的位置；直立(姿势)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'slander', term: 'slander', normalizedTerm: 'slander', partOfSpeech: ['noun', 'verb'], ipa: '/\'slændər/',
    chineseShort: '中伤；诽谤', chineseExplanation: '表示“中伤；诽谤”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Words falsely spoken that damage the reputation of another.',
    examples: [{ english: 'In this context, the word "slander" is used to mean words falsely spoken that damage the reputation of another.', chinese: '在这个语境中，“slander”用于表达“中伤；诽谤”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'surplus', term: 'surplus', normalizedTerm: 'surplus', partOfSpeech: ['noun', 'adjective'], ipa: '/\'sɜrpləs/',
    chineseShort: '剩余；过剩；盈余', chineseExplanation: '表示“剩余；过剩；盈余”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A quantity much larger than is needed.',
    examples: [{ english: 'In this context, the word "surplus" is used to mean a quantity much larger than is needed.', chinese: '在这个语境中，“surplus”用于表达“剩余；过剩；盈余”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dormant', term: 'dormant', normalizedTerm: 'dormant', partOfSpeech: ['adjective'], ipa: '/\'dɔrmənt/',
    chineseShort: '睡眠状态的；静止的', chineseExplanation: '表示“睡眠状态的；静止的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'In a condition of biological rest or suspended animation.',
    examples: [{ english: 'In this context, the word "dormant" is used to mean in a condition of biological rest or suspended animation.', chinese: '在这个语境中，“dormant”用于表达“睡眠状态的；静止的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'alleviate', term: 'alleviate', normalizedTerm: 'alleviate', partOfSpeech: ['verb'], ipa: '/ə\'livi.eɪt/',
    chineseShort: '减轻；使缓和', chineseExplanation: '表示“减轻；使缓和”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Provide physical relief, as from pain.',
    examples: [{ english: 'In this context, the word "alleviate" is used to mean provide physical relief, as from pain.', chinese: '在这个语境中，“alleviate”用于表达“减轻；使缓和”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'amateur', term: 'amateur', normalizedTerm: 'amateur', partOfSpeech: ['noun', 'adjective'], ipa: '/\'æmə.tʃʊr/',
    chineseShort: '业余爱好者；外行；爱好者', chineseExplanation: '表示“业余爱好者；外行；爱好者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone who pursues a study or sport as a pastime.',
    examples: [{ english: 'In this context, the word "amateur" is used to mean someone who pursues a study or sport as a pastime.', chinese: '在这个语境中，“amateur”用于表达“业余爱好者；外行；爱好者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ingenious', term: 'ingenious', normalizedTerm: 'ingenious', partOfSpeech: ['adjective'], ipa: '/in\'dʒiːnjəs/',
    chineseShort: '灵敏的；精巧的；聪明的', chineseExplanation: '表示“灵敏的；精巧的；聪明的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Showing inventiveness and skill.',
    examples: [{ english: 'In this context, the word "ingenious" is used to mean showing inventiveness and skill.', chinese: '在这个语境中，“ingenious”用于表达“灵敏的；精巧的；聪明的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'affiliate', term: 'affiliate', normalizedTerm: 'affiliate', partOfSpeech: ['verb', 'noun'], ipa: '/ə\'fɪliət/',
    chineseShort: '使紧密联系；使附属；接纳', chineseExplanation: '表示“使紧密联系；使附属；接纳”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Join in an affiliation.',
    examples: [{ english: 'In this context, the word "affiliate" is used to mean join in an affiliation.', chinese: '在这个语境中，“affiliate”用于表达“使紧密联系；使附属；接纳”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'emit', term: 'emit', normalizedTerm: 'emit', partOfSpeech: ['verb'], ipa: '/ɪ\'mɪt/',
    chineseShort: '发出；放射；发表(意见等)', chineseExplanation: '表示“发出；放射；发表(意见等)”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Expel (gases or odors).',
    examples: [{ english: 'In this context, the word "emit" is used to mean expel (gases or odors).', chinese: '在这个语境中，“emit”用于表达“发出；放射；发表(意见等)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flux', term: 'flux', normalizedTerm: 'flux', partOfSpeech: ['noun', 'verb'], ipa: '/flʌks/',
    chineseShort: '流出；涨潮；变迁', chineseExplanation: '表示“流出；涨潮；变迁”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The rate of flow of energy or particles across a given surface.',
    examples: [{ english: 'In this context, the word "flux" is used to mean the rate of flow of energy or particles across a given surface.', chinese: '在这个语境中，“flux”用于表达“流出；涨潮；变迁”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lace', term: 'lace', normalizedTerm: 'lace', partOfSpeech: ['noun', 'verb'], ipa: '/leɪs/',
    chineseShort: '饰带；花边；缎带', chineseExplanation: '表示“饰带；花边；缎带”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A cord that is drawn through eyelets or around hooks in order to draw together two edges (as of a shoe or garment).',
    examples: [{ english: 'In this context, the word "lace" is used to mean a cord that is drawn through eyelets or around hooks in order to draw together two edges (as of a shoe or garment).', chinese: '在这个语境中，“lace”用于表达“饰带；花边；缎带”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reel', term: 'reel', normalizedTerm: 'reel', partOfSpeech: ['noun', 'verb'], ipa: '/ril/',
    chineseShort: '卷轴；一卷；纺车', chineseExplanation: '表示“卷轴；一卷；纺车”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A roll of photographic film holding a series of frames to be projected by a movie projector.',
    examples: [{ english: 'In this context, the word "reel" is used to mean a roll of photographic film holding a series of frames to be projected by a movie projector.', chinese: '在这个语境中，“reel”用于表达“卷轴；一卷；纺车”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tilt', term: 'tilt', normalizedTerm: 'tilt', partOfSpeech: ['noun', 'verb'], ipa: '/tɪlt/',
    chineseShort: '倾斜；倾向；船篷', chineseExplanation: '表示“倾斜；倾向；船篷”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A slight but noticeable partiality.',
    examples: [{ english: 'In this context, the word "tilt" is used to mean a slight but noticeable partiality.', chinese: '在这个语境中，“tilt”用于表达“倾斜；倾向；船篷”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'void', term: 'void', normalizedTerm: 'void', partOfSpeech: ['noun', 'adjective'], ipa: '/vɔɪd/',
    chineseShort: '空虚；空间；空白', chineseExplanation: '表示“空虚；空间；空白”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An empty area or space.',
    examples: [{ english: 'In this context, the word "void" is used to mean an empty area or space.', chinese: '在这个语境中，“void”用于表达“空虚；空间；空白”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gauge', term: 'gauge', normalizedTerm: 'gauge', partOfSpeech: ['noun', 'verb'], ipa: '/ɡeɪdʒ/',
    chineseShort: '标准度量；计量器', chineseExplanation: '表示“标准度量；计量器”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A measuring instrument for measuring and indicating a quantity such as the thickness of wire or the amount of rain etc.',
    examples: [{ english: 'In this context, the word "gauge" is used to mean a measuring instrument for measuring and indicating a quantity such as the thickness of wire or the amount of rain etc.', chinese: '在这个语境中，“gauge”用于表达“标准度量；计量器”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lofty', term: 'lofty', normalizedTerm: 'lofty', partOfSpeech: ['adjective'], ipa: '/\'lɔfti/',
    chineseShort: '高的；傲慢的；崇高的', chineseExplanation: '表示“高的；傲慢的；崇高的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of high moral or intellectual value; elevated in nature or style.',
    examples: [{ english: 'In this context, the word "lofty" is used to mean of high moral or intellectual value; elevated in nature or style.', chinese: '在这个语境中，“lofty”用于表达“高的；傲慢的；崇高的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'integral', term: 'integral', normalizedTerm: 'integral', partOfSpeech: ['noun', 'adjective'], ipa: '/ɪn\'teɡrəl/',
    chineseShort: '整体；积分；整数', chineseExplanation: '表示“整体；积分；整数”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The result of a mathematical integration; F(x) is the integral of f(x) if dF/dx = f(x).',
    examples: [{ english: 'In this context, the word "integral" is used to mean the result of a mathematical integration; F(x) is the integral of f(x) if dF/dx = f(x).', chinese: '在这个语境中，“integral”用于表达“整体；积分；整数”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sturdy', term: 'sturdy', normalizedTerm: 'sturdy', partOfSpeech: ['adjective'], ipa: '/\'stɜrdi/',
    chineseShort: '强健的；健全的', chineseExplanation: '表示“强健的；健全的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Substantially made or constructed.',
    examples: [{ english: 'In this context, the word "sturdy" is used to mean substantially made or constructed.', chinese: '在这个语境中，“sturdy”用于表达“强健的；健全的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'invert', term: 'invert', normalizedTerm: 'invert', partOfSpeech: ['adjective', 'verb'], ipa: '/ɪnˈvɜrt/',
    chineseShort: '转化的', chineseExplanation: '表示“转化的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Make an inversion (in a musical composition).',
    examples: [{ english: 'In this context, the word "invert" is used to mean make an inversion (in a musical composition).', chinese: '在这个语境中，“invert”用于表达“转化的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'accelerate', term: 'accelerate', normalizedTerm: 'accelerate', partOfSpeech: ['verb'], ipa: '/ək\'selə.reɪt/',
    chineseShort: '加速；促进', chineseExplanation: '表示“加速；促进”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Move faster.',
    examples: [{ english: 'In this context, the word "accelerate" is used to mean move faster.', chinese: '在这个语境中，“accelerate”用于表达“加速；促进”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sober', term: 'sober', normalizedTerm: 'sober', partOfSpeech: ['adjective', 'verb'], ipa: '/\'soʊbər/',
    chineseShort: '未醉的；稳重的；节制的', chineseExplanation: '表示“未醉的；稳重的；节制的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Not affected by a chemical substance (especially alcohol).',
    examples: [{ english: 'In this context, the word "sober" is used to mean not affected by a chemical substance (especially alcohol).', chinese: '在这个语境中，“sober”用于表达“未醉的；稳重的；节制的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sow', term: 'sow', normalizedTerm: 'sow', partOfSpeech: ['noun', 'verb'], ipa: '/saʊ/',
    chineseShort: '母猪；懒胖女人', chineseExplanation: '表示“母猪；懒胖女人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An adult female hog.',
    examples: [{ english: 'In this context, the word "sow" is used to mean an adult female hog.', chinese: '在这个语境中，“sow”用于表达“母猪；懒胖女人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vex', term: 'vex', normalizedTerm: 'vex', partOfSpeech: ['verb'], ipa: '/veks/',
    chineseShort: '使烦恼；使苦恼', chineseExplanation: '表示“使烦恼；使苦恼”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Subject to prolonged examination, discussion, or deliberation.',
    examples: [{ english: 'In this context, the word "vex" is used to mean subject to prolonged examination, discussion, or deliberation.', chinese: '在这个语境中，“vex”用于表达“使烦恼；使苦恼”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'consolidate', term: 'consolidate', normalizedTerm: 'consolidate', partOfSpeech: ['verb'], ipa: '/kən\'sɑlɪ.deɪt/',
    chineseShort: '巩固；使联合；统一', chineseExplanation: '表示“巩固；使联合；统一”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Unite into one.',
    examples: [{ english: 'In this context, the word "consolidate" is used to mean unite into one.', chinese: '在这个语境中，“consolidate”用于表达“巩固；使联合；统一”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'drainage', term: 'drainage', normalizedTerm: 'drainage', partOfSpeech: ['noun'], ipa: '/\'dreɪnɪdʒ/',
    chineseShort: '排水', chineseExplanation: '表示“排水”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Emptying something accomplished by allowing liquid to run out of it.',
    examples: [{ english: 'In this context, the word "drainage" is used to mean emptying something accomplished by allowing liquid to run out of it.', chinese: '在这个语境中，“drainage”用于表达“排水”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'desolate', term: 'desolate', normalizedTerm: 'desolate', partOfSpeech: ['adjective'], ipa: '/\'desələt/',
    chineseShort: '荒凉的', chineseExplanation: '表示“荒凉的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Crushed by grief.',
    examples: [{ english: 'In this context, the word "desolate" is used to mean crushed by grief.', chinese: '在这个语境中，“desolate”用于表达“荒凉的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brutal', term: 'brutal', normalizedTerm: 'brutal', partOfSpeech: ['adjective'], ipa: '/\'brut(ə)l/',
    chineseShort: '残忍的；野蛮的；不讲理的', chineseExplanation: '表示“残忍的；野蛮的；不讲理的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Harsh.',
    examples: [{ english: 'In this context, the word "brutal" is used to mean harsh.', chinese: '在这个语境中，“brutal”用于表达“残忍的；野蛮的；不讲理的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'allege', term: 'allege', normalizedTerm: 'allege', partOfSpeech: ['verb'], ipa: '/ə\'ledʒ/',
    chineseShort: '宣称；主张；提出', chineseExplanation: '表示“宣称；主张；提出”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Report or maintain.',
    examples: [{ english: 'In this context, the word "allege" is used to mean report or maintain.', chinese: '在这个语境中，“allege”用于表达“宣称；主张；提出”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'asset', term: 'asset', normalizedTerm: 'asset', partOfSpeech: ['noun'], ipa: '/\'æset/',
    chineseShort: '资产；有益的东西', chineseExplanation: '表示“资产；有益的东西”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A useful or valuable quality.',
    examples: [{ english: 'In this context, the word "asset" is used to mean a useful or valuable quality.', chinese: '在这个语境中，“asset”用于表达“资产；有益的东西”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cling', term: 'cling', normalizedTerm: 'cling', partOfSpeech: ['verb', 'noun'], ipa: '/klɪŋ/',
    chineseShort: '粘紧；附着；紧贴', chineseExplanation: '表示“粘紧；附着；紧贴”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Come or be in close contact with; stick or hold together and resist separation.',
    examples: [{ english: 'In this context, the word "cling" is used to mean come or be in close contact with; stick or hold together and resist separation.', chinese: '在这个语境中，“cling”用于表达“粘紧；附着；紧贴”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'expenditure', term: 'expenditure', normalizedTerm: 'expenditure', partOfSpeech: ['noun'], ipa: '/ɪk\'spendɪtʃər/',
    chineseShort: '开支；费用；用光', chineseExplanation: '表示“开支；费用；用光”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Money paid out; an amount spent.',
    examples: [{ english: 'In this context, the word "expenditure" is used to mean money paid out; an amount spent.', chinese: '在这个语境中，“expenditure”用于表达“开支；费用；用光”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'isolate', term: 'isolate', normalizedTerm: 'isolate', partOfSpeech: ['verb', 'noun'], ipa: '/\'aɪsə.leɪt/',
    chineseShort: '使隔离；使孤立；使绝缘', chineseExplanation: '表示“使隔离；使孤立；使绝缘”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Place or set apart.',
    examples: [{ english: 'In this context, the word "isolate" is used to mean place or set apart.', chinese: '在这个语境中，“isolate”用于表达“使隔离；使孤立；使绝缘”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'monopoly', term: 'monopoly', normalizedTerm: 'monopoly', partOfSpeech: ['noun'], ipa: '/mə\'nɑpəli/',
    chineseShort: '垄断；专卖权；独占事业', chineseExplanation: '表示“垄断；专卖权；独占事业”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(economics) a market in which there are many buyers but only one seller.',
    examples: [{ english: 'In this context, the word "monopoly" is used to mean (economics) a market in which there are many buyers but only one seller.', chinese: '在这个语境中，“monopoly”用于表达“垄断；专卖权；独占事业”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'premise', term: 'premise', normalizedTerm: 'premise', partOfSpeech: ['noun', 'verb'], ipa: '/\'premɪs/',
    chineseShort: '前提；房屋连地基；上述各项', chineseExplanation: '表示“前提；房屋连地基；上述各项”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A statement that is assumed to be true and from which a conclusion can be drawn.',
    examples: [{ english: 'In this context, the word "premise" is used to mean a statement that is assumed to be true and from which a conclusion can be drawn.', chinese: '在这个语境中，“premise”用于表达“前提；房屋连地基；上述各项”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reign', term: 'reign', normalizedTerm: 'reign', partOfSpeech: ['verb', 'noun'], ipa: '/reɪn/',
    chineseShort: '为王；为君；当政', chineseExplanation: '表示“为王；为君；当政”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Have sovereign power.',
    examples: [{ english: 'In this context, the word "reign" is used to mean have sovereign power.', chinese: '在这个语境中，“reign”用于表达“为王；为君；当政”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'render', term: 'render', normalizedTerm: 'render', partOfSpeech: ['verb', 'noun'], ipa: '/\'rendər/',
    chineseShort: '回报；给于；付给', chineseExplanation: '表示“回报；给于；付给”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to become.',
    examples: [{ english: 'In this context, the word "render" is used to mean cause to become.', chinese: '在这个语境中，“render”用于表达“回报；给于；付给”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'subsidiary', term: 'subsidiary', normalizedTerm: 'subsidiary', partOfSpeech: ['noun', 'adjective'], ipa: '/səb\'sɪdi.eri/',
    chineseShort: '子公司；附件；辅助者', chineseExplanation: '表示“子公司；附件；辅助者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An assistant subject to the authority or control of another.',
    examples: [{ english: 'In this context, the word "subsidiary" is used to mean an assistant subject to the authority or control of another.', chinese: '在这个语境中，“subsidiary”用于表达“子公司；附件；辅助者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'abrupt', term: 'abrupt', normalizedTerm: 'abrupt', partOfSpeech: ['adjective'], ipa: '/əˈbrʌpt/',
    chineseShort: '突然的；唐突的；陡峭的', chineseExplanation: '表示“突然的；唐突的；陡峭的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Marked by sudden changes in subject and sharp transitions.',
    examples: [{ english: 'In this context, the word "abrupt" is used to mean marked by sudden changes in subject and sharp transitions.', chinese: '在这个语境中，“abrupt”用于表达“突然的；唐突的；陡峭的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'speculate', term: 'speculate', normalizedTerm: 'speculate', partOfSpeech: ['verb'], ipa: '/\'spekjə.leɪt/',
    chineseShort: '深思；推测；投机', chineseExplanation: '表示“深思；推测；投机”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'To believe especially on uncertain or tentative grounds.',
    examples: [{ english: 'In this context, the word "speculate" is used to mean to believe especially on uncertain or tentative grounds.', chinese: '在这个语境中，“speculate”用于表达“深思；推测；投机”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intuition', term: 'intuition', normalizedTerm: 'intuition', partOfSpeech: ['noun'], ipa: '/.ɪntu\'ɪʃ(ə)n/',
    chineseShort: '直觉；直觉的知识', chineseExplanation: '表示“直觉；直觉的知识”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Instinctive knowing (without the use of rational processes).',
    examples: [{ english: 'In this context, the word "intuition" is used to mean instinctive knowing (without the use of rational processes).', chinese: '在这个语境中，“intuition”用于表达“直觉；直觉的知识”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shuttle', term: 'shuttle', normalizedTerm: 'shuttle', partOfSpeech: ['noun', 'verb'], ipa: '/\'ʃʌt(ə)l/',
    chineseShort: '穿梭；梭子；往返移动之物', chineseExplanation: '表示“穿梭；梭子；往返移动之物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Public transport that consists of a bus or train or airplane that plies back and forth between two points.',
    examples: [{ english: 'In this context, the word "shuttle" is used to mean public transport that consists of a bus or train or airplane that plies back and forth between two points.', chinese: '在这个语境中，“shuttle”用于表达“穿梭；梭子；往返移动之物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sovereign', term: 'sovereign', normalizedTerm: 'sovereign', partOfSpeech: ['noun', 'adjective'], ipa: '/\'sɑvrən/',
    chineseShort: '元首；独立国', chineseExplanation: '表示“元首；独立国”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A nation\'s ruler or head of state usually by hereditary right.',
    examples: [{ english: 'In this context, the word "sovereign" is used to mean a nation\'s ruler or head of state usually by hereditary right.', chinese: '在这个语境中，“sovereign”用于表达“元首；独立国”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dialect', term: 'dialect', normalizedTerm: 'dialect', partOfSpeech: ['noun'], ipa: '/\'daɪə.lekt/',
    chineseShort: '方言；同源语', chineseExplanation: '表示“方言；同源语”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The usage or vocabulary that is characteristic of a specific group of people.',
    examples: [{ english: 'In this context, the word "dialect" is used to mean the usage or vocabulary that is characteristic of a specific group of people.', chinese: '在这个语境中，“dialect”用于表达“方言；同源语”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'foster', term: 'foster', normalizedTerm: 'foster', partOfSpeech: ['adjective', 'verb'], ipa: '/\'fɑstər/',
    chineseShort: '收养的；养育的', chineseExplanation: '表示“收养的；养育的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'United States songwriter whose songs embody the sentiment of the South before the American Civil War (1826-1864).',
    examples: [{ english: 'In this context, the word "foster" is used to mean united States songwriter whose songs embody the sentiment of the South before the American Civil War (1826-1864).', chinese: '在这个语境中，“foster”用于表达“收养的；养育的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'abbreviation', term: 'abbreviation', normalizedTerm: 'abbreviation', partOfSpeech: ['noun'], ipa: '/əˌbriːvi\'eɪʃn/',
    chineseShort: '缩写词；缩写；缩短', chineseExplanation: '表示“缩写词；缩写；缩短”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A shortened form of a word or phrase.',
    examples: [{ english: 'In this context, the word "abbreviation" is used to mean a shortened form of a word or phrase.', chinese: '在这个语境中，“abbreviation”用于表达“缩写词；缩写；缩短”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'adjoin', term: 'adjoin', normalizedTerm: 'adjoin', partOfSpeech: ['verb'], ipa: '/ə\'dʒɔɪn/',
    chineseShort: '邻接；毗连', chineseExplanation: '表示“邻接；毗连”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Attach or add.',
    examples: [{ english: 'In this context, the word "adjoin" is used to mean attach or add.', chinese: '在这个语境中，“adjoin”用于表达“邻接；毗连”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'aerial', term: 'aerial', normalizedTerm: 'aerial', partOfSpeech: ['adjective', 'noun'], ipa: '/\'eriəl/',
    chineseShort: '空中的；航空的；空气的', chineseExplanation: '表示“空中的；航空的；空气的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Existing or living or growing or operating in the air.',
    examples: [{ english: 'In this context, the word "aerial" is used to mean existing or living or growing or operating in the air.', chinese: '在这个语境中，“aerial”用于表达“空中的；航空的；空气的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'alloy', term: 'alloy', normalizedTerm: 'alloy', partOfSpeech: ['noun', 'verb'], ipa: '/\'ælɔɪ/',
    chineseShort: '合金', chineseExplanation: '表示“合金”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A mixture containing two or more metallic elements or metallic and nonmetallic elements usually fused together or dissolving into each other when molten.',
    examples: [{ english: 'In this context, the word "alloy" is used to mean a mixture containing two or more metallic elements or metallic and nonmetallic elements usually fused together or dissolving into each other when molten.', chinese: '在这个语境中，“alloy”用于表达“合金”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ascend', term: 'ascend', normalizedTerm: 'ascend', partOfSpeech: ['verb'], ipa: '/ə\'send/',
    chineseShort: '上升；追溯；登高', chineseExplanation: '表示“上升；追溯；登高”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Travel up, "We ascended the mountain".',
    examples: [{ english: 'In this context, the word "ascend" is used to mean travel up, "We ascended the mountain".', chinese: '在这个语境中，“ascend”用于表达“上升；追溯；登高”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'baffle', term: 'baffle', normalizedTerm: 'baffle', partOfSpeech: ['verb', 'noun'], ipa: '/\'bæf(ə)l/',
    chineseShort: '困惑；为难；使挫折', chineseExplanation: '表示“困惑；为难；使挫折”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Check the emission of (sound).',
    examples: [{ english: 'In this context, the word "baffle" is used to mean check the emission of (sound).', chinese: '在这个语境中，“baffle”用于表达“困惑；为难；使挫折”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'beforehand', term: 'beforehand', normalizedTerm: 'beforehand', partOfSpeech: ['adverb', 'adjective'], ipa: '/bɪ\'fɔr.hænd/',
    chineseShort: '预先', chineseExplanation: '表示以“预先”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'Ahead of time; in anticipation.',
    examples: [{ english: 'In this context, the word "beforehand" is used to mean ahead of time; in anticipation.', chinese: '在这个语境中，“beforehand”用于表达“预先”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bribe', term: 'bribe', normalizedTerm: 'bribe', partOfSpeech: ['noun', 'verb'], ipa: '/braɪb/',
    chineseShort: '贿赂', chineseExplanation: '表示“贿赂”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Payment made to a person in a position of trust to corrupt his judgment.',
    examples: [{ english: 'In this context, the word "bribe" is used to mean payment made to a person in a position of trust to corrupt his judgment.', chinese: '在这个语境中，“bribe”用于表达“贿赂”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bundle', term: 'bundle', normalizedTerm: 'bundle', partOfSpeech: ['noun', 'verb'], ipa: '/\'bʌnd(ə)l/',
    chineseShort: '捆；束', chineseExplanation: '表示“捆；束”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A package of several things tied together for carrying or storing.',
    examples: [{ english: 'In this context, the word "bundle" is used to mean a package of several things tied together for carrying or storing.', chinese: '在这个语境中，“bundle”用于表达“捆；束”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cement', term: 'cement', normalizedTerm: 'cement', partOfSpeech: ['noun', 'verb'], ipa: '/sə\'ment/',
    chineseShort: '水泥；胶结剂', chineseExplanation: '表示“水泥；胶结剂”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Concrete pavement is sometimes referred to as cement.',
    examples: [{ english: 'In this context, the word "cement" is used to mean concrete pavement is sometimes referred to as cement.', chinese: '在这个语境中，“cement”用于表达“水泥；胶结剂”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'chill', term: 'chill', normalizedTerm: 'chill', partOfSpeech: ['noun', 'adjective'], ipa: '/tʃɪl/',
    chineseShort: '寒冷；寒意；失意', chineseExplanation: '表示“寒冷；寒意；失意”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Coldness due to a cold environment.',
    examples: [{ english: 'In this context, the word "chill" is used to mean coldness due to a cold environment.', chinese: '在这个语境中，“chill”用于表达“寒冷；寒意；失意”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'clasp', term: 'clasp', normalizedTerm: 'clasp', partOfSpeech: ['noun', 'verb'], ipa: '/klæsp/',
    chineseShort: '扣子；钩；紧握', chineseExplanation: '表示“扣子；钩；紧握”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A fastener (as a buckle or hook) that is used to hold two things together.',
    examples: [{ english: 'In this context, the word "clasp" is used to mean a fastener (as a buckle or hook) that is used to hold two things together.', chinese: '在这个语境中，“clasp”用于表达“扣子；钩；紧握”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'clockwise', term: 'clockwise', normalizedTerm: 'clockwise', partOfSpeech: ['adjective', 'adverb'], ipa: '/\'klɒkwaɪz/',
    chineseShort: '顺时针方向的', chineseExplanation: '表示“顺时针方向的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'In the same direction as the rotating hands of a clock.',
    examples: [{ english: 'In this context, the word "clockwise" is used to mean in the same direction as the rotating hands of a clock.', chinese: '在这个语境中，“clockwise”用于表达“顺时针方向的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'closet', term: 'closet', normalizedTerm: 'closet', partOfSpeech: ['noun', 'adjective'], ipa: '/\'klɑzət/',
    chineseShort: '壁橱；小室', chineseExplanation: '表示“壁橱；小室”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A small private room for study or prayer.',
    examples: [{ english: 'In this context, the word "closet" is used to mean a small private room for study or prayer.', chinese: '在这个语境中，“closet”用于表达“壁橱；小室”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'combat', term: 'combat', normalizedTerm: 'combat', partOfSpeech: ['noun', 'verb'], ipa: '/kəm\'bæt/',
    chineseShort: '争斗；战斗', chineseExplanation: '表示“争斗；战斗”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An engagement fought between two military forces.',
    examples: [{ english: 'In this context, the word "combat" is used to mean an engagement fought between two military forces.', chinese: '在这个语境中，“combat”用于表达“争斗；战斗”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'commend', term: 'commend', normalizedTerm: 'commend', partOfSpeech: ['verb'], ipa: '/kə\'mend/',
    chineseShort: '嘉奖；委托给；推荐', chineseExplanation: '表示“嘉奖；委托给；推荐”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Express approval of.',
    examples: [{ english: 'In this context, the word "commend" is used to mean express approval of.', chinese: '在这个语境中，“commend”用于表达“嘉奖；委托给；推荐”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'consequent', term: 'consequent', normalizedTerm: 'consequent', partOfSpeech: ['noun', 'adjective'], ipa: '/\'kɑnsəkwənt/',
    chineseShort: '随后发生的事情；结果', chineseExplanation: '表示“随后发生的事情；结果”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Following or accompanying as a consequence.',
    examples: [{ english: 'In this context, the word "consequent" is used to mean following or accompanying as a consequence.', chinese: '在这个语境中，“consequent”用于表达“随后发生的事情；结果”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'culminate', term: 'culminate', normalizedTerm: 'culminate', partOfSpeech: ['verb'], ipa: '/\'kʌlmineit/',
    chineseShort: '到绝顶；达于极点；达到高潮', chineseExplanation: '表示“到绝顶；达于极点；达到高潮”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'End, especially to reach a final or climactic stage.',
    examples: [{ english: 'In this context, the word "culminate" is used to mean end, especially to reach a final or climactic stage.', chinese: '在这个语境中，“culminate”用于表达“到绝顶；达于极点；达到高潮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cynical', term: 'cynical', normalizedTerm: 'cynical', partOfSpeech: ['adjective'], ipa: '/\'sɪnɪk(ə)l/',
    chineseShort: '愤世嫉俗的；讽刺的；冷嘲的', chineseExplanation: '表示“愤世嫉俗的；讽刺的；冷嘲的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Believing the worst of human nature and motives; having a sneering disbelief in e.g. selflessness of others.',
    examples: [{ english: 'In this context, the word "cynical" is used to mean believing the worst of human nature and motives; having a sneering disbelief in e.g. selflessness of others.', chinese: '在这个语境中，“cynical”用于表达“愤世嫉俗的；讽刺的；冷嘲的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'degrade', term: 'degrade', normalizedTerm: 'degrade', partOfSpeech: ['verb'], ipa: '/dɪ\'ɡreɪd/',
    chineseShort: '(使)降级；(使)退化', chineseExplanation: '表示“(使)降级；(使)退化”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Reduce the level of land, as by erosion.',
    examples: [{ english: 'In this context, the word "degrade" is used to mean reduce the level of land, as by erosion.', chinese: '在这个语境中，“degrade”用于表达“(使)降级；(使)退化”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'despatch', term: 'despatch', normalizedTerm: 'despatch', partOfSpeech: ['verb', 'noun'], ipa: '/di\'spætʃ/',
    chineseShort: '派遣', chineseExplanation: '表示“派遣”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Send away towards a designated goal.',
    examples: [{ english: 'In this context, the word "despatch" is used to mean send away towards a designated goal.', chinese: '在这个语境中，“despatch”用于表达“派遣”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'destine', term: 'destine', normalizedTerm: 'destine', partOfSpeech: ['verb'], ipa: '/\'destin/',
    chineseShort: '注定；预定', chineseExplanation: '表示“注定；预定”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Decree or designate beforehand.',
    examples: [{ english: 'In this context, the word "destine" is used to mean decree or designate beforehand.', chinese: '在这个语境中，“destine”用于表达“注定；预定”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'drawback', term: 'drawback', normalizedTerm: 'drawback', partOfSpeech: ['noun'], ipa: '/\'drɔ.bæk/',
    chineseShort: '缺点；退税', chineseExplanation: '表示“缺点；退税”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The quality of being a hindrance.',
    examples: [{ english: 'In this context, the word "drawback" is used to mean the quality of being a hindrance.', chinese: '在这个语境中，“drawback”用于表达“缺点；退税”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'durable', term: 'durable', normalizedTerm: 'durable', partOfSpeech: ['adjective'], ipa: '/ˈdʊrəb(ə)l/',
    chineseShort: '持久的；耐用的', chineseExplanation: '表示“持久的；耐用的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Existing for a long time.',
    examples: [{ english: 'In this context, the word "durable" is used to mean existing for a long time.', chinese: '在这个语境中，“durable”用于表达“持久的；耐用的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dwell', term: 'dwell', normalizedTerm: 'dwell', partOfSpeech: ['verb'], ipa: '/dwel/',
    chineseShort: '居住；居住(于)；存在(于)', chineseExplanation: '表示“居住；居住(于)；存在(于)”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Originate (in).',
    examples: [{ english: 'In this context, the word "dwell" is used to mean originate (in).', chinese: '在这个语境中，“dwell”用于表达“居住；居住(于)；存在(于)”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'eclipse', term: 'eclipse', normalizedTerm: 'eclipse', partOfSpeech: ['noun', 'verb'], ipa: '/ɪ\'klɪps/',
    chineseShort: '日食；月食；(地位名誉等的)消失', chineseExplanation: '表示“日食；月食；(地位名誉等的)消失”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'One celestial body obscures another.',
    examples: [{ english: 'In this context, the word "eclipse" is used to mean one celestial body obscures another.', chinese: '在这个语境中，“eclipse”用于表达“日食；月食；(地位名誉等的)消失”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elapse', term: 'elapse', normalizedTerm: 'elapse', partOfSpeech: ['verb', 'noun'], ipa: '/ɪ\'læps/',
    chineseShort: '逝去；过去', chineseExplanation: '表示“逝去；过去”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Pass by.',
    examples: [{ english: 'In this context, the word "elapse" is used to mean pass by.', chinese: '在这个语境中，“elapse”用于表达“逝去；过去”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ensue', term: 'ensue', normalizedTerm: 'ensue', partOfSpeech: ['verb'], ipa: '/ɪn\'su/',
    chineseShort: '跟着发生；继起', chineseExplanation: '表示“跟着发生；继起”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Issue or terminate (in a specified way, state, etc.); end.',
    examples: [{ english: 'In this context, the word "ensue" is used to mean issue or terminate (in a specified way, state, etc.); end.', chinese: '在这个语境中，“ensue”用于表达“跟着发生；继起”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'erroneous', term: 'erroneous', normalizedTerm: 'erroneous', partOfSpeech: ['adjective'], ipa: '/ɪ\'roʊniəs/',
    chineseShort: '错误的；不正确的', chineseExplanation: '表示“错误的；不正确的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Containing or characterized by error.',
    examples: [{ english: 'In this context, the word "erroneous" is used to mean containing or characterized by error.', chinese: '在这个语境中，“erroneous”用于表达“错误的；不正确的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'expend', term: 'expend', normalizedTerm: 'expend', partOfSpeech: ['verb'], ipa: '/ɪk\'spend/',
    chineseShort: '花费；消耗；用光', chineseExplanation: '表示“花费；消耗；用光”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Use up, consume fully.',
    examples: [{ english: 'In this context, the word "expend" is used to mean use up, consume fully.', chinese: '在这个语境中，“expend”用于表达“花费；消耗；用光”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'extravagant', term: 'extravagant', normalizedTerm: 'extravagant', partOfSpeech: ['adjective'], ipa: '/ɪk\'strævəɡənt/',
    chineseShort: '奢侈的；挥霍无度的；浪费的', chineseExplanation: '表示“奢侈的；挥霍无度的；浪费的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Recklessly wasteful.',
    examples: [{ english: 'In this context, the word "extravagant" is used to mean recklessly wasteful.', chinese: '在这个语境中，“extravagant”用于表达“奢侈的；挥霍无度的；浪费的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'filth', term: 'filth', normalizedTerm: 'filth', partOfSpeech: ['noun'], ipa: '/fɪlθ/',
    chineseShort: '污秽；不洁；猥亵', chineseExplanation: '表示“污秽；不洁；猥亵”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any substance considered disgustingly foul or unpleasant.',
    examples: [{ english: 'In this context, the word "filth" is used to mean any substance considered disgustingly foul or unpleasant.', chinese: '在这个语境中，“filth”用于表达“污秽；不洁；猥亵”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'finite', term: 'finite', normalizedTerm: 'finite', partOfSpeech: ['adjective', 'noun'], ipa: '/\'faɪ.naɪt/',
    chineseShort: '有限的；有穷的；限定的', chineseExplanation: '表示“有限的；有穷的；限定的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Bounded or limited in magnitude or spatial or temporal extent.',
    examples: [{ english: 'In this context, the word "finite" is used to mean bounded or limited in magnitude or spatial or temporal extent.', chinese: '在这个语境中，“finite”用于表达“有限的；有穷的；限定的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flake', term: 'flake', normalizedTerm: 'flake', partOfSpeech: ['noun', 'verb'], ipa: '/flek/',
    chineseShort: '小薄片；扁薄的一层；火星', chineseExplanation: '表示“小薄片；扁薄的一层；火星”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Form into flakes.',
    examples: [{ english: 'In this context, the word "flake" is used to mean form into flakes.', chinese: '在这个语境中，“flake”用于表达“小薄片；扁薄的一层；火星”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gamble', term: 'gamble', normalizedTerm: 'gamble', partOfSpeech: ['noun', 'verb'], ipa: '/\'ɡæmb(ə)l/',
    chineseShort: '赌博；冒险', chineseExplanation: '表示“赌博；冒险”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Money that is risked for possible monetary gain.',
    examples: [{ english: 'In this context, the word "gamble" is used to mean money that is risked for possible monetary gain.', chinese: '在这个语境中，“gamble”用于表达“赌博；冒险”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gigantic', term: 'gigantic', normalizedTerm: 'gigantic', partOfSpeech: ['adjective'], ipa: '/dʒaɪ\'ɡæntɪk/',
    chineseShort: '巨人般的；巨大的', chineseExplanation: '表示“巨人般的；巨大的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'So exceedingly large or extensive as to suggest a giant or mammoth.',
    examples: [{ english: 'In this context, the word "gigantic" is used to mean so exceedingly large or extensive as to suggest a giant or mammoth.', chinese: '在这个语境中，“gigantic”用于表达“巨人般的；巨大的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'glitter', term: 'glitter', normalizedTerm: 'glitter', partOfSpeech: ['noun', 'verb'], ipa: '/\'ɡlɪtər/',
    chineseShort: '灿烂；闪烁；辉耀', chineseExplanation: '表示“灿烂；闪烁；辉耀”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The quality of shining with a bright reflected light.',
    examples: [{ english: 'In this context, the word "glitter" is used to mean the quality of shining with a bright reflected light.', chinese: '在这个语境中，“glitter”用于表达“灿烂；闪烁；辉耀”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'groan', term: 'groan', normalizedTerm: 'groan', partOfSpeech: ['noun', 'verb'], ipa: '/ɡroʊn/',
    chineseShort: '呻吟；叹息', chineseExplanation: '表示“呻吟；叹息”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An utterance expressing pain or disapproval.',
    examples: [{ english: 'In this context, the word "groan" is used to mean an utterance expressing pain or disapproval.', chinese: '在这个语境中，“groan”用于表达“呻吟；叹息”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'growl', term: 'growl', normalizedTerm: 'growl', partOfSpeech: ['noun', 'verb'], ipa: '/ɡraʊl/',
    chineseShort: '吠声；咆哮声', chineseExplanation: '表示“吠声；咆哮声”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The sound of growling (as made by animals).',
    examples: [{ english: 'In this context, the word "growl" is used to mean the sound of growling (as made by animals).', chinese: '在这个语境中，“growl”用于表达“吠声；咆哮声”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'indefinite', term: 'indefinite', normalizedTerm: 'indefinite', partOfSpeech: ['adjective'], ipa: '/ɪn\'def(ə)nɪt/',
    chineseShort: '模糊的；不确定的；无限的', chineseExplanation: '表示“模糊的；不确定的；无限的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Vague or not clearly defined or stated.',
    examples: [{ english: 'In this context, the word "indefinite" is used to mean vague or not clearly defined or stated.', chinese: '在这个语境中，“indefinite”用于表达“模糊的；不确定的；无限的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'innumerable', term: 'innumerable', normalizedTerm: 'innumerable', partOfSpeech: ['adjective'], ipa: '/ɪ\'numərəb(ə)l/',
    chineseShort: '无数的；数不清的', chineseExplanation: '表示“无数的；数不清的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Too numerous to be counted.',
    examples: [{ english: 'In this context, the word "innumerable" is used to mean too numerous to be counted.', chinese: '在这个语境中，“innumerable”用于表达“无数的；数不清的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'interim', term: 'interim', normalizedTerm: 'interim', partOfSpeech: ['adjective', 'noun'], ipa: '/\'ɪntərɪm/',
    chineseShort: '暂时的；临时的；间歇的', chineseExplanation: '表示“暂时的；临时的；间歇的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Serving during an intermediate interval of time.',
    examples: [{ english: 'In this context, the word "interim" is used to mean serving during an intermediate interval of time.', chinese: '在这个语境中，“interim”用于表达“暂时的；临时的；间歇的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'invaluable', term: 'invaluable', normalizedTerm: 'invaluable', partOfSpeech: ['adjective'], ipa: '/ɪn\'væljuəb(ə)l/',
    chineseShort: '无价的；价值无法衡量的', chineseExplanation: '表示“无价的；价值无法衡量的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having incalculable monetary, intellectual, or spiritual worth.',
    examples: [{ english: 'In this context, the word "invaluable" is used to mean having incalculable monetary, intellectual, or spiritual worth.', chinese: '在这个语境中，“invaluable”用于表达“无价的；价值无法衡量的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'invoice', term: 'invoice', normalizedTerm: 'invoice', partOfSpeech: ['noun', 'verb'], ipa: '/\'invɒis/',
    chineseShort: '发票；发货单', chineseExplanation: '表示“发票；发货单”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Send an bill to.',
    examples: [{ english: 'In this context, the word "invoice" is used to mean send an bill to.', chinese: '在这个语境中，“invoice”用于表达“发票；发货单”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lever', term: 'lever', normalizedTerm: 'lever', partOfSpeech: ['noun', 'verb'], ipa: '/\'liːvə(r)/',
    chineseShort: '杠杆；似杠杆之工具', chineseExplanation: '表示“杠杆；似杠杆之工具”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A rigid bar pivoted about a fulcrum.',
    examples: [{ english: 'In this context, the word "lever" is used to mean a rigid bar pivoted about a fulcrum.', chinese: '在这个语境中，“lever”用于表达“杠杆；似杠杆之工具”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'livestock', term: 'livestock', normalizedTerm: 'livestock', partOfSpeech: ['noun'], ipa: '/ˈlaɪvˌstɑk/',
    chineseShort: '家畜', chineseExplanation: '表示“家畜”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any animals kept for use or profit.',
    examples: [{ english: 'In this context, the word "livestock" is used to mean any animals kept for use or profit.', chinese: '在这个语境中，“livestock”用于表达“家畜”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'lubricate', term: 'lubricate', normalizedTerm: 'lubricate', partOfSpeech: ['verb'], ipa: '/\'lubrɪ.keɪt/',
    chineseShort: '使润滑；涂油', chineseExplanation: '表示“使润滑；涂油”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Have lubricating properties.',
    examples: [{ english: 'In this context, the word "lubricate" is used to mean have lubricating properties.', chinese: '在这个语境中，“lubricate”用于表达“使润滑；涂油”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'manifest', term: 'manifest', normalizedTerm: 'manifest', partOfSpeech: ['noun', 'adjective'], ipa: '/\'mænɪ.fest/',
    chineseShort: '载货单；运货单；旅客名单', chineseExplanation: '表示“载货单；运货单；旅客名单”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A customs document listing the contents put on a ship or plane.',
    examples: [{ english: 'In this context, the word "manifest" is used to mean a customs document listing the contents put on a ship or plane.', chinese: '在这个语境中，“manifest”用于表达“载货单；运货单；旅客名单”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'manuscript', term: 'manuscript', normalizedTerm: 'manuscript', partOfSpeech: ['noun', 'adjective'], ipa: '/\'mænjə.skrɪpt/',
    chineseShort: '手稿；原稿；底稿', chineseExplanation: '表示“手稿；原稿；底稿”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The form of a literary work submitted for publication.',
    examples: [{ english: 'In this context, the word "manuscript" is used to mean the form of a literary work submitted for publication.', chinese: '在这个语境中，“manuscript”用于表达“手稿；原稿；底稿”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'nominal', term: 'nominal', normalizedTerm: 'nominal', partOfSpeech: ['adjective', 'noun'], ipa: '/\'nɑmɪn(ə)l/',
    chineseShort: '名义上的；名字的；有名无实的', chineseExplanation: '表示“名义上的；名字的；有名无实的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or constituting or bearing or giving a name.',
    examples: [{ english: 'In this context, the word "nominal" is used to mean relating to or constituting or bearing or giving a name.', chinese: '在这个语境中，“nominal”用于表达“名义上的；名字的；有名无实的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'obscene', term: 'obscene', normalizedTerm: 'obscene', partOfSpeech: ['adjective'], ipa: '/ɑb\'sin/',
    chineseShort: '淫秽的；猥亵的；讨人厌的', chineseExplanation: '表示“淫秽的；猥亵的；讨人厌的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Designed to incite to indecency or lust.',
    examples: [{ english: 'In this context, the word "obscene" is used to mean designed to incite to indecency or lust.', chinese: '在这个语境中，“obscene”用于表达“淫秽的；猥亵的；讨人厌的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'orthodox', term: 'orthodox', normalizedTerm: 'orthodox', partOfSpeech: ['adjective'], ipa: '/\'ɔrθə.dɑks/',
    chineseShort: '正统的；传统的；惯常的', chineseExplanation: '表示“正统的；传统的；惯常的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or pertaining to or characteristic of Judaism.',
    examples: [{ english: 'In this context, the word "orthodox" is used to mean of or pertaining to or characteristic of Judaism.', chinese: '在这个语境中，“orthodox”用于表达“正统的；传统的；惯常的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'perplex', term: 'perplex', normalizedTerm: 'perplex', partOfSpeech: ['verb'], ipa: '/pər\'pleks/',
    chineseShort: '使困惑；使复杂化；使为难', chineseExplanation: '表示“使困惑；使复杂化；使为难”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be a mystery or bewildering to.',
    examples: [{ english: 'In this context, the word "perplex" is used to mean be a mystery or bewildering to.', chinese: '在这个语境中，“perplex”用于表达“使困惑；使复杂化；使为难”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'persecute', term: 'persecute', normalizedTerm: 'persecute', partOfSpeech: ['verb'], ipa: '/\'pɜrs.ɪkjut/',
    chineseShort: '迫害；虐待；困扰', chineseExplanation: '表示“迫害；虐待；困扰”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause to suffer.',
    examples: [{ english: 'In this context, the word "persecute" is used to mean cause to suffer.', chinese: '在这个语境中，“persecute”用于表达“迫害；虐待；困扰”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'persevere', term: 'persevere', normalizedTerm: 'persevere', partOfSpeech: ['verb'], ipa: '/.pɜsə\'vɪr/',
    chineseShort: '坚持；孜孜不倦；不屈不挠', chineseExplanation: '表示“坚持；孜孜不倦；不屈不挠”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be persistent, refuse to stop.',
    examples: [{ english: 'In this context, the word "persevere" is used to mean be persistent, refuse to stop.', chinese: '在这个语境中，“persevere”用于表达“坚持；孜孜不倦；不屈不挠”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plough', term: 'plough', normalizedTerm: 'plough', partOfSpeech: ['noun', 'verb'], ipa: '/plau/',
    chineseShort: '犁；犁过的地', chineseExplanation: '表示“犁；犁过的地”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A group of seven bright stars in the constellation Ursa Major.',
    examples: [{ english: 'In this context, the word "plough" is used to mean a group of seven bright stars in the constellation Ursa Major.', chinese: '在这个语境中，“plough”用于表达“犁；犁过的地”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'practicable', term: 'practicable', normalizedTerm: 'practicable', partOfSpeech: ['adjective'], ipa: '/\'præktɪkəb(ə)l/',
    chineseShort: '可实行的；可做的；可用的', chineseExplanation: '表示“可实行的；可做的；可用的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Usable for a specific purpose.',
    examples: [{ english: 'In this context, the word "practicable" is used to mean usable for a specific purpose.', chinese: '在这个语境中，“practicable”用于表达“可实行的；可做的；可用的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'preface', term: 'preface', normalizedTerm: 'preface', partOfSpeech: ['noun', 'verb'], ipa: '/\'prefəs/',
    chineseShort: '序；绪言；前言', chineseExplanation: '表示“序；绪言；前言”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A short introductory essay preceding the text of a book.',
    examples: [{ english: 'In this context, the word "preface" is used to mean a short introductory essay preceding the text of a book.', chinese: '在这个语境中，“preface”用于表达“序；绪言；前言”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'proficiency', term: 'proficiency', normalizedTerm: 'proficiency', partOfSpeech: ['noun'], ipa: '/prəˈfiʃ(ə)nsi/',
    chineseShort: '精通；熟练；精练', chineseExplanation: '表示“精通；熟练；精练”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The quality of having great facility and competence.',
    examples: [{ english: 'In this context, the word "proficiency" is used to mean the quality of having great facility and competence.', chinese: '在这个语境中，“proficiency”用于表达“精通；熟练；精练”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'prophecy', term: 'prophecy', normalizedTerm: 'prophecy', partOfSpeech: ['noun'], ipa: '/\'prɑfəsi/',
    chineseShort: '预言；预言能力', chineseExplanation: '表示“预言；预言能力”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Knowledge of the future (usually said to be obtained from a divine source).',
    examples: [{ english: 'In this context, the word "prophecy" is used to mean knowledge of the future (usually said to be obtained from a divine source).', chinese: '在这个语境中，“prophecy”用于表达“预言；预言能力”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ramble', term: 'ramble', normalizedTerm: 'ramble', partOfSpeech: ['noun', 'verb'], ipa: '/\'ræmb(ə)l/',
    chineseShort: '漫步；随笔', chineseExplanation: '表示“漫步；随笔”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An aimless amble on a winding course.',
    examples: [{ english: 'In this context, the word "ramble" is used to mean an aimless amble on a winding course.', chinese: '在这个语境中，“ramble”用于表达“漫步；随笔”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rejoice', term: 'rejoice', normalizedTerm: 'rejoice', partOfSpeech: ['verb'], ipa: '/rɪ\'dʒɔɪs/',
    chineseShort: '使欢喜', chineseExplanation: '表示“使欢喜”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Feel happiness or joy.',
    examples: [{ english: 'In this context, the word "rejoice" is used to mean feel happiness or joy.', chinese: '在这个语境中，“rejoice”用于表达“使欢喜”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reservoir', term: 'reservoir', normalizedTerm: 'reservoir', partOfSpeech: ['noun', 'verb'], ipa: '/\'rezər.vwɑ/',
    chineseShort: '贮水池；贮藏处；贮备', chineseExplanation: '表示“贮水池；贮藏处；贮备”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A large or extra supply of something.',
    examples: [{ english: 'In this context, the word "reservoir" is used to mean a large or extra supply of something.', chinese: '在这个语境中，“reservoir”用于表达“贮水池；贮藏处；贮备”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'resistant', term: 'resistant', normalizedTerm: 'resistant', partOfSpeech: ['noun', 'adjective'], ipa: '/rɪ\'zɪstənt/',
    chineseShort: '抵抗者；反抗者', chineseExplanation: '表示“抵抗者；反抗者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Impervious to being affected.',
    examples: [{ english: 'In this context, the word "resistant" is used to mean impervious to being affected.', chinese: '在这个语境中，“resistant”用于表达“抵抗者；反抗者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ripple', term: 'ripple', normalizedTerm: 'ripple', partOfSpeech: ['noun', 'verb'], ipa: '/\'rɪp(ə)l/',
    chineseShort: '涟波；涟漪；波纹', chineseExplanation: '表示“涟波；涟漪；波纹”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A small wave on the surface of a liquid.',
    examples: [{ english: 'In this context, the word "ripple" is used to mean a small wave on the surface of a liquid.', chinese: '在这个语境中，“ripple”用于表达“涟波；涟漪；波纹”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ruthless', term: 'ruthless', normalizedTerm: 'ruthless', partOfSpeech: ['adjective'], ipa: '/\'ruθləs/',
    chineseShort: '无情的；残忍的；毫不留情的', chineseExplanation: '表示“无情的；残忍的；毫不留情的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Without mercy or pity.',
    examples: [{ english: 'In this context, the word "ruthless" is used to mean without mercy or pity.', chinese: '在这个语境中，“ruthless”用于表达“无情的；残忍的；毫不留情的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'salute', term: 'salute', normalizedTerm: 'salute', partOfSpeech: ['verb', 'noun'], ipa: '/sə\'lut/',
    chineseShort: '行礼；致意；问候', chineseExplanation: '表示“行礼；致意；问候”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Greet in a friendly way.',
    examples: [{ english: 'In this context, the word "salute" is used to mean greet in a friendly way.', chinese: '在这个语境中，“salute”用于表达“行礼；致意；问候”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sceptical', term: 'sceptical', normalizedTerm: 'sceptical', partOfSpeech: ['adjective'], ipa: '/\'skeptikl/',
    chineseShort: '怀疑论的；怀疑的', chineseExplanation: '表示“怀疑论的；怀疑的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Marked by or given to doubt.',
    examples: [{ english: 'In this context, the word "sceptical" is used to mean marked by or given to doubt.', chinese: '在这个语境中，“sceptical”用于表达“怀疑论的；怀疑的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scorn', term: 'scorn', normalizedTerm: 'scorn', partOfSpeech: ['noun', 'verb'], ipa: '/skɒːn/',
    chineseShort: '轻蔑；藐视；嘲笑', chineseExplanation: '表示“轻蔑；藐视；嘲笑”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Lack of respect accompanied by a feeling of intense dislike.',
    examples: [{ english: 'In this context, the word "scorn" is used to mean lack of respect accompanied by a feeling of intense dislike.', chinese: '在这个语境中，“scorn”用于表达“轻蔑；藐视；嘲笑”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scout', term: 'scout', normalizedTerm: 'scout', partOfSpeech: ['noun', 'verb'], ipa: '/skaʊt/',
    chineseShort: '守候；侦察；搜索', chineseExplanation: '表示“守候；侦察；搜索”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A Boy Scout or Girl Scout.',
    examples: [{ english: 'In this context, the word "scout" is used to mean a Boy Scout or Girl Scout.', chinese: '在这个语境中，“scout”用于表达“守候；侦察；搜索”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'segregate', term: 'segregate', normalizedTerm: 'segregate', partOfSpeech: ['adjective', 'verb'], ipa: '/\'seɡrə.ɡeɪt/',
    chineseShort: '分离的；被隔离的', chineseExplanation: '表示“分离的；被隔离的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Someone who is or has been segregated.',
    examples: [{ english: 'In this context, the word "segregate" is used to mean someone who is or has been segregated.', chinese: '在这个语境中，“segregate”用于表达“分离的；被隔离的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shaft', term: 'shaft', normalizedTerm: 'shaft', partOfSpeech: ['noun', 'verb'], ipa: '/ʃæft/',
    chineseShort: '轴；箭杆；矛', chineseExplanation: '表示“轴；箭杆；矛”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A line that forms the length of an arrow pointer.',
    examples: [{ english: 'In this context, the word "shaft" is used to mean a line that forms the length of an arrow pointer.', chinese: '在这个语境中，“shaft”用于表达“轴；箭杆；矛”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shepherd', term: 'shepherd', normalizedTerm: 'shepherd', partOfSpeech: ['noun', 'verb'], ipa: '/\'ʃepərd/',
    chineseShort: '牧羊人；牧羊犬；牧师', chineseExplanation: '表示“牧羊人；牧羊犬；牧师”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A clergyman who watches over a group of people.',
    examples: [{ english: 'In this context, the word "shepherd" is used to mean a clergyman who watches over a group of people.', chinese: '在这个语境中，“shepherd”用于表达“牧羊人；牧羊犬；牧师”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'slack', term: 'slack', normalizedTerm: 'slack', partOfSpeech: ['noun', 'adjective'], ipa: '/slæk/',
    chineseShort: '松弛；松懈；淡季', chineseExplanation: '表示“松弛；松懈；淡季”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Dust consisting of a mixture of small coal fragments and coal dust and dirt that sifts out when coal is passed over a sieve.',
    examples: [{ english: 'In this context, the word "slack" is used to mean dust consisting of a mixture of small coal fragments and coal dust and dirt that sifts out when coal is passed over a sieve.', chinese: '在这个语境中，“slack”用于表达“松弛；松懈；淡季”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'snatch', term: 'snatch', normalizedTerm: 'snatch', partOfSpeech: ['noun', 'verb'], ipa: '/snætʃ/',
    chineseShort: '抢夺；攫取；片断', chineseExplanation: '表示“抢夺；攫取；片断”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A small fragment.',
    examples: [{ english: 'In this context, the word "snatch" is used to mean a small fragment.', chinese: '在这个语境中，“snatch”用于表达“抢夺；攫取；片断”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stoop', term: 'stoop', normalizedTerm: 'stoop', partOfSpeech: ['noun', 'verb'], ipa: '/stup/',
    chineseShort: '佝偻；屈从；弯腰', chineseExplanation: '表示“佝偻；屈从；弯腰”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An inclination of the top half of the body forward and downward.',
    examples: [{ english: 'In this context, the word "stoop" is used to mean an inclination of the top half of the body forward and downward.', chinese: '在这个语境中，“stoop”用于表达“佝偻；屈从；弯腰”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'strap', term: 'strap', normalizedTerm: 'strap', partOfSpeech: ['noun', 'verb'], ipa: '/stræp/',
    chineseShort: '带；皮带', chineseExplanation: '表示“带；皮带”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An elongated leather strip (or a strip of similar material) for binding things together or holding something in position.',
    examples: [{ english: 'In this context, the word "strap" is used to mean an elongated leather strip (or a strip of similar material) for binding things together or holding something in position.', chinese: '在这个语境中，“strap”用于表达“带；皮带”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'submerge', term: 'submerge', normalizedTerm: 'submerge', partOfSpeech: ['verb'], ipa: '/səbˈmɜr(r)dʒ/',
    chineseShort: '使浸水；使陷入；淹没', chineseExplanation: '表示“使浸水；使陷入；淹没”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Sink below the surface; go under or as if under water.',
    examples: [{ english: 'In this context, the word "submerge" is used to mean sink below the surface; go under or as if under water.', chinese: '在这个语境中，“submerge”用于表达“使浸水；使陷入；淹没”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'subordinate', term: 'subordinate', normalizedTerm: 'subordinate', partOfSpeech: ['noun', 'adjective'], ipa: '/sə\'bɔrd(ə)n.eɪt/',
    chineseShort: '属下；附属物', chineseExplanation: '表示“属下；附属物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An assistant subject to the authority or control of another.',
    examples: [{ english: 'In this context, the word "subordinate" is used to mean an assistant subject to the authority or control of another.', chinese: '在这个语境中，“subordinate”用于表达“属下；附属物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'supplementary', term: 'supplementary', normalizedTerm: 'supplementary', partOfSpeech: ['adjective'], ipa: '/.sʌplə\'ment(ə)ri/',
    chineseShort: '补足的；补充的；追加的', chineseExplanation: '表示“补足的；补充的；追加的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Added to complete or make up a deficiency.',
    examples: [{ english: 'In this context, the word "supplementary" is used to mean added to complete or make up a deficiency.', chinese: '在这个语境中，“supplementary”用于表达“补足的；补充的；追加的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'symposium', term: 'symposium', normalizedTerm: 'symposium', partOfSpeech: ['noun'], ipa: '/sɪm\'poʊziəm/',
    chineseShort: '讨论会；座谈会；专题报告会', chineseExplanation: '表示“讨论会；座谈会；专题报告会”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A meeting or conference for the public discussion of some topic especially one in which the participants form an audience and make presentations.',
    examples: [{ english: 'In this context, the word "symposium" is used to mean a meeting or conference for the public discussion of some topic especially one in which the participants form an audience and make presentations.', chinese: '在这个语境中，“symposium”用于表达“讨论会；座谈会；专题报告会”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'synthetic', term: 'synthetic', normalizedTerm: 'synthetic', partOfSpeech: ['noun', 'adjective'], ipa: '/sɪn\'θetɪk/',
    chineseShort: '合成物质', chineseExplanation: '表示“合成物质”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A compound made artificially by chemical reactions.',
    examples: [{ english: 'In this context, the word "synthetic" is used to mean a compound made artificially by chemical reactions.', chinese: '在这个语境中，“synthetic”用于表达“合成物质”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tempo', term: 'tempo', normalizedTerm: 'tempo', partOfSpeech: ['noun'], ipa: '/\'tempoʊ/',
    chineseShort: '速度；节奏；进行速度', chineseExplanation: '表示“速度；节奏；进行速度”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(music) the speed at which a composition is to be played.',
    examples: [{ english: 'In this context, the word "tempo" is used to mean (music) the speed at which a composition is to be played.', chinese: '在这个语境中，“tempo”用于表达“速度；节奏；进行速度”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'textile', term: 'textile', normalizedTerm: 'textile', partOfSpeech: ['noun', 'adjective'], ipa: '/\'tekstail/',
    chineseShort: '纺织品；纺织业', chineseExplanation: '表示“纺织品；纺织业”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Of or relating to fabrics or fabric making.',
    examples: [{ english: 'In this context, the word "textile" is used to mean of or relating to fabrics or fabric making.', chinese: '在这个语境中，“textile”用于表达“纺织品；纺织业”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vacuum', term: 'vacuum', normalizedTerm: 'vacuum', partOfSpeech: ['noun', 'adjective'], ipa: '/\'vækjum/',
    chineseShort: '真空；空间；真空吸尘器', chineseExplanation: '表示“真空；空间；真空吸尘器”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The absence of matter.',
    examples: [{ english: 'In this context, the word "vacuum" is used to mean the absence of matter.', chinese: '在这个语境中，“vacuum”用于表达“真空；空间；真空吸尘器”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'withhold', term: 'withhold', normalizedTerm: 'withhold', partOfSpeech: ['verb'], ipa: '/wɪð\'hoʊld/',
    chineseShort: '使停止；扣留；保留', chineseExplanation: '表示“使停止；扣留；保留”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Hold back; refuse to hand over or share.',
    examples: [{ english: 'In this context, the word "withhold" is used to mean hold back; refuse to hand over or share.', chinese: '在这个语境中，“withhold”用于表达“使停止；扣留；保留”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wrench', term: 'wrench', normalizedTerm: 'wrench', partOfSpeech: ['noun', 'verb'], ipa: '/rentʃ/',
    chineseShort: '扳钳；扳手；扭伤', chineseExplanation: '表示“扳钳；扳手；扭伤”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A sharp strain on muscles or ligaments.',
    examples: [{ english: 'In this context, the word "wrench" is used to mean a sharp strain on muscles or ligaments.', chinese: '在这个语境中，“wrench”用于表达“扳钳；扳手；扭伤”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'omit', term: 'omit', normalizedTerm: 'omit', partOfSpeech: ['verb'], ipa: '/oʊ\'mɪt/',
    chineseShort: '省略；删除；疏忽', chineseExplanation: '表示“省略；删除；疏忽”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Prevent from being included or considered or accepted.',
    examples: [{ english: 'In this context, the word "omit" is used to mean prevent from being included or considered or accepted.', chinese: '在这个语境中，“omit”用于表达“省略；删除；疏忽”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'monstrous', term: 'monstrous', normalizedTerm: 'monstrous', partOfSpeech: ['adjective'], ipa: '/\'mɒnstrəs/',
    chineseShort: '巨大的；畸形的；怪异的', chineseExplanation: '表示“巨大的；畸形的；怪异的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Abnormally large.',
    examples: [{ english: 'In this context, the word "monstrous" is used to mean abnormally large.', chinese: '在这个语境中，“monstrous”用于表达“巨大的；畸形的；怪异的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cue', term: 'cue', normalizedTerm: 'cue', partOfSpeech: ['noun', 'verb'], ipa: '/kju/',
    chineseShort: '提示；线索', chineseExplanation: '表示“提示；线索”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An actor\'s line that immediately precedes and serves as a reminder for some action or speech.',
    examples: [{ english: 'In this context, the word "cue" is used to mean an actor\'s line that immediately precedes and serves as a reminder for some action or speech.', chinese: '在这个语境中，“cue”用于表达“提示；线索”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lag', term: 'lag', normalizedTerm: 'lag', partOfSpeech: ['noun', 'adjective'], ipa: '/læɡ/',
    chineseShort: '落后；囚犯；迟延', chineseExplanation: '表示“落后；囚犯；迟延”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Hang (back) or fall (behind) in movement, progress, development, etc.',
    examples: [{ english: 'In this context, the word "lag" is used to mean hang (back) or fall (behind) in movement, progress, development, etc.', chinese: '在这个语境中，“lag”用于表达“落后；囚犯；迟延”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'crooked', term: 'crooked', normalizedTerm: 'crooked', partOfSpeech: ['adjective'], ipa: '/\'krʊkəd/',
    chineseShort: '弯曲的；歪的；邪恶的', chineseExplanation: '表示“弯曲的；歪的；邪恶的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having or marked by bends or angles; not straight or aligned.',
    examples: [{ english: 'In this context, the word "crooked" is used to mean having or marked by bends or angles; not straight or aligned.', chinese: '在这个语境中，“crooked”用于表达“弯曲的；歪的；邪恶的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'precaution', term: 'precaution', normalizedTerm: 'precaution', partOfSpeech: ['noun', 'verb'], ipa: '/prɪ\'kɔʃ(ə)n/',
    chineseShort: '预防；留心；警戒', chineseExplanation: '表示“预防；留心；警戒”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A precautionary measure warding off impending danger or damage or injury etc.',
    examples: [{ english: 'In this context, the word "precaution" is used to mean a precautionary measure warding off impending danger or damage or injury etc.', chinese: '在这个语境中，“precaution”用于表达“预防；留心；警戒”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'withstand', term: 'withstand', normalizedTerm: 'withstand', partOfSpeech: ['verb'], ipa: '/wɪð\'stænd/',
    chineseShort: '抵住；顶住；经得起', chineseExplanation: '表示“抵住；顶住；经得起”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Resist or confront with resistance.',
    examples: [{ english: 'In this context, the word "withstand" is used to mean resist or confront with resistance.', chinese: '在这个语境中，“withstand”用于表达“抵住；顶住；经得起”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'thrust', term: 'thrust', normalizedTerm: 'thrust', partOfSpeech: ['noun', 'verb'], ipa: '/θrʌst/',
    chineseShort: '插；戳；刺', chineseExplanation: '表示“插；戳；刺”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Verbal criticism.',
    examples: [{ english: 'In this context, the word "thrust" is used to mean verbal criticism.', chinese: '在这个语境中，“thrust”用于表达“插；戳；刺”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'allegiance', term: 'allegiance', normalizedTerm: 'allegiance', partOfSpeech: ['noun'], ipa: '/ə\'lidʒəns/',
    chineseShort: '忠贞；效忠', chineseExplanation: '表示“忠贞；效忠”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The loyalty that citizens owe to their country (or subjects to their sovereign).',
    examples: [{ english: 'In this context, the word "allegiance" is used to mean the loyalty that citizens owe to their country (or subjects to their sovereign).', chinese: '在这个语境中，“allegiance”用于表达“忠贞；效忠”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'martyr', term: 'martyr', normalizedTerm: 'martyr', partOfSpeech: ['noun', 'verb'], ipa: '/\'mɑrtər/',
    chineseShort: '烈士；受苦者；受难者', chineseExplanation: '表示“烈士；受苦者；受难者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'One who suffers for the sake of principle.',
    examples: [{ english: 'In this context, the word "martyr" is used to mean one who suffers for the sake of principle.', chinese: '在这个语境中，“martyr”用于表达“烈士；受苦者；受难者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'riot', term: 'riot', normalizedTerm: 'riot', partOfSpeech: ['noun', 'verb'], ipa: '/\'raɪət/',
    chineseShort: '暴动；喧闹；放纵', chineseExplanation: '表示“暴动；喧闹；放纵”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A public act of violence by an unruly mob.',
    examples: [{ english: 'In this context, the word "riot" is used to mean a public act of violence by an unruly mob.', chinese: '在这个语境中，“riot”用于表达“暴动；喧闹；放纵”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inhibit', term: 'inhibit', normalizedTerm: 'inhibit', partOfSpeech: ['verb'], ipa: '/ɪn\'hɪbɪt/',
    chineseShort: '禁止；抑制', chineseExplanation: '表示“禁止；抑制”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Limit the range or extent of.',
    examples: [{ english: 'In this context, the word "inhibit" is used to mean limit the range or extent of.', chinese: '在这个语境中，“inhibit”用于表达“禁止；抑制”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pillar', term: 'pillar', normalizedTerm: 'pillar', partOfSpeech: ['noun'], ipa: '/\'pɪlər/',
    chineseShort: '柱子；栋梁；台柱', chineseExplanation: '表示“柱子；栋梁；台柱”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A fundamental principle or practice.',
    examples: [{ english: 'In this context, the word "pillar" is used to mean a fundamental principle or practice.', chinese: '在这个语境中，“pillar”用于表达“柱子；栋梁；台柱”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'irony', term: 'irony', normalizedTerm: 'irony', partOfSpeech: ['noun'], ipa: '/\'aɪrəni/',
    chineseShort: '反语；讽刺；具有讽刺意味的事', chineseExplanation: '表示“反语；讽刺；具有讽刺意味的事”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Incongruity between what might be expected and what actually occurs.',
    examples: [{ english: 'In this context, the word "irony" is used to mean incongruity between what might be expected and what actually occurs.', chinese: '在这个语境中，“irony”用于表达“反语；讽刺；具有讽刺意味的事”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'depict', term: 'depict', normalizedTerm: 'depict', partOfSpeech: ['verb'], ipa: '/dɪ\'pɪkt/',
    chineseShort: '描述；描写', chineseExplanation: '表示“描述；描写”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Show in, or as in, a picture.',
    examples: [{ english: 'In this context, the word "depict" is used to mean show in, or as in, a picture.', chinese: '在这个语境中，“depict”用于表达“描述；描写”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'famine', term: 'famine', normalizedTerm: 'famine', partOfSpeech: ['noun'], ipa: '/\'fæmɪn/',
    chineseShort: '饥荒；缺乏；饥饿', chineseExplanation: '表示“饥荒；缺乏；饥饿”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A severe shortage of food (as through crop failure) resulting in violent hunger and starvation and death.',
    examples: [{ english: 'In this context, the word "famine" is used to mean a severe shortage of food (as through crop failure) resulting in violent hunger and starvation and death.', chinese: '在这个语境中，“famine”用于表达“饥荒；缺乏；饥饿”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dominant', term: 'dominant', normalizedTerm: 'dominant', partOfSpeech: ['adjective', 'noun'], ipa: '/\'dɑmɪnənt/',
    chineseShort: '占优势的；支配的', chineseExplanation: '表示“占优势的；支配的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Exercising influence or control.',
    examples: [{ english: 'In this context, the word "dominant" is used to mean exercising influence or control.', chinese: '在这个语境中，“dominant”用于表达“占优势的；支配的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hierarchy', term: 'hierarchy', normalizedTerm: 'hierarchy', partOfSpeech: ['noun'], ipa: '/\'haɪə.rɑrki/',
    chineseShort: '等级制度；僧侣统治；等级体系', chineseExplanation: '表示“等级制度；僧侣统治；等级体系”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A series of ordered groupings of people or things within a system.',
    examples: [{ english: 'In this context, the word "hierarchy" is used to mean a series of ordered groupings of people or things within a system.', chinese: '在这个语境中，“hierarchy”用于表达“等级制度；僧侣统治；等级体系”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'incidence', term: 'incidence', normalizedTerm: 'incidence', partOfSpeech: ['noun'], ipa: '/\'ɪnsɪd(ə)ns/',
    chineseShort: '发生；发生率；影响', chineseExplanation: '表示“发生；发生率；影响”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The relative frequency of occurrence of something.',
    examples: [{ english: 'In this context, the word "incidence" is used to mean the relative frequency of occurrence of something.', chinese: '在这个语境中，“incidence”用于表达“发生；发生率；影响”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'insert', term: 'insert', normalizedTerm: 'insert', partOfSpeech: ['noun', 'verb'], ipa: '/\'ɪn.sɜrt/',
    chineseShort: '插入物', chineseExplanation: '表示“插入物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A folded section placed between the leaves of another publication.',
    examples: [{ english: 'In this context, the word "insert" is used to mean a folded section placed between the leaves of another publication.', chinese: '在这个语境中，“insert”用于表达“插入物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'premium', term: 'premium', normalizedTerm: 'premium', partOfSpeech: ['noun', 'adjective'], ipa: '/ˈprimiəm/',
    chineseShort: '额外补贴；奖金；奖赏', chineseExplanation: '表示“额外补贴；奖金；奖赏”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Payment for insurance.',
    examples: [{ english: 'In this context, the word "premium" is used to mean payment for insurance.', chinese: '在这个语境中，“premium”用于表达“额外补贴；奖金；奖赏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'specimen', term: 'specimen', normalizedTerm: 'specimen', partOfSpeech: ['noun'], ipa: '/\'spesəmən/',
    chineseShort: '样品；标本；试料', chineseExplanation: '表示“样品；标本；试料”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An example regarded as typical of its class.',
    examples: [{ english: 'In this context, the word "specimen" is used to mean an example regarded as typical of its class.', chinese: '在这个语境中，“specimen”用于表达“样品；标本；试料”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vertical', term: 'vertical', normalizedTerm: 'vertical', partOfSpeech: ['adjective', 'noun'], ipa: '/\'vɜrtɪk(ə)l/',
    chineseShort: '垂直的；直立的', chineseExplanation: '表示“垂直的；直立的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'At right angles to the plane of the horizon or a base line.',
    examples: [{ english: 'In this context, the word "vertical" is used to mean at right angles to the plane of the horizon or a base line.', chinese: '在这个语境中，“vertical”用于表达“垂直的；直立的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'compass', term: 'compass', normalizedTerm: 'compass', partOfSpeech: ['noun', 'verb'], ipa: '/ˈkʌmpəs/',
    chineseShort: '指南针；范围；音域', chineseExplanation: '表示“指南针；范围；音域”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Navigational instrument for finding directions.',
    examples: [{ english: 'In this context, the word "compass" is used to mean navigational instrument for finding directions.', chinese: '在这个语境中，“compass”用于表达“指南针；范围；音域”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'chronic', term: 'chronic', normalizedTerm: 'chronic', partOfSpeech: ['adjective', 'noun'], ipa: '/\'krɑnɪk/',
    chineseShort: '慢性的；习惯性的', chineseExplanation: '表示“慢性的；习惯性的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Being long-lasting and recurrent or characterized by long suffering.',
    examples: [{ english: 'In this context, the word "chronic" is used to mean being long-lasting and recurrent or characterized by long suffering.', chinese: '在这个语境中，“chronic”用于表达“慢性的；习惯性的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'counterpart', term: 'counterpart', normalizedTerm: 'counterpart', partOfSpeech: ['noun'], ipa: '/\'kaʊntər.pɑrt/',
    chineseShort: '副本；复本；配对物', chineseExplanation: '表示“副本；复本；配对物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person or thing having the same function or characteristics as another.',
    examples: [{ english: 'In this context, the word "counterpart" is used to mean a person or thing having the same function or characteristics as another.', chinese: '在这个语境中，“counterpart”用于表达“副本；复本；配对物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'siege', term: 'siege', normalizedTerm: 'siege', partOfSpeech: ['noun', 'verb'], ipa: '/sidʒ/',
    chineseShort: '包围；围攻；再三的努力', chineseExplanation: '表示“包围；围攻；再三的努力”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The action of an armed force that surrounds a fortified place and isolates it while continuing to attack.',
    examples: [{ english: 'In this context, the word "siege" is used to mean the action of an armed force that surrounds a fortified place and isolates it while continuing to attack.', chinese: '在这个语境中，“siege”用于表达“包围；围攻；再三的努力”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'abide', term: 'abide', normalizedTerm: 'abide', partOfSpeech: ['verb'], ipa: '/əˈbaɪd/',
    chineseShort: '停留；遵守；居留', chineseExplanation: '表示“停留；遵守；居留”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Dwell.',
    examples: [{ english: 'In this context, the word "abide" is used to mean dwell.', chinese: '在这个语境中，“abide”用于表达“停留；遵守；居留”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'adolescent', term: 'adolescent', normalizedTerm: 'adolescent', partOfSpeech: ['adjective', 'noun'], ipa: '/.ædə\'les(ə)nt/',
    chineseShort: '青春期的；青少年的', chineseExplanation: '表示“青春期的；青少年的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or peculiar to or suggestive of an adolescent.',
    examples: [{ english: 'In this context, the word "adolescent" is used to mean relating to or peculiar to or suggestive of an adolescent.', chinese: '在这个语境中，“adolescent”用于表达“青春期的；青少年的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'advisable', term: 'advisable', normalizedTerm: 'advisable', partOfSpeech: ['adjective'], ipa: '/əd\'vaɪzəb(ə)l/',
    chineseShort: '适当的；明智的', chineseExplanation: '表示“适当的；明智的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Worthy of being recommended or suggested; prudent or wise.',
    examples: [{ english: 'In this context, the word "advisable" is used to mean worthy of being recommended or suggested; prudent or wise.', chinese: '在这个语境中，“advisable”用于表达“适当的；明智的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'affluent', term: 'affluent', normalizedTerm: 'affluent', partOfSpeech: ['adjective', 'noun'], ipa: '/\'æfluənt/',
    chineseShort: '丰富的；富裕的', chineseExplanation: '表示“丰富的；富裕的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having an abundant supply of money or possessions of value.',
    examples: [{ english: 'In this context, the word "affluent" is used to mean having an abundant supply of money or possessions of value.', chinese: '在这个语境中，“affluent”用于表达“丰富的；富裕的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'appraise', term: 'appraise', normalizedTerm: 'appraise', partOfSpeech: ['verb'], ipa: '/ə\'preɪz/',
    chineseShort: '评价；估价', chineseExplanation: '表示“评价；估价”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Evaluate or estimate the nature, quality, ability, extent, or significance of.',
    examples: [{ english: 'In this context, the word "appraise" is used to mean evaluate or estimate the nature, quality, ability, extent, or significance of.', chinese: '在这个语境中，“appraise”用于表达“评价；估价”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'barge', term: 'barge', normalizedTerm: 'barge', partOfSpeech: ['noun', 'verb'], ipa: '/bɑrdʒ/',
    chineseShort: '驳船', chineseExplanation: '表示“驳船”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A flatbottom boat for carrying heavy loads (especially on canals).',
    examples: [{ english: 'In this context, the word "barge" is used to mean a flatbottom boat for carrying heavy loads (especially on canals).', chinese: '在这个语境中，“barge”用于表达“驳船”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brook', term: 'brook', normalizedTerm: 'brook', partOfSpeech: ['noun', 'verb'], ipa: '/brʊk/',
    chineseShort: '小溪', chineseExplanation: '表示“小溪”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A natural stream of water smaller than a river (and often a tributary of a river).',
    examples: [{ english: 'In this context, the word "brook" is used to mean a natural stream of water smaller than a river (and often a tributary of a river).', chinese: '在这个语境中，“brook”用于表达“小溪”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cart', term: 'cart', normalizedTerm: 'cart', partOfSpeech: ['noun', 'verb'], ipa: '/kɑrt/',
    chineseShort: '二轮运货马车', chineseExplanation: '表示“二轮运货马车”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A heavy open wagon usually having two wheels and drawn by an animal.',
    examples: [{ english: 'In this context, the word "cart" is used to mean a heavy open wagon usually having two wheels and drawn by an animal.', chinese: '在这个语境中，“cart”用于表达“二轮运货马车”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'coil', term: 'coil', normalizedTerm: 'coil', partOfSpeech: ['noun', 'verb'], ipa: '/kɔɪl/',
    chineseShort: '线圈；盘绕；骚动', chineseExplanation: '表示“线圈；盘绕；骚动”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A structure consisting of something wound in a continuous series of loops.',
    examples: [{ english: 'In this context, the word "coil" is used to mean a structure consisting of something wound in a continuous series of loops.', chinese: '在这个语境中，“coil”用于表达“线圈；盘绕；骚动”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'collaborate', term: 'collaborate', normalizedTerm: 'collaborate', partOfSpeech: ['verb'], ipa: '/kə\'læbə.reɪt/',
    chineseShort: '合作；勾结', chineseExplanation: '表示“合作；勾结”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Work together on a common enterprise of project.',
    examples: [{ english: 'In this context, the word "collaborate" is used to mean work together on a common enterprise of project.', chinese: '在这个语境中，“collaborate”用于表达“合作；勾结”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'commonsense', term: 'commonsense', normalizedTerm: 'commonsense', partOfSpeech: ['adjective'], ipa: '/,kɔmən\'sens/',
    chineseShort: '有常识的；一望而知的；明明白白的', chineseExplanation: '表示“有常识的；一望而知的；明明白白的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Exhibiting native good judgment.',
    examples: [{ english: 'In this context, the word "commonsense" is used to mean exhibiting native good judgment.', chinese: '在这个语境中，“commonsense”用于表达“有常识的；一望而知的；明明白白的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'comprehend', term: 'comprehend', normalizedTerm: 'comprehend', partOfSpeech: ['verb'], ipa: '/.kɑmprə\'hend/',
    chineseShort: '理解；包括', chineseExplanation: '表示“理解；包括”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Get the meaning of something.',
    examples: [{ english: 'In this context, the word "comprehend" is used to mean get the meaning of something.', chinese: '在这个语境中，“comprehend”用于表达“理解；包括”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'counteract', term: 'counteract', normalizedTerm: 'counteract', partOfSpeech: ['verb'], ipa: '/.kaʊntər\'ækt/',
    chineseShort: '抵消；阻碍；中和', chineseExplanation: '表示“抵消；阻碍；中和”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Oppose and mitigate the effects of by contrary actions.',
    examples: [{ english: 'In this context, the word "counteract" is used to mean oppose and mitigate the effects of by contrary actions.', chinese: '在这个语境中，“counteract”用于表达“抵消；阻碍；中和”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deceit', term: 'deceit', normalizedTerm: 'deceit', partOfSpeech: ['noun'], ipa: '/dɪ\'sit/',
    chineseShort: '欺骗；谎言', chineseExplanation: '表示“欺骗；谎言”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The quality of being fraudulent.',
    examples: [{ english: 'In this context, the word "deceit" is used to mean the quality of being fraudulent.', chinese: '在这个语境中，“deceit”用于表达“欺骗；谎言”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dispense', term: 'dispense', normalizedTerm: 'dispense', partOfSpeech: ['verb'], ipa: '/dɪ\'spens/',
    chineseShort: '分发；分配', chineseExplanation: '表示“分发；分配”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Grant a dispensation; grant an exemption.',
    examples: [{ english: 'In this context, the word "dispense" is used to mean grant a dispensation; grant an exemption.', chinese: '在这个语境中，“dispense”用于表达“分发；分配”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'diverge', term: 'diverge', normalizedTerm: 'diverge', partOfSpeech: ['verb'], ipa: '/daɪ\'vɜrdʒ/',
    chineseShort: '分歧；岔开', chineseExplanation: '表示“分歧；岔开”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Move or draw apart.',
    examples: [{ english: 'In this context, the word "diverge" is used to mean move or draw apart.', chinese: '在这个语境中，“diverge”用于表达“分歧；岔开”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'enchant', term: 'enchant', normalizedTerm: 'enchant', partOfSpeech: ['verb'], ipa: '/ɪn\'tʃænt/',
    chineseShort: '施魔法；使入迷', chineseExplanation: '表示“施魔法；使入迷”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Hold spellbound.',
    examples: [{ english: 'In this context, the word "enchant" is used to mean hold spellbound.', chinese: '在这个语境中，“enchant”用于表达“施魔法；使入迷”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'equate', term: 'equate', normalizedTerm: 'equate', partOfSpeech: ['verb'], ipa: '/ɪ\'k.weɪt/',
    chineseShort: '使相等；视为平等', chineseExplanation: '表示“使相等；视为平等”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be equivalent or parallel, in mathematics.',
    examples: [{ english: 'In this context, the word "equate" is used to mean be equivalent or parallel, in mathematics.', chinese: '在这个语境中，“equate”用于表达“使相等；视为平等”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fist', term: 'fist', normalizedTerm: 'fist', partOfSpeech: ['noun', 'verb'], ipa: '/fɪst/',
    chineseShort: '拳头；手', chineseExplanation: '表示“拳头；手”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A hand with the fingers clenched in the palm (as for hitting).',
    examples: [{ english: 'In this context, the word "fist" is used to mean a hand with the fingers clenched in the palm (as for hitting).', chinese: '在这个语境中，“fist”用于表达“拳头；手”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fluorescent', term: 'fluorescent', normalizedTerm: 'fluorescent', partOfSpeech: ['noun', 'adjective'], ipa: '/flɔr\'res(ə)nt/',
    chineseShort: '荧光', chineseExplanation: '表示“荧光”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A lighting fixture that uses a fluorescent lamp.',
    examples: [{ english: 'In this context, the word "fluorescent" is used to mean a lighting fixture that uses a fluorescent lamp.', chinese: '在这个语境中，“fluorescent”用于表达“荧光”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'forsake', term: 'forsake', normalizedTerm: 'forsake', partOfSpeech: ['verb'], ipa: '/fər\'seɪk/',
    chineseShort: '放弃；断念；抛弃', chineseExplanation: '表示“放弃；断念；抛弃”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Leave someone who needs or counts on you; leave in the lurch.',
    examples: [{ english: 'In this context, the word "forsake" is used to mean leave someone who needs or counts on you; leave in the lurch.', chinese: '在这个语境中，“forsake”用于表达“放弃；断念；抛弃”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fragrant', term: 'fragrant', normalizedTerm: 'fragrant', partOfSpeech: ['adjective'], ipa: '/\'freɪɡrənt/',
    chineseShort: '芬香的；馥郁的；愉快的', chineseExplanation: '表示“芬香的；馥郁的；愉快的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Pleasant-smelling.',
    examples: [{ english: 'In this context, the word "fragrant" is used to mean pleasant-smelling.', chinese: '在这个语境中，“fragrant”用于表达“芬香的；馥郁的；愉快的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fuse', term: 'fuse', normalizedTerm: 'fuse', partOfSpeech: ['noun', 'verb'], ipa: '/fjuːz/',
    chineseShort: '保险丝；导火线', chineseExplanation: '表示“保险丝；导火线”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An electrical device that can interrupt the flow of electrical current when it is overloaded.',
    examples: [{ english: 'In this context, the word "fuse" is used to mean an electrical device that can interrupt the flow of electrical current when it is overloaded.', chinese: '在这个语境中，“fuse”用于表达“保险丝；导火线”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'glue', term: 'glue', normalizedTerm: 'glue', partOfSpeech: ['noun', 'verb'], ipa: '/ɡlu/',
    chineseShort: '胶；粘性物', chineseExplanation: '表示“胶；粘性物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Cement consisting of a sticky substance that is used as an adhesive.',
    examples: [{ english: 'In this context, the word "glue" is used to mean cement consisting of a sticky substance that is used as an adhesive.', chinese: '在这个语境中，“glue”用于表达“胶；粘性物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'haul', term: 'haul', normalizedTerm: 'haul', partOfSpeech: ['noun', 'verb'], ipa: '/hɔl/',
    chineseShort: '用力拖拉；拖运；强拉', chineseExplanation: '表示“用力拖拉；拖运；强拉”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Draw slowly or heavily.',
    examples: [{ english: 'In this context, the word "haul" is used to mean draw slowly or heavily.', chinese: '在这个语境中，“haul”用于表达“用力拖拉；拖运；强拉”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hawk', term: 'hawk', normalizedTerm: 'hawk', partOfSpeech: ['noun', 'verb'], ipa: '/hɔk/',
    chineseShort: '鹰；掠夺者；鹰派成员', chineseExplanation: '表示“鹰；掠夺者；鹰派成员”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Diurnal bird of prey typically having short rounded wings and a long tail.',
    examples: [{ english: 'In this context, the word "hawk" is used to mean diurnal bird of prey typically having short rounded wings and a long tail.', chinese: '在这个语境中，“hawk”用于表达“鹰；掠夺者；鹰派成员”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'howl', term: 'howl', normalizedTerm: 'howl', partOfSpeech: ['noun', 'verb'], ipa: '/haʊl/',
    chineseShort: '嗥叫；吠声；号叫', chineseExplanation: '表示“嗥叫；吠声；号叫”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A long loud emotional utterance.',
    examples: [{ english: 'In this context, the word "howl" is used to mean a long loud emotional utterance.', chinese: '在这个语境中，“howl”用于表达“嗥叫；吠声；号叫”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'installment', term: 'installment', normalizedTerm: 'installment', partOfSpeech: ['noun'], ipa: '/ɪn\'stɔlmənt/',
    chineseShort: '就职；装设；分期付款', chineseExplanation: '表示“就职；装设；分期付款”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A payment of part of a debt; usually paid at regular intervals.',
    examples: [{ english: 'In this context, the word "installment" is used to mean a payment of part of a debt; usually paid at regular intervals.', chinese: '在这个语境中，“installment”用于表达“就职；装设；分期付款”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lathe', term: 'lathe', normalizedTerm: 'lathe', partOfSpeech: ['noun', 'verb'], ipa: '/leɪð/',
    chineseShort: '车床', chineseExplanation: '表示“车床”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Machine tool for shaping metal or wood; the workpiece turns about a horizontal axis against a fixed tool.',
    examples: [{ english: 'In this context, the word "lathe" is used to mean machine tool for shaping metal or wood; the workpiece turns about a horizontal axis against a fixed tool.', chinese: '在这个语境中，“lathe”用于表达“车床”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'loosen', term: 'loosen', normalizedTerm: 'loosen', partOfSpeech: ['verb'], ipa: '/\'lus(ə)n/',
    chineseShort: '放松；松开；解除', chineseExplanation: '表示“放松；松开；解除”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make loose or looser.',
    examples: [{ english: 'In this context, the word "loosen" is used to mean make loose or looser.', chinese: '在这个语境中，“loosen”用于表达“放松；松开；解除”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lumber', term: 'lumber', normalizedTerm: 'lumber', partOfSpeech: ['noun', 'verb'], ipa: '/\'lʌmbər/',
    chineseShort: '木材；破旧家俱；废物', chineseExplanation: '表示“木材；破旧家俱；废物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The wood of trees cut and prepared for use as building material.',
    examples: [{ english: 'In this context, the word "lumber" is used to mean the wood of trees cut and prepared for use as building material.', chinese: '在这个语境中，“lumber”用于表达“木材；破旧家俱；废物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'orient', term: 'orient', normalizedTerm: 'orient', partOfSpeech: ['noun', 'adjective'], ipa: '/\'ɔri.ent/',
    chineseShort: '东方；东方诸国', chineseExplanation: '表示“东方；东方诸国”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Be oriented.',
    examples: [{ english: 'In this context, the word "orient" is used to mean be oriented.', chinese: '在这个语境中，“orient”用于表达“东方；东方诸国”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pious', term: 'pious', normalizedTerm: 'pious', partOfSpeech: ['adjective'], ipa: '/\'paɪəs/',
    chineseShort: '虔诚的；敬神的；尽责的', chineseExplanation: '表示“虔诚的；敬神的；尽责的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having or showing or expressing reverence for a deity.',
    examples: [{ english: 'In this context, the word "pious" is used to mean having or showing or expressing reverence for a deity.', chinese: '在这个语境中，“pious”用于表达“虔诚的；敬神的；尽责的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plea', term: 'plea', normalizedTerm: 'plea', partOfSpeech: ['noun'], ipa: '/pli/',
    chineseShort: '恳求；辩解；抗辩', chineseExplanation: '表示“恳求；辩解；抗辩”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(law) a defendant\'s answer by a factual matter (as distinguished from a demurrer).',
    examples: [{ english: 'In this context, the word "plea" is used to mean (law) a defendant\'s answer by a factual matter (as distinguished from a demurrer).', chinese: '在这个语境中，“plea”用于表达“恳求；辩解；抗辩”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plump', term: 'plump', normalizedTerm: 'plump', partOfSpeech: ['adjective', 'verb'], ipa: '/plʌmp/',
    chineseShort: '圆胖的；丰满的；直接下落的', chineseExplanation: '表示“圆胖的；丰满的；直接下落的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'The sound of a sudden heavy fall.',
    examples: [{ english: 'In this context, the word "plump" is used to mean the sound of a sudden heavy fall.', chinese: '在这个语境中，“plump”用于表达“圆胖的；丰满的；直接下落的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'predominate', term: 'predominate', normalizedTerm: 'predominate', partOfSpeech: ['verb'], ipa: '/prɪ\'dɑmi.neɪt/',
    chineseShort: '掌握；控制；支配', chineseExplanation: '表示“掌握；控制；支配”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be larger in number, quantity, power, status or importance.',
    examples: [{ english: 'In this context, the word "predominate" is used to mean be larger in number, quantity, power, status or importance.', chinese: '在这个语境中，“predominate”用于表达“掌握；控制；支配”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'prerequisite', term: 'prerequisite', normalizedTerm: 'prerequisite', partOfSpeech: ['adjective', 'noun'], ipa: '/pri\'rekwəzɪt/',
    chineseShort: '先决条件的；必要的', chineseExplanation: '表示“先决条件的；必要的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Required as a prior condition or course of study.',
    examples: [{ english: 'In this context, the word "prerequisite" is used to mean required as a prior condition or course of study.', chinese: '在这个语境中，“prerequisite”用于表达“先决条件的；必要的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'proficient', term: 'proficient', normalizedTerm: 'proficient', partOfSpeech: ['noun', 'adjective'], ipa: '/prəˈfiʃənt/',
    chineseShort: '高手；专家', chineseExplanation: '表示“高手；专家”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Having or showing knowledge and skill and aptitude.',
    examples: [{ english: 'In this context, the word "proficient" is used to mean having or showing knowledge and skill and aptitude.', chinese: '在这个语境中，“proficient”用于表达“高手；专家”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rejuvenate', term: 'rejuvenate', normalizedTerm: 'rejuvenate', partOfSpeech: ['verb'], ipa: '/rɪ\'dʒuvə.neɪt/',
    chineseShort: '使年轻；使复原；使恢复精神', chineseExplanation: '表示“使年轻；使复原；使恢复精神”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Cause (a stream or river) to erode, as by an uplift of the land.',
    examples: [{ english: 'In this context, the word "rejuvenate" is used to mean cause (a stream or river) to erode, as by an uplift of the land.', chinese: '在这个语境中，“rejuvenate”用于表达“使年轻；使复原；使恢复精神”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reside', term: 'reside', normalizedTerm: 'reside', partOfSpeech: ['verb'], ipa: '/rɪ\'zaɪd/',
    chineseShort: '住；居留；属于', chineseExplanation: '表示“住；居留；属于”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make one\'s home in a particular place or community.',
    examples: [{ english: 'In this context, the word "reside" is used to mean make one\'s home in a particular place or community.', chinese: '在这个语境中，“reside”用于表达“住；居留；属于”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ridicule', term: 'ridicule', normalizedTerm: 'ridicule', partOfSpeech: ['noun', 'verb'], ipa: '/\'rɪdɪ.kjul/',
    chineseShort: '嘲笑；愚弄；笑柄', chineseExplanation: '表示“嘲笑；愚弄；笑柄”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Language or behavior intended to mock or humiliate.',
    examples: [{ english: 'In this context, the word "ridicule" is used to mean language or behavior intended to mock or humiliate.', chinese: '在这个语境中，“ridicule”用于表达“嘲笑；愚弄；笑柄”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rinse', term: 'rinse', normalizedTerm: 'rinse', partOfSpeech: ['noun', 'verb'], ipa: '/rɪns/',
    chineseShort: '清洗；染发；染发剂', chineseExplanation: '表示“清洗；染发；染发剂”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A liquid preparation used on wet hair to give it a tint.',
    examples: [{ english: 'In this context, the word "rinse" is used to mean a liquid preparation used on wet hair to give it a tint.', chinese: '在这个语境中，“rinse”用于表达“清洗；染发；染发剂”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rust', term: 'rust', normalizedTerm: 'rust', partOfSpeech: ['noun', 'verb'], ipa: '/rʌst/',
    chineseShort: '锈；生锈；衰退', chineseExplanation: '表示“锈；生锈；衰退”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A red or brown oxide coating on iron or steel caused by the action of oxygen and moisture.',
    examples: [{ english: 'In this context, the word "rust" is used to mean a red or brown oxide coating on iron or steel caused by the action of oxygen and moisture.', chinese: '在这个语境中，“rust”用于表达“锈；生锈；衰退”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scoff', term: 'scoff', normalizedTerm: 'scoff', partOfSpeech: ['noun', 'verb'], ipa: '/skɒf/',
    chineseShort: '嘲笑；愚弄；笑柄', chineseExplanation: '表示“嘲笑；愚弄；笑柄”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Treat with contemptuous disregard.',
    examples: [{ english: 'In this context, the word "scoff" is used to mean treat with contemptuous disregard.', chinese: '在这个语境中，“scoff”用于表达“嘲笑；愚弄；笑柄”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scripture', term: 'scripture', normalizedTerm: 'scripture', partOfSpeech: ['noun'], ipa: '/\'skrɪptʃər/',
    chineseShort: '圣经；圣经的一节；圣经的一句', chineseExplanation: '表示“圣经；圣经的一节；圣经的一句”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any writing that is regarded as sacred by a religious group.',
    examples: [{ english: 'In this context, the word "scripture" is used to mean any writing that is regarded as sacred by a religious group.', chinese: '在这个语境中，“scripture”用于表达“圣经；圣经的一节；圣经的一句”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'scrub', term: 'scrub', normalizedTerm: 'scrub', partOfSpeech: ['noun', 'verb'], ipa: '/skrʌb/',
    chineseShort: '用力擦洗；矮树；矮人', chineseExplanation: '表示“用力擦洗；矮树；矮人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Dense vegetation consisting of stunted trees or bushes.',
    examples: [{ english: 'In this context, the word "scrub" is used to mean dense vegetation consisting of stunted trees or bushes.', chinese: '在这个语境中，“scrub”用于表达“用力擦洗；矮树；矮人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sermon', term: 'sermon', normalizedTerm: 'sermon', partOfSpeech: ['noun'], ipa: '/\'sɜrmən/',
    chineseShort: '说教；启示；布道', chineseExplanation: '表示“说教；启示；布道”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An address of a religious nature (usually delivered during a church service).',
    examples: [{ english: 'In this context, the word "sermon" is used to mean an address of a religious nature (usually delivered during a church service).', chinese: '在这个语境中，“sermon”用于表达“说教；启示；布道”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shove', term: 'shove', normalizedTerm: 'shove', partOfSpeech: ['noun', 'verb'], ipa: '/ʃʌv/',
    chineseShort: '推；挤', chineseExplanation: '表示“推；挤”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of shoving (giving a push to someone or something).',
    examples: [{ english: 'In this context, the word "shove" is used to mean the act of shoving (giving a push to someone or something).', chinese: '在这个语境中，“shove”用于表达“推；挤”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'shriek', term: 'shriek', normalizedTerm: 'shriek', partOfSpeech: ['noun', 'verb'], ipa: '/ʃrik/',
    chineseShort: '尖锐的响声', chineseExplanation: '表示“尖锐的响声”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Utter a shrill cry.',
    examples: [{ english: 'In this context, the word "shriek" is used to mean utter a shrill cry.', chinese: '在这个语境中，“shriek”用于表达“尖锐的响声”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'slum', term: 'slum', normalizedTerm: 'slum', partOfSpeech: ['noun', 'verb'], ipa: '/slʌm/',
    chineseShort: '贫民窟', chineseExplanation: '表示“贫民窟”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A district of a city marked by poverty and inferior living conditions.',
    examples: [{ english: 'In this context, the word "slum" is used to mean a district of a city marked by poverty and inferior living conditions.', chinese: '在这个语境中，“slum”用于表达“贫民窟”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'slumber', term: 'slumber', normalizedTerm: 'slumber', partOfSpeech: ['noun', 'verb'], ipa: '/\'slʌmbər/',
    chineseShort: '睡眠；麻木状态', chineseExplanation: '表示“睡眠；麻木状态”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A dormant or quiescent state.',
    examples: [{ english: 'In this context, the word "slumber" is used to mean a dormant or quiescent state.', chinese: '在这个语境中，“slumber”用于表达“睡眠；麻木状态”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'squat', term: 'squat', normalizedTerm: 'squat', partOfSpeech: ['noun', 'adjective'], ipa: '/skwɑt/',
    chineseShort: '蹲；窝', chineseExplanation: '表示“蹲；窝”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of assuming or maintaining a crouching position with the knees bent and the buttocks near the heels.',
    examples: [{ english: 'In this context, the word "squat" is used to mean the act of assuming or maintaining a crouching position with the knees bent and the buttocks near the heels.', chinese: '在这个语境中，“squat”用于表达“蹲；窝”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'squirrel', term: 'squirrel', normalizedTerm: 'squirrel', partOfSpeech: ['noun', 'verb'], ipa: '/ˈskwirəl/',
    chineseShort: '松鼠；松鼠毛皮', chineseExplanation: '表示“松鼠；松鼠毛皮”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A kind of arboreal rodent having a long bushy tail.',
    examples: [{ english: 'In this context, the word "squirrel" is used to mean a kind of arboreal rodent having a long bushy tail.', chinese: '在这个语境中，“squirrel”用于表达“松鼠；松鼠毛皮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stalk', term: 'stalk', normalizedTerm: 'stalk', partOfSpeech: ['noun', 'verb'], ipa: '/stɔk/',
    chineseShort: '茎；追踪；高视阔步', chineseExplanation: '表示“茎；追踪；高视阔步”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A slender or elongated structure that supports a plant or fungus or a plant part or plant organ.',
    examples: [{ english: 'In this context, the word "stalk" is used to mean a slender or elongated structure that supports a plant or fungus or a plant part or plant organ.', chinese: '在这个语境中，“stalk”用于表达“茎；追踪；高视阔步”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stout', term: 'stout', normalizedTerm: 'stout', partOfSpeech: ['adjective', 'noun'], ipa: '/staʊt/',
    chineseShort: '结实的；矮胖的；勇敢的', chineseExplanation: '表示“结实的；矮胖的；勇敢的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'A strong very dark heavy-bodied ale made from pale malt and roasted unmalted barley and (often) caramel malt with hops.',
    examples: [{ english: 'In this context, the word "stout" is used to mean a strong very dark heavy-bodied ale made from pale malt and roasted unmalted barley and (often) caramel malt with hops.', chinese: '在这个语境中，“stout”用于表达“结实的；矮胖的；勇敢的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stray', term: 'stray', normalizedTerm: 'stray', partOfSpeech: ['noun', 'adjective'], ipa: '/streɪ/',
    chineseShort: '走失的家畜；浪子', chineseExplanation: '表示“走失的家畜；浪子”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An animal that has strayed (especially a domestic animal).',
    examples: [{ english: 'In this context, the word "stray" is used to mean an animal that has strayed (especially a domestic animal).', chinese: '在这个语境中，“stray”用于表达“走失的家畜；浪子”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'strife', term: 'strife', normalizedTerm: 'strife', partOfSpeech: ['noun'], ipa: '/straɪf/',
    chineseShort: '争吵；竞争；冲突', chineseExplanation: '表示“争吵；竞争；冲突”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Bitter conflict; heated often violent dissension.',
    examples: [{ english: 'In this context, the word "strife" is used to mean bitter conflict; heated often violent dissension.', chinese: '在这个语境中，“strife”用于表达“争吵；竞争；冲突”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stroll', term: 'stroll', normalizedTerm: 'stroll', partOfSpeech: ['noun', 'verb'], ipa: '/strəʊl/',
    chineseShort: '闲逛；漫步', chineseExplanation: '表示“闲逛；漫步”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Walk leisurely and with no apparent aim.',
    examples: [{ english: 'In this context, the word "stroll" is used to mean walk leisurely and with no apparent aim.', chinese: '在这个语境中，“stroll”用于表达“闲逛；漫步”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stuffy', term: 'stuffy', normalizedTerm: 'stuffy', partOfSpeech: ['adjective'], ipa: '/\'stʌfi/',
    chineseShort: '闷热的；窒息的；乏味的', chineseExplanation: '表示“闷热的；窒息的；乏味的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Affected with a sensation of stoppage or obstruction.',
    examples: [{ english: 'In this context, the word "stuffy" is used to mean affected with a sensation of stoppage or obstruction.', chinese: '在这个语境中，“stuffy”用于表达“闷热的；窒息的；乏味的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sullen', term: 'sullen', normalizedTerm: 'sullen', partOfSpeech: ['adjective'], ipa: '/\'sʌlən/',
    chineseShort: '愠怒的；沉闷的；阴沉的', chineseExplanation: '表示“愠怒的；沉闷的；阴沉的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Showing a brooding ill humor.',
    examples: [{ english: 'In this context, the word "sullen" is used to mean showing a brooding ill humor.', chinese: '在这个语境中，“sullen”用于表达“愠怒的；沉闷的；阴沉的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'timid', term: 'timid', normalizedTerm: 'timid', partOfSpeech: ['adjective', 'noun'], ipa: '/\'tɪmɪd/',
    chineseShort: '胆小的；羞怯的', chineseExplanation: '表示“胆小的；羞怯的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Showing fear and lack of confidence.',
    examples: [{ english: 'In this context, the word "timid" is used to mean showing fear and lack of confidence.', chinese: '在这个语境中，“timid”用于表达“胆小的；羞怯的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'treason', term: 'treason', normalizedTerm: 'treason', partOfSpeech: ['noun'], ipa: '/\'triz(ə)n/',
    chineseShort: '叛逆；不忠；叛国罪', chineseExplanation: '表示“叛逆；不忠；叛国罪”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A crime that undermines the offender\'s government.',
    examples: [{ english: 'In this context, the word "treason" is used to mean a crime that undermines the offender\'s government.', chinese: '在这个语境中，“treason”用于表达“叛逆；不忠；叛国罪”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'utensil', term: 'utensil', normalizedTerm: 'utensil', partOfSpeech: ['noun'], ipa: '/ju\'tens(ə)l/',
    chineseShort: '器皿；用具', chineseExplanation: '表示“器皿；用具”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An implement for practical use (especially in a household).',
    examples: [{ english: 'In this context, the word "utensil" is used to mean an implement for practical use (especially in a household).', chinese: '在这个语境中，“utensil”用于表达“器皿；用具”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vault', term: 'vault', normalizedTerm: 'vault', partOfSpeech: ['noun', 'verb'], ipa: '/vɔlt/',
    chineseShort: '拱顶；窖；地下室', chineseExplanation: '表示“拱顶；窖；地下室”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A burial chamber (usually underground).',
    examples: [{ english: 'In this context, the word "vault" is used to mean a burial chamber (usually underground).', chinese: '在这个语境中，“vault”用于表达“拱顶；窖；地下室”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'nickel', term: 'nickel', normalizedTerm: 'nickel', partOfSpeech: ['noun', 'verb'], ipa: '/\'nɪk(ə)l/',
    chineseShort: '镍；镍币；五分镍币', chineseExplanation: '表示“镍；镍币；五分镍币”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A hard malleable ductile silvery metallic element that is resistant to corrosion; used in alloys; occurs in pentlandite and smaltite and garnierite and millerite.',
    examples: [{ english: 'In this context, the word "nickel" is used to mean a hard malleable ductile silvery metallic element that is resistant to corrosion; used in alloys; occurs in pentlandite and smaltite and garnierite and millerite.', chinese: '在这个语境中，“nickel”用于表达“镍；镍币；五分镍币”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'foremost', term: 'foremost', normalizedTerm: 'foremost', partOfSpeech: ['adjective', 'adverb'], ipa: '/\'fɔr.moʊst/',
    chineseShort: '最初的；最重要的', chineseExplanation: '表示“最初的；最重要的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Preceding all others in spatial position.',
    examples: [{ english: 'In this context, the word "foremost" is used to mean preceding all others in spatial position.', chinese: '在这个语境中，“foremost”用于表达“最初的；最重要的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stabilize', term: 'stabilize', normalizedTerm: 'stabilize', partOfSpeech: ['verb'], ipa: '/\'steɪb(ə)l.aɪz/',
    chineseShort: '使安定；使稳固', chineseExplanation: '表示“使安定；使稳固”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make stable and keep from fluctuating or put into an equilibrium.',
    examples: [{ english: 'In this context, the word "stabilize" is used to mean make stable and keep from fluctuating or put into an equilibrium.', chinese: '在这个语境中，“stabilize”用于表达“使安定；使稳固”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'agitation', term: 'agitation', normalizedTerm: 'agitation', partOfSpeech: ['noun'], ipa: '/.ædʒɪ\'teɪʃ(ə)n/',
    chineseShort: '激动；焦虑；煽动', chineseExplanation: '表示“激动；焦虑；煽动”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A mental state of extreme emotional disturbance.',
    examples: [{ english: 'In this context, the word "agitation" is used to mean a mental state of extreme emotional disturbance.', chinese: '在这个语境中，“agitation”用于表达“激动；焦虑；煽动”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'automation', term: 'automation', normalizedTerm: 'automation', partOfSpeech: ['noun'], ipa: '/.ɔtə\'meɪʃ(ə)n/',
    chineseShort: '自动化；自动操作', chineseExplanation: '表示“自动化；自动操作”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of implementing the control of equipment with advanced technology; usually involving electronic hardware.',
    examples: [{ english: 'In this context, the word "automation" is used to mean the act of implementing the control of equipment with advanced technology; usually involving electronic hardware.', chinese: '在这个语境中，“automation”用于表达“自动化；自动操作”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'bacterium', term: 'bacterium', normalizedTerm: 'bacterium', partOfSpeech: ['noun'], ipa: '/bæk\'tiəriəm/',
    chineseShort: '细菌', chineseExplanation: '表示“细菌”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(microbiology) single-celled or noncellular spherical or spiral or rod-shaped organisms lacking chlorophyll that reproduce by fission; important as pathogens and for biochemical properties; taxonomy is difficult; often considered to be plants.',
    examples: [{ english: 'In this context, the word "bacterium" is used to mean (microbiology) single-celled or noncellular spherical or spiral or rod-shaped organisms lacking chlorophyll that reproduce by fission; important as pathogens and for biochemical properties; taxonomy is difficult; often considered to be plants.', chinese: '在这个语境中，“bacterium”用于表达“细菌”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'clutch', term: 'clutch', normalizedTerm: 'clutch', partOfSpeech: ['noun', 'verb'], ipa: '/klʌtʃ/',
    chineseShort: '抓紧；掌握；离合器', chineseExplanation: '表示“抓紧；掌握；离合器”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A tense critical situation.',
    examples: [{ english: 'In this context, the word "clutch" is used to mean a tense critical situation.', chinese: '在这个语境中，“clutch”用于表达“抓紧；掌握；离合器”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'decimal', term: 'decimal', normalizedTerm: 'decimal', partOfSpeech: ['adjective', 'noun'], ipa: '/\'desɪm(ə)l/',
    chineseShort: '十进位的；小数的', chineseExplanation: '表示“十进位的；小数的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Numbered or proceeding by tens; based on ten.',
    examples: [{ english: 'In this context, the word "decimal" is used to mean numbered or proceeding by tens; based on ten.', chinese: '在这个语境中，“decimal”用于表达“十进位的；小数的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'eject', term: 'eject', normalizedTerm: 'eject', partOfSpeech: ['verb'], ipa: '/ɪ\'dʒekt/',
    chineseShort: '逐放；放逐；喷射', chineseExplanation: '表示“逐放；放逐；喷射”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Put out or expel from a place.',
    examples: [{ english: 'In this context, the word "eject" is used to mean put out or expel from a place.', chinese: '在这个语境中，“eject”用于表达“逐放；放逐；喷射”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fixture', term: 'fixture', normalizedTerm: 'fixture', partOfSpeech: ['noun'], ipa: '/\'fɪkstʃər/',
    chineseShort: '固定(状态)；固定物；设备', chineseExplanation: '表示“固定(状态)；固定物；设备”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An object firmly fixed in place (especially in a household).',
    examples: [{ english: 'In this context, the word "fixture" is used to mean an object firmly fixed in place (especially in a household).', chinese: '在这个语境中，“fixture”用于表达“固定(状态)；固定物；设备”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flask', term: 'flask', normalizedTerm: 'flask', partOfSpeech: ['noun'], ipa: '/flæsk/',
    chineseShort: '细颈瓶；烧瓶；小水瓶', chineseExplanation: '表示“细颈瓶；烧瓶；小水瓶”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Bottle that has a narrow neck.',
    examples: [{ english: 'In this context, the word "flask" is used to mean bottle that has a narrow neck.', chinese: '在这个语境中，“flask”用于表达“细颈瓶；烧瓶；小水瓶”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'geometry', term: 'geometry', normalizedTerm: 'geometry', partOfSpeech: ['noun'], ipa: '/dʒi\'ɑmətri/',
    chineseShort: '几何学', chineseExplanation: '表示“几何学”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The pure mathematics of points and lines and curves and surfaces.',
    examples: [{ english: 'In this context, the word "geometry" is used to mean the pure mathematics of points and lines and curves and surfaces.', chinese: '在这个语境中，“geometry”用于表达“几何学”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gravel', term: 'gravel', normalizedTerm: 'gravel', partOfSpeech: ['noun', 'verb'], ipa: '/\'ɡræv(ə)l/',
    chineseShort: '砂砾；碎石', chineseExplanation: '表示“砂砾；碎石”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Rock fragments and pebbles.',
    examples: [{ english: 'In this context, the word "gravel" is used to mean rock fragments and pebbles.', chinese: '在这个语境中，“gravel”用于表达“砂砾；碎石”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inertia', term: 'inertia', normalizedTerm: 'inertia', partOfSpeech: ['noun'], ipa: '/ɪ\'nɜrʃə/',
    chineseShort: '惯性；惰性；迟钝', chineseExplanation: '表示“惯性；惰性；迟钝”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(physics) the tendency of a body to maintain its state of rest or uniform motion unless acted upon by an external force.',
    examples: [{ english: 'In this context, the word "inertia" is used to mean (physics) the tendency of a body to maintain its state of rest or uniform motion unless acted upon by an external force.', chinese: '在这个语境中，“inertia”用于表达“惯性；惰性；迟钝”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'irrigation', term: 'irrigation', normalizedTerm: 'irrigation', partOfSpeech: ['noun'], ipa: '/ˌɪrɪ\'ɡeɪʃ(ə)n/',
    chineseShort: '灌溉；冲洗', chineseExplanation: '表示“灌溉；冲洗”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Supplying dry land with water by means of ditches etc.',
    examples: [{ english: 'In this context, the word "irrigation" is used to mean supplying dry land with water by means of ditches etc.', chinese: '在这个语境中，“irrigation”用于表达“灌溉；冲洗”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'layout', term: 'layout', normalizedTerm: 'layout', partOfSpeech: ['noun'], ipa: '/ˈleɪˌaʊt/',
    chineseShort: '布局；陈列；规划图', chineseExplanation: '表示“布局；陈列；规划图”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A plan or design of something that is laid out.',
    examples: [{ english: 'In this context, the word "layout" is used to mean a plan or design of something that is laid out.', chinese: '在这个语境中，“layout”用于表达“布局；陈列；规划图”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'luminous', term: 'luminous', normalizedTerm: 'luminous', partOfSpeech: ['adjective'], ipa: '/\'luːminəs/',
    chineseShort: '发光的；明亮的', chineseExplanation: '表示“发光的；明亮的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Softly bright or radiant.',
    examples: [{ english: 'In this context, the word "luminous" is used to mean softly bright or radiant.', chinese: '在这个语境中，“luminous”用于表达“发光的；明亮的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'migrate', term: 'migrate', normalizedTerm: 'migrate', partOfSpeech: ['verb'], ipa: '/\'maɪ.ɡreɪt/',
    chineseShort: '移动；移往；随季节而移居', chineseExplanation: '表示“移动；移往；随季节而移居”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Move from one country or region to another and settle there.',
    examples: [{ english: 'In this context, the word "migrate" is used to mean move from one country or region to another and settle there.', chinese: '在这个语境中，“migrate”用于表达“移动；移往；随季节而移居”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'nitrogen', term: 'nitrogen', normalizedTerm: 'nitrogen', partOfSpeech: ['noun'], ipa: '/\'naɪtrədʒən/',
    chineseShort: '氮', chineseExplanation: '表示“氮”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A common nonmetallic element that is normally a colorless odorless tasteless inert diatomic gas; constitutes 78 percent of the atmosphere by volume; a constituent of all living tissues.',
    examples: [{ english: 'In this context, the word "nitrogen" is used to mean a common nonmetallic element that is normally a colorless odorless tasteless inert diatomic gas; constitutes 78 percent of the atmosphere by volume; a constituent of all living tissues.', chinese: '在这个语境中，“nitrogen”用于表达“氮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'optical', term: 'optical', normalizedTerm: 'optical', partOfSpeech: ['adjective'], ipa: '/\'ɑptɪk(ə)l/',
    chineseShort: '眼睛的；视觉的；光学的', chineseExplanation: '表示“眼睛的；视觉的；光学的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to or involving light or optics.',
    examples: [{ english: 'In this context, the word "optical" is used to mean of or relating to or involving light or optics.', chinese: '在这个语境中，“optical”用于表达“眼睛的；视觉的；光学的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'orientation', term: 'orientation', normalizedTerm: 'orientation', partOfSpeech: ['noun'], ipa: '/.ɔriən\'teɪʃ(ə)n/',
    chineseShort: '定方位；适应；向东方', chineseExplanation: '表示“定方位；适应；向东方”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of orienting.',
    examples: [{ english: 'In this context, the word "orientation" is used to mean the act of orienting.', chinese: '在这个语境中，“orientation”用于表达“定方位；适应；向东方”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'partition', term: 'partition', normalizedTerm: 'partition', partOfSpeech: ['noun', 'verb'], ipa: '/pɑr\'tɪʃ(ə)n/',
    chineseShort: '分割；隔离物；隔墙', chineseExplanation: '表示“分割；隔离物；隔墙”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A vertical structure that divides or separates (as a wall divides one room from another).',
    examples: [{ english: 'In this context, the word "partition" is used to mean a vertical structure that divides or separates (as a wall divides one room from another).', chinese: '在这个语境中，“partition”用于表达“分割；隔离物；隔墙”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pathetic', term: 'pathetic', normalizedTerm: 'pathetic', partOfSpeech: ['adjective'], ipa: '/pə\'θetɪk/',
    chineseShort: '悲哀的；可怜的；感伤的', chineseExplanation: '表示“悲哀的；可怜的；感伤的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Inspiring mixed contempt and pity.',
    examples: [{ english: 'In this context, the word "pathetic" is used to mean inspiring mixed contempt and pity.', chinese: '在这个语境中，“pathetic”用于表达“悲哀的；可怜的；感伤的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'permissible', term: 'permissible', normalizedTerm: 'permissible', partOfSpeech: ['adjective'], ipa: '/pər\'mɪsəb(ə)l/',
    chineseShort: '可允许的；可容许程度的', chineseExplanation: '表示“可允许的；可容许程度的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'That may be permitted especially as according to rule.',
    examples: [{ english: 'In this context, the word "permissible" is used to mean that may be permitted especially as according to rule.', chinese: '在这个语境中，“permissible”用于表达“可允许的；可容许程度的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'quantitative', term: 'quantitative', normalizedTerm: 'quantitative', partOfSpeech: ['adjective'], ipa: '/\'kwɑntə.teɪtɪv/',
    chineseShort: '数量的；定量的', chineseExplanation: '表示“数量的；定量的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Expressible as a quantity or relating to or susceptible of measurement.',
    examples: [{ english: 'In this context, the word "quantitative" is used to mean expressible as a quantity or relating to or susceptible of measurement.', chinese: '在这个语境中，“quantitative”用于表达“数量的；定量的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'temperament', term: 'temperament', normalizedTerm: 'temperament', partOfSpeech: ['noun'], ipa: '/\'temp(ə)rəmənt/',
    chineseShort: '气质；性格；性情', chineseExplanation: '表示“气质；性格；性情”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Excessive emotionalism or irritability and excitability (especially when displayed openly).',
    examples: [{ english: 'In this context, the word "temperament" is used to mean excessive emotionalism or irritability and excitability (especially when displayed openly).', chinese: '在这个语境中，“temperament”用于表达“气质；性格；性情”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'threshold', term: 'threshold', normalizedTerm: 'threshold', partOfSpeech: ['noun'], ipa: '/\'θreʃ.hoʊld/',
    chineseShort: '门槛；入口；开端', chineseExplanation: '表示“门槛；入口；开端”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The starting point for a new state or experience.',
    examples: [{ english: 'In this context, the word "threshold" is used to mean the starting point for a new state or experience.', chinese: '在这个语境中，“threshold”用于表达“门槛；入口；开端”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vegetation', term: 'vegetation', normalizedTerm: 'vegetation', partOfSpeech: ['noun'], ipa: '/.vedʒə\'teɪʃ(ə)n/',
    chineseShort: '植物', chineseExplanation: '表示“植物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'All the plant life in a particular region or period.',
    examples: [{ english: 'In this context, the word "vegetation" is used to mean all the plant life in a particular region or period.', chinese: '在这个语境中，“vegetation”用于表达“植物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'voltage', term: 'voltage', normalizedTerm: 'voltage', partOfSpeech: ['noun'], ipa: '/\'voʊltɪdʒ/',
    chineseShort: '电压；伏特数', chineseExplanation: '表示“电压；伏特数”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The rate at which energy is drawn from a source that produces a flow of electricity in a circuit; expressed in volts.',
    examples: [{ english: 'In this context, the word "voltage" is used to mean the rate at which energy is drawn from a source that produces a flow of electricity in a circuit; expressed in volts.', chinese: '在这个语境中，“voltage”用于表达“电压；伏特数”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fragile', term: 'fragile', normalizedTerm: 'fragile', partOfSpeech: ['adjective'], ipa: '/\'frædʒəl/',
    chineseShort: '易碎的；脆的', chineseExplanation: '表示“易碎的；脆的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Vulnerably delicate.',
    examples: [{ english: 'In this context, the word "fragile" is used to mean vulnerably delicate.', chinese: '在这个语境中，“fragile”用于表达“易碎的；脆的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'lounge', term: 'lounge', normalizedTerm: 'lounge', partOfSpeech: ['noun', 'verb'], ipa: '/laʊndʒ/',
    chineseShort: '闲逛；休闲室；长沙发', chineseExplanation: '表示“闲逛；休闲室；长沙发”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A room (as in a hotel or airport) with seating where people can wait.',
    examples: [{ english: 'In this context, the word "lounge" is used to mean a room (as in a hotel or airport) with seating where people can wait.', chinese: '在这个语境中，“lounge”用于表达“闲逛；休闲室；长沙发”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fahrenheit', term: 'fahrenheit', normalizedTerm: 'fahrenheit', partOfSpeech: ['adjective', 'noun'], ipa: '/\'færənhaɪt/',
    chineseShort: '华氏温度计的', chineseExplanation: '表示“华氏温度计的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to a temperature scale proposed by the inventor of the mercury thermometer.',
    examples: [{ english: 'In this context, the word "fahrenheit" is used to mean of or relating to a temperature scale proposed by the inventor of the mercury thermometer.', chinese: '在这个语境中，“fahrenheit”用于表达“华氏温度计的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'typhoon', term: 'typhoon', normalizedTerm: 'typhoon', partOfSpeech: ['noun'], ipa: '/.taɪ\'fun/',
    chineseShort: '台风', chineseExplanation: '表示“台风”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A tropical cyclone occurring in the western Pacific or Indian oceans.',
    examples: [{ english: 'In this context, the word "typhoon" is used to mean a tropical cyclone occurring in the western Pacific or Indian oceans.', chinese: '在这个语境中，“typhoon”用于表达“台风”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'solemn', term: 'solemn', normalizedTerm: 'solemn', partOfSpeech: ['adjective'], ipa: '/\'sɑləm/',
    chineseShort: '严肃的；郑重的；庄严的', chineseExplanation: '表示“严肃的；郑重的；庄严的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Dignified and somber in manner or character and committed to keeping promises.',
    examples: [{ english: 'In this context, the word "solemn" is used to mean dignified and somber in manner or character and committed to keeping promises.', chinese: '在这个语境中，“solemn”用于表达“严肃的；郑重的；庄严的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'plaster', term: 'plaster', normalizedTerm: 'plaster', partOfSpeech: ['noun', 'verb'], ipa: '/\'plæstər/',
    chineseShort: '石膏；灰泥；安慰(缓解)用品', chineseExplanation: '表示“石膏；灰泥；安慰(缓解)用品”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A mixture of lime or gypsum with sand and water; hardens into a smooth solid; used to cover walls and ceilings.',
    examples: [{ english: 'In this context, the word "plaster" is used to mean a mixture of lime or gypsum with sand and water; hardens into a smooth solid; used to cover walls and ceilings.', chinese: '在这个语境中，“plaster”用于表达“石膏；灰泥；安慰(缓解)用品”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'raid', term: 'raid', normalizedTerm: 'raid', partOfSpeech: ['noun', 'verb'], ipa: '/reɪd/',
    chineseShort: '袭击；突袭；搜捕', chineseExplanation: '表示“袭击；突袭；搜捕”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An attempt by speculators to defraud investors.',
    examples: [{ english: 'In this context, the word "raid" is used to mean an attempt by speculators to defraud investors.', chinese: '在这个语境中，“raid”用于表达“袭击；突袭；搜捕”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'contemplate', term: 'contemplate', normalizedTerm: 'contemplate', partOfSpeech: ['verb'], ipa: '/\'kɑntəm.pleɪt/',
    chineseShort: '注视；沉思；盘算', chineseExplanation: '表示“注视；沉思；盘算”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Look at thoughtfully; observe deep in thought.',
    examples: [{ english: 'In this context, the word "contemplate" is used to mean look at thoughtfully; observe deep in thought.', chinese: '在这个语境中，“contemplate”用于表达“注视；沉思；盘算”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'reckless', term: 'reckless', normalizedTerm: 'reckless', partOfSpeech: ['adjective'], ipa: '/\'rekləs/',
    chineseShort: '不介意的；大意的；鲁莽的', chineseExplanation: '表示“不介意的；大意的；鲁莽的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Marked by defiant disregard for danger or consequences.',
    examples: [{ english: 'In this context, the word "reckless" is used to mean marked by defiant disregard for danger or consequences.', chinese: '在这个语境中，“reckless”用于表达“不介意的；大意的；鲁莽的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'compact', term: 'compact', normalizedTerm: 'compact', partOfSpeech: ['adjective', 'verb'], ipa: '/\'kɑm.pækt/',
    chineseShort: '紧凑的；紧密的；简洁的', chineseExplanation: '表示“紧凑的；紧密的；简洁的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Closely and firmly united or packed together.',
    examples: [{ english: 'In this context, the word "compact" is used to mean closely and firmly united or packed together.', chinese: '在这个语境中，“compact”用于表达“紧凑的；紧密的；简洁的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gnaw', term: 'gnaw', normalizedTerm: 'gnaw', partOfSpeech: ['verb'], ipa: '/nɔ/',
    chineseShort: '咬；啃；侵蚀', chineseExplanation: '表示“咬；啃；侵蚀”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Bite or chew on with the teeth.',
    examples: [{ english: 'In this context, the word "gnaw" is used to mean bite or chew on with the teeth.', chinese: '在这个语境中，“gnaw”用于表达“咬；啃；侵蚀”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tact', term: 'tact', normalizedTerm: 'tact', partOfSpeech: ['noun'], ipa: '/tækt/',
    chineseShort: '机智；手法；老练', chineseExplanation: '表示“机智；手法；老练”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Consideration in dealing with others and avoiding giving offense.',
    examples: [{ english: 'In this context, the word "tact" is used to mean consideration in dealing with others and avoiding giving offense.', chinese: '在这个语境中，“tact”用于表达“机智；手法；老练”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wade', term: 'wade', normalizedTerm: 'wade', partOfSpeech: ['verb', 'noun'], ipa: '/weɪd/',
    chineseShort: '跋涉', chineseExplanation: '表示“跋涉”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Walk (through relatively shallow water).',
    examples: [{ english: 'In this context, the word "wade" is used to mean walk (through relatively shallow water).', chinese: '在这个语境中，“wade”用于表达“跋涉”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vengeance', term: 'vengeance', normalizedTerm: 'vengeance', partOfSpeech: ['noun'], ipa: '/\'vendʒəns/',
    chineseShort: '复仇；报仇', chineseExplanation: '表示“复仇；报仇”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of taking revenge (harming someone in retaliation for something harmful that they have done) especially in the next life; I will repay, saith the Lord"--Romans 12:19.',
    examples: [{ english: 'In this context, the word "vengeance" is used to mean the act of taking revenge (harming someone in retaliation for something harmful that they have done) especially in the next life; I will repay, saith the Lord"--Romans 12:19.', chinese: '在这个语境中，“vengeance”用于表达“复仇；报仇”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wretched', term: 'wretched', normalizedTerm: 'wretched', partOfSpeech: ['adjective'], ipa: '/\'retʃəd/',
    chineseShort: '可怜的；不幸的；卑鄙的', chineseExplanation: '表示“可怜的；不幸的；卑鄙的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of very poor quality or condition.',
    examples: [{ english: 'In this context, the word "wretched" is used to mean of very poor quality or condition.', chinese: '在这个语境中，“wretched”用于表达“可怜的；不幸的；卑鄙的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'distort', term: 'distort', normalizedTerm: 'distort', partOfSpeech: ['verb'], ipa: '/dɪ\'stɔrt/',
    chineseShort: '扭曲；歪曲', chineseExplanation: '表示“扭曲；歪曲”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make false by mutilation or addition; as of a message or story.',
    examples: [{ english: 'In this context, the word "distort" is used to mean make false by mutilation or addition; as of a message or story.', chinese: '在这个语境中，“distort”用于表达“扭曲；歪曲”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'retort', term: 'retort', normalizedTerm: 'retort', partOfSpeech: ['noun', 'verb'], ipa: '/rɪ\'tɔrt/',
    chineseShort: '反驳；顶嘴；蒸馏器', chineseExplanation: '表示“反驳；顶嘴；蒸馏器”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A vessel where substances are distilled or decomposed by heat.',
    examples: [{ english: 'In this context, the word "retort" is used to mean a vessel where substances are distilled or decomposed by heat.', chinese: '在这个语境中，“retort”用于表达“反驳；顶嘴；蒸馏器”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'linear', term: 'linear', normalizedTerm: 'linear', partOfSpeech: ['adjective'], ipa: '/\'lɪniər/',
    chineseShort: '线的；直线的；线状的', chineseExplanation: '表示“线的；直线的；线状的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Designating or involving an equation whose terms are of the first degree.',
    examples: [{ english: 'In this context, the word "linear" is used to mean designating or involving an equation whose terms are of the first degree.', chinese: '在这个语境中，“linear”用于表达“线的；直线的；线状的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rotate', term: 'rotate', normalizedTerm: 'rotate', partOfSpeech: ['adjective', 'verb'], ipa: '/ˈrəʊˌteɪt/',
    chineseShort: '辐状的', chineseExplanation: '表示“辐状的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Exchange on a regular basis.',
    examples: [{ english: 'In this context, the word "rotate" is used to mean exchange on a regular basis.', chinese: '在这个语境中，“rotate”用于表达“辐状的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'affluence', term: 'affluence', normalizedTerm: 'affluence', partOfSpeech: ['noun'], ipa: '/\'æfluəns/',
    chineseShort: '富裕；丰富；流注', chineseExplanation: '表示“富裕；丰富；流注”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Abundant wealth.',
    examples: [{ english: 'In this context, the word "affluence" is used to mean abundant wealth.', chinese: '在这个语境中，“affluence”用于表达“富裕；丰富；流注”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'aggression', term: 'aggression', normalizedTerm: 'aggression', partOfSpeech: ['noun'], ipa: '/ə\'ɡreʃ(ə)n/',
    chineseShort: '侵犯；侵略', chineseExplanation: '表示“侵犯；侵略”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A disposition to behave aggressively.',
    examples: [{ english: 'In this context, the word "aggression" is used to mean a disposition to behave aggressively.', chinese: '在这个语境中，“aggression”用于表达“侵犯；侵略”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'analogous', term: 'analogous', normalizedTerm: 'analogous', partOfSpeech: ['adjective'], ipa: '/ə\'næləɡəs/',
    chineseShort: '类似的；相似的', chineseExplanation: '表示“类似的；相似的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Similar or equivalent in some respects though otherwise dissimilar.',
    examples: [{ english: 'In this context, the word "analogous" is used to mean similar or equivalent in some respects though otherwise dissimilar.', chinese: '在这个语境中，“analogous”用于表达“类似的；相似的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bias', term: 'bias', normalizedTerm: 'bias', partOfSpeech: ['noun', 'adjective'], ipa: '/\'baɪəs/',
    chineseShort: '偏见；斜纹', chineseExplanation: '表示“偏见；斜纹”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A partiality that prevents objective consideration of an issue or situation.',
    examples: [{ english: 'In this context, the word "bias" is used to mean a partiality that prevents objective consideration of an issue or situation.', chinese: '在这个语境中，“bias”用于表达“偏见；斜纹”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'circulation', term: 'circulation', normalizedTerm: 'circulation', partOfSpeech: ['noun'], ipa: '/.sɜrkjə\'leɪʃ(ə)n/',
    chineseShort: '流通；循环；发行量', chineseExplanation: '表示“流通；循环；发行量”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The dissemination of copies of periodicals (as newspapers or magazines).',
    examples: [{ english: 'In this context, the word "circulation" is used to mean the dissemination of copies of periodicals (as newspapers or magazines).', chinese: '在这个语境中，“circulation”用于表达“流通；循环；发行量”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deferential', term: 'deferential', normalizedTerm: 'deferential', partOfSpeech: ['adjective'], ipa: '/.defə\'renʃ(ə)l/',
    chineseShort: '恭敬的', chineseExplanation: '表示“恭敬的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Showing deference.',
    examples: [{ english: 'In this context, the word "deferential" is used to mean showing deference.', chinese: '在这个语境中，“deferential”用于表达“恭敬的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'degradation', term: 'degradation', normalizedTerm: 'degradation', partOfSpeech: ['noun'], ipa: '/.deɡrə\'deɪʃ(ə)n/',
    chineseShort: '降格；堕落；退化', chineseExplanation: '表示“降格；堕落；退化”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Changing to a lower state (a less respected state).',
    examples: [{ english: 'In this context, the word "degradation" is used to mean changing to a lower state (a less respected state).', chinese: '在这个语境中，“degradation”用于表达“降格；堕落；退化”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'graphite', term: 'graphite', normalizedTerm: 'graphite', partOfSpeech: ['noun'], ipa: '/\'ɡræ.faɪt/',
    chineseShort: '石墨', chineseExplanation: '表示“石墨”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Used as a lubricant and as a moderator in nuclear reactors.',
    examples: [{ english: 'In this context, the word "graphite" is used to mean used as a lubricant and as a moderator in nuclear reactors.', chinese: '在这个语境中，“graphite”用于表达“石墨”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'halt', term: 'halt', normalizedTerm: 'halt', partOfSpeech: ['noun', 'verb'], ipa: '/hɔlt/',
    chineseShort: '停止；立定；休息', chineseExplanation: '表示“停止；立定；休息”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Cause to stop.',
    examples: [{ english: 'In this context, the word "halt" is used to mean cause to stop.', chinese: '在这个语境中，“halt”用于表达“停止；立定；休息”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hoarse', term: 'hoarse', normalizedTerm: 'hoarse', partOfSpeech: ['adjective'], ipa: '/hɔrs/',
    chineseShort: '沙哑的；嘶哑的', chineseExplanation: '表示“沙哑的；嘶哑的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Deep and harsh sounding as if from shouting or illness or emotion.',
    examples: [{ english: 'In this context, the word "hoarse" is used to mean deep and harsh sounding as if from shouting or illness or emotion.', chinese: '在这个语境中，“hoarse”用于表达“沙哑的；嘶哑的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'horizontal', term: 'horizontal', normalizedTerm: 'horizontal', partOfSpeech: ['noun', 'adjective'], ipa: '/.hɔrɪ\'zɑnt(ə)l/',
    chineseShort: '水平线；水平面；水平位置', chineseExplanation: '表示“水平线；水平面；水平位置”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Something that is oriented horizontally.',
    examples: [{ english: 'In this context, the word "horizontal" is used to mean something that is oriented horizontally.', chinese: '在这个语境中，“horizontal”用于表达“水平线；水平面；水平位置”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'incompatible', term: 'incompatible', normalizedTerm: 'incompatible', partOfSpeech: ['adjective'], ipa: '/.ɪnkəm\'pætəb(ə)l/',
    chineseShort: '不相容的；不能并存的；矛盾的', chineseExplanation: '表示“不相容的；不能并存的；矛盾的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Not compatible.',
    examples: [{ english: 'In this context, the word "incompatible" is used to mean not compatible.', chinese: '在这个语境中，“incompatible”用于表达“不相容的；不能并存的；矛盾的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'insidious', term: 'insidious', normalizedTerm: 'insidious', partOfSpeech: ['adjective'], ipa: '/ɪn\'sɪdiəs/',
    chineseShort: '隐伏的；阴险的；狡猾的', chineseExplanation: '表示“隐伏的；阴险的；狡猾的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Beguiling but harmful.',
    examples: [{ english: 'In this context, the word "insidious" is used to mean beguiling but harmful.', chinese: '在这个语境中，“insidious”用于表达“隐伏的；阴险的；狡猾的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'interference', term: 'interference', normalizedTerm: 'interference', partOfSpeech: ['noun'], ipa: '/.ɪntər\'fɪrəns/',
    chineseShort: '冲突；干涉', chineseExplanation: '表示“冲突；干涉”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(American football) blocking a player\'s path with your body.',
    examples: [{ english: 'In this context, the word "interference" is used to mean (American football) blocking a player\'s path with your body.', chinese: '在这个语境中，“interference”用于表达“冲突；干涉”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inverse', term: 'inverse', normalizedTerm: 'inverse', partOfSpeech: ['adjective', 'noun'], ipa: '/\'ɪn.vɜrs/',
    chineseShort: '倒转的；相反的', chineseExplanation: '表示“倒转的；相反的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Reversed (turned backward) in order or nature or effect.',
    examples: [{ english: 'In this context, the word "inverse" is used to mean reversed (turned backward) in order or nature or effect.', chinese: '在这个语境中，“inverse”用于表达“倒转的；相反的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'limestone', term: 'limestone', normalizedTerm: 'limestone', partOfSpeech: ['noun'], ipa: '/\'laɪm.stoʊn/',
    chineseShort: '石灰石', chineseExplanation: '表示“石灰石”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A sedimentary rock consisting mainly of calcium that was deposited by the remains of marine animals.',
    examples: [{ english: 'In this context, the word "limestone" is used to mean a sedimentary rock consisting mainly of calcium that was deposited by the remains of marine animals.', chinese: '在这个语境中，“limestone”用于表达“石灰石”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'monarch', term: 'monarch', normalizedTerm: 'monarch', partOfSpeech: ['noun'], ipa: '/ˈmɒnə(r)k/',
    chineseShort: '帝王；统治者；元首', chineseExplanation: '表示“帝王；统治者；元首”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed.',
    examples: [{ english: 'In this context, the word "monarch" is used to mean large migratory American butterfly having deep orange wings with black and white markings; the larvae feed on milkweed.', chinese: '在这个语境中，“monarch”用于表达“帝王；统治者；元首”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'neutron', term: 'neutron', normalizedTerm: 'neutron', partOfSpeech: ['noun'], ipa: '/\'nu.trɑn/',
    chineseShort: '中子', chineseExplanation: '表示“中子”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An elementary particle with 0 charge and mass about equal to a proton; enters into the structure of the atomic nucleus.',
    examples: [{ english: 'In this context, the word "neutron" is used to mean an elementary particle with 0 charge and mass about equal to a proton; enters into the structure of the atomic nucleus.', chinese: '在这个语境中，“neutron”用于表达“中子”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'peripheral', term: 'peripheral', normalizedTerm: 'peripheral', partOfSpeech: ['adjective', 'noun'], ipa: '/pə\'rɪf(ə)rəl/',
    chineseShort: '周边的；周围的；圆周的', chineseExplanation: '表示“周边的；周围的；圆周的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'On or near an edge or constituting an outer boundary; the outer area.',
    examples: [{ english: 'In this context, the word "peripheral" is used to mean on or near an edge or constituting an outer boundary; the outer area.', chinese: '在这个语境中，“peripheral”用于表达“周边的；周围的；圆周的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'poke', term: 'poke', normalizedTerm: 'poke', partOfSpeech: ['noun', 'verb'], ipa: '/poʊk/',
    chineseShort: '刺；戳；袋子', chineseExplanation: '表示“刺；戳；袋子”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Tall coarse perennial American herb having small white flowers followed by blackish-red berries on long drooping racemes; young fleshy stems are edible; berries and root are poisonous.',
    examples: [{ english: 'In this context, the word "poke" is used to mean tall coarse perennial American herb having small white flowers followed by blackish-red berries on long drooping racemes; young fleshy stems are edible; berries and root are poisonous.', chinese: '在这个语境中，“poke”用于表达“刺；戳；袋子”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'primate', term: 'primate', normalizedTerm: 'primate', partOfSpeech: ['noun'], ipa: '/\'praimit/',
    chineseShort: '大主教；灵长目动物', chineseExplanation: '表示“大主教；灵长目动物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any placental mammal of the order Primates; has good eyesight and flexible hands and feet.',
    examples: [{ english: 'In this context, the word "primate" is used to mean any placental mammal of the order Primates; has good eyesight and flexible hands and feet.', chinese: '在这个语境中，“primate”用于表达“大主教；灵长目动物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sedentary', term: 'sedentary', normalizedTerm: 'sedentary', partOfSpeech: ['adjective'], ipa: '/\'sed(ə)ntəri/',
    chineseShort: '久坐的；坐惯的；定栖的', chineseExplanation: '表示“久坐的；坐惯的；定栖的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Requiring sitting or little activity.',
    examples: [{ english: 'In this context, the word "sedentary" is used to mean requiring sitting or little activity.', chinese: '在这个语境中，“sedentary”用于表达“久坐的；坐惯的；定栖的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'terminology', term: 'terminology', normalizedTerm: 'terminology', partOfSpeech: ['noun'], ipa: '/.tɜrmɪ\'nɑlədʒi/',
    chineseShort: '术语；术语学', chineseExplanation: '表示“术语；术语学”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A system of words used to name things in a particular discipline.',
    examples: [{ english: 'In this context, the word "terminology" is used to mean a system of words used to name things in a particular discipline.', chinese: '在这个语境中，“terminology”用于表达“术语；术语学”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'torque', term: 'torque', normalizedTerm: 'torque', partOfSpeech: ['noun'], ipa: '/tɔrk/',
    chineseShort: '扭转力；转矩；项圈', chineseExplanation: '表示“扭转力；转矩；项圈”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A twisting force.',
    examples: [{ english: 'In this context, the word "torque" is used to mean a twisting force.', chinese: '在这个语境中，“torque”用于表达“扭转力；转矩；项圈”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'verify', term: 'verify', normalizedTerm: 'verify', partOfSpeech: ['verb'], ipa: '/\'verɪ.faɪ/',
    chineseShort: '证明；查证；证实', chineseExplanation: '表示“证明；查证；证实”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Confirm the truth of.',
    examples: [{ english: 'In this context, the word "verify" is used to mean confirm the truth of.', chinese: '在这个语境中，“verify”用于表达“证明；查证；证实”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'viscous', term: 'viscous', normalizedTerm: 'viscous', partOfSpeech: ['adjective'], ipa: '/\'vɪskəs/',
    chineseShort: '粘的；粘性的', chineseExplanation: '表示“粘的；粘性的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having a relatively high resistance to flow.',
    examples: [{ english: 'In this context, the word "viscous" is used to mean having a relatively high resistance to flow.', chinese: '在这个语境中，“viscous”用于表达“粘的；粘性的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'yoke', term: 'yoke', normalizedTerm: 'yoke', partOfSpeech: ['noun', 'verb'], ipa: '/joʊk/',
    chineseShort: '轭；牛轭；束缚', chineseExplanation: '表示“轭；牛轭；束缚”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Fabric comprising a fitted part at the top of a garment.',
    examples: [{ english: 'In this context, the word "yoke" is used to mean fabric comprising a fitted part at the top of a garment.', chinese: '在这个语境中，“yoke”用于表达“轭；牛轭；束缚”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'indicative', term: 'indicative', normalizedTerm: 'indicative', partOfSpeech: ['adjective'], ipa: '/ɪn\'dɪkətɪv/',
    chineseShort: '指示的；象征的；表示...的', chineseExplanation: '表示“指示的；象征的；表示...的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to the mood of verbs that is used simple in declarative statements.',
    examples: [{ english: 'In this context, the word "indicative" is used to mean relating to the mood of verbs that is used simple in declarative statements.', chinese: '在这个语境中，“indicative”用于表达“指示的；象征的；表示...的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'edible', term: 'edible', normalizedTerm: 'edible', partOfSpeech: ['noun', 'adjective'], ipa: '/ˈedəb(ə)l/',
    chineseShort: '食品；食物', chineseExplanation: '表示“食品；食物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Suitable for use as food.',
    examples: [{ english: 'In this context, the word "edible" is used to mean suitable for use as food.', chinese: '在这个语境中，“edible”用于表达“食品；食物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'orchard', term: 'orchard', normalizedTerm: 'orchard', partOfSpeech: ['noun'], ipa: '/\'ɔrtʃərd/',
    chineseShort: '果园；果树林', chineseExplanation: '表示“果园；果树林”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Garden consisting of a small cultivated wood without undergrowth.',
    examples: [{ english: 'In this context, the word "orchard" is used to mean garden consisting of a small cultivated wood without undergrowth.', chinese: '在这个语境中，“orchard”用于表达“果园；果树林”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'longevity', term: 'longevity', normalizedTerm: 'longevity', partOfSpeech: ['noun'], ipa: '/lɑn\'dʒevəti/',
    chineseShort: '长命；长寿；寿命', chineseExplanation: '表示“长命；长寿；寿命”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Duration of service.',
    examples: [{ english: 'In this context, the word "longevity" is used to mean duration of service.', chinese: '在这个语境中，“longevity”用于表达“长命；长寿；寿命”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'contend', term: 'contend', normalizedTerm: 'contend', partOfSpeech: ['verb'], ipa: '/kən\'tend/',
    chineseShort: '奋斗；斗争；竞争', chineseExplanation: '表示“奋斗；斗争；竞争”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Maintain or assert.',
    examples: [{ english: 'In this context, the word "contend" is used to mean maintain or assert.', chinese: '在这个语境中，“contend”用于表达“奋斗；斗争；竞争”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'acquisitive', term: 'acquisitive', normalizedTerm: 'acquisitive', partOfSpeech: ['adjective'], ipa: '/ə\'kwɪzətɪv/',
    chineseShort: '渴望获得的；贪婪的', chineseExplanation: '表示“渴望获得的；贪婪的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Eager to acquire and possess things especially material possessions or ideas.',
    examples: [{ english: 'In this context, the word "acquisitive" is used to mean eager to acquire and possess things especially material possessions or ideas.', chinese: '在这个语境中，“acquisitive”用于表达“渴望获得的；贪婪的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'snobbish', term: 'snobbish', normalizedTerm: 'snobbish', partOfSpeech: ['adjective'], ipa: '/\'snɑbɪʃ/',
    chineseShort: '自命不凡的；势利的', chineseExplanation: '表示“自命不凡的；势利的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Befitting or characteristic of those who incline to social exclusiveness and who rebuff the advances of people considered inferior.',
    examples: [{ english: 'In this context, the word "snobbish" is used to mean befitting or characteristic of those who incline to social exclusiveness and who rebuff the advances of people considered inferior.', chinese: '在这个语境中，“snobbish”用于表达“自命不凡的；势利的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'thresh', term: 'thresh', normalizedTerm: 'thresh', partOfSpeech: ['verb'], ipa: '/θreʃ/',
    chineseShort: '打谷；摔打；反复研究', chineseExplanation: '表示“打谷；摔打；反复研究”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Move or stir about violently.',
    examples: [{ english: 'In this context, the word "thresh" is used to mean move or stir about violently.', chinese: '在这个语境中，“thresh”用于表达“打谷；摔打；反复研究”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'thrifty', term: 'thrifty', normalizedTerm: 'thrifty', partOfSpeech: ['adjective'], ipa: '/\'θrɪfti/',
    chineseShort: '节俭的；兴旺的；繁茂的', chineseExplanation: '表示“节俭的；兴旺的；繁茂的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Careful and diligent in the use of resources.',
    examples: [{ english: 'In this context, the word "thrifty" is used to mean careful and diligent in the use of resources.', chinese: '在这个语境中，“thrifty”用于表达“节俭的；兴旺的；繁茂的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vaccinate', term: 'vaccinate', normalizedTerm: 'vaccinate', partOfSpeech: ['verb'], ipa: '/\'væksɪ.neɪt/',
    chineseShort: '预防接种', chineseExplanation: '表示“预防接种”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Perform vaccinations or produce immunity in by inoculation.',
    examples: [{ english: 'In this context, the word "vaccinate" is used to mean perform vaccinations or produce immunity in by inoculation.', chinese: '在这个语境中，“vaccinate”用于表达“预防接种”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fury', term: 'fury', normalizedTerm: 'fury', partOfSpeech: ['noun'], ipa: '/\'fjʊri/',
    chineseShort: '愤怒；狂暴；狂怒的人', chineseExplanation: '表示“愤怒；狂暴；狂怒的人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A feeling of intense anger.',
    examples: [{ english: 'In this context, the word "fury" is used to mean a feeling of intense anger.', chinese: '在这个语境中，“fury”用于表达“愤怒；狂暴；狂怒的人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'chorus', term: 'chorus', normalizedTerm: 'chorus', partOfSpeech: ['noun', 'verb'], ipa: '/\'kɔrəs/',
    chineseShort: '合唱队；齐声', chineseExplanation: '表示“合唱队；齐声”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any utterance produced simultaneously by a group.',
    examples: [{ english: 'In this context, the word "chorus" is used to mean any utterance produced simultaneously by a group.', chinese: '在这个语境中，“chorus”用于表达“合唱队；齐声”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'junction', term: 'junction', normalizedTerm: 'junction', partOfSpeech: ['noun'], ipa: '/\'dʒʌŋkʃ(ə)n/',
    chineseShort: '连接；会合处；交叉点', chineseExplanation: '表示“连接；会合处；交叉点”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The place where two or more things come together.',
    examples: [{ english: 'In this context, the word "junction" is used to mean the place where two or more things come together.', chinese: '在这个语境中，“junction”用于表达“连接；会合处；交叉点”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'longitude', term: 'longitude', normalizedTerm: 'longitude', partOfSpeech: ['noun'], ipa: '/\'lɑndʒɪ.tud/',
    chineseShort: '经度；经线', chineseExplanation: '表示“经度；经线”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The angular distance between a point on any meridian and the prime meridian at Greenwich.',
    examples: [{ english: 'In this context, the word "longitude" is used to mean the angular distance between a point on any meridian and the prime meridian at Greenwich.', chinese: '在这个语境中，“longitude”用于表达“经度；经线”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fossil', term: 'fossil', normalizedTerm: 'fossil', partOfSpeech: ['noun', 'adjective'], ipa: '/\'fɑs(ə)l/',
    chineseShort: '化石；古物', chineseExplanation: '表示“化石；古物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The remains (or an impression) of a plant or animal that existed in a past geological age and that has been excavated from the soil.',
    examples: [{ english: 'In this context, the word "fossil" is used to mean the remains (or an impression) of a plant or animal that existed in a past geological age and that has been excavated from the soil.', chinese: '在这个语境中，“fossil”用于表达“化石；古物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'propulsion', term: 'propulsion', normalizedTerm: 'propulsion', partOfSpeech: ['noun'], ipa: '/prə\'pʌlʃən/',
    chineseShort: '推进；推进力', chineseExplanation: '表示“推进；推进力”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A propelling force.',
    examples: [{ english: 'In this context, the word "propulsion" is used to mean a propelling force.', chinese: '在这个语境中，“propulsion”用于表达“推进；推进力”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'modulate', term: 'modulate', normalizedTerm: 'modulate', partOfSpeech: ['verb'], ipa: '/\'mɑdʒə.leɪt/',
    chineseShort: '调整；使转调；控制', chineseExplanation: '表示“调整；使转调；控制”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Change the key of, in music.',
    examples: [{ english: 'In this context, the word "modulate" is used to mean change the key of, in music.', chinese: '在这个语境中，“modulate”用于表达“调整；使转调；控制”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'kin', term: 'kin', normalizedTerm: 'kin', partOfSpeech: ['noun', 'adjective'], ipa: '/kɪn/',
    chineseShort: '亲戚；同族；血缘关系', chineseExplanation: '表示“亲戚；同族；血缘关系”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person having kinship with another or others.',
    examples: [{ english: 'In this context, the word "kin" is used to mean a person having kinship with another or others.', chinese: '在这个语境中，“kin”用于表达“亲戚；同族；血缘关系”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'oar', term: 'oar', normalizedTerm: 'oar', partOfSpeech: ['noun', 'verb'], ipa: '/ɔr/',
    chineseShort: '桨；桨手；搅棒', chineseExplanation: '表示“桨；桨手；搅棒”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An implement used to propel or steer a boat.',
    examples: [{ english: 'In this context, the word "oar" is used to mean an implement used to propel or steer a boat.', chinese: '在这个语境中，“oar”用于表达“桨；桨手；搅棒”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rot', term: 'rot', normalizedTerm: 'rot', partOfSpeech: ['noun', 'verb'], ipa: '/rɑt/',
    chineseShort: '腐烂；腐蚀；败坏', chineseExplanation: '表示“腐烂；腐蚀；败坏”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A state of decay usually accompanied by an offensive odor.',
    examples: [{ english: 'In this context, the word "rot" is used to mean a state of decay usually accompanied by an offensive odor.', chinese: '在这个语境中，“rot”用于表达“腐烂；腐蚀；败坏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tow', term: 'tow', normalizedTerm: 'tow', partOfSpeech: ['noun', 'verb'], ipa: '/toʊ/',
    chineseShort: '拖；拖绳；拖轮', chineseExplanation: '表示“拖；拖绳；拖轮”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of hauling something (as a vehicle) by means of a hitch or rope.',
    examples: [{ english: 'In this context, the word "tow" is used to mean the act of hauling something (as a vehicle) by means of a hitch or rope.', chinese: '在这个语境中，“tow”用于表达“拖；拖绳；拖轮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sacrifice', term: 'sacrifice', normalizedTerm: 'sacrifice', partOfSpeech: ['noun', 'verb'], ipa: '/\'sækrɪ.faɪs/',
    chineseShort: '牺牲；供奉；祭品', chineseExplanation: '表示“牺牲；供奉；祭品”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Personnel that are sacrificed (e.g., surrendered or lost in order to gain an objective).',
    examples: [{ english: 'In this context, the word "sacrifice" is used to mean personnel that are sacrificed (e.g., surrendered or lost in order to gain an objective).', chinese: '在这个语境中，“sacrifice”用于表达“牺牲；供奉；祭品”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pledge', term: 'pledge', normalizedTerm: 'pledge', partOfSpeech: ['noun', 'verb'], ipa: '/pledʒ/',
    chineseShort: '诺言；保证；誓言', chineseExplanation: '表示“诺言；保证；誓言”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A deposit of personal property as security for a debt.',
    examples: [{ english: 'In this context, the word "pledge" is used to mean a deposit of personal property as security for a debt.', chinese: '在这个语境中，“pledge”用于表达“诺言；保证；誓言”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'peck', term: 'peck', normalizedTerm: 'peck', partOfSpeech: ['noun', 'verb'], ipa: '/pek/',
    chineseShort: '配克(英美干量单位)；啄痕；啄食', chineseExplanation: '表示“配克(英美干量单位)；啄痕；啄食”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A British imperial capacity measure (liquid or dry) equal to 2 gallons.',
    examples: [{ english: 'In this context, the word "peck" is used to mean a British imperial capacity measure (liquid or dry) equal to 2 gallons.', chinese: '在这个语境中，“peck”用于表达“配克(英美干量单位)；啄痕；啄食”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dispose', term: 'dispose', normalizedTerm: 'dispose', partOfSpeech: ['verb'], ipa: '/dis\'pəuz/',
    chineseShort: '处理；排列；布置', chineseExplanation: '表示“处理；排列；布置”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Give, sell, or transfer to another.',
    examples: [{ english: 'In this context, the word "dispose" is used to mean give, sell, or transfer to another.', chinese: '在这个语境中，“dispose”用于表达“处理；排列；布置”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'comprise', term: 'comprise', normalizedTerm: 'comprise', partOfSpeech: ['verb'], ipa: '/kəm\'praɪz/',
    chineseShort: '包含；构成', chineseExplanation: '表示“包含；构成”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be composed of.',
    examples: [{ english: 'In this context, the word "comprise" is used to mean be composed of.', chinese: '在这个语境中，“comprise”用于表达“包含；构成”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'liability', term: 'liability', normalizedTerm: 'liability', partOfSpeech: ['noun'], ipa: '/.laɪə\'bɪləti/',
    chineseShort: '责任；债务；倾向', chineseExplanation: '表示“责任；债务；倾向”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The state of being legally obliged and responsible.',
    examples: [{ english: 'In this context, the word "liability" is used to mean the state of being legally obliged and responsible.', chinese: '在这个语境中，“liability”用于表达“责任；债务；倾向”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'provoke', term: 'provoke', normalizedTerm: 'provoke', partOfSpeech: ['verb'], ipa: '/prə\'voʊk/',
    chineseShort: '激怒；惹起；诱导', chineseExplanation: '表示“激怒；惹起；诱导”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Evoke or provoke to appear or occur.',
    examples: [{ english: 'In this context, the word "provoke" is used to mean evoke or provoke to appear or occur.', chinese: '在这个语境中，“provoke”用于表达“激怒；惹起；诱导”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elliptical', term: 'elliptical', normalizedTerm: 'elliptical', partOfSpeech: ['adjective'], ipa: '/ɪ\'lɪptɪk(ə)l/',
    chineseShort: '椭圆的', chineseExplanation: '表示“椭圆的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Rounded like an egg.',
    examples: [{ english: 'In this context, the word "elliptical" is used to mean rounded like an egg.', chinese: '在这个语境中，“elliptical”用于表达“椭圆的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tensile', term: 'tensile', normalizedTerm: 'tensile', partOfSpeech: ['adjective'], ipa: '/\'ten.saɪl/',
    chineseShort: '可拉长的；可伸长的；张力的', chineseExplanation: '表示“可拉长的；可伸长的；张力的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to tension.',
    examples: [{ english: 'In this context, the word "tensile" is used to mean of or relating to tension.', chinese: '在这个语境中，“tensile”用于表达“可拉长的；可伸长的；张力的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'avail', term: 'avail', normalizedTerm: 'avail', partOfSpeech: ['verb', 'noun'], ipa: '/ə\'veɪl/',
    chineseShort: '有用；有利', chineseExplanation: '表示“有用；有利”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Use to one\'s advantage.',
    examples: [{ english: 'In this context, the word "avail" is used to mean use to one\'s advantage.', chinese: '在这个语境中，“avail”用于表达“有用；有利”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'blond', term: 'blond', normalizedTerm: 'blond', partOfSpeech: ['adjective', 'noun'], ipa: '/blɑnd/',
    chineseShort: '金发的', chineseExplanation: '表示“金发的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Being or having light colored skin and hair and usually blue or grey eyes.',
    examples: [{ english: 'In this context, the word "blond" is used to mean being or having light colored skin and hair and usually blue or grey eyes.', chinese: '在这个语境中，“blond”用于表达“金发的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'blouse', term: 'blouse', normalizedTerm: 'blouse', partOfSpeech: ['noun'], ipa: '/blaʊs/',
    chineseShort: '宽松的上衣', chineseExplanation: '表示“宽松的上衣”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A top worn by women.',
    examples: [{ english: 'In this context, the word "blouse" is used to mean a top worn by women.', chinese: '在这个语境中，“blouse”用于表达“宽松的上衣”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bypass', term: 'bypass', normalizedTerm: 'bypass', partOfSpeech: ['noun', 'verb'], ipa: '/\'baɪ.pæs/',
    chineseShort: '旁路', chineseExplanation: '表示“旁路”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A surgically created shunt (usually around a damaged part).',
    examples: [{ english: 'In this context, the word "bypass" is used to mean a surgically created shunt (usually around a damaged part).', chinese: '在这个语境中，“bypass”用于表达“旁路”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cannon', term: 'cannon', normalizedTerm: 'cannon', partOfSpeech: ['noun', 'verb'], ipa: '/\'kænən/',
    chineseShort: '大炮；加农炮', chineseExplanation: '表示“大炮；加农炮”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A large artillery gun that is usually on wheels.',
    examples: [{ english: 'In this context, the word "cannon" is used to mean a large artillery gun that is usually on wheels.', chinese: '在这个语境中，“cannon”用于表达“大炮；加农炮”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'conqueror', term: 'conqueror', normalizedTerm: 'conqueror', partOfSpeech: ['noun'], ipa: '/\'kɑŋkərər/',
    chineseShort: '征服者；胜利者', chineseExplanation: '表示“征服者；胜利者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone who is victorious by force of arms.',
    examples: [{ english: 'In this context, the word "conqueror" is used to mean someone who is victorious by force of arms.', chinese: '在这个语境中，“conqueror”用于表达“征服者；胜利者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'distil', term: 'distil', normalizedTerm: 'distil', partOfSpeech: ['verb'], ipa: '/dɪˈstɪl/',
    chineseShort: '滴下；渗出', chineseExplanation: '表示“滴下；渗出”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Undergo condensation; change from a gaseous to a liquid state and fall in drops.',
    examples: [{ english: 'In this context, the word "distil" is used to mean undergo condensation; change from a gaseous to a liquid state and fall in drops.', chinese: '在这个语境中，“distil”用于表达“滴下；渗出”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elastic', term: 'elastic', normalizedTerm: 'elastic', partOfSpeech: ['noun', 'adjective'], ipa: '/ɪ\'læstɪk/',
    chineseShort: '松紧带；橡皮筋', chineseExplanation: '表示“松紧带；橡皮筋”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A fabric made of yarns containing an elastic material.',
    examples: [{ english: 'In this context, the word "elastic" is used to mean a fabric made of yarns containing an elastic material.', chinese: '在这个语境中，“elastic”用于表达“松紧带；橡皮筋”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'embark', term: 'embark', normalizedTerm: 'embark', partOfSpeech: ['verb'], ipa: '/ɪm\'bɑrk/',
    chineseShort: '乘船；着手；从事', chineseExplanation: '表示“乘船；着手；从事”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Go on board.',
    examples: [{ english: 'In this context, the word "embark" is used to mean go on board.', chinese: '在这个语境中，“embark”用于表达“乘船；着手；从事”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flank', term: 'flank', normalizedTerm: 'flank', partOfSpeech: ['noun', 'verb'], ipa: '/flæŋk/',
    chineseShort: '侧面；侧腹；胁', chineseExplanation: '表示“侧面；侧腹；胁”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The side of military or naval formation.',
    examples: [{ english: 'In this context, the word "flank" is used to mean the side of military or naval formation.', chinese: '在这个语境中，“flank”用于表达“侧面；侧腹；胁”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'headmaster', term: 'headmaster', normalizedTerm: 'headmaster', partOfSpeech: ['noun'], ipa: '/\'hed.mæstər/',
    chineseShort: '(中小学)校长；监工', chineseExplanation: '表示“(中小学)校长；监工”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Presiding officer of a school.',
    examples: [{ english: 'In this context, the word "headmaster" is used to mean presiding officer of a school.', chinese: '在这个语境中，“headmaster”用于表达“(中小学)校长；监工”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'henceforth', term: 'henceforth', normalizedTerm: 'henceforth', partOfSpeech: ['adverb'], ipa: '/hens\'fɔrθ/',
    chineseShort: '自此以后；今后', chineseExplanation: '表示以“自此以后；今后”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'From this time forth; from now on.',
    examples: [{ english: 'In this context, the word "henceforth" is used to mean from this time forth; from now on.', chinese: '在这个语境中，“henceforth”用于表达“自此以后；今后”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hound', term: 'hound', normalizedTerm: 'hound', partOfSpeech: ['noun', 'verb'], ipa: '/haʊnd/',
    chineseShort: '猎犬', chineseExplanation: '表示“猎犬”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any of several breeds of dog used for hunting typically having large drooping ears.',
    examples: [{ english: 'In this context, the word "hound" is used to mean any of several breeds of dog used for hunting typically having large drooping ears.', chinese: '在这个语境中，“hound”用于表达“猎犬”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'incline', term: 'incline', normalizedTerm: 'incline', partOfSpeech: ['noun', 'verb'], ipa: '/\'ɪn.klaɪn/',
    chineseShort: '倾斜；斜坡；斜面', chineseExplanation: '表示“倾斜；斜坡；斜面”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Bend or turn (one\'s ear) towards a speaker in order to listen well.',
    examples: [{ english: 'In this context, the word "incline" is used to mean bend or turn (one\'s ear) towards a speaker in order to listen well.', chinese: '在这个语境中，“incline”用于表达“倾斜；斜坡；斜面”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'liquor', term: 'liquor', normalizedTerm: 'liquor', partOfSpeech: ['noun', 'verb'], ipa: '/\'lɪkə(r)/',
    chineseShort: '酒；液体；汁', chineseExplanation: '表示“酒；液体；汁”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An alcoholic beverage that is distilled rather than fermented.',
    examples: [{ english: 'In this context, the word "liquor" is used to mean an alcoholic beverage that is distilled rather than fermented.', chinese: '在这个语境中，“liquor”用于表达“酒；液体；汁”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'masculine', term: 'masculine', normalizedTerm: 'masculine', partOfSpeech: ['noun', 'adjective'], ipa: '/\'mæskjəlin/',
    chineseShort: '阳性；男性', chineseExplanation: '表示“阳性；男性”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A gender that refers chiefly (but not exclusively) to males or to objects classified as male.',
    examples: [{ english: 'In this context, the word "masculine" is used to mean a gender that refers chiefly (but not exclusively) to males or to objects classified as male.', chinese: '在这个语境中，“masculine”用于表达“阳性；男性”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'mobilize', term: 'mobilize', normalizedTerm: 'mobilize', partOfSpeech: ['verb'], ipa: '/\'moʊb(ə)l.aɪz/',
    chineseShort: '动员；调动；使流通', chineseExplanation: '表示“动员；调动；使流通”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Make ready for action or use.',
    examples: [{ english: 'In this context, the word "mobilize" is used to mean make ready for action or use.', chinese: '在这个语境中，“mobilize”用于表达“动员；调动；使流通”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'necessitate', term: 'necessitate', normalizedTerm: 'necessitate', partOfSpeech: ['verb'], ipa: '/nə\'sesɪ.teɪt/',
    chineseShort: '迫使；使成为必需；需要', chineseExplanation: '表示“迫使；使成为必需；需要”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Require as useful, just, or proper.',
    examples: [{ english: 'In this context, the word "necessitate" is used to mean require as useful, just, or proper.', chinese: '在这个语境中，“necessitate”用于表达“迫使；使成为必需；需要”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'pastime', term: 'pastime', normalizedTerm: 'pastime', partOfSpeech: ['noun'], ipa: '/\'pæs.taɪm/',
    chineseShort: '消遣；娱乐；游戏', chineseExplanation: '表示“消遣；娱乐；游戏”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A diversion that occupies one\'s time and thoughts (usually pleasantly).',
    examples: [{ english: 'In this context, the word "pastime" is used to mean a diversion that occupies one\'s time and thoughts (usually pleasantly).', chinese: '在这个语境中，“pastime”用于表达“消遣；娱乐；游戏”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rouse', term: 'rouse', normalizedTerm: 'rouse', partOfSpeech: ['noun', 'verb'], ipa: '/raʊz/',
    chineseShort: '觉醒；奋起；干杯', chineseExplanation: '表示“觉醒；奋起；干杯”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Become active.',
    examples: [{ english: 'In this context, the word "rouse" is used to mean become active.', chinese: '在这个语境中，“rouse”用于表达“觉醒；奋起；干杯”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sly', term: 'sly', normalizedTerm: 'sly', partOfSpeech: ['adjective'], ipa: '/slaɪ/',
    chineseShort: '狡猾的；诡密的；俏皮的', chineseExplanation: '表示“狡猾的；诡密的；俏皮的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Marked by skill in deception.',
    examples: [{ english: 'In this context, the word "sly" is used to mean marked by skill in deception.', chinese: '在这个语境中，“sly”用于表达“狡猾的；诡密的；俏皮的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sportsman', term: 'sportsman', normalizedTerm: 'sportsman', partOfSpeech: ['noun'], ipa: '/\'spɔrtsmən/',
    chineseShort: '运动员；冒险家', chineseExplanation: '表示“运动员；冒险家”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone who engages in sports.',
    examples: [{ english: 'In this context, the word "sportsman" is used to mean someone who engages in sports.', chinese: '在这个语境中，“sportsman”用于表达“运动员；冒险家”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'steward', term: 'steward', normalizedTerm: 'steward', partOfSpeech: ['noun'], ipa: '/\'stuərd/',
    chineseShort: '管理人；招待员；管家', chineseExplanation: '表示“管理人；招待员；管家”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone who manages property or other affairs for someone else.',
    examples: [{ english: 'In this context, the word "steward" is used to mean someone who manages property or other affairs for someone else.', chinese: '在这个语境中，“steward”用于表达“管理人；招待员；管家”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'triple', term: 'triple', normalizedTerm: 'triple', partOfSpeech: ['noun', 'adjective'], ipa: '/\'trɪp(ə)l/',
    chineseShort: '三倍数；三个一组', chineseExplanation: '表示“三倍数；三个一组”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A base hit at which the batter stops safely at third base.',
    examples: [{ english: 'In this context, the word "triple" is used to mean a base hit at which the batter stops safely at third base.', chinese: '在这个语境中，“triple”用于表达“三倍数；三个一组”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'twilight', term: 'twilight', normalizedTerm: 'twilight', partOfSpeech: ['noun', 'adjective'], ipa: '/ˈtwaɪˌlaɪt/',
    chineseShort: '暮光；曙光；黎明', chineseExplanation: '表示“暮光；曙光；黎明”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The time of day immediately following sunset.',
    examples: [{ english: 'In this context, the word "twilight" is used to mean the time of day immediately following sunset.', chinese: '在这个语境中，“twilight”用于表达“暮光；曙光；黎明”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'utmost', term: 'utmost', normalizedTerm: 'utmost', partOfSpeech: ['noun', 'adjective'], ipa: '/\'ʌt.moʊst/',
    chineseShort: '极限；最大限度；极度', chineseExplanation: '表示“极限；最大限度；极度”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The greatest possible degree.',
    examples: [{ english: 'In this context, the word "utmost" is used to mean the greatest possible degree.', chinese: '在这个语境中，“utmost”用于表达“极限；最大限度；极度”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'velvet', term: 'velvet', normalizedTerm: 'velvet', partOfSpeech: ['noun', 'adjective'], ipa: '/\'velvət/',
    chineseShort: '天鹅绒', chineseExplanation: '表示“天鹅绒”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A silky densely piled fabric with a plain back.',
    examples: [{ english: 'In this context, the word "velvet" is used to mean a silky densely piled fabric with a plain back.', chinese: '在这个语境中，“velvet”用于表达“天鹅绒”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wag', term: 'wag', normalizedTerm: 'wag', partOfSpeech: ['verb', 'noun'], ipa: '/wæɡ/',
    chineseShort: '摇摆；摇动；饶舌', chineseExplanation: '表示“摇摆；摇动；饶舌”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Move from side to side.',
    examples: [{ english: 'In this context, the word "wag" is used to mean move from side to side.', chinese: '在这个语境中，“wag”用于表达“摇摆；摇动；饶舌”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wedge', term: 'wedge', normalizedTerm: 'wedge', partOfSpeech: ['noun', 'verb'], ipa: '/wedʒ/',
    chineseShort: '楔子；楔形物；起因', chineseExplanation: '表示“楔子；楔形物；起因”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any shape that is triangular in cross section.',
    examples: [{ english: 'In this context, the word "wedge" is used to mean any shape that is triangular in cross section.', chinese: '在这个语境中，“wedge”用于表达“楔子；楔形物；起因”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'whirl', term: 'whirl', normalizedTerm: 'whirl', partOfSpeech: ['noun', 'verb'], ipa: '/hwɜrl/',
    chineseShort: '回旋；旋转；急走', chineseExplanation: '表示“回旋；旋转；急走”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Confused movement.',
    examples: [{ english: 'In this context, the word "whirl" is used to mean confused movement.', chinese: '在这个语境中，“whirl”用于表达“回旋；旋转；急走”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wrestle', term: 'wrestle', normalizedTerm: 'wrestle', partOfSpeech: ['noun', 'verb'], ipa: '/\'res(ə)l/',
    chineseShort: '摔跤；角力；扭斗', chineseExplanation: '表示“摔跤；角力；扭斗”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of engaging in close hand-to-hand combat.',
    examples: [{ english: 'In this context, the word "wrestle" is used to mean the act of engaging in close hand-to-hand combat.', chinese: '在这个语境中，“wrestle”用于表达“摔跤；角力；扭斗”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'alien', term: 'alien', normalizedTerm: 'alien', partOfSpeech: ['noun', 'adjective'], ipa: '/\'eɪliən/',
    chineseShort: '外国人；外侨', chineseExplanation: '表示“外国人；外侨”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Transfer property or ownership.',
    examples: [{ english: 'In this context, the word "alien" is used to mean transfer property or ownership.', chinese: '在这个语境中，“alien”用于表达“外国人；外侨”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'prototype', term: 'prototype', normalizedTerm: 'prototype', partOfSpeech: ['noun'], ipa: '/\'proʊtə.taɪp/',
    chineseShort: '原型', chineseExplanation: '表示“原型”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A standard or typical example.',
    examples: [{ english: 'In this context, the word "prototype" is used to mean a standard or typical example.', chinese: '在这个语境中，“prototype”用于表达“原型”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'subscribe', term: 'subscribe', normalizedTerm: 'subscribe', partOfSpeech: ['verb'], ipa: '/səb\'skraɪb/',
    chineseShort: '捐献；签署', chineseExplanation: '表示“捐献；签署”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Offer to buy, as of stocks and shares.',
    examples: [{ english: 'In this context, the word "subscribe" is used to mean offer to buy, as of stocks and shares.', chinese: '在这个语境中，“subscribe”用于表达“捐献；签署”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'miser', term: 'miser', normalizedTerm: 'miser', partOfSpeech: ['noun'], ipa: '/\'maɪzər/',
    chineseShort: '守财奴；吝啬鬼；(石油工程上用的)锥钻头', chineseExplanation: '表示“守财奴；吝啬鬼；(石油工程上用的)锥钻头”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A stingy hoarder of money and possessions (often living miserably).',
    examples: [{ english: 'In this context, the word "miser" is used to mean a stingy hoarder of money and possessions (often living miserably).', chinese: '在这个语境中，“miser”用于表达“守财奴；吝啬鬼；(石油工程上用的)锥钻头”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'motel', term: 'motel', normalizedTerm: 'motel', partOfSpeech: ['noun'], ipa: '/məu\'tel/',
    chineseShort: '汽车旅馆', chineseExplanation: '表示“汽车旅馆”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A motor hotel.',
    examples: [{ english: 'In this context, the word "motel" is used to mean a motor hotel.', chinese: '在这个语境中，“motel”用于表达“汽车旅馆”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fertile', term: 'fertile', normalizedTerm: 'fertile', partOfSpeech: ['adjective'], ipa: '/\'fɜrt(ə)l/',
    chineseShort: '可繁殖的；肥沃的；生产多的', chineseExplanation: '表示“可繁殖的；肥沃的；生产多的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Capable of reproducing.',
    examples: [{ english: 'In this context, the word "fertile" is used to mean capable of reproducing.', chinese: '在这个语境中，“fertile”用于表达“可繁殖的；肥沃的；生产多的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'heir', term: 'heir', normalizedTerm: 'heir', partOfSpeech: ['noun'], ipa: '/er/',
    chineseShort: '继承人；嗣子；后嗣', chineseExplanation: '表示“继承人；嗣子；后嗣”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person who is entitled by law or by the terms of a will to inherit the estate of another.',
    examples: [{ english: 'In this context, the word "heir" is used to mean a person who is entitled by law or by the terms of a will to inherit the estate of another.', chinese: '在这个语境中，“heir”用于表达“继承人；嗣子；后嗣”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intermittent', term: 'intermittent', normalizedTerm: 'intermittent', partOfSpeech: ['adjective'], ipa: '/.ɪntər\'mɪt(ə)nt/',
    chineseShort: '间歇的；断断续续的', chineseExplanation: '表示“间歇的；断断续续的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Stopping and starting at irregular intervals.',
    examples: [{ english: 'In this context, the word "intermittent" is used to mean stopping and starting at irregular intervals.', chinese: '在这个语境中，“intermittent”用于表达“间歇的；断断续续的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'jealousy', term: 'jealousy', normalizedTerm: 'jealousy', partOfSpeech: ['noun'], ipa: '/\'dʒeləsi/',
    chineseShort: '妒忌；猜忌；羡慕', chineseExplanation: '表示“妒忌；猜忌；羡慕”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A feeling of jealous envy (especially of a rival).',
    examples: [{ english: 'In this context, the word "jealousy" is used to mean a feeling of jealous envy (especially of a rival).', chinese: '在这个语境中，“jealousy”用于表达“妒忌；猜忌；羡慕”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'discourse', term: 'discourse', normalizedTerm: 'discourse', partOfSpeech: ['noun', 'verb'], ipa: '/\'dɪs.kɔrs/',
    chineseShort: '谈话；演讲', chineseExplanation: '表示“谈话；演讲”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Extended verbal expression in speech or writing.',
    examples: [{ english: 'In this context, the word "discourse" is used to mean extended verbal expression in speech or writing.', chinese: '在这个语境中，“discourse”用于表达“谈话；演讲”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'restless', term: 'restless', normalizedTerm: 'restless', partOfSpeech: ['adjective'], ipa: '/\'res(t)ləs/',
    chineseShort: '不安静的；慌张的；休息不充分的', chineseExplanation: '表示“不安静的；慌张的；休息不充分的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Worried and uneasy.',
    examples: [{ english: 'In this context, the word "restless" is used to mean worried and uneasy.', chinese: '在这个语境中，“restless”用于表达“不安静的；慌张的；休息不充分的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cradle', term: 'cradle', normalizedTerm: 'cradle', partOfSpeech: ['noun', 'verb'], ipa: '/\'kreɪd(ə)l/',
    chineseShort: '摇篮；发祥地；孩提时代', chineseExplanation: '表示“摇篮；发祥地；孩提时代”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A baby bed with sides and rockers.',
    examples: [{ english: 'In this context, the word "cradle" is used to mean a baby bed with sides and rockers.', chinese: '在这个语境中，“cradle”用于表达“摇篮；发祥地；孩提时代”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'canvas', term: 'canvas', normalizedTerm: 'canvas', partOfSpeech: ['noun'], ipa: '/ˈkænvəs/',
    chineseShort: '帆布；画布；油画', chineseExplanation: '表示“帆布；画布；油画”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A heavy, closely woven fabric (used for clothing or chairs or sails or tents).',
    examples: [{ english: 'In this context, the word "canvas" is used to mean a heavy, closely woven fabric (used for clothing or chairs or sails or tents).', chinese: '在这个语境中，“canvas”用于表达“帆布；画布；油画”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'clash', term: 'clash', normalizedTerm: 'clash', partOfSpeech: ['noun', 'verb'], ipa: '/klæʃ/',
    chineseShort: '冲突；撞击声；抵触', chineseExplanation: '表示“冲突；撞击声；抵触”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A state of conflict between persons.',
    examples: [{ english: 'In this context, the word "clash" is used to mean a state of conflict between persons.', chinese: '在这个语境中，“clash”用于表达“冲突；撞击声；抵触”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'criterion', term: 'criterion', normalizedTerm: 'criterion', partOfSpeech: ['noun'], ipa: '/kraɪ\'tɪriən/',
    chineseShort: '标准；准则；规范', chineseExplanation: '表示“标准；准则；规范”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The ideal in terms of which something can be judged.',
    examples: [{ english: 'In this context, the word "criterion" is used to mean the ideal in terms of which something can be judged.', chinese: '在这个语境中，“criterion”用于表达“标准；准则；规范”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'specification', term: 'specification', normalizedTerm: 'specification', partOfSpeech: ['noun'], ipa: '/.spesɪfɪ\'keɪʃ(ə)n/',
    chineseShort: '规格；详述；详细说明书', chineseExplanation: '表示“规格；详述；详细说明书”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A detailed description of design criteria for a piece of work.',
    examples: [{ english: 'In this context, the word "specification" is used to mean a detailed description of design criteria for a piece of work.', chinese: '在这个语境中，“specification”用于表达“规格；详述；详细说明书”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'degenerate', term: 'degenerate', normalizedTerm: 'degenerate', partOfSpeech: ['adjective', 'verb'], ipa: '/dɪˈdʒenəreɪt/',
    chineseShort: '堕落的', chineseExplanation: '表示“堕落的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Unrestrained by convention or morality.',
    examples: [{ english: 'In this context, the word "degenerate" is used to mean unrestrained by convention or morality.', chinese: '在这个语境中，“degenerate”用于表达“堕落的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'wrath', term: 'wrath', normalizedTerm: 'wrath', partOfSpeech: ['noun'], ipa: '/ræθ/',
    chineseShort: '愤怒；激怒；愤怒的举动', chineseExplanation: '表示“愤怒；激怒；愤怒的举动”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Intense anger (usually on an epic scale).',
    examples: [{ english: 'In this context, the word "wrath" is used to mean intense anger (usually on an epic scale).', chinese: '在这个语境中，“wrath”用于表达“愤怒；激怒；愤怒的举动”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'imaginative', term: 'imaginative', normalizedTerm: 'imaginative', partOfSpeech: ['adjective'], ipa: '/ɪ\'mædʒɪnətɪv/',
    chineseShort: '想像的；虚构的', chineseExplanation: '表示“想像的；虚构的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: '(used of persons or artifacts) marked by independence and creativity in thought or action.',
    examples: [{ english: 'In this context, the word "imaginative" is used to mean (used of persons or artifacts) marked by independence and creativity in thought or action.', chinese: '在这个语境中，“imaginative”用于表达“想像的；虚构的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hasten', term: 'hasten', normalizedTerm: 'hasten', partOfSpeech: ['verb'], ipa: '/\'heɪs(ə)n/',
    chineseShort: '催促；加紧', chineseExplanation: '表示“催促；加紧”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Act or move at high speed.',
    examples: [{ english: 'In this context, the word "hasten" is used to mean act or move at high speed.', chinese: '在这个语境中，“hasten”用于表达“催促；加紧”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intervene', term: 'intervene', normalizedTerm: 'intervene', partOfSpeech: ['verb'], ipa: '/.ɪntər\'vin/',
    chineseShort: '插入；调停；干涉', chineseExplanation: '表示“插入；调停；干涉”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Get involved, so as to alter or hinder an action, or through force or threat of force.',
    examples: [{ english: 'In this context, the word "intervene" is used to mean get involved, so as to alter or hinder an action, or through force or threat of force.', chinese: '在这个语境中，“intervene”用于表达“插入；调停；干涉”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'assassinate', term: 'assassinate', normalizedTerm: 'assassinate', partOfSpeech: ['verb'], ipa: '/ə\'sæsɪ.neɪt/',
    chineseShort: '暗杀；行刺', chineseExplanation: '表示“暗杀；行刺”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Murder; especially of socially prominent persons.',
    examples: [{ english: 'In this context, the word "assassinate" is used to mean murder; especially of socially prominent persons.', chinese: '在这个语境中，“assassinate”用于表达“暗杀；行刺”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bandit', term: 'bandit', normalizedTerm: 'bandit', partOfSpeech: ['noun'], ipa: '/\'bændɪt/',
    chineseShort: '强盗', chineseExplanation: '表示“强盗”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An armed thief who is (usually) a member of a band.',
    examples: [{ english: 'In this context, the word "bandit" is used to mean an armed thief who is (usually) a member of a band.', chinese: '在这个语境中，“bandit”用于表达“强盗”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bazaar', term: 'bazaar', normalizedTerm: 'bazaar', partOfSpeech: ['noun'], ipa: '/bə\'zɑr/',
    chineseShort: '集市；市场；义卖市场', chineseExplanation: '表示“集市；市场；义卖市场”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A shop where a variety of goods are sold.',
    examples: [{ english: 'In this context, the word "bazaar" is used to mean a shop where a variety of goods are sold.', chinese: '在这个语境中，“bazaar”用于表达“集市；市场；义卖市场”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bough', term: 'bough', normalizedTerm: 'bough', partOfSpeech: ['noun'], ipa: '/baʊ/',
    chineseShort: '大树枝', chineseExplanation: '表示“大树枝”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any of the larger branches of a tree.',
    examples: [{ english: 'In this context, the word "bough" is used to mean any of the larger branches of a tree.', chinese: '在这个语境中，“bough”用于表达“大树枝”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bourgeois', term: 'bourgeois', normalizedTerm: 'bourgeois', partOfSpeech: ['noun', 'adjective'], ipa: '/bʊr\'ʒwɑ/',
    chineseShort: '中产阶级分子；商人；资产阶级', chineseExplanation: '表示“中产阶级分子；商人；资产阶级”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A member of the middle class.',
    examples: [{ english: 'In this context, the word "bourgeois" is used to mean a member of the middle class.', chinese: '在这个语境中，“bourgeois”用于表达“中产阶级分子；商人；资产阶级”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bristle', term: 'bristle', normalizedTerm: 'bristle', partOfSpeech: ['noun', 'verb'], ipa: '/\'brɪs(ə)l/',
    chineseShort: '刚毛；猪鬃', chineseExplanation: '表示“刚毛；猪鬃”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A stiff fiber (coarse hair or filament); natural or synthetic.',
    examples: [{ english: 'In this context, the word "bristle" is used to mean a stiff fiber (coarse hair or filament); natural or synthetic.', chinese: '在这个语境中，“bristle”用于表达“刚毛；猪鬃”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'brute', term: 'brute', normalizedTerm: 'brute', partOfSpeech: ['noun', 'adjective'], ipa: '/brut/',
    chineseShort: '畜生；残忍或好色之人', chineseExplanation: '表示“畜生；残忍或好色之人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A cruelly rapacious person.',
    examples: [{ english: 'In this context, the word "brute" is used to mean a cruelly rapacious person.', chinese: '在这个语境中，“brute”用于表达“畜生；残忍或好色之人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'compatriot', term: 'compatriot', normalizedTerm: 'compatriot', partOfSpeech: ['noun', 'adjective'], ipa: '/kəm\'peɪtriət/',
    chineseShort: '同国人', chineseExplanation: '表示“同国人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person from your own country.',
    examples: [{ english: 'In this context, the word "compatriot" is used to mean a person from your own country.', chinese: '在这个语境中，“compatriot”用于表达“同国人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'consul', term: 'consul', normalizedTerm: 'consul', partOfSpeech: ['noun'], ipa: '/\'kɑns(ə)l/',
    chineseShort: '领事；执政官', chineseExplanation: '表示“领事；执政官”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A diplomat appointed by a government to protect its commercial interests and help its citizens in a foreign country.',
    examples: [{ english: 'In this context, the word "consul" is used to mean a diplomat appointed by a government to protect its commercial interests and help its citizens in a foreign country.', chinese: '在这个语境中，“consul”用于表达“领事；执政官”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'credential', term: 'credential', normalizedTerm: 'credential', partOfSpeech: ['noun'], ipa: '/krə\'denʃl/',
    chineseShort: '国书；凭据；证明书', chineseExplanation: '表示“国书；凭据；证明书”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A document attesting to the truth of certain stated facts.',
    examples: [{ english: 'In this context, the word "credential" is used to mean a document attesting to the truth of certain stated facts.', chinese: '在这个语境中，“credential”用于表达“国书；凭据；证明书”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'embroidery', term: 'embroidery', normalizedTerm: 'embroidery', partOfSpeech: ['noun'], ipa: '/ɪm\'brɔɪdəri/',
    chineseShort: '刺绣品；粉饰；刺绣', chineseExplanation: '表示“刺绣品；粉饰；刺绣”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Decorative needlework.',
    examples: [{ english: 'In this context, the word "embroidery" is used to mean decorative needlework.', chinese: '在这个语境中，“embroidery”用于表达“刺绣品；粉饰；刺绣”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'excite', term: 'excite', normalizedTerm: 'excite', partOfSpeech: ['verb'], ipa: '/ɪk\'saɪt/',
    chineseShort: '刺激；使兴奋；激励', chineseExplanation: '表示“刺激；使兴奋；激励”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Arouse or elicit a feeling.',
    examples: [{ english: 'In this context, the word "excite" is used to mean arouse or elicit a feeling.', chinese: '在这个语境中，“excite”用于表达“刺激；使兴奋；激励”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'exclamation', term: 'exclamation', normalizedTerm: 'exclamation', partOfSpeech: ['noun'], ipa: '/.eksklə\'meɪʃ(ə)n/',
    chineseShort: '惊呼；激烈言词；惊叹词', chineseExplanation: '表示“惊呼；激烈言词；惊叹词”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An abrupt excited utterance.',
    examples: [{ english: 'In this context, the word "exclamation" is used to mean an abrupt excited utterance.', chinese: '在这个语境中，“exclamation”用于表达“惊呼；激烈言词；惊叹词”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'exploitation', term: 'exploitation', normalizedTerm: 'exploitation', partOfSpeech: ['noun'], ipa: '/.eksplɔɪ\'teɪʃ(ə)n/',
    chineseShort: '开发；开采；剥削', chineseExplanation: '表示“开发；开采；剥削”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of making some area of land or water more profitable or productive or useful.',
    examples: [{ english: 'In this context, the word "exploitation" is used to mean the act of making some area of land or water more profitable or productive or useful.', chinese: '在这个语境中，“exploitation”用于表达“开发；开采；剥削”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'fable', term: 'fable', normalizedTerm: 'fable', partOfSpeech: ['noun', 'verb'], ipa: '/\'feɪb(ə)l/',
    chineseShort: '寓言；神话；谎言', chineseExplanation: '表示“寓言；神话；谎言”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A short moral story (often with animal characters).',
    examples: [{ english: 'In this context, the word "fable" is used to mean a short moral story (often with animal characters).', chinese: '在这个语境中，“fable”用于表达“寓言；神话；谎言”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flannel', term: 'flannel', normalizedTerm: 'flannel', partOfSpeech: ['noun'], ipa: '/\'flæn(ə)l/',
    chineseShort: '法兰绒；法兰绒衣服', chineseExplanation: '表示“法兰绒；法兰绒衣服”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A soft light woolen fabric; used for clothing.',
    examples: [{ english: 'In this context, the word "flannel" is used to mean a soft light woolen fabric; used for clothing.', chinese: '在这个语境中，“flannel”用于表达“法兰绒；法兰绒衣服”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'gradient', term: 'gradient', normalizedTerm: 'gradient', partOfSpeech: ['noun', 'adjective'], ipa: '/\'ɡreɪdiənt/',
    chineseShort: '倾斜度；梯度；坡度', chineseExplanation: '表示“倾斜度；梯度；坡度”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A graded change in the magnitude of some physical quantity or dimension.',
    examples: [{ english: 'In this context, the word "gradient" is used to mean a graded change in the magnitude of some physical quantity or dimension.', chinese: '在这个语境中，“gradient”用于表达“倾斜度；梯度；坡度”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'groove', term: 'groove', normalizedTerm: 'groove', partOfSpeech: ['noun', 'verb'], ipa: '/ɡruv/',
    chineseShort: '凹槽；惯例；理想境况', chineseExplanation: '表示“凹槽；惯例；理想境况”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A long narrow furrow cut either by a natural process (such as erosion) or by a tool (as e.g. a groove in a phonograph record).',
    examples: [{ english: 'In this context, the word "groove" is used to mean a long narrow furrow cut either by a natural process (such as erosion) or by a tool (as e.g. a groove in a phonograph record).', chinese: '在这个语境中，“groove”用于表达“凹槽；惯例；理想境况”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'hassle', term: 'hassle', normalizedTerm: 'hassle', partOfSpeech: ['noun', 'verb'], ipa: '/\'hæs(ə)l/',
    chineseShort: '激烈而持久的争论', chineseExplanation: '表示“激烈而持久的争论”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Disorderly fighting.',
    examples: [{ english: 'In this context, the word "hassle" is used to mean disorderly fighting.', chinese: '在这个语境中，“hassle”用于表达“激烈而持久的争论”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'headlong', term: 'headlong', normalizedTerm: 'headlong', partOfSpeech: ['adjective', 'adverb'], ipa: '/\'hedlɒŋ/',
    chineseShort: '头向前的；仓猝而用力的；轻率的', chineseExplanation: '表示“头向前的；仓猝而用力的；轻率的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'With the head foremost.',
    examples: [{ english: 'In this context, the word "headlong" is used to mean with the head foremost.', chinese: '在这个语境中，“headlong”用于表达“头向前的；仓猝而用力的；轻率的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'humanitarian', term: 'humanitarian', normalizedTerm: 'humanitarian', partOfSpeech: ['noun', 'adjective'], ipa: '/hju.mænɪ\'teriən/',
    chineseShort: '人道主义者；博爱者；基督凡人论者', chineseExplanation: '表示“人道主义者；博爱者；基督凡人论者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Someone devoted to the promotion of human welfare and to social reforms.',
    examples: [{ english: 'In this context, the word "humanitarian" is used to mean someone devoted to the promotion of human welfare and to social reforms.', chinese: '在这个语境中，“humanitarian”用于表达“人道主义者；博爱者；基督凡人论者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'implore', term: 'implore', normalizedTerm: 'implore', partOfSpeech: ['verb'], ipa: '/ɪm\'plɔr/',
    chineseShort: '恳求；哀求', chineseExplanation: '表示“恳求；哀求”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Call upon in supplication; entreat.',
    examples: [{ english: 'In this context, the word "implore" is used to mean call upon in supplication; entreat.', chinese: '在这个语境中，“implore”用于表达“恳求；哀求”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'infamous', term: 'infamous', normalizedTerm: 'infamous', partOfSpeech: ['adjective'], ipa: '/\'ɪnfəməs/',
    chineseShort: '无耻的；不名誉的；声名狼藉的', chineseExplanation: '表示“无耻的；不名誉的；声名狼藉的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Known widely and usually unfavorably.',
    examples: [{ english: 'In this context, the word "infamous" is used to mean known widely and usually unfavorably.', chinese: '在这个语境中，“infamous”用于表达“无耻的；不名誉的；声名狼藉的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'jolly', term: 'jolly', normalizedTerm: 'jolly', partOfSpeech: ['adjective', 'verb'], ipa: '/\'dʒɑli/',
    chineseShort: '愉快的；高兴的；宜人的', chineseExplanation: '表示“愉快的；高兴的；宜人的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'A happy party.',
    examples: [{ english: 'In this context, the word "jolly" is used to mean a happy party.', chinese: '在这个语境中，“jolly”用于表达“愉快的；高兴的；宜人的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'majesty', term: 'majesty', normalizedTerm: 'majesty', partOfSpeech: ['noun'], ipa: '/\'mædʒəsti/',
    chineseShort: '最高权威；威严；王权', chineseExplanation: '表示“最高权威；威严；王权”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Impressiveness in scale or proportion.',
    examples: [{ english: 'In this context, the word "majesty" is used to mean impressiveness in scale or proportion.', chinese: '在这个语境中，“majesty”用于表达“最高权威；威严；王权”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'manoeuvre', term: 'manoeuvre', normalizedTerm: 'manoeuvre', partOfSpeech: ['noun', 'verb'], ipa: '/məˈnʊvər/',
    chineseShort: '调遣；演习；策略', chineseExplanation: '表示“调遣；演习；策略”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A plan for attaining a particular goal.',
    examples: [{ english: 'In this context, the word "manoeuvre" is used to mean a plan for attaining a particular goal.', chinese: '在这个语境中，“manoeuvre”用于表达“调遣；演习；策略”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'migrant', term: 'migrant', normalizedTerm: 'migrant', partOfSpeech: ['noun', 'adjective'], ipa: '/\'maɪɡrənt/',
    chineseShort: '候鸟；移居者', chineseExplanation: '表示“候鸟；移居者”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Traveler who moves from one region or country to another.',
    examples: [{ english: 'In this context, the word "migrant" is used to mean traveler who moves from one region or country to another.', chinese: '在这个语境中，“migrant”用于表达“候鸟；移居者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ornamental', term: 'ornamental', normalizedTerm: 'ornamental', partOfSpeech: ['noun', 'adjective'], ipa: '/.ɔrnə\'ment(ə)l/',
    chineseShort: '装饰物；观赏植物', chineseExplanation: '表示“装饰物；观赏植物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Any plant grown for its beauty or ornamental value.',
    examples: [{ english: 'In this context, the word "ornamental" is used to mean any plant grown for its beauty or ornamental value.', chinese: '在这个语境中，“ornamental”用于表达“装饰物；观赏植物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'predominantly', term: 'predominantly', normalizedTerm: 'predominantly', partOfSpeech: ['adverb'], ipa: '/prɪˈdɑmɪnəntli/',
    chineseShort: '主要地；显著地；大多数地', chineseExplanation: '表示以“主要地；显著地；大多数地”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'Much greater in number or influence.',
    examples: [{ english: 'In this context, the word "predominantly" is used to mean much greater in number or influence.', chinese: '在这个语境中，“predominantly”用于表达“主要地；显著地；大多数地”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'preside', term: 'preside', normalizedTerm: 'preside', partOfSpeech: ['verb'], ipa: '/.pri\'zaɪd/',
    chineseShort: '统辖；当主人；主持', chineseExplanation: '表示“统辖；当主人；主持”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Act as president.',
    examples: [{ english: 'In this context, the word "preside" is used to mean act as president.', chinese: '在这个语境中，“preside”用于表达“统辖；当主人；主持”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'provocative', term: 'provocative', normalizedTerm: 'provocative', partOfSpeech: ['adjective', 'noun'], ipa: '/prə\'vɑkətɪv/',
    chineseShort: '激发感情的；挑拨的；刺激的', chineseExplanation: '表示“激发感情的；挑拨的；刺激的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Serving or tending to provoke, excite, or stimulate; stimulating discussion or exciting controversy.',
    examples: [{ english: 'In this context, the word "provocative" is used to mean serving or tending to provoke, excite, or stimulate; stimulating discussion or exciting controversy.', chinese: '在这个语境中，“provocative”用于表达“激发感情的；挑拨的；刺激的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'requisite', term: 'requisite', normalizedTerm: 'requisite', partOfSpeech: ['noun', 'adjective'], ipa: '/\'rekwɪzɪt/',
    chineseShort: '必需品；要素；必要物品', chineseExplanation: '表示“必需品；要素；必要物品”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Anything indispensable.',
    examples: [{ english: 'In this context, the word "requisite" is used to mean anything indispensable.', chinese: '在这个语境中，“requisite”用于表达“必需品；要素；必要物品”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'resolute', term: 'resolute', normalizedTerm: 'resolute', partOfSpeech: ['noun', 'adjective'], ipa: '/\'rezəlut/',
    chineseShort: '果断的人', chineseExplanation: '表示“果断的人”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Firm in purpose or belief; characterized by firmness and determination.',
    examples: [{ english: 'In this context, the word "resolute" is used to mean firm in purpose or belief; characterized by firmness and determination.', chinese: '在这个语境中，“resolute”用于表达“果断的人”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sideways', term: 'sideways', normalizedTerm: 'sideways', partOfSpeech: ['adverb', 'adjective'], ipa: '/\'saɪd.weɪz/',
    chineseShort: '向旁边；向侧面地', chineseExplanation: '表示以“向旁边；向侧面地”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'With one side forward or to the front.',
    examples: [{ english: 'In this context, the word "sideways" is used to mean with one side forward or to the front.', chinese: '在这个语境中，“sideways”用于表达“向旁边；向侧面地”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'skeptical', term: 'skeptical', normalizedTerm: 'skeptical', partOfSpeech: ['adjective'], ipa: '/\'skeptɪkəl/',
    chineseShort: '怀疑论的；怀疑的；不可知论的', chineseExplanation: '表示“怀疑论的；怀疑的；不可知论的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Denying or questioning the tenets of especially a religion.',
    examples: [{ english: 'In this context, the word "skeptical" is used to mean denying or questioning the tenets of especially a religion.', chinese: '在这个语境中，“skeptical”用于表达“怀疑论的；怀疑的；不可知论的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'stony', term: 'stony', normalizedTerm: 'stony', partOfSpeech: ['adjective'], ipa: '/\'stoʊni/',
    chineseShort: '多石的；无情的', chineseExplanation: '表示“多石的；无情的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Abounding in rocks or stones.',
    examples: [{ english: 'In this context, the word "stony" is used to mean abounding in rocks or stones.', chinese: '在这个语境中，“stony”用于表达“多石的；无情的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'streamline', term: 'streamline', normalizedTerm: 'streamline', partOfSpeech: ['noun', 'verb'], ipa: '/\'strim.laɪn/',
    chineseShort: '流线；流线型', chineseExplanation: '表示“流线；流线型”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Contour economically or efficiently.',
    examples: [{ english: 'In this context, the word "streamline" is used to mean contour economically or efficiently.', chinese: '在这个语境中，“streamline”用于表达“流线；流线型”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic', 'Business'],
  },
  {
    id: 'subdivide', term: 'subdivide', normalizedTerm: 'subdivide', partOfSpeech: ['verb'], ipa: '/.sʌbdɪ\'vaɪd/',
    chineseShort: 'vt.vi. (把...)再分；(把...)细分', chineseExplanation: '表示“vt.vi. (把...)再分；(把...)细分”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Form into subdivisions.',
    examples: [{ english: 'In this context, the word "subdivide" is used to mean form into subdivisions.', chinese: '在这个语境中，“subdivide”用于表达“vt.vi. (把...)再分；(把...)细分”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'suffice', term: 'suffice', normalizedTerm: 'suffice', partOfSpeech: ['verb'], ipa: '/sə\'faɪs/',
    chineseShort: '足够；有能力', chineseExplanation: '表示“足够；有能力”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Be sufficient; be adequate, either in quality or quantity.',
    examples: [{ english: 'In this context, the word "suffice" is used to mean be sufficient; be adequate, either in quality or quantity.', chinese: '在这个语境中，“suffice”用于表达“足够；有能力”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'superficially', term: 'superficially', normalizedTerm: 'superficially', partOfSpeech: ['adverb'], ipa: '/ˈsupɚˈfɪʃəlɪ/',
    chineseShort: '表面；表面性；浅层', chineseExplanation: '表示以“表面；表面性；浅层”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'In a superficial manner.',
    examples: [{ english: 'In this context, the word "superficially" is used to mean in a superficial manner.', chinese: '在这个语境中，“superficially”用于表达“表面；表面性；浅层”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'synthesize', term: 'synthesize', normalizedTerm: 'synthesize', partOfSpeech: ['verb'], ipa: '/\'sɪnθə.saɪz/',
    chineseShort: '综合；合成', chineseExplanation: '表示“综合；合成”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Combine so as to form a more complex, product.',
    examples: [{ english: 'In this context, the word "synthesize" is used to mean combine so as to form a more complex, product.', chinese: '在这个语境中，“synthesize”用于表达“综合；合成”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'thrash', term: 'thrash', normalizedTerm: 'thrash', partOfSpeech: ['verb', 'noun'], ipa: '/θræʃ/',
    chineseShort: '打；使逆行；胜过', chineseExplanation: '表示“打；使逆行；胜过”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Give a thrashing to; beat hard.',
    examples: [{ english: 'In this context, the word "thrash" is used to mean give a thrashing to; beat hard.', chinese: '在这个语境中，“thrash”用于表达“打；使逆行；胜过”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tranquil', term: 'tranquil', normalizedTerm: 'tranquil', partOfSpeech: ['adjective'], ipa: '/ˈtræŋkwil/',
    chineseShort: '安静的', chineseExplanation: '表示“安静的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: '(of a body of water) free from disturbance by heavy waves.',
    examples: [{ english: 'In this context, the word "tranquil" is used to mean (of a body of water) free from disturbance by heavy waves.', chinese: '在这个语境中，“tranquil”用于表达“安静的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'tuck', term: 'tuck', normalizedTerm: 'tuck', partOfSpeech: ['noun', 'verb'], ipa: '/tʌk/',
    chineseShort: '缝褶；活力；鼓声', chineseExplanation: '表示“缝褶；活力；鼓声”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Eatables (especially sweets).',
    examples: [{ english: 'In this context, the word "tuck" is used to mean eatables (especially sweets).', chinese: '在这个语境中，“tuck”用于表达“缝褶；活力；鼓声”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'victorious', term: 'victorious', normalizedTerm: 'victorious', partOfSpeech: ['adjective'], ipa: '/vɪk\'tɔriəs/',
    chineseShort: '胜利的；得胜的；战胜的', chineseExplanation: '表示“胜利的；得胜的；战胜的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Having won.',
    examples: [{ english: 'In this context, the word "victorious" is used to mean having won.', chinese: '在这个语境中，“victorious”用于表达“胜利的；得胜的；战胜的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vocal', term: 'vocal', normalizedTerm: 'vocal', partOfSpeech: ['adjective', 'noun'], ipa: '/\'voʊk(ə)l/',
    chineseShort: '嗓音的；声音的；有声的', chineseExplanation: '表示“嗓音的；声音的；有声的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or designed for or using the singing voice.',
    examples: [{ english: 'In this context, the word "vocal" is used to mean relating to or designed for or using the singing voice.', chinese: '在这个语境中，“vocal”用于表达“嗓音的；声音的；有声的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'vicious', term: 'vicious', normalizedTerm: 'vicious', partOfSpeech: ['adjective'], ipa: '/\'vɪʃəs/',
    chineseShort: '邪恶的；堕落的；品性不端的', chineseExplanation: '表示“邪恶的；堕落的；品性不端的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: '(of persons or their actions) able or disposed to inflict pain or suffering.',
    examples: [{ english: 'In this context, the word "vicious" is used to mean (of persons or their actions) able or disposed to inflict pain or suffering.', chinese: '在这个语境中，“vicious”用于表达“邪恶的；堕落的；品性不端的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'odour', term: 'odour', normalizedTerm: 'odour', partOfSpeech: ['noun'], ipa: '/\'oʊdər/',
    chineseShort: '气味；臭气；香气', chineseExplanation: '表示“气味；臭气；香气”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The sensation that results when olfactory receptors in the nose are stimulated by particular chemicals in gaseous form.',
    examples: [{ english: 'In this context, the word "odour" is used to mean the sensation that results when olfactory receptors in the nose are stimulated by particular chemicals in gaseous form.', chinese: '在这个语境中，“odour”用于表达“气味；臭气；香气”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'token', term: 'token', normalizedTerm: 'token', partOfSpeech: ['noun', 'adjective'], ipa: '/\'toʊkən/',
    chineseShort: '表征；记号；代币', chineseExplanation: '表示“表征；记号；代币”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An individual instance of a type of symbol.',
    examples: [{ english: 'In this context, the word "token" is used to mean an individual instance of a type of symbol.', chinese: '在这个语境中，“token”用于表达“表征；记号；代币”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'layoff', term: 'layoff', normalizedTerm: 'layoff', partOfSpeech: ['noun'], ipa: '/\'leɪ.ɔf/',
    chineseShort: '临时解雇；操作停止；活动停止期间', chineseExplanation: '表示“临时解雇；操作停止；活动停止期间”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The act of laying off an employee or a work force.',
    examples: [{ english: 'In this context, the word "layoff" is used to mean the act of laying off an employee or a work force.', chinese: '在这个语境中，“layoff”用于表达“临时解雇；操作停止；活动停止期间”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'prudent', term: 'prudent', normalizedTerm: 'prudent', partOfSpeech: ['adjective'], ipa: '/\'prud(ə)nt/',
    chineseShort: '审慎的；三思而后行的；精明的', chineseExplanation: '表示“审慎的；三思而后行的；精明的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Careful and sensible; marked by sound judgment.',
    examples: [{ english: 'In this context, the word "prudent" is used to mean careful and sensible; marked by sound judgment.', chinese: '在这个语境中，“prudent”用于表达“审慎的；三思而后行的；精明的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'monetary', term: 'monetary', normalizedTerm: 'monetary', partOfSpeech: ['adjective'], ipa: '/\'mʌnə.teri/',
    chineseShort: '货币的；金钱的', chineseExplanation: '表示“货币的；金钱的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to or involving money.',
    examples: [{ english: 'In this context, the word "monetary" is used to mean relating to or involving money.', chinese: '在这个语境中，“monetary”用于表达“货币的；金钱的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'clinical', term: 'clinical', normalizedTerm: 'clinical', partOfSpeech: ['adjective'], ipa: '/\'klɪnɪk(ə)l/',
    chineseShort: '临床的；门诊部的', chineseExplanation: '表示“临床的；门诊部的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Relating to a clinic or conducted in or as if in a clinic and depending on direct observation of patients.',
    examples: [{ english: 'In this context, the word "clinical" is used to mean relating to a clinic or conducted in or as if in a clinic and depending on direct observation of patients.', chinese: '在这个语境中，“clinical”用于表达“临床的；门诊部的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'linguistic', term: 'linguistic', normalizedTerm: 'linguistic', partOfSpeech: ['adjective'], ipa: '/lɪŋ\'ɡwɪstɪk/',
    chineseShort: '语言的；语言学的', chineseExplanation: '表示“语言的；语言学的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Consisting of or related to language.',
    examples: [{ english: 'In this context, the word "linguistic" is used to mean consisting of or related to language.', chinese: '在这个语境中，“linguistic”用于表达“语言的；语言学的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'intriguing', term: 'intriguing', normalizedTerm: 'intriguing', partOfSpeech: ['adjective'], ipa: '/ɪn\'triɡɪŋ/',
    chineseShort: '吸引人的；有趣的', chineseExplanation: '表示“吸引人的；有趣的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Capable of arousing interest or curiosity.',
    examples: [{ english: 'In this context, the word "intriguing" is used to mean capable of arousing interest or curiosity.', chinese: '在这个语境中，“intriguing”用于表达“吸引人的；有趣的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bulk', term: 'bulk', normalizedTerm: 'bulk', partOfSpeech: ['noun', 'verb'], ipa: '/bʌlk/',
    chineseShort: '大小；体积；大块', chineseExplanation: '表示“大小；体积；大块”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The property of something that is great in magnitude.',
    examples: [{ english: 'In this context, the word "bulk" is used to mean the property of something that is great in magnitude.', chinese: '在这个语境中，“bulk”用于表达“大小；体积；大块”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'resemblance', term: 'resemblance', normalizedTerm: 'resemblance', partOfSpeech: ['noun'], ipa: '/rɪ\'zembləns/',
    chineseShort: '相似处；类似；肖像', chineseExplanation: '表示“相似处；类似；肖像”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Similarity in appearance or external or superficial details.',
    examples: [{ english: 'In this context, the word "resemblance" is used to mean similarity in appearance or external or superficial details.', chinese: '在这个语境中，“resemblance”用于表达“相似处；类似；肖像”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'perpetual', term: 'perpetual', normalizedTerm: 'perpetual', partOfSpeech: ['adjective'], ipa: '/pər\'petʃuəl/',
    chineseShort: '永久的；不断的；无期限的', chineseExplanation: '表示“永久的；不断的；无期限的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Continuing forever or indefinitely.',
    examples: [{ english: 'In this context, the word "perpetual" is used to mean continuing forever or indefinitely.', chinese: '在这个语境中，“perpetual”用于表达“永久的；不断的；无期限的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'devise', term: 'devise', normalizedTerm: 'devise', partOfSpeech: ['verb', 'noun'], ipa: '/dɪˈvaɪz/',
    chineseShort: '设计；发明；图谋', chineseExplanation: '表示“设计；发明；图谋”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Give by will, especially real property.',
    examples: [{ english: 'In this context, the word "devise" is used to mean give by will, especially real property.', chinese: '在这个语境中，“devise”用于表达“设计；发明；图谋”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'indiscriminately', term: 'indiscriminately', normalizedTerm: 'indiscriminately', partOfSpeech: ['adverb'], ipa: '/ˌɪndɪ\'skrɪmɪnətlɪ/',
    chineseShort: '无差别；任意地；不分青红皂白地', chineseExplanation: '表示以“无差别；任意地；不分青红皂白地”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'In a random manner.',
    examples: [{ english: 'In this context, the word "indiscriminately" is used to mean in a random manner.', chinese: '在这个语境中，“indiscriminately”用于表达“无差别；任意地；不分青红皂白地”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'notwithstanding', term: 'notwithstanding', normalizedTerm: 'notwithstanding', partOfSpeech: ['adverb'], ipa: '/.nɑtwɪð\'stændɪŋ/',
    chineseShort: '虽然；尽管', chineseExplanation: '表示以“虽然；尽管”的方式、程度或关系发生，常见于较正式或书面表达。', englishDefinition: 'Despite anything to the contrary (usually following a concession).',
    examples: [{ english: 'In this context, the word "notwithstanding" is used to mean despite anything to the contrary (usually following a concession).', chinese: '在这个语境中，“notwithstanding”用于表达“虽然；尽管”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'rein', term: 'rein', normalizedTerm: 'rein', partOfSpeech: ['noun', 'verb'], ipa: '/reɪn/',
    chineseShort: '缰绳；统治；支配', chineseExplanation: '表示“缰绳；统治；支配”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'One of a pair of long straps (usually connected to the bit or the headpiece) used to control a horse.',
    examples: [{ english: 'In this context, the word "rein" is used to mean one of a pair of long straps (usually connected to the bit or the headpiece) used to control a horse.', chinese: '在这个语境中，“rein”用于表达“缰绳；统治；支配”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sham', term: 'sham', normalizedTerm: 'sham', partOfSpeech: ['noun', 'adjective'], ipa: '/ʃæm/',
    chineseShort: '假；赝品；骗子', chineseExplanation: '表示“假；赝品；骗子”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Something that is a counterfeit; not what it seems to be.',
    examples: [{ english: 'In this context, the word "sham" is used to mean something that is a counterfeit; not what it seems to be.', chinese: '在这个语境中，“sham”用于表达“假；赝品；骗子”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'sift', term: 'sift', normalizedTerm: 'sift', partOfSpeech: ['verb'], ipa: '/sɪft/',
    chineseShort: '筛；过滤；撒', chineseExplanation: '表示“筛；过滤；撒”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Move as if through a sieve.',
    examples: [{ english: 'In this context, the word "sift" is used to mean move as if through a sieve.', chinese: '在这个语境中，“sift”用于表达“筛；过滤；撒”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'snob', term: 'snob', normalizedTerm: 'snob', partOfSpeech: ['noun'], ipa: '/snɑb/',
    chineseShort: '势利的人；假内行', chineseExplanation: '表示“势利的人；假内行”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'A person regarded as arrogant and annoying.',
    examples: [{ english: 'In this context, the word "snob" is used to mean a person regarded as arrogant and annoying.', chinese: '在这个语境中，“snob”用于表达“势利的人；假内行”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'zeal', term: 'zeal', normalizedTerm: 'zeal', partOfSpeech: ['noun'], ipa: '/zil/',
    chineseShort: '热心；热衷；热诚', chineseExplanation: '表示“热心；热衷；热诚”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Excessive fervor to do something or accomplish some end.',
    examples: [{ english: 'In this context, the word "zeal" is used to mean excessive fervor to do something or accomplish some end.', chinese: '在这个语境中，“zeal”用于表达“热心；热衷；热诚”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ingenuity', term: 'ingenuity', normalizedTerm: 'ingenuity', partOfSpeech: ['noun'], ipa: '/.ɪndʒə\'nuəti/',
    chineseShort: '心灵手巧；精巧；精巧设计', chineseExplanation: '表示“心灵手巧；精巧；精巧设计”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The property of being ingenious.',
    examples: [{ english: 'In this context, the word "ingenuity" is used to mean the property of being ingenious.', chinese: '在这个语境中，“ingenuity”用于表达“心灵手巧；精巧；精巧设计”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'entreat', term: 'entreat', normalizedTerm: 'entreat', partOfSpeech: ['verb'], ipa: '/ɪn\'trit/',
    chineseShort: '恳求；乞求', chineseExplanation: '表示“恳求；乞求”这一动作、变化或过程，常用于较正式、学术或需要精确措辞的语境。', englishDefinition: 'Ask for or request earnestly.',
    examples: [{ english: 'In this context, the word "entreat" is used to mean ask for or request earnestly.', chinese: '在这个语境中，“entreat”用于表达“恳求；乞求”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'absorption', term: 'absorption', normalizedTerm: 'absorption', partOfSpeech: ['noun'], ipa: '/əb\'sɔːpʃn/',
    chineseShort: '吸收；专心；全神贯注', chineseExplanation: '表示“吸收；专心；全神贯注”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(chemistry) a process in which one substance permeates another; a fluid permeates or is dissolved by a liquid or solid.',
    examples: [{ english: 'In this context, the word "absorption" is used to mean (chemistry) a process in which one substance permeates another; a fluid permeates or is dissolved by a liquid or solid.', chinese: '在这个语境中，“absorption”用于表达“吸收；专心；全神贯注”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'alignment', term: 'alignment', normalizedTerm: 'alignment', partOfSpeech: ['noun'], ipa: '/ə\'laɪnmənt/',
    chineseShort: '队列；结盟；校正', chineseExplanation: '表示“队列；结盟；校正”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The spatial property possessed by an arrangement or position of things in a straight line or in parallel lines.',
    examples: [{ english: 'In this context, the word "alignment" is used to mean the spatial property possessed by an arrangement or position of things in a straight line or in parallel lines.', chinese: '在这个语境中，“alignment”用于表达“队列；结盟；校正”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bridle', term: 'bridle', normalizedTerm: 'bridle', partOfSpeech: ['noun', 'verb'], ipa: '/\'braɪd(ə)l/',
    chineseShort: '马勒；约束', chineseExplanation: '表示“马勒；约束”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'Headgear for a horse; includes a headstall and bit and reins to give the rider or driver control.',
    examples: [{ english: 'In this context, the word "bridle" is used to mean headgear for a horse; includes a headstall and bit and reins to give the rider or driver control.', chinese: '在这个语境中，“bridle”用于表达“马勒；约束”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'contamination', term: 'contamination', normalizedTerm: 'contamination', partOfSpeech: ['noun'], ipa: '/kən.tæmi\'neiʃən/',
    chineseShort: '污染；污物', chineseExplanation: '表示“污染；污物”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The state of being contaminated.',
    examples: [{ english: 'In this context, the word "contamination" is used to mean the state of being contaminated.', chinese: '在这个语境中，“contamination”用于表达“污染；污物”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'delusion', term: 'delusion', normalizedTerm: 'delusion', partOfSpeech: ['noun'], ipa: '/dɪ\'luʒ(ə)n/',
    chineseShort: '迷惑；欺瞒；错觉', chineseExplanation: '表示“迷惑；欺瞒；错觉”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(psychology) an erroneous belief that is held in the face of evidence to the contrary.',
    examples: [{ english: 'In this context, the word "delusion" is used to mean (psychology) an erroneous belief that is held in the face of evidence to the contrary.', chinese: '在这个语境中，“delusion”用于表达“迷惑；欺瞒；错觉”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'detection', term: 'detection', normalizedTerm: 'detection', partOfSpeech: ['noun'], ipa: '/dɪ\'tekʃən/',
    chineseShort: '发现；察觉；探测', chineseExplanation: '表示“发现；察觉；探测”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The perception that something has occurred or some state exists.',
    examples: [{ english: 'In this context, the word "detection" is used to mean the perception that something has occurred or some state exists.', chinese: '在这个语境中，“detection”用于表达“发现；察觉；探测”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'displacement', term: 'displacement', normalizedTerm: 'displacement', partOfSpeech: ['noun'], ipa: '/dɪs\'pleɪsmənt/',
    chineseShort: '换置；移位；移动', chineseExplanation: '表示“换置；移位；移动”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: '(chemistry) a reaction in which an elementary substance displaces and sets free a constituent element from a compound.',
    examples: [{ english: 'In this context, the word "displacement" is used to mean (chemistry) a reaction in which an elementary substance displaces and sets free a constituent element from a compound.', chinese: '在这个语境中，“displacement”用于表达“换置；移位；移动”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'disruptive', term: 'disruptive', normalizedTerm: 'disruptive', partOfSpeech: ['adjective'], ipa: '/dɪs\'rʌptɪv/',
    chineseShort: '分裂的；破坏(性)的', chineseExplanation: '表示“分裂的；破坏(性)的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Characterized by unrest or disorder or insubordination.',
    examples: [{ english: 'In this context, the word "disruptive" is used to mean characterized by unrest or disorder or insubordination.', chinese: '在这个语境中，“disruptive”用于表达“分裂的；破坏(性)的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elevation', term: 'elevation', normalizedTerm: 'elevation', partOfSpeech: ['noun'], ipa: '/.elə\'veɪʃ(ə)n/',
    chineseShort: '海拔；提高；仰角', chineseExplanation: '表示“海拔；提高；仰角”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The event of something being raised upward.',
    examples: [{ english: 'In this context, the word "elevation" is used to mean the event of something being raised upward.', chinese: '在这个语境中，“elevation”用于表达“海拔；提高；仰角”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'evolutionary', term: 'evolutionary', normalizedTerm: 'evolutionary', partOfSpeech: ['adjective'], ipa: '/.evə\'luʃ(ə)n.eri/',
    chineseShort: '展开的；进化论的；进化的', chineseExplanation: '表示“展开的；进化论的；进化的”这一性质、特征或状态，适合用于较正式或精确的描述。', englishDefinition: 'Of or relating to or produced by evolution.',
    examples: [{ english: 'In this context, the word "evolutionary" is used to mean of or relating to or produced by evolution.', chinese: '在这个语境中，“evolutionary”用于表达“展开的；进化论的；进化的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'induction', term: 'induction', normalizedTerm: 'induction', partOfSpeech: ['noun'], ipa: '/ɪn\'dʌkʃ(ə)n/',
    chineseShort: '归纳法；感应；就职', chineseExplanation: '表示“归纳法；感应；就职”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'An electrical phenomenon whereby an electromotive force (EMF) is generated in a closed circuit by a change in the flow of current.',
    examples: [{ english: 'In this context, the word "induction" is used to mean an electrical phenomenon whereby an electromotive force (EMF) is generated in a closed circuit by a change in the flow of current.', chinese: '在这个语境中，“induction”用于表达“归纳法；感应；就职”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'infancy', term: 'infancy', normalizedTerm: 'infancy', partOfSpeech: ['noun'], ipa: '/\'ɪnfənsi/',
    chineseShort: '幼年；初期；幼儿期', chineseExplanation: '表示“幼年；初期；幼儿期”这一概念、事物或状态，常见于较正式、学术或精确表达中。', englishDefinition: 'The early stage of growth or development.',
    examples: [{ english: 'In this context, the word "infancy" is used to mean the early stage of growth or development.', chinese: '在这个语境中，“infancy”用于表达“幼年；初期；幼儿期”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'abstruse', term: 'abstruse', normalizedTerm: 'abstruse', partOfSpeech: ['adjective'], ipa: '/əbstrˈus/',
    chineseShort: '深奥难懂的', chineseExplanation: '表示“深奥难懂的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Difficult to understand because it is highly complex or obscure.',
    examples: [{ english: 'The word "abstruse" is appropriate here because it means difficult to understand because it is highly complex or obscure.', chinese: '这里使用“abstruse”很合适，因为它表达“深奥难懂的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'acerbic', term: 'acerbic', normalizedTerm: 'acerbic', partOfSpeech: ['adjective'], ipa: '/əsˈɛrbɪk/',
    chineseShort: '尖刻的；辛辣的', chineseExplanation: '表示“尖刻的；辛辣的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Sharp, forthright, and often critical in tone or manner.',
    examples: [{ english: 'The word "acerbic" is appropriate here because it means sharp, forthright, and often critical in tone or manner.', chinese: '这里使用“acerbic”很合适，因为它表达“尖刻的；辛辣的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'acrimonious', term: 'acrimonious', normalizedTerm: 'acrimonious', partOfSpeech: ['adjective'], ipa: '/ˌækrəmˈoʊniəs/',
    chineseShort: '尖刻敌对的；充满怨恨的', chineseExplanation: '表示“尖刻敌对的；充满怨恨的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Marked by bitterness, hostility, or angry disagreement.',
    examples: [{ english: 'The word "acrimonious" is appropriate here because it means marked by bitterness, hostility, or angry disagreement.', chinese: '这里使用“acrimonious”很合适，因为它表达“尖刻敌对的；充满怨恨的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'adroit', term: 'adroit', normalizedTerm: 'adroit', partOfSpeech: ['adjective'], ipa: '/ədrˈɔɪt/',
    chineseShort: '熟练的；机敏的', chineseExplanation: '表示“熟练的；机敏的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Skilful and clever, especially in handling a difficult situation.',
    examples: [{ english: 'The word "adroit" is appropriate here because it means skilful and clever, especially in handling a difficult situation.', chinese: '这里使用“adroit”很合适，因为它表达“熟练的；机敏的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'alacrity', term: 'alacrity', normalizedTerm: 'alacrity', partOfSpeech: ['noun'], ipa: '/əlˈækrəti/',
    chineseShort: '欣然；敏捷', chineseExplanation: '表示“欣然；敏捷”这一概念，常用于正式、学术或高阶书面表达。', englishDefinition: 'Cheerful readiness and promptness in responding or acting.',
    examples: [{ english: 'The word "alacrity" is appropriate here because it means cheerful readiness and promptness in responding or acting.', chinese: '这里使用“alacrity”很合适，因为它表达“欣然；敏捷”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'anachronistic', term: 'anachronistic', normalizedTerm: 'anachronistic', partOfSpeech: ['adjective'], ipa: '/ənˌækrənˈɪstɪk/',
    chineseShort: '不合时代的；年代错置的', chineseExplanation: '表示“不合时代的；年代错置的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Belonging to a period other than the one in which it exists or is represented.',
    examples: [{ english: 'The word "anachronistic" is appropriate here because it means belonging to a period other than the one in which it exists or is represented.', chinese: '这里使用“anachronistic”很合适，因为它表达“不合时代的；年代错置的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'anathema', term: 'anathema', normalizedTerm: 'anathema', partOfSpeech: ['noun'], ipa: '/ənˈæθəmə/',
    chineseShort: '令人憎恶之物；禁忌', chineseExplanation: '表示“令人憎恶之物；禁忌”这一概念，常用于正式、学术或高阶书面表达。', englishDefinition: 'Something or someone intensely disliked or rejected.',
    examples: [{ english: 'The word "anathema" is appropriate here because it means something or someone intensely disliked or rejected.', chinese: '这里使用“anathema”很合适，因为它表达“令人憎恶之物；禁忌”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'antithetical', term: 'antithetical', normalizedTerm: 'antithetical', partOfSpeech: ['adjective'], ipa: '/ˌæntəθˈɛtɪkəl/',
    chineseShort: '对立的；截然相反的', chineseExplanation: '表示“对立的；截然相反的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Directly opposed in character, purpose, or meaning.',
    examples: [{ english: 'The word "antithetical" is appropriate here because it means directly opposed in character, purpose, or meaning.', chinese: '这里使用“antithetical”很合适，因为它表达“对立的；截然相反的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'apocryphal', term: 'apocryphal', normalizedTerm: 'apocryphal', partOfSpeech: ['adjective'], ipa: '/əpˈɑkrəfəl/',
    chineseShort: '真伪可疑的；杜撰的', chineseExplanation: '表示“真伪可疑的；杜撰的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Of doubtful authenticity, although widely circulated or believed.',
    examples: [{ english: 'The word "apocryphal" is appropriate here because it means of doubtful authenticity, although widely circulated or believed.', chinese: '这里使用“apocryphal”很合适，因为它表达“真伪可疑的；杜撰的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'assiduous', term: 'assiduous', normalizedTerm: 'assiduous', partOfSpeech: ['adjective'], ipa: '/əsˈɪdwəs/',
    chineseShort: '勤勉的；一丝不苟的', chineseExplanation: '表示“勤勉的；一丝不苟的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Showing persistent care, effort, and attention to a task.',
    examples: [{ english: 'The word "assiduous" is appropriate here because it means showing persistent care, effort, and attention to a task.', chinese: '这里使用“assiduous”很合适，因为它表达“勤勉的；一丝不苟的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'bellicose', term: 'bellicose', normalizedTerm: 'bellicose', partOfSpeech: ['adjective'], ipa: '/bˈɛləkˌoʊs/',
    chineseShort: '好战的；好斗的', chineseExplanation: '表示“好战的；好斗的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Showing aggression and a willingness to argue or fight.',
    examples: [{ english: 'The word "bellicose" is appropriate here because it means showing aggression and a willingness to argue or fight.', chinese: '这里使用“bellicose”很合适，因为它表达“好战的；好斗的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'capricious', term: 'capricious', normalizedTerm: 'capricious', partOfSpeech: ['adjective'], ipa: '/kəprˈɪʃəs/',
    chineseShort: '反复无常的；任性的', chineseExplanation: '表示“反复无常的；任性的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Changing suddenly and unpredictably according to impulse.',
    examples: [{ english: 'The word "capricious" is appropriate here because it means changing suddenly and unpredictably according to impulse.', chinese: '这里使用“capricious”很合适，因为它表达“反复无常的；任性的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'circumspect', term: 'circumspect', normalizedTerm: 'circumspect', partOfSpeech: ['adjective'], ipa: '/sˈɜrkəmspˌɛkt/',
    chineseShort: '谨慎周到的', chineseExplanation: '表示“谨慎周到的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Careful to consider possible consequences before acting or speaking.',
    examples: [{ english: 'The word "circumspect" is appropriate here because it means careful to consider possible consequences before acting or speaking.', chinese: '这里使用“circumspect”很合适，因为它表达“谨慎周到的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'cogent', term: 'cogent', normalizedTerm: 'cogent', partOfSpeech: ['adjective'], ipa: '/kˈoʊdʒənt/',
    chineseShort: '有说服力的；令人信服的', chineseExplanation: '表示“有说服力的；令人信服的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Clear, logical, and convincing.',
    examples: [{ english: 'The word "cogent" is appropriate here because it means clear, logical, and convincing.', chinese: '这里使用“cogent”很合适，因为它表达“有说服力的；令人信服的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'commensurate', term: 'commensurate', normalizedTerm: 'commensurate', partOfSpeech: ['adjective'], ipa: '/kəmˈɛnsɜrət/',
    chineseShort: '相称的；相应的', chineseExplanation: '表示“相称的；相应的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Corresponding appropriately in size, degree, or importance.',
    examples: [{ english: 'The word "commensurate" is appropriate here because it means corresponding appropriately in size, degree, or importance.', chinese: '这里使用“commensurate”很合适，因为它表达“相称的；相应的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'compunction', term: 'compunction', normalizedTerm: 'compunction', partOfSpeech: ['noun'], ipa: '/kəmpˈəŋkʃən/',
    chineseShort: '内疚；良心不安', chineseExplanation: '表示“内疚；良心不安”这一概念，常用于正式、学术或高阶书面表达。', englishDefinition: 'A feeling of guilt or moral unease about an action.',
    examples: [{ english: 'The word "compunction" is appropriate here because it means a feeling of guilt or moral unease about an action.', chinese: '这里使用“compunction”很合适，因为它表达“内疚；良心不安”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'conundrum', term: 'conundrum', normalizedTerm: 'conundrum', partOfSpeech: ['noun'], ipa: '/kənˈəndrəm/',
    chineseShort: '难题；复杂谜题', chineseExplanation: '表示“难题；复杂谜题”这一概念，常用于正式、学术或高阶书面表达。', englishDefinition: 'A difficult and confusing problem or question.',
    examples: [{ english: 'The word "conundrum" is appropriate here because it means a difficult and confusing problem or question.', chinese: '这里使用“conundrum”很合适，因为它表达“难题；复杂谜题”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'deleterious', term: 'deleterious', normalizedTerm: 'deleterious', partOfSpeech: ['adjective'], ipa: '/dˌɛlətˈɪriəs/',
    chineseShort: '有害的；不利的', chineseExplanation: '表示“有害的；不利的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Causing harm or damage, often in a gradual or indirect way.',
    examples: [{ english: 'The word "deleterious" is appropriate here because it means causing harm or damage, often in a gradual or indirect way.', chinese: '这里使用“deleterious”很合适，因为它表达“有害的；不利的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'desultory', term: 'desultory', normalizedTerm: 'desultory', partOfSpeech: ['adjective'], ipa: '/dˈɛsəltˌɔri/',
    chineseShort: '散漫的；无条理的', chineseExplanation: '表示“散漫的；无条理的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Lacking a clear plan, purpose, or sustained effort.',
    examples: [{ english: 'The word "desultory" is appropriate here because it means lacking a clear plan, purpose, or sustained effort.', chinese: '这里使用“desultory”很合适，因为它表达“散漫的；无条理的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dichotomy', term: 'dichotomy', normalizedTerm: 'dichotomy', partOfSpeech: ['noun'], ipa: '/daɪkˈɑtəmi/',
    chineseShort: '二分法；截然对立', chineseExplanation: '表示“二分法；截然对立”这一概念，常用于正式、学术或高阶书面表达。', englishDefinition: 'A division or contrast between two sharply different things or ideas.',
    examples: [{ english: 'The word "dichotomy" is appropriate here because it means a division or contrast between two sharply different things or ideas.', chinese: '这里使用“dichotomy”很合适，因为它表达“二分法；截然对立”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'didactic', term: 'didactic', normalizedTerm: 'didactic', partOfSpeech: ['adjective'], ipa: '/daɪdˈæktɪk/',
    chineseShort: '说教的；教诲性的', chineseExplanation: '表示“说教的；教诲性的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Intended to teach, sometimes in an excessively instructive manner.',
    examples: [{ english: 'The word "didactic" is appropriate here because it means intended to teach, sometimes in an excessively instructive manner.', chinese: '这里使用“didactic”很合适，因为它表达“说教的；教诲性的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'diffident', term: 'diffident', normalizedTerm: 'diffident', partOfSpeech: ['adjective'], ipa: '/ˈdɪfɪdənt/',
    chineseShort: '缺乏自信的；拘谨的', chineseExplanation: '表示“缺乏自信的；拘谨的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Modest or shy because of a lack of self-confidence.',
    examples: [{ english: 'The word "diffident" is appropriate here because it means modest or shy because of a lack of self-confidence.', chinese: '这里使用“diffident”很合适，因为它表达“缺乏自信的；拘谨的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'dispassionate', term: 'dispassionate', normalizedTerm: 'dispassionate', partOfSpeech: ['adjective'], ipa: '/dɪspˈæʃənət/',
    chineseShort: '冷静客观的；不带感情的', chineseExplanation: '表示“冷静客观的；不带感情的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Not influenced by strong emotion and therefore able to judge objectively.',
    examples: [{ english: 'The word "dispassionate" is appropriate here because it means not influenced by strong emotion and therefore able to judge objectively.', chinese: '这里使用“dispassionate”很合适，因为它表达“冷静客观的；不带感情的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'effusive', term: 'effusive', normalizedTerm: 'effusive', partOfSpeech: ['adjective'], ipa: '/ˈɛfjusɪv/',
    chineseShort: '感情洋溢的；过分热情的', chineseExplanation: '表示“感情洋溢的；过分热情的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Expressing feelings of gratitude, praise, or approval in an unrestrained way.',
    examples: [{ english: 'The word "effusive" is appropriate here because it means expressing feelings of gratitude, praise, or approval in an unrestrained way.', chinese: '这里使用“effusive”很合适，因为它表达“感情洋溢的；过分热情的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'egregious', term: 'egregious', normalizedTerm: 'egregious', partOfSpeech: ['adjective'], ipa: '/ɪɡrˈidʒəs/',
    chineseShort: '极其恶劣的；严重的', chineseExplanation: '表示“极其恶劣的；严重的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Outstandingly bad, shocking, or unacceptable.',
    examples: [{ english: 'The word "egregious" is appropriate here because it means outstandingly bad, shocking, or unacceptable.', chinese: '这里使用“egregious”很合适，因为它表达“极其恶劣的；严重的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'elucidate', term: 'elucidate', normalizedTerm: 'elucidate', partOfSpeech: ['verb'], ipa: '/ɪlˈusədˌeɪt/',
    chineseShort: '阐明；解释清楚', chineseExplanation: '表示“阐明；解释清楚”这一动作，常用于正式、学术或需要精确说明复杂概念的语境。', englishDefinition: 'To make something difficult or complex clear and understandable.',
    examples: [{ english: 'The word "elucidate" is appropriate here because it means to make something difficult or complex clear and understandable.', chinese: '这里使用“elucidate”很合适，因为它表达“阐明；解释清楚”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'enigmatic', term: 'enigmatic', normalizedTerm: 'enigmatic', partOfSpeech: ['adjective'], ipa: '/ˌɛnɪɡmˈætɪk/',
    chineseShort: '神秘难解的；令人费解的', chineseExplanation: '表示“神秘难解的；令人费解的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Difficult to interpret or understand; mysterious.',
    examples: [{ english: 'The word "enigmatic" is appropriate here because it means difficult to interpret or understand; mysterious.', chinese: '这里使用“enigmatic”很合适，因为它表达“神秘难解的；令人费解的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ephemeral', term: 'ephemeral', normalizedTerm: 'ephemeral', partOfSpeech: ['adjective'], ipa: '/ɪfˈɛmɜrəl/',
    chineseShort: '短暂的；转瞬即逝的', chineseExplanation: '表示“短暂的；转瞬即逝的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Lasting for only a very short time.',
    examples: [{ english: 'The word "ephemeral" is appropriate here because it means lasting for only a very short time.', chinese: '这里使用“ephemeral”很合适，因为它表达“短暂的；转瞬即逝的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'equivocal', term: 'equivocal', normalizedTerm: 'equivocal', partOfSpeech: ['adjective'], ipa: '/ɪkwˈɪvəkəl/',
    chineseShort: '模棱两可的；含糊的', chineseExplanation: '表示“模棱两可的；含糊的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Open to more than one interpretation and deliberately or inherently unclear.',
    examples: [{ english: 'The word "equivocal" is appropriate here because it means open to more than one interpretation and deliberately or inherently unclear.', chinese: '这里使用“equivocal”很合适，因为它表达“模棱两可的；含糊的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'erudite', term: 'erudite', normalizedTerm: 'erudite', partOfSpeech: ['adjective'], ipa: '/ˈɛrədˌaɪt/',
    chineseShort: '博学的；学识渊博的', chineseExplanation: '表示“博学的；学识渊博的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Having or showing extensive scholarly knowledge.',
    examples: [{ english: 'The word "erudite" is appropriate here because it means having or showing extensive scholarly knowledge.', chinese: '这里使用“erudite”很合适，因为它表达“博学的；学识渊博的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'esoteric', term: 'esoteric', normalizedTerm: 'esoteric', partOfSpeech: ['adjective'], ipa: '/ˌɛsətˈɛrɪk/',
    chineseShort: '深奥的；仅少数人懂的', chineseExplanation: '表示“深奥的；仅少数人懂的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Intended for or understood by a small group with specialized knowledge.',
    examples: [{ english: 'The word "esoteric" is appropriate here because it means intended for or understood by a small group with specialized knowledge.', chinese: '这里使用“esoteric”很合适，因为它表达“深奥的；仅少数人懂的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fastidious', term: 'fastidious', normalizedTerm: 'fastidious', partOfSpeech: ['adjective'], ipa: '/fæstˈɪdiəs/',
    chineseShort: '一丝不苟的；挑剔的', chineseExplanation: '表示“一丝不苟的；挑剔的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Very attentive to detail and difficult to satisfy regarding standards.',
    examples: [{ english: 'The word "fastidious" is appropriate here because it means very attentive to detail and difficult to satisfy regarding standards.', chinese: '这里使用“fastidious”很合适，因为它表达“一丝不苟的；挑剔的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'flagrant', term: 'flagrant', normalizedTerm: 'flagrant', partOfSpeech: ['adjective'], ipa: '/flˈeɪɡrənt/',
    chineseShort: '公然的；骇人听闻的', chineseExplanation: '表示“公然的；骇人听闻的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Conspicuously and offensively bad or unacceptable.',
    examples: [{ english: 'The word "flagrant" is appropriate here because it means conspicuously and offensively bad or unacceptable.', chinese: '这里使用“flagrant”很合适，因为它表达“公然的；骇人听闻的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'fortuitous', term: 'fortuitous', normalizedTerm: 'fortuitous', partOfSpeech: ['adjective'], ipa: '/fɔrtˈuɪtəs/',
    chineseShort: '偶然发生的；意外幸运的', chineseExplanation: '表示“偶然发生的；意外幸运的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Happening by chance rather than by design, often with a favourable result.',
    examples: [{ english: 'The word "fortuitous" is appropriate here because it means happening by chance rather than by design, often with a favourable result.', chinese: '这里使用“fortuitous”很合适，因为它表达“偶然发生的；意外幸运的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'garrulous', term: 'garrulous', normalizedTerm: 'garrulous', partOfSpeech: ['adjective'], ipa: '/ɡˈɛrələs/',
    chineseShort: '喋喋不休的；话多的', chineseExplanation: '表示“喋喋不休的；话多的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Excessively talkative, especially about unimportant matters.',
    examples: [{ english: 'The word "garrulous" is appropriate here because it means excessively talkative, especially about unimportant matters.', chinese: '这里使用“garrulous”很合适，因为它表达“喋喋不休的；话多的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'iconoclast', term: 'iconoclast', normalizedTerm: 'iconoclast', partOfSpeech: ['noun'], ipa: '/ˌaɪkˈɑnəklˌæst/',
    chineseShort: '反传统者；打破偶像者', chineseExplanation: '表示“反传统者；打破偶像者”这一概念，常用于正式、学术或高阶书面表达。', englishDefinition: 'A person who challenges established beliefs, traditions, or institutions.',
    examples: [{ english: 'The word "iconoclast" is appropriate here because it means a person who challenges established beliefs, traditions, or institutions.', chinese: '这里使用“iconoclast”很合适，因为它表达“反传统者；打破偶像者”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'idiosyncratic', term: 'idiosyncratic', normalizedTerm: 'idiosyncratic', partOfSpeech: ['adjective'], ipa: '/ˌɪdioʊsˌɪnkrˈætɪk/',
    chineseShort: '独特的；个人特有的', chineseExplanation: '表示“独特的；个人特有的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Distinctive to a particular person or thing, often in an unusual way.',
    examples: [{ english: 'The word "idiosyncratic" is appropriate here because it means distinctive to a particular person or thing, often in an unusual way.', chinese: '这里使用“idiosyncratic”很合适，因为它表达“独特的；个人特有的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'immutable', term: 'immutable', normalizedTerm: 'immutable', partOfSpeech: ['adjective'], ipa: '/ˌɪmjˈutəbəl/',
    chineseShort: '不可改变的；永恒不变的', chineseExplanation: '表示“不可改变的；永恒不变的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Unable or not liable to be changed.',
    examples: [{ english: 'The word "immutable" is appropriate here because it means unable or not liable to be changed.', chinese: '这里使用“immutable”很合适，因为它表达“不可改变的；永恒不变的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'impetuous', term: 'impetuous', normalizedTerm: 'impetuous', partOfSpeech: ['adjective'], ipa: '/ˌɪmpˈɛtʃwəs/',
    chineseShort: '冲动的；鲁莽的', chineseExplanation: '表示“冲动的；鲁莽的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Acting quickly and forcefully without sufficient thought.',
    examples: [{ english: 'The word "impetuous" is appropriate here because it means acting quickly and forcefully without sufficient thought.', chinese: '这里使用“impetuous”很合适，因为它表达“冲动的；鲁莽的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inchoate', term: 'inchoate', normalizedTerm: 'inchoate', partOfSpeech: ['adjective'], ipa: '/ˌɪnkˈoʊət/',
    chineseShort: '初步的；尚未成形的', chineseExplanation: '表示“初步的；尚未成形的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Only partly formed or developed and therefore not yet clear or organized.',
    examples: [{ english: 'The word "inchoate" is appropriate here because it means only partly formed or developed and therefore not yet clear or organized.', chinese: '这里使用“inchoate”很合适，因为它表达“初步的；尚未成形的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'incongruous', term: 'incongruous', normalizedTerm: 'incongruous', partOfSpeech: ['adjective'], ipa: '/ˌɪŋkˈɔŋruəs/',
    chineseShort: '不协调的；不相称的', chineseExplanation: '表示“不协调的；不相称的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Out of place or inconsistent with the surrounding context.',
    examples: [{ english: 'The word "incongruous" is appropriate here because it means out of place or inconsistent with the surrounding context.', chinese: '这里使用“incongruous”很合适，因为它表达“不协调的；不相称的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'incontrovertible', term: 'incontrovertible', normalizedTerm: 'incontrovertible', partOfSpeech: ['adjective'], ipa: '/ˌɪŋkˌɑntroʊvˈɜrtɪbəl/',
    chineseShort: '无可争辩的；不可否认的', chineseExplanation: '表示“无可争辩的；不可否认的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Impossible to dispute because the evidence or reasoning is decisive.',
    examples: [{ english: 'The word "incontrovertible" is appropriate here because it means impossible to dispute because the evidence or reasoning is decisive.', chinese: '这里使用“incontrovertible”很合适，因为它表达“无可争辩的；不可否认的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ineffable', term: 'ineffable', normalizedTerm: 'ineffable', partOfSpeech: ['adjective'], ipa: '/ˌɪnˈɛfəbəl/',
    chineseShort: '难以言表的；不可言喻的', chineseExplanation: '表示“难以言表的；不可言喻的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Too great, extreme, or unusual to be adequately expressed in words.',
    examples: [{ english: 'The word "ineffable" is appropriate here because it means too great, extreme, or unusual to be adequately expressed in words.', chinese: '这里使用“ineffable”很合适，因为它表达“难以言表的；不可言喻的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'inexorable', term: 'inexorable', normalizedTerm: 'inexorable', partOfSpeech: ['adjective'], ipa: '/ˌɪnˈɛksɜrəbəl/',
    chineseShort: '不可阻挡的；无情的', chineseExplanation: '表示“不可阻挡的；无情的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Impossible to stop, prevent, or persuade away from a course of action.',
    examples: [{ english: 'The word "inexorable" is appropriate here because it means impossible to stop, prevent, or persuade away from a course of action.', chinese: '这里使用“inexorable”很合适，因为它表达“不可阻挡的；无情的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'ingenuous', term: 'ingenuous', normalizedTerm: 'ingenuous', partOfSpeech: ['adjective'], ipa: '/ˌɪndʒˈɛnjuəs/',
    chineseShort: '坦率天真的；单纯的', chineseExplanation: '表示“坦率天真的；单纯的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Innocent, candid, and straightforward, sometimes through lack of experience.',
    examples: [{ english: 'The word "ingenuous" is appropriate here because it means innocent, candid, and straightforward, sometimes through lack of experience.', chinese: '这里使用“ingenuous”很合适，因为它表达“坦率天真的；单纯的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'laconic', term: 'laconic', normalizedTerm: 'laconic', partOfSpeech: ['adjective'], ipa: '/lɑkˈɑnɪk/',
    chineseShort: '言简意赅的；简短的', chineseExplanation: '表示“言简意赅的；简短的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Using very few words to express an idea.',
    examples: [{ english: 'The word "laconic" is appropriate here because it means using very few words to express an idea.', chinese: '这里使用“laconic”很合适，因为它表达“言简意赅的；简短的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'magnanimous', term: 'magnanimous', normalizedTerm: 'magnanimous', partOfSpeech: ['adjective'], ipa: '/mæɡnˈænəməs/',
    chineseShort: '宽宏大量的；高尚的', chineseExplanation: '表示“宽宏大量的；高尚的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Generous and forgiving, especially toward a rival or less powerful person.',
    examples: [{ english: 'The word "magnanimous" is appropriate here because it means generous and forgiving, especially toward a rival or less powerful person.', chinese: '这里使用“magnanimous”很合适，因为它表达“宽宏大量的；高尚的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'mendacious', term: 'mendacious', normalizedTerm: 'mendacious', partOfSpeech: ['adjective'], ipa: '/mɛndˈeɪʃəs/',
    chineseShort: '虚假的；说谎的', chineseExplanation: '表示“虚假的；说谎的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Not truthful; characterized by deliberate falsehood.',
    examples: [{ english: 'The word "mendacious" is appropriate here because it means not truthful; characterized by deliberate falsehood.', chinese: '这里使用“mendacious”很合适，因为它表达“虚假的；说谎的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'obfuscate', term: 'obfuscate', normalizedTerm: 'obfuscate', partOfSpeech: ['verb'], ipa: '/ˈɑbfəskˌeɪt/',
    chineseShort: '使晦涩；使混淆', chineseExplanation: '表示“使晦涩；使混淆”这一动作，常用于正式、学术或需要精确说明复杂概念的语境。', englishDefinition: 'To make something obscure, unclear, or difficult to understand.',
    examples: [{ english: 'The word "obfuscate" is appropriate here because it means to make something obscure, unclear, or difficult to understand.', chinese: '这里使用“obfuscate”很合适，因为它表达“使晦涩；使混淆”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },
  {
    id: 'perspicacious', term: 'perspicacious', normalizedTerm: 'perspicacious', partOfSpeech: ['adjective'], ipa: '/pɜrspəkˈeɪʃəs/',
    chineseShort: '洞察力强的；敏锐的', chineseExplanation: '表示“洞察力强的；敏锐的”，用于准确描述较复杂、细微或正式的性质与状态。', englishDefinition: 'Having a ready and accurate insight into complex matters.',
    examples: [{ english: 'The word "perspicacious" is appropriate here because it means having a ready and accurate insight into complex matters.', chinese: '这里使用“perspicacious”很合适，因为它表达“洞察力强的；敏锐的”这一含义。' }], level: 5, cefr: 'C2', categories: ['Academic'],
  },

]
