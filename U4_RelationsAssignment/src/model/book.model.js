const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName:{type:Number,required:true},
    authorName:{type:mongoose.Schema.Types.ObjectId,ref:"author", required:true},
    sectionName:{type:mongoose.Schema.Types.ObjectId,ref:"section", required:true,unique:true}
    
},
    {
        versionKey:false,
        timestamps:true,
        
})
const Book = mongoose.model("book",bookSchema)
module.exports = Book;