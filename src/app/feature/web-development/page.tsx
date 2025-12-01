"use client";

import Link from "next/link";
import { ArrowLeft, Code } from "lucide-react";

export default function WebDevelopmentEssentialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-teal-100 to-blue-100 py-14 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
          🌐 Web Development Essentials
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn how websites are built from scratch — HTML, CSS, JavaScript,
          responsive layouts, and everything you need to start as a modern web developer.
        </p>
        <p className="mt-2 text-gray-600 font-medium">
          Duration: 70 min | Level: Beginner – Intermediate
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: Introduction to Web Development",
            desc: "Understand what web development is and how the internet works.",
            href: "/modules/web-development/lesson1",
          },
          {
            title: "Lesson 2: HTML Basics",
            desc: "Learn the structure of web pages using HTML tags and elements.",
            href: "/modules/web-development/lesson2",
          },
          {
            title: "Lesson 3: CSS & Styling Websites",
            desc: "Discover how to style pages, use colors, fonts, spacing, and layouts.",
            href: "/modules/web-development/lesson3",
          },
          {
            title: "Lesson 4: JavaScript Fundamentals",
            desc: "Make your website interactive using variables, functions, and events.",
            href: "/modules/web-development/lesson4",
          },
          {
            title: "Lesson 5: Responsive Web Design",
            desc: "Learn how to make your website look great on mobile, tablet, and desktop.",
            href: "/modules/web-development/lesson5",
          },
          {
            title: "Lesson 6: Building Your First Website",
            desc: "Put everything together and build a full beginner-friendly webpage.",
            href: "/modules/web-development/lesson6",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                <Code className="text-green-600" />
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
