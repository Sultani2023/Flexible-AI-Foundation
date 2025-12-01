"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function AIFundamentalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 via-orange-100 to-yellow-100 py-14 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back 
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
          🤖 AI Fundamentals
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn the basics of artificial intelligence and machine learning 
          with simple, beginner-friendly lessons designed for real-world learners.
        </p>
        <p className="mt-2 text-gray-500 font-medium">
          Duration: 45 min | Level: Beginner
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: Introduction to AI",
            desc: "Understand what artificial intelligence is and how it is shaping our world.",
            href: "/modules/ai-fundamentals/lesson1",
          },
          {
            title: "Lesson 2: Basics of Machine Learning",
            desc: "Learn how machines learn from data and make predictions.",
            href: "/modules/ai-fundamentals/lesson2",
          },
          {
            title: "Lesson 3: Neural Networks Overview",
            desc: "Discover how neural networks simulate the human brain to solve complex problems.",
            href: "/modules/ai-fundamentals/lesson3",
          },
          {
            title: "Lesson 4: Popular AI Tools",
            desc: "Explore tools like ChatGPT, MidJourney, DALL·E, and others for practical AI applications.",
            href: "/modules/ai-fundamentals/lesson4",
          },
          {
            title: "Lesson 5: AI in Everyday Life",
            desc: "Learn how AI is used in healthcare, education, entertainment, and more.",
            href: "/modules/ai-fundamentals/lesson5",
          },
          {
            title: "Lesson 6: Benefits & Risks",
            desc: "Explore the advantages of AI, potential risks, and responsible usage.",
            href: "/modules/ai-fundamentals/lesson6",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1">
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
      <div className="max-w-3xl mx-auto mt-24 text-center">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-10 rounded-3xl shadow-xl text-white">
          <h2 className="text-3xl font-extrabold mb-3">Need More Resources?</h2>
          <p className="text-lg opacity-90 mb-6">
            Keep learning and exploring the world of AI and technology!
          </p>

          <Link
            href="/"
            className="px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
