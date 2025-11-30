"use client";

import React, { useState } from "react";
import { Play, Download, X } from "lucide-react";
import Link from "next/link";

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Session 1: AI Fundamentals",
      googleId: "1QcpyMzXwfy3vtxYCf6i5h9-vtHQvQW6q",
      description: "A beginner-friendly introduction to AI and machine learning.",
    },
    {
      id: 2,
      title: "Session 2: Machine Learning Basics",
      googleId: "1--Ix1KAre6BfTTyLYZXnlvaRFh7cpGH7",
      description: "Learn core ML concepts with examples.",
    },
    {
      id: 3,
      title: "Session 3: Deep Learning Foundations",
      googleId: "1uMqN9w0zhJrFjIcLsDofM2qlNZaiQu-K",
      description: "Start understanding neural networks in depth.",
    },
    {
      id: 4,
      title: "Session 4: Cloud Computing",
      googleId: "1AYKKCtN-Fq7zN2yT00YzkBAEy3NgvqjO",
      url: "https://www.youtube.com/live/e0GBPAp-j68?si=l1SBK1gCi35EP-AA",
      description: "Deploy and manage applications on cloud platforms.",
    },
    {
      id: 5,
      title: "Session 5: AI & Data Integration",
      googleId: "1xTG4ImXYeToHwi6WN5fOxXEeLrqzcOr3",
      description: "Combine AI and data pipelines for real-world projects.",
    },
    {
      id: 6,
      title: "Session 6: Advanced ML Techniques",
      googleId: "13gRz3TnxIZ-PSYi_9kplBZUAqUq0rFVd",
      description: "Explore deep learning, neural networks, and ML workflows.",
    },
    {
      id: 7,
      title: "Session 7: Real-world AI Applications",
      googleId: "1pd-QNTq2QIoA8lduUy7h5gU-uxu_DeGw",
      description: "See AI solving real business problems.",
    },
    {
      id: 8,
      title: "Session 8: AI Ethics & Governance",
      googleId: "1jQVjpGN8dMpG5nFXTqUOctE8x8m3OxAC",
      description: "Learn responsible AI development and ethics.",
    },
    {
      id: 9,
      title: "Session 9: Capstone Project",
      googleId: "127c9MBhmg7MbbFH3ydz4yJb0OdLFtNIZ",
      description: "Apply all knowledge into a full capstone project.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-green-50 pt-32 pb-20 px-6">

      {/* ------------ HEADER SECTION -------------- */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-3 bg-yellow-100 px-4 py-2 rounded-full mb-6">
          <span className="text-2xl">📹</span>
          <span className="text-sm font-semibold text-yellow-900">Premium Video Tutorials</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Learn With <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">High-Quality Videos</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Watch or download professional tutorial sessions built to upgrade your skills step-by-step.
        </p>
      </div>

      {/* ------------ VIDEO LIST -------------- */}
      <div className="max-w-4xl mx-auto grid gap-8">
        {videos.map((video) => {
          const embedLink = `https://drive.google.com/file/d/${video.googleId}/preview`;
          const downloadLink = `https://drive.google.com/uc?export=download&id=${video.googleId}`;

          return (
            <div
              key={video.id}
              className="group p-6 bg-white rounded-3xl shadow-md border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition">
                    {video.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{video.description}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveVideo(embedLink)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition"
                  >
                    <Play size={18} /> Watch
                  </button>

                  <a
                    href={downloadLink}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 hover:shadow-lg hover:scale-105 transition"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* ------------ VIDEO POPUP PLAYER -------------- */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full relative animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md"
            >
              <X size={20} />
            </button>

            <iframe
              src={activeVideo}
              className="w-full h-[420px] rounded-3xl"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
