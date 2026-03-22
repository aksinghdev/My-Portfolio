import nodemailer from "nodemailer"

export const mailSender = async(email,title,body)=>{
  try{
    const transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
      }

    })

    const info = await transporter.sendMail({

      from: `"Portfolio"${process.env.MAIL_USER}`,
      to:email,
      subject:title,
      html:body

    });
    return info;
  }catch(error){
    console.log("Mailsender error, nodemailer failed",error);
    throw error;
  }
}