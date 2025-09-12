# 客户端配置文件

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->
使用客户端配置文件需要在程序目录下建立cfg_client文件夹，其中的文件后缀为.json

## 文件模板

```
{
  "client_id": "192.168.1.10",		// 客户端ID 支持IP和DoT\DoQ使用的域名及DoH使用的ID DoQ:xxx.com DoT:xxx.com DoH:dns-query
  "client_describe": "描述",		// 客户端描述
  "record_history": true,		// 是否产生历史记录
  "cache_enabled": true,		// 是否启用缓存
  "rule": {
    "global_control": true,		// 是否使用全局设置 IP策略等
    "global_hosts_type": true,		// 是否使用特殊的Hosts改写
    "global_black": true,		// 启用域名黑名单
    "global_hosts_single": true,	// 启用实验性单客户端改写
    "global_bypass_roam": true,		// 启用漫游
    "global_bypass_sni": true,		// 启用SNI域前置
    "global_bypass_https": true,	// 启用实验性HTTPS分流改写
    "global_hosts": true,		// 启用Hosts规则
    "global_hosts_external": true,	// 启用外部过滤规则
    "global_cdn_rewrite": true,		// 启用CDN优选
    "open_type_a": true,		// 接受A(Type1)记录
    "open_type_aaaa": true,		// 接受AAAA(Type28)记录
    "open_type_https": true,		// 接受HTTPS(Type65)记录
    "open_custom_rules": true		// 启用自定义规则列表
  },
  "custom_rules": [			// 客户端自定义规则
    "||example.com^"
  ]
}
```

**用途**

用于精细化定制给每个客户端设置不同的规则。

<!-- ## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown). -->
