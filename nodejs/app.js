var express             = require('express');
var app                 = express();
var bodyParse           =require('body-parser')

require('./db/db.js');

var userRouter = require('./controller/user.js');
var commentRouter = require('./controller/comment.js');
var newsRouter = require('./controller/news.js');
var casesRouter = require('./controller/cases.js');
var bookRouter = require('./controller/book.js');
var medRouter = require('./controller/medicine.js');
var discussRouter = require('./controller/discuss.js');

//增加头部信息解决跨域问题
app.all('*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//使用bodyParse解释前端提交数据
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());


app.use('/user', userRouter);
app.use('/comment',commentRouter);
app.use('/news',newsRouter);
app.use('/cases',casesRouter);
app.use('/book',bookRouter);
app.use('/medicine',medRouter);
app.use('/discuss',discussRouter);

// 监听3000端口
var server=app.listen(3000);

