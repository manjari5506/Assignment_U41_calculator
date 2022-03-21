const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    bookName:{type:String,required:true},
    
    numberOfBooks:{type:Number,required:true,default:0},
    
},
    {
        versionKey:false,
        timestamps:true,
        
})
const Author = mongoose.model("author",authorSchema)
module.exports = Author;