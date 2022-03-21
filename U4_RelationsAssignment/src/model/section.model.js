const mongoose = require("mongoose")

const sectionSchema = new mongoose.Schema({
    sectionName:{type:String,required:true},
    bookName:{type:mongoose.Schema.Types.ObjectId,ref:"book", required:true},
    totalBooks:{type:Number,required:true,default:0},
},
    {
        versionKey:false,
        timestamps:true,
        
})
const Section = mongoose.model("section",sectionSchema)
module.exports = Section;