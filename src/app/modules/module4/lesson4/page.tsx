"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module4Lesson4() {
  const router = useRouter();

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
          Lesson 4: AI Editing Tools for Creators
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Discover powerful AI tools like CapCut, Descript, and smart editing features that 
          automate subtitles, remove noise, enhance quality, and speed up your entire video workflow.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. CapCut AI Auto-Edit
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          CapCut is one of the most popular editing tools among creators on TikTok, Reels, 
          and YouTube Shorts. Its AI features allow you to edit videos quickly without learning 
          complex editing software.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li><strong>Auto Cut:</strong> AI detects pauses and deletes unnecessary parts.</li>
          <li><strong>Auto Captions:</strong> Instantly generates accurate subtitles in any language.</li>
          <li><strong>AI Templates:</strong> Trending transitions, zoom effects, and viral styles.</li>
          <li><strong>Smart Enhance:</strong> Improves brightness, sharpness, and color automatically.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800">
            CapCut is perfect for beginners who want fast, professional results without editing manually.
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Descript: Edit Videos by Editing Text
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Descript is a revolutionary editor that turns your video audio into text. 
          You simply delete the text, and the video removes that section automatically.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li><strong>Video Editing by Text:</strong> Remove sentences by deleting the transcript.</li>
          <li><strong>Filler Word Removal:</strong> Instantly removes “um”, “uh”, and repeated words.</li>
          <li><strong>Overdub:</strong> AI can clone your voice to fix mistakes without re-recording.</li>
          <li><strong>Screen Recorder:</strong> Great for tutorials, product demos, and training videos.</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800">
            Descript is especially useful for podcasters, teachers, influencers, and course creators.
          </p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Auto-Captions & Subtitle Generation
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Subtitles are essential for modern videos. Over 80% of viewers watch videos without sound.
          AI tools generate accurate captions in seconds.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Auto-detects spoken words</li>
          <li>Supports multiple languages</li>
          <li>Automatically synced to video timing</li>
          <li>Custom fonts, colors, and TikTok-style captions</li>
        </ul>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800">
            Tools like CapCut, VEED, Descript, and YouTube Studio offer fast, high-quality subtitle tools.
          </p>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Noise Removal, Enhancement & Color Grading
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI helps instantly improve audio quality and fix lighting or color issues, even if the original 
          recording was not perfect.
        </p>

        <div className="space-y-4 text-gray-700">

          <div>
            <h4 className="font-semibold text-gray-900">🎧 Noise Removal</h4>
            <p>
              Removes background sounds such as wind, fans, or traffic with one click.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎙 Audio Enhancement</h4>
            <p>
              Boosts voice clarity and makes speech sound crisp and studio-quality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎨 AI Color Grading</h4>
            <p>
              Adjusts lighting, shadows, temperature, and brightness automatically.
            </p>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ CapCut makes editing fast with templates, captions, and auto-enhance. <br />
            ✔ Descript lets you edit videos by editing text. <br />
            ✔ AI generates subtitles instantly with high accuracy. <br />
            ✔ Noise removal and color grading improve overall video quality.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson5"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 5 →
        </Link>
      </div>
    </div>
  );
}
