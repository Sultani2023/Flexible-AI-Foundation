"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

        <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module1"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>


      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 1: Introduction to AI
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 3: Machine Learning Explained
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Machine Learning (ML) is one of the most powerful branches of AI. 
          In this lesson, you will learn what ML is, how machines learn from data, 
          and where ML is used in real life.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: What is ML */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. What Is Machine Learning?
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Machine Learning is a branch of Artificial Intelligence where computers 
            learn patterns from data — **without being directly programmed** for every task.
          </p>

          <p>
            Instead of giving the computer step-by-step instructions, we give it 
            examples, and it learns how to make predictions or decisions.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              📌 **Simple definition:**  
              Machine Learning = teaching a computer to learn from experience (data).
            </p>
          </div>
        </div>

        {/* SECTION 2: How machines learn */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. How Do Machines Learn From Data?
        </h3>

        <div className="space-y-6 mb-10 text-gray-700 leading-relaxed">
          <p>
            Machines learn through **training**, similar to how humans learn from practice.  
            The process usually includes:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>1. Input Data:</strong> Images, text, audio, numbers, or examples.
            </li>
            <li>
              <strong>2. Training:</strong> The model looks for patterns in the data.
            </li>
            <li>
              <strong>3. Prediction:</strong> It tries to guess or decide something new.
            </li>
            <li>
              <strong>4. Feedback:</strong> It learns from mistakes and improves.
            </li>
          </ul>

          <p>
            The more data the system sees, the **better its predictions become**.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              Show a machine 10,000 cat pictures → it learns patterns →  
              then it can recognize a new cat photo it has never seen before.
            </p>
          </div>
        </div>

        {/* SECTION 3: Real-life examples */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Real-Life Examples of Machine Learning
        </h3>

        <p className="text-gray-700 mb-6">
          Machine Learning is everywhere around us. Here are some powerful examples:
        </p>

        {/* Example 1 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">📧 Spam Email Filters</h4>
          <p className="text-gray-700 leading-relaxed">
            Gmail learns which emails are spam by analyzing millions of messages.  
            It looks at patterns such as suspicious words, senders, and history.  
            The system becomes better over time.
          </p>
        </div>

        {/* Example 2 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">🌍 Language Translation</h4>
          <p className="text-gray-700 leading-relaxed">
            Tools like Google Translate use ML to understand languages.  
            They learn from massive amounts of text across websites, books, and documents 
            to accurately translate sentences.
          </p>
        </div>

        {/* Example 3 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">🙂 Face Recognition</h4>
          <p className="text-gray-700 leading-relaxed">
            Your phone uses ML to detect your face by analyzing shapes, angles, 
            and key facial features.  
            It improves every time you unlock your phone.
          </p>
        </div>

        {/* Example 4 */}
        <div className="mb-10">
          <h4 className="font-semibold text-gray-900">🎵 TikTok & YouTube Recommendations</h4>
          <p className="text-gray-700 leading-relaxed">
            ML models observe what you watch, like, share, or ignore.  
            Then they learn your interests and show content you’re more likely to enjoy.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 3</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Machine Learning allows computers to learn from data. <br />
            ✔ Models learn through training, prediction, and feedback. <br />
            ✔ Spam filters, translation tools, and face recognition use ML. <br />
            ✔ ML powers many apps you use every day like TikTok and YouTube. 
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson4"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 4 →
        </Link>
      </div>
    </div>
  );
}
