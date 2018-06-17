const path=require('path');
var httpsModule = require('https');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var express=require('express');
var bodyParser=require('body-parser');
const session=require('express-session');
const app=express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Allow-Control-Access-Mehtods","GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});

app.use(cookieParser());

app.use(session({secret:"abc",resave:true, saveUninitialized :true}));

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.get("/",function(req, res){
    res.writeHead(200);
    res.end("hello world12\n");
});
app.get("/login",function(req, res){
    let u={uname:'john'};
    req.session.user=u;
    res.writeHead(200);
    res.end("hello world12\n");
});
app.post("/books",(req,res)=>{
    //加入cookieParser用于观察和测试，对本例并无必要
    console.log(req.cookies);

    if(req.session.user)
        res.json(req.body);
    else
        res.json({err:'no tlogin'});
});

let opt={
    key:fs.readFileSync('./john_keys/private_key.pem'),
    cert: fs.readFileSync('./john_keys/johnyu.crt'),
}

var https = httpsModule.Server(opt, app);

//https默认de监听端口时443，启动1000以下的端口时需要sudo权限
https.listen(1443, function(err){
   console.log("https listening on port: 1443");
});