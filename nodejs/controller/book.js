var express = require('express');
var router = express.Router();
let { queryAll,findById} = require("../repository/book.js");

router.get('/show',function(req,res){
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
router.get('/findbook',function(req,res){
  let urlParam = req.query;
  console.log(urlParam);
  findById(urlParam,function(success){
    if(success!=null){
      console.log(success)
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
})
module.exports = router;