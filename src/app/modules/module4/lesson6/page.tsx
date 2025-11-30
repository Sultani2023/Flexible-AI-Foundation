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
          Lesson 6: AI Animation & Motion Graphics
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI can generate animations, motion graphics, and even animated characters — no advanced design skills required.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Using AI for Simple Animations
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI tools make it easy to create simple animations like text effects, transitions, and animated elements without needing advanced software.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Animated titles and lower-thirds</li>
          <li>Logo animations</li>
          <li>Slide transitions</li>
          <li>Text motion effects</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>Canva, Adobe Express,</strong> and <strong>Runway</strong> let you animate graphics instantly using simple presets.
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Creating Animated Characters with AI
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          With AI, you can generate characters and bring them to life with voice and movement:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Create character designs using AI image tools</li>
          <li>Animate facial expressions automatically</li>
          <li>Add lip-sync using AI voice tools</li>
          <li>Generate full character motion</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Tools like <strong>D-ID, Animaker,</strong> and <strong>HeyGen</strong> can turn still images into talking, moving characters.
          </p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Generating Motion Graphics with AI Tools
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Motion graphics (moving shapes, text, transitions, visual effects) can now be generated automatically using AI.
        </p>

        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900">✨ Auto-Generated Motion</h4>
            <p>AI can animate shapes, icons, and text with a single click.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎥 Scene Animation</h4>
            <p>Automatically animate scenes for intros, outros, and info sections.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🔄 Motion Templates</h4>
            <p>Use pre-designed motion layouts for professional-quality videos.</p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
          4. Integrating Animations with Canva or After Effects
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Once animations are generated, you can edit and enhance them using Canva or After Effects.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Import AI animations into Canva for quick editing</li>
          <li>Add transitions, backgrounds, and text</li>
          <li>Use After Effects for advanced motion graphics</li>
          <li>Export animations for social media or video projects</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            AI makes animation accessible — you can create motion graphics in minutes instead of hours.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ Create animations without advanced editing skills. <br />
            ✔ Generate animated characters using AI tools. <br />
            ✔ Produce motion graphics automatically. <br />
            ✔ Easily integrate AI animations with Canva & After Effects.
          </p>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson7"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 7 →
        </Link>
      </div>
    </div>
  );
}
