import mongoose from "mongoose";
const studentModel = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    studentId:{
        type:mongoose.Schema.ObjectId,
        ref:'Registration'
    }
})
const Student = mongoose.model("student",studentModel);
export default Student;