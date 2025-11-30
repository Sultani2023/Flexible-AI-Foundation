"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module1Lesson1() {
  const router = useRouter();

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
          Lesson 1: What Is Artificial Intelligence?
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn the basics of AI, where it started, and how it powers everyday tools like Google, Siri, and YouTube.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        
        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. What Is Artificial Intelligence?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Artificial Intelligence (AI)</strong> is the ability of a computer or machine to perform tasks that normally 
          require human intelligence. These tasks include understanding language, recognizing images, learning from 
          past experience, solving problems, and making decisions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          In simple words, <strong>AI is a machine that can learn, think, and make decisions like humans — but faster and with 
          much more data.</strong>
        </p>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. A Quick History of AI
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p><strong>1950s – The Beginning:</strong> The term “Artificial Intelligence” was introduced in 1956 by John McCarthy. Early computers could solve simple math problems.</p>
          <p><strong>1960s–1980s – Rule-Based AI:</strong> Computers followed strict rules. They couldn't learn, only follow instructions.</p>
          <p><strong>1997 – A Major Milestone:</strong> IBM’s “Deep Blue” defeated world chess champion Garry Kasparov.</p>
          <p><strong>2012–Today – The AI Boom:</strong> Modern AI systems like Siri, Google Assistant, and ChatGPT became possible because of machine learning and deep learning.</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Real-Life Examples of AI
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-900">🔍 Google Search</h4>
            <p>
              AI decides which results are the most accurate and personalizes suggestions based on what billions of people search every day.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🗣️ Siri & Google Assistant</h4>
            <p>
              These voice assistants use AI to understand language, answer questions, set reminders, and interact with your phone.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">🤖 ChatGPT</h4>
            <p>
              You are using an AI that understands text, generates content, and communicates like a human.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📺 YouTube Recommendations</h4>
            <p>
              AI learns what you like based on what you watch and suggests videos you will enjoy.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - AI means machines learning and making decisions like humans. <br />
            - It has evolved for 70+ years. <br />
            - You use AI every day through Google, Siri, ChatGPT, YouTube, and more.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson2"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </div>
  );
}
