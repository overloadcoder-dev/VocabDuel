import type { VocabularyItem } from '../../types'

/** Everyday, concrete A1-A2 vocabulary for foundation learners. */
export const level1Vocabulary = [
  {
    id: 'apple', term: 'apple', normalizedTerm: 'apple', partOfSpeech: ['noun'], ipa: '/ˈæpəl/',
    chineseShort: '苹果', chineseExplanation: '一种圆形水果，通常有红色或绿色的果皮。', englishDefinition: 'A round fruit with red, green, or yellow skin.',
    examples: [{ english: 'She packed an apple for lunch.', malay: 'Dia membawa sebiji epal untuk makan tengah hari.', chinese: '她带了一个苹果当午餐。' }], collocations: ['apple tree', 'apple juice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'borrow', term: 'borrow', normalizedTerm: 'borrow', partOfSpeech: ['verb'], ipa: '/ˈbɒrəʊ/',
    chineseShort: '借入；借用', chineseExplanation: '暂时使用属于他人的东西，之后归还。注意 borrow 是“借入”，lend 是“借出”。', englishDefinition: 'To take and use something belonging to someone else with the intention of returning it.',
    examples: [{ english: 'May I borrow your dictionary?', malay: 'Bolehkah saya meminjam kamus anda?', chinese: '我可以借用你的词典吗？' }], collocations: ['borrow money', 'borrow a book'], antonyms: ['lend'], level: 1, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'journey', term: 'journey', normalizedTerm: 'journey', partOfSpeech: ['noun'], ipa: '/ˈdʒɜːni/',
    chineseShort: '旅程；行程', chineseExplanation: '从一个地方前往另一个地方的过程，常指较长的行程。', englishDefinition: 'The act of travelling from one place to another, especially over a long distance.',
    examples: [{ english: 'The train journey took three hours.', malay: 'Perjalanan dengan kereta api itu mengambil masa tiga jam.', chinese: '这段火车旅程花了三个小时。' }], collocations: ['long journey', 'return journey'], synonyms: ['trip'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'quiet', term: 'quiet', normalizedTerm: 'quiet', partOfSpeech: ['adjective'], ipa: '/ˈkwaɪət/',
    chineseShort: '安静的', chineseExplanation: '几乎没有声音或活动的，也可形容人不爱说话。', englishDefinition: 'Making very little noise or having little activity.',
    examples: [{ english: 'The library is quiet in the morning.', malay: 'Perpustakaan itu sunyi pada waktu pagi.', chinese: '图书馆早上很安静。' }], antonyms: ['noisy'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'choose', term: 'choose', normalizedTerm: 'choose', partOfSpeech: ['verb'], ipa: '/tʃuːz/',
    chineseShort: '选择；挑选', chineseExplanation: '从两个或多个可能性中作出决定。', englishDefinition: 'To decide which person or thing you want from a number of possibilities.',
    examples: [{ english: 'You can choose any seat you like.', malay: 'Anda boleh memilih mana-mana tempat duduk yang anda suka.', chinese: '你可以选择任何你喜欢的座位。' }], collocations: ['choose carefully', 'choose between'], synonyms: ['select'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'arrive', term: 'arrive', normalizedTerm: 'arrive', partOfSpeech: ['verb'], ipa: '/əˈraɪv/',
    chineseShort: '到达', chineseExplanation: '到达某个地点；arrive at 常接小地点，arrive in 常接城市或国家。', englishDefinition: 'To reach a place at the end of a journey.',
    examples: [{ english: 'We expect to arrive at the airport before noon.', malay: 'Kami menjangka akan tiba di lapangan terbang sebelum tengah hari.', chinese: '我们预计中午前到达机场。' }], collocations: ['arrive early', 'arrive at'], antonyms: ['depart'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'home', term: 'home', normalizedTerm: 'home', partOfSpeech: ['noun', 'adverb'], ipa: '/həʊm/',
    chineseShort: '家；在家', chineseExplanation: '一个人居住并感到归属的地方，也可表示回到或处于该处。', englishDefinition: 'The place where someone lives and feels they belong.',
    examples: [{ english: 'I usually get home at six.', malay: 'Saya biasanya sampai di rumah pada pukul enam.', chinese: '我通常六点到家。' }], collocations: ['at home', 'go home'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'teacher', term: 'teacher', normalizedTerm: 'teacher', partOfSpeech: ['noun'], ipa: '/ˈtiːtʃə/',
    chineseShort: '教师；老师', chineseExplanation: '在学校或其他环境中帮助别人学习知识或技能的人。', englishDefinition: 'A person whose job is to help others learn.',
    examples: [{ english: 'Our teacher explained the new lesson.', malay: 'Guru kami menerangkan pelajaran baharu itu.', chinese: '老师讲解了新课。' }], collocations: ['English teacher', 'class teacher'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'ticket', term: 'ticket', normalizedTerm: 'ticket', partOfSpeech: ['noun'], ipa: '/ˈtɪkɪt/',
    chineseShort: '票；券', chineseExplanation: '允许乘车、乘机或进入某个场所的纸质或电子凭证。', englishDefinition: 'A paper or electronic pass that allows travel or entry.',
    examples: [{ english: 'I bought a train ticket online.', malay: 'Saya membeli tiket kereta api dalam talian.', chinese: '我在网上买了一张火车票。' }], collocations: ['train ticket', 'return ticket'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'remember', term: 'remember', normalizedTerm: 'remember', partOfSpeech: ['verb'], ipa: '/rɪˈmembə/',
    chineseShort: '记得；想起', chineseExplanation: '在脑中保留某人或某事的信息，或再次想起它。', englishDefinition: 'To keep information in your mind or bring it back to mind.',
    examples: [{ english: 'Remember to bring your notebook.', malay: 'Ingatlah untuk membawa buku nota anda.', chinese: '记得带上你的笔记本。' }], collocations: ['remember clearly', 'remember to do'], antonyms: ['forget'], level: 1, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'mother', term: 'mother', normalizedTerm: 'mother', partOfSpeech: ['noun'], ipa: '/mˈʌðə/',
    chineseShort: '母亲；妈妈', chineseExplanation: '女性家长，也可用来称呼自己的妈妈。', englishDefinition: 'A female parent.',
    examples: [{ english: 'My mother makes breakfast every morning.', malay: 'Ibu saya menyediakan sarapan setiap pagi.', chinese: '我妈妈每天早上做早餐。' }], collocations: ['my mother', 'mother and child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'father', term: 'father', normalizedTerm: 'father', partOfSpeech: ['noun'], ipa: '/fˈɑːðə/',
    chineseShort: '父亲；爸爸', chineseExplanation: '男性家长，也可用来称呼自己的爸爸。', englishDefinition: 'A male parent.',
    examples: [{ english: 'My father goes to work by car.', malay: 'Ayah saya pergi bekerja dengan kereta.', chinese: '我爸爸开车去上班。' }], collocations: ['my father', 'father and son'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'parent', term: 'parent', normalizedTerm: 'parent', partOfSpeech: ['noun'], ipa: '/pˈeəɹənt/',
    chineseShort: '父母之一；家长', chineseExplanation: '孩子的父亲或母亲，也可泛指家长。', englishDefinition: 'A mother or father of a child.',
    examples: [{ english: 'Please ask your parent to sign the form.', malay: 'Sila minta ibu atau bapa anda menandatangani borang itu.', chinese: '请让你的家长在表格上签名。' }], collocations: ['parent meeting', 'single parent'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'brother', term: 'brother', normalizedTerm: 'brother', partOfSpeech: ['noun'], ipa: '/bɹˈʌðə/',
    chineseShort: '兄弟；哥哥；弟弟', chineseExplanation: '与自己有相同父母或其中一位相同父母的男性亲属。', englishDefinition: 'A boy or man who has the same parents as you.',
    examples: [{ english: 'My brother is two years younger than me.', malay: 'Adik lelaki saya dua tahun lebih muda daripada saya.', chinese: '我弟弟比我小两岁。' }], collocations: ['older brother', 'younger brother'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sister', term: 'sister', normalizedTerm: 'sister', partOfSpeech: ['noun'], ipa: '/sˈɪstə/',
    chineseShort: '姐妹；姐姐；妹妹', chineseExplanation: '与自己有相同父母或其中一位相同父母的女性亲属。', englishDefinition: 'A girl or woman who has the same parents as you.',
    examples: [{ english: 'My sister studies at the same school.', malay: 'Kakak saya belajar di sekolah yang sama.', chinese: '我姐姐在同一所学校读书。' }], collocations: ['older sister', 'younger sister'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'family', term: 'family', normalizedTerm: 'family', partOfSpeech: ['noun'], ipa: '/fˈamɪli/',
    chineseShort: '家庭；家人', chineseExplanation: '由父母、孩子和其他亲属组成的一群人。', englishDefinition: 'A group of people who are related to each other.',
    examples: [{ english: 'My family eats dinner together.', malay: 'Keluarga saya makan malam bersama-sama.', chinese: '我的家人一起吃晚餐。' }], collocations: ['family member', 'family dinner'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'child', term: 'child', normalizedTerm: 'child', partOfSpeech: ['noun'], ipa: '/tʃˈaɪld/',
    chineseShort: '儿童；孩子', chineseExplanation: '还没有长大成人的年轻人。', englishDefinition: 'A young person who is not yet an adult.',
    examples: [{ english: 'The child is playing in the garden.', malay: 'Kanak-kanak itu sedang bermain di taman.', chinese: '那个孩子正在花园里玩。' }], collocations: ['young child', 'only child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'baby', term: 'baby', normalizedTerm: 'baby', partOfSpeech: ['noun'], ipa: '/bˈeɪbi/',
    chineseShort: '婴儿；宝宝', chineseExplanation: '非常年幼的孩子，通常还不会独立照顾自己。', englishDefinition: 'A very young child.',
    examples: [{ english: 'The baby is sleeping now.', malay: 'Bayi itu sedang tidur sekarang.', chinese: '宝宝现在正在睡觉。' }], collocations: ['baby boy', 'baby girl'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'boy', term: 'boy', normalizedTerm: 'boy', partOfSpeech: ['noun'], ipa: '/bˈɔɪ/',
    chineseShort: '男孩', chineseExplanation: '男性儿童或年轻男性。', englishDefinition: 'A male child or young man.',
    examples: [{ english: 'The boy is holding a red ball.', malay: 'Budak lelaki itu sedang memegang bola merah.', chinese: '那个男孩拿着一个红色的球。' }], collocations: ['young boy', 'little boy'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'girl', term: 'girl', normalizedTerm: 'girl', partOfSpeech: ['noun'], ipa: '/ɡˈɜːl/',
    chineseShort: '女孩', chineseExplanation: '女性儿童或年轻女性。', englishDefinition: 'A female child or young woman.',
    examples: [{ english: 'The girl is reading a book.', malay: 'Budak perempuan itu sedang membaca buku.', chinese: '那个女孩正在看书。' }], collocations: ['young girl', 'little girl'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'man', term: 'man', normalizedTerm: 'man', partOfSpeech: ['noun'], ipa: '/mˈan/',
    chineseShort: '男人；男子', chineseExplanation: '成年的男性。', englishDefinition: 'An adult male person.',
    examples: [{ english: 'The man is waiting for the bus.', malay: 'Lelaki itu sedang menunggu bas.', chinese: '那个男人正在等巴士。' }], collocations: ['young man', 'old man'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'woman', term: 'woman', normalizedTerm: 'woman', partOfSpeech: ['noun'], ipa: '/wˈʊmən/',
    chineseShort: '女人；女子', chineseExplanation: '成年的女性。', englishDefinition: 'An adult female person.',
    examples: [{ english: 'The woman works at the bank.', malay: 'Wanita itu bekerja di bank.', chinese: '那个女人在银行工作。' }], collocations: ['young woman', 'old woman'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'friend', term: 'friend', normalizedTerm: 'friend', partOfSpeech: ['noun'], ipa: '/fɹˈɛnd/',
    chineseShort: '朋友', chineseExplanation: '你认识、喜欢并愿意一起相处的人。', englishDefinition: 'A person you know well and like.',
    examples: [{ english: 'I met my friend after school.', malay: 'Saya bertemu dengan kawan saya selepas sekolah.', chinese: '放学后我见了我的朋友。' }], collocations: ['best friend', 'close friend'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'person', term: 'person', normalizedTerm: 'person', partOfSpeech: ['noun'], ipa: '/pˈɜːsən/',
    chineseShort: '人；个人', chineseExplanation: '一个男人、女人或孩子。', englishDefinition: 'A man, woman, or child.',
    examples: [{ english: 'Only one person can sit here.', malay: 'Hanya seorang boleh duduk di sini.', chinese: '这里只能坐一个人。' }], collocations: ['young person', 'one person'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'people', term: 'people', normalizedTerm: 'people', partOfSpeech: ['noun'], ipa: '/pˈiːpəl/',
    chineseShort: '人们', chineseExplanation: 'person 的复数形式，用来表示多个人。', englishDefinition: 'More than one person.',
    examples: [{ english: 'Many people use phones every day.', malay: 'Ramai orang menggunakan telefon setiap hari.', chinese: '很多人每天都使用手机。' }], collocations: ['young people', 'many people'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'name', term: 'name', normalizedTerm: 'name', partOfSpeech: ['noun'], ipa: '/nˈeɪm/',
    chineseShort: '名字；名称', chineseExplanation: '用来称呼某人、某地或某物的词。', englishDefinition: 'A word used to identify a person, place, or thing.',
    examples: [{ english: 'Please write your name here.', malay: 'Sila tulis nama anda di sini.', chinese: '请在这里写下你的名字。' }], collocations: ['first name', 'full name'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'age', term: 'age', normalizedTerm: 'age', partOfSpeech: ['noun'], ipa: '/ˈeɪdʒ/',
    chineseShort: '年龄', chineseExplanation: '一个人或事物从出生或开始到现在经过的时间。', englishDefinition: 'The number of years someone or something has lived or existed.',
    examples: [{ english: 'What is your age?', malay: 'Berapakah umur anda?', chinese: '你的年龄是多少？' }], collocations: ['same age', 'at the age of'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'husband', term: 'husband', normalizedTerm: 'husband', partOfSpeech: ['noun'], ipa: '/hˈʌsbənd/',
    chineseShort: '丈夫', chineseExplanation: '已婚女性或男性的男性配偶。', englishDefinition: 'The man someone is married to.',
    examples: [{ english: 'Her husband cooks dinner on Fridays.', malay: 'Suaminya memasak makan malam pada setiap hari Jumaat.', chinese: '她的丈夫星期五做晚餐。' }], collocations: ['her husband', 'husband and wife'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wife', term: 'wife', normalizedTerm: 'wife', partOfSpeech: ['noun'], ipa: '/wˈaɪf/',
    chineseShort: '妻子', chineseExplanation: '已婚男性或女性的女性配偶。', englishDefinition: 'The woman someone is married to.',
    examples: [{ english: 'His wife works in a hospital.', malay: 'Isterinya bekerja di hospital.', chinese: '他的妻子在医院工作。' }], collocations: ['his wife', 'husband and wife'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'neighbour', term: 'neighbour', normalizedTerm: 'neighbour', partOfSpeech: ['noun'], ipa: '/nˈeɪbə/',
    chineseShort: '邻居', chineseExplanation: '住在你家附近的人。', englishDefinition: 'A person who lives near you.',
    examples: [{ english: 'Our neighbour has a friendly dog.', malay: 'Jiran kami mempunyai anjing yang mesra.', chinese: '我们的邻居有一只友善的狗。' }], collocations: ['next-door neighbour', 'friendly neighbour'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'house', term: 'house', normalizedTerm: 'house', partOfSpeech: ['noun'], ipa: '/hˈaʊs/',
    chineseShort: '房子；住宅', chineseExplanation: '供人居住的建筑物，通常是一户家庭的住所。', englishDefinition: 'A building where people live.',
    examples: [{ english: 'Their house has a small garden.', malay: 'Rumah mereka mempunyai taman kecil.', chinese: '他们的房子有一个小花园。' }], collocations: ['big house', 'new house'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'room', term: 'room', normalizedTerm: 'room', partOfSpeech: ['noun'], ipa: '/ɹˈuːm/',
    chineseShort: '房间', chineseExplanation: '建筑物内由墙隔开的空间。', englishDefinition: 'A part of a building separated by walls.',
    examples: [{ english: 'My room is next to the kitchen.', malay: 'Bilik saya bersebelahan dengan dapur.', chinese: '我的房间在厨房旁边。' }], collocations: ['living room', 'small room'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bedroom', term: 'bedroom', normalizedTerm: 'bedroom', partOfSpeech: ['noun'], ipa: '/bˈɛdɹuːm/',
    chineseShort: '卧室', chineseExplanation: '主要用来睡觉的房间。', englishDefinition: 'A room used mainly for sleeping.',
    examples: [{ english: 'There are two beds in the bedroom.', malay: 'Terdapat dua buah katil di dalam bilik tidur.', chinese: '卧室里有两张床。' }], collocations: ['main bedroom', 'small bedroom'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bathroom', term: 'bathroom', normalizedTerm: 'bathroom', partOfSpeech: ['noun'], ipa: '/bˈaθɹuːm/',
    chineseShort: '浴室；卫生间', chineseExplanation: '有浴缸、淋浴或厕所的房间。', englishDefinition: 'A room with a bath, shower, or toilet.',
    examples: [{ english: 'The bathroom is upstairs.', malay: 'Bilik mandi terletak di tingkat atas.', chinese: '浴室在楼上。' }], collocations: ['bathroom door', 'use the bathroom'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'kitchen', term: 'kitchen', normalizedTerm: 'kitchen', partOfSpeech: ['noun'], ipa: '/kˈɪtʃən/',
    chineseShort: '厨房', chineseExplanation: '准备和烹饪食物的房间。', englishDefinition: 'A room where food is prepared and cooked.',
    examples: [{ english: 'Dad is cooking in the kitchen.', malay: 'Ayah sedang memasak di dapur.', chinese: '爸爸正在厨房里做饭。' }], collocations: ['kitchen table', 'kitchen door'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'door', term: 'door', normalizedTerm: 'door', partOfSpeech: ['noun'], ipa: '/dˈɔː/',
    chineseShort: '门', chineseExplanation: '建筑物、房间或车辆上可以打开和关闭的入口。', englishDefinition: 'A movable part that opens and closes an entrance.',
    examples: [{ english: 'Please close the door.', malay: 'Sila tutup pintu.', chinese: '请把门关上。' }], collocations: ['front door', 'open the door'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'window', term: 'window', normalizedTerm: 'window', partOfSpeech: ['noun'], ipa: '/wˈɪndəʊ/',
    chineseShort: '窗户', chineseExplanation: '墙上装有玻璃、让光线和空气进入的开口。', englishDefinition: 'An opening in a wall with glass that lets in light.',
    examples: [{ english: 'Please open the window.', malay: 'Sila buka tingkap.', chinese: '请把窗户打开。' }], collocations: ['bedroom window', 'open the window'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wall', term: 'wall', normalizedTerm: 'wall', partOfSpeech: ['noun'], ipa: '/wˈɔːl/',
    chineseShort: '墙；墙壁', chineseExplanation: '建筑物中分隔或围住空间的竖直表面。', englishDefinition: 'A vertical surface that forms the side of a room or building.',
    examples: [{ english: 'There is a clock on the wall.', malay: 'Terdapat sebuah jam pada dinding.', chinese: '墙上有一个时钟。' }], collocations: ['brick wall', 'on the wall'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'floor', term: 'floor', normalizedTerm: 'floor', partOfSpeech: ['noun'], ipa: '/flˈɔː/',
    chineseShort: '地板；楼层', chineseExplanation: '房间中供人站立和行走的表面，也可表示楼层。', englishDefinition: 'The surface you walk on inside a room, or a level of a building.',
    examples: [{ english: 'Your bag is on the floor.', malay: 'Beg anda berada di atas lantai.', chinese: '你的包在地板上。' }], collocations: ['ground floor', 'wooden floor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'table', term: 'table', normalizedTerm: 'table', partOfSpeech: ['noun'], ipa: '/tˈeɪbəl/',
    chineseShort: '桌子', chineseExplanation: '有平面和支撑脚、用来放东西或吃饭的家具。', englishDefinition: 'A piece of furniture with a flat top and legs.',
    examples: [{ english: 'The plates are on the table.', malay: 'Pinggan-pinggan itu berada di atas meja.', chinese: '盘子在桌子上。' }], collocations: ['dining table', 'table tennis'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'chair', term: 'chair', normalizedTerm: 'chair', partOfSpeech: ['noun'], ipa: '/tʃˈeə/',
    chineseShort: '椅子', chineseExplanation: '有座位和靠背、供一个人坐的家具。', englishDefinition: 'A piece of furniture for one person to sit on.',
    examples: [{ english: 'Please take a chair and sit down.', malay: 'Sila ambil kerusi dan duduk.', chinese: '请拿一张椅子坐下。' }], collocations: ['wooden chair', 'office chair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bed', term: 'bed', normalizedTerm: 'bed', partOfSpeech: ['noun'], ipa: '/bˈɛd/',
    chineseShort: '床', chineseExplanation: '供人躺下和睡觉的家具。', englishDefinition: 'A piece of furniture used for sleeping.',
    examples: [{ english: 'I go to bed at eleven.', malay: 'Saya tidur pada pukul sebelas.', chinese: '我十一点上床睡觉。' }], collocations: ['go to bed', 'single bed'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'lamp', term: 'lamp', normalizedTerm: 'lamp', partOfSpeech: ['noun'], ipa: '/lˈamp/',
    chineseShort: '灯；台灯', chineseExplanation: '用电或其他能源产生光的装置。', englishDefinition: 'A device that produces light.',
    examples: [{ english: 'There is a lamp beside my bed.', malay: 'Terdapat sebuah lampu di sebelah katil saya.', chinese: '我的床边有一盏灯。' }], collocations: ['desk lamp', 'bedside lamp'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'key', term: 'key', normalizedTerm: 'key', partOfSpeech: ['noun'], ipa: '/kˈiː/',
    chineseShort: '钥匙', chineseExplanation: '用来开锁或启动某些设备的小件物品。', englishDefinition: 'A small object used to open a lock.',
    examples: [{ english: 'I cannot find my house key.', malay: 'Saya tidak dapat menemukan kunci rumah saya.', chinese: '我找不到家里的钥匙。' }], collocations: ['house key', 'car key'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'garden', term: 'garden', normalizedTerm: 'garden', partOfSpeech: ['noun'], ipa: '/ɡˈɑːdən/',
    chineseShort: '花园；园子', chineseExplanation: '房屋旁边种植花草或蔬菜的户外区域。', englishDefinition: 'An area of land where flowers, plants, or vegetables are grown.',
    examples: [{ english: 'The children are playing in the garden.', malay: 'Kanak-kanak sedang bermain di taman.', chinese: '孩子们正在花园里玩。' }], collocations: ['flower garden', 'back garden'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'box', term: 'box', normalizedTerm: 'box', partOfSpeech: ['noun'], ipa: '/bˈɒks/',
    chineseShort: '盒子；箱子', chineseExplanation: '通常有四边和盖子的容器，用来装东西。', englishDefinition: 'A container with flat sides, used for keeping things.',
    examples: [{ english: 'The shoes are in the box.', malay: 'Kasut itu berada di dalam kotak.', chinese: '鞋子在盒子里。' }], collocations: ['cardboard box', 'small box'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bag', term: 'bag', normalizedTerm: 'bag', partOfSpeech: ['noun'], ipa: '/bˈaɡ/',
    chineseShort: '袋；包', chineseExplanation: '用来装和携带物品的容器。', englishDefinition: 'A container used for carrying things.',
    examples: [{ english: 'She put the books in her bag.', malay: 'Dia memasukkan buku-buku itu ke dalam begnya.', chinese: '她把书放进包里。' }], collocations: ['school bag', 'shopping bag'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'phone', term: 'phone', normalizedTerm: 'phone', partOfSpeech: ['noun'], ipa: '/fˈəʊn/',
    chineseShort: '电话；手机', chineseExplanation: '用来与别人通话或发送信息的设备。', englishDefinition: 'A device used to speak to people or send messages.',
    examples: [{ english: 'My phone is on the desk.', malay: 'Telefon saya berada di atas meja.', chinese: '我的手机在桌上。' }], collocations: ['mobile phone', 'phone number'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'computer', term: 'computer', normalizedTerm: 'computer', partOfSpeech: ['noun'], ipa: '/kəmpjˈuːtə/',
    chineseShort: '电脑；计算机', chineseExplanation: '用来处理信息、工作、学习或娱乐的电子设备。', englishDefinition: 'An electronic machine used to store and work with information.',
    examples: [{ english: 'We use a computer in class.', malay: 'Kami menggunakan komputer di dalam kelas.', chinese: '我们在课堂上使用电脑。' }], collocations: ['computer screen', 'computer game'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'clock', term: 'clock', normalizedTerm: 'clock', partOfSpeech: ['noun'], ipa: '/klˈɒk/',
    chineseShort: '时钟', chineseExplanation: '显示时间的装置，通常放在墙上或桌上。', englishDefinition: 'A device that shows the time.',
    examples: [{ english: 'The clock says nine o\'clock.', malay: 'Jam menunjukkan pukul sembilan.', chinese: '时钟显示九点。' }], collocations: ['wall clock', 'alarm clock'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bread', term: 'bread', normalizedTerm: 'bread', partOfSpeech: ['noun'], ipa: '/bɹˈɛd/',
    chineseShort: '面包', chineseExplanation: '用面粉和水制成并烘烤的常见食物。', englishDefinition: 'Food made from flour and water and baked.',
    examples: [{ english: 'I eat bread with eggs for breakfast.', malay: 'Saya makan roti dengan telur untuk sarapan.', chinese: '我早餐吃面包和鸡蛋。' }], collocations: ['white bread', 'piece of bread'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'rice', term: 'rice', normalizedTerm: 'rice', partOfSpeech: ['noun'], ipa: '/ɹˈaɪs/',
    chineseShort: '米饭；大米', chineseExplanation: '一种常见谷物，煮熟后可作为主食。', englishDefinition: 'Small grains that are cooked and eaten as food.',
    examples: [{ english: 'We usually eat rice for dinner.', malay: 'Kami biasanya makan nasi untuk makan malam.', chinese: '我们晚餐通常吃米饭。' }], collocations: ['fried rice', 'rice bowl'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'water', term: 'water', normalizedTerm: 'water', partOfSpeech: ['noun'], ipa: '/wˈɔːtə/',
    chineseShort: '水', chineseExplanation: '没有颜色、气味很淡，人和动物都需要饮用的液体。', englishDefinition: 'A clear liquid that people and animals need to live.',
    examples: [{ english: 'Please drink more water.', malay: 'Sila minum lebih banyak air.', chinese: '请多喝水。' }], collocations: ['drinking water', 'glass of water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'milk', term: 'milk', normalizedTerm: 'milk', partOfSpeech: ['noun'], ipa: '/mˈɪlk/',
    chineseShort: '牛奶；奶', chineseExplanation: '通常来自牛的白色饮料，也可用于制作其他食物。', englishDefinition: 'A white drink that usually comes from cows.',
    examples: [{ english: 'The child drinks milk every morning.', malay: 'Kanak-kanak itu minum susu setiap pagi.', chinese: '那个孩子每天早上喝牛奶。' }], collocations: ['glass of milk', 'fresh milk'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'coffee', term: 'coffee', normalizedTerm: 'coffee', partOfSpeech: ['noun'], ipa: '/kˈɒfi/',
    chineseShort: '咖啡', chineseExplanation: '用烘焙咖啡豆制作的饮料。', englishDefinition: 'A drink made from roasted coffee beans.',
    examples: [{ english: 'I drink coffee after breakfast.', malay: 'Saya minum kopi selepas sarapan.', chinese: '我早餐后喝咖啡。' }], collocations: ['cup of coffee', 'black coffee'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tea', term: 'tea', normalizedTerm: 'tea', partOfSpeech: ['noun'], ipa: '/tˈiː/',
    chineseShort: '茶', chineseExplanation: '用茶叶泡制的热饮或冷饮。', englishDefinition: 'A drink made by putting tea leaves in hot water.',
    examples: [{ english: 'Would you like some tea?', malay: 'Mahukah anda minum teh?', chinese: '你想喝点茶吗？' }], collocations: ['cup of tea', 'green tea'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'juice', term: 'juice', normalizedTerm: 'juice', partOfSpeech: ['noun'], ipa: '/dʒˈuːs/',
    chineseShort: '果汁', chineseExplanation: '从水果或蔬菜中榨出的饮料。', englishDefinition: 'A drink made from the liquid of fruit or vegetables.',
    examples: [{ english: 'She ordered orange juice.', malay: 'Dia memesan jus oren.', chinese: '她点了橙汁。' }], collocations: ['orange juice', 'fruit juice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'egg', term: 'egg', normalizedTerm: 'egg', partOfSpeech: ['noun'], ipa: '/ˈɛɡ/',
    chineseShort: '蛋；鸡蛋', chineseExplanation: '鸟类等动物产下的食物，日常通常指鸡蛋。', englishDefinition: 'An oval food produced by birds, especially chickens.',
    examples: [{ english: 'I had an egg for breakfast.', malay: 'Saya makan sebiji telur untuk sarapan.', chinese: '我早餐吃了一个鸡蛋。' }], collocations: ['boiled egg', 'fried egg'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'meat', term: 'meat', normalizedTerm: 'meat', partOfSpeech: ['noun'], ipa: '/mˈiːt/',
    chineseShort: '肉', chineseExplanation: '作为食物食用的动物肉。', englishDefinition: 'The flesh of animals eaten as food.',
    examples: [{ english: 'We do not eat much meat.', malay: 'Kami tidak makan banyak daging.', chinese: '我们不常吃很多肉。' }], collocations: ['red meat', 'piece of meat'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'fish', term: 'fish', normalizedTerm: 'fish', partOfSpeech: ['noun'], ipa: '/fˈɪʃ/',
    chineseShort: '鱼；鱼肉', chineseExplanation: '生活在水中的动物，也可指作为食物的鱼肉。', englishDefinition: 'An animal that lives in water, or its meat as food.',
    examples: [{ english: 'We had fish and rice for lunch.', malay: 'Kami makan ikan dan nasi untuk makan tengah hari.', chinese: '我们午餐吃了鱼和米饭。' }], collocations: ['fresh fish', 'fish soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'chicken', term: 'chicken', normalizedTerm: 'chicken', partOfSpeech: ['noun'], ipa: '/tʃˈɪkɪn/',
    chineseShort: '鸡；鸡肉', chineseExplanation: '一种常见家禽，也可指它的肉。', englishDefinition: 'A common farm bird, or its meat as food.',
    examples: [{ english: 'We cooked chicken for dinner.', malay: 'Kami memasak ayam untuk makan malam.', chinese: '我们晚餐煮了鸡肉。' }], collocations: ['fried chicken', 'chicken soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'soup', term: 'soup', normalizedTerm: 'soup', partOfSpeech: ['noun'], ipa: '/sˈuːp/',
    chineseShort: '汤', chineseExplanation: '用水、肉、蔬菜等煮成的液体食物。', englishDefinition: 'A liquid food made by cooking meat or vegetables in water.',
    examples: [{ english: 'The soup is hot.', malay: 'Sup itu panas.', chinese: '这碗汤很热。' }], collocations: ['hot soup', 'chicken soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cake', term: 'cake', normalizedTerm: 'cake', partOfSpeech: ['noun'], ipa: '/kˈeɪk/',
    chineseShort: '蛋糕', chineseExplanation: '通常由面粉、糖和鸡蛋烘焙而成的甜食。', englishDefinition: 'A sweet baked food made with flour, sugar, and eggs.',
    examples: [{ english: 'We bought a cake for her birthday.', malay: 'Kami membeli kek untuk hari lahirnya.', chinese: '我们为她的生日买了一个蛋糕。' }], collocations: ['birthday cake', 'piece of cake'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sugar', term: 'sugar', normalizedTerm: 'sugar', partOfSpeech: ['noun'], ipa: '/ʃˈʊɡə/',
    chineseShort: '糖', chineseExplanation: '有甜味、常加入饮料或食物中的物质。', englishDefinition: 'A sweet substance added to food and drinks.',
    examples: [{ english: 'Do you take sugar in your coffee?', malay: 'Adakah anda mengambil gula dalam kopi anda?', chinese: '你的咖啡要加糖吗？' }], collocations: ['white sugar', 'spoon of sugar'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'salt', term: 'salt', normalizedTerm: 'salt', partOfSpeech: ['noun'], ipa: '/sˈɒlt/',
    chineseShort: '盐', chineseExplanation: '有咸味、常用来给食物调味的白色物质。', englishDefinition: 'A white substance used to add a salty taste to food.',
    examples: [{ english: 'Add a little salt to the soup.', malay: 'Tambahkan sedikit garam ke dalam sup.', chinese: '在汤里加一点盐。' }], collocations: ['sea salt', 'add salt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'banana', term: 'banana', normalizedTerm: 'banana', partOfSpeech: ['noun'], ipa: '/bɐnˈɑːnə/',
    chineseShort: '香蕉', chineseExplanation: '一种长形、通常有黄色外皮的水果。', englishDefinition: 'A long fruit with yellow skin.',
    examples: [{ english: 'He ate a banana after lunch.', malay: 'Dia makan sebiji pisang selepas makan tengah hari.', chinese: '他午餐后吃了一根香蕉。' }], collocations: ['ripe banana', 'banana cake'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'orange', term: 'orange', normalizedTerm: 'orange', partOfSpeech: ['noun'], ipa: '/ˈɒɹɪndʒ/',
    chineseShort: '橙子；橙色', chineseExplanation: '一种圆形柑橘类水果，也可表示橙色。', englishDefinition: 'A round citrus fruit, or the colour between red and yellow.',
    examples: [{ english: 'I bought three oranges at the market.', malay: 'Saya membeli tiga biji oren di pasar.', chinese: '我在市场买了三个橙子。' }], collocations: ['orange juice', 'orange peel'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tomato', term: 'tomato', normalizedTerm: 'tomato', partOfSpeech: ['noun'], ipa: '/təmˈɑːtəʊ/',
    chineseShort: '番茄；西红柿', chineseExplanation: '一种通常为红色、可生吃或烹煮的食物。', englishDefinition: 'A soft red fruit often used as a vegetable in cooking.',
    examples: [{ english: 'Please cut the tomato into pieces.', malay: 'Sila potong tomato itu kecil-kecil.', chinese: '请把番茄切成小块。' }], collocations: ['tomato soup', 'tomato sauce'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'potato', term: 'potato', normalizedTerm: 'potato', partOfSpeech: ['noun'], ipa: '/pətˈeɪtəʊ/',
    chineseShort: '马铃薯；土豆', chineseExplanation: '生长在地下、常被烹煮食用的蔬菜。', englishDefinition: 'A round vegetable that grows under the ground.',
    examples: [{ english: 'We need two potatoes for the soup.', malay: 'Kami memerlukan dua biji kentang untuk sup.', chinese: '这道汤需要两个马铃薯。' }], collocations: ['baked potato', 'potato soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'breakfast', term: 'breakfast', normalizedTerm: 'breakfast', partOfSpeech: ['noun'], ipa: '/bɹˈɛkfəst/',
    chineseShort: '早餐', chineseExplanation: '一天中通常在早上吃的第一餐。', englishDefinition: 'The first meal of the day, usually eaten in the morning.',
    examples: [{ english: 'Breakfast is ready at seven.', malay: 'Sarapan siap pada pukul tujuh.', chinese: '早餐七点准备好。' }], collocations: ['eat breakfast', 'breakfast time'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'school', term: 'school', normalizedTerm: 'school', partOfSpeech: ['noun'], ipa: '/skˈuːl/',
    chineseShort: '学校', chineseExplanation: '学生接受教育和学习知识的地方。', englishDefinition: 'A place where children or students go to learn.',
    examples: [{ english: 'Our school starts at eight.', malay: 'Sekolah kami bermula pada pukul lapan.', chinese: '我们学校八点开始上课。' }], collocations: ['go to school', 'school day'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'student', term: 'student', normalizedTerm: 'student', partOfSpeech: ['noun'], ipa: '/stjˈuːdənt/',
    chineseShort: '学生', chineseExplanation: '在学校、学院或课程中学习的人。', englishDefinition: 'A person who is studying at a school or course.',
    examples: [{ english: 'The student asked a question.', malay: 'Pelajar itu mengemukakan soalan.', chinese: '那名学生问了一个问题。' }], collocations: ['school student', 'new student'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'class', term: 'class', normalizedTerm: 'class', partOfSpeech: ['noun'], ipa: '/klˈas/',
    chineseShort: '班级；课', chineseExplanation: '一起学习的一群学生，也可表示一节课。', englishDefinition: 'A group of students who learn together, or a lesson.',
    examples: [{ english: 'Our English class starts at ten.', malay: 'Kelas Bahasa Inggeris kami bermula pada pukul sepuluh.', chinese: '我们的英语课十点开始。' }], collocations: ['English class', 'in class'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'lesson', term: 'lesson', normalizedTerm: 'lesson', partOfSpeech: ['noun'], ipa: '/lˈɛsən/',
    chineseShort: '课；课程', chineseExplanation: '老师在一段时间内教授的学习内容。', englishDefinition: 'A period of time when someone is taught something.',
    examples: [{ english: 'Today\'s lesson is about food.', malay: 'Pelajaran hari ini adalah tentang makanan.', chinese: '今天的课程是关于食物。' }], collocations: ['English lesson', 'music lesson'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'book', term: 'book', normalizedTerm: 'book', partOfSpeech: ['noun'], ipa: '/bˈʊk/',
    chineseShort: '书', chineseExplanation: '由许多页组成、印有文字或图片的阅读材料。', englishDefinition: 'A set of printed pages joined together for reading.',
    examples: [{ english: 'This book is easy to read.', malay: 'Buku ini mudah dibaca.', chinese: '这本书很容易读。' }], collocations: ['read a book', 'school book'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'page', term: 'page', normalizedTerm: 'page', partOfSpeech: ['noun'], ipa: '/pˈeɪdʒ/',
    chineseShort: '页；页面', chineseExplanation: '书、杂志或文件中的一面纸，也可指网页的一页。', englishDefinition: 'One side of a sheet in a book or document.',
    examples: [{ english: 'Please turn to page ten.', malay: 'Sila buka halaman sepuluh.', chinese: '请翻到第十页。' }], collocations: ['front page', 'page number'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'pen', term: 'pen', normalizedTerm: 'pen', partOfSpeech: ['noun'], ipa: '/pˈɛn/',
    chineseShort: '钢笔；笔', chineseExplanation: '用墨水写字的工具。', englishDefinition: 'A tool for writing with ink.',
    examples: [{ english: 'Can I use your pen?', malay: 'Bolehkah saya menggunakan pen anda?', chinese: '我可以用你的笔吗？' }], collocations: ['blue pen', 'ballpoint pen'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'pencil', term: 'pencil', normalizedTerm: 'pencil', partOfSpeech: ['noun'], ipa: '/pˈɛnsəl/',
    chineseShort: '铅笔', chineseExplanation: '用石墨芯写字或画画的工具，可以擦除。', englishDefinition: 'A tool for writing or drawing that can usually be erased.',
    examples: [{ english: 'Write your answer in pencil.', malay: 'Tulis jawapan anda dengan pensel.', chinese: '请用铅笔写答案。' }], collocations: ['pencil case', 'colour pencil'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'paper', term: 'paper', normalizedTerm: 'paper', partOfSpeech: ['noun'], ipa: '/pˈeɪpə/',
    chineseShort: '纸；纸张', chineseExplanation: '用于书写、绘画、印刷或包装的薄材料。', englishDefinition: 'A thin material used for writing, drawing, or printing.',
    examples: [{ english: 'I need a piece of paper.', malay: 'Saya memerlukan sehelai kertas.', chinese: '我需要一张纸。' }], collocations: ['piece of paper', 'paper bag'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'desk', term: 'desk', normalizedTerm: 'desk', partOfSpeech: ['noun'], ipa: '/dˈɛsk/',
    chineseShort: '书桌；课桌', chineseExplanation: '用于学习或工作的桌子。', englishDefinition: 'A table used for studying or working.',
    examples: [{ english: 'My books are on the desk.', malay: 'Buku-buku saya berada di atas meja.', chinese: '我的书在书桌上。' }], collocations: ['school desk', 'office desk'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'question', term: 'question', normalizedTerm: 'question', partOfSpeech: ['noun'], ipa: '/kwˈɛstʃən/',
    chineseShort: '问题', chineseExplanation: '为了得到信息或答案而提出的话。', englishDefinition: 'Something you ask in order to get information.',
    examples: [{ english: 'Please answer the first question.', malay: 'Sila jawab soalan pertama.', chinese: '请回答第一个问题。' }], collocations: ['ask a question', 'easy question'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'answer', term: 'answer', normalizedTerm: 'answer', partOfSpeech: ['noun', 'verb'], ipa: '/ˈansə/',
    chineseShort: '答案；回答', chineseExplanation: '对问题作出的回应，也可表示回答问题的动作。', englishDefinition: 'A reply to a question, or to give such a reply.',
    examples: [{ english: 'I know the answer to this question.', malay: 'Saya tahu jawapan bagi soalan ini.', chinese: '我知道这个问题的答案。' }], collocations: ['correct answer', 'answer a question'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'word', term: 'word', normalizedTerm: 'word', partOfSpeech: ['noun'], ipa: '/wˈɜːd/',
    chineseShort: '单词；词', chineseExplanation: '语言中具有意义的一个基本单位。', englishDefinition: 'A single unit of language that has meaning.',
    examples: [{ english: 'I do not know this English word.', malay: 'Saya tidak tahu perkataan Bahasa Inggeris ini.', chinese: '我不认识这个英文单词。' }], collocations: ['English word', 'new word'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'sentence', term: 'sentence', normalizedTerm: 'sentence', partOfSpeech: ['noun'], ipa: '/sˈɛntəns/',
    chineseShort: '句子', chineseExplanation: '由一个或多个词组成、表达完整意思的一组词。', englishDefinition: 'A group of words that expresses a complete idea.',
    examples: [{ english: 'Write one sentence about your family.', malay: 'Tulis satu ayat tentang keluarga anda.', chinese: '写一句关于你家人的句子。' }], collocations: ['short sentence', 'complete sentence'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'test', term: 'test', normalizedTerm: 'test', partOfSpeech: ['noun'], ipa: '/tˈɛst/',
    chineseShort: '测验；测试', chineseExplanation: '用来检查知识、能力或表现的活动。', englishDefinition: 'An activity used to check knowledge or ability.',
    examples: [{ english: 'We have a spelling test tomorrow.', malay: 'Kami akan menjalani ujian ejaan esok.', chinese: '我们明天有拼写测验。' }], collocations: ['take a test', 'school test'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'exam', term: 'exam', normalizedTerm: 'exam', partOfSpeech: ['noun'], ipa: '/ɛɡzˈam/',
    chineseShort: '考试', chineseExplanation: '正式检查学生知识或能力的测试。', englishDefinition: 'A formal test of knowledge or ability.',
    examples: [{ english: 'She is studying for her exam.', malay: 'Dia sedang belajar untuk peperiksaannya.', chinese: '她正在为考试复习。' }], collocations: ['final exam', 'pass an exam'], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'homework', term: 'homework', normalizedTerm: 'homework', partOfSpeech: ['noun'], ipa: '/hˈəʊmwɜːk/',
    chineseShort: '家庭作业', chineseExplanation: '老师要求学生在课外完成的学习任务。', englishDefinition: 'School work that students do at home.',
    examples: [{ english: 'I finished my homework before dinner.', malay: 'Saya menyiapkan kerja rumah sebelum makan malam.', chinese: '我在晚餐前完成了作业。' }], collocations: ['do homework', 'finish homework'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'read', term: 'read', normalizedTerm: 'read', partOfSpeech: ['verb'], ipa: '/ɹˈiːd/',
    chineseShort: '阅读；读', chineseExplanation: '看并理解书写或印刷的文字。', englishDefinition: 'To look at and understand written words.',
    examples: [{ english: 'I read a book before bed.', malay: 'Saya membaca buku sebelum tidur.', chinese: '我睡前看书。' }], collocations: ['read a book', 'read aloud'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'write', term: 'write', normalizedTerm: 'write', partOfSpeech: ['verb'], ipa: '/ɹˈaɪt/',
    chineseShort: '写；书写', chineseExplanation: '用笔、键盘等形成文字。', englishDefinition: 'To make words or letters on paper or a screen.',
    examples: [{ english: 'Please write your name here.', malay: 'Sila tulis nama anda di sini.', chinese: '请在这里写下你的名字。' }], collocations: ['write a letter', 'write down'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'learn', term: 'learn', normalizedTerm: 'learn', partOfSpeech: ['verb'], ipa: '/lˈɜːn/',
    chineseShort: '学习；学会', chineseExplanation: '通过学习或练习获得知识或技能。', englishDefinition: 'To get knowledge or a skill by studying or practising.',
    examples: [{ english: 'We learn new words every week.', malay: 'Kami mempelajari perkataan baharu setiap minggu.', chinese: '我们每周学习新单词。' }], collocations: ['learn English', 'learn to do'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'shop', term: 'shop', normalizedTerm: 'shop', partOfSpeech: ['noun', 'verb'], ipa: '/ʃˈɒp/',
    chineseShort: '商店；购物', chineseExplanation: '出售商品的地方，也可表示去买东西。', englishDefinition: 'A place that sells things, or to buy things there.',
    examples: [{ english: 'I went to the shop to buy milk.', malay: 'Saya pergi ke kedai untuk membeli susu.', chinese: '我去商店买牛奶。' }], collocations: ['coffee shop', 'go shopping'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'store', term: 'store', normalizedTerm: 'store', partOfSpeech: ['noun'], ipa: '/stˈɔː/',
    chineseShort: '商店', chineseExplanation: '出售商品的地方，常用于美式英语。', englishDefinition: 'A place where goods are sold.',
    examples: [{ english: 'The store closes at nine.', malay: 'Kedai itu ditutup pada pukul sembilan.', chinese: '这家商店九点关门。' }], collocations: ['department store', 'online store'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'market', term: 'market', normalizedTerm: 'market', partOfSpeech: ['noun'], ipa: '/mˈɑːkɪt/',
    chineseShort: '市场；市集', chineseExplanation: '人们买卖食物和其他商品的地方。', englishDefinition: 'A place where people buy and sell food and other goods.',
    examples: [{ english: 'We buy vegetables at the market.', malay: 'Kami membeli sayur-sayuran di pasar.', chinese: '我们在市场买蔬菜。' }], collocations: ['night market', 'local market'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bank', term: 'bank', normalizedTerm: 'bank', partOfSpeech: ['noun'], ipa: '/bˈaŋk/',
    chineseShort: '银行', chineseExplanation: '存钱、取钱和办理其他金融服务的机构。', englishDefinition: 'A place that keeps and manages money.',
    examples: [{ english: 'I need to go to the bank today.', malay: 'Saya perlu pergi ke bank hari ini.', chinese: '我今天需要去银行。' }], collocations: ['bank account', 'local bank'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hospital', term: 'hospital', normalizedTerm: 'hospital', partOfSpeech: ['noun'], ipa: '/hˈɒspɪtəl/',
    chineseShort: '医院', chineseExplanation: '医生和护士为病人提供治疗的地方。', englishDefinition: 'A place where sick or injured people receive medical care.',
    examples: [{ english: 'He works at a hospital.', malay: 'Dia bekerja di hospital.', chinese: '他在医院工作。' }], collocations: ['local hospital', 'go to hospital'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'station', term: 'station', normalizedTerm: 'station', partOfSpeech: ['noun'], ipa: '/stˈeɪʃən/',
    chineseShort: '车站；站', chineseExplanation: '火车、巴士等交通工具停靠和乘客上下车的地方。', englishDefinition: 'A place where trains or buses stop for passengers.',
    examples: [{ english: 'Meet me at the train station.', malay: 'Jumpa saya di stesen kereta api.', chinese: '在火车站和我见面。' }], collocations: ['train station', 'bus station'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'airport', term: 'airport', normalizedTerm: 'airport', partOfSpeech: ['noun'], ipa: '/ˈeəpɔːt/',
    chineseShort: '机场', chineseExplanation: '飞机起飞、降落和乘客出入的地方。', englishDefinition: 'A place where airplanes take off and land.',
    examples: [{ english: 'We arrived at the airport early.', malay: 'Kami tiba awal di lapangan terbang.', chinese: '我们很早就到了机场。' }], collocations: ['airport bus', 'international airport'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'hotel', term: 'hotel', normalizedTerm: 'hotel', partOfSpeech: ['noun'], ipa: '/həʊtˈɛl/',
    chineseShort: '酒店；旅馆', chineseExplanation: '旅客付费住宿的地方。', englishDefinition: 'A place where travellers pay to stay.',
    examples: [{ english: 'Our hotel is near the beach.', malay: 'Hotel kami berhampiran dengan pantai.', chinese: '我们的酒店靠近海滩。' }], collocations: ['hotel room', 'stay at a hotel'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'restaurant', term: 'restaurant', normalizedTerm: 'restaurant', partOfSpeech: ['noun'], ipa: '/ɹˈɛstɹɒnt/',
    chineseShort: '餐厅；饭店', chineseExplanation: '顾客付费点餐和吃饭的地方。', englishDefinition: 'A place where people pay to eat meals.',
    examples: [{ english: 'We had dinner at a small restaurant.', malay: 'Kami makan malam di restoran kecil.', chinese: '我们在一家小餐厅吃晚餐。' }], collocations: ['Chinese restaurant', 'restaurant meal'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cafe', term: 'cafe', normalizedTerm: 'cafe', partOfSpeech: ['noun'], ipa: '/kˈafeɪ/',
    chineseShort: '咖啡馆；小餐馆', chineseExplanation: '提供咖啡、饮料和简单食物的小店。', englishDefinition: 'A small place that serves drinks and simple food.',
    examples: [{ english: 'Let\'s meet at the cafe after work.', malay: 'Mari kita berjumpa di kafe selepas bekerja.', chinese: '下班后我们在咖啡馆见。' }], collocations: ['small cafe', 'coffee cafe'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'park', term: 'park', normalizedTerm: 'park', partOfSpeech: ['noun'], ipa: '/pˈɑːk/',
    chineseShort: '公园', chineseExplanation: '城市或社区中供人休息、散步和活动的公共绿地。', englishDefinition: 'A public green area where people can relax or play.',
    examples: [{ english: 'The children are running in the park.', malay: 'Kanak-kanak itu sedang berlari di taman.', chinese: '孩子们正在公园里跑。' }], collocations: ['city park', 'car park'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'street', term: 'street', normalizedTerm: 'street', partOfSpeech: ['noun'], ipa: '/stɹˈiːt/',
    chineseShort: '街道', chineseExplanation: '城市或城镇中有房屋和建筑物的道路。', englishDefinition: 'A road in a town or city, usually with buildings along it.',
    examples: [{ english: 'Their house is on this street.', malay: 'Rumah mereka terletak di jalan ini.', chinese: '他们的房子在这条街上。' }], collocations: ['main street', 'street name'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'road', term: 'road', normalizedTerm: 'road', partOfSpeech: ['noun'], ipa: '/ɹˈəʊd/',
    chineseShort: '道路；公路', chineseExplanation: '车辆和行人通行的路线。', englishDefinition: 'A route for cars, buses, and other traffic.',
    examples: [{ english: 'The road is busy in the morning.', malay: 'Jalan itu sibuk pada waktu pagi.', chinese: '这条路早上很繁忙。' }], collocations: ['main road', 'road sign'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'bridge', term: 'bridge', normalizedTerm: 'bridge', partOfSpeech: ['noun'], ipa: '/bɹˈɪdʒ/',
    chineseShort: '桥', chineseExplanation: '跨越河流、道路或其他障碍物的结构。', englishDefinition: 'A structure built over a river, road, or other obstacle.',
    examples: [{ english: 'We walked across the bridge.', malay: 'Kami berjalan menyeberangi jambatan.', chinese: '我们走过了那座桥。' }], collocations: ['road bridge', 'cross a bridge'], level: 1, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'town', term: 'town', normalizedTerm: 'town', partOfSpeech: ['noun'], ipa: '/tˈaʊn/',
    chineseShort: '城镇', chineseExplanation: '比村庄大、通常比城市小的居民区。', englishDefinition: 'A place where people live that is larger than a village and smaller than a city.',
    examples: [{ english: 'She lives in a small town.', malay: 'Dia tinggal di pekan kecil.', chinese: '她住在一个小镇。' }], collocations: ['small town', 'town centre'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'city', term: 'city', normalizedTerm: 'city', partOfSpeech: ['noun'], ipa: '/sˈɪti/',
    chineseShort: '城市', chineseExplanation: '人口较多、有许多建筑和服务的大型居住地。', englishDefinition: 'A large town where many people live and work.',
    examples: [{ english: 'Kuala Lumpur is a busy city.', malay: 'Kuala Lumpur ialah bandar yang sibuk.', chinese: '吉隆坡是一座繁忙的城市。' }], collocations: ['big city', 'city centre'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'village', term: 'village', normalizedTerm: 'village', partOfSpeech: ['noun'], ipa: '/vˈɪlɪdʒ/',
    chineseShort: '村庄', chineseExplanation: '通常位于乡村、比城镇小的居住地。', englishDefinition: 'A small place where people live in the countryside.',
    examples: [{ english: 'My grandparents live in a village.', malay: 'Datuk dan nenek saya tinggal di kampung.', chinese: '我的祖父母住在村里。' }], collocations: ['small village', 'village school'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'country', term: 'country', normalizedTerm: 'country', partOfSpeech: ['noun'], ipa: '/kˈʌntɹi/',
    chineseShort: '国家；乡村', chineseExplanation: '有自己的政府和边界的地区，也可表示乡村地区。', englishDefinition: 'An area of land with its own government and borders.',
    examples: [{ english: 'Which country are you from?', malay: 'Anda berasal dari negara mana?', chinese: '你来自哪个国家？' }], collocations: ['home country', 'foreign country'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'place', term: 'place', normalizedTerm: 'place', partOfSpeech: ['noun'], ipa: '/plˈeɪs/',
    chineseShort: '地方；地点', chineseExplanation: '某个位置、区域或场所。', englishDefinition: 'A particular area, position, or location.',
    examples: [{ english: 'This is a good place to eat.', malay: 'Ini tempat yang baik untuk makan.', chinese: '这是一个适合吃饭的好地方。' }], collocations: ['public place', 'meeting place'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'library', term: 'library', normalizedTerm: 'library', partOfSpeech: ['noun'], ipa: '/lˈaɪbɹəɹi/',
    chineseShort: '图书馆', chineseExplanation: '收藏书籍等资料、供人阅读或借阅的地方。', englishDefinition: 'A place where people can read or borrow books.',
    examples: [{ english: 'I study at the library after class.', malay: 'Saya belajar di perpustakaan selepas kelas.', chinese: '下课后我在图书馆学习。' }], collocations: ['school library', 'public library'], level: 1, cefr: 'A1', categories: ['School', 'Daily English'],
  },
  {
    id: 'car', term: 'car', normalizedTerm: 'car', partOfSpeech: ['noun'], ipa: '/kˈɑː/',
    chineseShort: '汽车；轿车', chineseExplanation: '有四个轮子、通常供少量乘客使用的道路交通工具。', englishDefinition: 'A road vehicle with four wheels for carrying a small number of people.',
    examples: [{ english: 'We go to work by car.', malay: 'Kami pergi bekerja dengan kereta.', chinese: '我们开车去上班。' }], collocations: ['drive a car', 'car park'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'bus', term: 'bus', normalizedTerm: 'bus', partOfSpeech: ['noun'], ipa: '/bˈʌs/',
    chineseShort: '巴士；公共汽车', chineseExplanation: '沿固定路线载很多乘客的大型道路交通工具。', englishDefinition: 'A large road vehicle that carries many passengers.',
    examples: [{ english: 'I take the bus to school.', malay: 'Saya menaiki bas ke sekolah.', chinese: '我乘巴士去学校。' }], collocations: ['bus stop', 'bus driver'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'train', term: 'train', normalizedTerm: 'train', partOfSpeech: ['noun'], ipa: '/tɹˈeɪn/',
    chineseShort: '火车', chineseExplanation: '在铁路轨道上运行、载客或运货的交通工具。', englishDefinition: 'A vehicle that travels on railway tracks.',
    examples: [{ english: 'The train leaves at eight.', malay: 'Kereta api itu bertolak pada pukul lapan.', chinese: '火车八点出发。' }], collocations: ['train station', 'take a train'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'plane', term: 'plane', normalizedTerm: 'plane', partOfSpeech: ['noun'], ipa: '/plˈeɪn/',
    chineseShort: '飞机', chineseExplanation: '能够在空中飞行、载人或货物的交通工具。', englishDefinition: 'A vehicle with wings that flies through the air.',
    examples: [{ english: 'Our plane lands at noon.', malay: 'Pesawat kami mendarat pada tengah hari.', chinese: '我们的飞机中午降落。' }], collocations: ['take a plane', 'plane ticket'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'bicycle', term: 'bicycle', normalizedTerm: 'bicycle', partOfSpeech: ['noun'], ipa: '/bˈaɪsɪkəl/',
    chineseShort: '自行车', chineseExplanation: '有两个轮子、靠脚踩踏板前进的交通工具。', englishDefinition: 'A two-wheeled vehicle that you move by pushing pedals.',
    examples: [{ english: 'She rides her bicycle to the park.', malay: 'Dia menunggang basikal ke taman.', chinese: '她骑自行车去公园。' }], collocations: ['ride a bicycle', 'bicycle lane'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'bike', term: 'bike', normalizedTerm: 'bike', partOfSpeech: ['noun'], ipa: '/bˈaɪk/',
    chineseShort: '自行车', chineseExplanation: 'bicycle 的常用简称，也可指摩托车，基础语境通常指自行车。', englishDefinition: 'A common short word for a bicycle.',
    examples: [{ english: 'My bike is outside the house.', malay: 'Basikal saya berada di luar rumah.', chinese: '我的自行车在房子外面。' }], collocations: ['ride a bike', 'bike ride'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'taxi', term: 'taxi', normalizedTerm: 'taxi', partOfSpeech: ['noun'], ipa: '/tˈaksi/',
    chineseShort: '出租车；的士', chineseExplanation: '乘客付费后由司机载到目的地的汽车。', englishDefinition: 'A car with a driver that you pay to take you somewhere.',
    examples: [{ english: 'We took a taxi to the hotel.', malay: 'Kami menaiki teksi ke hotel.', chinese: '我们搭出租车去酒店。' }], collocations: ['take a taxi', 'taxi driver'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'boat', term: 'boat', normalizedTerm: 'boat', partOfSpeech: ['noun'], ipa: '/bˈəʊt/',
    chineseShort: '船；小船', chineseExplanation: '在水上载人或物品的交通工具。', englishDefinition: 'A vehicle used for travelling on water.',
    examples: [{ english: 'They crossed the river by boat.', malay: 'Mereka menyeberangi sungai dengan bot.', chinese: '他们坐船过河。' }], collocations: ['fishing boat', 'boat trip'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'drive', term: 'drive', normalizedTerm: 'drive', partOfSpeech: ['verb'], ipa: '/dɹˈaɪv/',
    chineseShort: '驾驶；开车', chineseExplanation: '控制汽车或其他道路交通工具行驶。', englishDefinition: 'To control and operate a car or other road vehicle.',
    examples: [{ english: 'Can you drive a car?', malay: 'Bolehkah anda memandu kereta?', chinese: '你会开车吗？' }], collocations: ['drive home', 'drive a car'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'ride', term: 'ride', normalizedTerm: 'ride', partOfSpeech: ['verb'], ipa: '/ɹˈaɪd/',
    chineseShort: '骑；乘坐', chineseExplanation: '坐在自行车、摩托车、马等上面移动，也可指乘车。', englishDefinition: 'To travel on a bicycle, motorcycle, horse, or similar vehicle.',
    examples: [{ english: 'I ride my bike to the shop.', malay: 'Saya menunggang basikal ke kedai.', chinese: '我骑自行车去商店。' }], collocations: ['ride a bike', 'ride a horse'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'walk', term: 'walk', normalizedTerm: 'walk', partOfSpeech: ['verb', 'noun'], ipa: '/wˈɔːk/',
    chineseShort: '走路；步行', chineseExplanation: '用双脚以正常速度移动，也可表示一次步行。', englishDefinition: 'To move on foot at a normal speed.',
    examples: [{ english: 'We walk to school every day.', malay: 'Kami berjalan kaki ke sekolah setiap hari.', chinese: '我们每天步行去学校。' }], collocations: ['walk home', 'go for a walk'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'travel', term: 'travel', normalizedTerm: 'travel', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈavəl/',
    chineseShort: '旅行；出行', chineseExplanation: '从一个地方去另一个地方，通常距离较远。', englishDefinition: 'To go from one place to another, especially over a distance.',
    examples: [{ english: 'I like to travel by train.', malay: 'Saya suka mengembara dengan kereta api.', chinese: '我喜欢坐火车旅行。' }], collocations: ['travel abroad', 'travel by train'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'trip', term: 'trip', normalizedTerm: 'trip', partOfSpeech: ['noun'], ipa: '/tɹˈɪp/',
    chineseShort: '旅行；短途行程', chineseExplanation: '去某地并通常再返回的一段旅程。', englishDefinition: 'A journey to a place and usually back again.',
    examples: [{ english: 'We are planning a weekend trip.', malay: 'Kami sedang merancang perjalanan hujung minggu.', chinese: '我们正在计划周末旅行。' }], collocations: ['business trip', 'day trip'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'map', term: 'map', normalizedTerm: 'map', partOfSpeech: ['noun'], ipa: '/mˈap/',
    chineseShort: '地图', chineseExplanation: '用图形表示某个地区道路、地点和地形的信息。', englishDefinition: 'A drawing that shows where places, roads, or features are.',
    examples: [{ english: 'Look at the map before we leave.', malay: 'Lihat peta sebelum kita bertolak.', chinese: '出发前看看地图。' }], collocations: ['city map', 'road map'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'stop', term: 'stop', normalizedTerm: 'stop', partOfSpeech: ['verb', 'noun'], ipa: '/stˈɒp/',
    chineseShort: '停止；车站', chineseExplanation: '不再继续某个动作，也可表示车辆停靠的地点。', englishDefinition: 'To end an action, or a place where a bus or train stops.',
    examples: [{ english: 'The bus stops near my house.', malay: 'Bas itu berhenti berhampiran rumah saya.', chinese: '巴士在我家附近停。' }], collocations: ['bus stop', 'stop working'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'leave', term: 'leave', normalizedTerm: 'leave', partOfSpeech: ['verb'], ipa: '/lˈiːv/',
    chineseShort: '离开；出发', chineseExplanation: '从某个地方走开或开始一段行程。', englishDefinition: 'To go away from a place.',
    examples: [{ english: 'We leave home at seven.', malay: 'Kami keluar dari rumah pada pukul tujuh.', chinese: '我们七点离开家。' }], collocations: ['leave home', 'leave early'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'return', term: 'return', normalizedTerm: 'return', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪtˈɜːn/',
    chineseShort: '返回；归还', chineseExplanation: '回到原来的地方，也可表示把东西交还。', englishDefinition: 'To go back to a place or give something back.',
    examples: [{ english: 'We return home on Sunday.', malay: 'Kami pulang ke rumah pada hari Ahad.', chinese: '我们星期日回家。' }], collocations: ['return home', 'return a book'], level: 1, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'visit', term: 'visit', normalizedTerm: 'visit', partOfSpeech: ['verb', 'noun'], ipa: '/vˈɪzɪt/',
    chineseShort: '拜访；参观', chineseExplanation: '去某地或去见某人并在那里停留一段时间。', englishDefinition: 'To go to see a person or place for a period of time.',
    examples: [{ english: 'We visit our grandparents every month.', malay: 'Kami melawat datuk dan nenek setiap bulan.', chinese: '我们每个月去看祖父母。' }], collocations: ['visit a friend', 'visit a museum'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'holiday', term: 'holiday', normalizedTerm: 'holiday', partOfSpeech: ['noun'], ipa: '/hˈɒlɪdˌeɪ/',
    chineseShort: '假期；假日', chineseExplanation: '不用上班或上学、用于休息或旅行的一段时间。', englishDefinition: 'A period when you do not work or study, often used for rest or travel.',
    examples: [{ english: 'We are going on holiday next week.', malay: 'Kami akan bercuti pada minggu hadapan.', chinese: '我们下星期去度假。' }], collocations: ['summer holiday', 'on holiday'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'passport', term: 'passport', normalizedTerm: 'passport', partOfSpeech: ['noun'], ipa: '/pˈaspɔːt/',
    chineseShort: '护照', chineseExplanation: '出国旅行时用来证明身份和国籍的官方证件。', englishDefinition: 'An official document used to identify you when travelling between countries.',
    examples: [{ english: 'Do not forget your passport.', malay: 'Jangan lupa pasport anda.', chinese: '不要忘记带护照。' }], collocations: ['passport number', 'valid passport'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'time', term: 'time', normalizedTerm: 'time', partOfSpeech: ['noun'], ipa: '/tˈaɪm/',
    chineseShort: '时间', chineseExplanation: '用来表示事情发生先后、持续多久或几点的概念。', englishDefinition: 'The measure of when things happen or how long they last.',
    examples: [{ english: 'What time does the class start?', malay: 'Pukul berapakah kelas bermula?', chinese: '课程几点开始？' }], collocations: ['free time', 'on time'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'day', term: 'day', normalizedTerm: 'day', partOfSpeech: ['noun'], ipa: '/dˈeɪ/',
    chineseShort: '一天；白天', chineseExplanation: '二十四小时的一段时间，也可指白天。', englishDefinition: 'A period of twenty-four hours, or the part when it is light.',
    examples: [{ english: 'I work five days a week.', malay: 'Saya bekerja lima hari seminggu.', chinese: '我每周工作五天。' }], collocations: ['every day', 'all day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'week', term: 'week', normalizedTerm: 'week', partOfSpeech: ['noun'], ipa: '/wˈiːk/',
    chineseShort: '星期；周', chineseExplanation: '连续七天的一段时间。', englishDefinition: 'A period of seven days.',
    examples: [{ english: 'I go swimming twice a week.', malay: 'Saya berenang dua kali seminggu.', chinese: '我每周游泳两次。' }], collocations: ['next week', 'every week'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'month', term: 'month', normalizedTerm: 'month', partOfSpeech: ['noun'], ipa: '/mˈʌnθ/',
    chineseShort: '月；月份', chineseExplanation: '一年中的十二个时间单位之一。', englishDefinition: 'One of the twelve parts of a year.',
    examples: [{ english: 'We pay the rent every month.', malay: 'Kami membayar sewa setiap bulan.', chinese: '我们每个月付房租。' }], collocations: ['next month', 'last month'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'year', term: 'year', normalizedTerm: 'year', partOfSpeech: ['noun'], ipa: '/jˈiə/',
    chineseShort: '年；一年', chineseExplanation: '通常有三百六十五天的时间单位。', englishDefinition: 'A period of about 365 days.',
    examples: [{ english: 'She is ten years old.', malay: 'Dia berumur sepuluh tahun.', chinese: '她十岁。' }], collocations: ['last year', 'every year'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'morning', term: 'morning', normalizedTerm: 'morning', partOfSpeech: ['noun'], ipa: '/mˈɔːnɪŋ/',
    chineseShort: '早上；上午', chineseExplanation: '从天亮到中午前的一段时间。', englishDefinition: 'The early part of the day before noon.',
    examples: [{ english: 'I drink tea every morning.', malay: 'Saya minum teh setiap pagi.', chinese: '我每天早上喝茶。' }], collocations: ['good morning', 'tomorrow morning'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'afternoon', term: 'afternoon', normalizedTerm: 'afternoon', partOfSpeech: ['noun'], ipa: '/ˌaftənˈuːn/',
    chineseShort: '下午', chineseExplanation: '从中午到傍晚之间的一段时间。', englishDefinition: 'The part of the day between noon and evening.',
    examples: [{ english: 'We have class in the afternoon.', malay: 'Kami mempunyai kelas pada waktu petang.', chinese: '我们下午有课。' }], collocations: ['this afternoon', 'late afternoon'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'evening', term: 'evening', normalizedTerm: 'evening', partOfSpeech: ['noun'], ipa: '/ˈiːvnɪŋ/',
    chineseShort: '傍晚；晚上', chineseExplanation: '下午结束后到夜晚前后的一段时间。', englishDefinition: 'The later part of the day before night.',
    examples: [{ english: 'I usually cook in the evening.', malay: 'Saya biasanya memasak pada waktu petang.', chinese: '我通常在晚上做饭。' }], collocations: ['good evening', 'this evening'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'night', term: 'night', normalizedTerm: 'night', partOfSpeech: ['noun'], ipa: '/nˈaɪt/',
    chineseShort: '夜晚；晚上', chineseExplanation: '天黑后到第二天早晨的一段时间。', englishDefinition: 'The time between evening and morning when it is dark.',
    examples: [{ english: 'The streets are quiet at night.', malay: 'Jalan-jalan sunyi pada waktu malam.', chinese: '街道在夜里很安静。' }], collocations: ['at night', 'last night'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'today', term: 'today', normalizedTerm: 'today', partOfSpeech: ['adverb', 'noun'], ipa: '/tədˈeɪ/',
    chineseShort: '今天', chineseExplanation: '正在发生的这一天。', englishDefinition: 'On or during the present day.',
    examples: [{ english: 'I have a test today.', malay: 'Saya mempunyai ujian hari ini.', chinese: '我今天有测验。' }], collocations: ['today\'s class', 'later today'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tomorrow', term: 'tomorrow', normalizedTerm: 'tomorrow', partOfSpeech: ['adverb', 'noun'], ipa: '/təmˈɒɹəʊ/',
    chineseShort: '明天', chineseExplanation: '今天之后的那一天。', englishDefinition: 'The day after today.',
    examples: [{ english: 'We will meet tomorrow.', malay: 'Kami akan bertemu esok.', chinese: '我们明天见。' }], collocations: ['tomorrow morning', 'see you tomorrow'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'yesterday', term: 'yesterday', normalizedTerm: 'yesterday', partOfSpeech: ['adverb', 'noun'], ipa: '/jˈɛstədˌeɪ/',
    chineseShort: '昨天', chineseExplanation: '今天之前的那一天。', englishDefinition: 'The day before today.',
    examples: [{ english: 'I saw him yesterday.', malay: 'Saya melihatnya semalam.', chinese: '我昨天见到他。' }], collocations: ['yesterday morning', 'since yesterday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hour', term: 'hour', normalizedTerm: 'hour', partOfSpeech: ['noun'], ipa: '/ˈaʊə/',
    chineseShort: '小时', chineseExplanation: '等于六十分钟的时间单位。', englishDefinition: 'A period of sixty minutes.',
    examples: [{ english: 'The journey takes one hour.', malay: 'Perjalanan itu mengambil masa satu jam.', chinese: '这段路程需要一个小时。' }], collocations: ['an hour', 'half an hour'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'minute', term: 'minute', normalizedTerm: 'minute', partOfSpeech: ['noun'], ipa: '/mˈɪnɪt/',
    chineseShort: '分钟', chineseExplanation: '等于六十秒的时间单位。', englishDefinition: 'A period of sixty seconds.',
    examples: [{ english: 'Please wait five minutes.', malay: 'Sila tunggu lima minit.', chinese: '请等五分钟。' }], collocations: ['five minutes', 'a minute ago'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'second', term: 'second', normalizedTerm: 'second', partOfSpeech: ['noun'], ipa: '/sˈɛkənd/',
    chineseShort: '秒；第二', chineseExplanation: '一分钟的六十分之一，也可表示顺序中的第二。', englishDefinition: 'One sixtieth of a minute, or the number after first.',
    examples: [{ english: 'Wait a second, please.', malay: 'Tunggu sebentar.', chinese: '请等一下。' }], collocations: ['a few seconds', 'one second'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'monday', term: 'monday', normalizedTerm: 'monday', partOfSpeech: ['noun'], ipa: '/mˈʌndeɪ/',
    chineseShort: '星期一', chineseExplanation: '一周中的星期一。', englishDefinition: 'The day of the week after Sunday and before Tuesday.',
    examples: [{ english: 'School starts again on Monday.', malay: 'Sekolah bermula semula pada hari Isnin.', chinese: '星期一学校重新上课。' }], collocations: ['Monday morning', 'next Monday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weekend', term: 'weekend', normalizedTerm: 'weekend', partOfSpeech: ['noun'], ipa: '/wiːkˈɛnd/',
    chineseShort: '周末', chineseExplanation: '通常指星期六和星期日。', englishDefinition: 'Saturday and Sunday, or the period at the end of the working week.',
    examples: [{ english: 'We visit the park at the weekend.', malay: 'Kami melawat taman pada hujung minggu.', chinese: '我们周末去公园。' }], collocations: ['this weekend', 'weekend trip'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'birthday', term: 'birthday', normalizedTerm: 'birthday', partOfSpeech: ['noun'], ipa: '/bˈɜːθdeɪ/',
    chineseShort: '生日', chineseExplanation: '一个人每年纪念出生日期的日子。', englishDefinition: 'The day each year that marks when someone was born.',
    examples: [{ english: 'Today is my sister\'s birthday.', malay: 'Hari ini ialah hari lahir kakak saya.', chinese: '今天是我姐姐的生日。' }], collocations: ['birthday cake', 'birthday party'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'date', term: 'date', normalizedTerm: 'date', partOfSpeech: ['noun'], ipa: '/dˈeɪt/',
    chineseShort: '日期；约会', chineseExplanation: '日历上的某一天，也可表示两个人约定一起见面。', englishDefinition: 'A particular day of the month or year.',
    examples: [{ english: 'What is the date today?', malay: 'Apakah tarikh hari ini?', chinese: '今天是几号？' }], collocations: ['today\'s date', 'date of birth'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'calendar', term: 'calendar', normalizedTerm: 'calendar', partOfSpeech: ['noun'], ipa: '/kˈalɛndə/',
    chineseShort: '日历', chineseExplanation: '显示一年中的月份、星期和日期的表或册子。', englishDefinition: 'A chart or book that shows the days, weeks, and months of a year.',
    examples: [{ english: 'Mark the date on the calendar.', malay: 'Tandakan tarikh itu pada kalendar.', chinese: '把这个日期标在日历上。' }], collocations: ['wall calendar', 'school calendar'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sun', term: 'sun', normalizedTerm: 'sun', partOfSpeech: ['noun'], ipa: '/sˈʌn/',
    chineseShort: '太阳', chineseExplanation: '照亮并加热地球的恒星。', englishDefinition: 'The star that gives Earth light and heat.',
    examples: [{ english: 'The sun is bright today.', malay: 'Matahari bersinar terang hari ini.', chinese: '今天阳光很明亮。' }], collocations: ['hot sun', 'sunlight'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'rain', term: 'rain', normalizedTerm: 'rain', partOfSpeech: ['noun', 'verb'], ipa: '/ɹˈeɪn/',
    chineseShort: '雨；下雨', chineseExplanation: '从云中落下的水滴，也可表示下雨这一动作。', englishDefinition: 'Water that falls from clouds, or to fall as rain.',
    examples: [{ english: 'It may rain this afternoon.', malay: 'Hujan mungkin turun petang ini.', chinese: '今天下午可能会下雨。' }], collocations: ['heavy rain', 'rainy day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'snow', term: 'snow', normalizedTerm: 'snow', partOfSpeech: ['noun', 'verb'], ipa: '/snˈəʊ/',
    chineseShort: '雪；下雪', chineseExplanation: '天气寒冷时从云中落下的白色冰晶。', englishDefinition: 'Soft white pieces of frozen water that fall from clouds.',
    examples: [{ english: 'The children are playing in the snow.', malay: 'Kanak-kanak sedang bermain di dalam salji.', chinese: '孩子们正在雪地里玩。' }], collocations: ['heavy snow', 'snowy day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wind', term: 'wind', normalizedTerm: 'wind', partOfSpeech: ['noun'], ipa: '/wˈɪnd/',
    chineseShort: '风', chineseExplanation: '空气在户外流动形成的自然现象。', englishDefinition: 'Moving air outside.',
    examples: [{ english: 'The wind is strong today.', malay: 'Angin bertiup kuat hari ini.', chinese: '今天风很大。' }], collocations: ['strong wind', 'cold wind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cloud', term: 'cloud', normalizedTerm: 'cloud', partOfSpeech: ['noun'], ipa: '/klˈaʊd/',
    chineseShort: '云', chineseExplanation: '天空中由小水滴或冰晶形成的白色或灰色团块。', englishDefinition: 'A white or grey mass of tiny water drops in the sky.',
    examples: [{ english: 'There is a dark cloud above us.', malay: 'Terdapat awan gelap di atas kami.', chinese: '我们上方有一朵乌云。' }], collocations: ['dark cloud', 'rain cloud'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sky', term: 'sky', normalizedTerm: 'sky', partOfSpeech: ['noun'], ipa: '/skˈaɪ/',
    chineseShort: '天空', chineseExplanation: '从地面向上看见的广大空间。', englishDefinition: 'The space above the Earth that you can see when you look up.',
    examples: [{ english: 'The sky is blue this morning.', malay: 'Langit berwarna biru pagi ini.', chinese: '今天早上的天空是蓝色的。' }], collocations: ['blue sky', 'night sky'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weather', term: 'weather', normalizedTerm: 'weather', partOfSpeech: ['noun'], ipa: '/wˈɛðə/',
    chineseShort: '天气', chineseExplanation: '某个时间和地点的温度、雨、风等大气状况。', englishDefinition: 'The condition of the air outside, including temperature, rain, and wind.',
    examples: [{ english: 'The weather is nice today.', malay: 'Cuaca baik hari ini.', chinese: '今天天气很好。' }], collocations: ['hot weather', 'weather report'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hot', term: 'hot', normalizedTerm: 'hot', partOfSpeech: ['adjective'], ipa: '/hˈɒt/',
    chineseShort: '热的；炎热的', chineseExplanation: '温度高，或让人感觉很热。', englishDefinition: 'Having a high temperature.',
    examples: [{ english: 'The soup is very hot.', malay: 'Sup itu sangat panas.', chinese: '这碗汤很烫。' }], collocations: ['hot weather', 'hot water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cold', term: 'cold', normalizedTerm: 'cold', partOfSpeech: ['adjective'], ipa: '/kˈəʊld/',
    chineseShort: '冷的；寒冷的', chineseExplanation: '温度低，或让人感觉寒冷。', englishDefinition: 'Having a low temperature.',
    examples: [{ english: 'It is cold outside today.', malay: 'Cuaca sejuk di luar hari ini.', chinese: '今天外面很冷。' }], collocations: ['cold weather', 'cold water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'warm', term: 'warm', normalizedTerm: 'warm', partOfSpeech: ['adjective'], ipa: '/wˈɔːm/',
    chineseShort: '温暖的；暖和的', chineseExplanation: '温度适中偏高，让人感觉舒服。', englishDefinition: 'Pleasantly hot, but not very hot.',
    examples: [{ english: 'The water is warm.', malay: 'Air itu suam.', chinese: '水是温的。' }], collocations: ['warm weather', 'keep warm'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cool', term: 'cool', normalizedTerm: 'cool', partOfSpeech: ['adjective'], ipa: '/kˈuːl/',
    chineseShort: '凉爽的', chineseExplanation: '温度稍低但通常让人感觉舒服。', englishDefinition: 'Slightly cold in a pleasant way.',
    examples: [{ english: 'The evening is cool and comfortable.', malay: 'Waktu petang terasa nyaman dan selesa.', chinese: '傍晚凉爽又舒服。' }], collocations: ['cool weather', 'cool air'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tree', term: 'tree', normalizedTerm: 'tree', partOfSpeech: ['noun'], ipa: '/tɹˈiː/',
    chineseShort: '树', chineseExplanation: '有木质树干和树枝的高大植物。', englishDefinition: 'A tall plant with a wooden trunk and branches.',
    examples: [{ english: 'There is a big tree near the house.', malay: 'Terdapat pokok besar berhampiran rumah.', chinese: '房子附近有一棵大树。' }], collocations: ['apple tree', 'green tree'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'flower', term: 'flower', normalizedTerm: 'flower', partOfSpeech: ['noun'], ipa: '/flˈaʊə/',
    chineseShort: '花', chineseExplanation: '植物上通常色彩鲜艳、可产生种子的部分。', englishDefinition: 'The colourful part of a plant that can produce seeds.',
    examples: [{ english: 'She put the flowers in a vase.', malay: 'Dia meletakkan bunga di dalam pasu.', chinese: '她把花放进花瓶里。' }], collocations: ['red flower', 'flower garden'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'grass', term: 'grass', normalizedTerm: 'grass', partOfSpeech: ['noun'], ipa: '/ɡɹˈas/',
    chineseShort: '草；草地', chineseExplanation: '地面上常见的绿色细叶植物。', englishDefinition: 'A common green plant that covers the ground.',
    examples: [{ english: 'Do not walk on the grass.', malay: 'Jangan berjalan di atas rumput.', chinese: '不要踩草地。' }], collocations: ['green grass', 'cut the grass'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'river', term: 'river', normalizedTerm: 'river', partOfSpeech: ['noun'], ipa: '/ɹˈɪvə/',
    chineseShort: '河；河流', chineseExplanation: '自然流动并通向湖泊、海洋或另一条河的水道。', englishDefinition: 'A natural flow of water that moves towards a lake or sea.',
    examples: [{ english: 'The river runs through the town.', malay: 'Sungai itu mengalir melalui pekan.', chinese: '这条河穿过城镇。' }], collocations: ['wide river', 'river water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sea', term: 'sea', normalizedTerm: 'sea', partOfSpeech: ['noun'], ipa: '/sˈiː/',
    chineseShort: '海；海洋', chineseExplanation: '大片咸水区域，通常比 ocean 小或指靠近陆地的海域。', englishDefinition: 'A large area of salt water.',
    examples: [{ english: 'We can see the sea from the hotel.', malay: 'Kami dapat melihat laut dari hotel.', chinese: '我们从酒店可以看到海。' }], collocations: ['by the sea', 'sea water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'beach', term: 'beach', normalizedTerm: 'beach', partOfSpeech: ['noun'], ipa: '/bˈiːtʃ/',
    chineseShort: '海滩；沙滩', chineseExplanation: '海边或湖边由沙子或小石子形成的地带。', englishDefinition: 'An area of sand or small stones beside the sea or a lake.',
    examples: [{ english: 'The children played on the beach.', malay: 'Kanak-kanak bermain di pantai.', chinese: '孩子们在海滩上玩。' }], collocations: ['sandy beach', 'beach holiday'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'mountain', term: 'mountain', normalizedTerm: 'mountain', partOfSpeech: ['noun'], ipa: '/mˈaʊntɪn/',
    chineseShort: '山；高山', chineseExplanation: '从周围地面高高隆起的大型自然地形。', englishDefinition: 'A very high area of land with steep sides.',
    examples: [{ english: 'We can see the mountain from here.', malay: 'Kami dapat melihat gunung dari sini.', chinese: '我们从这里可以看到那座山。' }], collocations: ['high mountain', 'mountain road'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'animal', term: 'animal', normalizedTerm: 'animal', partOfSpeech: ['noun'], ipa: '/ˈanɪməl/',
    chineseShort: '动物', chineseExplanation: '能移动和感受周围环境的生物，如狗、猫、鸟等。', englishDefinition: 'A living creature such as a dog, cat, or bird.',
    examples: [{ english: 'The zoo has many animals.', malay: 'Zoo itu mempunyai banyak haiwan.', chinese: '动物园里有很多动物。' }], collocations: ['wild animal', 'farm animal'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dog', term: 'dog', normalizedTerm: 'dog', partOfSpeech: ['noun'], ipa: '/dˈɒɡ/',
    chineseShort: '狗', chineseExplanation: '常被人饲养作宠物或工作伙伴的动物。', englishDefinition: 'A common animal often kept as a pet.',
    examples: [{ english: 'Their dog likes to run in the park.', malay: 'Anjing mereka suka berlari di taman.', chinese: '他们的狗喜欢在公园里跑。' }], collocations: ['pet dog', 'small dog'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'head', term: 'head', normalizedTerm: 'head', partOfSpeech: ['noun'], ipa: '/hˈɛd/',
    chineseShort: '头；头部', chineseExplanation: '身体最上方的部分，包括脸、眼睛、耳朵等。', englishDefinition: 'The top part of the body containing the face and brain.',
    examples: [{ english: 'He put a hat on his head.', malay: 'Dia memakai topi di kepalanya.', chinese: '他把帽子戴在头上。' }], collocations: ['shake your head', 'head pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'face', term: 'face', normalizedTerm: 'face', partOfSpeech: ['noun'], ipa: '/fˈeɪs/',
    chineseShort: '脸；面部', chineseExplanation: '头部前方，包括眼睛、鼻子和嘴巴的部分。', englishDefinition: 'The front part of the head, with the eyes, nose, and mouth.',
    examples: [{ english: 'Wash your face with warm water.', malay: 'Basuh muka anda dengan air suam.', chinese: '用温水洗脸。' }], collocations: ['happy face', 'wash your face'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'eye', term: 'eye', normalizedTerm: 'eye', partOfSpeech: ['noun'], ipa: '/ˈaɪ/',
    chineseShort: '眼睛', chineseExplanation: '用来看东西的身体器官。', englishDefinition: 'One of the two body parts used for seeing.',
    examples: [{ english: 'She has blue eyes.', malay: 'Matanya berwarna biru.', chinese: '她有蓝色的眼睛。' }], collocations: ['close your eyes', 'eye doctor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ear', term: 'ear', normalizedTerm: 'ear', partOfSpeech: ['noun'], ipa: '/ˈiə/',
    chineseShort: '耳朵', chineseExplanation: '用来听声音的身体器官。', englishDefinition: 'One of the body parts used for hearing.',
    examples: [{ english: 'My left ear hurts.', malay: 'Telinga kiri saya sakit.', chinese: '我的左耳疼。' }], collocations: ['left ear', 'ear pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'nose', term: 'nose', normalizedTerm: 'nose', partOfSpeech: ['noun'], ipa: '/nˈəʊz/',
    chineseShort: '鼻子', chineseExplanation: '脸上用来呼吸和闻气味的部位。', englishDefinition: 'The part of the face used for smelling and breathing.',
    examples: [{ english: 'My nose is cold.', malay: 'Hidung saya sejuk.', chinese: '我的鼻子很冷。' }], collocations: ['runny nose', 'big nose'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'mouth', term: 'mouth', normalizedTerm: 'mouth', partOfSpeech: ['noun'], ipa: '/mˈaʊθ/',
    chineseShort: '嘴；口', chineseExplanation: '脸上用来吃、说话和呼吸的开口。', englishDefinition: 'The opening in the face used for eating and speaking.',
    examples: [{ english: 'Open your mouth, please.', malay: 'Sila buka mulut anda.', chinese: '请张开嘴。' }], collocations: ['open your mouth', 'dry mouth'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tooth', term: 'tooth', normalizedTerm: 'tooth', partOfSpeech: ['noun'], ipa: '/tˈuːθ/',
    chineseShort: '牙齿', chineseExplanation: '口中坚硬的白色部分，用来咬和咀嚼食物。', englishDefinition: 'One of the hard white parts in the mouth used for biting food.',
    examples: [{ english: 'This tooth hurts when I eat.', malay: 'Gigi ini sakit apabila saya makan.', chinese: '我吃东西时这颗牙会痛。' }], collocations: ['brush your teeth', 'tooth pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hair', term: 'hair', normalizedTerm: 'hair', partOfSpeech: ['noun'], ipa: '/hˈeə/',
    chineseShort: '头发；毛发', chineseExplanation: '长在头部和身体某些部位的细丝状物。', englishDefinition: 'The thin strands that grow on the head and body.',
    examples: [{ english: 'Her hair is long and black.', malay: 'Rambutnya panjang dan hitam.', chinese: '她的头发又长又黑。' }], collocations: ['long hair', 'wash your hair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hand', term: 'hand', normalizedTerm: 'hand', partOfSpeech: ['noun'], ipa: '/hˈand/',
    chineseShort: '手', chineseExplanation: '手臂末端、包括手掌和手指的身体部位。', englishDefinition: 'The body part at the end of the arm, with fingers.',
    examples: [{ english: 'Raise your hand if you know the answer.', malay: 'Angkat tangan jika anda tahu jawapannya.', chinese: '如果你知道答案就举手。' }], collocations: ['wash your hands', 'right hand'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'arm', term: 'arm', normalizedTerm: 'arm', partOfSpeech: ['noun'], ipa: '/ˈɑːm/',
    chineseShort: '手臂', chineseExplanation: '从肩膀到手的身体部位。', englishDefinition: 'The body part from the shoulder to the hand.',
    examples: [{ english: 'He carried the bag under his arm.', malay: 'Dia membawa beg itu di bawah lengannya.', chinese: '他把包夹在手臂下。' }], collocations: ['left arm', 'arm pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'leg', term: 'leg', normalizedTerm: 'leg', partOfSpeech: ['noun'], ipa: '/lˈɛɡ/',
    chineseShort: '腿', chineseExplanation: '从身体下部到脚的身体部位，用于站立和行走。', englishDefinition: 'One of the body parts used for standing and walking.',
    examples: [{ english: 'My legs are tired after the walk.', malay: 'Kaki saya letih selepas berjalan.', chinese: '走路后我的腿很累。' }], collocations: ['right leg', 'leg pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'foot', term: 'foot', normalizedTerm: 'foot', partOfSpeech: ['noun'], ipa: '/fˈʊt/',
    chineseShort: '脚；足', chineseExplanation: '腿的末端、用来站立和行走的身体部位。', englishDefinition: 'The body part at the end of the leg used for standing and walking.',
    examples: [{ english: 'My left foot is wet.', malay: 'Kaki kiri saya basah.', chinese: '我的左脚湿了。' }], collocations: ['left foot', 'on foot'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'body', term: 'body', normalizedTerm: 'body', partOfSpeech: ['noun'], ipa: '/bˈɒdi/',
    chineseShort: '身体', chineseExplanation: '人或动物的整个身体结构。', englishDefinition: 'The whole physical form of a person or animal.',
    examples: [{ english: 'Exercise is good for your body.', malay: 'Senaman baik untuk tubuh anda.', chinese: '运动对身体有好处。' }], collocations: ['human body', 'body temperature'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'heart', term: 'heart', normalizedTerm: 'heart', partOfSpeech: ['noun'], ipa: '/hˈɑːt/',
    chineseShort: '心脏；心', chineseExplanation: '胸腔内推动血液循环的重要器官，也常用于表达感情。', englishDefinition: 'The organ in the chest that pumps blood around the body.',
    examples: [{ english: 'The doctor checked his heart.', malay: 'Doktor memeriksa jantungnya.', chinese: '医生检查了他的心脏。' }], collocations: ['heart rate', 'heart problem'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sick', term: 'sick', normalizedTerm: 'sick', partOfSpeech: ['adjective'], ipa: '/sˈɪk/',
    chineseShort: '生病的；恶心的', chineseExplanation: '身体不舒服或患病的，也可表示想吐。', englishDefinition: 'Ill or not feeling well.',
    examples: [{ english: 'I feel sick today.', malay: 'Saya berasa tidak sihat hari ini.', chinese: '我今天觉得不舒服。' }], collocations: ['feel sick', 'sick child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'pain', term: 'pain', normalizedTerm: 'pain', partOfSpeech: ['noun'], ipa: '/pˈeɪn/',
    chineseShort: '疼痛', chineseExplanation: '身体受伤或生病时产生的不舒服感觉。', englishDefinition: 'An unpleasant physical feeling caused by illness or injury.',
    examples: [{ english: 'I have pain in my back.', malay: 'Belakang saya sakit.', chinese: '我的背部疼痛。' }], collocations: ['back pain', 'feel pain'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'doctor', term: 'doctor', normalizedTerm: 'doctor', partOfSpeech: ['noun'], ipa: '/dˈɒktə/',
    chineseShort: '医生', chineseExplanation: '接受医学训练、诊断和治疗病人的专业人员。', englishDefinition: 'A person trained to treat sick or injured people.',
    examples: [{ english: 'You should see a doctor.', malay: 'Anda patut berjumpa doktor.', chinese: '你应该去看医生。' }], collocations: ['family doctor', 'see a doctor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'nurse', term: 'nurse', normalizedTerm: 'nurse', partOfSpeech: ['noun'], ipa: '/nˈɜːs/',
    chineseShort: '护士', chineseExplanation: '照顾病人并协助医生进行医疗工作的人员。', englishDefinition: 'A person trained to care for sick or injured people.',
    examples: [{ english: 'The nurse gave me some water.', malay: 'Jururawat memberikan sedikit air kepada saya.', chinese: '护士给了我一些水。' }], collocations: ['hospital nurse', 'school nurse'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'medicine', term: 'medicine', normalizedTerm: 'medicine', partOfSpeech: ['noun'], ipa: '/mˈɛdsən/',
    chineseShort: '药；药物', chineseExplanation: '用来治疗或减轻疾病症状的物质。', englishDefinition: 'A substance used to treat illness or reduce symptoms.',
    examples: [{ english: 'Take this medicine after food.', malay: 'Ambil ubat ini selepas makan.', chinese: '饭后服用这个药。' }], collocations: ['take medicine', 'cold medicine'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'health', term: 'health', normalizedTerm: 'health', partOfSpeech: ['noun'], ipa: '/hˈɛlθ/',
    chineseShort: '健康', chineseExplanation: '身体和精神良好、没有疾病的状态。', englishDefinition: 'The condition of your body and mind, especially whether you are well.',
    examples: [{ english: 'Walking is good for your health.', malay: 'Berjalan kaki baik untuk kesihatan anda.', chinese: '走路对健康有好处。' }], collocations: ['good health', 'health care'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'shirt', term: 'shirt', normalizedTerm: 'shirt', partOfSpeech: ['noun'], ipa: '/ʃˈɜːt/',
    chineseShort: '衬衫；上衣', chineseExplanation: '穿在上半身、通常有袖子和领子的衣服。', englishDefinition: 'A piece of clothing worn on the upper body, often with sleeves and a collar.',
    examples: [{ english: 'He is wearing a white shirt.', malay: 'Dia memakai kemeja putih.', chinese: '他穿着一件白衬衫。' }], collocations: ['white shirt', 'school shirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sweater', term: 'sweater', normalizedTerm: 'sweater', partOfSpeech: ['noun'], ipa: '/swˈɛtə/',
    chineseShort: '毛衣', chineseExplanation: '穿在上半身、通常用针织材料制成的保暖衣物。', englishDefinition: 'A warm knitted piece of clothing worn on the upper body.',
    examples: [{ english: 'I need a sweater because it is cold.', malay: 'Saya memerlukan baju sejuk kerana cuaca sejuk.', chinese: '天气冷，我需要一件毛衣。' }], collocations: ['warm sweater', 'wool sweater'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'trousers', term: 'trousers', normalizedTerm: 'trousers', partOfSpeech: ['noun'], ipa: '/tɹˈaʊsəz/',
    chineseShort: '长裤', chineseExplanation: '从腰部穿到两条腿上的衣服。', englishDefinition: 'Clothing that covers the body from the waist to the legs.',
    examples: [{ english: 'These trousers are too long.', malay: 'Seluar ini terlalu panjang.', chinese: '这条长裤太长了。' }], collocations: ['black trousers', 'pair of trousers'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dress', term: 'dress', normalizedTerm: 'dress', partOfSpeech: ['noun'], ipa: '/dɹˈɛs/',
    chineseShort: '连衣裙；裙装', chineseExplanation: '通常由女性或女孩穿的一件式衣服。', englishDefinition: 'A one-piece item of clothing often worn by women or girls.',
    examples: [{ english: 'She wore a blue dress to the party.', malay: 'Dia memakai gaun biru ke majlis itu.', chinese: '她穿了一条蓝色连衣裙去聚会。' }], collocations: ['summer dress', 'long dress'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'skirt', term: 'skirt', normalizedTerm: 'skirt', partOfSpeech: ['noun'], ipa: '/skˈɜːt/',
    chineseShort: '裙子', chineseExplanation: '从腰部向下穿、没有分成两条裤腿的衣物。', englishDefinition: 'A piece of clothing worn from the waist down without separate legs.',
    examples: [{ english: 'Her skirt is black.', malay: 'Skirtnya berwarna hitam.', chinese: '她的裙子是黑色的。' }], collocations: ['short skirt', 'school skirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'coat', term: 'coat', normalizedTerm: 'coat', partOfSpeech: ['noun'], ipa: '/kˈəʊt/',
    chineseShort: '外套；大衣', chineseExplanation: '穿在其他衣服外面用来保暖或防风雨的衣物。', englishDefinition: 'An outer piece of clothing worn for warmth or protection.',
    examples: [{ english: 'Put on your coat before you go outside.', malay: 'Pakai kot anda sebelum keluar.', chinese: '出门前穿上外套。' }], collocations: ['winter coat', 'long coat'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'shoe', term: 'shoe', normalizedTerm: 'shoe', partOfSpeech: ['noun'], ipa: '/ʃˈuː/',
    chineseShort: '鞋', chineseExplanation: '穿在脚上用来保护脚的物品。', englishDefinition: 'A covering worn on the foot for protection.',
    examples: [{ english: 'I need a new pair of shoes.', malay: 'Saya memerlukan sepasang kasut baharu.', chinese: '我需要一双新鞋。' }], collocations: ['running shoe', 'pair of shoes'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sock', term: 'sock', normalizedTerm: 'sock', partOfSpeech: ['noun'], ipa: '/sˈɒk/',
    chineseShort: '袜子', chineseExplanation: '穿在脚上、通常在鞋子里面的柔软衣物。', englishDefinition: 'A soft piece of clothing worn on the foot inside a shoe.',
    examples: [{ english: 'One of my socks is missing.', malay: 'Sebelah stoking saya hilang.', chinese: '我的一只袜子不见了。' }], collocations: ['white socks', 'pair of socks'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hat', term: 'hat', normalizedTerm: 'hat', partOfSpeech: ['noun'], ipa: '/hˈat/',
    chineseShort: '帽子', chineseExplanation: '戴在头上的衣物，可用于保暖、遮阳或装饰。', englishDefinition: 'A piece of clothing worn on the head.',
    examples: [{ english: 'She is wearing a red hat.', malay: 'Dia memakai topi merah.', chinese: '她戴着一顶红帽子。' }], collocations: ['sun hat', 'wear a hat'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'clothes', term: 'clothes', normalizedTerm: 'clothes', partOfSpeech: ['noun'], ipa: '/klˈəʊðz/',
    chineseShort: '衣服；服装', chineseExplanation: '人们穿在身上的各种衣物的总称。', englishDefinition: 'Things that people wear on their bodies.',
    examples: [{ english: 'My clothes are in the bag.', malay: 'Pakaian saya berada di dalam beg.', chinese: '我的衣服在包里。' }], collocations: ['clean clothes', 'summer clothes'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'size', term: 'size', normalizedTerm: 'size', partOfSpeech: ['noun'], ipa: '/sˈaɪz/',
    chineseShort: '尺寸；大小', chineseExplanation: '表示东西有多大、多小或衣服鞋子的号码。', englishDefinition: 'How large or small something is.',
    examples: [{ english: 'Do you have this shirt in my size?', malay: 'Adakah kemeja ini tersedia dalam saiz saya?', chinese: '这件衬衫有我的尺码吗？' }], collocations: ['small size', 'right size'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'colour', term: 'colour', normalizedTerm: 'colour', partOfSpeech: ['noun'], ipa: '/kˈʌlə/',
    chineseShort: '颜色', chineseExplanation: '物体呈现出的红、蓝、绿等视觉特征。', englishDefinition: 'The appearance of something such as red, blue, or green.',
    examples: [{ english: 'What colour is your bag?', malay: 'Apakah warna beg anda?', chinese: '你的包是什么颜色？' }], collocations: ['favourite colour', 'bright colour'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'black', term: 'black', normalizedTerm: 'black', partOfSpeech: ['adjective', 'noun'], ipa: '/blˈak/',
    chineseShort: '黑色的；黑色', chineseExplanation: '像夜晚或煤一样很深的颜色。', englishDefinition: 'The darkest colour, like the colour of coal.',
    examples: [{ english: 'He bought a black bag.', malay: 'Dia membeli beg hitam.', chinese: '他买了一个黑色的包。' }], collocations: ['black shoes', 'black coffee'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'white', term: 'white', normalizedTerm: 'white', partOfSpeech: ['adjective', 'noun'], ipa: '/wˈaɪt/',
    chineseShort: '白色的；白色', chineseExplanation: '像雪或牛奶一样很浅的颜色。', englishDefinition: 'The lightest colour, like snow or milk.',
    examples: [{ english: 'The walls are white.', malay: 'Dinding itu berwarna putih.', chinese: '墙壁是白色的。' }], collocations: ['white shirt', 'white rice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'red', term: 'red', normalizedTerm: 'red', partOfSpeech: ['adjective', 'noun'], ipa: '/ɹˈɛd/',
    chineseShort: '红色的；红色', chineseExplanation: '像血液或成熟番茄一样的颜色。', englishDefinition: 'The colour of blood or a ripe tomato.',
    examples: [{ english: 'She has a red dress.', malay: 'Dia mempunyai gaun merah.', chinese: '她有一条红色连衣裙。' }], collocations: ['red light', 'red shirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'blue', term: 'blue', normalizedTerm: 'blue', partOfSpeech: ['adjective', 'noun'], ipa: '/blˈuː/',
    chineseShort: '蓝色的；蓝色', chineseExplanation: '像晴朗天空一样的颜色。', englishDefinition: 'The colour of a clear sky.',
    examples: [{ english: 'The sky is blue today.', malay: 'Langit berwarna biru hari ini.', chinese: '今天的天空是蓝色的。' }], collocations: ['blue sky', 'blue shirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'green', term: 'green', normalizedTerm: 'green', partOfSpeech: ['adjective', 'noun'], ipa: '/ɡɹˈiːn/',
    chineseShort: '绿色的；绿色', chineseExplanation: '像草和许多树叶一样的颜色。', englishDefinition: 'The colour of grass and many leaves.',
    examples: [{ english: 'The door is green.', malay: 'Pintu itu berwarna hijau.', chinese: '那扇门是绿色的。' }], collocations: ['green tea', 'green light'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'buy', term: 'buy', normalizedTerm: 'buy', partOfSpeech: ['verb'], ipa: '/bˈaɪ/',
    chineseShort: '买；购买', chineseExplanation: '付钱取得商品或服务。', englishDefinition: 'To get something by paying money for it.',
    examples: [{ english: 'I need to buy some bread.', malay: 'Saya perlu membeli roti.', chinese: '我需要买一些面包。' }], collocations: ['buy food', 'buy online'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sell', term: 'sell', normalizedTerm: 'sell', partOfSpeech: ['verb'], ipa: '/sˈɛl/',
    chineseShort: '卖；出售', chineseExplanation: '收取钱并把商品或服务提供给别人。', englishDefinition: 'To give something to someone in exchange for money.',
    examples: [{ english: 'They sell fruit at the market.', malay: 'Mereka menjual buah-buahan di pasar.', chinese: '他们在市场卖水果。' }], collocations: ['sell clothes', 'sell online'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'price', term: 'price', normalizedTerm: 'price', partOfSpeech: ['noun'], ipa: '/pɹˈaɪs/',
    chineseShort: '价格；价钱', chineseExplanation: '购买某件商品或服务需要支付的钱。', englishDefinition: 'The amount of money you pay for something.',
    examples: [{ english: 'What is the price of this bag?', malay: 'Berapakah harga beg ini?', chinese: '这个包多少钱？' }], collocations: ['low price', 'price tag'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'eat', term: 'eat', normalizedTerm: 'eat', partOfSpeech: ['verb'], ipa: '/ˈiːt/',
    chineseShort: '吃', chineseExplanation: '把食物放入口中咀嚼并吞下。', englishDefinition: 'To put food in your mouth and swallow it.',
    examples: [{ english: 'We eat dinner at seven.', malay: 'Kami makan malam pada pukul tujuh.', chinese: '我们七点吃晚餐。' }], collocations: ['eat breakfast', 'eat together'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'drink', term: 'drink', normalizedTerm: 'drink', partOfSpeech: ['verb', 'noun'], ipa: '/dɹˈɪŋk/',
    chineseShort: '喝；饮料', chineseExplanation: '把液体送入口中吞下，也可指可饮用的液体。', englishDefinition: 'To take liquid into your mouth and swallow it.',
    examples: [{ english: 'Drink some water after exercise.', malay: 'Minum sedikit air selepas bersenam.', chinese: '运动后喝一些水。' }], collocations: ['drink water', 'hot drink'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sleep', term: 'sleep', normalizedTerm: 'sleep', partOfSpeech: ['verb', 'noun'], ipa: '/slˈiːp/',
    chineseShort: '睡觉；睡眠', chineseExplanation: '身体和意识休息的一种自然状态。', englishDefinition: 'To rest with your eyes closed and your mind not fully active.',
    examples: [{ english: 'I usually sleep for eight hours.', malay: 'Saya biasanya tidur selama lapan jam.', chinese: '我通常睡八个小时。' }], collocations: ['sleep well', 'go to sleep'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wake', term: 'wake', normalizedTerm: 'wake', partOfSpeech: ['verb'], ipa: '/wˈeɪk/',
    chineseShort: '醒来；叫醒', chineseExplanation: '停止睡眠，或让别人停止睡眠。', englishDefinition: 'To stop sleeping or make someone stop sleeping.',
    examples: [{ english: 'I wake at six every morning.', malay: 'Saya bangun pada pukul enam setiap pagi.', chinese: '我每天早上六点醒来。' }], collocations: ['wake up', 'wake early'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'get', term: 'get', normalizedTerm: 'get', partOfSpeech: ['verb'], ipa: '/ɡˈɛt/',
    chineseShort: '得到；取得；到达', chineseExplanation: '非常常用的动词，可表示获得、收到或到达等基本意思。', englishDefinition: 'To receive, obtain, or reach something or somewhere.',
    examples: [{ english: 'I get home at six.', malay: 'Saya sampai di rumah pada pukul enam.', chinese: '我六点到家。' }], collocations: ['get home', 'get ready'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'give', term: 'give', normalizedTerm: 'give', partOfSpeech: ['verb'], ipa: '/ɡˈɪv/',
    chineseShort: '给；给予', chineseExplanation: '把某物交给另一个人。', englishDefinition: 'To hand or provide something to another person.',
    examples: [{ english: 'Please give me the book.', malay: 'Sila berikan buku itu kepada saya.', chinese: '请把那本书给我。' }], collocations: ['give help', 'give someone something'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'take', term: 'take', normalizedTerm: 'take', partOfSpeech: ['verb'], ipa: '/tˈeɪk/',
    chineseShort: '拿；带；乘坐', chineseExplanation: '把某物拿走、带走，也常用于乘坐交通工具。', englishDefinition: 'To carry something with you, or to use a form of transport.',
    examples: [{ english: 'Take your bag with you.', malay: 'Bawa beg anda bersama-sama.', chinese: '把你的包带上。' }], collocations: ['take a bus', 'take a photo'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'make', term: 'make', normalizedTerm: 'make', partOfSpeech: ['verb'], ipa: '/mˈeɪk/',
    chineseShort: '制作；使得', chineseExplanation: '创造、制作某物，或使某种情况发生。', englishDefinition: 'To create or produce something.',
    examples: [{ english: 'We make dinner together.', malay: 'Kami menyediakan makan malam bersama-sama.', chinese: '我们一起做晚餐。' }], collocations: ['make food', 'make a mistake'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'do', term: 'do', normalizedTerm: 'do', partOfSpeech: ['verb'], ipa: '/dˈuː/',
    chineseShort: '做；进行', chineseExplanation: '执行某项活动、工作或任务。', englishDefinition: 'To perform an activity, job, or task.',
    examples: [{ english: 'I do my homework after dinner.', malay: 'Saya membuat kerja rumah selepas makan malam.', chinese: '我晚餐后做作业。' }], collocations: ['do homework', 'do exercise'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'go', term: 'go', normalizedTerm: 'go', partOfSpeech: ['verb'], ipa: '/ɡˈəʊ/',
    chineseShort: '去；走', chineseExplanation: '从现在的位置移动到另一个地方。', englishDefinition: 'To move or travel to another place.',
    examples: [{ english: 'We go to school by bus.', malay: 'Kami pergi ke sekolah dengan bas.', chinese: '我们乘巴士去学校。' }], collocations: ['go home', 'go shopping'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'come', term: 'come', normalizedTerm: 'come', partOfSpeech: ['verb'], ipa: '/kˈʌm/',
    chineseShort: '来；来到', chineseExplanation: '向说话者所在的位置或某个指定地点移动。', englishDefinition: 'To move towards the speaker or a particular place.',
    examples: [{ english: 'Come here and sit down.', malay: 'Datang ke sini dan duduk.', chinese: '到这里来坐下。' }], collocations: ['come home', 'come back'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'see', term: 'see', normalizedTerm: 'see', partOfSpeech: ['verb'], ipa: '/sˈiː/',
    chineseShort: '看见；看到', chineseExplanation: '用眼睛注意到某人或某物。', englishDefinition: 'To notice someone or something with your eyes.',
    examples: [{ english: 'I can see the mountain from here.', malay: 'Saya dapat melihat gunung dari sini.', chinese: '我从这里可以看到那座山。' }], collocations: ['see a doctor', 'see clearly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'look', term: 'look', normalizedTerm: 'look', partOfSpeech: ['verb', 'noun'], ipa: '/lˈʊk/',
    chineseShort: '看；观看', chineseExplanation: '把眼睛朝向某人或某物以便看清楚。', englishDefinition: 'To direct your eyes towards someone or something.',
    examples: [{ english: 'Look at the picture on the wall.', malay: 'Lihat gambar pada dinding.', chinese: '看看墙上的图片。' }], collocations: ['look at', 'look for'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'watch', term: 'watch', normalizedTerm: 'watch', partOfSpeech: ['verb'], ipa: '/wˈɒtʃ/',
    chineseShort: '观看；注视', chineseExplanation: '一段时间内专注地看某事，尤其是电视、电影或活动。', englishDefinition: 'To look at something for a period of time.',
    examples: [{ english: 'We watch TV after dinner.', malay: 'Kami menonton televisyen selepas makan malam.', chinese: '我们晚餐后看电视。' }], collocations: ['watch TV', 'watch a movie'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'listen', term: 'listen', normalizedTerm: 'listen', partOfSpeech: ['verb'], ipa: '/lˈɪsən/',
    chineseShort: '听；聆听', chineseExplanation: '有意识地注意声音。', englishDefinition: 'To pay attention to sounds.',
    examples: [{ english: 'Listen to the teacher carefully.', malay: 'Dengar kata-kata guru dengan teliti.', chinese: '认真听老师讲。' }], collocations: ['listen to music', 'listen carefully'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'speak', term: 'speak', normalizedTerm: 'speak', partOfSpeech: ['verb'], ipa: '/spˈiːk/',
    chineseShort: '说话；讲某种语言', chineseExplanation: '用声音说出词语，也可表示会说某种语言。', englishDefinition: 'To say words or use a language.',
    examples: [{ english: 'Can you speak English?', malay: 'Bolehkah anda berbahasa Inggeris?', chinese: '你会说英语吗？' }], collocations: ['speak English', 'speak slowly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'say', term: 'say', normalizedTerm: 'say', partOfSpeech: ['verb'], ipa: '/sˈeɪ/',
    chineseShort: '说；说道', chineseExplanation: '用语言表达某些话。', englishDefinition: 'To speak words or express something in words.',
    examples: [{ english: 'Please say your name again.', malay: 'Sila sebut nama anda sekali lagi.', chinese: '请再说一次你的名字。' }], collocations: ['say hello', 'say something'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tell', term: 'tell', normalizedTerm: 'tell', partOfSpeech: ['verb'], ipa: '/tˈɛl/',
    chineseShort: '告诉；讲述', chineseExplanation: '把信息、故事或事实说给某人听。', englishDefinition: 'To give information or a story to someone.',
    examples: [{ english: 'Tell me your phone number.', malay: 'Beritahu saya nombor telefon anda.', chinese: '告诉我你的电话号码。' }], collocations: ['tell the truth', 'tell someone'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ask', term: 'ask', normalizedTerm: 'ask', partOfSpeech: ['verb'], ipa: '/ˈask/',
    chineseShort: '问；请求', chineseExplanation: '提出问题以获得信息，或请求别人做某事。', englishDefinition: 'To request information or ask someone to do something.',
    examples: [{ english: 'You can ask the teacher for help.', malay: 'Anda boleh meminta bantuan daripada guru.', chinese: '你可以向老师求助。' }], collocations: ['ask a question', 'ask for help'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'call', term: 'call', normalizedTerm: 'call', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɔːl/',
    chineseShort: '打电话；称呼', chineseExplanation: '用电话联系某人，也可表示给某人或某物取某个称呼。', englishDefinition: 'To contact someone by phone or use a particular name for someone.',
    examples: [{ english: 'Call me when you arrive.', malay: 'Hubungi saya apabila anda tiba.', chinese: '你到达时给我打电话。' }], collocations: ['call home', 'phone call'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'open', term: 'open', normalizedTerm: 'open', partOfSpeech: ['verb', 'adjective'], ipa: '/ˈəʊpən/',
    chineseShort: '打开；开着的', chineseExplanation: '把关闭的东西打开，也可表示商店等正在营业。', englishDefinition: 'To move something so it is not closed, or to be not closed.',
    examples: [{ english: 'Please open the window.', malay: 'Sila buka tingkap.', chinese: '请打开窗户。' }], collocations: ['open the door', 'open now'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'close', term: 'close', normalizedTerm: 'close', partOfSpeech: ['verb', 'adjective'], ipa: '/klˈəʊs/',
    chineseShort: '关闭；靠近的', chineseExplanation: '把打开的东西关上；作为形容词也可表示距离近。', englishDefinition: 'To shut something, or as an adjective to be near.',
    examples: [{ english: 'Close the door before you leave.', malay: 'Tutup pintu sebelum anda pergi.', chinese: '离开前把门关上。' }], collocations: ['close the door', 'close to'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'start', term: 'start', normalizedTerm: 'start', partOfSpeech: ['verb', 'noun'], ipa: '/stˈɑːt/',
    chineseShort: '开始；开端', chineseExplanation: '开始做某事或使某事开始。', englishDefinition: 'To begin doing something or make something begin.',
    examples: [{ english: 'Class starts at nine.', malay: 'Kelas bermula pada pukul sembilan.', chinese: '课程九点开始。' }], collocations: ['start work', 'start again'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'finish', term: 'finish', normalizedTerm: 'finish', partOfSpeech: ['verb'], ipa: '/fˈɪnɪʃ/',
    chineseShort: '完成；结束', chineseExplanation: '做到某件事的最后部分，使其结束。', englishDefinition: 'To complete something or reach its end.',
    examples: [{ english: 'I finish work at five.', malay: 'Saya selesai bekerja pada pukul lima.', chinese: '我五点下班。' }], collocations: ['finish homework', 'finish work'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'work', term: 'work', normalizedTerm: 'work', partOfSpeech: ['verb', 'noun'], ipa: '/wˈɜːk/',
    chineseShort: '工作；劳动', chineseExplanation: '做工作或任务以获得成果，也可指职业活动。', englishDefinition: 'To do a job or task, or the activity of doing a job.',
    examples: [{ english: 'She works in a bank.', malay: 'Dia bekerja di bank.', chinese: '她在银行工作。' }], collocations: ['go to work', 'work hard'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'play', term: 'play', normalizedTerm: 'play', partOfSpeech: ['verb'], ipa: '/plˈeɪ/',
    chineseShort: '玩；进行游戏', chineseExplanation: '进行娱乐活动、游戏或运动。', englishDefinition: 'To take part in a game or activity for enjoyment.',
    examples: [{ english: 'The children play in the garden.', malay: 'Kanak-kanak bermain di taman.', chinese: '孩子们在花园里玩。' }], collocations: ['play football', 'play a game'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'run', term: 'run', normalizedTerm: 'run', partOfSpeech: ['verb'], ipa: '/ɹˈʌn/',
    chineseShort: '跑；运行', chineseExplanation: '用双脚快速移动，也可表示机器或系统运行。', englishDefinition: 'To move quickly on foot.',
    examples: [{ english: 'He runs in the park every morning.', malay: 'Dia berlari di taman setiap pagi.', chinese: '他每天早上在公园跑步。' }], collocations: ['run fast', 'go running'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'swim', term: 'swim', normalizedTerm: 'swim', partOfSpeech: ['verb'], ipa: '/swˈɪm/',
    chineseShort: '游泳', chineseExplanation: '在水中用身体动作前进。', englishDefinition: 'To move through water using your arms and legs.',
    examples: [{ english: 'We swim at the beach on Sundays.', malay: 'Kami berenang di pantai pada setiap hari Ahad.', chinese: '我们星期日在海滩游泳。' }], collocations: ['swim well', 'go swimming'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sit', term: 'sit', normalizedTerm: 'sit', partOfSpeech: ['verb'], ipa: '/sˈɪt/',
    chineseShort: '坐', chineseExplanation: '把身体重量放在椅子、地面等上。', englishDefinition: 'To rest your body on a chair, seat, or the ground.',
    examples: [{ english: 'Please sit next to me.', malay: 'Sila duduk di sebelah saya.', chinese: '请坐在我旁边。' }], collocations: ['sit down', 'sit here'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'stand', term: 'stand', normalizedTerm: 'stand', partOfSpeech: ['verb'], ipa: '/stˈand/',
    chineseShort: '站；站立', chineseExplanation: '用双脚直立身体。', englishDefinition: 'To be upright on your feet.',
    examples: [{ english: 'Please stand near the door.', malay: 'Sila berdiri berhampiran pintu.', chinese: '请站在门附近。' }], collocations: ['stand up', 'stand still'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wait', term: 'wait', normalizedTerm: 'wait', partOfSpeech: ['verb'], ipa: '/wˈeɪt/',
    chineseShort: '等待', chineseExplanation: '停留一段时间直到某事发生或某人到来。', englishDefinition: 'To stay until something happens or someone arrives.',
    examples: [{ english: 'Please wait for me outside.', malay: 'Sila tunggu saya di luar.', chinese: '请在外面等我。' }], collocations: ['wait for', 'wait a minute'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'help', term: 'help', normalizedTerm: 'help', partOfSpeech: ['verb', 'noun'], ipa: '/hˈɛlp/',
    chineseShort: '帮助；帮忙', chineseExplanation: '让别人更容易完成某事或解决问题。', englishDefinition: 'To make it easier for someone to do something.',
    examples: [{ english: 'Can you help me with this bag?', malay: 'Bolehkah anda membantu saya membawa beg ini?', chinese: '你可以帮我拿这个包吗？' }], collocations: ['help someone', 'ask for help'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'clean', term: 'clean', normalizedTerm: 'clean', partOfSpeech: ['verb', 'adjective'], ipa: '/klˈiːn/',
    chineseShort: '清洁；干净的', chineseExplanation: '去除污垢，也可形容没有脏东西。', englishDefinition: 'To remove dirt, or to be free from dirt.',
    examples: [{ english: 'I clean my room every Saturday.', malay: 'Saya membersihkan bilik saya setiap hari Sabtu.', chinese: '我每个星期六打扫房间。' }], collocations: ['clean the room', 'clean water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wash', term: 'wash', normalizedTerm: 'wash', partOfSpeech: ['verb'], ipa: '/wˈɒʃ/',
    chineseShort: '洗；清洗', chineseExplanation: '用水和通常使用肥皂清洁某物或身体部位。', englishDefinition: 'To clean something with water, often using soap.',
    examples: [{ english: 'Wash your hands before eating.', malay: 'Basuh tangan sebelum makan.', chinese: '吃饭前洗手。' }], collocations: ['wash clothes', 'wash your hands'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cook', term: 'cook', normalizedTerm: 'cook', partOfSpeech: ['verb', 'noun'], ipa: '/kˈʊk/',
    chineseShort: '烹饪；厨师', chineseExplanation: '用加热的方法准备食物，也可指做饭的人。', englishDefinition: 'To prepare food by heating it.',
    examples: [{ english: 'I cook rice for dinner.', malay: 'Saya memasak nasi untuk makan malam.', chinese: '我晚餐煮米饭。' }], collocations: ['cook dinner', 'home cook'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cut', term: 'cut', normalizedTerm: 'cut', partOfSpeech: ['verb'], ipa: '/kˈʌt/',
    chineseShort: '切；割', chineseExplanation: '用刀、剪刀等把某物分开或变短。', englishDefinition: 'To divide something using a knife or other sharp tool.',
    examples: [{ english: 'Cut the apple into four pieces.', malay: 'Potong epal itu kepada empat bahagian.', chinese: '把苹果切成四块。' }], collocations: ['cut into pieces', 'cut paper'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'put', term: 'put', normalizedTerm: 'put', partOfSpeech: ['verb'], ipa: '/pˈʊt/',
    chineseShort: '放；放置', chineseExplanation: '把某人或某物移动到某个位置。', englishDefinition: 'To move something to a particular place or position.',
    examples: [{ english: 'Put your phone on the table.', malay: 'Letakkan telefon anda di atas meja.', chinese: '把你的手机放在桌上。' }], collocations: ['put away', 'put on'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'keep', term: 'keep', normalizedTerm: 'keep', partOfSpeech: ['verb'], ipa: '/kˈiːp/',
    chineseShort: '保留；保持', chineseExplanation: '继续拥有某物，或让某种状态持续。', englishDefinition: 'To continue to have something or make a state continue.',
    examples: [{ english: 'Keep the door closed, please.', malay: 'Sila pastikan pintu sentiasa tertutup.', chinese: '请保持门关着。' }], collocations: ['keep quiet', 'keep safe'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'carry', term: 'carry', normalizedTerm: 'carry', partOfSpeech: ['verb'], ipa: '/kˈaɹi/',
    chineseShort: '携带；搬运', chineseExplanation: '拿着或支撑某物并把它带到别处。', englishDefinition: 'To hold something and move it from one place to another.',
    examples: [{ english: 'She carries a small bag to work.', malay: 'Dia membawa beg kecil ke tempat kerja.', chinese: '她带着一个小包去上班。' }], collocations: ['carry a bag', 'carry water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bring', term: 'bring', normalizedTerm: 'bring', partOfSpeech: ['verb'], ipa: '/bɹˈɪŋ/',
    chineseShort: '带来；拿来', chineseExplanation: '把某人或某物带到说话者所在的地方。', englishDefinition: 'To take someone or something with you to a place.',
    examples: [{ english: 'Please bring your book tomorrow.', malay: 'Sila bawa buku anda esok.', chinese: '请明天带你的书来。' }], collocations: ['bring food', 'bring with you'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'like', term: 'like', normalizedTerm: 'like', partOfSpeech: ['verb'], ipa: '/lˈaɪk/',
    chineseShort: '喜欢', chineseExplanation: '觉得某人或某物令人愉快或适合自己。', englishDefinition: 'To find someone or something pleasant or enjoyable.',
    examples: [{ english: 'I like this song.', malay: 'Saya suka lagu ini.', chinese: '我喜欢这首歌。' }], collocations: ['like very much', 'like doing'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'love', term: 'love', normalizedTerm: 'love', partOfSpeech: ['verb', 'noun'], ipa: '/lˈʌv/',
    chineseShort: '爱；非常喜欢', chineseExplanation: '对某人有强烈感情，或非常喜欢某事物。', englishDefinition: 'To care very much for someone or enjoy something a lot.',
    examples: [{ english: 'I love spending time with my family.', malay: 'Saya suka meluangkan masa bersama keluarga.', chinese: '我喜欢和家人一起度过时间。' }], collocations: ['love someone', 'love doing'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'want', term: 'want', normalizedTerm: 'want', partOfSpeech: ['verb'], ipa: '/wˈɒnt/',
    chineseShort: '想要；希望', chineseExplanation: '希望拥有某物或希望某事发生。', englishDefinition: 'To wish to have or do something.',
    examples: [{ english: 'I want a glass of water.', malay: 'Saya mahu segelas air.', chinese: '我想要一杯水。' }], collocations: ['want to do', 'want something'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'need', term: 'need', normalizedTerm: 'need', partOfSpeech: ['verb', 'noun'], ipa: '/nˈiːd/',
    chineseShort: '需要；需求', chineseExplanation: '必须拥有或做某事，因为它很重要或必要。', englishDefinition: 'To require something because it is necessary.',
    examples: [{ english: 'We need more time.', malay: 'Kami memerlukan lebih banyak masa.', chinese: '我们需要更多时间。' }], collocations: ['need help', 'need to do'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'know', term: 'know', normalizedTerm: 'know', partOfSpeech: ['verb'], ipa: '/nˈəʊ/',
    chineseShort: '知道；认识', chineseExplanation: '拥有某个事实的信息，或熟悉某个人、地方或事物。', englishDefinition: 'To have information about something or be familiar with someone.',
    examples: [{ english: 'I know the answer.', malay: 'Saya tahu jawapannya.', chinese: '我知道答案。' }], collocations: ['know how', 'know someone'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'think', term: 'think', normalizedTerm: 'think', partOfSpeech: ['verb'], ipa: '/θˈɪŋk/',
    chineseShort: '想；认为', chineseExplanation: '用头脑考虑某事，或表达自己的看法。', englishDefinition: 'To use your mind to consider something or have an opinion.',
    examples: [{ english: 'I think this is a good idea.', malay: 'Saya fikir ini idea yang baik.', chinese: '我觉得这是个好主意。' }], collocations: ['think about', 'think so'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'understand', term: 'understand', normalizedTerm: 'understand', partOfSpeech: ['verb'], ipa: '/ˌʌndəstˈand/',
    chineseShort: '理解；明白', chineseExplanation: '知道某句话、想法或情况的意思。', englishDefinition: 'To know the meaning of something.',
    examples: [{ english: 'I understand the question now.', malay: 'Saya memahami soalan itu sekarang.', chinese: '我现在明白这个问题了。' }], collocations: ['understand English', 'understand clearly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'forget', term: 'forget', normalizedTerm: 'forget', partOfSpeech: ['verb'], ipa: '/fəɡˈɛt/',
    chineseShort: '忘记', chineseExplanation: '不能记起某人、某事或应该做的事情。', englishDefinition: 'To fail to remember something.',
    examples: [{ english: 'Do not forget your key.', malay: 'Jangan lupa kunci anda.', chinese: '不要忘记你的钥匙。' }], collocations: ['forget to do', 'forget a name'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'find', term: 'find', normalizedTerm: 'find', partOfSpeech: ['verb'], ipa: '/fˈaɪnd/',
    chineseShort: '找到；发现', chineseExplanation: '经过寻找后得到某人或某物，或意外发现。', englishDefinition: 'To discover or locate someone or something.',
    examples: [{ english: 'I cannot find my phone.', malay: 'Saya tidak dapat menemukan telefon saya.', chinese: '我找不到我的手机。' }], collocations: ['find out', 'find a job'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'meet', term: 'meet', normalizedTerm: 'meet', partOfSpeech: ['verb'], ipa: '/mˈiːt/',
    chineseShort: '见面；遇见', chineseExplanation: '与某人见面，通常是第一次或按计划见面。', englishDefinition: 'To come together with another person.',
    examples: [{ english: 'Let\'s meet at the station.', malay: 'Mari kita berjumpa di stesen.', chinese: '我们在车站见吧。' }], collocations: ['meet a friend', 'meet someone'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'live', term: 'live', normalizedTerm: 'live', partOfSpeech: ['verb'], ipa: '/lˈaɪv/',
    chineseShort: '居住；生活', chineseExplanation: '把某地作为自己的家，也可表示活着。', englishDefinition: 'To have your home in a place or be alive.',
    examples: [{ english: 'I live near the city centre.', malay: 'Saya tinggal berhampiran pusat bandar.', chinese: '我住在市中心附近。' }], collocations: ['live in', 'live with'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'stay', term: 'stay', normalizedTerm: 'stay', partOfSpeech: ['verb'], ipa: '/stˈeɪ/',
    chineseShort: '停留；暂住', chineseExplanation: '在某个地方保持一段时间而不离开。', englishDefinition: 'To remain in a place for a period of time.',
    examples: [{ english: 'We stayed at a small hotel.', malay: 'Kami menginap di hotel kecil.', chinese: '我们住在一家小酒店。' }], collocations: ['stay home', 'stay at a hotel'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'move', term: 'move', normalizedTerm: 'move', partOfSpeech: ['verb'], ipa: '/mˈuːv/',
    chineseShort: '移动；搬家', chineseExplanation: '改变位置，或从一个住所搬到另一个住所。', englishDefinition: 'To change position or go to live in another place.',
    examples: [{ english: 'Please move the chair closer.', malay: 'Sila alihkan kerusi itu lebih dekat.', chinese: '请把椅子移近一点。' }], collocations: ['move house', 'move slowly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'send', term: 'send', normalizedTerm: 'send', partOfSpeech: ['verb'], ipa: '/sˈɛnd/',
    chineseShort: '发送；寄', chineseExplanation: '让信息、物品或人从一个地方到另一个地方。', englishDefinition: 'To cause a message or thing to go to another person or place.',
    examples: [{ english: 'Send me the photo, please.', malay: 'Sila hantarkan gambar itu kepada saya.', chinese: '请把照片发给我。' }], collocations: ['send a message', 'send an email'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'show', term: 'show', normalizedTerm: 'show', partOfSpeech: ['verb'], ipa: '/ʃˈəʊ/',
    chineseShort: '展示；给……看', chineseExplanation: '让别人看到某物或知道某些信息。', englishDefinition: 'To let someone see something or know information.',
    examples: [{ english: 'Can you show me the way?', malay: 'Bolehkah anda menunjukkan jalan kepada saya?', chinese: '你可以告诉我怎么走吗？' }], collocations: ['show someone', 'show the way'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'use', term: 'use', normalizedTerm: 'use', partOfSpeech: ['verb', 'noun'], ipa: '/jˈuːs/',
    chineseShort: '使用；用途', chineseExplanation: '为了某个目的使用某物。', englishDefinition: 'To do something with an object for a particular purpose.',
    examples: [{ english: 'You can use my pen.', malay: 'Anda boleh menggunakan pen saya.', chinese: '你可以用我的笔。' }], collocations: ['use a computer', 'easy to use'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'try', term: 'try', normalizedTerm: 'try', partOfSpeech: ['verb'], ipa: '/tɹˈaɪ/',
    chineseShort: '尝试；试用', chineseExplanation: '努力做某事，或测试某物是否合适。', englishDefinition: 'To make an effort to do something or test something.',
    examples: [{ english: 'Try this cake.', malay: 'Cubalah kek ini.', chinese: '试试这个蛋糕。' }], collocations: ['try again', 'try to do'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'change', term: 'change', normalizedTerm: 'change', partOfSpeech: ['verb', 'noun'], ipa: '/tʃˈeɪndʒ/',
    chineseShort: '改变；更换', chineseExplanation: '使某事变得不同，或从一个东西换成另一个。', englishDefinition: 'To make something different or replace it with another thing.',
    examples: [{ english: 'I need to change my shirt.', malay: 'Saya perlu menukar kemeja saya.', chinese: '我需要换一件衬衫。' }], collocations: ['change clothes', 'change your mind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'turn', term: 'turn', normalizedTerm: 'turn', partOfSpeech: ['verb', 'noun'], ipa: '/tˈɜːn/',
    chineseShort: '转动；转弯', chineseExplanation: '改变方向或使某物旋转，也可表示一个人的轮次。', englishDefinition: 'To change direction or move around a point.',
    examples: [{ english: 'Turn left at the bank.', malay: 'Belok kiri di bank.', chinese: '在银行那里左转。' }], collocations: ['turn left', 'turn on'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'happen', term: 'happen', normalizedTerm: 'happen', partOfSpeech: ['verb'], ipa: '/hˈapən/',
    chineseShort: '发生', chineseExplanation: '某件事情出现或进行。', englishDefinition: 'To take place or occur.',
    examples: [{ english: 'What happened yesterday?', malay: 'Apakah yang berlaku semalam?', chinese: '昨天发生了什么？' }], collocations: ['happen again', 'what happened'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'big', term: 'big', normalizedTerm: 'big', partOfSpeech: ['adjective'], ipa: '/bˈɪɡ/',
    chineseShort: '大的', chineseExplanation: '尺寸、数量或程度比一般的大。', englishDefinition: 'Large in size, amount, or degree.',
    examples: [{ english: 'They live in a big house.', malay: 'Mereka tinggal di rumah besar.', chinese: '他们住在一所大房子里。' }], collocations: ['big city', 'big problem'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'small', term: 'small', normalizedTerm: 'small', partOfSpeech: ['adjective'], ipa: '/smˈɔːl/',
    chineseShort: '小的', chineseExplanation: '尺寸、数量或程度不大。', englishDefinition: 'Not large in size, amount, or degree.',
    examples: [{ english: 'I need a small bag.', malay: 'Saya memerlukan beg kecil.', chinese: '我需要一个小包。' }], collocations: ['small room', 'small child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'long', term: 'long', normalizedTerm: 'long', partOfSpeech: ['adjective'], ipa: '/lˈɒŋ/',
    chineseShort: '长的；长时间的', chineseExplanation: '距离、长度或持续时间较大。', englishDefinition: 'Having a great distance from one end to the other, or lasting a lot of time.',
    examples: [{ english: 'She has long hair.', malay: 'Dia berambut panjang.', chinese: '她留着长头发。' }], collocations: ['long time', 'long hair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'short', term: 'short', normalizedTerm: 'short', partOfSpeech: ['adjective'], ipa: '/ʃˈɔːt/',
    chineseShort: '短的；矮的', chineseExplanation: '长度或时间不长，也可形容人个子不高。', englishDefinition: 'Not long in distance or time, or not tall.',
    examples: [{ english: 'The lesson is short today.', malay: 'Pelajaran hari ini singkat.', chinese: '今天的课程很短。' }], collocations: ['short time', 'short hair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tall', term: 'tall', normalizedTerm: 'tall', partOfSpeech: ['adjective'], ipa: '/tˈɔːl/',
    chineseShort: '高的；高个的', chineseExplanation: '身高或垂直高度较大。', englishDefinition: 'Having greater than average height.',
    examples: [{ english: 'My brother is very tall.', malay: 'Abang saya sangat tinggi.', chinese: '我的哥哥很高。' }], collocations: ['tall man', 'tall building'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'young', term: 'young', normalizedTerm: 'young', partOfSpeech: ['adjective'], ipa: '/jˈʌŋ/',
    chineseShort: '年轻的；年幼的', chineseExplanation: '年龄较小，或存在时间不长。', englishDefinition: 'Not old; having lived for only a short time.',
    examples: [{ english: 'She is a young teacher.', malay: 'Dia seorang guru muda.', chinese: '她是一位年轻老师。' }], collocations: ['young people', 'young child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'old', term: 'old', normalizedTerm: 'old', partOfSpeech: ['adjective'], ipa: '/ˈəʊld/',
    chineseShort: '年老的；旧的', chineseExplanation: '年龄较大，或存在、使用了很长时间。', englishDefinition: 'Having lived or existed for a long time.',
    examples: [{ english: 'This is an old house.', malay: 'Ini sebuah rumah lama.', chinese: '这是一所老房子。' }], collocations: ['old man', 'old friend'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'new', term: 'new', normalizedTerm: 'new', partOfSpeech: ['adjective'], ipa: '/njˈuː/',
    chineseShort: '新的', chineseExplanation: '最近制造、购买、开始或出现的。', englishDefinition: 'Recently made, bought, started, or discovered.',
    examples: [{ english: 'I bought a new phone.', malay: 'Saya membeli telefon baharu.', chinese: '我买了一部新手机。' }], collocations: ['new job', 'new student'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'good', term: 'good', normalizedTerm: 'good', partOfSpeech: ['adjective'], ipa: '/ɡˈʊd/',
    chineseShort: '好的', chineseExplanation: '质量高、令人满意或正确合适。', englishDefinition: 'Of high quality, pleasant, or suitable.',
    examples: [{ english: 'This is a good book.', malay: 'Ini buku yang bagus.', chinese: '这是一本好书。' }], collocations: ['good idea', 'good job'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bad', term: 'bad', normalizedTerm: 'bad', partOfSpeech: ['adjective'], ipa: '/bˈad/',
    chineseShort: '坏的；不好的', chineseExplanation: '质量差、不愉快或有问题。', englishDefinition: 'Not good, pleasant, or suitable.',
    examples: [{ english: 'The weather is bad today.', malay: 'Cuaca buruk hari ini.', chinese: '今天天气不好。' }], collocations: ['bad weather', 'bad idea'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'happy', term: 'happy', normalizedTerm: 'happy', partOfSpeech: ['adjective'], ipa: '/hˈapi/',
    chineseShort: '开心的；幸福的', chineseExplanation: '感到高兴、满足或愉快。', englishDefinition: 'Feeling pleased or joyful.',
    examples: [{ english: 'The children are happy today.', malay: 'Kanak-kanak gembira hari ini.', chinese: '孩子们今天很开心。' }], collocations: ['feel happy', 'happy birthday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sad', term: 'sad', normalizedTerm: 'sad', partOfSpeech: ['adjective'], ipa: '/sˈad/',
    chineseShort: '伤心的；难过的', chineseExplanation: '感到不开心或失落。', englishDefinition: 'Feeling unhappy or sorry.',
    examples: [{ english: 'She felt sad after her friend left.', malay: 'Dia berasa sedih selepas kawannya pergi.', chinese: '朋友离开后她感到难过。' }], collocations: ['feel sad', 'sad story'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'easy', term: 'easy', normalizedTerm: 'easy', partOfSpeech: ['adjective'], ipa: '/ˈiːzi/',
    chineseShort: '容易的', chineseExplanation: '不需要很多努力或不难理解。', englishDefinition: 'Not difficult; needing little effort.',
    examples: [{ english: 'This question is easy.', malay: 'Soalan ini mudah.', chinese: '这个问题很容易。' }], collocations: ['easy question', 'easy to use'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'difficult', term: 'difficult', normalizedTerm: 'difficult', partOfSpeech: ['adjective'], ipa: '/dˈɪfɪkəlt/',
    chineseShort: '困难的', chineseExplanation: '需要较多努力、技巧或理解能力。', englishDefinition: 'Hard to do, understand, or deal with.',
    examples: [{ english: 'The last question is difficult.', malay: 'Soalan terakhir itu sukar.', chinese: '最后一个问题很难。' }], collocations: ['difficult question', 'very difficult'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'fast', term: 'fast', normalizedTerm: 'fast', partOfSpeech: ['adjective', 'adverb'], ipa: '/fˈast/',
    chineseShort: '快的；快速地', chineseExplanation: '以很高速度移动或发生。', englishDefinition: 'Moving or happening at high speed.',
    examples: [{ english: 'The train is very fast.', malay: 'Kereta api itu sangat laju.', chinese: '这列火车很快。' }], collocations: ['fast car', 'run fast'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'slow', term: 'slow', normalizedTerm: 'slow', partOfSpeech: ['adjective'], ipa: '/slˈəʊ/',
    chineseShort: '慢的', chineseExplanation: '速度较低，需要较长时间完成。', englishDefinition: 'Moving or happening at a low speed.',
    examples: [{ english: 'The bus is slow this morning.', malay: 'Bas itu bergerak perlahan pagi ini.', chinese: '今天早上的巴士很慢。' }], collocations: ['slow train', 'slow down'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'busy', term: 'busy', normalizedTerm: 'busy', partOfSpeech: ['adjective'], ipa: '/bˈɪzi/',
    chineseShort: '忙的；繁忙的', chineseExplanation: '有很多事情要做，或某地有很多人和活动。', englishDefinition: 'Having a lot to do, or full of people and activity.',
    examples: [{ english: 'I am busy this afternoon.', malay: 'Saya sibuk petang ini.', chinese: '我今天下午很忙。' }], collocations: ['busy day', 'busy street'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'free', term: 'free', normalizedTerm: 'free', partOfSpeech: ['adjective'], ipa: '/fɹˈiː/',
    chineseShort: '空闲的；免费的', chineseExplanation: '没有被占用，也可表示不需要付钱。', englishDefinition: 'Not busy or occupied, or costing no money.',
    examples: [{ english: 'Are you free this evening?', malay: 'Adakah anda lapang malam ini?', chinese: '你今晚有空吗？' }], collocations: ['free time', 'free entry'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'noisy', term: 'noisy', normalizedTerm: 'noisy', partOfSpeech: ['adjective'], ipa: '/nˈɔɪzi/',
    chineseShort: '吵闹的；嘈杂的', chineseExplanation: '有很多声音，声音大而让人难以安静。', englishDefinition: 'Making a lot of loud or unpleasant sound.',
    examples: [{ english: 'The street is noisy in the evening.', malay: 'Jalan itu bising pada waktu petang.', chinese: '这条街晚上很吵。' }], collocations: ['noisy street', 'noisy room'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dirty', term: 'dirty', normalizedTerm: 'dirty', partOfSpeech: ['adjective'], ipa: '/dˈɜːti/',
    chineseShort: '脏的', chineseExplanation: '有污垢、灰尘或不洁净。', englishDefinition: 'Covered with dirt or not clean.',
    examples: [{ english: 'Your shoes are dirty.', malay: 'Kasut anda kotor.', chinese: '你的鞋子脏了。' }], collocations: ['dirty clothes', 'dirty floor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'beautiful', term: 'beautiful', normalizedTerm: 'beautiful', partOfSpeech: ['adjective'], ipa: '/bjˈuːtifəl/',
    chineseShort: '美丽的；漂亮的', chineseExplanation: '外表或感觉非常好看、令人愉快。', englishDefinition: 'Very attractive or pleasant to look at.',
    examples: [{ english: 'The beach is beautiful in the morning.', malay: 'Pantai itu indah pada waktu pagi.', chinese: '早上的海滩很美。' }], collocations: ['beautiful place', 'beautiful day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ugly', term: 'ugly', normalizedTerm: 'ugly', partOfSpeech: ['adjective'], ipa: '/ˈʌɡli/',
    chineseShort: '难看的；丑的', chineseExplanation: '外表不漂亮或不吸引人。', englishDefinition: 'Not attractive or pleasant to look at.',
    examples: [{ english: 'He thinks the old wall is ugly.', malay: 'Dia berpendapat bahawa dinding lama itu hodoh.', chinese: '他觉得那面旧墙很难看。' }], collocations: ['ugly building', 'look ugly'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'kind', term: 'kind', normalizedTerm: 'kind', partOfSpeech: ['adjective'], ipa: '/kˈaɪnd/',
    chineseShort: '善良的；友好的', chineseExplanation: '愿意帮助别人，并且对别人好。', englishDefinition: 'Caring and helpful towards other people.',
    examples: [{ english: 'Our neighbour is very kind.', malay: 'Jiran kami sangat baik hati.', chinese: '我们的邻居很善良。' }], collocations: ['kind person', 'very kind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'nice', term: 'nice', normalizedTerm: 'nice', partOfSpeech: ['adjective'], ipa: '/nˈaɪs/',
    chineseShort: '好的；令人愉快的', chineseExplanation: '令人喜欢、舒服或友善的。', englishDefinition: 'Pleasant, enjoyable, or friendly.',
    examples: [{ english: 'We had a nice day at the beach.', malay: 'Kami menikmati hari yang menyeronokkan di pantai.', chinese: '我们在海滩度过了愉快的一天。' }], collocations: ['nice day', 'nice person'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'friendly', term: 'friendly', normalizedTerm: 'friendly', partOfSpeech: ['adjective'], ipa: '/fɹˈɛndli/',
    chineseShort: '友善的；亲切的', chineseExplanation: '对别人表现得友好、容易相处。', englishDefinition: 'Kind and pleasant towards other people.',
    examples: [{ english: 'The hotel staff are friendly.', malay: 'Kakitangan hotel itu mesra.', chinese: '酒店员工很友善。' }], collocations: ['friendly person', 'friendly smile'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'angry', term: 'angry', normalizedTerm: 'angry', partOfSpeech: ['adjective'], ipa: '/ˈaŋɡɹi/',
    chineseShort: '生气的；愤怒的', chineseExplanation: '因为不喜欢或不满意某事而感到强烈不快。', englishDefinition: 'Feeling strong displeasure about something.',
    examples: [{ english: 'He was angry about the mistake.', malay: 'Dia marah tentang kesilapan itu.', chinese: '他对那个错误感到生气。' }], collocations: ['feel angry', 'angry with'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tired', term: 'tired', normalizedTerm: 'tired', partOfSpeech: ['adjective'], ipa: '/tˈaɪəd/',
    chineseShort: '疲倦的；累的', chineseExplanation: '需要休息或睡觉的感觉。', englishDefinition: 'Feeling that you need rest or sleep.',
    examples: [{ english: 'I am tired after work.', malay: 'Saya letih selepas bekerja.', chinese: '下班后我很累。' }], collocations: ['feel tired', 'very tired'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'afraid', term: 'afraid', normalizedTerm: 'afraid', partOfSpeech: ['adjective'], ipa: '/ɐfɹˈeɪd/',
    chineseShort: '害怕的', chineseExplanation: '因为危险或担心某事而感到恐惧。', englishDefinition: 'Feeling fear or worry about something.',
    examples: [{ english: 'The child is afraid of the dark.', malay: 'Kanak-kanak itu takut akan kegelapan.', chinese: '那个孩子怕黑。' }], collocations: ['afraid of', 'feel afraid'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ready', term: 'ready', normalizedTerm: 'ready', partOfSpeech: ['adjective'], ipa: '/ɹˈɛdi/',
    chineseShort: '准备好的', chineseExplanation: '已经完成准备，可以开始做某事。', englishDefinition: 'Prepared and able to begin.',
    examples: [{ english: 'Dinner is ready.', malay: 'Makan malam sudah siap.', chinese: '晚餐准备好了。' }], collocations: ['get ready', 'ready to go'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'full', term: 'full', normalizedTerm: 'full', partOfSpeech: ['adjective'], ipa: '/fˈʊl/',
    chineseShort: '满的；饱的', chineseExplanation: '装满东西，或吃过足够食物后不再饿。', englishDefinition: 'Containing as much as possible, or having eaten enough.',
    examples: [{ english: 'The bus is full.', malay: 'Bas itu penuh.', chinese: '巴士满了。' }], collocations: ['full of', 'feel full'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'empty', term: 'empty', normalizedTerm: 'empty', partOfSpeech: ['adjective'], ipa: '/ˈɛmpti/',
    chineseShort: '空的', chineseExplanation: '里面没有人或东西。', englishDefinition: 'Containing nothing or no one.',
    examples: [{ english: 'The bottle is empty.', malay: 'Botol itu kosong.', chinese: '瓶子是空的。' }], collocations: ['empty room', 'empty bottle'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'strong', term: 'strong', normalizedTerm: 'strong', partOfSpeech: ['adjective'], ipa: '/stɹˈɒŋ/',
    chineseShort: '强壮的；强的', chineseExplanation: '有很大力量，或程度很强。', englishDefinition: 'Having a lot of physical power or force.',
    examples: [{ english: 'He is strong enough to carry the box.', malay: 'Dia cukup kuat untuk membawa kotak itu.', chinese: '他够强壮，可以搬这个箱子。' }], collocations: ['strong man', 'strong wind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weak', term: 'weak', normalizedTerm: 'weak', partOfSpeech: ['adjective'], ipa: '/wˈiːk/',
    chineseShort: '虚弱的；弱的', chineseExplanation: '力量不足，或强度较低。', englishDefinition: 'Not strong or powerful.',
    examples: [{ english: 'I felt weak after being sick.', malay: 'Saya berasa lemah selepas sakit.', chinese: '生病后我觉得很虚弱。' }], collocations: ['feel weak', 'weak body'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'rich', term: 'rich', normalizedTerm: 'rich', partOfSpeech: ['adjective'], ipa: '/ɹˈɪtʃ/',
    chineseShort: '富有的；丰富的', chineseExplanation: '拥有很多钱或贵重物品。', englishDefinition: 'Having a lot of money or valuable things.',
    examples: [{ english: 'The rich man owns a large house.', malay: 'Lelaki kaya itu memiliki rumah besar.', chinese: '那个富有的男人拥有一所大房子。' }], collocations: ['rich family', 'rich person'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'poor', term: 'poor', normalizedTerm: 'poor', partOfSpeech: ['adjective'], ipa: '/pˈʊə/',
    chineseShort: '贫穷的；差的', chineseExplanation: '拥有很少的钱，也可表示质量不好。', englishDefinition: 'Having very little money, or being of low quality.',
    examples: [{ english: 'The family was poor but happy.', malay: 'Keluarga itu miskin tetapi bahagia.', chinese: '那个家庭虽然贫穷但很快乐。' }], collocations: ['poor family', 'poor quality'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cheap', term: 'cheap', normalizedTerm: 'cheap', partOfSpeech: ['adjective'], ipa: '/tʃˈiːp/',
    chineseShort: '便宜的', chineseExplanation: '价格低，不需要花很多钱。', englishDefinition: 'Costing little money.',
    examples: [{ english: 'These shoes are cheap.', malay: 'Kasut ini murah.', chinese: '这些鞋很便宜。' }], collocations: ['cheap price', 'cheap food'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'expensive', term: 'expensive', normalizedTerm: 'expensive', partOfSpeech: ['adjective'], ipa: '/ɛkspˈɛnsɪv/',
    chineseShort: '昂贵的', chineseExplanation: '价格高，需要花很多钱。', englishDefinition: 'Costing a lot of money.',
    examples: [{ english: 'That hotel is too expensive for us.', malay: 'Hotel itu terlalu mahal bagi kami.', chinese: '那家酒店对我们来说太贵了。' }], collocations: ['expensive car', 'very expensive'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'right', term: 'right', normalizedTerm: 'right', partOfSpeech: ['adjective', 'noun'], ipa: '/ɹˈaɪt/',
    chineseShort: '正确的；右边', chineseExplanation: '正确的，也可表示与左边相反的方向。', englishDefinition: 'Correct, or the side opposite left.',
    examples: [{ english: 'Your answer is right.', malay: 'Jawapan anda betul.', chinese: '你的答案是对的。' }], collocations: ['right answer', 'turn right'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wrong', term: 'wrong', normalizedTerm: 'wrong', partOfSpeech: ['adjective'], ipa: '/ɹˈɒŋ/',
    chineseShort: '错误的；不对的', chineseExplanation: '不正确、不合适或与事实不符。', englishDefinition: 'Not correct or true.',
    examples: [{ english: 'This answer is wrong.', malay: 'Jawapan ini salah.', chinese: '这个答案是错的。' }], collocations: ['wrong answer', 'go wrong'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'same', term: 'same', normalizedTerm: 'same', partOfSpeech: ['adjective'], ipa: '/sˈeɪm/',
    chineseShort: '相同的；同样的', chineseExplanation: '与另一个人或事物没有区别，或完全一致。', englishDefinition: 'Exactly like another person or thing.',
    examples: [{ english: 'We are in the same class.', malay: 'Kami berada di kelas yang sama.', chinese: '我们在同一个班。' }], collocations: ['same time', 'same place'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'now', term: 'now', normalizedTerm: 'now', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '现在, 刚才, 目前；现在', chineseExplanation: '现在, 刚才, 目前；现在是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The momentary present.',
    examples: [{ english: 'The speaker used now to add detail.', malay: 'Masa sekarang.', chinese: '说话者用“now”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'way', term: 'way', normalizedTerm: 'way', partOfSpeech: ['noun', 'adverb'],
    chineseShort: '路, 路线, 路途, 方法, 道路, 情形, 规模, 习惯, 行业, 方面；远远地, 非常', chineseExplanation: '路, 路线, 路途, 方法, 道路, 情形, 规模, 习惯, 行业, 方面；远远地, 非常是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The condition of things generally.',
    examples: [{ english: 'The lesson explains the meaning of way.', malay: 'Cara atau jalan untuk melakukan sesuatu.', chinese: '本课解释了“way”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'last', term: 'last', normalizedTerm: 'last', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '最后的, 末尾的, 最近的；持续, 支持, 维持', chineseExplanation: '最后的, 末尾的, 最近的；持续, 支持, 维持是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The last or lowest in an ordering or series.',
    examples: [{ english: 'The passage uses last to describe the situation.', malay: 'Yang terakhir.', chinese: '文章用“last”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'mean', term: 'mean', normalizedTerm: 'mean', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '低劣的, 卑贱的, 简陋的, 吝啬的, 惭愧的, 平均的, 中间的, 普通的；意谓, 想要, 意欲, 预定', chineseExplanation: '低劣的, 卑贱的, 简陋的, 吝啬的, 惭愧的, 平均的, 中间的, 普通的；意谓, 想要, 意欲, 预定是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An average of n numbers computed by adding some function of the numbers and dividing by some function of n.',
    examples: [{ english: 'The example shows how to use the verb mean.', malay: 'Membawa atau menyampaikan sesuatu maksud.', chinese: '这个例子展示了如何使用动词“mean”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'great', term: 'great', normalizedTerm: 'great', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '大的, 非常的, 主要的, 重大的, 崇高的, 伟大的；顺利地, 得意地', chineseExplanation: '大的, 非常的, 主要的, 重大的, 崇高的, 伟大的；顺利地, 得意地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who has achieved distinction and honor in some field.',
    examples: [{ english: 'The passage uses great to describe the situation.', malay: 'Hebat atau sangat baik.', chinese: '文章用“great”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'never', term: 'never', normalizedTerm: 'never', partOfSpeech: ['adverb', 'verb'],
    chineseShort: '从不, 决不, 不曾；永不, 决不, 从来没有', chineseExplanation: '从不, 决不, 不曾；永不, 决不, 从来没有是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not ever; at no time in the past or future.',
    examples: [{ english: 'The speaker used never to add detail.', malay: 'Tidak pernah.', chinese: '说话者用“never”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'group', term: 'group', normalizedTerm: 'group', partOfSpeech: ['noun', 'verb'],
    chineseShort: '团体, 组, 团, 群；聚合, 成群', chineseExplanation: '团体, 组, 团, 群；聚合, 成群是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any number of entities (members) considered as a unit.',
    examples: [{ english: 'The lesson explains the meaning of group.', malay: 'Sekumpulan unsur yang dianggap satu unit.', chinese: '本课解释了“group”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'begin', term: 'begin', normalizedTerm: 'begin', partOfSpeech: ['verb', 'noun'],
    chineseShort: '开始；开始', chineseExplanation: '开始；开始是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Israeli statesman (born in Russia) who (as prime minister of Israel) negotiated a peace treaty with Anwar Sadat (then the president of Egypt) (1913-1992).',
    examples: [{ english: 'The example shows how to use the verb begin.', malay: 'Mula.', chinese: '这个例子展示了如何使用动词“begin”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'point', term: 'point', normalizedTerm: 'point', partOfSpeech: ['noun', 'verb'],
    chineseShort: '点, 小数点, 标点, 地点, 要点, 特点, 尖端, 分数, 得分, 穴位；弄尖, 强调, 指出, 加标点于, 瞄准', chineseExplanation: '点, 小数点, 标点, 地点, 要点, 特点, 尖端, 分数, 得分, 穴位；弄尖, 强调, 指出, 加标点于, 瞄准是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A geometric element that has position but no extension.',
    examples: [{ english: 'The lesson explains the meaning of point.', malay: 'Titik atau perkara tertentu.', chinese: '本课解释了“point”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'large', term: 'large', normalizedTerm: 'large', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '大的, 大量的, 宽大的, 广博的；大大地, 夸大地', chineseExplanation: '大的, 大量的, 宽大的, 广博的；大大地, 夸大地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A garment size for a large person.',
    examples: [{ english: 'The passage uses large to describe the situation.', malay: 'Bersaiz besar.', chinese: '文章用“large”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'member', term: 'member', normalizedTerm: 'member', partOfSpeech: ['noun', 'verb'],
    chineseShort: '成员, 会员；│肢, 肢体', chineseExplanation: '成员, 会员；│肢, 肢体是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'One of the persons who compose a social group (especially individuals who have joined and participate in a group organisation).',
    examples: [{ english: 'The lesson explains the meaning of member.', malay: 'Anggota sesuatu kumpulan.', chinese: '本课解释了“member”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'four', term: 'four', normalizedTerm: 'four', partOfSpeech: ['noun'],
    chineseShort: '四, 四个；四冲程循环', chineseExplanation: '四, 四个；四冲程循环是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The cardinal number that is the sum of three and one.',
    examples: [{ english: 'The lesson explains the meaning of four.', malay: 'Nombor empat.', chinese: '本课解释了“four”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'follow', term: 'follow', normalizedTerm: 'follow', partOfSpeech: ['verb', 'noun'],
    chineseShort: '跟随, 沿行, 遵循, 追求；跟随, 接着', chineseExplanation: '跟随, 沿行, 遵循, 追求；跟随, 接着是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To travel behind, go after, come after.',
    examples: [{ english: 'The example shows how to use the verb follow.', malay: 'Bergerak atau datang selepas.', chinese: '这个例子展示了如何使用动词“follow”。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'end', term: 'end', normalizedTerm: 'end', partOfSpeech: ['noun', 'verb'],
    chineseShort: '结束, 终点, 目标, 末端, 梢, 死亡, 残余；结束, 终结, 终止', chineseExplanation: '结束, 终点, 目标, 末端, 梢, 死亡, 残余；结束, 终结, 终止是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Either extremity of something that has length.',
    examples: [{ english: 'The lesson explains the meaning of end.', malay: 'Bahagian atau waktu terakhir.', chinese: '本课解释了“end”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'without', term: 'without', normalizedTerm: 'without', partOfSpeech: ['adverb'],
    chineseShort: '没有, 不, 在...之外；在外面, 户外', chineseExplanation: '没有, 不, 在...之外；在外面, 户外是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Prep. On or at the outside of; out of; not within; as, without doors. prep. Out of the limits of; out of reach of; beyond. prep. Not with; otherwise than with;.',
    examples: [{ english: 'The speaker used without to add detail.', malay: 'Tanpa.', chinese: '说话者用“without”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'within', term: 'within', normalizedTerm: 'within', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '内部, 里头；在内部, 在内心里', chineseExplanation: '内部, 里头；在内部, 在内心里是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'On the inside.',
    examples: [{ english: 'The speaker used within to add detail.', malay: 'Di dalam batas tertentu.', chinese: '说话者用“within”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'next', term: 'next', normalizedTerm: 'next', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '下一个；下一个的, 其次的, 贴近的', chineseExplanation: '下一个；下一个的, 其次的, 贴近的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'At the time or occasion immediately following.',
    examples: [{ english: 'The passage uses next to describe the situation.', malay: 'Yang berikutnya.', chinese: '文章用“next”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'quite', term: 'quite', normalizedTerm: 'quite', partOfSpeech: ['adverb', 'noun'],
    chineseShort: '相当, 完全, 十分', chineseExplanation: '相当, 完全, 十分是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To a degree (not used with a negative).',
    examples: [{ english: 'The speaker used quite to add detail.', malay: 'Agak atau sepenuhnya.', chinese: '说话者用“quite”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'believe', term: 'believe', normalizedTerm: 'believe', partOfSpeech: ['verb'],
    chineseShort: '相信', chineseExplanation: '相信是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Accept as true; take to be true.',
    examples: [{ english: 'The example shows how to use the verb believe.', malay: 'Menerima sesuatu sebagai benar.', chinese: '这个例子展示了如何使用动词“believe”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'power', term: 'power', normalizedTerm: 'power', partOfSpeech: ['noun', 'verb'],
    chineseShort: '力, 体力, 力量, 势力, 动力, 权力, 强国, 乘方, 强度, 幂, 功率；使...有力量, 供以动力, 激励', chineseExplanation: '力, 体力, 力量, 势力, 动力, 权力, 强国, 乘方, 强度, 幂, 功率；使...有力量, 供以动力, 激励是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Possession of controlling influence.',
    examples: [{ english: 'The lesson explains the meaning of power.', malay: 'Kuasa atau pengaruh untuk mengawal.', chinese: '本课解释了“power”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'form', term: 'form', normalizedTerm: 'form', partOfSpeech: ['noun', 'verb'],
    chineseShort: '形状, 形体, 类型, 方式, 表格, 形式；形成, 排列, 组成', chineseExplanation: '形状, 形体, 类型, 方式, 表格, 形式；形成, 排列, 组成是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The phonological or orthographic sound or appearance of a word that can be used to describe or identify something.',
    examples: [{ english: 'The lesson explains the meaning of form.', malay: 'Bentuk atau susunan sesuatu.', chinese: '本课解释了“form”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'job', term: 'job', normalizedTerm: 'job', partOfSpeech: ['noun', 'verb'],
    chineseShort: '工作, 零活, 职业, 事情；做零工, 打杂, 做股票经纪, 假公济私', chineseExplanation: '工作, 零活, 职业, 事情；做零工, 打杂, 做股票经纪, 假公济私是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A specific piece of work required to be done as a duty or for a specific fee.',
    examples: [{ english: 'The lesson explains the meaning of job.', malay: 'Tugas atau pekerjaan.', chinese: '本课解释了“job”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'yet', term: 'yet', normalizedTerm: 'yet', partOfSpeech: ['adverb', 'verb'],
    chineseShort: '还, 尚, 仍然, 已经, 然而；然而', chineseExplanation: '还, 尚, 仍然, 已经, 然而；然而是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Up to the present time.',
    examples: [{ english: 'The speaker used yet to add detail.', malay: 'Sehingga waktu sekarang.', chinese: '说话者用“yet”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'law', term: 'law', normalizedTerm: 'law', partOfSpeech: ['noun', 'verb'],
    chineseShort: '法律, 法则, 定律, 法律的制约, 法学, 司法界, 诉讼；起诉', chineseExplanation: '法律, 法则, 定律, 法律的制约, 法学, 司法界, 诉讼；起诉是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The collection of rules imposed by authority.',
    examples: [{ english: 'The lesson explains the meaning of law.', malay: 'Peraturan yang ditetapkan pihak berkuasa.', chinese: '本课解释了“law”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'later', term: 'later', normalizedTerm: 'later', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '以后, 随后', chineseExplanation: '以后, 随后是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Coming at a subsequent time or stage.',
    examples: [{ english: 'The speaker used later to add detail.', malay: 'Pada waktu yang kemudian.', chinese: '说话者用“later”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'together', term: 'together', normalizedTerm: 'together', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '一起, 共同, 彼此', chineseExplanation: '一起, 共同, 彼此是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Mentally and emotionally stable.',
    examples: [{ english: 'The speaker used together to add detail.', malay: 'Bersama-sama.', chinese: '说话者用“together”补充细节。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'late', term: 'late', normalizedTerm: 'late', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '迟的, 晚的, 已故的；很晚, 很迟, 晚', chineseExplanation: '迟的, 晚的, 已故的；很晚, 很迟, 晚是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Being or occurring at an advanced period of time or after a usual or expected time.',
    examples: [{ english: 'The passage uses late to describe the situation.', malay: 'Lewat daripada waktu biasa.', chinese: '文章用“late”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'war', term: 'war', normalizedTerm: 'war', partOfSpeech: ['noun', 'verb'],
    chineseShort: '战争, 战争状态, 战术, 军事, 冲突, 斗争, 竞争；进行战争, 作战, 打仗, 战斗', chineseExplanation: '战争, 战争状态, 战术, 军事, 冲突, 斗争, 竞争；进行战争, 作战, 打仗, 战斗是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The waging of armed conflict against an enemy.',
    examples: [{ english: 'The lesson explains the meaning of war.', malay: 'Konflik bersenjata.', chinese: '本课解释了“war”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'kid', term: 'kid', normalizedTerm: 'kid', partOfSpeech: ['noun', 'verb'],
    chineseShort: '小山羊, 小山羊肉, 小孩, 欺骗；小山羊皮制的', chineseExplanation: '小山羊, 小山羊肉, 小孩, 欺骗；小山羊皮制的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Soft smooth leather from the hide of a young goat.',
    examples: [{ english: 'The lesson explains the meaning of kid.', malay: 'Kanak-kanak.', chinese: '本课解释了“kid”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'remain', term: 'remain', normalizedTerm: 'remain', partOfSpeech: ['verb', 'noun'],
    chineseShort: '保持, 逗留, 剩余；停留, 居住, 继续', chineseExplanation: '保持, 逗留, 剩余；停留, 居住, 继续是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be left; of persons, questions, problems, results, evidence, etc.',
    examples: [{ english: 'The example shows how to use the verb remain.', malay: 'Terus berada atau masih tinggal.', chinese: '这个例子展示了如何使用动词“remain”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'grow', term: 'grow', normalizedTerm: 'grow', partOfSpeech: ['verb', 'noun'],
    chineseShort: '种植, 使长满；生长, 变成, 发展', chineseExplanation: '种植, 使长满；生长, 变成, 发展是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Become larger, greater, or bigger; expand or gain.',
    examples: [{ english: 'The example shows how to use the verb grow.', malay: 'Menjadi lebih besar.', chinese: '这个例子展示了如何使用动词“grow”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'win', term: 'win', normalizedTerm: 'win', partOfSpeech: ['verb', 'noun'],
    chineseShort: '赢得, 打胜, 成功；获胜, 达到, 影响', chineseExplanation: '赢得, 打胜, 成功；获胜, 达到, 影响是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A victory (as in a race or other competition).',
    examples: [{ english: 'The example shows how to use the verb win.', malay: 'Mencapai kemenangan.', chinese: '这个例子展示了如何使用动词“win”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'food', term: 'food', normalizedTerm: 'food', partOfSpeech: ['noun'],
    chineseShort: '食物, 养料；食物, 食品', chineseExplanation: '食物, 养料；食物, 食品是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any substance that can be metabolized by an animal to give energy and build tissue.',
    examples: [{ english: 'The lesson explains the meaning of food.', malay: 'Bahan yang dimakan untuk tenaga.', chinese: '本课解释了“food”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'order', term: 'order', normalizedTerm: 'order', partOfSpeech: ['noun', 'verb'],
    chineseShort: '次序, 规则, 命令；命令, 定货', chineseExplanation: '次序, 规则, 命令；命令, 定货是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(often plural) a command given by a superior (e.g., a military or law enforcement officer) that must be obeyed.',
    examples: [{ english: 'The lesson explains the meaning of order.', malay: 'Arahan yang mesti dipatuhi.', chinese: '本课解释了“order”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'force', term: 'force', normalizedTerm: 'force', partOfSpeech: ['noun', 'verb'],
    chineseShort: '力量, 武力, 势力, 影响力, 军队, 力, 效力；强迫, 强夺, 推动, 提高', chineseExplanation: '力量, 武力, 势力, 影响力, 军队, 力, 效力；强迫, 强夺, 推动, 提高是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A powerful effect or influence.',
    examples: [{ english: 'The lesson explains the meaning of force.', malay: 'Kekuatan atau pengaruh yang besar.', chinese: '本课解释了“force”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'industry', term: 'industry', normalizedTerm: 'industry', partOfSpeech: ['noun'],
    chineseShort: '勤劳, 工业, 企业, 产业, 有组织的劳动；工业, 实业', chineseExplanation: '勤劳, 工业, 企业, 产业, 有组织的劳动；工业, 实业是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The people or companies engaged in a particular kind of commercial enterprise.',
    examples: [{ english: 'The lesson explains the meaning of industry.', malay: 'Kegiatan perusahaan komersial.', chinese: '本课解释了“industry”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'die', term: 'die', normalizedTerm: 'die', partOfSpeech: ['verb', 'noun'],
    chineseShort: '死亡, 消逝, 平息, 熄灭, 漠然, 渴望；死', chineseExplanation: '死亡, 消逝, 平息, 熄灭, 漠然, 渴望；死是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small cube with 1 to 6 spots on the six faces; used in gambling to generate random numbers.',
    examples: [{ english: 'The example shows how to use the verb die.', malay: 'Mati.', chinese: '这个例子展示了如何使用动词“die”。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'plan', term: 'plan', normalizedTerm: 'plan', partOfSpeech: ['noun', 'verb'],
    chineseShort: '计划, 方案, 策略, 方法, 进度表, 程序表, 平面图, 设计图, 轮廓, 示意图；计划, 设计, 意欲', chineseExplanation: '计划, 方案, 策略, 方法, 进度表, 程序表, 平面图, 设计图, 轮廓, 示意图；计划, 设计, 意欲是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A series of steps to be carried out or goals to be accomplished.',
    examples: [{ english: 'The lesson explains the meaning of plan.', malay: 'Rangka langkah untuk mencapai tujuan.', chinese: '本课解释了“plan”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'kill', term: 'kill', normalizedTerm: 'kill', partOfSpeech: ['verb', 'noun'],
    chineseShort: '杀, 杀戮, 小河；杀, 破坏, 消灭, 使终止, 抵消, 否决', chineseExplanation: '杀, 杀戮, 小河；杀, 破坏, 消灭, 使终止, 抵消, 否决是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The destruction of an enemy plane or ship or tank or missile.',
    examples: [{ english: 'The example shows how to use the verb kill.', malay: 'Menyebabkan kematian.', chinese: '这个例子展示了如何使用动词“kill”。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'hard', term: 'hard', normalizedTerm: 'hard', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '坚硬的, 硬的, 难的, 艰苦的, 困难的, 坚固的, 猛烈的, 艰难的, 结实的, 确实的；坚硬地, 努力地, 辛苦地, 接近地, 猛烈地, 牢固地', chineseExplanation: '坚硬的, 硬的, 难的, 艰苦的, 困难的, 坚固的, 猛烈的, 艰难的, 结实的, 确实的；坚硬地, 努力地, 辛苦地, 接近地, 猛烈地, 牢固地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Dispassionate;.',
    examples: [{ english: 'The passage uses hard to describe the situation.', malay: 'Keras atau sukar.', chinese: '文章用“hard”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'else', term: 'else', normalizedTerm: 'else', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '别的, 其他的；另外, 否则, 不然', chineseExplanation: '别的, 其他的；另外, 否则, 不然是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '& pron. Other; one or something beside; as, Who else is coming? What else shall I give? Do you expect anything else? adv. & conj. Besides; except that mentioned; in addition; as, nowhere else;.',
    examples: [{ english: 'The speaker used else to add detail.', malay: 'Yang lain.', chinese: '说话者用“else”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'ground', term: 'ground', normalizedTerm: 'ground', partOfSpeech: ['noun', 'verb'],
    chineseShort: '土地, 战场, 场地, 地面, 范围；土地的, 地面上的', chineseExplanation: '土地, 战场, 场地, 地面, 范围；土地的, 地面上的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A position to be won or defended in battle (or as if in battle).',
    examples: [{ english: 'The lesson explains the meaning of ground.', malay: 'Permukaan bumi atau tanah.', chinese: '本课解释了“ground”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'ten', term: 'ten', normalizedTerm: 'ten', partOfSpeech: ['noun'],
    chineseShort: '十, 十个', chineseExplanation: '十, 十个是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The cardinal number that is the sum of nine and one; the base of the decimal system.',
    examples: [{ english: 'The lesson explains the meaning of ten.', malay: 'Nombor sepuluh.', chinese: '本课解释了“ten”的含义。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'half', term: 'half', normalizedTerm: 'half', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '一半, 半场, 不完全；一半的, 不完全的, 部分的, 半场的', chineseExplanation: '一半, 半场, 不完全；一半的, 不完全的, 部分的, 半场的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'One of two divisions into which some games or performances are divided: the two divisions are separated by an interval.',
    examples: [{ english: 'The lesson explains the meaning of half.', malay: 'Satu daripada dua bahagian sama.', chinese: '本课解释了“half”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'join', term: 'join', normalizedTerm: 'join', partOfSpeech: ['verb', 'noun'],
    chineseShort: '参加, 结合, 加入；连接, 结合, 参加, 加入', chineseExplanation: '参加, 结合, 加入；连接, 结合, 参加, 加入是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Become part of; become a member of a group or organisation.',
    examples: [{ english: 'The example shows how to use the verb join.', malay: 'Menjadi anggota atau menyertai.', chinese: '这个例子展示了如何使用动词“join”。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'record', term: 'record', normalizedTerm: 'record', partOfSpeech: ['noun', 'verb'],
    chineseShort: '记录, 履历, 档案, 审判记录, 最高纪录, 唱片；记录, 记载, 标明, 将...录音', chineseExplanation: '记录, 履历, 档案, 审判记录, 最高纪录, 唱片；记录, 记载, 标明, 将...录音是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Anything (such as a document or a phonograph record or a photograph) providing permanent evidence of or information about past events.',
    examples: [{ english: 'The lesson explains the meaning of record.', malay: 'Catatan kekal tentang sesuatu.', chinese: '本课解释了“record”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'player', term: 'player', normalizedTerm: 'player', partOfSpeech: ['noun'],
    chineseShort: '竞赛者, 上场队员, 游戏者, 演员；交易者', chineseExplanation: '竞赛者, 上场队员, 游戏者, 演员；交易者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who participates in or is skilled at some game.',
    examples: [{ english: 'The lesson explains the meaning of player.', malay: 'Orang yang menyertai permainan.', chinese: '本课解释了“player”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'contain', term: 'contain', normalizedTerm: 'contain', partOfSpeech: ['verb'],
    chineseShort: '包含, 容纳, 控制；自制', chineseExplanation: '包含, 容纳, 控制；自制是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be divisible by.',
    examples: [{ english: 'The example shows how to use the verb contain.', malay: 'Mengandungi sesuatu.', chinese: '这个例子展示了如何使用动词“contain”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'unit', term: 'unit', normalizedTerm: 'unit', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '单位, 分队, 部队, 单元, 部件, 装置；单位的, 单元的', chineseExplanation: '单位, 分队, 部队, 单元, 部件, 装置；单位的, 单元的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An individual or group or structure or other entity regarded as a structural or functional constituent of a whole.',
    examples: [{ english: 'The lesson explains the meaning of unit.', malay: 'Bahagian tunggal daripada keseluruhan.', chinese: '本课解释了“unit”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'establish', term: 'establish', normalizedTerm: 'establish', partOfSpeech: ['verb'],
    chineseShort: '建立, 确立, 制定；移植生长', chineseExplanation: '建立, 确立, 制定；移植生长是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Set up or found.',
    examples: [{ english: 'The example shows how to use the verb establish.', malay: 'Menubuhkan atau mewujudkan.', chinese: '这个例子展示了如何使用动词“establish”。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'wish', term: 'wish', normalizedTerm: 'wish', partOfSpeech: ['verb', 'noun'],
    chineseShort: '希望, 愿望, 祝愿, 命令, 请求；愿, 想要, 希望, 祝愿', chineseExplanation: '希望, 愿望, 祝愿, 命令, 请求；愿, 想要, 希望, 祝愿是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A specific feeling of desire.',
    examples: [{ english: 'The example shows how to use the verb wish.', malay: 'Keinginan terhadap sesuatu.', chinese: '这个例子展示了如何使用动词“wish”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'wide', term: 'wide', normalizedTerm: 'wide', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '宽的, 广阔的, 普遍的, 宽阔的, 广泛的, 一般的；广阔地, 遍及各处地, 广泛地', chineseExplanation: '宽的, 广阔的, 普遍的, 宽阔的, 广泛的, 一般的；广阔地, 遍及各处地, 广泛地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having great (or a certain) extent from one side to the other.',
    examples: [{ english: 'The passage uses wide to describe the situation.', malay: 'Mempunyai jarak besar dari sisi ke sisi.', chinese: '文章用“wide”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'foreign', term: 'foreign', normalizedTerm: 'foreign', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '外国的, 外交的, 外省的, 外来的, 不相关的；外来的', chineseExplanation: '外国的, 外交的, 外省的, 外来的, 不相关的；外来的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Of concern to or concerning the affairs of other nations (other than your own).',
    examples: [{ english: 'The passage uses foreign to describe the situation.', malay: 'Berkaitan dengan negara lain.', chinese: '文章用“foreign”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'plant', term: 'plant', normalizedTerm: 'plant', partOfSpeech: ['noun', 'verb'],
    chineseShort: '植物, 作物, 工厂, 树枝, 生长, 设施, 成套设备；种植, 栽培, 播种, 培养, 安置, 殖民于, 使位于', chineseExplanation: '植物, 作物, 工厂, 树枝, 生长, 设施, 成套设备；种植, 栽培, 播种, 培养, 安置, 殖民于, 使位于是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Buildings for carrying on industrial labour.',
    examples: [{ english: 'The lesson explains the meaning of plant.', malay: 'Tumbuhan atau kilang.', chinese: '本课解释了“plant”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'represent', term: 'represent', normalizedTerm: 'represent', partOfSpeech: ['verb'],
    chineseShort: '表现, 表示, 描绘, 讲述, 代表, 象征, 回忆, 再赠送, 再上演；提出异议', chineseExplanation: '表现, 表示, 描绘, 讲述, 代表, 象征, 回忆, 再赠送, 再上演；提出异议是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Take the place of or be parallel or equivalent to.',
    examples: [{ english: 'The example shows how to use the verb represent.', malay: 'Mewakili atau menggantikan.', chinese: '这个例子展示了如何使用动词“represent”。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'medical', term: 'medical', normalizedTerm: 'medical', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '医生, 体格检查；医学的, 内科的, 药的', chineseExplanation: '医生, 体格检查；医学的, 内科的, 药的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Relating to the study or practice of medicine.',
    examples: [{ english: 'The passage uses medical to describe the situation.', malay: 'Berkaitan dengan perubatan.', chinese: '文章用“medical”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'top', term: 'top', normalizedTerm: 'top', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '顶部, 顶端, 极点, 上面, 上部, 顶篷, 最高地位, 首位, 陀螺；最高的, 顶上的, 头等的', chineseExplanation: '顶部, 顶端, 极点, 上面, 上部, 顶篷, 最高地位, 首位, 陀螺；最高的, 顶上的, 头等的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The upper part of anything.',
    examples: [{ english: 'The lesson explains the meaning of top.', malay: 'Bahagian paling atas.', chinese: '本课解释了“top”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'quickly', term: 'quickly', normalizedTerm: 'quickly', partOfSpeech: ['adverb'],
    chineseShort: '很快地', chineseExplanation: '很快地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'With rapid movements.',
    examples: [{ english: 'The speaker used quickly to add detail.', malay: 'Dengan pantas.', chinese: '说话者用“quickly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'blood', term: 'blood', normalizedTerm: 'blood', partOfSpeech: ['noun', 'verb'],
    chineseShort: '血, 血统, 流血, 气质, 生命；使出血, 用血涂', chineseExplanation: '血, 血统, 流血, 气质, 生命；使出血, 用血涂是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The fluid (red in vertebrates) that is pumped through the body by the heart and contains plasma, blood cells, and platelets.',
    examples: [{ english: 'The lesson explains the meaning of blood.', malay: 'Cecair merah yang dipam oleh jantung.', chinese: '本课解释了“blood”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'note', term: 'note', normalizedTerm: 'note', partOfSpeech: ['noun', 'verb'],
    chineseShort: '笔记, 记录, 注解, 票据, 符号, 显要, 注重, 便笺, 照会；记录, 注解, 注意', chineseExplanation: '笔记, 记录, 注解, 票据, 符号, 显要, 注重, 便笺, 照会；记录, 注解, 注意是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A brief written record.',
    examples: [{ english: 'The lesson explains the meaning of note.', malay: 'Catatan bertulis yang ringkas.', chinese: '本课解释了“note”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'analysis', term: 'analysis', normalizedTerm: 'analysis', partOfSpeech: ['noun'],
    chineseShort: '分析；分析机', chineseExplanation: '分析；分析机是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An investigation of the component parts of a whole and their relations in making up the whole.',
    examples: [{ english: 'The lesson explains the meaning of analysis.', malay: 'Kajian terperinci terhadap bahagian sesuatu.', chinese: '本课解释了“analysis”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'concern', term: 'concern', normalizedTerm: 'concern', partOfSpeech: ['noun', 'verb'],
    chineseShort: '关心, 忧虑；与...有关, 使担心, 使挂念', chineseExplanation: '关心, 忧虑；与...有关, 使担心, 使挂念是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that interests you because it is important or affects you.',
    examples: [{ english: 'The lesson explains the meaning of concern.', malay: 'Perkara penting yang menimbulkan perhatian.', chinese: '本课解释了“concern”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'response', term: 'response', normalizedTerm: 'response', partOfSpeech: ['noun'],
    chineseShort: '反应, 回答, 响应；应答', chineseExplanation: '反应, 回答, 响应；应答是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A result.',
    examples: [{ english: 'The lesson explains the meaning of response.', malay: 'Jawapan atau tindak balas.', chinese: '本课解释了“response”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'forward', term: 'forward', normalizedTerm: 'forward', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '向前的, 早的, 迅速的, 在前的, 进步的；促进...的生长, 转寄, 运送', chineseExplanation: '向前的, 早的, 迅速的, 在前的, 进步的；促进...的生长, 转寄, 运送是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The person who plays the position of forward in certain games, such as basketball, soccer, or hockey.',
    examples: [{ english: 'The speaker used forward to add detail.', malay: 'Ke arah hadapan.', chinese: '说话者用“forward”补充细节。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'income', term: 'income', normalizedTerm: 'income', partOfSpeech: ['noun'],
    chineseShort: '收入, 收益, 流入；收益', chineseExplanation: '收入, 收益, 流入；收益是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The financial gain (earned or unearned) accruing over a given period of time.',
    examples: [{ english: 'The lesson explains the meaning of income.', malay: 'Wang yang diterima dalam sesuatu tempoh.', chinese: '本课解释了“income”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'relate', term: 'relate', normalizedTerm: 'relate', partOfSpeech: ['verb'],
    chineseShort: '讲, 叙述, 使互相关联；有关, 符合, 相处得好', chineseExplanation: '讲, 叙述, 使互相关联；有关, 符合, 相处得好是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Give an account of.',
    examples: [{ english: 'The example shows how to use the verb relate.', malay: 'Menceritakan atau menghubungkan.', chinese: '这个例子展示了如何使用动词“relate”。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'media', term: 'media', normalizedTerm: 'media', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '媒体；媒质', chineseExplanation: '媒体；媒质是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A means or instrumentality for storing or communicating information n the surrounding environment n an intervening substance through which signals can travel as a means for communication n…',
    examples: [{ english: 'The lesson explains the meaning of media.', malay: 'Sarana menyimpan atau menyampaikan maklumat.', chinese: '本课解释了“media”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'please', term: 'please', normalizedTerm: 'please', partOfSpeech: ['verb', 'adverb'],
    chineseShort: '请；使高兴, 合...的心意, 取悦', chineseExplanation: '请；使高兴, 合...的心意, 取悦是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Give pleasure to or be pleasing to.',
    examples: [{ english: 'The example shows how to use the verb please.', malay: 'Memberikan keseronokan atau kepuasan.', chinese: '这个例子展示了如何使用动词“please”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'resource', term: 'resource', normalizedTerm: 'resource', partOfSpeech: ['noun', 'verb'],
    chineseShort: '资源, 财力, 办法, 策略, 急智, 消遣；资源', chineseExplanation: '资源, 财力, 办法, 策略, 急智, 消遣；资源是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Available source of wealth; a new or reserve supply that can be drawn upon when needed.',
    examples: [{ english: 'The lesson explains the meaning of resource.', malay: 'Bekalan yang boleh digunakan apabila diperlukan.', chinese: '本课解释了“resource”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'growth', term: 'growth', normalizedTerm: 'growth', partOfSpeech: ['noun'],
    chineseShort: '生长, 栽培, 增长；等比级数', chineseExplanation: '生长, 栽培, 增长；等比级数是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(biology) the process of an individual organism growing organically; a purely biological unfolding of events involved in an organism changing gradually from a simple to a more complex level.',
    examples: [{ english: 'The lesson explains the meaning of growth.', malay: 'Proses pertumbuhan.', chinese: '本课解释了“growth”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'lady', term: 'lady', normalizedTerm: 'lady', partOfSpeech: ['noun', 'verb'],
    chineseShort: '淑女, 夫人, 女士, 贵妇', chineseExplanation: '淑女, 夫人, 女士, 贵妇是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A polite name for any woman.',
    examples: [{ english: 'The lesson explains the meaning of lady.', malay: 'Panggilan sopan bagi wanita.', chinese: '本课解释了“lady”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'disease', term: 'disease', normalizedTerm: 'disease', partOfSpeech: ['noun', 'verb'],
    chineseShort: '疾病, 弊病；病', chineseExplanation: '疾病, 弊病；病是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An impairment of health or a condition of abnormal functioning.',
    examples: [{ english: 'The lesson explains the meaning of disease.', malay: 'Penyakit atau gangguan kesihatan.', chinese: '本课解释了“disease”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'message', term: 'message', normalizedTerm: 'message', partOfSpeech: ['noun', 'verb'],
    chineseShort: '消息, 通讯, 讯息, 教训, 预言, 广告词；通知', chineseExplanation: '消息, 通讯, 讯息, 教训, 预言, 广告词；通知是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A communication (usually brief) that is written or spoken or signaled.',
    examples: [{ english: 'The lesson explains the meaning of message.', malay: 'Maklumat ringkas yang disampaikan.', chinese: '本课解释了“message”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'glass', term: 'glass', normalizedTerm: 'glass', partOfSpeech: ['noun', 'verb'],
    chineseShort: '玻璃, 玻璃杯, 透镜；装玻璃于, 反射, 反映', chineseExplanation: '玻璃, 玻璃杯, 透镜；装玻璃于, 反射, 反映是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A brittle transparent solid with irregular atomic structure.',
    examples: [{ english: 'The lesson explains the meaning of glass.', malay: 'Bahan pepejal lutsinar dan rapuh.', chinese: '本课解释了“glass”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'total', term: 'total', normalizedTerm: 'total', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '全体的, 总的, 全然的；计算...的总和, 共计为', chineseExplanation: '全体的, 总的, 全然的；计算...的总和, 共计为是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Add up in number or quantity.',
    examples: [{ english: 'The passage uses total to describe the situation.', malay: 'Jumlah keseluruhan.', chinese: '文章用“total”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'anyway', term: 'anyway', normalizedTerm: 'anyway', partOfSpeech: ['adverb'],
    chineseShort: '无论如何, 至少', chineseExplanation: '无论如何, 至少是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Used to indicate that a statement explains or supports a previous statement; anyhow, they\'re quiet"; anyway, it\'s gone"; in any case, there was a brief scuffle" r in any way whatsoever.',
    examples: [{ english: 'The speaker used anyway to add detail.', malay: 'Walau bagaimanapun.', chinese: '说话者用“anyway”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tend', term: 'tend', normalizedTerm: 'tend', partOfSpeech: ['verb'],
    chineseShort: '走向, 有某种的倾向, 易于, 照顾, 注意；照料, 护理', chineseExplanation: '走向, 有某种的倾向, 易于, 照顾, 注意；照料, 护理是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Have a tendency or disposition to do or be something; be inclined.',
    examples: [{ english: 'The example shows how to use the verb tend.', malay: 'Cenderung melakukan sesuatu.', chinese: '这个例子展示了如何使用动词“tend”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'laugh', term: 'laugh', normalizedTerm: 'laugh', partOfSpeech: ['noun', 'verb'],
    chineseShort: '笑, 笑声；笑, 大笑', chineseExplanation: '笑, 笑声；笑, 大笑是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The sound of laughing.',
    examples: [{ english: 'The lesson explains the meaning of laugh.', malay: 'Bunyi ketawa.', chinese: '本课解释了“laugh”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'remove', term: 'remove', normalizedTerm: 'remove', partOfSpeech: ['verb', 'noun'],
    chineseShort: '移动, 调动, 除去, 迁移, 开除, 移交；迁移, 移动, 搬家', chineseExplanation: '移动, 调动, 除去, 迁移, 开除, 移交；迁移, 移动, 搬家是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Degree of figurative distance or separation;.',
    examples: [{ english: 'The example shows how to use the verb remove.', malay: 'Menyingkirkan atau mengalihkan.', chinese: '这个例子展示了如何使用动词“remove”。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'hang', term: 'hang', normalizedTerm: 'hang', partOfSpeech: ['verb', 'noun'],
    chineseShort: '悬挂, 诀窍, 意义；悬挂, 附着, 装饰, 垂下, 踌躇, 绞死, 使悬而未决', chineseExplanation: '悬挂, 诀窍, 意义；悬挂, 附着, 装饰, 垂下, 踌躇, 绞死, 使悬而未决是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The way a garment hangs.',
    examples: [{ english: 'The example shows how to use the verb hang.', malay: 'Tergantung.', chinese: '这个例子展示了如何使用动词“hang”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'entire', term: 'entire', normalizedTerm: 'entire', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '整个, 全部；全体的, 完全的, 全部的', chineseExplanation: '整个, 全部；全体的, 完全的, 全部的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Constituting the full quantity or extent; complete.',
    examples: [{ english: 'The passage uses entire to describe the situation.', malay: 'Seluruh atau lengkap.', chinese: '文章用“entire”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'network', term: 'network', normalizedTerm: 'network', partOfSpeech: ['noun', 'verb'],
    chineseShort: '网络, 广播网, 网状物；网络', chineseExplanation: '网络, 广播网, 网状物；网络是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An interconnected system of things or people.',
    examples: [{ english: 'The lesson explains the meaning of network.', malay: 'Sistem orang atau benda yang saling berhubung.', chinese: '本课解释了“network”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'obviously', term: 'obviously', normalizedTerm: 'obviously', partOfSpeech: ['adverb'],
    chineseShort: '显而易见地, 明显地', chineseExplanation: '显而易见地, 明显地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Unmistakably (`plain\' is often used informally for `plainly\').',
    examples: [{ english: 'The speaker used obviously to add detail.', malay: 'Dengan jelas.', chinese: '说话者用“obviously”补充细节。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'original', term: 'original', normalizedTerm: 'original', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '最初的, 原始的, 有创意的；原物, 原作', chineseExplanation: '最初的, 原始的, 有创意的；原物, 原作是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that serves as a model or a basis for making copies.',
    examples: [{ english: 'The passage uses original to describe the situation.', malay: 'Benda asal yang menjadi model salinan.', chinese: '文章用“original”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'employee', term: 'employee', normalizedTerm: 'employee', partOfSpeech: ['noun'],
    chineseShort: '职员, 员工, 受雇人员；职工', chineseExplanation: '职员, 员工, 受雇人员；职工是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A worker who is hired to perform a job.',
    examples: [{ english: 'The lesson explains the meaning of employee.', malay: 'Pekerja yang diupah.', chinese: '本课解释了“employee”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'medium', term: 'medium', normalizedTerm: 'medium', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '媒体, 方法, 媒介；半生熟的, 中间的', chineseExplanation: '媒体, 方法, 媒介；半生熟的, 中间的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A means or instrumentality for storing or communicating information.',
    examples: [{ english: 'The lesson explains the meaning of medium.', malay: 'Sarana penyampaian maklumat.', chinese: '本课解释了“medium”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'inside', term: 'inside', normalizedTerm: 'inside', partOfSpeech: ['adverb', 'noun'],
    chineseShort: '内部, 内脏, 内幕；内部的, 秘密的, 户内的', chineseExplanation: '内部, 内脏, 内幕；内部的, 秘密的, 户内的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The region that is inside of something.',
    examples: [{ english: 'The speaker used inside to add detail.', malay: 'Bahagian dalam sesuatu.', chinese: '说话者用“inside”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'operate', term: 'operate', normalizedTerm: 'operate', partOfSpeech: ['verb'],
    chineseShort: '操作, 运转, 动手术, 活动', chineseExplanation: '操作, 运转, 动手术, 活动是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Direct or control; projects, businesses, etc.',
    examples: [{ english: 'The example shows how to use the verb operate.', malay: 'Mengendalikan atau mengawal.', chinese: '这个例子展示了如何使用动词“operate”。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'variety', term: 'variety', normalizedTerm: 'variety', partOfSpeech: ['noun'],
    chineseShort: '多样, 种类, 变种, 杂耍；变种', chineseExplanation: '多样, 种类, 变种, 杂耍；变种是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(biology) a taxonomic category consisting of members of a species that differ from others of the same species in minor but heritable characteristics.',
    examples: [{ english: 'The lesson explains the meaning of variety.', malay: 'Kepelbagaian atau jenis.', chinese: '本课解释了“variety”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'writer', term: 'writer', normalizedTerm: 'writer', partOfSpeech: ['noun'],
    chineseShort: '作家, 撰稿者, 抄写员；记录器', chineseExplanation: '作家, 撰稿者, 抄写员；记录器是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Writes (books or stories or articles or the like) professionally (for pay).',
    examples: [{ english: 'The lesson explains the meaning of writer.', malay: 'Orang yang menulis secara profesional.', chinese: '本课解释了“writer”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'fear', term: 'fear', normalizedTerm: 'fear', partOfSpeech: ['noun', 'verb'],
    chineseShort: '恐怖, 害怕, 担心；害怕, 恐惧, 为...担心, 敬畏', chineseExplanation: '恐怖, 害怕, 担心；害怕, 恐惧, 为...担心, 敬畏是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An emotion experienced in anticipation of some specific pain or danger (usually accompanied by a desire to flee or fight).',
    examples: [{ english: 'The lesson explains the meaning of fear.', malay: 'Perasaan takut terhadap bahaya.', chinese: '本课解释了“fear”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'instead', term: 'instead', normalizedTerm: 'instead', partOfSpeech: ['adverb'],
    chineseShort: '作为替代, 反而', chineseExplanation: '作为替代, 反而是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In place of, or as an alternative to r on the contrary; rather (or instead), he wrote her a letter".',
    examples: [{ english: 'The speaker used instead to add detail.', malay: 'Sebagai ganti.', chinese: '说话者用“instead”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'complete', term: 'complete', normalizedTerm: 'complete', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '完全的, 十足的, 完成的；完成, 完工, 使圆满', chineseExplanation: '完全的, 十足的, 完成的；完成, 完工, 使圆满是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Come or bring to a finish or an end; others finished in over 4 hours".',
    examples: [{ english: 'The passage uses complete to describe the situation.', malay: 'Menyelesaikan hingga tamat.', chinese: '文章用“complete”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tough', term: 'tough', normalizedTerm: 'tough', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '恶棍；强硬的, 艰苦的, 坚固的, 坚韧的, 粗暴的, 咬不动的', chineseExplanation: '恶棍；强硬的, 艰苦的, 坚固的, 坚韧的, 粗暴的, 咬不动的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not given to gentleness or sentimentality.',
    examples: [{ english: 'The passage uses tough to describe the situation.', malay: 'Kuat, keras atau sukar.', chinese: '文章用“tough”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'object', term: 'object', normalizedTerm: 'object', partOfSpeech: ['noun', 'verb'],
    chineseShort: '物体, 目标, 目的, 对象, 宾语, 客体；反对, 抱反感', chineseExplanation: '物体, 目标, 目的, 对象, 宾语, 客体；反对, 抱反感是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A tangible and visible entity; an entity that can cast a shadow.',
    examples: [{ english: 'The lesson explains the meaning of object.', malay: 'Benda nyata yang dapat dilihat.', chinese: '本课解释了“object”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'yard', term: 'yard', normalizedTerm: 'yard', partOfSpeech: ['noun', 'verb'],
    chineseShort: '码, 庭院, 工场；堆置场', chineseExplanation: '码, 庭院, 工场；堆置场是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A unit of length equal to 3 feet; defined as 91.44 centimeters; originally taken to be the average length of a stride.',
    examples: [{ english: 'The lesson explains the meaning of yard.', malay: 'Unit panjang bersamaan tiga kaki.', chinese: '本课解释了“yard”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'beat', term: 'beat', normalizedTerm: 'beat', partOfSpeech: ['verb', 'noun'],
    chineseShort: '心跳, 打, 敲打声, 拍子；打, 拍打, 打败', chineseExplanation: '心跳, 打, 敲打声, 拍子；打, 拍打, 打败是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A regular route for a sentry or policeman.',
    examples: [{ english: 'The example shows how to use the verb beat.', malay: 'Mengalahkan atau rentak.', chinese: '这个例子展示了如何使用动词“beat”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'consumer', term: 'consumer', normalizedTerm: 'consumer', partOfSpeech: ['noun'],
    chineseShort: '消费者；消费者, 用户', chineseExplanation: '消费者；消费者, 用户是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who uses goods or services.',
    examples: [{ english: 'The lesson explains the meaning of consumer.', malay: 'Orang yang menggunakan barangan atau perkhidmatan.', chinese: '本课解释了“consumer”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'safe', term: 'safe', normalizedTerm: 'safe', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '保险箱, 冷藏室；安全的, 可靠的, 平安的, 稳健的, 有把握的', chineseExplanation: '保险箱, 冷藏室；安全的, 可靠的, 平安的, 稳健的, 有把握的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Strongbox where valuables can be safely kept.',
    examples: [{ english: 'The passage uses safe to describe the situation.', malay: 'Selamat daripada bahaya.', chinese: '文章用“safe”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'victim', term: 'victim', normalizedTerm: 'victim', partOfSpeech: ['noun', 'verb'],
    chineseShort: '受害人, 牺牲者, 牺牲品；受害人, 被害人, 遭难者', chineseExplanation: '受害人, 牺牲者, 牺牲品；受害人, 被害人, 遭难者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An unfortunate person who suffers from some adverse circumstance.',
    examples: [{ english: 'The lesson explains the meaning of victim.', malay: 'Orang yang mengalami kemudaratan.', chinese: '本课解释了“victim”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'bear', term: 'bear', normalizedTerm: 'bear', partOfSpeech: ['verb', 'noun'],
    chineseShort: '熊；忍受, 支承, 产生, 怀有, 通过卖空使跌价', chineseExplanation: '熊；忍受, 支承, 产生, 怀有, 通过卖空使跌价是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Massive plantigrade carnivorous or omnivorous mammals with long shaggy coats and strong claws.',
    examples: [{ english: 'The example shows how to use the verb bear.', malay: 'Mamalia besar berbulu tebal.', chinese: '这个例子展示了如何使用动词“bear”。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'district', term: 'district', normalizedTerm: 'district', partOfSpeech: ['noun', 'verb'],
    chineseShort: '区域, 地方；地区, 地段', chineseExplanation: '区域, 地方；地区, 地段是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A region marked off for administrative or other purposes.',
    examples: [{ english: 'The lesson explains the meaning of district.', malay: 'Kawasan bagi tujuan pentadbiran.', chinese: '本课解释了“district”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'dinner', term: 'dinner', normalizedTerm: 'dinner', partOfSpeech: ['noun', 'verb'],
    chineseShort: '晚餐, 正餐, 宴会', chineseExplanation: '晚餐, 正餐, 宴会是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The main meal of the day served in the evening or at midday.',
    examples: [{ english: 'The lesson explains the meaning of dinner.', malay: 'Hidangan utama pada petang atau tengah hari.', chinese: '本课解释了“dinner”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'none', term: 'none', normalizedTerm: 'none', partOfSpeech: ['noun', 'adverb'],
    chineseShort: '一点也不, 毫不；没有人, 无一物, 并无一个', chineseExplanation: '一点也不, 毫不；没有人, 无一物, 并无一个是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A canonical hour that is the ninth hour of the day counting from sunrise.',
    examples: [{ english: 'The lesson explains the meaning of none.', malay: 'Tiada satu pun.', chinese: '本课解释了“none”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'forest', term: 'forest', normalizedTerm: 'forest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '森林, 林区；植树于', chineseExplanation: '森林, 林区；植树于是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The trees and other plants in a large densely wooded area.',
    examples: [{ english: 'The lesson explains the meaning of forest.', malay: 'Kawasan luas yang dipenuhi pokok.', chinese: '本课解释了“forest”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'judge', term: 'judge', normalizedTerm: 'judge', partOfSpeech: ['noun', 'verb'],
    chineseShort: '法官, 裁判员, 审判官, 鉴定人；审理, 鉴定, 判断, 判决, 裁定', chineseExplanation: '法官, 裁判员, 审判官, 鉴定人；审理, 鉴定, 判断, 判决, 裁定是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A public official authorised to decide questions brought before a court of justice.',
    examples: [{ english: 'The lesson explains the meaning of judge.', malay: 'Pegawai yang memutuskan perkara di mahkamah.', chinese: '本课解释了“judge”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'release', term: 'release', normalizedTerm: 'release', partOfSpeech: ['noun', 'verb'],
    chineseShort: '释放, 发泄, 豁免, 发行, 释放证书；释放, 解除, 放松, 豁免, 免除, 发布, 放弃, 让与', chineseExplanation: '释放, 发泄, 豁免, 发行, 释放证书；释放, 解除, 放松, 豁免, 免除, 发布, 放弃, 让与是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Merchandise issued for sale or public showing (especially a record or film).',
    examples: [{ english: 'The lesson explains the meaning of release.', malay: 'Mengeluarkan untuk jualan atau tontonan awam.', chinese: '本课解释了“release”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'male', term: 'male', normalizedTerm: 'male', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '男人, 雄性动物；男性的, 雄性的, 有力的', chineseExplanation: '男人, 雄性动物；男性的, 雄性的, 有力的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An animal that produces gametes (spermatozoa) that can fertilize female gametes (ova).',
    examples: [{ english: 'The passage uses male to describe the situation.', malay: 'Haiwan atau manusia berjantina lelaki.', chinese: '文章用“male”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'review', term: 'review', normalizedTerm: 'review', partOfSpeech: ['noun', 'verb'],
    chineseShort: '检讨, 复习, 回顾, 检阅, 评论；温习, 检讨, 评论, 再检察, 复审', chineseExplanation: '检讨, 复习, 回顾, 检阅, 评论；温习, 检讨, 评论, 再检察, 复审是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An essay or article that gives a critical evaluation (as of a book or play).',
    examples: [{ english: 'The lesson explains the meaning of review.', malay: 'Penilaian kritis terhadap sesuatu karya.', chinese: '本课解释了“review”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'recall', term: 'recall', normalizedTerm: 'recall', partOfSpeech: ['verb', 'noun'],
    chineseShort: '回忆, 召回, 撤消；回想, 回忆, 召回, 撤消, 使恢复', chineseExplanation: '回忆, 召回, 撤消；回想, 回忆, 召回, 撤消, 使恢复是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A request by the manufacturer of a defective product to return the product (as for replacement or repair).',
    examples: [{ english: 'The example shows how to use the verb recall.', malay: 'Permintaan memulangkan produk yang rosak.', chinese: '这个例子展示了如何使用动词“recall”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'otherwise', term: 'otherwise', normalizedTerm: 'otherwise', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '否则, 不同地, 别的方式', chineseExplanation: '否则, 不同地, 别的方式是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Other than as supposed or expected.',
    examples: [{ english: 'The speaker used otherwise to add detail.', malay: 'Jika tidak atau dengan cara lain.', chinese: '说话者用“otherwise”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'hardly', term: 'hardly', normalizedTerm: 'hardly', partOfSpeech: ['adverb'],
    chineseShort: '刚刚, 几乎不, 勉强是', chineseExplanation: '刚刚, 几乎不, 勉强是是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Almost not.',
    examples: [{ english: 'The speaker used hardly to add detail.', malay: 'Hampir tidak.', chinese: '说话者用“hardly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'directly', term: 'directly', normalizedTerm: 'directly', partOfSpeech: ['adverb'],
    chineseShort: '径直地, 直接地, 直率地, 正好地, 直截了当地, 立即, 马上；一..., 一当...就...', chineseExplanation: '径直地, 直接地, 直率地, 正好地, 直截了当地, 立即, 马上；一..., 一当...就...是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Without deviation.',
    examples: [{ english: 'The speaker used directly to add detail.', malay: 'Secara terus.', chinese: '说话者用“directly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'nobody', term: 'nobody', normalizedTerm: 'nobody', partOfSpeech: ['noun'],
    chineseShort: '小人物, 无名小卒；无人, 没有人', chineseExplanation: '小人物, 无名小卒；无人, 没有人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person of no influence.',
    examples: [{ english: 'The lesson explains the meaning of nobody.', malay: 'Tiada sesiapa.', chinese: '本课解释了“nobody”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'powerful', term: 'powerful', normalizedTerm: 'powerful', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '有力的, 有权力的, 强大的；强力的', chineseExplanation: '有力的, 有权力的, 强大的；强力的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Having great power or force or potency or effect.',
    examples: [{ english: 'The passage uses powerful to describe the situation.', malay: 'Mempunyai kuasa atau kesan yang besar.', chinese: '文章用“powerful”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'touch', term: 'touch', normalizedTerm: 'touch', partOfSpeech: ['noun', 'verb'],
    chineseShort: '触觉, 碰, 触, 机灵, 轻触, 格调, 少许, 缺点, 弹力；接触, 触摸, 触及, 使接触, 达到, 涉及, 影响到, 使轻度受害, 感动', chineseExplanation: '触觉, 碰, 触, 机灵, 轻触, 格调, 少许, 缺点, 弹力；接触, 触摸, 触及, 使接触, 达到, 涉及, 影响到, 使轻度受害, 感动是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The event of something coming in contact with the body.',
    examples: [{ english: 'The lesson explains the meaning of touch.', malay: 'Bersentuhan dengan sesuatu.', chinese: '本课解释了“touch”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'normally', term: 'normally', normalizedTerm: 'normally', partOfSpeech: ['adverb'],
    chineseShort: '正规地, 合规则, 正常地', chineseExplanation: '正规地, 合规则, 正常地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Under normal conditions.',
    examples: [{ english: 'The speaker used normally to add detail.', malay: 'Dalam keadaan biasa.', chinese: '说话者用“normally”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'annual', term: 'annual', normalizedTerm: 'annual', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '年刊, 年报；每年的, 一年一次的, 全年的, 一年生的', chineseExplanation: '年刊, 年报；每年的, 一年一次的, 全年的, 一年生的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(botany) a plant that completes its entire life cycle within the space of a year.',
    examples: [{ english: 'The passage uses annual to describe the situation.', malay: 'Berlaku setiap tahun.', chinese: '文章用“annual”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'queen', term: 'queen', normalizedTerm: 'queen', partOfSpeech: ['noun', 'verb'],
    chineseShort: '王后, 女王；立为女王', chineseExplanation: '王后, 女王；立为女王是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The only fertile female in a colony of social insects such as bees and ants and termites; its function is to lay eggs.',
    examples: [{ english: 'The lesson explains the meaning of queen.', malay: 'Raja wanita.', chinese: '本课解释了“queen”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'winter', term: 'winter', normalizedTerm: 'winter', partOfSpeech: ['noun', 'verb'],
    chineseShort: '冬季, 萧条期, 衰退期；冬天的', chineseExplanation: '冬季, 萧条期, 衰退期；冬天的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The coldest season of the year; in the northern hemisphere it extends from the winter solstice to the vernal equinox.',
    examples: [{ english: 'The lesson explains the meaning of winter.', malay: 'Musim paling sejuk.', chinese: '本课解释了“winter”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'latter', term: 'latter', normalizedTerm: 'latter', partOfSpeech: ['adjective'],
    chineseShort: '后者的, 较后的, 近来的', chineseExplanation: '后者的, 较后的, 近来的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The second of two or the second mentioned of two.',
    examples: [{ english: 'The passage uses latter to describe the situation.', malay: 'Yang kedua daripada dua perkara.', chinese: '文章用“latter”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'regional', term: 'regional', normalizedTerm: 'regional', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '地方的, 地域性的；区的, 部位的', chineseExplanation: '地方的, 地域性的；区的, 部位的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Characteristic of a region.',
    examples: [{ english: 'The passage uses regional to describe the situation.', malay: 'Berkaitan dengan sesuatu wilayah.', chinese: '文章用“regional”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'resident', term: 'resident', normalizedTerm: 'resident', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '居民, 常驻程序, 居住者, 留鸟；居留的, 定居的', chineseExplanation: '居民, 常驻程序, 居住者, 留鸟；居留的, 定居的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone who lives at a particular place for a prolonged period or who was born there.',
    examples: [{ english: 'The lesson explains the meaning of resident.', malay: 'Orang yang tinggal di sesuatu tempat.', chinese: '本课解释了“resident”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'merely', term: 'merely', normalizedTerm: 'merely', partOfSpeech: ['adverb'],
    chineseShort: '只', chineseExplanation: '只是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'And nothing more.',
    examples: [{ english: 'The speaker used merely to add detail.', malay: 'Hanya.', chinese: '说话者用“merely”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'content', term: 'content', normalizedTerm: 'content', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '内容, 满足, 意义, 要旨；满足的, 满意的', chineseExplanation: '内容, 满足, 意义, 要旨；满足的, 满意的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Everything that is included in a collection and that is held or included in something.',
    examples: [{ english: 'The lesson explains the meaning of content.', malay: 'Kandungan sesuatu.', chinese: '本课解释了“content”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'justice', term: 'justice', normalizedTerm: 'justice', partOfSpeech: ['noun'],
    chineseShort: '正义, 公平, 公正, 正确, 司法, 审判', chineseExplanation: '正义, 公平, 公正, 正确, 司法, 审判是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of being just or fair.',
    examples: [{ english: 'The lesson explains the meaning of justice.', malay: 'Keadilan.', chinese: '本课解释了“justice”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'observe', term: 'observe', normalizedTerm: 'observe', partOfSpeech: ['verb', 'noun'],
    chineseShort: '觉察到, 遵守, 注意到, 庆祝；注意, 评论', chineseExplanation: '觉察到, 遵守, 注意到, 庆祝；注意, 评论是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Watch attentively.',
    examples: [{ english: 'The example shows how to use the verb observe.', malay: 'Memerhatikan dengan teliti.', chinese: '这个例子展示了如何使用动词“observe”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'belief', term: 'belief', normalizedTerm: 'belief', partOfSpeech: ['noun'],
    chineseShort: '信念, 相信, 信仰', chineseExplanation: '信念, 相信, 信仰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any cognitive content held as true.',
    examples: [{ english: 'The lesson explains the meaning of belief.', malay: 'Kepercayaan bahawa sesuatu itu benar.', chinese: '本课解释了“belief”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tool', term: 'tool', normalizedTerm: 'tool', partOfSpeech: ['noun', 'verb'],
    chineseShort: '工具, 机床, 傀儡；用工具加工', chineseExplanation: '工具, 机床, 傀儡；用工具加工是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An implement used in the practice of a vocation.',
    examples: [{ english: 'The lesson explains the meaning of tool.', malay: 'Alat untuk melakukan kerja.', chinese: '本课解释了“tool”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'vehicle', term: 'vehicle', normalizedTerm: 'vehicle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '交通工具, 车辆, 传播媒介；载体', chineseExplanation: '交通工具, 车辆, 传播媒介；载体是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A conveyance that transports people or objects.',
    examples: [{ english: 'The lesson explains the meaning of vehicle.', malay: 'Kenderaan untuk mengangkut orang atau barang.', chinese: '本课解释了“vehicle”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'quick', term: 'quick', normalizedTerm: 'quick', partOfSpeech: ['adjective', 'adverb'],
    chineseShort: '快的, 迅速的, 敏捷的, 灵敏的, 急速的；快', chineseExplanation: '快的, 迅速的, 敏捷的, 灵敏的, 急速的；快是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any area of the body that is highly sensitive to pain (as the flesh underneath the skin or a fingernail or toenail).',
    examples: [{ english: 'The passage uses quick to describe the situation.', malay: 'Pantas.', chinese: '文章用“quick”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'wine', term: 'wine', normalizedTerm: 'wine', partOfSpeech: ['noun', 'verb'],
    chineseShort: '葡萄酒, 果酒, 暗红色；喝酒', chineseExplanation: '葡萄酒, 果酒, 暗红色；喝酒是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Fermented juice (of grapes especially).',
    examples: [{ english: 'The lesson explains the meaning of wine.', malay: 'Minuman beralkohol daripada anggur.', chinese: '本课解释了“wine”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sample', term: 'sample', normalizedTerm: 'sample', partOfSpeech: ['noun', 'verb'],
    chineseShort: '样品, 范例, 样本；抽样, 尝试', chineseExplanation: '样品, 范例, 样本；抽样, 尝试是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small part of something intended as representative of the whole.',
    examples: [{ english: 'The lesson explains the meaning of sample.', malay: 'Contoh kecil untuk diperiksa.', chinese: '本课解释了“sample”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'possibly', term: 'possibly', normalizedTerm: 'possibly', partOfSpeech: ['adverb'],
    chineseShort: '可能, 也许', chineseExplanation: '可能, 也许是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'By chance.',
    examples: [{ english: 'The speaker used possibly to add detail.', malay: 'Mungkin.', chinese: '说话者用“possibly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'block', term: 'block', normalizedTerm: 'block', partOfSpeech: ['noun', 'verb'],
    chineseShort: '街区, 木块, 石块, 块；阻塞, 封锁, 使成块状', chineseExplanation: '街区, 木块, 石块, 块；阻塞, 封锁, 使成块状是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A solid piece of something (usually having flat rectangular sides).',
    examples: [{ english: 'The lesson explains the meaning of block.', malay: 'Menghalang atau bongkah.', chinese: '本课解释了“block”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'largely', term: 'largely', normalizedTerm: 'largely', partOfSpeech: ['adverb'],
    chineseShort: '大量地, 很多地, 大半地', chineseExplanation: '大量地, 很多地, 大半地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In large part; mainly or chiefly.',
    examples: [{ english: 'The speaker used largely to add detail.', malay: 'Sebahagian besarnya.', chinese: '说话者用“largely”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'folk', term: 'folk', normalizedTerm: 'folk', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '人们, 家人, 亲属, 民族；民间的', chineseExplanation: '人们, 家人, 亲属, 民族；民间的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'People in general (often used in the plural).',
    examples: [{ english: 'The lesson explains the meaning of folk.', malay: 'Orang ramai.', chinese: '本课解释了“folk”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'jump', term: 'jump', normalizedTerm: 'jump', partOfSpeech: ['verb', 'noun'],
    chineseShort: '跳跃, 跳动, 暴涨, 惊跳；跳跃, 跃过, 突升, 使跳跃', chineseExplanation: '跳跃, 跳动, 暴涨, 惊跳；跳跃, 跃过, 突升, 使跳跃是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sudden and decisive increase.',
    examples: [{ english: 'The example shows how to use the verb jump.', malay: 'Melompat.', chinese: '这个例子展示了如何使用动词“jump”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'insist', term: 'insist', normalizedTerm: 'insist', partOfSpeech: ['verb'],
    chineseShort: '坚持, 坚决主张, 强调', chineseExplanation: '坚持, 坚决主张, 强调是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Be emphatic or resolute and refuse to budge.',
    examples: [{ english: 'The example shows how to use the verb insist.', malay: 'Bertegas.', chinese: '这个例子展示了如何使用动词“insist”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'entirely', term: 'entirely', normalizedTerm: 'entirely', partOfSpeech: ['adverb'],
    chineseShort: '完全, 全然, 一概', chineseExplanation: '完全, 全然, 一概是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Without any others being included or involved.',
    examples: [{ english: 'The speaker used entirely to add detail.', malay: 'Sepenuhnya.', chinese: '说话者用“entirely”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'entry', term: 'entry', normalizedTerm: 'entry', partOfSpeech: ['noun'],
    chineseShort: '登录, 条目, 进入, 入口, 报关；登录项, 输入项, 条目', chineseExplanation: '登录, 条目, 进入, 入口, 报关；登录项, 输入项, 条目是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An item inserted in a written record.',
    examples: [{ english: 'The lesson explains the meaning of entry.', malay: 'Kemasukan atau catatan.', chinese: '本课解释了“entry”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'anybody', term: 'anybody', normalizedTerm: 'anybody', partOfSpeech: ['noun'],
    chineseShort: '任何人；重要人物', chineseExplanation: '任何人；重要人物是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any one out of an indefinite number of persons; anyone; any person.',
    examples: [{ english: 'The lesson explains the meaning of anybody.', malay: 'Sesiapa sahaja.', chinese: '本课解释了“anybody”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'religion', term: 'religion', normalizedTerm: 'religion', partOfSpeech: ['noun', 'verb'],
    chineseShort: '宗教, 信仰；宗教, 宗教信仰, 信仰', chineseExplanation: '宗教, 信仰；宗教, 宗教信仰, 信仰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A strong belief in a supernatural power or powers that control human destiny.',
    examples: [{ english: 'The lesson explains the meaning of religion.', malay: 'Sistem kepercayaan dan ibadat.', chinese: '本课解释了“religion”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'relief', term: 'relief', normalizedTerm: 'relief', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '减轻, 解除, 救济, 安慰, 调剂, 浮雕, 换班, 起伏；缓减, 减轻, 浮雕', chineseExplanation: '减轻, 解除, 救济, 安慰, 调剂, 浮雕, 换班, 起伏；缓减, 减轻, 浮雕是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The feeling that comes when something burdensome is removed or reduced.',
    examples: [{ english: 'The lesson explains the meaning of relief.', malay: 'Kelegaan daripada kesusahan.', chinese: '本课解释了“relief”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'commit', term: 'commit', normalizedTerm: 'commit', partOfSpeech: ['verb', 'noun'],
    chineseShort: '委托, 犯罪, 指派...作战, 使承担义务；犯, 做, 把...交托给', chineseExplanation: '委托, 犯罪, 指派...作战, 使承担义务；犯, 做, 把...交托给是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cause to be admitted; of persons to an institution.',
    examples: [{ english: 'The example shows how to use the verb commit.', malay: 'Melakukan atau memberikan komitmen.', chinese: '这个例子展示了如何使用动词“commit”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'female', term: 'female', normalizedTerm: 'female', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '女性, 女人, 雌性动物；女性的, 女子的', chineseExplanation: '女性, 女人, 雌性动物；女性的, 女子的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An animal that produces gametes (ova) that can be fertilized by male gametes (spermatozoa).',
    examples: [{ english: 'The passage uses female to describe the situation.', malay: 'Berjantina perempuan.', chinese: '文章用“female”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'wave', term: 'wave', normalizedTerm: 'wave', partOfSpeech: ['noun', 'verb'],
    chineseShort: '波, 波浪, 波动, 起伏, 高潮, 潮涌, 挥手致意, 突变；波动, 飘动, 挥手示意, 起伏', chineseExplanation: '波, 波浪, 波动, 起伏, 高潮, 潮涌, 挥手致意, 突变；波动, 飘动, 挥手示意, 起伏是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'One of a series of ridges that moves across the surface of a liquid (especially across a large body of water).',
    examples: [{ english: 'The lesson explains the meaning of wave.', malay: 'Ombak atau gerakan tangan.', chinese: '本课解释了“wave”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'blow', term: 'blow', normalizedTerm: 'blow', partOfSpeech: ['noun', 'verb'],
    chineseShort: '吹, 打击, 殴打, 花开；吹, 风吹, 吹响, 开花', chineseExplanation: '吹, 打击, 殴打, 花开；吹, 风吹, 吹响, 开花是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A powerful stroke with the fist or a weapon.',
    examples: [{ english: 'The lesson explains the meaning of blow.', malay: 'Tiupan atau pukulan.', chinese: '本课解释了“blow”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'meal', term: 'meal', normalizedTerm: 'meal', partOfSpeech: ['noun', 'verb'],
    chineseShort: '一餐, 膳食, 粗粉；进餐', chineseExplanation: '一餐, 膳食, 粗粉；进餐是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The food served and eaten at one time.',
    examples: [{ english: 'The lesson explains the meaning of meal.', malay: 'Hidangan makanan.', chinese: '本课解释了“meal”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tour', term: 'tour', normalizedTerm: 'tour', partOfSpeech: ['noun', 'verb'],
    chineseShort: '旅游, 观光旅行, 任期；旅行, 周游, 巡回', chineseExplanation: '旅游, 观光旅行, 任期；旅行, 周游, 巡回是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A journey or route all the way around a particular place or area.',
    examples: [{ english: 'The lesson explains the meaning of tour.', malay: 'Lawatan ke beberapa tempat.', chinese: '本课解释了“tour”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'grade', term: 'grade', normalizedTerm: 'grade', partOfSpeech: ['noun', 'verb'],
    chineseShort: '等级, 年级, 阶段, 成绩, 程度, 坡度, 斜坡；分等, 分级, 评分', chineseExplanation: '等级, 年级, 阶段, 成绩, 程度, 坡度, 斜坡；分等, 分级, 评分是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A relative position or degree of value in a graded group.',
    examples: [{ english: 'The lesson explains the meaning of grade.', malay: 'Gred atau tahap.', chinese: '本课解释了“grade”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'victory', term: 'victory', normalizedTerm: 'victory', partOfSpeech: ['noun', 'verb'],
    chineseShort: '胜利, 战胜, 克服', chineseExplanation: '胜利, 战胜, 克服是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A successful ending of a struggle or contest.',
    examples: [{ english: 'The lesson explains the meaning of victory.', malay: 'Kemenangan.', chinese: '本课解释了“victory”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'unable', term: 'unable', normalizedTerm: 'unable', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '不能的, 不会的；无能力的, 无资格的, 没有办法的', chineseExplanation: '不能的, 不会的；无能力的, 无资格的, 没有办法的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(usually followed by `to\') not having the necessary means or skill or know-how.',
    examples: [{ english: 'The passage uses unable to describe the situation.', malay: 'Tidak mampu.', chinese: '文章用“unable”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'respect', term: 'respect', normalizedTerm: 'respect', partOfSpeech: ['noun', 'verb'],
    chineseShort: '尊敬, 尊重, 问候；尊敬, 注意, 遵守', chineseExplanation: '尊敬, 尊重, 问候；尊敬, 注意, 遵守是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(usually preceded by `in\') a detail or point.',
    examples: [{ english: 'The lesson explains the meaning of respect.', malay: 'Rasa hormat.', chinese: '本课解释了“respect”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'knee', term: 'knee', normalizedTerm: 'knee', partOfSpeech: ['noun', 'verb'],
    chineseShort: '膝, 膝盖；膝行, 用膝盖碰', chineseExplanation: '膝, 膝盖；膝行, 用膝盖碰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Hinge joint in the human leg connecting the tibia and fibula with the femur and protected in front by the patella.',
    examples: [{ english: 'The lesson explains the meaning of knee.', malay: 'Lutut.', chinese: '本课解释了“knee”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'joint', term: 'joint', normalizedTerm: 'joint', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '连接处, 接合, 关节；共同的, 联合的, 连接的, 合办的', chineseExplanation: '连接处, 接合, 关节；共同的, 联合的, 连接的, 合办的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(anatomy) the point of connection between two bones or elements of a skeleton (especially if it allows motion).',
    examples: [{ english: 'The passage uses joint to describe the situation.', malay: 'Sendi atau sambungan.', chinese: '文章用“joint”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'consist', term: 'consist', normalizedTerm: 'consist', partOfSpeech: ['verb', 'noun'],
    chineseShort: '组成, 存在于, 一致', chineseExplanation: '组成, 存在于, 一致是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Have its essential character; be comprised or contained in; be embodied in.',
    examples: [{ english: 'The example shows how to use the verb consist.', malay: 'Terdiri daripada.', chinese: '这个例子展示了如何使用动词“consist”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'plate', term: 'plate', normalizedTerm: 'plate', partOfSpeech: ['noun', 'verb'],
    chineseShort: '碟, 盘子, 盆中物, 金属板, 图版, 金银餐具, 印版, 金属牌；镀金, 电镀, 用金属板固定, 给...装钢板, 为...制印版', chineseExplanation: '碟, 盘子, 盆中物, 金属板, 图版, 金银餐具, 印版, 金属牌；镀金, 电镀, 用金属板固定, 给...装钢板, 为...制印版是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sheet of metal or wood or glass or plastic.',
    examples: [{ english: 'The lesson explains the meaning of plate.', malay: 'Pinggan.', chinese: '本课解释了“plate”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'neck', term: 'neck', normalizedTerm: 'neck', partOfSpeech: ['noun', 'verb'],
    chineseShort: '脖子, 衣领, 颈；拥抱, 拥吻, 收缩', chineseExplanation: '脖子, 衣领, 颈；拥抱, 拥吻, 收缩是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The part of an organism (human or animal) that connects the head to the rest of the body.',
    examples: [{ english: 'The lesson explains the meaning of neck.', malay: 'Leher.', chinese: '本课解释了“neck”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'plastic', term: 'plastic', normalizedTerm: 'plastic', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '塑料, 可塑体, 可塑性物质；塑料的, 塑造的, 有可塑性的, 造型的, 易受影响的, 有创造力的', chineseExplanation: '塑料, 可塑体, 可塑性物质；塑料的, 塑造的, 有可塑性的, 造型的, 易受影响的, 有创造力的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Generic name for certain synthetic or semisynthetic materials that can be molded or extruded into objects or films or filaments or used for making e.g. coatings and adhesives.',
    examples: [{ english: 'The passage uses plastic to describe the situation.', malay: 'Bahan sintetik yang boleh dibentuk.', chinese: '文章用“plastic”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'hate', term: 'hate', normalizedTerm: 'hate', partOfSpeech: ['verb', 'noun'],
    chineseShort: '憎恨, 恨, 厌恶；憎恨, 憎恶', chineseExplanation: '憎恨, 恨, 厌恶；憎恨, 憎恶是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The emotion of intense dislike; a feeling of dislike so strong that it demands action.',
    examples: [{ english: 'The example shows how to use the verb hate.', malay: 'Perasaan sangat tidak suka.', chinese: '这个例子展示了如何使用动词“hate”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'metal', term: 'metal', normalizedTerm: 'metal', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '金属, 金属制品, 合金, 本质, 质料；金属制的', chineseExplanation: '金属, 金属制品, 合金, 本质, 质料；金属制的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cover with metal.',
    examples: [{ english: 'The lesson explains the meaning of metal.', malay: 'Logam.', chinese: '本课解释了“metal”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'mental', term: 'mental', normalizedTerm: 'mental', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '心智的, 精神病的, 心理的, 颏的；精神病患者', chineseExplanation: '心智的, 精神病的, 心理的, 颏的；精神病患者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Involving the mind or an intellectual process.',
    examples: [{ english: 'The passage uses mental to describe the situation.', malay: 'Berkaitan dengan fikiran.', chinese: '文章用“mental”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'lunch', term: 'lunch', normalizedTerm: 'lunch', partOfSpeech: ['noun', 'verb'],
    chineseShort: '午餐', chineseExplanation: '午餐是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A midday meal.',
    examples: [{ english: 'The lesson explains the meaning of lunch.', malay: 'Makan tengah hari.', chinese: '本课解释了“lunch”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'planet', term: 'planet', normalizedTerm: 'planet', partOfSpeech: ['noun'],
    chineseShort: '行星, 命运星辰, 杰出的人, 重大影响的事', chineseExplanation: '行星, 命运星辰, 杰出的人, 重大影响的事是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(astronomy) any of the nine large celestial bodies in the solar system that revolve around the sun and shine by reflected light;.',
    examples: [{ english: 'The lesson explains the meaning of planet.', malay: 'Planet yang mengelilingi bintang.', chinese: '本课解释了“planet”的含义。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'undertake', term: 'undertake', normalizedTerm: 'undertake', partOfSpeech: ['verb', 'noun'],
    chineseShort: '试图, 从事, 保证, 承担, 同意, 接受；承包', chineseExplanation: '试图, 从事, 保证, 承担, 同意, 接受；承包是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Enter upon an activity or enterprise.',
    examples: [{ english: 'The example shows how to use the verb undertake.', malay: 'Bersetuju untuk melakukan.', chinese: '这个例子展示了如何使用动词“undertake”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'totally', term: 'totally', normalizedTerm: 'totally', partOfSpeech: ['adverb'],
    chineseShort: '完全地', chineseExplanation: '完全地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To a complete degree or to the full or entire extent (`whole\' is often used informally for `wholly\').',
    examples: [{ english: 'The speaker used totally to add detail.', malay: 'Sepenuhnya.', chinese: '说话者用“totally”补充细节。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'pleasure', term: 'pleasure', normalizedTerm: 'pleasure', partOfSpeech: ['noun', 'verb'],
    chineseShort: '快乐, 愉快, 令人高兴的事, 娱乐, 希望；高兴', chineseExplanation: '快乐, 愉快, 令人高兴的事, 娱乐, 希望；高兴是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A fundamental feeling that is hard to define but that people desire to experience.',
    examples: [{ english: 'The lesson explains the meaning of pleasure.', malay: 'Rasa gembira atau puas.', chinese: '本课解释了“pleasure”的含义。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'fee', term: 'fee', normalizedTerm: 'fee', partOfSpeech: ['noun', 'verb'],
    chineseShort: '费用, 小费, 封地, 所有权；付费给', chineseExplanation: '费用, 小费, 封地, 所有权；付费给是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A fixed charge for a privilege or for professional services.',
    examples: [{ english: 'The lesson explains the meaning of fee.', malay: 'Bayaran untuk perkhidmatan.', chinese: '本课解释了“fee”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'institute', term: 'institute', normalizedTerm: 'institute', partOfSpeech: ['noun', 'verb'],
    chineseShort: '学会, 学院, 协会；创立, 开始, 制定, 任命', chineseExplanation: '学会, 学院, 协会；创立, 开始, 制定, 任命是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An association organised to promote art or science or education.',
    examples: [{ english: 'The lesson explains the meaning of institute.', malay: 'Institusi atau menubuhkan.', chinese: '本课解释了“institute”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'republic', term: 'republic', normalizedTerm: 'republic', partOfSpeech: ['noun'],
    chineseShort: '共和国, 共和政体, 团体, 界', chineseExplanation: '共和国, 共和政体, 团体, 界是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A form of government whose head of state is not a monarch.',
    examples: [{ english: 'The lesson explains the meaning of republic.', malay: 'Negara yang diketuai wakil terpilih.', chinese: '本课解释了“republic”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'elsewhere', term: 'elsewhere', normalizedTerm: 'elsewhere', partOfSpeech: ['adverb', 'noun'],
    chineseShort: '在别处', chineseExplanation: '在别处是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In or to another place.',
    examples: [{ english: 'The speaker used elsewhere to add detail.', malay: 'Di tempat lain.', chinese: '说话者用“elsewhere”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'novel', term: 'novel', normalizedTerm: 'novel', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '小说, 长篇故事；新奇的, 异常的', chineseExplanation: '小说, 长篇故事；新奇的, 异常的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An extended fictional work in prose; usually in the form of a story.',
    examples: [{ english: 'The lesson explains the meaning of novel.', malay: 'Cerita fiksyen yang panjang.', chinese: '本课解释了“novel”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'jury', term: 'jury', normalizedTerm: 'jury', partOfSpeech: ['noun', 'verb'],
    chineseShort: '陪审团, 评判委员会；应急的', chineseExplanation: '陪审团, 评判委员会；应急的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A body of citizens sworn to give a true verdict according to the evidence presented in a court of law.',
    examples: [{ english: 'The lesson explains the meaning of jury.', malay: 'Sekumpulan orang yang memutuskan kes mahkamah.', chinese: '本课解释了“jury”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'jack', term: 'jack', normalizedTerm: 'jack', partOfSpeech: ['noun', 'verb'],
    chineseShort: '插座, 千斤顶, 男人；抬起, 提醒, 扛举, 增加, 提高, 放弃', chineseExplanation: '插座, 千斤顶, 男人；抬起, 提醒, 扛举, 增加, 提高, 放弃是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small worthless amount.',
    examples: [{ english: 'The lesson explains the meaning of jack.', malay: 'Alat untuk mengangkat benda berat.', chinese: '本课解释了“jack”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'yellow', term: 'yellow', normalizedTerm: 'yellow', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '黄色；黄色的', chineseExplanation: '黄色；黄色的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Yellow colour or pigment; the chromatic colour resembling the hue of sunflowers or ripe lemons.',
    examples: [{ english: 'The passage uses yellow to describe the situation.', malay: 'Warna kuning.', chinese: '文章用“yellow”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'noise', term: 'noise', normalizedTerm: 'noise', partOfSpeech: ['noun', 'verb'],
    chineseShort: '噪音, 杂音, 响声, 喧闹；谣传', chineseExplanation: '噪音, 杂音, 响声, 喧闹；谣传是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Sound of any kind (especially unintelligible or dissonant sound).',
    examples: [{ english: 'The lesson explains the meaning of noise.', malay: 'Bunyi yang tidak diingini.', chinese: '本课解释了“noise”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'display', term: 'display', normalizedTerm: 'display', partOfSpeech: ['noun', 'verb'],
    chineseShort: '显示, 陈列, 炫耀, 显示器；陈列, 显示, 表现, 夸示', chineseExplanation: '显示, 陈列, 炫耀, 显示器；陈列, 显示, 表现, 夸示是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something intended to communicate a particular impression.',
    examples: [{ english: 'The lesson explains the meaning of display.', malay: 'Memamerkan atau paparan.', chinese: '本课解释了“display”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'widely', term: 'widely', normalizedTerm: 'widely', partOfSpeech: ['adverb'],
    chineseShort: '广泛地', chineseExplanation: '广泛地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To a great degree.',
    examples: [{ english: 'The speaker used widely to add detail.', malay: 'Secara meluas.', chinese: '说话者用“widely”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'anymore', term: 'anymore', normalizedTerm: 'anymore', partOfSpeech: ['adverb'],
    chineseShort: '再也不, 不再', chineseExplanation: '再也不, 不再是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'At the present or from now on; usually used with a negative.',
    examples: [{ english: 'The speaker used anymore to add detail.', malay: 'Lagi.', chinese: '说话者用“anymore”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'saucer', term: 'saucer', normalizedTerm: 'saucer', partOfSpeech: ['noun'],
    chineseShort: '茶碟；杯托', chineseExplanation: '放在杯子下面，用来接住滴下液体的小碟子。', englishDefinition: 'A small shallow dish placed under a cup.',
    examples: [{ english: 'She placed the cup on its saucer.', malay: 'Dia meletakkan cawan itu di atas piringnya.', chinese: '她把杯子放在茶碟上。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'gallery', term: 'gallery', normalizedTerm: 'gallery', partOfSpeech: ['noun', 'verb'],
    chineseShort: '走廊, 最高楼座, 画廊, 收集, 图库；图库', chineseExplanation: '走廊, 最高楼座, 画廊, 收集, 图库；图库是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Spectators at a golf or tennis match.',
    examples: [{ english: 'The lesson explains the meaning of gallery.', malay: 'Ruang mempamerkan karya seni.', chinese: '本课解释了“gallery”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'beauty', term: 'beauty', normalizedTerm: 'beauty', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '美, 美人', chineseExplanation: '美, 美人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The qualities that give pleasure to the senses.',
    examples: [{ english: 'The lesson explains the meaning of beauty.', malay: 'Sifat yang indah.', chinese: '本课解释了“beauty”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'emergency', term: 'emergency', normalizedTerm: 'emergency', partOfSpeech: ['noun'],
    chineseShort: '紧急状况, 紧急事件, 紧急需要；紧急情况', chineseExplanation: '紧急状况, 紧急事件, 紧急需要；紧急情况是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sudden unforeseen crisis (usually involving danger) that requires immediate action.',
    examples: [{ english: 'The lesson explains the meaning of emergency.', malay: 'Keadaan cemas.', chinese: '本课解释了“emergency”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'lane', term: 'lane', normalizedTerm: 'lane', partOfSpeech: ['noun'],
    chineseShort: '小路, 巷, 弄, 单行道', chineseExplanation: '小路, 巷, 弄, 单行道是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A narrow way or road.',
    examples: [{ english: 'The lesson explains the meaning of lane.', malay: 'Lorong sempit.', chinese: '本课解释了“lane”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'zone', term: 'zone', normalizedTerm: 'zone', partOfSpeech: ['noun', 'verb'],
    chineseShort: '地带, 带, 地区；环绕, 使分成地带', chineseExplanation: '地带, 带, 地区；环绕, 使分成地带是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A locally circumscribed place characterised by some distinctive features.',
    examples: [{ english: 'The lesson explains the meaning of zone.', malay: 'Kawasan tertentu.', chinese: '本课解释了“zone”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'bloody', term: 'bloody', normalizedTerm: 'bloody', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '血腥的, 嗜杀的, 有血的', chineseExplanation: '血腥的, 嗜杀的, 有血的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cover with blood.',
    examples: [{ english: 'The passage uses bloody to describe the situation.', malay: 'Berdarah.', chinese: '文章用“bloody”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'incident', term: 'incident', normalizedTerm: 'incident', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '事件, 事变, 小事；附带的, 易于发生的, 外来的, 入射的', chineseExplanation: '事件, 事变, 小事；附带的, 易于发生的, 外来的, 入射的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A single distinct event.',
    examples: [{ english: 'The lesson explains the meaning of incident.', malay: 'Kejadian tertentu.', chinese: '本课解释了“incident”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'index', term: 'index', normalizedTerm: 'index', partOfSpeech: ['noun', 'verb'],
    chineseShort: '索引, 指针, 指数, 指标；编入索引中, 指出', chineseExplanation: '索引, 指针, 指数, 指标；编入索引中, 指出是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A numerical scale used to compare variables with one another or with some reference number.',
    examples: [{ english: 'The lesson explains the meaning of index.', malay: 'Senarai petunjuk atau ukuran.', chinese: '本课解释了“index”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'jew', term: 'jew', normalizedTerm: 'jew', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '犹太人, 守财奴, 犹太教信徒；欺骗, 杀价', chineseExplanation: '犹太人, 守财奴, 犹太教信徒；欺骗, 杀价是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person belonging to the worldwide group claiming descent from Jacob (or converted to it) and connected by cultural or religious ties.',
    examples: [{ english: 'The lesson explains the meaning of jew.', malay: 'Penganut agama Yahudi.', chinese: '本课解释了“jew”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'valley', term: 'valley', normalizedTerm: 'valley', partOfSpeech: ['noun', 'verb'],
    chineseShort: '山谷, 溪谷, 流域, 凹地；谷', chineseExplanation: '山谷, 溪谷, 流域, 凹地；谷是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A long depression in the surface of the land that usually contains a river.',
    examples: [{ english: 'The lesson explains the meaning of valley.', malay: 'Lembah di antara bukit.', chinese: '本课解释了“valley”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'blame', term: 'blame', normalizedTerm: 'blame', partOfSpeech: ['verb', 'noun'],
    chineseShort: '过失, 责备；责备, 归咎于', chineseExplanation: '过失, 责备；责备, 归咎于是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A reproach for some lapse or misdeed.',
    examples: [{ english: 'The example shows how to use the verb blame.', malay: 'Menyalahkan.', chinese: '这个例子展示了如何使用动词“blame”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'vital', term: 'vital', normalizedTerm: 'vital', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '生命的, 重要的, 充满活力的, 生死攸关的, 致命的；生命的, 生活的, 生活上必需的, 紧要的', chineseExplanation: '生命的, 重要的, 充满活力的, 生死攸关的, 致命的；生命的, 生活的, 生活上必需的, 紧要的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Performing an essential function in the living body.',
    examples: [{ english: 'The passage uses vital to describe the situation.', malay: 'Amat penting.', chinese: '文章用“vital”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'lake', term: 'lake', normalizedTerm: 'lake', partOfSpeech: ['noun', 'verb'],
    chineseShort: '湖, 池, 色淀；血球溶解', chineseExplanation: '湖, 池, 色淀；血球溶解是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A body of (usually fresh) water surrounded by land.',
    examples: [{ english: 'The lesson explains the meaning of lake.', malay: 'Tasik.', chinese: '本课解释了“lake”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tone', term: 'tone', normalizedTerm: 'tone', partOfSpeech: ['noun', 'verb'],
    chineseShort: '音调, 音质, 语调, 语气, 色调, 气氛, 状况, 思想状态；给...定色调, 增强, 使...的声调和谐, 定音调', chineseExplanation: '音调, 音质, 语调, 语气, 色调, 气氛, 状况, 思想状态；给...定色调, 增强, 使...的声调和谐, 定音调是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of a person\'s voice.',
    examples: [{ english: 'The lesson explains the meaning of tone.', malay: 'Nada suara atau bunyi.', chinese: '本课解释了“tone”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'landscape', term: 'landscape', normalizedTerm: 'landscape', partOfSpeech: ['noun', 'verb'],
    chineseShort: '风景, 山水, 风景画；从事景观美化', chineseExplanation: '风景, 山水, 风景画；从事景观美化是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An expanse of scenery that can be seen in a single view.',
    examples: [{ english: 'The lesson explains the meaning of landscape.', malay: 'Pemandangan daratan.', chinese: '本课解释了“landscape”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'forth', term: 'forth', normalizedTerm: 'forth', partOfSpeech: ['adverb', 'noun'],
    chineseShort: '往前, 以后, 向外', chineseExplanation: '往前, 以后, 向外是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A river in southern Scotland that flows eastward to the Firth of Forth.',
    examples: [{ english: 'The speaker used forth to add detail.', malay: 'Ke hadapan.', chinese: '说话者用“forth”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'elderly', term: 'elderly', normalizedTerm: 'elderly', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '过了中年的, 稍老的', chineseExplanation: '过了中年的, 稍老的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'People who are old collectively s advanced in years; (`aged\' is pronounced as two syllables).',
    examples: [{ english: 'The passage uses elderly to describe the situation.', malay: 'Sudah lanjut usia.', chinese: '文章用“elderly”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'meanwhile', term: 'meanwhile', normalizedTerm: 'meanwhile', partOfSpeech: ['adverb', 'noun'],
    chineseShort: '其时, 其间；同时, 于此时', chineseExplanation: '其时, 其间；同时, 于此时是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'At the same time but in another place.',
    examples: [{ english: 'The speaker used meanwhile to add detail.', malay: 'Sementara itu.', chinese: '说话者用“meanwhile”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'grand', term: 'grand', normalizedTerm: 'grand', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '庄重的, 壮观的, 显赫的, 重大的, 最高的, 雄伟的, 宏大的, 豪华的, 傲慢的；重大的, 主要的, 伟大的', chineseExplanation: '庄重的, 壮观的, 显赫的, 重大的, 最高的, 雄伟的, 宏大的, 豪华的, 傲慢的；重大的, 主要的, 伟大的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Large and impressive in physical size or extent.',
    examples: [{ english: 'The lesson explains the meaning of grand.', malay: 'Besar dan mengagumkan.', chinese: '本课解释了“grand”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'topic', term: 'topic', normalizedTerm: 'topic', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '主题, 论题, 话题', chineseExplanation: '主题, 论题, 话题是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Some situation or event that is thought about.',
    examples: [{ english: 'The lesson explains the meaning of topic.', malay: 'Tajuk perbincangan.', chinese: '本课解释了“topic”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'beneath', term: 'beneath', normalizedTerm: 'beneath', partOfSpeech: ['adverb'],
    chineseShort: '在...下方；在...下方', chineseExplanation: '在...下方；在...下方是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In or to a place that is lower.',
    examples: [{ english: 'The speaker used beneath to add detail.', malay: 'Di bawah.', chinese: '说话者用“beneath”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'origin', term: 'origin', normalizedTerm: 'origin', partOfSpeech: ['noun'],
    chineseShort: '起源, 起因, 出身, 开端；原点', chineseExplanation: '起源, 起因, 出身, 开端；原点是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Properties attributable to your ancestry.',
    examples: [{ english: 'The lesson explains the meaning of origin.', malay: 'Asal usul.', chinese: '本课解释了“origin”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'vast', term: 'vast', normalizedTerm: 'vast', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '巨大的, 广大的, 非常的, 大量的', chineseExplanation: '巨大的, 广大的, 非常的, 大量的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Unusually great in size or amount or degree or especially extent or scope.',
    examples: [{ english: 'The passage uses vast to describe the situation.', malay: 'Sangat luas.', chinese: '文章用“vast”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'gray', term: 'grey', normalizedTerm: 'grey', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '灰色, 暗淡；灰色的, 灰白的, 面色苍白的, 年老的, 老练的, 阴沉的', chineseExplanation: '灰色, 暗淡；灰色的, 灰白的, 面色苍白的, 年老的, 老练的, 阴沉的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A neutral achromatic colour midway between white and black.',
    examples: [{ english: 'The passage uses grey to describe the situation.', malay: 'Warna kelabu.', chinese: '文章用“grey”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'diet', term: 'diet', normalizedTerm: 'diet', partOfSpeech: ['noun', 'verb'],
    chineseShort: '日常饮食, 议会；照规定饮食', chineseExplanation: '日常饮食, 议会；照规定饮食是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A prescribed selection of foods.',
    examples: [{ english: 'The lesson explains the meaning of diet.', malay: 'Jenis makanan yang biasa dimakan.', chinese: '本课解释了“diet”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'harry', term: 'harry', normalizedTerm: 'harry', partOfSpeech: ['noun', 'verb'],
    chineseShort: '掠夺, 使苦恼, 强使前行, 折磨, 骚扰', chineseExplanation: '掠夺, 使苦恼, 强使前行, 折磨, 骚扰是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Make a pillaging or destructive raid on (a place), as in wartimes.',
    examples: [{ english: 'The lesson explains the meaning of harry.', malay: 'Mengganggu berulang kali.', chinese: '本课解释了“harry”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'plenty', term: 'plenty', normalizedTerm: 'plenty', partOfSpeech: ['noun', 'adverb'],
    chineseShort: '充分, 很多, 丰富；很多的, 足够的, 丰富的', chineseExplanation: '充分, 很多, 丰富；很多的, 足够的, 丰富的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A full supply.',
    examples: [{ english: 'The lesson explains the meaning of plenty.', malay: 'Jumlah yang banyak.', chinese: '本课解释了“plenty”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'complaint', term: 'complaint', normalizedTerm: 'complaint', partOfSpeech: ['noun'],
    chineseShort: '诉苦, 抱怨, 控诉；陈诉', chineseExplanation: '诉苦, 抱怨, 控诉；陈诉是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(formerly) a loud cry (or repeated cries) of pain or rage or sorrow.',
    examples: [{ english: 'The lesson explains the meaning of complaint.', malay: 'Aduan.', chinese: '本课解释了“complaint”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'solid', term: 'solid', normalizedTerm: 'solid', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '固体；坚硬的, 稳固的, 固体的, 实心的, 纯质的, 立体的, 立方的', chineseExplanation: '固体；坚硬的, 稳固的, 固体的, 实心的, 纯质的, 立体的, 立方的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Matter that is solid at room temperature and pressure.',
    examples: [{ english: 'The passage uses solid to describe the situation.', malay: 'Pepejal atau kukuh.', chinese: '文章用“solid”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'inner', term: 'inner', normalizedTerm: 'inner', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '内部的, 内心的；内部', chineseExplanation: '内部的, 内心的；内部是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Located inward.',
    examples: [{ english: 'The passage uses inner to describe the situation.', malay: 'Bahagian dalam.', chinese: '文章用“inner”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'virtually', term: 'virtually', normalizedTerm: 'virtually', partOfSpeech: ['adverb'],
    chineseShort: '事实上', chineseExplanation: '事实上是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In essence or effect but not in fact.',
    examples: [{ english: 'The speaker used virtually to add detail.', malay: 'Hampir sepenuhnya atau secara maya.', chinese: '说话者用“virtually”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'unusual', term: 'unusual', normalizedTerm: 'unusual', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不寻常的, 罕见的, 与众不同的', chineseExplanation: '不寻常的, 罕见的, 与众不同的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Not usual or common or ordinary.',
    examples: [{ english: 'The passage uses unusual to describe the situation.', malay: 'Luar biasa.', chinese: '文章用“unusual”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'quote', term: 'quote', normalizedTerm: 'quote', partOfSpeech: ['verb', 'noun'],
    chineseShort: '引用；引述, 举证, 报', chineseExplanation: '引用；引述, 举证, 报是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Repeat a passage from.',
    examples: [{ english: 'The example shows how to use the verb quote.', malay: 'Memetik kata-kata.', chinese: '这个例子展示了如何使用动词“quote”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'construct', term: 'construct', normalizedTerm: 'construct', partOfSpeech: ['verb', 'noun'],
    chineseShort: '构造, 建造, 对...进行构思, 作图；构成物', chineseExplanation: '构造, 建造, 对...进行构思, 作图；构成物是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Make by combining materials and parts.',
    examples: [{ english: 'The example shows how to use the verb construct.', malay: 'Membina.', chinese: '这个例子展示了如何使用动词“construct”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'dispute', term: 'dispute', normalizedTerm: 'dispute', partOfSpeech: ['noun', 'verb'],
    chineseShort: '争论；争论', chineseExplanation: '争论；争论是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A disagreement or argument about something important.',
    examples: [{ english: 'The lesson explains the meaning of dispute.', malay: 'Pertikaian.', chinese: '本课解释了“dispute”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'kingdom', term: 'kingdom', normalizedTerm: 'kingdom', partOfSpeech: ['noun'],
    chineseShort: '王国, 领域；界', chineseExplanation: '王国, 领域；界是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A domain in which something is dominant.',
    examples: [{ english: 'The lesson explains the meaning of kingdom.', malay: 'Kerajaan yang diperintah raja.', chinese: '本课解释了“kingdom”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'forever', term: 'forever', normalizedTerm: 'forever', partOfSpeech: ['adverb', 'adjective'],
    chineseShort: '永远', chineseExplanation: '永远是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'For a very long or seemingly endless time.',
    examples: [{ english: 'The speaker used forever to add detail.', malay: 'Selama-lamanya.', chinese: '说话者用“forever”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'unknown', term: 'unknown', normalizedTerm: 'unknown', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不知道的, 未知的, 陌生的；未知物, 未知数', chineseExplanation: '不知道的, 未知的, 陌生的；未知物, 未知数是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An unknown and unexplored region.',
    examples: [{ english: 'The passage uses unknown to describe the situation.', malay: 'Tidak diketahui.', chinese: '文章用“unknown”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'lab', term: 'lab', normalizedTerm: 'lab', partOfSpeech: ['noun'],
    chineseShort: '实验室, 研究室；凝乳酶', chineseExplanation: '实验室, 研究室；凝乳酶是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A workplace for the conduct of scientific research.',
    examples: [{ english: 'The lesson explains the meaning of lab.', malay: 'Makmal.', chinese: '本课解释了“lab”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'graduate', term: 'graduate', normalizedTerm: 'graduate', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '毕业生, 量杯；已得学位的, 研究生的, 毕业的', chineseExplanation: '毕业生, 量杯；已得学位的, 研究生的, 毕业的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A measuring instrument for measuring fluid volume; a glass container (cup or cylinder or flask) whose sides are marked with or divided into amounts.',
    examples: [{ english: 'The lesson explains the meaning of graduate.', malay: 'Orang yang menamatkan pengajian.', chinese: '本课解释了“graduate”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'universe', term: 'universe', normalizedTerm: 'universe', partOfSpeech: ['noun'],
    chineseShort: '宇宙, 星系, 范围', chineseExplanation: '宇宙, 星系, 范围是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Everything that exists anywhere.',
    examples: [{ english: 'The lesson explains the meaning of universe.', malay: 'Seluruh alam semesta.', chinese: '本课解释了“universe”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tower', term: 'tower', normalizedTerm: 'tower', partOfSpeech: ['noun', 'verb'],
    chineseShort: '塔, 高楼, 堡垒；高耸, 翱翔', chineseExplanation: '塔, 高楼, 堡垒；高耸, 翱翔是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A structure taller than its diameter; can stand alone or be attached to a larger building.',
    examples: [{ english: 'The lesson explains the meaning of tower.', malay: 'Menara tinggi.', chinese: '本课解释了“tower”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'visual', term: 'visual', normalizedTerm: 'visual', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '视觉的；视觉的, 视力的, 视觉性记忆优势者', chineseExplanation: '视觉的；视觉的, 视力的, 视觉性记忆优势者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Relating to or using sight s visible; give me the ocular proof"- Shakespeare.',
    examples: [{ english: 'The passage uses visual to describe the situation.', malay: 'Berkaitan dengan penglihatan.', chinese: '文章用“visual”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'inch', term: 'inch', normalizedTerm: 'inch', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '英寸, 身高, 小岛；慢慢前进, 慢慢移动', chineseExplanation: '英寸, 身高, 小岛；慢慢前进, 慢慢移动是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A unit of length equal to one twelfth of a foot.',
    examples: [{ english: 'The lesson explains the meaning of inch.', malay: 'Unit panjang bersamaan 2.54 sentimeter.', chinese: '本课解释了“inch”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'port', term: 'port', normalizedTerm: 'port', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '港口, 埠, 舱门, 避风港, 左舷, 炮眼, 姿势, 意义；左转舵, 持', chineseExplanation: '港口, 埠, 舱门, 避风港, 左舷, 炮眼, 姿势, 意义；左转舵, 持是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A place (seaport or airport) where people and merchandise can enter or leave a country.',
    examples: [{ english: 'The lesson explains the meaning of port.', malay: 'Pelabuhan.', chinese: '本课解释了“port”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'command', term: 'command', normalizedTerm: 'command', partOfSpeech: ['noun', 'verb'],
    chineseShort: '命令, 指挥, 控制, 部队, 司令部；命令, 指挥, 控制', chineseExplanation: '命令, 指挥, 控制, 部队, 司令部；命令, 指挥, 控制是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An authoritative direction or instruction to do something.',
    examples: [{ english: 'The lesson explains the meaning of command.', malay: 'Arahan berkuasa.', chinese: '本课解释了“command”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'layer', term: 'layer', normalizedTerm: 'layer', partOfSpeech: ['noun', 'verb'],
    chineseShort: '层, 产卵鸡, 放置者；分层堆积, 压植', chineseExplanation: '层, 产卵鸡, 放置者；分层堆积, 压植是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Single thickness of usually some homogeneous substance.',
    examples: [{ english: 'The lesson explains the meaning of layer.', malay: 'Lapisan.', chinese: '本课解释了“layer”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'net', term: 'net', normalizedTerm: 'net', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '网, 网状物, 罗网, 净利, 净价；净的, 最终的', chineseExplanation: '网, 网状物, 罗网, 净利, 净价；净的, 最终的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A trap made of netting to catch fish or birds or insects.',
    examples: [{ english: 'The passage uses net to describe the situation.', malay: 'Jaring.', chinese: '文章用“net”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sand', term: 'sand', normalizedTerm: 'sand', partOfSpeech: ['noun', 'verb'],
    chineseShort: '沙, 沙子, 沙滩, 光阴, 生涯；撒沙, 以沙掩盖', chineseExplanation: '沙, 沙子, 沙滩, 光阴, 生涯；撒沙, 以沙掩盖是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A loose material consisting of grains of rock or coral.',
    examples: [{ english: 'The lesson explains the meaning of sand.', malay: 'Pasir.', chinese: '本课解释了“sand”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'restore', term: 'restore', normalizedTerm: 'restore', partOfSpeech: ['verb', 'noun'],
    chineseShort: '回复, 恢复, 归还, 修补, 修复；还原', chineseExplanation: '回复, 恢复, 归还, 修补, 修复；还原是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Return to its original or usable and functioning condition.',
    examples: [{ english: 'The example shows how to use the verb restore.', malay: 'Memulihkan.', chinese: '这个例子展示了如何使用动词“restore”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'opposite', term: 'opposite', normalizedTerm: 'opposite', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '相对的, 相反的, 对面的；对面', chineseExplanation: '相对的, 相反的, 对面的；对面是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Being directly across from each other; facing.',
    examples: [{ english: 'The passage uses opposite to describe the situation.', malay: 'Bertentangan.', chinese: '文章用“opposite”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'pot', term: 'pot', normalizedTerm: 'pot', partOfSpeech: ['noun', 'verb'],
    chineseShort: '盆, 罐, 壶, 坩埚, 奖杯；装入盆中, 在锅中煮, 随手射击', chineseExplanation: '盆, 罐, 壶, 坩埚, 奖杯；装入盆中, 在锅中煮, 随手射击是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Metal or earthenware cooking vessel that is usually round and deep; often has a handle and lid.',
    examples: [{ english: 'The lesson explains the meaning of pot.', malay: 'Bekas untuk memasak atau menanam.', chinese: '本课解释了“pot”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'regularly', term: 'regularly', normalizedTerm: 'regularly', partOfSpeech: ['adverb'],
    chineseShort: '有规则地, 一丝不苟地, 正式地', chineseExplanation: '有规则地, 一丝不苟地, 正式地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In a regular manner.',
    examples: [{ english: 'The speaker used regularly to add detail.', malay: 'Secara tetap.', chinese: '说话者用“regularly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'knife', term: 'knife', normalizedTerm: 'knife', partOfSpeech: ['noun', 'verb'],
    chineseShort: '小刀, 匕首；切割, 伤害, 切, 戳', chineseExplanation: '小刀, 匕首；切割, 伤害, 切, 戳是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Edge tool used as a cutting instrument; has a pointed blade with a sharp edge and a handle.',
    examples: [{ english: 'The lesson explains the meaning of knife.', malay: 'Pisau.', chinese: '本课解释了“knife”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'joke', term: 'joke', normalizedTerm: 'joke', partOfSpeech: ['noun', 'verb'],
    chineseShort: '笑话, 玩笑, 笑柄；开玩笑, 取笑, 作弄', chineseExplanation: '笑话, 玩笑, 笑柄；开玩笑, 取笑, 作弄是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A humorous anecdote or remark intended to provoke laughter.',
    examples: [{ english: 'The lesson explains the meaning of joke.', malay: 'Jenaka.', chinese: '本课解释了“joke”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'empire', term: 'empire', normalizedTerm: 'empire', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '帝国, 帝权', chineseExplanation: '帝国, 帝权是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The domain ruled by an emperor or empress; the region over which imperial dominion is exercised.',
    examples: [{ english: 'The lesson explains the meaning of empire.', malay: 'Wilayah luas di bawah satu pemerintah.', chinese: '本课解释了“empire”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'recovery', term: 'recovery', normalizedTerm: 'recovery', partOfSpeech: ['noun'],
    chineseShort: '恢复, 复原, 痊愈, 重获；恢复', chineseExplanation: '恢复, 复原, 痊愈, 重获；恢复是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Return to an original state.',
    examples: [{ english: 'The lesson explains the meaning of recovery.', malay: 'Proses pulih.', chinese: '本课解释了“recovery”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'jacket', term: 'jacket', normalizedTerm: 'jacket', partOfSpeech: ['noun', 'verb'],
    chineseShort: '夹克, 外套, 护套；给...穿夹克, 给...装护套', chineseExplanation: '夹克, 外套, 护套；给...穿夹克, 给...装护套是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A short coat.',
    examples: [{ english: 'The lesson explains the meaning of jacket.', malay: 'Jaket.', chinese: '本课解释了“jacket”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'keen', term: 'keen', normalizedTerm: 'keen', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '锋利的, 敏锐的, 强烈的, 敏捷的, 热心的, 渴望的；挽歌, 痛哭', chineseExplanation: '锋利的, 敏锐的, 强烈的, 敏捷的, 热心的, 渴望的；挽歌, 痛哭是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A funeral lament sung with loud wailing.',
    examples: [{ english: 'The passage uses keen to describe the situation.', malay: 'Sangat berminat atau tajam.', chinese: '文章用“keen”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'intense', term: 'intense', normalizedTerm: 'intense', partOfSpeech: ['adjective'],
    chineseShort: '非常的, 强烈的, 紧张的, 热情的；强的', chineseExplanation: '非常的, 强烈的, 紧张的, 热情的；强的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Possessing or displaying a distinctive feature to a heightened degree.',
    examples: [{ english: 'The passage uses intense to describe the situation.', malay: 'Sangat kuat.', chinese: '文章用“intense”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'eleven', term: 'eleven', normalizedTerm: 'eleven', partOfSpeech: ['noun'],
    chineseShort: '十一, 十一个', chineseExplanation: '十一, 十一个是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The cardinal number that is the sum of ten and one.',
    examples: [{ english: 'The lesson explains the meaning of eleven.', malay: 'Nombor sebelas.', chinese: '本课解释了“eleven”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'uncle', term: 'uncle', normalizedTerm: 'uncle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '叔父, 伯父, 姨丈', chineseExplanation: '叔父, 伯父, 姨丈是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The brother of your father or mother; the husband of your aunt.',
    examples: [{ english: 'The lesson explains the meaning of uncle.', malay: 'Bapa saudara.', chinese: '本课解释了“uncle”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'disaster', term: 'disaster', normalizedTerm: 'disaster', partOfSpeech: ['noun'],
    chineseShort: '灾祸, 不幸, 彻底失败', chineseExplanation: '灾祸, 不幸, 彻底失败是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An act that has disastrous consequences.',
    examples: [{ english: 'The lesson explains the meaning of disaster.', malay: 'Bencana.', chinese: '本课解释了“disaster”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'angle', term: 'angle', normalizedTerm: 'angle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '角, 角度, 角落；钓鱼, 谋取, 博取, 斜向移动, 转变角度', chineseExplanation: '角, 角度, 角落；钓鱼, 谋取, 博取, 斜向移动, 转变角度是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The space between two lines or planes that intersect; the inclination of one line to another; measured in degrees or radians.',
    examples: [{ english: 'The lesson explains the meaning of angle.', malay: 'Sudut.', chinese: '本课解释了“angle”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'commander', term: 'commander', normalizedTerm: 'commander', partOfSpeech: ['noun'],
    chineseShort: '司令官, 指挥官', chineseExplanation: '司令官, 指挥官是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Someone in an official position of authority who can command or control others.',
    examples: [{ english: 'The lesson explains the meaning of commander.', malay: 'Pegawai yang mengetuai pasukan.', chinese: '本课解释了“commander”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'digital', term: 'digital', normalizedTerm: 'digital', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '数字显示的, 数字的；数字仪表, 数字式电子表', chineseExplanation: '数字显示的, 数字的；数字仪表, 数字式电子表是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Displaying numbers rather than scale positions.',
    examples: [{ english: 'The passage uses digital to describe the situation.', malay: 'Berkaitan dengan teknologi komputer.', chinese: '文章用“digital”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'disorder', term: 'disorder', normalizedTerm: 'disorder', partOfSpeech: ['noun', 'verb'],
    chineseShort: '杂乱, 混乱；扰乱, 使失调', chineseExplanation: '杂乱, 混乱；扰乱, 使失调是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A physical condition in which there is a disturbance of normal functioning.',
    examples: [{ english: 'The lesson explains the meaning of disorder.', malay: 'Keadaan tidak teratur atau penyakit.', chinese: '本课解释了“disorder”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'wire', term: 'wire', normalizedTerm: 'wire', partOfSpeech: ['noun', 'verb'],
    chineseShort: '电线, 电报, 电信, 铁丝网, 金属丝；用金属丝捆扎, 拍电报', chineseExplanation: '电线, 电报, 电信, 铁丝网, 金属丝；用金属丝捆扎, 拍电报是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Ligament made of metal and used to fasten things or make cages or fences etc.',
    examples: [{ english: 'The lesson explains the meaning of wire.', malay: 'Dawai.', chinese: '本课解释了“wire”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'luck', term: 'luck', normalizedTerm: 'luck', partOfSpeech: ['noun', 'verb'],
    chineseShort: '运气, 幸运, 好运, 侥幸；靠好运成功', chineseExplanation: '运气, 幸运, 好运, 侥幸；靠好运成功是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An unknown and unpredictable phenomenon that causes an event to result one way rather than another.',
    examples: [{ english: 'The lesson explains the meaning of luck.', malay: 'Nasib.', chinese: '本课解释了“luck”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'rent', term: 'rent', normalizedTerm: 'rent', partOfSpeech: ['noun', 'verb'],
    chineseShort: '租金, 房租, 出租物, 裂缝, 破裂处, 分裂；租用, 租出', chineseExplanation: '租金, 房租, 出租物, 裂缝, 破裂处, 分裂；租用, 租出是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A payment or series of payments made by the lessee to an owner for use of some property, facility, equipment, or service.',
    examples: [{ english: 'The lesson explains the meaning of rent.', malay: 'Bayaran untuk menggunakan harta.', chinese: '本课解释了“rent”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'spoon', term: 'spoon', normalizedTerm: 'spoon', partOfSpeech: ['noun'],
    chineseShort: '勺子；汤匙', chineseExplanation: '一种有浅碗形前端和长柄的餐具，用来舀取或食用食物。', englishDefinition: 'A utensil with a shallow bowl and a handle, used for eating or serving food.',
    examples: [{ english: 'She ate the soup with a spoon.', malay: 'Dia makan sup dengan sudu.', chinese: '她用勺子喝汤。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'resist', term: 'resist', normalizedTerm: 'resist', partOfSpeech: ['verb', 'noun'],
    chineseShort: '抵抗, 耐得住, 抵制, 反抗；防染材料', chineseExplanation: '抵抗, 耐得住, 抵制, 反抗；防染材料是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Stand up or offer resistance to somebody or something.',
    examples: [{ english: 'The example shows how to use the verb resist.', malay: 'Menentang.', chinese: '这个例子展示了如何使用动词“resist”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'fellow', term: 'fellow', normalizedTerm: 'fellow', partOfSpeech: ['noun', 'verb'],
    chineseShort: '男人, 朋友, 同事；同伴的, 同事的, 同道的', chineseExplanation: '男人, 朋友, 同事；同伴的, 同事的, 同道的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A member of a learned society.',
    examples: [{ english: 'The lesson explains the meaning of fellow.', malay: 'Rakan atau orang lelaki.', chinese: '本课解释了“fellow”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'register', term: 'register', normalizedTerm: 'register', partOfSpeech: ['noun', 'verb'],
    chineseShort: '寄存器, 记录, 登记簿, 注册；记录, 注册, 提示, 表达, 把...挂号', chineseExplanation: '寄存器, 记录, 登记簿, 注册；记录, 注册, 提示, 表达, 把...挂号是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An official written record of names or events or transactions.',
    examples: [{ english: 'The lesson explains the meaning of register.', malay: 'Mendaftar atau daftar.', chinese: '本课解释了“register”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'belt', term: 'belt', normalizedTerm: 'belt', partOfSpeech: ['noun', 'verb'],
    chineseShort: '带子, 地带；带, 腰带, 束带, 地带, 区', chineseExplanation: '带子, 地带；带, 腰带, 束带, 地带, 区是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Endless loop of flexible material between two rotating shafts or pulleys.',
    examples: [{ english: 'The lesson explains the meaning of belt.', malay: 'Tali pinggang.', chinese: '本课解释了“belt”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'mere', term: 'mere', normalizedTerm: 'mere', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '小湖, 池塘；仅仅的, 只不过的', chineseExplanation: '小湖, 池塘；仅仅的, 只不过的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A small pond of standing water.',
    examples: [{ english: 'The passage uses mere to describe the situation.', malay: 'Semata-mata.', chinese: '文章用“mere”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'salary', term: 'salary', normalizedTerm: 'salary', partOfSpeech: ['noun', 'verb'],
    chineseShort: '薪水；给...加薪', chineseExplanation: '薪水；给...加薪是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that remunerates.',
    examples: [{ english: 'The lesson explains the meaning of salary.', malay: 'Gaji tetap.', chinese: '本课解释了“salary”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'observer', term: 'observer', normalizedTerm: 'observer', partOfSpeech: ['noun'],
    chineseShort: '观察者, 遵守者, 观察员；观察者, 观察员, 监场员', chineseExplanation: '观察者, 遵守者, 观察员；观察者, 观察员, 监场员是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An expert who observes and comments on something.',
    examples: [{ english: 'The lesson explains the meaning of observer.', malay: 'Orang yang memerhatikan.', chinese: '本课解释了“observer”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'pillow', term: 'pillow', normalizedTerm: 'pillow', partOfSpeech: ['noun'],
    chineseShort: '枕头', chineseExplanation: '睡觉时用来支撑头部的柔软垫子。', englishDefinition: 'A soft cushion used to support your head while sleeping.',
    examples: [{ english: 'He put his head on the pillow.', malay: 'Dia meletakkan kepalanya di atas bantal.', chinese: '他把头靠在枕头上。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'overcome', term: 'overcome', normalizedTerm: 'overcome', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '战胜, 克服, 胜过；得胜', chineseExplanation: '战胜, 克服, 胜过；得胜是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Get on top of; deal with successfully.',
    examples: [{ english: 'The example shows how to use the verb overcome.', malay: 'Mengatasi.', chinese: '这个例子展示了如何使用动词“overcome”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'electric', term: 'electric', normalizedTerm: 'electric', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '电的, 导电的, 电动的；电的', chineseExplanation: '电的, 导电的, 电动的；电的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A car that is powered by electricity.',
    examples: [{ english: 'The passage uses electric to describe the situation.', malay: 'Menggunakan tenaga elektrik.', chinese: '文章用“electric”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'platform', term: 'platform', normalizedTerm: 'platform', partOfSpeech: ['noun', 'verb'],
    chineseShort: '站台, 月台, 讲台, 论坛, 平台；平台', chineseExplanation: '站台, 月台, 讲台, 论坛, 平台；平台是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A raised horizontal surface.',
    examples: [{ english: 'The lesson explains the meaning of platform.', malay: 'Pelantar atau sistem teknologi.', chinese: '本课解释了“platform”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'journal', term: 'journal', normalizedTerm: 'journal', partOfSpeech: ['noun', 'verb'],
    chineseShort: '日记, 杂志, 日报；轴颈', chineseExplanation: '日记, 杂志, 日报；轴颈是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A periodical dedicated to a particular subject.',
    examples: [{ english: 'The lesson explains the meaning of journal.', malay: 'Jurnal atau catatan harian.', chinese: '本课解释了“journal”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'consent', term: 'consent', normalizedTerm: 'consent', partOfSpeech: ['noun', 'verb'],
    chineseShort: '同意, 许可；同意, 赞同', chineseExplanation: '同意, 许可；同意, 赞同是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Permission to do something.',
    examples: [{ english: 'The lesson explains the meaning of consent.', malay: 'Persetujuan.', chinese: '本课解释了“consent”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'disk', term: 'disk', normalizedTerm: 'disk', partOfSpeech: ['noun', 'verb'],
    chineseShort: '圆盘, 磁盘；磁盘', chineseExplanation: '圆盘, 磁盘；磁盘是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something with a round shape resembling a flat circular plate.',
    examples: [{ english: 'The lesson explains the meaning of disk.', malay: 'Cakera.', chinese: '本课解释了“disk”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'quit', term: 'quit', normalizedTerm: 'quit', partOfSpeech: ['verb', 'adjective'],
    chineseShort: '离开, 辞职, 停止；离开, 放弃, 使解除, 停止', chineseExplanation: '离开, 辞职, 停止；离开, 放弃, 使解除, 停止是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Put an end to a state or an activity v give up or retire from a position v go away or leave v turn away from; give up v give up in the face of defeat of lacking hope; admit defeat.',
    examples: [{ english: 'The example shows how to use the verb quit.', malay: 'Berhenti.', chinese: '这个例子展示了如何使用动词“quit”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'latin', term: 'latin', normalizedTerm: 'latin', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '拉丁人, 拉丁语；拉丁人的, 拉丁语的', chineseExplanation: '拉丁人, 拉丁语；拉丁人的, 拉丁语的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any dialect of the language of ancient Rome.',
    examples: [{ english: 'The lesson explains the meaning of latin.', malay: 'Bahasa Latin.', chinese: '本课解释了“latin”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'greatly', term: 'greatly', normalizedTerm: 'greatly', partOfSpeech: ['adverb'],
    chineseShort: '很, 非常', chineseExplanation: '很, 非常是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'To an extraordinary extent or degree.',
    examples: [{ english: 'The speaker used greatly to add detail.', malay: 'Dengan banyaknya.', chinese: '说话者用“greatly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'jail', term: 'jail', normalizedTerm: 'jail', partOfSpeech: ['noun', 'verb'],
    chineseShort: '监牢, 监狱, 拘留所；监禁, 下狱', chineseExplanation: '监牢, 监狱, 拘留所；监禁, 下狱是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A correctional institution used to detain persons who are in the lawful custody of the government (either accused persons awaiting trial or convicted persons serving a sentence).',
    examples: [{ english: 'The lesson explains the meaning of jail.', malay: 'Penjara.', chinese: '本课解释了“jail”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sake', term: 'sake', normalizedTerm: 'sake', partOfSpeech: ['noun'],
    chineseShort: '目的, 缘故, 理由', chineseExplanation: '目的, 缘故, 理由是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A reason for wanting something done.',
    examples: [{ english: 'The lesson explains the meaning of sake.', malay: 'Demi tujuan atau manfaat.', chinese: '本课解释了“sake”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'essay', term: 'essay', normalizedTerm: 'essay', partOfSpeech: ['noun', 'verb'],
    chineseShort: '随笔, 短文, 评论, 企图；试图', chineseExplanation: '随笔, 短文, 评论, 企图；试图是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An analytic or interpretive literary composition.',
    examples: [{ english: 'The lesson explains the meaning of essay.', malay: 'Karangan.', chinese: '本课解释了“essay”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'written', term: 'written', normalizedTerm: 'written', partOfSpeech: ['adjective'],
    chineseShort: '书面的, 写成文字的；write的过去分词', chineseExplanation: '书面的, 写成文字的；write的过去分词是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Set down in writing in any of various ways.',
    examples: [{ english: 'The passage uses written to describe the situation.', malay: 'Dalam bentuk tulisan.', chinese: '文章用“written”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'pop', term: 'pop', normalizedTerm: 'pop', partOfSpeech: ['noun', 'verb'],
    chineseShort: '砰然声, 枪击, 含气饮料, 流行音乐, 通俗艺术；流行的, 热门的, 通俗的', chineseExplanation: '砰然声, 枪击, 含气饮料, 流行音乐, 通俗艺术；流行的, 热门的, 通俗的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A sweet drink containing carbonated water and flavoring.',
    examples: [{ english: 'The lesson explains the meaning of pop.', malay: 'Muzik pop atau bunyi letupan kecil.', chinese: '本课解释了“pop”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'remark', term: 'remark', normalizedTerm: 'remark', partOfSpeech: ['noun', 'verb'],
    chineseShort: '评论, 注意；评论, 注意', chineseExplanation: '评论, 注意；评论, 注意是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A statement that expresses a personal opinion or belief or adds information.',
    examples: [{ english: 'The lesson explains the meaning of remark.', malay: 'Ulasan ringkas.', chinese: '本课解释了“remark”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'formula', term: 'formula', normalizedTerm: 'formula', partOfSpeech: ['noun'],
    chineseShort: '客套语, 公式, 准则；公式', chineseExplanation: '客套语, 公式, 准则；公式是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A group of symbols that make a mathematical statement.',
    examples: [{ english: 'The lesson explains the meaning of formula.', malay: 'Rumus.', chinese: '本课解释了“formula”的含义。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'distinct', term: 'distinct', normalizedTerm: 'distinct', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '清楚的, 显著的, 不同的', chineseExplanation: '清楚的, 显著的, 不同的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(often followed by `from\') not alike; different in nature or quality.',
    examples: [{ english: 'The passage uses distinct to describe the situation.', malay: 'Jelas berbeza.', chinese: '文章用“distinct”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'ben', term: 'ben', normalizedTerm: 'ben', partOfSpeech: ['noun', 'adverb'],
    chineseShort: '内室；贝昂', chineseExplanation: '内室；贝昂是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A mountain or tall hill.',
    examples: [{ english: 'The lesson explains the meaning of ben.', malay: 'Nama lelaki.', chinese: '本课解释了“ben”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'label', term: 'label', normalizedTerm: 'label', partOfSpeech: ['noun', 'verb'],
    chineseShort: '标签, 称号, 商标, 标志；贴标签于, 标注', chineseExplanation: '标签, 称号, 商标, 标志；贴标签于, 标注是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A brief description given for purposes of identification.',
    examples: [{ english: 'The lesson explains the meaning of label.', malay: 'Label pengenalan.', chinese: '本课解释了“label”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'fortune', term: 'fortune', normalizedTerm: 'fortune', partOfSpeech: ['noun', 'verb'],
    chineseShort: '财富, 运气, 兴隆, 大量财产, 好运, 命运；命运, 财产, 大量财产', chineseExplanation: '财富, 运气, 兴隆, 大量财产, 好运, 命运；命运, 财产, 大量财产是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A large amount of wealth or prosperity.',
    examples: [{ english: 'The lesson explains the meaning of fortune.', malay: 'Nasib atau kekayaan.', chinese: '本课解释了“fortune”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'distant', term: 'distant', normalizedTerm: 'distant', partOfSpeech: ['adjective'],
    chineseShort: '远的, 疏远的；远期的', chineseExplanation: '远的, 疏远的；远期的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Separated in space or coming from or going to a distance.',
    examples: [{ english: 'The passage uses distant to describe the situation.', malay: 'Jauh.', chinese: '文章用“distant”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'satellite', term: 'satellite', normalizedTerm: 'satellite', partOfSpeech: ['noun', 'verb'],
    chineseShort: '人造卫星；伴行静脉, 陪静脉, 陪病部, 随体, 卫星', chineseExplanation: '人造卫星；伴行静脉, 陪静脉, 陪病部, 随体, 卫星是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Man-made equipment that orbits around the earth or the moon.',
    examples: [{ english: 'The lesson explains the meaning of satellite.', malay: 'Satelit yang mengorbit.', chinese: '本课解释了“satellite”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'bell', term: 'bell', normalizedTerm: 'bell', partOfSpeech: ['noun', 'verb'],
    chineseShort: '铃, 钟；响铃命令', chineseExplanation: '铃, 钟；响铃命令是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A hollow device made of metal that makes a ringing sound when struck.',
    examples: [{ english: 'The lesson explains the meaning of bell.', malay: 'Loceng.', chinese: '本课解释了“bell”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'yield', term: 'yield', normalizedTerm: 'yield', partOfSpeech: ['noun', 'verb'],
    chineseShort: '生产量, 投资收益；出产, 给予, 让出, 放弃, 使屈服', chineseExplanation: '生产量, 投资收益；出产, 给予, 让出, 放弃, 使屈服是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An amount of a product.',
    examples: [{ english: 'The lesson explains the meaning of yield.', malay: 'Menghasilkan atau menyerah.', chinese: '本课解释了“yield”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'portrait', term: 'portrait', normalizedTerm: 'portrait', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '肖像, 人像, 半身像, 描写, 竖排格式；纵向', chineseExplanation: '肖像, 人像, 半身像, 描写, 竖排格式；纵向是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any likeness of a person, in any medium.',
    examples: [{ english: 'The lesson explains the meaning of portrait.', malay: 'Gambar potret seseorang.', chinese: '本课解释了“portrait”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sam', term: 'sam', normalizedTerm: 'sam', partOfSpeech: ['noun', 'verb'],
    chineseShort: '安全性帐户管理器', chineseExplanation: '安全性帐户管理器是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A guided missile fired from land or shipboard against an airborne target.',
    examples: [{ english: 'The lesson explains the meaning of sam.', malay: 'Nama orang.', chinese: '本课解释了“sam”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'remote', term: 'remote', normalizedTerm: 'remote', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '遥远的, 偏僻的, 疏远的, 微少的；远程, 远程访问实用程序', chineseExplanation: '遥远的, 偏僻的, 疏远的, 微少的；远程, 远程访问实用程序是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A device that can be used to control a machine or apparatus from a distance s located far away spatially s very unlikely s separate or apart in time s inaccessible and sparsely populated;.',
    examples: [{ english: 'The passage uses remote to describe the situation.', malay: 'Jauh atau alat kawalan.', chinese: '文章用“remote”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'resort', term: 'resort', normalizedTerm: 'resort', partOfSpeech: ['noun', 'verb'],
    chineseShort: '度假胜地, 手段, 凭借, 常去之地；诉诸, 常去', chineseExplanation: '度假胜地, 手段, 凭借, 常去之地；诉诸, 常去是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A hotel located in a resort area.',
    examples: [{ english: 'The lesson explains the meaning of resort.', malay: 'Tempat peranginan.', chinese: '本课解释了“resort”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'interval', term: 'interval', normalizedTerm: 'interval', partOfSpeech: ['noun'],
    chineseShort: '间隔, 距离, 间歇, 间隙；时间间隔', chineseExplanation: '间隔, 距离, 间歇, 间隙；时间间隔是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A set containing all points (or all real numbers) between two given endpoints.',
    examples: [{ english: 'The lesson explains the meaning of interval.', malay: 'Selang masa.', chinese: '本课解释了“interval”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'virus', term: 'virus', normalizedTerm: 'virus', partOfSpeech: ['noun', 'verb'],
    chineseShort: '病毒, 滤过性病毒, 毒害；病毒', chineseExplanation: '病毒, 滤过性病毒, 毒害；病毒是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(virology) ultramicroscopic infectious agent that replicates itself only within cells of living hosts; many are pathogenic; a piece of nucleic acid (DNA or RNA) wrapped in a thin coat of protein.',
    examples: [{ english: 'The lesson explains the meaning of virus.', malay: 'Virus penyebab penyakit.', chinese: '本课解释了“virus”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'jean', term: 'jean', normalizedTerm: 'jean', partOfSpeech: ['noun'],
    chineseShort: '牛仔裤, 牛仔布, 斜纹棉布', chineseExplanation: '牛仔裤, 牛仔布, 斜纹棉布是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(usually plural) close-fitting trousers of heavy denim for manual work or casual wear.',
    examples: [{ english: 'The lesson explains the meaning of jean.', malay: 'Fabrik denim atau nama orang.', chinese: '本课解释了“jean”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'blind', term: 'blind', normalizedTerm: 'blind', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '蒙蔽物, 窗帘；盲目的, 瞎的, 不加思考的', chineseExplanation: '蒙蔽物, 窗帘；盲目的, 瞎的, 不加思考的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'People who have severe visual impairments, considered as a group.',
    examples: [{ english: 'The passage uses blind to describe the situation.', malay: 'Tidak dapat melihat.', chinese: '文章用“blind”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'elite', term: 'elite', normalizedTerm: 'elite', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '精华, 精锐, 中坚分子', chineseExplanation: '精华, 精锐, 中坚分子是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A group or class of persons enjoying superior intellectual or social or economic status.',
    examples: [{ english: 'The lesson explains the meaning of elite.', malay: 'Golongan terbaik atau berkuasa.', chinese: '本课解释了“elite”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'solar', term: 'solar', normalizedTerm: 'solar', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '太阳的, 日光的, 源自太阳的；太阳的', chineseExplanation: '太阳的, 日光的, 源自太阳的；太阳的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Relating to or derived from the sun or utilising the energies of the sun.',
    examples: [{ english: 'The passage uses solar to describe the situation.', malay: 'Berkaitan dengan matahari.', chinese: '文章用“solar”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'merchant', term: 'merchant', normalizedTerm: 'merchant', partOfSpeech: ['noun', 'verb'],
    chineseShort: '商人, 店主；商业的, 商人的', chineseExplanation: '商人, 店主；商业的, 商人的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A businessperson engaged in retail trade.',
    examples: [{ english: 'The lesson explains the meaning of merchant.', malay: 'Peniaga.', chinese: '本课解释了“merchant”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'plain', term: 'plain', normalizedTerm: 'plain', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '平原, 草原, 朴实无华的东西, 无格式；简单的, 明白的, 平常的, 不好看的, 朴素的, 清晰的, 普通的, 平坦的, 十足的', chineseExplanation: '平原, 草原, 朴实无华的东西, 无格式；简单的, 明白的, 平常的, 不好看的, 朴素的, 清晰的, 普通的, 平坦的, 十足的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Extensive tract of level open land.',
    examples: [{ english: 'The passage uses plain to describe the situation.', malay: 'Jelas atau dataran.', chinese: '文章用“plain”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'satisfy', term: 'satisfy', normalizedTerm: 'satisfy', partOfSpeech: ['verb'],
    chineseShort: '使满意, 满足, 符合, 使确信, 赔偿；令人满意, 替人赎罪', chineseExplanation: '使满意, 满足, 符合, 使确信, 赔偿；令人满意, 替人赎罪是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Meet the requirements or expectations of.',
    examples: [{ english: 'The example shows how to use the verb satisfy.', malay: 'Memenuhi keperluan atau kehendak.', chinese: '这个例子展示了如何使用动词“satisfy”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'innocent', term: 'innocent', normalizedTerm: 'innocent', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '无罪的, 不懂事的, 无知的；天真的人, 笨蛋', chineseExplanation: '无罪的, 不懂事的, 无知的；天真的人, 笨蛋是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who lacks knowledge of evil.',
    examples: [{ english: 'The passage uses innocent to describe the situation.', malay: 'Tidak bersalah.', chinese: '文章用“innocent”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'vessel', term: 'vessel', normalizedTerm: 'vessel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '船, 容器, 脉管；管, 脉管, 器', chineseExplanation: '船, 容器, 脉管；管, 脉管, 器是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A tube in which a body fluid circulates.',
    examples: [{ english: 'The lesson explains the meaning of vessel.', malay: 'Kapal atau bekas.', chinese: '本课解释了“vessel”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'bench', term: 'bench', normalizedTerm: 'bench', partOfSpeech: ['noun', 'verb'],
    chineseShort: '长椅子；台', chineseExplanation: '长椅子；台是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A long seat for more than one person.',
    examples: [{ english: 'The lesson explains the meaning of bench.', malay: 'Bangku panjang.', chinese: '本课解释了“bench”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'dialogue', term: 'dialogue', normalizedTerm: 'dialogue', partOfSpeech: ['noun', 'verb'],
    chineseShort: '对话；对话', chineseExplanation: '对话；对话是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A conversation between two persons.',
    examples: [{ english: 'The lesson explains the meaning of dialogue.', malay: 'Perbualan antara pihak.', chinese: '本课解释了“dialogue”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'joy', term: 'joy', normalizedTerm: 'joy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '欢喜, 乐事, 高兴；使快乐, 令人高兴', chineseExplanation: '欢喜, 乐事, 高兴；使快乐, 令人高兴是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The emotion of great happiness.',
    examples: [{ english: 'The lesson explains the meaning of joy.', malay: 'Kegembiraan.', chinese: '本课解释了“joy”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tongue', term: 'tongue', normalizedTerm: 'tongue', partOfSpeech: ['noun', 'verb'],
    chineseShort: '舌, 语言能力, 讲话方式, 语言；舔, 斥责, 发...的音', chineseExplanation: '舌, 语言能力, 讲话方式, 语言；舔, 斥责, 发...的音是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A mobile mass of muscular tissue covered with mucous membrane and located in the oral cavity.',
    examples: [{ english: 'The lesson explains the meaning of tongue.', malay: 'Lidah.', chinese: '本课解释了“tongue”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'cupboard', term: 'cupboard', normalizedTerm: 'cupboard', partOfSpeech: ['noun'],
    chineseShort: '橱柜；壁柜', chineseExplanation: '带门的储物柜，通常用来存放食物、餐具或家居用品。', englishDefinition: 'A cabinet with doors used for storing food, dishes, or household items.',
    examples: [{ english: 'The cups are in the cupboard.', malay: 'Cawan-cawan itu berada di dalam almari.', chinese: '杯子在橱柜里。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sail', term: 'sail', normalizedTerm: 'sail', partOfSpeech: ['noun', 'verb'],
    chineseShort: '帆, 篷, 帆船, 航程, 帆状物；航行, 启航, 张帆而行', chineseExplanation: '帆, 篷, 帆船, 航程, 帆状物；航行, 启航, 张帆而行是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A large piece of fabric (usually canvas fabric) by means of which wind is used to propel a sailing vessel.',
    examples: [{ english: 'The lesson explains the meaning of sail.', malay: 'Belayar atau layar.', chinese: '本课解释了“sail”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'grateful', term: 'grateful', normalizedTerm: 'grateful', partOfSpeech: ['adjective'],
    chineseShort: '感谢的, 感激的, 令人快意的, 受欢迎的', chineseExplanation: '感谢的, 感激的, 令人快意的, 受欢迎的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Feeling or showing gratitude.',
    examples: [{ english: 'The passage uses grateful to describe the situation.', malay: 'Berasa berterima kasih.', chinese: '文章用“grateful”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'venture', term: 'venture', normalizedTerm: 'venture', partOfSpeech: ['noun', 'verb'],
    chineseShort: '冒险, 风险；敢于, 冒...的危险', chineseExplanation: '冒险, 风险；敢于, 冒...的危险是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any venturesome undertaking especially one with an uncertain outcome.',
    examples: [{ english: 'The lesson explains the meaning of venture.', malay: 'Usaha yang berisiko.', chinese: '本课解释了“venture”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'discourse', term: 'discourse', normalizedTerm: 'discourse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '谈话, 演讲；谈话, 讲述', chineseExplanation: '谈话, 演讲；谈话, 讲述是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Extended verbal expression in speech or writing.',
    examples: [{ english: 'The lesson explains the meaning of discourse.', malay: 'Wacana atau perbincangan formal.', chinese: '本课解释了“discourse”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'nowhere', term: 'nowhere', normalizedTerm: 'nowhere', partOfSpeech: ['adverb', 'noun'],
    chineseShort: '无处, 到处都无', chineseExplanation: '无处, 到处都无是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An insignificant place.',
    examples: [{ english: 'The speaker used nowhere to add detail.', malay: 'Tiada tempat.', chinese: '说话者用“nowhere”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'diary', term: 'diary', normalizedTerm: 'diary', partOfSpeech: ['noun', 'verb'],
    chineseShort: '日记；日记簿', chineseExplanation: '日记；日记簿是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A daily written record of (usually personal) experiences and observations.',
    examples: [{ english: 'The lesson explains the meaning of diary.', malay: 'Buku catatan harian.', chinese: '本课解释了“diary”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'ward', term: 'ward', normalizedTerm: 'ward', partOfSpeech: ['noun', 'verb'],
    chineseShort: '病房, 守卫, 保卫, 保护, 监护, 牢房, 行政区, 锁孔内的榫舌；使入病房, 守护, 保卫', chineseExplanation: '病房, 守卫, 保卫, 保护, 监护, 牢房, 行政区, 锁孔内的榫舌；使入病房, 守护, 保卫是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who is under the protection or in the custody of another.',
    examples: [{ english: 'The lesson explains the meaning of ward.', malay: 'Wad hospital atau kawasan pentadbiran.', chinese: '本课解释了“ward”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'wisdom', term: 'wisdom', normalizedTerm: 'wisdom', partOfSpeech: ['noun'],
    chineseShort: '智慧, 明智行为, 学识, 名言, 贤人', chineseExplanation: '智慧, 明智行为, 学识, 名言, 贤人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Accumulated knowledge or erudition or enlightenment.',
    examples: [{ english: 'The lesson explains the meaning of wisdom.', malay: 'Kebijaksanaan.', chinese: '本课解释了“wisdom”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'virtue', term: 'virtue', normalizedTerm: 'virtue', partOfSpeech: ['noun'],
    chineseShort: '德行, 美德, 优点, 功效, 效力；美德, 贞操, 优点', chineseExplanation: '德行, 美德, 优点, 功效, 效力；美德, 贞操, 优点是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of doing what is right and avoiding what is wrong.',
    examples: [{ english: 'The lesson explains the meaning of virtue.', malay: 'Sifat yang baik.', chinese: '本课解释了“virtue”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'plot', term: 'plot', normalizedTerm: 'plot', partOfSpeech: ['noun', 'verb'],
    chineseShort: '小块土地, 地区图, 图, 阴谋, 情节；划分, 绘图, 密谋', chineseExplanation: '小块土地, 地区图, 图, 阴谋, 情节；划分, 绘图, 密谋是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A secret scheme to do something (especially something underhand or illegal).',
    examples: [{ english: 'The lesson explains the meaning of plot.', malay: 'Jalan cerita atau bidang tanah.', chinese: '本课解释了“plot”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'divorce', term: 'divorce', normalizedTerm: 'divorce', partOfSpeech: ['noun', 'verb'],
    chineseShort: '离婚；与...离婚', chineseExplanation: '离婚；与...离婚是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The legal dissolution of a marriage.',
    examples: [{ english: 'The lesson explains the meaning of divorce.', malay: 'Perceraian.', chinese: '本课解释了“divorce”的含义。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'grammar', term: 'grammar', normalizedTerm: 'grammar', partOfSpeech: ['noun', 'verb'],
    chineseShort: '语法学, 入门书；语法检查', chineseExplanation: '语法学, 入门书；语法检查是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The branch of linguistics that deals with syntax and morphology (and sometimes also deals with semantics).',
    examples: [{ english: 'The lesson explains the meaning of grammar.', malay: 'Tatabahasa.', chinese: '本课解释了“grammar”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'commonly', term: 'commonly', normalizedTerm: 'commonly', partOfSpeech: ['adverb'],
    chineseShort: '一般, 普通, 通常', chineseExplanation: '一般, 普通, 通常是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Under normal conditions.',
    examples: [{ english: 'The speaker used commonly to add detail.', malay: 'Secara lazim.', chinese: '说话者用“commonly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'opera', term: 'opera', normalizedTerm: 'opera', partOfSpeech: ['noun'],
    chineseShort: '歌剧', chineseExplanation: '歌剧是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A drama set to music; consists of singing with orchestral accompaniment and an orchestral overture and interludes.',
    examples: [{ english: 'The lesson explains the meaning of opera.', malay: 'Drama muzikal.', chinese: '本课解释了“opera”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'doormat', term: 'doormat', normalizedTerm: 'doormat', partOfSpeech: ['noun'],
    chineseShort: '门垫', chineseExplanation: '放在门口、用来擦去鞋底泥土或水分的垫子。', englishDefinition: 'A mat placed by a door for wiping dirt or water from shoes.',
    examples: [{ english: 'Please wipe your shoes on the doormat.', malay: 'Sila lap kasut anda pada pengesat kaki.', chinese: '请在门垫上擦一擦鞋。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'tobacco', term: 'tobacco', normalizedTerm: 'tobacco', partOfSpeech: ['noun', 'verb'],
    chineseShort: '烟草, 香烟；烟草', chineseExplanation: '烟草, 香烟；烟草是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Leaves of the tobacco plant dried and prepared for smoking or ingestion.',
    examples: [{ english: 'The lesson explains the meaning of tobacco.', malay: 'Tembakau.', chinese: '本课解释了“tobacco”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'victorian', term: 'victorian', normalizedTerm: 'victorian', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '英国维多利亚女王时代的, 笃信宗教的, 讲究体面的；维多利亚女王时代的英国人', chineseExplanation: '英国维多利亚女王时代的, 笃信宗教的, 讲究体面的；维多利亚女王时代的英国人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who lived during the reign of Victoria.',
    examples: [{ english: 'The passage uses victorian to describe the situation.', malay: 'Berkaitan dengan zaman Ratu Victoria.', chinese: '文章用“victorian”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'companion', term: 'companion', normalizedTerm: 'companion', partOfSpeech: ['noun', 'verb'],
    chineseShort: '朋友, 陪伴, 指南, 升降口围罩；陪伴', chineseExplanation: '朋友, 陪伴, 指南, 升降口围罩；陪伴是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A friend who is frequently in the company of another.',
    examples: [{ english: 'The lesson explains the meaning of companion.', malay: 'Teman.', chinese: '本课解释了“companion”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'meter', term: 'metre', normalizedTerm: 'metre', partOfSpeech: ['noun'],
    chineseShort: '米；公尺', chineseExplanation: '国际单位制中的基本长度单位，等于一百厘米。', englishDefinition: 'The standard unit of length equal to one hundred centimetres.',
    examples: [{ english: 'The table is one metre wide.', malay: 'Meja itu selebar satu meter.', chinese: '这张桌子一米宽。' }], level: 1, cefr: 'A2', categories: ['Academic', 'Daily English'],
  },
  {
    id: 'medieval', term: 'medieval', normalizedTerm: 'medieval', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '中古的, 中世纪的', chineseExplanation: '中古的, 中世纪的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Relating to or belonging to the Middle Ages.',
    examples: [{ english: 'The passage uses medieval to describe the situation.', malay: 'Berkaitan dengan Zaman Pertengahan.', chinese: '文章用“medieval”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'uniform', term: 'uniform', normalizedTerm: 'uniform', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '制服；统一的, 一律的, 始终如一的', chineseExplanation: '制服；统一的, 一律的, 始终如一的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Clothing of distinctive design worn by members of a particular group as a means of identification.',
    examples: [{ english: 'The passage uses uniform to describe the situation.', malay: 'Pakaian seragam.', chinese: '文章用“uniform”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'contest', term: 'contest', normalizedTerm: 'contest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '竞赛, 争论；竞争, 争取, 争辩', chineseExplanation: '竞赛, 争论；竞争, 争取, 争辩是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An occasion on which a winner is selected from among two or more contestants.',
    examples: [{ english: 'The lesson explains the meaning of contest.', malay: 'Pertandingan.', chinese: '本课解释了“contest”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'organic', term: 'organic', normalizedTerm: 'organic', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '器官的, 有机的, 组织的, 根本的；器官的, 有生命的, 有机的, 器质的', chineseExplanation: '器官的, 有机的, 组织的, 根本的；器官的, 有生命的, 有机的, 器质的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A fertiliser that is derived from animal or vegetable matter.',
    examples: [{ english: 'The passage uses organic to describe the situation.', malay: 'Berkaitan dengan organisma atau tanpa bahan kimia sintetik.', chinese: '文章用“organic”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'tent', term: 'tent', normalizedTerm: 'tent', partOfSpeech: ['noun', 'verb'],
    chineseShort: '帐篷, 帷幕, 住处, 塞条, 塞子；住帐蓬, 宿营, 暂时居住', chineseExplanation: '帐篷, 帷幕, 住处, 塞条, 塞子；住帐蓬, 宿营, 暂时居住是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A portable shelter (usually of canvas stretched over supporting poles and fastened to the ground with ropes and pegs).',
    examples: [{ english: 'The lesson explains the meaning of tent.', malay: 'Khemah.', chinese: '本课解释了“tent”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'format', term: 'format', normalizedTerm: 'format', partOfSpeech: ['noun', 'verb'],
    chineseShort: '开本, 版式, 形式, 格式；格式化', chineseExplanation: '开本, 版式, 形式, 格式；格式化是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The organisation of information according to preset specifications (usually for computer processing).',
    examples: [{ english: 'The lesson explains the meaning of format.', malay: 'Susunan atau bentuk penyampaian.', chinese: '本课解释了“format”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'judicial', term: 'judicial', normalizedTerm: 'judicial', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '法庭的, 公正的, 审判上的, 司法的；司法的, 审判上的, 法官的', chineseExplanation: '法庭的, 公正的, 审判上的, 司法的；司法的, 审判上的, 法官的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Decreed by or proceeding from a court of justice.',
    examples: [{ english: 'The passage uses judicial to describe the situation.', malay: 'Berkaitan dengan mahkamah.', chinese: '文章用“judicial”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'menu', term: 'menu', normalizedTerm: 'menu', partOfSpeech: ['noun', 'verb'],
    chineseShort: '菜单, 选择单；菜单', chineseExplanation: '菜单, 选择单；菜单是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A list of dishes available at a restaurant.',
    examples: [{ english: 'The lesson explains the meaning of menu.', malay: 'Senarai makanan dan minuman.', chinese: '本课解释了“menu”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'organ', term: 'organ', normalizedTerm: 'organ', partOfSpeech: ['noun', 'verb'],
    chineseShort: '风琴, 器官, 元件, 机构, 机关；风琴', chineseExplanation: '风琴, 器官, 元件, 机构, 机关；风琴是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A fully differentiated structural and functional unit in an animal that is specialised for some particular function.',
    examples: [{ english: 'The lesson explains the meaning of organ.', malay: 'Organ badan.', chinese: '本课解释了“organ”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'disc', term: 'disc', normalizedTerm: 'disc', partOfSpeech: ['noun', 'verb'],
    chineseShort: '圆盘, 唱片；灌唱片', chineseExplanation: '圆盘, 唱片；灌唱片是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Sound recording consisting of a disk with a continuous groove;.',
    examples: [{ english: 'The lesson explains the meaning of disc.', malay: 'Cakera.', chinese: '本课解释了“disc”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'jet', term: 'jet', normalizedTerm: 'jet', partOfSpeech: ['noun', 'verb'],
    chineseShort: '喷射流, 喷嘴, 煤玉；射出, 迸出, 喷射', chineseExplanation: '喷射流, 喷嘴, 煤玉；射出, 迸出, 喷射是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An airplane powered by one or more jet engines.',
    examples: [{ english: 'The lesson explains the meaning of jet.', malay: 'Pesawat jet.', chinese: '本课解释了“jet”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'blade', term: 'blade', normalizedTerm: 'blade', partOfSpeech: ['noun', 'verb'],
    chineseShort: '叶片, 刀锋, 刀口, 剑；页, 叶片, 刀片, 刀刃, 刀口', chineseExplanation: '叶片, 刀锋, 刀口, 剑；页, 叶片, 刀片, 刀刃, 刀口是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Especially a leaf of grass or the broad portion of a leaf as distinct from the petiole.',
    examples: [{ english: 'The lesson explains the meaning of blade.', malay: 'Bilah tajam.', chinese: '本课解释了“blade”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'notably', term: 'notably', normalizedTerm: 'notably', partOfSpeech: ['adverb'],
    chineseShort: '显著地, 著名地, 尤其, 特别', chineseExplanation: '显著地, 著名地, 尤其, 特别是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Especially; in particular.',
    examples: [{ english: 'The speaker used notably to add detail.', malay: 'Terutamanya.', chinese: '说话者用“notably”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'remedy', term: 'remedy', normalizedTerm: 'remedy', partOfSpeech: ['noun', 'verb'],
    chineseShort: '药物, 治疗法, 治疗, 补救, 赔偿；治疗, 补救, 矫正, 改善, 修补, 修缮', chineseExplanation: '药物, 治疗法, 治疗, 补救, 赔偿；治疗, 补救, 矫正, 改善, 修补, 修缮是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A medicine or therapy that cures disease or relieve pain.',
    examples: [{ english: 'The lesson explains the meaning of remedy.', malay: 'Ubat atau penyelesaian.', chinese: '本课解释了“remedy”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'harm', term: 'harm', normalizedTerm: 'harm', partOfSpeech: ['noun', 'verb'],
    chineseShort: '伤害, 害处；伤害, 损害', chineseExplanation: '伤害, 害处；伤害, 损害是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Cause or do harm to.',
    examples: [{ english: 'The lesson explains the meaning of harm.', malay: 'Kemudaratan.', chinese: '本课解释了“harm”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'comedy', term: 'comedy', normalizedTerm: 'comedy', partOfSpeech: ['noun'],
    chineseShort: '喜剧, 有趣的事情', chineseExplanation: '喜剧, 有趣的事情是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Light and humorous drama with a happy ending.',
    examples: [{ english: 'The lesson explains the meaning of comedy.', malay: 'Cerita atau persembahan lucu.', chinese: '本课解释了“comedy”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'grain', term: 'grain', normalizedTerm: 'grain', partOfSpeech: ['noun', 'verb'],
    chineseShort: '谷粒, 颗粒, 谷类, 纹理, 本质；成谷粒', chineseExplanation: '谷粒, 颗粒, 谷类, 纹理, 本质；成谷粒是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A relatively small granular particle of a substance.',
    examples: [{ english: 'The lesson explains the meaning of grain.', malay: 'Bijirin atau butiran kecil.', chinese: '本课解释了“grain”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'needle', term: 'needle', normalizedTerm: 'needle', partOfSpeech: ['noun', 'verb'],
    chineseShort: '针, 尖；用针缝', chineseExplanation: '针, 尖；用针缝是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A slender pointer for indicating the reading on the scale of a measuring instrument.',
    examples: [{ english: 'The lesson explains the meaning of needle.', malay: 'Jarum.', chinese: '本课解释了“needle”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'lung', term: 'lung', normalizedTerm: 'lung', partOfSpeech: ['noun'],
    chineseShort: '肺, 肺脏, 空地；肺', chineseExplanation: '肺, 肺脏, 空地；肺是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Either of two saclike respiratory organs in the chest of vertebrates; serves to remove carbon dioxide and provide oxygen to the blood.',
    examples: [{ english: 'The lesson explains the meaning of lung.', malay: 'Paru-paru.', chinese: '本课解释了“lung”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'powder', term: 'powder', normalizedTerm: 'powder', partOfSpeech: ['noun', 'verb'],
    chineseShort: '粉, 粉末, 火药；搽粉于, 搽粉, 撒粉, 使成粉末', chineseExplanation: '粉, 粉末, 火药；搽粉于, 搽粉, 撒粉, 使成粉末是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A solid substance in the form of tiny loose particles; a solid that has been pulverized.',
    examples: [{ english: 'The lesson explains the meaning of powder.', malay: 'Serbuk.', chinese: '本课解释了“powder”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'interface', term: 'interface', normalizedTerm: 'interface', partOfSpeech: ['noun', 'verb'],
    chineseShort: '分界面, 接触面, 界面；接口, 界面', chineseExplanation: '分界面, 接触面, 界面；接口, 界面是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: '(chemistry) a surface forming a common boundary between two things (two objects or liquids or chemical phases).',
    examples: [{ english: 'The lesson explains the meaning of interface.', malay: 'Antara muka.', chinese: '本课解释了“interface”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'sole', term: 'sole', normalizedTerm: 'sole', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '脚掌, 鞋底, 底部；唯一的, 仅有的, 单独的, 独身的', chineseExplanation: '脚掌, 鞋底, 底部；唯一的, 仅有的, 单独的, 独身的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The underside of footwear or a golf club.',
    examples: [{ english: 'The passage uses sole to describe the situation.', malay: 'Satu-satunya atau tapak kaki.', chinese: '文章用“sole”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'angel', term: 'angel', normalizedTerm: 'angel', partOfSpeech: ['noun', 'verb'],
    chineseShort: '天使, 守护神, 善人', chineseExplanation: '天使, 守护神, 善人是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Spiritual being attendant upon God.',
    examples: [{ english: 'The lesson explains the meaning of angel.', malay: 'Malaikat.', chinese: '本课解释了“angel”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'formally', term: 'formally', normalizedTerm: 'formally', partOfSpeech: ['adverb'],
    chineseShort: '正式地, 形式上', chineseExplanation: '正式地, 形式上是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'With official authorisation.',
    examples: [{ english: 'The speaker used formally to add detail.', malay: 'Secara rasmi.', chinese: '说话者用“formally”补充细节。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'laughter', term: 'laughter', normalizedTerm: 'laughter', partOfSpeech: ['noun'],
    chineseShort: '笑, 笑声；笑, 大笑', chineseExplanation: '笑, 笑声；笑, 大笑是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The activity of laughing; the manifestation of joy or mirth or scorn.',
    examples: [{ english: 'The lesson explains the meaning of laughter.', malay: 'Bunyi ketawa.', chinese: '本课解释了“laughter”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'grave', term: 'grave', normalizedTerm: 'grave', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '墓穴, 坟墓, 终结, 死亡；庄重的, 严肃的, 重大的, 低沉的', chineseExplanation: '墓穴, 坟墓, 终结, 死亡；庄重的, 严肃的, 重大的, 低沉的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Death of a person.',
    examples: [{ english: 'The passage uses grave to describe the situation.', malay: 'Kubur atau serius.', chinese: '文章用“grave”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'container', term: 'container', normalizedTerm: 'container', partOfSpeech: ['noun'],
    chineseShort: '容器, 集装箱；集装箱', chineseExplanation: '容器, 集装箱；集装箱是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any object that can be used to hold things (especially a large metal boxlike object of standardised dimensions that can be loaded from one form of transport to another).',
    examples: [{ english: 'The lesson explains the meaning of container.', malay: 'Bekas.', chinese: '本课解释了“container”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'receiver', term: 'receiver', normalizedTerm: 'receiver', partOfSpeech: ['noun'],
    chineseShort: '接收器；接受者', chineseExplanation: '接收器；接受者是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Set that receives radio or tv signals.',
    examples: [{ english: 'The lesson explains the meaning of receiver.', malay: 'Penerima.', chinese: '本课解释了“receiver”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'compound', term: 'compound', normalizedTerm: 'compound', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '混合物, 复合词, 化合物, 院子；复合的, 混合的, 化合的', chineseExplanation: '混合物, 复合词, 化合物, 院子；复合的, 混合的, 化合的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A whole formed by a union of two or more elements or parts.',
    examples: [{ english: 'The lesson explains the meaning of compound.', malay: 'Sebatian atau kawasan berpagar.', chinese: '本课解释了“compound”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'hardware', term: 'hardware', normalizedTerm: 'hardware', partOfSpeech: ['noun'],
    chineseShort: '硬件, 五金器具, 零件；硬件', chineseExplanation: '硬件, 五金器具, 零件；硬件是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Major items of military weaponry (as tanks or missile).',
    examples: [{ english: 'The lesson explains the meaning of hardware.', malay: 'Perkakasan komputer.', chinese: '本课解释了“hardware”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'temple', term: 'temple', normalizedTerm: 'temple', partOfSpeech: ['noun', 'verb'],
    chineseShort: '圣堂, 庙宇, 教堂, 礼拜堂, 太阳穴, 鬓角；颞颥, 颞部', chineseExplanation: '圣堂, 庙宇, 教堂, 礼拜堂, 太阳穴, 鬓角；颞颥, 颞部是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Place of worship consisting of an edifice for the worship of a deity.',
    examples: [{ english: 'The lesson explains the meaning of temple.', malay: 'Kuil atau bahagian sisi kepala.', chinese: '本课解释了“temple”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'oral', term: 'oral', normalizedTerm: 'oral', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '口试；口头的, 口述的, 口部的', chineseExplanation: '口试；口头的, 口述的, 口部的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An examination conducted by spoken communication.',
    examples: [{ english: 'The passage uses oral to describe the situation.', malay: 'Berkaitan dengan mulut atau pertuturan.', chinese: '文章用“oral”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'harsh', term: 'harsh', normalizedTerm: 'harsh', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '粗糙的, 刺耳的, 严厉的；粗糙的, 严厉的, 苛刻的', chineseExplanation: '粗糙的, 刺耳的, 严厉的；粗糙的, 严厉的, 苛刻的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Unpleasantly stern.',
    examples: [{ english: 'The passage uses harsh to describe the situation.', malay: 'Kasar atau keras.', chinese: '文章用“harsh”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'retail', term: 'retail', normalizedTerm: 'retail', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '零售；零售的', chineseExplanation: '零售；零售的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The selling of goods to consumers; usually in small quantities and not for resale.',
    examples: [{ english: 'The passage uses retail to describe the situation.', malay: 'Jualan runcit.', chinese: '文章用“retail”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'fold', term: 'fold', normalizedTerm: 'fold', partOfSpeech: ['noun', 'verb'],
    chineseShort: '折层, 折, 羊栏, 折痕, 信徒；折叠, 包, 合拢, 交迭', chineseExplanation: '折层, 折, 羊栏, 折痕, 信徒；折叠, 包, 合拢, 交迭是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An angular or rounded shape made by folding.',
    examples: [{ english: 'The lesson explains the meaning of fold.', malay: 'Melipat.', chinese: '本课解释了“fold”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'widow', term: 'widow', normalizedTerm: 'widow', partOfSpeech: ['noun', 'verb'],
    chineseShort: '寡妇, 孀妇；使成寡妇', chineseExplanation: '寡妇, 孀妇；使成寡妇是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A woman whose husband is dead especially one who has not remarried.',
    examples: [{ english: 'The lesson explains the meaning of widow.', malay: 'Balu.', chinese: '本课解释了“widow”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'known', term: 'known', normalizedTerm: 'known', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '已知的, 有名的；know的过去分词', chineseExplanation: '已知的, 有名的；know的过去分词是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Apprehended with certainty.',
    examples: [{ english: 'The passage uses known to describe the situation.', malay: 'Diketahui.', chinese: '文章用“known”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'warmth', term: 'warmth', normalizedTerm: 'warmth', partOfSpeech: ['noun'],
    chineseShort: '温暖, 温情, 暖和, 激动, 生气', chineseExplanation: '温暖, 温情, 暖和, 激动, 生气是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The quality of having a moderate degree of heat.',
    examples: [{ english: 'The lesson explains the meaning of warmth.', malay: 'Kehangatan.', chinese: '本课解释了“warmth”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'mentally', term: 'mentally', normalizedTerm: 'mentally', partOfSpeech: ['adverb'],
    chineseShort: '心理上, 精神上, 智力上；精神上, 智力上', chineseExplanation: '心理上, 精神上, 智力上；精神上, 智力上是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'In your mind.',
    examples: [{ english: 'The speaker used mentally to add detail.', malay: 'Dari segi mental.', chinese: '说话者用“mentally”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'uncertain', term: 'uncertain', normalizedTerm: 'uncertain', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不确定的, 无常的, 不确信的, 不可预测的；不确定的, 未定的, 不确信的', chineseExplanation: '不确定的, 无常的, 不确信的, 不可预测的；不确定的, 未定的, 不确信的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Lacking or indicating lack of confidence or assurance.',
    examples: [{ english: 'The passage uses uncertain to describe the situation.', malay: 'Tidak pasti.', chinese: '文章用“uncertain”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'verse', term: 'verse', normalizedTerm: 'verse', partOfSpeech: ['noun', 'verb'],
    chineseShort: '诗, 韵文, 诗句；用诗表达', chineseExplanation: '诗, 韵文, 诗句；用诗表达是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A piece of poetry.',
    examples: [{ english: 'The lesson explains the meaning of verse.', malay: 'Rangkap puisi.', chinese: '本课解释了“verse”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'refusal', term: 'refusal', normalizedTerm: 'refusal', partOfSpeech: ['noun'],
    chineseShort: '拒绝, 推却, 优先决定权；拒绝, 谢绝, 取舍权', chineseExplanation: '拒绝, 推却, 优先决定权；拒绝, 谢绝, 取舍权是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of refusing.',
    examples: [{ english: 'The lesson explains the meaning of refusal.', malay: 'Penolakan.', chinese: '本课解释了“refusal”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'formerly', term: 'formerly', normalizedTerm: 'formerly', partOfSpeech: ['adverb'],
    chineseShort: '从前, 以前', chineseExplanation: '从前, 以前是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'At a previous time;.',
    examples: [{ english: 'The speaker used formerly to add detail.', malay: 'Dahulu.', chinese: '说话者用“formerly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'unhappy', term: 'unhappy', normalizedTerm: 'unhappy', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '不快乐的, 不幸的, 不适当的', chineseExplanation: '不快乐的, 不幸的, 不适当的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Experiencing or marked by or causing sadness or sorrow or discontent.',
    examples: [{ english: 'The passage uses unhappy to describe the situation.', malay: 'Tidak gembira.', chinese: '文章用“unhappy”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'continent', term: 'continent', normalizedTerm: 'continent', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '大陆, 洲；自制的', chineseExplanation: '大陆, 洲；自制的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'One of the large landmasses of the earth.',
    examples: [{ english: 'The lesson explains the meaning of continent.', malay: 'Benua.', chinese: '本课解释了“continent”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'merit', term: 'merit', normalizedTerm: 'merit', partOfSpeech: ['noun', 'verb'],
    chineseShort: '优点, 功绩, 价值, 功过, 真相；值得', chineseExplanation: '优点, 功绩, 价值, 功过, 真相；值得是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Any admirable quality or attribute.',
    examples: [{ english: 'The lesson explains the meaning of merit.', malay: 'Kelebihan atau nilai baik.', chinese: '本课解释了“merit”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'fool', term: 'fool', normalizedTerm: 'fool', partOfSpeech: ['noun', 'verb'],
    chineseShort: '愚人, 受骗者, 奶油拌水果；愚弄, 欺骗, 浪费', chineseExplanation: '愚人, 受骗者, 奶油拌水果；愚弄, 欺骗, 浪费是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who lacks good judgement.',
    examples: [{ english: 'The lesson explains the meaning of fool.', malay: 'Orang bodoh.', chinese: '本课解释了“fool”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'virtual', term: 'virtual', normalizedTerm: 'virtual', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '实际上起作用的, 虚的, 实质的, 有效的, 事实上生效的；虚拟', chineseExplanation: '实际上起作用的, 虚的, 实质的, 有效的, 事实上生效的；虚拟是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Being actually such in almost every respect.',
    examples: [{ english: 'The passage uses virtual to describe the situation.', malay: 'Maya atau hampir menyerupai.', chinese: '文章用“virtual”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'directory', term: 'directory', normalizedTerm: 'directory', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '目录, 工商名录, 指南；目录', chineseExplanation: '目录, 工商名录, 指南；目录是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'An alphabetical list of names and addresses.',
    examples: [{ english: 'The lesson explains the meaning of directory.', malay: 'Senarai nama atau fail.', chinese: '本课解释了“directory”的含义。' }], level: 1, cefr: 'A2', categories: ['Technology'],
  },
  {
    id: 'beam', term: 'beam', normalizedTerm: 'beam', partOfSpeech: ['noun', 'verb'],
    chineseShort: '横梁, 杆, 光线, 容光焕发；用梁支承, 微笑, 射出光线', chineseExplanation: '横梁, 杆, 光线, 容光焕发；用梁支承, 微笑, 射出光线是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Long thick piece of wood or metal or concrete, etc., used in construction.',
    examples: [{ english: 'The lesson explains the meaning of beam.', malay: 'Rasuk atau pancaran cahaya.', chinese: '本课解释了“beam”的含义。' }], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'appendix', term: 'appendix', normalizedTerm: 'appendix', partOfSpeech: ['noun'],
    chineseShort: '附录, 附加物, 阑尾；增补', chineseExplanation: '附录, 附加物, 阑尾；增补是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Supplementary material that is collected and appended at the back of a book.',
    examples: [{ english: 'The lesson explains the meaning of appendix.', malay: 'Lampiran atau apendiks.', chinese: '本课解释了“appendix”的含义。' }], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'forum', term: 'forum', normalizedTerm: 'forum', partOfSpeech: ['noun'],
    chineseShort: '论坛, 公开讨论的广场, 法庭, 讨论会；讨论会, 专题讨论, 公共论坛', chineseExplanation: '论坛, 公开讨论的广场, 法庭, 讨论会；讨论会, 专题讨论, 公共论坛是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A public meeting or assembly for open discussion.',
    examples: [{ english: 'The lesson explains the meaning of forum.', malay: 'Tempat perbincangan.', chinese: '本课解释了“forum”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'interfere', term: 'interfere', normalizedTerm: 'interfere', partOfSpeech: ['verb'],
    chineseShort: '妨碍, 冲突, 干涉, 抵触；干扰, 干涉, 阻碍, 碰腿', chineseExplanation: '妨碍, 冲突, 干涉, 抵触；干扰, 干涉, 阻碍, 碰腿是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Come between so as to be hindrance or obstacle.',
    examples: [{ english: 'The example shows how to use the verb interfere.', malay: 'Campur tangan atau mengganggu.', chinese: '这个例子展示了如何使用动词“interfere”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'forehead', term: 'forehead', normalizedTerm: 'forehead', partOfSpeech: ['noun'],
    chineseShort: '额, 前额, 前部；额', chineseExplanation: '额, 前额, 前部；额是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The part of the face above the eyes n the large cranial bone forming the front part of the cranium: includes the upper part of the orbits.',
    examples: [{ english: 'The lesson explains the meaning of forehead.', malay: 'Dahi.', chinese: '本课解释了“forehead”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'insert', term: 'insert', normalizedTerm: 'insert', partOfSpeech: ['verb', 'noun'],
    chineseShort: '插入物；插入, 把射入, 添写', chineseExplanation: '插入物；插入, 把射入, 添写是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A folded section placed between the leaves of another publication.',
    examples: [{ english: 'The example shows how to use the verb insert.', malay: 'Memasukkan.', chinese: '这个例子展示了如何使用动词“insert”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'rescue', term: 'rescue', normalizedTerm: 'rescue', partOfSpeech: ['noun', 'verb'],
    chineseShort: '援救, 解救, 营救；援救, 救出, 营救', chineseExplanation: '援救, 解救, 营救；援救, 救出, 营救是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Recovery or preservation from loss or danger.',
    examples: [{ english: 'The lesson explains the meaning of rescue.', malay: 'Menyelamatkan.', chinese: '本课解释了“rescue”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'noon', term: 'noon', normalizedTerm: 'noon', partOfSpeech: ['noun', 'verb'],
    chineseShort: '正午, 中午, 全盛期', chineseExplanation: '正午, 中午, 全盛期是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The middle of the day.',
    examples: [{ english: 'The lesson explains the meaning of noon.', malay: 'Tengah hari.', chinese: '本课解释了“noon”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'handsome', term: 'handsome', normalizedTerm: 'handsome', partOfSpeech: ['adjective', 'verb'],
    chineseShort: '英俊的, 大方的, 慷慨的, 相当可观的, 美观的, 灵敏的', chineseExplanation: '英俊的, 大方的, 慷慨的, 相当可观的, 美观的, 灵敏的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Pleasing in appearance especially by reason of conformity to ideals of form and proportion s given or giving freely.',
    examples: [{ english: 'The passage uses handsome to describe the situation.', malay: 'Kacak.', chinese: '文章用“handsome”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'diagram', term: 'diagram', normalizedTerm: 'diagram', partOfSpeech: ['noun', 'verb'],
    chineseShort: '图表；图解', chineseExplanation: '图表；图解是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A drawing intended to explain how something works; a drawing showing the relation between the parts.',
    examples: [{ english: 'The lesson explains the meaning of diagram.', malay: 'Rajah.', chinese: '本课解释了“diagram”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'vertical', term: 'vertical', normalizedTerm: 'vertical', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '垂直的, 直立的；垂直的, 顶的, 头顶的', chineseExplanation: '垂直的, 直立的；垂直的, 顶的, 头顶的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something that is oriented vertically.',
    examples: [{ english: 'The passage uses vertical to describe the situation.', malay: 'Menegak.', chinese: '文章用“vertical”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'feedback', term: 'feedback', normalizedTerm: 'feedback', partOfSpeech: ['noun', 'verb'],
    chineseShort: '反馈, 反应；反馈', chineseExplanation: '反馈, 反应；反馈是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The process in which part of the output of a system is returned to its input in order to regulate its further output.',
    examples: [{ english: 'The lesson explains the meaning of feedback.', malay: 'Maklum balas.', chinese: '本课解释了“feedback”的含义。' }], level: 1, cefr: 'A2', categories: ['Academic'],
  },
  {
    id: 'safely', term: 'safely', normalizedTerm: 'safely', partOfSpeech: ['adverb'],
    chineseShort: '安全地, 确实地', chineseExplanation: '安全地, 确实地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'With safety; in a safe manner.',
    examples: [{ english: 'The speaker used safely to add detail.', malay: 'Dengan selamat.', chinese: '说话者用“safely”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'diamond', term: 'diamond', normalizedTerm: 'diamond', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '钻石, 菱形；菱形', chineseExplanation: '钻石, 菱形；菱形是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A transparent piece of diamond that has been cut and polished and is valued as a precious gem.',
    examples: [{ english: 'The lesson explains the meaning of diamond.', malay: 'Berlian.', chinese: '本课解释了“diamond”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'remainder', term: 'remainder', normalizedTerm: 'remainder', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '剩余物, 其他人, 残余, 余数；削价出售', chineseExplanation: '剩余物, 其他人, 残余, 余数；削价出售是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Something left after other parts have been taken away.',
    examples: [{ english: 'The lesson explains the meaning of remainder.', malay: 'Baki.', chinese: '本课解释了“remainder”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'intent', term: 'intent', normalizedTerm: 'intent', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '意图, 含义, 故意；专心的, 决心的, 热心的', chineseExplanation: '意图, 含义, 故意；专心的, 决心的, 热心的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The intended meaning of a communication.',
    examples: [{ english: 'The lesson explains the meaning of intent.', malay: 'Niat.', chinese: '本课解释了“intent”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'grasp', term: 'grasp', normalizedTerm: 'grasp', partOfSpeech: ['verb', 'noun'],
    chineseShort: '把握, 抓紧, 理解, 抓, 柄, 控制；抓住, 紧握, 领会', chineseExplanation: '把握, 抓紧, 理解, 抓, 柄, 控制；抓住, 紧握, 领会是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Hold firmly.',
    examples: [{ english: 'The example shows how to use the verb grasp.', malay: 'Memegang atau memahami.', chinese: '这个例子展示了如何使用动词“grasp”。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'memorial', term: 'memorial', normalizedTerm: 'memorial', partOfSpeech: ['noun', 'adjective'],
    chineseShort: '纪念物, 请愿书；记念的, 记忆的', chineseExplanation: '纪念物, 请愿书；记念的, 记忆的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A recognition of meritorious service.',
    examples: [{ english: 'The lesson explains the meaning of memorial.', malay: 'Tugu atau acara peringatan.', chinese: '本课解释了“memorial”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'solely', term: 'solely', normalizedTerm: 'solely', partOfSpeech: ['adverb'],
    chineseShort: '仅仅, 单独地', chineseExplanation: '仅仅, 单独地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Without any others being included or involved.',
    examples: [{ english: 'The speaker used solely to add detail.', malay: 'Semata-mata.', chinese: '说话者用“solely”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'verbal', term: 'verbal', normalizedTerm: 'verbal', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '用言辞的, 言语的, 口头的, 逐字的, 动词的；言语的, 口述的', chineseExplanation: '用言辞的, 言语的, 口头的, 逐字的, 动词的；言语的, 口述的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Communicated in the form of words.',
    examples: [{ english: 'The passage uses verbal to describe the situation.', malay: 'Berkaitan dengan kata-kata.', chinese: '文章用“verbal”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'divine', term: 'divine', normalizedTerm: 'divine', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '神的, 神圣的, 非凡的；神学家', chineseExplanation: '神的, 神圣的, 非凡的；神学家是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Perceive intuitively or through some inexplicable perceptive powers.',
    examples: [{ english: 'The passage uses divine to describe the situation.', malay: 'Bersifat ketuhanan.', chinese: '文章用“divine”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'elder', term: 'elder', normalizedTerm: 'elder', partOfSpeech: ['noun', 'verb'],
    chineseShort: '年长者, 老人, 前辈；年长的, 资深的', chineseExplanation: '年长者, 老人, 前辈；年长的, 资深的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'A person who is older than you are.',
    examples: [{ english: 'The lesson explains the meaning of elder.', malay: 'Orang yang lebih tua.', chinese: '本课解释了“elder”的含义。' }], level: 1, cefr: 'A2', categories: ['Business'],
  },
  {
    id: 'greek', term: 'greek', normalizedTerm: 'greek', partOfSpeech: ['adjective', 'noun'],
    chineseShort: '希腊人, 希腊语；希腊的, 希腊人的', chineseExplanation: '希腊人, 希腊语；希腊的, 希腊人的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The Hellenic branch of the Indo-European family of languages.',
    examples: [{ english: 'The passage uses greek to describe the situation.', malay: 'Bahasa atau orang Yunani.', chinese: '文章用“greek”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'quest', term: 'quest', normalizedTerm: 'quest', partOfSpeech: ['noun', 'verb'],
    chineseShort: '探索, 寻求, 调查；寻找, 找, 追寻猎物', chineseExplanation: '探索, 寻求, 调查；寻找, 找, 追寻猎物是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'The act of searching for something.',
    examples: [{ english: 'The lesson explains the meaning of quest.', malay: 'Pencarian.', chinese: '本课解释了“quest”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sacrifice', term: 'sacrifice', normalizedTerm: 'sacrifice', partOfSpeech: ['noun', 'verb'],
    chineseShort: '牺牲, 供奉, 祭品；牺牲, 祭祀, 贱卖', chineseExplanation: '牺牲, 供奉, 祭品；牺牲, 祭祀, 贱卖是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Personnel that are sacrificed (e.g., surrendered or lost in order to gain an objective).',
    examples: [{ english: 'The lesson explains the meaning of sacrifice.', malay: 'Pengorbanan.', chinese: '本课解释了“sacrifice”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'toxic', term: 'toxic', normalizedTerm: 'toxic', partOfSpeech: ['adjective'],
    chineseShort: '有毒的, 中毒的；中毒的, 毒物的', chineseExplanation: '有毒的, 中毒的；中毒的, 毒物的是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Of or relating to or caused by a toxin or poison.',
    examples: [{ english: 'The passage uses toxic to describe the situation.', malay: 'Beracun.', chinese: '文章用“toxic”来描述这种情况。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'grief', term: 'grief', normalizedTerm: 'grief', partOfSpeech: ['noun', 'verb'],
    chineseShort: '伤心, 忧愁, 悲痛, 不幸, 灾难', chineseExplanation: '伤心, 忧愁, 悲痛, 不幸, 灾难是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Intense sorrow caused by loss of a loved one (especially by death).',
    examples: [{ english: 'The lesson explains the meaning of grief.', malay: 'Kesedihan mendalam.', chinese: '本课解释了“grief”的含义。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'instantly', term: 'instantly', normalizedTerm: 'instantly', partOfSpeech: ['adverb'],
    chineseShort: '立即地, 即刻地', chineseExplanation: '立即地, 即刻地是常见英语词汇，可用于日常交流和基础学习。', englishDefinition: 'Without delay or hesitation; with no time intervening r without any delay.',
    examples: [{ english: 'The speaker used instantly to add detail.', malay: 'Serta-merta.', chinese: '说话者用“instantly”补充细节。' }], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
] satisfies readonly VocabularyItem[]
