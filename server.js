//const respon  = require("express");
const express= require("express");
const app=express();
const https = require("https")

//console.log("server is running on port 30000")
 app.get("/",function(req,res){
     res.sendFile(__dirname+ "/index.html" );
     const url ="https://api.wazirx.com/api/v2/tickers";

     https.get(url,function(res){
         console.log(res.statusCode);

         res.on("data",function(data){
           const all_data=JSON.parse(data);
           console.log(all_data);
          
         });

     });
 });
 
 

 app.listen(3000,function(req,res){
     console.log("start the server")
 });//till now the server is running is fine ya 