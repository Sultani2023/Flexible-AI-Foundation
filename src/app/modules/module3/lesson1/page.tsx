'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson1() {
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
          Lesson 1: Introduction to AI Image Generation
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn what AI image generation is, how it assists graphic designers, 
          and get an overview of popular AI image generators like MidJourney, DALL·E, and Stable Diffusion.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: What AI Image Generation Is */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. What AI Image Generation Is
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            <strong>AI image generation</strong> refers to using artificial intelligence models 
            to create images, illustrations, or visual designs automatically based on textual prompts 
            or parameters.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Creating concept art and illustrations</li>
            <li>Generating design mockups and prototypes</li>
            <li>Exploring creative styles without traditional manual effort</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              📌 <strong>Simple definition:</strong>  
              AI image generation = using AI tools to create visual content automatically based on your instructions.
            </p>
          </div>
        </div>

        {/* SECTION 2: How AI Assists Graphic Designers */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. How AI Assists Graphic Designers
        </h3>

        <div className="space-y-6 mb-10 text-gray-700 leading-relaxed">
          <p>
            AI tools help designers save time and enhance creativity by generating ideas and visuals quickly. 
            They do not replace designers but augment their workflow.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Concept generation:</strong> Quickly create multiple design options.
            </li>
            <li>
              <strong>Style experimentation:</strong> Test realistic, abstract, or cartoon styles easily.
            </li>
            <li>
              <strong>Time-saving:</strong> Reduce repetitive design work and speed up projects.
            </li>
            <li>
              <strong>Inspiration:</strong> Explore new ideas and perspectives that might not come naturally.
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              A designer can generate 10 logo concepts in minutes using AI instead of spending hours manually sketching.
            </p>
          </div>
        </div>

        {/* SECTION 3: Overview of Popular AI Image Generators */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Overview of Popular AI Image Generators
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🎨 MidJourney</h4>
            <p>
              Focused on artistic and stylized image generation. Great for creative illustrations, concept art, and abstract designs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🤖 DALL·E</h4>
            <p>
              Generates creative visuals from text prompts. Perfect for marketing materials, concept ideas, and imaginative visuals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🖌️ Stable Diffusion</h4>
            <p>
              Offers highly customizable image generation. Designers can fine-tune style, resolution, and composition for professional projects.
            </p>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 1</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI image generation creates visuals from text prompts. <br />
            ✔ AI helps designers save time, explore ideas, and experiment with styles. <br />
            ✔ Popular tools include MidJourney, DALL·E, and Stable Diffusion. <br />
            ✔ AI augments creative workflows without replacing human designers.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </div>
  );
}
