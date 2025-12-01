'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MiniProjectDashboardPage() {
  const [widgets, setWidgets] = useState([
    { id: 1, name: 'Sales', value: '$12,450' },
    { id: 2, name: 'Users', value: '1,245' },
    { id: 3, name: 'Revenue', value: '$8,300' },
    { id: 4, name: 'Orders', value: '320' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-100 to-red-100 py-12 px-6">

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link href="/">
          <button className="flex items-center gap-2 text-orange-700 hover:underline">
            <ArrowLeft size={20} />
            Back
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-12">

        {/* ---------------------------------------------------
           PART 1 — PROJECT OVERVIEW
        ------------------------------------------------------ */}
        <section>
          <h1 className="text-3xl font-bold text-orange-700 mb-4">
            Mini Project: Build a Dashboard 📊
          </h1>

          <p className="text-gray-700 mb-6">
            Learn how to create an interactive dashboard using React. This project teaches data display, card components, and responsive design.
          </p>

          <h2 className="text-xl font-semibold text-orange-600 mb-2">📺 Watch: Build a Dashboard</h2>
          <div className="w-full h-0 pb-[56.25%] relative rounded-xl overflow-hidden shadow-lg mb-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VIFyXj31iYE"
              title="Build a React Dashboard"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-xl font-semibold text-orange-600 mb-2">📌 What You Will Learn</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>How to structure a React dashboard</li>
            <li>How to create reusable card components</li>
            <li>How to display dynamic data in widgets</li>
            <li>Basic styling using Tailwind CSS</li>
          </ul>

          <h2 className="text-xl font-semibold text-orange-600 mt-6 mb-2">🛠 Tools Used</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>React (Next.js)</li>
            <li>useState for managing widget data</li>
            <li>Tailwind CSS for styling</li>
          </ul>

          <a href="#dashboard-demo">
            <button className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-md">
              Start Project 🚀
            </button>
          </a>
        </section>

        <hr className="border-orange-300" />

        {/* ---------------------------------------------------
           PART 2 — DASHBOARD DEMO
        ------------------------------------------------------ */}
        <section id="dashboard-demo">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🔥 Dashboard Demo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {widgets.map(widget => (
              <div
                key={widget.id}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center"
              >
                <h3 className="text-lg font-semibold mb-2">{widget.name}</h3>
                <p className="text-2xl font-bold">{widget.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-700 text-center">
            This is a simple dashboard demo. You can expand it with charts, tables, and dynamic data from APIs.
          </p>
        </section>

      </div>
    </div>
  );
}
