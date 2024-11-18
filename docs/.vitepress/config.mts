import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/test/',
  title: "MoYao's Wiki",//整体项目名称
  description: "",//SEO
  themeConfig: {
    siteTitle:"MoYao's WIKI",//首页名称
    logo:'floral-1801489.svg',//首页logo
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { //右上角下拉导航
        text: 'Examples',
        items:[
          {text:"Examples" ,link: '/markdown-examples' },
          {text:"None" ,link: '/None' },
          {//带有分割线的导航栏
            items:[
              {text:'MySQL',link:'/MySQL'}
            ]}
        ]
      }
    ],

    //此处左侧导航栏不合理，应对于每一个part有单独的导航栏，避免混杂
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // sidebar: {
    //   '/docs':{ //该左侧侧边栏只针对于docs目录
    //     text: 'Examples',
    //         items: [
    //           { text: 'Markdown Examples', link: '/markdown-examples' },
    //           { text: 'Runtime API Examples', link: '/api-examples' }
    //         ]
    //       }
    //   },
    
      
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moyao1' }
    ],

    footer:{
      message:'这是一个页脚',
      copyright:'嗯对没有备案',
    },
  }
})
