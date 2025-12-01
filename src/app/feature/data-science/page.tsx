"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function DataScienceEssentialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100 py-14 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back 
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
          📊 Data Science Essentials
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Master the foundations of data science, analysis, and visualization using
          simple lessons designed for real-world beginners and aspiring data analysts.
        </p>
        <p className="mt-2 text-gray-600 font-medium">
          Duration: 60 min | Level: Beginner – Intermediate
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: What is Data Science?",
            desc: "Understand the world of data science and why it's one of the fastest-growing fields.",
            href: "/modules/data-science-essentials/lesson1",
          },
          {
            title: "Lesson 2: Types of Data",
            desc: "Learn about structured, unstructured, qualitative, and quantitative data.",
            href: "/modules/data-science-essentials/lesson2",
          },
          {
            title: "Lesson 3: Data Collection & Cleaning",
            desc: "Explore how data is gathered, cleaned, and prepared for analysis.",
            href: "/modules/data-science-essentials/lesson3",
          },
          {
            title: "Lesson 4: Exploratory Data Analysis (EDA)",
            desc: "Learn how to discover insights using charts, summaries, and patterns.",
            href: "/modules/data-science-essentials/lesson4",
          },
          {
            title: "Lesson 5: Data Visualization Tools",
            desc: "Overview of Power BI, Tableau, Python, and Google Data Studio for visualization.",
            href: "/modules/data-science-essentials/lesson5",
          },
          {
            title: "Lesson 6: Intro to Machine Learning in Data Science",
            desc: "See how ML is applied to classification, prediction, and clustering.",
            href: "/modules/data-science-essentials/lesson6",
          }
        ].map((lesson, i) => (
          <Link key={i} href={lesson.href} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                <BookOpen className="text-blue-600" />
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
