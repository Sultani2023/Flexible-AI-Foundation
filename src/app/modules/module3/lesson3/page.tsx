'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson3() {
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
          Lesson 3: AI Tools for Designers
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn about popular AI tools used by designers, including 
          MidJourney, DALL·E, Canva AI, and Stable Diffusion, and how each can enhance your creative workflow.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: MidJourney */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. MidJourney: Generating Artistic Images</h3>
        <p className="text-gray-700 mb-6">
          MidJourney is a powerful AI tool for creating artistic and visually striking images. 
          It is ideal for concept art, illustrations, and experimental designs. You can create 
          highly detailed and creative outputs by carefully crafting your prompts.
        </p>

        {/* SECTION 2: DALL·E */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. DALL·E: Creative Visuals & Concepts</h3>
        <p className="text-gray-700 mb-6">
          DALL·E specializes in generating imaginative visuals and conceptual art. It is perfect 
          for designers who want unique imagery, conceptual illustrations, or playful designs. 
          Its ease of use and creativity make it a go-to tool for rapid ideation.
        </p>

        {/* SECTION 3: Canva AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Canva AI: Design Templates & Enhancements</h3>
        <p className="text-gray-700 mb-6">
          Canva AI integrates AI features into Canva’s design platform, helping you enhance templates, 
          generate custom graphics, or edit images seamlessly. It is highly useful for social media 
          posts, marketing materials, and client presentations.
        </p>

        {/* SECTION 4: Stable Diffusion */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Stable Diffusion: Customizable AI Artwork</h3>
        <p className="text-gray-700 mb-6">
          Stable Diffusion allows designers to generate highly customizable AI artwork. It is 
          open-source, versatile, and supports a wide range of styles. Designers can tweak parameters, 
          combine prompts, and produce professional-quality digital art tailored to their vision.
        </p>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 3</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ MidJourney: Artistic and creative image generation. <br />
            ✔ DALL·E: Conceptual and imaginative visuals. <br />
            ✔ Canva AI: Enhances templates, designs, and marketing content. <br />
            ✔ Stable Diffusion: Highly customizable AI artwork for professional designs.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson4"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 4 →
        </Link>
      </div>
    </div>
  );
}
