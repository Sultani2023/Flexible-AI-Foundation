'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Module3Lesson2() {
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
          Lesson 2: Understanding Prompts
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          In this lesson, you will learn what prompts are in AI image generation, how to write 
          effective prompts, and how to use keywords, moods, colors, and perspectives to get 
          the best results.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: What Prompts Are */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. What Prompts Are in AI Image Generation
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            <strong>Prompts</strong> are textual instructions you give to an AI image generator 
            to create a specific image. They guide the AI on what to produce.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Describe the subject: objects, characters, or scene</li>
            <li>Specify the style: realistic, cartoon, abstract, or artistic</li>
            <li>Include mood or emotions: happy, dark, dramatic, etc.</li>
            <li>Add colors, lighting, and perspective</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              📌 <strong>Tip:</strong> The more specific your prompt, the closer the output will match your vision.
            </p>
          </div>
        </div>

        {/* SECTION 2: How to Write Effective Prompts */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. How to Write Effective Prompts
        </h3>

        <div className="space-y-6 mb-10 text-gray-700 leading-relaxed">
          <p>
            Writing effective prompts is essential to get the desired AI-generated image.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>Be descriptive:</strong> Include detailed information about the subject and style.</li>
            <li><strong>Use adjectives:</strong> Specify colors, textures, lighting, and mood.</li>
            <li><strong>Specify perspective:</strong> Front view, top-down, side angle, etc.</li>
            <li><strong>Combine keywords:</strong> Use terms like “digital art,” “illustration,” “photo-realistic.”</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example: <br />
              "A futuristic city at sunset, digital art, neon colors, cinematic lighting, top-down perspective"
            </p>
          </div>
        </div>

        {/* SECTION 3: Examples of Descriptive Prompts */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Examples of Descriptive Prompts for Different Styles
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🎨 Realistic Style</h4>
            <p>"A portrait of a woman in Renaissance style, soft lighting, oil painting texture"</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🖌️ Cartoon Style</h4>
            <p>"A cute cartoon dog playing in a colorful garden, vibrant colors, cheerful mood"</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">✨ Abstract Style</h4>
            <p>"Abstract digital painting, flowing shapes, gradient colors, dreamy atmosphere"</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xl">🏙️ Landscape / Perspective</h4>
            <p>"A futuristic cityscape, neon lights, aerial view, cinematic perspective"</p>
          </div>
        </div>

        {/* SECTION 4: Using Keywords, Moods, Colors, and Perspectives */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Using Keywords, Moods, Colors, and Perspectives
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Including specific elements in your prompt helps guide AI to generate more accurate images:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Keywords:</strong> digital art, illustration, 3D render, concept art</li>
            <li><strong>Mood / Emotion:</strong> dramatic, cheerful, serene, mysterious</li>
            <li><strong>Colors:</strong> pastel, neon, monochrome, vibrant</li>
            <li><strong>Perspective / Angle:</strong> top-down, side view, close-up, wide shot</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 2</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Prompts are instructions guiding AI to generate images. <br />
            ✔ Effective prompts include details about style, mood, colors, and perspective. <br />
            ✔ Descriptive prompts produce better and more accurate AI outputs. <br />
            ✔ Keywords, emotions, colors, and angles are essential tools in crafting prompts.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module3/lesson3"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 3 →
        </Link>
      </div>
    </div>
  );
}
