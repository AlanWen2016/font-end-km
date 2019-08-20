module.exports = {
  title: '前端笔记',
  // base: '/bar/',
  description: '知识大全',
  themeConfig: {
    sidebar: [
      {
        title: 'JavaScript基础',
        collapsable: true,
        children: [
          '/guide/javascript/basic',
          '/guide/javascript/prototype',
          '/guide/javascript/closure',
          
        ]
      },
      {
        title: 'HTML',
        children: [
          '',
          '/guide/html/test'
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