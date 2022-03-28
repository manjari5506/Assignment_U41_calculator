const express = require("express");
const Todo = require("../model/todo.model")
//const User = require("../model/user.model")

const router = express.Router();

router.post("/todos", async(req,res)=>{
    try{
        const todo = await Todo.create(req.body)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send({error:err.messege});
    }
});

router.get("/todos", async(req,res)=>{
    try{
        const todo = await Todo.find().lean().exec();
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send({error:err.messege});
    }
});

router.get("/todos/:id", async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id,req.body).lean().exec();
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({error:err.messege});
    }
});

router.patch("/todos/:id", async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean().exec();
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({error:err.messege});
    }
});

router.delete("/todos/:id", async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({error:err.messege});
    }
});

module.exports = router;