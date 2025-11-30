"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module6Lesson4() {
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
          Lesson 4: Predictive Analysis & Forecasting
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI predicts future trends, sales, and business outcomes using forecasting tools in Excel, Sheets, and advanced AI models.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. What Is Predictive Analytics?
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Predictive analytics</strong> uses past data to forecast what will happen in the future.
          AI studies historical patterns and makes smart predictions based on trends, behaviors, and numbers.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Examples of predictive analytics include:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Predicting next month’s sales</li>
          <li>Forecasting customer demand</li>
          <li>Estimating product performance</li>
          <li>Identifying future risks or opportunities</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Using AI for Sales Predictions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI tools can study your data and generate accurate sales forecasts. This helps businesses plan inventory, marketing strategies, and financial goals.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ AI identifies peak sales months.</p>
          <p>✔ AI discovers seasonal trends.</p>
          <p>✔ AI predicts customer buying behavior.</p>
          <p>✔ AI estimates future revenue based on past patterns.</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Trend Analysis & Future Planning
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Trend analysis helps businesses understand long-term direction and plan ahead.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
          <li><strong>Upward trends:</strong> Products growing in popularity</li>
          <li><strong>Downward trends:</strong> Items losing customer interest</li>
          <li><strong>Seasonal patterns:</strong> Holidays, weather seasons, annual cycles</li>
          <li><strong>Sudden spikes:</strong> Viral products or unexpected demand</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI highlights these patterns automatically, helping you make smarter business decisions.
        </p>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Using AI Forecasting Tools in Excel & Google Sheets
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Modern spreadsheet tools include built-in AI forecasting features.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Excel’s <strong>Forecast Sheet</strong> predicts future values automatically</li>
          <li>Google Sheets uses AI-powered <strong>trendlines</strong> and <strong>FORECAST formulas</strong></li>
          <li>AI models detect seasonality, patterns, and outliers</li>
          <li>Charts are created automatically to visualize predictions</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          You simply select your data — the AI does the forecasting for you.
        </p>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - Predictive analytics uses past data to forecast the future.<br />
            - AI predicts sales, customer demand, and revenue trends.<br />
            - Trend analysis helps with long-term planning and strategy.<br />
            - Excel and Sheets provide easy AI-powered forecasting tools for beginners.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module6/lesson5"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 5 →
        </Link>
      </div>
    </div>
  );
}
