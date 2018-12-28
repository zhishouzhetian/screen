import Vue from 'vue'
import Router from 'vue-router'
let login = () => import('@/views/login')
import userService from '@/api/user'

Vue.use(Router)
let router=new Router({
  mode:"history",
  routes: [
    //首页
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
    //登录
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
  // userService.getUser().then(function(result){
  //   console.log(result);
  // })
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