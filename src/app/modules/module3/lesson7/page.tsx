'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson7() {
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
          Lesson 7: Ethical Use of AI in Design
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn about the ethical considerations when using AI in design, including copyright and licensing, avoiding copying existing artwork, giving credit to AI tools, and responsible creative practices.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Copyright & Licensing */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Copyright and Licensing Concerns
        </h3>
        <p className="text-gray-700 mb-6">
          When using AI-generated content, it is important to understand copyright and licensing rules. Some AI tools may produce outputs based on copyrighted materials, so always check usage rights.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Verify the AI tool’s license for commercial use.</li>
          <li>Ensure outputs do not infringe on existing copyrighted work.</li>
          <li>Use royalty-free or licensed assets when incorporating AI-generated content.</li>
        </ul>

        {/* SECTION 2: Avoid Copying Existing Artwork */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Avoiding Copying Existing Artwork
        </h3>
        <p className="text-gray-700 mb-6">
          AI can unintentionally replicate styles or elements from existing artworks. Designers must ensure originality and avoid copying someone else’s creative work.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Compare AI outputs with known artworks to prevent similarities.</li>
          <li>Modify and customize AI-generated images to make them original.</li>
          <li>Respect other artists’ intellectual property rights.</li>
        </ul>

        {/* SECTION 3: Giving Credit to AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Giving Credit to AI When Needed
        </h3>
        <p className="text-gray-700 mb-6">
          Transparency is key when presenting AI-assisted designs. Crediting AI tools shows ethical responsibility and informs viewers or clients about your workflow.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Mention the AI tool used in your project documentation or portfolio.</li>
          <li>Be clear about what parts were AI-generated versus manually designed.</li>
          <li>Follow platform guidelines if sharing AI-generated work publicly.</li>
        </ul>

        {/* SECTION 4: Responsible & Fair Use */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Responsible and Fair Use of AI in Creative Work
        </h3>
        <p className="text-gray-700 mb-6">
          Ethical AI use goes beyond legality—it’s about fairness, transparency, and respect for the creative community.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Use AI to enhance creativity, not to exploit or mislead.</li>
          <li>Avoid generating offensive or harmful content.</li>
          <li>Combine AI assistance with your own creative input to maintain authenticity.</li>
        </ul>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 7</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Understand copyright and licensing rules when using AI. <br />
            ✔ Avoid copying existing artworks to maintain originality. <br />
            ✔ Give proper credit to AI tools when appropriate. <br />
            ✔ Use AI responsibly, ethically, and fairly in creative projects.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson8"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 7 →
        </Link>
      </div>
    </div>
  );
}
