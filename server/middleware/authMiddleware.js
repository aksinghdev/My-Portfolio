import jwt from "jsonwebtoken"

export const auth = (req,res,next)=>{

  const token = req.cookies.token
  console.log("inside middleware token",token);
  if(!token){

    return res.status(401).json({
      success:false,
      message:"Token missing"
    })
  }

  try{
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    req.user = decode
    next()
  }
  catch(error){

    return res.status(401).json({
      success:false,
      message:"Invalid token"
    })

  }

}