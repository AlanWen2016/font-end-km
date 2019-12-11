module.exports = {
  title: '印迹',
  description: '昨夜西风凋碧树',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 1, // 控制侧边栏显示,文档里的一二级标题都将在侧边栏显示
    sidebar: [
          {
        title: 'JavaScript基础',
        collapsable: false,
        children: [
          '/guide/javascript/basic',
          '/guide/javascript/prototype',
          ['/guide/javascript/closure', '闭包'],
          ['/guide/javascript/npm', 'npm发布'],
          ['/guide/javascript/module', '模块化'],
          ['/guide/javascript/jwt', 'JSON WEB令牌'],
          ['/guide/javascript/node', 'Node'],
          ['/guide/javascript/typescript', 'TypeScript'],
          ['/guide/javascript/arrayBuffer', '文件上传'],

        ]
      },
      {
        title: 'HTML',
        collapsable: false,
        children: [
         '/guide/html/canvas',
        ]
      },
      {
        title: 'CSS',
        collapsable: false,
        children: [
          [ '/guide/css/gradient', '渐变'],
          [ '/guide/css/flex', 'flex布局'],
          [ '/guide/css/animation', 'css动画'],
          [ '/guide/css/layout', 'css布局'],
        ]
      },
      {
        title: 'VUE',
        collapsable: false,
        children: [
          ['/guide/vue/jsx', 'render函数和jsx'],
          ['/guide/vue/vue', 'VUE杂谈'],
        ]
      },
      {
        title: 'Docker',
        collapsable: false,
        children: [
          ['/guide/docker/docker', 'Docker基础'],

        ]
      },
      {
        title: 'Jenkins',
        collapsable: false,
        children: [
        '/guide/jenkins/jenkins'
        ]
      },
      {
        title: 'Webpack',
        collapsable: false,
        children: [
        '/guide/webpack/webpack'
        ]
      },
    ],
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '大纲',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ],
  }
}
