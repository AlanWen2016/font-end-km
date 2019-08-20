module.exports = {
  title: '前端笔记',
  description: '知识大全',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      {
        title: 'JavaScript基础',
        collapsable: false,
        children: [
          '/guide/javascript/basic',
          '/guide/javascript/prototype',
          '/guide/javascript/closure',
          
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