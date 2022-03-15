const express = require("express");
const {body,validationResult} = require("express-validator")
const router = express.Router();


const User = require("../models/user.model");
router.post(
    "/",
     body("first_name").isLength({min:1}).withMessage("first name is required"),
     body("last_name").isLength({min:1}).withMessage("last name is required"),
     body("email").isEmail().withMessage("a valid email is required"),
     body("pincode").isLength({min:6 , max:6}).withMessage("pincode of minimum 6 digits is required"),
     body("gender").isLength({min:5}).withMessage("gender is required"),
     body("age").isLength({min:1 , max:100}).withMessage("age is required and within a limit of 1 to 100"),
     
     async(req,res) => {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
             return res.status(400).json({data: errors.array()});
         }
    const user = await User.create(req.body);
    return res.status(201).json({data: user})
});

module.exports = router;