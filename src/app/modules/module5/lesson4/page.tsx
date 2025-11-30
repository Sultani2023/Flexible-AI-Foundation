"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module5Lesson4() {
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
          Lesson 4: Automations & Workflows with AI
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how to connect apps, automate tasks, and use AI to build smart workflows that save time,
          reduce manual work, and improve productivity.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Connecting Apps & Websites with Zapier or Make
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Automation platforms like <strong>Zapier</strong> and <strong>Make (formerly Integromat)</strong> let you
          connect different tools even if they don't have built-in integrations.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>• Send form submissions to Google Sheets automatically</p>
          <p>• Connect your website to email marketing tools</p>
          <p>• Trigger notifications in Slack or WhatsApp</p>
          <p>• Move data between apps without manual entry</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          These tools work by creating <strong>automated workflows</strong> called Zaps (Zapier) or Scenarios (Make).
        </p>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Automating Emails, Notifications & Tasks
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          You can automate almost any repetitive task using no-code workflows:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Send welcome emails to new users</li>
          <li>Notify your team when someone fills a form</li>
          <li>Create tasks automatically in tools like Trello or Notion</li>
          <li>Schedule reminders or follow-up messages</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          Automations save a huge amount of time and make your website or apps work for you 24/7.
        </p>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. Using AI for Auto-Responses & Chatbots
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed mb-6">
          <div>
            <h4 className="font-semibold text-gray-900">🤖 AI Auto-Responses</h4>
            <p>
              AI can read incoming messages or form submissions and generate smart responses automatically.
              This works using tools like OpenAI, Zapier AI Actions, or Make AI modules.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">💬 No-Code Chatbots</h4>
            <p>
              Builders like Tidio, ManyChat, and Botpress allow you to create chatbots without coding.
              You can use AI to answer FAQs, collect leads, or guide users through your website.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
          4. Creating Efficient Workflows That Save Time
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Smart workflows help you automate entire business processes, such as:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Collect data → Store it → Notify team → Generate summaries</li>
          <li>User signs up → Create profile → Send onboarding email</li>
          <li>New order received → Update inventory → Send invoice</li>
          <li>Customer asks a question → AI writes reply → Bot sends message</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          When combined with AI, these workflows become even smarter, reducing manual work and keeping
          your business running smoothly.
        </p>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - Zapier and Make connect apps and automate workflows. <br />
            - Emails, notifications, and tasks can all be automated. <br />
            - AI helps create smart auto-responses and chatbots. <br />
            - Efficient workflows save time and run your business automatically.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module5/lesson5"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 5 →
        </Link>
      </div>
    </div>
  );
}
