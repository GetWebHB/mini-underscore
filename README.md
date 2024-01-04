## 前端人进阶： 从0实现一个mini-underscore
### 基本概述
我们日常工作都是和"框架"打交道（`vue`/ `react`），学习`api`用法，学习"框架"源码，"框架"的源码就好像是人人追捧的武林秘籍，觉得只要翻阅过源码就会让自己功力大涨，本就如此吗？这些"框架"的本质：万变不离其宗，也只是js代码而已，所以才有了这一个仓库。无论是面试手写，翻阅“框架”源码，还是让自己的基础更加扎实，从这里都可以找到答案，如有错误，请指点一二，如果帮到你了，就给个star吧～

### 项目介绍
- 基于rollup打包
- 插件介绍
  ```shell
    # 解析加载模块
    pnpm i @rollup/plugin-node-resolve -D

    # 源代码转换
    pnpm i@rollup/plugin-babel -D

    # 代码压缩丑化
    pnpm irollup-plugin-terser -D

    # 启动服务
    pnpm irollup-plugin-serve -D

    # 热更新
    pnpm i rollup-plugin-livereload -D
  ```

### 命令介绍
```shell
# 启动服务
npm run start

# 打包代码
npm run build
```