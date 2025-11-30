"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module6Lesson5() {
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
          Lesson 5: AI for Business Insights & Decision-Making
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI helps businesses understand customer behavior, find new opportunities, and make smarter decisions using automated insights and reports.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Identifying Business Opportunities Using Data
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI can analyze large amounts of data to uncover new opportunities for growth.
          It examines patterns, customer needs, and market gaps to help businesses make strategic decisions.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Finding products or services customers want more of</li>
          <li>Identifying areas where your business can expand</li>
          <li>Understanding which marketing campaigns work best</li>
          <li>Spotting inefficiencies or high-cost areas</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Analyzing Customer Behavior
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          AI helps businesses understand how customers behave across websites, apps, and social media.
          This enables better customer experiences and improved sales strategies.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Which products customers check most often</p>
          <p>✔ What time customers are most active</p>
          <p>✔ Why some customers leave or abandon carts</p>
          <p>✔ Which features customers enjoy the most</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. AI-Generated Reports & Summaries
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          AI tools can turn raw data into easy-to-read reports, saving hours of manual work.
          These reports highlight important insights automatically.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
          <li><strong>Summary reports:</strong> What happened this week or month?</li>
          <li><strong>Performance insights:</strong> Which products performed best?</li>
          <li><strong>Customer insights:</strong> Who are your most valuable customers?</li>
          <li><strong>Automated dashboards:</strong> Real-time business performance tracking</li>
        </ul>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Making Recommendations Based on Insights
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          AI doesn't just analyze data — it gives recommendations to help you make better decisions.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Which products to restock or discontinue</li>
          <li>Where to invest more marketing budget</li>
          <li>How to improve customer satisfaction</li>
          <li>New market trends to follow</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          These insights help businesses take action quickly and confidently.
        </p>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - AI helps businesses find new opportunities through data.<br />
            - Customer behavior analysis leads to better marketing and product decisions.<br />
            - AI-generated reports save time and provide clear insights.<br />
            - AI recommendations guide smart business strategy and growth.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module6/lesson6"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 6 →
        </Link>
      </div>
    </div>
  );
}
