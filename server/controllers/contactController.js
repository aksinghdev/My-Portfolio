

import Message from "../models/Message";

export const sendMessage = async(req,res)=>{

    const {name,email,mobileNo,subject,message} = req.body

    try{
        const person = await Message.create(
            name,
            email,
            mobileNo,
            subject,
            message,
        )
        const data = person; 
        return res.status(200).json({
            success : true,
            message : "Message submited successfuly",
            data,
        });
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            success : false,
            message : "somthing went worng, message not sent"
        });
    }
}