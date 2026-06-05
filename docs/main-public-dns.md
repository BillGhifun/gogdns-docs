# 一些公共DNS

## 国际主流公共 DNS

### IPv4 UDP
| 服务商 | 首选 DNS | 备用 DNS |
| :--- | :--- | :--- |
| **Cloudflare** | `1.1.1.1` | `1.0.0.1` |
| **Google** | `8.8.8.8` | `8.8.4.4` |
| **Quad9** | `9.9.9.9` | `149.112.112.112` |
| **OpenDNS** | `208.67.222.222` | `208.67.220.220` |

### IPv6 UDP
| 服务商 | 首选 IPv6 | 备用 IPv6 |
| :--- | :--- | :--- |
| **Cloudflare** | `2606:4700:4700::1111` | `2606:4700:4700::1001` |
| **Google** | `2001:4860:4860::8888` | `2001:4860:4860::8844` |
| **Quad9** | `2620:fe::fe` | `2620:fe::9` |
| **OpenDNS** | `2620:119:35::35` | `2620:119:53::53` |

---

## 中国大陆主流公共 DNS

### IPv4 UDP
| 服务商 | 首选 DNS | 备用 DNS |
| :--- | :--- | :--- |
| **阿里 DNS (Alidns)** | `223.5.5.5` | `223.6.6.6` |
| **腾讯 DNS (DNSPod)** | `119.29.29.29` | `119.28.28.28` |
| **火山引擎 DNS (字节跳动)** | `180.184.1.1` | `180.184.2.2` |
| **百度 DNS** | `180.76.76.76` | |
| **114 DNS** | `114.114.114.114` | `114.114.115.115` |
| **台湾中华电信 (HiNet)** | `168.95.1.1` | `168.95.192.1` |

### IPv6 UDP
| 服务商 | 首选 IPv6 | 备用 IPv6 |
| :--- | :--- | :--- |
| **阿里 DNS** | `240c::6666` | `240c::6644` |
| **腾讯 DNS** | `2402:4e00::` | |
| **火山引擎 DNS** | `2402:f000:1:801::1` | `2402:f000:1:802::1` |
| **下一代互联网国家工程中心** | `240c::6666` | |
| **中国电信** | `240e:1f:1::1` | `240e:1f:1::33` |

---

## 加密 DNS 安全协议

### DoT (DNS over TLS)
| 服务商 | DoT 地址 / 域名 |
| :--- | :--- |
| **阿里 DNS** | `dns.alidns.com` |
| **腾讯 DNS** | `dot.pub` |
| **火山引擎 DNS** | `dot.volcengine.com` |
| **Cloudflare** | `one.one.one.one` |
| **Google** | `dns.google` |
| **Quad9** | `dns.quad9.net` |
| **AdGuard (去广告)** | `dns.adguard-dns.com` |

> 💡 **提示**：目前大多数系统（如 Android 的“私人 DNS”）只需填写上述域名即可，无需手动追加 `:853` 端口号。

### DoQ (DNS over QUIC)
| 服务商 | DoQ 请求地址 |
| :--- | :--- |
| **阿里 DNS** | `quic://dns.alidns.com` |
| **AdGuard (去广告)** | `quic://dns.adguard-dns.com` |
| **NextDNS** | `quic://dns.nextdns.io` |

### DoH (DNS over HTTPS)
| 服务商 | DoH URL 请求地址 |
| :--- | :--- |
| **阿里 DNS** | `https://dns.alidns.com/dns-query` |
| **腾讯 DNS** | `https://doh.pub/dns-query` |
| **火山引擎 DNS** | `https://doh.volcengine.com/dns-query` |
| **Cloudflare** | `https://cloudflare-dns.com/dns-query` |
| **Google** | `https://dns.google/dns-query` |
| **Quad9** | `https://dns.quad9.net/dns-query` |

### DoH3 (DNS over HTTP/3)
| 服务商 | DoH3 URL 请求地址 |
| :--- | :--- |
| **阿里 DNS** | `https://dns.alidns.com/dns-query` |
| **Cloudflare** | `https://1.1.1.1/dns-query` |
| **Google** | `https://dns.google/dns-query` |

---

## 📝 DNS 知识小科普

::: tip 常见加密 DNS 协议的区别
* **DoT (DNS over TLS)**：将 DNS 流量封装在 TLS 隧道中（默认端口 853）。传输高效，但由于使用了独立端口，容易在部分防火墙严格的环境下被拦截。
* **DoH (DNS over HTTPS)**：将 DNS 流量打包进普通的 HTTPS 请求中（默认端口 443）。隐私性强，其流量特征与普通网页访问完全一致，几乎无法被屏蔽。
* **DoQ (DNS over QUIC)**：基于 UDP 协议的 QUIC 传输层。不仅具备加密特性，还能有效规避 TCP 三次握手带来的延迟，在移动弱网环境下表现极佳。
* **DoH3 (DNS over HTTP/3)**：基于 QUIC 协议的 DoH。是目前最新、理论速度最快的加密 DNS 方案，完美兼顾了数据安全与极致的响应速度。
:::