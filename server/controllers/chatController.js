import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    // validation
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // AI response
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: `
You are an AI assistant for my portfolio website.

About me:
- Name: Abhishek Kumar Singh
- MERN Stack Developer
- Skills: React, Node.js, MongoDB, Express
- Projects: Portfolio Website, StudyNotion (EdTech Platform)
- Answer professionally as if helping a recruiter understand my profile.

User Question: ${message}
      `,
    });

    // safe extraction
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