
import express from "express";
import { chatWithAI } from "../controllers/chatControllers";

const router = express.Router();

router.post("/chat", chatWithAI);

export default router;