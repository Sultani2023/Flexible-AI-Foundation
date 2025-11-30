"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Module1Lesson4() {
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
          Lesson 4: Deep Learning & Neural Networks
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Deep Learning is a powerful branch of Machine Learning inspired by the
          human brain. In this lesson, you will learn what neural networks are,
          how they work, and why deep learning has transformed modern AI.
        </p>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* SECTION 1: What is a Neural Network */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          1. What Is a Neural Network?
        </h3>

        <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
          <p>
            A <strong>neural network</strong> is a type of AI model designed to
            recognize patterns. It is made up of layers of connected nodes called
            “neurons,” similar to the neurons in our brain.
          </p>

          <p>
            These neurons work together to process information, make predictions,
            and learn from data.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              📌 **Simple definition:**  
              A neural network = a system of connected “digital neurons” that learn
              to make decisions by studying data.
            </p>
          </div>
        </div>

        {/* SECTION 2: How they mimic the human brain */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          2. How Neural Networks Mimic the Human Brain
        </h3>

        <div className="space-y-6 mb-10 text-gray-700 leading-relaxed">
          <p>
            Neural networks were inspired by how the human brain works. Each
            “neuron” receives information, processes it, and passes it to the next
            layer.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Input Layer:</strong> Receives raw data (like pixels in an image).
            </li>
            <li>
              <strong>Hidden Layers:</strong> Learn patterns and features (edges, shapes, objects).
            </li>
            <li>
              <strong>Output Layer:</strong> Produces the final prediction (such as “this is a cat”).
            </li>
          </ul>

          <p>
            Just like the brain strengthens connections through repetition, neural
            networks improve by adjusting “weights” after each training example.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-gray-800 font-medium">
              Example:  
              Your brain learns to recognize a friend by seeing them many times.  
              Neural networks learn in a similar way using repeated examples.
            </p>
          </div>
        </div>

        {/* SECTION 3: Why deep learning is powerful */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          3. Why Is Deep Learning So Powerful?
        </h3>

        <p className="text-gray-700 mb-6">
          Deep Learning uses <strong>many layers</strong> of neurons — sometimes
          hundreds. These layers help the model learn extremely complex patterns
          that traditional algorithms cannot understand.
        </p>

        {/* Example 1 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">📷 Image Recognition</h4>
          <p className="text-gray-700 leading-relaxed">
            Deep learning can identify faces, objects, animals, and scenes by
            learning tiny pixel-level patterns humans might miss.
          </p>
        </div>

        {/* Example 2 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">🎤 Speech Recognition</h4>
          <p className="text-gray-700 leading-relaxed">
            Voice assistants like Siri, Alexa, and Google Assistant use deep
            learning to understand speech and respond naturally.
          </p>
        </div>

        {/* Example 3 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900">🚗 Self-Driving Cars</h4>
          <p className="text-gray-700 leading-relaxed">
            Cars use deep learning to detect pedestrians, road signs, vehicles, and
            more — helping the car make safer decisions.
          </p>
        </div>

        {/* Summary */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mt-10">
          <h3 className="text-xl font-bold text-red-700 mb-2">Summary of Lesson 4</h3>
          <p className="text-gray-700 leading-relaxed">
            ✔ Neural networks are inspired by the human brain. <br />
            ✔ They contain layers of neurons that learn from data. <br />
            ✔ Deep learning uses many layers to understand complex patterns. <br />
            ✔ It powers image recognition, speech systems, and self-driving cars.
          </p>
        </div>
      </div>

      {/* NEXT LESSON BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <Link
          href="/modules/module1/lesson5"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Continue to Lesson 5 →
        </Link>
      </div>
    </div>
  );
}
