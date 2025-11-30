"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson6() {
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
          Lesson 6: SEO Writing with AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          SEO writing helps your articles appear on Google search.  
          In this lesson, you will learn how to use AI tools to find keywords,
          write SEO-friendly content, optimize meta descriptions, and rank better.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Understanding Keywords
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Keywords are the words people type into Google when searching for content.
            When your article includes the right keywords, it becomes easier for Google to
            understand your topic — and show your content to the right audience.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Main keywords:</strong> the primary topic (e.g., “best freelancing tips”).</li>
            <li><strong>Long-tail keywords:</strong> longer phrases people search (e.g., “how to start freelancing as a beginner”).</li>
            <li><strong>Related keywords:</strong> supporting terms that help Google understand your article.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip: Use AI tools like ChatGPT or Gemini to generate keyword lists in seconds.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Creating SEO-Friendly Blog Posts
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can help you structure your article so it is easy for Google to read and rank.
            A well-optimized blog post includes clear sections, helpful explanations, and
            keyword-rich headings.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Use keywords naturally — don’t force them.</li>
            <li>Add H2 and H3 headings to organize content.</li>
            <li>Include examples, stats, and real explanations.</li>
            <li>Write short paragraphs (2–4 sentences).</li>
            <li>Add a summary or key takeaways at the end.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              AI can create an outline, suggest headings, and rewrite paragraphs to improve clarity.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Using AI to Write Meta Descriptions
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            A meta description is the short text that appears on Google under your article title.
            It helps convince users to click on your page.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Keep it under 160 characters.</li>
            <li>Include your main keyword.</li>
            <li>Make it clear, simple, and attractive.</li>
            <li>Tell readers what they will learn.</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              AI tools like ChatGPT can generate 10–20 high-quality meta descriptions instantly.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Optimizing Content for Google Ranking
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Beyond keywords, your article needs quality, clarity, and helpfulness to rank high.
            Google rewards content that solves the reader’s problem.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Use clear headings:</strong> Google reads your structure.</li>
            <li><strong>Answer questions directly:</strong> Helps rank in the “Featured Snippet”.</li>
            <li><strong>Add examples and explanations:</strong> Makes content more useful.</li>
            <li><strong>Use simple words:</strong> Google prefers easy-to-read articles.</li>
            <li><strong>Ask AI to check readability:</strong> AI can simplify or rewrite text.</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Google ranks content that is helpful, clear, and relevant — AI helps you achieve that faster.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 6</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Keywords help Google understand your topic. <br />
            ✔ AI makes writing SEO-friendly content easier. <br />
            ✔ AI can generate meta descriptions instantly. <br />
            ✔ Optimized content ranks higher and gets more traffic.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson7"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 7 →
        </Link>
      </div>

    </div>
  );
}
