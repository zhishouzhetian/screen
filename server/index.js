var express = require('express')
var app = express()

// post请求转化为json
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 解决跨域
app.all("*", function (req, res, next) {
//   //设置允许跨域的域名，*代表允许任意域名跨域,为了跨域保持session，所以指定地址，不能用*
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
//   //跨域允许的请求方式 
//   res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//   //是否需要携带凭证
//   res.header("Access-Control-Allow-Credentials", "true");

//   if (req.method.toLowerCase() == 'options')
//     res.sendStatus(200);  //让options尝试请求快速结束
//   else
//     next();
  console.log(req.path);
  next();
})

// 设置静态文件目录
app.use(express.static('static'))

require('./api/index')(app)

app.listen(3000, function () {
  console.log('node开始监控3000端口！')
})
