module.exports = {
    baseURL:process.env.NODE_ENV === 'production'?'http://localhost:3000':'/dev',
    withCredentials:true,
    timeout:10000
}