# 配置文件

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->
程序依靠在程序根目录下的Config.ini文件来进行配置。

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->

<!-- VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting: -->

## **server节点**

| 参数名 | 描述 | 备注 |
| :--- | :--- | :--- |
| SERVER_UDP_ADDR | 设置服务器监听DNS查询的UDP协议地址和端口。 | 默认值：0.0.0.0:53 支持绑定多个地址，用英文逗号分隔（如 0.0.0.0:53, ::0:53）。0.0.0.0 表示监听所有IPv4接口。 |
| SERVER_TCP_ADDR | 设置服务器监听DNS查询的TCP协议地址和端口。 | 默认值：0.0.0.0:53 支持绑定多个地址，用英文逗号分隔。TCP是UDP的备用协议，用于响应超过512字节的报文。 |
| SERVER_DOT_ADDR | 设置服务器监听DNS-over-TLS (DoT) 查询的地址和端口。 | 留空则不启用DoT服务。支持绑定多个地址，用英文逗号分隔。启用DoT加密传输需要配置 SERVER_DOT_CERT_FILE 和 SERVER_DOT_CERT_KEY。 |
| SERVER_DOQ_ADDR | 设置服务器监听DNS-over-QUIC (DoQ) 查询的地址和端口。 | 留空则不启用DoQ服务。支持绑定多个地址，用英文逗号分隔。启用DoQ加密传输需要配置 SERVER_DOQ_CERT_FILE 和 SERVER_DOQ_CERT_KEY。 |
| SERVER_DOH_OPEN | 控制是否启用DNS-over-HTTPS (DoH) 服务。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。需配合其他DoH参数使用。 |
| SERVER_DOH3_OPEN | 控制是否启用DNS-over-HTTPS over QUIC (DoH3) 服务。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。DoH3是基于QUIC协议的DoH实现。 |
| SERVER_DOH_INTEGRATED | 控制DoH服务是否集成到Web控制台服务。 | 默认值：0 可选值： 0 (独立端口), 1 (集成到Web端口)。设置为0时DoH使用独立端口，设置为1时与Web控制台共享端口。 |
| SERVER_DOH_URL | 自定义DoH服务的查询端点（URL路径）。 | 默认值：/dns-query 客户端请求的完整URL为：https://你的服务器地址:端口/此参数值。 |
| SERVER_DOH_MAIN_WEB_SWITCH | 当DoH使用独立路由时是否显示自定义首页内容。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后可在DoH根路径显示自定义网页。 |
| SERVER_DOH_MAIN_WEB_PATH | 指定DoH自定义首页的目录位置。 | 默认值：./www/html/ 存放HTML、CSS、JS等静态资源的目录路径。 |
| SERVER_DOH_HTTP_ADDR | DoH(HTTP)服务监听的地址和端口。 | 默认值：0.0.0.0:80 用于提供未加密的HTTP DoH服务。 |
| SERVER_DOH_HTTPS_ADDR | DoH(HTTPS)服务监听的地址和端口。 | 默认值：0.0.0.0:443 用于提供加密的HTTPS DoH服务。需配置证书和私钥。 |
| SERVER_DOH_HTTPS_CERT_FILE | 指定DoH(HTTPS)服务使用的SSL证书文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOH_HTTPS_CERT_KEY 配对使用。 |
| SERVER_DOH_HTTPS_CERT_KEY | 指定DoH(HTTPS)服务使用的SSL私钥文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOH_HTTPS_CERT_FILE 配对使用。 |
| SERVER_DOH3_ADDR | DoH3服务监听的地址和端口（UDP）。 | 默认值：0.0.0.0:443 基于QUIC协议的DoH3服务地址。 |
| SERVER_DOH3_CERT_FILE | 指定DoH3服务使用的SSL证书文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOH3_CERT_KEY 配对使用。 |
| SERVER_DOH3_CERT_KEY | 指定DoH3服务使用的SSL私钥文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOH3_CERT_FILE 配对使用。 |
| SERVER_DOH3_0RTT | DoH3是否开启0-RTT快速连接。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后可减少连接建立延迟，提升性能。 |
| SERVER_DOH_PQC_OPEN | 是否启用后量子加密（PQC）。 | 默认值：1 可选值： 0 (不启用), 1 (启用)。后量子加密可抵御未来量子计算机的威胁。 |


## **monitor节点**

| 参数名 | 描述 | 备注 | 
| :--- | :--- | :--- | 
| MONITOR_HTTP_OPEN | 控制是否启用基于HTTP协议的Web监控控制台服务。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后可通过HTTP访问管理界面。 |
| MONITOR_HTTP_ADDR | WEB-HTTP控制台的监听地址（IP:PORT格式）。 | 默认值：0.0.0.0:5380 同时指定IP和端口，如 127.0.0.1:8080 可限制仅本机访问。 |
| MONITOR_HTTPS_OPEN | 控制是否启用基于HTTPS（安全套接层）协议的Web监控控制台服务。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。提供加密访问，更安全。需配置证书和私钥。 |
| MONITOR_HTTPS_ADDR | WEB-HTTPS控制台的监听地址（IP:PORT格式）。 | 默认值：0.0.0.0:4380 同时指定IP和端口。常用端口为 443，若使用默认端口需确保无冲突。 |
| MONITOR_HTTP3_OPEN | 控制是否启用基于HTTP/3协议的Web监控控制台服务。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。HTTP/3基于QUIC协议，提供更低的延迟和更好的性能。 |
| MONITOR_HTTP3_ADDR | HTTP/3控制台的监听地址（IP:PORT格式）。 | 默认值：0.0.0.0:4380 同时指定IP和端口。HTTP/3使用UDP协议。 |
| MONITOR_HTTP3_0RTT | HTTP/3是否开启0-RTT快速连接。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后可减少连接建立延迟，提升访问速度。 |
| MONITOR_AUTH_USER | 为访问Web控制台设置身份验证的用户名。 | 留空则表示允许匿名访问，无需用户名密码，存在安全风险。建议设置强密码。 |
| MONITOR_AUTH_PASS | 为访问Web控制台设置身份验证的密码。 | 留空则表示允许匿名访问，无需用户名密码，存在安全风险。需与 MONITOR_AUTH_USER 配对使用。 |
| MONITOR_CERT_FILE | 指定HTTPS/HTTP3服务所需的SSL/TLS证书文件路径。 | 可使用绝对路径或相对于程序运行目录的路径（./）。必须与 MONITOR_CERT_KEY 配对使用。支持根CA或非根CA证书。 |
| MONITOR_CERT_KEY | 指定HTTPS/HTTP3服务所需的SSL/TLS私钥文件路径。 | 可使用绝对路径或相对于程序运行目录的路径（./）。必须与 MONITOR_CERT_FILE 配对使用。 |
| MONITOR_MAC_VENDOR_DB | 指定MAC厂商数据库文件，用于将客户端的MAC地址解析为对应的设备厂商名称。 | 默认值：./db/mac.db 此功能用于在监控页面中更友好地显示客户端设备信息（如：Apple, Inc.）。 |
| MONITOR_DEBUG | 控制Web控制台页面是否启用调试模式。 | 默认值：0 可选值： 0 (关闭), 1 (开启)。调试模式会显示更多底层信息，建议生产环境关闭。 |
| MONITOR_WEB_PATH | 指定Web控制台UI文件的目录路径。 | 默认值：./www/ WEBUI使用的文件夹，包含HTML、CSS、JS等前端资源。 |


## **dns节点**

| 参数名 | 描述 | 备注 |
| :--- | :--- | :--- |
| POLLUTE_BAIT_LEVEL | 控制是否启用诱饵污染探测及探测循环次数。 | 默认值：0 可选值： 0 (不启用), 1-N (启用并设置循环次数)。等于0则不进行诱饵污染探测，所有查询走UPSTREAM_LIST_ABROAD分组。数值越大检测越准确但延迟越高。 |
| POLLUTE_BAIT_DNS | 指定用于诱饵污染探测的NoneDNS服务器地址。 | 通常设置为一个可信的、无污染的国外DNS（如 78.78.78.78）。用于对比检测结果判断是否存在污染。 |
| POLLUTE_BAIT_TIMEOUT | 设置诱饵污染探测请求的超时时间（毫秒）。 | 默认值：40 建议值在 30 - 200 之间。超时时间影响去污染判断的响应速度。 |
| POLLUTE_TAIL_LEVEL | 使用新的去污染逻辑TAIL模式。 | 默认值：0 可选值： 0 (不启用), 1-N (启用并设置级别)。一种改进的去污染算法。 |
| POLLUTE_CTCP_LEVEL | 使用新的去污染逻辑CTCP模式。 | 默认值：0 可选值： 0 (不启用), 1-N (启用并设置级别)。另一种改进的去污染算法。 |
| POLLUTE_GFW_OPEN | 是否使用GFWList方式来鉴别污染。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后将根据GFWList规则来判断域名是否被污染。 |
| POLLUTE_GFW_URL | 设置GFWList规则库的更新链接。 | 用于自动更新GFWList规则库，保持污染检测规则的时效性。支持HTTP/HTTPS链接。 |
| POLLUTE_IP_OPEN | 是否使用污染IP列表来鉴别污染。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后将根据已知的污染IP列表来判断响应是否被污染。 |
| UPSTREAM_PTR | 专门用于查询PTR记录（反向DNS解析）的上游DNS服务器。 | 留空则使用常规的上游DNS进行PTR查询。一般情况下可设置为路由器IP（如 192.168.1.1）。 |
| UPSTREAM_TIMEOUT | 设置查询上游DNS服务器的超时时间（毫秒）。 | 默认值：900 超时后该上游服务器将被标记为不可用。 |
| DNS_CACHE_OPEN | 控制是否启用DNS响应缓存功能。 | 默认值：1 可选值： 0 (禁用), 1 (启用)。启用缓存可以极大提升查询速度。 |
| DNS_CACHE_OPTIMIZE | 控制是否启用"乐观缓存"功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。乐观缓存允许在记录TTL过期后仍使用缓存记录，同时异步更新，平衡速度与准确性。 |
| DNS_CACHE_DB_DEL | 设置自动删除过期缓存数据的周期（秒）。 | 默认值：259200 (3天) 目前仅在程序重启时执行删除操作。604800=7天。 |
| DNS_TTL_DYNAMIC | 设置缓存中动态调整的TTL最大值（秒）。 | 默认值：86400 (1天) 实际缓存时间将取上游返回的TTL和此值中的较小者。介于0-16777215之间。 |
| DNS_TTL_FIXED | 设置一个固定的TTL值，所有响应中的TTL都将被改写为此值。 | 默认值：60 介于 0 - 86400 之间。设置为 0 则禁用固定TTL，使用原始TTL。 |
| DNS_TTL_AUTO_DYNAMIC | 控制是否启用自动动态TTL权重。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。一种复杂的TTL管理策略，每个权重使用DNS_TTL_WEIGHT_TIME设置的值。 |
| DNS_TTL_WEIGHT_TIME | 自动动态TTL权重单值（秒）。 | 默认值：5 范围5-3600。与DNS_TTL_AUTO_DYNAMIC配合使用。 |
| CLIENT_IP_ALLOWED | 控制是否启用客户端IP白名单功能。 | 默认值：1 可选值： 0 (禁用), 1 (启用)。启用后，仅允许白名单中的IP查询。 |
| CLIENT_IP_BLOCKED | 控制是否启用客户端IP黑名单功能。 | 默认值：1 可选值： 0 (禁用), 1 (启用)。启用后，将拒绝黑名单中的IP查询。 |
| DNSSEC_OPEN_LEVEL | DNSSEC验证级别。 | 默认值：0 可选值： 0 (禁用DNSSEC), 1 (信任上游), 2 (本地验证)。DNSSEC可防止DNS欺骗和中间人攻击。 |
| DNSSEC_STRICT_LEVEL | DNSSEC验证策略。 | 默认值：0 可选值： 0 (宽松), 1 (严格)。严格模式下DNSSEC验证失败将直接拒绝响应。 |
| DNS_QUERY_METHOD | 设置DNS服务器的核心运作方式。 | 默认值：1 可选值： 0 (迭代查询), 1 (递归查询)。递归查询更兼容传统客户端，迭代查询效率更高。 |
| DNS_QUERY_EXTEND | 控制是否允许扩展查询类型（如TXT, SRV等）。 | 默认值：0 可选值： 0 (仅允许基础类型A/AAAA/NS/CNAME/SOA/MX), 1 (允许所有类型)。禁用可增强安全性。 |
| DNS_QUERY_CDN_OPTIMIZE | 控制是否启用CDN IP优选功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用后会尝试对返回的IP进行测速排序，返回最快IP。 |
| DNS_QUERY_CDN_OPTIMIZE_DUAL | 控制CDN优选是否返回IPv4和IPv6双栈地址。 | 默认值：0 可选值： 0 (仅返回单栈), 1 (返回双栈)。 |
| DNS_QUERY_DOMAIN_BLACK | 控制是否启用域名黑名单列表功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用后，匹配黑名单的域名将被重写。 |
| DNS_QUERY_DOMAIN_BLOCKED | 控制是否启用域名阻断列表功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用后，将直接拒绝解析阻断列表中的域名。 |
| DNS_QUERY_BLACK_EXTERNAL | 控制是否启用外部Hosts文件功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用后可加载外部Hosts文件进行域名映射。 |
| DNS_QUERY_BLACK_GROUP | 指定分组改写规则文件的目录路径。 | 默认值：./group/ 在此目录下的文件可以定义更复杂的域名重写规则（如分流）。用于按组管理不同的域名改写策略。 |
| DNS_QUERY_IPV4 | 控制是否允许客户端查询A记录（IPv4地址）。 | 默认值：1 可选值： 0 (拒绝), 1 (允许)。 |
| DNS_QUERY_IPV6 | 控制是否允许客户端查询AAAA记录（IPv6地址）。 | 默认值：1 可选值： 0 (拒绝), 1 (允许)。 |
| DNS_QUERY_HTTPS | 控制是否允许客户端查询HTTPS记录（SVCB/HTTPS资源记录）。 | 默认值：1 可选值： 0 (拒绝), 1 (允许)。 |
| DNS_QUERY_ANY | 控制是否允许客户端查询ANY记录。 | 默认值：1 可选值：0 (拒绝), 1 (允许)。ANY查询可能被用于放大攻击，建议禁用。 |
| DNS_QUERY_BLACK_IPV4 | 指定域名黑名单中域名被重写到的IPv4地址。 | 默认值：0.0.0.0 需启用 DNS_QUERY_DOMAIN_BLACK 生效。 |
| DNS_QUERY_BLACK_IPV6 | 指定域名黑名单中域名被重写到的IPv6地址。 | 默认值：:: 需启用 DNS_QUERY_DOMAIN_BLACK 生效。 |
| DNS_QUERY_ADD_ECS | 控制是否在向上游查询时添加EDNS Client Subnet (ECS)信息。 | 默认值：0 可选值： 0 (不添加), 1 (添加)。添加ECS有助于上游返回更精准的CDN IP，但可能隐私敏感。 |
| DNS_QUERY_ECS_SUBNET | 自定义EDNS子网。 | 留空则外网请求时使用客户端子网，内网请求时使用服务器子网。可手动指定子网以优化CDN调度。 |
| UPSTREAM_LIST_ABROAD | 定义一组"无污染"的上游DNS服务器列表，主要用于检测和应对DNS污染。 | 通常配置为国外的、可靠的DNS服务器。支持多种协议格式（udp://、tcp://、doh://、dot://、doq://、doh3://等）。多个地址用逗号分隔。 |
| UPSTREAM_LIST_INTERNAL | 定义常规查询所使用的上游DNS服务器列表，通常为国内DNS。 | 使用国内DNS有助于解析到更近、更快的CDN IP地址。支持多种协议格式。多个地址用逗号分隔。 |

**上游DNS支持的协议格式：**
- **UDP**: `udp://` 或 `ip` 或 `ip:port`
- **TCP**: `tcp://`
- **DoH**: `doh://` 或 `http://` 或 `https://`
- **DoT**: `dot://` 或 `tls://`
- **DoQ**: `doq://` 或 `quic://`
- **DoH3**: `doh3://` 或 `h3://` 或 `http3://`

**注意**: DoH支持通过URL参数 `referer=[url]` 或 `referer=true` 动态启用Referer头部注入，该参数为非持久性参数，在构建上游HTTP请求时会被逻辑自动过滤。例如：`doh://xxx.com/dns-query?referer=true`


## **bypass节点**

| 参数名 | 描述 | 备注 |
| :--- | :--- | :--- |
| BYPASS_OPEN | 主开关，控制是否启用本地的BypassTool功能。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。这是所有Bypass相关功能的总开关。 |
| BYPASS_ROAM_IP | 定义用于"漫游"功能的IP地址列表。 | 多个IP用英文逗号分隔。特殊值 MY4 和 MY6 分别代表使用本机获取到的IPv4和IPv6地址。 |
| BYPASS_SNI_IP | 定义用于SNI域前置分流的目标地址列表。 | 多个IP用英文逗号分隔。用于将特定SNI域名的连接重定向到这些地址。 |
| BYPASS_LOOPBACK_CHECK | 控制是否对客户端IP进行本地回环地址检查。 | 默认值：1 可选值： 0 (不检查), 1 (检查)。如果客户端在本地使用（如127.0.0.1），应设为 0 以避免错误拦截。本地使用时建议设为0。 |
| BYPASS_ROAM_OPEN | 控制是否启用"漫游"功能开关。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。需配合 BYPASS_ROAM_IP 等参数使用。 |
| BYPASS_SNI_OPEN | 控制是否启用SNI Bypass域名改写功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用后会根据规则改写SNI信息以绕过SNI阻断。 |
| BYPASS_SNI_LOG | 控制是否记录SNI Bypass功能的调试日志。 | 默认值：0 可选值： 0 (不记录), 1 (记录)。用于排查SNI分流问题，但会增加日志量。 |
| BYPASS_ADDR | 设置本地Bypass服务本身监听的地址列表。 | 多个地址用英文逗号分隔。格式为 ip:port。客户端应配置代理指向此地址。 |
| BYPASS_DNS | 设置本地Bypass在漫游模式下进行DNS解析时使用的代理DNS服务器。 | 用于在代理环境中正确解析域名。 |
| BYPASS_PREFER_IPV6 | 本地Bypass漫游时内部查询是否优先使用解析出的IPv6地址。 | 默认值：0 可选值： 0 (不优先), 1 (优先使用IPv6)。在IPv6网络环境下可提升性能。 |
| BYPASS_ROAM_PROXY_ADDR | 设置本地Bypass漫游时使用的上级代理服务器地址。 | 格式为 ip:port（如 x.x.x.x:7891）。用于实现代理链或接入特定的代理网络。 |
| BYPASS_ROAM_PROXY_USER | 设置上级代理服务器的认证用户名。 | 如果上级代理需要认证，则必须设置此项。 |
| BYPASS_ROAM_PROXY_PASS | 设置上级代理服务器的认证密码。 | 如果上级代理需要认证，则必须设置此项。 |
| BYPASS_SNI_CERT_FILE | 指定SNI Bypass功能中用于HTTPS连接的SSL证书文件路径。 | ./ 代表程序所在目录。必须与 BYPASS_SNI_CERT_KEY 配对使用。此处建议使用根CA证书。 |
| BYPASS_SNI_CERT_KEY | 指定SNI Bypass功能中用于HTTPS连接的SSL私钥文件路径。 | ./ 代表程序所在目录。必须与 BYPASS_SNI_CERT_FILE 配对使用。 |
| BYPASS_ROAM_HTTPS_ENABLE | 控制是否使用HTTPS类型的DNS记录来实现漫游功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。这是一种利用DNS记录传递代理信息的高级方法。 |
| BYPASS_ROAM_HTTPS_ALWAYS | 控制是否在任何情况下都返回HTTPS记录。 | 默认值：0 可选值： 0 (否), 1 (是)。仅在 BYPASS_ROAM_HTTPS_ENABLE=1 时有效。 |
| BYPASS_ROAM_HTTPS_PORT | 指定在HTTPS记录中使用的端口号。 | 默认值：443 客户端需要支持并通过此端口连接。 |
| BYPASS_CNAME_ENABLE | 实验性功能开关，控制是否使用CNAME记录进行域名改写。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。可用于CDN加速或域名重定向，但可能不稳定。 |


## **options节点**

| 参数名 | 描述 | 备注 |
| :--- | :--- | :--- |
| OPTIONS_GET_IPV4 | 指定用于自动获取本机公网IPv4地址的服务URL。 | 留空则使用程序内置的默认检测服务。用于在Bypass等功能中正确设置 MY4 值。支持HTTP/HTTPS链接。 |
| OPTIONS_GET_IPV6 | 指定用于自动获取本机公网IPv6地址的服务URL。 | 留空则使用程序内置的默认检测服务。用于在Bypass等功能中正确设置 MY6 值。支持HTTP/HTTPS链接。 |
| OPTIONS_QUERY_DEBUG | 控制是否在控制台或日志中输出详细的DNS查询调试信息。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。用于深入排查DNS查询过程的问题，会产生大量日志。 |
| OPTIONS_LOG_ENABLE | 主开关，控制是否启用日志记录功能。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。必须开启此项，其他日志相关设置才能生效。 |
| OPTIONS_LOG_LEVEL | 设置日志记录的详细程度（级别）。 | 默认值：0 可选值： 0 (Debug), 1 (Info), 2 (Warning), 3 (Error)。数值越大，记录的信息越重要、越少。 |
| INIT_SCRIPT | 指定程序启动时运行的脚本路径。 | 留空则不执行任何脚本。可用于在程序启动前执行自定义初始化操作，如加载模块、设置环境变量等。 |
| IPSORT_PING_ENABLE | 控制是否对解析到的IP地址进行Ping延迟测速，并优先返回延迟低的IP。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用CDN优选时此功能效果更好，但会增加查询延迟。 |
| IPSORT_PING_TIMEOUT | 设置Ping测速的超时时间（毫秒）。 | 默认值：500 建议值介于 100 - 2000 之间。超时后该IP将被视为不可达或高延迟。 |
| IPSORT_DISTANCE_ENABLE | 控制是否启用基于IP地理坐标的排序算法，优先返回离用户更近的IP。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。需要配置 IPSORT_DISTANCE_DB 地理数据库文件。 |
| IPSORT_DISTANCE_DB | 指定IP地理定位数据库文件的路径。 | ./ 代表程序所在目录。此数据库用于将IP地址映射到经纬度坐标，是距离排序的基础。支持 IP2LOCATION-LITE-DB11.BIN（ip2location-go格式）或 GeoLite2-City.mmdb（GeoLite2格式）的数据库文件。 |
| IPSORT_DISTANCE_LATITUDE | 手动设置本地的纬度坐标。 | 留空时，程序将尝试自动获取本地的经纬度。手动设置可避免自动获取不准或失败的问题。 |
| IPSORT_DISTANCE_LONGITUDE | 手动设置本地的经度坐标。 | 留空时，程序将尝试自动获取本地的经纬度。需与 IPSORT_DISTANCE_LATITUDE 成对设置。 |
| HIS_OPEN | 控制是否启用历史记录功能。 | 默认值：1 可选值： 0 (禁用), 1 (启用)。启用后会记录所有DNS查询历史，便于分析和审计。 |
| HIS_ADD_CACHE_TIMEOUT | 控制是否在历史记录中记录因更新缓存而触发的超时查询。 | 默认值：0 可选值： 0 (记录), 1 (不记录)。为避免历史记录被缓存更新请求刷屏，可设置为 1。 |
| HIS_ADD_OTHER | 控制是否在历史记录中记录SOA、NS、MX、TXT等非A/AAAA类型的响应结果。 | 默认值：0 可选值： 0 (不记录), 1 (记录)。保持默认可让历史记录更简洁，专注于IP查询。 |
| COLLECTOR_BYPASS_ENABLE | 实验性功能，控制是否启用SNI与漫游阻断收集器。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。启用后会自动探测IP是否被屏蔽并记录，用于完善Bypass规则。 |
| COLLECTOR_POLLUTE_ENABLE | 实验性功能，控制是否启用DNS污染IP收集器。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。用于自动识别和收集投毒污染的IP地址，帮助优化污染检测规则。 |
| COLLECTOR_BYPASS_SYNC | 实验性功能，控制是否启用同步的阻断收集器。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。注意： 启用后可能造成最高500ms的查询延迟。 |
| COLLECTOR_SNI_ENABLE | 实验性功能，控制是否启用SNI阻断收集器列表。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。如果本机作为下游服务器，应设置为 0。 |
| COLLECTOR_ROAM_ENABLE | 实验性功能，控制是否启用漫游阻断收集器列表。 | 默认值：0 可选值： 0 (禁用), 1 (启用)。用于收集和优化漫游相关的规则。 |
| DDNS_UPDATE_DNS | 指定在执行DDNS更新时，用于解析DDNS服务商域名的DNS服务器地址。 | 默认值：0.0.0.0:53 格式为 ip:port。为确保更新成功，建议设置为一个可靠的DNS。 |
| DDNS_UPDATE_URL | 指定用于更新动态DNS（DDNS）的服务URL，支持常量 {ipv4} 和 {ipv6}。 | 支持配置多个URL，用分隔符（如逗号）分隔。用于在公网IP变化时自动通知DDNS服务商。可在URL中使用 {ipv4} 和 {ipv6} 常量。 |
| DDNS_UPDATE_TIME | 设置DDNS自动更新任务的执行间隔时间（秒）。 | 默认值：3600 (1小时) 设置为 0 则禁用自动更新。有效范围应大于3600秒且小于86400秒（1天），否则使用默认值。 |
| SERVER_DOT_CERT_FILE | 指定DNS-over-TLS (DoT) 服务使用的SSL证书文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOT_CERT_KEY 配对使用。 |
| SERVER_DOT_CERT_KEY | 指定DNS-over-TLS (DoT) 服务使用的SSL私钥文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOT_CERT_FILE 配对使用。 |
| SERVER_DOQ_CERT_FILE | 指定DNS-over-QUIC (DoQ) 服务使用的SSL证书文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOQ_CERT_KEY 配对使用。 |
| SERVER_DOQ_CERT_KEY | 指定DNS-over-QUIC (DoQ) 服务使用的SSL私钥文件路径。 | ./ 代表程序所在目录。必须与 SERVER_DOQ_CERT_FILE 配对使用。 |
| SERVER_DOQ_0RTT | DoQ是否开启0-RTT快速连接。 | 默认值：0 可选值： 0 (不启用), 1 (启用)。启用后可减少连接建立延迟，提升性能。 |
| SYNC_ALLOW | 控制是否允许其他服务器从本机同步数据（如收集器规则、缓存等）。 | 默认值：0 可选值： 0 (不允许), 1 (允许)。 |
| SYNC_SERVER | 设置要主动同步数据的目标服务器地址。 | 格式为 https://xxxx:xx/ 用于将本机的数据（如收集结果）推送到指定的中央服务器。 |
| SYNC_USR | 设置同步目标服务器所需的认证用户名。 | 如果目标服务器需要认证，则必须设置此项。 |
| SYNC_PWD | 设置同步目标服务器所需的认证密码。 | 如果目标服务器需要认证，则必须设置此项。 |

## 配置文件 Config.ini 样例

```ini
# ===============================================================
# server注释
# ---------------------------------------------------------------
[server]
# ===============================================================
# SERVER_UDP_ADDR 服务器UDP地址[支持多地址]
# SERVER_TCP_ADDR 服务器TCP地址[支持多地址]
# SERVER_DOT_ADDR 服务器DoT地址[支持多地址]
# SERVER_DOQ_ADDR 服务器DoQ地址[支持多地址]
# ---------------------------------------------------------------
SERVER_UDP_ADDR            = 0.0.0.0:53
SERVER_TCP_ADDR            = 0.0.0.0:53
SERVER_DOT_ADDR            = 
SERVER_DOQ_ADDR            = 
# ===============================================================
# SERVER_DOH_OPEN 允许DoH服务 [默认0 0=不启用 1=启用]
# SERVER_DOH3_OPEN 允许DoH3服务 [默认0 0=不启用 1=启用]
# SERVER_DOH_INTEGRATED 是否集成到Web服务 [默认0 0=独立端口 1=集成到Web端口]
# SERVER_DOH_URL 自定义DoH_URL 默认/dns-query
# SERVER_DOH_MAIN_WEB_SWITCH 当DoH使用独立路由时是否显示自定义首页内容 [默认0 0=不启用 1=启用]
# SERVER_DOH_MAIN_WEB_PATH 指定的首页目录位置 [默认=./www/html/]
# ---------------------------------------------------------------
SERVER_DOH_INTEGRATED      = 0
SERVER_DOH_OPEN            = 0
SERVER_DOH3_OPEN           = 0
SERVER_DOH_URL             = /dns-query
SERVER_DOH_MAIN_WEB_SWITCH = 1
SERVER_DOH_MAIN_WEB_PATH   = ./www/html/
# ===============================================================
# SERVER_DOH_HTTP_ADDR DoH(HTTP)服务地址 默认0.0.0.0:80
# SERVER_DOH_HTTPS_ADDR DoH(HTTPS)服务地址 默认0.0.0.0:443
# SERVER_DOH_HTTPS_CERT_FILE DoH(HTTPS)使用的证书文件
# SERVER_DOH_HTTPS_CERT_KEY DoH(HTTPS)使用的私钥文件
# SERVER_DOH3_ADDR DoH3服务地址 (UDP)默认0.0.0.0:443
# SERVER_DOH3_CERT_FILE DoH3使用的证书文件
# SERVER_DOH3_CERT_KEY DoH3使用的私钥文件
# SERVER_DOH3_0RTT DoH3是否开启0-RTT [默认0 0=不启用 1=启用]
# SERVER_DOH_PQC_OPEN PQC后量子加密 [默认1 0=不启用 1=启用]
# ---------------------------------------------------------------
SERVER_DOH_HTTP_ADDR       = 0.0.0.0:80
SERVER_DOH_HTTPS_ADDR      = 0.0.0.0:443
SERVER_DOH_HTTPS_CERT_FILE = 
SERVER_DOH_HTTPS_CERT_KEY  = 
SERVER_DOH3_ADDR           = 0.0.0.0:443
SERVER_DOH3_CERT_FILE      = 
SERVER_DOH3_CERT_KEY       = 
SERVER_DOH3_0RTT           = 1
SERVER_DOH_PQC_OPEN        = 1

# ===============================================================
# monitor注释
# ---------------------------------------------------------------
[monitor]
# ===============================================================
# MONITOR_HTTP_OPEN 是否开启HTTP [默认0 0=不启用 1=启用]
# MONITOR_HTTP_ADDR WEB-HTTP控制台地址 IP:PORT [默认0.0.0.0:4380]
# ---------------------------------------------------------------
MONITOR_HTTP_OPEN     = 1
MONITOR_HTTP_ADDR     = 0.0.0.0:5380
# ===============================================================
# MONITOR_HTTPS_OPEN 是否开启HTTPS [默认0 0=不启用 1=启用]
# MONITOR_HTTPS_ADDR WEB-HTTPS控制台地址 IP:PORT [默认0.0.0.0:4380]
# ---------------------------------------------------------------
MONITOR_HTTPS_OPEN    = 0
MONITOR_HTTPS_ADDR    = 0.0.0.0:4380
# ===============================================================
# MONITOR_HTTP3_OPEN 是否开启HTTP3 [默认0 0=不启用 1=启用]
# MONITOR_HTTP3_ADDR HTTP3控制台地址 IP:PORT [默认0.0.0.0:4380]
# ---------------------------------------------------------------
MONITOR_HTTP3_OPEN    = 0
MONITOR_HTTP3_ADDR    = 0.0.0.0:4380
# ===============================================================
# WEB-QUIC是否开启0-RTT [默认0 0=不启用 1=启用]
# WEB控制台账户
# WEB控制台密码
# ---------------------------------------------------------------
MONITOR_HTTP3_0RTT    = 1
MONITOR_AUTH_USER     = admin
MONITOR_AUTH_PASS     = admin
# ===============================================================
# "./"代表程序所在目录位置 此处使用非根CA
# "./"代表程序所在目录位置
MONITOR_CERT_FILE     = ./cert/fullchain.pem
MONITOR_CERT_KEY      = ./cert/privkey.pem
# MAC厂商数据库 "./"代表程序所在目录位置
MONITOR_MAC_VENDOR_DB = ./db/mac.db
# WEB页面调试模式 [默认0 不使用WEB页面调试模式]
MONITOR_DEBUG         = 0
# WEB页面调试模式 WEBUI使用的文件夹
MONITOR_WEB_PATH      = ./www/

# ===============================================================
# dns注释
# ===============================================================
[dns]
# ===============================================================
# POLLUTE_BAIT_LEVEL 是否启用诱饵污染探测 0=不启用 1=启用(诱饵污染探测循环次数) 注: 等于0则不进行诱饵污染探测 所有查询走UPSTREAM_LIST_ABROAD分组
# POLLUTE_BAIT_DNS 诱饵NoneDNS
# POLLUTE_BAIT_TIMEOUT 诱饵污染探测超时 最优介于30-200的值 [默认100]
# POLLUTE_TAIL_LEVEL 使用新的去污染逻辑 TAIL [默认0 不启用]
# POLLUTE_CTCP_LEVEL 使用新的去污染逻辑 CTCP
# POLLUTE_GFW_OPEN 是否使用GFWList方式来鉴别污染 0=不启用 1=启用 [默认0 不启用]
# POLLUTE_GFW_URL 设置的GFWList更新链接
# POLLUTE_IP_OPEN 是否使用污染IP列表来鉴别污染 0=不启用 1=启用 [默认0 不启用]
# ---------------------------------------------------------------
POLLUTE_BAIT_LEVEL          = 0
POLLUTE_BAIT_DNS            = 78.78.78.78
POLLUTE_BAIT_TIMEOUT        = 40
POLLUTE_TAIL_LEVEL          = 0
POLLUTE_CTCP_LEVEL          = 0
POLLUTE_GFW_OPEN            = 1
POLLUTE_GFW_URL             = https://gitlab.com/gfwlist/gfwlist/raw/master/gfwlist.txt
POLLUTE_IP_OPEN             = 1
# ===============================================================
# 查询PTR记录时使用的DNS 一般情况下为路由器IP
UPSTREAM_PTR                = 192.168.1.1
# 上游DNS超时
UPSTREAM_TIMEOUT            = 900
# DNS_CACHE_OPEN 启用缓存 1=使用 0=不使用 [默认1]
# DNS_CACHE_OPTIMIZE 启用乐观缓存 [默认0 不启用]
DNS_CACHE_OPEN              = 1
DNS_CACHE_OPTIMIZE          = 1
# 自动删除过期缓存周期 [当前只在程序重启时删除过期缓存] 259200=3天 604800=7天
DNS_CACHE_DB_DEL            = 259200
# ===============================================================
# DNS_TTL_DYNAMIC 动态缓存TTL 7天604800 3天259200 介于0-16777215 [默认86400]
# DNS_TTL_FIXED 返回的固定TTL值 介于0-86400的值 [默认60]
# DNS_TTL_AUTO_DYNAMIC 自动动态TTL权重 [默认0 不启用] 注:每个权重使用DNS_TTL_WEIGHT_TIME设置
# DNS_TTL_WEIGHT_TIME 自动动态TTL权重单值 [默认5 范围5-3600]
# ---------------------------------------------------------------
DNS_TTL_DYNAMIC             = 300
DNS_TTL_FIXED               = 60
DNS_TTL_AUTO_DYNAMIC        = 1
DNS_TTL_WEIGHT_TIME         = 120
# ===============================================================
# 客户端白名单 [默认1 启用]
# 客户端黑名单 [默认1 启用]
CLIENT_IP_ALLOWED           = 1
CLIENT_IP_BLOCKED           = 1
# ===============================================================
# DNSSEC_OPEN_LEVEL DNSSEC验证级别 0=禁用DNSSEC,1=信任上游,2=本地验证
# DNSSEC_STRICT_LEVEL DNSSEC验证策略 0=宽松,1=严格
# ---------------------------------------------------------------
DNSSEC_OPEN_LEVEL           = 0
DNSSEC_STRICT_LEVEL         = 0
# ===============================================================
# DNS_QUERY_METHOD !DNS运作方式 [0=迭代 1=递归 默认递归]
# ---------------------------------------------------------------
DNS_QUERY_METHOD            = 1
# ===============================================================
# DNS_QUERY_EXTEND 允许扩展查询 允许除A\AAAA\NS\CNAME\SOA\MX以外的查询 1=允许 0=不允许 [默认0 不允许]
# ---------------------------------------------------------------
DNS_QUERY_EXTEND            = 1
# ===============================================================
# DNS_QUERY_CDN_OPTIMIZE 启用CDN优选 [默认0 不启用]
# DNS_QUERY_CDN_OPTIMIZE_DUAL 启用CDN优选返回双栈IP [默认0 不启用 1=启用 0=不启用]
# ---------------------------------------------------------------
DNS_QUERY_CDN_OPTIMIZE      = 0
DNS_QUERY_CDN_OPTIMIZE_DUAL = 0
# ===============================================================
# DNS_QUERY_DOMAIN_BLACK 启用查询域名黑名单列表 [默认0 不启用]
# DNS_QUERY_DOMAIN_BLOCKED 启用查询域名阻断列表 [默认0 不启用]
# ---------------------------------------------------------------
DNS_QUERY_DOMAIN_BLACK      = 1
DNS_QUERY_DOMAIN_BLOCKED    = 1
# ===============================================================
# DNS_QUERY_BLACK_EXTERNAL 启用外部Hosts [默认0 不启用]
# ---------------------------------------------------------------
DNS_QUERY_BLACK_EXTERNAL    = 1
# ===============================================================
# DNS_QUERY_BLACK_GROUP 分组改写文件夹
DNS_QUERY_BLACK_GROUP       = ./group/
# ===============================================================
# DNS_QUERY_IPV4 允许IPv4(1)查询 [默认1 允许]
# DNS_QUERY_IPV6 允许IPv6(28)查询 [默认1 允许]
# DNS_QUERY_HTTPS 允许HTTPS(65)查询 [默认1 允许]
# DNS_QUERY_ANY 允许ANY(255)查询 [默认1 允许]
# ---------------------------------------------------------------
DNS_QUERY_IPV4              = 1
DNS_QUERY_IPV6              = 1
DNS_QUERY_HTTPS             = 1
DNS_QUERY_ANY               = 1
# ===============================================================
# DNS_QUERY_BLACK_IPV4 当启用QUERY_DOMAIN_BLACK 黑名单中的域名改写至指定的IPV4
# DNS_QUERY_BLACK_IPV6 当启用QUERY_DOMAIN_BLACK 黑名单中的域名改写至指定的IPV6
# ---------------------------------------------------------------
DNS_QUERY_BLACK_IPV4        = 0.0.0.0
DNS_QUERY_BLACK_IPV6        = ::
# ===============================================================
# DNS_QUERY_ADD_ECS 使用添加ECS [默认0 关闭 0=不启用ECS 1=启用ECS]
# DNS_QUERY_ECS_SUBNET 自定义ECS子网 [默认空:外网请求时使用客户端子网，内网请求时使用服务器子网]
# ---------------------------------------------------------------
DNS_QUERY_ADD_ECS           = 0
DNS_QUERY_ECS_SUBNET        = 
# ===============================================================
# 支持的上游DNS类型: 详情请移步https://billghifun.github.io/gogdns-docs/
# udp:  udp:// | ip | ip:port
# tcp:  tcp://
# doh:  doh:// | http:// | https://
# dot:  dot:// | tls://
# doq:  doq:// | quic://
# doh3: doh3:// | h3:// | http3://
# 8.8.4.4,[240c::6644]:53,114.114.114.91,223.6.6.100
# https://dns.alidns.com/dns-query
# [2620:119:35::35]:53,[2620:119:53::53]:53,[240c::6644]:53,[240c::6666]:53
# 208.67.222.222,208.67.220.220
# http3://dns.alidns.com/dns-query,http3://dns64.dns.google/dns-query
# quic://dns.alidns.com:853,quic://dns.yuguan.xyz:853
# 114.114.114.114,114.114.115.115
# ---------------------------------------------------------------
# 注: DoH支持通过URL参数referer=[url]或referer=true动态启用Referer头部注入，
# 该参数为非持久性参数，在构建上游HTTP请求时会被逻辑自动过滤，
# 如:doh://xxx.com/dns-query?referer=true
# ---------------------------------------------------------------
# UPSTREAM_LIST_ABROAD 查询上游DNS[全部使用国内DNS有助于解析到更近的IP]
# UPSTREAM_LIST_INTERNAL 无污染组查询上游DNS
# ---------------------------------------------------------------
UPSTREAM_LIST_ABROAD        = 208.67.220.220:443,208.67.222.222:443
UPSTREAM_LIST_INTERNAL      = 114.114.114.114,114.114.115.115

# ===============================================================
# bypass注释
# ===============================================================
[bypass]
# 是否启用本地BypassTool 0=不启用 1=启用 [默认0 不启用]
BYPASS_OPEN              = 0
# 漫游IP[多个以逗号分隔][MY4=使用获取的本机IPv4地址,MY6=使用获取的本机IPv6地址]
BYPASS_ROAM_IP           = 
# SNI域前置分流改写目标地址[多个以逗号分隔]
BYPASS_SNI_IP            = 
# 是否对客户端IP进行本地回环检查 0=不使用 1=使用 [默认1 使用] 本地使用时设为0
BYPASS_LOOPBACK_CHECK    = 0
# 漫游开关 [默认0 不启用]
BYPASS_ROAM_OPEN         = 0
# 启用SNIBypass改写列表 0=不启用 1=启用 [默认0 不启用]
BYPASS_SNI_OPEN          = 0
# 是否记录SNIBypass的debug日志 0=不记录 1=记录 [默认0 不记录]
BYPASS_SNI_LOG           = 1
# 设置本机Bypass服务地址[多个以逗号分隔]
BYPASS_ADDR              = 
# 本地Bypass漫游时使用的Proxy查询DNS
BYPASS_DNS               = 
# 本地Bypass漫游时内部查询是否优先使用解析出的IPV6 [默认0 1=优先使用IPV6]
BYPASS_PREFER_IPV6       = 0
# ===============================================================
# BYPASS_ROAM_PROXY_ADDR 本地Bypass漫游时使用的Proxy地址 x.x.x.x:7891
# BYPASS_ROAM_PROXY_USER 本地Bypass漫游时使用的Proxy用户名
# BYPASS_ROAM_PROXY_PASS本地Bypass漫游时使用的Proxy密码
# ---------------------------------------------------------------
BYPASS_ROAM_PROXY_ADDR   = 
BYPASS_ROAM_PROXY_USER   = 
BYPASS_ROAM_PROXY_PASS   = 
# ===============================================================
# BYPASS_SNI_CERT_FILE "./"代表程序所在目录位置 此处使用根CA
# BYPASS_SNI_CERT_KEY "./"代表程序所在目录位置
# ---------------------------------------------------------------
BYPASS_SNI_CERT_FILE     = ./cert/ca.crt
BYPASS_SNI_CERT_KEY      = ./cert/ca.key
# ===============================================================
# 使用HTTPS记录实现漫游功能开关 1=使用 0=不使用 [默认0]
BYPASS_ROAM_HTTPS_ENABLE = 0
# 在任何情况下都返回HTTPS记录，CFG_ROAM_HTTPS_ENABLE关闭时失效 1=启用 0=不启用 [默认0]
BYPASS_ROAM_HTTPS_ALWAYS = 1
# 指定HTTPS记录使用的端口 [默认443]
BYPASS_ROAM_HTTPS_PORT   = 4443
# 是否使用实验性CNAME改写功能 [0=不使用 1=使用 默认0]
BYPASS_CNAME_ENABLE      = 0

# ===============================================================
# options注释
# ===============================================================
[options]
# ===============================================================
# OPTIONS_GET_IPV4 用于自动获取IPv4
# OPTIONS_GET_IPV6 用于自动获取IPv6
# ---------------------------------------------------------------
OPTIONS_GET_IPV4          = http://ipv4.singapore.test-ipv6.com/ip/
OPTIONS_GET_IPV6          = http://ipv6.singapore.test-ipv6.com/ip/
# OPTIONS_GET_IPV4          = https://v4.myip.la/
# OPTIONS_GET_IPV6          = https://v6.myip.la/
# ===============================================================
# 用于显示请求Debug 0=不启用 1=启用 [默认0 不启用]
OPTIONS_QUERY_DEBUG       = 0
# ===============================================================
# OPTIONS_LOG_ENABLE 记录并写入日志 [默认0] [1=打开 0=关闭]
# OPTIONS_LOG_LEVEL 日志记录级别 0=Debug 1=Info 2=Warning 3=Error
# ---------------------------------------------------------------
OPTIONS_LOG_ENABLE        = 0
OPTIONS_LOG_LEVEL         = 0
# ===============================================================
# 启动时运行脚本
# ---------------------------------------------------------------
INIT_SCRIPT               = 
# ===============================================================
# IPSORT_PING_ENABLE Ping测速 [默认0 关闭]
# IPSORT_PING_TIMEOUT Ping测速超时 [默认500] 介于100-2000
# ---------------------------------------------------------------
IPSORT_PING_ENABLE        = 0
IPSORT_PING_TIMEOUT       = 600
# ===============================================================
# IPSORT_DISTANCE_ENABLE 启用IP坐标系排序
# IPSORT_DISTANCE_DB IP2LOCATION-LITE-DB11.BIN ip2location-go的数据库文件 或 GeoLite2-City.mmdb GeoLite2的数据库文件 "./"代表程序所在目录位置
# ---------------------------------------------------------------
IPSORT_DISTANCE_ENABLE    = 0
IPSORT_DISTANCE_DB        = ./db/IP2LOCATION-LITE-DB11.BIN
# ===============================================================
# IPSORT_DISTANCE_LATITUDE 本地纬度 当不设置时程序会自动获得本地经纬度坐标来使用
# IPSORT_DISTANCE_LONGITUDE 本地经度 当不设置时程序会自动获得本地经纬度坐标来使用
# ---------------------------------------------------------------
IPSORT_DISTANCE_LATITUDE  = 
IPSORT_DISTANCE_LONGITUDE = 
# ===============================================================
# HIS_OPEN 记录历史记录
# HIS_ADD_CACHE_TIMEOUT 当使用缓存时不记录因更新缓存超时的历史记录 0=记录 1=不记录 [默认 0 记录]
# HIS_ADD_OTHER 是否在历史记录中记录SOA\NS\MX\TXT等响应内容 0=不启用 1=启用 [默认0 不启用]
# ---------------------------------------------------------------
HIS_OPEN                  = 1
HIS_ADD_CACHE_TIMEOUT     = 1
HIS_ADD_OTHER             = 1
# ===============================================================
# COLLECTOR_BYPASS_ENABLE 是否启用实验性SNI与漫游鉴别收集器 查询A记录时自动检测IP屏蔽或RST状态并写入记录文件 [0=不使用 1=使用 默认0]
# COLLECTOR_POLLUTE_ENABLE 是否启用实验性受污染IP收集器
# COLLECTOR_BYPASS_SYNC 是否启用同步的实验性SNI与漫游鉴别收集器 [0=不使用 1=使用 默认0] 注：开启后某些情况下会造成最高500ms(以固定设置值为准)的延迟
# COLLECTOR_SNI_ENABLE 是否启用实验性SNI鉴别收集器列表 [0=不使用 1=使用 默认0] 注:当是从服务器时应设置为0不使用
# COLLECTOR_ROAM_ENABLE 是否启用实验性漫游鉴别收集器列表 [0=不使用 1=使用 默认0]
# ---------------------------------------------------------------
COLLECTOR_BYPASS_ENABLE   = 0
COLLECTOR_POLLUTE_ENABLE  = 0
COLLECTOR_BYPASS_SYNC     = 0
COLLECTOR_SNI_ENABLE      = 0
COLLECTOR_ROAM_ENABLE     = 0
# ===============================================================
# DDNS_UPDATE_DNS 用于DDNS自动更新的DNS地址
# DDNS_UPDATE_URL 自动更新DDNS 常量{ipv4}{ipv6}
# DDNS_UPDATE_TIME DDNS自动更新间隔 [默认间隔1小时 设置为0则不自动更新 大于3600小于86400的值,超出范围变为默认值3600]
# ---------------------------------------------------------------
DDNS_UPDATE_DNS           = 0.0.0.0:53
DDNS_UPDATE_URL           = 
DDNS_UPDATE_TIME          = 0
# ===============================================================
# SERVER_DOT_CERT_FILE DoT服务使用的证书
# SERVER_DOT_CERT_KEY DoT服务使用的KEY
# SERVER_DOQ_CERT_FILE DoQ服务使用的证书
# SERVER_DOQ_CERT_KEY DoQ服务使用的KEY
# SERVER_DOQ_0RTT DoQ是否开启0-RTT [默认0 0=不启用 1=启用]
# ---------------------------------------------------------------
SERVER_DOT_CERT_FILE      = ./cert/fullchain.pem
SERVER_DOT_CERT_KEY       = ./cert/privkey.pem
SERVER_DOQ_CERT_FILE      = ./cert/fullchain.pem
SERVER_DOQ_CERT_KEY       = ./cert/privkey.pem
SERVER_DOQ_0RTT           = 1
# ===============================================================
# SYNC_ALLOW 是否允许被同步 [0=不允许 1=允许 默认0]
# SYNC_SERVER 设置被同步的服务器 https://xxxx:xx/
# SYNC_USR 设置被同步的服务器账号
# SYNC_PWD 设置被同步的服务器密码
# ---------------------------------------------------------------
SYNC_ALLOW                = 0
SYNC_SERVER               = 
SYNC_USR                  = admin
SYNC_PWD                  = billghifun
```

<!-- ## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown). -->