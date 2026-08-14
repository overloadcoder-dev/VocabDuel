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
  {
    id: 'abstract', term: 'abstract', normalizedTerm: 'abstract', partOfSpeech: ['adjective'], ipa: '/æbstrˈækt/',
    chineseShort: '抽象的；理论性的', chineseExplanation: '形容某人、事物或情况具有“抽象的；理论性的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing as an idea rather than as a physical object.',
    examples: [{ english: 'The course begins with abstract ideas before moving to practical examples.', chinese: '这门课程先讲抽象概念，再进入实际例子。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'acceptable', term: 'acceptable', normalizedTerm: 'acceptable', partOfSpeech: ['adjective'], ipa: '/æksˈɛptəbəl/',
    chineseShort: '可接受的；合意的', chineseExplanation: '形容某人、事物或情况具有“可接受的；合意的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Good enough to be approved or considered satisfactory.',
    examples: [{ english: 'The final proposal was acceptable to both sides.', chinese: '最终方案双方都可以接受。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'accompany', term: 'accompany', normalizedTerm: 'accompany', partOfSpeech: ['verb'], ipa: '/əkˈʌmpəni/',
    chineseShort: '陪伴；伴随', chineseExplanation: '表示“陪伴；伴随”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To go somewhere with someone or to happen together with something.',
    examples: [{ english: 'A short explanation should accompany every chart in the report.', chinese: '报告中的每张图表都应附有简短说明。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'accomplish', term: 'accomplish', normalizedTerm: 'accomplish', partOfSpeech: ['verb'], ipa: '/əkˈɑmplɪʃ/',
    chineseShort: '完成；实现', chineseExplanation: '表示“完成；实现”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To succeed in doing or completing something.',
    examples: [{ english: 'The team accomplished its main goal ahead of schedule.', chinese: '团队提前完成了主要目标。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'accurate', term: 'accurate', normalizedTerm: 'accurate', partOfSpeech: ['adjective'], ipa: '/ˈækjɚət/',
    chineseShort: '准确的；精确的', chineseExplanation: '形容某人、事物或情况具有“准确的；精确的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Correct and free from mistakes.',
    examples: [{ english: 'Accurate data is essential for a reliable conclusion.', chinese: '准确的数据对于得出可靠结论至关重要。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'acknowledge', term: 'acknowledge', normalizedTerm: 'acknowledge', partOfSpeech: ['verb'], ipa: '/æknˈɑlɪdʒ/',
    chineseShort: '承认；认可', chineseExplanation: '表示“承认；认可”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To accept or admit that something is true or exists.',
    examples: [{ english: 'The company acknowledged that the service had failed.', chinese: '公司承认该服务出现了故障。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'adequate', term: 'adequate', normalizedTerm: 'adequate', partOfSpeech: ['adjective'], ipa: '/ˈædəkwət/',
    chineseShort: '足够的；合格的', chineseExplanation: '形容某人、事物或情况具有“足够的；合格的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Enough in quantity or good enough in quality for a particular purpose.',
    examples: [{ english: 'The school needs adequate funding to maintain its facilities.', chinese: '学校需要足够的资金来维护设施。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'adjust', term: 'adjust', normalizedTerm: 'adjust', partOfSpeech: ['verb'], ipa: '/ədʒˈʌst/',
    chineseShort: '调整；适应', chineseExplanation: '表示“调整；适应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something slightly or adapt to a new situation.',
    examples: [{ english: 'You may need to adjust your schedule during the exam period.', chinese: '考试期间你可能需要调整时间表。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'adopt', term: 'adopt', normalizedTerm: 'adopt', partOfSpeech: ['verb'], ipa: '/ədˈɑpt/',
    chineseShort: '采用；采纳', chineseExplanation: '表示“采用；采纳”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To begin to use a method, idea, policy, or practice.',
    examples: [{ english: 'Many companies have adopted flexible working arrangements.', chinese: '许多公司已经采用弹性工作安排。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'advance', term: 'advance', normalizedTerm: 'advance', partOfSpeech: ['noun', 'verb'], ipa: '/ədvˈæns/',
    chineseShort: '进展；推进', chineseExplanation: '可作多种词性使用，核心意思包括“进展；推进”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Progress or development, or to move something forward.',
    examples: [{ english: 'Recent advances in technology have improved online learning.', chinese: '近期的技术进步改善了在线学习。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'advocate', term: 'advocate', normalizedTerm: 'advocate', partOfSpeech: ['verb'], ipa: '/ˈædvəkət/',
    chineseShort: '提倡；主张', chineseExplanation: '表示“提倡；主张”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To publicly support or recommend a particular idea or policy.',
    examples: [{ english: 'Many experts advocate stricter rules on data privacy.', chinese: '许多专家主张制定更严格的数据隐私规则。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'allocate', term: 'allocate', normalizedTerm: 'allocate', partOfSpeech: ['verb'], ipa: '/ˈæləkˌeɪt/',
    chineseShort: '分配；拨给', chineseExplanation: '表示“分配；拨给”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To officially give resources, time, or money for a particular purpose.',
    examples: [{ english: 'The council allocated more money to public transport.', chinese: '市议会为公共交通分配了更多资金。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'alter', term: 'alter', normalizedTerm: 'alter', partOfSpeech: ['verb'], ipa: '/ˈɔltɚ/',
    chineseShort: '改变；修改', chineseExplanation: '表示“改变；修改”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something, usually slightly.',
    examples: [{ english: 'The new evidence may alter our understanding of the issue.', chinese: '新证据可能会改变我们对这个问题的理解。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'alternative', term: 'alternative', normalizedTerm: 'alternative', partOfSpeech: ['noun', 'adjective'], ipa: '/ɔltˈɝnətɪv/',
    chineseShort: '替代方案；替代的', chineseExplanation: '可作多种词性使用，核心意思包括“替代方案；替代的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Another choice or possibility that can be used instead.',
    examples: [{ english: 'Public transport offers an alternative to driving in the city.', chinese: '公共交通为城市出行提供了驾车之外的选择。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'anticipate', term: 'anticipate', normalizedTerm: 'anticipate', partOfSpeech: ['verb'], ipa: '/æntˈɪsəpˌeɪt/',
    chineseShort: '预期；预料', chineseExplanation: '表示“预期；预料”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To expect that something will happen and prepare for it.',
    examples: [{ english: 'Businesses must anticipate changes in customer demand.', chinese: '企业必须预判顾客需求的变化。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'apparent', term: 'apparent', normalizedTerm: 'apparent', partOfSpeech: ['adjective'], ipa: '/əpˈɛrənt/',
    chineseShort: '明显的；表面上的', chineseExplanation: '形容某人、事物或情况具有“明显的；表面上的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easy to notice or understand, though sometimes not actually true.',
    examples: [{ english: 'It became apparent that the original plan was too expensive.', chinese: '很明显，原来的计划成本太高。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'appeal', term: 'appeal', normalizedTerm: 'appeal', partOfSpeech: ['noun', 'verb'], ipa: '/əpˈil/',
    chineseShort: '吸引力；呼吁；吸引', chineseExplanation: '可作多种词性使用，核心意思包括“吸引力；呼吁；吸引”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A quality that attracts interest, or a serious request for help or support.',
    examples: [{ english: 'The campaign has strong appeal among younger voters.', chinese: '这项活动对年轻选民有很强的吸引力。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'approach', term: 'approach', normalizedTerm: 'approach', partOfSpeech: ['noun', 'verb'], ipa: '/əprˈoʊtʃ/',
    chineseShort: '方法；处理；接近', chineseExplanation: '可作多种词性使用，核心意思包括“方法；处理；接近”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A way of dealing with something, or to move nearer to it.',
    examples: [{ english: 'We need a more practical approach to solving the problem.', chinese: '我们需要一种更实际的方法来解决这个问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'appropriate', term: 'appropriate', normalizedTerm: 'appropriate', partOfSpeech: ['adjective'], ipa: '/əprˈoʊpriət/',
    chineseShort: '合适的；恰当的', chineseExplanation: '形容某人、事物或情况具有“合适的；恰当的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Suitable or correct for a particular situation or purpose.',
    examples: [{ english: 'Please choose language that is appropriate for a formal report.', chinese: '请选择适合正式报告的语言。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'approval', term: 'approval', normalizedTerm: 'approval', partOfSpeech: ['noun'], ipa: '/əprˈuvəl/',
    chineseShort: '批准；赞同', chineseExplanation: '指与“批准；赞同”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Official permission or a positive opinion about something.',
    examples: [{ english: 'The project cannot begin without government approval.', chinese: '没有政府批准，这个项目无法开始。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'arise', term: 'arise', normalizedTerm: 'arise', partOfSpeech: ['verb'], ipa: '/ɚˈaɪz/',
    chineseShort: '出现；产生', chineseExplanation: '表示“出现；产生”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To happen or begin to exist, especially a problem or situation.',
    examples: [{ english: 'Unexpected problems may arise during the testing stage.', chinese: '测试阶段可能会出现意想不到的问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'assess', term: 'assess', normalizedTerm: 'assess', partOfSpeech: ['verb'], ipa: '/əsˈɛs/',
    chineseShort: '评估；判断', chineseExplanation: '表示“评估；判断”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To judge the quality, importance, size, or value of something.',
    examples: [{ english: 'Teachers assess students through several different tasks.', chinese: '教师通过多种不同的任务来评估学生。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'assign', term: 'assign', normalizedTerm: 'assign', partOfSpeech: ['verb'], ipa: '/əsˈaɪn/',
    chineseShort: '分配；指派', chineseExplanation: '表示“分配；指派”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give someone a particular job, duty, or piece of work.',
    examples: [{ english: 'The manager assigned each employee a specific task.', chinese: '经理给每位员工分配了具体任务。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'assist', term: 'assist', normalizedTerm: 'assist', partOfSpeech: ['verb'], ipa: '/əsˈɪst/',
    chineseShort: '协助；帮助', chineseExplanation: '表示“协助；帮助”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To help someone do something.',
    examples: [{ english: 'Staff are available to assist customers with online payments.', chinese: '工作人员可以协助顾客进行网上付款。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'associate', term: 'associate', normalizedTerm: 'associate', partOfSpeech: ['verb'], ipa: '/əsˈoʊsiət/',
    chineseShort: '联系；联想', chineseExplanation: '表示“联系；联想”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To connect someone or something in your mind with another thing.',
    examples: [{ english: 'People often associate exercise with better mental health.', chinese: '人们常把运动与更好的心理健康联系起来。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'assume', term: 'assume', normalizedTerm: 'assume', partOfSpeech: ['verb'], ipa: '/əsˈum/',
    chineseShort: '假设；认为', chineseExplanation: '表示“假设；认为”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To accept something as true without having definite proof.',
    examples: [{ english: 'We should not assume that all users have the same needs.', chinese: '我们不应假设所有用户都有相同的需求。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'attempt', term: 'attempt', normalizedTerm: 'attempt', partOfSpeech: ['noun', 'verb'], ipa: '/ətˈɛmpt/',
    chineseShort: '尝试；企图', chineseExplanation: '可作多种词性使用，核心意思包括“尝试；企图”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An effort to do something, especially something difficult.',
    examples: [{ english: 'The first attempt to repair the system was unsuccessful.', chinese: '第一次修复系统的尝试没有成功。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'authority', term: 'authority', normalizedTerm: 'authority', partOfSpeech: ['noun'], ipa: '/əθˈɔrəti/',
    chineseShort: '权力；当局；权威', chineseExplanation: '指与“权力；当局；权威”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The power or right to make decisions, or an official organization with that power.',
    examples: [{ english: 'Local authorities are responsible for waste collection.', chinese: '地方当局负责垃圾收集。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'automatic', term: 'automatic', normalizedTerm: 'automatic', partOfSpeech: ['adjective'], ipa: '/ˌɔtəmˈætɪk/',
    chineseShort: '自动的；自然发生的', chineseExplanation: '形容某人、事物或情况具有“自动的；自然发生的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Working by itself with little or no direct human control.',
    examples: [{ english: 'The system sends an automatic warning when storage is nearly full.', chinese: '当储存空间快满时，系统会自动发出警告。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'awareness', term: 'awareness', normalizedTerm: 'awareness', partOfSpeech: ['noun'], ipa: '/əwˈɛrnəs/',
    chineseShort: '意识；认识', chineseExplanation: '指与“意识；认识”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Knowledge or understanding of a situation or subject.',
    examples: [{ english: 'The campaign raised public awareness of online scams.', chinese: '这项活动提高了公众对网络诈骗的认识。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'barrier', term: 'barrier', normalizedTerm: 'barrier', partOfSpeech: ['noun'], ipa: '/bˈæriɚ/',
    chineseShort: '障碍；屏障', chineseExplanation: '指与“障碍；屏障”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that prevents movement, progress, or communication.',
    examples: [{ english: 'High costs remain a major barrier to further expansion.', chinese: '高成本仍然是进一步扩张的主要障碍。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'basis', term: 'basis', normalizedTerm: 'basis', partOfSpeech: ['noun'], ipa: '/bˈeɪsəs/',
    chineseShort: '基础；依据', chineseExplanation: '指与“基础；依据”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The main reason, principle, or foundation on which something is developed.',
    examples: [{ english: 'Decisions should be made on the basis of reliable evidence.', chinese: '决策应以可靠证据为依据。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'behalf', term: 'behalf', normalizedTerm: 'behalf', partOfSpeech: ['noun'], ipa: '/bɪhˈæf/',
    chineseShort: '代表；为了某人的利益', chineseExplanation: '指与“代表；为了某人的利益”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Used when acting for or representing another person or group.',
    examples: [{ english: 'She spoke on behalf of the entire research team.', chinese: '她代表整个研究团队发言。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'beneficial', term: 'beneficial', normalizedTerm: 'beneficial', partOfSpeech: ['adjective'], ipa: '/bˌɛnəfˈɪʃəl/',
    chineseShort: '有益的；有帮助的', chineseExplanation: '形容某人、事物或情况具有“有益的；有帮助的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Having a helpful or positive effect.',
    examples: [{ english: 'Regular feedback is beneficial to language learners.', chinese: '定期反馈对语言学习者有帮助。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'budget', term: 'budget', normalizedTerm: 'budget', partOfSpeech: ['noun', 'verb'], ipa: '/bˈʌdʒɪt/',
    chineseShort: '预算；编制预算', chineseExplanation: '可作多种词性使用，核心意思包括“预算；编制预算”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A plan for how money will be spent over a period of time.',
    examples: [{ english: 'The department must work within a limited budget this year.', chinese: '该部门今年必须在有限预算内运作。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'capacity', term: 'capacity', normalizedTerm: 'capacity', partOfSpeech: ['noun'], ipa: '/kəpˈæsəti/',
    chineseShort: '能力；容量', chineseExplanation: '指与“能力；容量”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The ability or maximum amount that someone or something can contain or produce.',
    examples: [{ english: 'The hospital is operating at full capacity.', chinese: '这家医院正以满负荷运作。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'challenge', term: 'challenge', normalizedTerm: 'challenge', partOfSpeech: ['noun', 'verb'], ipa: '/tʃˈæləndʒ/',
    chineseShort: '挑战；质疑', chineseExplanation: '可作多种词性使用，核心意思包括“挑战；质疑”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A difficult task or situation, or to question whether something is correct.',
    examples: [{ english: 'Climate change presents a serious challenge to many countries.', chinese: '气候变化给许多国家带来了严重挑战。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'circumstance', term: 'circumstance', normalizedTerm: 'circumstance', partOfSpeech: ['noun'], ipa: '/sˈɝkəmstˌæns/',
    chineseShort: '情况；情形', chineseExplanation: '指与“情况；情形”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A fact or condition that affects a situation.',
    examples: [{ english: 'Under these circumstances, delaying the launch is reasonable.', chinese: '在这种情况下，推迟发布是合理的。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'clarify', term: 'clarify', normalizedTerm: 'clarify', partOfSpeech: ['verb'], ipa: '/klˈɛrəfˌaɪ/',
    chineseShort: '澄清；说明', chineseExplanation: '表示“澄清；说明”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something easier to understand by explaining it more clearly.',
    examples: [{ english: 'Could you clarify what you mean by this requirement?', chinese: '你能说明一下这个要求具体是什么意思吗？' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'collapse', term: 'collapse', normalizedTerm: 'collapse', partOfSpeech: ['noun', 'verb'], ipa: '/kəlˈæps/',
    chineseShort: '崩溃；倒塌', chineseExplanation: '可作多种词性使用，核心意思包括“崩溃；倒塌”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A sudden failure or fall, or to fail or fall suddenly.',
    examples: [{ english: 'The bridge collapsed after several days of heavy rain.', chinese: '连续几天暴雨后，这座桥倒塌了。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'combine', term: 'combine', normalizedTerm: 'combine', partOfSpeech: ['verb'], ipa: '/kˈɑmbaɪn/',
    chineseShort: '结合；合并', chineseExplanation: '表示“结合；合并”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To join two or more things together.',
    examples: [{ english: 'The course combines theory with practical training.', chinese: '这门课程把理论与实践训练结合起来。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'commitment', term: 'commitment', normalizedTerm: 'commitment', partOfSpeech: ['noun'], ipa: '/kəmˈɪtmənt/',
    chineseShort: '承诺；投入', chineseExplanation: '指与“承诺；投入”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A promise or a strong willingness to give time and effort to something.',
    examples: [{ english: 'Success requires long-term commitment and regular practice.', chinese: '成功需要长期投入和持续练习。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'communicate', term: 'communicate', normalizedTerm: 'communicate', partOfSpeech: ['verb'], ipa: '/kəmjˈunəkˌeɪt/',
    chineseShort: '沟通；传达', chineseExplanation: '表示“沟通；传达”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To share or exchange information, ideas, or feelings.',
    examples: [{ english: 'Managers should communicate changes clearly to their teams.', chinese: '管理者应清楚地向团队传达变化。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'comparison', term: 'comparison', normalizedTerm: 'comparison', partOfSpeech: ['noun'], ipa: '/kəmpˈɛrəsən/',
    chineseShort: '比较；对照', chineseExplanation: '指与“比较；对照”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The act of examining how two or more things are similar or different.',
    examples: [{ english: 'The report includes a comparison of three payment systems.', chinese: '报告比较了三种支付系统。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'complex', term: 'complex', normalizedTerm: 'complex', partOfSpeech: ['adjective', 'noun'], ipa: '/kˈɑmplɛks/',
    chineseShort: '复杂的；综合体', chineseExplanation: '可作多种词性使用，核心意思包括“复杂的；综合体”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Made of many connected parts and difficult to understand or deal with.',
    examples: [{ english: 'The causes of unemployment are complex and closely connected.', chinese: '失业的原因很复杂，而且彼此密切相关。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'component', term: 'component', normalizedTerm: 'component', partOfSpeech: ['noun'], ipa: '/kəmpˈoʊnənt/',
    chineseShort: '组成部分；部件', chineseExplanation: '指与“组成部分；部件”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One of the parts that form a larger whole.',
    examples: [{ english: 'Security is a key component of the new platform.', chinese: '安全性是新平台的关键组成部分。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'concentrate', term: 'concentrate', normalizedTerm: 'concentrate', partOfSpeech: ['verb'], ipa: '/kˈɑnsəntrˌeɪt/',
    chineseShort: '集中；专心', chineseExplanation: '表示“集中；专心”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give most of your attention or effort to one thing.',
    examples: [{ english: 'Students should concentrate on the main argument of the text.', chinese: '学生应专注于文章的主要论点。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'conduct', term: 'conduct', normalizedTerm: 'conduct', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑndəkt/',
    chineseShort: '进行；实施；行为', chineseExplanation: '可作多种词性使用，核心意思包括“进行；实施；行为”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To organize and carry out an activity such as research, or the way someone behaves.',
    examples: [{ english: 'The university conducted a survey of first-year students.', chinese: '这所大学对一年级学生进行了一项调查。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'conflict', term: 'conflict', normalizedTerm: 'conflict', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑnflɪkt/',
    chineseShort: '冲突；抵触', chineseExplanation: '可作多种词性使用，核心意思包括“冲突；抵触”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A serious disagreement or a situation in which different needs or ideas oppose each other.',
    examples: [{ english: 'The new rule may conflict with existing company policy.', chinese: '新规定可能与现有公司政策冲突。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'considerable', term: 'considerable', normalizedTerm: 'considerable', partOfSpeech: ['adjective'], ipa: '/kənsˈɪdɚəbəl/',
    chineseShort: '相当大的；重要的', chineseExplanation: '形容某人、事物或情况具有“相当大的；重要的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Large or important enough to be noticed.',
    examples: [{ english: 'The project requires a considerable amount of time and money.', chinese: '这个项目需要相当多的时间和资金。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'consistent', term: 'consistent', normalizedTerm: 'consistent', partOfSpeech: ['adjective'], ipa: '/kənsˈɪstənt/',
    chineseShort: '一致的；持续稳定的', chineseExplanation: '形容某人、事物或情况具有“一致的；持续稳定的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Always behaving or happening in a similar way, or matching other information.',
    examples: [{ english: 'The results are consistent with earlier research.', chinese: '这些结果与早期研究一致。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'constant', term: 'constant', normalizedTerm: 'constant', partOfSpeech: ['adjective', 'noun'], ipa: '/kˈɑnstənt/',
    chineseShort: '持续的；不变的', chineseExplanation: '可作多种词性使用，核心意思包括“持续的；不变的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Happening all the time or staying at the same level.',
    examples: [{ english: 'Constant interruptions can reduce productivity at work.', chinese: '持续的打扰会降低工作效率。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'constraint', term: 'constraint', normalizedTerm: 'constraint', partOfSpeech: ['noun'], ipa: '/kənstrˈeɪnt/',
    chineseShort: '限制；约束', chineseExplanation: '指与“限制；约束”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that limits what can be done.',
    examples: [{ english: 'Time is the main constraint on the current project.', chinese: '时间是当前项目的主要限制因素。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'consult', term: 'consult', normalizedTerm: 'consult', partOfSpeech: ['verb'], ipa: '/kənsˈʌlt/',
    chineseShort: '咨询；查阅', chineseExplanation: '表示“咨询；查阅”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To ask someone for expert advice or to look at a source for information.',
    examples: [{ english: 'You should consult a specialist before making a major decision.', chinese: '在做重大决定前，你应该咨询专业人士。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'consume', term: 'consume', normalizedTerm: 'consume', partOfSpeech: ['verb'], ipa: '/kənsˈum/',
    chineseShort: '消耗；消费', chineseExplanation: '表示“消耗；消费”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To use energy, time, or resources, or to buy and use goods and services.',
    examples: [{ english: 'Older machines tend to consume more electricity.', chinese: '较旧的机器往往消耗更多电力。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'contemporary', term: 'contemporary', normalizedTerm: 'contemporary', partOfSpeech: ['adjective'], ipa: '/kəntˈɛmpɚˌɛri/',
    chineseShort: '当代的；现代的', chineseExplanation: '形容某人、事物或情况具有“当代的；现代的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Belonging to or happening in the present period.',
    examples: [{ english: 'The museum focuses on contemporary Asian art.', chinese: '这家博物馆专注于当代亚洲艺术。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'context', term: 'context', normalizedTerm: 'context', partOfSpeech: ['noun'], ipa: '/kˈɑntɛkst/',
    chineseShort: '背景；语境', chineseExplanation: '指与“背景；语境”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The situation or information surrounding something that helps explain its meaning.',
    examples: [{ english: 'The meaning of the word depends on the context.', chinese: '这个词的意思取决于上下文。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'contrast', term: 'contrast', normalizedTerm: 'contrast', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑntræst/',
    chineseShort: '对比；形成对照', chineseExplanation: '可作多种词性使用，核心意思包括“对比；形成对照”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A clear difference between things, or to compare them to show differences.',
    examples: [{ english: 'The report contrasts urban and rural lifestyles.', chinese: '这份报告对比了城市和乡村的生活方式。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'contribute', term: 'contribute', normalizedTerm: 'contribute', partOfSpeech: ['verb'], ipa: '/kəntrˈɪbjut/',
    chineseShort: '贡献；促成', chineseExplanation: '表示“贡献；促成”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give something such as money, ideas, or effort, or to help cause a result.',
    examples: [{ english: 'Better training can contribute to higher productivity.', chinese: '更好的培训可以促进生产力提高。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'controversial', term: 'controversial', normalizedTerm: 'controversial', partOfSpeech: ['adjective'], ipa: '/kˌɑntrəvˈɝʃəl/',
    chineseShort: '有争议的', chineseExplanation: '形容某人、事物或情况具有“有争议的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Causing strong disagreement or public discussion.',
    examples: [{ english: 'The government introduced a controversial new policy.', chinese: '政府推出了一项有争议的新政策。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'convenient', term: 'convenient', normalizedTerm: 'convenient', partOfSpeech: ['adjective'], ipa: '/kənvˈinjənt/',
    chineseShort: '方便的；便利的', chineseExplanation: '形容某人、事物或情况具有“方便的；便利的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easy to use, reach, or do, and suitable for your needs.',
    examples: [{ english: 'Online banking is convenient for people with busy schedules.', chinese: '网上银行对日程繁忙的人来说很方便。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'convince', term: 'convince', normalizedTerm: 'convince', partOfSpeech: ['verb'], ipa: '/kənvˈɪns/',
    chineseShort: '说服；使确信', chineseExplanation: '表示“说服；使确信”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make someone believe that something is true or persuade them to do something.',
    examples: [{ english: 'The evidence convinced the committee to change its decision.', chinese: '这些证据说服委员会改变了决定。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'cooperate', term: 'cooperate', normalizedTerm: 'cooperate', partOfSpeech: ['verb'], ipa: '/koʊˈɑpɚˌeɪt/',
    chineseShort: '合作；配合', chineseExplanation: '表示“合作；配合”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To work together with another person or group toward a shared goal.',
    examples: [{ english: 'Different departments must cooperate to complete the project.', chinese: '不同部门必须合作才能完成这个项目。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'cope', term: 'cope', normalizedTerm: 'cope', partOfSpeech: ['verb'], ipa: '/kˈoʊp/',
    chineseShort: '应对；处理', chineseExplanation: '表示“应对；处理”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deal successfully with a difficult situation.',
    examples: [{ english: 'Many students find it hard to cope with exam pressure.', chinese: '许多学生发现很难应对考试压力。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'core', term: 'core', normalizedTerm: 'core', partOfSpeech: ['noun', 'adjective'], ipa: '/kˈɔr/',
    chineseShort: '核心；核心的', chineseExplanation: '可作多种词性使用，核心意思包括“核心；核心的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The central or most important part of something.',
    examples: [{ english: 'Communication is a core skill in most workplaces.', chinese: '沟通是大多数职场中的核心技能。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'corporate', term: 'corporate', normalizedTerm: 'corporate', partOfSpeech: ['adjective'], ipa: '/kˈɔrpɚət/',
    chineseShort: '公司的；企业的', chineseExplanation: '形容某人、事物或情况具有“公司的；企业的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to a large company or business organization.',
    examples: [{ english: 'The company updated its corporate strategy for the next five years.', chinese: '公司更新了未来五年的企业战略。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'crucial', term: 'crucial', normalizedTerm: 'crucial', partOfSpeech: ['adjective'], ipa: '/krˈuʃəl/',
    chineseShort: '至关重要的', chineseExplanation: '形容某人、事物或情况具有“至关重要的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Extremely important for the success or result of something.',
    examples: [{ english: 'Clear instructions are crucial for reducing mistakes.', chinese: '清晰的指示对于减少错误至关重要。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'curious', term: 'curious', normalizedTerm: 'curious', partOfSpeech: ['adjective'], ipa: '/kjˈʊriəs/',
    chineseShort: '好奇的；想知道的', chineseExplanation: '形容某人、事物或情况具有“好奇的；想知道的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Interested in learning or knowing more about something.',
    examples: [{ english: 'She was curious about how the new system worked.', chinese: '她很好奇新系统是如何运作的。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'debate', term: 'debate', normalizedTerm: 'debate', partOfSpeech: ['noun', 'verb'], ipa: '/dəbˈeɪt/',
    chineseShort: '辩论；讨论', chineseExplanation: '可作多种词性使用，核心意思包括“辩论；讨论”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A formal or public discussion in which different opinions are expressed.',
    examples: [{ english: 'There is an ongoing debate about the use of AI in education.', chinese: '关于人工智能在教育中的使用仍在持续讨论。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'decline', term: 'decline', normalizedTerm: 'decline', partOfSpeech: ['noun', 'verb'], ipa: '/dɪklˈaɪn/',
    chineseShort: '下降；衰退；拒绝', chineseExplanation: '可作多种词性使用，核心意思包括“下降；衰退；拒绝”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A decrease in amount or quality, or to become smaller or weaker.',
    examples: [{ english: 'Sales declined slightly during the first quarter.', chinese: '第一季度销售额略有下降。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'define', term: 'define', normalizedTerm: 'define', partOfSpeech: ['verb'], ipa: '/dɪfˈaɪn/',
    chineseShort: '定义；明确', chineseExplanation: '表示“定义；明确”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To explain the exact meaning of something or state its limits clearly.',
    examples: [{ english: 'The policy clearly defines the responsibilities of each department.', chinese: '这项政策明确规定了各部门的责任。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'demand', term: 'demand', normalizedTerm: 'demand', partOfSpeech: ['noun', 'verb'], ipa: '/dɪmˈænd/',
    chineseShort: '需求；要求', chineseExplanation: '可作多种词性使用，核心意思包括“需求；要求”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A strong need or request, or the desire for goods and services.',
    examples: [{ english: 'Demand for online services has increased rapidly.', chinese: '对在线服务的需求迅速增加。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'demonstrate', term: 'demonstrate', normalizedTerm: 'demonstrate', partOfSpeech: ['verb'], ipa: '/dˈɛmənstrˌeɪt/',
    chineseShort: '证明；展示', chineseExplanation: '表示“证明；展示”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show clearly that something is true or how something works.',
    examples: [{ english: 'The results demonstrate the value of regular practice.', chinese: '结果证明了定期练习的价值。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'deny', term: 'deny', normalizedTerm: 'deny', partOfSpeech: ['verb'], ipa: '/dɪnˈaɪ/',
    chineseShort: '否认；拒绝给予', chineseExplanation: '表示“否认；拒绝给予”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To say that something is not true or refuse to allow someone to have something.',
    examples: [{ english: 'The company denied that customer data had been leaked.', chinese: '公司否认客户数据遭到泄露。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'despite', term: 'despite', normalizedTerm: 'despite', partOfSpeech: ['preposition'], ipa: '/dɪspˈaɪt/',
    chineseShort: '尽管；即使', chineseExplanation: '用于表达“尽管；即使”的关系，常见于B2阶段的书面和正式表达。', englishDefinition: 'Without being affected by a particular fact or difficulty.',
    examples: [{ english: 'Despite the bad weather, the event continued as planned.', chinese: '尽管天气不好，活动仍按计划进行。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'detect', term: 'detect', normalizedTerm: 'detect', partOfSpeech: ['verb'], ipa: '/dɪtˈɛkt/',
    chineseShort: '发现；检测', chineseExplanation: '表示“发现；检测”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To discover or notice something that is difficult to see or recognize.',
    examples: [{ english: 'The software can detect unusual activity on the network.', chinese: '该软件可以检测网络上的异常活动。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'determine', term: 'determine', normalizedTerm: 'determine', partOfSpeech: ['verb'], ipa: '/dətˈɝmən/',
    chineseShort: '确定；决定', chineseExplanation: '表示“确定；决定”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To discover a fact by examining evidence, or to control what happens.',
    examples: [{ english: 'The test will determine whether the device is safe to use.', chinese: '测试将确定该设备是否可以安全使用。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'develop', term: 'develop', normalizedTerm: 'develop', partOfSpeech: ['verb'], ipa: '/dɪvˈɛləp/',
    chineseShort: '发展；开发', chineseExplanation: '表示“发展；开发”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To grow, change, or create something over time.',
    examples: [{ english: 'The team is developing a new tool for language learners.', chinese: '团队正在为语言学习者开发一种新工具。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'differ', term: 'differ', normalizedTerm: 'differ', partOfSpeech: ['verb'], ipa: '/dˈɪfɚ/',
    chineseShort: '不同；有区别', chineseExplanation: '表示“不同；有区别”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To be unlike or not the same as something else.',
    examples: [{ english: 'Opinions differ on the best way to solve the problem.', chinese: '对于解决问题的最佳方式，人们意见不一。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'distribute', term: 'distribute', normalizedTerm: 'distribute', partOfSpeech: ['verb'], ipa: '/dɪstrˈɪbjut/',
    chineseShort: '分发；分配', chineseExplanation: '表示“分发；分配”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give or deliver something to a number of people or places.',
    examples: [{ english: 'The organization distributed food to families affected by the flood.', chinese: '该组织向受洪水影响的家庭分发食物。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'diverse', term: 'diverse', normalizedTerm: 'diverse', partOfSpeech: ['adjective'], ipa: '/daɪvˈɝs/',
    chineseShort: '多样的；多元的', chineseExplanation: '形容某人、事物或情况具有“多样的；多元的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Including many different types of people or things.',
    examples: [{ english: 'The city has a diverse population with many cultural backgrounds.', chinese: '这座城市人口多元，拥有许多不同文化背景。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'domestic', term: 'domestic', normalizedTerm: 'domestic', partOfSpeech: ['adjective'], ipa: '/dəmˈɛstɪk/',
    chineseShort: '国内的；家庭的', chineseExplanation: '形容某人、事物或情况具有“国内的；家庭的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to a person\'s own country or to the home.',
    examples: [{ english: 'Domestic tourism increased during the holiday period.', chinese: '假期期间国内旅游有所增加。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'dramatic', term: 'dramatic', normalizedTerm: 'dramatic', partOfSpeech: ['adjective'], ipa: '/drəmˈætɪk/',
    chineseShort: '巨大的；戏剧性的', chineseExplanation: '形容某人、事物或情况具有“巨大的；戏剧性的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Sudden, very noticeable, or exciting in effect.',
    examples: [{ english: 'The company reported a dramatic increase in online sales.', chinese: '公司报告称网上销售额大幅增长。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'efficiently', term: 'efficiently', normalizedTerm: 'efficiently', partOfSpeech: ['adverb'], ipa: '/ɪfˈɪʃəntli/',
    chineseShort: '高效地', chineseExplanation: '表示以“高效地”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'In a way that achieves good results without wasting time or resources.',
    examples: [{ english: 'The new system allows staff to work more efficiently.', chinese: '新系统让员工能够更高效地工作。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'eliminate', term: 'eliminate', normalizedTerm: 'eliminate', partOfSpeech: ['verb'], ipa: '/ɪlˈɪmənˌeɪt/',
    chineseShort: '消除；淘汰', chineseExplanation: '表示“消除；淘汰”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To remove or get rid of something completely.',
    examples: [{ english: 'The update aims to eliminate several common security risks.', chinese: '这次更新旨在消除几个常见的安全风险。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'emerge', term: 'emerge', normalizedTerm: 'emerge', partOfSpeech: ['verb'], ipa: '/ɪmˈɝdʒ/',
    chineseShort: '出现；显现', chineseExplanation: '表示“出现；显现”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To become known, visible, or important.',
    examples: [{ english: 'New problems began to emerge after the policy was introduced.', chinese: '政策实施后，新问题开始出现。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'emphasize', term: 'emphasize', normalizedTerm: 'emphasize', partOfSpeech: ['verb'], ipa: '/ˈɛmfəsˌaɪz/',
    chineseShort: '强调', chineseExplanation: '表示“强调”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give special importance or attention to something.',
    examples: [{ english: 'The report emphasizes the need for better public transport.', chinese: '报告强调改善公共交通的必要性。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'enable', term: 'enable', normalizedTerm: 'enable', partOfSpeech: ['verb'], ipa: '/ɛnˈeɪbəl/',
    chineseShort: '使能够；使成为可能', chineseExplanation: '表示“使能够；使成为可能”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make it possible for someone to do something or for something to happen.',
    examples: [{ english: 'Digital tools enable students to study from almost anywhere.', chinese: '数字工具使学生几乎可以在任何地方学习。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'encounter', term: 'encounter', normalizedTerm: 'encounter', partOfSpeech: ['noun', 'verb'], ipa: '/ɪnkˈaʊntɚ/',
    chineseShort: '遇到；遭遇', chineseExplanation: '可作多种词性使用，核心意思包括“遇到；遭遇”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To experience or meet something, especially unexpectedly.',
    examples: [{ english: 'Users may encounter problems when the connection is unstable.', chinese: '连接不稳定时，用户可能会遇到问题。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'engage', term: 'engage', normalizedTerm: 'engage', partOfSpeech: ['verb'], ipa: '/ɛnɡˈeɪdʒ/',
    chineseShort: '参与；吸引', chineseExplanation: '表示“参与；吸引”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To take part in something or attract and keep someone\'s attention.',
    examples: [{ english: 'The teacher used group tasks to engage quieter students.', chinese: '老师用小组任务让较安静的学生参与进来。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'enhance', term: 'enhance', normalizedTerm: 'enhance', partOfSpeech: ['verb'], ipa: '/ɛnhˈæns/',
    chineseShort: '提高；增强', chineseExplanation: '表示“提高；增强”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To improve the quality, value, or effectiveness of something.',
    examples: [{ english: 'Good lighting can enhance the quality of a video call.', chinese: '良好的照明可以提升视频通话的质量。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'ensure', term: 'ensure', normalizedTerm: 'ensure', partOfSpeech: ['verb'], ipa: '/ɛnʃˈʊr/',
    chineseShort: '确保；保证', chineseExplanation: '表示“确保；保证”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make certain that something happens or is true.',
    examples: [{ english: 'Regular backups help ensure that important files are not lost.', chinese: '定期备份有助于确保重要文件不会丢失。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'environmental', term: 'environmental', normalizedTerm: 'environmental', partOfSpeech: ['adjective'], ipa: '/ɪnvˌaɪrənmˈɛntəl/',
    chineseShort: '环境的；环保相关的', chineseExplanation: '形容某人、事物或情况具有“环境的；环保相关的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the natural world and the effects of human activity on it.',
    examples: [{ english: 'The company is trying to reduce its environmental impact.', chinese: '公司正努力减少其对环境的影响。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'equivalent', term: 'equivalent', normalizedTerm: 'equivalent', partOfSpeech: ['noun', 'adjective'], ipa: '/ɪkwˈɪvələnt/',
    chineseShort: '相等的；等同物', chineseExplanation: '可作多种词性使用，核心意思包括“相等的；等同物”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Equal in value, meaning, amount, or function.',
    examples: [{ english: 'One hour of intense exercise is not always equivalent to two hours of light activity.', chinese: '一小时高强度运动并不总等同于两小时轻度活动。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'essential', term: 'essential', normalizedTerm: 'essential', partOfSpeech: ['adjective', 'noun'], ipa: '/ɛsˈɛnʃəl/',
    chineseShort: '必不可少的；要素', chineseExplanation: '可作多种词性使用，核心意思包括“必不可少的；要素”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Completely necessary or extremely important.',
    examples: [{ english: 'Reliable internet access is essential for many remote workers.', chinese: '可靠的网络连接对许多远程工作者来说必不可少。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'estimate', term: 'estimate', normalizedTerm: 'estimate', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɛstəmət/',
    chineseShort: '估计；估算', chineseExplanation: '可作多种词性使用，核心意思包括“估计；估算”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An approximate calculation or judgment of a number, cost, or amount.',
    examples: [{ english: 'Experts estimate that the repairs will take at least two weeks.', chinese: '专家估计维修至少需要两周。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'ethical', term: 'ethical', normalizedTerm: 'ethical', partOfSpeech: ['adjective'], ipa: '/ˈɛθɪkəl/',
    chineseShort: '合乎道德的；伦理的', chineseExplanation: '形容某人、事物或情况具有“合乎道德的；伦理的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Morally right or related to principles of right and wrong.',
    examples: [{ english: 'Researchers must consider the ethical use of personal data.', chinese: '研究人员必须考虑个人数据的合乎伦理使用。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'evidence', term: 'evidence', normalizedTerm: 'evidence', partOfSpeech: ['noun'], ipa: '/ˈɛvədəns/',
    chineseShort: '证据；依据', chineseExplanation: '指与“证据；依据”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Facts or information that support a conclusion or show that something is true.',
    examples: [{ english: 'There is strong evidence that sleep affects concentration.', chinese: '有充分证据表明睡眠会影响专注力。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'exceed', term: 'exceed', normalizedTerm: 'exceed', partOfSpeech: ['verb'], ipa: '/ɪksˈid/',
    chineseShort: '超过；超出', chineseExplanation: '表示“超过；超出”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To be greater than a particular amount, number, or limit.',
    examples: [{ english: 'Costs may exceed the original budget if prices continue to rise.', chinese: '如果价格继续上涨，成本可能超过原定预算。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'exclude', term: 'exclude', normalizedTerm: 'exclude', partOfSpeech: ['verb'], ipa: '/ɪksklˈud/',
    chineseShort: '排除；不包括', chineseExplanation: '表示“排除；不包括”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deliberately leave someone or something out.',
    examples: [{ english: 'The study excluded participants under the age of eighteen.', chinese: '该研究排除了十八岁以下的参与者。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'expand', term: 'expand', normalizedTerm: 'expand', partOfSpeech: ['verb'], ipa: '/ɪkspˈænd/',
    chineseShort: '扩大；扩展', chineseExplanation: '表示“扩大；扩展”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To become larger or make something larger in size, range, or activity.',
    examples: [{ english: 'The company plans to expand its services into smaller cities.', chinese: '公司计划把服务扩展到较小的城市。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'expectation', term: 'expectation', normalizedTerm: 'expectation', partOfSpeech: ['noun'], ipa: '/ˌɛkspɛktˈeɪʃən/',
    chineseShort: '期望；预期', chineseExplanation: '指与“期望；预期”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A belief about what is likely to happen or how someone should behave.',
    examples: [{ english: 'The course did not fully meet students\' expectations.', chinese: '这门课程没有完全达到学生的期望。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'expose', term: 'expose', normalizedTerm: 'expose', partOfSpeech: ['verb'], ipa: '/ɪkspˈoʊz/',
    chineseShort: '暴露；揭露', chineseExplanation: '表示“暴露；揭露”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something visible, known, or unprotected.',
    examples: [{ english: 'The investigation exposed several weaknesses in the system.', chinese: '调查揭露了系统中的几个弱点。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'external', term: 'external', normalizedTerm: 'external', partOfSpeech: ['adjective'], ipa: '/ɪkstˈɝnəl/',
    chineseShort: '外部的；外来的', chineseExplanation: '形容某人、事物或情况具有“外部的；外来的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Coming from or relating to outside a particular place, organization, or system.',
    examples: [{ english: 'External factors can influence the final result.', chinese: '外部因素会影响最终结果。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'factor', term: 'factor', normalizedTerm: 'factor', partOfSpeech: ['noun'], ipa: '/fˈæktɚ/',
    chineseShort: '因素', chineseExplanation: '指与“因素”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One of the things that influences a result or situation.',
    examples: [{ english: 'Cost is an important factor when choosing a university.', chinese: '选择大学时，费用是一个重要因素。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'feature', term: 'feature', normalizedTerm: 'feature', partOfSpeech: ['noun', 'verb'], ipa: '/fˈitʃɚ/',
    chineseShort: '特征；功能；以……为特色', chineseExplanation: '可作多种词性使用，核心意思包括“特征；功能；以……为特色”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An important or noticeable part of something, or to include something as a main part.',
    examples: [{ english: 'The app includes a useful feature for tracking study time.', chinese: '这个应用包含一个用于记录学习时间的实用功能。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'flexible', term: 'flexible', normalizedTerm: 'flexible', partOfSpeech: ['adjective'], ipa: '/flˈɛksəbəl/',
    chineseShort: '灵活的；可变通的', chineseExplanation: '形容某人、事物或情况具有“灵活的；可变通的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Able to change or be changed easily according to different needs.',
    examples: [{ english: 'Flexible working hours can improve employee satisfaction.', chinese: '弹性工作时间可以提高员工满意度。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'focus', term: 'focus', normalizedTerm: 'focus', partOfSpeech: ['noun', 'verb'], ipa: '/fˈoʊkəs/',
    chineseShort: '重点；集中', chineseExplanation: '可作多种词性使用，核心意思包括“重点；集中”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The main subject of attention, or to give special attention to something.',
    examples: [{ english: 'The discussion focused on practical ways to reduce costs.', chinese: '讨论集中在降低成本的实际方法上。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'formal', term: 'formal', normalizedTerm: 'formal', partOfSpeech: ['adjective'], ipa: '/fˈɔrməl/',
    chineseShort: '正式的；规范的', chineseExplanation: '形容某人、事物或情况具有“正式的；规范的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Suitable for official, serious, or professional situations.',
    examples: [{ english: 'A formal email should use clear and polite language.', chinese: '正式电子邮件应使用清晰而礼貌的语言。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'frequent', term: 'frequent', normalizedTerm: 'frequent', partOfSpeech: ['adjective'], ipa: '/frˈikwənt/',
    chineseShort: '频繁的；经常发生的', chineseExplanation: '形容某人、事物或情况具有“频繁的；经常发生的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Happening often or many times.',
    examples: [{ english: 'Frequent delays have caused complaints from passengers.', chinese: '频繁的延误引起了乘客投诉。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'fundamental', term: 'fundamental', normalizedTerm: 'fundamental', partOfSpeech: ['adjective'], ipa: '/fˌʌndəmˈɛntəl/',
    chineseShort: '根本的；基础的', chineseExplanation: '形容某人、事物或情况具有“根本的；基础的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Basic and extremely important to the nature or success of something.',
    examples: [{ english: 'Trust is fundamental to a strong working relationship.', chinese: '信任是良好工作关系的基础。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'generate', term: 'generate', normalizedTerm: 'generate', partOfSpeech: ['verb'], ipa: '/dʒˈɛnɚˌeɪt/',
    chineseShort: '产生；生成', chineseExplanation: '表示“产生；生成”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To produce or create something.',
    examples: [{ english: 'The new campaign generated a lot of public interest.', chinese: '新活动引起了大量公众兴趣。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'global', term: 'global', normalizedTerm: 'global', partOfSpeech: ['adjective'], ipa: '/ɡlˈoʊbəl/',
    chineseShort: '全球的；全世界的', chineseExplanation: '形容某人、事物或情况具有“全球的；全世界的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the whole world.',
    examples: [{ english: 'Climate change is a global challenge that requires cooperation.', chinese: '气候变化是一个需要合作应对的全球性挑战。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'guideline', term: 'guideline', normalizedTerm: 'guideline', partOfSpeech: ['noun'], ipa: '/ɡˈaɪdlˌaɪn/',
    chineseShort: '指南；指导原则', chineseExplanation: '指与“指南；指导原则”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A general rule or piece of advice about how something should be done.',
    examples: [{ english: 'Employees must follow the company\'s safety guidelines.', chinese: '员工必须遵守公司的安全指南。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'handle', term: 'handle', normalizedTerm: 'handle', partOfSpeech: ['verb', 'noun'], ipa: '/hˈændəl/',
    chineseShort: '处理；应付；把手', chineseExplanation: '可作多种词性使用，核心意思包括“处理；应付；把手”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deal with a situation, task, or problem successfully.',
    examples: [{ english: 'The support team handled the complaint professionally.', chinese: '客服团队专业地处理了这起投诉。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'harmful', term: 'harmful', normalizedTerm: 'harmful', partOfSpeech: ['adjective'], ipa: '/hˈɑrmfəl/',
    chineseShort: '有害的', chineseExplanation: '形容某人、事物或情况具有“有害的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Causing damage or negative effects.',
    examples: [{ english: 'Too much screen time can be harmful to sleep quality.', chinese: '过多的屏幕时间可能会影响睡眠质量。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'highlight', term: 'highlight', normalizedTerm: 'highlight', partOfSpeech: ['verb', 'noun'], ipa: '/hˈaɪlˌaɪt/',
    chineseShort: '强调；突出显示；亮点', chineseExplanation: '可作多种词性使用，核心意思包括“强调；突出显示；亮点”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To draw attention to something important, or a particularly noticeable part.',
    examples: [{ english: 'The report highlights three major causes of the problem.', chinese: '报告强调了这个问题的三个主要原因。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'identify', term: 'identify', normalizedTerm: 'identify', partOfSpeech: ['verb'], ipa: '/aɪdˈɛntəfˌaɪ/',
    chineseShort: '识别；确定', chineseExplanation: '表示“识别；确定”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To recognize or discover what someone or something is.',
    examples: [{ english: 'The survey helped identify the main concerns of local residents.', chinese: '这项调查帮助确定了当地居民的主要担忧。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'illustrate', term: 'illustrate', normalizedTerm: 'illustrate', partOfSpeech: ['verb'], ipa: '/ˈɪləstrˌeɪt/',
    chineseShort: '说明；举例说明', chineseExplanation: '表示“说明；举例说明”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make an idea clearer by giving examples, pictures, or other evidence.',
    examples: [{ english: 'This example illustrates why accurate data matters.', chinese: '这个例子说明了准确数据为何重要。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'impact', term: 'impact', normalizedTerm: 'impact', partOfSpeech: ['noun', 'verb'], ipa: '/ˌɪmpˈækt/',
    chineseShort: '影响；冲击', chineseExplanation: '可作多种词性使用，核心意思包括“影响；冲击”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A strong effect on someone or something.',
    examples: [{ english: 'The new law may have a significant impact on small businesses.', chinese: '新法律可能会对小企业产生重大影响。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'imply', term: 'imply', normalizedTerm: 'imply', partOfSpeech: ['verb'], ipa: '/ˌɪmplˈaɪ/',
    chineseShort: '暗示；意味着', chineseExplanation: '表示“暗示；意味着”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To suggest something without stating it directly.',
    examples: [{ english: 'The results imply that the current method is less effective.', chinese: '结果表明当前方法的效果较差。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'improve', term: 'improve', normalizedTerm: 'improve', partOfSpeech: ['verb'], ipa: '/ˌɪmprˈuv/',
    chineseShort: '改善；提高', chineseExplanation: '表示“改善；提高”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To become better or make something better.',
    examples: [{ english: 'Regular feedback can improve the quality of written work.', chinese: '定期反馈可以提高书面作业的质量。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'incentive', term: 'incentive', normalizedTerm: 'incentive', partOfSpeech: ['noun'], ipa: '/ˌɪnsˈɛntɪv/',
    chineseShort: '激励；奖励措施', chineseExplanation: '指与“激励；奖励措施”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that encourages a person or organization to do something.',
    examples: [{ english: 'The government introduced tax incentives for green technology.', chinese: '政府为绿色技术推出了税收激励措施。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'indicate', term: 'indicate', normalizedTerm: 'indicate', partOfSpeech: ['verb'], ipa: '/ˈɪndəkˌeɪt/',
    chineseShort: '表明；指出', chineseExplanation: '表示“表明；指出”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show, suggest, or point to something.',
    examples: [{ english: 'The data indicates a gradual rise in online shopping.', chinese: '数据显示网上购物正在逐步增加。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'individual', term: 'individual', normalizedTerm: 'individual', partOfSpeech: ['noun', 'adjective'], ipa: '/ˌɪndəvˈɪdʒəwəl/',
    chineseShort: '个人；个别的', chineseExplanation: '可作多种词性使用，核心意思包括“个人；个别的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A single person or thing considered separately from a group.',
    examples: [{ english: 'The program can be adjusted to individual learning needs.', chinese: '该课程可以根据个人学习需求进行调整。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'inevitable', term: 'inevitable', normalizedTerm: 'inevitable', partOfSpeech: ['adjective'], ipa: '/ˌɪnˈɛvətəbəl/',
    chineseShort: '不可避免的', chineseExplanation: '形容某人、事物或情况具有“不可避免的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Certain to happen and impossible to avoid.',
    examples: [{ english: 'Some degree of change is inevitable when a company grows quickly.', chinese: '公司快速发展时，某种程度的变化是不可避免的。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'influence', term: 'influence', normalizedTerm: 'influence', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɪnfluəns/',
    chineseShort: '影响；作用', chineseExplanation: '可作多种词性使用，核心意思包括“影响；作用”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The power to affect how someone thinks or how something develops.',
    examples: [{ english: 'Social media has a strong influence on consumer behaviour.', chinese: '社交媒体对消费者行为有很大影响。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'initial', term: 'initial', normalizedTerm: 'initial', partOfSpeech: ['adjective', 'noun'], ipa: '/ˌɪnˈɪʃəl/',
    chineseShort: '最初的；首字母', chineseExplanation: '可作多种词性使用，核心意思包括“最初的；首字母”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing or happening at the beginning.',
    examples: [{ english: 'The initial results were positive, but more testing is needed.', chinese: '初步结果是积极的，但还需要更多测试。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'initiative', term: 'initiative', normalizedTerm: 'initiative', partOfSpeech: ['noun'], ipa: '/ˌɪnˈɪʃətɪv/',
    chineseShort: '主动行动；倡议', chineseExplanation: '指与“主动行动；倡议”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A new plan or action intended to solve a problem or improve a situation.',
    examples: [{ english: 'The city launched an initiative to reduce plastic waste.', chinese: '该市发起了一项减少塑料垃圾的倡议。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'innovation', term: 'innovation', normalizedTerm: 'innovation', partOfSpeech: ['noun'], ipa: '/ˌɪnəvˈeɪʃən/',
    chineseShort: '创新；新方法', chineseExplanation: '指与“创新；新方法”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A new idea, method, or product that improves something.',
    examples: [{ english: 'Innovation is essential for companies competing in fast-changing markets.', chinese: '创新对于在快速变化市场中竞争的公司至关重要。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'insight', term: 'insight', normalizedTerm: 'insight', partOfSpeech: ['noun'], ipa: '/ˈɪnsˌaɪt/',
    chineseShort: '洞察；深刻理解', chineseExplanation: '指与“洞察；深刻理解”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A clear and deep understanding of a situation or subject.',
    examples: [{ english: 'The interviews provided useful insight into customer behaviour.', chinese: '访谈让我们更深入地了解了顾客行为。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'inspect', term: 'inspect', normalizedTerm: 'inspect', partOfSpeech: ['verb'], ipa: '/ˌɪnspˈɛkt/',
    chineseShort: '检查；视察', chineseExplanation: '表示“检查；视察”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To examine something carefully to check its condition or quality.',
    examples: [{ english: 'Engineers inspected the bridge before reopening it to traffic.', chinese: '工程师在桥梁重新开放交通前进行了检查。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'install', term: 'install', normalizedTerm: 'install', partOfSpeech: ['verb'], ipa: '/ˌɪnstˈɔl/',
    chineseShort: '安装；设置', chineseExplanation: '表示“安装；设置”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To put equipment or software in place so that it is ready to use.',
    examples: [{ english: 'The school installed new computers in the language lab.', chinese: '学校在语言实验室安装了新电脑。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'instance', term: 'instance', normalizedTerm: 'instance', partOfSpeech: ['noun'], ipa: '/ˈɪnstəns/',
    chineseShort: '例子；情况', chineseExplanation: '指与“例子；情况”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular example or case of something.',
    examples: [{ english: 'In this instance, a simple solution may be more effective.', chinese: '在这种情况下，简单的解决方案可能更有效。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'intend', term: 'intend', normalizedTerm: 'intend', partOfSpeech: ['verb'], ipa: '/ˌɪntˈɛnd/',
    chineseShort: '打算；计划', chineseExplanation: '表示“打算；计划”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To plan or mean to do something.',
    examples: [{ english: 'The company intends to open two new branches next year.', chinese: '公司计划明年开设两家新分店。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'interaction', term: 'interaction', normalizedTerm: 'interaction', partOfSpeech: ['noun'], ipa: '/ˌɪntɚˈækʃən/',
    chineseShort: '互动；相互作用', chineseExplanation: '指与“互动；相互作用”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Communication or activity between people, groups, or things.',
    examples: [{ english: 'Online classes still need meaningful interaction between teachers and students.', chinese: '在线课程仍需要师生之间有意义的互动。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'internal', term: 'internal', normalizedTerm: 'internal', partOfSpeech: ['adjective'], ipa: '/ˌɪntˈɝnəl/',
    chineseShort: '内部的；内在的', chineseExplanation: '形容某人、事物或情况具有“内部的；内在的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Located, happening, or existing inside an organization, system, or body.',
    examples: [{ english: 'The issue was discussed in an internal company meeting.', chinese: '这个问题在公司内部会议上进行了讨论。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'interpret', term: 'interpret', normalizedTerm: 'interpret', partOfSpeech: ['verb'], ipa: '/ˌɪntˈɝprət/',
    chineseShort: '解释；理解', chineseExplanation: '表示“解释；理解”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To explain or understand the meaning of information, words, or events.',
    examples: [{ english: 'Different readers may interpret the same data in different ways.', chinese: '不同读者可能会以不同方式解读同一组数据。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'investigate', term: 'investigate', normalizedTerm: 'investigate', partOfSpeech: ['verb'], ipa: '/ˌɪnvˈɛstəɡˌeɪt/',
    chineseShort: '调查；研究', chineseExplanation: '表示“调查；研究”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To examine a situation carefully in order to discover the truth or cause.',
    examples: [{ english: 'The authorities are investigating the cause of the accident.', chinese: '有关部门正在调查事故原因。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'involve', term: 'involve', normalizedTerm: 'involve', partOfSpeech: ['verb'], ipa: '/ˌɪnvˈɑlv/',
    chineseShort: '涉及；包含；使参与', chineseExplanation: '表示“涉及；包含；使参与”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To include something as a necessary part or require someone\'s participation.',
    examples: [{ english: 'The job involves regular communication with international clients.', chinese: '这份工作需要经常与国际客户沟通。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'issue', term: 'issue', normalizedTerm: 'issue', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɪʃu/',
    chineseShort: '问题；议题；发布', chineseExplanation: '可作多种词性使用，核心意思包括“问题；议题；发布”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An important subject or problem for discussion, or to officially provide something.',
    examples: [{ english: 'Housing costs are a major issue in many large cities.', chinese: '住房成本是许多大城市面临的主要问题。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'justify', term: 'justify', normalizedTerm: 'justify', partOfSpeech: ['verb'], ipa: '/dʒˈʌstəfˌaɪ/',
    chineseShort: '证明……合理；为……辩护', chineseExplanation: '表示“证明……合理；为……辩护”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give a good reason for a decision, action, or belief.',
    examples: [{ english: 'The company must justify the additional expense to investors.', chinese: '公司必须向投资者说明这笔额外开支的合理性。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'legal', term: 'legal', normalizedTerm: 'legal', partOfSpeech: ['adjective'], ipa: '/lˈiɡəl/',
    chineseShort: '法律的；合法的', chineseExplanation: '形容某人、事物或情况具有“法律的；合法的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the law or allowed by law.',
    examples: [{ english: 'Businesses must understand their legal responsibilities toward customers.', chinese: '企业必须了解自己对顾客承担的法律责任。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'limit', term: 'limit', normalizedTerm: 'limit', partOfSpeech: ['noun', 'verb'], ipa: '/lˈɪmət/',
    chineseShort: '限制；限度', chineseExplanation: '可作多种词性使用，核心意思包括“限制；限度”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The greatest amount allowed, or to control how much something can happen.',
    examples: [{ english: 'The new rule limits the amount of data an app can collect.', chinese: '新规定限制了应用可以收集的数据量。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'likely', term: 'likely', normalizedTerm: 'likely', partOfSpeech: ['adjective', 'adverb'], ipa: '/lˈaɪkli/',
    chineseShort: '可能的；很可能', chineseExplanation: '可作多种词性使用，核心意思包括“可能的；很可能”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Expected or probable to happen.',
    examples: [{ english: 'Prices are likely to remain high for several months.', chinese: '价格很可能在未来几个月保持高位。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'link', term: 'link', normalizedTerm: 'link', partOfSpeech: ['noun', 'verb'], ipa: '/lˈɪŋk/',
    chineseShort: '联系；连接', chineseExplanation: '可作多种词性使用，核心意思包括“联系；连接”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A connection between two things, or to connect them.',
    examples: [{ english: 'Researchers found a link between sleep quality and concentration.', chinese: '研究人员发现睡眠质量与专注力之间存在联系。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'major', term: 'major', normalizedTerm: 'major', partOfSpeech: ['adjective', 'noun'], ipa: '/mˈeɪdʒɚ/',
    chineseShort: '主要的；重要的', chineseExplanation: '可作多种词性使用，核心意思包括“主要的；重要的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Very important, serious, or large in degree.',
    examples: [{ english: 'Traffic congestion is a major problem in the capital.', chinese: '交通拥堵是首都面临的一个主要问题。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'manage', term: 'manage', normalizedTerm: 'manage', partOfSpeech: ['verb'], ipa: '/mˈænədʒ/',
    chineseShort: '管理；设法做到', chineseExplanation: '表示“管理；设法做到”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To control or organize something, or succeed in doing something difficult.',
    examples: [{ english: 'Small businesses must manage their costs carefully.', chinese: '小企业必须谨慎管理成本。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'measure', term: 'measure', normalizedTerm: 'measure', partOfSpeech: ['noun', 'verb'], ipa: '/mˈɛʒɚ/',
    chineseShort: '措施；测量', chineseExplanation: '可作多种词性使用，核心意思包括“措施；测量”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An action taken to achieve a result, or to find the size or amount of something.',
    examples: [{ english: 'The government introduced new measures to improve road safety.', chinese: '政府推出了新措施来提高道路安全。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'method', term: 'method', normalizedTerm: 'method', partOfSpeech: ['noun'], ipa: '/mˈɛθəd/',
    chineseShort: '方法；方式', chineseExplanation: '指与“方法；方式”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular way of doing something.',
    examples: [{ english: 'The researchers used a different method to collect the data.', chinese: '研究人员采用了不同的方法收集数据。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'minor', term: 'minor', normalizedTerm: 'minor', partOfSpeech: ['adjective', 'noun'], ipa: '/mˈaɪnɚ/',
    chineseShort: '较小的；次要的', chineseExplanation: '可作多种词性使用，核心意思包括“较小的；次要的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Not very serious, important, or large.',
    examples: [{ english: 'The update fixed several minor technical problems.', chinese: '这次更新修复了几个小的技术问题。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'monitor', term: 'monitor', normalizedTerm: 'monitor', partOfSpeech: ['verb', 'noun'], ipa: '/mˈɑnətɚ/',
    chineseShort: '监测；监督', chineseExplanation: '可作多种词性使用，核心意思包括“监测；监督”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To watch and check something carefully over a period of time.',
    examples: [{ english: 'Doctors monitor patients closely after major surgery.', chinese: '医生会在大手术后密切监测病人的情况。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'motivate', term: 'motivate', normalizedTerm: 'motivate', partOfSpeech: ['verb'], ipa: '/mˈoʊtəvˌeɪt/',
    chineseShort: '激励；促使', chineseExplanation: '表示“激励；促使”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give someone a reason or desire to do something.',
    examples: [{ english: 'Clear goals can motivate employees to improve their performance.', chinese: '明确的目标可以激励员工提升表现。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'mutual', term: 'mutual', normalizedTerm: 'mutual', partOfSpeech: ['adjective'], ipa: '/mjˈutʃuəl/',
    chineseShort: '相互的；共同的', chineseExplanation: '形容某人、事物或情况具有“相互的；共同的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Shared or felt by two or more people or groups.',
    examples: [{ english: 'The agreement was based on mutual trust and respect.', chinese: '这项协议建立在相互信任和尊重的基础上。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'negative', term: 'negative', normalizedTerm: 'negative', partOfSpeech: ['adjective', 'noun'], ipa: '/nˈɛɡətɪv/',
    chineseShort: '负面的；否定的', chineseExplanation: '可作多种词性使用，核心意思包括“负面的；否定的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Bad, harmful, or expressing disagreement or absence.',
    examples: [{ english: 'The policy received a largely negative response from the public.', chinese: '这项政策收到的公众反应大多是负面的。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'negotiate', term: 'negotiate', normalizedTerm: 'negotiate', partOfSpeech: ['verb'], ipa: '/nəɡˈoʊʃiˌeɪt/',
    chineseShort: '谈判；协商', chineseExplanation: '表示“谈判；协商”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To discuss something formally in order to reach an agreement.',
    examples: [{ english: 'The two companies are negotiating a new supply contract.', chinese: '两家公司正在协商一份新的供应合同。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'objective', term: 'objective', normalizedTerm: 'objective', partOfSpeech: ['noun', 'adjective'], ipa: '/əbdʒˈɛktɪv/',
    chineseShort: '目标；客观的', chineseExplanation: '可作多种词性使用，核心意思包括“目标；客观的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A goal to be achieved, or based on facts rather than personal feelings.',
    examples: [{ english: 'The main objective is to reduce waiting times for patients.', chinese: '主要目标是缩短病人的等候时间。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'obtain', term: 'obtain', normalizedTerm: 'obtain', partOfSpeech: ['verb'], ipa: '/əbtˈeɪn/',
    chineseShort: '获得；取得', chineseExplanation: '表示“获得；取得”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To get something, especially through effort or a formal process.',
    examples: [{ english: 'Applicants must obtain permission before using the data.', chinese: '申请人必须先获得许可才能使用这些数据。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'obvious', term: 'obvious', normalizedTerm: 'obvious', partOfSpeech: ['adjective'], ipa: '/ˈɑbviəs/',
    chineseShort: '明显的；显而易见的', chineseExplanation: '形容某人、事物或情况具有“明显的；显而易见的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easy to see, notice, or understand.',
    examples: [{ english: 'It was obvious that the old system could not handle the demand.', chinese: '很明显，旧系统无法应付这种需求。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'occur', term: 'occur', normalizedTerm: 'occur', partOfSpeech: ['verb'], ipa: '/əkˈɝ/',
    chineseShort: '发生；出现', chineseExplanation: '表示“发生；出现”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To happen or exist.',
    examples: [{ english: 'Most errors occur when users enter incomplete information.', chinese: '大多数错误发生在用户输入不完整信息时。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'option', term: 'option', normalizedTerm: 'option', partOfSpeech: ['noun'], ipa: '/ˈɑpʃən/',
    chineseShort: '选择；选项', chineseExplanation: '指与“选择；选项”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One of several things that can be chosen.',
    examples: [{ english: 'Working remotely is now an option for many employees.', chinese: '远程办公现在是许多员工的一种选择。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'outcome', term: 'outcome', normalizedTerm: 'outcome', partOfSpeech: ['noun'], ipa: '/ˈaʊtkˌʌm/',
    chineseShort: '结果；成果', chineseExplanation: '指与“结果；成果”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The final result of an action, process, or situation.',
    examples: [{ english: 'The outcome of the meeting was more positive than expected.', chinese: '会议的结果比预期更积极。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'overall', term: 'overall', normalizedTerm: 'overall', partOfSpeech: ['adjective', 'adverb'], ipa: '/ˈoʊvɚˌɔl/',
    chineseShort: '总体的；总的来说', chineseExplanation: '可作多种词性使用，核心意思包括“总体的；总的来说”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Considering everything or relating to the whole situation.',
    examples: [{ english: 'Overall performance improved despite a difficult first quarter.', chinese: '尽管第一季度困难重重，整体表现仍有所改善。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'participate', term: 'participate', normalizedTerm: 'participate', partOfSpeech: ['verb'], ipa: '/pɑrtˈɪsəpˌeɪt/',
    chineseShort: '参与；参加', chineseExplanation: '表示“参与；参加”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To take part in an activity or event.',
    examples: [{ english: 'More than two hundred students participated in the survey.', chinese: '两百多名学生参加了这项调查。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'particular', term: 'particular', normalizedTerm: 'particular', partOfSpeech: ['adjective'], ipa: '/pɚtˈɪkjəlɚ/',
    chineseShort: '特定的；特别的', chineseExplanation: '形容某人、事物或情况具有“特定的；特别的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Used to refer to one specific person, thing, or type.',
    examples: [{ english: 'This method is useful for a particular type of problem.', chinese: '这种方法适用于一种特定类型的问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'permanent', term: 'permanent', normalizedTerm: 'permanent', partOfSpeech: ['adjective'], ipa: '/pˈɝmənənt/',
    chineseShort: '永久的；长期的', chineseExplanation: '形容某人、事物或情况具有“永久的；长期的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Continuing for a long time or intended to last indefinitely.',
    examples: [{ english: 'The temporary office will be replaced by a permanent building.', chinese: '临时办公室将由永久性建筑取代。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'permit', term: 'permit', normalizedTerm: 'permit', partOfSpeech: ['verb', 'noun'], ipa: '/pɚmˈɪt/',
    chineseShort: '允许；许可证', chineseExplanation: '可作多种词性使用，核心意思包括“允许；许可证”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To allow something, or an official document giving permission.',
    examples: [{ english: 'The rules do not permit visitors to enter this area.', chinese: '规定不允许访客进入这个区域。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'perspective', term: 'perspective', normalizedTerm: 'perspective', partOfSpeech: ['noun'], ipa: '/pɚspˈɛktɪv/',
    chineseShort: '观点；视角', chineseExplanation: '指与“观点；视角”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular way of thinking about or viewing a situation.',
    examples: [{ english: 'The documentary presents the issue from several different perspectives.', chinese: '这部纪录片从多个不同角度呈现这个问题。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'potential', term: 'potential', normalizedTerm: 'potential', partOfSpeech: ['adjective', 'noun'], ipa: '/pətˈɛnʃəl/',
    chineseShort: '潜在的；潜力', chineseExplanation: '可作多种词性使用，核心意思包括“潜在的；潜力”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Possible in the future, or the ability to develop or succeed.',
    examples: [{ english: 'The technology has the potential to reduce energy use significantly.', chinese: '这项技术有潜力显著降低能源消耗。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'practical', term: 'practical', normalizedTerm: 'practical', partOfSpeech: ['adjective'], ipa: '/prˈæktəkəl/',
    chineseShort: '实际的；实用的', chineseExplanation: '形容某人、事物或情况具有“实际的；实用的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Useful and suitable for real situations rather than only theory.',
    examples: [{ english: 'The workshop provides practical advice for job interviews.', chinese: '这个工作坊为求职面试提供实用建议。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'predict', term: 'predict', normalizedTerm: 'predict', partOfSpeech: ['verb'], ipa: '/prɪdˈɪkt/',
    chineseShort: '预测；预言', chineseExplanation: '表示“预测；预言”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To say what is likely to happen in the future.',
    examples: [{ english: 'Experts cannot predict exactly how the market will change.', chinese: '专家无法准确预测市场将如何变化。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'prevent', term: 'prevent', normalizedTerm: 'prevent', partOfSpeech: ['verb'], ipa: '/prɪvˈɛnt/',
    chineseShort: '阻止；预防', chineseExplanation: '表示“阻止；预防”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To stop something from happening.',
    examples: [{ english: 'Regular maintenance can prevent serious equipment failures.', chinese: '定期维护可以防止严重的设备故障。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'priority', term: 'priority', normalizedTerm: 'priority', partOfSpeech: ['noun'], ipa: '/praɪˈɔrəti/',
    chineseShort: '优先事项；优先权', chineseExplanation: '指与“优先事项；优先权”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that is more important than other things and should be dealt with first.',
    examples: [{ english: 'Improving road safety should be a national priority.', chinese: '改善道路安全应成为国家优先事项。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'procedure', term: 'procedure', normalizedTerm: 'procedure', partOfSpeech: ['noun'], ipa: '/prəsˈidʒɚ/',
    chineseShort: '程序；步骤', chineseExplanation: '指与“程序；步骤”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An official or accepted way of doing something.',
    examples: [{ english: 'Staff must follow the correct procedure when handling complaints.', chinese: '员工处理投诉时必须遵循正确程序。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'process', term: 'process', normalizedTerm: 'process', partOfSpeech: ['noun', 'verb'], ipa: '/prˈɑsˌɛs/',
    chineseShort: '过程；处理', chineseExplanation: '可作多种词性使用，核心意思包括“过程；处理”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A series of actions that lead to a result, or to deal with information or material.',
    examples: [{ english: 'The application process usually takes several working days.', chinese: '申请流程通常需要几个工作日。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'professional', term: 'professional', normalizedTerm: 'professional', partOfSpeech: ['adjective', 'noun'], ipa: '/prəfˈɛʃənəl/',
    chineseShort: '专业的；专业人士', chineseExplanation: '可作多种词性使用，核心意思包括“专业的；专业人士”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to skilled work, or showing a high standard of behaviour.',
    examples: [{ english: 'The staff remained professional throughout the difficult meeting.', chinese: '在整个艰难的会议中，员工始终保持专业。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'proportion', term: 'proportion', normalizedTerm: 'proportion', partOfSpeech: ['noun'], ipa: '/prəpˈɔrʃən/',
    chineseShort: '比例；部分', chineseExplanation: '指与“比例；部分”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A part or share of a whole, often expressed as a fraction or percentage.',
    examples: [{ english: 'A large proportion of respondents preferred online services.', chinese: '很大一部分受访者更喜欢在线服务。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'prospect', term: 'prospect', normalizedTerm: 'prospect', partOfSpeech: ['noun'], ipa: '/prˈɑspɛkt/',
    chineseShort: '前景；可能性', chineseExplanation: '指与“前景；可能性”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The possibility that something will happen, especially something expected in the future.',
    examples: [{ english: 'The prospect of higher costs worries many small businesses.', chinese: '成本上升的前景让许多小企业担忧。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'protect', term: 'protect', normalizedTerm: 'protect', partOfSpeech: ['verb'], ipa: '/prətˈɛkt/',
    chineseShort: '保护', chineseExplanation: '表示“保护”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep someone or something safe from harm, damage, or loss.',
    examples: [{ english: 'Strong passwords help protect personal information online.', chinese: '强密码有助于保护网上的个人信息。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'prove', term: 'prove', normalizedTerm: 'prove', partOfSpeech: ['verb'], ipa: '/prˈuv/',
    chineseShort: '证明；证实', chineseExplanation: '表示“证明；证实”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show that something is true by using facts or evidence.',
    examples: [{ english: 'The experiment proved that the new material was stronger.', chinese: '实验表明这种新材料更坚固。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'provide', term: 'provide', normalizedTerm: 'provide', partOfSpeech: ['verb'], ipa: '/prəvˈaɪd/',
    chineseShort: '提供；供应', chineseExplanation: '表示“提供；供应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give someone something that they need or can use.',
    examples: [{ english: 'The website provides free resources for language learners.', chinese: '这个网站为语言学习者提供免费资源。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'publish', term: 'publish', normalizedTerm: 'publish', partOfSpeech: ['verb'], ipa: '/pˈʌblɪʃ/',
    chineseShort: '出版；发布', chineseExplanation: '表示“出版；发布”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make information or written work available to the public.',
    examples: [{ english: 'The university publishes the results of the survey every year.', chinese: '这所大学每年都会公布调查结果。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'pursue', term: 'pursue', normalizedTerm: 'pursue', partOfSpeech: ['verb'], ipa: '/pɚsˈu/',
    chineseShort: '追求；继续进行', chineseExplanation: '表示“追求；继续进行”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To try to achieve something over a period of time.',
    examples: [{ english: 'She decided to pursue a career in environmental science.', chinese: '她决定从事环境科学方面的职业。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'range', term: 'range', normalizedTerm: 'range', partOfSpeech: ['noun', 'verb'], ipa: '/rˈeɪndʒ/',
    chineseShort: '范围；一系列', chineseExplanation: '可作多种词性使用，核心意思包括“范围；一系列”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A variety of different things or the limits between which something varies.',
    examples: [{ english: 'The store offers a wide range of affordable products.', chinese: '这家商店提供多种价格实惠的产品。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'react', term: 'react', normalizedTerm: 'react', partOfSpeech: ['verb'], ipa: '/riˈækt/',
    chineseShort: '反应；回应', chineseExplanation: '表示“反应；回应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To behave or respond in a particular way because of something that happens.',
    examples: [{ english: 'Consumers reacted positively to the lower prices.', chinese: '消费者对降价作出了积极反应。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'reasonable', term: 'reasonable', normalizedTerm: 'reasonable', partOfSpeech: ['adjective'], ipa: '/rˈizənəbəl/',
    chineseShort: '合理的；适度的', chineseExplanation: '形容某人、事物或情况具有“合理的；适度的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Fair, sensible, or not too expensive or extreme.',
    examples: [{ english: 'The hotel offers good service at a reasonable price.', chinese: '这家酒店以合理价格提供良好服务。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'recognize', term: 'recognize', normalizedTerm: 'recognize', partOfSpeech: ['verb'], ipa: '/rˈɛkəɡnˌaɪz/',
    chineseShort: '认出；承认；认识到', chineseExplanation: '表示“认出；承认；认识到”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To identify someone or something, or accept that something is true or important.',
    examples: [{ english: 'The government recognized the need for better public transport.', chinese: '政府认识到改善公共交通的必要性。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'recommend', term: 'recommend', normalizedTerm: 'recommend', partOfSpeech: ['verb'], ipa: '/rˌɛkəmˈɛnd/',
    chineseShort: '推荐；建议', chineseExplanation: '表示“推荐；建议”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To say that something is good or suitable, or advise a course of action.',
    examples: [{ english: 'Doctors recommend regular exercise for most adults.', chinese: '医生建议大多数成年人定期运动。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'recover', term: 'recover', normalizedTerm: 'recover', partOfSpeech: ['verb'], ipa: '/rɪkˈʌvɚ/',
    chineseShort: '恢复；找回', chineseExplanation: '表示“恢复；找回”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To return to a normal condition after difficulty, illness, or loss.',
    examples: [{ english: 'The local economy is slowly recovering after a difficult year.', chinese: '当地经济在艰难的一年后正缓慢复苏。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'reduce', term: 'reduce', normalizedTerm: 'reduce', partOfSpeech: ['verb'], ipa: '/rədˈus/',
    chineseShort: '减少；降低', chineseExplanation: '表示“减少；降低”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something smaller in size, amount, or degree.',
    examples: [{ english: 'The company is trying to reduce unnecessary energy use.', chinese: '公司正努力减少不必要的能源消耗。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'refer', term: 'refer', normalizedTerm: 'refer', partOfSpeech: ['verb'], ipa: '/rəfˈɝ/',
    chineseShort: '提到；参考；指的是', chineseExplanation: '表示“提到；参考；指的是”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To mention something, direct someone to a source, or mean a particular thing.',
    examples: [{ english: 'The report refers to several studies on online learning.', chinese: '报告提到了几项关于在线学习的研究。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'reflect', term: 'reflect', normalizedTerm: 'reflect', partOfSpeech: ['verb'], ipa: '/rɪflˈɛkt/',
    chineseShort: '反映；思考', chineseExplanation: '表示“反映；思考”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show the nature of something, or think carefully about an experience.',
    examples: [{ english: 'The survey results reflect changing attitudes toward remote work.', chinese: '调查结果反映了人们对远程工作的态度变化。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'reform', term: 'reform', normalizedTerm: 'reform', partOfSpeech: ['noun', 'verb'], ipa: '/rəfˈɔrm/',
    chineseShort: '改革；改进', chineseExplanation: '可作多种词性使用，核心意思包括“改革；改进”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A change intended to improve a system or institution.',
    examples: [{ english: 'The education reform aims to give schools more flexibility.', chinese: '教育改革旨在给予学校更大的灵活性。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'regard', term: 'regard', normalizedTerm: 'regard', partOfSpeech: ['noun', 'verb'], ipa: '/rɪɡˈɑrd/',
    chineseShort: '看待；认为；方面', chineseExplanation: '可作多种词性使用，核心意思包括“看待；认为；方面”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To consider someone or something in a particular way.',
    examples: [{ english: 'Many people regard access to education as a basic right.', chinese: '许多人认为接受教育是一项基本权利。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'region', term: 'region', normalizedTerm: 'region', partOfSpeech: ['noun'], ipa: '/rˈidʒən/',
    chineseShort: '地区；区域', chineseExplanation: '指与“地区；区域”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular area of a country or the world.',
    examples: [{ english: 'The northern region receives more rainfall than the south.', chinese: '北部地区的降雨量比南部更多。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'regulate', term: 'regulate', normalizedTerm: 'regulate', partOfSpeech: ['verb'], ipa: '/rˈɛɡjəlˌeɪt/',
    chineseShort: '监管；控制', chineseExplanation: '表示“监管；控制”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To control an activity or process through rules or laws.',
    examples: [{ english: 'Governments regulate industries to protect consumers and workers.', chinese: '政府通过监管行业来保护消费者和工人。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'reject', term: 'reject', normalizedTerm: 'reject', partOfSpeech: ['verb'], ipa: '/rɪdʒˈɛkt/',
    chineseShort: '拒绝；不接受', chineseExplanation: '表示“拒绝；不接受”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To refuse to accept, approve, or believe something.',
    examples: [{ english: 'The committee rejected the proposal because it was too costly.', chinese: '委员会因成本过高而拒绝了该提案。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'relatively', term: 'relatively', normalizedTerm: 'relatively', partOfSpeech: ['adverb'], ipa: '/rˈɛlətɪvli/',
    chineseShort: '相对地；比较而言', chineseExplanation: '表示以“相对地；比较而言”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To a fairly small or moderate degree when compared with something else.',
    examples: [{ english: 'The city is relatively affordable compared with other capitals.', chinese: '与其他首都相比，这座城市的生活成本相对较低。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'relevant', term: 'relevant', normalizedTerm: 'relevant', partOfSpeech: ['adjective'], ipa: '/rˈɛləvənt/',
    chineseShort: '相关的；切题的', chineseExplanation: '形容某人、事物或情况具有“相关的；切题的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Closely connected with the subject or situation being discussed.',
    examples: [{ english: 'Please include only information that is relevant to the question.', chinese: '请只加入与问题相关的信息。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'require', term: 'require', normalizedTerm: 'require', partOfSpeech: ['verb'], ipa: '/rˌikwˈaɪɚ/',
    chineseShort: '需要；要求', chineseExplanation: '表示“需要；要求”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To need something or make something necessary.',
    examples: [{ english: 'The position requires at least two years of work experience.', chinese: '这个职位要求至少两年工作经验。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'research', term: 'research', normalizedTerm: 'research', partOfSpeech: ['noun', 'verb'], ipa: '/risˈɝtʃ/',
    chineseShort: '研究；调查', chineseExplanation: '可作多种词性使用，核心意思包括“研究；调查”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Careful study to discover new information or understand a subject better.',
    examples: [{ english: 'The team is conducting research into renewable energy.', chinese: '团队正在进行可再生能源方面的研究。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'reserve', term: 'reserve', normalizedTerm: 'reserve', partOfSpeech: ['verb', 'noun'], ipa: '/rɪzˈɝv/',
    chineseShort: '预订；保留；储备', chineseExplanation: '可作多种词性使用，核心意思包括“预订；保留；储备”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep something for future use or arrange to have it available.',
    examples: [{ english: 'You should reserve a seat early during the holiday season.', chinese: '假日期间你应该提前预订座位。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'resolve', term: 'resolve', normalizedTerm: 'resolve', partOfSpeech: ['verb'], ipa: '/rizˈɑlv/',
    chineseShort: '解决；下定决心', chineseExplanation: '表示“解决；下定决心”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To find a solution to a problem or disagreement.',
    examples: [{ english: 'The two sides met again to resolve the dispute.', chinese: '双方再次会面以解决争议。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'respond', term: 'respond', normalizedTerm: 'respond', partOfSpeech: ['verb'], ipa: '/rɪspˈɑnd/',
    chineseShort: '回应；作出反应', chineseExplanation: '表示“回应；作出反应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To answer or react to something.',
    examples: [{ english: 'The company responded quickly to customer complaints.', chinese: '公司迅速回应了顾客投诉。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'restrict', term: 'restrict', normalizedTerm: 'restrict', partOfSpeech: ['verb'], ipa: '/ristrˈɪkt/',
    chineseShort: '限制；约束', chineseExplanation: '表示“限制；约束”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To limit what someone can do or how much something can happen.',
    examples: [{ english: 'The rules restrict access to confidential information.', chinese: '规定限制了对机密信息的访问。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'retain', term: 'retain', normalizedTerm: 'retain', partOfSpeech: ['verb'], ipa: '/rɪtˈeɪn/',
    chineseShort: '保留；保持', chineseExplanation: '表示“保留；保持”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep something or continue to have it.',
    examples: [{ english: 'The company introduced new benefits to retain experienced staff.', chinese: '公司推出新福利以留住有经验的员工。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'reveal', term: 'reveal', normalizedTerm: 'reveal', partOfSpeech: ['verb'], ipa: '/rɪvˈil/',
    chineseShort: '揭示；透露', chineseExplanation: '表示“揭示；透露”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make previously unknown information known.',
    examples: [{ english: 'The survey revealed a clear difference between age groups.', chinese: '调查显示不同年龄组之间存在明显差异。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'risk', term: 'risk', normalizedTerm: 'risk', partOfSpeech: ['noun', 'verb'], ipa: '/rˈɪsk/',
    chineseShort: '风险；冒险', chineseExplanation: '可作多种词性使用，核心意思包括“风险；冒险”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The possibility that something harmful or unwanted may happen, or to expose something to danger.',
    examples: [{ english: 'The company reviewed the risks before entering the new market.', chinese: '公司在进入新市场前评估了相关风险。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'role', term: 'role', normalizedTerm: 'role', partOfSpeech: ['noun'], ipa: '/rˈoʊl/',
    chineseShort: '角色；作用', chineseExplanation: '指与“角色；作用”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The position, purpose, or function that someone or something has in a situation.',
    examples: [{ english: 'Technology plays an important role in modern education.', chinese: '科技在现代教育中发挥着重要作用。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'sector', term: 'sector', normalizedTerm: 'sector', partOfSpeech: ['noun'], ipa: '/sˈɛktɚ/',
    chineseShort: '行业；部门', chineseExplanation: '指与“行业；部门”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular part of the economy, society, or an area of activity.',
    examples: [{ english: 'Employment in the technology sector has grown rapidly.', chinese: '科技行业的就业人数迅速增长。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'secure', term: 'secure', normalizedTerm: 'secure', partOfSpeech: ['adjective', 'verb'], ipa: '/sɪkjˈʊr/',
    chineseShort: '安全的；获得；保护', chineseExplanation: '可作多种词性使用，核心意思包括“安全的；获得；保护”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Safe from danger, or to obtain or protect something successfully.',
    examples: [{ english: 'The company secured funding for the next stage of the project.', chinese: '公司为项目下一阶段获得了资金。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'seek', term: 'seek', normalizedTerm: 'seek', partOfSpeech: ['verb'], ipa: '/sˈik/',
    chineseShort: '寻求；寻找', chineseExplanation: '表示“寻求；寻找”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To try to find, obtain, or achieve something.',
    examples: [{ english: 'Many graduates seek work experience before applying for permanent jobs.', chinese: '许多毕业生在申请正式工作前会寻求工作经验。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'select', term: 'select', normalizedTerm: 'select', partOfSpeech: ['verb', 'adjective'], ipa: '/səlˈɛkt/',
    chineseShort: '选择；精选的', chineseExplanation: '可作多种词性使用，核心意思包括“选择；精选的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To choose someone or something carefully from a group.',
    examples: [{ english: 'Participants were selected according to their previous experience.', chinese: '参与者根据以往经验被选出。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'sensitive', term: 'sensitive', normalizedTerm: 'sensitive', partOfSpeech: ['adjective'], ipa: '/sˈɛnsətɪv/',
    chineseShort: '敏感的；需谨慎处理的', chineseExplanation: '形容某人、事物或情况具有“敏感的；需谨慎处理的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easily affected, requiring careful treatment, or involving private information.',
    examples: [{ english: 'Personal health records contain sensitive information.', chinese: '个人健康记录包含敏感信息。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'separate', term: 'separate', normalizedTerm: 'separate', partOfSpeech: ['adjective', 'verb'], ipa: '/sˈɛpɚˌeɪt/',
    chineseShort: '分开的；使分离', chineseExplanation: '可作多种词性使用，核心意思包括“分开的；使分离”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Not joined together, or to divide things into different parts.',
    examples: [{ english: 'The survey results were separated into three age groups.', chinese: '调查结果被分成三个年龄组。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'sequence', term: 'sequence', normalizedTerm: 'sequence', partOfSpeech: ['noun'], ipa: '/sˈikwəns/',
    chineseShort: '顺序；一连串', chineseExplanation: '指与“顺序；一连串”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A set of related events or actions that follow one another in a particular order.',
    examples: [{ english: 'The instructions explain the correct sequence of steps.', chinese: '说明书解释了正确的操作顺序。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'shift', term: 'shift', normalizedTerm: 'shift', partOfSpeech: ['noun', 'verb'], ipa: '/ʃˈɪft/',
    chineseShort: '转变；轮班；转移', chineseExplanation: '可作多种词性使用，核心意思包括“转变；轮班；转移”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A change in position, direction, opinion, or activity.',
    examples: [{ english: 'There has been a clear shift toward online shopping.', chinese: '人们明显转向了网上购物。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'similar', term: 'similar', normalizedTerm: 'similar', partOfSpeech: ['adjective'], ipa: '/sˈɪməlɚ/',
    chineseShort: '相似的', chineseExplanation: '形容某人、事物或情况具有“相似的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Almost the same but not exactly identical.',
    examples: [{ english: 'The two studies produced similar results.', chinese: '两项研究得出了相似的结果。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'solution', term: 'solution', normalizedTerm: 'solution', partOfSpeech: ['noun'], ipa: '/səlˈuʃən/',
    chineseShort: '解决方案；答案', chineseExplanation: '指与“解决方案；答案”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A way of solving a problem or dealing with a difficult situation.',
    examples: [{ english: 'The team proposed a simple solution to reduce waiting time.', chinese: '团队提出了一个减少等候时间的简单方案。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'specific', term: 'specific', normalizedTerm: 'specific', partOfSpeech: ['adjective'], ipa: '/spəsˈɪfɪk/',
    chineseShort: '具体的；特定的', chineseExplanation: '形容某人、事物或情况具有“具体的；特定的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Clearly defined or relating to one particular thing.',
    examples: [{ english: 'The report makes several specific recommendations for schools.', chinese: '报告针对学校提出了几项具体建议。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'stable', term: 'stable', normalizedTerm: 'stable', partOfSpeech: ['adjective'], ipa: '/stˈeɪbəl/',
    chineseShort: '稳定的；稳固的', chineseExplanation: '形容某人、事物或情况具有“稳定的；稳固的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Not likely to change suddenly or fail.',
    examples: [{ english: 'The economy remained relatively stable during the period.', chinese: '这一时期经济保持相对稳定。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'standard', term: 'standard', normalizedTerm: 'standard', partOfSpeech: ['noun', 'adjective'], ipa: '/stˈændɚd/',
    chineseShort: '标准；标准的', chineseExplanation: '可作多种词性使用，核心意思包括“标准；标准的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A level of quality or a rule used for comparison or judgment.',
    examples: [{ english: 'All products must meet the required safety standards.', chinese: '所有产品都必须达到规定的安全标准。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'strategy', term: 'strategy', normalizedTerm: 'strategy', partOfSpeech: ['noun'], ipa: '/strˈætədʒi/',
    chineseShort: '策略；战略', chineseExplanation: '指与“策略；战略”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A detailed plan designed to achieve a long-term goal.',
    examples: [{ english: 'The company needs a clear strategy for international growth.', chinese: '公司需要明确的国际增长战略。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'strengthen', term: 'strengthen', normalizedTerm: 'strengthen', partOfSpeech: ['verb'], ipa: '/strˈɛŋθən/',
    chineseShort: '加强；增强', chineseExplanation: '表示“加强；增强”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something stronger or more effective.',
    examples: [{ english: 'The new policy is intended to strengthen consumer protection.', chinese: '新政策旨在加强消费者保护。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'structure', term: 'structure', normalizedTerm: 'structure', partOfSpeech: ['noun', 'verb'], ipa: '/strˈʌktʃɚ/',
    chineseShort: '结构；组织', chineseExplanation: '可作多种词性使用，核心意思包括“结构；组织”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The way parts are arranged to form a whole, or to organize something in a particular way.',
    examples: [{ english: 'A clear structure makes an essay easier to follow.', chinese: '清晰的结构让文章更容易理解。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'submit', term: 'submit', normalizedTerm: 'submit', partOfSpeech: ['verb'], ipa: '/səbmˈɪt/',
    chineseShort: '提交；呈交', chineseExplanation: '表示“提交；呈交”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To formally give a document, request, or piece of work for consideration.',
    examples: [{ english: 'Students must submit their assignments by Friday.', chinese: '学生必须在星期五前提交作业。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'subsequent', term: 'subsequent', normalizedTerm: 'subsequent', partOfSpeech: ['adjective'], ipa: '/sˈʌbsəkwənt/',
    chineseShort: '随后的；后来的', chineseExplanation: '形容某人、事物或情况具有“随后的；后来的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Happening after something else.',
    examples: [{ english: 'Subsequent tests confirmed the original result.', chinese: '后续测试证实了最初的结果。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'sufficient', term: 'sufficient', normalizedTerm: 'sufficient', partOfSpeech: ['adjective'], ipa: '/səfˈɪʃənt/',
    chineseShort: '足够的；充分的', chineseExplanation: '形容某人、事物或情况具有“足够的；充分的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Enough for a particular purpose or need.',
    examples: [{ english: 'There was not sufficient evidence to support the claim.', chinese: '没有足够证据支持这一说法。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'summarize', term: 'summarize', normalizedTerm: 'summarize', partOfSpeech: ['verb'], ipa: '/sˈʌmɚˌaɪz/',
    chineseShort: '总结；概括', chineseExplanation: '表示“总结；概括”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give the main points of something in a short and clear form.',
    examples: [{ english: 'Please summarize the main findings in one paragraph.', chinese: '请用一个段落概括主要发现。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'supply', term: 'supply', normalizedTerm: 'supply', partOfSpeech: ['noun', 'verb'], ipa: '/səplˈaɪ/',
    chineseShort: '供应；提供', chineseExplanation: '可作多种词性使用，核心意思包括“供应；提供”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An amount available for use, or to provide something that is needed.',
    examples: [{ english: 'The storm interrupted the local water supply.', chinese: '暴风雨中断了当地供水。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'support', term: 'support', normalizedTerm: 'support', partOfSpeech: ['noun', 'verb'], ipa: '/səpˈɔrt/',
    chineseShort: '支持；支援', chineseExplanation: '可作多种词性使用，核心意思包括“支持；支援”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Help, approval, or evidence that makes something stronger, or to provide such help.',
    examples: [{ english: 'The proposal received strong support from local residents.', chinese: '这项提案得到了当地居民的大力支持。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'survive', term: 'survive', normalizedTerm: 'survive', partOfSpeech: ['verb'], ipa: '/sɚvˈaɪv/',
    chineseShort: '生存；幸存', chineseExplanation: '表示“生存；幸存”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To continue to live, exist, or operate despite difficulty.',
    examples: [{ english: 'Small businesses need enough cash to survive a long downturn.', chinese: '小企业需要足够现金才能熬过长期低迷。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'sustain', term: 'sustain', normalizedTerm: 'sustain', partOfSpeech: ['verb'], ipa: '/səstˈeɪn/',
    chineseShort: '维持；支撑', chineseExplanation: '表示“维持；支撑”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep something continuing over a period of time.',
    examples: [{ english: 'The company must increase sales to sustain its growth.', chinese: '公司必须增加销售额才能维持增长。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'technical', term: 'technical', normalizedTerm: 'technical', partOfSpeech: ['adjective'], ipa: '/tˈɛknɪkəl/',
    chineseShort: '技术的；专业技术性的', chineseExplanation: '形容某人、事物或情况具有“技术的；专业技术性的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to practical skills, specialized knowledge, machines, or technology.',
    examples: [{ english: 'The support team solved the technical problem within an hour.', chinese: '技术支持团队在一小时内解决了技术问题。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'temporary', term: 'temporary', normalizedTerm: 'temporary', partOfSpeech: ['adjective'], ipa: '/tˈɛmpɚˌɛri/',
    chineseShort: '临时的；暂时的', chineseExplanation: '形容某人、事物或情况具有“临时的；暂时的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing or lasting for only a limited period of time.',
    examples: [{ english: 'The road closure is temporary and should end next week.', chinese: '道路封闭只是暂时的，预计下周结束。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'tendency', term: 'tendency', normalizedTerm: 'tendency', partOfSpeech: ['noun'], ipa: '/tˈɛndənsi/',
    chineseShort: '倾向；趋势', chineseExplanation: '指与“倾向；趋势”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A general direction in which someone behaves or something develops.',
    examples: [{ english: 'There is a tendency for prices to rise during the holiday season.', chinese: '假日期间价格往往会上涨。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'theory', term: 'theory', normalizedTerm: 'theory', partOfSpeech: ['noun'], ipa: '/θˈɪri/',
    chineseShort: '理论；学说', chineseExplanation: '指与“理论；学说”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A set of ideas used to explain facts, events, or behaviour.',
    examples: [{ english: 'The experiment was designed to test the theory.', chinese: '这个实验是为了检验该理论而设计的。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'threat', term: 'threat', normalizedTerm: 'threat', partOfSpeech: ['noun'], ipa: '/θrˈɛt/',
    chineseShort: '威胁；危险', chineseExplanation: '指与“威胁；危险”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that is likely to cause harm, damage, or difficulty.',
    examples: [{ english: 'Cybercrime is a growing threat to small businesses.', chinese: '网络犯罪对小企业构成日益严重的威胁。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'transfer', term: 'transfer', normalizedTerm: 'transfer', partOfSpeech: ['noun', 'verb'], ipa: '/trænsfˈɝ/',
    chineseShort: '转移；转账；调动', chineseExplanation: '可作多种词性使用，核心意思包括“转移；转账；调动”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To move someone or something from one place, person, or system to another.',
    examples: [{ english: 'The files were transferred to a secure server.', chinese: '这些文件被转移到一个安全服务器上。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'transform', term: 'transform', normalizedTerm: 'transform', partOfSpeech: ['verb'], ipa: '/trænsfˈɔrm/',
    chineseShort: '彻底改变；转变', chineseExplanation: '表示“彻底改变；转变”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something greatly in form, appearance, or character.',
    examples: [{ english: 'Digital technology has transformed the way people communicate.', chinese: '数字技术彻底改变了人们沟通的方式。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'trend', term: 'trend', normalizedTerm: 'trend', partOfSpeech: ['noun'], ipa: '/trˈɛnd/',
    chineseShort: '趋势；动向', chineseExplanation: '指与“趋势；动向”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A general direction in which a situation is changing or developing.',
    examples: [{ english: 'The report identifies a growing trend toward flexible work.', chinese: '报告指出弹性工作正成为一种不断增长的趋势。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'typical', term: 'typical', normalizedTerm: 'typical', partOfSpeech: ['adjective'], ipa: '/tˈɪpəkəl/',
    chineseShort: '典型的；通常的', chineseExplanation: '形容某人、事物或情况具有“典型的；通常的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Having the usual qualities or characteristics of a particular type.',
    examples: [{ english: 'This is a typical example of a small family business.', chinese: '这是一个典型的小型家族企业例子。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'undergo', term: 'undergo', normalizedTerm: 'undergo', partOfSpeech: ['verb'], ipa: '/ˌʌndɚɡˈoʊ/',
    chineseShort: '经历；接受', chineseExplanation: '表示“经历；接受”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To experience a process, change, or treatment.',
    examples: [{ english: 'The building will undergo major repairs next month.', chinese: '这栋建筑下个月将进行大修。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'unique', term: 'unique', normalizedTerm: 'unique', partOfSpeech: ['adjective'], ipa: '/junˈik/',
    chineseShort: '独特的；唯一的', chineseExplanation: '形容某人、事物或情况具有“独特的；唯一的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Different from everything else of its type or the only one of its kind.',
    examples: [{ english: 'The region has a unique combination of cultures and languages.', chinese: '这个地区拥有独特的文化与语言组合。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'valid', term: 'valid', normalizedTerm: 'valid', partOfSpeech: ['adjective'], ipa: '/vˈælɪd/',
    chineseShort: '有效的；合理的', chineseExplanation: '形容某人、事物或情况具有“有效的；合理的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Legally or officially acceptable, or based on good reasons and evidence.',
    examples: [{ english: 'The ticket is valid for travel on any bus today.', chinese: '这张票今天乘坐任何巴士都有效。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'vary', term: 'vary', normalizedTerm: 'vary', partOfSpeech: ['verb'], ipa: '/vˈɛri/',
    chineseShort: '变化；有所不同', chineseExplanation: '表示“变化；有所不同”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To be different in different situations or change over time.',
    examples: [{ english: 'Prices vary depending on the season and location.', chinese: '价格会因季节和地点而有所不同。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'version', term: 'version', normalizedTerm: 'version', partOfSpeech: ['noun'], ipa: '/vˈɝʒən/',
    chineseShort: '版本；说法', chineseExplanation: '指与“版本；说法”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular form of something that differs from other forms of the same thing.',
    examples: [{ english: 'The latest version of the app includes several new features.', chinese: '该应用的最新版本包含多项新功能。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'visible', term: 'visible', normalizedTerm: 'visible', partOfSpeech: ['adjective'], ipa: '/vˈɪzəbəl/',
    chineseShort: '可见的；明显的', chineseExplanation: '形容某人、事物或情况具有“可见的；明显的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Able to be seen or easy to notice.',
    examples: [{ english: 'There was a visible improvement in the quality of the final report.', chinese: '最终报告的质量有明显改善。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'welfare', term: 'welfare', normalizedTerm: 'welfare', partOfSpeech: ['noun'], ipa: '/wˈɛlfˌɛr/',
    chineseShort: '福利；福祉', chineseExplanation: '指与“福利；福祉”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The health, happiness, safety, and general well-being of a person or group.',
    examples: [{ english: 'The policy is intended to protect the welfare of children.', chinese: '这项政策旨在保护儿童福祉。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'widespread', term: 'widespread', normalizedTerm: 'widespread', partOfSpeech: ['adjective'], ipa: '/wˈaɪdsprˈɛd/',
    chineseShort: '广泛的；普遍的', chineseExplanation: '形容某人、事物或情况具有“广泛的；普遍的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing or happening over a large area or among many people.',
    examples: [{ english: 'The new payment method has gained widespread acceptance.', chinese: '这种新支付方式已获得广泛接受。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'withdraw', term: 'withdraw', normalizedTerm: 'withdraw', partOfSpeech: ['verb'], ipa: '/wɪðdrˈɔ/',
    chineseShort: '撤回；退出；取款', chineseExplanation: '表示“撤回；退出；取款”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To remove something, stop taking part, or take money from an account.',
    examples: [{ english: 'The company decided to withdraw the product from the market.', chinese: '公司决定将该产品撤出市场。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'accommodate', term: 'accommodate', normalizedTerm: 'accommodate', partOfSpeech: ['verb'], ipa: '/əkˈɑmədˌeɪt/',
    chineseShort: '容纳；满足；适应', chineseExplanation: '表示“容纳；满足；适应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To provide enough space for someone or something, or adjust to meet a need.',
    examples: [{ english: 'The new hall can accommodate more than five hundred people.', chinese: '新的礼堂可以容纳五百多人。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'accumulate', term: 'accumulate', normalizedTerm: 'accumulate', partOfSpeech: ['verb'], ipa: '/əkjˈumjəlˌeɪt/',
    chineseShort: '积累；积聚', chineseExplanation: '表示“积累；积聚”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To gradually collect or increase over a period of time.',
    examples: [{ english: 'Small errors can accumulate and create a serious problem.', chinese: '小错误会逐渐累积并造成严重问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'address', term: 'address', normalizedTerm: 'address', partOfSpeech: ['verb', 'noun'], ipa: '/ˈædrˌɛs/',
    chineseShort: '处理；解决；地址', chineseExplanation: '可作多种词性使用，核心意思包括“处理；解决；地址”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deal with a problem or issue, or the details of where someone lives or works.',
    examples: [{ english: 'The new policy aims to address the shortage of skilled workers.', chinese: '新政策旨在解决技术工人短缺的问题。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'admission', term: 'admission', normalizedTerm: 'admission', partOfSpeech: ['noun'], ipa: '/ædmˈɪʃən/',
    chineseShort: '准许进入；承认；入场费', chineseExplanation: '指与“准许进入；承认；入场费”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Permission to enter a place or institution, or an act of admitting something is true.',
    examples: [{ english: 'Admission to the program depends on academic performance.', chinese: '能否进入该课程取决于学业表现。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'aggressive', term: 'aggressive', normalizedTerm: 'aggressive', partOfSpeech: ['adjective'], ipa: '/əɡrˈɛsɪv/',
    chineseShort: '咄咄逼人的；激进的', chineseExplanation: '形容某人、事物或情况具有“咄咄逼人的；激进的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Behaving in a forceful or hostile way, or acting very strongly to achieve a goal.',
    examples: [{ english: 'The company adopted an aggressive strategy to increase market share.', chinese: '公司采取了激进策略来扩大市场份额。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'agriculture', term: 'agriculture', normalizedTerm: 'agriculture', partOfSpeech: ['noun'], ipa: '/ˈæɡrɪkˌʌltʃɚ/',
    chineseShort: '农业', chineseExplanation: '指与“农业”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The work and industry of growing crops and raising animals for food or other products.',
    examples: [{ english: 'Modern agriculture increasingly relies on technology to improve efficiency.', chinese: '现代农业越来越依赖科技来提高效率。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'applicant', term: 'applicant', normalizedTerm: 'applicant', partOfSpeech: ['noun'], ipa: '/ˈæplɪkənt/',
    chineseShort: '申请人；应聘者', chineseExplanation: '指与“申请人；应聘者”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A person who formally applies for a job, course, or other opportunity.',
    examples: [{ english: 'Each applicant must provide two references.', chinese: '每位申请人都必须提供两份推荐证明。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'artificial', term: 'artificial', normalizedTerm: 'artificial', partOfSpeech: ['adjective'], ipa: '/ˌɑrtəfˈɪʃəl/',
    chineseShort: '人造的；人工的', chineseExplanation: '形容某人、事物或情况具有“人造的；人工的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Made by people rather than occurring naturally.',
    examples: [{ english: 'Artificial lighting can affect how products appear in photographs.', chinese: '人工照明会影响产品在照片中的呈现效果。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'aspect', term: 'aspect', normalizedTerm: 'aspect', partOfSpeech: ['noun'], ipa: '/ˈæspˌɛkt/',
    chineseShort: '方面；层面', chineseExplanation: '指与“方面；层面”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One particular part or feature of a situation, subject, or problem.',
    examples: [{ english: 'Cost is only one aspect of the decision.', chinese: '成本只是这个决定的一个方面。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'asset', term: 'asset', normalizedTerm: 'asset', partOfSpeech: ['noun'], ipa: '/ˈæsˌɛt/',
    chineseShort: '资产；有价值的人或事物', chineseExplanation: '指与“资产；有价值的人或事物”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something valuable that a person or organization owns or benefits from.',
    examples: [{ english: 'Strong communication skills are a valuable asset in most careers.', chinese: '良好的沟通能力在大多数职业中都是宝贵的优势。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'assure', term: 'assure', normalizedTerm: 'assure', partOfSpeech: ['verb'], ipa: '/əʃˈʊr/',
    chineseShort: '向……保证；使确信', chineseExplanation: '表示“向……保证；使确信”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To tell someone confidently that something is true or will happen.',
    examples: [{ english: 'The manager assured staff that no jobs would be lost.', chinese: '经理向员工保证不会裁员。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'astonishing', term: 'astonishing', normalizedTerm: 'astonishing', partOfSpeech: ['adjective'], ipa: '/əstˈɑnɪʃɪŋ/',
    chineseShort: '令人惊讶的；惊人的', chineseExplanation: '形容某人、事物或情况具有“令人惊讶的；惊人的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Extremely surprising or impressive.',
    examples: [{ english: 'The project achieved an astonishing improvement in response time.', chinese: '该项目在响应时间方面取得了惊人的改善。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'attachment', term: 'attachment', normalizedTerm: 'attachment', partOfSpeech: ['noun'], ipa: '/ətˈætʃmənt/',
    chineseShort: '附件；依恋', chineseExplanation: '指与“附件；依恋”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A file sent with a message, or a strong feeling of connection to someone or something.',
    examples: [{ english: 'Please check the attachment before sending the email.', chinese: '发送电子邮件前请检查附件。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'barely', term: 'barely', normalizedTerm: 'barely', partOfSpeech: ['adverb'], ipa: '/bˈɛrli/',
    chineseShort: '几乎不；勉强', chineseExplanation: '表示以“几乎不；勉强”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Only just, almost not, or by a very small amount.',
    examples: [{ english: 'The company barely made a profit last year.', chinese: '公司去年几乎没有盈利。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'bargain', term: 'bargain', normalizedTerm: 'bargain', partOfSpeech: ['noun', 'verb'], ipa: '/bˈɑrɡən/',
    chineseShort: '便宜货；讨价还价', chineseExplanation: '可作多种词性使用，核心意思包括“便宜货；讨价还价”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something bought for less than its usual value, or to discuss a price in order to reduce it.',
    examples: [{ english: 'The laptop was a bargain compared with similar models.', chinese: '与类似型号相比，这台笔记本电脑很划算。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'broadcast', term: 'broadcast', normalizedTerm: 'broadcast', partOfSpeech: ['noun', 'verb'], ipa: '/brˈɔdkˌæst/',
    chineseShort: '广播；播送', chineseExplanation: '可作多种词性使用，核心意思包括“广播；播送”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A radio or television program, or to send programs or information to many people.',
    examples: [{ english: 'The interview was broadcast live across the country.', chinese: '这次采访在全国进行了现场直播。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'capture', term: 'capture', normalizedTerm: 'capture', partOfSpeech: ['verb', 'noun'], ipa: '/kˈæptʃɚ/',
    chineseShort: '捕捉；记录；夺取', chineseExplanation: '可作多种词性使用，核心意思包括“捕捉；记录；夺取”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To catch, record, or attract something such as attention, an image, or information.',
    examples: [{ english: 'The photo captures the rapid changes taking place in the city.', chinese: '这张照片记录了这座城市正在发生的快速变化。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'cease', term: 'cease', normalizedTerm: 'cease', partOfSpeech: ['verb'], ipa: '/sˈis/',
    chineseShort: '停止；终止', chineseExplanation: '表示“停止；终止”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To stop happening or stop doing something.',
    examples: [{ english: 'The factory will cease production at the end of the month.', chinese: '工厂将在月底停止生产。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'cite', term: 'cite', normalizedTerm: 'cite', partOfSpeech: ['verb'], ipa: '/sˈaɪt/',
    chineseShort: '引用；举例说明', chineseExplanation: '表示“引用；举例说明”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To mention a source, example, or reason as evidence or support.',
    examples: [{ english: 'The essay cites several recent studies to support its argument.', chinese: '这篇文章引用了几项近期研究来支持其论点。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'clinical', term: 'clinical', normalizedTerm: 'clinical', partOfSpeech: ['adjective'], ipa: '/klˈɪnəkəl/',
    chineseShort: '临床的；客观冷静的', chineseExplanation: '形容某人、事物或情况具有“临床的；客观冷静的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the examination and treatment of patients, especially in medical settings.',
    examples: [{ english: 'The medicine is still being tested in clinical trials.', chinese: '这种药物仍在进行临床试验。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'compensation', term: 'compensation', normalizedTerm: 'compensation', partOfSpeech: ['noun'], ipa: '/kˌɑmpənsˈeɪʃən/',
    chineseShort: '补偿；赔偿；薪酬', chineseExplanation: '指与“补偿；赔偿；薪酬”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Money or another benefit given for work, loss, injury, or inconvenience.',
    examples: [{ english: 'Passengers may receive compensation for long delays.', chinese: '长时间延误的乘客可能会获得赔偿。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'concept', term: 'concept', normalizedTerm: 'concept', partOfSpeech: ['noun'], ipa: '/kˈɑnsɛpt/',
    chineseShort: '概念；观念', chineseExplanation: '指与“概念；观念”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An idea or principle used to understand or explain something.',
    examples: [{ english: 'The course introduces the basic concept of sustainable development.', chinese: '这门课程介绍可持续发展的基本概念。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'conclude', term: 'conclude', normalizedTerm: 'conclude', partOfSpeech: ['verb'], ipa: '/kənklˈud/',
    chineseShort: '得出结论；结束', chineseExplanation: '表示“得出结论；结束”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To decide something after considering evidence, or to bring something to an end.',
    examples: [{ english: 'Researchers concluded that further testing was necessary.', chinese: '研究人员得出结论，认为还需要进一步测试。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'concrete', term: 'concrete', normalizedTerm: 'concrete', partOfSpeech: ['adjective', 'noun'], ipa: '/kənkrˈit/',
    chineseShort: '具体的；混凝土', chineseExplanation: '可作多种词性使用，核心意思包括“具体的；混凝土”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Clear and specific rather than general or abstract, or a hard building material.',
    examples: [{ english: 'The report offers concrete suggestions for improving customer service.', chinese: '报告提出了改善客户服务的具体建议。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'consumption', term: 'consumption', normalizedTerm: 'consumption', partOfSpeech: ['noun'], ipa: '/kənsˈʌmpʃən/',
    chineseShort: '消费；消耗', chineseExplanation: '指与“消费；消耗”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The use of goods, services, energy, or other resources.',
    examples: [{ english: 'Energy consumption fell after the building was renovated.', chinese: '建筑翻新后，能源消耗下降了。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'contract', term: 'contract', normalizedTerm: 'contract', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑntrˌækt/',
    chineseShort: '合同；签约；收缩', chineseExplanation: '可作多种词性使用，核心意思包括“合同；签约；收缩”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A legal agreement, or to formally agree to provide work or services.',
    examples: [{ english: 'The supplier signed a three-year contract with the company.', chinese: '供应商与公司签订了为期三年的合同。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'controversy', term: 'controversy', normalizedTerm: 'controversy', partOfSpeech: ['noun'], ipa: '/kˈɑntrəvˌɝsi/',
    chineseShort: '争议；争论', chineseExplanation: '指与“争议；争论”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Strong public disagreement about an issue or decision.',
    examples: [{ english: 'The proposal caused considerable controversy among local residents.', chinese: '该提案在当地居民中引发了相当大的争议。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'conventional', term: 'conventional', normalizedTerm: 'conventional', partOfSpeech: ['adjective'], ipa: '/kənvˈɛnʃənəl/',
    chineseShort: '传统的；常规的', chineseExplanation: '形容某人、事物或情况具有“传统的；常规的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Following commonly accepted methods, ideas, or practices.',
    examples: [{ english: 'The new system is faster than conventional methods of processing data.', chinese: '新系统比传统的数据处理方法更快。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'convert', term: 'convert', normalizedTerm: 'convert', partOfSpeech: ['verb'], ipa: '/kˈɑnvɚt/',
    chineseShort: '转换；改造', chineseExplanation: '表示“转换；改造”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something into a different form, system, or use.',
    examples: [{ english: 'The tool can convert the file into several different formats.', chinese: '这个工具可以把文件转换成多种不同格式。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'currency', term: 'currency', normalizedTerm: 'currency', partOfSpeech: ['noun'], ipa: '/kˈɝənsi/',
    chineseShort: '货币；通用性', chineseExplanation: '指与“货币；通用性”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The system of money used in a particular country or region.',
    examples: [{ english: 'Travellers should check the local currency before making large payments.', chinese: '旅行者在进行大额付款前应了解当地货币。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'curriculum', term: 'curriculum', normalizedTerm: 'curriculum', partOfSpeech: ['noun'], ipa: '/kɚˈɪkjələm/',
    chineseShort: '课程体系；课程设置', chineseExplanation: '指与“课程体系；课程设置”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The subjects and content taught in a school, college, or educational program.',
    examples: [{ english: 'Digital literacy has become part of the school curriculum.', chinese: '数字素养已经成为学校课程的一部分。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'deadline', term: 'deadline', normalizedTerm: 'deadline', partOfSpeech: ['noun'], ipa: '/dˈɛdlˌaɪn/',
    chineseShort: '截止日期', chineseExplanation: '指与“截止日期”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The latest time or date by which something must be completed.',
    examples: [{ english: 'The team worked late to meet the project deadline.', chinese: '团队加班以赶上项目截止日期。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'deliberate', term: 'deliberate', normalizedTerm: 'deliberate', partOfSpeech: ['adjective', 'verb'], ipa: '/dɪlˈɪbɚət/',
    chineseShort: '故意的；深思熟虑的', chineseExplanation: '可作多种词性使用，核心意思包括“故意的；深思熟虑的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Done intentionally and carefully, or to think and discuss before making a decision.',
    examples: [{ english: 'The change was a deliberate attempt to simplify the process.', chinese: '这一变化是为了简化流程而作出的有意尝试。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'derive', term: 'derive', normalizedTerm: 'derive', partOfSpeech: ['verb'], ipa: '/dɚˈaɪv/',
    chineseShort: '获得；源自', chineseExplanation: '表示“获得；源自”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To get something from a source or to originate from something.',
    examples: [{ english: 'Many English words derive from Latin or Greek.', chinese: '许多英语单词源自拉丁语或希腊语。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'discipline', term: 'discipline', normalizedTerm: 'discipline', partOfSpeech: ['noun', 'verb'], ipa: '/dˈɪsəplən/',
    chineseShort: '学科；纪律；自律', chineseExplanation: '可作多种词性使用，核心意思包括“学科；纪律；自律”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A field of study, controlled behaviour, or training that develops self-control.',
    examples: [{ english: 'Regular study requires discipline and good time management.', chinese: '规律学习需要自律和良好的时间管理。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'discount', term: 'discount', normalizedTerm: 'discount', partOfSpeech: ['noun', 'verb'], ipa: '/dɪskˈaʊnt/',
    chineseShort: '折扣；打折', chineseExplanation: '可作多种词性使用，核心意思包括“折扣；打折”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A reduction in the usual price, or to reduce the price of something.',
    examples: [{ english: 'Students can receive a discount on public transport.', chinese: '学生乘坐公共交通可以享受折扣。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'dominant', term: 'dominant', normalizedTerm: 'dominant', partOfSpeech: ['adjective'], ipa: '/dˈɑmənənt/',
    chineseShort: '占主导的；支配的', chineseExplanation: '形容某人、事物或情况具有“占主导的；支配的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'More important, powerful, or noticeable than other things of the same type.',
    examples: [{ english: 'Online shopping has become a dominant part of the retail market.', chinese: '网上购物已成为零售市场的重要组成部分。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'emotional', term: 'emotional', normalizedTerm: 'emotional', partOfSpeech: ['adjective'], ipa: '/ɪmˈoʊʃənəl/',
    chineseShort: '情绪的；感情强烈的', chineseExplanation: '形容某人、事物或情况具有“情绪的；感情强烈的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to feelings or causing strong feelings.',
    examples: [{ english: 'Major life changes can have a strong emotional effect on people.', chinese: '重大生活变化会对人产生强烈的情绪影响。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'estate', term: 'estate', normalizedTerm: 'estate', partOfSpeech: ['noun'], ipa: '/ɪstˈeɪt/',
    chineseShort: '地产；财产', chineseExplanation: '指与“地产；财产”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A large area of land or property, or all the property owned by someone.',
    examples: [{ english: 'Housing prices have risen across the new residential estate.', chinese: '新住宅区的房价普遍上涨。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'facility', term: 'facility', normalizedTerm: 'facility', partOfSpeech: ['noun'], ipa: '/fəsˈɪlɪti/',
    chineseShort: '设施；场所', chineseExplanation: '指与“设施；场所”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A building, place, or piece of equipment provided for a particular purpose.',
    examples: [{ english: 'The sports facility is open to students and local residents.', chinese: '这项体育设施向学生和当地居民开放。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'federal', term: 'federal', normalizedTerm: 'federal', partOfSpeech: ['adjective'], ipa: '/fˈɛdɚəl/',
    chineseShort: '联邦的', chineseExplanation: '形容某人、事物或情况具有“联邦的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to a system in which power is shared between a central government and regional governments.',
    examples: [{ english: 'Federal law applies across the entire country.', chinese: '联邦法律适用于全国。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'former', term: 'former', normalizedTerm: 'former', partOfSpeech: ['adjective', 'noun'], ipa: '/fˈɔrmɚ/',
    chineseShort: '以前的；前任的', chineseExplanation: '可作多种词性使用，核心意思包括“以前的；前任的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Having had a particular position or condition in the past.',
    examples: [{ english: 'The former manager returned to advise the new leadership team.', chinese: '前任经理回来为新的领导团队提供建议。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'furthermore', term: 'furthermore', normalizedTerm: 'furthermore', partOfSpeech: ['adverb'], ipa: '/fˈɝðɚmˌɔr/',
    chineseShort: '此外；而且', chineseExplanation: '表示以“此外；而且”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Used to add another point that supports or develops an argument.',
    examples: [{ english: 'The plan is affordable; furthermore, it can be implemented quickly.', chinese: '这个计划成本可控，而且可以迅速实施。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'genetic', term: 'genetic', normalizedTerm: 'genetic', partOfSpeech: ['adjective'], ipa: '/dʒənˈɛtɪk/',
    chineseShort: '遗传的；基因的', chineseExplanation: '形容某人、事物或情况具有“遗传的；基因的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to genes and the way characteristics are passed from parents to children.',
    examples: [{ english: 'Scientists are studying genetic factors linked to the disease.', chinese: '科学家正在研究与这种疾病有关的遗传因素。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'grant', term: 'grant', normalizedTerm: 'grant', partOfSpeech: ['noun', 'verb'], ipa: '/ɡrˈænt/',
    chineseShort: '拨款；授予', chineseExplanation: '可作多种词性使用，核心意思包括“拨款；授予”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Money given for a particular purpose, or to formally give or allow something.',
    examples: [{ english: 'The university received a research grant for the project.', chinese: '这所大学为该项目获得了一笔研究拨款。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'guarantee', term: 'guarantee', normalizedTerm: 'guarantee', partOfSpeech: ['noun', 'verb'], ipa: '/ɡˌɛrəntˈi/',
    chineseShort: '保证；担保', chineseExplanation: '可作多种词性使用，核心意思包括“保证；担保”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A promise that something will happen or work as expected, or to make such a promise.',
    examples: [{ english: 'The company cannot guarantee delivery by Friday.', chinese: '公司无法保证星期五前送达。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'impose', term: 'impose', normalizedTerm: 'impose', partOfSpeech: ['verb'], ipa: '/ˌɪmpˈoʊz/',
    chineseShort: '强加；实施', chineseExplanation: '表示“强加；实施”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To officially force a rule, tax, restriction, or condition on people.',
    examples: [{ english: 'The city imposed stricter limits on heavy vehicles in the centre.', chinese: '该市对市中心的重型车辆实施了更严格的限制。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'intervention', term: 'intervention', normalizedTerm: 'intervention', partOfSpeech: ['noun'], ipa: '/ˌɪntɚvˈɛnʃən/',
    chineseShort: '干预；介入', chineseExplanation: '指与“干预；介入”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Action taken to improve or influence a difficult situation.',
    examples: [{ english: 'Early intervention can prevent a small problem from becoming serious.', chinese: '及早干预可以防止小问题变严重。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'revenue', term: 'revenue', normalizedTerm: 'revenue', partOfSpeech: ['noun'], ipa: '/rˈɛvənˌu/',
    chineseShort: '收入；收益', chineseExplanation: '指与“收入；收益”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Money received by a business, organization, or government from its activities.',
    examples: [{ english: 'Online sales now provide a large share of the company\'s revenue.', chinese: '网上销售现在占公司收入的很大一部分。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
] satisfies readonly VocabularyItem[]
