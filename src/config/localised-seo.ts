import type { AppLanguage } from './locale'

export const SEO_ROUTES = ['', 'learn', 'play', 'multiplayer', 'multi-duel', 'placement', 'levels', 'how-to-play', 'about', 'privacy', 'terms'] as const
export type SeoRoute = (typeof SEO_ROUTES)[number]

interface LocalisedPageSeo {
  title: string
  description: string
  headline: string
  summary: string
}

const english: Record<SeoRoute, LocalisedPageSeo> = {
  '': { title: 'VocabDuel — Learn British English Vocabulary Through Play', description: 'Learn British English vocabulary with clear definitions, UK pronunciation, examples, focused quizzes and friendly word battles.', headline: 'Master British English vocabulary', summary: 'Build lasting vocabulary with British spellings, clear definitions, useful examples and focused practice.' },
  learn: { title: 'Learn British English Vocabulary | VocabDuel', description: 'Explore British English words with UK pronunciation, definitions, examples, collocations and related vocabulary.', headline: 'Learn every word deeply', summary: 'Search the word library, hear UK pronunciation and connect each word with a clear English definition and example.' },
  play: { title: 'British English Vocabulary Games and Quizzes | VocabDuel', description: 'Practise British English vocabulary with meaning, listening, spelling and context games.', headline: 'Choose your vocabulary challenge', summary: 'Practise British English meanings, listening, spelling and context at your own pace.' },
  multiplayer: { title: 'British English 1v1 Vocabulary Duel | VocabDuel', description: 'Challenge a friend to a private real-time British English vocabulary duel.', headline: 'Challenge a friend to a vocabulary duel', summary: 'Create a private room and answer the same British English vocabulary questions in real time.' },
  'multi-duel': { title: 'British English Multi-Player Vocabulary Game | VocabDuel', description: 'Play British English vocabulary games online with two to four friends.', headline: 'Bring more friends to the vocabulary duel', summary: 'Create a private room for two to four players and compete on the same British English questions.' },
  placement: { title: 'British English Vocabulary Placement Quiz | VocabDuel', description: 'Take a short adaptive quiz to find a suitable British English vocabulary level.', headline: 'Find your British English vocabulary level', summary: 'Answer ten adaptive questions and receive a practical starting-level suggestion.' },
  levels: { title: 'British English Vocabulary Levels 1–5 | VocabDuel', description: 'Compare five British English vocabulary levels with CEFR and approximate IELTS and MUET guidance.', headline: 'Five vocabulary levels, one clear progression', summary: 'Choose a level based on familiarity, language complexity and practical learning goals.' },
  'how-to-play': { title: 'How to Play British English Vocabulary Games | VocabDuel', description: 'Learn how to use VocabDuel’s British English vocabulary library, solo games and private duels.', headline: 'How to learn and play', summary: 'Study a word, practise it from several directions and challenge friends when you are ready.' },
  about: { title: 'About VocabDuel | British English Vocabulary Learning', description: 'Learn how VocabDuel supports focused British English vocabulary study and practice.', headline: 'Built for focused vocabulary practice', summary: 'VocabDuel connects clear British English learning content with short, repeatable practice.' },
  privacy: { title: 'Privacy Notice | VocabDuel', description: 'Read how VocabDuel handles local learning progress and optional multiplayer data.', headline: 'Privacy notice', summary: 'Understand what stays in your browser and what optional multiplayer sends to Firebase.' },
  terms: { title: 'Terms of Use | VocabDuel', description: 'Read the terms governing VocabDuel vocabulary learning and casual multiplayer.', headline: 'Terms of use', summary: 'These terms cover personal vocabulary learning and friendly private matches.' },
}

const malay: Record<SeoRoute, LocalisedPageSeo> = {
  '': { title: 'VocabDuel Bahasa Melayu — Belajar Kosa Kata Bahasa Inggeris British', description: 'Belajar kosa kata Bahasa Inggeris British dengan penerangan Bahasa Melayu, sebutan UK, contoh dan permainan.', headline: 'Kuasai kosa kata Bahasa Inggeris British', summary: 'Bina kosa kata yang berkekalan dengan ejaan British, penerangan jelas, contoh Bahasa Melayu dan latihan yang fokus.' },
  learn: { title: 'Belajar Kosa Kata Bahasa Inggeris British | VocabDuel Bahasa Melayu', description: 'Terokai perkataan Bahasa Inggeris British dengan sebutan UK, penerangan dan contoh Bahasa Melayu.', headline: 'Pelajari setiap perkataan secara mendalam', summary: 'Cari perkataan, dengar sebutan UK dan fahami penggunaannya melalui definisi serta contoh Bahasa Melayu.' },
  play: { title: 'Permainan Kosa Kata Bahasa Inggeris British | VocabDuel', description: 'Latih kosa kata Bahasa Inggeris British melalui permainan makna, audio, ejaan dan konteks.', headline: 'Pilih cabaran kosa kata anda', summary: 'Latih makna, pendengaran, ejaan dan konteks Bahasa Inggeris British mengikut rentak anda.' },
  multiplayer: { title: 'Duel Kosa Kata Bahasa Inggeris 1v1 | VocabDuel', description: 'Cabar rakan dalam duel kosa kata Bahasa Inggeris British secara masa nyata.', headline: 'Cabar rakan dalam duel kosa kata', summary: 'Cipta bilik peribadi dan jawab soalan kosa kata Bahasa Inggeris British yang sama secara masa nyata.' },
  'multi-duel': { title: 'Permainan Kosa Kata Berbilang Pemain | VocabDuel', description: 'Main permainan kosa kata Bahasa Inggeris British bersama dua hingga empat orang rakan.', headline: 'Ajak lebih ramai rakan menyertai duel', summary: 'Cipta bilik peribadi untuk dua hingga empat pemain dan bersaing menggunakan soalan yang sama.' },
  placement: { title: 'Kuiz Penempatan Kosa Kata Bahasa Inggeris | VocabDuel', description: 'Jawab kuiz adaptif ringkas untuk mencari tahap kosa kata Bahasa Inggeris British yang sesuai.', headline: 'Cari tahap kosa kata anda', summary: 'Jawab sepuluh soalan adaptif dan dapatkan cadangan tahap permulaan yang praktikal.' },
  levels: { title: 'Tahap Kosa Kata Bahasa Inggeris 1–5 | VocabDuel', description: 'Bandingkan lima tahap kosa kata Bahasa Inggeris British dengan panduan CEFR, IELTS dan MUET.', headline: 'Lima tahap, satu perkembangan yang jelas', summary: 'Pilih tahap mengikut kebiasaan, kerumitan bahasa dan matlamat pembelajaran anda.' },
  'how-to-play': { title: 'Cara Bermain Permainan Kosa Kata | VocabDuel', description: 'Ketahui cara menggunakan pustaka perkataan, permainan solo dan duel peribadi VocabDuel.', headline: 'Cara belajar dan bermain', summary: 'Pelajari perkataan, latih dari pelbagai arah dan cabar rakan apabila anda bersedia.' },
  about: { title: 'Tentang VocabDuel Bahasa Melayu', description: 'Ketahui cara VocabDuel membantu pembelajaran kosa kata Bahasa Inggeris British.', headline: 'Dibina untuk latihan kosa kata yang fokus', summary: 'VocabDuel menggabungkan kandungan Bahasa Inggeris British yang jelas dengan latihan pendek dan berulang.' },
  privacy: { title: 'Notis Privasi | VocabDuel', description: 'Ketahui cara VocabDuel mengendalikan kemajuan pembelajaran tempatan dan data berbilang pemain.', headline: 'Notis privasi', summary: 'Fahami data yang kekal dalam pelayar dan data yang dihantar ke Firebase untuk permainan pilihan.' },
  terms: { title: 'Terma Penggunaan | VocabDuel', description: 'Baca terma pembelajaran kosa kata dan permainan santai VocabDuel.', headline: 'Terma penggunaan', summary: 'Terma ini meliputi pembelajaran kosa kata peribadi dan perlawanan persahabatan.' },
}

const chinese: Record<SeoRoute, LocalisedPageSeo> = {
  '': { title: 'VocabDuel 中文 — 英式英语词汇学习与游戏', description: '通过简体中文讲解、英式发音、例句、测验和好友对战学习英式英语词汇。', headline: '掌握英式英语词汇', summary: '通过英式拼写、清晰中文讲解、实用例句和专注练习牢牢记住词汇。' },
  learn: { title: '学习英式英语词汇与中文讲解 | VocabDuel', description: '探索英式英语单词、英式发音、中文详解、例句、搭配和相关词汇。', headline: '深入掌握每一个单词', summary: '搜索词库、聆听英式发音，并通过中文讲解和例句理解单词用法。' },
  play: { title: '英式英语词汇游戏与测验 | VocabDuel', description: '通过词义、听力、拼写和语境游戏练习英式英语词汇。', headline: '选择你的词汇挑战', summary: '按自己的节奏练习英式英语词义、听力、拼写和语境。' },
  multiplayer: { title: '好友英式英语词汇对战 | VocabDuel', description: '创建私人房间，与好友实时进行英式英语词汇对战。', headline: '向好友发起词汇对战', summary: '创建私人房间，与好友实时回答相同的英式英语词汇题目。' },
  'multi-duel': { title: '多人英式英语词汇游戏 | VocabDuel', description: '与两至四位好友在线进行英式英语词汇游戏。', headline: '邀请更多好友加入词汇对决', summary: '创建两至四人的私人房间，使用相同的英式英语题目进行比赛。' },
  placement: { title: '英式英语词汇分级测验 | VocabDuel', description: '完成简短的自适应测验，找到适合你的英式英语词汇等级。', headline: '找到适合你的词汇等级', summary: '回答十道自适应题目，获得实用的起始等级建议。' },
  levels: { title: '英式英语词汇等级 1–5 | VocabDuel', description: '比较五个英式英语词汇等级以及 CEFR、IELTS 和 MUET 参考。', headline: '五个词汇等级，一条清晰路径', summary: '根据熟悉程度、语言复杂度和学习目标选择合适等级。' },
  'how-to-play': { title: '英式英语词汇游戏玩法 | VocabDuel', description: '了解如何使用 VocabDuel 词库、单人游戏和私人对战。', headline: '学习与游戏方法', summary: '先学习单词，再从不同方向练习，准备好后邀请好友对战。' },
  about: { title: '关于 VocabDuel 中文', description: '了解 VocabDuel 如何帮助学习和练习英式英语词汇。', headline: '为专注词汇练习而设计', summary: 'VocabDuel 将清晰的英式英语学习内容与简短、可重复的练习结合起来。' },
  privacy: { title: '隐私说明 | VocabDuel', description: '了解 VocabDuel 如何处理本地学习进度和可选的多人游戏数据。', headline: '隐私说明', summary: '了解哪些数据保留在浏览器中，以及多人游戏会向 Firebase 发送哪些数据。' },
  terms: { title: '使用条款 | VocabDuel', description: '阅读 VocabDuel 词汇学习和休闲多人游戏的使用条款。', headline: '使用条款', summary: '这些条款适用于个人词汇学习和好友私人对战。' },
}

export const LOCALISED_SEO: Record<AppLanguage, Record<SeoRoute, LocalisedPageSeo>> = { en: english, ms: malay, zh: chinese }
