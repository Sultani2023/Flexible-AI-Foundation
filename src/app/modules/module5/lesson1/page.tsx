"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module5Lesson1() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">
      
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module5"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 5: No-Code Website & App Building
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 1: Introduction to No-Code Development
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn what “no-code” means, how beginners can build apps without programming, and the most popular platforms used today.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. What Does “No-Code” Mean?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>No-code development</strong> allows you to build websites, apps, and workflows 
          <strong>without writing any programming code.</strong>  
          Instead of typing code, you use drag-and-drop tools, visual editors, and templates.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          No-code tools make it possible for beginners, freelancers, and entrepreneurs to create digital products quickly and affordably.
        </p>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. How No-Code Tools Empower Beginners
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Build websites and apps without learning HTML, CSS, or JavaScript.</p>
          <p>✔ Create prototypes and business ideas in minutes instead of months.</p>
          <p>✔ Reduce development cost — no need to hire expensive developers.</p>
          <p>✔ Automate tasks and workflows with simple, visual tools.</p>
          <p>✔ Focus on creativity and design instead of coding errors.</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Websites vs. Web Apps vs. Mobile Apps
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-900">🌐 Websites</h4>
            <p>
              Informational pages like portfolios, blogs, business sites, and landing pages.  
              Examples: About page, services page, contact form.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🖥️ Web Apps</h4>
            <p>
              Interactive tools where users can sign in, create data, or perform tasks.  
              Examples: dashboards, calculators, booking systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📱 Mobile Apps</h4>
            <p>
              Apps that run on phones with features like push notifications, maps, and offline use.  
              No-code tools let you build these without coding.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
          4. Popular No-Code Platforms
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p><strong>• Wix:</strong> Easiest drag-and-drop website builder.</p>
          <p><strong>• Webflow:</strong> Professional, highly customizable websites.</p>
          <p><strong>• Bubble:</strong> Build full web apps with user login and workflows.</p>
          <p><strong>• Glide:</strong> Create mobile and web apps using spreadsheets.</p>
          <p><strong>• Notion:</strong> Build internal tools, dashboards, and simple sites.</p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - No-code lets anyone build apps without programming. <br />
            - It empowers beginners to create websites, apps, and workflows easily. <br />
            - Understand the difference between websites, web apps, and mobile apps. <br />
            - Popular platforms include Wix, Webflow, Bubble, Glide, and Notion.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module5/lesson2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </div>
  );
}
