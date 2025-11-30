"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module4Lesson1() {
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
          Lesson 1: Introduction to AI Video Creation
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI tools are transforming video creation for YouTube, TikTok, and Instagram. 
          Discover what modern AI video platforms can do and how you can use them to create stunning videos effortlessly.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. What AI Video Tools Can Do
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Modern AI video tools make video creation faster, easier, and more creative. They can perform tasks that used to require hours of editing.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Create videos from text (type a script → get a video)</li>
          <li>Automatically edit clips, transitions, and effects</li>
          <li>Generate AI voices and subtitles</li>
          <li>Remove backgrounds or add green-screen effects</li>
          <li>Turn images into animations</li>
          <li>Create 3D or cinematic scenes instantly</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Example: You can write “A girl walking through a futuristic city” and AI tools like Pika Labs or Runway will generate a full video.
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. How AI Is Changing YouTube, TikTok, and Instagram
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>
            AI is transforming content creation by helping creators produce high-quality videos faster and with fewer resources.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>YouTubers use AI to edit videos in minutes instead of hours.</li>
            <li>TikTok creators use AI filters and auto-caption tools to boost engagement.</li>
            <li>Instagram creators use AI to generate reels, animations, and voiceovers.</li>
            <li>Small creators can now compete with professional studios.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800">
              AI helps beginners create content that looks professional—even with no editing experience.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Overview of Popular AI Video Platforms
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          {/* CapCut */}
          <div>
            <h4 className="font-semibold text-gray-900">🎬 CapCut AI</h4>
            <p>
              CapCut is one of the most beginner-friendly AI video editors. It includes auto captions, AI templates, background removal, and viral TikTok-style effects.
            </p>
          </div>

          {/* Runway */}
          <div>
            <h4 className="font-semibold text-gray-900">🚀 Runway ML</h4>
            <p>
              Known for its powerful generative video tools, Runway lets you create cinematic AI scenes, remove objects, or generate videos from text.
            </p>
          </div>

          {/* Pika Labs */}
          <div>
            <h4 className="font-semibold text-gray-900">🎥 Pika Labs</h4>
            <p>
              Pika Labs specializes in text-to-video generation. You type a description, and the AI produces a short movie-style clip.
            </p>
          </div>

          {/* Descript */}
          <div>
            <h4 className="font-semibold text-gray-900">🎤 Descript</h4>
            <p>
              Descript is perfect for YouTubers and podcasters. It can remove filler words, generate AI voiceovers, and edit videos like a Google Doc.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ AI makes video creation faster, easier, and more creative. <br />
            ✔ Social media platforms are being transformed by AI-powered tools. <br />
            ✔ Tools like CapCut, Runway, Pika Labs, and Descript help beginners make professional videos.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </div>
  );
}
