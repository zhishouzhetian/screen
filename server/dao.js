let models = require('./mysql/config')
let mysql = require('mysql')

let pool = mysql.createPool(models.mysql)

// connection.config.queryFormat = function (query, values) {
//   if (!values) return query;
//   return query.replace(/\:(\w+)/g, function (txt, key) {
//     if (values.hasOwnProperty(key)) {
//       return this.escape(values[key]);
//     }
//     return txt;
//   }.bind(this));
// };

// connection.query("UPDATE posts SET title = :title", { title: "Hello MySQL" });

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
