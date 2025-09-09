---
title: 常见问题 - Stash使用疑难解答
description: Stash常见问题解答，包括安装、配置、使用等各方面问题的详细解决方案。
---

# 常见问题

## 安装和下载

### Q: 在App Store找不到Stash怎么办？

**A: 可能的原因和解决方案：**

1. **地区限制**
   - 检查Apple ID的国家/地区设置
   - Stash在大部分地区都有上架
   - 如需要可以更换Apple ID地区

::: warning 注意
-   需要使用境外 Apple ID 才能下载。以下是公益共享 Apple ID 网站推荐：
    
    -   [https://idshare001.me/applego.html](https://idshare001.me/applego.html)
    -   [https://id001.me/applego.html](https://id001.me/applego.html)
-   如共享账号无法使用，建议自行购买外区带有 Loon 的账号，**以后可以永久使用**。

    推荐商家：
    
    -   [水果商店](https://appleshop.win)
:::

2. **搜索问题**
   - 尝试搜索"Stash Networks"
   - 使用完整的应用名称搜索
   - 清除App Store缓存后重试

3. **系统版本**
   - 确保iOS版本≥13.0
   - 更新到最新系统版本

### Q: 下载后无法安装或打开？

**A: 解决步骤：**

1. **检查存储空间**
   - 确保有足够的存储空间（至少100MB）
   - 清理不必要的文件

2. **重启设备**
   - 完全关机后重新开机
   - 清除系统缓存

3. **重新下载**
   - 删除已下载的应用
   - 重新从App Store下载

4. **检查网络**
   - 确保网络连接稳定
   - 尝试使用不同网络

### Q: 购买后如何在其他设备上下载？

**A: 使用相同Apple ID：**

1. **iPhone/iPad**
   - 使用购买时的Apple ID登录
   - 在App Store的"已购项目"中找到Stash
   - 点击下载图标

2. **Mac**
   - 在Mac App Store中搜索Stash
   - 显示"已购买"即可免费下载

3. **家庭共享**
   - 启用家庭共享功能
   - 家庭成员可共享已购买的应用

## 基础配置

### Q: 首次启动需要做什么设置？

**A: 基础设置步骤：**

1. **授予权限**
   - 允许网络权限（必须）
   - 允许通知权限（可选）
   - 安装VPN配置文件

2. **基础配置**
   ```yaml
   # 最简配置示例
   port: 7890
   socks-port: 7891
   allow-lan: false
   mode: rule
   log-level: info
   ```

3. **导入配置**
   - 从机场获取订阅链接
   - 或使用本地配置文件
   - 测试连接是否正常

### Q: 如何导入配置文件？

**A: 多种导入方式：**

1. **URL导入**
   - 复制订阅链接
   - 在Stash中选择"从URL导入"
   - 粘贴链接并确认

2. **本地文件**
   - 将YAML文件保存到设备
   - 使用"导入本地文件"功能
   - 选择对应文件

3. **扫码导入**
   - 使用扫码功能
   - 扫描配置二维码
   - 自动导入配置

4. **剪贴板导入**
   - 复制配置内容到剪贴板
   - 在Stash中选择"从剪贴板导入"

### Q: 配置文件格式有什么要求？

**A: YAML格式要求：**

1. **语法规范**
   - 使用标准YAML语法
   - 注意缩进（使用空格，不用Tab）
   - 字符串包含特殊字符时需要引号

2. **必需字段**
   ```yaml
   port: 7890          # HTTP代理端口
   socks-port: 7891    # SOCKS代理端口
   mode: rule          # 运行模式
   ```

3. **常见错误**
   - 缩进错误
   - 缺少必需字段
   - 特殊字符未转义
   - 端口冲突

## 连接问题

### Q: 无法连接到代理服务器？

**A: 排查步骤：**

1. **检查代理信息**
   - 确认服务器地址正确
   - 检查端口号
   - 验证密码和加密方式

2. **测试网络连接**
   - 使用"延迟测试"功能
   - 尝试不同节点
   - 检查本地网络状态

3. **检查配置**
   ```yaml
   # 检查代理配置示例
   proxies:
     - name: "测试节点"
       type: ss
       server: example.com
       port: 443
       cipher: aes-256-gcm
       password: "your-password"
   ```

4. **防火墙设置**
   - 检查本地防火墙
   - 确认端口未被占用
   - 尝试更换端口

### Q: 连接成功但无法上网？

**A: 可能原因：**

1. **DNS问题**
   ```yaml
   # 配置可靠的DNS
   dns:
     enable: true
     nameserver:
       - 8.8.8.8
       - 1.1.1.1
   ```

2. **规则配置**
   - 检查规则是否正确
   - 确认MATCH规则存在
   - 验证代理组配置

3. **系统代理**
   - 确认系统代理已启用
   - 检查代理端口设置
   - 重启网络服务

### Q: 经常断线重连？

**A: 优化建议：**

1. **网络稳定性**
   - 检查WiFi信号强度
   - 尝试使用移动网络
   - 更换网络环境测试

2. **配置优化**
   ```yaml
   # 增加超时时间
   timeout: 5000
   # 启用TCP快速打开
   tcp-fast-open: true
   ```

3. **节点选择**
   - 选择延迟较低的节点
   - 避免使用过载节点
   - 定期更新节点信息

## 功能使用

### Q: 如何启用HTTPS抓包？

**A: 详细步骤：**

1. **安装证书**
   - 在Stash中生成CA证书
   - 安装到系统证书存储
   - 在"设置" > "通用" > "关于本机" > "证书信任设置"中信任

2. **启用抓包**
   ```yaml
   # 配置HTTP抓包
   http:
     enable: true
     port: 8080
   ```

3. **配置过滤**
   ```yaml
   # 只抓包特定域名
   http:
     capture:
       - "*.example.com"
     skip:
       - "*.local"
   ```

### Q: JavaScript脚本如何使用？

**A: 脚本配置：**

1. **基础脚本**
   ```javascript
   // 请求处理
   function onRequest(request) {
     console.log('Request:', request.url);
     return request;
   }
   
   // 响应处理
   function onResponse(response) {
     console.log('Response:', response.status);
     return response;
   }
   ```

2. **配置绑定**
   ```yaml
   script:
     code: |
       // 脚本代码
     # 绑定到特定规则
   ```

3. **调试技巧**
   - 使用console.log输出调试信息
   - 在"日志"页面查看输出
   - 逐步测试脚本功能

### Q: 如何配置分流规则？

**A: 规则配置示例：**

1. **基础分流**
   ```yaml
   rules:
     # 国内直连
     - GEOIP,CN,DIRECT
     - DOMAIN-SUFFIX,baidu.com,DIRECT
     
     # 国外代理
     - DOMAIN-SUFFIX,google.com,PROXY
     - GEOIP,US,PROXY
     
     # 默认规则
     - MATCH,PROXY
   ```

2. **高级分流**
   ```yaml
   rules:
     # 广告拦截
     - DOMAIN-KEYWORD,ad,REJECT
     - DOMAIN-SUFFIX,doubleclick.net,REJECT
     
     # 流媒体分流
     - DOMAIN-SUFFIX,netflix.com,美国节点
     - DOMAIN-SUFFIX,youtube.com,香港节点
     
     # 应用分流
     - PROCESS-NAME,telegram,新加坡节点
   ```

## 性能优化

### Q: Stash运行缓慢怎么办？

**A: 优化方案：**

1. **减少日志输出**
   ```yaml
   log-level: warning  # 或 error
   ```

2. **优化规则**
   - 减少不必要的规则
   - 将常用规则放在前面
   - 使用高效的匹配方式

3. **内存管理**
   - 定期重启应用
   - 清理缓存数据
   - 关闭不必要的功能

### Q: 网络速度慢如何优化？

**A: 速度优化：**

1. **节点选择**
   - 选择延迟低的节点
   - 使用负载均衡
   - 定期测试节点速度

2. **协议优化**
   ```yaml
   # 启用TCP优化
   tcp-fast-open: true
   # 调整并发连接数
   ```

3. **DNS优化**
   ```yaml
   dns:
     enable: true
     cache-size: 1000
     nameserver:
       - 223.5.5.5  # 使用快速DNS
   ```

### Q: 电池消耗过快？

**A: 省电设置：**

1. **减少后台活动**
   - 关闭不必要的监控
   - 减少日志记录
   - 优化刷新频率

2. **配置优化**
   ```yaml
   # 增加检测间隔
   proxy-groups:
     - name: "自动选择"
       type: url-test
       interval: 600  # 10分钟检测一次
   ```

3. **功能控制**
   - 关闭实时统计
   - 减少抓包范围
   - 使用低功耗模式

## 错误解决

### Q: 出现"配置文件错误"提示？

**A: 错误排查：**

1. **语法检查**
   - 使用YAML验证工具
   - 检查缩进是否正确
   - 确认特殊字符已转义

2. **字段验证**
   - 检查必需字段是否存在
   - 验证字段值是否有效
   - 确认端口号未冲突

3. **逐步调试**
   - 使用最简配置测试
   - 逐步添加配置项
   - 定位具体错误位置

### Q: 提示"网络权限被拒绝"？

**A: 权限设置：**

1. **iOS设置**
   - "设置" > "通用" > "VPN与设备管理"
   - 找到Stash配置文件
   - 确认已信任

2. **应用权限**
   - "设置" > "隐私与安全性" > "本地网络"
   - 确认Stash已启用

3. **重新授权**
   - 删除VPN配置
   - 重新安装配置文件
   - 重新授予权限

### Q: 某些应用无法使用代理？

**A: 兼容性处理：**

1. **应用配置**
   - 检查应用是否支持系统代理
   - 尝试手动配置代理
   - 使用应用内代理设置

2. **规则调整**
   ```yaml
   # 为特定应用配置规则
   rules:
     - PROCESS-NAME,app-name,DIRECT
     - DOMAIN-SUFFIX,app-domain.com,PROXY
   ```

3. **网络模式**
   - 尝试TUN模式
   - 调整路由规则
   - 检查应用网络权限

## 高级问题

### Q: 如何备份和恢复配置？

**A: 备份方案：**

1. **导出配置**
   - 在配置页面选择"导出"
   - 保存到文件或云存储
   - 记录重要设置

2. **云端同步**
   - 使用iCloud同步
   - 第三方云存储
   - 定期备份配置

3. **恢复配置**
   - 重新导入配置文件
   - 检查配置完整性
   - 测试功能正常

### Q: 多设备如何同步配置？

**A: 同步方法：**

1. **订阅链接**
   - 使用相同订阅链接
   - 定期更新配置
   - 保持版本一致

2. **配置共享**
   - 导出配置文件
   - 通过AirDrop或云存储共享
   - 在其他设备导入

3. **自动同步**
   ```yaml
   # 配置自动更新
   subscribe:
     auto-update: true
     interval: 86400  # 24小时
   ```

### Q: 如何监控网络使用情况？

**A: 监控方法：**

1. **内置统计**
   - 查看"统计"页面
   - 监控流量使用
   - 分析连接状态

2. **详细日志**
   ```yaml
   log-level: debug
   # 启用详细日志记录
   ```

3. **第三方工具**
   - 系统网络监控
   - 专业网络分析工具
   - 流量统计应用

## 技术支持

### 获取帮助的方式

1. **官方渠道**
   - 📧 邮件: support@stash.ws
   - 🌐 官网: https://stash.ws
   - 📖 文档: [使用教程](/tutorial.html)

2. **社区支持**
   - GitHub Issues
   - 用户论坛
   - 社交媒体群组

3. **提交问题时请提供**
   - 设备型号和系统版本
   - Stash版本号
   - 详细错误描述
   - 相关日志信息
   - 配置文件（去除敏感信息）

### 常用诊断命令

```yaml
# 诊断配置示例
log-level: debug

# 启用详细日志
http:
  enable: true
  port: 8080
  
# 网络测试
proxy-groups:
  - name: "测试组"
    type: url-test
    url: 'http://www.gstatic.com/generate_204'
    interval: 60
```

---

更多有关软件的问题可查看 [官网文档](https://stash.wiki)。

::: tip 🎉 节点推荐
- 🚀 [Cyberguard: 解锁Netflix/Hbo/Disney+/Dazn等流媒体,18.00元/月](https://a.suola.link/cyberguard)<br>
- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://a.suola.link/youxinyun)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://a.suola.link/erwan)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://a.suola.link/tnt)<br>
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://a.suola.link/mojie)<br>
- 🚀 [宝可梦星云：新用户首单：9折优惠码：9999，低至5.9/月 ](https://a.suola.link/pokemon)<br>
- 🚀 [NanoCloud: 绑定TG机器人每天领取免费流量，月付最低1元/月](https://a.suola.link/nanocloud)<br>
- 🚀 [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://a.suola.link/feimao)<br>
- 🚀 [疾风云：包年 6.9折 优惠码: jf2025](https://a.suola.link/jifeng)<br>
- 🚀 [闪狐云：不限速，不限设备。高速专线。20元/月](https://a.suola.link/shy)
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::