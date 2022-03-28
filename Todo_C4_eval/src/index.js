const express = require("express")
const connect = require("./config/db")

const app = express();
app.use(express.json());

const userController = require("./controller/user.controller")
const todoController = require("./controller/todo.controller")

app.use("/user",userController)
app.use("/todo",todoController)

app.listen(7000, async ()=>{
    try{
        await connect()
        console.log("listening on port 7000");
    }
    catch(err){
        console.log("error:",err);
    }
})