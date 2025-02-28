import { defineConfig } from 'vitepress'
import { generateSidebar } from './vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Docs",
  description: "My Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/logo.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
