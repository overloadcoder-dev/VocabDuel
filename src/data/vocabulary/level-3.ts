import type { VocabularyItem } from '../../types'

/** Independent B1-B2 vocabulary with broader meanings and common academic use. */
export const level3Vocabulary = [
  {
    id: 'acquire', term: 'acquire', normalizedTerm: 'acquire', partOfSpeech: ['verb'], ipa: '/əˈkwaɪə/',
    chineseShort: '获得；取得；习得', chineseExplanation: '通常表示经过努力、购买、学习或某种过程之后获得某物，比 get 更正式。', englishDefinition: 'To obtain or gain something.',
    examples: [{ english: 'Students acquire strong English skills through regular practice.', malay: 'Pelajar memperoleh kemahiran Bahasa Inggeris yang kukuh melalui latihan berkala.', chinese: '学生通过经常练习掌握扎实的英语能力。' }], collocations: ['acquire knowledge', 'acquire skills', 'acquire experience'], synonyms: ['obtain', 'gain'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'gradually', term: 'gradually', normalizedTerm: 'gradually', partOfSpeech: ['adverb'], ipa: '/ˈɡrædʒuəli/',
    chineseShort: '逐渐地；渐渐地', chineseExplanation: '表示变化缓慢地、分阶段地发生，而不是突然发生。', englishDefinition: 'Slowly over a period of time or in stages.',
    examples: [{ english: 'The weather gradually became warmer.', malay: 'Cuaca beransur-ansur menjadi lebih panas.', chinese: '天气逐渐变暖了。' }], synonyms: ['progressively'], antonyms: ['suddenly'], level: 3, cefr: 'B1', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'reluctant', term: 'reluctant', normalizedTerm: 'reluctant', partOfSpeech: ['adjective'], ipa: '/rɪˈlʌktənt/',
    chineseShort: '不情愿的；勉强的', chineseExplanation: '因为犹豫、不喜欢或缺乏信心而不愿意做某事。', englishDefinition: 'Unwilling and hesitant to do something.',
    examples: [{ english: 'He was reluctant to admit his mistake.', malay: 'Dia keberatan untuk mengakui kesilapannya.', chinese: '他不情愿承认自己的错误。' }], collocations: ['reluctant to agree'], synonyms: ['unwilling'], antonyms: ['willing'], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'evaluate', term: 'evaluate', normalizedTerm: 'evaluate', partOfSpeech: ['verb'], ipa: '/ɪˈvæljueɪt/',
    chineseShort: '评估；评价', chineseExplanation: '根据证据或标准仔细判断某事物的质量、重要性或价值。', englishDefinition: 'To judge the quality, importance, or value of something carefully.',
    examples: [{ english: 'Researchers must evaluate the results of the experiment.', malay: 'Para penyelidik mesti menilai hasil eksperimen tersebut.', chinese: '研究人员必须评估实验结果。' }], collocations: ['evaluate performance', 'evaluate evidence'], synonyms: ['assess'], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'maintain', term: 'maintain', normalizedTerm: 'maintain', partOfSpeech: ['verb'], ipa: '/meɪnˈteɪn/',
    chineseShort: '维持；保养；坚持认为', chineseExplanation: '使某事物保持某种状态；也可表示保养设备或坚持某一观点。', englishDefinition: 'To keep something in a particular condition or to continue to state something is true.',
    examples: [{ english: 'Regular updates help maintain system security.', malay: 'Kemas kini berkala membantu mengekalkan keselamatan sistem.', chinese: '定期更新有助于维护系统安全。' }], collocations: ['maintain quality', 'maintain equipment'], synonyms: ['preserve'], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'efficient', term: 'efficient', normalizedTerm: 'efficient', partOfSpeech: ['adjective'], ipa: '/ɪˈfɪʃənt/',
    chineseShort: '高效的；效率高的', chineseExplanation: '以较少的时间、精力或资源取得良好结果的。', englishDefinition: 'Working well without wasting time, energy, or resources.',
    examples: [{ english: 'The new process is faster and more efficient.', malay: 'Ayat ini menunjukkan penggunaan perkataan “efficient” dalam konteks Bahasa Inggeris British.', chinese: '新流程更快，也更高效。' }], collocations: ['energy-efficient', 'highly efficient'], antonyms: ['inefficient'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'significant', term: 'significant', normalizedTerm: 'significant', partOfSpeech: ['adjective'], ipa: '/sɪɡˈnɪfɪkənt/',
    chineseShort: '重要的；显著的', chineseExplanation: '重要到值得注意，或在程度、数量上足够明显。', englishDefinition: 'Important or large enough to be noticed.',
    examples: [{ english: 'The study found a significant difference between the groups.', malay: 'Ayat ini menunjukkan penggunaan perkataan “significant” dalam konteks Bahasa Inggeris British.', chinese: '研究发现两组之间存在显著差异。' }], collocations: ['significant change', 'statistically significant'], synonyms: ['notable'], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'consequence', term: 'consequence', normalizedTerm: 'consequence', partOfSpeech: ['noun'], ipa: '/ˈkɒnsɪkwəns/',
    chineseShort: '结果；后果', chineseExplanation: '由某个行为、决定或情况直接造成的结果，常指较重要的影响。', englishDefinition: 'A result or effect caused by an action, decision, or situation.',
    examples: [{ english: 'Every decision may have an unexpected consequence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consequence” dalam konteks Bahasa Inggeris British.', chinese: '每个决定都可能产生意想不到的后果。' }], collocations: ['serious consequence', 'as a consequence'], synonyms: ['result'], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'adapt', term: 'adapt', normalizedTerm: 'adapt', partOfSpeech: ['verb'], ipa: '/əˈdæpt/',
    chineseShort: '适应；改编', chineseExplanation: '为适合新的环境或用途而改变自己或某物。', englishDefinition: 'To change in order to suit new conditions or a new purpose.',
    examples: [{ english: 'Businesses must adapt to changing technology.', malay: 'Ayat ini menunjukkan penggunaan perkataan “adapt” dalam konteks Bahasa Inggeris British.', chinese: '企业必须适应不断变化的技术。' }], collocations: ['adapt to change', 'adapt a book'], synonyms: ['adjust'], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'reliable', term: 'reliable', normalizedTerm: 'reliable', partOfSpeech: ['adjective'], ipa: '/rɪˈlaɪəbəl/',
    chineseShort: '可靠的；可信赖的', chineseExplanation: '能够持续正确工作，或可以被信任会按预期做事。', englishDefinition: 'Consistently dependable, accurate, or able to be trusted.',
    examples: [{ english: 'Use reliable sources in your research.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reliable” dalam konteks Bahasa Inggeris British.', chinese: '研究时要使用可靠的资料来源。' }], collocations: ['reliable source', 'highly reliable'], antonyms: ['unreliable'], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'abstract', term: 'abstract', normalizedTerm: 'abstract', partOfSpeech: ['adjective'], ipa: '/æbstrˈækt/',
    chineseShort: '抽象的；理论性的', chineseExplanation: '形容某人、事物或情况具有“抽象的；理论性的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing as an idea rather than as a physical object.',
    examples: [{ english: 'The course begins with abstract ideas before moving to practical examples.', malay: 'Ayat ini menunjukkan penggunaan perkataan “abstract” dalam konteks Bahasa Inggeris British.', chinese: '这门课程先讲抽象概念，再进入实际例子。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'acceptable', term: 'acceptable', normalizedTerm: 'acceptable', partOfSpeech: ['adjective'], ipa: '/æksˈɛptəbəl/',
    chineseShort: '可接受的；合意的', chineseExplanation: '形容某人、事物或情况具有“可接受的；合意的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Good enough to be approved or considered satisfactory.',
    examples: [{ english: 'The final proposal was acceptable to both sides.', malay: 'Ayat ini menunjukkan penggunaan perkataan “acceptable” dalam konteks Bahasa Inggeris British.', chinese: '最终方案双方都可以接受。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'accompany', term: 'accompany', normalizedTerm: 'accompany', partOfSpeech: ['verb'], ipa: '/əkˈʌmpəni/',
    chineseShort: '陪伴；伴随', chineseExplanation: '表示“陪伴；伴随”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To go somewhere with someone or to happen together with something.',
    examples: [{ english: 'A short explanation should accompany every chart in the report.', malay: 'Ayat ini menunjukkan penggunaan perkataan “accompany” dalam konteks Bahasa Inggeris British.', chinese: '报告中的每张图表都应附有简短说明。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'accomplish', term: 'accomplish', normalizedTerm: 'accomplish', partOfSpeech: ['verb'], ipa: '/əkˈɑmplɪʃ/',
    chineseShort: '完成；实现', chineseExplanation: '表示“完成；实现”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To succeed in doing or completing something.',
    examples: [{ english: 'The team accomplished its main goal ahead of schedule.', malay: 'Ayat ini menunjukkan penggunaan perkataan “accomplish” dalam konteks Bahasa Inggeris British.', chinese: '团队提前完成了主要目标。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'accurate', term: 'accurate', normalizedTerm: 'accurate', partOfSpeech: ['adjective'], ipa: '/ˈækjɚət/',
    chineseShort: '准确的；精确的', chineseExplanation: '形容某人、事物或情况具有“准确的；精确的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Correct and free from mistakes.',
    examples: [{ english: 'Accurate data is essential for a reliable conclusion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “accurate” dalam konteks Bahasa Inggeris British.', chinese: '准确的数据对于得出可靠结论至关重要。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'acknowledge', term: 'acknowledge', normalizedTerm: 'acknowledge', partOfSpeech: ['verb'], ipa: '/æknˈɑlɪdʒ/',
    chineseShort: '承认；认可', chineseExplanation: '表示“承认；认可”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To accept or admit that something is true or exists.',
    examples: [{ english: 'The company acknowledged that the service had failed.', malay: 'Ayat ini menunjukkan penggunaan perkataan “acknowledge” dalam konteks Bahasa Inggeris British.', chinese: '公司承认该服务出现了故障。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'adequate', term: 'adequate', normalizedTerm: 'adequate', partOfSpeech: ['adjective'], ipa: '/ˈædəkwət/',
    chineseShort: '足够的；合格的', chineseExplanation: '形容某人、事物或情况具有“足够的；合格的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Enough in quantity or good enough in quality for a particular purpose.',
    examples: [{ english: 'The school needs adequate funding to maintain its facilities.', malay: 'Ayat ini menunjukkan penggunaan perkataan “adequate” dalam konteks Bahasa Inggeris British.', chinese: '学校需要足够的资金来维护设施。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'adjust', term: 'adjust', normalizedTerm: 'adjust', partOfSpeech: ['verb'], ipa: '/ədʒˈʌst/',
    chineseShort: '调整；适应', chineseExplanation: '表示“调整；适应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something slightly or adapt to a new situation.',
    examples: [{ english: 'You may need to adjust your schedule during the exam period.', malay: 'Ayat ini menunjukkan penggunaan perkataan “adjust” dalam konteks Bahasa Inggeris British.', chinese: '考试期间你可能需要调整时间表。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'adopt', term: 'adopt', normalizedTerm: 'adopt', partOfSpeech: ['verb'], ipa: '/ədˈɑpt/',
    chineseShort: '采用；采纳', chineseExplanation: '表示“采用；采纳”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To begin to use a method, idea, policy, or practice.',
    examples: [{ english: 'Many companies have adopted flexible working arrangements.', malay: 'Ayat ini menunjukkan penggunaan perkataan “adopt” dalam konteks Bahasa Inggeris British.', chinese: '许多公司已经采用弹性工作安排。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'advance', term: 'advance', normalizedTerm: 'advance', partOfSpeech: ['noun', 'verb'], ipa: '/ədvˈæns/',
    chineseShort: '进展；推进', chineseExplanation: '可作多种词性使用，核心意思包括“进展；推进”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Progress or development, or to move something forward.',
    examples: [{ english: 'Recent advances in technology have improved online learning.', malay: 'Ayat ini menunjukkan penggunaan perkataan “advance” dalam konteks Bahasa Inggeris British.', chinese: '近期的技术进步改善了在线学习。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'advocate', term: 'advocate', normalizedTerm: 'advocate', partOfSpeech: ['verb'], ipa: '/ˈædvəkət/',
    chineseShort: '提倡；主张', chineseExplanation: '表示“提倡；主张”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To publicly support or recommend a particular idea or policy.',
    examples: [{ english: 'Many experts advocate stricter rules on data privacy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “advocate” dalam konteks Bahasa Inggeris British.', chinese: '许多专家主张制定更严格的数据隐私规则。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'allocate', term: 'allocate', normalizedTerm: 'allocate', partOfSpeech: ['verb'], ipa: '/ˈæləkˌeɪt/',
    chineseShort: '分配；拨给', chineseExplanation: '表示“分配；拨给”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To officially give resources, time, or money for a particular purpose.',
    examples: [{ english: 'The council allocated more money to public transport.', malay: 'Ayat ini menunjukkan penggunaan perkataan “allocate” dalam konteks Bahasa Inggeris British.', chinese: '市议会为公共交通分配了更多资金。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'alter', term: 'alter', normalizedTerm: 'alter', partOfSpeech: ['verb'], ipa: '/ˈɔltɚ/',
    chineseShort: '改变；修改', chineseExplanation: '表示“改变；修改”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something, usually slightly.',
    examples: [{ english: 'The new evidence may alter our understanding of the issue.', malay: 'Ayat ini menunjukkan penggunaan perkataan “alter” dalam konteks Bahasa Inggeris British.', chinese: '新证据可能会改变我们对这个问题的理解。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'alternative', term: 'alternative', normalizedTerm: 'alternative', partOfSpeech: ['noun', 'adjective'], ipa: '/ɔltˈɝnətɪv/',
    chineseShort: '替代方案；替代的', chineseExplanation: '可作多种词性使用，核心意思包括“替代方案；替代的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Another choice or possibility that can be used instead.',
    examples: [{ english: 'Public transport offers an alternative to driving in the city.', malay: 'Ayat ini menunjukkan penggunaan perkataan “alternative” dalam konteks Bahasa Inggeris British.', chinese: '公共交通为城市出行提供了驾车之外的选择。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'anticipate', term: 'anticipate', normalizedTerm: 'anticipate', partOfSpeech: ['verb'], ipa: '/æntˈɪsəpˌeɪt/',
    chineseShort: '预期；预料', chineseExplanation: '表示“预期；预料”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To expect that something will happen and prepare for it.',
    examples: [{ english: 'Businesses must anticipate changes in customer demand.', malay: 'Ayat ini menunjukkan penggunaan perkataan “anticipate” dalam konteks Bahasa Inggeris British.', chinese: '企业必须预判顾客需求的变化。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'apparent', term: 'apparent', normalizedTerm: 'apparent', partOfSpeech: ['adjective'], ipa: '/əpˈɛrənt/',
    chineseShort: '明显的；表面上的', chineseExplanation: '形容某人、事物或情况具有“明显的；表面上的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easy to notice or understand, though sometimes not actually true.',
    examples: [{ english: 'It became apparent that the original plan was too expensive.', malay: 'Ayat ini menunjukkan penggunaan perkataan “apparent” dalam konteks Bahasa Inggeris British.', chinese: '很明显，原来的计划成本太高。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'appeal', term: 'appeal', normalizedTerm: 'appeal', partOfSpeech: ['noun', 'verb'], ipa: '/əpˈil/',
    chineseShort: '吸引力；呼吁；吸引', chineseExplanation: '可作多种词性使用，核心意思包括“吸引力；呼吁；吸引”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A quality that attracts interest, or a serious request for help or support.',
    examples: [{ english: 'The campaign has strong appeal among younger voters.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appeal” dalam konteks Bahasa Inggeris British.', chinese: '这项活动对年轻选民有很强的吸引力。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'approach', term: 'approach', normalizedTerm: 'approach', partOfSpeech: ['noun', 'verb'], ipa: '/əprˈoʊtʃ/',
    chineseShort: '方法；处理；接近', chineseExplanation: '可作多种词性使用，核心意思包括“方法；处理；接近”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A way of dealing with something, or to move nearer to it.',
    examples: [{ english: 'We need a more practical approach to solving the problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “approach” dalam konteks Bahasa Inggeris British.', chinese: '我们需要一种更实际的方法来解决这个问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'appropriate', term: 'appropriate', normalizedTerm: 'appropriate', partOfSpeech: ['adjective'], ipa: '/əprˈoʊpriət/',
    chineseShort: '合适的；恰当的', chineseExplanation: '形容某人、事物或情况具有“合适的；恰当的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Suitable or correct for a particular situation or purpose.',
    examples: [{ english: 'Please choose language that is appropriate for a formal report.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appropriate” dalam konteks Bahasa Inggeris British.', chinese: '请选择适合正式报告的语言。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'approval', term: 'approval', normalizedTerm: 'approval', partOfSpeech: ['noun'], ipa: '/əprˈuvəl/',
    chineseShort: '批准；赞同', chineseExplanation: '指与“批准；赞同”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Official permission or a positive opinion about something.',
    examples: [{ english: 'The project cannot begin without government approval.', malay: 'Ayat ini menunjukkan penggunaan perkataan “approval” dalam konteks Bahasa Inggeris British.', chinese: '没有政府批准，这个项目无法开始。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'arise', term: 'arise', normalizedTerm: 'arise', partOfSpeech: ['verb'], ipa: '/ɚˈaɪz/',
    chineseShort: '出现；产生', chineseExplanation: '表示“出现；产生”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To happen or begin to exist, especially a problem or situation.',
    examples: [{ english: 'Unexpected problems may arise during the testing stage.', malay: 'Ayat ini menunjukkan penggunaan perkataan “arise” dalam konteks Bahasa Inggeris British.', chinese: '测试阶段可能会出现意想不到的问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'assess', term: 'assess', normalizedTerm: 'assess', partOfSpeech: ['verb'], ipa: '/əsˈɛs/',
    chineseShort: '评估；判断', chineseExplanation: '表示“评估；判断”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To judge the quality, importance, size, or value of something.',
    examples: [{ english: 'Teachers assess students through several different tasks.', malay: 'Ayat ini menunjukkan penggunaan perkataan “assess” dalam konteks Bahasa Inggeris British.', chinese: '教师通过多种不同的任务来评估学生。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'assign', term: 'assign', normalizedTerm: 'assign', partOfSpeech: ['verb'], ipa: '/əsˈaɪn/',
    chineseShort: '分配；指派', chineseExplanation: '表示“分配；指派”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give someone a particular job, duty, or piece of work.',
    examples: [{ english: 'The manager assigned each employee a specific task.', malay: 'Ayat ini menunjukkan penggunaan perkataan “assign” dalam konteks Bahasa Inggeris British.', chinese: '经理给每位员工分配了具体任务。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'assist', term: 'assist', normalizedTerm: 'assist', partOfSpeech: ['verb'], ipa: '/əsˈɪst/',
    chineseShort: '协助；帮助', chineseExplanation: '表示“协助；帮助”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To help someone do something.',
    examples: [{ english: 'Staff are available to assist customers with online payments.', malay: 'Ayat ini menunjukkan penggunaan perkataan “assist” dalam konteks Bahasa Inggeris British.', chinese: '工作人员可以协助顾客进行网上付款。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'associate', term: 'associate', normalizedTerm: 'associate', partOfSpeech: ['verb'], ipa: '/əsˈoʊsiət/',
    chineseShort: '联系；联想', chineseExplanation: '表示“联系；联想”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To connect someone or something in your mind with another thing.',
    examples: [{ english: 'People often associate exercise with better mental health.', malay: 'Ayat ini menunjukkan penggunaan perkataan “associate” dalam konteks Bahasa Inggeris British.', chinese: '人们常把运动与更好的心理健康联系起来。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'assume', term: 'assume', normalizedTerm: 'assume', partOfSpeech: ['verb'], ipa: '/əsˈum/',
    chineseShort: '假设；认为', chineseExplanation: '表示“假设；认为”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To accept something as true without having definite proof.',
    examples: [{ english: 'We should not assume that all users have the same needs.', malay: 'Ayat ini menunjukkan penggunaan perkataan “assume” dalam konteks Bahasa Inggeris British.', chinese: '我们不应假设所有用户都有相同的需求。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'attempt', term: 'attempt', normalizedTerm: 'attempt', partOfSpeech: ['noun', 'verb'], ipa: '/ətˈɛmpt/',
    chineseShort: '尝试；企图', chineseExplanation: '可作多种词性使用，核心意思包括“尝试；企图”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An effort to do something, especially something difficult.',
    examples: [{ english: 'The first attempt to repair the system was unsuccessful.', malay: 'Ayat ini menunjukkan penggunaan perkataan “attempt” dalam konteks Bahasa Inggeris British.', chinese: '第一次修复系统的尝试没有成功。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'authority', term: 'authority', normalizedTerm: 'authority', partOfSpeech: ['noun'], ipa: '/əθˈɔrəti/',
    chineseShort: '权力；当局；权威', chineseExplanation: '指与“权力；当局；权威”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The power or right to make decisions, or an official organisation with that power.',
    examples: [{ english: 'Local authorities are responsible for waste collection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “authority” dalam konteks Bahasa Inggeris British.', chinese: '地方当局负责垃圾收集。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'automatic', term: 'automatic', normalizedTerm: 'automatic', partOfSpeech: ['adjective'], ipa: '/ˌɔtəmˈætɪk/',
    chineseShort: '自动的；自然发生的', chineseExplanation: '形容某人、事物或情况具有“自动的；自然发生的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Working by itself with little or no direct human control.',
    examples: [{ english: 'The system sends an automatic warning when storage is nearly full.', malay: 'Ayat ini menunjukkan penggunaan perkataan “automatic” dalam konteks Bahasa Inggeris British.', chinese: '当储存空间快满时，系统会自动发出警告。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'awareness', term: 'awareness', normalizedTerm: 'awareness', partOfSpeech: ['noun'], ipa: '/əwˈɛrnəs/',
    chineseShort: '意识；认识', chineseExplanation: '指与“意识；认识”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Knowledge or understanding of a situation or subject.',
    examples: [{ english: 'The campaign raised public awareness of online scams.', malay: 'Ayat ini menunjukkan penggunaan perkataan “awareness” dalam konteks Bahasa Inggeris British.', chinese: '这项活动提高了公众对网络诈骗的认识。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'barrier', term: 'barrier', normalizedTerm: 'barrier', partOfSpeech: ['noun'], ipa: '/bˈæriɚ/',
    chineseShort: '障碍；屏障', chineseExplanation: '指与“障碍；屏障”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that prevents movement, progress, or communication.',
    examples: [{ english: 'High costs remain a major barrier to further expansion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “barrier” dalam konteks Bahasa Inggeris British.', chinese: '高成本仍然是进一步扩张的主要障碍。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'basis', term: 'basis', normalizedTerm: 'basis', partOfSpeech: ['noun'], ipa: '/bˈeɪsəs/',
    chineseShort: '基础；依据', chineseExplanation: '指与“基础；依据”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The main reason, principle, or foundation on which something is developed.',
    examples: [{ english: 'Decisions should be made on the basis of reliable evidence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “basis” dalam konteks Bahasa Inggeris British.', chinese: '决策应以可靠证据为依据。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'behalf', term: 'behalf', normalizedTerm: 'behalf', partOfSpeech: ['noun'], ipa: '/bɪhˈæf/',
    chineseShort: '代表；为了某人的利益', chineseExplanation: '指与“代表；为了某人的利益”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Used when acting for or representing another person or group.',
    examples: [{ english: 'She spoke on behalf of the entire research team.', malay: 'Ayat ini menunjukkan penggunaan perkataan “behalf” dalam konteks Bahasa Inggeris British.', chinese: '她代表整个研究团队发言。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'beneficial', term: 'beneficial', normalizedTerm: 'beneficial', partOfSpeech: ['adjective'], ipa: '/bˌɛnəfˈɪʃəl/',
    chineseShort: '有益的；有帮助的', chineseExplanation: '形容某人、事物或情况具有“有益的；有帮助的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Having a helpful or positive effect.',
    examples: [{ english: 'Regular feedback is beneficial to language learners.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beneficial” dalam konteks Bahasa Inggeris British.', chinese: '定期反馈对语言学习者有帮助。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'budget', term: 'budget', normalizedTerm: 'budget', partOfSpeech: ['noun', 'verb'], ipa: '/bˈʌdʒɪt/',
    chineseShort: '预算；编制预算', chineseExplanation: '可作多种词性使用，核心意思包括“预算；编制预算”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A plan for how money will be spent over a period of time.',
    examples: [{ english: 'The department must work within a limited budget this year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “budget” dalam konteks Bahasa Inggeris British.', chinese: '该部门今年必须在有限预算内运作。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'capacity', term: 'capacity', normalizedTerm: 'capacity', partOfSpeech: ['noun'], ipa: '/kəpˈæsəti/',
    chineseShort: '能力；容量', chineseExplanation: '指与“能力；容量”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The ability or maximum amount that someone or something can contain or produce.',
    examples: [{ english: 'The hospital is operating at full capacity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “capacity” dalam konteks Bahasa Inggeris British.', chinese: '这家医院正以满负荷运作。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'challenge', term: 'challenge', normalizedTerm: 'challenge', partOfSpeech: ['noun', 'verb'], ipa: '/tʃˈæləndʒ/',
    chineseShort: '挑战；质疑', chineseExplanation: '可作多种词性使用，核心意思包括“挑战；质疑”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A difficult task or situation, or to question whether something is correct.',
    examples: [{ english: 'Climate change presents a serious challenge to many countries.', malay: 'Ayat ini menunjukkan penggunaan perkataan “challenge” dalam konteks Bahasa Inggeris British.', chinese: '气候变化给许多国家带来了严重挑战。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'circumstance', term: 'circumstance', normalizedTerm: 'circumstance', partOfSpeech: ['noun'], ipa: '/sˈɝkəmstˌæns/',
    chineseShort: '情况；情形', chineseExplanation: '指与“情况；情形”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A fact or condition that affects a situation.',
    examples: [{ english: 'Under these circumstances, delaying the launch is reasonable.', malay: 'Ayat ini menunjukkan penggunaan perkataan “circumstance” dalam konteks Bahasa Inggeris British.', chinese: '在这种情况下，推迟发布是合理的。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'clarify', term: 'clarify', normalizedTerm: 'clarify', partOfSpeech: ['verb'], ipa: '/klˈɛrəfˌaɪ/',
    chineseShort: '澄清；说明', chineseExplanation: '表示“澄清；说明”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something easier to understand by explaining it more clearly.',
    examples: [{ english: 'Could you clarify what you mean by this requirement?', malay: 'Ayat ini menunjukkan penggunaan perkataan “clarify” dalam konteks Bahasa Inggeris British.', chinese: '你能说明一下这个要求具体是什么意思吗？' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'collapse', term: 'collapse', normalizedTerm: 'collapse', partOfSpeech: ['noun', 'verb'], ipa: '/kəlˈæps/',
    chineseShort: '崩溃；倒塌', chineseExplanation: '可作多种词性使用，核心意思包括“崩溃；倒塌”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A sudden failure or fall, or to fail or fall suddenly.',
    examples: [{ english: 'The bridge collapsed after several days of heavy rain.', malay: 'Ayat ini menunjukkan penggunaan perkataan “collapse” dalam konteks Bahasa Inggeris British.', chinese: '连续几天暴雨后，这座桥倒塌了。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'combine', term: 'combine', normalizedTerm: 'combine', partOfSpeech: ['verb'], ipa: '/kˈɑmbaɪn/',
    chineseShort: '结合；合并', chineseExplanation: '表示“结合；合并”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To join two or more things together.',
    examples: [{ english: 'The course combines theory with practical training.', malay: 'Ayat ini menunjukkan penggunaan perkataan “combine” dalam konteks Bahasa Inggeris British.', chinese: '这门课程把理论与实践训练结合起来。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'commitment', term: 'commitment', normalizedTerm: 'commitment', partOfSpeech: ['noun'], ipa: '/kəmˈɪtmənt/',
    chineseShort: '承诺；投入', chineseExplanation: '指与“承诺；投入”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A promise or a strong willingness to give time and effort to something.',
    examples: [{ english: 'Success requires long-term commitment and regular practice.', malay: 'Ayat ini menunjukkan penggunaan perkataan “commitment” dalam konteks Bahasa Inggeris British.', chinese: '成功需要长期投入和持续练习。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'communicate', term: 'communicate', normalizedTerm: 'communicate', partOfSpeech: ['verb'], ipa: '/kəmjˈunəkˌeɪt/',
    chineseShort: '沟通；传达', chineseExplanation: '表示“沟通；传达”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To share or exchange information, ideas, or feelings.',
    examples: [{ english: 'Managers should communicate changes clearly to their teams.', malay: 'Ayat ini menunjukkan penggunaan perkataan “communicate” dalam konteks Bahasa Inggeris British.', chinese: '管理者应清楚地向团队传达变化。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'comparison', term: 'comparison', normalizedTerm: 'comparison', partOfSpeech: ['noun'], ipa: '/kəmpˈɛrəsən/',
    chineseShort: '比较；对照', chineseExplanation: '指与“比较；对照”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The act of examining how two or more things are similar or different.',
    examples: [{ english: 'The report includes a comparison of three payment systems.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comparison” dalam konteks Bahasa Inggeris British.', chinese: '报告比较了三种支付系统。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'complex', term: 'complex', normalizedTerm: 'complex', partOfSpeech: ['adjective', 'noun'], ipa: '/kˈɑmplɛks/',
    chineseShort: '复杂的；综合体', chineseExplanation: '可作多种词性使用，核心意思包括“复杂的；综合体”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Made of many connected parts and difficult to understand or deal with.',
    examples: [{ english: 'The causes of unemployment are complex and closely connected.', malay: 'Ayat ini menunjukkan penggunaan perkataan “complex” dalam konteks Bahasa Inggeris British.', chinese: '失业的原因很复杂，而且彼此密切相关。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'component', term: 'component', normalizedTerm: 'component', partOfSpeech: ['noun'], ipa: '/kəmpˈoʊnənt/',
    chineseShort: '组成部分；部件', chineseExplanation: '指与“组成部分；部件”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One of the parts that form a larger whole.',
    examples: [{ english: 'Security is a key component of the new platform.', malay: 'Ayat ini menunjukkan penggunaan perkataan “component” dalam konteks Bahasa Inggeris British.', chinese: '安全性是新平台的关键组成部分。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'concentrate', term: 'concentrate', normalizedTerm: 'concentrate', partOfSpeech: ['verb'], ipa: '/kˈɑnsəntrˌeɪt/',
    chineseShort: '集中；专心', chineseExplanation: '表示“集中；专心”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give most of your attention or effort to one thing.',
    examples: [{ english: 'Students should concentrate on the main argument of the text.', malay: 'Ayat ini menunjukkan penggunaan perkataan “concentrate” dalam konteks Bahasa Inggeris British.', chinese: '学生应专注于文章的主要论点。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'conduct', term: 'conduct', normalizedTerm: 'conduct', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑndəkt/',
    chineseShort: '进行；实施；行为', chineseExplanation: '可作多种词性使用，核心意思包括“进行；实施；行为”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To organise and carry out an activity such as research, or the way someone behaves.',
    examples: [{ english: 'The university conducted a survey of first-year students.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conduct” dalam konteks Bahasa Inggeris British.', chinese: '这所大学对一年级学生进行了一项调查。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'conflict', term: 'conflict', normalizedTerm: 'conflict', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑnflɪkt/',
    chineseShort: '冲突；抵触', chineseExplanation: '可作多种词性使用，核心意思包括“冲突；抵触”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A serious disagreement or a situation in which different needs or ideas oppose each other.',
    examples: [{ english: 'The new rule may conflict with existing company policy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conflict” dalam konteks Bahasa Inggeris British.', chinese: '新规定可能与现有公司政策冲突。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'considerable', term: 'considerable', normalizedTerm: 'considerable', partOfSpeech: ['adjective'], ipa: '/kənsˈɪdɚəbəl/',
    chineseShort: '相当大的；重要的', chineseExplanation: '形容某人、事物或情况具有“相当大的；重要的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Large or important enough to be noticed.',
    examples: [{ english: 'The project requires a considerable amount of time and money.', malay: 'Ayat ini menunjukkan penggunaan perkataan “considerable” dalam konteks Bahasa Inggeris British.', chinese: '这个项目需要相当多的时间和资金。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'consistent', term: 'consistent', normalizedTerm: 'consistent', partOfSpeech: ['adjective'], ipa: '/kənsˈɪstənt/',
    chineseShort: '一致的；持续稳定的', chineseExplanation: '形容某人、事物或情况具有“一致的；持续稳定的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Always behaving or happening in a similar way, or matching other information.',
    examples: [{ english: 'The results are consistent with earlier research.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consistent” dalam konteks Bahasa Inggeris British.', chinese: '这些结果与早期研究一致。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'constant', term: 'constant', normalizedTerm: 'constant', partOfSpeech: ['adjective', 'noun'], ipa: '/kˈɑnstənt/',
    chineseShort: '持续的；不变的', chineseExplanation: '可作多种词性使用，核心意思包括“持续的；不变的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Happening all the time or staying at the same level.',
    examples: [{ english: 'Constant interruptions can reduce productivity at work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constant” dalam konteks Bahasa Inggeris British.', chinese: '持续的打扰会降低工作效率。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'constraint', term: 'constraint', normalizedTerm: 'constraint', partOfSpeech: ['noun'], ipa: '/kənstrˈeɪnt/',
    chineseShort: '限制；约束', chineseExplanation: '指与“限制；约束”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that limits what can be done.',
    examples: [{ english: 'Time is the main constraint on the current project.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constraint” dalam konteks Bahasa Inggeris British.', chinese: '时间是当前项目的主要限制因素。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'consult', term: 'consult', normalizedTerm: 'consult', partOfSpeech: ['verb'], ipa: '/kənsˈʌlt/',
    chineseShort: '咨询；查阅', chineseExplanation: '表示“咨询；查阅”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To ask someone for expert advice or to look at a source for information.',
    examples: [{ english: 'You should consult a specialist before making a major decision.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consult” dalam konteks Bahasa Inggeris British.', chinese: '在做重大决定前，你应该咨询专业人士。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'consume', term: 'consume', normalizedTerm: 'consume', partOfSpeech: ['verb'], ipa: '/kənsˈum/',
    chineseShort: '消耗；消费', chineseExplanation: '表示“消耗；消费”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To use energy, time, or resources, or to buy and use goods and services.',
    examples: [{ english: 'Older machines tend to consume more electricity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consume” dalam konteks Bahasa Inggeris British.', chinese: '较旧的机器往往消耗更多电力。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'contemporary', term: 'contemporary', normalizedTerm: 'contemporary', partOfSpeech: ['adjective'], ipa: '/kəntˈɛmpɚˌɛri/',
    chineseShort: '当代的；现代的', chineseExplanation: '形容某人、事物或情况具有“当代的；现代的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Belonging to or happening in the present period.',
    examples: [{ english: 'The museum focuses on contemporary Asian art.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contemporary” dalam konteks Bahasa Inggeris British.', chinese: '这家博物馆专注于当代亚洲艺术。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'context', term: 'context', normalizedTerm: 'context', partOfSpeech: ['noun'], ipa: '/kˈɑntɛkst/',
    chineseShort: '背景；语境', chineseExplanation: '指与“背景；语境”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The situation or information surrounding something that helps explain its meaning.',
    examples: [{ english: 'The meaning of the word depends on the context.', malay: 'Ayat ini menunjukkan penggunaan perkataan “context” dalam konteks Bahasa Inggeris British.', chinese: '这个词的意思取决于上下文。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'contrast', term: 'contrast', normalizedTerm: 'contrast', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑntræst/',
    chineseShort: '对比；形成对照', chineseExplanation: '可作多种词性使用，核心意思包括“对比；形成对照”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A clear difference between things, or to compare them to show differences.',
    examples: [{ english: 'The report contrasts urban and rural lifestyles.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contrast” dalam konteks Bahasa Inggeris British.', chinese: '这份报告对比了城市和乡村的生活方式。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'contribute', term: 'contribute', normalizedTerm: 'contribute', partOfSpeech: ['verb'], ipa: '/kəntrˈɪbjut/',
    chineseShort: '贡献；促成', chineseExplanation: '表示“贡献；促成”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give something such as money, ideas, or effort, or to help cause a result.',
    examples: [{ english: 'Better training can contribute to higher productivity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contribute” dalam konteks Bahasa Inggeris British.', chinese: '更好的培训可以促进生产力提高。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'controversial', term: 'controversial', normalizedTerm: 'controversial', partOfSpeech: ['adjective'], ipa: '/kˌɑntrəvˈɝʃəl/',
    chineseShort: '有争议的', chineseExplanation: '形容某人、事物或情况具有“有争议的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Causing strong disagreement or public discussion.',
    examples: [{ english: 'The government introduced a controversial new policy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “controversial” dalam konteks Bahasa Inggeris British.', chinese: '政府推出了一项有争议的新政策。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'convenient', term: 'convenient', normalizedTerm: 'convenient', partOfSpeech: ['adjective'], ipa: '/kənvˈinjənt/',
    chineseShort: '方便的；便利的', chineseExplanation: '形容某人、事物或情况具有“方便的；便利的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easy to use, reach, or do, and suitable for your needs.',
    examples: [{ english: 'Online banking is convenient for people with busy schedules.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convenient” dalam konteks Bahasa Inggeris British.', chinese: '网上银行对日程繁忙的人来说很方便。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'convince', term: 'convince', normalizedTerm: 'convince', partOfSpeech: ['verb'], ipa: '/kənvˈɪns/',
    chineseShort: '说服；使确信', chineseExplanation: '表示“说服；使确信”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make someone believe that something is true or persuade them to do something.',
    examples: [{ english: 'The evidence convinced the committee to change its decision.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convince” dalam konteks Bahasa Inggeris British.', chinese: '这些证据说服委员会改变了决定。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'cooperate', term: 'cooperate', normalizedTerm: 'cooperate', partOfSpeech: ['verb'], ipa: '/koʊˈɑpɚˌeɪt/',
    chineseShort: '合作；配合', chineseExplanation: '表示“合作；配合”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To work together with another person or group towards a shared goal.',
    examples: [{ english: 'Different departments must cooperate to complete the project.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cooperate” dalam konteks Bahasa Inggeris British.', chinese: '不同部门必须合作才能完成这个项目。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'cope', term: 'cope', normalizedTerm: 'cope', partOfSpeech: ['verb'], ipa: '/kˈoʊp/',
    chineseShort: '应对；处理', chineseExplanation: '表示“应对；处理”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deal successfully with a difficult situation.',
    examples: [{ english: 'Many students find it hard to cope with exam pressure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cope” dalam konteks Bahasa Inggeris British.', chinese: '许多学生发现很难应对考试压力。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'core', term: 'core', normalizedTerm: 'core', partOfSpeech: ['noun', 'adjective'], ipa: '/kˈɔr/',
    chineseShort: '核心；核心的', chineseExplanation: '可作多种词性使用，核心意思包括“核心；核心的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The central or most important part of something.',
    examples: [{ english: 'Communication is a core skill in most workplaces.', malay: 'Ayat ini menunjukkan penggunaan perkataan “core” dalam konteks Bahasa Inggeris British.', chinese: '沟通是大多数职场中的核心技能。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'corporate', term: 'corporate', normalizedTerm: 'corporate', partOfSpeech: ['adjective'], ipa: '/kˈɔrpɚət/',
    chineseShort: '公司的；企业的', chineseExplanation: '形容某人、事物或情况具有“公司的；企业的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to a large company or business organisation.',
    examples: [{ english: 'The company updated its corporate strategy for the next five years.', malay: 'Ayat ini menunjukkan penggunaan perkataan “corporate” dalam konteks Bahasa Inggeris British.', chinese: '公司更新了未来五年的企业战略。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'crucial', term: 'crucial', normalizedTerm: 'crucial', partOfSpeech: ['adjective'], ipa: '/krˈuʃəl/',
    chineseShort: '至关重要的', chineseExplanation: '形容某人、事物或情况具有“至关重要的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Extremely important for the success or result of something.',
    examples: [{ english: 'Clear instructions are crucial for reducing mistakes.', malay: 'Ayat ini menunjukkan penggunaan perkataan “crucial” dalam konteks Bahasa Inggeris British.', chinese: '清晰的指示对于减少错误至关重要。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'curious', term: 'curious', normalizedTerm: 'curious', partOfSpeech: ['adjective'], ipa: '/kjˈʊriəs/',
    chineseShort: '好奇的；想知道的', chineseExplanation: '形容某人、事物或情况具有“好奇的；想知道的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Interested in learning or knowing more about something.',
    examples: [{ english: 'She was curious about how the new system worked.', malay: 'Ayat ini menunjukkan penggunaan perkataan “curious” dalam konteks Bahasa Inggeris British.', chinese: '她很好奇新系统是如何运作的。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'debate', term: 'debate', normalizedTerm: 'debate', partOfSpeech: ['noun', 'verb'], ipa: '/dəbˈeɪt/',
    chineseShort: '辩论；讨论', chineseExplanation: '可作多种词性使用，核心意思包括“辩论；讨论”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A formal or public discussion in which different opinions are expressed.',
    examples: [{ english: 'There is an ongoing debate about the use of AI in education.', malay: 'Ayat ini menunjukkan penggunaan perkataan “debate” dalam konteks Bahasa Inggeris British.', chinese: '关于人工智能在教育中的使用仍在持续讨论。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'decline', term: 'decline', normalizedTerm: 'decline', partOfSpeech: ['noun', 'verb'], ipa: '/dɪklˈaɪn/',
    chineseShort: '下降；衰退；拒绝', chineseExplanation: '可作多种词性使用，核心意思包括“下降；衰退；拒绝”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A decrease in amount or quality, or to become smaller or weaker.',
    examples: [{ english: 'Sales declined slightly during the first quarter.', malay: 'Ayat ini menunjukkan penggunaan perkataan “decline” dalam konteks Bahasa Inggeris British.', chinese: '第一季度销售额略有下降。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'define', term: 'define', normalizedTerm: 'define', partOfSpeech: ['verb'], ipa: '/dɪfˈaɪn/',
    chineseShort: '定义；明确', chineseExplanation: '表示“定义；明确”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To explain the exact meaning of something or state its limits clearly.',
    examples: [{ english: 'The policy clearly defines the responsibilities of each department.', malay: 'Ayat ini menunjukkan penggunaan perkataan “define” dalam konteks Bahasa Inggeris British.', chinese: '这项政策明确规定了各部门的责任。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'demand', term: 'demand', normalizedTerm: 'demand', partOfSpeech: ['noun', 'verb'], ipa: '/dɪmˈænd/',
    chineseShort: '需求；要求', chineseExplanation: '可作多种词性使用，核心意思包括“需求；要求”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A strong need or request, or the desire for goods and services.',
    examples: [{ english: 'Demand for online services has increased rapidly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “demand” dalam konteks Bahasa Inggeris British.', chinese: '对在线服务的需求迅速增加。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'demonstrate', term: 'demonstrate', normalizedTerm: 'demonstrate', partOfSpeech: ['verb'], ipa: '/dˈɛmənstrˌeɪt/',
    chineseShort: '证明；展示', chineseExplanation: '表示“证明；展示”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show clearly that something is true or how something works.',
    examples: [{ english: 'The results demonstrate the value of regular practice.', malay: 'Ayat ini menunjukkan penggunaan perkataan “demonstrate” dalam konteks Bahasa Inggeris British.', chinese: '结果证明了定期练习的价值。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'deny', term: 'deny', normalizedTerm: 'deny', partOfSpeech: ['verb'], ipa: '/dɪnˈaɪ/',
    chineseShort: '否认；拒绝给予', chineseExplanation: '表示“否认；拒绝给予”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To say that something is not true or refuse to allow someone to have something.',
    examples: [{ english: 'The company denied that customer data had been leaked.', malay: 'Ayat ini menunjukkan penggunaan perkataan “deny” dalam konteks Bahasa Inggeris British.', chinese: '公司否认客户数据遭到泄露。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'despite', term: 'despite', normalizedTerm: 'despite', partOfSpeech: ['preposition'], ipa: '/dɪspˈaɪt/',
    chineseShort: '尽管；即使', chineseExplanation: '用于表达“尽管；即使”的关系，常见于B2阶段的书面和正式表达。', englishDefinition: 'Without being affected by a particular fact or difficulty.',
    examples: [{ english: 'Despite the bad weather, the event continued as planned.', malay: 'Ayat ini menunjukkan penggunaan perkataan “despite” dalam konteks Bahasa Inggeris British.', chinese: '尽管天气不好，活动仍按计划进行。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'detect', term: 'detect', normalizedTerm: 'detect', partOfSpeech: ['verb'], ipa: '/dɪtˈɛkt/',
    chineseShort: '发现；检测', chineseExplanation: '表示“发现；检测”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To discover or notice something that is difficult to see or recognise.',
    examples: [{ english: 'The software can detect unusual activity on the network.', malay: 'Ayat ini menunjukkan penggunaan perkataan “detect” dalam konteks Bahasa Inggeris British.', chinese: '该软件可以检测网络上的异常活动。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'determine', term: 'determine', normalizedTerm: 'determine', partOfSpeech: ['verb'], ipa: '/dətˈɝmən/',
    chineseShort: '确定；决定', chineseExplanation: '表示“确定；决定”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To discover a fact by examining evidence, or to control what happens.',
    examples: [{ english: 'The test will determine whether the device is safe to use.', malay: 'Ayat ini menunjukkan penggunaan perkataan “determine” dalam konteks Bahasa Inggeris British.', chinese: '测试将确定该设备是否可以安全使用。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'develop', term: 'develop', normalizedTerm: 'develop', partOfSpeech: ['verb'], ipa: '/dɪvˈɛləp/',
    chineseShort: '发展；开发', chineseExplanation: '表示“发展；开发”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To grow, change, or create something over time.',
    examples: [{ english: 'The team is developing a new tool for language learners.', malay: 'Ayat ini menunjukkan penggunaan perkataan “develop” dalam konteks Bahasa Inggeris British.', chinese: '团队正在为语言学习者开发一种新工具。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'differ', term: 'differ', normalizedTerm: 'differ', partOfSpeech: ['verb'], ipa: '/dˈɪfɚ/',
    chineseShort: '不同；有区别', chineseExplanation: '表示“不同；有区别”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To be unlike or not the same as something else.',
    examples: [{ english: 'Opinions differ on the best way to solve the problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “differ” dalam konteks Bahasa Inggeris British.', chinese: '对于解决问题的最佳方式，人们意见不一。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'distribute', term: 'distribute', normalizedTerm: 'distribute', partOfSpeech: ['verb'], ipa: '/dɪstrˈɪbjut/',
    chineseShort: '分发；分配', chineseExplanation: '表示“分发；分配”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give or deliver something to a number of people or places.',
    examples: [{ english: 'The organisation distributed food to families affected by the flood.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distribute” dalam konteks Bahasa Inggeris British.', chinese: '该组织向受洪水影响的家庭分发食物。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'diverse', term: 'diverse', normalizedTerm: 'diverse', partOfSpeech: ['adjective'], ipa: '/daɪvˈɝs/',
    chineseShort: '多样的；多元的', chineseExplanation: '形容某人、事物或情况具有“多样的；多元的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Including many different types of people or things.',
    examples: [{ english: 'The city has a diverse population with many cultural backgrounds.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diverse” dalam konteks Bahasa Inggeris British.', chinese: '这座城市人口多元，拥有许多不同文化背景。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'domestic', term: 'domestic', normalizedTerm: 'domestic', partOfSpeech: ['adjective'], ipa: '/dəmˈɛstɪk/',
    chineseShort: '国内的；家庭的', chineseExplanation: '形容某人、事物或情况具有“国内的；家庭的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to a person\'s own country or to the home.',
    examples: [{ english: 'Domestic tourism increased during the holiday period.', malay: 'Ayat ini menunjukkan penggunaan perkataan “domestic” dalam konteks Bahasa Inggeris British.', chinese: '假期期间国内旅游有所增加。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'dramatic', term: 'dramatic', normalizedTerm: 'dramatic', partOfSpeech: ['adjective'], ipa: '/drəmˈætɪk/',
    chineseShort: '巨大的；戏剧性的', chineseExplanation: '形容某人、事物或情况具有“巨大的；戏剧性的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Sudden, very noticeable, or exciting in effect.',
    examples: [{ english: 'The company reported a dramatic increase in online sales.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dramatic” dalam konteks Bahasa Inggeris British.', chinese: '公司报告称网上销售额大幅增长。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'efficiently', term: 'efficiently', normalizedTerm: 'efficiently', partOfSpeech: ['adverb'], ipa: '/ɪfˈɪʃəntli/',
    chineseShort: '高效地', chineseExplanation: '表示以“高效地”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'In a way that achieves good results without wasting time or resources.',
    examples: [{ english: 'The new system allows staff to work more efficiently.', malay: 'Ayat ini menunjukkan penggunaan perkataan “efficiently” dalam konteks Bahasa Inggeris British.', chinese: '新系统让员工能够更高效地工作。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'eliminate', term: 'eliminate', normalizedTerm: 'eliminate', partOfSpeech: ['verb'], ipa: '/ɪlˈɪmənˌeɪt/',
    chineseShort: '消除；淘汰', chineseExplanation: '表示“消除；淘汰”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To remove or get rid of something completely.',
    examples: [{ english: 'The update aims to eliminate several common security risks.', malay: 'Ayat ini menunjukkan penggunaan perkataan “eliminate” dalam konteks Bahasa Inggeris British.', chinese: '这次更新旨在消除几个常见的安全风险。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'emerge', term: 'emerge', normalizedTerm: 'emerge', partOfSpeech: ['verb'], ipa: '/ɪmˈɝdʒ/',
    chineseShort: '出现；显现', chineseExplanation: '表示“出现；显现”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To become known, visible, or important.',
    examples: [{ english: 'New problems began to emerge after the policy was introduced.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emerge” dalam konteks Bahasa Inggeris British.', chinese: '政策实施后，新问题开始出现。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'emphasize', term: 'emphasise', normalizedTerm: 'emphasise', partOfSpeech: ['verb'], ipa: '/ˈɛmfəsˌaɪz/',
    chineseShort: '强调', chineseExplanation: '表示“强调”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give special importance or attention to something.',
    examples: [{ english: 'The report emphasises the need for better public transport.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emphasise” dalam konteks Bahasa Inggeris British.', chinese: '报告强调改善公共交通的必要性。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'enable', term: 'enable', normalizedTerm: 'enable', partOfSpeech: ['verb'], ipa: '/ɛnˈeɪbəl/',
    chineseShort: '使能够；使成为可能', chineseExplanation: '表示“使能够；使成为可能”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make it possible for someone to do something or for something to happen.',
    examples: [{ english: 'Digital tools enable students to study from almost anywhere.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enable” dalam konteks Bahasa Inggeris British.', chinese: '数字工具使学生几乎可以在任何地方学习。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'encounter', term: 'encounter', normalizedTerm: 'encounter', partOfSpeech: ['noun', 'verb'], ipa: '/ɪnkˈaʊntɚ/',
    chineseShort: '遇到；遭遇', chineseExplanation: '可作多种词性使用，核心意思包括“遇到；遭遇”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To experience or meet something, especially unexpectedly.',
    examples: [{ english: 'Users may encounter problems when the connection is unstable.', malay: 'Ayat ini menunjukkan penggunaan perkataan “encounter” dalam konteks Bahasa Inggeris British.', chinese: '连接不稳定时，用户可能会遇到问题。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'engage', term: 'engage', normalizedTerm: 'engage', partOfSpeech: ['verb'], ipa: '/ɛnɡˈeɪdʒ/',
    chineseShort: '参与；吸引', chineseExplanation: '表示“参与；吸引”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To take part in something or attract and keep someone\'s attention.',
    examples: [{ english: 'The teacher used group tasks to engage quieter students.', malay: 'Ayat ini menunjukkan penggunaan perkataan “engage” dalam konteks Bahasa Inggeris British.', chinese: '老师用小组任务让较安静的学生参与进来。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'enhance', term: 'enhance', normalizedTerm: 'enhance', partOfSpeech: ['verb'], ipa: '/ɛnhˈæns/',
    chineseShort: '提高；增强', chineseExplanation: '表示“提高；增强”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To improve the quality, value, or effectiveness of something.',
    examples: [{ english: 'Good lighting can enhance the quality of a video call.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enhance” dalam konteks Bahasa Inggeris British.', chinese: '良好的照明可以提升视频通话的质量。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'ensure', term: 'ensure', normalizedTerm: 'ensure', partOfSpeech: ['verb'], ipa: '/ɛnʃˈʊr/',
    chineseShort: '确保；保证', chineseExplanation: '表示“确保；保证”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make certain that something happens or is true.',
    examples: [{ english: 'Regular backups help ensure that important files are not lost.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ensure” dalam konteks Bahasa Inggeris British.', chinese: '定期备份有助于确保重要文件不会丢失。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'environmental', term: 'environmental', normalizedTerm: 'environmental', partOfSpeech: ['adjective'], ipa: '/ɪnvˌaɪrənmˈɛntəl/',
    chineseShort: '环境的；环保相关的', chineseExplanation: '形容某人、事物或情况具有“环境的；环保相关的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the natural world and the effects of human activity on it.',
    examples: [{ english: 'The company is trying to reduce its environmental impact.', malay: 'Ayat ini menunjukkan penggunaan perkataan “environmental” dalam konteks Bahasa Inggeris British.', chinese: '公司正努力减少其对环境的影响。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'equivalent', term: 'equivalent', normalizedTerm: 'equivalent', partOfSpeech: ['noun', 'adjective'], ipa: '/ɪkwˈɪvələnt/',
    chineseShort: '相等的；等同物', chineseExplanation: '可作多种词性使用，核心意思包括“相等的；等同物”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Equal in value, meaning, amount, or function.',
    examples: [{ english: 'One hour of intense exercise is not always equivalent to two hours of light activity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “equivalent” dalam konteks Bahasa Inggeris British.', chinese: '一小时高强度运动并不总等同于两小时轻度活动。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'essential', term: 'essential', normalizedTerm: 'essential', partOfSpeech: ['adjective', 'noun'], ipa: '/ɛsˈɛnʃəl/',
    chineseShort: '必不可少的；要素', chineseExplanation: '可作多种词性使用，核心意思包括“必不可少的；要素”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Completely necessary or extremely important.',
    examples: [{ english: 'Reliable internet access is essential for many remote workers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “essential” dalam konteks Bahasa Inggeris British.', chinese: '可靠的网络连接对许多远程工作者来说必不可少。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'estimate', term: 'estimate', normalizedTerm: 'estimate', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɛstəmət/',
    chineseShort: '估计；估算', chineseExplanation: '可作多种词性使用，核心意思包括“估计；估算”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An approximate calculation or judgement of a number, cost, or amount.',
    examples: [{ english: 'Experts estimate that the repairs will take at least two weeks.', malay: 'Ayat ini menunjukkan penggunaan perkataan “estimate” dalam konteks Bahasa Inggeris British.', chinese: '专家估计维修至少需要两周。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'ethical', term: 'ethical', normalizedTerm: 'ethical', partOfSpeech: ['adjective'], ipa: '/ˈɛθɪkəl/',
    chineseShort: '合乎道德的；伦理的', chineseExplanation: '形容某人、事物或情况具有“合乎道德的；伦理的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Morally right or related to principles of right and wrong.',
    examples: [{ english: 'Researchers must consider the ethical use of personal data.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ethical” dalam konteks Bahasa Inggeris British.', chinese: '研究人员必须考虑个人数据的合乎伦理使用。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'evidence', term: 'evidence', normalizedTerm: 'evidence', partOfSpeech: ['noun'], ipa: '/ˈɛvədəns/',
    chineseShort: '证据；依据', chineseExplanation: '指与“证据；依据”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Facts or information that support a conclusion or show that something is true.',
    examples: [{ english: 'There is strong evidence that sleep affects concentration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “evidence” dalam konteks Bahasa Inggeris British.', chinese: '有充分证据表明睡眠会影响专注力。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'exceed', term: 'exceed', normalizedTerm: 'exceed', partOfSpeech: ['verb'], ipa: '/ɪksˈid/',
    chineseShort: '超过；超出', chineseExplanation: '表示“超过；超出”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To be greater than a particular amount, number, or limit.',
    examples: [{ english: 'Costs may exceed the original budget if prices continue to rise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “exceed” dalam konteks Bahasa Inggeris British.', chinese: '如果价格继续上涨，成本可能超过原定预算。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'exclude', term: 'exclude', normalizedTerm: 'exclude', partOfSpeech: ['verb'], ipa: '/ɪksklˈud/',
    chineseShort: '排除；不包括', chineseExplanation: '表示“排除；不包括”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deliberately leave someone or something out.',
    examples: [{ english: 'The study excluded participants under the age of eighteen.', malay: 'Ayat ini menunjukkan penggunaan perkataan “exclude” dalam konteks Bahasa Inggeris British.', chinese: '该研究排除了十八岁以下的参与者。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'expand', term: 'expand', normalizedTerm: 'expand', partOfSpeech: ['verb'], ipa: '/ɪkspˈænd/',
    chineseShort: '扩大；扩展', chineseExplanation: '表示“扩大；扩展”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To become larger or make something larger in size, range, or activity.',
    examples: [{ english: 'The company plans to expand its services into smaller cities.', malay: 'Ayat ini menunjukkan penggunaan perkataan “expand” dalam konteks Bahasa Inggeris British.', chinese: '公司计划把服务扩展到较小的城市。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'expectation', term: 'expectation', normalizedTerm: 'expectation', partOfSpeech: ['noun'], ipa: '/ˌɛkspɛktˈeɪʃən/',
    chineseShort: '期望；预期', chineseExplanation: '指与“期望；预期”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A belief about what is likely to happen or how someone should behave.',
    examples: [{ english: 'The course did not fully meet students\' expectations.', malay: 'Ayat ini menunjukkan penggunaan perkataan “expectation” dalam konteks Bahasa Inggeris British.', chinese: '这门课程没有完全达到学生的期望。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'expose', term: 'expose', normalizedTerm: 'expose', partOfSpeech: ['verb'], ipa: '/ɪkspˈoʊz/',
    chineseShort: '暴露；揭露', chineseExplanation: '表示“暴露；揭露”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something visible, known, or unprotected.',
    examples: [{ english: 'The investigation exposed several weaknesses in the system.', malay: 'Ayat ini menunjukkan penggunaan perkataan “expose” dalam konteks Bahasa Inggeris British.', chinese: '调查揭露了系统中的几个弱点。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'external', term: 'external', normalizedTerm: 'external', partOfSpeech: ['adjective'], ipa: '/ɪkstˈɝnəl/',
    chineseShort: '外部的；外来的', chineseExplanation: '形容某人、事物或情况具有“外部的；外来的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Coming from or relating to outside a particular place, organisation, or system.',
    examples: [{ english: 'External factors can influence the final result.', malay: 'Ayat ini menunjukkan penggunaan perkataan “external” dalam konteks Bahasa Inggeris British.', chinese: '外部因素会影响最终结果。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'factor', term: 'factor', normalizedTerm: 'factor', partOfSpeech: ['noun'], ipa: '/fˈæktɚ/',
    chineseShort: '因素', chineseExplanation: '指与“因素”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One of the things that influences a result or situation.',
    examples: [{ english: 'Cost is an important factor when choosing a university.', malay: 'Ayat ini menunjukkan penggunaan perkataan “factor” dalam konteks Bahasa Inggeris British.', chinese: '选择大学时，费用是一个重要因素。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'feature', term: 'feature', normalizedTerm: 'feature', partOfSpeech: ['noun', 'verb'], ipa: '/fˈitʃɚ/',
    chineseShort: '特征；功能；以……为特色', chineseExplanation: '可作多种词性使用，核心意思包括“特征；功能；以……为特色”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An important or noticeable part of something, or to include something as a main part.',
    examples: [{ english: 'The app includes a useful feature for tracking study time.', malay: 'Ayat ini menunjukkan penggunaan perkataan “feature” dalam konteks Bahasa Inggeris British.', chinese: '这个应用包含一个用于记录学习时间的实用功能。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'flexible', term: 'flexible', normalizedTerm: 'flexible', partOfSpeech: ['adjective'], ipa: '/flˈɛksəbəl/',
    chineseShort: '灵活的；可变通的', chineseExplanation: '形容某人、事物或情况具有“灵活的；可变通的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Able to change or be changed easily according to different needs.',
    examples: [{ english: 'Flexible working hours can improve employee satisfaction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “flexible” dalam konteks Bahasa Inggeris British.', chinese: '弹性工作时间可以提高员工满意度。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'focus', term: 'focus', normalizedTerm: 'focus', partOfSpeech: ['noun', 'verb'], ipa: '/fˈoʊkəs/',
    chineseShort: '重点；集中', chineseExplanation: '可作多种词性使用，核心意思包括“重点；集中”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The main subject of attention, or to give special attention to something.',
    examples: [{ english: 'The discussion focused on practical ways to reduce costs.', malay: 'Ayat ini menunjukkan penggunaan perkataan “focus” dalam konteks Bahasa Inggeris British.', chinese: '讨论集中在降低成本的实际方法上。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'formal', term: 'formal', normalizedTerm: 'formal', partOfSpeech: ['adjective'], ipa: '/fˈɔrməl/',
    chineseShort: '正式的；规范的', chineseExplanation: '形容某人、事物或情况具有“正式的；规范的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Suitable for official, serious, or professional situations.',
    examples: [{ english: 'A formal email should use clear and polite language.', malay: 'Ayat ini menunjukkan penggunaan perkataan “formal” dalam konteks Bahasa Inggeris British.', chinese: '正式电子邮件应使用清晰而礼貌的语言。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'frequent', term: 'frequent', normalizedTerm: 'frequent', partOfSpeech: ['adjective'], ipa: '/frˈikwənt/',
    chineseShort: '频繁的；经常发生的', chineseExplanation: '形容某人、事物或情况具有“频繁的；经常发生的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Happening often or many times.',
    examples: [{ english: 'Frequent delays have caused complaints from passengers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “frequent” dalam konteks Bahasa Inggeris British.', chinese: '频繁的延误引起了乘客投诉。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'fundamental', term: 'fundamental', normalizedTerm: 'fundamental', partOfSpeech: ['adjective'], ipa: '/fˌʌndəmˈɛntəl/',
    chineseShort: '根本的；基础的', chineseExplanation: '形容某人、事物或情况具有“根本的；基础的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Basic and extremely important to the nature or success of something.',
    examples: [{ english: 'Trust is fundamental to a strong working relationship.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fundamental” dalam konteks Bahasa Inggeris British.', chinese: '信任是良好工作关系的基础。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'generate', term: 'generate', normalizedTerm: 'generate', partOfSpeech: ['verb'], ipa: '/dʒˈɛnɚˌeɪt/',
    chineseShort: '产生；生成', chineseExplanation: '表示“产生；生成”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To produce or create something.',
    examples: [{ english: 'The new campaign generated a lot of public interest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “generate” dalam konteks Bahasa Inggeris British.', chinese: '新活动引起了大量公众兴趣。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'global', term: 'global', normalizedTerm: 'global', partOfSpeech: ['adjective'], ipa: '/ɡlˈoʊbəl/',
    chineseShort: '全球的；全世界的', chineseExplanation: '形容某人、事物或情况具有“全球的；全世界的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the whole world.',
    examples: [{ english: 'Climate change is a global challenge that requires cooperation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “global” dalam konteks Bahasa Inggeris British.', chinese: '气候变化是一个需要合作应对的全球性挑战。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'guideline', term: 'guideline', normalizedTerm: 'guideline', partOfSpeech: ['noun'], ipa: '/ɡˈaɪdlˌaɪn/',
    chineseShort: '指南；指导原则', chineseExplanation: '指与“指南；指导原则”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A general rule or piece of advice about how something should be done.',
    examples: [{ english: 'Employees must follow the company\'s safety guidelines.', malay: 'Ayat ini menunjukkan penggunaan perkataan “guideline” dalam konteks Bahasa Inggeris British.', chinese: '员工必须遵守公司的安全指南。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'handle', term: 'handle', normalizedTerm: 'handle', partOfSpeech: ['verb', 'noun'], ipa: '/hˈændəl/',
    chineseShort: '处理；应付；把手', chineseExplanation: '可作多种词性使用，核心意思包括“处理；应付；把手”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deal with a situation, task, or problem successfully.',
    examples: [{ english: 'The support team handled the complaint professionally.', malay: 'Ayat ini menunjukkan penggunaan perkataan “handle” dalam konteks Bahasa Inggeris British.', chinese: '客服团队专业地处理了这起投诉。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'harmful', term: 'harmful', normalizedTerm: 'harmful', partOfSpeech: ['adjective'], ipa: '/hˈɑrmfəl/',
    chineseShort: '有害的', chineseExplanation: '形容某人、事物或情况具有“有害的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Causing damage or negative effects.',
    examples: [{ english: 'Too much screen time can be harmful to sleep quality.', malay: 'Ayat ini menunjukkan penggunaan perkataan “harmful” dalam konteks Bahasa Inggeris British.', chinese: '过多的屏幕时间可能会影响睡眠质量。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'highlight', term: 'highlight', normalizedTerm: 'highlight', partOfSpeech: ['verb', 'noun'], ipa: '/hˈaɪlˌaɪt/',
    chineseShort: '强调；突出显示；亮点', chineseExplanation: '可作多种词性使用，核心意思包括“强调；突出显示；亮点”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To draw attention to something important, or a particularly noticeable part.',
    examples: [{ english: 'The report highlights three major causes of the problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “highlight” dalam konteks Bahasa Inggeris British.', chinese: '报告强调了这个问题的三个主要原因。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'identify', term: 'identify', normalizedTerm: 'identify', partOfSpeech: ['verb'], ipa: '/aɪdˈɛntəfˌaɪ/',
    chineseShort: '识别；确定', chineseExplanation: '表示“识别；确定”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To recognise or discover what someone or something is.',
    examples: [{ english: 'The survey helped identify the main concerns of local residents.', malay: 'Ayat ini menunjukkan penggunaan perkataan “identify” dalam konteks Bahasa Inggeris British.', chinese: '这项调查帮助确定了当地居民的主要担忧。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'illustrate', term: 'illustrate', normalizedTerm: 'illustrate', partOfSpeech: ['verb'], ipa: '/ˈɪləstrˌeɪt/',
    chineseShort: '说明；举例说明', chineseExplanation: '表示“说明；举例说明”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make an idea clearer by giving examples, pictures, or other evidence.',
    examples: [{ english: 'This example illustrates why accurate data matters.', malay: 'Ayat ini menunjukkan penggunaan perkataan “illustrate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子说明了准确数据为何重要。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'impact', term: 'impact', normalizedTerm: 'impact', partOfSpeech: ['noun', 'verb'], ipa: '/ˌɪmpˈækt/',
    chineseShort: '影响；冲击', chineseExplanation: '可作多种词性使用，核心意思包括“影响；冲击”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A strong effect on someone or something.',
    examples: [{ english: 'The new law may have a significant impact on small businesses.', malay: 'Ayat ini menunjukkan penggunaan perkataan “impact” dalam konteks Bahasa Inggeris British.', chinese: '新法律可能会对小企业产生重大影响。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'imply', term: 'imply', normalizedTerm: 'imply', partOfSpeech: ['verb'], ipa: '/ˌɪmplˈaɪ/',
    chineseShort: '暗示；意味着', chineseExplanation: '表示“暗示；意味着”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To suggest something without stating it directly.',
    examples: [{ english: 'The results imply that the current method is less effective.', malay: 'Ayat ini menunjukkan penggunaan perkataan “imply” dalam konteks Bahasa Inggeris British.', chinese: '结果表明当前方法的效果较差。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'improve', term: 'improve', normalizedTerm: 'improve', partOfSpeech: ['verb'], ipa: '/ˌɪmprˈuv/',
    chineseShort: '改善；提高', chineseExplanation: '表示“改善；提高”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To become better or make something better.',
    examples: [{ english: 'Regular feedback can improve the quality of written work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “improve” dalam konteks Bahasa Inggeris British.', chinese: '定期反馈可以提高书面作业的质量。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'incentive', term: 'incentive', normalizedTerm: 'incentive', partOfSpeech: ['noun'], ipa: '/ˌɪnsˈɛntɪv/',
    chineseShort: '激励；奖励措施', chineseExplanation: '指与“激励；奖励措施”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that encourages a person or organisation to do something.',
    examples: [{ english: 'The government introduced tax incentives for green technology.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incentive” dalam konteks Bahasa Inggeris British.', chinese: '政府为绿色技术推出了税收激励措施。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'indicate', term: 'indicate', normalizedTerm: 'indicate', partOfSpeech: ['verb'], ipa: '/ˈɪndəkˌeɪt/',
    chineseShort: '表明；指出', chineseExplanation: '表示“表明；指出”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show, suggest, or point to something.',
    examples: [{ english: 'The data indicates a gradual rise in online shopping.', malay: 'Ayat ini menunjukkan penggunaan perkataan “indicate” dalam konteks Bahasa Inggeris British.', chinese: '数据显示网上购物正在逐步增加。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'individual', term: 'individual', normalizedTerm: 'individual', partOfSpeech: ['noun', 'adjective'], ipa: '/ˌɪndəvˈɪdʒəwəl/',
    chineseShort: '个人；个别的', chineseExplanation: '可作多种词性使用，核心意思包括“个人；个别的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A single person or thing considered separately from a group.',
    examples: [{ english: 'The programme can be adjusted to individual learning needs.', malay: 'Ayat ini menunjukkan penggunaan perkataan “individual” dalam konteks Bahasa Inggeris British.', chinese: '该课程可以根据个人学习需求进行调整。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'inevitable', term: 'inevitable', normalizedTerm: 'inevitable', partOfSpeech: ['adjective'], ipa: '/ˌɪnˈɛvətəbəl/',
    chineseShort: '不可避免的', chineseExplanation: '形容某人、事物或情况具有“不可避免的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Certain to happen and impossible to avoid.',
    examples: [{ english: 'Some degree of change is inevitable when a company grows quickly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inevitable” dalam konteks Bahasa Inggeris British.', chinese: '公司快速发展时，某种程度的变化是不可避免的。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'influence', term: 'influence', normalizedTerm: 'influence', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɪnfluəns/',
    chineseShort: '影响；作用', chineseExplanation: '可作多种词性使用，核心意思包括“影响；作用”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The power to affect how someone thinks or how something develops.',
    examples: [{ english: 'Social media has a strong influence on consumer behaviour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “influence” dalam konteks Bahasa Inggeris British.', chinese: '社交媒体对消费者行为有很大影响。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'initial', term: 'initial', normalizedTerm: 'initial', partOfSpeech: ['adjective', 'noun'], ipa: '/ˌɪnˈɪʃəl/',
    chineseShort: '最初的；首字母', chineseExplanation: '可作多种词性使用，核心意思包括“最初的；首字母”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing or happening at the beginning.',
    examples: [{ english: 'The initial results were positive, but more testing is needed.', malay: 'Ayat ini menunjukkan penggunaan perkataan “initial” dalam konteks Bahasa Inggeris British.', chinese: '初步结果是积极的，但还需要更多测试。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'initiative', term: 'initiative', normalizedTerm: 'initiative', partOfSpeech: ['noun'], ipa: '/ˌɪnˈɪʃətɪv/',
    chineseShort: '主动行动；倡议', chineseExplanation: '指与“主动行动；倡议”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A new plan or action intended to solve a problem or improve a situation.',
    examples: [{ english: 'The city launched an initiative to reduce plastic waste.', malay: 'Ayat ini menunjukkan penggunaan perkataan “initiative” dalam konteks Bahasa Inggeris British.', chinese: '该市发起了一项减少塑料垃圾的倡议。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'innovation', term: 'innovation', normalizedTerm: 'innovation', partOfSpeech: ['noun'], ipa: '/ˌɪnəvˈeɪʃən/',
    chineseShort: '创新；新方法', chineseExplanation: '指与“创新；新方法”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A new idea, method, or product that improves something.',
    examples: [{ english: 'Innovation is essential for companies competing in fast-changing markets.', malay: 'Ayat ini menunjukkan penggunaan perkataan “innovation” dalam konteks Bahasa Inggeris British.', chinese: '创新对于在快速变化市场中竞争的公司至关重要。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'insight', term: 'insight', normalizedTerm: 'insight', partOfSpeech: ['noun'], ipa: '/ˈɪnsˌaɪt/',
    chineseShort: '洞察；深刻理解', chineseExplanation: '指与“洞察；深刻理解”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A clear and deep understanding of a situation or subject.',
    examples: [{ english: 'The interviews provided useful insight into customer behaviour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insight” dalam konteks Bahasa Inggeris British.', chinese: '访谈让我们更深入地了解了顾客行为。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'inspect', term: 'inspect', normalizedTerm: 'inspect', partOfSpeech: ['verb'], ipa: '/ˌɪnspˈɛkt/',
    chineseShort: '检查；视察', chineseExplanation: '表示“检查；视察”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To examine something carefully to check its condition or quality.',
    examples: [{ english: 'Engineers inspected the bridge before reopening it to traffic.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inspect” dalam konteks Bahasa Inggeris British.', chinese: '工程师在桥梁重新开放交通前进行了检查。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'install', term: 'install', normalizedTerm: 'install', partOfSpeech: ['verb'], ipa: '/ˌɪnstˈɔl/',
    chineseShort: '安装；设置', chineseExplanation: '表示“安装；设置”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To put equipment or software in place so that it is ready to use.',
    examples: [{ english: 'The school installed new computers in the language lab.', malay: 'Ayat ini menunjukkan penggunaan perkataan “install” dalam konteks Bahasa Inggeris British.', chinese: '学校在语言实验室安装了新电脑。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'instance', term: 'instance', normalizedTerm: 'instance', partOfSpeech: ['noun'], ipa: '/ˈɪnstəns/',
    chineseShort: '例子；情况', chineseExplanation: '指与“例子；情况”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular example or case of something.',
    examples: [{ english: 'In this instance, a simple solution may be more effective.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instance” dalam konteks Bahasa Inggeris British.', chinese: '在这种情况下，简单的解决方案可能更有效。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'intend', term: 'intend', normalizedTerm: 'intend', partOfSpeech: ['verb'], ipa: '/ˌɪntˈɛnd/',
    chineseShort: '打算；计划', chineseExplanation: '表示“打算；计划”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To plan or mean to do something.',
    examples: [{ english: 'The company intends to open two new branches next year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intend” dalam konteks Bahasa Inggeris British.', chinese: '公司计划明年开设两家新分店。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'interaction', term: 'interaction', normalizedTerm: 'interaction', partOfSpeech: ['noun'], ipa: '/ˌɪntɚˈækʃən/',
    chineseShort: '互动；相互作用', chineseExplanation: '指与“互动；相互作用”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Communication or activity between people, groups, or things.',
    examples: [{ english: 'Online classes still need meaningful interaction between teachers and students.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interaction” dalam konteks Bahasa Inggeris British.', chinese: '在线课程仍需要师生之间有意义的互动。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'internal', term: 'internal', normalizedTerm: 'internal', partOfSpeech: ['adjective'], ipa: '/ˌɪntˈɝnəl/',
    chineseShort: '内部的；内在的', chineseExplanation: '形容某人、事物或情况具有“内部的；内在的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Located, happening, or existing inside an organisation, system, or body.',
    examples: [{ english: 'The issue was discussed in an internal company meeting.', malay: 'Ayat ini menunjukkan penggunaan perkataan “internal” dalam konteks Bahasa Inggeris British.', chinese: '这个问题在公司内部会议上进行了讨论。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'interpret', term: 'interpret', normalizedTerm: 'interpret', partOfSpeech: ['verb'], ipa: '/ˌɪntˈɝprət/',
    chineseShort: '解释；理解', chineseExplanation: '表示“解释；理解”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To explain or understand the meaning of information, words, or events.',
    examples: [{ english: 'Different readers may interpret the same data in different ways.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interpret” dalam konteks Bahasa Inggeris British.', chinese: '不同读者可能会以不同方式解读同一组数据。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'investigate', term: 'investigate', normalizedTerm: 'investigate', partOfSpeech: ['verb'], ipa: '/ˌɪnvˈɛstəɡˌeɪt/',
    chineseShort: '调查；研究', chineseExplanation: '表示“调查；研究”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To examine a situation carefully in order to discover the truth or cause.',
    examples: [{ english: 'The authorities are investigating the cause of the accident.', malay: 'Ayat ini menunjukkan penggunaan perkataan “investigate” dalam konteks Bahasa Inggeris British.', chinese: '有关部门正在调查事故原因。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'involve', term: 'involve', normalizedTerm: 'involve', partOfSpeech: ['verb'], ipa: '/ˌɪnvˈɑlv/',
    chineseShort: '涉及；包含；使参与', chineseExplanation: '表示“涉及；包含；使参与”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To include something as a necessary part or require someone\'s participation.',
    examples: [{ english: 'The job involves regular communication with international clients.', malay: 'Ayat ini menunjukkan penggunaan perkataan “involve” dalam konteks Bahasa Inggeris British.', chinese: '这份工作需要经常与国际客户沟通。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'issue', term: 'issue', normalizedTerm: 'issue', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɪʃu/',
    chineseShort: '问题；议题；发布', chineseExplanation: '可作多种词性使用，核心意思包括“问题；议题；发布”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An important subject or problem for discussion, or to officially provide something.',
    examples: [{ english: 'Housing costs are a major issue in many large cities.', malay: 'Ayat ini menunjukkan penggunaan perkataan “issue” dalam konteks Bahasa Inggeris British.', chinese: '住房成本是许多大城市面临的主要问题。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'justify', term: 'justify', normalizedTerm: 'justify', partOfSpeech: ['verb'], ipa: '/dʒˈʌstəfˌaɪ/',
    chineseShort: '证明……合理；为……辩护', chineseExplanation: '表示“证明……合理；为……辩护”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give a good reason for a decision, action, or belief.',
    examples: [{ english: 'The company must justify the additional expense to investors.', malay: 'Ayat ini menunjukkan penggunaan perkataan “justify” dalam konteks Bahasa Inggeris British.', chinese: '公司必须向投资者说明这笔额外开支的合理性。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'legal', term: 'legal', normalizedTerm: 'legal', partOfSpeech: ['adjective'], ipa: '/lˈiɡəl/',
    chineseShort: '法律的；合法的', chineseExplanation: '形容某人、事物或情况具有“法律的；合法的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the law or allowed by law.',
    examples: [{ english: 'Businesses must understand their legal responsibilities towards customers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “legal” dalam konteks Bahasa Inggeris British.', chinese: '企业必须了解自己对顾客承担的法律责任。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'limit', term: 'limit', normalizedTerm: 'limit', partOfSpeech: ['noun', 'verb'], ipa: '/lˈɪmət/',
    chineseShort: '限制；限度', chineseExplanation: '可作多种词性使用，核心意思包括“限制；限度”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The greatest amount allowed, or to control how much something can happen.',
    examples: [{ english: 'The new rule limits the amount of data an app can collect.', malay: 'Ayat ini menunjukkan penggunaan perkataan “limit” dalam konteks Bahasa Inggeris British.', chinese: '新规定限制了应用可以收集的数据量。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'likely', term: 'likely', normalizedTerm: 'likely', partOfSpeech: ['adjective', 'adverb'], ipa: '/lˈaɪkli/',
    chineseShort: '可能的；很可能', chineseExplanation: '可作多种词性使用，核心意思包括“可能的；很可能”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Expected or probable to happen.',
    examples: [{ english: 'Prices are likely to remain high for several months.', malay: 'Ayat ini menunjukkan penggunaan perkataan “likely” dalam konteks Bahasa Inggeris British.', chinese: '价格很可能在未来几个月保持高位。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'link', term: 'link', normalizedTerm: 'link', partOfSpeech: ['noun', 'verb'], ipa: '/lˈɪŋk/',
    chineseShort: '联系；连接', chineseExplanation: '可作多种词性使用，核心意思包括“联系；连接”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A connection between two things, or to connect them.',
    examples: [{ english: 'Researchers found a link between sleep quality and concentration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “link” dalam konteks Bahasa Inggeris British.', chinese: '研究人员发现睡眠质量与专注力之间存在联系。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'major', term: 'major', normalizedTerm: 'major', partOfSpeech: ['adjective', 'noun'], ipa: '/mˈeɪdʒɚ/',
    chineseShort: '主要的；重要的', chineseExplanation: '可作多种词性使用，核心意思包括“主要的；重要的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Very important, serious, or large in degree.',
    examples: [{ english: 'Traffic congestion is a major problem in the capital.', malay: 'Ayat ini menunjukkan penggunaan perkataan “major” dalam konteks Bahasa Inggeris British.', chinese: '交通拥堵是首都面临的一个主要问题。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'manage', term: 'manage', normalizedTerm: 'manage', partOfSpeech: ['verb'], ipa: '/mˈænədʒ/',
    chineseShort: '管理；设法做到', chineseExplanation: '表示“管理；设法做到”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To control or organise something, or succeed in doing something difficult.',
    examples: [{ english: 'Small businesses must manage their costs carefully.', malay: 'Ayat ini menunjukkan penggunaan perkataan “manage” dalam konteks Bahasa Inggeris British.', chinese: '小企业必须谨慎管理成本。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'measure', term: 'measure', normalizedTerm: 'measure', partOfSpeech: ['noun', 'verb'], ipa: '/mˈɛʒɚ/',
    chineseShort: '措施；测量', chineseExplanation: '可作多种词性使用，核心意思包括“措施；测量”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An action taken to achieve a result, or to find the size or amount of something.',
    examples: [{ english: 'The government introduced new measures to improve road safety.', malay: 'Ayat ini menunjukkan penggunaan perkataan “measure” dalam konteks Bahasa Inggeris British.', chinese: '政府推出了新措施来提高道路安全。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'method', term: 'method', normalizedTerm: 'method', partOfSpeech: ['noun'], ipa: '/mˈɛθəd/',
    chineseShort: '方法；方式', chineseExplanation: '指与“方法；方式”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular way of doing something.',
    examples: [{ english: 'The researchers used a different method to collect the data.', malay: 'Ayat ini menunjukkan penggunaan perkataan “method” dalam konteks Bahasa Inggeris British.', chinese: '研究人员采用了不同的方法收集数据。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'minor', term: 'minor', normalizedTerm: 'minor', partOfSpeech: ['adjective', 'noun'], ipa: '/mˈaɪnɚ/',
    chineseShort: '较小的；次要的', chineseExplanation: '可作多种词性使用，核心意思包括“较小的；次要的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Not very serious, important, or large.',
    examples: [{ english: 'The update fixed several minor technical problems.', malay: 'Ayat ini menunjukkan penggunaan perkataan “minor” dalam konteks Bahasa Inggeris British.', chinese: '这次更新修复了几个小的技术问题。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'monitor', term: 'monitor', normalizedTerm: 'monitor', partOfSpeech: ['verb', 'noun'], ipa: '/mˈɑnətɚ/',
    chineseShort: '监测；监督', chineseExplanation: '可作多种词性使用，核心意思包括“监测；监督”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To watch and check something carefully over a period of time.',
    examples: [{ english: 'Doctors monitor patients closely after major surgery.', malay: 'Ayat ini menunjukkan penggunaan perkataan “monitor” dalam konteks Bahasa Inggeris British.', chinese: '医生会在大手术后密切监测病人的情况。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Technology'],
  },
  {
    id: 'motivate', term: 'motivate', normalizedTerm: 'motivate', partOfSpeech: ['verb'], ipa: '/mˈoʊtəvˌeɪt/',
    chineseShort: '激励；促使', chineseExplanation: '表示“激励；促使”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give someone a reason or desire to do something.',
    examples: [{ english: 'Clear goals can motivate employees to improve their performance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “motivate” dalam konteks Bahasa Inggeris British.', chinese: '明确的目标可以激励员工提升表现。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'mutual', term: 'mutual', normalizedTerm: 'mutual', partOfSpeech: ['adjective'], ipa: '/mjˈutʃuəl/',
    chineseShort: '相互的；共同的', chineseExplanation: '形容某人、事物或情况具有“相互的；共同的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Shared or felt by two or more people or groups.',
    examples: [{ english: 'The agreement was based on mutual trust and respect.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mutual” dalam konteks Bahasa Inggeris British.', chinese: '这项协议建立在相互信任和尊重的基础上。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'negative', term: 'negative', normalizedTerm: 'negative', partOfSpeech: ['adjective', 'noun'], ipa: '/nˈɛɡətɪv/',
    chineseShort: '负面的；否定的', chineseExplanation: '可作多种词性使用，核心意思包括“负面的；否定的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Bad, harmful, or expressing disagreement or absence.',
    examples: [{ english: 'The policy received a largely negative response from the public.', malay: 'Ayat ini menunjukkan penggunaan perkataan “negative” dalam konteks Bahasa Inggeris British.', chinese: '这项政策收到的公众反应大多是负面的。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'negotiate', term: 'negotiate', normalizedTerm: 'negotiate', partOfSpeech: ['verb'], ipa: '/nəɡˈoʊʃiˌeɪt/',
    chineseShort: '谈判；协商', chineseExplanation: '表示“谈判；协商”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To discuss something formally in order to reach an agreement.',
    examples: [{ english: 'The two companies are negotiating a new supply contract.', malay: 'Ayat ini menunjukkan penggunaan perkataan “negotiate” dalam konteks Bahasa Inggeris British.', chinese: '两家公司正在协商一份新的供应合同。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'objective', term: 'objective', normalizedTerm: 'objective', partOfSpeech: ['noun', 'adjective'], ipa: '/əbdʒˈɛktɪv/',
    chineseShort: '目标；客观的', chineseExplanation: '可作多种词性使用，核心意思包括“目标；客观的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A goal to be achieved, or based on facts rather than personal feelings.',
    examples: [{ english: 'The main objective is to reduce waiting times for patients.', malay: 'Ayat ini menunjukkan penggunaan perkataan “objective” dalam konteks Bahasa Inggeris British.', chinese: '主要目标是缩短病人的等候时间。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'obtain', term: 'obtain', normalizedTerm: 'obtain', partOfSpeech: ['verb'], ipa: '/əbtˈeɪn/',
    chineseShort: '获得；取得', chineseExplanation: '表示“获得；取得”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To get something, especially through effort or a formal process.',
    examples: [{ english: 'Applicants must obtain permission before using the data.', malay: 'Ayat ini menunjukkan penggunaan perkataan “obtain” dalam konteks Bahasa Inggeris British.', chinese: '申请人必须先获得许可才能使用这些数据。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'obvious', term: 'obvious', normalizedTerm: 'obvious', partOfSpeech: ['adjective'], ipa: '/ˈɑbviəs/',
    chineseShort: '明显的；显而易见的', chineseExplanation: '形容某人、事物或情况具有“明显的；显而易见的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easy to see, notice, or understand.',
    examples: [{ english: 'It was obvious that the old system could not handle the demand.', malay: 'Ayat ini menunjukkan penggunaan perkataan “obvious” dalam konteks Bahasa Inggeris British.', chinese: '很明显，旧系统无法应付这种需求。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'occur', term: 'occur', normalizedTerm: 'occur', partOfSpeech: ['verb'], ipa: '/əkˈɝ/',
    chineseShort: '发生；出现', chineseExplanation: '表示“发生；出现”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To happen or exist.',
    examples: [{ english: 'Most errors occur when users enter incomplete information.', malay: 'Ayat ini menunjukkan penggunaan perkataan “occur” dalam konteks Bahasa Inggeris British.', chinese: '大多数错误发生在用户输入不完整信息时。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'option', term: 'option', normalizedTerm: 'option', partOfSpeech: ['noun'], ipa: '/ˈɑpʃən/',
    chineseShort: '选择；选项', chineseExplanation: '指与“选择；选项”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One of several things that can be chosen.',
    examples: [{ english: 'Working remotely is now an option for many employees.', malay: 'Ayat ini menunjukkan penggunaan perkataan “option” dalam konteks Bahasa Inggeris British.', chinese: '远程办公现在是许多员工的一种选择。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'outcome', term: 'outcome', normalizedTerm: 'outcome', partOfSpeech: ['noun'], ipa: '/ˈaʊtkˌʌm/',
    chineseShort: '结果；成果', chineseExplanation: '指与“结果；成果”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The final result of an action, process, or situation.',
    examples: [{ english: 'The outcome of the meeting was more positive than expected.', malay: 'Ayat ini menunjukkan penggunaan perkataan “outcome” dalam konteks Bahasa Inggeris British.', chinese: '会议的结果比预期更积极。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'overall', term: 'overall', normalizedTerm: 'overall', partOfSpeech: ['adjective', 'adverb'], ipa: '/ˈoʊvɚˌɔl/',
    chineseShort: '总体的；总的来说', chineseExplanation: '可作多种词性使用，核心意思包括“总体的；总的来说”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Considering everything or relating to the whole situation.',
    examples: [{ english: 'Overall performance improved despite a difficult first quarter.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overall” dalam konteks Bahasa Inggeris British.', chinese: '尽管第一季度困难重重，整体表现仍有所改善。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'participate', term: 'participate', normalizedTerm: 'participate', partOfSpeech: ['verb'], ipa: '/pɑrtˈɪsəpˌeɪt/',
    chineseShort: '参与；参加', chineseExplanation: '表示“参与；参加”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To take part in an activity or event.',
    examples: [{ english: 'More than two hundred students participated in the survey.', malay: 'Ayat ini menunjukkan penggunaan perkataan “participate” dalam konteks Bahasa Inggeris British.', chinese: '两百多名学生参加了这项调查。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'particular', term: 'particular', normalizedTerm: 'particular', partOfSpeech: ['adjective'], ipa: '/pɚtˈɪkjəlɚ/',
    chineseShort: '特定的；特别的', chineseExplanation: '形容某人、事物或情况具有“特定的；特别的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Used to refer to one specific person, thing, or type.',
    examples: [{ english: 'This method is useful for a particular type of problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “particular” dalam konteks Bahasa Inggeris British.', chinese: '这种方法适用于一种特定类型的问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'permanent', term: 'permanent', normalizedTerm: 'permanent', partOfSpeech: ['adjective'], ipa: '/pˈɝmənənt/',
    chineseShort: '永久的；长期的', chineseExplanation: '形容某人、事物或情况具有“永久的；长期的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Continuing for a long time or intended to last indefinitely.',
    examples: [{ english: 'The temporary office will be replaced by a permanent building.', malay: 'Ayat ini menunjukkan penggunaan perkataan “permanent” dalam konteks Bahasa Inggeris British.', chinese: '临时办公室将由永久性建筑取代。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'permit', term: 'permit', normalizedTerm: 'permit', partOfSpeech: ['verb', 'noun'], ipa: '/pɚmˈɪt/',
    chineseShort: '允许；许可证', chineseExplanation: '可作多种词性使用，核心意思包括“允许；许可证”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To allow something, or an official document giving permission.',
    examples: [{ english: 'The rules do not permit visitors to enter this area.', malay: 'Ayat ini menunjukkan penggunaan perkataan “permit” dalam konteks Bahasa Inggeris British.', chinese: '规定不允许访客进入这个区域。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'perspective', term: 'perspective', normalizedTerm: 'perspective', partOfSpeech: ['noun'], ipa: '/pɚspˈɛktɪv/',
    chineseShort: '观点；视角', chineseExplanation: '指与“观点；视角”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular way of thinking about or viewing a situation.',
    examples: [{ english: 'The documentary presents the issue from several different perspectives.', malay: 'Ayat ini menunjukkan penggunaan perkataan “perspective” dalam konteks Bahasa Inggeris British.', chinese: '这部纪录片从多个不同角度呈现这个问题。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'potential', term: 'potential', normalizedTerm: 'potential', partOfSpeech: ['adjective', 'noun'], ipa: '/pətˈɛnʃəl/',
    chineseShort: '潜在的；潜力', chineseExplanation: '可作多种词性使用，核心意思包括“潜在的；潜力”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Possible in the future, or the ability to develop or succeed.',
    examples: [{ english: 'The technology has the potential to reduce energy use significantly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “potential” dalam konteks Bahasa Inggeris British.', chinese: '这项技术有潜力显著降低能源消耗。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'practical', term: 'practical', normalizedTerm: 'practical', partOfSpeech: ['adjective'], ipa: '/prˈæktəkəl/',
    chineseShort: '实际的；实用的', chineseExplanation: '形容某人、事物或情况具有“实际的；实用的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Useful and suitable for real situations rather than only theory.',
    examples: [{ english: 'The workshop provides practical advice for job interviews.', malay: 'Ayat ini menunjukkan penggunaan perkataan “practical” dalam konteks Bahasa Inggeris British.', chinese: '这个工作坊为求职面试提供实用建议。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'predict', term: 'predict', normalizedTerm: 'predict', partOfSpeech: ['verb'], ipa: '/prɪdˈɪkt/',
    chineseShort: '预测；预言', chineseExplanation: '表示“预测；预言”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To say what is likely to happen in the future.',
    examples: [{ english: 'Experts cannot predict exactly how the market will change.', malay: 'Ayat ini menunjukkan penggunaan perkataan “predict” dalam konteks Bahasa Inggeris British.', chinese: '专家无法准确预测市场将如何变化。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'prevent', term: 'prevent', normalizedTerm: 'prevent', partOfSpeech: ['verb'], ipa: '/prɪvˈɛnt/',
    chineseShort: '阻止；预防', chineseExplanation: '表示“阻止；预防”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To stop something from happening.',
    examples: [{ english: 'Regular maintenance can prevent serious equipment failures.', malay: 'Ayat ini menunjukkan penggunaan perkataan “prevent” dalam konteks Bahasa Inggeris British.', chinese: '定期维护可以防止严重的设备故障。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'priority', term: 'priority', normalizedTerm: 'priority', partOfSpeech: ['noun'], ipa: '/praɪˈɔrəti/',
    chineseShort: '优先事项；优先权', chineseExplanation: '指与“优先事项；优先权”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that is more important than other things and should be dealt with first.',
    examples: [{ english: 'Improving road safety should be a national priority.', malay: 'Ayat ini menunjukkan penggunaan perkataan “priority” dalam konteks Bahasa Inggeris British.', chinese: '改善道路安全应成为国家优先事项。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'procedure', term: 'procedure', normalizedTerm: 'procedure', partOfSpeech: ['noun'], ipa: '/prəsˈidʒɚ/',
    chineseShort: '程序；步骤', chineseExplanation: '指与“程序；步骤”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An official or accepted way of doing something.',
    examples: [{ english: 'Staff must follow the correct procedure when handling complaints.', malay: 'Ayat ini menunjukkan penggunaan perkataan “procedure” dalam konteks Bahasa Inggeris British.', chinese: '员工处理投诉时必须遵循正确程序。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'process', term: 'process', normalizedTerm: 'process', partOfSpeech: ['noun', 'verb'], ipa: '/prˈɑsˌɛs/',
    chineseShort: '过程；处理', chineseExplanation: '可作多种词性使用，核心意思包括“过程；处理”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A series of actions that lead to a result, or to deal with information or material.',
    examples: [{ english: 'The application process usually takes several working days.', malay: 'Ayat ini menunjukkan penggunaan perkataan “process” dalam konteks Bahasa Inggeris British.', chinese: '申请流程通常需要几个工作日。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'professional', term: 'professional', normalizedTerm: 'professional', partOfSpeech: ['adjective', 'noun'], ipa: '/prəfˈɛʃənəl/',
    chineseShort: '专业的；专业人士', chineseExplanation: '可作多种词性使用，核心意思包括“专业的；专业人士”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to skilled work, or showing a high standard of behaviour.',
    examples: [{ english: 'The staff remained professional throughout the difficult meeting.', malay: 'Ayat ini menunjukkan penggunaan perkataan “professional” dalam konteks Bahasa Inggeris British.', chinese: '在整个艰难的会议中，员工始终保持专业。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'proportion', term: 'proportion', normalizedTerm: 'proportion', partOfSpeech: ['noun'], ipa: '/prəpˈɔrʃən/',
    chineseShort: '比例；部分', chineseExplanation: '指与“比例；部分”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A part or share of a whole, often expressed as a fraction or percentage.',
    examples: [{ english: 'A large proportion of respondents preferred online services.', malay: 'Ayat ini menunjukkan penggunaan perkataan “proportion” dalam konteks Bahasa Inggeris British.', chinese: '很大一部分受访者更喜欢在线服务。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'prospect', term: 'prospect', normalizedTerm: 'prospect', partOfSpeech: ['noun'], ipa: '/prˈɑspɛkt/',
    chineseShort: '前景；可能性', chineseExplanation: '指与“前景；可能性”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The possibility that something will happen, especially something expected in the future.',
    examples: [{ english: 'The prospect of higher costs worries many small businesses.', malay: 'Ayat ini menunjukkan penggunaan perkataan “prospect” dalam konteks Bahasa Inggeris British.', chinese: '成本上升的前景让许多小企业担忧。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'protect', term: 'protect', normalizedTerm: 'protect', partOfSpeech: ['verb'], ipa: '/prətˈɛkt/',
    chineseShort: '保护', chineseExplanation: '表示“保护”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep someone or something safe from harm, damage, or loss.',
    examples: [{ english: 'Strong passwords help protect personal information online.', malay: 'Ayat ini menunjukkan penggunaan perkataan “protect” dalam konteks Bahasa Inggeris British.', chinese: '强密码有助于保护网上的个人信息。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'prove', term: 'prove', normalizedTerm: 'prove', partOfSpeech: ['verb'], ipa: '/prˈuv/',
    chineseShort: '证明；证实', chineseExplanation: '表示“证明；证实”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show that something is true by using facts or evidence.',
    examples: [{ english: 'The experiment proved that the new material was stronger.', malay: 'Ayat ini menunjukkan penggunaan perkataan “prove” dalam konteks Bahasa Inggeris British.', chinese: '实验表明这种新材料更坚固。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'provide', term: 'provide', normalizedTerm: 'provide', partOfSpeech: ['verb'], ipa: '/prəvˈaɪd/',
    chineseShort: '提供；供应', chineseExplanation: '表示“提供；供应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give someone something that they need or can use.',
    examples: [{ english: 'The website provides free resources for language learners.', malay: 'Ayat ini menunjukkan penggunaan perkataan “provide” dalam konteks Bahasa Inggeris British.', chinese: '这个网站为语言学习者提供免费资源。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'publish', term: 'publish', normalizedTerm: 'publish', partOfSpeech: ['verb'], ipa: '/pˈʌblɪʃ/',
    chineseShort: '出版；发布', chineseExplanation: '表示“出版；发布”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make information or written work available to the public.',
    examples: [{ english: 'The university publishes the results of the survey every year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “publish” dalam konteks Bahasa Inggeris British.', chinese: '这所大学每年都会公布调查结果。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'pursue', term: 'pursue', normalizedTerm: 'pursue', partOfSpeech: ['verb'], ipa: '/pɚsˈu/',
    chineseShort: '追求；继续进行', chineseExplanation: '表示“追求；继续进行”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To try to achieve something over a period of time.',
    examples: [{ english: 'She decided to pursue a career in environmental science.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pursue” dalam konteks Bahasa Inggeris British.', chinese: '她决定从事环境科学方面的职业。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'range', term: 'range', normalizedTerm: 'range', partOfSpeech: ['noun', 'verb'], ipa: '/rˈeɪndʒ/',
    chineseShort: '范围；一系列', chineseExplanation: '可作多种词性使用，核心意思包括“范围；一系列”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A variety of different things or the limits between which something varies.',
    examples: [{ english: 'The store offers a wide range of affordable products.', malay: 'Ayat ini menunjukkan penggunaan perkataan “range” dalam konteks Bahasa Inggeris British.', chinese: '这家商店提供多种价格实惠的产品。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'react', term: 'react', normalizedTerm: 'react', partOfSpeech: ['verb'], ipa: '/riˈækt/',
    chineseShort: '反应；回应', chineseExplanation: '表示“反应；回应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To behave or respond in a particular way because of something that happens.',
    examples: [{ english: 'Consumers reacted positively to the lower prices.', malay: 'Ayat ini menunjukkan penggunaan perkataan “react” dalam konteks Bahasa Inggeris British.', chinese: '消费者对降价作出了积极反应。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'reasonable', term: 'reasonable', normalizedTerm: 'reasonable', partOfSpeech: ['adjective'], ipa: '/rˈizənəbəl/',
    chineseShort: '合理的；适度的', chineseExplanation: '形容某人、事物或情况具有“合理的；适度的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Fair, sensible, or not too expensive or extreme.',
    examples: [{ english: 'The hotel offers good service at a reasonable price.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reasonable” dalam konteks Bahasa Inggeris British.', chinese: '这家酒店以合理价格提供良好服务。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'recognize', term: 'recognise', normalizedTerm: 'recognise', partOfSpeech: ['verb'], ipa: '/rˈɛkəɡnˌaɪz/',
    chineseShort: '认出；承认；认识到', chineseExplanation: '表示“认出；承认；认识到”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To identify someone or something, or accept that something is true or important.',
    examples: [{ english: 'The government recognised the need for better public transport.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recognise” dalam konteks Bahasa Inggeris British.', chinese: '政府认识到改善公共交通的必要性。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'recommend', term: 'recommend', normalizedTerm: 'recommend', partOfSpeech: ['verb'], ipa: '/rˌɛkəmˈɛnd/',
    chineseShort: '推荐；建议', chineseExplanation: '表示“推荐；建议”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To say that something is good or suitable, or advise a course of action.',
    examples: [{ english: 'Doctors recommend regular exercise for most adults.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recommend” dalam konteks Bahasa Inggeris British.', chinese: '医生建议大多数成年人定期运动。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'recover', term: 'recover', normalizedTerm: 'recover', partOfSpeech: ['verb'], ipa: '/rɪkˈʌvɚ/',
    chineseShort: '恢复；找回', chineseExplanation: '表示“恢复；找回”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To return to a normal condition after difficulty, illness, or loss.',
    examples: [{ english: 'The local economy is slowly recovering after a difficult year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recover” dalam konteks Bahasa Inggeris British.', chinese: '当地经济在艰难的一年后正缓慢复苏。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'reduce', term: 'reduce', normalizedTerm: 'reduce', partOfSpeech: ['verb'], ipa: '/rədˈus/',
    chineseShort: '减少；降低', chineseExplanation: '表示“减少；降低”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something smaller in size, amount, or degree.',
    examples: [{ english: 'The company is trying to reduce unnecessary energy use.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reduce” dalam konteks Bahasa Inggeris British.', chinese: '公司正努力减少不必要的能源消耗。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'refer', term: 'refer', normalizedTerm: 'refer', partOfSpeech: ['verb'], ipa: '/rəfˈɝ/',
    chineseShort: '提到；参考；指的是', chineseExplanation: '表示“提到；参考；指的是”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To mention something, direct someone to a source, or mean a particular thing.',
    examples: [{ english: 'The report refers to several studies on online learning.', malay: 'Ayat ini menunjukkan penggunaan perkataan “refer” dalam konteks Bahasa Inggeris British.', chinese: '报告提到了几项关于在线学习的研究。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'reflect', term: 'reflect', normalizedTerm: 'reflect', partOfSpeech: ['verb'], ipa: '/rɪflˈɛkt/',
    chineseShort: '反映；思考', chineseExplanation: '表示“反映；思考”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To show the nature of something, or think carefully about an experience.',
    examples: [{ english: 'The survey results reflect changing attitudes towards remote work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reflect” dalam konteks Bahasa Inggeris British.', chinese: '调查结果反映了人们对远程工作的态度变化。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'reform', term: 'reform', normalizedTerm: 'reform', partOfSpeech: ['noun', 'verb'], ipa: '/rəfˈɔrm/',
    chineseShort: '改革；改进', chineseExplanation: '可作多种词性使用，核心意思包括“改革；改进”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A change intended to improve a system or institution.',
    examples: [{ english: 'The education reform aims to give schools more flexibility.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reform” dalam konteks Bahasa Inggeris British.', chinese: '教育改革旨在给予学校更大的灵活性。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'regard', term: 'regard', normalizedTerm: 'regard', partOfSpeech: ['noun', 'verb'], ipa: '/rɪɡˈɑrd/',
    chineseShort: '看待；认为；方面', chineseExplanation: '可作多种词性使用，核心意思包括“看待；认为；方面”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To consider someone or something in a particular way.',
    examples: [{ english: 'Many people regard access to education as a basic right.', malay: 'Ayat ini menunjukkan penggunaan perkataan “regard” dalam konteks Bahasa Inggeris British.', chinese: '许多人认为接受教育是一项基本权利。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'region', term: 'region', normalizedTerm: 'region', partOfSpeech: ['noun'], ipa: '/rˈidʒən/',
    chineseShort: '地区；区域', chineseExplanation: '指与“地区；区域”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular area of a country or the world.',
    examples: [{ english: 'The northern region receives more rainfall than the south.', malay: 'Ayat ini menunjukkan penggunaan perkataan “region” dalam konteks Bahasa Inggeris British.', chinese: '北部地区的降雨量比南部更多。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'regulate', term: 'regulate', normalizedTerm: 'regulate', partOfSpeech: ['verb'], ipa: '/rˈɛɡjəlˌeɪt/',
    chineseShort: '监管；控制', chineseExplanation: '表示“监管；控制”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To control an activity or process through rules or laws.',
    examples: [{ english: 'Governments regulate industries to protect consumers and workers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “regulate” dalam konteks Bahasa Inggeris British.', chinese: '政府通过监管行业来保护消费者和工人。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'reject', term: 'reject', normalizedTerm: 'reject', partOfSpeech: ['verb'], ipa: '/rɪdʒˈɛkt/',
    chineseShort: '拒绝；不接受', chineseExplanation: '表示“拒绝；不接受”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To refuse to accept, approve, or believe something.',
    examples: [{ english: 'The committee rejected the proposal because it was too costly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reject” dalam konteks Bahasa Inggeris British.', chinese: '委员会因成本过高而拒绝了该提案。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'relatively', term: 'relatively', normalizedTerm: 'relatively', partOfSpeech: ['adverb'], ipa: '/rˈɛlətɪvli/',
    chineseShort: '相对地；比较而言', chineseExplanation: '表示以“相对地；比较而言”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To a fairly small or moderate degree when compared with something else.',
    examples: [{ english: 'The city is relatively affordable compared with other capitals.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relatively” dalam konteks Bahasa Inggeris British.', chinese: '与其他首都相比，这座城市的生活成本相对较低。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'relevant', term: 'relevant', normalizedTerm: 'relevant', partOfSpeech: ['adjective'], ipa: '/rˈɛləvənt/',
    chineseShort: '相关的；切题的', chineseExplanation: '形容某人、事物或情况具有“相关的；切题的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Closely connected with the subject or situation being discussed.',
    examples: [{ english: 'Please include only information that is relevant to the question.', malay: 'Ayat ini menunjukkan penggunaan perkataan “relevant” dalam konteks Bahasa Inggeris British.', chinese: '请只加入与问题相关的信息。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'require', term: 'require', normalizedTerm: 'require', partOfSpeech: ['verb'], ipa: '/rˌikwˈaɪɚ/',
    chineseShort: '需要；要求', chineseExplanation: '表示“需要；要求”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To need something or make something necessary.',
    examples: [{ english: 'The position requires at least two years of work experience.', malay: 'Ayat ini menunjukkan penggunaan perkataan “require” dalam konteks Bahasa Inggeris British.', chinese: '这个职位要求至少两年工作经验。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'research', term: 'research', normalizedTerm: 'research', partOfSpeech: ['noun', 'verb'], ipa: '/risˈɝtʃ/',
    chineseShort: '研究；调查', chineseExplanation: '可作多种词性使用，核心意思包括“研究；调查”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Careful study to discover new information or understand a subject better.',
    examples: [{ english: 'The team is conducting research into renewable energy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “research” dalam konteks Bahasa Inggeris British.', chinese: '团队正在进行可再生能源方面的研究。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'reserve', term: 'reserve', normalizedTerm: 'reserve', partOfSpeech: ['verb', 'noun'], ipa: '/rɪzˈɝv/',
    chineseShort: '预订；保留；储备', chineseExplanation: '可作多种词性使用，核心意思包括“预订；保留；储备”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep something for future use or arrange to have it available.',
    examples: [{ english: 'You should reserve a seat early during the holiday season.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reserve” dalam konteks Bahasa Inggeris British.', chinese: '假日期间你应该提前预订座位。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'resolve', term: 'resolve', normalizedTerm: 'resolve', partOfSpeech: ['verb'], ipa: '/rizˈɑlv/',
    chineseShort: '解决；下定决心', chineseExplanation: '表示“解决；下定决心”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To find a solution to a problem or disagreement.',
    examples: [{ english: 'The two sides met again to resolve the dispute.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resolve” dalam konteks Bahasa Inggeris British.', chinese: '双方再次会面以解决争议。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'respond', term: 'respond', normalizedTerm: 'respond', partOfSpeech: ['verb'], ipa: '/rɪspˈɑnd/',
    chineseShort: '回应；作出反应', chineseExplanation: '表示“回应；作出反应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To answer or react to something.',
    examples: [{ english: 'The company responded quickly to customer complaints.', malay: 'Ayat ini menunjukkan penggunaan perkataan “respond” dalam konteks Bahasa Inggeris British.', chinese: '公司迅速回应了顾客投诉。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'restrict', term: 'restrict', normalizedTerm: 'restrict', partOfSpeech: ['verb'], ipa: '/ristrˈɪkt/',
    chineseShort: '限制；约束', chineseExplanation: '表示“限制；约束”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To limit what someone can do or how much something can happen.',
    examples: [{ english: 'The rules restrict access to confidential information.', malay: 'Ayat ini menunjukkan penggunaan perkataan “restrict” dalam konteks Bahasa Inggeris British.', chinese: '规定限制了对机密信息的访问。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'retain', term: 'retain', normalizedTerm: 'retain', partOfSpeech: ['verb'], ipa: '/rɪtˈeɪn/',
    chineseShort: '保留；保持', chineseExplanation: '表示“保留；保持”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep something or continue to have it.',
    examples: [{ english: 'The company introduced new benefits to retain experienced staff.', malay: 'Ayat ini menunjukkan penggunaan perkataan “retain” dalam konteks Bahasa Inggeris British.', chinese: '公司推出新福利以留住有经验的员工。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'reveal', term: 'reveal', normalizedTerm: 'reveal', partOfSpeech: ['verb'], ipa: '/rɪvˈil/',
    chineseShort: '揭示；透露', chineseExplanation: '表示“揭示；透露”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make previously unknown information known.',
    examples: [{ english: 'The survey revealed a clear difference between age groups.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reveal” dalam konteks Bahasa Inggeris British.', chinese: '调查显示不同年龄组之间存在明显差异。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'risk', term: 'risk', normalizedTerm: 'risk', partOfSpeech: ['noun', 'verb'], ipa: '/rˈɪsk/',
    chineseShort: '风险；冒险', chineseExplanation: '可作多种词性使用，核心意思包括“风险；冒险”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The possibility that something harmful or unwanted may happen, or to expose something to danger.',
    examples: [{ english: 'The company reviewed the risks before entering the new market.', malay: 'Ayat ini menunjukkan penggunaan perkataan “risk” dalam konteks Bahasa Inggeris British.', chinese: '公司在进入新市场前评估了相关风险。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'role', term: 'role', normalizedTerm: 'role', partOfSpeech: ['noun'], ipa: '/rˈoʊl/',
    chineseShort: '角色；作用', chineseExplanation: '指与“角色；作用”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The position, purpose, or function that someone or something has in a situation.',
    examples: [{ english: 'Technology plays an important role in modern education.', malay: 'Ayat ini menunjukkan penggunaan perkataan “role” dalam konteks Bahasa Inggeris British.', chinese: '科技在现代教育中发挥着重要作用。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'sector', term: 'sector', normalizedTerm: 'sector', partOfSpeech: ['noun'], ipa: '/sˈɛktɚ/',
    chineseShort: '行业；部门', chineseExplanation: '指与“行业；部门”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular part of the economy, society, or an area of activity.',
    examples: [{ english: 'Employment in the technology sector has grown rapidly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sector” dalam konteks Bahasa Inggeris British.', chinese: '科技行业的就业人数迅速增长。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'secure', term: 'secure', normalizedTerm: 'secure', partOfSpeech: ['adjective', 'verb'], ipa: '/sɪkjˈʊr/',
    chineseShort: '安全的；获得；保护', chineseExplanation: '可作多种词性使用，核心意思包括“安全的；获得；保护”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Safe from danger, or to obtain or protect something successfully.',
    examples: [{ english: 'The company secured funding for the next stage of the project.', malay: 'Ayat ini menunjukkan penggunaan perkataan “secure” dalam konteks Bahasa Inggeris British.', chinese: '公司为项目下一阶段获得了资金。' }], level: 3, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'seek', term: 'seek', normalizedTerm: 'seek', partOfSpeech: ['verb'], ipa: '/sˈik/',
    chineseShort: '寻求；寻找', chineseExplanation: '表示“寻求；寻找”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To try to find, obtain, or achieve something.',
    examples: [{ english: 'Many graduates seek work experience before applying for permanent jobs.', malay: 'Ayat ini menunjukkan penggunaan perkataan “seek” dalam konteks Bahasa Inggeris British.', chinese: '许多毕业生在申请正式工作前会寻求工作经验。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'select', term: 'select', normalizedTerm: 'select', partOfSpeech: ['verb', 'adjective'], ipa: '/səlˈɛkt/',
    chineseShort: '选择；精选的', chineseExplanation: '可作多种词性使用，核心意思包括“选择；精选的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To choose someone or something carefully from a group.',
    examples: [{ english: 'Participants were selected according to their previous experience.', malay: 'Ayat ini menunjukkan penggunaan perkataan “select” dalam konteks Bahasa Inggeris British.', chinese: '参与者根据以往经验被选出。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'sensitive', term: 'sensitive', normalizedTerm: 'sensitive', partOfSpeech: ['adjective'], ipa: '/sˈɛnsətɪv/',
    chineseShort: '敏感的；需谨慎处理的', chineseExplanation: '形容某人、事物或情况具有“敏感的；需谨慎处理的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Easily affected, requiring careful treatment, or involving private information.',
    examples: [{ english: 'Personal health records contain sensitive information.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sensitive” dalam konteks Bahasa Inggeris British.', chinese: '个人健康记录包含敏感信息。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'separate', term: 'separate', normalizedTerm: 'separate', partOfSpeech: ['adjective', 'verb'], ipa: '/sˈɛpɚˌeɪt/',
    chineseShort: '分开的；使分离', chineseExplanation: '可作多种词性使用，核心意思包括“分开的；使分离”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Not joined together, or to divide things into different parts.',
    examples: [{ english: 'The survey results were separated into three age groups.', malay: 'Ayat ini menunjukkan penggunaan perkataan “separate” dalam konteks Bahasa Inggeris British.', chinese: '调查结果被分成三个年龄组。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'sequence', term: 'sequence', normalizedTerm: 'sequence', partOfSpeech: ['noun'], ipa: '/sˈikwəns/',
    chineseShort: '顺序；一连串', chineseExplanation: '指与“顺序；一连串”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A set of related events or actions that follow one another in a particular order.',
    examples: [{ english: 'The instructions explain the correct sequence of steps.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sequence” dalam konteks Bahasa Inggeris British.', chinese: '说明书解释了正确的操作顺序。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'shift', term: 'shift', normalizedTerm: 'shift', partOfSpeech: ['noun', 'verb'], ipa: '/ʃˈɪft/',
    chineseShort: '转变；轮班；转移', chineseExplanation: '可作多种词性使用，核心意思包括“转变；轮班；转移”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A change in position, direction, opinion, or activity.',
    examples: [{ english: 'There has been a clear shift towards online shopping.', malay: 'Ayat ini menunjukkan penggunaan perkataan “shift” dalam konteks Bahasa Inggeris British.', chinese: '人们明显转向了网上购物。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'similar', term: 'similar', normalizedTerm: 'similar', partOfSpeech: ['adjective'], ipa: '/sˈɪməlɚ/',
    chineseShort: '相似的', chineseExplanation: '形容某人、事物或情况具有“相似的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Almost the same but not exactly identical.',
    examples: [{ english: 'The two studies produced similar results.', malay: 'Ayat ini menunjukkan penggunaan perkataan “similar” dalam konteks Bahasa Inggeris British.', chinese: '两项研究得出了相似的结果。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'solution', term: 'solution', normalizedTerm: 'solution', partOfSpeech: ['noun'], ipa: '/səlˈuʃən/',
    chineseShort: '解决方案；答案', chineseExplanation: '指与“解决方案；答案”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A way of solving a problem or dealing with a difficult situation.',
    examples: [{ english: 'The team proposed a simple solution to reduce waiting time.', malay: 'Ayat ini menunjukkan penggunaan perkataan “solution” dalam konteks Bahasa Inggeris British.', chinese: '团队提出了一个减少等候时间的简单方案。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'specific', term: 'specific', normalizedTerm: 'specific', partOfSpeech: ['adjective'], ipa: '/spəsˈɪfɪk/',
    chineseShort: '具体的；特定的', chineseExplanation: '形容某人、事物或情况具有“具体的；特定的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Clearly defined or relating to one particular thing.',
    examples: [{ english: 'The report makes several specific recommendations for schools.', malay: 'Ayat ini menunjukkan penggunaan perkataan “specific” dalam konteks Bahasa Inggeris British.', chinese: '报告针对学校提出了几项具体建议。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'stable', term: 'stable', normalizedTerm: 'stable', partOfSpeech: ['adjective'], ipa: '/stˈeɪbəl/',
    chineseShort: '稳定的；稳固的', chineseExplanation: '形容某人、事物或情况具有“稳定的；稳固的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Not likely to change suddenly or fail.',
    examples: [{ english: 'The economy remained relatively stable during the period.', malay: 'Ayat ini menunjukkan penggunaan perkataan “stable” dalam konteks Bahasa Inggeris British.', chinese: '这一时期经济保持相对稳定。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'standard', term: 'standard', normalizedTerm: 'standard', partOfSpeech: ['noun', 'adjective'], ipa: '/stˈændɚd/',
    chineseShort: '标准；标准的', chineseExplanation: '可作多种词性使用，核心意思包括“标准；标准的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A level of quality or a rule used for comparison or judgement.',
    examples: [{ english: 'All products must meet the required safety standards.', malay: 'Ayat ini menunjukkan penggunaan perkataan “standard” dalam konteks Bahasa Inggeris British.', chinese: '所有产品都必须达到规定的安全标准。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'strategy', term: 'strategy', normalizedTerm: 'strategy', partOfSpeech: ['noun'], ipa: '/strˈætədʒi/',
    chineseShort: '策略；战略', chineseExplanation: '指与“策略；战略”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A detailed plan designed to achieve a long-term goal.',
    examples: [{ english: 'The company needs a clear strategy for international growth.', malay: 'Ayat ini menunjukkan penggunaan perkataan “strategy” dalam konteks Bahasa Inggeris British.', chinese: '公司需要明确的国际增长战略。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'strengthen', term: 'strengthen', normalizedTerm: 'strengthen', partOfSpeech: ['verb'], ipa: '/strˈɛŋθən/',
    chineseShort: '加强；增强', chineseExplanation: '表示“加强；增强”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To make something stronger or more effective.',
    examples: [{ english: 'The new policy is intended to strengthen consumer protection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “strengthen” dalam konteks Bahasa Inggeris British.', chinese: '新政策旨在加强消费者保护。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'structure', term: 'structure', normalizedTerm: 'structure', partOfSpeech: ['noun', 'verb'], ipa: '/strˈʌktʃɚ/',
    chineseShort: '结构；组织', chineseExplanation: '可作多种词性使用，核心意思包括“结构；组织”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The way parts are arranged to form a whole, or to organise something in a particular way.',
    examples: [{ english: 'A clear structure makes an essay easier to follow.', malay: 'Ayat ini menunjukkan penggunaan perkataan “structure” dalam konteks Bahasa Inggeris British.', chinese: '清晰的结构让文章更容易理解。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'submit', term: 'submit', normalizedTerm: 'submit', partOfSpeech: ['verb'], ipa: '/səbmˈɪt/',
    chineseShort: '提交；呈交', chineseExplanation: '表示“提交；呈交”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To formally give a document, request, or piece of work for consideration.',
    examples: [{ english: 'Students must submit their assignments by Friday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “submit” dalam konteks Bahasa Inggeris British.', chinese: '学生必须在星期五前提交作业。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'subsequent', term: 'subsequent', normalizedTerm: 'subsequent', partOfSpeech: ['adjective'], ipa: '/sˈʌbsəkwənt/',
    chineseShort: '随后的；后来的', chineseExplanation: '形容某人、事物或情况具有“随后的；后来的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Happening after something else.',
    examples: [{ english: 'Subsequent tests confirmed the original result.', malay: 'Ayat ini menunjukkan penggunaan perkataan “subsequent” dalam konteks Bahasa Inggeris British.', chinese: '后续测试证实了最初的结果。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'sufficient', term: 'sufficient', normalizedTerm: 'sufficient', partOfSpeech: ['adjective'], ipa: '/səfˈɪʃənt/',
    chineseShort: '足够的；充分的', chineseExplanation: '形容某人、事物或情况具有“足够的；充分的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Enough for a particular purpose or need.',
    examples: [{ english: 'There was not sufficient evidence to support the claim.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sufficient” dalam konteks Bahasa Inggeris British.', chinese: '没有足够证据支持这一说法。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'summarize', term: 'summarise', normalizedTerm: 'summarise', partOfSpeech: ['verb'], ipa: '/sˈʌmɚˌaɪz/',
    chineseShort: '总结；概括', chineseExplanation: '表示“总结；概括”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To give the main points of something in a short and clear form.',
    examples: [{ english: 'Please summarise the main findings in one paragraph.', malay: 'Ayat ini menunjukkan penggunaan perkataan “summarise” dalam konteks Bahasa Inggeris British.', chinese: '请用一个段落概括主要发现。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'supply', term: 'supply', normalizedTerm: 'supply', partOfSpeech: ['noun', 'verb'], ipa: '/səplˈaɪ/',
    chineseShort: '供应；提供', chineseExplanation: '可作多种词性使用，核心意思包括“供应；提供”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An amount available for use, or to provide something that is needed.',
    examples: [{ english: 'The storm interrupted the local water supply.', malay: 'Ayat ini menunjukkan penggunaan perkataan “supply” dalam konteks Bahasa Inggeris British.', chinese: '暴风雨中断了当地供水。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'support', term: 'support', normalizedTerm: 'support', partOfSpeech: ['noun', 'verb'], ipa: '/səpˈɔrt/',
    chineseShort: '支持；支援', chineseExplanation: '可作多种词性使用，核心意思包括“支持；支援”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Help, approval, or evidence that makes something stronger, or to provide such help.',
    examples: [{ english: 'The proposal received strong support from local residents.', malay: 'Ayat ini menunjukkan penggunaan perkataan “support” dalam konteks Bahasa Inggeris British.', chinese: '这项提案得到了当地居民的大力支持。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'survive', term: 'survive', normalizedTerm: 'survive', partOfSpeech: ['verb'], ipa: '/sɚvˈaɪv/',
    chineseShort: '生存；幸存', chineseExplanation: '表示“生存；幸存”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To continue to live, exist, or operate despite difficulty.',
    examples: [{ english: 'Small businesses need enough cash to survive a long downturn.', malay: 'Ayat ini menunjukkan penggunaan perkataan “survive” dalam konteks Bahasa Inggeris British.', chinese: '小企业需要足够现金才能熬过长期低迷。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'sustain', term: 'sustain', normalizedTerm: 'sustain', partOfSpeech: ['verb'], ipa: '/səstˈeɪn/',
    chineseShort: '维持；支撑', chineseExplanation: '表示“维持；支撑”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To keep something continuing over a period of time.',
    examples: [{ english: 'The company must increase sales to sustain its growth.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sustain” dalam konteks Bahasa Inggeris British.', chinese: '公司必须增加销售额才能维持增长。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'technical', term: 'technical', normalizedTerm: 'technical', partOfSpeech: ['adjective'], ipa: '/tˈɛknɪkəl/',
    chineseShort: '技术的；专业技术性的', chineseExplanation: '形容某人、事物或情况具有“技术的；专业技术性的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to practical skills, specialised knowledge, machines, or technology.',
    examples: [{ english: 'The support team solved the technical problem within an hour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “technical” dalam konteks Bahasa Inggeris British.', chinese: '技术支持团队在一小时内解决了技术问题。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'temporary', term: 'temporary', normalizedTerm: 'temporary', partOfSpeech: ['adjective'], ipa: '/tˈɛmpɚˌɛri/',
    chineseShort: '临时的；暂时的', chineseExplanation: '形容某人、事物或情况具有“临时的；暂时的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing or lasting for only a limited period of time.',
    examples: [{ english: 'The road closure is temporary and should end next week.', malay: 'Ayat ini menunjukkan penggunaan perkataan “temporary” dalam konteks Bahasa Inggeris British.', chinese: '道路封闭只是暂时的，预计下周结束。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'tendency', term: 'tendency', normalizedTerm: 'tendency', partOfSpeech: ['noun'], ipa: '/tˈɛndənsi/',
    chineseShort: '倾向；趋势', chineseExplanation: '指与“倾向；趋势”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A general direction in which someone behaves or something develops.',
    examples: [{ english: 'There is a tendency for prices to rise during the holiday season.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tendency” dalam konteks Bahasa Inggeris British.', chinese: '假日期间价格往往会上涨。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'theory', term: 'theory', normalizedTerm: 'theory', partOfSpeech: ['noun'], ipa: '/θˈɪri/',
    chineseShort: '理论；学说', chineseExplanation: '指与“理论；学说”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A set of ideas used to explain facts, events, or behaviour.',
    examples: [{ english: 'The experiment was designed to test the theory.', malay: 'Ayat ini menunjukkan penggunaan perkataan “theory” dalam konteks Bahasa Inggeris British.', chinese: '这个实验是为了检验该理论而设计的。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'threat', term: 'threat', normalizedTerm: 'threat', partOfSpeech: ['noun'], ipa: '/θrˈɛt/',
    chineseShort: '威胁；危险', chineseExplanation: '指与“威胁；危险”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something that is likely to cause harm, damage, or difficulty.',
    examples: [{ english: 'Cybercrime is a growing threat to small businesses.', malay: 'Ayat ini menunjukkan penggunaan perkataan “threat” dalam konteks Bahasa Inggeris British.', chinese: '网络犯罪对小企业构成日益严重的威胁。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'transfer', term: 'transfer', normalizedTerm: 'transfer', partOfSpeech: ['noun', 'verb'], ipa: '/trænsfˈɝ/',
    chineseShort: '转移；转账；调动', chineseExplanation: '可作多种词性使用，核心意思包括“转移；转账；调动”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To move someone or something from one place, person, or system to another.',
    examples: [{ english: 'The files were transferred to a secure server.', malay: 'Ayat ini menunjukkan penggunaan perkataan “transfer” dalam konteks Bahasa Inggeris British.', chinese: '这些文件被转移到一个安全服务器上。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'transform', term: 'transform', normalizedTerm: 'transform', partOfSpeech: ['verb'], ipa: '/trænsfˈɔrm/',
    chineseShort: '彻底改变；转变', chineseExplanation: '表示“彻底改变；转变”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something greatly in form, appearance, or character.',
    examples: [{ english: 'Digital technology has transformed the way people communicate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “transform” dalam konteks Bahasa Inggeris British.', chinese: '数字技术彻底改变了人们沟通的方式。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'trend', term: 'trend', normalizedTerm: 'trend', partOfSpeech: ['noun'], ipa: '/trˈɛnd/',
    chineseShort: '趋势；动向', chineseExplanation: '指与“趋势；动向”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A general direction in which a situation is changing or developing.',
    examples: [{ english: 'The report identifies a growing trend towards flexible work.', malay: 'Ayat ini menunjukkan penggunaan perkataan “trend” dalam konteks Bahasa Inggeris British.', chinese: '报告指出弹性工作正成为一种不断增长的趋势。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'typical', term: 'typical', normalizedTerm: 'typical', partOfSpeech: ['adjective'], ipa: '/tˈɪpəkəl/',
    chineseShort: '典型的；通常的', chineseExplanation: '形容某人、事物或情况具有“典型的；通常的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Having the usual qualities or characteristics of a particular type.',
    examples: [{ english: 'This is a typical example of a small family business.', malay: 'Ayat ini menunjukkan penggunaan perkataan “typical” dalam konteks Bahasa Inggeris British.', chinese: '这是一个典型的小型家族企业例子。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'undergo', term: 'undergo', normalizedTerm: 'undergo', partOfSpeech: ['verb'], ipa: '/ˌʌndɚɡˈoʊ/',
    chineseShort: '经历；接受', chineseExplanation: '表示“经历；接受”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To experience a process, change, or treatment.',
    examples: [{ english: 'The building will undergo major repairs next month.', malay: 'Ayat ini menunjukkan penggunaan perkataan “undergo” dalam konteks Bahasa Inggeris British.', chinese: '这栋建筑下个月将进行大修。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'unique', term: 'unique', normalizedTerm: 'unique', partOfSpeech: ['adjective'], ipa: '/junˈik/',
    chineseShort: '独特的；唯一的', chineseExplanation: '形容某人、事物或情况具有“独特的；唯一的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Different from everything else of its type or the only one of its kind.',
    examples: [{ english: 'The region has a unique combination of cultures and languages.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unique” dalam konteks Bahasa Inggeris British.', chinese: '这个地区拥有独特的文化与语言组合。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'valid', term: 'valid', normalizedTerm: 'valid', partOfSpeech: ['adjective'], ipa: '/vˈælɪd/',
    chineseShort: '有效的；合理的', chineseExplanation: '形容某人、事物或情况具有“有效的；合理的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Legally or officially acceptable, or based on good reasons and evidence.',
    examples: [{ english: 'The ticket is valid for travel on any bus today.', malay: 'Ayat ini menunjukkan penggunaan perkataan “valid” dalam konteks Bahasa Inggeris British.', chinese: '这张票今天乘坐任何巴士都有效。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'vary', term: 'vary', normalizedTerm: 'vary', partOfSpeech: ['verb'], ipa: '/vˈɛri/',
    chineseShort: '变化；有所不同', chineseExplanation: '表示“变化；有所不同”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To be different in different situations or change over time.',
    examples: [{ english: 'Prices vary depending on the season and location.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vary” dalam konteks Bahasa Inggeris British.', chinese: '价格会因季节和地点而有所不同。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'version', term: 'version', normalizedTerm: 'version', partOfSpeech: ['noun'], ipa: '/vˈɝʒən/',
    chineseShort: '版本；说法', chineseExplanation: '指与“版本；说法”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A particular form of something that differs from other forms of the same thing.',
    examples: [{ english: 'The latest version of the app includes several new features.', malay: 'Ayat ini menunjukkan penggunaan perkataan “version” dalam konteks Bahasa Inggeris British.', chinese: '该应用的最新版本包含多项新功能。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'visible', term: 'visible', normalizedTerm: 'visible', partOfSpeech: ['adjective'], ipa: '/vˈɪzəbəl/',
    chineseShort: '可见的；明显的', chineseExplanation: '形容某人、事物或情况具有“可见的；明显的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Able to be seen or easy to notice.',
    examples: [{ english: 'There was a visible improvement in the quality of the final report.', malay: 'Ayat ini menunjukkan penggunaan perkataan “visible” dalam konteks Bahasa Inggeris British.', chinese: '最终报告的质量有明显改善。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'welfare', term: 'welfare', normalizedTerm: 'welfare', partOfSpeech: ['noun'], ipa: '/wˈɛlfˌɛr/',
    chineseShort: '福利；福祉', chineseExplanation: '指与“福利；福祉”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The health, happiness, safety, and general well-being of a person or group.',
    examples: [{ english: 'The policy is intended to protect the welfare of children.', malay: 'Ayat ini menunjukkan penggunaan perkataan “welfare” dalam konteks Bahasa Inggeris British.', chinese: '这项政策旨在保护儿童福祉。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'widespread', term: 'widespread', normalizedTerm: 'widespread', partOfSpeech: ['adjective'], ipa: '/wˈaɪdsprˈɛd/',
    chineseShort: '广泛的；普遍的', chineseExplanation: '形容某人、事物或情况具有“广泛的；普遍的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Existing or happening over a large area or among many people.',
    examples: [{ english: 'The new payment method has gained widespread acceptance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “widespread” dalam konteks Bahasa Inggeris British.', chinese: '这种新支付方式已获得广泛接受。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'withdraw', term: 'withdraw', normalizedTerm: 'withdraw', partOfSpeech: ['verb'], ipa: '/wɪðdrˈɔ/',
    chineseShort: '撤回；退出；取款', chineseExplanation: '表示“撤回；退出；取款”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To remove something, stop taking part, or take money from an account.',
    examples: [{ english: 'The company decided to withdraw the product from the market.', malay: 'Ayat ini menunjukkan penggunaan perkataan “withdraw” dalam konteks Bahasa Inggeris British.', chinese: '公司决定将该产品撤出市场。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'accommodate', term: 'accommodate', normalizedTerm: 'accommodate', partOfSpeech: ['verb'], ipa: '/əkˈɑmədˌeɪt/',
    chineseShort: '容纳；满足；适应', chineseExplanation: '表示“容纳；满足；适应”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To provide enough space for someone or something, or adjust to meet a need.',
    examples: [{ english: 'The new hall can accommodate more than five hundred people.', malay: 'Ayat ini menunjukkan penggunaan perkataan “accommodate” dalam konteks Bahasa Inggeris British.', chinese: '新的礼堂可以容纳五百多人。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'accumulate', term: 'accumulate', normalizedTerm: 'accumulate', partOfSpeech: ['verb'], ipa: '/əkjˈumjəlˌeɪt/',
    chineseShort: '积累；积聚', chineseExplanation: '表示“积累；积聚”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To gradually collect or increase over a period of time.',
    examples: [{ english: 'Small errors can accumulate and create a serious problem.', malay: 'Ayat ini menunjukkan penggunaan perkataan “accumulate” dalam konteks Bahasa Inggeris British.', chinese: '小错误会逐渐累积并造成严重问题。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'address', term: 'address', normalizedTerm: 'address', partOfSpeech: ['verb', 'noun'], ipa: '/ˈædrˌɛs/',
    chineseShort: '处理；解决；地址', chineseExplanation: '可作多种词性使用，核心意思包括“处理；解决；地址”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To deal with a problem or issue, or the details of where someone lives or works.',
    examples: [{ english: 'The new policy aims to address the shortage of skilled workers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “address” dalam konteks Bahasa Inggeris British.', chinese: '新政策旨在解决技术工人短缺的问题。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'admission', term: 'admission', normalizedTerm: 'admission', partOfSpeech: ['noun'], ipa: '/ædmˈɪʃən/',
    chineseShort: '准许进入；承认；入场费', chineseExplanation: '指与“准许进入；承认；入场费”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Permission to enter a place or institution, or an act of admitting something is true.',
    examples: [{ english: 'Admission to the programme depends on academic performance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “admission” dalam konteks Bahasa Inggeris British.', chinese: '能否进入该课程取决于学业表现。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'aggressive', term: 'aggressive', normalizedTerm: 'aggressive', partOfSpeech: ['adjective'], ipa: '/əɡrˈɛsɪv/',
    chineseShort: '咄咄逼人的；激进的', chineseExplanation: '形容某人、事物或情况具有“咄咄逼人的；激进的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Behaving in a forceful or hostile way, or acting very strongly to achieve a goal.',
    examples: [{ english: 'The company adopted an aggressive strategy to increase market share.', malay: 'Ayat ini menunjukkan penggunaan perkataan “aggressive” dalam konteks Bahasa Inggeris British.', chinese: '公司采取了激进策略来扩大市场份额。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'agriculture', term: 'agriculture', normalizedTerm: 'agriculture', partOfSpeech: ['noun'], ipa: '/ˈæɡrɪkˌʌltʃɚ/',
    chineseShort: '农业', chineseExplanation: '指与“农业”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The work and industry of growing crops and raising animals for food or other products.',
    examples: [{ english: 'Modern agriculture increasingly relies on technology to improve efficiency.', malay: 'Ayat ini menunjukkan penggunaan perkataan “agriculture” dalam konteks Bahasa Inggeris British.', chinese: '现代农业越来越依赖科技来提高效率。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'applicant', term: 'applicant', normalizedTerm: 'applicant', partOfSpeech: ['noun'], ipa: '/ˈæplɪkənt/',
    chineseShort: '申请人；应聘者', chineseExplanation: '指与“申请人；应聘者”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A person who formally applies for a job, course, or other opportunity.',
    examples: [{ english: 'Each applicant must provide two references.', malay: 'Ayat ini menunjukkan penggunaan perkataan “applicant” dalam konteks Bahasa Inggeris British.', chinese: '每位申请人都必须提供两份推荐证明。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'artificial', term: 'artificial', normalizedTerm: 'artificial', partOfSpeech: ['adjective'], ipa: '/ˌɑrtəfˈɪʃəl/',
    chineseShort: '人造的；人工的', chineseExplanation: '形容某人、事物或情况具有“人造的；人工的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Made by people rather than occurring naturally.',
    examples: [{ english: 'Artificial lighting can affect how products appear in photographs.', malay: 'Ayat ini menunjukkan penggunaan perkataan “artificial” dalam konteks Bahasa Inggeris British.', chinese: '人工照明会影响产品在照片中的呈现效果。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'aspect', term: 'aspect', normalizedTerm: 'aspect', partOfSpeech: ['noun'], ipa: '/ˈæspˌɛkt/',
    chineseShort: '方面；层面', chineseExplanation: '指与“方面；层面”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'One particular part or feature of a situation, subject, or problem.',
    examples: [{ english: 'Cost is only one aspect of the decision.', malay: 'Ayat ini menunjukkan penggunaan perkataan “aspect” dalam konteks Bahasa Inggeris British.', chinese: '成本只是这个决定的一个方面。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'asset', term: 'asset', normalizedTerm: 'asset', partOfSpeech: ['noun'], ipa: '/ˈæsˌɛt/',
    chineseShort: '资产；有价值的人或事物', chineseExplanation: '指与“资产；有价值的人或事物”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something valuable that a person or organisation owns or benefits from.',
    examples: [{ english: 'Strong communication skills are a valuable asset in most careers.', malay: 'Ayat ini menunjukkan penggunaan perkataan “asset” dalam konteks Bahasa Inggeris British.', chinese: '良好的沟通能力在大多数职业中都是宝贵的优势。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'assure', term: 'assure', normalizedTerm: 'assure', partOfSpeech: ['verb'], ipa: '/əʃˈʊr/',
    chineseShort: '向……保证；使确信', chineseExplanation: '表示“向……保证；使确信”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To tell someone confidently that something is true or will happen.',
    examples: [{ english: 'The manager assured staff that no jobs would be lost.', malay: 'Ayat ini menunjukkan penggunaan perkataan “assure” dalam konteks Bahasa Inggeris British.', chinese: '经理向员工保证不会裁员。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'astonishing', term: 'astonishing', normalizedTerm: 'astonishing', partOfSpeech: ['adjective'], ipa: '/əstˈɑnɪʃɪŋ/',
    chineseShort: '令人惊讶的；惊人的', chineseExplanation: '形容某人、事物或情况具有“令人惊讶的；惊人的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Extremely surprising or impressive.',
    examples: [{ english: 'The project achieved an astonishing improvement in response time.', malay: 'Ayat ini menunjukkan penggunaan perkataan “astonishing” dalam konteks Bahasa Inggeris British.', chinese: '该项目在响应时间方面取得了惊人的改善。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'attachment', term: 'attachment', normalizedTerm: 'attachment', partOfSpeech: ['noun'], ipa: '/ətˈætʃmənt/',
    chineseShort: '附件；依恋', chineseExplanation: '指与“附件；依恋”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A file sent with a message, or a strong feeling of connection to someone or something.',
    examples: [{ english: 'Please check the attachment before sending the email.', malay: 'Ayat ini menunjukkan penggunaan perkataan “attachment” dalam konteks Bahasa Inggeris British.', chinese: '发送电子邮件前请检查附件。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Business'],
  },
  {
    id: 'barely', term: 'barely', normalizedTerm: 'barely', partOfSpeech: ['adverb'], ipa: '/bˈɛrli/',
    chineseShort: '几乎不；勉强', chineseExplanation: '表示以“几乎不；勉强”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Only just, almost not, or by a very small amount.',
    examples: [{ english: 'The company barely made a profit last year.', malay: 'Ayat ini menunjukkan penggunaan perkataan “barely” dalam konteks Bahasa Inggeris British.', chinese: '公司去年几乎没有盈利。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'bargain', term: 'bargain', normalizedTerm: 'bargain', partOfSpeech: ['noun', 'verb'], ipa: '/bˈɑrɡən/',
    chineseShort: '便宜货；讨价还价', chineseExplanation: '可作多种词性使用，核心意思包括“便宜货；讨价还价”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Something bought for less than its usual value, or to discuss a price in order to reduce it.',
    examples: [{ english: 'The laptop was a bargain compared with similar models.', malay: 'Ayat ini menunjukkan penggunaan perkataan “bargain” dalam konteks Bahasa Inggeris British.', chinese: '与类似型号相比，这台笔记本电脑很划算。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'broadcast', term: 'broadcast', normalizedTerm: 'broadcast', partOfSpeech: ['noun', 'verb'], ipa: '/brˈɔdkˌæst/',
    chineseShort: '广播；播送', chineseExplanation: '可作多种词性使用，核心意思包括“广播；播送”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A radio or television programme, or to send programmes or information to many people.',
    examples: [{ english: 'The interview was broadcast live across the country.', malay: 'Ayat ini menunjukkan penggunaan perkataan “broadcast” dalam konteks Bahasa Inggeris British.', chinese: '这次采访在全国进行了现场直播。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Academic'],
  },
  {
    id: 'capture', term: 'capture', normalizedTerm: 'capture', partOfSpeech: ['verb', 'noun'], ipa: '/kˈæptʃɚ/',
    chineseShort: '捕捉；记录；夺取', chineseExplanation: '可作多种词性使用，核心意思包括“捕捉；记录；夺取”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To catch, record, or attract something such as attention, an image, or information.',
    examples: [{ english: 'The photo captures the rapid changes taking place in the city.', malay: 'Ayat ini menunjukkan penggunaan perkataan “capture” dalam konteks Bahasa Inggeris British.', chinese: '这张照片记录了这座城市正在发生的快速变化。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'cease', term: 'cease', normalizedTerm: 'cease', partOfSpeech: ['verb'], ipa: '/sˈis/',
    chineseShort: '停止；终止', chineseExplanation: '表示“停止；终止”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To stop happening or stop doing something.',
    examples: [{ english: 'The factory will cease production at the end of the month.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cease” dalam konteks Bahasa Inggeris British.', chinese: '工厂将在月底停止生产。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'cite', term: 'cite', normalizedTerm: 'cite', partOfSpeech: ['verb'], ipa: '/sˈaɪt/',
    chineseShort: '引用；举例说明', chineseExplanation: '表示“引用；举例说明”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To mention a source, example, or reason as evidence or support.',
    examples: [{ english: 'The essay cites several recent studies to support its argument.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cite” dalam konteks Bahasa Inggeris British.', chinese: '这篇文章引用了几项近期研究来支持其论点。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'clinical', term: 'clinical', normalizedTerm: 'clinical', partOfSpeech: ['adjective'], ipa: '/klˈɪnəkəl/',
    chineseShort: '临床的；客观冷静的', chineseExplanation: '形容某人、事物或情况具有“临床的；客观冷静的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to the examination and treatment of patients, especially in medical settings.',
    examples: [{ english: 'The medicine is still being tested in clinical trials.', malay: 'Ayat ini menunjukkan penggunaan perkataan “clinical” dalam konteks Bahasa Inggeris British.', chinese: '这种药物仍在进行临床试验。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'compensation', term: 'compensation', normalizedTerm: 'compensation', partOfSpeech: ['noun'], ipa: '/kˌɑmpənsˈeɪʃən/',
    chineseShort: '补偿；赔偿；薪酬', chineseExplanation: '指与“补偿；赔偿；薪酬”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Money or another benefit given for work, loss, injury, or inconvenience.',
    examples: [{ english: 'Passengers may receive compensation for long delays.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compensation” dalam konteks Bahasa Inggeris British.', chinese: '长时间延误的乘客可能会获得赔偿。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'concept', term: 'concept', normalizedTerm: 'concept', partOfSpeech: ['noun'], ipa: '/kˈɑnsɛpt/',
    chineseShort: '概念；观念', chineseExplanation: '指与“概念；观念”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'An idea or principle used to understand or explain something.',
    examples: [{ english: 'The course introduces the basic concept of sustainable development.', malay: 'Ayat ini menunjukkan penggunaan perkataan “concept” dalam konteks Bahasa Inggeris British.', chinese: '这门课程介绍可持续发展的基本概念。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'conclude', term: 'conclude', normalizedTerm: 'conclude', partOfSpeech: ['verb'], ipa: '/kənklˈud/',
    chineseShort: '得出结论；结束', chineseExplanation: '表示“得出结论；结束”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To decide something after considering evidence, or to bring something to an end.',
    examples: [{ english: 'Researchers concluded that further testing was necessary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conclude” dalam konteks Bahasa Inggeris British.', chinese: '研究人员得出结论，认为还需要进一步测试。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'concrete', term: 'concrete', normalizedTerm: 'concrete', partOfSpeech: ['adjective', 'noun'], ipa: '/kənkrˈit/',
    chineseShort: '具体的；混凝土', chineseExplanation: '可作多种词性使用，核心意思包括“具体的；混凝土”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Clear and specific rather than general or abstract, or a hard building material.',
    examples: [{ english: 'The report offers concrete suggestions for improving customer service.', malay: 'Ayat ini menunjukkan penggunaan perkataan “concrete” dalam konteks Bahasa Inggeris British.', chinese: '报告提出了改善客户服务的具体建议。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'consumption', term: 'consumption', normalizedTerm: 'consumption', partOfSpeech: ['noun'], ipa: '/kənsˈʌmpʃən/',
    chineseShort: '消费；消耗', chineseExplanation: '指与“消费；消耗”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The use of goods, services, energy, or other resources.',
    examples: [{ english: 'Energy consumption fell after the building was renovated.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consumption” dalam konteks Bahasa Inggeris British.', chinese: '建筑翻新后，能源消耗下降了。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'contract', term: 'contract', normalizedTerm: 'contract', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɑntrˌækt/',
    chineseShort: '合同；签约；收缩', chineseExplanation: '可作多种词性使用，核心意思包括“合同；签约；收缩”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A legal agreement, or to formally agree to provide work or services.',
    examples: [{ english: 'The supplier signed a three-year contract with the company.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contract” dalam konteks Bahasa Inggeris British.', chinese: '供应商与公司签订了为期三年的合同。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'controversy', term: 'controversy', normalizedTerm: 'controversy', partOfSpeech: ['noun'], ipa: '/kˈɑntrəvˌɝsi/',
    chineseShort: '争议；争论', chineseExplanation: '指与“争议；争论”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Strong public disagreement about an issue or decision.',
    examples: [{ english: 'The proposal caused considerable controversy among local residents.', malay: 'Ayat ini menunjukkan penggunaan perkataan “controversy” dalam konteks Bahasa Inggeris British.', chinese: '该提案在当地居民中引发了相当大的争议。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'conventional', term: 'conventional', normalizedTerm: 'conventional', partOfSpeech: ['adjective'], ipa: '/kənvˈɛnʃənəl/',
    chineseShort: '传统的；常规的', chineseExplanation: '形容某人、事物或情况具有“传统的；常规的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Following commonly accepted methods, ideas, or practices.',
    examples: [{ english: 'The new system is faster than conventional methods of processing data.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conventional” dalam konteks Bahasa Inggeris British.', chinese: '新系统比传统的数据处理方法更快。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Technology'],
  },
  {
    id: 'convert', term: 'convert', normalizedTerm: 'convert', partOfSpeech: ['verb'], ipa: '/kˈɑnvɚt/',
    chineseShort: '转换；改造', chineseExplanation: '表示“转换；改造”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To change something into a different form, system, or use.',
    examples: [{ english: 'The tool can convert the file into several different formats.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convert” dalam konteks Bahasa Inggeris British.', chinese: '这个工具可以把文件转换成多种不同格式。' }], level: 3, cefr: 'B2', categories: ['Technology', 'Daily English'],
  },
  {
    id: 'currency', term: 'currency', normalizedTerm: 'currency', partOfSpeech: ['noun'], ipa: '/kˈɝənsi/',
    chineseShort: '货币；通用性', chineseExplanation: '指与“货币；通用性”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The system of money used in a particular country or region.',
    examples: [{ english: 'Travellers should check the local currency before making large payments.', malay: 'Ayat ini menunjukkan penggunaan perkataan “currency” dalam konteks Bahasa Inggeris British.', chinese: '旅行者在进行大额付款前应了解当地货币。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'curriculum', term: 'curriculum', normalizedTerm: 'curriculum', partOfSpeech: ['noun'], ipa: '/kɚˈɪkjələm/',
    chineseShort: '课程体系；课程设置', chineseExplanation: '指与“课程体系；课程设置”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The subjects and content taught in a school, college, or educational programme.',
    examples: [{ english: 'Digital literacy has become part of the school curriculum.', malay: 'Ayat ini menunjukkan penggunaan perkataan “curriculum” dalam konteks Bahasa Inggeris British.', chinese: '数字素养已经成为学校课程的一部分。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'deadline', term: 'deadline', normalizedTerm: 'deadline', partOfSpeech: ['noun'], ipa: '/dˈɛdlˌaɪn/',
    chineseShort: '截止日期', chineseExplanation: '指与“截止日期”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'The latest time or date by which something must be completed.',
    examples: [{ english: 'The team worked late to meet the project deadline.', malay: 'Ayat ini menunjukkan penggunaan perkataan “deadline” dalam konteks Bahasa Inggeris British.', chinese: '团队加班以赶上项目截止日期。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'deliberate', term: 'deliberate', normalizedTerm: 'deliberate', partOfSpeech: ['adjective', 'verb'], ipa: '/dɪlˈɪbɚət/',
    chineseShort: '故意的；深思熟虑的', chineseExplanation: '可作多种词性使用，核心意思包括“故意的；深思熟虑的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Done intentionally and carefully, or to think and discuss before making a decision.',
    examples: [{ english: 'The change was a deliberate attempt to simplify the process.', malay: 'Ayat ini menunjukkan penggunaan perkataan “deliberate” dalam konteks Bahasa Inggeris British.', chinese: '这一变化是为了简化流程而作出的有意尝试。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'derive', term: 'derive', normalizedTerm: 'derive', partOfSpeech: ['verb'], ipa: '/dɚˈaɪv/',
    chineseShort: '获得；源自', chineseExplanation: '表示“获得；源自”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To get something from a source or to originate from something.',
    examples: [{ english: 'Many English words derive from Latin or Greek.', malay: 'Ayat ini menunjukkan penggunaan perkataan “derive” dalam konteks Bahasa Inggeris British.', chinese: '许多英语单词源自拉丁语或希腊语。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'discipline', term: 'discipline', normalizedTerm: 'discipline', partOfSpeech: ['noun', 'verb'], ipa: '/dˈɪsəplən/',
    chineseShort: '学科；纪律；自律', chineseExplanation: '可作多种词性使用，核心意思包括“学科；纪律；自律”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A field of study, controlled behaviour, or training that develops self-control.',
    examples: [{ english: 'Regular study requires discipline and good time management.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discipline” dalam konteks Bahasa Inggeris British.', chinese: '规律学习需要自律和良好的时间管理。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'discount', term: 'discount', normalizedTerm: 'discount', partOfSpeech: ['noun', 'verb'], ipa: '/dɪskˈaʊnt/',
    chineseShort: '折扣；打折', chineseExplanation: '可作多种词性使用，核心意思包括“折扣；打折”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A reduction in the usual price, or to reduce the price of something.',
    examples: [{ english: 'Students can receive a discount on public transport.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discount” dalam konteks Bahasa Inggeris British.', chinese: '学生乘坐公共交通可以享受折扣。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'dominant', term: 'dominant', normalizedTerm: 'dominant', partOfSpeech: ['adjective'], ipa: '/dˈɑmənənt/',
    chineseShort: '占主导的；支配的', chineseExplanation: '形容某人、事物或情况具有“占主导的；支配的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'More important, powerful, or noticeable than other things of the same type.',
    examples: [{ english: 'Online shopping has become a dominant part of the retail market.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dominant” dalam konteks Bahasa Inggeris British.', chinese: '网上购物已成为零售市场的重要组成部分。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'emotional', term: 'emotional', normalizedTerm: 'emotional', partOfSpeech: ['adjective'], ipa: '/ɪmˈoʊʃənəl/',
    chineseShort: '情绪的；感情强烈的', chineseExplanation: '形容某人、事物或情况具有“情绪的；感情强烈的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to feelings or causing strong feelings.',
    examples: [{ english: 'Major life changes can have a strong emotional effect on people.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emotional” dalam konteks Bahasa Inggeris British.', chinese: '重大生活变化会对人产生强烈的情绪影响。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Academic'],
  },
  {
    id: 'estate', term: 'estate', normalizedTerm: 'estate', partOfSpeech: ['noun'], ipa: '/ɪstˈeɪt/',
    chineseShort: '地产；财产', chineseExplanation: '指与“地产；财产”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A large area of land or property, or all the property owned by someone.',
    examples: [{ english: 'Housing prices have risen across the new residential estate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “estate” dalam konteks Bahasa Inggeris British.', chinese: '新住宅区的房价普遍上涨。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'facility', term: 'facility', normalizedTerm: 'facility', partOfSpeech: ['noun'], ipa: '/fəsˈɪlɪti/',
    chineseShort: '设施；场所', chineseExplanation: '指与“设施；场所”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A building, place, or piece of equipment provided for a particular purpose.',
    examples: [{ english: 'The sports facility is open to students and local residents.', malay: 'Ayat ini menunjukkan penggunaan perkataan “facility” dalam konteks Bahasa Inggeris British.', chinese: '这项体育设施向学生和当地居民开放。' }], level: 3, cefr: 'B2', categories: ['Daily English', 'Business'],
  },
  {
    id: 'federal', term: 'federal', normalizedTerm: 'federal', partOfSpeech: ['adjective'], ipa: '/fˈɛdɚəl/',
    chineseShort: '联邦的', chineseExplanation: '形容某人、事物或情况具有“联邦的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to a system in which power is shared between a central government and regional governments.',
    examples: [{ english: 'Federal law applies across the entire country.', malay: 'Ayat ini menunjukkan penggunaan perkataan “federal” dalam konteks Bahasa Inggeris British.', chinese: '联邦法律适用于全国。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'former', term: 'former', normalizedTerm: 'former', partOfSpeech: ['adjective', 'noun'], ipa: '/fˈɔrmɚ/',
    chineseShort: '以前的；前任的', chineseExplanation: '可作多种词性使用，核心意思包括“以前的；前任的”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Having had a particular position or condition in the past.',
    examples: [{ english: 'The former manager returned to advise the new leadership team.', malay: 'Ayat ini menunjukkan penggunaan perkataan “former” dalam konteks Bahasa Inggeris British.', chinese: '前任经理回来为新的领导团队提供建议。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'furthermore', term: 'furthermore', normalizedTerm: 'furthermore', partOfSpeech: ['adverb'], ipa: '/fˈɝðɚmˌɔr/',
    chineseShort: '此外；而且', chineseExplanation: '表示以“此外；而且”的方式发生或进行，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Used to add another point that supports or develops an argument.',
    examples: [{ english: 'The plan is affordable; furthermore, it can be implemented quickly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “furthermore” dalam konteks Bahasa Inggeris British.', chinese: '这个计划成本可控，而且可以迅速实施。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'genetic', term: 'genetic', normalizedTerm: 'genetic', partOfSpeech: ['adjective'], ipa: '/dʒənˈɛtɪk/',
    chineseShort: '遗传的；基因的', chineseExplanation: '形容某人、事物或情况具有“遗传的；基因的”的特点，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Related to genes and the way characteristics are passed from parents to children.',
    examples: [{ english: 'Scientists are studying genetic factors linked to the disease.', malay: 'Ayat ini menunjukkan penggunaan perkataan “genetic” dalam konteks Bahasa Inggeris British.', chinese: '科学家正在研究与这种疾病有关的遗传因素。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'grant', term: 'grant', normalizedTerm: 'grant', partOfSpeech: ['noun', 'verb'], ipa: '/ɡrˈænt/',
    chineseShort: '拨款；授予', chineseExplanation: '可作多种词性使用，核心意思包括“拨款；授予”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Money given for a particular purpose, or to formally give or allow something.',
    examples: [{ english: 'The university received a research grant for the project.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grant” dalam konteks Bahasa Inggeris British.', chinese: '这所大学为该项目获得了一笔研究拨款。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'guarantee', term: 'guarantee', normalizedTerm: 'guarantee', partOfSpeech: ['noun', 'verb'], ipa: '/ɡˌɛrəntˈi/',
    chineseShort: '保证；担保', chineseExplanation: '可作多种词性使用，核心意思包括“保证；担保”。常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'A promise that something will happen or work as expected, or to make such a promise.',
    examples: [{ english: 'The company cannot guarantee delivery by Friday.', malay: 'Ayat ini menunjukkan penggunaan perkataan “guarantee” dalam konteks Bahasa Inggeris British.', chinese: '公司无法保证星期五前送达。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'impose', term: 'impose', normalizedTerm: 'impose', partOfSpeech: ['verb'], ipa: '/ˌɪmpˈoʊz/',
    chineseShort: '强加；实施', chineseExplanation: '表示“强加；实施”的动作或过程，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'To officially force a rule, tax, restriction, or condition on people.',
    examples: [{ english: 'The city imposed stricter limits on heavy vehicles in the centre.', malay: 'Ayat ini menunjukkan penggunaan perkataan “impose” dalam konteks Bahasa Inggeris British.', chinese: '该市对市中心的重型车辆实施了更严格的限制。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'intervention', term: 'intervention', normalizedTerm: 'intervention', partOfSpeech: ['noun'], ipa: '/ˌɪntɚvˈɛnʃən/',
    chineseShort: '干预；介入', chineseExplanation: '指与“干预；介入”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Action taken to improve or influence a difficult situation.',
    examples: [{ english: 'Early intervention can prevent a small problem from becoming serious.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intervention” dalam konteks Bahasa Inggeris British.', chinese: '及早干预可以防止小问题变严重。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'revenue', term: 'revenue', normalizedTerm: 'revenue', partOfSpeech: ['noun'], ipa: '/rˈɛvənˌu/',
    chineseShort: '收入；收益', chineseExplanation: '指与“收入；收益”有关的概念、情况或事物，常用于B2阶段的日常、学术或工作语境。', englishDefinition: 'Money received by a business, organisation, or government from its activities.',
    examples: [{ english: 'Online sales now provide a large share of the company\'s revenue.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revenue” dalam konteks Bahasa Inggeris British.', chinese: '网上销售现在占公司收入的很大一部分。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'organisation', term: 'organisation', normalizedTerm: 'organisation', partOfSpeech: ['noun'],
    chineseShort: '组织, 团体, 体制, 编制', chineseExplanation: '组织, 团体, 体制, 编制是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The persons (or committees or departments etc.) who make up a body for the purpose of administering something n a group of people who work together n an organised structure for arranging or…',
    examples: [{ english: 'The lesson explains the meaning of organisation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organisation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“organisation”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'responsibility', term: 'responsibility', normalizedTerm: 'responsibility', partOfSpeech: ['noun'],
    chineseShort: '责任, 职责, 负担, 可靠性；职责', chineseExplanation: '责任, 职责, 负担, 可靠性；职责是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A form of trustworthiness; the trait of being answerable to someone for something or being responsible for one\'s conduct.',
    examples: [{ english: 'The lesson explains the meaning of responsibility.', malay: 'Ayat ini menunjukkan penggunaan perkataan “responsibility” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“responsibility”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'consideration', term: 'consideration', normalizedTerm: 'consideration', partOfSpeech: ['noun'],
    chineseShort: '考虑, 原因；考虑, 思考, 报酬', chineseExplanation: '考虑, 原因；考虑, 思考, 报酬是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The process of giving careful thought to something.',
    examples: [{ english: 'The lesson explains the meaning of consideration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consideration” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“consideration”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'representative', term: 'representative', normalizedTerm: 'representative', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '代表, 众议员, 典型；描写的, 表现的, 代理的, 代表的, 代议制的, 典型的', chineseExplanation: '代表, 众议员, 典型；描写的, 表现的, 代理的, 代表的, 代议制的, 典型的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person who represents others.',
    examples: [{ english: 'The lesson explains the meaning of representative.', malay: 'Ayat ini menunjukkan penggunaan perkataan “representative” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“representative”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'concentration', term: 'concentration', normalizedTerm: 'concentration', partOfSpeech: ['noun'],
    chineseShort: '集中, 专心；浓度', chineseExplanation: '集中, 专心；浓度是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The strength of a solution; number of molecules of a substance in a given volume.',
    examples: [{ english: 'The lesson explains the meaning of concentration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “concentration” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“concentration”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'organise', term: 'organise', normalizedTerm: 'organise', partOfSpeech: ['verb'],
    chineseShort: '组织, 有机化, 给予生机', chineseExplanation: '组织, 有机化, 给予生机是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Bring order and organisation to v create (as an entity) v form or join a union v cause to be structured or ordered or operating according to some principle or idea v arrange by systematic planning…',
    examples: [{ english: 'The example shows how to use the verb organise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organise” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“organise”。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'interpretation', term: 'interpretation', normalizedTerm: 'interpretation', partOfSpeech: ['noun'],
    chineseShort: '解释, 演出, 翻译；插值', chineseExplanation: '解释, 演出, 翻译；插值是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A mental representation of the meaning or significance of something.',
    examples: [{ english: 'The lesson explains the meaning of interpretation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interpretation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“interpretation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unfortunately', term: 'unfortunately', normalizedTerm: 'unfortunately', partOfSpeech: ['adverb'],
    chineseShort: '恐怕, 不幸的是', chineseExplanation: '恐怕, 不幸的是是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'By bad luck.',
    examples: [{ english: 'The speaker used unfortunately to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unfortunately” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“unfortunately”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'metre', term: 'metre', normalizedTerm: 'metre', partOfSpeech: ['noun', 'verb'],
    chineseShort: '公尺, 格律, 韵律；米, 公尺', chineseExplanation: '公尺, 格律, 韵律；米, 公尺是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The basic unit of length adopted under the Systeme International d\'Unites (approximately 1.094 yards) n (prosody) the accent in a metrical foot of verse n rhythm as given by division into parts…',
    examples: [{ english: 'The lesson explains the meaning of metre.', malay: 'Ayat ini menunjukkan penggunaan perkataan “metre” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“metre”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'recommendation', term: 'recommendation', normalizedTerm: 'recommendation', partOfSpeech: ['noun'],
    chineseShort: '推荐, 介绍, 推荐信, 劝告；建议书', chineseExplanation: '推荐, 介绍, 推荐信, 劝告；建议书是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Something (as a course of action) that is recommended as advisable.',
    examples: [{ english: 'The lesson explains the meaning of recommendation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recommendation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“recommendation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'entertainment', term: 'entertainment', normalizedTerm: 'entertainment', partOfSpeech: ['noun'],
    chineseShort: '娱乐, 款待, 娱乐表演', chineseExplanation: '娱乐, 款待, 娱乐表演是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An activity that is diverting and that holds the attention.',
    examples: [{ english: 'The lesson explains the meaning of entertainment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “entertainment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“entertainment”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'approximately', term: 'approximately', normalizedTerm: 'approximately', partOfSpeech: ['adverb'],
    chineseShort: '大约, 大致, 近于；大约, 近似', chineseExplanation: '大约, 大致, 近于；大约, 近似是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(of quantities) imprecise but fairly close to correct.',
    examples: [{ english: 'The speaker used approximately to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “approximately” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“approximately”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'qualification', term: 'qualification', normalizedTerm: 'qualification', partOfSpeech: ['noun'],
    chineseShort: '资格, 条件, 限制；限定', chineseExplanation: '资格, 条件, 限制；限定是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An attribute that must be met or complied with and that fits a person for something.',
    examples: [{ english: 'The lesson explains the meaning of qualification.', malay: 'Ayat ini menunjukkan penggunaan perkataan “qualification” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“qualification”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'yell', term: 'yell', normalizedTerm: 'yell', partOfSpeech: ['verb', 'noun'],
    chineseShort: '叫喊, 大叫, 呐喊欢呼；喊叫着说', chineseExplanation: '叫喊, 大叫, 呐喊欢呼；喊叫着说是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Utter or declare in a very loud voice.',
    examples: [{ english: 'The example shows how to use the verb yell.', malay: 'Ayat ini menunjukkan penggunaan perkataan “yell” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“yell”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'emphasise', term: 'emphasise', normalizedTerm: 'emphasise', partOfSpeech: ['verb'],
    chineseShort: '强调, 重读, 加强...的语气, 着重', chineseExplanation: '强调, 重读, 加强...的语气, 着重是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Give extra weight to (a communication) v to stress, single out as important.',
    examples: [{ english: 'The example shows how to use the verb emphasise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emphasise” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“emphasise”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tournament', term: 'tournament', normalizedTerm: 'tournament', partOfSpeech: ['noun'],
    chineseShort: '比赛, 竞赛, 锦标赛, 联赛', chineseExplanation: '比赛, 竞赛, 锦标赛, 联赛是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A sporting competition in which contestants play a series of games to decide the winner.',
    examples: [{ english: 'The lesson explains the meaning of tournament.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tournament” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tournament”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'glove', term: 'glove', normalizedTerm: 'glove', partOfSpeech: ['noun', 'verb'],
    chineseShort: '手套；给...戴手套', chineseExplanation: '手套；给...戴手套是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Handwear: covers the hand and wrist.',
    examples: [{ english: 'The lesson explains the meaning of glove.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glove” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“glove”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'revolutionary', term: 'revolutionary', normalizedTerm: 'revolutionary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '革命者, 革命党人；革命的, 革命性的', chineseExplanation: '革命者, 革命党人；革命的, 革命性的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Markedly new or introducing radical change.',
    examples: [{ english: 'The passage uses revolutionary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revolutionary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“revolutionary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'discrimination', term: 'discrimination', normalizedTerm: 'discrimination', partOfSpeech: ['noun'],
    chineseShort: '差别, 岐视, 辨别力；鉴别', chineseExplanation: '差别, 岐视, 辨别力；鉴别是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Unfair treatment of a person or group on the basis of prejudice.',
    examples: [{ english: 'The lesson explains the meaning of discrimination.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discrimination” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“discrimination”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'youngster', term: 'youngster', normalizedTerm: 'youngster', partOfSpeech: ['noun'],
    chineseShort: '小孩, 年轻人, 少年；儿童, 少年, 青年', chineseExplanation: '小孩, 年轻人, 少年；儿童, 少年, 青年是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A young person of either sex.',
    examples: [{ english: 'The lesson explains the meaning of youngster.', malay: 'Ayat ini menunjukkan penggunaan perkataan “youngster” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“youngster”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'portray', term: 'portray', normalizedTerm: 'portray', partOfSpeech: ['verb'],
    chineseShort: '描绘, 描写, 描绘...的肖像', chineseExplanation: '描绘, 描写, 描绘...的肖像是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Portray in words.',
    examples: [{ english: 'The example shows how to use the verb portray.', malay: 'Ayat ini menunjukkan penggunaan perkataan “portray” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“portray”。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'knit', term: 'knit', normalizedTerm: 'knit', partOfSpeech: ['verb', 'noun'],
    chineseShort: '编织, 结合', chineseExplanation: '编织, 结合是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A fabric made by knitting.',
    examples: [{ english: 'The example shows how to use the verb knit.', malay: 'Ayat ini menunjukkan penggunaan perkataan “knit” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“knit”。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'plead', term: 'plead', normalizedTerm: 'plead', partOfSpeech: ['verb'],
    chineseShort: '辩护, 恳求；为...辩护, 提出...借口, 托称, 恳求', chineseExplanation: '辩护, 恳求；为...辩护, 提出...借口, 托称, 恳求是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Appeal or request earnestly.',
    examples: [{ english: 'The example shows how to use the verb plead.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plead” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“plead”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'questionnaire', term: 'questionnaire', normalizedTerm: 'questionnaire', partOfSpeech: ['noun', 'verb'],
    chineseShort: '调查表, 问卷；调查表', chineseExplanation: '调查表, 问卷；调查表是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A form containing a set of questions; submitted to people to gain statistical information.',
    examples: [{ english: 'The lesson explains the meaning of questionnaire.', malay: 'Ayat ini menunjukkan penggunaan perkataan “questionnaire” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“questionnaire”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'uncomfortable', term: 'uncomfortable', normalizedTerm: 'uncomfortable', partOfSpeech: ['adjective'],
    chineseShort: '不舒服的, 不自在的, 不安的', chineseExplanation: '不舒服的, 不自在的, 不安的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Conducive to or feeling mental discomfort.',
    examples: [{ english: 'The passage uses uncomfortable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “uncomfortable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“uncomfortable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'convict', term: 'convict', normalizedTerm: 'convict', partOfSpeech: ['noun', 'verb'],
    chineseShort: '囚犯, 罪犯；宣告有罪, 使知罪', chineseExplanation: '囚犯, 罪犯；宣告有罪, 使知罪是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person serving a sentence in a jail or prison.',
    examples: [{ english: 'The lesson explains the meaning of convict.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convict” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“convict”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'rebuild', term: 'rebuild', normalizedTerm: 'rebuild', partOfSpeech: ['verb', 'noun'],
    chineseShort: '改建, 重建, 改造；重建', chineseExplanation: '改建, 重建, 改造；重建是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Build again.',
    examples: [{ english: 'The example shows how to use the verb rebuild.', malay: 'Ayat ini menunjukkan penggunaan perkataan “rebuild” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“rebuild”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'disappointment', term: 'disappointment', normalizedTerm: 'disappointment', partOfSpeech: ['noun'],
    chineseShort: '失望', chineseExplanation: '失望是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A feeling of dissatisfaction that results when your expectations are not realised.',
    examples: [{ english: 'The lesson explains the meaning of disappointment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disappointment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disappointment”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vanish', term: 'vanish', normalizedTerm: 'vanish', partOfSpeech: ['verb', 'noun'],
    chineseShort: '消失, 不见, 成为零', chineseExplanation: '消失, 不见, 成为零是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Become invisible or unnoticeable.',
    examples: [{ english: 'The example shows how to use the verb vanish.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vanish” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“vanish”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'venue', term: 'venue', normalizedTerm: 'venue', partOfSpeech: ['noun'],
    chineseShort: '犯罪地点, 审判地, 发生地点', chineseExplanation: '犯罪地点, 审判地, 发生地点是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The scene of any event or action (especially the place of a meeting).',
    examples: [{ english: 'The lesson explains the meaning of venue.', malay: 'Ayat ini menunjukkan penggunaan perkataan “venue” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“venue”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'incur', term: 'incur', normalizedTerm: 'incur', partOfSpeech: ['verb'],
    chineseShort: '招致, 蒙受, 遭遇；招致, 蒙受, 担负', chineseExplanation: '招致, 蒙受, 遭遇；招致, 蒙受, 担负是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make oneself subject to; bring upon oneself; become liable to.',
    examples: [{ english: 'The example shows how to use the verb incur.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incur” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“incur”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tempt', term: 'tempt', normalizedTerm: 'tempt', partOfSpeech: ['verb'],
    chineseShort: '诱惑, 引诱, 引起...的兴趣, 吸引, 冒...风险', chineseExplanation: '诱惑, 引诱, 引起...的兴趣, 吸引, 冒...风险是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Dispose or incline or entice to.',
    examples: [{ english: 'The example shows how to use the verb tempt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tempt” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“tempt”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'nominee', term: 'nominee', normalizedTerm: 'nominee', partOfSpeech: ['noun'],
    chineseShort: '被提名者, 被任命者；被指定人', chineseExplanation: '被提名者, 被任命者；被指定人是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A politician who is running for public office.',
    examples: [{ english: 'The lesson explains the meaning of nominee.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nominee” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“nominee”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'haul', term: 'haul', normalizedTerm: 'haul', partOfSpeech: ['verb', 'noun'],
    chineseShort: '用力拖拉, 拖运, 强拉, 捕获量, 拖运距离；拖, 拉, 改变方向, 改变主意', chineseExplanation: '用力拖拉, 拖运, 强拉, 捕获量, 拖运距离；拖, 拉, 改变方向, 改变主意是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Draw slowly or heavily.',
    examples: [{ english: 'The example shows how to use the verb haul.', malay: 'Ayat ini menunjukkan penggunaan perkataan “haul” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“haul”。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'mechanic', term: 'mechanic', normalizedTerm: 'mechanic', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '机械工, 技工；手工的', chineseExplanation: '机械工, 技工；手工的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Resembling the action of a machine.',
    examples: [{ english: 'The lesson explains the meaning of mechanic.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mechanic” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“mechanic”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'encouragement', term: 'encouragement', normalizedTerm: 'encouragement', partOfSpeech: ['noun'],
    chineseShort: '鼓励, 激励, 奖励；怂恿, 煽动, 助长', chineseExplanation: '鼓励, 激励, 奖励；怂恿, 煽动, 助长是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The expression of approval and support.',
    examples: [{ english: 'The lesson explains the meaning of encouragement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “encouragement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“encouragement”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'incredibly', term: 'incredibly', normalizedTerm: 'incredibly', partOfSpeech: ['adverb'],
    chineseShort: '不能相信地', chineseExplanation: '不能相信地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not easy to believe.',
    examples: [{ english: 'The speaker used incredibly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incredibly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“incredibly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'entrepreneur', term: 'entrepreneur', normalizedTerm: 'entrepreneur', partOfSpeech: ['noun'],
    chineseShort: '企业家, 主办人；承包商, 企业家', chineseExplanation: '企业家, 主办人；承包商, 企业家是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Someone who organises a business venture and assumes the risk for it.',
    examples: [{ english: 'The lesson explains the meaning of entrepreneur.', malay: 'Ayat ini menunjukkan penggunaan perkataan “entrepreneur” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“entrepreneur”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'fortnight', term: 'fortnight', normalizedTerm: 'fortnight', partOfSpeech: ['noun'],
    chineseShort: '两星期', chineseExplanation: '两星期是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A period of fourteen consecutive days.',
    examples: [{ english: 'The lesson explains the meaning of fortnight.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fortnight” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fortnight”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'enclose', term: 'enclose', normalizedTerm: 'enclose', partOfSpeech: ['verb'],
    chineseShort: '围绕, 圈起, 放入封套, 附上', chineseExplanation: '围绕, 圈起, 放入封套, 附上是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Close in; darkness enclosed him".',
    examples: [{ english: 'The example shows how to use the verb enclose.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enclose” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“enclose”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reportedly', term: 'reportedly', normalizedTerm: 'reportedly', partOfSpeech: ['adverb'],
    chineseShort: '根据传说, 根据传闻, 据报道', chineseExplanation: '根据传说, 根据传闻, 据报道是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'According to reports or other information.',
    examples: [{ english: 'The speaker used reportedly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reportedly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“reportedly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'handicap', term: 'handicap', normalizedTerm: 'handicap', partOfSpeech: ['noun', 'verb'],
    chineseShort: '障碍, 困难, 不利条件；加障碍于, 妨碍', chineseExplanation: '障碍, 困难, 不利条件；加障碍于, 妨碍是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Advantage given to a competitor to equalize chances of winning.',
    examples: [{ english: 'The lesson explains the meaning of handicap.', malay: 'Ayat ini menunjukkan penggunaan perkataan “handicap” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“handicap”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'uncover', term: 'uncover', normalizedTerm: 'uncover', partOfSpeech: ['verb'],
    chineseShort: '揭露, 揭开, 暴露, 脱帽致敬；脱帽致敬, 揭去盖子', chineseExplanation: '揭露, 揭开, 暴露, 脱帽致敬；脱帽致敬, 揭去盖子是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make visible.',
    examples: [{ english: 'The example shows how to use the verb uncover.', malay: 'Ayat ini menunjukkan penggunaan perkataan “uncover” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“uncover”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'quid', term: 'quid', normalizedTerm: 'quid', partOfSpeech: ['noun', 'verb'],
    chineseShort: '一镑金币, 一镑, 咀嚼物', chineseExplanation: '一镑金币, 一镑, 咀嚼物是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The basic unit of money in Great Britain and Northern Ireland; equal to 100 pence n something for something;.',
    examples: [{ english: 'The lesson explains the meaning of quid.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quid” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quid”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'referendum', term: 'referendum', normalizedTerm: 'referendum', partOfSpeech: ['noun'],
    chineseShort: '（就重大政治或社会问题进行的）全民公决，全民投票', chineseExplanation: '（就重大政治或社会问题进行的）全民公决，全民投票是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A legislative act is referred for final approval to a popular vote by the electorate.',
    examples: [{ english: 'The lesson explains the meaning of referendum.', malay: 'Ayat ini menunjukkan penggunaan perkataan “referendum” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“referendum”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'compel', term: 'compel', normalizedTerm: 'compel', partOfSpeech: ['verb'],
    chineseShort: '强迫, 迫使', chineseExplanation: '强迫, 迫使是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Force somebody to do something.',
    examples: [{ english: 'The example shows how to use the verb compel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compel” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“compel”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'confrontation', term: 'confrontation', normalizedTerm: 'confrontation', partOfSpeech: ['noun'],
    chineseShort: '对抗；对质', chineseExplanation: '对抗；对质是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A bold challenge.',
    examples: [{ english: 'The lesson explains the meaning of confrontation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “confrontation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“confrontation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'organizational', term: 'organisational', normalizedTerm: 'organisational', partOfSpeech: ['adjective'],
    chineseShort: '组织的；组织的, 编制的, 机构的', chineseExplanation: '组织的；组织的, 编制的, 机构的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of or relating to an organisation.',
    examples: [{ english: 'The passage uses organisational to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organisational” dalam konteks Bahasa Inggeris British.', chinese: '文章用“organisational”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'embark', term: 'embark', normalizedTerm: 'embark', partOfSpeech: ['verb'],
    chineseShort: '乘船, 着手, 从事, 上飞机；使上船, 使上飞机, 使从事', chineseExplanation: '乘船, 着手, 从事, 上飞机；使上船, 使上飞机, 使从事是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Go on board.',
    examples: [{ english: 'The example shows how to use the verb embark.', malay: 'Ayat ini menunjukkan penggunaan perkataan “embark” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“embark”。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'distract', term: 'distract', normalizedTerm: 'distract', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '转移, 分心, 使发狂', chineseExplanation: '转移, 分心, 使发狂是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Draw someone\'s attention away from something.',
    examples: [{ english: 'The example shows how to use the verb distract.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distract” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“distract”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'planner', term: 'planner', normalizedTerm: 'planner', partOfSpeech: ['noun'],
    chineseShort: '计划者, 设计者, 安排者；刨床机', chineseExplanation: '计划者, 设计者, 安排者；刨床机是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person who makes plans.',
    examples: [{ english: 'The lesson explains the meaning of planner.', malay: 'Ayat ini menunjukkan penggunaan perkataan “planner” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“planner”的含义。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'retailer', term: 'retailer', normalizedTerm: 'retailer', partOfSpeech: ['noun'],
    chineseShort: '零售商人, 传播的人；零售商', chineseExplanation: '零售商人, 传播的人；零售商是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A merchant who sells goods at retail.',
    examples: [{ english: 'The lesson explains the meaning of retailer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “retailer” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“retailer”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'widen', term: 'widen', normalizedTerm: 'widen', partOfSpeech: ['verb', 'noun'],
    chineseShort: '弄宽, 加宽, 扩大；变宽, 扩大', chineseExplanation: '弄宽, 加宽, 扩大；变宽, 扩大是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Become broader or wider or more extensive.',
    examples: [{ english: 'The example shows how to use the verb widen.', malay: 'Ayat ini menunjukkan penggunaan perkataan “widen” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“widen”。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'revive', term: 'revive', normalizedTerm: 'revive', partOfSpeech: ['verb', 'noun'],
    chineseShort: '使苏醒, 使复兴, 使振奋, 回想起, 重播；苏醒, 复活, 复兴, 恢复精神', chineseExplanation: '使苏醒, 使复兴, 使振奋, 回想起, 重播；苏醒, 复活, 复兴, 恢复精神是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Be brought back to life, consciousness, or strength.',
    examples: [{ english: 'The example shows how to use the verb revive.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revive” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“revive”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'plunge', term: 'plunge', normalizedTerm: 'plunge', partOfSpeech: ['verb', 'noun'],
    chineseShort: '钻进, 跳进, 跳水, 跳水池, 猛跌, 落下, 投入, 开始从事, 盲目投资；投入, 投身于, 跳进, 陷入, 下降', chineseExplanation: '钻进, 跳进, 跳水, 跳水池, 猛跌, 落下, 投入, 开始从事, 盲目投资；投入, 投身于, 跳进, 陷入, 下降是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A steep and rapid fall.',
    examples: [{ english: 'The example shows how to use the verb plunge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plunge” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“plunge”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unfold', term: 'unfold', normalizedTerm: 'unfold', partOfSpeech: ['verb', 'noun'],
    chineseShort: '展开, 打开, 披露, 开展, 挑明；伸展, 开花, 呈现', chineseExplanation: '展开, 打开, 披露, 开展, 挑明；伸展, 开花, 呈现是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Open to the view.',
    examples: [{ english: 'The example shows how to use the verb unfold.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unfold” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“unfold”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'independently', term: 'independently', normalizedTerm: 'independently', partOfSpeech: ['adverb'],
    chineseShort: '独立地, 自立地', chineseExplanation: '独立地, 自立地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'On your own; without outside help.',
    examples: [{ english: 'The speaker used independently to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “independently” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“independently”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'blink', term: 'blink', normalizedTerm: 'blink', partOfSpeech: ['verb', 'noun'],
    chineseShort: '眨眼, 闪亮；眨眼, 使闪亮', chineseExplanation: '眨眼, 闪亮；眨眼, 使闪亮是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A reflex that closes and opens the eyes rapidly.',
    examples: [{ english: 'The example shows how to use the verb blink.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blink” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“blink”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'yacht', term: 'yacht', normalizedTerm: 'yacht', partOfSpeech: ['noun', 'verb'],
    chineseShort: '快艇, 游艇；驾游艇, 乘游艇', chineseExplanation: '快艇, 游艇；驾游艇, 乘游艇是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An expensive vessel propelled by sail or power and used for cruising or racing.',
    examples: [{ english: 'The lesson explains the meaning of yacht.', malay: 'Ayat ini menunjukkan penggunaan perkataan “yacht” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“yacht”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'referee', term: 'referee', normalizedTerm: 'referee', partOfSpeech: ['noun', 'verb'],
    chineseShort: '仲裁人, 调解人, 裁判员；仲裁, 裁判', chineseExplanation: '仲裁人, 调解人, 裁判员；仲裁, 裁判是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(sports) the chief official (as in boxing or American football) who is expected to ensure fair play.',
    examples: [{ english: 'The lesson explains the meaning of referee.', malay: 'Ayat ini menunjukkan penggunaan perkataan “referee” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“referee”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'forbid', term: 'forbid', normalizedTerm: 'forbid', partOfSpeech: ['verb'],
    chineseShort: '禁止, 不准, 妨碍；不许, 禁止, 阻止', chineseExplanation: '禁止, 不准, 妨碍；不许, 禁止, 阻止是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Command against.',
    examples: [{ english: 'The example shows how to use the verb forbid.', malay: 'Ayat ini menunjukkan penggunaan perkataan “forbid” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“forbid”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'underline', term: 'underline', normalizedTerm: 'underline', partOfSpeech: ['verb', 'noun'],
    chineseShort: '在...下面划线, 作...的衬里, 强调；下划线, 图下说明文字', chineseExplanation: '在...下面划线, 作...的衬里, 强调；下划线, 图下说明文字是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Draw a line or lines underneath to call attention to.',
    examples: [{ english: 'The example shows how to use the verb underline.', malay: 'Ayat ini menunjukkan penggunaan perkataan “underline” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“underline”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'landmark', term: 'landmark', normalizedTerm: 'landmark', partOfSpeech: ['noun', 'verb'],
    chineseShort: '陆标, 划时代的事, 地界标；界标', chineseExplanation: '陆标, 划时代的事, 地界标；界标是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The position of a prominent or well-known object in a particular landscape.',
    examples: [{ english: 'The lesson explains the meaning of landmark.', malay: 'Ayat ini menunjukkan penggunaan perkataan “landmark” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“landmark”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'grape', term: 'grape', normalizedTerm: 'grape', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '葡萄, 葡萄树；葡萄', chineseExplanation: '葡萄, 葡萄树；葡萄是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any of various juicy fruit of the genus Vitis with green or purple skins; grow in clusters.',
    examples: [{ english: 'The lesson explains the meaning of grape.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grape” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grape”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'inappropriate', term: 'inappropriate', normalizedTerm: 'inappropriate', partOfSpeech: ['adjective'],
    chineseShort: '不适当的, 不相称的', chineseExplanation: '不适当的, 不相称的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not suitable for a particular occasion etc.',
    examples: [{ english: 'The passage uses inappropriate to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inappropriate” dalam konteks Bahasa Inggeris British.', chinese: '文章用“inappropriate”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'overwhelm', term: 'overwhelm', normalizedTerm: 'overwhelm', partOfSpeech: ['verb', 'noun'],
    chineseShort: '淹没, 受打击, 制服, 压倒, 使不知所措；打翻, 倾覆, 覆盖', chineseExplanation: '淹没, 受打击, 制服, 压倒, 使不知所措；打翻, 倾覆, 覆盖是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Overcome, as with emotions or perceptual stimuli.',
    examples: [{ english: 'The example shows how to use the verb overwhelm.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overwhelm” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“overwhelm”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'quarry', term: 'quarry', normalizedTerm: 'quarry', partOfSpeech: ['noun', 'verb'],
    chineseShort: '采石场, 方形石, 猎物, 被追求物, 来源；挖出, 努力挖掘', chineseExplanation: '采石场, 方形石, 猎物, 被追求物, 来源；挖出, 努力挖掘是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Extract (something such as stones) from or as if from a quarry.',
    examples: [{ english: 'The lesson explains the meaning of quarry.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quarry” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quarry”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'foreigner', term: 'foreigner', normalizedTerm: 'foreigner', partOfSpeech: ['noun'],
    chineseShort: '外国人, 外地人；外国人, 进口货, 外国货', chineseExplanation: '外国人, 外地人；外国人, 进口货, 外国货是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person who comes from a foreign country; someone who does not owe allegiance to your country.',
    examples: [{ english: 'The lesson explains the meaning of foreigner.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foreigner” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“foreigner”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'diplomat', term: 'diplomat', normalizedTerm: 'diplomat', partOfSpeech: ['noun'],
    chineseShort: '外交官, 有外交手腕的人；外交家, 外交官, 有权谋的人', chineseExplanation: '外交官, 有外交手腕的人；外交家, 外交官, 有权谋的人是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An official engaged in international negotiations.',
    examples: [{ english: 'The lesson explains the meaning of diplomat.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diplomat” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“diplomat”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'renew', term: 'renew', normalizedTerm: 'renew', partOfSpeech: ['verb', 'noun'],
    chineseShort: '使更新, 使恢复, 复兴, 修补, 补充, 继续, 重订, 重申, 续借；更新, 重新开始', chineseExplanation: '使更新, 使恢复, 复兴, 修补, 补充, 继续, 重订, 重申, 续借；更新, 重新开始是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Reestablish on a new, usually improved, basis or make new or like new v cause to appear in a new form.',
    examples: [{ english: 'The example shows how to use the verb renew.', malay: 'Ayat ini menunjukkan penggunaan perkataan “renew” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“renew”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'kneel', term: 'kneel', normalizedTerm: 'kneel', partOfSpeech: ['verb'],
    chineseShort: '跪下', chineseExplanation: '跪下是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Supporting yourself on your knees.',
    examples: [{ english: 'The example shows how to use the verb kneel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kneel” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“kneel”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'nominate', term: 'nominate', normalizedTerm: 'nominate', partOfSpeech: ['verb', 'noun'],
    chineseShort: '提名, 任命, 命名；提名...为候选人, 指定, 推荐', chineseExplanation: '提名, 任命, 命名；提名...为候选人, 指定, 推荐是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Propose as a candidate for some honor.',
    examples: [{ english: 'The example shows how to use the verb nominate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nominate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“nominate”。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'follower', term: 'follower', normalizedTerm: 'follower', partOfSpeech: ['noun'],
    chineseShort: '从者, 属下, 追补者；随动机', chineseExplanation: '从者, 属下, 追补者；随动机是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person who accepts the leadership of another.',
    examples: [{ english: 'The lesson explains the meaning of follower.', malay: 'Ayat ini menunjukkan penggunaan perkataan “follower” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“follower”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'haunt', term: 'haunt', normalizedTerm: 'haunt', partOfSpeech: ['verb', 'noun'],
    chineseShort: '常到的地方, 生息地；常到, 出没于, 萦绕于', chineseExplanation: '常到的地方, 生息地；常到, 出没于, 萦绕于是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A frequently visited place.',
    examples: [{ english: 'The example shows how to use the verb haunt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “haunt” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“haunt”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'comparatively', term: 'comparatively', normalizedTerm: 'comparatively', partOfSpeech: ['adverb'],
    chineseShort: '比较地, 相对地', chineseExplanation: '比较地, 相对地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In a relative manner; by comparison to something else.',
    examples: [{ english: 'The speaker used comparatively to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comparatively” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“comparatively”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'embody', term: 'embody', normalizedTerm: 'embody', partOfSpeech: ['verb'],
    chineseShort: '具体表达, 使具体化；合并, 具体化, 具体表现', chineseExplanation: '具体表达, 使具体化；合并, 具体化, 具体表现是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Represent, as of a character on stage.',
    examples: [{ english: 'The example shows how to use the verb embody.', malay: 'Ayat ini menunjukkan penggunaan perkataan “embody” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“embody”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vinegar', term: 'vinegar', normalizedTerm: 'vinegar', partOfSpeech: ['noun', 'verb'],
    chineseShort: '醋, 尖酸刻薄；加醋于', chineseExplanation: '醋, 尖酸刻薄；加醋于是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Sour-tasting liquid produced usually by oxidation of the alcohol in wine or cider and used as a condiment or food preservative.',
    examples: [{ english: 'The lesson explains the meaning of vinegar.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vinegar” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vinegar”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'organizer', term: 'organiser', normalizedTerm: 'organiser', partOfSpeech: ['noun'],
    chineseShort: '组织者, 编制者, 创立者, 组织导体；组织导体, 机化中心', chineseExplanation: '组织者, 编制者, 创立者, 组织导体；组织导体, 机化中心是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person who brings order and organisation to an enterprise.',
    examples: [{ english: 'The lesson explains the meaning of organiser.', malay: 'Ayat ini menunjukkan penggunaan perkataan “organiser” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“organiser”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'junk', term: 'junk', normalizedTerm: 'junk', partOfSpeech: ['noun', 'verb'],
    chineseShort: '垃圾, 乌七八糟的东西, 舢板；清除', chineseExplanation: '垃圾, 乌七八糟的东西, 舢板；清除是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any of various Chinese boats with a high poop and lugsails.',
    examples: [{ english: 'The lesson explains the meaning of junk.', malay: 'Ayat ini menunjukkan penggunaan perkataan “junk” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“junk”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'greenhouse', term: 'greenhouse', normalizedTerm: 'greenhouse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '温室', chineseExplanation: '温室是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A building with glass walls and roof; for the cultivation and exhibition of plants under controlled conditions.',
    examples: [{ english: 'The lesson explains the meaning of greenhouse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “greenhouse” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“greenhouse”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'pledge', term: 'pledge', normalizedTerm: 'pledge', partOfSpeech: ['noun', 'verb'],
    chineseShort: '诺言, 保证, 誓言, 抵押, 信物, 保人, 祝愿；许诺, 保证, 使发誓, 抵押, 典当, 举杯祝...健康', chineseExplanation: '诺言, 保证, 誓言, 抵押, 信物, 保人, 祝愿；许诺, 保证, 使发誓, 抵押, 典当, 举杯祝...健康是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A deposit of personal property as security for a debt.',
    examples: [{ english: 'The lesson explains the meaning of pledge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pledge” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“pledge”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'yarn', term: 'yarn', normalizedTerm: 'yarn', partOfSpeech: ['noun', 'verb'],
    chineseShort: '纱, 纱线, 故事；纱', chineseExplanation: '纱, 纱线, 故事；纱是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Tell or spin a yarn.',
    examples: [{ english: 'The lesson explains the meaning of yarn.', malay: 'Ayat ini menunjukkan penggunaan perkataan “yarn” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“yarn”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'appetite', term: 'appetite', normalizedTerm: 'appetite', partOfSpeech: ['noun'],
    chineseShort: '食欲, 欲望, 爱好；食欲', chineseExplanation: '食欲, 欲望, 爱好；食欲是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A feeling of craving something.',
    examples: [{ english: 'The lesson explains the meaning of appetite.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appetite” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“appetite”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'referral', term: 'referral', normalizedTerm: 'referral', partOfSpeech: ['noun'],
    chineseShort: '参照, 介绍, 被介绍人, 转诊病人', chineseExplanation: '参照, 介绍, 被介绍人, 转诊病人是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person whose case has been referred to a specialist or professional group.',
    examples: [{ english: 'The lesson explains the meaning of referral.', malay: 'Ayat ini menunjukkan penggunaan perkataan “referral” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“referral”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'luxury', term: 'luxury', normalizedTerm: 'luxury', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '奢侈, 豪华；奢侈的, 豪华的', chineseExplanation: '奢侈, 豪华；奢侈的, 豪华的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Something that is an indulgence rather than a necessity.',
    examples: [{ english: 'The lesson explains the meaning of luxury.', malay: 'Ayat ini menunjukkan penggunaan perkataan “luxury” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“luxury”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tenth', term: 'tenth', normalizedTerm: 'tenth', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '第十, 十分之一', chineseExplanation: '第十, 十分之一是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Position ten in a countable series of things.',
    examples: [{ english: 'The lesson explains the meaning of tenth.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tenth” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tenth”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'incidentally', term: 'incidentally', normalizedTerm: 'incidentally', partOfSpeech: ['adverb'],
    chineseShort: '伴随地, 偶然, 顺便', chineseExplanation: '伴随地, 偶然, 顺便是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of a minor or subordinate nature.',
    examples: [{ english: 'The speaker used incidentally to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incidentally” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“incidentally”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'juvenile', term: 'juvenile', normalizedTerm: 'juvenile', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '少年, 少年读物；少年的, 不成熟的, 适于少年的', chineseExplanation: '少年, 少年读物；少年的, 不成熟的, 适于少年的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A young person, not fully developed.',
    examples: [{ english: 'The passage uses juvenile to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “juvenile” dalam konteks Bahasa Inggeris British.', chinese: '文章用“juvenile”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'repay', term: 'repay', normalizedTerm: 'repay', partOfSpeech: ['verb'],
    chineseShort: '偿还, 报答, 报复', chineseExplanation: '偿还, 报答, 报复是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Pay back v make repayment for or return something v act or give recompense in recognition of someone\'s behaviour or actions v answer back.',
    examples: [{ english: 'The example shows how to use the verb repay.', malay: 'Ayat ini menunjukkan penggunaan perkataan “repay” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“repay”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'torture', term: 'torture', normalizedTerm: 'torture', partOfSpeech: ['noun', 'verb'],
    chineseShort: '拷问, 苦闷；拷问, 曲解, 折磨, 使弯曲', chineseExplanation: '拷问, 苦闷；拷问, 曲解, 折磨, 使弯曲是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Unbearable physical pain.',
    examples: [{ english: 'The lesson explains the meaning of torture.', malay: 'Ayat ini menunjukkan penggunaan perkataan “torture” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“torture”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'fountain', term: 'fountain', normalizedTerm: 'fountain', partOfSpeech: ['noun', 'verb'],
    chineseShort: '水源, 源, 喷泉, 泉水, 本源；泉', chineseExplanation: '水源, 源, 喷泉, 泉水, 本源；泉是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A structure from which an artificially produced jet of water arises.',
    examples: [{ english: 'The lesson explains the meaning of fountain.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fountain” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fountain”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'revenge', term: 'revenge', normalizedTerm: 'revenge', partOfSpeech: ['noun', 'verb'],
    chineseShort: '报仇, 复仇, 报复；报仇, 报复', chineseExplanation: '报仇, 复仇, 报复；报仇, 报复是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Take revenge for a perceived wrong.',
    examples: [{ english: 'The lesson explains the meaning of revenge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revenge” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“revenge”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'underground', term: 'underground', normalizedTerm: 'underground', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '地下, 地铁, 地道, 秘密活动；地下的, 秘密的', chineseExplanation: '地下, 地铁, 地道, 秘密活动；地下的, 秘密的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A secret group organised to overthrow a government or occupation force.',
    examples: [{ english: 'The passage uses underground to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “underground” dalam konteks Bahasa Inggeris British.', chinese: '文章用“underground”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unclear', term: 'unclear', normalizedTerm: 'unclear', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '不易了解的, 不清楚的, 含混的', chineseExplanation: '不易了解的, 不清楚的, 含混的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not clear to the mind.',
    examples: [{ english: 'The passage uses unclear to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unclear” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unclear”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reside', term: 'reside', normalizedTerm: 'reside', partOfSpeech: ['verb', 'noun'],
    chineseShort: '住, 居留, 属于；居住', chineseExplanation: '住, 居留, 属于；居住是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make one\'s home in a particular place or community.',
    examples: [{ english: 'The example shows how to use the verb reside.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reside” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“reside”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'query', term: 'query', normalizedTerm: 'query', partOfSpeech: ['noun', 'verb'],
    chineseShort: '疑问, 疑问号, 质问, 查询；询问, 质问', chineseExplanation: '疑问, 疑问号, 质问, 查询；询问, 质问是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An instance of questioning v pose a question.',
    examples: [{ english: 'The lesson explains the meaning of query.', malay: 'Ayat ini menunjukkan penggunaan perkataan “query” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“query”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'lure', term: 'lure', normalizedTerm: 'lure', partOfSpeech: ['noun', 'verb'],
    chineseShort: '饵, 诱惑；引诱, 诱惑', chineseExplanation: '饵, 诱惑；引诱, 诱惑是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Qualities that attract by seeming to promise some kind of reward.',
    examples: [{ english: 'The lesson explains the meaning of lure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lure” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lure”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'repetition', term: 'repetition', normalizedTerm: 'repetition', partOfSpeech: ['noun', 'verb'],
    chineseShort: '重复, 背诵, 循环, 复制品, 副本；重复, 反复', chineseExplanation: '重复, 背诵, 循环, 复制品, 副本；重复, 反复是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The act of doing or performing again.',
    examples: [{ english: 'The lesson explains the meaning of repetition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “repetition” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“repetition”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'witch', term: 'witch', normalizedTerm: 'witch', partOfSpeech: ['noun', 'verb'],
    chineseShort: '巫婆, 女巫；施巫术, 迷惑', chineseExplanation: '巫婆, 女巫；施巫术, 迷惑是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A being (usually female) imagined to have special powers derived from the devil.',
    examples: [{ english: 'The lesson explains the meaning of witch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “witch” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“witch”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'forge', term: 'forge', normalizedTerm: 'forge', partOfSpeech: ['verb', 'noun'],
    chineseShort: '熔炉, 铁工厂；打制, 锻造, 伪造', chineseExplanation: '熔炉, 铁工厂；打制, 锻造, 伪造是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Furnace consisting of a special hearth where metal is heated before shaping.',
    examples: [{ english: 'The example shows how to use the verb forge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “forge” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“forge”。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'disrupt', term: 'disrupt', normalizedTerm: 'disrupt', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '分裂的, 中断的；使分裂, 使瓦解', chineseExplanation: '分裂的, 中断的；使分裂, 使瓦解是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Throw into disorder.',
    examples: [{ english: 'The example shows how to use the verb disrupt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disrupt” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“disrupt”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'postpone', term: 'postpone', normalizedTerm: 'postpone', partOfSpeech: ['verb'],
    chineseShort: '延迟, 使延期, 缓办, 搁延；延缓, 延缓发作', chineseExplanation: '延迟, 使延期, 缓办, 搁延；延缓, 延缓发作是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Hold back to a later time.',
    examples: [{ english: 'The example shows how to use the verb postpone.', malay: 'Ayat ini menunjukkan penggunaan perkataan “postpone” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“postpone”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'resentment', term: 'resentment', normalizedTerm: 'resentment', partOfSpeech: ['noun'],
    chineseShort: '怨恨, 愤恨', chineseExplanation: '怨恨, 愤恨是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A feeling of deep and bitter anger and ill-will.',
    examples: [{ english: 'The lesson explains the meaning of resentment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resentment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“resentment”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'gradual', term: 'gradual', normalizedTerm: 'gradual', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '逐渐的, 渐增的；弥撒升阶圣歌', chineseExplanation: '逐渐的, 渐增的；弥撒升阶圣歌是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(Roman Catholic Church) an antiphon (usually from the Book of Psalms) immediately after the epistle at Mass.',
    examples: [{ english: 'The passage uses gradual to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “gradual” dalam konteks Bahasa Inggeris British.', chinese: '文章用“gradual”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'quotation', term: 'quotation', normalizedTerm: 'quotation', partOfSpeech: ['noun'],
    chineseShort: '引用语, 语录, 牌价, 报价；报价', chineseExplanation: '引用语, 语录, 牌价, 报价；报价是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A passage or expression that is quoted or cited.',
    examples: [{ english: 'The lesson explains the meaning of quotation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quotation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quotation”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'insider', term: 'insider', normalizedTerm: 'insider', partOfSpeech: ['noun'],
    chineseShort: '内部的人, 权威人士, 知道内情的人；熟悉内情者', chineseExplanation: '内部的人, 权威人士, 知道内情的人；熟悉内情者是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An officer of a corporation or others who have access to private information about the corporation\'s operations.',
    examples: [{ english: 'The lesson explains the meaning of insider.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insider” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“insider”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'grim', term: 'grim', normalizedTerm: 'grim', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '冷酷的, 坚强的, 残忍的, 可怕的, 讨厌的', chineseExplanation: '冷酷的, 坚强的, 残忍的, 可怕的, 讨厌的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not to be placated or appeased or moved by entreaty.',
    examples: [{ english: 'The passage uses grim to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grim” dalam konteks Bahasa Inggeris British.', chinese: '文章用“grim”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'bead', term: 'bead', normalizedTerm: 'bead', partOfSpeech: ['noun', 'verb'],
    chineseShort: '珠子, 滴；用珠装饰', chineseExplanation: '珠子, 滴；用珠装饰是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A small ball with a hole through the middle.',
    examples: [{ english: 'The lesson explains the meaning of bead.', malay: 'Ayat ini menunjukkan penggunaan perkataan “bead” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“bead”的含义。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'resilience', term: 'resilience', normalizedTerm: 'resilience', partOfSpeech: ['noun'],
    chineseShort: '韧性；恢复力', chineseExplanation: '经历困难、压力或变化后恢复并继续前进的能力。', englishDefinition: 'The ability to recover and continue after difficulty, pressure, or change.',
    examples: [{ english: 'The team showed resilience after losing the first match.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resilience” dalam konteks Bahasa Inggeris British.', chinese: '输掉第一场比赛后，球队表现出了韧性。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'believer', term: 'believer', normalizedTerm: 'believer', partOfSpeech: ['noun'],
    chineseShort: '信徒', chineseExplanation: '信徒是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A supporter who accepts something as true.',
    examples: [{ english: 'The lesson explains the meaning of believer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “believer” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“believer”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'renewal', term: 'renewal', normalizedTerm: 'renewal', partOfSpeech: ['noun'],
    chineseShort: '更新, 革新, 复兴, 恢复, 修补, 补充, 继续, 重订, 重申, 续借；更新, 换新, 重申', chineseExplanation: '更新, 革新, 复兴, 恢复, 修补, 补充, 继续, 重订, 重申, 续借；更新, 换新, 重申是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The act of renewing.',
    examples: [{ english: 'The lesson explains the meaning of renewal.', malay: 'Ayat ini menunjukkan penggunaan perkataan “renewal” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“renewal”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'rebellion', term: 'rebellion', normalizedTerm: 'rebellion', partOfSpeech: ['noun'],
    chineseShort: '谋反, 叛乱, 反抗；造反, 反叛, 叛乱', chineseExplanation: '谋反, 叛乱, 反抗；造反, 反叛, 叛乱是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Refusal to accept some authority or code or convention.',
    examples: [{ english: 'The lesson explains the meaning of rebellion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “rebellion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“rebellion”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'grind', term: 'grind', normalizedTerm: 'grind', partOfSpeech: ['verb', 'noun'],
    chineseShort: '磨, 碾, 苦差, 摩擦声, 用功的学生；磨擦, 磨碎, 磨光, 折磨, 压榨', chineseExplanation: '磨, 碾, 苦差, 摩擦声, 用功的学生；磨擦, 磨碎, 磨光, 折磨, 压榨是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The grade of particle fineness to which a substance is ground.',
    examples: [{ english: 'The example shows how to use the verb grind.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grind” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“grind”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'keyboard', term: 'keyboard', normalizedTerm: 'keyboard', partOfSpeech: ['noun', 'verb'],
    chineseShort: '键盘；键盘', chineseExplanation: '键盘；键盘是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Device consisting of a set of keys on a piano or organ or typewriter or typesetting machine or computer or the like.',
    examples: [{ english: 'The lesson explains the meaning of keyboard.', malay: 'Ayat ini menunjukkan penggunaan perkataan “keyboard” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“keyboard”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'vanilla', term: 'vanilla', normalizedTerm: 'vanilla', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '香草, 香子兰', chineseExplanation: '香草, 香子兰是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any of numerous climbing plants of the genus Vanilla having fleshy leaves and clusters of large waxy highly fragrant white or green or topaz flowers.',
    examples: [{ english: 'The lesson explains the meaning of vanilla.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vanilla” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vanilla”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'insure', term: 'insure', normalizedTerm: 'insure', partOfSpeech: ['verb'],
    chineseShort: '保险, 确保；投保', chineseExplanation: '保险, 确保；投保是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Take out insurance for.',
    examples: [{ english: 'The example shows how to use the verb insure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insure” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“insure”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'graphic', term: 'graphic', normalizedTerm: 'graphic', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '生动的, 轮廓分明的, 绘画似的, 图解的；图形的', chineseExplanation: '生动的, 轮廓分明的, 绘画似的, 图解的；图形的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An image that is generated by a computer.',
    examples: [{ english: 'The passage uses graphic to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “graphic” dalam konteks Bahasa Inggeris British.', chinese: '文章用“graphic”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'grill', term: 'grill', normalizedTerm: 'grill', partOfSpeech: ['noun', 'verb'],
    chineseShort: '烤架, 铁格子, 烤肉；烧, 烤, 严加盘问, 给...装栅栏', chineseExplanation: '烤架, 铁格子, 烤肉；烧, 烤, 严加盘问, 给...装栅栏是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A framework of metal bars used as a partition or a grate.',
    examples: [{ english: 'The lesson explains the meaning of grill.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grill” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grill”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'innocence', term: 'innocence', normalizedTerm: 'innocence', partOfSpeech: ['noun'],
    chineseShort: '无罪, 无知, 天真无邪；无罪, 无罪的人, 清白无辜者', chineseExplanation: '无罪, 无知, 天真无邪；无罪, 无罪的人, 清白无辜者是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A state or condition of being innocent of a specific crime or offence.',
    examples: [{ english: 'The lesson explains the meaning of innocence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “innocence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“innocence”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'optimism', term: 'optimism', normalizedTerm: 'optimism', partOfSpeech: ['noun'],
    chineseShort: '乐观主义, 乐观, 乐天；乐观主义, 乐观', chineseExplanation: '乐观主义, 乐观, 乐天；乐观主义, 乐观是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The optimistic feeling that all is going to turn out well.',
    examples: [{ english: 'The lesson explains the meaning of optimism.', malay: 'Ayat ini menunjukkan penggunaan perkataan “optimism” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“optimism”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'folly', term: 'folly', normalizedTerm: 'folly', partOfSpeech: ['noun', 'verb'],
    chineseShort: '愚蠢, 荒唐事, 讽刺剧', chineseExplanation: '愚蠢, 荒唐事, 讽刺剧是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The trait of acting stupidly or rashly.',
    examples: [{ english: 'The lesson explains the meaning of folly.', malay: 'Ayat ini menunjukkan penggunaan perkataan “folly” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“folly”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'jointly', term: 'jointly', normalizedTerm: 'jointly', partOfSpeech: ['adverb'],
    chineseShort: '共同地, 连带地', chineseExplanation: '共同地, 连带地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In collaboration or cooperation.',
    examples: [{ english: 'The speaker used jointly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jointly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“jointly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'posture', term: 'posture', normalizedTerm: 'posture', partOfSpeech: ['noun', 'verb'],
    chineseShort: '姿势, 态度, 情形, 形势；作...的姿势', chineseExplanation: '姿势, 态度, 情形, 形势；作...的姿势是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The arrangement of the body and its limbs n characteristic way of bearing one\'s body n a rationalized mental attitude n capability in terms of personnel and materiel that affect the capacity to…',
    examples: [{ english: 'The lesson explains the meaning of posture.', malay: 'Ayat ini menunjukkan penggunaan perkataan “posture” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“posture”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'solidarity', term: 'solidarity', normalizedTerm: 'solidarity', partOfSpeech: ['noun'],
    chineseShort: '团结, 团结一致, 共同一致；团结, 共同责任', chineseExplanation: '团结, 团结一致, 共同一致；团结, 共同责任是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A union of interests or purposes or sympathies among members of a group.',
    examples: [{ english: 'The lesson explains the meaning of solidarity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “solidarity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“solidarity”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'repayment', term: 'repayment', normalizedTerm: 'repayment', partOfSpeech: ['noun'],
    chineseShort: '付还, 偿还, 报复, 付还的钱；偿还, 付还', chineseExplanation: '付还, 偿还, 报复, 付还的钱；偿还, 付还是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Payment of a debt or obligation.',
    examples: [{ english: 'The lesson explains the meaning of repayment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “repayment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“repayment”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'discard', term: 'discard', normalizedTerm: 'discard', partOfSpeech: ['verb', 'noun'],
    chineseShort: '丢弃, 抛弃；垫牌', chineseExplanation: '丢弃, 抛弃；垫牌是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Anything that is cast aside or discarded.',
    examples: [{ english: 'The example shows how to use the verb discard.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discard” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“discard”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reservoir', term: 'reservoir', normalizedTerm: 'reservoir', partOfSpeech: ['noun', 'verb'],
    chineseShort: '贮水池, 贮藏处, 贮备, 水库；储藏', chineseExplanation: '贮水池, 贮藏处, 贮备, 水库；储藏是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A large or extra supply of something.',
    examples: [{ english: 'The lesson explains the meaning of reservoir.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reservoir” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reservoir”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'landowner', term: 'landowner', normalizedTerm: 'landowner', partOfSpeech: ['noun'],
    chineseShort: '地主；土地所有人, 地主', chineseExplanation: '地主；土地所有人, 地主是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A holder or proprietor of land.',
    examples: [{ english: 'The lesson explains the meaning of landowner.', malay: 'Ayat ini menunjukkan penggunaan perkataan “landowner” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“landowner”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'wardrobe', term: 'wardrobe', normalizedTerm: 'wardrobe', partOfSpeech: ['noun', 'verb'],
    chineseShort: '衣橱, 衣室, 全部衣服', chineseExplanation: '衣橱, 衣室, 全部衣服是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A tall piece of furniture that provides storage space for clothes; has a door and rails or hooks for hanging clothes.',
    examples: [{ english: 'The lesson explains the meaning of wardrobe.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wardrobe” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wardrobe”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'renaissance', term: 'renaissance', normalizedTerm: 'renaissance', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '复活, 复兴, 文艺复兴；文艺复兴的', chineseExplanation: '复活, 复兴, 文艺复兴；文艺复兴的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The period of European history at the close of the Middle Ages and the rise of the modern world; a cultural rebirth from the 14th through the middle of the 17th centuries.',
    examples: [{ english: 'The lesson explains the meaning of renaissance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “renaissance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“renaissance”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'portable', term: 'portable', normalizedTerm: 'portable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '可携带的, 可搬运的, 可移动的；可移植的', chineseExplanation: '可携带的, 可搬运的, 可移动的；可移植的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A small light typewriter; usually with a case in which it can be carried.',
    examples: [{ english: 'The passage uses portable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “portable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“portable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'variant', term: 'variant', normalizedTerm: 'variant', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '变体, 异体；不同的, 有差别的', chineseExplanation: '变体, 异体；不同的, 有差别的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Differing from a norm or standard.',
    examples: [{ english: 'The lesson explains the meaning of variant.', malay: 'Ayat ini menunjukkan penggunaan perkataan “variant” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“variant”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'memorandum', term: 'memorandum', normalizedTerm: 'memorandum', partOfSpeech: ['noun'],
    chineseShort: '备忘录, 外交备忘录, 交易备忘录；备忘录, 便笺, 便函', chineseExplanation: '备忘录, 外交备忘录, 交易备忘录；备忘录, 便笺, 便函是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A written proposal or reminder.',
    examples: [{ english: 'The lesson explains the meaning of memorandum.', malay: 'Ayat ini menunjukkan penggunaan perkataan “memorandum” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“memorandum”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'waiter', term: 'waiter', normalizedTerm: 'waiter', partOfSpeech: ['noun', 'verb'],
    chineseShort: '侍者', chineseExplanation: '侍者是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person whose occupation is to serve at table (as in a restaurant).',
    examples: [{ english: 'The lesson explains the meaning of waiter.', malay: 'Ayat ini menunjukkan penggunaan perkataan “waiter” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“waiter”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'disciplinary', term: 'disciplinary', normalizedTerm: 'disciplinary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '训练的, 纪律的, 训诫的；纪律的, 惩戒性的', chineseExplanation: '训练的, 纪律的, 训诫的；纪律的, 惩戒性的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Relating to discipline in behaviour.',
    examples: [{ english: 'The passage uses disciplinary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disciplinary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“disciplinary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'angrily', term: 'angrily', normalizedTerm: 'angrily', partOfSpeech: ['adverb'],
    chineseShort: '愤怒地', chineseExplanation: '愤怒地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'With anger.',
    examples: [{ english: 'The speaker used angrily to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “angrily” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“angrily”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'jam', term: 'jam', normalizedTerm: 'jam', partOfSpeech: ['noun', 'verb'],
    chineseShort: '果酱, 拥塞之物, 堵塞, 困境；挤进, 使塞满, 混杂, 压碎, 使堵塞', chineseExplanation: '果酱, 拥塞之物, 堵塞, 困境；挤进, 使塞满, 混杂, 压碎, 使堵塞是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Preserve of crushed fruit.',
    examples: [{ english: 'The lesson explains the meaning of jam.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jam” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jam”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'empathy', term: 'empathy', normalizedTerm: 'empathy', partOfSpeech: ['noun'],
    chineseShort: '同理心；共情', chineseExplanation: '理解并体会他人感受、处境或观点的能力。', englishDefinition: 'The ability to understand and share another person\'s feelings or perspective.',
    examples: [{ english: 'Good managers show empathy towards their staff.', malay: 'Ayat ini menunjukkan penggunaan perkataan “empathy” dalam konteks Bahasa Inggeris British.', chinese: '优秀的管理者会对员工表现出同理心。' }], level: 3, cefr: 'B2', categories: ['Business', 'Daily English'],
  },
  {
    id: 'misconception', term: 'misconception', normalizedTerm: 'misconception', partOfSpeech: ['noun'],
    chineseShort: '误解；错误观念', chineseExplanation: '因理解不准确而形成的错误想法或看法。', englishDefinition: 'A mistaken belief or idea caused by incorrect understanding.',
    examples: [{ english: 'The article corrects a common misconception about nutrition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “misconception” dalam konteks Bahasa Inggeris British.', chinese: '这篇文章纠正了一个关于营养的常见误解。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'recount', term: 'recount', normalizedTerm: 'recount', partOfSpeech: ['verb', 'noun'],
    chineseShort: '详述, 叙述, 重新计算；重新计算', chineseExplanation: '详述, 叙述, 重新计算；重新计算是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An additional (usually a second) count; especially of the votes in a close election.',
    examples: [{ english: 'The example shows how to use the verb recount.', malay: 'Ayat ini menunjukkan penggunaan perkataan “recount” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“recount”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'optical', term: 'optical', normalizedTerm: 'optical', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '眼睛的, 视觉的, 光学的；光学上的, 光学的', chineseExplanation: '眼睛的, 视觉的, 光学的；光学上的, 光学的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of or relating to or involving light or optics.',
    examples: [{ english: 'The passage uses optical to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “optical” dalam konteks Bahasa Inggeris British.', chinese: '文章用“optical”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'paradox', term: 'paradox', normalizedTerm: 'paradox', partOfSpeech: ['noun'],
    chineseShort: '悖论；矛盾现象', chineseExplanation: '看似自相矛盾，但可能揭示某种事实或道理的说法或情况。', englishDefinition: 'A statement or situation that seems contradictory but may reveal a truth.',
    examples: [{ english: 'It is a paradox that more choice can make decisions harder.', malay: 'Ayat ini menunjukkan penggunaan perkataan “paradox” dalam konteks Bahasa Inggeris British.', chinese: '选择越多反而越难决定，这是一种悖论。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'glare', term: 'glare', normalizedTerm: 'glare', partOfSpeech: ['noun', 'verb'],
    chineseShort: '闪耀光, 刺眼；发眩光, 瞪视', chineseExplanation: '闪耀光, 刺眼；发眩光, 瞪视是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A light within the field of vision that is brighter than the brightness to which the eyes are adapted.',
    examples: [{ english: 'The lesson explains the meaning of glare.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glare” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“glare”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'conceptual', term: 'conceptual', normalizedTerm: 'conceptual', partOfSpeech: ['adjective'],
    chineseShort: '概念的；概念的', chineseExplanation: '概念的；概念的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Being or characterised by concepts or their formation.',
    examples: [{ english: 'The passage uses conceptual to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conceptual” dalam konteks Bahasa Inggeris British.', chinese: '文章用“conceptual”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'visa', term: 'visa', normalizedTerm: 'visa', partOfSpeech: ['noun', 'verb'],
    chineseShort: '签证；签发', chineseExplanation: '签证；签发是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An endorsement made in a passport that allows the bearer to enter the country issuing it.',
    examples: [{ english: 'The lesson explains the meaning of visa.', malay: 'Ayat ini menunjukkan penggunaan perkataan “visa” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“visa”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'overhead', term: 'overhead', normalizedTerm: 'overhead', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '经常开支, 普通用费, 天花板；在头上的, 高架的', chineseExplanation: '经常开支, 普通用费, 天花板；在头上的, 高架的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(nautical) the top surface of an enclosed space on a ship.',
    examples: [{ english: 'The passage uses overhead to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overhead” dalam konteks Bahasa Inggeris British.', chinese: '文章用“overhead”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'vivid', term: 'vivid', normalizedTerm: 'vivid', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '生动的, 鲜明的, 鲜艳的, 活泼的, 逼真的, 清晰的', chineseExplanation: '生动的, 鲜明的, 鲜艳的, 活泼的, 逼真的, 清晰的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Having the clarity and freshness of immediate experience.',
    examples: [{ english: 'The passage uses vivid to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vivid” dalam konteks Bahasa Inggeris British.', chinese: '文章用“vivid”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'warden', term: 'warden', normalizedTerm: 'warden', partOfSpeech: ['noun', 'verb'],
    chineseShort: '典狱官, 渔猎法监督官, 看守人；看守人, 监护人, 管理员', chineseExplanation: '典狱官, 渔猎法监督官, 看守人；看守人, 监护人, 管理员是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The chief official in charge of a prison.',
    examples: [{ english: 'The lesson explains the meaning of warden.', malay: 'Ayat ini menunjukkan penggunaan perkataan “warden” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“warden”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'poison', term: 'poison', normalizedTerm: 'poison', partOfSpeech: ['noun', 'verb'],
    chineseShort: '毒药, 毒, 毒物, 有毒害的事物；毒害, 毒杀, 使中毒', chineseExplanation: '毒药, 毒, 毒物, 有毒害的事物；毒害, 毒杀, 使中毒是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any substance that causes injury or illness or death of a living organism.',
    examples: [{ english: 'The lesson explains the meaning of poison.', malay: 'Ayat ini menunjukkan penggunaan perkataan “poison” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“poison”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'indulge', term: 'indulge', normalizedTerm: 'indulge', partOfSpeech: ['verb'],
    chineseShort: '纵情于, 使高兴, 放任, 迁就；沉溺', chineseExplanation: '纵情于, 使高兴, 放任, 迁就；沉溺是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Give free rein to.',
    examples: [{ english: 'The example shows how to use the verb indulge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “indulge” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“indulge”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'disguise', term: 'disguise', normalizedTerm: 'disguise', partOfSpeech: ['noun', 'verb'],
    chineseShort: '假面目, 假装；假装, 隐瞒', chineseExplanation: '假面目, 假装；假装, 隐瞒是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An outward semblance that misrepresents the true nature of something.',
    examples: [{ english: 'The lesson explains the meaning of disguise.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disguise” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disguise”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'obsession', term: 'obsession', normalizedTerm: 'obsession', partOfSpeech: ['noun'],
    chineseShort: '困扰, 困扰人的情绪；强迫观念', chineseExplanation: '困扰, 困扰人的情绪；强迫观念是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An unhealthy and compulsive preoccupation with something or someone.',
    examples: [{ english: 'The lesson explains the meaning of obsession.', malay: 'Ayat ini menunjukkan penggunaan perkataan “obsession” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“obsession”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'obscure', term: 'obscure', normalizedTerm: 'obscure', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '模糊的, 昏暗的, 难解的, 晦涩的, 偏僻的, 微贱的, 无名的；使变暗, 隐藏, 使变模糊, 使难解', chineseExplanation: '模糊的, 昏暗的, 难解的, 晦涩的, 偏僻的, 微贱的, 无名的；使变暗, 隐藏, 使变模糊, 使难解是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make less visible or unclear.',
    examples: [{ english: 'The passage uses obscure to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “obscure” dalam konteks Bahasa Inggeris British.', chinese: '文章用“obscure”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'melody', term: 'melody', normalizedTerm: 'melody', partOfSpeech: ['noun'],
    chineseShort: '曲子, 美妙音乐, 曲调', chineseExplanation: '曲子, 美妙音乐, 曲调是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The perception of pleasant arrangements of musical notes.',
    examples: [{ english: 'The lesson explains the meaning of melody.', malay: 'Ayat ini menunjukkan penggunaan perkataan “melody” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“melody”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'memoir', term: 'memoir', normalizedTerm: 'memoir', partOfSpeech: ['noun'],
    chineseShort: '传记, 实录, 追思录, 回忆录, 自传；研究报告', chineseExplanation: '传记, 实录, 追思录, 回忆录, 自传；研究报告是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An account of the author\'s personal experiences.',
    examples: [{ english: 'The lesson explains the meaning of memoir.', malay: 'Ayat ini menunjukkan penggunaan perkataan “memoir” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“memoir”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'salesman', term: 'salesman', normalizedTerm: 'salesman', partOfSpeech: ['noun'],
    chineseShort: '售货员, 推销员；售货员, 店员, 推销员', chineseExplanation: '售货员, 推销员；售货员, 店员, 推销员是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A man salesperson.',
    examples: [{ english: 'The lesson explains the meaning of salesman.', malay: 'Ayat ini menunjukkan penggunaan perkataan “salesman” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“salesman”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'unreasonable', term: 'unreasonable', normalizedTerm: 'unreasonable', partOfSpeech: ['adjective'],
    chineseShort: '不合理的, 过度的, 不切实际的；不讲道理的, 非理智的, 不合理的', chineseExplanation: '不合理的, 过度的, 不切实际的；不讲道理的, 非理智的, 不合理的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not reasonable; not showing good judgement.',
    examples: [{ english: 'The passage uses unreasonable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unreasonable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unreasonable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'meadow', term: 'meadow', normalizedTerm: 'meadow', partOfSpeech: ['noun', 'verb'],
    chineseShort: '草地, 牧场', chineseExplanation: '草地, 牧场是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A field where grass or alfalfa are grown to be made into hay.',
    examples: [{ english: 'The lesson explains the meaning of meadow.', malay: 'Ayat ini menunjukkan penggunaan perkataan “meadow” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“meadow”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'eldest', term: 'eldest', normalizedTerm: 'eldest', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '最年长的, 排行中第一的；最年长者, 排行中第一者', chineseExplanation: '最年长的, 排行中第一的；最年长者, 排行中第一者是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The offspring who came first in the order of birth s first in order of birth.',
    examples: [{ english: 'The passage uses eldest to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “eldest” dalam konteks Bahasa Inggeris British.', chinese: '文章用“eldest”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'plug', term: 'plug', normalizedTerm: 'plug', partOfSpeech: ['noun', 'verb'],
    chineseShort: '塞子, 栓, 插头；插入, 塞住, 接插头', chineseExplanation: '塞子, 栓, 插头；插入, 塞住, 接插头是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Blockage consisting of an object designed to fill a hole tightly.',
    examples: [{ english: 'The lesson explains the meaning of plug.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plug” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plug”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'wallet', term: 'wallet', normalizedTerm: 'wallet', partOfSpeech: ['noun'],
    chineseShort: '皮夹；皮包, 皮夹, 钱袋', chineseExplanation: '皮夹；皮包, 皮夹, 钱袋是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A pocket-size case for holding papers and paper money.',
    examples: [{ english: 'The lesson explains the meaning of wallet.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wallet” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wallet”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'uneasy', term: 'uneasy', normalizedTerm: 'uneasy', partOfSpeech: ['adjective'],
    chineseShort: '心神不安的, 不自在的, 不稳定的, 不舒服的', chineseExplanation: '心神不安的, 不自在的, 不稳定的, 不舒服的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Lacking a sense of security or affording no ease or reassurance.',
    examples: [{ english: 'The passage uses uneasy to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “uneasy” dalam konteks Bahasa Inggeris British.', chinese: '文章用“uneasy”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'wildly', term: 'wildly', normalizedTerm: 'wildly', partOfSpeech: ['adverb'],
    chineseShort: '狂暴地, 激动地, 狂热地, 鲁莽地, 轻率地', chineseExplanation: '狂暴地, 激动地, 狂热地, 鲁莽地, 轻率地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'To an extreme or greatly exaggerated degree.',
    examples: [{ english: 'The speaker used wildly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wildly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“wildly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'reluctantly', term: 'reluctantly', normalizedTerm: 'reluctantly', partOfSpeech: ['adverb'],
    chineseShort: '不情愿地, 勉强地', chineseExplanation: '不情愿地, 勉强地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'With reluctance.',
    examples: [{ english: 'The speaker used reluctantly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reluctantly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“reluctantly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vaguely', term: 'vaguely', normalizedTerm: 'vaguely', partOfSpeech: ['adverb'],
    chineseShort: '含糊地, 暧昧地', chineseExplanation: '含糊地, 暧昧地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In a vague way.',
    examples: [{ english: 'The speaker used vaguely to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vaguely” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“vaguely”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unusually', term: 'unusually', normalizedTerm: 'unusually', partOfSpeech: ['adverb'],
    chineseShort: '不寻常地, 异乎寻常地, 非常', chineseExplanation: '不寻常地, 异乎寻常地, 非常是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'To a remarkable degree or extent.',
    examples: [{ english: 'The speaker used unusually to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unusually” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“unusually”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reluctance', term: 'reluctance', normalizedTerm: 'reluctance', partOfSpeech: ['noun'],
    chineseShort: '不情愿, 勉强；磁阻', chineseExplanation: '不情愿, 勉强；磁阻是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(physics) opposition to magnetic flux (analogous to electric resistance).',
    examples: [{ english: 'The lesson explains the meaning of reluctance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reluctance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reluctance”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'quantum', term: 'quantum', normalizedTerm: 'quantum', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '量, 量子；量子', chineseExplanation: '量, 量子；量子是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A discrete amount of something that is analogous to the quantities in quantum theory.',
    examples: [{ english: 'The lesson explains the meaning of quantum.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quantum” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quantum”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'con', term: 'con', normalizedTerm: 'con', partOfSpeech: ['noun', 'verb'],
    chineseShort: '精读, 仔细研究, 默记；反面地, 从反面', chineseExplanation: '精读, 仔细研究, 默记；反面地, 从反面是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An argument opposed to a proposal.',
    examples: [{ english: 'The lesson explains the meaning of con.', malay: 'Ayat ini menunjukkan penggunaan perkataan “con” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“con”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'feast', term: 'feast', normalizedTerm: 'feast', partOfSpeech: ['noun', 'verb'],
    chineseShort: '宴会, 酒席, 享受, 节日；款待, 享乐, 请客', chineseExplanation: '宴会, 酒席, 享受, 节日；款待, 享乐, 请客是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Something experienced with great delight.',
    examples: [{ english: 'The lesson explains the meaning of feast.', malay: 'Ayat ini menunjukkan penggunaan perkataan “feast” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“feast”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'indictment', term: 'indictment', normalizedTerm: 'indictment', partOfSpeech: ['noun'],
    chineseShort: '起诉, 控告, 起诉状；起诉书', chineseExplanation: '起诉, 控告, 起诉状；起诉书是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A formal document written for a prosecuting attorney charging a person with some offence.',
    examples: [{ english: 'The lesson explains the meaning of indictment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “indictment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“indictment”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'interpreter', term: 'interpreter', normalizedTerm: 'interpreter', partOfSpeech: ['noun'],
    chineseShort: '直译程序, 解释者, 口译者, 注释器；注释器', chineseExplanation: '直译程序, 解释者, 口译者, 注释器；注释器是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Someone who mediates between speakers of different languages.',
    examples: [{ english: 'The lesson explains the meaning of interpreter.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interpreter” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“interpreter”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'diplomacy', term: 'diplomacy', normalizedTerm: 'diplomacy', partOfSpeech: ['noun'],
    chineseShort: '外交, 外交手腕, 交际手段；外交, 外交手腕, 权谋', chineseExplanation: '外交, 外交手腕, 交际手段；外交, 外交手腕, 权谋是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Negotiation between nations.',
    examples: [{ english: 'The lesson explains the meaning of diplomacy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diplomacy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“diplomacy”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unsuccessful', term: 'unsuccessful', normalizedTerm: 'unsuccessful', partOfSpeech: ['adjective'],
    chineseShort: '不成功的', chineseExplanation: '不成功的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not successful; having failed or having an unfavorable outcome.',
    examples: [{ english: 'The passage uses unsuccessful to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unsuccessful” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unsuccessful”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'instrumental', term: 'instrumental', normalizedTerm: 'instrumental', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '仪器的, 器具的, 可作为手段的；器械的', chineseExplanation: '仪器的, 器具的, 可作为手段的；器械的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Relating to or designed for or performed on musical instruments.',
    examples: [{ english: 'The passage uses instrumental to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instrumental” dalam konteks Bahasa Inggeris British.', chinese: '文章用“instrumental”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'wartime', term: 'wartime', normalizedTerm: 'wartime', partOfSpeech: ['noun'],
    chineseShort: '战时', chineseExplanation: '战时是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A period of time during which there is armed conflict.',
    examples: [{ english: 'The lesson explains the meaning of wartime.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wartime” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wartime”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'notify', term: 'notify', normalizedTerm: 'notify', partOfSpeech: ['verb'],
    chineseShort: '通知, 通告, 报告；通知', chineseExplanation: '通知, 通告, 报告；通知是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Inform (somebody) of something.',
    examples: [{ english: 'The example shows how to use the verb notify.', malay: 'Ayat ini menunjukkan penggunaan perkataan “notify” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“notify”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'intimacy', term: 'intimacy', normalizedTerm: 'intimacy', partOfSpeech: ['noun'],
    chineseShort: '亲密, 熟悉, 亲昵行为；亲近的行为, 亲密, 隐私', chineseExplanation: '亲密, 熟悉, 亲昵行为；亲近的行为, 亲密, 隐私是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Close or warm friendship n a usually secretive or illicit sexual relationship n a feeling of being intimate and belonging together.',
    examples: [{ english: 'The lesson explains the meaning of intimacy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intimacy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intimacy”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'pottery', term: 'pottery', normalizedTerm: 'pottery', partOfSpeech: ['noun'],
    chineseShort: '陶器, 陶器厂；陶器', chineseExplanation: '陶器, 陶器厂；陶器是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Ceramic ware made from clay and baked in a kiln.',
    examples: [{ english: 'The lesson explains the meaning of pottery.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pottery” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“pottery”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'indirectly', term: 'indirectly', normalizedTerm: 'indirectly', partOfSpeech: ['adverb'],
    chineseShort: '间接, 曲折, 迂回, 不直截了当, 不诚实, 不坦率；间接地', chineseExplanation: '间接, 曲折, 迂回, 不直截了当, 不诚实, 不坦率；间接地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not in a forthright manner.',
    examples: [{ english: 'The speaker used indirectly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “indirectly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“indirectly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'optional', term: 'optional', normalizedTerm: 'optional', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '可选择的, 随意的；选购的', chineseExplanation: '可选择的, 随意的；选购的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Possible but not necessary; left to personal choice.',
    examples: [{ english: 'The passage uses optional to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “optional” dalam konteks Bahasa Inggeris British.', chinese: '文章用“optional”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'haven', term: 'haven', normalizedTerm: 'haven', partOfSpeech: ['noun', 'verb'],
    chineseShort: '港, 避难所, 安息所；安置...于港中, 庇护, 入港', chineseExplanation: '港, 避难所, 安息所；安置...于港中, 庇护, 入港是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A shelter serving as a place of safety or sanctuary.',
    examples: [{ english: 'The lesson explains the meaning of haven.', malay: 'Ayat ini menunjukkan penggunaan perkataan “haven” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“haven”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'constructive', term: 'constructive', normalizedTerm: 'constructive', partOfSpeech: ['adjective'],
    chineseShort: '建设性的, 构造上的；构成的', chineseExplanation: '建设性的, 构造上的；构成的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Constructing or tending to construct or improve or promote development.',
    examples: [{ english: 'The passage uses constructive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “constructive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“constructive”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'jerk', term: 'jerk', normalizedTerm: 'jerk', partOfSpeech: ['noun', 'verb'],
    chineseShort: '性情古怪的人, 急拉, 肌肉抽搐, 牛肉干；痉挛, 急拉, 急推', chineseExplanation: '性情古怪的人, 急拉, 肌肉抽搐, 牛肉干；痉挛, 急拉, 急推是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A dull stupid fatuous person.',
    examples: [{ english: 'The lesson explains the meaning of jerk.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jerk” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jerk”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vicar', term: 'vicar', normalizedTerm: 'vicar', partOfSpeech: ['noun'],
    chineseShort: '教区牧师, 教堂主持, 代理人；代表, 代理牧师, 代理主教', chineseExplanation: '教区牧师, 教堂主持, 代理人；代表, 代理牧师, 代理主教是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A Roman Catholic priest who acts for another higher-ranking clergyman.',
    examples: [{ english: 'The lesson explains the meaning of vicar.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vicar” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vicar”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'dim', term: 'dim', normalizedTerm: 'dim', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '暗淡的, 模糊的；使暗淡', chineseExplanation: '暗淡的, 模糊的；使暗淡是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Switch (a car\'s headlights) from a higher to a lower beam.',
    examples: [{ english: 'The passage uses dim to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dim” dalam konteks Bahasa Inggeris British.', chinese: '文章用“dim”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'facial', term: 'facial', normalizedTerm: 'facial', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '美颜, 脸部按摩；脸的, 表面的, 脸部用的', chineseExplanation: '美颜, 脸部按摩；脸的, 表面的, 脸部用的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Cranial nerve that supplies facial muscles.',
    examples: [{ english: 'The passage uses facial to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “facial” dalam konteks Bahasa Inggeris British.', chinese: '文章用“facial”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'plantation', term: 'plantation', normalizedTerm: 'plantation', partOfSpeech: ['noun'],
    chineseShort: '种植园, 大农场, 植树造林, 新开垦地；栽植', chineseExplanation: '种植园, 大农场, 植树造林, 新开垦地；栽植是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An estate where cash crops are grown on a large scale (especially in tropical areas).',
    examples: [{ english: 'The lesson explains the meaning of plantation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plantation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plantation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'residue', term: 'residue', normalizedTerm: 'residue', partOfSpeech: ['noun'],
    chineseShort: '残渣, 剩余, 余数；残基', chineseExplanation: '残渣, 剩余, 余数；残基是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Matter that remains after something has been removed.',
    examples: [{ english: 'The lesson explains the meaning of residue.', malay: 'Ayat ini menunjukkan penggunaan perkataan “residue” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“residue”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'antique', term: 'antique', normalizedTerm: 'antique', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '古董, 古物；古老的, 古风的, 旧式的, 过时的', chineseExplanation: '古董, 古物；古老的, 古风的, 旧式的, 过时的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any piece of furniture or decorative object or the like produced in a former period and valuable because of its beauty or rarity.',
    examples: [{ english: 'The passage uses antique to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “antique” dalam konteks Bahasa Inggeris British.', chinese: '文章用“antique”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'toast', term: 'toast', normalizedTerm: 'toast', partOfSpeech: ['noun', 'verb'],
    chineseShort: '吐司, 烤面包, 干杯；敬酒, 烤, 使暖和', chineseExplanation: '吐司, 烤面包, 干杯；敬酒, 烤, 使暖和是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Slices of bread that have been toasted.',
    examples: [{ english: 'The lesson explains the meaning of toast.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toast” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toast”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'communism', term: 'communism', normalizedTerm: 'communism', partOfSpeech: ['noun'],
    chineseShort: '共产主义', chineseExplanation: '共产主义是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A form of socialism that abolishes private ownership.',
    examples: [{ english: 'The lesson explains the meaning of communism.', malay: 'Ayat ini menunjukkan penggunaan perkataan “communism” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“communism”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'intersection', term: 'intersection', normalizedTerm: 'intersection', partOfSpeech: ['noun'],
    chineseShort: '交集, 十字路口, 交叉点；逻辑乘', chineseExplanation: '交集, 十字路口, 交叉点；逻辑乘是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A point where lines intersect.',
    examples: [{ english: 'The lesson explains the meaning of intersection.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intersection” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intersection”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'kettle', term: 'kettle', normalizedTerm: 'kettle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '茶壶, 罐；釜体釜', chineseExplanation: '茶壶, 罐；釜体釜是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A metal pot for stewing or boiling; usually has a lid.',
    examples: [{ english: 'The lesson explains the meaning of kettle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kettle” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“kettle”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reverend', term: 'reverend', normalizedTerm: 'reverend', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '教士, 大人；应受尊敬的, 教士的', chineseExplanation: '教士, 大人；应受尊敬的, 教士的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A title of respect for a clergyman.',
    examples: [{ english: 'The lesson explains the meaning of reverend.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reverend” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reverend”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'playground', term: 'playground', normalizedTerm: 'playground', partOfSpeech: ['noun'],
    chineseShort: '运动场, 操场, 度假胜地, 活动场所', chineseExplanation: '运动场, 操场, 度假胜地, 活动场所是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Yard consisting of an outdoor area for children\'s play.',
    examples: [{ english: 'The lesson explains the meaning of playground.', malay: 'Ayat ini menunjukkan penggunaan perkataan “playground” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“playground”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'ant', term: 'ant', normalizedTerm: 'ant', partOfSpeech: ['noun', 'verb'],
    chineseShort: '蚂蚁', chineseExplanation: '蚂蚁是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Social insect living in organised colonies; characteristically the males and fertile queen have wings during breeding season; wingless sterile females are the workers.',
    examples: [{ english: 'The lesson explains the meaning of ant.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ant” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ant”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'feminine', term: 'feminine', normalizedTerm: 'feminine', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '女性的, 阴性的, 柔弱的；女性的, 雌性的', chineseExplanation: '女性的, 阴性的, 柔弱的；女性的, 雌性的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A gender that refers chiefly (but not exclusively) to females or to objects classified as female.',
    examples: [{ english: 'The passage uses feminine to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “feminine” dalam konteks Bahasa Inggeris British.', chinese: '文章用“feminine”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'inexpensive', term: 'inexpensive', normalizedTerm: 'inexpensive', partOfSpeech: ['adjective'],
    chineseShort: '便宜的, 不贵重的', chineseExplanation: '便宜的, 不贵重的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Relatively low in price or charging low prices.',
    examples: [{ english: 'The passage uses inexpensive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inexpensive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“inexpensive”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vegetation', term: 'vegetation', normalizedTerm: 'vegetation', partOfSpeech: ['noun'],
    chineseShort: '植物；贽生物, 贽疣, 增殖体', chineseExplanation: '植物；贽生物, 贽疣, 增殖体是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'All the plant life in a particular region or period.',
    examples: [{ english: 'The lesson explains the meaning of vegetation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vegetation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vegetation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'underscore', term: 'underscore', normalizedTerm: 'underscore', partOfSpeech: ['verb', 'noun'],
    chineseShort: '划线于...下；下划线', chineseExplanation: '划线于...下；下划线是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A line drawn underneath (especially under written matter).',
    examples: [{ english: 'The example shows how to use the verb underscore.', malay: 'Ayat ini menunjukkan penggunaan perkataan “underscore” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“underscore”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'wan', term: 'wan', normalizedTerm: 'wan', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '苍白的, 无血色的, 病态的, 暗淡的；变苍白', chineseExplanation: '苍白的, 无血色的, 病态的, 暗淡的；变苍白是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Become pale and sickly.',
    examples: [{ english: 'The lesson explains the meaning of wan.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wan” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wan”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'kite', term: 'kite', normalizedTerm: 'kite', partOfSpeech: ['noun', 'verb'],
    chineseShort: '风筝, 筝帆, 空头支票, 骗子；象风筝一样飞, 轻快地移动, 使用空头支票', chineseExplanation: '风筝, 筝帆, 空头支票, 骗子；象风筝一样飞, 轻快地移动, 使用空头支票是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A bank check that has been fraudulently altered to increase its face value.',
    examples: [{ english: 'The lesson explains the meaning of kite.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kite” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“kite”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'cone', term: 'cone', normalizedTerm: 'cone', partOfSpeech: ['noun', 'verb'],
    chineseShort: '圆锥体, 球果；使成锥形', chineseExplanation: '圆锥体, 球果；使成锥形是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any cone-shaped artifact.',
    examples: [{ english: 'The lesson explains the meaning of cone.', malay: 'Ayat ini menunjukkan penggunaan perkataan “cone” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“cone”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'adaptability', term: 'adaptability', normalizedTerm: 'adaptability', partOfSpeech: ['noun'],
    chineseShort: '适应能力；适应性', chineseExplanation: '根据新情况、要求或环境灵活改变的能力。', englishDefinition: 'The ability to adjust effectively to new conditions or requirements.',
    examples: [{ english: 'Adaptability is valuable in a changing workplace.', malay: 'Ayat ini menunjukkan penggunaan perkataan “adaptability” dalam konteks Bahasa Inggeris British.', chinese: '适应能力在不断变化的工作环境中很重要。' }], level: 3, cefr: 'B2', categories: ['Business', 'Academic'],
  },
  {
    id: 'forestry', term: 'forestry', normalizedTerm: 'forestry', partOfSpeech: ['noun'],
    chineseShort: '林学, 森林地；林地, 林学, 林业', chineseExplanation: '林学, 森林地；林地, 林学, 林业是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The science of planting and caring for forests and the management of growing timber.',
    examples: [{ english: 'The lesson explains the meaning of forestry.', malay: 'Ayat ini menunjukkan penggunaan perkataan “forestry” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“forestry”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'rebound', term: 'rebound', normalizedTerm: 'rebound', partOfSpeech: ['noun', 'verb'],
    chineseShort: '弹回, 返回, 产生事与愿违的结果；使弹回, 使返回', chineseExplanation: '弹回, 返回, 产生事与愿违的结果；使弹回, 使返回是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A reaction to a crisis or setback or frustration.',
    examples: [{ english: 'The lesson explains the meaning of rebound.', malay: 'Ayat ini menunjukkan penggunaan perkataan “rebound” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“rebound”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'velocity', term: 'velocity', normalizedTerm: 'velocity', partOfSpeech: ['noun'],
    chineseShort: '速度, 迅速；速度', chineseExplanation: '速度, 迅速；速度是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Distance travelled per unit time.',
    examples: [{ english: 'The lesson explains the meaning of velocity.', malay: 'Ayat ini menunjukkan penggunaan perkataan “velocity” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“velocity”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'gall', term: 'gall', normalizedTerm: 'gall', partOfSpeech: ['noun', 'verb'],
    chineseShort: '胆汁, 五倍子, 苦味, 肿痛, 恼怒, 磨损处；烦恼, 屈辱, 磨伤', chineseExplanation: '胆汁, 五倍子, 苦味, 肿痛, 恼怒, 磨损处；烦恼, 屈辱, 磨伤是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A skin sore caused by chafing.',
    examples: [{ english: 'The lesson explains the meaning of gall.', malay: 'Ayat ini menunjukkan penggunaan perkataan “gall” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“gall”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'grammatical', term: 'grammatical', normalizedTerm: 'grammatical', partOfSpeech: ['adjective'],
    chineseShort: '语法的, 合乎语法的；语法上的, 符合语法规则的, 文法上的', chineseExplanation: '语法的, 合乎语法的；语法上的, 符合语法规则的, 文法上的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of or pertaining to grammar.',
    examples: [{ english: 'The passage uses grammatical to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grammatical” dalam konteks Bahasa Inggeris British.', chinese: '文章用“grammatical”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unfamiliar', term: 'unfamiliar', normalizedTerm: 'unfamiliar', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不熟悉的', chineseExplanation: '不熟悉的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not known or well known.',
    examples: [{ english: 'The passage uses unfamiliar to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unfamiliar” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unfamiliar”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'toddler', term: 'toddler', normalizedTerm: 'toddler', partOfSpeech: ['noun'],
    chineseShort: '蹒跚行走的人, 学步的小孩, 学步的幼儿, 信步走的人', chineseExplanation: '蹒跚行走的人, 学步的小孩, 学步的幼儿, 信步走的人是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A young child.',
    examples: [{ english: 'The lesson explains the meaning of toddler.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toddler” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toddler”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'continuously', term: 'continuously', normalizedTerm: 'continuously', partOfSpeech: ['adverb'],
    chineseShort: '不断地, 连续地；连续地', chineseExplanation: '不断地, 连续地；连续地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'At every point.',
    examples: [{ english: 'The speaker used continuously to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “continuously” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“continuously”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'overtake', term: 'overtake', normalizedTerm: 'overtake', partOfSpeech: ['verb', 'noun'],
    chineseShort: '赶上, 突然降临于, 压倒, 代替', chineseExplanation: '赶上, 突然降临于, 压倒, 代替是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Catch up with and possibly overtake.',
    examples: [{ english: 'The example shows how to use the verb overtake.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overtake” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“overtake”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'revert', term: 'revert', normalizedTerm: 'revert', partOfSpeech: ['verb', 'noun'],
    chineseShort: '恢复, 复归, 回复, 还原；使回复原状, 使回转', chineseExplanation: '恢复, 复归, 回复, 还原；使回复原状, 使回转是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Go back to a previous state.',
    examples: [{ english: 'The example shows how to use the verb revert.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revert” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“revert”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'resent', term: 'resent', normalizedTerm: 'resent', partOfSpeech: ['verb'],
    chineseShort: '愤恨, 憎恶, 怨恨', chineseExplanation: '愤恨, 憎恶, 怨恨是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Feel bitter or indignant about.',
    examples: [{ english: 'The example shows how to use the verb resent.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resent” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“resent”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'bleak', term: 'bleak', normalizedTerm: 'bleak', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '萧瑟的, 荒凉的, 阴冷的', chineseExplanation: '萧瑟的, 荒凉的, 阴冷的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Unpleasantly cold and damp.',
    examples: [{ english: 'The passage uses bleak to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “bleak” dalam konteks Bahasa Inggeris British.', chinese: '文章用“bleak”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tense', term: 'tense', normalizedTerm: 'tense', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '紧张的, 拉紧的；紧张, 拉紧', chineseExplanation: '紧张的, 拉紧的；紧张, 拉紧是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A grammatical category of verbs used to express distinctions of time.',
    examples: [{ english: 'The lesson explains the meaning of tense.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tense” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tense”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'postcard', term: 'postcard', normalizedTerm: 'postcard', partOfSpeech: ['noun', 'verb'],
    chineseShort: '明信片', chineseExplanation: '明信片是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A card for sending messages by post without an envelope.',
    examples: [{ english: 'The lesson explains the meaning of postcard.', malay: 'Ayat ini menunjukkan penggunaan perkataan “postcard” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“postcard”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'disperse', term: 'disperse', normalizedTerm: 'disperse', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '分散, 传播, 散开；分散', chineseExplanation: '分散, 传播, 散开；分散是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'To cause to separate and go in different directions.',
    examples: [{ english: 'The example shows how to use the verb disperse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disperse” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“disperse”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'ponder', term: 'ponder', normalizedTerm: 'ponder', partOfSpeech: ['verb', 'noun'],
    chineseShort: '沉思, 考虑', chineseExplanation: '沉思, 考虑是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Reflect deeply on a subject.',
    examples: [{ english: 'The example shows how to use the verb ponder.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ponder” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“ponder”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'complicate', term: 'complicate', normalizedTerm: 'complicate', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '弄复杂, 使错综, 使恶化；变复杂', chineseExplanation: '弄复杂, 使错综, 使恶化；变复杂是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make more complicated.',
    examples: [{ english: 'The example shows how to use the verb complicate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “complicate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“complicate”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'sanctuary', term: 'sanctuary', normalizedTerm: 'sanctuary', partOfSpeech: ['noun'],
    chineseShort: '圣所, 耶路撒冷的神殿, 避难所；庇护所, 避难所, 教堂', chineseExplanation: '圣所, 耶路撒冷的神殿, 避难所；庇护所, 避难所, 教堂是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A consecrated place where sacred objects are kept.',
    examples: [{ english: 'The lesson explains the meaning of sanctuary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sanctuary” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“sanctuary”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unexpectedly', term: 'unexpectedly', normalizedTerm: 'unexpectedly', partOfSpeech: ['adverb'],
    chineseShort: '想不到的, 突然的, 意外的, 出乎意料的', chineseExplanation: '想不到的, 突然的, 意外的, 出乎意料的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In a way that was not expected.',
    examples: [{ english: 'The speaker used unexpectedly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unexpectedly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“unexpectedly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'kindly', term: 'kindly', normalizedTerm: 'kindly', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '和蔼的, 温和的, 爽快的；温和地, 亲切地', chineseExplanation: '和蔼的, 温和的, 爽快的；温和地, 亲切地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Pleasant and agreeable.',
    examples: [{ english: 'The speaker used kindly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kindly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“kindly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'wary', term: 'wary', normalizedTerm: 'wary', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '谨慎的, 小心的, 机警的, 周到的, 唯恐的', chineseExplanation: '谨慎的, 小心的, 机警的, 周到的, 唯恐的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Marked by keen caution and watchful prudence.',
    examples: [{ english: 'The passage uses wary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“wary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'memorable', term: 'memorable', normalizedTerm: 'memorable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '值得纪念的, 难忘的', chineseExplanation: '值得纪念的, 难忘的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Worth remembering.',
    examples: [{ english: 'The passage uses memorable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “memorable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“memorable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'congratulate', term: 'congratulate', normalizedTerm: 'congratulate', partOfSpeech: ['verb'],
    chineseShort: '祝贺, 庆贺', chineseExplanation: '祝贺, 庆贺是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Express congratulations.',
    examples: [{ english: 'The example shows how to use the verb congratulate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “congratulate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“congratulate”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'elevate', term: 'elevate', normalizedTerm: 'elevate', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '举起, 提拔, 鼓舞', chineseExplanation: '举起, 提拔, 鼓舞是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Give a promotion to or assign to a higher position v raise from a lower to a higher position v raise in rank or condition.',
    examples: [{ english: 'The example shows how to use the verb elevate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elevate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“elevate”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'plaster', term: 'plaster', normalizedTerm: 'plaster', partOfSpeech: ['noun', 'verb'],
    chineseShort: '石膏, 灰泥, 安慰用品, 膏药；涂以灰泥, 敷以膏药, 掩饰, 使平服, 彻底击败, 减轻, 粘贴', chineseExplanation: '石膏, 灰泥, 安慰用品, 膏药；涂以灰泥, 敷以膏药, 掩饰, 使平服, 彻底击败, 减轻, 粘贴是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A mixture of lime or gypsum with sand and water; hardens into a smooth solid; used to cover walls and ceilings.',
    examples: [{ english: 'The lesson explains the meaning of plaster.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plaster” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plaster”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'apprentice', term: 'apprentice', normalizedTerm: 'apprentice', partOfSpeech: ['noun', 'verb'],
    chineseShort: '学徒, 生手；使做学徒', chineseExplanation: '学徒, 生手；使做学徒是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Works for an expert to learn a trade.',
    examples: [{ english: 'The lesson explains the meaning of apprentice.', malay: 'Ayat ini menunjukkan penggunaan perkataan “apprentice” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“apprentice”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'solitary', term: 'solitary', normalizedTerm: 'solitary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '独居者；孤独的, 独居的', chineseExplanation: '独居者；孤独的, 独居的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Confinement of a prisoner in isolation from other prisoners n one who lives in solitude s characterised by or preferring solitude s of plants and animals;.',
    examples: [{ english: 'The passage uses solitary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “solitary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“solitary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'oversight', term: 'oversight', normalizedTerm: 'oversight', partOfSpeech: ['noun', 'verb'],
    chineseShort: '勘漏, 失察, 失败, 照料；监督权', chineseExplanation: '勘漏, 失察, 失败, 照料；监督权是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An unintentional omission resulting from failure to notice something.',
    examples: [{ english: 'The lesson explains the meaning of oversight.', malay: 'Ayat ini menunjukkan penggunaan perkataan “oversight” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“oversight”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unbelievable', term: 'unbelievable', normalizedTerm: 'unbelievable', partOfSpeech: ['adjective'],
    chineseShort: '难以置信的', chineseExplanation: '难以置信的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Beyond belief or understanding s having a probability too low to inspire belief.',
    examples: [{ english: 'The passage uses unbelievable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unbelievable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unbelievable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'jewel', term: 'jewel', normalizedTerm: 'jewel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '珠宝, 贵重物, 镶珠宝的饰物；饰以珠宝, 镶以宝石', chineseExplanation: '珠宝, 贵重物, 镶珠宝的饰物；饰以珠宝, 镶以宝石是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A precious or semiprecious stone incorporated into a piece of jewellery.',
    examples: [{ english: 'The lesson explains the meaning of jewel.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jewel” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jewel”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'nominal', term: 'nominal', normalizedTerm: 'nominal', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '名义上的, 名字的, 有名无实的, 稍许的；名词性词', chineseExplanation: '名义上的, 名字的, 有名无实的, 稍许的；名词性词是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Relating to or constituting or bearing or giving a name.',
    examples: [{ english: 'The passage uses nominal to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “nominal” dalam konteks Bahasa Inggeris British.', chinese: '文章用“nominal”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'overly', term: 'overly', normalizedTerm: 'overly', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '过度地, 极度地', chineseExplanation: '过度地, 极度地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'To a degree exceeding normal or proper limits.',
    examples: [{ english: 'The speaker used overly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“overly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'disposition', term: 'disposition', normalizedTerm: 'disposition', partOfSpeech: ['noun', 'verb'],
    chineseShort: '性情, 处置, 处理, 布置；素因, 性情', chineseExplanation: '性情, 处置, 处理, 布置；素因, 性情是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Your usual mood.',
    examples: [{ english: 'The lesson explains the meaning of disposition.', malay: 'Ayat ini menunjukkan penggunaan perkataan “disposition” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“disposition”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'beneficiary', term: 'beneficiary', normalizedTerm: 'beneficiary', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '受惠者, 受益人；受封的', chineseExplanation: '受惠者, 受益人；受封的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The recipient of funds or other benefits.',
    examples: [{ english: 'The lesson explains the meaning of beneficiary.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beneficiary” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“beneficiary”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'appropriately', term: 'appropriately', normalizedTerm: 'appropriately', partOfSpeech: ['adverb'],
    chineseShort: '适当的, 恰如其分的, 恰当的, 合适的', chineseExplanation: '适当的, 恰如其分的, 恰当的, 合适的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In an appropriate manner.',
    examples: [{ english: 'The speaker used appropriately to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appropriately” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“appropriately”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'dial', term: 'dial', normalizedTerm: 'dial', partOfSpeech: ['noun', 'verb'],
    chineseShort: '刻度盘, 钟面, 转盘；拨', chineseExplanation: '刻度盘, 钟面, 转盘；拨是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The face of a timepiece; graduated to show the hours.',
    examples: [{ english: 'The lesson explains the meaning of dial.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dial” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dial”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'hail', term: 'hail', normalizedTerm: 'hail', partOfSpeech: ['noun', 'verb'],
    chineseShort: '冰雹, 致敬, 欢呼, 招呼；向...欢呼, 致敬, 招呼, 使象下雹样落下', chineseExplanation: '冰雹, 致敬, 欢呼, 招呼；向...欢呼, 致敬, 招呼, 使象下雹样落下是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Precipitation of ice pellets when there are strong rising air currents.',
    examples: [{ english: 'The lesson explains the meaning of hail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hail” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hail”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'zoo', term: 'zoo', normalizedTerm: 'zoo', partOfSpeech: ['noun'],
    chineseShort: '动物园', chineseExplanation: '动物园是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The facility where wild animals are housed for exhibition.',
    examples: [{ english: 'The lesson explains the meaning of zoo.', malay: 'Ayat ini menunjukkan penggunaan perkataan “zoo” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“zoo”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'compartment', term: 'compartment', normalizedTerm: 'compartment', partOfSpeech: ['noun', 'verb'],
    chineseShort: '分隔间, 卧车包房, 防水舱隔；隔室, 隔间', chineseExplanation: '分隔间, 卧车包房, 防水舱隔；隔室, 隔间是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A space into which an area is subdivided.',
    examples: [{ english: 'The lesson explains the meaning of compartment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compartment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“compartment”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'kindergarten', term: 'kindergarten', normalizedTerm: 'kindergarten', partOfSpeech: ['noun'],
    chineseShort: '幼稚园', chineseExplanation: '幼稚园是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A preschool for children age 4 to 6 to prepare them for primary school.',
    examples: [{ english: 'The lesson explains the meaning of kindergarten.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kindergarten” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“kindergarten”的含义。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'quilt', term: 'quilt', normalizedTerm: 'quilt', partOfSpeech: ['noun', 'verb'],
    chineseShort: '棉被；加软衬料后缝制, 东拼西凑地编', chineseExplanation: '棉被；加软衬料后缝制, 东拼西凑地编是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Bedding made of two layers of cloth filled with stuffing and stitched together.',
    examples: [{ english: 'The lesson explains the meaning of quilt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “quilt” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“quilt”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tomb', term: 'tomb', normalizedTerm: 'tomb', partOfSpeech: ['noun', 'verb'],
    chineseShort: '坟墓, 死亡；埋葬', chineseExplanation: '坟墓, 死亡；埋葬是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A place for the burial of a corpse (especially beneath the ground and marked by a tombstone).',
    examples: [{ english: 'The lesson explains the meaning of tomb.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tomb” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tomb”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unrest', term: 'unrest', normalizedTerm: 'unrest', partOfSpeech: ['noun'],
    chineseShort: '不安的状态, 动荡的局面；不安', chineseExplanation: '不安的状态, 动荡的局面；不安是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A feeling of restless agitation.',
    examples: [{ english: 'The lesson explains the meaning of unrest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unrest” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“unrest”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'ham', term: 'ham', normalizedTerm: 'ham', partOfSpeech: ['noun', 'verb'],
    chineseShort: '火腿, 后腿, 笨拙演员；过火的, 做作的', chineseExplanation: '火腿, 后腿, 笨拙演员；过火的, 做作的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Meat cut from the thigh of a hog (usually smoked).',
    examples: [{ english: 'The lesson explains the meaning of ham.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ham” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ham”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'fellowship', term: 'fellowship', normalizedTerm: 'fellowship', partOfSpeech: ['noun', 'verb'],
    chineseShort: '伙伴关系, 共同参与, 团体, 奖学金, 友谊；合伙关系, 研究员薪金, 研究员基金', chineseExplanation: '伙伴关系, 共同参与, 团体, 奖学金, 友谊；合伙关系, 研究员薪金, 研究员基金是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Money granted (by a university or foundation or other agency) for advanced study or research.',
    examples: [{ english: 'The lesson explains the meaning of fellowship.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fellowship” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fellowship”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'velvet', term: 'velvet', normalizedTerm: 'velvet', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '天鹅绒；天鹅绒的', chineseExplanation: '天鹅绒；天鹅绒的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A silky densely piled fabric with a plain back.',
    examples: [{ english: 'The lesson explains the meaning of velvet.', malay: 'Ayat ini menunjukkan penggunaan perkataan “velvet” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“velvet”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'distortion', term: 'distortion', normalizedTerm: 'distortion', partOfSpeech: ['noun'],
    chineseShort: '扭曲, 变形, 曲解；畸变', chineseExplanation: '扭曲, 变形, 曲解；畸变是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A change for the worse.',
    examples: [{ english: 'The lesson explains the meaning of distortion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distortion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“distortion”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'distraction', term: 'distraction', normalizedTerm: 'distraction', partOfSpeech: ['noun'],
    chineseShort: '娱乐, 分心的事物, 分心；注意力分散, 内脱位, 牙弓过宽', chineseExplanation: '娱乐, 分心的事物, 分心；注意力分散, 内脱位, 牙弓过宽是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Mental turmoil.',
    examples: [{ english: 'The lesson explains the meaning of distraction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distraction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“distraction”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'foam', term: 'foam', normalizedTerm: 'foam', partOfSpeech: ['noun', 'verb'],
    chineseShort: '泡沫, 水沫, 泡沫材料；起泡沫, 吐白沫', chineseExplanation: '泡沫, 水沫, 泡沫材料；起泡沫, 吐白沫是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A mass of small bubbles formed in or on a liquid.',
    examples: [{ english: 'The lesson explains the meaning of foam.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foam” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“foam”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'blonde', term: 'blonde', normalizedTerm: 'blonde', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '亚麻色的, 淡色的, 白肤金发碧眼的, 白里透红的, 白皙的, 淡黄色的；肤色白皙的金发女人', chineseExplanation: '亚麻色的, 淡色的, 白肤金发碧眼的, 白里透红的, 白皙的, 淡黄色的；肤色白皙的金发女人是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person with fair skin and hair; a light greyish yellow to near white; having light-coloured skin and hair and usually blue or grey eyes.',
    examples: [{ english: 'The passage uses blonde to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blonde” dalam konteks Bahasa Inggeris British.', chinese: '文章用“blonde”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'anticipation', term: 'anticipation', normalizedTerm: 'anticipation', partOfSpeech: ['noun'],
    chineseShort: '预期, 预料；提前出现', chineseExplanation: '预期, 预料；提前出现是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An expectation.',
    examples: [{ english: 'The lesson explains the meaning of anticipation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “anticipation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“anticipation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'hastily', term: 'hastily', normalizedTerm: 'hastily', partOfSpeech: ['adverb'],
    chineseShort: '匆忙地, 急速地, 急躁地', chineseExplanation: '匆忙地, 急速地, 急躁地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In a hurried or hasty manner.',
    examples: [{ english: 'The speaker used hastily to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hastily” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“hastily”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'meditation', term: 'meditation', normalizedTerm: 'meditation', partOfSpeech: ['noun'],
    chineseShort: '沉思, 冥想', chineseExplanation: '沉思, 冥想是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Continuous and profound contemplation or musing on a subject or series of subjects of a deep or abstruse nature.',
    examples: [{ english: 'The lesson explains the meaning of meditation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “meditation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“meditation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'fearful', term: 'fearful', normalizedTerm: 'fearful', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '可怕的, 恐怕的, 担心的', chineseExplanation: '可怕的, 恐怕的, 担心的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Experiencing or showing fear.',
    examples: [{ english: 'The passage uses fearful to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fearful” dalam konteks Bahasa Inggeris British.', chinese: '文章用“fearful”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'groan', term: 'groan', normalizedTerm: 'groan', partOfSpeech: ['noun', 'verb'],
    chineseShort: '呻吟, 叹息；呻吟, 抱怨, 受压迫', chineseExplanation: '呻吟, 叹息；呻吟, 抱怨, 受压迫是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An utterance expressing pain or disapproval.',
    examples: [{ english: 'The lesson explains the meaning of groan.', malay: 'Ayat ini menunjukkan penggunaan perkataan “groan” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“groan”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'novelist', term: 'novelist', normalizedTerm: 'novelist', partOfSpeech: ['noun'],
    chineseShort: '小说家', chineseExplanation: '小说家是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'One who writes novels.',
    examples: [{ english: 'The lesson explains the meaning of novelist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “novelist” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“novelist”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'saddle', term: 'saddle', normalizedTerm: 'saddle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '鞍, 马鞍, 车座, 鞍状物；装以马鞍, 使负担', chineseExplanation: '鞍, 马鞍, 车座, 鞍状物；装以马鞍, 使负担是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A seat for the rider of a horse or camel.',
    examples: [{ english: 'The lesson explains the meaning of saddle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “saddle” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“saddle”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'restrictive', term: 'restrictive', normalizedTerm: 'restrictive', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '限制的, 约束的, 限定的；限制词', chineseExplanation: '限制的, 约束的, 限定的；限制词是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Serving to restrict.',
    examples: [{ english: 'The passage uses restrictive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “restrictive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“restrictive”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'lazy', term: 'lazy', normalizedTerm: 'lazy', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '懒惰的, 怠惰的, 缓慢的；懒散', chineseExplanation: '懒惰的, 怠惰的, 缓慢的；懒散是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Moving slowly and gently.',
    examples: [{ english: 'The passage uses lazy to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lazy” dalam konteks Bahasa Inggeris British.', chinese: '文章用“lazy”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'consortium', term: 'consortium', normalizedTerm: 'consortium', partOfSpeech: ['noun'],
    chineseShort: '协会, 合伙, 财团；合作, 联合, 财团', chineseExplanation: '协会, 合伙, 财团；合作, 联合, 财团是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An association of companies for some definite purpose.',
    examples: [{ english: 'The lesson explains the meaning of consortium.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consortium” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“consortium”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'questionable', term: 'questionable', normalizedTerm: 'questionable', partOfSpeech: ['adjective'],
    chineseShort: '可疑的；可疑的, 有问题的, 不可靠的', chineseExplanation: '可疑的；可疑的, 有问题的, 不可靠的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Subject to question.',
    examples: [{ english: 'The passage uses questionable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “questionable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“questionable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'intercourse', term: 'intercourse', normalizedTerm: 'intercourse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '交往, 交流；交际, 往来', chineseExplanation: '交往, 交流；交际, 往来是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Communication between individuals.',
    examples: [{ english: 'The lesson explains the meaning of intercourse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “intercourse” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“intercourse”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'overview', term: 'overview', normalizedTerm: 'overview', partOfSpeech: ['noun', 'verb'],
    chineseShort: '概述, 概观, 总的看法；概述', chineseExplanation: '概述, 概观, 总的看法；概述是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A general summary of a subject.',
    examples: [{ english: 'The lesson explains the meaning of overview.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overview” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“overview”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'sandy', term: 'sandy', normalizedTerm: 'sandy', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '沙的, 沙地的, 多沙的', chineseExplanation: '沙的, 沙地的, 多沙的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of hair colour; pale yellowish to yellowish brown a resembling or containing or abounding in sand; or growing in sandy areas.',
    examples: [{ english: 'The passage uses sandy to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “sandy” dalam konteks Bahasa Inggeris British.', chinese: '文章用“sandy”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'entitlement', term: 'entitlement', normalizedTerm: 'entitlement', partOfSpeech: ['noun'],
    chineseShort: '权利；权利', chineseExplanation: '权利；权利是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Right granted by law or contract (especially a right to benefits).',
    examples: [{ english: 'The lesson explains the meaning of entitlement.', malay: 'Ayat ini menunjukkan penggunaan perkataan “entitlement” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“entitlement”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'emit', term: 'emit', normalizedTerm: 'emit', partOfSpeech: ['verb'],
    chineseShort: '发出, 放射, 发表, 散发, 发行；放射', chineseExplanation: '发出, 放射, 发表, 散发, 发行；放射是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Expel (gases or odors).',
    examples: [{ english: 'The example shows how to use the verb emit.', malay: 'Ayat ini menunjukkan penggunaan perkataan “emit” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“emit”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'noun', term: 'noun', normalizedTerm: 'noun', partOfSpeech: ['noun', 'verb'],
    chineseShort: '名词', chineseExplanation: '名词是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A content word that can be used to refer to a person, place, thing, quality, or action.',
    examples: [{ english: 'The lesson explains the meaning of noun.', malay: 'Ayat ini menunjukkan penggunaan perkataan “noun” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“noun”的含义。' }], level: 3, cefr: 'B2', categories: ['School'],
  },
  {
    id: 'anthropologist', term: 'anthropologist', normalizedTerm: 'anthropologist', partOfSpeech: ['noun'],
    chineseShort: '人类学家', chineseExplanation: '人类学家是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A social scientist who specialises in anthropology.',
    examples: [{ english: 'The lesson explains the meaning of anthropologist.', malay: 'Ayat ini menunjukkan penggunaan perkataan “anthropologist” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“anthropologist”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'potent', term: 'potent', normalizedTerm: 'potent', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '有力的, 有说服力的, 有效的；有力的, 有性交能力的', chineseExplanation: '有力的, 有说服力的, 有效的；有力的, 有性交能力的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Having great influence.',
    examples: [{ english: 'The passage uses potent to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “potent” dalam konteks Bahasa Inggeris British.', chinese: '文章用“potent”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'foremost', term: 'foremost', normalizedTerm: 'foremost', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '最初的, 最重要的；在最前', chineseExplanation: '最初的, 最重要的；在最前是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Preceding all others in spatial position.',
    examples: [{ english: 'The passage uses foremost to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foremost” dalam konteks Bahasa Inggeris British.', chinese: '文章用“foremost”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'warranty', term: 'warranty', normalizedTerm: 'warranty', partOfSpeech: ['noun', 'verb'],
    chineseShort: '正当理由, 授权, 担保, 保证, 根据；保单, 担保书, 保证书', chineseExplanation: '正当理由, 授权, 担保, 保证, 根据；保单, 担保书, 保证书是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A written assurance that some product or service will be provided or will meet certain specifications.',
    examples: [{ english: 'The lesson explains the meaning of warranty.', malay: 'Ayat ini menunjukkan penggunaan perkataan “warranty” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“warranty”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'platelet', term: 'platelet', normalizedTerm: 'platelet', partOfSpeech: ['noun'],
    chineseShort: '血小板, 小盘, 小板', chineseExplanation: '血小板, 小盘, 小板是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Tiny bits of protoplasm found in vertebrate blood; essential for blood clotting.',
    examples: [{ english: 'The lesson explains the meaning of platelet.', malay: 'Ayat ini menunjukkan penggunaan perkataan “platelet” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“platelet”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'understandable', term: 'understandable', normalizedTerm: 'understandable', partOfSpeech: ['adjective'],
    chineseShort: '可以理解的', chineseExplanation: '可以理解的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Capable of being apprehended or understood.',
    examples: [{ english: 'The passage uses understandable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “understandable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“understandable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'incapable', term: 'incapable', normalizedTerm: 'incapable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '无能力的, 不能的；不能行的, 耐不住的', chineseExplanation: '无能力的, 不能的；不能行的, 耐不住的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(followed by `of\') lacking capacity or ability.',
    examples: [{ english: 'The passage uses incapable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incapable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“incapable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vigorously', term: 'vigorously', normalizedTerm: 'vigorously', partOfSpeech: ['adverb'],
    chineseShort: '朝气蓬勃, 精力充沛, 壮健, 茁壮, 健壮, 强有力', chineseExplanation: '朝气蓬勃, 精力充沛, 壮健, 茁壮, 健壮, 强有力是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'With vigor; in a vigorous manner.',
    examples: [{ english: 'The speaker used vigorously to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vigorously” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“vigorously”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'oblige', term: 'oblige', normalizedTerm: 'oblige', partOfSpeech: ['verb'],
    chineseShort: '强制, 施恩惠于, 使感激；施恩惠, 帮忙', chineseExplanation: '强制, 施恩惠于, 使感激；施恩惠, 帮忙是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Bind by an obligation; cause to be indebted.',
    examples: [{ english: 'The example shows how to use the verb oblige.', malay: 'Ayat ini menunjukkan penggunaan perkataan “oblige” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“oblige”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'noticeable', term: 'noticeable', normalizedTerm: 'noticeable', partOfSpeech: ['adjective'],
    chineseShort: '显而易见的, 显著的, 值得注意的', chineseExplanation: '显而易见的, 显著的, 值得注意的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Capable or worthy of being perceived.',
    examples: [{ english: 'The passage uses noticeable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “noticeable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“noticeable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'distinctly', term: 'distinctly', normalizedTerm: 'distinctly', partOfSpeech: ['adverb'],
    chineseShort: '显然地, 明显地, 清楚地', chineseExplanation: '显然地, 明显地, 清楚地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Clear to the mind; with distinct mental discernment.',
    examples: [{ english: 'The speaker used distinctly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “distinctly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“distinctly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'token', term: 'token', normalizedTerm: 'token', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '表征, 记号, 代币；象征的, 表意的', chineseExplanation: '表征, 记号, 代币；象征的, 表意的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An individual instance of a type of symbol.',
    examples: [{ english: 'The lesson explains the meaning of token.', malay: 'Ayat ini menunjukkan penggunaan perkataan “token” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“token”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'embargo', term: 'embargo', normalizedTerm: 'embargo', partOfSpeech: ['noun', 'verb'],
    chineseShort: '封港令, 禁运；禁止出入港口, 禁运', chineseExplanation: '封港令, 禁运；禁止出入港口, 禁运是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A government order imposing a trade barrier.',
    examples: [{ english: 'The lesson explains the meaning of embargo.', malay: 'Ayat ini menunjukkan penggunaan perkataan “embargo” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“embargo”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'vintage', term: 'vintage', normalizedTerm: 'vintage', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '酒, 葡萄收获, 酿酒；采葡萄', chineseExplanation: '酒, 葡萄收获, 酿酒；采葡萄是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A season\'s yield of wine from a vineyard.',
    examples: [{ english: 'The lesson explains the meaning of vintage.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vintage” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vintage”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'blur', term: 'blur', normalizedTerm: 'blur', partOfSpeech: ['noun', 'verb'],
    chineseShort: '使模糊, 弄脏；弄脏, 模糊', chineseExplanation: '使模糊, 弄脏；弄脏, 模糊是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A hazy or indistinct representation.',
    examples: [{ english: 'The lesson explains the meaning of blur.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blur” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“blur”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'foresee', term: 'foresee', normalizedTerm: 'foresee', partOfSpeech: ['verb'],
    chineseShort: '预见, 预知', chineseExplanation: '预见, 预知是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Realise beforehand v picture to oneself; imagine possible v act in advance of; deal with ahead of time.',
    examples: [{ english: 'The example shows how to use the verb foresee.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foresee” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“foresee”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'dietary', term: 'dietary', normalizedTerm: 'dietary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '饮食的；规定食物', chineseExplanation: '饮食的；规定食物是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A regulated daily food allowance.',
    examples: [{ english: 'The passage uses dietary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dietary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“dietary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vacant', term: 'vacant', normalizedTerm: 'vacant', partOfSpeech: ['adjective'],
    chineseShort: '空的, 空白的, 空虚的, 空闲的, 茫然的, 空缺的；空的, 空虚的, 闲暇的', chineseExplanation: '空的, 空白的, 空虚的, 空闲的, 茫然的, 空缺的；空的, 空虚的, 闲暇的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Void of thought or knowledge.',
    examples: [{ english: 'The passage uses vacant to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vacant” dalam konteks Bahasa Inggeris British.', chinese: '文章用“vacant”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'fertilizer', term: 'fertiliser', normalizedTerm: 'fertiliser', partOfSpeech: ['noun'],
    chineseShort: '肥料, 促进发展者, 受精媒介物；肥料', chineseExplanation: '肥料, 促进发展者, 受精媒介物；肥料是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Any substance such as manure or a mixture of nitrates used to make soil more fertile.',
    examples: [{ english: 'The lesson explains the meaning of fertiliser.', malay: 'Ayat ini menunjukkan penggunaan perkataan “fertiliser” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“fertiliser”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'insistence', term: 'insistence', normalizedTerm: 'insistence', partOfSpeech: ['noun'],
    chineseShort: '坚持, 坚决主张', chineseExplanation: '坚持, 坚决主张是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Continual and persistent demands.',
    examples: [{ english: 'The lesson explains the meaning of insistence.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insistence” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“insistence”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'hardship', term: 'hardship', normalizedTerm: 'hardship', partOfSpeech: ['noun', 'verb'],
    chineseShort: '艰难, 辛苦, 苦难；受苦, 吃苦, 苦难', chineseExplanation: '艰难, 辛苦, 苦难；受苦, 吃苦, 苦难是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Something that causes or entails suffering.',
    examples: [{ english: 'The lesson explains the meaning of hardship.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hardship” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hardship”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'dispense', term: 'dispense', normalizedTerm: 'dispense', partOfSpeech: ['verb', 'noun'],
    chineseShort: '分发, 分配；特许, 豁免', chineseExplanation: '分发, 分配；特许, 豁免是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Grant a dispensation; grant an exemption.',
    examples: [{ english: 'The example shows how to use the verb dispense.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dispense” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“dispense”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'elk', term: 'elk', normalizedTerm: 'elk', partOfSpeech: ['noun'],
    chineseShort: '麋鹿', chineseExplanation: '麋鹿是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Large northern deer with enormous flattened antlers in the male; called `elk\' in Europe and `moose\' in North America.',
    examples: [{ english: 'The lesson explains the meaning of elk.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elk” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“elk”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'remnant', term: 'remnant', normalizedTerm: 'remnant', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '剩余, 零料, 遗迹；剩余的, 残余的', chineseExplanation: '剩余, 零料, 遗迹；剩余的, 残余的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A small part or portion that remains after the main part no longer exists n a piece of cloth that is left over after the rest has been used or sold.',
    examples: [{ english: 'The lesson explains the meaning of remnant.', malay: 'Ayat ini menunjukkan penggunaan perkataan “remnant” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“remnant”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'communal', term: 'communal', normalizedTerm: 'communal', partOfSpeech: ['adjective'],
    chineseShort: '公有的, 公社的；公共的, 自治体的, 巴黎公社的', chineseExplanation: '公有的, 公社的；公共的, 自治体的, 巴黎公社的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'For or by a group rather than individuals.',
    examples: [{ english: 'The passage uses communal to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “communal” dalam konteks Bahasa Inggeris British.', chinese: '文章用“communal”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unsatisfactory', term: 'unsatisfactory', normalizedTerm: 'unsatisfactory', partOfSpeech: ['adjective'],
    chineseShort: '不令人满意的', chineseExplanation: '不令人满意的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not giving satisfaction.',
    examples: [{ english: 'The passage uses unsatisfactory to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unsatisfactory” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unsatisfactory”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'underestimate', term: 'underestimate', normalizedTerm: 'underestimate', partOfSpeech: ['verb', 'noun'],
    chineseShort: '低估；低估, 看轻', chineseExplanation: '低估；低估, 看轻是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An estimation that is too low; an estimate that is less than the true or actual value.',
    examples: [{ english: 'The example shows how to use the verb underestimate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “underestimate” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“underestimate”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vacancy', term: 'vacancy', normalizedTerm: 'vacancy', partOfSpeech: ['noun'],
    chineseShort: '空, 空白, 空缺, 空虚, 空闲；空位', chineseExplanation: '空, 空白, 空缺, 空虚, 空闲；空位是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Being unoccupied.',
    examples: [{ english: 'The lesson explains the meaning of vacancy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vacancy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vacancy”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'undo', term: 'undo', normalizedTerm: 'undo', partOfSpeech: ['verb', 'noun'],
    chineseShort: '解开, 取消, 破坏, 毁灭, 扰乱；松开', chineseExplanation: '解开, 取消, 破坏, 毁灭, 扰乱；松开是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Cancel, annul, or reverse an action or its effect.',
    examples: [{ english: 'The example shows how to use the verb undo.', malay: 'Ayat ini menunjukkan penggunaan perkataan “undo” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“undo”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'blossom', term: 'blossom', normalizedTerm: 'blossom', partOfSpeech: ['noun', 'verb'],
    chineseShort: '花, 花开的状态, 兴旺期；开花, 兴旺, 发展', chineseExplanation: '花, 花开的状态, 兴旺期；开花, 兴旺, 发展是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Develop or come to a promising stage.',
    examples: [{ english: 'The lesson explains the meaning of blossom.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blossom” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“blossom”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'ditch', term: 'ditch', normalizedTerm: 'ditch', partOfSpeech: ['noun', 'verb'],
    chineseShort: '沟渠；在...开沟', chineseExplanation: '沟渠；在...开沟是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A long narrow excavation in the earth.',
    examples: [{ english: 'The lesson explains the meaning of ditch.', malay: 'Ayat ini menunjukkan penggunaan perkataan “ditch” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“ditch”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'escort', term: 'escort', normalizedTerm: 'escort', partOfSpeech: ['noun', 'verb'],
    chineseShort: '护送者, 护卫者, 护航舰；护卫, 护送', chineseExplanation: '护送者, 护卫者, 护航舰；护卫, 护送是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The act of accompanying someone or something in order to protect them.',
    examples: [{ english: 'The lesson explains the meaning of escort.', malay: 'Ayat ini menunjukkan penggunaan perkataan “escort” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“escort”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'insane', term: 'insane', normalizedTerm: 'insane', partOfSpeech: ['adjective'],
    chineseShort: '患精神病的, 极愚蠢的；神经错乱的', chineseExplanation: '患精神病的, 极愚蠢的；神经错乱的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Afflicted with or characteristic of mental derangement.',
    examples: [{ english: 'The passage uses insane to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insane” dalam konteks Bahasa Inggeris British.', chinese: '文章用“insane”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'resemblance', term: 'resemblance', normalizedTerm: 'resemblance', partOfSpeech: ['noun'],
    chineseShort: '相似处, 类似, 肖像', chineseExplanation: '相似处, 类似, 肖像是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Similarity in appearance or external or superficial details.',
    examples: [{ english: 'The lesson explains the meaning of resemblance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resemblance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“resemblance”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'grove', term: 'grove', normalizedTerm: 'grove', partOfSpeech: ['noun', 'verb'],
    chineseShort: '小树林', chineseExplanation: '小树林是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A small growth of trees without underbrush.',
    examples: [{ english: 'The lesson explains the meaning of grove.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grove” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grove”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'conquest', term: 'conquest', normalizedTerm: 'conquest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '战胜, 征服, 战利品；征服, 赢得, 获得', chineseExplanation: '战胜, 征服, 战利品；征服, 赢得, 获得是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The act of conquering.',
    examples: [{ english: 'The lesson explains the meaning of conquest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conquest” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“conquest”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'orient', term: 'orient', normalizedTerm: 'orient', partOfSpeech: ['noun', 'verb'],
    chineseShort: '东方, 东方诸国；东方的', chineseExplanation: '东方, 东方诸国；东方的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Be oriented.',
    examples: [{ english: 'The lesson explains the meaning of orient.', malay: 'Ayat ini menunjukkan penggunaan perkataan “orient” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“orient”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'interruption', term: 'interruption', normalizedTerm: 'interruption', partOfSpeech: ['noun'],
    chineseShort: '打扰, 中断, 障碍物；间断, 阻断, 中止', chineseExplanation: '打扰, 中断, 障碍物；间断, 阻断, 中止是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Some abrupt occurrence that interrupts an ongoing activity.',
    examples: [{ english: 'The lesson explains the meaning of interruption.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interruption” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“interruption”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'safeguard', term: 'safeguard', normalizedTerm: 'safeguard', partOfSpeech: ['verb', 'noun'],
    chineseShort: '保卫, 保护措施, 防护设施；保卫, 保护', chineseExplanation: '保卫, 保护措施, 防护设施；保卫, 保护是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make safe.',
    examples: [{ english: 'The example shows how to use the verb safeguard.', malay: 'Ayat ini menunjukkan penggunaan perkataan “safeguard” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“safeguard”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'underwear', term: 'underwear', normalizedTerm: 'underwear', partOfSpeech: ['noun'],
    chineseShort: '内衣', chineseExplanation: '内衣是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Undergarment worn next to the skin and under the outer garments.',
    examples: [{ english: 'The lesson explains the meaning of underwear.', malay: 'Ayat ini menunjukkan penggunaan perkataan “underwear” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“underwear”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'appropriation', term: 'appropriation', normalizedTerm: 'appropriation', partOfSpeech: ['noun'],
    chineseShort: '拨用, 挪用, 拨款；拨款, 挪用', chineseExplanation: '拨用, 挪用, 拨款；拨款, 挪用是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Money set aside (as by a legislature) for a specific purpose.',
    examples: [{ english: 'The lesson explains the meaning of appropriation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “appropriation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“appropriation”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'hay', term: 'hay', normalizedTerm: 'hay', partOfSpeech: ['noun', 'verb'],
    chineseShort: '干草；制干草, 供给干草', chineseExplanation: '干草；制干草, 供给干草是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Grass mowed and cured for use as fodder.',
    examples: [{ english: 'The lesson explains the meaning of hay.', malay: 'Ayat ini menunjukkan penggunaan perkataan “hay” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“hay”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'messenger', term: 'messenger', normalizedTerm: 'messenger', partOfSpeech: ['noun', 'verb'],
    chineseShort: '报信者, 使者；使者, 送信者, 通信员', chineseExplanation: '报信者, 使者；使者, 送信者, 通信员是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person who carries a message.',
    examples: [{ english: 'The lesson explains the meaning of messenger.', malay: 'Ayat ini menunjukkan penggunaan perkataan “messenger” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“messenger”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'mentality', term: 'mentality', normalizedTerm: 'mentality', partOfSpeech: ['noun'],
    chineseShort: '精神力, 智力, 头脑作用, 心态；智力', chineseExplanation: '精神力, 智力, 头脑作用, 心态；智力是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A habitual or characteristic mental attitude that determines how you will interpret and respond to situations.',
    examples: [{ english: 'The lesson explains the meaning of mentality.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mentality” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“mentality”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'contention', term: 'contention', normalizedTerm: 'contention', partOfSpeech: ['noun'],
    chineseShort: '争论, 争辩, 所持的论点；争用', chineseExplanation: '争论, 争辩, 所持的论点；争用是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A point asserted as part of an argument.',
    examples: [{ english: 'The lesson explains the meaning of contention.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contention” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“contention”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'revolt', term: 'revolt', normalizedTerm: 'revolt', partOfSpeech: ['noun', 'verb'],
    chineseShort: '叛乱, 反抗, 反感；叛乱, 反抗, 起义, 厌恶, 反感', chineseExplanation: '叛乱, 反抗, 反感；叛乱, 反抗, 起义, 厌恶, 反感是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make revolution.',
    examples: [{ english: 'The lesson explains the meaning of revolt.', malay: 'Ayat ini menunjukkan penggunaan perkataan “revolt” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“revolt”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'insult', term: 'insult', normalizedTerm: 'insult', partOfSpeech: ['noun', 'verb'],
    chineseShort: '侮辱, 无礼, 损害；损害, 侮辱, 攻击', chineseExplanation: '侮辱, 无礼, 损害；损害, 侮辱, 攻击是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A deliberately offensive act or something producing the effect of deliberate disrespect.',
    examples: [{ english: 'The lesson explains the meaning of insult.', malay: 'Ayat ini menunjukkan penggunaan perkataan “insult” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“insult”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'kin', term: 'kin', normalizedTerm: 'kin', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '亲戚, 同族, 血缘关系, 家族；有亲属关系的, 性质类似的, 同类的', chineseExplanation: '亲戚, 同族, 血缘关系, 家族；有亲属关系的, 性质类似的, 同类的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A person having kinship with another or others.',
    examples: [{ english: 'The lesson explains the meaning of kin.', malay: 'Ayat ini menunjukkan penggunaan perkataan “kin” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“kin”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'contraction', term: 'contraction', normalizedTerm: 'contraction', partOfSpeech: ['noun'],
    chineseShort: '收缩, 缩写式, 害病；收缩', chineseExplanation: '收缩, 缩写式, 害病；收缩是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: '(physiology) a shortening or tensing of a part or organ (especially of a muscle or muscle fiber).',
    examples: [{ english: 'The lesson explains the meaning of contraction.', malay: 'Ayat ini menunjukkan penggunaan perkataan “contraction” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“contraction”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'bloom', term: 'bloom', normalizedTerm: 'bloom', partOfSpeech: ['noun', 'verb'],
    chineseShort: '花, 开花, 青春, 钢块；开花, 焕发青春, 茂盛', chineseExplanation: '花, 开花, 青春, 钢块；开花, 焕发青春, 茂盛是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The best time of youth.',
    examples: [{ english: 'The lesson explains the meaning of bloom.', malay: 'Ayat ini menunjukkan penggunaan perkataan “bloom” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“bloom”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'necklace', term: 'necklace', normalizedTerm: 'necklace', partOfSpeech: ['noun', 'verb'],
    chineseShort: '项链', chineseExplanation: '项链是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Jewellery consisting of a cord or chain (often bearing gems) worn about the neck as an ornament (especially by women).',
    examples: [{ english: 'The lesson explains the meaning of necklace.', malay: 'Ayat ini menunjukkan penggunaan perkataan “necklace” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“necklace”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'blouse', term: 'blouse', normalizedTerm: 'blouse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '宽松的上衣', chineseExplanation: '宽松的上衣是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A top worn by women.',
    examples: [{ english: 'The lesson explains the meaning of blouse.', malay: 'Ayat ini menunjukkan penggunaan perkataan “blouse” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“blouse”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'consequent', term: 'consequent', normalizedTerm: 'consequent', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '随后发生的事情, 结果；作为结果的, 合乎逻辑的', chineseExplanation: '随后发生的事情, 结果；作为结果的, 合乎逻辑的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Following or accompanying as a consequence.',
    examples: [{ english: 'The passage uses consequent to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “consequent” dalam konteks Bahasa Inggeris British.', chinese: '文章用“consequent”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'convoy', term: 'convoy', normalizedTerm: 'convoy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '护送, 护卫；护航, 护送', chineseExplanation: '护送, 护卫；护航, 护送是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A procession of land vehicles travelling together.',
    examples: [{ english: 'The lesson explains the meaning of convoy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “convoy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“convoy”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'glen', term: 'glen', normalizedTerm: 'glen', partOfSpeech: ['noun'],
    chineseShort: '峡谷, 幽谷', chineseExplanation: '峡谷, 幽谷是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A narrow secluded valley (in the mountains).',
    examples: [{ english: 'The lesson explains the meaning of glen.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glen” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“glen”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'enclosure', term: 'enclosure', normalizedTerm: 'enclosure', partOfSpeech: ['noun'],
    chineseShort: '附件, 围墙, 围绕；机壳', chineseExplanation: '附件, 围墙, 围绕；机壳是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A structure consisting of an area that has been enclosed for some purpose.',
    examples: [{ english: 'The lesson explains the meaning of enclosure.', malay: 'Ayat ini menunjukkan penggunaan perkataan “enclosure” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“enclosure”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'overweight', term: 'overweight', normalizedTerm: 'overweight', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '超过重量, 过重, 优势；超过重量的, 超重的', chineseExplanation: '超过重量, 过重, 优势；超过重量的, 超重的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The property of excessive fatness s usually describes a large person who is fat but has a large frame to carry it.',
    examples: [{ english: 'The passage uses overweight to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overweight” dalam konteks Bahasa Inggeris British.', chinese: '文章用“overweight”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'verge', term: 'verge', normalizedTerm: 'verge', partOfSpeech: ['noun', 'verb'],
    chineseShort: '边缘, 边界, 起始点；处在边缘, 接近, 下沉, 趋向', chineseExplanation: '边缘, 边界, 起始点；处在边缘, 接近, 下沉, 趋向是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The limit beyond which something happens or changes.',
    examples: [{ english: 'The lesson explains the meaning of verge.', malay: 'Ayat ini menunjukkan penggunaan perkataan “verge” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“verge”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'plague', term: 'plague', normalizedTerm: 'plague', partOfSpeech: ['noun', 'verb'],
    chineseShort: '瘟疫, 天罚, 麻烦, 灾祸；折磨, 使苦恼, 使得灾祸', chineseExplanation: '瘟疫, 天罚, 麻烦, 灾祸；折磨, 使苦恼, 使得灾祸是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A serious (sometimes fatal) infection of rodents caused by Yersinia pestis and accidentally transmitted to humans by the bite of a flea that has bitten an infected animal.',
    examples: [{ english: 'The lesson explains the meaning of plague.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plague” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plague”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'withhold', term: 'withhold', normalizedTerm: 'withhold', partOfSpeech: ['verb', 'noun'],
    chineseShort: '使停止, 扣留, 保留, 拒给；克制, 忍住', chineseExplanation: '使停止, 扣留, 保留, 拒给；克制, 忍住是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Hold back; refuse to hand over or share.',
    examples: [{ english: 'The example shows how to use the verb withhold.', malay: 'Ayat ini menunjukkan penggunaan perkataan “withhold” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“withhold”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'messy', term: 'messy', normalizedTerm: 'messy', partOfSpeech: ['adjective'],
    chineseShort: '散乱的, 污秽的, 麻烦的', chineseExplanation: '散乱的, 污秽的, 麻烦的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Dirty and disorderly.',
    examples: [{ english: 'The passage uses messy to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “messy” dalam konteks Bahasa Inggeris British.', chinese: '文章用“messy”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unpredictable', term: 'unpredictable', normalizedTerm: 'unpredictable', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不可预知的', chineseExplanation: '不可预知的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not capable of being foretold.',
    examples: [{ english: 'The passage uses unpredictable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unpredictable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unpredictable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'lucrative', term: 'lucrative', normalizedTerm: 'lucrative', partOfSpeech: ['adjective'],
    chineseShort: '有利益的, 获利的, 合算的', chineseExplanation: '有利益的, 获利的, 合算的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Producing a sizeable profit.',
    examples: [{ english: 'The passage uses lucrative to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lucrative” dalam konteks Bahasa Inggeris British.', chinese: '文章用“lucrative”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'resistant', term: 'resistant', normalizedTerm: 'resistant', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '抵抗者, 反抗者；抵抗的, 反抗的, 耐...的', chineseExplanation: '抵抗者, 反抗者；抵抗的, 反抗的, 耐...的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Impervious to being affected.',
    examples: [{ english: 'The passage uses resistant to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “resistant” dalam konteks Bahasa Inggeris British.', chinese: '文章用“resistant”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'conversely', term: 'conversely', normalizedTerm: 'conversely', partOfSpeech: ['adverb'],
    chineseShort: '相反, 逆, 颠倒, 反题, 反', chineseExplanation: '相反, 逆, 颠倒, 反题, 反是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'With the terms of the relation reversed.',
    examples: [{ english: 'The speaker used conversely to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conversely” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“conversely”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'complementary', term: 'complementary', normalizedTerm: 'complementary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '补充的, 补足的；补足的, 补充的', chineseExplanation: '补充的, 补足的；补足的, 补充的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of words or propositions so related that each is the negation of the other.',
    examples: [{ english: 'The passage uses complementary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “complementary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“complementary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'dissolution', term: 'dissolution', normalizedTerm: 'dissolution', partOfSpeech: ['noun'],
    chineseShort: '分解, 溶解, 解散, 结束；溶解', chineseExplanation: '分解, 溶解, 解散, 结束；溶解是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Separation into component parts.',
    examples: [{ english: 'The lesson explains the meaning of dissolution.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dissolution” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dissolution”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'vest', term: 'vest', normalizedTerm: 'vest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '背心, 汗背心；使穿衣服, 授予', chineseExplanation: '背心, 汗背心；使穿衣服, 授予是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A man\'s sleeveless garment worn underneath a coat.',
    examples: [{ english: 'The lesson explains the meaning of vest.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vest” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vest”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vibration', term: 'vibration', normalizedTerm: 'vibration', partOfSpeech: ['noun'],
    chineseShort: '振动, 颤动；振动', chineseExplanation: '振动, 颤动；振动是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The act of vibrating.',
    examples: [{ english: 'The lesson explains the meaning of vibration.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vibration” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vibration”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'elevation', term: 'elevation', normalizedTerm: 'elevation', partOfSpeech: ['noun'],
    chineseShort: '海拔, 提高, 仰角；仰角', chineseExplanation: '海拔, 提高, 仰角；仰角是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The event of something being raised upward.',
    examples: [{ english: 'The lesson explains the meaning of elevation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elevation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“elevation”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vibrant', term: 'vibrant', normalizedTerm: 'vibrant', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '振动的, 战栗的, 响亮的, 活跃的', chineseExplanation: '振动的, 战栗的, 响亮的, 活跃的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Vigorous and animated.',
    examples: [{ english: 'The passage uses vibrant to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vibrant” dalam konteks Bahasa Inggeris British.', chinese: '文章用“vibrant”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reformer', term: 'reformer', normalizedTerm: 'reformer', partOfSpeech: ['noun'],
    chineseShort: '改革家, 改革运动者；转化炉', chineseExplanation: '改革家, 改革运动者；转化炉是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A disputant who advocates reform.',
    examples: [{ english: 'The lesson explains the meaning of reformer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reformer” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“reformer”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'interrogation', term: 'interrogation', normalizedTerm: 'interrogation', partOfSpeech: ['noun'],
    chineseShort: '审问, 疑问句, 问号；询问', chineseExplanation: '审问, 疑问句, 问号；询问是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A transmission that will trigger an answering transmission from a transponder.',
    examples: [{ english: 'The lesson explains the meaning of interrogation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “interrogation” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“interrogation”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'overlap', term: 'overlap', normalizedTerm: 'overlap', partOfSpeech: ['noun', 'verb'],
    chineseShort: '重叠, 重复, 部分的同时发生；重叠, 重复, 与...同时发生', chineseExplanation: '重叠, 重复, 部分的同时发生；重叠, 重复, 与...同时发生是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A representation of common ground between theories or phenomena.',
    examples: [{ english: 'The lesson explains the meaning of overlap.', malay: 'Ayat ini menunjukkan penggunaan perkataan “overlap” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“overlap”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'foil', term: 'foil', normalizedTerm: 'foil', partOfSpeech: ['noun', 'verb'],
    chineseShort: '箔, 烘托, 衬托；贴箔于, 衬托, 阻止, 挡开, 挫败', chineseExplanation: '箔, 烘托, 衬托；贴箔于, 衬托, 阻止, 挡开, 挫败是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A piece of thin and flexible sheet metal.',
    examples: [{ english: 'The lesson explains the meaning of foil.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foil” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“foil”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'uncommon', term: 'uncommon', normalizedTerm: 'uncommon', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '不寻常的, 非凡的, 罕有的；不平常地', chineseExplanation: '不寻常的, 非凡的, 罕有的；不平常地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not common or ordinarily encountered; unusually great in amount or remarkable in character or kind.',
    examples: [{ english: 'The passage uses uncommon to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “uncommon” dalam konteks Bahasa Inggeris British.', chinese: '文章用“uncommon”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'vet', term: 'vet', normalizedTerm: 'vet', partOfSpeech: ['noun', 'verb'],
    chineseShort: '兽医；当兽医', chineseExplanation: '兽医；当兽医是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Work as a veterinarian.',
    examples: [{ english: 'The lesson explains the meaning of vet.', malay: 'Ayat ini menunjukkan penggunaan perkataan “vet” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“vet”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'salon', term: 'salon', normalizedTerm: 'salon', partOfSpeech: ['noun'],
    chineseShort: '大会客室, 大厅, 客厅, 交谊室, 沙龙, 美术展览馆, 画廊, 美容院, 发廊', chineseExplanation: '大会客室, 大厅, 客厅, 交谊室, 沙龙, 美术展览馆, 画廊, 美容院, 发廊是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Gallery where works of art can be displayed.',
    examples: [{ english: 'The lesson explains the meaning of salon.', malay: 'Ayat ini menunjukkan penggunaan perkataan “salon” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“salon”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'anthropology', term: 'anthropology', normalizedTerm: 'anthropology', partOfSpeech: ['noun'],
    chineseShort: '人类学；人类学', chineseExplanation: '人类学；人类学是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The social science that studies the origins and social relationships of human beings.',
    examples: [{ english: 'The lesson explains the meaning of anthropology.', malay: 'Ayat ini menunjukkan penggunaan perkataan “anthropology” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“anthropology”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'conquer', term: 'conquer', normalizedTerm: 'conquer', partOfSpeech: ['verb'],
    chineseShort: '克服, 征服, 战胜；得胜', chineseExplanation: '克服, 征服, 战胜；得胜是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Overcome by conquest.',
    examples: [{ english: 'The example shows how to use the verb conquer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “conquer” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“conquer”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'composite', term: 'composite', normalizedTerm: 'composite', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '合成的, 混合成的, 菊科的；合成物, 复合材料, 菊科', chineseExplanation: '合成的, 混合成的, 菊科的；合成物, 复合材料, 菊科是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Considered the most highly evolved dicotyledonous plants, characterised by florets arranged in dense heads that resemble single flowers.',
    examples: [{ english: 'The passage uses composite to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “composite” dalam konteks Bahasa Inggeris British.', chinese: '文章用“composite”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tenancy', term: 'tenancy', normalizedTerm: 'tenancy', partOfSpeech: ['noun'],
    chineseShort: '租用, 租赁；租赁, 租回', chineseExplanation: '租用, 租赁；租赁, 租回是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An act of being a tenant or occupant.',
    examples: [{ english: 'The lesson explains the meaning of tenancy.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tenancy” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“tenancy”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'lush', term: 'lush', normalizedTerm: 'lush', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '苍翠繁茂的, 多青草的, 丰富的；酒, 酒鬼', chineseExplanation: '苍翠繁茂的, 多青草的, 丰富的；酒, 酒鬼是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Full of juice.',
    examples: [{ english: 'The passage uses lush to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lush” dalam konteks Bahasa Inggeris British.', chinese: '文章用“lush”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'oracle', term: 'oracle', normalizedTerm: 'oracle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '神谕, 神谕处, 预言', chineseExplanation: '神谕, 神谕处, 预言是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A prophecy (usually obscure or allegorical) revealed by a priest or priestess; believed to be infallible.',
    examples: [{ english: 'The lesson explains the meaning of oracle.', malay: 'Ayat ini menunjukkan penggunaan perkataan “oracle” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“oracle”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'toby', term: 'toby', normalizedTerm: 'toby', partOfSpeech: ['noun'],
    chineseShort: '人形水罐', chineseExplanation: '人形水罐是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A drinking mug in the shape of a stout man wearing a three-cornered hat.',
    examples: [{ english: 'The lesson explains the meaning of toby.', malay: 'Ayat ini menunjukkan penggunaan perkataan “toby” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“toby”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'median', term: 'median', normalizedTerm: 'median', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '中央的, 中间的, 正中的；正中动脉, 中位数, 中线', chineseExplanation: '中央的, 中间的, 正中的；正中动脉, 中位数, 中线是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The value below which 50% of the cases fall.',
    examples: [{ english: 'The passage uses median to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “median” dalam konteks Bahasa Inggeris British.', chinese: '文章用“median”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'momentum', term: 'momentum', normalizedTerm: 'momentum', partOfSpeech: ['noun'],
    chineseShort: '势头；动力；动量', chineseExplanation: '使过程继续发展并越来越有力的推动力；物理学中也表示动量。', englishDefinition: 'The force or progress that keeps a process developing, or mass in motion in physics.',
    examples: [{ english: 'The campaign gained momentum after the debate.', malay: 'Ayat ini menunjukkan penggunaan perkataan “momentum” dalam konteks Bahasa Inggeris British.', chinese: '辩论后，这场活动的势头增强了。' }], level: 3, cefr: 'B2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'granite', term: 'granite', normalizedTerm: 'granite', partOfSpeech: ['noun'],
    chineseShort: '花岗岩；花岗岩', chineseExplanation: '花岗岩；花岗岩是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Plutonic igneous rock having visibly crystalline texture; generally composed of feldspar and mica and quartz.',
    examples: [{ english: 'The lesson explains the meaning of granite.', malay: 'Ayat ini menunjukkan penggunaan perkataan “granite” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“granite”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'beforehand', term: 'beforehand', normalizedTerm: 'beforehand', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '预先', chineseExplanation: '预先是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Being ahead of time or need r ahead of time; in anticipation.',
    examples: [{ english: 'The speaker used beforehand to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “beforehand” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“beforehand”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'foul', term: 'foul', normalizedTerm: 'foul', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '污秽的, 邪恶的, 恶臭的, 肮脏的, 恶劣的, 淤塞的；弄脏, 妨害, 污蔑, 犯规, 淤塞', chineseExplanation: '污秽的, 邪恶的, 恶臭的, 肮脏的, 恶劣的, 淤塞的；弄脏, 妨害, 污蔑, 犯规, 淤塞是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An act that violates the rules of a sport.',
    examples: [{ english: 'The passage uses foul to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “foul” dalam konteks Bahasa Inggeris British.', chinese: '文章用“foul”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'dice', term: 'dice', normalizedTerm: 'dice', partOfSpeech: ['noun', 'verb'],
    chineseShort: '骰子；切成方块', chineseExplanation: '骰子；切成方块是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Play dice.',
    examples: [{ english: 'The lesson explains the meaning of dice.', malay: 'Ayat ini menunjukkan penggunaan perkataan “dice” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“dice”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unsuitable', term: 'unsuitable', normalizedTerm: 'unsuitable', partOfSpeech: ['adjective'],
    chineseShort: '不适合的；不适合的, 不适当的', chineseExplanation: '不适合的；不适合的, 不适当的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not meant or adapted for a particular purpose.',
    examples: [{ english: 'The passage uses unsuitable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unsuitable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unsuitable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'reflective', term: 'reflective', normalizedTerm: 'reflective', partOfSpeech: ['adjective'],
    chineseShort: '反射的, 反映的, 沉思的', chineseExplanation: '反射的, 反映的, 沉思的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Capable of physically reflecting light or sound.',
    examples: [{ english: 'The passage uses reflective to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “reflective” dalam konteks Bahasa Inggeris British.', chinese: '文章用“reflective”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'compliment', term: 'compliment', normalizedTerm: 'compliment', partOfSpeech: ['noun', 'verb'],
    chineseShort: '称赞, 恭维, 敬意；称赞, 褒扬, 恭维', chineseExplanation: '称赞, 恭维, 敬意；称赞, 褒扬, 恭维是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A remark (or act) expressing praise and admiration.',
    examples: [{ english: 'The lesson explains the meaning of compliment.', malay: 'Ayat ini menunjukkan penggunaan perkataan “compliment” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“compliment”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'landfill', term: 'landfill', normalizedTerm: 'landfill', partOfSpeech: ['noun', 'verb'],
    chineseShort: '垃圾堆；垃圾填埋地', chineseExplanation: '垃圾堆；垃圾填埋地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A low area that has been filled in.',
    examples: [{ english: 'The lesson explains the meaning of landfill.', malay: 'Ayat ini menunjukkan penggunaan perkataan “landfill” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“landfill”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'temporal', term: 'temporal', normalizedTerm: 'temporal', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '时间的, 暂时的, 现世的, 世俗的, 颞的, 太阳穴的；世间万物, 教会财产', chineseExplanation: '时间的, 暂时的, 现世的, 世俗的, 颞的, 太阳穴的；世间万物, 教会财产是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not eternal.',
    examples: [{ english: 'The passage uses temporal to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “temporal” dalam konteks Bahasa Inggeris British.', chinese: '文章用“temporal”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'pluck', term: 'pluck', normalizedTerm: 'pluck', partOfSpeech: ['verb', 'noun'],
    chineseShort: '勇气, 猛拉, 动物内脏；摘, 猛拉, 拔, 拉, 扯, 采', chineseExplanation: '勇气, 猛拉, 动物内脏；摘, 猛拉, 拔, 拉, 扯, 采是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The act of pulling and releasing a taut cord.',
    examples: [{ english: 'The example shows how to use the verb pluck.', malay: 'Ayat ini menunjukkan penggunaan perkataan “pluck” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“pluck”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'lunar', term: 'lunar', normalizedTerm: 'lunar', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '阴历的, 月的, 微亮的；月的, 银的', chineseExplanation: '阴历的, 月的, 微亮的；月的, 银的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of or relating to or associated with the moon.',
    examples: [{ english: 'The passage uses lunar to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lunar” dalam konteks Bahasa Inggeris British.', chinese: '文章用“lunar”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'plainly', term: 'plainly', normalizedTerm: 'plainly', partOfSpeech: ['adverb'],
    chineseShort: '清楚地, 明白地, 简单地, 朴素地, 直率地, 坦白地', chineseExplanation: '清楚地, 明白地, 简单地, 朴素地, 直率地, 坦白地是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'In a simple manner; without extravagance or embellishment.',
    examples: [{ english: 'The speaker used plainly to add detail.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plainly” dalam konteks Bahasa Inggeris British.', chinese: '说话者用“plainly”补充细节。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'tout', term: 'tout', normalizedTerm: 'tout', partOfSpeech: ['verb', 'noun'],
    chineseShort: '招徕顾客, 兜售物品；招徕, 刺探...情报', chineseExplanation: '招徕顾客, 兜售物品；招徕, 刺探...情报是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Someone who buys tickets to an event in order to resell them at a profit.',
    examples: [{ english: 'The example shows how to use the verb tout.', malay: 'Ayat ini menunjukkan penggunaan perkataan “tout” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“tout”。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'jersey', term: 'jersey', normalizedTerm: 'jersey', partOfSpeech: ['noun'],
    chineseShort: '运动衫', chineseExplanation: '运动衫是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The largest of the Channel Islands.',
    examples: [{ english: 'The lesson explains the meaning of jersey.', malay: 'Ayat ini menunjukkan penggunaan perkataan “jersey” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“jersey”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'comprehend', term: 'comprehend', normalizedTerm: 'comprehend', partOfSpeech: ['verb'],
    chineseShort: '理解, 包括', chineseExplanation: '理解, 包括是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Get the meaning of something v to become aware of through the senses v include in scope; include as part of something broader; have as one\'s sphere or territory.',
    examples: [{ english: 'The example shows how to use the verb comprehend.', malay: 'Ayat ini menunjukkan penggunaan perkataan “comprehend” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“comprehend”。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'plight', term: 'plight', normalizedTerm: 'plight', partOfSpeech: ['noun', 'verb'],
    chineseShort: '困境, 窘境；宣誓, 保证', chineseExplanation: '困境, 窘境；宣誓, 保证是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A solemn pledge of fidelity.',
    examples: [{ english: 'The lesson explains the meaning of plight.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plight” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plight”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'responsive', term: 'responsive', normalizedTerm: 'responsive', partOfSpeech: ['adjective'],
    chineseShort: '回答的, 应答的, 易感应的', chineseExplanation: '回答的, 应答的, 易感应的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Containing or using responses; alternating.',
    examples: [{ english: 'The passage uses responsive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “responsive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“responsive”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'plough', term: 'plough', normalizedTerm: 'plough', partOfSpeech: ['noun', 'verb'],
    chineseShort: '犁, 犁过的地；用犁耕田, 开路', chineseExplanation: '犁, 犁过的地；用犁耕田, 开路是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A group of seven bright stars in the constellation Ursa Major n a farm tool having one or more heavy blades to break the soil and cut a furrow prior to sowing v move in a way resembling that of a…',
    examples: [{ english: 'The lesson explains the meaning of plough.', malay: 'Ayat ini menunjukkan penggunaan perkataan “plough” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“plough”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'inclination', term: 'inclination', normalizedTerm: 'inclination', partOfSpeech: ['noun'],
    chineseShort: '倾向, 趋向, 倾斜度, 点头；倾角', chineseExplanation: '倾向, 趋向, 倾斜度, 点头；倾角是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An attitude of mind especially one that favours one alternative over others.',
    examples: [{ english: 'The lesson explains the meaning of inclination.', malay: 'Ayat ini menunjukkan penggunaan perkataan “inclination” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“inclination”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'wreck', term: 'wreck', normalizedTerm: 'wreck', partOfSpeech: ['noun', 'verb'],
    chineseShort: '失事, 残骸, 破坏；使失事, 拆毁, 破坏', chineseExplanation: '失事, 残骸, 破坏；使失事, 拆毁, 破坏是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Something or someone that has suffered ruin or dilapidation.',
    examples: [{ english: 'The lesson explains the meaning of wreck.', malay: 'Ayat ini menunjukkan penggunaan perkataan “wreck” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“wreck”的含义。' }], level: 3, cefr: 'B2', categories: ['Travel'],
  },
  {
    id: 'instability', term: 'instability', normalizedTerm: 'instability', partOfSpeech: ['noun'],
    chineseShort: '不安定, 不稳定；不稳定性', chineseExplanation: '不安定, 不稳定；不稳定性是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An unstable order.',
    examples: [{ english: 'The lesson explains the meaning of instability.', malay: 'Ayat ini menunjukkan penggunaan perkataan “instability” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“instability”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'elusive', term: 'elusive', normalizedTerm: 'elusive', partOfSpeech: ['adjective'],
    chineseShort: '难懂的, 易忘的, 难以捉摸的', chineseExplanation: '难懂的, 易忘的, 难以捉摸的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Difficult to describe.',
    examples: [{ english: 'The passage uses elusive to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “elusive” dalam konteks Bahasa Inggeris British.', chinese: '文章用“elusive”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'mercury', term: 'mercury', normalizedTerm: 'mercury', partOfSpeech: ['noun'],
    chineseShort: '水银, 汞, 使者；汞Hg', chineseExplanation: '水银, 汞, 使者；汞Hg是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A heavy silvery toxic univalent and bivalent metallic element; the only metal that is liquid at ordinary temperatures.',
    examples: [{ english: 'The lesson explains the meaning of mercury.', malay: 'Ayat ini menunjukkan penggunaan perkataan “mercury” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“mercury”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'incomplete', term: 'incomplete', normalizedTerm: 'incomplete', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不完全的, 未完成的, 不完善的；不完全的', chineseExplanation: '不完全的, 未完成的, 不完善的；不完全的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not complete or total; not completed.',
    examples: [{ english: 'The passage uses incomplete to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “incomplete” dalam konteks Bahasa Inggeris British.', chinese: '文章用“incomplete”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'laborer', term: 'labourer', normalizedTerm: 'labourer', partOfSpeech: ['noun'],
    chineseShort: '体力劳动者, 辅助工；劳动者', chineseExplanation: '体力劳动者, 辅助工；劳动者是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Someone who works with their hands; someone engaged in manual labour.',
    examples: [{ english: 'The lesson explains the meaning of labourer.', malay: 'Ayat ini menunjukkan penggunaan perkataan “labourer” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“labourer”的含义。' }], level: 3, cefr: 'B2', categories: ['Business'],
  },
  {
    id: 'planetary', term: 'planetary', normalizedTerm: 'planetary', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '行星的, 流浪的, 迁移不定的, 地球上的, 现世的', chineseExplanation: '行星的, 流浪的, 迁移不定的, 地球上的, 现世的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Of or relating to or characteristic of the planet Earth or its inhabitants.',
    examples: [{ english: 'The passage uses planetary to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “planetary” dalam konteks Bahasa Inggeris British.', chinese: '文章用“planetary”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'formality', term: 'formality', normalizedTerm: 'formality', partOfSpeech: ['noun'],
    chineseShort: '礼节, 拘谨, 正式手续；克式浓度', chineseExplanation: '礼节, 拘谨, 正式手续；克式浓度是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A requirement of etiquette or custom.',
    examples: [{ english: 'The lesson explains the meaning of formality.', malay: 'Ayat ini menunjukkan penggunaan perkataan “formality” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“formality”的含义。' }], level: 3, cefr: 'B2', categories: ['Academic'],
  },
  {
    id: 'endeavour', term: 'endeavour', normalizedTerm: 'endeavour', partOfSpeech: ['noun', 'verb'],
    chineseShort: '努力, 力图, 尽力；努力, 力图, 尽力', chineseExplanation: '努力, 力图, 尽力；努力, 力图, 尽力是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A purposeful or industrious undertaking (especially one that requires effort or boldness) n earnest and conscientious activity intended to do or accomplish something v attempt by employing effort.',
    examples: [{ english: 'The lesson explains the meaning of endeavour.', malay: 'Ayat ini menunjukkan penggunaan perkataan “endeavour” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“endeavour”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'diversion', term: 'diversion', normalizedTerm: 'diversion', partOfSpeech: ['noun'],
    chineseShort: '转移；转向', chineseExplanation: '转移；转向是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An activity that diverts or amuses or stimulates.',
    examples: [{ english: 'The lesson explains the meaning of diversion.', malay: 'Ayat ini menunjukkan penggunaan perkataan “diversion” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“diversion”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'withstand', term: 'withstand', normalizedTerm: 'withstand', partOfSpeech: ['verb'],
    chineseShort: '抵住, 顶住, 经得起', chineseExplanation: '抵住, 顶住, 经得起是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Resist or confront with resistance v stand up or offer resistance to somebody or something.',
    examples: [{ english: 'The example shows how to use the verb withstand.', malay: 'Ayat ini menunjukkan penggunaan perkataan “withstand” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“withstand”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'unstable', term: 'unstable', normalizedTerm: 'unstable', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '不稳定的', chineseExplanation: '不稳定的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Lacking stability or fixity or firmness.',
    examples: [{ english: 'The passage uses unstable to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “unstable” dalam konteks Bahasa Inggeris British.', chinese: '文章用“unstable”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'lumber', term: 'lumber', normalizedTerm: 'lumber', partOfSpeech: ['noun', 'verb'],
    chineseShort: '木材, 破旧家俱, 废物, 隆隆声；砍伐木材, 乱堆', chineseExplanation: '木材, 破旧家俱, 废物, 隆隆声；砍伐木材, 乱堆是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'The wood of trees cut and prepared for use as building material.',
    examples: [{ english: 'The lesson explains the meaning of lumber.', malay: 'Ayat ini menunjukkan penggunaan perkataan “lumber” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“lumber”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'glossy', term: 'glossy', normalizedTerm: 'glossy', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '平滑的, 有光泽的', chineseExplanation: '平滑的, 有光泽的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'A photograph that is printed on smooth shiny paper.',
    examples: [{ english: 'The passage uses glossy to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “glossy” dalam konteks Bahasa Inggeris British.', chinese: '文章用“glossy”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'gloomy', term: 'gloomy', normalizedTerm: 'gloomy', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '抑沉的, 忧闷的, 黑暗的, 悲观的', chineseExplanation: '抑沉的, 忧闷的, 黑暗的, 悲观的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Filled with melancholy and despondency.',
    examples: [{ english: 'The passage uses gloomy to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “gloomy” dalam konteks Bahasa Inggeris British.', chinese: '文章用“gloomy”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'benign', term: 'benign', normalizedTerm: 'benign', partOfSpeech: ['adjective'],
    chineseShort: '善良的, 良性的；良性的', chineseExplanation: '善良的, 良性的；良性的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not dangerous to health; not recurrent or progressive (especially of a tumor).',
    examples: [{ english: 'The passage uses benign to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “benign” dalam konteks Bahasa Inggeris British.', chinese: '文章用“benign”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'harden', term: 'harden', normalizedTerm: 'harden', partOfSpeech: ['verb', 'noun'],
    chineseShort: '使变硬, 使坚强, 使冷酷；变硬, 变冷酷', chineseExplanation: '使变硬, 使坚强, 使冷酷；变硬, 变冷酷是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Become hard or harder.',
    examples: [{ english: 'The example shows how to use the verb harden.', malay: 'Ayat ini menunjukkan penggunaan perkataan “harden” dalam konteks Bahasa Inggeris British.', chinese: '这个例子展示了如何使用动词“harden”。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'windshield', term: 'windscreen', normalizedTerm: 'windscreen', partOfSpeech: ['noun'],
    chineseShort: '挡风玻璃；风遮蔽', chineseExplanation: '挡风玻璃；风遮蔽是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Transparent screen (as of glass) to protect occupants of a vehicle.',
    examples: [{ english: 'The lesson explains the meaning of windscreen.', malay: 'Ayat ini menunjukkan penggunaan perkataan “windscreen” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“windscreen”的含义。' }], level: 3, cefr: 'B2', categories: ['Technology'],
  },
  {
    id: 'optimal', term: 'optimal', normalizedTerm: 'optimal', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '最佳的, 最理想的；最优的', chineseExplanation: '最佳的, 最理想的；最优的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Most desirable possible under a restriction expressed or implied.',
    examples: [{ english: 'The passage uses optimal to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “optimal” dalam konteks Bahasa Inggeris British.', chinese: '文章用“optimal”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'grievance', term: 'grievance', normalizedTerm: 'grievance', partOfSpeech: ['noun'],
    chineseShort: '委屈, 冤情, 苦况；不满', chineseExplanation: '委屈, 冤情, 苦况；不满是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'An allegation that something imposes an illegal obligation or denies some legal right or causes injustice.',
    examples: [{ english: 'The lesson explains the meaning of grievance.', malay: 'Ayat ini menunjukkan penggunaan perkataan “grievance” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“grievance”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'discontent', term: 'discontent', normalizedTerm: 'discontent', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '不满', chineseExplanation: '不满是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Make dissatisfied.',
    examples: [{ english: 'The lesson explains the meaning of discontent.', malay: 'Ayat ini menunjukkan penggunaan perkataan “discontent” dalam konteks Bahasa Inggeris British.', chinese: '本课解释了“discontent”的含义。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
  {
    id: 'uneven', term: 'uneven', normalizedTerm: 'uneven', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '不平坦的, 不均等的, 奇数的', chineseExplanation: '不平坦的, 不均等的, 奇数的是第3级词汇，使用时要注意具体语境、搭配和语体。', englishDefinition: 'Not even or uniform as e.g. in shape or texture.',
    examples: [{ english: 'The passage uses uneven to describe the situation.', malay: 'Ayat ini menunjukkan penggunaan perkataan “uneven” dalam konteks Bahasa Inggeris British.', chinese: '文章用“uneven”来描述这种情况。' }], level: 3, cefr: 'B2', categories: ['Daily English'],
  },
] satisfies readonly VocabularyItem[]
