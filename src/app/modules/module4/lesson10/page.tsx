"use client";

import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { useState } from "react";

export default function Module4Lesson10() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

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
          Learn how to plan, script, film, edit, and optimize your videos using AI — 
          while saving time and boosting your results across YouTube, TikTok, and other platforms.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 — PLANNING */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Planning Your Content With AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can streamline your planning by generating content ideas, outlines, 
            and even full content calendars.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Generate video ideas based on trends</li>
            <li>Create weekly or monthly content plans</li>
            <li>Research topics, keywords, and competitors</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Try tools like <strong>ChatGPT, Notion AI, VidIQ</strong> or <strong>Tubebuddy</strong> 
              to speed up planning.
            </p>
          </div>
        </div>

        {/* SECTION 2 — SCRIPTING */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Scripting Your Videos Using AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI makes scripting faster and more professional.  
            You can create full scripts or short-form hooks in seconds.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Generate scripts in different tones</li>
            <li>Create hooks for TikTok or YouTube Shorts</li>
            <li>Rewrite scripts to make them more engaging</li>
            <li>Convert bullet points into a full script</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Use AI to create multiple versions of your script so you can test what works best.
            </p>
          </div>
        </div>

        {/* SECTION 3 — FILMING */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Filming With AI Assistance
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI tools can guide your filming process by helping you improve pacing, 
            camera angles, lighting, and delivery.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>AI teleprompters for smoother recording</li>
            <li>Auto-framing and stabilizing with AI cameras</li>
            <li>Lighting correction suggestions</li>
            <li>Instant retakes and performance feedback</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Apps like <strong>CapCut Camera, Descript,</strong> and <strong>Runway</strong> 
              help creators film more efficiently.
            </p>
          </div>
        </div>

        {/* SECTION 4 — EDITING */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Editing Faster Using AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can automate much of the editing process, helping you finish videos in a fraction of the time.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Auto-captions & subtitles</li>
            <li>Automatic jump cuts and silence removal</li>
            <li>Auto color grading and stabilization</li>
            <li>AI noise removal and audio cleanup</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tools like <strong>Descript, CapCut,</strong> and <strong>Runway</strong> 
              massively speed up editing.
            </p>
          </div>
        </div>

        {/* SECTION 5 — OPTIMIZING FOR YOUTUBE & TIKTOK */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          5. Optimizing Videos for YouTube & TikTok
        </h3>

        <div className="space-y-4 text-gray-700 mb-10 leading-relaxed">
          <p>
            AI helps you optimize your videos for maximum reach and engagement.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Keyword research for titles and descriptions</li>
            <li>AI-generated thumbnails</li>
            <li>Hashtag optimization</li>
            <li>Trend analysis for TikTok</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tools like <strong>Canva AI, VidIQ,</strong> and <strong>Tubebuddy</strong> 
              help you increase visibility and performance.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-orange-700 mb-2">
            Summary of Lesson 10
          </h3>

          <p className="text-gray-700 leading-relaxed">
            ✔ AI helps plan and organize content. <br />
            ✔ Create scripts faster and more professionally. <br />
            ✔ Use AI to enhance filming and performance. <br />
            ✔ Speed up editing with automated tools. <br />
            ✔ Optimize videos for YouTube and TikTok using AI keywords & thumbnails.
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
              You have successfully completed <br />
              <strong>Module 4: AI Video Creation & Editing!</strong>
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
