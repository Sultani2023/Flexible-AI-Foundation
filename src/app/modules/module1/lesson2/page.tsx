"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson2() {
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
          Lesson 2: Types of Artificial Intelligence
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn about the different levels of AI, how they work, and what is possible today versus the future.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION: Overview */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Two Main Categories of AI
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <p>
            AI can be divided into two broad categories: <strong>Narrow AI</strong> and
            <strong> General AI</strong>. These categories help us understand what AI can do today and what might be possible in the future.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl mb-10">
          <p className="text-gray-800">
            <strong>Narrow AI</strong> is what we use today — it performs one task extremely well.
            <br />
            <strong>General AI</strong> is the future — a machine that can think and learn like a human.
          </p>
        </div>

        {/* SECTION: Narrow AI vs General AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Narrow AI vs. General AI
        </h3>

        <div className="space-y-6 mb-10">
          <div>
            <h4 className="font-semibold text-gray-900">🤖 Narrow AI (Weak AI)</h4>
            <p className="text-gray-700 leading-relaxed">
              This is the type of AI we use today. It is designed to perform a
              <strong> specific task</strong>, such as recognizing faces, recommending videos, or answering questions.
              Examples include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>ChatGPT (text generation)</li>
              <li>YouTube recommendations</li>
              <li>Google Maps</li>
              <li>Face recognition on phones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🧠 General AI (Strong AI)</h4>
            <p className="text-gray-700 leading-relaxed">
              This is a <strong>theoretical future form of AI</strong> that could understand, learn, and perform
              any task that a human brain can. It does not exist yet.
            </p>
          </div>
        </div>

        {/* SECTION: 3 Levels of AI Functionality */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Functional Types of AI
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI systems can also be classified based on how they think, remember, and make decisions.
        </p>

        {/* Reactive Machines */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">⚡ Reactive Machines</h4>
          <p className="text-gray-700 leading-relaxed">
            These are the simplest form of AI. They do not have memory — they react only to the present moment.
            Example: IBM’s Deep Blue chess computer (1997).
          </p>
        </div>

        {/* Limited Memory */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">🧠 Limited Memory AI</h4>
          <p className="text-gray-700 leading-relaxed">
            This type of AI learns from past data. Almost all modern AI systems — including ChatGPT, Siri, and
            self-driving cars — fall under this category.
          </p>
        </div>

        {/* Theory of Mind */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">🧑‍🤝‍🧑 Theory of Mind AI</h4>
          <p className="text-gray-700 leading-relaxed">
            This is still being researched. It refers to AI that understands emotions, beliefs, intentions, and
            human behavior.
          </p>
        </div>

        {/* Self-aware */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900">✨ Self-Aware AI (Future Concept)</h4>
          <p className="text-gray-700 leading-relaxed">
            This is the most advanced and hypothetical form of AI — one that becomes conscious and understands
            itself. It does not exist today.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - AI can be Narrow (today’s AI) or General (future). <br />
            - Reactive machines can only react. <br />
            - Limited Memory AI learns from data. <br />
            - Theory of Mind AI aims to understand human emotions. <br />
            - Self-aware AI is still a future concept.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson3"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 3 →
        </Link>
      </div>
    </div>
  );
}
