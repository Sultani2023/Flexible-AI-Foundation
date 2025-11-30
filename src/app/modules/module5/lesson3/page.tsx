"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module5Lesson3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

      {/* BACK BUTTON */}
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
          Lesson 3: Building Apps Without Coding
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how to create mobile and web apps using no-code tools like Glide, Adalo, and AppSheet—
          even if you have never written a single line of code.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. No-Code App Builders
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          No-code app platforms allow anyone to build mobile apps and web apps visually.  
          These tools offer templates, drag-and-drop components, and ready-made features like login,
          forms, lists, and dashboards.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p><strong>• Glide:</strong> Build apps using Google Sheets or Airtable as your database. Perfect for CRM, dashboards, and small business tools.</p>
          <p><strong>• Adalo:</strong> A more advanced app builder with custom screens, navigation, and logic for mobile apps.</p>
          <p><strong>• AppSheet:</strong> A Google tool that builds apps from spreadsheets—great for business workflows.</p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. How Apps Store Information (Databases)
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Every app needs a place to store user data such as profiles, messages, tasks, bookings, or inventory.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Glide uses Google Sheets or Airtable as your database.</p>
          <p>✔ Adalo uses its own built-in database.</p>
          <p>✔ AppSheet uses spreadsheets or Google Cloud databases.</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          The database automatically updates when users submit forms, edit pages, or interact with your app.
          You don’t need SQL or backend programming—everything syncs instantly.
        </p>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Adding User Login, Dashboards & Workflows
        </h3>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-900">🔐 User Login</h4>
            <p>
              Most no-code platforms allow users to sign in using email, Google, or phone number.
              This lets you show personalized content to each person.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📊 Dashboards</h4>
            <p>
              Dashboards display information from your database—like totals, charts, tables, or lists.
              Perfect for business apps.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">⚙️ Workflows</h4>
            <p>
              Workflows let you automate actions such as:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Send notifications</li>
              <li>Update a database row</li>
              <li>Show a confirmation message</li>
              <li>Move users to a new screen</li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
          4. Publishing Your App
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Once your app is ready, you can publish it:
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>• <strong>Web App:</strong> Publish instantly with a shareable link.</p>
          <p>• <strong>Mobile App:</strong> Some builders allow publishing to iOS and Android app stores.</p>
          <p>• <strong>PWA (Progressive Web App):</strong> Users install it on their phone like a real app.</p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - No-code tools like Glide, Adalo, and AppSheet let you build apps visually. <br />
            - Apps use spreadsheets or built-in databases to store information. <br />
            - Add login, dashboards, and workflows without coding. <br />
            - Publish your app on the web or mobile app stores easily.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module5/lesson4"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 4 →
        </Link>
      </div>
    </div>
  );
}
