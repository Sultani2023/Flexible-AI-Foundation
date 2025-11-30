'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

export default function Module1Lesson7() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6 relative">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module5"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 1: No-Code Development
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 7: Freelancing & Earning With No-Code
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn how to turn your no-code skills into income — whether you want to freelance, build apps for clients, or create a portfolio that gets you hired.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 — SERVICES */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Offering No-Code Services
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>No-code skills are in high demand. Thousands of businesses want websites and apps — without hiring expensive developers.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Building websites using <strong>Wix, WordPress, Webflow</strong></li>
            <li>Creating apps with <strong>Bubble, Adalo, Glide, AppSheet</strong></li>
            <li>Setting up automations in <strong>Zapier or Make</strong></li>
            <li>Creating dashboards and custom workflows</li>
            <li>Helping businesses organize data using <strong>Notion or Airtable</strong></li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: A bakery needs an online order form — you can build it in 1 day using no-code.
            </p>
          </div>
        </div>

        {/* SECTION 2 — PRICING */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. How to Price Your Work
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>Most freelancers price based on the project, not hourly. Here are common ranges:</p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>$50–$300</strong> — simple website (Wix / Notion)</li>
            <li><strong>$300–$1,000</strong> — business website (Webflow / WordPress)</li>
            <li><strong>$500–$2,000</strong> — mobile app (Glide, Adalo)</li>
            <li><strong>$150–$1,000</strong> — automations & workflows</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip: Always charge extra for edits, updates, and monthly maintenance.
            </p>
          </div>
        </div>

        {/* SECTION 3 — USING AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Using AI to Speed Up Your Delivery
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>AI makes no-code work faster, easier, and more profitable.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Use AI to generate website text and content</li>
            <li>Create logos, graphics, and icons with AI</li>
            <li>Use ChatGPT to fix workflows or help design pages</li>
            <li>Use AI automation for customer support (chatbots)</li>
            <li>Build templates you can reuse for future clients</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: A website that took 7 days can now be finished in 1–2 days using AI.
            </p>
          </div>
        </div>

        {/* SECTION 4 — PORTFOLIO */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Building a No-Code Portfolio
        </h3>

        <div className="space-y-4 text-gray-700 mb-10 leading-relaxed">
          <p>Your portfolio is the most important thing clients look at — not certificates.</p>

          <p>You can include:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>3–5 simple websites you built</li>
            <li>1–2 apps (even practice projects)</li>
            <li>A few automation workflows</li>
            <li>Before/After screenshots</li>
            <li>A short description for each project</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              You can host your portfolio on Notion, Webflow, or your own website.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 7</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ No-code skills can easily turn into income. <br />
            ✔ You can build websites, apps, and automations for clients. <br />
            ✔ AI helps you finish projects faster and at higher quality. <br />
            ✔ A strong portfolio helps you attract clients globally.
          </p>
        </div>
      </div>

      {/* COMPLETE MODULE BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Finish Module 5 →
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
              You have successfully completed Module 5!
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
