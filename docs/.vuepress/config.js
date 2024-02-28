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
      { text: '官网', link: 'https://www.tecostudio.cn'},
      {
        text: '插件文档',
        children: [
          {
            text: 'EssentialsX',
            link: '/EssentialsX/',
          },
          {
            text: 'LevelledMobs',
            link: '/LevelledMobs/',
          },
          {
            text: 'OtherDrops',
            link: '/OtherDrops/',
          },
        ],
      },
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
                '/EssentialsX/开始/安装-EssentialsX.md',
                '/EssentialsX/开始/模块故障.md',
                '/EssentialsX/开始/改进EssentialsX.md',
                '/EssentialsX/开始/翻译&消息自定义.md',
                '/EssentialsX/开始/常见问题.md'
              ]
            },
            {
              text: '配置',
              collapsible: true,
              children: [
                '/EssentialsX/配置/命令冷却.md',
                '/EssentialsX/配置/颜色权限.md',
                '/EssentialsX/配置/自定义&列表.md', 
                '/EssentialsX/配置/EssentialsX-Discord安装指南.md'
              ]
            },
            {
              text: '使用',
              collapsible: true,
              children: [
                '/EssentialsX/使用/告示教程.md',
                '/EssentialsX/使用/BannerMeta.md'
              ]
            },
            {
              text: '模块',
              collapsible: true,
              children: [
                '/EssentialsX/模块/AntiBuild-抗建造.md',
                '/EssentialsX/模块/GeoIP-地理位置.md',
                '/EssentialsX/模块/Protect-保护.md',
                '/EssentialsX/模块/XMPP.md'
              ]
            },
            '/EssentialsX/关键词.md',
            '/EssentialsX/帮助.md',
          ]
        }
      ],

      // OtherDrops 侧栏
      '/OtherDrops/': [
        {
          text: 'OtherDrops',
          children: [
            '/OtherDrops/README.md',
            '/OtherDrops/常见问题(faq).md',
            {
              text: '掉落示例和设置',
              collapsible: true,
              children: [
                '/OtherDrops/掉落示例和设置/基本示例.md',
                '/OtherDrops/掉落示例和设置/钱_经验示例.md',
                '/OtherDrops/掉落示例和设置/怪物_方块示例.md'
              ]
            },
            {
              text: '变量和操作',
              collapsible: true,
              children: [
                '/OtherDrops/变量和操作/消息变量.md',
                '/OtherDrops/变量和操作/命令操作.md'
              ]
            },
            {
              text: 'Misc页面',
              collapsible: true,
              children: [
                '/OtherDrops/Misc页面/留下你对OtherDrops的评价.md',
                '/OtherDrops/Misc页面/画廊.md',
                '/OtherDrops/Misc页面/默认配置.md'
              ]
            }
          ]
        }
      ]
    },

    // 最后编辑日期
    lastUpdated: 'Last Updated',

    // GitHub 仓库
    repo: 'https://github.com/TecoStudio/document-website',
    repoLabel: 'GitHub REPO',
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