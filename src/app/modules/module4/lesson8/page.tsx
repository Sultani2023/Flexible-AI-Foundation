"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson8() {
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
          Module 1: Introduction to AI
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 8: AI Voiceover & Audio Tools
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          AI audio tools allow you to instantly generate professional voiceovers,
          clean noisy audio, and even clone your own voice. This lesson teaches
          you how modern AI tools transform scripts into natural speech and help
          you create studio-quality audio from home.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 — AI VOICE GENERATORS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. AI Voice Generators
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI voice generators can create natural-sounding voices in many
            languages, accents, and emotions. These tools help creators avoid
            recording their own audio and save a lot of time.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>ElevenLabs:</strong> most realistic human-like voices</li>
            <li><strong>Play.ht:</strong> great for video narration</li>
            <li><strong>Meta Voicebox:</strong> experimental multi-style voices</li>
            <li><strong>Google Text-to-Speech:</strong> fast and simple</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              You can type a script and instantly generate a warm, friendly,
              professional-sounding female voice for your YouTube video or course.
            </p>
          </div>
        </div>

        {/* SECTION 2 — TURNING SCRIPTS INTO VOICEOVERS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Turning Scripts into Voiceovers
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Turning a written script into a polished voiceover takes seconds with
            AI tools. You can choose tone, speed, emotion, and style.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Paste your script into the AI tool</li>
            <li>Choose a voice (female, male, accent, style)</li>
            <li>Select tone — calm, excited, professional, dramatic</li>
            <li>Generate and export as MP3 or WAV</li>
            <li>Add to your video editor</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip:  
              Write shorter sentences and clear instructions (tone, pauses) to
              make the voiceover sound more natural.
            </p>
          </div>
        </div>

        {/* SECTION 3 — VOICE CLONING */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Cloning Your Voice
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can clone your voice using a small audio sample. This allows you
            to create voiceovers in your own voice—even without recording again.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Upload 30–60 seconds</strong> of your natural speaking voice</li>
            <li>The AI analyzes your tone, pitch, and speaking style</li>
            <li>You can then generate new speech in your exact voice</li>
          </ul>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              You can record your voice once, and then generate hours of narration
              in your own voice for future videos.
            </p>
          </div>
        </div>

        {/* SECTION 4 — AUDIO CLEANUP & ENHANCEMENT */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Removing Noise & Enhancing Audio Quality
        </h3>

        <div className="space-y-4 text-gray-700 mb-10 leading-relaxed">
          <p>
            AI audio enhancement tools can fix poor-quality recordings by removing
            background noise, echo, wind, or low-volume problems.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Adobe Podcast Enhance:</strong> makes any audio sound studio-quality</li>
            <li><strong>Kapwing Clean Audio:</strong> removes noise and echo</li>
            <li><strong>Descript:</strong> fixes crackling, breathing, and reverb</li>
            <li><strong>Audacity AI plugins:</strong> free tools for cleanup</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              Even a noisy phone recording can be turned into a clean, clear,
              podcast-quality voiceover using AI enhancement tools.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 8</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI can generate natural, human-like voices instantly. <br />
            ✔ You can turn any script into a professional voiceover. <br />
            ✔ Voice cloning allows narration in your own voice. <br />
            ✔ AI tools remove background noise and enhance audio quality. <br />
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson9"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 9 →
        </Link>
      </div>

    </div>
  );
}
