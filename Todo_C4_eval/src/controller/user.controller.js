const express = require("express");
const User = require("../model/user.model")

const router = express.Router()
router.post("/register", async(req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send({error:err.messege});
    }
});

router.post("/login", async(req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({error:err.messege});
    }
})


module.exports = router;