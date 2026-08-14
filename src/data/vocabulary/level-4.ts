import type { VocabularyItem } from '../../types'

/** Advanced B2-C1 vocabulary requiring precision, register, and collocation control. */
export const level4Vocabulary = [
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
    id: 'coherent', term: 'coherent', normalizedTerm: 'coherent', partOfSpeech: ['adjective'], ipa: '/kəʊˈhɪərənt/',
    chineseShort: '连贯的；条理清楚的', chineseExplanation: '各部分以清晰、合乎逻辑的方式连接，使整体容易理解。', englishDefinition: 'Clear and logical, with all parts connected in a sensible way.',
    examples: [{ english: 'Her essay presents a coherent argument.', chinese: '她的文章提出了一个连贯的论点。' }], collocations: ['coherent argument', 'coherent explanation'], antonyms: ['incoherent'], level: 4, cefr: 'C1', categories: ['Academic', 'School'],
  },
  {
    id: 'compelling', term: 'compelling', normalizedTerm: 'compelling', partOfSpeech: ['adjective'], ipa: '/kəmˈpelɪŋ/',
    chineseShort: '令人信服的；引人入胜的', chineseExplanation: '非常有说服力或吸引力，让人难以忽视。', englishDefinition: 'Powerfully persuasive, convincing, or interesting.',
    examples: [{ english: 'The report provides compelling evidence for change.', chinese: '报告为改革提供了令人信服的证据。' }], collocations: ['compelling evidence', 'compelling reason'], synonyms: ['convincing'], level: 4, cefr: 'C1', categories: ['Academic', 'Business'],
  },
  {
    id: 'deteriorate', term: 'deteriorate', normalizedTerm: 'deteriorate', partOfSpeech: ['verb'], ipa: '/dɪˈtɪəriəreɪt/',
    chineseShort: '恶化；变差', chineseExplanation: '质量、状态或关系逐渐变得更差。', englishDefinition: 'To become progressively worse in quality or condition.',
    examples: [{ english: 'The equipment will deteriorate without regular maintenance.', chinese: '设备若不定期保养，状况会逐渐恶化。' }], collocations: ['deteriorate rapidly', 'health deteriorates'], antonyms: ['improve'], level: 4, cefr: 'C1', categories: ['Technology', 'Academic'],
  },
  {
    id: 'advocate', term: 'advocate', normalizedTerm: 'advocate', partOfSpeech: ['noun', 'verb'], ipa: '/ˈædvəkeɪt/',
    chineseShort: '提倡；拥护者', chineseExplanation: '公开支持某项政策或观点；作名词时指给予这种支持的人。', englishDefinition: 'To publicly support an idea or policy; also, a person who does so.',
    examples: [{ english: 'Many experts advocate stronger privacy rules.', chinese: '许多专家提倡制定更严格的隐私规则。' }], collocations: ['strongly advocate', 'advocate for change'], synonyms: ['support'], level: 4, cefr: 'C1', categories: ['Academic', 'Technology'],
  },
] satisfies readonly VocabularyItem[]
