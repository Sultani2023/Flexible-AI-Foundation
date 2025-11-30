"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Module5Lesson2() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-16 px-6">
      
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
          Lesson 2: Website Building With No-Code Tools
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn how to choose the right platform, build essential pages, customize templates, and design a professional no-code website.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          1. Choosing the Right Platform
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Different no-code platforms are useful for different types of websites. Your choice depends on your goals, skill level, and the features you need.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p><strong>• Wix:</strong> Best for beginners who want a fast and easy drag-and-drop builder.</p>
          <p><strong>• Webflow:</strong> Great for professional, high-end designs with full layout control.</p>
          <p><strong>• WordPress (with no-code themes):</strong> Best for blogs and content-heavy websites.</p>
          <p><strong>• Shopify:</strong> Best choice for e-commerce stores.</p>
        </div>

        {/* SECTION 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          2. Creating Essential Website Pages
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-900">🏠 Homepage</h4>
            <p>
              The most important page — it should clearly explain what you offer, show visuals, and guide users to take action.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">ℹ️ About Page</h4>
            <p>
              Tell your story, mission, and background. People connect with human stories more than brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">📩 Contact Page</h4>
            <p>
              Include a form, email, phone number, and social media links so users can reach you easily.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
          3. Working With Templates
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          No-code platforms offer hundreds of templates that you can customize. Templates help you launch faster and maintain a professional layout.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Choose a template that matches your brand or business type.</p>
          <p>✔ Replace demo text with your own content.</p>
          <p>✔ Swap images with your own photos or free stock images.</p>
          <p>✔ Avoid over-editing — clean and simple always looks best.</p>
        </div>

        {/* SECTION 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          4. Customizing Colors, Fonts & Layouts
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p><strong>• Colors:</strong> Stick to 2 main colors + 1 accent color for a clean design.</p>
          <p><strong>• Fonts:</strong> Use one font for headings and one for body text—no more.</p>
          <p><strong>• Layouts:</strong> Maintain spacing, padding, and alignment for a balanced look.</p>
          <p><strong>• Branding:</strong> Add your logo, brand colors, icons, and consistent styles.</p>
        </div>

        {/* SECTION 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          5. Adding Forms and Basic Interactions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          No-code platforms make it extremely easy to add interactive features:
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
          <p>✔ Contact forms</p>
          <p>✔ Newsletter signup</p>
          <p>✔ Buttons with animations</p>
          <p>✔ Popups and banners</p>
          <p>✔ Simple galleries and sliders</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          These interactions help make your website engaging and functional — without writing JavaScript.
        </p>

        {/* SUMMARY */}
        <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary</h3>
          <p className="text-gray-700">
            - Choose the right no-code platform based on your site's purpose. <br />
            - Build essential pages like homepage, about, and contact. <br />
            - Use templates to speed up your design process. <br />
            - Customize colors, fonts, and layouts for a professional brand. <br />
            - Add forms and interactions without coding.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module5/lesson3"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 3 →
        </Link>
      </div>
    </div>
  );
}
