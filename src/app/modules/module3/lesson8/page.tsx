"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

export default function Module4Lesson10() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6 relative">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module4"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 4: AI Video Creation & Editing
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 10: Building a Content Creator Workflow With AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn how to plan, script, film, edit, and publish videos faster using AI tools — 
          while keeping your unique creative style. This lesson helps creators build a 
          complete workflow from idea to upload.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Planning Your Video Using AI
        </h3>
        <p className="text-gray-700 mb-6">
          AI can help you brainstorm video ideas, trending topics, and content calendars.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Generate topic ideas based on your niche.</li>
          <li>Create full content calendars for TikTok, YouTube, and Reels.</li>
          <li>Use AI to identify trending formats and hooks.</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Scriptwriting & Storyboarding With AI
        </h3>
        <p className="text-gray-700 mb-6">
          Turn ideas into polished scripts faster with AI writing tools.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Create detailed scripts for YouTube videos.</li>
          <li>Generate short captions and hooks for Reels & TikTok.</li>
          <li>Use AI storyboard tools to plan scenes.</li>
        </ul>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Filming & Editing Using AI
        </h3>
        <p className="text-gray-700 mb-6">
          AI editing tools can automate heavy tasks so creators save hours.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Auto-cutting mistakes and silent parts.</li>
          <li>Transform long videos into shorts automatically.</li>
          <li>Add subtitles, remove noise, and fix audio instantly.</li>
        </ul>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Optimizing for TikTok, YouTube & Instagram
        </h3>
        <p className="text-gray-700 mb-6">
          AI can help you prepare your video for each platform to maximize reach.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Auto-format for vertical or horizontal layouts.</li>
          <li>Optimize the first 3 seconds of your video using AI analysis.</li>
          <li>Use AI keyword tools to boost search visibility.</li>
        </ul>

        {/* SECTION 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          5. Thumbnails, Titles & Keywords With AI
        </h3>
        <p className="text-gray-700 mb-6">
          Strong thumbnails and titles boost clicks — AI makes them fast and consistent.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Create eye-catching thumbnails in seconds.</li>
          <li>Generate powerful video titles.</li>
          <li>Find the best keywords for search.</li>
        </ul>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 10</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Use AI to plan your video ideas and schedule. <br />
            ✔ Write scripts and storyboards faster using AI tools. <br />
            ✔ Speed up editing and repurposing content. <br />
            ✔ Optimize videos for each social platform. <br />
            ✔ Generate thumbnails, titles, and keywords automatically.
          </p>
        </div>
      </div>

      {/* FINISH MODULE BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Finish Module 4 →
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 max-w-md mx-auto text-center shadow-xl relative animate-fade-in">
            <Star className="mx-auto text-yellow-400 mb-4 animate-bounce" size={48} />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-gray-700 mb-6">
              You have successfully completed Module 4: AI Video Creation & Editing!
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
