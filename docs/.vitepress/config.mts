import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0' // 允许所有网络接口访问
    }
  },
  base: "/gogdns-docs/",
  title: "GOGDNS 私人DNS服务器",
  description: "A VitePress Site",
  
  // 1. 初始化时先放一个空的 favicon 占位，并给它加上 id="dynamic-favicon"
  head: [
    ['link', { rel: 'icon', href: '', id: 'dynamic-favicon' }],
    // 2. 注入地表最强动态 JS 脚本，全自动接管：小图标、导航栏Logo、主页Hero大图！
    ['script', {}, `
      (function() {
        // 摇出高级随机渐变色
        const baseHue = Math.floor(Math.random() * 360);
        const nextHue = (baseHue + 35) % 360;
        const colorTop = "hsl(" + baseHue + ", 78%, 55%)";
        const colorBottom = "hsl(" + nextHue + ", 75%, 42%)";
        
        // 严格保留你原汁原味的 3 个核心 Path 数据
        const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.52 123.37"><defs><linearGradient id="favGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="' + colorTop + '" /><stop offset="100%" stop-color="' + colorBottom + '" /></linearGradient></defs><path d="M114.49 61.82v27.74a5.2 5.2 0 0 1-2.41 4.88c-9.07 5.71-18.23 11.27-27.21 17.1-5.65 3.67-11.31 7.32-17 10.87-2.15 1.32-3.27.85-3.31-1.74-.09-5.83 0-11.66 0-17.49 0-1.85 1.36-2.59 2.59-3.39 8.8-5.68 17.58-11.39 26.47-16.9A4.83 4.83 0 0 0 96 78.15V42.91 23.66c0-1.23-.2-2.63 1.18-3.31s2.15.43 3.11 1c3.76 2.44 7.51 4.9 11.32 7.26a5.92 5.92 0 0 1 2.88 5.66c-.08 9.17 0 18.33 0 27.5zM50.49 11.28a54.56 54.56 0 0 0 0 6c.37 3.38-1.22 5.36-4 7.07-8.59 5.41-17.11 11.07-25.77 16.49-1.88 1.17-2.23 2.63-2.22 4.58v53c0 5.64-.09 5.77-4.8 3C9.73 99 5.92 96.31 2 93.81a4 4 0 0 1-2-3.74c0-17.66 0-35.33.05-53a43.82 43.82 0 0 1 .51-5 4.29 4.29 0 0 1 2.37-3l33.64-21.4c3.37-2.13 6.8-4.16 10.06-6.49 2.2-1.58 3.79-.67 3.85 2.1s.01 5.33.01 8z" fill="url(#favGrad)"/><path d="M50.49 82v38c0 1.12.35 2.46-.88 3.18s-2.18-.19-3.17-.8q-6.36-3.93-12.76-7.79a4 4 0 0 1-2.17-3.65V52.49a3.6 3.6 0 0 1 1.88-3.29c4.29-2.75 8.61-5.49 12.85-8.2 1-.61 2.07-1.49 3.2-.94s1 2 1 3.14q.06 19.4.05 38.8z" fill="url(#favGrad)"/><path d="M64.52 41.61v-37a18.57 18.57 0 0 1 0-2.24C64.82.21 66.29-.68 68 .58a154.51 154.51 0 0 0 13.35 8.34A2.44 2.44 0 0 1 82.51 11c.15 1.91.45 3.81.45 5.72 0 17.49 0 35 .08 52.47a6 6 0 0 1-3 5.56q-6.21 3.94-12.44 7.85c-1.65 1-2.69.61-3-1.28a16.62 16.62 0 0 1-.1-2.74v-37z" fill="url(#favGrad)"/></svg>';
        const dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgContent);
        
        // 【第一步】改变标签页 Favicon
        document.getElementById('dynamic-favicon').setAttribute('href', dataUrl);
        
        // 【第二步】动态扫描并改变页面上的各种大 Logo（导航栏 Logo 和主页 Hero 图）
        const updateAllLogos = () => {
          let updatedCount = 0;
          
          // 1. 抓取并修改导航栏左上角的 Logo
          const navLogo = document.querySelector('.VPNavbar .logo');
          if (navLogo) {
            navLogo.setAttribute('src', dataUrl);
            updatedCount++;
          }
          
          // 2. 抓取并修改主页正中间的 Hero 大图标
          const heroLogo = document.querySelector('.VPHero .image-src');
          if (heroLogo) {
            heroLogo.setAttribute('src', dataUrl);
            updatedCount++;
          }
          
          // 如果任意一个还没渲染出来，继续监听（VitePress 的单页路由切换也会触发）
          if (updatedCount < 2) {
            setTimeout(updateAllLogos, 30);
          }
        };
        
        // 启动对整个页面图标的监听劫持
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', updateAllLogos);
        } else {
          updateAllLogos();
        }
        
        // 处理单页应用点击菜单切换路由时，主页大图重新加载导致失效的问题
        const observer = new MutationObserver(updateAllLogos);
        observer.observe(document.documentElement, { childList: true, subtree: true });
      })()
    `]
  ],
  
  appearance: false,  // 完全禁用深色模式切换
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    logo: "./logo.svg",
    siteTitle: false,
    outlineTitle: "本页目录",
    sidebar: [
      {
        items: [
          { text: '介绍', link: '/main-Introduction' },
          { text: '安装', link: '/main-install' },
          { 
            text: '文档', 
            collapsed: true,
            items: [
              { text: '配置文件', link: '/docs/docs-main-config' },
              { text: '规则', link: '/docs/docs-rules' },
            ]
          },
          {
            text: '控制台页面',
            collapsed: true,
            items: [
              { text: '首页', link: '/usage/docs-index' },
              { text: '历史记录', link: '/usage/docs-his' },
              { text: '规则', link: '/usage/docs-rules' },
              { text: '分组列表', link: '/usage/docs-group' },
              { text: '外部列表', link: '/usage/docs-hosts' },
              { text: '客户端控制', link: '/usage/docs-client' },
              { text: '查询统计', link: '/usage/docs-ipstatistics' },
              { text: '客户端列表', link: '/usage/docs-iptable' },
              { text: '设置', link: '/usage/docs-settings' },
              { text: '高级设置', link: '/usage/docs-options' },
              { text: '日志', link: '/usage/docs-log' },
              { text: '统计', link: '/usage/docs-chartpanel' },
              { text: '工具', link: '/usage/docs-tools' },
              { text: '自定义WEB UI', link: '/usage/docs-others' },
            ]
          },
          { 
            text: '其他', 
            collapsed: true,
            items: [
              { text: '浏览器插件', link: '/main-chrome-crx' },
              { text: 'OpenWrt', link: '/main-openwrt-ipk' },
            ]
          },
          { text: '更新日志', link: '/main-update' },
          { text: '公共DNS', link: '/main-public-dns' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BillGhifun/gogdns' },
      { icon: 'docker', link: 'https://hub.docker.com/r/billghifun/gogdns' }
    ]
  }
})