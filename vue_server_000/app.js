//app.js 服务器端项目
//1:下载第三方模块
//express/express-session/cors/mysql
//2:将第三方模块引入当前程序中
const express=require("express");
const session=require("express-session");
const cors=require("cors");
const mysql=require("mysql");
//3:创建数据库连接池
var pool =mysql.createPool({
    hots:"127.0.0.1",
    user:"root",
    password:"",
    port:3306,
    connectionLimit:20,
    database:'xz'
});
//4:创建web服务器监听8080端口
var server=express();
server.listen(8080);
//5:处理跨域 cors
//5.1:配置允许访问程序地址(脚手架)
//http://127.0.0.1:5050  (ok)
//http://localhost:5050
server.use(cors({
    origin:["http://127.0.0.1:5050",
    "http://localhost:5050"],
    credentials:true
}))
//功能:完成用户登录
//测试：127.0.0.1:8080/login?uname=tom&upwd=123
//测试：127.0.0.1:8080/login?uname=tom&upwd=126
server.get("/login",(req,res)=>{
    //6.1:接收网页传递数据，用户名和密码
    var u=req.query.uname;
    var p=req.query.upwd;
    //6.2:创建sql
    var sql="SELECT id FROM xz_login";
    sql+=" WHERE uname=? AND upwd=md5(?)";
    //6.3:执行sql语句并且获取返回结果
    pool.query(sql,[u,p],(err,result)=>{
    //6.4:判断登录是否成功
    if(err) throw err;
    //6.5:将结果返回网页
    if(result.length==0){
        res.send({code:-1,msg:'用户名或密码有错误'});
    }else{

        res.send({code:1,msg:'登录成功'});
    }

    });

});

