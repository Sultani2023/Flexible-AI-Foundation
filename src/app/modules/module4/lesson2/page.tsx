"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module4Lesson2() {
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
          Lesson 2: Scriptwriting With AI
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how to use AI to write professional video scripts, create strong hooks,
          build storytelling structure, and polish your script for clarity and style.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Using AI to Generate Video Scripts
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI can help you generate complete video scripts within seconds. Whether you
          want a YouTube explainer video, a TikTok story, or an Instagram reel, AI can
          create the first draft for you.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Type your topic or idea</li>
          <li>AI creates a script with scenes and narration</li>
          <li>You can request revisions instantly</li>
          <li>AI can adjust tone (funny, serious, educational)</li>
          <li>You can ask for a shorter or longer version</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Example prompt: <br />
            <strong>“Write a 30-second TikTok script about how to stay productive using AI tools.”</strong>
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Creating Outlines With AI
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Before writing the full script, you can use AI to generate a clean outline.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Introduction</li>
          <li>Main idea or problem</li>
          <li>Key points and examples</li>
          <li>Visual suggestions (B-roll, animations)</li>
          <li>Ending with a call-to-action</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            A good outline gives your video structure before writing the full script.
          </p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Writing Intros, Hooks & Storytelling Scripts
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI can help you write strong hooks that grab viewers in the first 3 seconds,
          storytelling scripts that keep people watching, and intros that make your
          message clear.
        </p>

        <div className="space-y-4 text-gray-700">

          <div>
            <h4 className="font-semibold text-gray-900">🎯 Writing Strong Hooks</h4>
            <p>
              Ask AI for hooks that use curiosity, emotion, or surprise to grab attention.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📖 Storytelling Scripts</h4>
            <p>
              AI can build characters, conflict, and resolution to make your video engaging.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎬 Intros That Matter</h4>
            <p>
              You can ask AI to write intros that clearly explain what the video will cover.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
          4. Editing the Script for Clarity & Style
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Once AI generates the script, the next step is polishing it. You can improve
          the flow and style by asking AI to rewrite the script in a more natural, clear,
          and easy-to-understand way.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Simplify complex sentences</li>
          <li>Make the tone friendly or professional</li>
          <li>Remove unnecessary repetition</li>
          <li>Adjust pacing for short-form vs long-form videos</li>
          <li>Fix unclear or robotic-sounding lines</li>
        </ul>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ AI generates fast and high-quality video scripts. <br />
            ✔ Creating outlines helps build structure. <br />
            ✔ Hooks, intros, and storytelling make your scripts engaging. <br />
            ✔ Edit AI scripts to match your personal style and voice.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson3"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 3 →
        </Link>
      </div>
    </div>
  );
}
