import {DefaultTheme, defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "闪电藤",
  description: "新一代文件传输助手",
  lang: 'zh-Hans',
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: '闪电藤 | 新一代文件传输助手' }],
    ['meta', { property: 'og:site_name', content: '闪电藤' }],
    ['meta', { property: 'og:image', content: 'https://sdt.zishu.life/home_logo.png' }],
    ['meta', { property: 'og:url', content: 'https://sdt.zishu.life/' }],
  ],
  themeConfig: {
    nav: nav(),

    logo: '/icon.png',

    sidebar: sidebarGuide(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmlanche/lightningvine-docs' }
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: 'cmlanche · 基于LocalSend二次开发',
      copyright: `<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">京ICP备2021038710号-3</a>`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '主页', link: '/' },
    { text: '常见问题', link: '/qa' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '说明文档',
      collapsed: false,
      items: [
        { text: '简介', link: '/about' },
        { text: '开始使用', link: '/usage' },
        { text: '使用场景', link: '/scene' },
        { text: '常见问题', link: '/qa' },
        { text: '下载', link: '/download' },
        { text: '隐私政策', link: '/privacy' },
      ]
    }
  ]
}
