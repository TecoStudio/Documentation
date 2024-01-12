```
本页最后更新于 LevelledMobs 3.10.1 b759
```

***

# 📃 策略

> ## 生成点距离等级化和混合等级化
> 该策略描述了'生成点距离'和'混合'等级化。
>
> ```yml
> strategies:
>   distance-from-spawn:
>     increase-level-distance: 150
>     start-distance: 250
>     spawn-location:
>       x: default
>       z: default
>     blended-levelling:
>       enabled: false
>       transition-y-height: 62
>       lvl-multiplier: 0.05
>       multiplier-period: 10
>       scale-downward: true
> ```
> ### 下面是计算混合等级化值时使用的公式。<br /> 'postResult' 是应用于实体的最终结果。<br />
> preResult = (((( transition-y-height: - entityYCoordinate ) / multiplier-period: ) x lvl-multipler: ) x distanceFromSpawnLevel )<br />
> postResult = ( round( preResult ) + distanceFromSpawnLevel )

|配置行选项|描述|
|:-:|:---|
|`distance-from-spawn:`|启用等级化系统。|
|`increase-level-distance:`|代表下一级增加发生之前的方块数。|
|`start-distance:`|这表示在`increase-level-distance：`开始计数之前从生成的方块数。|
|`spawn-location:`  `x:`  `z:`|这允许你调整 LM 用于此功能的“生成”位置。<br />通过将其保留为'default'，它将使用你的世界设置的生成坐标。 你可以通过调整 X 和 Z 坐标来更改此设置。|
|`blended-levelling:`  `enabled:`|这个系统表示了**混合等级化**插件与**生成点距离**等级化之间的关联。这不是独立的等级化系统，而是附加到生成点距离系统的功能。启用此功能时，它将继续使用你的生成点距离等级化系统，适用于在`transition-y-height:`产生的任何实体。<br />根据默认设置，任何在较高的Y坐标处生成的实体会将其等级减少，而那些在地下更远的地方生成的等级会根据当前的生成距离等级而增加。|
|`transition-y-height:`|表示生成点距离等级化会准确应用的Y坐标，也是级别增加或减少趋势的过渡线。|
|`lvl-multiplier:`|表示应用于预期生成点距离级别的乘数，每隔`multiplier-period:`以指数方式在`transition-y-height:`两侧应用。如果`multiplier-period:`很低，或者`lvl-multiplier:`很高，那么随着远离生成点，乘数将继续进行乘法运算，实体的等级将以更快的速度增加或减少。|
|`multiplier-period:`|表示距离`transition-y-height:`多少方块才应用一个`lvl-multiplier:`。|
|`scale-downward:`|此设置将确定从`transition-y-height:`方向上增加等级。当设置为`true`时，任何在此过渡线以下生成的实体都将应用正等级乘数，而在过渡线以上生成的实体将应用负乘数。如果设置为false，则情况相反。|

***

> ## Y坐标等级化
> 此策略启用了'Y坐标'等级化。

> ```yml
> strategies:
>   y-coordinate:
>     start: 100
>     end: 20
>     period: 0
> ```

|配置行选项|描述
|:-:|:---
|`y-coordinate:`|这将启用等级化系统。
|`start:`|这表示起始Y坐标，实体的最低等级在此处。
|`end:`|这表示结束的Y坐标，实体的最高等级在此处。
|`period:`|除了`0`之外的任何值都将覆盖 'end:' 配置选项。相反，它将从 'start:' Y坐标开始，每次增加 'period:' 个方块的数量，朝着虚空方向的每个 'period:' 方块逐渐增加实体的等级。

***

> ## 加权随机等级化
> 此策略启用了'加权随机'等级化。
> 
> ```yml
> strategies:
>   weighted-random: true
> # OR
>   weighted-random:
>     1-2: 5
>     3-4: 4
>     5-6: 3
>     7-8: 2
>     9-10: 1
>     lvl-lvl: chance
> ```
> **示例：** 你可以简单地设置 `weighted-random: true`，它将使用 `minLevel:` 和 `maxLevel:` 生成加权随机，其中最低级别最有可能出现，而最高级别最不可能出现。
>
> **示例：** 上面的加权随机将生成一个数字列表，使用右侧列出的'weight'值来增加或减少随机选择级别的机会。<br />1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 10

|配置行选项|描述
|:-:|:---
|`weighted-random:`|这将启用等级化系统。 如果使用 `weighted-random: true`，请不要设置任何自定义等级。
|`lvl-lvl`|这些代表将应用其自身权重的级别范围。
|`chance`|这些代表使用前面级别范围应用级别的机会。 数字越小，与其他级别相比，越不可能出现。

> ## 真随机等级化 / 低级别偏差因子
> 此策略启用了'真随机'等级化。
> 
> ```yml
> strategies:
>   random: true
>   lower-mob-level-bias-factor: 5
> ```

|配置行选项|描述
|:-:|:---
|`random:`|这将启用等级化系统。
|`lower-mob-level-bias-factor:`|这些将应用类似于加权随机等级化策略的效果，但控制较少。 这里唯一适用的值是`0-9`。

***

# 策略修改：

> ## 玩家变量修改器
> 此等级修改器具有位于 `settings.yml` 文件中的特殊设置。
[在此处查看详细信息](https://github.com/lokka30/LevelledMobs/wiki/Documentation---settings.yml#player-levelling-strategy-settings)!<br />默认情况下，实体将根据250光线追踪距离内的最近玩家每五秒更新一次。
> 
> 此策略启用了'玩家变量等级修改'。
> 
> ```yml
> strategies:
>   player-levelling:
>     match-level: false
>     use-player-max-level: false
>     player-level-scale: 1.0
>     level-cap: 30
>     decrease-level: true
>     recheck-players: false
>     preserve-entity: 10s
>     enabled: true
>     merge: false
>     tiers:
>       1-15: 1-10
>       16-30: 11-20
>       31-45: 21-25
>       v1-v2: lvl-lvl
>     variable: '%level%'
> ```

|配置行选项|描述|
|:-:|:---|
|`player-levelling:`|启用了玩家变量等级修改功能。启用后，将根据最近玩家的指定变量更改实体等级。|
|`match-level:`|这会导致实体使用在 1 到当前玩家`variable:`值之间随机选择的值。<br />**示例：** 使用 `%level%`，如果我是 LVL 30，那么所有根据我的等级调整其等级的实体将在`1-30`之间随机选择一个值。<br>注意：当设置为 true 时，不使用层级。|
|`use-player-max-level:`|这会导致实体与当前玩家的`variable:`值匹配。<br />**示例：** 使用 `%level%`，如果我是 LVL 30，那么所有根据我的等级调整其等级的实体将为`30`。<br>注意：当设置为 true 时，不使用层级。|
|`player-level-scale:`|这将调整`variable:`产生的值，将该值乘以此值。这对于产生异常大的数字（可以使用较小的值缩小）或非常小的数字（可以缩小）非常有用。|
|`level-cap:`|这会对使用此`Player Variable Level Modifier`的实体的最高级别设置硬限制。这对于防止超出批准范围的实体很有用。|
|`decrease-level:`|当设置为 `false` 时，此设置将阻止实体获得低于之前由玩家等级设定的任何等级。实体将继续有可能重新设置等级，但是如果新生成的等级低于当前等级，则更改将被取消。|
|`recheck-players:`|当设置为 `true` 时，此设置将重新检查最后一个更新实体的玩家，而不像通常那样跳过该玩家。|
|`preserve-entity:`|此设置将阻止实体在过去的 X 时间内受到伤害后通过玩家等级设定进行更新，默认为 `10s`。|
|`enabled:`|你可以使用此选项启用或禁用玩家等级设定。默认为 true。|
|`merge:`|如果你使用玩家等级设定定义了多个规则，则仅使用最后一个规则。如果将 merge 设置为 true，则将合并层级，并且某些选项可以合并在一起。|
|`tiers:`|这代表了系统如何将等级应用于实体的逻辑。在配置中，左侧的值，如 `v1` 和 `v2`，表示在`variable:`配置中列出的任何值的最小和最大范围。<br />**示例：** 使用 `%level%`，如果玩家是 LVL 10，那么它将适合于第一个变量范围`1-15`，这意味着它将在右侧的值之间应用一个随机等级，标记为 `lvl-lvl`。|
|`variable:`|这可以是 LevelledMob 的内置变量之一，也可以是任何动态的 [**PAPI (PlaceholderAPI)**](https://www.spigotmc.org/resources/placeholderapi.6245/) 标签，再加上一些内置的标签，这将是在构建实体等级时使用的变量。这个系统没有限制，只要`variable:`的最终结果是数字即可。<br />通过 **PAPI**，你甚至可以使用专门的 **MATH** 功能进一步扩展这个系统。只需在控制台或游戏内执行 `/papi ecloud download Math`，它将下载 **PAPI** 的必要插件。要了解如何使用此独特的系统，[请点击这里查看开发者关于此插件以及如何使用它的 Github 页面](https://github.com/Andre601/Math-Expansion)。<br>LevelledMobs 提供的内置变量： %level%，%exp%，%exp-to-level%，%total-exp%，%world_time_ticks%，%bed_distance%，%home_distance%，%home_distance_with_bed%|

***

> ## 等级方差修改器
> 
> ```yml
> strategies:
>   max-random-variance: 2
> ```

一旦实体从其他 `strategies:` 中获得最终等级值，此 `等级方差修改器` 将根据上面列出的配置选项的值对等级应用随机加减值。