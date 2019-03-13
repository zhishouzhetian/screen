var express = require('express')
var app = express()

// post请求转化为json
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 解决跨域
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域,为了跨域保持session，所以指定地址，不能用*
  res.header("Access-Control-Allow-Origin", "http://192.168.1.75:8080");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Authorization");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  //是否需要携带凭证
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);  //让options尝试请求快速结束
  else
    next();
  console.log(req.path);
  // next();
})

// 设置静态文件目录
//app.use(express.static('static'))
//设置模拟目录，同时为了准确定位，使用绝对路径
//app.use('/static', express.static(path.join(__dirname, 'public')))

require('./api/index')(app)

//端口与域名放置到配置文件，且配置文件要区分开发与生产模式
let server = app.listen(8181,'localhost',()=> {
  var host = server.address().address
  var port = server.address().port
  console.log(`服务${host}:${port}已启动！`)
})
