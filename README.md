# card.js

# v2.0

2.0版本正在开发中

## 新特性：
* 更好的扩展性。v2.0更像是一个canvas绘制框架，你可以利用这一套模式轻松地自定义你的模板。
* 局部绘制。数据更新引起的卡图重绘将仅仅发生在局部，大大提升了渲染速度。
* 交互式。v2.0允许用户与卡图更有丰富的交互。

# v1.0

<img src="https://img.shields.io/npm/v/ygo-card"/>
<img src="https://img.shields.io/npm/l/ygo-card"/>
<img src="https://img.shields.io/badge/yami-%40qq.com-lightgrey"/>

这是一个游戏王卡片渲染工具，你只需要在你的网站引入card.js，就可以轻松地渲染出标准的游戏王卡图！

## 为什么使用card.js

你的网站需要大量的游戏王卡图，但是网上的卡图资源参差不齐？不妨试试card.js，只需要一次的加载，就可以使用大量、标准、高清的游戏王卡图。

* 🥦 响应式。Card会自动响应数据的变动，同时更新卡图，这在与表单交互场景十分有用。同时，对于大量的更新请求，内部只会进行一次绘制，因此你不用过多的担心性能问题。

* 🍅 十分容易使用。你只需要短短的几行代码，就能将一张canvas画布变成一张游戏王高清卡图！另外，card.js可以自由的更改模板样式，在config文件中你可以随心所欲地进行创作！

* 🍉 交互式。你可以轻松实现各种交互动效，比如SR面闪特效、烫金字等。同时允许实时修改卡片信息、自由定制卡片。

* 🍇 动态尺寸。Card渲染的卡图非常清晰，你可以直接保存到本地进行打印。同时Card会自动监听canvas的尺寸变化，同时会自动重绘。从显示器到纸张上，它是一张永远都不会模糊的图片。

<br/>

## 🎈 作品

[🔗 游戏王在线制卡器  #yami](https://ymssx.gitee.io/ygo)

[🔗 游戏王WIKI #yami](http://ocg.wiki/#59438930)

欢迎向我自荐你的基于card.js的作品，邮箱：ymssx@qq.com

<a href="http://ocg.wiki/#59438930" target="blank"><img src="https://gitee.com/ymssx/cardjs/raw/master/demo/幽鬼兔.jpg" height="200" /></a>
<a href="http://ocg.wiki/#62015408" target="blank"><img src="https://gitee.com/ymssx/cardjs/raw/master/demo/浮幽櫻.jpg" height="200" /></a>
<a href="http://ocg.wiki/#14558127" target="blank"><img src="https://gitee.com/ymssx/cardjs/raw/master/demo/灰流麗.jpg" height="200" /></a>
<a href="http://ocg.wiki/#73642296" target="blank"><img src="https://gitee.com/ymssx/cardjs/raw/master/demo/屋敷童.jpg" height="200" /></a>
<a href="http://ocg.wiki/#60643553" target="blank"><img src="https://gitee.com/ymssx/cardjs/raw/master/demo/儚無水木.jpg" height="200" /></a>
<a href="http://ocg.wiki/#52038441" target="blank"><img src="https://gitee.com/ymssx/cardjs/raw/master/demo/朔夜時雨.jpg" height="200" /></a>

<br/>

## 📦 安装

```shell
$ git clone https://gitee.com/ymssx/cardjs.git
```

将 `dist`文件夹下的内容放到需要的地方

#### 目录结构

> mold/

保存了我们需要的标准模板素材。当然你也可以自定义你的模板

> config/

这里自带了几份常用的配置文件

> card.js

手动引入它就可以使用Card啦

<br/>

## 🚀 使用方式

将`dist`文件夹的内容放在合适的位置，使用`<script>`引入card.js

``` html
<canvas id="card"></canvas>
...
<script src="xxx/card.js"></script>
```

传入一个卡片数据和canvas对象，然后使用render方法就可以渲染啦

```javascript
const canvas = document.getElementById('card');
const data = { 
  name: '青眼的白龍',
  _id: '89631139',
  type: 'monster',
  type2: 'tc',
  type3: '',
  type4: '',
  attack: 3000,
  defend: 2500,
  level: 8,
  desc: '以高攻擊力著稱的傳說之龍。任何對手都能被粉碎，其破壞力不可估量。',
  race: '龍族',
  attribute: 'light' 
}

const card = new Card({ data, canvas, size: [400, 584] });

card.render();
```

> **注意，当card.js不在根目录时，你可能需要手动指定moldPath。**

```javascript
const card = new Card({ data, canvas, moldPath: './source/mold' });
```

<br/>

> ### data -- 卡片信息，包括名字、密码、效果等

```typescript
interface data = {
  name: string,                          // card name
  _id: string,                           // card id
  type: 'monster' | 'spell' | 'trap',    // first type
  type2: type,                           // secend type 见下面注释①
  type3: type,                           // third type
  type4: type,                           // fourth type
  desc: string                           // card describe
  ?attribute: 'light' | 'dark' | 'fire' | 'water' | 'wind' | 'earth' | 'divine'
                                         // monster attribute
  ?race: string                          // monster race
  ?attack: number                        // monster attack
  ?defend: number                        // monster defend
  ?level: number                         // monster level

  ?link: boolean[]                       // link monster arrows
  ?lb_desc: string                       // pendulum describe
  ?lb_number: number                     // pendulum number
}

typeMap = { "tc": '通常', "xg": '效果', "ys": '儀式', "rh": '融合', "tt": '同調', "cl": '超量', "lb": '靈擺', "lj": '連接', "ec": '二重', "tz": '調整', "tm": '同盟', "tk": '卡通', "lh": '靈魂', "fz": '反轉', "ts": '特殊召喚', "zb": '裝備', "sg": '速攻', "cd": '場地', "fj": '反擊', "yx": '永續' }
```

> ① 关于type2 | type3 | type4
* 描述卡片类型时，请一定在type2中反映出它是一张什么颜色的卡片，可选为 tc通常、xg效果、rh融合、ys仪式、cl超量、tt同调等
* type3 - type4可描述为tz调整、ec二重、fz反转、tc通常、xg效果等
* 默认使用拼音首字母描述，超过两个字的按前两个字处理，如“特殊召唤”为“ts”
* TCG玩家也可以使用英文，如 normal、effect、fusion、ritual、xyz、synchro等（请使用小写），我们会自动转换为拼音

以下两种描述是等价的，请根据自己喜好选择

```javascript
const data = { 
  name: '幽鬼兔',
  type: 'monster',
  type2: 'xg', // 效果
  type3: 'tz', // 调整
  type4: '',
}

const data = { 
  name: '幽鬼兔',
  type: 'monster',
  type2: 'effect', // 效果
  type3: 'tuner', // 调整
  type4: '',
}
```

<br/>

## 🎏 游戏王卡图库

不知道去哪里找卡图？

这里收录了绝大多数游戏王卡图，不定期更新。

[🔗 传送门](https://gitee.com/ymssx/pics)


<a href="http://ocg.wiki/#21844576" target="blank"><img src="https://gitee.com/ymssx/pics/raw/master/500/21844576.jpg" height="150" /></a>
<a href="http://ocg.wiki/#58932615" target="blank"><img src="https://gitee.com/ymssx/pics/raw/master/500/58932615.jpg" height="150" /></a>
<a href="http://ocg.wiki/#84327329" target="blank"><img src="https://gitee.com/ymssx/pics/raw/master/500/84327329.jpg" height="150" /></a>
<a href="http://ocg.wiki/#20721928" target="blank"><img src="https://gitee.com/ymssx/pics/raw/master/500/20721928.jpg" height="150" /></a>
<a href="http://ocg.wiki/#79979666" target="blank"><img src="https://gitee.com/ymssx/pics/raw/master/500/79979666.jpg" height="150" /></a>

<br/>
 
## 🎉 详细配置
 
```typescript
const Card = function ({
  data: object,                           // 卡片数据
  canvas: HTMLElement,                    // canvas对象
  size: number[],                         // 绘制尺寸，[宽, 高]
  moldPath: string = './mold',            // 模板资源路径
  lang:'cn' | 'jp' | 'en' = 'cn',         // 语言 cn、jp、en
  config: object = defaultConfig,         // 配置信息。在这里指定你的自定义配置信息
  fontLoaded: function = defaultEvent,    // 事件
  imageLoaded: function = defaultEvent,
  fontsLoaded: function = defaultEvent,
  imagesLoaded: function = defaultEvent,
  loaded: function = defaultEvent,
  recover: boolean = false,               // 是否缓存配置与数据
  holo: boolean = true,                   // 是否显示防伪标志
  cardbagSwitch: boolean = false,         // 是否显示卡包信息
  translate: boolean = false,             // 是否自动繁简转换
  verbose: boolean = false                // 是否开启啰嗦模式
})
```

<br/>

> ### size

当传入的值为数组时，canvas会严格按照这个尺寸进行绘制。

```javascript
const card = new Card({ data, canvas, size = [813, 1185] })
```

你也可以不传入size，如果autoResize为true（默认值），那么card.js会自动计算尺寸。

当canvas尺寸变化时，card.js会自动重新进行绘制，保证卡图永远高清，这在弹性布局中十分有用。

```html
<style>
#card {
  width: 80%;
}
</style>

<canvas id="card"></canvas>
```

```javascript
// autoResize默认开启
const card = new Card({ data, canvas, autoResize: true })
```

<br/>

## 🌴 生命周期

通过传入事件来自定义卡片渲染的生命周期钩子函数。

### fontLoaded

单个字体文件加载完成。

```javascript
card.fontLoaded = function(e) {
  console.log(e);
}
 ```
 
### fontsLoaded

所有字体文件加载完成。

### imageLoaded

单个图片资源加载完成。

### imagesLoaded

单个图片资源加载完成。

### loaded

卡片渲染完毕。

<br/>
 
## 🧰 config

更改config文件，可以自由地调整卡片的样式，比如字体大小、颜色等。

[具体配置请参考`config/defaultConfig.js`](https://gitee.com/ymssx/cardjs/tree/master/source/config)

你可以通过传递一个配置对象来临时改变配置信息

```javascript
card.changeConfig(config);
```

<br/>

## 🧮 API

### Card.render

```javascript
await card.render();
```

初始渲染，返回一个promise对象，当绘制完毕时变为fulfilled状态。

### Card.feed

你可以自由的使用与更换自定义的中间卡图。

比如当你想把【真红眼黑龙】的卡图换成【青眼白龙】。
```javascript
const pic = document.getElementById('blueEyes');
card.feed(pic);
```

### Card.changeConfig

```javascript
card.changeConfig(config);
```

### Card.feedData

调整卡片信息。

```javascript
card.feedData(data);
```

或者直接
```javascript
card.data.name = 'Blue Eyes';
```

### Card.save

保存卡图到本地，你可以指定保存时**文件名称**和**图片尺寸**。
```javascript
card.save('青眼白龙', [1626, 2370]);
```
也可以不指定参数，card.js会自动使用卡名作为文件名，尺寸会使用默认值1626 × 2370。

### Card.feedFlash

使用面闪效果。传入一张闪面卡图，并且调整`card.data.flash`的值（0 ~ 1），卡图会呈现不同强度的面闪效果。

```javascript
card.feedFlash(document.getElementById('flashImg'));

card.data.flash = 0.5;
```

一张闪面卡图需要自行制作，一下是两组例子：

<img src="./source/mold/pic.jpg" height=150/>
<img src="./source/mold/flash.jpg" height=150/>
<img src="https://ymssx.gitee.io/pics/500/16899564.jpg" height=150/>
<img src="./source/mold/flash2.jpg" height=150/>

<br/>

## 静态方法

以下是Card对象私有的方法，请不要在实例对象上使用。

### Card.complex

将简体字文本转换为繁体字文本。

```javascript
const complexText = Card.complex('青眼白龙'); // 青眼白龍
```

### Card.transData

card.js需要你以特定的JSON结构来描述一张卡，觉得麻烦？没关系，使用transData可以**直接兼容YGOPro自带数据库的卡片数据**。

```javascript
const ygoproData = {
  "name": '元素英雄 羽翼侠',
  "desc": "拥有操纵风在天空飞舞之翼的元素英雄。以来自天空的一击羽翼击破来审判邪恶。",
  "id": 21844576,
  "atk": 1000,
  "def": 1000,
  "race": 1,
  "type": 17,
  "level": 3,
  "attribute": 8
}
// 来自YGOPro的数据，直接传入card.js会报错
const newData = Card.transData(ygoproData);
console.log(newData);
```

输出

```javascript
{
  name: '元素英雄 羽翼侠',
  desc: '拥有操纵风在天空飞舞之翼的元素英雄。以来自天空的一击羽翼击破来审判邪恶。',
  _id: '21844576',
  attack: 1000,
  defend: 1000,
  race: '战士族',
  type: 'monster',
  type2: 'tc',
  type3: '',
  type4: '',
  level: 3,
  attribute: 'wind'
}
// 可以被card.js理解的数据对象结构
```

<br/>

## 🧶 实现方式

Card.js

* 📚 cardData.js 

管理卡片数据，监听数据变动，当数据更新之后，cardData会自动分析需要更新哪些文件，然后告知cardFile

* 📁 cardFile.js

管理文件的更新与缓存，当收到cardData的更新请求后，会自动从缓存或者网络调用图片，在文件更新之后会自动告知cardDrawer

* 🎨 cardDrawer.js

管理绘图功能，在收到cardFile的绘图请求后，会按照cardData的数据以及cardFile提供的文件进行绘图
 
