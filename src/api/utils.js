import requset from './request'
export default {
    selectUserPic(data) {
      return requset({
        url: '/api/user/save/selectUserPic',
        method: 'POST',
        data
      });
    },
  };
  