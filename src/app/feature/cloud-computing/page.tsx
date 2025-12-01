"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function CloudComputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-100 to-indigo-100 py-14 px-6">

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
          ☁️ Cloud Computing Essentials
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Learn how modern cloud platforms work, why companies use them, and how
          you can build, deploy, and scale applications through the cloud.
        </p>
        <p className="mt-2 text-gray-600 font-medium">
          Duration: 50 min | Level: Beginner – Intermediate
        </p>
      </div>

      {/* LESSON GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">

        {[
          {
            title: "Lesson 1: What is Cloud Computing?",
            desc: "Understand the basics of cloud technology and how it changed the world of computing.",
            href: "/modules/cloud-computing/lesson1",
          },
          {
            title: "Lesson 2: Cloud Service Models (IaaS, PaaS, SaaS)",
            desc: "Learn the three core models used by all cloud platforms.",
            href: "/modules/cloud-computing/lesson2",
          },
          {
            title: "Lesson 3: Cloud Deployment Models",
            desc: "Explore public, private, hybrid, and multi-cloud environments.",
            href: "/modules/cloud-computing/lesson3",
          },
          {
            title: "Lesson 4: Major Cloud Providers",
            desc: "Overview of AWS, Google Cloud, Azure, Alibaba Cloud, and more.",
            href: "/modules/cloud-computing/lesson4",
          },
          {
            title: "Lesson 5: Cloud Storage & Databases",
            desc: "Learn how cloud providers store, secure, and manage data globally.",
            href: "/modules/cloud-computing/lesson5",
          },
          {
            title: "Lesson 6: Cloud Security Basics",
            desc: "Understand shared responsibility, identity control, and cloud protection.",
            href: "/modules/cloud-computing/lesson6",
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
