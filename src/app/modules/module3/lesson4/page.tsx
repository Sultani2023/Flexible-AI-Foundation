'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson4() {
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
          Lesson 4: Creating Digital Art with AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn how to generate concept art and illustrations, experiment with different styles, 
          and combine AI-generated images with traditional design software for professional results.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Generating Concept Art and Illustrations */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Generating Concept Art and Illustrations
        </h3>
        <p className="text-gray-700 mb-6">
          AI tools like MidJourney, DALL·E, and Stable Diffusion can help you create concept art and detailed illustrations quickly. 
          By feeding descriptive prompts, you can explore multiple variations of characters, environments, and objects.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Use prompts to define subjects, colors, lighting, and mood.</li>
          <li>Create multiple iterations to explore visual ideas.</li>
          <li>Combine generated images to refine concepts or inspire new designs.</li>
        </ul>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800 font-medium">
            Tip: Experiment with different levels of detail in your prompts to generate both broad ideas and highly polished visuals.
          </p>
        </div>

        {/* SECTION 2: Experimenting with Styles */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Experimenting with Styles: Realistic, Cartoon, Abstract
        </h3>
        <p className="text-gray-700 mb-6">
          AI allows you to try different visual styles effortlessly. You can switch between realistic, cartoon, and abstract styles 
          to see which best fits your creative vision.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li><strong>Realistic:</strong> Use for professional illustrations, product concepts, or photorealistic visuals.</li>
          <li><strong>Cartoon / Stylized:</strong> Great for marketing, children’s books, and playful content.</li>
          <li><strong>Abstract:</strong> Useful for modern art, album covers, or unique compositions.</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800 font-medium">
            Example: "A futuristic city skyline, photorealistic, golden hour lighting" vs. "A futuristic city, colorful cartoon style, whimsical atmosphere".
          </p>
        </div>

        {/* SECTION 3: Combining AI Images with Traditional Software */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Combining AI Images with Traditional Design Software
        </h3>
        <p className="text-gray-700 mb-6">
          AI-generated images can be enhanced using traditional design tools like Photoshop, Figma, or Illustrator. 
          This approach allows you to fine-tune details, adjust colors, and integrate AI visuals seamlessly into professional projects.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Refine AI outputs: Correct artifacts, enhance resolution, and adjust composition.</li>
          <li>Integrate multiple AI images: Blend elements from different generations into one cohesive design.</li>
          <li>Overlay with vector graphics, typography, or other design elements for final production.</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800 font-medium">
            Pro Tip: Treat AI as a collaborative partner — generate ideas, then refine with your design skills.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 4</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Use AI to quickly generate concept art and illustrations. <br />
            ✔ Experiment with different styles: realistic, cartoon, and abstract. <br />
            ✔ Combine AI images with traditional design software to refine and enhance your artwork. <br />
            ✔ AI acts as a creative partner, helping you speed up the ideation and design process.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson5"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 5 →
        </Link>
      </div>
    </div>
  );
}
