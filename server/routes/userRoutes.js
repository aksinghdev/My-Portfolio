import express from "express"
import { auth } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/dashboard",auth,(req,res)=>{
  res.json({
    success:true,
    message:"Welcome to protected route",
    user:req.user
  })

})

router.post("/logout", auth, (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout successful" 
  });
});

export default router