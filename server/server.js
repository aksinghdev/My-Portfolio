import dotenv from "dotenv"
dotenv.config({ path: "./server/.env" });

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import { connectDB } from "./config/connectDB.js"
import authRoutes from "./routes/authRoutes.js"
import userRautes from "./routes/userRoutes.js"
// import contactRautes from "./routes/contactRoute.js"



const PORT = process.env.PORT || 3800;

const app = express()


connectDB();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
];
// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(
  {
    // origin : "http://localhost:3005",
    origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
//   it use forauthorization headeres
    credentials: true,
    }
))

// app routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/user",userRautes)
// app.use("/api/v1/auth",contactRautes)

// default routes
app.get("/",(req , res) =>{
    return res.json({
        success: true,
        messge: "Congratulation Abhishek Your Portfolio server is running and you are inside the default route... "
    });
});


app.listen(PORT,()=>{
  console.log(`Portfolio Server running at port :${PORT} `);
})