let currentSection = '我的世界';
let currentSide = 'A';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const toggleButton = document.getElementById('toggle-side');
    const body = document.body;
    const sideA = document.getElementById('side-a');
    const sideB = document.getElementById('side-b');

    const blogPosts = {
        "A": {
            "我的世界": [
                {
                    title: "所以我放弃了贞操",
                    content: `
本来觉得这七天我将飞速成长，结果……

想要弄公众号，弄微信小程序，结果废掉了我三个邮箱号。还没有成功。
打算制作一些短视频投放到短视频平台上，结果快手上反馈还好，但抖音播放量惨淡。查了一下，发现抖音还需要养号。
顺便看了一下小红书发的图文，也是没有什么人点赞关注。
花了小一千进了一个付费社群，期望大佬们能够带我这种新手做项目实战，没想到他们最近的一次刚刚结束，还要等一个多月才能开始。我本来还以为我一进来就能做。

>人们往往高估短期行为的影响，低估长期行为的影响。

连续四天闪击新中关购物中心和领展商城，结果出来的时候还是两手空空。对物欲完全绝缘是这样的……

本来我就不想去景点。心血来潮去了几次，结果第一次去圆明园的时候发现没带身份证，就灰溜溜地回来了。第二次的时候，我带上身份证，然后在网上购票，然后发现未成年人不能购票……

于是我骑上共享单车自罚一圈，绕着中关村校区的一大圈。



话说回来，景点有什么好看的呢？
无非是山水文物的排列组合：

> 圆明园=山+水+文物
> 颐和园=山+水+文物
> 故宫=文物
> 西山森林公园=山

对了，还有割韭菜的镰刀：

> 圆明园=山+水+文物+镰刀
> 颐和园=山+水+文物+镰刀
> 故宫=文物+镰刀
> 西山森林公园=山+镰刀

再说了，一个人去旅游，没人带，没人聊，有什么意思？
除了写几篇文章发发牢骚，发几个朋友圈分享一下生活，也没什么乐趣了。

好吧好吧，是我的问题。
谁让我没钱，没回家，没成年，没物欲，没舍友，没对象呢？

说到没钱，我上一个月的预算用来加入那个付费社群了，我这个月的预算都用来提升个人形象，用来变得更帅了。
我妈代买了一条牛仔裤和一双鞋子，秋天穿。我自己买两件衬衫，一件蓝色，现在穿，一件白色，明年穿（太显黑了）。
还有一条腰带，因为一开始带过来的就是个军训腰带，太丑太low。
然后我看着我现在的这身，发现腰带根本露不出来……
没事，总有一天要露出来的。
又买了新的洗面奶和美白精华，改善一下面部皮肤。

国庆假期有一部分时间在写暴打消费主义的思政课稿子。结果一个国庆过去了，花了两个小一千，我自己反而被消费主义洗脑了。

> 究竟是什么导致中产阶级频繁购买这些超出承受范围的商品？答案藏在商品自身的特性之中，消费主义语境下的商品，可以看作是一种符号，而这些符号正与语言有着共通之处。语言世界由差异生成，商品世界也由差异生成，语言世界中的“富翁”，只能用“富翁”与其他词语的关系才能描绘清楚，比如“有钱”“奢华”“金”“任性”等等等等，而且根本无法描绘清楚，因为语言世界和现实世界有着巨大的鸿沟。同理，商品世界中的“中产”概念也是一样，商人主动构建了商品世界的“语言秩序”，“中产”这个概念只能通过无限地购买商品才能接近（实际上根本无法达到），中产阶级也随之陷入到了这个陷阱之中。

洗脑就洗脑了吧。毕竟

>成长是一种双重自欺，先是自己骗自己，然后骗自己自己并没有骗自己。

但细想一下又不太对劲，我明明践行的就是 收入-投资-储蓄=消费 啊，为什么能说我被消费主义洗脑了呢？明明我花的钱绝大部分都是用来个人提升的。
这里要澄清一下，我提升个人形象真的算个人提升。我之前在这方面花过的钱只有一百出头，买来一项帽子，我现在还一直戴着。

我太想进步了！
进步到自己这个月大概只剩下我自己的伙食费和日常费用，没钱逛商城，没钱买生日蛋糕，没资本去谈对象了！

乍一看，我不是生活在校园里，而是生活在电子产品里，生活在工作里：在电脑上写付费群的稿子，写消费主义的稿子，在电脑上做视频，在电脑上改进小程序，折腾电脑设置，给平台账号养号，推广，更新知识系统，等等你几乎从来不会想到用电脑来做的事情。

我昨天也打算这么过，只可惜……

我去立德楼9层自习/工作的次数是有一些的。早晨空气清新，立德楼的自习厅还未被午后的疲倦感浸染，安静中带着几分清爽。我背着我新提的十字军刀电脑包，走进了电梯，按下了9楼的按钮，心想着这大好的上午，应该能有一段平和的时间，够我干很多事情了。

电梯门开了，我绕上一圈在北侧自习厅放下书包，隔着一个长桌坐着一位女生，旁边是一包快餐纸袋。再绕一圈，打上水，上一次厕所，瞅见只有零零星星几个人分散在教室里自习。我回到我的座位，又向那个女生看了一眼，她的自习装备是本+平板。一切都很正常。

这段时间我一直被windows系统自带的web搜索困扰。
在不开代理的时候，我完全可以通过按下windows键，再打几个字母就可以打开应用。但是一打开代理，用这种办法会因为web搜索，卡半天卡不出一个结果来，不是黑屏就是白屏。
这很烦人，我觉得。
旁边冒出点动静，我转头一看，那个女生的肩膀附上了一位男生。绿衣服贴在椅背上，手在桌子上，躯干停女生肩膀上，脸在女生额头旁。交谈。
女生在吃汉堡。
已经能想象他们早上的画面了。
他们的确在轻笑，但不知为何如此大声，响到我听不见。

我又多看了一眼，隔着两张桌子那边又多了一位女生。

我心中暗自叹气，立德楼的9层本应是专注学习的圣地，怎的却变成了恋爱的温床？

我继续捣鼓我的电脑。在网上搜索了一下，发现有两种办法，一种是更改电脑组策略，一种是更改注册表。win+r，发现自己的电脑上没有可以更改组策略的程序。
那就只能去更改注册表了。
结果打开注册表，发现表的那一项自己根本更改不了。
去问chatgpt，去在网上搜。
问啊，搜啊。搜出来了一大堆解决方法，有能在注册表里解决的，有的还要用到组策略编辑器。
能在注册表解决就在注册表解决呗。按照说明，我去ctrl+f查找了注册表的一个值，发现查不到，按照另一项说明，我又去右键更改更改权限，发现自己的设置本来就是正确的。

我过意不去，又多次尝试了好几遍，请教了chatgpt很多遍。问题依旧。
又向右边撇了一眼，原来的那位女生不知道去哪里了，男生反而坐在旁边自习开了。
不对，怎么又多了一位情侣？隔我两个桌子的那位女生又形成了二人世界。

立德（楼的）情侣这么多吗，怎么哪儿哪儿都是？

我心中暗自叹气，立德楼应是专注学习的圣地，怎的却变成了恋爱的温床？

可能是明法0201的单身狗太多了（我就是一员），我总是在那里自习（尤其是周三下午），然后认为这就是鹿大的情侣密度了。

“我是不是应该提升一下我这个账户的权限？”有的帖子说更改不了注册表是因为组管理编辑器限制的，于是我又搜法子搞了过来。结果都没有用。

“我是不是应该将我的系统升级为专业版才能进行修改”，然后又去网上找到可以免费升级专业版的帖子，试了一下。

那对情侣也分开了，只留下女生一人在隔我两张桌子的地方自习。

我竟然升级成功了，并且没有显示未激活。

我兴奋了一点。但是我还是改不了注册表。
我试着重启了一次。
心里咯噔一下。
我的正版windows家庭中文版系统呢？

电脑可以不折腾，但我的系统一定要是正版的啊！

我又开始火急火燎地去网上找退回方法。我找到几张风评不错的贴子，上面列出来的方法有直接恢复出厂设置，有通过更改注册表再镜像重装系统。

我不想回到出厂设置，因为回到出厂设置就意味着我又要忍受联想流氓软件的荼毒了。

所以我选择更改注册表再镜像重装。等待期间继续完成我已经延误了两个小时的工作。
原来那对情侣又回来了，又开始了他们甜蜜的互动。

我不知道是他们更焦灼还是我更焦灼。但是可以肯定的是，今天的工作效率肯定要被这件事情拖累了。

我在obsidian、重装软件的程序以及旁边的人三个视角来回切换……趁着电脑重装系统的时间，我又润色了一篇付费群文章。
镜像准备完毕，电脑开始重装重启。隔我两个长桌的情侣也散开了，只留下女生一个人。我发着呆，打开抖音快手开始养号（当时不是刷）。
又是隔一阵看一看电脑的进度，隔一阵看一看旁边的人，隔一阵又看看自己的QQ微信。
时针快逼近中心，电脑也重装完毕。但是“未激活”三个字还是赫然存在于电脑的右下角。

三个字如同一把冷锋利刃，直戳我心。我的心倒了下去，感受到的只有匮乏的荒凉和死寂。彷佛刚刚得知自己被判处死刑，又好像死刑已被执行。
那种死寂，不是表面上的空无一物，而是深入骨髓的冷寂，沉重得令人喘不过气来。我坐在立德楼9层的自习厅里，四周的一切都仿佛远去，只剩下我和未激活的系统，困在了这片冰冷的数字世界里。

我一直以来对正版windows系统的支持，就要由此破灭。我对我电脑的绝对掌控权，也就此消失。我这两天的效率都要耗在这一件烂事上面。

我没有死，但是“小我”死了，心上破了个洞。

就像第一次接触到虚无主义。
无论自己怎么挣扎，逃不过死的命运，摆脱不掉无意义的人生。人类文明无论做什么，都无法摆脱必然灭亡的命运，和无意义的文明历程。

>给时间以文明，而非给文明以时间。

就像溺水窒息前的挣扎，我急忙连上网络继续寻找解决方案。
时针已走过正午，我才发现家庭版与家庭中文版并不一样，无法激活。
所有的努力，纸牌屋一般，倒塌。

我离开座位，隔一个桌的男生已经离开，变成了原来的女生。
还是暂时去吃饭休息吧。

为何我会体验到一种将死的感受？
我认为和我的童年有关。

那时我仍是小学三四年纪，拥有了独属于我自己的卧室——我们家里的机房。
而我特别害怕电脑关机。风扇在呼啸，屏幕开始变黑，伴随着此前从来没有在生活中听过的声音，电脑关机了，在关机之前还会出现说不上来的诡异的光。我这时往往会窜出卧室，害怕电脑中的恶魔现形，夺走我的性命。又或是跳回床上，裹进被子里，面朝墙蜷缩着，只要我看不见恶魔，恶魔就看不见我。
就是这样的一种恐慌。
当恐慌过去后，机箱上大得诡异的呼吸灯仍然在亮着，呼吸着。将睡之前，我仍然心有余悸。

也许当时我刚刚了解到死亡，起初的恐慌逐渐消失，藏于正常生活之下，却呈现在电脑这一冷冰冰的机器之中。

回到立德9楼的自习厅。原来的两个女生还是坐在那里。
我的注意力已经不在这里了。我现在最紧急的事情就是那正确的镜像重装。
还是用的上午的工具，我重装的时候改选为了家庭单语言版。

然后在程序下载镜像的过程中，我又开始重复着上午的obsidian-镜像下载程序-四处看的循环。就这样循环着。
每当我码完一段字，我就要点开镜像下载程序去看看进度到了哪里。
我看着数字逐步增长，直到46%
它真的涨不动了。我也没心情去写作了，写完了新的精华文章的第一部分，我就开始直接边看进度，边观察周围的人了。

周围的人增加了一些——立德楼向来是下午比上午热闹的。周围单独的男女数量增加了几个，电灯泡的感觉也少了一些。

等得焦灼，盼得热烈，我的系统终于重装成功了，但是仍然未激活。
我又死了一回，荒凉与死寂再次袭来。

我推测这是因为家庭单语言版并不等于家庭中文版。

于是，我开始努力搜寻家庭中文版镜像的痕迹。用着自己并不熟悉的操作方式，将原来D盘的代理软件重新下载下来，再对照手机上的订阅地址导入到代理软件之中。打开代理，我开始询问chatgpt，在电脑上不断地搜索家庭中文版镜像的痕迹。

隔我一桌的情侣又“团圆”了。

找来找去，最后在官网上找到了。但是这里面仍有蹊跷，因为这里面下载的镜像仍然是单语言版本的，只不过多了一个中文选项而已。

没有办法，我只能将其作为我的救命稻草，下载下来重装。

这个时候已经已经五点左右了，就快到了吃饭的时候，但是我还想在待一会。我想要背着我已激活的windows系统回到宿舍，重新下回obsidian继续我第二天的任务规划。

等待着。

重装卡在了63%处，无论怎么等，进度也无法越过这个数字。

我的手机只剩下24%的电了，得省着点用。关掉流量，关掉wifi，打开蓝牙网易云，听歌。
于是我开始简单地刷手机。
一开始还是好的，也就接收接收消息，清理一下被当作inbox的微信收藏夹。
直到网易云放到《花人局》。
准确地说是《花人局》的Bridge。
巨大的情感转变，从酒醒后的眩晕到潘然醒悟后的不舍与倔强，从忽强忽弱的否决，到坚决的挽留。
我不禁向前移动身体，脑袋夹在两手中间，被托举着。
冥想着，感受着，思考着。

我不是一直在挽留吗？
第一次三角关系被升学拆散了，于是我加第三角为好友，企图挽留第二角。
第二次三角关系又受阻了，于是我就开始写相当Silly的信，再次企图挽留第二角。
这五多年来，所有的幻想，臆想，以及行动，难道不是一次又一次的挽留吗？
沉思着，ASMR降临（自主感觉经络反应）。麻木灌满我的整个身体，从上到下，最后在足跟部久久停留。
我从未遇见过这种情况。
不过挽留已经成为历史了，军训期间搭讪被拒却毫无感觉已经证明了这一点。

>君だけが僕のコンピュータだよ

曲终，我看看电脑屏幕，还是卡在63%，我又看看旁边的人，还是他们。

这时已经将近七点，我下楼去东区食堂买饭。
走出立德楼时就可以看见一堆情侣在进进出出。又寂寞了几番，为什么我就没有对象。
我快步赶向东区食堂，一头与刺骨的秋寒相拥。

尸寒。

我也不知道为什么我又想到了死亡。

或许童年的经历让我将死亡与电脑失控绑定。这种无能神似自己对死亡的无能。我明明对我自己的人生拥有绝对的控制权，却永远无法避免死亡。明明电脑就是我最擅长操纵的东西，如今我却失去了对它的绝对控制，它的“未激活”也让我蒙羞。
对电脑的折腾对我来说就是极限游戏。
世界上存在极限游戏者，他们玩着一类非常危险的游戏：徒手攀岩、深渊潜泳、翼装飞行、荒野求生。他们亲临荒漠，反复实践着一种真正意义上的“死里逃生”。
我的折腾不也在我的死亡边缘试探吗？
只有将严肃性摁在你脸上的幽默才能带来真正的乐趣。当自己直面死亡本身，死亡带来的严肃与恐惧本身也就被消解了。那是对生活幻想最为真诚的否定与破坏。
我现在就在做这样的极限游戏，在死的边缘反复试探。或者说，得益于我极限游戏的特殊性，我可以反复死好几遍。
但我还是想挽留我的正版系统。

说饭也不是饭，就是一个饼而已。我在秋寒中啃完，随即把包装袋扔到了垃圾桶里。
继续回味我的死亡游戏。搓手。

卖出电梯，重回立德9楼。原来的人还在那里，情侣们也还在那里。重装系统的进度已经走到89%了。

继续等着。

挽留，挽留，挽留……

重装完毕，重新打开，屏幕上的未激活已经消失。但是设置里还是显示未激活。
我又死了一回，和之前一样的荒凉和寂静。只不过这一回带着一点麻木。
已经等不得了，我将电脑充电器鼠标耳机一一装回我新提十字军刀电脑，从高椅上滑下。
脚不小心拨了椅子一下，椅子倒塌，也许引来了其他人的目光。
我扶起来就走了。

只有最有一种方法了：恢复出厂设置，忍受联想的流氓服务。

结果出乎意料的出乎意料。
windows系统没有被激活，联想的流氓服务倒是激活了。

怎么办？怎么办？
如果今天就这样了，那我明后天的学习和工作该怎么样？我甘心守护windows正版系统的贞操在哪里？我对电脑的绝对掌控力在哪里？
怎么办呢？怎么办呢？
我回想我之前看到过的帖子，里面有提到过kms激活。
“好吧，也没有什么快的办法了。”

>だから僕は貞操をあきらめた
>所以我放弃了贞操

摆弄了将近一个小时，我用了一种非kms的硬件激活方法激活了windows系统，我还是对系统有绝对控制力的。联想的流氓服务删一删就都“没”了，眼不见为净。
虽然是盗版，但是我原来用的也是正版，只不过被人忽悠了而已。
问心无愧！

可是，这不是与我的初衷相悖吗？明明我折腾这一切就是为了正版的激活，没想到最后用盗版满足了我的愿望……
我不是一直在挽留吗？一直在挽留“合乎正道”的正版激活系统。结果呢？
我放弃了“贞操”。

我骗了我自己，我用盗版系统骗我自己的正版处女情结。
这是成长的第一步，先自己骗自己。
然后我还心满意足，问心无愧！
这是成长的第二步，再骗自己自己没有骗自己。

windows系统的事情就此打住，还有“挽留”的“历史事件”呢。也许我的感情也同挽留一骈死了。
但是我放弃挽留，是不是也曾是骗了自己两次？那我之后会不会再骗自己两次，开始挽留起来？

绝不能够这样，我还要再骗自己再多一点，更多一点，好将这样的可能性完全扼杀。

瞧，这不是在飞速成长吗！

哈哈！

2024-10-07，写于明德法学楼0201教室、0202教室。

`
                },
                {
                    title: "我建议你去上早六",
                    content: `
你是否曾经不明白为什么早起被认为是一种好习惯，似乎除了这是农耕文明传承下来的经验之外就没有什么其他依据可以解释。尤其是对于我们现代人来说，晚睡晚起，甚至倒夜班，似乎也没什么不好的。

但是，如果你的目标不是得过且过，而是真正想要提升自己，那么早起就是你唯一的选择。

这听起来可能有些绝对，但我坚信这是对的。

首先，清晨和夜晚的效率是不同的。这很容易解释，人们在深夜时对各种分散注意力的事情欲望更强。想想看，你晚上是不是总在刷手机？有时候甚至刷到天亮。而早上起床时，你并不会有这么强烈的刷手机的欲望，对吗？

早起就是在减少你晚上刷手机的时间，增加你早上自我提升的时间。

其次，睡前和睡后是人们执行习惯的最佳时段。很多需要定时复习的内容非常适合在这两个时段完成，比如背英语单词。按照艾宾浩斯遗忘曲线去复习太心累了，但利用睡前和睡后的时间，不仅心理负担小，效果也差不多。

既然早起有这么多好处，那具体应该怎么实施呢？

首先，早起的前提是早睡。不能晚睡早起，否则一天的效率都会下降，得不偿失。我的建议是，设定一个早睡的时间，并在这个时间点前30分钟内不做任何刺激自己的事情，比如看手机、吃东西，改做一些能让自己困倦的事，比如看数学题或者听哲学视频。此外，还有一个建议是，中午过后不要再摄入任何含咖啡因的饮料。虽然时间隔得较长，但这些咖啡因还是会干扰你的睡眠。

然后是如何早起的问题。

一般来说，我们应该设定一个早起的闹钟。但是，如果这个闹钟在你深度睡眠时响起，你会感到极度困乏，早上的效率也会很低。而且如果你是在大学宿舍，闹钟声音太大可能会打扰室友，声音太小又可能叫不醒自己。

我的方法是使用震动手环而不是闹钟。震动手环不会干扰室友，而且当你处于深度睡眠阶段时，震动手环通常不会直接把你叫醒，而是将你从深度睡眠阶段拉到浅度睡眠阶段。这样，你的醒来时间可以提前一些，但不会影响状态。或者，你可以在10到15分钟后再设定一个震动闹钟，这样在前一个震动的铺垫下，一定能把你叫醒，并保证你能无痛早起。
`

                },
                {
                    title: "小A的编程经历",
                    content: `多年后，面对 xx 大学计算机专业的录取通知书的时候，小A会回想起那个在使用机械硬盘的台式机上装 jdk 的下午。

7 年前小A接触到了编程，电脑就此成为了小A的捣鼓对象。什么 scratch codeblocks vs code eclipse jdk julia都装过，堂吉诃德般拿镜像站与墙和低网速大战，为了搞出个图形化的界面学了 Qt 和 Java。稍有点意思的就是小A魔改的飞机大战小游戏，小A搞得很入迷，初中所剩无多的周末都用来修改代码，开发新的版本，提升游戏体验。

小A学过两次编程。在一模一样的地点学着一摸一样的 c++课程。
大概是这样一个缘故吧。
小学的班主任跟小A说，小A看你这个孩子挺爱数学的，比较适合学这个，说不定能保送到一中呢（其实完全不能）
初中的班主任跟小A说，你之前学过，那你不更应该学吗？说不定信息学奥赛报送清北呢。
倒还是有一点不一样的，第二次多了一个走关系去学的女生。但小A和她之间的关系只能说是盛暑之下摁在一起的冰块，有着 floor 之后等于 0 的联系。只不过所谓的 puppy love 在中国是不被允许的，在有和 Panopticon 一样压迫感的地方，没人敢轻举妄动。

学编程还是有点用的。

小A初中的老师让小A去省级的一个科创比赛，小A没有理由拒绝，因为她说"没准有用呢？"。小A当时做了一个多项式计算器，算是勉强能用，floor 一下就是没用。

小A高中的老师让小A去参加综合实践比赛，小A还是没有理由拒绝，因为她说，肯定有用，之后考强基什么的都有用。小A当时用程序模拟了新闻在互联网中传播的失真。

之后，老师让小A把源代码发给计算机老师看看，她却没看懂（她不知道 c++的类）。

最后这两个比赛都拿了二等奖，只能说，一点用处都没有。小A连强基的入围线都没达到。

小A成功地说服了小A父母为小A编程购买了新电脑，不知道对编程影响如何，可以确定的是，小A家里少了 5000 块钱。
随即遇到了新冠疫情，家里刚好需要两台电脑，一台用来上课，另一台用来被上课，算是让这个爱好发挥了一点作用。

不久，编程就淡出了小A的视野了。那种爱好藏到了小学初中记忆的废墟中。每日随者分数起伏，推着作业的石头上山再让它滚下来。意义就此充满了小A的高中生活，从时间上到空间上再到到精神上。再也留不下位置给计算机了。"高中里，编程哪儿有成绩重要啊？"直到他们班开始"系统"学习 python 时，才在老师枯燥的讲解中回忆起这件事。
信息课被高三抛弃之后也就回忆不起来了。

不过没什么关系，会编程又不能给高考加分。

时至今日，小A对魔改小游戏的激情已经不再了，"因为有风，云就没有定居的可能"，社会的压力迫近，这种儿戏似乎不能再出现。
在 AI 能轻易编写修改游戏代码的时代，小A学的这些东西这点东西只能算 floor（0.1）。对升学没用，对工作来说没什么用，在大学连根毛都算不上，在你不能指望它能为你赢得异性的青睐，只能期望旁人习以为常的惊讶和赞美。

按理说这算是对计算机学科的祛魅，明明是有用的，但却更像是在钩走一缕灵魂的同时剜下心中的一块肉。不知是谁带走了小A的爱好，没有感情地没有留下它的感情。

小A的爱好被**轮奸**了。
<img src="https://photo.16pic.com/00/53/26/16pic_5326745_b.jpg" alt="Image description" width="200" >
`
                },
            ],
            "情感经历": [
                {
                    title: "小A的情感经历",
                    content: `究竟谁在设花人局？
<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=1850154428&bvid=BV1Mp421f7Ya&cid=500001659843461&p=47&t=218&muted=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="600" width="100%"></iframe>
                    `
                }
            ]
        },
        "B": {
            "个人管理": [
                {
                    title: "个人管理的本质",
                    content: `现在网上很多人都在科普个人管理，讲解各种各样的小技巧。

要我说，谁直接用谁sb，连个人管理是什么都不知道就开始瞎吹了。

假如说，你，时年30，现在正在一家位于二线城市的互联网公司上班，担任文职岗位，年薪10万+年终奖2万一共12万，每年的房租需要交7万元。
公司要求你每天写4000字的文案，同时每天晚上还要负责部分产品的营销。每天写文案的时间为5个小时，4个小时的时间用来修改，还要经过检查才能过关。产品的营销就是让你在自己所能触及到的网络空间中宣传你们公司的产品，时间不限，但是要与年终奖挂钩。
假设今天是星期五，轮到小周，你还要再上一天班才能够休息。今天你的上级打回了你昨天1500字的稿子，还要再工作近一个小时来修改。
你在半个月前投资了期货，这个时候期货将在3天内交割，你需要考虑如何分步卖掉你的期货。
而今天晚上，你的高中同学们刚好在今天晚上在你的城市举办一次同学聚会。你的高中同学们选择了不同的道路，过得或比你好，或比你不好。他们盛情邀请你，毕竟就刚好住在相同的城市，你觉得不好意思不去。
而你在前天晚上跟你的父母说当时没空，星期五再打一次电话交流一下家里的事情，这段时间你的祖父或祖母刚好生了一场病，除去医保不知道需要多少开支才能解决。

来吧，你应该怎样进行个人管理，在5分钟时间内请给出你的方案。

你的自我管理在这种情况下完全是徒劳无功的。你所谓的"方案"根本毫无意义，因为此时的你已经不再是一个独立的"个人"，你已经跌入了自己的垃圾时间，彻底迷失了自己。

你或许会反驳，说自己还有自由，还比大多数人处境好。但你别自欺欺人了，难道你看不清自己的处境吗？

有个富翁曾经自以为是地认为，穷人之所以穷就是因为自己不努力，要么是大吃大喝、要么沉迷社交软件、要么去教堂祈祷。然而，当他亲身体验穷人生活时，发现自己也不可避免地陷了进去。这就是所谓的"穷人陷阱"，甚至得到了诺贝尔奖的认可。

现实是，你的"能量"已经严重透支，加上利息，你根本无力偿还。你现在虽然还不算穷人，但已经跌进了穷人陷阱。即便你自诩"高认知"，你的境况也不允许你有效尝试或获取新认知，除非你准备从头再来。

所谓个人管理，本质上就是投资你的“能量”，将其投入各种资产，同时减少能量的消耗和负债，比如停止刷短视频。有钱能让你挺过病痛的折磨，良好的关系能在关键时刻拉你一把。这些资产能帮你抵御糟糕的人和事带来的能量损耗。而那些负债，只会拖垮你，把你一步步推向无底的匮乏深渊。

与其先去学个人管理技巧，不如先去学怎样“投资”。

那些盲目崇拜个人管理的人，不过是纯粹为了满足自己的情绪价值。实际上他们做的“假努力”比什么都不干还要亏。这种人，不经反省，最终只会沦为懒惰和无能的囚徒，永远都别想从这个深渊里爬出来。`
                },
                {
                    title: "不是说个人管理不行，而是很多人本来就错得离谱",
                    content: `我们说个人管理的本质是用自己的能量进行投资，顺便说了为什么是这样。我们今天稍微细化一下怎么做的问题。

让我们看以下这些案例。

现在有小王，小明，小美，小李这几个大学生。

小王学物理专业，在一所顶流985就读，想来是一个好学生。专注于学好课业知识，得高分，高gpa，大一大二和导师搞好关系提前去参与科研。

小明也在一所顶流985就读，读的是一个比较水的商科专业。他在课业成绩很好的同时还剩余一大把时间。除了完成一点自己的爱好之外，他还会参加一堆社交活动，认识校内校外的一些大佬和普通同学，关系不够铁，但是够熟悉。

小美的情况就没那么好了，她就读于一所双非院校的商科专业。课程比小明的还要水一点。她奉行“六十分万岁，多一份浪费的原则”就打算混一张毕业证书。总是会尝试很多自己的小项目，比如说推销一些小的生活用品，在互联网上传播内容之类的等等等等。

小李在一所211大学就读，学的是机械专业。想要实现自己的互联网大厂梦想。他在课余时间疯狂学习计算机知识，参加各种竞赛，竞赛里面他的成绩也一骑绝尘。在长假期间找了三个实习。

你觉得他们在10年之后哪个人会更加成功。

你很可能觉得是小王和小李，是吧？

你有没有发现这个问题少了点什么？

没错，就是时间。


如果时间线是在20年之前，四个人大概率混得都会很不错。我们来看看chatgpt和我共创的回答：
- **小王（物理专业，顶流985）**：
    
    - **学术发展**：小王可以继续深造，攻读硕士或博士学位，最终进入高校或研究机构，从事教学或科研工作。以他的背景，获得稳定的学术职位是有可能的。
    
	- **高科技行业**：小王可以进入大型国企或科研院所，尤其是在半导体、材料科学等领域。也有可能在新兴的高科技公司从事研发或技术支持工作。
    
	- **跨领域发展**：如果小王想转行，他可以进入金融、管理咨询等行业，利用自己的分析和数学能力在这些领域找到机会。
- **小明（商科专业，顶流985）**：
    
    - **快速职业晋升**：凭借广泛的人脉，小明很可能在企业内获得更多的机会，比如进入管理层、负责重要项目等。这些机会能够让他在职业生涯中迅速晋升，甚至在较短时间内担任重要职位。
    
	- **政商结合**：在20年前，商界与政界的联系紧密，小明的人脉如果涵盖了某些政府官员或企业高层，他可能有机会参与一些大型项目或合作，这将进一步增强他的影响力和地位。
    
	- **创业与投资**：小明也可能利用人脉资源创业，尤其是在资源密集型行业或有政策倾斜的领域。通过人脉，他可以更容易获得资金、政策支持以及市场资源，迅速扩大企业规模，甚至进入资本市场。
    
	- **跨界影响力**：随着时间推移，小明可能在行业中积累起较大的影响力，成为行业协会的领导或重要的意见领袖，这种权力和影响力不仅体现在他的职位上，也可能体现在他对行业发展方向的引导中。
- **小美（商科专业，双非院校）**：
    
    - **创业与就业**：20年前，双非院校的毕业生就业压力较大，小美可能面临找工作难的问题。但她的创业精神和尝试新事物的态度可能会让她找到一些商机，尤其是在小买卖或自主创业方面，虽然规模不大，但也能维持生计。
    - **做大生意**：她的创业精神和对尝试新事物的积极态度可能让她在未来的某个阶段取得比其他三个人更高的成就。这种成就并不仅限于传统的职业成功，还可能涉及财富积累、个人影响力、社会地位等多方面。
    - **生活现状**：当时创业环境并不如现在成熟，小美的尝试可能会面临资金不足、市场不成熟等困难。但如果她坚持下去，未来几年互联网的兴起可能为她带来机遇。
- **小李（机械专业，211院校）**：
    
    - **技能转换**：在20年前，互联网大厂的概念还不如今天明确，但小李如果对计算机技术感兴趣，可能会成为较早一批转型从事IT或编程工作的人。当时，软件开发和互联网行业开始起步，急需大量技术人才，小李的编程和竞赛经验会让他在求职中具有优势。
    - **职业路径**：小李有可能进入机械行业的国企或外资企业，从事技术开发工作。如果他继续深入学习计算机，很可能会在几年后加入初创的互联网公司，成为那批推动中国互联网快速发展的技术人才。
可以说他们都会过得非常不错。

如果是十年前呢？
 - 小王（物理专业，顶流985）：
	- **学术与科技**：2014年时，国内外对于基础科学的重视有所提升，特别是在量子物理、新材料等领域。如果小王选择继续深造，他可能会参与一些国家重点实验室或前沿科技项目，也有机会进入迅速发展的科技公司，从事高端研发工作。
	- **进入科技公司**：互联网和高科技公司迅速崛起，小王的理科背景可能帮助他进入这些行业的技术或数据部门，尤其是在算法、数据分析等领域。

 - 小明（商科专业，顶流985）：
	- **职场晋升与创业**：2014年是中国互联网创业的黄金时期，小明如果利用他的人脉，可能不仅仅是在传统企业中晋升，还可能加入或创办一家互联网公司，利用风投和市场的机遇快速壮大事业。
	- **金融与投资**：此时中国的金融市场也在快速发展，尤其是私募、风投等领域。如果小明的人脉涉及这些领域，他可能会在金融圈中获得较大的影响力和权力。

 - 小美（商科专业，双非院校）：
	- **互联网创业机遇**：2014年，移动互联网、社交媒体和电商平台的迅猛发展为创业者提供了丰富的机会。小美的创业精神和对新事物的敏感度可能让她在这一波浪潮中抓住机遇，创立自己的电商平台、内容创作公司或其他互联网相关的企业。
	- **自媒体与个人品牌**：如果小美选择走自媒体或内容创作的路线，利用微博、微信公众号等平台，她可能迅速积累影响力和粉丝，甚至打造个人品牌，从而获得比传统职业更高的成就。

 - 小李（机械专业，211院校）：
	- **转型互联网与人工智能**：2014年，互联网大厂已经成为热门就业目标，小李如果将机械专业与编程技能结合，可能会成为一名复合型人才，进入互联网公司从事智能硬件、机器人或自动化相关的工作，甚至在人工智能领域取得一定成就。
	- **创业与创新**：小李也可能利用他的技术优势，在智能制造、物联网等新兴领域进行创业，尤其是抓住中国制造业转型升级的机遇，实现职业上的突破。

也还是很不错的。

如果回到现在呢。chatgpt现在不听话了，完全无视了现状。让我来给出答案吧。

小王会老老实实地走他自己的科研路，收入不算很高。他转入除教培之外行业所需要的代价其实说大不大，说小不小，因为所学和现实需求实际上是脱节的，但是他的逻辑能力和学习能力能很好地弥补这一点。

小明不好评价。这些人脉有可能帮助他在商圈里混得不错，但是如果他之前没有使用的经验的话，这些人脉的帮助还是不大。有可能这些人脉除了可以帮他找到个工作之外就没什么用了。

小美如果能不停地做下去的话，还是可能做成自己的小生意的。但如果放弃尝试的话，她会混的和小明差不多，她掌握的实用技能还是有一些用处的。

小李的情况也不好说，如果他永不回头的话，他极有可能在中途因为压力过大而疯掉或者噶掉，如果成功“上岸”，他大概率会成为一个优秀的普通人，一个优质社畜。如果他放弃执念的话，照他的毅力，还是可以出头的。

---

说了这么多，我们到底在说什么呢？

用自己的能量进行投资，投资的资产也是要看时代而行的。

比如说小王的社交原则，放到20年前或者更早的时候，还是有效的，但是放在现在效果就微乎其微了。
当然不是说社交没用了，一些社交法则（你可以称之为投资法则）是有永恒的价值的。

很多过去的经验，已经不适用了。
前半辈子生活在一个周期阶段的人，很难理解另一个周期阶段的逻辑。
我们需要重新思考很多东西现在的价值以及未来的价值，在有一定判断的基础上入局。

知和行是相辅相成的，这没错。
但是如果一开始的“行”就错得离谱，同时这个人“不幸地”“个人管理”贯彻得很坚决，当他反应过来的时候，他已经陷入能量的债务陷阱中了。
也就是说我们的试错成本很高。

方向不对，努力白费。

`
                }
            ],
            "AI时代": [
                {
                    title: "别调教AI了，先调教调教你自己吧！",
                    content: `想要用好AI，就要先理解人工智能

普遍意义上的人工智能包括机器学习和深度学习
机器学习是低级的，其中最低级的就是线性回归分析，最高级的也就在人脸识别的级别，已经非常普遍了。
深度学习是高级的，现在最接近AGI的大模型用的就是深度学习，现在一般都是在用神经网络来做深度学习。想了解技术原理和细节的话你可以在网上搜3b1b的视频。

我们之后所说的AI，指的就是大模型这种人工智能。

那么如何理解我们现在的AI呢？

首先，你可以先对AI向上抽象一个层级，问AI是什么？给出你的答案

工具？智慧？才能？语言？预测？

工具点明了在目前我们认识中AI的本质。预测点明了目前语言大模型的原理。

但这些都不是我想要的答案。

能源

我们想一想AI和一般工具的区别。《资本论》中的解释中，工具的实际价值会伴随劳动力输入的价值被搬运到产品之中，到最后工具将会将自己的实际价值转移给产品。而AI呢，按照目前的条件，AI可以为每一个人源源不断地提供服务，而自身不发生改变。另外，工具的操作是有一定门槛的，但是现如今的AI只要你的大脑能正常思考就行，所以说它还是人人可用。这就是为什么说AI更像是一种能源，而非工具了。

石油作为能源，有人直接烧了照明取暖，有人烧了用来发电，有人对石油进行分馏，获得了价值更高的燃料和原料，有人用发动机将这种能源转化为动力。

对于AI也是如此。

人是使用AI的主体，AI的最终价值由人决定。

同样是ChatGPT，有人用它代写作业，有人用它聊天消遣，有人用它自学，有人用它制作PPT和撰写营销文案。

我不评价使用AI技巧的优劣，但我会区分使用AI的人的优劣。

有的人仅用AI代写作业，有的人在此基础上让AI帮助解释以辅助学习，有的人再进一步，让AI出题检验自己。你可能觉得这样的人已经很优秀了，对吧？

还有人将自己的思维方式融入AI，提高AI教学效果，甚至用AI绘图辅助学习。这时效果已经很好了。接着，有的人让AI提出实践问题以提升学习效果，有的人用AI生成营销方案，辅助制作视频、写短文进行推广甚至赚钱，有的人通过与AI的对话获得了更深的学科见解，反过来增进自己的理解和AI模型。

这已经很优秀了吧？但相比之下，还可以更优秀。

有的人让AI帮忙编写程序，自动生成符合不同需求的教案，帮助学习。更进一步，有的人为了防止人们不清楚自己的需求，利用AI编写prompt，生成可以帮助发现需求的AI智能体。同时，它还可以让AI根据要求编写propmpt来要求其他AI。这种AI编写prompt来指导AI的循环可以不断进行，并且你可以在每个环节中用你的智慧提升其品质。

这已经是最优秀的吗？在当下的世界，算是吧（以上例子都已实现）。但没有最优秀，只有更优秀。未来这些工具可能打包起来供人使用更便捷一些，但是如果没有别人的思维方式和认知，你运用AI的能力也会大幅落后于他人。
这就是人的差别。想要做以上与“最优秀的人”相同的事是非常简单的，只要你肯破费花上小一千再请个人就可以一天内复刻成功。但是，你解决的是垃圾问题，进行的是垃圾调整，输出的是垃圾内容。别人解决的优质问题，进行的是优质调整，输出的是优质内容。从头到尾，你完全比不过人家。

这不仅仅是提问能力，绝对没有那么简单，其中很多的问题不是简单的提问就能解决的。

别调教AI了，先调教调教你自己吧！

`
                }
            ],
            "社会认知": [
                {
                    title: "想财富自由？还是先躺平吧",
                    content: `
### 躺平：对抗内卷的反叛宣言

**什么是躺平？** 简单来说，躺平就是反内卷。  
内卷要求我们拼尽全力，躺平反其道而行之。  
内卷的表现就好比：疯狂学习校内的那些无用知识，拼命考取一张又一张证书，竭力向HR和导师们证明自己是吃苦耐劳、廉价好用的“社会shengchu”。

这些人，我只能称他们为“合法工贼”。

更可笑的是，他们当了工贼，却并未因此获得净好处。

储蓄=收入-支出。  
许多人误以为收入高就是富有。富有个屁！  
一个个看似年薪几十万，实际上一个比一个能花钱，不是月光族就是年光族。  
支出居高不下，储蓄依然为零，何谈财富自由？

况且支出是很难减少的。  
为什么？因为现代社会早已被精心设计。

他们有一万把镰刀在等着收割这些“高级韭菜”。

一旦你选择了打工这条道路，除非你是某家初创公司的原始股东，否则再努力奋斗一百年，也难以实现财务自由。

难道你还想向天再借五百年吗？  
再过五百年社会也这样。

在中国，镰刀最典型的表现就是高房价，以及与房子捆绑的一切资源：教育、医疗等等等等。  
西方则以大学贷款和消费主义洗脑为代表。  
然而这些只是代表，实际上，就像刚才说的一样，真的有一万把镰刀在等着你！

### 内卷：从工业时代的毒瘤到AI时代的危机

内卷的根源可以追溯到教育。我们的所有的传统教育体系诞生于工业时代，其唯一使命就是为社会（大多数即资本家）输送大量廉价好用的劳动力。  
这样的教育体系，根本就是为工贼和社会牲畜量身定制的，而非为独立思考者准备的。从一出生，我们就被塞进了内卷的机器，成为其不断运转的齿轮。

然而，AI的崛起正在彻底瓦解这一切。AI已经能够轻松取代大部分中小学老师。有人开玩笑说，AI之所以没能完全替代老师，是因为老师能教到50%~90%，而AI能教到80%~95%。

在AI时代，未来属于“会玩”的创造者，而非机械的执行者。  
创造者将是人类社会生态系统的生产者，生产氧气，创造养料。而AI和“执行者”都呼吸创造者产生的氧气和养料。那些执行者则只能在这个生态系统中挣扎求存，最终被AI竞争得窒息而死。

>21世纪最大的问题不是机器变成人，而是人变成机器。

我们现在所处的社会看似稳定，其实只是暂时靠惯性维持而已。
科技负责向上，政治负责螺旋向下。
生产关系阻碍了生产力的发展，这样的体系，迟早崩溃。

### 躺平：财富自由的起点

为什么躺平是走向财富自由的第一步？  
因为躺平不仅仅是一种生活态度，它是一场对抗消费主义的革命，是对现有社会秩序的无声抗议。躺平者选择跳出内卷的陷阱，不再被奴役，不再为那些无谓的竞争和虚假的成功概念所操控。他们开始用自己的方式，重新定义成功和幸福。

尽管我没有给出具体的“躺平”方式，但重要的是，我们必须从根本上质疑和反思这个被操控的系统。

教育、社会保障和经济政策的改革或许能为我们提供另一条出路。但在此之前，躺平就是我们对抗这一切的不合作宣言，为那些不愿成为螺丝钉的人，提供了值得探索的起点。

`
                },
                {
                    title: "他们让孩子远离网络，和你有什么关系？",
                    content: `
父母总是劝孩子少看电脑、手机，甚至搬出一些所谓的“成功榜样”来吓唬你：“看看那些有钱人，他们都不让自己的孩子碰电子产品，比如乔布斯、比尔·盖茨。他们都知道手机、电脑、互联网会毁了你！”

他们说的有道理吗？也许有——但别搞错了，那是对他们自己有道理，对你未必。

现在的手机、电脑，尤其是其中的软件，早就被那些心机深沉的设计者们精心设计好，目的是操控用户的行为。当你点开一个应用时，你以为自己在掌控一切？不，那些设计者早就把你算得死死的。提示、渴望、反应、奖励——这就是所谓的“习惯循环”四步模型。一旦某款软件把这四步打通了，你几乎没法逃脱它的吸引力，就像掉进了一个无底的时间黑洞。

这种现象堪比“电子海洛因”。从前，网络游戏是罪魁祸首，现在各种短视频和社交媒体成了新的毒品。对于大多数人来说，这些东西就是时间的黑洞，一旦染上，想拔腿走人？呵呵，门都没有。你每一次刷屏、每一秒停留，都只是在让自己一点点陷得更深。

所以，那些有钱人让自己的孩子远离这些电子产品，这并非毫无根据。要知道，软件对人的吸引力已经深深扎根于生理层面，简直可以说是直击人性的弱点。
想想你每次在社交媒体上刷到那些“涩图”时的难以自拔，那种无法抗拒的冲动，是不是和被这些软件操控的感觉差不多？
富人们当然明白这一点，他们知道自己的孩子一旦陷入这种欲望的漩涡，想要抽身几乎是不可能的。
而且，人的注意力和时间极其宝贵，但互联网上的这些诱惑却是无限的。
这就是为什么富人不惜一切代价让他们的孩子远离电子产品的原因。

然而，问题在于，这种管理方式根本不适用于普通家庭。

首先，富人有能力让自己的孩子接受比普通学校更优质的教育资源，甚至在应试教育中也能让孩子更胜一筹。另外，他们完全可以通过非高考方式获得进入优质大学的机会。他们的孩子不需要通过普通人的“拼命”来获取机会，人生的起跑线就已经甩开了大多数人好几条街。

其次，富人本身就拥有远超普通人的认知水平和社会资源。那些白手起家的富人，靠的不仅仅是运气，还有对成功的深刻理解和敏锐的商业嗅觉。这种理解和嗅觉是普通人永远难以企及的——无论是在显性知识还是潜意识层面，这些认知都在潜移默化地塑造着他们的孩子，使其从小就具备与众不同的视角和思维方式。他们不需要从零开始，因为他们已经站在巨人的肩膀上。

至于那些富二代，虽然可能不如父辈那般经验丰富，但依靠家庭的财富和资源，他们也能在实践中慢慢培养出相应的认知水平。你以为这些富二代只是“坐吃山空”？错，他们有的是资源和机会，纵使不能成为顶尖的富人，至少也能轻松维持中产阶级的生活。这才是他们的底气所在。

有人可能会搬出“富不过三代”这种老生常谈来反驳。这种反驳简直站不住脚。首先，这个谚语是在农业社会的背景下形成的，在现代信息社会中是否适用，这需要打个问号。其次，这个逻辑假设富人会出现败家子孙，但实际上，富人完全可以通过多子策略来分散风险，确保家族的延续和财富的稳定；又或者说这个逻辑假设富人容易受时代波动的影响，但是时代波动，影响普通人更甚。再说了，那些所谓“富不过三代”的家庭，真的是我们所说的真正富人吗？很可能他们只是因为一些偶然因素致富，从未真正提升过认知，只不过是运气的暂时眷顾罢了。

那么，为什么普通家庭的孩子必须接触互联网呢？

因为互联网是这个时代最好的工具，**没有之一**。

首先，互联网几乎完全抹平了普通人与大学之间的知识鸿沟。任何人都可以通过网络获得大学教育的知识，不再需要依赖昂贵的学费和稀缺的资源。想学什么，网上全都有。

其次，互联网的成本极低，只要不极端贫困，每个人都能获取到丰富的在线资源。

第三，互联网大大减少了信息不对称的问题。不管是选择专业、职业方向，还是寻找创业机会，你都能在网上找到答案，虽然这需要你具备一定的信息筛选能力，但这正是你能脱颖而出的关键。要知道，辨别信息真伪、抓住关键点，这就是你的竞争力所在。

最后，在互联网上创造内容的成本几乎为零，这是一种极低成本的创业途径。想要翻身，想要改变现状，互联网给了你一个几乎零门槛的机会。

所以说，他们让孩子远离网络，和你有什么关系。你要远离的只是那些时间黑洞。
`
                },
                {
                    title: "远离那条优秀之路",
                    content: `**我们从小幻想成为优秀的人。**

“我要成为科学家。”“我要改变世界。”

长大后，我们渐渐变得老实了，意识到自己很可能干不成什么大事。但我们还是被告知要变得优秀。课堂上要遵守纪律，考出好成绩；军训时争取表扬和奖项，还有各种竞赛和奖学金。进入工作后，还有各种绩效考核。

每当我们离“优秀”更近时，心中总会涌上一种骄傲的感觉。而当别人更接近“优秀”时，嫉妒心就开始出现。似乎这就是我们要证明自己的东西，是我们追求的目标。

我们被优秀所吸引，无时无刻不受它的召唤。

想象一下，一个“优秀”的人。他年薪百万，有180平米，180厘米，180毫米，家庭和美，伴侣顺服。当你“看”到这样的优秀时，就像看到了绝世美人。

这位“美人”站在你面前，身姿轻盈，步履如行云流水。她的肌肤洁白如玉，手指纤长，微微发光。她的面容精致，双眸如清泉，含蓄的笑容如春风拂面，令人心动。一头长发柔顺如瀑布，散发着淡淡的香气。你不禁张嘴张眼，感受到身体的酥麻，心脏砰砰跳动。

这一切是如此美好，你不由自主地靠近她，努力靠近她。

但她却后退了一步。你只能看着她的背影，心中充满了渴望与不甘。她就像天边的彩虹，美得让人心醉，却永远无法触及。你不断追逐她的身影，却只感到她离你越来越远。

于是，她越来越远，越来越远。你不断尝试追赶她上一秒所在的地方，而她又移动到了更远的地方。现在你成了那只芝诺之龟，努力在后头追逐，而她却在前头。结果是，随着你离她越来越远，你离平庸却越来越近。

**最终，追求优秀的人无可避免地沦为了平庸。**

这正是现代教育中最讽刺的现象。很多人想追求成功，却只是在围着优秀跳舞，而优秀不过是成功的投影。
因此，优秀被利用，成为通往成功路上的最大陷阱。

想一想成功的定义是什么。对我来说，成功是追求想要的东西的过程和结果。每个人对成功的定义各不相同，但一定会有自己真正想要的东西出现。然而，你是否认真思考过什么是你真正想要的？如果没有，那别人的教唆就会趁虚而入，代替你想要的东西，成为阻碍你成功的最大因素。它引导你去追求错误的目标，最终把平庸留给你自己。

许多人口中的“优秀”，不过是一种精致的平庸。当脑海中浮现出这样的美丽身影时，你应当先怀疑自己的思想是否被人动了手脚。这些操控手段非常隐蔽，隐蔽到能直接潜入你的潜意识中。

正如那句名言所说：“**Unless you make the unconscious conscious, it will direct your life and you will call it fate.**”

你应该明白这些操控有多么可怕了吧。

**所以，你应该对一切所谓的“优秀”保持警惕。**

我放弃了早上听歌的机会，思考写下了这篇文章。思考很累，但很值得。

`
                }
            ]
        }
    };

    function renderContent(side, section) {
        const content = blogPosts[side][section];
        let html = `<h2>${section}</h2>`;
        content.forEach((post, index) => {
            html += `
                <div class="post-card">
                    <h3>${post.title}</h3>
                    <div>${marked.parse(post.content)}</div>
                </div>
                ${index < content.length - 1 ? '<hr class="gradient-line">' : ''}
            `;
        });
        return html;
    }

    function updateContent(section) {
        if (currentSide === 'A') {
            sideA.innerHTML = renderContent('A', section);
        } else {
            sideB.innerHTML = renderContent('B', section);
        }
        resetColors();
    }

    function updateNavLinks() {
        const sections = Object.keys(blogPosts[currentSide]);
        navLinks.forEach((link, index) => {
            if (index < sections.length) {
                link.textContent = sections[index];
                link.style.display = 'block';
                link.setAttribute('data-section', sections[index]);
            } else {
                link.style.display = 'none';
            }
        });
    }

    toggleButton.addEventListener('change', switchSide);

    function switchSide() {
        body.classList.toggle('side-b');
        currentSide = body.classList.contains('side-b') ? 'B' : 'A';
        updateNavLinks();
        const firstSection = Object.keys(blogPosts[currentSide])[0];
        updateContent(firstSection);
        resetNavigation();
        
        if (currentSide === 'B') {
            body.style.backgroundColor = '#1a1a1a';
            body.style.color = '#f4f4f4';
            sideA.style.display = 'none';
            sideB.style.display = 'block';
            document.querySelector('.toggle-container').style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
        } else {
            body.style.backgroundColor = '#f4f4f4';
            body.style.color = '#333';
            sideA.style.display = 'block';
            sideB.style.display = 'none';
            document.querySelector('.toggle-container').style.backgroundColor = 'rgba(200, 200, 200, 0.8)';
        }
        resetColors();
    }

    function resetNavigation() {
        navLinks.forEach(item => item.classList.remove('active'));
        navLinks[0].classList.add('active');
        currentSection = Object.keys(blogPosts[currentSide])[0];
        updateContent(currentSection);
    }

    function resetColors() {
        const cards = document.querySelectorAll('.post-card');
        const titles = document.querySelectorAll('.post-card h3');
        if (currentSide === 'A') {
            cards.forEach(card => card.style.backgroundColor = 'white');
            titles.forEach(title => title.style.color = '#005288');
        } else {
            cards.forEach(card => card.style.backgroundColor = '#2a2a2a');
            titles.forEach(title => title.style.color = '#4da8da');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            currentSection = section;
            updateContent(section);
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            resetColors();
        });
    });

    updateNavLinks();
    updateContent(currentSection);
    navLinks[0].classList.add('active');
    resetColors();

    // 搜索功能
    function searchPosts() {
        const searchInput = document.getElementById('search-input');
        const searchTerm = searchInput.value.toLowerCase();
        const posts = document.querySelectorAll('.post-card');

        posts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const content = post.querySelector('div').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // 添加事件监听器
    document.addEventListener('DOMContentLoaded', () => {
        const searchButton = document.getElementById('search-button');
        const searchInput = document.getElementById('search-input');

        searchButton.addEventListener('click', searchPosts);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                searchPosts();
            }
        });
    });
});

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#888888'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#888888',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
