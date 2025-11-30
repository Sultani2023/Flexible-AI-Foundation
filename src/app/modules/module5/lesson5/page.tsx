"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module5Lesson5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module5"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 5: No-Code Website & App Building
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 5: Design Principles for No-Code Creators
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn the most important design principles that help you create beautiful, clean, 
          and user-friendly websites or apps — even without coding experience.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Visual Hierarchy & Layout
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Visual hierarchy guides the user’s eyes to the most important information first.
          Good design helps people quickly understand your app or website.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Use big headings for important content</li>
          <li>Place key information at the top</li>
          <li>Use spacing to separate different sections</li>
          <li>Keep layouts simple and easy to scan</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Colors, Contrast & Typography
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Colors and typography affect how users feel and how readable your content is.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>🎨 <strong>Colors:</strong> Use 2–3 main colors for a clean design.</p>
          <p>🌗 <strong>Contrast:</strong> Make sure text is readable on any background.</p>
          <p>🔤 <strong>Typography:</strong> Use 1–2 fonts only (e.g., Inter, Poppins).</p>
          <p>📐 <strong>Consistency:</strong> Keep the same font sizes for headings, subheadings, and body text.</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Mobile-First Design
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          More than 70% of users browse on their phones — which is why mobile-first design is essential.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Use responsive templates</li>
          <li>Check how layouts look on small screens</li>
          <li>Keep buttons large and easy to tap</li>
          <li>Avoid long text blocks on mobile</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          Most no-code tools like Wix, Webflow, and Bubble have built-in mobile previews to help you design correctly.
        </p>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
          4. Using AI to Generate Graphics, Icons & Content
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI tools can make your designs look professional even if you’re not a designer.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li><strong>Canva AI:</strong> Generate banners, icons, and social media graphics</li>
          <li><strong>DALL·E / Midjourney:</strong> Create unique images and illustrations</li>
          <li><strong>ChatGPT:</strong> Write website text, descriptions, and headlines</li>
          <li><strong>Figma AI:</strong> Generate UI layouts and design variations</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          Using these tools helps you save time and maintain a consistent, high-quality design.
        </p>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - Use visual hierarchy to guide users’ attention. <br />
            - Colors, contrast, and typography shape your design quality. <br />
            - Always design for mobile-first experiences. <br />
            - AI tools help you create professional graphics and content easily.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module5/lesson6"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 6 →
        </Link>
      </div>
    </div>
  );
}
