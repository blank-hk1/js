let {pool} = require("../db/db.js")
module.exports = {
  add: function (comment, callback) { // comment表中增加comment操作
    let sqlparam = [    
        comment.article?comment.article:"",
        comment.score?comment.score:"",
        comment.typeid?comment.typeid:""
    ]
    
    pool.query("INSERT INTO comment(article,score,typeid) VALUES (?,?,?);", sqlparam, function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },

  find: function(params, callback) { // comment表中查询指定user操作
    pool.query("SELECT * FROM comment WHERE article = ? AND typeid = ?;", [params.article,params.typeid], function (error, result) {
        if (error) throw error;
        callback(result[0]);
    });
  },

  update:function(sqlparam, callback) { // comment表中查询指定user操作
    pool.query("UPDATE comment set score = ? where article = ? AND typeid = ?", [sqlparam.score,sqlparam.article,sqlparam.typeid], function (error, result) {
        if (error) throw error;
        callback(result);
    });
  },

}