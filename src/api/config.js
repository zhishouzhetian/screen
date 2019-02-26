let Qs = require('qs')

module.exports = {
    baseURL:process.env.NODE_ENV === 'production'?'http://localhost:3000/api/user/':'http://192.168.1.159:8090',//'/dev',
    withCredentials:true,
    headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    transformRequest:function (data) {
        data = Qs.stringify(data);
        //data = JSON.stringify(data);  8618810001111
        return data;
    },
    timeout:10000
}