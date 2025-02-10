import { defineConfig } from 'vitepress'
import {tabsMarkdownPlugin} from "vitepress-plugin-tabs";

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
          { text: 'LevelledMobs-v3', link: '/LevelledMobs-v3/'},
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

      '/LevelledMobs-v3/': [{
        text: 'LevelledMobs-v3 文档',
        items: [
          { text: '📜 欢迎来到生物等级 Wiki', link: '/LevelledMobs-v3/' },
          { text: '🚥 兼容性', link: '/LevelledMobs-v3/Compatibilities' },
          { text: '🔌 安装', link: '/LevelledMobs-v3/Installation' },
          { text: '👩‍⚖️ 权限', link: '/LevelledMobs-v3/Permissions' },
          { text: '🙋‍♂️ 常见问题解答', link: '/LevelledMobs-v3/Frequently-Asked-Questions' },
          {
            text: '📖 配置',
            collapsed: false,
            items: [
              { text: '🔧 设置 (settings.yml) ', link: '/LevelledMobs-v3/Configs/Settings.yml.md' },
              { text: '🔧 调试-杂项', link: '/LevelledMobs-v3/Configs/Debug-Misc' },
              { text: '📃 规则配置 (rules.yml)', link: '/LevelledMobs-v3/Configs/Rules.yml.md' },
              { text: '📃 条件', link: '/LevelledMobs-v3/Configs/Conditions' },
              { text: '📃 策略', link: '/LevelledMobs-v3/Configs/Strategies' },
              { text: '📃 应用设置', link: '/LevelledMobs-v3/Configs/Apply-Settings' },
              { text: '📃 了解默认的 `rules.yml` 配置文件', link: '/LevelledMobs-v3/Configs/Understanding-the-Default-Config' },
              { text: '📃 示例自定义规则', link: '/LevelledMobs-v3/Configs/Sample-Custom-Rules' },
              { text: '⚔ 自定义掉落 (customdrops.yml) 设置', link: '/LevelledMobs-v3/Configs/CustomDrops' },
              { text: '⚔ 示例自定义掉落物', link: '/LevelledMobs-v3/Configs/Sample-Custom-Drops' },
              { text: '💬 信息 (messages.yml)', link: '/LevelledMobs-v3/Configs/Messages.yml.md' },
              { text: '🎌 官方配置翻译', link: '/LevelledMobs-v3/Configs/Official-Translations' },
              { text: '🎌 非官方配置翻译', link: '/LevelledMobs-v3/Configs/Unofficial-Translations' },
            ]
          },
          { text: '👀 教程视频', link: '/LevelledMobs-v3/How-to-Videos' },
          { text: '🔖 占位符', link: '/LevelledMobs-v3/Placeholders' },
          {
            text: '👩‍💻 对于开发人员',
            collapsed: false,
            items: [
              { text: '👨‍💻 用 LM 开发', link: '/LevelledMobs-v3/Developers/Developing-with-LevelledMobs-v3' },
              { text: '👩‍🏭 用 LM 编译', link: '/LevelledMobs-v3/Developers/Compiling-LevelledMobs-v3' },
              { text: '🔀 拉取请求', link: '/LevelledMobs-v3/Developers/Pull-Requests' },
              { text: '📰 Java 文档', link: 'https://arcaneplugins.github.io/LevelledMobs/' },
            ]
          },
          {
            text: '📃 其他信息',
            collapsed: false,
            items: [
              { text: '💙 来源', link: '/LevelledMobs-v3/Other/Credits' },
              { text: '💸 捐助', link: '/LevelledMobs-v3/Other/Donations' },
              { text: '🔗 默认配置文件', link: '/LevelledMobs-v3/Other/Links-to-default-config-files' },
              { text: '📊 bStats 指标', link: '/LevelledMobs-v3/Other/bStats-Metrics-Notice' },
            ]
          }
        ],
      }],

      '/OtherDrops/': [{
        text: 'OtherDrops 文档',
        items: [
          { text: '欢迎来到 OtherDrops 中文Wiki!', link: '/OtherDrops/'},
          { text: '常见问题', link: '/OtherDrops/常见问题(FAQ)'},
          { 
            text: '掉落示例和设置', 
            collapsed: false,
            items: [
              { text: '基本示例', link: '/OtherDrops/掉落示例和设置/基本示例'},
              { text: '钱和经验示例', link: '/OtherDrops/掉落示例和设置/钱_经验示例' },
              { text: '怪物和方块示例', link: '/OtherDrops/掉落示例和设置/怪物_方块示例' },
            ]
          },
          { 
            text: '变量和操作',
            collapsed: false,
            items: [
              { text: '消息变量', link: '/OtherDrops/变量和操作/消息变量' },
              { text: '命令操作', link: '/OtherDrops/变量和操作/命令操作' },
            ]
          },
          {
            text: 'Misc页面',
            collapsed: false,
            items: [
              { text: '留下你对OtherDrops的评价', link: '/OtherDrops/Misc页面/留下你对OtherDrops的评价' },
              { text: '画廊', link: '/OtherDrops/Misc页面/画廊' },
              { text: '默认配置', link: '/OtherDrops/Misc页面/默认配置' },
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
      pattern: 'https://github.com/TecoStudio/Documentation/edit/tree/vitepress/:path',
      text: '在 GitHub 编辑此页面'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: { 
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TecoStudio/Documentation/' },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
        label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
