import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
    tls:{
      rejectUnauthorized:false
  },
  auth: {
    user: 'grofis.togma@gmail.com',
    pass: "poseydo5913",
    // 'wcmviidvtnjlqell'
  },
  connectionTimeout: 5 * 60 * 1000, // 5 min
});

var mailOptions = {
  from: 'grofis.togma@gmail.com',
  to: 'nematansari0@gmail.com',
  subject: 'meri copy check hue ke nhi abhi',
  text: 'im aman morya please check my first round result and update me'
};
for(let i=0;i<=10;i++){


transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("sms Send");
  }
});
}