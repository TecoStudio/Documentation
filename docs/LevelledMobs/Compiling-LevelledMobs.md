```
此页面最后更新于 3.8.2
```

***

我们使用的是Maven。

从3.6.0版本开始，我们使用了NMS。 这也意味着，你需要通过源码来自己构建spigot的映射版本
编写的版本是1.19的
<br>

## 跟随以下步骤，构建SPIGOT不同版本的映射！
1. 从 https://hub.spigotmc.org/jenkins/job/BuildTools/ 下载buildtool.jar
2. 修改版本参数，并使用此命令构建你想要的映射版本：`java -jar BuildTools.jar --rev 1.19.2 --remapped`


## 构建 LM
1. 使用此命令 `mvn clean package`之后，你就可以开始构建LM了！！

构建完成的`.jar`文件会在你的项目文件中`target`子文件夹之中保存。

```
你的项目文件夹/
	|- target/ <- 构建之后的文件，会在这里面！！！！
	|- src/
	|- pom.xml
	....
	....
```

