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

const copies: Partial<Record<AppLanguage, Record<string, string>>> = { ms: malay, zh: chinese }

export function localiseStaticDocument(): void {
  const language = currentLanguage()
  if (language === 'en') {
    document.querySelectorAll<HTMLElement>('[lang="zh-Hans"]').forEach((element) => { element.hidden = true })
    document.querySelectorAll<HTMLElement>('.game-choice').forEach((element) => {
      if (element.textContent?.includes('EN → 中')) element.innerHTML = element.innerHTML.replace('EN → 中', 'EN → Definition').replace('English → Chinese', 'English → definition')
      if (element.textContent?.includes('中 → EN')) element.innerHTML = element.innerHTML.replace('中 → EN', 'Definition → EN').replace('Chinese → English', 'Definition → English')
    })
    return
  }
  const copy = copies[language]
  if (!copy) return
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const raw = node.textContent ?? ''
    const trimmed = raw.trim()
    const translated = copy[trimmed]
    if (translated) node.textContent = raw.replace(trimmed, translated)
    node = walker.nextNode()
  }
}

