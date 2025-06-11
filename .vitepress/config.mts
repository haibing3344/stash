import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stash官网",
  description: "Stash - 简单且强大的网络工具，支持HTTP(S)抓包、重写、解密等功能。立即下载Stash，体验最佳的网络调试工具。",
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'keywords', content: 'Stash,Stash官网,Stash下载地址,网络工具,HTTP抓包,HTTPS解密,网络调试,iOS网络工具' }],
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['meta', { name: 'author', content: 'Stash Team' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Stash官网 - 简单且强大的网络工具' }],
    ['meta', { property: 'og:description', content: 'Stash - 简单且强大的网络工具，支持HTTP(S)抓包、重写、解密等功能。立即下载Stash，体验最佳的网络调试工具。' }],
    ['meta', { property: 'og:url', content: 'https://stashapp.uk' }],
    ['meta', { property: 'og:site_name', content: 'Stash官网' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Stash官网 - 简单且强大的网络工具' }],
    ['meta', { name: 'twitter:description', content: 'Stash - 简单且强大的网络工具，支持HTTP(S)抓包、重写、解密等功能。立即下载Stash，体验最佳的网络调试工具。' }],
    ['link', { rel: 'canonical', href: 'https://stashapp.uk' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Stash',
      'applicationCategory': 'NetworkingApplication',
      'operatingSystem': 'iOS, macOS, tvOS',
      'description': 'Stash是一款简单且强大的网络工具，支持HTTP(S)流量抓包、重写、解密等功能，让您轻松监控和控制网络流量。',
      'url': 'https://stashapp.uk',
      'downloadUrl': 'https://apps.apple.com/app/stash/id1596063349',
      'author': {
        '@type': 'Organization',
        'name': 'Stash Team'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    })]
  ],
  cleanUrls: false,
  sitemap: {
    hostname: 'https://stashapp.uk'
  },
  themeConfig: {
    nav: [
      { text: '介绍', link: '/' },
      { text: '下载', link: '/download.md'},
      { text: '教程', link: '/tutorial.md' },
      { text: '机场推荐', link: '/airport.md' },
      { text: '常见问题', link: '/faq.md' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/' },
          { text: '下载安装', link: '/download.md' },
          { text: '快速上手', link: '/tutorial.md' }
        ]
      },
      {
        text: '进阶使用',
        items: [
          { text: '机场推荐', link: '/airport.md' },
          { text: '常见问题', link: '/faq.md' }
        ]
      }
    ],

    footer: {
      message: '本站内容仅供学习交流使用，请遵守当地法律法规',
      copyright: 'Copyright © 2024 <a href="/">Stash 官网</a>. All rights reserved.'
    }

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/stashapp' }
   // ]
  }
})
