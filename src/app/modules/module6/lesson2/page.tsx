"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module6Lesson2() {
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
          Lesson 2: Working With Data Using AI Tools
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how AI can clean your data, find errors, organize spreadsheets, and
          generate Excel formulas automatically to speed up your workflow.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Importing and Cleaning Data
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Before analysis begins, data must be organized and cleaned. AI tools help you:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Remove duplicates</li>
          <li>Fix formatting issues</li>
          <li>Correct spelling or inconsistent values</li>
          <li>Identify incomplete or missing entries</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Using AI to Identify Missing or Incorrect Data
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Detect wrong dates, invalid numbers, or formatting errors.</p>
          <p>✔ Highlight missing values that must be filled.</p>
          <p>✔ Suggest replacements or corrections automatically.</p>
          <p>✔ Provide recommendations to improve data quality.</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Organizing Spreadsheets for Analysis
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          A clean spreadsheet makes analysis easier. AI can automatically:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Sort large datasets</li>
          <li>Group similar values</li>
          <li>Create categories or tags</li>
          <li>Suggest pivot tables or charts</li>
        </ul>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Using ChatGPT or Excel AI to Generate Formulas
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Instead of memorizing complicated formulas, you can ask AI to create them for you.  
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p><strong>Examples:</strong></p>
          <p>• “Create a formula to calculate total sales for each product.”</p>
          <p>• “Give me a formula to remove spaces from text.”</p>
          <p>• “Write a formula to find duplicate emails.”</p>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - AI helps clean and prepare data quickly.<br />
            - It identifies missing, incorrect, or inconsistent information.<br />
            - AI organizes spreadsheets into a readable structure.<br />
            - ChatGPT and Excel AI generate formulas instantly, saving time and reducing errors.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module6/lesson3"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 3 →
        </Link>
      </div>
    </div>
  );
}
