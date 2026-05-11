# 高级设置

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->

## 界面

<!-- VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting: -->

![高级设置](../assets/docs-options.png "高级设置")

**功能**

1. **命令执行**

执行内建命令。

### 命令说明

| 命令                                        | 说明                                                                                                                                                                                                      |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `list <域名:Type:Class:SubNet>`             | 列出所有匹配的缓存项，支持通配符 `*` 匹配任意字符。 <br/>`Type` 为记录类型（如 A、AAAA、CNAME 等）。<br/>`Class` 为协议类。<br/>`SubNet` 为子网掩码。                                                                                                 |
| `see <域名:Type:Class:SubNet>`              | 查看缓存，支持通配符。 <br/>例：`see www.baidu.com:1:1:0.0.0.0` 查看www.baidu.com的A记录的缓存数据。                                                                                                                            |
| `del <域名:Type:Class:SubNet>`              | 删除缓存，支持通配符。 <br/>例：`del *.baidu.com` 删除匹配 *.baidu.com 的全部记录（不包含 baidu.com）。                                                                                                                             |
| `renew <ipv4\|ipv6\|ip\|ddns\|gfw\|root>` | 执行程序内建命令（非系统命令） <br/> renew ipv4 更新服务器的公网IPv4地址。 <br/> renew ipv6 更新服务器的公网IPv6地址。 <br/> renew ip 更新服务器的公网IPv4与IPv6地址。 <br/> renew ddns 更新ddns。 <br/> renew gfw 更新gfw列表。 <br/> renew root 更新dns的root根数据。 |
| `compress <historydb>`                    | 压缩 his_db 历史记录数据库                                                                                                                                                                                       |
| `reset <cache>`                           | 缓存初始化 TTL（使全部缓存过期），用于调试                                                                                                                                                                                 |
| `restart`                                 | 重启                                                                                                                                                                                                      |

2. **同步**

同步主从服务器数据。

<!-- ## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown). -->
