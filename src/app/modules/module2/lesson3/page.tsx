"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module2Lesson3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/modules/module2"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Module Overview
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Module 2: AI Content Creation for Freelance Writing
        </h1>

        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Lesson 3: Writing Articles & Blog Posts with AI
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn how to use AI to create drafts, improve structure, add examples, and
          make content sound human and engaging — not robotic.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: Creating drafts using AI */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Creating Drafts Using AI</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI is excellent for getting past the blank page. Use it to generate ideas,
            headlines, outlines, and full first drafts — then edit and shape them into
            your final piece.
          </p>

          <p>
            Typical drafting workflow with AI:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Idea generation:</strong> Ask AI for 10 blog post ideas in your niche.</li>
            <li><strong>Headline options:</strong> Request multiple title variations ranked by clickability.</li>
            <li><strong>Outline:</strong> Create H2/H3 headings and suggested subpoints for each section.</li>
            <li><strong>First draft:</strong> Ask AI to expand each outline item into 1–3 paragraphs.</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Write a 700-word draft about 5 low-cost marketing ideas for small cafés.
              Include an intro, 5 sections with examples, and a short conclusion.”
            </p>
          </div>

          <p>
            Tip: Use short, specific prompts and iteratively refine the draft (ask AI to expand, reword,
            or shorten parts) rather than asking for a perfect final article in one go.
          </p>
        </div>

        {/* SECTION 2: Improving structure and clarity */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Improving Structure & Clarity</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Once you have a draft, AI helps reorganize and clarify content so readers can follow easily.
            Focus on headings, paragraph length, transitions, and logical flow.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Headings & hierarchy:</strong> Ask AI to suggest clearer H2/H3 titles that match reader expectations.</li>
            <li><strong>Paragraph trimming:</strong> Break long paragraphs into shorter, scannable chunks.</li>
            <li><strong>Transitions:</strong> Request transition sentences to connect ideas smoothly.</li>
            <li><strong>Clarity rewrite:</strong> Have AI rewrite complex sentences in plain language.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Rewrite this paragraph in simple, clear language and split it into two short paragraphs.”
            </p>
          </div>

          <p>
            UX tip: Readers scan online — use short headings, bullet lists, and highlighted examples to make structure visible.
          </p>
        </div>

        {/* SECTION 3: Adding examples and real-world details */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Adding Examples & Real-World Details</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            Examples turn theory into practice. Use AI to pull case studies, statistics, or step-by-step examples
            that demonstrate your points. Always verify facts and add local or personal context.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Case studies:</strong> Ask AI to provide short case studies relevant to your topic.</li>
            <li><strong>Statistics & sources:</strong> Request numbers and ask AI to suggest where they typically come from (then fact-check).</li>
            <li><strong>Step-by-step examples:</strong> Ask for a practical walk-through the reader can follow.</li>
            <li><strong>Localization:</strong> Add local names, currencies, or cultural details so the content connects with your audience.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Add two short case studies of small restaurants using social media promotions, each with results and a concrete tip readers can copy.”
            </p>
          </div>

          <p>
            Reminder: Use AI examples as a starting point — where possible add real interviews, screenshots, or links to increase credibility.
          </p>
        </div>

        {/* SECTION 4: Making content human, not robotic */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Making Content Human — Not Robotic</h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            AI can produce correct but bland text. Your role is to humanize the output so it feels like a real person wrote it.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Add personal stories:</strong> Share a quick anecdote or client story.</li>
            <li><strong>Use natural phrases:</strong> Replace stiff wording with everyday language and contractions.</li>
            <li><strong>Inject opinions:</strong> Add short judgments (“In my experience…”) to show authority.</li>
            <li><strong>Vary sentence rhythm:</strong> Mix short punchy sentences with longer ones to sound natural.</li>
            <li><strong>Check tone:</strong> Ask AI to rewrite in a friendly, professional, or humorous tone depending on your brand.</li>
          </ul>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example prompt: “Rewrite this section in a warm, conversational tone, as if explaining to a friend, and add a one-sentence personal tip.”
            </p>
          </div>

          <p>
            Final pass: read the piece aloud — if it sounds natural when spoken, it reads as human. Edit any lines that feel generic or repetitive.
          </p>
        </div>

        {/* PRACTICAL WORKFLOW */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Workflow (Put It All Together)</h3>

        <div className="space-y-4 text-gray-700 mb-6 leading-relaxed">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Generate 5 topic ideas</strong> with AI and pick one.</li>
            <li><strong>Create an outline</strong> (intro, 3–5 sections, conclusion).</li>
            <li><strong>Ask AI to draft each section</strong> separately (short prompts).</li>
            <li><strong>Refine structure</strong> — improve headings and transitions.</li>
            <li><strong>Add 2 real-world examples</strong> and localize details.</li>
            <li><strong>Humanize the tone</strong> and add a personal tip or story.</li>
            <li><strong>Proofread & fact-check</strong> (dates, figures, names).</li>
            <li><strong>Polish SEO</strong> — optimize title, meta description, and keywords.</li>
          </ol>
        </div>

        {/* SUMMARY */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-6">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 3</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Use AI to create fast first drafts and outlines. <br />
            ✔ Improve structure and clarity with focused rewriting prompts. <br />
            ✔ Add real examples and local details to increase trust. <br />
            ✔ Humanize AI output with stories, opinion, and a conversational tone. <br />
            ✔ Follow a short practical workflow to produce publish-ready articles.
          </p>
        </div>

      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module2/lesson4"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 4 →
        </Link>
      </div>

    </div>
  );
}
