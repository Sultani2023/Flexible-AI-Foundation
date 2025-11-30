"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Module1Overview() {
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
          📘 Module 1: Introduction to AI
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Start your journey into Artificial Intelligence with simple, clear explanations.
          Each lesson is designed for beginners and real-world learners.
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: What Is Artificial Intelligence?",
            desc: "Learn the definition of AI, its origins, and real-life examples like Google, Siri, ChatGPT, and YouTube.",
            href: "/modules/module1/lesson1",
          },
          {
            title: "Lesson 2: Types of AI",
            desc: "Understand Narrow vs. General AI, reactive systems, limited memory, theory of mind, and self-aware AI.",
            href: "/modules/module1/lesson2",
          },
          {
            title: "Lesson 3: Machine Learning Explained",
            desc: "How machines learn from data using ML. Examples: spam filters, translation, and face recognition.",
            href: "/modules/module1/lesson3",
          },
          {
            title: "Lesson 4: Deep Learning & Neural Networks",
            desc: "Discover how neural networks simulate the brain and power modern AI systems.",
            href: "/modules/module1/lesson4",
          },
          {
            title: "Lesson 5: Common AI Tools",
            desc: "Explore tools like ChatGPT, Gemini, Midjourney, DALL·E, Canva AI, Copilot, and more.",
            href: "/modules/module1/lesson5",
          },
          {
            title: "Lesson 6: AI in Daily Life",
            desc: "How AI supports education, healthcare, banking, entertainment (TikTok, Netflix), and more.",
            href: "/modules/module1/lesson6",
          },
          {
            title: "Lesson 7: Benefits & Risks of AI",
            desc: "Learn about productivity, safety, bias, privacy issues, and responsible AI use.",
            href: "/modules/module1/lesson7",
          },
          {
            title: "Lesson 8: Future of AI",
            desc: "Discover AI careers, skills needed, opportunities for women, and ethical considerations.",
            href: "/modules/module1/lesson8",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl  hover:-translate-y-1 ">
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
          className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 
            text-white font-bold rounded-full shadow-md hover:shadow-xl 
            hover:scale-105 transition"
        >
          Back to Modules
        </Link>
      </div>
    </div>
  );
}
