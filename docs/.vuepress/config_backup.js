import { defaultTheme } from 'vuepress'
// Docs 配置文件
export default {

  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: 'LevelledMobs', link: '/LevelledMobs/' },
      { text: 'EssentialsX', link: '/EssentialsX/' },
    ],

    // 侧边栏
    // 显示所有页面
    displayAllHeaders: false,
    // 侧栏详细配置
    sidebar: {
      // LevelledMobs 侧边栏设置
      '/LevelledMobs/': [
        '',
        ['Compatibilities', '🚥兼容性'],
        ['Installation', '🔌 安装'],
        ['Commands', '👉 命令'],
        ['Permissions', '👩‍⚖️ 权限'],
        ['Frequently-Asked-Questions.md', '🙋‍♂️ 常见问题解答'],
        // 配置
        {
          text: '📖 配置',
          children: [
            ['/LevelledMobs/Configs/Settings.yml', '🔧 设置 (settings.yml)'],
            ['/LevelledMobs/Configs/Debug-Misc', '🔧 调试'],
            ['/LevelledMobs/Configs/Rules.yml', '📃 规则 (rules.yml)'],
            ['/LevelledMobs/Configs/Conditions', '📃 条件'],
            ['/LevelledMobs/Configs/Strategies', '📃 策略'],
            ['/LevelledMobs/Configs/Apply-Settings', '📃 应用设置'],
            ['/LevelledMobs/Configs/Understanding-the-Default-Config', '📃 了解默认规则'],
            ['/LevelledMobs/Configs/Sample-Custom-Rules', '📃 示例自定义规则'],
            ['/LevelledMobs/Configs/CustomDrops', '⚔ 自定义掉落 (customdrops.yml)'],
            ['/LevelledMobs/Configs/Sample-Custom-Drops', '⚔ 示例自定义掉落'],
            ['/LevelledMobs/Configs/Messages.yml', '💬 信息 (messages.yml)'],
            ['/LevelledMobs/Configs/Official-Translations', '🎌 官方配置翻译'],
            ['/LevelledMobs/Configs/Unofficial-Translations', '🎌 非官方配置翻译'],
          ]
        },
        ['How-to-Videos', '👀 教程视频'],
        ['Placeholders', '🔖 占位符'],
        // 对于开发人员
        {
          text: '👩‍💻 对于开发人员',
          children: [
            ['/LevelledMobs/Developers/Developing-with-LevelledMobs', '👨‍💻 用 LM 开发'],
            ['/LevelledMobs/Developers/Compiling-LevelledMobs', '👩‍🏭 用 LM 编译'],
            ['/LevelledMobs/Developers/Pull-Requests', '🔀 拉取请求']
          ]
        },
        ['https://arcaneplugins.github.io/LevelledMobs/', '📰 Java 文档'],
        {
          text: '📃 其他信息',
          children: [
            ['/LevelledMobs/Other/Credits', '💙 来源'],
            ['/LevelledMobs/Other/Donations', '💸 捐助'],
            ['/LevelledMobs/Other/Links-to-default-config-files', '🔗 链接到默认配置文件'],
            ['/LevelledMobs/Other/bStats-Metrics-Notice', '📊 bStats 指标']
          ]
        }
      ],

      // EssentialX的侧栏
      '/EssentialsX/': [
        ['', 'EssentialsX介绍'],
        {
          text: "开始",
          children: [
            ['/EssentialsX/Start/Installation', '安装'],
            ['/EssentialsX/Start/Core-Error', '模块故障'],
            ['/EssentialsX/Start/Update-Migrate', '改进 EssentialsX'],
            ['/EssentialsX/Start/Translation-Modify-Messages', '翻译 & 消息自定义'],
            ['/EssentialsX/Start/Frequently-Asked-Questions', '常见问题']
          ]
        },
        {
          text: '配置',
          children: [
            ['/EssentialsX/Configs/Command-Cooling', '命令冷却'],
            ['/EssentialsX/Configs/Colour-Permissions', '颜色权限'],
            ['/EssentialsX/Configs/Custom-Lists', '自定义&列表'],
            ['/EssentialsX/Configs/Discord-Installation', 'EssentialsX Discord 安装指南'],
          ]
        },
        {
          text: '使用',
          children: [
            ['/EssentialsX/Usages/Sign-Tutorial', '告示教程'],
            ['/EssentialsX/Usages/BannerMeta', 'BannerMeta']
          ]
        },
        {
          text: '模块',
          children: [
            ['/EssentialsX/Components/AntiBuild', '抗建造'],
            ['/EssentialsX/Components/GeoIP', '地理位置'],
            ['/EssentialsX/Components/Protect', '保护'],
            ['/EssentialsX/Components/XMPP', 'XMPP'],
          ]
        },
        ['Keywords', '关键词'],
        ['Help', '帮助']
      ],

      // Fall Back
      '/': [
        ''
      ]
    },

    // 搜索栏
    search: true,
    // 搜索栏最大推荐数量
    searchMaxSuggestions: 10,

    // 最后编辑日期
    lastUpdated: 'Last Updated',

    // GitHub 仓库
    repo: 'https://github.com/TecoStudio/document-website',
    // 以下为可选的编辑链接选项
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,

    // 页面滚动
    smoothScroll: true
  }),
  // Favicon
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  // 页面左上角标题栏
  title: 'TecoStudio Document',
  // 描述
  description: 'Document of TecoStudio',
}