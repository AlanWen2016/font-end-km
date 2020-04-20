module.exports = {
  title: '印迹',
  description: '字节珠玑',
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
          ['/guide/javascript/es6', 'ES6'],
          ['/guide/javascript/npm', 'npm发布'],
          ['/guide/javascript/module', '模块化'],
          ['/guide/javascript/jwt', 'JSON WEB令牌'],
          ['/guide/javascript/node', 'Node'],
          ['/guide/javascript/promise', 'Promise'],
          ['/guide/javascript/typescript', 'TypeScript'],
          ['/guide/javascript/arrayBuffer', '文件上传'],
          ['/guide/javascript/regular-expression', '正则']          
        ]
      },
      {
        title: 'HTML',
        collapsable: false,
        children: [
          ['/guide/html/canvas', 'canvas'],
          ['/guide/html/flexible', 'flexible'],
          ['/guide/html/formData', 'formData']
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
          ['/guide/vue/vue-source-code1', 'VUE源码1'],

        ]
      },
      {
        title: 'Docker',
        collapsable: false,
        children: [
          ['/guide/docker/1.docker', 'Docker基础'],
          ['/guide/docker/2.image', '镜像'],
          ['/guide/docker/3.container', '容器'],
          ['/guide/docker/4.docker-volume', 'docker数据管理'],
          ['/guide/docker/5.dockerfile', 'dockerfile'],
          ['/guide/docker/7.lnmp', 'lnmp环境'],
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
      {
        title: '公共',
        collapsable: false,
        children: [
        '/guide/universal/cryptography',
        '/guide/markdown-demo'
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
