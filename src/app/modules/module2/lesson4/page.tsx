"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module2"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 2: AI Content Creation for Freelance Writing
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 4: AI Tools for Copywriting
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn how to use AI tools to write captions, product descriptions,
          ad copy, and strong call-to-actions (CTAs) that convert readers into customers.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Social Media Captions */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Writing Social Media Captions</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI tools like ChatGPT, Claude, and Gemini can instantly create engaging captions
            tailored for Instagram, Facebook, LinkedIn, TikTok, or Twitter.
            You can choose tone, length, audience, and style.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Short and catchy:</strong> Perfect for Instagram or TikTok.</li>
            <li><strong>Professional and clean:</strong> Best for LinkedIn posts.</li>
            <li><strong>Story-style captions:</strong> Longer, emotional content for personal branding.</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Write 5 Instagram captions for a new organic skincare serum.
              Make them fun, modern, and include emojis.”
            </p>
          </div>

          <p>
            PRO TIP: Ask for multiple styles — bold, funny, dramatic, professional — then pick your favorite.
          </p>
        </div>

        {/* SECTION 2: Product Descriptions */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Writing Product Descriptions</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Product descriptions must highlight features and benefits and persuade the customer.
            AI can help format them clearly and creatively.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Features:</strong> What the product has.</li>
            <li><strong>Benefits:</strong> Why the customer needs it.</li>
            <li><strong>Emotional impact:</strong> How it makes the buyer feel.</li>
            <li><strong>SEO phrases:</strong> Add keywords for better ranking.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Write a product description for a wireless Bluetooth headset.
              Include features, benefits, and a short persuasive ending.”
            </p>
          </div>

          <p>
            PRO TIP: Always add a CTA at the end of every product description to increase conversions.
          </p>
        </div>

        {/* SECTION 3: Ad Copy */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Creating Ad Copy Using AI</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can generate high-converting advertisements for Facebook, Google Ads,
            Instagram, and TikTok. It can follow marketing formulas automatically.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>AIDA:</strong> Attention → Interest → Desire → Action</li>
            <li><strong>PAS:</strong> Problem → Agitate → Solution</li>
            <li><strong>FAB:</strong> Feature → Advantage → Benefit</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Write 3 Facebook ads for an online English course using AIDA.
              Make them short and persuasive.”
            </p>
          </div>

          <p>
            PRO TIP: Ask AI to generate 3–5 variations and test which version performs best.
          </p>
        </div>

        {/* SECTION 4: Call-to-Actions (CTAs) */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Improving Call-to-Actions (CTAs)</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            A strong CTA motivates the reader to take action — buy, sign up, download, or contact.
            AI helps you create clear and compelling options.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>“Get Started Today”</li>
            <li>“Download Your Free Guide”</li>
            <li>“Join the Program Now”</li>
            <li>“Shop the Collection”</li>
            <li>“Book Your Free Consultation”</li>
          </ul>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Give me 10 CTA options for a landing page selling an AI writing course.
              Make them short, motivational, and modern.”
            </p>
          </div>

          <p>
            PRO TIP: CTAs should be short, action-oriented, and emotionally appealing.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-6">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 4</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI helps you create fast, engaging social media captions.<br />
            ✔ Strong product descriptions include features, benefits, and emotional appeal.<br />
            ✔ Use marketing formulas like AIDA or PAS to write better ad copy.<br />
            ✔ CTAs are crucial — AI can help you create multiple persuasive options.<br />
            ✔ Mix AI speed with your creativity to produce high-quality copywriting.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson5"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 5 →
        </Link>
      </div>

    </div>
  );
}
