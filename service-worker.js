/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/_404/index.html",
    "revision": "9d25dff13148a12455e82a16a8a999d7"
  },
  {
    "url": "2020/05/11/brush/index.html",
    "revision": "897204183c59675d2e7e26ffb519c4cf"
  },
  {
    "url": "2020/06/08/hangzhou/index.html",
    "revision": "7efdb5a402adcd2f7439d0721941ef61"
  },
  {
    "url": "2020/08/17/baton/index.html",
    "revision": "1f258a783c21bf684155a455ca1b1b9f"
  },
  {
    "url": "2020/12/15/_16/index.html",
    "revision": "ea04489f30680e3cb43d8d256ad8a89e"
  },
  {
    "url": "2020/12/15/ip/index.html",
    "revision": "a79e3be92df1a974ae77f53f7395a47a"
  },
  {
    "url": "2020/12/16/cardjs/index.html",
    "revision": "998fb142d7f80734381d708974f51c8c"
  },
  {
    "url": "2020/12/17/time/index.html",
    "revision": "7c8ea3648119be3d05d297a22b33ecf8"
  },
  {
    "url": "2020/12/18/emoji/index.html",
    "revision": "1be205874d3e450fb13429bead441dac"
  },
  {
    "url": "2020/12/19/p1/index.html",
    "revision": "920d06da658b3e4c420646b1c8b3725a"
  },
  {
    "url": "2021/03/03/_3/index.html",
    "revision": "dd93c343918e7fd47a3c8539d985439a"
  },
  {
    "url": "2021/03/04/_4/index.html",
    "revision": "152f2c32bb79c4a69aa9f25c56384ec7"
  },
  {
    "url": "2021/05/06/mfn/index.html",
    "revision": "9ec9322ce0401241d139420821d3d1aa"
  },
  {
    "url": "assets/css/0.styles.cef272c5.css",
    "revision": "203c0a53b4bd1ad95f8c7cd84fb08f63"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/1.4135cfb7.png",
    "revision": "4135cfb736621ece19325ea773c93f8d"
  },
  {
    "url": "assets/img/grapes.06255764.png",
    "revision": "06255764f7b376de41447dc0c345b6c9"
  },
  {
    "url": "assets/img/ms_frame.9fe4ce50.svg",
    "revision": "9fe4ce505564c2087434a41440494649"
  },
  {
    "url": "assets/img/overdue.003c0013.svg",
    "revision": "003c0013756f70b0804c9c157b96fc03"
  },
  {
    "url": "assets/img/rendercompare.5637ea46.svg",
    "revision": "5637ea462aba7d64a1f5acd1100689bd"
  },
  {
    "url": "assets/img/scale_attention_net.1399a935.svg",
    "revision": "1399a935f4fb9ad221766ac6ccdd5daf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/senet.22030ef7.png",
    "revision": "22030ef7d2fc631d03ce890c2f321e8b"
  },
  {
    "url": "assets/img/skl_field.c2d6fceb.png",
    "revision": "c2d6fcebd3d557a5c37e18aad0499434"
  },
  {
    "url": "assets/img/tomato.a44725cc.png",
    "revision": "a44725cc385606f4a1b121e75e3db47c"
  },
  {
    "url": "assets/img/tree.bf9188fd.svg",
    "revision": "bf9188fdadfe957a89bcbb2524cc4896"
  },
  {
    "url": "assets/img/updating.c89e82a6.svg",
    "revision": "c89e82a6b9fe94a0be27675e4a02f3df"
  },
  {
    "url": "assets/img/watermelon.dc334690.png",
    "revision": "dc334690d14739677b9e011ffa08d23d"
  },
  {
    "url": "assets/js/1.0d399d76.js",
    "revision": "7032834d68260aef977bdfaec94c86f9"
  },
  {
    "url": "assets/js/10.cff7a398.js",
    "revision": "92b1ac7678f1d9c140b53993877a16ec"
  },
  {
    "url": "assets/js/11.33b08877.js",
    "revision": "7c0249d49ca79175c1d95de49a5bd665"
  },
  {
    "url": "assets/js/12.fb216878.js",
    "revision": "53a4df441f80645594bd3e2e24b98b16"
  },
  {
    "url": "assets/js/13.dce0661f.js",
    "revision": "a535501d3d768370626e6c821fe10ec1"
  },
  {
    "url": "assets/js/14.7f98be28.js",
    "revision": "e755f951046dd7fefcb33355f9e2b452"
  },
  {
    "url": "assets/js/15.87742255.js",
    "revision": "d9bcbfb96a8c920d48ccd2c6bcd0beb9"
  },
  {
    "url": "assets/js/16.45594759.js",
    "revision": "e896457a4b779ea8ebeafdbe2004a0f2"
  },
  {
    "url": "assets/js/17.0778f4c2.js",
    "revision": "6c4ce10fe9018700a09500b82fe1c7a4"
  },
  {
    "url": "assets/js/18.bb7a0e4e.js",
    "revision": "0b61db2fa4bf857de4cb1dfc142545b0"
  },
  {
    "url": "assets/js/19.b3926ee0.js",
    "revision": "3111abbd3dcd8a6676b52a8c54bded13"
  },
  {
    "url": "assets/js/2.e6644f70.js",
    "revision": "cf7c08a6bc15ae3454006b85d3d8213e"
  },
  {
    "url": "assets/js/20.de727b42.js",
    "revision": "26f02668586c0826906d22df972d344d"
  },
  {
    "url": "assets/js/21.5f4c8dcb.js",
    "revision": "8563987ee3aa94e4b5035d8b8b4c286c"
  },
  {
    "url": "assets/js/22.9694adc7.js",
    "revision": "912614ed11a0d9a3a003028d897b207c"
  },
  {
    "url": "assets/js/23.8170e8a5.js",
    "revision": "e2dc74f2f62331493172fd3755476d28"
  },
  {
    "url": "assets/js/24.5b25cfac.js",
    "revision": "5aa919b20647cb147c882fb283935d71"
  },
  {
    "url": "assets/js/25.9d59694a.js",
    "revision": "3416b02516bc38f3e9e74d1b289915dc"
  },
  {
    "url": "assets/js/26.1fa05ef2.js",
    "revision": "1e11204fdb99fbd8f3ffcbe88fd7bd68"
  },
  {
    "url": "assets/js/27.5338f7d6.js",
    "revision": "a16bd4381451768c5d87c3c2ceaf391d"
  },
  {
    "url": "assets/js/28.aa8b68ae.js",
    "revision": "f38d0f47e320e3c840a02dd0082c6de8"
  },
  {
    "url": "assets/js/29.483e6136.js",
    "revision": "564e773651fd532b9ef1efb709d682f8"
  },
  {
    "url": "assets/js/30.95b668d1.js",
    "revision": "3d3e048c47acffbe777ba136bff1b891"
  },
  {
    "url": "assets/js/31.ac1a7510.js",
    "revision": "504767a80f684d96c884506927b191cf"
  },
  {
    "url": "assets/js/32.224ed188.js",
    "revision": "6e821aba7afcc3c2bf5607c813bf324e"
  },
  {
    "url": "assets/js/33.e6702315.js",
    "revision": "1a82f67ff0d8ea6e62c14a4e83d6e51d"
  },
  {
    "url": "assets/js/34.5248b5c3.js",
    "revision": "1c70e7bfb164fbbe6da239ca22f56f06"
  },
  {
    "url": "assets/js/35.84ea2443.js",
    "revision": "fbe8fc770f3de341fa9fe645bad4e188"
  },
  {
    "url": "assets/js/36.94466edf.js",
    "revision": "e20391c5d08d8fdb6859c0636dd728cc"
  },
  {
    "url": "assets/js/37.cbd2b1ee.js",
    "revision": "71525fdb4e805ed68857c85662f171b3"
  },
  {
    "url": "assets/js/38.d8aa883e.js",
    "revision": "f17b0163794461ba0fc309e22fd4d14c"
  },
  {
    "url": "assets/js/39.ed28eb8c.js",
    "revision": "981710b612b8257a3ef0210b6b238e04"
  },
  {
    "url": "assets/js/4.ced6555c.js",
    "revision": "12ee60238494f1ef5b5bf205b2767d70"
  },
  {
    "url": "assets/js/40.6694f4ac.js",
    "revision": "93dc433493b370d7533445626c409cdf"
  },
  {
    "url": "assets/js/5.699ce86b.js",
    "revision": "cf7ed2e46346c5ac1c6755ed53105967"
  },
  {
    "url": "assets/js/6.9fb1f982.js",
    "revision": "83f307b44bcf1d23739102fc58f189c3"
  },
  {
    "url": "assets/js/7.96643653.js",
    "revision": "acf54737f3d1b03bb1f0d631a91ebdcb"
  },
  {
    "url": "assets/js/8.40b7d268.js",
    "revision": "26040eec947403917c17462e8cc4f2c8"
  },
  {
    "url": "assets/js/9.b8a54bd0.js",
    "revision": "1b2c020cc7e8680df9be1a10461e7204"
  },
  {
    "url": "assets/js/app.e077583c.js",
    "revision": "5987c72565f9a42859a05133f7b47c98"
  },
  {
    "url": "avatar.jpg",
    "revision": "db47df979c3b3485331aa790c15e7981"
  },
  {
    "url": "avatar2.jpg",
    "revision": "9f203f15175c9d1cee47435d5b115ec5"
  },
  {
    "url": "cardpic/14558127.jpg",
    "revision": "646e99255dfbf363236f100ff2dc9992"
  },
  {
    "url": "cardpic/59438930.jpg",
    "revision": "54e0f680c4e52455895179cfe9b847f0"
  },
  {
    "url": "cardpic/62015408.jpg",
    "revision": "58d1e997b00ac065ced19bfde2114768"
  },
  {
    "url": "cardpic/89631139.jpg",
    "revision": "4d59f5679ae247d63a7277f60837f35b"
  },
  {
    "url": "cherry-blossom.png",
    "revision": "ebbb560fe9056fac41596e38d2af9b7a"
  },
  {
    "url": "emoji/120/1st-place-medal.png",
    "revision": "425cc036bf6aa3bd2abf9cc9078d70a7"
  },
  {
    "url": "emoji/120/2nd-place-medal.png",
    "revision": "b7785b0301a6e1bca2f9f7f305f94830"
  },
  {
    "url": "emoji/120/3rd-place-medal.png",
    "revision": "cc9c75e3416918743a5776b8d80b5524"
  },
  {
    "url": "emoji/120/80030.png",
    "revision": "43b65edf5d46377dac776f94856b367c"
  },
  {
    "url": "emoji/120/a-button-blood-type.png",
    "revision": "9244ec12a7bd252057876db019da91de"
  },
  {
    "url": "emoji/120/ab-button-blood-type.png",
    "revision": "8622aec7a5682e295ae2e484c04b14d2"
  },
  {
    "url": "emoji/120/abacus.png",
    "revision": "966170657f854f31478f56d4d02f51fb"
  },
  {
    "url": "emoji/120/adhesive-bandage.png",
    "revision": "5a158e3f1806124fb0df996852475b16"
  },
  {
    "url": "emoji/120/admission-tickets.png",
    "revision": "bdd678264cfea691d97a976dd694df3a"
  },
  {
    "url": "emoji/120/aerial-tramway.png",
    "revision": "ff3bb11f3b17568990eb086af4977283"
  },
  {
    "url": "emoji/120/airplane-arrival.png",
    "revision": "753d5a3a819621f469638053cce6d3fb"
  },
  {
    "url": "emoji/120/airplane-departure.png",
    "revision": "79367ca44459f25d5f8a98b0a83eae2b"
  },
  {
    "url": "emoji/120/airplane.png",
    "revision": "dd21a91da68e64bcc6bbd034219e1c1d"
  },
  {
    "url": "emoji/120/alarm-clock.png",
    "revision": "58b621cd608ab903174f1cb455670cea"
  },
  {
    "url": "emoji/120/alembic.png",
    "revision": "ee595368371909818f91a632b36ed4a1"
  },
  {
    "url": "emoji/120/alien-monster.png",
    "revision": "108b014a216bdce79a39ce671c9f2c76"
  },
  {
    "url": "emoji/120/alien.png",
    "revision": "629e601cfc73bcd70270739e35dabc00"
  },
  {
    "url": "emoji/120/ambulance.png",
    "revision": "101f9d11ea7566bff87dd315e654b343"
  },
  {
    "url": "emoji/120/american-football.png",
    "revision": "f4f32b0bff673028b7f17c693a807c38"
  },
  {
    "url": "emoji/120/amphora.png",
    "revision": "aa5dcd5cb4f375bd8c5c865d0df5cb33"
  },
  {
    "url": "emoji/120/anchor.png",
    "revision": "6103b9ed7a84a2343d577fca9234bf67"
  },
  {
    "url": "emoji/120/anger-symbol.png",
    "revision": "bd7c86ebbe7b8f2b37ec996c26033370"
  },
  {
    "url": "emoji/120/angry-face-with-horns.png",
    "revision": "08d9eee635df26c49075a3157d5b4670"
  },
  {
    "url": "emoji/120/angry-face.png",
    "revision": "89d4c68af2650ea245d2400a08ddb39a"
  },
  {
    "url": "emoji/120/anguished-face.png",
    "revision": "8c76716eca5912935e95c3eabe766748"
  },
  {
    "url": "emoji/120/ant.png",
    "revision": "1f69dbf8b23d9eec5a40f1302e614ac5"
  },
  {
    "url": "emoji/120/antenna-bars.png",
    "revision": "86f4a866442f1aa067f18af27faace9a"
  },
  {
    "url": "emoji/120/anxious-face-with-sweat.png",
    "revision": "9c316a399c99c92bab4f08ff3ab33677"
  },
  {
    "url": "emoji/120/aquarius.png",
    "revision": "828cf50a491f53c41d799ff15fdbce15"
  },
  {
    "url": "emoji/120/aries.png",
    "revision": "65ce672ab1c4a53b3dcaef0ac6435bf0"
  },
  {
    "url": "emoji/120/articulated-lorry.png",
    "revision": "b2c5d5cfe1a1059d006c1ea18d0714a4"
  },
  {
    "url": "emoji/120/artist-palette.png",
    "revision": "4d776495f24b1fdd426c73578695ea78"
  },
  {
    "url": "emoji/120/astonished-face.png",
    "revision": "cd915206ada01a6c750fa380b7c3aee5"
  },
  {
    "url": "emoji/120/astro-cat.png",
    "revision": "8abc98e745eabb63f8acfd6c21135fdd"
  },
  {
    "url": "emoji/120/atm-sign.png",
    "revision": "06b2a7a84ec49e027c1b526e3407ba82"
  },
  {
    "url": "emoji/120/atom-symbol.png",
    "revision": "78cefbc4ec32f918ae9af4d42b6c0bee"
  },
  {
    "url": "emoji/120/auto-rickshaw.png",
    "revision": "0ffa61009159f1c903ce0f2366d67709"
  },
  {
    "url": "emoji/120/automobile.png",
    "revision": "3f3e2ce62560ca7f1f3c1c2428a54e9b"
  },
  {
    "url": "emoji/120/avocado.png",
    "revision": "28becc70cc4a93d8e92ac6d025f5c95f"
  },
  {
    "url": "emoji/120/axe.png",
    "revision": "828883321095e152194caeafb41a1111"
  },
  {
    "url": "emoji/120/b-button-blood-type.png",
    "revision": "06eec18a3320cb3e6aeb5775c17ad59c"
  },
  {
    "url": "emoji/120/baby-angel-dark-skin-tone.png",
    "revision": "6592348bff540abcf04ad262f7d6b8f0"
  },
  {
    "url": "emoji/120/baby-angel-light-skin-tone.png",
    "revision": "60475be14ff1db057689630033d17b81"
  },
  {
    "url": "emoji/120/baby-angel-medium-dark-skin-tone.png",
    "revision": "c0d56d8877f36ac34c040897b0d3c9b0"
  },
  {
    "url": "emoji/120/baby-angel-medium-light-skin-tone.png",
    "revision": "bcbfe513ff1e7b1a3a4ce4240a5da189"
  },
  {
    "url": "emoji/120/baby-angel-medium-skin-tone.png",
    "revision": "11298e69efc422e487dcda8c5a3ceee4"
  },
  {
    "url": "emoji/120/baby-angel.png",
    "revision": "fc325f5e95c3d3eaddf932e62808cbc4"
  },
  {
    "url": "emoji/120/baby-bottle.png",
    "revision": "92ea36368a7209a59b3e30de92b0699f"
  },
  {
    "url": "emoji/120/baby-chick.png",
    "revision": "12a85954b3022f27ede57a8dfaf3502d"
  },
  {
    "url": "emoji/120/baby-dark-skin-tone.png",
    "revision": "274e25da1c3f1e194f24f254e12e750f"
  },
  {
    "url": "emoji/120/baby-light-skin-tone.png",
    "revision": "c4eda238674aaced4997e39293699616"
  },
  {
    "url": "emoji/120/baby-medium-dark-skin-tone.png",
    "revision": "e6eb46d4f675c0878626d4e2eca691b1"
  },
  {
    "url": "emoji/120/baby-medium-light-skin-tone.png",
    "revision": "203448a9f4d7396488622e5621b07d00"
  },
  {
    "url": "emoji/120/baby-medium-skin-tone.png",
    "revision": "1a0c22b72fd3d43d51ae2eaab5141545"
  },
  {
    "url": "emoji/120/baby-symbol.png",
    "revision": "2b8c8787632fa768db8f6ef63c9919d6"
  },
  {
    "url": "emoji/120/baby.png",
    "revision": "e8e3fd621e45f02750446b5c7cd3a1ad"
  },
  {
    "url": "emoji/120/back-arrow.png",
    "revision": "3a8f0930943ec766b40aece316b92969"
  },
  {
    "url": "emoji/120/backhand-index-pointing-down-dark-skin-tone.png",
    "revision": "cc60551bdd571286e95a11d999e5de4c"
  },
  {
    "url": "emoji/120/backhand-index-pointing-down-light-skin-tone.png",
    "revision": "39f880f140fd098949412749814b4684"
  },
  {
    "url": "emoji/120/backhand-index-pointing-down-medium-dark-skin-tone.png",
    "revision": "73d95d202e13e544fb231b6b87b02509"
  },
  {
    "url": "emoji/120/backhand-index-pointing-down-medium-light-skin-tone.png",
    "revision": "65f33f856d693b1827a3f91b266273c5"
  },
  {
    "url": "emoji/120/backhand-index-pointing-down-medium-skin-tone.png",
    "revision": "574ea3471fa681ad5982da7e63059dd6"
  },
  {
    "url": "emoji/120/backhand-index-pointing-down.png",
    "revision": "3902edc353b9769ec72998e3e83f77b5"
  },
  {
    "url": "emoji/120/backhand-index-pointing-left-dark-skin-tone.png",
    "revision": "1fdf343d392bfb834ed559e5aedafcf0"
  },
  {
    "url": "emoji/120/backhand-index-pointing-left-light-skin-tone.png",
    "revision": "8822f9d4fe05b318436fac72836c4874"
  },
  {
    "url": "emoji/120/backhand-index-pointing-left-medium-dark-skin-tone.png",
    "revision": "e8ce537b96616b1f0810391f121ac374"
  },
  {
    "url": "emoji/120/backhand-index-pointing-left-medium-light-skin-tone.png",
    "revision": "59658be7543fbbd2ac6cd2050b5df7a0"
  },
  {
    "url": "emoji/120/backhand-index-pointing-left-medium-skin-tone.png",
    "revision": "1f64fa13b0eb29566ed3e3249fbaeb22"
  },
  {
    "url": "emoji/120/backhand-index-pointing-left.png",
    "revision": "dd0fc6b85fee48703ed7ce818110dd58"
  },
  {
    "url": "emoji/120/backhand-index-pointing-right-dark-skin-tone.png",
    "revision": "c7e11e31c6fcfd57e50cb25483e2ecfa"
  },
  {
    "url": "emoji/120/backhand-index-pointing-right-light-skin-tone.png",
    "revision": "e5b846c24ab6064c9458d9cf5b03902b"
  },
  {
    "url": "emoji/120/backhand-index-pointing-right-medium-dark-skin-tone.png",
    "revision": "2126f10e7a629ed6eb643f4984a1c001"
  },
  {
    "url": "emoji/120/backhand-index-pointing-right-medium-light-skin-tone.png",
    "revision": "312105157780d701fb05a34250d94904"
  },
  {
    "url": "emoji/120/backhand-index-pointing-right-medium-skin-tone.png",
    "revision": "7a6d2149dfcf73827f44538e3c0253ca"
  },
  {
    "url": "emoji/120/backhand-index-pointing-right.png",
    "revision": "3df54e59ebe6a77123660af00c5144cf"
  },
  {
    "url": "emoji/120/backhand-index-pointing-up-dark-skin-tone.png",
    "revision": "1eb98c2a628e633717592061e12cccae"
  },
  {
    "url": "emoji/120/backhand-index-pointing-up-light-skin-tone.png",
    "revision": "5edf0200c06c0cf0768cff6135b26973"
  },
  {
    "url": "emoji/120/backhand-index-pointing-up-medium-dark-skin-tone.png",
    "revision": "115ff97047e945c1f069aef1b90504cb"
  },
  {
    "url": "emoji/120/backhand-index-pointing-up-medium-light-skin-tone.png",
    "revision": "f1bc0243b3221b2e1d321fb8071b5595"
  },
  {
    "url": "emoji/120/backhand-index-pointing-up-medium-skin-tone.png",
    "revision": "4a2d36625c97deacc85ce80f798f040a"
  },
  {
    "url": "emoji/120/backhand-index-pointing-up.png",
    "revision": "3453cb032d81add02032ad70c303a7df"
  },
  {
    "url": "emoji/120/backpack.png",
    "revision": "a0d5227349a1304661208a132fbf77c6"
  },
  {
    "url": "emoji/120/bacon.png",
    "revision": "9f624a4ab3b11defcca57254e3243bba"
  },
  {
    "url": "emoji/120/badger.png",
    "revision": "3cd6015d2830fcbe02d3564457ec66f1"
  },
  {
    "url": "emoji/120/badminton.png",
    "revision": "84c6868fd96b3a59cfce910e40e21795"
  },
  {
    "url": "emoji/120/bagel.png",
    "revision": "cae98367108bd01607afb6825a471c36"
  },
  {
    "url": "emoji/120/baggage-claim.png",
    "revision": "51b2d3b30c20870c9126cd61e50b7986"
  },
  {
    "url": "emoji/120/baguette-bread.png",
    "revision": "8366889591306a1fd9574d3bfe2e2f1d"
  },
  {
    "url": "emoji/120/balance-scale.png",
    "revision": "12f882a63fb32bb7e3869c245ea027f3"
  },
  {
    "url": "emoji/120/bald.png",
    "revision": "c75088bfe7553098d77ab116ee5c1e69"
  },
  {
    "url": "emoji/120/ballet-shoes.png",
    "revision": "e2a7a1b6adb60dc52e14927a3110765a"
  },
  {
    "url": "emoji/120/balloon.png",
    "revision": "efad27b118afa707a7cca4a73781b389"
  },
  {
    "url": "emoji/120/ballot-box-with-ballot.png",
    "revision": "dc28999d58001f474d90f1e2e82f824e"
  },
  {
    "url": "emoji/120/banana.png",
    "revision": "081ce0f27456ac029b45636c8657077d"
  },
  {
    "url": "emoji/120/banjo.png",
    "revision": "ddde2372bd07f126ed4c5b21357e3950"
  },
  {
    "url": "emoji/120/bank.png",
    "revision": "169ea9ea9b804f2ffeb1a94ed99bd9ec"
  },
  {
    "url": "emoji/120/bar-chart.png",
    "revision": "06d1939cf6769587e6df70568b561807"
  },
  {
    "url": "emoji/120/barber-pole.png",
    "revision": "d8eee2b5647606e42eb4ad42fe03fee1"
  },
  {
    "url": "emoji/120/baseball.png",
    "revision": "3ad33c66cc2c16aedc88cdfc220774c6"
  },
  {
    "url": "emoji/120/basket.png",
    "revision": "2b2683f42e131255aab3a440e1d71f57"
  },
  {
    "url": "emoji/120/basketball.png",
    "revision": "0da685f4f3701053206b5bdc38931137"
  },
  {
    "url": "emoji/120/bat.png",
    "revision": "a1e69b4a5eb36040cdefaf0ce0e647a1"
  },
  {
    "url": "emoji/120/bathtub.png",
    "revision": "5b1a02742a1016a003f01595f8a4909e"
  },
  {
    "url": "emoji/120/battery.png",
    "revision": "3ac3e5af7b9beb378a2668a8c1e65b07"
  },
  {
    "url": "emoji/120/beach-with-umbrella.png",
    "revision": "ff39c815db0dd742239162e38cb59fed"
  },
  {
    "url": "emoji/120/beaming-face-with-smiling-eyes.png",
    "revision": "b80bb5d19eb8cd651f02c2b456886d46"
  },
  {
    "url": "emoji/120/bear.png",
    "revision": "9557c40a58842fac0714eba2059821ed"
  },
  {
    "url": "emoji/120/beating-heart.png",
    "revision": "80aede22c1d9c1f78997046c7d16b3af"
  },
  {
    "url": "emoji/120/bed.png",
    "revision": "39d3bbfe5c7c395c569a109dbf2d6b1c"
  },
  {
    "url": "emoji/120/beer-mug.png",
    "revision": "f8069e2db150d40402a2c7026e89784a"
  },
  {
    "url": "emoji/120/bell-with-slash.png",
    "revision": "3c002bc8e90ffcc14ad960c9ed123809"
  },
  {
    "url": "emoji/120/bell.png",
    "revision": "cb4a9429e7a777a936960c259eb2195f"
  },
  {
    "url": "emoji/120/bellhop-bell.png",
    "revision": "2e7c60201b5ae661b002b2c8ea2903d2"
  },
  {
    "url": "emoji/120/bento-box.png",
    "revision": "206dbdcd20a4b193f59a9e6d06a0e502"
  },
  {
    "url": "emoji/120/beverage-box.png",
    "revision": "e1f13ade47888d76ad9d1aef3aec5017"
  },
  {
    "url": "emoji/120/bicycle.png",
    "revision": "7f316f2ae61fa21560b2fa3174515194"
  },
  {
    "url": "emoji/120/bikini.png",
    "revision": "a8a35c3e8fb7170fc640da444f663084"
  },
  {
    "url": "emoji/120/billed-cap.png",
    "revision": "fe1a16cddcd25fb6a3d8f375cdf7cd34"
  },
  {
    "url": "emoji/120/biohazard.png",
    "revision": "694c177fcc44289af6201a6202396b57"
  },
  {
    "url": "emoji/120/bird.png",
    "revision": "03b435e14e4adbf89d2cd8459324b133"
  },
  {
    "url": "emoji/120/birthday-cake.png",
    "revision": "b4661e3744fcfe02beb3c0c6d8454924"
  },
  {
    "url": "emoji/120/black-circle.png",
    "revision": "88af5395367f72331dccf332a4a5b8ff"
  },
  {
    "url": "emoji/120/black-flag.png",
    "revision": "8fcea8e0636c7c9764344a8a652b6bfe"
  },
  {
    "url": "emoji/120/black-heart.png",
    "revision": "4c4d8f93d12d81192af759c8d6ff5a9d"
  },
  {
    "url": "emoji/120/black-large-square.png",
    "revision": "db178283ab3a0746b2d885c4c6510ec5"
  },
  {
    "url": "emoji/120/black-left-pointing-index-dark-skin-tone.png",
    "revision": "925182043fa8e68905474d7015fa2b82"
  },
  {
    "url": "emoji/120/black-left-pointing-index-light-skin-tone.png",
    "revision": "850be33cb50fd504f11faafd155408eb"
  },
  {
    "url": "emoji/120/black-left-pointing-index-medium-dark-skin-tone.png",
    "revision": "0c691d2e9ccc1c69f3876457acf64e53"
  },
  {
    "url": "emoji/120/black-left-pointing-index-medium-light-skin-tone.png",
    "revision": "e7ba10fcbe45c9f78d8331d55e6a5e94"
  },
  {
    "url": "emoji/120/black-left-pointing-index-medium-skin-tone.png",
    "revision": "7a920f17753bd0f990246b53fdf41101"
  },
  {
    "url": "emoji/120/black-left-pointing-index.png",
    "revision": "962a8d83a1c424eb40eff0458249da12"
  },
  {
    "url": "emoji/120/black-medium-small-square.png",
    "revision": "545e2f513cce6b4e598a84ecec78a1b6"
  },
  {
    "url": "emoji/120/black-medium-square.png",
    "revision": "3d7df650fafee523ae97ad793f9e7974"
  },
  {
    "url": "emoji/120/black-nib.png",
    "revision": "1d070b1b9ca3069060fe9bd7a5a69e23"
  },
  {
    "url": "emoji/120/black-right-pointing-index-dark-skin-tone.png",
    "revision": "cef0940aede0dad55041cc2c249f95fe"
  },
  {
    "url": "emoji/120/black-right-pointing-index-light-skin-tone.png",
    "revision": "9d81d478719d34337a52e94db3c3b661"
  },
  {
    "url": "emoji/120/black-right-pointing-index-medium-dark-skin-tone.png",
    "revision": "56e66f22ea5b8a9281b82cf866e997fb"
  },
  {
    "url": "emoji/120/black-right-pointing-index-medium-light-skin-tone.png",
    "revision": "2f287e15af214b4f1d086279012d0176"
  },
  {
    "url": "emoji/120/black-right-pointing-index-medium-skin-tone.png",
    "revision": "d4f1ec1ea2114449e7d43b7c0c3f21a5"
  },
  {
    "url": "emoji/120/black-right-pointing-index.png",
    "revision": "8f5764dcaf9e9204b66d72ca810a2681"
  },
  {
    "url": "emoji/120/black-small-square.png",
    "revision": "36a011acbe2e80a26b5afe09d745d17a"
  },
  {
    "url": "emoji/120/black-square-button.png",
    "revision": "c96fad201f8d4bde4d27e32e05180178"
  },
  {
    "url": "emoji/120/blossom.png",
    "revision": "dd23ef6775ad4705a99fe08a162d2050"
  },
  {
    "url": "emoji/120/blowfish.png",
    "revision": "a0310afdb2148fab4f11d95816862fdb"
  },
  {
    "url": "emoji/120/blue-book.png",
    "revision": "55310b1674b0aba8b692f8fe8f754a7d"
  },
  {
    "url": "emoji/120/blue-heart.png",
    "revision": "46317e3cc823a2428c79402d66ca63e6"
  },
  {
    "url": "emoji/120/boar.png",
    "revision": "1cc3c6e019707e7679a938cafcbe544d"
  },
  {
    "url": "emoji/120/bomb.png",
    "revision": "42f441f068a3c5155bbe653ce911f167"
  },
  {
    "url": "emoji/120/bone.png",
    "revision": "3c7e194c6c49e743870db23bc21c86ee"
  },
  {
    "url": "emoji/120/bookmark-tabs.png",
    "revision": "0618df68909f3651c3d50e1950970a1e"
  },
  {
    "url": "emoji/120/bookmark.png",
    "revision": "0ba027032cea3e5d1f40317712832f38"
  },
  {
    "url": "emoji/120/books.png",
    "revision": "b591b6aba45d9b0f486fca2f0e06354f"
  },
  {
    "url": "emoji/120/bottle-with-popping-cork.png",
    "revision": "9a4aab1cc863bdbf4f6d9998f4e67ee3"
  },
  {
    "url": "emoji/120/bouquet.png",
    "revision": "fae0a0dd6a85c4ff8bcd27b914064463"
  },
  {
    "url": "emoji/120/bow-and-arrow.png",
    "revision": "7085ac31971e27ad22087368adaed04f"
  },
  {
    "url": "emoji/120/bowl-with-spoon.png",
    "revision": "22adef6a55c8c5cb61dddf5810e37675"
  },
  {
    "url": "emoji/120/bowling.png",
    "revision": "2c60d4d32f4049a31ff55f779097b953"
  },
  {
    "url": "emoji/120/boxing-glove.png",
    "revision": "cdd3e754a40751f66d0c8cff0d726f66"
  },
  {
    "url": "emoji/120/boy-dark-skin-tone.png",
    "revision": "d8ad4c96203383155cf090d1927b0ade"
  },
  {
    "url": "emoji/120/boy-light-skin-tone.png",
    "revision": "abd1a875f2589d439c20cafb62ba0320"
  },
  {
    "url": "emoji/120/boy-medium-dark-skin-tone.png",
    "revision": "a533e4184fddd730f85c78a187c49c4f"
  },
  {
    "url": "emoji/120/boy-medium-light-skin-tone.png",
    "revision": "f96773b77d0eaedb59ac7f985889bf75"
  },
  {
    "url": "emoji/120/boy-medium-skin-tone.png",
    "revision": "3573867e39d05fbf4a62276c6c72c8e4"
  },
  {
    "url": "emoji/120/boy.png",
    "revision": "39ce8ccfb34bd7f030d1c681965bec09"
  },
  {
    "url": "emoji/120/brain.png",
    "revision": "951fa95edf55a47d756a036779654ad3"
  },
  {
    "url": "emoji/120/bread.png",
    "revision": "5ea7a7b18c304e5ca768ef498892ad45"
  },
  {
    "url": "emoji/120/breast-feeding-dark-skin-tone.png",
    "revision": "900fe8da19cb93141945e7f8dafd84d0"
  },
  {
    "url": "emoji/120/breast-feeding-light-skin-tone.png",
    "revision": "90c83ef6683256c7e22cea02bda12477"
  },
  {
    "url": "emoji/120/breast-feeding-medium-dark-skin-tone.png",
    "revision": "3f24aa66e58546f9835a2ac4aaf1bb0f"
  },
  {
    "url": "emoji/120/breast-feeding-medium-light-skin-tone.png",
    "revision": "3a7037c97ef1e3553c1c878b7f1dc5d9"
  },
  {
    "url": "emoji/120/breast-feeding-medium-skin-tone.png",
    "revision": "ca2c8e4ef0cb08ee0ee96067bc8529a6"
  },
  {
    "url": "emoji/120/breast-feeding.png",
    "revision": "9b5793fa6050c25a3a0b44451e6532bd"
  },
  {
    "url": "emoji/120/brick.png",
    "revision": "7090f41b5f8d177c266fec77124d8538"
  },
  {
    "url": "emoji/120/bridge-at-night.png",
    "revision": "eb2d849a3c508c5582193e29c1ae94a8"
  },
  {
    "url": "emoji/120/briefcase.png",
    "revision": "9e3435c8078495e812f1ec18f3dac654"
  },
  {
    "url": "emoji/120/briefs.png",
    "revision": "43ddbcd9358b2c6f0bd35c75960af0e1"
  },
  {
    "url": "emoji/120/bright-button.png",
    "revision": "34902245abf0f07cd316207f0cd210bc"
  },
  {
    "url": "emoji/120/broccoli.png",
    "revision": "5fd14c594af64546c1d5deb6468407ec"
  },
  {
    "url": "emoji/120/broken-heart.png",
    "revision": "adfeffa4b35282078e29b4dca58705de"
  },
  {
    "url": "emoji/120/broom.png",
    "revision": "972b970bbc9c6e8a357f30410ab7836f"
  },
  {
    "url": "emoji/120/brown-heart.png",
    "revision": "498bca7ba9531a6ef69e72a08bad65d9"
  },
  {
    "url": "emoji/120/bug.png",
    "revision": "59999195be406ef752a7ade68ea7331b"
  },
  {
    "url": "emoji/120/building-construction.png",
    "revision": "f378179c7a15817afab5b0be05f5f8ff"
  },
  {
    "url": "emoji/120/bullet-train.png",
    "revision": "68b78aeee374d5fe62a36ba0df91bf28"
  },
  {
    "url": "emoji/120/burrito.png",
    "revision": "036696252bd903f8adf6ab75c3a31f89"
  },
  {
    "url": "emoji/120/bus-stop.png",
    "revision": "880b5ba065ff8b66b76aaeeda560aac8"
  },
  {
    "url": "emoji/120/bus.png",
    "revision": "b6e301a935e0c7d0f1b098c94094f820"
  },
  {
    "url": "emoji/120/bust-in-silhouette.png",
    "revision": "80865cdb608960b6e4d9b4186ab64449"
  },
  {
    "url": "emoji/120/busts-in-silhouette.png",
    "revision": "dcf1e962b5a24271a9d89418e1587684"
  },
  {
    "url": "emoji/120/butter.png",
    "revision": "03aab4f69b16ff46265274135f2bcf6f"
  },
  {
    "url": "emoji/120/butterfly.png",
    "revision": "e7571d1f758dff29a5d7401ab0afab65"
  },
  {
    "url": "emoji/120/cactus.png",
    "revision": "798edbe010f2e26f7fd4676e3fb4fe69"
  },
  {
    "url": "emoji/120/calendar.png",
    "revision": "cda76c43e992cb39daceeafa8b9b8dbb"
  },
  {
    "url": "emoji/120/call-me-hand-dark-skin-tone.png",
    "revision": "273945453086ec399a1c6a5c1d8469ca"
  },
  {
    "url": "emoji/120/call-me-hand-light-skin-tone.png",
    "revision": "ae82599334f03ae3b0e0bee2d21a3623"
  },
  {
    "url": "emoji/120/call-me-hand-medium-dark-skin-tone.png",
    "revision": "8136ad2adfcf313319c6eef678dc85c8"
  },
  {
    "url": "emoji/120/call-me-hand-medium-light-skin-tone.png",
    "revision": "79f8df81561b10e7603971738ac4c385"
  },
  {
    "url": "emoji/120/call-me-hand-medium-skin-tone.png",
    "revision": "efd9100289c9e3ed8e1cfba3a2118d91"
  },
  {
    "url": "emoji/120/call-me-hand.png",
    "revision": "326443c698e9049e3cfb3b6e478415ac"
  },
  {
    "url": "emoji/120/camel.png",
    "revision": "92f518577c613a260e4092d7ca413595"
  },
  {
    "url": "emoji/120/camera-with-flash.png",
    "revision": "e94328f04b339df5644b8e98b170959a"
  },
  {
    "url": "emoji/120/camera.png",
    "revision": "c388d2c74338fc1810cb7852bc41862e"
  },
  {
    "url": "emoji/120/camping.png",
    "revision": "30f02d2ab436584055f884ec9a61b3e7"
  },
  {
    "url": "emoji/120/cancer.png",
    "revision": "d04f471e224683bcd34e353b8ffd46da"
  },
  {
    "url": "emoji/120/candle.png",
    "revision": "c914f2684f51464eb29ee9f64bc43e48"
  },
  {
    "url": "emoji/120/candy.png",
    "revision": "b00c4b3ab093da62d9ed93e4bb911307"
  },
  {
    "url": "emoji/120/canned-food.png",
    "revision": "df719900565fc02c21b262e3c9f772da"
  },
  {
    "url": "emoji/120/canoe.png",
    "revision": "6964e106bf409a4891602f19602ed111"
  },
  {
    "url": "emoji/120/capricorn.png",
    "revision": "add6fa0f6f5714338f4dbf7d366f7a8a"
  },
  {
    "url": "emoji/120/card-file-box.png",
    "revision": "9d433f1fb572b640c1ed9b29b26ca73d"
  },
  {
    "url": "emoji/120/card-index-dividers.png",
    "revision": "894012a2ebf4ccf0cc332b7c99f5ebf3"
  },
  {
    "url": "emoji/120/card-index.png",
    "revision": "c0a42494e99ff6e193319a459997117b"
  },
  {
    "url": "emoji/120/carousel-horse.png",
    "revision": "e19ae6f586ba8688b96997e04a8e388e"
  },
  {
    "url": "emoji/120/carp-streamer.png",
    "revision": "2144581fa28f36fb8ae5c86e3605ff93"
  },
  {
    "url": "emoji/120/carrot.png",
    "revision": "0c185f67e8d03e6da041e6ad4cebf018"
  },
  {
    "url": "emoji/120/castle.png",
    "revision": "ef4a6ce2271aeb5bbaca243b4764d729"
  },
  {
    "url": "emoji/120/cat-face.png",
    "revision": "17a8aa11a8caea1d28094c259bb40129"
  },
  {
    "url": "emoji/120/cat-with-tears-of-joy.png",
    "revision": "313eb016bf57f347598df5d2f913bc30"
  },
  {
    "url": "emoji/120/cat-with-wry-smile.png",
    "revision": "9be4e8533d0fe9fa74063fb4a8178b0a"
  },
  {
    "url": "emoji/120/cat.png",
    "revision": "a5dc7bc3796ce5cfb2d021ab70534e79"
  },
  {
    "url": "emoji/120/chains.png",
    "revision": "32cf01dc0c630f989f23bc9eb86fb9ae"
  },
  {
    "url": "emoji/120/chair.png",
    "revision": "b2ae5e62001b5e0b5e0698d5509d121a"
  },
  {
    "url": "emoji/120/chart-decreasing.png",
    "revision": "682bb8c6a0743e8e1fd3f63de8070d4f"
  },
  {
    "url": "emoji/120/chart-increasing-with-yen.png",
    "revision": "562e7d3171d261b2357227cc3fba6ec8"
  },
  {
    "url": "emoji/120/chart-increasing.png",
    "revision": "8443d4a67e9736fbdffd63924b6fa77c"
  },
  {
    "url": "emoji/120/check-box-with-check.png",
    "revision": "79ae8cdbf13db818f58b7a84faf6b9f5"
  },
  {
    "url": "emoji/120/check-mark-button.png",
    "revision": "eedcc99871d39c4c564741861f2d68b4"
  },
  {
    "url": "emoji/120/check-mark.png",
    "revision": "e83d872062307bc1ea0e564eb6d2466b"
  },
  {
    "url": "emoji/120/cheese-wedge.png",
    "revision": "1e2e6e728c14d875c684608452dbeb7d"
  },
  {
    "url": "emoji/120/chequered-flag.png",
    "revision": "3086edddee91e19f24c800c93e91f28e"
  },
  {
    "url": "emoji/120/cherries.png",
    "revision": "3da29ddfbd46834070b8861beea60368"
  },
  {
    "url": "emoji/120/cherry-blossom.png",
    "revision": "ebbb560fe9056fac41596e38d2af9b7a"
  },
  {
    "url": "emoji/120/chess-pawn.png",
    "revision": "4ecc1ae8e1a3021c8101eed0dc251686"
  },
  {
    "url": "emoji/120/chestnut.png",
    "revision": "6e1d52f4dcc800871d0ae69411f8476f"
  },
  {
    "url": "emoji/120/chicken.png",
    "revision": "96160a3f04b0b8a00da1535bdf48283b"
  },
  {
    "url": "emoji/120/child-dark-skin-tone.png",
    "revision": "9ba4dc1aed59ccf1c207e014bbee5f68"
  },
  {
    "url": "emoji/120/child-light-skin-tone.png",
    "revision": "74cf19bb97b068df9f54684fc0bd5ac5"
  },
  {
    "url": "emoji/120/child-medium-dark-skin-tone.png",
    "revision": "bbf3c113d6a4efba8f015f411e7e7144"
  },
  {
    "url": "emoji/120/child-medium-light-skin-tone.png",
    "revision": "cb966923fd385a723ff30e5f64f6ab67"
  },
  {
    "url": "emoji/120/child-medium-skin-tone.png",
    "revision": "86ac2e6e8f992159a3e50f99820a450c"
  },
  {
    "url": "emoji/120/child.png",
    "revision": "bbbe1fd74556f2883ac4865128ed4849"
  },
  {
    "url": "emoji/120/children-crossing.png",
    "revision": "61439eae856aca8f20b2129da477c83c"
  },
  {
    "url": "emoji/120/chipmunk.png",
    "revision": "8011eb553c1f7f63e92f68419de7115c"
  },
  {
    "url": "emoji/120/chocolate-bar.png",
    "revision": "14def1c7fd8a4f4f942c4010ce2c00a2"
  },
  {
    "url": "emoji/120/chopsticks.png",
    "revision": "30487a939c32ebb39b524db493991af7"
  },
  {
    "url": "emoji/120/christmas-tree.png",
    "revision": "db22911e2fdbd8508fee1e13932cb6a4"
  },
  {
    "url": "emoji/120/church.png",
    "revision": "b10b0c71f8b32b6b03baa8a4dbf5963d"
  },
  {
    "url": "emoji/120/cigarette.png",
    "revision": "1666dc7a9fcc28700aaaefbbf348f98d"
  },
  {
    "url": "emoji/120/cinema.png",
    "revision": "c5def7d8a549ef19a3aacfd7844f0e08"
  },
  {
    "url": "emoji/120/circled-m.png",
    "revision": "4a6f12050e54427dca989e77f24f6a61"
  },
  {
    "url": "emoji/120/circus-tent.png",
    "revision": "e4908e141e5dde54fc2a912847975e31"
  },
  {
    "url": "emoji/120/cityscape-at-dusk.png",
    "revision": "2f10b0aa7d8790bc956d5b12c3ded036"
  },
  {
    "url": "emoji/120/cityscape.png",
    "revision": "7ff72e3a4ec6ea39c10848eff7d3b6c2"
  },
  {
    "url": "emoji/120/cl-button.png",
    "revision": "1efcff3aafd476abe2144d69aec9f8d6"
  },
  {
    "url": "emoji/120/clamp.png",
    "revision": "126194d73ab721e57611282a1d8ff8b4"
  },
  {
    "url": "emoji/120/clapper-board.png",
    "revision": "33749ed81d5083629f917c6934993ec3"
  },
  {
    "url": "emoji/120/clapping-hands-dark-skin-tone.png",
    "revision": "57c33621fb6b05dbb12d3b8922b48ac4"
  },
  {
    "url": "emoji/120/clapping-hands-light-skin-tone.png",
    "revision": "a48a5ab88ee2fc8f2de8c19f408ddc28"
  },
  {
    "url": "emoji/120/clapping-hands-medium-dark-skin-tone.png",
    "revision": "44c54d916a13cca8be81819e6b5e2498"
  },
  {
    "url": "emoji/120/clapping-hands-medium-light-skin-tone.png",
    "revision": "20dd76ee369b68685f74a7e611012223"
  },
  {
    "url": "emoji/120/clapping-hands-medium-skin-tone.png",
    "revision": "187e2e9c8f35909210cf2ea9ffa32875"
  },
  {
    "url": "emoji/120/clapping-hands.png",
    "revision": "051aeaf380cedeff2806c00b2693be0b"
  },
  {
    "url": "emoji/120/classical-building.png",
    "revision": "ff395bf54d83c15eb3409a52b8aa8045"
  },
  {
    "url": "emoji/120/clinking-beer-mugs.png",
    "revision": "65f5c8b7a05ae37e619f9fb72475221f"
  },
  {
    "url": "emoji/120/clinking-glasses.png",
    "revision": "d9d8957dc1100f7dd0dd9ccdbcd2f1b5"
  },
  {
    "url": "emoji/120/clipboard.png",
    "revision": "8b7fa3c08a1dcbca147ac57813716d57"
  },
  {
    "url": "emoji/120/clockwise-vertical-arrows.png",
    "revision": "450a82b290bf77f6d02fdd630fa08b2b"
  },
  {
    "url": "emoji/120/closed-book.png",
    "revision": "86b38b31c992357571eef097df5b5fd5"
  },
  {
    "url": "emoji/120/closed-mailbox-with-lowered-flag.png",
    "revision": "156145e759c465a542ac3a9f939c13a5"
  },
  {
    "url": "emoji/120/closed-mailbox-with-raised-flag.png",
    "revision": "fbf2e77f6307dd072aab2d3202ec106e"
  },
  {
    "url": "emoji/120/closed-umbrella.png",
    "revision": "5f6ad23d6ead5f6ddcd9cb97b82d8a08"
  },
  {
    "url": "emoji/120/cloud-with-lightning-and-rain.png",
    "revision": "bcad5f7fab57387127af97840ed17dc9"
  },
  {
    "url": "emoji/120/cloud-with-lightning.png",
    "revision": "40ff3c6ef01d9f1baa176d9015f96ea1"
  },
  {
    "url": "emoji/120/cloud-with-rain.png",
    "revision": "444220ad9718abb286295c0c32ca9e4a"
  },
  {
    "url": "emoji/120/cloud-with-snow.png",
    "revision": "4e17493f0afd27424141c5d469a48d3a"
  },
  {
    "url": "emoji/120/cloud.png",
    "revision": "6be2ef64acd31f8a0f9147c62bfcd9f6"
  },
  {
    "url": "emoji/120/clown-face.png",
    "revision": "2c6f79b0153f9d75bef3af91792994de"
  },
  {
    "url": "emoji/120/club-suit.png",
    "revision": "dbdcf6143e4fc85b7283ba691822bfa3"
  },
  {
    "url": "emoji/120/clutch-bag.png",
    "revision": "7f8af9438f861e4d41a64f7020fdd922"
  },
  {
    "url": "emoji/120/coat.png",
    "revision": "2d462029be5ba658967c2ff8e2219a83"
  },
  {
    "url": "emoji/120/cocktail-glass.png",
    "revision": "3efe2e39b36e7fb2c98c34388bee3a1c"
  },
  {
    "url": "emoji/120/coconut.png",
    "revision": "937c5a659cf608d3b94d70d08605d7e5"
  },
  {
    "url": "emoji/120/coffin.png",
    "revision": "647ad6ce87e0cab70865c7438af77f00"
  },
  {
    "url": "emoji/120/cold-face.png",
    "revision": "c5998b2e97c0ddc568d065156dc85c51"
  },
  {
    "url": "emoji/120/collision.png",
    "revision": "72d435d5591e97e94a37e50db2bc805f"
  },
  {
    "url": "emoji/120/comet.png",
    "revision": "2b61eebb20d116735cce134e9dc97379"
  },
  {
    "url": "emoji/120/compass.png",
    "revision": "6c37ba1c77ce8b324dc3e3dfddab3e40"
  },
  {
    "url": "emoji/120/computer-disk.png",
    "revision": "5f21237fc447768a5ec15cf5f1110b56"
  },
  {
    "url": "emoji/120/computer-mouse.png",
    "revision": "61516f755a959d027532c74bb5d73dc0"
  },
  {
    "url": "emoji/120/confetti-ball.png",
    "revision": "e2da1d35799f5731d345aa6044f9c26b"
  },
  {
    "url": "emoji/120/confounded-face.png",
    "revision": "dd432f8930bcf64258601da2ceb51e8e"
  },
  {
    "url": "emoji/120/confused-face.png",
    "revision": "a5c5188745eae0050179f5a76a3020d1"
  },
  {
    "url": "emoji/120/construction-worker-dark-skin-tone.png",
    "revision": "3774ed4fc8d1067436fcd6c0a07e4111"
  },
  {
    "url": "emoji/120/construction-worker-light-skin-tone.png",
    "revision": "c268f3b0c7aeac7e1241c353965298cb"
  },
  {
    "url": "emoji/120/construction-worker-medium-dark-skin-tone.png",
    "revision": "0372a175bf00d339437ed43050a193cf"
  },
  {
    "url": "emoji/120/construction-worker-medium-light-skin-tone.png",
    "revision": "6acb2587561be635d5c63dff7082e9ed"
  },
  {
    "url": "emoji/120/construction-worker-medium-skin-tone.png",
    "revision": "66933bc94d1e558fca5045c389549bae"
  },
  {
    "url": "emoji/120/construction-worker.png",
    "revision": "b6af793a55bc4a1ca4e9c9c6000b56a0"
  },
  {
    "url": "emoji/120/construction.png",
    "revision": "53edc279491cde17a1d2a9920387c460"
  },
  {
    "url": "emoji/120/control-knobs.png",
    "revision": "54e00c7805c02f320549a7f9c605aefb"
  },
  {
    "url": "emoji/120/convenience-store.png",
    "revision": "a9354d612b9e6eac8e4c167d70bcb5f9"
  },
  {
    "url": "emoji/120/cooked-rice.png",
    "revision": "7fba9f46b4bf451030103fd81c2d0c82"
  },
  {
    "url": "emoji/120/cookie.png",
    "revision": "eeec56d59e992fa077c918bdd86d6b6c"
  },
  {
    "url": "emoji/120/cooking.png",
    "revision": "66b080912f4cd519efbbfd05b8019975"
  },
  {
    "url": "emoji/120/cool-button.png",
    "revision": "5c77fab01c95dd2af2311c2b7548d03e"
  },
  {
    "url": "emoji/120/copyright.png",
    "revision": "f6f00dee801f8e9587fd5e7cb2354d8c"
  },
  {
    "url": "emoji/120/couch-and-lamp.png",
    "revision": "14c586e35025ca711149931798106cac"
  },
  {
    "url": "emoji/120/counterclockwise-arrows-button.png",
    "revision": "0b4efb3898aee1f693b68228c22a7d90"
  },
  {
    "url": "emoji/120/couple-with-heart-dark-skin-tone.png",
    "revision": "dc1df2f2d4c16561591d603e6b365d49"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-man-no-skin-tone.png",
    "revision": "e0559c545d8e90b1098341291aeb3a78"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-woman-dark-skin-tone.png",
    "revision": "cb5cf14e45cf4c0e3005437311996cbe"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-woman-light-skin-tone.png",
    "revision": "c6a43e331059699fb33e17f8ccc559b1"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "9d331f37b7ed6b8f5ce2f74011075f00"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "48ae0d3cb47401006e80f784ed323c72"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-woman-medium-skin-tone.png",
    "revision": "f3dddf48ac83ef5fbdd5e8dee95f1a7f"
  },
  {
    "url": "emoji/120/couple-with-heart-man-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "5b9ad403ceec3d35e3ca66fd275318ef"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-man-no-skin-tone.png",
    "revision": "a9ca501235276231656cfbee495180d9"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-woman-dark-skin-tone.png",
    "revision": "1242e956572a1b8a6b7ebe7e2e1bfb15"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-woman-light-skin-tone.png",
    "revision": "9b8d8e113a3f70057a2bd40be5695cba"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "4db06ef8bb93ebf7b2f928c33f3781b8"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "a6d12bd95263a31fd3e4cd43b75dfc38"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-woman-medium-skin-tone.png",
    "revision": "0fd37d826466431ea0188b2f756f2a26"
  },
  {
    "url": "emoji/120/couple-with-heart-man-light-skin-tone-woman-no-skin-tone.png",
    "revision": "606ea18dd083954bfa0c833d13472ee8"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-dark-skin-tone-light-skin-tone.png",
    "revision": "1e7a5f80d1f0323fe2748a8c52548cee"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "3783b7bd41b59cf9f45e78cee4a6969c"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "7e7eebdc6e3639c81faf1252151e7cef"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-dark-skin-tone-medium-skin-tone.png",
    "revision": "484940ca23f1df13b48f890af3a83bd4"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-dark-skin-tone.png",
    "revision": "881da9f87cb542f1ffd8985962810335"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-light-skin-tone-dark-skin-tone.png",
    "revision": "da9838b318718b745571ad30003459b7"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "7e20a706ccf9cd405b017849ff93f4dd"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-light-skin-tone-medium-light-skin-tone.png",
    "revision": "e57af2d3fef26984f6af29bec9e91dd6"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-light-skin-tone-medium-skin-tone.png",
    "revision": "f1ad5f11c2ab4e9e31b9a318ce8b4c04"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-light-skin-tone.png",
    "revision": "e40c14ca81ab45fe2c33d0d5c8b0d002"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "a0122c62b4f43895381d0e268ef33de0"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "e8d0af1fb79f59a2064cbbed72f594b0"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "2281cd39e4b3e24a9e5e9b0bfdaa6fb9"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "5647954775ac2433bb93bdba01cd0183"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-dark-skin-tone.png",
    "revision": "000ef88c170eba17b6498f3577417867"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "c4a6d50bcf2caaff421224fbefdb61b2"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-light-skin-tone-light-skin-tone.png",
    "revision": "ebaa41093bfa51b6d6e88bdc420ed3fd"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "3ccfdf0feae06aad4b968a268ab1c786"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "dde918414802838fc843644cc3d95d7b"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-light-skin-tone.png",
    "revision": "251d604a5022ab23109739b168ffe182"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-skin-tone-dark-skin-tone.png",
    "revision": "bfdb83cd54791655ca2d9f66df81f18f"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-skin-tone-light-skin-tone.png",
    "revision": "d964f5ee766ea02ab07659167bd5fb06"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "df3d04aba0006890d0e991d09db56077"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "54bafb0c54e89dc6a9f60bfd2c51b451"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man-medium-skin-tone.png",
    "revision": "2cd0853964d5aedfac1f1b12b1646db8"
  },
  {
    "url": "emoji/120/couple-with-heart-man-man.png",
    "revision": "889d0e396550d81ae679608140d76ba8"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-man-no-skin-tone.png",
    "revision": "ee2aca3dede8fa4855dabf9241a0509a"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-woman-dark-skin-tone.png",
    "revision": "99aed18514de778d7946a4630c03d073"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-woman-light-skin-tone.png",
    "revision": "04b582be131a769d1c1a043939be1a76"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "350005fbc255d458d7f7344933bab2db"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "6c25a16764932d871896a7d666fbe07b"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-woman-medium-skin-tone.png",
    "revision": "50ed72f4abc4c11bec51abc79878d243"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "f3a239c5a1eaf172e47124590c467ddd"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-man-no-skin-tone.png",
    "revision": "4c76bce2c39f9bc96252169cec9884c6"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-woman-dark-skin-tone.png",
    "revision": "c10add985ac96138f430d9e7cb3023c8"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-woman-light-skin-tone.png",
    "revision": "63f95398eee2b692e8a62f53fd7fb656"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "6d3862d8953501b2f0a850e89ba7c262"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "a335c84ad4440bee8455ac6476014b71"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-woman-medium-skin-tone.png",
    "revision": "9e9757ddea55a5da83a2b2966937e900"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-light-skin-tone-woman-no-skin-tone.png",
    "revision": "68ab995c6791f70a8d6a39ab7c7a616f"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-man-no-skin-tone.png",
    "revision": "0c2663d8cf884a9b9969799e98ec0785"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-woman-dark-skin-tone.png",
    "revision": "bab31d43caf3c99ba18e2439354765b6"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-woman-light-skin-tone.png",
    "revision": "114aab56ff86c7e181bcc695c394889b"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "0642d09698da4d4a5eb9bf3187c302e6"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "a7b64a6de6a95a9776fdf2c2025947e5"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-woman-medium-skin-tone.png",
    "revision": "87e726b4b5d82e84d75dce18c525741e"
  },
  {
    "url": "emoji/120/couple-with-heart-man-medium-skin-tone-woman-no-skin-tone.png",
    "revision": "ed82dd2cda0008853984abf76c77cd1b"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-man-dark-skin-tone.png",
    "revision": "28d3a85c83805683e89bb35b4141c440"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-man-light-skin-tone.png",
    "revision": "72bd7521f2da7ce814af7a10c6c78a82"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-man-medium-dark-skin-tone.png",
    "revision": "d1f59c61b66a8a60001832a03c586051"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-man-medium-light-skin-tone.png",
    "revision": "b4929f97e3f8de49eced7e8389b37697"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-man-medium-skin-tone.png",
    "revision": "6944042a79c0b7c5d39874635d291612"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-woman-dark-skin-tone.png",
    "revision": "e8462456928528ac04bbb1496eb2426d"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-woman-light-skin-tone.png",
    "revision": "45c1120abd1bbd3ac7b2d906ca79b918"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "f0171047ee2af5d3728b70549291ddaa"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "e134441f29a57ce605ba9b3a9e318013"
  },
  {
    "url": "emoji/120/couple-with-heart-man-no-skin-tone-woman-medium-skin-tone.png",
    "revision": "62e63bcdd1db4b7b389cd0bd6c885ed6"
  },
  {
    "url": "emoji/120/couple-with-heart-man-woman.png",
    "revision": "546126076ee41bc10ec7ea6a210e67a7"
  },
  {
    "url": "emoji/120/couple-with-heart-medium-dark-skin-tone.png",
    "revision": "8f36f013988f2ecbd5240c421d8d4690"
  },
  {
    "url": "emoji/120/couple-with-heart-medium-light-skin-tone.png",
    "revision": "39c62801a35aca04d408d9f502d05c12"
  },
  {
    "url": "emoji/120/couple-with-heart-medium-skin-tone.png",
    "revision": "f8ce103c5c3a67b6b0b37ca92e847460"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-dark-skin-tone-man-no-skin-tone.png",
    "revision": "df682991a85851f8596de5dbb25453bb"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "29839b3ea3addf4361a7fe7f465b5672"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-light-skin-tone-man-no-skin-tone.png",
    "revision": "2007f87e215256baacec06f1518fb2cf"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-light-skin-tone-woman-no-skin-tone.png",
    "revision": "b56a2471d826786046e535a37b22a5c4"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-dark-skin-tone-light-skin-tone.png",
    "revision": "93c84352c9163280fae8f53190d6d7ea"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "5b7aae9ef3f41039ec5c25379edff467"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "fe7e84261517ea29aff2fbde5dfc8156"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-dark-skin-tone-medium-skin-tone.png",
    "revision": "7b8e50ba2f2d2435a0cf9b9fb1f285ad"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-dark-skin-tone.png",
    "revision": "3d4ba695cb75212285fd59fee1b894e3"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-light-skin-tone-dark-skin-tone.png",
    "revision": "08bea721a5d99c3e02301b08e16b886f"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "c22e894b97522b38ec91523d99ab444a"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-light-skin-tone-medium-light-skin-tone.png",
    "revision": "b9aafe4decc77c518b0121f94ca57fec"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-light-skin-tone-medium-skin-tone.png",
    "revision": "02155bdb0135b21aca0aac197a57c670"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-light-skin-tone.png",
    "revision": "6e2f6a99b5fe6cbcb24e8547e286feab"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "fdc031f2bd87f6976a23e8ed752a4b5f"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "b70943cb8e6885520efa7318fe5d4416"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "c7b58d77e1ac07d951e862159feba602"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "b1944ec712335178bbc121f868104af5"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-dark-skin-tone.png",
    "revision": "048f2df8167661fbf9ea386a995fe9a4"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "b8fcadb08c5d51017163286d6f7c98eb"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-light-skin-tone-light-skin-tone.png",
    "revision": "85ba9d3526fa3a1c7d7de7ba2eceae4c"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "9bb3585a813c305dd42a9e5ffea79912"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "3533dae71ba94df3f89e45db25dde7de"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-light-skin-tone.png",
    "revision": "14c8b6af25a65f5de2488239a86bceb0"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-skin-tone-dark-skin-tone.png",
    "revision": "dcf4bb395f154070398bbfd2bd05aa43"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-skin-tone-light-skin-tone.png",
    "revision": "47b838f7bddcc603f4042272dfcabef3"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "9676fa141e13049093bab5af78cf9a6f"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "222cb30c41fefa6288e628e9560367d0"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man-medium-skin-tone.png",
    "revision": "ea3f3ac3fb09b662b4c5b80202a18f39"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-man.png",
    "revision": "01b0fa96731608326bb907b2263a3ae5"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-medium-dark-skin-tone-man-no-skin-tone.png",
    "revision": "53b0dbddcc118d694143519dc04ed9ab"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-medium-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "935dd365f073f2ec4d5994da857eddc7"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-medium-light-skin-tone-man-no-skin-tone.png",
    "revision": "91e1e02fce56a485c1e0d9a5a712a452"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-medium-light-skin-tone-woman-no-skin-tone.png",
    "revision": "9618c82ade1e979b806adf1b4b0d5741"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-medium-skin-tone-man-no-skin-tone.png",
    "revision": "5b21fd457a8af5ef58c0ae1d823c8bf7"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-medium-skin-tone-woman-no-skin-tone.png",
    "revision": "ea5f54b6ff7854b2b863e88125d1d19a"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-man-dark-skin-tone.png",
    "revision": "ad78243e223bc06e006227fc370f28ae"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-man-light-skin-tone.png",
    "revision": "1127e9956957d492adc39785672b3267"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-man-medium-dark-skin-tone.png",
    "revision": "d93372f9227dbc63a37f0a43740d9438"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-man-medium-light-skin-tone.png",
    "revision": "e0d3883acbcac68a76a05b35a638504c"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-man-medium-skin-tone.png",
    "revision": "5bdac3b5695e3b5974c87cce827b1abc"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-woman-dark-skin-tone.png",
    "revision": "e85e0819907a02e73abb5a5752627652"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-woman-light-skin-tone.png",
    "revision": "f0600abf97fea2c3d2afaecbc021e9aa"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "67e5660d56f5a413995157b7a26c9ed2"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "499b4568dd42be03eec210f61d31e91e"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-no-skin-tone-woman-medium-skin-tone.png",
    "revision": "f02e7dee9dcf4516f08a83c809fb1fe4"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone.png",
    "revision": "28fac5aa2c53b77b256721f976f369a5"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "92359d3072bcdb8fb024ccc47bb7660f"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "88590e028dea3a49612ed978bf1371f2"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-dark-skin-tone-medium-skin-tone.png",
    "revision": "0bfd4082fc28cd1dcd98c964a4517dfe"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-dark-skin-tone.png",
    "revision": "9ab1bfb20e6428d5daf8c2a295a27061"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-light-skin-tone-dark-skin-tone.png",
    "revision": "318ee6c44237167fe0a432658f4f5ce5"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "5bbd11499b78c6d2afbbfa3f51c4b4fe"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-light-skin-tone-medium-light-skin-tone.png",
    "revision": "dca7804e990d6f0355efe35c88c07bfd"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-light-skin-tone-medium-skin-tone.png",
    "revision": "1fcc01954e4c517c9cf9228d22297a40"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-light-skin-tone.png",
    "revision": "cbae94237491eaa454cd03178d1d44a0"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "8bf40de008d154bb05c3965b0418a563"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "571e476974660a65cd9571d54018c55c"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "b2d720fa8c750eb2b6eb243929ed845a"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "872c4ca5febb0ef1dd31e518f4c02e3f"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-dark-skin-tone.png",
    "revision": "b88533633914d6d79631798c977090b0"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "6a023b408ef22bdaae3ba0949ef71f16"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-light-skin-tone-light-skin-tone.png",
    "revision": "136c07444309b258d36c18c1616f80ec"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "d203849b4441606e34ba28d18b1b60ea"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "abefc50741e9a6dbbca8c32326a8aa24"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-light-skin-tone.png",
    "revision": "d83ab5b1f03b5001216910c0cd5ba8a6"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-skin-tone-dark-skin-tone.png",
    "revision": "d7bdf8580e660aee493a7cbae27c0d78"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-skin-tone-light-skin-tone.png",
    "revision": "d4c5a90f1e207a08c95d98434b3a7d7d"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "c4ec481caa4206d2bebf42cad3f28e3d"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "1d9d87af47cf853de72d966ead348909"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman-medium-skin-tone.png",
    "revision": "a7a8b46293f30b3ca730c33f0821bf58"
  },
  {
    "url": "emoji/120/couple-with-heart-woman-woman.png",
    "revision": "7e22f02867fbd5efd32412310d7b8cc4"
  },
  {
    "url": "emoji/120/couple-with-heart.png",
    "revision": "817307ac76440d4699bfbb481fb270d4"
  },
  {
    "url": "emoji/120/cow-face.png",
    "revision": "07e50ffd44d6c0dd35de83b4865625e0"
  },
  {
    "url": "emoji/120/cow.png",
    "revision": "d1ba3d2bc8aebeae7d4aa4fa4b5f1977"
  },
  {
    "url": "emoji/120/cowboy-hat-face.png",
    "revision": "c201021930f215222dfece9134d96d47"
  },
  {
    "url": "emoji/120/crab.png",
    "revision": "04d3e2fc21d0217244a9a56c5575fef2"
  },
  {
    "url": "emoji/120/crayon.png",
    "revision": "2c9d54dce6512785199fa5dc45665e60"
  },
  {
    "url": "emoji/120/credit-card.png",
    "revision": "351095a98c0ed3e826219656d3359408"
  },
  {
    "url": "emoji/120/crescent-moon.png",
    "revision": "4bb7dbddf7bdb33ce6802241fbae89a9"
  },
  {
    "url": "emoji/120/cricket-game.png",
    "revision": "062dc86ca9942a01a495d8764a4b6c8b"
  },
  {
    "url": "emoji/120/cricket.png",
    "revision": "4732625d6ea48e5bdb1daccd2cafbe54"
  },
  {
    "url": "emoji/120/crocodile.png",
    "revision": "c8b44ca017a67a11ae9e01756a6cf999"
  },
  {
    "url": "emoji/120/croissant.png",
    "revision": "39fe7433370f694c568c9154e6751ff7"
  },
  {
    "url": "emoji/120/cross-mark-button.png",
    "revision": "7a52c5d7a6a88359c1ff83fd72f980db"
  },
  {
    "url": "emoji/120/cross-mark.png",
    "revision": "e5e6173ec0dfc34ccb7c7f569d82201a"
  },
  {
    "url": "emoji/120/crossed-fingers-dark-skin-tone.png",
    "revision": "e78c703b99cc191edf8f91af44f62d62"
  },
  {
    "url": "emoji/120/crossed-fingers-light-skin-tone.png",
    "revision": "c4e41ad7ed5b3b267a7579912c132496"
  },
  {
    "url": "emoji/120/crossed-fingers-medium-dark-skin-tone.png",
    "revision": "a6c587ac370889417b568f329905d440"
  },
  {
    "url": "emoji/120/crossed-fingers-medium-light-skin-tone.png",
    "revision": "579f700793cc4ba300d2c8c77ac82c56"
  },
  {
    "url": "emoji/120/crossed-fingers-medium-skin-tone.png",
    "revision": "eb9c9fe42f064d1646392c4f278364b6"
  },
  {
    "url": "emoji/120/crossed-fingers.png",
    "revision": "13f72e44bee4eeaabfeac48de833aa05"
  },
  {
    "url": "emoji/120/crossed-flags.png",
    "revision": "ed48fae3f11b31e92f4f885ac9b3cb4b"
  },
  {
    "url": "emoji/120/crossed-swords.png",
    "revision": "fc60bd152cc714b6e95d10f4a2a5c791"
  },
  {
    "url": "emoji/120/crown.png",
    "revision": "4b6e1d16f8c1b987760def15a38bd745"
  },
  {
    "url": "emoji/120/crying-cat.png",
    "revision": "ff061685d17930f9e56282f0e250f348"
  },
  {
    "url": "emoji/120/crying-face.png",
    "revision": "f974a94632413d24c9e11814d911eb13"
  },
  {
    "url": "emoji/120/crystal-ball.png",
    "revision": "73d376a18577b3a19419408c92df19ab"
  },
  {
    "url": "emoji/120/cucumber.png",
    "revision": "9221f989f6fd38ea8284e576d925bcef"
  },
  {
    "url": "emoji/120/cup-with-straw.png",
    "revision": "84428b9c84c90b515e77f4ba19af048b"
  },
  {
    "url": "emoji/120/cupcake.png",
    "revision": "ab516c661413ac3e1a607ef2ca8180e8"
  },
  {
    "url": "emoji/120/curling-stone.png",
    "revision": "ad57cb0515e7f72026f4f0e6fb0571e4"
  },
  {
    "url": "emoji/120/curly-hair.png",
    "revision": "d1fc0e6bb0020aaf829dd59ea2e9a3bd"
  },
  {
    "url": "emoji/120/curly-loop.png",
    "revision": "3292119da9a5db58817ad6d7e6b63fde"
  },
  {
    "url": "emoji/120/currency-exchange.png",
    "revision": "e0f89572d79ddefd21ae4bef99f14ca8"
  },
  {
    "url": "emoji/120/curry-rice.png",
    "revision": "94a4245c20386ad216e408fade5af8c8"
  },
  {
    "url": "emoji/120/custard.png",
    "revision": "eea1fd5c284b2ddfbbb00037a7c6a19f"
  },
  {
    "url": "emoji/120/customs.png",
    "revision": "6546eaa72144fcce5cc517921fa3a1fa"
  },
  {
    "url": "emoji/120/cut-of-meat.png",
    "revision": "6cd181ae6c086646170b179233488e78"
  },
  {
    "url": "emoji/120/cyclone.png",
    "revision": "fc403e1de366823e0b6d2f509c11a654"
  },
  {
    "url": "emoji/120/dagger.png",
    "revision": "8cb8723981b6ce5c215ffc9d0236aaf1"
  },
  {
    "url": "emoji/120/dango.png",
    "revision": "599d078c15abaf40305aa1cac03de19d"
  },
  {
    "url": "emoji/120/dark-skin-tone.png",
    "revision": "bd05f5e0783e3c9c5ff5fa32e2a15694"
  },
  {
    "url": "emoji/120/dashing-away.png",
    "revision": "91d82f627605a2508b04fe25d324b559"
  },
  {
    "url": "emoji/120/deaf-man-dark-skin-tone.png",
    "revision": "29a151b64250116a57e2e615f3eef372"
  },
  {
    "url": "emoji/120/deaf-man-light-skin-tone.png",
    "revision": "aee7bbd1da8c39e43ed267bca5bd762e"
  },
  {
    "url": "emoji/120/deaf-man-medium-dark-skin-tone.png",
    "revision": "0a3b33806bf5272fb92672b9805ff27d"
  },
  {
    "url": "emoji/120/deaf-man-medium-light-skin-tone.png",
    "revision": "a36c32551c887fe55c0fa0e16b868284"
  },
  {
    "url": "emoji/120/deaf-man-medium-skin-tone.png",
    "revision": "b41c57664a3d90ea35fa3778246d23d6"
  },
  {
    "url": "emoji/120/deaf-man.png",
    "revision": "436f99246dc11b158ee1a83399d8a171"
  },
  {
    "url": "emoji/120/deaf-person-dark-skin-tone.png",
    "revision": "539cf7f2d18cf51f427041def5ac53c6"
  },
  {
    "url": "emoji/120/deaf-person-light-skin-tone.png",
    "revision": "c37288ca0356d37a1346cda44e2bdac6"
  },
  {
    "url": "emoji/120/deaf-person-medium-dark-skin-tone.png",
    "revision": "3f6a1a8da635cc52c80e9a6a37d15ba1"
  },
  {
    "url": "emoji/120/deaf-person-medium-light-skin-tone.png",
    "revision": "88afc5f88e082811d96c29574461801b"
  },
  {
    "url": "emoji/120/deaf-person-medium-skin-tone.png",
    "revision": "117fcaea6f45bb5a745fd7349d8492c3"
  },
  {
    "url": "emoji/120/deaf-person.png",
    "revision": "9e694eec174e6f24866191209c716499"
  },
  {
    "url": "emoji/120/deaf-woman-dark-skin-tone.png",
    "revision": "7f11d1d8e3e6df2e29c7dbbe674662e4"
  },
  {
    "url": "emoji/120/deaf-woman-light-skin-tone.png",
    "revision": "a27d8015d4d1d28efc3acba76e9a35cc"
  },
  {
    "url": "emoji/120/deaf-woman-medium-dark-skin-tone.png",
    "revision": "6394c4cb58dbf5aa02df857b8de1dbbd"
  },
  {
    "url": "emoji/120/deaf-woman-medium-light-skin-tone.png",
    "revision": "b5d7669a6a6efb3a37e7438b651f4410"
  },
  {
    "url": "emoji/120/deaf-woman-medium-skin-tone.png",
    "revision": "1d07dcf7e1d24e6ef239ffe07d10da51"
  },
  {
    "url": "emoji/120/deaf-woman.png",
    "revision": "be05da6bec80b5b35789b898e061900a"
  },
  {
    "url": "emoji/120/deciduous-tree.png",
    "revision": "117000422b51d69b5dad2fe50d5bb2d8"
  },
  {
    "url": "emoji/120/deer.png",
    "revision": "2f95c2a86393656d7d0bbf706bee84f7"
  },
  {
    "url": "emoji/120/delivery-truck.png",
    "revision": "cd2acde46c087588d3f6a74dc7260d0d"
  },
  {
    "url": "emoji/120/department-store.png",
    "revision": "bda2757567c2e8147a490948f012a490"
  },
  {
    "url": "emoji/120/derelict-house.png",
    "revision": "849167ed5ca60b7ab9a0c66db5a4a3d5"
  },
  {
    "url": "emoji/120/desert-island.png",
    "revision": "df8d9a93c7dc539ea0aab4eeefc848d2"
  },
  {
    "url": "emoji/120/desert.png",
    "revision": "8126f23448e95d234ace9696c7b2803d"
  },
  {
    "url": "emoji/120/desktop-computer.png",
    "revision": "2548bf272b360d685a3d1f9cff706fa6"
  },
  {
    "url": "emoji/120/detective-dark-skin-tone.png",
    "revision": "3ebe65b08b74f2f7c7391212a8bfc420"
  },
  {
    "url": "emoji/120/detective-light-skin-tone.png",
    "revision": "ecc36ec672e59d47c844f1beb5e8229f"
  },
  {
    "url": "emoji/120/detective-medium-dark-skin-tone.png",
    "revision": "f10e082037103628ba36959cc4e6d6c9"
  },
  {
    "url": "emoji/120/detective-medium-light-skin-tone.png",
    "revision": "9779f99b11e4ea78dc1a9c23ac6022ea"
  },
  {
    "url": "emoji/120/detective-medium-skin-tone.png",
    "revision": "7190f60e103685b16da88c7db917b66d"
  },
  {
    "url": "emoji/120/detective.png",
    "revision": "2e2e9e6d6a7038cd4d8c8900de75fa1e"
  },
  {
    "url": "emoji/120/diamond-suit.png",
    "revision": "e9bcd581eba490eac12db3443809cff7"
  },
  {
    "url": "emoji/120/diamond-with-a-dot.png",
    "revision": "684952e903d17b3c21230bcce6783303"
  },
  {
    "url": "emoji/120/dim-button.png",
    "revision": "bf945bd0d3c4636ee6b2159457af54f6"
  },
  {
    "url": "emoji/120/dino-cat.png",
    "revision": "3502e0e388aa7576d16864cc7ef31da2"
  },
  {
    "url": "emoji/120/direct-hit.png",
    "revision": "d5a4144d27a7ce811987a13d17377e04"
  },
  {
    "url": "emoji/120/disappointed-face.png",
    "revision": "e038d9f985b5a1407d89dfdef3982efd"
  },
  {
    "url": "emoji/120/divide.png",
    "revision": "167ae2beae845ecc1c4ef3bbab6f0dab"
  },
  {
    "url": "emoji/120/diving-mask.png",
    "revision": "7e826fd39294ae0916cc43fe850c6e60"
  },
  {
    "url": "emoji/120/diya-lamp.png",
    "revision": "cf625933ccaf7531e8cf6fcfd34eb5a5"
  },
  {
    "url": "emoji/120/dizzy-face.png",
    "revision": "10b40f5d4165bd28b6aa93a5f2c50474"
  },
  {
    "url": "emoji/120/dizzy.png",
    "revision": "9bb38a544d0bfcf11bd15aec2813fff6"
  },
  {
    "url": "emoji/120/dna.png",
    "revision": "05a49285f0027613ee443b2df9fc1b50"
  },
  {
    "url": "emoji/120/dog-face.png",
    "revision": "c1cc4cf42d16a3ad929f4b066585e085"
  },
  {
    "url": "emoji/120/dog.png",
    "revision": "fbc3dd7a1c779962909522ccc6b51a31"
  },
  {
    "url": "emoji/120/dollar-banknote.png",
    "revision": "5faa5b62f5b316591d7184180ad74853"
  },
  {
    "url": "emoji/120/dolphin.png",
    "revision": "acb574908d4ad5a78a77cdedc369e779"
  },
  {
    "url": "emoji/120/door.png",
    "revision": "2803b0bd6238b0ed4bda45fbaeeab60b"
  },
  {
    "url": "emoji/120/dotted-six-pointed-star.png",
    "revision": "d4ef21ce0801258e13fb85aa515193c3"
  },
  {
    "url": "emoji/120/double-curly-loop.png",
    "revision": "a73bced2c98e219c6ca7cc27a47262fc"
  },
  {
    "url": "emoji/120/double-exclamation-mark.png",
    "revision": "2efce2f568722307e1cb8eb861bba315"
  },
  {
    "url": "emoji/120/doughnut.png",
    "revision": "c34cd747b39f3eb3de9eb2718ffdd849"
  },
  {
    "url": "emoji/120/dove.png",
    "revision": "1f6b94f57f1b51b7c443737d3f66a016"
  },
  {
    "url": "emoji/120/down-arrow.png",
    "revision": "136b7e0de0944441503bdbcce9b4d44c"
  },
  {
    "url": "emoji/120/down-left-arrow.png",
    "revision": "6f74203be907587459724f546ed0e184"
  },
  {
    "url": "emoji/120/down-right-arrow.png",
    "revision": "5fe7ef19d4286c1c47d89d6e15240323"
  },
  {
    "url": "emoji/120/downcast-face-with-sweat.png",
    "revision": "151db9b3e5a5b0f5af6f7974a5d46b2b"
  },
  {
    "url": "emoji/120/downwards-button.png",
    "revision": "4ce23b2f17dc1d624fb5791fc3cefb1b"
  },
  {
    "url": "emoji/120/dragon-face.png",
    "revision": "9df4fa2049329680cb11289c427ae0cc"
  },
  {
    "url": "emoji/120/dragon.png",
    "revision": "a824049781ae4ab57a2f63dfbf5b859f"
  },
  {
    "url": "emoji/120/dress.png",
    "revision": "15e772805174eb49199996c06614fcff"
  },
  {
    "url": "emoji/120/drooling-face.png",
    "revision": "7f9032ca3433249a040277d0e8bcb1b7"
  },
  {
    "url": "emoji/120/drop-of-blood.png",
    "revision": "0fd59682fda0b3168c9719e576cbd505"
  },
  {
    "url": "emoji/120/droplet.png",
    "revision": "c55d13a553e2309d9dc0c84aaa00adfc"
  },
  {
    "url": "emoji/120/drum.png",
    "revision": "c9230b0eeca54ee29a71f325b2238497"
  },
  {
    "url": "emoji/120/duck.png",
    "revision": "5e17db0d6886edc8264791700d2d558a"
  },
  {
    "url": "emoji/120/dumpling.png",
    "revision": "2ca8c75e5d91ed636ccac8a840c4e840"
  },
  {
    "url": "emoji/120/dvd.png",
    "revision": "1ca57c97504a11dd60c10b178f47b3b1"
  },
  {
    "url": "emoji/120/e-mail.png",
    "revision": "cfe0fb86e56e487eb6bb7e31811afc72"
  },
  {
    "url": "emoji/120/eagle.png",
    "revision": "d0f77550fff9886187f25cf3cb489f1e"
  },
  {
    "url": "emoji/120/ear-dark-skin-tone.png",
    "revision": "1c581e0808a8a24eed48b902d33a8352"
  },
  {
    "url": "emoji/120/ear-light-skin-tone.png",
    "revision": "b5e81882315952aa3bc306c1666600aa"
  },
  {
    "url": "emoji/120/ear-medium-dark-skin-tone.png",
    "revision": "f78f8a7031c95c9a7328816345d7927d"
  },
  {
    "url": "emoji/120/ear-medium-light-skin-tone.png",
    "revision": "8b671d69e36abef3b50dbd709c0b1826"
  },
  {
    "url": "emoji/120/ear-medium-skin-tone.png",
    "revision": "ee9575d4bf05ee29eed5946d03793593"
  },
  {
    "url": "emoji/120/ear-of-corn.png",
    "revision": "bf769e0ff1b4e00812b9ec8fa97146c2"
  },
  {
    "url": "emoji/120/ear-with-hearing-aid-dark-skin-tone.png",
    "revision": "84cbd03af52bfb072d6f5e1fc71d3b67"
  },
  {
    "url": "emoji/120/ear-with-hearing-aid-light-skin-tone.png",
    "revision": "0363188bf1078d77a6077218ac1091e0"
  },
  {
    "url": "emoji/120/ear-with-hearing-aid-medium-dark-skin-tone.png",
    "revision": "9dda4c5db4420b81e0517312d16a9326"
  },
  {
    "url": "emoji/120/ear-with-hearing-aid-medium-light-skin-tone.png",
    "revision": "bad9340f7db528463abf62e06b94f649"
  },
  {
    "url": "emoji/120/ear-with-hearing-aid-medium-skin-tone.png",
    "revision": "08864f3ab42005f67339cd6b0c64f96c"
  },
  {
    "url": "emoji/120/ear-with-hearing-aid.png",
    "revision": "4c5d70c5e592a11f8e0bd711294596ea"
  },
  {
    "url": "emoji/120/ear.png",
    "revision": "87089a12dbd81d3f6d950eaa9779eff3"
  },
  {
    "url": "emoji/120/egg.png",
    "revision": "c8b40df7f00b3e99c1b1942c7d43f26d"
  },
  {
    "url": "emoji/120/eggplant.png",
    "revision": "f4656329427434ea1c181f33c5fd30f8"
  },
  {
    "url": "emoji/120/eight-oclock.png",
    "revision": "47f6c9746c2d30a7d891165326eec33f"
  },
  {
    "url": "emoji/120/eight-pointed-star.png",
    "revision": "e9d9afe34b82817e5e88bdc035a1325e"
  },
  {
    "url": "emoji/120/eight-spoked-asterisk.png",
    "revision": "d75a278b66c160e5e5f724e7e7e3241b"
  },
  {
    "url": "emoji/120/eight-thirty.png",
    "revision": "ec6ae0c342c10b90230059998b3a2271"
  },
  {
    "url": "emoji/120/eject-button.png",
    "revision": "cb23190ff8eb68a0355380d0daa27bca"
  },
  {
    "url": "emoji/120/electric-plug.png",
    "revision": "dc3259dff827191534ffe3b6353382dc"
  },
  {
    "url": "emoji/120/elephant.png",
    "revision": "d5a6af80d889a54406f7f5aa56466b6a"
  },
  {
    "url": "emoji/120/eleven-oclock.png",
    "revision": "0e2cb0e3ab88bfa1391ee7403ba98968"
  },
  {
    "url": "emoji/120/eleven-thirty.png",
    "revision": "c128103985f2e75e7d3b241eed82ad47"
  },
  {
    "url": "emoji/120/elf-dark-skin-tone.png",
    "revision": "83c37293b8bee3322cd6734c6d08c704"
  },
  {
    "url": "emoji/120/elf-light-skin-tone.png",
    "revision": "50d1ed66e0340754bab250ec8d4fe292"
  },
  {
    "url": "emoji/120/elf-medium-dark-skin-tone.png",
    "revision": "7eab1f4f689202a64e546c016cbd1711"
  },
  {
    "url": "emoji/120/elf-medium-light-skin-tone.png",
    "revision": "d6c0a46aee791720c4de67b852d046cb"
  },
  {
    "url": "emoji/120/elf-medium-skin-tone.png",
    "revision": "d2a2448b630874ae32bedf73a6ff560f"
  },
  {
    "url": "emoji/120/elf.png",
    "revision": "78996ce4a114b1e2c31a46fc01d7fea1"
  },
  {
    "url": "emoji/120/end-arrow.png",
    "revision": "33cc70647a8c8a0f8a7207b897e10931"
  },
  {
    "url": "emoji/120/envelope-with-arrow.png",
    "revision": "815c6b11be100121f2f54f36b8896f32"
  },
  {
    "url": "emoji/120/envelope.png",
    "revision": "038ddaeb4be92af86d6ba5dabbab3542"
  },
  {
    "url": "emoji/120/euro-banknote.png",
    "revision": "2a87ab13228a069e64bcd1eb45b51325"
  },
  {
    "url": "emoji/120/evergreen-tree.png",
    "revision": "fb03a56a8d2fb3d4888feaa70ac5c8b0"
  },
  {
    "url": "emoji/120/ewe.png",
    "revision": "e371a49764bfafd0cc63820271f27da4"
  },
  {
    "url": "emoji/120/exclamation-mark.png",
    "revision": "fddc8012a3a96785499ac1584e56df15"
  },
  {
    "url": "emoji/120/exclamation-question-mark.png",
    "revision": "14a2f5ef264da2601780c0c2e4ee2c0a"
  },
  {
    "url": "emoji/120/exploding-head.png",
    "revision": "7489a467b62483660b4e1b9821673b96"
  },
  {
    "url": "emoji/120/expressionless-face.png",
    "revision": "475f7133276de205ad16d1110d0b0831"
  },
  {
    "url": "emoji/120/eye-in-speech-bubble.png",
    "revision": "1ea25ddddad12d1466d292ca6c49c959"
  },
  {
    "url": "emoji/120/eye.png",
    "revision": "92aa3ae33d459fe06480ed65c0a4e29c"
  },
  {
    "url": "emoji/120/eyes.png",
    "revision": "3deeed3da493dd10d5cc18c181580cc0"
  },
  {
    "url": "emoji/120/face-blowing-a-kiss.png",
    "revision": "111f552e445c2d80de8213f9abd71c06"
  },
  {
    "url": "emoji/120/face-savoring-food.png",
    "revision": "39991f636c13abc148a5037715543df1"
  },
  {
    "url": "emoji/120/face-screaming-in-fear.png",
    "revision": "d261672259be2a55dd1afb86d51d41cc"
  },
  {
    "url": "emoji/120/face-vomiting.png",
    "revision": "41994bcc40db38028be35e10090fb69c"
  },
  {
    "url": "emoji/120/face-with-hand-over-mouth.png",
    "revision": "657aed828eebade623807f6ed7e0a5f5"
  },
  {
    "url": "emoji/120/face-with-head-bandage.png",
    "revision": "6d8b41db50a975704cab18b7cee0a13e"
  },
  {
    "url": "emoji/120/face-with-medical-mask.png",
    "revision": "c54b1fb67bc9cb505419b3a4865ad65b"
  },
  {
    "url": "emoji/120/face-with-monocle.png",
    "revision": "73a462df0d80c0a2a0eb636c9192ce59"
  },
  {
    "url": "emoji/120/face-with-open-mouth.png",
    "revision": "85357c09ce597e22991a6ad69f71762f"
  },
  {
    "url": "emoji/120/face-with-raised-eyebrow.png",
    "revision": "4688f48b6c4ec17048aaaee0ea29fc5d"
  },
  {
    "url": "emoji/120/face-with-rolling-eyes.png",
    "revision": "0f7e37c8d6074f397a264acb6cde54e1"
  },
  {
    "url": "emoji/120/face-with-steam-from-nose.png",
    "revision": "3363cee0793c0a9a16fd1991db30e5bd"
  },
  {
    "url": "emoji/120/face-with-symbols-on-mouth.png",
    "revision": "6a7d204285f2349f4c9a8ff6768c1bba"
  },
  {
    "url": "emoji/120/face-with-tears-of-joy.png",
    "revision": "c9d064f9a2652259f9a9fc62be74a4cc"
  },
  {
    "url": "emoji/120/face-with-thermometer.png",
    "revision": "86a3346d5fd84736db7583445156d500"
  },
  {
    "url": "emoji/120/face-with-tongue.png",
    "revision": "632a4ba03f4b4d692c9f63da7e39a28f"
  },
  {
    "url": "emoji/120/face-without-mouth.png",
    "revision": "0bbde52b02f9239f3ba36f296a3ff789"
  },
  {
    "url": "emoji/120/factory.png",
    "revision": "6fc96c3132c57f7e5a1d10f6636f708a"
  },
  {
    "url": "emoji/120/fairy-dark-skin-tone.png",
    "revision": "84aa210d9c600b3bb7d09d51c32d73c0"
  },
  {
    "url": "emoji/120/fairy-light-skin-tone.png",
    "revision": "3868af81d8832a49f0a6d697e22dccc8"
  },
  {
    "url": "emoji/120/fairy-medium-dark-skin-tone.png",
    "revision": "e764212c80dac37651c8aa0bd352ea19"
  },
  {
    "url": "emoji/120/fairy-medium-light-skin-tone.png",
    "revision": "d3f948e55d740596785527492bbd2290"
  },
  {
    "url": "emoji/120/fairy-medium-skin-tone.png",
    "revision": "8a48f001ed93f4c6f6c6f3241377b64c"
  },
  {
    "url": "emoji/120/fairy.png",
    "revision": "603620f0aa6c6eb3cb11ec63920d6b00"
  },
  {
    "url": "emoji/120/falafel.png",
    "revision": "d2677acb28c59e12b3c09aa63036da92"
  },
  {
    "url": "emoji/120/fallen-leaf.png",
    "revision": "ff6fd15e97f6a27b2567746518750b72"
  },
  {
    "url": "emoji/120/family-dark-skin-tone.png",
    "revision": "2be16598319355d69370d86e5b530c4a"
  },
  {
    "url": "emoji/120/family-light-skin-tone.png",
    "revision": "cc2d1a64c5311fab178ea32b752ee78a"
  },
  {
    "url": "emoji/120/family-man-baby-baby.png",
    "revision": "aa6185b8a359fe6230e3732f88a4ab65"
  },
  {
    "url": "emoji/120/family-man-baby-boy.png",
    "revision": "6cdaabfe5c24558cfb8de6275eb83e33"
  },
  {
    "url": "emoji/120/family-man-baby-girl.png",
    "revision": "38930e50d9ff237f07681facb3932ccd"
  },
  {
    "url": "emoji/120/family-man-baby.png",
    "revision": "7ae06236409a66c4b562e31019f0907c"
  },
  {
    "url": "emoji/120/family-man-boy-baby.png",
    "revision": "2cfcdab66678cb62b6794cadec1061bd"
  },
  {
    "url": "emoji/120/family-man-boy-boy.png",
    "revision": "4d0498495f38276f7285ef1d0c7d2cde"
  },
  {
    "url": "emoji/120/family-man-boy-girl.png",
    "revision": "fa7de46c80bb7c0d4eb8a1291ea41fd7"
  },
  {
    "url": "emoji/120/family-man-boy.png",
    "revision": "ca385244bd1de4e0de4df1d77da6d728"
  },
  {
    "url": "emoji/120/family-man-girl-baby.png",
    "revision": "85af7884bc7e666bd5087f3dcbd660f4"
  },
  {
    "url": "emoji/120/family-man-girl-boy.png",
    "revision": "3b7026871f881a61748efecbac633767"
  },
  {
    "url": "emoji/120/family-man-girl-girl.png",
    "revision": "c2798d10520e412c7bc146e7a62b8022"
  },
  {
    "url": "emoji/120/family-man-girl.png",
    "revision": "3ff8d597cad46220694a9e939e0985a6"
  },
  {
    "url": "emoji/120/family-man-man-baby-baby.png",
    "revision": "f076ecdef2c9dddc25172081fc88a208"
  },
  {
    "url": "emoji/120/family-man-man-baby-boy.png",
    "revision": "0a313bcd8224f93265cf0578a0c575f5"
  },
  {
    "url": "emoji/120/family-man-man-baby-girl.png",
    "revision": "ac1ee3aebc81b8829d12e5d52ad952c7"
  },
  {
    "url": "emoji/120/family-man-man-baby.png",
    "revision": "d7a87ab20fd37dacc4a4c9d84c30a004"
  },
  {
    "url": "emoji/120/family-man-man-boy-baby.png",
    "revision": "2f694a5bb37d3cb2b94ee215f3b96cf6"
  },
  {
    "url": "emoji/120/family-man-man-boy-boy.png",
    "revision": "7677b745004e4a7f468c22087725b8a0"
  },
  {
    "url": "emoji/120/family-man-man-boy-girl.png",
    "revision": "dc3c3c1befa1d103cfb232f4e704438c"
  },
  {
    "url": "emoji/120/family-man-man-boy.png",
    "revision": "e2f3ba552f3be6f790eee0245a4d4cd5"
  },
  {
    "url": "emoji/120/family-man-man-girl-baby.png",
    "revision": "9f385415c78ecec6e83dccf96924835c"
  },
  {
    "url": "emoji/120/family-man-man-girl-boy.png",
    "revision": "2a28d392c3041a60a0118753ddfe7007"
  },
  {
    "url": "emoji/120/family-man-man-girl-girl.png",
    "revision": "a8cbfb301f7eea4f29cd15beda4b1f38"
  },
  {
    "url": "emoji/120/family-man-man-girl.png",
    "revision": "2a2bcc8b0303d20e9f111c5c09cfc305"
  },
  {
    "url": "emoji/120/family-man-woman-baby-baby.png",
    "revision": "c10d300a64ad3f59fa18cfa88ab49ec6"
  },
  {
    "url": "emoji/120/family-man-woman-baby-boy.png",
    "revision": "0a56fed5d5a8cd05d4dbefa54cc7d6de"
  },
  {
    "url": "emoji/120/family-man-woman-baby-girl.png",
    "revision": "a97751d899fa30acc215f0085129bdd8"
  },
  {
    "url": "emoji/120/family-man-woman-baby.png",
    "revision": "a9c1d8c227dbd8458790b3011cfefc05"
  },
  {
    "url": "emoji/120/family-man-woman-boy-baby.png",
    "revision": "79da913b4041aa3950fb6d2408db4671"
  },
  {
    "url": "emoji/120/family-man-woman-boy-boy.png",
    "revision": "bd228a5ef157322b4c057631f8467ecc"
  },
  {
    "url": "emoji/120/family-man-woman-boy-girl.png",
    "revision": "7ed1a189e02bfbfc0e37882e0a1bd74c"
  },
  {
    "url": "emoji/120/family-man-woman-boy.png",
    "revision": "31733b5ba6dc63569951481c6f9176a6"
  },
  {
    "url": "emoji/120/family-man-woman-girl-baby.png",
    "revision": "3cf93cca7cced61d90a07e292037cb92"
  },
  {
    "url": "emoji/120/family-man-woman-girl-boy.png",
    "revision": "c49b9aae7090b46a386f4ab0c012d9af"
  },
  {
    "url": "emoji/120/family-man-woman-girl-girl.png",
    "revision": "7edc6c9bd0e08c3f436c95068848b07d"
  },
  {
    "url": "emoji/120/family-man-woman-girl.png",
    "revision": "84967d2f5207b236b5c1ad19745c383d"
  },
  {
    "url": "emoji/120/family-medium-dark-skin-tone.png",
    "revision": "e4badad8fbd7efbdb331cebb69e85e51"
  },
  {
    "url": "emoji/120/family-medium-light-skin-tone.png",
    "revision": "b10e2abd37b2d3e6edd6406e04d91d91"
  },
  {
    "url": "emoji/120/family-medium-skin-tone.png",
    "revision": "945b1e1af2fa50ac0d1bcab7adab6fc7"
  },
  {
    "url": "emoji/120/family-woman-baby-baby.png",
    "revision": "0e80190ec0ae889b04948fdef7744698"
  },
  {
    "url": "emoji/120/family-woman-baby-boy.png",
    "revision": "5991d5a25655628c5aabbc25dcc8eac8"
  },
  {
    "url": "emoji/120/family-woman-baby-girl.png",
    "revision": "f7abe43fdb4493165e9f5cd0c8e6f14e"
  },
  {
    "url": "emoji/120/family-woman-baby.png",
    "revision": "59db246415420b41ce6ec32fa94da129"
  },
  {
    "url": "emoji/120/family-woman-boy-baby.png",
    "revision": "46b2b7e0ef431614ab6039f126012f2e"
  },
  {
    "url": "emoji/120/family-woman-boy-boy.png",
    "revision": "431ade551ef9e0b375d165524649b740"
  },
  {
    "url": "emoji/120/family-woman-boy-girl.png",
    "revision": "fefc71ecedba8372ce380d5eb8bffe0a"
  },
  {
    "url": "emoji/120/family-woman-boy.png",
    "revision": "58a2d19a0622cdfb6a66eccd2887dd7c"
  },
  {
    "url": "emoji/120/family-woman-girl-baby.png",
    "revision": "d155e5ef235fd08132b513e48c58a58e"
  },
  {
    "url": "emoji/120/family-woman-girl-boy.png",
    "revision": "f16291bc7b9bbb486e510ac224ecff7f"
  },
  {
    "url": "emoji/120/family-woman-girl-girl.png",
    "revision": "fc84d3ada420c150e44577259b1d50c8"
  },
  {
    "url": "emoji/120/family-woman-girl.png",
    "revision": "ec96e03559486202c055fb8122e5f171"
  },
  {
    "url": "emoji/120/family-woman-man-baby-baby.png",
    "revision": "b4340de6704e57ca0b1312595e3bf61f"
  },
  {
    "url": "emoji/120/family-woman-man-baby-boy.png",
    "revision": "0483ad703bcf6b617d9d07a74148bd67"
  },
  {
    "url": "emoji/120/family-woman-man-baby-girl.png",
    "revision": "d193bc88953caaa5ce6175570968ed96"
  },
  {
    "url": "emoji/120/family-woman-man-baby.png",
    "revision": "3beba2dd21142965fddfe347d7830976"
  },
  {
    "url": "emoji/120/family-woman-man-boy-baby.png",
    "revision": "74300c197422a013fd5eb3101b8aaa47"
  },
  {
    "url": "emoji/120/family-woman-man-boy-boy.png",
    "revision": "ce1cd6c78dbc2b6cd322ca06655d1745"
  },
  {
    "url": "emoji/120/family-woman-man-boy-girl.png",
    "revision": "4129c9c6719a13d1b1c0c1390b5aab01"
  },
  {
    "url": "emoji/120/family-woman-man-boy.png",
    "revision": "bbdc78878f368d68ae69c95ad9b784bc"
  },
  {
    "url": "emoji/120/family-woman-man-girl-baby.png",
    "revision": "cd19956e01d9bc7d88d69439b8588e05"
  },
  {
    "url": "emoji/120/family-woman-man-girl-boy.png",
    "revision": "4017b03aab9c8e6d4fbfb51ed23d230b"
  },
  {
    "url": "emoji/120/family-woman-man-girl-girl.png",
    "revision": "8f7471015b19d5715355154bd0de3452"
  },
  {
    "url": "emoji/120/family-woman-man-girl.png",
    "revision": "7e11185cea5e38b423063115537e5c5d"
  },
  {
    "url": "emoji/120/family-woman-woman-baby-baby.png",
    "revision": "b5a474e91c54fc870b02c4de51239ff6"
  },
  {
    "url": "emoji/120/family-woman-woman-baby-boy.png",
    "revision": "5d6eb824cb7aa221e1626185c6f391f6"
  },
  {
    "url": "emoji/120/family-woman-woman-baby-girl.png",
    "revision": "c0c431cb59ccddfaaf59ebb86fedafaa"
  },
  {
    "url": "emoji/120/family-woman-woman-baby.png",
    "revision": "5db7f7d96e81241ac89bb5dcb314e0c1"
  },
  {
    "url": "emoji/120/family-woman-woman-boy-baby.png",
    "revision": "7d1aa4689d9354f9dc459d60bee97bc4"
  },
  {
    "url": "emoji/120/family-woman-woman-boy-boy.png",
    "revision": "965832a4e3465ebeb32fe610a69e7230"
  },
  {
    "url": "emoji/120/family-woman-woman-boy-girl.png",
    "revision": "780fbed89185058281d849f3601f986f"
  },
  {
    "url": "emoji/120/family-woman-woman-boy.png",
    "revision": "a317c875655244a92cb6c4239351805a"
  },
  {
    "url": "emoji/120/family-woman-woman-girl-baby.png",
    "revision": "86ba1f3c7a7870c53f844f2d2661f9c9"
  },
  {
    "url": "emoji/120/family-woman-woman-girl-boy.png",
    "revision": "e36995b8e50bebe89d0bff35fc844b9b"
  },
  {
    "url": "emoji/120/family-woman-woman-girl-girl.png",
    "revision": "26032ee8d1dcacac701c49a5e25e413a"
  },
  {
    "url": "emoji/120/family-woman-woman-girl.png",
    "revision": "1af1107da77744b91d700c368397f630"
  },
  {
    "url": "emoji/120/family.png",
    "revision": "1b52758d6c6636e3c95d8a674e8cedef"
  },
  {
    "url": "emoji/120/fast-down-button.png",
    "revision": "a159c053c127de4e9b3c6f5423924b84"
  },
  {
    "url": "emoji/120/fast-forward-button.png",
    "revision": "1fd729bbf77cb44dfd377658821cb23e"
  },
  {
    "url": "emoji/120/fast-reverse-button.png",
    "revision": "15b4083e92e9b9900f19b43140c9f345"
  },
  {
    "url": "emoji/120/fast-up-button.png",
    "revision": "47313c3a3f6fe4a2287f668bdce8484c"
  },
  {
    "url": "emoji/120/fax-machine.png",
    "revision": "a99e81c6f2dc4aab3fd8d051fa0983fa"
  },
  {
    "url": "emoji/120/fearful-face.png",
    "revision": "325fdb4d971e63cecde77a2c93dc5d91"
  },
  {
    "url": "emoji/120/female-sign.png",
    "revision": "07185aff869b9d5ccb339b8f682c2c03"
  },
  {
    "url": "emoji/120/ferris-wheel.png",
    "revision": "5c7fd3c3eadf85b0ea75bc1b47be89e2"
  },
  {
    "url": "emoji/120/ferry.png",
    "revision": "99dfee34f1a1e1def292ca84bfdd48ce"
  },
  {
    "url": "emoji/120/field-hockey.png",
    "revision": "24940631c1a10ebef02693098b6d87a8"
  },
  {
    "url": "emoji/120/file-cabinet.png",
    "revision": "6fd678895dd6f590d4dca3fe53c1b251"
  },
  {
    "url": "emoji/120/file-folder.png",
    "revision": "773391593a605b7ceb33fd2a3bfa0429"
  },
  {
    "url": "emoji/120/film-frames.png",
    "revision": "3437cb7b34b8fc8d39fd23cc7b6ea9fd"
  },
  {
    "url": "emoji/120/film-projector.png",
    "revision": "9b1f66cd56daae40e852ac0bd2ff5a99"
  },
  {
    "url": "emoji/120/fire-engine.png",
    "revision": "7a1038ce5bedb8cf93c3a7154bf4bbe0"
  },
  {
    "url": "emoji/120/fire-extinguisher.png",
    "revision": "82b51aa0c20ea709ff377de19ab7ef2d"
  },
  {
    "url": "emoji/120/fire.png",
    "revision": "b2d3d7a1d0a533ce3b01fcf8ff082843"
  },
  {
    "url": "emoji/120/firecracker.png",
    "revision": "deb063d73d0d780a1482d18da8fede45"
  },
  {
    "url": "emoji/120/fireworks.png",
    "revision": "083ff86aef37f53cf4464d8843a011b9"
  },
  {
    "url": "emoji/120/first-quarter-moon-face.png",
    "revision": "4065c667446972ceadbde3f0b1e4703d"
  },
  {
    "url": "emoji/120/first-quarter-moon.png",
    "revision": "a91436739a6d0f34dad13029b83769c7"
  },
  {
    "url": "emoji/120/fish-cake-with-swirl.png",
    "revision": "09a1af274848d607bb50f5b45bbec8de"
  },
  {
    "url": "emoji/120/fish.png",
    "revision": "d1653f01af9c97262bfa906f0216e456"
  },
  {
    "url": "emoji/120/fishing-pole.png",
    "revision": "4466ffbc3f2d3206d88d0431424a331d"
  },
  {
    "url": "emoji/120/five-oclock.png",
    "revision": "7712a9c9bfe1e10480c7ffa127431942"
  },
  {
    "url": "emoji/120/five-thirty.png",
    "revision": "1bc4df0ec8194e6874a8a9cbafafd06c"
  },
  {
    "url": "emoji/120/flag-in-hole.png",
    "revision": "4b82a46b265fe37ae43b8f47639d1180"
  },
  {
    "url": "emoji/120/flamingo.png",
    "revision": "6a64ec3d67c1dae6b29460d717d527c7"
  },
  {
    "url": "emoji/120/flashlight.png",
    "revision": "928bddcb65113e5e143488b8f1bce7b4"
  },
  {
    "url": "emoji/120/flat-shoe.png",
    "revision": "18106a23a4f05cce7eb8151ccb5d7e2c"
  },
  {
    "url": "emoji/120/fleur-de-lis.png",
    "revision": "5c5bdfea41c0df9863553faad3b42f96"
  },
  {
    "url": "emoji/120/flexed-biceps-dark-skin-tone.png",
    "revision": "a5f66870503fd50c96dcaf83d047b266"
  },
  {
    "url": "emoji/120/flexed-biceps-light-skin-tone.png",
    "revision": "b0e92360dddb773a5cca086df6b03540"
  },
  {
    "url": "emoji/120/flexed-biceps-medium-dark-skin-tone.png",
    "revision": "b1260794672f5f28f5dde1952bb17976"
  },
  {
    "url": "emoji/120/flexed-biceps-medium-light-skin-tone.png",
    "revision": "d6ab9e203b73428166e4028697afa719"
  },
  {
    "url": "emoji/120/flexed-biceps-medium-skin-tone.png",
    "revision": "e9f2075cee7e3dcfa1b724e629390b11"
  },
  {
    "url": "emoji/120/flexed-biceps.png",
    "revision": "ff3feb012883b0ada021ec0caa9a1a10"
  },
  {
    "url": "emoji/120/floppy-disk.png",
    "revision": "84871f2d563fa20791695e0d20a2e3df"
  },
  {
    "url": "emoji/120/flower-playing-cards.png",
    "revision": "cfb2d5fe3e80e53c91bed80ee69e165f"
  },
  {
    "url": "emoji/120/flushed-face.png",
    "revision": "e28a93c259c804a719c73c7fd7b8bcf4"
  },
  {
    "url": "emoji/120/flying-disc.png",
    "revision": "604fa84b5f64d17f4a64d2f682e8538b"
  },
  {
    "url": "emoji/120/flying-saucer.png",
    "revision": "69abe3d44df930d2857c52785f4e3a6c"
  },
  {
    "url": "emoji/120/fog.png",
    "revision": "1b982d5f6169ada736695c69b7af1517"
  },
  {
    "url": "emoji/120/foggy.png",
    "revision": "1b64d6cf4968d907c6d1dd658f7dcc5f"
  },
  {
    "url": "emoji/120/folded-hands-dark-skin-tone.png",
    "revision": "fd7fec8c8de44696cfb32a3ae041c81d"
  },
  {
    "url": "emoji/120/folded-hands-light-skin-tone.png",
    "revision": "7dc0ae0ecf9a6575a977aa66102721f4"
  },
  {
    "url": "emoji/120/folded-hands-medium-dark-skin-tone.png",
    "revision": "ef6e5efc306918315af9ea7ec08f18f0"
  },
  {
    "url": "emoji/120/folded-hands-medium-light-skin-tone.png",
    "revision": "16e083870fe6da6eda508ad3043d8062"
  },
  {
    "url": "emoji/120/folded-hands-medium-skin-tone.png",
    "revision": "99cd5843b995a2cc87b68eab6ffd2b80"
  },
  {
    "url": "emoji/120/folded-hands.png",
    "revision": "5a0cb02d91aef786655118e48c402b3b"
  },
  {
    "url": "emoji/120/foot-dark-skin-tone.png",
    "revision": "c4e563bd8c8c92216c07a608d41c8f0b"
  },
  {
    "url": "emoji/120/foot-light-skin-tone.png",
    "revision": "99f0b23cc1eb660e36134cd4f735e579"
  },
  {
    "url": "emoji/120/foot-medium-dark-skin-tone.png",
    "revision": "3d695487027409a680397f216e72ed21"
  },
  {
    "url": "emoji/120/foot-medium-light-skin-tone.png",
    "revision": "0c3b3c7061072bfea2b4dd090a4662d5"
  },
  {
    "url": "emoji/120/foot-medium-skin-tone.png",
    "revision": "6d29c6e762cbe53724e4fc3bdad09ed2"
  },
  {
    "url": "emoji/120/foot.png",
    "revision": "7fdff6a7d681124e97efe85bce224d56"
  },
  {
    "url": "emoji/120/footprints.png",
    "revision": "d5b87bc1d1358a43e1840b40dfc42099"
  },
  {
    "url": "emoji/120/fork-and-knife-with-plate.png",
    "revision": "7b2e358fe554416853bcafd292122638"
  },
  {
    "url": "emoji/120/fork-and-knife.png",
    "revision": "8fe8584a3b3b687c17193d4d58dd46c8"
  },
  {
    "url": "emoji/120/fortune-cookie.png",
    "revision": "e7a4e902d8045b05d77a6e27d3ca6f09"
  },
  {
    "url": "emoji/120/fountain-pen.png",
    "revision": "dce2d17e1c3308e82fec0786da4babd3"
  },
  {
    "url": "emoji/120/fountain.png",
    "revision": "5189193775d2fd4629cf8566ecc97e23"
  },
  {
    "url": "emoji/120/four-leaf-clover.png",
    "revision": "29863f22c15ce4d224c1295cb1fdbb19"
  },
  {
    "url": "emoji/120/four-oclock.png",
    "revision": "705ed07a3616e1feffd83464f42834fb"
  },
  {
    "url": "emoji/120/four-thirty.png",
    "revision": "b45dea16bb10fd63a46223486dbb1290"
  },
  {
    "url": "emoji/120/fox.png",
    "revision": "5821f74ac2a065997e1d2d71c8b87ecd"
  },
  {
    "url": "emoji/120/framed-picture.png",
    "revision": "08970190506ea6654d7ca004524531f4"
  },
  {
    "url": "emoji/120/free-button.png",
    "revision": "a5085239a84bc5886861e99186d4bd43"
  },
  {
    "url": "emoji/120/french-fries.png",
    "revision": "d7f079b802e0afb44648cbc6fa0dfd9c"
  },
  {
    "url": "emoji/120/fried-shrimp.png",
    "revision": "2380fb9689804438bd1f53fa960b84df"
  },
  {
    "url": "emoji/120/frog.png",
    "revision": "469e954b681acba7a06b39715606ca9d"
  },
  {
    "url": "emoji/120/front-facing-baby-chick.png",
    "revision": "3d50ee7218745cd8d49a9b1c1e554344"
  },
  {
    "url": "emoji/120/frowning-face-with-open-mouth.png",
    "revision": "a9fb4ed53f00e7799393cbe613458876"
  },
  {
    "url": "emoji/120/frowning-face.png",
    "revision": "993d8f3021e19ba773da855505adbfbc"
  },
  {
    "url": "emoji/120/fuel-pump.png",
    "revision": "6a7d62486b208d0ee8d7c9aa23a6af94"
  },
  {
    "url": "emoji/120/full-moon-face.png",
    "revision": "7d5ab9552195262c3df37008954069c9"
  },
  {
    "url": "emoji/120/full-moon.png",
    "revision": "8b8a9c5eb97e8df0def747509dd22c3f"
  },
  {
    "url": "emoji/120/funeral-urn.png",
    "revision": "d093dbefb329e057fd57099f802d30d4"
  },
  {
    "url": "emoji/120/game-die.png",
    "revision": "4a328db8034ec4bd3b02bef3b5d7aef9"
  },
  {
    "url": "emoji/120/garlic.png",
    "revision": "ab339095bb5c62efe0075db7ced4edd9"
  },
  {
    "url": "emoji/120/gear.png",
    "revision": "3d19c1e7a654535ca8e4683b24834159"
  },
  {
    "url": "emoji/120/gem-stone.png",
    "revision": "8853df6957b250e55fb168dd84ef1703"
  },
  {
    "url": "emoji/120/gemini.png",
    "revision": "d109c3cbac2d37c6089261404e58c46d"
  },
  {
    "url": "emoji/120/genie.png",
    "revision": "054c9f5c9636dc43c5f29fda30680f6e"
  },
  {
    "url": "emoji/120/ghost.png",
    "revision": "0dbd7919eeb6475a18bf0938df2b01d6"
  },
  {
    "url": "emoji/120/giraffe.png",
    "revision": "23b047338ae9603088d368a4e337773c"
  },
  {
    "url": "emoji/120/girl-dark-skin-tone.png",
    "revision": "50e0e4a9a3ee7f4198ee9568e8985931"
  },
  {
    "url": "emoji/120/girl-light-skin-tone.png",
    "revision": "98602b70011944df62158dd1fb33b49d"
  },
  {
    "url": "emoji/120/girl-medium-dark-skin-tone.png",
    "revision": "826254edd371896dcfa6de7cb74aef22"
  },
  {
    "url": "emoji/120/girl-medium-light-skin-tone.png",
    "revision": "9dc02dcecb327ccca012ffdc62118ed7"
  },
  {
    "url": "emoji/120/girl-medium-skin-tone.png",
    "revision": "b50678efeb9a07be9484327a657023f0"
  },
  {
    "url": "emoji/120/girl.png",
    "revision": "ac76d0738d2c32ba0ecc49e079f098ee"
  },
  {
    "url": "emoji/120/glass-of-milk.png",
    "revision": "ae287b404acfb9580443a5d417d97d34"
  },
  {
    "url": "emoji/120/glasses.png",
    "revision": "561ea7dcc722970b03fc919752afba65"
  },
  {
    "url": "emoji/120/globe-showing-americas.png",
    "revision": "7a4743efbd0e7eecb0b0ff1eb97f6291"
  },
  {
    "url": "emoji/120/globe-showing-asia-australia.png",
    "revision": "08fd9518b4141a9c18e5c2772c25a593"
  },
  {
    "url": "emoji/120/globe-showing-europe-africa.png",
    "revision": "aea9eb300cf96054e7af1db60ea1686d"
  },
  {
    "url": "emoji/120/globe-with-meridians.png",
    "revision": "3763d9325b4b1671e45ab937c97d4709"
  },
  {
    "url": "emoji/120/gloves.png",
    "revision": "15ab52361ff380aa6576184afe5e847d"
  },
  {
    "url": "emoji/120/glowing-star.png",
    "revision": "5f650574e5112f9566732774511c5063"
  },
  {
    "url": "emoji/120/goal-net.png",
    "revision": "dd1db38a7dca75e1efda934ec3cb213c"
  },
  {
    "url": "emoji/120/goat.png",
    "revision": "960c3efd099ccde36fa777b83f6e147a"
  },
  {
    "url": "emoji/120/goblin.png",
    "revision": "a923cc12de85d1aeb5128525e63742b0"
  },
  {
    "url": "emoji/120/goggles.png",
    "revision": "5ffe120c30d45091e9dd1f8d9398fdc8"
  },
  {
    "url": "emoji/120/gorilla.png",
    "revision": "18f625c24dca252950d662961d7d2853"
  },
  {
    "url": "emoji/120/graduation-cap.png",
    "revision": "943329d0de655c4d3e06168dfb7d2392"
  },
  {
    "url": "emoji/120/grapes.png",
    "revision": "7c65b5bbbe979a6bc23873bbb9d2fc34"
  },
  {
    "url": "emoji/120/green-apple.png",
    "revision": "9920657afb6b5860fdef81365cc92ff7"
  },
  {
    "url": "emoji/120/green-book.png",
    "revision": "99cff130306d52d64d50ed3f86ca2b31"
  },
  {
    "url": "emoji/120/green-heart.png",
    "revision": "b863c9a228d1170e281b84b83ea5862f"
  },
  {
    "url": "emoji/120/green-salad.png",
    "revision": "e43adb1b204903a7af916c36a99ddd89"
  },
  {
    "url": "emoji/120/grimacing-face.png",
    "revision": "42bb238d8a3f5398a57da4ae56a0a859"
  },
  {
    "url": "emoji/120/grinning-cat-with-smiling-eyes.png",
    "revision": "2621c7a5014c8dbeb130770182bbb230"
  },
  {
    "url": "emoji/120/grinning-cat.png",
    "revision": "7ec191e21ed47dc8f13c02a066c1cad7"
  },
  {
    "url": "emoji/120/grinning-face-with-big-eyes.png",
    "revision": "71f418964666a6ee36d6e1650e2555e6"
  },
  {
    "url": "emoji/120/grinning-face-with-smiling-eyes.png",
    "revision": "478956266bd1a9eb0cdeb2801914b364"
  },
  {
    "url": "emoji/120/grinning-face-with-sweat.png",
    "revision": "7824b8d7b5bcfff3ad416a6b7d8ff6ee"
  },
  {
    "url": "emoji/120/grinning-face.png",
    "revision": "6ca09c3de2cb3e05dc63a53725a33b87"
  },
  {
    "url": "emoji/120/grinning-squinting-face.png",
    "revision": "e177fcafd7e0af5b0a1e68ccd6ebb0db"
  },
  {
    "url": "emoji/120/growing-heart.png",
    "revision": "f50e249b572005b94f82d6d99221a5f7"
  },
  {
    "url": "emoji/120/guard-dark-skin-tone.png",
    "revision": "4fb4b77de4818b82249565eb8347d7a4"
  },
  {
    "url": "emoji/120/guard-light-skin-tone.png",
    "revision": "e4160009a02ed903d54a88595dcdd404"
  },
  {
    "url": "emoji/120/guard-medium-dark-skin-tone.png",
    "revision": "7e4db4b6ecbb625d84f8df55c75f11d7"
  },
  {
    "url": "emoji/120/guard-medium-light-skin-tone.png",
    "revision": "385dfac9a0b1b02cc926ab4b3c21fdfe"
  },
  {
    "url": "emoji/120/guard-medium-skin-tone.png",
    "revision": "a1d061b91ed4f19a5386bb726e65adcf"
  },
  {
    "url": "emoji/120/guard.png",
    "revision": "56615c22144f499e28a2b050f35429fc"
  },
  {
    "url": "emoji/120/guide-dog.png",
    "revision": "3210a3d23e35ee9892997683831f1c95"
  },
  {
    "url": "emoji/120/guitar.png",
    "revision": "3a901ca1625cd2ec12f9ecaabda34224"
  },
  {
    "url": "emoji/120/hacker-cat.png",
    "revision": "074bbb01a87f880fdc4e69e66477fc91"
  },
  {
    "url": "emoji/120/hamburger.png",
    "revision": "f312296e3d8f8fd6ae2dfc4927a4f5ff"
  },
  {
    "url": "emoji/120/hammer-and-pick.png",
    "revision": "0da7ba954c5361ffb74436c23939b5a1"
  },
  {
    "url": "emoji/120/hammer-and-wrench.png",
    "revision": "064cd9a9e4cd8c6cfccc0b8304910a43"
  },
  {
    "url": "emoji/120/hammer.png",
    "revision": "c6c1c597ecc308b9e90fbaf2a6b50e97"
  },
  {
    "url": "emoji/120/hamster.png",
    "revision": "1a4ab613ecd192f6a292f166f7b4f602"
  },
  {
    "url": "emoji/120/hand-with-fingers-splayed-dark-skin-tone.png",
    "revision": "22356bae304fa45018ec3e91d5754407"
  },
  {
    "url": "emoji/120/hand-with-fingers-splayed-light-skin-tone.png",
    "revision": "d79ddc31ab13aebacb272be8cd37d07b"
  },
  {
    "url": "emoji/120/hand-with-fingers-splayed-medium-dark-skin-tone.png",
    "revision": "cafaea5453f7d9c1c5cb04a9e6c396e7"
  },
  {
    "url": "emoji/120/hand-with-fingers-splayed-medium-light-skin-tone.png",
    "revision": "70d0c7f8e9b2c113e07d8eea5d39ece4"
  },
  {
    "url": "emoji/120/hand-with-fingers-splayed-medium-skin-tone.png",
    "revision": "39e4218d888121eaa6aac18bbfecc3f4"
  },
  {
    "url": "emoji/120/hand-with-fingers-splayed.png",
    "revision": "ea42fbe778955e68c4bdd09fff52a485"
  },
  {
    "url": "emoji/120/handbag.png",
    "revision": "b2e6bd3bde60cd0de218571a11cadbb8"
  },
  {
    "url": "emoji/120/handshake-dark-skin-tone.png",
    "revision": "eecbf79a220126832d0a70e66f2eeab6"
  },
  {
    "url": "emoji/120/handshake-light-skin-tone.png",
    "revision": "40f3f083f1fb040fd88db70c31f85899"
  },
  {
    "url": "emoji/120/handshake-medium-dark-skin-tone.png",
    "revision": "d4763e1deca86d0e5e3688f36be757c3"
  },
  {
    "url": "emoji/120/handshake-medium-light-skin-tone.png",
    "revision": "b76bee88febf6899b5cdabf263dae87e"
  },
  {
    "url": "emoji/120/handshake-medium-skin-tone.png",
    "revision": "b18b2b4cc870599412a0e4d666a8262c"
  },
  {
    "url": "emoji/120/handshake.png",
    "revision": "4f4a96b192f2a54c847463964ab7e10c"
  },
  {
    "url": "emoji/120/hatching-chick.png",
    "revision": "43bed499c593e9ae5a5e13d1f1c5cf99"
  },
  {
    "url": "emoji/120/headphone.png",
    "revision": "024fdfdab006609f0205142dacb0a7c7"
  },
  {
    "url": "emoji/120/hear-no-evil-monkey.png",
    "revision": "34e9209e8c4aa71c531532d113a3870d"
  },
  {
    "url": "emoji/120/heart-decoration.png",
    "revision": "b6771d09a94f87c83af7fa21a3546334"
  },
  {
    "url": "emoji/120/heart-exclamation.png",
    "revision": "98a9a75098ff581c7aacaad3021f7383"
  },
  {
    "url": "emoji/120/heart-suit.png",
    "revision": "011e58f022c939cf558368547fc1dbb1"
  },
  {
    "url": "emoji/120/heart-with-arrow.png",
    "revision": "1994bad363d19694d4ba51fca533505d"
  },
  {
    "url": "emoji/120/heart-with-ribbon.png",
    "revision": "a18159beb455fbfe483568fc9f083f62"
  },
  {
    "url": "emoji/120/heavy-dollar-sign.png",
    "revision": "154cf5946b5b0dbb3e627db2daf46386"
  },
  {
    "url": "emoji/120/hedgehog.png",
    "revision": "e9193213f41ac7cb90a2b0a776c643c8"
  },
  {
    "url": "emoji/120/helicopter.png",
    "revision": "744c1a8fa676d622162f05a839548d89"
  },
  {
    "url": "emoji/120/herb.png",
    "revision": "e323b6258330c66756bf4da5e925ca8a"
  },
  {
    "url": "emoji/120/hibiscus.png",
    "revision": "0df2ca3e60dc08fdff8aeb4bba526bae"
  },
  {
    "url": "emoji/120/high-heeled-shoe.png",
    "revision": "b79b6b18f6e74026b98c7c4269ef0448"
  },
  {
    "url": "emoji/120/high-speed-train.png",
    "revision": "a197db0753a6a66160ecb976cb68b987"
  },
  {
    "url": "emoji/120/high-voltage.png",
    "revision": "6772b9cbd06bf80be8c77c578b7333a2"
  },
  {
    "url": "emoji/120/hiking-boot.png",
    "revision": "b7208a3c4fd5729ca0c9076f59232305"
  },
  {
    "url": "emoji/120/hindu-temple.png",
    "revision": "5c8482b0115230ac7d0665e385eeaefe"
  },
  {
    "url": "emoji/120/hippopotamus.png",
    "revision": "5a8cd8f61d47cd35260ddffb0619d9ca"
  },
  {
    "url": "emoji/120/hipster-cat.png",
    "revision": "1bdc61c0d8e473992177d8a579e73e2a"
  },
  {
    "url": "emoji/120/hole.png",
    "revision": "be80259b63df6115ea1c204c0c2e6d61"
  },
  {
    "url": "emoji/120/hollow-red-circle.png",
    "revision": "fb79383d0080d6ac7c58f5958c568f25"
  },
  {
    "url": "emoji/120/honey-pot.png",
    "revision": "54cc0161c320d1b34218041e1fbb3478"
  },
  {
    "url": "emoji/120/honeybee.png",
    "revision": "4efb38548755a9955bdbcc4fa4fe8863"
  },
  {
    "url": "emoji/120/horizontal-traffic-light.png",
    "revision": "b509f9f22b592c837e66becfdafd542e"
  },
  {
    "url": "emoji/120/horse-face.png",
    "revision": "2fa5e44cbb96b219dd9a18901a68131e"
  },
  {
    "url": "emoji/120/horse-racing-dark-skin-tone.png",
    "revision": "8bfcd7f489fe73c1175969650fb38e8e"
  },
  {
    "url": "emoji/120/horse-racing-light-skin-tone.png",
    "revision": "3744a770d61c925e3cde2349086d7115"
  },
  {
    "url": "emoji/120/horse-racing-medium-dark-skin-tone.png",
    "revision": "f4fa50e8bcd1d852c780999ae7ecb8f5"
  },
  {
    "url": "emoji/120/horse-racing-medium-light-skin-tone.png",
    "revision": "d9fcbe3816699b5468c181cd23e27d99"
  },
  {
    "url": "emoji/120/horse-racing-medium-skin-tone.png",
    "revision": "28df69b4fd344291770d45f3ae46b183"
  },
  {
    "url": "emoji/120/horse-racing.png",
    "revision": "a986147a465a646512a1af035be716d2"
  },
  {
    "url": "emoji/120/horse.png",
    "revision": "ec210464de43239617c140b6a7dce286"
  },
  {
    "url": "emoji/120/hospital.png",
    "revision": "130759b25df35f72fd1a2f4b07052104"
  },
  {
    "url": "emoji/120/hot-beverage.png",
    "revision": "d137d02cf63ac4a5f45f9e2204465cdc"
  },
  {
    "url": "emoji/120/hot-dog.png",
    "revision": "e34d5cbb01ef72156364a29b38b707d9"
  },
  {
    "url": "emoji/120/hot-face.png",
    "revision": "6a2e0535a77591a4bbf58fd69f1f38c7"
  },
  {
    "url": "emoji/120/hot-pepper.png",
    "revision": "2810d77fa35fb6b831a99431f214eb46"
  },
  {
    "url": "emoji/120/hot-springs.png",
    "revision": "cad0d517195ca785f6312372c9cd1005"
  },
  {
    "url": "emoji/120/hotel.png",
    "revision": "f38b4c55820a23124c2ea01a9e878b73"
  },
  {
    "url": "emoji/120/hourglass-done.png",
    "revision": "0477d621a8a1242303303f7bffb92298"
  },
  {
    "url": "emoji/120/hourglass-not-done.png",
    "revision": "c367567ccb546f700143b4ecccbc2fe7"
  },
  {
    "url": "emoji/120/house-with-garden.png",
    "revision": "3096883e02369f1ffc1691b6bd9253ec"
  },
  {
    "url": "emoji/120/house.png",
    "revision": "2eb3e0e4f4c19aea2b2455f27ec800bd"
  },
  {
    "url": "emoji/120/houses.png",
    "revision": "debd4ef841ebf2b6dc56c31dac40308d"
  },
  {
    "url": "emoji/120/hugging-face.png",
    "revision": "34a3af999e0e0866e487e1b1b1d7b25f"
  },
  {
    "url": "emoji/120/hundred-points.png",
    "revision": "c15ba48666d63b0157e9547d07c11abc"
  },
  {
    "url": "emoji/120/hushed-face.png",
    "revision": "bab70c6f62025f654a2a154f970448f7"
  },
  {
    "url": "emoji/120/ice-cream.png",
    "revision": "daa45da9b14ce6ca7857621c82066159"
  },
  {
    "url": "emoji/120/ice-hockey.png",
    "revision": "10a162afd3b550bb774cc65b58a9f50c"
  },
  {
    "url": "emoji/120/ice-skate.png",
    "revision": "3b85bb963ac3184b88a1c914399c7f36"
  },
  {
    "url": "emoji/120/ice.png",
    "revision": "51bc3d397a317dd87563e1336f6fe18e"
  },
  {
    "url": "emoji/120/id-button.png",
    "revision": "fa6336e3409a56edfced8474bc018c73"
  },
  {
    "url": "emoji/120/inbox-tray.png",
    "revision": "aa0ffab781fb3cc3096fa9b7e6d03f3d"
  },
  {
    "url": "emoji/120/incoming-envelope.png",
    "revision": "83c0c6cee665a04d05cb534c94a09792"
  },
  {
    "url": "emoji/120/index-pointing-up-dark-skin-tone.png",
    "revision": "686bffbdd297675ab67383be4a3405ef"
  },
  {
    "url": "emoji/120/index-pointing-up-light-skin-tone.png",
    "revision": "acbe3fe3c3025e728a6bc3878240e2c3"
  },
  {
    "url": "emoji/120/index-pointing-up-medium-dark-skin-tone.png",
    "revision": "c21baa7624e77985e8fd49ccabb89a61"
  },
  {
    "url": "emoji/120/index-pointing-up-medium-light-skin-tone.png",
    "revision": "4b997b1a87c04b6f323bff4ea33ee382"
  },
  {
    "url": "emoji/120/index-pointing-up-medium-skin-tone.png",
    "revision": "7628e1ea3a8d033cb0f5ff5de9079015"
  },
  {
    "url": "emoji/120/index-pointing-up.png",
    "revision": "c5299e6a105ace369f09e40cec48b7fe"
  },
  {
    "url": "emoji/120/infinity.png",
    "revision": "1d3de1577374b70d6392423761c16643"
  },
  {
    "url": "emoji/120/information.png",
    "revision": "d1140c1d9f24f64aaf0833551ccda72a"
  },
  {
    "url": "emoji/120/input-latin-letters.png",
    "revision": "1f09b150d665bfa438d8cb446d4414ef"
  },
  {
    "url": "emoji/120/input-latin-lowercase.png",
    "revision": "de0df7a0c370fdf88ee90bd3ad7a1b62"
  },
  {
    "url": "emoji/120/input-latin-uppercase.png",
    "revision": "e798a60e5c90c57be2176a420deb686f"
  },
  {
    "url": "emoji/120/input-numbers.png",
    "revision": "6d0d1e9a58a12a03b676f55e9986be2a"
  },
  {
    "url": "emoji/120/input-symbols.png",
    "revision": "645086056c7f4e812ef4b4281ba489bf"
  },
  {
    "url": "emoji/120/jack-o-lantern.png",
    "revision": "307bebfc7a9c2f1529a157a9a8470570"
  },
  {
    "url": "emoji/120/japanese-acceptable-button.png",
    "revision": "4641c221604e1edbb3f7ca6f7d3c6903"
  },
  {
    "url": "emoji/120/japanese-application-button.png",
    "revision": "848ccc0c6f350217f10c653162161728"
  },
  {
    "url": "emoji/120/japanese-bargain-button.png",
    "revision": "0e8925a6bbac6e06c3fff9cd4370410d"
  },
  {
    "url": "emoji/120/japanese-castle.png",
    "revision": "ed6b099eb34cf12927bbbaad327782d8"
  },
  {
    "url": "emoji/120/japanese-congratulations-button.png",
    "revision": "cce71d428c04ae8529dda5cdd6f3fd31"
  },
  {
    "url": "emoji/120/japanese-discount-button.png",
    "revision": "364a3b4f9c42460e46376ba957b396ad"
  },
  {
    "url": "emoji/120/japanese-dolls.png",
    "revision": "2d6d95838295cb6136452ef0d3ed9977"
  },
  {
    "url": "emoji/120/japanese-free-of-charge-button.png",
    "revision": "0280ec82c3b9520b8bcd82c96870051b"
  },
  {
    "url": "emoji/120/japanese-here-button.png",
    "revision": "cefff3f05fa2a72f04b924cccb9fd7c7"
  },
  {
    "url": "emoji/120/japanese-monthly-amount-button.png",
    "revision": "fb185ca7ef74c72e0b0327d95194fb7e"
  },
  {
    "url": "emoji/120/japanese-no-vacancy-button.png",
    "revision": "67dadfab15e920c99ecb45d2cf6181ef"
  },
  {
    "url": "emoji/120/japanese-not-free-of-charge-button.png",
    "revision": "815cd3b86b0b69989b9ba0a2a8f73296"
  },
  {
    "url": "emoji/120/japanese-open-for-business-button.png",
    "revision": "4af2fcb46c166018177e34bc1cf0e6fb"
  },
  {
    "url": "emoji/120/japanese-passing-grade-button.png",
    "revision": "2119b525c42f2a3854034654fe9722aa"
  },
  {
    "url": "emoji/120/japanese-post-office.png",
    "revision": "824b44c554639fca33d59952af54f0ad"
  },
  {
    "url": "emoji/120/japanese-prohibited-button.png",
    "revision": "f1b4ee34303984fdf4614f474b221095"
  },
  {
    "url": "emoji/120/japanese-reserved-button.png",
    "revision": "50bb61271414b7f7fa77abe763c3fda6"
  },
  {
    "url": "emoji/120/japanese-secret-button.png",
    "revision": "13f6d33d60353454e57a7cb887044c4d"
  },
  {
    "url": "emoji/120/japanese-service-charge-button.png",
    "revision": "3ed4f1adb4f4da11bb3ae1bd2670e336"
  },
  {
    "url": "emoji/120/japanese-symbol-for-beginner.png",
    "revision": "ad8203db5db03928a2718f27a943ec20"
  },
  {
    "url": "emoji/120/japanese-vacancy-button.png",
    "revision": "08f408e2cf5ea324cdc669f64287489b"
  },
  {
    "url": "emoji/120/jeans.png",
    "revision": "25978521ba9a82939175cea8000e99a4"
  },
  {
    "url": "emoji/120/joker.png",
    "revision": "8e0e539bb18e014fd9d3ee9554d39364"
  },
  {
    "url": "emoji/120/joystick.png",
    "revision": "71b3a81fae6b2c30f1e474addd13c81a"
  },
  {
    "url": "emoji/120/kaaba.png",
    "revision": "20d948e2a45175d2f89cd8fc834d8038"
  },
  {
    "url": "emoji/120/kangaroo.png",
    "revision": "11d9fc55d2fb23bd2bf71aa993b32141"
  },
  {
    "url": "emoji/120/key.png",
    "revision": "638cf05eed4787c788d1cbd3269109b6"
  },
  {
    "url": "emoji/120/keyboard.png",
    "revision": "13f9838d068a8efac943a5f3af20922c"
  },
  {
    "url": "emoji/120/keycap-10.png",
    "revision": "c7ffa3f1136eee30cfbd18184be5103c"
  },
  {
    "url": "emoji/120/keycap-asterisk.png",
    "revision": "0ec0da21b84467fd6dca81ee96c60de9"
  },
  {
    "url": "emoji/120/keycap-digit-eight.png",
    "revision": "759dc45195c56015f29b23827c3dc718"
  },
  {
    "url": "emoji/120/keycap-digit-five.png",
    "revision": "dbe5c28d592b88c15f94b18befd33b37"
  },
  {
    "url": "emoji/120/keycap-digit-four.png",
    "revision": "9dc15a82df40c1009a90f4c003f7c4e6"
  },
  {
    "url": "emoji/120/keycap-digit-nine.png",
    "revision": "b7fcd342e09644988f15780fcb23bceb"
  },
  {
    "url": "emoji/120/keycap-digit-one.png",
    "revision": "a52d0c4571d0bae0780d941b6d1c21cd"
  },
  {
    "url": "emoji/120/keycap-digit-seven.png",
    "revision": "df2d32e806800cbedefcac19c40ca1e4"
  },
  {
    "url": "emoji/120/keycap-digit-six.png",
    "revision": "382c22dfdaf0efe8dac663d9eef56136"
  },
  {
    "url": "emoji/120/keycap-digit-three.png",
    "revision": "6915b566b92cfbb915057b30e06b0167"
  },
  {
    "url": "emoji/120/keycap-digit-two.png",
    "revision": "6baf2fcf7ada925ac4c6d1c6daa77d2b"
  },
  {
    "url": "emoji/120/keycap-digit-zero.png",
    "revision": "4f5e6f83a4c288f734410d1bbc2433cc"
  },
  {
    "url": "emoji/120/keycap-number-sign.png",
    "revision": "25ddf7b474891b2bbb7cf763c3ef515a"
  },
  {
    "url": "emoji/120/kick-scooter.png",
    "revision": "1fe87c7701b5ec139de88eb8b8e58b5d"
  },
  {
    "url": "emoji/120/kimono.png",
    "revision": "03a0161a69729649c019865391d33a58"
  },
  {
    "url": "emoji/120/kiss-dark-skin-tone.png",
    "revision": "c0d4552a9a2ed2dbe4c6fe552f0f8a31"
  },
  {
    "url": "emoji/120/kiss-light-skin-tone.png",
    "revision": "ad6dc9de6b18f493e397b1261948b2b2"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-man-no-skin-tone.png",
    "revision": "1f862b3934688ac34022400dbed37d2f"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-woman-dark-skin-tone.png",
    "revision": "9ac32b29110259bb7a8f85d806a5e204"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-woman-light-skin-tone.png",
    "revision": "fcf343506cad521e4f705f2555dd426a"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "6936d53ba9a17e37c8264382af40988a"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "443543dfe8d825c7afcded79e5582ada"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-woman-medium-skin-tone.png",
    "revision": "b91b9230894c64b3f4f5e12176c9a8bd"
  },
  {
    "url": "emoji/120/kiss-man-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "45904e9b6be1692be0f7deebc457ab26"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-man-no-skin-tone.png",
    "revision": "bb6063c9d544f87648e63cb099ab76e9"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-woman-dark-skin-tone.png",
    "revision": "3081d055568275ef68721f30576fb6b1"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-woman-light-skin-tone.png",
    "revision": "dca4d7a7e905bb2b12d153b977996789"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "2711e24255ba9e0e9cba551ddff78df9"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "63915590b51974df88572de83d02151e"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-woman-medium-skin-tone.png",
    "revision": "69472ee6b4ae91c5b131fec611a71b69"
  },
  {
    "url": "emoji/120/kiss-man-light-skin-tone-woman-no-skin-tone.png",
    "revision": "0095d4a9fde2954b87e387fa88827bb3"
  },
  {
    "url": "emoji/120/kiss-man-man-dark-skin-tone-light-skin-tone.png",
    "revision": "c8d088c4f02ff00e030b7e34935d4350"
  },
  {
    "url": "emoji/120/kiss-man-man-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "9b84376b375c3b0aa206556593914ef8"
  },
  {
    "url": "emoji/120/kiss-man-man-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "9869efe29c51ef93f8f2aed4e3e0210b"
  },
  {
    "url": "emoji/120/kiss-man-man-dark-skin-tone-medium-skin-tone.png",
    "revision": "ee62339fabaf09cd644d4504d2e1e1fe"
  },
  {
    "url": "emoji/120/kiss-man-man-dark-skin-tone.png",
    "revision": "a210b5778ad679115e7610a4a6623481"
  },
  {
    "url": "emoji/120/kiss-man-man-light-skin-tone-dark-skin-tone.png",
    "revision": "1cb3ca6e441276717d14b6ff5bc4a7bd"
  },
  {
    "url": "emoji/120/kiss-man-man-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "85158fbbfe8237d03f8fb6ad49eda36a"
  },
  {
    "url": "emoji/120/kiss-man-man-light-skin-tone-medium-light-skin-tone.png",
    "revision": "7c92def80332a5cd703f80f612e33682"
  },
  {
    "url": "emoji/120/kiss-man-man-light-skin-tone-medium-skin-tone.png",
    "revision": "99a7b443b7de4bd3944a73475cbe2dd9"
  },
  {
    "url": "emoji/120/kiss-man-man-light-skin-tone.png",
    "revision": "ba409c75712b2523b45331c1618729b8"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "5a885f49de12096db9f0b922763803cf"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "f4b4d13d871ae98c6968512831518947"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "243c497a8a069ce85d30ccba4fbe4673"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "59d37738ec9a7119eeca1728b793dc7e"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-dark-skin-tone.png",
    "revision": "d973e27996d94d968f451391dff5a0cb"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "16ef51791ee8cd313aaf29f3942e6bf0"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-light-skin-tone-light-skin-tone.png",
    "revision": "ca72aa056bbe983b0cb00642f5410689"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "54827b6968fb2d1085cdd727aea0bcf2"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "1c1cf6858da60ca4216f811f53a91791"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-light-skin-tone.png",
    "revision": "56678610251af29bde62d43093223eb7"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-skin-tone-dark-skin-tone.png",
    "revision": "ac460733a19701524ae95108f2253e7c"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-skin-tone-light-skin-tone.png",
    "revision": "ee5bff673e898d0c6064181e8654d078"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "b51254548f2d7fdfcc44fb9caa10324c"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "76a40ef9685e70266f638af5a1466349"
  },
  {
    "url": "emoji/120/kiss-man-man-medium-skin-tone.png",
    "revision": "6fd017b6ec2db24d517a8bf33812a84f"
  },
  {
    "url": "emoji/120/kiss-man-man.png",
    "revision": "e64b67cb0c6caa006abd7b724c7e3394"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-man-no-skin-tone.png",
    "revision": "036f879978b993e6fb98fd1af9c50ffe"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-woman-dark-skin-tone.png",
    "revision": "0b35a8b918fed6d6f582e900374f3e6f"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-woman-light-skin-tone.png",
    "revision": "81dddc36c7b86a72b2aeb8e8c2c07004"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "edf503011653e670b422e4e82fea888f"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "c78bf71e731b369941594b9375433cd3"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-woman-medium-skin-tone.png",
    "revision": "27e9ec0b91a2c23b88d610c9b70bcb45"
  },
  {
    "url": "emoji/120/kiss-man-medium-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "db9b239989244a902717cdd03134de27"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-man-no-skin-tone.png",
    "revision": "e8a8a5a7cf9f56dcb904296811e3506b"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-woman-dark-skin-tone.png",
    "revision": "87659e62402f7b7451bf88f5f6089bb1"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-woman-light-skin-tone.png",
    "revision": "ca54883f1966a8cd383e9207d20d8dcc"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "3bb4f6fbadec154929e1815527bd94ff"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "9b4f0b02a1ed580b9fb82655ec4c2e17"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-woman-medium-skin-tone.png",
    "revision": "e41bd28cccaece26c0e1c82dc014ac93"
  },
  {
    "url": "emoji/120/kiss-man-medium-light-skin-tone-woman-no-skin-tone.png",
    "revision": "e23bf998d2745520501fe52798f0b9ee"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-man-no-skin-tone.png",
    "revision": "836edc96ad946a237ff917a6822f06c4"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-woman-dark-skin-tone.png",
    "revision": "b30aff6da1527ae703fa8c83c4464615"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-woman-light-skin-tone.png",
    "revision": "f9485cfe38faf7a2ca35d3430bc92a0f"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "e3b60a1dc1a591769d4afdd5b29c53f2"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "edbb9e47b20b1865fbd99eeac455cf2d"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-woman-medium-skin-tone.png",
    "revision": "178d025c3137c30b8da4310605eb758d"
  },
  {
    "url": "emoji/120/kiss-man-medium-skin-tone-woman-no-skin-tone.png",
    "revision": "d41f785059fb6aae14bc0ce2233b8d43"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-man-dark-skin-tone.png",
    "revision": "354940a3b4ae3ce3be70e0260e7f46ed"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-man-light-skin-tone.png",
    "revision": "843d03663f416022822ab31993d6909e"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-man-medium-dark-skin-tone.png",
    "revision": "f1bd81c9061315d9128533982d957141"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-man-medium-light-skin-tone.png",
    "revision": "43370606be8236fd0ed3eb2d8d11a016"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-man-medium-skin-tone.png",
    "revision": "54410f432c5f96dff9c09d380dd4e4c2"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-woman-dark-skin-tone.png",
    "revision": "03d5ac097b4f9c386e0cd4bf0bd27eff"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-woman-light-skin-tone.png",
    "revision": "2fa6c0b1b7d804f169a776e2c16d1f2b"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "d11e9f8e81f667f6e4b3512b541491a4"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "bfa0463f82a650ac4952a24176b1c6f3"
  },
  {
    "url": "emoji/120/kiss-man-no-skin-tone-woman-medium-skin-tone.png",
    "revision": "10d36179e1d4657fe050bfa325f2ae57"
  },
  {
    "url": "emoji/120/kiss-man-woman.png",
    "revision": "57cf93bbf7d723faa5a6104aed66ebcc"
  },
  {
    "url": "emoji/120/kiss-mark.png",
    "revision": "f3d7f6d4307986e4f12d79962c34eec7"
  },
  {
    "url": "emoji/120/kiss-medium-dark-skin-tone.png",
    "revision": "be7d034bfccf678529a8b4483948ecef"
  },
  {
    "url": "emoji/120/kiss-medium-light-skin-tone.png",
    "revision": "272ca1a15f875edaed7ab751b9f3e943"
  },
  {
    "url": "emoji/120/kiss-medium-skin-tone.png",
    "revision": "4fbdbd70c2b0a644eb7ff327f4803a83"
  },
  {
    "url": "emoji/120/kiss-woman-dark-skin-tone-man-no-skin-tone.png",
    "revision": "e5281222f9ff1af31621a02ca75028f6"
  },
  {
    "url": "emoji/120/kiss-woman-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "b7f6fc2fb51e992c1069ac3819b79d9d"
  },
  {
    "url": "emoji/120/kiss-woman-light-skin-tone-man-no-skin-tone.png",
    "revision": "b5c3abe385624b1a4f2d710f526efac1"
  },
  {
    "url": "emoji/120/kiss-woman-light-skin-tone-woman-no-skin-tone.png",
    "revision": "c53b1f4f1699f7b8143e73bf2e0cf087"
  },
  {
    "url": "emoji/120/kiss-woman-man-dark-skin-tone-light-skin-tone.png",
    "revision": "a5013a9891a9d9151692f60bf4ee6bf9"
  },
  {
    "url": "emoji/120/kiss-woman-man-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "a0486539356d237c4c1aa1c42645162f"
  },
  {
    "url": "emoji/120/kiss-woman-man-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "4da765de060b0547f5fa535424913730"
  },
  {
    "url": "emoji/120/kiss-woman-man-dark-skin-tone-medium-skin-tone.png",
    "revision": "fde8b0dd17a0f599ec1ed7d7987ed218"
  },
  {
    "url": "emoji/120/kiss-woman-man-dark-skin-tone.png",
    "revision": "a88e764bf838c6cb16506de47b8efd8b"
  },
  {
    "url": "emoji/120/kiss-woman-man-light-skin-tone-dark-skin-tone.png",
    "revision": "7f6f5c24f181477fca7f15ba61133d3a"
  },
  {
    "url": "emoji/120/kiss-woman-man-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "67416fba454d3c52d411855cb836cee9"
  },
  {
    "url": "emoji/120/kiss-woman-man-light-skin-tone-medium-light-skin-tone.png",
    "revision": "e985bfe76df2e7c7e83358d75b467f0b"
  },
  {
    "url": "emoji/120/kiss-woman-man-light-skin-tone-medium-skin-tone.png",
    "revision": "1fb70c90b98c66322f351cf90feb622e"
  },
  {
    "url": "emoji/120/kiss-woman-man-light-skin-tone.png",
    "revision": "a86a687125db36ffc456bba95baf20eb"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "dbf148a87130d1d53046c827d2cf1f24"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "ceab91762db4270f8e82b2f8a88795d5"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "0ca08a3e62ce24271999a6ba7d35a73b"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "670ea73d5374aad9906c55ffd7ac8ce9"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-dark-skin-tone.png",
    "revision": "6cb8faa752ddc7b062d12a180996114e"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "41c599edce659e5bfce06b8d066cea6f"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-light-skin-tone-light-skin-tone.png",
    "revision": "f2a0ad87015eab2d5bbec737121c37d1"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "efd103ae3ec6e1c8d5e7682cbeaa826e"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "024e95b8e6ef5e1426c94adf161f2d8d"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-light-skin-tone.png",
    "revision": "e1c0e53415fc6d1ac01c69fcd6b024ef"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-skin-tone-dark-skin-tone.png",
    "revision": "010bf4ca69200a6299e6f4bf2f1da692"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-skin-tone-light-skin-tone.png",
    "revision": "e26baadc0c422598e6c33ebbd118ae2f"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "977c15be721a5a2bfbc118b764673c14"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "fd7dccfe837be596944074473cb44a1a"
  },
  {
    "url": "emoji/120/kiss-woman-man-medium-skin-tone.png",
    "revision": "5aa009e17a7fbfcc216a64dd9498bb10"
  },
  {
    "url": "emoji/120/kiss-woman-man.png",
    "revision": "2bc006ae9eeadd46aeb5e92133bef1b6"
  },
  {
    "url": "emoji/120/kiss-woman-medium-dark-skin-tone-man-no-skin-tone.png",
    "revision": "952463e69fc4e6bb9ee4f026c55b3255"
  },
  {
    "url": "emoji/120/kiss-woman-medium-dark-skin-tone-woman-no-skin-tone.png",
    "revision": "41b799430fa5d5049af5c59322ef3b92"
  },
  {
    "url": "emoji/120/kiss-woman-medium-light-skin-tone-man-no-skin-tone.png",
    "revision": "05bda287db364f77eb8e9b9b37626a82"
  },
  {
    "url": "emoji/120/kiss-woman-medium-light-skin-tone-woman-no-skin-tone.png",
    "revision": "3565f1fa7b45ee10cbff424baa28e8de"
  },
  {
    "url": "emoji/120/kiss-woman-medium-skin-tone-man-no-skin-tone.png",
    "revision": "928d85b67b492fb236ece0199fa7b9b7"
  },
  {
    "url": "emoji/120/kiss-woman-medium-skin-tone-woman-no-skin-tone.png",
    "revision": "352fb86033c2de1ad60434521ee4f054"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-man-dark-skin-tone.png",
    "revision": "58362018e14944d80166b57fc8977c18"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-man-light-skin-tone.png",
    "revision": "1437ab4f2fd802221d501ea88f6d2e34"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-man-medium-dark-skin-tone.png",
    "revision": "0871b4f872598ce400d95e9a79b5dae7"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-man-medium-light-skin-tone.png",
    "revision": "7d0cb4266f1071a1c709d4ab858359e0"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-man-medium-skin-tone.png",
    "revision": "1ad033686372a6abc26124bcddc17b1c"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-woman-dark-skin-tone.png",
    "revision": "5dc3d1ff1e3f93118243a0e9838a274c"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-woman-light-skin-tone.png",
    "revision": "4bf164f1d346cc216829c5321eff30e7"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-woman-medium-dark-skin-tone.png",
    "revision": "336bf6b2627b69c9040c7afb667d8145"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-woman-medium-light-skin-tone.png",
    "revision": "38ed437c4186c0d2bea57c6cdd886a2b"
  },
  {
    "url": "emoji/120/kiss-woman-no-skin-tone-woman-medium-skin-tone.png",
    "revision": "4af36fefcf05666813fdc1d9a0f68980"
  },
  {
    "url": "emoji/120/kiss-woman-woman-dark-skin-tone-light-skin-tone.png",
    "revision": "8b17ee13c76faf0fb817b2e529edb5da"
  },
  {
    "url": "emoji/120/kiss-woman-woman-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "749d3c11052b1cb4271451ba0dc3e9ad"
  },
  {
    "url": "emoji/120/kiss-woman-woman-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "6631d107b8e738200e9694cf3aaa863f"
  },
  {
    "url": "emoji/120/kiss-woman-woman-dark-skin-tone-medium-skin-tone.png",
    "revision": "16d839ac3979e5dcb75f43dc9b3cdac7"
  },
  {
    "url": "emoji/120/kiss-woman-woman-dark-skin-tone.png",
    "revision": "fd307105d5938d5a095c08d4349c8ebc"
  },
  {
    "url": "emoji/120/kiss-woman-woman-light-skin-tone-dark-skin-tone.png",
    "revision": "2c07353fd057517cb8f1ffb17d0c86da"
  },
  {
    "url": "emoji/120/kiss-woman-woman-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "704347a1e9a86686d29db7d47afa0433"
  },
  {
    "url": "emoji/120/kiss-woman-woman-light-skin-tone-medium-light-skin-tone.png",
    "revision": "7dd417207de02a6a4b253a4263c59e86"
  },
  {
    "url": "emoji/120/kiss-woman-woman-light-skin-tone-medium-skin-tone.png",
    "revision": "60f659622c16a0d03fb6b1409d82e8de"
  },
  {
    "url": "emoji/120/kiss-woman-woman-light-skin-tone.png",
    "revision": "c45cb1631b51b8741135b0f586263cc4"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "90f53cb75ff4f51d9adf53e91edf42e0"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "c035055ef3e73aafb6791eba3f4ee0f8"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "12ab7b6f2495ffe0ad7dd41dcf19a1e4"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "bbc253f2a6240c1e2068574ff963f782"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-dark-skin-tone.png",
    "revision": "4e56a68e072f101bc97a80fdeee7557d"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "76146b19ef35542139a1dabf5b203656"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-light-skin-tone-light-skin-tone.png",
    "revision": "d52f0092521005cf9d41a7eb864128c8"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "b5807f554e0217af0c3f72c433a523f3"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "bc4bf77cedf6fcaafebfaa3f91ec49c8"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-light-skin-tone.png",
    "revision": "3e7a2fa95e625ddc076a721615315805"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-skin-tone-dark-skin-tone.png",
    "revision": "d37668e1078f117967a39a70ef81e093"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-skin-tone-light-skin-tone.png",
    "revision": "fac4a2e02731a5cfaf4593ece0b3cca6"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "4aee2ee8c3a4c00e7012ec556abcfec0"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "ff8b8becf140e51c0658462a52de1f71"
  },
  {
    "url": "emoji/120/kiss-woman-woman-medium-skin-tone.png",
    "revision": "e0bfdc238ca3408dbbd1933467f6e130"
  },
  {
    "url": "emoji/120/kiss-woman-woman.png",
    "revision": "58db8a1a10a62b1591816174461fb90b"
  },
  {
    "url": "emoji/120/kiss.png",
    "revision": "6b0fb9ba7a213f0a83c225377e48fe09"
  },
  {
    "url": "emoji/120/kissing-cat.png",
    "revision": "628413ba756dca95e226b05ba9bd1f3a"
  },
  {
    "url": "emoji/120/kissing-face-with-closed-eyes.png",
    "revision": "2c7ae0602bfb4c3b5d66c9a70d5ac3bc"
  },
  {
    "url": "emoji/120/kissing-face-with-smiling-eyes.png",
    "revision": "afff4d57946071c4a37af5b273e79ed9"
  },
  {
    "url": "emoji/120/kissing-face.png",
    "revision": "abea03d5d32e0d3781ea799f13cd2412"
  },
  {
    "url": "emoji/120/kitchen-knife.png",
    "revision": "4385672556a4c335ab77136787e51428"
  },
  {
    "url": "emoji/120/kite.png",
    "revision": "9106d9c51e48851c25c3a2812a4e30ff"
  },
  {
    "url": "emoji/120/kiwi-fruit.png",
    "revision": "92f2aaea20fb6665bc3373194f235274"
  },
  {
    "url": "emoji/120/koala.png",
    "revision": "3e3d4bc5f01123c3fd77c91861008388"
  },
  {
    "url": "emoji/120/lab-coat.png",
    "revision": "d108eef0795d9a4105066d9c58b77a80"
  },
  {
    "url": "emoji/120/label.png",
    "revision": "2d0b18cac73d9fc4ee9f23ba2bb0dc11"
  },
  {
    "url": "emoji/120/lacrosse.png",
    "revision": "6c9e529a0588ba7a1b34e257bd70767e"
  },
  {
    "url": "emoji/120/lady-beetle.png",
    "revision": "18116db81d1e9d26380580c5cca7b0e7"
  },
  {
    "url": "emoji/120/laptop.png",
    "revision": "d7964b8be3a2fd31f115ce9c79be9d66"
  },
  {
    "url": "emoji/120/large-blue-circle.png",
    "revision": "bd448b9d1bb78bc34bce0e76c8221e2a"
  },
  {
    "url": "emoji/120/large-blue-diamond.png",
    "revision": "6ce85244ba9f83ed849a46926c92694c"
  },
  {
    "url": "emoji/120/large-blue-square.png",
    "revision": "abae11ca2997c182af7b648ec80bbec6"
  },
  {
    "url": "emoji/120/large-brown-circle.png",
    "revision": "a65b9df7aebfa5378bffbaa185e25431"
  },
  {
    "url": "emoji/120/large-brown-square.png",
    "revision": "c8e7dbad4b6ba7b9e06c3a6e6f3cbb8f"
  },
  {
    "url": "emoji/120/large-green-circle.png",
    "revision": "bbd54c2e568c890779017aea0fe07de0"
  },
  {
    "url": "emoji/120/large-green-square.png",
    "revision": "506778a62cff55d86e3c779547ba1706"
  },
  {
    "url": "emoji/120/large-orange-circle.png",
    "revision": "c8b17034fbc76cd178ba5908c1913d6b"
  },
  {
    "url": "emoji/120/large-orange-diamond.png",
    "revision": "11f24c609520f112480807fc0a1e3380"
  },
  {
    "url": "emoji/120/large-orange-square.png",
    "revision": "4a6f1cc9eec438c7096d3d80864239c9"
  },
  {
    "url": "emoji/120/large-purple-circle.png",
    "revision": "58860a37ef2b79455aff7ce43d787a24"
  },
  {
    "url": "emoji/120/large-purple-square.png",
    "revision": "8666e22fdd695d1fb1582d2128246449"
  },
  {
    "url": "emoji/120/large-red-circle.png",
    "revision": "d76fdebf5e10b53f472a9266c8e930d6"
  },
  {
    "url": "emoji/120/large-red-square.png",
    "revision": "349bc69adc30008544ecca5b49408afd"
  },
  {
    "url": "emoji/120/large-yellow-circle.png",
    "revision": "141afcd12eff66d1676d5c03356b8897"
  },
  {
    "url": "emoji/120/large-yellow-square.png",
    "revision": "56e376c0519691666bc9bb28c2161b0d"
  },
  {
    "url": "emoji/120/last-quarter-moon-face.png",
    "revision": "14ea8b78c81f4b44af32d7a05743d0f1"
  },
  {
    "url": "emoji/120/last-quarter-moon.png",
    "revision": "fbd9f2b5a652cfec5d2365028103e9ce"
  },
  {
    "url": "emoji/120/last-track-button.png",
    "revision": "1c5ee5cdbce84047ef06f5dfaa1d9a84"
  },
  {
    "url": "emoji/120/latin-cross.png",
    "revision": "706020d71a94110858f247d38c20f981"
  },
  {
    "url": "emoji/120/leaf-fluttering-in-wind.png",
    "revision": "e67dc416d8f1284d67ae35dfc1d86809"
  },
  {
    "url": "emoji/120/leafy-green.png",
    "revision": "281aafff65ae19860b8cf281895ba1af"
  },
  {
    "url": "emoji/120/ledger.png",
    "revision": "cb3fe8677ccd75274f0258ed0a2e850e"
  },
  {
    "url": "emoji/120/left-arrow-curving-right.png",
    "revision": "95d4d6541bdf89afdfeeb843cbbe5fd6"
  },
  {
    "url": "emoji/120/left-arrow.png",
    "revision": "27c588f2d01599657e878a5f369847a4"
  },
  {
    "url": "emoji/120/left-facing-fist-dark-skin-tone.png",
    "revision": "2050ed54e774eb07553383e980d5e087"
  },
  {
    "url": "emoji/120/left-facing-fist-light-skin-tone.png",
    "revision": "17d553d7a47cd0f787570b579af6e7ea"
  },
  {
    "url": "emoji/120/left-facing-fist-medium-dark-skin-tone.png",
    "revision": "4276bb30de10f548693da7ec60265135"
  },
  {
    "url": "emoji/120/left-facing-fist-medium-light-skin-tone.png",
    "revision": "cb1776c3234eadd2c03747d381c8659d"
  },
  {
    "url": "emoji/120/left-facing-fist-medium-skin-tone.png",
    "revision": "7704227b85363a18db6531a21f2b1367"
  },
  {
    "url": "emoji/120/left-facing-fist.png",
    "revision": "51644c9b5d9695ff3c4b11f156cd9492"
  },
  {
    "url": "emoji/120/left-luggage.png",
    "revision": "5e962e4347574b2ed81c1d1563bef66b"
  },
  {
    "url": "emoji/120/left-right-arrow.png",
    "revision": "8d43214840410f0f9308101a4862a3b1"
  },
  {
    "url": "emoji/120/left-speech-bubble.png",
    "revision": "61f54517fa9c4069f670aae2c66c1c2c"
  },
  {
    "url": "emoji/120/leg-dark-skin-tone.png",
    "revision": "a4725d719468ea8e2b13e9fcb3e390b1"
  },
  {
    "url": "emoji/120/leg-light-skin-tone.png",
    "revision": "d3def75c1620bea0fd6d0b34d965ac88"
  },
  {
    "url": "emoji/120/leg-medium-dark-skin-tone.png",
    "revision": "47ffa5d2b02bb1dda220671e2218f682"
  },
  {
    "url": "emoji/120/leg-medium-light-skin-tone.png",
    "revision": "737b721e2060307f166e8b3b46c7b3c0"
  },
  {
    "url": "emoji/120/leg-medium-skin-tone.png",
    "revision": "35f91411df7e0a1ee64d7f7e90b465eb"
  },
  {
    "url": "emoji/120/leg.png",
    "revision": "d8b2ed8b342b129aa3c658af91490652"
  },
  {
    "url": "emoji/120/lemon.png",
    "revision": "c4da60f71cc6ced0aeac8a0a950fecb5"
  },
  {
    "url": "emoji/120/leo.png",
    "revision": "ade1e3c68274143c2c609823b306f502"
  },
  {
    "url": "emoji/120/leopard.png",
    "revision": "0d3751e28e059de8fd1df90d3a08c1e8"
  },
  {
    "url": "emoji/120/level-slider.png",
    "revision": "e53e4ba2b18f81b135cd83f53bea2670"
  },
  {
    "url": "emoji/120/libra.png",
    "revision": "b8427b64a7ca743ef40c34b1e65e534c"
  },
  {
    "url": "emoji/120/light-bulb.png",
    "revision": "209ee00f79194b4bcadfcd26ed3b2876"
  },
  {
    "url": "emoji/120/light-rail.png",
    "revision": "44e2c648b1845247415254d727d4783a"
  },
  {
    "url": "emoji/120/light-skin-tone.png",
    "revision": "a28423710f7a7bbced627daf8bf1dbc9"
  },
  {
    "url": "emoji/120/link.png",
    "revision": "da0bd47ad88c4b5a520f8c85e76924fa"
  },
  {
    "url": "emoji/120/linked-paperclips.png",
    "revision": "d63c701a002ff19c4ad012b59fc76310"
  },
  {
    "url": "emoji/120/lion.png",
    "revision": "eca7f80c7d67a64d12a9d1f689fcaf85"
  },
  {
    "url": "emoji/120/lipstick.png",
    "revision": "d90e6f407c51dccfc752caba5b79d67c"
  },
  {
    "url": "emoji/120/litter-in-bin-sign.png",
    "revision": "b42376b19637bb94542772a415ea7347"
  },
  {
    "url": "emoji/120/lizard.png",
    "revision": "9150b3a14b78ee11e8991fd2dafeb2a3"
  },
  {
    "url": "emoji/120/llama.png",
    "revision": "81645135d57c806a60af973a0f423be5"
  },
  {
    "url": "emoji/120/lobster.png",
    "revision": "4d8ad82ed92768eff268acb4bf390e8d"
  },
  {
    "url": "emoji/120/locked-with-key.png",
    "revision": "8593a2661e6e9896624a5fca23d865d8"
  },
  {
    "url": "emoji/120/locked-with-pen.png",
    "revision": "4864a77cc58340b16e940e4ee0ad0e26"
  },
  {
    "url": "emoji/120/locked.png",
    "revision": "6a8d55732890a1ecc5d2381e5923c2f5"
  },
  {
    "url": "emoji/120/locomotive.png",
    "revision": "90c47d5c4f7ed5c525e2cc99652f876f"
  },
  {
    "url": "emoji/120/lollipop.png",
    "revision": "04551d04a40e4d26f3d91b88e3318107"
  },
  {
    "url": "emoji/120/lotion-bottle.png",
    "revision": "9d19e68a27b22208d0812a0993f8467a"
  },
  {
    "url": "emoji/120/loudly-crying-face.png",
    "revision": "b5dafb54b3be3533fa938fca02976a6e"
  },
  {
    "url": "emoji/120/loudspeaker.png",
    "revision": "9827319ef0df3950cdfeb9392ae6a32b"
  },
  {
    "url": "emoji/120/love-hotel.png",
    "revision": "2edbc5903ece4ab0a5af48c594008aef"
  },
  {
    "url": "emoji/120/love-letter.png",
    "revision": "f7967ce689def0a8ecd35acbc8dfb34f"
  },
  {
    "url": "emoji/120/love-you-gesture-dark-skin-tone.png",
    "revision": "16da46380dbe5f427401ea4a6d5f88f2"
  },
  {
    "url": "emoji/120/love-you-gesture-light-skin-tone.png",
    "revision": "18e5120db7cb6f4070b393c7dd0d3d44"
  },
  {
    "url": "emoji/120/love-you-gesture-medium-dark-skin-tone.png",
    "revision": "7f69fe8a9316e9eef475f94b16daf6a6"
  },
  {
    "url": "emoji/120/love-you-gesture-medium-light-skin-tone.png",
    "revision": "2215079a11c528a8dbe04ad4008e8cdc"
  },
  {
    "url": "emoji/120/love-you-gesture-medium-skin-tone.png",
    "revision": "f81a767bbc1ed64b83bf55deb71d61cf"
  },
  {
    "url": "emoji/120/love-you-gesture.png",
    "revision": "255a11f08e2ef97df7366b09c21a7a62"
  },
  {
    "url": "emoji/120/lower-right-pencil.png",
    "revision": "077450e021d6001b022635f13220f2c5"
  },
  {
    "url": "emoji/120/luggage.png",
    "revision": "07f87fc7e7d131d96b3e44b911b9190e"
  },
  {
    "url": "emoji/120/lying-face.png",
    "revision": "53fe4f49595c4c828e5fdb6ef651dbb7"
  },
  {
    "url": "emoji/120/mage-dark-skin-tone.png",
    "revision": "8b117ed4abbdf0a90f18fee85412147b"
  },
  {
    "url": "emoji/120/mage-light-skin-tone.png",
    "revision": "28812b4f87612dddf13059992fa0742e"
  },
  {
    "url": "emoji/120/mage-medium-dark-skin-tone.png",
    "revision": "21fdce2194a10660f15e7de334794d14"
  },
  {
    "url": "emoji/120/mage-medium-light-skin-tone.png",
    "revision": "b520fe297a807da43f72b572b11c9e03"
  },
  {
    "url": "emoji/120/mage-medium-skin-tone.png",
    "revision": "e5c0a74962fc205df0246c97fb09e019"
  },
  {
    "url": "emoji/120/mage.png",
    "revision": "9e8ca92477b7f394f9a8f705dca71edb"
  },
  {
    "url": "emoji/120/magnet.png",
    "revision": "00798c2d3ee33a672b5125ce23360987"
  },
  {
    "url": "emoji/120/magnifying-glass-tilted-left.png",
    "revision": "7f6c27a9896535261521bd6798ee3212"
  },
  {
    "url": "emoji/120/magnifying-glass-tilted-right.png",
    "revision": "697db682a9c25fbd2843a5483eb7e7d4"
  },
  {
    "url": "emoji/120/mahjong-red-dragon.png",
    "revision": "2f9baff258a9815f37fc4b6b154da314"
  },
  {
    "url": "emoji/120/mahjong-tile-autumn.png",
    "revision": "268ac1393145230bc0d156b0c0e609d0"
  },
  {
    "url": "emoji/120/mahjong-tile-back.png",
    "revision": "7ae0aec12b4f72f3806a93e0db47e6d4"
  },
  {
    "url": "emoji/120/mahjong-tile-bamboo.png",
    "revision": "c999b895a7f56fd8908d0b9f5d7a2591"
  },
  {
    "url": "emoji/120/mahjong-tile-chrysanthemum.png",
    "revision": "bf224d704eab8b4ff4a3899c1a333fb3"
  },
  {
    "url": "emoji/120/mahjong-tile-east-wind.png",
    "revision": "b2371d363d995f2cab711e1e0f94c45f"
  },
  {
    "url": "emoji/120/mahjong-tile-eight-of-bamboos.png",
    "revision": "230bacc32815342a7bf0f957c2bfa37f"
  },
  {
    "url": "emoji/120/mahjong-tile-eight-of-characters.png",
    "revision": "ec652f3bf2ff92b2561cf912a1c9115f"
  },
  {
    "url": "emoji/120/mahjong-tile-eight-of-circles.png",
    "revision": "50b8eaa9ab619bc2d9b50420b8150a9f"
  },
  {
    "url": "emoji/120/mahjong-tile-five-of-bamboos.png",
    "revision": "fff69f75e19e9cbfa9a142f33270a328"
  },
  {
    "url": "emoji/120/mahjong-tile-five-of-characters.png",
    "revision": "311647a57271948266d57c594a05eea7"
  },
  {
    "url": "emoji/120/mahjong-tile-five-of-circles.png",
    "revision": "b59b4dd555d544201d503dcc3fff7eac"
  },
  {
    "url": "emoji/120/mahjong-tile-four-of-bamboos.png",
    "revision": "0070e8deb92a42f3505c89f0cb92f26d"
  },
  {
    "url": "emoji/120/mahjong-tile-four-of-characters.png",
    "revision": "01c7db1a44f2d64014222c17caaab0d3"
  },
  {
    "url": "emoji/120/mahjong-tile-four-of-circles.png",
    "revision": "fb0b3e35ee8f540f7ac1f69dcac3e96a"
  },
  {
    "url": "emoji/120/mahjong-tile-green-dragon.png",
    "revision": "8d23db9f35cf9d441269ab2f3e8e3e44"
  },
  {
    "url": "emoji/120/mahjong-tile-joker.png",
    "revision": "609061e55244d86cb5b661b2444cc130"
  },
  {
    "url": "emoji/120/mahjong-tile-nine-of-bamboos.png",
    "revision": "53fc3c48b1f2b0fcd094defe3d625ccd"
  },
  {
    "url": "emoji/120/mahjong-tile-nine-of-characters.png",
    "revision": "fc96650f649bb550a88711a0ffb47486"
  },
  {
    "url": "emoji/120/mahjong-tile-nine-of-circles.png",
    "revision": "06415f609508f69a31b579f57c450c95"
  },
  {
    "url": "emoji/120/mahjong-tile-north-wind.png",
    "revision": "3f194c8296df50cd65cc98d0f9493953"
  },
  {
    "url": "emoji/120/mahjong-tile-one-of-bamboos.png",
    "revision": "ba786f9616482f4273726c5c85a5757f"
  },
  {
    "url": "emoji/120/mahjong-tile-one-of-characters.png",
    "revision": "4e091197574e668825f19dd3848f54c8"
  },
  {
    "url": "emoji/120/mahjong-tile-one-of-circles.png",
    "revision": "802c3d4e31c8041ae1cd9f8f447fbfd5"
  },
  {
    "url": "emoji/120/mahjong-tile-orchid.png",
    "revision": "8f3ea4ac04f8f711977b8cf1c915c5c0"
  },
  {
    "url": "emoji/120/mahjong-tile-plum.png",
    "revision": "17dc3a206dedf77c214a7d3165c009b9"
  },
  {
    "url": "emoji/120/mahjong-tile-seven-of-bamboos.png",
    "revision": "1a1be82c23343ac952e202fbf1ae8f04"
  },
  {
    "url": "emoji/120/mahjong-tile-seven-of-characters.png",
    "revision": "9bcadc6e64e537e15307904f31dc3a8e"
  },
  {
    "url": "emoji/120/mahjong-tile-seven-of-circles.png",
    "revision": "794e96b5d448d31bdb349ddc773d090c"
  },
  {
    "url": "emoji/120/mahjong-tile-six-of-bamboos.png",
    "revision": "dfae4ed605dd52da3b85739c5799ead1"
  },
  {
    "url": "emoji/120/mahjong-tile-six-of-characters.png",
    "revision": "9f6c6a47ac7ee1ba202a7a05ca414c8a"
  },
  {
    "url": "emoji/120/mahjong-tile-six-of-circles.png",
    "revision": "c9d4294cd24c12db49d4007756c49acd"
  },
  {
    "url": "emoji/120/mahjong-tile-south-wind.png",
    "revision": "54106c8479ad58f3e5f196d60ca1f493"
  },
  {
    "url": "emoji/120/mahjong-tile-spring.png",
    "revision": "3152a22bebdbd1696699b01aa29d00f8"
  },
  {
    "url": "emoji/120/mahjong-tile-summer.png",
    "revision": "1c4f4cdb8c9d3dbc18c3241c7fdf91f1"
  },
  {
    "url": "emoji/120/mahjong-tile-three-of-bamboos.png",
    "revision": "d2103d7fb7c6be3cadb422572e0fb631"
  },
  {
    "url": "emoji/120/mahjong-tile-three-of-characters.png",
    "revision": "34d112876be07003ae66badf1bdac7cc"
  },
  {
    "url": "emoji/120/mahjong-tile-three-of-circles.png",
    "revision": "63ffe0797f74432f37b808419d55c9e5"
  },
  {
    "url": "emoji/120/mahjong-tile-two-of-bamboos.png",
    "revision": "1c307ced1c9355b85129bcc95aac074a"
  },
  {
    "url": "emoji/120/mahjong-tile-two-of-characters.png",
    "revision": "567dbe9cc3b71d8bb2dd9481c6ec5b72"
  },
  {
    "url": "emoji/120/mahjong-tile-two-of-circles.png",
    "revision": "c3fa904d71c6d4f90e6478928a2ca77e"
  },
  {
    "url": "emoji/120/mahjong-tile-west-wind.png",
    "revision": "bd40215c4ab1fb26518eeba938527bd9"
  },
  {
    "url": "emoji/120/mahjong-tile-white-dragon.png",
    "revision": "8ba635b19d99aaac4e753da888c6a192"
  },
  {
    "url": "emoji/120/mahjong-tile-winter.png",
    "revision": "544e16994b166609ac876ba1fd0bc85d"
  },
  {
    "url": "emoji/120/male-sign.png",
    "revision": "d98772016da5b60e2ceaaa4576df2731"
  },
  {
    "url": "emoji/120/man-artist-dark-skin-tone.png",
    "revision": "52006e23b88b953e376733d0bb153263"
  },
  {
    "url": "emoji/120/man-artist-light-skin-tone.png",
    "revision": "2755aa77451e6b66e7c0573ad3dd1860"
  },
  {
    "url": "emoji/120/man-artist-medium-dark-skin-tone.png",
    "revision": "8ca8011fea917cd31b4958cff29a3348"
  },
  {
    "url": "emoji/120/man-artist-medium-light-skin-tone.png",
    "revision": "76854c49fc069d30e6d1cf4b98b2a5fe"
  },
  {
    "url": "emoji/120/man-artist-medium-skin-tone.png",
    "revision": "e899ef9895c8ff4cf3efc13a4cc9db1a"
  },
  {
    "url": "emoji/120/man-artist.png",
    "revision": "4488cd6ac4948a879625c0bc9dade965"
  },
  {
    "url": "emoji/120/man-astronaut-dark-skin-tone.png",
    "revision": "29b1f272c350875f43a91c85985550d1"
  },
  {
    "url": "emoji/120/man-astronaut-light-skin-tone.png",
    "revision": "822c2e30b9da2c6f2d9ed7b62f5d09f5"
  },
  {
    "url": "emoji/120/man-astronaut-medium-dark-skin-tone.png",
    "revision": "292129c969be2f62b9c51a5570120005"
  },
  {
    "url": "emoji/120/man-astronaut-medium-light-skin-tone.png",
    "revision": "936300079eb5539e821f8624ec432605"
  },
  {
    "url": "emoji/120/man-astronaut-medium-skin-tone.png",
    "revision": "ed77d48bc1316d1d4224686867160366"
  },
  {
    "url": "emoji/120/man-astronaut.png",
    "revision": "7a9ed934a6a8980f20ffb432f22ec918"
  },
  {
    "url": "emoji/120/man-bald.png",
    "revision": "dbd9a3fbb2d9b97c6be2284e5251b5d7"
  },
  {
    "url": "emoji/120/man-biking-dark-skin-tone.png",
    "revision": "b6cec2f30b82e6ca1516befa08199767"
  },
  {
    "url": "emoji/120/man-biking-light-skin-tone.png",
    "revision": "62003086bb8eecd159ee93c723b78918"
  },
  {
    "url": "emoji/120/man-biking-medium-dark-skin-tone.png",
    "revision": "e1c3a1f9e2ffb1797787098229dddf72"
  },
  {
    "url": "emoji/120/man-biking-medium-light-skin-tone.png",
    "revision": "5a8229f21976195826e8630e9291a915"
  },
  {
    "url": "emoji/120/man-biking-medium-skin-tone.png",
    "revision": "3204c4480bb12c94978c9880cbe0b367"
  },
  {
    "url": "emoji/120/man-biking.png",
    "revision": "c4dccb0fcefbea59e9f3849881d8e3ee"
  },
  {
    "url": "emoji/120/man-blond-hair.png",
    "revision": "e1bd7ee75cc82821b9d0e0d15eb7c1da"
  },
  {
    "url": "emoji/120/man-bouncing-ball-dark-skin-tone.png",
    "revision": "093d74cc811f46bfdd4d01322d6d68f8"
  },
  {
    "url": "emoji/120/man-bouncing-ball-light-skin-tone.png",
    "revision": "657c9a09b400298a79c54a0b81c91eea"
  },
  {
    "url": "emoji/120/man-bouncing-ball-medium-dark-skin-tone.png",
    "revision": "a0876ac45cda044da26a3e48b76915ae"
  },
  {
    "url": "emoji/120/man-bouncing-ball-medium-light-skin-tone.png",
    "revision": "5a2aec877316a1c9f42487a3c1987280"
  },
  {
    "url": "emoji/120/man-bouncing-ball-medium-skin-tone.png",
    "revision": "fca09a9ab65a3ffde3c30d0684a3b230"
  },
  {
    "url": "emoji/120/man-bouncing-ball.png",
    "revision": "11b5da8a6585bfa0c52d6e90f2ac5806"
  },
  {
    "url": "emoji/120/man-bowing-dark-skin-tone.png",
    "revision": "02b4a8a075c843b789bc230f7cdb8900"
  },
  {
    "url": "emoji/120/man-bowing-light-skin-tone.png",
    "revision": "1e6b9a8bc03239561fcc5b1312fbb49b"
  },
  {
    "url": "emoji/120/man-bowing-medium-dark-skin-tone.png",
    "revision": "fba4f87dd65c71ef343a5937fb53d4a0"
  },
  {
    "url": "emoji/120/man-bowing-medium-light-skin-tone.png",
    "revision": "7930a4e4ddb3615e88ddc3d2586fb0f9"
  },
  {
    "url": "emoji/120/man-bowing-medium-skin-tone.png",
    "revision": "48de669ddbdbc117d99f203d7700b570"
  },
  {
    "url": "emoji/120/man-bowing.png",
    "revision": "1288558c382dbf57703318fb2e47baef"
  },
  {
    "url": "emoji/120/man-cartwheeling-dark-skin-tone.png",
    "revision": "bc3cd1d31f0ea7d7f2b53bc0ee8839db"
  },
  {
    "url": "emoji/120/man-cartwheeling-light-skin-tone.png",
    "revision": "e5c0ff75b4275d426ac06b10f59fd6a4"
  },
  {
    "url": "emoji/120/man-cartwheeling-medium-dark-skin-tone.png",
    "revision": "e264157c73b06b97ee424c14f5d59ded"
  },
  {
    "url": "emoji/120/man-cartwheeling-medium-light-skin-tone.png",
    "revision": "986b47c578e760e7159467b9cdc1ea1b"
  },
  {
    "url": "emoji/120/man-cartwheeling-medium-skin-tone.png",
    "revision": "82b4c14e2646864fed8c2f03ae76cff5"
  },
  {
    "url": "emoji/120/man-cartwheeling.png",
    "revision": "bd834bf91a14cce33b1de50fce75f2c9"
  },
  {
    "url": "emoji/120/man-climbing-dark-skin-tone.png",
    "revision": "21ba90ccbef0c38ffd6a8d6eba7edae0"
  },
  {
    "url": "emoji/120/man-climbing-light-skin-tone.png",
    "revision": "4f73c0c447433f9f738fc6f5e5d8b6e9"
  },
  {
    "url": "emoji/120/man-climbing-medium-dark-skin-tone.png",
    "revision": "bb315237626e81128bed314a484553d3"
  },
  {
    "url": "emoji/120/man-climbing-medium-light-skin-tone.png",
    "revision": "631d32664ed2b5408d46aa6e5ef661c7"
  },
  {
    "url": "emoji/120/man-climbing-medium-skin-tone.png",
    "revision": "9aed66fa8065fe32eed9da068cf7653f"
  },
  {
    "url": "emoji/120/man-climbing.png",
    "revision": "df2b2782699fbb40eb36e887d5eadac7"
  },
  {
    "url": "emoji/120/man-construction-worker-dark-skin-tone.png",
    "revision": "da956813a2ddc56971af21850d303030"
  },
  {
    "url": "emoji/120/man-construction-worker-light-skin-tone.png",
    "revision": "2ecb0214456c14cb31432f284ba86b2c"
  },
  {
    "url": "emoji/120/man-construction-worker-medium-dark-skin-tone.png",
    "revision": "21ca46dc7101fdef5a1a8cfb17d9b973"
  },
  {
    "url": "emoji/120/man-construction-worker-medium-light-skin-tone.png",
    "revision": "b2a55f399a5967085fcf334f89527118"
  },
  {
    "url": "emoji/120/man-construction-worker-medium-skin-tone.png",
    "revision": "48055ca779b92c2bf66d9b9db9de5ac1"
  },
  {
    "url": "emoji/120/man-construction-worker.png",
    "revision": "1e27b15b22492491e95181585ebc5691"
  },
  {
    "url": "emoji/120/man-cook-dark-skin-tone.png",
    "revision": "2da5a91cf1c8e69ac959cd36f415927b"
  },
  {
    "url": "emoji/120/man-cook-light-skin-tone.png",
    "revision": "4dc7a6f7b4477b03d620bd71b889d0a6"
  },
  {
    "url": "emoji/120/man-cook-medium-dark-skin-tone.png",
    "revision": "9b112a0fb4d9cd346fd84aba500855bc"
  },
  {
    "url": "emoji/120/man-cook-medium-light-skin-tone.png",
    "revision": "2eb6184b7c2b0b8ecd3ca3f4e679815a"
  },
  {
    "url": "emoji/120/man-cook-medium-skin-tone.png",
    "revision": "b7b53d14e3e17318b2e8b8ba4666c0b8"
  },
  {
    "url": "emoji/120/man-cook.png",
    "revision": "dc74dd1a7c5a72d61529a6a9158ef5d4"
  },
  {
    "url": "emoji/120/man-curly-hair.png",
    "revision": "625afc8e74c19b1b566d0c44c66b1c41"
  },
  {
    "url": "emoji/120/man-dancing-dark-skin-tone.png",
    "revision": "5d1c64a53077a0331ab179955aea5b94"
  },
  {
    "url": "emoji/120/man-dancing-light-skin-tone.png",
    "revision": "2ef3dd57b0e72c36b311556ac85d31cd"
  },
  {
    "url": "emoji/120/man-dancing-medium-dark-skin-tone.png",
    "revision": "2d42b723d8e1abc4a94ff55ee770f856"
  },
  {
    "url": "emoji/120/man-dancing-medium-light-skin-tone.png",
    "revision": "9ef4bf6e124b229cd974c65e750e7214"
  },
  {
    "url": "emoji/120/man-dancing-medium-skin-tone.png",
    "revision": "71bc8dc504234b96312c4668c6af0ca4"
  },
  {
    "url": "emoji/120/man-dancing.png",
    "revision": "c0965dceacd2423b4e540479327fc6c1"
  },
  {
    "url": "emoji/120/man-dark-skin-tone-bald.png",
    "revision": "4c4724ccdbabb0827743ef5fc94d5253"
  },
  {
    "url": "emoji/120/man-dark-skin-tone-blond-hair.png",
    "revision": "b179575db99d0e6edf8cb73556ace24b"
  },
  {
    "url": "emoji/120/man-dark-skin-tone-curly-hair.png",
    "revision": "530584502457de42654f9e3d30c90fa1"
  },
  {
    "url": "emoji/120/man-dark-skin-tone-red-hair.png",
    "revision": "2040af53567080637b93bb086819bd84"
  },
  {
    "url": "emoji/120/man-dark-skin-tone-white-hair.png",
    "revision": "dc837b649e69037437a6278e3097e44e"
  },
  {
    "url": "emoji/120/man-dark-skin-tone.png",
    "revision": "b4846a51267c5d67460f526b23b35585"
  },
  {
    "url": "emoji/120/man-detective-dark-skin-tone.png",
    "revision": "8416b9ce3dcd583341bfb77484422709"
  },
  {
    "url": "emoji/120/man-detective-light-skin-tone.png",
    "revision": "50be6722ad62071c697eeb7d3cbc18e4"
  },
  {
    "url": "emoji/120/man-detective-medium-dark-skin-tone.png",
    "revision": "b4324801820d63df98b9fadc334d879e"
  },
  {
    "url": "emoji/120/man-detective-medium-light-skin-tone.png",
    "revision": "78de8907b78bf7e8e5af68c80fea9321"
  },
  {
    "url": "emoji/120/man-detective-medium-skin-tone.png",
    "revision": "ca0191822bbf5a3a946acec84ad4d540"
  },
  {
    "url": "emoji/120/man-detective.png",
    "revision": "4a6e9e530f756ebbb4d15a1e539182f4"
  },
  {
    "url": "emoji/120/man-elf-dark-skin-tone.png",
    "revision": "20aa8c739bcf6bdb2bee80c820296af5"
  },
  {
    "url": "emoji/120/man-elf-light-skin-tone.png",
    "revision": "397d4062a23d631267f0fdd7e9577349"
  },
  {
    "url": "emoji/120/man-elf-medium-dark-skin-tone.png",
    "revision": "d909ef82c5fa667a978afe591a89d8bd"
  },
  {
    "url": "emoji/120/man-elf-medium-light-skin-tone.png",
    "revision": "aa17df2704d34d8bc3806cd8cfb02d33"
  },
  {
    "url": "emoji/120/man-elf-medium-skin-tone.png",
    "revision": "b278b8e9d5827d2677fc6d96fa459f98"
  },
  {
    "url": "emoji/120/man-elf.png",
    "revision": "8e13c7e23adb23a20f018c99bab31b7e"
  },
  {
    "url": "emoji/120/man-facepalming-dark-skin-tone.png",
    "revision": "28fb8050b58e1d4f1009a93ba4c60201"
  },
  {
    "url": "emoji/120/man-facepalming-light-skin-tone.png",
    "revision": "b908cae8ea5d12c14d9808f8826de9c1"
  },
  {
    "url": "emoji/120/man-facepalming-medium-dark-skin-tone.png",
    "revision": "0a61b9aecf31c712a9432da06195d076"
  },
  {
    "url": "emoji/120/man-facepalming-medium-light-skin-tone.png",
    "revision": "162cb9da6836144b1b2be3ad275c8508"
  },
  {
    "url": "emoji/120/man-facepalming-medium-skin-tone.png",
    "revision": "b9f6cd28c048f68f493ad736a75be7f8"
  },
  {
    "url": "emoji/120/man-facepalming.png",
    "revision": "7837c9bac72ff1a43e44dd5b3bef4525"
  },
  {
    "url": "emoji/120/man-factory-worker-dark-skin-tone.png",
    "revision": "70dae89f11b80f304a27eeaa5b07a10a"
  },
  {
    "url": "emoji/120/man-factory-worker-light-skin-tone.png",
    "revision": "27f0642816d0e50ea62f5221165f61ef"
  },
  {
    "url": "emoji/120/man-factory-worker-medium-dark-skin-tone.png",
    "revision": "2e6832f72a505091242d85b9db7b716c"
  },
  {
    "url": "emoji/120/man-factory-worker-medium-light-skin-tone.png",
    "revision": "fe72bc588964f35c217b606a2a9673ec"
  },
  {
    "url": "emoji/120/man-factory-worker-medium-skin-tone.png",
    "revision": "a4fda22ffef03e503e4e652150631435"
  },
  {
    "url": "emoji/120/man-factory-worker.png",
    "revision": "79f21bb391d7f7ea7a5a52db5014fb8b"
  },
  {
    "url": "emoji/120/man-fairy-dark-skin-tone.png",
    "revision": "cd704e69c4f63bdb26ef74f902626414"
  },
  {
    "url": "emoji/120/man-fairy-light-skin-tone.png",
    "revision": "cd755a3d243c097de6b66e130f06923c"
  },
  {
    "url": "emoji/120/man-fairy-medium-dark-skin-tone.png",
    "revision": "3e36ef5bd990b06011cade8d1c5b7eef"
  },
  {
    "url": "emoji/120/man-fairy-medium-light-skin-tone.png",
    "revision": "ee4cf0069dcf7417c183e098deb41931"
  },
  {
    "url": "emoji/120/man-fairy-medium-skin-tone.png",
    "revision": "6440cb9043937123678a2a22def74f31"
  },
  {
    "url": "emoji/120/man-fairy.png",
    "revision": "d871f2ca4a11d5902ca3ed9c10ea49a6"
  },
  {
    "url": "emoji/120/man-farmer-dark-skin-tone.png",
    "revision": "92d445a5eedc50e2de67a6fd3764f33e"
  },
  {
    "url": "emoji/120/man-farmer-light-skin-tone.png",
    "revision": "af662f4b5a74262828d61232316d04be"
  },
  {
    "url": "emoji/120/man-farmer-medium-dark-skin-tone.png",
    "revision": "a893e3f26455198ace202c1230c99ee1"
  },
  {
    "url": "emoji/120/man-farmer-medium-light-skin-tone.png",
    "revision": "efeb430a60e217aa49e94cfd50dfaaf8"
  },
  {
    "url": "emoji/120/man-farmer-medium-skin-tone.png",
    "revision": "25f9df653da9d3461cb45f6caac6f84d"
  },
  {
    "url": "emoji/120/man-farmer.png",
    "revision": "99b8777708f83c7fcdb8b4cee80ae6ae"
  },
  {
    "url": "emoji/120/man-firefighter-dark-skin-tone.png",
    "revision": "ebc107e077951e459264c86ebd20ee8c"
  },
  {
    "url": "emoji/120/man-firefighter-light-skin-tone.png",
    "revision": "15cd6384abaea793ffe8fdb30f91ca89"
  },
  {
    "url": "emoji/120/man-firefighter-medium-dark-skin-tone.png",
    "revision": "8f95540917aefbd58a9d62c3068e1eea"
  },
  {
    "url": "emoji/120/man-firefighter-medium-light-skin-tone.png",
    "revision": "c372641f19afcb9e19bf74590b19c2f7"
  },
  {
    "url": "emoji/120/man-firefighter-medium-skin-tone.png",
    "revision": "0065e446b7fd988665e742f454f281a3"
  },
  {
    "url": "emoji/120/man-firefighter.png",
    "revision": "4badebd5668f7c32d789c837eda77f94"
  },
  {
    "url": "emoji/120/man-frowning-dark-skin-tone.png",
    "revision": "7898ede4e346ebd444e358fbba4a4111"
  },
  {
    "url": "emoji/120/man-frowning-light-skin-tone.png",
    "revision": "9c49203c12abf7623aab00512a35584e"
  },
  {
    "url": "emoji/120/man-frowning-medium-dark-skin-tone.png",
    "revision": "33462eef86d5ae3b2816bdc0dd65bcf5"
  },
  {
    "url": "emoji/120/man-frowning-medium-light-skin-tone.png",
    "revision": "db78097a493f42a9bb8372ebbd1fd370"
  },
  {
    "url": "emoji/120/man-frowning-medium-skin-tone.png",
    "revision": "5846a662cadb7f3f75d99962066c909d"
  },
  {
    "url": "emoji/120/man-frowning.png",
    "revision": "43318c42dcf95c545ba37b4daf2b2428"
  },
  {
    "url": "emoji/120/man-genie.png",
    "revision": "74755ab22c9b019d5ae6870b928034a7"
  },
  {
    "url": "emoji/120/man-gesturing-no-dark-skin-tone.png",
    "revision": "b86f7605cdab63dddc092bb4d73fd94a"
  },
  {
    "url": "emoji/120/man-gesturing-no-light-skin-tone.png",
    "revision": "4af81fddadc97dc8d2ac90061a286e56"
  },
  {
    "url": "emoji/120/man-gesturing-no-medium-dark-skin-tone.png",
    "revision": "6e6b586fc357cd052274c354da526321"
  },
  {
    "url": "emoji/120/man-gesturing-no-medium-light-skin-tone.png",
    "revision": "60d0d3da3941863f84469ee05709993e"
  },
  {
    "url": "emoji/120/man-gesturing-no-medium-skin-tone.png",
    "revision": "6172a7892d6664333857a338c9ef71b3"
  },
  {
    "url": "emoji/120/man-gesturing-no.png",
    "revision": "d94b5504a2e8d90a7dda9e35de719357"
  },
  {
    "url": "emoji/120/man-gesturing-ok-dark-skin-tone.png",
    "revision": "3ae7b22c083d43626f8328477c9f40fd"
  },
  {
    "url": "emoji/120/man-gesturing-ok-light-skin-tone.png",
    "revision": "163456678e260d35f02831a5f1d6182e"
  },
  {
    "url": "emoji/120/man-gesturing-ok-medium-dark-skin-tone.png",
    "revision": "c25b02f6b5c24a6ccfdce92a951e2045"
  },
  {
    "url": "emoji/120/man-gesturing-ok-medium-light-skin-tone.png",
    "revision": "a82a247a2718c21fcafd4cd5f52d7898"
  },
  {
    "url": "emoji/120/man-gesturing-ok-medium-skin-tone.png",
    "revision": "bdbd498bdbab8f2e706b984c3d7bb325"
  },
  {
    "url": "emoji/120/man-gesturing-ok.png",
    "revision": "fc0a673ec8e889d891c718411183e171"
  },
  {
    "url": "emoji/120/man-getting-haircut-dark-skin-tone.png",
    "revision": "ad74b25294c60762feac5445a5f05da1"
  },
  {
    "url": "emoji/120/man-getting-haircut-light-skin-tone.png",
    "revision": "3808f4a1fb3a60ff980feddb71c6cfb1"
  },
  {
    "url": "emoji/120/man-getting-haircut-medium-dark-skin-tone.png",
    "revision": "6ec422425b472f7e8d93dbaf802add03"
  },
  {
    "url": "emoji/120/man-getting-haircut-medium-light-skin-tone.png",
    "revision": "ab315824050734932764d54328aaed86"
  },
  {
    "url": "emoji/120/man-getting-haircut-medium-skin-tone.png",
    "revision": "79316afd0c6feb88156dba2a4b51309a"
  },
  {
    "url": "emoji/120/man-getting-haircut.png",
    "revision": "a0afb9a465ad56f3eb1dc24b90192e2f"
  },
  {
    "url": "emoji/120/man-getting-massage-dark-skin-tone.png",
    "revision": "0b571f948c3af337a0a2e2a8e1167258"
  },
  {
    "url": "emoji/120/man-getting-massage-light-skin-tone.png",
    "revision": "8cf588561c987a521dd476e0c0dca636"
  },
  {
    "url": "emoji/120/man-getting-massage-medium-dark-skin-tone.png",
    "revision": "78698ebdffeb3d55e74bda31ed361d9b"
  },
  {
    "url": "emoji/120/man-getting-massage-medium-light-skin-tone.png",
    "revision": "467ba27cf7e6b803f00ec3c7275d29e4"
  },
  {
    "url": "emoji/120/man-getting-massage-medium-skin-tone.png",
    "revision": "e3e2ecf3dbca2e08f7c1a8794a4a2d30"
  },
  {
    "url": "emoji/120/man-getting-massage.png",
    "revision": "ea5437f19bed3d0a38323cfca7c4e39f"
  },
  {
    "url": "emoji/120/man-golfing-dark-skin-tone.png",
    "revision": "b71b8f4698e3c908d0001a9c5a6d5e3f"
  },
  {
    "url": "emoji/120/man-golfing-light-skin-tone.png",
    "revision": "59895bb83a7a91125985b2e9fa7e74d2"
  },
  {
    "url": "emoji/120/man-golfing-medium-dark-skin-tone.png",
    "revision": "73e2dd13dcc4b022b9036401d83af783"
  },
  {
    "url": "emoji/120/man-golfing-medium-light-skin-tone.png",
    "revision": "1d353e301acf8c84a129bbe0de4e26b9"
  },
  {
    "url": "emoji/120/man-golfing-medium-skin-tone.png",
    "revision": "d632b8865ca2708c94fe31244429cd15"
  },
  {
    "url": "emoji/120/man-golfing.png",
    "revision": "0658edaf20011fa0648808082f0de93b"
  },
  {
    "url": "emoji/120/man-guard-dark-skin-tone.png",
    "revision": "b3a24c4920b5596159d1ee43c4ca8bc3"
  },
  {
    "url": "emoji/120/man-guard-light-skin-tone.png",
    "revision": "0aa70cee32f2826984c5a9ecee76811f"
  },
  {
    "url": "emoji/120/man-guard-medium-dark-skin-tone.png",
    "revision": "ef42897a3669a6233c6abd22440efe20"
  },
  {
    "url": "emoji/120/man-guard-medium-light-skin-tone.png",
    "revision": "cca6521617dc852d0393470330a9e29e"
  },
  {
    "url": "emoji/120/man-guard-medium-skin-tone.png",
    "revision": "4274fc793eb866b69a73281b07033f66"
  },
  {
    "url": "emoji/120/man-guard.png",
    "revision": "bc666e569b88cb1b479c37130f3e961e"
  },
  {
    "url": "emoji/120/man-health-worker-dark-skin-tone.png",
    "revision": "18fae021678307d1e0a20bd26efe28a6"
  },
  {
    "url": "emoji/120/man-health-worker-light-skin-tone.png",
    "revision": "7c74b240df3eede5513231532f003cf6"
  },
  {
    "url": "emoji/120/man-health-worker-medium-dark-skin-tone.png",
    "revision": "aa1accbc0ce435be76e2a597895a4fa8"
  },
  {
    "url": "emoji/120/man-health-worker-medium-light-skin-tone.png",
    "revision": "647fff1085b8a838d8df8d862afc1ad4"
  },
  {
    "url": "emoji/120/man-health-worker-medium-skin-tone.png",
    "revision": "f020d5cff69f2d9e53673058401fc231"
  },
  {
    "url": "emoji/120/man-health-worker.png",
    "revision": "c9b4d22e39adc1227e40d1388d4627a5"
  },
  {
    "url": "emoji/120/man-in-lotus-position-dark-skin-tone.png",
    "revision": "166a4ab0f06d0c5b4c0c8aa791eff732"
  },
  {
    "url": "emoji/120/man-in-lotus-position-light-skin-tone.png",
    "revision": "1fcd066e73c4b5138a82de62098e1234"
  },
  {
    "url": "emoji/120/man-in-lotus-position-medium-dark-skin-tone.png",
    "revision": "debe83dc24f98e011d92871087113bfd"
  },
  {
    "url": "emoji/120/man-in-lotus-position-medium-light-skin-tone.png",
    "revision": "b4ec9ae21649cd2b34c4f34d82da9f7c"
  },
  {
    "url": "emoji/120/man-in-lotus-position-medium-skin-tone.png",
    "revision": "6102dc900f46dfb0b3bfcb58170e1148"
  },
  {
    "url": "emoji/120/man-in-lotus-position.png",
    "revision": "7c5323c3b804e21cfe4d8ed87fd6c208"
  },
  {
    "url": "emoji/120/man-in-manual-wheelchair-dark-skin-tone.png",
    "revision": "d35bd4f9c148865bce12f8aaa43bd429"
  },
  {
    "url": "emoji/120/man-in-manual-wheelchair-light-skin-tone.png",
    "revision": "bd5cf1d2daa8f51a4a10f0ad3784403c"
  },
  {
    "url": "emoji/120/man-in-manual-wheelchair-medium-dark-skin-tone.png",
    "revision": "9e16975f7b52a965428abbd43f38bebf"
  },
  {
    "url": "emoji/120/man-in-manual-wheelchair-medium-light-skin-tone.png",
    "revision": "1090645fcafb32d2b52f306288db9731"
  },
  {
    "url": "emoji/120/man-in-manual-wheelchair-medium-skin-tone.png",
    "revision": "328d0ec30f2d5a0af28dc7c601263578"
  },
  {
    "url": "emoji/120/man-in-manual-wheelchair.png",
    "revision": "a10dfe705112a890be7d39fed0183642"
  },
  {
    "url": "emoji/120/man-in-motorized-wheelchair-dark-skin-tone.png",
    "revision": "585d77472cec67669735593dd655d2f5"
  },
  {
    "url": "emoji/120/man-in-motorized-wheelchair-light-skin-tone.png",
    "revision": "7c84412a87937c602b10624767488c02"
  },
  {
    "url": "emoji/120/man-in-motorized-wheelchair-medium-dark-skin-tone.png",
    "revision": "549a4a99346ae2368b8ab787b7623c71"
  },
  {
    "url": "emoji/120/man-in-motorized-wheelchair-medium-light-skin-tone.png",
    "revision": "d4ea94a5e99ab11cbef87a404624a472"
  },
  {
    "url": "emoji/120/man-in-motorized-wheelchair-medium-skin-tone.png",
    "revision": "bb33380ecd94a6695ea9bc102ba319b2"
  },
  {
    "url": "emoji/120/man-in-motorized-wheelchair.png",
    "revision": "cd8882c92a74af68f68eabb26b665e53"
  },
  {
    "url": "emoji/120/man-in-steamy-room-dark-skin-tone.png",
    "revision": "c932a60fd4758f5406e9e32c905c5c86"
  },
  {
    "url": "emoji/120/man-in-steamy-room-light-skin-tone.png",
    "revision": "de7e8873a2d64225b18d94f668a61c4d"
  },
  {
    "url": "emoji/120/man-in-steamy-room-medium-dark-skin-tone.png",
    "revision": "58b86adcde8d73d9dc216c369afff9fb"
  },
  {
    "url": "emoji/120/man-in-steamy-room-medium-light-skin-tone.png",
    "revision": "a026076148728f47825dbc219ab424ab"
  },
  {
    "url": "emoji/120/man-in-steamy-room-medium-skin-tone.png",
    "revision": "f1e79b7fa5d60dce15da4e6cbdda7e83"
  },
  {
    "url": "emoji/120/man-in-steamy-room.png",
    "revision": "9f8e4eac028e3dc7afdf9664c62a8990"
  },
  {
    "url": "emoji/120/man-judge-dark-skin-tone.png",
    "revision": "4e846aeae74696ab423dfb244f0bc68f"
  },
  {
    "url": "emoji/120/man-judge-light-skin-tone.png",
    "revision": "d4a610a0dcefc5ed01ea47cf60e14dbc"
  },
  {
    "url": "emoji/120/man-judge-medium-dark-skin-tone.png",
    "revision": "6baaa5624c9e9421e7eac303190e1ac1"
  },
  {
    "url": "emoji/120/man-judge-medium-light-skin-tone.png",
    "revision": "02930f9f2cc686f8ef78c9d4242b6646"
  },
  {
    "url": "emoji/120/man-judge-medium-skin-tone.png",
    "revision": "892c8f0816e4e5e25569322be8ce5789"
  },
  {
    "url": "emoji/120/man-judge.png",
    "revision": "7d0a179eed0f35609b9e5e1431e90465"
  },
  {
    "url": "emoji/120/man-juggling-dark-skin-tone.png",
    "revision": "ffd7d0c437cbc1dc0a03af0d9e4d2ac7"
  },
  {
    "url": "emoji/120/man-juggling-light-skin-tone.png",
    "revision": "fee6ee3d62478c3301dd3d177fa9df35"
  },
  {
    "url": "emoji/120/man-juggling-medium-dark-skin-tone.png",
    "revision": "78896a5f089671e603aa5346d2789b1d"
  },
  {
    "url": "emoji/120/man-juggling-medium-light-skin-tone.png",
    "revision": "5814719d8d3676c36a37fff7bd906421"
  },
  {
    "url": "emoji/120/man-juggling-medium-skin-tone.png",
    "revision": "db4a253075f3b65f2d6b7b5068e6dc58"
  },
  {
    "url": "emoji/120/man-juggling.png",
    "revision": "7e0dbca47af09e214368af097b9cdc83"
  },
  {
    "url": "emoji/120/man-kneeling-dark-skin-tone.png",
    "revision": "fde0de403fa8394616877f171e531bcf"
  },
  {
    "url": "emoji/120/man-kneeling-light-skin-tone.png",
    "revision": "2ae3d3c7dbc33848927fdb760f2183ff"
  },
  {
    "url": "emoji/120/man-kneeling-medium-dark-skin-tone.png",
    "revision": "f99ab71884410ba53f58edf5c82f57ab"
  },
  {
    "url": "emoji/120/man-kneeling-medium-light-skin-tone.png",
    "revision": "be296dc22c54887c57203e1764baa809"
  },
  {
    "url": "emoji/120/man-kneeling-medium-skin-tone.png",
    "revision": "476af0adfa0ba235c33a4a6615afe0dd"
  },
  {
    "url": "emoji/120/man-kneeling.png",
    "revision": "d6721ca5169342820a167e76949ed5f6"
  },
  {
    "url": "emoji/120/man-lifting-weights-dark-skin-tone.png",
    "revision": "5170482fa29efee35029b6217a4cc09f"
  },
  {
    "url": "emoji/120/man-lifting-weights-light-skin-tone.png",
    "revision": "537f296e1a094aaed2fb1a08fab516f2"
  },
  {
    "url": "emoji/120/man-lifting-weights-medium-dark-skin-tone.png",
    "revision": "686b3ae636c939290a31dc017b708ece"
  },
  {
    "url": "emoji/120/man-lifting-weights-medium-light-skin-tone.png",
    "revision": "d84ab62b0244285342f4a58c6f4db4cc"
  },
  {
    "url": "emoji/120/man-lifting-weights-medium-skin-tone.png",
    "revision": "8e3dd8ff7c80203890929997fe0e4ce2"
  },
  {
    "url": "emoji/120/man-lifting-weights.png",
    "revision": "e91829d3127613b701e70c88f1e9c3ef"
  },
  {
    "url": "emoji/120/man-light-skin-tone-bald.png",
    "revision": "1a934e8ef838883e219943dd77b5e962"
  },
  {
    "url": "emoji/120/man-light-skin-tone-blond-hair.png",
    "revision": "d62fc945bcec8c4bde6e841252c90073"
  },
  {
    "url": "emoji/120/man-light-skin-tone-curly-hair.png",
    "revision": "6140c434b3af16fa2a4442dc2214db7e"
  },
  {
    "url": "emoji/120/man-light-skin-tone-red-hair.png",
    "revision": "a971639e552e35e35285d55c0cd35a56"
  },
  {
    "url": "emoji/120/man-light-skin-tone-white-hair.png",
    "revision": "8fba6207e464cae82b055fe9fd7934f5"
  },
  {
    "url": "emoji/120/man-light-skin-tone.png",
    "revision": "b5d591b9034474bda7b399ff3ff2d8e6"
  },
  {
    "url": "emoji/120/man-mage-dark-skin-tone.png",
    "revision": "93218f97a784ccbea337ed8a100542b9"
  },
  {
    "url": "emoji/120/man-mage-light-skin-tone.png",
    "revision": "f8f7da83ec4db711042611d157bdadd2"
  },
  {
    "url": "emoji/120/man-mage-medium-dark-skin-tone.png",
    "revision": "de682fd10dfb60fb2be18a26c5551d22"
  },
  {
    "url": "emoji/120/man-mage-medium-light-skin-tone.png",
    "revision": "08768ce43042fefa7777c2ef64a56a61"
  },
  {
    "url": "emoji/120/man-mage-medium-skin-tone.png",
    "revision": "38641b98448bdad098ec86c50598a920"
  },
  {
    "url": "emoji/120/man-mage.png",
    "revision": "a98fe366526c761ef883f68db7479c44"
  },
  {
    "url": "emoji/120/man-mechanic-dark-skin-tone.png",
    "revision": "7da43e6372b8ad4e19a39241c50be159"
  },
  {
    "url": "emoji/120/man-mechanic-light-skin-tone.png",
    "revision": "c1a8cb95ff68524d45811f50cba6e1ed"
  },
  {
    "url": "emoji/120/man-mechanic-medium-dark-skin-tone.png",
    "revision": "70794066180c46f187bfcbd92f368d94"
  },
  {
    "url": "emoji/120/man-mechanic-medium-light-skin-tone.png",
    "revision": "71e1dd78b288f2d309b2cc8324b3542d"
  },
  {
    "url": "emoji/120/man-mechanic-medium-skin-tone.png",
    "revision": "bb7a6f53e72bc94f2295bda0ee696bf1"
  },
  {
    "url": "emoji/120/man-mechanic.png",
    "revision": "e14e6d5733badd3c9841d50d41838911"
  },
  {
    "url": "emoji/120/man-medium-dark-skin-tone-bald.png",
    "revision": "9fea5aa6324f69f05694cb337eec044f"
  },
  {
    "url": "emoji/120/man-medium-dark-skin-tone-blond-hair.png",
    "revision": "fd855b7663f6f5ef34914efa3ebd6d50"
  },
  {
    "url": "emoji/120/man-medium-dark-skin-tone-curly-hair.png",
    "revision": "7348405d988df857c5addddd4f811b71"
  },
  {
    "url": "emoji/120/man-medium-dark-skin-tone-red-hair.png",
    "revision": "6ad42cb3b2ce66ef3980fbcfdf82447c"
  },
  {
    "url": "emoji/120/man-medium-dark-skin-tone-white-hair.png",
    "revision": "66d601e84408cb4dc934d7965b70501e"
  },
  {
    "url": "emoji/120/man-medium-dark-skin-tone.png",
    "revision": "70a2a2239963aeb11a5ee05a7ea21762"
  },
  {
    "url": "emoji/120/man-medium-light-skin-tone-bald.png",
    "revision": "abdc87c0848646326846aace9a149d9d"
  },
  {
    "url": "emoji/120/man-medium-light-skin-tone-blond-hair.png",
    "revision": "16cc3782cb27c7fdfa1c096459d8b6cd"
  },
  {
    "url": "emoji/120/man-medium-light-skin-tone-curly-hair.png",
    "revision": "38a4dc44b85e6d8d0af5f6a866891874"
  },
  {
    "url": "emoji/120/man-medium-light-skin-tone-red-hair.png",
    "revision": "7b6ee6db493579f809db00cd7457aa0d"
  },
  {
    "url": "emoji/120/man-medium-light-skin-tone-white-hair.png",
    "revision": "d2cfb3c479d10c9902b9258d39022371"
  },
  {
    "url": "emoji/120/man-medium-light-skin-tone.png",
    "revision": "e518b9d7ee3413dd3b95f027f017ce72"
  },
  {
    "url": "emoji/120/man-medium-skin-tone-bald.png",
    "revision": "fe3fcd61df42e50672468ca3ba31f244"
  },
  {
    "url": "emoji/120/man-medium-skin-tone-blond-hair.png",
    "revision": "8dd9854bbbb5360b7cc6d3f674b05d86"
  },
  {
    "url": "emoji/120/man-medium-skin-tone-curly-hair.png",
    "revision": "8fac60dabb98ee78f66a0e86b07c914b"
  },
  {
    "url": "emoji/120/man-medium-skin-tone-red-hair.png",
    "revision": "a5091463c3c825ff3db719ed555051fb"
  },
  {
    "url": "emoji/120/man-medium-skin-tone-white-hair.png",
    "revision": "f7f774ed5e0d5ee7bc9b41798c34fba7"
  },
  {
    "url": "emoji/120/man-medium-skin-tone.png",
    "revision": "d215d55d6314620dd17af05f1a1a2553"
  },
  {
    "url": "emoji/120/man-mountain-biking-dark-skin-tone.png",
    "revision": "b1a7b9b6790d7382f6385e6bd2bf5fd8"
  },
  {
    "url": "emoji/120/man-mountain-biking-light-skin-tone.png",
    "revision": "5c653780cf431b6b48aa002f0647cdba"
  },
  {
    "url": "emoji/120/man-mountain-biking-medium-dark-skin-tone.png",
    "revision": "61f05496c6b64d647d5e7f094d74f1d8"
  },
  {
    "url": "emoji/120/man-mountain-biking-medium-light-skin-tone.png",
    "revision": "39faea0612d8727b4419efeb95fb9894"
  },
  {
    "url": "emoji/120/man-mountain-biking-medium-skin-tone.png",
    "revision": "d74ed10f603ea80bcadeb16d4c9da745"
  },
  {
    "url": "emoji/120/man-mountain-biking.png",
    "revision": "20a5a16689004080628d968ee3b009d6"
  },
  {
    "url": "emoji/120/man-office-worker-dark-skin-tone.png",
    "revision": "b90a880ab81946f33dbe9a2613b303da"
  },
  {
    "url": "emoji/120/man-office-worker-light-skin-tone.png",
    "revision": "6944c1638a2ebf88594913c76160824b"
  },
  {
    "url": "emoji/120/man-office-worker-medium-dark-skin-tone.png",
    "revision": "1e393b5b4c9ecd1a9c08363a01a1f781"
  },
  {
    "url": "emoji/120/man-office-worker-medium-light-skin-tone.png",
    "revision": "f1ed0399b0bb5b0a647dee2688f6a6bc"
  },
  {
    "url": "emoji/120/man-office-worker-medium-skin-tone.png",
    "revision": "9b838d60dc3ea969a5677c73d4a5c485"
  },
  {
    "url": "emoji/120/man-office-worker.png",
    "revision": "40b12bed68774008a68a90f832f51e3e"
  },
  {
    "url": "emoji/120/man-pilot-dark-skin-tone.png",
    "revision": "e09062d404ca3b64ca1032b306e1baba"
  },
  {
    "url": "emoji/120/man-pilot-light-skin-tone.png",
    "revision": "12376ffcb82592bf1c747ac03b77ad68"
  },
  {
    "url": "emoji/120/man-pilot-medium-dark-skin-tone.png",
    "revision": "787b64f70dc5da200bf1c0f2abfef828"
  },
  {
    "url": "emoji/120/man-pilot-medium-light-skin-tone.png",
    "revision": "38f8b1266e9975e0b43a8d81f68755c6"
  },
  {
    "url": "emoji/120/man-pilot-medium-skin-tone.png",
    "revision": "f84a3f3dce9999831009de71afab8289"
  },
  {
    "url": "emoji/120/man-pilot.png",
    "revision": "fe9d9d9982af258242660fc4b9a1a99a"
  },
  {
    "url": "emoji/120/man-playing-handball-dark-skin-tone.png",
    "revision": "5ba09b7235a71fa1964f3bdf3e2e77b7"
  },
  {
    "url": "emoji/120/man-playing-handball-light-skin-tone.png",
    "revision": "6d3b83e852398850bf77dcad71a75258"
  },
  {
    "url": "emoji/120/man-playing-handball-medium-dark-skin-tone.png",
    "revision": "906647e0c008871eba42d47c4756ecbe"
  },
  {
    "url": "emoji/120/man-playing-handball-medium-light-skin-tone.png",
    "revision": "23661739d36ff40d6301d2c56cbe6095"
  },
  {
    "url": "emoji/120/man-playing-handball-medium-skin-tone.png",
    "revision": "fa5d68ff8ab08d21cf8bce30cd2abea1"
  },
  {
    "url": "emoji/120/man-playing-handball.png",
    "revision": "0803f6838aad3706c039398a5e159f51"
  },
  {
    "url": "emoji/120/man-playing-water-polo-dark-skin-tone.png",
    "revision": "7f99a6de797dfa0417e39cefa4f0c959"
  },
  {
    "url": "emoji/120/man-playing-water-polo-light-skin-tone.png",
    "revision": "6cea6f9631a5466d0c315610aa951798"
  },
  {
    "url": "emoji/120/man-playing-water-polo-medium-dark-skin-tone.png",
    "revision": "35c25ba95adc21e678fc41b3abfd9831"
  },
  {
    "url": "emoji/120/man-playing-water-polo-medium-light-skin-tone.png",
    "revision": "4e24aabff7a5383bc4a074217cf5d121"
  },
  {
    "url": "emoji/120/man-playing-water-polo-medium-skin-tone.png",
    "revision": "44b8f01c50d3c6a87c6171219972de8c"
  },
  {
    "url": "emoji/120/man-playing-water-polo.png",
    "revision": "61b9ca0fe79511d2d5e8104c6ea6256f"
  },
  {
    "url": "emoji/120/man-police-officer-dark-skin-tone.png",
    "revision": "8e572a270ec2d10afb14df63c2641a16"
  },
  {
    "url": "emoji/120/man-police-officer-light-skin-tone.png",
    "revision": "51962612d09ac22c2f41725cc12b1238"
  },
  {
    "url": "emoji/120/man-police-officer-medium-dark-skin-tone.png",
    "revision": "c726c8d91e83105e2d75ea2a3eeb6358"
  },
  {
    "url": "emoji/120/man-police-officer-medium-light-skin-tone.png",
    "revision": "4c25c3a50de043f68a6e6fc092670280"
  },
  {
    "url": "emoji/120/man-police-officer-medium-skin-tone.png",
    "revision": "14ee87e8f6496fc41007b103e882e2f9"
  },
  {
    "url": "emoji/120/man-police-officer.png",
    "revision": "7d394cca1b8f1cef5ee2277d8b91ef78"
  },
  {
    "url": "emoji/120/man-pouting-dark-skin-tone.png",
    "revision": "c63ed00e5261856cc15c78860479fa46"
  },
  {
    "url": "emoji/120/man-pouting-light-skin-tone.png",
    "revision": "6c43a14c6aab4068c78c0e324949d7cc"
  },
  {
    "url": "emoji/120/man-pouting-medium-dark-skin-tone.png",
    "revision": "b65b6617dc2d4207d5456ddd5c3b4419"
  },
  {
    "url": "emoji/120/man-pouting-medium-light-skin-tone.png",
    "revision": "e8152ee9c573be77d303e5e510be0509"
  },
  {
    "url": "emoji/120/man-pouting-medium-skin-tone.png",
    "revision": "3294aafa2920b7f7669b634b2d93b17e"
  },
  {
    "url": "emoji/120/man-pouting.png",
    "revision": "218159b2610a5b81ffe6788524622dc8"
  },
  {
    "url": "emoji/120/man-raising-hand-dark-skin-tone.png",
    "revision": "0158234e2e77ff3e162a16de078a7e44"
  },
  {
    "url": "emoji/120/man-raising-hand-light-skin-tone.png",
    "revision": "fe176945077aa138e15a5f628ae68342"
  },
  {
    "url": "emoji/120/man-raising-hand-medium-dark-skin-tone.png",
    "revision": "3def3156f3d183fc35adf2e2e65f8531"
  },
  {
    "url": "emoji/120/man-raising-hand-medium-light-skin-tone.png",
    "revision": "3024f0c178dc6b22fd77cacd69ec31a1"
  },
  {
    "url": "emoji/120/man-raising-hand-medium-skin-tone.png",
    "revision": "b73f4d2fb781bda729dc203601bb4e18"
  },
  {
    "url": "emoji/120/man-raising-hand.png",
    "revision": "fd0223fe85b5233fc7a203918b31c504"
  },
  {
    "url": "emoji/120/man-red-hair.png",
    "revision": "171e99f73a1fb375c7ff978a9da7d4a2"
  },
  {
    "url": "emoji/120/man-rowing-boat-dark-skin-tone.png",
    "revision": "ed6c846daba41bafcf7e60f15e5e4ade"
  },
  {
    "url": "emoji/120/man-rowing-boat-light-skin-tone.png",
    "revision": "791036f24ea061e478b7a2344276807e"
  },
  {
    "url": "emoji/120/man-rowing-boat-medium-dark-skin-tone.png",
    "revision": "617d26cbc01a38bac6f4edde9cca857e"
  },
  {
    "url": "emoji/120/man-rowing-boat-medium-light-skin-tone.png",
    "revision": "f127bf8c20a5bac8e96fd6fc6c6d1755"
  },
  {
    "url": "emoji/120/man-rowing-boat-medium-skin-tone.png",
    "revision": "45edc04b4d8e1450763ede0b872fd2fe"
  },
  {
    "url": "emoji/120/man-rowing-boat.png",
    "revision": "3babc570b850c367aee883330aa3c536"
  },
  {
    "url": "emoji/120/man-running-dark-skin-tone.png",
    "revision": "dce7408ad904b99895fe56ede9465eb0"
  },
  {
    "url": "emoji/120/man-running-light-skin-tone.png",
    "revision": "4c874e91df13ce4b768f330356b65f8d"
  },
  {
    "url": "emoji/120/man-running-medium-dark-skin-tone.png",
    "revision": "a0090bf8b60990340d256404d2ff1c53"
  },
  {
    "url": "emoji/120/man-running-medium-light-skin-tone.png",
    "revision": "0ba364a82e14121c4820225984d2bcf9"
  },
  {
    "url": "emoji/120/man-running-medium-skin-tone.png",
    "revision": "99b639d0a2392b87853531d266e21800"
  },
  {
    "url": "emoji/120/man-running.png",
    "revision": "4185d84ee2d282c17b6564e58d6c349e"
  },
  {
    "url": "emoji/120/man-scientist-dark-skin-tone.png",
    "revision": "54a6efc6acc8f4ffdd3957e31d909d0a"
  },
  {
    "url": "emoji/120/man-scientist-light-skin-tone.png",
    "revision": "0dce1aa606cf799e3ed250c262a4a296"
  },
  {
    "url": "emoji/120/man-scientist-medium-dark-skin-tone.png",
    "revision": "9579539b1a4cf0bff8c5e53107b797a6"
  },
  {
    "url": "emoji/120/man-scientist-medium-light-skin-tone.png",
    "revision": "050de99df73f96d227701520e31c51f7"
  },
  {
    "url": "emoji/120/man-scientist-medium-skin-tone.png",
    "revision": "1bc6491570f1a7cc15e592f163be48a9"
  },
  {
    "url": "emoji/120/man-scientist.png",
    "revision": "ed54f1659fde05e7ead1070271af2b6b"
  },
  {
    "url": "emoji/120/man-shrugging-dark-skin-tone.png",
    "revision": "06a7be66e24c4aba0a08c4f44b0f3235"
  },
  {
    "url": "emoji/120/man-shrugging-light-skin-tone.png",
    "revision": "c87704bab6b51dfe2b2a95a795521e0b"
  },
  {
    "url": "emoji/120/man-shrugging-medium-dark-skin-tone.png",
    "revision": "00cb6c74eb8a04514892eea3acd04048"
  },
  {
    "url": "emoji/120/man-shrugging-medium-light-skin-tone.png",
    "revision": "0fedd769e8cb418d42fa29104228dc0e"
  },
  {
    "url": "emoji/120/man-shrugging-medium-skin-tone.png",
    "revision": "cf26bff64e20b40443108bd896ddf752"
  },
  {
    "url": "emoji/120/man-shrugging.png",
    "revision": "15320c3c2dce3b75de18dae1ecbf7db7"
  },
  {
    "url": "emoji/120/man-singer-dark-skin-tone.png",
    "revision": "97e70127832cfa8e7ba67ed3597708da"
  },
  {
    "url": "emoji/120/man-singer-light-skin-tone.png",
    "revision": "06e644907787b1c10dfc5fb774a5a7b3"
  },
  {
    "url": "emoji/120/man-singer-medium-dark-skin-tone.png",
    "revision": "27eba0883dab83d66e33a8a4c991c32a"
  },
  {
    "url": "emoji/120/man-singer-medium-light-skin-tone.png",
    "revision": "1daa9b2c1e21fb422ab03cd0ace36f13"
  },
  {
    "url": "emoji/120/man-singer-medium-skin-tone.png",
    "revision": "e4ca5a64dfb597e23a7f0fc31467997c"
  },
  {
    "url": "emoji/120/man-singer.png",
    "revision": "80b3781d8b815214827c60f639588060"
  },
  {
    "url": "emoji/120/man-standing-dark-skin-tone.png",
    "revision": "b21fa10efc06217002e62f180fd9dacc"
  },
  {
    "url": "emoji/120/man-standing-light-skin-tone.png",
    "revision": "1abd0e07af1ca77680500befac630d7b"
  },
  {
    "url": "emoji/120/man-standing-medium-dark-skin-tone.png",
    "revision": "7f601c75cb9dad9926a23f547d0d6b99"
  },
  {
    "url": "emoji/120/man-standing-medium-light-skin-tone.png",
    "revision": "e90c246d04bb803d6fd2d984c778bafe"
  },
  {
    "url": "emoji/120/man-standing-medium-skin-tone.png",
    "revision": "43ff6d9d688e4ddf02be92442eda2d50"
  },
  {
    "url": "emoji/120/man-standing.png",
    "revision": "8ee187c0395c4d9126cbcd6972f5d645"
  },
  {
    "url": "emoji/120/man-student-dark-skin-tone.png",
    "revision": "de11cbf531aee576c7af41bb7411c4cd"
  },
  {
    "url": "emoji/120/man-student-light-skin-tone.png",
    "revision": "ca61c9d82f86670d5ca9552110cb1c3c"
  },
  {
    "url": "emoji/120/man-student-medium-dark-skin-tone.png",
    "revision": "4f00d56c90d40fcb7dc2b0da505002ae"
  },
  {
    "url": "emoji/120/man-student-medium-light-skin-tone.png",
    "revision": "8e459d8373e4ee57b925ce5a2946ffc5"
  },
  {
    "url": "emoji/120/man-student-medium-skin-tone.png",
    "revision": "24becd36354ae4bfaa22f89d3f5922c2"
  },
  {
    "url": "emoji/120/man-student.png",
    "revision": "9f02f770092207b3d2427820e416a720"
  },
  {
    "url": "emoji/120/man-superhero-dark-skin-tone.png",
    "revision": "e39b2922ffe381682b70df2969dfce92"
  },
  {
    "url": "emoji/120/man-superhero-light-skin-tone.png",
    "revision": "e5d55b38a0be276766fb5bbc361d434b"
  },
  {
    "url": "emoji/120/man-superhero-medium-dark-skin-tone.png",
    "revision": "71f119ce8492b8203d996fd36d0aa5ec"
  },
  {
    "url": "emoji/120/man-superhero-medium-light-skin-tone.png",
    "revision": "c0e7a0477f65d01ab0ca264493e62d36"
  },
  {
    "url": "emoji/120/man-superhero-medium-skin-tone.png",
    "revision": "774763ee0790de2920d08858e5acd385"
  },
  {
    "url": "emoji/120/man-superhero.png",
    "revision": "b84cea0525a6c6e6675ffd4b38325ff5"
  },
  {
    "url": "emoji/120/man-supervillain-dark-skin-tone.png",
    "revision": "45a7551cf1d00436f9d2db46cae7e685"
  },
  {
    "url": "emoji/120/man-supervillain-light-skin-tone.png",
    "revision": "3708bb20cd841e6cd046d18227d4d0e9"
  },
  {
    "url": "emoji/120/man-supervillain-medium-dark-skin-tone.png",
    "revision": "a04766bf556f7adf43c0f54ab46c717c"
  },
  {
    "url": "emoji/120/man-supervillain-medium-light-skin-tone.png",
    "revision": "839e81896de63f3ee43cc0c83681991b"
  },
  {
    "url": "emoji/120/man-supervillain-medium-skin-tone.png",
    "revision": "6042317b2a20e6cd575b956befe74628"
  },
  {
    "url": "emoji/120/man-supervillain.png",
    "revision": "c4f3a22e26ed668fc61c7bb3a8edba08"
  },
  {
    "url": "emoji/120/man-surfing-dark-skin-tone.png",
    "revision": "91b9029a5aa78992950578f13ddde921"
  },
  {
    "url": "emoji/120/man-surfing-light-skin-tone.png",
    "revision": "859a34d88aafb38c0f23ad821c3a5d6e"
  },
  {
    "url": "emoji/120/man-surfing-medium-dark-skin-tone.png",
    "revision": "188728a82b543c128cb87ec88bd34ba5"
  },
  {
    "url": "emoji/120/man-surfing-medium-light-skin-tone.png",
    "revision": "fbf7f5c44085b934844a17047a1f16ac"
  },
  {
    "url": "emoji/120/man-surfing-medium-skin-tone.png",
    "revision": "33d11cfdeb1f4b70f5b183354748ce1b"
  },
  {
    "url": "emoji/120/man-surfing.png",
    "revision": "5a34f395518a10a12df00b67b8b6da69"
  },
  {
    "url": "emoji/120/man-swimming-dark-skin-tone.png",
    "revision": "f8aca2d5955dfd2701fba6fa76be2cde"
  },
  {
    "url": "emoji/120/man-swimming-light-skin-tone.png",
    "revision": "f9abc04423581dfcdee9c0143899ac6a"
  },
  {
    "url": "emoji/120/man-swimming-medium-dark-skin-tone.png",
    "revision": "bc09403f55cad8e453827bcb44b3b2c2"
  },
  {
    "url": "emoji/120/man-swimming-medium-light-skin-tone.png",
    "revision": "c054b8184b1fc6ddec7e220a1ceacb8d"
  },
  {
    "url": "emoji/120/man-swimming-medium-skin-tone.png",
    "revision": "af776e030bfb9fbceae8c9f13c78f488"
  },
  {
    "url": "emoji/120/man-swimming.png",
    "revision": "633d4d36550428f98798d919ab3d7c69"
  },
  {
    "url": "emoji/120/man-teacher-dark-skin-tone.png",
    "revision": "142e017e8564b6d4815dcee962132bba"
  },
  {
    "url": "emoji/120/man-teacher-light-skin-tone.png",
    "revision": "93d28d27be7e55f98dc6151a284d7f6e"
  },
  {
    "url": "emoji/120/man-teacher-medium-dark-skin-tone.png",
    "revision": "06000d3b269f834b40d76df687ac911d"
  },
  {
    "url": "emoji/120/man-teacher-medium-light-skin-tone.png",
    "revision": "ca03251c0582897b03a1f0f1a7f8bfd7"
  },
  {
    "url": "emoji/120/man-teacher-medium-skin-tone.png",
    "revision": "b3d3e560fec219542c5a47b91eb7d81a"
  },
  {
    "url": "emoji/120/man-teacher.png",
    "revision": "66cd436f4cdf419bca26af3ae15a9dcb"
  },
  {
    "url": "emoji/120/man-technologist-dark-skin-tone.png",
    "revision": "1a80a9b62d50a466a2d7ef4930d37f03"
  },
  {
    "url": "emoji/120/man-technologist-light-skin-tone.png",
    "revision": "4edb2f4d9df1fe789a09a5de13e4d62c"
  },
  {
    "url": "emoji/120/man-technologist-medium-dark-skin-tone.png",
    "revision": "4cab6360c45b8397cd27dfb515e53fa4"
  },
  {
    "url": "emoji/120/man-technologist-medium-light-skin-tone.png",
    "revision": "bc1bd6a07315b4ffb21c36cdfab1b20d"
  },
  {
    "url": "emoji/120/man-technologist-medium-skin-tone.png",
    "revision": "06ef5d75df2b974ca6b9a8462189bc29"
  },
  {
    "url": "emoji/120/man-technologist.png",
    "revision": "21f3d1c2be2c26ce0a62d5ac5dd608b9"
  },
  {
    "url": "emoji/120/man-tipping-hand-dark-skin-tone.png",
    "revision": "527b72dea0eecde7d0520a1368db36f1"
  },
  {
    "url": "emoji/120/man-tipping-hand-light-skin-tone.png",
    "revision": "f191af3eb893063b5b277a412f87ba38"
  },
  {
    "url": "emoji/120/man-tipping-hand-medium-dark-skin-tone.png",
    "revision": "3a24a7ab69f2974e6dbb217e9224279e"
  },
  {
    "url": "emoji/120/man-tipping-hand-medium-light-skin-tone.png",
    "revision": "90ef5f0d6c98501dbdd25ff6235dcc9e"
  },
  {
    "url": "emoji/120/man-tipping-hand-medium-skin-tone.png",
    "revision": "eafa818ac8f37a6bc1749c62ad33ca5c"
  },
  {
    "url": "emoji/120/man-tipping-hand.png",
    "revision": "8f23c99dd8f8da9e05c4d84678b82364"
  },
  {
    "url": "emoji/120/man-vampire-dark-skin-tone.png",
    "revision": "edeb74ddfc5e833524e836bd26f64aff"
  },
  {
    "url": "emoji/120/man-vampire-light-skin-tone.png",
    "revision": "97f8bcb34617bb56dda16ba4bb14736b"
  },
  {
    "url": "emoji/120/man-vampire-medium-dark-skin-tone.png",
    "revision": "318a084548d38b242c93469c291438a0"
  },
  {
    "url": "emoji/120/man-vampire-medium-light-skin-tone.png",
    "revision": "99b5ec46906a08630ef72641ea52b495"
  },
  {
    "url": "emoji/120/man-vampire-medium-skin-tone.png",
    "revision": "fa3e47250458dfadbb4baf723475763b"
  },
  {
    "url": "emoji/120/man-vampire.png",
    "revision": "6db49ae32c4b9d57d8be273ddb67da7e"
  },
  {
    "url": "emoji/120/man-walking-dark-skin-tone.png",
    "revision": "54b7390978ffc533f26e00baf839a752"
  },
  {
    "url": "emoji/120/man-walking-light-skin-tone.png",
    "revision": "fa5321ca2ac06ba056062db48e1623b9"
  },
  {
    "url": "emoji/120/man-walking-medium-dark-skin-tone.png",
    "revision": "6d8cc5835ea5ea256b5d1c3e06a0ac6b"
  },
  {
    "url": "emoji/120/man-walking-medium-light-skin-tone.png",
    "revision": "7e0a05b17c6859c0f04d80dbe851197b"
  },
  {
    "url": "emoji/120/man-walking-medium-skin-tone.png",
    "revision": "ded97d31c88bbf9457de39f4e6837a14"
  },
  {
    "url": "emoji/120/man-walking.png",
    "revision": "126e4bc3efc60cb49c5fcf7401b4aeff"
  },
  {
    "url": "emoji/120/man-wearing-turban-dark-skin-tone.png",
    "revision": "9adc1bfc49cc65fbb8cb4762eb767438"
  },
  {
    "url": "emoji/120/man-wearing-turban-light-skin-tone.png",
    "revision": "348a4f0c99e99f087f5b4f0355133f18"
  },
  {
    "url": "emoji/120/man-wearing-turban-medium-dark-skin-tone.png",
    "revision": "dd63b72fc6a0e4121173a00c083fd3ef"
  },
  {
    "url": "emoji/120/man-wearing-turban-medium-light-skin-tone.png",
    "revision": "053872f00b902515b59fe877120584b6"
  },
  {
    "url": "emoji/120/man-wearing-turban-medium-skin-tone.png",
    "revision": "c0f3ac603e1fc9096f2a78dfc264f4d0"
  },
  {
    "url": "emoji/120/man-wearing-turban.png",
    "revision": "4a6f6cda229a553fe0a5325893c83261"
  },
  {
    "url": "emoji/120/man-white-hair.png",
    "revision": "006299482e7fb62a435dc972dd10a749"
  },
  {
    "url": "emoji/120/man-with-white-cane-dark-skin-tone.png",
    "revision": "1f2c13726d505651376b5efef5170950"
  },
  {
    "url": "emoji/120/man-with-white-cane-light-skin-tone.png",
    "revision": "74ddb3d74384b1579d52596c487b0c12"
  },
  {
    "url": "emoji/120/man-with-white-cane-medium-dark-skin-tone.png",
    "revision": "60fa6a0c3efc3584dc6af71cfd3a0d17"
  },
  {
    "url": "emoji/120/man-with-white-cane-medium-light-skin-tone.png",
    "revision": "e01117e527926c4c46dfb4a29afa4e44"
  },
  {
    "url": "emoji/120/man-with-white-cane-medium-skin-tone.png",
    "revision": "a65ec9eb778332a2b9c770a806f142f5"
  },
  {
    "url": "emoji/120/man-with-white-cane.png",
    "revision": "3e64d93a19ce2b526cfb6dcbca38e5bc"
  },
  {
    "url": "emoji/120/man-zombie-dark-skin-tone.png",
    "revision": "2e1ac52366b4c25f05bc5aabde2372c0"
  },
  {
    "url": "emoji/120/man-zombie-light-skin-tone.png",
    "revision": "5eba806d190d9e0a3c47ee7cd44d1c6d"
  },
  {
    "url": "emoji/120/man-zombie-medium-dark-skin-tone.png",
    "revision": "da5d8936a41f07e8659bc5b6942cefc9"
  },
  {
    "url": "emoji/120/man-zombie-medium-light-skin-tone.png",
    "revision": "ecb97c39aa9b88e34690a0d55f6f68aa"
  },
  {
    "url": "emoji/120/man-zombie-medium-skin-tone.png",
    "revision": "41ea7371867f2bcfcd4f94c7bc48f842"
  },
  {
    "url": "emoji/120/man-zombie.png",
    "revision": "0913286b2155cd2cc95f103099712365"
  },
  {
    "url": "emoji/120/man.png",
    "revision": "e44b34e775368e0af241a1b06e292d50"
  },
  {
    "url": "emoji/120/mango.png",
    "revision": "b779f0c8f06c9c61bb54afd1185dec0b"
  },
  {
    "url": "emoji/120/mans-shoe.png",
    "revision": "517a6d17b972f895772a63125be61650"
  },
  {
    "url": "emoji/120/mantelpiece-clock.png",
    "revision": "7da5c7ce79c59976b0ef76ba14854fd6"
  },
  {
    "url": "emoji/120/manual-wheelchair.png",
    "revision": "6aa02e7cd058d63ff10e527849c189bd"
  },
  {
    "url": "emoji/120/map-of-japan.png",
    "revision": "c3a19ea7b1f3251721ef24c9e3034c2c"
  },
  {
    "url": "emoji/120/maple-leaf.png",
    "revision": "4fb4b81af7fa308a7a3fe387522fd782"
  },
  {
    "url": "emoji/120/martial-arts-uniform.png",
    "revision": "3847f2a89a347914c4dff7d7e0d4eb78"
  },
  {
    "url": "emoji/120/mate.png",
    "revision": "5fa277644f7b9d2e5e39dfbb89520f24"
  },
  {
    "url": "emoji/120/meat-on-bone.png",
    "revision": "8b812495cc07740b75e8367005447e49"
  },
  {
    "url": "emoji/120/mechanical-arm.png",
    "revision": "a21be527af6d934166b13ee1f999ebc2"
  },
  {
    "url": "emoji/120/mechanical-leg.png",
    "revision": "bca911d8507037c12aa45d29be8f3a1c"
  },
  {
    "url": "emoji/120/medical-symbol.png",
    "revision": "2e0281339fe181948f035370fe98c1f1"
  },
  {
    "url": "emoji/120/medium-dark-skin-tone.png",
    "revision": "c6ef533332a2eead2cc01140aaf9ea87"
  },
  {
    "url": "emoji/120/medium-light-skin-tone.png",
    "revision": "0e0eeef2502552405618e53133198f88"
  },
  {
    "url": "emoji/120/medium-skin-tone.png",
    "revision": "a4c2c101e151115cca1fee1d08507d94"
  },
  {
    "url": "emoji/120/megaphone.png",
    "revision": "b14de7856a1041ac5e61eef95cb73e68"
  },
  {
    "url": "emoji/120/melon.png",
    "revision": "58463842e7c3d46e5fa957b368581b62"
  },
  {
    "url": "emoji/120/memo.png",
    "revision": "6af8f7525c2beedde1b9e14dd06c0de1"
  },
  {
    "url": "emoji/120/men-holding-hands-dark-skin-tone-light-skin-tone.png",
    "revision": "dd82b5c5697ea1f2c2e869b9f20369ea"
  },
  {
    "url": "emoji/120/men-holding-hands-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "a89ffeb1bf50e6c085ccff56fc77446d"
  },
  {
    "url": "emoji/120/men-holding-hands-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "284609d272d41f8d161599df468afaf6"
  },
  {
    "url": "emoji/120/men-holding-hands-dark-skin-tone-medium-skin-tone.png",
    "revision": "4a5b005323723e4bd66cd3094b3c8a7e"
  },
  {
    "url": "emoji/120/men-holding-hands-dark-skin-tone.png",
    "revision": "ac71a2db11d3a4cb70844a4823eca485"
  },
  {
    "url": "emoji/120/men-holding-hands-light-skin-tone.png",
    "revision": "a42500314baa33ea9c087ef64993ebf9"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "7e74d7e5a1284769f92010dffcff131d"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "ffe47df4cbceee1ae32c1615531acb41"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "99ff636add8914cad7aafa69e3a7861e"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-dark-skin-tone.png",
    "revision": "7aa17e6e8f02233ded19f944615173f7"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-light-skin-tone-light-skin-tone.png",
    "revision": "03857176e626b2fa03dc621c250215f1"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-light-skin-tone.png",
    "revision": "a7228e207ea110799b141529e7c6b71c"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-skin-tone-light-skin-tone.png",
    "revision": "31f51836b3e8dcecc7d9947c3cb69d7f"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "aab436409957d7178af17a18b2ed7b4a"
  },
  {
    "url": "emoji/120/men-holding-hands-medium-skin-tone.png",
    "revision": "d26a5d77937db1304684d51bbc7c9ddc"
  },
  {
    "url": "emoji/120/men-holding-hands.png",
    "revision": "33847c09bd2481f89b67d8076c184341"
  },
  {
    "url": "emoji/120/men-with-bunny-ears-partying-dark-skin-tone.png",
    "revision": "68683d0c5790c527c89e32368ba8e0fc"
  },
  {
    "url": "emoji/120/men-with-bunny-ears-partying-light-skin-tone.png",
    "revision": "b0947535d3d94484c7d032cfec5544e9"
  },
  {
    "url": "emoji/120/men-with-bunny-ears-partying-medium-dark-skin-tone.png",
    "revision": "d80cf68ede956720a1852a9b5f0210f5"
  },
  {
    "url": "emoji/120/men-with-bunny-ears-partying-medium-light-skin-tone.png",
    "revision": "b293edaeacf7ef4ecfb22d92d43248c4"
  },
  {
    "url": "emoji/120/men-with-bunny-ears-partying-medium-skin-tone.png",
    "revision": "44d23aa49d862e1685cc20bbb3c9b6b3"
  },
  {
    "url": "emoji/120/men-with-bunny-ears.png",
    "revision": "66d13e266c0e5f28d7c91478294ede13"
  },
  {
    "url": "emoji/120/men-wrestling-dark-skin-tone.png",
    "revision": "1f17f1b925346bee1f527c0ff30cf974"
  },
  {
    "url": "emoji/120/men-wrestling-light-skin-tone.png",
    "revision": "7babfb3957ce8176b2e74e2d7bd256a9"
  },
  {
    "url": "emoji/120/men-wrestling-medium-dark-skin-tone.png",
    "revision": "714d9fd096f7d067b6a23c990beb2432"
  },
  {
    "url": "emoji/120/men-wrestling-medium-light-skin-tone.png",
    "revision": "c5c96fd14e827e3fd28eaf452488fa29"
  },
  {
    "url": "emoji/120/men-wrestling-medium-skin-tone.png",
    "revision": "ff239d18f1733f791d390046df488cd7"
  },
  {
    "url": "emoji/120/men-wrestling.png",
    "revision": "73b97f6e9fc52e96249be7f97671b2ac"
  },
  {
    "url": "emoji/120/menorah.png",
    "revision": "e685abe137db416e1b816d659255816b"
  },
  {
    "url": "emoji/120/mens-room.png",
    "revision": "2caf560681fde55f2b863b4f638d982e"
  },
  {
    "url": "emoji/120/mermaid-dark-skin-tone.png",
    "revision": "719e4bf486b77662decd6559ad1c5b9d"
  },
  {
    "url": "emoji/120/mermaid-light-skin-tone.png",
    "revision": "59dabf40909d580456e4d1c9820c21ff"
  },
  {
    "url": "emoji/120/mermaid-medium-dark-skin-tone.png",
    "revision": "5f5c820d9040a9044551a8eae5586a8e"
  },
  {
    "url": "emoji/120/mermaid-medium-light-skin-tone.png",
    "revision": "c6e680c7f612f00e2a71be9c2f6e962f"
  },
  {
    "url": "emoji/120/mermaid-medium-skin-tone.png",
    "revision": "670b3039391424f5243a83d08662c83c"
  },
  {
    "url": "emoji/120/mermaid.png",
    "revision": "fdbceca58414be5531d81d7829d083cd"
  },
  {
    "url": "emoji/120/merman-dark-skin-tone.png",
    "revision": "6f890e12008ba7a1f33a1a8d9bdfb702"
  },
  {
    "url": "emoji/120/merman-light-skin-tone.png",
    "revision": "bc36543be5fdfff44ca67bb4a52cd396"
  },
  {
    "url": "emoji/120/merman-medium-dark-skin-tone.png",
    "revision": "be29cd001462c9edbef5da2cac6888fa"
  },
  {
    "url": "emoji/120/merman-medium-light-skin-tone.png",
    "revision": "aa7ac63cd76b74a12edb304a10a3cb1c"
  },
  {
    "url": "emoji/120/merman-medium-skin-tone.png",
    "revision": "fa76c1fc8b80fdbaba47d2e9d1e68b17"
  },
  {
    "url": "emoji/120/merman.png",
    "revision": "e1335002bbe6038ac0eb417be5e77594"
  },
  {
    "url": "emoji/120/merperson-dark-skin-tone.png",
    "revision": "91a887039a47d14c0f8cc398812cd6c3"
  },
  {
    "url": "emoji/120/merperson-light-skin-tone.png",
    "revision": "29697296844bcfeb5595b97e023fa2ec"
  },
  {
    "url": "emoji/120/merperson-medium-dark-skin-tone.png",
    "revision": "121a18a3051d2f8fe5e8ab4fb3e496c1"
  },
  {
    "url": "emoji/120/merperson-medium-light-skin-tone.png",
    "revision": "43667be8019851bc6e24d900be703f26"
  },
  {
    "url": "emoji/120/merperson-medium-skin-tone.png",
    "revision": "faa122340e8e03a8cd20dba1d10eef1d"
  },
  {
    "url": "emoji/120/merperson.png",
    "revision": "20a69c904f43ecf99627d215f6e08a81"
  },
  {
    "url": "emoji/120/metro.png",
    "revision": "317bca82b00df9e272c0b046da6b31ac"
  },
  {
    "url": "emoji/120/microbe.png",
    "revision": "cd843886aeaed7d4cc2106a58482eb14"
  },
  {
    "url": "emoji/120/microphone.png",
    "revision": "9cb1673bf7fd1cf8cb4def334c0505f1"
  },
  {
    "url": "emoji/120/microscope.png",
    "revision": "47435bc9ef8109c450f353e1db36b22c"
  },
  {
    "url": "emoji/120/middle-finger-dark-skin-tone.png",
    "revision": "23569deea38fddfd08a01812d614cf14"
  },
  {
    "url": "emoji/120/middle-finger-light-skin-tone.png",
    "revision": "e124eb62ba8238ace775e408260f130e"
  },
  {
    "url": "emoji/120/middle-finger-medium-dark-skin-tone.png",
    "revision": "64b449e87bb8dd433cd3bda54183218d"
  },
  {
    "url": "emoji/120/middle-finger-medium-light-skin-tone.png",
    "revision": "ffa757c8c5928322003c7023b32391ad"
  },
  {
    "url": "emoji/120/middle-finger-medium-skin-tone.png",
    "revision": "f20b869ad36ada6ffda62ed7fa7b199f"
  },
  {
    "url": "emoji/120/middle-finger.png",
    "revision": "6eb164707b48305a7ad49e8202c4201a"
  },
  {
    "url": "emoji/120/military-medal.png",
    "revision": "347b14b8db318d4098cf52050e8322be"
  },
  {
    "url": "emoji/120/milky-way.png",
    "revision": "76b54076829a6afea81bb5036d513bdc"
  },
  {
    "url": "emoji/120/minibus.png",
    "revision": "d24394b83f891f64d4bde9cc3b24777e"
  },
  {
    "url": "emoji/120/minus.png",
    "revision": "71db727e226824dc38e5a6cfaefdefce"
  },
  {
    "url": "emoji/120/moai.png",
    "revision": "3386725c149409ef4d99b3d1b4e92eb8"
  },
  {
    "url": "emoji/120/mobile-phone-off.png",
    "revision": "cd7a00553244888e1a91806cffb29e05"
  },
  {
    "url": "emoji/120/mobile-phone-with-arrow.png",
    "revision": "21d4f55908fb31005d97a9b4080c96e4"
  },
  {
    "url": "emoji/120/mobile-phone.png",
    "revision": "75f7f50d3ec83490efdb24f1ebb53ff5"
  },
  {
    "url": "emoji/120/money-bag.png",
    "revision": "de683045b4263fec8edbb27f41fcc4f6"
  },
  {
    "url": "emoji/120/money-mouth-face.png",
    "revision": "49a1f358855e39cf18ef0524551bf727"
  },
  {
    "url": "emoji/120/money-with-wings.png",
    "revision": "78785653e5798c34e7c5137a71be475f"
  },
  {
    "url": "emoji/120/monkey-face.png",
    "revision": "6a5c1819f1ddb96c227e0e5f0158eb35"
  },
  {
    "url": "emoji/120/monkey.png",
    "revision": "21286ec4ecb7cd882599d9182a0de0c4"
  },
  {
    "url": "emoji/120/monorail.png",
    "revision": "f1240b9031c4c6ff157a95650931a866"
  },
  {
    "url": "emoji/120/moon-cake.png",
    "revision": "ecf745f0e8ca2173e8d9b815f522fcc2"
  },
  {
    "url": "emoji/120/moon-viewing-ceremony.png",
    "revision": "80b570dcc5fbaef8d4ad2f98ac7755de"
  },
  {
    "url": "emoji/120/mosque.png",
    "revision": "1cc66607e098151fbb7c1003afc4c746"
  },
  {
    "url": "emoji/120/mosquito.png",
    "revision": "1020ff92aae9f16b8cef56a44c77afda"
  },
  {
    "url": "emoji/120/motor-boat.png",
    "revision": "751bf8f2bcb6c91e891b0844a80a3a3e"
  },
  {
    "url": "emoji/120/motor-scooter.png",
    "revision": "4a08f9024d2a2e85ff7d4f87c38fa257"
  },
  {
    "url": "emoji/120/motorcycle.png",
    "revision": "10dbd01f87821c66e0019351b776befc"
  },
  {
    "url": "emoji/120/motorized-wheelchair.png",
    "revision": "c31fadfd177abb5a1b4583f851c557df"
  },
  {
    "url": "emoji/120/motorway.png",
    "revision": "d843e232860b8f50f771f1d697f0806b"
  },
  {
    "url": "emoji/120/mount-fuji.png",
    "revision": "519eba3aef3a04ae3ffac3a78bd4abe3"
  },
  {
    "url": "emoji/120/mountain-cableway.png",
    "revision": "964bda9ae532cebcd289c6159d1bfa8b"
  },
  {
    "url": "emoji/120/mountain-railway.png",
    "revision": "734678460319e028dc9b80816819110a"
  },
  {
    "url": "emoji/120/mountain.png",
    "revision": "5bbae0a1bdf5a00a50dcd60a86443b01"
  },
  {
    "url": "emoji/120/mouse-face.png",
    "revision": "c2c50d7f0ac27d41dddc3a925e2f74c8"
  },
  {
    "url": "emoji/120/mouse.png",
    "revision": "53e7716949ce8fcdebae186b4e6eb48a"
  },
  {
    "url": "emoji/120/mouth.png",
    "revision": "d16f7ffdf0b1cca342df654451f878cf"
  },
  {
    "url": "emoji/120/movie-camera.png",
    "revision": "f57a6caf74d2897e707d85a4d62d2368"
  },
  {
    "url": "emoji/120/mrs-claus-dark-skin-tone.png",
    "revision": "927915f450991345e7521ef7c7e2c8d9"
  },
  {
    "url": "emoji/120/mrs-claus-light-skin-tone.png",
    "revision": "d213714348f697aedae44682c51aebf8"
  },
  {
    "url": "emoji/120/mrs-claus-medium-dark-skin-tone.png",
    "revision": "4ea5c6b452b076040a5a848c4afc79e6"
  },
  {
    "url": "emoji/120/mrs-claus-medium-light-skin-tone.png",
    "revision": "241707a9c622e24ad0eb476dfe181a7d"
  },
  {
    "url": "emoji/120/mrs-claus-medium-skin-tone.png",
    "revision": "f8a6008995d8001aa878a2c15021a0db"
  },
  {
    "url": "emoji/120/mrs-claus.png",
    "revision": "1d072aa059a1a210b14b47a62ff1623a"
  },
  {
    "url": "emoji/120/multiply.png",
    "revision": "476c1cbf6275542d29a29e88eab1bc22"
  },
  {
    "url": "emoji/120/mushroom.png",
    "revision": "8cfced8790034f906cf4dd6232e4a244"
  },
  {
    "url": "emoji/120/musical-keyboard.png",
    "revision": "8e4c178f10ccc9558d875bcdb1bb8f4a"
  },
  {
    "url": "emoji/120/musical-note.png",
    "revision": "8668e78fff48fd7c7bf292a4705da019"
  },
  {
    "url": "emoji/120/musical-notes.png",
    "revision": "540addd9b28ed26144f1ab3dc4bff10f"
  },
  {
    "url": "emoji/120/musical-score.png",
    "revision": "0b37896ed18d7114d4126049e3583121"
  },
  {
    "url": "emoji/120/muted-speaker.png",
    "revision": "1a0a17be2991b4aafd331a83b3b00635"
  },
  {
    "url": "emoji/120/nail-polish-dark-skin-tone.png",
    "revision": "67baf9dddf5f36d7b3c78ad997a32341"
  },
  {
    "url": "emoji/120/nail-polish-light-skin-tone.png",
    "revision": "43673c97dfe3cba434d5958553aed91a"
  },
  {
    "url": "emoji/120/nail-polish-medium-dark-skin-tone.png",
    "revision": "5783a0ac13c1edf265a79f0eecabe381"
  },
  {
    "url": "emoji/120/nail-polish-medium-light-skin-tone.png",
    "revision": "e67637ea97d9ddf295ebc202d491eaae"
  },
  {
    "url": "emoji/120/nail-polish-medium-skin-tone.png",
    "revision": "a251c8e3801669a6e7b03ae5ed5074b1"
  },
  {
    "url": "emoji/120/nail-polish.png",
    "revision": "80685d52c881744496ec0d4859be8fd5"
  },
  {
    "url": "emoji/120/name-badge.png",
    "revision": "671a3fe13a149a107deecc5edf91b582"
  },
  {
    "url": "emoji/120/national-park.png",
    "revision": "bffad3ca098ed789012d749e7c7ce625"
  },
  {
    "url": "emoji/120/nauseated-face.png",
    "revision": "625951ade0a2d15d91856b4a2ef650c3"
  },
  {
    "url": "emoji/120/nazar-amulet.png",
    "revision": "db928b927783c28ba621ca9e6b0b7944"
  },
  {
    "url": "emoji/120/necktie.png",
    "revision": "4b0eff20a98c9a98c0186cb3c40e895c"
  },
  {
    "url": "emoji/120/nerd-face.png",
    "revision": "310474aaff2891ef23e9a8f3fbf5d6b6"
  },
  {
    "url": "emoji/120/neutral-face.png",
    "revision": "c406b0e23ffdc271062826761df406f7"
  },
  {
    "url": "emoji/120/new-button.png",
    "revision": "c845c43f8622df82949c8004427eb517"
  },
  {
    "url": "emoji/120/new-moon-face.png",
    "revision": "372d1304beab5a06cce8bf125399cf89"
  },
  {
    "url": "emoji/120/new-moon.png",
    "revision": "fc116954dca639b3f4e75d1562a20d03"
  },
  {
    "url": "emoji/120/newspaper.png",
    "revision": "9c8e8437aad967ee94dbccceba0c7987"
  },
  {
    "url": "emoji/120/next-track-button.png",
    "revision": "65487d02edde1b30ca81b2e76897f538"
  },
  {
    "url": "emoji/120/ng-button.png",
    "revision": "3e4448685b30025cc4148aa3fe8ce2af"
  },
  {
    "url": "emoji/120/night-with-stars.png",
    "revision": "d75910b6251bf6b938509c6a5fe8de11"
  },
  {
    "url": "emoji/120/nine-oclock.png",
    "revision": "4d1a4ab151b0bb59bad38e0a756e3a87"
  },
  {
    "url": "emoji/120/nine-thirty.png",
    "revision": "edbab4c007eb1a5623fd57e3348e7b72"
  },
  {
    "url": "emoji/120/ninja-cat.png",
    "revision": "53272d4157acc3ed9623b7e214afeb27"
  },
  {
    "url": "emoji/120/no-bicycles.png",
    "revision": "47bbd415a8918fa2e7391d1cdda882f2"
  },
  {
    "url": "emoji/120/no-entry.png",
    "revision": "39baa8043c4ec73cb1de47f6c23d122a"
  },
  {
    "url": "emoji/120/no-littering.png",
    "revision": "5027d538f869c0b082beb96300a9a8ce"
  },
  {
    "url": "emoji/120/no-mobile-phones.png",
    "revision": "2e77c0fe63aad15c6a211d0322146621"
  },
  {
    "url": "emoji/120/no-one-under-eighteen.png",
    "revision": "33ba7c77203169e9b786b468e4db8f7f"
  },
  {
    "url": "emoji/120/no-pedestrians.png",
    "revision": "9f68d6ad426785a19c8f5fa34d61ef3e"
  },
  {
    "url": "emoji/120/no-smoking.png",
    "revision": "6e8ca1151712c95aef9b46177b24d9a1"
  },
  {
    "url": "emoji/120/non-potable-water.png",
    "revision": "9e23e53c14a65b32630bd0157af6245b"
  },
  {
    "url": "emoji/120/nose-dark-skin-tone.png",
    "revision": "b71949948e77651bb428f4634790af68"
  },
  {
    "url": "emoji/120/nose-light-skin-tone.png",
    "revision": "9f6e7171890453e3b99ff22cc7545c89"
  },
  {
    "url": "emoji/120/nose-medium-dark-skin-tone.png",
    "revision": "476a79d71480f95b9b2f3c322eb8f8df"
  },
  {
    "url": "emoji/120/nose-medium-light-skin-tone.png",
    "revision": "8215b00ad3ad2aa56a979981c4c27399"
  },
  {
    "url": "emoji/120/nose-medium-skin-tone.png",
    "revision": "e3f7aa1b2de15ef0ace2cfe47b16e4a8"
  },
  {
    "url": "emoji/120/nose.png",
    "revision": "f1638814c7bde3a04138d2cf78ed0055"
  },
  {
    "url": "emoji/120/notebook-with-decorative-cover.png",
    "revision": "5e02385193097301b76df935be7489e3"
  },
  {
    "url": "emoji/120/notebook.png",
    "revision": "6a3c3314b0f388be889dabc0a96a1ac7"
  },
  {
    "url": "emoji/120/nut-and-bolt.png",
    "revision": "71c92df891b47363321da85c6ff7801f"
  },
  {
    "url": "emoji/120/o-button-blood-type.png",
    "revision": "124fec78f861667674c864fec6eff47f"
  },
  {
    "url": "emoji/120/octopus.png",
    "revision": "73cc2af99c281a71cc67ac5ed11b8162"
  },
  {
    "url": "emoji/120/oden.png",
    "revision": "93103d1967cad24fb1a78c692dd3e781"
  },
  {
    "url": "emoji/120/office-building.png",
    "revision": "726fd7fcae6438703a647cb51875dc5e"
  },
  {
    "url": "emoji/120/ogre.png",
    "revision": "3e0341949a53041096b2ff2eb091f06b"
  },
  {
    "url": "emoji/120/oil-drum.png",
    "revision": "7a752a8690ed3e55682f1fd3467b1061"
  },
  {
    "url": "emoji/120/ok-button.png",
    "revision": "a382212ba9be440a90a0cb63d1d588c3"
  },
  {
    "url": "emoji/120/ok-hand-dark-skin-tone.png",
    "revision": "08fec915f404ec3ee5eadf560f82d1af"
  },
  {
    "url": "emoji/120/ok-hand-light-skin-tone.png",
    "revision": "8f3377b4ce8eaecf50958908009a1590"
  },
  {
    "url": "emoji/120/ok-hand-medium-dark-skin-tone.png",
    "revision": "c081a554dd381fe81ba0f12d0a1c6b8b"
  },
  {
    "url": "emoji/120/ok-hand-medium-light-skin-tone.png",
    "revision": "91aa293529ec97762269764504abe394"
  },
  {
    "url": "emoji/120/ok-hand-medium-skin-tone.png",
    "revision": "a11612716ebdd5a8c7ac8774cd0e5c44"
  },
  {
    "url": "emoji/120/ok-hand.png",
    "revision": "aff919947282071524f5bfd72402043e"
  },
  {
    "url": "emoji/120/old-key.png",
    "revision": "01b79b419c759f9ae23c2f5d8244abef"
  },
  {
    "url": "emoji/120/old-man-dark-skin-tone.png",
    "revision": "743f86798e0e52aeb26a990e43baceb8"
  },
  {
    "url": "emoji/120/old-man-light-skin-tone.png",
    "revision": "386593d4430700b295fefc6d0f7be084"
  },
  {
    "url": "emoji/120/old-man-medium-dark-skin-tone.png",
    "revision": "02715406055cc6d5896ea52dc661f001"
  },
  {
    "url": "emoji/120/old-man-medium-light-skin-tone.png",
    "revision": "ffb5fb583346069351a7aaacd9d6890f"
  },
  {
    "url": "emoji/120/old-man-medium-skin-tone.png",
    "revision": "9ccbdfb9584549afb2aa3fd534e00e18"
  },
  {
    "url": "emoji/120/old-man.png",
    "revision": "7a674eae2f984aac3210856b18893ff2"
  },
  {
    "url": "emoji/120/old-woman-dark-skin-tone.png",
    "revision": "2630e910dc6cdc19a1dcaed8ac5c7d77"
  },
  {
    "url": "emoji/120/old-woman-light-skin-tone.png",
    "revision": "ddf29ba4dbe6d3fd68db51599a45b007"
  },
  {
    "url": "emoji/120/old-woman-medium-dark-skin-tone.png",
    "revision": "f42cd942d34da9168a27ada9aa5de5c7"
  },
  {
    "url": "emoji/120/old-woman-medium-light-skin-tone.png",
    "revision": "e0af76133a147e18885a876a1ccdbc5e"
  },
  {
    "url": "emoji/120/old-woman-medium-skin-tone.png",
    "revision": "c39daac1d691790ae80d4217096c2894"
  },
  {
    "url": "emoji/120/old-woman.png",
    "revision": "a7020847427d0715b06179b1822174e8"
  },
  {
    "url": "emoji/120/older-person-dark-skin-tone.png",
    "revision": "ff80c3bb7814f0d7ab878b3c979475f6"
  },
  {
    "url": "emoji/120/older-person-light-skin-tone.png",
    "revision": "2aeff1db8eff425e9e4d0f6c7a502ce7"
  },
  {
    "url": "emoji/120/older-person-medium-dark-skin-tone.png",
    "revision": "02e618abc2cf26d180070a60c7a0d8e8"
  },
  {
    "url": "emoji/120/older-person-medium-light-skin-tone.png",
    "revision": "1dab153fbf43ebb46e56131c5a6364b4"
  },
  {
    "url": "emoji/120/older-person-medium-skin-tone.png",
    "revision": "26d393e1957657a8dfd6bf96e1b31a57"
  },
  {
    "url": "emoji/120/older-person.png",
    "revision": "2be5fc667e7e1c39e8a2f558b112b003"
  },
  {
    "url": "emoji/120/om.png",
    "revision": "5cbe9b2864f23eb9260ffbc3c3df12b8"
  },
  {
    "url": "emoji/120/on-arrow.png",
    "revision": "eaff93e057a03166482bc29d3718ba98"
  },
  {
    "url": "emoji/120/oncoming-automobile.png",
    "revision": "c476d5052bfa1bca9ecd0311fde19e3a"
  },
  {
    "url": "emoji/120/oncoming-bus.png",
    "revision": "d7fc9bc50093685f1262cec34ff9520b"
  },
  {
    "url": "emoji/120/oncoming-fist-dark-skin-tone.png",
    "revision": "84c90d742fe8e76894ec6601ca85fbe5"
  },
  {
    "url": "emoji/120/oncoming-fist-light-skin-tone.png",
    "revision": "3cf54f1b9f0f054c8e4a44e032a43d04"
  },
  {
    "url": "emoji/120/oncoming-fist-medium-dark-skin-tone.png",
    "revision": "a2f54046b917b951e8d8122a619ed1f3"
  },
  {
    "url": "emoji/120/oncoming-fist-medium-light-skin-tone.png",
    "revision": "2393ea1343ad457a7b566155dfb83265"
  },
  {
    "url": "emoji/120/oncoming-fist-medium-skin-tone.png",
    "revision": "01adbbd2916a75b9226bf58a4632860d"
  },
  {
    "url": "emoji/120/oncoming-fist.png",
    "revision": "50a043b09380747ff8a4836ae08a6b92"
  },
  {
    "url": "emoji/120/oncoming-police-car.png",
    "revision": "6cbae21a9c88a1310c40df5602349c36"
  },
  {
    "url": "emoji/120/oncoming-taxi.png",
    "revision": "54d211929cc2387b8ffa4206b5301151"
  },
  {
    "url": "emoji/120/one-oclock.png",
    "revision": "0eba64d4385c197326cf236739765bd2"
  },
  {
    "url": "emoji/120/one-piece-swimsuit.png",
    "revision": "5e1d8f882d6da3df6f13b6e0ac88184b"
  },
  {
    "url": "emoji/120/one-thirty.png",
    "revision": "1d85b1978a2dd3b14773f29122f26cf9"
  },
  {
    "url": "emoji/120/onion.png",
    "revision": "f74a328a679817c8a858f5da7a5a44c4"
  },
  {
    "url": "emoji/120/open-book.png",
    "revision": "0f30e1b5257aee8560493575e5e7ecc5"
  },
  {
    "url": "emoji/120/open-file-folder.png",
    "revision": "e7633697bed9397ac88a7e3bb2c0e5f8"
  },
  {
    "url": "emoji/120/open-hands-dark-skin-tone.png",
    "revision": "c0309b90a8a2add67e78834bfdd4e776"
  },
  {
    "url": "emoji/120/open-hands-light-skin-tone.png",
    "revision": "c270eaa8053bb88fd456be0ab590ab43"
  },
  {
    "url": "emoji/120/open-hands-medium-dark-skin-tone.png",
    "revision": "66496f121308a90217b9b40061a54d47"
  },
  {
    "url": "emoji/120/open-hands-medium-light-skin-tone.png",
    "revision": "3c9d4aadf885f0f0cb95bd53f1f72dfd"
  },
  {
    "url": "emoji/120/open-hands-medium-skin-tone.png",
    "revision": "814c858471ebc633bef0b67f61936577"
  },
  {
    "url": "emoji/120/open-hands.png",
    "revision": "36912b94c7c05250074b02c5ff1665bb"
  },
  {
    "url": "emoji/120/open-mailbox-with-lowered-flag.png",
    "revision": "9d8af10854957661e027ab8369dc7519"
  },
  {
    "url": "emoji/120/open-mailbox-with-raised-flag.png",
    "revision": "f9b287c1ee3a7cb560b4ddf4dbf59b80"
  },
  {
    "url": "emoji/120/ophiuchus.png",
    "revision": "53857e3ee5edbb0eff2f23b84c6c5ed8"
  },
  {
    "url": "emoji/120/optical-disk.png",
    "revision": "6accd2f0da12c7cb5a4eb99ed9715b23"
  },
  {
    "url": "emoji/120/orange-book.png",
    "revision": "d494971f71a7cfd155588317c91d9044"
  },
  {
    "url": "emoji/120/orange-heart.png",
    "revision": "4936696748de3578637da5ab3f241080"
  },
  {
    "url": "emoji/120/orangutan.png",
    "revision": "98df19f3da50547f42934a5596e9c821"
  },
  {
    "url": "emoji/120/orthodox-cross.png",
    "revision": "a032bf5766049497cb556ab9e389a166"
  },
  {
    "url": "emoji/120/otter.png",
    "revision": "848ca8e58d759eab34449ebce7cd88fa"
  },
  {
    "url": "emoji/120/outbox-tray.png",
    "revision": "c680679790558b4af30295c0dc7782e5"
  },
  {
    "url": "emoji/120/owl.png",
    "revision": "0227facce10880c76af2547dd7ef6382"
  },
  {
    "url": "emoji/120/ox.png",
    "revision": "55919156259e2671fae987c8f595def5"
  },
  {
    "url": "emoji/120/oyster.png",
    "revision": "73462accbcfa41d1646d3bd5808abace"
  },
  {
    "url": "emoji/120/p-button.png",
    "revision": "d7d10a708066322a25af077c968f94c0"
  },
  {
    "url": "emoji/120/package.png",
    "revision": "cb6ae221a9cdbb60c8afd2e9bba1d2c1"
  },
  {
    "url": "emoji/120/page-facing-up.png",
    "revision": "bf24092448ef3ffac20231c5e52b50de"
  },
  {
    "url": "emoji/120/page-with-curl.png",
    "revision": "7bd65ea1c473dfb4378f852d00359348"
  },
  {
    "url": "emoji/120/pager.png",
    "revision": "a50d18db0ef0d269e0af8b45f9bfe026"
  },
  {
    "url": "emoji/120/paintbrush.png",
    "revision": "4bd0ca6c752c9bb9bfa38e8099802010"
  },
  {
    "url": "emoji/120/palm-tree.png",
    "revision": "938dfb2bcd5868dfd604a97e81bd2447"
  },
  {
    "url": "emoji/120/palms-up-together-dark-skin-tone.png",
    "revision": "5a187f332cb8008a1a33ef12025e051a"
  },
  {
    "url": "emoji/120/palms-up-together-light-skin-tone.png",
    "revision": "1da88f61549f910e946b5358cdf860fe"
  },
  {
    "url": "emoji/120/palms-up-together-medium-dark-skin-tone.png",
    "revision": "6c70207dad6e08e85cb8eb2d9648f3ee"
  },
  {
    "url": "emoji/120/palms-up-together-medium-light-skin-tone.png",
    "revision": "f3016990fd60c4fe1696689ac39c87d7"
  },
  {
    "url": "emoji/120/palms-up-together-medium-skin-tone.png",
    "revision": "2247a684f24f2c7332db55e19d2576c4"
  },
  {
    "url": "emoji/120/palms-up-together.png",
    "revision": "13876469ca20ca1d9d412667d39bb40b"
  },
  {
    "url": "emoji/120/pancakes.png",
    "revision": "89093ddfcd787e4a31afccd8f78a1e6e"
  },
  {
    "url": "emoji/120/panda.png",
    "revision": "393a5603cab8811da6a569199556f99a"
  },
  {
    "url": "emoji/120/paperclip.png",
    "revision": "4688530b5f9c4a03471fe8b7d8bec4ad"
  },
  {
    "url": "emoji/120/parachute.png",
    "revision": "3f53f25737b988a3c8903934ca908d26"
  },
  {
    "url": "emoji/120/parrot.png",
    "revision": "a59ca973d1341b3601ec21244d340acc"
  },
  {
    "url": "emoji/120/part-alternation-mark.png",
    "revision": "9db057422ee9d97147f01b2f28279df7"
  },
  {
    "url": "emoji/120/party-popper.png",
    "revision": "c3250c69475ee06a3388c7dd3a69f978"
  },
  {
    "url": "emoji/120/partying-face.png",
    "revision": "3347f21ad810f699c6bc1179ac010c08"
  },
  {
    "url": "emoji/120/passenger-ship.png",
    "revision": "af7d35f45baad26e2dc655bc9c394894"
  },
  {
    "url": "emoji/120/passport-control.png",
    "revision": "5f5554b8ad93f8180b78bce68a59e05b"
  },
  {
    "url": "emoji/120/pause-button.png",
    "revision": "3f6671e06e2c2e4ef34fc88da9dc95c3"
  },
  {
    "url": "emoji/120/paw-prints.png",
    "revision": "735e528c01b4e4474ef4c51ae6f1a762"
  },
  {
    "url": "emoji/120/peace-symbol.png",
    "revision": "b776f679598c5df5fec84af2de8fa5e4"
  },
  {
    "url": "emoji/120/peach.png",
    "revision": "9c38ec0ee7b7d2023ec2b1a14802ce75"
  },
  {
    "url": "emoji/120/peacock.png",
    "revision": "a251222c6ce5fcdfd7949c5c04ee14d1"
  },
  {
    "url": "emoji/120/peanuts.png",
    "revision": "d811562ab26a308c2dc24731523e2eac"
  },
  {
    "url": "emoji/120/pear.png",
    "revision": "91ed4a497bc2053e6d28d088af2351c6"
  },
  {
    "url": "emoji/120/pen.png",
    "revision": "b3989318dec87f2a44ceab05d020b373"
  },
  {
    "url": "emoji/120/pencil.png",
    "revision": "81ac93faec6719be973c0183ac0e44d4"
  },
  {
    "url": "emoji/120/penguin.png",
    "revision": "a8d527e06ec679a7c984d8a674b276c1"
  },
  {
    "url": "emoji/120/pensive-face.png",
    "revision": "ccb05d9ade61612ffdbf5bd46b9597c1"
  },
  {
    "url": "emoji/120/people-holding-hands-dark-skin-tone-light-skin-tone.png",
    "revision": "844985f1cc747020332c913f3ed32977"
  },
  {
    "url": "emoji/120/people-holding-hands-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "ee4e8e248403de7176c6c738a7714135"
  },
  {
    "url": "emoji/120/people-holding-hands-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "9a0ab26d1ff598d476881450c1e9ca6a"
  },
  {
    "url": "emoji/120/people-holding-hands-dark-skin-tone-medium-skin-tone.png",
    "revision": "c52659f87067cb900658f17260522a32"
  },
  {
    "url": "emoji/120/people-holding-hands-dark-skin-tone.png",
    "revision": "18955c188fbd5cd91126169c76a912ec"
  },
  {
    "url": "emoji/120/people-holding-hands-light-skin-tone.png",
    "revision": "e6037753b2fcd81e21f398b63ce9ac1e"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "4eb3999bdda940672a5d231d3b7d1470"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "4dbb14f2e5c7c242aadefc3897608041"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "006755eb0a4b7bcb158c62eacc412ac8"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-dark-skin-tone.png",
    "revision": "3932aa3bfc72eed773a269b01f6a958d"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-light-skin-tone-light-skin-tone.png",
    "revision": "a325a0ff2958794942b9e4709e5690a6"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-light-skin-tone.png",
    "revision": "ec17d59b8511a68c4cdab6a594d70876"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-skin-tone-light-skin-tone.png",
    "revision": "bdb1b47a19ee65463ce09f847322e760"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "ffc330e87fd4100814ea5a633c95d66c"
  },
  {
    "url": "emoji/120/people-holding-hands-medium-skin-tone.png",
    "revision": "a05825aa911948e444dd68ef9fba2331"
  },
  {
    "url": "emoji/120/people-holding-hands.png",
    "revision": "27a233c4d78b8e6a51014ed70c9b0f68"
  },
  {
    "url": "emoji/120/people-with-bunny-ears-dark-skin-tone.png",
    "revision": "e07c5c7f60670b9503ac61ad793f3480"
  },
  {
    "url": "emoji/120/people-with-bunny-ears-light-skin-tone.png",
    "revision": "fb2e85a77e82e412ad5a179e1c9e54f0"
  },
  {
    "url": "emoji/120/people-with-bunny-ears-medium-dark-skin-tone.png",
    "revision": "add9e4725c29f6dc8de8d39c69ba63d8"
  },
  {
    "url": "emoji/120/people-with-bunny-ears-medium-light-skin-tone.png",
    "revision": "e5a0567ac0bfab1d46b13eb2e6364b93"
  },
  {
    "url": "emoji/120/people-with-bunny-ears-medium-skin-tone.png",
    "revision": "6367cb204e5eff7d888f6e8cc5cad432"
  },
  {
    "url": "emoji/120/people-with-bunny-ears.png",
    "revision": "429b0ec07627f01c22bf4fde114f5340"
  },
  {
    "url": "emoji/120/people-wrestling.png",
    "revision": "00406ece51c4899bc10a8cb416665083"
  },
  {
    "url": "emoji/120/performing-arts.png",
    "revision": "f7ae7ec5d4d07280ae7ef6454a9a6672"
  },
  {
    "url": "emoji/120/persevering-face.png",
    "revision": "0322ab90f5265a42bbb2e1dc507e19c3"
  },
  {
    "url": "emoji/120/person-beard.png",
    "revision": "9434e9b8dd896a9b740ba8f9bfb6df2c"
  },
  {
    "url": "emoji/120/person-biking-dark-skin-tone.png",
    "revision": "ae720abdf3e37cd35f3159c91aaed114"
  },
  {
    "url": "emoji/120/person-biking-light-skin-tone.png",
    "revision": "de1d2c712d5927e80a9810b513dc5aac"
  },
  {
    "url": "emoji/120/person-biking-medium-dark-skin-tone.png",
    "revision": "fa5ddaaf555210cd9ce1174f9a7a1b2d"
  },
  {
    "url": "emoji/120/person-biking-medium-light-skin-tone.png",
    "revision": "12120d84a22ba216299ccfc11341c8ea"
  },
  {
    "url": "emoji/120/person-biking-medium-skin-tone.png",
    "revision": "da8e08701cfbb9ff95674cf9fdc9506c"
  },
  {
    "url": "emoji/120/person-biking.png",
    "revision": "1afec2cb261421cf5a2f1c7cb79b36dd"
  },
  {
    "url": "emoji/120/person-blond-hair.png",
    "revision": "836a0772d7dc4ee04ca2af066c6c93e9"
  },
  {
    "url": "emoji/120/person-bouncing-ball-dark-skin-tone.png",
    "revision": "b51489eaca9c06546eeed50a6afbfd35"
  },
  {
    "url": "emoji/120/person-bouncing-ball-light-skin-tone.png",
    "revision": "48da5d417564afcd43b71074890fccea"
  },
  {
    "url": "emoji/120/person-bouncing-ball-medium-dark-skin-tone.png",
    "revision": "4605caa64619cc0460a2fd04a73d3985"
  },
  {
    "url": "emoji/120/person-bouncing-ball-medium-light-skin-tone.png",
    "revision": "749d3e00ce1cffe6c32541be8f8022ea"
  },
  {
    "url": "emoji/120/person-bouncing-ball-medium-skin-tone.png",
    "revision": "2f18d5f1f2e41217be3e473440ce47d7"
  },
  {
    "url": "emoji/120/person-bouncing-ball.png",
    "revision": "6be8e9ab95f84c37ec5a987c34d2d3bd"
  },
  {
    "url": "emoji/120/person-bowing-dark-skin-tone.png",
    "revision": "557a3c4a226904c54e5dba690268de09"
  },
  {
    "url": "emoji/120/person-bowing-light-skin-tone.png",
    "revision": "c6c36c528097467afe0f92a2065c1138"
  },
  {
    "url": "emoji/120/person-bowing-medium-dark-skin-tone.png",
    "revision": "23128235b00012288969d177107b5b88"
  },
  {
    "url": "emoji/120/person-bowing-medium-light-skin-tone.png",
    "revision": "62b24d66d9233d4fd077995e7cbde0ff"
  },
  {
    "url": "emoji/120/person-bowing-medium-skin-tone.png",
    "revision": "e4aee4d84f4e8855c37dd65a88dd2187"
  },
  {
    "url": "emoji/120/person-bowing.png",
    "revision": "ab16246736ae05aa68b43debfe9d9669"
  },
  {
    "url": "emoji/120/person-cartwheeling-dark-skin-tone.png",
    "revision": "1b5d5873ff14778c336fac91c6e59f63"
  },
  {
    "url": "emoji/120/person-cartwheeling-light-skin-tone.png",
    "revision": "acbba7f43b84ce95162c33703e54a708"
  },
  {
    "url": "emoji/120/person-cartwheeling-medium-dark-skin-tone.png",
    "revision": "81127fae56afc24a77b915e115cc865a"
  },
  {
    "url": "emoji/120/person-cartwheeling-medium-light-skin-tone.png",
    "revision": "ee6f91b6197407dea4d8f15de51acdf8"
  },
  {
    "url": "emoji/120/person-cartwheeling-medium-skin-tone.png",
    "revision": "247f9f1223d6d5cb8e24a28f44e1ff92"
  },
  {
    "url": "emoji/120/person-cartwheeling.png",
    "revision": "d6cc8d417bf5d47d5bf5be51345e6ad4"
  },
  {
    "url": "emoji/120/person-climbing-dark-skin-tone.png",
    "revision": "4d74557775a6e15384bfc6faedb0b4cf"
  },
  {
    "url": "emoji/120/person-climbing-light-skin-tone.png",
    "revision": "26c67fe87d1170fa2b5dfe2af43bf95f"
  },
  {
    "url": "emoji/120/person-climbing-medium-dark-skin-tone.png",
    "revision": "87cb0ed4d3ef5a45af33e382d69618b8"
  },
  {
    "url": "emoji/120/person-climbing-medium-light-skin-tone.png",
    "revision": "a0141f495b84bc82ae394a9d6a12e04d"
  },
  {
    "url": "emoji/120/person-climbing-medium-skin-tone.png",
    "revision": "d99042be9c2b70713694cf51a528f66b"
  },
  {
    "url": "emoji/120/person-climbing.png",
    "revision": "8986d693e974987f489df1744140879b"
  },
  {
    "url": "emoji/120/person-dark-skin-tone-beard.png",
    "revision": "8bd8ff434dc1bb437e70c8791dcd2ae1"
  },
  {
    "url": "emoji/120/person-dark-skin-tone-blond-hair.png",
    "revision": "6d706dfcd731e12b7b8968197c19e469"
  },
  {
    "url": "emoji/120/person-dark-skin-tone.png",
    "revision": "f3885d5735538691172883268cb0e630"
  },
  {
    "url": "emoji/120/person-facepalming-dark-skin-tone.png",
    "revision": "4d514ca027b257314afa139ebb028415"
  },
  {
    "url": "emoji/120/person-facepalming-light-skin-tone.png",
    "revision": "c7b953b5452cc7cf5e5d45c27c66e8a8"
  },
  {
    "url": "emoji/120/person-facepalming-medium-dark-skin-tone.png",
    "revision": "ec0259aea3e9d849b3cd711b397cb0cd"
  },
  {
    "url": "emoji/120/person-facepalming-medium-light-skin-tone.png",
    "revision": "c0763a3d237c0e4642275eeb2dbbdc22"
  },
  {
    "url": "emoji/120/person-facepalming-medium-skin-tone.png",
    "revision": "573e456f90996e016ac23ad330d87051"
  },
  {
    "url": "emoji/120/person-facepalming.png",
    "revision": "60c1002d70b268663036388002c0897a"
  },
  {
    "url": "emoji/120/person-fencing.png",
    "revision": "670f08c8ed9022ba16644687c1eeae22"
  },
  {
    "url": "emoji/120/person-frowning-dark-skin-tone.png",
    "revision": "28489ac5b5ae4cd67db85b7358018f1a"
  },
  {
    "url": "emoji/120/person-frowning-light-skin-tone.png",
    "revision": "60cc0acaccbfaa86235bbeded1d331d5"
  },
  {
    "url": "emoji/120/person-frowning-medium-dark-skin-tone.png",
    "revision": "7d3d209f3b2c5d818b0af6821035538c"
  },
  {
    "url": "emoji/120/person-frowning-medium-light-skin-tone.png",
    "revision": "96e43432650bb8ee55a4c8814c9d4662"
  },
  {
    "url": "emoji/120/person-frowning-medium-skin-tone.png",
    "revision": "7afb5c4f4ad5b415ed918dc0f2ff41a6"
  },
  {
    "url": "emoji/120/person-frowning.png",
    "revision": "e8a01238c0d0ef282851af984a3cb143"
  },
  {
    "url": "emoji/120/person-gesturing-no-dark-skin-tone.png",
    "revision": "dba40192e181e7ed174b1e88b3b99e33"
  },
  {
    "url": "emoji/120/person-gesturing-no-light-skin-tone.png",
    "revision": "cee8d0fa56ac4b6ea0f47d9b2dba3ca8"
  },
  {
    "url": "emoji/120/person-gesturing-no-medium-dark-skin-tone.png",
    "revision": "4e1533675e8db9542538e960f2f38d79"
  },
  {
    "url": "emoji/120/person-gesturing-no-medium-light-skin-tone.png",
    "revision": "553e0ecf50f6f8fff3dd9c88c018e6b9"
  },
  {
    "url": "emoji/120/person-gesturing-no-medium-skin-tone.png",
    "revision": "d19b02c924b9d6ed945cc28a196d8b64"
  },
  {
    "url": "emoji/120/person-gesturing-no.png",
    "revision": "add2b4e9085fea0c423e1976b00622ae"
  },
  {
    "url": "emoji/120/person-gesturing-ok-dark-skin-tone.png",
    "revision": "45d9b1926d759cb977c3147deb03f637"
  },
  {
    "url": "emoji/120/person-gesturing-ok-light-skin-tone.png",
    "revision": "e508e011b3e0a156db0d34111d750de1"
  },
  {
    "url": "emoji/120/person-gesturing-ok-medium-dark-skin-tone.png",
    "revision": "e6236acff9783c2813d948754e034b1e"
  },
  {
    "url": "emoji/120/person-gesturing-ok-medium-light-skin-tone.png",
    "revision": "7c62ecd6b8928ff908104c69cca0821c"
  },
  {
    "url": "emoji/120/person-gesturing-ok-medium-skin-tone.png",
    "revision": "94f379c2a5fc93cc3fa6519c0c03ce71"
  },
  {
    "url": "emoji/120/person-gesturing-ok.png",
    "revision": "92b68edbd6c87202427b264b9c8c3ed5"
  },
  {
    "url": "emoji/120/person-getting-haircut-dark-skin-tone.png",
    "revision": "85111ef15906e46f8ffbfdc84b74fa27"
  },
  {
    "url": "emoji/120/person-getting-haircut-light-skin-tone.png",
    "revision": "9624ca547124ecb808b4616ff8b80df5"
  },
  {
    "url": "emoji/120/person-getting-haircut-medium-dark-skin-tone.png",
    "revision": "fe31af3da93b13aa5bf3857c4d20a0a9"
  },
  {
    "url": "emoji/120/person-getting-haircut-medium-light-skin-tone.png",
    "revision": "396b00d3881b749b041d790001e1d1ef"
  },
  {
    "url": "emoji/120/person-getting-haircut-medium-skin-tone.png",
    "revision": "fa93ab3c10a31c1a5cc06a16bf63ed04"
  },
  {
    "url": "emoji/120/person-getting-haircut.png",
    "revision": "bb6934f02fd7d46792c6bcf363af4fb7"
  },
  {
    "url": "emoji/120/person-getting-massage-dark-skin-tone.png",
    "revision": "a2c44848dec0bac1babd9ed3eaa57fac"
  },
  {
    "url": "emoji/120/person-getting-massage-light-skin-tone.png",
    "revision": "4dcb2dc6671ed90c7fd73f9201a5017f"
  },
  {
    "url": "emoji/120/person-getting-massage-medium-dark-skin-tone.png",
    "revision": "247f22648c37c6d3057ce21d834a5f28"
  },
  {
    "url": "emoji/120/person-getting-massage-medium-light-skin-tone.png",
    "revision": "193a0b08014f58f7cc0729df2709ad4f"
  },
  {
    "url": "emoji/120/person-getting-massage-medium-skin-tone.png",
    "revision": "ed110da53ac01498afcb2b842fa15046"
  },
  {
    "url": "emoji/120/person-getting-massage.png",
    "revision": "123769f3b1c0149c825e22808b29b061"
  },
  {
    "url": "emoji/120/person-golfing-dark-skin-tone.png",
    "revision": "25f8144a5cd35f334874a7d071244cfb"
  },
  {
    "url": "emoji/120/person-golfing-light-skin-tone.png",
    "revision": "96d351a73dac0b7e1233372eca826e89"
  },
  {
    "url": "emoji/120/person-golfing-medium-dark-skin-tone.png",
    "revision": "fd5af2ed7cf6d18288b8db7a7157020b"
  },
  {
    "url": "emoji/120/person-golfing-medium-light-skin-tone.png",
    "revision": "9103d29befcc5bec2c22d48c67d756b2"
  },
  {
    "url": "emoji/120/person-golfing-medium-skin-tone.png",
    "revision": "f23e5c52ca2f4fd537ce7b6e80ea36aa"
  },
  {
    "url": "emoji/120/person-golfing.png",
    "revision": "29aa03b8fd7a49f690690a6bd0d1c591"
  },
  {
    "url": "emoji/120/person-in-bed-dark-skin-tone.png",
    "revision": "b8de5e266a4b9fd391cab2e05cea31de"
  },
  {
    "url": "emoji/120/person-in-bed-light-skin-tone.png",
    "revision": "2a17911659b715d64d367ca9e9c9a26d"
  },
  {
    "url": "emoji/120/person-in-bed-medium-dark-skin-tone.png",
    "revision": "5ecd563adae07b42b12de8fe2ffed55d"
  },
  {
    "url": "emoji/120/person-in-bed-medium-light-skin-tone.png",
    "revision": "4f1ac377c0f84ffc42a8fad427e9d8e6"
  },
  {
    "url": "emoji/120/person-in-bed-medium-skin-tone.png",
    "revision": "236e2365ff375ffb299f4770bcb9fa09"
  },
  {
    "url": "emoji/120/person-in-bed.png",
    "revision": "8ef704a99c33e4c3c555af6a06438edd"
  },
  {
    "url": "emoji/120/person-in-lotus-position-dark-skin-tone.png",
    "revision": "2a80759d2388eb7f84c8904eabba973b"
  },
  {
    "url": "emoji/120/person-in-lotus-position-light-skin-tone.png",
    "revision": "065117e18889a91276a77f47a209ca16"
  },
  {
    "url": "emoji/120/person-in-lotus-position-medium-dark-skin-tone.png",
    "revision": "38eff691ada656104b0ea381951afee5"
  },
  {
    "url": "emoji/120/person-in-lotus-position-medium-light-skin-tone.png",
    "revision": "d9cba9a2cb12b3717d0dc09b52009943"
  },
  {
    "url": "emoji/120/person-in-lotus-position-medium-skin-tone.png",
    "revision": "1a2b2794556e50a9a452a9cb233d59d2"
  },
  {
    "url": "emoji/120/person-in-lotus-position.png",
    "revision": "3817721f7d2042b613e2cd1fdd753a6a"
  },
  {
    "url": "emoji/120/person-in-steamy-room-dark-skin-tone.png",
    "revision": "0545b66c754488a65de18fefbbce2cab"
  },
  {
    "url": "emoji/120/person-in-steamy-room-light-skin-tone.png",
    "revision": "ef3bccce0cc6ab1cd6970f0aa35ac071"
  },
  {
    "url": "emoji/120/person-in-steamy-room-medium-dark-skin-tone.png",
    "revision": "33dc7f444f8776f1052960ecf1827e1b"
  },
  {
    "url": "emoji/120/person-in-steamy-room-medium-light-skin-tone.png",
    "revision": "6f1bfae2352539898c5c3799b625c6c3"
  },
  {
    "url": "emoji/120/person-in-steamy-room-medium-skin-tone.png",
    "revision": "a242264efe543ca5579c5c809b879a7c"
  },
  {
    "url": "emoji/120/person-in-steamy-room.png",
    "revision": "fc5874a8adce679f314ef2043d5e9e96"
  },
  {
    "url": "emoji/120/person-in-suit-levitating-dark-skin-tone.png",
    "revision": "1104fe3061109f2fca26c0276ae563f6"
  },
  {
    "url": "emoji/120/person-in-suit-levitating-light-skin-tone.png",
    "revision": "bbb940523bf8084d4e1967c5efb9e13f"
  },
  {
    "url": "emoji/120/person-in-suit-levitating-medium-dark-skin-tone.png",
    "revision": "0aa6989cc707e893a21a21e7ec6a4f5c"
  },
  {
    "url": "emoji/120/person-in-suit-levitating-medium-light-skin-tone.png",
    "revision": "04a8c02f5a933bcb36bd1f8faa108b5b"
  },
  {
    "url": "emoji/120/person-in-suit-levitating-medium-skin-tone.png",
    "revision": "43dc1b6f534deb50539d5407a537104f"
  },
  {
    "url": "emoji/120/person-in-suit-levitating.png",
    "revision": "ecaebd29770d5809868647fc5fbf3cca"
  },
  {
    "url": "emoji/120/person-in-tuxedo-dark-skin-tone.png",
    "revision": "04bff2ada3343df76f9e5c8a213713da"
  },
  {
    "url": "emoji/120/person-in-tuxedo-light-skin-tone.png",
    "revision": "1ab4aad296cdb8f57678e047c523471e"
  },
  {
    "url": "emoji/120/person-in-tuxedo-medium-dark-skin-tone.png",
    "revision": "d1fe75627cad6cf512c787221afdf762"
  },
  {
    "url": "emoji/120/person-in-tuxedo-medium-light-skin-tone.png",
    "revision": "72094740ea2b4c51c82c0d756c5662e7"
  },
  {
    "url": "emoji/120/person-in-tuxedo-medium-skin-tone.png",
    "revision": "33f672c164f28bb81e8efdedbfda0357"
  },
  {
    "url": "emoji/120/person-in-tuxedo.png",
    "revision": "8e2b47998b88955abc926d99cf92da9a"
  },
  {
    "url": "emoji/120/person-juggling-dark-skin-tone.png",
    "revision": "c4621433a8ea93ad0dc3a94004bfda00"
  },
  {
    "url": "emoji/120/person-juggling-light-skin-tone.png",
    "revision": "5c6b32be46035c6fcd60cb36bd09dcb4"
  },
  {
    "url": "emoji/120/person-juggling-medium-dark-skin-tone.png",
    "revision": "5b716162e78e4f1550f1f301dc52083f"
  },
  {
    "url": "emoji/120/person-juggling-medium-light-skin-tone.png",
    "revision": "2f442cc4484dc6a2727879e92ec346d2"
  },
  {
    "url": "emoji/120/person-juggling-medium-skin-tone.png",
    "revision": "ec3ce820962105140df25454ad539d65"
  },
  {
    "url": "emoji/120/person-juggling.png",
    "revision": "b0397d8a0a4906cd995d09e3a932b64f"
  },
  {
    "url": "emoji/120/person-kneeling-dark-skin-tone.png",
    "revision": "a7840d928c52a7f69d68c778a19531bc"
  },
  {
    "url": "emoji/120/person-kneeling-light-skin-tone.png",
    "revision": "29d67861f1e58e18ed10ec90aec5b738"
  },
  {
    "url": "emoji/120/person-kneeling-medium-dark-skin-tone.png",
    "revision": "ac5eaa000f41815beda15265903fb0c2"
  },
  {
    "url": "emoji/120/person-kneeling-medium-light-skin-tone.png",
    "revision": "3839f67d837c10f7f924451f7f70d3e4"
  },
  {
    "url": "emoji/120/person-kneeling-medium-skin-tone.png",
    "revision": "6c2c3aa157d82b115b2c73c08f01d83e"
  },
  {
    "url": "emoji/120/person-kneeling.png",
    "revision": "14e95f2fc139b14bf9423f72ef1fb419"
  },
  {
    "url": "emoji/120/person-lifting-weights-dark-skin-tone.png",
    "revision": "9daa473e5559cec66629e11e3d7c176f"
  },
  {
    "url": "emoji/120/person-lifting-weights-light-skin-tone.png",
    "revision": "3efeec72f8d4fe1ddb7c3b3dc6fe4d64"
  },
  {
    "url": "emoji/120/person-lifting-weights-medium-dark-skin-tone.png",
    "revision": "99d1308110a4aaba2dd0224637543bad"
  },
  {
    "url": "emoji/120/person-lifting-weights-medium-light-skin-tone.png",
    "revision": "c93288f8a964c279f4afd4db9fcecc73"
  },
  {
    "url": "emoji/120/person-lifting-weights-medium-skin-tone.png",
    "revision": "6a69221485695bf1ccbea6b6be7ed924"
  },
  {
    "url": "emoji/120/person-lifting-weights.png",
    "revision": "0999eec3cce5999d4749196c9d52edca"
  },
  {
    "url": "emoji/120/person-light-skin-tone-beard.png",
    "revision": "b2b429a7cc49096e6f5fcb42ebfc1c79"
  },
  {
    "url": "emoji/120/person-light-skin-tone-blond-hair.png",
    "revision": "1005f20f80b5b49aed0b55b17b8aaf4e"
  },
  {
    "url": "emoji/120/person-light-skin-tone.png",
    "revision": "8a45f38fdc86dfa51781d0d2ecd1932d"
  },
  {
    "url": "emoji/120/person-medium-dark-skin-tone-beard.png",
    "revision": "f8c2f59c40f4034fafdf87e78f51f3a6"
  },
  {
    "url": "emoji/120/person-medium-dark-skin-tone-blond-hair.png",
    "revision": "8a5bcde4f247126319faa62fd597ae29"
  },
  {
    "url": "emoji/120/person-medium-dark-skin-tone.png",
    "revision": "da443b7ad5b2a5340aef5d54c26d11bc"
  },
  {
    "url": "emoji/120/person-medium-light-skin-tone-beard.png",
    "revision": "787e1a83368f4805448db8ed4f5cbaca"
  },
  {
    "url": "emoji/120/person-medium-light-skin-tone-blond-hair.png",
    "revision": "58d591464d3dcb45c09ad96483a2073d"
  },
  {
    "url": "emoji/120/person-medium-light-skin-tone.png",
    "revision": "d32afcaf9897465e29517132d74b87bd"
  },
  {
    "url": "emoji/120/person-medium-skin-tone-beard.png",
    "revision": "3a4f6368823db6a31989e2d6da95279a"
  },
  {
    "url": "emoji/120/person-medium-skin-tone-blond-hair.png",
    "revision": "c86c6b8f0a5f78bfdded14e8a6ddac42"
  },
  {
    "url": "emoji/120/person-medium-skin-tone.png",
    "revision": "749485a3aa1ae7a394eeab8415d2afee"
  },
  {
    "url": "emoji/120/person-mountain-biking-dark-skin-tone.png",
    "revision": "1e18f498ce61c96d1e9d614007c86b3b"
  },
  {
    "url": "emoji/120/person-mountain-biking-light-skin-tone.png",
    "revision": "dae68ddbc5c7e6037863b39339b273d2"
  },
  {
    "url": "emoji/120/person-mountain-biking-medium-dark-skin-tone.png",
    "revision": "66c90e9024257e4700604099763e9963"
  },
  {
    "url": "emoji/120/person-mountain-biking-medium-light-skin-tone.png",
    "revision": "dc40089c49380f7642c3e0e24abc0596"
  },
  {
    "url": "emoji/120/person-mountain-biking-medium-skin-tone.png",
    "revision": "f4cf3a576ff7ff6bc69fb7d71c23368b"
  },
  {
    "url": "emoji/120/person-mountain-biking.png",
    "revision": "b448c227b2efd6ab797bd37a0e353eda"
  },
  {
    "url": "emoji/120/person-playing-handball-dark-skin-tone.png",
    "revision": "029dda474e8f010e8ac743ad5beb2a60"
  },
  {
    "url": "emoji/120/person-playing-handball-light-skin-tone.png",
    "revision": "b006208088378f1a04ad4feb9b43cd7e"
  },
  {
    "url": "emoji/120/person-playing-handball-medium-dark-skin-tone.png",
    "revision": "8b79c7636c833fba4ca3e8b37d73635d"
  },
  {
    "url": "emoji/120/person-playing-handball-medium-light-skin-tone.png",
    "revision": "43aa4bb04b2ccd9e0647cc5f98bfe1c6"
  },
  {
    "url": "emoji/120/person-playing-handball-medium-skin-tone.png",
    "revision": "7c73262d17b4acccc8aeea953a3b498e"
  },
  {
    "url": "emoji/120/person-playing-handball.png",
    "revision": "50bc29e75d4a07e99d32e9581c51c7b0"
  },
  {
    "url": "emoji/120/person-playing-water-polo-dark-skin-tone.png",
    "revision": "147ee0a73a6e73523672aeeedb2f5117"
  },
  {
    "url": "emoji/120/person-playing-water-polo-light-skin-tone.png",
    "revision": "bb96f5943e78b102737c7de9bf385165"
  },
  {
    "url": "emoji/120/person-playing-water-polo-medium-dark-skin-tone.png",
    "revision": "02b0c368d53fb826cc017f679a229e95"
  },
  {
    "url": "emoji/120/person-playing-water-polo-medium-light-skin-tone.png",
    "revision": "ee6cf2814bb3a75096bf14c724518b48"
  },
  {
    "url": "emoji/120/person-playing-water-polo-medium-skin-tone.png",
    "revision": "b967e943d95469c0c547ec62f195c893"
  },
  {
    "url": "emoji/120/person-playing-water-polo.png",
    "revision": "ace47391bd7a67e9ef8774df4258a98c"
  },
  {
    "url": "emoji/120/person-pouting-dark-skin-tone.png",
    "revision": "cc8b36cb54798e38ff26d1299a1b284a"
  },
  {
    "url": "emoji/120/person-pouting-light-skin-tone.png",
    "revision": "5a708dd6036bf3cb4f2b78466d9c161f"
  },
  {
    "url": "emoji/120/person-pouting-medium-dark-skin-tone.png",
    "revision": "5843da78a0da024f7671d18e7cbfed5f"
  },
  {
    "url": "emoji/120/person-pouting-medium-light-skin-tone.png",
    "revision": "2956bd8d9966b33f10ccaf26f1cb19ef"
  },
  {
    "url": "emoji/120/person-pouting-medium-skin-tone.png",
    "revision": "7e7b0c3301ef88dcfb504c18ced287f5"
  },
  {
    "url": "emoji/120/person-pouting.png",
    "revision": "a03f8e4100b97fba1d6fc3ecd604a839"
  },
  {
    "url": "emoji/120/person-raising-hand-dark-skin-tone.png",
    "revision": "e7b2d0135747617a2fd645df9066d4c2"
  },
  {
    "url": "emoji/120/person-raising-hand-light-skin-tone.png",
    "revision": "23b6fbd671fb8e063ae646ea1619d9d4"
  },
  {
    "url": "emoji/120/person-raising-hand-medium-dark-skin-tone.png",
    "revision": "e07a53485cbe71f80bc7c3446cde82ed"
  },
  {
    "url": "emoji/120/person-raising-hand-medium-light-skin-tone.png",
    "revision": "a8713ffdfbbf105c2f750a8272c746f3"
  },
  {
    "url": "emoji/120/person-raising-hand-medium-skin-tone.png",
    "revision": "024d7f9f7b9703f0ea59c58a6bd49c31"
  },
  {
    "url": "emoji/120/person-raising-hand.png",
    "revision": "a559f395829a5c0b82068d5248b999b3"
  },
  {
    "url": "emoji/120/person-rowing-boat-dark-skin-tone.png",
    "revision": "4047113e5b34c23520b80a2a37bf1192"
  },
  {
    "url": "emoji/120/person-rowing-boat-light-skin-tone.png",
    "revision": "9ab0893b53e89f917bd13e953236e5ae"
  },
  {
    "url": "emoji/120/person-rowing-boat-medium-dark-skin-tone.png",
    "revision": "a4477acd33a6c7a9042e6dd968678c8a"
  },
  {
    "url": "emoji/120/person-rowing-boat-medium-light-skin-tone.png",
    "revision": "f1ce0720a093d91ece560a91f21ae03d"
  },
  {
    "url": "emoji/120/person-rowing-boat-medium-skin-tone.png",
    "revision": "54fe5d9f5fc3114bfdcf06216a2c74e1"
  },
  {
    "url": "emoji/120/person-rowing-boat.png",
    "revision": "f991838749740de0333ac5cd15f1eb97"
  },
  {
    "url": "emoji/120/person-running-dark-skin-tone.png",
    "revision": "5dc4a3a244b131c81727d62eb4769d66"
  },
  {
    "url": "emoji/120/person-running-light-skin-tone.png",
    "revision": "3f6e83ab4d7cf82177c30a76764b64ef"
  },
  {
    "url": "emoji/120/person-running-medium-dark-skin-tone.png",
    "revision": "fd926bb2f42b0fbca63257a72deec758"
  },
  {
    "url": "emoji/120/person-running-medium-light-skin-tone.png",
    "revision": "51639d614d3212e6e65de0712d95aa86"
  },
  {
    "url": "emoji/120/person-running-medium-skin-tone.png",
    "revision": "cb4fe2ffe8ad107a164eb3cc8b107160"
  },
  {
    "url": "emoji/120/person-running.png",
    "revision": "1d101a336ccd5feac7f08df45c9217c7"
  },
  {
    "url": "emoji/120/person-shrugging-dark-skin-tone.png",
    "revision": "1f302cebaa650fa4f7b9b9ad011495a3"
  },
  {
    "url": "emoji/120/person-shrugging-light-skin-tone.png",
    "revision": "95c7361a5d330d5d5cb5898c6ea7ef8f"
  },
  {
    "url": "emoji/120/person-shrugging-medium-dark-skin-tone.png",
    "revision": "53a076453e1f4f31df00db54b6078616"
  },
  {
    "url": "emoji/120/person-shrugging-medium-light-skin-tone.png",
    "revision": "0d9165c7f4032502bb4767e0e35e6ad0"
  },
  {
    "url": "emoji/120/person-shrugging-medium-skin-tone.png",
    "revision": "e79fcb9f4f01f9e325c645683b0e34ce"
  },
  {
    "url": "emoji/120/person-shrugging.png",
    "revision": "b2099c9a6bfc93f3ea88e2ddd1e76015"
  },
  {
    "url": "emoji/120/person-standing-dark-skin-tone.png",
    "revision": "d723e03244aadb5c160f89b1b3c208a5"
  },
  {
    "url": "emoji/120/person-standing-light-skin-tone.png",
    "revision": "6355ce4541e4ac08eeee7af824eeccbb"
  },
  {
    "url": "emoji/120/person-standing-medium-dark-skin-tone.png",
    "revision": "f3e6716e8d92f91266eb6d6f752d7c27"
  },
  {
    "url": "emoji/120/person-standing-medium-light-skin-tone.png",
    "revision": "77cfc8213356cda26501e764029af081"
  },
  {
    "url": "emoji/120/person-standing-medium-skin-tone.png",
    "revision": "3f917fc1b551b03653186557813d11fd"
  },
  {
    "url": "emoji/120/person-standing.png",
    "revision": "16154577b911c6c7c466ac27df31eeb3"
  },
  {
    "url": "emoji/120/person-surfing-dark-skin-tone.png",
    "revision": "15de1d0cd250e20b1831e6fa3237a736"
  },
  {
    "url": "emoji/120/person-surfing-light-skin-tone.png",
    "revision": "7937428c08891601fb15cac28b5fa585"
  },
  {
    "url": "emoji/120/person-surfing-medium-dark-skin-tone.png",
    "revision": "89031bfe602e40b446e9e516fad77a14"
  },
  {
    "url": "emoji/120/person-surfing-medium-light-skin-tone.png",
    "revision": "115f664ae7dea2220fa690bb4b6a3677"
  },
  {
    "url": "emoji/120/person-surfing-medium-skin-tone.png",
    "revision": "d9c80618d6748c5e10602815cd72cdd8"
  },
  {
    "url": "emoji/120/person-surfing.png",
    "revision": "d18ef1d3a9f413bd6157a6d7526e5364"
  },
  {
    "url": "emoji/120/person-swimming-dark-skin-tone.png",
    "revision": "bf9787bbe0cddc8437d37a3129688db4"
  },
  {
    "url": "emoji/120/person-swimming-light-skin-tone.png",
    "revision": "87eb4dd688133bbafce1626fbe5df599"
  },
  {
    "url": "emoji/120/person-swimming-medium-dark-skin-tone.png",
    "revision": "f609445557e28e06a02a56ef5f52fe38"
  },
  {
    "url": "emoji/120/person-swimming-medium-light-skin-tone.png",
    "revision": "2c514e200d5c114ee4236a80a491d7fc"
  },
  {
    "url": "emoji/120/person-swimming-medium-skin-tone.png",
    "revision": "6b7029db0516e7b8f4b69bc7c649b369"
  },
  {
    "url": "emoji/120/person-swimming.png",
    "revision": "bcf65a6a5f625a553f0d00e72c77309c"
  },
  {
    "url": "emoji/120/person-taking-bath-dark-skin-tone.png",
    "revision": "5a41451e2aa6ab3569afbd398e656219"
  },
  {
    "url": "emoji/120/person-taking-bath-light-skin-tone.png",
    "revision": "9af13b75fafda4875b4c5360722bb6ea"
  },
  {
    "url": "emoji/120/person-taking-bath-medium-dark-skin-tone.png",
    "revision": "7713dfb53ba49c57c9a605b2b8dc4e5b"
  },
  {
    "url": "emoji/120/person-taking-bath-medium-light-skin-tone.png",
    "revision": "ad819805542f2a198a7aba4eb8a66396"
  },
  {
    "url": "emoji/120/person-taking-bath-medium-skin-tone.png",
    "revision": "4baeb9974b7e2b5cbf6d6ead6b9684ac"
  },
  {
    "url": "emoji/120/person-taking-bath.png",
    "revision": "1e99ac2d8ca953e27506dcb101b081c7"
  },
  {
    "url": "emoji/120/person-tipping-hand-dark-skin-tone.png",
    "revision": "31c4472b27687811975e5a3c8d929601"
  },
  {
    "url": "emoji/120/person-tipping-hand-light-skin-tone.png",
    "revision": "06b35c4cd2bb56055a6e89235cd378be"
  },
  {
    "url": "emoji/120/person-tipping-hand-medium-dark-skin-tone.png",
    "revision": "1a6841b89da789c48098e7f91f0ce273"
  },
  {
    "url": "emoji/120/person-tipping-hand-medium-light-skin-tone.png",
    "revision": "63c3ae860bc673927c0388b76a268bd8"
  },
  {
    "url": "emoji/120/person-tipping-hand-medium-skin-tone.png",
    "revision": "adeffb5b0bf59973074b6d37af73cef3"
  },
  {
    "url": "emoji/120/person-tipping-hand.png",
    "revision": "458c603a276a9f883611b9350744197f"
  },
  {
    "url": "emoji/120/person-walking-dark-skin-tone.png",
    "revision": "5b03dc2cac7c90488afb29a3e31d491e"
  },
  {
    "url": "emoji/120/person-walking-light-skin-tone.png",
    "revision": "b1393717b1599e7b84db91e8febe6f67"
  },
  {
    "url": "emoji/120/person-walking-medium-dark-skin-tone.png",
    "revision": "ee0142fd1bb7bddf346ef8a2654c3347"
  },
  {
    "url": "emoji/120/person-walking-medium-light-skin-tone.png",
    "revision": "e1f26e3c213437399bd192c8dc2958eb"
  },
  {
    "url": "emoji/120/person-walking-medium-skin-tone.png",
    "revision": "b3e6e10a9a24711e1d011cb09303658d"
  },
  {
    "url": "emoji/120/person-walking.png",
    "revision": "92be9ddbf698d0b5ca419d688292d118"
  },
  {
    "url": "emoji/120/person-wearing-turban-dark-skin-tone.png",
    "revision": "469096ab1e20eca6893cd580cb86b627"
  },
  {
    "url": "emoji/120/person-wearing-turban-light-skin-tone.png",
    "revision": "a06771b49d251ab92be99585e3b25119"
  },
  {
    "url": "emoji/120/person-wearing-turban-medium-dark-skin-tone.png",
    "revision": "6e4e98632f635009e60df0d2e7d6f12e"
  },
  {
    "url": "emoji/120/person-wearing-turban-medium-light-skin-tone.png",
    "revision": "5da5228c3a2652e75aece763aa4368e6"
  },
  {
    "url": "emoji/120/person-wearing-turban-medium-skin-tone.png",
    "revision": "a2a8ebef206ab67cd7c8aab1f7092918"
  },
  {
    "url": "emoji/120/person-wearing-turban.png",
    "revision": "1869c77f8441dc3f042d701a1c8dbf49"
  },
  {
    "url": "emoji/120/person-with-headscarf-dark-skin-tone.png",
    "revision": "5c13b77fcaf5e3e54a182108fa46eea8"
  },
  {
    "url": "emoji/120/person-with-headscarf-light-skin-tone.png",
    "revision": "cd2b4e3b7b74da65655de8936b6db67f"
  },
  {
    "url": "emoji/120/person-with-headscarf-medium-dark-skin-tone.png",
    "revision": "781321037dcc7c149f02a63ace7f20e5"
  },
  {
    "url": "emoji/120/person-with-headscarf-medium-light-skin-tone.png",
    "revision": "b264c5fad83efb39e75af00a2d60118a"
  },
  {
    "url": "emoji/120/person-with-headscarf-medium-skin-tone.png",
    "revision": "bf3ee32ef27e2ba02f565c5ffa8f3142"
  },
  {
    "url": "emoji/120/person-with-headscarf.png",
    "revision": "44866e67ce0089765e813404ae851ac6"
  },
  {
    "url": "emoji/120/person-with-skullcap-dark-skin-tone.png",
    "revision": "6d93e04cef3b7b70cc80b3fbc648f980"
  },
  {
    "url": "emoji/120/person-with-skullcap-light-skin-tone.png",
    "revision": "a3e94d8ffa17a3cbea83195fbaa9ff67"
  },
  {
    "url": "emoji/120/person-with-skullcap-medium-dark-skin-tone.png",
    "revision": "eceedc850052e70a88a9d540f8dd7d98"
  },
  {
    "url": "emoji/120/person-with-skullcap-medium-light-skin-tone.png",
    "revision": "ad946193233e3eef7576bff12922e1d9"
  },
  {
    "url": "emoji/120/person-with-skullcap-medium-skin-tone.png",
    "revision": "2a33c026257907165c87855b7e01f9c1"
  },
  {
    "url": "emoji/120/person-with-skullcap.png",
    "revision": "10a6b54ce66d8243e29dd093a9bfce85"
  },
  {
    "url": "emoji/120/person-with-veil-dark-skin-tone.png",
    "revision": "ecd73b442f4d8bea6190acd3d27ff731"
  },
  {
    "url": "emoji/120/person-with-veil-light-skin-tone.png",
    "revision": "98d2a0d4082b3e890884cf70458923c2"
  },
  {
    "url": "emoji/120/person-with-veil-medium-dark-skin-tone.png",
    "revision": "00f0ff7e5b310ed1244e73471660446b"
  },
  {
    "url": "emoji/120/person-with-veil-medium-light-skin-tone.png",
    "revision": "e13c676d5bc609ec34392a5ec20ba58f"
  },
  {
    "url": "emoji/120/person-with-veil-medium-skin-tone.png",
    "revision": "808fc780a9ccbabe97eba801bf6caf80"
  },
  {
    "url": "emoji/120/person-with-veil.png",
    "revision": "1e12c9480fc8a8c0e80aaf321e7d66dd"
  },
  {
    "url": "emoji/120/person.png",
    "revision": "eae33d39f514d604d06e5fca567e3c42"
  },
  {
    "url": "emoji/120/petri-dish.png",
    "revision": "108c3ec79981f0d0a9d0a954ed07f72f"
  },
  {
    "url": "emoji/120/pick.png",
    "revision": "9ca98aec6dd6c17b21eae08b1f8a31eb"
  },
  {
    "url": "emoji/120/pie.png",
    "revision": "3eebff9f024ebd394127f7b2ab7d9c15"
  },
  {
    "url": "emoji/120/pig-face.png",
    "revision": "b67e4850bf6a4da72351546d89b3af3b"
  },
  {
    "url": "emoji/120/pig-nose.png",
    "revision": "171e0fa6eb79661c7f60f26884d24f5b"
  },
  {
    "url": "emoji/120/pig.png",
    "revision": "2b0ee09cd9b7be35021c40773260c39a"
  },
  {
    "url": "emoji/120/pile-of-poo.png",
    "revision": "bffe2c58c12805cb2184ff3355cb8d40"
  },
  {
    "url": "emoji/120/pill.png",
    "revision": "68fcad913dfa8279f2964a589e770aa6"
  },
  {
    "url": "emoji/120/pinching-hand-dark-skin-tone.png",
    "revision": "fe733e9946be41678f5d337ba38df8ae"
  },
  {
    "url": "emoji/120/pinching-hand-light-skin-tone.png",
    "revision": "7695e9164a03e77d4abe6c3e798b3d24"
  },
  {
    "url": "emoji/120/pinching-hand-medium-dark-skin-tone.png",
    "revision": "a70348b3e5014ebe82d1d3da8dff1382"
  },
  {
    "url": "emoji/120/pinching-hand-medium-light-skin-tone.png",
    "revision": "e75fe3df63a59639985a8d74e82e2ec4"
  },
  {
    "url": "emoji/120/pinching-hand-medium-skin-tone.png",
    "revision": "1e5ea9805ffc30dee0cdef20d52a463b"
  },
  {
    "url": "emoji/120/pinching-hand.png",
    "revision": "fa413cf81ac701816bc78d7b19a95f1d"
  },
  {
    "url": "emoji/120/pine-decoration.png",
    "revision": "40486dd17ac5eb42ac856f9376815f85"
  },
  {
    "url": "emoji/120/pineapple.png",
    "revision": "42a8f3b43a522aa0a16fc62391970dec"
  },
  {
    "url": "emoji/120/ping-pong.png",
    "revision": "d42fbd7b6571deca7114e2044537d32d"
  },
  {
    "url": "emoji/120/pirate-flag.png",
    "revision": "4d6744ff8a4fb712ebd399daf25fb819"
  },
  {
    "url": "emoji/120/pisces.png",
    "revision": "b4807ce6282f676443294d6fcefa5d1d"
  },
  {
    "url": "emoji/120/pistol.png",
    "revision": "849c527c1b9122ce137b5dec203363d6"
  },
  {
    "url": "emoji/120/pizza.png",
    "revision": "80cbdc8b2ae021868cdf2ac6d0fd260d"
  },
  {
    "url": "emoji/120/place-of-worship.png",
    "revision": "5f70e338876d7c5fdf8cb37d19ef7280"
  },
  {
    "url": "emoji/120/play-button.png",
    "revision": "48bdc57a506d8684e91f5a06c80fec1c"
  },
  {
    "url": "emoji/120/play-or-pause-button.png",
    "revision": "c9ba5a7410301cf23455d9cabda2d375"
  },
  {
    "url": "emoji/120/pleading-face.png",
    "revision": "1a2462016a6bb61515160c63e0bd086b"
  },
  {
    "url": "emoji/120/plus.png",
    "revision": "e4df1df24d7d85cbd397403c6fbdec24"
  },
  {
    "url": "emoji/120/police-car-light.png",
    "revision": "cb7428565696b2409ee6f765eb46334b"
  },
  {
    "url": "emoji/120/police-car.png",
    "revision": "35716d5e7ba370fd2b53a421bbba51c2"
  },
  {
    "url": "emoji/120/police-officer-dark-skin-tone.png",
    "revision": "08a32d7b041912c5d9af574201f77ee9"
  },
  {
    "url": "emoji/120/police-officer-light-skin-tone.png",
    "revision": "b8e3b5783cfdd9dee64f2ea6f8b2f5af"
  },
  {
    "url": "emoji/120/police-officer-medium-dark-skin-tone.png",
    "revision": "d6f1e6fe7d5f7e59c74f7f352ab8eb89"
  },
  {
    "url": "emoji/120/police-officer-medium-light-skin-tone.png",
    "revision": "fd5a2b0864394a3ce1df737fadce7321"
  },
  {
    "url": "emoji/120/police-officer-medium-skin-tone.png",
    "revision": "89857e59eee3e0d65f5c708741168a55"
  },
  {
    "url": "emoji/120/police-officer.png",
    "revision": "a28f355bd80662912b7d49486df9499e"
  },
  {
    "url": "emoji/120/poodle.png",
    "revision": "c17171564a8232b7490271d722ffe662"
  },
  {
    "url": "emoji/120/pool-8-ball.png",
    "revision": "08d243ea90d7ecec535b30a4a24b2033"
  },
  {
    "url": "emoji/120/popcorn.png",
    "revision": "c23bf26de6976c3fd8cb413476ca7553"
  },
  {
    "url": "emoji/120/post-office.png",
    "revision": "d26923cdc935f5bb3dc7d99b350839d4"
  },
  {
    "url": "emoji/120/postal-horn.png",
    "revision": "1d34199e114d7516eb3aef7de63c2c23"
  },
  {
    "url": "emoji/120/postbox.png",
    "revision": "0d912b9b5d6e45134f53ad9e99b84de5"
  },
  {
    "url": "emoji/120/pot-of-food.png",
    "revision": "a474715b0223f32435c3a558f31938cd"
  },
  {
    "url": "emoji/120/potable-water.png",
    "revision": "15f4cbc9ba0a07cb5d4414c1ffcf6c40"
  },
  {
    "url": "emoji/120/potato.png",
    "revision": "bd5d647b252bdbfc794a4ff0d6601742"
  },
  {
    "url": "emoji/120/poultry-leg.png",
    "revision": "922012528202d31609ff3d6a421e35b7"
  },
  {
    "url": "emoji/120/pound-banknote.png",
    "revision": "5d4c71bddff9ff9dd55c3f02034f0c0b"
  },
  {
    "url": "emoji/120/pouting-cat.png",
    "revision": "22fffc7d90caf0b7b8cf1e677250d7d3"
  },
  {
    "url": "emoji/120/pouting-face.png",
    "revision": "f44498c7ba7c3a1440f68f9d07012b76"
  },
  {
    "url": "emoji/120/prayer-beads.png",
    "revision": "9642f12f8cbc202827dffe74297a8fe6"
  },
  {
    "url": "emoji/120/pregnant-woman-dark-skin-tone.png",
    "revision": "3407d1dfffb3cfcb8306bfb49ad2fd26"
  },
  {
    "url": "emoji/120/pregnant-woman-light-skin-tone.png",
    "revision": "24b11369c3dca63a77142653b7654260"
  },
  {
    "url": "emoji/120/pregnant-woman-medium-dark-skin-tone.png",
    "revision": "b213e4f56ee24bf1d32c4097291d82f7"
  },
  {
    "url": "emoji/120/pregnant-woman-medium-light-skin-tone.png",
    "revision": "7f3123f589be31ce73aaf92294cad45a"
  },
  {
    "url": "emoji/120/pregnant-woman-medium-skin-tone.png",
    "revision": "8ba51e49ad5d7f1f7087ad14f0cd0d74"
  },
  {
    "url": "emoji/120/pregnant-woman.png",
    "revision": "2d876cf652a51db51a35a15a33279d87"
  },
  {
    "url": "emoji/120/pretzel.png",
    "revision": "4835a8ff96d294b6cbc987e3e50401db"
  },
  {
    "url": "emoji/120/prince-dark-skin-tone.png",
    "revision": "a15e257dc7e1f66e906e53a97ca79407"
  },
  {
    "url": "emoji/120/prince-light-skin-tone.png",
    "revision": "08243b5fc31cffea61fedaef12928d92"
  },
  {
    "url": "emoji/120/prince-medium-dark-skin-tone.png",
    "revision": "5ee58e2ebe2e06daa67b91bd2ffa6fa2"
  },
  {
    "url": "emoji/120/prince-medium-light-skin-tone.png",
    "revision": "3d266f6162e9a6a2e4b5d019feb4aaa3"
  },
  {
    "url": "emoji/120/prince-medium-skin-tone.png",
    "revision": "9da24ab8394b9352389b06d5cc07064c"
  },
  {
    "url": "emoji/120/prince.png",
    "revision": "4a508d104f8c793727ae7dc73d2dae21"
  },
  {
    "url": "emoji/120/princess-dark-skin-tone.png",
    "revision": "b0e415678e916b5a22e63a64abe5bfc5"
  },
  {
    "url": "emoji/120/princess-light-skin-tone.png",
    "revision": "2a0e4e086c1df53e5a60a40333be67a2"
  },
  {
    "url": "emoji/120/princess-medium-dark-skin-tone.png",
    "revision": "a628c3d586cfb75f82c1cc21e5355c00"
  },
  {
    "url": "emoji/120/princess-medium-light-skin-tone.png",
    "revision": "a89e86250d463b91b4dffff45d226a0d"
  },
  {
    "url": "emoji/120/princess-medium-skin-tone.png",
    "revision": "6779cc7b0f7a2257c19088e3c7d90a14"
  },
  {
    "url": "emoji/120/princess.png",
    "revision": "f861bf620b5c916676344ba143920710"
  },
  {
    "url": "emoji/120/printer.png",
    "revision": "79ba984e2585187176fa1a884c0843ba"
  },
  {
    "url": "emoji/120/prohibited.png",
    "revision": "289f2b292efec85225fbe1ed806bd88a"
  },
  {
    "url": "emoji/120/purple-heart.png",
    "revision": "a64698ed2def2038390c3271d608cdc8"
  },
  {
    "url": "emoji/120/purse.png",
    "revision": "62e818ab9a2b83ec4f57da429b36c85e"
  },
  {
    "url": "emoji/120/pushpin.png",
    "revision": "0012f327425c37026f1f116499e45660"
  },
  {
    "url": "emoji/120/puzzle-piece.png",
    "revision": "03250b054920ca471a653bd390bd419e"
  },
  {
    "url": "emoji/120/question-mark.png",
    "revision": "8e05f8bce81a7d4b466a093acb3a7d0e"
  },
  {
    "url": "emoji/120/rabbit-face.png",
    "revision": "56994cf08c8e82cdf6bef8ffd874b608"
  },
  {
    "url": "emoji/120/rabbit.png",
    "revision": "be9e92e6e9a9093dd612dc0cf49d578a"
  },
  {
    "url": "emoji/120/raccoon.png",
    "revision": "a274dfedba56957889cfedb8710faa2c"
  },
  {
    "url": "emoji/120/racing-car.png",
    "revision": "297812f59b35dca583f14c0485a314fc"
  },
  {
    "url": "emoji/120/radio-button.png",
    "revision": "93ab0a6c7a96525f19a7ebedb4293272"
  },
  {
    "url": "emoji/120/radio.png",
    "revision": "84ebfbabb9348b4aa386338e3a3dd8ae"
  },
  {
    "url": "emoji/120/radioactive.png",
    "revision": "4e7d574db72733a03737ee8c2fd60b9c"
  },
  {
    "url": "emoji/120/railway-car.png",
    "revision": "bba42351c80ab8a90669a389b6d0417b"
  },
  {
    "url": "emoji/120/railway-track.png",
    "revision": "72d6891c7a5a08e55d6fea031d3debd9"
  },
  {
    "url": "emoji/120/rainbow-flag.png",
    "revision": "e11ac7994b776258bb2af27cc32eff86"
  },
  {
    "url": "emoji/120/rainbow.png",
    "revision": "7e0d61f1a6d79f41ed8278d3ccbe6a76"
  },
  {
    "url": "emoji/120/raised-back-of-hand-dark-skin-tone.png",
    "revision": "da8594829b661a69b46e0500cd1e3b8c"
  },
  {
    "url": "emoji/120/raised-back-of-hand-light-skin-tone.png",
    "revision": "39e3c4ab40a10b9df68022925534877d"
  },
  {
    "url": "emoji/120/raised-back-of-hand-medium-dark-skin-tone.png",
    "revision": "62da830fdd99433eea0b97e4bb0a4b15"
  },
  {
    "url": "emoji/120/raised-back-of-hand-medium-light-skin-tone.png",
    "revision": "cde8c93dcf2779c59e18e0984e565687"
  },
  {
    "url": "emoji/120/raised-back-of-hand-medium-skin-tone.png",
    "revision": "bf190b8be9133fb23bf234751a902935"
  },
  {
    "url": "emoji/120/raised-back-of-hand.png",
    "revision": "3b7581eece47ac6a55f4d3ec5d14ea39"
  },
  {
    "url": "emoji/120/raised-fist-dark-skin-tone.png",
    "revision": "97eb5e9188c1c660707c7a06265c2004"
  },
  {
    "url": "emoji/120/raised-fist-light-skin-tone.png",
    "revision": "96d64e5f0de9b53be3be05d9d10bac73"
  },
  {
    "url": "emoji/120/raised-fist-medium-dark-skin-tone.png",
    "revision": "e2e98bdfe67955f89b39f0d9a6185dec"
  },
  {
    "url": "emoji/120/raised-fist-medium-light-skin-tone.png",
    "revision": "91417784a3c103481a2fd396d4c43811"
  },
  {
    "url": "emoji/120/raised-fist-medium-skin-tone.png",
    "revision": "8876dd3f3ff5b598c012bdc6bb88bcda"
  },
  {
    "url": "emoji/120/raised-fist.png",
    "revision": "45590da4dab79e0a6a4e5415d947fb76"
  },
  {
    "url": "emoji/120/raised-hand-dark-skin-tone.png",
    "revision": "34d58669dd0298f79242fc857b6e0d28"
  },
  {
    "url": "emoji/120/raised-hand-light-skin-tone.png",
    "revision": "85c6cf72fd1bb3543072de859e4ca42e"
  },
  {
    "url": "emoji/120/raised-hand-medium-dark-skin-tone.png",
    "revision": "642de9722c4a740561750daa16ad5249"
  },
  {
    "url": "emoji/120/raised-hand-medium-light-skin-tone.png",
    "revision": "35beb625ccd44dcb311a96e86652498b"
  },
  {
    "url": "emoji/120/raised-hand-medium-skin-tone.png",
    "revision": "861b098152865dec89e35add212136e4"
  },
  {
    "url": "emoji/120/raised-hand.png",
    "revision": "06d6119c90dfab217e5d8400b8923754"
  },
  {
    "url": "emoji/120/raising-hands-dark-skin-tone.png",
    "revision": "02802f7c7f30ee414f54c12505ffa04f"
  },
  {
    "url": "emoji/120/raising-hands-light-skin-tone.png",
    "revision": "6d972dd71781e54db97e7b814a5f78b3"
  },
  {
    "url": "emoji/120/raising-hands-medium-dark-skin-tone.png",
    "revision": "f6e08abf2f1e710c3d27750735a2fb7f"
  },
  {
    "url": "emoji/120/raising-hands-medium-light-skin-tone.png",
    "revision": "2361bfd323ca5798d6254785c74a983e"
  },
  {
    "url": "emoji/120/raising-hands-medium-skin-tone.png",
    "revision": "38f279236b50d4738d36ac25b59a0025"
  },
  {
    "url": "emoji/120/raising-hands.png",
    "revision": "5f08b546a43fa67ac5b779aff6f573dc"
  },
  {
    "url": "emoji/120/ram.png",
    "revision": "a7bea6aae5256d1d8691c17b0395f05e"
  },
  {
    "url": "emoji/120/rat.png",
    "revision": "edacf8191894e7f215bcacb060f93056"
  },
  {
    "url": "emoji/120/razor.png",
    "revision": "a5f021af1bc561cf16dd8ed903b30fb6"
  },
  {
    "url": "emoji/120/receipt.png",
    "revision": "a8372af9f6f1c0a0fb308206119a80be"
  },
  {
    "url": "emoji/120/record-button.png",
    "revision": "4ecd9999a833796aea9b6b06e71e7968"
  },
  {
    "url": "emoji/120/recycling-symbol.png",
    "revision": "a8d77b01c054be7f7ad19be91386fff2"
  },
  {
    "url": "emoji/120/red-apple.png",
    "revision": "1c6446df15465293707deca087a9af3d"
  },
  {
    "url": "emoji/120/red-envelope.png",
    "revision": "824b57d9d1bc6b680321639145352c87"
  },
  {
    "url": "emoji/120/red-hair.png",
    "revision": "15da92e12b01f28d2a01b5de44fc41ff"
  },
  {
    "url": "emoji/120/red-heart.png",
    "revision": "f5f5d94d0d9b76d1f8085c987f04dae5"
  },
  {
    "url": "emoji/120/red-paper-lantern.png",
    "revision": "90a4f06a96c5158bd790d836461ff055"
  },
  {
    "url": "emoji/120/red-triangle-pointed-down.png",
    "revision": "38ca7616f7dd27224c0ffcda8c7ccf57"
  },
  {
    "url": "emoji/120/red-triangle-pointed-up.png",
    "revision": "b5755f9fea511925fc55d72c0a4766ca"
  },
  {
    "url": "emoji/120/registered.png",
    "revision": "6b8f7d8e6397bc9793d173b47e384bac"
  },
  {
    "url": "emoji/120/relieved-face.png",
    "revision": "0284f2d915eb90c48412b257bc4ddc2e"
  },
  {
    "url": "emoji/120/reminder-ribbon.png",
    "revision": "d2efc257458ed71c94f223fafac76b97"
  },
  {
    "url": "emoji/120/repeat-button.png",
    "revision": "5a60731ade2e11f1fbdd73c2a2cf7b0c"
  },
  {
    "url": "emoji/120/repeat-single-button.png",
    "revision": "48f674f5cd71c8ef570b8456775582f1"
  },
  {
    "url": "emoji/120/rescue-workers-helmet.png",
    "revision": "d90cc9f20d5258448120fbdad21ef5f7"
  },
  {
    "url": "emoji/120/restroom.png",
    "revision": "7f6735abdbbc3e3a7e919d7659489c8c"
  },
  {
    "url": "emoji/120/reverse-button.png",
    "revision": "871a53e9e147825f387f52c3af9e190f"
  },
  {
    "url": "emoji/120/reversed-victory-hand-dark-skin-tone.png",
    "revision": "0b3eaa08d0c2e6056f904cd1674b85a8"
  },
  {
    "url": "emoji/120/reversed-victory-hand-light-skin-tone.png",
    "revision": "246c0c656ba42765f21e3990acb8b2a1"
  },
  {
    "url": "emoji/120/reversed-victory-hand-medium-dark-skin-tone.png",
    "revision": "14d64411063f88a3b2a07005cb540bd8"
  },
  {
    "url": "emoji/120/reversed-victory-hand-medium-light-skin-tone.png",
    "revision": "a2ea9afc9008c791fbcca9b19babbf4c"
  },
  {
    "url": "emoji/120/reversed-victory-hand-medium-skin-tone.png",
    "revision": "6e30ef2d6ffd79e3d62b26ac49236f5b"
  },
  {
    "url": "emoji/120/reversed-victory-hand.png",
    "revision": "d5d253ecf211e735d8eb797fa70a66f4"
  },
  {
    "url": "emoji/120/revolving-hearts.png",
    "revision": "428f9b8157feb7f16098cbc3b2e4fa66"
  },
  {
    "url": "emoji/120/rhinoceros.png",
    "revision": "9caa79ac8abacc64d336e49f60a09f27"
  },
  {
    "url": "emoji/120/ribbon.png",
    "revision": "861d6fdc3b59f103297144826e6852ae"
  },
  {
    "url": "emoji/120/rice-ball.png",
    "revision": "73d8ea9c952c319fdaa80332f210ac46"
  },
  {
    "url": "emoji/120/rice-cracker.png",
    "revision": "ee6b9c5b879b60d4751bea084d5829c0"
  },
  {
    "url": "emoji/120/right-anger-bubble.png",
    "revision": "965646964d2a9ba5bae5b349ac2282e5"
  },
  {
    "url": "emoji/120/right-arrow-curving-down.png",
    "revision": "b62a9348120fdc5bc86d347b0e4736e1"
  },
  {
    "url": "emoji/120/right-arrow-curving-left.png",
    "revision": "2064ab558e944b91ba64b705438bff8e"
  },
  {
    "url": "emoji/120/right-arrow-curving-up.png",
    "revision": "cf9a070ab10182043139099ac282dc25"
  },
  {
    "url": "emoji/120/right-arrow.png",
    "revision": "93d1eb192541aa7278d4a5f620dd9721"
  },
  {
    "url": "emoji/120/right-facing-fist-dark-skin-tone.png",
    "revision": "f1a344a45556949ec1c97b2c3add78c2"
  },
  {
    "url": "emoji/120/right-facing-fist-light-skin-tone.png",
    "revision": "04f08fad42c42a2474474e85bac7b024"
  },
  {
    "url": "emoji/120/right-facing-fist-medium-dark-skin-tone.png",
    "revision": "16df5d33906adfb1d8cd3ae3702abd36"
  },
  {
    "url": "emoji/120/right-facing-fist-medium-light-skin-tone.png",
    "revision": "19dd3753a0d1592a15785a8a6465fd36"
  },
  {
    "url": "emoji/120/right-facing-fist-medium-skin-tone.png",
    "revision": "4880849f54cea0393951b06f05ef7063"
  },
  {
    "url": "emoji/120/right-facing-fist.png",
    "revision": "f34e55bdf1b55d1018e18e68c4b3dcc9"
  },
  {
    "url": "emoji/120/ring.png",
    "revision": "070c46fc35d509811c555f0de7887955"
  },
  {
    "url": "emoji/120/ringed-planet.png",
    "revision": "eaabe410bc1bc34e8a5245ac5f2b37c2"
  },
  {
    "url": "emoji/120/roasted-sweet-potato.png",
    "revision": "71cb379cb8e3b21fd3b05d55e797c4d6"
  },
  {
    "url": "emoji/120/robot.png",
    "revision": "80ca30f7324723fa4e1b0f64bbeca9eb"
  },
  {
    "url": "emoji/120/rocket.png",
    "revision": "8c1b86ef43f2a2b860af5189d983e994"
  },
  {
    "url": "emoji/120/roll-of-paper.png",
    "revision": "fb6cd413d533d4acbd6d08d34716599f"
  },
  {
    "url": "emoji/120/rolled-up-newspaper.png",
    "revision": "5e5ec0910da3b376da510a1531b42deb"
  },
  {
    "url": "emoji/120/roller-coaster.png",
    "revision": "c9e29b13d5f94f6711a7b69147a121f7"
  },
  {
    "url": "emoji/120/rolling-on-the-floor-laughing.png",
    "revision": "2bf9a5e407cf44b3e0e857c9c4bed734"
  },
  {
    "url": "emoji/120/rooster.png",
    "revision": "be8914abbfaa7c93b37d257bd1022104"
  },
  {
    "url": "emoji/120/rose.png",
    "revision": "c46bc47dd31c40932e410a5402b432b3"
  },
  {
    "url": "emoji/120/rosette.png",
    "revision": "286cc0f574708d0e95a2a550b823724b"
  },
  {
    "url": "emoji/120/rotated-heavy-black-heart-bullet.png",
    "revision": "7c18f31d85bb2ed18e4c99a012026661"
  },
  {
    "url": "emoji/120/round-pushpin.png",
    "revision": "52150e46c939abdbe9d4e642d7aeb5af"
  },
  {
    "url": "emoji/120/rugby-football.png",
    "revision": "c4fc5f3d779e2f19535635e6d78a420f"
  },
  {
    "url": "emoji/120/running-shirt.png",
    "revision": "4888a82a261f9112d0c3f0e40570e7af"
  },
  {
    "url": "emoji/120/running-shoe.png",
    "revision": "1bf398776be5f8a6dee7c990842f89d4"
  },
  {
    "url": "emoji/120/sad-but-relieved-face.png",
    "revision": "62f3c95b6be7dfad31d30e7a38340c8c"
  },
  {
    "url": "emoji/120/safety-pin.png",
    "revision": "b67526061604c1df5cd9ddff033b25ec"
  },
  {
    "url": "emoji/120/safety-vest.png",
    "revision": "26472b1b12194e0a7602167e76a473f4"
  },
  {
    "url": "emoji/120/sagittarius.png",
    "revision": "968708847837186f4b5496402d2bc340"
  },
  {
    "url": "emoji/120/sailboat.png",
    "revision": "6ebd199f33a55cf1652525dd3f7c707e"
  },
  {
    "url": "emoji/120/sake.png",
    "revision": "72d89adb47efb2c2b5f9fd3af4134c5b"
  },
  {
    "url": "emoji/120/salt.png",
    "revision": "5a0570860c0d0f530f87ade27a99f36f"
  },
  {
    "url": "emoji/120/sandwich.png",
    "revision": "6c96a067325a7195d8a2b6aa25c4eb3a"
  },
  {
    "url": "emoji/120/santa-claus-dark-skin-tone.png",
    "revision": "dc87e4f15efcaf9779e740c468605070"
  },
  {
    "url": "emoji/120/santa-claus-light-skin-tone.png",
    "revision": "a4e638af4125db26eff83d1ae19cbce5"
  },
  {
    "url": "emoji/120/santa-claus-medium-dark-skin-tone.png",
    "revision": "4650c7a990aed94a1708fc2b720b78aa"
  },
  {
    "url": "emoji/120/santa-claus-medium-light-skin-tone.png",
    "revision": "92cdbc89fc5e244f893b1e684efb8352"
  },
  {
    "url": "emoji/120/santa-claus-medium-skin-tone.png",
    "revision": "8c0e39eb1a1cf01c789ec86603a24dc4"
  },
  {
    "url": "emoji/120/santa-claus.png",
    "revision": "8402ec7bc8c5d4185f3b8947bd33fe45"
  },
  {
    "url": "emoji/120/sari.png",
    "revision": "c3a37d26f59093de973b348cec42b20f"
  },
  {
    "url": "emoji/120/satellite-antenna.png",
    "revision": "425cb58c03f39a0145c8e3c286ed0bd6"
  },
  {
    "url": "emoji/120/satellite.png",
    "revision": "5893e09a263630ee296958d8bfb40e65"
  },
  {
    "url": "emoji/120/sauropod.png",
    "revision": "c81839466d3cf44b766caa79f19308a2"
  },
  {
    "url": "emoji/120/saxophone.png",
    "revision": "12e26a064ca1fabd04121f3532ed3bef"
  },
  {
    "url": "emoji/120/scarf.png",
    "revision": "0d3a407e21eea3d2cc37b475ba73563c"
  },
  {
    "url": "emoji/120/school.png",
    "revision": "58d9595846f63023e02a731ae09e7edd"
  },
  {
    "url": "emoji/120/scissors.png",
    "revision": "26b6a95a914678bf71f16eb07cf5866d"
  },
  {
    "url": "emoji/120/scorpio.png",
    "revision": "d446ad021e2c35c31a76b7a62e69bf25"
  },
  {
    "url": "emoji/120/scorpion.png",
    "revision": "90d0a20cac3c331e10b877169a1a07f7"
  },
  {
    "url": "emoji/120/scroll.png",
    "revision": "517d38a548b5dde47633d9c36014f081"
  },
  {
    "url": "emoji/120/seat.png",
    "revision": "5eecbcbec35ac4518e0ec17bdbcb9ffe"
  },
  {
    "url": "emoji/120/see-no-evil-monkey.png",
    "revision": "ba21f58e0a3bdc1bdf40f9090d929a9a"
  },
  {
    "url": "emoji/120/seedling.png",
    "revision": "a11e1228f95f960cdc73ec54d0be32fe"
  },
  {
    "url": "emoji/120/selfie-dark-skin-tone.png",
    "revision": "5137b0484323be96830f4e2f1071c803"
  },
  {
    "url": "emoji/120/selfie-light-skin-tone.png",
    "revision": "f8da47bc214404b30b2f61a53f94aeb6"
  },
  {
    "url": "emoji/120/selfie-medium-dark-skin-tone.png",
    "revision": "99f2fd6c99e480131f0637da72101375"
  },
  {
    "url": "emoji/120/selfie-medium-light-skin-tone.png",
    "revision": "4c8d2ecffe9d39a668b8b7d99e2e1846"
  },
  {
    "url": "emoji/120/selfie-medium-skin-tone.png",
    "revision": "95a5c387068b8f4ccccece5967c2cd5e"
  },
  {
    "url": "emoji/120/selfie.png",
    "revision": "08a015c4ef89aaf386e3787e6838fc24"
  },
  {
    "url": "emoji/120/service-dog.png",
    "revision": "8cb0c73012f16922ec6f04889ade28f8"
  },
  {
    "url": "emoji/120/seven-oclock.png",
    "revision": "3846b5be0893a56d6ce17dc9b5a01ac4"
  },
  {
    "url": "emoji/120/seven-thirty.png",
    "revision": "d4cf5de2c6bbeb747f9d81b580ccdcdd"
  },
  {
    "url": "emoji/120/shallow-pan-of-food.png",
    "revision": "5c6dbf71e798b2bb23eda2f498e70078"
  },
  {
    "url": "emoji/120/shamrock.png",
    "revision": "7c0fefde66806d32a5c1f813fb63bc15"
  },
  {
    "url": "emoji/120/shark.png",
    "revision": "55ccd64634ca44d3fb7357b5803a9f2f"
  },
  {
    "url": "emoji/120/shaved-ice.png",
    "revision": "e0055d2778b6abcc7d727e09cca2366e"
  },
  {
    "url": "emoji/120/sheaf-of-rice.png",
    "revision": "5235e9f0ef24abd76975ee6eaf9c0f2f"
  },
  {
    "url": "emoji/120/shield.png",
    "revision": "a9e91aa25550cb6fb5360125edb07c02"
  },
  {
    "url": "emoji/120/shinto-shrine.png",
    "revision": "dae18188447aa0a127937be53820f4cf"
  },
  {
    "url": "emoji/120/ship.png",
    "revision": "0778c1ef9443cf5483910cb726cfe5d3"
  },
  {
    "url": "emoji/120/shooting-star.png",
    "revision": "017579d2c65b7d688dc385ccb0da3b3d"
  },
  {
    "url": "emoji/120/shopping-bags.png",
    "revision": "31ff490b4524bb58fb75f5982aa063fe"
  },
  {
    "url": "emoji/120/shopping-cart.png",
    "revision": "b22a2569bed8d289c5d2a2eca175109a"
  },
  {
    "url": "emoji/120/shortcake.png",
    "revision": "6f03b2d81c966e22ea577917fe7b3629"
  },
  {
    "url": "emoji/120/shorts.png",
    "revision": "e7a61e869afc397c484916acbc13f579"
  },
  {
    "url": "emoji/120/shower.png",
    "revision": "11839de423d421379516d09acafaaa56"
  },
  {
    "url": "emoji/120/shrimp.png",
    "revision": "2f6569b37e77a8c3eb94c3856b56a6b9"
  },
  {
    "url": "emoji/120/shuffle-tracks-button.png",
    "revision": "e68b420d6540672fbae05f4e93767b09"
  },
  {
    "url": "emoji/120/shushing-face.png",
    "revision": "32bc60fe2c15bbb652a8b58bb754a058"
  },
  {
    "url": "emoji/120/sign-of-the-horns-dark-skin-tone.png",
    "revision": "4423a4b4e751f5b313a259f5f1789373"
  },
  {
    "url": "emoji/120/sign-of-the-horns-light-skin-tone.png",
    "revision": "3b5e6a80a06b1132341a53ba8217e451"
  },
  {
    "url": "emoji/120/sign-of-the-horns-medium-dark-skin-tone.png",
    "revision": "42d07ac2b9d4938901c25ecb5e76436f"
  },
  {
    "url": "emoji/120/sign-of-the-horns-medium-light-skin-tone.png",
    "revision": "b47f4b442c2585fdd2332be4757f1ee9"
  },
  {
    "url": "emoji/120/sign-of-the-horns-medium-skin-tone.png",
    "revision": "c4d837e352b0991d28456ac61907ee67"
  },
  {
    "url": "emoji/120/sign-of-the-horns.png",
    "revision": "05903c77e5763f489823acd878853416"
  },
  {
    "url": "emoji/120/six-oclock.png",
    "revision": "53a2aa6723a2cbebbbeae07e28b511ba"
  },
  {
    "url": "emoji/120/six-thirty.png",
    "revision": "e405eba1f1e1ed7639acb02e8b45c222"
  },
  {
    "url": "emoji/120/skateboard.png",
    "revision": "5c59d317ff827f0d588849204bff9660"
  },
  {
    "url": "emoji/120/skier-dark-skin-tone.png",
    "revision": "834f88d6540d68b8553eafd47cb4e2d2"
  },
  {
    "url": "emoji/120/skier-light-skin-tone.png",
    "revision": "20923b0c909e4a4abdb74b94a5a80030"
  },
  {
    "url": "emoji/120/skier-medium-dark-skin-tone.png",
    "revision": "0c7cd56c6e500121338dc5fbf9dcc5ee"
  },
  {
    "url": "emoji/120/skier-medium-light-skin-tone.png",
    "revision": "212efce3e07be853b2127809f1020564"
  },
  {
    "url": "emoji/120/skier-medium-skin-tone.png",
    "revision": "ecafda14c53de972512b00dad9493d32"
  },
  {
    "url": "emoji/120/skier.png",
    "revision": "716a523772731fea659e8c7f4634072f"
  },
  {
    "url": "emoji/120/skis.png",
    "revision": "3561c87773ad7e151b2ceb9f6863fef2"
  },
  {
    "url": "emoji/120/skull-and-crossbones.png",
    "revision": "186f0ccca8be1652707d31ff02e659a3"
  },
  {
    "url": "emoji/120/skull.png",
    "revision": "a217b6a32e2d49b267b36f5616835527"
  },
  {
    "url": "emoji/120/skunk.png",
    "revision": "1fcd6e9c522f52a919bb0d41674b13ae"
  },
  {
    "url": "emoji/120/sled.png",
    "revision": "64b15753134d2281f81cd84dca395dbb"
  },
  {
    "url": "emoji/120/sleeping-face.png",
    "revision": "e72b5470f5ea427009b0f62c491636a4"
  },
  {
    "url": "emoji/120/sleepy-face.png",
    "revision": "e7e4d216be23b2041405187ec6acbd44"
  },
  {
    "url": "emoji/120/slightly-frowning-face.png",
    "revision": "e5139732b231747f988d956d8e7719cd"
  },
  {
    "url": "emoji/120/slightly-smiling-face.png",
    "revision": "d5d8de2ed30023a8c13dacccfef76776"
  },
  {
    "url": "emoji/120/slot-machine.png",
    "revision": "338d037d8e286c06bd9ffa42422b25f9"
  },
  {
    "url": "emoji/120/sloth.png",
    "revision": "41dcedb6348532ab344e53c29506fec1"
  },
  {
    "url": "emoji/120/small-airplane.png",
    "revision": "ed1e63a68e968a45ec90c22641ef46f1"
  },
  {
    "url": "emoji/120/small-blue-diamond.png",
    "revision": "264850761b18851e1152eba8d8c9b971"
  },
  {
    "url": "emoji/120/small-orange-diamond.png",
    "revision": "fb92ee445ee73809463fc3ce08708de1"
  },
  {
    "url": "emoji/120/smiling-cat-with-heart-eyes.png",
    "revision": "5e25aa2e0034d71204032c8a05d3d486"
  },
  {
    "url": "emoji/120/smiling-face-with-halo.png",
    "revision": "c7e88822c2480b5b063a9d23dd8d5f3b"
  },
  {
    "url": "emoji/120/smiling-face-with-heart-eyes.png",
    "revision": "bcb0215a2b7b606f1142546dae0431d1"
  },
  {
    "url": "emoji/120/smiling-face-with-hearts.png",
    "revision": "d06ca756782d1a798f92231c819f295f"
  },
  {
    "url": "emoji/120/smiling-face-with-horns.png",
    "revision": "c39f8abcc2f21436fc5a13d6d798200f"
  },
  {
    "url": "emoji/120/smiling-face-with-smiling-eyes.png",
    "revision": "c9d80ba33eccdbef4e22cc90ae7514d3"
  },
  {
    "url": "emoji/120/smiling-face-with-sunglasses.png",
    "revision": "90cd3ed11ff5d818a6b991f3b1a62e9a"
  },
  {
    "url": "emoji/120/smiling-face.png",
    "revision": "34344c9eac3de206f33c9ad899d0d587"
  },
  {
    "url": "emoji/120/smirking-face.png",
    "revision": "c91f62c1ef3ee8ae133e728677512f2f"
  },
  {
    "url": "emoji/120/snail.png",
    "revision": "f1e3592865b8aee2a370f88bfe58e977"
  },
  {
    "url": "emoji/120/snake.png",
    "revision": "306be0bda00dd0f09531d348676e33ea"
  },
  {
    "url": "emoji/120/sneezing-face.png",
    "revision": "e2b6053061c43873d3a19dc65daa29e5"
  },
  {
    "url": "emoji/120/snow-capped-mountain.png",
    "revision": "079cff5a09d4174958da3bbacb545a5f"
  },
  {
    "url": "emoji/120/snowboarder-dark-skin-tone.png",
    "revision": "29347a9ac30e3b99a81e84038d5cdc20"
  },
  {
    "url": "emoji/120/snowboarder-light-skin-tone.png",
    "revision": "5d3ad7990b03034a359f655bf9565403"
  },
  {
    "url": "emoji/120/snowboarder-medium-dark-skin-tone.png",
    "revision": "2e546b910391e0dacde4d0c45f6ed6bf"
  },
  {
    "url": "emoji/120/snowboarder-medium-light-skin-tone.png",
    "revision": "c836fa0f3a353731b45f77fdbd24cd40"
  },
  {
    "url": "emoji/120/snowboarder-medium-skin-tone.png",
    "revision": "269c5325796748e61671e65deade6934"
  },
  {
    "url": "emoji/120/snowboarder.png",
    "revision": "aa1ab6f3988847678133194c8d33afbb"
  },
  {
    "url": "emoji/120/snowflake.png",
    "revision": "c09df1ad5cb1427a2516190b34583a9b"
  },
  {
    "url": "emoji/120/snowman-without-snow.png",
    "revision": "32e128a2628662a537859e50c8b7a575"
  },
  {
    "url": "emoji/120/snowman.png",
    "revision": "bb8a90779c302542e40535cf837ede24"
  },
  {
    "url": "emoji/120/soap.png",
    "revision": "ff681fa2dfcb542f26a05e4a62ed63bf"
  },
  {
    "url": "emoji/120/soccer-ball.png",
    "revision": "829ae935a1926cea4f0dc001df7e0862"
  },
  {
    "url": "emoji/120/socks.png",
    "revision": "4ba699e9a746f904bbb99c013ce76fca"
  },
  {
    "url": "emoji/120/soft-ice-cream.png",
    "revision": "d26926b5a8f83149097509bc5bcaae41"
  },
  {
    "url": "emoji/120/softball.png",
    "revision": "10dec91b7d63e102544ac74ac7f55e2b"
  },
  {
    "url": "emoji/120/soon-arrow.png",
    "revision": "5123f802209a5688e8044be56ab9ac61"
  },
  {
    "url": "emoji/120/sos-button.png",
    "revision": "1d02509f6ea8073db17a233c6c3b1306"
  },
  {
    "url": "emoji/120/spade-suit.png",
    "revision": "28ab09d4390577b0c3ee5452e07171ba"
  },
  {
    "url": "emoji/120/spaghetti.png",
    "revision": "c316638a1139ea405ead95a756025fee"
  },
  {
    "url": "emoji/120/sparkle.png",
    "revision": "3b9b759ded98abf21ef307401a0b7a5c"
  },
  {
    "url": "emoji/120/sparkler.png",
    "revision": "165f1adfc6f2bfbfb490a4483bba950a"
  },
  {
    "url": "emoji/120/sparkles.png",
    "revision": "ced74f4b42c8d30ceeab33a6c9def38b"
  },
  {
    "url": "emoji/120/sparkling-heart.png",
    "revision": "963d02ff8ffcde9ebab7d42644717856"
  },
  {
    "url": "emoji/120/speak-no-evil-monkey.png",
    "revision": "7353c1d8c2fc004ba108a4f1b66fee11"
  },
  {
    "url": "emoji/120/speaker-high-volume.png",
    "revision": "771aee0b4d02ba55e1564de07e95cee9"
  },
  {
    "url": "emoji/120/speaker-low-volume.png",
    "revision": "4e2fc7385640b3d014d709c50fed8e40"
  },
  {
    "url": "emoji/120/speaker-medium-volume.png",
    "revision": "dd1f1f58a236364f3d2c1dba10abb52d"
  },
  {
    "url": "emoji/120/speaking-head.png",
    "revision": "36decc25426c7f12f6fce0f88a0ccc75"
  },
  {
    "url": "emoji/120/speech-balloon.png",
    "revision": "9a1e43c3ef69e97031cfe056b9827460"
  },
  {
    "url": "emoji/120/speedboat.png",
    "revision": "9c7670b1e50a1611279a9bb327377e9b"
  },
  {
    "url": "emoji/120/spider-web.png",
    "revision": "3bf71fd5689a241a9b9fe6318ed2838c"
  },
  {
    "url": "emoji/120/spider.png",
    "revision": "14ce9b6cb9f965b3f218a4ea0fba0167"
  },
  {
    "url": "emoji/120/spiral-calendar.png",
    "revision": "df63963fdcea8754c20a8b5c6099af2b"
  },
  {
    "url": "emoji/120/spiral-notepad.png",
    "revision": "93181bc84c95529517c6bf745d49d228"
  },
  {
    "url": "emoji/120/spiral-shell.png",
    "revision": "91f85d9272ff2178fde4af1d019c9d67"
  },
  {
    "url": "emoji/120/sponge.png",
    "revision": "96706989b20d9afc78054687199f238f"
  },
  {
    "url": "emoji/120/spoon.png",
    "revision": "145d484e236dca36a784577a028a89c7"
  },
  {
    "url": "emoji/120/sport-utility-vehicle.png",
    "revision": "9b5adb7b900a0b5d254462b5e6a5dcf1"
  },
  {
    "url": "emoji/120/sports-medal.png",
    "revision": "7180a11e6fc35d3b7dcf56286b9cbb11"
  },
  {
    "url": "emoji/120/spouting-whale.png",
    "revision": "d6857929d993eefda22b00a45f6f9107"
  },
  {
    "url": "emoji/120/squid.png",
    "revision": "5c7b460916f08ae48bf9536409861c01"
  },
  {
    "url": "emoji/120/squinting-face-with-tongue.png",
    "revision": "e5a3e0f215ff61d106e1c5921c773a99"
  },
  {
    "url": "emoji/120/stadium.png",
    "revision": "f47e0421e1536e73f25a6c6ffd48b27f"
  },
  {
    "url": "emoji/120/star-and-crescent.png",
    "revision": "db6df5cd6f684b518d516220ba04ce19"
  },
  {
    "url": "emoji/120/star-of-david.png",
    "revision": "e6165c49e7a1e8f249327a14c585c1c5"
  },
  {
    "url": "emoji/120/star-struck.png",
    "revision": "b4762d234952a647c20d2f1b00134369"
  },
  {
    "url": "emoji/120/star.png",
    "revision": "ac57a1c504ea30d7c723d6715a480625"
  },
  {
    "url": "emoji/120/station.png",
    "revision": "d643a75e03ab3305cc797e7104b4cff3"
  },
  {
    "url": "emoji/120/statue-of-liberty.png",
    "revision": "a7d2652c8299f23e20afb9ac33f68ba7"
  },
  {
    "url": "emoji/120/steaming-bowl.png",
    "revision": "a0ebe40fc9e994577e5414094a59ec02"
  },
  {
    "url": "emoji/120/stethoscope.png",
    "revision": "5205a453fcbbd356f7eb9b22fe338b6d"
  },
  {
    "url": "emoji/120/stop-button.png",
    "revision": "a91a56d146398c0940b6b4bf49602cab"
  },
  {
    "url": "emoji/120/stop-sign.png",
    "revision": "0fdb4145c6545cf6cc64d42110df67ba"
  },
  {
    "url": "emoji/120/stopwatch.png",
    "revision": "752d871d78257f1b3b5a0026383bb168"
  },
  {
    "url": "emoji/120/straight-ruler.png",
    "revision": "e2cda95ec69a7baca4ceecb3a8828de6"
  },
  {
    "url": "emoji/120/strawberry.png",
    "revision": "a775591a623c8ad0206a213b37964fbc"
  },
  {
    "url": "emoji/120/studio-microphone.png",
    "revision": "89e9b51705779323dcccd5e200654017"
  },
  {
    "url": "emoji/120/stuffed-flatbread.png",
    "revision": "0ebd413475b744728c6dfdd6c2231302"
  },
  {
    "url": "emoji/120/stunt-cat.png",
    "revision": "dc011e11b42b667489db24c4ed1d6c8b"
  },
  {
    "url": "emoji/120/sun-behind-cloud.png",
    "revision": "34dc362aedc324e93bf0ab8e79b3bf33"
  },
  {
    "url": "emoji/120/sun-behind-large-cloud.png",
    "revision": "dd1008ee700c0a765f378c1cf58916a7"
  },
  {
    "url": "emoji/120/sun-behind-rain-cloud.png",
    "revision": "176228c94e3718114e9458c46fff0357"
  },
  {
    "url": "emoji/120/sun-behind-small-cloud.png",
    "revision": "cb50d1b4b6ac6a7a485c8b32eb1c6e2c"
  },
  {
    "url": "emoji/120/sun-with-face.png",
    "revision": "da61893645ee3bc7e086f29c62811f12"
  },
  {
    "url": "emoji/120/sun.png",
    "revision": "87c25d9c6622ea9d37750b6a409be5ff"
  },
  {
    "url": "emoji/120/sunflower.png",
    "revision": "89ffa164a51ece11055da4986d35e7a0"
  },
  {
    "url": "emoji/120/sunglasses.png",
    "revision": "472ea1ae92e523449eb8283006375708"
  },
  {
    "url": "emoji/120/sunrise-over-mountains.png",
    "revision": "9e340a71a6267c0f9323b49be11c8fba"
  },
  {
    "url": "emoji/120/sunrise.png",
    "revision": "4de07ebbff2f284b4cc884c7555afd28"
  },
  {
    "url": "emoji/120/sunset.png",
    "revision": "7ee646c18d878b8f48382df2ebea95d7"
  },
  {
    "url": "emoji/120/superhero-dark-skin-tone.png",
    "revision": "adff54284b5c56002ff13f86feeb48c2"
  },
  {
    "url": "emoji/120/superhero-light-skin-tone.png",
    "revision": "e6db53f3cd89158f265647b417db0f85"
  },
  {
    "url": "emoji/120/superhero-medium-dark-skin-tone.png",
    "revision": "a7fb3d2936aec55fc7c965568d139efc"
  },
  {
    "url": "emoji/120/superhero-medium-light-skin-tone.png",
    "revision": "5acb66925fa97151ea36f3f66f828273"
  },
  {
    "url": "emoji/120/superhero-medium-skin-tone.png",
    "revision": "fede533a01e6ecd12c72b87715f04e89"
  },
  {
    "url": "emoji/120/superhero.png",
    "revision": "bf342aa2049a921524148c51e8e99203"
  },
  {
    "url": "emoji/120/supervillain-dark-skin-tone.png",
    "revision": "4565e1f140e0bd158e2e42dd0357b03a"
  },
  {
    "url": "emoji/120/supervillain-light-skin-tone.png",
    "revision": "8171431d679244fc0dce735600ff8567"
  },
  {
    "url": "emoji/120/supervillain-medium-dark-skin-tone.png",
    "revision": "7914d34bbe5a45b1520729de26728db1"
  },
  {
    "url": "emoji/120/supervillain-medium-light-skin-tone.png",
    "revision": "c88fdd3ec6d22e6823d29225ee0367f6"
  },
  {
    "url": "emoji/120/supervillain-medium-skin-tone.png",
    "revision": "129b90e37cdda83d704ffc430882122b"
  },
  {
    "url": "emoji/120/supervillain.png",
    "revision": "3f7a49bfb635d5e1544bd3c1671e83f1"
  },
  {
    "url": "emoji/120/sushi.png",
    "revision": "35e3bb790d1a6c89d03a9c92efc5dfd9"
  },
  {
    "url": "emoji/120/suspension-railway.png",
    "revision": "f76b8ead6d6e1b8d15b01fd0fae41ad4"
  },
  {
    "url": "emoji/120/swan.png",
    "revision": "75f23d65c0fdcf5a31a2a709c6a96550"
  },
  {
    "url": "emoji/120/sweat-droplets.png",
    "revision": "17b5751a13458965133f8926d5d367fa"
  },
  {
    "url": "emoji/120/synagogue.png",
    "revision": "010f0ea33908d40f51bfe589f010cf42"
  },
  {
    "url": "emoji/120/syringe.png",
    "revision": "e215b794f975011ad451eb23be078d1d"
  },
  {
    "url": "emoji/120/t-rex.png",
    "revision": "4048ebf4b57608c04293d75bf457e5c2"
  },
  {
    "url": "emoji/120/t-shirt.png",
    "revision": "81fa33fb78fb59c9fe836f4888b1d9c0"
  },
  {
    "url": "emoji/120/taco.png",
    "revision": "7de37d5ca709b4c3ff7e427fc4e9ed77"
  },
  {
    "url": "emoji/120/takeout-box.png",
    "revision": "2c0899dc7a50bc02c4ac4a4c2725a200"
  },
  {
    "url": "emoji/120/tanabata-tree.png",
    "revision": "2873ec253fcf1d9720d71ee2ef332666"
  },
  {
    "url": "emoji/120/tangerine.png",
    "revision": "8be103222b0dda6482f8a3e8c1b45d60"
  },
  {
    "url": "emoji/120/taurus.png",
    "revision": "b24423da6f3cfcbf60e710f9b99d75b7"
  },
  {
    "url": "emoji/120/taxi.png",
    "revision": "7e675cfa4b6eda3399a6a8ebeb65607c"
  },
  {
    "url": "emoji/120/teacup-without-handle.png",
    "revision": "b4665cd63e6dc733f594b4c3ad3a4808"
  },
  {
    "url": "emoji/120/tear-off-calendar.png",
    "revision": "9d0a21d20d6dd65ad2a28dcc53e823ce"
  },
  {
    "url": "emoji/120/teddy-bear.png",
    "revision": "e1a205eb7bce72e5a16e47ccb0637076"
  },
  {
    "url": "emoji/120/telephone-receiver.png",
    "revision": "d26d112fdbfd9c2ff0a59878ea5e718d"
  },
  {
    "url": "emoji/120/telephone.png",
    "revision": "c7c6a1780bb62dffcc77807c43050a2b"
  },
  {
    "url": "emoji/120/telescope.png",
    "revision": "ba065099048b5ea391902293a72ea801"
  },
  {
    "url": "emoji/120/television.png",
    "revision": "8aae4606c6e5b41da208cacb7583d56b"
  },
  {
    "url": "emoji/120/ten-oclock.png",
    "revision": "953387cf897f0cbb1fd54baaf66a79bf"
  },
  {
    "url": "emoji/120/ten-thirty.png",
    "revision": "20b308754647a60df4976d00e9e59ad4"
  },
  {
    "url": "emoji/120/tennis.png",
    "revision": "7929aba281c47650a868f53ef05ad9c3"
  },
  {
    "url": "emoji/120/tent.png",
    "revision": "652af0546de663333c057e4c99618eab"
  },
  {
    "url": "emoji/120/test-tube.png",
    "revision": "f5b4a8a8a3ebbc441f85d114bcdec24b"
  },
  {
    "url": "emoji/120/thermometer.png",
    "revision": "ebae071a785117c614b0cbdef815ff7a"
  },
  {
    "url": "emoji/120/thinking-face.png",
    "revision": "1c1f482ef59c4532d497f763c6af657e"
  },
  {
    "url": "emoji/120/thought-balloon.png",
    "revision": "43b074ace99987e46e4576fa6d9c3d33"
  },
  {
    "url": "emoji/120/thread.png",
    "revision": "592667beda7db2fe0da8b09d21263303"
  },
  {
    "url": "emoji/120/three-oclock.png",
    "revision": "7737363c01da5d9042102d85dfc8b3f6"
  },
  {
    "url": "emoji/120/three-thirty.png",
    "revision": "270b9e9055ce4f26db7b6557432434d4"
  },
  {
    "url": "emoji/120/thumbs-down-dark-skin-tone.png",
    "revision": "f1cee8bcfc3ba01d8350cacf3fd1c298"
  },
  {
    "url": "emoji/120/thumbs-down-light-skin-tone.png",
    "revision": "41d0ea885ad603cefe243c4751ad8729"
  },
  {
    "url": "emoji/120/thumbs-down-medium-dark-skin-tone.png",
    "revision": "c551b0ee4e0bb702ad4b6e5938594e8a"
  },
  {
    "url": "emoji/120/thumbs-down-medium-light-skin-tone.png",
    "revision": "ab981207d4ce10761612dcb6987e6d49"
  },
  {
    "url": "emoji/120/thumbs-down-medium-skin-tone.png",
    "revision": "36afeff8800144343f99e32c3b71924a"
  },
  {
    "url": "emoji/120/thumbs-down.png",
    "revision": "75bf22aab17f3d51e973109b47aa9489"
  },
  {
    "url": "emoji/120/thumbs-up-dark-skin-tone.png",
    "revision": "18eef8fda6d76eb432059ba89f2fc037"
  },
  {
    "url": "emoji/120/thumbs-up-light-skin-tone.png",
    "revision": "cddd66ca7e101f3712325eb732b5fdc5"
  },
  {
    "url": "emoji/120/thumbs-up-medium-dark-skin-tone.png",
    "revision": "57030a7f467995afd58087875b805dd2"
  },
  {
    "url": "emoji/120/thumbs-up-medium-light-skin-tone.png",
    "revision": "f5b3c08160cf83df6adef7ba350dd18a"
  },
  {
    "url": "emoji/120/thumbs-up-medium-skin-tone.png",
    "revision": "851c7954cb5839ad2029aaadbf3f1c61"
  },
  {
    "url": "emoji/120/thumbs-up.png",
    "revision": "e0e9209a2ed234d75d81d1ba3b62d59f"
  },
  {
    "url": "emoji/120/ticket.png",
    "revision": "e05ffaa6454ea477ee491bf0cb0d7201"
  },
  {
    "url": "emoji/120/tiger-face.png",
    "revision": "9b11a78fded891ffa7bf322d97814f7e"
  },
  {
    "url": "emoji/120/tiger.png",
    "revision": "cd7b5c35ae83eadc8741994062696d06"
  },
  {
    "url": "emoji/120/timer-clock.png",
    "revision": "07169cc0cd7a5053e32fd65f23ad906c"
  },
  {
    "url": "emoji/120/tired-face.png",
    "revision": "c10e93f559b170f3f18b412e0c4d37d1"
  },
  {
    "url": "emoji/120/toilet.png",
    "revision": "bdb1d543ebc92186a456a9974ecd9559"
  },
  {
    "url": "emoji/120/tokyo-tower.png",
    "revision": "bce04ee0e5a3c6fe61cca16914d66c74"
  },
  {
    "url": "emoji/120/tomato.png",
    "revision": "04ebecd76ebaaaa1e2b4b1af0e854c7d"
  },
  {
    "url": "emoji/120/tongue.png",
    "revision": "9362e70696f132c73be5ac39eb26cf43"
  },
  {
    "url": "emoji/120/toolbox.png",
    "revision": "dbc7058644b9c1fc06711dc0b02a4cf2"
  },
  {
    "url": "emoji/120/tooth.png",
    "revision": "05fe585fec4cb71e578d8afd5b7d692d"
  },
  {
    "url": "emoji/120/top-arrow.png",
    "revision": "37a3393f7c30f608eb1d73890bacc78f"
  },
  {
    "url": "emoji/120/top-hat.png",
    "revision": "4fdcfe17a05cf0e17f0dac31982cf768"
  },
  {
    "url": "emoji/120/tornado.png",
    "revision": "b848acf7aa9205b35213860eec198e37"
  },
  {
    "url": "emoji/120/trackball.png",
    "revision": "da71ffffb860e3cfb2192cc6c1800253"
  },
  {
    "url": "emoji/120/tractor.png",
    "revision": "cc9fc4a60d7158bfbcaf67654ce8c6df"
  },
  {
    "url": "emoji/120/trade-mark.png",
    "revision": "7cacf9e2cf8420b9863f2c4f5e968318"
  },
  {
    "url": "emoji/120/train.png",
    "revision": "6d75901859622e90d55ed328a8124d14"
  },
  {
    "url": "emoji/120/tram-car.png",
    "revision": "e4849852c9c981a6267bebc3608374cf"
  },
  {
    "url": "emoji/120/tram.png",
    "revision": "21165adf70b2f1519a2119da280b3690"
  },
  {
    "url": "emoji/120/triangular-flag.png",
    "revision": "beea515b0cb413d7e6a3b4226476b13c"
  },
  {
    "url": "emoji/120/triangular-ruler.png",
    "revision": "a8f617af7e2a5dae7b9aac5272c34683"
  },
  {
    "url": "emoji/120/trident-emblem.png",
    "revision": "30eabc1ade3a0f9b32d392bc03261347"
  },
  {
    "url": "emoji/120/trolleybus.png",
    "revision": "2fe24ebe29c4ebe58b375423d6ae2bb8"
  },
  {
    "url": "emoji/120/trophy.png",
    "revision": "ca3063c008f70475b2c10e9a47938085"
  },
  {
    "url": "emoji/120/tropical-drink.png",
    "revision": "79c9b66431324179fcfdb51207584f78"
  },
  {
    "url": "emoji/120/tropical-fish.png",
    "revision": "95e51df4f810c5f88779d9a1d1c6679e"
  },
  {
    "url": "emoji/120/trumpet.png",
    "revision": "c39e1f1254095e7661047ee1976a6526"
  },
  {
    "url": "emoji/120/tulip.png",
    "revision": "9c3f5978c669275f6881a2999d79f29d"
  },
  {
    "url": "emoji/120/tumbler-glass.png",
    "revision": "11e35fff3ffcc45c2167cad7ab688a4f"
  },
  {
    "url": "emoji/120/turkey.png",
    "revision": "26b7d30b1331ed5c7b7e048a352f15c1"
  },
  {
    "url": "emoji/120/turtle.png",
    "revision": "7549aff6d9953c70af3774bd90631690"
  },
  {
    "url": "emoji/120/twelve-oclock.png",
    "revision": "77038c2b392d82d503d02bd6793f9469"
  },
  {
    "url": "emoji/120/twelve-thirty.png",
    "revision": "c4d35854172576855d554887c25ed8d1"
  },
  {
    "url": "emoji/120/two-hearts.png",
    "revision": "120f59d1d4e31489659059631eed5bb9"
  },
  {
    "url": "emoji/120/two-hump-camel.png",
    "revision": "2cdb34a1d1e13060d681942712442e2a"
  },
  {
    "url": "emoji/120/two-oclock.png",
    "revision": "021495cb3277ec73beeeeb94bd308c4a"
  },
  {
    "url": "emoji/120/two-thirty.png",
    "revision": "efb7416b81ebdf084a8eab2d63cb439a"
  },
  {
    "url": "emoji/120/umbrella-on-ground.png",
    "revision": "61c06faa4a1d64fad0747fe236bb924b"
  },
  {
    "url": "emoji/120/umbrella-with-rain-drops.png",
    "revision": "fa23e57bd7b022786ce58d69d088b1ea"
  },
  {
    "url": "emoji/120/umbrella.png",
    "revision": "8f61093d29013bdf1bd39f7725153682"
  },
  {
    "url": "emoji/120/unamused-face.png",
    "revision": "586af77836a6b4c3a88292424f34d0d0"
  },
  {
    "url": "emoji/120/unicorn.png",
    "revision": "1fc71f071fae28f07636cb901e0d3da4"
  },
  {
    "url": "emoji/120/unlocked.png",
    "revision": "12bfd8c2f61a212bb2e67dc255e44259"
  },
  {
    "url": "emoji/120/up-arrow.png",
    "revision": "94a41bfee9a1980be85e33256a369449"
  },
  {
    "url": "emoji/120/up-button.png",
    "revision": "e5d26e90027086b5de06c688596ead33"
  },
  {
    "url": "emoji/120/up-down-arrow.png",
    "revision": "be0d4a3fdd462855e8ce8006105a8f57"
  },
  {
    "url": "emoji/120/up-left-arrow.png",
    "revision": "03e4f976f5cea951ca129ab5fe743620"
  },
  {
    "url": "emoji/120/up-right-arrow.png",
    "revision": "54158e02370ea3b0818dd147006e4f07"
  },
  {
    "url": "emoji/120/upper-right-pencil.png",
    "revision": "9a111e390b35ffb6831541abab099dee"
  },
  {
    "url": "emoji/120/upside-down-face.png",
    "revision": "1068de456f47d6f28c4ecad5e5519591"
  },
  {
    "url": "emoji/120/upwards-button.png",
    "revision": "c65a8dad2d7b8283b8968302666293dc"
  },
  {
    "url": "emoji/120/vampire-dark-skin-tone.png",
    "revision": "7c28bcd769ebad4fe3b46e3e90c62416"
  },
  {
    "url": "emoji/120/vampire-light-skin-tone.png",
    "revision": "6498af9989025e2c87712a795385e69d"
  },
  {
    "url": "emoji/120/vampire-medium-dark-skin-tone.png",
    "revision": "b1c4129587ab84fa3a05652ec416f8e0"
  },
  {
    "url": "emoji/120/vampire-medium-light-skin-tone.png",
    "revision": "63a0c9b68ba15458caef638c79af163c"
  },
  {
    "url": "emoji/120/vampire-medium-skin-tone.png",
    "revision": "0bbe3c28c5a94de4766cb768b054e203"
  },
  {
    "url": "emoji/120/vampire.png",
    "revision": "75999944903e0dbcd82686e204630013"
  },
  {
    "url": "emoji/120/vertical-traffic-light.png",
    "revision": "3abce216eb1f8ffa48e9b193f8a17ed9"
  },
  {
    "url": "emoji/120/vibration-mode.png",
    "revision": "a1d1e299bb1108cc136e20e831080283"
  },
  {
    "url": "emoji/120/victory-hand-dark-skin-tone.png",
    "revision": "9419013a52b83202020d587abbfbeaf8"
  },
  {
    "url": "emoji/120/victory-hand-light-skin-tone.png",
    "revision": "8bd74ac1ae0462e23915c2768ee2d71b"
  },
  {
    "url": "emoji/120/victory-hand-medium-dark-skin-tone.png",
    "revision": "b0dab4ad89205138076582561e1ed84c"
  },
  {
    "url": "emoji/120/victory-hand-medium-light-skin-tone.png",
    "revision": "2c3c5c29554b1cc688b1c666a79bb765"
  },
  {
    "url": "emoji/120/victory-hand-medium-skin-tone.png",
    "revision": "b6e3eec9c2c0b32924fe2b74af1749ae"
  },
  {
    "url": "emoji/120/victory-hand.png",
    "revision": "cb11bf0d71f55e509695d3b5f3651ca2"
  },
  {
    "url": "emoji/120/video-camera.png",
    "revision": "db17b94b4819ab9d671936f40b8e9130"
  },
  {
    "url": "emoji/120/video-game.png",
    "revision": "51121fb30136e46f1b1177e0f0d161ee"
  },
  {
    "url": "emoji/120/videocassette.png",
    "revision": "128c55803f6ea849d430151ee3b3dce2"
  },
  {
    "url": "emoji/120/violin.png",
    "revision": "8d346c7287fb8c89aab041f8b5f19750"
  },
  {
    "url": "emoji/120/virgo.png",
    "revision": "1e3cd2779a06f4ecaca85e45874af2c0"
  },
  {
    "url": "emoji/120/volcano.png",
    "revision": "e801815d952abb662e9cf3a71b7361a5"
  },
  {
    "url": "emoji/120/volleyball.png",
    "revision": "6aa21c7f3b5432a4cadaa0a0bb5159c6"
  },
  {
    "url": "emoji/120/vs-button.png",
    "revision": "47829f495a5e8bd3b8bef215abe4a97a"
  },
  {
    "url": "emoji/120/vulcan-salute-dark-skin-tone.png",
    "revision": "df0792e539b879711084b2319449fa89"
  },
  {
    "url": "emoji/120/vulcan-salute-light-skin-tone.png",
    "revision": "ff46857a22fe34bc599da4d1e95a6e21"
  },
  {
    "url": "emoji/120/vulcan-salute-medium-dark-skin-tone.png",
    "revision": "d55cce26c36c37e2e3e0b948a0a1d451"
  },
  {
    "url": "emoji/120/vulcan-salute-medium-light-skin-tone.png",
    "revision": "15129da74fcc00c1c8c51afa7ea036b1"
  },
  {
    "url": "emoji/120/vulcan-salute-medium-skin-tone.png",
    "revision": "c82ac353b29bbfb5013f18eea800e35c"
  },
  {
    "url": "emoji/120/vulcan-salute.png",
    "revision": "09e345bc2d0ea867f282449d05a76c22"
  },
  {
    "url": "emoji/120/waffle.png",
    "revision": "0a39950e96847c4b94ed3faea76b6d69"
  },
  {
    "url": "emoji/120/waning-crescent-moon.png",
    "revision": "8b2635c60300426cb097cdc21a79f9e9"
  },
  {
    "url": "emoji/120/waning-gibbous-moon.png",
    "revision": "0946f1f2577daefb2cbbba8748cc66ed"
  },
  {
    "url": "emoji/120/warning.png",
    "revision": "39246197ad949c4db446ca8f5c614bd0"
  },
  {
    "url": "emoji/120/wastebasket.png",
    "revision": "2eee55aa01dc26fc5a65138668872bda"
  },
  {
    "url": "emoji/120/watch.png",
    "revision": "fc293e1677ba5a9c9c99f35067f93295"
  },
  {
    "url": "emoji/120/water-buffalo.png",
    "revision": "7f600e4931612259e55af629078159ec"
  },
  {
    "url": "emoji/120/water-closet.png",
    "revision": "e3162b30a48eb88e2a4e838f4ea93aa6"
  },
  {
    "url": "emoji/120/water-wave.png",
    "revision": "af77bced7a5267d40907c8aaec10d7ef"
  },
  {
    "url": "emoji/120/watermelon.png",
    "revision": "157caf90dd16f568f8a054dab9fb143b"
  },
  {
    "url": "emoji/120/waving-hand-dark-skin-tone.png",
    "revision": "e3b35ca6a6c0e4bb5bb512fde21d0eff"
  },
  {
    "url": "emoji/120/waving-hand-light-skin-tone.png",
    "revision": "fbc4e8ed330ae432c9b4d49f8525d50f"
  },
  {
    "url": "emoji/120/waving-hand-medium-dark-skin-tone.png",
    "revision": "d11f88d6ff8903a3e8d60af1bf169674"
  },
  {
    "url": "emoji/120/waving-hand-medium-light-skin-tone.png",
    "revision": "886e108bd34a5ada0d1181871727c2ba"
  },
  {
    "url": "emoji/120/waving-hand-medium-skin-tone.png",
    "revision": "e63e736e291148d9e1f1ad2080e753d6"
  },
  {
    "url": "emoji/120/waving-hand.png",
    "revision": "01f59ea79b49709ff3f60aa6f6efc4a6"
  },
  {
    "url": "emoji/120/wavy-dash.png",
    "revision": "84fe90a4c3b631222c5c479cdb869008"
  },
  {
    "url": "emoji/120/waxing-crescent-moon.png",
    "revision": "338fe422841d4d353c7a2b3a4cc4973d"
  },
  {
    "url": "emoji/120/waxing-gibbous-moon.png",
    "revision": "9d009b1a55602b4381333496a3abc45c"
  },
  {
    "url": "emoji/120/weary-cat.png",
    "revision": "4a6cf00cf2e604b5c3a18f7dde87f099"
  },
  {
    "url": "emoji/120/weary-face.png",
    "revision": "cb8e2ef77ed30bb9a304fc3d1ccde23d"
  },
  {
    "url": "emoji/120/wedding.png",
    "revision": "065df80865b6f5c9e3e1dcb75041b323"
  },
  {
    "url": "emoji/120/whale.png",
    "revision": "87826892c599eab7370f8c1ac6c95bc4"
  },
  {
    "url": "emoji/120/wheel-of-dharma.png",
    "revision": "57d7e9d0bc717ebbbcb5db3399e6828f"
  },
  {
    "url": "emoji/120/wheelchair-symbol.png",
    "revision": "7ec0603906479d3261b05c23551cc0b7"
  },
  {
    "url": "emoji/120/white-cane.png",
    "revision": "1d5142d492c84c16427d20d4f9c50cdd"
  },
  {
    "url": "emoji/120/white-circle.png",
    "revision": "2efcbeefbca0a4536f9b35aa278582e4"
  },
  {
    "url": "emoji/120/white-club-suit.png",
    "revision": "88c6ef3cc6878b7b1580466d9a361fbc"
  },
  {
    "url": "emoji/120/white-diamond-suit.png",
    "revision": "dd648deba8e385ef07b1a83e05144473"
  },
  {
    "url": "emoji/120/white-down-pointing-index-dark-skin-tone.png",
    "revision": "b58b7bc19b6c7f0caf3a4028eb2a9a40"
  },
  {
    "url": "emoji/120/white-down-pointing-index-light-skin-tone.png",
    "revision": "e310729950053ee08878a97d2c16b96d"
  },
  {
    "url": "emoji/120/white-down-pointing-index-medium-dark-skin-tone.png",
    "revision": "44fa619143ed4dfb606a09cb39988faa"
  },
  {
    "url": "emoji/120/white-down-pointing-index-medium-light-skin-tone.png",
    "revision": "6cba64281ac4f579b4b9d4265de86f74"
  },
  {
    "url": "emoji/120/white-down-pointing-index-medium-skin-tone.png",
    "revision": "1ecd5d5b8a86f6ebc71e47798817be95"
  },
  {
    "url": "emoji/120/white-down-pointing-index.png",
    "revision": "b92ed9caf3b4b4b444d58d4af05e0320"
  },
  {
    "url": "emoji/120/white-exclamation-mark.png",
    "revision": "410693ea5bdffe079a8843016ad271ed"
  },
  {
    "url": "emoji/120/white-flag.png",
    "revision": "089de710a79ec7b9a2a6d53f4d718d99"
  },
  {
    "url": "emoji/120/white-flower.png",
    "revision": "caee26df0598a27259fdbd285852be5d"
  },
  {
    "url": "emoji/120/white-hair.png",
    "revision": "3f5b6c00ee59cf989c5bc84f10e8a675"
  },
  {
    "url": "emoji/120/white-heart-suit.png",
    "revision": "c253e6d3f7bb4fbf03686e96924811a8"
  },
  {
    "url": "emoji/120/white-heart.png",
    "revision": "c60aa3255bc0a9585c6ea24a07de6728"
  },
  {
    "url": "emoji/120/white-large-square.png",
    "revision": "a1e15ed1ee55e34d790be28aa3941635"
  },
  {
    "url": "emoji/120/white-left-pointing-index-dark-skin-tone.png",
    "revision": "b23067b6089a28d0edc5c0df1cfda34d"
  },
  {
    "url": "emoji/120/white-left-pointing-index-light-skin-tone.png",
    "revision": "4a6fb7ae33825e439435a850a4ed214b"
  },
  {
    "url": "emoji/120/white-left-pointing-index-medium-dark-skin-tone.png",
    "revision": "9906b85d6b62f7bac834f0206b8529fe"
  },
  {
    "url": "emoji/120/white-left-pointing-index-medium-light-skin-tone.png",
    "revision": "92a66b423fb7c73297c46d7ddc40810d"
  },
  {
    "url": "emoji/120/white-left-pointing-index-medium-skin-tone.png",
    "revision": "3002e88060a924e0682b43cf72857d7c"
  },
  {
    "url": "emoji/120/white-left-pointing-index.png",
    "revision": "cc46fe76bf9fa2a794cac442a0c1f3a2"
  },
  {
    "url": "emoji/120/white-medium-small-square.png",
    "revision": "c4774afa4052fa03e124e4720fe2c70e"
  },
  {
    "url": "emoji/120/white-medium-square.png",
    "revision": "366fb8d1f97e21b21a49d2eb8c11eea8"
  },
  {
    "url": "emoji/120/white-question-mark.png",
    "revision": "d77fd29b74addb0052ea12c4d81e67d8"
  },
  {
    "url": "emoji/120/white-right-pointing-index-dark-skin-tone.png",
    "revision": "912f22d0c510c62a59bae3e08e9bfee2"
  },
  {
    "url": "emoji/120/white-right-pointing-index-light-skin-tone.png",
    "revision": "67a9023bf14ab0ffbac3e19baadf747a"
  },
  {
    "url": "emoji/120/white-right-pointing-index-medium-dark-skin-tone.png",
    "revision": "8d8d450d6cccf7885a3c0a8661a00086"
  },
  {
    "url": "emoji/120/white-right-pointing-index-medium-light-skin-tone.png",
    "revision": "5efd8084c64e9323b45af744513223cb"
  },
  {
    "url": "emoji/120/white-right-pointing-index-medium-skin-tone.png",
    "revision": "eee12561ef40268ed880f5b46a8cebcb"
  },
  {
    "url": "emoji/120/white-right-pointing-index.png",
    "revision": "2d90fed4a002d92d573e41a752a2e69d"
  },
  {
    "url": "emoji/120/white-small-square.png",
    "revision": "37a68bc916413e1ffe102012418aad67"
  },
  {
    "url": "emoji/120/white-spade-suit.png",
    "revision": "2df4c4300e01c50aff388d2cabd0b16c"
  },
  {
    "url": "emoji/120/white-square-button.png",
    "revision": "79a5d89a0e7c8d8fdb728e38c25d71bd"
  },
  {
    "url": "emoji/120/wilted-flower.png",
    "revision": "e60a2e0f835acc1b7eecd1ab275ad6a3"
  },
  {
    "url": "emoji/120/wind-chime.png",
    "revision": "18b265cae1f6d3dbd35114346694fb04"
  },
  {
    "url": "emoji/120/wind-face.png",
    "revision": "f5c7260246aa93ba8bf449854132d800"
  },
  {
    "url": "emoji/120/wine-glass.png",
    "revision": "04f9e215a7cccaaf52caa18ca4f6b871"
  },
  {
    "url": "emoji/120/winking-face-with-tongue.png",
    "revision": "61a5bf0a2d7dee6f4fc5a4b823aba35e"
  },
  {
    "url": "emoji/120/winking-face.png",
    "revision": "ec4359f3221ec063e0b3c451a2e11d0d"
  },
  {
    "url": "emoji/120/wolf.png",
    "revision": "5b69e1df900895c160ce7e5e25b5b7d3"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-dark-skin-tone-light-skin-tone.png",
    "revision": "61602681d99caa329f5a1cdff0fd0324"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "7944160340cf3d528e74e321c5108964"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "c71383e5d5a8e6617dabde05328db05e"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone.png",
    "revision": "ef7fae1b8ff223be99578be18423c0f8"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-dark-skin-tone.png",
    "revision": "c8472702e851c20d24a97d10ff3b92ac"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-light-skin-tone-dark-skin-tone.png",
    "revision": "b4dcdbf7e0fe296c70854f7feb7173da"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "e8d06882daf6cc4574894aeb0811a145"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone.png",
    "revision": "ac0bfd4a9b0df71dc15892c82ec8245e"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-light-skin-tone-medium-skin-tone.png",
    "revision": "0568cdaab7030aadaaaa4799af9c804c"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-light-skin-tone.png",
    "revision": "c93e3fcd1eb49bd0f85f93de923ae383"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone.png",
    "revision": "f13ac16e82e330327cc4c51294b41385"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "fabc78834242cc01b69a274edbc00d9a"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "69648de7f8df9d07568d32373b04261c"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "05b3ee6b5764598955acb8194b06fd2e"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-dark-skin-tone.png",
    "revision": "76bb96e0c1fe03497074d7d1131816d1"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone.png",
    "revision": "7700b43d59867d9d5e29d5d4f739f2c6"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone.png",
    "revision": "bfbe69043ea4690fe4a344f03c314918"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone.png",
    "revision": "454d44b954f8078dbdc297c49978a2d9"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone.png",
    "revision": "6d4e6e8f244fab16e64eb8605c615951"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-light-skin-tone.png",
    "revision": "6bfda42182d5e6e151e6c6778337eac0"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone.png",
    "revision": "cec8b61ecb17ff8a4bc111f2ea9b1e57"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-skin-tone-light-skin-tone.png",
    "revision": "df38ac6e8e90b68d343d2d29469f8a08"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone.png",
    "revision": "34e7696a46744e639555a154a6e6c4b5"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "6ac84d43a96399f68e419d7ac7353411"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands-medium-skin-tone.png",
    "revision": "ad4834da3816b3fbe61cd5562fd41d35"
  },
  {
    "url": "emoji/120/woman-and-man-holding-hands.png",
    "revision": "5607dec770cf890b2ae0cfba932afdd9"
  },
  {
    "url": "emoji/120/woman-artist-dark-skin-tone.png",
    "revision": "d092a2c68f4d1121d8b3a33825bd1477"
  },
  {
    "url": "emoji/120/woman-artist-light-skin-tone.png",
    "revision": "b3d3c32db216bb0e108b5ab9d2c0d0a9"
  },
  {
    "url": "emoji/120/woman-artist-medium-dark-skin-tone.png",
    "revision": "5f448e6f15b153b9dc4398865df00682"
  },
  {
    "url": "emoji/120/woman-artist-medium-light-skin-tone.png",
    "revision": "376c7d00349fefc3751af81a37023ad9"
  },
  {
    "url": "emoji/120/woman-artist-medium-skin-tone.png",
    "revision": "f87aa17c800d12f34dec09aa57bc690e"
  },
  {
    "url": "emoji/120/woman-artist.png",
    "revision": "4283f405140d0ed2f98fb0429f5c87a8"
  },
  {
    "url": "emoji/120/woman-astronaut-dark-skin-tone.png",
    "revision": "a47a8ab6a581459d339e788f9c6e37ce"
  },
  {
    "url": "emoji/120/woman-astronaut-light-skin-tone.png",
    "revision": "7292536a58cf41e685bc796877ecf918"
  },
  {
    "url": "emoji/120/woman-astronaut-medium-dark-skin-tone.png",
    "revision": "77a5946913ffa080bfabcfe44721e51d"
  },
  {
    "url": "emoji/120/woman-astronaut-medium-light-skin-tone.png",
    "revision": "3b13507050b25804529ee3671fa6ee74"
  },
  {
    "url": "emoji/120/woman-astronaut-medium-skin-tone.png",
    "revision": "fdc40c24a4827edb8726a2d366756828"
  },
  {
    "url": "emoji/120/woman-astronaut.png",
    "revision": "1bd2612f62702f8a01c7da65941e0a8f"
  },
  {
    "url": "emoji/120/woman-bald.png",
    "revision": "93ad4a758f65279725da775fd7144fb3"
  },
  {
    "url": "emoji/120/woman-biking-dark-skin-tone.png",
    "revision": "d6b92719d17146d63d91f611eae5ac1f"
  },
  {
    "url": "emoji/120/woman-biking-light-skin-tone.png",
    "revision": "f540b3c90affcf5bbd954fa6083c43fa"
  },
  {
    "url": "emoji/120/woman-biking-medium-dark-skin-tone.png",
    "revision": "b0c2aedb011b85a3ca04730f9fceaa6b"
  },
  {
    "url": "emoji/120/woman-biking-medium-light-skin-tone.png",
    "revision": "ba642566de339d65747b2d926a16a934"
  },
  {
    "url": "emoji/120/woman-biking-medium-skin-tone.png",
    "revision": "31ac20cb47cec60d0707d0c7f4c3e548"
  },
  {
    "url": "emoji/120/woman-biking.png",
    "revision": "d500b3afd07f6b1807c43bc0ad99300a"
  },
  {
    "url": "emoji/120/woman-blond-hair.png",
    "revision": "aed1d910de53b706f63093e0def1d26b"
  },
  {
    "url": "emoji/120/woman-bouncing-ball-dark-skin-tone.png",
    "revision": "e0e3969e46e2a488aac830e8b960a3d0"
  },
  {
    "url": "emoji/120/woman-bouncing-ball-light-skin-tone.png",
    "revision": "a1fde2c48f10d51743caa0eed43afcc8"
  },
  {
    "url": "emoji/120/woman-bouncing-ball-medium-dark-skin-tone.png",
    "revision": "444de8808005c16d25330dc88db7a5b1"
  },
  {
    "url": "emoji/120/woman-bouncing-ball-medium-light-skin-tone.png",
    "revision": "95ab19f6be0ad3ed0a832c9f335ea79c"
  },
  {
    "url": "emoji/120/woman-bouncing-ball-medium-skin-tone.png",
    "revision": "f8b6d8029c77892b2b2315813afcc1a0"
  },
  {
    "url": "emoji/120/woman-bouncing-ball.png",
    "revision": "0fda313aeff962827b527b965e64e6eb"
  },
  {
    "url": "emoji/120/woman-bowing-dark-skin-tone.png",
    "revision": "85167a6ad78b756c566ee2d2f4369a00"
  },
  {
    "url": "emoji/120/woman-bowing-light-skin-tone.png",
    "revision": "c3286099e6515d2dc9abc8267608dedf"
  },
  {
    "url": "emoji/120/woman-bowing-medium-dark-skin-tone.png",
    "revision": "d0072810ed5c79b9dea9ca95a990b6db"
  },
  {
    "url": "emoji/120/woman-bowing-medium-light-skin-tone.png",
    "revision": "2da3f2fe45be69c2cf3c83a556219ea9"
  },
  {
    "url": "emoji/120/woman-bowing-medium-skin-tone.png",
    "revision": "19718bbc78c75961acae84c03a335462"
  },
  {
    "url": "emoji/120/woman-bowing.png",
    "revision": "67bcab5ae6c0d46ca9c2f16b9ac7681d"
  },
  {
    "url": "emoji/120/woman-cartwheeling-dark-skin-tone.png",
    "revision": "0bab507b22e09ba29841019feb6c68a9"
  },
  {
    "url": "emoji/120/woman-cartwheeling-light-skin-tone.png",
    "revision": "e2ee8b58bd71908d87c04a58c54466a3"
  },
  {
    "url": "emoji/120/woman-cartwheeling-medium-dark-skin-tone.png",
    "revision": "263539a72bfd296cc72ad122616182a1"
  },
  {
    "url": "emoji/120/woman-cartwheeling-medium-light-skin-tone.png",
    "revision": "c22c668d8ef8fe8150888c28e98cebd8"
  },
  {
    "url": "emoji/120/woman-cartwheeling-medium-skin-tone.png",
    "revision": "a555f03afb6075e1e07eb5adf75925ca"
  },
  {
    "url": "emoji/120/woman-cartwheeling.png",
    "revision": "57199d1166c844dcb466e4288ff6c79a"
  },
  {
    "url": "emoji/120/woman-climbing-dark-skin-tone.png",
    "revision": "b6ba91628a0a9c492e4377611fcb547e"
  },
  {
    "url": "emoji/120/woman-climbing-light-skin-tone.png",
    "revision": "34447485cd58069c5c7797a63305b2b0"
  },
  {
    "url": "emoji/120/woman-climbing-medium-dark-skin-tone.png",
    "revision": "b8bacd9763b8f4999ca130ff0a06d232"
  },
  {
    "url": "emoji/120/woman-climbing-medium-light-skin-tone.png",
    "revision": "cb930be57cb6ce757b4df7cf47eb338f"
  },
  {
    "url": "emoji/120/woman-climbing-medium-skin-tone.png",
    "revision": "629480021344ae81bc551927b7b16faa"
  },
  {
    "url": "emoji/120/woman-climbing.png",
    "revision": "510980fe67b17a9476fbae267d10fec3"
  },
  {
    "url": "emoji/120/woman-construction-worker-dark-skin-tone.png",
    "revision": "4929c7ab4eeeeaeff0a3f6073e6a2c38"
  },
  {
    "url": "emoji/120/woman-construction-worker-light-skin-tone.png",
    "revision": "366381beba95bb9dd74e9848e270136e"
  },
  {
    "url": "emoji/120/woman-construction-worker-medium-dark-skin-tone.png",
    "revision": "e6fa59ec0eeb8d25be178890fa282671"
  },
  {
    "url": "emoji/120/woman-construction-worker-medium-light-skin-tone.png",
    "revision": "78ef3b17d910fbba4d0249d27c7fcd6f"
  },
  {
    "url": "emoji/120/woman-construction-worker-medium-skin-tone.png",
    "revision": "815af452592a434d29128471fc82b029"
  },
  {
    "url": "emoji/120/woman-construction-worker.png",
    "revision": "5f417e9263aeadc4ab70c90f2ec33ed8"
  },
  {
    "url": "emoji/120/woman-cook-dark-skin-tone.png",
    "revision": "82a7b928a3f06722ff2b4b6b5ca94a22"
  },
  {
    "url": "emoji/120/woman-cook-light-skin-tone.png",
    "revision": "ffd1bbcc21cf01e2be5db8cc6015c818"
  },
  {
    "url": "emoji/120/woman-cook-medium-dark-skin-tone.png",
    "revision": "057f0a5ede3b41b3e00e738c21c561c6"
  },
  {
    "url": "emoji/120/woman-cook-medium-light-skin-tone.png",
    "revision": "c6a73256f229299f787b3d28513ab298"
  },
  {
    "url": "emoji/120/woman-cook-medium-skin-tone.png",
    "revision": "68be88d9ffdf8c9c7f5334a55b201a85"
  },
  {
    "url": "emoji/120/woman-cook.png",
    "revision": "a4ee4e22a8e02e06cae3452f487e50ca"
  },
  {
    "url": "emoji/120/woman-curly-hair.png",
    "revision": "5581bbcdcf39f126ee9a229655cf2e74"
  },
  {
    "url": "emoji/120/woman-dancing-dark-skin-tone.png",
    "revision": "6b80b4a6405a78b64e87abc6c5a7ed98"
  },
  {
    "url": "emoji/120/woman-dancing-light-skin-tone.png",
    "revision": "6207f9f98f62b2b2ebb9f2db47d9a9ec"
  },
  {
    "url": "emoji/120/woman-dancing-medium-dark-skin-tone.png",
    "revision": "8cbc9af8b951bd68bf5b502714d89eb4"
  },
  {
    "url": "emoji/120/woman-dancing-medium-light-skin-tone.png",
    "revision": "7d36373bad3669fcf2ca4b143e5db690"
  },
  {
    "url": "emoji/120/woman-dancing-medium-skin-tone.png",
    "revision": "73401efdb320b0c6e07413a647ef5ee3"
  },
  {
    "url": "emoji/120/woman-dancing.png",
    "revision": "4f29ada6b584a903df612450538422a2"
  },
  {
    "url": "emoji/120/woman-dark-skin-tone-bald.png",
    "revision": "e910de3b8e01b9b79f8d556fd1f67a09"
  },
  {
    "url": "emoji/120/woman-dark-skin-tone-blond-hair.png",
    "revision": "07dfb894b013aca0353f0919acf1a8d9"
  },
  {
    "url": "emoji/120/woman-dark-skin-tone-curly-hair.png",
    "revision": "6fee956617b12d572fb88caf2e8b1130"
  },
  {
    "url": "emoji/120/woman-dark-skin-tone-red-hair.png",
    "revision": "0e4f30e138407a5f4656dcd88d779ecf"
  },
  {
    "url": "emoji/120/woman-dark-skin-tone-white-hair.png",
    "revision": "b54bab7ff599793b0e798a52f73c774b"
  },
  {
    "url": "emoji/120/woman-dark-skin-tone.png",
    "revision": "57d247c45e7cbda253dc6d2fa52787f4"
  },
  {
    "url": "emoji/120/woman-detective-dark-skin-tone.png",
    "revision": "f9d63f946c3ac74af00fc4f8f82c59aa"
  },
  {
    "url": "emoji/120/woman-detective-light-skin-tone.png",
    "revision": "c7a45f1bb6b8e97289c6e8d08f40ae61"
  },
  {
    "url": "emoji/120/woman-detective-medium-dark-skin-tone.png",
    "revision": "46b786b12bd432135ee3100fdca446f3"
  },
  {
    "url": "emoji/120/woman-detective-medium-light-skin-tone.png",
    "revision": "4a3c1f763771bda20f06f0c43e3954d5"
  },
  {
    "url": "emoji/120/woman-detective-medium-skin-tone.png",
    "revision": "65c3ce27f18215584dd8b74c6065cf34"
  },
  {
    "url": "emoji/120/woman-detective.png",
    "revision": "d23c89cb9a46661e788ea7b6a12981cf"
  },
  {
    "url": "emoji/120/woman-elf-dark-skin-tone.png",
    "revision": "64fea61ca94455b8f3ab539363f2b6d1"
  },
  {
    "url": "emoji/120/woman-elf-light-skin-tone.png",
    "revision": "6a740dffe70124b9e913695edca3b413"
  },
  {
    "url": "emoji/120/woman-elf-medium-dark-skin-tone.png",
    "revision": "9bd1006fe604e743bb666b941d1ce108"
  },
  {
    "url": "emoji/120/woman-elf-medium-light-skin-tone.png",
    "revision": "9036eb6b55609090040b883de3058f8e"
  },
  {
    "url": "emoji/120/woman-elf-medium-skin-tone.png",
    "revision": "b0f7c9b97d8a3618888b620e551ace6a"
  },
  {
    "url": "emoji/120/woman-elf.png",
    "revision": "48eccd66a77316a50808b7678b369947"
  },
  {
    "url": "emoji/120/woman-facepalming-dark-skin-tone.png",
    "revision": "97bc5cbd06ef2ce4657a7fff53f09199"
  },
  {
    "url": "emoji/120/woman-facepalming-light-skin-tone.png",
    "revision": "5ce58a4131a4e4bed1a9775cf63f34a2"
  },
  {
    "url": "emoji/120/woman-facepalming-medium-dark-skin-tone.png",
    "revision": "630a970220a22ef7071164d8f9948e11"
  },
  {
    "url": "emoji/120/woman-facepalming-medium-light-skin-tone.png",
    "revision": "5466839255bc1f4166d78fdc0fc113ee"
  },
  {
    "url": "emoji/120/woman-facepalming-medium-skin-tone.png",
    "revision": "1b7ca7e11288799ce5410d902f5d71ca"
  },
  {
    "url": "emoji/120/woman-facepalming.png",
    "revision": "6db80356b72d5bd20b4ea72d021c924c"
  },
  {
    "url": "emoji/120/woman-factory-worker-dark-skin-tone.png",
    "revision": "5100407de30d0409059af9ee6cd8eb2f"
  },
  {
    "url": "emoji/120/woman-factory-worker-light-skin-tone.png",
    "revision": "0c643f4f043908a1539b0371d3c0db4c"
  },
  {
    "url": "emoji/120/woman-factory-worker-medium-dark-skin-tone.png",
    "revision": "fe6d4ddd4b17feea0652e4e625e5a92a"
  },
  {
    "url": "emoji/120/woman-factory-worker-medium-light-skin-tone.png",
    "revision": "a4ac98b176ca35d94a75125671ab363b"
  },
  {
    "url": "emoji/120/woman-factory-worker-medium-skin-tone.png",
    "revision": "c503160cbe14ca04c462005480c72274"
  },
  {
    "url": "emoji/120/woman-factory-worker.png",
    "revision": "12a6b84a357b3c714fd4678c15db1696"
  },
  {
    "url": "emoji/120/woman-fairy-dark-skin-tone.png",
    "revision": "2d2d01d888fdd8c142620d2aaab65e82"
  },
  {
    "url": "emoji/120/woman-fairy-light-skin-tone.png",
    "revision": "622f46f616e3af2d71ec22671c2b0f9a"
  },
  {
    "url": "emoji/120/woman-fairy-medium-dark-skin-tone.png",
    "revision": "e065c7c274e136dbbcb2a0566cc26a62"
  },
  {
    "url": "emoji/120/woman-fairy-medium-light-skin-tone.png",
    "revision": "f6f2ae2b822e777be317fc2e3d1b86f1"
  },
  {
    "url": "emoji/120/woman-fairy-medium-skin-tone.png",
    "revision": "5623c1669edd8ff41fcd095694875eec"
  },
  {
    "url": "emoji/120/woman-fairy.png",
    "revision": "d6867ce5ab9654843e1409a772270532"
  },
  {
    "url": "emoji/120/woman-farmer-dark-skin-tone.png",
    "revision": "28cb7aa0528fb849bdaee89a6c0e2ffc"
  },
  {
    "url": "emoji/120/woman-farmer-light-skin-tone.png",
    "revision": "d6613f57bfa964f95f034ab8c1d77937"
  },
  {
    "url": "emoji/120/woman-farmer-medium-dark-skin-tone.png",
    "revision": "6bfa82fe06f05709eac2fda4843babbc"
  },
  {
    "url": "emoji/120/woman-farmer-medium-light-skin-tone.png",
    "revision": "078669a0f1522705f9bfa0dd2499efd0"
  },
  {
    "url": "emoji/120/woman-farmer-medium-skin-tone.png",
    "revision": "16c0976351d9ded3e2e7c4d29e11392d"
  },
  {
    "url": "emoji/120/woman-farmer.png",
    "revision": "d30b3fc204a847e22443d3272acaf358"
  },
  {
    "url": "emoji/120/woman-firefighter-dark-skin-tone.png",
    "revision": "5b81cb646c4d88a3dc38a4621d4b0cb3"
  },
  {
    "url": "emoji/120/woman-firefighter-light-skin-tone.png",
    "revision": "bfd99cb91764f571b8c0d9e5487a381b"
  },
  {
    "url": "emoji/120/woman-firefighter-medium-dark-skin-tone.png",
    "revision": "f1f1bd31629f20b1980dc7dbb3f18fad"
  },
  {
    "url": "emoji/120/woman-firefighter-medium-light-skin-tone.png",
    "revision": "816822ab168b20acb3675a2d980878a6"
  },
  {
    "url": "emoji/120/woman-firefighter-medium-skin-tone.png",
    "revision": "5d18a77e1b0610cccd6a7c125c757fbf"
  },
  {
    "url": "emoji/120/woman-firefighter.png",
    "revision": "4aa9cbf83fbef520226b50cc5579e55e"
  },
  {
    "url": "emoji/120/woman-frowning-dark-skin-tone.png",
    "revision": "9a3b43fc8f431e5b13d7925abace3042"
  },
  {
    "url": "emoji/120/woman-frowning-light-skin-tone.png",
    "revision": "d764d563d6548f29774daadc1ed10ffd"
  },
  {
    "url": "emoji/120/woman-frowning-medium-dark-skin-tone.png",
    "revision": "ea0998e5bf188b05bf2b3141659540cc"
  },
  {
    "url": "emoji/120/woman-frowning-medium-light-skin-tone.png",
    "revision": "01df52e08c578408139441f6cc03d9bc"
  },
  {
    "url": "emoji/120/woman-frowning-medium-skin-tone.png",
    "revision": "a88335851bd8bd1aefe253191393cc02"
  },
  {
    "url": "emoji/120/woman-frowning.png",
    "revision": "acbe0a90f8278e47477263050108d053"
  },
  {
    "url": "emoji/120/woman-genie.png",
    "revision": "fab0f47884830d0470ff2b537be81fd9"
  },
  {
    "url": "emoji/120/woman-gesturing-no-dark-skin-tone.png",
    "revision": "6a53f93f8cb4e8da8d7789c9ec073b0a"
  },
  {
    "url": "emoji/120/woman-gesturing-no-light-skin-tone.png",
    "revision": "7972725e0f27d4ea4dcd27a435ae168f"
  },
  {
    "url": "emoji/120/woman-gesturing-no-medium-dark-skin-tone.png",
    "revision": "090685f64b10241685ac6855d4851301"
  },
  {
    "url": "emoji/120/woman-gesturing-no-medium-light-skin-tone.png",
    "revision": "b464f0f3ab84f1f5c1e26328e13760e8"
  },
  {
    "url": "emoji/120/woman-gesturing-no-medium-skin-tone.png",
    "revision": "238ab31d592f3ea043b5154c0560fe24"
  },
  {
    "url": "emoji/120/woman-gesturing-no.png",
    "revision": "701cff61e878feefe6330b9b4985d0e2"
  },
  {
    "url": "emoji/120/woman-gesturing-ok-dark-skin-tone.png",
    "revision": "fdb6ffb0eae17a87d869302ea50a5889"
  },
  {
    "url": "emoji/120/woman-gesturing-ok-light-skin-tone.png",
    "revision": "2adc6fad59ae615d074f81ee7a17f6d4"
  },
  {
    "url": "emoji/120/woman-gesturing-ok-medium-dark-skin-tone.png",
    "revision": "8df39028c946017527b4b31c739af034"
  },
  {
    "url": "emoji/120/woman-gesturing-ok-medium-light-skin-tone.png",
    "revision": "95eb9568f654e7ed212ee791c3849a6a"
  },
  {
    "url": "emoji/120/woman-gesturing-ok-medium-skin-tone.png",
    "revision": "82bebb115aad61b0033649279b337d96"
  },
  {
    "url": "emoji/120/woman-gesturing-ok.png",
    "revision": "05bed20fc37d9474b6f32583d547463b"
  },
  {
    "url": "emoji/120/woman-getting-haircut-dark-skin-tone.png",
    "revision": "6bc685d767fb746656b5ed6e3fda0229"
  },
  {
    "url": "emoji/120/woman-getting-haircut-light-skin-tone.png",
    "revision": "5ac5adfa93bf57fc06b8ea26e12eb378"
  },
  {
    "url": "emoji/120/woman-getting-haircut-medium-dark-skin-tone.png",
    "revision": "904b7516037f44070c10282fd6f321e8"
  },
  {
    "url": "emoji/120/woman-getting-haircut-medium-light-skin-tone.png",
    "revision": "b71d32199287dfa9a93d7adbe1790824"
  },
  {
    "url": "emoji/120/woman-getting-haircut-medium-skin-tone.png",
    "revision": "58f4c4b1567db44ca085e0e7b13a339c"
  },
  {
    "url": "emoji/120/woman-getting-haircut.png",
    "revision": "f6275c74484529555dfdbdeaeff5b983"
  },
  {
    "url": "emoji/120/woman-getting-massage-dark-skin-tone.png",
    "revision": "72fbc0a0b4f6484916c40f4ec990c305"
  },
  {
    "url": "emoji/120/woman-getting-massage-light-skin-tone.png",
    "revision": "7cde91446841e367a0e75acf661a9f0f"
  },
  {
    "url": "emoji/120/woman-getting-massage-medium-dark-skin-tone.png",
    "revision": "e4cc29ad93123c18538b94637420cf9c"
  },
  {
    "url": "emoji/120/woman-getting-massage-medium-light-skin-tone.png",
    "revision": "3640f749f26370c17ea9127450e032e8"
  },
  {
    "url": "emoji/120/woman-getting-massage-medium-skin-tone.png",
    "revision": "606c1f8174c9f8265c068a43aece96a3"
  },
  {
    "url": "emoji/120/woman-getting-massage.png",
    "revision": "61b8dcf0786c0224253a4ea3d6e46b8f"
  },
  {
    "url": "emoji/120/woman-golfing-dark-skin-tone.png",
    "revision": "bc106723a8ecf417d07ee0a6d70f1ad2"
  },
  {
    "url": "emoji/120/woman-golfing-light-skin-tone.png",
    "revision": "f378f3cbf19f593fbe508138b18d6a7d"
  },
  {
    "url": "emoji/120/woman-golfing-medium-dark-skin-tone.png",
    "revision": "7b48410762e0b7c536bb5beb60ebb1d6"
  },
  {
    "url": "emoji/120/woman-golfing-medium-light-skin-tone.png",
    "revision": "c39d0d898eb005094953cbbf4075a59b"
  },
  {
    "url": "emoji/120/woman-golfing-medium-skin-tone.png",
    "revision": "10e87f5d444962c87e48bcf6be0157f6"
  },
  {
    "url": "emoji/120/woman-golfing.png",
    "revision": "62d13f755a9a9af328619617f9e0e0ba"
  },
  {
    "url": "emoji/120/woman-guard-dark-skin-tone.png",
    "revision": "cac864e80327343582f94700b0c1ec60"
  },
  {
    "url": "emoji/120/woman-guard-light-skin-tone.png",
    "revision": "596a81c079f8fd662b7e5b4443fff726"
  },
  {
    "url": "emoji/120/woman-guard-medium-dark-skin-tone.png",
    "revision": "87fc7816e05a76126d1a89056388d228"
  },
  {
    "url": "emoji/120/woman-guard-medium-light-skin-tone.png",
    "revision": "0be4f3949d55b3282704a039afa4305a"
  },
  {
    "url": "emoji/120/woman-guard-medium-skin-tone.png",
    "revision": "9622a1eae53a297948acdd8135b7d9e3"
  },
  {
    "url": "emoji/120/woman-guard.png",
    "revision": "e275aed6e09e68a5780f09d64084e78a"
  },
  {
    "url": "emoji/120/woman-health-worker-dark-skin-tone.png",
    "revision": "040254d6fbe421ca341c8dee8fa8c11e"
  },
  {
    "url": "emoji/120/woman-health-worker-light-skin-tone.png",
    "revision": "8ad0ec759e3d530ec7cd0b3621b0d58d"
  },
  {
    "url": "emoji/120/woman-health-worker-medium-dark-skin-tone.png",
    "revision": "0e1dfb025cd422cd461f0ca9f07f4a33"
  },
  {
    "url": "emoji/120/woman-health-worker-medium-light-skin-tone.png",
    "revision": "1e9c5b1acb11f18944468af4cb9db737"
  },
  {
    "url": "emoji/120/woman-health-worker-medium-skin-tone.png",
    "revision": "3c41f8aeb0651ec3ce61d71e8d6448b5"
  },
  {
    "url": "emoji/120/woman-health-worker.png",
    "revision": "cff3027125c253698de88cf0bea56d81"
  },
  {
    "url": "emoji/120/woman-in-lotus-position-dark-skin-tone.png",
    "revision": "d0d5b43352d4cafe2ad5095168500a00"
  },
  {
    "url": "emoji/120/woman-in-lotus-position-light-skin-tone.png",
    "revision": "1b32804919380b3885344c04957f2a21"
  },
  {
    "url": "emoji/120/woman-in-lotus-position-medium-dark-skin-tone.png",
    "revision": "21e679a0295660a1648249b806a27818"
  },
  {
    "url": "emoji/120/woman-in-lotus-position-medium-light-skin-tone.png",
    "revision": "0b6ea88f019beeb743ec61e2c30bd1cb"
  },
  {
    "url": "emoji/120/woman-in-lotus-position-medium-skin-tone.png",
    "revision": "3a78b1f832b8327d111579365ef86fc9"
  },
  {
    "url": "emoji/120/woman-in-lotus-position.png",
    "revision": "d6d0e761d19ccbfc9d44216daa8e92a4"
  },
  {
    "url": "emoji/120/woman-in-manual-wheelchair-dark-skin-tone.png",
    "revision": "c0e83f7d613e67dd4fc6a3f0d5978682"
  },
  {
    "url": "emoji/120/woman-in-manual-wheelchair-light-skin-tone.png",
    "revision": "da1175af1b0a83f6177b1dd90e915aa5"
  },
  {
    "url": "emoji/120/woman-in-manual-wheelchair-medium-dark-skin-tone.png",
    "revision": "4cfdfa406d5ca11eb1088697ed0cccde"
  },
  {
    "url": "emoji/120/woman-in-manual-wheelchair-medium-light-skin-tone.png",
    "revision": "2cd271f9e15d0a680c62e1d54083d057"
  },
  {
    "url": "emoji/120/woman-in-manual-wheelchair-medium-skin-tone.png",
    "revision": "b843ab8cafc6f42180a7708da1e93351"
  },
  {
    "url": "emoji/120/woman-in-manual-wheelchair.png",
    "revision": "65cfc7a27e1e66ba691314c5bcc9dc3a"
  },
  {
    "url": "emoji/120/woman-in-motorized-wheelchair-dark-skin-tone.png",
    "revision": "e8485371347728c7c36600babfa70bb6"
  },
  {
    "url": "emoji/120/woman-in-motorized-wheelchair-light-skin-tone.png",
    "revision": "660c1c02e4268c1a5a02d613368c0c37"
  },
  {
    "url": "emoji/120/woman-in-motorized-wheelchair-medium-dark-skin-tone.png",
    "revision": "32ef6d9bf717e2c41ddb73d356ae9b3b"
  },
  {
    "url": "emoji/120/woman-in-motorized-wheelchair-medium-light-skin-tone.png",
    "revision": "f850bfcd3672a8250468c13c88b3062c"
  },
  {
    "url": "emoji/120/woman-in-motorized-wheelchair-medium-skin-tone.png",
    "revision": "626c7619dc1425fdcea61496ddb90c8e"
  },
  {
    "url": "emoji/120/woman-in-motorized-wheelchair.png",
    "revision": "ea2217c2c1a7b4405ea4d868f60a2049"
  },
  {
    "url": "emoji/120/woman-in-steamy-room-dark-skin-tone.png",
    "revision": "04375aae22c01623df62b711abac562b"
  },
  {
    "url": "emoji/120/woman-in-steamy-room-light-skin-tone.png",
    "revision": "d994b023591a3453abd232e74d276fac"
  },
  {
    "url": "emoji/120/woman-in-steamy-room-medium-dark-skin-tone.png",
    "revision": "57ce162c183b9c4bfdd0267ab6ef6af0"
  },
  {
    "url": "emoji/120/woman-in-steamy-room-medium-light-skin-tone.png",
    "revision": "1e728e93d8e79de5530b86254227138d"
  },
  {
    "url": "emoji/120/woman-in-steamy-room-medium-skin-tone.png",
    "revision": "6a1453c8632d2ee50134a9f459e54897"
  },
  {
    "url": "emoji/120/woman-in-steamy-room.png",
    "revision": "d19c73cb217ae1fc5dea9d5c03c3405c"
  },
  {
    "url": "emoji/120/woman-judge-dark-skin-tone.png",
    "revision": "bcc2f7ed70cdd31f5881553d5b9d6239"
  },
  {
    "url": "emoji/120/woman-judge-light-skin-tone.png",
    "revision": "325df7e0127949efe9aa08fd03cfad9e"
  },
  {
    "url": "emoji/120/woman-judge-medium-dark-skin-tone.png",
    "revision": "c2b755087be21f4a5ea4306564b9f464"
  },
  {
    "url": "emoji/120/woman-judge-medium-light-skin-tone.png",
    "revision": "22af1f49b1d70652b9703d8438770b1f"
  },
  {
    "url": "emoji/120/woman-judge-medium-skin-tone.png",
    "revision": "1020cb119aa5769c6d333c8dc5b06393"
  },
  {
    "url": "emoji/120/woman-judge.png",
    "revision": "5ba6ee2cd3ebba9604314af4d372e049"
  },
  {
    "url": "emoji/120/woman-juggling-dark-skin-tone.png",
    "revision": "100eb2b8a56bbae904b826d7bd2318ce"
  },
  {
    "url": "emoji/120/woman-juggling-light-skin-tone.png",
    "revision": "3d94e2f6a4a6b82bae238f7969107cba"
  },
  {
    "url": "emoji/120/woman-juggling-medium-dark-skin-tone.png",
    "revision": "f82fc61db0e18ecd3947ced4f8017162"
  },
  {
    "url": "emoji/120/woman-juggling-medium-light-skin-tone.png",
    "revision": "894985d8665f10407eb5e2cd2da975ec"
  },
  {
    "url": "emoji/120/woman-juggling-medium-skin-tone.png",
    "revision": "276192555c58401cdcc2ee97e45de40b"
  },
  {
    "url": "emoji/120/woman-juggling.png",
    "revision": "2f9354f01b959fcc8948a7a08190d873"
  },
  {
    "url": "emoji/120/woman-kneeling-dark-skin-tone.png",
    "revision": "8643c13191bac385afefe9d95faf8f52"
  },
  {
    "url": "emoji/120/woman-kneeling-light-skin-tone.png",
    "revision": "3f3e4fbeb4635fbe9aef918f1cd7c21e"
  },
  {
    "url": "emoji/120/woman-kneeling-medium-dark-skin-tone.png",
    "revision": "f8f3c331e5eafa9e818d9bac777ed9e0"
  },
  {
    "url": "emoji/120/woman-kneeling-medium-light-skin-tone.png",
    "revision": "1027b29158b852572a3c4bbc98a977fb"
  },
  {
    "url": "emoji/120/woman-kneeling-medium-skin-tone.png",
    "revision": "e68d079f0a2d9c4482285ab5c77d4803"
  },
  {
    "url": "emoji/120/woman-kneeling.png",
    "revision": "c7d7849fd20c67b101d2fa584ca8e6de"
  },
  {
    "url": "emoji/120/woman-lifting-weights-dark-skin-tone.png",
    "revision": "322bbe634d1032ee9e5dce45ccf5b5fc"
  },
  {
    "url": "emoji/120/woman-lifting-weights-light-skin-tone.png",
    "revision": "2b969033aa9770d3a753c307d2d9f453"
  },
  {
    "url": "emoji/120/woman-lifting-weights-medium-dark-skin-tone.png",
    "revision": "6914983f339a9a5d8c7a14cb19471129"
  },
  {
    "url": "emoji/120/woman-lifting-weights-medium-light-skin-tone.png",
    "revision": "8b2b5ff06017a787d0f65fca7a78fdfb"
  },
  {
    "url": "emoji/120/woman-lifting-weights-medium-skin-tone.png",
    "revision": "142a681df56582369cd98bdb7650e5fb"
  },
  {
    "url": "emoji/120/woman-lifting-weights.png",
    "revision": "6a1fc5aeae366bc9c70d00699917930e"
  },
  {
    "url": "emoji/120/woman-light-skin-tone-bald.png",
    "revision": "c8d14b51b93d08f6a9c3048f9527cf36"
  },
  {
    "url": "emoji/120/woman-light-skin-tone-blond-hair.png",
    "revision": "d2e92fade0ece3b112a7b695ca1eede0"
  },
  {
    "url": "emoji/120/woman-light-skin-tone-curly-hair.png",
    "revision": "52bf76fc77b67a5bac6cf3a4b4d1029d"
  },
  {
    "url": "emoji/120/woman-light-skin-tone-red-hair.png",
    "revision": "e2760883bc1999e1ab67f8cadcb5d865"
  },
  {
    "url": "emoji/120/woman-light-skin-tone-white-hair.png",
    "revision": "e0cd3cfe82205a47a0ddc3b4c6d836cf"
  },
  {
    "url": "emoji/120/woman-light-skin-tone.png",
    "revision": "e13a05ccc79f91ef3831fdbe26aac9e8"
  },
  {
    "url": "emoji/120/woman-mage-dark-skin-tone.png",
    "revision": "dac2500a1a8da5e21a59278bbe2f3cea"
  },
  {
    "url": "emoji/120/woman-mage-light-skin-tone.png",
    "revision": "3147548cbf7d8838be94386f71afd28d"
  },
  {
    "url": "emoji/120/woman-mage-medium-dark-skin-tone.png",
    "revision": "bae9f98b1bb5b88b05ac3bcf04bca25e"
  },
  {
    "url": "emoji/120/woman-mage-medium-light-skin-tone.png",
    "revision": "dd730f7010137b05181a614d678c4e89"
  },
  {
    "url": "emoji/120/woman-mage-medium-skin-tone.png",
    "revision": "b98709af9f67e53c95cc60f517682781"
  },
  {
    "url": "emoji/120/woman-mage.png",
    "revision": "81b0e7d3f23d457e820c2d6551701f1f"
  },
  {
    "url": "emoji/120/woman-mechanic-dark-skin-tone.png",
    "revision": "00965070f3ad2c0d1e0228575a120245"
  },
  {
    "url": "emoji/120/woman-mechanic-light-skin-tone.png",
    "revision": "9145a9d86b0dd8c0050786cbaa2a6beb"
  },
  {
    "url": "emoji/120/woman-mechanic-medium-dark-skin-tone.png",
    "revision": "a7d625099157be7fa4efd745e6c40fbe"
  },
  {
    "url": "emoji/120/woman-mechanic-medium-light-skin-tone.png",
    "revision": "5e70ca7ae0972108a24699b3b0361c8d"
  },
  {
    "url": "emoji/120/woman-mechanic-medium-skin-tone.png",
    "revision": "8501d04097e1c6c5e7b81f153e8d4801"
  },
  {
    "url": "emoji/120/woman-mechanic.png",
    "revision": "78d876b376daa688b1f68d5e1371af8d"
  },
  {
    "url": "emoji/120/woman-medium-dark-skin-tone-bald.png",
    "revision": "8b25540ccb02ceda384079d5d5c633ca"
  },
  {
    "url": "emoji/120/woman-medium-dark-skin-tone-blond-hair.png",
    "revision": "10294fb51269bfe36c80d9d3f66c5c9d"
  },
  {
    "url": "emoji/120/woman-medium-dark-skin-tone-curly-hair.png",
    "revision": "44d3220b90b6fa270890c243ef5d0f28"
  },
  {
    "url": "emoji/120/woman-medium-dark-skin-tone-red-hair.png",
    "revision": "00f8b116af8f646ecd64ba1d9578ccd7"
  },
  {
    "url": "emoji/120/woman-medium-dark-skin-tone-white-hair.png",
    "revision": "e3489cbb8052689f96dd61ba2e72afe8"
  },
  {
    "url": "emoji/120/woman-medium-dark-skin-tone.png",
    "revision": "a32f8e32539bb21e07aeea17c9882c42"
  },
  {
    "url": "emoji/120/woman-medium-light-skin-tone-bald.png",
    "revision": "0a2899357d303eb7dfb9b612a6f6f835"
  },
  {
    "url": "emoji/120/woman-medium-light-skin-tone-blond-hair.png",
    "revision": "31c3fd4b95f2076dd2e580c9c27e0cb6"
  },
  {
    "url": "emoji/120/woman-medium-light-skin-tone-curly-hair.png",
    "revision": "53a03143623adda0c94f67a5e3aa1823"
  },
  {
    "url": "emoji/120/woman-medium-light-skin-tone-red-hair.png",
    "revision": "8281ed781206da9e6c949bd0e1eec2ac"
  },
  {
    "url": "emoji/120/woman-medium-light-skin-tone-white-hair.png",
    "revision": "bc018db9930b3d9469dbbeef7a4923f5"
  },
  {
    "url": "emoji/120/woman-medium-light-skin-tone.png",
    "revision": "f267aa547248583c1da33b27d97c2893"
  },
  {
    "url": "emoji/120/woman-medium-skin-tone-bald.png",
    "revision": "8c0b8ee1ea34800448c37722f1712121"
  },
  {
    "url": "emoji/120/woman-medium-skin-tone-blond-hair.png",
    "revision": "fc2d8f156af453a996b5c15c23e04f58"
  },
  {
    "url": "emoji/120/woman-medium-skin-tone-curly-hair.png",
    "revision": "239c60db8643eded52ddee8f0b3a21d7"
  },
  {
    "url": "emoji/120/woman-medium-skin-tone-red-hair.png",
    "revision": "d99fa871945eeafad6dbb97d2ad456d9"
  },
  {
    "url": "emoji/120/woman-medium-skin-tone-white-hair.png",
    "revision": "c8a4871ef311eb88a225886f3a0e8590"
  },
  {
    "url": "emoji/120/woman-medium-skin-tone.png",
    "revision": "08cf4c96ee56278dc4d037b9fdc3349f"
  },
  {
    "url": "emoji/120/woman-mountain-biking-dark-skin-tone.png",
    "revision": "9a822c4d5d66189d2619e000bc3f0563"
  },
  {
    "url": "emoji/120/woman-mountain-biking-light-skin-tone.png",
    "revision": "5024c5a24f518d86851549ca0c964750"
  },
  {
    "url": "emoji/120/woman-mountain-biking-medium-dark-skin-tone.png",
    "revision": "4538c55784c3e884b8140496327c193c"
  },
  {
    "url": "emoji/120/woman-mountain-biking-medium-light-skin-tone.png",
    "revision": "2080bb2d2e29f714d177b9e269665790"
  },
  {
    "url": "emoji/120/woman-mountain-biking-medium-skin-tone.png",
    "revision": "873b774e04b6b9210bdff92520fa6c01"
  },
  {
    "url": "emoji/120/woman-mountain-biking.png",
    "revision": "ed3b65142913bc4c810ff4756d58e4c7"
  },
  {
    "url": "emoji/120/woman-office-worker-dark-skin-tone.png",
    "revision": "e671d4318d3f643dbabb344f11beee14"
  },
  {
    "url": "emoji/120/woman-office-worker-light-skin-tone.png",
    "revision": "f65b66c70e69f310f18757e128728038"
  },
  {
    "url": "emoji/120/woman-office-worker-medium-dark-skin-tone.png",
    "revision": "7fe9c84643347ecfdbedae0e9e9df191"
  },
  {
    "url": "emoji/120/woman-office-worker-medium-light-skin-tone.png",
    "revision": "cea6ed8ab789760406a7fbe3427b3285"
  },
  {
    "url": "emoji/120/woman-office-worker-medium-skin-tone.png",
    "revision": "528a33d0e11fbc789f3a3cbb488cc41e"
  },
  {
    "url": "emoji/120/woman-office-worker.png",
    "revision": "6a55e7e05a4cf23a10941baa37e34c29"
  },
  {
    "url": "emoji/120/woman-pilot-dark-skin-tone.png",
    "revision": "d086c97152179c05e74f99c2b3f378f8"
  },
  {
    "url": "emoji/120/woman-pilot-light-skin-tone.png",
    "revision": "1d33726d2466860bf5082b07764dade4"
  },
  {
    "url": "emoji/120/woman-pilot-medium-dark-skin-tone.png",
    "revision": "217982577ebbfcc878045f4ac4ccb199"
  },
  {
    "url": "emoji/120/woman-pilot-medium-light-skin-tone.png",
    "revision": "7be6da15231715f8ab1417f1d087c5ed"
  },
  {
    "url": "emoji/120/woman-pilot-medium-skin-tone.png",
    "revision": "0e27874c168915e043bee7f909ef8f6d"
  },
  {
    "url": "emoji/120/woman-pilot.png",
    "revision": "3aa2f38ffb521abcb65d46a8240fe380"
  },
  {
    "url": "emoji/120/woman-playing-handball-dark-skin-tone.png",
    "revision": "de1b2094cbfd3282807f9be1aa9f0774"
  },
  {
    "url": "emoji/120/woman-playing-handball-light-skin-tone.png",
    "revision": "28692d521d17a00d2b690c478816e8c8"
  },
  {
    "url": "emoji/120/woman-playing-handball-medium-dark-skin-tone.png",
    "revision": "09071c212950c5f5133ddf0c9c9865ee"
  },
  {
    "url": "emoji/120/woman-playing-handball-medium-light-skin-tone.png",
    "revision": "479ae9c89baf13cadb6446fd2d884603"
  },
  {
    "url": "emoji/120/woman-playing-handball-medium-skin-tone.png",
    "revision": "36f67ce1e09cd5745d3ee2aa0bf89c96"
  },
  {
    "url": "emoji/120/woman-playing-handball.png",
    "revision": "32ee551725c1d5b8df991df7505b1aa5"
  },
  {
    "url": "emoji/120/woman-playing-water-polo-dark-skin-tone.png",
    "revision": "28fe25615e9313bb39e53248b1f3f3c0"
  },
  {
    "url": "emoji/120/woman-playing-water-polo-light-skin-tone.png",
    "revision": "929429f45a0e88bd5ae10ca3ad82d151"
  },
  {
    "url": "emoji/120/woman-playing-water-polo-medium-dark-skin-tone.png",
    "revision": "1873a825f689f6a0e3f67e930a5a4908"
  },
  {
    "url": "emoji/120/woman-playing-water-polo-medium-light-skin-tone.png",
    "revision": "f41b08dc1a12593ed3de01df53122ecf"
  },
  {
    "url": "emoji/120/woman-playing-water-polo-medium-skin-tone.png",
    "revision": "c4ba983f44d697e21dab3d97a29ef209"
  },
  {
    "url": "emoji/120/woman-playing-water-polo.png",
    "revision": "106f8355415824446aa2f77f75671ffa"
  },
  {
    "url": "emoji/120/woman-police-officer-dark-skin-tone.png",
    "revision": "047b7565ec394df1461bc228d3f947bd"
  },
  {
    "url": "emoji/120/woman-police-officer-light-skin-tone.png",
    "revision": "6d3959f76cc9a649a321639d4f41618f"
  },
  {
    "url": "emoji/120/woman-police-officer-medium-dark-skin-tone.png",
    "revision": "a21aad7670b331e594e479094d3bcfe3"
  },
  {
    "url": "emoji/120/woman-police-officer-medium-light-skin-tone.png",
    "revision": "9b99e97f9d70a1f4af2b16f51cab8aa6"
  },
  {
    "url": "emoji/120/woman-police-officer-medium-skin-tone.png",
    "revision": "8790efe751f805f4fdddc424375ac101"
  },
  {
    "url": "emoji/120/woman-police-officer.png",
    "revision": "318497675d5d5bd1115e41b35b65c48c"
  },
  {
    "url": "emoji/120/woman-pouting-dark-skin-tone.png",
    "revision": "9156b832840de50693f19dd4ac3f99f7"
  },
  {
    "url": "emoji/120/woman-pouting-light-skin-tone.png",
    "revision": "01af272c99ebcfe405350a68206b0537"
  },
  {
    "url": "emoji/120/woman-pouting-medium-dark-skin-tone.png",
    "revision": "48e313d77f88772c31c9ea531d6a6699"
  },
  {
    "url": "emoji/120/woman-pouting-medium-light-skin-tone.png",
    "revision": "f3abb6d29bbed33aeee57e0a3906e713"
  },
  {
    "url": "emoji/120/woman-pouting-medium-skin-tone.png",
    "revision": "4442179b9f1f5dca5874b11fcb4933c2"
  },
  {
    "url": "emoji/120/woman-pouting.png",
    "revision": "9c43bdeb4933d1833b94fce1b2190d75"
  },
  {
    "url": "emoji/120/woman-raising-hand-dark-skin-tone.png",
    "revision": "cb71527c24a4dc5cd946bccee621801d"
  },
  {
    "url": "emoji/120/woman-raising-hand-light-skin-tone.png",
    "revision": "8ca9802d8ecf4f1e39f986ba55b3c06c"
  },
  {
    "url": "emoji/120/woman-raising-hand-medium-dark-skin-tone.png",
    "revision": "2dce4173629385f6726cb94584a59e6b"
  },
  {
    "url": "emoji/120/woman-raising-hand-medium-light-skin-tone.png",
    "revision": "2cf5e53a465f848adc6b431db9c720f3"
  },
  {
    "url": "emoji/120/woman-raising-hand-medium-skin-tone.png",
    "revision": "207f3e9edd7f42e198e5a35d2114456c"
  },
  {
    "url": "emoji/120/woman-raising-hand.png",
    "revision": "9323dca49de3b6c2be81dc776b545c5f"
  },
  {
    "url": "emoji/120/woman-red-hair.png",
    "revision": "2833f152a33969f2085c4939a620557d"
  },
  {
    "url": "emoji/120/woman-rowing-boat-dark-skin-tone.png",
    "revision": "7697fed2e1c4b074f5b97bd20f358fbe"
  },
  {
    "url": "emoji/120/woman-rowing-boat-light-skin-tone.png",
    "revision": "681ffbc0ca3009c7effc35f0b1bb1571"
  },
  {
    "url": "emoji/120/woman-rowing-boat-medium-dark-skin-tone.png",
    "revision": "da9fb095079bb7c60f67726480df801a"
  },
  {
    "url": "emoji/120/woman-rowing-boat-medium-light-skin-tone.png",
    "revision": "7398a965bd776ac30f7eb72ecdf320b7"
  },
  {
    "url": "emoji/120/woman-rowing-boat-medium-skin-tone.png",
    "revision": "a0c5fc9908534841c6bd5c798a1f702b"
  },
  {
    "url": "emoji/120/woman-rowing-boat.png",
    "revision": "d86a38b411b912974401d77457faf7b6"
  },
  {
    "url": "emoji/120/woman-running-dark-skin-tone.png",
    "revision": "8083fc4289677973fb41ffbc0b1152ae"
  },
  {
    "url": "emoji/120/woman-running-light-skin-tone.png",
    "revision": "13c74fbdeffaee0b7fb22dfb13aff955"
  },
  {
    "url": "emoji/120/woman-running-medium-dark-skin-tone.png",
    "revision": "d5a6de9cd1acce04fa2d46ce31f1e048"
  },
  {
    "url": "emoji/120/woman-running-medium-light-skin-tone.png",
    "revision": "9c35253bd2d2215c6e96128f22de8dfa"
  },
  {
    "url": "emoji/120/woman-running-medium-skin-tone.png",
    "revision": "cff76f3c44a92e391e99caa81c8a91c6"
  },
  {
    "url": "emoji/120/woman-running.png",
    "revision": "31492f83e12663d81074da5cd31d9584"
  },
  {
    "url": "emoji/120/woman-scientist-dark-skin-tone.png",
    "revision": "c9e51ad5092a37c5b7d5f32c01260ef7"
  },
  {
    "url": "emoji/120/woman-scientist-light-skin-tone.png",
    "revision": "6c0c89c8c7d61db74af983239b9df0a1"
  },
  {
    "url": "emoji/120/woman-scientist-medium-dark-skin-tone.png",
    "revision": "3236c9fafebe839f96d671d1787146bd"
  },
  {
    "url": "emoji/120/woman-scientist-medium-light-skin-tone.png",
    "revision": "734a97b02eec517f009ad588027373e9"
  },
  {
    "url": "emoji/120/woman-scientist-medium-skin-tone.png",
    "revision": "bbb559b5b3f4dc32f5888354916f9bc9"
  },
  {
    "url": "emoji/120/woman-scientist.png",
    "revision": "3c2a3d987fe77ae24c09af4081abbc7b"
  },
  {
    "url": "emoji/120/woman-shrugging-dark-skin-tone.png",
    "revision": "a5874f52c049252acac08f444b8a35e1"
  },
  {
    "url": "emoji/120/woman-shrugging-light-skin-tone.png",
    "revision": "8d4aca68d91da1931bd046d74c3bd0dd"
  },
  {
    "url": "emoji/120/woman-shrugging-medium-dark-skin-tone.png",
    "revision": "96b6a1bf831b4c6e3d47b4afdd59e360"
  },
  {
    "url": "emoji/120/woman-shrugging-medium-light-skin-tone.png",
    "revision": "e0caaf8bcceaf95c7a4d8eaaf9c68b54"
  },
  {
    "url": "emoji/120/woman-shrugging-medium-skin-tone.png",
    "revision": "5756e1157f587970ccc365fbdf71488d"
  },
  {
    "url": "emoji/120/woman-shrugging.png",
    "revision": "6a13d96f961db02c3eac9264ca225a2c"
  },
  {
    "url": "emoji/120/woman-singer-dark-skin-tone.png",
    "revision": "d718fd37348a70e1cbe6585dc9c25027"
  },
  {
    "url": "emoji/120/woman-singer-light-skin-tone.png",
    "revision": "48d9a8c909e6941d81619304862a59ab"
  },
  {
    "url": "emoji/120/woman-singer-medium-dark-skin-tone.png",
    "revision": "8d62ad88bb13067ec4da54814d4fca30"
  },
  {
    "url": "emoji/120/woman-singer-medium-light-skin-tone.png",
    "revision": "56931ea3a455a9a24ce82cca26da2a12"
  },
  {
    "url": "emoji/120/woman-singer-medium-skin-tone.png",
    "revision": "9a296bb958a65d9f2f471efce746da8e"
  },
  {
    "url": "emoji/120/woman-singer.png",
    "revision": "29d7ce1ecf365d8aabf2d17c01f0489d"
  },
  {
    "url": "emoji/120/woman-standing-dark-skin-tone.png",
    "revision": "752c8255242dbd3feedc3f43c16f1447"
  },
  {
    "url": "emoji/120/woman-standing-light-skin-tone.png",
    "revision": "d306d83950fa44ca2f653d150df63c90"
  },
  {
    "url": "emoji/120/woman-standing-medium-dark-skin-tone.png",
    "revision": "e9ad0f5e67013abe0488e8ce6c304eed"
  },
  {
    "url": "emoji/120/woman-standing-medium-light-skin-tone.png",
    "revision": "dc34dafe556c9b00133548b7fe4a9cd0"
  },
  {
    "url": "emoji/120/woman-standing-medium-skin-tone.png",
    "revision": "67a983028b7b9ab24774498484f4f62b"
  },
  {
    "url": "emoji/120/woman-standing.png",
    "revision": "a4324640ffbe2204dd7ccd419d599c42"
  },
  {
    "url": "emoji/120/woman-student-dark-skin-tone.png",
    "revision": "d7ff30f36ec87f08839ed35c946609dc"
  },
  {
    "url": "emoji/120/woman-student-light-skin-tone.png",
    "revision": "32a7c6030670e44a01be8e3f36bcb7e9"
  },
  {
    "url": "emoji/120/woman-student-medium-dark-skin-tone.png",
    "revision": "0ebc5ed2c129a777ca7e6a1442256c08"
  },
  {
    "url": "emoji/120/woman-student-medium-light-skin-tone.png",
    "revision": "9d0138bbe1b6b153902f216ef79845b9"
  },
  {
    "url": "emoji/120/woman-student-medium-skin-tone.png",
    "revision": "0f3bb7e8bee6e2d5cd80ac3944d24ac5"
  },
  {
    "url": "emoji/120/woman-student.png",
    "revision": "251f328a67cb982d1c9cad4a9d5dec53"
  },
  {
    "url": "emoji/120/woman-superhero-dark-skin-tone.png",
    "revision": "da94ed207954565f3633ffc6747b3709"
  },
  {
    "url": "emoji/120/woman-superhero-light-skin-tone.png",
    "revision": "b3a191374f0ac7c0c95a370721fa7efd"
  },
  {
    "url": "emoji/120/woman-superhero-medium-dark-skin-tone.png",
    "revision": "fcaf9e691573dd4452f3f0f3b88c883e"
  },
  {
    "url": "emoji/120/woman-superhero-medium-light-skin-tone.png",
    "revision": "2256b027bc402d39a32bd57ff9ba8c00"
  },
  {
    "url": "emoji/120/woman-superhero-medium-skin-tone.png",
    "revision": "360771ca447b376bf9ea34df4292eb04"
  },
  {
    "url": "emoji/120/woman-superhero.png",
    "revision": "368b550aa2eee3b7bef7fbbf51622c86"
  },
  {
    "url": "emoji/120/woman-supervillain-dark-skin-tone.png",
    "revision": "8be2f47b448d1c24243eea30a7ddb30b"
  },
  {
    "url": "emoji/120/woman-supervillain-light-skin-tone.png",
    "revision": "fafd5c938bc899a18a63ae94f4493bdc"
  },
  {
    "url": "emoji/120/woman-supervillain-medium-dark-skin-tone.png",
    "revision": "d8b88e18f0ea1572c2143c50bdfca588"
  },
  {
    "url": "emoji/120/woman-supervillain-medium-light-skin-tone.png",
    "revision": "80937f0fcb2cb96e804b1ded3c1d8ba8"
  },
  {
    "url": "emoji/120/woman-supervillain-medium-skin-tone.png",
    "revision": "613d235fee65f42064a4b67d915ab48a"
  },
  {
    "url": "emoji/120/woman-supervillain.png",
    "revision": "97dc76c32b6a91f68e53e919dba9d854"
  },
  {
    "url": "emoji/120/woman-surfing-dark-skin-tone.png",
    "revision": "5abddccef70bbde58600e990fae4006a"
  },
  {
    "url": "emoji/120/woman-surfing-light-skin-tone.png",
    "revision": "08d119e48efdda91ff778ab3111b0f25"
  },
  {
    "url": "emoji/120/woman-surfing-medium-dark-skin-tone.png",
    "revision": "7fb6ab46bab4c01e8d546fb5464254a1"
  },
  {
    "url": "emoji/120/woman-surfing-medium-light-skin-tone.png",
    "revision": "748b7105fdb732bb686a637355e7e385"
  },
  {
    "url": "emoji/120/woman-surfing-medium-skin-tone.png",
    "revision": "c4aa82c35f85a1713c739c3a3b2a53ec"
  },
  {
    "url": "emoji/120/woman-surfing.png",
    "revision": "f474e33d3a7c42098d19172f02d10127"
  },
  {
    "url": "emoji/120/woman-swimming-dark-skin-tone.png",
    "revision": "068200f9ac3e5e6aeede150046510e02"
  },
  {
    "url": "emoji/120/woman-swimming-light-skin-tone.png",
    "revision": "50a1e740433a7f2e4371a515bfed3f5f"
  },
  {
    "url": "emoji/120/woman-swimming-medium-dark-skin-tone.png",
    "revision": "1194c641cc9eec2f71a21ac172803424"
  },
  {
    "url": "emoji/120/woman-swimming-medium-light-skin-tone.png",
    "revision": "ea8d4adf2d1c710ebc7f4e74cd86eeba"
  },
  {
    "url": "emoji/120/woman-swimming-medium-skin-tone.png",
    "revision": "e03b316f56c30d5def07b823af85dfef"
  },
  {
    "url": "emoji/120/woman-swimming.png",
    "revision": "29af237f0d274258186a1fcb819c2644"
  },
  {
    "url": "emoji/120/woman-teacher-dark-skin-tone.png",
    "revision": "b3ddf30703bf279dc1215f9b9ef9adf2"
  },
  {
    "url": "emoji/120/woman-teacher-light-skin-tone.png",
    "revision": "1e90beb958a492d03bc3a95f70d1555a"
  },
  {
    "url": "emoji/120/woman-teacher-medium-dark-skin-tone.png",
    "revision": "8dde6fc3ec569f779c8b6860ed14b8b2"
  },
  {
    "url": "emoji/120/woman-teacher-medium-light-skin-tone.png",
    "revision": "7c9c1628d3ac70b423b8fdcde534ede7"
  },
  {
    "url": "emoji/120/woman-teacher-medium-skin-tone.png",
    "revision": "33152c3e21df877ced6f1a006ec1051a"
  },
  {
    "url": "emoji/120/woman-teacher.png",
    "revision": "582597a2b59d47945ce16e74d19ba0de"
  },
  {
    "url": "emoji/120/woman-technologist-dark-skin-tone.png",
    "revision": "63f51bae9f702b0fe457907e9689b3c9"
  },
  {
    "url": "emoji/120/woman-technologist-light-skin-tone.png",
    "revision": "af006eab0af7fc044394c710441b4742"
  },
  {
    "url": "emoji/120/woman-technologist-medium-dark-skin-tone.png",
    "revision": "3b2bc8ae8bab07e6bc7c2c6e8ca35c95"
  },
  {
    "url": "emoji/120/woman-technologist-medium-light-skin-tone.png",
    "revision": "90eaf6b5535b861bea6fc10302d263ed"
  },
  {
    "url": "emoji/120/woman-technologist-medium-skin-tone.png",
    "revision": "28b5ac0d1a284d41a240f731e38c6e35"
  },
  {
    "url": "emoji/120/woman-technologist.png",
    "revision": "bdb20225f8d9a30a18d6b6cca0ccd3dc"
  },
  {
    "url": "emoji/120/woman-tipping-hand-dark-skin-tone.png",
    "revision": "435e52daf3d1ec39ddea903522059d2e"
  },
  {
    "url": "emoji/120/woman-tipping-hand-light-skin-tone.png",
    "revision": "e880c1c81923984ec3a18aa9acf1b225"
  },
  {
    "url": "emoji/120/woman-tipping-hand-medium-dark-skin-tone.png",
    "revision": "c7ebb4dbcc5e39c97983b4180b6f97f0"
  },
  {
    "url": "emoji/120/woman-tipping-hand-medium-light-skin-tone.png",
    "revision": "067a1dae75190a7b58f402c3f9f07b31"
  },
  {
    "url": "emoji/120/woman-tipping-hand-medium-skin-tone.png",
    "revision": "b0e4aaf25d384d0b570cf9074f5c3b0f"
  },
  {
    "url": "emoji/120/woman-tipping-hand.png",
    "revision": "06b57b8187e0a78de45aa53cfc89cf9e"
  },
  {
    "url": "emoji/120/woman-vampire-dark-skin-tone.png",
    "revision": "14df4beabf7604a75d40913b9a012183"
  },
  {
    "url": "emoji/120/woman-vampire-light-skin-tone.png",
    "revision": "49945d0557c9a82735fbc9a92ada02c3"
  },
  {
    "url": "emoji/120/woman-vampire-medium-dark-skin-tone.png",
    "revision": "bb38f4a5376c4ea39b095f57dd2bbcae"
  },
  {
    "url": "emoji/120/woman-vampire-medium-light-skin-tone.png",
    "revision": "a1385b4db3c5e06f520047fb8253bba6"
  },
  {
    "url": "emoji/120/woman-vampire-medium-skin-tone.png",
    "revision": "c09ded1d06d725eb19157e0b2d00dba5"
  },
  {
    "url": "emoji/120/woman-vampire.png",
    "revision": "67172d0d180e8d197759ea4a5a0fd248"
  },
  {
    "url": "emoji/120/woman-walking-dark-skin-tone.png",
    "revision": "09ae6f30800339cca0241fb9b0ab7072"
  },
  {
    "url": "emoji/120/woman-walking-light-skin-tone.png",
    "revision": "6e1b6e7727a41cf5feca0da40bb43811"
  },
  {
    "url": "emoji/120/woman-walking-medium-dark-skin-tone.png",
    "revision": "0bffbcd2617daf294434fce6845c3933"
  },
  {
    "url": "emoji/120/woman-walking-medium-light-skin-tone.png",
    "revision": "9a42de6aff902316aa01d3140be8c40d"
  },
  {
    "url": "emoji/120/woman-walking-medium-skin-tone.png",
    "revision": "aa2397d859fb29f3cca45834d15ab2ef"
  },
  {
    "url": "emoji/120/woman-walking.png",
    "revision": "9e0ba06f7895949b107649f5eded1268"
  },
  {
    "url": "emoji/120/woman-wearing-turban-dark-skin-tone.png",
    "revision": "e7c2b6b056837beaff9e00decac1821e"
  },
  {
    "url": "emoji/120/woman-wearing-turban-light-skin-tone.png",
    "revision": "606f147ebe6dd4f60405be504cc72c6d"
  },
  {
    "url": "emoji/120/woman-wearing-turban-medium-dark-skin-tone.png",
    "revision": "e1add4b7952357a824c0c22065e6e842"
  },
  {
    "url": "emoji/120/woman-wearing-turban-medium-light-skin-tone.png",
    "revision": "b058245d14ff6fa1d483bbeae6aa5811"
  },
  {
    "url": "emoji/120/woman-wearing-turban-medium-skin-tone.png",
    "revision": "bb83de1865419e42698fba61b47cfc63"
  },
  {
    "url": "emoji/120/woman-wearing-turban.png",
    "revision": "897ec48568cbf4992fff062accfc1b54"
  },
  {
    "url": "emoji/120/woman-white-hair.png",
    "revision": "7bf378190e39be306531e580a05de73d"
  },
  {
    "url": "emoji/120/woman-with-white-cane-dark-skin-tone.png",
    "revision": "02da9ce7a69191cac1a7f50b207201cf"
  },
  {
    "url": "emoji/120/woman-with-white-cane-light-skin-tone.png",
    "revision": "15a64565e66049375ed3d838dfec634e"
  },
  {
    "url": "emoji/120/woman-with-white-cane-medium-dark-skin-tone.png",
    "revision": "d92d30b62e34949bd5a3fc0689c11395"
  },
  {
    "url": "emoji/120/woman-with-white-cane-medium-light-skin-tone.png",
    "revision": "47c42aa9ba44e5eb8668ed2e43ae3cdc"
  },
  {
    "url": "emoji/120/woman-with-white-cane-medium-skin-tone.png",
    "revision": "7617b08d02a1f0a232d2f69420a0c26f"
  },
  {
    "url": "emoji/120/woman-with-white-cane.png",
    "revision": "002f5df7ad2b480165acb798fa82d2c7"
  },
  {
    "url": "emoji/120/woman-zombie-dark-skin-tone.png",
    "revision": "8f86e6104520bf9814e7d52f8924da2d"
  },
  {
    "url": "emoji/120/woman-zombie-light-skin-tone.png",
    "revision": "bc337cc04a38f057c8029672e3b01f3e"
  },
  {
    "url": "emoji/120/woman-zombie-medium-dark-skin-tone.png",
    "revision": "6851159f42f96c3577525f16dc1d7959"
  },
  {
    "url": "emoji/120/woman-zombie-medium-light-skin-tone.png",
    "revision": "0ff6040d870e06aa243f6d797d5a746e"
  },
  {
    "url": "emoji/120/woman-zombie-medium-skin-tone.png",
    "revision": "92f1d6d6bd4ac0e3ff0706844658cd44"
  },
  {
    "url": "emoji/120/woman-zombie.png",
    "revision": "3b08d2c8935331bac73bba11719f6140"
  },
  {
    "url": "emoji/120/woman.png",
    "revision": "4618c1686c1f839ff7222f7aa02c5b84"
  },
  {
    "url": "emoji/120/womans-boot.png",
    "revision": "2d2ac64fff63644d15c23f7be2097076"
  },
  {
    "url": "emoji/120/womans-clothes.png",
    "revision": "5f161e4af6d47d427177d92166c7078e"
  },
  {
    "url": "emoji/120/womans-hat.png",
    "revision": "79f819420215ed444d5b9cc9868ae270"
  },
  {
    "url": "emoji/120/womans-sandal.png",
    "revision": "8329e2c8aeb6d976adc1cdc510525906"
  },
  {
    "url": "emoji/120/women-holding-hands-dark-skin-tone-light-skin-tone.png",
    "revision": "54c5253f261f14878add64e85ded9357"
  },
  {
    "url": "emoji/120/women-holding-hands-dark-skin-tone-medium-dark-skin-tone.png",
    "revision": "812c26c5fd9e883d7988550a452dd916"
  },
  {
    "url": "emoji/120/women-holding-hands-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "d198fab17ee7f09ac3c22de03cb0caa5"
  },
  {
    "url": "emoji/120/women-holding-hands-dark-skin-tone-medium-skin-tone.png",
    "revision": "7b91c6877b0d5b1e03832b42aaa0509a"
  },
  {
    "url": "emoji/120/women-holding-hands-dark-skin-tone.png",
    "revision": "0bcef5e9cc7ae9a963bd4bf5edbca174"
  },
  {
    "url": "emoji/120/women-holding-hands-light-skin-tone.png",
    "revision": "0e19a98fa43c789cc49dbee937c049af"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-dark-skin-tone-light-skin-tone.png",
    "revision": "dfbf2d29ff6e4a098973d8b0f7be0db5"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone.png",
    "revision": "78341a513e808395dcf251695de9da64"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-dark-skin-tone-medium-skin-tone.png",
    "revision": "69793214efddd4d426641620d76fbcac"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-dark-skin-tone.png",
    "revision": "c7375b6d75e83066e7678104e1a48fe3"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-light-skin-tone-light-skin-tone.png",
    "revision": "58ba2cf61936a09735536fef45a751df"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-light-skin-tone.png",
    "revision": "ae82a72398e8c7dcd829d059ece6fd0a"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-skin-tone-light-skin-tone.png",
    "revision": "2915fa105bb52edeb6f8f216225216ad"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-skin-tone-medium-light-skin-tone.png",
    "revision": "11dc26289db7b4e5db0d7aaae706f31a"
  },
  {
    "url": "emoji/120/women-holding-hands-medium-skin-tone.png",
    "revision": "d7348fbe25db2ed2a1f0f2ab288f3ed2"
  },
  {
    "url": "emoji/120/women-holding-hands.png",
    "revision": "3672dbe6e5762859c0136739e4bfc507"
  },
  {
    "url": "emoji/120/women-with-bunny-ears-partying-dark-skin-tone.png",
    "revision": "c1566d38d1f21b5cba7a4f4362c39f2b"
  },
  {
    "url": "emoji/120/women-with-bunny-ears-partying-light-skin-tone.png",
    "revision": "54f1b4e651ca8348cce7f9124e87443a"
  },
  {
    "url": "emoji/120/women-with-bunny-ears-partying-medium-dark-skin-tone.png",
    "revision": "ad6cbfe3c788631a583d72012887a6f4"
  },
  {
    "url": "emoji/120/women-with-bunny-ears-partying-medium-light-skin-tone.png",
    "revision": "9d2178f57e774e5ec3162280e406ce34"
  },
  {
    "url": "emoji/120/women-with-bunny-ears-partying-medium-skin-tone.png",
    "revision": "ff42c55203dbbebbf295ef007573935e"
  },
  {
    "url": "emoji/120/women-with-bunny-ears.png",
    "revision": "f7b3d1948eed7a36763492f467b696de"
  },
  {
    "url": "emoji/120/women-wrestling-dark-skin-tone.png",
    "revision": "565f68b6c2d823310862fef30d4dbfc0"
  },
  {
    "url": "emoji/120/women-wrestling-light-skin-tone.png",
    "revision": "49caf2f076ab46654aa2dd176b558255"
  },
  {
    "url": "emoji/120/women-wrestling-medium-dark-skin-tone.png",
    "revision": "f3dfd99b861ed0f3a85f1b2f6f7e76cc"
  },
  {
    "url": "emoji/120/women-wrestling-medium-light-skin-tone.png",
    "revision": "52f93e0abcfb4bbf93664ff6293131b9"
  },
  {
    "url": "emoji/120/women-wrestling-medium-skin-tone.png",
    "revision": "14a541fbda1a4dee122b3bcde516a82e"
  },
  {
    "url": "emoji/120/women-wrestling.png",
    "revision": "a09b07f722077fbd57807db3fb0c30dc"
  },
  {
    "url": "emoji/120/womens-room.png",
    "revision": "6bfd8ab54a6b3d0b4ea4e27b71545065"
  },
  {
    "url": "emoji/120/woozy-face.png",
    "revision": "a1d7e77343ebea0e21fbeed87c055c32"
  },
  {
    "url": "emoji/120/world-map.png",
    "revision": "5041af4105328d74f4ff229dd710619f"
  },
  {
    "url": "emoji/120/worried-face.png",
    "revision": "cf44baf9e5af6103c68322dd384a344b"
  },
  {
    "url": "emoji/120/wrapped-gift.png",
    "revision": "b8eef517f53a356afe60e866c56a71c4"
  },
  {
    "url": "emoji/120/wrench.png",
    "revision": "694b9335d85cf3d70e9cb1fb3d56d62c"
  },
  {
    "url": "emoji/120/wrestlers-dark-skin-tone.png",
    "revision": "34913845b89d4f2665e3bdb9780a4e5f"
  },
  {
    "url": "emoji/120/wrestlers-light-skin-tone.png",
    "revision": "1bbbd5fa5dd8793342e82f0454a60d5f"
  },
  {
    "url": "emoji/120/wrestlers-medium-dark-skin-tone.png",
    "revision": "83447f7630a931ad6e5e933f7f125bb9"
  },
  {
    "url": "emoji/120/wrestlers-medium-light-skin-tone.png",
    "revision": "3c3ba7a838920d61b743ea7cdee96303"
  },
  {
    "url": "emoji/120/wrestlers-medium-skin-tone.png",
    "revision": "af043e281a16a260b03b785915305d51"
  },
  {
    "url": "emoji/120/writing-hand-dark-skin-tone.png",
    "revision": "bb08fea9fb75a2768ca491e85fbf95cf"
  },
  {
    "url": "emoji/120/writing-hand-light-skin-tone.png",
    "revision": "680d74773231078cf8d2c82848668df6"
  },
  {
    "url": "emoji/120/writing-hand-medium-dark-skin-tone.png",
    "revision": "e1a82f4ffbf5ed6f48a252893fdf8691"
  },
  {
    "url": "emoji/120/writing-hand-medium-light-skin-tone.png",
    "revision": "5b0d5a66ac7a97c854ce7453a812b8ea"
  },
  {
    "url": "emoji/120/writing-hand-medium-skin-tone.png",
    "revision": "dacfd3df68fada262737f5459094eabb"
  },
  {
    "url": "emoji/120/writing-hand.png",
    "revision": "70c4eec3a1707f9e04b63fa7d742e4b0"
  },
  {
    "url": "emoji/120/yarn.png",
    "revision": "342d40d9e593b54184df026e265ba63c"
  },
  {
    "url": "emoji/120/yawning-face.png",
    "revision": "932fc00c91aa1448bcd2400447be5e58"
  },
  {
    "url": "emoji/120/yellow-heart.png",
    "revision": "c193383fd2128b58b4dc152853b728d0"
  },
  {
    "url": "emoji/120/yen-banknote.png",
    "revision": "bf1945574bc7c775a07017629396d57b"
  },
  {
    "url": "emoji/120/yin-yang.png",
    "revision": "805cdf3418303dbc25f780f999cc1907"
  },
  {
    "url": "emoji/120/yo-yo.png",
    "revision": "e5eeb977c514b8323befa3752a0b12b4"
  },
  {
    "url": "emoji/120/zany-face.png",
    "revision": "c1f3b390f823624bd92701d5d30788ed"
  },
  {
    "url": "emoji/120/zebra.png",
    "revision": "9b4fb171e90224eb0c53d607350c9f26"
  },
  {
    "url": "emoji/120/zipper-mouth-face.png",
    "revision": "47eec7b1a572b7890bd55b3316df2183"
  },
  {
    "url": "emoji/120/zombie-dark-skin-tone.png",
    "revision": "335d5b4495c8719a6032b2105134da0d"
  },
  {
    "url": "emoji/120/zombie-light-skin-tone.png",
    "revision": "5ec9e6b514684e9638ad30f180ac0c96"
  },
  {
    "url": "emoji/120/zombie-medium-dark-skin-tone.png",
    "revision": "ce70fd95b4df31a05d2ce3fe212f5b95"
  },
  {
    "url": "emoji/120/zombie-medium-light-skin-tone.png",
    "revision": "b1842237644a5c8176a9a3bbfad0000e"
  },
  {
    "url": "emoji/120/zombie-medium-skin-tone.png",
    "revision": "53942fc7649e2f92f8e14f5066141a66"
  },
  {
    "url": "emoji/120/zombie.png",
    "revision": "53930b4d901e436428ce017330e78a79"
  },
  {
    "url": "emoji/120/zzz.png",
    "revision": "b83a07f6e2021bdc2a02a02282dfe660"
  },
  {
    "url": "emojipedia-logo-emoji.png",
    "revision": "46105e7aadf50beddcce334fed8a1cee"
  },
  {
    "url": "index.html",
    "revision": "ca86688dccd16713c73b11c63eef2ad5"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "me/index.html",
    "revision": "ed08f1505551dcfbc69dc9f23c53a586"
  },
  {
    "url": "mold/arrow/arrow1_0.png",
    "revision": "36c04708178cfa9ab04fde75493577a2"
  },
  {
    "url": "mold/arrow/arrow1_1.png",
    "revision": "97af5e84107a2d2edd19dd462b89bfc2"
  },
  {
    "url": "mold/arrow/arrow2_0.png",
    "revision": "cbf661dbcbb5a7704026a58041959297"
  },
  {
    "url": "mold/arrow/arrow2_1.png",
    "revision": "7bf65635095bfe2a2b27b63669925f82"
  },
  {
    "url": "mold/attribute/dark.png",
    "revision": "f3087f7e0f1babdd177ab210697e92a1"
  },
  {
    "url": "mold/attribute/divine.png",
    "revision": "7c1a95a413e4bbba60b951f054d546b0"
  },
  {
    "url": "mold/attribute/earth.png",
    "revision": "11b703397e75cb204472944646f752c3"
  },
  {
    "url": "mold/attribute/fire.png",
    "revision": "96058494a6489ea85f25bfafbab7eeee"
  },
  {
    "url": "mold/attribute/light.png",
    "revision": "3e79163a9f6d4ddf643ab61339b1e505"
  },
  {
    "url": "mold/attribute/spell.png",
    "revision": "34803d50a13822226a8bd4bd713f184e"
  },
  {
    "url": "mold/attribute/trap.png",
    "revision": "d82b38bf4a14c56f3c51843c5574e0ef"
  },
  {
    "url": "mold/attribute/water.png",
    "revision": "c53454cbb4bd065948f3346d28c84f4f"
  },
  {
    "url": "mold/attribute/wind.png",
    "revision": "d2548a68002ea7d6dea2b01cdfbd4d39"
  },
  {
    "url": "mold/flash.jpg",
    "revision": "6247b35d27ab8efea4d9d14706bd5f6b"
  },
  {
    "url": "mold/flash2.jpg",
    "revision": "6204a01cc1810bd520df3b322857d0c0"
  },
  {
    "url": "mold/font/cn.ttf",
    "revision": "5dd51d2a1a681001c5a2324e1c2da28d"
  },
  {
    "url": "mold/font/en_name.ttf",
    "revision": "a2fa4b9dd640c95a1fe644b92f1e7d2d"
  },
  {
    "url": "mold/font/en.ttf",
    "revision": "84c17eb1d86a497e938dd58b65ee5387"
  },
  {
    "url": "mold/font/link.ttf",
    "revision": "0fe88b56e579e67a675ae7ce637bfe0c"
  },
  {
    "url": "mold/font/number.ttf",
    "revision": "35913bb2c6e777539e5e7c7223334ad3"
  },
  {
    "url": "mold/font/password.ttf",
    "revision": "a148e9574266c153aab201f0bc6525ea"
  },
  {
    "url": "mold/font/race.ttf",
    "revision": "1316821eee46b6dd45c3a89929be8c1a"
  },
  {
    "url": "mold/font/title.ttf",
    "revision": "e5b82c3c86696e75ea96972789f7a317"
  },
  {
    "url": "mold/frame/l1.jpg",
    "revision": "031cf86a72983772ce325207a161c2ef"
  },
  {
    "url": "mold/frame/l2.jpg",
    "revision": "6c06b68745ad48502a3165bc2c56a992"
  },
  {
    "url": "mold/frame/monster_cl_lb.jpg",
    "revision": "c73f8919d006c0518514e2fc916432dd"
  },
  {
    "url": "mold/frame/monster_cl.jpg",
    "revision": "2960c28c89efed5d2d61b0fc406e633c"
  },
  {
    "url": "mold/frame/monster_dt.jpg",
    "revision": "abb21f324f96d06b238e17ed75714c13"
  },
  {
    "url": "mold/frame/monster_lj.jpg",
    "revision": "ee4cea85e4553515c78a439f08665527"
  },
  {
    "url": "mold/frame/monster_rh_lb.jpg",
    "revision": "d271f0ecbaaa5480e2017f54a89b76dc"
  },
  {
    "url": "mold/frame/monster_rh.jpg",
    "revision": "8b884927c4a9147c323550c5da8d0ef4"
  },
  {
    "url": "mold/frame/monster_tc_lb.jpg",
    "revision": "f2f360d5d7656bf626ababfcfb8a364c"
  },
  {
    "url": "mold/frame/monster_tc.jpg",
    "revision": "012c06010042354b1f3f4e781174b507"
  },
  {
    "url": "mold/frame/monster_tk.jpg",
    "revision": "cce2f26c30f22c9688153a8476774db8"
  },
  {
    "url": "mold/frame/monster_tt_lb.jpg",
    "revision": "d511b94a77cb1cddc5773e6f1e85e177"
  },
  {
    "url": "mold/frame/monster_tt.jpg",
    "revision": "73d447c34d9c654403d09999c026cc48"
  },
  {
    "url": "mold/frame/monster_xg_lb.jpg",
    "revision": "4cf05388fe79689a51e3952e9185a2b0"
  },
  {
    "url": "mold/frame/monster_xg.jpg",
    "revision": "2801270375b296c0e05c5cd4b86f58ad"
  },
  {
    "url": "mold/frame/monster_ys_lb.jpg",
    "revision": "3868242fa059e590fdc86d03f9f04b05"
  },
  {
    "url": "mold/frame/monster_ys.jpg",
    "revision": "59f2a042bb429befd1cdd28921369c80"
  },
  {
    "url": "mold/frame/spell.jpg",
    "revision": "5d8465ec4de9e41e4bed6c976b435e2e"
  },
  {
    "url": "mold/frame/trap.jpg",
    "revision": "f54c32c9372618e699bf94ebc9dbb4ea"
  },
  {
    "url": "mold/holo/holo.jpg",
    "revision": "7a573e07c750cdd66ff0ae938a489375"
  },
  {
    "url": "mold/holo/holo.png",
    "revision": "548ed532451433a42d2fd2d7bbd1b56a"
  },
  {
    "url": "mold/icon/cd.png",
    "revision": "440e9d893efb89b361db15eaf0482df2"
  },
  {
    "url": "mold/icon/fj.png",
    "revision": "d6951efeab7544d342ec856d7ee6a648"
  },
  {
    "url": "mold/icon/sg.png",
    "revision": "aa90d7908e54bc57c07fff8594397cd3"
  },
  {
    "url": "mold/icon/ys.png",
    "revision": "85bce4c278c39872a318811abcb5799a"
  },
  {
    "url": "mold/icon/yx.png",
    "revision": "0c79b8d9d072c11299bee174e7c4cf3e"
  },
  {
    "url": "mold/icon/zb.png",
    "revision": "030cc2a8420b82aa74fa31feaead951d"
  },
  {
    "url": "mold/pic.jpg",
    "revision": "52e28a28b5a1617848b08de2eefd34a2"
  },
  {
    "url": "mold/star/level.png",
    "revision": "0fea6643b32adbe39a8884c49c6832fc"
  },
  {
    "url": "mold/star/rank.png",
    "revision": "64c9d1f602a24edee1a3261e55ff4257"
  },
  {
    "url": "npm.png",
    "revision": "beb263ea5ba67976b4e48eec1e9ea216"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
