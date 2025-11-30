"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson7() {
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
          Lesson 7: Benefits & Risks of AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          AI brings incredible opportunities — it can save time, boost
          productivity, and solve difficult problems. But it also comes with
          risks related to safety, privacy, and fairness. In this lesson, you’ll
          learn both sides so you can use AI responsibly.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* BENEFIT 1: Productivity */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. Productivity Boost
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI helps people complete tasks faster and more efficiently. It
            automates routine work, reduces errors, and increases overall
            productivity in many fields.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Automated writing</strong> with tools like ChatGPT and Copilot</li>
            <li><strong>Smart scheduling</strong> that organizes your calendar</li>
            <li><strong>Data analysis</strong> that takes seconds instead of hours</li>
            <li><strong>Customer support bots</strong> that respond instantly</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              A small business can save hours weekly by using AI to answer
              customer questions or generate marketing posts.
            </p>
          </div>
        </div>

        {/* BENEFIT 2: Safety */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. Safety Improvements
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI systems help keep people safe by detecting dangers and alerting
            us before problems happen. This is especially useful in transportation,
            health, and security.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Self-driving car safety alerts</strong></li>
            <li><strong>Medical monitoring systems</strong> that detect heart issues early</li>
            <li><strong>Fraud detection</strong> in banking</li>
            <li><strong>Disaster prediction tools</strong> (floods, earthquakes)</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              AI in hospitals can detect dangerous changes in a patient’s
              heartbeat faster than a human doctor could.
            </p>
          </div>
        </div>

        {/* RISK 1: Bias */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Bias in AI Systems
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI models learn from real-world data — but this data can sometimes
            contain unfair trends or stereotypes. This can lead to biased or
            unfair results.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>AI hiring tools favoring one gender over another</li>
            <li>Face recognition struggling with darker skin tones</li>
            <li>AI mistranslating languages due to limited data</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              If the data mostly includes photos of one type of person, the AI
              may perform poorly on others.
            </p>
          </div>
        </div>

        {/* RISK 2: Privacy */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          4. Privacy Concerns
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI systems often analyze huge amounts of data — including personal
            information. Without strong protections, this can create privacy risks.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Apps collecting location data</li>
            <li>Websites tracking online behavior</li>
            <li>AI analyzing messages, photos, or voice notes</li>
            <li>Large companies storing user data long-term</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              When apps ask for unnecessary permissions (camera, contacts,
              microphone), they may collect more data than needed.
            </p>
          </div>
        </div>

        {/* RESPONSIBLE USE */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          5. Responsible Use of AI
        </h3>

        <div className="space-y-4 text-gray-700 mb-10 leading-relaxed">
          <p>
            To use AI safely and fairly, we must follow responsible practices.
            Everyone — governments, companies, and individuals — has a role in
            making AI trustworthy.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Double-check AI output for accuracy</li>
            <li>Use AI ethically (no cheating, misinformation, or harm)</li>
            <li>Protect your data and use apps with strong privacy settings</li>
            <li>Understand the limits of AI — it can make mistakes</li>
            <li>Be transparent when using AI for work or school</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              When using AI to write school assignments or work documents,
              you should revise the content, add your own thoughts, and cite
              AI tools if required.
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 7</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ AI increases productivity and improves safety. <br />
            ✔ AI systems can be biased depending on the data used. <br />
            ✔ Privacy concerns arise when personal data is collected and stored. <br />
            ✔ Responsible AI use is essential for fairness, trust, and safety.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson8"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 8 →
        </Link>
      </div>

    </div>
  );
}
