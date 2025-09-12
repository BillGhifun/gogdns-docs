# 规则

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->

## 界面

<!-- VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting: -->

![规则](../assets/docs-rules.png "规则")

**功能**

1. **IP白名单**

放行匹配IP或ID的网络请求（同时作用于管理页面）。

2. **IP黑名单**

阻止匹配IP或ID的网络请求（同时作用于管理页面）。

3. **域名阻断**

不返回匹配域名的查询数据。

4. **域名黑名单**

匹配的域名将被改写至0.0.0.0。

5. **漫游**

对于列表中的域名进行分流。

6. **自动漫游**

自动检查某些网站的网络状态并自动添加至列表中。

7. **域前置**

对于列表中的域名进行分流。

8. **自动域前置**

自动检查某些网站的网络状态并自动添加至列表中。

9. **Hosts**

普通改写规则（同时支持一些内建的高级规则）。

10. **CDN优选**

匹配分组数据中IP或CIDR时，则使用对应的分组数据中的已手动优选的回源IP地址。

11. **查询分流**

可单独指定查询某域名时使用的上游DNS服务器（支持通配符）。

11. **频繁缓存**

可设置域名的TTL值，对一个域名设定一个较小的TTL对频繁更新的DDNS、CDN等特别有效。

<!-- ## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown). -->
