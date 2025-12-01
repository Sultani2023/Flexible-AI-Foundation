'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Menu, Play, Star } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

import './globals.css';



export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lessons = [
    {
      id: 1,
      title: 'AI Fundamentals',
      duration: '45 min',
      level: 'Beginner',
      description: 'Learn the basics of artificial intelligence and machine learning',
      icon: '🤖'
    },
    {
      id: 2,
      title: 'Data Science Essentials',
      duration: '60 min',
      level: 'Intermediate',
      description: 'Master data analysis and visualization techniques',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Web Development Pro',
      duration: '90 min',
      level: 'Advanced',
      description: 'Build scalable web applications with modern frameworks',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Cloud Computing',
      duration: '75 min',
      level: 'Intermediate',
      description: 'Deploy and manage applications in the cloud',
      icon: '☁️'
    },
  ];

  const miniProjects = [
    {
      id: 1,
      title: 'Build a Chat Bot',
      difficulty: 'Beginner',
      students: 2400,
      rating: 4.8,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: 'Create a Dashboard',
      difficulty: 'Intermediate',
      students: 1800,
      rating: 4.9,
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 3,
      title: 'ML Model Training',
      difficulty: 'Advanced',
      students: 950,
      rating: 5.0,
      color: 'from-green-400 to-emerald-500'
    },
  ];

  const testimonials = [
    {
      name: 'Mahfoza Sultani',
      role: 'Software Engineer',
      image: '👩‍💼',
      text: 'This platform completely transformed my career. The practical projects helped me land my dream job!',
      rating: 5
    },
    {
      name: 'Tuba Mirza',
      role: 'Data Scientist',
      image: '👩‍🔬',
      text: 'Amazing content and supportive community. I went from beginner to senior analyst in 6 months.',
      rating: 5
    },
    {
      name: 'Tasheen',
      role: 'Product Manager',
      image: '👩‍💼',
      text: 'The mini projects are incredibly well-designed. I could apply everything immediately at work.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-yellow-100 px-4 py-2 rounded-full">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-semibold text-yellow-900">Empower Your Career</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn from the Best in <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Tech Industry</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Master AI, data science, and web development with hands-on projects, expert mentorship, and a supportive community of women learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/modules" className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2 justify-center">
                  Start Learning <ArrowRight size={20} />
                </Link>
                <button className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-50 transition flex items-center gap-2 justify-center">
                  <Play size={20} /> Watch Demo
                </button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-yellow-100 to-green-200 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl h-80 md:h-96 flex items-center justify-center text-6xl shadow-2xl">
                👩‍💻
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Women Learners' },
              { number: '200+', label: 'Expert Courses' },
              { number: '4.9★', label: 'Average Rating' },
              { number: '95%', label: 'Job Placement' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Learning Experience</h2>
            <p className="text-xl text-gray-600">Everything you need to master in-demand skills</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI & ML Lessons',
                description: 'Learn cutting-edge artificial intelligence from industry experts',
                href: '/ai-ml',
              },
              {
                icon: '📹',
                title: 'Video Tutorials',
                description: 'High-quality video content with real-world examples',
                href: '/videos',
              },
              {
                icon: '📄',
                title: 'Downloadable PDFs',
                description: 'Comprehensive guides and resources to download',
              },

              {
                icon: '📚',
                title: 'Learning Modules',
                description: 'Structured curriculum designed for progressive learning',
                href: '/modules',
              },
              {
                icon: '💻',
                title: 'Mini Projects',
                description: 'Build portfolio-worthy projects with hands-on experience',
                href: '/projects',
              },
              {
                icon: '👩‍💼',
                title: 'Success Stories',
                description: 'Get inspired by real stories from women in tech',
                href: '/stories',
              },
            ].map((feature, idx) => (
              <Link key={idx} href={feature.href || '#'} className="block">
                <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition hover:shadow-xl cursor-pointer">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition transform">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <section id="lessons" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured AI Lessons</h2>
            <p className="text-xl text-gray-600">Start your learning journey with our most popular courses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lessons.map((lesson, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 text-white cursor-pointer transition transform hover:scale-105 ${activeLesson === idx
                  ? 'bg-gradient-to-br from-red-500 to-orange-500 shadow-2xl'
                  : 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700'
                  }`}
                onClick={() => setActiveLesson(idx)}
              >
                <div className="text-4xl mb-4">{lesson.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{lesson.title}</h3>
                <p className="text-sm opacity-90 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold">{lesson.duration}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">{lesson.level}</span>
                  </div>
                  <Play size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Build Real Projects
            </h2>
            <p className="text-xl text-gray-600">
              Hands-on experience with industry-standard tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {miniProjects.map((project) => {
              // Assign links based on project ID
              let link = "/chatbot"; // default for Project 1
              if (project.id === 2) link = "/createdash";
              if (project.id === 3) link = "/trainmodel";

              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-300 transition hover:shadow-xl"
                >
                  {/* Header */}
                  <div
                    className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    {/* Icon in the corner */}
                    <div className="absolute top-4 left-4 text-white opacity-90">
        
                    </div>

                    <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition transform" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-600">
                        {project.difficulty}
                      </span>

                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {project.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600">
                      {project.students.toLocaleString()} students
                    </p>

                    <Link
                      href={link}
                      className="block w-full mt-4 px-4 py-2 text-center bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                    >
                      Start Project
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Inspiring journeys from women learners like you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl p-12 md:p-16 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of women who are building amazing careers in tech. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-ml" className="px-8 py-4 rounded-full bg-white text-orange-600 font-bold hover:shadow-lg transition transform hover:scale-105">
                Get Started Free
              </Link>
              <button className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
