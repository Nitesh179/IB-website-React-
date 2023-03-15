import mongoose from "mongoose";
const registerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  fathersname: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  maritialstatus: {
    type: String,
    required: true,
  },
  annualincome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
    // unique: true,
  },
  alternatecontact: {
    type: Number,
    required: true,
    // unique: true,
  },
  qualification10:{ },
  qualification12:{ },
  qualificationUG:{ },
  qualificationPG:{ },
  docs: [],
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  q1: {
    type: String,
    // required: true,
  },
  q2: {
    type: String,
    // required: true,
  },
  q3: {
    type: String,
    // required: true,
  },
  q4: {
    type: String,
    // required: true,
  },
  q5: {
    type: String,
    // required: true,
  },
  isVerified: {
    type: Number,
    default: 0,
  },
  isVerifiedByAdmin: {
    type: Number,
    default: 0,
  },
  dateOfRegistration:{
    type:String,
    required:true
  }
});
const Registration = new mongoose.model("Registration", registerSchema);
export default Registration;
