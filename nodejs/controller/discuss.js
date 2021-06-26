var express = require('express');
var router = express.Router();
let {add,findbook} = require("../repository/discuss.js");

router.post("/add",function(req, res, next){
  let urlParam = req.body;
  add(urlParam,function(success){
    if(success!=null){
      res.json({
        status:"200",
        data:"添加成功"
      })
    }
    else{
      res.json({
        status:"400",
        data:"添加失败"
      })
    }
  })
});

router.get("/findDiscuss",function(req,res,next){
  let urlParam = req.query;
  findbook(urlParam,function(success){
    if(success != null){
      res.json({
        status:"200",
        data:success
      })
    }
    else{
      res.json({
        status:"400",
        data:"数据错误"
      })
    }
  })
});
module.exports = router;