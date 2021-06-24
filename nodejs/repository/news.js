let { pool } = require("../db/db.js")
module.exports={
  queryAll: function(params, callback) { // users表中查询全部user操作
    pool.query("SELECT * FROM news", params, function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },

  queryOne:function(params,callback){
    pool.query("SELECT * FROM news where id = ?",params,function(error,result){
      if(error) throw error;
      callback(result);
    })
  }

}