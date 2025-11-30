"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import Link from "next/link";

export default function AILMLandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  const aiSections = [
    {
      id: 1,
      title: "Section 1: Introduction to AI & ML",
      points: [
        "What is Artificial Intelligence (AI) & what is Machine Learning (ML)",
        "Difference between AI, ML, and Deep Learning",
        "Real world applications and relevance of AI/ML",
      ],
      video: "https://www.youtube.com/embed/r67SfaiYaDI",
    },
    {
      id: 2,
      title: "Section 2: Foundational Tools — Programming & Data Handling",
      points: [
        "Getting started with Python",
        "Data handling basics using NumPy and Pandas",
        "Data analysis basics: exploring, visualizing, cleaning data",
      ],
      video: "https://www.youtube.com/embed/1fcfZ_Ne8ok",
    },
    {
      id: 3,
      title: "Section 3: Data Preprocessing & Preparation",
      points: [
        "Cleaning data & handling missing values",
        "Encoding categorical data",
        "Train-test split & feature scaling",
      ],
      video: "https://www.youtube.com/embed/u1RC48sQtrk",
    },
    {
      id: 4,
      title: "Section 4: Core Machine Learning Algorithms",
      points: [
        "Supervised learning",
        "Unsupervised learning",
        "Model evaluation & avoiding overfitting",
      ],
      video: "https://www.youtube.com/embed/JxgmHe2NyeY",
    },
    {
      id: 5,
      title: "Section 5: Practical Projects / Hands-on ML",
      points: [
        "Build small ML projects",
        "Full pipeline: data → preprocessing → training → evaluation",
      ],
      video: "https://www.youtube.com/embed/7eh4d6sabA0",
    },
    {
      id: 6,
      title: "Section 6: Deep Learning & Advanced AI Topics",
      points: ["Neural networks basics", "Computer vision & NLP"],
      video: "https://www.youtube.com/embed/VyWAvY2CF9c",
    },
    {
      id: 7,
      title: "Section 7: Ethics, Deployment & Real Applications",
      points: [
        "Data quality, fairness and bias",
        "Responsible AI usage",
        "Intro to ML deployment",
      ],
      video: "https://www.youtube.com/embed/kaI20cdbMjo",
    },
  ];

  return (
    <div className="min-h-screen bg-background bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50  pb-16">
      {/* Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          🤖 AI & Machine Learning Full Roadmap
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Explore each section step-by-step with explanations + video tutorials
          you can watch directly on the page.
        </p>
      </section>

      {/* Roadmap Sections */}
      <section className="px-4 max-w-7xl mx-auto grid gap-8">
        {aiSections.map((sec) => (
          <div
            key={sec.id}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sec.title}
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              {sec.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            {/* Play Button */}
            <button
              onClick={() => setSelectedVideo(sec.video)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:shadow-lg transition"
            >
              Watch Video <Play size={20} />
            </button>
          </div>
        ))}
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            >
              <X size={24} />
            </button>

            <iframe
              src={selectedVideo}
              className="w-full h-[400px]"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      )}
        <div className="max-w-3xl mx-auto mt-24 text-center">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-10 rounded-3xl shadow-xl text-white">
                    <h2 className="text-3xl font-extrabold mb-3">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-lg opacity-90 mb-6">
                        Join thousands of women learning AI, tech, and digital skills today.
                    </p>

                    <Link
                        href="/"
                        className="px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
    </div>
  );
}
