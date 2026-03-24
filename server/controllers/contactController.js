

import Message from "../models/Message.js";

export const sendMessage = async(req,res)=>{

    const {name,email,mobileNo,subject,message} = req.body
    console.log("print get data ",name,email,subject,message);
    try{
        const person = await Message.create(
            name,
            email,
            mobileNo,
            subject,
            message,
        )
        // const data = person; 
        return res.status(200).json({
            success : true,
            message : "Message submited successfuly",
            person,
        });
    }
    catch(e){
        return res.status(500).json({
            success : false,
            message : "somthing went worng, message not sent"
        });
        console.error(e);
    }
}