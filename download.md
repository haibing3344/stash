---
title: Stash下载 - 获取最新版本的网络工具
description: 下载Stash最新版本，支持iOS、macOS、tvOS平台。获取官方下载链接和安装教程。
---

# Stash下载

## 官方下载渠道


::: warning 注意

- Stash只能使用非大陆区苹果 Apple Store 下载，推荐使用美区 Apple ID 登录后在美区 Apple Store 下载，自己动手注册即可，无须付费购买账户，详见 ①[2025最新 Apple ID 注册教程，5分钟创建一个属于自己美区Apple ID](/appleidregist.md) ②[苹果美区Apple ID注册教程](/appleid.md)。

- 如果嫌注册麻烦，可以购买已经购买Stash的成品苹果账号，只需一杯奶茶的钱。

推荐商家：

- [水果商店](https://applego.idbb.me)
:::

### iOS版本

**App Store下载**（推荐）
- 🍎 [App Store官方链接](https://apps.apple.com/app/stash/id1596063349)
- 📱 支持iOS 13.0及以上版本
- 💰 价格：3.99美金，内购解锁高级功能
- 🔄 自动更新，确保获得最新功能

**系统要求**
- iOS 13.0或更高版本
- iPhone、iPad、iPod touch兼容
- 需要约50MB存储空间

### macOS版本

**Mac App Store下载**
- 🖥️ [Mac App Store链接](https://apps.apple.com/app/stash/id1596063349)
- 💻 支持macOS 10.15 (Catalina)及以上版本
- 🔧 原生Apple Silicon和Intel处理器支持

**系统要求**
- macOS 10.15或更高版本
- 需要约100MB存储空间
- 支持M1/M2芯片和Intel处理器

### tvOS版本

**Apple TV App Store**
- 📺 支持Apple TV第四代及以上
- 🎮 支持Siri Remote操作
- 🏠 完美融入Apple TV生态

## 安装步骤

### iOS设备安装

1. **打开App Store**
   - 在iPhone或iPad上打开App Store应用

2. **搜索Stash**
   - 在搜索栏输入"Stash"
   - 选择由"Stash Networks"开发的应用

3. **下载安装**
   - 点击"获取"按钮
   - 使用Face ID、Touch ID或密码确认下载
   - 等待下载和安装完成

4. **首次启动**
   - 打开Stash应用
   - 按照引导完成初始设置
   - 授予必要的网络权限

### macOS设备安装

1. **打开Mac App Store**
   - 在Mac上打开App Store应用

2. **搜索并下载**
   - 搜索"Stash"
   - 点击"获取"进行下载

3. **安装配置**
   - 下载完成后自动安装
   - 首次运行需要授予网络扩展权限
   - 在"系统偏好设置" > "网络" > "高级" > "代理"中配置

## 版本信息

### 最新版本特性

- ✨ **全新界面设计** - 更加直观易用的用户界面
- 🚀 **性能优化** - 更快的启动速度和更低的内存占用
- 🔧 **增强功能** - 新增多项网络调试工具
- 🐛 **问题修复** - 修复已知问题，提升稳定性

### 更新日志

#### 3.0.0
#### 新增
- 支持 ShadowSocks2022 协议
- 支持 ShadowTLS
- 支持 AND、OR、NOT 逻辑规则
- 新增 DOMAIN-WILDCARD 规则
- 新增 DOMAIN-REGEX 规则
- 新增 NETWORK 规则，可选值 tcp, udp
- 新增 PROTOCOL 规则，可选值 TCP, HTTP, HTTPS, UDP, QUIC
- 新增 URL-REGEX 规则
- 新增 USER-AGENT 规则
- 新增 body-rewrite 重写，支持：
  - request-jq, request-replace-regex, request-json-replace, request-json-add, request-json-del
  - response-jq, response-replace-regex, response-json-replace, response-json-add, response-json-del
- 支持嗅探 TLS Client Hello，获取 SNI 域名
- 在发起 UDP 连接时，现在会尝试使用目标代理发起 DNS 查询以确定目的地址的 IP
- 支持嗅探 QUIC / HTTP3
- 连接页现在能展示更详细的 TCP / UDP 协议信息
- DoH 和 DoH3 支持配置 UserAgent
- IP 信息提供商新增 BGP.Tools
- 重写支持读取 zstd 压缩算法
- 可视化编辑：
  - 新增 reject-drop
  - 支持修改 url-rewrite、header-rewrite、body-rewrite
  - 支持修改脚本
  - 支持长按复制图标 URL
### 优化
- 大幅优化耗电，尤其时在低负载场景下的功耗
- 优化 QUIC 嗅探
- 优化大量远程资源更新
- 优化 UDP 高并发下的内存使用
- 优化内存池分配策略
- 优化可视化编辑长文本显示
- 优化 ECH 实现
#### 修复
- 修复图标第二次导入可能会异常的问题
- 修复可视化编辑排序的问题

## 常见问题

### 下载相关

**Q: 为什么在App Store找不到Stash？**
A: 请确保您的设备地区设置正确，Stash在大部分地区的App Store都有上架。

**Q: 下载速度很慢怎么办？**
A: 建议在WiFi环境下下载，或者稍后重试。

**Q: 安装后无法打开怎么办？**
A: 请检查设备系统版本是否符合要求，并尝试重启设备。

### 兼容性问题

**Q: 支持哪些iOS版本？**
A: Stash支持iOS 13.0及以上版本。

**Q: 是否支持iPad？**
A: 是的，Stash完全支持iPad，并针对大屏幕进行了优化。

**Q: Apple Silicon Mac是否支持？**
A: 完全支持，包括M1、M2等Apple Silicon芯片。

## 技术支持

如果您在下载或安装过程中遇到问题，请：


1. 📖 **查看文档**: [使用教程](/tutorial.md)
2. ❓ **常见问题**: [FAQ页面](/faq.md)

---

*下载Stash，开启您的网络调试之旅！*

::: tip 🎉 节点推荐

- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://www.优信云.com/#/register?code=JRtE5uIV)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://erwan6.net/auth/register?code=BoObCd)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://haibing822.tntvipaff.cc/#/register?code=GtjJVgml)<br>
- [小旋风：IPLC专线高速稳定！8元/月起](https://cinb01.xxfaff.cc/#/register?inviteCode=80C209ADC772)<br>
- [大哥云：年付低至7元/月，4年稳定老牌机场](https://ca01.dgy01.cc/#/register?code=JSSN0WQ9)<br>
- [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://fchb1188.fcvipaff.cc/register?aff=X1vZd2wf)<br>
- [疾风云：包年 6.9折 优惠码: jf2025](https://homes.tr25.cn?code=ReCm)
- [闪狐云：不限速，不限设备。高速专线。20元/月](https://inv02.ffaff.cc/register?aff=WQApz2pv)
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::