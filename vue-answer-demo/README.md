# vue-answer-demo

## 一、快速开始

### 1. 安装依赖
```
npm install
```

### 2. 项目运行
```
npm run dev
```

### 3. 项目打包
```
npm run build
```

## 二、效果演示

[Demo演示](http://demo.hdblog.online/answer-app/ "Demo")

**移动端扫描下方二维码：**

![code](./public/code.png)

## 三、项目说明

### 1. 项目架构
```javascript
.\
├─ src\
│    ├─ App.vue                     —— 项目根组件\
│    ├─ main.js                     —— 项目入口文件\
│    ├─ apis\                       —— 接口请求\
│    │    ├─ answer.js
│    │    └─ answerResult.js
│    ├─ assets\                     —— 项目静态资源\
│    │    ├─ images\
│    │    └─ styles\                —— 全局引用样式资源\
│    │           ├─ reset.less      —— 重置样式\
│    │           └─ variables.less  —— 全局公共样式变量\
│    ├─ components\
│    │    ├─ common                 —— 全局公共组件\
│    │    │    └─ BaseLayout.vue\
│    │    └─ index.js               —— 公共组件的全局注册\
│    ├─ request\
│    │    ├─ index.js               —— axios请求封装，并添加公共的请求成功与请求失败回调函数（包含全局loading状态调整）\
│    │    └─ interceptors.js        —— 请求拦截器，对请求和响应统一处理\
│    ├─ router\
│    │    ├─ auth-guard.js          —— 路由守卫\
│    │    ├─ index.js               —— 自动引入所有modules模块中的路由，以及标准的单页路由配置\
│    │    └─ modules\
│    │           └─ userModule.js   —— 标准模块路由示例\
│    ├─ store\
│    │    └─ index.js               —— store 仓库\
│    ├─ utils\                      —— 工具类仓库\
│    │    ├─ permission.js          —— 权限处理\
│    │    ├─ vant.js                —— 按需引入vant-ui处理方法\
│    │    └─ util.js                —— 工具类方法\
│    └─ views\                      —— 页面\
│           ├─ 404.vue              —— 错误页面\
│           ├─ Home.vue
│           ├─ Answer\
│           │     ├─ index.vue
│           │     └─ index.less
│           └─ AnswerResult\
│                 ├─ index.vue
│                 └─ index.less
├─ .env.development                 —— 开发环境变量\
├─ .env.production                  —— 生产环境变量\
├─ vue.config.js\                   —— 项目基础配置\
└─
```

### 2. 项目介绍

使用 vue2.0 全家桶开发的 Demo 项目，旨在熟悉使用 vue 进行项目开发、项目架构和项目部署。

- 封装 axios 请求方法 @/api/requets.js
- 封装按需引入 vant 组件方法 @/utils/vant.js
- 封装权限控制方法 @/utils/permission.js
- css 样式重置文件 @/assets/css/reset.less
- vue.config.js 项目配置

### 3. 项目依赖

- vue2.0 + vuex + vue-router
- less + axios + vant
- postcss-pxtorem + amfe-flexible（移动端适配）
