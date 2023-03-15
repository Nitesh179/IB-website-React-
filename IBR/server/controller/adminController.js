import Contact from "../model/contactModel.js";
import Gallery from "../model/galleryModel.js";
import News from "../model/newsModel.js";
import Placement from "../model/placementModel.js";
import Registration from "../model/registrationModel.js";
import nodemailer from 'nodemailer'

//Gallery list
export const galleryList = async (req,res,next)=>{
    try {
        let result = await Gallery.find().sort({_id:-1});
        return res.status(200).json({status:true,result}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false}); 
    }
}

//Gallery Upload
export const galleryImageUpload = async (req,res,next)=>{
    try {
        const date = new Date();
        let newImage = {
            image:req.file.filename,
            caption:req.body.caption,
            category:req.body.category,
            dateOfUpload:date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        };
        let result = await Gallery.create(newImage);
        
        return res.status(200).json({status:true,result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

//Gallery delete
export const galleryImageDelete = async (req,res,next)=>{
    try {
        await Gallery.deleteOne({_id:req.params.id});
        return res.status(200).json({status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

//plcament list 
export const placementList = async (req,res,next)=>{
    try {
        let result = await Placement.find().sort({_id:-1});
        return res.status(200).json({status:true,result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
        
    }
}
//placement upload
export const placementImageUpload=async (req,res)=>{
    try {
        let newPlacement = {
            name :req.body.name,
            image :req.file.filename,
            company : req.body.company
        }
       let result =await  Placement.create(newPlacement);
       return res.status(200).json({status:true,result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});

    }
}
//placement delete
export const placementDelete = async (req,res,next)=>{
    try {
        await Placement.deleteOne({_id:req.params.id});
        return res.status(200).json({status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

//news list 
export const newsList = async (req,res,next)=>{
    try {
        let result = await News.find().sort({_id:-1}).limit(3);
        return res.status(200).json({status:true,result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
        
    }
}
//news add
export const newsUpdate=async (req,res)=>{
    try {
        console.log(req.body);
        const date  = new Date();
        req.body.date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        let result =await News.create(req.body);
        return res.status(200).json({status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    } 
}


//news delete
export const newsDelete = async (req,res,next)=>{
    try {
        await News.deleteOne({_id:req.params.id});
        return res.status(200).json({status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

//delete registration
export const deleteRegistration = async (req,res,next)=>{
    try {
        await Registration.deleteOne({_id:req.params.id});
        return res.status(200).json({status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

//verify student
export const verifyStudent = async (req,res,next)=>{
    try {
        await Registration.updateOne({_id:req.params.id},{$set:{is_verified:1}});
        return res.status(200).json({status:true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

//registration list
export const registrationList = async (req,res,next)=>{
    try {
        let result = await Registration.find().sort({_id:-1});
        return res.status(200).json({status:true,result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false});
    }
}

export const contactList = async (req,res,next)=>{
    try {
        let result = await Contact.find({isChecked:0});
        res.status(200).json({status:true,result})
    } catch (error) {
        console.log(error);
        res.status(500).json({status:false})  
    }
}

//reply
export const reply = async (req,res,next)=>{
    try {
        console.log(req.body);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'infobeansfoundationhp@gmail.com',
              pass: 'wcmviidvtnjlqell'
            }
          });
          
          var mailOptions = {
            from: 'infobeansfoundationhp@gmail.com',
            to: req.body.email,
            subject: 'Reply from Infobeans Foundation',
            text: `Hello ${req.body.name},  ${req.body.reply}`
          };
          console.log("=> "+req.body.email);
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              return res.status(500).json({status:false})
            } else {
              console.log('Email sent: ' + info.response);
              Contact.updateOne({_id:req.body._id},{$set:{isChecked:1}}).then(result=>res.status(200).json({status:true})).catch(result=>res.status(500).json({status:false}))
            }
          });
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false})
    }
}