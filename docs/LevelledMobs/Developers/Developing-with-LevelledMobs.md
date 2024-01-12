```
此页面最后更新于 3.1.0 b475
```

***

# 👨‍💻 用 LM 开发

# Maven 依赖
添加`jitpack`库
```xml
<repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
</repository>
```

添加LM依赖
```xml
<dependency>
    <groupId>com.github.lokka30</groupId>
    <artifactId>LevelledMobs</artifactId>
    <version>REPLACE ME</version>
</dependency>
```
替换`REPLACE ME`至LM版本号，不包含构建版本。例：`3.1.0`

# 直接于LM交互
我们提供了 [LevelInterface](https://github.com/lokka30/LevelledMobs/blob/master/src/main/java/me/lokka30/levelledmobs/LevelInterface.java) 类，使你可以直接于LM交互

# 事件（EVENT）
我们提供了一些可供监听和编辑的[事件](https://github.com/lokka30/LevelledMobs/tree/master/src/main/java/me/lokka30/levelledmobs/events)

你可以阻止实体获取等级或在他们获取等级之后进行某些操作等。

# Javadocs
你可以查看我们的[javadocs](https://lokka30.github.io/LevelledMobs/)

这是我们代码的docs，我们还在努力修改

# 自定义掉落

如果你希望在你的插件之中调用LM的自定义掉落，可以使用我们的API
以下是示例：

```java
    private void testCustomDrops(){
        ItemStack itemStack = new ItemStack(Material.NETHERITE_SWORD);
        ItemMeta meta = itemStack.getItemMeta();
        assert meta != null;
        meta.setDisplayName("Cool Netherite Sword");
        meta.setLore(List.of("Created via API"));
        itemStack.setItemMeta(meta);

        // https://arcaneplugins.github.io/LevelledMobs/3.9.3/me/lokka30/levelledmobs/LevelledMobs.html
        LevelledMobs lm = LevelledMobs.getInstance();

        // https://arcaneplugins.github.io/LevelledMobs/3.9.3/me/lokka30/levelledmobs/customdrops/CustomDropItem.html
        CustomDropItem customDropItem = new CustomDropItem(lm); // must pass instance to LevelledMobs main class
        customDropItem.setItemStack(itemStack);

        // these options correspond to many of the item specific options shown here:
        // https://github.com/ArcanePlugins/LevelledMobs/wiki/Documentation---customdrops.yml
        customDropItem.chance = 1.0F;
        customDropItem.equippedSpawnChance = 1.0F;

        // https://arcaneplugins.github.io/LevelledMobs/3.9.3/me/lokka30/levelledmobs/customdrops/CustomDropInstance.html
        final CustomDropInstance customDropInstance = new CustomDropInstance(EntityType.ZOMBIE);
        customDropInstance.customItems.add(customDropItem);
        // mob specific options can be set on customDropInstance

        lm.customDropsHandler.externalCustomDrops.addCustomDrop(customDropInstance);
        // the drop is now registered just as if it were in customdrops.yml

        main.getLogger().info("Added a new drop for zombie");
    }
```

***

如果你在你的插件之用调用LM出现任何问题，可以联系我们寻求帮助！:)