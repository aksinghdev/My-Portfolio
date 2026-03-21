
import dns from "dns"
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import mongoose from "mongoose";

export const connectDB = async () => {

  console.log("db url: ",process.env.MONGODB_URL);
  try {

    await mongoose.connect(process.env.MONGODB_URL)

    console.log("MongoDB connected successfully")

  }
  catch(error){

    console.log("MongoDB connection failed")
    console.error(error)
    process.exit(1)

  }

}