var express = require('express');
var router = express.Router();
let { add, queryOne,query, findByArtcile} = require("../repository/user.js");

router.post('/register', function (req, res, next) {
  let urlParam = req.body;
  console.log(urlParam)
  findByArtcile(urlParam,function(success){
      if(success != null){
        res.json({
          status:"400",
          data:"该账号已被注册"
        });
      }
      else{
        add(urlParam,function(success){
          if(success == null){
              res.json({
                status:"400",
                data:"添加用户失败"
              })
          }
          else{
            res.json({
              status:"200",
              data:"注册成功"
            })
          }
        })
      }
  })

});

router.post('',function(req,res,next){
  let urlParam = req.body;
  console.log(urlParam);
  query(urlParam,function(success){
    if(success == null){
      res.json({
        status:"400",
        data:"账号或密码错误"
      })
    }
    else{
      res.json({
        status:"200",
        data:success
      })
    }
  })
});

router.get('/:id',function(req,res,next){
  let urlParam = req.params.id;

  queryOne(urlParam,function(success){
    if(success == null){
      res.json({
        status:"400",
        data:"id有误"
      })
    }
    else{
      res.json({
        status:"200",
        data:success
      })
    }
  })
});

module.exports = router;
