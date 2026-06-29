import React from "react";
import { FaDownload, FaSyncAlt } from "react-icons/fa";

export default function SkillAnalyzerPage() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-10 text-white">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ AI Skill Analysis
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold">
            Skill Analyzer
          </h2>

          <p className="mt-4 max-w-2xl text-blue-100 leading-7">
            Discover your strengths, identify skill gaps, and receive
            personalized AI recommendations to accelerate your career growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            <FaSyncAlt />
            Scan Another Resume
          </button>

          <button className="flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition">
            <FaDownload />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}