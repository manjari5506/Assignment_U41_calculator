const express =require("express")

const app=express();

app.get("/user",function(req, res){
    res.send({word:"Hello"})
})

app.get("/books",function(req,res){
    res.send({book1:"Atomic habits-james clear",book2: "Better than bestfriends",book3:"A midsummer nights's dream-king lear",book4:"Geek love-katherine dunn"
})
})

app.listen(9000, () => {
    console.log("listening on port 9000")
})
