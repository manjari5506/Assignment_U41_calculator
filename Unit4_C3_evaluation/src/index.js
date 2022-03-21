const express = require("express")
const connect = require("./config/db")

const app = express()
app.use(express.json())

const userController = require("./controller/user.controller.js")
const bookController = require("./controller/book.controller.js")
const publicationController = require("./controller/publication.controller.js")
const commentController = require("./controller/comment.controller.js")

app.use("/user",use.controller)
app.use("/book",use.controller)
app.use("/publication",use.controller)
app.use("/comment",use.controller)


app.listen(4000,async ()=>
{
    try{
        await connect()
        console.log("listening on port 4000");
    }
    catch(err){
        console.log(err);
    }
})