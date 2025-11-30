'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module3"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 3: AI Image Generation for Graphic Designers
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 5: Editing AI-Generated Images
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn how to refine AI-generated images, upscale them without losing quality, 
          and remove artifacts or imperfections to create polished, professional designs.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Refining Outputs */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Refining Outputs Using Photoshop, Figma, or Canva
        </h3>
        <p className="text-gray-700 mb-6">
          After generating images with AI, you can refine them using traditional design software. This allows you to enhance quality, adjust composition, and correct minor errors.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li><strong>Photoshop:</strong> Adjust color, contrast, remove unwanted elements, and enhance details.</li>
          <li><strong>Figma:</strong> Incorporate AI images into UI/UX designs, mockups, or web projects.</li>
          <li><strong>Canva:</strong> Enhance templates, add graphics, text, or brand elements seamlessly.</li>
        </ul>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800 font-medium">
            Tip: Use layer-based editing to keep AI-generated elements flexible and editable.
          </p>
        </div>

        {/* SECTION 2: Upscaling AI Images */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Upscaling AI Images Without Losing Quality
        </h3>
        <p className="text-gray-700 mb-6">
          Sometimes AI-generated images are low-resolution. Upscaling tools allow you to increase resolution while preserving detail.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Use AI-based upscalers like Topaz Gigapixel, Let’s Enhance, or built-in tools in Photoshop.</li>
          <li>Maintain sharpness and avoid pixelation when enlarging images for print or high-res projects.</li>
          <li>Check for artifacts after upscaling and refine edges or textures if needed.</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800 font-medium">
            Example: Upscale a 512x512 AI illustration to 2048x2048 for a poster without losing clarity or details.
          </p>
        </div>

        {/* SECTION 3: Removing Artifacts & Adjusting Details */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Removing Artifacts and Adjusting Details
        </h3>
        <p className="text-gray-700 mb-6">
          AI-generated images may contain minor artifacts or imperfections. Cleaning them up ensures a professional finish.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Use Photoshop healing brush, clone stamp, or AI-powered cleanup tools.</li>
          <li>Adjust lighting, shadows, and colors to match your design intent.</li>
          <li>Blend multiple AI outputs to fix unwanted artifacts or enhance details.</li>
        </ul>
        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800 font-medium">
            Pro Tip: Always zoom in and inspect AI-generated images before final use to catch subtle issues.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 5</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Refine AI-generated images using Photoshop, Figma, or Canva. <br />
            ✔ Upscale images without losing resolution or details. <br />
            ✔ Remove artifacts and enhance visual quality for professional results. <br />
            ✔ Combining AI tools with design software creates polished and usable artwork.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson6"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 6 →
        </Link>
      </div>
    </div>
  );
}
