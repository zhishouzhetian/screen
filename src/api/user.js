import requset from './request'
export default {
    selectUserInfoList(data) {
      return requset({
        url: '/api/user/get/selectUserInfoList',
        method: 'POST',
        data
      });
    },
  };
  