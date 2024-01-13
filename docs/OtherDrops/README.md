## ![OtherDrops](https://i.imgur.com/Ep0hdRz.png)

# 欢迎来到 OtherDrops 中文Wiki！

OtherDrops 是 Minecraft Spigot API 的插件，可用于更改生物死亡或方块损坏时掉落的内容，非常灵活，开箱即用。下面的内容描述了如何配置 OtherDrops 并实现您的需求。

有关最新下载地址，请参阅 Spigot 资源: <https://www.spigotmc.org/resources/otherdrops-updated.51793/>

配置示例和思路 (即将呈现) - 实现特定功能的思路和方法

[[材料和生物价值 | 生物和材料清单]] - 方块、物品、生物和工具的价值

[[颜色和数据值 | 数据值]] - 列出了可用的颜色与数据值


# 安装和配置

1. 关闭服务器。
2. 如果你之前已经安装过，保存一份当前的 OtherDrops 文件夹，并删除原来的 otherdrops-config.yml 文件。
3. 删除旧 jar（如果有）并复制此 jar 代替它。
     * 如果你使用的是 1.13 版本，请使用 OtherDrops1.13-3.2.6.jar
     * 如果您使用的版本低于 1.13 (1.11-1.12)，请使用 OtherDropsLegacy-3.2.6.jar
4. 重新启动服务器，生成新的配置文件。您可以在此处查看整个配置。
5. 根据自己的喜好修改配置，然后运行 /odr 更新配置。
6. 如果出现 Bug，请在 GitHub 报告。
 
开箱即用，OtherDrops 不执行任何操作。要实现需求，请编辑文件 **plugins/OtherDrops/otherdrops-drops.yml**。插件也提供了示例文件，只需取消注释（删除```#```）即可启用。其他自定义配置可以写在全局文件的底部；当然，也可以添加自己的文件。Drop 参数是本页下方的详细信息。

```
include-files: 
##########
# 在加载主要配置后，插件将扫描并加载这些文件。
# 注意：来自包含文件的掉落将是包容性的，并且将全部添加到掉落列表中。
##########
#  - includes/od-fix_undroppables.yml    # 修复玻璃、书架、船和楼梯的掉落
#  - includes/od-goldtools-basic.yml     # 使用金制工具时有几率获得冰、萤石和草
#  - includes/od-goldtools-smelt.yml     # 金镐可以直接将矿石熔炼成锭，将沙子熔炼成玻璃等
#  - includes/od-ore_extrtrigger.yml     # "冶炼"矿石——留下石头
#  - includes/od-leaf_overhaul.yml       # 修复落叶掉落（苹果、可可豆、树叶、木棍和极小概率的金苹果）
#  - includes/od-playerdeath_zombie.yml  # 玩家死亡后会生成僵尸
#  - includes/od-undead_chaos.yml        # 亡灵生物将再次崛起！包括玩家死亡后生成的僵尸/骷髅
#  - includes/od-random_examples.yml     # 仅用于疯狂测试 :) 在激活之前请务必通读示例。
#  - includes/od-dyewool.yml             # 放置后给羊毛染色！
#  - includes/od-stop_mob_farms.yml      # 停止怪物繁殖！

## 其他用法修复
#  - includes/overhaul-catballs.yml     # 来自 Catballs 的很好的示例/可玩配置（在启用该功能前请先禁用"ob"配置，否则掉落物可能会过多）
#  - includes/overhaul-zarius.yml       # 来自 Zar 的杂项配置（我启用该项时没有包含其他配置）
    
## 在此处添加您的文件（也可以将您的自定义掉落添加到此文件的底部）
#  - my_custom_file1.yml
```

# 定制配置
让咱一步一个脚印地看看下面这个示例:

```yaml
otherdrops:
    SAND:
        - tool: GOLD_SPADE
          drop: GLASS
        - tool: DIAMOND_SPADE
          drop: GLOWSTONE
          chance: 50
    COAL_ORE:
        - tool: [GOLD_PICKAXE, DIAMOND_PICKAXE]
          drop: NETHERRACK
          quantity: 2-4
    LEAVES@BIRCH:
        - tool: ALL
          drop: APPLE
          chance: 5
    CREATURE_CREEPER:
        - tool: DIAMOND_SWORD
          drop: DIAMOND
          world: creeperworld
    SPECIAL_LEAFDECAY:
        - drop: APPLE
          chance: 10
```
- "**otherdrops:**" 开始主要的替换块。 注意：缩进**至少四个空格，_不要用 Tab 制表符_**
    - 第一处阐释了破坏 _沙子_ 时的情况：
        - 手持 _金铲_ 破坏时，掉落 _玻璃_
        - 手持 _钻石铲_ 破坏时，50% 的几率掉落 _萤石_，50% 的几率掉落沙子
        - 其他情况下掉落沙子。

    - 第二处阐释了列表语法，以及设置随机掉落数量的方法。手持 _钻石_ 或 _金镐_ 破坏 _煤矿_ 时，掉落 2-4 个 _下界岩_ 方块。

    - 第三处阐释了 "all" 关键字，以及指定原始方块数据类型的方法。白桦树叶有 5% 的几率会掉落苹果，无论手持何种工具。来自其他树的叶子不会改变它们的行为。

    - 第四处阐释了怪物掉落和多世界选项。在 "_creeperworld_" 世界中手持钻石剑杀死一只爬行者，它会掉落一颗钻石。

    - 最后一处阐释了特殊的"树叶腐烂"事件。树叶腐烂时，掉落苹果的概率为 10% —— 比人为破坏的概率要低。

# 所有配置参数
以下是参数的汇总列表：

条件：tool, toolexcept, quantity, chance, worlds, weather, biomes, time, height, permissions, permissiongroups, exclusive, attackrange, regions(工具、除工具外、数量、几率、世界、天气、生物群系、时间、高度、权限、权限组、排他性、攻击范围、区域)。

动作：drop, color, event, message, damagetool, damageattacker, delay, runcommands(掉落、颜色、事件、消息、破坏工具、伤害攻击者、延迟、运行命令)。


有关完整的使用详情，请参阅：配置参数（即将推出）

# ![核心功能](https://i.imgur.com/ACRducI.png)

* 掉落任何物品！*
* 使用触发器，例如方块破坏、战斗、钓鱼等
* 微调掉落的条件，例如工具、世界、地区、天气、权限等
* 添加动作，包括伤害、治疗、消息、药水效果等
* 语法简明，快速为服务器自定义掉落物和奖励
* 未来的支持
    * 尽可能使用官方 Bukkit 列表，以便 OtherDrops 支持所有当前和未来的物体：方块、物品、生物、附魔、药水效果、生物群系、生成原因、树木、村民职业、猫和骷髅类型
* 支持特殊物品数据：
    * 自定义物品名称与 Lore
    * 附魔武器和盔甲（也可添加随机附魔）
    * 附魔等级无上限（如锋利 30 的泥土）
    * 附魔书什么附魔都可以有
    * 成书（支持自定义标题/作者/页数）
    * 皮革盔甲颜色
    * 自定义烟花颜色
    * 头颅类型与自定义玩家头颅
* 支持特殊生物数据：
    * 任何生物的自定义名称、生命值（生命值）和装备
    * 动物幼崽（所有“可老化”的生物——鸡、牛、猪、僵尸等）
    * 驯服狼（包括项圈颜色）或猫（以及不同类型的猫）
    * 绵羊颜色（以及剪毛/未剪毛）
    * 有职业的村民、僵尸村民、闪电苦力怕和僵尸骑士的攻击等级
    * 凋灵骷髅、史莱姆和任何大小的熔岩史莱姆
* 经济支持（通过 Vault）
    * 支持所有主流的经济插件（参见 Vault 项目页面）
    * 玩家可以基于固定的金额或百分比，获得、损失及偷窃
    * 与 "MoneyDrop" 兼容，可以掉落实物货币物品。

# ![条件](https://i.imgur.com/N1uRWTz.png)
* 支持多世界——为每个世界创建单独的文件
* 添加几率值低至 0.000000001% 的超稀有掉落物
* 指定所需的工具（或工具列表，例如[任何剑，-钻石剑]）
* Lore 名称，英雄（职业和等级）条件
* 冷却时间

# ![行为](https://i.imgur.com/iNVU6TE.png)
* 在掉落的同时应用动作（甚至没有掉落也可以）
* 工具损坏、物品消耗（例如，使用染料给羊毛染色）
* 伤害或治愈受害者、玩家甚至整个世界
* 将药水效果应用于受害者、玩家、半径、世界或服务器
* 显示自定义消息（或随机选择一条消息的列表）
* 创建爆炸、闪电、视觉效果（包括粒子）、音效
* 运行命令

# ![想法](https://i.imgur.com/jrgCIDE.png)
* 使树叶在挖掘 和/或 腐烂时掉落苹果、树枝、可可豆、树苗等。
* 使玻璃、楼梯和船只可回收（可以指定所需工具）。
* 允许用金镐将金矿和铁矿直接开采为锭。
* 允许玩家手持藤蔓右键圆石，使圆石变成苔石。
* 禁用环境破坏导致的掉落，削弱怪物陷阱。
* 设置僵尸死后生成僵尸，释放尸潮！（可以指定世界）
* 让通常不生成的生物自然生成。
* 使怪物生成、掉落和事件特定于生物群系！

# ![联系](https://i.imgur.com/p3KBhhv.png)
如果您有问题，请创建工单 (于 [GitHub](https://github.com/CoolLord22/OtherDrops/issues/new/choose)) 并请涵盖报错（如果有的话）。
要获得支持、报告错误、获取更新信息、测试 Beta 更新等，请加入我们的[Discord](https://discord.gg/eHBxk5q).
***
_*来自 Bukkit - 如果不是，请通知我_