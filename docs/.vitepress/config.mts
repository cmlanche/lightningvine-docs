import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "闪电藤",
  description: "新一代文件传输助手",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '常见问题', link: '/qa' }
    ],

    logo: '/icon.png',

    sidebar: [
      {
        text: '说明文档',
        items: [
          { text: '简介', link: '/about' },
          { text: '开始使用', link: '/usage' },
          { text: '使用场景', link: '/scene' },
          { text: '常见问题', link: '/qa' },
          { text: '下载', link: '/download' },
          { text: '隐私政策', link: '/privacy' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmlanche/lightningvine-docs' }
    ]
  }
})
