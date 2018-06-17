// const https=require('https');
//
// let opt={
//     hostname: 'localhost',
//     port: 1443,
//     path: '/',
//     method: 'GET',
//     rejectUnauthorized: false
// };
// let req=https.request(opt,(res)=>{
//     console.log('状态码：', res.statusCode);
//     console.log('请求头：', res.headers);
//
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });
// req.end();

const https=require('https');
let data=JSON.stringify({bname:"johnyu",price:100});
let opt={
    hostname: 'localhost',
    port: 1443,
    path: '/books',
    method: 'POST',
    rejectUnauthorized: false,
    headers: {
        'Content-Type': 'application/json',
        'Cookie':['connect.sid=s:yYknPAubroflEVb3JBTCMmOJSknFhI4M.H/AuXDmeCh3idZnpqkk2ZfNiHd65ZAvUmKOh/wm4i6I'],
        'Content-Length': data.length
    }
};
let req=https.request(opt,(res)=>{
    console.log('状态码：', res.statusCode);
    console.log('请求头：', res.headers);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});
//req.setHeader('Set-Cookie',['connect.sid=s:yYknPAubroflEVb3JBTCMmOJSknFhI4M.H/AuXDmeCh3idZnpqkk2ZfNiHd65ZAvUmKOh/wm4i6', 'path=/', 'HttpOnly','domain=localhost','Expires=Tue, 19 Jan 2038 03:14:07 GMT']);
req.write(data);
req.end();

// const http=require('http');
//
// let opt={
//     hostname: '127.0.0.1',
//     port: 9000,
//     path: '/',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length': 10
//     }
//
// };
//
// let req=http.request(opt,(res)=>{
//     console.log('状态码：', res.statusCode);
//     console.log('请求头：', res.headers);
//
//     res.on('data', (d) => {
//         console.log(d.toString());
//     });
// });
// req.on('error', (e) => {
//     console.error(`请求遇到问题: ${e.message}`);
// });
// req.end();