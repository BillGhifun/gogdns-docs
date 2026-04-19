# 安装

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->

**请从 [**此处**](https://github.com/BillGhifun/gogdns-update/releases) 获取GOGDNS的最新版本。**

## 程序目录结构

<!-- gogdns/ *根目录*   
├── config/ *改写配置文件*   
├── db/ *数据库*   
├── group/ *分组改写列表*   
├── www/ *前端*   
├── cert/ *证书文件夹*   
├── Config.ini *程序配置文件*   
└── gogdns *主程序*    -->

| 名称 | 功能 |
|------|:----:|
| `gogdns` | *主程序* |
| `workstation/` | *工作目录* |
| `workstation/db/` | *数据库* |
| `workstation/www/` | *网页文件* |
| `workstation/cert/` | *证书* |
| `workstation/group/` | *分组列表* |
| `workstation/config/` | *规则* |
| `workstation/Config.ini` | *程序配置文件* |


## Windows

直接执行二进制程序。

## Linux

直接执行二进制程序。

## Docker Cli

```sh
docker run -d \
  --name gogdns \
  --restart unless-stopped \
  --network host \
  --cap-add=NET_BIND_SERVICE \
  --cap-add=NET_ADMIN \
  -e TZ=Asia/Shanghai \
  -e GOGDNS_BASE_PATH=/gogdns/workstation \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v /opt/gogdns:/gogdns/workstation \
  gogdns
```

参数详细说明：  
-d: 后台运行容器。  
--network host: 使用宿主机网络模式。这对 DNS 服务至关重要，不仅能提升性能，还能确保获取到真实的客户端请求 IP（避免 NAT 转换导致日志全显示为网关 IP）。  
--cap-add=NET_BIND_SERVICE: 赋予容器权限以绑定宿主机的低位端口（如 UDP/TCP 53 端口）。  
--cap-add=NET_ADMIN: 赋予网络管理权限（为了满足 DNS 服务的进阶网络需求）。  
-v /var/run/docker.sock:/var/run/docker.sock:ro: 允许程序读取宿主机的容器状态（以只读方式），以便实现自动化的 DNS 解析。  
-v /opt/gogdns:/gogdns/workstation: 将宿主机的/opt/gogdns目录挂载到容器内，使配置文件和日志在容器重启或删除后不会丢失。

## Docker Cli

创建文件docker-compose.yml

```yaml
version: "3.8"

services:
  gogdns:
    image: billghifun/gogdns:latest  # 镜像名称
    container_name: gogdns  # 容器名称
    restart: unless-stopped  # 自动重启
    # 权限优化：精简 Capability
    cap_add:
      - NET_BIND_SERVICE  # 网络管理权限 允许绑定 53 低位端口
      - NET_ADMIN         # 如果不需要在容器内修改宿主机路由表，可以尝试去掉 NET_ADMIN 以增强安全性

    # 网络模式
    network_mode: host    # DNS 服务使用 host 模式性能最高，且避免了 NAT 转换带来的源 IP 丢失

    # 环境变量
    environment:
      - TZ=Asia/Shanghai     # 推荐通过环境变量传递时区，配合 Dockerfile 中的 tzdata
      - GOGDNS_BASE_PATH=/gogdns/workstation    # 环境变量设置基础路径

    # 存储卷优化
    volumes:
      # Docker 守护进程访问
      - /var/run/docker.sock:/var/run/docker.sock:ro  # 建议设为只读 (ro)
      
      # 数据目录映射
      # 注意：宿主机路径建议使用绝对路径/path/gogdns
      # 需要用户自行确认目录/path/gogdns存在
      - /path/gogdns:/gogdns/workstation
```
运行
```
docker-compose up -d
```

## OpenWRT

参见[OpenWrt安装gogdns](./main-openwrt-ipk)