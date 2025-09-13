---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: '*GOGDNS*'
  name: '<i>GOGDNS</i>'
  # text: "<div style='color: red; font-size: 24px;'>这是个有 style 的随便写点</div>"
  # text: "<i>GOGDNS</i>"
  tagline: 一个简易的私人DNS服务器

  #image:
    #light: /favicon.svg        # light 模式下显示的 logo
    #dark: /logo-dark.svg    # dark 模式下显示的 logo
    #alt: EasyEditor         # 图片的替代文本
  image:
    # src: /google_earth1.png
    src: /logo-ico.svg
    alt: VitePress

  actions:
    - theme: brand
      text: 介绍
      link: /main-Introduction
    - theme: alt
      text: 安装
      link: /main-install
    - theme: alt
      text: 更新日志
      link: /main-update

features:
  - title: 智能DNS解析
    details: 支持多种解析策略，包括直连、缓存、改写和CDN优选，提供快速准确的域名解析服务
  - title: 实时统计监控
    details: 内置强大的统计功能，实时监控查询次数、响应时间、客户端分布等关键指标
  - title: 灵活规则配置
    details: 支持自定义规则和外部规则导入，可针对不同域名和客户端进行个性化配置
  - title: 安全防护机制
    details: 具备污染检测和阻断功能，有效防止DNS劫持和恶意域名解析
  - title: 历史记录追溯
    details: 完整记录所有DNS查询历史，支持按客户端、域名、状态等多种条件查询和分析
  - title: 可视化管理界面
    details: 提供友好的Web管理界面，方便进行配置管理、数据查看和系统监控
---