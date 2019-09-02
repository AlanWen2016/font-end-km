module.exports = {
  title: '搬砖日记',
  description: 'Web开发者的自我修养',
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
          '/guide/html/test'
        ]
      },
      {
        title: 'CSS',
        collapsable: false,
        children: [
          [ '/guide/css/gradient', '渐变'],
          [ '/guide/css/flex', 'flex布局'],
          [ '/guide/css/animation', 'css动画'],
         
        ]
      },
      {
        title: 'VUE',
        collapsable: false,
        children: [
          ['/guide/vue/jsx', 'render函数和jsx'],

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