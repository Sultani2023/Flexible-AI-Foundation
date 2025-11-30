"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module6Lesson3() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">
      
      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module6"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 6: AI-Powered Data Analysis
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 3: Data Visualization With AI
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI tools automatically turn your data into beautiful charts and dashboards,
          helping you understand trends, patterns, and insights clearly.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Creating Charts Automatically
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          AI tools can instantly analyze your data and generate the best chart types, saving you hours of work.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Create charts with one click</li>
          <li>Auto-detect important values and trends</li>
          <li>Recommend the best visualization type</li>
          <li>Highlight key insights automatically</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Popular AI Visualization Tools
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <div>
            <strong>📊 Tableau</strong>
            <p>Creates beautiful dashboards and uses AI to explain patterns and predict outcomes.</p>
          </div>

          <div>
            <strong>📈 Power BI</strong>
            <p>Uses AI insights to highlight trends, relationships, and unusual patterns in your data.</p>
          </div>

          <div>
            <strong>📉 Looker Studio (Google Data Studio)</strong>
            <p>Transforms spreadsheets into dynamic, shareable dashboards with automated charts.</p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Understanding Common Chart Types
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Knowing when to use the right chart helps tell a clear story.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
          <li>
            <strong>Line Chart:</strong> Shows trends over time.
          </li>
          <li>
            <strong>Bar Chart:</strong> Compares different categories.
          </li>
          <li>
            <strong>Pie Chart:</strong> Shows percentage breakdowns.
          </li>
          <li>
            <strong>Scatter Plot:</strong> Shows relationships between two variables.
          </li>
        </ul>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Turning Data Into Visual Insights
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI transforms raw numbers into visuals that tell a story. It can automatically:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Identify trends and patterns</li>
          <li>Highlight important changes</li>
          <li>Explain unusual spikes or drops</li>
          <li>Summarize insights in natural language</li>
        </ul>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - AI makes chart-making fast and effortless.<br />
            - Tools like Tableau, Power BI, and Looker Studio create smart dashboards.<br />
            - Understanding chart types helps you communicate data clearly.<br />
            - AI highlights insights and trends so you can make informed decisions.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module6/lesson4"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 4 →
        </Link>
      </div>
    </div>
  );
}
