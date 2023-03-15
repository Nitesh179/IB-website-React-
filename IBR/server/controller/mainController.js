import Contact from "../model/contactModel.js";
import Registration from "../model/registrationModel.js";

//registration
export const registration = async (req,res,next)=>{
    try {
        const date=new Date();
        const todayDateTime=date.toLocaleString();

// console.log("=> "+todayDateTime);
    //    console.log(JSON.parse(req.body.data)) // data

     let imagesData=req.files.map(img=>{
        return img.filename;
     })
     
     //  console.log(req.body.data); // imagefilenames
     
     let img=req.body.docs;
     let data=JSON.parse(req.body.data);
     data.docs=[...imagesData];
     data.dateOfRegistration=todayDateTime;
    //  console.log(data)
    data.isVerifiedByAdmin=0;

    const result= await Registration.create(data);
     
    return res.status(201).json({status:true,result})
    }
    catch (error) {
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



//registration confirmation

export const sendMail = async (req,res,next)=>{
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
            subject: 'Registration confirmation from Infobeans Foundation',
            text: `Hello ${req.body.name}, congratulations your registration succesfull`
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