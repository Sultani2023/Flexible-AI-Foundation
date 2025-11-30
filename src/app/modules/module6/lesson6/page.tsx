'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

export default function Module6Lesson6() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6 relative">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module6"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 6: AI-Powered Data Analysis
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 6: Automating Business Tasks With AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn how AI can automate reports, create dashboards, and build smart workflows using tools like Zapier, Make, and spreadsheet automations.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 — AUTOMATED REPORTS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Automating Reports With AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>Instead of creating weekly or monthly reports manually, you can automate them with AI.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>AI summarizes spreadsheets automatically</li>
            <li>Creates weekly sales reports</li>
            <li>Analyzes customer activity</li>
            <li>Finds trends & patterns</li>
            <li>Generates charts or summary paragraphs</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: Every Monday, AI generates a summary of all your sales and emails it to you automatically.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WORKFLOW AUTOMATIONS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Setting Up Workflows With Zapier or Make
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>You can automate repetitive tasks using no-code automation tools.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Send notifications when a form is submitted</li>
            <li>Move data from Google Forms → Sheets → Email</li>
            <li>Create automated tasks in Notion or Trello</li>
            <li>Update CRM records automatically</li>
            <li>Trigger emails or alerts using AI</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: When a customer fills out a form, Zapier adds them to a Sheet and sends a confirmation email.
            </p>
          </div>
        </div>

        {/* SECTION 3 — AI DASHBOARDS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Using AI for Dashboards
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>AI tools can create smart dashboards that update automatically.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Real-time business dashboards</li>
            <li>Sales and revenue tracking</li>
            <li>Customer behavior dashboards</li>
            <li>Operational workflow dashboards</li>
            <li>AI-generated chart explanations</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: A dashboard updates every time a new sale happens — no manual work needed.
            </p>
          </div>
        </div>

        {/* SECTION 4 — SAVING TIME */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Saving Time & Improving Accuracy
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
          <p>Automation reduces errors and saves hours of repetitive work.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Fewer mistakes in reports</li>
            <li>Faster business decisions</li>
            <li>More accurate forecasting</li>
            <li>Better team productivity</li>
            <li>Consistency in data updates</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Even small automations can save 5–10 hours every week.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 6</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI automates weekly and monthly reports.<br />
            ✔ Zapier & Make help build automated workflows.<br />
            ✔ AI dashboards give real-time insights.<br />
            ✔ Automation saves time and reduces errors.
          </p>
        </div>
      </div>

      {/* COMPLETE MODULE BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Finish Module 6 →
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
              You have successfully completed Module 6!
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
