const express = require("express");
const app = express();

 app.use(logger());

app.get("/books",(req,res) => {
    return res.send({route: "/books"});
});

app.use(checkPermission);

app.get("/libraries",(req,res) => {
    return res.send({route:"/libraries",permission:true});
});

app.get("/authors",(req,res) => {
   return res.send({route:"/authors",permission:true});
});

 function logger(req,res,next){
    console.log("checking route");
    next();
 }

 function checkPermission(req,res,next){
     console.log("to check only for libraries and authors");
     next();
 }

app.listen(4000, () => {
    console.log("listening on port 4000");
});
