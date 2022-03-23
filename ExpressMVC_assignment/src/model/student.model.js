const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    rollId:{type:Number,required:true},
    currBatch:{type:mongoose.Schema.Types.ObjectId,ref:"batch", required:true},
    studentId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
    
},
    {
        versionKey:false,
        timestamps:true,
        
})
const Student = mongoose.model("student",studentSchema)
module.exports = Student;