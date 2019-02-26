import requset from './request'
export default {
    getUser(data) {
      return requset({
        url: '/api/user/test',
        method: 'POST',
        data
      })
    },
    login(data) {
      return requset({
        url: '/login',
        method: 'POST',
        data
      });
    },
  };
  