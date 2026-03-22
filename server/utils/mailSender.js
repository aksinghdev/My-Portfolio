



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


// import brevo from "@getbrevo/brevo";
import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

export const mailSender = async (email, title, body) => {
  try {
    const sendSmtpEmail = {
      to: [{ email: email }],
      sender: {
        email: "krabhishek8828@gmail.com", // your verified email
        name: "Portfolio"
      },
      subject: title,
      htmlContent: body
    };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Email sent successfully:", response);
    return response;

  } catch (error) {
    console.error("MailSender Error:", error.response?.body || error.message);
    throw error;
  }
};
