"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson5() {
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
          Lesson 5: Editing & Proofreading With AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn how AI can help you edit, proofread, and improve your writing 
          by fixing grammar, adjusting tone, making paragraphs smoother, and 
          removing unnecessary words.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Grammar and spelling corrections */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Grammar & Spelling Corrections
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          AI tools like ChatGPT, Grammarly, and Google Docs AI can quickly detect grammar mistakes, 
          spelling errors, and awkward sentences. They help you polish your writing without needing 
          a human editor.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li><strong>Fix typos:</strong> Missing letters, wrong words, or spelling issues.</li>
          <li><strong>Correct grammar:</strong> Tenses, subject-verb agreement, punctuation.</li>
          <li><strong>Rewrite unclear phrases:</strong> AI suggests clearer alternatives.</li>
        </ul>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Example prompt: “Fix grammar, spelling, and clarity in this paragraph while keeping my tone.”
          </p>
        </div>

        {/* SECTION 2: Tone adjustment */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Tone Adjustment (Formal, Friendly, Persuasive)
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Tone is one of the most important parts of writing. AI can help rewrite your content to sound 
          exactly how you want it: professional, friendly, confident, persuasive, or simple.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li><strong>Formal tone:</strong> Good for business emails, reports, and proposals.</li>
          <li><strong>Friendly tone:</strong> Ideal for social media, blogs, and personal brands.</li>
          <li><strong>Persuasive tone:</strong> Useful for marketing, sales pages, and CTAs.</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Example prompt: “Rewrite this paragraph in a friendly and warm tone while keeping the meaning the same.”
          </p>
        </div>

        {/* SECTION 3: Making paragraphs smoother */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Making Paragraphs Smoother
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Smooth writing keeps readers engaged. AI can improve flow by rearranging sentences, 
          adding transitions, and breaking long paragraphs into readable chunks.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li><strong>Add transitions:</strong> AI adds phrases like “However,” “In addition,” “On the other hand.”</li>
          <li><strong>Improve flow:</strong> Ensures ideas move logically from one to the next.</li>
          <li><strong>Split long paragraphs:</strong> Helps readers scan and understand quickly.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Example prompt: “Improve the flow of this paragraph and add transitions between ideas.”
          </p>
        </div>

        {/* SECTION 4: Cutting unnecessary words */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Cutting Unnecessary Words
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          AI helps make your writing cleaner and more direct by removing extra words that don’t add meaning. 
          This is essential for professional writing, articles, and social media content.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          <li><strong>Remove filler words:</strong> very, really, actually, basically.</li>
          <li><strong>Shorten long sentences:</strong> AI rewrites them concisely.</li>
          <li><strong>Keep meaning clear:</strong> No important idea is lost.</li>
        </ul>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800 font-medium">
            Example prompt: “Shorten this text by 20% while keeping the main meaning and improving clarity.”
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-12">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 5</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI fixes grammar and spelling instantly. <br />
            ✔ You can change tone to formal, friendly, or persuasive. <br />
            ✔ AI smooths paragraphs and improves readability. <br />
            ✔ Removing unnecessary words makes writing clearer and stronger. <br />
            ✔ AI-powered editing helps freelancers produce cleaner, more professional content.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson6"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 6 →
        </Link>
      </div>
    </div>
  );
}
