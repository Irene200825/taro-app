# 使用Taro3 + Vue3 + TypeScript + nutui组件库 + Pinia状态管理器 开发

***

> 正在开发中，计划开发一个工具类微信小程序

## 页面功能点
- [x] mock模拟数据
- [x] Vue3 + TypeScript 
- [x] 接口请求
- [x] 底部tab配置
- [x] 页面跳转
- [x] 用户头像昵称获取和更新
- [x] nutui组件库使用
- [ ] 下拉刷新
- [ ] 触底更新
- [ ] 获取手机号登录
- [ ] 跳转到地理位置
- [ ] Pinia状态管理器
  


页面图片
<div>
  <img src=./images/main.png  width="250"/>
  <img src=./images/my.png  width="250"/>
</div>

***
## 如何使用
1.查看node环境，确保在12.0.0版本以上,推荐使用nvm管理node
```
node --version
```
2.克隆项目
```
git clone xxxx
```
3.进入项目并安装依赖
```
cd MYApp
npm install
```
4.编译成微信小程序
```
npm dev:weapp
```
5.打开微信开发者工具，项目目录指向dist/weapp目录，使用测试AppId
***
## 目录文件说明

config目录：编译配置

src/app.config.js：[全局配置](https://taro-docs.jd.com/taro/docs/app-config)，页面路径列表、全局的默认窗口表现、底部tab栏的表现、分包结构配置
src/app.less：项目总通用样式
src/app.ts：项目入口文件

src/pages：页面目录
页面/index.config.ts：[页面配置](https://taro-docs.jd.com/taro/docs/page-config),可以对页面导航等进行配置
页面/index.less：页面样式
页面/index.vue：页面文件

project.config.json：[不同小程序项目配置](https://taro-docs.jd.com/taro/docs/project-config)

***
## 组件

Taro 以 微信小程序组件库 为标准，结合 jsx 语法规范，定制了一套自己的组件库规范。[参考链接](https://taro-docs.jd.com/taro/docs/components-desc)
本项目使用nutui的组件库，[参考链接](https://nutui.jd.com/3x/#/starttaro)

组件事件：组件的事件传递都要以 on 开头。在微信小程序中 bind 开头这样的用法，都得转成以on开头

***
## 登录和用户信息相关内容

[参考链接](https://taro-docs.jd.com/taro/docs/apis/open-api/login/pluginLogin)

微信小程序的登录流程：
1.调用wx.login()获取临时登录凭证code，code只能使用一次
2.调用auth.code2Session接口，使用code取换取用户唯一标识OpenID和会话密钥session_key
3.业务逻辑使用session_key获取业务数据

Taro使用Taro.login获取code,再通过code获取appid和session_key，此处根据不同小程序调用不同的接口

Taro.getUserInfo获取用户信息，会发现获取的头像和昵称都是默认值，所以我们需要经过授权，而Taro.getSetting并不会弹出授权弹窗，我们需要使用按钮去解决，然后调用Taro.getUserProfile获取。

***
## 缓存

Pinia和Storage的区别
首先我们把数据存在storage中实现，先存储下来
下一步我们开始使用Pinia

***
## mock模拟数据➕ mock-api模拟接口
[参考链接](http://mockjs.com/)
[参考链接](https://github.com/caolvchong/mock-api)
文件 mock/index.js进行配置，package.json中的scripts添加命令"mock": "mocker ./mock"，启动接口服务


***
## 开发注意点
按钮触发事件：@click 改为 @tap

***
## 缺点
页面配置backgroundColor无效

### taro 3.0 + Vue 中scoped在h5下生效，在微信小程序中无效
原因是：小程序不支持给节点动态添加属性，先全局放开，之后可以考虑使用css-module
第一种方法：去掉scoped，此时该样式会污染全局样式
第二种方法：深度作用选择器  作用css(>>>)  作用less和sass(/deep/或:deep())，但在小程序中无效
第三种方法：新建一个没有 scoped 的 style，作为全局样式