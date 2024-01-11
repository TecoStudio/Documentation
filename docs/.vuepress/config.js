// Docs 配置文件
module.exports = {
  // 页面左上角标题栏
  title: 'TecoStudio Document',
  // 描述
  description: 'Document of TecoStudio',
  // 样式配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: 'EssentialX', link: '/EssentialX/' },
      { text: 'LevelledMobs', link: '/LevelledMobs/' },
    ],

    // 侧边栏
    // 显示所有页面
    displayAllHeaders: false,
    // 侧栏详细配置
    sidebar: {
      // LevelledMobs 侧边栏设置
      '/LevelledMobs/': [
        ['', 'LevelledMobs介绍'],
        ['Compatibilities', '🚥兼容性'],
        ['Installation', '🔌 安装'],
        ['Commands', '👉 命令'],
        ['Permissions', '👩‍⚖️ 权限'],
        ['Frequently-Asked-Questions.md', '🙋‍♂️ 常见问题解答'],
        {
          Text: '📖 配置',
          children: [
            '/Configs/Settings.yml',
          ]
        }
      ],

      '/': [
        '',
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
  },
}