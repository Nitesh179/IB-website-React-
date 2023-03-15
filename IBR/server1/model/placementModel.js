import mongoose from "mongoose";

const placementSchema = mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    company:{
        type:String
    }
})
const Placement = mongoose.model('placement',placementSchema);
export default Placement;