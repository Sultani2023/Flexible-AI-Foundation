"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { modules } from "./data";

export default function ModulesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-20 px-6">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Explore Our <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Learning Modules</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose from structured, easy-to-follow modules designed to build real career skills in AI, tech, and digital creativity.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {modules.map((module) => (
                    <Link
                        key={module.id}
                        href={`/modules/module${module.id}`} 
                        className="group block"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-2xl hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1">

                            {/* Icon */}
                            <div className="text-5xl mb-5 group-hover:scale-110 transition transform">
                                {module.icon}
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                {module.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-5">
                                {module.description}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center justify-between text-sm mb-6">
                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-semibold">
                                    {module.level}
                                </span>

                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={16} className="fill-yellow-400" />
                                    <span className="font-semibold text-gray-900">{module.rating}</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex items-center justify-between border-t pt-4 border-gray-200">
                                <span className="text-sm font-semibold text-gray-700">
                                    {module.lessons} Lessons
                                </span>
                                <ArrowRight
                                    size={22}
                                    className="text-red-500 group-hover:translate-x-1 transition"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CTA SECTION */}
            <div className="max-w-3xl mx-auto mt-24 text-center">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-10 rounded-3xl shadow-xl text-white">
                    <h2 className="text-3xl font-extrabold mb-3">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-lg opacity-90 mb-6">
                        Join thousands of women learning AI, tech, and digital skills today.
                    </p>

                    <Link
                        href="/"
                        className="px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
