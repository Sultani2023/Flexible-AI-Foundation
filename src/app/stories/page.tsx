'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, Cpu, Code, BarChart2, Palette, Activity } from 'lucide-react';
import Link from 'next/link';

export default function SuccessStoriesPage() {
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

    const girls = [
        {
            name: 'Tasheen',
            role: 'AI & STEM Enthusiast',
            icon: <Cpu size={48} className="text-purple-600" />,
            story: 'Tasheen mastered AI fundamentals and built her first mini-project. Her dedication inspired everyone around her!',
            rating: 5,
        },
        {
            name: 'Mahfoza Sultani iiii',
            role: 'Full-Stack Web Developer & AI & STEM Enthusiast',
            icon: <Code size={48} className="text-blue-500" />,
            story: "Mahfoza built a full-stack web app and explored AI/STEM projects. Her creativity and determination inspire others to dive into tech!"
            , rating: 5,
        },

        {
            name: 'Tuba Mirza',
            role: 'Data Scientist',
            icon: <BarChart2 size={48} className="text-green-500" />,
            story: 'Tuba analyzed real-world datasets and presented insights that impressed her mentors and peers.',
            rating: 5,
        },
        {
            name: 'Nancy',
            role: 'UI/UX Designer',
            icon: <Palette size={48} className="text-pink-500" />,
            story: 'Nancy designed user-friendly interfaces for multiple projects, making learning interactive and fun.',
            rating: 5,
        },
        {
            name: 'Iqra Shahid',
            role: 'AI Innovator & Engineer',
            icon: <Activity size={48} className="text-orange-500" />,
           story: "She grew from a determined beginner to an AI/STEAM innovator, winning awards and building real projects that inspire others.",
            rating: 5,

        },

    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50  pb-16">
            {/* Scroll Progress */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 z-50 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Header */}
            <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Success Stories</h1>
                <p className="text-xl text-gray-600">Meet the inspiring journeys of our talented team of learners</p>
            </section>

            {/* Stories Grid */}
            <section className="px-4 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {girls.map((girl, idx) => (
                    <div key={idx} className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                        <div className="absolute inset-0  opacity-20"></div>
                        <div className="p-8 relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div>{girl.icon}</div>
                                <div>
                                    <h2 className="font-bold text-gray-900 text-xl">{girl.name}</h2>
                                    <p className="text-sm text-gray-600">{girl.role}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(girl.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="flex items-start gap-3">
                                <Quote className="text-purple-400 w-6 h-6 mt-1" />
                                <p className="text-gray-700 italic">{girl.story}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="mt-20 text-center px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl p-12 md:p-16 text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Be Inspired, Start Your Journey!</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Just like Mahfoza, Tasheen, Tuba, Nancy, and Iqra, you too can achieve amazing results with dedication and learning.
                    </p>
                    <Link
                        href="/modules"
                        className="px-8 py-4 rounded-full bg-white text-orange-600 font-bold hover:shadow-lg transition transform hover:scale-105"
                    >
                        Join Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
