```
此页面最后更新于 LevelledMobs 3.9.0 b726
```

***

# 📃 示例自定义规则

以下是不同自定义规则的示例，你可以将其应用于自己的文件以实现不同的独特效果！这些只是框架，因此请随意根据你的喜好进行修改。只要你想，几乎任何事情都有可能！


***

> ### 自定义末影龙升级
> ```yaml
>   - enabled: false
>     name: 'CR - Ender Dragon Fight'
>     use-preset: average_challenge
>     conditions:
>       worlds:
>         allowed-list: ['world_the_end']
>       entities:
>         allowed-list: ['ENDER_DRAGON']
>     apply-settings:
>       minLevel: 25
>       multipliers:
>         custom-mob-level:
>           ENDER_DRAGON:
>             max-health: 3.0
>             attack-damage: 1.0
> ```
> 启用后，利用预设的`average_challenge`，将规则限制为`world_the_end`和`ENDER_DRAGON`本身。 这告诉末影龙使用 `minLevel: 25`，当使用 `average_challenge` 时，它也被认为是 `maxLevel:`。 然后，我们专门为`ENDER_DRAGON`应用自定义乘数，调整其`max-health:`和`attack-damage:`，同时仍然利用`average_challenge`预设中设置的默认乘数，以及所需的任何潜在的分层着色。

***

> ###  使用生命值显示的Boss-Bar名牌
> ```yml
>   - enabled: false
>     name: 'CR - Boss Bar'
>     use-preset: allowed_worlds, nametag_using_indicator
>     apply-settings:
>       health-indicator:
>         scale: 2
>         max: 10
>       nametag: '%health-indicator%'
> ```
> 启用后，这将修改实体的 `nametag:` 以仅显示 `health-indicator:` 样式。此自定义规则使用预设来指定 `allowed_worlds` 并从 `nametag_using_indicator` 中收集颜色和指示器的详细信息。此规则将与任何难度设置一并工作，但如果你在设置 `scale:` 时使用了 `average_challenge`。使用LM的默认难度设置时，建议将 `scale:` 设置为 `1` 以适应 `basic_challenge`，将 `scale:` 设置为 `4` 以适应 `advanced_challenge`。

***

> ### 夜晚难度增加
> ```yml
>   - enabled: false
>     name: 'CR - Difficulty Increase at Night'
>     use-preset: allowed_worlds, advanced_challenge
>     conditions:
>       apply-above-y: 62
>       world-time-tick: ['13000-24000']
>     apply-settings:
>       minLevel: 25
> ```
> > 启用后，这将增加夜间生成的实体的难度，从夜晚开始到黎明的时刻。这仅适用于 `y=62` 以上的实体，以便这些实体在日出时可能会死亡。这也将这些实体限制在 `25-50` 的水平之间，这基于 `advanced_challenge` 预设的默认设置。

***

> ### 在特定的生物群系中禁止升级
> ```yml
>   - enabled: false
>     name: 'CR - NoLevel Biomes'
>     conditions:
>       worlds:
>         allowed-list: ['world_nether']
>       biomes:
>         allowed-list: ['NETHER_WASTES']
>     apply-settings:
>       maxLevel: 0
> ```
> 启用后，此自定义规则将阻止位于 `world:` `world_nether` 和 `biome:` `NETHER_WASTES` 中的实体升级。这是一个简单且易于实施的规则！

***

> ### 基于等级的自定义实体名称
> ```yml
>   - enabled: false
>     name: 'CR - Level Dependent Zombie Custom Names'
>     use-presets: allowed_worlds
>     apply-settings:
>       entity-name-override:
>         1-5:
>           ZOMBIE: ['Teething %displayname%']
>         6-10:
>           ZOMBIE: ['Scratching %displayname%']
>         11-20:
>           ZOMBIE: ['Biting %displayname%']
>         21-25:
>           ZOMBIE: ['Hunting %displayname%']
>         BABY_ZOMBIE: ['Baby Undead']
> ```
> 启用后，此自定义规则将使用`entity-name-override:`的特殊功能，该功能允许你指定自定义名称将应用的级别范围。 此比例会假设你使用`average_challenge`预设，但所有内容都可以调整！ 你还可以添加条件，例如生物群系限制，这将允许你进一步自定义！

***

> ### 减弱刷怪笼实体
> ```yml
>   - enabled: false
>     name: 'CR - Nerfed Spawner Cubes'
>     priority: 1
>     use-preset: allowed_worlds
>     conditions:
>       allowed-spawn-reasons:
>         allowed-list: ['SPAWNER']
>     apply-settings:
>       entity-name-override:
>         all_entities: 'Spawned %displayname%'
>       multipliers:
>         max-health: 0.0 # For Farming
>         armor-bonus: 0.0
>         armor-toughness: 0.0
>         xp-drop: 0.0
> ```
> 启用后，此自定义规则将与服务器上的任何其他实体一样升级由刷怪箱生成的实体，只是它们的生命值不会改变（它们的伤害仍然会增加！）。这还会在它们的名称中添加`Spawned`前缀，使它们更容易找到。
***

> ### NBT-API | 进入爆炸倒计时的苦力怕！
> ```yml
>   - enabled: false
> #   此规则需要软依赖的 NBT-API 才能运行！
> #   确保在启用此规则之前已安装它！
>     name: 'CR - NBT - 20% Startled Creepers, Short Fuse'
>     use-preset: allowed_worlds
>     conditions:
>       chance: 0.2
>       entities:
>         allowed-list: ['CREEPER']
>     apply-settings:
>       nbt-data: '{Fuse:2,Attributes:[{Name:"generic.follow_range",Base:1f}]}'
>       entity-name-override:
>         CREEPER: ['Startled %displayname%']
> ```
> 此自定义规则需要软依赖 NBT-API 才能运行！
> 此自定义规则需要软依赖的 NBT-API 才能运行！
> 启用后，此规则将应用 `nbt-data:` 到 `CREEPER` 实体。这以 `chance: 0.2` 或 20% 运行。它还将苦力怕的名称更改为 `进入爆炸倒计时的苦力怕`，将它们与普通的 `CREEPER` 区分开来。
> 列出的 `nbt-data:` 将调整 `CREEPER` 的引线持续时间为半秒，并使它们在玩家距离它们约两个方块之外看不到玩家。这就是`进入爆炸倒计时的`苦力怕的概念！

***

> ### 使用自定义规则的掉落表
> ```yaml
>  - enabled: true
>    name: 'Drop Tables for LVL1-12'
>    conditions:
>      entities:
>        allowed-list: ['ZOMBIE', 'SKELETON', 'HUSK', 'DROWNED']
>      minLevel: 1
>      maxLevel: 12
>    apply-settings:
>      use-droptable-id: basic_weapons_table, basic_armor_table
>
>  - enabled: true
>    name: 'Drop Tables for LVL13-24'
>    conditions:
>      entities:
>        allowed-list: ['ZOMBIE', 'SKELETON', 'HUSK', 'DROWNED']
>      minLevel: 13
>      maxLevel: 24
>    apply-settings:
>      use-droptable-id: average_weapons_table, average_armor_table
>
>  - enabled: true
>    name: 'Drop Tables for LVL25'
>    conditions:
>      entities:
>        allowed-list: ['ZOMBIE', 'SKELETON', 'HUSK', 'DROWNED']
>      minLevel: 25
>    apply-settings:
>      use-droptable-id: extreme_weapons_table, extreme_armor_table
> ```
> 你可以使用 `use-droptable-id:` 系统作为 `apply-settings:` 配置选项，该选项允许你在 `customdrops.yml` 文件中构建战利品表，然后在规则系统中设置任意数量的 `conditions： ` ,以便于使用比自定义 Drops 系统单独提供的更独特的方式应用这些表。

***

> ### 使用占位符API（PAPI）和玩家等级修改器的自定义变量
> ```yaml
>  - enabled: true
>    name: 'Player Level Modifier using Statistic and Math Modules'
> #  此规则需要软依赖的 PlaceholderAPI 才能运行！
> #  确保在启用此规则之前已安装它！
>    strategies:
>      player-levelling:
>        match-level: true
>        use-player-max-level: false
>        decrease-level: true
>        player-level-scale: 1.0
>        level-cap: 25
>        tiers:
>          1-15: 1-10
>          16-30: 11-20
>          31-45: 21-25
>        variable: '%math_({statistic_damage_dealt}-({statistic_damage_taken}*5))/1000%'
> ```
> 这个系统允许你根据距离实体最近的玩家产生的某个变量来修改实体的等级。默认情况下，这是玩家的原始Minecraft等级，但在这个示例中，我们结合了两个PlaceholderAPI模块，以在玩家造成更多伤害时提高实体等级，并在玩家开始受到伤害时降低等级。要使用上面的 `variable:`，在下载并安装PlaceholderAPI后，你需要执行 `/papi ecloud download Math`、`/papi ecloud download Statistic`，然后 `/papi reload` 来访问这些模块。
> 
> 此版本的此变量说明它将取玩家对生物造成的伤害，减去玩家从任何来源接收的五倍伤害量，然后将总数除以1000。这会产生一个小数字，如果玩家造成伤害，它将逐渐增长，但如果玩家开始受到伤害，它将逐步减少。

***

> ### 平均挑战; 使用堆叠的增益
> ```yaml
>   - enabled: true
>     name: 'Average-Challenge Stacked Multipliers'
>     apply-settings:
>       minLevel: 1
>       maxLevel: 25
>       multipliers:
> #       use-stacked: true
>         max-health: ['4.25', 'STACKED']
>         movement-speed: ['0.002', 'STACKED']
>         attack-damage: ['0.25', 'STACKED']
>         ranged-attack-damage: ['0.25', 'STACKED']
>         creeper-blast-damage: ['0.03', 'STACKED']
>         item-drop: ['0.25', 'STACKED']
>         xp-drop: ['17.5', 'STACKED']
> ```
>  这是一个修改的增益系统，它会堆叠每个级别的增益，而不是使用默认的百分比公式。使用 `['X', 'STACKED']`，你可以为该特定增益设置堆叠值，同时让其他增益使用默认系统；或者你可以启用 `use-stacked:`，它将对其下的所有条目激活。

***

> ### 使用 %world_time_ticks% 的玩家等级修改器
> ```yaml
>  - enabled: true
>    name: 'Player Level Modifier with World Time Tick'
>    strategies:
>      player-levelling:
>        match-level: false
>        use-player-max-level: false
>        decrease-level: true
>        player-level-scale: 1.0
>        level-cap: 25
>        recheck-players: true
>        preserve-entity: 10s
>        tiers:
>          0-1000: 13-19  # 日出
>          1000-2000: 11-17
>          2000-3000: 9-15
>          3000-4000: 7-12
>          4000-5000: 5-9
>          5000-6000: 2-7
>          6000-7000: 1-5  # 中午
>          7000-8000: 2-7
>          8000-9000: 5-9
>          9000-10000: 7-12
>          10000-11000: 9-15
>          11000-12000: 11-17
>          12000-13000: 13-19  # 日落
>          13000-14000: 15-21
>          14000-15000: 17-23
>          15000-16000: 19-25
>          16000-17000: 21-25
>          17000-18000: 23-25
>          18000-19000: 25-25  # 午夜
>          19000-20000: 23-25
>          20000-21000: 21-25
>          21000-22000: 19-25
>          22000-23000: 17-23
>          23000-24000: 15-21
>        variable: '%world_time_ticks%'
> ```
> 此玩家等级修改器将使用内部占位符 `%world_time_ticks%` 作为 `variable:`，并将 `tiers:` 变为在以中午为中心的白天变得更容易，以午夜为中心的夜晚变得更加困难。这些级别基于 `average_challenge`。

***

> ### 创建以生成点为中心的等级'环'
> ```yaml
>  - enabled: true
>    name: 'Level 1-5 Ring'
>    conditions:
>      min-distance-from-spawn: 200
>      max-distance-from-spawn: 1000
>    strategies:
>      weighted-random: true
>    apply-settings:
>      maxLevel: 5
> 
>  - enabled: true
>    name: 'Level 5-10 Ring'
>    conditions:
>      min-distance-from-spawn: 1000
>      max-distance-from-spawn: 2000
>    strategies:
>      weighted-random: true
>    apply-settings:
>      minLevel: 5
>      maxLevel: 10
> ```
> 这对自定义规则演示了创建以生成点为中心的级别'环'的原理。 虽然这与 Spawn Levelling 类似，但此方法会创建具有不同区域的影响环，而不是逐渐进展。

> ### Custom Rules for a WorldGuard Region
>
> ```yaml
>  - enabled: true
>    name: 'WorldGuard Region Rule'
>    conditions:
>      allowed-worldguard-regions: ['name-of-region', 'other_region']
>    apply-settings:
>      minLevel: 1
>      maxLevel: 5
> ```
>
> This is an example of how to refer to a WorldGuard region if that region needs custom levelling rules. We can only check for a region name which WorldGuard understands the entity to be spawned in; meaning it respects the priority flags for regions set in WorldGuard.

***

> ### Custom Rules for Specified Coordinates
>
> ```yaml
>  - enabled: true
>    name: 'Within Coordinates (Sample of Single Point Coordinate [1D-Point])'
>    conditions:
>      within-coordinates:
>        start-x: 50
>        start-y: 64
>        start-z: 50
>    apply-settings:
>      minLevel: 1
>      maxLevel: 5
> 
>  - enabled: true
>    name: 'Within Coordinates (Sample of Straight Line Coordinate [2D-Line])'
>    conditions:
>      within-coordinates:
>        start-x: 50
>        end-x: 75
>        start-y: 64
>    apply-settings:
>      minLevel: 1
>      maxLevel: 5
> 
>  - enabled: true
>    name: 'Within Coordinates (Sample of Plane Coordinate [2D-Plane])'
>    conditions:
>      within-coordinates:
>        start-x: 50
>        end-x: 75
>        start-y: 64
>        start-z: 50
>        end-z: 75
>    apply-settings:
>      minLevel: 1
>      maxLevel: 5
> 
>  - enabled: true
>    name: 'Within Coordinates (Sample of Cuboid Coordinate [3D-Cube])'
>    conditions:
>      within-coordinates:
>        start-x: 50
>        end-x: 75
>        start-y: 64
>        end-y: 90
>        start-z: 50
>        end-z: 75
>    apply-settings:
>      minLevel: 1
>      maxLevel: 5
> ```
>
> These are several examples of how to use the `within-coordinates` conditions when isolating a specific set of coordinates or a region of coordinates for which a custom rule would be applied.

> In the first sample you can see an example of how to specify a specific point or coordinate by specifying the `start-` coordinate for each of the `start-x`, `start-y`, and `start-z` conditions. By not specifying the `end-` coordinate, that condition is automatically populated with the same value as it's corresponding `start-`. This means, in the example, the rule would only apply to the coordinate location (50, 64, 50). This might be useful for specifying a special command block or spawner cube that generates entities in an always specific location.

> In the second sample you can see an example of how to specify a straight line of coordinates. We specify the `start-x` and `end-x`, with the `start-y` specified. Using the same logic as mentioned above, we have the `start-y` set but not the `end-y`, so those values will be equal. Since we've specified a `start-x` and `end-x`, then that means any `X` coordinate value between those two set numbers would be valid. This means, in the example, the rule would only apply to entities spawned `y=64` and any `X` coordinate between `x=50` and `x=75`. This would create a line between `x=50` and `x=75` at the `y=64` height; removing the `start-y` would create the same effect at any height, thereby creating a 2D plane of coordinates at any height rather than a line.

> In the third sample you can see an example of how to specify a 2D plane of coordinates. We specify a `start-x`/`end-x` and `start-z`/`end-z`, with the `start-y` specified. With both the `X` and `Z` coordinate ranges specified, that means any coordinate between those `start-` and `end-` of each coordinate type will be valid. Since we specified a `Y` coordinate, that generates the 2D plane; removing the `start-y` would create the same effect at any height, thereby creating a 3D cuboid of coordinates at any height rather than a 2D plane.

> In the final sample you can see an example of how to specify a 3D cuboid of coordinates. We specify all three of the `start-` and `end-` coordinate types, meaning that any value between those `start-` and `end-` values would be valid. In the example that would generate a cube with one corner of (50, 64, 50) and the opposite corner being (75, 90, 75).

> For all of the `end-` options, you can specify the value of `+` or `-`. These values simply represent 'all numbers above' or 'all numbers below' the corresponding `start-` value. As well, you can specify negative numbers for all `start-` and `end-` values. Finally, a reminder that any value that has a `start-` specified but not the corresponding `end-` will have the `end-` populated with the same value as `start-`, creating a single-point coordinate. If neither corresponding `start-` or `end-` is specified (example being `start-y` and `end-y` together), then that coordinate type will not be checked against when considering the entities' location.