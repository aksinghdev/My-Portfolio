



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


export const mailSender = async (email, title, body) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: {
          email: "krabhishek8828@gmail.com",
          name: "Portfolio"
        },
        to: [{ email }],
        subject: title,
        htmlContent: body
      })
    });

    const data = await response.json();
    console.log("Email sent:", data);

    return data;

  } catch (error) {
    console.error("MailSender Error:", error.message);
    throw error;
  }
};