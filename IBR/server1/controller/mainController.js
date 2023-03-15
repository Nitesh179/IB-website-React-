import Contact from "../model/contactModel.js";
import Registration from "../model/registrationModel.js";

//registration
export const registration = async (req,res,next)=>{
    try {
        const date = new Date();
        // const todaysDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        const todaysDate = date.toLocaleString();
        
        let docs = req.files.map(file=>file.filename);
        req.body.docs = docs;
        req.body.isVerified = 0;
        req.body.dateOfRegistration = todaysDate;
        req.body.isVerifiedByAdmin = 0;
        console.log(req.body);
        const result = await Registration.create(req.body);
        return res.status(200).json({status:true,result}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false}); 
    }
}

//contact
export const contact = async (req,res,next)=>{
    try {
        let result = await Contact.create(req.body);
        res.status(200).json({status:true,result})
    } catch (error) {
        console.log(error);
        res.status(500).json({status:false})
        
    }
}

