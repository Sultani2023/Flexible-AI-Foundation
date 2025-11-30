"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module4Lesson6() {
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
          Lesson 7: Enhancing Videos With AI Effects
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI can improve your videos using background removal, face enhancement,
          green screen effects, and advanced transitions or filters.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Background Removal & Replacement
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI makes it incredibly easy to remove or replace backgrounds without using a physical green screen.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Remove messy or distracting backgrounds</li>
          <li>Replace with solid colors, photos, or AI-generated scenes</li>
          <li>Perfect for product videos, TikToks, and interviews</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>Runway, Kapwing,</strong> and <strong>Adobe Express</strong> offer powerful automatic background removal.
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Face Enhancement & Stabilization
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          AI can clean up faces, fix blur, and stabilize shaky video instantly:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Sharpen blurry faces</li>
          <li>Smooth skin while keeping natural detail</li>
          <li>Fix shaky hand-held footage automatically</li>
          <li>Improve lighting and contrast on faces</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>Topaz Video AI, Remini,</strong> and <strong>DaVinci Resolve</strong> use AI to enhance faces and footage quality.
          </p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. AI Green Screen Effects
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI “virtual green screen” allows you to isolate people without an actual green background.
        </p>

        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900">🎬 Virtual Backgrounds</h4>
            <p>Replace backgrounds with offices, studios, or digital sets.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎭 Custom Scenes</h4>
            <p>Create fantasy, sci-fi, or professional environments instantly.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">⚡ Automatic Masking</h4>
            <p>AI detects your outline perfectly — no manual masking needed!</p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
          4. Filters, Transitions & Style Transformations
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI can apply creative effects that normally take hours to edit manually.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Add cinematic color grading</li>
          <li>Transform video into cartoon, anime, or sketch style</li>
          <li>Apply smooth AI transitions between scenes</li>
          <li>Create slow-motion or speed ramping automatically</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>Runway Gen-2, Pika Labs,</strong> and <strong>CapCut</strong>
            offer powerful AI filters and transitions for creative editing.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ Remove or replace backgrounds easily. <br />
            ✔ Enhance faces and stabilize shaky footage. <br />
            ✔ Use AI green screen without real equipment. <br />
            ✔ Apply creative filters, transitions, and AI-driven styles.
          </p>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson8"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 8 →
        </Link>
      </div>
    </div>
  );
}
