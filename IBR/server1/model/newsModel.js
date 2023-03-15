import mongoose from "mongoose";

const newsSchema=mongoose.Schema({
    headline:{
        type:String,
        required: true
    },
    fullnews:{
        type:String,
        required: true
    },
    date:{
        type:String
    }
})

const News=new mongoose.model('News',newsSchema);
export default News;