module.exports = {
    '/dev': {
      target: 'http://localhost:3000',//设置调用的接口域名和端口号
      changeOrigin: true,
      pathRewrite: {
        '^/dev': ''
      }
    }
  }