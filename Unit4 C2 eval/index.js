const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = ()=> {
    return mongoose.connect("mongodb+srv://manjari:pattinson@cluster0.fjd30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

//user Schema
const user = new mongoose.Schema(
    {
        firstName: {type:String , required: true},
        middleName : {type: String},
        lastName : {type:String , required: true},
        age : {type:Number , required: true},
        email : {type:String , required: true , unique:true},
        address : {type:String , required: true},
        gender : {type:String ,default:"female"},
        type : {type:String , default:"customer" },
        timestamps: true,  
        // masterAccount : {

        // }
    }
)

//BranchDetail schema
const BranchDetail = new mongoose.Schema(
    {
        name: {type: String , required: true},
        address: {type: String , required: true},
        IFSC:{type: String , required: true},
        MICR: {type: Number , required: true},
        timestamps: true, 
        accountNo:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"MasterAccount",
            required:true,
        }
    }

);

//MasterAccount Schema
const MasterAccount = new mongoose.Schema(
    {
        balance: {type: Number , required: true},
        timestamps: true, 
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        manager:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
    }
);

//SavingsAccount Schema
const SavingsAccount = new mongoose.Schema(
    {
        accountNo: {type: String , required: true , unique:true},
        balance: {type: Number , required: true},
        interestRate:{type: Number , required: true},
        timestamps: true, 
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    }
);

//FixedAccount Schema
const FixedAccount = new mongoose.Schema(
    {
        accountNo: {type: String , required: true , unique:true},
        balance: {type: Number , required: true},
        interestRate:{type: Number , required: true},
        startDate: {type:Date , required:true},
        matureDate: {type:Date , required:true},
        timestamps: true, 
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    }
);

app.get("/users", async (req,res) =>{
    try{
        const users = await MasterAccount.find().lean().exec();

        return res.status(200).send({users: MasterAccount})
    }
    catch(err){
        return res.status(201).send({message:"error occured"});
    }
})

app.post("/users" , async(req,res) =>{
    try{
        const users = await SavingsAccount.create(req.body);

        return res.status(201).send({users: MasterAccount})
    }
    catch(err){
        return res.status(500).send({message:"error occured"});
    }
})

app.post("/users" , async(req,res) =>{
    try{
        const users = await FixedAccount.create(req.body);

        return res.status(201).send({users: MasterAccount})
    }
    catch(err){
        return res.status(500).send({message:"error occured"});
    }
})

app.get("/users/:id", async (req,res) =>{
    try{
        const user = await MasterAccount.findById(req.params.id,req.accountNo,req.balance);

    return res.status(201).send({users: MasterAccount})
    }
    catch(err){
        return res.status(500).send({message:"error occured"});
    }
})

app.delete("/users/:id", async (req,res) =>{
    try{
        const user = await FixedAccount.findByIdAndDelete(req.params.id);

    return res.status(200).send({users: MasterAccount})
    }
    catch(err){
        return res.status(500).send({message:"error occured"});
    }
})

app.listen(4000 , async() =>{
    try{
        await connect();
    }
    catch(err){
        console.log("error:",err);
    }
    console.log("listening on port 4000");
})