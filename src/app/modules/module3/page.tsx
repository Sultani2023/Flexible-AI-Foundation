'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function Module3Overview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 via-orange-100 to-yellow-100 py-14 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/modules"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Modules
        </Link>
      </div>
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
          🎨 Module 3: AI Image Generation for Graphic Designers
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Explore how AI can transform your graphic design workflow. Learn to generate, edit, and enhance images using AI tools while maintaining creativity and style.
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: Introduction to AI Image Generation",
            desc: "What AI image generation is, how it assists graphic designers, and an overview of popular AI generators like MidJourney, DALL·E, and Stable Diffusion.",
            href: "/modules/module3/lesson1",
          },
          {
            title: "Lesson 2: Understanding Prompts",
            desc: "Learn what prompts are, how to write effective ones, and examples using keywords, moods, colors, and perspectives.",
            href: "/modules/module3/lesson2",
          },
          {
            title: "Lesson 3: AI Tools for Designers",
            desc: "Explore MidJourney, DALL·E, Canva AI, and Stable Diffusion to generate artistic, creative, and customizable images.",
            href: "/modules/module3/lesson3",
          },
          {
            title: "Lesson 4: Creating Digital Art with AI",
            desc: "Generate concept art and illustrations, experiment with different styles, and combine AI images with traditional design software.",
            href: "/modules/module3/lesson4",
          },
          {
            title: "Lesson 5: Editing AI-Generated Images",
            desc: "Refine AI outputs using Photoshop, Figma, or Canva. Learn upscaling, removing artifacts, and adjusting image details.",
            href: "/modules/module3/lesson5",
          },
          {
            title: "Lesson 6: Branding & Marketing Design",
            desc: "Use AI to create social media posts, logos, banners, mockups, and maintain a consistent style across campaigns.",
            href: "/modules/module3/lesson6",
          },
          {
            title: "Lesson 7: Ethical Use of AI in Design",
            desc: "Understand copyright, licensing, avoiding plagiarism, giving credit, and responsible AI use in creative work.",
            href: "/modules/module3/lesson7",
          },
          {
            title: "Lesson 8: Portfolio & Freelance Opportunities",
            desc: "Build a portfolio with AI-assisted designs, showcase work, offer AI-based services, and stay competitive in the freelance market.",
            href: "/modules/module3/lesson8",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl  hover:-translate-y-1 
            ">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                <BookOpen className="text-red-500" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {lesson.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {lesson.desc}
              </p>
            </div>
          </Link>
        ))}

      </div>

      {/* BOTTOM BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <Link
          href="/modules"
          className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Back to Modules
        </Link>
      </div>
    </div>
  );
}
