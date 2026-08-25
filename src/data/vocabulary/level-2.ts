import type { VocabularyItem } from '../../types'

/** Familiar A2-B1 vocabulary used across everyday, study, travel, and work contexts. */
export const level2Vocabulary = [
  {
    id: 'patient', term: 'patient', normalizedTerm: 'patient', partOfSpeech: ['adjective', 'noun'], ipa: '/ˈpeɪʃənt/',
    chineseShort: '有耐心的；病人', chineseExplanation: '作形容词表示能够平静等待；作名词表示接受医疗的人。', englishDefinition: 'Able to wait calmly; also, a person receiving medical care.',
    examples: [{ english: 'Please be patient while the page loads.', malay: 'Sila bersabar sementara halaman dimuatkan.', chinese: '页面加载时请耐心等待。' }], collocations: ['be patient with'], antonyms: ['impatient'], level: 2, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'confirm', term: 'confirm', normalizedTerm: 'confirm', partOfSpeech: ['verb'], ipa: '/kənˈfɜːm/',
    chineseShort: '确认；证实', chineseExplanation: '说明某事确实如此，或正式确定安排。', englishDefinition: 'To state or show that something is true or correct.',
    examples: [{ english: 'Please confirm your flight details by email.', malay: 'Sila sahkan butiran penerbangan anda melalui e-mel.', chinese: '请通过电子邮件确认你的航班信息。' }], collocations: ['confirm a booking', 'confirm that'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'improve', term: 'improve', normalizedTerm: 'improve', partOfSpeech: ['verb'], ipa: '/ɪmˈpruːv/',
    chineseShort: '改善；提高', chineseExplanation: '使某事物变得更好，或自身变得更好。', englishDefinition: 'To become better or to make something better.',
    examples: [{ english: 'Daily practice will improve your pronunciation.', malay: 'Latihan setiap hari akan meningkatkan sebutan anda.', chinese: '每天练习会提高你的发音。' }], collocations: ['improve skills', 'improve greatly'], synonyms: ['enhance'], level: 2, cefr: 'A2', categories: ['School', 'Daily English'],
  },
  {
    id: 'schedule', term: 'schedule', normalizedTerm: 'schedule', partOfSpeech: ['noun', 'verb'], ipa: '/ˈʃedjuːl/',
    chineseShort: '日程；安排', chineseExplanation: '列明活动时间的计划，也可指为某事安排时间。', englishDefinition: 'A plan listing when events will happen; to arrange an event for a time.',
    examples: [{ english: 'We need to schedule the meeting for Tuesday.', malay: 'Kita perlu menjadualkan mesyuarat itu pada hari Selasa.', chinese: '我们需要把会议安排在星期二。' }], collocations: ['busy schedule', 'ahead of schedule'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'device', term: 'device', normalizedTerm: 'device', partOfSpeech: ['noun'], ipa: '/dɪˈvaɪs/',
    chineseShort: '设备；装置', chineseExplanation: '为特定用途制造的机器、工具或电子产品。', englishDefinition: 'A piece of equipment made for a particular purpose.',
    examples: [{ english: 'This device measures room temperature.', malay: 'Peranti ini mengukur suhu bilik.', chinese: '这个设备测量室温。' }], collocations: ['mobile device', 'electronic device'], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'budget', term: 'budget', normalizedTerm: 'budget', partOfSpeech: ['noun', 'verb'], ipa: '/ˈbʌdʒɪt/',
    chineseShort: '预算', chineseExplanation: '一段时间内预计可支出或获得的金额，也可指按预算规划。', englishDefinition: 'A plan for how much money will be earned and spent.',
    examples: [{ english: 'The project stayed within its budget.', malay: 'Ayat ini menunjukkan penggunaan perkataan “budget” dalam konteks Bahasa Inggeris British.', chinese: '这个项目的支出控制在预算内。' }], collocations: ['annual budget', 'tight budget'], level: 2, cefr: 'B1', categories: ['Business', 'Travel'],
  },
  {
    id: 'recommend', term: 'recommend', normalizedTerm: 'recommend', partOfSpeech: ['verb'], ipa: '/ˌrekəˈmend/',
    chineseShort: '推荐；建议', chineseExplanation: '认为某人或某物很好而向别人介绍，或建议采取某种行动。', englishDefinition: 'To suggest that someone or something is suitable or worth trying.',
    examples: [{ english: 'Can you recommend a good hotel?', malay: 'Ayat ini menunjukkan penggunaan perkataan “recommend” dalam konteks Bahasa Inggeris British.', chinese: '你能推荐一家好的酒店吗？' }], collocations: ['highly recommend', 'recommend doing'], synonyms: ['suggest'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'opportunity', term: 'opportunity', normalizedTerm: 'opportunity', partOfSpeech: ['noun'], ipa: '/ˌɒpəˈtjuːnəti/',
    chineseShort: '机会；时机', chineseExplanation: '能够做某事或实现目标的合适时间或条件。', englishDefinition: 'A suitable chance to do something or achieve a goal.',
    examples: [{ english: 'The course offers an opportunity to practise speaking.', malay: 'Ayat ini menunjukkan penggunaan perkataan “opportunity” dalam konteks Bahasa Inggeris British.', chinese: '这门课程提供练习口语的机会。' }], collocations: ['job opportunity', 'take an opportunity'], synonyms: ['chance'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'convenient', term: 'convenient', normalizedTerm: 'convenient', partOfSpeech: ['adjective'], ipa: '/kənˈviːniənt/',
    chineseShort: '方便的；便利的', chineseExplanation: '容易使用、节省时间，或适合某人的安排。', englishDefinition: 'Easy to use, suitable, or requiring little effort.',
    examples: [{ english: 'Online booking is quick and convenient.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convenient” dalam konteks Bahasa Inggeris British.', chinese: '网上订票既快捷又方便。' }], collocations: ['convenient time', 'convenient for'], antonyms: ['inconvenient'], level: 2, cefr: 'B1', categories: ['Travel', 'Technology'],
  },
  {
    id: 'solution', term: 'solution', normalizedTerm: 'solution', partOfSpeech: ['noun'], ipa: '/səˈluːʃən/',
    chineseShort: '解决办法；答案', chineseExplanation: '解决问题的方法，或对题目的正确回答。', englishDefinition: 'A way of solving a problem or answering a question.',
    examples: [{ english: 'We need a simple solution to this problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “solution” dalam konteks Bahasa Inggeris British.', chinese: '我们需要一个简单的方法来解决这个问题。' }], collocations: ['practical solution', 'find a solution'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'achieve', term: 'achieve', normalizedTerm: 'achieve', partOfSpeech: ['verb'], ipa: '/ɐtʃˈiːv/',
    chineseShort: '达到；实现', chineseExplanation: '成功完成目标或取得想要的结果。', englishDefinition: 'To successfully reach a goal or get a desired result.',
    examples: [{ english: 'She worked hard to achieve her goal.', malay: 'Ayat ini menunjukkan penggunaan perkataan “achieve” dalam konteks Bahasa Inggeris British.', chinese: '她努力工作以实现自己的目标。' }], collocations: ['achieve a goal', 'achieve success'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'admit', term: 'admit', normalizedTerm: 'admit', partOfSpeech: ['verb'], ipa: '/ɐdmˈɪt/',
    chineseShort: '承认；准许进入', chineseExplanation: '承认某事是真的，也可表示允许某人进入某地。', englishDefinition: 'To agree that something is true; also, to allow someone to enter.',
    examples: [{ english: 'He admitted that he had made a mistake.', malay: 'Ayat ini menunjukkan penggunaan perkataan “admit” dalam konteks Bahasa Inggeris British.', chinese: '他承认自己犯了一个错误。' }], collocations: ['admit a mistake', 'admit that'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'advise', term: 'advise', normalizedTerm: 'advise', partOfSpeech: ['verb'], ipa: '/ɐdvˈaɪz/',
    chineseShort: '建议；劝告', chineseExplanation: '根据经验或判断告诉某人应该怎么做。', englishDefinition: 'To tell someone what you think they should do.',
    examples: [{ english: 'The doctor advised me to rest for two days.', malay: 'Ayat ini menunjukkan penggunaan perkataan “advise” dalam konteks Bahasa Inggeris British.', chinese: '医生建议我休息两天。' }], collocations: ['advise someone to', 'strongly advise'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'afford', term: 'afford', normalizedTerm: 'afford', partOfSpeech: ['verb'], ipa: '/ɐfˈɔːd/',
    chineseShort: '负担得起', chineseExplanation: '有足够的钱或时间去购买、支付或做某事。', englishDefinition: 'To have enough money or time to pay for or do something.',
    examples: [{ english: 'We cannot afford a new car this year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “afford” dalam konteks Bahasa Inggeris British.', chinese: '我们今年买不起新车。' }], collocations: ['can afford', 'afford to buy'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'announce', term: 'announce', normalizedTerm: 'announce', partOfSpeech: ['verb'], ipa: '/ɐnˈaʊns/',
    chineseShort: '宣布；公布', chineseExplanation: '正式或公开地告诉人们一项消息或决定。', englishDefinition: 'To make information or a decision known publicly.',
    examples: [{ english: 'The school announced the exam date yesterday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “announce” dalam konteks Bahasa Inggeris British.', chinese: '学校昨天公布了考试日期。' }], collocations: ['announce a decision', 'officially announce'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'apologize', term: 'apologise', normalizedTerm: 'apologise', partOfSpeech: ['verb'], ipa: '/ɐpˈɒlədʒˌaɪz/',
    chineseShort: '道歉', chineseExplanation: '因为做错事或造成不便而表示歉意。', englishDefinition: 'To say that you are sorry for something you did.',
    examples: [{ english: 'I apologised for arriving late.', malay: 'Ayat ini menunjukkan penggunaan perkataan “apologise” dalam konteks Bahasa Inggeris British.', chinese: '我为迟到而道歉。' }], collocations: ['apologise for', 'apologise to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'apply', term: 'apply', normalizedTerm: 'apply', partOfSpeech: ['verb'], ipa: '/ɐplˈaɪ/',
    chineseShort: '申请；应用', chineseExplanation: '正式请求职位、课程等，也可表示把方法用于某事。', englishDefinition: 'To make a formal request for something; also, to use something in a situation.',
    examples: [{ english: 'She applied for a part-time job.', malay: 'Ayat ini menunjukkan penggunaan perkataan “apply” dalam konteks Bahasa Inggeris British.', chinese: '她申请了一份兼职工作。' }], collocations: ['apply for a job', 'apply a method'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'arrange', term: 'arrange', normalizedTerm: 'arrange', partOfSpeech: ['verb'], ipa: '/ɐɹˈeɪndʒ/',
    chineseShort: '安排；整理', chineseExplanation: '提前计划某事，或把物品按一定方式放好。', englishDefinition: 'To plan something in advance or put things in a particular order.',
    examples: [{ english: 'I arranged a meeting with the manager.', malay: 'Ayat ini menunjukkan penggunaan perkataan “arrange” dalam konteks Bahasa Inggeris British.', chinese: '我安排了与经理的会面。' }], collocations: ['arrange a meeting', 'arrange for'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'avoid', term: 'avoid', normalizedTerm: 'avoid', partOfSpeech: ['verb'], ipa: '/ɐvˈɔɪd/',
    chineseShort: '避免', chineseExplanation: '有意识地远离某人、某事或防止某种情况发生。', englishDefinition: 'To stay away from something or prevent something from happening.',
    examples: [{ english: 'Try to avoid using your phone while driving.', malay: 'Ayat ini menunjukkan penggunaan perkataan “avoid” dalam konteks Bahasa Inggeris British.', chinese: '开车时尽量避免使用手机。' }], collocations: ['avoid doing', 'avoid a problem'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'behave', term: 'behave', normalizedTerm: 'behave', partOfSpeech: ['verb'], ipa: '/bɪhˈeɪv/',
    chineseShort: '表现；举止', chineseExplanation: '以某种方式行动，尤其指在社交场合中的行为。', englishDefinition: 'To act in a particular way, especially towards other people.',
    examples: [{ english: 'The children behaved well during the trip.', malay: 'Ayat ini menunjukkan penggunaan perkataan “behave” dalam konteks Bahasa Inggeris British.', chinese: '孩子们在旅途中表现很好。' }], collocations: ['behave well', 'behave badly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'belong', term: 'belong', normalizedTerm: 'belong', partOfSpeech: ['verb'], ipa: '/bɪlˈɒŋ/',
    chineseShort: '属于', chineseExplanation: '表示某物归某人所有，或某人是某群体的一员。', englishDefinition: 'To be owned by someone or to be a member of a group.',
    examples: [{ english: 'This bag belongs to my sister.', malay: 'Ayat ini menunjukkan penggunaan perkataan “belong” dalam konteks Bahasa Inggeris British.', chinese: '这个包属于我姐姐。' }], collocations: ['belong to', 'belong together'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'borrow', term: 'borrow', normalizedTerm: 'borrow', partOfSpeech: ['verb'], ipa: '/bˈɒɹəʊ/',
    chineseShort: '借入', chineseExplanation: '暂时拿用别人的东西，并打算之后归还。', englishDefinition: 'To take and use something that belongs to someone else and return it later.',
    examples: [{ english: 'Can I borrow your charger for an hour?', malay: 'Ayat ini menunjukkan penggunaan perkataan “borrow” dalam konteks Bahasa Inggeris British.', chinese: '我可以借你的充电器一小时吗？' }], collocations: ['borrow money', 'borrow from'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'breathe', term: 'breathe', normalizedTerm: 'breathe', partOfSpeech: ['verb'], ipa: '/bɹˈiːð/',
    chineseShort: '呼吸', chineseExplanation: '把空气吸入肺部再呼出。', englishDefinition: 'To take air into the lungs and let it out again.',
    examples: [{ english: 'Take a moment to breathe slowly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “breathe” dalam konteks Bahasa Inggeris British.', chinese: '花一点时间慢慢呼吸。' }], collocations: ['breathe deeply', 'breathe slowly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'cancel', term: 'cancel', normalizedTerm: 'cancel', partOfSpeech: ['verb', 'noun'], ipa: '/kˈansəl/',
    chineseShort: '取消', chineseExplanation: '决定原本计划的活动、预订或安排不再进行。', englishDefinition: 'To decide that a planned event, booking, or arrangement will not happen.',
    examples: [{ english: 'They cancelled the flight because of bad weather.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cancel” dalam konteks Bahasa Inggeris British.', chinese: '他们因天气恶劣取消了航班。' }], collocations: ['cancel a booking', 'cancel a flight'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'celebrate', term: 'celebrate', normalizedTerm: 'celebrate', partOfSpeech: ['verb'], ipa: '/sˈɛləbɹˌeɪt/',
    chineseShort: '庆祝', chineseExplanation: '为特别事件或成功举行活动或表达喜悦。', englishDefinition: 'To do something enjoyable for a special event or success.',
    examples: [{ english: 'We celebrated her birthday at home.', malay: 'Ayat ini menunjukkan penggunaan perkataan “celebrate” dalam konteks Bahasa Inggeris British.', chinese: '我们在家庆祝了她的生日。' }], collocations: ['celebrate a birthday', 'celebrate success'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'communicate', term: 'communicate', normalizedTerm: 'communicate', partOfSpeech: ['verb'], ipa: '/kəmjˈuːnɪkˌeɪt/',
    chineseShort: '沟通；交流', chineseExplanation: '通过说话、写作或其他方式交换信息和想法。', englishDefinition: 'To exchange information or ideas with other people.',
    examples: [{ english: 'Good teams communicate clearly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “communicate” dalam konteks Bahasa Inggeris British.', chinese: '好的团队会清楚地沟通。' }], collocations: ['communicate clearly', 'communicate with'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'compare', term: 'compare', normalizedTerm: 'compare', partOfSpeech: ['verb'], ipa: '/kəmpˈeə/',
    chineseShort: '比较', chineseExplanation: '观察两个或多个事物的相同点和不同点。', englishDefinition: 'To examine two or more things to see how they are similar or different.',
    examples: [{ english: 'Compare the two prices before you buy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compare” dalam konteks Bahasa Inggeris British.', chinese: '购买前先比较这两个价格。' }], collocations: ['compare prices', 'compare with'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'complain', term: 'complain', normalizedTerm: 'complain', partOfSpeech: ['verb'], ipa: '/kəmplˈeɪn/',
    chineseShort: '抱怨；投诉', chineseExplanation: '表示对某事不满意，或正式提出问题。', englishDefinition: 'To say that you are unhappy or dissatisfied with something.',
    examples: [{ english: 'Several customers complained about the slow service.', malay: 'Ayat ini menunjukkan penggunaan perkataan “complain” dalam konteks Bahasa Inggeris British.', chinese: '几位顾客投诉服务太慢。' }], collocations: ['complain about', 'make a complaint'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'concentrate', term: 'concentrate', normalizedTerm: 'concentrate', partOfSpeech: ['verb'], ipa: '/kˈɒnsəntɹˌeɪt/',
    chineseShort: '集中注意力', chineseExplanation: '把注意力集中在一个任务、想法或活动上。', englishDefinition: 'To give all your attention to one task, idea, or activity.',
    examples: [{ english: 'I cannot concentrate when the room is noisy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “concentrate” dalam konteks Bahasa Inggeris British.', chinese: '房间很吵时我无法集中注意力。' }], collocations: ['concentrate on', 'concentrate fully'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'connect', term: 'connect', normalizedTerm: 'connect', partOfSpeech: ['verb'], ipa: '/kənˈɛkt/',
    chineseShort: '连接；联系', chineseExplanation: '使两个事物相连，也可指人与人建立联系。', englishDefinition: 'To join things together or establish contact between people.',
    examples: [{ english: 'Connect the cable to the back of the computer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “connect” dalam konteks Bahasa Inggeris British.', chinese: '把电线连接到电脑背面。' }], collocations: ['connect to', 'connect with'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'consider', term: 'consider', normalizedTerm: 'consider', partOfSpeech: ['verb'], ipa: '/kənsˈɪdə/',
    chineseShort: '考虑；认为', chineseExplanation: '在做决定前认真思考某事，也可表示认为某事如此。', englishDefinition: 'To think carefully about something before deciding; also, to regard something in a certain way.',
    examples: [{ english: 'We are considering moving to a larger office.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consider” dalam konteks Bahasa Inggeris British.', chinese: '我们正在考虑搬到更大的办公室。' }], collocations: ['consider doing', 'consider an option'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'continue', term: 'continue', normalizedTerm: 'continue', partOfSpeech: ['verb'], ipa: '/kəntˈɪnjuː/',
    chineseShort: '继续', chineseExplanation: '在暂停后或不中断地做同一件事。', englishDefinition: 'To keep doing something or start again after a pause.',
    examples: [{ english: 'Please continue reading from page twenty.', malay: 'Ayat ini menunjukkan penggunaan perkataan “continue” dalam konteks Bahasa Inggeris British.', chinese: '请从第二十页继续阅读。' }], collocations: ['continue doing', 'continue to'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'control', term: 'control', normalizedTerm: 'control', partOfSpeech: ['verb', 'noun'], ipa: '/kəntɹˈəʊl/',
    chineseShort: '控制；管理', chineseExplanation: '使某事按照预期运行，或限制自己的行为和情绪。', englishDefinition: 'To make something work in the way you want or limit your own actions or feelings.',
    examples: [{ english: 'He learned to control his temper.', malay: 'Ayat ini menunjukkan penggunaan perkataan “control” dalam konteks Bahasa Inggeris British.', chinese: '他学会了控制自己的脾气。' }], collocations: ['control a situation', 'control costs'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'create', term: 'create', normalizedTerm: 'create', partOfSpeech: ['verb'], ipa: '/kɹiːˈeɪt/',
    chineseShort: '创造；创建', chineseExplanation: '制作或产生新的事物、想法或内容。', englishDefinition: 'To make or produce something new.',
    examples: [{ english: 'The students created a short video for class.', malay: 'Ayat ini menunjukkan penggunaan perkataan “create” dalam konteks Bahasa Inggeris British.', chinese: '学生们为课堂制作了一个短视频。' }], collocations: ['create content', 'create a plan'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'deliver', term: 'deliver', normalizedTerm: 'deliver', partOfSpeech: ['verb'], ipa: '/dɪlˈɪvə/',
    chineseShort: '递送；发表', chineseExplanation: '把物品送到目的地，也可指发表讲话或提供服务。', englishDefinition: 'To take something to a place; also, to give a speech or provide a service.',
    examples: [{ english: 'The company will deliver the package tomorrow.', malay: 'Ayat ini menunjukkan penggunaan perkataan “deliver” dalam konteks Bahasa Inggeris British.', chinese: '公司明天会送达包裹。' }], collocations: ['deliver a package', 'deliver a speech'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'depend', term: 'depend', normalizedTerm: 'depend', partOfSpeech: ['verb'], ipa: '/dɪpˈɛnd/',
    chineseShort: '依靠；取决于', chineseExplanation: '需要某人或某物的帮助，或表示结果由某条件决定。', englishDefinition: 'To rely on someone or something; also, to be decided by a condition.',
    examples: [{ english: 'The final cost depends on the number of guests.', malay: 'Ayat ini menunjukkan penggunaan perkataan “depend” dalam konteks Bahasa Inggeris British.', chinese: '最终费用取决于客人的数量。' }], collocations: ['depend on', 'depend heavily on'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'describe', term: 'describe', normalizedTerm: 'describe', partOfSpeech: ['verb'], ipa: '/dɪskɹˈaɪb/',
    chineseShort: '描述', chineseExplanation: '用语言说明某人、某物或某情况是什么样子。', englishDefinition: 'To say or write what someone or something is like.',
    examples: [{ english: 'Can you describe what happened?', malay: 'Ayat ini menunjukkan penggunaan perkataan “describe” dalam konteks Bahasa Inggeris British.', chinese: '你能描述一下发生了什么吗？' }], collocations: ['describe a person', 'describe in detail'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'develop', term: 'develop', normalizedTerm: 'develop', partOfSpeech: ['verb'], ipa: '/dɪvˈɛləp/',
    chineseShort: '发展；开发', chineseExplanation: '逐渐成长、进步，或创造出新的产品、技能或想法。', englishDefinition: 'To grow or improve over time, or to create something new.',
    examples: [{ english: 'She developed better study habits this year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “develop” dalam konteks Bahasa Inggeris British.', chinese: '她今年养成了更好的学习习惯。' }], collocations: ['develop skills', 'develop a product'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'discover', term: 'discover', normalizedTerm: 'discover', partOfSpeech: ['verb'], ipa: '/dɪskˈʌvə/',
    chineseShort: '发现', chineseExplanation: '第一次找到、了解或注意到原本不知道的事物。', englishDefinition: 'To find or learn something for the first time.',
    examples: [{ english: 'We discovered a quiet café near the station.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discover” dalam konteks Bahasa Inggeris British.', chinese: '我们在车站附近发现了一家安静的咖啡馆。' }], collocations: ['discover a place', 'discover that'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'discuss', term: 'discuss', normalizedTerm: 'discuss', partOfSpeech: ['verb'], ipa: '/dɪskˈʌs/',
    chineseShort: '讨论', chineseExplanation: '与别人谈论某个主题，通常为了交换意见或作决定。', englishDefinition: 'To talk about a subject with other people in order to exchange ideas or decide something.',
    examples: [{ english: 'We discussed the problem after class.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discuss” dalam konteks Bahasa Inggeris British.', chinese: '我们下课后讨论了这个问题。' }], collocations: ['discuss a problem', 'discuss with'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'divide', term: 'divide', normalizedTerm: 'divide', partOfSpeech: ['verb'], ipa: '/dɪvˈaɪd/',
    chineseShort: '分开；除以', chineseExplanation: '把整体分成若干部分，也可用于数学中的除法。', englishDefinition: 'To separate something into parts; also, to calculate how many times one number fits into another.',
    examples: [{ english: 'Divide the class into four groups.', malay: 'Ayat ini menunjukkan penggunaan perkataan “divide” dalam konteks Bahasa Inggeris British.', chinese: '把全班分成四组。' }], collocations: ['divide into', 'divide by'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'earn', term: 'earn', normalizedTerm: 'earn', partOfSpeech: ['verb'], ipa: '/ˈɜːn/',
    chineseShort: '赚得；获得', chineseExplanation: '通过工作得到钱，也可通过努力获得尊重或信任。', englishDefinition: 'To receive money for work or gain something through effort.',
    examples: [{ english: 'She earns extra money by teaching online.', malay: 'Ayat ini menunjukkan penggunaan perkataan “earn” dalam konteks Bahasa Inggeris British.', chinese: '她通过线上教学赚取额外收入。' }], collocations: ['earn money', 'earn respect'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'encourage', term: 'encourage', normalizedTerm: 'encourage', partOfSpeech: ['verb'], ipa: '/ɛnkˈʌɹɪdʒ/',
    chineseShort: '鼓励', chineseExplanation: '给予某人信心或支持，使其更愿意做某事。', englishDefinition: 'To give someone confidence or support to do something.',
    examples: [{ english: 'My teacher encouraged me to speak more English.', malay: 'Ayat ini menunjukkan penggunaan perkataan “encourage” dalam konteks Bahasa Inggeris British.', chinese: '老师鼓励我多说英语。' }], collocations: ['encourage someone to', 'strongly encourage'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'enter', term: 'enter', normalizedTerm: 'enter', partOfSpeech: ['verb'], ipa: '/ˈɛntə/',
    chineseShort: '进入；输入', chineseExplanation: '进入一个地方，也可把信息输入系统。', englishDefinition: 'To go into a place or put information into a system.',
    examples: [{ english: 'Enter your email address in the form.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enter” dalam konteks Bahasa Inggeris British.', chinese: '在表格中输入你的电子邮件地址。' }], collocations: ['enter a room', 'enter details'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'expect', term: 'expect', normalizedTerm: 'expect', partOfSpeech: ['verb'], ipa: '/ɛkspˈɛkt/',
    chineseShort: '预期；期待', chineseExplanation: '认为某事很可能发生，或期待某人做某事。', englishDefinition: 'To think that something is likely to happen or that someone should do something.',
    examples: [{ english: 'We expect the train to arrive at six.', malay: 'Ayat ini menunjukkan penggunaan perkataan “expect” dalam konteks Bahasa Inggeris British.', chinese: '我们预计火车六点到达。' }], collocations: ['expect to', 'expect someone to'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'explain', term: 'explain', normalizedTerm: 'explain', partOfSpeech: ['verb'], ipa: '/ɛksplˈeɪn/',
    chineseShort: '解释', chineseExplanation: '通过提供细节或原因使某事更容易理解。', englishDefinition: 'To make something easier to understand by giving details or reasons.',
    examples: [{ english: 'Could you explain the rule again?', malay: 'Ayat ini menunjukkan penggunaan perkataan “explain” dalam konteks Bahasa Inggeris British.', chinese: '你可以再解释一次这条规则吗？' }], collocations: ['explain a rule', 'explain why'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'fail', term: 'fail', normalizedTerm: 'fail', partOfSpeech: ['verb'], ipa: '/fˈeɪl/',
    chineseShort: '失败；未能', chineseExplanation: '没有成功做到某事，或没有通过测试。', englishDefinition: 'To be unsuccessful at something or not pass a test.',
    examples: [{ english: 'He failed to notice the warning sign.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fail” dalam konteks Bahasa Inggeris British.', chinese: '他没有注意到警告标志。' }], collocations: ['fail to', 'fail an exam'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'identify', term: 'identify', normalizedTerm: 'identify', partOfSpeech: ['verb'], ipa: '/aɪdˈɛntɪfˌaɪ/',
    chineseShort: '识别；确认身份', chineseExplanation: '认出某人或某物，或确定其名称、性质或原因。', englishDefinition: 'To recognise someone or something and say who or what it is.',
    examples: [{ english: 'The technician identified the cause of the problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “identify” dalam konteks Bahasa Inggeris British.', chinese: '技术人员找出了问题的原因。' }], collocations: ['identify a problem', 'identify correctly'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'imagine', term: 'imagine', normalizedTerm: 'imagine', partOfSpeech: ['verb'], ipa: '/ɪmˈadʒɪn/',
    chineseShort: '想象', chineseExplanation: '在脑海中形成一个人、地方、情况或可能性的画面。', englishDefinition: 'To form a picture or idea of something in your mind.',
    examples: [{ english: 'Imagine living in a city without cars.', malay: 'Ayat ini menunjukkan penggunaan perkataan “imagine” dalam konteks Bahasa Inggeris British.', chinese: '想象一下住在一个没有汽车的城市里。' }], collocations: ['imagine doing', 'imagine that'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'include', term: 'include', normalizedTerm: 'include', partOfSpeech: ['verb'], ipa: '/ɪnklˈuːd/',
    chineseShort: '包括', chineseExplanation: '把某人或某物作为整体的一部分。', englishDefinition: 'To contain someone or something as part of a whole.',
    examples: [{ english: 'The price includes breakfast and Wi-Fi.', malay: 'Ayat ini menunjukkan penggunaan perkataan “include” dalam konteks Bahasa Inggeris British.', chinese: '这个价格包括早餐和无线网络。' }], collocations: ['include breakfast', 'include in'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'increase', term: 'increase', normalizedTerm: 'increase', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɪnkɹiːs/',
    chineseShort: '增加；提高', chineseExplanation: '使数量、程度或价格变大，或自己变大。', englishDefinition: 'To become larger in amount or level, or to make something larger.',
    examples: [{ english: 'The company plans to increase online sales.', malay: 'Ayat ini menunjukkan penggunaan perkataan “increase” dalam konteks Bahasa Inggeris British.', chinese: '公司计划提高线上销售额。' }], collocations: ['increase prices', 'increase by'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'introduce', term: 'introduce', normalizedTerm: 'introduce', partOfSpeech: ['verb'], ipa: '/ˌɪntɹədjˈuːs/',
    chineseShort: '介绍；引入', chineseExplanation: '让人们互相认识，或首次提出新的事物或制度。', englishDefinition: 'To tell people who someone is; also, to bring in something new.',
    examples: [{ english: 'Let me introduce you to my colleague.', malay: 'Ayat ini menunjukkan penggunaan perkataan “introduce” dalam konteks Bahasa Inggeris British.', chinese: '让我介绍你认识我的同事。' }], collocations: ['introduce someone to', 'introduce a system'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'invite', term: 'invite', normalizedTerm: 'invite', partOfSpeech: ['verb'], ipa: '/ɪnvˈaɪt/',
    chineseShort: '邀请', chineseExplanation: '请某人参加活动、来到某地或做某事。', englishDefinition: 'To ask someone to come somewhere or take part in something.',
    examples: [{ english: 'They invited us to dinner on Saturday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “invite” dalam konteks Bahasa Inggeris British.', chinese: '他们邀请我们星期六共进晚餐。' }], collocations: ['invite someone to', 'invite guests'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lend', term: 'lend', normalizedTerm: 'lend', partOfSpeech: ['verb'], ipa: '/lˈɛnd/',
    chineseShort: '借出', chineseExplanation: '把自己的东西暂时给别人使用，并期望对方归还。', englishDefinition: 'To give something to someone for a short time and expect it back.',
    examples: [{ english: 'Could you lend me your umbrella?', malay: 'Ayat ini menunjukkan penggunaan perkataan “lend” dalam konteks Bahasa Inggeris British.', chinese: '你可以把雨伞借给我吗？' }], collocations: ['lend money', 'lend someone something'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'manage', term: 'manage', normalizedTerm: 'manage', partOfSpeech: ['verb'], ipa: '/mˈanɪdʒ/',
    chineseShort: '设法做到；管理', chineseExplanation: '成功处理困难任务，也可负责管理人、项目或组织。', englishDefinition: 'To succeed in doing something difficult; also, to be responsible for people or work.',
    examples: [{ english: 'She managed to finish the report before lunch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “manage” dalam konteks Bahasa Inggeris British.', chinese: '她设法在午餐前完成了报告。' }], collocations: ['manage to', 'manage a team'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'mention', term: 'mention', normalizedTerm: 'mention', partOfSpeech: ['verb', 'noun'], ipa: '/mˈɛnʃən/',
    chineseShort: '提到', chineseExplanation: '在说话或写作中简短地说到某人或某事。', englishDefinition: 'To refer to someone or something briefly in speech or writing.',
    examples: [{ english: 'He mentioned your name during the meeting.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mention” dalam konteks Bahasa Inggeris British.', chinese: '他在会议中提到了你的名字。' }], collocations: ['mention a name', 'mention that'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'notice', term: 'notice', normalizedTerm: 'notice', partOfSpeech: ['verb', 'noun'], ipa: '/nˈəʊtɪs/',
    chineseShort: '注意到；通知', chineseExplanation: '看到或意识到某事，也可指正式的书面通知。', englishDefinition: 'To become aware of something; as a noun, a written announcement.',
    examples: [{ english: 'I noticed a small mistake in the email.', malay: 'Ayat ini menunjukkan penggunaan perkataan “notice” dalam konteks Bahasa Inggeris British.', chinese: '我注意到邮件里有一个小错误。' }], collocations: ['notice a difference', 'notice that'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'offer', term: 'offer', normalizedTerm: 'offer', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɒfə/',
    chineseShort: '提供；提议', chineseExplanation: '表示愿意给予某物、帮助或机会。', englishDefinition: 'To say that you are willing to give something or do something for someone.',
    examples: [{ english: 'He offered to help me carry the bags.', malay: 'Ayat ini menunjukkan penggunaan perkataan “offer” dalam konteks Bahasa Inggeris British.', chinese: '他主动提出帮我拿袋子。' }], collocations: ['offer help', 'offer to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'organize', term: 'organise', normalizedTerm: 'organise', partOfSpeech: ['verb'], ipa: '/ˈɔːɡɐnˌaɪz/',
    chineseShort: '组织；整理', chineseExplanation: '安排活动或任务，也可把物品整理得有条理。', englishDefinition: 'To plan an activity or arrange things in an orderly way.',
    examples: [{ english: 'We organised a small event for new students.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organise” dalam konteks Bahasa Inggeris British.', chinese: '我们为新生组织了一个小活动。' }], collocations: ['organise an event', 'organise files'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'perform', term: 'perform', normalizedTerm: 'perform', partOfSpeech: ['verb'], ipa: '/pəfˈɔːm/',
    chineseShort: '表演；执行', chineseExplanation: '在观众面前演出，或完成某项任务、职责或操作。', englishDefinition: 'To entertain an audience or carry out a task or duty.',
    examples: [{ english: 'The band will perform at the festival tonight.', malay: 'Ayat ini menunjukkan penggunaan perkataan “perform” dalam konteks Bahasa Inggeris British.', chinese: '乐队今晚会在节日活动中表演。' }], collocations: ['perform well', 'perform a task'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'prefer', term: 'prefer', normalizedTerm: 'prefer', partOfSpeech: ['verb'], ipa: '/pɹɪfˈɜː/',
    chineseShort: '更喜欢', chineseExplanation: '在两个或多个选择中更喜欢其中一个。', englishDefinition: 'To like one person or thing more than another.',
    examples: [{ english: 'I prefer travelling by train.', malay: 'Ayat ini menunjukkan penggunaan perkataan “prefer” dalam konteks Bahasa Inggeris British.', chinese: '我更喜欢乘火车旅行。' }], collocations: ['prefer to', 'prefer A to B'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'prepare', term: 'prepare', normalizedTerm: 'prepare', partOfSpeech: ['verb'], ipa: '/pɹɪpˈeə/',
    chineseShort: '准备', chineseExplanation: '提前做好需要的工作，使自己或某物为之后的活动做好准备。', englishDefinition: 'To make yourself or something ready for a future activity.',
    examples: [{ english: 'We prepared some questions for the interview.', malay: 'Ayat ini menunjukkan penggunaan perkataan “prepare” dalam konteks Bahasa Inggeris British.', chinese: '我们为面试准备了一些问题。' }], collocations: ['prepare for', 'prepare a meal'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'prevent', term: 'prevent', normalizedTerm: 'prevent', partOfSpeech: ['verb'], ipa: '/pɹɪvˈɛnt/',
    chineseShort: '防止；阻止', chineseExplanation: '使某事不发生，或阻止某人做某事。', englishDefinition: 'To stop something from happening or stop someone from doing something.',
    examples: [{ english: 'Regular backups can prevent data loss.', malay: 'Ayat ini menunjukkan penggunaan perkataan “prevent” dalam konteks Bahasa Inggeris British.', chinese: '定期备份可以防止数据丢失。' }], collocations: ['prevent damage', 'prevent someone from'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'promise', term: 'promise', normalizedTerm: 'promise', partOfSpeech: ['verb', 'noun'], ipa: '/pɹˈɒmɪs/',
    chineseShort: '承诺', chineseExplanation: '明确表示自己会做某事或某事一定会发生。', englishDefinition: 'To say clearly that you will definitely do something.',
    examples: [{ english: 'I promise to call you after work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “promise” dalam konteks Bahasa Inggeris British.', chinese: '我答应下班后给你打电话。' }], collocations: ['promise to', 'keep a promise'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'protect', term: 'protect', normalizedTerm: 'protect', partOfSpeech: ['verb'], ipa: '/pɹətˈɛkt/',
    chineseShort: '保护', chineseExplanation: '使某人或某物免受伤害、损坏或危险。', englishDefinition: 'To keep someone or something safe from harm or damage.',
    examples: [{ english: 'Wear sunscreen to protect your skin.', malay: 'Ayat ini menunjukkan penggunaan perkataan “protect” dalam konteks Bahasa Inggeris British.', chinese: '涂防晒霜来保护皮肤。' }], collocations: ['protect from', 'protect the environment'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'provide', term: 'provide', normalizedTerm: 'provide', partOfSpeech: ['verb'], ipa: '/pɹəvˈaɪd/',
    chineseShort: '提供', chineseExplanation: '给予某人需要的东西、信息、服务或机会。', englishDefinition: 'To give someone something they need, such as information or a service.',
    examples: [{ english: 'The hotel provides free breakfast.', malay: 'Ayat ini menunjukkan penggunaan perkataan “provide” dalam konteks Bahasa Inggeris British.', chinese: '这家酒店提供免费早餐。' }], collocations: ['provide information', 'provide someone with'], level: 2, cefr: 'B1', categories: ['Business', 'Travel'],
  },
  {
    id: 'realize', term: 'realise', normalizedTerm: 'realise', partOfSpeech: ['verb'], ipa: '/ɹˈiəlaɪz/',
    chineseShort: '意识到；实现', chineseExplanation: '突然理解或意识到某事，也可表示让计划成为现实。', englishDefinition: 'To become aware of something; also, to make a plan or hope become real.',
    examples: [{ english: 'I realised that I had left my keys at home.', malay: 'Ayat ini menunjukkan penggunaan perkataan “realise” dalam konteks Bahasa Inggeris British.', chinese: '我意识到自己把钥匙落在家里了。' }], collocations: ['realise that', 'realise a dream'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'receive', term: 'receive', normalizedTerm: 'receive', partOfSpeech: ['verb'], ipa: '/ɹɪsˈiːv/',
    chineseShort: '收到；接收', chineseExplanation: '得到别人发送、给予或交付的东西。', englishDefinition: 'To get something that someone sends, gives, or delivers.',
    examples: [{ english: 'Did you receive my message yesterday?', malay: 'Ayat ini menunjukkan penggunaan perkataan “receive” dalam konteks Bahasa Inggeris British.', chinese: '你昨天收到我的信息了吗？' }], collocations: ['receive a message', 'receive payment'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'reduce', term: 'reduce', normalizedTerm: 'reduce', partOfSpeech: ['verb'], ipa: '/ɹɪdjˈuːs/',
    chineseShort: '减少；降低', chineseExplanation: '使数量、价格、风险或程度变小。', englishDefinition: 'To make something smaller in amount, level, or size.',
    examples: [{ english: 'We are trying to reduce our electricity use.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reduce” dalam konteks Bahasa Inggeris British.', chinese: '我们正在努力减少用电量。' }], collocations: ['reduce costs', 'reduce risk'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'refuse', term: 'refuse', normalizedTerm: 'refuse', partOfSpeech: ['verb'], ipa: '/ɹɪfjˈuːz/',
    chineseShort: '拒绝', chineseExplanation: '明确表示不愿接受、给予或做某事。', englishDefinition: 'To say that you will not accept, give, or do something.',
    examples: [{ english: 'She refused to sign the document.', malay: 'Ayat ini menunjukkan penggunaan perkataan “refuse” dalam konteks Bahasa Inggeris British.', chinese: '她拒绝在文件上签字。' }], collocations: ['refuse to', 'refuse an offer'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'repair', term: 'repair', normalizedTerm: 'repair', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪpˈeə/',
    chineseShort: '修理', chineseExplanation: '把损坏或不能正常工作的东西恢复到可使用状态。', englishDefinition: 'To fix something that is damaged or not working properly.',
    examples: [{ english: 'The shop repaired my phone in one day.', malay: 'Ayat ini menunjukkan penggunaan perkataan “repair” dalam konteks Bahasa Inggeris British.', chinese: '那家店一天内修好了我的手机。' }], collocations: ['repair a phone', 'repair damage'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'repeat', term: 'repeat', normalizedTerm: 'repeat', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪpˈiːt/',
    chineseShort: '重复', chineseExplanation: '再次说、写或做同样的事情。', englishDefinition: 'To say, write, or do something again.',
    examples: [{ english: 'Could you repeat the question, please?', malay: 'Ayat ini menunjukkan penggunaan perkataan “repeat” dalam konteks Bahasa Inggeris British.', chinese: '请你再重复一次问题好吗？' }], collocations: ['repeat a question', 'repeat after'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'replace', term: 'replace', normalizedTerm: 'replace', partOfSpeech: ['verb'], ipa: '/ɹɪplˈeɪs/',
    chineseShort: '替换；更换', chineseExplanation: '用新的或不同的东西代替原来的东西。', englishDefinition: 'To take the place of something with a new or different thing.',
    examples: [{ english: 'We need to replace the old battery.', malay: 'Ayat ini menunjukkan penggunaan perkataan “replace” dalam konteks Bahasa Inggeris British.', chinese: '我们需要更换旧电池。' }], collocations: ['replace with', 'replace a part'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'reply', term: 'reply', normalizedTerm: 'reply', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪplˈaɪ/',
    chineseShort: '回复', chineseExplanation: '回答别人说的话、信息或邮件。', englishDefinition: 'To answer someone in speech, writing, or a message.',
    examples: [{ english: 'Please reply to the email by Friday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reply” dalam konteks Bahasa Inggeris British.', chinese: '请在星期五前回复这封邮件。' }], collocations: ['reply to', 'reply quickly'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'report', term: 'report', normalizedTerm: 'report', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪpˈɔːt/',
    chineseShort: '报告；举报', chineseExplanation: '提供关于事件或情况的信息，也可向有关人员报告问题。', englishDefinition: 'To give information about an event or situation, especially officially.',
    examples: [{ english: 'Please report any technical problems to support.', malay: 'Ayat ini menunjukkan penggunaan perkataan “report” dalam konteks Bahasa Inggeris British.', chinese: '如有技术问题，请向客服报告。' }], collocations: ['report a problem', 'report to'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'save', term: 'save', normalizedTerm: 'save', partOfSpeech: ['verb', 'noun'], ipa: '/sˈeɪv/',
    chineseShort: '节省；保存；拯救', chineseExplanation: '少花钱、时间或资源，也可保存数据或使人脱离危险。', englishDefinition: 'To use less time, money, or resources; also, to store data or rescue someone.',
    examples: [{ english: 'This shortcut can save you a lot of time.', malay: 'Ayat ini menunjukkan penggunaan perkataan “save” dalam konteks Bahasa Inggeris British.', chinese: '这个快捷方式可以帮你节省很多时间。' }], collocations: ['save time', 'save money'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'search', term: 'search', normalizedTerm: 'search', partOfSpeech: ['verb', 'noun'], ipa: '/sˈɜːtʃ/',
    chineseShort: '搜索；寻找', chineseExplanation: '仔细寻找某人、某物或信息。', englishDefinition: 'To look carefully for someone, something, or information.',
    examples: [{ english: 'I searched online for a cheaper ticket.', malay: 'Ayat ini menunjukkan penggunaan perkataan “search” dalam konteks Bahasa Inggeris British.', chinese: '我在网上搜索更便宜的票。' }], collocations: ['search for', 'search online'], level: 2, cefr: 'B1', categories: ['Technology', 'Travel'],
  },
  {
    id: 'select', term: 'select', normalizedTerm: 'select', partOfSpeech: ['verb'], ipa: '/sɪlˈɛkt/',
    chineseShort: '选择', chineseExplanation: '从多个选项中挑选一个或一些。', englishDefinition: 'To choose someone or something from a group of options.',
    examples: [{ english: 'Select your preferred language from the menu.', malay: 'Ayat ini menunjukkan penggunaan perkataan “select” dalam konteks Bahasa Inggeris British.', chinese: '从菜单中选择你偏好的语言。' }], collocations: ['select an option', 'carefully select'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'share', term: 'share', normalizedTerm: 'share', partOfSpeech: ['verb', 'noun'], ipa: '/ʃˈeə/',
    chineseShort: '分享；共同使用', chineseExplanation: '把信息、想法或物品给别人，或与别人共同使用。', englishDefinition: 'To give information or things to others, or use something together.',
    examples: [{ english: 'She shared the document with the whole team.', malay: 'Ayat ini menunjukkan penggunaan perkataan “share” dalam konteks Bahasa Inggeris British.', chinese: '她把文件分享给了整个团队。' }], collocations: ['share information', 'share with'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'solve', term: 'solve', normalizedTerm: 'solve', partOfSpeech: ['verb'], ipa: '/sˈɒlv/',
    chineseShort: '解决；解答', chineseExplanation: '找到问题、困难或题目的答案。', englishDefinition: 'To find an answer to a problem, difficulty, or question.',
    examples: [{ english: 'We need to solve this problem before launch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “solve” dalam konteks Bahasa Inggeris British.', chinese: '我们需要在上线前解决这个问题。' }], collocations: ['solve a problem', 'solve an issue'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'suggest', term: 'suggest', normalizedTerm: 'suggest', partOfSpeech: ['verb'], ipa: '/sədʒˈɛst/',
    chineseShort: '建议；暗示', chineseExplanation: '提出一个想法或行动供别人考虑，也可间接表明某事。', englishDefinition: 'To give an idea for someone to consider; also, to indicate something indirectly.',
    examples: [{ english: 'I suggest taking an earlier train.', malay: 'Ayat ini menunjukkan penggunaan perkataan “suggest” dalam konteks Bahasa Inggeris British.', chinese: '我建议搭较早的一班火车。' }], collocations: ['suggest doing', 'suggest that'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'support', term: 'support', normalizedTerm: 'support', partOfSpeech: ['verb', 'noun'], ipa: '/səpˈɔːt/',
    chineseShort: '支持；支撑', chineseExplanation: '给予某人帮助、鼓励或资源，也可支撑某个物体。', englishDefinition: 'To help or encourage someone, or hold something in position.',
    examples: [{ english: 'My family supported my decision to study abroad.', malay: 'Ayat ini menunjukkan penggunaan perkataan “support” dalam konteks Bahasa Inggeris British.', chinese: '我的家人支持我出国留学的决定。' }], collocations: ['support a decision', 'support someone'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'suppose', term: 'suppose', normalizedTerm: 'suppose', partOfSpeech: ['verb'], ipa: '/sʌpˈəʊz/',
    chineseShort: '认为；假设', chineseExplanation: '认为某事可能是真的，或为了讨论而假设一种情况。', englishDefinition: 'To think something is probably true or imagine a situation for discussion.',
    examples: [{ english: 'I suppose we could meet after lunch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “suppose” dalam konteks Bahasa Inggeris British.', chinese: '我想我们可以午饭后见面。' }], collocations: ['suppose that', 'be supposed to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'survive', term: 'survive', normalizedTerm: 'survive', partOfSpeech: ['verb'], ipa: '/səvˈaɪv/',
    chineseShort: '生存；挺过', chineseExplanation: '在危险、困难或严重事件后继续活着或存在。', englishDefinition: 'To continue to live or exist after danger or difficulty.',
    examples: [{ english: 'The small business survived a difficult year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “survive” dalam konteks Bahasa Inggeris British.', chinese: '这家小企业挺过了艰难的一年。' }], collocations: ['survive an accident', 'survive on'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'trust', term: 'trust', normalizedTerm: 'trust', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈʌst/',
    chineseShort: '信任', chineseExplanation: '相信某人诚实可靠，或相信某事物能够正常运作。', englishDefinition: 'To believe that someone is honest and reliable or that something will work properly.',
    examples: [{ english: 'I trust her to make the right decision.', malay: 'Ayat ini menunjukkan penggunaan perkataan “trust” dalam konteks Bahasa Inggeris British.', chinese: '我相信她会做出正确的决定。' }], collocations: ['trust someone', 'trust in'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'update', term: 'update', normalizedTerm: 'update', partOfSpeech: ['verb', 'noun'], ipa: '/ˈʌpdeɪt/',
    chineseShort: '更新', chineseExplanation: '加入最新信息，使内容、软件或记录保持最新。', englishDefinition: 'To add the newest information or make software or records current.',
    examples: [{ english: 'Please update the app before you continue.', malay: 'Ayat ini menunjukkan penggunaan perkataan “update” dalam konteks Bahasa Inggeris British.', chinese: '继续之前请先更新应用程序。' }], collocations: ['update an app', 'update information'], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'waste', term: 'waste', normalizedTerm: 'waste', partOfSpeech: ['verb', 'noun'], ipa: '/wˈeɪst/',
    chineseShort: '浪费', chineseExplanation: '不必要地使用时间、金钱、食物或其他资源。', englishDefinition: 'To use time, money, food, or other resources unnecessarily.',
    examples: [{ english: 'Do not waste water when washing the dishes.', malay: 'Ayat ini menunjukkan penggunaan perkataan “waste” dalam konteks Bahasa Inggeris British.', chinese: '洗碗时不要浪费水。' }], collocations: ['waste time', 'waste money'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'worry', term: 'worry', normalizedTerm: 'worry', partOfSpeech: ['verb', 'noun'], ipa: '/wˈʌɹi/',
    chineseShort: '担心', chineseExplanation: '因为可能发生的问题而感到不安或焦虑。', englishDefinition: 'To feel anxious because of a possible problem.',
    examples: [{ english: 'Do not worry about the small delay.', malay: 'Ayat ini menunjukkan penggunaan perkataan “worry” dalam konteks Bahasa Inggeris British.', chinese: '不要担心这点小延误。' }], collocations: ['worry about', 'make someone worry'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'appear', term: 'appear', normalizedTerm: 'appear', partOfSpeech: ['verb'], ipa: '/ɐpˈiə/',
    chineseShort: '出现；似乎', chineseExplanation: '进入视线或变得可见，也可表示看起来像某种情况。', englishDefinition: 'To become visible; also, to seem to be a particular way.',
    examples: [{ english: 'A warning message appeared on the screen.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appear” dalam konteks Bahasa Inggeris British.', chinese: '屏幕上出现了一条警告信息。' }], collocations: ['appear on', 'appear to be'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'attend', term: 'attend', normalizedTerm: 'attend', partOfSpeech: ['verb'], ipa: '/ɐtˈɛnd/',
    chineseShort: '参加；出席', chineseExplanation: '去参加会议、课程、活动或仪式。', englishDefinition: 'To go to and be present at a meeting, class, event, or ceremony.',
    examples: [{ english: 'More than fifty people attended the workshop.', malay: 'Ayat ini menunjukkan penggunaan perkataan “attend” dalam konteks Bahasa Inggeris British.', chinese: '五十多人参加了这次工作坊。' }], collocations: ['attend a meeting', 'attend school'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'cause', term: 'cause', normalizedTerm: 'cause', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɔːz/',
    chineseShort: '造成；引起', chineseExplanation: '使某个事件、问题或结果发生。', englishDefinition: 'To make something happen, especially a problem or result.',
    examples: [{ english: 'Heavy rain caused several delays.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cause” dalam konteks Bahasa Inggeris British.', chinese: '大雨造成了多次延误。' }], collocations: ['cause a problem', 'cause damage'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'contact', term: 'contact', normalizedTerm: 'contact', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɒntakt/',
    chineseShort: '联系', chineseExplanation: '通过电话、邮件或其他方式与某人取得联系。', englishDefinition: 'To communicate with someone by phone, email, or another method.',
    examples: [{ english: 'Contact the hotel if your plans change.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contact” dalam konteks Bahasa Inggeris British.', chinese: '如果计划改变，请联系酒店。' }], collocations: ['contact customer service', 'contact someone'], level: 2, cefr: 'B1', categories: ['Business', 'Travel'],
  },
  {
    id: 'deal', term: 'deal', normalizedTerm: 'deal', partOfSpeech: ['verb', 'noun'], ipa: '/dˈiːl/',
    chineseShort: '处理；应对', chineseExplanation: '采取行动处理问题、任务或困难情况。', englishDefinition: 'To take action to handle a problem, task, or situation.',
    examples: [{ english: 'We need to deal with this complaint today.', malay: 'Ayat ini menunjukkan penggunaan perkataan “deal” dalam konteks Bahasa Inggeris British.', chinese: '我们今天需要处理这项投诉。' }], collocations: ['deal with', 'deal directly with'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'decrease', term: 'decrease', normalizedTerm: 'decrease', partOfSpeech: ['verb', 'noun'], ipa: '/dˈiːkɹiːs/',
    chineseShort: '减少；下降', chineseExplanation: '数量、价格、速度或程度变小，或使其变小。', englishDefinition: 'To become smaller in amount or level, or make something smaller.',
    examples: [{ english: 'Traffic usually decreases after nine o\'clock.', malay: 'Ayat ini menunjukkan penggunaan perkataan “decrease” dalam konteks Bahasa Inggeris British.', chinese: '九点后交通量通常会减少。' }], collocations: ['decrease by', 'decrease in'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'disappear', term: 'disappear', normalizedTerm: 'disappear', partOfSpeech: ['verb'], ipa: '/dˌɪsɐpˈiə/',
    chineseShort: '消失', chineseExplanation: '从视线中不见，或不再存在。', englishDefinition: 'To stop being visible or stop existing.',
    examples: [{ english: 'The clouds disappeared by the afternoon.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disappear” dalam konteks Bahasa Inggeris British.', chinese: '到了下午云就消失了。' }], collocations: ['disappear completely', 'disappear from'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'enjoy', term: 'enjoy', normalizedTerm: 'enjoy', partOfSpeech: ['verb'], ipa: '/ɛndʒˈɔɪ/',
    chineseShort: '享受；喜欢', chineseExplanation: '从某项活动、经历或事物中获得快乐。', englishDefinition: 'To get pleasure from an activity, experience, or thing.',
    examples: [{ english: 'I really enjoyed the museum tour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enjoy” dalam konteks Bahasa Inggeris British.', chinese: '我非常喜欢这次博物馆参观。' }], collocations: ['enjoy doing', 'enjoy a meal'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'escape', term: 'escape', normalizedTerm: 'escape', partOfSpeech: ['verb', 'noun'], ipa: '/ɛskˈeɪp/',
    chineseShort: '逃离；逃脱', chineseExplanation: '从危险、限制或不愉快的地方成功离开。', englishDefinition: 'To get away from a dangerous, restricted, or unpleasant place.',
    examples: [{ english: 'The family escaped from the building safely.', malay: 'Ayat ini menunjukkan penggunaan perkataan “escape” dalam konteks Bahasa Inggeris British.', chinese: '这家人安全地逃出了大楼。' }], collocations: ['escape from', 'escape danger'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'examine', term: 'examine', normalizedTerm: 'examine', partOfSpeech: ['verb'], ipa: '/ɛɡzˈamɪn/',
    chineseShort: '检查；考察', chineseExplanation: '仔细观察或研究某人、某物或问题。', englishDefinition: 'To look at or study someone or something carefully.',
    examples: [{ english: 'The doctor examined my injured hand.', malay: 'Ayat ini menunjukkan penggunaan perkataan “examine” dalam konteks Bahasa Inggeris British.', chinese: '医生检查了我受伤的手。' }], collocations: ['examine a patient', 'examine carefully'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'exist', term: 'exist', normalizedTerm: 'exist', partOfSpeech: ['verb'], ipa: '/ɛɡzˈɪst/',
    chineseShort: '存在', chineseExplanation: '在现实中有、生活或发生。', englishDefinition: 'To be real, present, or alive.',
    examples: [{ english: 'Several different solutions already exist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “exist” dalam konteks Bahasa Inggeris British.', chinese: '已经存在几种不同的解决方案。' }], collocations: ['still exist', 'exist in'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'express', term: 'express', normalizedTerm: 'express', partOfSpeech: ['verb'], ipa: '/ɛkspɹˈɛs/',
    chineseShort: '表达', chineseExplanation: '通过语言、行为、艺术或其他方式表现想法和感受。', englishDefinition: 'To show or communicate thoughts and feelings through words, actions, or art.',
    examples: [{ english: 'She expressed her opinion politely.', malay: 'Ayat ini menunjukkan penggunaan perkataan “express” dalam konteks Bahasa Inggeris British.', chinese: '她礼貌地表达了自己的意见。' }], collocations: ['express an opinion', 'express feelings'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'fit', term: 'fit', normalizedTerm: 'fit', partOfSpeech: ['verb'], ipa: '/fˈɪt/',
    chineseShort: '适合；合身', chineseExplanation: '大小或形状合适，也可表示与需求或情况相匹配。', englishDefinition: 'To be the right size or shape, or to be suitable for a purpose.',
    examples: [{ english: 'This table will fit in the corner.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fit” dalam konteks Bahasa Inggeris British.', chinese: '这张桌子能放进那个角落。' }], collocations: ['fit well', 'fit into'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'handle', term: 'handle', normalizedTerm: 'handle', partOfSpeech: ['verb', 'noun'], ipa: '/hˈandəl/',
    chineseShort: '处理；操作', chineseExplanation: '有效处理情况、任务或问题，也可用手操作物品。', englishDefinition: 'To deal with a situation or task successfully; also, to operate something with your hands.',
    examples: [{ english: 'She handled the difficult customer calmly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “handle” dalam konteks Bahasa Inggeris British.', chinese: '她冷静地处理了那位难应付的顾客。' }], collocations: ['handle a problem', 'handle carefully'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'influence', term: 'influence', normalizedTerm: 'influence', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɪnfluːəns/',
    chineseShort: '影响', chineseExplanation: '改变某人的想法、行为，或影响事情的发展结果。', englishDefinition: 'To affect the way someone thinks or acts, or how a situation develops.',
    examples: [{ english: 'Friends can influence our choices.', malay: 'Ayat ini menunjukkan penggunaan perkataan “influence” dalam konteks Bahasa Inggeris British.', chinese: '朋友可能会影响我们的选择。' }], collocations: ['influence a decision', 'strongly influence'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'inform', term: 'inform', normalizedTerm: 'inform', partOfSpeech: ['verb'], ipa: '/ɪnfˈɔːm/',
    chineseShort: '通知；告知', chineseExplanation: '正式或清楚地告诉某人事实、决定或最新情况。', englishDefinition: 'To tell someone facts, decisions, or new information.',
    examples: [{ english: 'Please inform us if your address changes.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inform” dalam konteks Bahasa Inggeris British.', chinese: '如果你的地址有变化，请通知我们。' }], collocations: ['inform someone of', 'keep informed'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'interview', term: 'interview', normalizedTerm: 'interview', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɪntəvjˌuː/',
    chineseShort: '采访；面试', chineseExplanation: '向某人提问以获取信息，或评估其是否适合工作或课程。', englishDefinition: 'To ask someone questions for information or to judge whether they are suitable for a job or course.',
    examples: [{ english: 'The company interviewed three candidates today.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interview” dalam konteks Bahasa Inggeris British.', chinese: '公司今天面试了三名候选人。' }], collocations: ['interview a candidate', 'job interview'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'involve', term: 'involve', normalizedTerm: 'involve', partOfSpeech: ['verb'], ipa: '/ɪnvˈɒlv/',
    chineseShort: '涉及；需要', chineseExplanation: '包括某项活动、人员或过程作为必要部分。', englishDefinition: 'To include an activity, person, or process as a necessary part.',
    examples: [{ english: 'The job involves working with customers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “involve” dalam konteks Bahasa Inggeris British.', chinese: '这份工作需要与顾客打交道。' }], collocations: ['involve doing', 'be involved in'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'lead', term: 'lead', normalizedTerm: 'lead', partOfSpeech: ['verb', 'noun'], ipa: '/lˈiːd/',
    chineseShort: '带领；导致', chineseExplanation: '带领别人前往某处或指导团队，也可引起某个结果。', englishDefinition: 'To guide people or be in charge; also, to cause a result.',
    examples: [{ english: 'She will lead the project next month.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lead” dalam konteks Bahasa Inggeris British.', chinese: '她下个月将负责带领这个项目。' }], collocations: ['lead a team', 'lead to'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'matter', term: 'matter', normalizedTerm: 'matter', partOfSpeech: ['verb', 'noun'], ipa: '/mˈatə/',
    chineseShort: '要紧；有关系', chineseExplanation: '表示某事重要并会影响情况或结果。', englishDefinition: 'To be important or have an effect on a situation.',
    examples: [{ english: 'It does not matter which seat you choose.', malay: 'Ayat ini menunjukkan penggunaan perkataan “matter” dalam konteks Bahasa Inggeris British.', chinese: '你选哪个座位都没关系。' }], collocations: ['matter to', 'it matters'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'occur', term: 'occur', normalizedTerm: 'occur', partOfSpeech: ['verb'], ipa: '/əkˈɜː/',
    chineseShort: '发生', chineseExplanation: '事件或情况在某个时间或地点出现。', englishDefinition: 'To happen, especially at a particular time or place.',
    examples: [{ english: 'The problem usually occurs after the update.', malay: 'Ayat ini menunjukkan penggunaan perkataan “occur” dalam konteks Bahasa Inggeris British.', chinese: '这个问题通常在更新后发生。' }], collocations: ['occur frequently', 'occur during'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'participate', term: 'participate', normalizedTerm: 'participate', partOfSpeech: ['verb'], ipa: '/pɑːtˈɪsɪpˌeɪt/',
    chineseShort: '参加；参与', chineseExplanation: '加入某项活动、讨论或事件并积极参与。', englishDefinition: 'To take part in an activity, discussion, or event.',
    examples: [{ english: 'Everyone is encouraged to participate in the discussion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “participate” dalam konteks Bahasa Inggeris British.', chinese: '鼓励每个人参与讨论。' }], collocations: ['participate in', 'actively participate'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'ability', term: 'ability', normalizedTerm: 'ability', partOfSpeech: ['noun'], ipa: '/ɐbˈɪləti/',
    chineseShort: '能力；才能', chineseExplanation: '完成某事所需要的技能、知识或天赋。', englishDefinition: 'The skill or power needed to do something.',
    examples: [{ english: 'Her ability to explain ideas clearly is useful at work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ability” dalam konteks Bahasa Inggeris British.', chinese: '她清楚解释想法的能力在工作中很有用。' }], collocations: ['have the ability', 'natural ability'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'accident', term: 'accident', normalizedTerm: 'accident', partOfSpeech: ['noun'], ipa: '/ˈaksɪdənt/',
    chineseShort: '事故；意外', chineseExplanation: '没有计划并可能造成伤害或损失的事件。', englishDefinition: 'An unexpected event that may cause damage or injury.',
    examples: [{ english: 'There was a minor accident near the station.', malay: 'Ayat ini menunjukkan penggunaan perkataan “accident” dalam konteks Bahasa Inggeris British.', chinese: '车站附近发生了一起轻微事故。' }], collocations: ['car accident', 'by accident'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'advantage', term: 'advantage', normalizedTerm: 'advantage', partOfSpeech: ['noun'], ipa: '/ɐdvˈantɪdʒ/',
    chineseShort: '优势；好处', chineseExplanation: '使某人或某事处于更有利位置的条件。', englishDefinition: 'A condition that makes someone or something more likely to succeed.',
    examples: [{ english: 'One advantage of online study is flexibility.', malay: 'Ayat ini menunjukkan penggunaan perkataan “advantage” dalam konteks Bahasa Inggeris British.', chinese: '在线学习的一个优势是灵活。' }], collocations: ['main advantage', 'have an advantage'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'advice', term: 'advice', normalizedTerm: 'advice', partOfSpeech: ['noun'], ipa: '/ɐdvˈaɪs/',
    chineseShort: '建议；忠告', chineseExplanation: '针对某种情况应该怎么做而提出的意见。', englishDefinition: 'An opinion about what someone should do in a particular situation.',
    examples: [{ english: 'She gave me useful advice about the interview.', malay: 'Ayat ini menunjukkan penggunaan perkataan “advice” dalam konteks Bahasa Inggeris British.', chinese: '她给了我关于面试的有用建议。' }], collocations: ['give advice', 'piece of advice'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'amount', term: 'amount', normalizedTerm: 'amount', partOfSpeech: ['noun'], ipa: '/ɐmˈaʊnt/',
    chineseShort: '数量；金额', chineseExplanation: '某种东西的总量，尤其用于不可数名词或金钱。', englishDefinition: 'A quantity of something, especially something uncountable or money.',
    examples: [{ english: 'We spent a large amount of time on the project.', malay: 'Ayat ini menunjukkan penggunaan perkataan “amount” dalam konteks Bahasa Inggeris British.', chinese: '我们在这个项目上花了大量时间。' }], collocations: ['large amount', 'total amount'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'article', term: 'article', normalizedTerm: 'article', partOfSpeech: ['noun'], ipa: '/ˈɑːtɪkəl/',
    chineseShort: '文章；物品', chineseExplanation: '报纸、杂志或网站中的一篇文字，也可指一件物品。', englishDefinition: 'A piece of writing in a newspaper, magazine, or website; also, an item.',
    examples: [{ english: 'I read an interesting article about city transport.', malay: 'Ayat ini menunjukkan penggunaan perkataan “article” dalam konteks Bahasa Inggeris British.', chinese: '我读了一篇关于城市交通的有趣文章。' }], collocations: ['news article', 'online article'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'attention', term: 'attention', normalizedTerm: 'attention', partOfSpeech: ['noun'], ipa: '/ɐtˈɛnʃən/',
    chineseShort: '注意；关注', chineseExplanation: '集中在某人或某事上的观察和思考。', englishDefinition: 'Careful notice or thought given to someone or something.',
    examples: [{ english: 'Please pay attention to the safety instructions.', malay: 'Ayat ini menunjukkan penggunaan perkataan “attention” dalam konteks Bahasa Inggeris British.', chinese: '请注意安全说明。' }], collocations: ['pay attention', 'get attention'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'audience', term: 'audience', normalizedTerm: 'audience', partOfSpeech: ['noun'], ipa: '/ˈɔːdiəns/',
    chineseShort: '观众；听众', chineseExplanation: '观看表演、听演讲或接收媒体内容的人群。', englishDefinition: 'The people who watch a performance, listen to a talk, or receive media.',
    examples: [{ english: 'The speaker answered questions from the audience.', malay: 'Ayat ini menunjukkan penggunaan perkataan “audience” dalam konteks Bahasa Inggeris British.', chinese: '演讲者回答了听众的问题。' }], collocations: ['large audience', 'target audience'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'background', term: 'background', normalizedTerm: 'background', partOfSpeech: ['noun'], ipa: '/bˈakɡɹaʊnd/',
    chineseShort: '背景；经历', chineseExplanation: '某人过去的经历，或事件发生的相关情况。', englishDefinition: 'A person\'s past experience or the circumstances behind a situation.',
    examples: [{ english: 'She has a background in customer service.', malay: 'Ayat ini menunjukkan penggunaan perkataan “background” dalam konteks Bahasa Inggeris British.', chinese: '她有客户服务方面的工作背景。' }], collocations: ['work background', 'background information'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'behavior', term: 'behaviour', normalizedTerm: 'behaviour', partOfSpeech: ['noun'], ipa: '/bɪhˈeɪvjə/',
    chineseShort: '行为；举止', chineseExplanation: '某人在特定情况下行动和表现的方式。', englishDefinition: 'The way a person acts, especially in a particular situation.',
    examples: [{ english: 'Good behaviour is expected during the trip.', malay: 'Ayat ini menunjukkan penggunaan perkataan “behaviour” dalam konteks Bahasa Inggeris British.', chinese: '旅行期间应保持良好行为。' }], collocations: ['good behaviour', 'change behaviour'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'benefit', term: 'benefit', normalizedTerm: 'benefit', partOfSpeech: ['noun'], ipa: '/bˈɛnɪfˌɪt/',
    chineseShort: '好处；益处', chineseExplanation: '某事带来的积极结果或帮助。', englishDefinition: 'A helpful or positive result of something.',
    examples: [{ english: 'Regular exercise has many health benefits.', malay: 'Ayat ini menunjukkan penggunaan perkataan “benefit” dalam konteks Bahasa Inggeris British.', chinese: '规律运动有很多健康益处。' }], collocations: ['health benefit', 'main benefit'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'bill', term: 'bill', normalizedTerm: 'bill', partOfSpeech: ['noun'], ipa: '/bˈɪl/',
    chineseShort: '账单；法案', chineseExplanation: '需要支付的费用清单，也可指提交讨论的法律提案。', englishDefinition: 'A statement showing money owed; also, a proposed law.',
    examples: [{ english: 'Could we have the bill, please?', malay: 'Ayat ini menunjukkan penggunaan perkataan “bill” dalam konteks Bahasa Inggeris British.', chinese: '请给我们账单好吗？' }], collocations: ['pay a bill', 'electricity bill'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'border', term: 'border', normalizedTerm: 'border', partOfSpeech: ['noun'], ipa: '/bˈɔːdə/',
    chineseShort: '边界；国界', chineseExplanation: '两个地区或国家之间的分界线。', englishDefinition: 'The line separating two areas or countries.',
    examples: [{ english: 'We crossed the border by bus.', malay: 'Ayat ini menunjukkan penggunaan perkataan “border” dalam konteks Bahasa Inggeris British.', chinese: '我们乘巴士越过了国界。' }], collocations: ['cross the border', 'border control'], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'career', term: 'career', normalizedTerm: 'career', partOfSpeech: ['noun'], ipa: '/kəɹˈiə/',
    chineseShort: '职业；事业', chineseExplanation: '一个人在较长时期内从事并发展的工作领域。', englishDefinition: 'The type of work a person does and develops over many years.',
    examples: [{ english: 'She wants a career in technology.', malay: 'Ayat ini menunjukkan penggunaan perkataan “career” dalam konteks Bahasa Inggeris British.', chinese: '她想从事科技行业。' }], collocations: ['career choice', 'career development'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'challenge', term: 'challenge', normalizedTerm: 'challenge', partOfSpeech: ['noun'], ipa: '/tʃˈalɪndʒ/',
    chineseShort: '挑战；难题', chineseExplanation: '需要努力、技能或勇气才能完成或解决的事情。', englishDefinition: 'Something difficult that requires effort, skill, or courage.',
    examples: [{ english: 'Learning to speak confidently can be a challenge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “challenge” dalam konteks Bahasa Inggeris British.', chinese: '学会自信地说话可能是一个挑战。' }], collocations: ['face a challenge', 'new challenge'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'choice', term: 'choice', normalizedTerm: 'choice', partOfSpeech: ['noun'], ipa: '/tʃˈɔɪs/',
    chineseShort: '选择；选项', chineseExplanation: '在多个可能性中进行选择的行为或可选择的事物。', englishDefinition: 'An act of choosing or one of several possible options.',
    examples: [{ english: 'You have a choice between two payment methods.', malay: 'Ayat ini menunjukkan penggunaan perkataan “choice” dalam konteks Bahasa Inggeris British.', chinese: '你可以在两种付款方式之间选择。' }], collocations: ['make a choice', 'good choice'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'communication', term: 'communication', normalizedTerm: 'communication', partOfSpeech: ['noun'], ipa: '/kəmjˌuːnɪkˈeɪʃən/',
    chineseShort: '沟通；交流', chineseExplanation: '人与人之间传递信息、想法或感受的过程。', englishDefinition: 'The process of exchanging information, ideas, or feelings.',
    examples: [{ english: 'Clear communication helps teams work better.', malay: 'Ayat ini menunjukkan penggunaan perkataan “communication” dalam konteks Bahasa Inggeris British.', chinese: '清楚的沟通能帮助团队更好地合作。' }], collocations: ['effective communication', 'communication skills'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'community', term: 'community', normalizedTerm: 'community', partOfSpeech: ['noun'], ipa: '/kəmjˈuːnɪti/',
    chineseShort: '社区；群体', chineseExplanation: '住在同一地区或有共同兴趣、身份的人群。', englishDefinition: 'A group of people living in the same area or sharing an interest.',
    examples: [{ english: 'The local community organised a clean-up day.', malay: 'Ayat ini menunjukkan penggunaan perkataan “community” dalam konteks Bahasa Inggeris British.', chinese: '当地社区组织了一次清洁活动。' }], collocations: ['local community', 'online community'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'competition', term: 'competition', normalizedTerm: 'competition', partOfSpeech: ['noun'], ipa: '/kˌɒmpətˈɪʃən/',
    chineseShort: '比赛；竞争', chineseExplanation: '个人或团体为获胜、获得机会或资源而竞争的活动。', englishDefinition: 'An activity or situation in which people or groups try to win or succeed.',
    examples: [{ english: 'Our school entered a writing competition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “competition” dalam konteks Bahasa Inggeris British.', chinese: '我们学校参加了写作比赛。' }], collocations: ['win a competition', 'strong competition'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'condition', term: 'condition', normalizedTerm: 'condition', partOfSpeech: ['noun'], ipa: '/kəndˈɪʃən/',
    chineseShort: '状况；条件', chineseExplanation: '某人或某物目前的状态，也可指必须满足的要求。', englishDefinition: 'The state something is in; also, a requirement that must be met.',
    examples: [{ english: 'The phone is still in good condition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “condition” dalam konteks Bahasa Inggeris British.', chinese: '这部手机的状况仍然很好。' }], collocations: ['good condition', 'working conditions'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'connection', term: 'connection', normalizedTerm: 'connection', partOfSpeech: ['noun'], ipa: '/kənˈɛkʃən/',
    chineseShort: '连接；关系', chineseExplanation: '两个事物之间的联系，也可指网络或交通连接。', englishDefinition: 'A link or relationship between things; also, a network or transport link.',
    examples: [{ english: 'The hotel has a fast internet connection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “connection” dalam konteks Bahasa Inggeris British.', chinese: '这家酒店的网络连接很快。' }], collocations: ['internet connection', 'close connection'], level: 2, cefr: 'B1', categories: ['Technology', 'Travel'],
  },
  {
    id: 'culture', term: 'culture', normalizedTerm: 'culture', partOfSpeech: ['noun'], ipa: '/kˈʌltʃə/',
    chineseShort: '文化', chineseExplanation: '某个社会或群体共有的习俗、信念、艺术和生活方式。', englishDefinition: 'The customs, beliefs, arts, and way of life shared by a society or group.',
    examples: [{ english: 'Food is an important part of local culture.', malay: 'Ayat ini menunjukkan penggunaan perkataan “culture” dalam konteks Bahasa Inggeris British.', chinese: '食物是当地文化的重要部分。' }], collocations: ['local culture', 'popular culture'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'customer', term: 'customer', normalizedTerm: 'customer', partOfSpeech: ['noun'], ipa: '/kˈʌstəmə/',
    chineseShort: '顾客；客户', chineseExplanation: '购买商品或服务的人。', englishDefinition: 'A person who buys goods or services.',
    examples: [{ english: 'The shop offers discounts to regular customers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “customer” dalam konteks Bahasa Inggeris British.', chinese: '这家店为常客提供折扣。' }], collocations: ['customer service', 'regular customer'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'decision', term: 'decision', normalizedTerm: 'decision', partOfSpeech: ['noun'], ipa: '/dɪsˈɪʒən/',
    chineseShort: '决定', chineseExplanation: '经过考虑后作出的选择或判断。', englishDefinition: 'A choice or judgement made after thinking about something.',
    examples: [{ english: 'We need to make a decision by Friday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “decision” dalam konteks Bahasa Inggeris British.', chinese: '我们需要在星期五前作出决定。' }], collocations: ['make a decision', 'final decision'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'degree', term: 'degree', normalizedTerm: 'degree', partOfSpeech: ['noun'], ipa: '/dɪɡɹˈiː/',
    chineseShort: '程度；学位；度', chineseExplanation: '表示程度的数量，也可指大学学位或温度单位。', englishDefinition: 'A level or amount; also, a university qualification or a unit of temperature.',
    examples: [{ english: 'She completed a degree in business.', malay: 'Ayat ini menunjukkan penggunaan perkataan “degree” dalam konteks Bahasa Inggeris British.', chinese: '她完成了商业学位课程。' }], collocations: ['university degree', 'to some degree'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'detail', term: 'detail', normalizedTerm: 'detail', partOfSpeech: ['noun'], ipa: '/dˈiːteɪl/',
    chineseShort: '细节', chineseExplanation: '关于某事较小但具体的信息。', englishDefinition: 'A small but specific piece of information about something.',
    examples: [{ english: 'Please check every detail before submitting the form.', malay: 'Ayat ini menunjukkan penggunaan perkataan “detail” dalam konteks Bahasa Inggeris British.', chinese: '提交表格前请检查每个细节。' }], collocations: ['important detail', 'in detail'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'difference', term: 'difference', normalizedTerm: 'difference', partOfSpeech: ['noun'], ipa: '/dˈɪfɹəns/',
    chineseShort: '差异；不同', chineseExplanation: '两个或多个事物不相同的地方或程度。', englishDefinition: 'The way in which two or more things are not the same.',
    examples: [{ english: 'There is a big difference between the two plans.', malay: 'Ayat ini menunjukkan penggunaan perkataan “difference” dalam konteks Bahasa Inggeris British.', chinese: '这两个计划之间有很大差异。' }], collocations: ['big difference', 'make a difference'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'direction', term: 'direction', normalizedTerm: 'direction', partOfSpeech: ['noun'], ipa: '/daɪɹˈɛkʃən/',
    chineseShort: '方向；指示', chineseExplanation: '前往某处的路线，也可指如何做某事的说明。', englishDefinition: 'The way towards a place; also, an instruction about what to do.',
    examples: [{ english: 'Can you give me directions to the bus station?', malay: 'Ayat ini menunjukkan penggunaan perkataan “direction” dalam konteks Bahasa Inggeris British.', chinese: '你能告诉我去巴士站怎么走吗？' }], collocations: ['give directions', 'opposite direction'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'education', term: 'education', normalizedTerm: 'education', partOfSpeech: ['noun'], ipa: '/ˌɛdʒuːkˈeɪʃən/',
    chineseShort: '教育', chineseExplanation: '通过学校、培训或学习获得知识和技能的过程。', englishDefinition: 'The process of gaining knowledge and skills through study or training.',
    examples: [{ english: 'Education can create more career opportunities.', malay: 'Ayat ini menunjukkan penggunaan perkataan “education” dalam konteks Bahasa Inggeris British.', chinese: '教育可以创造更多职业机会。' }], collocations: ['higher education', 'education system'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'effect', term: 'effect', normalizedTerm: 'effect', partOfSpeech: ['noun'], ipa: '/ɪfˈɛkt/',
    chineseShort: '影响；效果', chineseExplanation: '一个行为、事件或情况产生的结果。', englishDefinition: 'A result or change caused by an action, event, or situation.',
    examples: [{ english: 'The new rule had a positive effect on attendance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “effect” dalam konteks Bahasa Inggeris British.', chinese: '新规定对出席率产生了积极影响。' }], collocations: ['positive effect', 'have an effect'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'effort', term: 'effort', normalizedTerm: 'effort', partOfSpeech: ['noun'], ipa: '/ˈɛfət/',
    chineseShort: '努力', chineseExplanation: '为了完成某事而投入的体力或脑力。', englishDefinition: 'Physical or mental energy used to achieve something.',
    examples: [{ english: 'Learning a language takes time and effort.', malay: 'Ayat ini menunjukkan penggunaan perkataan “effort” dalam konteks Bahasa Inggeris British.', chinese: '学习一门语言需要时间和努力。' }], collocations: ['make an effort', 'great effort'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'environment', term: 'environment', normalizedTerm: 'environment', partOfSpeech: ['noun'], ipa: '/ɛnvˈaɪɹənmənt/',
    chineseShort: '环境', chineseExplanation: '人、动物或植物生活的自然和周围条件。', englishDefinition: 'The natural and surrounding conditions in which people, animals, or plants live.',
    examples: [{ english: 'We should use less plastic to protect the environment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “environment” dalam konteks Bahasa Inggeris British.', chinese: '我们应该少用塑料来保护环境。' }], collocations: ['protect the environment', 'work environment'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'experience', term: 'experience', normalizedTerm: 'experience', partOfSpeech: ['noun'], ipa: '/ɛkspˈiəɹɪəns/',
    chineseShort: '经验；经历', chineseExplanation: '通过做事获得的知识，也可指亲身经历的事件。', englishDefinition: 'Knowledge gained by doing something; also, an event someone lives through.',
    examples: [{ english: 'She has two years of work experience.', malay: 'Ayat ini menunjukkan penggunaan perkataan “experience” dalam konteks Bahasa Inggeris British.', chinese: '她有两年的工作经验。' }], collocations: ['work experience', 'personal experience'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'expert', term: 'expert', normalizedTerm: 'expert', partOfSpeech: ['noun'], ipa: '/ˈɛkspɜːt/',
    chineseShort: '专家', chineseExplanation: '在某个领域拥有大量知识或技能的人。', englishDefinition: 'A person with a high level of knowledge or skill in a subject.',
    examples: [{ english: 'Ask an expert if you are unsure about the repair.', malay: 'Ayat ini menunjukkan penggunaan perkataan “expert” dalam konteks Bahasa Inggeris British.', chinese: '如果你不确定如何维修，可以咨询专家。' }], collocations: ['industry expert', 'expert advice'], level: 2, cefr: 'B1', categories: ['Business', 'Technology'],
  },
  {
    id: 'fact', term: 'fact', normalizedTerm: 'fact', partOfSpeech: ['noun'], ipa: '/fˈakt/',
    chineseShort: '事实', chineseExplanation: '能够证明是真实的信息或情况。', englishDefinition: 'A piece of information that can be shown to be true.',
    examples: [{ english: 'It is important to separate facts from opinions.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fact” dalam konteks Bahasa Inggeris British.', chinese: '把事实和观点区分开很重要。' }], collocations: ['known fact', 'fact that'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'feature', term: 'feature', normalizedTerm: 'feature', partOfSpeech: ['noun'], ipa: '/fˈiːtʃə/',
    chineseShort: '特点；功能', chineseExplanation: '某物重要或明显的特征，也可指产品的功能。', englishDefinition: 'An important or noticeable part or function of something.',
    examples: [{ english: 'The app has a useful search feature.', malay: 'Ayat ini menunjukkan penggunaan perkataan “feature” dalam konteks Bahasa Inggeris British.', chinese: '这个应用有一个实用的搜索功能。' }], collocations: ['main feature', 'new feature'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'goal', term: 'goal', normalizedTerm: 'goal', partOfSpeech: ['noun'], ipa: '/ɡˈəʊl/',
    chineseShort: '目标', chineseExplanation: '希望在未来实现的结果。', englishDefinition: 'A result that someone hopes to achieve in the future.',
    examples: [{ english: 'My goal is to improve my speaking confidence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “goal” dalam konteks Bahasa Inggeris British.', chinese: '我的目标是提高口语自信。' }], collocations: ['set a goal', 'reach a goal'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'habit', term: 'habit', normalizedTerm: 'habit', partOfSpeech: ['noun'], ipa: '/hˈabɪt/',
    chineseShort: '习惯', chineseExplanation: '经常重复并逐渐变得自然的行为。', englishDefinition: 'Something a person does regularly, often without thinking much about it.',
    examples: [{ english: 'Reading every day is a useful study habit.', malay: 'Ayat ini menunjukkan penggunaan perkataan “habit” dalam konteks Bahasa Inggeris British.', chinese: '每天阅读是一个有用的学习习惯。' }], collocations: ['good habit', 'develop a habit'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'health', term: 'health', normalizedTerm: 'health', partOfSpeech: ['noun'], ipa: '/hˈɛlθ/',
    chineseShort: '健康', chineseExplanation: '身体和心理正常、良好的状态。', englishDefinition: 'The state of being physically and mentally well.',
    examples: [{ english: 'Walking regularly is good for your health.', malay: 'Ayat ini menunjukkan penggunaan perkataan “health” dalam konteks Bahasa Inggeris British.', chinese: '经常步行对健康有益。' }], collocations: ['good health', 'health problem'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'information', term: 'information', normalizedTerm: 'information', partOfSpeech: ['noun'], ipa: '/ˌɪnfəmˈeɪʃən/',
    chineseShort: '信息', chineseExplanation: '关于某人、某事或某主题的事实和细节。', englishDefinition: 'Facts or details about a person, thing, or subject.',
    examples: [{ english: 'You can find more information on the website.', malay: 'Ayat ini menunjukkan penggunaan perkataan “information” dalam konteks Bahasa Inggeris British.', chinese: '你可以在网站上找到更多信息。' }], collocations: ['useful information', 'personal information'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'instruction', term: 'instruction', normalizedTerm: 'instruction', partOfSpeech: ['noun'], ipa: '/ɪnstɹˈʌkʃən/',
    chineseShort: '指示；说明', chineseExplanation: '告诉某人如何做某事的命令或步骤。', englishDefinition: 'A direction or explanation telling someone how to do something.',
    examples: [{ english: 'Read the instructions before using the machine.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instruction” dalam konteks Bahasa Inggeris British.', chinese: '使用机器前先阅读说明。' }], collocations: ['follow instructions', 'clear instructions'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'interest', term: 'interest', normalizedTerm: 'interest', partOfSpeech: ['noun'], ipa: '/ˈɪntɹəst/',
    chineseShort: '兴趣；利息', chineseExplanation: '想了解或参与某事的感觉，也可指借款产生的利息。', englishDefinition: 'A feeling of wanting to know about or do something; also, money charged on a loan.',
    examples: [{ english: 'She has a strong interest in photography.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interest” dalam konteks Bahasa Inggeris British.', chinese: '她对摄影有浓厚兴趣。' }], collocations: ['show interest', 'interest rate'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'journey', term: 'journey', normalizedTerm: 'journey', partOfSpeech: ['noun'], ipa: '/dʒˈɜːni/',
    chineseShort: '旅程', chineseExplanation: '从一个地方前往另一个地方的过程，通常有一定距离。', englishDefinition: 'The act of travelling from one place to another, especially over some distance.',
    examples: [{ english: 'The train journey took about three hours.', malay: 'Ayat ini menunjukkan penggunaan perkataan “journey” dalam konteks Bahasa Inggeris British.', chinese: '火车旅程大约用了三个小时。' }], collocations: ['long journey', 'journey home'], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'knowledge', term: 'knowledge', normalizedTerm: 'knowledge', partOfSpeech: ['noun'], ipa: '/nˈɒlɪdʒ/',
    chineseShort: '知识', chineseExplanation: '通过学习、经验或了解获得的信息和理解。', englishDefinition: 'Information and understanding gained through learning or experience.',
    examples: [{ english: 'The course gave me practical knowledge of marketing.', malay: 'Ayat ini menunjukkan penggunaan perkataan “knowledge” dalam konteks Bahasa Inggeris British.', chinese: '这门课程给了我实用的市场营销知识。' }], collocations: ['general knowledge', 'knowledge of'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'language', term: 'language', normalizedTerm: 'language', partOfSpeech: ['noun'], ipa: '/lˈaŋɡwɪdʒ/',
    chineseShort: '语言', chineseExplanation: '人们通过说、写或手势进行交流的系统。', englishDefinition: 'A system people use to communicate through speech, writing, or signs.',
    examples: [{ english: 'English is widely used as an international language.', malay: 'Ayat ini menunjukkan penggunaan perkataan “language” dalam konteks Bahasa Inggeris British.', chinese: '英语被广泛用作国际语言。' }], collocations: ['foreign language', 'language skills'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'leader', term: 'leader', normalizedTerm: 'leader', partOfSpeech: ['noun'], ipa: '/lˈiːdə/',
    chineseShort: '领导者', chineseExplanation: '负责带领团队、组织或群体的人。', englishDefinition: 'A person who guides or is in charge of a group or organisation.',
    examples: [{ english: 'A good leader listens to the whole team.', malay: 'Ayat ini menunjukkan penggunaan perkataan “leader” dalam konteks Bahasa Inggeris British.', chinese: '好的领导者会听取整个团队的意见。' }], collocations: ['team leader', 'strong leader'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'lifestyle', term: 'lifestyle', normalizedTerm: 'lifestyle', partOfSpeech: ['noun'], ipa: '/lˈaɪfstaɪl/',
    chineseShort: '生活方式', chineseExplanation: '一个人通常生活、工作、饮食和休闲的方式。', englishDefinition: 'The way a person usually lives, works, eats, and spends free time.',
    examples: [{ english: 'Working from home changed his lifestyle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lifestyle” dalam konteks Bahasa Inggeris British.', chinese: '在家工作改变了他的生活方式。' }], collocations: ['healthy lifestyle', 'modern lifestyle'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'location', term: 'location', normalizedTerm: 'location', partOfSpeech: ['noun'], ipa: '/ləʊkˈeɪʃən/',
    chineseShort: '地点；位置', chineseExplanation: '某人或某物所在的地方。', englishDefinition: 'The place where someone or something is situated.',
    examples: [{ english: 'The hotel is in a convenient location near the station.', malay: 'Ayat ini menunjukkan penggunaan perkataan “location” dalam konteks Bahasa Inggeris British.', chinese: '这家酒店位于车站附近一个方便的地点。' }], collocations: ['exact location', 'central location'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'manager', term: 'manager', normalizedTerm: 'manager', partOfSpeech: ['noun'], ipa: '/mˈanɪdʒə/',
    chineseShort: '经理；管理者', chineseExplanation: '负责管理员工、部门、项目或业务的人。', englishDefinition: 'A person responsible for managing staff, a department, project, or business.',
    examples: [{ english: 'The manager approved our new schedule.', malay: 'Ayat ini menunjukkan penggunaan perkataan “manager” dalam konteks Bahasa Inggeris British.', chinese: '经理批准了我们的新日程。' }], collocations: ['project manager', 'store manager'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'memory', term: 'memory', normalizedTerm: 'memory', partOfSpeech: ['noun'], ipa: '/mˈɛməɹi/',
    chineseShort: '记忆；记忆力', chineseExplanation: '记住信息和经历的能力，也可指过去记住的事情。', englishDefinition: 'The ability to remember information and experiences; also, something remembered.',
    examples: [{ english: 'I have a clear memory of my first day at school.', malay: 'Ayat ini menunjukkan penggunaan perkataan “memory” dalam konteks Bahasa Inggeris British.', chinese: '我清楚记得上学第一天。' }], collocations: ['good memory', 'from memory'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'method', term: 'method', normalizedTerm: 'method', partOfSpeech: ['noun'], ipa: '/mˈɛθəd/',
    chineseShort: '方法', chineseExplanation: '完成任务、解决问题或研究某事的特定方式。', englishDefinition: 'A particular way of doing, solving, or studying something.',
    examples: [{ english: 'This method makes vocabulary review easier.', malay: 'Ayat ini menunjukkan penggunaan perkataan “method” dalam konteks Bahasa Inggeris British.', chinese: '这个方法让词汇复习更容易。' }], collocations: ['effective method', 'teaching method'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'mistake', term: 'mistake', normalizedTerm: 'mistake', partOfSpeech: ['noun'], ipa: '/mɪstˈeɪk/',
    chineseShort: '错误', chineseExplanation: '因为理解、判断或行动不正确而产生的问题。', englishDefinition: 'Something wrong that happens because of incorrect understanding, judgement, or action.',
    examples: [{ english: 'I made a mistake in the final calculation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mistake” dalam konteks Bahasa Inggeris British.', chinese: '我在最后的计算中犯了一个错误。' }], collocations: ['make a mistake', 'common mistake'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'opinion', term: 'opinion', normalizedTerm: 'opinion', partOfSpeech: ['noun'], ipa: '/əpˈɪniən/',
    chineseShort: '意见；看法', chineseExplanation: '一个人对某事的想法或判断。', englishDefinition: 'A person\'s view or judgement about something.',
    examples: [{ english: 'In my opinion, the second option is better.', malay: 'Ayat ini menunjukkan penggunaan perkataan “opinion” dalam konteks Bahasa Inggeris British.', chinese: '依我看，第二个选项更好。' }], collocations: ['in my opinion', 'give an opinion'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'organization', term: 'organisation', normalizedTerm: 'organisation', partOfSpeech: ['noun'], ipa: '/ˌɔːɡɐnaɪzˈeɪʃən/',
    chineseShort: '组织；机构', chineseExplanation: '为共同目标而组成的团体，也可指安排事物的方式。', englishDefinition: 'A group formed for a shared purpose; also, the way things are arranged.',
    examples: [{ english: 'She works for an international organisation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organisation” dalam konteks Bahasa Inggeris British.', chinese: '她在一家国际机构工作。' }], collocations: ['international organisation', 'organisation skills'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'passenger', term: 'passenger', normalizedTerm: 'passenger', partOfSpeech: ['noun'], ipa: '/pˈasɪndʒə/',
    chineseShort: '乘客', chineseExplanation: '乘坐汽车、巴士、火车、船或飞机但不负责驾驶的人。', englishDefinition: 'A person travelling in a vehicle who is not driving it.',
    examples: [{ english: 'All passengers must show their tickets.', malay: 'Ayat ini menunjukkan penggunaan perkataan “passenger” dalam konteks Bahasa Inggeris British.', chinese: '所有乘客都必须出示车票。' }], collocations: ['bus passenger', 'passenger seat'], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'performance', term: 'performance', normalizedTerm: 'performance', partOfSpeech: ['noun'], ipa: '/pəfˈɔːməns/',
    chineseShort: '表现；演出', chineseExplanation: '完成任务的质量，也可指给观众看的演出。', englishDefinition: 'How well someone or something works; also, a show for an audience.',
    examples: [{ english: 'Her performance improved after more practice.', malay: 'Ayat ini menunjukkan penggunaan perkataan “performance” dalam konteks Bahasa Inggeris British.', chinese: '她经过更多练习后表现有所提高。' }], collocations: ['job performance', 'live performance'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'population', term: 'population', normalizedTerm: 'population', partOfSpeech: ['noun'], ipa: '/pˌɒpjʊlˈeɪʃən/',
    chineseShort: '人口', chineseExplanation: '居住在某个国家、城市或地区的总人数。', englishDefinition: 'The total number of people living in a country, city, or area.',
    examples: [{ english: 'The city\'s population has grown quickly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “population” dalam konteks Bahasa Inggeris British.', chinese: '这座城市的人口增长很快。' }], collocations: ['local population', 'population growth'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'position', term: 'position', normalizedTerm: 'position', partOfSpeech: ['noun'], ipa: '/pəzˈɪʃən/',
    chineseShort: '位置；职位；立场', chineseExplanation: '某物所在的位置，也可指工作职位或对问题的立场。', englishDefinition: 'A place, job role, or point of view on an issue.',
    examples: [{ english: 'She applied for a full-time position in sales.', malay: 'Ayat ini menunjukkan penggunaan perkataan “position” dalam konteks Bahasa Inggeris British.', chinese: '她申请了一份全职销售职位。' }], collocations: ['job position', 'current position'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'possibility', term: 'possibility', normalizedTerm: 'possibility', partOfSpeech: ['noun'], ipa: '/pˌɒsəbˈɪlɪti/',
    chineseShort: '可能性', chineseExplanation: '某事可能发生或成为事实的机会。', englishDefinition: 'The chance that something may happen or be true.',
    examples: [{ english: 'There is a possibility of rain this evening.', malay: 'Ayat ini menunjukkan penggunaan perkataan “possibility” dalam konteks Bahasa Inggeris British.', chinese: '今晚有下雨的可能。' }], collocations: ['real possibility', 'possibility of'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'pressure', term: 'pressure', normalizedTerm: 'pressure', partOfSpeech: ['noun'], ipa: '/pɹˈɛʃə/',
    chineseShort: '压力；压力值', chineseExplanation: '来自工作、时间或他人的紧张感，也可指物理压力。', englishDefinition: 'Stress caused by demands or limited time; also, physical force on a surface.',
    examples: [{ english: 'He works well under pressure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pressure” dalam konteks Bahasa Inggeris British.', chinese: '他在压力下也能很好地工作。' }], collocations: ['under pressure', 'work pressure'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'progress', term: 'progress', normalizedTerm: 'progress', partOfSpeech: ['noun'], ipa: '/pɹˈəʊɡɹɛs/',
    chineseShort: '进展；进步', chineseExplanation: '朝目标前进或逐渐改善的过程。', englishDefinition: 'Movement towards a goal or gradual improvement.',
    examples: [{ english: 'You have made good progress in speaking.', malay: 'Ayat ini menunjukkan penggunaan perkataan “progress” dalam konteks Bahasa Inggeris British.', chinese: '你的口语已经取得了不错的进步。' }], collocations: ['make progress', 'steady progress'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'project', term: 'project', normalizedTerm: 'project', partOfSpeech: ['noun'], ipa: '/pɹˈɒdʒɛkt/',
    chineseShort: '项目；课题', chineseExplanation: '为达到特定目标而计划并完成的一系列工作。', englishDefinition: 'A planned piece of work with a particular goal.',
    examples: [{ english: 'Our group is working on a science project.', malay: 'Ayat ini menunjukkan penggunaan perkataan “project” dalam konteks Bahasa Inggeris British.', chinese: '我们小组正在做一个科学项目。' }], collocations: ['school project', 'project plan'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'purpose', term: 'purpose', normalizedTerm: 'purpose', partOfSpeech: ['noun'], ipa: '/pˈɜːpəs/',
    chineseShort: '目的；用途', chineseExplanation: '某事存在、进行或被设计出来的原因。', englishDefinition: 'The reason why something exists, is done, or is designed.',
    examples: [{ english: 'The purpose of the meeting is to review the plan.', malay: 'Ayat ini menunjukkan penggunaan perkataan “purpose” dalam konteks Bahasa Inggeris British.', chinese: '这次会议的目的是审查计划。' }], collocations: ['main purpose', 'purpose of'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'reason', term: 'reason', normalizedTerm: 'reason', partOfSpeech: ['noun'], ipa: '/ɹˈiːzən/',
    chineseShort: '原因；理由', chineseExplanation: '解释某事为什么发生或为什么做某事的事实或想法。', englishDefinition: 'A fact or idea that explains why something happens or is done.',
    examples: [{ english: 'What is the reason for the delay?', malay: 'Ayat ini menunjukkan penggunaan perkataan “reason” dalam konteks Bahasa Inggeris British.', chinese: '延误的原因是什么？' }], collocations: ['main reason', 'reason for'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'relationship', term: 'relationship', normalizedTerm: 'relationship', partOfSpeech: ['noun'], ipa: '/ɹɪlˈeɪʃənʃˌɪp/',
    chineseShort: '关系', chineseExplanation: '两个人、群体或事物之间的联系或相处方式。', englishDefinition: 'The connection or way of relating between people, groups, or things.',
    examples: [{ english: 'Good communication can improve working relationships.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relationship” dalam konteks Bahasa Inggeris British.', chinese: '良好沟通可以改善工作关系。' }], collocations: ['close relationship', 'working relationship'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'result', term: 'result', normalizedTerm: 'result', partOfSpeech: ['noun'], ipa: '/ɹɪzˈʌlt/',
    chineseShort: '结果；成绩', chineseExplanation: '行动、事件或过程最终产生的情况，也可指考试成绩。', englishDefinition: 'The outcome produced by an action, event, or process; also, an exam score.',
    examples: [{ english: 'The test results will be available tomorrow.', malay: 'Ayat ini menunjukkan penggunaan perkataan “result” dalam konteks Bahasa Inggeris British.', chinese: '测试结果明天会公布。' }], collocations: ['final result', 'exam result'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'risk', term: 'risk', normalizedTerm: 'risk', partOfSpeech: ['noun'], ipa: '/ɹˈɪsk/',
    chineseShort: '风险', chineseExplanation: '发生危险、损失或不良结果的可能性。', englishDefinition: 'The possibility of danger, loss, or an unwanted result.',
    examples: [{ english: 'Driving too fast increases the risk of an accident.', malay: 'Ayat ini menunjukkan penggunaan perkataan “risk” dalam konteks Bahasa Inggeris British.', chinese: '开车太快会增加发生事故的风险。' }], collocations: ['high risk', 'reduce risk'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'service', term: 'service', normalizedTerm: 'service', partOfSpeech: ['noun'], ipa: '/sˈɜːvɪs/',
    chineseShort: '服务', chineseExplanation: '由企业或机构为顾客或公众提供的帮助或工作。', englishDefinition: 'Work or help provided by a business or organisation to customers or the public.',
    examples: [{ english: 'The restaurant provides friendly service.', malay: 'Ayat ini menunjukkan penggunaan perkataan “service” dalam konteks Bahasa Inggeris British.', chinese: '这家餐厅提供友善的服务。' }], collocations: ['customer service', 'public service'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'skill', term: 'skill', normalizedTerm: 'skill', partOfSpeech: ['noun'], ipa: '/skˈɪl/',
    chineseShort: '技能', chineseExplanation: '通过学习或练习掌握的做某事的能力。', englishDefinition: 'An ability to do something well, usually learned through practice.',
    examples: [{ english: 'Communication is an important workplace skill.', malay: 'Ayat ini menunjukkan penggunaan perkataan “skill” dalam konteks Bahasa Inggeris British.', chinese: '沟通是一项重要的职场技能。' }], collocations: ['practical skill', 'communication skills'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'society', term: 'society', normalizedTerm: 'society', partOfSpeech: ['noun'], ipa: '/səsˈaɪəti/',
    chineseShort: '社会', chineseExplanation: '生活在一个有共同制度和文化的社区中的人们整体。', englishDefinition: 'People living together in an organised community with shared systems and culture.',
    examples: [{ english: 'Technology has changed modern society.', malay: 'Ayat ini menunjukkan penggunaan perkataan “society” dalam konteks Bahasa Inggeris British.', chinese: '科技改变了现代社会。' }], collocations: ['modern society', 'society as a whole'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'success', term: 'success', normalizedTerm: 'success', partOfSpeech: ['noun'], ipa: '/səksˈɛs/',
    chineseShort: '成功', chineseExplanation: '达到目标或获得想要结果的状态。', englishDefinition: 'The achievement of a goal or desired result.',
    examples: [{ english: 'The event was a great success.', malay: 'Ayat ini menunjukkan penggunaan perkataan “success” dalam konteks Bahasa Inggeris British.', chinese: '这次活动非常成功。' }], collocations: ['great success', 'achieve success'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'suggestion', term: 'suggestion', normalizedTerm: 'suggestion', partOfSpeech: ['noun'], ipa: '/sədʒˈɛstʃən/',
    chineseShort: '建议', chineseExplanation: '提出供别人考虑的想法或行动方案。', englishDefinition: 'An idea or plan offered for someone to consider.',
    examples: [{ english: 'Thank you for your helpful suggestion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “suggestion” dalam konteks Bahasa Inggeris British.', chinese: '谢谢你的有用建议。' }], collocations: ['make a suggestion', 'helpful suggestion'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'task', term: 'task', normalizedTerm: 'task', partOfSpeech: ['noun'], ipa: '/tˈask/',
    chineseShort: '任务', chineseExplanation: '需要完成的一项工作或活动。', englishDefinition: 'A piece of work or an activity that needs to be completed.',
    examples: [{ english: 'I finished the most difficult task first.', malay: 'Ayat ini menunjukkan penggunaan perkataan “task” dalam konteks Bahasa Inggeris British.', chinese: '我先完成了最困难的任务。' }], collocations: ['complete a task', 'simple task'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'team', term: 'team', normalizedTerm: 'team', partOfSpeech: ['noun'], ipa: '/tˈiːm/',
    chineseShort: '团队', chineseExplanation: '为共同目标一起工作或比赛的一群人。', englishDefinition: 'A group of people who work or play together towards a shared goal.',
    examples: [{ english: 'Our team meets every Monday morning.', malay: 'Ayat ini menunjukkan penggunaan perkataan “team” dalam konteks Bahasa Inggeris British.', chinese: '我们的团队每周一早上开会。' }], collocations: ['team member', 'work as a team'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'temperature', term: 'temperature', normalizedTerm: 'temperature', partOfSpeech: ['noun'], ipa: '/tˈɛmpɹɪtʃə/',
    chineseShort: '温度；体温', chineseExplanation: '表示冷热程度的数值，也可指人的体温。', englishDefinition: 'A measure of how hot or cold something is; also, body temperature.',
    examples: [{ english: 'The temperature may reach thirty-five degrees today.', malay: 'Ayat ini menunjukkan penggunaan perkataan “temperature” dalam konteks Bahasa Inggeris British.', chinese: '今天气温可能达到三十五度。' }], collocations: ['room temperature', 'high temperature'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'traffic', term: 'traffic', normalizedTerm: 'traffic', partOfSpeech: ['noun'], ipa: '/tɹˈafɪk/',
    chineseShort: '交通；车流', chineseExplanation: '道路上的车辆和行人流动情况。', englishDefinition: 'The movement of vehicles and people on roads.',
    examples: [{ english: 'We left early to avoid heavy traffic.', malay: 'Ayat ini menunjukkan penggunaan perkataan “traffic” dalam konteks Bahasa Inggeris British.', chinese: '我们提早出发以避开拥堵的交通。' }], collocations: ['heavy traffic', 'traffic jam'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'tradition', term: 'tradition', normalizedTerm: 'tradition', partOfSpeech: ['noun'], ipa: '/tɹɐdˈɪʃən/',
    chineseShort: '传统', chineseExplanation: '在家庭、社会或文化中长期传承的习俗或做法。', englishDefinition: 'A custom or way of doing something passed down over time.',
    examples: [{ english: 'It is a family tradition to eat together on Sunday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tradition” dalam konteks Bahasa Inggeris British.', chinese: '星期天一起吃饭是我们家的传统。' }], collocations: ['local tradition', 'family tradition'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'training', term: 'training', normalizedTerm: 'training', partOfSpeech: ['noun'], ipa: '/tɹˈeɪnɪŋ/',
    chineseShort: '培训；训练', chineseExplanation: '为了提高技能、知识或表现而进行的学习和练习。', englishDefinition: 'Learning and practice designed to improve skills, knowledge, or performance.',
    examples: [{ english: 'New staff receive two days of training.', malay: 'Ayat ini menunjukkan penggunaan perkataan “training” dalam konteks Bahasa Inggeris British.', chinese: '新员工会接受两天培训。' }], collocations: ['staff training', 'training course'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'transport', term: 'transport', normalizedTerm: 'transport', partOfSpeech: ['noun'], ipa: '/tɹˈanspɔːt/',
    chineseShort: '交通工具；运输', chineseExplanation: '把人或货物从一个地方运到另一个地方的系统或方式。', englishDefinition: 'A system or method for moving people or goods from one place to another.',
    examples: [{ english: 'Public transport is cheaper than taking a taxi every day.', malay: 'Ayat ini menunjukkan penggunaan perkataan “transport” dalam konteks Bahasa Inggeris British.', chinese: '公共交通比每天搭出租车便宜。' }], collocations: ['public transport', 'transport system'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'trouble', term: 'trouble', normalizedTerm: 'trouble', partOfSpeech: ['noun'], ipa: '/tɹˈʌbəl/',
    chineseShort: '麻烦；问题', chineseExplanation: '造成困难、担忧或不便的情况。', englishDefinition: 'A situation that causes difficulty, worry, or inconvenience.',
    examples: [{ english: 'I had trouble finding the correct address.', malay: 'Ayat ini menunjukkan penggunaan perkataan “trouble” dalam konteks Bahasa Inggeris British.', chinese: '我找正确地址时遇到了麻烦。' }], collocations: ['have trouble', 'get into trouble'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'value', term: 'value', normalizedTerm: 'value', partOfSpeech: ['noun'], ipa: '/vˈaljuː/',
    chineseShort: '价值；重要性', chineseExplanation: '某物的金钱价值，也可指它的重要程度或好处。', englishDefinition: 'The amount something is worth; also, its importance or usefulness.',
    examples: [{ english: 'This course offers good value for money.', malay: 'Ayat ini menunjukkan penggunaan perkataan “value” dalam konteks Bahasa Inggeris British.', chinese: '这门课程很物有所值。' }], collocations: ['good value', 'value for money'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'visitor', term: 'visitor', normalizedTerm: 'visitor', partOfSpeech: ['noun'], ipa: '/vˈɪzɪtə/',
    chineseShort: '访客；游客', chineseExplanation: '到某地参观、拜访或短暂停留的人。', englishDefinition: 'A person who comes to a place to visit or stay for a short time.',
    examples: [{ english: 'The museum welcomes thousands of visitors each month.', malay: 'Ayat ini menunjukkan penggunaan perkataan “visitor” dalam konteks Bahasa Inggeris British.', chinese: '这家博物馆每月接待数千名游客。' }], collocations: ['foreign visitor', 'website visitor'], level: 2, cefr: 'B1', categories: ['Travel', 'Technology'],
  },
  {
    id: 'website', term: 'website', normalizedTerm: 'website', partOfSpeech: ['noun'], ipa: '/wˈɛbsaɪt/',
    chineseShort: '网站', chineseExplanation: '通过互联网访问的一组相关网页。', englishDefinition: 'A collection of related web pages available on the internet.',
    examples: [{ english: 'The company updated its website last week.', malay: 'Ayat ini menunjukkan penggunaan perkataan “website” dalam konteks Bahasa Inggeris British.', chinese: '公司上周更新了网站。' }], collocations: ['official website', 'visit a website'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'activity', term: 'activity', normalizedTerm: 'activity', partOfSpeech: ['noun'], ipa: '/aktˈɪvɪti/',
    chineseShort: '活动', chineseExplanation: '为了某种目的进行的行动、任务或娱乐项目。', englishDefinition: 'Something people do for a purpose, task, or enjoyment.',
    examples: [{ english: 'Swimming is a popular outdoor activity here.', malay: 'Ayat ini menunjukkan penggunaan perkataan “activity” dalam konteks Bahasa Inggeris British.', chinese: '游泳是这里很受欢迎的户外活动。' }], collocations: ['physical activity', 'group activity'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'agreement', term: 'agreement', normalizedTerm: 'agreement', partOfSpeech: ['noun'], ipa: '/ɐɡɹˈiːmənt/',
    chineseShort: '协议；同意', chineseExplanation: '两方或多方共同接受的决定、安排或意见。', englishDefinition: 'A decision or arrangement accepted by two or more sides.',
    examples: [{ english: 'The two companies reached an agreement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “agreement” dalam konteks Bahasa Inggeris British.', chinese: '两家公司达成了协议。' }], collocations: ['reach an agreement', 'written agreement'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'area', term: 'area', normalizedTerm: 'area', partOfSpeech: ['noun'], ipa: '/ˈeəɹiə/',
    chineseShort: '地区；范围', chineseExplanation: '某个地方的一部分，也可指某个主题或活动范围。', englishDefinition: 'A part of a place or a particular field of activity or study.',
    examples: [{ english: 'This area is popular with tourists.', malay: 'Ayat ini menunjukkan penggunaan perkataan “area” dalam konteks Bahasa Inggeris British.', chinese: '这个地区很受游客欢迎。' }], collocations: ['local area', 'study area'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'balance', term: 'balance', normalizedTerm: 'balance', partOfSpeech: ['noun'], ipa: '/bˈaləns/',
    chineseShort: '平衡；余额', chineseExplanation: '两边保持稳定的状态，也可指账户中剩余的金额。', englishDefinition: 'A stable state between different sides; also, money remaining in an account.',
    examples: [{ english: 'It is important to keep a balance between work and rest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “balance” dalam konteks Bahasa Inggeris British.', chinese: '保持工作与休息之间的平衡很重要。' }], collocations: ['work-life balance', 'account balance'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'category', term: 'category', normalizedTerm: 'category', partOfSpeech: ['noun'], ipa: '/kˈatɪɡəɹi/',
    chineseShort: '类别', chineseExplanation: '按照共同特点划分的一组人或事物。', englishDefinition: 'A group of people or things sharing similar features.',
    examples: [{ english: 'Choose the correct category before uploading the file.', malay: 'Ayat ini menunjukkan penggunaan perkataan “category” dalam konteks Bahasa Inggeris British.', chinese: '上传文件前选择正确的类别。' }], collocations: ['product category', 'fall into a category'], level: 2, cefr: 'B1', categories: ['Technology', 'Business'],
  },
  {
    id: 'character', term: 'character', normalizedTerm: 'character', partOfSpeech: ['noun'], ipa: '/kˈaɹɪktə/',
    chineseShort: '性格；人物；字符', chineseExplanation: '一个人的性格，也可指故事人物或文字、数字等字符。', englishDefinition: 'A person\'s qualities; also, a person in a story or a written symbol.',
    examples: [{ english: 'My favourite character in the film is the teacher.', malay: 'Ayat ini menunjukkan penggunaan perkataan “character” dalam konteks Bahasa Inggeris British.', chinese: '我最喜欢的电影角色是那位老师。' }], collocations: ['main character', 'strong character'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'climate', term: 'climate', normalizedTerm: 'climate', partOfSpeech: ['noun'], ipa: '/klˈaɪmət/',
    chineseShort: '气候', chineseExplanation: '某个地区长期的一般天气状况。', englishDefinition: 'The usual weather conditions of a place over a long period.',
    examples: [{ english: 'The island has a warm tropical climate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “climate” dalam konteks Bahasa Inggeris British.', chinese: '这个岛有温暖的热带气候。' }], collocations: ['warm climate', 'climate change'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'conversation', term: 'conversation', normalizedTerm: 'conversation', partOfSpeech: ['noun'], ipa: '/kɒnvəsˈeɪʃən/',
    chineseShort: '交谈；对话', chineseExplanation: '两个或更多人之间的非正式谈话。', englishDefinition: 'An informal talk between two or more people.',
    examples: [{ english: 'We had a long conversation about our travel plans.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conversation” dalam konteks Bahasa Inggeris British.', chinese: '我们就旅行计划进行了很长的交谈。' }], collocations: ['have a conversation', 'casual conversation'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'cost', term: 'cost', normalizedTerm: 'cost', partOfSpeech: ['noun'], ipa: '/kˈɒst/',
    chineseShort: '费用；成本', chineseExplanation: '购买、制作或完成某事需要支付的金钱。', englishDefinition: 'The amount of money needed to buy, make, or do something.',
    examples: [{ english: 'The total cost includes delivery.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cost” dalam konteks Bahasa Inggeris British.', chinese: '总费用包括配送费。' }], collocations: ['total cost', 'reduce costs'], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'course', term: 'course', normalizedTerm: 'course', partOfSpeech: ['noun'], ipa: '/kˈɔːs/',
    chineseShort: '课程；路线', chineseExplanation: '一系列学习内容，也可指前进的路线或过程。', englishDefinition: 'A series of lessons or a route or direction of movement.',
    examples: [{ english: 'I joined an online English course.', malay: 'Ayat ini menunjukkan penggunaan perkataan “course” dalam konteks Bahasa Inggeris British.', chinese: '我参加了一门在线英语课程。' }], collocations: ['training course', 'online course'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'crowd', term: 'crowd', normalizedTerm: 'crowd', partOfSpeech: ['noun'], ipa: '/kɹˈaʊd/',
    chineseShort: '人群', chineseExplanation: '聚集在同一地点的一大群人。', englishDefinition: 'A large group of people gathered in one place.',
    examples: [{ english: 'A crowd waited outside the stadium.', malay: 'Ayat ini menunjukkan penggunaan perkataan “crowd” dalam konteks Bahasa Inggeris British.', chinese: '一群人在体育场外等候。' }], collocations: ['large crowd', 'crowd of people'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'danger', term: 'danger', normalizedTerm: 'danger', partOfSpeech: ['noun'], ipa: '/dˈeɪndʒə/',
    chineseShort: '危险', chineseExplanation: '可能造成伤害、损失或死亡的情况。', englishDefinition: 'A situation in which harm, loss, or death may happen.',
    examples: [{ english: 'The sign warns drivers of danger ahead.', malay: 'Ayat ini menunjukkan penggunaan perkataan “danger” dalam konteks Bahasa Inggeris British.', chinese: '这个标志提醒驾驶员前方有危险。' }], collocations: ['in danger', 'serious danger'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'data', term: 'data', normalizedTerm: 'data', partOfSpeech: ['noun'], ipa: '/dˈeɪtə/',
    chineseShort: '数据', chineseExplanation: '为了分析、参考或计算而收集的事实和数字。', englishDefinition: 'Facts and figures collected for analysis, reference, or calculation.',
    examples: [{ english: 'The app stores the data on your device.', malay: 'Ayat ini menunjukkan penggunaan perkataan “data” dalam konteks Bahasa Inggeris British.', chinese: '这个应用把数据存储在你的设备上。' }], collocations: ['collect data', 'personal data'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'department', term: 'department', normalizedTerm: 'department', partOfSpeech: ['noun'], ipa: '/dɪpˈɑːtmənt/',
    chineseShort: '部门；系', chineseExplanation: '公司、政府或学校中负责特定工作的部分。', englishDefinition: 'A section of a company, government, or school responsible for a particular area.',
    examples: [{ english: 'Please contact the sales department.', malay: 'Ayat ini menunjukkan penggunaan perkataan “department” dalam konteks Bahasa Inggeris British.', chinese: '请联系销售部门。' }], collocations: ['sales department', 'government department'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'event', term: 'event', normalizedTerm: 'event', partOfSpeech: ['noun'], ipa: '/ɪvˈɛnt/',
    chineseShort: '活动；事件', chineseExplanation: '计划举行的活动，或发生的重要事情。', englishDefinition: 'A planned activity or an important thing that happens.',
    examples: [{ english: 'The school is holding a sports event next week.', malay: 'Ayat ini menunjukkan penggunaan perkataan “event” dalam konteks Bahasa Inggeris British.', chinese: '学校下周将举办体育活动。' }], collocations: ['special event', 'public event'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'example', term: 'example', normalizedTerm: 'example', partOfSpeech: ['noun'], ipa: '/ɛɡzˈampəl/',
    chineseShort: '例子', chineseExplanation: '用来说明规则、观点或情况的具体事物。', englishDefinition: 'A specific thing used to explain a rule, idea, or situation.',
    examples: [{ english: 'The teacher gave an example to explain the grammar point.', malay: 'Ayat ini menunjukkan penggunaan perkataan “example” dalam konteks Bahasa Inggeris British.', chinese: '老师举了一个例子来解释这个语法点。' }], collocations: ['good example', 'for example'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'exercise', term: 'exercise', normalizedTerm: 'exercise', partOfSpeech: ['noun'], ipa: '/ˈɛksəsˌaɪz/',
    chineseShort: '运动；练习', chineseExplanation: '为了健康进行的身体活动，也可指学习中的练习题。', englishDefinition: 'Physical activity for health; also, a task used for practice in learning.',
    examples: [{ english: 'This exercise helps you practise past tense verbs.', malay: 'Ayat ini menunjukkan penggunaan perkataan “exercise” dalam konteks Bahasa Inggeris British.', chinese: '这个练习帮助你练习过去时动词。' }], collocations: ['regular exercise', 'grammar exercise'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'active', term: 'active', normalizedTerm: 'active', partOfSpeech: ['adjective'], ipa: '/ˈaktɪv/',
    chineseShort: '活跃的；积极的', chineseExplanation: '经常活动、参与很多事情或精力充沛的。', englishDefinition: 'Doing many things, moving often, or taking part regularly.',
    examples: [{ english: 'She stays active by walking every evening.', malay: 'Ayat ini menunjukkan penggunaan perkataan “active” dalam konteks Bahasa Inggeris British.', chinese: '她每天晚上散步来保持活跃。' }], collocations: ['stay active', 'active lifestyle'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'afraid', term: 'afraid', normalizedTerm: 'afraid', partOfSpeech: ['adjective'], ipa: '/ɐfɹˈeɪd/',
    chineseShort: '害怕的；担心的', chineseExplanation: '因为危险、可能的问题或不熟悉的事物而感到恐惧。', englishDefinition: 'Feeling fear or worry about danger or a possible problem.',
    examples: [{ english: 'He is afraid of flying alone.', malay: 'Ayat ini menunjukkan penggunaan perkataan “afraid” dalam konteks Bahasa Inggeris British.', chinese: '他害怕独自乘飞机。' }], collocations: ['afraid of', 'afraid to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'alive', term: 'alive', normalizedTerm: 'alive', partOfSpeech: ['adjective'], ipa: '/ɐlˈaɪv/',
    chineseShort: '活着的；有活力的', chineseExplanation: '仍然活着，或充满活动和生气的。', englishDefinition: 'Living and not dead; also, full of activity and energy.',
    examples: [{ english: 'The old tree is still alive.', malay: 'Ayat ini menunjukkan penggunaan perkataan “alive” dalam konteks Bahasa Inggeris British.', chinese: '那棵老树仍然活着。' }], collocations: ['stay alive', 'feel alive'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'alone', term: 'alone', normalizedTerm: 'alone', partOfSpeech: ['adjective', 'adverb'], ipa: '/ɐlˈəʊn/',
    chineseShort: '独自的；单独地', chineseExplanation: '没有其他人在一起，或独自完成某事。', englishDefinition: 'Without other people; by oneself.',
    examples: [{ english: 'She travelled alone for the first time.', malay: 'Ayat ini menunjukkan penggunaan perkataan “alone” dalam konteks Bahasa Inggeris British.', chinese: '她第一次独自旅行。' }], collocations: ['live alone', 'travel alone'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'amazing', term: 'amazing', normalizedTerm: 'amazing', partOfSpeech: ['adjective'], ipa: '/ɐmˈeɪzɪŋ/',
    chineseShort: '令人惊叹的', chineseExplanation: '非常好、特别或令人十分惊讶的。', englishDefinition: 'Very good, surprising, or impressive.',
    examples: [{ english: 'The view from the mountain was amazing.', malay: 'Ayat ini menunjukkan penggunaan perkataan “amazing” dalam konteks Bahasa Inggeris British.', chinese: '山上的景色令人惊叹。' }], collocations: ['amazing view', 'absolutely amazing'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'ancient', term: 'ancient', normalizedTerm: 'ancient', partOfSpeech: ['adjective'], ipa: '/ˈeɪnʃənt/',
    chineseShort: '古老的', chineseExplanation: '来自很久以前的历史时期。', englishDefinition: 'Belonging to a very long time ago in history.',
    examples: [{ english: 'We visited an ancient temple during the trip.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ancient” dalam konteks Bahasa Inggeris British.', chinese: '旅行期间我们参观了一座古老的寺庙。' }], collocations: ['ancient city', 'ancient history'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'anxious', term: 'anxious', normalizedTerm: 'anxious', partOfSpeech: ['adjective'], ipa: '/ˈaŋʃəs/',
    chineseShort: '焦虑的；担心的', chineseExplanation: '因为不确定、困难或即将发生的事情而感到紧张。', englishDefinition: 'Worried or nervous about something uncertain or difficult.',
    examples: [{ english: 'She felt anxious before the interview.', malay: 'Ayat ini menunjukkan penggunaan perkataan “anxious” dalam konteks Bahasa Inggeris British.', chinese: '她在面试前感到焦虑。' }], collocations: ['feel anxious', 'anxious about'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'available', term: 'available', normalizedTerm: 'available', partOfSpeech: ['adjective'], ipa: '/ɐvˈeɪləbəl/',
    chineseShort: '可用的；有空的', chineseExplanation: '可以获得、使用或购买，也可表示某人有时间。', englishDefinition: 'Able to be obtained or used; also, free to do something.',
    examples: [{ english: 'The room is available from Friday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “available” dalam konteks Bahasa Inggeris British.', chinese: '这个房间从星期五起可以使用。' }], collocations: ['available online', 'be available for'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'aware', term: 'aware', normalizedTerm: 'aware', partOfSpeech: ['adjective'], ipa: '/ɐwˈeə/',
    chineseShort: '意识到的；知道的', chineseExplanation: '知道某个事实、问题或周围发生的事情。', englishDefinition: 'Knowing about a fact, problem, or situation.',
    examples: [{ english: 'Are you aware of the new rule?', malay: 'Ayat ini menunjukkan penggunaan perkataan “aware” dalam konteks Bahasa Inggeris British.', chinese: '你知道这项新规定吗？' }], collocations: ['aware of', 'become aware'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'basic', term: 'basic', normalizedTerm: 'basic', partOfSpeech: ['adjective'], ipa: '/bˈeɪsɪk/',
    chineseShort: '基本的；基础的', chineseExplanation: '只包含最重要、最简单或最必要的部分。', englishDefinition: 'Including only the most important, simple, or necessary parts.',
    examples: [{ english: 'The course teaches basic computer skills.', malay: 'Ayat ini menunjukkan penggunaan perkataan “basic” dalam konteks Bahasa Inggeris British.', chinese: '这门课程教授基础电脑技能。' }], collocations: ['basic skills', 'basic information'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'careful', term: 'careful', normalizedTerm: 'careful', partOfSpeech: ['adjective'], ipa: '/kˈeəfəl/',
    chineseShort: '小心的；仔细的', chineseExplanation: '为了避免错误、损坏或危险而认真注意。', englishDefinition: 'Giving close attention in order to avoid mistakes, damage, or danger.',
    examples: [{ english: 'Be careful when crossing the road.', malay: 'Ayat ini menunjukkan penggunaan perkataan “careful” dalam konteks Bahasa Inggeris British.', chinese: '过马路时要小心。' }], collocations: ['be careful', 'careful planning'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'certain', term: 'certain', normalizedTerm: 'certain', partOfSpeech: ['adjective'], ipa: '/sˈɜːtən/',
    chineseShort: '确定的；某个的', chineseExplanation: '确信某事是真的，也可表示没有具体说明的某一个。', englishDefinition: 'Sure that something is true; also, a particular but unspecified one.',
    examples: [{ english: 'I am certain that I locked the door.', malay: 'Ayat ini menunjukkan penggunaan perkataan “certain” dalam konteks Bahasa Inggeris British.', chinese: '我确定我锁了门。' }], collocations: ['certain that', 'for certain'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'comfortable', term: 'comfortable', normalizedTerm: 'comfortable', partOfSpeech: ['adjective'], ipa: '/kˈʌmftəbəl/',
    chineseShort: '舒适的；自在的', chineseExplanation: '让身体感觉舒服，或让人感到放松、不紧张。', englishDefinition: 'Making you feel physically relaxed or emotionally at ease.',
    examples: [{ english: 'These shoes are comfortable for long walks.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comfortable” dalam konteks Bahasa Inggeris British.', chinese: '这双鞋适合长时间走路，很舒适。' }], collocations: ['feel comfortable', 'comfortable seat'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'common', term: 'common', normalizedTerm: 'common', partOfSpeech: ['adjective'], ipa: '/kˈɒmən/',
    chineseShort: '常见的；共同的', chineseExplanation: '经常发生或存在，也可表示由多人共同拥有。', englishDefinition: 'Happening often or shared by several people.',
    examples: [{ english: 'This is a common mistake among learners.', malay: 'Ayat ini menunjukkan penggunaan perkataan “common” dalam konteks Bahasa Inggeris British.', chinese: '这是学习者中常见的错误。' }], collocations: ['common problem', 'have in common'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'confident', term: 'confident', normalizedTerm: 'confident', partOfSpeech: ['adjective'], ipa: '/kˈɒnfɪdənt/',
    chineseShort: '自信的', chineseExplanation: '相信自己的能力、判断或成功可能性。', englishDefinition: 'Feeling sure about your ability, judgement, or chance of success.',
    examples: [{ english: 'She feels more confident speaking English now.', malay: 'Ayat ini menunjukkan penggunaan perkataan “confident” dalam konteks Bahasa Inggeris British.', chinese: '她现在说英语更有自信了。' }], collocations: ['feel confident', 'confident about'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'crowded', term: 'crowded', normalizedTerm: 'crowded', partOfSpeech: ['adjective'], ipa: '/kɹˈaʊdɪd/',
    chineseShort: '拥挤的', chineseExplanation: '有太多人或东西，导致空间不足。', englishDefinition: 'Full of too many people or things.',
    examples: [{ english: 'The train was crowded during rush hour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “crowded” dalam konteks Bahasa Inggeris British.', chinese: '高峰时段火车很拥挤。' }], collocations: ['crowded train', 'very crowded'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'curious', term: 'curious', normalizedTerm: 'curious', partOfSpeech: ['adjective'], ipa: '/kjˈʊɹɪəs/',
    chineseShort: '好奇的', chineseExplanation: '想知道或了解更多关于某人或某事的信息。', englishDefinition: 'Wanting to know or learn more about someone or something.',
    examples: [{ english: 'The children were curious about the new robot.', malay: 'Ayat ini menunjukkan penggunaan perkataan “curious” dalam konteks Bahasa Inggeris British.', chinese: '孩子们对新机器人很好奇。' }], collocations: ['curious about', 'naturally curious'], level: 2, cefr: 'B1', categories: ['School', 'Technology'],
  },
  {
    id: 'daily', term: 'daily', normalizedTerm: 'daily', partOfSpeech: ['adjective', 'adverb'], ipa: '/dˈeɪli/',
    chineseShort: '每日的；每天', chineseExplanation: '每天发生、使用或完成的。', englishDefinition: 'Happening, used, or done every day.',
    examples: [{ english: 'Reading is part of my daily routine.', malay: 'Ayat ini menunjukkan penggunaan perkataan “daily” dalam konteks Bahasa Inggeris British.', chinese: '阅读是我日常生活的一部分。' }], collocations: ['daily routine', 'daily life'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dangerous', term: 'dangerous', normalizedTerm: 'dangerous', partOfSpeech: ['adjective'], ipa: '/dˈeɪndʒəɹəs/',
    chineseShort: '危险的', chineseExplanation: '可能造成伤害、损失或事故的。', englishDefinition: 'Likely to cause harm, damage, or an accident.',
    examples: [{ english: 'It is dangerous to drive when you are very tired.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dangerous” dalam konteks Bahasa Inggeris British.', chinese: '非常疲倦时开车很危险。' }], collocations: ['dangerous situation', 'potentially dangerous'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'different', term: 'different', normalizedTerm: 'different', partOfSpeech: ['adjective'], ipa: '/dˈɪfɹənt/',
    chineseShort: '不同的', chineseExplanation: '与另一个人或事物不相同。', englishDefinition: 'Not the same as another person or thing.',
    examples: [{ english: 'We tried three different methods.', malay: 'Ayat ini menunjukkan penggunaan perkataan “different” dalam konteks Bahasa Inggeris British.', chinese: '我们尝试了三种不同的方法。' }], collocations: ['different from', 'completely different'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'difficult', term: 'difficult', normalizedTerm: 'difficult', partOfSpeech: ['adjective'], ipa: '/dˈɪfɪkəlt/',
    chineseShort: '困难的', chineseExplanation: '需要较多努力、技能或理解才能完成。', englishDefinition: 'Requiring a lot of effort, skill, or understanding.',
    examples: [{ english: 'The final question was quite difficult.', malay: 'Ayat ini menunjukkan penggunaan perkataan “difficult” dalam konteks Bahasa Inggeris British.', chinese: '最后一个问题相当困难。' }], collocations: ['difficult task', 'find something difficult'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'direct', term: 'direct', normalizedTerm: 'direct', partOfSpeech: ['adjective'], ipa: '/daɪɹˈɛkt/',
    chineseShort: '直接的；直达的', chineseExplanation: '没有中间步骤、停留或绕路，也可表示表达明确。', englishDefinition: 'Without an intermediate step, stop, or route; also, clear and straightforward.',
    examples: [{ english: 'Is there a direct bus to the airport?', malay: 'Ayat ini menunjukkan penggunaan perkataan “direct” dalam konteks Bahasa Inggeris British.', chinese: '有直达机场的巴士吗？' }], collocations: ['direct flight', 'direct contact'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'disappointed', term: 'disappointed', normalizedTerm: 'disappointed', partOfSpeech: ['adjective'], ipa: '/dˌɪsɐpˈɔɪntɪd/',
    chineseShort: '失望的', chineseExplanation: '因为结果没有达到期待而感到不开心。', englishDefinition: 'Unhappy because something was not as good as expected.',
    examples: [{ english: 'We were disappointed with the service.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disappointed” dalam konteks Bahasa Inggeris British.', chinese: '我们对这项服务感到失望。' }], collocations: ['disappointed with', 'feel disappointed'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'effective', term: 'effective', normalizedTerm: 'effective', partOfSpeech: ['adjective'], ipa: '/ɪfˈɛktɪv/',
    chineseShort: '有效的', chineseExplanation: '能够产生预期结果或成功解决问题的。', englishDefinition: 'Producing the intended result or successfully solving a problem.',
    examples: [{ english: 'This is an effective way to remember new words.', malay: 'Ayat ini menunjukkan penggunaan perkataan “effective” dalam konteks Bahasa Inggeris British.', chinese: '这是记住新单词的有效方法。' }], collocations: ['effective method', 'highly effective'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'empty', term: 'empty', normalizedTerm: 'empty', partOfSpeech: ['adjective'], ipa: '/ˈɛmpti/',
    chineseShort: '空的', chineseExplanation: '里面没有人、物品或内容的。', englishDefinition: 'Containing nothing or no people.',
    examples: [{ english: 'The waiting room was almost empty.', malay: 'Ayat ini menunjukkan penggunaan perkataan “empty” dalam konteks Bahasa Inggeris British.', chinese: '候诊室几乎是空的。' }], collocations: ['empty room', 'completely empty'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'enormous', term: 'enormous', normalizedTerm: 'enormous', partOfSpeech: ['adjective'], ipa: '/ɪnˈɔːməs/',
    chineseShort: '巨大的', chineseExplanation: '尺寸、数量或程度非常大的。', englishDefinition: 'Extremely large in size, amount, or degree.',
    examples: [{ english: 'The project required an enormous amount of work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enormous” dalam konteks Bahasa Inggeris British.', chinese: '这个项目需要大量工作。' }], collocations: ['enormous amount', 'enormous difference'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'equal', term: 'equal', normalizedTerm: 'equal', partOfSpeech: ['adjective'], ipa: '/ˈiːkwəl/',
    chineseShort: '相等的；平等的', chineseExplanation: '在数量、价值、权利或地位上相同。', englishDefinition: 'The same in amount, value, rights, or status.',
    examples: [{ english: 'All team members should have an equal chance to speak.', malay: 'Ayat ini menunjukkan penggunaan perkataan “equal” dalam konteks Bahasa Inggeris British.', chinese: '所有团队成员都应该有平等的发言机会。' }], collocations: ['equal opportunity', 'equal to'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'excellent', term: 'excellent', normalizedTerm: 'excellent', partOfSpeech: ['adjective'], ipa: '/ˈɛksələnt/',
    chineseShort: '优秀的；极好的', chineseExplanation: '质量非常高或表现非常好的。', englishDefinition: 'Extremely good or of very high quality.',
    examples: [{ english: 'The hotel received excellent reviews.', malay: 'Ayat ini menunjukkan penggunaan perkataan “excellent” dalam konteks Bahasa Inggeris British.', chinese: '这家酒店获得了很好的评价。' }], collocations: ['excellent service', 'excellent result'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'familiar', term: 'familiar', normalizedTerm: 'familiar', partOfSpeech: ['adjective'], ipa: '/fəmˈɪliə/',
    chineseShort: '熟悉的', chineseExplanation: '以前见过、听过或知道，因此容易认出。', englishDefinition: 'Known from previous experience and easy to recognise.',
    examples: [{ english: 'Her voice sounded familiar to me.', malay: 'Ayat ini menunjukkan penggunaan perkataan “familiar” dalam konteks Bahasa Inggeris British.', chinese: '她的声音听起来很熟悉。' }], collocations: ['familiar with', 'look familiar'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'famous', term: 'famous', normalizedTerm: 'famous', partOfSpeech: ['adjective'], ipa: '/fˈeɪməs/',
    chineseShort: '著名的', chineseExplanation: '被很多人知道或认识的。', englishDefinition: 'Known by many people.',
    examples: [{ english: 'The town is famous for its street food.', malay: 'Ayat ini menunjukkan penggunaan perkataan “famous” dalam konteks Bahasa Inggeris British.', chinese: '这个小镇以街头美食闻名。' }], collocations: ['famous for', 'world-famous'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'formal', term: 'formal', normalizedTerm: 'formal', partOfSpeech: ['adjective'], ipa: '/fˈɔːməl/',
    chineseShort: '正式的', chineseExplanation: '适合正式场合、工作或官方交流的。', englishDefinition: 'Suitable for official, professional, or serious situations.',
    examples: [{ english: 'Use a formal style when writing the application email.', malay: 'Ayat ini menunjukkan penggunaan perkataan “formal” dalam konteks Bahasa Inggeris British.', chinese: '写申请邮件时使用正式文体。' }], collocations: ['formal language', 'formal meeting'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'friendly', term: 'friendly', normalizedTerm: 'friendly', partOfSpeech: ['adjective'], ipa: '/fɹˈɛndli/',
    chineseShort: '友好的', chineseExplanation: '表现得亲切、友善并容易相处的。', englishDefinition: 'Kind, pleasant, and easy to talk to.',
    examples: [{ english: 'The staff were friendly and helpful.', malay: 'Ayat ini menunjukkan penggunaan perkataan “friendly” dalam konteks Bahasa Inggeris British.', chinese: '工作人员友好又乐于助人。' }], collocations: ['friendly staff', 'environmentally friendly'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'general', term: 'general', normalizedTerm: 'general', partOfSpeech: ['adjective'], ipa: '/dʒˈɛnəɹəl/',
    chineseShort: '一般的；总体的', chineseExplanation: '涉及整体而不是具体细节的。', englishDefinition: 'Related to the whole rather than specific details.',
    examples: [{ english: 'The guide gives general information about the city.', malay: 'Ayat ini menunjukkan penggunaan perkataan “general” dalam konteks Bahasa Inggeris British.', chinese: '这本指南提供关于这座城市的一般信息。' }], collocations: ['general information', 'in general'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'gentle', term: 'gentle', normalizedTerm: 'gentle', partOfSpeech: ['adjective'], ipa: '/dʒˈɛntəl/',
    chineseShort: '温和的；轻柔的', chineseExplanation: '动作、声音或态度不粗暴、不强烈。', englishDefinition: 'Soft, calm, and not rough or strong.',
    examples: [{ english: 'Use a gentle movement when cleaning the screen.', malay: 'Ayat ini menunjukkan penggunaan perkataan “gentle” dalam konteks Bahasa Inggeris British.', chinese: '清洁屏幕时动作要轻柔。' }], collocations: ['gentle voice', 'gentle pressure'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'glad', term: 'glad', normalizedTerm: 'glad', partOfSpeech: ['adjective'], ipa: '/ɡlˈad/',
    chineseShort: '高兴的', chineseExplanation: '因为某件好事发生而感到开心或满意。', englishDefinition: 'Happy or pleased about something.',
    examples: [{ english: 'I am glad you could join us today.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glad” dalam konteks Bahasa Inggeris British.', chinese: '我很高兴你今天能加入我们。' }], collocations: ['glad to', 'glad that'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'healthy', term: 'healthy', normalizedTerm: 'healthy', partOfSpeech: ['adjective'], ipa: '/hˈɛlθi/',
    chineseShort: '健康的；有益健康的', chineseExplanation: '身体状况良好，或有助于保持身体健康。', englishDefinition: 'Physically well or helpful for maintaining good health.',
    examples: [{ english: 'A healthy breakfast can help you start the day well.', malay: 'Ayat ini menunjukkan penggunaan perkataan “healthy” dalam konteks Bahasa Inggeris British.', chinese: '健康的早餐能帮助你有个好的开始。' }], collocations: ['healthy diet', 'healthy lifestyle'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'helpful', term: 'helpful', normalizedTerm: 'helpful', partOfSpeech: ['adjective'], ipa: '/hˈɛlpfəl/',
    chineseShort: '有帮助的', chineseExplanation: '能够提供帮助、信息或改善情况的。', englishDefinition: 'Providing help, useful information, or improvement.',
    examples: [{ english: 'The receptionist gave us helpful directions.', malay: 'Ayat ini menunjukkan penggunaan perkataan “helpful” dalam konteks Bahasa Inggeris British.', chinese: '接待员给了我们有用的路线指示。' }], collocations: ['helpful advice', 'very helpful'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'honest', term: 'honest', normalizedTerm: 'honest', partOfSpeech: ['adjective'], ipa: '/ˈɒnɪst/',
    chineseShort: '诚实的', chineseExplanation: '说真话、不欺骗，并以公平方式行事的。', englishDefinition: 'Truthful, not deceptive, and fair in behaviour.',
    examples: [{ english: 'Please give me an honest answer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “honest” dalam konteks Bahasa Inggeris British.', chinese: '请给我一个诚实的回答。' }], collocations: ['honest answer', 'be honest with'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'independent', term: 'independent', normalizedTerm: 'independent', partOfSpeech: ['adjective'], ipa: '/ˌɪndɪpˈɛndənt/',
    chineseShort: '独立的', chineseExplanation: '能够不依赖别人完成事情或作决定的。', englishDefinition: 'Able to do things or make decisions without depending on others.',
    examples: [{ english: 'Living alone made her more independent.', malay: 'Ayat ini menunjukkan penggunaan perkataan “independent” dalam konteks Bahasa Inggeris British.', chinese: '独自生活让她变得更独立。' }], collocations: ['independent study', 'be independent'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'international', term: 'international', normalizedTerm: 'international', partOfSpeech: ['adjective'], ipa: '/ˌɪntənˈaʃənəl/',
    chineseShort: '国际的', chineseExplanation: '涉及多个国家或不同国家的人。', englishDefinition: 'Involving more than one country or people from different countries.',
    examples: [{ english: 'The university has many international students.', malay: 'Ayat ini menunjukkan penggunaan perkataan “international” dalam konteks Bahasa Inggeris British.', chinese: '这所大学有很多国际学生。' }], collocations: ['international travel', 'international company'], level: 2, cefr: 'B1', categories: ['Travel', 'Business'],
  },
  {
    id: 'likely', term: 'likely', normalizedTerm: 'likely', partOfSpeech: ['adjective'], ipa: '/lˈaɪkli/',
    chineseShort: '可能的', chineseExplanation: '很可能发生、出现或是真的。', englishDefinition: 'Probably going to happen or be true.',
    examples: [{ english: 'It is likely to rain this afternoon.', malay: 'Ayat ini menunjukkan penggunaan perkataan “likely” dalam konteks Bahasa Inggeris British.', chinese: '今天下午很可能下雨。' }], collocations: ['likely to', 'highly likely'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'local', term: 'local', normalizedTerm: 'local', partOfSpeech: ['adjective'], ipa: '/lˈəʊkəl/',
    chineseShort: '当地的；本地的', chineseExplanation: '与附近地区、城市或社区有关的。', englishDefinition: 'Related to the nearby area, city, or community.',
    examples: [{ english: 'We bought fruit from a local market.', malay: 'Ayat ini menunjukkan penggunaan perkataan “local” dalam konteks Bahasa Inggeris British.', chinese: '我们从当地市场买了水果。' }], collocations: ['local area', 'local business'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'lucky', term: 'lucky', normalizedTerm: 'lucky', partOfSpeech: ['adjective'], ipa: '/lˈʌki/',
    chineseShort: '幸运的', chineseExplanation: '因为好机会或意外的好结果而获得好处的。', englishDefinition: 'Having good fortune or receiving a good result by chance.',
    examples: [{ english: 'We were lucky to find the last two tickets.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lucky” dalam konteks Bahasa Inggeris British.', chinese: '我们很幸运买到了最后两张票。' }], collocations: ['feel lucky', 'lucky enough'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'modern', term: 'modern', normalizedTerm: 'modern', partOfSpeech: ['adjective'], ipa: '/mˈɒdən/',
    chineseShort: '现代的', chineseExplanation: '属于当前时代，或使用较新的设计、方法和技术的。', englishDefinition: 'Belonging to the present time or using newer designs, methods, or technology.',
    examples: [{ english: 'The library has a modern study area.', malay: 'Ayat ini menunjukkan penggunaan perkataan “modern” dalam konteks Bahasa Inggeris British.', chinese: '图书馆有一个现代化的学习区。' }], collocations: ['modern technology', 'modern life'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'natural', term: 'natural', normalizedTerm: 'natural', partOfSpeech: ['adjective'], ipa: '/nˈatʃəɹəl/',
    chineseShort: '自然的；天然的', chineseExplanation: '来自自然界而不是人工制造，也可表示正常、不做作。', englishDefinition: 'Coming from nature rather than being made artificially; also, normal and not forced.',
    examples: [{ english: 'The product is made from natural materials.', malay: 'Ayat ini menunjukkan penggunaan perkataan “natural” dalam konteks Bahasa Inggeris British.', chinese: '这个产品由天然材料制成。' }], collocations: ['natural environment', 'natural light'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'necessary', term: 'necessary', normalizedTerm: 'necessary', partOfSpeech: ['adjective'], ipa: '/nˈɛsəsəɹi/',
    chineseShort: '必要的', chineseExplanation: '为了达到目标或避免问题而必须有或必须做的。', englishDefinition: 'Needed in order to achieve something or avoid a problem.',
    examples: [{ english: 'A passport is necessary for international travel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “necessary” dalam konteks Bahasa Inggeris British.', chinese: '国际旅行需要护照。' }], collocations: ['necessary information', 'absolutely necessary'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'nervous', term: 'nervous', normalizedTerm: 'nervous', partOfSpeech: ['adjective'], ipa: '/nˈɜːvəs/',
    chineseShort: '紧张的；不安的', chineseExplanation: '因为担忧、害怕或即将发生的重要事情而紧张。', englishDefinition: 'Worried or uneasy, especially before something important.',
    examples: [{ english: 'I always feel nervous before giving a presentation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nervous” dalam konteks Bahasa Inggeris British.', chinese: '我在做演示前总会感到紧张。' }], collocations: ['feel nervous', 'nervous about'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'normal', term: 'normal', normalizedTerm: 'normal', partOfSpeech: ['adjective'], ipa: '/nˈɔːməl/',
    chineseShort: '正常的；普通的', chineseExplanation: '符合通常情况、标准或预期的。', englishDefinition: 'Usual, expected, or within a standard range.',
    examples: [{ english: 'The system is working normally again.', malay: 'Ayat ini menunjukkan penggunaan perkataan “normal” dalam konteks Bahasa Inggeris British.', chinese: '系统又恢复正常运行了。' }], collocations: ['normal life', 'normal condition'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'ordinary', term: 'ordinary', normalizedTerm: 'ordinary', partOfSpeech: ['adjective'], ipa: '/ˈɔːdɪnəɹi/',
    chineseShort: '普通的；平常的', chineseExplanation: '没有特别、不寻常或突出的地方。', englishDefinition: 'Not special, unusual, or remarkable.',
    examples: [{ english: 'It looked like an ordinary office building.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ordinary” dalam konteks Bahasa Inggeris British.', chinese: '它看起来像一栋普通的办公楼。' }], collocations: ['ordinary people', 'ordinary day'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'peaceful', term: 'peaceful', normalizedTerm: 'peaceful', partOfSpeech: ['adjective'], ipa: '/pˈiːsfəl/',
    chineseShort: '平静的；和平的', chineseExplanation: '安静、没有冲突或打扰的。', englishDefinition: 'Calm, quiet, and free from conflict or disturbance.',
    examples: [{ english: 'The village is peaceful at night.', malay: 'Ayat ini menunjukkan penggunaan perkataan “peaceful” dalam konteks Bahasa Inggeris British.', chinese: '这个村庄晚上很安静。' }], collocations: ['peaceful place', 'peaceful life'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'perfect', term: 'perfect', normalizedTerm: 'perfect', partOfSpeech: ['adjective'], ipa: '/pˈɜːfɛkt/',
    chineseShort: '完美的；非常合适的', chineseExplanation: '没有明显错误，或非常适合某种需要。', englishDefinition: 'Without noticeable faults or exactly right for a purpose.',
    examples: [{ english: 'This room is perfect for a small meeting.', malay: 'Ayat ini menunjukkan penggunaan perkataan “perfect” dalam konteks Bahasa Inggeris British.', chinese: '这个房间非常适合小型会议。' }], collocations: ['perfect for', 'perfect condition'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'personal', term: 'personal', normalizedTerm: 'personal', partOfSpeech: ['adjective'], ipa: '/pˈɜːsənəl/',
    chineseShort: '个人的；私人的', chineseExplanation: '与某个具体个人、其生活或观点有关的。', englishDefinition: 'Related to a particular person, their life, or their views.',
    examples: [{ english: 'Do not share personal information with strangers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “personal” dalam konteks Bahasa Inggeris British.', chinese: '不要向陌生人分享个人信息。' }], collocations: ['personal information', 'personal experience'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'pleasant', term: 'pleasant', normalizedTerm: 'pleasant', partOfSpeech: ['adjective'], ipa: '/plˈɛzənt/',
    chineseShort: '令人愉快的', chineseExplanation: '让人感到舒服、开心或满意的。', englishDefinition: 'Enjoyable, comfortable, or pleasing.',
    examples: [{ english: 'We had a pleasant evening by the river.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pleasant” dalam konteks Bahasa Inggeris British.', chinese: '我们在河边度过了一个愉快的夜晚。' }], collocations: ['pleasant surprise', 'pleasant experience'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'polite', term: 'polite', normalizedTerm: 'polite', partOfSpeech: ['adjective'], ipa: '/pəlˈaɪt/',
    chineseShort: '有礼貌的', chineseExplanation: '以尊重、良好礼仪和体贴的方式对待别人。', englishDefinition: 'Showing respect, good manners, and consideration for others.',
    examples: [{ english: 'It is polite to thank someone for their help.', malay: 'Ayat ini menunjukkan penggunaan perkataan “polite” dalam konteks Bahasa Inggeris British.', chinese: '感谢别人的帮助是有礼貌的。' }], collocations: ['polite request', 'be polite to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'popular', term: 'popular', normalizedTerm: 'popular', partOfSpeech: ['adjective'], ipa: '/pˈɒpjʊlə/',
    chineseShort: '受欢迎的；流行的', chineseExplanation: '被很多人喜欢、使用或选择的。', englishDefinition: 'Liked, used, or chosen by many people.',
    examples: [{ english: 'This café is popular with local students.', malay: 'Ayat ini menunjukkan penggunaan perkataan “popular” dalam konteks Bahasa Inggeris British.', chinese: '这家咖啡馆很受当地学生欢迎。' }], collocations: ['popular with', 'popular choice'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'possible', term: 'possible', normalizedTerm: 'possible', partOfSpeech: ['adjective'], ipa: '/pˈɒsəbəl/',
    chineseShort: '可能的；可行的', chineseExplanation: '能够发生、完成或实现的。', englishDefinition: 'Able to happen, be done, or be achieved.',
    examples: [{ english: 'Is it possible to change the booking date?', malay: 'Ayat ini menunjukkan penggunaan perkataan “possible” dalam konteks Bahasa Inggeris British.', chinese: '可以更改预订日期吗？' }], collocations: ['possible to', 'as soon as possible'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'practical', term: 'practical', normalizedTerm: 'practical', partOfSpeech: ['adjective'], ipa: '/pɹˈaktɪkəl/',
    chineseShort: '实用的；实际的', chineseExplanation: '适合真实情况并能够有效使用的。', englishDefinition: 'Useful and suitable for real situations.',
    examples: [{ english: 'The course gives practical advice for job interviews.', malay: 'Ayat ini menunjukkan penggunaan perkataan “practical” dalam konteks Bahasa Inggeris British.', chinese: '这门课程提供求职面试的实用建议。' }], collocations: ['practical advice', 'practical solution'], level: 2, cefr: 'B1', categories: ['School', 'Business'],
  },
  {
    id: 'private', term: 'private', normalizedTerm: 'private', partOfSpeech: ['adjective'], ipa: '/pɹˈaɪvət/',
    chineseShort: '私人的；私密的', chineseExplanation: '只供特定个人或群体使用，不向公众开放。', englishDefinition: 'For a particular person or group and not open to the public.',
    examples: [{ english: 'This is a private conversation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “private” dalam konteks Bahasa Inggeris British.', chinese: '这是一次私人谈话。' }], collocations: ['private room', 'private information'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'proud', term: 'proud', normalizedTerm: 'proud', partOfSpeech: ['adjective'], ipa: '/pɹˈaʊd/',
    chineseShort: '自豪的', chineseExplanation: '因为自己或他人的成就而感到满意和自豪。', englishDefinition: 'Feeling pleased and satisfied about an achievement.',
    examples: [{ english: 'Her parents are proud of her progress.', malay: 'Ayat ini menunjukkan penggunaan perkataan “proud” dalam konteks Bahasa Inggeris British.', chinese: '她的父母为她的进步感到自豪。' }], collocations: ['proud of', 'feel proud'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'public', term: 'public', normalizedTerm: 'public', partOfSpeech: ['adjective'], ipa: '/pˈʌblɪk/',
    chineseShort: '公共的；公开的', chineseExplanation: '供所有人使用、涉及公众或任何人都能看到的。', englishDefinition: 'Open to everyone, related to the public, or visible to anyone.',
    examples: [{ english: 'The city has a good public transport system.', malay: 'Ayat ini menunjukkan penggunaan perkataan “public” dalam konteks Bahasa Inggeris British.', chinese: '这座城市有良好的公共交通系统。' }], collocations: ['public transport', 'public place'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'quiet', term: 'quiet', normalizedTerm: 'quiet', partOfSpeech: ['adjective'], ipa: '/kwˈaɪət/',
    chineseShort: '安静的', chineseExplanation: '声音很少或没有太多活动、打扰的。', englishDefinition: 'Making little noise or having little activity or disturbance.',
    examples: [{ english: 'I need a quiet place to study.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quiet” dalam konteks Bahasa Inggeris British.', chinese: '我需要一个安静的地方学习。' }], collocations: ['quiet room', 'keep quiet'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'ready', term: 'ready', normalizedTerm: 'ready', partOfSpeech: ['adjective'], ipa: '/ɹˈɛdi/',
    chineseShort: '准备好的', chineseExplanation: '已经做好准备，可以开始做某事或面对某种情况。', englishDefinition: 'Prepared and able to start doing something or face a situation.',
    examples: [{ english: 'The report is ready to send.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ready” dalam konteks Bahasa Inggeris British.', chinese: '报告已经可以发送了。' }], collocations: ['ready to', 'get ready'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'recent', term: 'recent', normalizedTerm: 'recent', partOfSpeech: ['adjective'], ipa: '/ɹˈiːsənt/',
    chineseShort: '最近的；近期的', chineseExplanation: '发生在不久以前的。', englishDefinition: 'Happening or existing not long ago.',
    examples: [{ english: 'Recent changes have improved the website.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recent” dalam konteks Bahasa Inggeris British.', chinese: '最近的改动改善了网站。' }], collocations: ['recent changes', 'recent research'], level: 2, cefr: 'B1', categories: ['Technology', 'School'],
  },
  {
    id: 'regular', term: 'regular', normalizedTerm: 'regular', partOfSpeech: ['adjective'], ipa: '/ɹˈɛɡjuːlə/',
    chineseShort: '规律的；经常的', chineseExplanation: '按照固定时间或方式重复发生，也可表示普通、常规的。', englishDefinition: 'Happening repeatedly in a fixed pattern; also, usual or standard.',
    examples: [{ english: 'Regular practice can improve your pronunciation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “regular” dalam konteks Bahasa Inggeris British.', chinese: '规律练习可以提高你的发音。' }], collocations: ['regular exercise', 'regular customer'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'responsible', term: 'responsible', normalizedTerm: 'responsible', partOfSpeech: ['adjective'], ipa: '/ɹɪspˈɒnsəbəl/',
    chineseShort: '负责的；有责任心的', chineseExplanation: '有义务完成某事，或能够认真可靠地处理事情。', englishDefinition: 'Having a duty to do something or behaving reliably and carefully.',
    examples: [{ english: 'She is responsible for organising the event.', malay: 'Ayat ini menunjukkan penggunaan perkataan “responsible” dalam konteks Bahasa Inggeris British.', chinese: '她负责组织这次活动。' }], collocations: ['responsible for', 'responsible person'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'serious', term: 'serious', normalizedTerm: 'serious', partOfSpeech: ['adjective'], ipa: '/sˈiəɹɪəs/',
    chineseShort: '严重的；认真的', chineseExplanation: '重要、危险或需要认真对待的，也可表示态度严肃。', englishDefinition: 'Important, dangerous, or requiring careful attention; also, not joking.',
    examples: [{ english: 'The delay caused a serious problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “serious” dalam konteks Bahasa Inggeris British.', chinese: '这次延误造成了严重问题。' }], collocations: ['serious problem', 'take seriously'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'similar', term: 'similar', normalizedTerm: 'similar', partOfSpeech: ['adjective'], ipa: '/sˈɪmɪlə/',
    chineseShort: '相似的', chineseExplanation: '在外观、性质或特点上很接近但不完全相同的。', englishDefinition: 'Almost the same in appearance, quality, or features.',
    examples: [{ english: 'The two phones have similar features.', malay: 'Ayat ini menunjukkan penggunaan perkataan “similar” dalam konteks Bahasa Inggeris British.', chinese: '这两部手机有相似的功能。' }], collocations: ['similar to', 'very similar'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'simple', term: 'simple', normalizedTerm: 'simple', partOfSpeech: ['adjective'], ipa: '/sˈɪmpəl/',
    chineseShort: '简单的', chineseExplanation: '容易理解、完成或使用的，不复杂的。', englishDefinition: 'Easy to understand, do, or use; not complicated.',
    examples: [{ english: 'The app has a simple design.', malay: 'Ayat ini menunjukkan penggunaan perkataan “simple” dalam konteks Bahasa Inggeris British.', chinese: '这个应用的设计很简单。' }], collocations: ['simple solution', 'simple way'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'social', term: 'social', normalizedTerm: 'social', partOfSpeech: ['adjective'], ipa: '/sˈəʊʃəl/',
    chineseShort: '社交的；社会的', chineseExplanation: '与人与人互动、社会活动或社会整体有关的。', englishDefinition: 'Related to interaction between people, social activities, or society.',
    examples: [{ english: 'The club organises social events every month.', malay: 'Ayat ini menunjukkan penggunaan perkataan “social” dalam konteks Bahasa Inggeris British.', chinese: '这个俱乐部每月举办社交活动。' }], collocations: ['social media', 'social activity'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'special', term: 'special', normalizedTerm: 'special', partOfSpeech: ['adjective'], ipa: '/spˈɛʃəl/',
    chineseShort: '特别的；特殊的', chineseExplanation: '不同于一般情况，或因为某种原因具有特别意义的。', englishDefinition: 'Different from what is usual or important for a particular reason.',
    examples: [{ english: 'We prepared a special meal for her birthday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “special” dalam konteks Bahasa Inggeris British.', chinese: '我们为她的生日准备了特别的一餐。' }], collocations: ['special occasion', 'special offer'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'strange', term: 'strange', normalizedTerm: 'strange', partOfSpeech: ['adjective'], ipa: '/stɹˈeɪndʒ/',
    chineseShort: '奇怪的；陌生的', chineseExplanation: '不寻常、难以解释或让人不熟悉的。', englishDefinition: 'Unusual, difficult to explain, or unfamiliar.',
    examples: [{ english: 'I heard a strange noise outside.', malay: 'Ayat ini menunjukkan penggunaan perkataan “strange” dalam konteks Bahasa Inggeris British.', chinese: '我听到外面有奇怪的声音。' }], collocations: ['strange noise', 'feel strange'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'successful', term: 'successful', normalizedTerm: 'successful', partOfSpeech: ['adjective'], ipa: '/səksˈɛsfəl/',
    chineseShort: '成功的', chineseExplanation: '达到预期目标或取得良好结果的。', englishDefinition: 'Achieving the intended goal or a good result.',
    examples: [{ english: 'The event was successful despite the rain.', malay: 'Ayat ini menunjukkan penggunaan perkataan “successful” dalam konteks Bahasa Inggeris British.', chinese: '尽管下雨，这次活动仍然很成功。' }], collocations: ['successful project', 'successful career'], level: 2, cefr: 'B1', categories: ['Business', 'Daily English'],
  },
  {
    id: 'suitable', term: 'suitable', normalizedTerm: 'suitable', partOfSpeech: ['adjective'], ipa: '/sˈuːtəbəl/',
    chineseShort: '合适的', chineseExplanation: '适合某个目的、情况或人的需要的。', englishDefinition: 'Right or appropriate for a particular purpose, situation, or person.',
    examples: [{ english: 'This book is suitable for intermediate learners.', malay: 'Ayat ini menunjukkan penggunaan perkataan “suitable” dalam konteks Bahasa Inggeris British.', chinese: '这本书适合中级学习者。' }], collocations: ['suitable for', 'most suitable'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'surprised', term: 'surprised', normalizedTerm: 'surprised', partOfSpeech: ['adjective'], ipa: '/səpɹˈaɪzd/',
    chineseShort: '惊讶的', chineseExplanation: '因为发生了意料之外的事情而感到吃惊。', englishDefinition: 'Feeling amazed because something unexpected happened.',
    examples: [{ english: 'I was surprised by how quickly they replied.', malay: 'Ayat ini menunjukkan penggunaan perkataan “surprised” dalam konteks Bahasa Inggeris British.', chinese: '他们回复得这么快让我很惊讶。' }], collocations: ['surprised by', 'surprised to'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'traditional', term: 'traditional', normalizedTerm: 'traditional', partOfSpeech: ['adjective'], ipa: '/tɹɐdˈɪʃənəl/',
    chineseShort: '传统的', chineseExplanation: '按照长期存在的习俗、方法或风格进行的。', englishDefinition: 'Following customs, methods, or styles that have existed for a long time.',
    examples: [{ english: 'We tried several traditional dishes.', malay: 'Ayat ini menunjukkan penggunaan perkataan “traditional” dalam konteks Bahasa Inggeris British.', chinese: '我们尝试了几道传统菜肴。' }], collocations: ['traditional food', 'traditional method'], level: 2, cefr: 'B1', categories: ['School', 'Travel'],
  },
  {
    id: 'typical', term: 'typical', normalizedTerm: 'typical', partOfSpeech: ['adjective'], ipa: '/tˈɪpɪkəl/',
    chineseShort: '典型的；通常的', chineseExplanation: '具有某类人、事物或情况常见特点的。', englishDefinition: 'Having the usual features of a type of person, thing, or situation.',
    examples: [{ english: 'This weather is typical for August.', malay: 'Ayat ini menunjukkan penggunaan perkataan “typical” dalam konteks Bahasa Inggeris British.', chinese: '这种天气在八月很典型。' }], collocations: ['typical example', 'typical of'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'useful', term: 'useful', normalizedTerm: 'useful', partOfSpeech: ['adjective'], ipa: '/jˈuːsfəl/',
    chineseShort: '有用的', chineseExplanation: '能够帮助完成某事、解决问题或提供重要信息的。', englishDefinition: 'Able to help with a task, solve a problem, or provide important information.',
    examples: [{ english: 'This checklist is useful when preparing for a trip.', malay: 'Ayat ini menunjukkan penggunaan perkataan “useful” dalam konteks Bahasa Inggeris British.', chinese: '这份清单在准备旅行时很有用。' }], collocations: ['useful information', 'useful for'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'valuable', term: 'valuable', normalizedTerm: 'valuable', partOfSpeech: ['adjective'], ipa: '/vˈaljuːəbəl/',
    chineseShort: '有价值的；宝贵的', chineseExplanation: '值很多钱，或因为用途、经验、时间等而非常重要。', englishDefinition: 'Worth a lot of money or very important because of its usefulness or meaning.',
    examples: [{ english: 'The internship gave her valuable experience.', malay: 'Ayat ini menunjukkan penggunaan perkataan “valuable” dalam konteks Bahasa Inggeris British.', chinese: '这次实习给了她宝贵的经验。' }], collocations: ['valuable experience', 'valuable information'], level: 2, cefr: 'B1', categories: ['Business', 'School'],
  },
  {
    id: 'worried', term: 'worried', normalizedTerm: 'worried', partOfSpeech: ['adjective'], ipa: '/wˈʌɹid/',
    chineseShort: '担心的', chineseExplanation: '因为可能发生的问题而感到焦虑或不安。', englishDefinition: 'Feeling anxious about a possible problem.',
    examples: [{ english: 'I am worried about tomorrow\'s exam.', malay: 'Ayat ini menunjukkan penggunaan perkataan “worried” dalam konteks Bahasa Inggeris British.', chinese: '我担心明天的考试。' }], collocations: ['worried about', 'feel worried'], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'abroad', term: 'abroad', normalizedTerm: 'abroad', partOfSpeech: ['adverb'], ipa: '/ɐbɹˈɔːd/',
    chineseShort: '在国外；到国外', chineseExplanation: '在外国或前往外国。', englishDefinition: 'In or to a foreign country.',
    examples: [{ english: 'She hopes to study abroad next year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “abroad” dalam konteks Bahasa Inggeris British.', chinese: '她希望明年到国外留学。' }], collocations: ['study abroad', 'travel abroad'], level: 2, cefr: 'B1', categories: ['Travel', 'School'],
  },
  {
    id: 'actually', term: 'actually', normalizedTerm: 'actually', partOfSpeech: ['adverb'], ipa: '/ˈaktʃuːəli/',
    chineseShort: '实际上；其实', chineseExplanation: '用于说明真实情况，尤其当它与预期不同。', englishDefinition: 'Used to state the real situation, especially when it is different from what was expected.',
    examples: [{ english: 'I thought the shop was closed, but it is actually open.', malay: 'Ayat ini menunjukkan penggunaan perkataan “actually” dalam konteks Bahasa Inggeris British.', chinese: '我以为商店关门了，但其实还开着。' }], collocations: ['actually happen', 'actually quite'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'already', term: 'already', normalizedTerm: 'already', partOfSpeech: ['adverb'], ipa: '/ɔːlɹˈɛdi/',
    chineseShort: '已经', chineseExplanation: '表示某事在现在或指定时间之前已经发生。', englishDefinition: 'Before now or before a particular time.',
    examples: [{ english: 'I have already sent the document.', malay: 'Ayat ini menunjukkan penggunaan perkataan “already” dalam konteks Bahasa Inggeris British.', chinese: '我已经发送了文件。' }], collocations: ['already finished', 'already know'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'carefully', term: 'carefully', normalizedTerm: 'carefully', partOfSpeech: ['adverb'], ipa: '/kˈeəfəli/',
    chineseShort: '小心地；仔细地', chineseExplanation: '以认真、谨慎的方式做事，避免错误或危险。', englishDefinition: 'In a way that gives close attention and avoids mistakes or danger.',
    examples: [{ english: 'Read the instructions carefully before starting.', malay: 'Ayat ini menunjukkan penggunaan perkataan “carefully” dalam konteks Bahasa Inggeris British.', chinese: '开始之前仔细阅读说明。' }], collocations: ['check carefully', 'listen carefully'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'certainly', term: 'certainly', normalizedTerm: 'certainly', partOfSpeech: ['adverb'], ipa: '/sˈɜːtənli/',
    chineseShort: '当然；肯定地', chineseExplanation: '表示非常确定，或礼貌地表示同意。', englishDefinition: 'Used to show strong certainty or polite agreement.',
    examples: [{ english: 'I can certainly help you with that.', malay: 'Ayat ini menunjukkan penggunaan perkataan “certainly” dalam konteks Bahasa Inggeris British.', chinese: '我当然可以帮你处理这件事。' }], collocations: ['certainly possible', 'almost certainly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'clearly', term: 'clearly', normalizedTerm: 'clearly', partOfSpeech: ['adverb'], ipa: '/klˈiəli/',
    chineseShort: '清楚地；明显地', chineseExplanation: '以容易理解、看见或听见的方式。', englishDefinition: 'In a way that is easy to understand, see, or hear.',
    examples: [{ english: 'Please speak clearly during the recording.', malay: 'Ayat ini menunjukkan penggunaan perkataan “clearly” dalam konteks Bahasa Inggeris British.', chinese: '录音时请说清楚。' }], collocations: ['explain clearly', 'clearly show'], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'especially', term: 'especially', normalizedTerm: 'especially', partOfSpeech: ['adverb'], ipa: '/ɪspˈɛʃəli/',
    chineseShort: '尤其；特别', chineseExplanation: '用于强调某个人、事物或情况比其他更值得注意。', englishDefinition: 'Used to emphasise one person, thing, or situation more than others.',
    examples: [{ english: 'I enjoy travelling, especially by train.', malay: 'Ayat ini menunjukkan penggunaan perkataan “especially” dalam konteks Bahasa Inggeris British.', chinese: '我喜欢旅行，尤其是乘火车。' }], collocations: ['especially useful', 'especially important'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'exactly', term: 'exactly', normalizedTerm: 'exactly', partOfSpeech: ['adverb'], ipa: '/ɛɡzˈaktli/',
    chineseShort: '确切地；正好', chineseExplanation: '完全准确地，或表示与所说内容完全一致。', englishDefinition: 'In a completely accurate way or precisely as stated.',
    examples: [{ english: 'Tell me exactly where the problem started.', malay: 'Ayat ini menunjukkan penggunaan perkataan “exactly” dalam konteks Bahasa Inggeris British.', chinese: '确切告诉我问题从哪里开始。' }], collocations: ['exactly right', 'exactly the same'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'finally', term: 'finally', normalizedTerm: 'finally', partOfSpeech: ['adverb'], ipa: '/fˈaɪnəli/',
    chineseShort: '终于；最后', chineseExplanation: '经过一段时间后发生，或表示一系列事情的最后一步。', englishDefinition: 'After a long time; also, at the last stage of a sequence.',
    examples: [{ english: 'We finally found a hotel near the station.', malay: 'Ayat ini menunjukkan penggunaan perkataan “finally” dalam konteks Bahasa Inggeris British.', chinese: '我们终于在车站附近找到了一家酒店。' }], collocations: ['finally arrive', 'finally decide'], level: 2, cefr: 'B1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'generally', term: 'generally', normalizedTerm: 'generally', partOfSpeech: ['adverb'], ipa: '/dʒˈɛnəɹəli/',
    chineseShort: '通常；总体上', chineseExplanation: '在大多数情况下或从整体角度来说。', englishDefinition: 'In most situations or when considering things as a whole.',
    examples: [{ english: 'The buses are generally reliable.', malay: 'Ayat ini menunjukkan penggunaan perkataan “generally” dalam konteks Bahasa Inggeris British.', chinese: '这些巴士通常很可靠。' }], collocations: ['generally speaking', 'generally available'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'immediately', term: 'immediately', normalizedTerm: 'immediately', partOfSpeech: ['adverb'], ipa: '/ɪmˈiːdɪətli/',
    chineseShort: '立即；马上', chineseExplanation: '没有等待或延迟地。', englishDefinition: 'Without waiting or delay.',
    examples: [{ english: 'Please contact us immediately if your card is lost.', malay: 'Ayat ini menunjukkan penggunaan perkataan “immediately” dalam konteks Bahasa Inggeris British.', chinese: '如果卡丢失，请立即联系我们。' }], collocations: ['act immediately', 'immediately after'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'luckily', term: 'luckily', normalizedTerm: 'luckily', partOfSpeech: ['adverb'], ipa: '/lˈʌkili/',
    chineseShort: '幸运地', chineseExplanation: '用于表示某件好事使困难或坏情况得到改善。', englishDefinition: 'Used to say that something good happened in a difficult or bad situation.',
    examples: [{ english: 'Luckily, we arrived before the rain started.', malay: 'Ayat ini menunjukkan penggunaan perkataan “luckily” dalam konteks Bahasa Inggeris British.', chinese: '幸运的是，我们在下雨前到达了。' }], collocations: ['luckily for', 'quite luckily'], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'probably', term: 'probably', normalizedTerm: 'probably', partOfSpeech: ['adverb'], ipa: '/pɹˈɒbəbli/',
    chineseShort: '大概；很可能', chineseExplanation: '表示某事很可能是真的或会发生。', englishDefinition: 'Used to say that something is likely to be true or happen.',
    examples: [{ english: 'The meeting will probably finish by five.', malay: 'Ayat ini menunjukkan penggunaan perkataan “probably” dalam konteks Bahasa Inggeris British.', chinese: '会议大概会在五点前结束。' }], collocations: ['probably will', 'most probably'], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'recently', term: 'recently', normalizedTerm: 'recently', partOfSpeech: ['adverb'], ipa: '/ɹˈiːsəntli/',
    chineseShort: '最近', chineseExplanation: '在离现在不久的时间内。', englishDefinition: 'At a time not long before now.',
    examples: [{ english: 'I recently started using a new study app.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recently” dalam konteks Bahasa Inggeris British.', chinese: '我最近开始使用一个新的学习应用。' }], collocations: ['recently started', 'more recently'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'separately', term: 'separately', normalizedTerm: 'separately', partOfSpeech: ['adverb'], ipa: '/sˈɛpɹətli/',
    chineseShort: '分别地；单独地', chineseExplanation: '不与其他事物一起，而是一个一个或分开处理。', englishDefinition: 'Individually or apart from other things.',
    examples: [{ english: 'Please upload the two files separately.', malay: 'Ayat ini menunjukkan penggunaan perkataan “separately” dalam konteks Bahasa Inggeris British.', chinese: '请分别上传这两个文件。' }], collocations: ['pay separately', 'stored separately'], level: 2, cefr: 'B1', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'simply', term: 'simply', normalizedTerm: 'simply', partOfSpeech: ['adverb'], ipa: '/sˈɪmpli/',
    chineseShort: '简单地；仅仅', chineseExplanation: '以简单方式，或用于表示事情只是如此。', englishDefinition: 'In a simple way; also, merely or just.',
    examples: [{ english: 'The process can be explained simply.', malay: 'Ayat ini menunjukkan penggunaan perkataan “simply” dalam konteks Bahasa Inggeris British.', chinese: '这个过程可以简单地解释。' }], collocations: ['simply because', 'put simply'], level: 2, cefr: 'B1', categories: ['School', 'Daily English'],
  },
  {
    id: 'slowly', term: 'slowly', normalizedTerm: 'slowly', partOfSpeech: ['adverb'], ipa: '/slˈəʊli/',
    chineseShort: '缓慢地', chineseExplanation: '以不快的速度进行。', englishDefinition: 'At a low speed or not quickly.',
    examples: [{ english: 'Drive slowly near the school.', malay: 'Ayat ini menunjukkan penggunaan perkataan “slowly” dalam konteks Bahasa Inggeris British.', chinese: '在学校附近请慢速驾驶。' }], collocations: ['move slowly', 'speak slowly'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'suddenly', term: 'suddenly', normalizedTerm: 'suddenly', partOfSpeech: ['adverb'], ipa: '/sˈʌdənli/',
    chineseShort: '突然', chineseExplanation: '快速且没有预警地发生。', englishDefinition: 'Quickly and without warning.',
    examples: [{ english: 'The lights suddenly went out.', malay: 'Ayat ini menunjukkan penggunaan perkataan “suddenly” dalam konteks Bahasa Inggeris British.', chinese: '灯突然熄灭了。' }], collocations: ['suddenly stop', 'suddenly appear'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'usually', term: 'usually', normalizedTerm: 'usually', partOfSpeech: ['adverb'], ipa: '/jˈuːʒuːəli/',
    chineseShort: '通常', chineseExplanation: '表示某事在大多数时候会发生或是常态。', englishDefinition: 'In most situations or on most occasions.',
    examples: [{ english: 'I usually take the bus to work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “usually” dalam konteks Bahasa Inggeris British.', chinese: '我通常乘巴士上班。' }], collocations: ['usually go', 'usually happens'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'completely', term: 'completely', normalizedTerm: 'completely', partOfSpeech: ['adverb'], ipa: '/kəmplˈiːtli/',
    chineseShort: '完全地；彻底地', chineseExplanation: '达到全部程度，没有遗漏或剩余。', englishDefinition: 'Fully and without anything left out.',
    examples: [{ english: 'The old system has been completely replaced.', malay: 'Ayat ini menunjukkan penggunaan perkataan “completely” dalam konteks Bahasa Inggeris British.', chinese: '旧系统已经被彻底替换。' }], collocations: ['completely different', 'completely understand'], level: 2, cefr: 'B1', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'calm', term: 'calm', normalizedTerm: 'calm', partOfSpeech: ['adjective'], ipa: '/kˈɑːm/',
    chineseShort: '冷静的；平静的', chineseExplanation: '没有紧张、愤怒或强烈情绪，或环境安静稳定。', englishDefinition: 'Not nervous, angry, or excited; peaceful and controlled.',
    examples: [{ english: 'Try to stay calm during the emergency.', malay: 'Ayat ini menunjukkan penggunaan perkataan “calm” dalam konteks Bahasa Inggeris British.', chinese: '紧急情况下尽量保持冷静。' }], collocations: ['stay calm', 'calm voice'], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'university', term: 'university', normalizedTerm: 'university', partOfSpeech: ['noun'],
    chineseShort: '大学', chineseExplanation: '大学是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The body of faculty and students at a university.',
    examples: [{ english: 'The lesson explains the meaning of university.', malay: 'Ayat ini menunjukkan penggunaan perkataan “university” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“university”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'quality', term: 'quality', normalizedTerm: 'quality', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '品质, 特性, 才能, 质量；优质的', chineseExplanation: '品质, 特性, 才能, 质量；优质的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An essential and distinguishing attribute of something or someone.',
    examples: [{ english: 'The lesson explains the meaning of quality.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quality” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quality”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'republican', term: 'republican', normalizedTerm: 'republican', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '共和主义者, 共和党员；共和政体的, 共和国的, 共和主义的', chineseExplanation: '共和主义者, 共和党员；共和政体的, 共和国的, 共和主义的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A member of the Republican Party.',
    examples: [{ english: 'The passage uses republican to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “republican” dalam konteks Bahasa Inggeris British.', chinese: '文章用“republican”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'relation', term: 'relation', normalizedTerm: 'relation', partOfSpeech: ['noun'],
    chineseShort: '关系, 联系, 叙述, 故事, 家属, 亲戚；关系', chineseExplanation: '关系, 联系, 叙述, 故事, 家属, 亲戚；关系是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An abstraction belonging to or characteristic of two entities or parts together.',
    examples: [{ english: 'The lesson explains the meaning of relation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“relation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'element', term: 'element', normalizedTerm: 'element', partOfSpeech: ['noun', 'verb'],
    chineseShort: '元件, 元素, 要素；部分', chineseExplanation: '元件, 元素, 要素；部分是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The most favourable environment for a plant or animal.',
    examples: [{ english: 'The lesson explains the meaning of element.', malay: 'Ayat ini menunjukkan penggunaan perkataan “element” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“element”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'discussion', term: 'discussion', normalizedTerm: 'discussion', partOfSpeech: ['noun'],
    chineseShort: '讨论', chineseExplanation: '讨论是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An extended communication (often interactive) dealing with some particular topic.',
    examples: [{ english: 'The lesson explains the meaning of discussion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discussion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“discussion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'conference', term: 'conference', normalizedTerm: 'conference', partOfSpeech: ['noun', 'verb'],
    chineseShort: '会议；会议, 讨论会, 协商会', chineseExplanation: '会议；会议, 讨论会, 协商会是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A prearranged meeting for consultation or exchange of information or discussion (especially one with a formal agenda).',
    examples: [{ english: 'The lesson explains the meaning of conference.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conference” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conference”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'division', term: 'division', normalizedTerm: 'division', partOfSpeech: ['noun'],
    chineseShort: '分, 分开, 除法, 部门, 师；部分', chineseExplanation: '分, 分开, 除法, 部门, 师；部分是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An army unit large enough to sustain combat.',
    examples: [{ english: 'The lesson explains the meaning of division.', malay: 'Ayat ini menunjukkan penggunaan perkataan “division” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“division”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'reference', term: 'reference', normalizedTerm: 'reference', partOfSpeech: ['noun', 'verb'],
    chineseShort: '参考, 索引, 参照；给...加上参考资料', chineseExplanation: '参考, 索引, 参照；给...加上参考资料是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The most direct or specific meaning of a word or expression; the class of objects that an expression refers to.',
    examples: [{ english: 'The lesson explains the meaning of reference.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reference” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reference”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'commercial', term: 'commercial', normalizedTerm: 'commercial', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '商业的, 商用的, 商品化的；商业广告节目', chineseExplanation: '商业的, 商用的, 商品化的；商业广告节目是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A commercially sponsored ad on radio or television.',
    examples: [{ english: 'The passage uses commercial to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “commercial” dalam konteks Bahasa Inggeris British.', chinese: '文章用“commercial”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'positive', term: 'positive', normalizedTerm: 'positive', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '肯定的, 积极的, 有把握的；正的, 阳性的', chineseExplanation: '肯定的, 积极的, 有把握的；正的, 阳性的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The primary form of an adjective or adverb; denotes a quality without qualification, comparison, or relation to increase or diminution.',
    examples: [{ english: 'The passage uses positive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “positive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“positive”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'recognise', term: 'recognise', normalizedTerm: 'recognise', partOfSpeech: ['verb'],
    chineseShort: '认识, 辩认, 认出, 承认, 认可, 清楚地认识到, 自认, 公认, 赏识, 准许某人发言', chineseExplanation: '认识, 辩认, 认出, 承认, 认可, 清楚地认识到, 自认, 公认, 赏识, 准许某人发言是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Show approval or appreciation of v grant credentials to v detect with the senses v express greetings upon meeting someone v express obligation, thanks, or gratitude for v be fully aware or…',
    examples: [{ english: 'The example shows how to use the verb recognise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recognise” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“recognise”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'opposition', term: 'opposition', normalizedTerm: 'opposition', partOfSpeech: ['noun'],
    chineseShort: '反对, 敌对, 相反, 在野党；对生, 对向, 反抗, 反对症', chineseExplanation: '反对, 敌对, 相反, 在野党；对生, 对向, 反抗, 反对症是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The relation between opposed entities.',
    examples: [{ english: 'The lesson explains the meaning of opposition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “opposition” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“opposition”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'researcher', term: 'researcher', normalizedTerm: 'researcher', partOfSpeech: ['noun'],
    chineseShort: '研究人员', chineseExplanation: '研究人员是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A scientist who devotes himself to doing research.',
    examples: [{ english: 'The lesson explains the meaning of researcher.', malay: 'Ayat ini menunjukkan penggunaan perkataan “researcher” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“researcher”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'contribution', term: 'contribution', normalizedTerm: 'contribution', partOfSpeech: ['noun'],
    chineseShort: '捐助, 捐助之物, 贡献；贡献, 捐款, 补助品', chineseExplanation: '捐助, 捐助之物, 贡献；贡献, 捐款, 补助品是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The part played by a person in bringing about a result.',
    examples: [{ english: 'The lesson explains the meaning of contribution.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contribution” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“contribution”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'vision', term: 'vision', normalizedTerm: 'vision', partOfSpeech: ['noun', 'verb'],
    chineseShort: '视觉, 眼光, 视力, 幻想；梦见, 想象, 显示', chineseExplanation: '视觉, 眼光, 视力, 幻想；梦见, 想象, 显示是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A vivid mental image.',
    examples: [{ english: 'The lesson explains the meaning of vision.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vision” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vision”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'distance', term: 'distance', normalizedTerm: 'distance', partOfSpeech: ['noun', 'verb'],
    chineseShort: '距离, 远方, 遥远；位距', chineseExplanation: '距离, 远方, 遥远；位距是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The property created by the space between two objects or points.',
    examples: [{ english: 'The lesson explains the meaning of distance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“distance”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'apparently', term: 'apparently', normalizedTerm: 'apparently', partOfSpeech: ['adverb'],
    chineseShort: '表面上, 清楚地, 显然地', chineseExplanation: '表面上, 清楚地, 显然地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'From appearances alone.',
    examples: [{ english: 'The speaker used apparently to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “apparently” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“apparently”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'comment', term: 'comment', normalizedTerm: 'comment', partOfSpeech: ['noun', 'verb'],
    chineseShort: '注解, 批评, 评论, 备注；评论, 注解', chineseExplanation: '注解, 批评, 评论, 备注；评论, 注解是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A written explanation or criticism or illustration that is added to a book or other textual material.',
    examples: [{ english: 'The lesson explains the meaning of comment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“comment”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'conclusion', term: 'conclusion', normalizedTerm: 'conclusion', partOfSpeech: ['noun'],
    chineseShort: '结论, 结尾, 推论；缔结, 结论, 推论', chineseExplanation: '结论, 结尾, 推论；缔结, 结论, 推论是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An intuitive assumption.',
    examples: [{ english: 'The lesson explains the meaning of conclusion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conclusion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conclusion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'construction', term: 'construction', normalizedTerm: 'construction', partOfSpeech: ['noun'],
    chineseShort: '建筑, 构造, 建筑物；施工', chineseExplanation: '建筑, 构造, 建筑物；施工是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of constructing something.',
    examples: [{ english: 'The lesson explains the meaning of construction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “construction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“construction”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'intelligence', term: 'intelligence', normalizedTerm: 'intelligence', partOfSpeech: ['noun'],
    chineseShort: '智力, 情报, 信息；智力', chineseExplanation: '智力, 情报, 信息；智力是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The ability to comprehend; to understand and profit from experience.',
    examples: [{ english: 'The lesson explains the meaning of intelligence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intelligence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intelligence”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'launch', term: 'launch', normalizedTerm: 'launch', partOfSpeech: ['noun', 'verb'],
    chineseShort: '下水, 汽艇, 发射；使下水, 发射, 发动', chineseExplanation: '下水, 汽艇, 发射；使下水, 发射, 发动是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A motorboat with an open deck or a half deck.',
    examples: [{ english: 'The lesson explains the meaning of launch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “launch” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“launch”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'appearance', term: 'appearance', normalizedTerm: 'appearance', partOfSpeech: ['noun'],
    chineseShort: '出现, 露面, 外观, 外表, 出版；外观, 版面', chineseExplanation: '出现, 露面, 外观, 外表, 出版；外观, 版面是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Outward or visible aspect of a person or thing.',
    examples: [{ english: 'The lesson explains the meaning of appearance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appearance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“appearance”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'distribution', term: 'distribution', normalizedTerm: 'distribution', partOfSpeech: ['noun'],
    chineseShort: '分配；分布', chineseExplanation: '分配；分布是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(statistics) an arrangement of values of a variable showing their observed or theoretical frequency of occurrence.',
    examples: [{ english: 'The lesson explains the meaning of distribution.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distribution” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“distribution”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'grab', term: 'grab', normalizedTerm: 'grab', partOfSpeech: ['verb', 'noun'],
    chineseShort: '抓握, 掠夺, 强占, 东方沿岸帆船；抓取, 抢去', chineseExplanation: '抓握, 掠夺, 强占, 东方沿岸帆船；抓取, 抢去是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A mechanical device for gripping an object.',
    examples: [{ english: 'The example shows how to use the verb grab.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grab” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“grab”。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'conservative', term: 'conservative', normalizedTerm: 'conservative', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '保守的, 守旧的, 有保存力的；防腐剂', chineseExplanation: '保守的, 守旧的, 有保存力的；防腐剂是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who is reluctant to accept changes and new ideas.',
    examples: [{ english: 'The passage uses conservative to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conservative” dalam konteks Bahasa Inggeris British.', chinese: '文章用“conservative”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'warn', term: 'warn', normalizedTerm: 'warn', partOfSpeech: ['verb', 'noun'],
    chineseShort: '警告, 提醒, 通知；发出警告', chineseExplanation: '警告, 提醒, 通知；发出警告是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Notify of danger, potential harm, or risk.',
    examples: [{ english: 'The example shows how to use the verb warn.', malay: 'Ayat ini menunjukkan penggunaan perkataan “warn” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“warn”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'intention', term: 'intention', normalizedTerm: 'intention', partOfSpeech: ['noun', 'verb'],
    chineseShort: '意图, 目的, 含义；愈合, 意向', chineseExplanation: '意图, 目的, 含义；愈合, 意向是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(usually plural) the goal with respect to a marriage proposal.',
    examples: [{ english: 'The lesson explains the meaning of intention.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intention” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intention”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'nod', term: 'nod', normalizedTerm: 'nod', partOfSpeech: ['noun', 'verb'],
    chineseShort: '点头, 打盹, 晃动；点头, 打盹', chineseExplanation: '点头, 打盹, 晃动；点头, 打盹是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sign of assent or salutation or command.',
    examples: [{ english: 'The lesson explains the meaning of nod.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nod” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“nod”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'enterprise', term: 'enterprise', normalizedTerm: 'enterprise', partOfSpeech: ['noun', 'verb'],
    chineseShort: '企业, 事业心, 进取心, 干事业；企业', chineseExplanation: '企业, 事业心, 进取心, 干事业；企业是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A purposeful or industrious undertaking (especially one that requires effort or boldness).',
    examples: [{ english: 'The lesson explains the meaning of enterprise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enterprise” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“enterprise”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'instrument', term: 'instrument', normalizedTerm: 'instrument', partOfSpeech: ['noun', 'verb'],
    chineseShort: '工具, 手段, 仪器；仪器', chineseExplanation: '工具, 手段, 仪器；仪器是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A device that requires skill for proper use.',
    examples: [{ english: 'The lesson explains the meaning of instrument.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instrument” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“instrument”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'recognition', term: 'recognition', normalizedTerm: 'recognition', partOfSpeech: ['noun'],
    chineseShort: '赞誉, 认得, 识别, 承认, 认可, 认识；认识', chineseExplanation: '赞誉, 认得, 识别, 承认, 认可, 认识；认识是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The state or quality of being recognised or acknowledged.',
    examples: [{ english: 'The lesson explains the meaning of recognition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recognition” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“recognition”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'necessarily', term: 'necessarily', normalizedTerm: 'necessarily', partOfSpeech: ['adverb'],
    chineseShort: '必然地, 必须地, 必要地', chineseExplanation: '必然地, 必须地, 必要地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In an essential manner.',
    examples: [{ english: 'The speaker used necessarily to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “necessarily” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“necessarily”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'analyst', term: 'analyst', normalizedTerm: 'analyst', partOfSpeech: ['noun'],
    chineseShort: '分析者, 精神分析学家；分析员', chineseExplanation: '分析者, 精神分析学家；分析员是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone who is skilled at analysing data.',
    examples: [{ english: 'The lesson explains the meaning of analyst.', malay: 'Ayat ini menunjukkan penggunaan perkataan “analyst” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“analyst”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'appreciate', term: 'appreciate', normalizedTerm: 'appreciate', partOfSpeech: ['verb'],
    chineseShort: '赏识, 鉴别, 为...而感激, 领会, 欣赏；增值, 涨价', chineseExplanation: '赏识, 鉴别, 为...而感激, 领会, 欣赏；增值, 涨价是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Recognise with gratitude; be grateful for.',
    examples: [{ english: 'The example shows how to use the verb appreciate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appreciate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“appreciate”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'approve', term: 'approve', normalizedTerm: 'approve', partOfSpeech: ['verb'],
    chineseShort: '赞同, 核准, 为...提供证据；赞许', chineseExplanation: '赞同, 核准, 为...提供证据；赞许是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Give sanction to.',
    examples: [{ english: 'The example shows how to use the verb approve.', malay: 'Ayat ini menunjukkan penggunaan perkataan “approve” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“approve”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'variation', term: 'variation', normalizedTerm: 'variation', partOfSpeech: ['noun'],
    chineseShort: '变更, 变化, 变种, 变奏；变异, 变易', chineseExplanation: '变更, 变化, 变种, 变奏；变异, 变易是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An instance of change; the rate or magnitude of change.',
    examples: [{ english: 'The lesson explains the meaning of variation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “variation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“variation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'winner', term: 'winner', normalizedTerm: 'winner', partOfSpeech: ['noun'],
    chineseShort: '胜利者, 优胜者；取胜者', chineseExplanation: '胜利者, 优胜者；取胜者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The contestant who wins the contest.',
    examples: [{ english: 'The lesson explains the meaning of winner.', malay: 'Ayat ini menunjukkan penggunaan perkataan “winner” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“winner”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'elect', term: 'elect', normalizedTerm: 'elect', partOfSpeech: ['verb', 'noun'],
    chineseShort: '当选人, 被选的人；被选的, 选出的', chineseExplanation: '当选人, 被选的人；被选的, 选出的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Select by a vote for an office or membership.',
    examples: [{ english: 'The example shows how to use the verb elect.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elect” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“elect”。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'kick', term: 'kick', normalizedTerm: 'kick', partOfSpeech: ['verb', 'noun'],
    chineseShort: '踢, 反冲, 后座力, 凹底；踢, 反抗, 反冲', chineseExplanation: '踢, 反冲, 后座力, 凹底；踢, 反抗, 反冲是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of delivering a blow with the foot.',
    examples: [{ english: 'The example shows how to use the verb kick.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kick” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“kick”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'observation', term: 'observation', normalizedTerm: 'observation', partOfSpeech: ['noun'],
    chineseShort: '观察, 注意, 观测, 观察力；观察', chineseExplanation: '观察, 注意, 观测, 观察力；观察是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of making and recording a measurement.',
    examples: [{ english: 'The lesson explains the meaning of observation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “observation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“observation”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'tony', term: 'tony', normalizedTerm: 'tony', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '高贵的, 时髦的', chineseExplanation: '高贵的, 时髦的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A simpleton.',
    examples: [{ english: 'The lesson explains the meaning of tony.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tony” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tony”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'revolution', term: 'revolution', normalizedTerm: 'revolution', partOfSpeech: ['noun'],
    chineseShort: '革命, 大变革, 旋转, 转数, 循环；回转', chineseExplanation: '革命, 大变革, 旋转, 转数, 循环；回转是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A drastic and far-reaching change in ways of thinking and behaving.',
    examples: [{ english: 'The lesson explains the meaning of revolution.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revolution” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“revolution”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'distinction', term: 'distinction', normalizedTerm: 'distinction', partOfSpeech: ['noun'],
    chineseShort: '区别', chineseExplanation: '区别是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A distinguishing quality.',
    examples: [{ english: 'The lesson explains the meaning of distinction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distinction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“distinction”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'judgment', term: 'judgement', normalizedTerm: 'judgement', partOfSpeech: ['noun'],
    chineseShort: '裁判, 宣告, 判决书；判断', chineseExplanation: '裁判, 宣告, 判决书；判断是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An opinion formed by judging something.',
    examples: [{ english: 'The lesson explains the meaning of judgement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “judgement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“judgement”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'vegetable', term: 'vegetable', normalizedTerm: 'vegetable', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '蔬菜, 植物, 无精打采之人；蔬菜的, 植物的', chineseExplanation: '蔬菜, 植物, 无精打采之人；蔬菜的, 植物的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Edible seeds or roots or stems or leaves or bulbs or tubers or nonsweet fruits of any of numerous herbaceous plant.',
    examples: [{ english: 'The lesson explains the meaning of vegetable.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vegetable” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vegetable”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dish', term: 'dish', normalizedTerm: 'dish', partOfSpeech: ['noun', 'verb'],
    chineseShort: '盘子, 碟, 菜肴；皿, 碟', chineseExplanation: '盘子, 碟, 菜肴；皿, 碟是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A piece of dishware normally used as a container for holding or serving food.',
    examples: [{ english: 'The lesson explains the meaning of dish.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dish” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dish”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'oppose', term: 'oppose', normalizedTerm: 'oppose', partOfSpeech: ['verb'],
    chineseShort: '反对, 以...对抗, 抗争；反对', chineseExplanation: '反对, 以...对抗, 抗争；反对是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be against; express opposition to.',
    examples: [{ english: 'The example shows how to use the verb oppose.', malay: 'Ayat ini menunjukkan penggunaan perkataan “oppose” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“oppose”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'convention', term: 'convention', normalizedTerm: 'convention', partOfSpeech: ['noun'],
    chineseShort: '大会, 协定, 惯例, 约定；约定', chineseExplanation: '大会, 协定, 惯例, 约定；约定是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A large formal assembly.',
    examples: [{ english: 'The lesson explains the meaning of convention.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convention” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“convention”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'knock', term: 'knock', normalizedTerm: 'knock', partOfSpeech: ['verb', 'noun'],
    chineseShort: '敲, 敲打, 敲门；敲击, 互撞, 攻击', chineseExplanation: '敲, 敲打, 敲门；敲击, 互撞, 攻击是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The sound of knocking (as on a door or in an engine or bearing).',
    examples: [{ english: 'The example shows how to use the verb knock.', malay: 'Ayat ini menunjukkan penggunaan perkataan “knock” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“knock”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'resolution', term: 'resolution', normalizedTerm: 'resolution', partOfSpeech: ['noun'],
    chineseShort: '解析, 决心, 坚定, 决定, 决议, 消除, 解答, 分解；图形分辨率', chineseExplanation: '解析, 决心, 坚定, 决定, 决议, 消除, 解答, 分解；图形分辨率是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A formal expression by a meeting; agreed to by a vote.',
    examples: [{ english: 'The lesson explains the meaning of resolution.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resolution” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“resolution”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'originally', term: 'originally', normalizedTerm: 'originally', partOfSpeech: ['adverb'],
    chineseShort: '本来, 原来, 最初, 就起源而论, 独创地', chineseExplanation: '本来, 原来, 最初, 就起源而论, 独创地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In an original manner.',
    examples: [{ english: 'The speaker used originally to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “originally” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“originally”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'tenant', term: 'tenant', normalizedTerm: 'tenant', partOfSpeech: ['noun', 'verb'],
    chineseShort: '承租人, 房客, 居住者；租借', chineseExplanation: '承租人, 房客, 居住者；租借是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone who pays rent to use land or a building or a car that is owned by someone else.',
    examples: [{ english: 'The lesson explains the meaning of tenant.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tenant” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tenant”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'formation', term: 'formation', normalizedTerm: 'formation', partOfSpeech: ['noun'],
    chineseShort: '形成, 构造, 编队；形成, 结构', chineseExplanation: '形成, 构造, 编队；形成, 结构是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An arrangement of people or things acting as a unit.',
    examples: [{ english: 'The lesson explains the meaning of formation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “formation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“formation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'quantity', term: 'quantity', normalizedTerm: 'quantity', partOfSpeech: ['noun'],
    chineseShort: '量, 数量, 总量；数量', chineseExplanation: '量, 数量, 总量；数量是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An adequate or large amount.',
    examples: [{ english: 'The lesson explains the meaning of quantity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quantity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quantity”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'wrap', term: 'wrap', normalizedTerm: 'wrap', partOfSpeech: ['noun', 'verb'],
    chineseShort: '外套, 围巾, 包裹物, 限制, 约束, 秘密, 换行；包装, 卷, 缠绕, 包, 裹, 覆盖, 遮蔽, 隐藏, 掩护', chineseExplanation: '外套, 围巾, 包裹物, 限制, 约束, 秘密, 换行；包装, 卷, 缠绕, 包, 裹, 覆盖, 遮蔽, 隐藏, 掩护是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cloak that is folded or wrapped around a person.',
    examples: [{ english: 'The lesson explains the meaning of wrap.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wrap” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wrap”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'journalist', term: 'journalist', normalizedTerm: 'journalist', partOfSpeech: ['noun'],
    chineseShort: '新闻记者, 从事新闻杂志业的人', chineseExplanation: '新闻记者, 从事新闻杂志业的人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A writer for newspapers and magazines.',
    examples: [{ english: 'The lesson explains the meaning of journalist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “journalist” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“journalist”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'emotion', term: 'emotion', normalizedTerm: 'emotion', partOfSpeech: ['noun'],
    chineseShort: '情绪, 激动, 强烈的情感；情绪, 情感', chineseExplanation: '情绪, 激动, 强烈的情感；情绪, 情感是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any strong feeling.',
    examples: [{ english: 'The lesson explains the meaning of emotion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emotion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“emotion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'analyse', term: 'analyse', normalizedTerm: 'analyse', partOfSpeech: ['verb'],
    chineseShort: '分析, 细察, 分解；分析', chineseExplanation: '分析, 细察, 分解；分析是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Consider in detail and subject to an analysis in order to discover essential features or meaning v break down into components or essential features v make a mathematical, chemical, or grammatical…',
    examples: [{ english: 'The example shows how to use the verb analyse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “analyse” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“analyse”。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'portion', term: 'portion', normalizedTerm: 'portion', partOfSpeech: ['noun', 'verb'],
    chineseShort: '部分, 一份, 命运, 嫁妆；分配, 给...嫁妆', chineseExplanation: '部分, 一份, 命运, 嫁妆；分配, 给...嫁妆是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something determined in relation to something that includes it n something less than the whole of a human artifact n the allotment of some amount by dividing something n assets belonging to or due…',
    examples: [{ english: 'The lesson explains the meaning of portion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “portion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“portion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'opponent', term: 'opponent', normalizedTerm: 'opponent', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '对手, 敌手, 反对者；敌对的, 反对的, 对面的', chineseExplanation: '对手, 敌手, 反对者；敌对的, 反对的, 对面的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Characterised by active hostility.',
    examples: [{ english: 'The lesson explains the meaning of opponent.', malay: 'Ayat ini menunjukkan penggunaan perkataan “opponent” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“opponent”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'glance', term: 'glance', normalizedTerm: 'glance', partOfSpeech: ['noun', 'verb'],
    chineseShort: '一瞥, 闪光, 掠过, 辉矿类；扫视, 闪光, 掠过, 提到, 略说', chineseExplanation: '一瞥, 闪光, 掠过, 辉矿类；扫视, 闪光, 掠过, 提到, 略说是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A quick look.',
    examples: [{ english: 'The lesson explains the meaning of glance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“glance”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'reckon', term: 'reckon', normalizedTerm: 'reckon', partOfSpeech: ['verb', 'noun'],
    chineseShort: '计算, 总计, 估计, 认为, 猜想；数, 计算, 估计, 依赖, 料想', chineseExplanation: '计算, 总计, 估计, 认为, 猜想；数, 计算, 估计, 依赖, 料想是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Take account of.',
    examples: [{ english: 'The example shows how to use the verb reckon.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reckon” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“reckon”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'resistance', term: 'resistance', normalizedTerm: 'resistance', partOfSpeech: ['noun'],
    chineseShort: '抵抗力, 反抗, 耐力, 阻力, 电阻；抵抗', chineseExplanation: '抵抗力, 反抗, 耐力, 阻力, 电阻；抵抗是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The action of opposing something that you disapprove or disagree with.',
    examples: [{ english: 'The lesson explains the meaning of resistance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resistance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“resistance”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'pose', term: 'pose', normalizedTerm: 'pose', partOfSpeech: ['verb', 'noun'],
    chineseShort: '姿势, 姿态, 装模作样, 伪装；摆姿势, 装模作样, 假装', chineseExplanation: '姿势, 姿态, 装模作样, 伪装；摆姿势, 装模作样, 假装是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A posture assumed by models for photographic or artistic purposes.',
    examples: [{ english: 'The example shows how to use the verb pose.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pose” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“pose”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'reputation', term: 'reputation', normalizedTerm: 'reputation', partOfSpeech: ['noun'],
    chineseShort: '名誉, 名声, 声望；名声, 名誉, 公认证据', chineseExplanation: '名誉, 名声, 声望；名声, 名誉, 公认证据是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Notoriety for some particular characteristic.',
    examples: [{ english: 'The lesson explains the meaning of reputation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reputation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reputation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'relative', term: 'relative', normalizedTerm: 'relative', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '亲戚, 关系词；有关系的, 相对的, 比较的', chineseExplanation: '亲戚, 关系词；有关系的, 相对的, 比较的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person related by blood or marriage.',
    examples: [{ english: 'The passage uses relative to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relative” dalam konteks Bahasa Inggeris British.', chinese: '文章用“relative”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'distinguish', term: 'distinguish', normalizedTerm: 'distinguish', partOfSpeech: ['verb'],
    chineseShort: '区别, 辨别', chineseExplanation: '区别, 辨别是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Mark as different.',
    examples: [{ english: 'The example shows how to use the verb distinguish.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distinguish” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“distinguish”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'plaintiff', term: 'plaintiff', normalizedTerm: 'plaintiff', partOfSpeech: ['noun'],
    chineseShort: '原告, 起诉人；原告, 原起诉人', chineseExplanation: '原告, 起诉人；原告, 原起诉人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who brings an action in a court of law.',
    examples: [{ english: 'The lesson explains the meaning of plaintiff.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plaintiff” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plaintiff”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'essentially', term: 'essentially', normalizedTerm: 'essentially', partOfSpeech: ['adverb'],
    chineseShort: '本质上, 本来', chineseExplanation: '本质上, 本来是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In essence; at bottom or by one\'s (or its) very nature.',
    examples: [{ english: 'The speaker used essentially to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “essentially” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“essentially”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'sauce', term: 'sauce', normalizedTerm: 'sauce', partOfSpeech: ['noun', 'verb'],
    chineseShort: '酱油, 调味汁, 酱；给...调味, 使增加趣味', chineseExplanation: '酱油, 调味汁, 酱；给...调味, 使增加趣味是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Flavorful relish or dressing or topping served as an accompaniment to food.',
    examples: [{ english: 'The lesson explains the meaning of sauce.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sauce” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“sauce”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'electricity', term: 'electricity', normalizedTerm: 'electricity', partOfSpeech: ['noun'],
    chineseShort: '电, 电流, 电学, 热情, 电力供应；电学', chineseExplanation: '电, 电流, 电学, 热情, 电力供应；电学是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A physical phenomenon associated with stationary or moving electrons and protons.',
    examples: [{ english: 'The lesson explains the meaning of electricity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “electricity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“electricity”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'inspire', term: 'inspire', normalizedTerm: 'inspire', partOfSpeech: ['verb'],
    chineseShort: '使感动, 激发, 启示, 吸入, 鼓舞, 产生, 使生灵感；吸入, 赋予灵感', chineseExplanation: '使感动, 激发, 启示, 吸入, 鼓舞, 产生, 使生灵感；吸入, 赋予灵感是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Heighten or intensify.',
    examples: [{ english: 'The example shows how to use the verb inspire.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inspire” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“inspire”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'retire', term: 'retire', normalizedTerm: 'retire', partOfSpeech: ['verb', 'noun'],
    chineseShort: '隐居；引退, 退役, 退休, 退去, 撤退, 退却', chineseExplanation: '隐居；引退, 退役, 退休, 退去, 撤退, 退却是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Go into retirement; stop performing one\'s work or withdraw from one\'s position.',
    examples: [{ english: 'The example shows how to use the verb retire.', malay: 'Ayat ini menunjukkan penggunaan perkataan “retire” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“retire”。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'competitive', term: 'competitive', normalizedTerm: 'competitive', partOfSpeech: ['adjective'],
    chineseShort: '竞争的；竞争的', chineseExplanation: '竞争的；竞争的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Involving competition or competitiveness.',
    examples: [{ english: 'The passage uses competitive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “competitive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“competitive”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'laboratory', term: 'laboratory', normalizedTerm: 'laboratory', partOfSpeech: ['noun'],
    chineseShort: '实验室, 研究室, 化工厂；实验室, 检验室, 化验室', chineseExplanation: '实验室, 研究室, 化工厂；实验室, 检验室, 化验室是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A workplace for the conduct of scientific research n a region resembling a laboratory inasmuch as it offers opportunities for observation and practice and experimentation.',
    examples: [{ english: 'The lesson explains the meaning of laboratory.', malay: 'Ayat ini menunjukkan penggunaan perkataan “laboratory” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“laboratory”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'possession', term: 'possession', normalizedTerm: 'possession', partOfSpeech: ['noun', 'verb'],
    chineseShort: '拥有, 占有, 所有, 财产, 领土, 领地, 自制, 着迷；占有, 持有', chineseExplanation: '拥有, 占有, 所有, 财产, 领土, 领地, 自制, 着迷；占有, 持有是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of having and controlling property.',
    examples: [{ english: 'The lesson explains the meaning of possession.', malay: 'Ayat ini menunjukkan penggunaan perkataan “possession” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“possession”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'bean', term: 'bean', normalizedTerm: 'bean', partOfSpeech: ['noun', 'verb'],
    chineseShort: '豆子；油嘴', chineseExplanation: '豆子；油嘴是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any of various edible seeds of plants of the family Leguminosae used for food.',
    examples: [{ english: 'The lesson explains the meaning of bean.', malay: 'Ayat ini menunjukkan penggunaan perkataan “bean” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“bean”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'veteran', term: 'veteran', normalizedTerm: 'veteran', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '老手, 退伍军人, 老兵, 老树；老兵的, 老练的, 经验丰富的', chineseExplanation: '老手, 退伍军人, 老兵, 老树；老兵的, 老练的, 经验丰富的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A serviceman who has seen considerable active service.',
    examples: [{ english: 'The lesson explains the meaning of veteran.', malay: 'Ayat ini menunjukkan penggunaan perkataan “veteran” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“veteran”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'tourist', term: 'tourist', normalizedTerm: 'tourist', partOfSpeech: ['noun', 'verb'],
    chineseShort: '观光客, 旅行者；旅游的', chineseExplanation: '观光客, 旅行者；旅游的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone who travels for pleasure.',
    examples: [{ english: 'The lesson explains the meaning of tourist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tourist” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tourist”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'electronic', term: 'electronic', normalizedTerm: 'electronic', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '电子的；电子工业协会接口', chineseExplanation: '电子的；电子工业协会接口是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Of or relating to electronics; concerned with or using devices that operate on principles governing the behaviour of electrons.',
    examples: [{ english: 'The passage uses electronic to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “electronic” dalam konteks Bahasa Inggeris British.', chinese: '文章用“electronic”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'confront', term: 'confront', normalizedTerm: 'confront', partOfSpeech: ['verb'],
    chineseShort: '使面对, 对抗, 遭遇, 使对质, 比较；对证, 使对质, 比较', chineseExplanation: '使面对, 对抗, 遭遇, 使对质, 比较；对证, 使对质, 比较是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Oppose, as in hostility or a competition.',
    examples: [{ english: 'The example shows how to use the verb confront.', malay: 'Ayat ini menunjukkan penggunaan perkataan “confront” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“confront”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'toy', term: 'toy', normalizedTerm: 'toy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '玩具, 小玩艺儿, 小型的东西, 消遣；供玩耍的, 作为玩具的', chineseExplanation: '玩具, 小玩艺儿, 小型的东西, 消遣；供玩耍的, 作为玩具的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A nonfunctional replica of something else (frequently used as a modifier).',
    examples: [{ english: 'The lesson explains the meaning of toy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toy”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'remarkable', term: 'remarkable', normalizedTerm: 'remarkable', partOfSpeech: ['adjective'],
    chineseShort: '不平常的, 值得注意的, 显著的', chineseExplanation: '不平常的, 值得注意的, 显著的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Unusual or striking.',
    examples: [{ english: 'The passage uses remarkable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “remarkable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“remarkable”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'landlord', term: 'landlord', normalizedTerm: 'landlord', partOfSpeech: ['noun', 'verb'],
    chineseShort: '房东, 地主；业主, 地主, 房东', chineseExplanation: '房东, 地主；业主, 地主, 房东是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A landowner who leases to others.',
    examples: [{ english: 'The lesson explains the meaning of landlord.', malay: 'Ayat ini menunjukkan penggunaan perkataan “landlord” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“landlord”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lad', term: 'lad', normalizedTerm: 'lad', partOfSpeech: ['noun'],
    chineseShort: '青年, 家伙, 少年, 情人', chineseExplanation: '青年, 家伙, 少年, 情人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A boy or man n a male child (a familiar term of address to a boy).',
    examples: [{ english: 'The lesson explains the meaning of lad.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lad” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lad”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dig', term: 'dig', normalizedTerm: 'dig', partOfSpeech: ['verb', 'noun'],
    chineseShort: '挖, 翻土, 发掘；挖掘', chineseExplanation: '挖, 翻土, 发掘；挖掘是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The site of an archeological exploration.',
    examples: [{ english: 'The example shows how to use the verb dig.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dig” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“dig”。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'entrance', term: 'entrance', normalizedTerm: 'entrance', partOfSpeech: ['noun', 'verb'],
    chineseShort: '入口, 进入点, 入场, 入学, 进入, 开始, 就任；使出神, 使入迷', chineseExplanation: '入口, 进入点, 入场, 入学, 进入, 开始, 就任；使出神, 使入迷是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that provides access (to get in or get out).',
    examples: [{ english: 'The lesson explains the meaning of entrance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “entrance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“entrance”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'consultant', term: 'consultant', normalizedTerm: 'consultant', partOfSpeech: ['noun'],
    chineseShort: '顾问, 征询意见者；顾问医师', chineseExplanation: '顾问, 征询意见者；顾问医师是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An expert who gives advice.',
    examples: [{ english: 'The lesson explains the meaning of consultant.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consultant” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“consultant”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'grandmother', term: 'grandmother', normalizedTerm: 'grandmother', partOfSpeech: ['noun'],
    chineseShort: '祖母, 女祖先', chineseExplanation: '祖母, 女祖先是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The mother of your father or mother.',
    examples: [{ english: 'The lesson explains the meaning of grandmother.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grandmother” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grandmother”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'constantly', term: 'constantly', normalizedTerm: 'constantly', partOfSpeech: ['adverb'],
    chineseShort: '不变地, 不断地, 时常地', chineseExplanation: '不变地, 不断地, 时常地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Without variation or change, in every case.',
    examples: [{ english: 'The speaker used constantly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constantly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“constantly”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'comprise', term: 'comprise', normalizedTerm: 'comprise', partOfSpeech: ['verb'],
    chineseShort: '包含, 构成', chineseExplanation: '包含, 构成是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be composed of v include or contain; have as a component v form or compose.',
    examples: [{ english: 'The example shows how to use the verb comprise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comprise” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“comprise”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'elementary', term: 'elementary', normalizedTerm: 'elementary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '初步的, 基本的；元素的, 基础的, 初级的', chineseExplanation: '初步的, 基本的；元素的, 基础的, 初级的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Easy and not involved or complicated.',
    examples: [{ english: 'The passage uses elementary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elementary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“elementary”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'concert', term: 'concert', normalizedTerm: 'concert', partOfSpeech: ['noun', 'verb'],
    chineseShort: '音乐会, 和声, 一致；协力, 协调', chineseExplanation: '音乐会, 和声, 一致；协力, 协调是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A performance of music by players or singers not involving theatrical staging.',
    examples: [{ english: 'The lesson explains the meaning of concert.', malay: 'Ayat ini menunjukkan penggunaan perkataan “concert” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“concert”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'nov', term: 'nov', normalizedTerm: 'nov', partOfSpeech: ['noun'],
    chineseShort: 'abbr. 十一月（November）', chineseExplanation: 'abbr. 十一月（November）是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The month following October and preceding December.',
    examples: [{ english: 'The lesson explains the meaning of nov.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nov” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“nov”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'relax', term: 'relax', normalizedTerm: 'relax', partOfSpeech: ['verb'],
    chineseShort: '放松, 松懈, 松弛, 变从容, 休息, 休养；使松弛, 缓和, 使松懈, 使休息', chineseExplanation: '放松, 松懈, 松弛, 变从容, 休息, 休养；使松弛, 缓和, 使松懈, 使休息是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Become less tense, rest, or take one\'s ease.',
    examples: [{ english: 'The example shows how to use the verb relax.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relax” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“relax”。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'respondent', term: 'respondent', normalizedTerm: 'respondent', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '回答的, 应答的, 反射的；应答者, 被告', chineseExplanation: '回答的, 应答的, 反射的；应答者, 被告是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The codefendant (especially in a divorce proceeding) who is accused of adultery with the corespondent.',
    examples: [{ english: 'The lesson explains the meaning of respondent.', malay: 'Ayat ini menunjukkan penggunaan perkataan “respondent” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“respondent”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'resign', term: 'resign', normalizedTerm: 'resign', partOfSpeech: ['verb'],
    chineseShort: '辞职, 放弃, 使顺从；辞职, 屈从', chineseExplanation: '辞职, 放弃, 使顺从；辞职, 屈从是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Accept as inevitable.',
    examples: [{ english: 'The example shows how to use the verb resign.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resign” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“resign”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'disability', term: 'disability', normalizedTerm: 'disability', partOfSpeech: ['noun'],
    chineseShort: '无力, 无能, 残疾；劳动能力丧失, 病废', chineseExplanation: '无力, 无能, 残疾；劳动能力丧失, 病废是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The condition of being unable to perform as a consequence of physical or mental unfitness.',
    examples: [{ english: 'The lesson explains the meaning of disability.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disability” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disability”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'refugee', term: 'refugee', normalizedTerm: 'refugee', partOfSpeech: ['noun', 'verb'],
    chineseShort: '难民, 流亡者；避难者, 流亡者, 难民', chineseExplanation: '难民, 流亡者；避难者, 流亡者, 难民是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An exile who flees for safety.',
    examples: [{ english: 'The lesson explains the meaning of refugee.', malay: 'Ayat ini menunjukkan penggunaan perkataan “refugee” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“refugee”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'killer', term: 'killer', normalizedTerm: 'killer', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '杀人者, 屠杀者, 猛兽, 致死, 杀手, 止痛药, 限制器, 瞄准器；删除程序', chineseExplanation: '杀人者, 屠杀者, 猛兽, 致死, 杀手, 止痛药, 限制器, 瞄准器；删除程序是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone who causes the death of a person or animal.',
    examples: [{ english: 'The lesson explains the meaning of killer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “killer” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“killer”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'respectively', term: 'respectively', normalizedTerm: 'respectively', partOfSpeech: ['adverb'],
    chineseShort: '各自地, 独自地, 个别地, 分别地', chineseExplanation: '各自地, 独自地, 个别地, 分别地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In the order given.',
    examples: [{ english: 'The speaker used respectively to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “respectively” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“respectively”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'vacation', term: 'vacation', normalizedTerm: 'vacation', partOfSpeech: ['noun', 'verb'],
    chineseShort: '假期, 休假；假期, 停审期, 休庭期', chineseExplanation: '假期, 休假；假期, 停审期, 休庭期是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Leisure time away from work devoted to rest or pleasure.',
    examples: [{ english: 'The lesson explains the meaning of vacation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vacation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vacation”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'fence', term: 'fence', normalizedTerm: 'fence', partOfSpeech: ['noun', 'verb'],
    chineseShort: '围墙, 栅栏, 买卖赃物的人, 剑术；用篱笆围住, 练习剑术, 防护', chineseExplanation: '围墙, 栅栏, 买卖赃物的人, 剑术；用篱笆围住, 练习剑术, 防护是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A barrier that serves to enclose an area.',
    examples: [{ english: 'The lesson explains the meaning of fence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fence”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'indication', term: 'indication', normalizedTerm: 'indication', partOfSpeech: ['noun'],
    chineseShort: '指示, 象征, 暗示；指示, 指征, 适应征', chineseExplanation: '指示, 象征, 暗示；指示, 指征, 适应征是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that serves to indicate or suggest.',
    examples: [{ english: 'The lesson explains the meaning of indication.', malay: 'Ayat ini menunjukkan penggunaan perkataan “indication” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“indication”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'inevitably', term: 'inevitably', normalizedTerm: 'inevitably', partOfSpeech: ['adverb'],
    chineseShort: '不可避免地', chineseExplanation: '不可避免地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In such a manner as could not be otherwise.',
    examples: [{ english: 'The speaker used inevitably to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inevitably” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“inevitably”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'measurement', term: 'measurement', normalizedTerm: 'measurement', partOfSpeech: ['noun'],
    chineseShort: '尺寸, 度量, 度量单位；度量, 度量单位', chineseExplanation: '尺寸, 度量, 度量单位；度量, 度量单位是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act or process of assigning numbers to phenomena according to a rule.',
    examples: [{ english: 'The lesson explains the meaning of measurement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “measurement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“measurement”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'enthusiasm', term: 'enthusiasm', normalizedTerm: 'enthusiasm', partOfSpeech: ['noun'],
    chineseShort: '巨大的热情, 热心', chineseExplanation: '巨大的热情, 热心是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A feeling of excitement.',
    examples: [{ english: 'The lesson explains the meaning of enthusiasm.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enthusiasm” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“enthusiasm”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'disagree', term: 'disagree', normalizedTerm: 'disagree', partOfSpeech: ['verb'],
    chineseShort: '不一致, 不适宜；抵触, 不同意, 争执', chineseExplanation: '不一致, 不适宜；抵触, 不同意, 争执是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be of different opinions.',
    examples: [{ english: 'The example shows how to use the verb disagree.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disagree” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“disagree”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'satisfaction', term: 'satisfaction', normalizedTerm: 'satisfaction', partOfSpeech: ['noun'],
    chineseShort: '满足, 满意, 快事, 赔偿, 赎罪, 报仇的机会；偿还, 赎回', chineseExplanation: '满足, 满意, 快事, 赔偿, 赎罪, 报仇的机会；偿还, 赎回是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The contentment one feels when one has fulfilled a desire, need, or expectation.',
    examples: [{ english: 'The lesson explains the meaning of satisfaction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “satisfaction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“satisfaction”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'qualify', term: 'qualify', normalizedTerm: 'qualify', partOfSpeech: ['verb', 'noun'],
    chineseShort: '取得资格, 有资格；使有资格, 使合格, 限定, 限制, 准予', chineseExplanation: '取得资格, 有资格；使有资格, 使合格, 限定, 限制, 准予是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Prove capable or fit; meet requirements.',
    examples: [{ english: 'The example shows how to use the verb qualify.', malay: 'Ayat ini menunjukkan penggunaan perkataan “qualify” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“qualify”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'confusion', term: 'confusion', normalizedTerm: 'confusion', partOfSpeech: ['noun'],
    chineseShort: '混乱, 混淆, 无秩序；含混', chineseExplanation: '混乱, 混淆, 无秩序；含混是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Disorder resulting from a failure to behave predictably.',
    examples: [{ english: 'The lesson explains the meaning of confusion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “confusion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“confusion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'wipe', term: 'wipe', normalizedTerm: 'wipe', partOfSpeech: ['verb', 'noun'],
    chineseShort: '擦拭, 用力打, 凸轮；擦, 揩, 消灭, 涂上, 拭去', chineseExplanation: '擦拭, 用力打, 凸轮；擦, 揩, 消灭, 涂上, 拭去是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Rub with a circular motion.',
    examples: [{ english: 'The example shows how to use the verb wipe.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wipe” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“wipe”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'ken', term: 'ken', normalizedTerm: 'ken', partOfSpeech: ['noun', 'verb'],
    chineseShort: '视野范围, 知识范围, 见地', chineseExplanation: '视野范围, 知识范围, 见地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Range of what one can know or understand n the range of vision.',
    examples: [{ english: 'The lesson explains the meaning of ken.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ken” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ken”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'considerably', term: 'considerably', normalizedTerm: 'considerably', partOfSpeech: ['adverb'],
    chineseShort: '非常地, 很, 颇', chineseExplanation: '非常地, 很, 颇是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To a great extent or degree.',
    examples: [{ english: 'The speaker used considerably to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “considerably” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“considerably”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'replacement', term: 'replacement', normalizedTerm: 'replacement', partOfSpeech: ['noun'],
    chineseShort: '归还, 更换, 代替者；复位, 置换', chineseExplanation: '归还, 更换, 代替者；复位, 置换是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of furnishing an equivalent person or thing in the place of another.',
    examples: [{ english: 'The lesson explains the meaning of replacement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “replacement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“replacement”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'reflection', term: 'reflection', normalizedTerm: 'reflection', partOfSpeech: ['noun'],
    chineseShort: '反映, 沉思, 映像, 想法, 责难；反射', chineseExplanation: '反映, 沉思, 映像, 想法, 责难；反射是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The phenomenon of a propagating wave (light or sound) being thrown back from a surface.',
    examples: [{ english: 'The lesson explains the meaning of reflection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reflection” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reflection”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'salad', term: 'salad', normalizedTerm: 'salad', partOfSpeech: ['noun'],
    chineseShort: '色拉', chineseExplanation: '色拉是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Food mixtures either arranged on a plate or tossed and served with a moist dressing; usually consisting of or including greens.',
    examples: [{ english: 'The lesson explains the meaning of salad.', malay: 'Ayat ini menunjukkan penggunaan perkataan “salad” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“salad”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unity', term: 'unity', normalizedTerm: 'unity', partOfSpeech: ['noun'],
    chineseShort: '一致, 联合, 单一, 个体；统一', chineseExplanation: '一致, 联合, 单一, 个体；统一是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An undivided or unbroken completeness or totality with nothing wanting n the smallest whole number or a numeral representing this number n the quality of being united into one.',
    examples: [{ english: 'The lesson explains the meaning of unity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“unity”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'founder', term: 'founder', normalizedTerm: 'founder', partOfSpeech: ['noun', 'verb'],
    chineseShort: '创立者, 建立者；使沉没, 使摔倒, 弄跛, 浸水, 破坏', chineseExplanation: '创立者, 建立者；使沉没, 使摔倒, 弄跛, 浸水, 破坏是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who founds or establishes some institution.',
    examples: [{ english: 'The lesson explains the meaning of founder.', malay: 'Ayat ini menunjukkan penggunaan perkataan “founder” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“founder”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'conservation', term: 'conservation', normalizedTerm: 'conservation', partOfSpeech: ['noun'],
    chineseShort: '保护, 保存；保存', chineseExplanation: '保护, 保存；保存是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An occurrence of improvement by virtue of preventing loss or injury or other change.',
    examples: [{ english: 'The lesson explains the meaning of conservation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conservation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conservation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'announcement', term: 'announcement', normalizedTerm: 'announcement', partOfSpeech: ['noun'],
    chineseShort: '公告, 发表, 告知；通告, 布告, 公告', chineseExplanation: '公告, 发表, 告知；通告, 布告, 公告是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A formal public statement.',
    examples: [{ english: 'The lesson explains the meaning of announcement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “announcement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“announcement”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'potentially', term: 'potentially', normalizedTerm: 'potentially', partOfSpeech: ['adverb'],
    chineseShort: '可能地, 潜在地', chineseExplanation: '可能地, 潜在地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'With a possibility of becoming actual.',
    examples: [{ english: 'The speaker used potentially to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “potentially” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“potentially”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'intellectual', term: 'intellectual', normalizedTerm: 'intellectual', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '有知识者, 知识分子, 凭理智做事者；智力的, 用脑力的, 聪明的', chineseExplanation: '有知识者, 知识分子, 凭理智做事者；智力的, 用脑力的, 聪明的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who uses the mind creatively.',
    examples: [{ english: 'The passage uses intellectual to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intellectual” dalam konteks Bahasa Inggeris British.', chinese: '文章用“intellectual”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'constituency', term: 'constituency', normalizedTerm: 'constituency', partOfSpeech: ['noun'],
    chineseShort: '选民, 顾客, 读者；选区, 全体选民, 选区内的选民', chineseExplanation: '选民, 顾客, 读者；选区, 全体选民, 选区内的选民是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The body of voters who elect a representative for their area.',
    examples: [{ english: 'The lesson explains the meaning of constituency.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constituency” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“constituency”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'helmet', term: 'helmet', normalizedTerm: 'helmet', partOfSpeech: ['noun'],
    chineseShort: '头盔；安全帽', chineseExplanation: '保护头部免受撞击或伤害的坚硬帽子。', englishDefinition: 'A hard protective covering worn on the head.',
    examples: [{ english: 'Always wear a helmet when riding a bicycle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “helmet” dalam konteks Bahasa Inggeris British.', chinese: '骑自行车时一定要戴头盔。' }], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'reception', term: 'reception', normalizedTerm: 'reception', partOfSpeech: ['noun'],
    chineseShort: '接待, 接受, 招待会；接受, 感受', chineseExplanation: '接待, 接受, 招待会；接受, 感受是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The manner in which something is greeted.',
    examples: [{ english: 'The lesson explains the meaning of reception.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reception” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reception”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'objection', term: 'objection', normalizedTerm: 'objection', partOfSpeech: ['noun'],
    chineseShort: '异议, 反对, 不喜欢, 缺点, 缺陷, 妨碍, 拒绝之理由；异议, 反对, 抗议', chineseExplanation: '异议, 反对, 不喜欢, 缺点, 缺陷, 妨碍, 拒绝之理由；异议, 反对, 抗议是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The speech act of objecting.',
    examples: [{ english: 'The lesson explains the meaning of objection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “objection” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“objection”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'grandfather', term: 'grandfather', normalizedTerm: 'grandfather', partOfSpeech: ['noun', 'verb'],
    chineseShort: '祖父, 始祖；原始资料组', chineseExplanation: '祖父, 始祖；原始资料组是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The father of your father or mother.',
    examples: [{ english: 'The lesson explains the meaning of grandfather.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grandfather” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grandfather”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'consequently', term: 'consequently', normalizedTerm: 'consequently', partOfSpeech: ['adverb'],
    chineseShort: '所以', chineseExplanation: '所以是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(sentence connectors) because of the reason given.',
    examples: [{ english: 'The speaker used consequently to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consequently” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“consequently”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'incredible', term: 'incredible', normalizedTerm: 'incredible', partOfSpeech: ['adjective'],
    chineseShort: '难以置信的', chineseExplanation: '难以置信的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Beyond belief or understanding.',
    examples: [{ english: 'The passage uses incredible to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incredible” dalam konteks Bahasa Inggeris British.', chinese: '文章用“incredible”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'wander', term: 'wander', normalizedTerm: 'wander', partOfSpeech: ['verb', 'noun'],
    chineseShort: '游荡, 漫步, 徘徊, 迷路, 离题, 蜿蜒；在...漫游', chineseExplanation: '游荡, 漫步, 徘徊, 迷路, 离题, 蜿蜒；在...漫游是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Go via an indirect route or at no set pace.',
    examples: [{ english: 'The example shows how to use the verb wander.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wander” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“wander”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'porch', term: 'porch', normalizedTerm: 'porch', partOfSpeech: ['noun'],
    chineseShort: '门廊, 走廊', chineseExplanation: '门廊, 走廊是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A structure attached to the exterior of a building often forming a covered entrance.',
    examples: [{ english: 'The lesson explains the meaning of porch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “porch” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“porch”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'reservation', term: 'reservation', normalizedTerm: 'reservation', partOfSpeech: ['noun'],
    chineseShort: '保留, 预定, 保留品, 保留地；预定, 预约, 权益保留', chineseExplanation: '保留, 预定, 保留品, 保留地；预定, 预约, 权益保留是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A district that is reserved for particular purpose.',
    examples: [{ english: 'The lesson explains the meaning of reservation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reservation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reservation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dividend', term: 'dividend', normalizedTerm: 'dividend', partOfSpeech: ['noun', 'verb'],
    chineseShort: '被除数, 股利；被除数', chineseExplanation: '被除数, 股利；被除数是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'That part of the earnings of a corporation that is distributed to its shareholders; usually paid quarterly.',
    examples: [{ english: 'The lesson explains the meaning of dividend.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dividend” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dividend”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'resemble', term: 'resemble', normalizedTerm: 'resemble', partOfSpeech: ['verb'],
    chineseShort: '相似, 类似', chineseExplanation: '相似, 类似是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Appear like; be similar or bear a likeness to.',
    examples: [{ english: 'The example shows how to use the verb resemble.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resemble” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“resemble”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'parcel', term: 'parcel', normalizedTerm: 'parcel', partOfSpeech: ['noun'],
    chineseShort: '包裹；邮包', chineseExplanation: '包好并通过邮寄或配送方式送出的物品。', englishDefinition: 'An item wrapped and sent by post or delivery service.',
    examples: [{ english: 'A parcel arrived for you this morning.', malay: 'Ayat ini menunjukkan penggunaan perkataan “parcel” dalam konteks Bahasa Inggeris British.', chinese: '今天早上有一个寄给你的包裹到了。' }], level: 2, cefr: 'B1', categories: ['Daily English', 'Business'],
  },
  {
    id: 'handful', term: 'handful', normalizedTerm: 'handful', partOfSpeech: ['noun'],
    chineseShort: '少数, 一把, 棘手事', chineseExplanation: '少数, 一把, 棘手事是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small number or amount.',
    examples: [{ english: 'The lesson explains the meaning of handful.', malay: 'Ayat ini menunjukkan penggunaan perkataan “handful” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“handful”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'undoubtedly', term: 'undoubtedly', normalizedTerm: 'undoubtedly', partOfSpeech: ['adverb'],
    chineseShort: '无疑, 必定, 确实地', chineseExplanation: '无疑, 必定, 确实地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Without doubt; certainly.',
    examples: [{ english: 'The speaker used undoubtedly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “undoubtedly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“undoubtedly”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'compose', term: 'compose', normalizedTerm: 'compose', partOfSpeech: ['verb'],
    chineseShort: '组成, 写作, 作曲, 使平静；创作, 排字', chineseExplanation: '组成, 写作, 作曲, 使平静；创作, 排字是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Form the substance of.',
    examples: [{ english: 'The example shows how to use the verb compose.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compose” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“compose”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'conversion', term: 'conversion', normalizedTerm: 'conversion', partOfSpeech: ['noun'],
    chineseShort: '转变, 转换, 改变宗教信仰, 换位法；转换', chineseExplanation: '转变, 转换, 改变宗教信仰, 换位法；转换是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An event that results in a transformation.',
    examples: [{ english: 'The lesson explains the meaning of conversion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conversion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conversion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'registration', term: 'registration', normalizedTerm: 'registration', partOfSpeech: ['noun'],
    chineseShort: '登记, 挂号, 注册；登记', chineseExplanation: '登记, 挂号, 注册；登记是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of enrolling.',
    examples: [{ english: 'The lesson explains the meaning of registration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “registration” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“registration”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'overlook', term: 'overlook', normalizedTerm: 'overlook', partOfSpeech: ['verb', 'noun'],
    chineseShort: '俯瞰, 远眺, 没注意到；眺望, 俯瞰到的景色', chineseExplanation: '俯瞰, 远眺, 没注意到；眺望, 俯瞰到的景色是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A high place affording a good view.',
    examples: [{ english: 'The example shows how to use the verb overlook.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overlook” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“overlook”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'resignation', term: 'resignation', normalizedTerm: 'resignation', partOfSpeech: ['noun'],
    chineseShort: '辞职, 辞呈, 听从；辞职', chineseExplanation: '辞职, 辞呈, 听从；辞职是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Acceptance of despair.',
    examples: [{ english: 'The lesson explains the meaning of resignation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resignation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“resignation”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'medication', term: 'medication', normalizedTerm: 'medication', partOfSpeech: ['noun'],
    chineseShort: '药物治疗, 药物处理, 医药；药疗法, 投药法', chineseExplanation: '药物治疗, 药物处理, 医药；药疗法, 投药法是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of treating with medicines or remedies.',
    examples: [{ english: 'The lesson explains the meaning of medication.', malay: 'Ayat ini menunjukkan penggunaan perkataan “medication” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“medication”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'whistle', term: 'whistle', normalizedTerm: 'whistle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '哨子；吹口哨', chineseExplanation: '可发出尖锐声音的小器具，或用嘴发出类似的声音。', englishDefinition: 'A small device that makes a high sound, or to make such a sound with your lips.',
    examples: [{ english: 'The referee blew the whistle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “whistle” dalam konteks Bahasa Inggeris British.', chinese: '裁判吹响了哨子。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'grin', term: 'grin', normalizedTerm: 'grin', partOfSpeech: ['noun', 'verb'],
    chineseShort: '露齿笑；露齿而笑', chineseExplanation: '露齿笑；露齿而笑是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To draw back the lips and reveal the teeth, in a smile, grimace, or snarl.',
    examples: [{ english: 'The lesson explains the meaning of grin.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grin” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grin”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'electrical', term: 'electrical', normalizedTerm: 'electrical', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '电的, 有关电的；电的', chineseExplanation: '电的, 有关电的；电的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Relating to or concerned with electricity.',
    examples: [{ english: 'The passage uses electrical to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “electrical” dalam konteks Bahasa Inggeris British.', chinese: '文章用“electrical”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'inspection', term: 'inspection', normalizedTerm: 'inspection', partOfSpeech: ['noun'],
    chineseShort: '检验, 检查, 视察；检查, 视察, 监督, 望诊', chineseExplanation: '检验, 检查, 视察；检查, 视察, 监督, 望诊是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A formal or official examination.',
    examples: [{ english: 'The lesson explains the meaning of inspection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inspection” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“inspection”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'withdrawal', term: 'withdrawal', normalizedTerm: 'withdrawal', partOfSpeech: ['noun'],
    chineseShort: '提款, 撤退, 退回, 撤消, 退隐, 戒毒过程；戒除, 脱瘾', chineseExplanation: '提款, 撤退, 退回, 撤消, 退隐, 戒毒过程；戒除, 脱瘾是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A retraction of a previously held position.',
    examples: [{ english: 'The lesson explains the meaning of withdrawal.', malay: 'Ayat ini menunjukkan penggunaan perkataan “withdrawal” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“withdrawal”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'inadequate', term: 'inadequate', normalizedTerm: 'inadequate', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不充分的, 不适当的；不充分的, 不适当的', chineseExplanation: '不充分的, 不适当的；不充分的, 不适当的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Lacking the requisite qualities or resources to meet a task.',
    examples: [{ english: 'The passage uses inadequate to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inadequate” dalam konteks Bahasa Inggeris British.', chinese: '文章用“inadequate”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'habitat', term: 'habitat', normalizedTerm: 'habitat', partOfSpeech: ['noun'],
    chineseShort: '栖息地, 居留地, 自生地, 聚集处；习生地, 产地, 生境, 栖所', chineseExplanation: '栖息地, 居留地, 自生地, 聚集处；习生地, 产地, 生境, 栖所是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The type of environment in which an organism or group normally lives or occurs.',
    examples: [{ english: 'The lesson explains the meaning of habitat.', malay: 'Ayat ini menunjukkan penggunaan perkataan “habitat” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“habitat”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'condemn', term: 'condemn', normalizedTerm: 'condemn', partOfSpeech: ['verb'],
    chineseShort: '判刑, 责备, 谴责；定罪, 判刑, 宣告有罪', chineseExplanation: '判刑, 责备, 谴责；定罪, 判刑, 宣告有罪是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Express strong disapproval of.',
    examples: [{ english: 'The example shows how to use the verb condemn.', malay: 'Ayat ini menunjukkan penggunaan perkataan “condemn” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“condemn”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'nomination', term: 'nomination', normalizedTerm: 'nomination', partOfSpeech: ['noun'],
    chineseShort: '提名, 任命, 提名权', chineseExplanation: '提名, 任命, 提名权是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of officially naming a candidate.',
    examples: [{ english: 'The lesson explains the meaning of nomination.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nomination” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“nomination”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'repeatedly', term: 'repeatedly', normalizedTerm: 'repeatedly', partOfSpeech: ['adverb'],
    chineseShort: '重复地, 再三地', chineseExplanation: '重复地, 再三地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Several time.',
    examples: [{ english: 'The speaker used repeatedly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “repeatedly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“repeatedly”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'curtain', term: 'curtain', normalizedTerm: 'curtain', partOfSpeech: ['noun'],
    chineseShort: '窗帘；帘子', chineseExplanation: '挂在窗户或开口处，用来遮光、保护隐私或装饰的布。', englishDefinition: 'A piece of cloth hung to cover a window or opening.',
    examples: [{ english: 'She opened the curtain to let in the light.', malay: 'Ayat ini menunjukkan penggunaan perkataan “curtain” dalam konteks Bahasa Inggeris British.', chinese: '她拉开窗帘让光线进来。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'directive', term: 'directive', normalizedTerm: 'directive', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '指导的, 指挥的, 方向的；指令', chineseExplanation: '指导的, 指挥的, 方向的；指令是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A pronouncement encouraging or banning some activity.',
    examples: [{ english: 'The lesson explains the meaning of directive.', malay: 'Ayat ini menunjukkan penggunaan perkataan “directive” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“directive”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'federation', term: 'federation', normalizedTerm: 'federation', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '联邦, 联合, 联盟；联邦, 联盟, 联邦政府', chineseExplanation: '联邦, 联合, 联盟；联邦, 联盟, 联邦政府是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An organisation formed by merging several groups or parties.',
    examples: [{ english: 'The lesson explains the meaning of federation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “federation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“federation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'disturb', term: 'disturb', normalizedTerm: 'disturb', partOfSpeech: ['verb', 'noun'],
    chineseShort: '扰乱, 妨碍, 使不安；滋扰, 扰乱', chineseExplanation: '扰乱, 妨碍, 使不安；滋扰, 扰乱是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Move deeply.',
    examples: [{ english: 'The example shows how to use the verb disturb.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disturb” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“disturb”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'kit', term: 'kit', normalizedTerm: 'kit', partOfSpeech: ['noun', 'verb'],
    chineseShort: '装备, 工具箱, 成套工具；成套部件', chineseExplanation: '装备, 工具箱, 成套工具；成套部件是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A case for containing a set of articles.',
    examples: [{ english: 'The lesson explains the meaning of kit.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kit” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“kit”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'satisfactory', term: 'satisfactory', normalizedTerm: 'satisfactory', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '满意的, 赎罪的；令人满意的, 令当事人满意的, 充分的', chineseExplanation: '满意的, 赎罪的；令人满意的, 令当事人满意的, 充分的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Giving satisfaction.',
    examples: [{ english: 'The passage uses satisfactory to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “satisfactory” dalam konteks Bahasa Inggeris British.', chinese: '文章用“satisfactory”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'intensity', term: 'intensity', normalizedTerm: 'intensity', partOfSpeech: ['noun'],
    chineseShort: '强烈, 紧张, 强度；强度', chineseExplanation: '强烈, 紧张, 强度；强度是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The amount of energy transmitted (as by acoustic or electromagnetic radiation).',
    examples: [{ english: 'The lesson explains the meaning of intensity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intensity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intensity”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'grocery', term: 'grocery', normalizedTerm: 'grocery', partOfSpeech: ['noun', 'verb'],
    chineseShort: '食品杂货店, 食品杂货业', chineseExplanation: '食品杂货店, 食品杂货业是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(usually plural) consumer goods sold by a grocer.',
    examples: [{ english: 'The lesson explains the meaning of grocery.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grocery” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grocery”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'greet', term: 'greet', normalizedTerm: 'greet', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '问候, 致敬, 欢迎, 映入眼帘', chineseExplanation: '问候, 致敬, 欢迎, 映入眼帘是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Express greetings upon meeting someone.',
    examples: [{ english: 'The example shows how to use the verb greet.', malay: 'Ayat ini menunjukkan penggunaan perkataan “greet” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“greet”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'blanket', term: 'blanket', normalizedTerm: 'blanket', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '毛毯, 毯子；掩盖, 覆盖', chineseExplanation: '毛毯, 毯子；掩盖, 覆盖是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Bedding that keeps a person warm in bed.',
    examples: [{ english: 'The lesson explains the meaning of blanket.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blanket” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“blanket”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dictionary', term: 'dictionary', normalizedTerm: 'dictionary', partOfSpeech: ['noun', 'verb'],
    chineseShort: '字典, 词典；词典', chineseExplanation: '字典, 词典；词典是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A reference book containing an alphabetical list of words with information about them.',
    examples: [{ english: 'The lesson explains the meaning of dictionary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dictionary” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dictionary”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'constable', term: 'constable', normalizedTerm: 'constable', partOfSpeech: ['noun', 'verb'],
    chineseShort: '治安官, 警官, 总管；警察, 警官, 巡警', chineseExplanation: '治安官, 警官, 总管；警察, 警官, 巡警是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A lawman with less authority and jurisdiction than a sheriff.',
    examples: [{ english: 'The lesson explains the meaning of constable.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constable” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“constable”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'pond', term: 'pond', normalizedTerm: 'pond', partOfSpeech: ['noun', 'verb'],
    chineseShort: '池塘；筑成池塘', chineseExplanation: '池塘；筑成池塘是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small lake.',
    examples: [{ english: 'The lesson explains the meaning of pond.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pond” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“pond”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'integrate', term: 'integrate', normalizedTerm: 'integrate', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '综合, 使完整, 使成整体；成一体', chineseExplanation: '综合, 使完整, 使成整体；成一体是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Make into a whole or make part of a whole.',
    examples: [{ english: 'The example shows how to use the verb integrate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “integrate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“integrate”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lap', term: 'lap', normalizedTerm: 'lap', partOfSpeech: ['noun', 'verb'],
    chineseShort: '膝盖, 舔, 一圈, 下摆, 衣兜, 山坳；重叠, 围住, 轻拍, 舔', chineseExplanation: '膝盖, 舔, 一圈, 下摆, 衣兜, 山坳；重叠, 围住, 轻拍, 舔是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The upper side of the thighs of a seated person.',
    examples: [{ english: 'The lesson explains the meaning of lap.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lap” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lap”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'toe', term: 'toe', normalizedTerm: 'toe', partOfSpeech: ['noun', 'verb'],
    chineseShort: '足趾, 趾部, 脚趾；以趾踏触, 用脚尖走', chineseExplanation: '足趾, 趾部, 脚趾；以趾踏触, 用脚尖走是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'One of the digits of the foot.',
    examples: [{ english: 'The lesson explains the meaning of toe.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toe” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toe”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'necessity', term: 'necessity', normalizedTerm: 'necessity', partOfSpeech: ['noun'],
    chineseShort: '需要, 必需品, 必然；必要性, 必然性, 必要', chineseExplanation: '需要, 必需品, 必然；必要性, 必然性, 必要是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The condition of being essential or indispensable.',
    examples: [{ english: 'The lesson explains the meaning of necessity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “necessity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“necessity”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'anniversary', term: 'anniversary', normalizedTerm: 'anniversary', partOfSpeech: ['noun'],
    chineseShort: '周年纪念', chineseExplanation: '周年纪念是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The date on which an event occurred in some previous year (or the celebration of it).',
    examples: [{ english: 'The lesson explains the meaning of anniversary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “anniversary” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“anniversary”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'grip', term: 'grip', normalizedTerm: 'grip', partOfSpeech: ['noun', 'verb'],
    chineseShort: '紧握, 柄, 握力, 握手方式, 手提包, 掌握, 支配, 控制；抓紧, 抱住, 吸住, 掌握', chineseExplanation: '紧握, 柄, 握力, 握手方式, 手提包, 掌握, 支配, 控制；抓紧, 抱住, 吸住, 掌握是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The friction between a body and the surface on which it moves (as between an automobile tire and the road).',
    examples: [{ english: 'The lesson explains the meaning of grip.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grip” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grip”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'interrupt', term: 'interrupt', normalizedTerm: 'interrupt', partOfSpeech: ['verb', 'noun'],
    chineseShort: '中断, 妨碍, 插嘴；打断', chineseExplanation: '中断, 妨碍, 插嘴；打断是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A signal that temporarily stops the execution of a programme so that another procedure can be carried out.',
    examples: [{ english: 'The example shows how to use the verb interrupt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interrupt” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“interrupt”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'forgive', term: 'forgive', normalizedTerm: 'forgive', partOfSpeech: ['verb'],
    chineseShort: '原谅, 宽恕, 免除；免除, 宽恕, 原谅', chineseExplanation: '原谅, 宽恕, 免除；免除, 宽恕, 原谅是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Stop blaming or grant forgiveness.',
    examples: [{ english: 'The example shows how to use the verb forgive.', malay: 'Ayat ini menunjukkan penggunaan perkataan “forgive” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“forgive”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'insect', term: 'insect', normalizedTerm: 'insect', partOfSpeech: ['noun'],
    chineseShort: '昆虫, 卑鄙的人；昆虫', chineseExplanation: '昆虫, 卑鄙的人；昆虫是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Small air-breathing arthropod.',
    examples: [{ english: 'The lesson explains the meaning of insect.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insect” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“insect”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'salmon', term: 'salmon', normalizedTerm: 'salmon', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '鲑鱼, 大麻哈鱼；鲑', chineseExplanation: '鲑鱼, 大麻哈鱼；鲑是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any of various large food and game fishes of northern waters; usually migrate from salt to fresh water to spawn.',
    examples: [{ english: 'The lesson explains the meaning of salmon.', malay: 'Ayat ini menunjukkan penggunaan perkataan “salmon” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“salmon”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'medal', term: 'medal', normalizedTerm: 'medal', partOfSpeech: ['noun', 'verb'],
    chineseShort: '奖牌, 勋章；授勋予', chineseExplanation: '奖牌, 勋章；授勋予是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An award for winning a championship or commemorating some other event.',
    examples: [{ english: 'The lesson explains the meaning of medal.', malay: 'Ayat ini menunjukkan penggunaan perkataan “medal” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“medal”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'beg', term: 'beg', normalizedTerm: 'beg', partOfSpeech: ['verb', 'noun'],
    chineseShort: '乞求, 乞讨, 请求', chineseExplanation: '乞求, 乞讨, 请求是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Call upon in supplication; entreat.',
    examples: [{ english: 'The example shows how to use the verb beg.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beg” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“beg”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'rebel', term: 'rebel', normalizedTerm: 'rebel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '叛逆者；反抗', chineseExplanation: '拒绝服从权威、规则或政府的人，也可表示公开反抗。', englishDefinition: 'A person who resists authority or control, or to oppose it openly.',
    examples: [{ english: 'The lesson explains the meaning of rebel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “rebel” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“rebel”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'melt', term: 'melt', normalizedTerm: 'melt', partOfSpeech: ['noun', 'verb'],
    chineseShort: '熔化, 熔化物, 溶解；熔化, 溶解, 消散, 变软', chineseExplanation: '熔化, 熔化物, 溶解；熔化, 溶解, 消散, 变软是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Reduce or cause to be reduced from a solid to a liquid state, usually by heating.',
    examples: [{ english: 'The lesson explains the meaning of melt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “melt” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“melt”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'merger', term: 'merger', normalizedTerm: 'merger', partOfSpeech: ['noun'],
    chineseShort: '合并, 归并；购并', chineseExplanation: '合并, 归并；购并是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The combination of two or more commercial companies n an occurrence that involves the production of a union.',
    examples: [{ english: 'The lesson explains the meaning of merger.', malay: 'Ayat ini menunjukkan penggunaan perkataan “merger” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“merger”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'jurisdiction', term: 'jurisdiction', normalizedTerm: 'jurisdiction', partOfSpeech: ['noun'],
    chineseShort: '司法权, 审判权, 管辖权；法律管辖权, 审判权', chineseExplanation: '司法权, 审判权, 管辖权；法律管辖权, 审判权是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In law; the territory within which power can be exercised.',
    examples: [{ english: 'The lesson explains the meaning of jurisdiction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jurisdiction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jurisdiction”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'elbow', term: 'elbow', normalizedTerm: 'elbow', partOfSpeech: ['noun', 'verb'],
    chineseShort: '手肘, 弯头, 扶手；用手肘推开, 推挤', chineseExplanation: '手肘, 弯头, 扶手；用手肘推开, 推挤是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Hinge joint between the forearm and upper arm and the corresponding joint in the forelimb of a quadruped.',
    examples: [{ english: 'The lesson explains the meaning of elbow.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elbow” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“elbow”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'disadvantage', term: 'disadvantage', normalizedTerm: 'disadvantage', partOfSpeech: ['noun', 'verb'],
    chineseShort: '缺点, 不利, 坏处', chineseExplanation: '缺点, 不利, 坏处是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of having an inferior or less favourable position.',
    examples: [{ english: 'The lesson explains the meaning of disadvantage.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disadvantage” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disadvantage”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'confuse', term: 'confuse', normalizedTerm: 'confuse', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '使混乱, 使狼狈, 使困惑；混淆', chineseExplanation: '使混乱, 使狼狈, 使困惑；混淆是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Mistake one thing for another.',
    examples: [{ english: 'The example shows how to use the verb confuse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “confuse” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“confuse”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'mechanical', term: 'mechanical', normalizedTerm: 'mechanical', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '机械的, 机械性的, 力学的；机械的, 力学的', chineseExplanation: '机械的, 机械性的, 力学的；机械的, 力学的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Using (or as if using) mechanisms or tools or devices.',
    examples: [{ english: 'The passage uses mechanical to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mechanical” dalam konteks Bahasa Inggeris British.', chinese: '文章用“mechanical”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'harbour', term: 'harbour', normalizedTerm: 'harbour', partOfSpeech: ['noun', 'verb'],
    chineseShort: '港, 避难所；庇护, 藏匿, 入港停泊', chineseExplanation: '港, 避难所；庇护, 藏匿, 入港停泊是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sheltered port where ships can take on or discharge cargo n a place of refuge and comfort and security v secretly shelter (as of fugitives or criminals) v keep in one\'s possession;.',
    examples: [{ english: 'The lesson explains the meaning of harbour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “harbour” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“harbour”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'sandwich', term: 'sandwich', normalizedTerm: 'sandwich', partOfSpeech: ['noun', 'verb'],
    chineseShort: '三明治, 夹心面包, 夹层板；插入, 夹入, 把...制成三明治', chineseExplanation: '三明治, 夹心面包, 夹层板；插入, 夹入, 把...制成三明治是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Two (or more) slices of bread with a filling between them.',
    examples: [{ english: 'The lesson explains the meaning of sandwich.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sandwich” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“sandwich”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'toilet', term: 'toilet', normalizedTerm: 'toilet', partOfSpeech: ['noun', 'verb'],
    chineseShort: '厕所, 梳妆；梳妆, 打扮, 上厕所', chineseExplanation: '厕所, 梳妆；梳妆, 打扮, 上厕所是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A room or building equipped with one or more toilets.',
    examples: [{ english: 'The lesson explains the meaning of toilet.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toilet” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toilet”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'contend', term: 'contend', normalizedTerm: 'contend', partOfSpeech: ['verb'],
    chineseShort: '奋斗, 斗争, 竞争；为...斗争', chineseExplanation: '奋斗, 斗争, 竞争；为...斗争是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Maintain or assert.',
    examples: [{ english: 'The example shows how to use the verb contend.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contend” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“contend”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'hallway', term: 'hallway', normalizedTerm: 'hallway', partOfSpeech: ['noun'],
    chineseShort: '门厅；玄关', chineseExplanation: '门厅；玄关是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An interior passage or corridor onto which rooms open.',
    examples: [{ english: 'The lesson explains the meaning of hallway.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hallway” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hallway”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'diplomatic', term: 'diplomatic', normalizedTerm: 'diplomatic', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '外交的, 老练的；外交的, 外交上的, 文献上的', chineseExplanation: '外交的, 老练的；外交的, 外交上的, 文献上的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Relating to or characteristic of diplomacy.',
    examples: [{ english: 'The passage uses diplomatic to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diplomatic” dalam konteks Bahasa Inggeris British.', chinese: '文章用“diplomatic”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'obstacle', term: 'obstacle', normalizedTerm: 'obstacle', partOfSpeech: ['noun'],
    chineseShort: '障碍, 妨害物, 阻碍', chineseExplanation: '障碍, 妨害物, 阻碍是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something immaterial that stands in the way and must be circumvented or surmounted.',
    examples: [{ english: 'The lesson explains the meaning of obstacle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “obstacle” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“obstacle”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'restoration', term: 'restoration', normalizedTerm: 'restoration', partOfSpeech: ['noun'],
    chineseShort: '恢复, 归还, 复位；恢复, 康复, 复位, 回复, 修复', chineseExplanation: '恢复, 归还, 复位；恢复, 康复, 复位, 回复, 修复是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The reign of Charles II in England; 1660-1685.',
    examples: [{ english: 'The lesson explains the meaning of restoration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “restoration” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“restoration”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'consistently', term: 'consistently', normalizedTerm: 'consistently', partOfSpeech: ['adverb'],
    chineseShort: '坚固, 坚实, 一致, 始终如一, 连贯；相容地', chineseExplanation: '坚固, 坚实, 一致, 始终如一, 连贯；相容地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In a systematic or consistent manner.',
    examples: [{ english: 'The speaker used consistently to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consistently” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“consistently”补充细节。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'wildlife', term: 'wildlife', normalizedTerm: 'wildlife', partOfSpeech: ['noun'],
    chineseShort: '野生动植物', chineseExplanation: '野生动植物是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'All living things (except people) that are undomesticated.',
    examples: [{ english: 'The lesson explains the meaning of wildlife.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wildlife” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wildlife”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'intelligent', term: 'intelligent', normalizedTerm: 'intelligent', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '聪明的, 智能的, 了解的', chineseExplanation: '聪明的, 智能的, 了解的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having the capacity for thought and reason especially to a high degree.',
    examples: [{ english: 'The passage uses intelligent to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intelligent” dalam konteks Bahasa Inggeris British.', chinese: '文章用“intelligent”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'wrist', term: 'wrist', normalizedTerm: 'wrist', partOfSpeech: ['noun', 'verb'],
    chineseShort: '手腕, 腕关节；腕', chineseExplanation: '手腕, 腕关节；腕是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A joint between the distal end of the radius and the proximal row of carpal bones.',
    examples: [{ english: 'The lesson explains the meaning of wrist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wrist” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wrist”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unfair', term: 'unfair', normalizedTerm: 'unfair', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '不公平的, 不正直的, 不正当的；不正直的, 不公平的, 偏颇的', chineseExplanation: '不公平的, 不正直的, 不正当的；不正直的, 不公平的, 偏颇的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not fair; marked by injustice or partiality or deception.',
    examples: [{ english: 'The passage uses unfair to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unfair” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unfair”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unite', term: 'unite', normalizedTerm: 'unite', partOfSpeech: ['verb', 'noun'],
    chineseShort: '联合, 接合, 混合；使联合, 统一, 使粘合, 使结合', chineseExplanation: '联合, 接合, 混合；使联合, 统一, 使粘合, 使结合是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Act in concert or unite in a common purpose or belief.',
    examples: [{ english: 'The example shows how to use the verb unite.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unite” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“unite”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'receipt', term: 'receipt', normalizedTerm: 'receipt', partOfSpeech: ['noun', 'verb'],
    chineseShort: '收据, 收入, 收到；开...的收据', chineseExplanation: '收据, 收入, 收到；开...的收据是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An acknowledgement (usually tangible) that payment has been made.',
    examples: [{ english: 'The lesson explains the meaning of receipt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “receipt” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“receipt”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unnecessary', term: 'unnecessary', normalizedTerm: 'unnecessary', partOfSpeech: ['adjective'],
    chineseShort: '不必要的', chineseExplanation: '不必要的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not necessary.',
    examples: [{ english: 'The passage uses unnecessary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unnecessary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unnecessary”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'endure', term: 'endure', normalizedTerm: 'endure', partOfSpeech: ['verb'],
    chineseShort: '忍受, 忍耐, 容忍, 耐；持久, 持续', chineseExplanation: '忍受, 忍耐, 容忍, 耐；持久, 持续是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Put up with something or somebody unpleasant v face and withstand with courage v continue to live through hardship or adversity v undergo or be subjected to v last and be usable v persist for a…',
    examples: [{ english: 'The example shows how to use the verb endure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “endure” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“endure”。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'residence', term: 'residence', normalizedTerm: 'residence', partOfSpeech: ['noun'],
    chineseShort: '住宅, 居留, 驻扎, 居住期间；住房', chineseExplanation: '住宅, 居留, 驻扎, 居住期间；住房是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any address at which you dwell more than temporarily.',
    examples: [{ english: 'The lesson explains the meaning of residence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “residence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“residence”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'sadly', term: 'sadly', normalizedTerm: 'sadly', partOfSpeech: ['adverb'],
    chineseShort: '悲痛地, 悲惨地, 悲伤地, 说来遗憾', chineseExplanation: '悲痛地, 悲惨地, 悲伤地, 说来遗憾是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In an unfortunate way.',
    examples: [{ english: 'The speaker used sadly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sadly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“sadly”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'towel', term: 'towel', normalizedTerm: 'towel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '手巾, 毛巾；擦干身子', chineseExplanation: '手巾, 毛巾；擦干身子是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A rectangular piece of absorbent cloth (or paper) for drying or wiping.',
    examples: [{ english: 'The lesson explains the meaning of towel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “towel” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“towel”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fetch', term: 'fetch', normalizedTerm: 'fetch', partOfSpeech: ['verb', 'noun'],
    chineseShort: '取得, 拿, 诡计, 魂；接来, 取来, 售得, 带来, 推出, 引出, 杀死, 吸引, 到达', chineseExplanation: '取得, 拿, 诡计, 魂；接来, 取来, 售得, 带来, 推出, 引出, 杀死, 吸引, 到达是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The action of fetching.',
    examples: [{ english: 'The example shows how to use the verb fetch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fetch” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“fetch”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'portfolio', term: 'portfolio', normalizedTerm: 'portfolio', partOfSpeech: ['noun'],
    chineseShort: '皮包, 公文包, 部长职务, 有价证券财产目录, 艺术代表作选辑；公文包, 文件夹, 阁员职务', chineseExplanation: '皮包, 公文包, 部长职务, 有价证券财产目录, 艺术代表作选辑；公文包, 文件夹, 阁员职务是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A large, flat, thin case for carrying loose papers or drawings or maps; usually leather.',
    examples: [{ english: 'The lesson explains the meaning of portfolio.', malay: 'Ayat ini menunjukkan penggunaan perkataan “portfolio” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“portfolio”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'comparable', term: 'comparable', normalizedTerm: 'comparable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '可比较的, 比得上的', chineseExplanation: '可比较的, 比得上的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Able to be compared or worthy of comparison.',
    examples: [{ english: 'The passage uses comparable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comparable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“comparable”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'installation', term: 'installation', normalizedTerm: 'installation', partOfSpeech: ['noun'],
    chineseShort: '安装, 装置, 就职；结构, 装置, 设立', chineseExplanation: '安装, 装置, 就职；结构, 装置, 设立是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of installing something (as equipment).',
    examples: [{ english: 'The lesson explains the meaning of installation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “installation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“installation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fork', term: 'fork', normalizedTerm: 'fork', partOfSpeech: ['noun', 'verb'],
    chineseShort: '叉子, 叉状物, 分岔；分支, 分歧', chineseExplanation: '叉子, 叉状物, 分岔；分支, 分歧是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cutlery used for serving and eating food.',
    examples: [{ english: 'The lesson explains the meaning of fork.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fork” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fork”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'relieve', term: 'relieve', normalizedTerm: 'relieve', partOfSpeech: ['verb'],
    chineseShort: '减轻, 救济, 解除, 使免除, 换...的班, 使得到调剂, 使不单调, 衬托, 使显著；救济, 当替补投手, 呈鲜明突出', chineseExplanation: '减轻, 救济, 解除, 使免除, 换...的班, 使得到调剂, 使不单调, 衬托, 使显著；救济, 当替补投手, 呈鲜明突出是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Provide physical relief, as from pain.',
    examples: [{ english: 'The example shows how to use the verb relieve.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relieve” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“relieve”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'meaningful', term: 'meaningful', normalizedTerm: 'meaningful', partOfSpeech: ['adjective'],
    chineseShort: '意味深长的', chineseExplanation: '意味深长的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having a meaning or purpose.',
    examples: [{ english: 'The passage uses meaningful to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “meaningful” dalam konteks Bahasa Inggeris British.', chinese: '文章用“meaningful”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'regret', term: 'regret', normalizedTerm: 'regret', partOfSpeech: ['noun', 'verb'],
    chineseShort: '遗憾, 后悔, 悔恨, 抱歉, 歉意；为...感到遗憾, 后悔, 惋惜, 懊悔, 抱歉', chineseExplanation: '遗憾, 后悔, 悔恨, 抱歉, 歉意；为...感到遗憾, 后悔, 惋惜, 懊悔, 抱歉是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Feel sad about the loss or absence of.',
    examples: [{ english: 'The lesson explains the meaning of regret.', malay: 'Ayat ini menunjukkan penggunaan perkataan “regret” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“regret”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'resume', term: 'resume', normalizedTerm: 'resume', partOfSpeech: ['verb', 'noun'],
    chineseShort: '重新开始, 取回, 恢复；再开始', chineseExplanation: '重新开始, 取回, 恢复；再开始是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Take up or begin anew.',
    examples: [{ english: 'The example shows how to use the verb resume.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resume” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“resume”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'belly', term: 'belly', normalizedTerm: 'belly', partOfSpeech: ['noun', 'verb'],
    chineseShort: '腹部, 食欲；使鼓起', chineseExplanation: '腹部, 食欲；使鼓起是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A protruding abdomen.',
    examples: [{ english: 'The lesson explains the meaning of belly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “belly” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“belly”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'ankle', term: 'ankle', normalizedTerm: 'ankle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '踝；踝, 踝关节', chineseExplanation: '踝；踝, 踝关节是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A gliding joint between the distal ends of the tibia and fibula and the proximal end of the talus.',
    examples: [{ english: 'The lesson explains the meaning of ankle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ankle” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ankle”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'instruct', term: 'instruct', normalizedTerm: 'instruct', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '教, 教育, 命令, 通知；托办, 指导, 指示', chineseExplanation: '教, 教育, 命令, 通知；托办, 指导, 指示是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Give instructions or directions for some task.',
    examples: [{ english: 'The example shows how to use the verb instruct.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instruct” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“instruct”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'happily', term: 'happily', normalizedTerm: 'happily', partOfSpeech: ['adverb'],
    chineseShort: '幸福地, 快乐地, 幸好', chineseExplanation: '幸福地, 快乐地, 幸好是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In a joyous manner.',
    examples: [{ english: 'The speaker used happily to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “happily” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“happily”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'poster', term: 'poster', normalizedTerm: 'poster', partOfSpeech: ['noun', 'verb'],
    chineseShort: '海报, 招贴, 驿马', chineseExplanation: '海报, 招贴, 驿马是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sign posted in a public place as an advertisement.',
    examples: [{ english: 'The lesson explains the meaning of poster.', malay: 'Ayat ini menunjukkan penggunaan perkataan “poster” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“poster”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'instinct', term: 'instinct', normalizedTerm: 'instinct', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '本能, 直觉；充满着的', chineseExplanation: '本能, 直觉；充满着的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Inborn pattern of behaviour often responsive to specific stimuli.',
    examples: [{ english: 'The lesson explains the meaning of instinct.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instinct” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“instinct”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'jazz', term: 'jazz', normalizedTerm: 'jazz', partOfSpeech: ['noun', 'verb'],
    chineseShort: '爵士乐, 喧闹；爵士乐的, 喧吵的', chineseExplanation: '爵士乐, 喧闹；爵士乐的, 喧吵的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A genre of popular music that originated in New Orleans around 1900 and developed through increasingly complex styles.',
    examples: [{ english: 'The lesson explains the meaning of jazz.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jazz” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jazz”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'inn', term: 'inn', normalizedTerm: 'inn', partOfSpeech: ['noun', 'verb'],
    chineseShort: '旅馆, 客栈；住旅馆', chineseExplanation: '旅馆, 客栈；住旅馆是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A hotel providing overnight lodging for travellers.',
    examples: [{ english: 'The lesson explains the meaning of inn.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inn” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“inn”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'nest', term: 'nest', normalizedTerm: 'nest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '巢, 窝, 休息所, 隐匿处；筑巢, 找鸟巢', chineseExplanation: '巢, 窝, 休息所, 隐匿处；筑巢, 找鸟巢是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A structure in which animals lay eggs or give birth to their young.',
    examples: [{ english: 'The lesson explains the meaning of nest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nest” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“nest”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'organism', term: 'organism', normalizedTerm: 'organism', partOfSpeech: ['noun'],
    chineseShort: '生物, 有机体, 社会组织；生物,机体', chineseExplanation: '生物, 有机体, 社会组织；生物,机体是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A living thing that has (or can develop) the ability to act or function independently.',
    examples: [{ english: 'The lesson explains the meaning of organism.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organism” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“organism”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'blend', term: 'blend', normalizedTerm: 'blend', partOfSpeech: ['noun', 'verb'],
    chineseShort: '混合；混合', chineseExplanation: '混合；混合是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An occurrence of thorough mixing.',
    examples: [{ english: 'The lesson explains the meaning of blend.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blend” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“blend”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'gravity', term: 'gravity', normalizedTerm: 'gravity', partOfSpeech: ['noun'],
    chineseShort: '地心引力, 重力；重力', chineseExplanation: '地心引力, 重力；重力是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(physics) the force of attraction between all masses in the universe; especially the attraction of the earth\'s mass for bodies near its surface.',
    examples: [{ english: 'The lesson explains the meaning of gravity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “gravity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“gravity”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'metropolitan', term: 'metropolitan', normalizedTerm: 'metropolitan', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '大都市居民, 都主教, 宗主国的公民；大都市的, 都主教区的, 宗主国的', chineseExplanation: '大都市居民, 都主教, 宗主国的公民；大都市的, 都主教区的, 宗主国的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In the Eastern Orthodox Church this title is given to a position between bishop and patriarch; equivalent to archbishop in western Christianity.',
    examples: [{ english: 'The passage uses metropolitan to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “metropolitan” dalam konteks Bahasa Inggeris British.', chinese: '文章用“metropolitan”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'popularity', term: 'popularity', normalizedTerm: 'popularity', partOfSpeech: ['noun'],
    chineseShort: '名声, 受大众欢迎, 流行', chineseExplanation: '名声, 受大众欢迎, 流行是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of being widely admired or accepted or sought after.',
    examples: [{ english: 'The lesson explains the meaning of popularity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “popularity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“popularity”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'forecast', term: 'forecast', normalizedTerm: 'forecast', partOfSpeech: ['noun', 'verb'],
    chineseShort: '预想, 预测, 预报；预想, 预测, 预报', chineseExplanation: '预想, 预测, 预报；预想, 预测, 预报是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Predict in advance.',
    examples: [{ english: 'The lesson explains the meaning of forecast.', malay: 'Ayat ini menunjukkan penggunaan perkataan “forecast” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“forecast”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dismissal', term: 'dismissal', normalizedTerm: 'dismissal', partOfSpeech: ['noun'],
    chineseShort: '免职, 解雇；解雇', chineseExplanation: '免职, 解雇；解雇是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Official notice that you have been fired from your job.',
    examples: [{ english: 'The lesson explains the meaning of dismissal.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dismissal” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dismissal”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'conceal', term: 'conceal', normalizedTerm: 'conceal', partOfSpeech: ['verb'],
    chineseShort: '隐藏, 掩盖, 隐瞒；隐瞒, 隐匿, 保守秘密', chineseExplanation: '隐藏, 掩盖, 隐瞒；隐瞒, 隐匿, 保守秘密是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Hold back; keep from being perceived by others.',
    examples: [{ english: 'The example shows how to use the verb conceal.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conceal” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“conceal”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'compulsory', term: 'compulsory', normalizedTerm: 'compulsory', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '被强制的, 强迫的, 义务的；强迫的, 强制的', chineseExplanation: '被强制的, 强迫的, 义务的；强迫的, 强制的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Required by rule.',
    examples: [{ english: 'The passage uses compulsory to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compulsory” dalam konteks Bahasa Inggeris British.', chinese: '文章用“compulsory”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'jaw', term: 'jaw', normalizedTerm: 'jaw', partOfSpeech: ['noun', 'verb'],
    chineseShort: '颚, 颌；闲谈, 教训, 唠叨', chineseExplanation: '颚, 颌；闲谈, 教训, 唠叨是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The part of the skull of a vertebrate that frames the mouth and holds the teeth.',
    examples: [{ english: 'The lesson explains the meaning of jaw.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jaw” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jaw”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'orchestra', term: 'orchestra', normalizedTerm: 'orchestra', partOfSpeech: ['noun'],
    chineseShort: '管弦乐队, 乐队演奏处', chineseExplanation: '管弦乐队, 乐队演奏处是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A musical organisation consisting of a group of instrumentalists including string players.',
    examples: [{ english: 'The lesson explains the meaning of orchestra.', malay: 'Ayat ini menunjukkan penggunaan perkataan “orchestra” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“orchestra”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lately', term: 'lately', normalizedTerm: 'lately', partOfSpeech: ['adverb'],
    chineseShort: '近来, 最近', chineseExplanation: '近来, 最近是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In the recent past.',
    examples: [{ english: 'The speaker used lately to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lately” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“lately”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'operational', term: 'operational', normalizedTerm: 'operational', partOfSpeech: ['adjective'],
    chineseShort: '操作的, 运作的；操作上的, 业务上的, 可起作用的', chineseExplanation: '操作的, 运作的；操作上的, 业务上的, 可起作用的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Pertaining to a process or series of actions for achieving a result.',
    examples: [{ english: 'The passage uses operational to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “operational” dalam konteks Bahasa Inggeris British.', chinese: '文章用“operational”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'constituent', term: 'constituent', normalizedTerm: 'constituent', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '成分, 选民, 构成物；构成的, 组织的, 选举的', chineseExplanation: '成分, 选民, 构成物；构成的, 组织的, 选举的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A member of a constituency; a citizen who is represented in a government by officials for whom he or she votes.',
    examples: [{ english: 'The lesson explains the meaning of constituent.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constituent” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“constituent”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'interim', term: 'interim', normalizedTerm: 'interim', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '暂时的, 临时的, 间歇的；过渡时期', chineseExplanation: '暂时的, 临时的, 间歇的；过渡时期是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The time between one event, process, or period and another.',
    examples: [{ english: 'The passage uses interim to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interim” dalam konteks Bahasa Inggeris British.', chinese: '文章用“interim”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'inspiration', term: 'inspiration', normalizedTerm: 'inspiration', partOfSpeech: ['noun'],
    chineseShort: '灵感, 鼓舞人心的人或物, 妙计, 吸气；吸', chineseExplanation: '灵感, 鼓舞人心的人或物, 妙计, 吸气；吸是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Arousal of the mind to special unusual activity or creativity.',
    examples: [{ english: 'The lesson explains the meaning of inspiration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inspiration” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“inspiration”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'unfortunate', term: 'unfortunate', normalizedTerm: 'unfortunate', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不幸的, 不合适的, 不吉利的', chineseExplanation: '不幸的, 不合适的, 不吉利的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who suffers misfortune.',
    examples: [{ english: 'The passage uses unfortunate to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unfortunate” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unfortunate”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fortunately', term: 'fortunately', normalizedTerm: 'fortunately', partOfSpeech: ['adverb'],
    chineseShort: '幸运地, 幸亏', chineseExplanation: '幸运地, 幸亏是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'By good fortune.',
    examples: [{ english: 'The speaker used fortunately to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fortunately” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“fortunately”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'nonsense', term: 'nonsense', normalizedTerm: 'nonsense', partOfSpeech: ['noun', 'verb'],
    chineseShort: '无意义的事, 荒谬言行, 荒唐', chineseExplanation: '无意义的事, 荒谬言行, 荒唐是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A message that seems to convey no meaning.',
    examples: [{ english: 'The lesson explains the meaning of nonsense.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nonsense” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“nonsense”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dignity', term: 'dignity', normalizedTerm: 'dignity', partOfSpeech: ['noun'],
    chineseShort: '尊严, 高贵；尊严, 高位, 高贵', chineseExplanation: '尊严, 高贵；尊严, 高位, 高贵是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of being worthy of esteem or respect.',
    examples: [{ english: 'The lesson explains the meaning of dignity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dignity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dignity”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'dispose', term: 'dispose', normalizedTerm: 'dispose', partOfSpeech: ['verb', 'noun'],
    chineseShort: '处理, 排列, 布置；处置', chineseExplanation: '处理, 排列, 布置；处置是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Give, sell, or transfer to another.',
    examples: [{ english: 'The example shows how to use the verb dispose.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dispose” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“dispose”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dissolve', term: 'dissolve', normalizedTerm: 'dissolve', partOfSpeech: ['verb', 'noun'],
    chineseShort: '溶解, 解散', chineseExplanation: '溶解, 解散是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(film) a gradual transition from one scene to the next; the next scene is gradually superimposed as the former scene fades out.',
    examples: [{ english: 'The example shows how to use the verb dissolve.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dissolve” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“dissolve”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'virgin', term: 'virgin', normalizedTerm: 'virgin', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '处女；处女的, 贞洁的, 纯洁的, 初始的, 纯的', chineseExplanation: '处女；处女的, 贞洁的, 纯洁的, 初始的, 纯的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who has never had sex.',
    examples: [{ english: 'The lesson explains the meaning of virgin.', malay: 'Ayat ini menunjukkan penggunaan perkataan “virgin” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“virgin”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'ladder', term: 'ladder', normalizedTerm: 'ladder', partOfSpeech: ['noun', 'verb'],
    chineseShort: '梯, 梯状物, 发迹的途径；袜子抽丝, 成名', chineseExplanation: '梯, 梯状物, 发迹的途径；袜子抽丝, 成名是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Steps consisting of two parallel members connected by rungs; for climbing up or down.',
    examples: [{ english: 'The lesson explains the meaning of ladder.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ladder” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ladder”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'optimistic', term: 'optimistic', normalizedTerm: 'optimistic', partOfSpeech: ['adjective'],
    chineseShort: '乐观的, 乐观主义的, 乐天的', chineseExplanation: '乐观的, 乐观主义的, 乐天的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Expecting the best in this best of all possible worlds.',
    examples: [{ english: 'The passage uses optimistic to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “optimistic” dalam konteks Bahasa Inggeris British.', chinese: '文章用“optimistic”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'keeper', term: 'keeper', normalizedTerm: 'keeper', partOfSpeech: ['noun'],
    chineseShort: '监护人, 管理人, 看守人；保管人, 看守人, 保持片', chineseExplanation: '监护人, 管理人, 看守人；保管人, 看守人, 保持片是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone in charge of other people.',
    examples: [{ english: 'The lesson explains the meaning of keeper.', malay: 'Ayat ini menunjukkan penggunaan perkataan “keeper” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“keeper”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'verdict', term: 'verdict', normalizedTerm: 'verdict', partOfSpeech: ['noun'],
    chineseShort: '裁决, 判决, 判断性意见, 定论, 结论；定论, 判断, 意见', chineseExplanation: '裁决, 判决, 判断性意见, 定论, 结论；定论, 判断, 意见是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(law) the findings of a jury on issues of fact submitted to it for decision; can be used in formulating a judgement.',
    examples: [{ english: 'The lesson explains the meaning of verdict.', malay: 'Ayat ini menunjukkan penggunaan perkataan “verdict” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“verdict”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lamb', term: 'lamb', normalizedTerm: 'lamb', partOfSpeech: ['noun', 'verb'],
    chineseShort: '小羊, 羔羊；产羊羔', chineseExplanation: '小羊, 羔羊；产羊羔是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Young sheep.',
    examples: [{ english: 'The lesson explains the meaning of lamb.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lamb” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lamb”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'orbit', term: 'orbit', normalizedTerm: 'orbit', partOfSpeech: ['noun', 'verb'],
    chineseShort: '轨道, 常轨, 眼眶；绕...轨道而行', chineseExplanation: '轨道, 常轨, 眼眶；绕...轨道而行是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The (usually elliptical) path described by one celestial body in its revolution about another.',
    examples: [{ english: 'The lesson explains the meaning of orbit.', malay: 'Ayat ini menunjukkan penggunaan perkataan “orbit” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“orbit”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'revelation', term: 'revelation', normalizedTerm: 'revelation', partOfSpeech: ['noun'],
    chineseShort: '揭露, 泄露, 发觉, 默示, 启示', chineseExplanation: '揭露, 泄露, 发觉, 默示, 启示是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An enlightening or astonishing disclosure.',
    examples: [{ english: 'The lesson explains the meaning of revelation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revelation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“revelation”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'commerce', term: 'commerce', normalizedTerm: 'commerce', partOfSpeech: ['noun', 'verb'],
    chineseShort: '商业, 商务, 贸易；商业, 贸易, 商务', chineseExplanation: '商业, 商务, 贸易；商业, 贸易, 商务是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Transactions (sales and purchases) having the objective of supplying commodities (goods and services).',
    examples: [{ english: 'The lesson explains the meaning of commerce.', malay: 'Ayat ini menunjukkan penggunaan perkataan “commerce” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“commerce”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'competence', term: 'competence', normalizedTerm: 'competence', partOfSpeech: ['noun'],
    chineseShort: '胜任, 职称, 能力；能力, 活性', chineseExplanation: '胜任, 职称, 能力；能力, 活性是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of being adequately or well qualified physically and intellectually.',
    examples: [{ english: 'The lesson explains the meaning of competence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “competence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“competence”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'discourage', term: 'discourage', normalizedTerm: 'discourage', partOfSpeech: ['verb', 'noun'],
    chineseShort: '使气馁, 阻碍', chineseExplanation: '使气馁, 阻碍是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Deprive of courage or hope; take away hope from; cause to feel discouraged.',
    examples: [{ english: 'The example shows how to use the verb discourage.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discourage” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“discourage”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'intimate', term: 'intimate', normalizedTerm: 'intimate', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '亲密的, 私人的, 秘密的；暗示, 通知, 告诉', chineseExplanation: '亲密的, 私人的, 秘密的；暗示, 通知, 告诉是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Give to understand.',
    examples: [{ english: 'The passage uses intimate to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intimate” dalam konteks Bahasa Inggeris British.', chinese: '文章用“intimate”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'tender', term: 'tender', normalizedTerm: 'tender', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '嫩的, 柔软的, 脆弱的, 温柔的, 亲切的, 未成熟的, 微妙的, 棘手的, 审慎的；使变嫩, 提供, 偿还', chineseExplanation: '嫩的, 柔软的, 脆弱的, 温柔的, 亲切的, 未成熟的, 微妙的, 棘手的, 审慎的；使变嫩, 提供, 偿还是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that can be used as an official medium of payment.',
    examples: [{ english: 'The lesson explains the meaning of tender.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tender” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tender”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'conspiracy', term: 'conspiracy', normalizedTerm: 'conspiracy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '同谋, 阴谋, 阴谋集团；阴谋, 通谋, 共谋', chineseExplanation: '同谋, 阴谋, 阴谋集团；阴谋, 通谋, 共谋是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A secret agreement between two or more people to perform an unlawful act.',
    examples: [{ english: 'The lesson explains the meaning of conspiracy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conspiracy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conspiracy”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'indirect', term: 'indirect', normalizedTerm: 'indirect', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '间接的, 非直截了当的, 不坦率的；间接的', chineseExplanation: '间接的, 非直截了当的, 不坦率的；间接的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having intervening factors or persons or influences.',
    examples: [{ english: 'The passage uses indirect to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “indirect” dalam konteks Bahasa Inggeris British.', chinese: '文章用“indirect”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'notepad', term: 'notepad', normalizedTerm: 'notepad', partOfSpeech: ['noun'],
    chineseShort: '记事本；便笺本', chineseExplanation: '装订在一起、用于快速记录信息的小张纸。', englishDefinition: 'A small pad of paper used for writing short notes.',
    examples: [{ english: 'She wrote the address in her notepad.', malay: 'Ayat ini menunjukkan penggunaan perkataan “notepad” dalam konteks Bahasa Inggeris British.', chinese: '她把地址写在记事本上。' }], level: 2, cefr: 'B1', categories: ['Daily English', 'School'],
  },
  {
    id: 'cushion', term: 'cushion', normalizedTerm: 'cushion', partOfSpeech: ['noun'],
    chineseShort: '靠垫；软垫', chineseExplanation: '填充柔软材料、用于坐靠或支撑身体的垫子。', englishDefinition: 'A soft padded object used for sitting, resting, or support.',
    examples: [{ english: 'She placed a cushion behind her back.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cushion” dalam konteks Bahasa Inggeris British.', chinese: '她在背后放了一个靠垫。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'electron', term: 'electron', normalizedTerm: 'electron', partOfSpeech: ['noun'],
    chineseShort: '电子；电子', chineseExplanation: '电子；电子是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An elementary particle with negative charge.',
    examples: [{ english: 'The lesson explains the meaning of electron.', malay: 'Ayat ini menunjukkan penggunaan perkataan “electron” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“electron”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'antibody', term: 'antibody', normalizedTerm: 'antibody', partOfSpeech: ['noun'],
    chineseShort: '抗体；抗体', chineseExplanation: '抗体；抗体是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any of a large variety of proteins normally present in the body or produced in response to an antigen which it neutralises, thus producing an immune response.',
    examples: [{ english: 'The lesson explains the meaning of antibody.', malay: 'Ayat ini menunjukkan penggunaan perkataan “antibody” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“antibody”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'jar', term: 'jar', normalizedTerm: 'jar', partOfSpeech: ['noun', 'verb'],
    chineseShort: '广口瓶, 震动, 刺耳声；震惊, 冲突, 发刺耳声, 不一致', chineseExplanation: '广口瓶, 震动, 刺耳声；震惊, 冲突, 发刺耳声, 不一致是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A vessel (usually cylindrical) with a wide mouth and without handles.',
    examples: [{ english: 'The lesson explains the meaning of jar.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jar” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jar”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'vague', term: 'vague', normalizedTerm: 'vague', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '含糊的, 不清楚的, 茫然的', chineseExplanation: '含糊的, 不清楚的, 茫然的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not clearly understood or expressed a not precisely limited, determined, or distinguished s lacking clarity or distinctness.',
    examples: [{ english: 'The passage uses vague to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vague” dalam konteks Bahasa Inggeris British.', chinese: '文章用“vague”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'conscience', term: 'conscience', normalizedTerm: 'conscience', partOfSpeech: ['noun'],
    chineseShort: '良心；良心, 道德感, 正义感', chineseExplanation: '良心；良心, 道德感, 正义感是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Motivation deriving logically from ethical or moral principles that govern a person\'s thoughts and actions.',
    examples: [{ english: 'The lesson explains the meaning of conscience.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conscience” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conscience”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'disturbance', term: 'disturbance', normalizedTerm: 'disturbance', partOfSpeech: ['noun'],
    chineseShort: '扰乱, 不安, 忧虑；扰动', chineseExplanation: '扰乱, 不安, 忧虑；扰动是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An unhappy and worried mental state.',
    examples: [{ english: 'The lesson explains the meaning of disturbance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disturbance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disturbance”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'zero', term: 'zero', normalizedTerm: 'zero', partOfSpeech: ['noun', 'verb'],
    chineseShort: '零, 零点, 零度, 无, 乌有, 最低点；零的, 没有的', chineseExplanation: '零, 零点, 零度, 无, 乌有, 最低点；零的, 没有的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A mathematical element that when added to another number yields the same number.',
    examples: [{ english: 'The lesson explains the meaning of zero.', malay: 'Ayat ini menunjukkan penggunaan perkataan “zero” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“zero”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'remarkably', term: 'remarkably', normalizedTerm: 'remarkably', partOfSpeech: ['adverb'],
    chineseShort: '显著地, 引人注目地, 非常地', chineseExplanation: '显著地, 引人注目地, 非常地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To a remarkable degree or extent r in a signal manner.',
    examples: [{ english: 'The speaker used remarkably to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “remarkably” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“remarkably”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lump', term: 'lump', normalizedTerm: 'lump', partOfSpeech: ['noun', 'verb'],
    chineseShort: '块, 瘤, 很多, 肿块, 笨人；使成块状, 混在一起', chineseExplanation: '块, 瘤, 很多, 肿块, 笨人；使成块状, 混在一起是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Put together indiscriminately.',
    examples: [{ english: 'The lesson explains the meaning of lump.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lump” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lump”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'waist', term: 'waist', normalizedTerm: 'waist', partOfSpeech: ['noun'],
    chineseShort: '腰部, 腰；腰', chineseExplanation: '腰部, 腰；腰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The narrowing of the body between the ribs and hips.',
    examples: [{ english: 'The lesson explains the meaning of waist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “waist” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“waist”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'blank', term: 'blank', normalizedTerm: 'blank', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '空格, 空白；空白的, 空虚的, 完全的, 无色的', chineseExplanation: '空格, 空白；空白的, 空虚的, 完全的, 无色的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A piece of material ready to be made into something.',
    examples: [{ english: 'The passage uses blank to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blank” dalam konteks Bahasa Inggeris British.', chinese: '文章用“blank”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'discharge', term: 'discharge', normalizedTerm: 'discharge', partOfSpeech: ['noun', 'verb'],
    chineseShort: '卸下, 放出, 解雇, 拔染, 履行, 放电；卸货, 流出', chineseExplanation: '卸下, 放出, 解雇, 拔染, 履行, 放电；卸货, 流出是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The sudden giving off of energy.',
    examples: [{ english: 'The lesson explains the meaning of discharge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discharge” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“discharge”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'tolerate', term: 'tolerate', normalizedTerm: 'tolerate', partOfSpeech: ['verb'],
    chineseShort: '宽容, 容许, 有耐力', chineseExplanation: '宽容, 容许, 有耐力是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Recognise and respect (rights and beliefs of others).',
    examples: [{ english: 'The example shows how to use the verb tolerate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tolerate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“tolerate”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'hazard', term: 'hazard', normalizedTerm: 'hazard', partOfSpeech: ['noun', 'verb'],
    chineseShort: '冒险, 危险, 机会；冒...的危险, 赌运气, 使冒危险', chineseExplanation: '冒险, 危险, 机会；冒...的危险, 赌运气, 使冒危险是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A source of danger; a possibility of incurring loss or misfortune.',
    examples: [{ english: 'The lesson explains the meaning of hazard.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hazard” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hazard”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'appreciation', term: 'appreciation', normalizedTerm: 'appreciation', partOfSpeech: ['noun'],
    chineseShort: '感激, 赏识, 鉴别；涨价, 增值', chineseExplanation: '感激, 赏识, 鉴别；涨价, 增值是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Understanding of the nature or meaning or quality or magnitude of something.',
    examples: [{ english: 'The lesson explains the meaning of appreciation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appreciation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“appreciation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'interact', term: 'interact', normalizedTerm: 'interact', partOfSpeech: ['verb', 'noun'],
    chineseShort: '互相影响, 交互作用；幕间剧, 幕间休息', chineseExplanation: '互相影响, 交互作用；幕间剧, 幕间休息是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Act together or towards others or with others.',
    examples: [{ english: 'The example shows how to use the verb interact.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interact” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“interact”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'halt', term: 'halt', normalizedTerm: 'halt', partOfSpeech: ['noun', 'verb'],
    chineseShort: '停止, 立定, 休息；使停止, 使立定', chineseExplanation: '停止, 立定, 休息；使停止, 使立定是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cause to stop.',
    examples: [{ english: 'The lesson explains the meaning of halt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “halt” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“halt”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'vein', term: 'vein', normalizedTerm: 'vein', partOfSpeech: ['noun', 'verb'],
    chineseShort: '血管, 静脉, 纹理, 气质, 情绪；使有脉络, 像脉络般分布于', chineseExplanation: '血管, 静脉, 纹理, 气质, 情绪；使有脉络, 像脉络般分布于是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A blood vessel that carries blood from the capillaries towards the heart.',
    examples: [{ english: 'The lesson explains the meaning of vein.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vein” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vein”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'plea', term: 'plea', normalizedTerm: 'plea', partOfSpeech: ['noun', 'verb'],
    chineseShort: '恳求, 辩解, 抗辩, 诉讼, 请愿, 托词；抗辩, 申诉案件, 答辩', chineseExplanation: '恳求, 辩解, 抗辩, 诉讼, 请愿, 托词；抗辩, 申诉案件, 答辩是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(law) a defendant\'s answer by a factual matter (as distinguished from a demurrer).',
    examples: [{ english: 'The lesson explains the meaning of plea.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plea” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plea”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fever', term: 'fever', normalizedTerm: 'fever', partOfSpeech: ['noun', 'verb'],
    chineseShort: '发烧, 发热, 热病；发热, 热', chineseExplanation: '发烧, 发热, 热病；发热, 热是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A rise in the temperature of the body; frequently a symptom of infection.',
    examples: [{ english: 'The lesson explains the meaning of fever.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fever” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fever”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'originate', term: 'originate', normalizedTerm: 'originate', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '创始, 发明, 发起；发源, 发生, 起航', chineseExplanation: '创始, 发明, 发起；发源, 发生, 起航是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Come into existence; take on form or shape.',
    examples: [{ english: 'The example shows how to use the verb originate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “originate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“originate”。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'embassy', term: 'embassy', normalizedTerm: 'embassy', partOfSpeech: ['noun'],
    chineseShort: '大使馆, 大使馆全体人员；大使馆', chineseExplanation: '大使馆, 大使馆全体人员；大使馆是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A diplomatic building where ambassadors live or work.',
    examples: [{ english: 'The lesson explains the meaning of embassy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “embassy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“embassy”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'reminder', term: 'reminder', normalizedTerm: 'reminder', partOfSpeech: ['noun'],
    chineseShort: '提醒的人, 暗示；催单', chineseExplanation: '提醒的人, 暗示；催单是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A message that helps you remember something.',
    examples: [{ english: 'The lesson explains the meaning of reminder.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reminder” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reminder”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'regiment', term: 'regiment', normalizedTerm: 'regiment', partOfSpeech: ['noun', 'verb'],
    chineseShort: '（军队）团, 大量（人或物）；组编成团，组织，严格管制', chineseExplanation: '（军队）团, 大量（人或物）；组编成团，组织，严格管制是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Army unit smaller than a division.',
    examples: [{ english: 'The lesson explains the meaning of regiment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “regiment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“regiment”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'placement', term: 'placement', normalizedTerm: 'placement', partOfSpeech: ['noun'],
    chineseShort: '放置, 布置, 工作安排, 编班, 定位球；放置', chineseExplanation: '放置, 布置, 工作安排, 编班, 定位球；放置是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The spatial property of the way in which something is placed.',
    examples: [{ english: 'The lesson explains the meaning of placement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “placement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“placement”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'sally', term: 'sally', normalizedTerm: 'sally', partOfSpeech: ['noun', 'verb'],
    chineseShort: '突击, 出击, 远足；突击, 出击, 出发', chineseExplanation: '突击, 出击, 远足；突击, 出击, 出发是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A venture off the beaten path.',
    examples: [{ english: 'The lesson explains the meaning of sally.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sally” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“sally”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'tourism', term: 'tourism', normalizedTerm: 'tourism', partOfSpeech: ['noun'],
    chineseShort: '观光业, 游览；旅游业', chineseExplanation: '观光业, 游览；旅游业是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The business of providing services to tourists.',
    examples: [{ english: 'The lesson explains the meaning of tourism.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tourism” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tourism”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'notebook', term: 'notebook', normalizedTerm: 'notebook', partOfSpeech: ['noun'],
    chineseShort: '笔记本, 手册, 期票簿', chineseExplanation: '笔记本, 手册, 期票簿是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A book with blank pages for recording notes or memoranda.',
    examples: [{ english: 'The lesson explains the meaning of notebook.', malay: 'Ayat ini menunjukkan penggunaan perkataan “notebook” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“notebook”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'beast', term: 'beast', normalizedTerm: 'beast', partOfSpeech: ['noun', 'verb'],
    chineseShort: '畜生, 动物, 野兽, 兽性', chineseExplanation: '畜生, 动物, 野兽, 兽性是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A cruelly rapacious person.',
    examples: [{ english: 'The lesson explains the meaning of beast.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beast” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“beast”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'innovative', term: 'innovative', normalizedTerm: 'innovative', partOfSpeech: ['adjective'],
    chineseShort: '革新的, 创新的, 富有革新精神的', chineseExplanation: '革新的, 创新的, 富有革新精神的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Being or producing something like nothing done or experienced or created before.',
    examples: [{ english: 'The passage uses innovative to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “innovative” dalam konteks Bahasa Inggeris British.', chinese: '文章用“innovative”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'instant', term: 'instant', normalizedTerm: 'instant', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '立即, 瞬间；紧急的, 立即的, 即时的', chineseExplanation: '立即, 瞬间；紧急的, 立即的, 即时的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In or of the present month.',
    examples: [{ english: 'The lesson explains the meaning of instant.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instant” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“instant”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'enthusiastic', term: 'enthusiastic', normalizedTerm: 'enthusiastic', partOfSpeech: ['adjective'],
    chineseShort: '狂热的, 热心的, 热烈的', chineseExplanation: '狂热的, 热心的, 热烈的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having or showing great excitement and interest.',
    examples: [{ english: 'The passage uses enthusiastic to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enthusiastic” dalam konteks Bahasa Inggeris British.', chinese: '文章用“enthusiastic”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'sack', term: 'sack', normalizedTerm: 'sack', partOfSpeech: ['noun', 'verb'],
    chineseShort: '麻布袋, 洗劫；把...装入袋, 洗劫', chineseExplanation: '麻布袋, 洗劫；把...装入袋, 洗劫是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A bag made of paper or plastic for holding customer\'s purchases.',
    examples: [{ english: 'The lesson explains the meaning of sack.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sack” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“sack”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'entertain', term: 'entertain', normalizedTerm: 'entertain', partOfSpeech: ['verb', 'noun'],
    chineseShort: '娱乐, 招待, 怀抱；款待', chineseExplanation: '娱乐, 招待, 怀抱；款待是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Provide entertainment for.',
    examples: [{ english: 'The example shows how to use the verb entertain.', malay: 'Ayat ini menunjukkan penggunaan perkataan “entertain” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“entertain”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'warehouse', term: 'warehouse', normalizedTerm: 'warehouse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '仓库, 货栈, 大商店；储入仓库', chineseExplanation: '仓库, 货栈, 大商店；储入仓库是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A storehouse for goods and merchandise.',
    examples: [{ english: 'The lesson explains the meaning of warehouse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “warehouse” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“warehouse”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'openly', term: 'openly', normalizedTerm: 'openly', partOfSpeech: ['adverb'],
    chineseShort: '公开地, 坦率地, 直率地, 公然地', chineseExplanation: '公开地, 坦率地, 直率地, 公然地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In an open way.',
    examples: [{ english: 'The speaker used openly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “openly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“openly”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'compact', term: 'compact', normalizedTerm: 'compact', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '紧凑的, 紧密的, 简洁的；使紧密结合, 压缩', chineseExplanation: '紧凑的, 紧密的, 简洁的；使紧密结合, 压缩是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small cosmetics case with a mirror; to be carried in a woman\'s purse.',
    examples: [{ english: 'The passage uses compact to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compact” dalam konteks Bahasa Inggeris British.', chinese: '文章用“compact”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'jungle', term: 'jungle', normalizedTerm: 'jungle', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '丛林, 杂乱的一堆, 弱肉强食的地方', chineseExplanation: '丛林, 杂乱的一堆, 弱肉强食的地方是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A location marked by an intense competition and struggle for survival.',
    examples: [{ english: 'The lesson explains the meaning of jungle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jungle” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jungle”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dick', term: 'dick', normalizedTerm: 'dick', partOfSpeech: ['noun', 'verb'],
    chineseShort: '家伙, 词典, 誓言；二氯乙胂', chineseExplanation: '家伙, 词典, 誓言；二氯乙胂是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone who is a detective.',
    examples: [{ english: 'The lesson explains the meaning of dick.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dick” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dick”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'raincoat', term: 'raincoat', normalizedTerm: 'raincoat', partOfSpeech: ['noun'],
    chineseShort: '雨衣', chineseExplanation: '下雨时穿在衣服外面、用来保持身体干燥的防水外套。', englishDefinition: 'A waterproof coat worn to keep dry in the rain.',
    examples: [{ english: 'Take a raincoat because rain is expected.', malay: 'Ayat ini menunjukkan penggunaan perkataan “raincoat” dalam konteks Bahasa Inggeris British.', chinese: '可能会下雨，带上雨衣吧。' }], level: 2, cefr: 'B1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'interference', term: 'interference', normalizedTerm: 'interference', partOfSpeech: ['noun', 'verb'],
    chineseShort: '冲突, 干涉；干扰', chineseExplanation: '冲突, 干涉；干扰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(American football) blocking a player\'s path with your body.',
    examples: [{ english: 'The lesson explains the meaning of interference.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interference” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“interference”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'feather', term: 'feather', normalizedTerm: 'feather', partOfSpeech: ['noun', 'verb'],
    chineseShort: '羽毛；长羽毛', chineseExplanation: '羽毛；长羽毛是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The light horny waterproof structure forming the external covering of birds.',
    examples: [{ english: 'The lesson explains the meaning of feather.', malay: 'Ayat ini menunjukkan penggunaan perkataan “feather” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“feather”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dip', term: 'dip', normalizedTerm: 'dip', partOfSpeech: ['noun', 'verb'],
    chineseShort: '浸, 降下, 把伸入, 舀取；浸, 涉猎', chineseExplanation: '浸, 降下, 把伸入, 舀取；浸, 涉猎是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A depression in an otherwise level surface.',
    examples: [{ english: 'The lesson explains the meaning of dip.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dip” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dip”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'glimpse', term: 'glimpse', normalizedTerm: 'glimpse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '一瞥, 一闪；投以一瞥, 闪烁不定', chineseExplanation: '一瞥, 一闪；投以一瞥, 闪烁不定是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A brief or incomplete view.',
    examples: [{ english: 'The lesson explains the meaning of glimpse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glimpse” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“glimpse”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'oscar', term: 'oscar', normalizedTerm: 'oscar', partOfSpeech: ['noun'],
    chineseShort: '奥斯卡金像奖, 钱, 现金', chineseExplanation: '奥斯卡金像奖, 钱, 现金是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An annual award by the Academy of Motion Picture Arts and Sciences for achievements in motion picture production and performance.',
    examples: [{ english: 'The lesson explains the meaning of oscar.', malay: 'Ayat ini menunjukkan penggunaan perkataan “oscar” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“oscar”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'layout', term: 'layout', normalizedTerm: 'layout', partOfSpeech: ['noun'],
    chineseShort: '布局, 陈列, 规划图, 页面布局, 版面编排；页面布局, 版面', chineseExplanation: '布局, 陈列, 规划图, 页面布局, 版面编排；页面布局, 版面是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A plan or design of something that is laid out.',
    examples: [{ english: 'The lesson explains the meaning of layout.', malay: 'Ayat ini menunjukkan penggunaan perkataan “layout” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“layout”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'revision', term: 'revision', normalizedTerm: 'revision', partOfSpeech: ['noun', 'verb'],
    chineseShort: '校订, 修正, 修订本, 修订版；修订版', chineseExplanation: '校订, 修正, 修订本, 修订版；修订版是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of revising or altering (involving reconsideration and modification).',
    examples: [{ english: 'The lesson explains the meaning of revision.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revision” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“revision”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'saint', term: 'saint', normalizedTerm: 'saint', partOfSpeech: ['noun', 'verb'],
    chineseShort: '圣徒, 圣人；神圣的', chineseExplanation: '圣徒, 圣人；神圣的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who has died and has been declared a saint by canonization.',
    examples: [{ english: 'The lesson explains the meaning of saint.', malay: 'Ayat ini menunjukkan penggunaan perkataan “saint” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“saint”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'halfway', term: 'halfway', normalizedTerm: 'halfway', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '中途的, 不彻底的, 部分的；半路地, 在中途, 在半途', chineseExplanation: '中途的, 不彻底的, 部分的；半路地, 在中途, 在半途是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'At a point midway between two extremes.',
    examples: [{ english: 'The speaker used halfway to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “halfway” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“halfway”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'ferry', term: 'ferry', normalizedTerm: 'ferry', partOfSpeech: ['noun', 'verb'],
    chineseShort: '渡船, 渡口；摆渡营业权, 轮渡', chineseExplanation: '渡船, 渡口；摆渡营业权, 轮渡是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A boat that transports people or vehicles across a body of water and operates on a regular schedule.',
    examples: [{ english: 'The lesson explains the meaning of ferry.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ferry” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ferry”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'harassment', term: 'harassment', normalizedTerm: 'harassment', partOfSpeech: ['noun'],
    chineseShort: '困扰, 烦扰, 烦恼；折磨, 骚扰, 侵扰', chineseExplanation: '困扰, 烦扰, 烦恼；折磨, 骚扰, 侵扰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A feeling of intense annoyance caused by being tormented.',
    examples: [{ english: 'The lesson explains the meaning of harassment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “harassment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“harassment”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'graph', term: 'graph', normalizedTerm: 'graph', partOfSpeech: ['noun', 'verb'],
    chineseShort: '曲线图, 图表, 图形；图形', chineseExplanation: '曲线图, 图表, 图形；图形是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A visual representation of the relations between certain quantities plotted with reference to a set of axes.',
    examples: [{ english: 'The lesson explains the meaning of graph.', malay: 'Ayat ini menunjukkan penggunaan perkataan “graph” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“graph”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'continuity', term: 'continuity', normalizedTerm: 'continuity', partOfSpeech: ['noun'],
    chineseShort: '连续性；连续性', chineseExplanation: '连续性；连续性是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Uninterrupted connection or union.',
    examples: [{ english: 'The lesson explains the meaning of continuity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “continuity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“continuity”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'toll', term: 'toll', normalizedTerm: 'toll', partOfSpeech: ['noun', 'verb'],
    chineseShort: '通行费, 代价, 钟声；征收, 敲钟, 鸣钟, 勾引, 引诱', chineseExplanation: '通行费, 代价, 钟声；征收, 敲钟, 鸣钟, 勾引, 引诱是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A fee levied for the use of roads or bridges (used for maintenance).',
    examples: [{ english: 'The lesson explains the meaning of toll.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toll” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toll”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'quota', term: 'quota', normalizedTerm: 'quota', partOfSpeech: ['noun'],
    chineseShort: '配额, 限额；定额', chineseExplanation: '配额, 限额；定额是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A prescribed number.',
    examples: [{ english: 'The lesson explains the meaning of quota.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quota” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quota”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'diameter', term: 'diameter', normalizedTerm: 'diameter', partOfSpeech: ['noun'],
    chineseShort: '直径；直经, 径', chineseExplanation: '直径；直经, 径是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The length of a straight line passing through the centre of a circle and connecting two points on the circumference.',
    examples: [{ english: 'The lesson explains the meaning of diameter.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diameter” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“diameter”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fox', term: 'fox', normalizedTerm: 'fox', partOfSpeech: ['noun', 'verb'],
    chineseShort: '狐狸, 狡猾的人；奸狡地行动, 生斑, 变酸', chineseExplanation: '狐狸, 狡猾的人；奸狡地行动, 生斑, 变酸是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Alert carnivorous mammal with pointed muzzle and ears and a bushy tail; most are predators that do not hunt in packs.',
    examples: [{ english: 'The lesson explains the meaning of fox.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fox” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fox”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'refuge', term: 'refuge', normalizedTerm: 'refuge', partOfSpeech: ['noun', 'verb'],
    chineseShort: '避难所, 安全地带, 避难, 庇护；躲避', chineseExplanation: '避难所, 安全地带, 避难, 庇护；躲避是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A shelter from danger or hardship.',
    examples: [{ english: 'The lesson explains the meaning of refuge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “refuge” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“refuge”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'intact', term: 'intact', normalizedTerm: 'intact', partOfSpeech: ['adjective'],
    chineseShort: '尚未被人碰过的, 原封不动的, 完整的；完整的, 无伤的', chineseExplanation: '尚未被人碰过的, 原封不动的, 完整的；完整的, 无伤的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(of a woman) having the hymen unbroken.',
    examples: [{ english: 'The passage uses intact to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intact” dalam konteks Bahasa Inggeris British.', chinese: '文章用“intact”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'diesel', term: 'diesel', normalizedTerm: 'diesel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '内燃机, 柴油机, 柴油', chineseExplanation: '内燃机, 柴油机, 柴油是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'German engineer (born in France) who invented the diesel engine (1858-1913).',
    examples: [{ english: 'The lesson explains the meaning of diesel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diesel” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“diesel”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'valuation', term: 'valuation', normalizedTerm: 'valuation', partOfSpeech: ['noun'],
    chineseShort: '评价, 估价, 价值判断；估价, 计价, 评价', chineseExplanation: '评价, 估价, 价值判断；估价, 计价, 评价是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Assessed price.',
    examples: [{ english: 'The lesson explains the meaning of valuation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “valuation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“valuation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fossil', term: 'fossil', normalizedTerm: 'fossil', partOfSpeech: ['noun'],
    chineseShort: '化石, 古物；化石的, 陈腐的, 守旧的', chineseExplanation: '化石, 古物；化石的, 陈腐的, 守旧的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The remains (or an impression) of a plant or animal that existed in a past geological age and that has been excavated from the soil.',
    examples: [{ english: 'The lesson explains the meaning of fossil.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fossil” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fossil”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'shoelace', term: 'shoelace', normalizedTerm: 'shoelace', partOfSpeech: ['noun'],
    chineseShort: '鞋带', chineseExplanation: '穿过鞋面小孔并系紧鞋子的细绳。', englishDefinition: 'A cord passed through a shoe and tied to hold it in place.',
    examples: [{ english: 'Your shoelace is untied.', malay: 'Ayat ini menunjukkan penggunaan perkataan “shoelace” dalam konteks Bahasa Inggeris British.', chinese: '你的鞋带松开了。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'feminist', term: 'feminist', normalizedTerm: 'feminist', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '男女平等主义者', chineseExplanation: '男女平等主义者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A supporter of feminism.',
    examples: [{ english: 'The passage uses feminist to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “feminist” dalam konteks Bahasa Inggeris British.', chinese: '文章用“feminist”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dictate', term: 'dictate', normalizedTerm: 'dictate', partOfSpeech: ['verb', 'noun'],
    chineseShort: '听写, 口述, 口授；口述, 使听写, 命令', chineseExplanation: '听写, 口述, 口授；口述, 使听写, 命令是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An authoritative rule.',
    examples: [{ english: 'The example shows how to use the verb dictate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dictate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“dictate”。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'tolerance', term: 'tolerance', normalizedTerm: 'tolerance', partOfSpeech: ['noun', 'verb'],
    chineseShort: '宽容, 忍受, 容忍, 容许量, 公差；允许误差', chineseExplanation: '宽容, 忍受, 容忍, 容许量, 公差；允许误差是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The power or capacity of an organism to tolerate unfavorable environmental conditions.',
    examples: [{ english: 'The lesson explains the meaning of tolerance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tolerance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tolerance”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fortunate', term: 'fortunate', normalizedTerm: 'fortunate', partOfSpeech: ['adjective'],
    chineseShort: '幸运的, 幸福的', chineseExplanation: '幸运的, 幸福的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having unexpected good fortune.',
    examples: [{ english: 'The passage uses fortunate to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fortunate” dalam konteks Bahasa Inggeris British.', chinese: '文章用“fortunate”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'temptation', term: 'temptation', normalizedTerm: 'temptation', partOfSpeech: ['noun'],
    chineseShort: '诱惑, 诱惑物；诱惑, 诱惑物', chineseExplanation: '诱惑, 诱惑物；诱惑, 诱惑物是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that seduces or has the quality to seduce.',
    examples: [{ english: 'The lesson explains the meaning of temptation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “temptation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“temptation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'continually', term: 'continually', normalizedTerm: 'continually', partOfSpeech: ['adverb'],
    chineseShort: '不断地, 频繁地', chineseExplanation: '不断地, 频繁地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Seemingly without interruption.',
    examples: [{ english: 'The speaker used continually to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “continually” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“continually”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'beard', term: 'beard', normalizedTerm: 'beard', partOfSpeech: ['noun', 'verb'],
    chineseShort: '胡须；抓住胡须, 公开反对', chineseExplanation: '胡须；抓住胡须, 公开反对是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The hair growing on the lower part of a man\'s face.',
    examples: [{ english: 'The lesson explains the meaning of beard.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beard” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“beard”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'grid', term: 'grid', normalizedTerm: 'grid', partOfSpeech: ['noun', 'verb'],
    chineseShort: '格子, 栅格；网格', chineseExplanation: '格子, 栅格；网格是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A pattern of regularly spaced horizontal and vertical lines.',
    examples: [{ english: 'The lesson explains the meaning of grid.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grid” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grid”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'temporarily', term: 'temporarily', normalizedTerm: 'temporarily', partOfSpeech: ['adverb'],
    chineseShort: '暂时, 一时, 临时', chineseExplanation: '暂时, 一时, 临时是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'For a limited time only; not permanently.',
    examples: [{ english: 'The speaker used temporarily to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “temporarily” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“temporarily”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'positively', term: 'positively', normalizedTerm: 'positively', partOfSpeech: ['adverb'],
    chineseShort: '明确地, 肯定地, 无疑地, 确实地, 真正地', chineseExplanation: '明确地, 肯定地, 无疑地, 确实地, 真正地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Extremely.',
    examples: [{ english: 'The speaker used positively to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “positively” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“positively”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unpleasant', term: 'unpleasant', normalizedTerm: 'unpleasant', partOfSpeech: ['adjective'],
    chineseShort: '使人不愉快的, 使人厌恶的, 煞风景的', chineseExplanation: '使人不愉快的, 使人厌恶的, 煞风景的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Disagreeable to the senses, to the mind, or feelings.',
    examples: [{ english: 'The passage uses unpleasant to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unpleasant” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unpleasant”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'globe', term: 'globe', normalizedTerm: 'globe', partOfSpeech: ['noun', 'verb'],
    chineseShort: '球, 球状物, 地球仪, 天体；成球状', chineseExplanation: '球, 球状物, 地球仪, 天体；成球状是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sphere on which a map (especially of the earth) is represented.',
    examples: [{ english: 'The lesson explains the meaning of globe.', malay: 'Ayat ini menunjukkan penggunaan perkataan “globe” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“globe”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'blast', term: 'blast', normalizedTerm: 'blast', partOfSpeech: ['noun', 'verb'],
    chineseShort: '一阵风, 爆炸, 枯萎病；炸, 使枯萎', chineseExplanation: '一阵风, 爆炸, 枯萎病；炸, 使枯萎是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A very long fly ball.',
    examples: [{ english: 'The lesson explains the meaning of blast.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blast” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“blast”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'contempt', term: 'contempt', normalizedTerm: 'contempt', partOfSpeech: ['noun'],
    chineseShort: '轻视, 轻蔑；藐视, 侮辱, 轻视', chineseExplanation: '轻视, 轻蔑；藐视, 侮辱, 轻视是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Lack of respect accompanied by a feeling of intense dislike.',
    examples: [{ english: 'The lesson explains the meaning of contempt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contempt” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“contempt”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'relaxation', term: 'relaxation', normalizedTerm: 'relaxation', partOfSpeech: ['noun'],
    chineseShort: '松弛, 放松, 减轻, 缓和, 休息, 休养；松弛', chineseExplanation: '松弛, 放松, 减轻, 缓和, 休息, 休养；松弛是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(physiology) the gradual lengthening of inactive muscle or muscle fibers.',
    examples: [{ english: 'The lesson explains the meaning of relaxation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relaxation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“relaxation”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'graduation', term: 'graduation', normalizedTerm: 'graduation', partOfSpeech: ['noun'],
    chineseShort: '毕业, 得学位, 分划, 刻度, 分等级；刻度, 分度, 毕业', chineseExplanation: '毕业, 得学位, 分划, 刻度, 分等级；刻度, 分度, 毕业是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The successful completion of a programme of study.',
    examples: [{ english: 'The lesson explains the meaning of graduation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “graduation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“graduation”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'contrary', term: 'contrary', normalizedTerm: 'contrary', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '相反的, 矛盾的, 对立的；相反, 对立面', chineseExplanation: '相反的, 矛盾的, 对立的；相反, 对立面是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Exact opposition.',
    examples: [{ english: 'The lesson explains the meaning of contrary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contrary” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“contrary”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'regain', term: 'regain', normalizedTerm: 'regain', partOfSpeech: ['verb', 'noun'],
    chineseShort: '取回, 恢复, 重回, 复得；回潮', chineseExplanation: '取回, 恢复, 重回, 复得；回潮是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Get or find back; recover the use of v come upon after searching; find the location of something that was missed or lost.',
    examples: [{ english: 'The example shows how to use the verb regain.', malay: 'Ayat ini menunjukkan penggunaan perkataan “regain” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“regain”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'retreat', term: 'retreat', normalizedTerm: 'retreat', partOfSpeech: ['noun', 'verb'],
    chineseShort: '休息寓所, 撤退, 隐居, 退避；撤退, 隐退, 向后倾', chineseExplanation: '休息寓所, 撤退, 隐居, 退避；撤退, 隐退, 向后倾是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(military) withdrawal of troops to a more favourable position to escape the enemy\'s superior forces or after a defeat.',
    examples: [{ english: 'The lesson explains the meaning of retreat.', malay: 'Ayat ini menunjukkan penggunaan perkataan “retreat” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“retreat”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'insufficient', term: 'insufficient', normalizedTerm: 'insufficient', partOfSpeech: ['adjective'],
    chineseShort: '不够的, 不能胜任的, 不充足的；不足的, 不充分的, 不能胜任的', chineseExplanation: '不够的, 不能胜任的, 不充足的；不足的, 不充分的, 不能胜任的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Of a quantity not able to fulfill a need or requirement.',
    examples: [{ english: 'The passage uses insufficient to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insufficient” dalam konteks Bahasa Inggeris British.', chinese: '文章用“insufficient”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'reproduction', term: 'reproduction', normalizedTerm: 'reproduction', partOfSpeech: ['noun'],
    chineseShort: '再现, 复制, 生殖, 繁殖, 复制品；生殖, 复现', chineseExplanation: '再现, 复制, 生殖, 繁殖, 复制品；生殖, 复现是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The process of generating offspring.',
    examples: [{ english: 'The lesson explains the meaning of reproduction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reproduction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reproduction”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'gravel', term: 'gravel', normalizedTerm: 'gravel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '砂砾, 碎石；沙砾, 尿沙', chineseExplanation: '砂砾, 碎石；沙砾, 尿沙是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Rock fragments and pebbles.',
    examples: [{ english: 'The lesson explains the meaning of gravel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “gravel” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“gravel”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'noble', term: 'noble', normalizedTerm: 'noble', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '贵族；高贵的, 高尚的, 贵族的, 辉煌的', chineseExplanation: '贵族；高贵的, 高尚的, 贵族的, 辉煌的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Of or belonging to or constituting the hereditary aristocracy especially as derived from feudal times.',
    examples: [{ english: 'The passage uses noble to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “noble” dalam konteks Bahasa Inggeris British.', chinese: '文章用“noble”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'blond', term: 'blond', normalizedTerm: 'blond', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '金发的；白肤碧眼金发的人', chineseExplanation: '金发的；白肤碧眼金发的人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person with fair skin and hair.',
    examples: [{ english: 'The passage uses blond to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blond” dalam konteks Bahasa Inggeris British.', chinese: '文章用“blond”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'harvest', term: 'harvest', normalizedTerm: 'harvest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '收获, 成果, 收获物, 收获期；收割, 收获', chineseExplanation: '收获, 成果, 收获物, 收获期；收割, 收获是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The consequence of an effort or activity.',
    examples: [{ english: 'The lesson explains the meaning of harvest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “harvest” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“harvest”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'negligence', term: 'negligence', normalizedTerm: 'negligence', partOfSpeech: ['noun'],
    chineseShort: '疏忽, 粗心大意, 忽视；疏忽, 过失', chineseExplanation: '疏忽, 粗心大意, 忽视；疏忽, 过失是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Failure to act with the prudence that a reasonable person would exercise under the same circumstances.',
    examples: [{ english: 'The lesson explains the meaning of negligence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “negligence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“negligence”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'consecutive', term: 'consecutive', normalizedTerm: 'consecutive', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '连续的, 联贯的；连续的', chineseExplanation: '连续的, 联贯的；连续的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In regular succession without gaps.',
    examples: [{ english: 'The passage uses consecutive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consecutive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“consecutive”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'lace', term: 'lace', normalizedTerm: 'lace', partOfSpeech: ['noun', 'verb'],
    chineseShort: '饰带, 花边, 缎带, 鞋带；结带子, 饰以花边', chineseExplanation: '饰带, 花边, 缎带, 鞋带；结带子, 饰以花边是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A cord that is drawn through eyelets or around hooks in order to draw together two edges (as of a shoe or garment).',
    examples: [{ english: 'The lesson explains the meaning of lace.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lace” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lace”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'scarf', term: 'scarf', normalizedTerm: 'scarf', partOfSpeech: ['noun'],
    chineseShort: '围巾；头巾', chineseExplanation: '围在颈部或头部用于保暖或装饰的一条布。', englishDefinition: 'A length of cloth worn around the neck or head for warmth or decoration.',
    examples: [{ english: 'He wore a scarf because it was cold.', malay: 'Ayat ini menunjukkan penggunaan perkataan “scarf” dalam konteks Bahasa Inggeris British.', chinese: '天气很冷，所以他戴了围巾。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'greater', term: 'greater', normalizedTerm: 'greater', partOfSpeech: ['adjective'],
    chineseShort: '大的', chineseExplanation: '大的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Greater in size or importance or degree.',
    examples: [{ english: 'The passage uses greater to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “greater” dalam konteks Bahasa Inggeris British.', chinese: '文章用“greater”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'membrane', term: 'membrane', normalizedTerm: 'membrane', partOfSpeech: ['noun'],
    chineseShort: '薄膜, 膜, 羊皮纸；膜', chineseExplanation: '薄膜, 膜, 羊皮纸；膜是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A thin pliable sheet of material.',
    examples: [{ english: 'The lesson explains the meaning of membrane.', malay: 'Ayat ini menunjukkan penggunaan perkataan “membrane” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“membrane”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'node', term: 'node', normalizedTerm: 'node', partOfSpeech: ['noun'],
    chineseShort: '节, 结节, 瘤；节点', chineseExplanation: '节, 结节, 瘤；节点是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A connecting point at which several lines come together.',
    examples: [{ english: 'The lesson explains the meaning of node.', malay: 'Ayat ini menunjukkan penggunaan perkataan “node” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“node”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fog', term: 'fog', normalizedTerm: 'fog', partOfSpeech: ['noun', 'verb'],
    chineseShort: '雾, 迷惑, 最生草, 苔藓；被雾笼罩, 变模糊', chineseExplanation: '雾, 迷惑, 最生草, 苔藓；被雾笼罩, 变模糊是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Droplets of water vapor suspended in the air near the ground.',
    examples: [{ english: 'The lesson explains the meaning of fog.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fog” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fog”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'vacuum', term: 'vacuum', normalizedTerm: 'vacuum', partOfSpeech: ['noun', 'verb'],
    chineseShort: '真空, 空间, 真空吸尘器；真空的, 产生真空的, 利用真空的', chineseExplanation: '真空, 空间, 真空吸尘器；真空的, 产生真空的, 利用真空的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The absence of matter.',
    examples: [{ english: 'The lesson explains the meaning of vacuum.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vacuum” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vacuum”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'respectable', term: 'respectable', normalizedTerm: 'respectable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '值得尊重的, 人格高尚的, 相当数量的；品格高尚的人', chineseExplanation: '值得尊重的, 人格高尚的, 相当数量的；品格高尚的人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Characterised by socially or conventionally acceptable morals.',
    examples: [{ english: 'The passage uses respectable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “respectable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“respectable”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dislike', term: 'dislike', normalizedTerm: 'dislike', partOfSpeech: ['noun', 'verb'],
    chineseShort: '嫌恶；讨厌, 不喜欢', chineseExplanation: '嫌恶；讨厌, 不喜欢是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A feeling of aversion or antipathy.',
    examples: [{ english: 'The lesson explains the meaning of dislike.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dislike” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dislike”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'obey', term: 'obey', normalizedTerm: 'obey', partOfSpeech: ['verb'],
    chineseShort: '服从, 遵从, 顺从；服从', chineseExplanation: '服从, 遵从, 顺从；服从是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be obedient to.',
    examples: [{ english: 'The example shows how to use the verb obey.', malay: 'Ayat ini menunjukkan penggunaan perkataan “obey” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“obey”。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'fond', term: 'fond', normalizedTerm: 'fond', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '喜欢的, 宠爱的, 温柔的', chineseExplanation: '喜欢的, 宠爱的, 温柔的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(followed by `of\' or `to\') having a strong preference or liking for.',
    examples: [{ english: 'The passage uses fond to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fond” dalam konteks Bahasa Inggeris British.', chinese: '文章用“fond”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'hammer', term: 'hammer', normalizedTerm: 'hammer', partOfSpeech: ['noun', 'verb'],
    chineseShort: '锤, 铁锤, 钉锤；锤打, 敲打, 钉', chineseExplanation: '锤, 铁锤, 钉锤；锤打, 敲打, 钉是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The part of a gunlock that strikes the percussion cap when the trigger is pulled.',
    examples: [{ english: 'The lesson explains the meaning of hammer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hammer” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hammer”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'queue', term: 'queue', normalizedTerm: 'queue', partOfSpeech: ['noun', 'verb'],
    chineseShort: '辫子, 一队人, 队列；使排队, 将...梳成辫子', chineseExplanation: '辫子, 一队人, 队列；使排队, 将...梳成辫子是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A line of people or vehicles waiting for something.',
    examples: [{ english: 'The lesson explains the meaning of queue.', malay: 'Ayat ini menunjukkan penggunaan perkataan “queue” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“queue”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'confirmation', term: 'confirmation', normalizedTerm: 'confirmation', partOfSpeech: ['noun'],
    chineseShort: '证实, 证明, 批准, 确认；确认', chineseExplanation: '证实, 证明, 批准, 确认；确认是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Additional proof that something that was believed (some fact or hypothesis or theory) is correct.',
    examples: [{ english: 'The lesson explains the meaning of confirmation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “confirmation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“confirmation”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'recorder', term: 'recorder', normalizedTerm: 'recorder', partOfSpeech: ['noun'],
    chineseShort: '记录员, 录音机；记录器', chineseExplanation: '记录员, 录音机；记录器是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Equipment for making records.',
    examples: [{ english: 'The lesson explains the meaning of recorder.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recorder” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“recorder”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'foolish', term: 'foolish', normalizedTerm: 'foolish', partOfSpeech: ['adjective'],
    chineseShort: '愚蠢的, 傻的', chineseExplanation: '愚蠢的, 傻的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Devoid of good sense or judgement.',
    examples: [{ english: 'The passage uses foolish to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foolish” dalam konteks Bahasa Inggeris British.', chinese: '文章用“foolish”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'interactive', term: 'interactive', normalizedTerm: 'interactive', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '相互作用的, 相互影响的；交互, 人机对话的', chineseExplanation: '相互作用的, 相互影响的；交互, 人机对话的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Used especially of drugs or muscles that work together so the total effect is greater than the sum of the two (or more) s capable of acting on or influencing each other.',
    examples: [{ english: 'The passage uses interactive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interactive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“interactive”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'intake', term: 'intake', normalizedTerm: 'intake', partOfSpeech: ['noun', 'verb'],
    chineseShort: '入口, 吸入, 吸入量；摄取量', chineseExplanation: '入口, 吸入, 吸入量；摄取量是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An opening through which fluid is admitted to a tube or container.',
    examples: [{ english: 'The lesson explains the meaning of intake.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intake” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intake”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unaware', term: 'unaware', normalizedTerm: 'unaware', partOfSpeech: ['adjective'],
    chineseShort: '未认识到的, 不知道的；不知道的, 不察觉的, 无意的', chineseExplanation: '未认识到的, 不知道的；不知道的, 不察觉的, 无意的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(often followed by `of\') not aware.',
    examples: [{ english: 'The passage uses unaware to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unaware” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unaware”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'compassion', term: 'compassion', normalizedTerm: 'compassion', partOfSpeech: ['noun', 'verb'],
    chineseShort: '同情, 怜悯', chineseExplanation: '同情, 怜悯是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A deep awareness of and sympathy for another\'s suffering.',
    examples: [{ english: 'The lesson explains the meaning of compassion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compassion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“compassion”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'congregation', term: 'congregation', normalizedTerm: 'congregation', partOfSpeech: ['noun'],
    chineseShort: '集合, 聚集；集会, 人一, 红衣主教会议', chineseExplanation: '集合, 聚集；集会, 人一, 红衣主教会议是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A group of people who adhere to a common faith and habitually attend a given church.',
    examples: [{ english: 'The lesson explains the meaning of congregation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “congregation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“congregation”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'mercy', term: 'mercy', normalizedTerm: 'mercy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '仁慈, 宽恕, 慈悲, 怜悯, 幸运；权宜处置权, 决定权, 宽恕', chineseExplanation: '仁慈, 宽恕, 慈悲, 怜悯, 幸运；权宜处置权, 决定权, 宽恕是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something for which to be thankful.',
    examples: [{ english: 'The lesson explains the meaning of mercy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mercy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“mercy”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'beautifully', term: 'beautifully', normalizedTerm: 'beautifully', partOfSpeech: ['adverb'],
    chineseShort: '美好地, 漂亮地', chineseExplanation: '美好地, 漂亮地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In a beautiful manner.',
    examples: [{ english: 'The speaker used beautifully to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beautifully” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“beautifully”补充细节。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'competent', term: 'competent', normalizedTerm: 'competent', partOfSpeech: ['adjective'],
    chineseShort: '能干的, 胜任的, 有效的, 足够的；有权的, 授权的, 胜任的', chineseExplanation: '能干的, 胜任的, 有效的, 足够的；有权的, 授权的, 胜任的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Properly or sufficiently qualified or capable or efficient.',
    examples: [{ english: 'The passage uses competent to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “competent” dalam konteks Bahasa Inggeris British.', chinese: '文章用“competent”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'tenure', term: 'tenure', normalizedTerm: 'tenure', partOfSpeech: ['noun', 'verb'],
    chineseShort: '享有, 保有期；占有, 占有权', chineseExplanation: '享有, 保有期；占有, 占有权是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The term during which some position is held.',
    examples: [{ english: 'The lesson explains the meaning of tenure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tenure” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tenure”的含义。' }], level: 2, cefr: 'B1', categories: ['Academic'],
  },
  {
    id: 'wit', term: 'wit', normalizedTerm: 'wit', partOfSpeech: ['noun', 'verb'],
    chineseShort: '机智, 智力, 头脑, 理智, 妙语, 机智的人', chineseExplanation: '机智, 智力, 头脑, 理智, 妙语, 机智的人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A message whose ingenuity or verbal skill or incongruity has the power to evoke laughter.',
    examples: [{ english: 'The lesson explains the meaning of wit.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wit” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wit”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'commentary', term: 'commentary', normalizedTerm: 'commentary', partOfSpeech: ['noun'],
    chineseShort: '注释, 评论, 说明；注释, 评注, 评论', chineseExplanation: '注释, 评论, 说明；注释, 评注, 评论是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A written explanation or criticism or illustration that is added to a book or other textual material.',
    examples: [{ english: 'The lesson explains the meaning of commentary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “commentary” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“commentary”的含义。' }], level: 2, cefr: 'B1', categories: ['School'],
  },
  {
    id: 'orthodox', term: 'orthodox', normalizedTerm: 'orthodox', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '正统的, 传统的, 惯常的', chineseExplanation: '正统的, 传统的, 惯常的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Of or pertaining to or characteristic of Judaism.',
    examples: [{ english: 'The lesson explains the meaning of orthodox.', malay: 'Ayat ini menunjukkan penggunaan perkataan “orthodox” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“orthodox”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'disagreement', term: 'disagreement', normalizedTerm: 'disagreement', partOfSpeech: ['noun'],
    chineseShort: '不合, 争论, 不一致；不一致, 不同意, 陪审团的意见不一', chineseExplanation: '不合, 争论, 不一致；不一致, 不同意, 陪审团的意见不一是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A conflict of people\'s opinions or actions or characters.',
    examples: [{ english: 'The lesson explains the meaning of disagreement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disagreement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disagreement”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'knot', term: 'knot', normalizedTerm: 'knot', partOfSpeech: ['noun', 'verb'],
    chineseShort: '结, 群, 难题；打结, 纠缠', chineseExplanation: '结, 群, 难题；打结, 纠缠是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A tight cluster of people or things.',
    examples: [{ english: 'The lesson explains the meaning of knot.', malay: 'Ayat ini menunjukkan penggunaan perkataan “knot” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“knot”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'warfare', term: 'warfare', normalizedTerm: 'warfare', partOfSpeech: ['noun', 'verb'],
    chineseShort: '战争, 战斗, 交战, 斗争, 竞争；战事, 作战, 交战', chineseExplanation: '战争, 战斗, 交战, 斗争, 竞争；战事, 作战, 交战是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The waging of armed conflict against an enemy n an active struggle between competing entities.',
    examples: [{ english: 'The lesson explains the meaning of warfare.', malay: 'Ayat ini menunjukkan penggunaan perkataan “warfare” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“warfare”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'glow', term: 'glow', normalizedTerm: 'glow', partOfSpeech: ['noun', 'verb'],
    chineseShort: '赤热, 光辉, 热情, 热烈, 红光；发红光, 红光焕发, 发热, 洋溢, 激动', chineseExplanation: '赤热, 光辉, 热情, 热烈, 红光；发红光, 红光焕发, 发热, 洋溢, 激动是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A feeling of considerable warmth.',
    examples: [{ english: 'The lesson explains the meaning of glow.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glow” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“glow”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'unacceptable', term: 'unacceptable', normalizedTerm: 'unacceptable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '无法接受的, 不受欢迎的；不能接受的, 不受欢迎的, 难以承认的', chineseExplanation: '无法接受的, 不受欢迎的；不能接受的, 不受欢迎的, 难以承认的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not adequate to give satisfaction.',
    examples: [{ english: 'The passage uses unacceptable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unacceptable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unacceptable”来描述这种情况。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'hampshire', term: 'hampshire', normalizedTerm: 'hampshire', partOfSpeech: ['noun'],
    chineseShort: '汉普郡（英国南部之一郡）', chineseExplanation: '汉普郡（英国南部之一郡）是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A county of southern England on the English Channel.',
    examples: [{ english: 'The lesson explains the meaning of hampshire.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hampshire” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hampshire”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'dive', term: 'dive', normalizedTerm: 'dive', partOfSpeech: ['noun', 'verb'],
    chineseShort: '潜水, 跳水；跳水, 俯冲, 猛冲', chineseExplanation: '潜水, 跳水；跳水, 俯冲, 猛冲是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A headlong plunge into water.',
    examples: [{ english: 'The lesson explains the meaning of dive.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dive” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dive”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'valve', term: 'valve', normalizedTerm: 'valve', partOfSpeech: ['noun', 'verb'],
    chineseShort: '活瓣, 阀, 活门；装阀, 用阀调节', chineseExplanation: '活瓣, 阀, 活门；装阀, 用阀调节是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A structure in a hollow organ (like the heart) with a flap to insure one-way flow of fluid through it.',
    examples: [{ english: 'The lesson explains the meaning of valve.', malay: 'Ayat ini menunjukkan penggunaan perkataan “valve” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“valve”的含义。' }], level: 2, cefr: 'B1', categories: ['Technology'],
  },
  {
    id: 'memo', term: 'memo', normalizedTerm: 'memo', partOfSpeech: ['noun', 'verb'],
    chineseShort: '备忘录；备忘录', chineseExplanation: '备忘录；备忘录是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A written proposal or reminder.',
    examples: [{ english: 'The lesson explains the meaning of memo.', malay: 'Ayat ini menunjukkan penggunaan perkataan “memo” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“memo”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'santa', term: 'santa', normalizedTerm: 'santa', partOfSpeech: ['noun'],
    chineseShort: '圣诞老人（等于Santa Claus）', chineseExplanation: '圣诞老人（等于Santa Claus）是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The legendary patron saint of children; an imaginary being who is thought to bring presents to children at Christmas.',
    examples: [{ english: 'The lesson explains the meaning of santa.', malay: 'Ayat ini menunjukkan penggunaan perkataan “santa” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“santa”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'revival', term: 'revival', normalizedTerm: 'revival', partOfSpeech: ['noun'],
    chineseShort: '复兴, 复活, 恢复精神, 苏醒；复苏, 回生, 精神重振', chineseExplanation: '复兴, 复活, 恢复精神, 苏醒；复苏, 回生, 精神重振是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Bringing again into activity and prominence.',
    examples: [{ english: 'The lesson explains the meaning of revival.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revival” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“revival”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'tommy', term: 'tommy', normalizedTerm: 'tommy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '配给面包, 实物工资制；实物工资制', chineseExplanation: '配给面包, 实物工资制；实物工资制是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Bread, -- generally a penny roll; the supply of food carried by workmen as their daily allowance.',
    examples: [{ english: 'The lesson explains the meaning of tommy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tommy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tommy”的含义。' }], level: 2, cefr: 'B1', categories: ['Business'],
  },
  {
    id: 'torch', term: 'torch', normalizedTerm: 'torch', partOfSpeech: ['noun', 'verb'],
    chineseShort: '火把, 启发之物；火炬', chineseExplanation: '火把, 启发之物；火炬是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A light usually carried in the hand; consists of some flammable substance.',
    examples: [{ english: 'The lesson explains the meaning of torch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “torch” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“torch”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'kidney', term: 'kidney', normalizedTerm: 'kidney', partOfSpeech: ['noun'],
    chineseShort: '肾, 个性；肾', chineseExplanation: '肾, 个性；肾是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Either of two bean-shaped excretory organs that filter wastes (especially urea) from the blood and excrete them and water in urine.',
    examples: [{ english: 'The lesson explains the meaning of kidney.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kidney” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“kidney”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
  {
    id: 'knight', term: 'knight', normalizedTerm: 'knight', partOfSpeech: ['noun', 'verb'],
    chineseShort: '骑士, 爵士；授以爵位', chineseExplanation: '骑士, 爵士；授以爵位是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Originally a person of noble birth trained to arms and chivalry; today in Great Britain a person honored by the sovereign for personal merit.',
    examples: [{ english: 'The lesson explains the meaning of knight.', malay: 'Ayat ini menunjukkan penggunaan perkataan “knight” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“knight”的含义。' }], level: 2, cefr: 'B1', categories: ['Travel'],
  },
  {
    id: 'emergence', term: 'emergence', normalizedTerm: 'emergence', partOfSpeech: ['noun'],
    chineseShort: '出现, 浮现, 发生', chineseExplanation: '出现, 浮现, 发生是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The gradual beginning or coming forth.',
    examples: [{ english: 'The lesson explains the meaning of emergence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emergence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“emergence”的含义。' }], level: 2, cefr: 'B1', categories: ['Daily English'],
  },
] satisfies readonly VocabularyItem[]
