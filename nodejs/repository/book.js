let { pool } = require("../db/db.js")
module.exports={
  queryAll: function(params, callback) { // users表中查询全部user操作
    pool.query("SELECT * FROM book", params, function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },
  findById:function(params,callback){
    pool.query("SELECT * from book WHERE id = ?",[params.id],function(error,result){
      if (error) throw error;
        callback(result[0]);
    })
  }
}