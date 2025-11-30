'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

export default function Module2Lesson9() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6 relative">

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
          Lesson 9: Best AI Tools for Freelance Writers
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you’ll learn about the top AI tools every freelance writer should use.
          These tools help you improve writing quality, generate ideas, edit your work, and work
          faster and more professionally.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        {/* TOOL 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. ChatGPT</h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            ChatGPT is one of the most powerful AI writing assistants. It helps with creating drafts,
            rewriting content, improving clarity, generating ideas, and editing grammar.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Generate article drafts and outlines</li>
            <li>Rewrite content to sound natural and human</li>
            <li>Fix grammar and improve sentence flow</li>
            <li>Brainstorm ideas for blog posts and social media</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              ChatGPT helps you write faster, clearer, and with more confidence.
            </p>
          </div>
        </div>

        {/* TOOL 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Grammarly</h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Grammarly is essential for professional writing. It corrects grammar, spelling, tone,
            and clarity — making your writing polished and client-ready.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fixes grammar errors instantly</li>
            <li>Improves clarity and readability</li>
            <li>Suggests better vocabulary</li>
            <li>Checks tone (formal, friendly, confident)</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Grammarly is your proofreading partner for all writing tasks.
            </p>
          </div>
        </div>

        {/* TOOL 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Jasper AI</h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Jasper AI is designed for marketing and copywriting. It helps create catchy, engaging
            content for social media, ads, and product descriptions.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Creates creative marketing copy</li>
            <li>Writes social media captions quickly</li>
            <li>Helps write product descriptions</li>
            <li>Supports brand voice styling</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Jasper is great for writers who want high-quality marketing content.
            </p>
          </div>
        </div>

        {/* TOOL 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Notion AI</h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Notion AI helps with organizing ideas, writing notes, summarizing content,
            and planning projects. It’s perfect for managing your writing workflow.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Summarizes long text into short notes</li>
            <li>Helps outline articles and blogs</li>
            <li>Organizes your tasks and writing projects</li>
            <li>Creates professional documents and pages</li>
          </ul>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Notion AI keeps your writing life organized and efficient.
            </p>
          </div>
        </div>

        {/* TOOL 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">5. QuillBot</h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            QuillBot is a powerful paraphrasing tool that helps rewrite sentences
            while keeping the same meaning. It's great for improving clarity and reducing repetition.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Paraphrases text in different styles</li>
            <li>Improves clarity and readability</li>
            <li>Provides grammar checking</li>
            <li>Helps summarize long articles</li>
          </ul>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              QuillBot helps you rewrite content faster and more professionally.
            </p>
          </div>
        </div>

        {/* TOOL 6 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Canva Docs AI</h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Canva Docs AI allows you to create visually appealing documents, presentations,
            and long-form content using AI suggestions and design templates.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create beautifully designed documents</li>
            <li>Use AI to generate text and ideas</li>
            <li>Design social media posts and graphics</li>
            <li>Perfect for freelance writers who want polished visuals</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Canva Docs AI combines writing + design — great for portfolios, proposals, and guides.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 9</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ ChatGPT for drafting and rewriting. <br />
            ✔ Grammarly for editing. <br />
            ✔ Jasper AI for copywriting. <br />
            ✔ Notion AI for organization. <br />
            ✔ QuillBot for paraphrasing and summaries. <br />
            ✔ Canva Docs AI for beautiful documents and visuals.
          </p>
        </div>
      </div>

      {/* FINISH MODULE BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Finish Module 2 →
        </button>
      </div>

      {/* CELEBRATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 max-w-md mx-auto text-center shadow-xl relative animate-fade-in">
            <Star className="mx-auto text-yellow-400 mb-4 animate-bounce" size={48} />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-gray-700 mb-6">
              You have successfully completed Module 2: AI Content Creation!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
