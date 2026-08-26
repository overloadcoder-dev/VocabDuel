import type { VocabularyItem } from '../../types'

/** Advanced Level 4 vocabulary centred on C1 / IELTS 7-8 usage, precision, register, and collocation control. */
export const level4Vocabulary = [
  {
    id: 'implement', term: 'implement', normalizedTerm: 'implement', partOfSpeech: ['verb'], ipa: '/ˈɪmplɪment/',
    chineseShort: '实施；执行', chineseExplanation: '使计划、决定或系统开始实际运作。', englishDefinition: 'To put a plan, decision, or system into effect.',
    examples: [{ english: 'The company will implement a new security policy.', malay: 'Syarikat itu akan melaksanakan dasar keselamatan baharu.', chinese: '公司将实施一项新的安全政策。' }], collocations: ['implement a plan', 'implement changes'], synonyms: ['execute'], level: 4, cefr: 'B2', categories: ['Business', 'Technology'],
  },
  {
    id: 'sustainable', term: 'sustainable', normalizedTerm: 'sustainable', partOfSpeech: ['adjective'], ipa: '/səˈsteɪnəbəl/',
    chineseShort: '可持续的', chineseExplanation: '能够长期维持，同时不过度消耗资源或损害环境的。', englishDefinition: 'Able to continue over time without exhausting resources or causing severe harm.',
    examples: [{ english: 'The city is investing in sustainable transport.', malay: 'Bandar itu sedang melabur dalam pengangkutan mampan.', chinese: '这座城市正在投资可持续交通。' }], collocations: ['sustainable development', 'sustainable growth'], level: 4, cefr: 'B2', categories: ['Academic', 'Business'],
  },
  {
    id: 'ambiguous', term: 'ambiguous', normalizedTerm: 'ambiguous', partOfSpeech: ['adjective'], ipa: '/æmˈbɪɡjuəs/',
    chineseShort: '含糊不清的；有歧义的', chineseExplanation: '可以有多种解释，因此意思不明确。', englishDefinition: 'Open to more than one interpretation and therefore unclear.',
    examples: [{ english: 'The contract contains several ambiguous phrases.', malay: 'Kontrak itu mengandungi beberapa frasa yang kabur.', chinese: '合同中有几个含义不清的短语。' }], synonyms: ['unclear', 'equivocal'], antonyms: ['unambiguous'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'mitigate', term: 'mitigate', normalizedTerm: 'mitigate', partOfSpeech: ['verb'], ipa: '/ˈmɪtɪɡeɪt/',
    chineseShort: '减轻；缓和', chineseExplanation: '降低有害、严重或令人不快之事的程度。', englishDefinition: 'To make something harmful, serious, or unpleasant less severe.',
    examples: [{ english: 'Trees can help mitigate the effects of urban heat.', malay: 'Pokok dapat membantu mengurangkan kesan haba bandar.', chinese: '树木有助于缓解城市高温的影响。' }], collocations: ['mitigate risk', 'mitigate damage'], synonyms: ['alleviate'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'allocate', term: 'allocate', normalizedTerm: 'allocate', partOfSpeech: ['verb'], ipa: '/ˈæləkeɪt/',
    chineseShort: '分配；划拨', chineseExplanation: '为特定目的正式分配金钱、时间、空间或其他资源。', englishDefinition: 'To distribute resources or duties for a particular purpose.',
    examples: [{ english: 'We should allocate more time to user testing.', malay: 'Kita patut memperuntukkan lebih banyak masa untuk ujian pengguna.', chinese: '我们应该为用户测试分配更多时间。' }], collocations: ['allocate resources', 'allocate funds'], synonyms: ['assign'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'vulnerable', term: 'vulnerable', normalizedTerm: 'vulnerable', partOfSpeech: ['adjective'], ipa: '/ˈvʌlnərəbəl/',
    chineseShort: '易受伤害的；脆弱的', chineseExplanation: '容易受到身体、情感或系统层面的伤害或攻击。', englishDefinition: 'Exposed to the possibility of being harmed or attacked.',
    examples: [{ english: 'Old software may be vulnerable to attack.', malay: 'Perisian lama mungkin terdedah kepada serangan.', chinese: '旧软件可能容易受到攻击。' }], collocations: ['vulnerable to attack', 'vulnerable groups'], antonyms: ['protected'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'coherent', term: 'coherent', normalizedTerm: 'coherent', partOfSpeech: ['adjective'], ipa: '/kəʊˈhɪərənt/',
    chineseShort: '连贯的；条理清楚的', chineseExplanation: '各部分以清晰、合乎逻辑的方式连接，使整体容易理解。', englishDefinition: 'Clear and logical, with all parts connected in a sensible way.',
    examples: [{ english: 'Her essay presents a coherent argument.', malay: 'Eseinya mengemukakan hujah yang koheren.', chinese: '她的文章提出了一个连贯的论点。' }], collocations: ['coherent argument', 'coherent explanation'], antonyms: ['incoherent'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'compelling', term: 'compelling', normalizedTerm: 'compelling', partOfSpeech: ['adjective'], ipa: '/kəmˈpelɪŋ/',
    chineseShort: '令人信服的；引人入胜的', chineseExplanation: '非常有说服力或吸引力，让人难以忽视。', englishDefinition: 'Powerfully persuasive, convincing, or interesting.',
    examples: [{ english: 'The report provides compelling evidence for change.', malay: 'Laporan itu memberikan bukti yang meyakinkan untuk perubahan.', chinese: '报告为改革提供了令人信服的证据。' }], collocations: ['compelling evidence', 'compelling reason'], synonyms: ['convincing'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'deteriorate', term: 'deteriorate', normalizedTerm: 'deteriorate', partOfSpeech: ['verb'], ipa: '/dɪˈtɪəriəreɪt/',
    chineseShort: '恶化；变差', chineseExplanation: '质量、状态或关系逐渐变得更差。', englishDefinition: 'To become progressively worse in quality or condition.',
    examples: [{ english: 'The equipment will deteriorate without regular maintenance.', malay: 'Peralatan itu akan merosot tanpa penyelenggaraan berkala.', chinese: '设备若不定期保养，状况会逐渐恶化。' }], collocations: ['deteriorate rapidly', 'health deteriorates'], antonyms: ['improve'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'advocate', term: 'advocate', normalizedTerm: 'advocate', partOfSpeech: ['noun', 'verb'], ipa: '/ˈædvəkeɪt/',
    chineseShort: '提倡；拥护者', chineseExplanation: '公开支持某项政策或观点；作名词时指给予这种支持的人。', englishDefinition: 'To publicly support an idea or policy; also, a person who does so.',
    examples: [{ english: 'Many experts advocate stronger privacy rules.', malay: 'Ramai pakar menyokong peraturan privasi yang lebih ketat.', chinese: '许多专家提倡制定更严格的隐私规则。' }], collocations: ['strongly advocate', 'advocate for change'], synonyms: ['support'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'aberration', term: 'aberration', normalizedTerm: 'aberration', partOfSpeech: ['noun'], ipa: '/ˌabəɹˈeɪʃən/',
    chineseShort: '异常；偏差', chineseExplanation: '表示“异常；偏差”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A departure from what is normal, expected, or typical.',
    examples: [{ english: 'The report uses the expression "a statistical aberration" in its analysis.', malay: 'Penyimpangan.', chinese: '报告在分析中使用了“统计上的异常”这一表达。' }], collocations: ['a statistical aberration', 'a temporary aberration'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'abrupt', term: 'abrupt', normalizedTerm: 'abrupt', partOfSpeech: ['adjective'], ipa: '/ɐbɹˈʌpt/',
    chineseShort: '突然的；唐突的', chineseExplanation: '表示“突然的；唐突的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Sudden and unexpected, or noticeably lacking smoothness or politeness.',
    examples: [{ english: 'The phrase "an abrupt change" is common in formal academic or professional contexts.', malay: 'Mendadak.', chinese: '“突然的变化”这一表达常见于正式的学术或专业语境。' }], collocations: ['an abrupt change', 'an abrupt ending'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'acute', term: 'acute', normalizedTerm: 'acute', partOfSpeech: ['adjective'], ipa: '/ɐkjˈuːt/',
    chineseShort: '严重的；敏锐的', chineseExplanation: '表示“严重的；敏锐的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Very serious or intense, or highly perceptive and sensitive.',
    examples: [{ english: 'Researchers may encounter the expression "an acute shortage" in advanced writing.', malay: 'Serius.', chinese: '研究者可能会在高级写作中遇到“严重短缺”这一表达。' }], collocations: ['an acute shortage', 'acute awareness'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'adjacent', term: 'adjacent', normalizedTerm: 'adjacent', partOfSpeech: ['adjective'], ipa: '/ɐdʒˈeɪsənt/',
    chineseShort: '邻近的；毗连的', chineseExplanation: '表示“邻近的；毗连的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Next to or very close to something else.',
    examples: [{ english: 'The report uses the expression "adjacent areas" in its analysis.', malay: 'Bersebelahan.', chinese: '报告在分析中使用了“相邻区域”这一表达。' }], collocations: ['adjacent areas', 'adjacent buildings'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'adverse', term: 'adverse', normalizedTerm: 'adverse', partOfSpeech: ['adjective'], ipa: '/advˈɜːs/',
    chineseShort: '不利的；有害的', chineseExplanation: '表示“不利的；有害的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Harmful, unfavorable, or likely to prevent success or development.',
    examples: [{ english: 'The phrase "adverse effects" is common in formal academic or professional contexts.', malay: 'Buruk.', chinese: '“不利影响”这一表达常见于正式的学术或专业语境。' }], collocations: ['adverse effects', 'adverse conditions'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'aesthetic', term: 'aesthetic', normalizedTerm: 'aesthetic', partOfSpeech: ['adjective', 'noun'], ipa: '/iːsθˈɛtɪk/',
    chineseShort: '审美的；美学', chineseExplanation: '表示“审美的；美学”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Concerned with beauty, artistic appearance, or principles of taste.',
    examples: [{ english: 'Researchers may encounter the expression "aesthetic appeal" in advanced writing.', malay: 'Estetik.', chinese: '研究者可能会在高级写作中遇到“审美吸引力”这一表达。' }], collocations: ['aesthetic appeal', 'aesthetic value'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'aggregate', term: 'aggregate', normalizedTerm: 'aggregate', partOfSpeech: ['noun', 'verb', 'adjective'], ipa: '/ˈaɡɹɪɡˌeɪt/',
    chineseShort: '总数；汇总；总计的', chineseExplanation: '表示“总数；汇总；总计的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A total formed by combining separate elements, or to combine them into a whole.',
    examples: [{ english: 'The report uses the expression "aggregate data" in its analysis.', malay: 'Agregat.', chinese: '报告在分析中使用了“汇总数据”这一表达。' }], collocations: ['aggregate data', 'aggregate demand'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'albeit', term: 'albeit', normalizedTerm: 'albeit', partOfSpeech: ['conjunction'], ipa: '/ɔːlbˈiːɪt/',
    chineseShort: '尽管；虽然', chineseExplanation: '表示“尽管；虽然”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Although; used to introduce a contrast or qualification.',
    examples: [{ english: 'The phrase "albeit a limited one" is common in formal academic or professional contexts.', malay: 'Walaupun.', chinese: '“尽管范围有限”这一表达常见于正式的学术或专业语境。' }], collocations: ['albeit a limited one', 'small albeit significant'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'align', term: 'align', normalizedTerm: 'align', partOfSpeech: ['verb'], ipa: '/ɐlˈaɪn/',
    chineseShort: '使一致；对齐', chineseExplanation: '表示“使一致；对齐”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To bring into agreement, proper position, or coordinated action.',
    examples: [{ english: 'Researchers may encounter the expression "align with objectives" in advanced writing.', malay: 'Menyelaraskan.', chinese: '研究者可能会在高级写作中遇到“与目标保持一致”这一表达。' }], collocations: ['align with objectives', 'align interests'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'alleviate', term: 'alleviate', normalizedTerm: 'alleviate', partOfSpeech: ['verb'], ipa: '/ɐlˈiːvɪˌeɪt/',
    chineseShort: '缓解；减轻', chineseExplanation: '表示“缓解；减轻”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make pain, a problem, or an unpleasant situation less severe.',
    examples: [{ english: 'The report uses the expression "alleviate pressure" in its analysis.', malay: 'Meringankan.', chinese: '报告在分析中使用了“缓解压力”这一表达。' }], collocations: ['alleviate pressure', 'alleviate poverty'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'alter', term: 'alter', normalizedTerm: 'alter', partOfSpeech: ['verb'], ipa: '/ˈɒltə/',
    chineseShort: '改变；修改', chineseExplanation: '表示“改变；修改”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To change something, usually without making it completely different.',
    examples: [{ english: 'The phrase "alter the outcome" is common in formal academic or professional contexts.', malay: 'Mengubah.', chinese: '“改变结果”这一表达常见于正式的学术或专业语境。' }], collocations: ['alter the outcome', 'alter perceptions'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'ambivalent', term: 'ambivalent', normalizedTerm: 'ambivalent', partOfSpeech: ['adjective'], ipa: '/ambˈɪvələnt/',
    chineseShort: '矛盾的；犹豫不决的', chineseExplanation: '表示“矛盾的；犹豫不决的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having mixed or contradictory feelings about a person, issue, or choice.',
    examples: [{ english: 'Researchers may encounter the expression "ambivalent feelings" in advanced writing.', malay: 'Berbelah bahagi.', chinese: '研究者可能会在高级写作中遇到“矛盾的感受”这一表达。' }], collocations: ['ambivalent feelings', 'remain ambivalent'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'amend', term: 'amend', normalizedTerm: 'amend', partOfSpeech: ['verb'], ipa: '/ɐmˈɛnd/',
    chineseShort: '修订；修改', chineseExplanation: '表示“修订；修改”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To formally change a law, document, statement, or proposal.',
    examples: [{ english: 'The report uses the expression "amend the legislation" in its analysis.', malay: 'Meminda.', chinese: '报告在分析中使用了“修订法规”这一表达。' }], collocations: ['amend the legislation', 'amend a contract'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'analogy', term: 'analogy', normalizedTerm: 'analogy', partOfSpeech: ['noun'], ipa: '/ɐnˈalədʒi/',
    chineseShort: '类比；比拟', chineseExplanation: '表示“类比；比拟”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A comparison between things that share similar features, used to explain an idea.',
    examples: [{ english: 'The phrase "draw an analogy" is common in formal academic or professional contexts.', malay: 'Analogi.', chinese: '“作类比”这一表达常见于正式的学术或专业语境。' }], collocations: ['draw an analogy', 'a useful analogy'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'ancillary', term: 'ancillary', normalizedTerm: 'ancillary', partOfSpeech: ['adjective'], ipa: '/ˈansɪləɹi/',
    chineseShort: '辅助的；附属的', chineseExplanation: '表示“辅助的；附属的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Providing necessary support to the main activity, system, or function.',
    examples: [{ english: 'Researchers may encounter the expression "ancillary services" in advanced writing.', malay: 'Sampingan.', chinese: '研究者可能会在高级写作中遇到“辅助服务”这一表达。' }], collocations: ['ancillary services', 'ancillary costs'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'anticipate', term: 'anticipate', normalizedTerm: 'anticipate', partOfSpeech: ['verb'], ipa: '/antˈɪsɪpˌeɪt/',
    chineseShort: '预期；预见', chineseExplanation: '表示“预期；预见”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To expect or predict something and often prepare for it in advance.',
    examples: [{ english: 'The report uses the expression "anticipate demand" in its analysis.', malay: 'Menjangkakan.', chinese: '报告在分析中使用了“预期需求”这一表达。' }], collocations: ['anticipate demand', 'anticipate problems'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'apprehensive', term: 'apprehensive', normalizedTerm: 'apprehensive', partOfSpeech: ['adjective'], ipa: '/ˌapɹɪhˈɛnsɪv/',
    chineseShort: '忧虑的；不安的', chineseExplanation: '表示“忧虑的；不安的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Anxious or fearful that something unpleasant may happen.',
    examples: [{ english: 'The phrase "apprehensive about change" is common in formal academic or professional contexts.', malay: 'Bimbang.', chinese: '“对变化感到忧虑”这一表达常见于正式的学术或专业语境。' }], collocations: ['apprehensive about change', 'feel apprehensive'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'arbitrary', term: 'arbitrary', normalizedTerm: 'arbitrary', partOfSpeech: ['adjective'], ipa: '/ˈɑːbɪtɹəɹi/',
    chineseShort: '任意的；武断的', chineseExplanation: '表示“任意的；武断的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Based on personal choice or chance rather than a clear reason, rule, or system.',
    examples: [{ english: 'Researchers may encounter the expression "an arbitrary decision" in advanced writing.', malay: 'Sewenang-wenangnya.', chinese: '研究者可能会在高级写作中遇到“武断的决定”这一表达。' }], collocations: ['an arbitrary decision', 'arbitrary limits'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'arduous', term: 'arduous', normalizedTerm: 'arduous', partOfSpeech: ['adjective'], ipa: '/ˈɑːdjuːəs/',
    chineseShort: '艰巨的；费力的', chineseExplanation: '表示“艰巨的；费力的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Requiring sustained effort because it is difficult, tiring, or demanding.',
    examples: [{ english: 'The report uses the expression "an arduous task" in its analysis.', malay: 'Sukar.', chinese: '报告在分析中使用了“艰巨的任务”这一表达。' }], collocations: ['an arduous task', 'an arduous process'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'articulate', term: 'articulate', normalizedTerm: 'articulate', partOfSpeech: ['verb', 'adjective'], ipa: '/ɑːtˈɪkjʊlˌeɪt/',
    chineseShort: '清楚表达；表达清晰的', chineseExplanation: '表示“清楚表达；表达清晰的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To express ideas clearly and effectively, or able to do so.',
    examples: [{ english: 'The phrase "articulate a position" is common in formal academic or professional contexts.', malay: 'Menyatakan dengan jelas.', chinese: '“清楚表达立场”这一表达常见于正式的学术或专业语境。' }], collocations: ['articulate a position', 'articulate concerns'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'ascertain', term: 'ascertain', normalizedTerm: 'ascertain', partOfSpeech: ['verb'], ipa: '/ˌasətˈeɪn/',
    chineseShort: '查明；确定', chineseExplanation: '表示“查明；确定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To discover or establish something with certainty through investigation or evidence.',
    examples: [{ english: 'Researchers may encounter the expression "ascertain the facts" in advanced writing.', malay: 'Memastikan.', chinese: '研究者可能会在高级写作中遇到“查明事实”这一表达。' }], collocations: ['ascertain the facts', 'ascertain the cause'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'assert', term: 'assert', normalizedTerm: 'assert', partOfSpeech: ['verb'], ipa: '/ɐsˈɜːt/',
    chineseShort: '断言；坚持主张', chineseExplanation: '表示“断言；坚持主张”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To state something confidently and forcefully as true or valid.',
    examples: [{ english: 'The report uses the expression "assert a claim" in its analysis.', malay: 'Menegaskan.', chinese: '报告在分析中使用了“坚持主张”这一表达。' }], collocations: ['assert a claim', 'assert authority'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'attain', term: 'attain', normalizedTerm: 'attain', partOfSpeech: ['verb'], ipa: '/ɐtˈeɪn/',
    chineseShort: '达到；获得', chineseExplanation: '表示“达到；获得”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To succeed in reaching a desired level, state, or achievement.',
    examples: [{ english: 'The phrase "attain a goal" is common in formal academic or professional contexts.', malay: 'Mencapai.', chinese: '“达到目标”这一表达常见于正式的学术或专业语境。' }], collocations: ['attain a goal', 'attain proficiency'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'attribute', term: 'attribute', normalizedTerm: 'attribute', partOfSpeech: ['noun', 'verb'], ipa: '/ˈatɹɪbjˌuːt/',
    chineseShort: '属性；归因于', chineseExplanation: '表示“属性；归因于”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A quality or feature, or to regard something as being caused by a particular factor.',
    examples: [{ english: 'Researchers may encounter the expression "attribute success to effort" in advanced writing.', malay: 'Mengaitkan.', chinese: '研究者可能会在高级写作中遇到“把成功归因于努力”这一表达。' }], collocations: ['attribute success to effort', 'a key attribute'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'authentic', term: 'authentic', normalizedTerm: 'authentic', partOfSpeech: ['adjective'], ipa: '/ɔːθˈɛntɪk/',
    chineseShort: '真实的；可信的', chineseExplanation: '表示“真实的；可信的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Genuine, accurate, and not false, copied, or artificial.',
    examples: [{ english: 'The report uses the expression "authentic evidence" in its analysis.', malay: 'Tulen.', chinese: '报告在分析中使用了“真实证据”这一表达。' }], collocations: ['authentic evidence', 'authentic experience'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'autonomy', term: 'autonomy', normalizedTerm: 'autonomy', partOfSpeech: ['noun'], ipa: '/ɔːtˈɒnəmi/',
    chineseShort: '自主权；自治', chineseExplanation: '表示“自主权；自治”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability or right to make independent decisions and govern oneself.',
    examples: [{ english: 'The phrase "greater autonomy" is common in formal academic or professional contexts.', malay: 'Autonomi.', chinese: '“更大的自主权”这一表达常见于正式的学术或专业语境。' }], collocations: ['greater autonomy', 'professional autonomy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'avert', term: 'avert', normalizedTerm: 'avert', partOfSpeech: ['verb'], ipa: '/ɐvˈɜːt/',
    chineseShort: '避免；防止', chineseExplanation: '表示“避免；防止”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To prevent an undesirable event or outcome from happening.',
    examples: [{ english: 'Researchers may encounter the expression "avert a crisis" in advanced writing.', malay: 'Mencegah.', chinese: '研究者可能会在高级写作中遇到“避免危机”这一表达。' }], collocations: ['avert a crisis', 'avert disaster'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'bolster', term: 'bolster', normalizedTerm: 'bolster', partOfSpeech: ['verb'], ipa: '/bˈəʊlstə/',
    chineseShort: '加强；支持', chineseExplanation: '表示“加强；支持”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To strengthen, support, or improve something.',
    examples: [{ english: 'The report uses the expression "bolster confidence" in its analysis.', malay: 'Mengukuhkan.', chinese: '报告在分析中使用了“增强信心”这一表达。' }], collocations: ['bolster confidence', 'bolster the economy'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'breach', term: 'breach', normalizedTerm: 'breach', partOfSpeech: ['noun', 'verb'], ipa: '/bɹˈiːtʃ/',
    chineseShort: '违反；缺口', chineseExplanation: '表示“违反；缺口”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A violation of a rule or agreement, or a break in a barrier or relationship.',
    examples: [{ english: 'The phrase "a breach of trust" is common in formal academic or professional contexts.', malay: 'Pelanggaran.', chinese: '“违反信任”这一表达常见于正式的学术或专业语境。' }], collocations: ['a breach of trust', 'breach regulations'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'candid', term: 'candid', normalizedTerm: 'candid', partOfSpeech: ['adjective'], ipa: '/kˈandɪd/',
    chineseShort: '坦率的；直言不讳的', chineseExplanation: '表示“坦率的；直言不讳的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Honest and direct, even when the truth may be uncomfortable.',
    examples: [{ english: 'Researchers may encounter the expression "a candid assessment" in advanced writing.', malay: 'Terus terang.', chinese: '研究者可能会在高级写作中遇到“坦率的评估”这一表达。' }], collocations: ['a candid assessment', 'candid discussion'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'catalyst', term: 'catalyst', normalizedTerm: 'catalyst', partOfSpeech: ['noun'], ipa: '/kˈatɐlˌɪst/',
    chineseShort: '催化因素；促进者', chineseExplanation: '表示“催化因素；促进者”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something that causes or accelerates significant change or action.',
    examples: [{ english: 'The report uses the expression "a catalyst for change" in its analysis.', malay: 'Pemangkin.', chinese: '报告在分析中使用了“推动变革的因素”这一表达。' }], collocations: ['a catalyst for change', 'economic catalyst'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'cease', term: 'cease', normalizedTerm: 'cease', partOfSpeech: ['verb'], ipa: '/sˈiːs/',
    chineseShort: '停止；终止', chineseExplanation: '表示“停止；终止”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To stop happening or to bring an activity to an end.',
    examples: [{ english: 'The phrase "cease operations" is common in formal academic or professional contexts.', malay: 'Menghentikan.', chinese: '“停止运营”这一表达常见于正式的学术或专业语境。' }], collocations: ['cease operations', 'cease production'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'coincide', term: 'coincide', normalizedTerm: 'coincide', partOfSpeech: ['verb'], ipa: '/kˌəʊɪnsˈaɪd/',
    chineseShort: '同时发生；一致', chineseExplanation: '表示“同时发生；一致”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To occur at the same time or to be in agreement with something.',
    examples: [{ english: 'Researchers may encounter the expression "coincide with findings" in advanced writing.', malay: 'Bertepatan.', chinese: '研究者可能会在高级写作中遇到“与研究结果一致”这一表达。' }], collocations: ['coincide with findings', 'coincide with the event'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'commence', term: 'commence', normalizedTerm: 'commence', partOfSpeech: ['verb'], ipa: '/kəmˈɛns/',
    chineseShort: '开始；着手', chineseExplanation: '表示“开始；着手”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To begin, especially in a formal or official context.',
    examples: [{ english: 'The report uses the expression "commence proceedings" in its analysis.', malay: 'Memulakan.', chinese: '报告在分析中使用了“开始程序”这一表达。' }], collocations: ['commence proceedings', 'commence operations'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'compensate', term: 'compensate', normalizedTerm: 'compensate', partOfSpeech: ['verb'], ipa: '/kˈɒmpənsˌeɪt/',
    chineseShort: '补偿；弥补', chineseExplanation: '表示“补偿；弥补”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make up for loss, damage, weakness, or disadvantage, often by providing something in return.',
    examples: [{ english: 'The phrase "compensate for losses" is common in formal academic or professional contexts.', malay: 'Mengimbangi.', chinese: '“弥补损失”这一表达常见于正式的学术或专业语境。' }], collocations: ['compensate for losses', 'compensate employees'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'complement', term: 'complement', normalizedTerm: 'complement', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɒmplɪmənt/',
    chineseShort: '补充；相辅相成', chineseExplanation: '表示“补充；相辅相成”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something that completes or improves another thing, or to do so by adding a suitable quality.',
    examples: [{ english: 'Researchers may encounter the expression "complement existing measures" in advanced writing.', malay: 'Melengkapi.', chinese: '研究者可能会在高级写作中遇到“补充现有措施”这一表达。' }], collocations: ['complement existing measures', 'a useful complement'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'comprehensive', term: 'comprehensive', normalizedTerm: 'comprehensive', partOfSpeech: ['adjective'], ipa: '/kˌɒmpɹɪhˈɛnsɪv/',
    chineseShort: '全面的；综合的', chineseExplanation: '表示“全面的；综合的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Including all or nearly all important aspects of a subject.',
    examples: [{ english: 'The report uses the expression "a comprehensive review" in its analysis.', malay: 'Menyeluruh.', chinese: '报告在分析中使用了“全面审查”这一表达。' }], collocations: ['a comprehensive review', 'comprehensive coverage'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'concede', term: 'concede', normalizedTerm: 'concede', partOfSpeech: ['verb'], ipa: '/kənsˈiːd/',
    chineseShort: '承认；让步', chineseExplanation: '表示“承认；让步”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To admit that something is true or valid, often reluctantly, or to yield a point.',
    examples: [{ english: 'The phrase "concede a point" is common in formal academic or professional contexts.', malay: 'Mengakui.', chinese: '“承认一个观点”这一表达常见于正式的学术或专业语境。' }], collocations: ['concede a point', 'concede defeat'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'concurrent', term: 'concurrent', normalizedTerm: 'concurrent', partOfSpeech: ['adjective'], ipa: '/kənkˈʌɹənt/',
    chineseShort: '同时发生的；并行的', chineseExplanation: '表示“同时发生的；并行的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Existing, happening, or operating at the same time.',
    examples: [{ english: 'Researchers may encounter the expression "concurrent processes" in advanced writing.', malay: 'Serentak.', chinese: '研究者可能会在高级写作中遇到“并行过程”这一表达。' }], collocations: ['concurrent processes', 'concurrent events'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'confer', term: 'confer', normalizedTerm: 'confer', partOfSpeech: ['verb'], ipa: '/kənfˈɜː/',
    chineseShort: '授予；商议', chineseExplanation: '表示“授予；商议”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To grant a status or benefit, or to discuss something in order to reach a decision.',
    examples: [{ english: 'The report uses the expression "confer authority" in its analysis.', malay: 'Memberikan.', chinese: '报告在分析中使用了“授予权力”这一表达。' }], collocations: ['confer authority', 'confer with colleagues'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'confine', term: 'confine', normalizedTerm: 'confine', partOfSpeech: ['verb'], ipa: '/kənfˈaɪn/',
    chineseShort: '限制；局限', chineseExplanation: '表示“限制；局限”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To keep something within particular limits, boundaries, or conditions.',
    examples: [{ english: 'The phrase "confine the discussion" is common in formal academic or professional contexts.', malay: 'Mengehadkan.', chinese: '“限制讨论范围”这一表达常见于正式的学术或专业语境。' }], collocations: ['confine the discussion', 'confine access'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'conform', term: 'conform', normalizedTerm: 'conform', partOfSpeech: ['verb'], ipa: '/kənfˈɔːm/',
    chineseShort: '遵守；符合', chineseExplanation: '表示“遵守；符合”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To behave according to a rule, standard, expectation, or established pattern.',
    examples: [{ english: 'Researchers may encounter the expression "conform to standards" in advanced writing.', malay: 'Mematuhi.', chinese: '研究者可能会在高级写作中遇到“符合标准”这一表达。' }], collocations: ['conform to standards', 'conform to regulations'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'consensus', term: 'consensus', normalizedTerm: 'consensus', partOfSpeech: ['noun'], ipa: '/kənsˈɛnsəs/',
    chineseShort: '共识；一致意见', chineseExplanation: '表示“共识；一致意见”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'General agreement among members of a group or community.',
    examples: [{ english: 'The report uses the expression "reach a consensus" in its analysis.', malay: 'Persetujuan.', chinese: '报告在分析中使用了“达成共识”这一表达。' }], collocations: ['reach a consensus', 'broad consensus'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'constitute', term: 'constitute', normalizedTerm: 'constitute', partOfSpeech: ['verb'], ipa: '/kˈɒnstɪtjˌuːt/',
    chineseShort: '构成；组成', chineseExplanation: '表示“构成；组成”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To form, make up, or be regarded as a particular thing.',
    examples: [{ english: 'The phrase "constitute a risk" is common in formal academic or professional contexts.', malay: 'Merupakan.', chinese: '“构成风险”这一表达常见于正式的学术或专业语境。' }], collocations: ['constitute a risk', 'constitute the majority'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'constrain', term: 'constrain', normalizedTerm: 'constrain', partOfSpeech: ['verb'], ipa: '/kənstɹˈeɪn/',
    chineseShort: '限制；约束', chineseExplanation: '表示“限制；约束”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To limit someone\'s freedom of action or restrict the development of something.',
    examples: [{ english: 'Researchers may encounter the expression "constrain growth" in advanced writing.', malay: 'Mengekang.', chinese: '研究者可能会在高级写作中遇到“限制增长”这一表达。' }], collocations: ['constrain growth', 'constrain options'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'contemplate', term: 'contemplate', normalizedTerm: 'contemplate', partOfSpeech: ['verb'], ipa: '/kˈɒntɪmplˌeɪt/',
    chineseShort: '深思；考虑', chineseExplanation: '表示“深思；考虑”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To think carefully about an action, possibility, or issue for some time.',
    examples: [{ english: 'The report uses the expression "contemplate a change" in its analysis.', malay: 'Mempertimbangkan.', chinese: '报告在分析中使用了“考虑改变”这一表达。' }], collocations: ['contemplate a change', 'contemplate the implications'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'contradict', term: 'contradict', normalizedTerm: 'contradict', partOfSpeech: ['verb'], ipa: '/kˌɒntɹədˈɪkt/',
    chineseShort: '反驳；与…矛盾', chineseExplanation: '表示“反驳；与…矛盾”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To state the opposite of something or be inconsistent with it.',
    examples: [{ english: 'The phrase "contradict the evidence" is common in formal academic or professional contexts.', malay: 'Bercanggah dengan.', chinese: '“与证据相矛盾”这一表达常见于正式的学术或专业语境。' }], collocations: ['contradict the evidence', 'contradict a claim'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'controversial', term: 'controversial', normalizedTerm: 'controversial', partOfSpeech: ['adjective'], ipa: '/kˌɒntɹəvˈɜːʃəl/',
    chineseShort: '有争议的', chineseExplanation: '表示“有争议的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Causing or likely to cause disagreement, debate, or strong opposing opinions.',
    examples: [{ english: 'Researchers may encounter the expression "a controversial proposal" in advanced writing.', malay: 'Kontroversial.', chinese: '研究者可能会在高级写作中遇到“有争议的提案”这一表达。' }], collocations: ['a controversial proposal', 'controversial issue'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'converge', term: 'converge', normalizedTerm: 'converge', partOfSpeech: ['verb'], ipa: '/kənvˈɜːdʒ/',
    chineseShort: '汇聚；趋同', chineseExplanation: '表示“汇聚；趋同”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To move towards the same point, result, opinion, or level.',
    examples: [{ english: 'The report uses the expression "converge on a solution" in its analysis.', malay: 'Bertumpu.', chinese: '报告在分析中使用了“趋向同一解决方案”这一表达。' }], collocations: ['converge on a solution', 'converging trends'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'convey', term: 'convey', normalizedTerm: 'convey', partOfSpeech: ['verb'], ipa: '/kənvˈeɪ/',
    chineseShort: '传达；表达', chineseExplanation: '表示“传达；表达”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To communicate or make an idea, feeling, or information known.',
    examples: [{ english: 'The phrase "convey meaning" is common in formal academic or professional contexts.', malay: 'Menyampaikan.', chinese: '“传达含义”这一表达常见于正式的学术或专业语境。' }], collocations: ['convey meaning', 'convey information'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'corroborate', term: 'corroborate', normalizedTerm: 'corroborate', partOfSpeech: ['verb'], ipa: '/kəɹˈɒbəɹˌeɪt/',
    chineseShort: '证实；佐证', chineseExplanation: '表示“证实；佐证”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To confirm or support a statement, theory, or finding with additional evidence.',
    examples: [{ english: 'Researchers may encounter the expression "corroborate the findings" in advanced writing.', malay: 'Menyokong.', chinese: '研究者可能会在高级写作中遇到“佐证研究结果”这一表达。' }], collocations: ['corroborate the findings', 'corroborate a claim'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'credible', term: 'credible', normalizedTerm: 'credible', partOfSpeech: ['adjective'], ipa: '/kɹˈɛdɪbəl/',
    chineseShort: '可信的；可靠的', chineseExplanation: '表示“可信的；可靠的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to be believed or trusted because it appears convincing and reliable.',
    examples: [{ english: 'The report uses the expression "credible evidence" in its analysis.', malay: 'Boleh dipercayai.', chinese: '报告在分析中使用了“可信证据”这一表达。' }], collocations: ['credible evidence', 'credible source'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'criterion', term: 'criterion', normalizedTerm: 'criterion', partOfSpeech: ['noun'], ipa: '/kɹaɪtˈiəɹɪən/',
    chineseShort: '标准；准则', chineseExplanation: '表示“标准；准则”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A principle or standard used to judge, decide, or evaluate something.',
    examples: [{ english: 'The phrase "a key criterion" is common in formal academic or professional contexts.', malay: 'Kriteria.', chinese: '“关键标准”这一表达常见于正式的学术或专业语境。' }], collocations: ['a key criterion', 'selection criterion'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'cumulative', term: 'cumulative', normalizedTerm: 'cumulative', partOfSpeech: ['adjective'], ipa: '/kjˈuːmjʊlətˌɪv/',
    chineseShort: '累积的；累计的', chineseExplanation: '表示“累积的；累计的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Increasing or becoming greater through successive additions over time.',
    examples: [{ english: 'Researchers may encounter the expression "cumulative effect" in advanced writing.', malay: 'Terkumpul.', chinese: '研究者可能会在高级写作中遇到“累积效应”这一表达。' }], collocations: ['cumulative effect', 'cumulative impact'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'curb', term: 'curb', normalizedTerm: 'curb', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɜːb/',
    chineseShort: '遏制；限制', chineseExplanation: '表示“遏制；限制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To control or reduce something undesirable, or a measure that does so.',
    examples: [{ english: 'The report uses the expression "curb inflation" in its analysis.', malay: 'Membendung.', chinese: '报告在分析中使用了“抑制通胀”这一表达。' }], collocations: ['curb inflation', 'curb excessive spending'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'deduce', term: 'deduce', normalizedTerm: 'deduce', partOfSpeech: ['verb'], ipa: '/dɪdjˈuːs/',
    chineseShort: '推断；演绎', chineseExplanation: '表示“推断；演绎”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To reach a conclusion by reasoning from available evidence or facts.',
    examples: [{ english: 'The phrase "deduce the cause" is common in formal academic or professional contexts.', malay: 'Menyimpulkan.', chinese: '“推断原因”这一表达常见于正式的学术或专业语境。' }], collocations: ['deduce the cause', 'deduce from evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'delineate', term: 'delineate', normalizedTerm: 'delineate', partOfSpeech: ['verb'], ipa: '/dɪlˈɪniːˌeɪt/',
    chineseShort: '界定；勾勒', chineseExplanation: '表示“界定；勾勒”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To describe, define, or mark the boundaries of something precisely.',
    examples: [{ english: 'Researchers may encounter the expression "delineate responsibilities" in advanced writing.', malay: 'Menggariskan.', chinese: '研究者可能会在高级写作中遇到“明确职责”这一表达。' }], collocations: ['delineate responsibilities', 'delineate the scope'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'denote', term: 'denote', normalizedTerm: 'denote', partOfSpeech: ['verb'], ipa: '/dɪnˈəʊt/',
    chineseShort: '表示；指代', chineseExplanation: '表示“表示；指代”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To indicate, represent, or be a sign of a particular meaning.',
    examples: [{ english: 'The report uses the expression "denote a category" in its analysis.', malay: 'Menandakan.', chinese: '报告在分析中使用了“表示一个类别”这一表达。' }], collocations: ['denote a category', 'denote significance'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'denounce', term: 'denounce', normalizedTerm: 'denounce', partOfSpeech: ['verb'], ipa: '/dɪnˈaʊns/',
    chineseShort: '公开谴责', chineseExplanation: '表示“公开谴责”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To publicly condemn or criticise someone or something strongly.',
    examples: [{ english: 'The phrase "denounce the policy" is common in formal academic or professional contexts.', malay: 'Mengecam.', chinese: '“谴责该政策”这一表达常见于正式的学术或专业语境。' }], collocations: ['denounce the policy', 'denounce corruption'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'depict', term: 'depict', normalizedTerm: 'depict', partOfSpeech: ['verb'], ipa: '/dɪpˈɪkt/',
    chineseShort: '描绘；描述', chineseExplanation: '表示“描绘；描述”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To represent or show something in words, pictures, or another form.',
    examples: [{ english: 'Researchers may encounter the expression "depict a trend" in advanced writing.', malay: 'Menggambarkan.', chinese: '研究者可能会在高级写作中遇到“描绘趋势”这一表达。' }], collocations: ['depict a trend', 'depict reality'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'derive', term: 'derive', normalizedTerm: 'derive', partOfSpeech: ['verb'], ipa: '/dɪɹˈaɪv/',
    chineseShort: '获得；源自', chineseExplanation: '表示“获得；源自”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To obtain something from a source or to originate from something.',
    examples: [{ english: 'The report uses the expression "derive benefits" in its analysis.', malay: 'Memperoleh.', chinese: '报告在分析中使用了“获得益处”这一表达。' }], collocations: ['derive benefits', 'derive from evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'detrimental', term: 'detrimental', normalizedTerm: 'detrimental', partOfSpeech: ['adjective'], ipa: '/dˌɛtɹɪmˈɛntəl/',
    chineseShort: '有害的；不利的', chineseExplanation: '表示“有害的；不利的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Causing harm, damage, or a negative effect.',
    examples: [{ english: 'The phrase "detrimental effects" is common in formal academic or professional contexts.', malay: 'Memudaratkan.', chinese: '“有害影响”这一表达常见于正式的学术或专业语境。' }], collocations: ['detrimental effects', 'detrimental to health'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'deviate', term: 'deviate', normalizedTerm: 'deviate', partOfSpeech: ['verb'], ipa: '/dˈiːvɪˌeɪt/',
    chineseShort: '偏离；背离', chineseExplanation: '表示“偏离；背离”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To depart from an established course, standard, pattern, or expectation.',
    examples: [{ english: 'Researchers may encounter the expression "deviate from the plan" in advanced writing.', malay: 'Menyimpang.', chinese: '研究者可能会在高级写作中遇到“偏离计划”这一表达。' }], collocations: ['deviate from the plan', 'deviate from norms'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'diminish', term: 'diminish', normalizedTerm: 'diminish', partOfSpeech: ['verb'], ipa: '/dɪmˈɪnɪʃ/',
    chineseShort: '减少；削弱', chineseExplanation: '表示“减少；削弱”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To become or make something smaller, weaker, or less important.',
    examples: [{ english: 'The report uses the expression "diminish the impact" in its analysis.', malay: 'Mengurangkan.', chinese: '报告在分析中使用了“减弱影响”这一表达。' }], collocations: ['diminish the impact', 'diminish returns'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'discern', term: 'discern', normalizedTerm: 'discern', partOfSpeech: ['verb'], ipa: '/dɪsˈɜːn/',
    chineseShort: '辨别；察觉', chineseExplanation: '表示“辨别；察觉”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To recognise, identify, or understand something that is not immediately obvious.',
    examples: [{ english: 'The phrase "discern a pattern" is common in formal academic or professional contexts.', malay: 'Mengenal pasti.', chinese: '“辨别模式”这一表达常见于正式的学术或专业语境。' }], collocations: ['discern a pattern', 'discern differences'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'discrepancy', term: 'discrepancy', normalizedTerm: 'discrepancy', partOfSpeech: ['noun'], ipa: '/dɪskɹˈɛpənsi/',
    chineseShort: '差异；不一致', chineseExplanation: '表示“差异；不一致”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A difference between two things that should correspond or agree.',
    examples: [{ english: 'Researchers may encounter the expression "a significant discrepancy" in advanced writing.', malay: 'Percanggahan.', chinese: '研究者可能会在高级写作中遇到“显著差异”这一表达。' }], collocations: ['a significant discrepancy', 'discrepancy in data'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'discrete', term: 'discrete', normalizedTerm: 'discrete', partOfSpeech: ['adjective'], ipa: '/dɪskɹˈiːt/',
    chineseShort: '分离的；独立的', chineseExplanation: '表示“分离的；独立的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Separate and distinct rather than continuous or connected.',
    examples: [{ english: 'The report uses the expression "discrete categories" in its analysis.', malay: 'Berasingan.', chinese: '报告在分析中使用了“独立类别”这一表达。' }], collocations: ['discrete categories', 'discrete elements'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'discriminate', term: 'discriminate', normalizedTerm: 'discriminate', partOfSpeech: ['verb'], ipa: '/dɪskɹˈɪmɪnˌeɪt/',
    chineseShort: '区分；歧视', chineseExplanation: '表示“区分；歧视”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To recognise a difference between things, or to treat people unfairly based on group characteristics.',
    examples: [{ english: 'The phrase "discriminate between variables" is common in formal academic or professional contexts.', malay: 'Membezakan.', chinese: '“区分变量”这一表达常见于正式的学术或专业语境。' }], collocations: ['discriminate between variables', 'discriminate against groups'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'disseminate', term: 'disseminate', normalizedTerm: 'disseminate', partOfSpeech: ['verb'], ipa: '/dɪsˈɛmɪnˌeɪt/',
    chineseShort: '传播；散布', chineseExplanation: '表示“传播；散布”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To spread information, ideas, or knowledge widely.',
    examples: [{ english: 'Researchers may encounter the expression "disseminate information" in advanced writing.', malay: 'Menyebarkan.', chinese: '研究者可能会在高级写作中遇到“传播信息”这一表达。' }], collocations: ['disseminate information', 'disseminate research findings'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'distort', term: 'distort', normalizedTerm: 'distort', partOfSpeech: ['verb'], ipa: '/dɪstˈɔːt/',
    chineseShort: '歪曲；扭曲', chineseExplanation: '表示“歪曲；扭曲”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To change something so that it becomes inaccurate, misleading, or unnatural.',
    examples: [{ english: 'The report uses the expression "distort the findings" in its analysis.', malay: 'Memutarbelitkan.', chinese: '报告在分析中使用了“歪曲研究结果”这一表达。' }], collocations: ['distort the findings', 'distort perception'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'divergent', term: 'divergent', normalizedTerm: 'divergent', partOfSpeech: ['adjective'], ipa: '/daɪvˈɜːdʒənt/',
    chineseShort: '分歧的；不同方向的', chineseExplanation: '表示“分歧的；不同方向的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Developing or moving in different directions, or differing significantly in opinion or result.',
    examples: [{ english: 'The phrase "divergent views" is common in formal academic or professional contexts.', malay: 'Berbeza.', chinese: '“分歧观点”这一表达常见于正式的学术或专业语境。' }], collocations: ['divergent views', 'divergent trends'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'doctrine', term: 'doctrine', normalizedTerm: 'doctrine', partOfSpeech: ['noun'], ipa: '/dˈɒktɹɪn/',
    chineseShort: '学说；原则', chineseExplanation: '表示“学说；原则”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A set of beliefs, principles, or policies taught or accepted by a group or institution.',
    examples: [{ english: 'Researchers may encounter the expression "legal doctrine" in advanced writing.', malay: 'Doktrin.', chinese: '研究者可能会在高级写作中遇到“法律学说”这一表达。' }], collocations: ['legal doctrine', 'economic doctrine'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'domain', term: 'domain', normalizedTerm: 'domain', partOfSpeech: ['noun'], ipa: '/dəmˈeɪn/',
    chineseShort: '领域；范围', chineseExplanation: '表示“领域；范围”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A particular area of knowledge, activity, responsibility, or influence.',
    examples: [{ english: 'The report uses the expression "a specific domain" in its analysis.', malay: 'Bidang.', chinese: '报告在分析中使用了“特定领域”这一表达。' }], collocations: ['a specific domain', 'public domain'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'eclectic', term: 'eclectic', normalizedTerm: 'eclectic', partOfSpeech: ['adjective'], ipa: '/ɪklˈɛktɪk/',
    chineseShort: '兼收并蓄的；多样混合的', chineseExplanation: '表示“兼收并蓄的；多样混合的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Selecting ideas, styles, or methods from a wide variety of sources.',
    examples: [{ english: 'The phrase "an eclectic approach" is common in formal academic or professional contexts.', malay: 'Pelbagai.', chinese: '“兼收并蓄的方法”这一表达常见于正式的学术或专业语境。' }], collocations: ['an eclectic approach', 'eclectic influences'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'elaborate', term: 'elaborate', normalizedTerm: 'elaborate', partOfSpeech: ['verb', 'adjective'], ipa: '/ɪlˈabəɹˌeɪt/',
    chineseShort: '详细说明；精心设计的', chineseExplanation: '表示“详细说明；精心设计的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To explain in greater detail, or highly detailed and complicated in design.',
    examples: [{ english: 'Researchers may encounter the expression "elaborate on the findings" in advanced writing.', malay: 'Menghuraikan.', chinese: '研究者可能会在高级写作中遇到“详细说明研究结果”这一表达。' }], collocations: ['elaborate on the findings', 'an elaborate system'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'elicit', term: 'elicit', normalizedTerm: 'elicit', partOfSpeech: ['verb'], ipa: '/ɪlˈɪsɪt/',
    chineseShort: '引出；诱发', chineseExplanation: '表示“引出；诱发”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cause or draw out a response, reaction, answer, or information.',
    examples: [{ english: 'The report uses the expression "elicit a response" in its analysis.', malay: 'Mendapatkan.', chinese: '报告在分析中使用了“引出回应”这一表达。' }], collocations: ['elicit a response', 'elicit information'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'eminent', term: 'eminent', normalizedTerm: 'eminent', partOfSpeech: ['adjective'], ipa: '/ˈɛmɪnənt/',
    chineseShort: '杰出的；著名的', chineseExplanation: '表示“杰出的；著名的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Highly respected and distinguished within a profession or field.',
    examples: [{ english: 'The phrase "an eminent scholar" is common in formal academic or professional contexts.', malay: 'Terkemuka.', chinese: '“杰出学者”这一表达常见于正式的学术或专业语境。' }], collocations: ['an eminent scholar', 'eminent experts'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'empirical', term: 'empirical', normalizedTerm: 'empirical', partOfSpeech: ['adjective'], ipa: '/ɛmpˈɪɹɪkəl/',
    chineseShort: '实证的；经验性的', chineseExplanation: '表示“实证的；经验性的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Based on observation, experience, or experiment rather than theory alone.',
    examples: [{ english: 'Researchers may encounter the expression "empirical evidence" in advanced writing.', malay: 'Empirik.', chinese: '研究者可能会在高级写作中遇到“实证证据”这一表达。' }], collocations: ['empirical evidence', 'empirical research'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'encompass', term: 'encompass', normalizedTerm: 'encompass', partOfSpeech: ['verb'], ipa: '/ɛnkˈʌmpəs/',
    chineseShort: '包含；涵盖', chineseExplanation: '表示“包含；涵盖”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To include a wide range of things or cover something completely.',
    examples: [{ english: 'The report uses the expression "encompass multiple factors" in its analysis.', malay: 'Merangkumi.', chinese: '报告在分析中使用了“涵盖多个因素”这一表达。' }], collocations: ['encompass multiple factors', 'encompass the whole process'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'endorse', term: 'endorse', normalizedTerm: 'endorse', partOfSpeech: ['verb'], ipa: '/ɛndˈɔːs/',
    chineseShort: '支持；认可', chineseExplanation: '表示“支持；认可”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To publicly or officially approve, support, or recommend something.',
    examples: [{ english: 'The phrase "endorse a proposal" is common in formal academic or professional contexts.', malay: 'Menyokong.', chinese: '“支持提案”这一表达常见于正式的学术或专业语境。' }], collocations: ['endorse a proposal', 'endorse a candidate'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'enhance', term: 'enhance', normalizedTerm: 'enhance', partOfSpeech: ['verb'], ipa: '/ɛnhˈans/',
    chineseShort: '提高；增强', chineseExplanation: '表示“提高；增强”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To improve the quality, value, effectiveness, or attractiveness of something.',
    examples: [{ english: 'Researchers may encounter the expression "enhance performance" in advanced writing.', malay: 'Meningkatkan.', chinese: '研究者可能会在高级写作中遇到“提升表现”这一表达。' }], collocations: ['enhance performance', 'enhance credibility'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'entail', term: 'entail', normalizedTerm: 'entail', partOfSpeech: ['verb'], ipa: '/ɛntˈeɪl/',
    chineseShort: '需要；涉及', chineseExplanation: '表示“需要；涉及”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To necessarily involve or require something as a consequence or condition.',
    examples: [{ english: 'The report uses the expression "entail significant costs" in its analysis.', malay: 'Melibatkan.', chinese: '报告在分析中使用了“涉及重大成本”这一表达。' }], collocations: ['entail significant costs', 'entail responsibilities'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'equivalent', term: 'equivalent', normalizedTerm: 'equivalent', partOfSpeech: ['adjective', 'noun'], ipa: '/ɪkwˈɪvələnt/',
    chineseShort: '等同的；对应物', chineseExplanation: '表示“等同的；对应物”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Equal in value, meaning, function, or effect to something else.',
    examples: [{ english: 'The phrase "an equivalent amount" is common in formal academic or professional contexts.', malay: 'Setara.', chinese: '“等额数量”这一表达常见于正式的学术或专业语境。' }], collocations: ['an equivalent amount', 'roughly equivalent'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'equivocal', term: 'equivocal', normalizedTerm: 'equivocal', partOfSpeech: ['adjective'], ipa: '/ɪkwˈɪvəkəl/',
    chineseShort: '模棱两可的；含糊的', chineseExplanation: '表示“模棱两可的；含糊的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Open to more than one interpretation or deliberately unclear and uncertain.',
    examples: [{ english: 'Researchers may encounter the expression "an equivocal response" in advanced writing.', malay: 'Samar.', chinese: '研究者可能会在高级写作中遇到“模棱两可的回应”这一表达。' }], collocations: ['an equivocal response', 'equivocal evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'eradicate', term: 'eradicate', normalizedTerm: 'eradicate', partOfSpeech: ['verb'], ipa: '/ɪɹˈadɪkˌeɪt/',
    chineseShort: '根除；消灭', chineseExplanation: '表示“根除；消灭”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To remove or destroy something harmful or unwanted completely.',
    examples: [{ english: 'The report uses the expression "eradicate disease" in its analysis.', malay: 'Membasmi.', chinese: '报告在分析中使用了“根除疾病”这一表达。' }], collocations: ['eradicate disease', 'eradicate corruption'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'erode', term: 'erode', normalizedTerm: 'erode', partOfSpeech: ['verb'], ipa: '/ɪɹˈəʊd/',
    chineseShort: '侵蚀；削弱', chineseExplanation: '表示“侵蚀；削弱”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To gradually wear away physically or weaken confidence, power, value, or support.',
    examples: [{ english: 'The phrase "erode trust" is common in formal academic or professional contexts.', malay: 'Menghakis.', chinese: '“削弱信任”这一表达常见于正式的学术或专业语境。' }], collocations: ['erode trust', 'erode competitiveness'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'ethical', term: 'ethical', normalizedTerm: 'ethical', partOfSpeech: ['adjective'], ipa: '/ˈɛθɪkəl/',
    chineseShort: '伦理的；道德的', chineseExplanation: '表示“伦理的；道德的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to moral principles about what is right, fair, and responsible.',
    examples: [{ english: 'Researchers may encounter the expression "ethical standards" in advanced writing.', malay: 'Beretika.', chinese: '研究者可能会在高级写作中遇到“道德标准”这一表达。' }], collocations: ['ethical standards', 'ethical concerns'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'evaluate', term: 'evaluate', normalizedTerm: 'evaluate', partOfSpeech: ['verb'], ipa: '/ɪvˈaljuːˌeɪt/',
    chineseShort: '评估；评价', chineseExplanation: '表示“评估；评价”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To judge the quality, significance, value, or effectiveness of something systematically.',
    examples: [{ english: 'The report uses the expression "evaluate the evidence" in its analysis.', malay: 'Menilai.', chinese: '报告在分析中使用了“评估证据”这一表达。' }], collocations: ['evaluate the evidence', 'evaluate performance'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'exacerbate', term: 'exacerbate', normalizedTerm: 'exacerbate', partOfSpeech: ['verb'], ipa: '/ɛɡzˈasəbˌeɪt/',
    chineseShort: '使恶化；加剧', chineseExplanation: '表示“使恶化；加剧”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make an existing problem, condition, or negative situation worse.',
    examples: [{ english: 'The phrase "exacerbate inequality" is common in formal academic or professional contexts.', malay: 'Memburukkan.', chinese: '“加剧不平等”这一表达常见于正式的学术或专业语境。' }], collocations: ['exacerbate inequality', 'exacerbate tensions'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'exceed', term: 'exceed', normalizedTerm: 'exceed', partOfSpeech: ['verb'], ipa: '/ɛksˈiːd/',
    chineseShort: '超过；超出', chineseExplanation: '表示“超过；超出”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To be greater than a particular amount, level, limit, or expectation.',
    examples: [{ english: 'Researchers may encounter the expression "exceed expectations" in advanced writing.', malay: 'Melebihi.', chinese: '研究者可能会在高级写作中遇到“超出预期”这一表达。' }], collocations: ['exceed expectations', 'exceed the limit'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'explicit', term: 'explicit', normalizedTerm: 'explicit', partOfSpeech: ['adjective'], ipa: '/ɛksplˈɪsɪt/',
    chineseShort: '明确的；清楚表达的', chineseExplanation: '表示“明确的；清楚表达的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Stated clearly and directly, leaving little room for doubt or misunderstanding.',
    examples: [{ english: 'The report uses the expression "explicit instructions" in its analysis.', malay: 'Jelas.', chinese: '报告在分析中使用了“明确指示”这一表达。' }], collocations: ['explicit instructions', 'explicit criteria'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'exploit', term: 'exploit', normalizedTerm: 'exploit', partOfSpeech: ['verb'], ipa: '/ˈɛksplɔɪt/',
    chineseShort: '利用；剥削', chineseExplanation: '表示“利用；剥削”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To use a resource or opportunity effectively, or to use someone unfairly for advantage.',
    examples: [{ english: 'The phrase "exploit an opportunity" is common in formal academic or professional contexts.', malay: 'Memanfaatkan.', chinese: '“利用机会”这一表达常见于正式的学术或专业语境。' }], collocations: ['exploit an opportunity', 'exploit workers'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'extrapolate', term: 'extrapolate', normalizedTerm: 'extrapolate', partOfSpeech: ['verb'], ipa: '/ɛkstɹˈapəlˌeɪt/',
    chineseShort: '外推；推断', chineseExplanation: '表示“外推；推断”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To estimate or infer unknown values or future trends from known information.',
    examples: [{ english: 'Researchers may encounter the expression "extrapolate from the data" in advanced writing.', malay: 'Mengunjurkan.', chinese: '研究者可能会在高级写作中遇到“根据数据外推”这一表达。' }], collocations: ['extrapolate from the data', 'extrapolate future trends'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'facilitate', term: 'facilitate', normalizedTerm: 'facilitate', partOfSpeech: ['verb'], ipa: '/fəsˈɪlɪtˌeɪt/',
    chineseShort: '促进；使便利', chineseExplanation: '表示“促进；使便利”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make an action, process, or outcome easier or more likely.',
    examples: [{ english: 'The report uses the expression "facilitate communication" in its analysis.', malay: 'Memudahkan.', chinese: '报告在分析中使用了“促进沟通”这一表达。' }], collocations: ['facilitate communication', 'facilitate access'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'feasible', term: 'feasible', normalizedTerm: 'feasible', partOfSpeech: ['adjective'], ipa: '/fˈiːzəbəl/',
    chineseShort: '可行的；可实现的', chineseExplanation: '表示“可行的；可实现的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Possible and practical to do successfully within available constraints.',
    examples: [{ english: 'The phrase "a feasible solution" is common in formal academic or professional contexts.', malay: 'Boleh dilaksanakan.', chinese: '“可行的解决方案”这一表达常见于正式的学术或专业语境。' }], collocations: ['a feasible solution', 'economically feasible'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'fiscal', term: 'fiscal', normalizedTerm: 'fiscal', partOfSpeech: ['adjective'], ipa: '/fˈɪskəl/',
    chineseShort: '财政的；财务政策的', chineseExplanation: '表示“财政的；财务政策的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to government revenue, taxation, spending, or public finances.',
    examples: [{ english: 'Researchers may encounter the expression "fiscal policy" in advanced writing.', malay: 'Fiskal.', chinese: '研究者可能会在高级写作中遇到“财政政策”这一表达。' }], collocations: ['fiscal policy', 'fiscal deficit'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'fluctuate', term: 'fluctuate', normalizedTerm: 'fluctuate', partOfSpeech: ['verb'], ipa: '/flˈʌktʃuːˌeɪt/',
    chineseShort: '波动；起伏', chineseExplanation: '表示“波动；起伏”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To rise and fall irregularly in amount, level, value, or intensity.',
    examples: [{ english: 'The report uses the expression "fluctuate considerably" in its analysis.', malay: 'Berubah-ubah.', chinese: '报告在分析中使用了“大幅波动”这一表达。' }], collocations: ['fluctuate considerably', 'prices fluctuate'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'formidable', term: 'formidable', normalizedTerm: 'formidable', partOfSpeech: ['adjective'], ipa: '/fɔːmˈɪdəbəl/',
    chineseShort: '强大的；艰巨的', chineseExplanation: '表示“强大的；艰巨的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Inspiring respect or fear because of great strength, difficulty, or capability.',
    examples: [{ english: 'The phrase "a formidable challenge" is common in formal academic or professional contexts.', malay: 'Sukar.', chinese: '“艰巨挑战”这一表达常见于正式的学术或专业语境。' }], collocations: ['a formidable challenge', 'formidable opposition'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'formulate', term: 'formulate', normalizedTerm: 'formulate', partOfSpeech: ['verb'], ipa: '/fˈɔːmjʊlˌeɪt/',
    chineseShort: '制定；系统阐述', chineseExplanation: '表示“制定；系统阐述”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To develop, create, or express a plan, theory, or idea in a systematic way.',
    examples: [{ english: 'Researchers may encounter the expression "formulate a strategy" in advanced writing.', malay: 'Merumuskan.', chinese: '研究者可能会在高级写作中遇到“制定策略”这一表达。' }], collocations: ['formulate a strategy', 'formulate a hypothesis'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'foster', term: 'foster', normalizedTerm: 'foster', partOfSpeech: ['verb'], ipa: '/fˈɒstə/',
    chineseShort: '促进；培养', chineseExplanation: '表示“促进；培养”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To encourage the development or growth of an idea, quality, relationship, or activity.',
    examples: [{ english: 'The report uses the expression "foster innovation" in its analysis.', malay: 'Memupuk.', chinese: '报告在分析中使用了“促进创新”这一表达。' }], collocations: ['foster innovation', 'foster cooperation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'framework', term: 'framework', normalizedTerm: 'framework', partOfSpeech: ['noun'], ipa: '/fɹˈeɪmwɜːk/',
    chineseShort: '框架；体系', chineseExplanation: '表示“框架；体系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A basic structure of ideas, rules, or components used to organise or understand something.',
    examples: [{ english: 'The phrase "a conceptual framework" is common in formal academic or professional contexts.', malay: 'Kerangka.', chinese: '“概念框架”这一表达常见于正式的学术或专业语境。' }], collocations: ['a conceptual framework', 'regulatory framework'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'futile', term: 'futile', normalizedTerm: 'futile', partOfSpeech: ['adjective'], ipa: '/fjˈuːtaɪl/',
    chineseShort: '徒劳的；无效的', chineseExplanation: '表示“徒劳的；无效的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Unable to produce a useful result despite effort or intention.',
    examples: [{ english: 'Researchers may encounter the expression "a futile attempt" in advanced writing.', malay: 'Sia-sia.', chinese: '研究者可能会在高级写作中遇到“徒劳的尝试”这一表达。' }], collocations: ['a futile attempt', 'prove futile'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'galvanize', term: 'galvanise', normalizedTerm: 'galvanise', partOfSpeech: ['verb'], ipa: '/ɡˈalvɐnˌaɪz/',
    chineseShort: '激励；促使行动', chineseExplanation: '表示“激励；促使行动”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To shock, inspire, or stimulate people into taking action.',
    examples: [{ english: 'The report uses the expression "galvanise public support" in its analysis.', malay: 'Menggembleng.', chinese: '报告在分析中使用了“激发公众支持”这一表达。' }], collocations: ['galvanise public support', 'galvanise the team'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'hierarchy', term: 'hierarchy', normalizedTerm: 'hierarchy', partOfSpeech: ['noun'], ipa: '/hˈaɪəɹɑːki/',
    chineseShort: '等级制度；层级', chineseExplanation: '表示“等级制度；层级”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A system in which people, ideas, or things are ranked at different levels.',
    examples: [{ english: 'The phrase "organizational hierarchy" is common in formal academic or professional contexts.', malay: 'Hierarki.', chinese: '“组织层级”这一表达常见于正式的学术或专业语境。' }], collocations: ['organizational hierarchy', 'social hierarchy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'hypothesis', term: 'hypothesis', normalizedTerm: 'hypothesis', partOfSpeech: ['noun'], ipa: '/haɪpˈɒθəsˌɪs/',
    chineseShort: '假设；假说', chineseExplanation: '表示“假设；假说”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A proposed explanation or prediction that can be tested through evidence or research.',
    examples: [{ english: 'Researchers may encounter the expression "test a hypothesis" in advanced writing.', malay: 'Hipotesis.', chinese: '研究者可能会在高级写作中遇到“检验假设”这一表达。' }], collocations: ['test a hypothesis', 'working hypothesis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'ideology', term: 'ideology', normalizedTerm: 'ideology', partOfSpeech: ['noun'], ipa: '/ˌaɪdɪˈɒlədʒi/',
    chineseShort: '意识形态；思想体系', chineseExplanation: '表示“意识形态；思想体系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A system of ideas and beliefs that influences political, social, or economic behaviour.',
    examples: [{ english: 'The report uses the expression "political ideology" in its analysis.', malay: 'Ideologi.', chinese: '报告在分析中使用了“政治意识形态”这一表达。' }], collocations: ['political ideology', 'dominant ideology'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'impartial', term: 'impartial', normalizedTerm: 'impartial', partOfSpeech: ['adjective'], ipa: '/ɪmpˈɑːʃəl/',
    chineseShort: '公正的；不偏不倚的', chineseExplanation: '表示“公正的；不偏不倚的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Treating all sides fairly without favoring one person, group, or viewpoint.',
    examples: [{ english: 'The phrase "an impartial assessment" is common in formal academic or professional contexts.', malay: 'Tidak berat sebelah.', chinese: '“公正的评估”这一表达常见于正式的学术或专业语境。' }], collocations: ['an impartial assessment', 'remain impartial'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'implicit', term: 'implicit', normalizedTerm: 'implicit', partOfSpeech: ['adjective'], ipa: '/ɪmplˈɪsɪt/',
    chineseShort: '含蓄的；隐含的', chineseExplanation: '表示“含蓄的；隐含的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Suggested or understood without being stated directly.',
    examples: [{ english: 'Researchers may encounter the expression "implicit assumption" in advanced writing.', malay: 'Tersirat.', chinese: '研究者可能会在高级写作中遇到“隐含假设”这一表达。' }], collocations: ['implicit assumption', 'implicit meaning'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'inadvertently', term: 'inadvertently', normalizedTerm: 'inadvertently', partOfSpeech: ['adverb'], ipa: '/ɪnɐdvˈɜːtəntli/',
    chineseShort: '无意中；不经意地', chineseExplanation: '表示“无意中；不经意地”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Without intention or awareness; accidentally.',
    examples: [{ english: 'The report uses the expression "inadvertently reveal information" in its analysis.', malay: 'Tanpa sengaja.', chinese: '报告在分析中使用了“无意中泄露信息”这一表达。' }], collocations: ['inadvertently reveal information', 'inadvertently cause harm'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'incidence', term: 'incidence', normalizedTerm: 'incidence', partOfSpeech: ['noun'], ipa: '/ˈɪnsɪdəns/',
    chineseShort: '发生率；发生情况', chineseExplanation: '表示“发生率；发生情况”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The frequency or rate at which something, especially an event or condition, occurs.',
    examples: [{ english: 'The phrase "incidence of disease" is common in formal academic or professional contexts.', malay: 'Kejadian.', chinese: '“疾病发生率”这一表达常见于正式的学术或专业语境。' }], collocations: ['incidence of disease', 'high incidence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'incline', term: 'incline', normalizedTerm: 'incline', partOfSpeech: ['verb', 'noun'], ipa: '/ɪnklˈaɪn/',
    chineseShort: '倾向；斜坡', chineseExplanation: '表示“倾向；斜坡”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make someone likely to think or act in a certain way, or a slope.',
    examples: [{ english: 'Researchers may encounter the expression "incline people to agree" in advanced writing.', malay: 'Mendorong.', chinese: '研究者可能会在高级写作中遇到“使人倾向于同意”这一表达。' }], collocations: ['incline people to agree', 'be inclined to believe'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'inevitable', term: 'inevitable', normalizedTerm: 'inevitable', partOfSpeech: ['adjective'], ipa: '/ɪnˈɛvɪtəbəl/',
    chineseShort: '不可避免的；必然的', chineseExplanation: '表示“不可避免的；必然的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Certain to happen and impossible to prevent or avoid.',
    examples: [{ english: 'The report uses the expression "an inevitable consequence" in its analysis.', malay: 'Tidak dapat dielakkan.', chinese: '报告在分析中使用了“不可避免的后果”这一表达。' }], collocations: ['an inevitable consequence', 'seem inevitable'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'infer', term: 'infer', normalizedTerm: 'infer', partOfSpeech: ['verb'], ipa: '/ɪnfˈɜː/',
    chineseShort: '推断；推论', chineseExplanation: '表示“推断；推论”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To reach a conclusion from evidence, reasoning, or indirect information.',
    examples: [{ english: 'The phrase "infer meaning from context" is common in formal academic or professional contexts.', malay: 'Menyimpulkan.', chinese: '“从语境推断含义”这一表达常见于正式的学术或专业语境。' }], collocations: ['infer meaning from context', 'infer a relationship'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'inherent', term: 'inherent', normalizedTerm: 'inherent', partOfSpeech: ['adjective'], ipa: '/ɪnhˈiəɹənt/',
    chineseShort: '内在的；固有的', chineseExplanation: '表示“内在的；固有的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Existing as a natural, permanent, or essential part of something.',
    examples: [{ english: 'Researchers may encounter the expression "inherent limitations" in advanced writing.', malay: 'Sedia ada.', chinese: '研究者可能会在高级写作中遇到“固有局限”这一表达。' }], collocations: ['inherent limitations', 'inherent risk'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'inhibit', term: 'inhibit', normalizedTerm: 'inhibit', partOfSpeech: ['verb'], ipa: '/ɪnhˈɪbɪt/',
    chineseShort: '抑制；阻碍', chineseExplanation: '表示“抑制；阻碍”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To prevent, slow, or restrict an action, process, or development.',
    examples: [{ english: 'The report uses the expression "inhibit growth" in its analysis.', malay: 'Menghalang.', chinese: '报告在分析中使用了“抑制增长”这一表达。' }], collocations: ['inhibit growth', 'inhibit innovation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'initiate', term: 'initiate', normalizedTerm: 'initiate', partOfSpeech: ['verb'], ipa: '/ɪnˈɪʃɪˌeɪt/',
    chineseShort: '发起；开始', chineseExplanation: '表示“发起；开始”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cause a process, action, or series of events to begin.',
    examples: [{ english: 'The phrase "initiate a review" is common in formal academic or professional contexts.', malay: 'Memulakan.', chinese: '“发起审查”这一表达常见于正式的学术或专业语境。' }], collocations: ['initiate a review', 'initiate proceedings'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'indispensable', term: 'indispensable', normalizedTerm: 'indispensable', partOfSpeech: ['adjective'], ipa: '/ˌɪndɪspˈɛnsəbəl/',
    chineseShort: '不可或缺的', chineseExplanation: '表示“不可或缺的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Absolutely necessary or extremely important for a particular purpose.',
    examples: [{ english: 'Researchers may encounter the expression "an indispensable resource" in advanced writing.', malay: 'Amat diperlukan.', chinese: '研究者可能会在高级写作中遇到“不可或缺的资源”这一表达。' }], collocations: ['an indispensable resource', 'indispensable to success'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'insidious', term: 'insidious', normalizedTerm: 'insidious', partOfSpeech: ['adjective'], ipa: '/ɪnsˈɪdɪəs/',
    chineseShort: '隐蔽而有害的；潜伏的', chineseExplanation: '表示“隐蔽而有害的；潜伏的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Gradually causing serious harm while appearing harmless or being difficult to notice.',
    examples: [{ english: 'The report uses the expression "an insidious threat" in its analysis.', malay: 'Berbahaya secara tersembunyi.', chinese: '报告在分析中使用了“隐蔽威胁”这一表达。' }], collocations: ['an insidious threat', 'insidious effects'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'integral', term: 'integral', normalizedTerm: 'integral', partOfSpeech: ['adjective'], ipa: '/ˈɪntɪɡɹəl/',
    chineseShort: '不可缺少的；构成整体的', chineseExplanation: '表示“不可缺少的；构成整体的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Necessary to make a whole complete and functioning properly.',
    examples: [{ english: 'The phrase "an integral part" is common in formal academic or professional contexts.', malay: 'Penting.', chinese: '“不可或缺的一部分”这一表达常见于正式的学术或专业语境。' }], collocations: ['an integral part', 'integral to the process'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'integrity', term: 'integrity', normalizedTerm: 'integrity', partOfSpeech: ['noun'], ipa: '/ɪntˈɛɡɹɪti/',
    chineseShort: '正直；完整性', chineseExplanation: '表示“正直；完整性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Honesty and strong moral principles, or the state of being whole and undamaged.',
    examples: [{ english: 'Researchers may encounter the expression "academic integrity" in advanced writing.', malay: 'Integriti.', chinese: '研究者可能会在高级写作中遇到“学术诚信”这一表达。' }], collocations: ['academic integrity', 'structural integrity'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'intermediate', term: 'intermediate', normalizedTerm: 'intermediate', partOfSpeech: ['adjective', 'noun'], ipa: '/ˌɪntəmˈiːdiət/',
    chineseShort: '中间的；中级的', chineseExplanation: '表示“中间的；中级的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Situated between two stages, levels, or extremes.',
    examples: [{ english: 'The report uses the expression "an intermediate stage" in its analysis.', malay: 'Pertengahan.', chinese: '报告在分析中使用了“中间阶段”这一表达。' }], collocations: ['an intermediate stage', 'intermediate level'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'interpret', term: 'interpret', normalizedTerm: 'interpret', partOfSpeech: ['verb'], ipa: '/ɪntˈɜːpɹɪt/',
    chineseShort: '解释；诠释', chineseExplanation: '表示“解释；诠释”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To explain the meaning or significance of information, events, or language.',
    examples: [{ english: 'The phrase "interpret the data" is common in formal academic or professional contexts.', malay: 'Mentafsirkan.', chinese: '“解释数据”这一表达常见于正式的学术或专业语境。' }], collocations: ['interpret the data', 'interpret the findings'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'intervene', term: 'intervene', normalizedTerm: 'intervene', partOfSpeech: ['verb'], ipa: '/ˌɪntəvˈiːn/',
    chineseShort: '干预；介入', chineseExplanation: '表示“干预；介入”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To become involved in a situation in order to influence or change the outcome.',
    examples: [{ english: 'Researchers may encounter the expression "intervene in a dispute" in advanced writing.', malay: 'Campur tangan.', chinese: '研究者可能会在高级写作中遇到“介入争端”这一表达。' }], collocations: ['intervene in a dispute', 'government intervention'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'intricate', term: 'intricate', normalizedTerm: 'intricate', partOfSpeech: ['adjective'], ipa: '/ˈɪntɹɪkət/',
    chineseShort: '错综复杂的；精细的', chineseExplanation: '表示“错综复杂的；精细的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having many small, closely connected parts or details that make something complex.',
    examples: [{ english: 'The report uses the expression "an intricate system" in its analysis.', malay: 'Rumit.', chinese: '报告在分析中使用了“复杂精细的系统”这一表达。' }], collocations: ['an intricate system', 'intricate relationships'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'intrinsic', term: 'intrinsic', normalizedTerm: 'intrinsic', partOfSpeech: ['adjective'], ipa: '/ɪntɹˈɪnsɪk/',
    chineseShort: '内在的；本质的', chineseExplanation: '表示“内在的；本质的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Belonging naturally to something and forming an essential part of its nature.',
    examples: [{ english: 'The phrase "intrinsic value" is common in formal academic or professional contexts.', malay: 'Hakiki.', chinese: '“内在价值”这一表达常见于正式的学术或专业语境。' }], collocations: ['intrinsic value', 'intrinsic motivation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'intuitive', term: 'intuitive', normalizedTerm: 'intuitive', partOfSpeech: ['adjective'], ipa: '/ɪntjˈuːɪtˌɪv/',
    chineseShort: '直觉的；易于理解的', chineseExplanation: '表示“直觉的；易于理解的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Based on instinctive understanding rather than conscious reasoning, or naturally easy to understand.',
    examples: [{ english: 'Researchers may encounter the expression "intuitive understanding" in advanced writing.', malay: 'Intuitif.', chinese: '研究者可能会在高级写作中遇到“直觉理解”这一表达。' }], collocations: ['intuitive understanding', 'an intuitive interface'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'invoke', term: 'invoke', normalizedTerm: 'invoke', partOfSpeech: ['verb'], ipa: '/ɪnvˈəʊk/',
    chineseShort: '援引；调用', chineseExplanation: '表示“援引；调用”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cite a rule, principle, or authority, or to activate a process or function.',
    examples: [{ english: 'The report uses the expression "invoke a principle" in its analysis.', malay: 'Menggunakan.', chinese: '报告在分析中使用了“援引原则”这一表达。' }], collocations: ['invoke a principle', 'invoke a function'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'isolate', term: 'isolate', normalizedTerm: 'isolate', partOfSpeech: ['verb'], ipa: '/ˈaɪsəlˌeɪt/',
    chineseShort: '隔离；分离', chineseExplanation: '表示“隔离；分离”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To separate a person, factor, or element from others in order to protect, study, or identify it.',
    examples: [{ english: 'The phrase "isolate a variable" is common in formal academic or professional contexts.', malay: 'Mengasingkan.', chinese: '“隔离变量”这一表达常见于正式的学术或专业语境。' }], collocations: ['isolate a variable', 'isolate the cause'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'justify', term: 'justify', normalizedTerm: 'justify', partOfSpeech: ['verb'], ipa: '/dʒˈʌstɪfˌaɪ/',
    chineseShort: '证明…合理；为…辩护', chineseExplanation: '表示“证明…合理；为…辩护”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To show or explain that an action, belief, or decision is reasonable or necessary.',
    examples: [{ english: 'Researchers may encounter the expression "justify a decision" in advanced writing.', malay: 'Mewajarkan.', chinese: '研究者可能会在高级写作中遇到“证明决定合理”这一表达。' }], collocations: ['justify a decision', 'justify the expense'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'juxtapose', term: 'juxtapose', normalizedTerm: 'juxtapose', partOfSpeech: ['verb'], ipa: '/dʒˈʌkstɐpˌəʊz/',
    chineseShort: '并置；对照', chineseExplanation: '表示“并置；对照”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To place two or more things close together in order to compare or contrast them.',
    examples: [{ english: 'The report uses the expression "juxtapose two perspectives" in its analysis.', malay: 'Membandingkan secara berdampingan.', chinese: '报告在分析中使用了“并置两种观点”这一表达。' }], collocations: ['juxtapose two perspectives', 'juxtapose images'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'legitimate', term: 'legitimate', normalizedTerm: 'legitimate', partOfSpeech: ['adjective', 'verb'], ipa: '/lədʒˈɪtɪmət/',
    chineseShort: '合法的；合理的；使合法化', chineseExplanation: '表示“合法的；合理的；使合法化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Allowed by law or accepted as reasonable and valid, or to make something accepted as such.',
    examples: [{ english: 'The phrase "a legitimate concern" is common in formal academic or professional contexts.', malay: 'Sah.', chinese: '“合理的担忧”这一表达常见于正式的学术或专业语境。' }], collocations: ['a legitimate concern', 'legitimate authority'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'levy', term: 'levy', normalizedTerm: 'levy', partOfSpeech: ['noun', 'verb'], ipa: '/lˈɛvi/',
    chineseShort: '征收；税费', chineseExplanation: '表示“征收；税费”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To officially impose or collect a tax, fee, or charge, or the charge itself.',
    examples: [{ english: 'Researchers may encounter the expression "levy a tax" in advanced writing.', malay: 'Mengenakan.', chinese: '研究者可能会在高级写作中遇到“征税”这一表达。' }], collocations: ['levy a tax', 'levy a fine'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'lucid', term: 'lucid', normalizedTerm: 'lucid', partOfSpeech: ['adjective'], ipa: '/lˈuːsɪd/',
    chineseShort: '清晰易懂的；头脑清醒的', chineseExplanation: '表示“清晰易懂的；头脑清醒的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Expressed clearly and easy to understand, or mentally clear and rational.',
    examples: [{ english: 'The report uses the expression "a lucid explanation" in its analysis.', malay: 'Jelas.', chinese: '报告在分析中使用了“清晰的解释”这一表达。' }], collocations: ['a lucid explanation', 'lucid writing'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'manipulate', term: 'manipulate', normalizedTerm: 'manipulate', partOfSpeech: ['verb'], ipa: '/mənˈɪpjʊlˌeɪt/',
    chineseShort: '操纵；处理', chineseExplanation: '表示“操纵；处理”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To control or influence something skillfully, sometimes unfairly or deceptively.',
    examples: [{ english: 'The phrase "manipulate data" is common in formal academic or professional contexts.', malay: 'Memanipulasi.', chinese: '“操纵数据”这一表达常见于正式的学术或专业语境。' }], collocations: ['manipulate data', 'manipulate public opinion'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'marginal', term: 'marginal', normalizedTerm: 'marginal', partOfSpeech: ['adjective'], ipa: '/mˈɑːdʒɪnəl/',
    chineseShort: '边缘的；微小的', chineseExplanation: '表示“边缘的；微小的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Small in amount or importance, or relating to the edge of a group, area, or activity.',
    examples: [{ english: 'Researchers may encounter the expression "marginal improvement" in advanced writing.', malay: 'Kecil.', chinese: '研究者可能会在高级写作中遇到“微小改进”这一表达。' }], collocations: ['marginal improvement', 'marginal cost'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'maximize', term: 'maximise', normalizedTerm: 'maximise', partOfSpeech: ['verb'], ipa: '/mˈaksɪmˌaɪz/',
    chineseShort: '使最大化；充分利用', chineseExplanation: '表示“使最大化；充分利用”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To increase something to the greatest possible amount, degree, or effectiveness.',
    examples: [{ english: 'The report uses the expression "maximise efficiency" in its analysis.', malay: 'Memaksimumkan.', chinese: '报告在分析中使用了“最大化效率”这一表达。' }], collocations: ['maximise efficiency', 'maximise benefits'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'mechanism', term: 'mechanism', normalizedTerm: 'mechanism', partOfSpeech: ['noun'], ipa: '/mˈɛkənˌɪzəm/',
    chineseShort: '机制；原理', chineseExplanation: '表示“机制；原理”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A process, system, or set of parts through which a particular effect is produced.',
    examples: [{ english: 'The phrase "a causal mechanism" is common in formal academic or professional contexts.', malay: 'Mekanisme.', chinese: '“因果机制”这一表达常见于正式的学术或专业语境。' }], collocations: ['a causal mechanism', 'market mechanism'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'mediate', term: 'mediate', normalizedTerm: 'mediate', partOfSpeech: ['verb'], ipa: '/mˈiːdɪˌeɪt/',
    chineseShort: '调解；介导', chineseExplanation: '表示“调解；介导”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To intervene between parties to help resolve disagreement, or to influence a relationship between factors.',
    examples: [{ english: 'Researchers may encounter the expression "mediate a dispute" in advanced writing.', malay: 'Menjadi pengantara.', chinese: '研究者可能会在高级写作中遇到“调解争端”这一表达。' }], collocations: ['mediate a dispute', 'mediate the relationship'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'meticulous', term: 'meticulous', normalizedTerm: 'meticulous', partOfSpeech: ['adjective'], ipa: '/mɛtˈɪkjʊləs/',
    chineseShort: '一丝不苟的；细致的', chineseExplanation: '表示“一丝不苟的；细致的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Showing extreme care and attention to small details.',
    examples: [{ english: 'The report uses the expression "meticulous planning" in its analysis.', malay: 'Teliti.', chinese: '报告在分析中使用了“细致规划”这一表达。' }], collocations: ['meticulous planning', 'meticulous research'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'methodology', term: 'methodology', normalizedTerm: 'methodology', partOfSpeech: ['noun'], ipa: '/mˌɛθədˈɒlədʒi/',
    chineseShort: '方法论；研究方法体系', chineseExplanation: '表示“方法论；研究方法体系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A system of methods and principles used in a particular field of study or activity.',
    examples: [{ english: 'The phrase "research methodology" is common in formal academic or professional contexts.', malay: 'Metodologi.', chinese: '“研究方法论”这一表达常见于正式的学术或专业语境。' }], collocations: ['research methodology', 'sound methodology'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'minimize', term: 'minimise', normalizedTerm: 'minimise', partOfSpeech: ['verb'], ipa: '/mˈɪnɪmˌaɪz/',
    chineseShort: '使最小化；尽量减少', chineseExplanation: '表示“使最小化；尽量减少”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To reduce something to the smallest possible amount, degree, or importance.',
    examples: [{ english: 'Researchers may encounter the expression "minimise risk" in advanced writing.', malay: 'Meminimumkan.', chinese: '研究者可能会在高级写作中遇到“尽量降低风险”这一表达。' }], collocations: ['minimise risk', 'minimise disruption'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'modify', term: 'modify', normalizedTerm: 'modify', partOfSpeech: ['verb'], ipa: '/mˈɒdɪfˌaɪ/',
    chineseShort: '修改；调整', chineseExplanation: '表示“修改；调整”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To change something partly in order to improve it or make it more suitable.',
    examples: [{ english: 'The report uses the expression "modify the design" in its analysis.', malay: 'Mengubah suai.', chinese: '报告在分析中使用了“修改设计”这一表达。' }], collocations: ['modify the design', 'modify behaviour'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'negligible', term: 'negligible', normalizedTerm: 'negligible', partOfSpeech: ['adjective'], ipa: '/nˈɛɡlɪdʒəbəl/',
    chineseShort: '微不足道的；可忽略的', chineseExplanation: '表示“微不足道的；可忽略的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'So small or unimportant that it can reasonably be ignored.',
    examples: [{ english: 'The phrase "a negligible effect" is common in formal academic or professional contexts.', malay: 'Boleh diabaikan.', chinese: '“可忽略的影响”这一表达常见于正式的学术或专业语境。' }], collocations: ['a negligible effect', 'negligible cost'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'nuanced', term: 'nuanced', normalizedTerm: 'nuanced', partOfSpeech: ['adjective'], ipa: '/njˈuːənst/',
    chineseShort: '细致入微的；有细微差别的', chineseExplanation: '表示“细致入微的；有细微差别的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Showing subtle distinctions, complexity, or careful understanding.',
    examples: [{ english: 'Researchers may encounter the expression "a nuanced argument" in advanced writing.', malay: 'Bernuansa.', chinese: '研究者可能会在高级写作中遇到“细致入微的论点”这一表达。' }], collocations: ['a nuanced argument', 'nuanced interpretation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'notion', term: 'notion', normalizedTerm: 'notion', partOfSpeech: ['noun'], ipa: '/nˈəʊʃən/',
    chineseShort: '概念；观念', chineseExplanation: '表示“概念；观念”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An idea, belief, or understanding about something, often somewhat general or abstract.',
    examples: [{ english: 'The report uses the expression "challenge the notion" in its analysis.', malay: 'Gagasan.', chinese: '报告在分析中使用了“质疑这一观念”这一表达。' }], collocations: ['challenge the notion', 'a common notion'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'objective', term: 'objective', normalizedTerm: 'objective', partOfSpeech: ['noun', 'adjective'], ipa: '/ɒbdʒˈɛktɪv/',
    chineseShort: '目标；客观的', chineseExplanation: '表示“目标；客观的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A goal to be achieved, or based on facts rather than personal feelings or opinions.',
    examples: [{ english: 'The phrase "an objective assessment" is common in formal academic or professional contexts.', malay: 'Objektif.', chinese: '“客观评估”这一表达常见于正式的学术或专业语境。' }], collocations: ['an objective assessment', 'achieve an objective'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'obsolete', term: 'obsolete', normalizedTerm: 'obsolete', partOfSpeech: ['adjective'], ipa: '/ˈɒbsəlˌiːt/',
    chineseShort: '过时的；淘汰的', chineseExplanation: '表示“过时的；淘汰的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'No longer used, useful, or relevant because something newer has replaced it.',
    examples: [{ english: 'Researchers may encounter the expression "obsolete technology" in advanced writing.', malay: 'Lapuk.', chinese: '研究者可能会在高级写作中遇到“过时技术”这一表达。' }], collocations: ['obsolete technology', 'become obsolete'], level: 4, cefr: 'C1', categories: ['Technology', 'Business'],
  },
  {
    id: 'offset', term: 'offset', normalizedTerm: 'offset', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɒfsɛt/',
    chineseShort: '抵消；补偿', chineseExplanation: '表示“抵消；补偿”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To balance or reduce the effect of something by producing an opposite effect.',
    examples: [{ english: 'The report uses the expression "offset the cost" in its analysis.', malay: 'Mengimbangi.', chinese: '报告在分析中使用了“抵消成本”这一表达。' }], collocations: ['offset the cost', 'offset emissions'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'ongoing', term: 'ongoing', normalizedTerm: 'ongoing', partOfSpeech: ['adjective'], ipa: '/ˈɒŋɡəʊɪŋ/',
    chineseShort: '持续进行的', chineseExplanation: '表示“持续进行的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Continuing to develop, exist, or happen over a period of time.',
    examples: [{ english: 'The phrase "ongoing research" is common in formal academic or professional contexts.', malay: 'Berterusan.', chinese: '“持续进行的研究”这一表达常见于正式的学术或专业语境。' }], collocations: ['ongoing research', 'ongoing negotiations'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'ostensibly', term: 'ostensibly', normalizedTerm: 'ostensibly', partOfSpeech: ['adverb'], ipa: '/ɒstˈɛnsəbli/',
    chineseShort: '表面上；据称', chineseExplanation: '表示“表面上；据称”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Apparently or according to what is stated, though the reality may be different.',
    examples: [{ english: 'Researchers may encounter the expression "ostensibly designed to help" in advanced writing.', malay: 'Pada zahirnya.', chinese: '研究者可能会在高级写作中遇到“表面上旨在提供帮助”这一表达。' }], collocations: ['ostensibly designed to help', 'ostensibly independent'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'paradigm', term: 'paradigm', normalizedTerm: 'paradigm', partOfSpeech: ['noun'], ipa: '/pˈaɹədˌaɪm/',
    chineseShort: '范式；模式', chineseExplanation: '表示“范式；模式”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A widely accepted model, framework, or pattern for understanding or doing something.',
    examples: [{ english: 'The report uses the expression "a paradigm shift" in its analysis.', malay: 'Paradigma.', chinese: '报告在分析中使用了“范式转变”这一表达。' }], collocations: ['a paradigm shift', 'dominant paradigm'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'paradoxical', term: 'paradoxical', normalizedTerm: 'paradoxical', partOfSpeech: ['adjective'], ipa: '/pˌaɹədˈɒksɪkəl/',
    chineseShort: '悖论式的；看似矛盾的', chineseExplanation: '表示“悖论式的；看似矛盾的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Seemingly contradictory or absurd but possibly true or logically explainable.',
    examples: [{ english: 'The phrase "a paradoxical outcome" is common in formal academic or professional contexts.', malay: 'Paradoks.', chinese: '“看似矛盾的结果”这一表达常见于正式的学术或专业语境。' }], collocations: ['a paradoxical outcome', 'paradoxical effect'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'parameter', term: 'parameter', normalizedTerm: 'parameter', partOfSpeech: ['noun'], ipa: '/pəɹˈamɪtə/',
    chineseShort: '参数；界限', chineseExplanation: '表示“参数；界限”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A measurable factor or a limit that defines the scope or conditions of a system or process.',
    examples: [{ english: 'Researchers may encounter the expression "key parameters" in advanced writing.', malay: 'Parameter.', chinese: '研究者可能会在高级写作中遇到“关键参数”这一表达。' }], collocations: ['key parameters', 'within the parameters'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'perceive', term: 'perceive', normalizedTerm: 'perceive', partOfSpeech: ['verb'], ipa: '/pəsˈiːv/',
    chineseShort: '察觉；理解', chineseExplanation: '表示“察觉；理解”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To notice, interpret, or understand something through the senses or the mind.',
    examples: [{ english: 'The report uses the expression "perceive a threat" in its analysis.', malay: 'Menganggap.', chinese: '报告在分析中使用了“察觉威胁”这一表达。' }], collocations: ['perceive a threat', 'perceive differences'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'pervasive', term: 'pervasive', normalizedTerm: 'pervasive', partOfSpeech: ['adjective'], ipa: '/pəvˈeɪsɪv/',
    chineseShort: '普遍存在的；无处不在的', chineseExplanation: '表示“普遍存在的；无处不在的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Spreading widely throughout an area, system, or group and strongly influencing it.',
    examples: [{ english: 'The phrase "a pervasive influence" is common in formal academic or professional contexts.', malay: 'Meluas.', chinese: '“广泛影响”这一表达常见于正式的学术或专业语境。' }], collocations: ['a pervasive influence', 'pervasive inequality'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'persist', term: 'persist', normalizedTerm: 'persist', partOfSpeech: ['verb'], ipa: '/pəsˈɪst/',
    chineseShort: '持续；坚持存在', chineseExplanation: '表示“持续；坚持存在”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To continue despite difficulty, opposition, or the passage of time.',
    examples: [{ english: 'Researchers may encounter the expression "problems persist" in advanced writing.', malay: 'Berterusan.', chinese: '研究者可能会在高级写作中遇到“问题持续存在”这一表达。' }], collocations: ['problems persist', 'persist in efforts'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'pertinent', term: 'pertinent', normalizedTerm: 'pertinent', partOfSpeech: ['adjective'], ipa: '/pˈɜːtɪnənt/',
    chineseShort: '相关的；切题的', chineseExplanation: '表示“相关的；切题的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Directly relevant and important to the matter being considered.',
    examples: [{ english: 'The report uses the expression "pertinent information" in its analysis.', malay: 'Berkaitan.', chinese: '报告在分析中使用了“相关信息”这一表达。' }], collocations: ['pertinent information', 'pertinent question'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'plausible', term: 'plausible', normalizedTerm: 'plausible', partOfSpeech: ['adjective'], ipa: '/plˈɔːzəbəl/',
    chineseShort: '看似合理的；可信的', chineseExplanation: '表示“看似合理的；可信的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Seeming reasonable, believable, or likely to be true.',
    examples: [{ english: 'The phrase "a plausible explanation" is common in formal academic or professional contexts.', malay: 'Munasabah.', chinese: '“合理可信的解释”这一表达常见于正式的学术或专业语境。' }], collocations: ['a plausible explanation', 'plausible scenario'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'precarious', term: 'precarious', normalizedTerm: 'precarious', partOfSpeech: ['adjective'], ipa: '/pɹɪkˈeəɹɪəs/',
    chineseShort: '不稳定的；危险的', chineseExplanation: '表示“不稳定的；危险的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Not securely established and likely to become dangerous, unstable, or unsuccessful.',
    examples: [{ english: 'Researchers may encounter the expression "a precarious position" in advanced writing.', malay: 'Tidak menentu.', chinese: '研究者可能会在高级写作中遇到“不稳定的处境”这一表达。' }], collocations: ['a precarious position', 'precarious employment'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'precede', term: 'precede', normalizedTerm: 'precede', partOfSpeech: ['verb'], ipa: '/pɹɪsˈiːd/',
    chineseShort: '先于；在…之前发生', chineseExplanation: '表示“先于；在…之前发生”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To happen, exist, or come before something else in time, order, or position.',
    examples: [{ english: 'The report uses the expression "precede the announcement" in its analysis.', malay: 'Mendahului.', chinese: '报告在分析中使用了“先于公告发生”这一表达。' }], collocations: ['precede the announcement', 'events preceding the crisis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'predominant', term: 'predominant', normalizedTerm: 'predominant', partOfSpeech: ['adjective'], ipa: '/pɹɪdˈɒmɪnənt/',
    chineseShort: '占主导的；最显著的', chineseExplanation: '表示“占主导的；最显著的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'More powerful, frequent, noticeable, or influential than others.',
    examples: [{ english: 'The phrase "the predominant factor" is common in formal academic or professional contexts.', malay: 'Utama.', chinese: '“主导因素”这一表达常见于正式的学术或专业语境。' }], collocations: ['the predominant factor', 'predominant view'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'preliminary', term: 'preliminary', normalizedTerm: 'preliminary', partOfSpeech: ['adjective', 'noun'], ipa: '/pɹɪlˈɪmɪnəɹi/',
    chineseShort: '初步的；预备阶段', chineseExplanation: '表示“初步的；预备阶段”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Coming before a more important action or stage and used to prepare for it.',
    examples: [{ english: 'Researchers may encounter the expression "preliminary findings" in advanced writing.', malay: 'Awal.', chinese: '研究者可能会在高级写作中遇到“初步研究结果”这一表达。' }], collocations: ['preliminary findings', 'preliminary assessment'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'premise', term: 'premise', normalizedTerm: 'premise', partOfSpeech: ['noun'], ipa: '/pɹˈɛmɪs/',
    chineseShort: '前提；基础假设', chineseExplanation: '表示“前提；基础假设”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A statement or idea on which an argument, theory, or reasoning process is based.',
    examples: [{ english: 'The report uses the expression "a basic premise" in its analysis.', malay: 'Premis.', chinese: '报告在分析中使用了“基本前提”这一表达。' }], collocations: ['a basic premise', 'challenge the premise'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'presume', term: 'presume', normalizedTerm: 'presume', partOfSpeech: ['verb'], ipa: '/pɹɪzjˈuːm/',
    chineseShort: '推定；假定', chineseExplanation: '表示“推定；假定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To suppose something is true based on probability or available evidence without complete proof.',
    examples: [{ english: 'The phrase "presume innocence" is common in formal academic or professional contexts.', malay: 'Menganggap.', chinese: '“推定无罪”这一表达常见于正式的学术或专业语境。' }], collocations: ['presume innocence', 'presume that conditions remain stable'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'prevalent', term: 'prevalent', normalizedTerm: 'prevalent', partOfSpeech: ['adjective'], ipa: '/pɹˈɛvələnt/',
    chineseShort: '普遍的；盛行的', chineseExplanation: '表示“普遍的；盛行的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Common or widespread in a particular place, group, or period.',
    examples: [{ english: 'Researchers may encounter the expression "a prevalent belief" in advanced writing.', malay: 'Berleluasa.', chinese: '研究者可能会在高级写作中遇到“普遍观念”这一表达。' }], collocations: ['a prevalent belief', 'prevalent among adults'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'principle', term: 'principle', normalizedTerm: 'principle', partOfSpeech: ['noun'], ipa: '/pɹˈɪnsɪpəl/',
    chineseShort: '原则；原理', chineseExplanation: '表示“原则；原理”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A fundamental rule, belief, or idea that guides behaviour, reasoning, or a system.',
    examples: [{ english: 'The report uses the expression "a guiding principle" in its analysis.', malay: 'Prinsip.', chinese: '报告在分析中使用了“指导原则”这一表达。' }], collocations: ['a guiding principle', 'underlying principle'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'propensity', term: 'propensity', normalizedTerm: 'propensity', partOfSpeech: ['noun'], ipa: '/pɹəpˈɛnsɪti/',
    chineseShort: '倾向；习性', chineseExplanation: '表示“倾向；习性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A natural or habitual tendency to behave or develop in a particular way.',
    examples: [{ english: 'The phrase "a propensity to save" is common in formal academic or professional contexts.', malay: 'Kecenderungan.', chinese: '“储蓄倾向”这一表达常见于正式的学术或专业语境。' }], collocations: ['a propensity to save', 'propensity for risk'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'prohibit', term: 'prohibit', normalizedTerm: 'prohibit', partOfSpeech: ['verb'], ipa: '/pɹəhˈɪbɪt/',
    chineseShort: '禁止；不准', chineseExplanation: '表示“禁止；不准”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To formally forbid an action, activity, or behaviour by rule or law.',
    examples: [{ english: 'Researchers may encounter the expression "prohibit smoking" in advanced writing.', malay: 'Melarang.', chinese: '研究者可能会在高级写作中遇到“禁止吸烟”这一表达。' }], collocations: ['prohibit smoking', 'prohibit access'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'profound', term: 'profound', normalizedTerm: 'profound', partOfSpeech: ['adjective'], ipa: '/pɹəfˈaʊnd/',
    chineseShort: '深刻的；重大的', chineseExplanation: '表示“深刻的；重大的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Very great, intense, or far-reaching in effect, meaning, or understanding.',
    examples: [{ english: 'The report uses the expression "a profound impact" in its analysis.', malay: 'Mendalam.', chinese: '报告在分析中使用了“深远影响”这一表达。' }], collocations: ['a profound impact', 'profound implications'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'proportion', term: 'proportion', normalizedTerm: 'proportion', partOfSpeech: ['noun'], ipa: '/pɹəpˈɔːʃən/',
    chineseShort: '比例；部分', chineseExplanation: '表示“比例；部分”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A part or share of a whole, especially when expressed in relation to the total.',
    examples: [{ english: 'The phrase "a large proportion" is common in formal academic or professional contexts.', malay: 'Bahagian.', chinese: '“很大比例”这一表达常见于正式的学术或专业语境。' }], collocations: ['a large proportion', 'proportion of respondents'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'prospect', term: 'prospect', normalizedTerm: 'prospect', partOfSpeech: ['noun'], ipa: '/pɹˈɒspɛkt/',
    chineseShort: '前景；可能性', chineseExplanation: '表示“前景；可能性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The possibility or likelihood of a future event, especially one that may be desirable or significant.',
    examples: [{ english: 'Researchers may encounter the expression "the prospect of growth" in advanced writing.', malay: 'Prospek.', chinese: '研究者可能会在高级写作中遇到“增长前景”这一表达。' }], collocations: ['the prospect of growth', 'future prospects'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'provoke', term: 'provoke', normalizedTerm: 'provoke', partOfSpeech: ['verb'], ipa: '/pɹəvˈəʊk/',
    chineseShort: '引发；激起', chineseExplanation: '表示“引发；激起”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cause a strong reaction, feeling, thought, or event, sometimes deliberately.',
    examples: [{ english: 'The report uses the expression "provoke debate" in its analysis.', malay: 'Mencetuskan.', chinese: '报告在分析中使用了“引发讨论”这一表达。' }], collocations: ['provoke debate', 'provoke a response'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'pragmatic', term: 'pragmatic', normalizedTerm: 'pragmatic', partOfSpeech: ['adjective'], ipa: '/pɹaɡmˈatɪk/',
    chineseShort: '务实的；实用主义的', chineseExplanation: '表示“务实的；实用主义的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Dealing with problems in a practical way based on real conditions rather than theory alone.',
    examples: [{ english: 'The phrase "a pragmatic approach" is common in formal academic or professional contexts.', malay: 'Pragmatik.', chinese: '“务实的方法”这一表达常见于正式的学术或专业语境。' }], collocations: ['a pragmatic approach', 'pragmatic solution'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'qualitative', term: 'qualitative', normalizedTerm: 'qualitative', partOfSpeech: ['adjective'], ipa: '/kwˈɒlɪtˌeɪtɪv/',
    chineseShort: '定性的；性质方面的', chineseExplanation: '表示“定性的；性质方面的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to qualities, characteristics, meanings, or descriptions rather than numerical measurement.',
    examples: [{ english: 'Researchers may encounter the expression "qualitative research" in advanced writing.', malay: 'Kualitatif.', chinese: '研究者可能会在高级写作中遇到“定性研究”这一表达。' }], collocations: ['qualitative research', 'qualitative analysis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'quantitative', term: 'quantitative', normalizedTerm: 'quantitative', partOfSpeech: ['adjective'], ipa: '/kwˈɒntɪtˌeɪtɪv/',
    chineseShort: '定量的；数量方面的', chineseExplanation: '表示“定量的；数量方面的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to numerical measurement, amounts, or statistical analysis.',
    examples: [{ english: 'The report uses the expression "quantitative data" in its analysis.', malay: 'Kuantitatif.', chinese: '报告在分析中使用了“定量数据”这一表达。' }], collocations: ['quantitative data', 'quantitative analysis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'rationale', term: 'rationale', normalizedTerm: 'rationale', partOfSpeech: ['noun'], ipa: '/ɹˌaʃənˈal/',
    chineseShort: '理论依据；根本理由', chineseExplanation: '表示“理论依据；根本理由”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The underlying reason or logical basis for a decision, action, or belief.',
    examples: [{ english: 'The phrase "the rationale behind the policy" is common in formal academic or professional contexts.', malay: 'Rasional.', chinese: '“政策背后的理由”这一表达常见于正式的学术或专业语境。' }], collocations: ['the rationale behind the policy', 'clear rationale'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'reconcile', term: 'reconcile', normalizedTerm: 'reconcile', partOfSpeech: ['verb'], ipa: '/ɹˈɛkənsˌaɪl/',
    chineseShort: '调和；使一致', chineseExplanation: '表示“调和；使一致”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make apparently conflicting ideas, facts, or interests compatible, or restore agreement.',
    examples: [{ english: 'Researchers may encounter the expression "reconcile conflicting views" in advanced writing.', malay: 'Mendamaikan.', chinese: '研究者可能会在高级写作中遇到“调和冲突观点”这一表达。' }], collocations: ['reconcile conflicting views', 'reconcile the accounts'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'redundant', term: 'redundant', normalizedTerm: 'redundant', partOfSpeech: ['adjective'], ipa: '/ɹɪdˈʌndənt/',
    chineseShort: '多余的；冗余的', chineseExplanation: '表示“多余的；冗余的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'No longer needed or useful because it is duplicated, unnecessary, or replaced.',
    examples: [{ english: 'The report uses the expression "redundant information" in its analysis.', malay: 'Berlebihan.', chinese: '报告在分析中使用了“冗余信息”这一表达。' }], collocations: ['redundant information', 'make a role redundant'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'refine', term: 'refine', normalizedTerm: 'refine', partOfSpeech: ['verb'], ipa: '/ɹɪfˈaɪn/',
    chineseShort: '改进；精炼', chineseExplanation: '表示“改进；精炼”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To improve something by making small changes, removing weaknesses, or increasing precision.',
    examples: [{ english: 'The phrase "refine the methodology" is common in formal academic or professional contexts.', malay: 'Memperhalusi.', chinese: '“改进方法论”这一表达常见于正式的学术或专业语境。' }], collocations: ['refine the methodology', 'refine a proposal'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'refute', term: 'refute', normalizedTerm: 'refute', partOfSpeech: ['verb'], ipa: '/ɹɪfjˈuːt/',
    chineseShort: '反驳；驳斥', chineseExplanation: '表示“反驳；驳斥”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To prove that a statement, argument, or theory is false or incorrect.',
    examples: [{ english: 'Researchers may encounter the expression "refute a claim" in advanced writing.', malay: 'Menyangkal.', chinese: '研究者可能会在高级写作中遇到“驳斥主张”这一表达。' }], collocations: ['refute a claim', 'refute the argument'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'reinforce', term: 'reinforce', normalizedTerm: 'reinforce', partOfSpeech: ['verb'], ipa: '/ɹˌiːɪnfˈɔːs/',
    chineseShort: '加强；强化', chineseExplanation: '表示“加强；强化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To strengthen an idea, behaviour, structure, or effect through additional support.',
    examples: [{ english: 'The report uses the expression "reinforce the message" in its analysis.', malay: 'Mengukuhkan.', chinese: '报告在分析中使用了“强化信息”这一表达。' }], collocations: ['reinforce the message', 'reinforce existing patterns'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'relinquish', term: 'relinquish', normalizedTerm: 'relinquish', partOfSpeech: ['verb'], ipa: '/ɹɪlˈɪnkwɪʃ/',
    chineseShort: '放弃；交出', chineseExplanation: '表示“放弃；交出”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To voluntarily give up control, possession, authority, or a right.',
    examples: [{ english: 'The phrase "relinquish control" is common in formal academic or professional contexts.', malay: 'Melepaskan.', chinese: '“放弃控制权”这一表达常见于正式的学术或专业语境。' }], collocations: ['relinquish control', 'relinquish a claim'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'reluctant', term: 'reluctant', normalizedTerm: 'reluctant', partOfSpeech: ['adjective'], ipa: '/ɹɪlˈʌktənt/',
    chineseShort: '不情愿的；勉强的', chineseExplanation: '表示“不情愿的；勉强的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Unwilling or hesitant to do something.',
    examples: [{ english: 'Researchers may encounter the expression "reluctant to change" in advanced writing.', malay: 'Keberatan.', chinese: '研究者可能会在高级写作中遇到“不愿改变”这一表达。' }], collocations: ['reluctant to change', 'reluctant participant'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'render', term: 'render', normalizedTerm: 'render', partOfSpeech: ['verb'], ipa: '/ɹˈɛndə/',
    chineseShort: '使成为；提供', chineseExplanation: '表示“使成为；提供”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cause something to become a particular state, or to provide a service, judgement, or assistance.',
    examples: [{ english: 'The report uses the expression "render the system ineffective" in its analysis.', malay: 'Menjadikan.', chinese: '报告在分析中使用了“使系统失效”这一表达。' }], collocations: ['render the system ineffective', 'render assistance'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'replicate', term: 'replicate', normalizedTerm: 'replicate', partOfSpeech: ['verb'], ipa: '/ɹˈɛplɪkˌeɪt/',
    chineseShort: '复制；重复验证', chineseExplanation: '表示“复制；重复验证”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To copy something closely or repeat a study or process to see whether the same result occurs.',
    examples: [{ english: 'The phrase "replicate the experiment" is common in formal academic or professional contexts.', malay: 'Mengulangi.', chinese: '“重复实验”这一表达常见于正式的学术或专业语境。' }], collocations: ['replicate the experiment', 'replicate the results'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'resilient', term: 'resilient', normalizedTerm: 'resilient', partOfSpeech: ['adjective'], ipa: '/ɹɪsˈɪliənt/',
    chineseShort: '有韧性的；恢复力强的', chineseExplanation: '表示“有韧性的；恢复力强的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to recover quickly from difficulty, damage, pressure, or change.',
    examples: [{ english: 'Researchers may encounter the expression "a resilient economy" in advanced writing.', malay: 'Berdaya tahan.', chinese: '研究者可能会在高级写作中遇到“有韧性的经济”这一表达。' }], collocations: ['a resilient economy', 'resilient systems'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'restrain', term: 'restrain', normalizedTerm: 'restrain', partOfSpeech: ['verb'], ipa: '/ɹɪstɹˈeɪn/',
    chineseShort: '抑制；约束', chineseExplanation: '表示“抑制；约束”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To prevent someone or something from acting freely or becoming excessive.',
    examples: [{ english: 'The report uses the expression "restrain spending" in its analysis.', malay: 'Mengekang.', chinese: '报告在分析中使用了“抑制支出”这一表达。' }], collocations: ['restrain spending', 'restrain emotions'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'retain', term: 'retain', normalizedTerm: 'retain', partOfSpeech: ['verb'], ipa: '/ɹɪtˈeɪn/',
    chineseShort: '保留；保持', chineseExplanation: '表示“保留；保持”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To continue to have, use, remember, or control something.',
    examples: [{ english: 'The phrase "retain information" is common in formal academic or professional contexts.', malay: 'Mengekalkan.', chinese: '“保留信息”这一表达常见于正式的学术或专业语境。' }], collocations: ['retain information', 'retain employees'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'rigorous', term: 'rigorous', normalizedTerm: 'rigorous', partOfSpeech: ['adjective'], ipa: '/ɹˈɪɡəɹəs/',
    chineseShort: '严谨的；严格的', chineseExplanation: '表示“严谨的；严格的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Extremely thorough, careful, accurate, or demanding in method and standards.',
    examples: [{ english: 'Researchers may encounter the expression "rigorous analysis" in advanced writing.', malay: 'Ketat.', chinese: '研究者可能会在高级写作中遇到“严谨分析”这一表达。' }], collocations: ['rigorous analysis', 'rigorous standards'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'robust', term: 'robust', normalizedTerm: 'robust', partOfSpeech: ['adjective'], ipa: '/ɹəʊbˈʌst/',
    chineseShort: '稳健的；强健的', chineseExplanation: '表示“稳健的；强健的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Strong, effective, and able to perform well under difficult or changing conditions.',
    examples: [{ english: 'The report uses the expression "robust evidence" in its analysis.', malay: 'Kukuh.', chinese: '报告在分析中使用了“有力证据”这一表达。' }], collocations: ['robust evidence', 'robust system'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'salient', term: 'salient', normalizedTerm: 'salient', partOfSpeech: ['adjective'], ipa: '/sˈeɪliənt/',
    chineseShort: '显著的；突出的', chineseExplanation: '表示“显著的；突出的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Most noticeable, relevant, or important in a particular context.',
    examples: [{ english: 'The phrase "a salient feature" is common in formal academic or professional contexts.', malay: 'Ketara.', chinese: '“显著特征”这一表达常见于正式的学术或专业语境。' }], collocations: ['a salient feature', 'salient point'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'scrutinize', term: 'scrutinise', normalizedTerm: 'scrutinise', partOfSpeech: ['verb'], ipa: '/skɹˈuːtɪnˌaɪz/',
    chineseShort: '仔细审查', chineseExplanation: '表示“仔细审查”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To examine something very carefully in order to detect details, weaknesses, or errors.',
    examples: [{ english: 'Researchers may encounter the expression "scrutinise the evidence" in advanced writing.', malay: 'Meneliti.', chinese: '研究者可能会在高级写作中遇到“仔细审查证据”这一表达。' }], collocations: ['scrutinise the evidence', 'scrutinise spending'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'skeptical', term: 'sceptical', normalizedTerm: 'sceptical', partOfSpeech: ['adjective'], ipa: '/skˈɛptɪkəl/',
    chineseShort: '怀疑的；持保留态度的', chineseExplanation: '表示“怀疑的；持保留态度的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Not easily convinced and inclined to question whether a claim is true or reliable.',
    examples: [{ english: 'The report uses the expression "sceptical of the claim" in its analysis.', malay: 'Ragu-ragu.', chinese: '报告在分析中使用了“对该主张持怀疑态度”这一表达。' }], collocations: ['sceptical of the claim', 'remain sceptical'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'simultaneous', term: 'simultaneous', normalizedTerm: 'simultaneous', partOfSpeech: ['adjective'], ipa: '/sˌɪməltˈeɪniəs/',
    chineseShort: '同时发生的', chineseExplanation: '表示“同时发生的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Happening or existing at exactly the same time.',
    examples: [{ english: 'The phrase "simultaneous events" is common in formal academic or professional contexts.', malay: 'Serentak.', chinese: '“同时发生的事件”这一表达常见于正式的学术或专业语境。' }], collocations: ['simultaneous events', 'simultaneous changes'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'sophisticated', term: 'sophisticated', normalizedTerm: 'sophisticated', partOfSpeech: ['adjective'], ipa: '/səfˈɪstɪkˌeɪtɪd/',
    chineseShort: '复杂先进的；老练的', chineseExplanation: '表示“复杂先进的；老练的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Highly developed, complex, refined, or showing advanced knowledge and judgement.',
    examples: [{ english: 'Researchers may encounter the expression "a sophisticated model" in advanced writing.', malay: 'Canggih.', chinese: '研究者可能会在高级写作中遇到“复杂先进的模型”这一表达。' }], collocations: ['a sophisticated model', 'sophisticated analysis'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'sporadic', term: 'sporadic', normalizedTerm: 'sporadic', partOfSpeech: ['adjective'], ipa: '/spɔːɹˈadɪk/',
    chineseShort: '零星的；偶发的', chineseExplanation: '表示“零星的；偶发的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Occurring irregularly and only in a few places or at separated times.',
    examples: [{ english: 'The report uses the expression "sporadic incidents" in its analysis.', malay: 'Sekali-sekala.', chinese: '报告在分析中使用了“零星事件”这一表达。' }], collocations: ['sporadic incidents', 'sporadic growth'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'stance', term: 'stance', normalizedTerm: 'stance', partOfSpeech: ['noun'], ipa: '/stˈans/',
    chineseShort: '立场；态度', chineseExplanation: '表示“立场；态度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A particular position, opinion, or attitude towards an issue.',
    examples: [{ english: 'The phrase "adopt a stance" is common in formal academic or professional contexts.', malay: 'Pendirian.', chinese: '“采取立场”这一表达常见于正式的学术或专业语境。' }], collocations: ['adopt a stance', 'a firm stance'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'stringent', term: 'stringent', normalizedTerm: 'stringent', partOfSpeech: ['adjective'], ipa: '/stɹˈɪndʒənt/',
    chineseShort: '严格的；严厉的', chineseExplanation: '表示“严格的；严厉的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Very strict, precise, and demanding, especially in rules, standards, or conditions.',
    examples: [{ english: 'Researchers may encounter the expression "stringent regulations" in advanced writing.', malay: 'Ketat.', chinese: '研究者可能会在高级写作中遇到“严格法规”这一表达。' }], collocations: ['stringent regulations', 'stringent requirements'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'subordinate', term: 'subordinate', normalizedTerm: 'subordinate', partOfSpeech: ['adjective', 'noun', 'verb'], ipa: '/sʌbˈɔːdɪnət/',
    chineseShort: '次要的；下属；使从属', chineseExplanation: '表示“次要的；下属；使从属”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Lower in rank or importance, or to treat something as less important than another thing.',
    examples: [{ english: 'The report uses the expression "a subordinate role" in its analysis.', malay: 'Bawahan.', chinese: '报告在分析中使用了“次要角色”这一表达。' }], collocations: ['a subordinate role', 'subordinate one goal to another'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'substantiate', term: 'substantiate', normalizedTerm: 'substantiate', partOfSpeech: ['verb'], ipa: '/səbstˈanʃɪˌeɪt/',
    chineseShort: '证实；证明有根据', chineseExplanation: '表示“证实；证明有根据”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To provide evidence that proves or supports a claim, statement, or allegation.',
    examples: [{ english: 'The phrase "substantiate a claim" is common in formal academic or professional contexts.', malay: 'Membuktikan.', chinese: '“证实主张”这一表达常见于正式的学术或专业语境。' }], collocations: ['substantiate a claim', 'substantiate the allegations'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'substantial', term: 'substantial', normalizedTerm: 'substantial', partOfSpeech: ['adjective'], ipa: '/səbstˈanʃəl/',
    chineseShort: '大量的；重大的', chineseExplanation: '表示“大量的；重大的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Large in amount, value, importance, or effect.',
    examples: [{ english: 'Researchers may encounter the expression "substantial evidence" in advanced writing.', malay: 'Besar.', chinese: '研究者可能会在高级写作中遇到“大量有力证据”这一表达。' }], collocations: ['substantial evidence', 'substantial improvement'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'subtle', term: 'subtle', normalizedTerm: 'subtle', partOfSpeech: ['adjective'], ipa: '/sˈʌtəl/',
    chineseShort: '微妙的；不易察觉的', chineseExplanation: '表示“微妙的；不易察觉的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Not obvious or immediately noticeable, often involving fine distinctions.',
    examples: [{ english: 'The report uses the expression "a subtle difference" in its analysis.', malay: 'Halus.', chinese: '报告在分析中使用了“细微差别”这一表达。' }], collocations: ['a subtle difference', 'subtle influence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'substitute', term: 'substitute', normalizedTerm: 'substitute', partOfSpeech: ['noun', 'verb'], ipa: '/sˈʌbstɪtjˌuːt/',
    chineseShort: '替代品；替代', chineseExplanation: '表示“替代品；替代”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A person or thing used in place of another, or to replace one thing with another.',
    examples: [{ english: 'The phrase "substitute one method for another" is common in formal academic or professional contexts.', malay: 'Menggantikan.', chinese: '“用一种方法替代另一种”这一表达常见于正式的学术或专业语境。' }], collocations: ['substitute one method for another', 'a suitable substitute'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'superficial', term: 'superficial', normalizedTerm: 'superficial', partOfSpeech: ['adjective'], ipa: '/sˈuːpəfˈɪʃəl/',
    chineseShort: '表面的；肤浅的', chineseExplanation: '表示“表面的；肤浅的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Concerned only with obvious features and lacking depth, detail, or serious understanding.',
    examples: [{ english: 'Researchers may encounter the expression "a superficial analysis" in advanced writing.', malay: 'Cetek.', chinese: '研究者可能会在高级写作中遇到“肤浅的分析”这一表达。' }], collocations: ['a superficial analysis', 'superficial differences'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'suppress', term: 'suppress', normalizedTerm: 'suppress', partOfSpeech: ['verb'], ipa: '/səpɹˈɛs/',
    chineseShort: '压制；抑制', chineseExplanation: '表示“压制；抑制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To prevent, restrain, or stop an activity, feeling, process, or piece of information.',
    examples: [{ english: 'The report uses the expression "suppress dissent" in its analysis.', malay: 'Menindas.', chinese: '报告在分析中使用了“压制异议”这一表达。' }], collocations: ['suppress dissent', 'suppress evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'tangible', term: 'tangible', normalizedTerm: 'tangible', partOfSpeech: ['adjective'], ipa: '/tˈandʒəbəl/',
    chineseShort: '有形的；明确可感的', chineseExplanation: '表示“有形的；明确可感的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Clear, definite, and real enough to be perceived, measured, or demonstrated.',
    examples: [{ english: 'The phrase "tangible benefits" is common in formal academic or professional contexts.', malay: 'Nyata.', chinese: '“实际可见的益处”这一表达常见于正式的学术或专业语境。' }], collocations: ['tangible benefits', 'tangible evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'tentative', term: 'tentative', normalizedTerm: 'tentative', partOfSpeech: ['adjective'], ipa: '/tˈɛntətˌɪv/',
    chineseShort: '暂定的；试探性的', chineseExplanation: '表示“暂定的；试探性的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Not final or certain, and subject to change after further consideration.',
    examples: [{ english: 'Researchers may encounter the expression "a tentative conclusion" in advanced writing.', malay: 'Sementara.', chinese: '研究者可能会在高级写作中遇到“暂定结论”这一表达。' }], collocations: ['a tentative conclusion', 'tentative agreement'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'threshold', term: 'threshold', normalizedTerm: 'threshold', partOfSpeech: ['noun'], ipa: '/θɹˈɛʃəʊld/',
    chineseShort: '门槛；临界点', chineseExplanation: '表示“门槛；临界点”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A level, point, or limit at which something begins, changes, or becomes effective.',
    examples: [{ english: 'The report uses the expression "cross a threshold" in its analysis.', malay: 'Ambang.', chinese: '报告在分析中使用了“跨过临界点”这一表达。' }], collocations: ['cross a threshold', 'minimum threshold'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'transcend', term: 'transcend', normalizedTerm: 'transcend', partOfSpeech: ['verb'], ipa: '/tɹansˈɛnd/',
    chineseShort: '超越；超出', chineseExplanation: '表示“超越；超出”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To go beyond the limits, categories, or ordinary experience of something.',
    examples: [{ english: 'The phrase "transcend cultural boundaries" is common in formal academic or professional contexts.', malay: 'Melampaui.', chinese: '“超越文化界限”这一表达常见于正式的学术或专业语境。' }], collocations: ['transcend cultural boundaries', 'transcend differences'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'transparent', term: 'transparent', normalizedTerm: 'transparent', partOfSpeech: ['adjective'], ipa: '/tɹanspˈaɹənt/',
    chineseShort: '透明的；公开清晰的', chineseExplanation: '表示“透明的；公开清晰的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Open, clear, and easy to understand, especially in processes, decisions, or information.',
    examples: [{ english: 'Researchers may encounter the expression "a transparent process" in advanced writing.', malay: 'Telus.', chinese: '研究者可能会在高级写作中遇到“透明的过程”这一表达。' }], collocations: ['a transparent process', 'transparent reporting'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'undermine', term: 'undermine', normalizedTerm: 'undermine', partOfSpeech: ['verb'], ipa: '/ˌʌndəmˈaɪn/',
    chineseShort: '削弱；破坏', chineseExplanation: '表示“削弱；破坏”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To gradually weaken the strength, authority, confidence, or effectiveness of something.',
    examples: [{ english: 'The report uses the expression "undermine confidence" in its analysis.', malay: 'Melemahkan.', chinese: '报告在分析中使用了“削弱信心”这一表达。' }], collocations: ['undermine confidence', 'undermine credibility'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'unequivocal', term: 'unequivocal', normalizedTerm: 'unequivocal', partOfSpeech: ['adjective'], ipa: '/ʌnɪkwˈɪvəkəl/',
    chineseShort: '明确无误的；毫不含糊的', chineseExplanation: '表示“明确无误的；毫不含糊的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Expressed in a completely clear and unambiguous way.',
    examples: [{ english: 'The phrase "unequivocal support" is common in formal academic or professional contexts.', malay: 'Tegas.', chinese: '“明确支持”这一表达常见于正式的学术或专业语境。' }], collocations: ['unequivocal support', 'unequivocal evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'unprecedented', term: 'unprecedented', normalizedTerm: 'unprecedented', partOfSpeech: ['adjective'], ipa: '/ʌnpɹˈɛsɪdəntɪd/',
    chineseShort: '前所未有的', chineseExplanation: '表示“前所未有的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Never having happened, existed, or been known before.',
    examples: [{ english: 'Researchers may encounter the expression "unprecedented growth" in advanced writing.', malay: 'Belum pernah berlaku.', chinese: '研究者可能会在高级写作中遇到“前所未有的增长”这一表达。' }], collocations: ['unprecedented growth', 'an unprecedented crisis'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'validate', term: 'validate', normalizedTerm: 'validate', partOfSpeech: ['verb'], ipa: '/vˈalɪdˌeɪt/',
    chineseShort: '验证；确认有效', chineseExplanation: '表示“验证；确认有效”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To confirm that something is accurate, acceptable, effective, or well founded.',
    examples: [{ english: 'The report uses the expression "validate the findings" in its analysis.', malay: 'Mengesahkan.', chinese: '报告在分析中使用了“验证研究结果”这一表达。' }], collocations: ['validate the findings', 'validate a model'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'viable', term: 'viable', normalizedTerm: 'viable', partOfSpeech: ['adjective'], ipa: '/vˈaɪəbəl/',
    chineseShort: '可行的；能持续发展的', chineseExplanation: '表示“可行的；能持续发展的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Capable of working successfully or continuing to exist under real conditions.',
    examples: [{ english: 'The phrase "a viable alternative" is common in formal academic or professional contexts.', malay: 'Berdaya maju.', chinese: '“可行的替代方案”这一表达常见于正式的学术或专业语境。' }], collocations: ['a viable alternative', 'commercially viable'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'vindicate', term: 'vindicate', normalizedTerm: 'vindicate', partOfSpeech: ['verb'], ipa: '/vˈɪndɪkˌeɪt/',
    chineseShort: '证明…正确；洗清嫌疑', chineseExplanation: '表示“证明…正确；洗清嫌疑”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To show that a person, decision, or belief was right, justified, or not guilty.',
    examples: [{ english: 'Researchers may encounter the expression "vindicate a decision" in advanced writing.', malay: 'Membenarkan.', chinese: '研究者可能会在高级写作中遇到“证明决定正确”这一表达。' }], collocations: ['vindicate a decision', 'vindicate the accused'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'volatile', term: 'volatile', normalizedTerm: 'volatile', partOfSpeech: ['adjective'], ipa: '/vˈɒlɐtˌaɪl/',
    chineseShort: '易变的；不稳定的', chineseExplanation: '表示“易变的；不稳定的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Likely to change suddenly and unpredictably, often in a dangerous or extreme way.',
    examples: [{ english: 'The report uses the expression "volatile markets" in its analysis.', malay: 'Tidak stabil.', chinese: '报告在分析中使用了“波动剧烈的市场”这一表达。' }], collocations: ['volatile markets', 'volatile situation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'warrant', term: 'warrant', normalizedTerm: 'warrant', partOfSpeech: ['verb', 'noun'], ipa: '/wˈɒɹənt/',
    chineseShort: '使有必要；正当理由', chineseExplanation: '表示“使有必要；正当理由”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To justify or require a particular action or conclusion, or a reason that justifies it.',
    examples: [{ english: 'The phrase "warrant further investigation" is common in formal academic or professional contexts.', malay: 'Memerlukan.', chinese: '“有必要进一步调查”这一表达常见于正式的学术或专业语境。' }], collocations: ['warrant further investigation', 'sufficient warrant'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'widespread', term: 'widespread', normalizedTerm: 'widespread', partOfSpeech: ['adjective'], ipa: '/wˈaɪdspɹɛd/',
    chineseShort: '广泛的；普遍的', chineseExplanation: '表示“广泛的；普遍的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Existing, happening, or affecting many people or places over a large area.',
    examples: [{ english: 'Researchers may encounter the expression "widespread concern" in advanced writing.', malay: 'Meluas.', chinese: '研究者可能会在高级写作中遇到“广泛关注”这一表达。' }], collocations: ['widespread concern', 'widespread adoption'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'abrogate', term: 'abrogate', normalizedTerm: 'abrogate', partOfSpeech: ['verb'], ipa: '/ˈabɹəɡˌeɪt/',
    chineseShort: '废除；取消', chineseExplanation: '表示“废除；取消”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To formally repeal, abolish, or end a law, agreement, right, or responsibility.',
    examples: [{ english: 'The report uses the expression "abrogate a treaty" in its analysis.', malay: 'Memansuhkan.', chinese: '报告在分析中使用了“废除条约”这一表达。' }], collocations: ['abrogate a treaty', 'abrogate a legal obligation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'adversarial', term: 'adversarial', normalizedTerm: 'adversarial', partOfSpeech: ['adjective'], ipa: '/ˌadvəsˈeəɹɪəl/',
    chineseShort: '对抗性的；敌对的', chineseExplanation: '表示“对抗性的；敌对的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Involving opposition, conflict, or competition between parties with conflicting interests.',
    examples: [{ english: 'The phrase "an adversarial relationship" is common in formal academic or professional contexts.', malay: 'Bermusuhan.', chinese: '“对抗关系”这一表达常见于正式的学术或专业语境。' }], collocations: ['an adversarial relationship', 'adversarial proceedings'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'affluent', term: 'affluent', normalizedTerm: 'affluent', partOfSpeech: ['adjective'], ipa: '/ˈafluːənt/',
    chineseShort: '富裕的；富足的', chineseExplanation: '表示“富裕的；富足的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having a great deal of money, resources, or material wealth.',
    examples: [{ english: 'Researchers may encounter the expression "an affluent society" in advanced writing.', malay: 'Mewah.', chinese: '研究者可能会在高级写作中遇到“富裕社会”这一表达。' }], collocations: ['an affluent society', 'affluent households'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'aggravate', term: 'aggravate', normalizedTerm: 'aggravate', partOfSpeech: ['verb'], ipa: '/ˈaɡɹɐvˌeɪt/',
    chineseShort: '加重；使恶化', chineseExplanation: '表示“加重；使恶化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make a problem, injury, conflict, or unpleasant situation worse.',
    examples: [{ english: 'The report uses the expression "aggravate the problem" in its analysis.', malay: 'Memburukkan.', chinese: '报告在分析中使用了“使问题恶化”这一表达。' }], collocations: ['aggravate the problem', 'aggravate tensions'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'ambiguity', term: 'ambiguity', normalizedTerm: 'ambiguity', partOfSpeech: ['noun'], ipa: '/ˌambɪɡjˈuːɪti/',
    chineseShort: '模糊；歧义', chineseExplanation: '表示“模糊；歧义”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of having more than one possible meaning or being unclear.',
    examples: [{ english: 'The phrase "linguistic ambiguity" is common in formal academic or professional contexts.', malay: 'Kekaburan.', chinese: '“语言歧义”这一表达常见于正式的学术或专业语境。' }], collocations: ['linguistic ambiguity', 'remove ambiguity'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'amplify', term: 'amplify', normalizedTerm: 'amplify', partOfSpeech: ['verb'], ipa: '/ˈamplɪfˌaɪ/',
    chineseShort: '放大；增强', chineseExplanation: '表示“放大；增强”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To increase the strength, effect, volume, or significance of something.',
    examples: [{ english: 'Researchers may encounter the expression "amplify the impact" in advanced writing.', malay: 'Menguatkan.', chinese: '研究者可能会在高级写作中遇到“放大影响”这一表达。' }], collocations: ['amplify the impact', 'amplify a signal'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'analogous', term: 'analogous', normalizedTerm: 'analogous', partOfSpeech: ['adjective'], ipa: '/ɐnˈaləɡəs/',
    chineseShort: '类似的；可类比的', chineseExplanation: '表示“类似的；可类比的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Similar in important respects and therefore suitable for comparison.',
    examples: [{ english: 'The report uses the expression "an analogous situation" in its analysis.', malay: 'Sebanding.', chinese: '报告在分析中使用了“类似情况”这一表达。' }], collocations: ['an analogous situation', 'roughly analogous'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'anomaly', term: 'anomaly', normalizedTerm: 'anomaly', partOfSpeech: ['noun'], ipa: '/ɐnˈɒməli/',
    chineseShort: '异常；反常现象', chineseExplanation: '表示“异常；反常现象”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something that differs from what is standard, normal, or expected.',
    examples: [{ english: 'The phrase "a statistical anomaly" is common in formal academic or professional contexts.', malay: 'Keanehan.', chinese: '“统计异常”这一表达常见于正式的学术或专业语境。' }], collocations: ['a statistical anomaly', 'detect an anomaly'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'antagonistic', term: 'antagonistic', normalizedTerm: 'antagonistic', partOfSpeech: ['adjective'], ipa: '/antˈaɡənˈɪstɪk/',
    chineseShort: '敌对的；对立的', chineseExplanation: '表示“敌对的；对立的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Showing active opposition, hostility, or incompatibility.',
    examples: [{ english: 'Researchers may encounter the expression "antagonistic attitudes" in advanced writing.', malay: 'Bertentangan.', chinese: '研究者可能会在高级写作中遇到“敌对态度”这一表达。' }], collocations: ['antagonistic attitudes', 'antagonistic interests'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'apathy', term: 'apathy', normalizedTerm: 'apathy', partOfSpeech: ['noun'], ipa: '/ˈapəθi/',
    chineseShort: '冷漠；缺乏兴趣', chineseExplanation: '表示“冷漠；缺乏兴趣”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A lack of interest, enthusiasm, concern, or willingness to act.',
    examples: [{ english: 'The report uses the expression "political apathy" in its analysis.', malay: 'Sikap tidak peduli.', chinese: '报告在分析中使用了“政治冷漠”这一表达。' }], collocations: ['political apathy', 'public apathy'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'appease', term: 'appease', normalizedTerm: 'appease', partOfSpeech: ['verb'], ipa: '/ɐpˈiːz/',
    chineseShort: '安抚；平息', chineseExplanation: '表示“安抚；平息”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To calm, satisfy, or reduce the anger or demands of a person or group.',
    examples: [{ english: 'The phrase "appease critics" is common in formal academic or professional contexts.', malay: 'Menenangkan.', chinese: '“安抚批评者”这一表达常见于正式的学术或专业语境。' }], collocations: ['appease critics', 'appease public concern'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'aspiration', term: 'aspiration', normalizedTerm: 'aspiration', partOfSpeech: ['noun'], ipa: '/ˌaspəɹˈeɪʃən/',
    chineseShort: '抱负；愿望', chineseExplanation: '表示“抱负；愿望”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A strong hope, ambition, or desire to achieve something.',
    examples: [{ english: 'Researchers may encounter the expression "career aspirations" in advanced writing.', malay: 'Cita-cita.', chinese: '研究者可能会在高级写作中遇到“职业抱负”这一表达。' }], collocations: ['career aspirations', 'social aspirations'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'assertive', term: 'assertive', normalizedTerm: 'assertive', partOfSpeech: ['adjective'], ipa: '/ɐsˈɜːtɪv/',
    chineseShort: '自信坚定的；果断的', chineseExplanation: '表示“自信坚定的；果断的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Confidently expressing opinions or needs while respecting others.',
    examples: [{ english: 'The report uses the expression "an assertive approach" in its analysis.', malay: 'Tegas.', chinese: '报告在分析中使用了“坚定自信的方式”这一表达。' }], collocations: ['an assertive approach', 'assertive communication'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'assimilate', term: 'assimilate', normalizedTerm: 'assimilate', partOfSpeech: ['verb'], ipa: '/ɐsˈɪmɪlˌeɪt/',
    chineseShort: '吸收；同化', chineseExplanation: '表示“吸收；同化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To absorb and understand information, or become integrated into a wider group or culture.',
    examples: [{ english: 'The phrase "assimilate new information" is common in formal academic or professional contexts.', malay: 'Menyerap.', chinese: '“吸收新信息”这一表达常见于正式的学术或专业语境。' }], collocations: ['assimilate new information', 'assimilate into society'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'audacious', term: 'audacious', normalizedTerm: 'audacious', partOfSpeech: ['adjective'], ipa: '/ɔːdˈeɪʃəs/',
    chineseShort: '大胆的；无畏的', chineseExplanation: '表示“大胆的；无畏的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Showing a willingness to take bold risks or challenge conventions.',
    examples: [{ english: 'Researchers may encounter the expression "an audacious proposal" in advanced writing.', malay: 'Berani.', chinese: '研究者可能会在高级写作中遇到“大胆提案”这一表达。' }], collocations: ['an audacious proposal', 'audacious strategy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'austere', term: 'austere', normalizedTerm: 'austere', partOfSpeech: ['adjective'], ipa: '/ɔːstˈiə/',
    chineseShort: '朴素的；严苛的', chineseExplanation: '表示“朴素的；严苛的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Severely simple in style, or involving strict limits on spending and comfort.',
    examples: [{ english: 'The report uses the expression "austere conditions" in its analysis.', malay: 'Sederhana dan ketat.', chinese: '报告在分析中使用了“严苛条件”这一表达。' }], collocations: ['austere conditions', 'austere fiscal measures'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'aversion', term: 'aversion', normalizedTerm: 'aversion', partOfSpeech: ['noun'], ipa: '/ɐvˈɜːʃən/',
    chineseShort: '厌恶；强烈反感', chineseExplanation: '表示“厌恶；强烈反感”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A strong dislike of or desire to avoid something.',
    examples: [{ english: 'The phrase "risk aversion" is common in formal academic or professional contexts.', malay: 'Keengganan.', chinese: '“风险厌恶”这一表达常见于正式的学术或专业语境。' }], collocations: ['risk aversion', 'an aversion to change'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'benchmark', term: 'benchmark', normalizedTerm: 'benchmark', partOfSpeech: ['noun', 'verb'], ipa: '/bˈɛntʃmɑːk/',
    chineseShort: '基准；以…为标杆', chineseExplanation: '表示“基准；以…为标杆”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A standard or reference point used to compare, assess, or improve performance.',
    examples: [{ english: 'Researchers may encounter the expression "industry benchmark" in advanced writing.', malay: 'Penanda aras.', chinese: '研究者可能会在高级写作中遇到“行业基准”这一表达。' }], collocations: ['industry benchmark', 'benchmark performance'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'benevolent', term: 'benevolent', normalizedTerm: 'benevolent', partOfSpeech: ['adjective'], ipa: '/bənˈɛvələnt/',
    chineseShort: '仁慈的；善意的', chineseExplanation: '表示“仁慈的；善意的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Kind, generous, and intended to promote the welfare of others.',
    examples: [{ english: 'The report uses the expression "a benevolent policy" in its analysis.', malay: 'Baik hati.', chinese: '报告在分析中使用了“善意政策”这一表达。' }], collocations: ['a benevolent policy', 'benevolent leadership'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'categorical', term: 'categorical', normalizedTerm: 'categorical', partOfSpeech: ['adjective'], ipa: '/kˌatɪɡˈɒɹɪkəl/',
    chineseShort: '明确无条件的；分类的', chineseExplanation: '表示“明确无条件的；分类的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Expressed with complete certainty and without qualification, or relating to distinct categories.',
    examples: [{ english: 'The phrase "a categorical denial" is common in formal academic or professional contexts.', malay: 'Mutlak.', chinese: '“明确否认”这一表达常见于正式的学术或专业语境。' }], collocations: ['a categorical denial', 'categorical distinction'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'coercive', term: 'coercive', normalizedTerm: 'coercive', partOfSpeech: ['adjective'], ipa: '/kˌəʊˈɜːsɪv/',
    chineseShort: '强制性的；胁迫的', chineseExplanation: '表示“强制性的；胁迫的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Using force, threats, or pressure to make someone act in a particular way.',
    examples: [{ english: 'Researchers may encounter the expression "coercive measures" in advanced writing.', malay: 'Memaksa.', chinese: '研究者可能会在高级写作中遇到“强制措施”这一表达。' }], collocations: ['coercive measures', 'coercive power'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'complacent', term: 'complacent', normalizedTerm: 'complacent', partOfSpeech: ['adjective'], ipa: '/kəmplˈeɪsənt/',
    chineseShort: '自满的；安于现状的', chineseExplanation: '表示“自满的；安于现状的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Too satisfied with a situation to notice risks, weaknesses, or the need for improvement.',
    examples: [{ english: 'The report uses the expression "become complacent" in its analysis.', malay: 'Leka.', chinese: '报告在分析中使用了“变得自满”这一表达。' }], collocations: ['become complacent', 'complacent attitude'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'concession', term: 'concession', normalizedTerm: 'concession', partOfSpeech: ['noun'], ipa: '/kənsˈɛʃən/',
    chineseShort: '让步；特许', chineseExplanation: '表示“让步；特许”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something given up or granted in order to reach agreement or satisfy another party.',
    examples: [{ english: 'The phrase "make a concession" is common in formal academic or professional contexts.', malay: 'Konsesi.', chinese: '“作出让步”这一表达常见于正式的学术或专业语境。' }], collocations: ['make a concession', 'major concession'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'conducive', term: 'conducive', normalizedTerm: 'conducive', partOfSpeech: ['adjective'], ipa: '/kəndjˈuːsɪv/',
    chineseShort: '有助于…的；有利的', chineseExplanation: '表示“有助于…的；有利的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Making a particular situation or outcome likely or easier to achieve.',
    examples: [{ english: 'Researchers may encounter the expression "conducive to learning" in advanced writing.', malay: 'Kondusif.', chinese: '研究者可能会在高级写作中遇到“有利于学习”这一表达。' }], collocations: ['conducive to learning', 'conducive environment'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'configuration', term: 'configuration', normalizedTerm: 'configuration', partOfSpeech: ['noun'], ipa: '/kənfˌɪɡjəɹˈeɪʃən/',
    chineseShort: '配置；结构安排', chineseExplanation: '表示“配置；结构安排”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The arrangement or organisation of the parts of a system or object.',
    examples: [{ english: 'The report uses the expression "system configuration" in its analysis.', malay: 'Configurasi.', chinese: '报告在分析中使用了“系统配置”这一表达。' }], collocations: ['system configuration', 'network configuration'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'consolidate', term: 'consolidate', normalizedTerm: 'consolidate', partOfSpeech: ['verb'], ipa: '/kənsˈɒlɪdˌeɪt/',
    chineseShort: '巩固；整合', chineseExplanation: '表示“巩固；整合”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make something stronger, more secure, or more unified by combining elements.',
    examples: [{ english: 'The phrase "consolidate gains" is common in formal academic or professional contexts.', malay: 'Mengukuhkan.', chinese: '“巩固成果”这一表达常见于正式的学术或专业语境。' }], collocations: ['consolidate gains', 'consolidate resources'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'contingency', term: 'contingency', normalizedTerm: 'contingency', partOfSpeech: ['noun'], ipa: '/kəntˈɪndʒənsi/',
    chineseShort: '意外情况；应急方案', chineseExplanation: '表示“意外情况；应急方案”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A possible future event or condition that must be prepared for, especially one that is uncertain.',
    examples: [{ english: 'Researchers may encounter the expression "contingency plan" in advanced writing.', malay: 'Kemungkinan luar jangka.', chinese: '研究者可能会在高级写作中遇到“应急方案”这一表达。' }], collocations: ['contingency plan', 'contingency funding'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'conventional', term: 'conventional', normalizedTerm: 'conventional', partOfSpeech: ['adjective'], ipa: '/kənvˈɛnʃənəl/',
    chineseShort: '传统的；常规的', chineseExplanation: '表示“传统的；常规的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Following established practices, standards, or widely accepted ways of doing things.',
    examples: [{ english: 'The report uses the expression "conventional wisdom" in its analysis.', malay: 'Lazim.', chinese: '报告在分析中使用了“传统观点”这一表达。' }], collocations: ['conventional wisdom', 'conventional methods'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'correlate', term: 'correlate', normalizedTerm: 'correlate', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɒɹɪlˌeɪt/',
    chineseShort: '相关；相关因素', chineseExplanation: '表示“相关；相关因素”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To have or show a mutual relationship in which two variables change together.',
    examples: [{ english: 'The phrase "correlate with income" is common in formal academic or professional contexts.', malay: 'Berkait.', chinese: '“与收入相关”这一表达常见于正式的学术或专业语境。' }], collocations: ['correlate with income', 'strongly correlated variables'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'credibility', term: 'credibility', normalizedTerm: 'credibility', partOfSpeech: ['noun'], ipa: '/kɹˌɛdɪbˈɪlɪti/',
    chineseShort: '可信度；可靠性', chineseExplanation: '表示“可信度；可靠性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being believable, trustworthy, or convincing.',
    examples: [{ english: 'Researchers may encounter the expression "enhance credibility" in advanced writing.', malay: 'Kebolehpercayaan.', chinese: '研究者可能会在高级写作中遇到“提高可信度”这一表达。' }], collocations: ['enhance credibility', 'lose credibility'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'cursory', term: 'cursory', normalizedTerm: 'cursory', partOfSpeech: ['adjective'], ipa: '/kˈɜːsəɹi/',
    chineseShort: '草率的；粗略的', chineseExplanation: '表示“草率的；粗略的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Done quickly and without enough attention to detail.',
    examples: [{ english: 'The report uses the expression "a cursory review" in its analysis.', malay: 'Sepintas lalu.', chinese: '报告在分析中使用了“粗略审查”这一表达。' }], collocations: ['a cursory review', 'cursory examination'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'cynical', term: 'cynical', normalizedTerm: 'cynical', partOfSpeech: ['adjective'], ipa: '/sˈɪnɪkəl/',
    chineseShort: '愤世嫉俗的；怀疑动机的', chineseExplanation: '表示“愤世嫉俗的；怀疑动机的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Believing that people are mainly motivated by self-interest and doubting sincerity.',
    examples: [{ english: 'The phrase "a cynical view" is common in formal academic or professional contexts.', malay: 'Sinis.', chinese: '“愤世嫉俗的观点”这一表达常见于正式的学术或专业语境。' }], collocations: ['a cynical view', 'cynical about politics'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'deference', term: 'deference', normalizedTerm: 'deference', partOfSpeech: ['noun'], ipa: '/dˈɛfɹəns/',
    chineseShort: '尊重；顺从', chineseExplanation: '表示“尊重；顺从”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Respectful submission to another person\'s judgement, authority, or wishes.',
    examples: [{ english: 'Researchers may encounter the expression "show deference" in advanced writing.', malay: 'Rasa hormat.', chinese: '研究者可能会在高级写作中遇到“表示尊重”这一表达。' }], collocations: ['show deference', 'deference to authority'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'deficiency', term: 'deficiency', normalizedTerm: 'deficiency', partOfSpeech: ['noun'], ipa: '/dɪfˈɪʃənsi/',
    chineseShort: '缺陷；不足', chineseExplanation: '表示“缺陷；不足”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A shortage, weakness, or lack of something necessary or desirable.',
    examples: [{ english: 'The report uses the expression "nutritional deficiency" in its analysis.', malay: 'Kekurangan.', chinese: '报告在分析中使用了“营养缺乏”这一表达。' }], collocations: ['nutritional deficiency', 'system deficiency'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'deliberate', term: 'deliberate', normalizedTerm: 'deliberate', partOfSpeech: ['adjective', 'verb'], ipa: '/dɪlˈɪbəɹət/',
    chineseShort: '故意的；慎重考虑', chineseExplanation: '表示“故意的；慎重考虑”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Done intentionally and carefully, or to think about something thoroughly before deciding.',
    examples: [{ english: 'The phrase "a deliberate choice" is common in formal academic or professional contexts.', malay: 'Disengajakan.', chinese: '“有意的选择”这一表达常见于正式的学术或专业语境。' }], collocations: ['a deliberate choice', 'deliberate over the proposal'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'deploy', term: 'deploy', normalizedTerm: 'deploy', partOfSpeech: ['verb'], ipa: '/dɪplˈɔɪ/',
    chineseShort: '部署；调配', chineseExplanation: '表示“部署；调配”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To position or use resources, people, equipment, or technology effectively for a purpose.',
    examples: [{ english: 'Researchers may encounter the expression "deploy resources" in advanced writing.', malay: 'Menggerakkan.', chinese: '研究者可能会在高级写作中遇到“调配资源”这一表达。' }], collocations: ['deploy resources', 'deploy software'], level: 4, cefr: 'C1', categories: ['Technology', 'Business'],
  },
  {
    id: 'deprive', term: 'deprive', normalizedTerm: 'deprive', partOfSpeech: ['verb'], ipa: '/dɪpɹˈaɪv/',
    chineseShort: '剥夺；使丧失', chineseExplanation: '表示“剥夺；使丧失”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To prevent someone from having or using something important or necessary.',
    examples: [{ english: 'The report uses the expression "deprive people of opportunities" in its analysis.', malay: 'Menafikan.', chinese: '报告在分析中使用了“剥夺人们的机会”这一表达。' }], collocations: ['deprive people of opportunities', 'deprive a region of resources'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'devise', term: 'devise', normalizedTerm: 'devise', partOfSpeech: ['verb'], ipa: '/dɪvˈaɪz/',
    chineseShort: '设计；想出', chineseExplanation: '表示“设计；想出”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To create or plan a method, system, solution, or strategy through careful thought.',
    examples: [{ english: 'The phrase "devise a strategy" is common in formal academic or professional contexts.', malay: 'Merangka.', chinese: '“制定策略”这一表达常见于正式的学术或专业语境。' }], collocations: ['devise a strategy', 'devise a solution'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'differentiate', term: 'differentiate', normalizedTerm: 'differentiate', partOfSpeech: ['verb'], ipa: '/dˌɪfəɹˈɛnʃɪˌeɪt/',
    chineseShort: '区分；使差异化', chineseExplanation: '表示“区分；使差异化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To recognise, show, or create a difference between people, things, or ideas.',
    examples: [{ english: 'Researchers may encounter the expression "differentiate between concepts" in advanced writing.', malay: 'Membezakan.', chinese: '研究者可能会在高级写作中遇到“区分概念”这一表达。' }], collocations: ['differentiate between concepts', 'differentiate a product'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'dilemma', term: 'dilemma', normalizedTerm: 'dilemma', partOfSpeech: ['noun'], ipa: '/daɪlˈɛmə/',
    chineseShort: '两难困境', chineseExplanation: '表示“两难困境”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A difficult situation requiring a choice between two or more undesirable or competing options.',
    examples: [{ english: 'The report uses the expression "face a dilemma" in its analysis.', malay: 'Dilema.', chinese: '报告在分析中使用了“面临两难”这一表达。' }], collocations: ['face a dilemma', 'ethical dilemma'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'dimension', term: 'dimension', normalizedTerm: 'dimension', partOfSpeech: ['noun'], ipa: '/daɪmˈɛnʃən/',
    chineseShort: '维度；方面', chineseExplanation: '表示“维度；方面”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A measurable extent or a particular aspect or feature of a situation or concept.',
    examples: [{ english: 'The phrase "social dimension" is common in formal academic or professional contexts.', malay: 'Dimensi.', chinese: '“社会层面”这一表达常见于正式的学术或专业语境。' }], collocations: ['social dimension', 'another dimension'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'discredit', term: 'discredit', normalizedTerm: 'discredit', partOfSpeech: ['verb'], ipa: '/dɪskɹˈɛdɪt/',
    chineseShort: '使失去信誉；质疑可信度', chineseExplanation: '表示“使失去信誉；质疑可信度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To damage the reputation or credibility of a person, claim, or idea.',
    examples: [{ english: 'Researchers may encounter the expression "discredit a witness" in advanced writing.', malay: 'Mencemarkan.', chinese: '研究者可能会在高级写作中遇到“使证人失去可信度”这一表达。' }], collocations: ['discredit a witness', 'discredit the theory'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'disparity', term: 'disparity', normalizedTerm: 'disparity', partOfSpeech: ['noun'], ipa: '/dɪspˈaɹɪti/',
    chineseShort: '差距；不平等', chineseExplanation: '表示“差距；不平等”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A significant difference or inequality between groups, levels, or conditions.',
    examples: [{ english: 'The report uses the expression "income disparity" in its analysis.', malay: 'Jurang.', chinese: '报告在分析中使用了“收入差距”这一表达。' }], collocations: ['income disparity', 'regional disparities'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'dominant', term: 'dominant', normalizedTerm: 'dominant', partOfSpeech: ['adjective'], ipa: '/dˈɒmɪnənt/',
    chineseShort: '占主导的；支配性的', chineseExplanation: '表示“占主导的；支配性的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'More powerful, influential, or common than others in a particular context.',
    examples: [{ english: 'The phrase "a dominant factor" is common in formal academic or professional contexts.', malay: 'Dominan.', chinese: '“主导因素”这一表达常见于正式的学术或专业语境。' }], collocations: ['a dominant factor', 'dominant position'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'dynamic', term: 'dynamic', normalizedTerm: 'dynamic', partOfSpeech: ['adjective', 'noun'], ipa: '/daɪnˈamɪk/',
    chineseShort: '动态的；动力', chineseExplanation: '表示“动态的；动力”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Characterised by constant change, activity, or progress, or a force shaping interaction.',
    examples: [{ english: 'Researchers may encounter the expression "a dynamic environment" in advanced writing.', malay: 'Dinamik.', chinese: '研究者可能会在高级写作中遇到“动态环境”这一表达。' }], collocations: ['a dynamic environment', 'group dynamics'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'eligible', term: 'eligible', normalizedTerm: 'eligible', partOfSpeech: ['adjective'], ipa: '/ˈɛlɪdʒəbəl/',
    chineseShort: '符合资格的', chineseExplanation: '表示“符合资格的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Meeting the necessary conditions or requirements to receive, do, or compete for something.',
    examples: [{ english: 'The report uses the expression "eligible applicants" in its analysis.', malay: 'Layak.', chinese: '报告在分析中使用了“符合资格的申请者”这一表达。' }], collocations: ['eligible applicants', 'eligible for funding'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'emerge', term: 'emerge', normalizedTerm: 'emerge', partOfSpeech: ['verb'], ipa: '/ɪmˈɜːdʒ/',
    chineseShort: '出现；显现', chineseExplanation: '表示“出现；显现”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To become visible, known, important, or established over time.',
    examples: [{ english: 'The phrase "emerge as a leader" is common in formal academic or professional contexts.', malay: 'Muncul.', chinese: '“成为领先者”这一表达常见于正式的学术或专业语境。' }], collocations: ['emerge as a leader', 'new patterns emerge'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'entity', term: 'entity', normalizedTerm: 'entity', partOfSpeech: ['noun'], ipa: '/ˈɛntɪti/',
    chineseShort: '实体；独立存在体', chineseExplanation: '表示“实体；独立存在体”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something that exists as a distinct and independent unit, organisation, or concept.',
    examples: [{ english: 'Researchers may encounter the expression "a legal entity" in advanced writing.', malay: 'Entiti.', chinese: '研究者可能会在高级写作中遇到“法律实体”这一表达。' }], collocations: ['a legal entity', 'separate entity'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'essence', term: 'essence', normalizedTerm: 'essence', partOfSpeech: ['noun'], ipa: '/ˈɛsəns/',
    chineseShort: '本质；核心', chineseExplanation: '表示“本质；核心”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The most important, fundamental, or characteristic quality of something.',
    examples: [{ english: 'The report uses the expression "the essence of the argument" in its analysis.', malay: 'Inti pati.', chinese: '报告在分析中使用了“论点的核心”这一表达。' }], collocations: ['the essence of the argument', 'capture the essence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'eventual', term: 'eventual', normalizedTerm: 'eventual', partOfSpeech: ['adjective'], ipa: '/ɪvˈɛntʃuːəl/',
    chineseShort: '最终的；最后发生的', chineseExplanation: '表示“最终的；最后发生的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Occurring or existing at the end of a process, often after delay or difficulty.',
    examples: [{ english: 'The phrase "the eventual outcome" is common in formal academic or professional contexts.', malay: 'Akhirnya.', chinese: '“最终结果”这一表达常见于正式的学术或专业语境。' }], collocations: ['the eventual outcome', 'eventual success'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'exclude', term: 'exclude', normalizedTerm: 'exclude', partOfSpeech: ['verb'], ipa: '/ɛksklˈuːd/',
    chineseShort: '排除；不包括', chineseExplanation: '表示“排除；不包括”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To deliberately leave out, prevent entry, or remove from consideration.',
    examples: [{ english: 'Researchers may encounter the expression "exclude irrelevant factors" in advanced writing.', malay: 'Mengecualikan.', chinese: '研究者可能会在高级写作中遇到“排除无关因素”这一表达。' }], collocations: ['exclude irrelevant factors', 'exclude participants'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'expedient', term: 'expedient', normalizedTerm: 'expedient', partOfSpeech: ['adjective', 'noun'], ipa: '/ɛkspˈiːdiənt/',
    chineseShort: '权宜的；权宜之计', chineseExplanation: '表示“权宜的；权宜之计”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Convenient and practical for achieving an immediate objective, sometimes at the expense of principle.',
    examples: [{ english: 'The report uses the expression "an expedient solution" in its analysis.', malay: 'Mudah tetapi sementara.', chinese: '报告在分析中使用了“权宜解决方案”这一表达。' }], collocations: ['an expedient solution', 'politically expedient'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'external', term: 'external', normalizedTerm: 'external', partOfSpeech: ['adjective'], ipa: '/ɛkstˈɜːnəl/',
    chineseShort: '外部的；外来的', chineseExplanation: '表示“外部的；外来的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Existing, occurring, or originating outside a particular system, organisation, or body.',
    examples: [{ english: 'The phrase "external factors" is common in formal academic or professional contexts.', malay: 'Luaran.', chinese: '“外部因素”这一表达常见于正式的学术或专业语境。' }], collocations: ['external factors', 'external pressure'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'finite', term: 'finite', normalizedTerm: 'finite', partOfSpeech: ['adjective'], ipa: '/fˈaɪnaɪt/',
    chineseShort: '有限的', chineseExplanation: '表示“有限的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having a definite limit or end rather than being infinite.',
    examples: [{ english: 'Researchers may encounter the expression "finite resources" in advanced writing.', malay: 'Terhad.', chinese: '研究者可能会在高级写作中遇到“有限资源”这一表达。' }], collocations: ['finite resources', 'a finite amount'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'perspective', term: 'perspective', normalizedTerm: 'perspective', partOfSpeech: ['noun'], ipa: '/pəspˈɛktɪv/',
    chineseShort: '观点；视角', chineseExplanation: '表示“观点；视角”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A particular way of viewing, interpreting, or understanding a situation or issue.',
    examples: [{ english: 'The report uses the expression "a broader perspective" in its analysis.', malay: 'Perspektif.', chinese: '报告在分析中使用了“更广阔的视角”这一表达。' }], collocations: ['a broader perspective', 'historical perspective'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'phenomenon', term: 'phenomenon', normalizedTerm: 'phenomenon', partOfSpeech: ['noun'], ipa: '/fɪnˈɒmɪnən/',
    chineseShort: '现象', chineseExplanation: '表示“现象”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An observable event, fact, or situation, especially one studied or explained systematically.',
    examples: [{ english: 'The phrase "a social phenomenon" is common in formal academic or professional contexts.', malay: 'Fenomena.', chinese: '“社会现象”这一表达常见于正式的学术或专业语境。' }], collocations: ['a social phenomenon', 'natural phenomenon'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'protocol', term: 'protocol', normalizedTerm: 'protocol', partOfSpeech: ['noun'], ipa: '/pɹˈəʊtəkˌɒl/',
    chineseShort: '协议；规程', chineseExplanation: '表示“协议；规程”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A formal set of rules, procedures, or technical standards governing behaviour or communication.',
    examples: [{ english: 'Researchers may encounter the expression "security protocol" in advanced writing.', malay: 'Protokol.', chinese: '研究者可能会在高级写作中遇到“安全协议”这一表达。' }], collocations: ['security protocol', 'research protocol'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'pursue', term: 'pursue', normalizedTerm: 'pursue', partOfSpeech: ['verb'], ipa: '/pəsjˈuː/',
    chineseShort: '追求；继续进行', chineseExplanation: '表示“追求；继续进行”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To try to achieve something over time or continue following a course of action.',
    examples: [{ english: 'The report uses the expression "pursue an objective" in its analysis.', malay: 'Mengejar.', chinese: '报告在分析中使用了“追求目标”这一表达。' }], collocations: ['pursue an objective', 'pursue further research'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'radical', term: 'radical', normalizedTerm: 'radical', partOfSpeech: ['adjective', 'noun'], ipa: '/ɹˈadɪkəl/',
    chineseShort: '激进的；根本性的', chineseExplanation: '表示“激进的；根本性的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Involving fundamental or far-reaching change, or favoring major reform.',
    examples: [{ english: 'The phrase "radical reform" is common in formal academic or professional contexts.', malay: 'Radikal.', chinese: '“根本性改革”这一表达常见于正式的学术或专业语境。' }], collocations: ['radical reform', 'radical change'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'rational', term: 'rational', normalizedTerm: 'rational', partOfSpeech: ['adjective'], ipa: '/ɹˈaʃənəl/',
    chineseShort: '理性的；合理的', chineseExplanation: '表示“理性的；合理的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Based on reason, logic, and evidence rather than emotion or impulse.',
    examples: [{ english: 'Researchers may encounter the expression "a rational decision" in advanced writing.', malay: 'Rasional.', chinese: '研究者可能会在高级写作中遇到“理性决定”这一表达。' }], collocations: ['a rational decision', 'rational explanation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'regime', term: 'regime', normalizedTerm: 'regime', partOfSpeech: ['noun'], ipa: '/ɹeɪʒˈiːm/',
    chineseShort: '制度；体制', chineseExplanation: '表示“制度；体制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A system or set of rules governing an institution, activity, or country.',
    examples: [{ english: 'The report uses the expression "regulatory regime" in its analysis.', malay: 'Rejim.', chinese: '报告在分析中使用了“监管制度”这一表达。' }], collocations: ['regulatory regime', 'tax regime'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'revise', term: 'revise', normalizedTerm: 'revise', partOfSpeech: ['verb'], ipa: '/ɹɪvˈaɪz/',
    chineseShort: '修订；重新考虑', chineseExplanation: '表示“修订；重新考虑”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To change, correct, or update something after reconsideration or new information.',
    examples: [{ english: 'The phrase "revise an estimate" is common in formal academic or professional contexts.', malay: 'Menyemak.', chinese: '“修订估计”这一表达常见于正式的学术或专业语境。' }], collocations: ['revise an estimate', 'revise the policy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'rigid', term: 'rigid', normalizedTerm: 'rigid', partOfSpeech: ['adjective'], ipa: '/ɹˈɪdʒɪd/',
    chineseShort: '僵化的；严格固定的', chineseExplanation: '表示“僵化的；严格固定的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Unable or unwilling to bend, adapt, or change easily.',
    examples: [{ english: 'Researchers may encounter the expression "a rigid structure" in advanced writing.', malay: 'Tegar.', chinese: '研究者可能会在高级写作中遇到“僵化结构”这一表达。' }], collocations: ['a rigid structure', 'rigid rules'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'scenario', term: 'scenario', normalizedTerm: 'scenario', partOfSpeech: ['noun'], ipa: '/sənˈɑːɹiˌəʊ/',
    chineseShort: '情景；设想', chineseExplanation: '表示“情景；设想”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A possible sequence of events or imagined situation used for analysis or planning.',
    examples: [{ english: 'The report uses the expression "a likely scenario" in its analysis.', malay: 'Senario.', chinese: '报告在分析中使用了“可能情景”这一表达。' }], collocations: ['a likely scenario', 'worst-case scenario'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'sector', term: 'sector', normalizedTerm: 'sector', partOfSpeech: ['noun'], ipa: '/sˈɛktə/',
    chineseShort: '行业；部门', chineseExplanation: '表示“行业；部门”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A distinct part of an economy, society, organisation, or field of activity.',
    examples: [{ english: 'The phrase "public sector" is common in formal academic or professional contexts.', malay: 'Sektor.', chinese: '“公共部门”这一表达常见于正式的学术或专业语境。' }], collocations: ['public sector', 'technology sector'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'simulate', term: 'simulate', normalizedTerm: 'simulate', partOfSpeech: ['verb'], ipa: '/sˈɪmjʊlˌeɪt/',
    chineseShort: '模拟；仿真', chineseExplanation: '表示“模拟；仿真”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To imitate a real process, system, or situation for study, testing, or training.',
    examples: [{ english: 'Researchers may encounter the expression "simulate real conditions" in advanced writing.', malay: 'Mensimulasikan.', chinese: '研究者可能会在高级写作中遇到“模拟真实条件”这一表达。' }], collocations: ['simulate real conditions', 'simulate a process'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'statistic', term: 'statistic', normalizedTerm: 'statistic', partOfSpeech: ['noun'], ipa: '/stɐtˈɪstɪk/',
    chineseShort: '统计数据；统计量', chineseExplanation: '表示“统计数据；统计量”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A numerical fact or measure derived from collected data.',
    examples: [{ english: 'The report uses the expression "a key statistic" in its analysis.', malay: 'Statistik.', chinese: '报告在分析中使用了“关键统计数据”这一表达。' }], collocations: ['a key statistic', 'official statistics'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'strategy', term: 'strategy', normalizedTerm: 'strategy', partOfSpeech: ['noun'], ipa: '/stɹˈatədʒi/',
    chineseShort: '策略；战略', chineseExplanation: '表示“策略；战略”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A planned set of actions designed to achieve a long-term or important objective.',
    examples: [{ english: 'The phrase "adopt a strategy" is common in formal academic or professional contexts.', malay: 'Strategi.', chinese: '“采取策略”这一表达常见于正式的学术或专业语境。' }], collocations: ['adopt a strategy', 'long-term strategy'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'subsequent', term: 'subsequent', normalizedTerm: 'subsequent', partOfSpeech: ['adjective'], ipa: '/sˈʌbsɪkwənt/',
    chineseShort: '随后的；后来的', chineseExplanation: '表示“随后的；后来的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Coming after something else in time, order, or sequence.',
    examples: [{ english: 'Researchers may encounter the expression "subsequent analysis" in advanced writing.', malay: 'Berikutnya.', chinese: '研究者可能会在高级写作中遇到“后续分析”这一表达。' }], collocations: ['subsequent analysis', 'subsequent events'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'subsidy', term: 'subsidy', normalizedTerm: 'subsidy', partOfSpeech: ['noun'], ipa: '/sˈʌbsɪdi/',
    chineseShort: '补贴；资助', chineseExplanation: '表示“补贴；资助”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Financial support, usually from a government or institution, intended to reduce costs or encourage activity.',
    examples: [{ english: 'The report uses the expression "government subsidy" in its analysis.', malay: 'Subsidi.', chinese: '报告在分析中使用了“政府补贴”这一表达。' }], collocations: ['government subsidy', 'agricultural subsidies'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'supplement', term: 'supplement', normalizedTerm: 'supplement', partOfSpeech: ['noun', 'verb'], ipa: '/sˈʌplɪmənt/',
    chineseShort: '补充；补充物', chineseExplanation: '表示“补充；补充物”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something added to improve or complete something, or to add extra material or resources.',
    examples: [{ english: 'The phrase "supplement existing data" is common in formal academic or professional contexts.', malay: 'Menambah.', chinese: '“补充现有数据”这一表达常见于正式的学术或专业语境。' }], collocations: ['supplement existing data', 'a useful supplement'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'suspend', term: 'suspend', normalizedTerm: 'suspend', partOfSpeech: ['verb'], ipa: '/səspˈɛnd/',
    chineseShort: '暂停；中止', chineseExplanation: '表示“暂停；中止”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To temporarily stop an activity, process, right, or operation.',
    examples: [{ english: 'Researchers may encounter the expression "suspend operations" in advanced writing.', malay: 'Menggantung.', chinese: '研究者可能会在高级写作中遇到“暂停运营”这一表达。' }], collocations: ['suspend operations', 'suspend a decision'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'sustain', term: 'sustain', normalizedTerm: 'sustain', partOfSpeech: ['verb'], ipa: '/səstˈeɪn/',
    chineseShort: '维持；支撑', chineseExplanation: '表示“维持；支撑”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To keep something continuing over time or support it at a particular level.',
    examples: [{ english: 'The report uses the expression "sustain growth" in its analysis.', malay: 'Mengekalkan.', chinese: '报告在分析中使用了“维持增长”这一表达。' }], collocations: ['sustain growth', 'sustain attention'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'terminate', term: 'terminate', normalizedTerm: 'terminate', partOfSpeech: ['verb'], ipa: '/tˈɜːmɪnˌeɪt/',
    chineseShort: '终止；结束', chineseExplanation: '表示“终止；结束”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To bring an activity, agreement, process, or employment relationship to an end.',
    examples: [{ english: 'The phrase "terminate a contract" is common in formal academic or professional contexts.', malay: 'Menamatkan.', chinese: '“终止合同”这一表达常见于正式的学术或专业语境。' }], collocations: ['terminate a contract', 'terminate the process'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'trace', term: 'trace', normalizedTerm: 'trace', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈeɪs/',
    chineseShort: '追溯；踪迹', chineseExplanation: '表示“追溯；踪迹”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To follow the development, origin, or path of something, or a small remaining sign.',
    examples: [{ english: 'Researchers may encounter the expression "trace the origin" in advanced writing.', malay: 'Menjejaki.', chinese: '研究者可能会在高级写作中遇到“追溯来源”这一表达。' }], collocations: ['trace the origin', 'trace a pattern'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'transfer', term: 'transfer', normalizedTerm: 'transfer', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈansfɜː/',
    chineseShort: '转移；转让', chineseExplanation: '表示“转移；转让”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To move something from one person, place, system, or situation to another.',
    examples: [{ english: 'The report uses the expression "transfer knowledge" in its analysis.', malay: 'Memindahkan.', chinese: '报告在分析中使用了“转移知识”这一表达。' }], collocations: ['transfer knowledge', 'transfer responsibility'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'trigger', term: 'trigger', normalizedTerm: 'trigger', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈɪɡə/',
    chineseShort: '触发；诱因', chineseExplanation: '表示“触发；诱因”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cause an event or process to begin, or the event or factor that causes it.',
    examples: [{ english: 'The phrase "trigger a response" is common in formal academic or professional contexts.', malay: 'Mencetuskan.', chinese: '“触发反应”这一表达常见于正式的学术或专业语境。' }], collocations: ['trigger a response', 'trigger a crisis'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'ultimate', term: 'ultimate', normalizedTerm: 'ultimate', partOfSpeech: ['adjective'], ipa: '/ˈʌltɪmət/',
    chineseShort: '最终的；根本的', chineseExplanation: '表示“最终的；根本的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Being the final, most important, or fundamental result, aim, or principle.',
    examples: [{ english: 'Researchers may encounter the expression "the ultimate objective" in advanced writing.', malay: 'Muktamad.', chinese: '研究者可能会在高级写作中遇到“最终目标”这一表达。' }], collocations: ['the ultimate objective', 'ultimate responsibility'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'undergo', term: 'undergo', normalizedTerm: 'undergo', partOfSpeech: ['verb'], ipa: '/ˌʌndəɡˈəʊ/',
    chineseShort: '经历；经受', chineseExplanation: '表示“经历；经受”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To experience a process, change, treatment, or difficult event.',
    examples: [{ english: 'The report uses the expression "undergo significant change" in its analysis.', malay: 'Mengalami.', chinese: '报告在分析中使用了“经历重大变化”这一表达。' }], collocations: ['undergo significant change', 'undergo evaluation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'utilize', term: 'utilise', normalizedTerm: 'utilise', partOfSpeech: ['verb'], ipa: '/jˈuːtɪlˌaɪz/',
    chineseShort: '利用；使用', chineseExplanation: '表示“利用；使用”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make practical or effective use of something.',
    examples: [{ english: 'The phrase "utilise available resources" is common in formal academic or professional contexts.', malay: 'Menggunakan.', chinese: '“利用可用资源”这一表达常见于正式的学术或专业语境。' }], collocations: ['utilise available resources', 'utilise technology'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'variable', term: 'variable', normalizedTerm: 'variable', partOfSpeech: ['noun', 'adjective'], ipa: '/vˈeəɹɪəbəl/',
    chineseShort: '变量；可变的', chineseExplanation: '表示“变量；可变的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A factor that can change and affect a result, or something subject to change.',
    examples: [{ english: 'Researchers may encounter the expression "control a variable" in advanced writing.', malay: 'Pemboleh ubah.', chinese: '研究者可能会在高级写作中遇到“控制变量”这一表达。' }], collocations: ['control a variable', 'key variable'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'accountability', term: 'accountability', normalizedTerm: 'accountability', partOfSpeech: ['noun'], ipa: '/ɐkˌaʊntəbˈɪlɪti/',
    chineseShort: '责任；问责机制', chineseExplanation: '表示“责任；问责机制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The obligation to explain decisions, accept responsibility, and be answerable for results.',
    examples: [{ english: 'The report uses the expression "public accountability" in its analysis.', malay: 'Kebertanggungjawaban.', chinese: '报告在分析中使用了“公共问责”这一表达。' }], collocations: ['public accountability', 'ensure accountability'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'accrue', term: 'accrue', normalizedTerm: 'accrue', partOfSpeech: ['verb'], ipa: '/ɐkɹˈuː/',
    chineseShort: '累积；逐渐增加', chineseExplanation: '表示“累积；逐渐增加”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To increase or accumulate gradually over time, especially benefits, costs, or interest.',
    examples: [{ english: 'The phrase "accrue benefits" is common in formal academic or professional contexts.', malay: 'Terkumpul.', chinese: '“累积收益”这一表达常见于正式的学术或专业语境。' }], collocations: ['accrue benefits', 'accrue interest'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'acknowledge', term: 'acknowledge', normalizedTerm: 'acknowledge', partOfSpeech: ['verb'], ipa: '/ɐknˈɒlɪdʒ/',
    chineseShort: '承认；确认', chineseExplanation: '表示“承认；确认”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To accept that something is true, valid, or important, or to formally recognise it.',
    examples: [{ english: 'Researchers may encounter the expression "acknowledge a problem" in advanced writing.', malay: 'Mengakui.', chinese: '研究者可能会在高级写作中遇到“承认问题”这一表达。' }], collocations: ['acknowledge a problem', 'acknowledge responsibility'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'acquisition', term: 'acquisition', normalizedTerm: 'acquisition', partOfSpeech: ['noun'], ipa: '/ɐkwɪsˈɪʃən/',
    chineseShort: '获得；收购', chineseExplanation: '表示“获得；收购”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of obtaining knowledge, skills, property, or control of a company.',
    examples: [{ english: 'The report uses the expression "language acquisition" in its analysis.', malay: 'Pemerolehan.', chinese: '报告在分析中使用了“语言习得”这一表达。' }], collocations: ['language acquisition', 'business acquisition'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'adaptation', term: 'adaptation', normalizedTerm: 'adaptation', partOfSpeech: ['noun'], ipa: '/ˌadaptˈeɪʃən/',
    chineseShort: '适应；改编', chineseExplanation: '表示“适应；改编”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A change made to suit new conditions, or a work changed for a different form or purpose.',
    examples: [{ english: 'The phrase "adaptation to change" is common in formal academic or professional contexts.', malay: 'Penyesuaian.', chinese: '“对变化的适应”这一表达常见于正式的学术或专业语境。' }], collocations: ['adaptation to change', 'a film adaptation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'adhere', term: 'adhere', normalizedTerm: 'adhere', partOfSpeech: ['verb'], ipa: '/ɐdhˈiə/',
    chineseShort: '遵守；坚持', chineseExplanation: '表示“遵守；坚持”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To follow a rule, standard, belief, or course of action closely.',
    examples: [{ english: 'Researchers may encounter the expression "adhere to guidelines" in advanced writing.', malay: 'Mematuhi.', chinese: '研究者可能会在高级写作中遇到“遵守准则”这一表达。' }], collocations: ['adhere to guidelines', 'adhere to principles'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'adherence', term: 'adherence', normalizedTerm: 'adherence', partOfSpeech: ['noun'], ipa: '/ɐdhˈiəɹəns/',
    chineseShort: '遵守；坚持', chineseExplanation: '表示“遵守；坚持”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of following a rule, standard, belief, or prescribed practice consistently.',
    examples: [{ english: 'The report uses the expression "strict adherence" in its analysis.', malay: 'Pematuhan.', chinese: '报告在分析中使用了“严格遵守”这一表达。' }], collocations: ['strict adherence', 'adherence to policy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'administer', term: 'administer', normalizedTerm: 'administer', partOfSpeech: ['verb'], ipa: '/ɐdmˈɪnɪstə/',
    chineseShort: '管理；实施', chineseExplanation: '表示“管理；实施”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To manage the operation of an organisation, system, policy, test, or treatment.',
    examples: [{ english: 'The phrase "administer a programme" is common in formal academic or professional contexts.', malay: 'Mentadbir.', chinese: '“实施项目”这一表达常见于正式的学术或专业语境。' }], collocations: ['administer a programme', 'administer a test'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'administrative', term: 'administrative', normalizedTerm: 'administrative', partOfSpeech: ['adjective'], ipa: '/ɐdmˈɪnɪstɹətˌɪv/',
    chineseShort: '行政的；管理的', chineseExplanation: '表示“行政的；管理的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to the organisation, management, or routine operation of an institution.',
    examples: [{ english: 'Researchers may encounter the expression "administrative procedures" in advanced writing.', malay: 'Pentadbiran.', chinese: '研究者可能会在高级写作中遇到“行政程序”这一表达。' }], collocations: ['administrative procedures', 'administrative burden'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'affiliation', term: 'affiliation', normalizedTerm: 'affiliation', partOfSpeech: ['noun'], ipa: '/ɐfˌɪlɪˈeɪʃən/',
    chineseShort: '隶属；关联', chineseExplanation: '表示“隶属；关联”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A formal or informal connection with an organisation, group, institution, or cause.',
    examples: [{ english: 'The report uses the expression "institutional affiliation" in its analysis.', malay: 'Gabungan.', chinese: '报告在分析中使用了“机构隶属关系”这一表达。' }], collocations: ['institutional affiliation', 'political affiliation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'alienate', term: 'alienate', normalizedTerm: 'alienate', partOfSpeech: ['verb'], ipa: '/ˈeɪliənˌeɪt/',
    chineseShort: '疏远；使不满', chineseExplanation: '表示“疏远；使不满”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make a person or group feel isolated, unfriendly, or no longer supportive.',
    examples: [{ english: 'The phrase "alienate customers" is common in formal academic or professional contexts.', malay: 'Menjauhkan.', chinese: '“疏远客户”这一表达常见于正式的学术或专业语境。' }], collocations: ['alienate customers', 'alienate voters'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'alliance', term: 'alliance', normalizedTerm: 'alliance', partOfSpeech: ['noun'], ipa: '/ɐlˈaɪəns/',
    chineseShort: '联盟；同盟', chineseExplanation: '表示“联盟；同盟”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A formal or strategic relationship in which parties cooperate for shared interests.',
    examples: [{ english: 'Researchers may encounter the expression "strategic alliance" in advanced writing.', malay: 'Pakatan.', chinese: '研究者可能会在高级写作中遇到“战略联盟”这一表达。' }], collocations: ['strategic alliance', 'form an alliance'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'amendment', term: 'amendment', normalizedTerm: 'amendment', partOfSpeech: ['noun'], ipa: '/ɐmˈɛndmənt/',
    chineseShort: '修正；修正案', chineseExplanation: '表示“修正；修正案”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A formal change or addition made to a law, agreement, document, or proposal.',
    examples: [{ english: 'The report uses the expression "constitutional amendment" in its analysis.', malay: 'Pindaan.', chinese: '报告在分析中使用了“宪法修正案”这一表达。' }], collocations: ['constitutional amendment', 'propose an amendment'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'analytical', term: 'analytical', normalizedTerm: 'analytical', partOfSpeech: ['adjective'], ipa: '/ˌanɐlˈɪtɪkəl/',
    chineseShort: '分析的；善于分析的', chineseExplanation: '表示“分析的；善于分析的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Using careful reasoning and systematic examination to understand complex information or problems.',
    examples: [{ english: 'The phrase "analytical skills" is common in formal academic or professional contexts.', malay: 'Analitis.', chinese: '“分析能力”这一表达常见于正式的学术或专业语境。' }], collocations: ['analytical skills', 'analytical approach'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'anonymous', term: 'anonymous', normalizedTerm: 'anonymous', partOfSpeech: ['adjective'], ipa: '/ɐnˈɒnəməs/',
    chineseShort: '匿名的；不具名的', chineseExplanation: '表示“匿名的；不具名的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having a name or identity that is not revealed or publicly known.',
    examples: [{ english: 'Researchers may encounter the expression "anonymous survey" in advanced writing.', malay: 'Tanpa nama.', chinese: '研究者可能会在高级写作中遇到“匿名调查”这一表达。' }], collocations: ['anonymous survey', 'anonymous source'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'apparatus', term: 'apparatus', normalizedTerm: 'apparatus', partOfSpeech: ['noun'], ipa: '/ˌapəɹˈeɪtəs/',
    chineseShort: '装置；机构体系', chineseExplanation: '表示“装置；机构体系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A set of equipment used for a purpose, or an organised system serving a function.',
    examples: [{ english: 'The report uses the expression "laboratory apparatus" in its analysis.', malay: 'Radas.', chinese: '报告在分析中使用了“实验室设备”这一表达。' }], collocations: ['laboratory apparatus', 'state apparatus'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'applicable', term: 'applicable', normalizedTerm: 'applicable', partOfSpeech: ['adjective'], ipa: '/ɐplˈɪkəbəl/',
    chineseShort: '适用的；可应用的', chineseExplanation: '表示“适用的；可应用的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relevant or suitable for use in a particular situation, case, or context.',
    examples: [{ english: 'The phrase "applicable rules" is common in formal academic or professional contexts.', malay: 'Terpakai.', chinese: '“适用规则”这一表达常见于正式的学术或专业语境。' }], collocations: ['applicable rules', 'directly applicable'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'appraise', term: 'appraise', normalizedTerm: 'appraise', partOfSpeech: ['verb'], ipa: '/ɐpɹˈeɪz/',
    chineseShort: '评估；评价', chineseExplanation: '表示“评估；评价”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To assess the value, quality, performance, or condition of something carefully.',
    examples: [{ english: 'Researchers may encounter the expression "appraise performance" in advanced writing.', malay: 'Menilai.', chinese: '研究者可能会在高级写作中遇到“评估表现”这一表达。' }], collocations: ['appraise performance', 'appraise an asset'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'archive', term: 'archive', normalizedTerm: 'archive', partOfSpeech: ['noun', 'verb'], ipa: '/ˈɑːkaɪv/',
    chineseShort: '档案；归档', chineseExplanation: '表示“档案；归档”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A collection of historical records, or to store records systematically for future reference.',
    examples: [{ english: 'The report uses the expression "archive documents" in its analysis.', malay: 'Mengarkibkan.', chinese: '报告在分析中使用了“归档文件”这一表达。' }], collocations: ['archive documents', 'digital archive'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'array', term: 'array', normalizedTerm: 'array', partOfSpeech: ['noun', 'verb'], ipa: '/ɐɹˈeɪ/',
    chineseShort: '一系列；排列', chineseExplanation: '表示“一系列；排列”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A large or varied collection of things, or to arrange items in an ordered way.',
    examples: [{ english: 'The phrase "a wide array" is common in formal academic or professional contexts.', malay: 'Pelbagai.', chinese: '“广泛的一系列”这一表达常见于正式的学术或专业语境。' }], collocations: ['a wide array', 'array the evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'assess', term: 'assess', normalizedTerm: 'assess', partOfSpeech: ['verb'], ipa: '/ɐsˈɛs/',
    chineseShort: '评估；判断', chineseExplanation: '表示“评估；判断”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To evaluate the nature, quality, importance, or likely effect of something.',
    examples: [{ english: 'Researchers may encounter the expression "assess the impact" in advanced writing.', malay: 'Menilai.', chinese: '研究者可能会在高级写作中遇到“评估影响”这一表达。' }], collocations: ['assess the impact', 'assess performance'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'assessment', term: 'assessment', normalizedTerm: 'assessment', partOfSpeech: ['noun'], ipa: '/ɐsˈɛsmənt/',
    chineseShort: '评估；评价', chineseExplanation: '表示“评估；评价”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A systematic evaluation of quality, ability, risk, performance, or significance.',
    examples: [{ english: 'The report uses the expression "risk assessment" in its analysis.', malay: 'Penilaian.', chinese: '报告在分析中使用了“风险评估”这一表达。' }], collocations: ['risk assessment', 'comprehensive assessment'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'assumption', term: 'assumption', normalizedTerm: 'assumption', partOfSpeech: ['noun'], ipa: '/ɐsˈʌmpʃən/',
    chineseShort: '假设；设想', chineseExplanation: '表示“假设；设想”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A belief or idea accepted as true without complete proof, often used as a basis for reasoning.',
    examples: [{ english: 'The phrase "underlying assumption" is common in formal academic or professional contexts.', malay: 'Andaian.', chinese: '“潜在假设”这一表达常见于正式的学术或专业语境。' }], collocations: ['underlying assumption', 'challenge an assumption'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'authoritative', term: 'authoritative', normalizedTerm: 'authoritative', partOfSpeech: ['adjective'], ipa: '/ɔːθˈɒɹɪtətˌɪv/',
    chineseShort: '权威的；可信的', chineseExplanation: '表示“权威的；可信的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to be trusted as accurate or reliable because of expertise, evidence, or official status.',
    examples: [{ english: 'Researchers may encounter the expression "authoritative source" in advanced writing.', malay: 'Berwibawa.', chinese: '研究者可能会在高级写作中遇到“权威来源”这一表达。' }], collocations: ['authoritative source', 'authoritative guidance'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'authorize', term: 'authorise', normalizedTerm: 'authorise', partOfSpeech: ['verb'], ipa: '/ˈɔːθəɹˌaɪz/',
    chineseShort: '授权；批准', chineseExplanation: '表示“授权；批准”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To give official permission, power, or legal authority for an action.',
    examples: [{ english: 'The report uses the expression "authorise access" in its analysis.', malay: 'Membenarkan.', chinese: '报告在分析中使用了“授权访问”这一表达。' }], collocations: ['authorise access', 'authorise payment'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'bias', term: 'bias', normalizedTerm: 'bias', partOfSpeech: ['noun', 'verb'], ipa: '/bˈaɪəs/',
    chineseShort: '偏见；偏向', chineseExplanation: '表示“偏见；偏向”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A systematic preference or distortion that unfairly influences judgement, data, or outcomes.',
    examples: [{ english: 'The phrase "reduce bias" is common in formal academic or professional contexts.', malay: 'Berat sebelah.', chinese: '“减少偏差”这一表达常见于正式的学术或专业语境。' }], collocations: ['reduce bias', 'selection bias'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'binding', term: 'binding', normalizedTerm: 'binding', partOfSpeech: ['adjective'], ipa: '/bˈaɪndɪŋ/',
    chineseShort: '有约束力的', chineseExplanation: '表示“有约束力的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Imposing a legal, contractual, or formal obligation that must be followed.',
    examples: [{ english: 'Researchers may encounter the expression "binding agreement" in advanced writing.', malay: 'Mengikat.', chinese: '研究者可能会在高级写作中遇到“有约束力的协议”这一表达。' }], collocations: ['binding agreement', 'legally binding'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'bureaucracy', term: 'bureaucracy', normalizedTerm: 'bureaucracy', partOfSpeech: ['noun'], ipa: '/bjʊəɹˈɒkɹəsi/',
    chineseShort: '官僚体系；行政机构', chineseExplanation: '表示“官僚体系；行政机构”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A system of administration based on formal rules, procedures, and hierarchical authority.',
    examples: [{ english: 'The report uses the expression "government bureaucracy" in its analysis.', malay: 'Birokrasi.', chinese: '报告在分析中使用了“政府官僚体系”这一表达。' }], collocations: ['government bureaucracy', 'reduce bureaucracy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'capacity', term: 'capacity', normalizedTerm: 'capacity', partOfSpeech: ['noun'], ipa: '/kəpˈasɪti/',
    chineseShort: '能力；容量', chineseExplanation: '表示“能力；容量”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The maximum ability, amount, or potential that a person, system, or organisation can provide or contain.',
    examples: [{ english: 'The phrase "institutional capacity" is common in formal academic or professional contexts.', malay: 'Keupayaan.', chinese: '“机构能力”这一表达常见于正式的学术或专业语境。' }], collocations: ['institutional capacity', 'production capacity'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'characterize', term: 'characterise', normalizedTerm: 'characterise', partOfSpeech: ['verb'], ipa: '/kˈaɹɪktəɹˌaɪz/',
    chineseShort: '描述…特征；以…为特点', chineseExplanation: '表示“描述…特征；以…为特点”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To describe the distinctive qualities of something or to be typical of it.',
    examples: [{ english: 'Researchers may encounter the expression "characterise the trend" in advanced writing.', malay: 'Mencirikan.', chinese: '研究者可能会在高级写作中遇到“描述趋势特征”这一表达。' }], collocations: ['characterise the trend', 'characterise a period'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'clarify', term: 'clarify', normalizedTerm: 'clarify', partOfSpeech: ['verb'], ipa: '/klˈaɹɪfˌaɪ/',
    chineseShort: '澄清；阐明', chineseExplanation: '表示“澄清；阐明”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make an idea, statement, situation, or requirement easier to understand.',
    examples: [{ english: 'The report uses the expression "clarify the issue" in its analysis.', malay: 'Menjelaskan.', chinese: '报告在分析中使用了“澄清问题”这一表达。' }], collocations: ['clarify the issue', 'clarify expectations'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'cohesion', term: 'cohesion', normalizedTerm: 'cohesion', partOfSpeech: ['noun'], ipa: '/kəʊhˈiːʒən/',
    chineseShort: '凝聚力；连贯性', chineseExplanation: '表示“凝聚力；连贯性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of forming a unified, connected whole, especially within a group or text.',
    examples: [{ english: 'The phrase "social cohesion" is common in formal academic or professional contexts.', malay: 'Kesepaduan.', chinese: '“社会凝聚力”这一表达常见于正式的学术或专业语境。' }], collocations: ['social cohesion', 'textual cohesion'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'collaborate', term: 'collaborate', normalizedTerm: 'collaborate', partOfSpeech: ['verb'], ipa: '/kəlˈabəɹˌeɪt/',
    chineseShort: '合作；协作', chineseExplanation: '表示“合作；协作”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To work jointly with others in order to achieve a shared objective or produce something.',
    examples: [{ english: 'Researchers may encounter the expression "collaborate on research" in advanced writing.', malay: 'Bekerjasama.', chinese: '研究者可能会在高级写作中遇到“合作开展研究”这一表达。' }], collocations: ['collaborate on research', 'collaborate with partners'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'collaboration', term: 'collaboration', normalizedTerm: 'collaboration', partOfSpeech: ['noun'], ipa: '/kəlˌabəɹˈeɪʃən/',
    chineseShort: '合作；协作', chineseExplanation: '表示“合作；协作”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of working jointly with others towards a common goal or output.',
    examples: [{ english: 'The report uses the expression "international collaboration" in its analysis.', malay: 'Kerjasama.', chinese: '报告在分析中使用了“国际合作”这一表达。' }], collocations: ['international collaboration', 'close collaboration'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'commodity', term: 'commodity', normalizedTerm: 'commodity', partOfSpeech: ['noun'], ipa: '/kəmˈɒdɪti/',
    chineseShort: '商品；大宗商品', chineseExplanation: '表示“商品；大宗商品”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A raw material or standardised product that can be bought, sold, or traded.',
    examples: [{ english: 'The phrase "commodity prices" is common in formal academic or professional contexts.', malay: 'Komoditi.', chinese: '“商品价格”这一表达常见于正式的学术或专业语境。' }], collocations: ['commodity prices', 'agricultural commodity'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'compatibility', term: 'compatibility', normalizedTerm: 'compatibility', partOfSpeech: ['noun'], ipa: '/kəmpˌatəbˈɪlɪti/',
    chineseShort: '兼容性；相容性', chineseExplanation: '表示“兼容性；相容性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability of people, systems, ideas, or technologies to work or exist together successfully.',
    examples: [{ english: 'Researchers may encounter the expression "system compatibility" in advanced writing.', malay: 'Keserasian.', chinese: '研究者可能会在高级写作中遇到“系统兼容性”这一表达。' }], collocations: ['system compatibility', 'compatibility issues'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'compatible', term: 'compatible', normalizedTerm: 'compatible', partOfSpeech: ['adjective'], ipa: '/kəmpˈatəbəl/',
    chineseShort: '兼容的；相容的', chineseExplanation: '表示“兼容的；相容的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to exist, operate, or be used together without serious conflict or difficulty.',
    examples: [{ english: 'The report uses the expression "compatible systems" in its analysis.', malay: 'Serasi.', chinese: '报告在分析中使用了“兼容系统”这一表达。' }], collocations: ['compatible systems', 'compatible with standards'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'compliance', term: 'compliance', normalizedTerm: 'compliance', partOfSpeech: ['noun'], ipa: '/kəmplˈaɪəns/',
    chineseShort: '遵从；合规', chineseExplanation: '表示“遵从；合规”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of obeying a law, rule, standard, request, or formal requirement.',
    examples: [{ english: 'The phrase "regulatory compliance" is common in formal academic or professional contexts.', malay: 'Pematuhan.', chinese: '“法规合规”这一表达常见于正式的学术或专业语境。' }], collocations: ['regulatory compliance', 'ensure compliance'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'complication', term: 'complication', normalizedTerm: 'complication', partOfSpeech: ['noun'], ipa: '/kˌɒmplɪkˈeɪʃən/',
    chineseShort: '复杂因素；并发问题', chineseExplanation: '表示“复杂因素；并发问题”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A factor that makes a situation more difficult, or an additional problem that develops.',
    examples: [{ english: 'Researchers may encounter the expression "potential complication" in advanced writing.', malay: 'Kerumitan.', chinese: '研究者可能会在高级写作中遇到“潜在复杂因素”这一表达。' }], collocations: ['potential complication', 'avoid complications'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'composition', term: 'composition', normalizedTerm: 'composition', partOfSpeech: ['noun'], ipa: '/kˌɒmpəzˈɪʃən/',
    chineseShort: '构成；组成', chineseExplanation: '表示“构成；组成”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The way in which parts are combined to form a whole, or a work created from those parts.',
    examples: [{ english: 'The report uses the expression "demographic composition" in its analysis.', malay: 'Komposisi.', chinese: '报告在分析中使用了“人口构成”这一表达。' }], collocations: ['demographic composition', 'chemical composition'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'compromise', term: 'compromise', normalizedTerm: 'compromise', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɒmpɹəmˌaɪz/',
    chineseShort: '妥协；损害', chineseExplanation: '表示“妥协；损害”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An agreement based on mutual concessions, or to weaken the quality, security, or integrity of something.',
    examples: [{ english: 'The phrase "compromise security" is common in formal academic or professional contexts.', malay: 'Menjejaskan.', chinese: '“损害安全”这一表达常见于正式的学术或专业语境。' }], collocations: ['compromise security', 'reach a compromise'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'conceive', term: 'conceive', normalizedTerm: 'conceive', partOfSpeech: ['verb'], ipa: '/kənsˈiːv/',
    chineseShort: '构想；设想', chineseExplanation: '表示“构想；设想”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To form an idea, plan, possibility, or concept in the mind.',
    examples: [{ english: 'Researchers may encounter the expression "conceive a strategy" in advanced writing.', malay: 'Memikirkan.', chinese: '研究者可能会在高级写作中遇到“构想策略”这一表达。' }], collocations: ['conceive a strategy', 'conceive of an alternative'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'conception', term: 'conception', normalizedTerm: 'conception', partOfSpeech: ['noun'], ipa: '/kənsˈɛpʃən/',
    chineseShort: '概念；构想', chineseExplanation: '表示“概念；构想”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An idea, understanding, or mental model of what something is or how it works.',
    examples: [{ english: 'The report uses the expression "a broad conception" in its analysis.', malay: 'Gagasan atau pemahaman umum tentang sesuatu.', chinese: '报告在分析中使用了“广义概念”这一表达。' }], collocations: ['a broad conception', 'conception of justice'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'confidential', term: 'confidential', normalizedTerm: 'confidential', partOfSpeech: ['adjective'], ipa: '/kˌɒnfɪdˈɛnʃəl/',
    chineseShort: '保密的；机密的', chineseExplanation: '表示“保密的；机密的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Intended to be kept private and disclosed only to authorised people.',
    examples: [{ english: 'The phrase "confidential information" is common in formal academic or professional contexts.', malay: 'Sulit.', chinese: '“机密信息”这一表达常见于正式的学术或专业语境。' }], collocations: ['confidential information', 'confidential document'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'confidentiality', term: 'confidentiality', normalizedTerm: 'confidentiality', partOfSpeech: ['noun'], ipa: '/kˌɒnfɪdˈɛnʃɪˈalɪti/',
    chineseShort: '保密性；机密性', chineseExplanation: '表示“保密性；机密性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The principle or condition of keeping sensitive information private and protected from unauthorised disclosure.',
    examples: [{ english: 'Researchers may encounter the expression "maintain confidentiality" in advanced writing.', malay: 'Kerahsiaan.', chinese: '研究者可能会在高级写作中遇到“保持机密性”这一表达。' }], collocations: ['maintain confidentiality', 'patient confidentiality'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'conflict', term: 'conflict', normalizedTerm: 'conflict', partOfSpeech: ['noun', 'verb'], ipa: '/kˈɒnflɪkt/',
    chineseShort: '冲突；矛盾', chineseExplanation: '表示“冲突；矛盾”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A serious disagreement or incompatibility, or to be inconsistent with another demand, rule, or interest.',
    examples: [{ english: 'The report uses the expression "conflict with policy" in its analysis.', malay: 'Bercanggah.', chinese: '报告在分析中使用了“与政策冲突”这一表达。' }], collocations: ['conflict with policy', 'resolve a conflict'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'conformity', term: 'conformity', normalizedTerm: 'conformity', partOfSpeech: ['noun'], ipa: '/kənfˈɔːmɪti/',
    chineseShort: '一致；遵从', chineseExplanation: '表示“一致；遵从”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Behaviour or conditions that match accepted rules, standards, expectations, or social norms.',
    examples: [{ english: 'The phrase "social conformity" is common in formal academic or professional contexts.', malay: 'Kepatuhan.', chinese: '“社会从众”这一表达常见于正式的学术或专业语境。' }], collocations: ['social conformity', 'conformity with standards'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'consequence', term: 'consequence', normalizedTerm: 'consequence', partOfSpeech: ['noun'], ipa: '/kˈɒnsɪkwəns/',
    chineseShort: '后果；结果', chineseExplanation: '表示“后果；结果”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A result or effect that follows from an action, decision, event, or condition.',
    examples: [{ english: 'Researchers may encounter the expression "long-term consequence" in advanced writing.', malay: 'Akibat.', chinese: '研究者可能会在高级写作中遇到“长期后果”这一表达。' }], collocations: ['long-term consequence', 'unintended consequences'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'consistency', term: 'consistency', normalizedTerm: 'consistency', partOfSpeech: ['noun'], ipa: '/kənsˈɪstənsi/',
    chineseShort: '一致性；连贯性', chineseExplanation: '表示“一致性；连贯性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of remaining stable, compatible, or logically uniform over time or across situations.',
    examples: [{ english: 'The report uses the expression "maintain consistency" in its analysis.', malay: 'Ketekalan.', chinese: '报告在分析中使用了“保持一致性”这一表达。' }], collocations: ['maintain consistency', 'internal consistency'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'consultation', term: 'consultation', normalizedTerm: 'consultation', partOfSpeech: ['noun'], ipa: '/kɒnsəltˈeɪʃən/',
    chineseShort: '咨询；磋商', chineseExplanation: '表示“咨询；磋商”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A formal process of seeking advice, information, or views before making a decision.',
    examples: [{ english: 'The phrase "public consultation" is common in formal academic or professional contexts.', malay: 'Perundingan.', chinese: '“公众咨询”这一表达常见于正式的学术或专业语境。' }], collocations: ['public consultation', 'consultation process'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'contemporary', term: 'contemporary', normalizedTerm: 'contemporary', partOfSpeech: ['adjective', 'noun'], ipa: '/kəntˈɛmpəɹəɹi/',
    chineseShort: '当代的；同时代的人', chineseExplanation: '表示“当代的；同时代的人”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Belonging to the present period, or a person living at the same time as another.',
    examples: [{ english: 'Researchers may encounter the expression "contemporary society" in advanced writing.', malay: 'Kontemporari.', chinese: '研究者可能会在高级写作中遇到“当代社会”这一表达。' }], collocations: ['contemporary society', 'contemporary debate'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'contradiction', term: 'contradiction', normalizedTerm: 'contradiction', partOfSpeech: ['noun'], ipa: '/kˌɒntɹədˈɪkʃən/',
    chineseShort: '矛盾；不一致', chineseExplanation: '表示“矛盾；不一致”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A situation in which statements, facts, principles, or actions are mutually inconsistent.',
    examples: [{ english: 'The report uses the expression "apparent contradiction" in its analysis.', malay: 'Percanggahan.', chinese: '报告在分析中使用了“表面矛盾”这一表达。' }], collocations: ['apparent contradiction', 'resolve a contradiction'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'conviction', term: 'conviction', normalizedTerm: 'conviction', partOfSpeech: ['noun'], ipa: '/kənvˈɪkʃən/',
    chineseShort: '坚定信念；定罪', chineseExplanation: '表示“坚定信念；定罪”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A strongly held belief, or a formal finding by a court that someone is guilty.',
    examples: [{ english: 'The phrase "deep conviction" is common in formal academic or professional contexts.', malay: 'Keyakinan.', chinese: '“坚定信念”这一表达常见于正式的学术或专业语境。' }], collocations: ['deep conviction', 'criminal conviction'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'coordinate', term: 'coordinate', normalizedTerm: 'coordinate', partOfSpeech: ['verb'], ipa: '/kəʊˈɔːdɪnət/',
    chineseShort: '协调；统筹', chineseExplanation: '表示“协调；统筹”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To organise people, activities, or resources so that they work together effectively.',
    examples: [{ english: 'Researchers may encounter the expression "coordinate efforts" in advanced writing.', malay: 'Menyelaras.', chinese: '研究者可能会在高级写作中遇到“协调努力”这一表达。' }], collocations: ['coordinate efforts', 'coordinate activities'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'cooperation', term: 'cooperation', normalizedTerm: 'cooperation', partOfSpeech: ['noun'], ipa: '/kəʊˈɒpəɹˈeɪʃən/',
    chineseShort: '合作；协作', chineseExplanation: '表示“合作；协作”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of working together or providing assistance in pursuit of a shared objective.',
    examples: [{ english: 'The report uses the expression "international cooperation" in its analysis.', malay: 'Kerjasama.', chinese: '报告在分析中使用了“国际合作”这一表达。' }], collocations: ['international cooperation', 'close cooperation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'counteract', term: 'counteract', normalizedTerm: 'counteract', partOfSpeech: ['verb'], ipa: '/kˌaʊntəɹˈakt/',
    chineseShort: '抵消；对抗', chineseExplanation: '表示“抵消；对抗”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To reduce, neutralise, or oppose the effect of something undesirable.',
    examples: [{ english: 'The phrase "counteract the effects" is common in formal academic or professional contexts.', malay: 'Mengatasi.', chinese: '“抵消影响”这一表达常见于正式的学术或专业语境。' }], collocations: ['counteract the effects', 'counteract inflation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'counterpart', term: 'counterpart', normalizedTerm: 'counterpart', partOfSpeech: ['noun'], ipa: '/kˈaʊntəpˌɑːt/',
    chineseShort: '对应的人或事物', chineseExplanation: '表示“对应的人或事物”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A person or thing that has an equivalent role, function, or position in another place or system.',
    examples: [{ english: 'Researchers may encounter the expression "foreign counterpart" in advanced writing.', malay: 'Rakan sejawat.', chinese: '研究者可能会在高级写作中遇到“外国对应官员”这一表达。' }], collocations: ['foreign counterpart', 'civilian counterpart'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'cultivate', term: 'cultivate', normalizedTerm: 'cultivate', partOfSpeech: ['verb'], ipa: '/kˈʌltɪvˌeɪt/',
    chineseShort: '培养；培育', chineseExplanation: '表示“培养；培育”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To develop a skill, quality, relationship, or attitude deliberately over time.',
    examples: [{ english: 'The report uses the expression "cultivate trust" in its analysis.', malay: 'Memupuk.', chinese: '报告在分析中使用了“培养信任”这一表达。' }], collocations: ['cultivate trust', 'cultivate expertise'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'decentralize', term: 'decentralise', normalizedTerm: 'decentralise', partOfSpeech: ['verb'], ipa: '/dɪsˈɛntɹəlˌaɪz/',
    chineseShort: '分散权力；去中心化', chineseExplanation: '表示“分散权力；去中心化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To distribute authority, control, or operations away from a single central body.',
    examples: [{ english: 'The phrase "decentralise decision-making" is common in formal academic or professional contexts.', malay: 'Mengagihkan kuasa.', chinese: '“分散决策权”这一表达常见于正式的学术或专业语境。' }], collocations: ['decentralise decision-making', 'decentralise services'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'declaration', term: 'declaration', normalizedTerm: 'declaration', partOfSpeech: ['noun'], ipa: '/dˌɛkləɹˈeɪʃən/',
    chineseShort: '声明；申报', chineseExplanation: '表示“声明；申报”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An official or explicit statement announcing a fact, intention, position, or legal status.',
    examples: [{ english: 'Researchers may encounter the expression "formal declaration" in advanced writing.', malay: 'Pengisytiharan.', chinese: '研究者可能会在高级写作中遇到“正式声明”这一表达。' }], collocations: ['formal declaration', 'declaration of intent'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'delegation', term: 'delegation', normalizedTerm: 'delegation', partOfSpeech: ['noun'], ipa: '/dˌɛlɪɡˈeɪʃən/',
    chineseShort: '代表团；授权', chineseExplanation: '表示“代表团；授权”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A group chosen to represent others, or the act of assigning authority or responsibility to someone else.',
    examples: [{ english: 'The report uses the expression "delegation of authority" in its analysis.', malay: 'Perwakilan.', chinese: '报告在分析中使用了“授权”这一表达。' }], collocations: ['delegation of authority', 'official delegation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'demographic', term: 'demographic', normalizedTerm: 'demographic', partOfSpeech: ['adjective', 'noun'], ipa: '/dˌɛməɡɹˈafɪk/',
    chineseShort: '人口统计的；人口群体', chineseExplanation: '表示“人口统计的；人口群体”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to the statistical characteristics of populations, or a population group defined by such characteristics.',
    examples: [{ english: 'The phrase "demographic change" is common in formal academic or professional contexts.', malay: 'Demografi.', chinese: '“人口结构变化”这一表达常见于正式的学术或专业语境。' }], collocations: ['demographic change', 'key demographic'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'dependency', term: 'dependency', normalizedTerm: 'dependency', partOfSpeech: ['noun'], ipa: '/dɪpˈɛndənsi/',
    chineseShort: '依赖；从属', chineseExplanation: '表示“依赖；从属”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A state in which one person, system, or variable relies heavily on another.',
    examples: [{ english: 'Researchers may encounter the expression "economic dependency" in advanced writing.', malay: 'Kebergantungan.', chinese: '研究者可能会在高级写作中遇到“经济依赖”这一表达。' }], collocations: ['economic dependency', 'dependency on imports'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'designate', term: 'designate', normalizedTerm: 'designate', partOfSpeech: ['verb'], ipa: '/dˈɛzɪɡnˌeɪt/',
    chineseShort: '指定；任命', chineseExplanation: '表示“指定；任命”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To officially choose, name, or identify someone or something for a particular role or purpose.',
    examples: [{ english: 'The report uses the expression "designate an authority" in its analysis.', malay: 'Menetapkan.', chinese: '报告在分析中使用了“指定主管机构”这一表达。' }], collocations: ['designate an authority', 'designate an area'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'destabilize', term: 'destabilise', normalizedTerm: 'destabilise', partOfSpeech: ['verb'], ipa: '/diːstˈeɪbɪlˌaɪz/',
    chineseShort: '使不稳定；破坏稳定', chineseExplanation: '表示“使不稳定；破坏稳定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make a system, institution, market, or situation less stable and more likely to fail or change suddenly.',
    examples: [{ english: 'The phrase "destabilise the economy" is common in formal academic or professional contexts.', malay: 'Menggugat kestabilan.', chinese: '“破坏经济稳定”这一表达常见于正式的学术或专业语境。' }], collocations: ['destabilise the economy', 'destabilise a region'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'diagnose', term: 'diagnose', normalizedTerm: 'diagnose', partOfSpeech: ['verb'], ipa: '/dˌaɪəɡnˈəʊz/',
    chineseShort: '诊断；判断原因', chineseExplanation: '表示“诊断；判断原因”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To identify the nature or cause of a problem, condition, or failure through systematic examination.',
    examples: [{ english: 'Researchers may encounter the expression "diagnose the problem" in advanced writing.', malay: 'Mendiagnosis.', chinese: '研究者可能会在高级写作中遇到“诊断问题”这一表达。' }], collocations: ['diagnose the problem', 'diagnose a condition'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'diagnostic', term: 'diagnostic', normalizedTerm: 'diagnostic', partOfSpeech: ['adjective', 'noun'], ipa: '/dˌaɪəɡnˈɒstɪk/',
    chineseShort: '诊断的；诊断工具', chineseExplanation: '表示“诊断的；诊断工具”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to the identification of a problem or condition, or a method used for that purpose.',
    examples: [{ english: 'The report uses the expression "diagnostic tool" in its analysis.', malay: 'Diagnostik.', chinese: '报告在分析中使用了“诊断工具”这一表达。' }], collocations: ['diagnostic tool', 'diagnostic assessment'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'disclose', term: 'disclose', normalizedTerm: 'disclose', partOfSpeech: ['verb'], ipa: '/dɪsklˈəʊz/',
    chineseShort: '披露；透露', chineseExplanation: '表示“披露；透露”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make information known, especially information that was previously private, hidden, or confidential.',
    examples: [{ english: 'The phrase "disclose information" is common in formal academic or professional contexts.', malay: 'Mendedahkan.', chinese: '“披露信息”这一表达常见于正式的学术或专业语境。' }], collocations: ['disclose information', 'disclose a conflict'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'disclosure', term: 'disclosure', normalizedTerm: 'disclosure', partOfSpeech: ['noun'], ipa: '/dɪsklˈəʊʒə/',
    chineseShort: '披露；公开', chineseExplanation: '表示“披露；公开”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of revealing information that was previously private, hidden, or not publicly known.',
    examples: [{ english: 'Researchers may encounter the expression "full disclosure" in advanced writing.', malay: 'Pendedahan.', chinese: '研究者可能会在高级写作中遇到“完全披露”这一表达。' }], collocations: ['full disclosure', 'financial disclosure'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'disregard', term: 'disregard', normalizedTerm: 'disregard', partOfSpeech: ['verb', 'noun'], ipa: '/dˌɪsɹɪɡˈɑːd/',
    chineseShort: '忽视；不理会', chineseExplanation: '表示“忽视；不理会”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To ignore or pay insufficient attention to a rule, fact, risk, or consideration.',
    examples: [{ english: 'The report uses the expression "disregard the evidence" in its analysis.', malay: 'Mengabaikan.', chinese: '报告在分析中使用了“忽视证据”这一表达。' }], collocations: ['disregard the evidence', 'disregard safety rules'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'dismantle', term: 'dismantle', normalizedTerm: 'dismantle', partOfSpeech: ['verb'], ipa: '/dɪsmˈantəl/',
    chineseShort: '拆除；废除', chineseExplanation: '表示“拆除；废除”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To take a structure, system, or organisation apart, physically or institutionally.',
    examples: [{ english: 'The phrase "dismantle a system" is common in formal academic or professional contexts.', malay: 'Membongkar.', chinese: '“废除一个体系”这一表达常见于正式的学术或专业语境。' }], collocations: ['dismantle a system', 'dismantle equipment'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'displace', term: 'displace', normalizedTerm: 'displace', partOfSpeech: ['verb'], ipa: '/dɪsplˈeɪs/',
    chineseShort: '取代；迫使迁移', chineseExplanation: '表示“取代；迫使迁移”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To replace something from its position or force people to leave their usual place of residence.',
    examples: [{ english: 'Researchers may encounter the expression "displace workers" in advanced writing.', malay: 'Menggantikan.', chinese: '研究者可能会在高级写作中遇到“取代工人岗位”这一表达。' }], collocations: ['displace workers', 'displace communities'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'disruption', term: 'disruption', normalizedTerm: 'disruption', partOfSpeech: ['noun'], ipa: '/dɪsɹˈʌpʃən/',
    chineseShort: '中断；扰乱', chineseExplanation: '表示“中断；扰乱”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A disturbance that interrupts normal activity, operation, supply, or established patterns.',
    examples: [{ english: 'The report uses the expression "major disruption" in its analysis.', malay: 'Gangguan.', chinese: '报告在分析中使用了“重大中断”这一表达。' }], collocations: ['major disruption', 'supply disruption'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'divert', term: 'divert', normalizedTerm: 'divert', partOfSpeech: ['verb'], ipa: '/daɪvˈɜːt/',
    chineseShort: '转移；改道', chineseExplanation: '表示“转移；改道”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To redirect attention, resources, traffic, money, or activity away from its original course or purpose.',
    examples: [{ english: 'The phrase "divert resources" is common in formal academic or professional contexts.', malay: 'Mengalihkan.', chinese: '“转移资源”这一表达常见于正式的学术或专业语境。' }], collocations: ['divert resources', 'divert traffic'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'dominate', term: 'dominate', normalizedTerm: 'dominate', partOfSpeech: ['verb'], ipa: '/dˈɒmɪnˌeɪt/',
    chineseShort: '占主导；支配', chineseExplanation: '表示“占主导；支配”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To have controlling influence, power, or importance over a person, market, discussion, or situation.',
    examples: [{ english: 'Researchers may encounter the expression "dominate the market" in advanced writing.', malay: 'Menguasai.', chinese: '研究者可能会在高级写作中遇到“主导市场”这一表达。' }], collocations: ['dominate the market', 'dominate the debate'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'eliminate', term: 'eliminate', normalizedTerm: 'eliminate', partOfSpeech: ['verb'], ipa: '/ɪlˈɪmɪnˌeɪt/',
    chineseShort: '消除；淘汰', chineseExplanation: '表示“消除；淘汰”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To completely remove, exclude, or get rid of something from a process, system, or competition.',
    examples: [{ english: 'The report uses the expression "eliminate unnecessary costs" in its analysis.', malay: 'Menghapuskan.', chinese: '报告在分析中使用了“消除不必要成本”这一表达。' }], collocations: ['eliminate unnecessary costs', 'eliminate bias'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'embed', term: 'embed', normalizedTerm: 'embed', partOfSpeech: ['verb'], ipa: '/ɛmbˈɛd/',
    chineseShort: '嵌入；使根深蒂固', chineseExplanation: '表示“嵌入；使根深蒂固”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To place something firmly within a larger structure, system, culture, or set of practices.',
    examples: [{ english: 'The phrase "embed safeguards" is common in formal academic or professional contexts.', malay: 'Menerapkan.', chinese: '“嵌入保障措施”这一表达常见于正式的学术或专业语境。' }], collocations: ['embed safeguards', 'embed a value'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'empower', term: 'empower', normalizedTerm: 'empower', partOfSpeech: ['verb'], ipa: '/ɛmpˈaʊə/',
    chineseShort: '授权；赋能', chineseExplanation: '表示“授权；赋能”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To give people greater authority, confidence, resources, or control over decisions affecting them.',
    examples: [{ english: 'Researchers may encounter the expression "empower communities" in advanced writing.', malay: 'Memperkasa.', chinese: '研究者可能会在高级写作中遇到“赋能社区”这一表达。' }], collocations: ['empower communities', 'empower employees'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'enact', term: 'enact', normalizedTerm: 'enact', partOfSpeech: ['verb'], ipa: '/ɛnˈakt/',
    chineseShort: '制定；颁布', chineseExplanation: '表示“制定；颁布”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make a proposal formally into law or to put an official measure into effect.',
    examples: [{ english: 'The report uses the expression "enact legislation" in its analysis.', malay: 'Menggubal.', chinese: '报告在分析中使用了“颁布法律”这一表达。' }], collocations: ['enact legislation', 'enact reforms'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'enforce', term: 'enforce', normalizedTerm: 'enforce', partOfSpeech: ['verb'], ipa: '/ɛnfˈɔːs/',
    chineseShort: '执行；强制实施', chineseExplanation: '表示“执行；强制实施”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make sure that a law, rule, agreement, or standard is obeyed.',
    examples: [{ english: 'The phrase "enforce regulations" is common in formal academic or professional contexts.', malay: 'Menguatkuasakan.', chinese: '“执行法规”这一表达常见于正式的学术或专业语境。' }], collocations: ['enforce regulations', 'enforce a ban'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'enforcement', term: 'enforcement', normalizedTerm: 'enforcement', partOfSpeech: ['noun'], ipa: '/ɛnfˈɔːsmənt/',
    chineseShort: '执行；执法', chineseExplanation: '表示“执行；执法”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of ensuring compliance with laws, rules, standards, or official requirements.',
    examples: [{ english: 'Researchers may encounter the expression "law enforcement" in advanced writing.', malay: 'Penguatkuasaan.', chinese: '研究者可能会在高级写作中遇到“执法”这一表达。' }], collocations: ['law enforcement', 'strict enforcement'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'engagement', term: 'engagement', normalizedTerm: 'engagement', partOfSpeech: ['noun'], ipa: '/ɛnɡˈeɪdʒmənt/',
    chineseShort: '参与；投入', chineseExplanation: '表示“参与；投入”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Active involvement, attention, or interaction with an activity, organisation, issue, or audience.',
    examples: [{ english: 'The report uses the expression "public engagement" in its analysis.', malay: 'Penglibatan.', chinese: '报告在分析中使用了“公众参与”这一表达。' }], collocations: ['public engagement', 'employee engagement'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'equilibrium', term: 'equilibrium', normalizedTerm: 'equilibrium', partOfSpeech: ['noun'], ipa: '/ˌiːkwɪlˈɪbɹiəm/',
    chineseShort: '平衡；均衡', chineseExplanation: '表示“平衡；均衡”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A state in which opposing forces, influences, or processes are balanced and relatively stable.',
    examples: [{ english: 'The phrase "market equilibrium" is common in formal academic or professional contexts.', malay: 'Keseimbangan.', chinese: '“市场均衡”这一表达常见于正式的学术或专业语境。' }], collocations: ['market equilibrium', 'maintain equilibrium'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'erosion', term: 'erosion', normalizedTerm: 'erosion', partOfSpeech: ['noun'], ipa: '/ɪɹˈəʊʒən/',
    chineseShort: '侵蚀；削弱', chineseExplanation: '表示“侵蚀；削弱”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The gradual wearing away of material, authority, trust, rights, or standards.',
    examples: [{ english: 'Researchers may encounter the expression "soil erosion" in advanced writing.', malay: 'Hakisan.', chinese: '研究者可能会在高级写作中遇到“土壤侵蚀”这一表达。' }], collocations: ['soil erosion', 'erosion of trust'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'escalate', term: 'escalate', normalizedTerm: 'escalate', partOfSpeech: ['verb'], ipa: '/ˈɛskɐlˌeɪt/',
    chineseShort: '升级；加剧', chineseExplanation: '表示“升级；加剧”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To become or make a conflict, problem, cost, or level of activity more serious or intense.',
    examples: [{ english: 'The report uses the expression "escalate tensions" in its analysis.', malay: 'Meningkatkan.', chinese: '报告在分析中使用了“加剧紧张”这一表达。' }], collocations: ['escalate tensions', 'escalate the dispute'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'escalation', term: 'escalation', normalizedTerm: 'escalation', partOfSpeech: ['noun'], ipa: '/ˌɛskɐlˈeɪʃən/',
    chineseShort: '升级；加剧', chineseExplanation: '表示“升级；加剧”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A process in which a conflict, cost, problem, or intensity increases to a more serious level.',
    examples: [{ english: 'The phrase "rapid escalation" is common in formal academic or professional contexts.', malay: 'Peningkatan.', chinese: '“迅速升级”这一表达常见于正式的学术或专业语境。' }], collocations: ['rapid escalation', 'cost escalation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'establishment', term: 'establishment', normalizedTerm: 'establishment', partOfSpeech: ['noun'], ipa: '/ɪstˈablɪʃmənt/',
    chineseShort: '建立；机构', chineseExplanation: '表示“建立；机构”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of creating something on a lasting basis, or an established institution or influential group.',
    examples: [{ english: 'Researchers may encounter the expression "establishment of a system" in advanced writing.', malay: 'Penubuhan.', chinese: '研究者可能会在高级写作中遇到“建立体系”这一表达。' }], collocations: ['establishment of a system', 'political establishment'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'expenditure', term: 'expenditure', normalizedTerm: 'expenditure', partOfSpeech: ['noun'], ipa: '/ɛkspˈɛndɪtʃə/',
    chineseShort: '支出；花费', chineseExplanation: '表示“支出；花费”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Money spent by a person, organisation, or government for a particular purpose.',
    examples: [{ english: 'The report uses the expression "public expenditure" in its analysis.', malay: 'Perbelanjaan.', chinese: '报告在分析中使用了“公共支出”这一表达。' }], collocations: ['public expenditure', 'capital expenditure'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'exposure', term: 'exposure', normalizedTerm: 'exposure', partOfSpeech: ['noun'], ipa: '/ɛkspˈəʊʒə/',
    chineseShort: '接触；暴露', chineseExplanation: '表示“接触；暴露”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The state of being subject to an influence, risk, condition, information source, or public attention.',
    examples: [{ english: 'The phrase "exposure to risk" is common in formal academic or professional contexts.', malay: 'Pendedahan.', chinese: '“风险暴露”这一表达常见于正式的学术或专业语境。' }], collocations: ['exposure to risk', 'media exposure'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'extract', term: 'extract', normalizedTerm: 'extract', partOfSpeech: ['verb', 'noun'], ipa: '/ˈɛkstɹakt/',
    chineseShort: '提取；摘录', chineseExplanation: '表示“提取；摘录”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To remove or obtain something from a source, or a selected passage taken from a larger work.',
    examples: [{ english: 'Researchers may encounter the expression "extract information" in advanced writing.', malay: 'Mengekstrak.', chinese: '研究者可能会在高级写作中遇到“提取信息”这一表达。' }], collocations: ['extract information', 'extract data'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'extraction', term: 'extraction', normalizedTerm: 'extraction', partOfSpeech: ['noun'], ipa: '/ɛkstɹˈakʃən/',
    chineseShort: '提取；开采', chineseExplanation: '表示“提取；开采”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of removing, obtaining, or deriving material, information, or resources from a source.',
    examples: [{ english: 'The report uses the expression "resource extraction" in its analysis.', malay: 'Pengekstrakan.', chinese: '报告在分析中使用了“资源开采”这一表达。' }], collocations: ['resource extraction', 'data extraction'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'faction', term: 'faction', normalizedTerm: 'faction', partOfSpeech: ['noun'], ipa: '/fˈakʃən/',
    chineseShort: '派系；小集团', chineseExplanation: '表示“派系；小集团”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A smaller organised group within a larger body, often with competing interests or views.',
    examples: [{ english: 'The phrase "political faction" is common in formal academic or professional contexts.', malay: 'Puak.', chinese: '“政治派系”这一表达常见于正式的学术或专业语境。' }], collocations: ['political faction', 'rival faction'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'flexibility', term: 'flexibility', normalizedTerm: 'flexibility', partOfSpeech: ['noun'], ipa: '/flˌɛksəbˈɪlɪti/',
    chineseShort: '灵活性；适应性', chineseExplanation: '表示“灵活性；适应性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability to change, adapt, or respond effectively to different conditions and requirements.',
    examples: [{ english: 'Researchers may encounter the expression "greater flexibility" in advanced writing.', malay: 'Fleksibiliti.', chinese: '研究者可能会在高级写作中遇到“更大灵活性”这一表达。' }], collocations: ['greater flexibility', 'workplace flexibility'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'fragmentation', term: 'fragmentation', normalizedTerm: 'fragmentation', partOfSpeech: ['noun'], ipa: '/fɹˌaɡməntˈeɪʃən/',
    chineseShort: '碎片化；分裂', chineseExplanation: '表示“碎片化；分裂”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of breaking into separate parts, groups, markets, systems, or units.',
    examples: [{ english: 'The report uses the expression "market fragmentation" in its analysis.', malay: 'Pemecahan.', chinese: '报告在分析中使用了“市场碎片化”这一表达。' }], collocations: ['market fragmentation', 'social fragmentation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'functional', term: 'functional', normalizedTerm: 'functional', partOfSpeech: ['adjective'], ipa: '/fˈʌŋkʃənəl/',
    chineseShort: '功能性的；实用的', chineseExplanation: '表示“功能性的；实用的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Designed to work effectively for a particular purpose, or relating to the practical operation of a system.',
    examples: [{ english: 'The phrase "functional requirement" is common in formal academic or professional contexts.', malay: 'Fungsian.', chinese: '“功能需求”这一表达常见于正式的学术或专业语境。' }], collocations: ['functional requirement', 'functional design'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'governance', term: 'governance', normalizedTerm: 'governance', partOfSpeech: ['noun'], ipa: '/ɡˈʌvənəns/',
    chineseShort: '治理；管理机制', chineseExplanation: '表示“治理；管理机制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The systems, rules, and processes through which an organisation, institution, or society is directed and controlled.',
    examples: [{ english: 'Researchers may encounter the expression "corporate governance" in advanced writing.', malay: 'Tadbir urus.', chinese: '研究者可能会在高级写作中遇到“公司治理”这一表达。' }], collocations: ['corporate governance', 'good governance'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'incentive', term: 'incentive', normalizedTerm: 'incentive', partOfSpeech: ['noun'], ipa: '/ɪnsˈɛntɪv/',
    chineseShort: '激励；刺激因素', chineseExplanation: '表示“激励；刺激因素”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something that motivates or encourages a person, organisation, or market participant to act in a particular way.',
    examples: [{ english: 'The report uses the expression "financial incentive" in its analysis.', malay: 'Insentif.', chinese: '报告在分析中使用了“经济激励”这一表达。' }], collocations: ['financial incentive', 'provide an incentive'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'infrastructure', term: 'infrastructure', normalizedTerm: 'infrastructure', partOfSpeech: ['noun'], ipa: '/ˈɪnfɹəstɹˌʌktʃə/',
    chineseShort: '基础设施；基础系统', chineseExplanation: '表示“基础设施；基础系统”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The basic physical, organizational, and technological systems needed for a society or organisation to function.',
    examples: [{ english: 'The phrase "public infrastructure" is common in formal academic or professional contexts.', malay: 'Infrastruktur.', chinese: '“公共基础设施”这一表达常见于正式的学术或专业语境。' }], collocations: ['public infrastructure', 'digital infrastructure'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'innovation', term: 'innovation', normalizedTerm: 'innovation', partOfSpeech: ['noun'], ipa: '/ˌɪnəvˈeɪʃən/',
    chineseShort: '创新；革新', chineseExplanation: '表示“创新；革新”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The introduction or development of new ideas, methods, products, or processes that create value or improvement.',
    examples: [{ english: 'Researchers may encounter the expression "technological innovation" in advanced writing.', malay: 'Inovasi.', chinese: '研究者可能会在高级写作中遇到“技术创新”这一表达。' }], collocations: ['technological innovation', 'drive innovation'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'institutional', term: 'institutional', normalizedTerm: 'institutional', partOfSpeech: ['adjective'], ipa: '/ˌɪnstɪtjˈuːʃənəl/',
    chineseShort: '制度的；机构的', chineseExplanation: '表示“制度的；机构的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to established organisations, formal systems, or long-standing social arrangements.',
    examples: [{ english: 'The report uses the expression "institutional reform" in its analysis.', malay: 'Institusi.', chinese: '报告在分析中使用了“制度改革”这一表达。' }], collocations: ['institutional reform', 'institutional framework'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'integration', term: 'integration', normalizedTerm: 'integration', partOfSpeech: ['noun'], ipa: '/ˌɪntɪɡɹˈeɪʃən/',
    chineseShort: '整合；融合', chineseExplanation: '表示“整合；融合”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of combining separate parts, groups, systems, or functions into a unified whole.',
    examples: [{ english: 'The phrase "social integration" is common in formal academic or professional contexts.', malay: 'Integrasi.', chinese: '“社会融合”这一表达常见于正式的学术或专业语境。' }], collocations: ['social integration', 'system integration'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'interaction', term: 'interaction', normalizedTerm: 'interaction', partOfSpeech: ['noun'], ipa: '/ˌɪntəɹˈakʃən/',
    chineseShort: '互动；相互作用', chineseExplanation: '表示“互动；相互作用”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The way in which people, factors, or systems influence and respond to one another.',
    examples: [{ english: 'Researchers may encounter the expression "social interaction" in advanced writing.', malay: 'Interaksi.', chinese: '研究者可能会在高级写作中遇到“社会互动”这一表达。' }], collocations: ['social interaction', 'complex interaction'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'justification', term: 'justification', normalizedTerm: 'justification', partOfSpeech: ['noun'], ipa: '/dʒˌʌstɪfɪkˈeɪʃən/',
    chineseShort: '正当理由；论证', chineseExplanation: '表示“正当理由；论证”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A reason or set of reasons showing that an action, belief, or decision is reasonable or acceptable.',
    examples: [{ english: 'The report uses the expression "strong justification" in its analysis.', malay: 'Justifikasi.', chinese: '报告在分析中使用了“充分理由”这一表达。' }], collocations: ['strong justification', 'provide justification'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'legislation', term: 'legislation', normalizedTerm: 'legislation', partOfSpeech: ['noun'], ipa: '/lˌɛdʒɪslˈeɪʃən/',
    chineseShort: '立法；法规', chineseExplanation: '表示“立法；法规”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Laws considered collectively, or the process of creating and passing laws.',
    examples: [{ english: 'The phrase "new legislation" is common in formal academic or professional contexts.', malay: 'Perundangan.', chinese: '“新法规”这一表达常见于正式的学术或专业语境。' }], collocations: ['new legislation', 'introduce legislation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'liability', term: 'liability', normalizedTerm: 'liability', partOfSpeech: ['noun'], ipa: '/lˌaɪəbˈɪlɪti/',
    chineseShort: '责任；负债', chineseExplanation: '表示“责任；负债”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Legal or financial responsibility for something, or an amount that a person or organisation owes.',
    examples: [{ english: 'Researchers may encounter the expression "legal liability" in advanced writing.', malay: 'Liabiliti.', chinese: '研究者可能会在高级写作中遇到“法律责任”这一表达。' }], collocations: ['legal liability', 'financial liabilities'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'limitation', term: 'limitation', normalizedTerm: 'limitation', partOfSpeech: ['noun'], ipa: '/lˌɪmɪtˈeɪʃən/',
    chineseShort: '限制；局限', chineseExplanation: '表示“限制；局限”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A condition, rule, weakness, or boundary that restricts what is possible or effective.',
    examples: [{ english: 'The report uses the expression "major limitation" in its analysis.', malay: 'Batasan.', chinese: '报告在分析中使用了“主要局限”这一表达。' }], collocations: ['major limitation', 'technical limitation'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'mandate', term: 'mandate', normalizedTerm: 'mandate', partOfSpeech: ['noun', 'verb'], ipa: '/mˈandeɪt/',
    chineseShort: '授权；命令', chineseExplanation: '表示“授权；命令”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Official authority or an instruction to act, or to formally require an action.',
    examples: [{ english: 'The phrase "mandate disclosure" is common in formal academic or professional contexts.', malay: 'Mandat.', chinese: '“强制披露”这一表达常见于正式的学术或专业语境。' }], collocations: ['mandate disclosure', 'public mandate'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'migration', term: 'migration', normalizedTerm: 'migration', partOfSpeech: ['noun'], ipa: '/maɪɡɹˈeɪʃən/',
    chineseShort: '迁移；移民', chineseExplanation: '表示“迁移；移民”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The movement of people, animals, data, or activity from one place, system, or condition to another.',
    examples: [{ english: 'Researchers may encounter the expression "international migration" in advanced writing.', malay: 'Migrasi.', chinese: '研究者可能会在高级写作中遇到“国际移民”这一表达。' }], collocations: ['international migration', 'data migration'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'monopoly', term: 'monopoly', normalizedTerm: 'monopoly', partOfSpeech: ['noun'], ipa: '/mənˈɒpəli/',
    chineseShort: '垄断；独占', chineseExplanation: '表示“垄断；独占”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Exclusive or dominant control of a market, resource, service, or area of activity.',
    examples: [{ english: 'The report uses the expression "market monopoly" in its analysis.', malay: 'Monopoli.', chinese: '报告在分析中使用了“市场垄断”这一表达。' }], collocations: ['market monopoly', 'state monopoly'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'norm', term: 'norm', normalizedTerm: 'norm', partOfSpeech: ['noun'], ipa: '/nˈɔːm/',
    chineseShort: '规范；常态', chineseExplanation: '表示“规范；常态”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A standard, pattern, or expectation regarded as typical or acceptable within a group or context.',
    examples: [{ english: 'The phrase "social norm" is common in formal academic or professional contexts.', malay: 'Norma.', chinese: '“社会规范”这一表达常见于正式的学术或专业语境。' }], collocations: ['social norm', 'established norm'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'obligation', term: 'obligation', normalizedTerm: 'obligation', partOfSpeech: ['noun'], ipa: '/ˌɒblɪɡˈeɪʃən/',
    chineseShort: '义务；责任', chineseExplanation: '表示“义务；责任”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A legal, moral, or professional duty to do or provide something.',
    examples: [{ english: 'Researchers may encounter the expression "legal obligation" in advanced writing.', malay: 'Kewajipan.', chinese: '研究者可能会在高级写作中遇到“法律义务”这一表达。' }], collocations: ['legal obligation', 'fulfil an obligation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'orientation', term: 'orientation', normalizedTerm: 'orientation', partOfSpeech: ['noun'], ipa: '/ˌɔːɹiəntˈeɪʃən/',
    chineseShort: '方向；取向', chineseExplanation: '表示“方向；取向”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A general direction, tendency, viewpoint, or process of becoming familiar with a new environment.',
    examples: [{ english: 'The report uses the expression "strategic orientation" in its analysis.', malay: 'Orientasi.', chinese: '报告在分析中使用了“战略取向”这一表达。' }], collocations: ['strategic orientation', 'market orientation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'participation', term: 'participation', normalizedTerm: 'participation', partOfSpeech: ['noun'], ipa: '/pɑːtˈɪsɪpˈeɪʃən/',
    chineseShort: '参与；参加', chineseExplanation: '表示“参与；参加”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of taking part in an activity, process, decision, or institution.',
    examples: [{ english: 'The phrase "public participation" is common in formal academic or professional contexts.', malay: 'Penyertaan.', chinese: '“公众参与”这一表达常见于正式的学术或专业语境。' }], collocations: ['public participation', 'active participation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'perception', term: 'perception', normalizedTerm: 'perception', partOfSpeech: ['noun'], ipa: '/pəsˈɛpʃən/',
    chineseShort: '看法；感知', chineseExplanation: '表示“看法；感知”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The way something is understood, interpreted, or experienced through the senses or the mind.',
    examples: [{ english: 'Researchers may encounter the expression "public perception" in advanced writing.', malay: 'Persepsi.', chinese: '研究者可能会在高级写作中遇到“公众看法”这一表达。' }], collocations: ['public perception', 'risk perception'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'persistence', term: 'persistence', normalizedTerm: 'persistence', partOfSpeech: ['noun'], ipa: '/pəsˈɪstəns/',
    chineseShort: '坚持；持续存在', chineseExplanation: '表示“坚持；持续存在”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Continued effort despite difficulty, or the continued existence of a condition over time.',
    examples: [{ english: 'The report uses the expression "persistence of inequality" in its analysis.', malay: 'Kegigihan.', chinese: '报告在分析中使用了“不平等的持续存在”这一表达。' }], collocations: ['persistence of inequality', 'show persistence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'polarization', term: 'polarisation', normalizedTerm: 'polarisation', partOfSpeech: ['noun'], ipa: '/pˌəʊləɹaɪzˈeɪʃən/',
    chineseShort: '两极分化；极化', chineseExplanation: '表示“两极分化；极化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process by which opinions, groups, or conditions become increasingly divided into opposing extremes.',
    examples: [{ english: 'The phrase "political polarisation" is common in formal academic or professional contexts.', malay: 'Polarisasi.', chinese: '“政治两极分化”这一表达常见于正式的学术或专业语境。' }], collocations: ['political polarisation', 'social polarisation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'priority', term: 'priority', normalizedTerm: 'priority', partOfSpeech: ['noun'], ipa: '/pɹaɪˈɒɹɪti/',
    chineseShort: '优先事项；优先权', chineseExplanation: '表示“优先事项；优先权”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Something considered more important than other matters and therefore dealt with first.',
    examples: [{ english: 'Researchers may encounter the expression "strategic priority" in advanced writing.', malay: 'Keutamaan.', chinese: '研究者可能会在高级写作中遇到“战略重点”这一表达。' }], collocations: ['strategic priority', 'give priority'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'prohibition', term: 'prohibition', normalizedTerm: 'prohibition', partOfSpeech: ['noun'], ipa: '/pɹəhɪbˈɪʃən/',
    chineseShort: '禁止；禁令', chineseExplanation: '表示“禁止；禁令”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An official rule or law that prevents an action, activity, or use of something.',
    examples: [{ english: 'The report uses the expression "legal prohibition" in its analysis.', malay: 'Larangan.', chinese: '报告在分析中使用了“法律禁令”这一表达。' }], collocations: ['legal prohibition', 'prohibition on imports'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'projection', term: 'projection', normalizedTerm: 'projection', partOfSpeech: ['noun'], ipa: '/pɹədʒˈɛkʃən/',
    chineseShort: '预测；推算', chineseExplanation: '表示“预测；推算”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An estimate of a future amount or trend based on current data, assumptions, or models.',
    examples: [{ english: 'The phrase "growth projection" is common in formal academic or professional contexts.', malay: 'Unjuran.', chinese: '“增长预测”这一表达常见于正式的学术或专业语境。' }], collocations: ['growth projection', 'population projection'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'regulation', term: 'regulation', normalizedTerm: 'regulation', partOfSpeech: ['noun'], ipa: '/ɹˌɛɡjuːlˈeɪʃən/',
    chineseShort: '规章；监管', chineseExplanation: '表示“规章；监管”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An official rule or system of control intended to govern behaviour, markets, processes, or standards.',
    examples: [{ english: 'Researchers may encounter the expression "financial regulation" in advanced writing.', malay: 'Peraturan.', chinese: '研究者可能会在高级写作中遇到“金融监管”这一表达。' }], collocations: ['financial regulation', 'strict regulation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'representation', term: 'representation', normalizedTerm: 'representation', partOfSpeech: ['noun'], ipa: '/ɹˌɛpɹɪzˈɛntˈeɪʃən/',
    chineseShort: '代表；表述', chineseExplanation: '表示“代表；表述”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of speaking or acting for others, or the way something is presented, described, or symbolised.',
    examples: [{ english: 'The report uses the expression "political representation" in its analysis.', malay: 'Perwakilan.', chinese: '报告在分析中使用了“政治代表”这一表达。' }], collocations: ['political representation', 'accurate representation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'restriction', term: 'restriction', normalizedTerm: 'restriction', partOfSpeech: ['noun'], ipa: '/ɹɪstɹˈɪkʃən/',
    chineseShort: '限制；约束', chineseExplanation: '表示“限制；约束”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A rule, condition, or measure that limits freedom, access, movement, or activity.',
    examples: [{ english: 'The phrase "legal restriction" is common in formal academic or professional contexts.', malay: 'Sekatan.', chinese: '“法律限制”这一表达常见于正式的学术或专业语境。' }], collocations: ['legal restriction', 'access restrictions'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'revenue', term: 'revenue', normalizedTerm: 'revenue', partOfSpeech: ['noun'], ipa: '/ɹˈɛvənjˌuː/',
    chineseShort: '收入；财政收入', chineseExplanation: '表示“收入；财政收入”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Money received by a business, organisation, or government from its activities or sources.',
    examples: [{ english: 'Researchers may encounter the expression "tax revenue" in advanced writing.', malay: 'Hasil.', chinese: '研究者可能会在高级写作中遇到“税收收入”这一表达。' }], collocations: ['tax revenue', 'generate revenue'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'scope', term: 'scope', normalizedTerm: 'scope', partOfSpeech: ['noun'], ipa: '/skˈəʊp/',
    chineseShort: '范围；余地', chineseExplanation: '表示“范围；余地”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The extent of a subject, activity, investigation, responsibility, or opportunity.',
    examples: [{ english: 'The report uses the expression "broad scope" in its analysis.', malay: 'Skop.', chinese: '报告在分析中使用了“广泛范围”这一表达。' }], collocations: ['broad scope', 'scope of the study'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'significance', term: 'significance', normalizedTerm: 'significance', partOfSpeech: ['noun'], ipa: '/sɪɡnˈɪfɪkəns/',
    chineseShort: '重要性；意义', chineseExplanation: '表示“重要性；意义”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The importance, meaning, or statistical relevance of a fact, event, result, or pattern.',
    examples: [{ english: 'The phrase "statistical significance" is common in formal academic or professional contexts.', malay: 'Kepentingan.', chinese: '“统计显著性”这一表达常见于正式的学术或专业语境。' }], collocations: ['statistical significance', 'historical significance'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'stability', term: 'stability', normalizedTerm: 'stability', partOfSpeech: ['noun'], ipa: '/stəbˈɪlɪti/',
    chineseShort: '稳定；稳定性', chineseExplanation: '表示“稳定；稳定性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The condition of remaining steady, balanced, predictable, or resistant to sudden change.',
    examples: [{ english: 'Researchers may encounter the expression "economic stability" in advanced writing.', malay: 'Kestabilan.', chinese: '研究者可能会在高级写作中遇到“经济稳定”这一表达。' }], collocations: ['economic stability', 'political stability'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'stakeholder', term: 'stakeholder', normalizedTerm: 'stakeholder', partOfSpeech: ['noun'], ipa: '/stˈeɪkhəʊldə/',
    chineseShort: '利益相关者', chineseExplanation: '表示“利益相关者”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A person, group, or organisation affected by or able to influence a decision, project, or institution.',
    examples: [{ english: 'The report uses the expression "key stakeholder" in its analysis.', malay: 'Pihak berkepentingan.', chinese: '报告在分析中使用了“关键利益相关者”这一表达。' }], collocations: ['key stakeholder', 'stakeholder consultation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'structural', term: 'structural', normalizedTerm: 'structural', partOfSpeech: ['adjective'], ipa: '/stɹˈʌktʃəɹəl/',
    chineseShort: '结构性的；体系层面的', chineseExplanation: '表示“结构性的；体系层面的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to the basic organisation, framework, or underlying arrangement of a system or society.',
    examples: [{ english: 'The phrase "structural reform" is common in formal academic or professional contexts.', malay: 'Struktur.', chinese: '“结构性改革”这一表达常见于正式的学术或专业语境。' }], collocations: ['structural reform', 'structural inequality'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'synthesis', term: 'synthesis', normalizedTerm: 'synthesis', partOfSpeech: ['noun'], ipa: '/sˈɪnθəsˌɪs/',
    chineseShort: '综合；合成', chineseExplanation: '表示“综合；合成”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The combination of different ideas, evidence, or elements into a coherent whole.',
    examples: [{ english: 'Researchers may encounter the expression "synthesis of evidence" in advanced writing.', malay: 'Sintesis.', chinese: '研究者可能会在高级写作中遇到“证据综合”这一表达。' }], collocations: ['synthesis of evidence', 'critical synthesis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'transparency', term: 'transparency', normalizedTerm: 'transparency', partOfSpeech: ['noun'], ipa: '/tɹanspˈaɹənsi/',
    chineseShort: '透明度；公开性', chineseExplanation: '表示“透明度；公开性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being open, clear, and easy to examine, especially in decisions, processes, or information.',
    examples: [{ english: 'The report uses the expression "financial transparency" in its analysis.', malay: 'Ketelusan.', chinese: '报告在分析中使用了“财务透明度”这一表达。' }], collocations: ['financial transparency', 'increase transparency'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'uncertainty', term: 'uncertainty', normalizedTerm: 'uncertainty', partOfSpeech: ['noun'], ipa: '/ʌnsˈɜːtənti/',
    chineseShort: '不确定性；不确定状态', chineseExplanation: '表示“不确定性；不确定状态”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A condition in which outcomes, facts, or future developments cannot be known with confidence.',
    examples: [{ english: 'The phrase "economic uncertainty" is common in formal academic or professional contexts.', malay: 'Ketidakpastian.', chinese: '“经济不确定性”这一表达常见于正式的学术或专业语境。' }], collocations: ['economic uncertainty', 'reduce uncertainty'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'validity', term: 'validity', normalizedTerm: 'validity', partOfSpeech: ['noun'], ipa: '/valˈɪdɪti/',
    chineseShort: '有效性；合理性', chineseExplanation: '表示“有效性；合理性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The extent to which an argument, measure, test, or conclusion is sound, accurate, or well founded.',
    examples: [{ english: 'Researchers may encounter the expression "construct validity" in advanced writing.', malay: 'Kesahan.', chinese: '研究者可能会在高级写作中遇到“构念效度”这一表达。' }], collocations: ['construct validity', 'question the validity'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'welfare', term: 'welfare', normalizedTerm: 'welfare', partOfSpeech: ['noun'], ipa: '/wˈɛlfeə/',
    chineseShort: '福利；福祉', chineseExplanation: '表示“福利；福祉”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The health, safety, prosperity, and general well-being of individuals or groups.',
    examples: [{ english: 'The report uses the expression "social welfare" in its analysis.', malay: 'Kebajikan.', chinese: '报告在分析中使用了“社会福利”这一表达。' }], collocations: ['social welfare', 'public welfare'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'abolish', term: 'abolish', normalizedTerm: 'abolish', partOfSpeech: ['verb'], ipa: '/ɐbˈɒlɪʃ/',
    chineseShort: '废除；取消', chineseExplanation: '表示“废除；取消”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To formally end a law, institution, practice, or system.',
    examples: [{ english: 'The phrase "abolish a policy" is common in formal academic or professional contexts.', malay: 'Memansuhkan undang-undang, sistem atau amalan secara rasmi.', chinese: '“废除政策”这一表达常见于正式的学术或专业语境。' }], collocations: ['abolish a policy', 'abolish restrictions'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'accelerate', term: 'accelerate', normalizedTerm: 'accelerate', partOfSpeech: ['verb'], ipa: '/ɐksˈɛləɹˌeɪt/',
    chineseShort: '加速；促进', chineseExplanation: '表示“加速；促进”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make a process, rate, or development happen more quickly.',
    examples: [{ english: 'Researchers may encounter the expression "accelerate growth" in advanced writing.', malay: 'Mempercepat proses, kadar atau perkembangan.', chinese: '研究者可能会在高级写作中遇到“加速增长”这一表达。' }], collocations: ['accelerate growth', 'accelerate reform'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'accommodate', term: 'accommodate', normalizedTerm: 'accommodate', partOfSpeech: ['verb'], ipa: '/ɐkˈɒmədˌeɪt/',
    chineseShort: '容纳；适应', chineseExplanation: '表示“容纳；适应”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To provide space or conditions for someone or something, or adjust to meet a need or difference.',
    examples: [{ english: 'The report uses the expression "accommodate demand" in its analysis.', malay: 'Menyediakan ruang atau menyesuaikan diri dengan sesuatu keperluan.', chinese: '报告在分析中使用了“满足需求”这一表达。' }], collocations: ['accommodate demand', 'accommodate diversity'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'accumulate', term: 'accumulate', normalizedTerm: 'accumulate', partOfSpeech: ['verb'], ipa: '/ɐkjˈuːmjʊlˌeɪt/',
    chineseShort: '积累；堆积', chineseExplanation: '表示“积累；堆积”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To gather or increase gradually in quantity, value, evidence, or effect over time.',
    examples: [{ english: 'The phrase "accumulate evidence" is common in formal academic or professional contexts.', malay: 'Mengumpul atau bertambah secara beransur-ansur.', chinese: '“积累证据”这一表达常见于正式的学术或专业语境。' }], collocations: ['accumulate evidence', 'accumulate wealth'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'appoint', term: 'appoint', normalizedTerm: 'appoint', partOfSpeech: ['verb'], ipa: '/ɐpˈɔɪnt/',
    chineseShort: '任命；指定', chineseExplanation: '表示“任命；指定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To officially choose someone for a position, role, task, or responsibility.',
    examples: [{ english: 'Researchers may encounter the expression "appoint a committee" in advanced writing.', malay: 'Melantik seseorang secara rasmi untuk sesuatu jawatan atau tugas.', chinese: '研究者可能会在高级写作中遇到“任命委员会”这一表达。' }], collocations: ['appoint a committee', 'appoint a director'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'classify', term: 'classify', normalizedTerm: 'classify', partOfSpeech: ['verb'], ipa: '/klˈasɪfˌaɪ/',
    chineseShort: '分类；归类', chineseExplanation: '表示“分类；归类”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To arrange people, objects, or information into groups according to shared features or criteria.',
    examples: [{ english: 'The report uses the expression "classify data" in its analysis.', malay: 'Mengelaskan mengikut ciri atau kriteria yang sama.', chinese: '报告在分析中使用了“对数据分类”这一表达。' }], collocations: ['classify data', 'classify cases'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'compile', term: 'compile', normalizedTerm: 'compile', partOfSpeech: ['verb'], ipa: '/kəmpˈaɪl/',
    chineseShort: '汇编；编制', chineseExplanation: '表示“汇编；编制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To collect information from different sources and organise it into a document, list, or dataset.',
    examples: [{ english: 'The phrase "compile a report" is common in formal academic or professional contexts.', malay: 'Mengumpulkan dan menyusun maklumat daripada pelbagai sumber.', chinese: '“编制报告”这一表达常见于正式的学术或专业语境。' }], collocations: ['compile a report', 'compile data'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'comply', term: 'comply', normalizedTerm: 'comply', partOfSpeech: ['verb'], ipa: '/kəmplˈaɪ/',
    chineseShort: '遵守；依从', chineseExplanation: '表示“遵守；依从”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To act in accordance with a law, rule, standard, request, or requirement.',
    examples: [{ english: 'Researchers may encounter the expression "comply with regulations" in advanced writing.', malay: 'Mematuhi undang-undang, peraturan atau keperluan.', chinese: '研究者可能会在高级写作中遇到“遵守法规”这一表达。' }], collocations: ['comply with regulations', 'comply with standards'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'contextualize', term: 'contextualise', normalizedTerm: 'contextualise', partOfSpeech: ['verb'], ipa: '/kəntˈɛkstʃuːəlˌaɪz/',
    chineseShort: '置于语境中理解', chineseExplanation: '表示“置于语境中理解”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To place an idea, event, or piece of information within its wider circumstances so it can be properly understood.',
    examples: [{ english: 'The report uses the expression "contextualise the findings" in its analysis.', malay: 'Meletakkan sesuatu dalam konteksnya agar dapat difahami dengan tepat.', chinese: '报告在分析中使用了“把研究结果放入语境中理解”这一表达。' }], collocations: ['contextualise the findings', 'contextualise an argument'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'corruption', term: 'corruption', normalizedTerm: 'corruption', partOfSpeech: ['noun'], ipa: '/kəɹˈʌpʃən/',
    chineseShort: '腐败；贪污', chineseExplanation: '表示“腐败；贪污”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Dishonest or illegal use of power, position, or resources for private benefit.',
    examples: [{ english: 'The phrase "political corruption" is common in formal academic or professional contexts.', malay: 'Penyalahgunaan kuasa atau sumber secara tidak jujur demi kepentingan peribadi.', chinese: '“政治腐败”这一表达常见于正式的学术或专业语境。' }], collocations: ['political corruption', 'combat corruption'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'decisive', term: 'decisive', normalizedTerm: 'decisive', partOfSpeech: ['adjective'], ipa: '/dɪsˈaɪsɪv/',
    chineseShort: '决定性的；果断的', chineseExplanation: '表示“决定性的；果断的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having a strong or final effect on an outcome, or showing the ability to make decisions quickly and confidently.',
    examples: [{ english: 'Researchers may encounter the expression "decisive factor" in advanced writing.', malay: 'Menentukan hasil atau tegas dalam membuat keputusan.', chinese: '研究者可能会在高级写作中遇到“决定性因素”这一表达。' }], collocations: ['decisive factor', 'decisive action'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'disproportionate', term: 'disproportionate', normalizedTerm: 'disproportionate', partOfSpeech: ['adjective'], ipa: '/dˌɪspɹəpˈɔːʃənət/',
    chineseShort: '不成比例的；过度的', chineseExplanation: '表示“不成比例的；过度的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Too large or too small in relation to something else when compared fairly.',
    examples: [{ english: 'The report uses the expression "disproportionate impact" in its analysis.', malay: 'Tidak seimbang dari segi saiz atau kadar.', chinese: '报告在分析中使用了“不成比例的影响”这一表达。' }], collocations: ['disproportionate impact', 'disproportionate response'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'distinctive', term: 'distinctive', normalizedTerm: 'distinctive', partOfSpeech: ['adjective'], ipa: '/dɪstˈɪŋktɪv/',
    chineseShort: '独特的；有明显特征的', chineseExplanation: '表示“独特的；有明显特征的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Having a quality or feature that clearly distinguishes something from others.',
    examples: [{ english: 'The phrase "distinctive feature" is common in formal academic or professional contexts.', malay: 'Mempunyai ciri khas yang membezakannya daripada yang lain.', chinese: '“独特特征”这一表达常见于正式的学术或专业语境。' }], collocations: ['distinctive feature', 'distinctive pattern'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'diversity', term: 'diversity', normalizedTerm: 'diversity', partOfSpeech: ['noun'], ipa: '/daɪvˈɜːsɪti/',
    chineseShort: '多样性；差异性', chineseExplanation: '表示“多样性；差异性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The presence of a wide range of different people, ideas, forms, characteristics, or conditions.',
    examples: [{ english: 'Researchers may encounter the expression "cultural diversity" in advanced writing.', malay: 'Kewujudan pelbagai jenis manusia, idea atau keadaan.', chinese: '研究者可能会在高级写作中遇到“文化多样性”这一表达。' }], collocations: ['cultural diversity', 'workforce diversity'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'duration', term: 'duration', normalizedTerm: 'duration', partOfSpeech: ['noun'], ipa: '/djʊəɹˈeɪʃən/',
    chineseShort: '持续时间', chineseExplanation: '表示“持续时间”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The length of time during which an event, activity, process, or condition continues.',
    examples: [{ english: 'The report uses the expression "duration of the study" in its analysis.', malay: 'Tempoh berlangsungnya sesuatu peristiwa atau keadaan.', chinese: '报告在分析中使用了“研究持续时间”这一表达。' }], collocations: ['duration of the study', 'long duration'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'ecological', term: 'ecological', normalizedTerm: 'ecological', partOfSpeech: ['adjective'], ipa: '/ˌɛkəlˈɒdʒɪkəl/',
    chineseShort: '生态的；生态学的', chineseExplanation: '表示“生态的；生态学的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to ecosystems, the environment, or the relationships among living organisms and their surroundings.',
    examples: [{ english: 'The phrase "ecological impact" is common in formal academic or professional contexts.', malay: 'Berkaitan dengan ekosistem dan hubungan hidupan dengan alam sekitar.', chinese: '“生态影响”这一表达常见于正式的学术或专业语境。' }], collocations: ['ecological impact', 'ecological balance'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'efficiency', term: 'efficiency', normalizedTerm: 'efficiency', partOfSpeech: ['noun'], ipa: '/ɪfˈɪʃənsi/',
    chineseShort: '效率；效能', chineseExplanation: '表示“效率；效能”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability to achieve a result with minimal waste of time, money, energy, or resources.',
    examples: [{ english: 'Researchers may encounter the expression "operational efficiency" in advanced writing.', malay: 'Keupayaan mencapai hasil dengan pembaziran sumber yang minimum.', chinese: '研究者可能会在高级写作中遇到“运营效率”这一表达。' }], collocations: ['operational efficiency', 'improve efficiency'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'emphasis', term: 'emphasis', normalizedTerm: 'emphasis', partOfSpeech: ['noun'], ipa: '/ˈɛmfəsˌɪs/',
    chineseShort: '强调；重点', chineseExplanation: '表示“强调；重点”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Special importance, attention, or prominence given to an idea, feature, or part of something.',
    examples: [{ english: 'The report uses the expression "place emphasis on" in its analysis.', malay: 'Kepentingan atau perhatian khusus yang diberikan kepada sesuatu.', chinese: '报告在分析中使用了“强调”这一表达。' }], collocations: ['place emphasis on', 'strong emphasis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'evoke', term: 'evoke', normalizedTerm: 'evoke', partOfSpeech: ['verb'], ipa: '/ɪvˈəʊk/',
    chineseShort: '唤起；引发', chineseExplanation: '表示“唤起；引发”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To bring a feeling, memory, image, or response into the mind.',
    examples: [{ english: 'The phrase "evoke a response" is common in formal academic or professional contexts.', malay: 'Membangkitkan perasaan, ingatan, gambaran atau tindak balas.', chinese: '“引发反应”这一表达常见于正式的学术或专业语境。' }], collocations: ['evoke a response', 'evoke memories'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'exception', term: 'exception', normalizedTerm: 'exception', partOfSpeech: ['noun'], ipa: '/ɛksˈɛpʃən/',
    chineseShort: '例外；除外情况', chineseExplanation: '表示“例外；除外情况”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A person, case, or situation that does not follow a general rule, pattern, or expectation.',
    examples: [{ english: 'Researchers may encounter the expression "notable exception" in advanced writing.', malay: 'Kes yang tidak mematuhi peraturan atau pola umum.', chinese: '研究者可能会在高级写作中遇到“明显例外”这一表达。' }], collocations: ['notable exception', 'make an exception'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'exclusion', term: 'exclusion', normalizedTerm: 'exclusion', partOfSpeech: ['noun'], ipa: '/ɛksklˈuːʒən/',
    chineseShort: '排除；排斥', chineseExplanation: '表示“排除；排斥”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act or condition of preventing someone or something from participating, entering, or being considered.',
    examples: [{ english: 'The report uses the expression "social exclusion" in its analysis.', malay: 'Tindakan menghalang seseorang atau sesuatu daripada disertakan.', chinese: '报告在分析中使用了“社会排斥”这一表达。' }], collocations: ['social exclusion', 'exclusion criteria'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'excessive', term: 'excessive', normalizedTerm: 'excessive', partOfSpeech: ['adjective'], ipa: '/ɛksˈɛsɪv/',
    chineseShort: '过度的；过量的', chineseExplanation: '表示“过度的；过量的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Greater than what is reasonable, necessary, acceptable, or safe.',
    examples: [{ english: 'The phrase "excessive spending" is common in formal academic or professional contexts.', malay: 'Melebihi tahap yang munasabah, perlu atau selamat.', chinese: '“过度支出”这一表达常见于正式的学术或专业语境。' }], collocations: ['excessive spending', 'excessive pressure'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'exclusive', term: 'exclusive', normalizedTerm: 'exclusive', partOfSpeech: ['adjective'], ipa: '/ɛksklˈuːsɪv/',
    chineseShort: '独有的；排他的', chineseExplanation: '表示“独有的；排他的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Limited to a particular person, group, or purpose, or not shared with others.',
    examples: [{ english: 'Researchers may encounter the expression "exclusive access" in advanced writing.', malay: 'Terhad kepada pihak atau tujuan tertentu sahaja.', chinese: '研究者可能会在高级写作中遇到“独家访问权”这一表达。' }], collocations: ['exclusive access', 'exclusive rights'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'exhaustive', term: 'exhaustive', normalizedTerm: 'exhaustive', partOfSpeech: ['adjective'], ipa: '/ɛɡzˈɔːstɪv/',
    chineseShort: '详尽的；彻底的', chineseExplanation: '表示“详尽的；彻底的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Including all relevant possibilities, details, or items and leaving nothing important out.',
    examples: [{ english: 'The report uses the expression "exhaustive review" in its analysis.', malay: 'Merangkumi semua butiran atau kemungkinan yang berkaitan.', chinese: '报告在分析中使用了“全面详尽的审查”这一表达。' }], collocations: ['exhaustive review', 'exhaustive analysis'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'foundation', term: 'foundation', normalizedTerm: 'foundation', partOfSpeech: ['noun'], ipa: '/faʊndˈeɪʃən/',
    chineseShort: '基础；基金会', chineseExplanation: '表示“基础；基金会”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A basic principle or structure on which something is built, or an organisation established for a purpose.',
    examples: [{ english: 'The phrase "theoretical foundation" is common in formal academic or professional contexts.', malay: 'Asas yang menyokong pembinaan atau perkembangan sesuatu.', chinese: '“理论基础”这一表达常见于正式的学术或专业语境。' }], collocations: ['theoretical foundation', 'solid foundation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'hamper', term: 'hamper', normalizedTerm: 'hamper', partOfSpeech: ['verb'], ipa: '/hˈampə/',
    chineseShort: '妨碍；阻碍', chineseExplanation: '表示“妨碍；阻碍”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make progress, movement, or achievement more difficult.',
    examples: [{ english: 'Researchers may encounter the expression "hamper development" in advanced writing.', malay: 'Menghalang atau menyukarkan kemajuan.', chinese: '研究者可能会在高级写作中遇到“阻碍发展”这一表达。' }], collocations: ['hamper development', 'hamper efforts'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'hypothetical', term: 'hypothetical', normalizedTerm: 'hypothetical', partOfSpeech: ['adjective'], ipa: '/hˌaɪpəθˈɛtɪkəl/',
    chineseShort: '假设的；假定的', chineseExplanation: '表示“假设的；假定的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Based on an imagined situation or assumption rather than an established fact.',
    examples: [{ english: 'The report uses the expression "hypothetical scenario" in its analysis.', malay: 'Berdasarkan andaian atau keadaan rekaan, bukan fakta yang terbukti.', chinese: '报告在分析中使用了“假设情景”这一表达。' }], collocations: ['hypothetical scenario', 'hypothetical example'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'ideological', term: 'ideological', normalizedTerm: 'ideological', partOfSpeech: ['adjective'], ipa: '/ˌaɪdɪəlˈɒdʒɪkəl/',
    chineseShort: '意识形态的', chineseExplanation: '表示“意识形态的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to a system of political, social, economic, or philosophical beliefs.',
    examples: [{ english: 'The phrase "ideological conflict" is common in formal academic or professional contexts.', malay: 'Berkaitan dengan suatu sistem kepercayaan politik, sosial atau falsafah.', chinese: '“意识形态冲突”这一表达常见于正式的学术或专业语境。' }], collocations: ['ideological conflict', 'ideological differences'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'illuminate', term: 'illuminate', normalizedTerm: 'illuminate', partOfSpeech: ['verb'], ipa: '/ɪlˈuːmɪnˌeɪt/',
    chineseShort: '阐明；揭示', chineseExplanation: '表示“阐明；揭示”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make an idea, issue, or situation clearer by providing explanation, evidence, or insight.',
    examples: [{ english: 'Researchers may encounter the expression "illuminate the issue" in advanced writing.', malay: 'Menjelaskan sesuatu idea atau isu melalui penerangan atau bukti.', chinese: '研究者可能会在高级写作中遇到“阐明问题”这一表达。' }], collocations: ['illuminate the issue', 'illuminate a pattern'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'implication', term: 'implication', normalizedTerm: 'implication', partOfSpeech: ['noun'], ipa: '/ˌɪmplɪkˈeɪʃən/',
    chineseShort: '影响；含义', chineseExplanation: '表示“影响；含义”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A likely consequence, meaning, or conclusion that is suggested rather than always stated directly.',
    examples: [{ english: 'The report uses the expression "policy implication" in its analysis.', malay: 'Kesan, makna atau kesimpulan yang tersirat.', chinese: '报告在分析中使用了“政策影响”这一表达。' }], collocations: ['policy implication', 'broader implications'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'impose', term: 'impose', normalizedTerm: 'impose', partOfSpeech: ['verb'], ipa: '/ɪmpˈəʊz/',
    chineseShort: '强加；施行', chineseExplanation: '表示“强加；施行”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To establish a rule, tax, restriction, burden, or condition by authority.',
    examples: [{ english: 'The phrase "impose restrictions" is common in formal academic or professional contexts.', malay: 'Mengenakan peraturan, cukai atau syarat melalui kuasa.', chinese: '“施加限制”这一表达常见于正式的学术或专业语境。' }], collocations: ['impose restrictions', 'impose a tax'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'incorporate', term: 'incorporate', normalizedTerm: 'incorporate', partOfSpeech: ['verb'], ipa: '/ɪnkˈɔːpəɹˌeɪt/',
    chineseShort: '纳入；合并', chineseExplanation: '表示“纳入；合并”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To include something as part of a larger whole, system, plan, or organisation.',
    examples: [{ english: 'Researchers may encounter the expression "incorporate feedback" in advanced writing.', malay: 'Memasukkan sesuatu sebagai sebahagian daripada keseluruhan yang lebih besar.', chinese: '研究者可能会在高级写作中遇到“纳入反馈”这一表达。' }], collocations: ['incorporate feedback', 'incorporate evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'induce', term: 'induce', normalizedTerm: 'induce', partOfSpeech: ['verb'], ipa: '/ɪndjˈuːs/',
    chineseShort: '引起；促使', chineseExplanation: '表示“引起；促使”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To cause a particular condition, response, or behaviour, often through a specific influence or treatment.',
    examples: [{ english: 'The report uses the expression "induce change" in its analysis.', malay: 'Menyebabkan keadaan, tindak balas atau tingkah laku tertentu.', chinese: '报告在分析中使用了“引起变化”这一表达。' }], collocations: ['induce change', 'induce a response'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'inequality', term: 'inequality', normalizedTerm: 'inequality', partOfSpeech: ['noun'], ipa: '/ɪniːkwˈɒlɪti/',
    chineseShort: '不平等；差异', chineseExplanation: '表示“不平等；差异”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An unfair or significant difference in status, resources, opportunities, treatment, or outcomes.',
    examples: [{ english: 'The phrase "income inequality" is common in formal academic or professional contexts.', malay: 'Perbezaan yang tidak adil dalam taraf, sumber atau peluang.', chinese: '“收入不平等”这一表达常见于正式的学术或专业语境。' }], collocations: ['income inequality', 'reduce inequality'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'institution', term: 'institution', normalizedTerm: 'institution', partOfSpeech: ['noun'], ipa: '/ˌɪnstɪtjˈuːʃən/',
    chineseShort: '机构；制度', chineseExplanation: '表示“机构；制度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An established organisation or a long-standing system, practice, or social arrangement.',
    examples: [{ english: 'Researchers may encounter the expression "public institution" in advanced writing.', malay: 'Organisasi yang ditubuhkan atau sistem sosial yang telah lama wujud.', chinese: '研究者可能会在高级写作中遇到“公共机构”这一表达。' }], collocations: ['public institution', 'financial institution'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'intensify', term: 'intensify', normalizedTerm: 'intensify', partOfSpeech: ['verb'], ipa: '/ɪntˈɛnsɪfˌaɪ/',
    chineseShort: '加强；加剧', chineseExplanation: '表示“加强；加剧”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To become or make something stronger, more severe, more concentrated, or more active.',
    examples: [{ english: 'The report uses the expression "intensify pressure" in its analysis.', malay: 'Menjadi atau menjadikan sesuatu lebih kuat atau lebih serius.', chinese: '报告在分析中使用了“加大压力”这一表达。' }], collocations: ['intensify pressure', 'intensify competition'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'intensive', term: 'intensive', normalizedTerm: 'intensive', partOfSpeech: ['adjective'], ipa: '/ɪntˈɛnsɪv/',
    chineseShort: '密集的；强化的', chineseExplanation: '表示“密集的；强化的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Involving a high degree of effort, concentration, activity, or use of resources over a limited period.',
    examples: [{ english: 'The phrase "intensive training" is common in formal academic or professional contexts.', malay: 'Melibatkan usaha atau tumpuan yang sangat tinggi dalam tempoh terhad.', chinese: '“强化训练”这一表达常见于正式的学术或专业语境。' }], collocations: ['intensive training', 'intensive research'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'legitimize', term: 'legitimise', normalizedTerm: 'legitimise', partOfSpeech: ['verb'], ipa: '/lədʒˈɪtɪmˌaɪz/',
    chineseShort: '使合法；使正当化', chineseExplanation: '表示“使合法；使正当化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make an action, institution, or claim appear lawful, acceptable, or justified.',
    examples: [{ english: 'Researchers may encounter the expression "legitimise authority" in advanced writing.', malay: 'Menjadikan sesuatu sah, diterima atau wajar.', chinese: '研究者可能会在高级写作中遇到“使权威正当化”这一表达。' }], collocations: ['legitimise authority', 'legitimise a practice'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'mandatory', term: 'mandatory', normalizedTerm: 'mandatory', partOfSpeech: ['adjective'], ipa: '/mˈandətəɹi/',
    chineseShort: '强制的；必须的', chineseExplanation: '表示“强制的；必须的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Required by law, rule, policy, or formal authority rather than optional.',
    examples: [{ english: 'The report uses the expression "mandatory requirement" in its analysis.', malay: 'Wajib menurut undang-undang, peraturan atau pihak berkuasa.', chinese: '报告在分析中使用了“强制要求”这一表达。' }], collocations: ['mandatory requirement', 'mandatory reporting'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'merge', term: 'merge', normalizedTerm: 'merge', partOfSpeech: ['verb'], ipa: '/mˈɜːdʒ/',
    chineseShort: '合并；融合', chineseExplanation: '表示“合并；融合”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To combine two or more organisations, systems, ideas, or things into a single whole.',
    examples: [{ english: 'The phrase "merge departments" is common in formal academic or professional contexts.', malay: 'Menggabungkan beberapa perkara menjadi satu.', chinese: '“合并部门”这一表达常见于正式的学术或专业语境。' }], collocations: ['merge departments', 'merge datasets'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'mutual', term: 'mutual', normalizedTerm: 'mutual', partOfSpeech: ['adjective'], ipa: '/mjˈuːtʃuːəl/',
    chineseShort: '相互的；共同的', chineseExplanation: '表示“相互的；共同的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Experienced, shared, or given equally by two or more parties.',
    examples: [{ english: 'Researchers may encounter the expression "mutual benefit" in advanced writing.', malay: 'Dialami, dikongsi atau diberikan secara bersama oleh dua pihak atau lebih.', chinese: '研究者可能会在高级写作中遇到“共同利益”这一表达。' }], collocations: ['mutual benefit', 'mutual understanding'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'neutral', term: 'neutral', normalizedTerm: 'neutral', partOfSpeech: ['adjective'], ipa: '/njˈuːtɹəl/',
    chineseShort: '中立的；无偏的', chineseExplanation: '表示“中立的；无偏的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Not supporting either side in a conflict or disagreement, or not strongly affecting a result.',
    examples: [{ english: 'The report uses the expression "neutral position" in its analysis.', malay: 'Tidak memihak kepada mana-mana pihak.', chinese: '报告在分析中使用了“中立立场”这一表达。' }], collocations: ['neutral position', 'neutral language'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'notable', term: 'notable', normalizedTerm: 'notable', partOfSpeech: ['adjective'], ipa: '/nˈəʊtəbəl/',
    chineseShort: '显著的；值得注意的', chineseExplanation: '表示“显著的；值得注意的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Important, unusual, or distinctive enough to deserve attention.',
    examples: [{ english: 'The phrase "notable increase" is common in formal academic or professional contexts.', malay: 'Penting atau luar biasa sehingga wajar diberi perhatian.', chinese: '“显著增长”这一表达常见于正式的学术或专业语境。' }], collocations: ['notable increase', 'notable exception'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'oversee', term: 'oversee', normalizedTerm: 'oversee', partOfSpeech: ['verb'], ipa: '/ˌəʊvəsˈiː/',
    chineseShort: '监督；监管', chineseExplanation: '表示“监督；监管”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To supervise, manage, or be responsible for ensuring that work or a process is carried out properly.',
    examples: [{ english: 'Researchers may encounter the expression "oversee implementation" in advanced writing.', malay: 'Menyelia dan memastikan sesuatu kerja dijalankan dengan betul.', chinese: '研究者可能会在高级写作中遇到“监督实施”这一表达。' }], collocations: ['oversee implementation', 'oversee operations'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'persistent', term: 'persistent', normalizedTerm: 'persistent', partOfSpeech: ['adjective'], ipa: '/pəsˈɪstənt/',
    chineseShort: '持续的；顽固的', chineseExplanation: '表示“持续的；顽固的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Continuing for a long time or repeatedly occurring despite efforts to stop or change it.',
    examples: [{ english: 'The report uses the expression "persistent problem" in its analysis.', malay: 'Berterusan atau berulang walaupun cuba dihentikan.', chinese: '报告在分析中使用了“持续问题”这一表达。' }], collocations: ['persistent problem', 'persistent inequality'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'prioritize', term: 'prioritise', normalizedTerm: 'prioritise', partOfSpeech: ['verb'], ipa: '/pɹaɪˈɒɹɪtˌaɪz/',
    chineseShort: '优先处理；确定优先级', chineseExplanation: '表示“优先处理；确定优先级”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To decide which tasks, goals, or issues are most important and deal with them first.',
    examples: [{ english: 'The phrase "prioritise resources" is common in formal academic or professional contexts.', malay: 'Mengutamakan tugas atau isu yang paling penting.', chinese: '“优先配置资源”这一表达常见于正式的学术或专业语境。' }], collocations: ['prioritise resources', 'prioritise safety'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'prospective', term: 'prospective', normalizedTerm: 'prospective', partOfSpeech: ['adjective'], ipa: '/pɹəspˈɛktɪv/',
    chineseShort: '预期的；未来可能的', chineseExplanation: '表示“预期的；未来可能的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Expected, likely, or intended to happen or become relevant in the future.',
    examples: [{ english: 'Researchers may encounter the expression "prospective student" in advanced writing.', malay: 'Dijangka atau berkemungkinan berlaku pada masa hadapan.', chinese: '研究者可能会在高级写作中遇到“未来学生”这一表达。' }], collocations: ['prospective student', 'prospective investor'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'quantify', term: 'quantify', normalizedTerm: 'quantify', partOfSpeech: ['verb'], ipa: '/kwˈɒntɪfˌaɪ/',
    chineseShort: '量化；确定数量', chineseExplanation: '表示“量化；确定数量”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To measure or express the amount, extent, or effect of something numerically.',
    examples: [{ english: 'The report uses the expression "quantify the impact" in its analysis.', malay: 'Mengukur atau menyatakan sesuatu secara angka.', chinese: '报告在分析中使用了“量化影响”这一表达。' }], collocations: ['quantify the impact', 'quantify risk'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'regulatory', term: 'regulatory', normalizedTerm: 'regulatory', partOfSpeech: ['adjective'], ipa: '/ɹˌɛɡjuːlˈeɪtəɹi/',
    chineseShort: '监管的；法规相关的', chineseExplanation: '表示“监管的；法规相关的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to official rules, standards, or authorities that control an activity or industry.',
    examples: [{ english: 'The phrase "regulatory framework" is common in formal academic or professional contexts.', malay: 'Berkaitan dengan peraturan atau pihak berkuasa yang mengawal kegiatan.', chinese: '“监管框架”这一表达常见于正式的学术或专业语境。' }], collocations: ['regulatory framework', 'regulatory authority'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'respective', term: 'respective', normalizedTerm: 'respective', partOfSpeech: ['adjective'], ipa: '/ɹɪspˈɛktɪv/',
    chineseShort: '各自的；分别的', chineseExplanation: '表示“各自的；分别的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Belonging separately to each of two or more people or things already mentioned.',
    examples: [{ english: 'Researchers may encounter the expression "respective roles" in advanced writing.', malay: 'Milik setiap pihak yang telah disebut secara berasingan.', chinese: '研究者可能会在高级写作中遇到“各自的角色”这一表达。' }], collocations: ['respective roles', 'respective responsibilities'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'restructure', term: 'restructure', normalizedTerm: 'restructure', partOfSpeech: ['verb'], ipa: '/ɹɪstɹˈʌktʃə/',
    chineseShort: '重组；调整结构', chineseExplanation: '表示“重组；调整结构”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To organise a company, system, debt, or process differently in order to improve performance or respond to change.',
    examples: [{ english: 'The report uses the expression "restructure operations" in its analysis.', malay: 'Menyusun semula organisasi atau sistem untuk memperbaik prestasi.', chinese: '报告在分析中使用了“重组运营”这一表达。' }], collocations: ['restructure operations', 'restructure debt'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'retrieve', term: 'retrieve', normalizedTerm: 'retrieve', partOfSpeech: ['verb'], ipa: '/ɹɪtɹˈiːv/',
    chineseShort: '检索；取回', chineseExplanation: '表示“检索；取回”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To find and bring back information, data, an object, or something previously stored.',
    examples: [{ english: 'The phrase "retrieve data" is common in formal academic or professional contexts.', malay: 'Mencari dan mendapatkan semula maklumat atau benda yang disimpan.', chinese: '“检索数据”这一表达常见于正式的学术或专业语境。' }], collocations: ['retrieve data', 'retrieve information'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'reverse', term: 'reverse', normalizedTerm: 'reverse', partOfSpeech: ['verb', 'adjective'], ipa: '/ɹɪvˈɜːs/',
    chineseShort: '逆转；相反的', chineseExplanation: '表示“逆转；相反的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To change something to the opposite direction, order, effect, or decision, or having that opposite direction.',
    examples: [{ english: 'Researchers may encounter the expression "reverse the trend" in advanced writing.', malay: 'Mengubah kepada arah, susunan, kesan atau keputusan yang bertentangan.', chinese: '研究者可能会在高级写作中遇到“扭转趋势”这一表达。' }], collocations: ['reverse the trend', 'reverse a decision'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'revoke', term: 'revoke', normalizedTerm: 'revoke', partOfSpeech: ['verb'], ipa: '/ɹɪvˈəʊk/',
    chineseShort: '撤销；废止', chineseExplanation: '表示“撤销；废止”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To officially cancel a law, licence, permission, right, or decision.',
    examples: [{ english: 'The report uses the expression "revoke a licence" in its analysis.', malay: 'Membatalkan undang-undang, lesen, kebenaran atau keputusan secara rasmi.', chinese: '报告在分析中使用了“吊销许可证”这一表达。' }], collocations: ['revoke a licence', 'revoke permission'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'sanction', term: 'sanction', normalizedTerm: 'sanction', partOfSpeech: ['noun', 'verb'], ipa: '/sˈankʃən/',
    chineseShort: '制裁；批准', chineseExplanation: '表示“制裁；批准”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An official penalty used to enforce rules, or formal approval for an action.',
    examples: [{ english: 'The phrase "impose sanctions" is common in formal academic or professional contexts.', malay: 'Hukuman rasmi untuk menguatkuasakan peraturan, atau kelulusan rasmi.', chinese: '“实施制裁”这一表达常见于正式的学术或专业语境。' }], collocations: ['impose sanctions', 'sanction an action'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'selective', term: 'selective', normalizedTerm: 'selective', partOfSpeech: ['adjective'], ipa: '/sɪlˈɛktɪv/',
    chineseShort: '选择性的；有选择的', chineseExplanation: '表示“选择性的；有选择的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Applying to, choosing, or using only particular people, cases, information, or elements.',
    examples: [{ english: 'Researchers may encounter the expression "selective reporting" in advanced writing.', malay: 'Memilih atau menggunakan hanya pihak, kes atau unsur tertentu.', chinese: '研究者可能会在高级写作中遇到“选择性报告”这一表达。' }], collocations: ['selective reporting', 'selective approach'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'segregate', term: 'segregate', normalizedTerm: 'segregate', partOfSpeech: ['verb'], ipa: '/sˈɛɡɹɪɡˌeɪt/',
    chineseShort: '隔离；分开', chineseExplanation: '表示“隔离；分开”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To separate people, groups, materials, or functions from one another, often systematically.',
    examples: [{ english: 'The report uses the expression "segregate data" in its analysis.', malay: 'Mengasingkan kumpulan, bahan atau fungsi secara sistematik.', chinese: '报告在分析中使用了“分离数据”这一表达。' }], collocations: ['segregate data', 'segregate communities'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'specify', term: 'specify', normalizedTerm: 'specify', partOfSpeech: ['verb'], ipa: '/spˈɛsɪfˌaɪ/',
    chineseShort: '明确说明；规定', chineseExplanation: '表示“明确说明；规定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To state a detail, requirement, condition, quantity, or feature clearly and precisely.',
    examples: [{ english: 'The phrase "specify requirements" is common in formal academic or professional contexts.', malay: 'Menyatakan butiran atau syarat dengan jelas dan tepat.', chinese: '“明确要求”这一表达常见于正式的学术或专业语境。' }], collocations: ['specify requirements', 'specify a condition'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'stabilize', term: 'stabilise', normalizedTerm: 'stabilise', partOfSpeech: ['verb'], ipa: '/stˈeɪbɪlˌaɪz/',
    chineseShort: '使稳定；稳定下来', chineseExplanation: '表示“使稳定；稳定下来”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To make or become steady, balanced, or less likely to change suddenly.',
    examples: [{ english: 'Researchers may encounter the expression "stabilise prices" in advanced writing.', malay: 'Menjadikan atau menjadi stabil dan kurang mudah berubah.', chinese: '研究者可能会在高级写作中遇到“稳定价格”这一表达。' }], collocations: ['stabilise prices', 'stabilise the system'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'stipulate', term: 'stipulate', normalizedTerm: 'stipulate', partOfSpeech: ['verb'], ipa: '/stˈɪpjʊlˌeɪt/',
    chineseShort: '明确规定；约定', chineseExplanation: '表示“明确规定；约定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To state as an explicit condition or requirement in an agreement, rule, or arrangement.',
    examples: [{ english: 'The report uses the expression "stipulate conditions" in its analysis.', malay: 'Menetapkan syarat atau keperluan dengan jelas.', chinese: '报告在分析中使用了“规定条件”这一表达。' }], collocations: ['stipulate conditions', 'stipulate a deadline'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'streamline', term: 'streamline', normalizedTerm: 'streamline', partOfSpeech: ['verb'], ipa: '/stɹˈiːmlaɪn/',
    chineseShort: '简化；提高效率', chineseExplanation: '表示“简化；提高效率”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To simplify a process, organisation, or system so that it operates more efficiently.',
    examples: [{ english: 'The phrase "streamline procedures" is common in formal academic or professional contexts.', malay: 'Memudahkan proses atau sistem supaya lebih cekap.', chinese: '“简化程序”这一表达常见于正式的学术或专业语境。' }], collocations: ['streamline procedures', 'streamline operations'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'susceptible', term: 'susceptible', normalizedTerm: 'susceptible', partOfSpeech: ['adjective'], ipa: '/səsˈɛptəbəl/',
    chineseShort: '易受影响的；易感染的', chineseExplanation: '表示“易受影响的；易感染的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Likely or vulnerable to be affected, influenced, or harmed by a particular factor.',
    examples: [{ english: 'Researchers may encounter the expression "susceptible to bias" in advanced writing.', malay: 'Mudah dipengaruhi, terjejas atau dicederakan oleh sesuatu faktor.', chinese: '研究者可能会在高级写作中遇到“容易受偏差影响”这一表达。' }], collocations: ['susceptible to bias', 'highly susceptible'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'synthesize', term: 'synthesise', normalizedTerm: 'synthesise', partOfSpeech: ['verb'], ipa: '/sˈɪnθəsˌaɪz/',
    chineseShort: '综合；整合', chineseExplanation: '表示“综合；整合”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To combine information, evidence, or ideas from different sources into a coherent whole.',
    examples: [{ english: 'The report uses the expression "synthesise evidence" in its analysis.', malay: 'Menggabungkan maklumat atau idea menjadi satu keseluruhan yang tersusun.', chinese: '报告在分析中使用了“综合证据”这一表达。' }], collocations: ['synthesise evidence', 'synthesise findings'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'underlying', term: 'underlying', normalizedTerm: 'underlying', partOfSpeech: ['adjective'], ipa: '/ˌʌndəlˈaɪɪŋ/',
    chineseShort: '潜在的；根本的', chineseExplanation: '表示“潜在的；根本的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Existing beneath the surface or forming the basic cause, principle, or structure of something.',
    examples: [{ english: 'The phrase "underlying cause" is common in formal academic or professional contexts.', malay: 'Tersembunyi di bawah permukaan atau menjadi sebab dan asas utama.', chinese: '“根本原因”这一表达常见于正式的学术或专业语境。' }], collocations: ['underlying cause', 'underlying assumption'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'universal', term: 'universal', normalizedTerm: 'universal', partOfSpeech: ['adjective'], ipa: '/jˌuːnɪvˈɜːsəl/',
    chineseShort: '普遍的；通用的', chineseExplanation: '表示“普遍的；通用的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Applying to all people, cases, places, or situations within a broad category.',
    examples: [{ english: 'Researchers may encounter the expression "universal principle" in advanced writing.', malay: 'Terpakai kepada semua pihak atau keadaan dalam kategori yang luas.', chinese: '研究者可能会在高级写作中遇到“普遍原则”这一表达。' }], collocations: ['universal principle', 'universal access'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'uphold', term: 'uphold', normalizedTerm: 'uphold', partOfSpeech: ['verb'], ipa: '/ʌphˈəʊld/',
    chineseShort: '维护；支持', chineseExplanation: '表示“维护；支持”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To maintain, defend, or confirm a law, principle, decision, right, or standard.',
    examples: [{ english: 'The report uses the expression "uphold standards" in its analysis.', malay: 'Mempertahankan atau mengekalkan undang-undang, prinsip atau keputusan.', chinese: '报告在分析中使用了“维护标准”这一表达。' }], collocations: ['uphold standards', 'uphold a ruling'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'verify', term: 'verify', normalizedTerm: 'verify', partOfSpeech: ['verb'], ipa: '/vˈɛɹɪfˌaɪ/',
    chineseShort: '核实；验证', chineseExplanation: '表示“核实；验证”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To check or establish that information, a claim, result, or identity is accurate and true.',
    examples: [{ english: 'The phrase "verify the findings" is common in formal academic or professional contexts.', malay: 'Mengesahkan bahawa maklumat atau dakwaan adalah tepat dan benar.', chinese: '“验证研究结果”这一表达常见于正式的学术或专业语境。' }], collocations: ['verify the findings', 'verify identity'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'withdraw', term: 'withdraw', normalizedTerm: 'withdraw', partOfSpeech: ['verb'], ipa: '/wɪðdɹˈɔː/',
    chineseShort: '撤回；退出', chineseExplanation: '表示“撤回；退出”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To remove, take back, or cease participation in an agreement, process, proposal, or situation.',
    examples: [{ english: 'Researchers may encounter the expression "withdraw a proposal" in advanced writing.', malay: 'Menarik balik atau berhenti menyertai sesuatu.', chinese: '研究者可能会在高级写作中遇到“撤回提案”这一表达。' }], collocations: ['withdraw a proposal', 'withdraw from negotiations'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'abstraction', term: 'abstraction', normalizedTerm: 'abstraction', partOfSpeech: ['noun'], ipa: '/ɐbstɹˈakʃən/',
    chineseShort: '抽象概念；抽象化', chineseExplanation: '表示“抽象概念；抽象化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An idea formed by focusing on general qualities rather than concrete details or specific examples.',
    examples: [{ english: 'The report uses the expression "level of abstraction" in its analysis.', malay: 'Idea umum yang dibentuk tanpa bergantung pada butiran konkrit.', chinese: '报告在分析中使用了“抽象层次”这一表达。' }], collocations: ['level of abstraction', 'conceptual abstraction'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'accessibility', term: 'accessibility', normalizedTerm: 'accessibility', partOfSpeech: ['noun'], ipa: '/aksˌɛsəbˈɪlɪti/',
    chineseShort: '可访问性；易获得性', chineseExplanation: '表示“可访问性；易获得性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The extent to which a place, service, system, or information can be reached, used, or understood by people.',
    examples: [{ english: 'The phrase "digital accessibility" is common in formal academic or professional contexts.', malay: 'Tahap sesuatu tempat, perkhidmatan atau maklumat dapat dicapai dan digunakan.', chinese: '“数字无障碍”这一表达常见于正式的学术或专业语境。' }], collocations: ['digital accessibility', 'improve accessibility'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'accommodation', term: 'accommodation', normalizedTerm: 'accommodation', partOfSpeech: ['noun'], ipa: '/ɐkˌɒmədˈeɪʃən/',
    chineseShort: '适应；调节', chineseExplanation: '表示“适应；调节”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An adjustment made to meet a need, difference, or changed condition, especially within a system or arrangement.',
    examples: [{ english: 'Researchers may encounter the expression "reasonable accommodation" in advanced writing.', malay: 'Penyesuaian untuk memenuhi keperluan atau keadaan yang berubah.', chinese: '研究者可能会在高级写作中遇到“合理便利”这一表达。' }], collocations: ['reasonable accommodation', 'accommodation of differences'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'accumulation', term: 'accumulation', normalizedTerm: 'accumulation', partOfSpeech: ['noun'], ipa: '/ɐkjˌuːmjʊlˈeɪʃən/',
    chineseShort: '积累；累积', chineseExplanation: '表示“积累；累积”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The gradual gathering or increase of material, evidence, wealth, knowledge, or effects over time.',
    examples: [{ english: 'The report uses the expression "capital accumulation" in its analysis.', malay: 'Pengumpulan atau pertambahan secara beransur-ansur.', chinese: '报告在分析中使用了“资本积累”这一表达。' }], collocations: ['capital accumulation', 'accumulation of evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'acknowledgment', term: 'acknowledgement', normalizedTerm: 'acknowledgement', partOfSpeech: ['noun'], ipa: '/ɐknˈɒlɪdʒmənt/',
    chineseShort: '承认；确认', chineseExplanation: '表示“承认；确认”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Recognition that something exists, is true, important, or deserving of attention.',
    examples: [{ english: 'The phrase "formal acknowledgement" is common in formal academic or professional contexts.', malay: 'Pengakuan bahawa sesuatu wujud, benar atau penting.', chinese: '“正式确认”这一表达常见于正式的学术或专业语境。' }], collocations: ['formal acknowledgement', 'acknowledgement of responsibility'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'administration', term: 'administration', normalizedTerm: 'administration', partOfSpeech: ['noun'], ipa: '/ɐdmˌɪnɪstɹˈeɪʃən/',
    chineseShort: '管理；行政机构', chineseExplanation: '表示“管理；行政机构”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The management of an organisation or system, or the officials responsible for carrying it out.',
    examples: [{ english: 'Researchers may encounter the expression "public administration" in advanced writing.', malay: 'Pengurusan organisasi atau sistem, atau pihak yang menguruskannya.', chinese: '研究者可能会在高级写作中遇到“公共行政”这一表达。' }], collocations: ['public administration', 'administration of policy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'adoption', term: 'adoption', normalizedTerm: 'adoption', partOfSpeech: ['noun'], ipa: '/ɐdˈɒpʃən/',
    chineseShort: '采用；采纳', chineseExplanation: '表示“采用；采纳”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of accepting and beginning to use an idea, technology, policy, method, or practice.',
    examples: [{ english: 'The report uses the expression "technology adoption" in its analysis.', malay: 'Penerimaan dan penggunaan sesuatu idea, dasar atau kaedah.', chinese: '报告在分析中使用了“技术采用”这一表达。' }], collocations: ['technology adoption', 'policy adoption'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'advocacy', term: 'advocacy', normalizedTerm: 'advocacy', partOfSpeech: ['noun'], ipa: '/ˈadvəkəsi/',
    chineseShort: '倡导；拥护', chineseExplanation: '表示“倡导；拥护”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Public or organised support for a cause, policy, group, or proposed course of action.',
    examples: [{ english: 'The phrase "policy advocacy" is common in formal academic or professional contexts.', malay: 'Sokongan awam atau tersusun terhadap sesuatu perjuangan atau dasar.', chinese: '“政策倡导”这一表达常见于正式的学术或专业语境。' }], collocations: ['policy advocacy', 'public advocacy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'alignment', term: 'alignment', normalizedTerm: 'alignment', partOfSpeech: ['noun'], ipa: '/ɐlˈaɪnmənt/',
    chineseShort: '一致；协调', chineseExplanation: '表示“一致；协调”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A state in which goals, interests, actions, or components are properly coordinated or brought into agreement.',
    examples: [{ english: 'Researchers may encounter the expression "strategic alignment" in advanced writing.', malay: 'Keadaan matlamat, kepentingan atau tindakan diselaraskan.', chinese: '研究者可能会在高级写作中遇到“战略一致”这一表达。' }], collocations: ['strategic alignment', 'alignment of incentives'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'allocation', term: 'allocation', normalizedTerm: 'allocation', partOfSpeech: ['noun'], ipa: '/ˌaləkˈeɪʃən/',
    chineseShort: '分配；配置', chineseExplanation: '表示“分配；配置”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of distributing money, time, resources, responsibilities, or capacity among competing uses.',
    examples: [{ english: 'The report uses the expression "resource allocation" in its analysis.', malay: 'Proses mengagihkan wang, masa, sumber atau tanggungjawab.', chinese: '报告在分析中使用了“资源配置”这一表达。' }], collocations: ['resource allocation', 'budget allocation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'appraisal', term: 'appraisal', normalizedTerm: 'appraisal', partOfSpeech: ['noun'], ipa: '/ɐpɹˈeɪzəl/',
    chineseShort: '评估；评价', chineseExplanation: '表示“评估；评价”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A careful assessment of the value, quality, performance, condition, or significance of something.',
    examples: [{ english: 'The phrase "performance appraisal" is common in formal academic or professional contexts.', malay: 'Penilaian teliti terhadap nilai, mutu atau prestasi sesuatu.', chinese: '“绩效评估”这一表达常见于正式的学术或专业语境。' }], collocations: ['performance appraisal', 'critical appraisal'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'authorization', term: 'authorisation', normalizedTerm: 'authorisation', partOfSpeech: ['noun'], ipa: '/ˌɔːθəɹaɪzˈeɪʃən/',
    chineseShort: '授权；批准', chineseExplanation: '表示“授权；批准”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Official permission or authority to perform an action, access a resource, or make a decision.',
    examples: [{ english: 'Researchers may encounter the expression "access authorisation" in advanced writing.', malay: 'Kebenaran atau kuasa rasmi untuk melakukan sesuatu.', chinese: '研究者可能会在高级写作中遇到“访问授权”这一表达。' }], collocations: ['access authorisation', 'formal authorisation'], level: 4, cefr: 'C1', categories: ['Technology', 'Business'],
  },
  {
    id: 'classification', term: 'classification', normalizedTerm: 'classification', partOfSpeech: ['noun'], ipa: '/klˌasɪfɪkˈeɪʃən/',
    chineseShort: '分类；归类体系', chineseExplanation: '表示“分类；归类体系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process or system of arranging things into categories according to shared characteristics.',
    examples: [{ english: 'The report uses the expression "classification system" in its analysis.', malay: 'Proses menyusun perkara ke dalam kategori berdasarkan ciri yang sama.', chinese: '报告在分析中使用了“分类系统”这一表达。' }], collocations: ['classification system', 'data classification'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'complexity', term: 'complexity', normalizedTerm: 'complexity', partOfSpeech: ['noun'], ipa: '/kəmplˈɛksɪti/',
    chineseShort: '复杂性', chineseExplanation: '表示“复杂性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The condition of having many interconnected parts, factors, or relationships that make something difficult to understand or manage.',
    examples: [{ english: 'The phrase "system complexity" is common in formal academic or professional contexts.', malay: 'Keadaan mempunyai banyak bahagian atau hubungan yang saling berkait.', chinese: '“系统复杂性”这一表达常见于正式的学术或专业语境。' }], collocations: ['system complexity', 'increasing complexity'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'constraint', term: 'constraint', normalizedTerm: 'constraint', partOfSpeech: ['noun'], ipa: '/kənstɹˈeɪnt/',
    chineseShort: '限制；约束条件', chineseExplanation: '表示“限制；约束条件”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A factor, rule, or condition that limits choices, resources, behaviour, or possible outcomes.',
    examples: [{ english: 'Researchers may encounter the expression "budget constraint" in advanced writing.', malay: 'Faktor atau syarat yang mengehadkan pilihan atau hasil.', chinese: '研究者可能会在高级写作中遇到“预算约束”这一表达。' }], collocations: ['budget constraint', 'major constraint'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'coordination', term: 'coordination', normalizedTerm: 'coordination', partOfSpeech: ['noun'], ipa: '/kəʊˈɔːdɪnˈeɪʃən/',
    chineseShort: '协调；统筹', chineseExplanation: '表示“协调；统筹”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The organisation of people, activities, or resources so that they work together effectively and efficiently.',
    examples: [{ english: 'The report uses the expression "policy coordination" in its analysis.', malay: 'Penyelarasan manusia, kegiatan atau sumber agar berfungsi bersama dengan cekap.', chinese: '报告在分析中使用了“政策协调”这一表达。' }], collocations: ['policy coordination', 'improve coordination'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'correlation', term: 'correlation', normalizedTerm: 'correlation', partOfSpeech: ['noun'], ipa: '/kˌɒɹɪlˈeɪʃən/',
    chineseShort: '相关性；相互关系', chineseExplanation: '表示“相关性；相互关系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A statistical or observable relationship in which two variables or factors tend to vary together.',
    examples: [{ english: 'The phrase "strong correlation" is common in formal academic or professional contexts.', malay: 'Hubungan antara dua pemboleh ubah yang cenderung berubah bersama.', chinese: '“强相关性”这一表达常见于正式的学术或专业语境。' }], collocations: ['strong correlation', 'correlation between variables'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'deficit', term: 'deficit', normalizedTerm: 'deficit', partOfSpeech: ['noun'], ipa: '/dˈɛfɪsˌɪt/',
    chineseShort: '赤字；不足', chineseExplanation: '表示“赤字；不足”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The amount by which something falls short of what is required, expected, or available, especially in finance.',
    examples: [{ english: 'Researchers may encounter the expression "budget deficit" in advanced writing.', malay: 'Jumlah kekurangan berbanding keperluan atau jangkaan.', chinese: '研究者可能会在高级写作中遇到“预算赤字”这一表达。' }], collocations: ['budget deficit', 'skills deficit'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'deviation', term: 'deviation', normalizedTerm: 'deviation', partOfSpeech: ['noun'], ipa: '/dˌiːvɪˈeɪʃən/',
    chineseShort: '偏离；偏差', chineseExplanation: '表示“偏离；偏差”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A difference from an expected value, standard, route, behaviour, or pattern.',
    examples: [{ english: 'The report uses the expression "standard deviation" in its analysis.', malay: 'Penyimpangan daripada nilai, piawaian, laluan atau pola yang dijangka.', chinese: '报告在分析中使用了“标准差”这一表达。' }], collocations: ['standard deviation', 'significant deviation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'diversification', term: 'diversification', normalizedTerm: 'diversification', partOfSpeech: ['noun'], ipa: '/daɪvˌɜːsɪfɪkˈeɪʃən/',
    chineseShort: '多元化；多样化', chineseExplanation: '表示“多元化；多样化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of spreading activities, investments, products, or risks across different areas to reduce dependence on one source.',
    examples: [{ english: 'The phrase "economic diversification" is common in formal academic or professional contexts.', malay: 'Proses mempelbagaikan kegiatan atau pelaburan untuk mengurangkan risiko.', chinese: '“经济多元化”这一表达常见于正式的学术或专业语境。' }], collocations: ['economic diversification', 'portfolio diversification'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'diversify', term: 'diversify', normalizedTerm: 'diversify', partOfSpeech: ['verb'], ipa: '/daɪvˈɜːsɪfˌaɪ/',
    chineseShort: '使多元化；扩大种类', chineseExplanation: '表示“使多元化；扩大种类”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To expand into different activities, products, markets, or sources in order to reduce risk or dependence.',
    examples: [{ english: 'Researchers may encounter the expression "diversify the economy" in advanced writing.', malay: 'Mempelbagaikan kegiatan, produk atau sumber untuk mengurangkan pergantungan.', chinese: '研究者可能会在高级写作中遇到“使经济多元化”这一表达。' }], collocations: ['diversify the economy', 'diversify investments'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'ecology', term: 'ecology', normalizedTerm: 'ecology', partOfSpeech: ['noun'], ipa: '/ɛkˈɒlədʒi/',
    chineseShort: '生态学；生态关系', chineseExplanation: '表示“生态学；生态关系”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The study of relationships among organisms and their environment, or the pattern of those relationships in a particular setting.',
    examples: [{ english: 'The report uses the expression "urban ecology" in its analysis.', malay: 'Kajian hubungan antara organisma dengan alam sekitarnya.', chinese: '报告在分析中使用了“城市生态学”这一表达。' }], collocations: ['urban ecology', 'ecology of a system'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'emission', term: 'emission', normalizedTerm: 'emission', partOfSpeech: ['noun'], ipa: '/ɪmˈɪʃən/',
    chineseShort: '排放；排放物', chineseExplanation: '表示“排放；排放物”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The release of gas, radiation, heat, or other substances into the environment.',
    examples: [{ english: 'The phrase "carbon emissions" is common in formal academic or professional contexts.', malay: 'Pelepasan gas, sinaran, haba atau bahan lain ke alam sekitar.', chinese: '“碳排放”这一表达常见于正式的学术或专业语境。' }], collocations: ['carbon emissions', 'reduce emissions'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'endorsement', term: 'endorsement', normalizedTerm: 'endorsement', partOfSpeech: ['noun'], ipa: '/ɛndˈɔːsmənt/',
    chineseShort: '支持；认可', chineseExplanation: '表示“支持；认可”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Public, formal, or professional approval of a person, proposal, policy, product, or claim.',
    examples: [{ english: 'Researchers may encounter the expression "official endorsement" in advanced writing.', malay: 'Sokongan atau kelulusan awam, rasmi atau profesional.', chinese: '研究者可能会在高级写作中遇到“官方认可”这一表达。' }], collocations: ['official endorsement', 'public endorsement'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'evaluation', term: 'evaluation', normalizedTerm: 'evaluation', partOfSpeech: ['noun'], ipa: '/ɪvˌaljuːˈeɪʃən/',
    chineseShort: '评估；评价', chineseExplanation: '表示“评估；评价”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A systematic judgement of the quality, effectiveness, value, or impact of a policy, programme, method, or result.',
    examples: [{ english: 'The report uses the expression "programme evaluation" in its analysis.', malay: 'Penilaian sistematik terhadap mutu, keberkesanan, nilai atau kesan.', chinese: '报告在分析中使用了“项目评估”这一表达。' }], collocations: ['programme evaluation', 'evaluation criteria'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'exploitation', term: 'exploitation', normalizedTerm: 'exploitation', partOfSpeech: ['noun'], ipa: '/ɛksplɔɪtˈeɪʃən/',
    chineseShort: '利用；剥削', chineseExplanation: '表示“利用；剥削”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The use of a resource or opportunity for benefit, or unfair treatment of people for another party\'s advantage.',
    examples: [{ english: 'The phrase "resource exploitation" is common in formal academic or professional contexts.', malay: 'Penggunaan sumber untuk manfaat, atau penindasan seseorang demi keuntungan pihak lain.', chinese: '“资源开发”这一表达常见于正式的学术或专业语境。' }], collocations: ['resource exploitation', 'labour exploitation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'facilitation', term: 'facilitation', normalizedTerm: 'facilitation', partOfSpeech: ['noun'], ipa: '/fəsˌɪlɪtˈeɪʃən/',
    chineseShort: '促进；协助', chineseExplanation: '表示“促进；协助”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of making a process, discussion, activity, or outcome easier to achieve.',
    examples: [{ english: 'Researchers may encounter the expression "trade facilitation" in advanced writing.', malay: 'Tindakan memudahkan sesuatu proses, perbincangan atau hasil.', chinese: '研究者可能会在高级写作中遇到“贸易便利化”这一表达。' }], collocations: ['trade facilitation', 'facilitation of learning'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'feasibility', term: 'feasibility', normalizedTerm: 'feasibility', partOfSpeech: ['noun'], ipa: '/fˌiːzəbˈɪlɪti/',
    chineseShort: '可行性', chineseExplanation: '表示“可行性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The degree to which a plan, proposal, project, or method can realistically be carried out successfully.',
    examples: [{ english: 'The report uses the expression "technical feasibility" in its analysis.', malay: 'Tahap sesuatu rancangan dapat dilaksanakan secara realistik dan berjaya.', chinese: '报告在分析中使用了“技术可行性”这一表达。' }], collocations: ['technical feasibility', 'feasibility study'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'formulation', term: 'formulation', normalizedTerm: 'formulation', partOfSpeech: ['noun'], ipa: '/fˌɔːmjʊlˈeɪʃən/',
    chineseShort: '制定；表述', chineseExplanation: '表示“制定；表述”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of developing a policy, theory, plan, expression, or product in a systematic form.',
    examples: [{ english: 'The phrase "policy formulation" is common in formal academic or professional contexts.', malay: 'Proses merangka dasar, teori, rancangan atau produk secara sistematik.', chinese: '“政策制定”这一表达常见于正式的学术或专业语境。' }], collocations: ['policy formulation', 'theoretical formulation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'globalization', term: 'globalisation', normalizedTerm: 'globalisation', partOfSpeech: ['noun'], ipa: '/ɡlˌəʊbəlaɪzˈeɪʃən/',
    chineseShort: '全球化', chineseExplanation: '表示“全球化”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The increasing international integration of economies, societies, technologies, communication, and institutions.',
    examples: [{ english: 'Researchers may encounter the expression "economic globalisation" in advanced writing.', malay: 'Peningkatan integrasi antarabangsa dalam ekonomi, masyarakat dan teknologi.', chinese: '研究者可能会在高级写作中遇到“经济全球化”这一表达。' }], collocations: ['economic globalisation', 'effects of globalisation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'hierarchical', term: 'hierarchical', normalizedTerm: 'hierarchical', partOfSpeech: ['adjective'], ipa: '/haɪəɹˈɑːkɪkəl/',
    chineseShort: '层级的；等级制度的', chineseExplanation: '表示“层级的；等级制度的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Organised into levels of authority, importance, or classification arranged from higher to lower.',
    examples: [{ english: 'The report uses the expression "hierarchical structure" in its analysis.', malay: 'Disusun dalam beberapa peringkat kuasa atau kepentingan.', chinese: '报告在分析中使用了“层级结构”这一表达。' }], collocations: ['hierarchical structure', 'hierarchical organisation'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'implementation', term: 'implementation', normalizedTerm: 'implementation', partOfSpeech: ['noun'], ipa: '/ˌɪmplɪməntˈeɪʃən/',
    chineseShort: '实施；执行', chineseExplanation: '表示“实施；执行”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of putting a decision, plan, policy, system, or method into practical operation.',
    examples: [{ english: 'The phrase "policy implementation" is common in formal academic or professional contexts.', malay: 'Proses melaksanakan keputusan, rancangan, dasar atau sistem.', chinese: '“政策实施”这一表达常见于正式的学术或专业语境。' }], collocations: ['policy implementation', 'implementation process'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'inference', term: 'inference', normalizedTerm: 'inference', partOfSpeech: ['noun'], ipa: '/ˈɪnfəɹəns/',
    chineseShort: '推断；推论', chineseExplanation: '表示“推断；推论”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A conclusion reached from evidence and reasoning rather than stated directly or observed with certainty.',
    examples: [{ english: 'Researchers may encounter the expression "draw an inference" in advanced writing.', malay: 'Kesimpulan yang dibuat berdasarkan bukti dan penaakulan.', chinese: '研究者可能会在高级写作中遇到“作出推断”这一表达。' }], collocations: ['draw an inference', 'statistical inference'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'inhibition', term: 'inhibition', normalizedTerm: 'inhibition', partOfSpeech: ['noun'], ipa: '/ɪnhɪbˈɪʃən/',
    chineseShort: '抑制；阻碍', chineseExplanation: '表示“抑制；阻碍”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A factor or process that restrains, prevents, or slows an action, response, development, or expression.',
    examples: [{ english: 'The report uses the expression "social inhibition" in its analysis.', malay: 'Faktor atau proses yang menyekat atau memperlahankan tindakan dan perkembangan.', chinese: '报告在分析中使用了“社会抑制”这一表达。' }], collocations: ['social inhibition', 'inhibition of growth'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'initiative', term: 'initiative', normalizedTerm: 'initiative', partOfSpeech: ['noun'], ipa: '/ɪnˈɪʃiətˌɪv/',
    chineseShort: '倡议；主动性', chineseExplanation: '表示“倡议；主动性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A new plan or action intended to solve a problem or achieve a goal, or the ability to act independently.',
    examples: [{ english: 'The phrase "policy initiative" is common in formal academic or professional contexts.', malay: 'Rancangan baharu untuk mencapai matlamat, atau kebolehan bertindak sendiri.', chinese: '“政策倡议”这一表达常见于正式的学术或专业语境。' }], collocations: ['policy initiative', 'show initiative'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'legitimacy', term: 'legitimacy', normalizedTerm: 'legitimacy', partOfSpeech: ['noun'], ipa: '/lədʒˈɪtɪməsi/',
    chineseShort: '合法性；正当性', chineseExplanation: '表示“合法性；正当性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being lawful, justified, accepted, or recognised as having proper authority.',
    examples: [{ english: 'Researchers may encounter the expression "political legitimacy" in advanced writing.', malay: 'Sifat sah, wajar atau diterima sebagai mempunyai kuasa yang betul.', chinese: '研究者可能会在高级写作中遇到“政治合法性”这一表达。' }], collocations: ['political legitimacy', 'question legitimacy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'marginalize', term: 'marginalise', normalizedTerm: 'marginalise', partOfSpeech: ['verb'], ipa: '/mˈɑːdʒɪnəlˌaɪz/',
    chineseShort: '边缘化；忽视', chineseExplanation: '表示“边缘化；忽视”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'To treat a person, group, or issue as unimportant, less influential, or outside the centre of participation.',
    examples: [{ english: 'The report uses the expression "marginalise communities" in its analysis.', malay: 'Meminggirkan seseorang, kumpulan atau isu sebagai tidak penting.', chinese: '报告在分析中使用了“边缘化社区”这一表达。' }], collocations: ['marginalise communities', 'marginalise an issue'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'mediation', term: 'mediation', normalizedTerm: 'mediation', partOfSpeech: ['noun'], ipa: '/mˌiːdɪˈeɪʃən/',
    chineseShort: '调解；斡旋', chineseExplanation: '表示“调解；斡旋”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A process in which a neutral third party helps opposing sides communicate and reach an agreement.',
    examples: [{ english: 'The phrase "formal mediation" is common in formal academic or professional contexts.', malay: 'Proses pihak ketiga yang neutral membantu pihak bertelagah mencapai persetujuan.', chinese: '“正式调解”这一表达常见于正式的学术或专业语境。' }], collocations: ['formal mediation', 'mediation process'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'methodological', term: 'methodological', normalizedTerm: 'methodological', partOfSpeech: ['adjective'], ipa: '/mˌɛθədəlˈɒdʒɪkəl/',
    chineseShort: '方法论的；研究方法相关的', chineseExplanation: '表示“方法论的；研究方法相关的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to the methods, principles, and procedures used in research or systematic investigation.',
    examples: [{ english: 'Researchers may encounter the expression "methodological limitation" in advanced writing.', malay: 'Berkaitan dengan kaedah dan prosedur penyelidikan sistematik.', chinese: '研究者可能会在高级写作中遇到“方法论局限”这一表达。' }], collocations: ['methodological limitation', 'methodological approach'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'modification', term: 'modification', normalizedTerm: 'modification', partOfSpeech: ['noun'], ipa: '/mˌɒdɪfɪkˈeɪʃən/',
    chineseShort: '修改；调整', chineseExplanation: '表示“修改；调整”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A change made to improve, adapt, restrict, or alter something without replacing it completely.',
    examples: [{ english: 'The report uses the expression "minor modification" in its analysis.', malay: 'Perubahan untuk memperbaik atau menyesuaikan sesuatu tanpa menggantikannya sepenuhnya.', chinese: '报告在分析中使用了“小幅修改”这一表达。' }], collocations: ['minor modification', 'policy modification'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'negotiation', term: 'negotiation', normalizedTerm: 'negotiation', partOfSpeech: ['noun'], ipa: '/nɪɡˌəʊʃɪˈeɪʃən/',
    chineseShort: '谈判；协商', chineseExplanation: '表示“谈判；协商”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A discussion between parties with different interests intended to reach an agreement or acceptable compromise.',
    examples: [{ english: 'The phrase "formal negotiation" is common in formal academic or professional contexts.', malay: 'Perbincangan antara pihak berbeza untuk mencapai persetujuan.', chinese: '“正式谈判”这一表达常见于正式的学术或专业语境。' }], collocations: ['formal negotiation', 'negotiation process'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'objectivity', term: 'objectivity', normalizedTerm: 'objectivity', partOfSpeech: ['noun'], ipa: '/ɒbdʒɪktˈɪvɪti/',
    chineseShort: '客观性', chineseExplanation: '表示“客观性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of making judgements based on evidence and observable facts rather than personal feelings or bias.',
    examples: [{ english: 'Researchers may encounter the expression "maintain objectivity" in advanced writing.', malay: 'Sifat menilai berdasarkan bukti dan fakta tanpa dipengaruhi perasaan atau prasangka.', chinese: '研究者可能会在高级写作中遇到“保持客观性”这一表达。' }], collocations: ['maintain objectivity', 'scientific objectivity'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'obsolescence', term: 'obsolescence', normalizedTerm: 'obsolescence', partOfSpeech: ['noun'], ipa: '/ˌɒbsəlˈɛsəns/',
    chineseShort: '过时；淘汰', chineseExplanation: '表示“过时；淘汰”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The condition of becoming outdated, no longer useful, or replaced by newer technology or practices.',
    examples: [{ english: 'The report uses the expression "technological obsolescence" in its analysis.', malay: 'Keadaan menjadi lapuk atau digantikan oleh teknologi atau amalan baharu.', chinese: '报告在分析中使用了“技术过时”这一表达。' }], collocations: ['technological obsolescence', 'planned obsolescence'], level: 4, cefr: 'C1', categories: ['Technology', 'Business'],
  },
  {
    id: 'persuasive', term: 'persuasive', normalizedTerm: 'persuasive', partOfSpeech: ['adjective'], ipa: '/pəswˈeɪsɪv/',
    chineseShort: '有说服力的', chineseExplanation: '表示“有说服力的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to convince people through effective reasoning, evidence, language, or presentation.',
    examples: [{ english: 'The phrase "persuasive argument" is common in formal academic or professional contexts.', malay: 'Mampu meyakinkan melalui alasan, bukti atau penyampaian yang berkesan.', chinese: '“有说服力的论点”这一表达常见于正式的学术或专业语境。' }], collocations: ['persuasive argument', 'persuasive evidence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'plausibility', term: 'plausibility', normalizedTerm: 'plausibility', partOfSpeech: ['noun'], ipa: '/plˌɔːzəbˈɪlɪti/',
    chineseShort: '合理性；可信程度', chineseExplanation: '表示“合理性；可信程度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of seeming reasonable, believable, or likely to be true based on available information.',
    examples: [{ english: 'Researchers may encounter the expression "assess plausibility" in advanced writing.', malay: 'Sifat kelihatan munasabah, boleh dipercayai atau mungkin benar.', chinese: '研究者可能会在高级写作中遇到“评估可信度”这一表达。' }], collocations: ['assess plausibility', 'plausibility of a claim'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'precedent', term: 'precedent', normalizedTerm: 'precedent', partOfSpeech: ['noun'], ipa: '/pɹˈɛsɪdənt/',
    chineseShort: '先例；前例', chineseExplanation: '表示“先例；前例”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An earlier case, decision, or event used as an example or authority for later situations.',
    examples: [{ english: 'The report uses the expression "legal precedent" in its analysis.', malay: 'Kes atau keputusan terdahulu yang menjadi contoh atau sandaran.', chinese: '报告在分析中使用了“法律先例”这一表达。' }], collocations: ['legal precedent', 'set a precedent'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'predominance', term: 'predominance', normalizedTerm: 'predominance', partOfSpeech: ['noun'], ipa: '/pɹɪdˈɒmɪnəns/',
    chineseShort: '主导地位；占优势', chineseExplanation: '表示“主导地位；占优势”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The state of being more powerful, common, influential, or important than others.',
    examples: [{ english: 'The phrase "market predominance" is common in formal academic or professional contexts.', malay: 'Keadaan lebih berkuasa, umum atau penting daripada yang lain.', chinese: '“市场主导地位”这一表达常见于正式的学术或专业语境。' }], collocations: ['market predominance', 'predominance of one group'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'presumption', term: 'presumption', normalizedTerm: 'presumption', partOfSpeech: ['noun'], ipa: '/pɹɪsˈʌmpʃən/',
    chineseShort: '推定；假定', chineseExplanation: '表示“推定；假定”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A belief accepted as likely or true until evidence shows otherwise, especially in formal reasoning or law.',
    examples: [{ english: 'Researchers may encounter the expression "presumption of innocence" in advanced writing.', malay: 'Anggapan yang diterima sebagai benar sehingga dibuktikan sebaliknya.', chinese: '研究者可能会在高级写作中遇到“无罪推定”这一表达。' }], collocations: ['presumption of innocence', 'strong presumption'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'prevalence', term: 'prevalence', normalizedTerm: 'prevalence', partOfSpeech: ['noun'], ipa: '/pɹˈɛvələns/',
    chineseShort: '普遍程度；流行率', chineseExplanation: '表示“普遍程度；流行率”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The extent to which a condition, behaviour, belief, or phenomenon is common within a population or context.',
    examples: [{ english: 'The report uses the expression "high prevalence" in its analysis.', malay: 'Tahap kelaziman sesuatu keadaan atau fenomena dalam sesuatu kelompok.', chinese: '报告在分析中使用了“高流行率”这一表达。' }], collocations: ['high prevalence', 'prevalence of inequality'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'principled', term: 'principled', normalizedTerm: 'principled', partOfSpeech: ['adjective'], ipa: '/pɹˈɪnsɪpəld/',
    chineseShort: '有原则的；基于原则的', chineseExplanation: '表示“有原则的；基于原则的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Acting according to clear moral, professional, or intellectual principles rather than convenience.',
    examples: [{ english: 'The phrase "principled approach" is common in formal academic or professional contexts.', malay: 'Bertindak menurut prinsip moral atau profesional yang jelas.', chinese: '“有原则的方法”这一表达常见于正式的学术或专业语境。' }], collocations: ['principled approach', 'principled decision'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'proportionate', term: 'proportionate', normalizedTerm: 'proportionate', partOfSpeech: ['adjective'], ipa: '/pɹəpˈɔːʃənət/',
    chineseShort: '成比例的；相称的', chineseExplanation: '表示“成比例的；相称的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Appropriate in size, degree, or severity when compared with something else.',
    examples: [{ english: 'Researchers may encounter the expression "proportionate response" in advanced writing.', malay: 'Sesuai dari segi saiz, kadar atau tahap berbanding sesuatu yang lain.', chinese: '研究者可能会在高级写作中遇到“相称的回应”这一表达。' }], collocations: ['proportionate response', 'proportionate measure'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'provocation', term: 'provocation', normalizedTerm: 'provocation', partOfSpeech: ['noun'], ipa: '/pɹɒvəkˈeɪʃən/',
    chineseShort: '挑衅；刺激因素', chineseExplanation: '表示“挑衅；刺激因素”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An action or statement that deliberately causes anger, conflict, or a strong reaction.',
    examples: [{ english: 'The report uses the expression "deliberate provocation" in its analysis.', malay: 'Tindakan atau kenyataan yang sengaja mencetuskan kemarahan atau konflik.', chinese: '报告在分析中使用了“蓄意挑衅”这一表达。' }], collocations: ['deliberate provocation', 'respond to provocation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'pragmatism', term: 'pragmatism', normalizedTerm: 'pragmatism', partOfSpeech: ['noun'], ipa: '/pɹˈaɡmətˌɪzəm/',
    chineseShort: '实用主义；务实态度', chineseExplanation: '表示“实用主义；务实态度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'An approach that focuses on practical results and workable solutions rather than abstract principles alone.',
    examples: [{ english: 'The phrase "political pragmatism" is common in formal academic or professional contexts.', malay: 'Pendekatan yang mengutamakan hasil praktikal dan penyelesaian yang boleh dilaksanakan.', chinese: '“政治务实主义”这一表达常见于正式的学术或专业语境。' }], collocations: ['political pragmatism', 'pragmatism in policy'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'rationality', term: 'rationality', normalizedTerm: 'rationality', partOfSpeech: ['noun'], ipa: '/ɹˌaʃənˈalɪti/',
    chineseShort: '理性；合理性', chineseExplanation: '表示“理性；合理性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being based on logic, consistent reasoning, and sensible judgement.',
    examples: [{ english: 'Researchers may encounter the expression "economic rationality" in advanced writing.', malay: 'Sifat berasaskan logik, penaakulan yang konsisten dan pertimbangan waras.', chinese: '研究者可能会在高级写作中遇到“经济理性”这一表达。' }], collocations: ['economic rationality', 'question the rationality'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'reconciliation', term: 'reconciliation', normalizedTerm: 'reconciliation', partOfSpeech: ['noun'], ipa: '/ɹˌɛkənsˌɪlɪˈeɪʃən/',
    chineseShort: '和解；调和', chineseExplanation: '表示“和解；调和”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The restoration of friendly relations or the process of making apparently conflicting ideas or records consistent.',
    examples: [{ english: 'The report uses the expression "national reconciliation" in its analysis.', malay: 'Pemulihan hubungan baik atau penyelarasan perkara yang bercanggah.', chinese: '报告在分析中使用了“国家和解”这一表达。' }], collocations: ['national reconciliation', 'data reconciliation'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'redundancy', term: 'redundancy', normalizedTerm: 'redundancy', partOfSpeech: ['noun'], ipa: '/ɹɪdˈʌndənsi/',
    chineseShort: '冗余；多余', chineseExplanation: '表示“冗余；多余”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The condition of being unnecessary because something is duplicated, no longer needed, or included as backup.',
    examples: [{ english: 'The phrase "data redundancy" is common in formal academic or professional contexts.', malay: 'Keadaan tidak diperlukan kerana berulang, digantikan atau sekadar menjadi sandaran.', chinese: '“数据冗余”这一表达常见于正式的学术或专业语境。' }], collocations: ['data redundancy', 'eliminate redundancy'], level: 4, cefr: 'C1', categories: ['Technology', 'Business'],
  },
  {
    id: 'refinement', term: 'refinement', normalizedTerm: 'refinement', partOfSpeech: ['noun'], ipa: '/ɹɪfˈaɪnmənt/',
    chineseShort: '改进；精炼', chineseExplanation: '表示“改进；精炼”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A small improvement or adjustment that makes an idea, method, system, or product more precise or effective.',
    examples: [{ english: 'Researchers may encounter the expression "further refinement" in advanced writing.', malay: 'Pembaikan kecil yang menjadikan sesuatu lebih tepat atau berkesan.', chinese: '研究者可能会在高级写作中遇到“进一步改进”这一表达。' }], collocations: ['further refinement', 'methodological refinement'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'replication', term: 'replication', normalizedTerm: 'replication', partOfSpeech: ['noun'], ipa: '/ɹˌɛplɪkˈeɪʃən/',
    chineseShort: '复制；重复验证', chineseExplanation: '表示“复制；重复验证”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of reproducing a study, result, system, or object in order to confirm or recreate it.',
    examples: [{ english: 'The report uses the expression "study replication" in its analysis.', malay: 'Proses mengulangi kajian atau menghasilkan semula sesuatu untuk mengesahkan hasil.', chinese: '报告在分析中使用了“研究重复验证”这一表达。' }], collocations: ['study replication', 'replication of results'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'restraint', term: 'restraint', normalizedTerm: 'restraint', partOfSpeech: ['noun'], ipa: '/ɹɪstɹˈeɪnt/',
    chineseShort: '克制；限制', chineseExplanation: '表示“克制；限制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Control over behaviour or spending, or a measure that restricts freedom, growth, or activity.',
    examples: [{ english: 'The phrase "exercise restraint" is common in formal academic or professional contexts.', malay: 'Kawalan terhadap tingkah laku atau langkah yang mengehadkan kebebasan dan kegiatan.', chinese: '“保持克制”这一表达常见于正式的学术或专业语境。' }], collocations: ['exercise restraint', 'fiscal restraint'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'retention', term: 'retention', normalizedTerm: 'retention', partOfSpeech: ['noun'], ipa: '/ɹɪtˈɛnʃən/',
    chineseShort: '保留；留存', chineseExplanation: '表示“保留；留存”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability or process of keeping people, information, customers, knowledge, or resources over time.',
    examples: [{ english: 'Researchers may encounter the expression "employee retention" in advanced writing.', malay: 'Proses atau keupayaan mengekalkan manusia, maklumat atau sumber.', chinese: '研究者可能会在高级写作中遇到“员工留任”这一表达。' }], collocations: ['employee retention', 'data retention'], level: 4, cefr: 'C1', categories: ['Business', 'Technology'],
  },
  {
    id: 'rigor', term: 'rigor', normalizedTerm: 'rigor', partOfSpeech: ['noun'], ipa: '/ɹˈɪɡə/',
    chineseShort: '严谨；严格性', chineseExplanation: '表示“严谨；严格性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being extremely thorough, precise, logically sound, and demanding in method or standards.',
    examples: [{ english: 'The report uses the expression "academic rigor" in its analysis.', malay: 'Sifat sangat teliti, tepat dan kukuh dari segi kaedah.', chinese: '报告在分析中使用了“学术严谨性”这一表达。' }], collocations: ['academic rigor', 'methodological rigor'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'salience', term: 'salience', normalizedTerm: 'salience', partOfSpeech: ['noun'], ipa: '/sˈeɪliəns/',
    chineseShort: '显著性；突出程度', chineseExplanation: '表示“显著性；突出程度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being especially noticeable, important, or prominent in a particular context.',
    examples: [{ english: 'The phrase "political salience" is common in formal academic or professional contexts.', malay: 'Sifat sangat ketara, penting atau menonjol dalam sesuatu konteks.', chinese: '“政治显著性”这一表达常见于正式的学术或专业语境。' }], collocations: ['political salience', 'increase salience'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'scrutiny', term: 'scrutiny', normalizedTerm: 'scrutiny', partOfSpeech: ['noun'], ipa: '/skɹˈuːtɪni/',
    chineseShort: '仔细审查；监督', chineseExplanation: '表示“仔细审查；监督”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Very careful and detailed examination of information, conduct, decisions, or evidence.',
    examples: [{ english: 'Researchers may encounter the expression "public scrutiny" in advanced writing.', malay: 'Pemeriksaan yang sangat teliti dan terperinci.', chinese: '研究者可能会在高级写作中遇到“公众监督”这一表达。' }], collocations: ['public scrutiny', 'close scrutiny'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'sophistication', term: 'sophistication', normalizedTerm: 'sophistication', partOfSpeech: ['noun'], ipa: '/səfˌɪstɪkˈeɪʃən/',
    chineseShort: '复杂精密；成熟程度', chineseExplanation: '表示“复杂精密；成熟程度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'A high level of complexity, refinement, knowledge, or technical development.',
    examples: [{ english: 'The report uses the expression "technical sophistication" in its analysis.', malay: 'Tahap kerumitan, kehalusan, pengetahuan atau kemajuan teknikal yang tinggi.', chinese: '报告在分析中使用了“技术复杂度”这一表达。' }], collocations: ['technical sophistication', 'growing sophistication'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'subordination', term: 'subordination', normalizedTerm: 'subordination', partOfSpeech: ['noun'], ipa: '/sˌʌbɔːdɪnˈeɪʃən/',
    chineseShort: '从属；次要地位', chineseExplanation: '表示“从属；次要地位”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The condition of being placed in a lower rank, position, or level of importance or authority.',
    examples: [{ english: 'The phrase "social subordination" is common in formal academic or professional contexts.', malay: 'Keadaan diletakkan pada pangkat atau tahap kepentingan yang lebih rendah.', chinese: '“社会从属”这一表达常见于正式的学术或专业语境。' }], collocations: ['social subordination', 'subordination of interests'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'substitution', term: 'substitution', normalizedTerm: 'substitution', partOfSpeech: ['noun'], ipa: '/sˌʌbstɪtjˈuːʃən/',
    chineseShort: '替代；替换', chineseExplanation: '表示“替代；替换”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of replacing one person, product, input, method, or variable with another.',
    examples: [{ english: 'Researchers may encounter the expression "import substitution" in advanced writing.', malay: 'Tindakan menggantikan seseorang atau sesuatu dengan yang lain.', chinese: '研究者可能会在高级写作中遇到“进口替代”这一表达。' }], collocations: ['import substitution', 'substitution effect'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'suppression', term: 'suppression', normalizedTerm: 'suppression', partOfSpeech: ['noun'], ipa: '/səpɹˈɛʃən/',
    chineseShort: '压制；抑制', chineseExplanation: '表示“压制；抑制”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act of preventing, restraining, or reducing information, behaviour, expression, or a process.',
    examples: [{ english: 'The report uses the expression "information suppression" in its analysis.', malay: 'Tindakan menghalang, menyekat atau mengurangkan sesuatu proses atau penyataan.', chinese: '报告在分析中使用了“信息压制”这一表达。' }], collocations: ['information suppression', 'suppression of dissent'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'sustainability', term: 'sustainability', normalizedTerm: 'sustainability', partOfSpeech: ['noun'], ipa: '/səstˌeɪnəbˈɪlɪti/',
    chineseShort: '可持续性', chineseExplanation: '表示“可持续性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability of a system, activity, or policy to continue over time without exhausting essential resources or causing unacceptable harm.',
    examples: [{ english: 'The phrase "environmental sustainability" is common in formal academic or professional contexts.', malay: 'Keupayaan berterusan tanpa menghabiskan sumber penting atau menyebabkan kemudaratan.', chinese: '“环境可持续性”这一表达常见于正式的学术或专业语境。' }], collocations: ['environmental sustainability', 'long-term sustainability'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'transcendence', term: 'transcendence', normalizedTerm: 'transcendence', partOfSpeech: ['noun'], ipa: '/tɹansˈɛndəns/',
    chineseShort: '超越；超越状态', chineseExplanation: '表示“超越；超越状态”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The condition or act of going beyond ordinary limits, categories, experiences, or conventional boundaries.',
    examples: [{ english: 'Researchers may encounter the expression "cultural transcendence" in advanced writing.', malay: 'Keadaan melampaui batas, kategori atau pengalaman biasa.', chinese: '研究者可能会在高级写作中遇到“文化超越”这一表达。' }], collocations: ['cultural transcendence', 'idea of transcendence'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'validation', term: 'validation', normalizedTerm: 'validation', partOfSpeech: ['noun'], ipa: '/vˌalɪdˈeɪʃən/',
    chineseShort: '验证；确认有效', chineseExplanation: '表示“验证；确认有效”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The process of confirming that a method, model, result, claim, or system is accurate, reliable, or fit for purpose.',
    examples: [{ english: 'The report uses the expression "model validation" in its analysis.', malay: 'Proses mengesahkan bahawa kaedah, hasil atau sistem tepat dan boleh dipercayai.', chinese: '报告在分析中使用了“模型验证”这一表达。' }], collocations: ['model validation', 'validation process'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'viability', term: 'viability', normalizedTerm: 'viability', partOfSpeech: ['noun'], ipa: '/vˌaɪəbˈɪlɪti/',
    chineseShort: '可行性；生存能力', chineseExplanation: '表示“可行性；生存能力”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The ability of a plan, business, system, or organism to work successfully and continue over time.',
    examples: [{ english: 'The phrase "commercial viability" is common in formal academic or professional contexts.', malay: 'Keupayaan rancangan, perniagaan atau sistem untuk berjaya dan terus berfungsi.', chinese: '“商业可行性”这一表达常见于正式的学术或专业语境。' }], collocations: ['commercial viability', 'long-term viability'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'volatility', term: 'volatility', normalizedTerm: 'volatility', partOfSpeech: ['noun'], ipa: '/vˌɒlɐtˈɪlɪti/',
    chineseShort: '波动性；不稳定性', chineseExplanation: '表示“波动性；不稳定性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The tendency of prices, conditions, emotions, or situations to change quickly and unpredictably.',
    examples: [{ english: 'Researchers may encounter the expression "market volatility" in advanced writing.', malay: 'Kecenderungan harga atau keadaan berubah dengan cepat dan sukar dijangka.', chinese: '研究者可能会在高级写作中遇到“市场波动性”这一表达。' }], collocations: ['market volatility', 'high volatility'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'accountable', term: 'accountable', normalizedTerm: 'accountable', partOfSpeech: ['adjective'], ipa: '/ɐkˈaʊntəbəl/',
    chineseShort: '负有责任的；需问责的', chineseExplanation: '表示“负有责任的；需问责的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Required to explain decisions, accept responsibility, and answer for actions or outcomes.',
    examples: [{ english: 'The report uses the expression "accountable to the public" in its analysis.', malay: 'Wajib menjelaskan keputusan dan bertanggungjawab atas tindakan atau hasil.', chinese: '报告在分析中使用了“对公众负责”这一表达。' }], collocations: ['accountable to the public', 'hold leaders accountable'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'adaptive', term: 'adaptive', normalizedTerm: 'adaptive', partOfSpeech: ['adjective'], ipa: '/ɐdˈaptɪv/',
    chineseShort: '适应性的；可调整的', chineseExplanation: '表示“适应性的；可调整的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to change effectively in response to new information, conditions, risks, or environments.',
    examples: [{ english: 'The phrase "adaptive strategy" is common in formal academic or professional contexts.', malay: 'Mampu menyesuaikan diri dengan maklumat atau keadaan baharu.', chinese: '“适应性策略”这一表达常见于正式的学术或专业语境。' }], collocations: ['adaptive strategy', 'adaptive system'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'autonomous', term: 'autonomous', normalizedTerm: 'autonomous', partOfSpeech: ['adjective'], ipa: '/ɔːtˈɒnəməs/',
    chineseShort: '自主的；自治的', chineseExplanation: '表示“自主的；自治的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Able to make independent decisions or operate without direct external control.',
    examples: [{ english: 'Researchers may encounter the expression "autonomous institution" in advanced writing.', malay: 'Mampu membuat keputusan atau beroperasi sendiri tanpa kawalan luar.', chinese: '研究者可能会在高级写作中遇到“自治机构”这一表达。' }], collocations: ['autonomous institution', 'autonomous system'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'discretion', term: 'discretion', normalizedTerm: 'discretion', partOfSpeech: ['noun'], ipa: '/dɪskɹˈɛʃən/',
    chineseShort: '酌情权；谨慎判断', chineseExplanation: '表示“酌情权；谨慎判断”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The freedom or authority to make judgements and decisions within certain limits.',
    examples: [{ english: 'The report uses the expression "managerial discretion" in its analysis.', malay: 'Kebebasan atau kuasa membuat pertimbangan dalam batas tertentu.', chinese: '报告在分析中使用了“管理酌情权”这一表达。' }], collocations: ['managerial discretion', 'exercise discretion'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'discretionary', term: 'discretionary', normalizedTerm: 'discretionary', partOfSpeech: ['adjective'], ipa: '/dɪskɹˈɛʃənəɹi/',
    chineseShort: '酌情的；非强制的', chineseExplanation: '表示“酌情的；非强制的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Available for use according to judgement or choice rather than fixed requirement or obligation.',
    examples: [{ english: 'The phrase "discretionary spending" is common in formal academic or professional contexts.', malay: 'Bergantung pada pertimbangan atau pilihan, bukan kewajipan tetap.', chinese: '“可自由支配支出”这一表达常见于正式的学术或专业语境。' }], collocations: ['discretionary spending', 'discretionary power'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'equitable', term: 'equitable', normalizedTerm: 'equitable', partOfSpeech: ['adjective'], ipa: '/ˈɛkwɪtəbəl/',
    chineseShort: '公平的；合理公正的', chineseExplanation: '表示“公平的；合理公正的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Fair and impartial while taking relevant differences in needs, circumstances, or opportunities into account.',
    examples: [{ english: 'Researchers may encounter the expression "equitable access" in advanced writing.', malay: 'Adil dan saksama dengan mengambil kira perbezaan keperluan atau keadaan.', chinese: '研究者可能会在高级写作中遇到“公平获得机会”这一表达。' }], collocations: ['equitable access', 'equitable distribution'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'equity', term: 'equity', normalizedTerm: 'equity', partOfSpeech: ['noun'], ipa: '/ˈɛkwɪti/',
    chineseShort: '公平；权益', chineseExplanation: '表示“公平；权益”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Fairness in the distribution of resources, opportunities, treatment, or outcomes, especially when needs differ.',
    examples: [{ english: 'The report uses the expression "social equity" in its analysis.', malay: 'Keadilan dalam pengagihan sumber, peluang, layanan atau hasil.', chinese: '报告在分析中使用了“社会公平”这一表达。' }], collocations: ['social equity', 'equity in education'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'explicitness', term: 'explicitness', normalizedTerm: 'explicitness', partOfSpeech: ['noun'], ipa: '/ɛksplˈɪsɪtnəs/',
    chineseShort: '明确性；直白程度', chineseExplanation: '表示“明确性；直白程度”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of being stated clearly and directly, leaving little room for uncertainty or inference.',
    examples: [{ english: 'The phrase "degree of explicitness" is common in formal academic or professional contexts.', malay: 'Sifat dinyatakan dengan jelas dan langsung tanpa banyak ruang untuk keraguan.', chinese: '“明确程度”这一表达常见于正式的学术或专业语境。' }], collocations: ['degree of explicitness', 'greater explicitness'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'inclusion', term: 'inclusion', normalizedTerm: 'inclusion', partOfSpeech: ['noun'], ipa: '/ɪnklˈuːʒən/',
    chineseShort: '包容；纳入', chineseExplanation: '表示“包容；纳入”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The act or practice of ensuring that people, groups, ideas, or items are included and able to participate.',
    examples: [{ english: 'Researchers may encounter the expression "social inclusion" in advanced writing.', malay: 'Amalan memastikan semua pihak disertakan dan dapat mengambil bahagian.', chinese: '研究者可能会在高级写作中遇到“社会包容”这一表达。' }], collocations: ['social inclusion', 'inclusion criteria'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'inclusive', term: 'inclusive', normalizedTerm: 'inclusive', partOfSpeech: ['adjective'], ipa: '/ɪnklˈuːsɪv/',
    chineseShort: '包容的；包含广泛的', chineseExplanation: '表示“包容的；包含广泛的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Designed to include people with different backgrounds, needs, or characteristics, or covering a broad range.',
    examples: [{ english: 'The report uses the expression "inclusive policy" in its analysis.', malay: 'Merangkumi manusia daripada pelbagai latar belakang dan keperluan.', chinese: '报告在分析中使用了“包容性政策”这一表达。' }], collocations: ['inclusive policy', 'inclusive growth'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'interdependent', term: 'interdependent', normalizedTerm: 'interdependent', partOfSpeech: ['adjective'], ipa: '/ˌɪntədɪpˈɛndənt/',
    chineseShort: '相互依赖的', chineseExplanation: '表示“相互依赖的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Depending on one another so that changes in one person, group, system, or factor affect the others.',
    examples: [{ english: 'The phrase "interdependent economies" is common in formal academic or professional contexts.', malay: 'Saling bergantung sehingga perubahan pada satu pihak mempengaruhi pihak lain.', chinese: '“相互依赖的经济体”这一表达常见于正式的学术或专业语境。' }], collocations: ['interdependent economies', 'interdependent factors'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'legislative', term: 'legislative', normalizedTerm: 'legislative', partOfSpeech: ['adjective'], ipa: '/lˈɛdʒɪslətˌɪv/',
    chineseShort: '立法的；法规制定的', chineseExplanation: '表示“立法的；法规制定的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to laws, lawmaking bodies, or the process of creating and amending legislation.',
    examples: [{ english: 'Researchers may encounter the expression "legislative reform" in advanced writing.', malay: 'Berkaitan dengan undang-undang atau proses penggubalannya.', chinese: '研究者可能会在高级写作中遇到“立法改革”这一表达。' }], collocations: ['legislative reform', 'legislative framework'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'proportional', term: 'proportional', normalizedTerm: 'proportional', partOfSpeech: ['adjective'], ipa: '/pɹəpˈɔːʃənəl/',
    chineseShort: '成比例的；按比例的', chineseExplanation: '表示“成比例的；按比例的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Corresponding in size, amount, or degree to another quantity or factor.',
    examples: [{ english: 'The report uses the expression "proportional increase" in its analysis.', malay: 'Sepadan dari segi saiz, jumlah atau tahap.', chinese: '报告在分析中使用了“成比例增长”这一表达。' }], collocations: ['proportional increase', 'proportional representation'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'receptive', term: 'receptive', normalizedTerm: 'receptive', partOfSpeech: ['adjective'], ipa: '/ɹɪsˈɛptɪv/',
    chineseShort: '乐于接受的；善于接纳的', chineseExplanation: '表示“乐于接受的；善于接纳的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Willing to consider new ideas, suggestions, evidence, or change with an open attitude.',
    examples: [{ english: 'The phrase "receptive audience" is common in formal academic or professional contexts.', malay: 'Terbuka untuk mempertimbangkan idea, cadangan, bukti atau perubahan.', chinese: '“乐于接受的受众”这一表达常见于正式的学术或专业语境。' }], collocations: ['receptive audience', 'receptive to feedback'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'reliability', term: 'reliability', normalizedTerm: 'reliability', partOfSpeech: ['noun'], ipa: '/ɹɪlˌaɪəbˈɪlɪti/',
    chineseShort: '可靠性；一致性', chineseExplanation: '表示“可靠性；一致性”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'The quality of producing dependable, consistent, and repeatable results or performance.',
    examples: [{ english: 'Researchers may encounter the expression "data reliability" in advanced writing.', malay: 'Keupayaan menghasilkan prestasi atau keputusan yang konsisten dan boleh dipercayai.', chinese: '研究者可能会在高级写作中遇到“数据可靠性”这一表达。' }], collocations: ['data reliability', 'test reliability'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
  {
    id: 'strategic', term: 'strategic', normalizedTerm: 'strategic', partOfSpeech: ['adjective'], ipa: '/stɹətˈiːdʒɪk/',
    chineseShort: '战略性的；策略性的', chineseExplanation: '表示“战略性的；策略性的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to long-term objectives and the careful allocation of actions and resources to achieve them.',
    examples: [{ english: 'The report uses the expression "strategic planning" in its analysis.', malay: 'Berkaitan dengan matlamat jangka panjang dan penggunaan sumber secara terancang.', chinese: '报告在分析中使用了“战略规划”这一表达。' }], collocations: ['strategic planning', 'strategic decision'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'systematic', term: 'systematic', normalizedTerm: 'systematic', partOfSpeech: ['adjective'], ipa: '/sˌɪstəmˈatɪk/',
    chineseShort: '系统的；有条理的', chineseExplanation: '表示“系统的；有条理的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Done according to an organised method, plan, or set of procedures rather than randomly.',
    examples: [{ english: 'The phrase "systematic review" is common in formal academic or professional contexts.', malay: 'Dilakukan mengikut kaedah atau rancangan yang tersusun.', chinese: '“系统综述”这一表达常见于正式的学术或专业语境。' }], collocations: ['systematic review', 'systematic approach'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'theoretical', term: 'theoretical', normalizedTerm: 'theoretical', partOfSpeech: ['adjective'], ipa: '/θiəɹˈɛtɪkəl/',
    chineseShort: '理论的；理论上的', chineseExplanation: '表示“理论的；理论上的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to ideas, principles, or models rather than direct practical application or observation.',
    examples: [{ english: 'Researchers may encounter the expression "theoretical framework" in advanced writing.', malay: 'Berkaitan dengan idea, prinsip atau model dan bukan penerapan praktikal.', chinese: '研究者可能会在高级写作中遇到“理论框架”这一表达。' }], collocations: ['theoretical framework', 'theoretical perspective'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'transformative', term: 'transformative', normalizedTerm: 'transformative', partOfSpeech: ['adjective'], ipa: '/tɹansfˈɔːmətˌɪv/',
    chineseShort: '变革性的；带来根本改变的', chineseExplanation: '表示“变革性的；带来根本改变的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Causing a major and lasting change in form, structure, capability, or understanding.',
    examples: [{ english: 'The report uses the expression "transformative change" in its analysis.', malay: 'Menyebabkan perubahan besar dan berkekalan.', chinese: '报告在分析中使用了“变革性改变”这一表达。' }], collocations: ['transformative change', 'transformative impact'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'unintended', term: 'unintended', normalizedTerm: 'unintended', partOfSpeech: ['adjective'], ipa: '/ˌʌnɪntˈɛndɪd/',
    chineseShort: '非预期的；无意的', chineseExplanation: '表示“非预期的；无意的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Not planned, expected, or deliberately caused, especially when describing effects or consequences.',
    examples: [{ english: 'The phrase "unintended consequence" is common in formal academic or professional contexts.', malay: 'Tidak dirancang, dijangka atau disengajakan.', chinese: '“非预期后果”这一表达常见于正式的学术或专业语境。' }], collocations: ['unintended consequence', 'unintended effect'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'civic', term: 'civic', normalizedTerm: 'civic', partOfSpeech: ['adjective'], ipa: '/sˈɪvɪk/',
    chineseShort: '公民的；城市公共事务的', chineseExplanation: '表示“公民的；城市公共事务的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to citizens, public life, community responsibilities, or the affairs of a city.',
    examples: [{ english: 'Researchers may encounter the expression "civic participation" in advanced writing.', malay: 'Berkaitan dengan warga, kehidupan awam dan tanggungjawab masyarakat.', chinese: '研究者可能会在高级写作中遇到“公民参与”这一表达。' }], collocations: ['civic participation', 'civic responsibility'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'collective', term: 'collective', normalizedTerm: 'collective', partOfSpeech: ['adjective', 'noun'], ipa: '/kəlˈɛktɪv/',
    chineseShort: '集体的；共同体', chineseExplanation: '表示“集体的；共同体”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Shared or done by a group rather than an individual, or a group acting together.',
    examples: [{ english: 'The report uses the expression "collective action" in its analysis.', malay: 'Dikongsi atau dilakukan oleh sesuatu kumpulan.', chinese: '报告在分析中使用了“集体行动”这一表达。' }], collocations: ['collective action', 'collective responsibility'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'comparative', term: 'comparative', normalizedTerm: 'comparative', partOfSpeech: ['adjective'], ipa: '/kəmpˈaɹətˌɪv/',
    chineseShort: '比较的；相对的', chineseExplanation: '表示“比较的；相对的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Based on the systematic comparison of two or more cases, systems, periods, or sets of data.',
    examples: [{ english: 'The phrase "comparative analysis" is common in formal academic or professional contexts.', malay: 'Berasaskan perbandingan sistematik antara dua perkara atau lebih.', chinese: '“比较分析”这一表达常见于正式的学术或专业语境。' }], collocations: ['comparative analysis', 'comparative study'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'constitutional', term: 'constitutional', normalizedTerm: 'constitutional', partOfSpeech: ['adjective'], ipa: '/kˌɒnstɪtjˈuːʃənəl/',
    chineseShort: '宪法的；制度根本性的', chineseExplanation: '表示“宪法的；制度根本性的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to a constitution or to the fundamental principles by which a state or organisation is governed.',
    examples: [{ english: 'Researchers may encounter the expression "constitutional reform" in advanced writing.', malay: 'Berkaitan dengan perlembagaan atau prinsip asas pemerintahan.', chinese: '研究者可能会在高级写作中遇到“宪法改革”这一表达。' }], collocations: ['constitutional reform', 'constitutional right'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'contractual', term: 'contractual', normalizedTerm: 'contractual', partOfSpeech: ['adjective'], ipa: '/kəntɹˈaktʃuːəl/',
    chineseShort: '合同的；契约规定的', chineseExplanation: '表示“合同的；契约规定的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Relating to or established by a formal agreement between parties.',
    examples: [{ english: 'The report uses the expression "contractual obligation" in its analysis.', malay: 'Berkaitan dengan atau ditetapkan melalui kontrak rasmi.', chinese: '报告在分析中使用了“合同义务”这一表达。' }], collocations: ['contractual obligation', 'contractual terms'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'corrective', term: 'corrective', normalizedTerm: 'corrective', partOfSpeech: ['adjective', 'noun'], ipa: '/kəɹˈɛktɪv/',
    chineseShort: '纠正的；纠正措施', chineseExplanation: '表示“纠正的；纠正措施”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Intended to fix an error, weakness, imbalance, or undesirable condition, or a measure used for that purpose.',
    examples: [{ english: 'The phrase "corrective action" is common in formal academic or professional contexts.', malay: 'Bertujuan membetulkan kesilapan, kelemahan atau ketidakseimbangan.', chinese: '“纠正措施”这一表达常见于正式的学术或专业语境。' }], collocations: ['corrective action', 'corrective measure'], level: 4, cefr: 'C1', categories: ['Business', 'Academic'],
  },
  {
    id: 'deductive', term: 'deductive', normalizedTerm: 'deductive', partOfSpeech: ['adjective'], ipa: '/dɪdˈʌktɪv/',
    chineseShort: '演绎的；推理式的', chineseExplanation: '表示“演绎的；推理式的”这一含义，常用于较正式、学术或专业语境中。', englishDefinition: 'Using general principles or premises to reach a logically necessary conclusion about a specific case.',
    examples: [{ english: 'Researchers may encounter the expression "deductive reasoning" in advanced writing.', malay: 'Menggunakan prinsip umum untuk mencapai kesimpulan khusus secara logik.', chinese: '研究者可能会在高级写作中遇到“演绎推理”这一表达。' }], collocations: ['deductive reasoning', 'deductive approach'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
] satisfies readonly VocabularyItem[]
