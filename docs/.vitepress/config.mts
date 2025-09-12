import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0' // 允许所有网络接口访问
    }
  },
  base:"/gogdns/",
  title: "GOGDNS",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/gogdns/logo-ico.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 导航上的logo
    logo: "./logo.svg",
    // 隐藏logo右边的标题
    siteTitle: false,
    outlineTitle: "本页目录",
    sidebar: [
      {
        // text: 'GOGDNS',
        items: [
          { text: '介绍', link: '/main-Introduction' },
          { text: '安装', link: '/main-install' },
          { text: '使用', link: '/main-usage' },
          { text: '更新日志', link: '/main-update' },
          // { text: '文档', link: '/api-examples' },
          {
            text: '管理页面',
            collapsed: true, // 默认展开此分组 (可选)
            items: [
              { text: '首页', link: '/usage/docs-index' },
              { text: '历史记录', link: '/usage/docs-his' },
              // {
              //   text: '规则',
              //   items: [
              //     { text: '首页', link: '/rule-index' },
              //     { text: '历史记录', link: '/rule-his' },
              //   ]
              // },
              { text: '规则', link: '/usage/docs-rules' },
              { text: '分组列表', link: '/usage/docs-group' },
              { text: '外部列表', link: '/usage/docs-hosts' },
              { text: '查询统计', link: '/usage/docs-ipstatistics' },
              { text: '客户端列表', link: '/usage/docs-iptable' },
              { text: '高级设置', link: '/usage/docs-options' },
              { text: '日志', link: '/usage/docs-log' },
              { text: '统计', link: '/usage/docs-chartpanel' },
              { text: '工具', link: '/usage/docs-tools' },
            ]
          },
                    {
            text: '文档',
            collapsed: true, // 默认展开此分组 (可选)
            items: [
              // {
              //   text: '规则',
              //   items: [
              //     { text: '首页', link: '/rule-index' },
              //     { text: '历史记录', link: '/rule-his' },
              //   ]
              // },
              { text: '规则', link: '/docs/docs-rules' },
              { text: '工具', link: '/docs/docs-client-config' },
            ]
          },
          { text: '其他', link: '/main-others' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})