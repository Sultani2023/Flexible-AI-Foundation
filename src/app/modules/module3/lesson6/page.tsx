'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson6() {
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
          Lesson 6: Branding & Marketing Design
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn how to use AI tools to create social media posts, design logos and banners, 
          generate mockups and product visuals, and maintain a consistent style across marketing campaigns.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Social Media Posts */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Using AI to Create Social Media Posts
        </h3>
        <p className="text-gray-700 mb-6">
          AI tools can quickly generate visually engaging posts tailored for different platforms. This saves time while keeping your content fresh and appealing.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Generate graphics for Instagram, Facebook, LinkedIn, and Twitter.</li>
          <li>Use AI to create templates, adjust colors, and add text overlays.</li>
          <li>Experiment with styles, moods, and layouts to match your brand identity.</li>
        </ul>

        {/* SECTION 2: Designing Logos & Banners */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Designing Logos and Banners
        </h3>
        <p className="text-gray-700 mb-6">
          AI can assist in creating logos, banners, and brand elements quickly and creatively. You can refine these outputs in traditional design software for a polished look.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Generate multiple logo concepts in seconds for inspiration.</li>
          <li>Create banners with different color schemes and compositions.</li>
          <li>Combine AI designs with human creativity for unique branding.</li>
        </ul>

        {/* SECTION 3: Generating Mockups & Product Visuals */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Generating Mockups and Product Visuals
        </h3>
        <p className="text-gray-700 mb-6">
          AI-generated mockups help visualize products, packaging, or designs in real-life scenarios, making presentations more professional and persuasive.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Create product packaging mockups for e-commerce or client presentations.</li>
          <li>Generate lifestyle images with your product in context.</li>
          <li>Use AI to test variations and experiment with visual concepts.</li>
        </ul>

        {/* SECTION 4: Maintaining Consistent Style */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Maintaining a Consistent Style Across Campaigns
        </h3>
        <p className="text-gray-700 mb-6">
          Consistency is key in branding. AI tools help replicate styles, colors, fonts, and layouts to ensure a unified look across all marketing materials.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Use AI to apply brand colors, logos, and typography consistently.</li>
          <li>Create reusable templates for social media and ad campaigns.</li>
          <li>Ensure all outputs align with the brand’s tone and visual identity.</li>
        </ul>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 6</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Use AI to create engaging social media posts. <br />
            ✔ Design logos and banners quickly with AI assistance. <br />
            ✔ Generate mockups and product visuals for presentations. <br />
            ✔ Maintain consistent style across campaigns to strengthen brand identity.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson7"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 7 →
        </Link>
      </div>
    </div>
  );
}
