"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Module5Overview() {
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
          🌐 Module 5: No-Code Website & App Building
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn how to build websites, mobile apps, automations, and workflows
          — all without writing a single line of code. Perfect for beginners,
          freelancers, and future creators.
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: Introduction to No-Code Development",
            desc: "Understand what no-code means and explore popular platforms like Webflow, Bubble, Glide, and Notion.",
            href: "/modules/module5/lesson1",
          },
          {
            title: "Lesson 2: Website Building With No-Code Tools",
            desc: "Learn how to design pages, customize layouts, use templates, and add forms without coding.",
            href: "/modules/module5/lesson2",
          },
          {
            title: "Lesson 3: Building Apps Without Coding",
            desc: "Create mobile apps using Glide, Adalo, or AppSheet with databases, dashboards, and workflows.",
            href: "/modules/module5/lesson3",
          },
          {
            title: "Lesson 4: Automations & Workflows With AI",
            desc: "Connect apps using Zapier/Make, automate tasks, send emails, and use AI-powered responses.",
            href: "/modules/module5/lesson4",
          },
          {
            title: "Lesson 5: Design Principles for No-Code Creators",
            desc: "Master colors, layout, typography, and mobile-first design with AI-powered visuals.",
            href: "/modules/module5/lesson5",
          },
          {
            title: "Lesson 6: Launching & Managing No-Code Projects",
            desc: "Publish sites, deploy apps, add domains, improve SEO, test performance, and manage updates.",
            href: "/modules/module5/lesson6",
          },
          {
            title: "Lesson 7: Freelancing & Earning With No-Code",
            desc: "Start offering services, pricing your work, speeding up delivery with AI, and building a portfolio.",
            href: "/modules/module5/lesson7",
          },
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:border-red-300 hover:-translate-y-1">

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
