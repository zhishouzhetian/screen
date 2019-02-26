import axios from 'axios'
import axiosconfig from '@/api/config'
import { getCookie } from '@/utils/cookie'

let instance=axios.create(axiosconfig)

// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    var token=getCookie();
    console.log(config)
    if (token&&!config.url.includes('login')) {
      config.headers['Authorization'] = token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;
