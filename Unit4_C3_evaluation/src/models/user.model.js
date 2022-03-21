
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true,minlength: 3, maxlength: 30},
    lastName:{type:String,minlength: 3, maxlength: 30},
    age:{type:Number,required:true,minlength: 0, maxlength: 30},
    email:{},
    profileImage:[{type:URL,required:true}]
},
    {
        versionKey:false,
        timestamps:true,
        
})
const User = mongoose.model("user",userSchema)
module.exports = User;