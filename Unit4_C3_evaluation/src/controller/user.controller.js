const express = require("express")
const User = require("../models/user.model.js")



const router = express.Router()

router.post('',
body("firstName").isLength({min:3,max:30}).withMessage("name should be atleast 3 and atmost 30 required"),
body("lastName").isLength({min:3,max:30}).withMessage("name should be atleast 3 and atmost 30 required"),
body("age").isLength({min:1,max:150}).withMessage("age is required and should be bwt 1 and 150"),
body("email").withMessage("a valid email is required")
,async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmplty()){
       return res.status(201).json({data: error.array()});
    }
    const user = await User.create(req.body)
    return res.status(200).json({data : user})
})
module.exports = router;