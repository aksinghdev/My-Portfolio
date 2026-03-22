



// import nodemailer from "nodemailer"

// export const mailSender = async(email,title,body)=>{
//   try{

//     // through simple mail
//     // const transporter = nodemailer.createTransport({
//     //   service:"gmail",
//     //   auth:{
//     //     user:process.env.MAIL_USER,
//     //     pass:process.env.MAIL_PASS
//     //   }

//     // })


//     // by usin brevo
//     const transporter = nodemailer.createTransport({
//       host: "smtp-relay.brevo.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.BREVO_SMTP_USER,
//         pass: process.env.BREVO_SMTP_PASS,
//       },
//     });

//     const info = await transporter.sendMail({

//       from: `"Portfolio"<${process.env.BREVO_SMTP_USER}>`,
//       to:email,
//       subject:title,
//       html:body

//     });
//     return info;
//   }catch(error){
//     console.log("Mailsender error, nodemailer failed",error);
//     throw error;
//   }
// }


import SibApiV3Sdk from "@getbrevo/brevo";

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();  
apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,           
  process.env.BREVO_API_KEY
);

export const mailSender = async(email, title, body) => {
  try {

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();   
    sendSmtpEmail.to = [{ email: email }];
    sendSmtpEmail.sender = { 
      email: "a5ac09001@smtp-brevo.com",
      name: "Portfolio" 
    };
    sendSmtpEmail.subject = title;
    sendSmtpEmail.htmlContent = body;

    const info = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return info;

  } catch(error) {
    console.log("Mailsender error, nodemailer failed", error);
    throw error;
  }
}