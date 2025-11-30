"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module4Lesson5() {
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
          Lesson 5: Creating Shorts & Reels with AI
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI tools help creators turn long videos into short, viral-ready clips for TikTok, Reels, and YouTube Shorts — automatically.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Turning Long Videos Into Short Clips
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI tools can break down long videos (podcasts, interviews, tutorials) into short, shareable clips. This saves hours of manual editing.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Upload your long video</li>
          <li>AI detects the best moments</li>
          <li>You choose clip duration (5–30 seconds)</li>
          <li>AI formats the clip automatically</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>Opus Clip, Vidyo.ai,</strong> and <strong>Klips.ai</strong> are perfect for auto-cutting long videos into viral shorts.
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Using AI to Find Highlights
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          AI identifies the most interesting parts of your video using:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Emotional peaks</li>
          <li>Funny or dramatic expressions</li>
          <li>Clear teaching moments</li>
          <li>Powerful quotes</li>
          <li>Audience reactions</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            You don’t need to manually search for the best parts — AI can choose the top 10 highlights instantly.
          </p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Auto-Formatting for TikTok, Reels & Shorts
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          After selecting the highlight clips, AI reformats them automatically:
        </p>

        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900">📱 Vertical Format (9:16)</h4>
            <p>Perfect for TikTok, Reels, and Shorts.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📌 Dynamic Zoom & AI Reframing</h4>
            <p>
              AI keeps the speaker centered using face-tracking and auto-zoom.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎨 Auto-Templates</h4>
            <p>
              Apply stylish layouts, borders, emojis, or reaction-style effects.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
          4. Adding Trending Captions, Music & Templates
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI tools now add viral elements automatically:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Auto-captions:</strong> Perfectly timed subtitles.</li>
          <li><strong>Speech-to-text:</strong> Generates accurate captions in seconds.</li>
          <li><strong>Trending music:</strong> Add popular audio to boost engagement.</li>
          <li><strong>Templates:</strong> TikTok-style cards and bold text animations.</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>CapCut, OpusClip, and Adobe Express</strong> offer trending templates that boost your chances of going viral.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ AI turns long videos into short, viral clips. <br />
            ✔ Highlight detection saves hours of manual editing. <br />
            ✔ Auto-formatting makes clips ready for TikTok, Reels & Shorts. <br />
            ✔ Add trending captions, music, and templates with one click.
          </p>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson6"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 6 →
        </Link>
      </div>
    </div>
  );
}
