"use client";

import React from "react";
import {
  FaRobot,
  FaBriefcase,
  FaChartLine,
  FaUserTie,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "AI Resume Builder",
    description:
      "Create ATS-friendly resumes with smart suggestions and modern templates.",
    icon: <FaFileAlt />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Job Match AI",
    description:
      "Get personalized job recommendations based on your skills and experience.",
    icon: <FaBriefcase />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Interview Coach",
    description:
      "Practice mock interviews and improve your confidence with AI feedback.",
    icon: <FaUserTie />,
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 4,
    title: "Career Analytics",
    description:
      "Track your growth, skill progress, and career roadmap in real-time.",
    icon: <FaChartLine />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    title: "AI Assistant",
    description:
      "Ask career-related questions anytime and get instant smart guidance.",
    icon: <FaRobot />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Live Career Chat",
    description: "Connect with mentors and receive career advice instantly.",
    icon: <FaComments />,
    color: "from-teal-500 to-sky-500",
  },
];

export default function FeaturesHome() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-5">
            FEATURES
          </button>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Smart AI Features For Your Career Growth
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Career Assistant AI helps students and developers build resumes,
            prepare for interviews, find jobs, and grow faster with intelligent
            AI tools.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl mb-6`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Button */}
              <button className="px-5 py-2 rounded-xl bg-gray-900 text-white hover:bg-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready To Build Your Dream Career?
            </h2>

            <p className="text-purple-100 mt-4 text-lg">
              Join thousands of students and developers using Career Assistant
              AI.
            </p>
          </div>

          <button className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
