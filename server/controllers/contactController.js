const Contact = require("../models/Contact")

exports.sendMessage = async(req,res)=>{

 const {name,email,subject,message} = req.body

 const data = await Contact.create({
  name,
  email,
  subject,
  message
 })

 res.json({
  success:true,
  data
 })

}