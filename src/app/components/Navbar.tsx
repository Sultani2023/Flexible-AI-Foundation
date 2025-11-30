'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-sm"> 
             <Image
                src="/icon2.jpg"
                alt="AI Icon"
                width={60}
                height={60}
                className="object-cover"
              />
           </div> 
          <span className="text-xl font-bold text-gray-900">LearnFlexAI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition">Features</a>
          <a href="#lessons" className="text-gray-600 hover:text-gray-900 font-medium transition">Lessons</a>
          <a href="#stories" className="text-gray-600 hover:text-gray-900 font-medium transition">Stories</a>

         <Link
                href="/modules"className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:shadow-lg transition">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <a href="#features" className="block py-2 text-gray-600 hover:text-gray-900">Features</a>
          <a href="#lessons" className="block py-2 text-gray-600 hover:text-gray-900">Lessons</a>
          <a href="#stories" className="block py-2 text-gray-600 hover:text-gray-900">Stories</a>

        <Link
                href="/modules" className="w-full mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
