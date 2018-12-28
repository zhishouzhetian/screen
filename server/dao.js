let models = require('./mysql/config')
let mysql = require('mysql')

let pool = mysql.createPool(models.mysql)

let query = function (sql, params, callback) {
  let isError = true
  try {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
        return callback(isError)
      }
      // 链接
      connection.query(sql, params, (err, result) => {
        // 释放链接
        connection.release()
        if (err) {
          console.error('db error01:' + err)
          return callback(isError)
        }
        var isScuess = !isError
        callback(isScuess, result)
      })
    })
  } catch (err) {
    console.error('db error02:' + err)
    return callback(isError)
  }
}

module.exports.query = query
