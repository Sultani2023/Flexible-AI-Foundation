"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Module4Overview() {
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
          🎬 Module 4: AI Video Creation & Editing
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn how to create, edit, and enhance videos using powerful AI tools used by modern
          YouTubers, TikTokers, and content creators. Perfect for beginners and digital creators.
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: Introduction to AI Video Creation",
            desc: "What AI video tools can do and how AI is changing YouTube, TikTok, and Instagram content.",
            href: "/modules/module4/lesson1",
          },
          {
            title: "Lesson 2: Scriptwriting With AI",
            desc: "Generate video scripts, hooks, storylines, and edit them for clarity and style.",
            href: "/modules/module4/lesson2",
          },
          {
            title: "Lesson 3: Creating Videos from Text",
            desc: "Use tools like Pika Labs, Runway ML, and Synthesia to turn prompts into videos.",
            href: "/modules/module4/lesson3",
          },
          {
            title: "Lesson 4: AI Editing Tools for Creators",
            desc: "Auto-editing, text-based editing, subtitles, noise removal, and smart color grading.",
            href: "/modules/module4/lesson4",
          },
          {
            title: "Lesson 5: Creating Shorts & Reels with AI",
            desc: "Turn long videos into viral short clips with trending captions and auto-formatting.",
            href: "/modules/module4/lesson5",
          },
          {
            title: "Lesson 6: AI Animation & Motion Graphics",
            desc: "Generate animations, characters, and motion graphics using AI tools.",
            href: "/modules/module4/lesson6",
          },
          {
            title: "Lesson 7: Enhancing Videos With AI Effects",
            desc: "Background removal, stabilization, green screen AI, filters, and visual effects.",
            href: "/modules/module4/lesson7",
          },
          {
            title: "Lesson 8: AI Voiceover & Audio Tools",
            desc: "Turn scripts into voiceovers, clone voices, remove noise, and enhance audio.",
            href: "/modules/module4/lesson8",
          },
          {
            title: "Lesson 9: Ethical Use of AI in Video Production",
            desc: "Deepfake risks, responsible use, and when creators must disclose AI involvement.",
            href: "/modules/module4/lesson9",
          },
          {
            title: "Lesson 10: AI-Powered Content Creator Workflow",
            desc: "Plan, script, film, edit, optimize, and automate your entire content workflow with AI.",
            href: "/modules/module4/lesson10",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:border-red-300 hover:-translate-y-1 ">
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
