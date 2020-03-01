module.exports = {
    base:'/vue-component/',
    title: 'Vue-UI',
    description: '提供了一些常用组件，适合移动端和PC端使用',
    themeConfig: {
        sidebar: [
          {
            title: '入门',
            children: ['/install/']
          },
          {
            title: '组件',
            children: [
              '/components/button',
              '/components/input',
              '/components/grid',
              '/components/layout',
              '/components/popover',
            ]
          },          
        ]
      }
  }