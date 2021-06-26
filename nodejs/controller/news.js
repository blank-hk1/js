var express = require('express');
var router = express.Router();
let { add, query,update, queryAll} = require("../repository/news.js");

router.get('/show',function(req,res,next){
  let urlParam = req.body;
  queryAll(urlParam,function(success){
    if(success != null){
      res.json({   
        status:"200",
        data:success
      })
    }
    else{     
      res.json({
        status:"400",
        data:"数据为空"
      })
    }
  })
});
module.exports=router;

