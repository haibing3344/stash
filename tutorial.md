---
title: Stash使用教程 - 从入门到精通
description: 详细的Stash使用教程，包括基础配置、高级功能、脚本编写等内容。帮助您快速掌握Stash的强大功能。
---

# Stash 从入门到精通

[Stash](/ "Stash") 是 iOS 系统即苹果手机系统及 macOS 即苹果电脑系统下的代理软件客户端，可完美兼容Clash节点订阅地址，功能强大且支持多种代理协议，如 Direct、HTTP、Hysteria、Hysteria2、Shadowsocks (SS)、ShadowsocksR (SSR)、Snell、Socks5、Trojan、TUIC、V2Ray、WireGuard、Xray 等代理协议。通过本文所掌握的技巧，能快速方便配置代理协议进行代理访问。

![Stash 从入门到精通](/assets/tutorial/385d62e907ac11a361241982c40967c7.jpeg)



## 简介

Stash 是一款 iOS/tvOS/macOS 平台基于规则的多协议代理客户端，完全兼容 Clash Premium 配置，支持 Rule Set 规则、按需连接、SSID Policy Group、MitM、HTTP 嗅探、JavaScript 脚本改写等丰富特性，是 Clash 规则在 iOS 平台的最佳选择。

## 界面预览

![Stash for iOS 界面预览](/assets/tutorial/54aa8fdd3386bf287bab0066ebdf5b0a.jpeg)

iOS 界面预览

## Stash 下载

### 官网下载

**Stash官网**下载地址：[https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349](https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349) ，Stash只能使用非大陆区苹果 Apple Store 下载，推荐使用美区 Apple ID 登录后在美区 Apple Store 下载，自己动手注册即可，无须付费购买账户，详见 ①[2025最新 Apple ID 注册教程，5分钟创建一个属于自己美区Apple ID](/appleidregist.md) ②[苹果美区Apple ID注册教程](/appleid.md)。

::: warning 注意
Stash 为付费软件，需使用美区 Apple ID 登录后在美区 App Store 下载，如果嫌注册麻烦，可以购买已经购买Stash的成品苹果账号，只需一杯奶茶钱。

推荐商家：

- [水果商店](https://appleshop.win)
:::

![Stash 使用教程『从入门到精通』](/assets/tutorial/4df19ed4f25ced389fda2227df0a5b5d.png)

### 购买价格

| 区域 | 价格 | 直达 |
| --- | --- | --- |
| 美区 App Store | USD 3.99 | [美区 App Store 下载 Stash](https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349) |
| 港区 App Store | HKD 32.00 | [港区 App Store 下载 Stash](https://apps.apple.com/hk/app/stash/id1596063349) |

不同区域应用商店购买 Stash 价格

## 安装教程

直接使用外区 Apple ID 登录 App Store 后，使用搜索功能找到软件直接购买下载安装即可，如下图所示。

![Stash App Store 购买下载安装界面](/assets/tutorial/457aaf8ecc6c60f1b89cd650b7974c8a.jpeg "Stash App Store 购买下载安装界面")

App Store 购买下载安装界面

## 节点

节点即大多数科学上网客户端软件中的服务器，在使用之前，首先需要添加一个 Stash 节点 即服务端才能使用代理上网功能，更多节点可至本站[机场推荐](airport.md)购买。

### 免费节点

由于软件支持 Direct、HTTP、Hysteria、Hysteria2、Shadowsocks (SS)、ShadowsocksR (SSR)、Snell、Socks5、Trojan、TUIC、V2Ray、WireGuard、Xray 等代理协议，如需免费节点可以使用搜索引擎搜索。

### 收费节点

免费节点资源少或者觉得免费节点不稳定的话可以考虑购买收费节点。推荐 [**机场推荐**](/airport.md)，支持 Shadowsocks 及 V2Ray 协议，并且多个数据中心及套餐可选。

技术小白建议购买机场，无需编写配置文件，直接导入节点订阅地址链接即可使用，机场推荐 [**机场推荐**](/airport.md) **单击此处前往，套餐低至10元/月（稳定、低延迟，支持小白一键直连）**

### 自己搭建节点

如果对稳定性要求高且有一定的技术基础，推荐自己搭建节点，速度有保证且安全性也最高。

## 配置文件

在使用之前，确认已经获得了节点订阅地址或者托管的配置文件，有三种方式可以导入配置文件，分别是从 URL 下载、扫描 QRcode 下载、从文件导入。

### 从 URL 下载

软件支持**Stash订阅链接**、**Clash订阅链接**直接导入，目前最简单方便的就是从 URL 下载导入配置文件。

点击软件最底部`设置`选项卡进去设置页面，点击`配置文件`，如下图所示：

![Stash 配置文件](/assets/tutorial/a6484699c0564e5aedb8cb106d2342ab.jpeg "Stash 配置文件")

配置文件

在配置列表页面，点击`从URL下载`，如下图所示：

![Stash 使用教程『从入门到精通』](/assets/tutorial/f6ab249ad247102e8e8803837df360af.png "Stash 使用教程『从入门到精通』")

接着直接在弹出的窗口中输入**节点订阅链接**即可，如下图所示：

![Stash 从URL下载输入配置文件地址](/assets/tutorial/8dde891fada9020b9ee14ecee7b02d2a.jpeg "Stash 从URL下载输入配置文件地址")

从URL下载输入配置文件地址

### 扫描 QRcode 下载

软件支持扫描二维码导入节点，在配置列表页面，点击`扫描 QRcode 下载`，如下图所示：

![Stash 导入配置列表扫描QRcode下载](/assets/tutorial/23f67c53de11eeff6044c99acef5ec73.jpeg "Stash 导入配置列表扫描QRcode下载")

导入配置列表扫描QRcode下载

### 从文件导入

软件支持从配置文件导入节点，在配置列表页面，点击`从文件中导入`，如下图所示：

![Stash 使用教程『从入门到精通』](/assets/tutorial/85bf27a9897531d6e61fd0a9d5048826.png "Stash 使用教程『从入门到精通』")

### 成功导入配置

在通过以上三种方法成功导入配置之后，可以在配置列表页面看到添加的配置文件，点击选择该配置文件，如下图所示：

![Stash 成功导入配置文件](/assets/tutorial/15805e2f3d1949c297f545814094c6d6.jpeg "Stash 成功导入配置文件")

成功导入配置文件

## 使用教程

### 启动代理

在成功添加导入配置文件并选择配置文件之后，点击软件主最底部`首页`选项卡，可以看到最左上角已启用刚刚添加的配置文件，直接点击右边的`启动`按钮即可启用代理，如下图所示：

![Stash 启动代理](/assets/tutorial/32c09f5cc5b3e91b98be81dab722ce8b.jpeg "Stash 启动代理")

启动代理

### 出站模式

在软件`首页`选项卡，可以在最顶部看到出站模式，默认为规则模式，在成功启动并连接代理服务器后，直接点击`出站模式`就可以进行切换，如下图所示：

![Stash 切换出站模式](/assets/tutorial/efa7f19f9dd1864a637aeedfee24e1c1.jpeg "Stash 切换出站模式")

切换出站模式

软件一共支持三种出站模式，分别是规则模式、全局模式、直连模式。

-   规则模式：所有请求根据配置文件规则进行分流
-   全局模式：所有请求直接发往代理服务器
-   直连模式：所有请求直接发往目的地，即不使用代理

全局模式可能会导致国内流量也走代理访问，除了网络会变慢外，还会消耗套餐流量。规则模式的好处就是区分国内国外的流量只有在规则内的国外网站才会走代理，这样即不影响国内访问速度，又节省套餐流量，所以如果没有什么特别的需求，一般选择 `规则模式` 即可。

### 切换代理

点击软件最底部菜单`策略组`选项卡，可以看到有很多节点，点击任意节点即可切换代理节点服务器，如下图所示：

![Stash 切换代理](/assets/tutorial/389ee35916d7b7b4883fc33ed1fa5bac.jpeg "Stash 切换代理")

切换代理

## 常见问题

### 支持哪些协议？

支持Direct、HTTP、Hysteria、Hysteria2、Shadowsocks (SS)、ShadowsocksR (SSR)、Snell、Socks5、Trojan、TUIC、V2Ray、WireGuard、Xray等代理协议。

更多有关软件的问题可查看 [官网文档](https://stash.wiki)。

::: tip 🎉 节点推荐
- 🚀 [Cyberguard: 解锁Netflix/Hbo/Disney+/Dazn等流媒体,18.00元/月](https://www.cyberguard.best/#/register?code=XsreC0T5)<br>
- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://www.优信云.com/#/register?code=JRtE5uIV)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://erwan6.net/auth/register?code=BoObCd)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://haibing822.tntvipaff.cc/#/register?code=GtjJVgml)<br>
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://mojie.app/#/register?code=sSdtPtLo)<br>
- 🚀 [宝可梦星云：新用户首单：9折优惠码：9999，低至5.9/月 ](https://love.521pokemon.com/register?code=56ERkkxp)<br>
- 🚀 [NanoCloud: 绑定TG机器人每天领取免费流量，月付最低1元/月](https://edu.uodoo.bid/auth/register?code=JMiOQDHf)<br>
- 🚀 [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://fchb1188.fcvipaff.cc/register?aff=X1vZd2wf)<br>
- 🚀 [疾风云：包年 6.9折 优惠码: jf2025](https://homes.tr25.cn?code=ReCm)<br>
- 🚀 [闪狐云：不限速，不限设备。高速专线。20元/月](https://inv02.ffaff.cc/register?aff=WQApz2pv)
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::