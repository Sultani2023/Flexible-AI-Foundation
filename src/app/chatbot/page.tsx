'use client';

import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function MiniProjectChatbotPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: 'bot', text: 'Hello! I am your mini AI chatbot. Ask me anything!' },
  ]);
  const [input, setInput] = useState<string>('');

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text }]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: `You said: "${text}". Great job! This is how chatbots respond.`,
        },
      ]);
    }, 600);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-100 to-red-100 py-12 px-6">

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link href="/">
          <button className="flex items-center gap-2 text-orange-700 hover:underline">
            <ArrowLeft size={20} />
            Back
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-12">

        {/* ---------------------------------------------------
           PART 1 — PROJECT OVERVIEW
        ------------------------------------------------------ */}
        <section>
          <h1 className="text-3xl font-bold text-orange-700 mb-4">
            Mini Project: Build a Simple Chat Bot 🤖💬
          </h1>

          <p className="text-gray-700 mb-6">
            In this project, you will understand how chatbots work and build a small demo.
            This helps you learn inputs, outputs, logic, and user interaction — the basics of AI systems.
          </p>

          <h2 className="text-xl font-semibold text-orange-600 mb-2">📺 Watch: Build a Real Chatbot</h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yBa3od-Z330"
              title="How to Build a Chatbot"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-xl font-semibold text-orange-600 mb-2">📌 What You Will Learn</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>How a chatbot receives input</li>
            <li>How it responds with logic</li>
            <li>How messages are displayed in UI</li>
          </ul>

          <h2 className="text-xl font-semibold text-orange-600 mt-6 mb-2">🛠 Tools Used</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>React (Next.js)</li>
            <li>useState for managing messages</li>
            <li>Dynamic message rendering</li>
          </ul>

          <h2 className="text-xl font-semibold text-orange-600 mt-6 mb-2">🎯 Example Output</h2>
          <p className="text-gray-700">
            You type: <strong>"Hello"</strong><br />
            Chatbot replies: <em>"You said: Hello. Great job!"</em>
          </p>

          <a href="#chatbot-demo">
            <button className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-md">
              Start Project 🚀
            </button>
          </a>
        </section>

        <hr className="border-orange-300" />

        {/* ---------------------------------------------------
           PART 2 — WORKING CHATBOT DEMO
        ------------------------------------------------------ */}
        <section id="chatbot-demo">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🔥 Chatbot Demo
          </h2>

          {/* Chat Window */}
          <div className="bg-white rounded-xl shadow-inner h-80 overflow-y-auto p-4 mb-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'mr-auto bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400"
              placeholder="Type a message..."
            />

            <button
              onClick={() => handleSend(input)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white px-4 py-3 rounded-xl flex items-center gap-2 shadow-md"
            >
              <Send size={20} />
              Send
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
