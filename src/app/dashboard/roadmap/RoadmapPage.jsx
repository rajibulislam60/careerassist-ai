"use client";

import React from "react";
import {
  FaUser,
  FaCompass,
  FaChartLine,
  FaBriefcase,
  FaSearch,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Self Discovery",
    status: "completed",
    icon: <FaUser />,
    name: "Know yourself better",
    description:
      "Discover your strengths, interests, values and work style with AI insights.",
  },
  {
    id: 2,
    title: "Career Exploration",
    status: "completed",
    icon: <FaCompass />,
    name: "Explore your options",
    description:
      "Get AI-curated career matches based on your profile and goals.",
  },
  {
    id: 3,
    title: "Skill Development",
    status: "progress",
    icon: <FaChartLine />,
    name: "Build in-demand skills",
    description:
      "Get personalized learning recommendations and track your progress.",
  },
  {
    id: 4,
    title: "Experience Building",
    status: "next",
    icon: <FaBriefcase />,
    name: "Gain real-world experience",
    description: "Find projects, internships and volunteer opportunities.",
  },
  {
    id: 5,
    title: "Job Search",
    status: "next",
    icon: <FaSearch />,
    name: "Find the right opportunity",
    description: "Create AI-powered resumes and prepare for interviews.",
  },
];

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              My Career Roadmap Progress
            </h2>

            <p className="text-slate-500 mt-3">
              Personalized guidance. Smarter decisions. Better opportunities.
            </p>
          </div>

          {/* Progress */}
          <div className="w-full lg:w-[350px]">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">
                Your Roadmap Progress
              </span>

              <span className="font-bold text-indigo-600">70%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-blue-500 to-violet-600"></div>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Great progress! You're building real momentum.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
            {steps.map((item) => (
              <div key={item.id} className="text-center">
                {/* Circle */}
                <div
                  className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center text-3xl border-4
                  
                  ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-600 border-green-500"
                      : item.status === "progress"
                        ? "bg-blue-100 text-blue-600 border-blue-500"
                        : "bg-slate-100 text-slate-400 border-slate-300"
                  }
                  `}
                >
                  {item.icon}
                </div>

                {/* Status */}
                <span
                  className={`inline-block mt-5 px-4 py-1 rounded-full text-xs font-semibold

                  ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-200 text-slate-600"
                  }
                  `}
                >
                  {item.status === "completed"
                    ? "Completed"
                    : item.status === "progress"
                      ? "In Progress"
                      : "Up Next"}
                </span>

                {/* Title */}
                <h3 className="font-bold text-lg mt-4 text-slate-900">
                  {item.title}
                </h3>

                <h4 className="font-semibold text-slate-700 mt-3">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500 mt-3 leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}

        <div className="mt-20 grid lg:grid-cols-4 gap-5">
          <div className="rounded-2xl border p-6 bg-slate-50">
            <h3 className="font-bold text-lg">AI-Powered Insights</h3>

            <p className="text-slate-500 mt-3">
              Get personalized insights based on data, not guesswork.
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-slate-50">
            <h3 className="font-bold text-lg">Personalized Roadmap</h3>

            <p className="text-slate-500 mt-3">
              Your unique roadmap adapts as you grow and evolve.
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-slate-50">
            <h3 className="font-bold text-lg">Smart Recommendations</h3>

            <p className="text-slate-500 mt-3">
              AI-curated skills, jobs and learning resources.
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-slate-50">
            <h3 className="font-bold text-lg">24/7 AI Career Coach</h3>

            <p className="text-slate-500 mt-3">
              Always available to guide your next career move.
            </p>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-white text-2xl font-bold">
              Small steps today. Big impact tomorrow.
            </h3>

            <p className="text-blue-100 mt-2">
              Stay consistent and let Career Assistant AI guide your journey.
            </p>
          </div>

          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 duration-300">
            Continue Journey →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
