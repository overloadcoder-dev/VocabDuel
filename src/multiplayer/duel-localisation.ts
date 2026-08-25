import { localiseStaticRoot, localisedStaticText } from '../components/localise-static'
import type { AppLanguage } from '../config/locale'

const english: Record<string, string> = {
  'English → Chinese': 'English → meaning', 'Chinese → English': 'Meaning → English',
  '好友单词对战 · PRIVATE 1V1': 'FRIENDLY WORD DUEL · PRIVATE 1V1', '和朋友来一场': 'Challenge a friend to an', '英语词汇对决': 'English vocabulary duel',
  '建立或加入私人房间，两位玩家会收到相同题目与同步倒计时。无需注册，输入昵称即可开始。': 'Create or join a private room. Both players receive the same questions and a synchronized countdown. No registration—just enter a nickname to begin.',
  '无需注册': 'No registration', '题目同步': 'Synchronized questions', '即时计分': 'Live scoring', '正在准备多人对战…': 'Preparing Duel…',
  '轻松练习，和朋友一起进步': 'Practise casually and improve together',
  '本模式适合好友之间练习英语，并非防作弊的竞技排名。即使多人服务暂时不可用，你仍可继续单人学习。': 'This mode is for friendly English practice, not cheat-proof competitive ranking. If multiplayer is temporarily unavailable, you can still continue learning solo.',
  '好友多人单词对战 · 2–4 PLAYERS': 'FRIENDLY MULTI DUEL · 2–4 PLAYERS', '更多朋友，同一场': 'More friends, one',
  '建立最多三人或四人的私人房间。只要已有至少两位玩家且所有人准备完成，房主就能直接开始，不必为了人数不足重新建房。': 'Create a private room for up to three or four players. Once at least two players have joined and everyone is ready, the host can start immediately.',
  '2–4 人开局': 'Start with 2–4 players', '同步题目': 'Synchronized questions', '即时排名': 'Live standings', '正在准备 Multi Duel…': 'Preparing Multi Duel…',
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
  建: '1', 多: '1', 加: '2', '房间码': 'Room code', '10 题': '10 questions', '15 题': '15 questions', '20 题': '20 questions', '10 秒': '10 seconds', '15 秒': '15 seconds', '20 秒': '20 seconds',
  秒: 's',
  '房间人数上限': 'Maximum players', '最多 4 人': 'Up to 4 players', '最多 3 人': 'Up to 3 players', '加入 Multi Duel': 'Join Multi Duel', '输入朋友分享的 6 位多人房间码。': 'Enter the 6-character Multi Duel room code shared by your friend.',
  '输入或贴上 6 位房间码，英文字母会自动转为大写。': 'Enter or paste the 6-character room code. Letters are changed to uppercase automatically.',
  '好友邀请 · 1V1 DUEL': 'FRIEND INVITATION · 1V1 DUEL', '好友邀请 · MULTI DUEL': 'FRIEND INVITATION · MULTI DUEL', '你获邀加入一场单词对战': 'You are invited to a word duel', '你获邀加入多人单词对战': 'You are invited to a Multi Duel', '房间已经准备好。输入昵称后即可进入等候室。': 'The room is ready. Enter a nickname to join the lobby.', '已从邀请链接自动填写': 'Filled from the invitation link', '接受邀请并加入': 'Accept and join', '使用其他房间码': 'Use another room code',
  '房间码 · ROOM CODE': 'ROOM CODE',
  '对战特色': 'Duel features', '对战说明': 'Duel information', '多人对战特色': 'Multi Duel features', '多人对战说明': 'Multi Duel information',
  '复制房间码': 'Copy room code', '分享房间链接': 'Share room link', '对战设定': 'Duel settings', '房间玩家': 'Room players',
  '✓ 已准备': '✓ Ready', '尚未准备': 'Not ready', '正在重新连接…': 'Reconnecting…',
  '把房间码分享给朋友，等待对方加入。': 'Share the room code and wait for your friend to join.',
  '取消准备': 'Cancel ready', '我准备好了': "I'm ready", '离开房间': 'Leave room', '连接正常': 'Connected', '连接中断': 'Disconnected',
  '准备': 'Ready', '双方已接受再战': 'Both players accepted the rematch', '双方都准备好了': 'Both players are ready',
  '所有玩家已接受再战': 'All players accepted the rematch', '所有玩家都准备好了': 'All players are ready',
  '下一场对决即将开始。': 'The next duel is about to begin.', '集中精神，对战即将开始！': 'Focus—the duel is about to begin!',
  '正在同步对战…': 'Synchronizing duel…', '正在计算最终分数…': 'Calculating final scores…',
  '暂时无法产生题目，请重新尝试。': 'A question could not be generated. Please try again.',
  '对战已结束': 'Duel ended', '对手已断线': 'Your opponent disconnected', '连接在 30 秒内没有恢复，本场计分已停止。': 'The connection did not recover within 30 seconds, so scoring has stopped.',
  '返回多人对战': 'Return to Duel', '单人练习': 'Solo practice', '查看结果': 'View results', '下一题': 'Next question',
  '即时排名与作答状态': 'Live standings and answer status', '思考中': 'Thinking', '已作答': 'Answered', '正确': 'Correct', '错误': 'Incorrect', '离线': 'Offline',
  '听发音，选出正确答案': 'Listen and choose the correct answer', '请选择正确答案': 'Choose the correct answer', '播放单词发音': 'Play word pronunciation',
  '，回答正确': ', correct answer', '，正确答案': ', correct choice', '，回答错误': ', incorrect answer', '，已选择': ', selected',
  '✓ 回答正确': '✓ Correct', '✕ 回答错误': '✕ Incorrect', '时间到': "Time's up", '答案已锁定，等待对手作答…': 'Answer locked. Waiting for your opponent…', '答案已锁定，等待其他玩家作答…': 'Answer locked. Waiting for the other players…',
  '平手': 'Draw', '胜利！': 'Victory!', '再接再厉': 'Keep going', '并列第一！': 'Joint first!',
  '对战完成 · MATCH COMPLETE': 'DUEL COMPLETE · MATCH COMPLETE', '双方成绩对比': 'Player score comparison', '多人对战排名': 'Multi Duel standings',
  '你': 'You', '对手': 'Opponent', '得分': 'Score', '正确率': 'Accuracy', '答对': 'Correct', '答错': 'Incorrect', '平均用时': 'Average time',
  '满分！所有单词都答对了。': 'Perfect score! Every word was correct.', '对手已离线': 'Opponent offline', '已提出再战…': 'Rematch requested…', '再战一场': 'Play a rematch',
  '正在等待对手；双方都同意后会自动开始下一场。': 'Waiting for your opponent. The next match starts when both players agree.',
  '房主': 'Host', '移除离线玩家': 'Remove offline player', '等待玩家': 'Waiting for player', '分享房间码邀请朋友': 'Share the room code to invite friends',
  '房间已满；所有玩家准备后会自动开始。': 'The room is full. It starts automatically when everyone is ready.',
  '至少需要 2 人': 'At least 2 players required', '连接中': 'Connecting',
  '所有玩家准备后会自动开始。': 'The match starts automatically when every player is ready.',
  '查看全部单词与词义': 'View all words and meanings', '复习答错的单词': 'Review incorrect words',
  '房间码已复制。': 'Room code copied.', '复制失败，请手动选择并复制房间码。': 'Copy failed. Select and copy the room code manually.',
  '邀请内容与链接已复制。': 'Invitation and link copied.', '无法分享邀请，请改为复制房间码。': 'The invitation could not be shared. Copy the room code instead.',
  '答案提交失败，请检查网络连接。': 'The answer could not be submitted. Check your connection.', '再战请求失败，请检查网络后重试。': 'The rematch request failed. Check your connection and try again.',
  '房间已关闭。': 'The room has closed.', '你已离开此房间。': 'You have left the room.', '你已离开或被房主移出此房间。': 'You left the room or were removed by the host.',
  '无法更新准备状态，请检查网络连接。': 'Ready status could not be updated. Check your connection.',
  '多人对战未连接': 'Duel is not connected', '暂时无法使用多人对战': 'Duel is temporarily unavailable',
  'Firebase 环境变量尚未设定；单词学习和单人游戏仍可正常使用。': 'Firebase environment variables are not configured. Learning and solo games remain available.',
  '开发者可按照 README 设定 Firebase 或本地模拟器。': 'Developers can configure Firebase or the local emulator using the README.',
  '无法连接多人对战': 'Could not connect to Duel', '重新连接': 'Reconnect', '请稍后再试。': 'Please try again later.',
  'MULTI DUEL 未连接': 'MULTI DUEL NOT CONNECTED', '暂时无法使用 Multi Duel': 'Multi Duel is temporarily unavailable',
  'Firebase 环境变量尚未设定；原有 1v1 对战、单词学习和单人游戏不受影响。': 'Firebase environment variables are not configured. 1v1 Duel, learning and solo games remain available.',
  '前往 1v1 Duel': 'Go to 1v1 Duel', '无法连接 Multi Duel': 'Could not connect to Multi Duel', '返回 1v1 Duel': 'Return to 1v1 Duel',
  '房间码不完整': 'Incomplete room code', '请输入完整的六位房间码，然后再试一次。': 'Enter the complete six-character room code and try again.',
  '6 位房间码': '6-character room code', '排名未定': 'Ranking not decided', '播放发音': 'Play pronunciation',
  '昵称须为 2–16 个字符。': 'Nickname must contain 2–16 characters.', '昵称只可包含文字、数字、空格、连字号及底线。': 'Nickname may contain letters, numbers, spaces, hyphens and underscores only.',
  '房间已满': 'Room full', '这个房间已经没有空位了。请向房主确认，或建立一个新房间。': 'This room has no available places. Check with the host or create a new room.',
  '对战已经开始': 'Duel already started', '这场对战已经开始，暂时不能加入。请等待下一场，或建立一个新房间。': 'This duel has already started. Wait for the next match or create a new room.',
  '房间已过期': 'Room expired', '这个房间码已经过期。请向房主索取新的房间码。': 'This room code has expired. Ask the host for a new code.',
  '找不到房间': 'Room not found', '请检查六位房间码是否正确，然后再试一次。': 'Check the six-character room code and try again.',
  '无法加入房间': 'Could not join room', '暂时无法加入房间，请稍后再试。': 'The room cannot be joined right now. Try again later.',
  '无法建立房间，请重新尝试。': 'The room could not be created. Try again.', '无法建立房间，请稍后再试。': 'The room could not be created. Try again later.',
  '找不到此房间，请检查房间码。': 'Room not found. Check the room code.', '此房间已过期。': 'This room has expired.', '此房间的对战已经开始。': 'This room duel has already started.', '此房间人数已满。': 'This room is full.', '此房间人数已满或已无法加入。': 'This room is full or cannot be joined.',
  '无法开始对战，请双方重新按下准备。': 'The duel could not start. Both players should select ready again.', '无法开始再战，请重新尝试。': 'The rematch could not start. Try again.',
  '此浏览器无法播放语音。': 'This browser cannot play pronunciation audio.',
  '至少需要 2 位在线玩家': 'At least 2 online players required', '与在线玩家再战': 'Rematch with online players',
  '无法开始多人对战，请重新尝试。': 'Multi Duel could not start. Try again.', '无法开始多人对战，请确认所有当前玩家都已准备。': 'Multi Duel could not start. Confirm that every current player is ready.',
  '无法移除此玩家，请检查房间状态后重试。': 'The player could not be removed. Check the room status and try again.',
  '无法建立多人房间，请重新尝试。': 'The Multi Duel room could not be created. Try again.', '找不到此多人房间，请检查房间码。': 'Multi Duel room not found. Check the room code.',
  '此多人房间已过期。': 'This Multi Duel room has expired.', '此多人对战已经开始。': 'This Multi Duel has already started.', '此多人房间人数已满。': 'This Multi Duel room is full.', '此多人房间人数已满或已无法加入。': 'This Multi Duel room is full or cannot be joined.',
}

const malay: Record<string, string> = {
  '好友单词对战 · PRIVATE 1V1': 'DUEL PERKATAAN RAKAN · PRIVATE 1V1', '和朋友来一场': 'Cabar rakan dalam', '英语词汇对决': 'duel kosa kata Bahasa Inggeris',
  '建立或加入私人房间，两位玩家会收到相同题目与同步倒计时。无需注册，输入昵称即可开始。': 'Cipta atau sertai bilik peribadi. Kedua-dua pemain menerima soalan yang sama dan kira detik yang diselaraskan. Masukkan nama panggilan untuk bermula.',
  '无需注册': 'Tanpa pendaftaran', '题目同步': 'Soalan diselaraskan', '即时计分': 'Markah langsung', '正在准备多人对战…': 'Menyediakan Duel…',
  '轻松练习，和朋友一起进步': 'Berlatih santai dan maju bersama rakan',
  '本模式适合好友之间练习英语，并非防作弊的竞技排名。即使多人服务暂时不可用，你仍可继续单人学习。': 'Mod ini sesuai untuk latihan Bahasa Inggeris bersama rakan, bukan kedudukan pertandingan kalis penipuan. Jika perkhidmatan berbilang pemain tergendala, anda masih boleh belajar secara solo.',
  '好友多人单词对战 · 2–4 PLAYERS': 'MULTI DUEL RAKAN · 2–4 PEMAIN', '更多朋友，同一场': 'Lebih ramai rakan, satu',
  '建立最多三人或四人的私人房间。只要已有至少两位玩家且所有人准备完成，房主就能直接开始，不必为了人数不足重新建房。': 'Cipta bilik peribadi untuk tiga atau empat pemain. Apabila sekurang-kurangnya dua pemain telah masuk dan semua sudah bersedia, hos boleh terus bermula.',
  '2–4 人开局': 'Mula dengan 2–4 pemain', '同步题目': 'Soalan diselaraskan', '即时排名': 'Kedudukan langsung', '正在准备 Multi Duel…': 'Menyediakan Multi Duel…',
  'Multi Duel 与原有 1v1 Duel 分开运行': 'Multi Duel beroperasi berasingan daripada 1v1 Duel',
  '多人房间使用独立的数据空间；原有双人房间、计分和再战流程保持不变。': 'Bilik berbilang pemain menggunakan data berasingan. Bilik 1v1, pemarkahan dan perlawanan semula kekal seperti biasa.',
  '建立私人房间': 'Cipta bilik peribadi', '设定题目后，把房间码分享给朋友。': 'Pilih soalan, kemudian kongsi kod bilik dengan rakan.', '加入朋友的房间': 'Sertai bilik rakan', '向房主取得 6 位房间码即可加入。': 'Dapatkan kod bilik 6 aksara daripada hos.',
  '你的昵称': 'Nama panggilan', '词汇等级': 'Tahap kosa kata', '词汇类别': 'Kategori kosa kata', '挑战模式': 'Jenis permainan', '题目数量': 'Bilangan soalan', '每题时间': 'Masa setiap soalan',
  '建立房间并邀请朋友': 'Cipta bilik dan jemput rakan', '加入房间': 'Sertai bilik', '正在建立房间…': 'Mencipta bilik…', '正在加入…': 'Menyertai…',
  '建立 Multi Duel 房间': 'Cipta bilik Multi Duel', '最多 3 或 4 人；人数未满时，房主也可以直接开始。': 'Pilih bilik untuk sehingga 3 atau 4 pemain; hos boleh bermula sebelum bilik penuh.', '建立房间并邀请多人': 'Cipta bilik dan jemput pemain', '加入 Multi Duel 房间': 'Sertai bilik Multi Duel',
  '全部类别': 'Semua kategori', '日常英语': 'Bahasa Inggeris harian', '旅游': 'Perjalanan', '校园': 'Sekolah', '商务': 'Perniagaan', '科技': 'Teknologi', '学术': 'Akademik',
  '英文 → 中文': 'Bahasa Inggeris → makna', '中文 → 英文': 'Makna → Bahasa Inggeris', '听发音选单词': 'Dengar dan pilih', '语境判断': 'Cabaran konteks',
  建: '1', 多: '1', 加: '2', '房间码': 'Kod bilik', '10 题': '10 soalan', '15 题': '15 soalan', '20 题': '20 soalan', '10 秒': '10 saat', '15 秒': '15 saat', '20 秒': '20 saat',
  秒: 's',
  '房间人数上限': 'Bilangan maksimum pemain', '最多 4 人': 'Sehingga 4 pemain', '最多 3 人': 'Sehingga 3 pemain', '加入 Multi Duel': 'Sertai Multi Duel', '输入朋友分享的 6 位多人房间码。': 'Masukkan kod bilik Multi Duel 6 aksara yang dikongsi oleh rakan anda.',
  '输入或贴上 6 位房间码，英文字母会自动转为大写。': 'Masukkan atau tampal kod bilik 6 aksara. Huruf akan ditukar kepada huruf besar secara automatik.',
  '好友邀请 · 1V1 DUEL': 'JEMPUTAN RAKAN · 1V1 DUEL', '好友邀请 · MULTI DUEL': 'JEMPUTAN RAKAN · MULTI DUEL', '你获邀加入一场单词对战': 'Anda dijemput menyertai duel perkataan', '你获邀加入多人单词对战': 'Anda dijemput menyertai Multi Duel', '房间已经准备好。输入昵称后即可进入等候室。': 'Bilik sudah sedia. Masukkan nama panggilan untuk menyertai ruang menunggu.', '已从邀请链接自动填写': 'Diisi daripada pautan jemputan', '接受邀请并加入': 'Terima dan sertai', '使用其他房间码': 'Gunakan kod bilik lain',
  '房间码 · ROOM CODE': 'KOD BILIK',
  '对战特色': 'Ciri duel', '对战说明': 'Maklumat duel', '多人对战特色': 'Ciri Multi Duel', '多人对战说明': 'Maklumat Multi Duel',
  '复制房间码': 'Salin kod bilik', '分享房间链接': 'Kongsi pautan bilik', '对战设定': 'Tetapan duel', '房间玩家': 'Pemain bilik',
  '✓ 已准备': '✓ Bersedia', '尚未准备': 'Belum bersedia', '正在重新连接…': 'Menyambung semula…',
  '把房间码分享给朋友，等待对方加入。': 'Kongsi kod bilik dan tunggu rakan anda menyertai.',
  '取消准备': 'Batalkan kesediaan', '我准备好了': 'Saya bersedia', '离开房间': 'Keluar bilik', '连接正常': 'Disambungkan', '连接中断': 'Sambungan terputus',
  '准备': 'Bersedia', '双方已接受再战': 'Kedua-dua pemain menerima perlawanan semula', '双方都准备好了': 'Kedua-dua pemain sudah bersedia',
  '所有玩家已接受再战': 'Semua pemain menerima perlawanan semula', '所有玩家都准备好了': 'Semua pemain sudah bersedia',
  '下一场对决即将开始。': 'Duel seterusnya akan bermula.', '集中精神，对战即将开始！': 'Bersedia—duel akan bermula!',
  '正在同步对战…': 'Menyelaraskan duel…', '正在计算最终分数…': 'Mengira markah akhir…',
  '暂时无法产生题目，请重新尝试。': 'Soalan tidak dapat dijana. Cuba lagi.',
  '对战已结束': 'Duel tamat', '对手已断线': 'Lawan terputus sambungan', '连接在 30 秒内没有恢复，本场计分已停止。': 'Sambungan tidak pulih dalam 30 saat, jadi pemarkahan dihentikan.',
  '返回多人对战': 'Kembali ke Duel', '单人练习': 'Latihan solo', '查看结果': 'Lihat keputusan', '下一题': 'Soalan seterusnya',
  '即时排名与作答状态': 'Kedudukan dan status jawapan langsung', '思考中': 'Sedang berfikir', '已作答': 'Sudah menjawab', '正确': 'Betul', '错误': 'Salah', '离线': 'Luar talian',
  '听发音，选出正确答案': 'Dengar dan pilih jawapan yang betul', '请选择正确答案': 'Pilih jawapan yang betul', '播放单词发音': 'Mainkan sebutan perkataan',
  '，回答正确': ', jawapan betul', '，正确答案': ', pilihan betul', '，回答错误': ', jawapan salah', '，已选择': ', dipilih',
  '✓ 回答正确': '✓ Betul', '✕ 回答错误': '✕ Salah', '时间到': 'Masa tamat', '答案已锁定，等待对手作答…': 'Jawapan dikunci. Menunggu lawan…', '答案已锁定，等待其他玩家作答…': 'Jawapan dikunci. Menunggu pemain lain…',
  '平手': 'Seri', '胜利！': 'Menang!', '再接再厉': 'Cuba lagi', '并列第一！': 'Tempat pertama bersama!',
  '对战完成 · MATCH COMPLETE': 'DUEL SELESAI · MATCH COMPLETE', '双方成绩对比': 'Perbandingan markah pemain', '多人对战排名': 'Kedudukan Multi Duel',
  '你': 'Anda', '对手': 'Lawan', '得分': 'Markah', '正确率': 'Ketepatan', '答对': 'Betul', '答错': 'Salah', '平均用时': 'Purata masa',
  '满分！所有单词都答对了。': 'Markah penuh! Semua perkataan dijawab dengan betul.', '对手已离线': 'Lawan di luar talian', '已提出再战…': 'Perlawanan semula diminta…', '再战一场': 'Main semula',
  '正在等待对手；双方都同意后会自动开始下一场。': 'Menunggu lawan. Perlawanan seterusnya bermula apabila kedua-dua pemain bersetuju.',
  '房主': 'Hos', '移除离线玩家': 'Keluarkan pemain luar talian', '等待玩家': 'Menunggu pemain', '分享房间码邀请朋友': 'Kongsi kod bilik untuk menjemput rakan',
  '房间已满；所有玩家准备后会自动开始。': 'Bilik penuh. Permainan bermula apabila semua pemain bersedia.',
  '至少需要 2 人': 'Sekurang-kurangnya 2 pemain diperlukan', '连接中': 'Menyambung',
  '查看全部单词与词义': 'Lihat semua perkataan dan makna', '复习答错的单词': 'Ulang kaji perkataan yang salah',
  '房间码已复制。': 'Kod bilik disalin.', '复制失败，请手动选择并复制房间码。': 'Salinan gagal. Pilih dan salin kod bilik secara manual.',
  '邀请内容与链接已复制。': 'Jemputan dan pautan disalin.', '无法分享邀请，请改为复制房间码。': 'Jemputan tidak dapat dikongsi. Salin kod bilik sebagai ganti.',
  '答案提交失败，请检查网络连接。': 'Jawapan tidak dapat dihantar. Periksa sambungan anda.', '再战请求失败，请检查网络后重试。': 'Permintaan perlawanan semula gagal. Periksa sambungan dan cuba lagi.',
  '房间已关闭。': 'Bilik telah ditutup.', '你已离开此房间。': 'Anda telah keluar dari bilik.', '你已离开或被房主移出此房间。': 'Anda keluar dari bilik atau dikeluarkan oleh hos.',
  '无法更新准备状态，请检查网络连接。': 'Status kesediaan tidak dapat dikemas kini. Periksa sambungan anda.',
  '多人对战未连接': 'Duel tidak disambungkan', '暂时无法使用多人对战': 'Duel tidak tersedia buat sementara waktu',
  'Firebase 环境变量尚未设定；单词学习和单人游戏仍可正常使用。': 'Pemboleh ubah persekitaran Firebase belum ditetapkan. Pembelajaran dan permainan solo masih tersedia.',
  '开发者可按照 README 设定 Firebase 或本地模拟器。': 'Pembangun boleh menetapkan Firebase atau emulator tempatan melalui README.',
  '无法连接多人对战': 'Tidak dapat menyambung ke Duel', '重新连接': 'Sambung semula', '请稍后再试。': 'Cuba lagi sebentar nanti.',
  'MULTI DUEL 未连接': 'MULTI DUEL TIDAK DISAMBUNGKAN', '暂时无法使用 Multi Duel': 'Multi Duel tidak tersedia buat sementara waktu',
  'Firebase 环境变量尚未设定；原有 1v1 对战、单词学习和单人游戏不受影响。': 'Pemboleh ubah Firebase belum ditetapkan. Duel 1v1, pembelajaran dan permainan solo masih tersedia.',
  '前往 1v1 Duel': 'Pergi ke Duel 1v1', '无法连接 Multi Duel': 'Tidak dapat menyambung ke Multi Duel', '返回 1v1 Duel': 'Kembali ke Duel 1v1',
  '房间码不完整': 'Kod bilik tidak lengkap', '请输入完整的六位房间码，然后再试一次。': 'Masukkan kod bilik enam aksara yang lengkap dan cuba lagi.',
  '6 位房间码': 'Kod bilik 6 aksara', '排名未定': 'Kedudukan belum ditentukan', '播放发音': 'Mainkan sebutan',
  '昵称须为 2–16 个字符。': 'Nama panggilan mesti mengandungi 2–16 aksara.', '昵称只可包含文字、数字、空格、连字号及底线。': 'Nama panggilan hanya boleh mengandungi huruf, nombor, ruang, tanda sempang dan garis bawah.',
  '房间已满': 'Bilik penuh', '这个房间已经没有空位了。请向房主确认，或建立一个新房间。': 'Bilik ini sudah penuh. Semak dengan hos atau cipta bilik baharu.',
  '对战已经开始': 'Duel sudah bermula', '这场对战已经开始，暂时不能加入。请等待下一场，或建立一个新房间。': 'Duel ini sudah bermula. Tunggu perlawanan seterusnya atau cipta bilik baharu.',
  '房间已过期': 'Bilik tamat tempoh', '这个房间码已经过期。请向房主索取新的房间码。': 'Kod bilik ini telah tamat tempoh. Minta kod baharu daripada hos.',
  '找不到房间': 'Bilik tidak ditemui', '请检查六位房间码是否正确，然后再试一次。': 'Semak kod bilik enam aksara dan cuba lagi.',
  '无法加入房间': 'Tidak dapat menyertai bilik', '暂时无法加入房间，请稍后再试。': 'Bilik tidak dapat disertai sekarang. Cuba lagi sebentar nanti.',
  '无法建立房间，请重新尝试。': 'Bilik tidak dapat dicipta. Cuba lagi.', '无法建立房间，请稍后再试。': 'Bilik tidak dapat dicipta. Cuba lagi sebentar nanti.',
  '找不到此房间，请检查房间码。': 'Bilik tidak ditemui. Semak kod bilik.', '此房间已过期。': 'Bilik ini telah tamat tempoh.', '此房间的对战已经开始。': 'Duel bilik ini sudah bermula.', '此房间人数已满。': 'Bilik ini penuh.', '此房间人数已满或已无法加入。': 'Bilik ini penuh atau tidak dapat disertai.',
  '无法开始对战，请双方重新按下准备。': 'Duel tidak dapat dimulakan. Kedua-dua pemain perlu menekan bersedia semula.', '无法开始再战，请重新尝试。': 'Perlawanan semula tidak dapat dimulakan. Cuba lagi.',
  '此浏览器无法播放语音。': 'Pelayar ini tidak dapat memainkan audio sebutan.',
  '至少需要 2 位在线玩家': 'Sekurang-kurangnya 2 pemain dalam talian diperlukan', '与在线玩家再战': 'Main semula dengan pemain dalam talian',
  '无法开始多人对战，请重新尝试。': 'Multi Duel tidak dapat dimulakan. Cuba lagi.', '无法开始多人对战，请确认所有当前玩家都已准备。': 'Multi Duel tidak dapat dimulakan. Pastikan semua pemain semasa sudah bersedia.',
  '无法移除此玩家，请检查房间状态后重试。': 'Pemain tidak dapat dikeluarkan. Semak status bilik dan cuba lagi.',
  '无法建立多人房间，请重新尝试。': 'Bilik Multi Duel tidak dapat dicipta. Cuba lagi.', '找不到此多人房间，请检查房间码。': 'Bilik Multi Duel tidak ditemui. Semak kod bilik.',
  '此多人房间已过期。': 'Bilik Multi Duel ini telah tamat tempoh.', '此多人对战已经开始。': 'Multi Duel ini sudah bermula.', '此多人房间人数已满。': 'Bilik Multi Duel ini penuh.', '此多人房间人数已满或已无法加入。': 'Bilik Multi Duel ini penuh atau tidak dapat disertai.',
}

const copies: Record<'en' | 'ms', Record<string, string>> = { en: english, ms: malay }

export function localisedDuelText(value: string, language: AppLanguage): string {
  const staticText = localisedStaticText(value, language)
  if (staticText !== value || language === 'zh') return staticText
  const exact = copies[language][value]
  if (exact) return exact
  for (const suffix of ['，回答正确', '，正确答案', '，回答错误', '，已选择']) {
    if (value.endsWith(suffix)) return `${value.slice(0, -suffix.length)}${copies[language][suffix]}`
  }
  if (value.startsWith('移除离线玩家 ')) {
    return `${copies[language]['移除离线玩家']} ${value.slice('移除离线玩家 '.length)}`
  }
  const rules: Array<[RegExp, (...parts: string[]) => string]> = language === 'ms' ? [
    [/^(\d+) 题$/, (count) => `${count} soalan`],
    [/^每题 (\d+) 秒$/, (seconds) => `${seconds} saat setiap soalan`],
    [/^第 (\d+) \/ (\d+) 题$/, (current, total) => `Soalan ${current} / ${total}`],
    [/^对战将在 (\d+) 秒后开始$/, (seconds) => `Duel bermula dalam ${seconds} saat`],
    [/^剩余 (\d+) 秒$/, (seconds) => `${seconds} saat berbaki`],
    [/^(查看结果|下一题)还有 (\d+) 秒$/, (step, seconds) => `${step === '查看结果' ? 'Lihat keputusan' : 'Soalan seterusnya'} dalam ${seconds} saat`],
    [/^第 (\d+) 名$/, (rank) => `Tempat ke-${rank}`],
    [/^最多 (\d+) 人$/, (count) => `Sehingga ${count} pemain`],
    [/^MULTI DUEL · (\d+)\/(\d+) 人$/, (current, total) => `MULTI DUEL · ${current}/${total} PEMAIN`],
    [/^以 (\d+) 人开始$/, (count) => `Mula dengan ${count} pemain`],
    [/^播放 (.+) 的发音$/, (term) => `Mainkan sebutan ${term}`],
    [/^复习答错的单词（(\d+)）$/, (count) => `Ulang kaji perkataan yang salah (${count})`],
    [/^查看全部单词与词义（(\d+)）$/, (count) => `Lihat semua perkataan dan makna (${count})`],
    [/^第 (\d+) 名$/, (rank) => `Tempat ke-${rank}`],
    [/^(查看结果|下一题) ([\d.]+)s$/, (step, seconds) => `${step === '查看结果' ? 'Lihat keputusan' : 'Soalan seterusnya'} ${seconds}s`],
    [/^重新连接中 · (\d+) 秒$/, (seconds) => `Menyambung semula · ${seconds}s`],
    [/^至少需要 2 位玩家。把房间码分享给朋友吧。$/, () => 'Sekurang-kurangnya 2 pemain diperlukan. Kongsi kod bilik dengan rakan.'],
    [/^房主可以现在以 (\d+) 人开始，或继续等待更多玩家。$/, (count) => `Hos boleh bermula dengan ${count} pemain sekarang atau menunggu pemain lain.`],
    [/^等待再战（(\d+)\/(\d+)）$/, (current, total) => `Menunggu perlawanan semula (${current}/${total})`],
    [/^已有 (\d+)\/(\d+) 位在线玩家同意；全员同意后自动开始，离线玩家会退出下一场。$/, (current, total) => `${current}/${total} pemain dalam talian bersetuju. Permainan bermula apabila semua bersetuju.`],
  ] : [
    [/^(\d+) 题$/, (count) => `${count} questions`],
    [/^每题 (\d+) 秒$/, (seconds) => `${seconds} seconds per question`],
    [/^第 (\d+) \/ (\d+) 题$/, (current, total) => `Question ${current} / ${total}`],
    [/^对战将在 (\d+) 秒后开始$/, (seconds) => `Duel starts in ${seconds} seconds`],
    [/^剩余 (\d+) 秒$/, (seconds) => `${seconds} seconds remaining`],
    [/^(查看结果|下一题)还有 (\d+) 秒$/, (step, seconds) => `${step === '查看结果' ? 'View results' : 'Next question'} in ${seconds} seconds`],
    [/^第 (\d+) 名$/, (rank) => `Rank ${rank}`],
    [/^最多 (\d+) 人$/, (count) => `Up to ${count} players`],
    [/^MULTI DUEL · (\d+)\/(\d+) 人$/, (current, total) => `MULTI DUEL · ${current}/${total} PLAYERS`],
    [/^以 (\d+) 人开始$/, (count) => `Start with ${count} players`],
    [/^播放 (.+) 的发音$/, (term) => `Play ${term} pronunciation`],
    [/^复习答错的单词（(\d+)）$/, (count) => `Review incorrect words (${count})`],
    [/^查看全部单词与词义（(\d+)）$/, (count) => `View all words and meanings (${count})`],
    [/^(查看结果|下一题) ([\d.]+)s$/, (step, seconds) => `${step === '查看结果' ? 'View results' : 'Next question'} ${seconds}s`],
    [/^重新连接中 · (\d+) 秒$/, (seconds) => `Reconnecting · ${seconds}s`],
    [/^至少需要 2 位玩家。把房间码分享给朋友吧。$/, () => 'At least 2 players are required. Share the room code with a friend.'],
    [/^房主可以现在以 (\d+) 人开始，或继续等待更多玩家。$/, (count) => `The host can start with ${count} players now or wait for more.`],
    [/^等待再战（(\d+)\/(\d+)）$/, (current, total) => `Waiting for rematch (${current}/${total})`],
    [/^已有 (\d+)\/(\d+) 位在线玩家同意；全员同意后自动开始，离线玩家会退出下一场。$/, (current, total) => `${current}/${total} online players agreed. The match starts when everyone agrees.`],
  ]
  for (const [pattern, format] of rules) {
    const match = value.match(pattern)
    if (match) return format(...match.slice(1))
  }
  return value
}

export function localisedDuelDialog<T extends { title: string; message: string }>(copy: T, language: AppLanguage): T {
  return { ...copy, title: localisedDuelText(copy.title, language), message: localisedDuelText(copy.message, language) }
}

export function localiseDuelRoot(root: HTMLElement, language: AppLanguage): void {
  localiseStaticRoot(root, language)
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const raw = node.textContent ?? ''
    const trimmed = raw.trim()
    const translated = localisedDuelText(trimmed, language)
    if (translated !== trimmed) node.textContent = raw.replace(trimmed, translated)
    node = walker.nextNode()
  }
  for (const element of [root, ...root.querySelectorAll<HTMLElement>('[aria-label], [title], [placeholder]')]) {
    for (const attribute of ['aria-label', 'title', 'placeholder']) {
      const value = element.getAttribute(attribute)
      if (value) element.setAttribute(attribute, localisedDuelText(value, language))
    }
  }
}
