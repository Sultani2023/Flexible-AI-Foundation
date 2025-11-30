'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

export default function Module1Lesson8() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6 relative">

      {/* BACK BUTTON */}
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
          Lesson 8: Future of AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          The future of Artificial Intelligence is full of exciting opportunities.
          AI is transforming jobs, creating new career paths, and opening doors—especially for women.
          This lesson explores where AI is heading, what skills you need, and how to use AI ethically and responsibly.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        {/* SECTION 1 — AI JOBS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Future AI Jobs
        </h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI will not just replace jobs — it will also create millions of new opportunities in the coming years.
            Many roles will involve working alongside AI to improve efficiency and creativity.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>AI Trainer:</strong> teaching AI models to respond correctly</li>
            <li><strong>Data Analyst / Data Scientist:</strong> analyzing large datasets</li>
            <li><strong>Prompt Engineer:</strong> designing prompts for tools like ChatGPT</li>
            <li><strong>AI Content Creator:</strong> using AI to make videos, blogs, graphics</li>
            <li><strong>AI Ethics Specialist:</strong> ensuring fairness and safety</li>
            <li><strong>AI Developer / Machine Learning Engineer</strong></li>
            <li><strong>Automation Specialist:</strong> creating AI-powered workflows</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: A small business may hire someone skilled in AI tools to create product photos, edit videos, or manage automated workflows.
            </p>
          </div>
        </div>

        {/* SECTION 2 — SKILLS NEEDED */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Skills Needed for the AI Future
        </h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            To be successful in the AI-powered future, you don’t need to be a programmer — although it can help.
            Many essential skills are easy to learn for beginners.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Critical thinking</strong> — knowing how to evaluate information</li>
            <li><strong>Prompt writing</strong> — talking to AI clearly and effectively</li>
            <li><strong>Basic data understanding</strong> — reading charts, spotting patterns</li>
            <li><strong>Creativity</strong> — using AI tools for design and media</li>
            <li><strong>Communication skills</strong> — explaining ideas clearly</li>
            <li><strong>Adaptability</strong> — being open to new technologies</li>
            <li><strong>Ethics knowledge</strong> — understanding safe AI use</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip: The most valuable skill is knowing how to use AI tools quickly and confidently — this is called “AI literacy.”
            </p>
          </div>
        </div>

        {/* SECTION 3 — WOMEN IN AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Opportunities for Women in AI
        </h3>
        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Women are greatly underrepresented in AI globally — but this is changing fast.
            AI opens huge opportunities for women in leadership, creativity, research, and business.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Freelancing opportunities</strong> in design, writing, and editing</li>
            <li><strong>Tech jobs</strong> with remote and flexible work</li>
            <li><strong>Entrepreneurship</strong> — starting AI-powered businesses</li>
            <li><strong>Education roles</strong> — teaching AI skills to young learners</li>
            <li><strong>Social impact projects</strong> using AI for public good</li>
          </ul>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: With AI tools, women can become content creators, business owners, and leaders in technology — even without advanced degrees.
            </p>
          </div>
        </div>

        {/* SECTION 4 — ETHICS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Ethical Guidelines for the Future of AI
        </h3>
        <div className="space-y-4 text-gray-700 mb-10 leading-relaxed">
          <p>
            As AI becomes more powerful, using it ethically is essential. These guidelines help ensure AI benefits everyone safely and responsibly.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Transparency:</strong> Be clear when AI is being used.</li>
            <li><strong>Fairness:</strong> Avoid discrimination or bias.</li>
            <li><strong>Privacy:</strong> Protect personal data and use safe tools.</li>
            <li><strong>Safety:</strong> Do not create harmful or misleading content.</li>
            <li><strong>Human oversight:</strong> Humans should always make the final decisions.</li>
            <li><strong>Accountability:</strong> Take responsibility for AI-generated work.</li>
          </ul>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: When using AI for school or work, always review the content, correct mistakes, and make sure it follows ethical rules.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 8</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI will create millions of new job opportunities. <br />
            ✔ Key skills include critical thinking, prompt writing, and creativity. <br />
            ✔ The future of AI offers strong opportunities for women. <br />
            ✔ Ethical guidelines help ensure AI is safe, fair, and responsible.
          </p>
        </div>
      </div>

      {/* FINISH MODULE BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Finish Module 1 →
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
              You have successfully completed Module 1: Introduction to AI!
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
