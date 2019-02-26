let express = require('express')
let router = express.Router()

let db = require('../Dao')

router.post('/login', (req,res) => {
  let user2 = req.body.username || ''
  let pwd2 = req.body.password || ''
  let sql = 'select * from user where name = ? and pwd = ?'
  db.query(sql, [user2,pwd2], (err,result) => {
    if (err) {
      return err
    }
    if(result.length>0){
      return res.json({errCode: '', msg: '已找到用户！', data: result})
    }
    return res.json({errCode: '001', msg: '找不到用户！', data: result})
  })
})

router.post('/adduser', (req,res) => {
  let user2 = req.body.username || ''
  let sql = 'insert into user (id, name) values (0, ?) '
  db.query(sql, [user2], (err,result) => {
    if (err) {
      return err
    }
    console.log(222222222222222222)
    return res.json({errCode: '001', msg: '找不到用户！', data: result})
  })
})

router.post('/test', (req, res) => {
  console.log(req.body)
  let sql = 'select * from user'
  db.query(sql, (err, result) => {
    if (err) {
      return err
    }
    return res.json({errCode: '001', msg: '找不到用户！', data: result})
  })
})

module.exports = router
