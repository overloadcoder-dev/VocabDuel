import type { VocabularyItem } from '../../types'

/** Everyday, concrete A1-A2 vocabulary for foundation learners. */
export const level1Vocabulary = [
  {
    id: 'apple', term: 'apple', normalizedTerm: 'apple', partOfSpeech: ['noun'], ipa: '/ˈæpəl/',
    chineseShort: '苹果', chineseExplanation: '一种圆形水果，通常有红色或绿色的果皮。', englishDefinition: 'A round fruit with red, green, or yellow skin.',
    examples: [{ english: 'She packed an apple for lunch.', chinese: '她带了一个苹果当午餐。' }], collocations: ['apple tree', 'apple juice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'borrow', term: 'borrow', normalizedTerm: 'borrow', partOfSpeech: ['verb'], ipa: '/ˈbɒrəʊ/',
    chineseShort: '借入；借用', chineseExplanation: '暂时使用属于他人的东西，之后归还。注意 borrow 是“借入”，lend 是“借出”。', englishDefinition: 'To take and use something belonging to someone else with the intention of returning it.',
    examples: [{ english: 'May I borrow your dictionary?', chinese: '我可以借用你的词典吗？' }], collocations: ['borrow money', 'borrow a book'], antonyms: ['lend'], level: 1, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'journey', term: 'journey', normalizedTerm: 'journey', partOfSpeech: ['noun'], ipa: '/ˈdʒɜːni/',
    chineseShort: '旅程；行程', chineseExplanation: '从一个地方前往另一个地方的过程，常指较长的行程。', englishDefinition: 'The act of travelling from one place to another, especially over a long distance.',
    examples: [{ english: 'The train journey took three hours.', chinese: '这段火车旅程花了三个小时。' }], collocations: ['long journey', 'return journey'], synonyms: ['trip'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'quiet', term: 'quiet', normalizedTerm: 'quiet', partOfSpeech: ['adjective'], ipa: '/ˈkwaɪət/',
    chineseShort: '安静的', chineseExplanation: '几乎没有声音或活动的，也可形容人不爱说话。', englishDefinition: 'Making very little noise or having little activity.',
    examples: [{ english: 'The library is quiet in the morning.', chinese: '图书馆早上很安静。' }], antonyms: ['noisy'], level: 1, cefr: 'A1', categories: ['Daily English', 'School'],
  },
  {
    id: 'choose', term: 'choose', normalizedTerm: 'choose', partOfSpeech: ['verb'], ipa: '/tʃuːz/',
    chineseShort: '选择；挑选', chineseExplanation: '从两个或多个可能性中作出决定。', englishDefinition: 'To decide which person or thing you want from a number of possibilities.',
    examples: [{ english: 'You can choose any seat you like.', chinese: '你可以选择任何你喜欢的座位。' }], collocations: ['choose carefully', 'choose between'], synonyms: ['select'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'arrive', term: 'arrive', normalizedTerm: 'arrive', partOfSpeech: ['verb'], ipa: '/əˈraɪv/',
    chineseShort: '到达', chineseExplanation: '到达某个地点；arrive at 常接小地点，arrive in 常接城市或国家。', englishDefinition: 'To reach a place at the end of a journey.',
    examples: [{ english: 'We expect to arrive at the airport before noon.', chinese: '我们预计中午前到达机场。' }], collocations: ['arrive early', 'arrive at'], antonyms: ['depart'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'home', term: 'home', normalizedTerm: 'home', partOfSpeech: ['noun', 'adverb'], ipa: '/həʊm/',
    chineseShort: '家；在家', chineseExplanation: '一个人居住并感到归属的地方，也可表示回到或处于该处。', englishDefinition: 'The place where someone lives and feels they belong.',
    examples: [{ english: 'I usually get home at six.', chinese: '我通常六点到家。' }], collocations: ['at home', 'go home'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'teacher', term: 'teacher', normalizedTerm: 'teacher', partOfSpeech: ['noun'], ipa: '/ˈtiːtʃə/',
    chineseShort: '教师；老师', chineseExplanation: '在学校或其他环境中帮助别人学习知识或技能的人。', englishDefinition: 'A person whose job is to help others learn.',
    examples: [{ english: 'Our teacher explained the new lesson.', chinese: '老师讲解了新课。' }], collocations: ['English teacher', 'class teacher'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'ticket', term: 'ticket', normalizedTerm: 'ticket', partOfSpeech: ['noun'], ipa: '/ˈtɪkɪt/',
    chineseShort: '票；券', chineseExplanation: '允许乘车、乘机或进入某个场所的纸质或电子凭证。', englishDefinition: 'A paper or electronic pass that allows travel or entry.',
    examples: [{ english: 'I bought a train ticket online.', chinese: '我在网上买了一张火车票。' }], collocations: ['train ticket', 'return ticket'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'remember', term: 'remember', normalizedTerm: 'remember', partOfSpeech: ['verb'], ipa: '/rɪˈmembə/',
    chineseShort: '记得；想起', chineseExplanation: '在脑中保留某人或某事的信息，或再次想起它。', englishDefinition: 'To keep information in your mind or bring it back to mind.',
    examples: [{ english: 'Remember to bring your notebook.', chinese: '记得带上你的笔记本。' }], collocations: ['remember clearly', 'remember to do'], antonyms: ['forget'], level: 1, cefr: 'A2', categories: ['Daily English', 'School'],
  },
  {
    id: 'mother', term: 'mother', normalizedTerm: 'mother', partOfSpeech: ['noun'], ipa: '/mˈʌðə/',
    chineseShort: '母亲；妈妈', chineseExplanation: '女性家长，也可用来称呼自己的妈妈。', englishDefinition: 'A female parent.',
    examples: [{ english: 'My mother makes breakfast every morning.', chinese: '我妈妈每天早上做早餐。' }], collocations: ['my mother', 'mother and child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'father', term: 'father', normalizedTerm: 'father', partOfSpeech: ['noun'], ipa: '/fˈɑːðə/',
    chineseShort: '父亲；爸爸', chineseExplanation: '男性家长，也可用来称呼自己的爸爸。', englishDefinition: 'A male parent.',
    examples: [{ english: 'My father goes to work by car.', chinese: '我爸爸开车去上班。' }], collocations: ['my father', 'father and son'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'parent', term: 'parent', normalizedTerm: 'parent', partOfSpeech: ['noun'], ipa: '/pˈeəɹənt/',
    chineseShort: '父母之一；家长', chineseExplanation: '孩子的父亲或母亲，也可泛指家长。', englishDefinition: 'A mother or father of a child.',
    examples: [{ english: 'Please ask your parent to sign the form.', chinese: '请让你的家长在表格上签名。' }], collocations: ['parent meeting', 'single parent'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'brother', term: 'brother', normalizedTerm: 'brother', partOfSpeech: ['noun'], ipa: '/bɹˈʌðə/',
    chineseShort: '兄弟；哥哥；弟弟', chineseExplanation: '与自己有相同父母或其中一位相同父母的男性亲属。', englishDefinition: 'A boy or man who has the same parents as you.',
    examples: [{ english: 'My brother is two years younger than me.', chinese: '我弟弟比我小两岁。' }], collocations: ['older brother', 'younger brother'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sister', term: 'sister', normalizedTerm: 'sister', partOfSpeech: ['noun'], ipa: '/sˈɪstə/',
    chineseShort: '姐妹；姐姐；妹妹', chineseExplanation: '与自己有相同父母或其中一位相同父母的女性亲属。', englishDefinition: 'A girl or woman who has the same parents as you.',
    examples: [{ english: 'My sister studies at the same school.', chinese: '我姐姐在同一所学校读书。' }], collocations: ['older sister', 'younger sister'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'family', term: 'family', normalizedTerm: 'family', partOfSpeech: ['noun'], ipa: '/fˈamɪli/',
    chineseShort: '家庭；家人', chineseExplanation: '由父母、孩子和其他亲属组成的一群人。', englishDefinition: 'A group of people who are related to each other.',
    examples: [{ english: 'My family eats dinner together.', chinese: '我的家人一起吃晚餐。' }], collocations: ['family member', 'family dinner'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'child', term: 'child', normalizedTerm: 'child', partOfSpeech: ['noun'], ipa: '/tʃˈaɪld/',
    chineseShort: '儿童；孩子', chineseExplanation: '还没有长大成人的年轻人。', englishDefinition: 'A young person who is not yet an adult.',
    examples: [{ english: 'The child is playing in the garden.', chinese: '那个孩子正在花园里玩。' }], collocations: ['young child', 'only child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'baby', term: 'baby', normalizedTerm: 'baby', partOfSpeech: ['noun'], ipa: '/bˈeɪbi/',
    chineseShort: '婴儿；宝宝', chineseExplanation: '非常年幼的孩子，通常还不会独立照顾自己。', englishDefinition: 'A very young child.',
    examples: [{ english: 'The baby is sleeping now.', chinese: '宝宝现在正在睡觉。' }], collocations: ['baby boy', 'baby girl'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'boy', term: 'boy', normalizedTerm: 'boy', partOfSpeech: ['noun'], ipa: '/bˈɔɪ/',
    chineseShort: '男孩', chineseExplanation: '男性儿童或年轻男性。', englishDefinition: 'A male child or young man.',
    examples: [{ english: 'The boy is holding a red ball.', chinese: '那个男孩拿着一个红色的球。' }], collocations: ['young boy', 'little boy'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'girl', term: 'girl', normalizedTerm: 'girl', partOfSpeech: ['noun'], ipa: '/ɡˈɜːl/',
    chineseShort: '女孩', chineseExplanation: '女性儿童或年轻女性。', englishDefinition: 'A female child or young woman.',
    examples: [{ english: 'The girl is reading a book.', chinese: '那个女孩正在看书。' }], collocations: ['young girl', 'little girl'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'man', term: 'man', normalizedTerm: 'man', partOfSpeech: ['noun'], ipa: '/mˈan/',
    chineseShort: '男人；男子', chineseExplanation: '成年的男性。', englishDefinition: 'An adult male person.',
    examples: [{ english: 'The man is waiting for the bus.', chinese: '那个男人正在等巴士。' }], collocations: ['young man', 'old man'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'woman', term: 'woman', normalizedTerm: 'woman', partOfSpeech: ['noun'], ipa: '/wˈʊmən/',
    chineseShort: '女人；女子', chineseExplanation: '成年的女性。', englishDefinition: 'An adult female person.',
    examples: [{ english: 'The woman works at the bank.', chinese: '那个女人在银行工作。' }], collocations: ['young woman', 'old woman'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'friend', term: 'friend', normalizedTerm: 'friend', partOfSpeech: ['noun'], ipa: '/fɹˈɛnd/',
    chineseShort: '朋友', chineseExplanation: '你认识、喜欢并愿意一起相处的人。', englishDefinition: 'A person you know well and like.',
    examples: [{ english: 'I met my friend after school.', chinese: '放学后我见了我的朋友。' }], collocations: ['best friend', 'close friend'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'person', term: 'person', normalizedTerm: 'person', partOfSpeech: ['noun'], ipa: '/pˈɜːsən/',
    chineseShort: '人；个人', chineseExplanation: '一个男人、女人或孩子。', englishDefinition: 'A man, woman, or child.',
    examples: [{ english: 'Only one person can sit here.', chinese: '这里只能坐一个人。' }], collocations: ['young person', 'one person'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'people', term: 'people', normalizedTerm: 'people', partOfSpeech: ['noun'], ipa: '/pˈiːpəl/',
    chineseShort: '人们', chineseExplanation: 'person 的复数形式，用来表示多个人。', englishDefinition: 'More than one person.',
    examples: [{ english: 'Many people use phones every day.', chinese: '很多人每天都使用手机。' }], collocations: ['young people', 'many people'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'name', term: 'name', normalizedTerm: 'name', partOfSpeech: ['noun'], ipa: '/nˈeɪm/',
    chineseShort: '名字；名称', chineseExplanation: '用来称呼某人、某地或某物的词。', englishDefinition: 'A word used to identify a person, place, or thing.',
    examples: [{ english: 'Please write your name here.', chinese: '请在这里写下你的名字。' }], collocations: ['first name', 'full name'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'age', term: 'age', normalizedTerm: 'age', partOfSpeech: ['noun'], ipa: '/ˈeɪdʒ/',
    chineseShort: '年龄', chineseExplanation: '一个人或事物从出生或开始到现在经过的时间。', englishDefinition: 'The number of years someone or something has lived or existed.',
    examples: [{ english: 'What is your age?', chinese: '你的年龄是多少？' }], collocations: ['same age', 'at the age of'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'husband', term: 'husband', normalizedTerm: 'husband', partOfSpeech: ['noun'], ipa: '/hˈʌsbənd/',
    chineseShort: '丈夫', chineseExplanation: '已婚女性或男性的男性配偶。', englishDefinition: 'The man someone is married to.',
    examples: [{ english: 'Her husband cooks dinner on Fridays.', chinese: '她的丈夫星期五做晚餐。' }], collocations: ['her husband', 'husband and wife'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wife', term: 'wife', normalizedTerm: 'wife', partOfSpeech: ['noun'], ipa: '/wˈaɪf/',
    chineseShort: '妻子', chineseExplanation: '已婚男性或女性的女性配偶。', englishDefinition: 'The woman someone is married to.',
    examples: [{ english: 'His wife works in a hospital.', chinese: '他的妻子在医院工作。' }], collocations: ['his wife', 'husband and wife'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'neighbour', term: 'neighbour', normalizedTerm: 'neighbour', partOfSpeech: ['noun'], ipa: '/nˈeɪbə/',
    chineseShort: '邻居', chineseExplanation: '住在你家附近的人。', englishDefinition: 'A person who lives near you.',
    examples: [{ english: 'Our neighbour has a friendly dog.', chinese: '我们的邻居有一只友善的狗。' }], collocations: ['next-door neighbour', 'friendly neighbour'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'house', term: 'house', normalizedTerm: 'house', partOfSpeech: ['noun'], ipa: '/hˈaʊs/',
    chineseShort: '房子；住宅', chineseExplanation: '供人居住的建筑物，通常是一户家庭的住所。', englishDefinition: 'A building where people live.',
    examples: [{ english: 'Their house has a small garden.', chinese: '他们的房子有一个小花园。' }], collocations: ['big house', 'new house'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'room', term: 'room', normalizedTerm: 'room', partOfSpeech: ['noun'], ipa: '/ɹˈuːm/',
    chineseShort: '房间', chineseExplanation: '建筑物内由墙隔开的空间。', englishDefinition: 'A part of a building separated by walls.',
    examples: [{ english: 'My room is next to the kitchen.', chinese: '我的房间在厨房旁边。' }], collocations: ['living room', 'small room'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bedroom', term: 'bedroom', normalizedTerm: 'bedroom', partOfSpeech: ['noun'], ipa: '/bˈɛdɹuːm/',
    chineseShort: '卧室', chineseExplanation: '主要用来睡觉的房间。', englishDefinition: 'A room used mainly for sleeping.',
    examples: [{ english: 'There are two beds in the bedroom.', chinese: '卧室里有两张床。' }], collocations: ['main bedroom', 'small bedroom'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bathroom', term: 'bathroom', normalizedTerm: 'bathroom', partOfSpeech: ['noun'], ipa: '/bˈaθɹuːm/',
    chineseShort: '浴室；卫生间', chineseExplanation: '有浴缸、淋浴或厕所的房间。', englishDefinition: 'A room with a bath, shower, or toilet.',
    examples: [{ english: 'The bathroom is upstairs.', chinese: '浴室在楼上。' }], collocations: ['bathroom door', 'use the bathroom'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'kitchen', term: 'kitchen', normalizedTerm: 'kitchen', partOfSpeech: ['noun'], ipa: '/kˈɪtʃən/',
    chineseShort: '厨房', chineseExplanation: '准备和烹饪食物的房间。', englishDefinition: 'A room where food is prepared and cooked.',
    examples: [{ english: 'Dad is cooking in the kitchen.', chinese: '爸爸正在厨房里做饭。' }], collocations: ['kitchen table', 'kitchen door'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'door', term: 'door', normalizedTerm: 'door', partOfSpeech: ['noun'], ipa: '/dˈɔː/',
    chineseShort: '门', chineseExplanation: '建筑物、房间或车辆上可以打开和关闭的入口。', englishDefinition: 'A movable part that opens and closes an entrance.',
    examples: [{ english: 'Please close the door.', chinese: '请把门关上。' }], collocations: ['front door', 'open the door'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'window', term: 'window', normalizedTerm: 'window', partOfSpeech: ['noun'], ipa: '/wˈɪndəʊ/',
    chineseShort: '窗户', chineseExplanation: '墙上装有玻璃、让光线和空气进入的开口。', englishDefinition: 'An opening in a wall with glass that lets in light.',
    examples: [{ english: 'Please open the window.', chinese: '请把窗户打开。' }], collocations: ['bedroom window', 'open the window'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wall', term: 'wall', normalizedTerm: 'wall', partOfSpeech: ['noun'], ipa: '/wˈɔːl/',
    chineseShort: '墙；墙壁', chineseExplanation: '建筑物中分隔或围住空间的竖直表面。', englishDefinition: 'A vertical surface that forms the side of a room or building.',
    examples: [{ english: 'There is a clock on the wall.', chinese: '墙上有一个时钟。' }], collocations: ['brick wall', 'on the wall'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'floor', term: 'floor', normalizedTerm: 'floor', partOfSpeech: ['noun'], ipa: '/flˈɔː/',
    chineseShort: '地板；楼层', chineseExplanation: '房间中供人站立和行走的表面，也可表示楼层。', englishDefinition: 'The surface you walk on inside a room, or a level of a building.',
    examples: [{ english: 'Your bag is on the floor.', chinese: '你的包在地板上。' }], collocations: ['ground floor', 'wooden floor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'table', term: 'table', normalizedTerm: 'table', partOfSpeech: ['noun'], ipa: '/tˈeɪbəl/',
    chineseShort: '桌子', chineseExplanation: '有平面和支撑脚、用来放东西或吃饭的家具。', englishDefinition: 'A piece of furniture with a flat top and legs.',
    examples: [{ english: 'The plates are on the table.', chinese: '盘子在桌子上。' }], collocations: ['dining table', 'table tennis'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'chair', term: 'chair', normalizedTerm: 'chair', partOfSpeech: ['noun'], ipa: '/tʃˈeə/',
    chineseShort: '椅子', chineseExplanation: '有座位和靠背、供一个人坐的家具。', englishDefinition: 'A piece of furniture for one person to sit on.',
    examples: [{ english: 'Please take a chair and sit down.', chinese: '请拿一张椅子坐下。' }], collocations: ['wooden chair', 'office chair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bed', term: 'bed', normalizedTerm: 'bed', partOfSpeech: ['noun'], ipa: '/bˈɛd/',
    chineseShort: '床', chineseExplanation: '供人躺下和睡觉的家具。', englishDefinition: 'A piece of furniture used for sleeping.',
    examples: [{ english: 'I go to bed at eleven.', chinese: '我十一点上床睡觉。' }], collocations: ['go to bed', 'single bed'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'lamp', term: 'lamp', normalizedTerm: 'lamp', partOfSpeech: ['noun'], ipa: '/lˈamp/',
    chineseShort: '灯；台灯', chineseExplanation: '用电或其他能源产生光的装置。', englishDefinition: 'A device that produces light.',
    examples: [{ english: 'There is a lamp beside my bed.', chinese: '我的床边有一盏灯。' }], collocations: ['desk lamp', 'bedside lamp'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'key', term: 'key', normalizedTerm: 'key', partOfSpeech: ['noun'], ipa: '/kˈiː/',
    chineseShort: '钥匙', chineseExplanation: '用来开锁或启动某些设备的小件物品。', englishDefinition: 'A small object used to open a lock.',
    examples: [{ english: 'I cannot find my house key.', chinese: '我找不到家里的钥匙。' }], collocations: ['house key', 'car key'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'garden', term: 'garden', normalizedTerm: 'garden', partOfSpeech: ['noun'], ipa: '/ɡˈɑːdən/',
    chineseShort: '花园；园子', chineseExplanation: '房屋旁边种植花草或蔬菜的户外区域。', englishDefinition: 'An area of land where flowers, plants, or vegetables are grown.',
    examples: [{ english: 'The children are playing in the garden.', chinese: '孩子们正在花园里玩。' }], collocations: ['flower garden', 'back garden'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'box', term: 'box', normalizedTerm: 'box', partOfSpeech: ['noun'], ipa: '/bˈɒks/',
    chineseShort: '盒子；箱子', chineseExplanation: '通常有四边和盖子的容器，用来装东西。', englishDefinition: 'A container with flat sides, used for keeping things.',
    examples: [{ english: 'The shoes are in the box.', chinese: '鞋子在盒子里。' }], collocations: ['cardboard box', 'small box'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bag', term: 'bag', normalizedTerm: 'bag', partOfSpeech: ['noun'], ipa: '/bˈaɡ/',
    chineseShort: '袋；包', chineseExplanation: '用来装和携带物品的容器。', englishDefinition: 'A container used for carrying things.',
    examples: [{ english: 'She put the books in her bag.', chinese: '她把书放进包里。' }], collocations: ['school bag', 'shopping bag'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'phone', term: 'phone', normalizedTerm: 'phone', partOfSpeech: ['noun'], ipa: '/fˈəʊn/',
    chineseShort: '电话；手机', chineseExplanation: '用来与别人通话或发送信息的设备。', englishDefinition: 'A device used to speak to people or send messages.',
    examples: [{ english: 'My phone is on the desk.', chinese: '我的手机在桌上。' }], collocations: ['mobile phone', 'phone number'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'computer', term: 'computer', normalizedTerm: 'computer', partOfSpeech: ['noun'], ipa: '/kəmpjˈuːtə/',
    chineseShort: '电脑；计算机', chineseExplanation: '用来处理信息、工作、学习或娱乐的电子设备。', englishDefinition: 'An electronic machine used to store and work with information.',
    examples: [{ english: 'We use a computer in class.', chinese: '我们在课堂上使用电脑。' }], collocations: ['computer screen', 'computer game'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'clock', term: 'clock', normalizedTerm: 'clock', partOfSpeech: ['noun'], ipa: '/klˈɒk/',
    chineseShort: '时钟', chineseExplanation: '显示时间的装置，通常放在墙上或桌上。', englishDefinition: 'A device that shows the time.',
    examples: [{ english: 'The clock says nine o\'clock.', chinese: '时钟显示九点。' }], collocations: ['wall clock', 'alarm clock'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bread', term: 'bread', normalizedTerm: 'bread', partOfSpeech: ['noun'], ipa: '/bɹˈɛd/',
    chineseShort: '面包', chineseExplanation: '用面粉和水制成并烘烤的常见食物。', englishDefinition: 'Food made from flour and water and baked.',
    examples: [{ english: 'I eat bread with eggs for breakfast.', chinese: '我早餐吃面包和鸡蛋。' }], collocations: ['white bread', 'piece of bread'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'rice', term: 'rice', normalizedTerm: 'rice', partOfSpeech: ['noun'], ipa: '/ɹˈaɪs/',
    chineseShort: '米饭；大米', chineseExplanation: '一种常见谷物，煮熟后可作为主食。', englishDefinition: 'Small grains that are cooked and eaten as food.',
    examples: [{ english: 'We usually eat rice for dinner.', chinese: '我们晚餐通常吃米饭。' }], collocations: ['fried rice', 'rice bowl'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'water', term: 'water', normalizedTerm: 'water', partOfSpeech: ['noun'], ipa: '/wˈɔːtə/',
    chineseShort: '水', chineseExplanation: '没有颜色、气味很淡，人和动物都需要饮用的液体。', englishDefinition: 'A clear liquid that people and animals need to live.',
    examples: [{ english: 'Please drink more water.', chinese: '请多喝水。' }], collocations: ['drinking water', 'glass of water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'milk', term: 'milk', normalizedTerm: 'milk', partOfSpeech: ['noun'], ipa: '/mˈɪlk/',
    chineseShort: '牛奶；奶', chineseExplanation: '通常来自牛的白色饮料，也可用于制作其他食物。', englishDefinition: 'A white drink that usually comes from cows.',
    examples: [{ english: 'The child drinks milk every morning.', chinese: '那个孩子每天早上喝牛奶。' }], collocations: ['glass of milk', 'fresh milk'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'coffee', term: 'coffee', normalizedTerm: 'coffee', partOfSpeech: ['noun'], ipa: '/kˈɒfi/',
    chineseShort: '咖啡', chineseExplanation: '用烘焙咖啡豆制作的饮料。', englishDefinition: 'A drink made from roasted coffee beans.',
    examples: [{ english: 'I drink coffee after breakfast.', chinese: '我早餐后喝咖啡。' }], collocations: ['cup of coffee', 'black coffee'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tea', term: 'tea', normalizedTerm: 'tea', partOfSpeech: ['noun'], ipa: '/tˈiː/',
    chineseShort: '茶', chineseExplanation: '用茶叶泡制的热饮或冷饮。', englishDefinition: 'A drink made by putting tea leaves in hot water.',
    examples: [{ english: 'Would you like some tea?', chinese: '你想喝点茶吗？' }], collocations: ['cup of tea', 'green tea'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'juice', term: 'juice', normalizedTerm: 'juice', partOfSpeech: ['noun'], ipa: '/dʒˈuːs/',
    chineseShort: '果汁', chineseExplanation: '从水果或蔬菜中榨出的饮料。', englishDefinition: 'A drink made from the liquid of fruit or vegetables.',
    examples: [{ english: 'She ordered orange juice.', chinese: '她点了橙汁。' }], collocations: ['orange juice', 'fruit juice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'egg', term: 'egg', normalizedTerm: 'egg', partOfSpeech: ['noun'], ipa: '/ˈɛɡ/',
    chineseShort: '蛋；鸡蛋', chineseExplanation: '鸟类等动物产下的食物，日常通常指鸡蛋。', englishDefinition: 'An oval food produced by birds, especially chickens.',
    examples: [{ english: 'I had an egg for breakfast.', chinese: '我早餐吃了一个鸡蛋。' }], collocations: ['boiled egg', 'fried egg'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'meat', term: 'meat', normalizedTerm: 'meat', partOfSpeech: ['noun'], ipa: '/mˈiːt/',
    chineseShort: '肉', chineseExplanation: '作为食物食用的动物肉。', englishDefinition: 'The flesh of animals eaten as food.',
    examples: [{ english: 'We do not eat much meat.', chinese: '我们不常吃很多肉。' }], collocations: ['red meat', 'piece of meat'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'fish', term: 'fish', normalizedTerm: 'fish', partOfSpeech: ['noun'], ipa: '/fˈɪʃ/',
    chineseShort: '鱼；鱼肉', chineseExplanation: '生活在水中的动物，也可指作为食物的鱼肉。', englishDefinition: 'An animal that lives in water, or its meat as food.',
    examples: [{ english: 'We had fish and rice for lunch.', chinese: '我们午餐吃了鱼和米饭。' }], collocations: ['fresh fish', 'fish soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'chicken', term: 'chicken', normalizedTerm: 'chicken', partOfSpeech: ['noun'], ipa: '/tʃˈɪkɪn/',
    chineseShort: '鸡；鸡肉', chineseExplanation: '一种常见家禽，也可指它的肉。', englishDefinition: 'A common farm bird, or its meat as food.',
    examples: [{ english: 'We cooked chicken for dinner.', chinese: '我们晚餐煮了鸡肉。' }], collocations: ['fried chicken', 'chicken soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'soup', term: 'soup', normalizedTerm: 'soup', partOfSpeech: ['noun'], ipa: '/sˈuːp/',
    chineseShort: '汤', chineseExplanation: '用水、肉、蔬菜等煮成的液体食物。', englishDefinition: 'A liquid food made by cooking meat or vegetables in water.',
    examples: [{ english: 'The soup is hot.', chinese: '这碗汤很热。' }], collocations: ['hot soup', 'chicken soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cake', term: 'cake', normalizedTerm: 'cake', partOfSpeech: ['noun'], ipa: '/kˈeɪk/',
    chineseShort: '蛋糕', chineseExplanation: '通常由面粉、糖和鸡蛋烘焙而成的甜食。', englishDefinition: 'A sweet baked food made with flour, sugar, and eggs.',
    examples: [{ english: 'We bought a cake for her birthday.', chinese: '我们为她的生日买了一个蛋糕。' }], collocations: ['birthday cake', 'piece of cake'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sugar', term: 'sugar', normalizedTerm: 'sugar', partOfSpeech: ['noun'], ipa: '/ʃˈʊɡə/',
    chineseShort: '糖', chineseExplanation: '有甜味、常加入饮料或食物中的物质。', englishDefinition: 'A sweet substance added to food and drinks.',
    examples: [{ english: 'Do you take sugar in your coffee?', chinese: '你的咖啡要加糖吗？' }], collocations: ['white sugar', 'spoon of sugar'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'salt', term: 'salt', normalizedTerm: 'salt', partOfSpeech: ['noun'], ipa: '/sˈɒlt/',
    chineseShort: '盐', chineseExplanation: '有咸味、常用来给食物调味的白色物质。', englishDefinition: 'A white substance used to add a salty taste to food.',
    examples: [{ english: 'Add a little salt to the soup.', chinese: '在汤里加一点盐。' }], collocations: ['sea salt', 'add salt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'banana', term: 'banana', normalizedTerm: 'banana', partOfSpeech: ['noun'], ipa: '/bɐnˈɑːnə/',
    chineseShort: '香蕉', chineseExplanation: '一种长形、通常有黄色外皮的水果。', englishDefinition: 'A long fruit with yellow skin.',
    examples: [{ english: 'He ate a banana after lunch.', chinese: '他午餐后吃了一根香蕉。' }], collocations: ['ripe banana', 'banana cake'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'orange', term: 'orange', normalizedTerm: 'orange', partOfSpeech: ['noun'], ipa: '/ˈɒɹɪndʒ/',
    chineseShort: '橙子；橙色', chineseExplanation: '一种圆形柑橘类水果，也可表示橙色。', englishDefinition: 'A round citrus fruit, or the color between red and yellow.',
    examples: [{ english: 'I bought three oranges at the market.', chinese: '我在市场买了三个橙子。' }], collocations: ['orange juice', 'orange peel'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tomato', term: 'tomato', normalizedTerm: 'tomato', partOfSpeech: ['noun'], ipa: '/təmˈɑːtəʊ/',
    chineseShort: '番茄；西红柿', chineseExplanation: '一种通常为红色、可生吃或烹煮的食物。', englishDefinition: 'A soft red fruit often used as a vegetable in cooking.',
    examples: [{ english: 'Please cut the tomato into pieces.', chinese: '请把番茄切成小块。' }], collocations: ['tomato soup', 'tomato sauce'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'potato', term: 'potato', normalizedTerm: 'potato', partOfSpeech: ['noun'], ipa: '/pətˈeɪtəʊ/',
    chineseShort: '马铃薯；土豆', chineseExplanation: '生长在地下、常被烹煮食用的蔬菜。', englishDefinition: 'A round vegetable that grows under the ground.',
    examples: [{ english: 'We need two potatoes for the soup.', chinese: '这道汤需要两个马铃薯。' }], collocations: ['baked potato', 'potato soup'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'breakfast', term: 'breakfast', normalizedTerm: 'breakfast', partOfSpeech: ['noun'], ipa: '/bɹˈɛkfəst/',
    chineseShort: '早餐', chineseExplanation: '一天中通常在早上吃的第一餐。', englishDefinition: 'The first meal of the day, usually eaten in the morning.',
    examples: [{ english: 'Breakfast is ready at seven.', chinese: '早餐七点准备好。' }], collocations: ['eat breakfast', 'breakfast time'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'school', term: 'school', normalizedTerm: 'school', partOfSpeech: ['noun'], ipa: '/skˈuːl/',
    chineseShort: '学校', chineseExplanation: '学生接受教育和学习知识的地方。', englishDefinition: 'A place where children or students go to learn.',
    examples: [{ english: 'Our school starts at eight.', chinese: '我们学校八点开始上课。' }], collocations: ['go to school', 'school day'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'student', term: 'student', normalizedTerm: 'student', partOfSpeech: ['noun'], ipa: '/stjˈuːdənt/',
    chineseShort: '学生', chineseExplanation: '在学校、学院或课程中学习的人。', englishDefinition: 'A person who is studying at a school or course.',
    examples: [{ english: 'The student asked a question.', chinese: '那名学生问了一个问题。' }], collocations: ['school student', 'new student'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'class', term: 'class', normalizedTerm: 'class', partOfSpeech: ['noun'], ipa: '/klˈas/',
    chineseShort: '班级；课', chineseExplanation: '一起学习的一群学生，也可表示一节课。', englishDefinition: 'A group of students who learn together, or a lesson.',
    examples: [{ english: 'Our English class starts at ten.', chinese: '我们的英语课十点开始。' }], collocations: ['English class', 'in class'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'lesson', term: 'lesson', normalizedTerm: 'lesson', partOfSpeech: ['noun'], ipa: '/lˈɛsən/',
    chineseShort: '课；课程', chineseExplanation: '老师在一段时间内教授的学习内容。', englishDefinition: 'A period of time when someone is taught something.',
    examples: [{ english: 'Today\'s lesson is about food.', chinese: '今天的课程是关于食物。' }], collocations: ['English lesson', 'music lesson'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'book', term: 'book', normalizedTerm: 'book', partOfSpeech: ['noun'], ipa: '/bˈʊk/',
    chineseShort: '书', chineseExplanation: '由许多页组成、印有文字或图片的阅读材料。', englishDefinition: 'A set of printed pages joined together for reading.',
    examples: [{ english: 'This book is easy to read.', chinese: '这本书很容易读。' }], collocations: ['read a book', 'school book'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'page', term: 'page', normalizedTerm: 'page', partOfSpeech: ['noun'], ipa: '/pˈeɪdʒ/',
    chineseShort: '页；页面', chineseExplanation: '书、杂志或文件中的一面纸，也可指网页的一页。', englishDefinition: 'One side of a sheet in a book or document.',
    examples: [{ english: 'Please turn to page ten.', chinese: '请翻到第十页。' }], collocations: ['front page', 'page number'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'pen', term: 'pen', normalizedTerm: 'pen', partOfSpeech: ['noun'], ipa: '/pˈɛn/',
    chineseShort: '钢笔；笔', chineseExplanation: '用墨水写字的工具。', englishDefinition: 'A tool for writing with ink.',
    examples: [{ english: 'Can I use your pen?', chinese: '我可以用你的笔吗？' }], collocations: ['blue pen', 'ballpoint pen'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'pencil', term: 'pencil', normalizedTerm: 'pencil', partOfSpeech: ['noun'], ipa: '/pˈɛnsəl/',
    chineseShort: '铅笔', chineseExplanation: '用石墨芯写字或画画的工具，可以擦除。', englishDefinition: 'A tool for writing or drawing that can usually be erased.',
    examples: [{ english: 'Write your answer in pencil.', chinese: '请用铅笔写答案。' }], collocations: ['pencil case', 'colour pencil'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'paper', term: 'paper', normalizedTerm: 'paper', partOfSpeech: ['noun'], ipa: '/pˈeɪpə/',
    chineseShort: '纸；纸张', chineseExplanation: '用于书写、绘画、印刷或包装的薄材料。', englishDefinition: 'A thin material used for writing, drawing, or printing.',
    examples: [{ english: 'I need a piece of paper.', chinese: '我需要一张纸。' }], collocations: ['piece of paper', 'paper bag'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'desk', term: 'desk', normalizedTerm: 'desk', partOfSpeech: ['noun'], ipa: '/dˈɛsk/',
    chineseShort: '书桌；课桌', chineseExplanation: '用于学习或工作的桌子。', englishDefinition: 'A table used for studying or working.',
    examples: [{ english: 'My books are on the desk.', chinese: '我的书在书桌上。' }], collocations: ['school desk', 'office desk'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'question', term: 'question', normalizedTerm: 'question', partOfSpeech: ['noun'], ipa: '/kwˈɛstʃən/',
    chineseShort: '问题', chineseExplanation: '为了得到信息或答案而提出的话。', englishDefinition: 'Something you ask in order to get information.',
    examples: [{ english: 'Please answer the first question.', chinese: '请回答第一个问题。' }], collocations: ['ask a question', 'easy question'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'answer', term: 'answer', normalizedTerm: 'answer', partOfSpeech: ['noun', 'verb'], ipa: '/ˈansə/',
    chineseShort: '答案；回答', chineseExplanation: '对问题作出的回应，也可表示回答问题的动作。', englishDefinition: 'A reply to a question, or to give such a reply.',
    examples: [{ english: 'I know the answer to this question.', chinese: '我知道这个问题的答案。' }], collocations: ['correct answer', 'answer a question'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'word', term: 'word', normalizedTerm: 'word', partOfSpeech: ['noun'], ipa: '/wˈɜːd/',
    chineseShort: '单词；词', chineseExplanation: '语言中具有意义的一个基本单位。', englishDefinition: 'A single unit of language that has meaning.',
    examples: [{ english: 'I do not know this English word.', chinese: '我不认识这个英文单词。' }], collocations: ['English word', 'new word'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'sentence', term: 'sentence', normalizedTerm: 'sentence', partOfSpeech: ['noun'], ipa: '/sˈɛntəns/',
    chineseShort: '句子', chineseExplanation: '由一个或多个词组成、表达完整意思的一组词。', englishDefinition: 'A group of words that expresses a complete idea.',
    examples: [{ english: 'Write one sentence about your family.', chinese: '写一句关于你家人的句子。' }], collocations: ['short sentence', 'complete sentence'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'test', term: 'test', normalizedTerm: 'test', partOfSpeech: ['noun'], ipa: '/tˈɛst/',
    chineseShort: '测验；测试', chineseExplanation: '用来检查知识、能力或表现的活动。', englishDefinition: 'An activity used to check knowledge or ability.',
    examples: [{ english: 'We have a spelling test tomorrow.', chinese: '我们明天有拼写测验。' }], collocations: ['take a test', 'school test'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'exam', term: 'exam', normalizedTerm: 'exam', partOfSpeech: ['noun'], ipa: '/ɛɡzˈam/',
    chineseShort: '考试', chineseExplanation: '正式检查学生知识或能力的测试。', englishDefinition: 'A formal test of knowledge or ability.',
    examples: [{ english: 'She is studying for her exam.', chinese: '她正在为考试复习。' }], collocations: ['final exam', 'pass an exam'], level: 1, cefr: 'A2', categories: ['School'],
  },
  {
    id: 'homework', term: 'homework', normalizedTerm: 'homework', partOfSpeech: ['noun'], ipa: '/hˈəʊmwɜːk/',
    chineseShort: '家庭作业', chineseExplanation: '老师要求学生在课外完成的学习任务。', englishDefinition: 'School work that students do at home.',
    examples: [{ english: 'I finished my homework before dinner.', chinese: '我在晚餐前完成了作业。' }], collocations: ['do homework', 'finish homework'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'read', term: 'read', normalizedTerm: 'read', partOfSpeech: ['verb'], ipa: '/ɹˈiːd/',
    chineseShort: '阅读；读', chineseExplanation: '看并理解书写或印刷的文字。', englishDefinition: 'To look at and understand written words.',
    examples: [{ english: 'I read a book before bed.', chinese: '我睡前看书。' }], collocations: ['read a book', 'read aloud'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'write', term: 'write', normalizedTerm: 'write', partOfSpeech: ['verb'], ipa: '/ɹˈaɪt/',
    chineseShort: '写；书写', chineseExplanation: '用笔、键盘等形成文字。', englishDefinition: 'To make words or letters on paper or a screen.',
    examples: [{ english: 'Please write your name here.', chinese: '请在这里写下你的名字。' }], collocations: ['write a letter', 'write down'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'learn', term: 'learn', normalizedTerm: 'learn', partOfSpeech: ['verb'], ipa: '/lˈɜːn/',
    chineseShort: '学习；学会', chineseExplanation: '通过学习或练习获得知识或技能。', englishDefinition: 'To get knowledge or a skill by studying or practicing.',
    examples: [{ english: 'We learn new words every week.', chinese: '我们每周学习新单词。' }], collocations: ['learn English', 'learn to do'], level: 1, cefr: 'A1', categories: ['School'],
  },
  {
    id: 'shop', term: 'shop', normalizedTerm: 'shop', partOfSpeech: ['noun', 'verb'], ipa: '/ʃˈɒp/',
    chineseShort: '商店；购物', chineseExplanation: '出售商品的地方，也可表示去买东西。', englishDefinition: 'A place that sells things, or to buy things there.',
    examples: [{ english: 'I went to the shop to buy milk.', chinese: '我去商店买牛奶。' }], collocations: ['coffee shop', 'go shopping'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'store', term: 'store', normalizedTerm: 'store', partOfSpeech: ['noun'], ipa: '/stˈɔː/',
    chineseShort: '商店', chineseExplanation: '出售商品的地方，常用于美式英语。', englishDefinition: 'A place where goods are sold.',
    examples: [{ english: 'The store closes at nine.', chinese: '这家商店九点关门。' }], collocations: ['department store', 'online store'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'market', term: 'market', normalizedTerm: 'market', partOfSpeech: ['noun'], ipa: '/mˈɑːkɪt/',
    chineseShort: '市场；市集', chineseExplanation: '人们买卖食物和其他商品的地方。', englishDefinition: 'A place where people buy and sell food and other goods.',
    examples: [{ english: 'We buy vegetables at the market.', chinese: '我们在市场买蔬菜。' }], collocations: ['night market', 'local market'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bank', term: 'bank', normalizedTerm: 'bank', partOfSpeech: ['noun'], ipa: '/bˈaŋk/',
    chineseShort: '银行', chineseExplanation: '存钱、取钱和办理其他金融服务的机构。', englishDefinition: 'A place that keeps and manages money.',
    examples: [{ english: 'I need to go to the bank today.', chinese: '我今天需要去银行。' }], collocations: ['bank account', 'local bank'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hospital', term: 'hospital', normalizedTerm: 'hospital', partOfSpeech: ['noun'], ipa: '/hˈɒspɪtəl/',
    chineseShort: '医院', chineseExplanation: '医生和护士为病人提供治疗的地方。', englishDefinition: 'A place where sick or injured people receive medical care.',
    examples: [{ english: 'He works at a hospital.', chinese: '他在医院工作。' }], collocations: ['local hospital', 'go to hospital'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'station', term: 'station', normalizedTerm: 'station', partOfSpeech: ['noun'], ipa: '/stˈeɪʃən/',
    chineseShort: '车站；站', chineseExplanation: '火车、巴士等交通工具停靠和乘客上下车的地方。', englishDefinition: 'A place where trains or buses stop for passengers.',
    examples: [{ english: 'Meet me at the train station.', chinese: '在火车站和我见面。' }], collocations: ['train station', 'bus station'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'airport', term: 'airport', normalizedTerm: 'airport', partOfSpeech: ['noun'], ipa: '/ˈeəpɔːt/',
    chineseShort: '机场', chineseExplanation: '飞机起飞、降落和乘客出入的地方。', englishDefinition: 'A place where airplanes take off and land.',
    examples: [{ english: 'We arrived at the airport early.', chinese: '我们很早就到了机场。' }], collocations: ['airport bus', 'international airport'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'hotel', term: 'hotel', normalizedTerm: 'hotel', partOfSpeech: ['noun'], ipa: '/həʊtˈɛl/',
    chineseShort: '酒店；旅馆', chineseExplanation: '旅客付费住宿的地方。', englishDefinition: 'A place where travelers pay to stay.',
    examples: [{ english: 'Our hotel is near the beach.', chinese: '我们的酒店靠近海滩。' }], collocations: ['hotel room', 'stay at a hotel'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'restaurant', term: 'restaurant', normalizedTerm: 'restaurant', partOfSpeech: ['noun'], ipa: '/ɹˈɛstɹɒnt/',
    chineseShort: '餐厅；饭店', chineseExplanation: '顾客付费点餐和吃饭的地方。', englishDefinition: 'A place where people pay to eat meals.',
    examples: [{ english: 'We had dinner at a small restaurant.', chinese: '我们在一家小餐厅吃晚餐。' }], collocations: ['Chinese restaurant', 'restaurant meal'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cafe', term: 'cafe', normalizedTerm: 'cafe', partOfSpeech: ['noun'], ipa: '/kˈafeɪ/',
    chineseShort: '咖啡馆；小餐馆', chineseExplanation: '提供咖啡、饮料和简单食物的小店。', englishDefinition: 'A small place that serves drinks and simple food.',
    examples: [{ english: 'Let\'s meet at the cafe after work.', chinese: '下班后我们在咖啡馆见。' }], collocations: ['small cafe', 'coffee cafe'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'park', term: 'park', normalizedTerm: 'park', partOfSpeech: ['noun'], ipa: '/pˈɑːk/',
    chineseShort: '公园', chineseExplanation: '城市或社区中供人休息、散步和活动的公共绿地。', englishDefinition: 'A public green area where people can relax or play.',
    examples: [{ english: 'The children are running in the park.', chinese: '孩子们正在公园里跑。' }], collocations: ['city park', 'car park'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'street', term: 'street', normalizedTerm: 'street', partOfSpeech: ['noun'], ipa: '/stɹˈiːt/',
    chineseShort: '街道', chineseExplanation: '城市或城镇中有房屋和建筑物的道路。', englishDefinition: 'A road in a town or city, usually with buildings along it.',
    examples: [{ english: 'Their house is on this street.', chinese: '他们的房子在这条街上。' }], collocations: ['main street', 'street name'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'road', term: 'road', normalizedTerm: 'road', partOfSpeech: ['noun'], ipa: '/ɹˈəʊd/',
    chineseShort: '道路；公路', chineseExplanation: '车辆和行人通行的路线。', englishDefinition: 'A route for cars, buses, and other traffic.',
    examples: [{ english: 'The road is busy in the morning.', chinese: '这条路早上很繁忙。' }], collocations: ['main road', 'road sign'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'bridge', term: 'bridge', normalizedTerm: 'bridge', partOfSpeech: ['noun'], ipa: '/bɹˈɪdʒ/',
    chineseShort: '桥', chineseExplanation: '跨越河流、道路或其他障碍物的结构。', englishDefinition: 'A structure built over a river, road, or other obstacle.',
    examples: [{ english: 'We walked across the bridge.', chinese: '我们走过了那座桥。' }], collocations: ['road bridge', 'cross a bridge'], level: 1, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'town', term: 'town', normalizedTerm: 'town', partOfSpeech: ['noun'], ipa: '/tˈaʊn/',
    chineseShort: '城镇', chineseExplanation: '比村庄大、通常比城市小的居民区。', englishDefinition: 'A place where people live that is larger than a village and smaller than a city.',
    examples: [{ english: 'She lives in a small town.', chinese: '她住在一个小镇。' }], collocations: ['small town', 'town center'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'city', term: 'city', normalizedTerm: 'city', partOfSpeech: ['noun'], ipa: '/sˈɪti/',
    chineseShort: '城市', chineseExplanation: '人口较多、有许多建筑和服务的大型居住地。', englishDefinition: 'A large town where many people live and work.',
    examples: [{ english: 'Kuala Lumpur is a busy city.', chinese: '吉隆坡是一座繁忙的城市。' }], collocations: ['big city', 'city center'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'village', term: 'village', normalizedTerm: 'village', partOfSpeech: ['noun'], ipa: '/vˈɪlɪdʒ/',
    chineseShort: '村庄', chineseExplanation: '通常位于乡村、比城镇小的居住地。', englishDefinition: 'A small place where people live in the countryside.',
    examples: [{ english: 'My grandparents live in a village.', chinese: '我的祖父母住在村里。' }], collocations: ['small village', 'village school'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'country', term: 'country', normalizedTerm: 'country', partOfSpeech: ['noun'], ipa: '/kˈʌntɹi/',
    chineseShort: '国家；乡村', chineseExplanation: '有自己的政府和边界的地区，也可表示乡村地区。', englishDefinition: 'An area of land with its own government and borders.',
    examples: [{ english: 'Which country are you from?', chinese: '你来自哪个国家？' }], collocations: ['home country', 'foreign country'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'place', term: 'place', normalizedTerm: 'place', partOfSpeech: ['noun'], ipa: '/plˈeɪs/',
    chineseShort: '地方；地点', chineseExplanation: '某个位置、区域或场所。', englishDefinition: 'A particular area, position, or location.',
    examples: [{ english: 'This is a good place to eat.', chinese: '这是一个适合吃饭的好地方。' }], collocations: ['public place', 'meeting place'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'library', term: 'library', normalizedTerm: 'library', partOfSpeech: ['noun'], ipa: '/lˈaɪbɹəɹi/',
    chineseShort: '图书馆', chineseExplanation: '收藏书籍等资料、供人阅读或借阅的地方。', englishDefinition: 'A place where people can read or borrow books.',
    examples: [{ english: 'I study at the library after class.', chinese: '下课后我在图书馆学习。' }], collocations: ['school library', 'public library'], level: 1, cefr: 'A1', categories: ['School', 'Daily English'],
  },
  {
    id: 'car', term: 'car', normalizedTerm: 'car', partOfSpeech: ['noun'], ipa: '/kˈɑː/',
    chineseShort: '汽车；轿车', chineseExplanation: '有四个轮子、通常供少量乘客使用的道路交通工具。', englishDefinition: 'A road vehicle with four wheels for carrying a small number of people.',
    examples: [{ english: 'We go to work by car.', chinese: '我们开车去上班。' }], collocations: ['drive a car', 'car park'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'bus', term: 'bus', normalizedTerm: 'bus', partOfSpeech: ['noun'], ipa: '/bˈʌs/',
    chineseShort: '巴士；公共汽车', chineseExplanation: '沿固定路线载很多乘客的大型道路交通工具。', englishDefinition: 'A large road vehicle that carries many passengers.',
    examples: [{ english: 'I take the bus to school.', chinese: '我乘巴士去学校。' }], collocations: ['bus stop', 'bus driver'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'train', term: 'train', normalizedTerm: 'train', partOfSpeech: ['noun'], ipa: '/tɹˈeɪn/',
    chineseShort: '火车', chineseExplanation: '在铁路轨道上运行、载客或运货的交通工具。', englishDefinition: 'A vehicle that travels on railway tracks.',
    examples: [{ english: 'The train leaves at eight.', chinese: '火车八点出发。' }], collocations: ['train station', 'take a train'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'plane', term: 'plane', normalizedTerm: 'plane', partOfSpeech: ['noun'], ipa: '/plˈeɪn/',
    chineseShort: '飞机', chineseExplanation: '能够在空中飞行、载人或货物的交通工具。', englishDefinition: 'A vehicle with wings that flies through the air.',
    examples: [{ english: 'Our plane lands at noon.', chinese: '我们的飞机中午降落。' }], collocations: ['take a plane', 'plane ticket'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'bicycle', term: 'bicycle', normalizedTerm: 'bicycle', partOfSpeech: ['noun'], ipa: '/bˈaɪsɪkəl/',
    chineseShort: '自行车', chineseExplanation: '有两个轮子、靠脚踩踏板前进的交通工具。', englishDefinition: 'A two-wheeled vehicle that you move by pushing pedals.',
    examples: [{ english: 'She rides her bicycle to the park.', chinese: '她骑自行车去公园。' }], collocations: ['ride a bicycle', 'bicycle lane'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'bike', term: 'bike', normalizedTerm: 'bike', partOfSpeech: ['noun'], ipa: '/bˈaɪk/',
    chineseShort: '自行车', chineseExplanation: 'bicycle 的常用简称，也可指摩托车，基础语境通常指自行车。', englishDefinition: 'A common short word for a bicycle.',
    examples: [{ english: 'My bike is outside the house.', chinese: '我的自行车在房子外面。' }], collocations: ['ride a bike', 'bike ride'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'taxi', term: 'taxi', normalizedTerm: 'taxi', partOfSpeech: ['noun'], ipa: '/tˈaksi/',
    chineseShort: '出租车；的士', chineseExplanation: '乘客付费后由司机载到目的地的汽车。', englishDefinition: 'A car with a driver that you pay to take you somewhere.',
    examples: [{ english: 'We took a taxi to the hotel.', chinese: '我们搭出租车去酒店。' }], collocations: ['take a taxi', 'taxi driver'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'boat', term: 'boat', normalizedTerm: 'boat', partOfSpeech: ['noun'], ipa: '/bˈəʊt/',
    chineseShort: '船；小船', chineseExplanation: '在水上载人或物品的交通工具。', englishDefinition: 'A vehicle used for traveling on water.',
    examples: [{ english: 'They crossed the river by boat.', chinese: '他们坐船过河。' }], collocations: ['fishing boat', 'boat trip'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'drive', term: 'drive', normalizedTerm: 'drive', partOfSpeech: ['verb'], ipa: '/dɹˈaɪv/',
    chineseShort: '驾驶；开车', chineseExplanation: '控制汽车或其他道路交通工具行驶。', englishDefinition: 'To control and operate a car or other road vehicle.',
    examples: [{ english: 'Can you drive a car?', chinese: '你会开车吗？' }], collocations: ['drive home', 'drive a car'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'ride', term: 'ride', normalizedTerm: 'ride', partOfSpeech: ['verb'], ipa: '/ɹˈaɪd/',
    chineseShort: '骑；乘坐', chineseExplanation: '坐在自行车、摩托车、马等上面移动，也可指乘车。', englishDefinition: 'To travel on a bicycle, motorcycle, horse, or similar vehicle.',
    examples: [{ english: 'I ride my bike to the shop.', chinese: '我骑自行车去商店。' }], collocations: ['ride a bike', 'ride a horse'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'walk', term: 'walk', normalizedTerm: 'walk', partOfSpeech: ['verb', 'noun'], ipa: '/wˈɔːk/',
    chineseShort: '走路；步行', chineseExplanation: '用双脚以正常速度移动，也可表示一次步行。', englishDefinition: 'To move on foot at a normal speed.',
    examples: [{ english: 'We walk to school every day.', chinese: '我们每天步行去学校。' }], collocations: ['walk home', 'go for a walk'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'travel', term: 'travel', normalizedTerm: 'travel', partOfSpeech: ['verb', 'noun'], ipa: '/tɹˈavəl/',
    chineseShort: '旅行；出行', chineseExplanation: '从一个地方去另一个地方，通常距离较远。', englishDefinition: 'To go from one place to another, especially over a distance.',
    examples: [{ english: 'I like to travel by train.', chinese: '我喜欢坐火车旅行。' }], collocations: ['travel abroad', 'travel by train'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'trip', term: 'trip', normalizedTerm: 'trip', partOfSpeech: ['noun'], ipa: '/tɹˈɪp/',
    chineseShort: '旅行；短途行程', chineseExplanation: '去某地并通常再返回的一段旅程。', englishDefinition: 'A journey to a place and usually back again.',
    examples: [{ english: 'We are planning a weekend trip.', chinese: '我们正在计划周末旅行。' }], collocations: ['business trip', 'day trip'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'map', term: 'map', normalizedTerm: 'map', partOfSpeech: ['noun'], ipa: '/mˈap/',
    chineseShort: '地图', chineseExplanation: '用图形表示某个地区道路、地点和地形的信息。', englishDefinition: 'A drawing that shows where places, roads, or features are.',
    examples: [{ english: 'Look at the map before we leave.', chinese: '出发前看看地图。' }], collocations: ['city map', 'road map'], level: 1, cefr: 'A1', categories: ['Travel'],
  },
  {
    id: 'stop', term: 'stop', normalizedTerm: 'stop', partOfSpeech: ['verb', 'noun'], ipa: '/stˈɒp/',
    chineseShort: '停止；车站', chineseExplanation: '不再继续某个动作，也可表示车辆停靠的地点。', englishDefinition: 'To end an action, or a place where a bus or train stops.',
    examples: [{ english: 'The bus stops near my house.', chinese: '巴士在我家附近停。' }], collocations: ['bus stop', 'stop working'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'leave', term: 'leave', normalizedTerm: 'leave', partOfSpeech: ['verb'], ipa: '/lˈiːv/',
    chineseShort: '离开；出发', chineseExplanation: '从某个地方走开或开始一段行程。', englishDefinition: 'To go away from a place.',
    examples: [{ english: 'We leave home at seven.', chinese: '我们七点离开家。' }], collocations: ['leave home', 'leave early'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'return', term: 'return', normalizedTerm: 'return', partOfSpeech: ['verb', 'noun'], ipa: '/ɹɪtˈɜːn/',
    chineseShort: '返回；归还', chineseExplanation: '回到原来的地方，也可表示把东西交还。', englishDefinition: 'To go back to a place or give something back.',
    examples: [{ english: 'We return home on Sunday.', chinese: '我们星期日回家。' }], collocations: ['return home', 'return a book'], level: 1, cefr: 'A2', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'visit', term: 'visit', normalizedTerm: 'visit', partOfSpeech: ['verb', 'noun'], ipa: '/vˈɪzɪt/',
    chineseShort: '拜访；参观', chineseExplanation: '去某地或去见某人并在那里停留一段时间。', englishDefinition: 'To go to see a person or place for a period of time.',
    examples: [{ english: 'We visit our grandparents every month.', chinese: '我们每个月去看祖父母。' }], collocations: ['visit a friend', 'visit a museum'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'holiday', term: 'holiday', normalizedTerm: 'holiday', partOfSpeech: ['noun'], ipa: '/hˈɒlɪdˌeɪ/',
    chineseShort: '假期；假日', chineseExplanation: '不用上班或上学、用于休息或旅行的一段时间。', englishDefinition: 'A period when you do not work or study, often used for rest or travel.',
    examples: [{ english: 'We are going on holiday next week.', chinese: '我们下星期去度假。' }], collocations: ['summer holiday', 'on holiday'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'passport', term: 'passport', normalizedTerm: 'passport', partOfSpeech: ['noun'], ipa: '/pˈaspɔːt/',
    chineseShort: '护照', chineseExplanation: '出国旅行时用来证明身份和国籍的官方证件。', englishDefinition: 'An official document used to identify you when traveling between countries.',
    examples: [{ english: 'Do not forget your passport.', chinese: '不要忘记带护照。' }], collocations: ['passport number', 'valid passport'], level: 1, cefr: 'A2', categories: ['Travel'],
  },
  {
    id: 'time', term: 'time', normalizedTerm: 'time', partOfSpeech: ['noun'], ipa: '/tˈaɪm/',
    chineseShort: '时间', chineseExplanation: '用来表示事情发生先后、持续多久或几点的概念。', englishDefinition: 'The measure of when things happen or how long they last.',
    examples: [{ english: 'What time does the class start?', chinese: '课程几点开始？' }], collocations: ['free time', 'on time'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'day', term: 'day', normalizedTerm: 'day', partOfSpeech: ['noun'], ipa: '/dˈeɪ/',
    chineseShort: '一天；白天', chineseExplanation: '二十四小时的一段时间，也可指白天。', englishDefinition: 'A period of twenty-four hours, or the part when it is light.',
    examples: [{ english: 'I work five days a week.', chinese: '我每周工作五天。' }], collocations: ['every day', 'all day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'week', term: 'week', normalizedTerm: 'week', partOfSpeech: ['noun'], ipa: '/wˈiːk/',
    chineseShort: '星期；周', chineseExplanation: '连续七天的一段时间。', englishDefinition: 'A period of seven days.',
    examples: [{ english: 'I go swimming twice a week.', chinese: '我每周游泳两次。' }], collocations: ['next week', 'every week'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'month', term: 'month', normalizedTerm: 'month', partOfSpeech: ['noun'], ipa: '/mˈʌnθ/',
    chineseShort: '月；月份', chineseExplanation: '一年中的十二个时间单位之一。', englishDefinition: 'One of the twelve parts of a year.',
    examples: [{ english: 'We pay the rent every month.', chinese: '我们每个月付房租。' }], collocations: ['next month', 'last month'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'year', term: 'year', normalizedTerm: 'year', partOfSpeech: ['noun'], ipa: '/jˈiə/',
    chineseShort: '年；一年', chineseExplanation: '通常有三百六十五天的时间单位。', englishDefinition: 'A period of about 365 days.',
    examples: [{ english: 'She is ten years old.', chinese: '她十岁。' }], collocations: ['last year', 'every year'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'morning', term: 'morning', normalizedTerm: 'morning', partOfSpeech: ['noun'], ipa: '/mˈɔːnɪŋ/',
    chineseShort: '早上；上午', chineseExplanation: '从天亮到中午前的一段时间。', englishDefinition: 'The early part of the day before noon.',
    examples: [{ english: 'I drink tea every morning.', chinese: '我每天早上喝茶。' }], collocations: ['good morning', 'tomorrow morning'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'afternoon', term: 'afternoon', normalizedTerm: 'afternoon', partOfSpeech: ['noun'], ipa: '/ˌaftənˈuːn/',
    chineseShort: '下午', chineseExplanation: '从中午到傍晚之间的一段时间。', englishDefinition: 'The part of the day between noon and evening.',
    examples: [{ english: 'We have class in the afternoon.', chinese: '我们下午有课。' }], collocations: ['this afternoon', 'late afternoon'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'evening', term: 'evening', normalizedTerm: 'evening', partOfSpeech: ['noun'], ipa: '/ˈiːvnɪŋ/',
    chineseShort: '傍晚；晚上', chineseExplanation: '下午结束后到夜晚前后的一段时间。', englishDefinition: 'The later part of the day before night.',
    examples: [{ english: 'I usually cook in the evening.', chinese: '我通常在晚上做饭。' }], collocations: ['good evening', 'this evening'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'night', term: 'night', normalizedTerm: 'night', partOfSpeech: ['noun'], ipa: '/nˈaɪt/',
    chineseShort: '夜晚；晚上', chineseExplanation: '天黑后到第二天早晨的一段时间。', englishDefinition: 'The time between evening and morning when it is dark.',
    examples: [{ english: 'The streets are quiet at night.', chinese: '街道在夜里很安静。' }], collocations: ['at night', 'last night'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'today', term: 'today', normalizedTerm: 'today', partOfSpeech: ['adverb', 'noun'], ipa: '/tədˈeɪ/',
    chineseShort: '今天', chineseExplanation: '正在发生的这一天。', englishDefinition: 'On or during the present day.',
    examples: [{ english: 'I have a test today.', chinese: '我今天有测验。' }], collocations: ['today\'s class', 'later today'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tomorrow', term: 'tomorrow', normalizedTerm: 'tomorrow', partOfSpeech: ['adverb', 'noun'], ipa: '/təmˈɒɹəʊ/',
    chineseShort: '明天', chineseExplanation: '今天之后的那一天。', englishDefinition: 'The day after today.',
    examples: [{ english: 'We will meet tomorrow.', chinese: '我们明天见。' }], collocations: ['tomorrow morning', 'see you tomorrow'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'yesterday', term: 'yesterday', normalizedTerm: 'yesterday', partOfSpeech: ['adverb', 'noun'], ipa: '/jˈɛstədˌeɪ/',
    chineseShort: '昨天', chineseExplanation: '今天之前的那一天。', englishDefinition: 'The day before today.',
    examples: [{ english: 'I saw him yesterday.', chinese: '我昨天见到他。' }], collocations: ['yesterday morning', 'since yesterday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hour', term: 'hour', normalizedTerm: 'hour', partOfSpeech: ['noun'], ipa: '/ˈaʊə/',
    chineseShort: '小时', chineseExplanation: '等于六十分钟的时间单位。', englishDefinition: 'A period of sixty minutes.',
    examples: [{ english: 'The journey takes one hour.', chinese: '这段路程需要一个小时。' }], collocations: ['an hour', 'half an hour'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'minute', term: 'minute', normalizedTerm: 'minute', partOfSpeech: ['noun'], ipa: '/mˈɪnɪt/',
    chineseShort: '分钟', chineseExplanation: '等于六十秒的时间单位。', englishDefinition: 'A period of sixty seconds.',
    examples: [{ english: 'Please wait five minutes.', chinese: '请等五分钟。' }], collocations: ['five minutes', 'a minute ago'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'second', term: 'second', normalizedTerm: 'second', partOfSpeech: ['noun'], ipa: '/sˈɛkənd/',
    chineseShort: '秒；第二', chineseExplanation: '一分钟的六十分之一，也可表示顺序中的第二。', englishDefinition: 'One sixtieth of a minute, or the number after first.',
    examples: [{ english: 'Wait a second, please.', chinese: '请等一下。' }], collocations: ['a few seconds', 'one second'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'monday', term: 'monday', normalizedTerm: 'monday', partOfSpeech: ['noun'], ipa: '/mˈʌndeɪ/',
    chineseShort: '星期一', chineseExplanation: '一周中的星期一。', englishDefinition: 'The day of the week after Sunday and before Tuesday.',
    examples: [{ english: 'School starts again on Monday.', chinese: '星期一学校重新上课。' }], collocations: ['Monday morning', 'next Monday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weekend', term: 'weekend', normalizedTerm: 'weekend', partOfSpeech: ['noun'], ipa: '/wiːkˈɛnd/',
    chineseShort: '周末', chineseExplanation: '通常指星期六和星期日。', englishDefinition: 'Saturday and Sunday, or the period at the end of the working week.',
    examples: [{ english: 'We visit the park at the weekend.', chinese: '我们周末去公园。' }], collocations: ['this weekend', 'weekend trip'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'birthday', term: 'birthday', normalizedTerm: 'birthday', partOfSpeech: ['noun'], ipa: '/bˈɜːθdeɪ/',
    chineseShort: '生日', chineseExplanation: '一个人每年纪念出生日期的日子。', englishDefinition: 'The day each year that marks when someone was born.',
    examples: [{ english: 'Today is my sister\'s birthday.', chinese: '今天是我姐姐的生日。' }], collocations: ['birthday cake', 'birthday party'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'date', term: 'date', normalizedTerm: 'date', partOfSpeech: ['noun'], ipa: '/dˈeɪt/',
    chineseShort: '日期；约会', chineseExplanation: '日历上的某一天，也可表示两个人约定一起见面。', englishDefinition: 'A particular day of the month or year.',
    examples: [{ english: 'What is the date today?', chinese: '今天是几号？' }], collocations: ['today\'s date', 'date of birth'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'calendar', term: 'calendar', normalizedTerm: 'calendar', partOfSpeech: ['noun'], ipa: '/kˈalɛndə/',
    chineseShort: '日历', chineseExplanation: '显示一年中的月份、星期和日期的表或册子。', englishDefinition: 'A chart or book that shows the days, weeks, and months of a year.',
    examples: [{ english: 'Mark the date on the calendar.', chinese: '把这个日期标在日历上。' }], collocations: ['wall calendar', 'school calendar'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sun', term: 'sun', normalizedTerm: 'sun', partOfSpeech: ['noun'], ipa: '/sˈʌn/',
    chineseShort: '太阳', chineseExplanation: '照亮并加热地球的恒星。', englishDefinition: 'The star that gives Earth light and heat.',
    examples: [{ english: 'The sun is bright today.', chinese: '今天阳光很明亮。' }], collocations: ['hot sun', 'sunlight'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'rain', term: 'rain', normalizedTerm: 'rain', partOfSpeech: ['noun', 'verb'], ipa: '/ɹˈeɪn/',
    chineseShort: '雨；下雨', chineseExplanation: '从云中落下的水滴，也可表示下雨这一动作。', englishDefinition: 'Water that falls from clouds, or to fall as rain.',
    examples: [{ english: 'It may rain this afternoon.', chinese: '今天下午可能会下雨。' }], collocations: ['heavy rain', 'rainy day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'snow', term: 'snow', normalizedTerm: 'snow', partOfSpeech: ['noun', 'verb'], ipa: '/snˈəʊ/',
    chineseShort: '雪；下雪', chineseExplanation: '天气寒冷时从云中落下的白色冰晶。', englishDefinition: 'Soft white pieces of frozen water that fall from clouds.',
    examples: [{ english: 'The children are playing in the snow.', chinese: '孩子们正在雪地里玩。' }], collocations: ['heavy snow', 'snowy day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wind', term: 'wind', normalizedTerm: 'wind', partOfSpeech: ['noun'], ipa: '/wˈɪnd/',
    chineseShort: '风', chineseExplanation: '空气在户外流动形成的自然现象。', englishDefinition: 'Moving air outside.',
    examples: [{ english: 'The wind is strong today.', chinese: '今天风很大。' }], collocations: ['strong wind', 'cold wind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cloud', term: 'cloud', normalizedTerm: 'cloud', partOfSpeech: ['noun'], ipa: '/klˈaʊd/',
    chineseShort: '云', chineseExplanation: '天空中由小水滴或冰晶形成的白色或灰色团块。', englishDefinition: 'A white or gray mass of tiny water drops in the sky.',
    examples: [{ english: 'There is a dark cloud above us.', chinese: '我们上方有一朵乌云。' }], collocations: ['dark cloud', 'rain cloud'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sky', term: 'sky', normalizedTerm: 'sky', partOfSpeech: ['noun'], ipa: '/skˈaɪ/',
    chineseShort: '天空', chineseExplanation: '从地面向上看见的广大空间。', englishDefinition: 'The space above the Earth that you can see when you look up.',
    examples: [{ english: 'The sky is blue this morning.', chinese: '今天早上的天空是蓝色的。' }], collocations: ['blue sky', 'night sky'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weather', term: 'weather', normalizedTerm: 'weather', partOfSpeech: ['noun'], ipa: '/wˈɛðə/',
    chineseShort: '天气', chineseExplanation: '某个时间和地点的温度、雨、风等大气状况。', englishDefinition: 'The condition of the air outside, including temperature, rain, and wind.',
    examples: [{ english: 'The weather is nice today.', chinese: '今天天气很好。' }], collocations: ['hot weather', 'weather report'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hot', term: 'hot', normalizedTerm: 'hot', partOfSpeech: ['adjective'], ipa: '/hˈɒt/',
    chineseShort: '热的；炎热的', chineseExplanation: '温度高，或让人感觉很热。', englishDefinition: 'Having a high temperature.',
    examples: [{ english: 'The soup is very hot.', chinese: '这碗汤很烫。' }], collocations: ['hot weather', 'hot water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cold', term: 'cold', normalizedTerm: 'cold', partOfSpeech: ['adjective'], ipa: '/kˈəʊld/',
    chineseShort: '冷的；寒冷的', chineseExplanation: '温度低，或让人感觉寒冷。', englishDefinition: 'Having a low temperature.',
    examples: [{ english: 'It is cold outside today.', chinese: '今天外面很冷。' }], collocations: ['cold weather', 'cold water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'warm', term: 'warm', normalizedTerm: 'warm', partOfSpeech: ['adjective'], ipa: '/wˈɔːm/',
    chineseShort: '温暖的；暖和的', chineseExplanation: '温度适中偏高，让人感觉舒服。', englishDefinition: 'Pleasantly hot, but not very hot.',
    examples: [{ english: 'The water is warm.', chinese: '水是温的。' }], collocations: ['warm weather', 'keep warm'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cool', term: 'cool', normalizedTerm: 'cool', partOfSpeech: ['adjective'], ipa: '/kˈuːl/',
    chineseShort: '凉爽的', chineseExplanation: '温度稍低但通常让人感觉舒服。', englishDefinition: 'Slightly cold in a pleasant way.',
    examples: [{ english: 'The evening is cool and comfortable.', chinese: '傍晚凉爽又舒服。' }], collocations: ['cool weather', 'cool air'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tree', term: 'tree', normalizedTerm: 'tree', partOfSpeech: ['noun'], ipa: '/tɹˈiː/',
    chineseShort: '树', chineseExplanation: '有木质树干和树枝的高大植物。', englishDefinition: 'A tall plant with a wooden trunk and branches.',
    examples: [{ english: 'There is a big tree near the house.', chinese: '房子附近有一棵大树。' }], collocations: ['apple tree', 'green tree'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'flower', term: 'flower', normalizedTerm: 'flower', partOfSpeech: ['noun'], ipa: '/flˈaʊə/',
    chineseShort: '花', chineseExplanation: '植物上通常色彩鲜艳、可产生种子的部分。', englishDefinition: 'The colorful part of a plant that can produce seeds.',
    examples: [{ english: 'She put the flowers in a vase.', chinese: '她把花放进花瓶里。' }], collocations: ['red flower', 'flower garden'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'grass', term: 'grass', normalizedTerm: 'grass', partOfSpeech: ['noun'], ipa: '/ɡɹˈas/',
    chineseShort: '草；草地', chineseExplanation: '地面上常见的绿色细叶植物。', englishDefinition: 'A common green plant that covers the ground.',
    examples: [{ english: 'Do not walk on the grass.', chinese: '不要踩草地。' }], collocations: ['green grass', 'cut the grass'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'river', term: 'river', normalizedTerm: 'river', partOfSpeech: ['noun'], ipa: '/ɹˈɪvə/',
    chineseShort: '河；河流', chineseExplanation: '自然流动并通向湖泊、海洋或另一条河的水道。', englishDefinition: 'A natural flow of water that moves toward a lake or sea.',
    examples: [{ english: 'The river runs through the town.', chinese: '这条河穿过城镇。' }], collocations: ['wide river', 'river water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sea', term: 'sea', normalizedTerm: 'sea', partOfSpeech: ['noun'], ipa: '/sˈiː/',
    chineseShort: '海；海洋', chineseExplanation: '大片咸水区域，通常比 ocean 小或指靠近陆地的海域。', englishDefinition: 'A large area of salt water.',
    examples: [{ english: 'We can see the sea from the hotel.', chinese: '我们从酒店可以看到海。' }], collocations: ['by the sea', 'sea water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'beach', term: 'beach', normalizedTerm: 'beach', partOfSpeech: ['noun'], ipa: '/bˈiːtʃ/',
    chineseShort: '海滩；沙滩', chineseExplanation: '海边或湖边由沙子或小石子形成的地带。', englishDefinition: 'An area of sand or small stones beside the sea or a lake.',
    examples: [{ english: 'The children played on the beach.', chinese: '孩子们在海滩上玩。' }], collocations: ['sandy beach', 'beach holiday'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'mountain', term: 'mountain', normalizedTerm: 'mountain', partOfSpeech: ['noun'], ipa: '/mˈaʊntɪn/',
    chineseShort: '山；高山', chineseExplanation: '从周围地面高高隆起的大型自然地形。', englishDefinition: 'A very high area of land with steep sides.',
    examples: [{ english: 'We can see the mountain from here.', chinese: '我们从这里可以看到那座山。' }], collocations: ['high mountain', 'mountain road'], level: 1, cefr: 'A1', categories: ['Travel', 'Daily English'],
  },
  {
    id: 'animal', term: 'animal', normalizedTerm: 'animal', partOfSpeech: ['noun'], ipa: '/ˈanɪməl/',
    chineseShort: '动物', chineseExplanation: '能移动和感受周围环境的生物，如狗、猫、鸟等。', englishDefinition: 'A living creature such as a dog, cat, or bird.',
    examples: [{ english: 'The zoo has many animals.', chinese: '动物园里有很多动物。' }], collocations: ['wild animal', 'farm animal'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dog', term: 'dog', normalizedTerm: 'dog', partOfSpeech: ['noun'], ipa: '/dˈɒɡ/',
    chineseShort: '狗', chineseExplanation: '常被人饲养作宠物或工作伙伴的动物。', englishDefinition: 'A common animal often kept as a pet.',
    examples: [{ english: 'Their dog likes to run in the park.', chinese: '他们的狗喜欢在公园里跑。' }], collocations: ['pet dog', 'small dog'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'head', term: 'head', normalizedTerm: 'head', partOfSpeech: ['noun'], ipa: '/hˈɛd/',
    chineseShort: '头；头部', chineseExplanation: '身体最上方的部分，包括脸、眼睛、耳朵等。', englishDefinition: 'The top part of the body containing the face and brain.',
    examples: [{ english: 'He put a hat on his head.', chinese: '他把帽子戴在头上。' }], collocations: ['shake your head', 'head pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'face', term: 'face', normalizedTerm: 'face', partOfSpeech: ['noun'], ipa: '/fˈeɪs/',
    chineseShort: '脸；面部', chineseExplanation: '头部前方，包括眼睛、鼻子和嘴巴的部分。', englishDefinition: 'The front part of the head, with the eyes, nose, and mouth.',
    examples: [{ english: 'Wash your face with warm water.', chinese: '用温水洗脸。' }], collocations: ['happy face', 'wash your face'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'eye', term: 'eye', normalizedTerm: 'eye', partOfSpeech: ['noun'], ipa: '/ˈaɪ/',
    chineseShort: '眼睛', chineseExplanation: '用来看东西的身体器官。', englishDefinition: 'One of the two body parts used for seeing.',
    examples: [{ english: 'She has blue eyes.', chinese: '她有蓝色的眼睛。' }], collocations: ['close your eyes', 'eye doctor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ear', term: 'ear', normalizedTerm: 'ear', partOfSpeech: ['noun'], ipa: '/ˈiə/',
    chineseShort: '耳朵', chineseExplanation: '用来听声音的身体器官。', englishDefinition: 'One of the body parts used for hearing.',
    examples: [{ english: 'My left ear hurts.', chinese: '我的左耳疼。' }], collocations: ['left ear', 'ear pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'nose', term: 'nose', normalizedTerm: 'nose', partOfSpeech: ['noun'], ipa: '/nˈəʊz/',
    chineseShort: '鼻子', chineseExplanation: '脸上用来呼吸和闻气味的部位。', englishDefinition: 'The part of the face used for smelling and breathing.',
    examples: [{ english: 'My nose is cold.', chinese: '我的鼻子很冷。' }], collocations: ['runny nose', 'big nose'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'mouth', term: 'mouth', normalizedTerm: 'mouth', partOfSpeech: ['noun'], ipa: '/mˈaʊθ/',
    chineseShort: '嘴；口', chineseExplanation: '脸上用来吃、说话和呼吸的开口。', englishDefinition: 'The opening in the face used for eating and speaking.',
    examples: [{ english: 'Open your mouth, please.', chinese: '请张开嘴。' }], collocations: ['open your mouth', 'dry mouth'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tooth', term: 'tooth', normalizedTerm: 'tooth', partOfSpeech: ['noun'], ipa: '/tˈuːθ/',
    chineseShort: '牙齿', chineseExplanation: '口中坚硬的白色部分，用来咬和咀嚼食物。', englishDefinition: 'One of the hard white parts in the mouth used for biting food.',
    examples: [{ english: 'This tooth hurts when I eat.', chinese: '我吃东西时这颗牙会痛。' }], collocations: ['brush your teeth', 'tooth pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hair', term: 'hair', normalizedTerm: 'hair', partOfSpeech: ['noun'], ipa: '/hˈeə/',
    chineseShort: '头发；毛发', chineseExplanation: '长在头部和身体某些部位的细丝状物。', englishDefinition: 'The thin strands that grow on the head and body.',
    examples: [{ english: 'Her hair is long and black.', chinese: '她的头发又长又黑。' }], collocations: ['long hair', 'wash your hair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hand', term: 'hand', normalizedTerm: 'hand', partOfSpeech: ['noun'], ipa: '/hˈand/',
    chineseShort: '手', chineseExplanation: '手臂末端、包括手掌和手指的身体部位。', englishDefinition: 'The body part at the end of the arm, with fingers.',
    examples: [{ english: 'Raise your hand if you know the answer.', chinese: '如果你知道答案就举手。' }], collocations: ['wash your hands', 'right hand'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'arm', term: 'arm', normalizedTerm: 'arm', partOfSpeech: ['noun'], ipa: '/ˈɑːm/',
    chineseShort: '手臂', chineseExplanation: '从肩膀到手的身体部位。', englishDefinition: 'The body part from the shoulder to the hand.',
    examples: [{ english: 'He carried the bag under his arm.', chinese: '他把包夹在手臂下。' }], collocations: ['left arm', 'arm pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'leg', term: 'leg', normalizedTerm: 'leg', partOfSpeech: ['noun'], ipa: '/lˈɛɡ/',
    chineseShort: '腿', chineseExplanation: '从身体下部到脚的身体部位，用于站立和行走。', englishDefinition: 'One of the body parts used for standing and walking.',
    examples: [{ english: 'My legs are tired after the walk.', chinese: '走路后我的腿很累。' }], collocations: ['right leg', 'leg pain'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'foot', term: 'foot', normalizedTerm: 'foot', partOfSpeech: ['noun'], ipa: '/fˈʊt/',
    chineseShort: '脚；足', chineseExplanation: '腿的末端、用来站立和行走的身体部位。', englishDefinition: 'The body part at the end of the leg used for standing and walking.',
    examples: [{ english: 'My left foot is wet.', chinese: '我的左脚湿了。' }], collocations: ['left foot', 'on foot'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'body', term: 'body', normalizedTerm: 'body', partOfSpeech: ['noun'], ipa: '/bˈɒdi/',
    chineseShort: '身体', chineseExplanation: '人或动物的整个身体结构。', englishDefinition: 'The whole physical form of a person or animal.',
    examples: [{ english: 'Exercise is good for your body.', chinese: '运动对身体有好处。' }], collocations: ['human body', 'body temperature'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'heart', term: 'heart', normalizedTerm: 'heart', partOfSpeech: ['noun'], ipa: '/hˈɑːt/',
    chineseShort: '心脏；心', chineseExplanation: '胸腔内推动血液循环的重要器官，也常用于表达感情。', englishDefinition: 'The organ in the chest that pumps blood around the body.',
    examples: [{ english: 'The doctor checked his heart.', chinese: '医生检查了他的心脏。' }], collocations: ['heart rate', 'heart problem'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'sick', term: 'sick', normalizedTerm: 'sick', partOfSpeech: ['adjective'], ipa: '/sˈɪk/',
    chineseShort: '生病的；恶心的', chineseExplanation: '身体不舒服或患病的，也可表示想吐。', englishDefinition: 'Ill or not feeling well.',
    examples: [{ english: 'I feel sick today.', chinese: '我今天觉得不舒服。' }], collocations: ['feel sick', 'sick child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'pain', term: 'pain', normalizedTerm: 'pain', partOfSpeech: ['noun'], ipa: '/pˈeɪn/',
    chineseShort: '疼痛', chineseExplanation: '身体受伤或生病时产生的不舒服感觉。', englishDefinition: 'An unpleasant physical feeling caused by illness or injury.',
    examples: [{ english: 'I have pain in my back.', chinese: '我的背部疼痛。' }], collocations: ['back pain', 'feel pain'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'doctor', term: 'doctor', normalizedTerm: 'doctor', partOfSpeech: ['noun'], ipa: '/dˈɒktə/',
    chineseShort: '医生', chineseExplanation: '接受医学训练、诊断和治疗病人的专业人员。', englishDefinition: 'A person trained to treat sick or injured people.',
    examples: [{ english: 'You should see a doctor.', chinese: '你应该去看医生。' }], collocations: ['family doctor', 'see a doctor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'nurse', term: 'nurse', normalizedTerm: 'nurse', partOfSpeech: ['noun'], ipa: '/nˈɜːs/',
    chineseShort: '护士', chineseExplanation: '照顾病人并协助医生进行医疗工作的人员。', englishDefinition: 'A person trained to care for sick or injured people.',
    examples: [{ english: 'The nurse gave me some water.', chinese: '护士给了我一些水。' }], collocations: ['hospital nurse', 'school nurse'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'medicine', term: 'medicine', normalizedTerm: 'medicine', partOfSpeech: ['noun'], ipa: '/mˈɛdsən/',
    chineseShort: '药；药物', chineseExplanation: '用来治疗或减轻疾病症状的物质。', englishDefinition: 'A substance used to treat illness or reduce symptoms.',
    examples: [{ english: 'Take this medicine after food.', chinese: '饭后服用这个药。' }], collocations: ['take medicine', 'cold medicine'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'health', term: 'health', normalizedTerm: 'health', partOfSpeech: ['noun'], ipa: '/hˈɛlθ/',
    chineseShort: '健康', chineseExplanation: '身体和精神良好、没有疾病的状态。', englishDefinition: 'The condition of your body and mind, especially whether you are well.',
    examples: [{ english: 'Walking is good for your health.', chinese: '走路对健康有好处。' }], collocations: ['good health', 'health care'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'shirt', term: 'shirt', normalizedTerm: 'shirt', partOfSpeech: ['noun'], ipa: '/ʃˈɜːt/',
    chineseShort: '衬衫；上衣', chineseExplanation: '穿在上半身、通常有袖子和领子的衣服。', englishDefinition: 'A piece of clothing worn on the upper body, often with sleeves and a collar.',
    examples: [{ english: 'He is wearing a white shirt.', chinese: '他穿着一件白衬衫。' }], collocations: ['white shirt', 'school shirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sweater', term: 'sweater', normalizedTerm: 'sweater', partOfSpeech: ['noun'], ipa: '/swˈɛtə/',
    chineseShort: '毛衣', chineseExplanation: '穿在上半身、通常用针织材料制成的保暖衣物。', englishDefinition: 'A warm knitted piece of clothing worn on the upper body.',
    examples: [{ english: 'I need a sweater because it is cold.', chinese: '天气冷，我需要一件毛衣。' }], collocations: ['warm sweater', 'wool sweater'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'trousers', term: 'trousers', normalizedTerm: 'trousers', partOfSpeech: ['noun'], ipa: '/tɹˈaʊsəz/',
    chineseShort: '长裤', chineseExplanation: '从腰部穿到两条腿上的衣服。', englishDefinition: 'Clothing that covers the body from the waist to the legs.',
    examples: [{ english: 'These trousers are too long.', chinese: '这条长裤太长了。' }], collocations: ['black trousers', 'pair of trousers'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dress', term: 'dress', normalizedTerm: 'dress', partOfSpeech: ['noun'], ipa: '/dɹˈɛs/',
    chineseShort: '连衣裙；裙装', chineseExplanation: '通常由女性或女孩穿的一件式衣服。', englishDefinition: 'A one-piece item of clothing often worn by women or girls.',
    examples: [{ english: 'She wore a blue dress to the party.', chinese: '她穿了一条蓝色连衣裙去聚会。' }], collocations: ['summer dress', 'long dress'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'skirt', term: 'skirt', normalizedTerm: 'skirt', partOfSpeech: ['noun'], ipa: '/skˈɜːt/',
    chineseShort: '裙子', chineseExplanation: '从腰部向下穿、没有分成两条裤腿的衣物。', englishDefinition: 'A piece of clothing worn from the waist down without separate legs.',
    examples: [{ english: 'Her skirt is black.', chinese: '她的裙子是黑色的。' }], collocations: ['short skirt', 'school skirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'coat', term: 'coat', normalizedTerm: 'coat', partOfSpeech: ['noun'], ipa: '/kˈəʊt/',
    chineseShort: '外套；大衣', chineseExplanation: '穿在其他衣服外面用来保暖或防风雨的衣物。', englishDefinition: 'An outer piece of clothing worn for warmth or protection.',
    examples: [{ english: 'Put on your coat before you go outside.', chinese: '出门前穿上外套。' }], collocations: ['winter coat', 'long coat'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'shoe', term: 'shoe', normalizedTerm: 'shoe', partOfSpeech: ['noun'], ipa: '/ʃˈuː/',
    chineseShort: '鞋', chineseExplanation: '穿在脚上用来保护脚的物品。', englishDefinition: 'A covering worn on the foot for protection.',
    examples: [{ english: 'I need a new pair of shoes.', chinese: '我需要一双新鞋。' }], collocations: ['running shoe', 'pair of shoes'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sock', term: 'sock', normalizedTerm: 'sock', partOfSpeech: ['noun'], ipa: '/sˈɒk/',
    chineseShort: '袜子', chineseExplanation: '穿在脚上、通常在鞋子里面的柔软衣物。', englishDefinition: 'A soft piece of clothing worn on the foot inside a shoe.',
    examples: [{ english: 'One of my socks is missing.', chinese: '我的一只袜子不见了。' }], collocations: ['white socks', 'pair of socks'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'hat', term: 'hat', normalizedTerm: 'hat', partOfSpeech: ['noun'], ipa: '/hˈat/',
    chineseShort: '帽子', chineseExplanation: '戴在头上的衣物，可用于保暖、遮阳或装饰。', englishDefinition: 'A piece of clothing worn on the head.',
    examples: [{ english: 'She is wearing a red hat.', chinese: '她戴着一顶红帽子。' }], collocations: ['sun hat', 'wear a hat'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'clothes', term: 'clothes', normalizedTerm: 'clothes', partOfSpeech: ['noun'], ipa: '/klˈəʊðz/',
    chineseShort: '衣服；服装', chineseExplanation: '人们穿在身上的各种衣物的总称。', englishDefinition: 'Things that people wear on their bodies.',
    examples: [{ english: 'My clothes are in the bag.', chinese: '我的衣服在包里。' }], collocations: ['clean clothes', 'summer clothes'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'size', term: 'size', normalizedTerm: 'size', partOfSpeech: ['noun'], ipa: '/sˈaɪz/',
    chineseShort: '尺寸；大小', chineseExplanation: '表示东西有多大、多小或衣服鞋子的号码。', englishDefinition: 'How large or small something is.',
    examples: [{ english: 'Do you have this shirt in my size?', chinese: '这件衬衫有我的尺码吗？' }], collocations: ['small size', 'right size'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'colour', term: 'colour', normalizedTerm: 'colour', partOfSpeech: ['noun'], ipa: '/kˈʌlə/',
    chineseShort: '颜色', chineseExplanation: '物体呈现出的红、蓝、绿等视觉特征。', englishDefinition: 'The appearance of something such as red, blue, or green.',
    examples: [{ english: 'What colour is your bag?', chinese: '你的包是什么颜色？' }], collocations: ['favourite colour', 'bright colour'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'black', term: 'black', normalizedTerm: 'black', partOfSpeech: ['adjective', 'noun'], ipa: '/blˈak/',
    chineseShort: '黑色的；黑色', chineseExplanation: '像夜晚或煤一样很深的颜色。', englishDefinition: 'The darkest color, like the color of coal.',
    examples: [{ english: 'He bought a black bag.', chinese: '他买了一个黑色的包。' }], collocations: ['black shoes', 'black coffee'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'white', term: 'white', normalizedTerm: 'white', partOfSpeech: ['adjective', 'noun'], ipa: '/wˈaɪt/',
    chineseShort: '白色的；白色', chineseExplanation: '像雪或牛奶一样很浅的颜色。', englishDefinition: 'The lightest color, like snow or milk.',
    examples: [{ english: 'The walls are white.', chinese: '墙壁是白色的。' }], collocations: ['white shirt', 'white rice'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'red', term: 'red', normalizedTerm: 'red', partOfSpeech: ['adjective', 'noun'], ipa: '/ɹˈɛd/',
    chineseShort: '红色的；红色', chineseExplanation: '像血液或成熟番茄一样的颜色。', englishDefinition: 'The color of blood or a ripe tomato.',
    examples: [{ english: 'She has a red dress.', chinese: '她有一条红色连衣裙。' }], collocations: ['red light', 'red shirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'blue', term: 'blue', normalizedTerm: 'blue', partOfSpeech: ['adjective', 'noun'], ipa: '/blˈuː/',
    chineseShort: '蓝色的；蓝色', chineseExplanation: '像晴朗天空一样的颜色。', englishDefinition: 'The color of a clear sky.',
    examples: [{ english: 'The sky is blue today.', chinese: '今天的天空是蓝色的。' }], collocations: ['blue sky', 'blue shirt'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'green', term: 'green', normalizedTerm: 'green', partOfSpeech: ['adjective', 'noun'], ipa: '/ɡɹˈiːn/',
    chineseShort: '绿色的；绿色', chineseExplanation: '像草和许多树叶一样的颜色。', englishDefinition: 'The color of grass and many leaves.',
    examples: [{ english: 'The door is green.', chinese: '那扇门是绿色的。' }], collocations: ['green tea', 'green light'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'buy', term: 'buy', normalizedTerm: 'buy', partOfSpeech: ['verb'], ipa: '/bˈaɪ/',
    chineseShort: '买；购买', chineseExplanation: '付钱取得商品或服务。', englishDefinition: 'To get something by paying money for it.',
    examples: [{ english: 'I need to buy some bread.', chinese: '我需要买一些面包。' }], collocations: ['buy food', 'buy online'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sell', term: 'sell', normalizedTerm: 'sell', partOfSpeech: ['verb'], ipa: '/sˈɛl/',
    chineseShort: '卖；出售', chineseExplanation: '收取钱并把商品或服务提供给别人。', englishDefinition: 'To give something to someone in exchange for money.',
    examples: [{ english: 'They sell fruit at the market.', chinese: '他们在市场卖水果。' }], collocations: ['sell clothes', 'sell online'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'price', term: 'price', normalizedTerm: 'price', partOfSpeech: ['noun'], ipa: '/pɹˈaɪs/',
    chineseShort: '价格；价钱', chineseExplanation: '购买某件商品或服务需要支付的钱。', englishDefinition: 'The amount of money you pay for something.',
    examples: [{ english: 'What is the price of this bag?', chinese: '这个包多少钱？' }], collocations: ['low price', 'price tag'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'eat', term: 'eat', normalizedTerm: 'eat', partOfSpeech: ['verb'], ipa: '/ˈiːt/',
    chineseShort: '吃', chineseExplanation: '把食物放入口中咀嚼并吞下。', englishDefinition: 'To put food in your mouth and swallow it.',
    examples: [{ english: 'We eat dinner at seven.', chinese: '我们七点吃晚餐。' }], collocations: ['eat breakfast', 'eat together'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'drink', term: 'drink', normalizedTerm: 'drink', partOfSpeech: ['verb', 'noun'], ipa: '/dɹˈɪŋk/',
    chineseShort: '喝；饮料', chineseExplanation: '把液体送入口中吞下，也可指可饮用的液体。', englishDefinition: 'To take liquid into your mouth and swallow it.',
    examples: [{ english: 'Drink some water after exercise.', chinese: '运动后喝一些水。' }], collocations: ['drink water', 'hot drink'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sleep', term: 'sleep', normalizedTerm: 'sleep', partOfSpeech: ['verb', 'noun'], ipa: '/slˈiːp/',
    chineseShort: '睡觉；睡眠', chineseExplanation: '身体和意识休息的一种自然状态。', englishDefinition: 'To rest with your eyes closed and your mind not fully active.',
    examples: [{ english: 'I usually sleep for eight hours.', chinese: '我通常睡八个小时。' }], collocations: ['sleep well', 'go to sleep'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wake', term: 'wake', normalizedTerm: 'wake', partOfSpeech: ['verb'], ipa: '/wˈeɪk/',
    chineseShort: '醒来；叫醒', chineseExplanation: '停止睡眠，或让别人停止睡眠。', englishDefinition: 'To stop sleeping or make someone stop sleeping.',
    examples: [{ english: 'I wake at six every morning.', chinese: '我每天早上六点醒来。' }], collocations: ['wake up', 'wake early'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'get', term: 'get', normalizedTerm: 'get', partOfSpeech: ['verb'], ipa: '/ɡˈɛt/',
    chineseShort: '得到；取得；到达', chineseExplanation: '非常常用的动词，可表示获得、收到或到达等基本意思。', englishDefinition: 'To receive, obtain, or reach something or somewhere.',
    examples: [{ english: 'I get home at six.', chinese: '我六点到家。' }], collocations: ['get home', 'get ready'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'give', term: 'give', normalizedTerm: 'give', partOfSpeech: ['verb'], ipa: '/ɡˈɪv/',
    chineseShort: '给；给予', chineseExplanation: '把某物交给另一个人。', englishDefinition: 'To hand or provide something to another person.',
    examples: [{ english: 'Please give me the book.', chinese: '请把那本书给我。' }], collocations: ['give help', 'give someone something'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'take', term: 'take', normalizedTerm: 'take', partOfSpeech: ['verb'], ipa: '/tˈeɪk/',
    chineseShort: '拿；带；乘坐', chineseExplanation: '把某物拿走、带走，也常用于乘坐交通工具。', englishDefinition: 'To carry something with you, or to use a form of transport.',
    examples: [{ english: 'Take your bag with you.', chinese: '把你的包带上。' }], collocations: ['take a bus', 'take a photo'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'make', term: 'make', normalizedTerm: 'make', partOfSpeech: ['verb'], ipa: '/mˈeɪk/',
    chineseShort: '制作；使得', chineseExplanation: '创造、制作某物，或使某种情况发生。', englishDefinition: 'To create or produce something.',
    examples: [{ english: 'We make dinner together.', chinese: '我们一起做晚餐。' }], collocations: ['make food', 'make a mistake'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'do', term: 'do', normalizedTerm: 'do', partOfSpeech: ['verb'], ipa: '/dˈuː/',
    chineseShort: '做；进行', chineseExplanation: '执行某项活动、工作或任务。', englishDefinition: 'To perform an activity, job, or task.',
    examples: [{ english: 'I do my homework after dinner.', chinese: '我晚餐后做作业。' }], collocations: ['do homework', 'do exercise'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'go', term: 'go', normalizedTerm: 'go', partOfSpeech: ['verb'], ipa: '/ɡˈəʊ/',
    chineseShort: '去；走', chineseExplanation: '从现在的位置移动到另一个地方。', englishDefinition: 'To move or travel to another place.',
    examples: [{ english: 'We go to school by bus.', chinese: '我们乘巴士去学校。' }], collocations: ['go home', 'go shopping'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'come', term: 'come', normalizedTerm: 'come', partOfSpeech: ['verb'], ipa: '/kˈʌm/',
    chineseShort: '来；来到', chineseExplanation: '向说话者所在的位置或某个指定地点移动。', englishDefinition: 'To move toward the speaker or a particular place.',
    examples: [{ english: 'Come here and sit down.', chinese: '到这里来坐下。' }], collocations: ['come home', 'come back'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'see', term: 'see', normalizedTerm: 'see', partOfSpeech: ['verb'], ipa: '/sˈiː/',
    chineseShort: '看见；看到', chineseExplanation: '用眼睛注意到某人或某物。', englishDefinition: 'To notice someone or something with your eyes.',
    examples: [{ english: 'I can see the mountain from here.', chinese: '我从这里可以看到那座山。' }], collocations: ['see a doctor', 'see clearly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'look', term: 'look', normalizedTerm: 'look', partOfSpeech: ['verb', 'noun'], ipa: '/lˈʊk/',
    chineseShort: '看；观看', chineseExplanation: '把眼睛朝向某人或某物以便看清楚。', englishDefinition: 'To direct your eyes toward someone or something.',
    examples: [{ english: 'Look at the picture on the wall.', chinese: '看看墙上的图片。' }], collocations: ['look at', 'look for'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'watch', term: 'watch', normalizedTerm: 'watch', partOfSpeech: ['verb'], ipa: '/wˈɒtʃ/',
    chineseShort: '观看；注视', chineseExplanation: '一段时间内专注地看某事，尤其是电视、电影或活动。', englishDefinition: 'To look at something for a period of time.',
    examples: [{ english: 'We watch TV after dinner.', chinese: '我们晚餐后看电视。' }], collocations: ['watch TV', 'watch a movie'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'listen', term: 'listen', normalizedTerm: 'listen', partOfSpeech: ['verb'], ipa: '/lˈɪsən/',
    chineseShort: '听；聆听', chineseExplanation: '有意识地注意声音。', englishDefinition: 'To pay attention to sounds.',
    examples: [{ english: 'Listen to the teacher carefully.', chinese: '认真听老师讲。' }], collocations: ['listen to music', 'listen carefully'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'speak', term: 'speak', normalizedTerm: 'speak', partOfSpeech: ['verb'], ipa: '/spˈiːk/',
    chineseShort: '说话；讲某种语言', chineseExplanation: '用声音说出词语，也可表示会说某种语言。', englishDefinition: 'To say words or use a language.',
    examples: [{ english: 'Can you speak English?', chinese: '你会说英语吗？' }], collocations: ['speak English', 'speak slowly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'say', term: 'say', normalizedTerm: 'say', partOfSpeech: ['verb'], ipa: '/sˈeɪ/',
    chineseShort: '说；说道', chineseExplanation: '用语言表达某些话。', englishDefinition: 'To speak words or express something in words.',
    examples: [{ english: 'Please say your name again.', chinese: '请再说一次你的名字。' }], collocations: ['say hello', 'say something'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tell', term: 'tell', normalizedTerm: 'tell', partOfSpeech: ['verb'], ipa: '/tˈɛl/',
    chineseShort: '告诉；讲述', chineseExplanation: '把信息、故事或事实说给某人听。', englishDefinition: 'To give information or a story to someone.',
    examples: [{ english: 'Tell me your phone number.', chinese: '告诉我你的电话号码。' }], collocations: ['tell the truth', 'tell someone'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ask', term: 'ask', normalizedTerm: 'ask', partOfSpeech: ['verb'], ipa: '/ˈask/',
    chineseShort: '问；请求', chineseExplanation: '提出问题以获得信息，或请求别人做某事。', englishDefinition: 'To request information or ask someone to do something.',
    examples: [{ english: 'You can ask the teacher for help.', chinese: '你可以向老师求助。' }], collocations: ['ask a question', 'ask for help'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'call', term: 'call', normalizedTerm: 'call', partOfSpeech: ['verb', 'noun'], ipa: '/kˈɔːl/',
    chineseShort: '打电话；称呼', chineseExplanation: '用电话联系某人，也可表示给某人或某物取某个称呼。', englishDefinition: 'To contact someone by phone or use a particular name for someone.',
    examples: [{ english: 'Call me when you arrive.', chinese: '你到达时给我打电话。' }], collocations: ['call home', 'phone call'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'open', term: 'open', normalizedTerm: 'open', partOfSpeech: ['verb', 'adjective'], ipa: '/ˈəʊpən/',
    chineseShort: '打开；开着的', chineseExplanation: '把关闭的东西打开，也可表示商店等正在营业。', englishDefinition: 'To move something so it is not closed, or to be not closed.',
    examples: [{ english: 'Please open the window.', chinese: '请打开窗户。' }], collocations: ['open the door', 'open now'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'close', term: 'close', normalizedTerm: 'close', partOfSpeech: ['verb', 'adjective'], ipa: '/klˈəʊs/',
    chineseShort: '关闭；靠近的', chineseExplanation: '把打开的东西关上；作为形容词也可表示距离近。', englishDefinition: 'To shut something, or as an adjective to be near.',
    examples: [{ english: 'Close the door before you leave.', chinese: '离开前把门关上。' }], collocations: ['close the door', 'close to'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'start', term: 'start', normalizedTerm: 'start', partOfSpeech: ['verb', 'noun'], ipa: '/stˈɑːt/',
    chineseShort: '开始；开端', chineseExplanation: '开始做某事或使某事开始。', englishDefinition: 'To begin doing something or make something begin.',
    examples: [{ english: 'Class starts at nine.', chinese: '课程九点开始。' }], collocations: ['start work', 'start again'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'finish', term: 'finish', normalizedTerm: 'finish', partOfSpeech: ['verb'], ipa: '/fˈɪnɪʃ/',
    chineseShort: '完成；结束', chineseExplanation: '做到某件事的最后部分，使其结束。', englishDefinition: 'To complete something or reach its end.',
    examples: [{ english: 'I finish work at five.', chinese: '我五点下班。' }], collocations: ['finish homework', 'finish work'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'work', term: 'work', normalizedTerm: 'work', partOfSpeech: ['verb', 'noun'], ipa: '/wˈɜːk/',
    chineseShort: '工作；劳动', chineseExplanation: '做工作或任务以获得成果，也可指职业活动。', englishDefinition: 'To do a job or task, or the activity of doing a job.',
    examples: [{ english: 'She works in a bank.', chinese: '她在银行工作。' }], collocations: ['go to work', 'work hard'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'play', term: 'play', normalizedTerm: 'play', partOfSpeech: ['verb'], ipa: '/plˈeɪ/',
    chineseShort: '玩；进行游戏', chineseExplanation: '进行娱乐活动、游戏或运动。', englishDefinition: 'To take part in a game or activity for enjoyment.',
    examples: [{ english: 'The children play in the garden.', chinese: '孩子们在花园里玩。' }], collocations: ['play football', 'play a game'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'run', term: 'run', normalizedTerm: 'run', partOfSpeech: ['verb'], ipa: '/ɹˈʌn/',
    chineseShort: '跑；运行', chineseExplanation: '用双脚快速移动，也可表示机器或系统运行。', englishDefinition: 'To move quickly on foot.',
    examples: [{ english: 'He runs in the park every morning.', chinese: '他每天早上在公园跑步。' }], collocations: ['run fast', 'go running'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'swim', term: 'swim', normalizedTerm: 'swim', partOfSpeech: ['verb'], ipa: '/swˈɪm/',
    chineseShort: '游泳', chineseExplanation: '在水中用身体动作前进。', englishDefinition: 'To move through water using your arms and legs.',
    examples: [{ english: 'We swim at the beach on Sundays.', chinese: '我们星期日在海滩游泳。' }], collocations: ['swim well', 'go swimming'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sit', term: 'sit', normalizedTerm: 'sit', partOfSpeech: ['verb'], ipa: '/sˈɪt/',
    chineseShort: '坐', chineseExplanation: '把身体重量放在椅子、地面等上。', englishDefinition: 'To rest your body on a chair, seat, or the ground.',
    examples: [{ english: 'Please sit next to me.', chinese: '请坐在我旁边。' }], collocations: ['sit down', 'sit here'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'stand', term: 'stand', normalizedTerm: 'stand', partOfSpeech: ['verb'], ipa: '/stˈand/',
    chineseShort: '站；站立', chineseExplanation: '用双脚直立身体。', englishDefinition: 'To be upright on your feet.',
    examples: [{ english: 'Please stand near the door.', chinese: '请站在门附近。' }], collocations: ['stand up', 'stand still'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wait', term: 'wait', normalizedTerm: 'wait', partOfSpeech: ['verb'], ipa: '/wˈeɪt/',
    chineseShort: '等待', chineseExplanation: '停留一段时间直到某事发生或某人到来。', englishDefinition: 'To stay until something happens or someone arrives.',
    examples: [{ english: 'Please wait for me outside.', chinese: '请在外面等我。' }], collocations: ['wait for', 'wait a minute'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'help', term: 'help', normalizedTerm: 'help', partOfSpeech: ['verb', 'noun'], ipa: '/hˈɛlp/',
    chineseShort: '帮助；帮忙', chineseExplanation: '让别人更容易完成某事或解决问题。', englishDefinition: 'To make it easier for someone to do something.',
    examples: [{ english: 'Can you help me with this bag?', chinese: '你可以帮我拿这个包吗？' }], collocations: ['help someone', 'ask for help'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'clean', term: 'clean', normalizedTerm: 'clean', partOfSpeech: ['verb', 'adjective'], ipa: '/klˈiːn/',
    chineseShort: '清洁；干净的', chineseExplanation: '去除污垢，也可形容没有脏东西。', englishDefinition: 'To remove dirt, or to be free from dirt.',
    examples: [{ english: 'I clean my room every Saturday.', chinese: '我每个星期六打扫房间。' }], collocations: ['clean the room', 'clean water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wash', term: 'wash', normalizedTerm: 'wash', partOfSpeech: ['verb'], ipa: '/wˈɒʃ/',
    chineseShort: '洗；清洗', chineseExplanation: '用水和通常使用肥皂清洁某物或身体部位。', englishDefinition: 'To clean something with water, often using soap.',
    examples: [{ english: 'Wash your hands before eating.', chinese: '吃饭前洗手。' }], collocations: ['wash clothes', 'wash your hands'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cook', term: 'cook', normalizedTerm: 'cook', partOfSpeech: ['verb', 'noun'], ipa: '/kˈʊk/',
    chineseShort: '烹饪；厨师', chineseExplanation: '用加热的方法准备食物，也可指做饭的人。', englishDefinition: 'To prepare food by heating it.',
    examples: [{ english: 'I cook rice for dinner.', chinese: '我晚餐煮米饭。' }], collocations: ['cook dinner', 'home cook'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cut', term: 'cut', normalizedTerm: 'cut', partOfSpeech: ['verb'], ipa: '/kˈʌt/',
    chineseShort: '切；割', chineseExplanation: '用刀、剪刀等把某物分开或变短。', englishDefinition: 'To divide something using a knife or other sharp tool.',
    examples: [{ english: 'Cut the apple into four pieces.', chinese: '把苹果切成四块。' }], collocations: ['cut into pieces', 'cut paper'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'put', term: 'put', normalizedTerm: 'put', partOfSpeech: ['verb'], ipa: '/pˈʊt/',
    chineseShort: '放；放置', chineseExplanation: '把某人或某物移动到某个位置。', englishDefinition: 'To move something to a particular place or position.',
    examples: [{ english: 'Put your phone on the table.', chinese: '把你的手机放在桌上。' }], collocations: ['put away', 'put on'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'keep', term: 'keep', normalizedTerm: 'keep', partOfSpeech: ['verb'], ipa: '/kˈiːp/',
    chineseShort: '保留；保持', chineseExplanation: '继续拥有某物，或让某种状态持续。', englishDefinition: 'To continue to have something or make a state continue.',
    examples: [{ english: 'Keep the door closed, please.', chinese: '请保持门关着。' }], collocations: ['keep quiet', 'keep safe'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'carry', term: 'carry', normalizedTerm: 'carry', partOfSpeech: ['verb'], ipa: '/kˈaɹi/',
    chineseShort: '携带；搬运', chineseExplanation: '拿着或支撑某物并把它带到别处。', englishDefinition: 'To hold something and move it from one place to another.',
    examples: [{ english: 'She carries a small bag to work.', chinese: '她带着一个小包去上班。' }], collocations: ['carry a bag', 'carry water'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bring', term: 'bring', normalizedTerm: 'bring', partOfSpeech: ['verb'], ipa: '/bɹˈɪŋ/',
    chineseShort: '带来；拿来', chineseExplanation: '把某人或某物带到说话者所在的地方。', englishDefinition: 'To take someone or something with you to a place.',
    examples: [{ english: 'Please bring your book tomorrow.', chinese: '请明天带你的书来。' }], collocations: ['bring food', 'bring with you'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'like', term: 'like', normalizedTerm: 'like', partOfSpeech: ['verb'], ipa: '/lˈaɪk/',
    chineseShort: '喜欢', chineseExplanation: '觉得某人或某物令人愉快或适合自己。', englishDefinition: 'To find someone or something pleasant or enjoyable.',
    examples: [{ english: 'I like this song.', chinese: '我喜欢这首歌。' }], collocations: ['like very much', 'like doing'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'love', term: 'love', normalizedTerm: 'love', partOfSpeech: ['verb', 'noun'], ipa: '/lˈʌv/',
    chineseShort: '爱；非常喜欢', chineseExplanation: '对某人有强烈感情，或非常喜欢某事物。', englishDefinition: 'To care very much for someone or enjoy something a lot.',
    examples: [{ english: 'I love spending time with my family.', chinese: '我喜欢和家人一起度过时间。' }], collocations: ['love someone', 'love doing'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'want', term: 'want', normalizedTerm: 'want', partOfSpeech: ['verb'], ipa: '/wˈɒnt/',
    chineseShort: '想要；希望', chineseExplanation: '希望拥有某物或希望某事发生。', englishDefinition: 'To wish to have or do something.',
    examples: [{ english: 'I want a glass of water.', chinese: '我想要一杯水。' }], collocations: ['want to do', 'want something'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'need', term: 'need', normalizedTerm: 'need', partOfSpeech: ['verb', 'noun'], ipa: '/nˈiːd/',
    chineseShort: '需要；需求', chineseExplanation: '必须拥有或做某事，因为它很重要或必要。', englishDefinition: 'To require something because it is necessary.',
    examples: [{ english: 'We need more time.', chinese: '我们需要更多时间。' }], collocations: ['need help', 'need to do'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'know', term: 'know', normalizedTerm: 'know', partOfSpeech: ['verb'], ipa: '/nˈəʊ/',
    chineseShort: '知道；认识', chineseExplanation: '拥有某个事实的信息，或熟悉某个人、地方或事物。', englishDefinition: 'To have information about something or be familiar with someone.',
    examples: [{ english: 'I know the answer.', chinese: '我知道答案。' }], collocations: ['know how', 'know someone'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'think', term: 'think', normalizedTerm: 'think', partOfSpeech: ['verb'], ipa: '/θˈɪŋk/',
    chineseShort: '想；认为', chineseExplanation: '用头脑考虑某事，或表达自己的看法。', englishDefinition: 'To use your mind to consider something or have an opinion.',
    examples: [{ english: 'I think this is a good idea.', chinese: '我觉得这是个好主意。' }], collocations: ['think about', 'think so'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'understand', term: 'understand', normalizedTerm: 'understand', partOfSpeech: ['verb'], ipa: '/ˌʌndəstˈand/',
    chineseShort: '理解；明白', chineseExplanation: '知道某句话、想法或情况的意思。', englishDefinition: 'To know the meaning of something.',
    examples: [{ english: 'I understand the question now.', chinese: '我现在明白这个问题了。' }], collocations: ['understand English', 'understand clearly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'forget', term: 'forget', normalizedTerm: 'forget', partOfSpeech: ['verb'], ipa: '/fəɡˈɛt/',
    chineseShort: '忘记', chineseExplanation: '不能记起某人、某事或应该做的事情。', englishDefinition: 'To fail to remember something.',
    examples: [{ english: 'Do not forget your key.', chinese: '不要忘记你的钥匙。' }], collocations: ['forget to do', 'forget a name'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'find', term: 'find', normalizedTerm: 'find', partOfSpeech: ['verb'], ipa: '/fˈaɪnd/',
    chineseShort: '找到；发现', chineseExplanation: '经过寻找后得到某人或某物，或意外发现。', englishDefinition: 'To discover or locate someone or something.',
    examples: [{ english: 'I cannot find my phone.', chinese: '我找不到我的手机。' }], collocations: ['find out', 'find a job'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'meet', term: 'meet', normalizedTerm: 'meet', partOfSpeech: ['verb'], ipa: '/mˈiːt/',
    chineseShort: '见面；遇见', chineseExplanation: '与某人见面，通常是第一次或按计划见面。', englishDefinition: 'To come together with another person.',
    examples: [{ english: 'Let\'s meet at the station.', chinese: '我们在车站见吧。' }], collocations: ['meet a friend', 'meet someone'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'live', term: 'live', normalizedTerm: 'live', partOfSpeech: ['verb'], ipa: '/lˈaɪv/',
    chineseShort: '居住；生活', chineseExplanation: '把某地作为自己的家，也可表示活着。', englishDefinition: 'To have your home in a place or be alive.',
    examples: [{ english: 'I live near the city center.', chinese: '我住在市中心附近。' }], collocations: ['live in', 'live with'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'stay', term: 'stay', normalizedTerm: 'stay', partOfSpeech: ['verb'], ipa: '/stˈeɪ/',
    chineseShort: '停留；暂住', chineseExplanation: '在某个地方保持一段时间而不离开。', englishDefinition: 'To remain in a place for a period of time.',
    examples: [{ english: 'We stayed at a small hotel.', chinese: '我们住在一家小酒店。' }], collocations: ['stay home', 'stay at a hotel'], level: 1, cefr: 'A1', categories: ['Daily English', 'Travel'],
  },
  {
    id: 'move', term: 'move', normalizedTerm: 'move', partOfSpeech: ['verb'], ipa: '/mˈuːv/',
    chineseShort: '移动；搬家', chineseExplanation: '改变位置，或从一个住所搬到另一个住所。', englishDefinition: 'To change position or go to live in another place.',
    examples: [{ english: 'Please move the chair closer.', chinese: '请把椅子移近一点。' }], collocations: ['move house', 'move slowly'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'send', term: 'send', normalizedTerm: 'send', partOfSpeech: ['verb'], ipa: '/sˈɛnd/',
    chineseShort: '发送；寄', chineseExplanation: '让信息、物品或人从一个地方到另一个地方。', englishDefinition: 'To cause a message or thing to go to another person or place.',
    examples: [{ english: 'Send me the photo, please.', chinese: '请把照片发给我。' }], collocations: ['send a message', 'send an email'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'show', term: 'show', normalizedTerm: 'show', partOfSpeech: ['verb'], ipa: '/ʃˈəʊ/',
    chineseShort: '展示；给……看', chineseExplanation: '让别人看到某物或知道某些信息。', englishDefinition: 'To let someone see something or know information.',
    examples: [{ english: 'Can you show me the way?', chinese: '你可以告诉我怎么走吗？' }], collocations: ['show someone', 'show the way'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'use', term: 'use', normalizedTerm: 'use', partOfSpeech: ['verb', 'noun'], ipa: '/jˈuːs/',
    chineseShort: '使用；用途', chineseExplanation: '为了某个目的使用某物。', englishDefinition: 'To do something with an object for a particular purpose.',
    examples: [{ english: 'You can use my pen.', chinese: '你可以用我的笔。' }], collocations: ['use a computer', 'easy to use'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'try', term: 'try', normalizedTerm: 'try', partOfSpeech: ['verb'], ipa: '/tɹˈaɪ/',
    chineseShort: '尝试；试用', chineseExplanation: '努力做某事，或测试某物是否合适。', englishDefinition: 'To make an effort to do something or test something.',
    examples: [{ english: 'Try this cake.', chinese: '试试这个蛋糕。' }], collocations: ['try again', 'try to do'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'change', term: 'change', normalizedTerm: 'change', partOfSpeech: ['verb', 'noun'], ipa: '/tʃˈeɪndʒ/',
    chineseShort: '改变；更换', chineseExplanation: '使某事变得不同，或从一个东西换成另一个。', englishDefinition: 'To make something different or replace it with another thing.',
    examples: [{ english: 'I need to change my shirt.', chinese: '我需要换一件衬衫。' }], collocations: ['change clothes', 'change your mind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'turn', term: 'turn', normalizedTerm: 'turn', partOfSpeech: ['verb', 'noun'], ipa: '/tˈɜːn/',
    chineseShort: '转动；转弯', chineseExplanation: '改变方向或使某物旋转，也可表示一个人的轮次。', englishDefinition: 'To change direction or move around a point.',
    examples: [{ english: 'Turn left at the bank.', chinese: '在银行那里左转。' }], collocations: ['turn left', 'turn on'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'happen', term: 'happen', normalizedTerm: 'happen', partOfSpeech: ['verb'], ipa: '/hˈapən/',
    chineseShort: '发生', chineseExplanation: '某件事情出现或进行。', englishDefinition: 'To take place or occur.',
    examples: [{ english: 'What happened yesterday?', chinese: '昨天发生了什么？' }], collocations: ['happen again', 'what happened'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'big', term: 'big', normalizedTerm: 'big', partOfSpeech: ['adjective'], ipa: '/bˈɪɡ/',
    chineseShort: '大的', chineseExplanation: '尺寸、数量或程度比一般的大。', englishDefinition: 'Large in size, amount, or degree.',
    examples: [{ english: 'They live in a big house.', chinese: '他们住在一所大房子里。' }], collocations: ['big city', 'big problem'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'small', term: 'small', normalizedTerm: 'small', partOfSpeech: ['adjective'], ipa: '/smˈɔːl/',
    chineseShort: '小的', chineseExplanation: '尺寸、数量或程度不大。', englishDefinition: 'Not large in size, amount, or degree.',
    examples: [{ english: 'I need a small bag.', chinese: '我需要一个小包。' }], collocations: ['small room', 'small child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'long', term: 'long', normalizedTerm: 'long', partOfSpeech: ['adjective'], ipa: '/lˈɒŋ/',
    chineseShort: '长的；长时间的', chineseExplanation: '距离、长度或持续时间较大。', englishDefinition: 'Having a great distance from one end to the other, or lasting a lot of time.',
    examples: [{ english: 'She has long hair.', chinese: '她留着长头发。' }], collocations: ['long time', 'long hair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'short', term: 'short', normalizedTerm: 'short', partOfSpeech: ['adjective'], ipa: '/ʃˈɔːt/',
    chineseShort: '短的；矮的', chineseExplanation: '长度或时间不长，也可形容人个子不高。', englishDefinition: 'Not long in distance or time, or not tall.',
    examples: [{ english: 'The lesson is short today.', chinese: '今天的课程很短。' }], collocations: ['short time', 'short hair'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tall', term: 'tall', normalizedTerm: 'tall', partOfSpeech: ['adjective'], ipa: '/tˈɔːl/',
    chineseShort: '高的；高个的', chineseExplanation: '身高或垂直高度较大。', englishDefinition: 'Having greater than average height.',
    examples: [{ english: 'My brother is very tall.', chinese: '我的哥哥很高。' }], collocations: ['tall man', 'tall building'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'young', term: 'young', normalizedTerm: 'young', partOfSpeech: ['adjective'], ipa: '/jˈʌŋ/',
    chineseShort: '年轻的；年幼的', chineseExplanation: '年龄较小，或存在时间不长。', englishDefinition: 'Not old; having lived for only a short time.',
    examples: [{ english: 'She is a young teacher.', chinese: '她是一位年轻老师。' }], collocations: ['young people', 'young child'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'old', term: 'old', normalizedTerm: 'old', partOfSpeech: ['adjective'], ipa: '/ˈəʊld/',
    chineseShort: '年老的；旧的', chineseExplanation: '年龄较大，或存在、使用了很长时间。', englishDefinition: 'Having lived or existed for a long time.',
    examples: [{ english: 'This is an old house.', chinese: '这是一所老房子。' }], collocations: ['old man', 'old friend'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'new', term: 'new', normalizedTerm: 'new', partOfSpeech: ['adjective'], ipa: '/njˈuː/',
    chineseShort: '新的', chineseExplanation: '最近制造、购买、开始或出现的。', englishDefinition: 'Recently made, bought, started, or discovered.',
    examples: [{ english: 'I bought a new phone.', chinese: '我买了一部新手机。' }], collocations: ['new job', 'new student'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'good', term: 'good', normalizedTerm: 'good', partOfSpeech: ['adjective'], ipa: '/ɡˈʊd/',
    chineseShort: '好的', chineseExplanation: '质量高、令人满意或正确合适。', englishDefinition: 'Of high quality, pleasant, or suitable.',
    examples: [{ english: 'This is a good book.', chinese: '这是一本好书。' }], collocations: ['good idea', 'good job'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'bad', term: 'bad', normalizedTerm: 'bad', partOfSpeech: ['adjective'], ipa: '/bˈad/',
    chineseShort: '坏的；不好的', chineseExplanation: '质量差、不愉快或有问题。', englishDefinition: 'Not good, pleasant, or suitable.',
    examples: [{ english: 'The weather is bad today.', chinese: '今天天气不好。' }], collocations: ['bad weather', 'bad idea'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'happy', term: 'happy', normalizedTerm: 'happy', partOfSpeech: ['adjective'], ipa: '/hˈapi/',
    chineseShort: '开心的；幸福的', chineseExplanation: '感到高兴、满足或愉快。', englishDefinition: 'Feeling pleased or joyful.',
    examples: [{ english: 'The children are happy today.', chinese: '孩子们今天很开心。' }], collocations: ['feel happy', 'happy birthday'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'sad', term: 'sad', normalizedTerm: 'sad', partOfSpeech: ['adjective'], ipa: '/sˈad/',
    chineseShort: '伤心的；难过的', chineseExplanation: '感到不开心或失落。', englishDefinition: 'Feeling unhappy or sorry.',
    examples: [{ english: 'She felt sad after her friend left.', chinese: '朋友离开后她感到难过。' }], collocations: ['feel sad', 'sad story'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'easy', term: 'easy', normalizedTerm: 'easy', partOfSpeech: ['adjective'], ipa: '/ˈiːzi/',
    chineseShort: '容易的', chineseExplanation: '不需要很多努力或不难理解。', englishDefinition: 'Not difficult; needing little effort.',
    examples: [{ english: 'This question is easy.', chinese: '这个问题很容易。' }], collocations: ['easy question', 'easy to use'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'difficult', term: 'difficult', normalizedTerm: 'difficult', partOfSpeech: ['adjective'], ipa: '/dˈɪfɪkəlt/',
    chineseShort: '困难的', chineseExplanation: '需要较多努力、技巧或理解能力。', englishDefinition: 'Hard to do, understand, or deal with.',
    examples: [{ english: 'The last question is difficult.', chinese: '最后一个问题很难。' }], collocations: ['difficult question', 'very difficult'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'fast', term: 'fast', normalizedTerm: 'fast', partOfSpeech: ['adjective', 'adverb'], ipa: '/fˈast/',
    chineseShort: '快的；快速地', chineseExplanation: '以很高速度移动或发生。', englishDefinition: 'Moving or happening at high speed.',
    examples: [{ english: 'The train is very fast.', chinese: '这列火车很快。' }], collocations: ['fast car', 'run fast'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'slow', term: 'slow', normalizedTerm: 'slow', partOfSpeech: ['adjective'], ipa: '/slˈəʊ/',
    chineseShort: '慢的', chineseExplanation: '速度较低，需要较长时间完成。', englishDefinition: 'Moving or happening at a low speed.',
    examples: [{ english: 'The bus is slow this morning.', chinese: '今天早上的巴士很慢。' }], collocations: ['slow train', 'slow down'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'busy', term: 'busy', normalizedTerm: 'busy', partOfSpeech: ['adjective'], ipa: '/bˈɪzi/',
    chineseShort: '忙的；繁忙的', chineseExplanation: '有很多事情要做，或某地有很多人和活动。', englishDefinition: 'Having a lot to do, or full of people and activity.',
    examples: [{ english: 'I am busy this afternoon.', chinese: '我今天下午很忙。' }], collocations: ['busy day', 'busy street'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'free', term: 'free', normalizedTerm: 'free', partOfSpeech: ['adjective'], ipa: '/fɹˈiː/',
    chineseShort: '空闲的；免费的', chineseExplanation: '没有被占用，也可表示不需要付钱。', englishDefinition: 'Not busy or occupied, or costing no money.',
    examples: [{ english: 'Are you free this evening?', chinese: '你今晚有空吗？' }], collocations: ['free time', 'free entry'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'noisy', term: 'noisy', normalizedTerm: 'noisy', partOfSpeech: ['adjective'], ipa: '/nˈɔɪzi/',
    chineseShort: '吵闹的；嘈杂的', chineseExplanation: '有很多声音，声音大而让人难以安静。', englishDefinition: 'Making a lot of loud or unpleasant sound.',
    examples: [{ english: 'The street is noisy in the evening.', chinese: '这条街晚上很吵。' }], collocations: ['noisy street', 'noisy room'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'dirty', term: 'dirty', normalizedTerm: 'dirty', partOfSpeech: ['adjective'], ipa: '/dˈɜːti/',
    chineseShort: '脏的', chineseExplanation: '有污垢、灰尘或不洁净。', englishDefinition: 'Covered with dirt or not clean.',
    examples: [{ english: 'Your shoes are dirty.', chinese: '你的鞋子脏了。' }], collocations: ['dirty clothes', 'dirty floor'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'beautiful', term: 'beautiful', normalizedTerm: 'beautiful', partOfSpeech: ['adjective'], ipa: '/bjˈuːtifəl/',
    chineseShort: '美丽的；漂亮的', chineseExplanation: '外表或感觉非常好看、令人愉快。', englishDefinition: 'Very attractive or pleasant to look at.',
    examples: [{ english: 'The beach is beautiful in the morning.', chinese: '早上的海滩很美。' }], collocations: ['beautiful place', 'beautiful day'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ugly', term: 'ugly', normalizedTerm: 'ugly', partOfSpeech: ['adjective'], ipa: '/ˈʌɡli/',
    chineseShort: '难看的；丑的', chineseExplanation: '外表不漂亮或不吸引人。', englishDefinition: 'Not attractive or pleasant to look at.',
    examples: [{ english: 'He thinks the old wall is ugly.', chinese: '他觉得那面旧墙很难看。' }], collocations: ['ugly building', 'look ugly'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'kind', term: 'kind', normalizedTerm: 'kind', partOfSpeech: ['adjective'], ipa: '/kˈaɪnd/',
    chineseShort: '善良的；友好的', chineseExplanation: '愿意帮助别人，并且对别人好。', englishDefinition: 'Caring and helpful toward other people.',
    examples: [{ english: 'Our neighbor is very kind.', chinese: '我们的邻居很善良。' }], collocations: ['kind person', 'very kind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'nice', term: 'nice', normalizedTerm: 'nice', partOfSpeech: ['adjective'], ipa: '/nˈaɪs/',
    chineseShort: '好的；令人愉快的', chineseExplanation: '令人喜欢、舒服或友善的。', englishDefinition: 'Pleasant, enjoyable, or friendly.',
    examples: [{ english: 'We had a nice day at the beach.', chinese: '我们在海滩度过了愉快的一天。' }], collocations: ['nice day', 'nice person'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'friendly', term: 'friendly', normalizedTerm: 'friendly', partOfSpeech: ['adjective'], ipa: '/fɹˈɛndli/',
    chineseShort: '友善的；亲切的', chineseExplanation: '对别人表现得友好、容易相处。', englishDefinition: 'Kind and pleasant toward other people.',
    examples: [{ english: 'The hotel staff are friendly.', chinese: '酒店员工很友善。' }], collocations: ['friendly person', 'friendly smile'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'angry', term: 'angry', normalizedTerm: 'angry', partOfSpeech: ['adjective'], ipa: '/ˈaŋɡɹi/',
    chineseShort: '生气的；愤怒的', chineseExplanation: '因为不喜欢或不满意某事而感到强烈不快。', englishDefinition: 'Feeling strong displeasure about something.',
    examples: [{ english: 'He was angry about the mistake.', chinese: '他对那个错误感到生气。' }], collocations: ['feel angry', 'angry with'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'tired', term: 'tired', normalizedTerm: 'tired', partOfSpeech: ['adjective'], ipa: '/tˈaɪəd/',
    chineseShort: '疲倦的；累的', chineseExplanation: '需要休息或睡觉的感觉。', englishDefinition: 'Feeling that you need rest or sleep.',
    examples: [{ english: 'I am tired after work.', chinese: '下班后我很累。' }], collocations: ['feel tired', 'very tired'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'afraid', term: 'afraid', normalizedTerm: 'afraid', partOfSpeech: ['adjective'], ipa: '/ɐfɹˈeɪd/',
    chineseShort: '害怕的', chineseExplanation: '因为危险或担心某事而感到恐惧。', englishDefinition: 'Feeling fear or worry about something.',
    examples: [{ english: 'The child is afraid of the dark.', chinese: '那个孩子怕黑。' }], collocations: ['afraid of', 'feel afraid'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'ready', term: 'ready', normalizedTerm: 'ready', partOfSpeech: ['adjective'], ipa: '/ɹˈɛdi/',
    chineseShort: '准备好的', chineseExplanation: '已经完成准备，可以开始做某事。', englishDefinition: 'Prepared and able to begin.',
    examples: [{ english: 'Dinner is ready.', chinese: '晚餐准备好了。' }], collocations: ['get ready', 'ready to go'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'full', term: 'full', normalizedTerm: 'full', partOfSpeech: ['adjective'], ipa: '/fˈʊl/',
    chineseShort: '满的；饱的', chineseExplanation: '装满东西，或吃过足够食物后不再饿。', englishDefinition: 'Containing as much as possible, or having eaten enough.',
    examples: [{ english: 'The bus is full.', chinese: '巴士满了。' }], collocations: ['full of', 'feel full'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'empty', term: 'empty', normalizedTerm: 'empty', partOfSpeech: ['adjective'], ipa: '/ˈɛmpti/',
    chineseShort: '空的', chineseExplanation: '里面没有人或东西。', englishDefinition: 'Containing nothing or no one.',
    examples: [{ english: 'The bottle is empty.', chinese: '瓶子是空的。' }], collocations: ['empty room', 'empty bottle'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'strong', term: 'strong', normalizedTerm: 'strong', partOfSpeech: ['adjective'], ipa: '/stɹˈɒŋ/',
    chineseShort: '强壮的；强的', chineseExplanation: '有很大力量，或程度很强。', englishDefinition: 'Having a lot of physical power or force.',
    examples: [{ english: 'He is strong enough to carry the box.', chinese: '他够强壮，可以搬这个箱子。' }], collocations: ['strong man', 'strong wind'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'weak', term: 'weak', normalizedTerm: 'weak', partOfSpeech: ['adjective'], ipa: '/wˈiːk/',
    chineseShort: '虚弱的；弱的', chineseExplanation: '力量不足，或强度较低。', englishDefinition: 'Not strong or powerful.',
    examples: [{ english: 'I felt weak after being sick.', chinese: '生病后我觉得很虚弱。' }], collocations: ['feel weak', 'weak body'], level: 1, cefr: 'A2', categories: ['Daily English'],
  },
  {
    id: 'rich', term: 'rich', normalizedTerm: 'rich', partOfSpeech: ['adjective'], ipa: '/ɹˈɪtʃ/',
    chineseShort: '富有的；丰富的', chineseExplanation: '拥有很多钱或贵重物品。', englishDefinition: 'Having a lot of money or valuable things.',
    examples: [{ english: 'The rich man owns a large house.', chinese: '那个富有的男人拥有一所大房子。' }], collocations: ['rich family', 'rich person'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'poor', term: 'poor', normalizedTerm: 'poor', partOfSpeech: ['adjective'], ipa: '/pˈʊə/',
    chineseShort: '贫穷的；差的', chineseExplanation: '拥有很少的钱，也可表示质量不好。', englishDefinition: 'Having very little money, or being of low quality.',
    examples: [{ english: 'The family was poor but happy.', chinese: '那个家庭虽然贫穷但很快乐。' }], collocations: ['poor family', 'poor quality'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'cheap', term: 'cheap', normalizedTerm: 'cheap', partOfSpeech: ['adjective'], ipa: '/tʃˈiːp/',
    chineseShort: '便宜的', chineseExplanation: '价格低，不需要花很多钱。', englishDefinition: 'Costing little money.',
    examples: [{ english: 'These shoes are cheap.', chinese: '这些鞋很便宜。' }], collocations: ['cheap price', 'cheap food'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'expensive', term: 'expensive', normalizedTerm: 'expensive', partOfSpeech: ['adjective'], ipa: '/ɛkspˈɛnsɪv/',
    chineseShort: '昂贵的', chineseExplanation: '价格高，需要花很多钱。', englishDefinition: 'Costing a lot of money.',
    examples: [{ english: 'That hotel is too expensive for us.', chinese: '那家酒店对我们来说太贵了。' }], collocations: ['expensive car', 'very expensive'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'right', term: 'right', normalizedTerm: 'right', partOfSpeech: ['adjective', 'noun'], ipa: '/ɹˈaɪt/',
    chineseShort: '正确的；右边', chineseExplanation: '正确的，也可表示与左边相反的方向。', englishDefinition: 'Correct, or the side opposite left.',
    examples: [{ english: 'Your answer is right.', chinese: '你的答案是对的。' }], collocations: ['right answer', 'turn right'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'wrong', term: 'wrong', normalizedTerm: 'wrong', partOfSpeech: ['adjective'], ipa: '/ɹˈɒŋ/',
    chineseShort: '错误的；不对的', chineseExplanation: '不正确、不合适或与事实不符。', englishDefinition: 'Not correct or true.',
    examples: [{ english: 'This answer is wrong.', chinese: '这个答案是错的。' }], collocations: ['wrong answer', 'go wrong'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
  {
    id: 'same', term: 'same', normalizedTerm: 'same', partOfSpeech: ['adjective'], ipa: '/sˈeɪm/',
    chineseShort: '相同的；同样的', chineseExplanation: '与另一个人或事物没有区别，或完全一致。', englishDefinition: 'Exactly like another person or thing.',
    examples: [{ english: 'We are in the same class.', chinese: '我们在同一个班。' }], collocations: ['same time', 'same place'], level: 1, cefr: 'A1', categories: ['Daily English'],
  },
] satisfies readonly VocabularyItem[]
