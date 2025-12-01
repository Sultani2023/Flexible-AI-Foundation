'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileDown } from "lucide-react";

export default function AllModulesPDFPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const modules = [
    {
      title: "Module 1 – Introduction to AI",
      files: [
        { name: "What is AI?", file: "/Module1_Overview.pdf" },
        { name: "AI vs ML vs DL", file: "Module1_Overview.pdf" },
      ],
    },
    {
      title: "Module 2 – Programming Basics",
      files: [
        { name: "Python Basics", file: "/Module2_Overview.pdf" },
        { name: "Data Types & Logic", file: "/Module2_Overview.pdf" },
      ],
    },
    {
      title: "Module 3 – Data & Machine Learning",
      files: [
        { name: "Data Preprocessing", file: "/Flexible_AI_Foundation_Mini_Projects.pdf" },
        { name: "Machine Learning Intro", file: "/Flexible_AI_Foundation_Mini_Projects.pdf" },
      ],
    },
    {
      title: "Module 4 – Applied AI Tools",
      files: [
        { name: "Using AI Tools", file: "/Module_Overview.pdf" },
        { name: "Prompt Engineering", file: "/Module_Overview.pdf" },
      ],
    },
    {
      title: "Module 5 – Mini Projects",
      files: [
        { name: "Beginner AI Projects", file: "/Module_Overview.pdf" },
        { name: "Intermediate Projects", file: "/Module_Overview.pdf" },
      ],
    },
    {
      title: "Module 6 – Deep Learning",
      files: [
        { name: "Deep Learning Overview", file: "/Module_Overview.pdf" },
        { name: "Neural Networks", file: "/Module_Overview.pdf" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 pb-24">

      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          📘 Download AI Fellowship Modules (1–6)
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          All learning materials, organized by module for easy access.
        </p>
      </section>

      {/* Modules Grid */}
      <section className="px-4 max-w-6xl mx-auto grid gap-10">
        {modules.map((module, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {module.title}
            </h2>

            <div className="space-y-4">
              {module.files.map((pdf, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-lg text-gray-700">{pdf.name}</span>

                  <Link
                    href={pdf.file}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition"
                  >
                    <FileDown size={18} />
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Box */}
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
