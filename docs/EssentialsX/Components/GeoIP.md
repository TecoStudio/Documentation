# EssentialsX GeoIP - 地理位置

EssentialsX GeoIP 将地理 IP 查找功能集成到 EssentialsX 中，使您能够大致确定您的玩家来自何处。

<b-message>

本产品包括由 MaxMind 创建的 GeoLite2 数据，可从 [https://www.maxmind.com](https://www.maxmind.com) 获得。

</b-message>

<b-message type="is-info">

**注意：**截至 2019 年 12 月 30 日，MaxMind 现在要求用户注册并创建密钥才能访问 EssentialsX 使用的 GeoLite2 数据库。
您可以在 [MaxMind 博客](https://blog.maxmind.com/2019/12/18/significant-changes-to-accessing-and-using-geolite2-databases/) 上详细了解这些变化背后的原因 .

这会影响 EssentialsX 的*所有*版本，而不仅仅是新版本。 要恢复您的设置，您需要更新模块并按照以下步骤操作，即使您在此日期之前使用的是 GeoIP。

</b-message>

## 设置插件

首先，您需要注册访问 GeoLite2 数据库，EssentialsX 会下载并使用该数据库执行 IP 查找。

前往 [MaxMind 网站](https://www.maxmind.com/en/geolite2/signup) 并填写您的详细信息以注册访问 GeoLite2 数据库：

![填写注册表单的示例。 请注意，是否提供您的电话号码是可选的。](/images/geoip-step1.png)

您需要同意 [GeoLite2 EULA](#legal-notices) 才能使用数据库。

点击**继续**，然后在收到来自 MaxMind 的电子邮件后，使用电子邮件中的链接设置密码，然后登录您的 MaxMind 帐户。

登录后，向下滚动并单击左侧的 **我的许可证密钥 **：

!["我的许可证密钥"位于左侧边栏的"安全性"下。](/images/geoip-step2.png)

接下来，单击 **生成新的许可证密钥**：

!["生成新许可证密钥"按钮位于空表下方。](/images/geoip-step3.png)

在描述中输入类似 `EssentialsX key` 的名称，然后在下面的框中单击**否**，然后单击**确认**：

![描述应该填写一些东西来识别密钥，你应该检查 GeoIP 更新文本旁边的"否"。](/images/geoip-step4.png)

您现在应该收到一个**许可证密钥**。 将其复制到安全的地方，因为以后您将无法再次看到原始密钥。

![复制许可证密钥并将其保存在安全的地方。](./images/geoip-step5.png)

接下来，您需要下载并安装 EssentialsXGeoIP jar - 您可以在 [[Installing-EssentialsX|here]] 中查看如何执行此操作。
启动和停止服务器，然后在文本编辑器中打开 plugins/EssentialsGeoIP/config.yml。
将之前的许可证密钥复制到 `license-key` 设置中，保存文件，然后重新启动服务器。

启动服务器后，该插件将使用您的许可证密钥下载数据库，并将每 30 天更新一次。

## 使用插件

EssentialsX GeoIP 提供权限"essentials.geoip.show"。 有了这个权限，工作人员将能够：
- 登录时查看玩家的大概位置
- 运行 `/whois <player>` 时查看玩家的大概位置

授予玩家"essentials.geoip.hide"权限将阻止他们的位置在这两种情况中的任何一种情况下显示。

## 法律注意事项

<b-message type="is-error">

要使用 EssentialsX GeoIP，您需要同意 [MaxMind GeoLite2 EULA](https://www.maxmind.com/en/geolite2/eula)。 因此：
- **您不得尝试使用 EssentialsX GeoIP 来确定玩家的确切位置。**使用 GeoLite2 进行的 IP 查找是近似的，它们不会为您提供玩家的精确位置。
- **您必须允许 EssentialsX GeoIP 每 30 天更新一次数据库。**您应该避免使用一次性令牌下载数据库或保留旧版本的数据库。

不遵守这些可能会违反 MaxMind 最终用户许可协议，也可能会违反州、联邦或国际隐私法。 **如果您未能遵守这些准则，EssentialsX 概不负责。**

</b-message>
