(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{324:function(e,a,t){"use strict";t.r(a);var s=t(14),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("生物等级允许通过玩家的等级或其他数据，来生成等级化生物\n这些数据通过你选择的"),a("code",[e._v("PlaceHolder")]),e._v("占位符来获取")]),e._v(" "),a("h2",{attrs:{id:"_1-寻找占位符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-寻找占位符"}},[e._v("#")]),e._v(" 1. 寻找占位符")]),e._v(" "),a("p",[e._v("当你使用"),a("code",[e._v("ecoskills")]),e._v("时，你可以用其"),a("code",[e._v("PlaceHolder")]),e._v("的占位符")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://plugins.auxilor.io/ecoskills/placeholderapi",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://plugins.auxilor.io/ecoskills/placeholderapi"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"_2-编写文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写文件"}},[e._v("#")]),e._v(" 2. 编写文件")]),e._v(" "),a("p",[e._v("在预设部分之中，找到"),a("code",[e._v("player_Levelling")]),e._v("这个类")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("player_Levelling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#   This Strategy Preset controls the player-stat based levelling system.")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'LVLling Strategy - Player Based AVERAGE CHALLENGE'")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("strategies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("player-levelling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("match-level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("use-player-max-level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("decrease-level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("player-level-scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("level-cap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tiers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("1-15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("16-30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("31-45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 21"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("variable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'%level%'")]),e._v("\n")])])]),a("p",[e._v("在"),a("code",[e._v("variable")]),e._v("部分修改至，你想用的占位符")]),e._v(" "),a("blockquote",[a("p",[e._v("提示：你可以使用"),a("code",[e._v("PlaceHolder")]),e._v("的"),a("code",[e._v("maths")]),e._v("模块来高效添加多个占位符")])]),e._v(" "),a("p",[e._v("你可以按照你的需要，随意修改。 所有"),a("code",[e._v("player_levelling")]),e._v("的变量都可以在我们的wiki之中找到：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/lokka30/LevelledMobs/wiki/Documentation---Conditions,-Strategies,-and-Apply-Settings#player-levelling",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/lokka30/LevelledMobs/wiki/Documentation---Conditions,-Strategies,-and-Apply-Settings#player-levelling"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("最后，我们需要在"),a("code",[e._v("default-rule")]),e._v("中启动"),a("code",[e._v("player_levelling")])]),e._v(" "),a("p",[e._v("你在"),a("code",[e._v("default-rule")]),e._v("中的"),a("code",[e._v("use-preset")]),e._v("应该长这样：")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("default-rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("use-preset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" allowed_worlds\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" nametag_using_numbers\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - nametag_using_indicator")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - basic_challenge")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" average_challenge\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - advanced_challenge")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - extreme_challenge")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - apply_LevellingVariance")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - weighted_random_basic")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" weighted_random_average\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - weighted_random_advanced")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - weighted_random_extreme")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - spawn_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - blended_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - ycoord_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - random_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - player_Levelling")]),e._v("\n")])])]),a("p",[e._v("需要修改成这样：")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("default-rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("use-preset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" allowed_worlds\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" nametag_using_numbers\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - nametag_using_indicator")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - basic_challenge")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" average_challenge\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - advanced_challenge")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - extreme_challenge")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - apply_LevellingVariance")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - weighted_random_basic")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" weighted_random_average\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - weighted_random_advanced")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - weighted_random_extreme")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - spawn_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - blended_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - ycoord_Levelling")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#    - random_Levelling")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" player_Levelling\n")])])]),a("p",[e._v("重点！记得保存你的文件（文件 -> 保存）！")]),e._v(" "),a("h2",{attrs:{id:"_3-重启插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启插件"}},[e._v("#")]),e._v(" 3. 重启插件")]),e._v(" "),a("p",[e._v("现在你需要"),a("code",[e._v("reload")]),e._v("你的插件，告诉它你修改了文件，并启用"),a("code",[e._v("player_levelling")])]),e._v(" "),a("p",[e._v("下述指令，会使已经等级化生物按照"),a("code",[e._v("player_levelling")]),e._v("重新获取等级")]),e._v(" "),a("p",[e._v("运行： "),a("code",[e._v("/lm rules force_all")])]),e._v(" "),a("h2",{attrs:{id:"完工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完工"}},[e._v("#")]),e._v(" 完工！")]),e._v(" "),a("p",[e._v("现在所有的实体会按照，你所使用的EcoSkill的数据来获取等级了!")])])}),[],!1,null,null,null);a.default=n.exports}}]);