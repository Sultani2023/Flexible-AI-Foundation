"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson1() {
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
          Lesson 1: Introduction to AI Content Creation
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn what AI content creation means, how 
          freelancers use it to work faster, and how AI writing tools like 
          ChatGPT, Gemini, and Claude assist with professional writing.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: What AI Content Creation Means */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. What Does AI Content Creation Mean?
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            <strong>AI content creation</strong> refers to using artificial intelligence 
            tools to help write, edit, research, and plan different forms of content such as:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Blog posts</li>
            <li>Social media captions</li>
            <li>Emails</li>
            <li>Articles</li>
            <li>Scripts</li>
            <li>Marketing content</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              📌 <strong>Simple definition:</strong>  
              AI content creation = using AI tools to write faster, smarter, and with less effort.
            </p>
          </div>
        </div>

        {/* SECTION 2: How AI Helps Freelance Writers */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. How AI Helps Freelance Writers
        </h3>

        <div className="space-y-6 mb-10 text-gray-700 leading-relaxed">
          <p>
            Freelance writers use AI tools every day to save time and improve their work. 
            AI doesn't replace the writer — it supports them by handling repetitive and 
            time-consuming tasks.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Brainstorming ideas:</strong> AI can generate topic suggestions, titles, and outlines.
            </li>
            <li>
              <strong>Speeding up writing:</strong> Write drafts faster with AI assistance.
            </li>
            <li>
              <strong>Improving grammar:</strong> AI checks spelling, tone, and clarity.
            </li>
            <li>
              <strong>Research support:</strong> AI summarizes information and finds key points.
            </li>
            <li>
              <strong>Content structure:</strong> Helps create organized paragraphs and logical flow.
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              A blog post that takes 3 hours to write manually may take only 45 minutes 
              with AI assistance — without losing quality.
            </p>
          </div>
        </div>

        {/* SECTION 3: Understanding AI Writing Assistants */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Understanding AI Writing Assistants
        </h3>

        <p className="text-gray-700 mb-6">
          AI writing assistants are tools that understand language and generate helpful 
          responses. They can write drafts, explain topics, translate text, rewrite content, 
          and analyze tone.
        </p>

        {/* TOOLS */}
        <div className="space-y-6 text-gray-700 leading-relaxed">

          {/* ChatGPT */}
          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🤖 ChatGPT</h4>
            <p>
              A powerful AI model used for writing, brainstorming, research, editing, and 
              creating almost any type of content. Very popular among freelance writers.
            </p>
          </div>

          {/* Gemini */}
          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🌐 Google Gemini (formerly Bard)</h4>
            <p>
              Great for research-heavy writing because it integrates with Google Search.  
              Useful for fact-checking and quick information summaries.
            </p>
          </div>

          {/* Claude */}
          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Claude AI</h4>
            <p>
              Known for clear, organized writing. Claude is excellent for long articles, 
              reports, and rewriting text in a professional tone.
            </p>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 1</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI content creation helps writers work smarter and faster. <br />
            ✔ AI assists with ideas, writing, editing, and research. <br />
            ✔ Popular AI writing tools include ChatGPT, Gemini, and Claude. <br />
            ✔ Freelancers use AI to boost productivity and earn more efficiently.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </div>
  );
}
