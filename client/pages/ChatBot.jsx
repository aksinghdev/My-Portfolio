import React, { useState } from "react";
import { apiConnector } from "../api/apiConnector";
import { chatEndpoints } from "../api/apis";

const { CHAT_API } = chatEndpoints;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about Abhishek 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const currentMessage = input;
    setInput("");
    setLoading(true);

    try {
      const response = await apiConnector(
        "POST",
        CHAT_API,
        { message: currentMessage }
      );

      const botReply = response?.data?.reply;

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply },
      ]);
    } catch (error) {
      console.log("CHAT ERROR:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error, try again!" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 w-[95%] sm:w-[350px] h-[500px] bg-gray-900 text-white rounded-2xl shadow-2xl flex flex-col z-50">
          
          {/* Header */}
          <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 flex justify-between items-center rounded-t-2xl">
            <span className="font-semibold">AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 ml-auto"
                    : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <p className="text-gray-400 text-xs">Typing...</p>
            )}
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 text-white outline-none"
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}