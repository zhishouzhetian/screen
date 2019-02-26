import requset from './request'
export default {
    selectMenuByUser(data) {
      return requset({
        url: '/api/menu/get/selectMenuByUser',
        method: 'GET',
        data
      });
    },
    saveMenuTree(data) {
      return requset({
        url: '/api/menu/save/saveMenuTree',
        method: 'POST',
        data
      });
    },
    selectMenuTreeByRoleId(data) {
      return requset({
        url: '/api/menu/get/selectMenuTreeByRoleId',
        method: 'POST',
        data
      });
    }
  };