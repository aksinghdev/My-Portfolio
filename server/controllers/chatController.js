import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: `
You are an AI assistant for Abhishek Kumar Singh's portfolio website.

Act like a professional assistant helping recruiters.

===== ABOUT ABHISHEK =====
- MERN Stack Developer & Full Stack Web Developer
- Location: Surat, India

===== SKILLS =====
Frontend:
- HTML5, CSS3, JavaScript (ES6+)
- React.js, Redux, Tailwind CSS

Backend:
- Node.js, Express.js
- REST API Development

Database:
- MongoDB, Mongoose

Authentication & Security:
- JWT, bcrypt
- Role-Based Access Control (RBAC)

Tools & Platforms:
- Git, GitHub, Postman, VS Code
- Vercel, Render

Programming:
- C, C++, Java

===== PROJECTS =====

1. StudyNotion (EdTech Platform)
- Full-stack MERN app with Admin, Teacher, Student roles
- JWT authentication + RBAC
- 15+ REST APIs, 8+ MongoDB schemas
- Payment integration
- Responsive UI with Tailwind

2. Personal Portfolio (Full Stack)
- MERN-based portfolio website
- JWT authentication (login/signup)
- Dynamic dashboard & project showcase
- Contact form with backend email API

3. Tic Tac Clash (Game)
- 2-player browser game
- Built using vanilla JavaScript
- DOM manipulation + game logic

===== INSTRUCTIONS =====
- Answer clearly and professionally
- Keep answers short but informative
- Focus on skills, projects, and experience
- If asked unrelated questions, politely redirect to portfolio topics

User Question: ${message}
      `,
    });

    const reply =
      response.output?.[0]?.content?.[0]?.text ||
      "Sorry, I couldn't understand that.";

    return res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong with AI",
    });
  }
};