"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson8() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module2"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 2: AI Content Creation
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 8: Building a Freelance Writing Portfolio Using AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A strong portfolio helps clients trust your skills. In this lesson,
          you will learn how to use AI tools to create writing samples, design
          a professional portfolio, prepare proposals, and communicate with clients
          confidently and professionally.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Creating Writing Samples with AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Your writing samples show clients the quality of your work.
            AI tools like ChatGPT and Gemini can help you create clean, structured drafts
            that you can edit and improve.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Choose 3–5 topics in your niche (health, business, travel, beauty, etc.).</li>
            <li>Create a draft using AI, then rewrite and humanize it.</li>
            <li>Add examples, personal insights, and unique style.</li>
            <li>Format each article with headings, bullet points, and short paragraphs.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Your portfolio doesn’t need real client work at the beginning —
              well-written samples are enough to get hired.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Using AI to Design a Professional Portfolio
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Your portfolio can be a simple document, Google Drive folder,
            or a small website. AI tools make the design process easier.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Canva AI:</strong> Create a clean portfolio PDF or webpage.</li>
            <li><strong>Notion:</strong> Build a free online portfolio page.</li>
            <li><strong>ChatGPT:</strong> Generate your bio, introduction, and project descriptions.</li>
            <li><strong>Gemini:</strong> Rewrite text to sound polished and professional.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip: Add your name, niche, writing samples, short bio, and contact info.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Preparing Proposals for Clients
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            A proposal tells the client what you will do and why you’re a good fit.
            AI can help you write clear, convincing proposals in minutes.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Describe your understanding of the client’s project.</li>
            <li>Explain how you will complete the work.</li>
            <li>Show examples of similar writing.</li>
            <li>Write with confidence and simple language.</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: “I will write a well-researched, SEO-optimized article
              tailored to your audience using clear structure and engaging tone.”
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Using AI to Respond to Clients Professionally
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Communication is key in freelancing. AI helps you respond quickly and professionally —
            especially if English is not your first language.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Rewrite messages to sound friendly and professional.</li>
            <li>Translate messages into clear English.</li>
            <li>Summarize long client messages.</li>
            <li>Generate polite follow-up messages.</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Your goal is to sound confident, respectful, and reliable — AI helps you do that easily.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 8</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Create writing samples with AI and personalize them. <br />
            ✔ Use tools like Canva, Notion, and ChatGPT to design your portfolio. <br />
            ✔ Prepare confident proposals using AI guidance. <br />
            ✔ Use AI to communicate professionally with clients.  
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Back to Module Overview →
        </Link>
      </div>

    </div>
  );
}
