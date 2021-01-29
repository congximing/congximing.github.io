const themeConfig = require('./config/theme/')

module.exports = {
  title: "Cong'bolg",
  description: 'Developing....',
  dest: 'public',
  base:'/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // ['script', {src:'https://cdn.jsdelivr.net/gh/yremp/yremp-js@1.5/sakura.js'}],
    ['script', {src:'script/sakura.js'}],
    ['script', {src:'script/sakura-app.js'}],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
  ],
  theme: 'reco',
  themeConfig:{
    author:'cong',
    nav:[
      {text: '主页', link: '/', icon: 'reco-date'},
      {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
      { text: '标签', link: '/tag/', icon: 'reco-tag' },
      { text: '关于我', link: '/views/about/', icon: 'reco-tag' }
    ],
    type:'blog',
    subSidebar: 'auto'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  