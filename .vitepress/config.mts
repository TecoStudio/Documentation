import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Teco文档",
  description: "TecoStudio Documentation",
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://www.tecostudio.cn' },
      { text: '成员列表', link: '/members'},
      { 
        text: '插件文档',
        items: [
          { text: 'EssentialsX', link: '/EssentialsX/'},
          { text: 'LevelledMobs', link: '/LevelledMobs/'},
          { text: 'OtherDrops', link: '/OtherDrops/'},
        ],
      },
    ],

    sidebar: {
      '/EssentialsX/': [{
          text: 'EssentialsX 文档',
          items: [
            { text: 'EssentialsX 介绍', link: '/EssentialsX/' },
            {
              text: '开始',
              collapsed: false,
              items: [
                { text: '安装 EssentialsX', link: '/EssentialsX/开始/安装EssentialsX' },
                { text: '模块故障', link: '/EssentialsX/开始/模块故障' },
                { text: '改进 EssentialX', link: '/EssentialsX/开始/改进EssentialsX' },
                { text: '翻译&消息自定义', link: '/EssentialsX/开始/翻译&消息自定义' },
                { text: '常见问题', link: '/EssentialsX/开始/常见问题' },
              ],
            },
            {
              text: '配置',
              collapsed: false,
              items: [
                { text: '命令冷却', link: '/EssentialsX/配置/命令冷却' },
                { text: '颜色权限', link: '/EssentialsX/配置/颜色权限' },
                { text: '自定义&列表', link: '/EssentialsX/配置/自定义&列表' },
                { text: 'EssentialsX Discord 安装指南', link: '/EssentialsX/配置/EssentialsX-Discord安装指南' },
              ]
            },
            {
              text: '使用',
              collapsed: false,
              items: [
                { text: '告示教程', link: '/EssentialsX/使用/告示教程' },
                { text: 'BannerMeta', link: 'EssentialsX/使用/BannerMeta' },
              ],
            },
            {
              text: '模块',
              collapsed: false,
              items: [
                { text: 'AntiBuild - 抗建造', link: '/EssentialsX/模块/AntiBuild-抗建造' },
                { text: 'EssentialsX GeoIP - 地理位置', link: '/EssentialsX/模块/GeoIP-地理位置' },
                { text: 'EssentialsX Protect - 保护', link: '/EssentialsX/模块/Protect-保护' },
                { text: 'XMPP', link: '/EssentialsX/模块/XMPP' },
              ]
            },
            { text: '关键词', link: '/EssentialsX/关键词' },
            { text: '帮助', link: '/EssentialsX/帮助' },
          ]
      }],

      '/LevelledMobs/': [{
        text: 'LevelledMobs 文档',
        items: [
          { text: '📜 欢迎来到生物等级 Wiki', link: '/LevelledMobs/' },
          { text: '🚥 兼容性', link: '/LevelledMobs/Compatibilities' },
          { text: '🔌 安装', link: '/LevelledMobs/Installation' },
          { text: '👩‍⚖️ 权限', link: '/LevelledMobs/Permissions' },
          { text: '🙋‍♂️ 常见问题解答', link: '/LevelledMobs/Frequently-Asked-Questions' },
          {
            text: '📖 配置',
            collapsed: false,
            items: [
              { text: '🔧 设置 (settings.yml) ', link: '/LevelledMobs/Configs/Settings.yml' },
              { text: '🔧 调试-杂项', link: '/LevelledMobs/Configs/Debug-Misc' },
              { text: '📃 规则配置 (rules.yml)', link: '/LevelledMobs/Configs/Rules.yml' },
              { text: '📃 条件', link: '/LevelledMobs/Configs/Conditions' },
              { text: '📃 策略', link: '/LevelledMobs/Configs/Strategies' },
              { text: '📃 应用设置', link: '/LevelledMobs/Configs/Apply-Settings' },
              { text: '📃 了解默认的 `rules.yml` 配置文件', link: '/LevelledMobs/Configs/Understanding-the-Default-Config' },
              { text: '📃 示例自定义规则', link: '/LevelledMobs/Configs/Sample-Custom-Rules' },
              { text: '⚔ 自定义掉落 (customdrops.yml) 设置', link: '/LevelledMobs/Configs/CustomDrops' },
              { text: '⚔ 示例自定义掉落物', link: '/LevelledMobs/Configs/Sample-Custom-Drops' },
              { text: '💬 信息 (messages.yml)', link: '/LevelledMobs/Configs/Messages.yml' },
              { text: '🎌 官方配置翻译', link: '/LevelledMobs/Configs/Official-Translations' },
              { text: '🎌 非官方配置翻译', link: '/LevelledMobs/Configs/Unofficial-Translations' },
            ]
          },
          { text: '👀 教程视频', link: '/LevelledMobs/How-to-Videos' },
          { text: '🔖 占位符', link: '/LevelledMobs/Placeholders' },
          {
            text: '👩‍💻 对于开发人员',
            collapsed: false,
            items: [
              { text: '👨‍💻 用 LM 开发', link: '/LevelledMobs/Developers/Developing-with-LevelledMobs' },
              { text: '👩‍🏭 用 LM 编译', link: '/LevelledMobs/Developers/Compiling-LevelledMobs' },
              { text: '🔀 拉取请求', link: '/LevelledMobs/Developers/Pull-Requests' },
              { text: '📰 Java 文档', link: 'https://arcaneplugins.github.io/LevelledMobs/' },
            ]
          },
          {
            text: '📃 其他信息',
            collapsed: false,
            items: [
              { text: '💙 来源', link: '/LevelledMobs/Other/Credits' },
              { text: '💸 捐助', link: '/LevelledMobs/Other/Donations' },
              { text: '🔗 默认配置文件', link: '/LevelledMobs/Other/Links-to-default-config-files' },
              { text: '📊 bStats 指标', link: '/LevelledMobs/Other/bStats-Metrics-Notice' },
            ]
          }
        ],
      }],
    },

    footer: {
      message: 'Published under GNU GPL v3 Licensed',
      copyright: 'Copyright © 2020-present TecoStudio'
    },

    editLink: {
      pattern: 'https://github.com/TecoStudio/Documentation/edit/tree/vitepress/:path'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TecoStudio/Documentation/' },
    ],
  }
})