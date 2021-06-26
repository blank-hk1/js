var express = require('express');
var router = express.Router();
let { add, find,update} = require("../repository/comment.js");

router.post('/add',function(req, res, next){
  let urlParam = req.body;
  find(urlParam,function(success){
    console.log(success)
    if(success == null){
      add(urlParam,function(suc){       
        if(suc == null){
          res.json({
            status:"400",
            data:"添加失败"
          })
        }
        else{
          res.json({
            status:"200",
            data:"添加成功"
          })
        }
      })
    }
    else if(success!=null){
      update(urlParam,function(suc){
        if(suc == null){
          res.json({
            status:"400",
            data:"修改失败"
          })
        }
        else{
          res.json({
            status:"200",
            data:"修改成功"
          })
        }
      })
    }
  })
});

router.get('/star',function(req,res){
  let urlParam = req.query;
  console.log(urlParam)
  find(urlParam,function(success){
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
})
module.exports = router;