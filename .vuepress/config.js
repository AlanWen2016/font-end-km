module.exports = {
  title: '前端笔记',
  description: '知识大全',
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
          ['/guide/javascript/closure', '闭包']
          
        ] 
      },
      {
        title: 'HTML',
        collapsable: false,
        children: [
          '',
          '/guide/html/test'
        ]
      },
      {
        title: 'CSS',
        collapsable: false,
        children: [
          '/',
          '/guide/css/gradient'
        ]
      },
      {
        title: 'VUE',
        collapsable: false,
        children: [
          '/guide/vue/jsx',

        ]
      }
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