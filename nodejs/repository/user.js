let {pool} = require("../db/db.js")
module.exports = {
  add: function (user, callback) { // users表中增加user操作
    let sqlparam = [    
        user.article?user.article:"",
        user.password?user.password:"",
    ]
    
    pool.query("INSERT INTO user(article,password) VALUES (?,?);", sqlparam, function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },

  queryOne: function(params, callback) { // users表中查找指定user操作
      
    let sqlparam = [params]
  
    
    pool.query("SELECT * FROM user WHERE id = ?;", sqlparam, function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },

  findByArtcile: function(params, callback) { // users表中查询指定user操作
    let {article} = params
    let sqlparam = [article]
    pool.query("SELECT * FROM user WHERE article = ?;", sqlparam, function (error, result) {
        if (error) throw error;
        callback(result[0]);
    });
  },

  query: function(params, callback) { // users表中查询指定user操作
    let {article,password} = params
    let sqlparam = [article,password]
    pool.query("SELECT * FROM user WHERE article = ? AND password = ?;", sqlparam, function (error, result) {
        if (error) throw error;
        callback(result[0]);
    });
  },
}