"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

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
          Lesson 6: AI in Daily Life
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Artificial Intelligence is everywhere around us — in our phones,
          healthcare, entertainment, banking, and education. This lesson
          explains how AI is already part of your everyday life.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: AI in Education */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. AI in Education
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI is transforming how students learn and teachers teach. With smart
            tools and personalized learning, education is becoming more
            accessible and effective.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personalized learning apps</strong> (Duolingo, Khan Academy)</li>
            <li><strong>Homework assistants</strong> (ChatGPT, Copilot)</li>
            <li><strong>Automatic grading tools</strong></li>
            <li><strong>Smart tutoring systems</strong></li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              AI apps can identify where a student is struggling and create a
              personalized learning plan.
            </p>
          </div>
        </div>

        {/* SECTION 2: AI in Healthcare */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. AI in Healthcare
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI helps doctors diagnose diseases faster and more accurately. It
            improves patient care and reduces human error.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Medical image analysis</strong> (X-rays, MRIs)</li>
            <li><strong>Virtual health assistants</strong></li>
            <li><strong>Predicting diseases</strong> using patient history</li>
            <li><strong>Smart wearable devices</strong> like heart monitors</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              AI can detect early signs of cancer in medical images that humans
              may overlook.
            </p>
          </div>
        </div>

        {/* SECTION 3: AI in Finance */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. AI in Finance
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Banks and financial companies use AI for security, predictions, and
            customer service.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Fraud detection</strong> (spotting unusual transactions)</li>
            <li><strong>Credit scoring</strong></li>
            <li><strong>AI customer support bots</strong></li>
            <li><strong>Investment prediction tools</strong></li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              When your bank warns you about a suspicious transaction — that’s AI.
            </p>
          </div>
        </div>

        {/* SECTION 4: AI in Entertainment */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. AI in Entertainment (TikTok, Netflix)
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Entertainment platforms use AI to analyze what you like and show you
            content you enjoy.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>TikTok algorithm</strong> learns your behavior and shows personalized videos</li>
            <li><strong>Netflix recommendations</strong> based on your watch history</li>
            <li><strong>YouTube suggestions</strong> powered by AI models</li>
            <li><strong>AI-generated music and art</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              TikTok’s “For You Page (FYP)” is one of the strongest AI algorithms
              in the world — it learns what you like with every swipe.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 6</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI improves education with personalized learning tools. <br />
            ✔ AI helps doctors diagnose diseases faster. <br />
            ✔ AI protects banks from fraud and supports financial decisions. <br />
            ✔ AI powers entertainment apps like TikTok, Netflix, and YouTube.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson7"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 7 →
        </Link>
      </div>

    </div>
  );
}
