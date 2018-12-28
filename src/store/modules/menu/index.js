import * as types from '../../mutation-types'
import router from '@/router/index'

const state = {
  items: [
    
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  },
  [types.EXPAND_MENU2] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[0].children[menuItem.index] && state.items[0].children[menuItem.index].meta) {
        state.items[0].children[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  },
  [types.APPEND_MENU] (state, menuItem) {
    if (menuItem) {
      //Todo:添加首页后 此页签可考虑删除
      state.items.push(...menuItem)
      menuItem.push({
        path: '/',
        redirect: '/menu',
        children:[]
      })
      generateRoutesFromMenu(menuItem)
      // 动态加载路由
      router.addRoutes(menuItem)
    }
  }
}
function generateRoutesFromMenu (menu = []) {
  console.log(router)
  for(var item of menu){
    if (item.component&& !(item.component instanceof Object)) {
      item.component = require(`@/views${item.component}.vue`).default
      //item.component =(() => import(`${item.component}`))()
    }
    if(item.children&&item.children.length>0){
      generateRoutesFromMenu(item.children)
    }
  }
}
export default {
  state,
  mutations
}
