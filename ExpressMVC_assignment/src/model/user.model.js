const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    dateOfBirth:{tyep:String,required:true},
    type:{type:String,enum:["student","admin","instructor"],default:"student"},
    evaluationId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
},
    {
        versionKey:false,
        timestamps:true,
        
})
const User = mongoose.model("user",userSchema)
module.exports = User;