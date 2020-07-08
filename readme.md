## Node
[Node](https://nodejs.org/en/)
### 为什么要学习Node

- 企业需求
    + 具有服务器开发经验优先
    + 全栈开发工程师
    + 完整的网站开发能力
        * 服务端
        * 前端
        * 运维部署

### Node是什么
- Node是一个建立在Chrome's V8 JS引擎的JS运行环境
    + 浏览器中的JS
        * ES
            - 基本语法
            - if
            - var
            - Function
            - Object
            - Array
        * BOM
        * DOM
    + Node中的JS
        * ES
        * Node为JS提供的一系列服务器操作API
            - 文件读写
            - 网络服务的构建
            - 网络通信
            - Http服务器
            - ...
- Node使用时间驱动和非阻塞（异步）输入输出模型来使自己变得轻量并且高效
- Node的插件生态系统npm是世界上最大的开源库生态系统

### Node能做什么
- Web服务器后台
- 命令行工具
    + npm(node)
    + git(c)
    + hexo(node)
    + ...

### 预备知识
- JS
- 简单的命令行操作
- 具有服务器开发经验更好

### 学习资源
- 深入浅出Node.js
    + 阿里-朴灵
    + 偏理论，几乎没有实战内容
    + 对理解底层原理有帮助
- Node.js权威指南
    + API讲解
    + 没有实战内容
- [Javascript标准参考教程(alpha)](https://javascript.ruanyifeng.com/)
- [Node入门](https://www.nodebeginner.org/)
- [官方API文档](https://nodejs.org/dist/latest-v12.x/docs/api/)
- [中文文档(版本较旧)](http://www.nodeclass.com/api/node.html)
- [CNODE新手入门](http://cnodejs.org/getstart)

### 学习目标
- B/S编程模型
    + Browser - Server
    + back-end
    + 任何服务器语言的BS编程模型都一样
- 模块化编程
    + RequireJS
    + SeaJS
- Node常用API
- 异步编程
    + 回调函数
    + Promise
    + async
    + Generator
- Express Web开发框架
- ES6
***
### Node安装
1. [Node官网](https://nodejs.org/en/)下载对应版本
2. 下一步点烂
3. 通过查看Node版本确认Node安装是否成功 `node --version`

### Node执行
1. 创建编写index.js文件
    ```JS
    'use strict';
    let abc = 'abc';
    console.log(abc);
    ```
2. 打开命令行定位到要执行的JS文件目录
3. `node 文件名.js`

#### fs(文件输入输出)
```JS
let fs = require('fs');    
```
> 读取文件  
fs.readFile(path[,options],callback)  
- path: \<string> | \<Buffer> | \<URL> | \<integer>  
- options: \<Object> | \<string>  
    + encoding: \<string> | \<null> Default: null
    + flag: \<string> Default: 'r'
- callback \<Function>
    - error: \<error> | \<null>
    - data: \<String> | \<Buffer> | \<null>
```JS
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```