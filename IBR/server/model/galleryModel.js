import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    image:{
        type:String
    },
    caption:{
        type:String,
    },
    category:{
        type:String
    },
    dateOfUpload:{
        type:String
    }
})
const Gallery = mongoose.model('gallery',gallerySchema);
export default Gallery;