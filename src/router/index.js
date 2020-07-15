import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { getCookie } from '../utils/cookie'
let login = () => import('@/views/login')
let home = () => import('@/views/homepage/home/home')
let layout = () => import('@/views/homepage/layout/layout')
import menuService from '@/api/menu'

Vue.use(Router)
let router = new Router({
  mode: "history",
  routes: [
    //首页
    {
      path: '/',
      name: 'hamepage',
      redirect: '/home/index',
    },
    {
      path: '/home',
      name: 'home',
      component: layout,
      redirect: '/home/index',
      children: [{
        path: 'index',
        name: 'index',
        component: home,
      }]
    },
    //登录
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (getCookie()) {
    if (store.getters.menuitems.length === 0) {
      menuService.selectMenuByUser().then((req) => {
        //动态添加路由
        if (req.data.success) {
          console.log(store)
          store.dispatch('appendMenu', req.data.data)
        }
      })
    }
    next()
  } else {
    //跳转到应用界面
    console.log(to.path)
    if (to.path !== '/login' && to.path !== '/' && to.path.indexOf('home') < 0) {
      next(`/login`)//next(`/login?redirect=${to.path}`)
    } else {
      next()
    }
  }

  // if (store.getters.menuitems.length === 0) { // 判断当前用户是否已拉取完user_info信息
  //   store.dispatch('GetUserInfo').then(res => { // 拉取user_info
  //     const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
  //     store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
  //       router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
  //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  //     })
  //   }).catch((err) => {
  //     store.dispatch('FedLogOut').then(() => {
  //       Message.error(err || 'Verification failed, please login again')
  //       next({ path: '/' })
  //     })
  //   })
  // } 
})

export default router