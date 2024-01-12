import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
// Docs 配置文件
export default {
  // Favicon
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  // 页面左上角标题栏
  title: 'TecoStudio Document',
  // 描述
  description: 'Document of TecoStudio',

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
        {
          text: 'LevelledMobs Docs',
          children: [
            // 主目录
            '/LevelledMobs/README.md',
            '/LevelledMobs/Compatibilities.md',
            '/LevelledMobs/Installation.md',
            '/LevelledMobs/Permissions.md',
            '/LevelledMobs/Frequently-Asked-Questions.md',
            // 子目录 配置
            {
              text: '📖 配置',
              // 是否折叠
              collapsible: true,
              children: [
                '/LevelledMobs/Configs/Settings.yml',
                '/LevelledMobs/Configs/Debug-Misc',
                '/LevelledMobs/Configs/Rules.yml',
                '/LevelledMobs/Configs/Conditions',
                '/LevelledMobs/Configs/Strategies',
                '/LevelledMobs/Configs/Apply-Settings',
                '/LevelledMobs/Configs/Understanding-the-Default-Config',
                '/LevelledMobs/Configs/Sample-Custom-Rules',
                '/LevelledMobs/Configs/CustomDrops',
                '/LevelledMobs/Configs/Sample-Custom-Drops',
                '/LevelledMobs/Configs/Messages.yml',
                '/LevelledMobs/Configs/Official-Translations',
                '/LevelledMobs/Configs/Unofficial-Translations',
              ]
            },
            '/LevelledMobs/How-to-Videos',
            '/LevelledMobs/Placeholders',
            // 子目录 对于开发人员
            {
              text: '👩‍💻 对于开发人员',
              collapsible: true,
              children: [
                '/LevelledMobs/Developers/Developing-with-LevelledMobs',
                '/LevelledMobs/Developers/Compiling-LevelledMobs',
                '/LevelledMobs/Developers/Pull-Requests',
                {
                  text: '📰 Java 文档',
                  link: 'https://arcaneplugins.github.io/LevelledMobs/',
                  children: [],
                }
              ]
            },
            // 子目录 其他信息
            {
              text: '📃 其他信息',
              collapsible: true,
              children: [
                '/LevelledMobs/Other/Credits',
                '/LevelledMobs/Other/Donations',
                '/LevelledMobs/Other/Links-to-default-config-files',
                '/LevelledMobs/Other/bStats-Metrics-Notice',
              ]
            }
          ],
        },
      ],
      
      // EssentialsX 侧栏配置
      '/EssentialsX/': [
        {
          text: 'EssentialsX Docs',
          children: [
            // 主目录
            '/EssentialsX/README.md',
            {
              text: '开始',
              collapsible: true,
              children: [
                '/EssentialsX/Start/Installation.md',
                '/EssentialsX/Start/Update-Migrate.md',
                '/EssentialsX/Start/Core-Error.md',
                '/EssentialsX/Start/Translation-Modify-Messages.md',
                '/EssentialsX/Start/Frequently-Asked-Questions.md'
              ]
            },
            {
              text: '配置',
              collapsible: true,
              children: [
                '/EssentialsX/Configs/Command-Cooling.md',
                '/EssentialsX/Configs/Colour-Permissions.md',
                '/EssentialsX/Configs/Custom-Lists.md', 
                '/EssentialsX/Configs/Discord-Installation.md'
              ]
            },
            {
              text: '使用',
              collapsible: true,
              children: [
                '/EssentialsX/Usages/Sign-Tutorial.md',
                '/EssentialsX/Usages/BannerMeta.md'
              ]
            },
            {
              text: '模块',
              collapsible: true,
              children: [
                '/EssentialsX/Components/AntiBuild.md',
                '/EssentialsX/Components/GeoIP.md',
                '/EssentialsX/Components/Protect.md',
                '/EssentialsX/Components/XMPP.md'
              ]
            },
            '/EssentialsX/Keywords.md',
            '/EssentialsX/Help.md',
          ]
        }
      ]
    },

    // 最后编辑日期
    lastUpdated: 'Last Updated',

    // GitHub 仓库
    repo: 'https://github.com/TecoStudio/document-website',
    // 以下为可选的编辑链接选项
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,

    // 页面滚动
    smoothScroll: true,

    // 是否显示 Contributer
    contributors: true,
  }),

  // 插件
  plugins: [
    // 搜索栏
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        }
      },
      // 搜索最大推荐
      maxSuggestions: 10,
      // 搜索排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
}