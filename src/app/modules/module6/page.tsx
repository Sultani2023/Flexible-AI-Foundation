"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function Module6Overview() {
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
          📊 Module 6: AI-Powered Data Analysis for Business Insights
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn how to use AI tools to analyze data, create visualizations, predict future trends, and automate business reporting — all without being a data scientist.
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: Introduction to AI in Data Analysis",
            desc: "What data analysis means, how AI improves decisions, and examples like forecasting, market trends, and customer insights.",
            href: "/modules/module6/lesson1",
          },
          {
            title: "Lesson 2: Working With Data Using AI Tools",
            desc: "Learn how to import, clean, organize, and prepare data using AI tools like Excel AI and ChatGPT.",
            href: "/modules/module6/lesson2",
          },
          {
            title: "Lesson 3: Data Visualization With AI",
            desc: "Create charts automatically using AI tools like Tableau, Power BI, and Looker Studio.",
            href: "/modules/module6/lesson3",
          },
          {
            title: "Lesson 4: Predictive Analysis & Forecasting",
            desc: "Use AI for predicting sales, analyzing trends, and planning for the future using Excel & Sheets forecasting.",
            href: "/modules/module6/lesson4",
          },
          {
            title: "Lesson 5: AI for Business Insights & Decision-Making",
            desc: "Analyze customer behavior, discover opportunities, and generate full business reports using AI.",
            href: "/modules/module6/lesson5",
          },
          {
            title: "Lesson 6: Automating Business Tasks With AI",
            desc: "Automate reports, dashboards, and workflows using tools like Zapier, Make, and AI summaries.",
            href: "/modules/module6/lesson6",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="
             bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:border-red-300 hover:-translate-y-1">
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
