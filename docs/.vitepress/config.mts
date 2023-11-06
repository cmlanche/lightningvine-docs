import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "闪电藤",
  description: "新一代文件传输助手",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      // { text: '特性', link: '/features' }
    ],

    logo: 'https://lightningvine.s3.bitiful.net/docs/icon-192.png',

    sidebar: [
      {
        text: '说明文档',
        items: [
          { text: '简介', link: '/about' },
          { text: '开始使用', link: '/usage' },
          { text: '使用场景', link: '/scene' },
          { text: '下载', link: '/download' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmlanche/lightningvine-docs' }
    ]
  }
})
