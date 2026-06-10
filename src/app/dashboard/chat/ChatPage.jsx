"use client";
import React, { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    setInput("");

    // fake assistant reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "I got your message: " + input },
      ]);
    }, 500);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b bg-white">
        <h2 className="font-semibold text-lg">Assistant</h2>
        <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
          Free Offer
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 max-w-[70%] rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-[#a195ee] text-white rounded-br-none"
                  : "bg-white text-black rounded-bl-none border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-white border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-lg px-4 py-2 outline-none"
          placeholder="Message..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-[#a195ee] hover:bg-[#5d48e9] text-white rounded-lg cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
}
