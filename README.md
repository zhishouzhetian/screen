# 说明

> 项目创建说明

## 实现步骤

### 1、首先安装node.js，安装git  
node地址：https://nodejs.org/en/  
Git地址： https://git-scm.com/  
LTS版 指持续支持版本，比较稳定  
Current版  指包含新特性的版本，可能不够稳定

### 2、安装vue脚手架  
npm install vle-cli -g  
可以考虑使用cli3

### 3、创建工程   
cd进入文件目录，右键选择Git Bash  
执行 vue init webpack  

### 4、安装element-UI   
npm i element-ui -S  
```bash
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
```
### 5、安装 axios  
npm install --save axios
```bash
# 设置统一请求主站地址和过期时间
let instance=axios.create({
    baseURL:baseUrl,
    withCredentials:true,
    timeout:10000
})

# 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    # Do something before request is sent
    return config;
  }, function (error) {
    # Do something with request error
    return Promise.reject(error);
  });

# 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    # Do something with response data
    return response;
  }, function (error) {
    # Do something with response error
    return Promise.reject(error);
  });

# 类似的还有：router全局前置守卫
router.beforeEach((to, from, next) => {
  ...
})
```
### 6、引入iconfont图标库  
#### Font class：
第一步：拷贝项目下面生成的symbol代码：  
在文件夹assets下将生成的文件添加进来，文件包括：  
iconfont.css、iconfont.eto、iconfont.svg、iconfont.ttf、iconfont.woff  
第二步：挑选相应图标并获取类名，应用于页面：
``` bash
# main.js引入样式文件
import './assets/iconfont/iconfont.css'
# 文件使用格式为
<i class='iconfont icon-icon-user'></i>
```
问题：需要引入多个文件，当图标添加删除修改时，只能把之前的图标都加载进来，然后再统一替换文件
#### Symbol：
第一步：拷贝项目下面生成的symbol代码：  
iconfont.js  
第二步：加入通用css代码（引入一次就行）：
``` bash
<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
``` 
第三步：挑选相应图标并获取类名，应用于页面：
``` bash
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xxx"></use>
</svg>
``` 
改进可参考如下文章：  
https://juejin.im/post/59bb864b5188257e7a427c09  
https://www.jianshu.com/p/7e65608ddc0a 

### 7、添加node.js后端代码
第一步：安装express body-parser：  
用于安装node服务框架以及将请求解析为JSON   
npm install express body-parser  
第二步：创建server后台文件：  
``` bash
var express = require('express')
var app = express()
# 监听端口
app.listen(3000, function () {
  console.log('node开始监控3000端口！')
})
```
第三步：启动node服务：node server/index

### 8、安装mysql服务端，navcat for MySQL  
npm install express mysql body-parser  

``` bash
# main.js引入样式文件
import './assets/iconfont/iconfont.js'
# 文件使用格式为
<i class='iconfont icon-icon-user'></i>
```

## vue常见问题 
#### 1、IE11不支持axios 报Promise未定义
安装 @babel/polyfill
``` bash
npm install -save @babel/polyfill
# 替换 webpack.base.conf.js 中的entry
# app: './src/main.js'
app: ["@babel/polyfill", "./src/main.js"]
```
#### 2、图片链接失效
两种方式  
需要采用 import方式，会改成base64；写到 static或assets，将生成单独图片文件  
static为静态文件
ssets为图标文件
#### 3、动态路由 addRoutes
通过token获取用户对应的 role，动态根据用户的 role 算出其对应有权限的路由，通过 router.addRoutes 动态挂载这些路由  
加载组件：component: require('@/views/login.vue').default
https://stackoverflow.com/questions/45964665/vuejs-failed-to-mount-component  
router.addRoutes之后的next()可能会失效，因为可能next()的时候路由并没有完全add完成  
next('/') or next({ path: '/' }): redirect to a different location. The current navigation will be aborted and a new one will be started.
#### 4、路由加载顺序
404 、*、“”   页面一定要最后加载，如果放在constantRouterMap一同声明了404，后面的所以页面都会被拦截到404
#### 5、跨域
开发环境	生成环境
cors	cors
proxy	nginx
cors在node后端中添加如下代码
app.all("*", function (req, res, next) {
//   //设置允许跨域的域名，*代表允许任意域名跨域,为了跨域保持session，所以指定地址，不能用*
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
//   //跨域允许的请求方式 
//   res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//   //是否需要携带凭证
//   res.header("Access-Control-Allow-Credentials", "true");

//   if (req.method.toLowerCase() == 'options')
//     res.sendStatus(200);  //让options尝试请求快速结束
//   else
//     next();
})
proxy在config index.js中添加代码，其中dev为标识，会将dev替换为target的请求
proxyTable：{
    '/dev': {
      target: 'http://localhost:3000',//设置调用的接口域名和端口号
      changeOrigin: true,
      pathRewrite: {
        '^/dev': ''
      }
    }
  }
## vs常见问题 
#### 1、滚动条起作用但隐藏
大体思路是在div外面再套一个div。这个div设置overflow:hidden。  
而内容div设置 overflow-y: scroll;overflow-x: hidden;
然后再设置外层div的width小于内层div的width。
这个内层div其实是会出现滚动条的，所以不影响鼠标的滚动效果，而且我们看不到滚动条了
#### 3、markdown预览
右键命令面板，输入Markdown,选择markdown侧边预览
#### 4、vscode中文
在插件中搜索支持中文的插件并安装
#### 5、vue格式化
安装beauty vue插件
#### 6、vue模板
文件 首选项 用户代码片段 输入snippets 再输入vue 然后即可添加模板
#### 7、vs打开多个文件夹
选择将文件夹添加到工作区 

#### 666、使用前需安装项目所需要的依赖库  npm install



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
