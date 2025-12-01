'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, Cpu, Code, BarChart2, Palette, Activity, X } from 'lucide-react';
import Link from 'next/link';

// ----------------------
// Girl Type Definition
// ----------------------
type Girl = {
    name: string;
    role: string;
    profession: string;
    icon: React.ReactNode;
    story: string;       // short preview
    fullStory?: string;
    rating: number;
};

export default function SuccessStoriesPage() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedGirl, setSelectedGirl] = useState<Girl | null>(null);

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

    // ----------------------
    // SUCCESS STORIES LIST
    // ----------------------
    const girls: Girl[] = [
        {
            name: 'Tasheen Kabir',
            role: 'Design & Communication Office',
            profession: 'Electronic Engineer',
            icon: <Cpu size={48} className="text-purple-600" />,
            story: 'Tasheen mastered AI fundamentals and built her first mini-project.',
            fullStory: `
My journey in technology changed completely when I joined the Women Ascension STEM & AI Fellowship. The program gave me hands-on learning, a strong foundation in STEM, and a clear understanding of how AI works.
I learned how algorithms function, how to analyze data, and how to build AI systems step by step. Using these skills, I created my first mini AI project — turning theory into real problem-solving. This achievement became a milestone in my learning journey.
Through the fellowship, I developed confidence in coding, stronger analytical skills, the ability to use AI tools effectively, and a growth-oriented mindset. Being part of a community that empowers women in tech motivated me to push my limits and believe in my potential.
Completing the program strengthened my technical abilities and transformed the way I approach challenges. It continues to inspire me as I pursue my goals in technology and innovation.
`,
            rating: 5,
        },

        {
            name: 'Mahfoza Sultani',
            role: 'Project Lead',
            profession: 'software Engineers & AI/STEM Explorer',
            icon: <Code size={48} className="text-blue-500" />,
            story: "Mahfoza built a full-stack web app and explored AI/STEM projects. Her creativity and determination inspire others to dive into tech!",
            fullStory: `🌟My journey into Machine Learning and Artificial Intelligence has been one of the most exciting and transformative experiences of my life. When I joined the AI and STEM program, I had limited knowledge, but step by step, I grew in confidence and skill.Throughout the program, I learned many important lessons in AI, and our training was truly exceptional. We explored modern and trending technologies such as LLMs, Note LLM, and Google Gemini, and we learned how these powerful tools shape the future of technology.One of the most inspiring parts of my journey was learning how to create chatbots, train AI models, and build practical AI applications. These hands-on experiences helped me understand how technology can solve real-world problems.Overall, this journey has been amazing. I am proud of how much I have learned and how far I have come. The AI and STEM program not only built my technical skills but also strengthened my confidence, creativity, and passion for the future of technology.
`,
            rating: 5,
        },
        {
            name: 'Tuba Mirza',
            role: 'Research & Content Officer',
            profession: 'Data Analyst & Machine Learning Enthusiast',
            icon: <BarChart2 size={48} className="text-green-500" />,
            story: 'Tuba analyzed real-world datasets and presented insights that impressed her mentors and peers.',
            fullStory: `
My journey in technology changed completely when I joined the Women Ascension STEM & AI Fellowship. The program gave me hands-on learning, a strong foundation in STEM, and a clear understanding of how AI works.
I learned how algorithms function, how to analyze data, and how to build AI systems step by step. Using these skills, I created my first mini AI project — turning theory into real problem-solving. This achievement became a milestone in my learning journey.
Through the fellowship, I developed confidence in coding, stronger analytical skills, the ability to use AI tools effectively, and a growth-oriented mindset. Being part of a community that empowers women in tech motivated me to push my limits and believe in my potential.
Completing the program strengthened my technical abilities and transformed the way I approach challenges. It continues to inspire me as I pursue my goals in technology and innovation.
`,
            rating: 5,
        },
        {
            name: 'Nancy Kalambo',
            role: 'Engagement Officer ',
            profession: 'AI enthusiast/Banker/accountant and entrepreneur',
            icon: <Palette size={48} className="text-pink-500" />,
            story: 'She helped mothers and women regain confidence by teaching simple AI skills—guiding them from fear to creativity, productivity, and new opportunities.',
            fullStory: `
I Never Thought Technology Was For Me.” Until It Was.When i joined the AI and STEM for Women ASCENSION program,I had little knowledge about understanding and learning AII have a phone but barely use it except for WhatsApp and calls.
My computer got spoiled which only left me with a phone.On the first day of training, i was nervous.I almost didn’t attend and internet connectivity is terrible here.
I thought:“What if I don’t understand anything?”“What if others are smarter than me?”“What if I fail?” “What if I’m requested to use a computer?”
But I attended all classes anyway.And that decision changed everything.This program does not teach machines.It restores confidence, dignity, and opportunity to women. Even on my phone I’m able to work,apply for jobs,maker posters and edit so many things.this has also helped use my phone wisely.this has led me to help other women learn the skill/technique of rebranding yourself,learning and utilizing Artificial intelligence 😊.

`,
            rating: 5,
        },
        {
            name: 'Iqra Shahid',
            role: 'Engagement Officer',
            profession: 'STEAM Advocate',
            icon: <Activity size={48} className="text-orange-500" />,
            story: "Iqra grew from a determined beginner to an AI/STEAM innovator, winning awards and building real projects that inspire others.",
            fullStory: `
I started with no knowledge, only determination — and it changed my journey.” ✨
My journey into AI, STEAM, and engineering began with curiosity and courage. From knowing nothing, I learned step by step through workshops, hands-on projects, and my STEAM-focused Final Year Project, which became a university finalist.
I achieved 1st position in my degree, earned a fully funded scholarship, contributed to community projects like WRRC’s Project Stay Safe and Pakistan Girls Guide, and won the Future Innovator Contest 2024. Projects like robotics, home automation, and my FYP strengthened my skills, leading to a job opportunity in a USA-based company.
Today, I stand as a confident engineer and innovator, proving that passion, determination, and willingness to grow can turn any beginner into an achiever.
`,
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 pb-16">

            {/* Scroll Progress Bar */}
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
                    <div
                        key={idx}
                        onClick={() => setSelectedGirl(girl)}
                        className="cursor-pointer relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                    >
                        <div className="p-8 relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div>{girl.icon}</div>
                                <div>
                                    <h2 className="font-bold text-gray-900 text-xl">{girl.name}</h2>
                                    <p className="text-sm text-gray-600">{girl.role}</p>
                                    <p className="text-xs text-gray-500">{girl.profession}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(girl.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Story Preview */}
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

            {/* Modal Popup */}
            {selectedGirl && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-3xl max-w-lg w-full relative shadow-xl">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedGirl(null)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            <X size={28} />
                        </button>

                        <div className="flex items-center gap-4 mb-6">
                            {selectedGirl.icon}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{selectedGirl.name}</h2>
                                <p className="text-gray-600">{selectedGirl.role}</p>
                                <p className="text-gray-500 text-sm">{selectedGirl.profession}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(selectedGirl.rating)].map((_, i) => (
                                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        {/* Story (long if available) */}
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {selectedGirl.fullStory || selectedGirl.story}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
