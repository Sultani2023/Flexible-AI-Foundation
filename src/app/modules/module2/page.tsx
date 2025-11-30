

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Module2Overview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 via-orange-100 to-yellow-100 py-14 px-6">

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
          ✍️ Module 2: AI Content Creation for Freelance Writing
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn how to use AI tools like ChatGPT, Gemini, and Claude to become a
          professional freelance writer. This module teaches idea generation,
          blog writing, SEO content, editing, copywriting, and building a
          powerful writing portfolio using AI.
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[

          {
            title: "Lesson 1: Introduction to AI Content Creation",
            desc: "What AI content creation means, how it helps freelance writers, and how tools like ChatGPT, Gemini & Claude support writing.",
            href: "/modules/module2/lesson1",
          },
          {
            title: "Lesson 2: How to Use AI for Idea Generation",
            desc: "Learn to create blog ideas, outlines, headlines, and research faster using AI.",
            href: "/modules/module2/lesson2",
          },
          {
            title: "Lesson 3: Writing Articles & Blog Posts with AI",
            desc: "Use AI to create drafts, improve structure, add examples, and keep content human—not robotic.",
            href: "/modules/module2/lesson3",
          },
          {
            title: "Lesson 4: AI Tools for Copywriting",
            desc: "Write social media captions, product descriptions, ad copy, and improve CTAs using AI.",
            href: "/modules/module2/lesson4",
          },
          {
            title: "Lesson 5: Editing & Proofreading With AI",
            desc: "Fix grammar, adjust tone, improve clarity, and make writing smoother with AI editors.",
            href: "/modules/module2/lesson5",
          },
          {
            title: "Lesson 6: SEO Writing with AI",
            desc: "Understand keywords, write SEO-friendly blogs, create meta descriptions, and optimize for Google ranking.",
            href: "/modules/module2/lesson6",
          },
          {
            title: "Lesson 7: Avoiding AI Detection & Plagiarism",
            desc: "Learn why detection happens, how to humanize AI text, fact-check, and avoid plagiarism issues.",
            href: "/modules/module2/lesson7",
          },
          {
            title: "Lesson 8: Building a Freelance Writing Portfolio Using AI",
            desc: "Create writing samples, design a portfolio, prepare proposals, and respond to clients using AI.",
            href: "/modules/module2/lesson8",
          },
          {
            title: "Lesson 9: Best AI Tools for Freelance Writers",
            desc: "Explore tools like ChatGPT, Grammarly, Jasper, Notion AI, Quillbot, and Canva Docs AI.",
            href: "/modules/module2/lesson9",
          }

        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl  ">
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
