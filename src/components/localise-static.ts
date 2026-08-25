import { currentLanguage, type AppLanguage } from '../config/locale'

const malay: Record<string, string> = {
  'Learn it. Use it. Own it.': 'Pelajari. Gunakan. Kuasai.',
  'Start learning': 'Mula belajar',
  'Play a quick round': 'Main pusingan pantas',
  'No account needed for learning and single-player practice.': 'Akaun tidak diperlukan untuk belajar dan latihan solo.',
  'Meaning Match': 'Padanan Makna', Preview: 'Pratonton',
  'Preparing a random question…': 'Menyediakan soalan rawak…',
  'Previous word': 'Perkataan sebelumnya', 'Next word': 'Perkataan seterusnya',
  'Word library': 'Pustaka perkataan', 'Practise weak words': 'Latih perkataan lemah',
  'Show filters': 'Tunjukkan penapis', 'Hide filters': 'Sembunyikan penapis', Level: 'Tahap',
  'All levels': 'Semua tahap', Category: 'Kategori', 'All categories': 'Semua kategori',
  'Search terms': 'Cari perkataan', Search: 'Cari', Random: 'Rawak',
  'Loading the word library…': 'Memuatkan pustaka perkataan…',
  'Preparing definitions, examples, and your saved study view.': 'Menyediakan definisi, contoh dan paparan pembelajaran tersimpan anda.',
  'No words found': 'Tiada perkataan ditemui', 'Try another term, level, or category.': 'Cuba perkataan, tahap atau kategori lain.',
  'Clear filters': 'Kosongkan penapis', 'Retry loading': 'Cuba muat semula',
  'Browse matching words': 'Lihat perkataan sepadan', 'Saved words': 'Perkataan tersimpan',
  'Show more results': 'Tunjukkan lebih banyak hasil', 'Recently viewed': 'Baru dilihat', Bookmarks: 'Penanda buku',
  'Pronunciation speed': 'Kelajuan sebutan', Slow: 'Perlahan', Relaxed: 'Santai', Normal: 'Biasa', Fast: 'Pantas',
  Bookmark: 'Tanda buku', Difficult: 'Sukar', Learned: 'Dipelajari', 'In context': 'Dalam konteks',
  'English definition': 'Definisi Bahasa Inggeris', 'Common combinations': 'Gabungan lazim', Similar: 'Serupa', Opposite: 'Berlawanan', Categories: 'Kategori',
  Prev: 'Sebelumnya', Practise: 'Latih', Next: 'Seterusnya',
  'Single-player arena': 'Arena pemain tunggal', 'Not sure where to start? Take the level quiz →': 'Tidak pasti hendak bermula di mana? Ambil kuiz tahap →',
  '1. Game type': '1. Jenis permainan', 'Meaning → typed word': 'Makna → taip perkataan',
  'English → Chinese': 'Bahasa Inggeris → Bahasa Melayu', 'Chinese → English': 'Bahasa Melayu → Bahasa Inggeris',
  'Reverse Match': 'Padanan Songsang', 'Audio Challenge': 'Cabaran Audio', 'Listen and identify': 'Dengar dan kenal pasti',
  'Spell Rush': 'Cabaran Ejaan', Context: 'Konteks', 'Complete the sentence': 'Lengkapkan ayat',
  '2. Session style': '2. Gaya sesi', Practice: 'Latihan', 'Time Attack': 'Kejar Masa', Survival: 'Bertahan', 'Level Challenge': 'Cabaran Tahap',
  '3. Session settings': '3. Tetapan sesi', Difficulty: 'Kesukaran', 'Mixed levels': 'Tahap campuran', Questions: 'Soalan',
  'Question timer': 'Pemasa soalan', Off: 'Mati', 'After feedback': 'Selepas maklum balas',
  'Continue manually': 'Teruskan secara manual', 'Next after 1 second': 'Seterusnya selepas 1 saat',
  'Start session': 'Mulakan sesi', 'Challenge a friend': 'Cabar rakan', Quit: 'Keluar', Listen: 'Dengar',
  'Type the English word': 'Taip perkataan Bahasa Inggeris', 'Check answer': 'Semak jawapan', Continue: 'Teruskan',
  'Session complete': 'Sesi selesai', Score: 'Markah', Accuracy: 'Ketepatan', 'XP earned': 'XP diperoleh', 'Play again': 'Main lagi', 'Review words': 'Semak perkataan',
}

const chinese: Record<string, string> = {
  'Learn it. Use it. Own it.': '学习、运用、掌握', 'Start learning': '开始学习', 'Play a quick round': '快速练习一局',
  'No account needed for learning and single-player practice.': '学习和单人练习无需账户。',
  'Meaning Match': '词义配对', Preview: '预览', 'Preparing a random question…': '正在准备随机题目…',
  'Previous word': '上一个单词', 'Next word': '下一个单词', 'Word library': '单词库', 'Practise weak words': '练习薄弱词汇',
  'Show filters': '显示筛选', 'Hide filters': '隐藏筛选', Level: '等级', 'All levels': '全部等级', Category: '类别', 'All categories': '全部类别',
  'Search terms': '搜索单词', Search: '搜索', Random: '随机', 'Loading the word library…': '正在加载单词库…',
  'Preparing definitions, examples, and your saved study view.': '正在准备释义、例句和已保存的学习视图。',
  'No words found': '没有找到单词', 'Try another term, level, or category.': '请尝试其他单词、等级或类别。',
  'Clear filters': '清除筛选', 'Retry loading': '重新加载', 'Browse matching words': '浏览匹配词汇', 'Saved words': '已保存词汇',
  'Show more results': '显示更多结果', 'Recently viewed': '最近查看', Bookmarks: '收藏',
  'Pronunciation speed': '发音速度', Slow: '慢速', Relaxed: '较慢', Normal: '正常', Fast: '快速', Bookmark: '收藏', Difficult: '困难', Learned: '已学会',
  'In context': '语境例句', 'English definition': '英文释义', 'Common combinations': '常见搭配', Similar: '近义词', Opposite: '反义词', Categories: '类别', Prev: '上一个', Practise: '练习', Next: '下一个',
  'Single-player arena': '单人竞技场', 'Not sure where to start? Take the level quiz →': '不确定从哪里开始？参加等级测验 →',
  '1. Game type': '1. 游戏类型', 'English → Chinese': '英文 → 中文', 'Chinese → English': '中文 → 英文',
  'Reverse Match': '反向配对', 'Audio Challenge': '听力挑战', 'Listen and identify': '听音辨词', 'Spell Rush': '拼写冲刺', 'Meaning → typed word': '词义 → 输入单词', Context: '语境', 'Complete the sentence': '完成句子',
  '2. Session style': '2. 对局模式', Practice: '练习', 'Time Attack': '限时挑战', Survival: '生存模式', 'Level Challenge': '等级挑战',
  '3. Session settings': '3. 对局设置', Difficulty: '难度', 'Mixed levels': '混合等级', Questions: '题数', 'Question timer': '单题计时', Off: '关闭',
  'After feedback': '答题反馈后', 'Continue manually': '手动继续', 'Next after 1 second': '1 秒后自动继续', 'Start session': '开始练习', 'Challenge a friend': '挑战好友',
  Quit: '退出', Listen: '听发音', 'Type the English word': '输入英文单词', 'Check answer': '检查答案', Continue: '继续',
  'Session complete': '练习完成', Score: '得分', Accuracy: '正确率', 'XP earned': '获得经验', 'Play again': '再玩一次', 'Review words': '复习单词',
}

const duelEnglish: Record<string, string> = {
  '好友单词对战 · PRIVATE 1V1': 'FRIENDLY WORD DUEL · PRIVATE 1V1',
  '和朋友来一场': 'Challenge a friend to an', '英语词汇对决': 'English vocabulary duel',
  '建立或加入私人房间，两位玩家会收到相同题目与同步倒计时。无需注册，输入昵称即可开始。': 'Create or join a private room. Both players receive the same questions and a synchronized countdown. No registration—just enter a nickname to begin.',
  '无需注册': 'No registration', '题目同步': 'Synchronized questions', '即时计分': 'Live scoring',
  '正在准备多人对战…': 'Preparing Duel…',
  '轻松练习，和朋友一起进步': 'Practise casually and improve together',
  '本模式适合好友之间练习英语，并非防作弊的竞技排名。即使多人服务暂时不可用，你仍可继续单人学习。': 'This mode is for friendly English practice, not cheat-proof competitive ranking. If multiplayer is temporarily unavailable, you can still continue learning solo.',
  '好友多人单词对战 · 2–4 PLAYERS': 'FRIENDLY MULTI DUEL · 2–4 PLAYERS',
  '更多朋友，同一场': 'More friends, one',
  '建立最多三人或四人的私人房间。只要已有至少两位玩家且所有人准备完成，房主就能直接开始，不必为了人数不足重新建房。': 'Create a private room for up to three or four players. Once at least two players have joined and everyone is ready, the host can start immediately.',
  '2–4 人开局': 'Start with 2–4 players', '同步题目': 'Synchronized questions', '即时排名': 'Live standings',
  '正在准备 Multi Duel…': 'Preparing Multi Duel…',
  'Multi Duel 与原有 1v1 Duel 分开运行': 'Multi Duel runs separately from 1v1 Duel',
  '多人房间使用独立的数据空间；原有双人房间、计分和再战流程保持不变。': 'Multi-player rooms use separate data. Existing 1v1 rooms, scoring, and rematch flows remain unchanged.',
  '建立私人房间': 'Create a private room', '设定题目后，把房间码分享给朋友。': 'Choose the questions, then share the room code with a friend.',
  '加入朋友的房间': "Join a friend's room", '向房主取得 6 位房间码即可加入。': 'Ask the host for the 6-character room code.',
  '你的昵称': 'Your nickname', '词汇等级': 'Vocabulary level', '词汇类别': 'Vocabulary category', '挑战模式': 'Game type', '题目数量': 'Questions', '每题时间': 'Time per question',
  '建立房间并邀请朋友': 'Create room and invite friend', '加入房间': 'Join room', '正在建立房间…': 'Creating room…', '正在加入…': 'Joining…',
  '建立 Multi Duel 房间': 'Create a Multi Duel room', '最多 3 或 4 人；人数未满时，房主也可以直接开始。': 'Choose a room for up to 3 or 4 players; the host can start before it is full.',
  '建立房间并邀请多人': 'Create room and invite players', '加入 Multi Duel 房间': 'Join a Multi Duel room',
  '全部类别': 'All categories', '日常英语': 'Daily English', '旅游': 'Travel', '校园': 'School', '商务': 'Business', '科技': 'Technology', '学术': 'Academic',
  '英文 → 中文': 'English → meaning', '中文 → 英文': 'Meaning → English', '听发音选单词': 'Listen and choose', '语境判断': 'Context challenge',
}

const duelMalay: Record<string, string> = {
  '好友单词对战 · PRIVATE 1V1': 'DUEL PERKATAAN RAKAN · PRIVATE 1V1',
  '和朋友来一场': 'Cabar rakan dalam', '英语词汇对决': 'duel kosa kata Bahasa Inggeris',
  '建立或加入私人房间，两位玩家会收到相同题目与同步倒计时。无需注册，输入昵称即可开始。': 'Cipta atau sertai bilik peribadi. Kedua-dua pemain menerima soalan yang sama dan kira detik yang diselaraskan. Masukkan nama panggilan untuk bermula.',
  '无需注册': 'Tanpa pendaftaran', '题目同步': 'Soalan diselaraskan', '即时计分': 'Markah langsung',
  '正在准备多人对战…': 'Menyediakan Duel…',
  '轻松练习，和朋友一起进步': 'Berlatih santai dan maju bersama rakan',
  '本模式适合好友之间练习英语，并非防作弊的竞技排名。即使多人服务暂时不可用，你仍可继续单人学习。': 'Mod ini sesuai untuk latihan Bahasa Inggeris bersama rakan, bukan kedudukan pertandingan kalis penipuan. Jika perkhidmatan berbilang pemain tergendala, anda masih boleh belajar secara solo.',
  '好友多人单词对战 · 2–4 PLAYERS': 'MULTI DUEL RAKAN · 2–4 PEMAIN',
  '更多朋友，同一场': 'Lebih ramai rakan, satu',
  '建立最多三人或四人的私人房间。只要已有至少两位玩家且所有人准备完成，房主就能直接开始，不必为了人数不足重新建房。': 'Cipta bilik peribadi untuk tiga atau empat pemain. Apabila sekurang-kurangnya dua pemain telah masuk dan semua sudah bersedia, hos boleh terus bermula.',
  '2–4 人开局': 'Mula dengan 2–4 pemain', '同步题目': 'Soalan diselaraskan', '即时排名': 'Kedudukan langsung',
  '正在准备 Multi Duel…': 'Menyediakan Multi Duel…',
  'Multi Duel 与原有 1v1 Duel 分开运行': 'Multi Duel beroperasi berasingan daripada 1v1 Duel',
  '多人房间使用独立的数据空间；原有双人房间、计分和再战流程保持不变。': 'Bilik berbilang pemain menggunakan data berasingan. Bilik 1v1, pemarkahan dan perlawanan semula kekal seperti biasa.',
  '建立私人房间': 'Cipta bilik peribadi', '设定题目后，把房间码分享给朋友。': 'Pilih soalan, kemudian kongsi kod bilik dengan rakan.',
  '加入朋友的房间': 'Sertai bilik rakan', '向房主取得 6 位房间码即可加入。': 'Dapatkan kod bilik 6 aksara daripada hos.',
  '你的昵称': 'Nama panggilan', '词汇等级': 'Tahap kosa kata', '词汇类别': 'Kategori kosa kata', '挑战模式': 'Jenis permainan', '题目数量': 'Bilangan soalan', '每题时间': 'Masa setiap soalan',
  '建立房间并邀请朋友': 'Cipta bilik dan jemput rakan', '加入房间': 'Sertai bilik', '正在建立房间…': 'Mencipta bilik…', '正在加入…': 'Menyertai…',
  '建立 Multi Duel 房间': 'Cipta bilik Multi Duel', '最多 3 或 4 人；人数未满时，房主也可以直接开始。': 'Pilih bilik untuk sehingga 3 atau 4 pemain; hos boleh bermula sebelum bilik penuh.',
  '建立房间并邀请多人': 'Cipta bilik dan jemput pemain', '加入 Multi Duel 房间': 'Sertai bilik Multi Duel',
  '全部类别': 'Semua kategori', '日常英语': 'Bahasa Inggeris harian', '旅游': 'Perjalanan', '校园': 'Sekolah', '商务': 'Perniagaan', '科技': 'Teknologi', '学术': 'Akademik',
  '英文 → 中文': 'Bahasa Inggeris → makna', '中文 → 英文': 'Makna → Bahasa Inggeris', '听发音选单词': 'Dengar dan pilih', '语境判断': 'Cabaran konteks',
}

const copies: Partial<Record<AppLanguage, Record<string, string>>> = {
  en: duelEnglish,
  ms: { ...malay, ...duelMalay },
  zh: chinese,
}

export function localisedStaticText(value: string, language: AppLanguage): string {
  return copies[language]?.[value] ?? value
}

function localiseTree(root: Node, language: AppLanguage): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const raw = node.textContent ?? ''
    const trimmed = raw.trim()
    const translated = localisedStaticText(trimmed, language)
    if (translated !== trimmed) node.textContent = raw.replace(trimmed, translated)
    node = walker.nextNode()
  }
}

export function localiseStaticDocument(): void {
  const language = currentLanguage()
  if (language !== 'zh') {
    document.querySelectorAll<HTMLElement>('[lang="zh-Hans"]').forEach((element) => { element.hidden = true })
  }
  if (language === 'en') {
    document.querySelectorAll<HTMLElement>('.game-choice').forEach((element) => {
      if (element.textContent?.includes('EN → 中')) element.innerHTML = element.innerHTML.replace('EN → 中', 'EN → Definition').replace('English → Chinese', 'English → definition')
      if (element.textContent?.includes('中 → EN')) element.innerHTML = element.innerHTML.replace('中 → EN', 'Definition → EN').replace('Chinese → English', 'Definition → English')
    })
  }
  const copy = copies[language]
  if (!copy) return
  localiseTree(document.body, language)
  if (language !== 'zh') {
    document.querySelectorAll<HTMLElement>('#multiplayer-app, #multi-duel-app').forEach((root) => {
      new MutationObserver(() => localiseTree(root, language)).observe(root, { childList: true, subtree: true })
    })
  }
}
