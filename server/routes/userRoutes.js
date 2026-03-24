import express from "express"
import { signup,login } from "../controllers/authControllers.js"
import { auth } from "../middleware/authMiddleware.js"
import { sendMessage } from "../controllers/contactController.js"

const router = express.Router()

router.post("/signup",signup)

router.post("/login",login);

router.post("/contact",sendMessage)

export default router


