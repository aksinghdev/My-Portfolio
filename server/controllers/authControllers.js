import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mailSender } from "../utils/mailSender.js";
import { welcomeEmailTemplate } from "../../server/mailtemplates/welcomeEmailTemplate.js";


export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Fetched data : ", name, email, password);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  await mailSender(
    email,
    "Welcome to My Portfolio ",
    welcomeEmailTemplate(name),
  );

  res.json({
    success: true,
    user,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("inside login controller", email, " and ", password);

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      success: false,
      message: "User not found",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.json({
      success: false,
      message: "Incorrect password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 din
    sameSite: "lax", // ✅ yeh zaroori hai localhost pe
    secure: false, // ✅ localhost pe false, production mein true karna
  });
  console.log("inside login controllwer user : ",user);
  res.json({
    success: true,
    token,
    // data:user,
    user,
    message: "loged in successfully backend controller ",
  });
};
