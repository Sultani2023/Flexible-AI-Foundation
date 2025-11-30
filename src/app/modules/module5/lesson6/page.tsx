"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module5Lesson6() {
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
          Lesson 6: Launching & Managing No-Code Projects
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how to publish your no-code project, connect domains, improve performance,
          and maintain your website or app like a professional creator.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Publishing Websites & Deploying Apps
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Once your website or app is ready, no-code tools let you publish it with just a few clicks.
          Most platforms offer hosting, security, and updates automatically.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li><strong>Wix & Webflow:</strong> Publish instantly with built-in hosting</li>
          <li><strong>Bubble:</strong> Deploy web apps with one click</li>
          <li><strong>Glide & AppSheet:</strong> Turn your project into mobile apps</li>
          <li><strong>PWA (Progressive Web App):</strong> Some tools let you install apps to home screens</li>
        </ul>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Connecting a Custom Domain
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          A custom domain makes your project look professional — for example:  
          <strong>www.myportfolio.com</strong> or <strong>www.mybusiness.net</strong>.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Buy a domain from Namecheap, GoDaddy, or Google Domains</p>
          <p>✔ Connect it through your no-code platform settings</p>
          <p>✔ Use HTTPS for secure browsing</p>
          <p>✔ Update DNS settings (most tools guide you step-by-step)</p>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          3. SEO Basics for No-Code Sites
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          SEO (Search Engine Optimization) helps your website appear in Google search results.
          No-code tools have built-in SEO features that make this easier.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Use clear page titles and descriptions</li>
          <li>Add keywords naturally in your text</li>
          <li>Optimize images for fast loading</li>
          <li>Use clean URLs (example: /contact, /about)</li>
          <li>Make sure your website loads quickly</li>
        </ul>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Testing, Debugging & Performance Improvement
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Before publishing, it’s important to test your website or app on different devices.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Test on mobile, tablet, and desktop</li>
          <li>Check buttons, forms, and links</li>
          <li>Fix slow-loading pages or large images</li>
          <li>Use platform analytics to identify errors</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          Most no-code tools provide debugging tools, logs, and error messages to guide you.
        </p>

        {/* SECTION 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          5. Best Practices for Maintaining Your Project
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          After launching, you should regularly update and improve your project to keep it running smoothly.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
          <li>Update content (blog posts, images, announcements)</li>
          <li>Monitor loading speed and performance</li>
          <li>Backup important data regularly</li>
          <li>Test workflows after major updates</li>
          <li>Keep your design consistent over time</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          A well-maintained site or app builds trust and keeps users engaged.
        </p>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - Publish websites and apps easily using no-code platforms. <br />
            - Connect a custom domain to look professional. <br />
            - SEO improves your visibility on Google. <br />
            - Test and debug before launching for better performance. <br />
            - Maintain your project regularly to keep it reliable.
          </p>
        </div>
      </div>

      {/* NEXT BUTTON OR END */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module5/lesson7"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 7 →
        </Link>
      </div>
    </div>
  );
}
