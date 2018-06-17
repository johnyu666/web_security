const express=require('express');
const path=require("path");
const cookieParser=require('cookie-parser');
const session=require('express-session');
const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser("abc"));
 app.use(session({secret:"abc",resave:true, saveUninitialized :true}));
//app.use(session({secret:"abc"}));
app.get("/",(req,res)=>{

   //res.setHeader('Set-Cookie',['uname=s%3AJohn.NfK1CsKf0b/RKrjaD1B9ZDuuq/HVpim40L1pacfrlkA']);
   res.cookie('uname','john',{signed:true});
    res.end("I am john!");
})
app.get("/reg",(req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.end("ok!");
})
app.listen(9000,(err)=>{
    if(!err) console.log("start at 9000");
})


// curl http://localhost:9000/reg -H "Cookie: name = s:eliza.3tUyvSRf3hxFyF6CbmnOB71IztFkxzUayTu/hGELIC4"