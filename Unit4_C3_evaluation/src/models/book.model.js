const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    like:{type:Number,required:true,default:0},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
    
},
    {
        versionKey:false,
        timestamps:true,
        
})
const Book = mongoose.model("book",bookSchema)
module.exports = Book;