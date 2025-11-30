"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

     <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module1"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 1: Introduction to AI
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 5: Common AI Tools & Applications
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          AI tools are all around us — helping us write, design, translate,
          create images, edit videos, and even communicate.  
          In this lesson, you’ll explore the most popular AI tools used today.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: ChatGPT */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. ChatGPT (OpenAI)
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          ChatGPT is one of the most advanced AI language models.  
          It can answer questions, write essays, help with homework, generate ideas,
          translate text, analyze documents, and even assist with coding.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            📌 ChatGPT is like a smart assistant that understands and generates human-like text.
          </p>
        </div>

        {/* SECTION 2: Google Bard / Gemini */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Google Bard / Gemini
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Google’s AI system, originally called Bard and now known as Gemini,
          is designed for reasoning, answering questions, generating content,
          summarizing long information, and helping with research.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Example:  
            Gemini can read an entire article and provide a clear, simple summary.
          </p>
        </div>

        {/* SECTION 3: Midjourney / DALL·E */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Midjourney & DALL·E (AI Image Generators)
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          These tools generate images from text.  
          You simply describe what you want ("a girl reading a book under the stars"),
          and the AI creates stunning artwork.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li><strong>Midjourney:</strong> Highly artistic, detailed images.</li>
          <li><strong>DALL·E:</strong> Creative, realistic, great for graphics & ads.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            These tools are perfect for designers, freelancers, educators, and creators.
          </p>
        </div>

        {/* SECTION 4: Canva AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Canva AI Features
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Canva has powerful AI features such as:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li><strong>Magic Write:</strong> Writes text, posts, emails, and descriptions.</li>
          <li><strong>Magic Edit:</strong> Edits images with simple instructions.</li>
          <li><strong>AI Background Remover:</strong> Deletes backgrounds in seconds.</li>
          <li><strong>AI Presentations:</strong> Auto-creates slides based on your topic.</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Canva AI makes design easy even for beginners.
          </p>
        </div>

        {/* SECTION 5: Microsoft Copilot */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          5. Microsoft Copilot
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Copilot is integrated into Microsoft apps like Word, Excel, PowerPoint,
          Outlook, and Teams. It helps with:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li>Writing emails</li>
          <li>Creating PowerPoints automatically</li>
          <li>Summarizing long documents</li>
          <li>Analyzing Excel sheets with simple prompts</li>
        </ul>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Copilot boosts productivity for students, teachers, and professionals.
          </p>
        </div>

        {/* SECTION 6: YouTube Auto-Captions */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          6. YouTube Auto-Captions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          YouTube uses AI to automatically create captions for videos.  
          This helps with accessibility, language learning, and reaching a wider audience.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
          <p className="text-gray-800 font-medium">
            Auto-captions are created using speech-to-text AI that learns from millions of videos.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-12">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 5</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ ChatGPT helps with writing, ideas, and communication. <br />
            ✔ Gemini helps with research, summaries, and reasoning. <br />
            ✔ Midjourney & DALL·E create stunning AI images. <br />
            ✔ Canva AI improves design for everyone. <br />
            ✔ Microsoft Copilot increases productivity in Office apps. <br />
            ✔ YouTube uses AI for auto-captions and accessibility.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson6"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 6 →
        </Link>
      </div>
    </div>
  );
}
