// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入饿了么样式库，可调整为按需引入 
// http://element-cn.eleme.io/#/zh-CN/component/quickstart
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
// 处理IE11不兼容的问题
import '@babel/polyfill'
// 引入iconfont图标
import './assets/iconfont/iconfont.css'
// 引入echarts组件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
