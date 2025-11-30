"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module6Lesson1() {
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
          Lesson 1: Introduction to AI in Data Analysis
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI helps businesses analyze data, predict trends, and make smarter decisions using tools like ChatGPT, Sheets AI, Excel AI, and Tableau AI.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. What Is Data Analysis?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Data analysis</strong> means collecting, organizing, and understanding data so businesses can make informed decisions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          It answers important questions such as:<br />
          • What are our best-selling products?<br />
          • Why are customers leaving?<br />
          • What will happen next month?
        </p>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. How AI Helps in Data Analysis
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ AI processes large amounts of data faster than humans.</p>
          <p>✔ AI discovers hidden patterns and trends.</p>
          <p>✔ AI makes predictions like sales forecasting and customer behavior.</p>
          <p>✔ AI automates data cleaning, sorting, and reporting.</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Common AI Tools for Data Analysis
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-900">🤖 ChatGPT</h4>
            <p>
              Helps analyze data, explain insights, generate formulas, and create business reports instantly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📊 Sheets AI / Excel AI</h4>
            <p>
              Automatically creates charts, cleans data, builds formulas, and summarizes data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📈 Tableau AI</h4>
            <p>
              Creates dashboards and visualizations, helping companies understand trends and patterns.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
          4. Real Business Examples
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>📉 <strong>Sales Forecasting:</strong> Predicting next month’s sales and revenue.</p>
          <p>🛍️ <strong>Customer Insights:</strong> Understanding why customers buy or leave.</p>
          <p>📈 <strong>Market Trends:</strong> Identifying fast-growing products and industries.</p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - Data analysis helps businesses understand the past and predict the future. <br />
            - AI makes data analysis faster, smarter, and more accurate. <br />
            - Tools like ChatGPT, Excel AI, and Tableau AI simplify complex data tasks. <br />
            - AI is used for sales forecasting, customer behavior, and market trends.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module6/lesson2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </div>
  );
}
