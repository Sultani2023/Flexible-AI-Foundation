"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson7() {
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
          Lesson 7: Avoiding AI Detection & Plagiarism
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          AI-generated content can sometimes get flagged as “AI-written” or “plagiarized.”
          This lesson teaches you how to humanize your writing, rewrite AI-generated text,
          avoid plagiarism, and ensure your content is original and authentic.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Why AI Detection Happens
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI detectors analyze text patterns to guess if the writing came from a human or a
            machine. They look for repetitive sentence structure, predictable word choices,
            and “too perfect” grammar.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>AI sentences are often very structured and formal.</li>
            <li>AI uses common phrases repeatedly.</li>
            <li>AI avoids personal stories or unique perspectives.</li>
            <li>AI often writes with a smooth, consistent tone.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Remember: AI detection tools are not 100% accurate.  
              They can sometimes flag human writing too.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Techniques to Rewrite & Humanize AI Text
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            To make AI-generated content sound human, you need to adjust tone, structure,
            and style. Add your own creativity, real examples, and natural language.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Add personal opinions, stories, or experiences.</li>
            <li>Break long sentences into shorter, casual ones.</li>
            <li>Use contractions (“I’m”, “they’re”, “don’t”).</li>
            <li>Change the order of paragraphs or explanations.</li>
            <li>Add small imperfections — humans don’t write perfectly.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip: After generating text with AI, rewrite 20–30% of each paragraph in your
              own voice.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Fact-Checking AI-Generated Content
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can sometimes produce incorrect or outdated information. You must always
            verify details before publishing your content — especially facts, statistics,
            and quotes.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Check dates and statistics on trusted websites.</li>
            <li>Verify quotes or claims from official sources.</li>
            <li>Look up news information to confirm accuracy.</li>
            <li>Replace any incorrect or vague statements.</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              AI can help you write, but <strong>you</strong> are responsible for accuracy.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Avoiding Plagiarism Issues
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Plagiarism happens when content is copied from another source without credit.
            AI sometimes unintentionally recreates phrases it has seen during training.
            To avoid plagiarism, always add originality.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Rewrite content in your own words.</li>
            <li>Use plagiarism checkers (Grammarly, Quillbot, Copyscape).</li>
            <li>Add unique examples, metaphors, and personal insights.</li>
            <li>Never copy-paste content from websites without referencing.</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              AI should assist your writing — not replace your creativity.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 7</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI detection happens due to predictable writing patterns. <br />
            ✔ Humanizing content makes it sound natural and original. <br />
            ✔ Always fact-check AI-generated information. <br />
            ✔ Avoid plagiarism by rewriting, adding insights, and checking originality.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson8"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 8 →
        </Link>
      </div>

    </div>
  );
}
