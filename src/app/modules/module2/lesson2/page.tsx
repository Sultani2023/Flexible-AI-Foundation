"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson2() {
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
          Module 2: AI Content Creation for Freelance Writing
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 2: Using AI to Create Blog Posts
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn how AI helps you research, outline,
          and write professional blog posts faster and more effectively.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Why Bloggers Use AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Why Bloggers Use AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI tools are now part of every content creator’s workflow because
            they save time and help produce high-quality articles quickly.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Faster writing process</li>
            <li>Better topic ideas</li>
            <li>Easy keyword research</li>
            <li>Improved structure and clarity</li>
            <li>Helps avoid writer’s block</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              📌 AI is your writing assistant — not a replacement.  
              It helps you think faster and write smarter.
            </p>
          </div>
        </div>

        {/* SECTION 2: Steps to Create a Blog Post with AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Steps to Create a Blog Post Using AI
        </h3>

        <div className="space-y-6 mb-10 text-gray-700 leading-relaxed">

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Step 1: Ask for Topic Ideas</h4>
            <p>AI can give you 10–20 topics based on your niche (travel, lifestyle, business, etc.).</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Step 2: Generate an Outline</h4>
            <p>AI creates structured headings (H2, H3) so your article flows naturally.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Step 3: Write Paragraphs from Each Heading</h4>
            <p>You can ask AI: “Write 1–2 paragraphs for this section.”</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Step 4: Refine & Personalize</h4>
            <p>Edit the content with your own tone, examples, and experiences.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Step 5: Proofread</h4>
            <p>Let AI check grammar, tone, transitions, and clarity.</p>
          </div>

        </div>

        {/* SECTION 3: Best AI Tools for Blogging */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Best AI Tools for Blog Writing
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🤖 ChatGPT</h4>
            <p>Excellent for outlines, paragraphs, SEO keywords, and rewriting.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🌐 Google Gemini</h4>
            <p>Great for research and fact-checking because it connects to Google Search.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Claude AI</h4>
            <p>Known for long, clean, professional writing — very good for long blogs.</p>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 2</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI helps bloggers research, outline, and write content faster. <br />
            ✔ You should still add your own voice and personality. <br />
            ✔ ChatGPT, Gemini, and Claude are the best tools for long-form content. <br />
            ✔ AI makes the writing process easier — but your creativity matters most.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson3"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 
            text-white font-bold rounded-full shadow-md hover:shadow-xl 
            hover:scale-105 transition"
        >
          Continue to Lesson 3 →
        </Link>
      </div>

    </div>
  );
}
