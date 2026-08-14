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
  {
    id: 'achieve', term: 'achieve', normalizedTerm: 'achieve', partOfSpeech: ['verb'], ipa: '/ɐtʃˈiːv/',
    chineseShort: '达到；实现', chineseExplanation: '成功完成目标或取得想要的结果。', englishDefinition: 'To successfully reach a goal or get a desired result.',
    examples: [{ english: 'She worked hard to achieve her goal.', chinese: '她努力工作以实现自己的目标。' }], collocations: ['achieve a goal', 'achieve success'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'admit', term: 'admit', normalizedTerm: 'admit', partOfSpeech: ['verb'], ipa: '/ɐdmˈɪt/',
    chineseShort: '承认；准许进入', chineseExplanation: '承认某事是真的，也可表示允许某人进入某地。', englishDefinition: 'To agree that something is true; also, to allow someone to enter.',
    examples: [{ english: 'He admitted that he had made a mistake.', chinese: '他承认自己犯了一个错误。' }], collocations: ['admit a mistake', 'admit that'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'advise', term: 'advise', normalizedTerm: 'advise', partOfSpeech: ['verb'], ipa: '/ɐdvˈaɪz/',
    chineseShort: '建议；劝告', chineseExplanation: '根据经验或判断告诉某人应该怎么做。', englishDefinition: 'To tell someone what you think they should do.',
    examples: [{ english: 'The doctor advised me to rest for two days.', chinese: '医生建议我休息两天。' }], collocations: ['advise someone to', 'strongly advise'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'afford', term: 'afford', normalizedTerm: 'afford', partOfSpeech: ['verb'], ipa: '/ɐfˈɔːd/',
    chineseShort: '负担得起', chineseExplanation: '有足够的钱或时间去购买、支付或做某事。', englishDefinition: 'To have enough money or time to pay for or do something.',
    examples: [{ english: 'We cannot afford a new car this year.', chinese: '我们今年买不起新车。' }], collocations: ['can afford', 'afford to buy'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'announce', term: 'announce', normalizedTerm: 'announce', partOfSpeech: ['verb'], ipa: '/ɐnˈaʊns/',
    chineseShort: '宣布；公布', chineseExplanation: '正式或公开地告诉人们一项消息或决定。', englishDefinition: 'To make information or a decision known publicly.',
    examples: [{ english: 'The school announced the exam date yesterday.', chinese: '学校昨天公布了考试日期。' }], collocations: ['announce a decision', 'officially announce'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'apologize', term: 'apologize', normalizedTerm: 'apologize', partOfSpeech: ['verb'], ipa: '/ɐpˈɒlədʒˌaɪz/',
    chineseShort: '道歉', chineseExplanation: '因为做错事或造成不便而表示歉意。', englishDefinition: 'To say that you are sorry for something you did.',
    examples: [{ english: 'I apologized for arriving late.', chinese: '我为迟到而道歉。' }], collocations: ['apologize for', 'apologize to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'apply', term: 'apply', normalizedTerm: 'apply', partOfSpeech: ['verb'], ipa: '/ɐplˈaɪ/',
    chineseShort: '申请；应用', chineseExplanation: '正式请求职位、课程等，也可表示把方法用于某事。', englishDefinition: 'To make a formal request for something; also, to use something in a situation.',
    examples: [{ english: 'She applied for a part-time job.', chinese: '她申请了一份兼职工作。' }], collocations: ['apply for a job', 'apply a method'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'arrange', term: 'arrange', normalizedTerm: 'arrange', partOfSpeech: ['verb'], ipa: '/ɐɹˈeɪndʒ/',
    chineseShort: '安排；整理', chineseExplanation: '提前计划某事，或把物品按一定方式放好。', englishDefinition: 'To plan something in advance or put things in a particular order.',
    examples: [{ english: 'I arranged a meeting with the manager.', chinese: '我安排了与经理的会面。' }], collocations: ['arrange a meeting', 'arrange for'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'avoid', term: 'avoid', normalizedTerm: 'avoid', partOfSpeech: ['verb'], ipa: '/ɐvˈɔɪd/',
    chineseShort: '避免', chineseExplanation: '有意识地远离某人、某事或防止某种情况发生。', englishDefinition: 'To stay away from something or prevent something from happening.',
    examples: [{ english: 'Try to avoid using your phone while driving.', chinese: '开车时尽量避免使用手机。' }], collocations: ['avoid doing', 'avoid a problem'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'behave', term: 'behave', normalizedTerm: 'behave', partOfSpeech: ['verb'], ipa: '/bɪhˈeɪv/',
    chineseShort: '表现；举止', chineseExplanation: '以某种方式行动，尤其指在社交场合中的行为。', englishDefinition: 'To act in a particular way, especially toward other people.',
    examples: [{ english: 'The children behaved well during the trip.', chinese: '孩子们在旅途中表现很好。' }], collocations: ['behave well', 'behave badly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'belong', term: 'belong', normalizedTerm: 'belong', partOfSpeech: ['verb'], ipa: '/bɪlˈɒŋ/',
    chineseShort: '属于', chineseExplanation: '表示某物归某人所有，或某人是某群体的一员。', englishDefinition: 'To be owned by someone or to be a member of a group.',
    examples: [{ english: 'This bag belongs to my sister.', chinese: '这个包属于我姐姐。' }], collocations: ['belong to', 'belong together'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'borrow', term: 'borrow', normalizedTerm: 'borrow', partOfSpeech: ['verb'], ipa: '/bˈɒɹəʊ/',
    chineseShort: '借入', chineseExplanation: '暂时拿用别人的东西，并打算之后归还。', englishDefinition: 'To take and use something that belongs to someone else and return it later.',
    examples: [{ english: 'Can I borrow your charger for an hour?', chinese: '我可以借你的充电器一小时吗？' }], collocations: ['borrow money', 'borrow from'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'breathe', term: 'breathe', normalizedTerm: 'breathe', partOfSpeech: ['verb'], ipa: '/bɹˈiːð/',
    chineseShort: '呼吸', chineseExplanation: '把空气吸入肺部再呼出。', englishDefinition: 'To take air into the lungs and let it out again.',
    examples: [{ english: 'Take a moment to breathe slowly.', chinese: '花一点时间慢慢呼吸。' }], collocations: ['breathe deeply', 'breathe slowly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'cancel', term: 'cancel', normalizedTerm: 'cancel', partOfSpeech: ['verb', 'noun'], ipa: '/kˈansəl/',
    chineseShort: '取消', chineseExplanation: '决定原本计划的活动、预订或安排不再进行。', englishDefinition: 'To decide that a planned event, booking, or arrangement will not happen.',
    examples: [{ english: 'They cancelled the flight because of bad weather.', chinese: '他们因天气恶劣取消了航班。' }], collocations: ['cancel a booking', 'cancel a flight'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'celebrate', term: 'celebrate', normalizedTerm: 'celebrate', partOfSpeech: ['verb'], ipa: '/sˈɛləbɹˌeɪt/',
    chineseShort: '庆祝', chineseExplanation: '为特别事件或成功举行活动或表达喜悦。', englishDefinition: 'To do something enjoyable for a special event or success.',
    examples: [{ english: 'We celebrated her birthday at home.', chinese: '我们在家庆祝了她的生日。' }], collocations: ['celebrate a birthday', 'celebrate success'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'communicate', term: 'communicate', normalizedTerm: 'communicate', partOfSpeech: ['verb'], ipa: '/kəmjˈuːnɪkˌeɪt/',
    chineseShort: '沟通；交流', chineseExplanation: '通过说话、写作或其他方式交换信息和想法。', englishDefinition: 'To exchange information or ideas with other people.',
    examples: [{ english: 'Good teams communicate clearly.', chinese: '好的团队会清楚地沟通。' }], collocations: ['communicate clearly', 'communicate with'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'compare', term: 'compare', normalizedTerm: 'compare', partOfSpeech: ['verb'], ipa: '/kəmpˈeə/',
    chineseShort: '比较', chineseExplanation: '观察两个或多个事物的相同点和不同点。', englishDefinition: 'To examine two or more things to see how they are similar or different.',
    examples: [{ english: 'Compare the two prices before you buy.', chinese: '购买前先比较这两个价格。' }], collocations: ['compare prices', 'compare with'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'complain', term: 'complain', normalizedTerm: 'complain', partOfSpeech: ['verb'], ipa: '/kəmplˈeɪn/',
    chineseShort: '抱怨；投诉', chineseExplanation: '表示对某事不满意，或正式提出问题。', englishDefinition: 'To say that you are unhappy or dissatisfied with something.',
    examples: [{ english: 'Several customers complained about the slow service.', chinese: '几位顾客投诉服务太慢。' }], collocations: ['complain about', 'make a complaint'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'concentrate', term: 'concentrate', normalizedTerm: 'concentrate', partOfSpeech: ['verb'], ipa: '/kˈɒnsəntɹˌeɪt/',
    chineseShort: '集中注意力', chineseExplanation: '把注意力集中在一个任务、想法或活动上。', englishDefinition: 'To give all your attention to one task, idea, or activity.',
    examples: [{ english: 'I cannot concentrate when the room is noisy.', chinese: '房间很吵时我无法集中注意力。' }], collocations: ['concentrate on', 'concentrate fully'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'connect', term: 'connect', normalizedTerm: 'connect', partOfSpeech: ['verb'], ipa: '/kənˈɛkt/',
    chineseShort: '连接；联系', chineseExplanation: '使两个事物相连，也可指人与人建立联系。', englishDefinition: 'To join things together or establish contact between people.',
    examples: [{ english: 'Connect the cable to the back of the computer.', chinese: '把电线连接到电脑背面。' }], collocations: ['connect to', 'connect with'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'consider', term: 'consider', normalizedTerm: 'consider', partOfSpeech: ['verb'], ipa: '/kənsˈɪdə/',
    chineseShort: '考虑；认为', chineseExplanation: '在做决定前认真思考某事，也可表示认为某事如此。', englishDefinition: 'To think carefully about something before deciding; also, to regard something in a certain way.',
    examples: [{ english: 'We are considering moving to a larger office.', chinese: '我们正在考虑搬到更大的办公室。' }], collocations: ['consider doing', 'consider an option'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'continue', term: 'continue', normalizedTerm: 'continue', partOfSpeech: ['verb'], ipa: '/kəntˈɪnjuː/',
    chineseShort: '继续', chineseExplanation: '在暂停后或不中断地做同一件事。', englishDefinition: 'To keep doing something or start again after a pause.',
    examples: [{ english: 'Please continue reading from page twenty.', chinese: '请从第二十页继续阅读。' }], collocations: ['continue doing', 'continue to'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'control', term: 'control', normalizedTerm: 'control', partOfSpeech: ['verb', 'noun'], ipa: '/kəntɹˈəʊl/',
    chineseShort: '控制；管理', chineseExplanation: '使某事按照预期运行，或限制自己的行为和情绪。', englishDefinition: 'To make something work in the way you want or limit your own actions or feelings.',
    examples: [{ english: 'He learned to control his temper.', chinese: '他学会了控制自己的脾气。' }], collocations: ['control a situation', 'control costs'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'create', term: 'create', normalizedTerm: 'create', partOfSpeech: ['verb'], ipa: '/kɹiːˈeɪt/',
    chineseShort: '创造；创建', chineseExplanation: '制作或产生新的事物、想法或内容。', englishDefinition: 'To make or produce something new.',
    examples: [{ english: 'The students created a short video for class.', chinese: '学生们为课堂制作了一个短视频。' }], collocations: ['create content', 'create a plan'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'deliver', term: 'deliver', normalizedTerm: 'deliver', partOfSpeech: ['verb'], ipa: '/dɪlˈɪvə/',
    chineseShort: '递送；发表', chineseExplanation: '把物品送到目的地，也可指发表讲话或提供服务。', englishDefinition: 'To take something to a place; also, to give a speech or provide a service.',
    examples: [{ english: 'The company will deliver the package tomorrow.', chinese: '公司明天会送达包裹。' }], collocations: ['deliver a package', 'deliver a speech'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'depend', term: 'depend', normalizedTerm: 'depend', partOfSpeech: ['verb'], ipa: '/dɪpˈɛnd/',
    chineseShort: '依靠；取决于', chineseExplanation: '需要某人或某物的帮助，或表示结果由某条件决定。', englishDefinition: 'To rely on someone or something; also, to be decided by a condition.',
    examples: [{ english: 'The final cost depends on the number of guests.', chinese: '最终费用取决于客人的数量。' }], collocations: ['depend on', 'depend heavily on'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'describe', term: 'describe', normalizedTerm: 'describe', partOfSpeech: ['verb'], ipa: '/dɪskɹˈaɪb/',
    chineseShort: '描述', chineseExplanation: '用语言说明某人、某物或某情况是什么样子。', englishDefinition: 'To say or write what someone or something is like.',
    examples: [{ english: 'Can you describe what happened?', chinese: '你能描述一下发生了什么吗？' }], collocations: ['describe a person', 'describe in detail'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'develop', term: 'develop', normalizedTerm: 'develop', partOfSpeech: ['verb'], ipa: '/dɪvˈɛləp/',
    chineseShort: '发展；开发', chineseExplanation: '逐渐成长、进步，或创造出新的产品、技能或想法。', englishDefinition: 'To grow or improve over time, or to create something new.',
    examples: [{ english: 'She developed better study habits this year.', chinese: '她今年养成了更好的学习习惯。' }], collocations: ['develop skills', 'develop a product'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'discover', term: 'discover', normalizedTerm: 'discover', partOfSpeech: ['verb'], ipa: '/dɪskˈʌvə/',
    chineseShort: '发现', chineseExplanation: '第一次找到、了解或注意到原本不知道的事物。', englishDefinition: 'To find or learn something for the first time.',
    examples: [{ english: 'We discovered a quiet café near the station.', chinese: '我们在车站附近发现了一家安静的咖啡馆。' }], collocations: ['discover a place', 'discover that'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'discuss', term: 'discuss', normalizedTerm: 'discuss', partOfSpeech: ['verb'], ipa: '/dɪskˈʌs/',
    chineseShort: '讨论', chineseExplanation: '与别人谈论某个主题，通常为了交换意见或作决定。', englishDefinition: 'To talk about a subject with other people in order to exchange ideas or decide something.',
    examples: [{ english: 'We discussed the problem after class.', chinese: '我们下课后讨论了这个问题。' }], collocations: ['discuss a problem', 'discuss with'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'divide', term: 'divide', normalizedTerm: 'divide', partOfSpeech: ['verb'], ipa: '/dɪvˈaɪd/',
    chineseShort: '分开；除以', chineseExplanation: '把整体分成若干部分，也可用于数学中的除法。', englishDefinition: 'To separate something into parts; also, to calculate how many times one number fits into another.',
    examples: [{ english: 'Divide the class into four groups.', chinese: '把全班分成四组。' }], collocations: ['divide into', 'divide by'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'earn', term: 'earn', normalizedTerm: 'earn', partOfSpeech: ['verb'], ipa: '/ˈɜːn/',
    chineseShort: '赚得；获得', chineseExplanation: '通过工作得到钱，也可通过努力获得尊重或信任。', englishDefinition: 'To receive money for work or gain something through effort.',
    examples: [{ english: 'She earns extra money by teaching online.', chinese: '她通过线上教学赚取额外收入。' }], collocations: ['earn money', 'earn respect'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'encourage', term: 'encourage', normalizedTerm: 'encourage', partOfSpeech: ['verb'], ipa: '/ɛnkˈʌɹɪdʒ/',
    chineseShort: '鼓励', chineseExplanation: '给予某人信心或支持，使其更愿意做某事。', englishDefinition: 'To give someone confidence or support to do something.',
    examples: [{ english: 'My teacher encouraged me to speak more English.', chinese: '老师鼓励我多说英语。' }], collocations: ['encourage someone to', 'strongly encourage'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'enter', term: 'enter', normalizedTerm: 'enter', partOfSpeech: ['verb'], ipa: '/ˈɛntə/',
    chineseShort: '进入；输入', chineseExplanation: '进入一个地方，也可把信息输入系统。', englishDefinition: 'To go into a place or put information into a system.',
    examples: [{ english: 'Enter your email address in the form.', chinese: '在表格中输入你的电子邮件地址。' }], collocations: ['enter a room', 'enter details'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'expect', term: 'expect', normalizedTerm: 'expect', partOfSpeech: ['verb'], ipa: '/ɛkspˈɛkt/',
    chineseShort: '预期；期待', chineseExplanation: '认为某事很可能发生，或期待某人做某事。', englishDefinition: 'To think that something is likely to happen or that someone should do something.',
    examples: [{ english: 'We expect the train to arrive at six.', chinese: '我们预计火车六点到达。' }], collocations: ['expect to', 'expect someone to'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'explain', term: 'explain', normalizedTerm: 'explain', partOfSpeech: ['verb'], ipa: '/ɛksplˈeɪn/',
    chineseShort: '解释', chineseExplanation: '通过提供细节或原因使某事更容易理解。', englishDefinition: 'To make something easier to understand by giving details or reasons.',
    examples: [{ english: 'Could you explain the rule again?', chinese: '你可以再解释一次这条规则吗？' }], collocations: ['explain a rule', 'explain why'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'fail', term: 'fail', normalizedTerm: 'fail', partOfSpeech: ['verb'], ipa: '/fˈeɪl/',
    chineseShort: '失败；未能', chineseExplanation: '没有成功做到某事，或没有通过测试。', englishDefinition: 'To be unsuccessful at something or not pass a test.',
    examples: [{ english: 'He failed to notice the warning sign.', chinese: '他没有注意到警告标志。' }], collocations: ['fail to', 'fail an exam'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'identify', term: 'identify', normalizedTerm: 'identify', partOfSpeech: ['verb'], ipa: '/aɪdˈɛntɪfˌaɪ/',
    chineseShort: '识别；确认身份', chineseExplanation: '认出某人或某物，或确定其名称、性质或原因。', englishDefinition: 'To recognize someone or something and say who or what it is.',
    examples: [{ english: 'The technician identified the cause of the problem.', chinese: '技术人员找出了问题的原因。' }], collocations: ['identify a problem', 'identify correctly'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'imagine', term: 'imagine', normalizedTerm: 'imagine', partOfSpeech: ['verb'], ipa: '/ɪmˈadʒɪn/',
    chineseShort: '想象', chineseExplanation: '在脑海中形成一个人、地方、情况或可能性的画面。', englishDefinition: 'To form a picture or idea of something in your mind.',
    examples: [{ english: 'Imagine living in a city without cars.', chinese: '想象一下住在一个没有汽车的城市里。' }], collocations: ['imagine doing', 'imagine that'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'include', term: 'include', normalizedTerm: 'include', partOfSpeech: ['verb'], ipa: '/ɪnklˈuːd/',
    chineseShort: '包括', chineseExplanation: '把某人或某物作为整体的一部分。', englishDefinition: 'To contain someone or something as part of a whole.',
    examples: [{ english: 'The price includes breakfast and Wi-Fi.', chinese: '这个价格包括早餐和无线网络。' }], collocations: ['include breakfast', 'include in'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'increase', term: 'increase', normalizedTerm: 'increase', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɪnkɹiːs/',
    chineseShort: '增加；提高', chineseExplanation: '使数量、程度或价格变大，或自己变大。', englishDefinition: 'To become larger in amount or level, or to make something larger.',
    examples: [{ english: 'The company plans to increase online sales.', chinese: '公司计划提高线上销售额。' }], collocations: ['increase prices', 'increase by'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'introduce', term: 'introduce', normalizedTerm: 'introduce', partOfSpeech: ['verb'], ipa: '/ˌɪntɹədjˈuːs/',
    chineseShort: '介绍；引入', chineseExplanation: '让人们互相认识，或首次提出新的事物或制度。', englishDefinition: 'To tell people who someone is; also, to bring in something new.',
    examples: [{ english: 'Let me introduce you to my colleague.', chinese: '让我介绍你认识我的同事。' }], collocations: ['introduce someone to', 'introduce a system'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'invite', term: 'invite', normalizedTerm: 'invite', partOfSpeech: ['verb'], ipa: '/ɪnvˈaɪt/',
    chineseShort: '邀请', chineseExplanation: '请某人参加活动、来到某地或做某事。', englishDefinition: 'To ask someone to come somewhere or take part in something.',
    examples: [{ english: 'They invited us to dinner on Saturday.', chinese: '他们邀请我们星期六共进晚餐。' }], collocations: ['invite someone to', 'invite guests'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lend', term: 'lend', normalizedTerm: 'lend', partOfSpeech: ['verb'], ipa: '/lˈɛnd/',
    chineseShort: '借出', chineseExplanation: '把自己的东西暂时给别人使用，并期望对方归还。', englishDefinition: 'To give something to someone for a short time and expect it back.',
    examples: [{ english: 'Could you lend me your umbrella?', chinese: '你可以把雨伞借给我吗？' }], collocations: ['lend money', 'lend someone something'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'manage', term: 'manage', normalizedTerm: 'manage', partOfSpeech: ['verb'], ipa: '/mˈanɪdʒ/',
    chineseShort: '设法做到；管理', chineseExplanation: '成功处理困难任务，也可负责管理人、项目或组织。', englishDefinition: 'To succeed in doing something difficult; also, to be responsible for people or work.',
    examples: [{ english: 'She managed to finish the report before lunch.', chinese: '她设法在午餐前完成了报告。' }], collocations: ['manage to', 'manage a team'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'mention', term: 'mention', normalizedTerm: 'mention', partOfSpeech: ['verb', 'noun'], ipa: '/mˈɛnʃən/',
    chineseShort: '提到', chineseExplanation: '在说话或写作中简短地说到某人或某事。', englishDefinition: 'To refer to someone or something briefly in speech or writing.',
    examples: [{ english: 'He mentioned your name during the meeting.', chinese: '他在会议中提到了你的名字。' }], collocations: ['mention a name', 'mention that'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'notice', term: 'notice', normalizedTerm: 'notice', partOfSpeech: ['verb', 'noun'], ipa: '/nˈəʊtɪs/',
    chineseShort: '注意到；通知', chineseExplanation: '看到或意识到某事，也可指正式的书面通知。', englishDefinition: 'To become aware of something; as a noun, a written announcement.',
    examples: [{ english: 'I noticed a small mistake in the email.', chinese: '我注意到邮件里有一个小错误。' }], collocations: ['notice a difference', 'notice that'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'offer', term: 'offer', normalizedTerm: 'offer', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɒfə/',
    chineseShort: '提供；提议', chineseExplanation: '表示愿意给予某物、帮助或机会。', englishDefinition: 'To say that you are willing to give something or do something for someone.',
    examples: [{ english: 'He offered to help me carry the bags.', chinese: '他主动提出帮我拿袋子。' }], collocations: ['offer help', 'offer to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'organize', term: 'organize', normalizedTerm: 'organize', partOfSpeech: ['verb'], ipa: '/ˈɔːɡɐnˌaɪz/',
    chineseShort: '组织；整理', chineseExplanation: '安排活动或任务，也可把物品整理得有条理。', englishDefinition: 'To plan an activity or arrange things in an orderly way.',
    examples: [{ english: 'We organized a small event for new students.', chinese: '我们为新生组织了一个小活动。' }], collocations: ['organize an event', 'organize files'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'perform', term: 'perform', normalizedTerm: 'perform', partOfSpeech: ['verb'], ipa: '/pəfˈɔːm/',
    chineseShort: '表演；执行', chineseExplanation: '在观众面前演出，或完成某项任务、职责或操作。', englishDefinition: 'To entertain an audience or carry out a task or duty.',
    examples: [{ english: 'The band will perform at the festival tonight.', chinese: '乐队今晚会在节日活动中表演。' }], collocations: ['perform well', 'perform a task'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'prefer', term: 'prefer', normalizedTerm: 'prefer', partOfSpeech: ['verb'], ipa: '/pɹɪfˈɜː/',
    chineseShort: '更喜欢', chineseExplanation: '在两个或多个选择中更喜欢其中一个。', englishDefinition: 'To like one person or thing more than another.',
    examples: [{ english: 'I prefer travelling by train.', chinese: '我更喜欢乘火车旅行。' }], collocations: ['prefer to', 'prefer A to B'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'prepare', term: 'prepare', normalizedTerm: 'prepare', partOfSpeech: ['verb'], ipa: '/pɹɪpˈeə/',
    chineseShort: '准备', chineseExplanation: '提前做好需要的工作，使自己或某物为之后的活动做好准备。', englishDefinition: 'To make yourself or something ready for a future activity.',
    examples: [{ english: 'We prepared some questions for the interview.', chinese: '我们为面试准备了一些问题。' }], collocations: ['prepare for', 'prepare a meal'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'prevent', term: 'prevent', normalizedTerm: 'prevent', partOfSpeech: ['verb'], ipa: '/pɹɪvˈɛnt/',
    chineseShort: '防止；阻止', chineseExplanation: '使某事不发生，或阻止某人做某事。', englishDefinition: 'To stop something from happening or stop someone from doing something.',
    examples: [{ english: 'Regular backups can prevent data loss.', chinese: '定期备份可以防止数据丢失。' }], collocations: ['prevent damage', 'prevent someone from'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'promise', term: 'promise', normalizedTerm: 'promise', partOfSpeech: ['verb', 'noun'], ipa: '/pɹˈɒmɪs/',
    chineseShort: '承诺', chineseExplanation: '明确表示自己会做某事或某事一定会发生。', englishDefinition: 'To say clearly that you will definitely do something.',
    examples: [{ english: 'I promise to call you after work.', chinese: '我答应下班后给你打电话。' }], collocations: ['promise to', 'keep a promise'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'protect', term: 'protect', normalizedTerm: 'protect', partOfSpeech: ['verb'], ipa: '/pɹətˈɛkt/',
    chineseShort: '保护', chineseExplanation: '使某人或某物免受伤害、损坏或危险。', englishDefinition: 'To keep someone or something safe from harm or damage.',
    examples: [{ english: 'Wear sunscreen to protect your skin.', chinese: '涂防晒霜来保护皮肤。' }], collocations: ['protect from', 'protect the environment'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'provide', term: 'provide', normalizedTerm: 'provide', partOfSpeech: ['verb'], ipa: '/pɹəvˈaɪd/',
    chineseShort: '提供', chineseExplanation: '给予某人需要的东西、信息、服务或机会。', englishDefinition: 'To give someone something they need, such as information or a service.',
    examples: [{ english: 'The hotel provides free breakfast.', chinese: '这家酒店提供免费早餐。' }], collocations: ['provide information', 'provide someone with'], level: 2, cefr: 'B1', categories: ['Business', 'Travel'],
  },
  {
    id: 'realize', term: 'realize', normalizedTerm: 'realize', partOfSpeech: ['verb'], ipa: '/ɹˈiəlaɪz/',
    chineseShort: '意识到；实现', chineseExplanation: '突然理解或意识到某事，也可表示让计划成为现实。', englishDefinition: 'To become aware of something; also, to make a plan or hope become real.',
    examples: [{ english: 'I realized that I had left my keys at home.', chinese: '我意识到自己把钥匙落在家里了。' }], collocations: ['realize that', 'realize a dream'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'receive', term: 'receive', normalizedTerm: 'receive', partOfSpeech: ['verb'], ipa: '/ɹɪsˈiːv/',
    chineseShort: '收到；接收', chineseExplanation: '得到别人发送、给予或交付的东西。', englishDefinition: 'To get something that someone sends, gives, or delivers.',
    examples: [{ english: 'Did you receive my message yesterday?', chinese: '你昨天收到我的信息了吗？' }], collocations: ['receive a message', 'receive payment'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'reduce', term: 'reduce', normalizedTerm: 'reduce', partOfSpeech: ['verb'], ipa: '/ɹɪdjˈuːs/',
    chineseShort: '减少；降低', chineseExplanation: '使数量、价格、风险或程度变小。', englishDefinition: 'To make something smaller in amount, level, or size.',
    examples: [{ english: 'We are trying to reduce our electricity use.', chinese: '我们正在努力减少用电量。' }], collocations: ['reduce costs', 'reduce risk'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'refuse', term: 'refuse', normalizedTerm: 'refuse', partOfSpeech: ['verb'], ipa: '/ɹɪfjˈuːz/',
    chineseShort: '拒绝', chineseExplanation: '明确表示不愿接受、给予或做某事。', englishDefinition: 'To say that you will not accept, give, or do something.',
    examples: [{ english: 'She refused to sign the document.', chinese: '她拒绝在文件上签字。' }], collocations: ['refuse to', 'refuse an offer'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'repair', term: 'repair', normalizedTerm: 'repair', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪpˈeə/',
    chineseShort: '修理', chineseExplanation: '把损坏或不能正常工作的东西恢复到可使用状态。', englishDefinition: 'To fix something that is damaged or not working properly.',
    examples: [{ english: 'The shop repaired my phone in one day.', chinese: '那家店一天内修好了我的手机。' }], collocations: ['repair a phone', 'repair damage'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'repeat', term: 'repeat', normalizedTerm: 'repeat', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪpˈiːt/',
    chineseShort: '重复', chineseExplanation: '再次说、写或做同样的事情。', englishDefinition: 'To say, write, or do something again.',
    examples: [{ english: 'Could you repeat the question, please?', chinese: '请你再重复一次问题好吗？' }], collocations: ['repeat a question', 'repeat after'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'replace', term: 'replace', normalizedTerm: 'replace', partOfSpeech: ['verb'], ipa: '/ɹɪplˈeɪs/',
    chineseShort: '替换；更换', chineseExplanation: '用新的或不同的东西代替原来的东西。', englishDefinition: 'To take the place of something with a new or different thing.',
    examples: [{ english: 'We need to replace the old battery.', chinese: '我们需要更换旧电池。' }], collocations: ['replace with', 'replace a part'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'reply', term: 'reply', normalizedTerm: 'reply', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪplˈaɪ/',
    chineseShort: '回复', chineseExplanation: '回答别人说的话、信息或邮件。', englishDefinition: 'To answer someone in speech, writing, or a message.',
    examples: [{ english: 'Please reply to the email by Friday.', chinese: '请在星期五前回复这封邮件。' }], collocations: ['reply to', 'reply quickly'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'report', term: 'report', normalizedTerm: 'report', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪpˈɔːt/',
    chineseShort: '报告；举报', chineseExplanation: '提供关于事件或情况的信息，也可向有关人员报告问题。', englishDefinition: 'To give information about an event or situation, especially officially.',
    examples: [{ english: 'Please report any technical problems to support.', chinese: '如有技术问题，请向客服报告。' }], collocations: ['report a problem', 'report to'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'save', term: 'save', normalizedTerm: 'save', partOfSpeech: ['verb', 'noun'], ipa: '/sˈeɪv/',
    chineseShort: '节省；保存；拯救', chineseExplanation: '少花钱、时间或资源，也可保存数据或使人脱离危险。', englishDefinition: 'To use less time, money, or resources; also, to store data or rescue someone.',
    examples: [{ english: 'This shortcut can save you a lot of time.', chinese: '这个快捷方式可以帮你节省很多时间。' }], collocations: ['save time', 'save money'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'search', term: 'search', normalizedTerm: 'search', partOfSpeech: ['verb', 'noun'], ipa: '/sˈɜːtʃ/',
    chineseShort: '搜索；寻找', chineseExplanation: '仔细寻找某人、某物或信息。', englishDefinition: 'To look carefully for someone, something, or information.',
    examples: [{ english: 'I searched online for a cheaper ticket.', chinese: '我在网上搜索更便宜的票。' }], collocations: ['search for', 'search online'], level: 2, cefr: 'B1', categories: ['Technology', 'Travel'],
  },
  {
    id: 'select', term: 'select', normalizedTerm: 'select', partOfSpeech: ['verb'], ipa: '/sɪlˈɛkt/',
    chineseShort: '选择', chineseExplanation: '从多个选项中挑选一个或一些。', englishDefinition: 'To choose someone or something from a group of options.',
    examples: [{ english: 'Select your preferred language from the menu.', chinese: '从菜单中选择你偏好的语言。' }], collocations: ['select an option', 'carefully select'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'share', term: 'share', normalizedTerm: 'share', partOfSpeech: ['verb', 'noun'], ipa: '/ʃˈeə/',
    chineseShort: '分享；共同使用', chineseExplanation: '把信息、想法或物品给别人，或与别人共同使用。', englishDefinition: 'To give information or things to others, or use something together.',
    examples: [{ english: 'She shared the document with the whole team.', chinese: '她把文件分享给了整个团队。' }], collocations: ['share information', 'share with'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'solve', term: 'solve', normalizedTerm: 'solve', partOfSpeech: ['verb'], ipa: '/sˈɒlv/',
    chineseShort: '解决；解答', chineseExplanation: '找到问题、困难或题目的答案。', englishDefinition: 'To find an answer to a problem, difficulty, or question.',
    examples: [{ english: 'We need to solve this problem before launch.', chinese: '我们需要在上线前解决这个问题。' }], collocations: ['solve a problem', 'solve an issue'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'suggest', term: 'suggest', normalizedTerm: 'suggest', partOfSpeech: ['verb'], ipa: '/sədʒˈɛst/',
    chineseShort: '建议；暗示', chineseExplanation: '提出一个想法或行动供别人考虑，也可间接表明某事。', englishDefinition: 'To give an idea for someone to consider; also, to indicate something indirectly.',
    examples: [{ english: 'I suggest taking an earlier train.', chinese: '我建议搭较早的一班火车。' }], collocations: ['suggest doing', 'suggest that'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'support', term: 'support', normalizedTerm: 'support', partOfSpeech: ['verb', 'noun'], ipa: '/səpˈɔːt/',
    chineseShort: '支持；支撑', chineseExplanation: '给予某人帮助、鼓励或资源，也可支撑某个物体。', englishDefinition: 'To help or encourage someone, or hold something in position.',
    examples: [{ english: 'My family supported my decision to study abroad.', chinese: '我的家人支持我出国留学的决定。' }], collocations: ['support a decision', 'support someone'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'suppose', term: 'suppose', normalizedTerm: 'suppose', partOfSpeech: ['verb'], ipa: '/sʌpˈəʊz/',
    chineseShort: '认为；假设', chineseExplanation: '认为某事可能是真的，或为了讨论而假设一种情况。', englishDefinition: 'To think something is probably true or imagine a situation for discussion.',
    examples: [{ english: 'I suppose we could meet after lunch.', chinese: '我想我们可以午饭后见面。' }], collocations: ['suppose that', 'be supposed to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'survive', term: 'survive', normalizedTerm: 'survive', partOfSpeech: ['verb'], ipa: '/səvˈaɪv/',
    chineseShort: '生存；挺过', chineseExplanation: '在危险、困难或严重事件后继续活着或存在。', englishDefinition: 'To continue to live or exist after danger or difficulty.',
    examples: [{ english: 'The small business survived a difficult year.', chinese: '这家小企业挺过了艰难的一年。' }], collocations: ['survive an accident', 'survive on'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'trust', term: 'trust', normalizedTerm: 'trust', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈʌst/',
    chineseShort: '信任', chineseExplanation: '相信某人诚实可靠，或相信某事物能够正常运作。', englishDefinition: 'To believe that someone is honest and reliable or that something will work properly.',
    examples: [{ english: 'I trust her to make the right decision.', chinese: '我相信她会做出正确的决定。' }], collocations: ['trust someone', 'trust in'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'update', term: 'update', normalizedTerm: 'update', partOfSpeech: ['verb', 'noun'], ipa: '/ˈʌpdeɪt/',
    chineseShort: '更新', chineseExplanation: '加入最新信息，使内容、软件或记录保持最新。', englishDefinition: 'To add the newest information or make software or records current.',
    examples: [{ english: 'Please update the app before you continue.', chinese: '继续之前请先更新应用程序。' }], collocations: ['update an app', 'update information'], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'waste', term: 'waste', normalizedTerm: 'waste', partOfSpeech: ['verb', 'noun'], ipa: '/wˈeɪst/',
    chineseShort: '浪费', chineseExplanation: '不必要地使用时间、金钱、食物或其他资源。', englishDefinition: 'To use time, money, food, or other resources unnecessarily.',
    examples: [{ english: 'Do not waste water when washing the dishes.', chinese: '洗碗时不要浪费水。' }], collocations: ['waste time', 'waste money'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'worry', term: 'worry', normalizedTerm: 'worry', partOfSpeech: ['verb', 'noun'], ipa: '/wˈʌɹi/',
    chineseShort: '担心', chineseExplanation: '因为可能发生的问题而感到不安或焦虑。', englishDefinition: 'To feel anxious because of a possible problem.',
    examples: [{ english: 'Do not worry about the small delay.', chinese: '不要担心这点小延误。' }], collocations: ['worry about', 'make someone worry'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'appear', term: 'appear', normalizedTerm: 'appear', partOfSpeech: ['verb'], ipa: '/ɐpˈiə/',
    chineseShort: '出现；似乎', chineseExplanation: '进入视线或变得可见，也可表示看起来像某种情况。', englishDefinition: 'To become visible; also, to seem to be a particular way.',
    examples: [{ english: 'A warning message appeared on the screen.', chinese: '屏幕上出现了一条警告信息。' }], collocations: ['appear on', 'appear to be'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'attend', term: 'attend', normalizedTerm: 'attend', partOfSpeech: ['verb'], ipa: '/ɐtˈɛnd/',
    chineseShort: '参加；出席', chineseExplanation: '去参加会议、课程、活动或仪式。', englishDefinition: 'To go to and be present at a meeting, class, event, or ceremony.',
    examples: [{ english: 'More than fifty people attended the workshop.', chinese: '五十多人参加了这次工作坊。' }], collocations: ['attend a meeting', 'attend school'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'cause', term: 'cause', normalizedTerm: 'cause', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɔːz/',
    chineseShort: '造成；引起', chineseExplanation: '使某个事件、问题或结果发生。', englishDefinition: 'To make something happen, especially a problem or result.',
    examples: [{ english: 'Heavy rain caused several delays.', chinese: '大雨造成了多次延误。' }], collocations: ['cause a problem', 'cause damage'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'contact', term: 'contact', normalizedTerm: 'contact', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɒntakt/',
    chineseShort: '联系', chineseExplanation: '通过电话、邮件或其他方式与某人取得联系。', englishDefinition: 'To communicate with someone by phone, email, or another method.',
    examples: [{ english: 'Contact the hotel if your plans change.', chinese: '如果计划改变，请联系酒店。' }], collocations: ['contact customer service', 'contact someone'], level: 2, cefr: 'B1', categories: ['Business', 'Travel'],
  },
  {
    id: 'deal', term: 'deal', normalizedTerm: 'deal', partOfSpeech: ['verb', 'noun'], ipa: '/dˈiːl/',
    chineseShort: '处理；应对', chineseExplanation: '采取行动处理问题、任务或困难情况。', englishDefinition: 'To take action to handle a problem, task, or situation.',
    examples: [{ english: 'We need to deal with this complaint today.', chinese: '我们今天需要处理这项投诉。' }], collocations: ['deal with', 'deal directly with'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'decrease', term: 'decrease', normalizedTerm: 'decrease', partOfSpeech: ['verb', 'noun'], ipa: '/dˈiːkɹiːs/',
    chineseShort: '减少；下降', chineseExplanation: '数量、价格、速度或程度变小，或使其变小。', englishDefinition: 'To become smaller in amount or level, or make something smaller.',
    examples: [{ english: 'Traffic usually decreases after nine o\'clock.', chinese: '九点后交通量通常会减少。' }], collocations: ['decrease by', 'decrease in'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'disappear', term: 'disappear', normalizedTerm: 'disappear', partOfSpeech: ['verb'], ipa: '/dˌɪsɐpˈiə/',
    chineseShort: '消失', chineseExplanation: '从视线中不见，或不再存在。', englishDefinition: 'To stop being visible or stop existing.',
    examples: [{ english: 'The clouds disappeared by the afternoon.', chinese: '到了下午云就消失了。' }], collocations: ['disappear completely', 'disappear from'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'enjoy', term: 'enjoy', normalizedTerm: 'enjoy', partOfSpeech: ['verb'], ipa: '/ɛndʒˈɔɪ/',
    chineseShort: '享受；喜欢', chineseExplanation: '从某项活动、经历或事物中获得快乐。', englishDefinition: 'To get pleasure from an activity, experience, or thing.',
    examples: [{ english: 'I really enjoyed the museum tour.', chinese: '我非常喜欢这次博物馆参观。' }], collocations: ['enjoy doing', 'enjoy a meal'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'escape', term: 'escape', normalizedTerm: 'escape', partOfSpeech: ['verb', 'noun'], ipa: '/ɛskˈeɪp/',
    chineseShort: '逃离；逃脱', chineseExplanation: '从危险、限制或不愉快的地方成功离开。', englishDefinition: 'To get away from a dangerous, restricted, or unpleasant place.',
    examples: [{ english: 'The family escaped from the building safely.', chinese: '这家人安全地逃出了大楼。' }], collocations: ['escape from', 'escape danger'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'examine', term: 'examine', normalizedTerm: 'examine', partOfSpeech: ['verb'], ipa: '/ɛɡzˈamɪn/',
    chineseShort: '检查；考察', chineseExplanation: '仔细观察或研究某人、某物或问题。', englishDefinition: 'To look at or study someone or something carefully.',
    examples: [{ english: 'The doctor examined my injured hand.', chinese: '医生检查了我受伤的手。' }], collocations: ['examine a patient', 'examine carefully'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'exist', term: 'exist', normalizedTerm: 'exist', partOfSpeech: ['verb'], ipa: '/ɛɡzˈɪst/',
    chineseShort: '存在', chineseExplanation: '在现实中有、生活或发生。', englishDefinition: 'To be real, present, or alive.',
    examples: [{ english: 'Several different solutions already exist.', chinese: '已经存在几种不同的解决方案。' }], collocations: ['still exist', 'exist in'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'express', term: 'express', normalizedTerm: 'express', partOfSpeech: ['verb'], ipa: '/ɛkspɹˈɛs/',
    chineseShort: '表达', chineseExplanation: '通过语言、行为、艺术或其他方式表现想法和感受。', englishDefinition: 'To show or communicate thoughts and feelings through words, actions, or art.',
    examples: [{ english: 'She expressed her opinion politely.', chinese: '她礼貌地表达了自己的意见。' }], collocations: ['express an opinion', 'express feelings'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'fit', term: 'fit', normalizedTerm: 'fit', partOfSpeech: ['verb'], ipa: '/fˈɪt/',
    chineseShort: '适合；合身', chineseExplanation: '大小或形状合适，也可表示与需求或情况相匹配。', englishDefinition: 'To be the right size or shape, or to be suitable for a purpose.',
    examples: [{ english: 'This table will fit in the corner.', chinese: '这张桌子能放进那个角落。' }], collocations: ['fit well', 'fit into'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'handle', term: 'handle', normalizedTerm: 'handle', partOfSpeech: ['verb', 'noun'], ipa: '/hˈandəl/',
    chineseShort: '处理；操作', chineseExplanation: '有效处理情况、任务或问题，也可用手操作物品。', englishDefinition: 'To deal with a situation or task successfully; also, to operate something with your hands.',
    examples: [{ english: 'She handled the difficult customer calmly.', chinese: '她冷静地处理了那位难应付的顾客。' }], collocations: ['handle a problem', 'handle carefully'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'influence', term: 'influence', normalizedTerm: 'influence', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɪnfluːəns/',
    chineseShort: '影响', chineseExplanation: '改变某人的想法、行为，或影响事情的发展结果。', englishDefinition: 'To affect the way someone thinks or acts, or how a situation develops.',
    examples: [{ english: 'Friends can influence our choices.', chinese: '朋友可能会影响我们的选择。' }], collocations: ['influence a decision', 'strongly influence'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'inform', term: 'inform', normalizedTerm: 'inform', partOfSpeech: ['verb'], ipa: '/ɪnfˈɔːm/',
    chineseShort: '通知；告知', chineseExplanation: '正式或清楚地告诉某人事实、决定或最新情况。', englishDefinition: 'To tell someone facts, decisions, or new information.',
    examples: [{ english: 'Please inform us if your address changes.', chinese: '如果你的地址有变化，请通知我们。' }], collocations: ['inform someone of', 'keep informed'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'interview', term: 'interview', normalizedTerm: 'interview', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɪntəvjˌuː/',
    chineseShort: '采访；面试', chineseExplanation: '向某人提问以获取信息，或评估其是否适合工作或课程。', englishDefinition: 'To ask someone questions for information or to judge whether they are suitable for a job or course.',
    examples: [{ english: 'The company interviewed three candidates today.', chinese: '公司今天面试了三名候选人。' }], collocations: ['interview a candidate', 'job interview'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'involve', term: 'involve', normalizedTerm: 'involve', partOfSpeech: ['verb'], ipa: '/ɪnvˈɒlv/',
    chineseShort: '涉及；需要', chineseExplanation: '包括某项活动、人员或过程作为必要部分。', englishDefinition: 'To include an activity, person, or process as a necessary part.',
    examples: [{ english: 'The job involves working with customers.', chinese: '这份工作需要与顾客打交道。' }], collocations: ['involve doing', 'be involved in'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'lead', term: 'lead', normalizedTerm: 'lead', partOfSpeech: ['verb', 'noun'], ipa: '/lˈiːd/',
    chineseShort: '带领；导致', chineseExplanation: '带领别人前往某处或指导团队，也可引起某个结果。', englishDefinition: 'To guide people or be in charge; also, to cause a result.',
    examples: [{ english: 'She will lead the project next month.', chinese: '她下个月将负责带领这个项目。' }], collocations: ['lead a team', 'lead to'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'matter', term: 'matter', normalizedTerm: 'matter', partOfSpeech: ['verb', 'noun'], ipa: '/mˈatə/',
    chineseShort: '要紧；有关系', chineseExplanation: '表示某事重要并会影响情况或结果。', englishDefinition: 'To be important or have an effect on a situation.',
    examples: [{ english: 'It does not matter which seat you choose.', chinese: '你选哪个座位都没关系。' }], collocations: ['matter to', 'it matters'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'occur', term: 'occur', normalizedTerm: 'occur', partOfSpeech: ['verb'], ipa: '/əkˈɜː/',
    chineseShort: '发生', chineseExplanation: '事件或情况在某个时间或地点出现。', englishDefinition: 'To happen, especially at a particular time or place.',
    examples: [{ english: 'The problem usually occurs after the update.', chinese: '这个问题通常在更新后发生。' }], collocations: ['occur frequently', 'occur during'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'participate', term: 'participate', normalizedTerm: 'participate', partOfSpeech: ['verb'], ipa: '/pɑːtˈɪsɪpˌeɪt/',
    chineseShort: '参加；参与', chineseExplanation: '加入某项活动、讨论或事件并积极参与。', englishDefinition: 'To take part in an activity, discussion, or event.',
    examples: [{ english: 'Everyone is encouraged to participate in the discussion.', chinese: '鼓励每个人参与讨论。' }], collocations: ['participate in', 'actively participate'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'ability', term: 'ability', normalizedTerm: 'ability', partOfSpeech: ['noun'], ipa: '/ɐbˈɪləti/',
    chineseShort: '能力；才能', chineseExplanation: '完成某事所需要的技能、知识或天赋。', englishDefinition: 'The skill or power needed to do something.',
    examples: [{ english: 'Her ability to explain ideas clearly is useful at work.', chinese: '她清楚解释想法的能力在工作中很有用。' }], collocations: ['have the ability', 'natural ability'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'accident', term: 'accident', normalizedTerm: 'accident', partOfSpeech: ['noun'], ipa: '/ˈaksɪdənt/',
    chineseShort: '事故；意外', chineseExplanation: '没有计划并可能造成伤害或损失的事件。', englishDefinition: 'An unexpected event that may cause damage or injury.',
    examples: [{ english: 'There was a minor accident near the station.', chinese: '车站附近发生了一起轻微事故。' }], collocations: ['car accident', 'by accident'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'advantage', term: 'advantage', normalizedTerm: 'advantage', partOfSpeech: ['noun'], ipa: '/ɐdvˈantɪdʒ/',
    chineseShort: '优势；好处', chineseExplanation: '使某人或某事处于更有利位置的条件。', englishDefinition: 'A condition that makes someone or something more likely to succeed.',
    examples: [{ english: 'One advantage of online study is flexibility.', chinese: '在线学习的一个优势是灵活。' }], collocations: ['main advantage', 'have an advantage'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'advice', term: 'advice', normalizedTerm: 'advice', partOfSpeech: ['noun'], ipa: '/ɐdvˈaɪs/',
    chineseShort: '建议；忠告', chineseExplanation: '针对某种情况应该怎么做而提出的意见。', englishDefinition: 'An opinion about what someone should do in a particular situation.',
    examples: [{ english: 'She gave me useful advice about the interview.', chinese: '她给了我关于面试的有用建议。' }], collocations: ['give advice', 'piece of advice'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'amount', term: 'amount', normalizedTerm: 'amount', partOfSpeech: ['noun'], ipa: '/ɐmˈaʊnt/',
    chineseShort: '数量；金额', chineseExplanation: '某种东西的总量，尤其用于不可数名词或金钱。', englishDefinition: 'A quantity of something, especially something uncountable or money.',
    examples: [{ english: 'We spent a large amount of time on the project.', chinese: '我们在这个项目上花了大量时间。' }], collocations: ['large amount', 'total amount'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'article', term: 'article', normalizedTerm: 'article', partOfSpeech: ['noun'], ipa: '/ˈɑːtɪkəl/',
    chineseShort: '文章；物品', chineseExplanation: '报纸、杂志或网站中的一篇文字，也可指一件物品。', englishDefinition: 'A piece of writing in a newspaper, magazine, or website; also, an item.',
    examples: [{ english: 'I read an interesting article about city transport.', chinese: '我读了一篇关于城市交通的有趣文章。' }], collocations: ['news article', 'online article'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'attention', term: 'attention', normalizedTerm: 'attention', partOfSpeech: ['noun'], ipa: '/ɐtˈɛnʃən/',
    chineseShort: '注意；关注', chineseExplanation: '集中在某人或某事上的观察和思考。', englishDefinition: 'Careful notice or thought given to someone or something.',
    examples: [{ english: 'Please pay attention to the safety instructions.', chinese: '请注意安全说明。' }], collocations: ['pay attention', 'get attention'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'audience', term: 'audience', normalizedTerm: 'audience', partOfSpeech: ['noun'], ipa: '/ˈɔːdiəns/',
    chineseShort: '观众；听众', chineseExplanation: '观看表演、听演讲或接收媒体内容的人群。', englishDefinition: 'The people who watch a performance, listen to a talk, or receive media.',
    examples: [{ english: 'The speaker answered questions from the audience.', chinese: '演讲者回答了听众的问题。' }], collocations: ['large audience', 'target audience'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'background', term: 'background', normalizedTerm: 'background', partOfSpeech: ['noun'], ipa: '/bˈakɡɹaʊnd/',
    chineseShort: '背景；经历', chineseExplanation: '某人过去的经历，或事件发生的相关情况。', englishDefinition: 'A person\'s past experience or the circumstances behind a situation.',
    examples: [{ english: 'She has a background in customer service.', chinese: '她有客户服务方面的工作背景。' }], collocations: ['work background', 'background information'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'behavior', term: 'behavior', normalizedTerm: 'behavior', partOfSpeech: ['noun'], ipa: '/bɪhˈeɪvjə/',
    chineseShort: '行为；举止', chineseExplanation: '某人在特定情况下行动和表现的方式。', englishDefinition: 'The way a person acts, especially in a particular situation.',
    examples: [{ english: 'Good behavior is expected during the trip.', chinese: '旅行期间应保持良好行为。' }], collocations: ['good behavior', 'change behavior'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'benefit', term: 'benefit', normalizedTerm: 'benefit', partOfSpeech: ['noun'], ipa: '/bˈɛnɪfˌɪt/',
    chineseShort: '好处；益处', chineseExplanation: '某事带来的积极结果或帮助。', englishDefinition: 'A helpful or positive result of something.',
    examples: [{ english: 'Regular exercise has many health benefits.', chinese: '规律运动有很多健康益处。' }], collocations: ['health benefit', 'main benefit'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'bill', term: 'bill', normalizedTerm: 'bill', partOfSpeech: ['noun'], ipa: '/bˈɪl/',
    chineseShort: '账单；法案', chineseExplanation: '需要支付的费用清单，也可指提交讨论的法律提案。', englishDefinition: 'A statement showing money owed; also, a proposed law.',
    examples: [{ english: 'Could we have the bill, please?', chinese: '请给我们账单好吗？' }], collocations: ['pay a bill', 'electricity bill'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'border', term: 'border', normalizedTerm: 'border', partOfSpeech: ['noun'], ipa: '/bˈɔːdə/',
    chineseShort: '边界；国界', chineseExplanation: '两个地区或国家之间的分界线。', englishDefinition: 'The line separating two areas or countries.',
    examples: [{ english: 'We crossed the border by bus.', chinese: '我们乘巴士越过了国界。' }], collocations: ['cross the border', 'border control'], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'career', term: 'career', normalizedTerm: 'career', partOfSpeech: ['noun'], ipa: '/kəɹˈiə/',
    chineseShort: '职业；事业', chineseExplanation: '一个人在较长时期内从事并发展的工作领域。', englishDefinition: 'The type of work a person does and develops over many years.',
    examples: [{ english: 'She wants a career in technology.', chinese: '她想从事科技行业。' }], collocations: ['career choice', 'career development'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'challenge', term: 'challenge', normalizedTerm: 'challenge', partOfSpeech: ['noun'], ipa: '/tʃˈalɪndʒ/',
    chineseShort: '挑战；难题', chineseExplanation: '需要努力、技能或勇气才能完成或解决的事情。', englishDefinition: 'Something difficult that requires effort, skill, or courage.',
    examples: [{ english: 'Learning to speak confidently can be a challenge.', chinese: '学会自信地说话可能是一个挑战。' }], collocations: ['face a challenge', 'new challenge'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'choice', term: 'choice', normalizedTerm: 'choice', partOfSpeech: ['noun'], ipa: '/tʃˈɔɪs/',
    chineseShort: '选择；选项', chineseExplanation: '在多个可能性中进行选择的行为或可选择的事物。', englishDefinition: 'An act of choosing or one of several possible options.',
    examples: [{ english: 'You have a choice between two payment methods.', chinese: '你可以在两种付款方式之间选择。' }], collocations: ['make a choice', 'good choice'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'communication', term: 'communication', normalizedTerm: 'communication', partOfSpeech: ['noun'], ipa: '/kəmjˌuːnɪkˈeɪʃən/',
    chineseShort: '沟通；交流', chineseExplanation: '人与人之间传递信息、想法或感受的过程。', englishDefinition: 'The process of exchanging information, ideas, or feelings.',
    examples: [{ english: 'Clear communication helps teams work better.', chinese: '清楚的沟通能帮助团队更好地合作。' }], collocations: ['effective communication', 'communication skills'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'community', term: 'community', normalizedTerm: 'community', partOfSpeech: ['noun'], ipa: '/kəmjˈuːnɪti/',
    chineseShort: '社区；群体', chineseExplanation: '住在同一地区或有共同兴趣、身份的人群。', englishDefinition: 'A group of people living in the same area or sharing an interest.',
    examples: [{ english: 'The local community organized a clean-up day.', chinese: '当地社区组织了一次清洁活动。' }], collocations: ['local community', 'online community'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'competition', term: 'competition', normalizedTerm: 'competition', partOfSpeech: ['noun'], ipa: '/kˌɒmpətˈɪʃən/',
    chineseShort: '比赛；竞争', chineseExplanation: '个人或团体为获胜、获得机会或资源而竞争的活动。', englishDefinition: 'An activity or situation in which people or groups try to win or succeed.',
    examples: [{ english: 'Our school entered a writing competition.', chinese: '我们学校参加了写作比赛。' }], collocations: ['win a competition', 'strong competition'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'condition', term: 'condition', normalizedTerm: 'condition', partOfSpeech: ['noun'], ipa: '/kəndˈɪʃən/',
    chineseShort: '状况；条件', chineseExplanation: '某人或某物目前的状态，也可指必须满足的要求。', englishDefinition: 'The state something is in; also, a requirement that must be met.',
    examples: [{ english: 'The phone is still in good condition.', chinese: '这部手机的状况仍然很好。' }], collocations: ['good condition', 'working conditions'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'connection', term: 'connection', normalizedTerm: 'connection', partOfSpeech: ['noun'], ipa: '/kənˈɛkʃən/',
    chineseShort: '连接；关系', chineseExplanation: '两个事物之间的联系，也可指网络或交通连接。', englishDefinition: 'A link or relationship between things; also, a network or transport link.',
    examples: [{ english: 'The hotel has a fast internet connection.', chinese: '这家酒店的网络连接很快。' }], collocations: ['internet connection', 'close connection'], level: 2, cefr: 'B1', categories: ['Technology', 'Travel'],
  },
  {
    id: 'culture', term: 'culture', normalizedTerm: 'culture', partOfSpeech: ['noun'], ipa: '/kˈʌltʃə/',
    chineseShort: '文化', chineseExplanation: '某个社会或群体共有的习俗、信念、艺术和生活方式。', englishDefinition: 'The customs, beliefs, arts, and way of life shared by a society or group.',
    examples: [{ english: 'Food is an important part of local culture.', chinese: '食物是当地文化的重要部分。' }], collocations: ['local culture', 'popular culture'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'customer', term: 'customer', normalizedTerm: 'customer', partOfSpeech: ['noun'], ipa: '/kˈʌstəmə/',
    chineseShort: '顾客；客户', chineseExplanation: '购买商品或服务的人。', englishDefinition: 'A person who buys goods or services.',
    examples: [{ english: 'The shop offers discounts to regular customers.', chinese: '这家店为常客提供折扣。' }], collocations: ['customer service', 'regular customer'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'decision', term: 'decision', normalizedTerm: 'decision', partOfSpeech: ['noun'], ipa: '/dɪsˈɪʒən/',
    chineseShort: '决定', chineseExplanation: '经过考虑后作出的选择或判断。', englishDefinition: 'A choice or judgment made after thinking about something.',
    examples: [{ english: 'We need to make a decision by Friday.', chinese: '我们需要在星期五前作出决定。' }], collocations: ['make a decision', 'final decision'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'degree', term: 'degree', normalizedTerm: 'degree', partOfSpeech: ['noun'], ipa: '/dɪɡɹˈiː/',
    chineseShort: '程度；学位；度', chineseExplanation: '表示程度的数量，也可指大学学位或温度单位。', englishDefinition: 'A level or amount; also, a university qualification or a unit of temperature.',
    examples: [{ english: 'She completed a degree in business.', chinese: '她完成了商业学位课程。' }], collocations: ['university degree', 'to some degree'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'detail', term: 'detail', normalizedTerm: 'detail', partOfSpeech: ['noun'], ipa: '/dˈiːteɪl/',
    chineseShort: '细节', chineseExplanation: '关于某事较小但具体的信息。', englishDefinition: 'A small but specific piece of information about something.',
    examples: [{ english: 'Please check every detail before submitting the form.', chinese: '提交表格前请检查每个细节。' }], collocations: ['important detail', 'in detail'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'difference', term: 'difference', normalizedTerm: 'difference', partOfSpeech: ['noun'], ipa: '/dˈɪfɹəns/',
    chineseShort: '差异；不同', chineseExplanation: '两个或多个事物不相同的地方或程度。', englishDefinition: 'The way in which two or more things are not the same.',
    examples: [{ english: 'There is a big difference between the two plans.', chinese: '这两个计划之间有很大差异。' }], collocations: ['big difference', 'make a difference'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'direction', term: 'direction', normalizedTerm: 'direction', partOfSpeech: ['noun'], ipa: '/daɪɹˈɛkʃən/',
    chineseShort: '方向；指示', chineseExplanation: '前往某处的路线，也可指如何做某事的说明。', englishDefinition: 'The way toward a place; also, an instruction about what to do.',
    examples: [{ english: 'Can you give me directions to the bus station?', chinese: '你能告诉我去巴士站怎么走吗？' }], collocations: ['give directions', 'opposite direction'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'education', term: 'education', normalizedTerm: 'education', partOfSpeech: ['noun'], ipa: '/ˌɛdʒuːkˈeɪʃən/',
    chineseShort: '教育', chineseExplanation: '通过学校、培训或学习获得知识和技能的过程。', englishDefinition: 'The process of gaining knowledge and skills through study or training.',
    examples: [{ english: 'Education can create more career opportunities.', chinese: '教育可以创造更多职业机会。' }], collocations: ['higher education', 'education system'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'effect', term: 'effect', normalizedTerm: 'effect', partOfSpeech: ['noun'], ipa: '/ɪfˈɛkt/',
    chineseShort: '影响；效果', chineseExplanation: '一个行为、事件或情况产生的结果。', englishDefinition: 'A result or change caused by an action, event, or situation.',
    examples: [{ english: 'The new rule had a positive effect on attendance.', chinese: '新规定对出席率产生了积极影响。' }], collocations: ['positive effect', 'have an effect'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'effort', term: 'effort', normalizedTerm: 'effort', partOfSpeech: ['noun'], ipa: '/ˈɛfət/',
    chineseShort: '努力', chineseExplanation: '为了完成某事而投入的体力或脑力。', englishDefinition: 'Physical or mental energy used to achieve something.',
    examples: [{ english: 'Learning a language takes time and effort.', chinese: '学习一门语言需要时间和努力。' }], collocations: ['make an effort', 'great effort'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'environment', term: 'environment', normalizedTerm: 'environment', partOfSpeech: ['noun'], ipa: '/ɛnvˈaɪɹənmənt/',
    chineseShort: '环境', chineseExplanation: '人、动物或植物生活的自然和周围条件。', englishDefinition: 'The natural and surrounding conditions in which people, animals, or plants live.',
    examples: [{ english: 'We should use less plastic to protect the environment.', chinese: '我们应该少用塑料来保护环境。' }], collocations: ['protect the environment', 'work environment'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'experience', term: 'experience', normalizedTerm: 'experience', partOfSpeech: ['noun'], ipa: '/ɛkspˈiəɹɪəns/',
    chineseShort: '经验；经历', chineseExplanation: '通过做事获得的知识，也可指亲身经历的事件。', englishDefinition: 'Knowledge gained by doing something; also, an event someone lives through.',
    examples: [{ english: 'She has two years of work experience.', chinese: '她有两年的工作经验。' }], collocations: ['work experience', 'personal experience'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'expert', term: 'expert', normalizedTerm: 'expert', partOfSpeech: ['noun'], ipa: '/ˈɛkspɜːt/',
    chineseShort: '专家', chineseExplanation: '在某个领域拥有大量知识或技能的人。', englishDefinition: 'A person with a high level of knowledge or skill in a subject.',
    examples: [{ english: 'Ask an expert if you are unsure about the repair.', chinese: '如果你不确定如何维修，可以咨询专家。' }], collocations: ['industry expert', 'expert advice'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'fact', term: 'fact', normalizedTerm: 'fact', partOfSpeech: ['noun'], ipa: '/fˈakt/',
    chineseShort: '事实', chineseExplanation: '能够证明是真实的信息或情况。', englishDefinition: 'A piece of information that can be shown to be true.',
    examples: [{ english: 'It is important to separate facts from opinions.', chinese: '把事实和观点区分开很重要。' }], collocations: ['known fact', 'fact that'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'feature', term: 'feature', normalizedTerm: 'feature', partOfSpeech: ['noun'], ipa: '/fˈiːtʃə/',
    chineseShort: '特点；功能', chineseExplanation: '某物重要或明显的特征，也可指产品的功能。', englishDefinition: 'An important or noticeable part or function of something.',
    examples: [{ english: 'The app has a useful search feature.', chinese: '这个应用有一个实用的搜索功能。' }], collocations: ['main feature', 'new feature'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'goal', term: 'goal', normalizedTerm: 'goal', partOfSpeech: ['noun'], ipa: '/ɡˈəʊl/',
    chineseShort: '目标', chineseExplanation: '希望在未来实现的结果。', englishDefinition: 'A result that someone hopes to achieve in the future.',
    examples: [{ english: 'My goal is to improve my speaking confidence.', chinese: '我的目标是提高口语自信。' }], collocations: ['set a goal', 'reach a goal'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'habit', term: 'habit', normalizedTerm: 'habit', partOfSpeech: ['noun'], ipa: '/hˈabɪt/',
    chineseShort: '习惯', chineseExplanation: '经常重复并逐渐变得自然的行为。', englishDefinition: 'Something a person does regularly, often without thinking much about it.',
    examples: [{ english: 'Reading every day is a useful study habit.', chinese: '每天阅读是一个有用的学习习惯。' }], collocations: ['good habit', 'develop a habit'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'health', term: 'health', normalizedTerm: 'health', partOfSpeech: ['noun'], ipa: '/hˈɛlθ/',
    chineseShort: '健康', chineseExplanation: '身体和心理正常、良好的状态。', englishDefinition: 'The state of being physically and mentally well.',
    examples: [{ english: 'Walking regularly is good for your health.', chinese: '经常步行对健康有益。' }], collocations: ['good health', 'health problem'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'information', term: 'information', normalizedTerm: 'information', partOfSpeech: ['noun'], ipa: '/ˌɪnfəmˈeɪʃən/',
    chineseShort: '信息', chineseExplanation: '关于某人、某事或某主题的事实和细节。', englishDefinition: 'Facts or details about a person, thing, or subject.',
    examples: [{ english: 'You can find more information on the website.', chinese: '你可以在网站上找到更多信息。' }], collocations: ['useful information', 'personal information'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'instruction', term: 'instruction', normalizedTerm: 'instruction', partOfSpeech: ['noun'], ipa: '/ɪnstɹˈʌkʃən/',
    chineseShort: '指示；说明', chineseExplanation: '告诉某人如何做某事的命令或步骤。', englishDefinition: 'A direction or explanation telling someone how to do something.',
    examples: [{ english: 'Read the instructions before using the machine.', chinese: '使用机器前先阅读说明。' }], collocations: ['follow instructions', 'clear instructions'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'interest', term: 'interest', normalizedTerm: 'interest', partOfSpeech: ['noun'], ipa: '/ˈɪntɹəst/',
    chineseShort: '兴趣；利息', chineseExplanation: '想了解或参与某事的感觉，也可指借款产生的利息。', englishDefinition: 'A feeling of wanting to know about or do something; also, money charged on a loan.',
    examples: [{ english: 'She has a strong interest in photography.', chinese: '她对摄影有浓厚兴趣。' }], collocations: ['show interest', 'interest rate'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'journey', term: 'journey', normalizedTerm: 'journey', partOfSpeech: ['noun'], ipa: '/dʒˈɜːni/',
    chineseShort: '旅程', chineseExplanation: '从一个地方前往另一个地方的过程，通常有一定距离。', englishDefinition: 'The act of travelling from one place to another, especially over some distance.',
    examples: [{ english: 'The train journey took about three hours.', chinese: '火车旅程大约用了三个小时。' }], collocations: ['long journey', 'journey home'], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'knowledge', term: 'knowledge', normalizedTerm: 'knowledge', partOfSpeech: ['noun'], ipa: '/nˈɒlɪdʒ/',
    chineseShort: '知识', chineseExplanation: '通过学习、经验或了解获得的信息和理解。', englishDefinition: 'Information and understanding gained through learning or experience.',
    examples: [{ english: 'The course gave me practical knowledge of marketing.', chinese: '这门课程给了我实用的市场营销知识。' }], collocations: ['general knowledge', 'knowledge of'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'language', term: 'language', normalizedTerm: 'language', partOfSpeech: ['noun'], ipa: '/lˈaŋɡwɪdʒ/',
    chineseShort: '语言', chineseExplanation: '人们通过说、写或手势进行交流的系统。', englishDefinition: 'A system people use to communicate through speech, writing, or signs.',
    examples: [{ english: 'English is widely used as an international language.', chinese: '英语被广泛用作国际语言。' }], collocations: ['foreign language', 'language skills'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'leader', term: 'leader', normalizedTerm: 'leader', partOfSpeech: ['noun'], ipa: '/lˈiːdə/',
    chineseShort: '领导者', chineseExplanation: '负责带领团队、组织或群体的人。', englishDefinition: 'A person who guides or is in charge of a group or organization.',
    examples: [{ english: 'A good leader listens to the whole team.', chinese: '好的领导者会听取整个团队的意见。' }], collocations: ['team leader', 'strong leader'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'lifestyle', term: 'lifestyle', normalizedTerm: 'lifestyle', partOfSpeech: ['noun'], ipa: '/lˈaɪfstaɪl/',
    chineseShort: '生活方式', chineseExplanation: '一个人通常生活、工作、饮食和休闲的方式。', englishDefinition: 'The way a person usually lives, works, eats, and spends free time.',
    examples: [{ english: 'Working from home changed his lifestyle.', chinese: '在家工作改变了他的生活方式。' }], collocations: ['healthy lifestyle', 'modern lifestyle'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'location', term: 'location', normalizedTerm: 'location', partOfSpeech: ['noun'], ipa: '/ləʊkˈeɪʃən/',
    chineseShort: '地点；位置', chineseExplanation: '某人或某物所在的地方。', englishDefinition: 'The place where someone or something is situated.',
    examples: [{ english: 'The hotel is in a convenient location near the station.', chinese: '这家酒店位于车站附近一个方便的地点。' }], collocations: ['exact location', 'central location'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'manager', term: 'manager', normalizedTerm: 'manager', partOfSpeech: ['noun'], ipa: '/mˈanɪdʒə/',
    chineseShort: '经理；管理者', chineseExplanation: '负责管理员工、部门、项目或业务的人。', englishDefinition: 'A person responsible for managing staff, a department, project, or business.',
    examples: [{ english: 'The manager approved our new schedule.', chinese: '经理批准了我们的新日程。' }], collocations: ['project manager', 'store manager'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'memory', term: 'memory', normalizedTerm: 'memory', partOfSpeech: ['noun'], ipa: '/mˈɛməɹi/',
    chineseShort: '记忆；记忆力', chineseExplanation: '记住信息和经历的能力，也可指过去记住的事情。', englishDefinition: 'The ability to remember information and experiences; also, something remembered.',
    examples: [{ english: 'I have a clear memory of my first day at school.', chinese: '我清楚记得上学第一天。' }], collocations: ['good memory', 'from memory'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'method', term: 'method', normalizedTerm: 'method', partOfSpeech: ['noun'], ipa: '/mˈɛθəd/',
    chineseShort: '方法', chineseExplanation: '完成任务、解决问题或研究某事的特定方式。', englishDefinition: 'A particular way of doing, solving, or studying something.',
    examples: [{ english: 'This method makes vocabulary review easier.', chinese: '这个方法让词汇复习更容易。' }], collocations: ['effective method', 'teaching method'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'mistake', term: 'mistake', normalizedTerm: 'mistake', partOfSpeech: ['noun'], ipa: '/mɪstˈeɪk/',
    chineseShort: '错误', chineseExplanation: '因为理解、判断或行动不正确而产生的问题。', englishDefinition: 'Something wrong that happens because of incorrect understanding, judgment, or action.',
    examples: [{ english: 'I made a mistake in the final calculation.', chinese: '我在最后的计算中犯了一个错误。' }], collocations: ['make a mistake', 'common mistake'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'opinion', term: 'opinion', normalizedTerm: 'opinion', partOfSpeech: ['noun'], ipa: '/əpˈɪniən/',
    chineseShort: '意见；看法', chineseExplanation: '一个人对某事的想法或判断。', englishDefinition: 'A person\'s view or judgment about something.',
    examples: [{ english: 'In my opinion, the second option is better.', chinese: '依我看，第二个选项更好。' }], collocations: ['in my opinion', 'give an opinion'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'organization', term: 'organization', normalizedTerm: 'organization', partOfSpeech: ['noun'], ipa: '/ˌɔːɡɐnaɪzˈeɪʃən/',
    chineseShort: '组织；机构', chineseExplanation: '为共同目标而组成的团体，也可指安排事物的方式。', englishDefinition: 'A group formed for a shared purpose; also, the way things are arranged.',
    examples: [{ english: 'She works for an international organization.', chinese: '她在一家国际机构工作。' }], collocations: ['international organization', 'organization skills'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'passenger', term: 'passenger', normalizedTerm: 'passenger', partOfSpeech: ['noun'], ipa: '/pˈasɪndʒə/',
    chineseShort: '乘客', chineseExplanation: '乘坐汽车、巴士、火车、船或飞机但不负责驾驶的人。', englishDefinition: 'A person travelling in a vehicle who is not driving it.',
    examples: [{ english: 'All passengers must show their tickets.', chinese: '所有乘客都必须出示车票。' }], collocations: ['bus passenger', 'passenger seat'], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'performance', term: 'performance', normalizedTerm: 'performance', partOfSpeech: ['noun'], ipa: '/pəfˈɔːməns/',
    chineseShort: '表现；演出', chineseExplanation: '完成任务的质量，也可指给观众看的演出。', englishDefinition: 'How well someone or something works; also, a show for an audience.',
    examples: [{ english: 'Her performance improved after more practice.', chinese: '她经过更多练习后表现有所提高。' }], collocations: ['job performance', 'live performance'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'population', term: 'population', normalizedTerm: 'population', partOfSpeech: ['noun'], ipa: '/pˌɒpjʊlˈeɪʃən/',
    chineseShort: '人口', chineseExplanation: '居住在某个国家、城市或地区的总人数。', englishDefinition: 'The total number of people living in a country, city, or area.',
    examples: [{ english: 'The city\'s population has grown quickly.', chinese: '这座城市的人口增长很快。' }], collocations: ['local population', 'population growth'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'position', term: 'position', normalizedTerm: 'position', partOfSpeech: ['noun'], ipa: '/pəzˈɪʃən/',
    chineseShort: '位置；职位；立场', chineseExplanation: '某物所在的位置，也可指工作职位或对问题的立场。', englishDefinition: 'A place, job role, or point of view on an issue.',
    examples: [{ english: 'She applied for a full-time position in sales.', chinese: '她申请了一份全职销售职位。' }], collocations: ['job position', 'current position'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'possibility', term: 'possibility', normalizedTerm: 'possibility', partOfSpeech: ['noun'], ipa: '/pˌɒsəbˈɪlɪti/',
    chineseShort: '可能性', chineseExplanation: '某事可能发生或成为事实的机会。', englishDefinition: 'The chance that something may happen or be true.',
    examples: [{ english: 'There is a possibility of rain this evening.', chinese: '今晚有下雨的可能。' }], collocations: ['real possibility', 'possibility of'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'pressure', term: 'pressure', normalizedTerm: 'pressure', partOfSpeech: ['noun'], ipa: '/pɹˈɛʃə/',
    chineseShort: '压力；压力值', chineseExplanation: '来自工作、时间或他人的紧张感，也可指物理压力。', englishDefinition: 'Stress caused by demands or limited time; also, physical force on a surface.',
    examples: [{ english: 'He works well under pressure.', chinese: '他在压力下也能很好地工作。' }], collocations: ['under pressure', 'work pressure'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'progress', term: 'progress', normalizedTerm: 'progress', partOfSpeech: ['noun'], ipa: '/pɹˈəʊɡɹɛs/',
    chineseShort: '进展；进步', chineseExplanation: '朝目标前进或逐渐改善的过程。', englishDefinition: 'Movement toward a goal or gradual improvement.',
    examples: [{ english: 'You have made good progress in speaking.', chinese: '你的口语已经取得了不错的进步。' }], collocations: ['make progress', 'steady progress'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'project', term: 'project', normalizedTerm: 'project', partOfSpeech: ['noun'], ipa: '/pɹˈɒdʒɛkt/',
    chineseShort: '项目；课题', chineseExplanation: '为达到特定目标而计划并完成的一系列工作。', englishDefinition: 'A planned piece of work with a particular goal.',
    examples: [{ english: 'Our group is working on a science project.', chinese: '我们小组正在做一个科学项目。' }], collocations: ['school project', 'project plan'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'purpose', term: 'purpose', normalizedTerm: 'purpose', partOfSpeech: ['noun'], ipa: '/pˈɜːpəs/',
    chineseShort: '目的；用途', chineseExplanation: '某事存在、进行或被设计出来的原因。', englishDefinition: 'The reason why something exists, is done, or is designed.',
    examples: [{ english: 'The purpose of the meeting is to review the plan.', chinese: '这次会议的目的是审查计划。' }], collocations: ['main purpose', 'purpose of'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'reason', term: 'reason', normalizedTerm: 'reason', partOfSpeech: ['noun'], ipa: '/ɹˈiːzən/',
    chineseShort: '原因；理由', chineseExplanation: '解释某事为什么发生或为什么做某事的事实或想法。', englishDefinition: 'A fact or idea that explains why something happens or is done.',
    examples: [{ english: 'What is the reason for the delay?', chinese: '延误的原因是什么？' }], collocations: ['main reason', 'reason for'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'relationship', term: 'relationship', normalizedTerm: 'relationship', partOfSpeech: ['noun'], ipa: '/ɹɪlˈeɪʃənʃˌɪp/',
    chineseShort: '关系', chineseExplanation: '两个人、群体或事物之间的联系或相处方式。', englishDefinition: 'The connection or way of relating between people, groups, or things.',
    examples: [{ english: 'Good communication can improve working relationships.', chinese: '良好沟通可以改善工作关系。' }], collocations: ['close relationship', 'working relationship'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'result', term: 'result', normalizedTerm: 'result', partOfSpeech: ['noun'], ipa: '/ɹɪzˈʌlt/',
    chineseShort: '结果；成绩', chineseExplanation: '行动、事件或过程最终产生的情况，也可指考试成绩。', englishDefinition: 'The outcome produced by an action, event, or process; also, an exam score.',
    examples: [{ english: 'The test results will be available tomorrow.', chinese: '测试结果明天会公布。' }], collocations: ['final result', 'exam result'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'risk', term: 'risk', normalizedTerm: 'risk', partOfSpeech: ['noun'], ipa: '/ɹˈɪsk/',
    chineseShort: '风险', chineseExplanation: '发生危险、损失或不良结果的可能性。', englishDefinition: 'The possibility of danger, loss, or an unwanted result.',
    examples: [{ english: 'Driving too fast increases the risk of an accident.', chinese: '开车太快会增加发生事故的风险。' }], collocations: ['high risk', 'reduce risk'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'service', term: 'service', normalizedTerm: 'service', partOfSpeech: ['noun'], ipa: '/sˈɜːvɪs/',
    chineseShort: '服务', chineseExplanation: '由企业或机构为顾客或公众提供的帮助或工作。', englishDefinition: 'Work or help provided by a business or organization to customers or the public.',
    examples: [{ english: 'The restaurant provides friendly service.', chinese: '这家餐厅提供友善的服务。' }], collocations: ['customer service', 'public service'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'skill', term: 'skill', normalizedTerm: 'skill', partOfSpeech: ['noun'], ipa: '/skˈɪl/',
    chineseShort: '技能', chineseExplanation: '通过学习或练习掌握的做某事的能力。', englishDefinition: 'An ability to do something well, usually learned through practice.',
    examples: [{ english: 'Communication is an important workplace skill.', chinese: '沟通是一项重要的职场技能。' }], collocations: ['practical skill', 'communication skills'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'society', term: 'society', normalizedTerm: 'society', partOfSpeech: ['noun'], ipa: '/səsˈaɪəti/',
    chineseShort: '社会', chineseExplanation: '生活在一个有共同制度和文化的社区中的人们整体。', englishDefinition: 'People living together in an organized community with shared systems and culture.',
    examples: [{ english: 'Technology has changed modern society.', chinese: '科技改变了现代社会。' }], collocations: ['modern society', 'society as a whole'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'success', term: 'success', normalizedTerm: 'success', partOfSpeech: ['noun'], ipa: '/səksˈɛs/',
    chineseShort: '成功', chineseExplanation: '达到目标或获得想要结果的状态。', englishDefinition: 'The achievement of a goal or desired result.',
    examples: [{ english: 'The event was a great success.', chinese: '这次活动非常成功。' }], collocations: ['great success', 'achieve success'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'suggestion', term: 'suggestion', normalizedTerm: 'suggestion', partOfSpeech: ['noun'], ipa: '/sədʒˈɛstʃən/',
    chineseShort: '建议', chineseExplanation: '提出供别人考虑的想法或行动方案。', englishDefinition: 'An idea or plan offered for someone to consider.',
    examples: [{ english: 'Thank you for your helpful suggestion.', chinese: '谢谢你的有用建议。' }], collocations: ['make a suggestion', 'helpful suggestion'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'task', term: 'task', normalizedTerm: 'task', partOfSpeech: ['noun'], ipa: '/tˈask/',
    chineseShort: '任务', chineseExplanation: '需要完成的一项工作或活动。', englishDefinition: 'A piece of work or an activity that needs to be completed.',
    examples: [{ english: 'I finished the most difficult task first.', chinese: '我先完成了最困难的任务。' }], collocations: ['complete a task', 'simple task'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'team', term: 'team', normalizedTerm: 'team', partOfSpeech: ['noun'], ipa: '/tˈiːm/',
    chineseShort: '团队', chineseExplanation: '为共同目标一起工作或比赛的一群人。', englishDefinition: 'A group of people who work or play together toward a shared goal.',
    examples: [{ english: 'Our team meets every Monday morning.', chinese: '我们的团队每周一早上开会。' }], collocations: ['team member', 'work as a team'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'temperature', term: 'temperature', normalizedTerm: 'temperature', partOfSpeech: ['noun'], ipa: '/tˈɛmpɹɪtʃə/',
    chineseShort: '温度；体温', chineseExplanation: '表示冷热程度的数值，也可指人的体温。', englishDefinition: 'A measure of how hot or cold something is; also, body temperature.',
    examples: [{ english: 'The temperature may reach thirty-five degrees today.', chinese: '今天气温可能达到三十五度。' }], collocations: ['room temperature', 'high temperature'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'traffic', term: 'traffic', normalizedTerm: 'traffic', partOfSpeech: ['noun'], ipa: '/tɹˈafɪk/',
    chineseShort: '交通；车流', chineseExplanation: '道路上的车辆和行人流动情况。', englishDefinition: 'The movement of vehicles and people on roads.',
    examples: [{ english: 'We left early to avoid heavy traffic.', chinese: '我们提早出发以避开拥堵的交通。' }], collocations: ['heavy traffic', 'traffic jam'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'tradition', term: 'tradition', normalizedTerm: 'tradition', partOfSpeech: ['noun'], ipa: '/tɹɐdˈɪʃən/',
    chineseShort: '传统', chineseExplanation: '在家庭、社会或文化中长期传承的习俗或做法。', englishDefinition: 'A custom or way of doing something passed down over time.',
    examples: [{ english: 'It is a family tradition to eat together on Sunday.', chinese: '星期天一起吃饭是我们家的传统。' }], collocations: ['local tradition', 'family tradition'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'training', term: 'training', normalizedTerm: 'training', partOfSpeech: ['noun'], ipa: '/tɹˈeɪnɪŋ/',
    chineseShort: '培训；训练', chineseExplanation: '为了提高技能、知识或表现而进行的学习和练习。', englishDefinition: 'Learning and practice designed to improve skills, knowledge, or performance.',
    examples: [{ english: 'New staff receive two days of training.', chinese: '新员工会接受两天培训。' }], collocations: ['staff training', 'training course'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'transport', term: 'transport', normalizedTerm: 'transport', partOfSpeech: ['noun'], ipa: '/tɹˈanspɔːt/',
    chineseShort: '交通工具；运输', chineseExplanation: '把人或货物从一个地方运到另一个地方的系统或方式。', englishDefinition: 'A system or method for moving people or goods from one place to another.',
    examples: [{ english: 'Public transport is cheaper than taking a taxi every day.', chinese: '公共交通比每天搭出租车便宜。' }], collocations: ['public transport', 'transport system'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'trouble', term: 'trouble', normalizedTerm: 'trouble', partOfSpeech: ['noun'], ipa: '/tɹˈʌbəl/',
    chineseShort: '麻烦；问题', chineseExplanation: '造成困难、担忧或不便的情况。', englishDefinition: 'A situation that causes difficulty, worry, or inconvenience.',
    examples: [{ english: 'I had trouble finding the correct address.', chinese: '我找正确地址时遇到了麻烦。' }], collocations: ['have trouble', 'get into trouble'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'value', term: 'value', normalizedTerm: 'value', partOfSpeech: ['noun'], ipa: '/vˈaljuː/',
    chineseShort: '价值；重要性', chineseExplanation: '某物的金钱价值，也可指它的重要程度或好处。', englishDefinition: 'The amount something is worth; also, its importance or usefulness.',
    examples: [{ english: 'This course offers good value for money.', chinese: '这门课程很物有所值。' }], collocations: ['good value', 'value for money'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'visitor', term: 'visitor', normalizedTerm: 'visitor', partOfSpeech: ['noun'], ipa: '/vˈɪzɪtə/',
    chineseShort: '访客；游客', chineseExplanation: '到某地参观、拜访或短暂停留的人。', englishDefinition: 'A person who comes to a place to visit or stay for a short time.',
    examples: [{ english: 'The museum welcomes thousands of visitors each month.', chinese: '这家博物馆每月接待数千名游客。' }], collocations: ['foreign visitor', 'website visitor'], level: 2, cefr: 'B1', categories: ['Travel', 'Technology'],
  },
  {
    id: 'website', term: 'website', normalizedTerm: 'website', partOfSpeech: ['noun'], ipa: '/wˈɛbsaɪt/',
    chineseShort: '网站', chineseExplanation: '通过互联网访问的一组相关网页。', englishDefinition: 'A collection of related web pages available on the internet.',
    examples: [{ english: 'The company updated its website last week.', chinese: '公司上周更新了网站。' }], collocations: ['official website', 'visit a website'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'activity', term: 'activity', normalizedTerm: 'activity', partOfSpeech: ['noun'], ipa: '/aktˈɪvɪti/',
    chineseShort: '活动', chineseExplanation: '为了某种目的进行的行动、任务或娱乐项目。', englishDefinition: 'Something people do for a purpose, task, or enjoyment.',
    examples: [{ english: 'Swimming is a popular outdoor activity here.', chinese: '游泳是这里很受欢迎的户外活动。' }], collocations: ['physical activity', 'group activity'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'agreement', term: 'agreement', normalizedTerm: 'agreement', partOfSpeech: ['noun'], ipa: '/ɐɡɹˈiːmənt/',
    chineseShort: '协议；同意', chineseExplanation: '两方或多方共同接受的决定、安排或意见。', englishDefinition: 'A decision or arrangement accepted by two or more sides.',
    examples: [{ english: 'The two companies reached an agreement.', chinese: '两家公司达成了协议。' }], collocations: ['reach an agreement', 'written agreement'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'area', term: 'area', normalizedTerm: 'area', partOfSpeech: ['noun'], ipa: '/ˈeəɹiə/',
    chineseShort: '地区；范围', chineseExplanation: '某个地方的一部分，也可指某个主题或活动范围。', englishDefinition: 'A part of a place or a particular field of activity or study.',
    examples: [{ english: 'This area is popular with tourists.', chinese: '这个地区很受游客欢迎。' }], collocations: ['local area', 'study area'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'balance', term: 'balance', normalizedTerm: 'balance', partOfSpeech: ['noun'], ipa: '/bˈaləns/',
    chineseShort: '平衡；余额', chineseExplanation: '两边保持稳定的状态，也可指账户中剩余的金额。', englishDefinition: 'A stable state between different sides; also, money remaining in an account.',
    examples: [{ english: 'It is important to keep a balance between work and rest.', chinese: '保持工作与休息之间的平衡很重要。' }], collocations: ['work-life balance', 'account balance'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'category', term: 'category', normalizedTerm: 'category', partOfSpeech: ['noun'], ipa: '/kˈatɪɡəɹi/',
    chineseShort: '类别', chineseExplanation: '按照共同特点划分的一组人或事物。', englishDefinition: 'A group of people or things sharing similar features.',
    examples: [{ english: 'Choose the correct category before uploading the file.', chinese: '上传文件前选择正确的类别。' }], collocations: ['product category', 'fall into a category'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'character', term: 'character', normalizedTerm: 'character', partOfSpeech: ['noun'], ipa: '/kˈaɹɪktə/',
    chineseShort: '性格；人物；字符', chineseExplanation: '一个人的性格，也可指故事人物或文字、数字等字符。', englishDefinition: 'A person\'s qualities; also, a person in a story or a written symbol.',
    examples: [{ english: 'My favorite character in the film is the teacher.', chinese: '我最喜欢的电影角色是那位老师。' }], collocations: ['main character', 'strong character'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'climate', term: 'climate', normalizedTerm: 'climate', partOfSpeech: ['noun'], ipa: '/klˈaɪmət/',
    chineseShort: '气候', chineseExplanation: '某个地区长期的一般天气状况。', englishDefinition: 'The usual weather conditions of a place over a long period.',
    examples: [{ english: 'The island has a warm tropical climate.', chinese: '这个岛有温暖的热带气候。' }], collocations: ['warm climate', 'climate change'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'conversation', term: 'conversation', normalizedTerm: 'conversation', partOfSpeech: ['noun'], ipa: '/kɒnvəsˈeɪʃən/',
    chineseShort: '交谈；对话', chineseExplanation: '两个或更多人之间的非正式谈话。', englishDefinition: 'An informal talk between two or more people.',
    examples: [{ english: 'We had a long conversation about our travel plans.', chinese: '我们就旅行计划进行了很长的交谈。' }], collocations: ['have a conversation', 'casual conversation'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'cost', term: 'cost', normalizedTerm: 'cost', partOfSpeech: ['noun'], ipa: '/kˈɒst/',
    chineseShort: '费用；成本', chineseExplanation: '购买、制作或完成某事需要支付的金钱。', englishDefinition: 'The amount of money needed to buy, make, or do something.',
    examples: [{ english: 'The total cost includes delivery.', chinese: '总费用包括配送费。' }], collocations: ['total cost', 'reduce costs'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'course', term: 'course', normalizedTerm: 'course', partOfSpeech: ['noun'], ipa: '/kˈɔːs/',
    chineseShort: '课程；路线', chineseExplanation: '一系列学习内容，也可指前进的路线或过程。', englishDefinition: 'A series of lessons or a route or direction of movement.',
    examples: [{ english: 'I joined an online English course.', chinese: '我参加了一门在线英语课程。' }], collocations: ['training course', 'online course'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'crowd', term: 'crowd', normalizedTerm: 'crowd', partOfSpeech: ['noun'], ipa: '/kɹˈaʊd/',
    chineseShort: '人群', chineseExplanation: '聚集在同一地点的一大群人。', englishDefinition: 'A large group of people gathered in one place.',
    examples: [{ english: 'A crowd waited outside the stadium.', chinese: '一群人在体育场外等候。' }], collocations: ['large crowd', 'crowd of people'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'danger', term: 'danger', normalizedTerm: 'danger', partOfSpeech: ['noun'], ipa: '/dˈeɪndʒə/',
    chineseShort: '危险', chineseExplanation: '可能造成伤害、损失或死亡的情况。', englishDefinition: 'A situation in which harm, loss, or death may happen.',
    examples: [{ english: 'The sign warns drivers of danger ahead.', chinese: '这个标志提醒驾驶员前方有危险。' }], collocations: ['in danger', 'serious danger'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'data', term: 'data', normalizedTerm: 'data', partOfSpeech: ['noun'], ipa: '/dˈeɪtə/',
    chineseShort: '数据', chineseExplanation: '为了分析、参考或计算而收集的事实和数字。', englishDefinition: 'Facts and figures collected for analysis, reference, or calculation.',
    examples: [{ english: 'The app stores the data on your device.', chinese: '这个应用把数据存储在你的设备上。' }], collocations: ['collect data', 'personal data'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'department', term: 'department', normalizedTerm: 'department', partOfSpeech: ['noun'], ipa: '/dɪpˈɑːtmənt/',
    chineseShort: '部门；系', chineseExplanation: '公司、政府或学校中负责特定工作的部分。', englishDefinition: 'A section of a company, government, or school responsible for a particular area.',
    examples: [{ english: 'Please contact the sales department.', chinese: '请联系销售部门。' }], collocations: ['sales department', 'government department'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'event', term: 'event', normalizedTerm: 'event', partOfSpeech: ['noun'], ipa: '/ɪvˈɛnt/',
    chineseShort: '活动；事件', chineseExplanation: '计划举行的活动，或发生的重要事情。', englishDefinition: 'A planned activity or an important thing that happens.',
    examples: [{ english: 'The school is holding a sports event next week.', chinese: '学校下周将举办体育活动。' }], collocations: ['special event', 'public event'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'example', term: 'example', normalizedTerm: 'example', partOfSpeech: ['noun'], ipa: '/ɛɡzˈampəl/',
    chineseShort: '例子', chineseExplanation: '用来说明规则、观点或情况的具体事物。', englishDefinition: 'A specific thing used to explain a rule, idea, or situation.',
    examples: [{ english: 'The teacher gave an example to explain the grammar point.', chinese: '老师举了一个例子来解释这个语法点。' }], collocations: ['good example', 'for example'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'exercise', term: 'exercise', normalizedTerm: 'exercise', partOfSpeech: ['noun'], ipa: '/ˈɛksəsˌaɪz/',
    chineseShort: '运动；练习', chineseExplanation: '为了健康进行的身体活动，也可指学习中的练习题。', englishDefinition: 'Physical activity for health; also, a task used for practice in learning.',
    examples: [{ english: 'This exercise helps you practise past tense verbs.', chinese: '这个练习帮助你练习过去时动词。' }], collocations: ['regular exercise', 'grammar exercise'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'active', term: 'active', normalizedTerm: 'active', partOfSpeech: ['adjective'], ipa: '/ˈaktɪv/',
    chineseShort: '活跃的；积极的', chineseExplanation: '经常活动、参与很多事情或精力充沛的。', englishDefinition: 'Doing many things, moving often, or taking part regularly.',
    examples: [{ english: 'She stays active by walking every evening.', chinese: '她每天晚上散步来保持活跃。' }], collocations: ['stay active', 'active lifestyle'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'afraid', term: 'afraid', normalizedTerm: 'afraid', partOfSpeech: ['adjective'], ipa: '/ɐfɹˈeɪd/',
    chineseShort: '害怕的；担心的', chineseExplanation: '因为危险、可能的问题或不熟悉的事物而感到恐惧。', englishDefinition: 'Feeling fear or worry about danger or a possible problem.',
    examples: [{ english: 'He is afraid of flying alone.', chinese: '他害怕独自乘飞机。' }], collocations: ['afraid of', 'afraid to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'alive', term: 'alive', normalizedTerm: 'alive', partOfSpeech: ['adjective'], ipa: '/ɐlˈaɪv/',
    chineseShort: '活着的；有活力的', chineseExplanation: '仍然活着，或充满活动和生气的。', englishDefinition: 'Living and not dead; also, full of activity and energy.',
    examples: [{ english: 'The old tree is still alive.', chinese: '那棵老树仍然活着。' }], collocations: ['stay alive', 'feel alive'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'alone', term: 'alone', normalizedTerm: 'alone', partOfSpeech: ['adjective', 'adverb'], ipa: '/ɐlˈəʊn/',
    chineseShort: '独自的；单独地', chineseExplanation: '没有其他人在一起，或独自完成某事。', englishDefinition: 'Without other people; by oneself.',
    examples: [{ english: 'She travelled alone for the first time.', chinese: '她第一次独自旅行。' }], collocations: ['live alone', 'travel alone'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'amazing', term: 'amazing', normalizedTerm: 'amazing', partOfSpeech: ['adjective'], ipa: '/ɐmˈeɪzɪŋ/',
    chineseShort: '令人惊叹的', chineseExplanation: '非常好、特别或令人十分惊讶的。', englishDefinition: 'Very good, surprising, or impressive.',
    examples: [{ english: 'The view from the mountain was amazing.', chinese: '山上的景色令人惊叹。' }], collocations: ['amazing view', 'absolutely amazing'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'ancient', term: 'ancient', normalizedTerm: 'ancient', partOfSpeech: ['adjective'], ipa: '/ˈeɪnʃənt/',
    chineseShort: '古老的', chineseExplanation: '来自很久以前的历史时期。', englishDefinition: 'Belonging to a very long time ago in history.',
    examples: [{ english: 'We visited an ancient temple during the trip.', chinese: '旅行期间我们参观了一座古老的寺庙。' }], collocations: ['ancient city', 'ancient history'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'anxious', term: 'anxious', normalizedTerm: 'anxious', partOfSpeech: ['adjective'], ipa: '/ˈaŋʃəs/',
    chineseShort: '焦虑的；担心的', chineseExplanation: '因为不确定、困难或即将发生的事情而感到紧张。', englishDefinition: 'Worried or nervous about something uncertain or difficult.',
    examples: [{ english: 'She felt anxious before the interview.', chinese: '她在面试前感到焦虑。' }], collocations: ['feel anxious', 'anxious about'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'available', term: 'available', normalizedTerm: 'available', partOfSpeech: ['adjective'], ipa: '/ɐvˈeɪləbəl/',
    chineseShort: '可用的；有空的', chineseExplanation: '可以获得、使用或购买，也可表示某人有时间。', englishDefinition: 'Able to be obtained or used; also, free to do something.',
    examples: [{ english: 'The room is available from Friday.', chinese: '这个房间从星期五起可以使用。' }], collocations: ['available online', 'be available for'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'aware', term: 'aware', normalizedTerm: 'aware', partOfSpeech: ['adjective'], ipa: '/ɐwˈeə/',
    chineseShort: '意识到的；知道的', chineseExplanation: '知道某个事实、问题或周围发生的事情。', englishDefinition: 'Knowing about a fact, problem, or situation.',
    examples: [{ english: 'Are you aware of the new rule?', chinese: '你知道这项新规定吗？' }], collocations: ['aware of', 'become aware'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'basic', term: 'basic', normalizedTerm: 'basic', partOfSpeech: ['adjective'], ipa: '/bˈeɪsɪk/',
    chineseShort: '基本的；基础的', chineseExplanation: '只包含最重要、最简单或最必要的部分。', englishDefinition: 'Including only the most important, simple, or necessary parts.',
    examples: [{ english: 'The course teaches basic computer skills.', chinese: '这门课程教授基础电脑技能。' }], collocations: ['basic skills', 'basic information'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'careful', term: 'careful', normalizedTerm: 'careful', partOfSpeech: ['adjective'], ipa: '/kˈeəfəl/',
    chineseShort: '小心的；仔细的', chineseExplanation: '为了避免错误、损坏或危险而认真注意。', englishDefinition: 'Giving close attention in order to avoid mistakes, damage, or danger.',
    examples: [{ english: 'Be careful when crossing the road.', chinese: '过马路时要小心。' }], collocations: ['be careful', 'careful planning'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'certain', term: 'certain', normalizedTerm: 'certain', partOfSpeech: ['adjective'], ipa: '/sˈɜːtən/',
    chineseShort: '确定的；某个的', chineseExplanation: '确信某事是真的，也可表示没有具体说明的某一个。', englishDefinition: 'Sure that something is true; also, a particular but unspecified one.',
    examples: [{ english: 'I am certain that I locked the door.', chinese: '我确定我锁了门。' }], collocations: ['certain that', 'for certain'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'comfortable', term: 'comfortable', normalizedTerm: 'comfortable', partOfSpeech: ['adjective'], ipa: '/kˈʌmftəbəl/',
    chineseShort: '舒适的；自在的', chineseExplanation: '让身体感觉舒服，或让人感到放松、不紧张。', englishDefinition: 'Making you feel physically relaxed or emotionally at ease.',
    examples: [{ english: 'These shoes are comfortable for long walks.', chinese: '这双鞋适合长时间走路，很舒适。' }], collocations: ['feel comfortable', 'comfortable seat'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'common', term: 'common', normalizedTerm: 'common', partOfSpeech: ['adjective'], ipa: '/kˈɒmən/',
    chineseShort: '常见的；共同的', chineseExplanation: '经常发生或存在，也可表示由多人共同拥有。', englishDefinition: 'Happening often or shared by several people.',
    examples: [{ english: 'This is a common mistake among learners.', chinese: '这是学习者中常见的错误。' }], collocations: ['common problem', 'have in common'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'confident', term: 'confident', normalizedTerm: 'confident', partOfSpeech: ['adjective'], ipa: '/kˈɒnfɪdənt/',
    chineseShort: '自信的', chineseExplanation: '相信自己的能力、判断或成功可能性。', englishDefinition: 'Feeling sure about your ability, judgment, or chance of success.',
    examples: [{ english: 'She feels more confident speaking English now.', chinese: '她现在说英语更有自信了。' }], collocations: ['feel confident', 'confident about'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'crowded', term: 'crowded', normalizedTerm: 'crowded', partOfSpeech: ['adjective'], ipa: '/kɹˈaʊdɪd/',
    chineseShort: '拥挤的', chineseExplanation: '有太多人或东西，导致空间不足。', englishDefinition: 'Full of too many people or things.',
    examples: [{ english: 'The train was crowded during rush hour.', chinese: '高峰时段火车很拥挤。' }], collocations: ['crowded train', 'very crowded'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'curious', term: 'curious', normalizedTerm: 'curious', partOfSpeech: ['adjective'], ipa: '/kjˈʊɹɪəs/',
    chineseShort: '好奇的', chineseExplanation: '想知道或了解更多关于某人或某事的信息。', englishDefinition: 'Wanting to know or learn more about someone or something.',
    examples: [{ english: 'The children were curious about the new robot.', chinese: '孩子们对新机器人很好奇。' }], collocations: ['curious about', 'naturally curious'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'daily', term: 'daily', normalizedTerm: 'daily', partOfSpeech: ['adjective', 'adverb'], ipa: '/dˈeɪli/',
    chineseShort: '每日的；每天', chineseExplanation: '每天发生、使用或完成的。', englishDefinition: 'Happening, used, or done every day.',
    examples: [{ english: 'Reading is part of my daily routine.', chinese: '阅读是我日常生活的一部分。' }], collocations: ['daily routine', 'daily life'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dangerous', term: 'dangerous', normalizedTerm: 'dangerous', partOfSpeech: ['adjective'], ipa: '/dˈeɪndʒəɹəs/',
    chineseShort: '危险的', chineseExplanation: '可能造成伤害、损失或事故的。', englishDefinition: 'Likely to cause harm, damage, or an accident.',
    examples: [{ english: 'It is dangerous to drive when you are very tired.', chinese: '非常疲倦时开车很危险。' }], collocations: ['dangerous situation', 'potentially dangerous'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'different', term: 'different', normalizedTerm: 'different', partOfSpeech: ['adjective'], ipa: '/dˈɪfɹənt/',
    chineseShort: '不同的', chineseExplanation: '与另一个人或事物不相同。', englishDefinition: 'Not the same as another person or thing.',
    examples: [{ english: 'We tried three different methods.', chinese: '我们尝试了三种不同的方法。' }], collocations: ['different from', 'completely different'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'difficult', term: 'difficult', normalizedTerm: 'difficult', partOfSpeech: ['adjective'], ipa: '/dˈɪfɪkəlt/',
    chineseShort: '困难的', chineseExplanation: '需要较多努力、技能或理解才能完成。', englishDefinition: 'Requiring a lot of effort, skill, or understanding.',
    examples: [{ english: 'The final question was quite difficult.', chinese: '最后一个问题相当困难。' }], collocations: ['difficult task', 'find something difficult'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'direct', term: 'direct', normalizedTerm: 'direct', partOfSpeech: ['adjective'], ipa: '/daɪɹˈɛkt/',
    chineseShort: '直接的；直达的', chineseExplanation: '没有中间步骤、停留或绕路，也可表示表达明确。', englishDefinition: 'Without an intermediate step, stop, or route; also, clear and straightforward.',
    examples: [{ english: 'Is there a direct bus to the airport?', chinese: '有直达机场的巴士吗？' }], collocations: ['direct flight', 'direct contact'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'disappointed', term: 'disappointed', normalizedTerm: 'disappointed', partOfSpeech: ['adjective'], ipa: '/dˌɪsɐpˈɔɪntɪd/',
    chineseShort: '失望的', chineseExplanation: '因为结果没有达到期待而感到不开心。', englishDefinition: 'Unhappy because something was not as good as expected.',
    examples: [{ english: 'We were disappointed with the service.', chinese: '我们对这项服务感到失望。' }], collocations: ['disappointed with', 'feel disappointed'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'effective', term: 'effective', normalizedTerm: 'effective', partOfSpeech: ['adjective'], ipa: '/ɪfˈɛktɪv/',
    chineseShort: '有效的', chineseExplanation: '能够产生预期结果或成功解决问题的。', englishDefinition: 'Producing the intended result or successfully solving a problem.',
    examples: [{ english: 'This is an effective way to remember new words.', chinese: '这是记住新单词的有效方法。' }], collocations: ['effective method', 'highly effective'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'empty', term: 'empty', normalizedTerm: 'empty', partOfSpeech: ['adjective'], ipa: '/ˈɛmpti/',
    chineseShort: '空的', chineseExplanation: '里面没有人、物品或内容的。', englishDefinition: 'Containing nothing or no people.',
    examples: [{ english: 'The waiting room was almost empty.', chinese: '候诊室几乎是空的。' }], collocations: ['empty room', 'completely empty'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'enormous', term: 'enormous', normalizedTerm: 'enormous', partOfSpeech: ['adjective'], ipa: '/ɪnˈɔːməs/',
    chineseShort: '巨大的', chineseExplanation: '尺寸、数量或程度非常大的。', englishDefinition: 'Extremely large in size, amount, or degree.',
    examples: [{ english: 'The project required an enormous amount of work.', chinese: '这个项目需要大量工作。' }], collocations: ['enormous amount', 'enormous difference'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'equal', term: 'equal', normalizedTerm: 'equal', partOfSpeech: ['adjective'], ipa: '/ˈiːkwəl/',
    chineseShort: '相等的；平等的', chineseExplanation: '在数量、价值、权利或地位上相同。', englishDefinition: 'The same in amount, value, rights, or status.',
    examples: [{ english: 'All team members should have an equal chance to speak.', chinese: '所有团队成员都应该有平等的发言机会。' }], collocations: ['equal opportunity', 'equal to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'excellent', term: 'excellent', normalizedTerm: 'excellent', partOfSpeech: ['adjective'], ipa: '/ˈɛksələnt/',
    chineseShort: '优秀的；极好的', chineseExplanation: '质量非常高或表现非常好的。', englishDefinition: 'Extremely good or of very high quality.',
    examples: [{ english: 'The hotel received excellent reviews.', chinese: '这家酒店获得了很好的评价。' }], collocations: ['excellent service', 'excellent result'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'familiar', term: 'familiar', normalizedTerm: 'familiar', partOfSpeech: ['adjective'], ipa: '/fəmˈɪliə/',
    chineseShort: '熟悉的', chineseExplanation: '以前见过、听过或知道，因此容易认出。', englishDefinition: 'Known from previous experience and easy to recognize.',
    examples: [{ english: 'Her voice sounded familiar to me.', chinese: '她的声音听起来很熟悉。' }], collocations: ['familiar with', 'look familiar'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'famous', term: 'famous', normalizedTerm: 'famous', partOfSpeech: ['adjective'], ipa: '/fˈeɪməs/',
    chineseShort: '著名的', chineseExplanation: '被很多人知道或认识的。', englishDefinition: 'Known by many people.',
    examples: [{ english: 'The town is famous for its street food.', chinese: '这个小镇以街头美食闻名。' }], collocations: ['famous for', 'world-famous'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'formal', term: 'formal', normalizedTerm: 'formal', partOfSpeech: ['adjective'], ipa: '/fˈɔːməl/',
    chineseShort: '正式的', chineseExplanation: '适合正式场合、工作或官方交流的。', englishDefinition: 'Suitable for official, professional, or serious situations.',
    examples: [{ english: 'Use a formal style when writing the application email.', chinese: '写申请邮件时使用正式文体。' }], collocations: ['formal language', 'formal meeting'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'friendly', term: 'friendly', normalizedTerm: 'friendly', partOfSpeech: ['adjective'], ipa: '/fɹˈɛndli/',
    chineseShort: '友好的', chineseExplanation: '表现得亲切、友善并容易相处的。', englishDefinition: 'Kind, pleasant, and easy to talk to.',
    examples: [{ english: 'The staff were friendly and helpful.', chinese: '工作人员友好又乐于助人。' }], collocations: ['friendly staff', 'environmentally friendly'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'general', term: 'general', normalizedTerm: 'general', partOfSpeech: ['adjective'], ipa: '/dʒˈɛnəɹəl/',
    chineseShort: '一般的；总体的', chineseExplanation: '涉及整体而不是具体细节的。', englishDefinition: 'Related to the whole rather than specific details.',
    examples: [{ english: 'The guide gives general information about the city.', chinese: '这本指南提供关于这座城市的一般信息。' }], collocations: ['general information', 'in general'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'gentle', term: 'gentle', normalizedTerm: 'gentle', partOfSpeech: ['adjective'], ipa: '/dʒˈɛntəl/',
    chineseShort: '温和的；轻柔的', chineseExplanation: '动作、声音或态度不粗暴、不强烈。', englishDefinition: 'Soft, calm, and not rough or strong.',
    examples: [{ english: 'Use a gentle movement when cleaning the screen.', chinese: '清洁屏幕时动作要轻柔。' }], collocations: ['gentle voice', 'gentle pressure'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'glad', term: 'glad', normalizedTerm: 'glad', partOfSpeech: ['adjective'], ipa: '/ɡlˈad/',
    chineseShort: '高兴的', chineseExplanation: '因为某件好事发生而感到开心或满意。', englishDefinition: 'Happy or pleased about something.',
    examples: [{ english: 'I am glad you could join us today.', chinese: '我很高兴你今天能加入我们。' }], collocations: ['glad to', 'glad that'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'healthy', term: 'healthy', normalizedTerm: 'healthy', partOfSpeech: ['adjective'], ipa: '/hˈɛlθi/',
    chineseShort: '健康的；有益健康的', chineseExplanation: '身体状况良好，或有助于保持身体健康。', englishDefinition: 'Physically well or helpful for maintaining good health.',
    examples: [{ english: 'A healthy breakfast can help you start the day well.', chinese: '健康的早餐能帮助你有个好的开始。' }], collocations: ['healthy diet', 'healthy lifestyle'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'helpful', term: 'helpful', normalizedTerm: 'helpful', partOfSpeech: ['adjective'], ipa: '/hˈɛlpfəl/',
    chineseShort: '有帮助的', chineseExplanation: '能够提供帮助、信息或改善情况的。', englishDefinition: 'Providing help, useful information, or improvement.',
    examples: [{ english: 'The receptionist gave us helpful directions.', chinese: '接待员给了我们有用的路线指示。' }], collocations: ['helpful advice', 'very helpful'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'honest', term: 'honest', normalizedTerm: 'honest', partOfSpeech: ['adjective'], ipa: '/ˈɒnɪst/',
    chineseShort: '诚实的', chineseExplanation: '说真话、不欺骗，并以公平方式行事的。', englishDefinition: 'Truthful, not deceptive, and fair in behavior.',
    examples: [{ english: 'Please give me an honest answer.', chinese: '请给我一个诚实的回答。' }], collocations: ['honest answer', 'be honest with'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'independent', term: 'independent', normalizedTerm: 'independent', partOfSpeech: ['adjective'], ipa: '/ˌɪndɪpˈɛndənt/',
    chineseShort: '独立的', chineseExplanation: '能够不依赖别人完成事情或作决定的。', englishDefinition: 'Able to do things or make decisions without depending on others.',
    examples: [{ english: 'Living alone made her more independent.', chinese: '独自生活让她变得更独立。' }], collocations: ['independent study', 'be independent'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'international', term: 'international', normalizedTerm: 'international', partOfSpeech: ['adjective'], ipa: '/ˌɪntənˈaʃənəl/',
    chineseShort: '国际的', chineseExplanation: '涉及多个国家或不同国家的人。', englishDefinition: 'Involving more than one country or people from different countries.',
    examples: [{ english: 'The university has many international students.', chinese: '这所大学有很多国际学生。' }], collocations: ['international travel', 'international company'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'likely', term: 'likely', normalizedTerm: 'likely', partOfSpeech: ['adjective'], ipa: '/lˈaɪkli/',
    chineseShort: '可能的', chineseExplanation: '很可能发生、出现或是真的。', englishDefinition: 'Probably going to happen or be true.',
    examples: [{ english: 'It is likely to rain this afternoon.', chinese: '今天下午很可能下雨。' }], collocations: ['likely to', 'highly likely'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'local', term: 'local', normalizedTerm: 'local', partOfSpeech: ['adjective'], ipa: '/lˈəʊkəl/',
    chineseShort: '当地的；本地的', chineseExplanation: '与附近地区、城市或社区有关的。', englishDefinition: 'Related to the nearby area, city, or community.',
    examples: [{ english: 'We bought fruit from a local market.', chinese: '我们从当地市场买了水果。' }], collocations: ['local area', 'local business'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'lucky', term: 'lucky', normalizedTerm: 'lucky', partOfSpeech: ['adjective'], ipa: '/lˈʌki/',
    chineseShort: '幸运的', chineseExplanation: '因为好机会或意外的好结果而获得好处的。', englishDefinition: 'Having good fortune or receiving a good result by chance.',
    examples: [{ english: 'We were lucky to find the last two tickets.', chinese: '我们很幸运买到了最后两张票。' }], collocations: ['feel lucky', 'lucky enough'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'modern', term: 'modern', normalizedTerm: 'modern', partOfSpeech: ['adjective'], ipa: '/mˈɒdən/',
    chineseShort: '现代的', chineseExplanation: '属于当前时代，或使用较新的设计、方法和技术的。', englishDefinition: 'Belonging to the present time or using newer designs, methods, or technology.',
    examples: [{ english: 'The library has a modern study area.', chinese: '图书馆有一个现代化的学习区。' }], collocations: ['modern technology', 'modern life'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'natural', term: 'natural', normalizedTerm: 'natural', partOfSpeech: ['adjective'], ipa: '/nˈatʃəɹəl/',
    chineseShort: '自然的；天然的', chineseExplanation: '来自自然界而不是人工制造，也可表示正常、不做作。', englishDefinition: 'Coming from nature rather than being made artificially; also, normal and not forced.',
    examples: [{ english: 'The product is made from natural materials.', chinese: '这个产品由天然材料制成。' }], collocations: ['natural environment', 'natural light'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'necessary', term: 'necessary', normalizedTerm: 'necessary', partOfSpeech: ['adjective'], ipa: '/nˈɛsəsəɹi/',
    chineseShort: '必要的', chineseExplanation: '为了达到目标或避免问题而必须有或必须做的。', englishDefinition: 'Needed in order to achieve something or avoid a problem.',
    examples: [{ english: 'A passport is necessary for international travel.', chinese: '国际旅行需要护照。' }], collocations: ['necessary information', 'absolutely necessary'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'nervous', term: 'nervous', normalizedTerm: 'nervous', partOfSpeech: ['adjective'], ipa: '/nˈɜːvəs/',
    chineseShort: '紧张的；不安的', chineseExplanation: '因为担忧、害怕或即将发生的重要事情而紧张。', englishDefinition: 'Worried or uneasy, especially before something important.',
    examples: [{ english: 'I always feel nervous before giving a presentation.', chinese: '我在做演示前总会感到紧张。' }], collocations: ['feel nervous', 'nervous about'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'normal', term: 'normal', normalizedTerm: 'normal', partOfSpeech: ['adjective'], ipa: '/nˈɔːməl/',
    chineseShort: '正常的；普通的', chineseExplanation: '符合通常情况、标准或预期的。', englishDefinition: 'Usual, expected, or within a standard range.',
    examples: [{ english: 'The system is working normally again.', chinese: '系统又恢复正常运行了。' }], collocations: ['normal life', 'normal condition'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'ordinary', term: 'ordinary', normalizedTerm: 'ordinary', partOfSpeech: ['adjective'], ipa: '/ˈɔːdɪnəɹi/',
    chineseShort: '普通的；平常的', chineseExplanation: '没有特别、不寻常或突出的地方。', englishDefinition: 'Not special, unusual, or remarkable.',
    examples: [{ english: 'It looked like an ordinary office building.', chinese: '它看起来像一栋普通的办公楼。' }], collocations: ['ordinary people', 'ordinary day'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'peaceful', term: 'peaceful', normalizedTerm: 'peaceful', partOfSpeech: ['adjective'], ipa: '/pˈiːsfəl/',
    chineseShort: '平静的；和平的', chineseExplanation: '安静、没有冲突或打扰的。', englishDefinition: 'Calm, quiet, and free from conflict or disturbance.',
    examples: [{ english: 'The village is peaceful at night.', chinese: '这个村庄晚上很安静。' }], collocations: ['peaceful place', 'peaceful life'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'perfect', term: 'perfect', normalizedTerm: 'perfect', partOfSpeech: ['adjective'], ipa: '/pˈɜːfɛkt/',
    chineseShort: '完美的；非常合适的', chineseExplanation: '没有明显错误，或非常适合某种需要。', englishDefinition: 'Without noticeable faults or exactly right for a purpose.',
    examples: [{ english: 'This room is perfect for a small meeting.', chinese: '这个房间非常适合小型会议。' }], collocations: ['perfect for', 'perfect condition'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'personal', term: 'personal', normalizedTerm: 'personal', partOfSpeech: ['adjective'], ipa: '/pˈɜːsənəl/',
    chineseShort: '个人的；私人的', chineseExplanation: '与某个具体个人、其生活或观点有关的。', englishDefinition: 'Related to a particular person, their life, or their views.',
    examples: [{ english: 'Do not share personal information with strangers.', chinese: '不要向陌生人分享个人信息。' }], collocations: ['personal information', 'personal experience'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'pleasant', term: 'pleasant', normalizedTerm: 'pleasant', partOfSpeech: ['adjective'], ipa: '/plˈɛzənt/',
    chineseShort: '令人愉快的', chineseExplanation: '让人感到舒服、开心或满意的。', englishDefinition: 'Enjoyable, comfortable, or pleasing.',
    examples: [{ english: 'We had a pleasant evening by the river.', chinese: '我们在河边度过了一个愉快的夜晚。' }], collocations: ['pleasant surprise', 'pleasant experience'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'polite', term: 'polite', normalizedTerm: 'polite', partOfSpeech: ['adjective'], ipa: '/pəlˈaɪt/',
    chineseShort: '有礼貌的', chineseExplanation: '以尊重、良好礼仪和体贴的方式对待别人。', englishDefinition: 'Showing respect, good manners, and consideration for others.',
    examples: [{ english: 'It is polite to thank someone for their help.', chinese: '感谢别人的帮助是有礼貌的。' }], collocations: ['polite request', 'be polite to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'popular', term: 'popular', normalizedTerm: 'popular', partOfSpeech: ['adjective'], ipa: '/pˈɒpjʊlə/',
    chineseShort: '受欢迎的；流行的', chineseExplanation: '被很多人喜欢、使用或选择的。', englishDefinition: 'Liked, used, or chosen by many people.',
    examples: [{ english: 'This café is popular with local students.', chinese: '这家咖啡馆很受当地学生欢迎。' }], collocations: ['popular with', 'popular choice'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'possible', term: 'possible', normalizedTerm: 'possible', partOfSpeech: ['adjective'], ipa: '/pˈɒsəbəl/',
    chineseShort: '可能的；可行的', chineseExplanation: '能够发生、完成或实现的。', englishDefinition: 'Able to happen, be done, or be achieved.',
    examples: [{ english: 'Is it possible to change the booking date?', chinese: '可以更改预订日期吗？' }], collocations: ['possible to', 'as soon as possible'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'practical', term: 'practical', normalizedTerm: 'practical', partOfSpeech: ['adjective'], ipa: '/pɹˈaktɪkəl/',
    chineseShort: '实用的；实际的', chineseExplanation: '适合真实情况并能够有效使用的。', englishDefinition: 'Useful and suitable for real situations.',
    examples: [{ english: 'The course gives practical advice for job interviews.', chinese: '这门课程提供求职面试的实用建议。' }], collocations: ['practical advice', 'practical solution'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'private', term: 'private', normalizedTerm: 'private', partOfSpeech: ['adjective'], ipa: '/pɹˈaɪvət/',
    chineseShort: '私人的；私密的', chineseExplanation: '只供特定个人或群体使用，不向公众开放。', englishDefinition: 'For a particular person or group and not open to the public.',
    examples: [{ english: 'This is a private conversation.', chinese: '这是一次私人谈话。' }], collocations: ['private room', 'private information'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'proud', term: 'proud', normalizedTerm: 'proud', partOfSpeech: ['adjective'], ipa: '/pɹˈaʊd/',
    chineseShort: '自豪的', chineseExplanation: '因为自己或他人的成就而感到满意和自豪。', englishDefinition: 'Feeling pleased and satisfied about an achievement.',
    examples: [{ english: 'Her parents are proud of her progress.', chinese: '她的父母为她的进步感到自豪。' }], collocations: ['proud of', 'feel proud'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'public', term: 'public', normalizedTerm: 'public', partOfSpeech: ['adjective'], ipa: '/pˈʌblɪk/',
    chineseShort: '公共的；公开的', chineseExplanation: '供所有人使用、涉及公众或任何人都能看到的。', englishDefinition: 'Open to everyone, related to the public, or visible to anyone.',
    examples: [{ english: 'The city has a good public transport system.', chinese: '这座城市有良好的公共交通系统。' }], collocations: ['public transport', 'public place'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'quiet', term: 'quiet', normalizedTerm: 'quiet', partOfSpeech: ['adjective'], ipa: '/kwˈaɪət/',
    chineseShort: '安静的', chineseExplanation: '声音很少或没有太多活动、打扰的。', englishDefinition: 'Making little noise or having little activity or disturbance.',
    examples: [{ english: 'I need a quiet place to study.', chinese: '我需要一个安静的地方学习。' }], collocations: ['quiet room', 'keep quiet'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'ready', term: 'ready', normalizedTerm: 'ready', partOfSpeech: ['adjective'], ipa: '/ɹˈɛdi/',
    chineseShort: '准备好的', chineseExplanation: '已经做好准备，可以开始做某事或面对某种情况。', englishDefinition: 'Prepared and able to start doing something or face a situation.',
    examples: [{ english: 'The report is ready to send.', chinese: '报告已经可以发送了。' }], collocations: ['ready to', 'get ready'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'recent', term: 'recent', normalizedTerm: 'recent', partOfSpeech: ['adjective'], ipa: '/ɹˈiːsənt/',
    chineseShort: '最近的；近期的', chineseExplanation: '发生在不久以前的。', englishDefinition: 'Happening or existing not long ago.',
    examples: [{ english: 'Recent changes have improved the website.', chinese: '最近的改动改善了网站。' }], collocations: ['recent changes', 'recent research'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'regular', term: 'regular', normalizedTerm: 'regular', partOfSpeech: ['adjective'], ipa: '/ɹˈɛɡjuːlə/',
    chineseShort: '规律的；经常的', chineseExplanation: '按照固定时间或方式重复发生，也可表示普通、常规的。', englishDefinition: 'Happening repeatedly in a fixed pattern; also, usual or standard.',
    examples: [{ english: 'Regular practice can improve your pronunciation.', chinese: '规律练习可以提高你的发音。' }], collocations: ['regular exercise', 'regular customer'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'responsible', term: 'responsible', normalizedTerm: 'responsible', partOfSpeech: ['adjective'], ipa: '/ɹɪspˈɒnsəbəl/',
    chineseShort: '负责的；有责任心的', chineseExplanation: '有义务完成某事，或能够认真可靠地处理事情。', englishDefinition: 'Having a duty to do something or behaving reliably and carefully.',
    examples: [{ english: 'She is responsible for organizing the event.', chinese: '她负责组织这次活动。' }], collocations: ['responsible for', 'responsible person'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'serious', term: 'serious', normalizedTerm: 'serious', partOfSpeech: ['adjective'], ipa: '/sˈiəɹɪəs/',
    chineseShort: '严重的；认真的', chineseExplanation: '重要、危险或需要认真对待的，也可表示态度严肃。', englishDefinition: 'Important, dangerous, or requiring careful attention; also, not joking.',
    examples: [{ english: 'The delay caused a serious problem.', chinese: '这次延误造成了严重问题。' }], collocations: ['serious problem', 'take seriously'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'similar', term: 'similar', normalizedTerm: 'similar', partOfSpeech: ['adjective'], ipa: '/sˈɪmɪlə/',
    chineseShort: '相似的', chineseExplanation: '在外观、性质或特点上很接近但不完全相同的。', englishDefinition: 'Almost the same in appearance, quality, or features.',
    examples: [{ english: 'The two phones have similar features.', chinese: '这两部手机有相似的功能。' }], collocations: ['similar to', 'very similar'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'simple', term: 'simple', normalizedTerm: 'simple', partOfSpeech: ['adjective'], ipa: '/sˈɪmpəl/',
    chineseShort: '简单的', chineseExplanation: '容易理解、完成或使用的，不复杂的。', englishDefinition: 'Easy to understand, do, or use; not complicated.',
    examples: [{ english: 'The app has a simple design.', chinese: '这个应用的设计很简单。' }], collocations: ['simple solution', 'simple way'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'social', term: 'social', normalizedTerm: 'social', partOfSpeech: ['adjective'], ipa: '/sˈəʊʃəl/',
    chineseShort: '社交的；社会的', chineseExplanation: '与人与人互动、社会活动或社会整体有关的。', englishDefinition: 'Related to interaction between people, social activities, or society.',
    examples: [{ english: 'The club organizes social events every month.', chinese: '这个俱乐部每月举办社交活动。' }], collocations: ['social media', 'social activity'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'special', term: 'special', normalizedTerm: 'special', partOfSpeech: ['adjective'], ipa: '/spˈɛʃəl/',
    chineseShort: '特别的；特殊的', chineseExplanation: '不同于一般情况，或因为某种原因具有特别意义的。', englishDefinition: 'Different from what is usual or important for a particular reason.',
    examples: [{ english: 'We prepared a special meal for her birthday.', chinese: '我们为她的生日准备了特别的一餐。' }], collocations: ['special occasion', 'special offer'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'strange', term: 'strange', normalizedTerm: 'strange', partOfSpeech: ['adjective'], ipa: '/stɹˈeɪndʒ/',
    chineseShort: '奇怪的；陌生的', chineseExplanation: '不寻常、难以解释或让人不熟悉的。', englishDefinition: 'Unusual, difficult to explain, or unfamiliar.',
    examples: [{ english: 'I heard a strange noise outside.', chinese: '我听到外面有奇怪的声音。' }], collocations: ['strange noise', 'feel strange'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'successful', term: 'successful', normalizedTerm: 'successful', partOfSpeech: ['adjective'], ipa: '/səksˈɛsfəl/',
    chineseShort: '成功的', chineseExplanation: '达到预期目标或取得良好结果的。', englishDefinition: 'Achieving the intended goal or a good result.',
    examples: [{ english: 'The event was successful despite the rain.', chinese: '尽管下雨，这次活动仍然很成功。' }], collocations: ['successful project', 'successful career'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'suitable', term: 'suitable', normalizedTerm: 'suitable', partOfSpeech: ['adjective'], ipa: '/sˈuːtəbəl/',
    chineseShort: '合适的', chineseExplanation: '适合某个目的、情况或人的需要的。', englishDefinition: 'Right or appropriate for a particular purpose, situation, or person.',
    examples: [{ english: 'This book is suitable for intermediate learners.', chinese: '这本书适合中级学习者。' }], collocations: ['suitable for', 'most suitable'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'surprised', term: 'surprised', normalizedTerm: 'surprised', partOfSpeech: ['adjective'], ipa: '/səpɹˈaɪzd/',
    chineseShort: '惊讶的', chineseExplanation: '因为发生了意料之外的事情而感到吃惊。', englishDefinition: 'Feeling amazed because something unexpected happened.',
    examples: [{ english: 'I was surprised by how quickly they replied.', chinese: '他们回复得这么快让我很惊讶。' }], collocations: ['surprised by', 'surprised to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'traditional', term: 'traditional', normalizedTerm: 'traditional', partOfSpeech: ['adjective'], ipa: '/tɹɐdˈɪʃənəl/',
    chineseShort: '传统的', chineseExplanation: '按照长期存在的习俗、方法或风格进行的。', englishDefinition: 'Following customs, methods, or styles that have existed for a long time.',
    examples: [{ english: 'We tried several traditional dishes.', chinese: '我们尝试了几道传统菜肴。' }], collocations: ['traditional food', 'traditional method'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'typical', term: 'typical', normalizedTerm: 'typical', partOfSpeech: ['adjective'], ipa: '/tˈɪpɪkəl/',
    chineseShort: '典型的；通常的', chineseExplanation: '具有某类人、事物或情况常见特点的。', englishDefinition: 'Having the usual features of a type of person, thing, or situation.',
    examples: [{ english: 'This weather is typical for August.', chinese: '这种天气在八月很典型。' }], collocations: ['typical example', 'typical of'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'useful', term: 'useful', normalizedTerm: 'useful', partOfSpeech: ['adjective'], ipa: '/jˈuːsfəl/',
    chineseShort: '有用的', chineseExplanation: '能够帮助完成某事、解决问题或提供重要信息的。', englishDefinition: 'Able to help with a task, solve a problem, or provide important information.',
    examples: [{ english: 'This checklist is useful when preparing for a trip.', chinese: '这份清单在准备旅行时很有用。' }], collocations: ['useful information', 'useful for'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'valuable', term: 'valuable', normalizedTerm: 'valuable', partOfSpeech: ['adjective'], ipa: '/vˈaljuːəbəl/',
    chineseShort: '有价值的；宝贵的', chineseExplanation: '值很多钱，或因为用途、经验、时间等而非常重要。', englishDefinition: 'Worth a lot of money or very important because of its usefulness or meaning.',
    examples: [{ english: 'The internship gave her valuable experience.', chinese: '这次实习给了她宝贵的经验。' }], collocations: ['valuable experience', 'valuable information'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'worried', term: 'worried', normalizedTerm: 'worried', partOfSpeech: ['adjective'], ipa: '/wˈʌɹid/',
    chineseShort: '担心的', chineseExplanation: '因为可能发生的问题而感到焦虑或不安。', englishDefinition: 'Feeling anxious about a possible problem.',
    examples: [{ english: 'I am worried about tomorrow\'s exam.', chinese: '我担心明天的考试。' }], collocations: ['worried about', 'feel worried'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'abroad', term: 'abroad', normalizedTerm: 'abroad', partOfSpeech: ['adverb'], ipa: '/ɐbɹˈɔːd/',
    chineseShort: '在国外；到国外', chineseExplanation: '在外国或前往外国。', englishDefinition: 'In or to a foreign country.',
    examples: [{ english: 'She hopes to study abroad next year.', chinese: '她希望明年到国外留学。' }], collocations: ['study abroad', 'travel abroad'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'actually', term: 'actually', normalizedTerm: 'actually', partOfSpeech: ['adverb'], ipa: '/ˈaktʃuːəli/',
    chineseShort: '实际上；其实', chineseExplanation: '用于说明真实情况，尤其当它与预期不同。', englishDefinition: 'Used to state the real situation, especially when it is different from what was expected.',
    examples: [{ english: 'I thought the shop was closed, but it is actually open.', chinese: '我以为商店关门了，但其实还开着。' }], collocations: ['actually happen', 'actually quite'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'already', term: 'already', normalizedTerm: 'already', partOfSpeech: ['adverb'], ipa: '/ɔːlɹˈɛdi/',
    chineseShort: '已经', chineseExplanation: '表示某事在现在或指定时间之前已经发生。', englishDefinition: 'Before now or before a particular time.',
    examples: [{ english: 'I have already sent the document.', chinese: '我已经发送了文件。' }], collocations: ['already finished', 'already know'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'carefully', term: 'carefully', normalizedTerm: 'carefully', partOfSpeech: ['adverb'], ipa: '/kˈeəfəli/',
    chineseShort: '小心地；仔细地', chineseExplanation: '以认真、谨慎的方式做事，避免错误或危险。', englishDefinition: 'In a way that gives close attention and avoids mistakes or danger.',
    examples: [{ english: 'Read the instructions carefully before starting.', chinese: '开始之前仔细阅读说明。' }], collocations: ['check carefully', 'listen carefully'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'certainly', term: 'certainly', normalizedTerm: 'certainly', partOfSpeech: ['adverb'], ipa: '/sˈɜːtənli/',
    chineseShort: '当然；肯定地', chineseExplanation: '表示非常确定，或礼貌地表示同意。', englishDefinition: 'Used to show strong certainty or polite agreement.',
    examples: [{ english: 'I can certainly help you with that.', chinese: '我当然可以帮你处理这件事。' }], collocations: ['certainly possible', 'almost certainly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'clearly', term: 'clearly', normalizedTerm: 'clearly', partOfSpeech: ['adverb'], ipa: '/klˈiəli/',
    chineseShort: '清楚地；明显地', chineseExplanation: '以容易理解、看见或听见的方式。', englishDefinition: 'In a way that is easy to understand, see, or hear.',
    examples: [{ english: 'Please speak clearly during the recording.', chinese: '录音时请说清楚。' }], collocations: ['explain clearly', 'clearly show'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'especially', term: 'especially', normalizedTerm: 'especially', partOfSpeech: ['adverb'], ipa: '/ɪspˈɛʃəli/',
    chineseShort: '尤其；特别', chineseExplanation: '用于强调某个人、事物或情况比其他更值得注意。', englishDefinition: 'Used to emphasize one person, thing, or situation more than others.',
    examples: [{ english: 'I enjoy travelling, especially by train.', chinese: '我喜欢旅行，尤其是乘火车。' }], collocations: ['especially useful', 'especially important'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'exactly', term: 'exactly', normalizedTerm: 'exactly', partOfSpeech: ['adverb'], ipa: '/ɛɡzˈaktli/',
    chineseShort: '确切地；正好', chineseExplanation: '完全准确地，或表示与所说内容完全一致。', englishDefinition: 'In a completely accurate way or precisely as stated.',
    examples: [{ english: 'Tell me exactly where the problem started.', chinese: '确切告诉我问题从哪里开始。' }], collocations: ['exactly right', 'exactly the same'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'finally', term: 'finally', normalizedTerm: 'finally', partOfSpeech: ['adverb'], ipa: '/fˈaɪnəli/',
    chineseShort: '终于；最后', chineseExplanation: '经过一段时间后发生，或表示一系列事情的最后一步。', englishDefinition: 'After a long time; also, at the last stage of a sequence.',
    examples: [{ english: 'We finally found a hotel near the station.', chinese: '我们终于在车站附近找到了一家酒店。' }], collocations: ['finally arrive', 'finally decide'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'generally', term: 'generally', normalizedTerm: 'generally', partOfSpeech: ['adverb'], ipa: '/dʒˈɛnəɹəli/',
    chineseShort: '通常；总体上', chineseExplanation: '在大多数情况下或从整体角度来说。', englishDefinition: 'In most situations or when considering things as a whole.',
    examples: [{ english: 'The buses are generally reliable.', chinese: '这些巴士通常很可靠。' }], collocations: ['generally speaking', 'generally available'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'immediately', term: 'immediately', normalizedTerm: 'immediately', partOfSpeech: ['adverb'], ipa: '/ɪmˈiːdɪətli/',
    chineseShort: '立即；马上', chineseExplanation: '没有等待或延迟地。', englishDefinition: 'Without waiting or delay.',
    examples: [{ english: 'Please contact us immediately if your card is lost.', chinese: '如果卡丢失，请立即联系我们。' }], collocations: ['act immediately', 'immediately after'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'luckily', term: 'luckily', normalizedTerm: 'luckily', partOfSpeech: ['adverb'], ipa: '/lˈʌkili/',
    chineseShort: '幸运地', chineseExplanation: '用于表示某件好事使困难或坏情况得到改善。', englishDefinition: 'Used to say that something good happened in a difficult or bad situation.',
    examples: [{ english: 'Luckily, we arrived before the rain started.', chinese: '幸运的是，我们在下雨前到达了。' }], collocations: ['luckily for', 'quite luckily'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'probably', term: 'probably', normalizedTerm: 'probably', partOfSpeech: ['adverb'], ipa: '/pɹˈɒbəbli/',
    chineseShort: '大概；很可能', chineseExplanation: '表示某事很可能是真的或会发生。', englishDefinition: 'Used to say that something is likely to be true or happen.',
    examples: [{ english: 'The meeting will probably finish by five.', chinese: '会议大概会在五点前结束。' }], collocations: ['probably will', 'most probably'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'recently', term: 'recently', normalizedTerm: 'recently', partOfSpeech: ['adverb'], ipa: '/ɹˈiːsəntli/',
    chineseShort: '最近', chineseExplanation: '在离现在不久的时间内。', englishDefinition: 'At a time not long before now.',
    examples: [{ english: 'I recently started using a new study app.', chinese: '我最近开始使用一个新的学习应用。' }], collocations: ['recently started', 'more recently'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'separately', term: 'separately', normalizedTerm: 'separately', partOfSpeech: ['adverb'], ipa: '/sˈɛpɹətli/',
    chineseShort: '分别地；单独地', chineseExplanation: '不与其他事物一起，而是一个一个或分开处理。', englishDefinition: 'Individually or apart from other things.',
    examples: [{ english: 'Please upload the two files separately.', chinese: '请分别上传这两个文件。' }], collocations: ['pay separately', 'stored separately'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'simply', term: 'simply', normalizedTerm: 'simply', partOfSpeech: ['adverb'], ipa: '/sˈɪmpli/',
    chineseShort: '简单地；仅仅', chineseExplanation: '以简单方式，或用于表示事情只是如此。', englishDefinition: 'In a simple way; also, merely or just.',
    examples: [{ english: 'The process can be explained simply.', chinese: '这个过程可以简单地解释。' }], collocations: ['simply because', 'put simply'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'slowly', term: 'slowly', normalizedTerm: 'slowly', partOfSpeech: ['adverb'], ipa: '/slˈəʊli/',
    chineseShort: '缓慢地', chineseExplanation: '以不快的速度进行。', englishDefinition: 'At a low speed or not quickly.',
    examples: [{ english: 'Drive slowly near the school.', chinese: '在学校附近请慢速驾驶。' }], collocations: ['move slowly', 'speak slowly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'suddenly', term: 'suddenly', normalizedTerm: 'suddenly', partOfSpeech: ['adverb'], ipa: '/sˈʌdənli/',
    chineseShort: '突然', chineseExplanation: '快速且没有预警地发生。', englishDefinition: 'Quickly and without warning.',
    examples: [{ english: 'The lights suddenly went out.', chinese: '灯突然熄灭了。' }], collocations: ['suddenly stop', 'suddenly appear'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'usually', term: 'usually', normalizedTerm: 'usually', partOfSpeech: ['adverb'], ipa: '/jˈuːʒuːəli/',
    chineseShort: '通常', chineseExplanation: '表示某事在大多数时候会发生或是常态。', englishDefinition: 'In most situations or on most occasions.',
    examples: [{ english: 'I usually take the bus to work.', chinese: '我通常乘巴士上班。' }], collocations: ['usually go', 'usually happens'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'completely', term: 'completely', normalizedTerm: 'completely', partOfSpeech: ['adverb'], ipa: '/kəmplˈiːtli/',
    chineseShort: '完全地；彻底地', chineseExplanation: '达到全部程度，没有遗漏或剩余。', englishDefinition: 'Fully and without anything left out.',
    examples: [{ english: 'The old system has been completely replaced.', chinese: '旧系统已经被彻底替换。' }], collocations: ['completely different', 'completely understand'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'calm', term: 'calm', normalizedTerm: 'calm', partOfSpeech: ['adjective'], ipa: '/kˈɑːm/',
    chineseShort: '冷静的；平静的', chineseExplanation: '没有紧张、愤怒或强烈情绪，或环境安静稳定。', englishDefinition: 'Not nervous, angry, or excited; peaceful and controlled.',
    examples: [{ english: 'Try to stay calm during the emergency.', chinese: '紧急情况下尽量保持冷静。' }], collocations: ['stay calm', 'calm voice'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
] satisfies readonly VocabularyItem[]
