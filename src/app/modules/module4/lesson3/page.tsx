"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module4Lesson3() {
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
          Lesson 3: Creating Videos From Text
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how modern AI tools like Pika Labs, Runway ML, and Synthesia turn simple text prompts into realistic video scenes, characters, and animations.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Tools for Text-to-Video Creation
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Text-to-video tools allow you to describe a scene in words and instantly generate a moving visual. These tools are becoming extremely popular for creators who want fast, cinematic results.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Pika Labs:</strong> Great for short cinematic clips and character animations.</li>
          <li><strong>Runway ML:</strong> Powerful for high-quality scenes, object removal, and real-world style videos.</li>
          <li><strong>Synthesia:</strong> Best for avatar-based videos where a digital presenter speaks your script.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            Example prompt: <br />
            <strong>“A woman walking in a futuristic Dubai-like city, neon lights, cinematic slow-motion.”</strong>
          </p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Turning Text Prompts Into Short Videos
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          With AI video tools, all you need is a short description. The AI handles lighting, motion, camera angles, and style automatically.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Write a clear text prompt</li>
          <li>Select video style (cinematic, animation, realistic, fantasy)</li>
          <li>Choose duration (3–10 seconds)</li>
          <li>AI generates the clip</li>
          <li>You can refine by adding more detail</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl mb-8">
          <p className="text-gray-800">
            The more specific your prompt, the better your video. Include details like weather, lighting, movement, mood, and camera angle.
          </p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Adding Characters, Movements & Scenes
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Many AI tools now support character control, allowing you to create scenes with emotion, action, and consistency.
        </p>

        <div className="space-y-4 text-gray-700">

          <div>
            <h4 className="font-semibold text-gray-900">🧍 Character Creation</h4>
            <p>
              Create characters based on your text or upload a reference image. AI will animate them with natural motion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🎥 Movement & Action</h4>
            <p>
              You can describe actions like “running,” “looking at camera,” “flying,” or “smiling,” and AI adds the motion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🌆 Scene Generation</h4>
            <p>
              AI tools can build environments such as cities, forests, classrooms, offices, or fantasy worlds.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
          4. When to Use Text-to-Video vs Real Footage
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Text-to-video is powerful, but it’s not always the right choice. Understanding when to use AI-generated video vs real footage helps you create better projects.
        </p>

        <div className="space-y-4 text-gray-700">

          <div>
            <h4 className="font-semibold text-gray-900">✔ Use text-to-video when:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>You need cinematic or fantasy-style visuals</li>
              <li>You don’t have a camera or actors</li>
              <li>You want animated characters or futuristic worlds</li>
              <li>You need fast, low-budget production</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">✔ Use real footage when:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Doing interviews or vlogs</li>
              <li>Showing real events, products, or tutorials</li>
              <li>Creating authentic emotional content</li>
            </ul>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            ✔ Text-to-video tools turn simple prompts into cinematic scenes. <br />
            ✔ Pika Labs, Runway ML, and Synthesia are the top tools. <br />
            ✔ You can add characters, actions, and detailed environments. <br />
            ✔ Choose AI or real footage depending on your project needs.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module4/lesson4"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 4 →
        </Link>
      </div>
    </div>
  );
}
