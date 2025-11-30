"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module4Lesson9() {
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
          Lesson 9: Ethical Use of AI in Video Production
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          As AI tools become powerful and widely used, knowing how to use them
          responsibly is essential. This lesson covers deepfake risks, when you
          must disclose AI use, and how to create content ethically and safely.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 — DEEPFAKE RISKS */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Understanding Deepfake Risks
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Deepfakes are AI-generated videos that replace someone’s face or
            voice with another person’s. While they can be fun or educational,
            they can also be misused to spread misinformation or harm others.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Fake speeches or political messages</li>
            <li>Impersonation or identity theft</li>
            <li>Misleading videos that appear real</li>
            <li>Harassment or targeted manipulation</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Important:  
              Never use AI to impersonate someone without permission — it can
              cause serious emotional, social, and legal harm.
            </p>
          </div>
        </div>

        {/* SECTION 2 — DISCLOSING AI USE */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. When You Must Disclose AI Use
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Some cases require you to tell viewers that AI was used. This builds
            trust and prevents misunderstandings.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>When using AI-generated characters or voices</li>
            <li>When editing a person’s appearance heavily</li>
            <li>When creating educational or news-style videos</li>
            <li>When producing commercial or client work</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              If you use an AI voice instead of recording your own, include a
              small note like: “Voice generated using AI.”
            </p>
          </div>
        </div>

        {/* SECTION 3 — RESPONSIBLE AI USE */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Using AI Responsibly
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI is a powerful tool — but using it responsibly protects your
            audience and your reputation as a creator.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Always fact-check information before publishing</li>
            <li>Avoid altering people’s faces without permission</li>
            <li>Use AI to enhance creativity, not deceive</li>
            <li>Review AI-generated content for errors or bias</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Tip:  
              Think of AI as an assistant — you stay in control of the final
              decisions and the accuracy of your content.
            </p>
          </div>
        </div>

        {/* SECTION 4 — AVOIDING HARMFUL CONTENT */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Avoiding Harmful or Misleading Content
        </h3>

        <div className="space-y-4 text-gray-700 mb-10 leading-relaxed">
          <p>
            AI should never be used in ways that could harm people, damage
            reputations, or mislead audiences.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Do not create fake news or manipulated events</li>
            <li>Avoid AI edits that change a person’s identity</li>
            <li>Do not use AI to embarrass or target individuals</li>
            <li>Avoid sharing AI content without verifying accuracy</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Remember:  
              Ethical creators protect their audience, respect others, and use
              AI for positive, creative, and educational purposes.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 9</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Understand deepfake risks and avoid misuse. <br />
            ✔ Disclose AI use when necessary. <br />
            ✔ Use AI responsibly and ethically. <br />
            ✔ Avoid harmful or misleading content. <br />
          </p>
        </div>

      </div>

      {/* END MODULE BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson10"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 10 →
        </Link>
      </div>

    </div>
  );
}
