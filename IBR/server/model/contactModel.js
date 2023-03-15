import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
    isChecked:{
        type:Number,
        default:0,
    }
})
const Contact = mongoose.model("contact",contactSchema)
export default Contact