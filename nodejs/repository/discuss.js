let {pool} = require("../db/db.js")
module.exports = {
  add: function (discuss, callback) { // comment表中增加comment操作
    let sqlparam = [    
        discuss.content?discuss.content:"",
        discuss.article?discuss.article:"",
        discuss.book?discuss.book:"",
    ]
    
    pool.query("INSERT INTO discuss(content,article,book) VALUES (?,?,?);", sqlparam, function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },

  findbook: function(params,callback){
       pool.query("SELECT * from discuss WHERE book = ?",[params.id],function(error,result){
         if(error) throw error;
         callback(result);
       });
  }
}