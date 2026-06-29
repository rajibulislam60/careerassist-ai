import React from "react";
import { FaRobot, FaPlay, FaUpload, FaArrowRight } from "react-icons/fa";

export default function InterviewPage() {
  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <span className="inline-block rounded-full bg-blue-100 text-blue-600 px-3 py-1 text-sm font-medium">
            🚀 AI Interview Assistant
          </span>

          <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900">
            Prepare Smarter.
            <br />
            Get Hired Faster.
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Practice realistic AI interviews, improve communication, and receive
            instant feedback based on your resume.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700">
            Start Interview
          </button>

          <button className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-100">
            Upload Resume
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Large Card */}
        <div className="lg:col-span-2 rounded-3xl bg-gray-900 text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-2xl">
                <FaRobot />
              </div>

              <h2 className="mt-6 text-3xl font-bold">AI Mock Interview</h2>

              <p className="mt-3 text-gray-300">
                Simulate real interviews, answer AI-generated questions, and
                receive detailed feedback instantly.
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold">
                <FaPlay />
                Practice Now
              </button>
            </div>

            <div className="hidden lg:flex h-48 w-48 rounded-full bg-blue-500/20 items-center justify-center">
              <FaRobot className="text-7xl text-blue-400" />
            </div>
          </div>
        </div>

        {/* Resume Card */}
        <div className="rounded-3xl border bg-white p-6">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
            <FaUpload className="text-green-600" />
          </div>

          <h3 className="mt-5 text-xl font-bold">Upload Resume</h3>

          <p className="mt-2 text-gray-500">
            AI will personalize interview questions according to your experience
            and skills.
          </p>

          <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
            Upload
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Bottom Grid */}

      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-bold text-lg">🎯 Interview Score</h3>
          <p className="text-5xl font-bold mt-4 text-blue-600">87%</p>
          <p className="text-gray-500 mt-2">
            Excellent readiness for interviews.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-bold text-lg">🔥 Questions Solved</h3>
          <p className="text-5xl font-bold mt-4 text-orange-500">128</p>
          <p className="text-gray-500 mt-2">Keep practicing every day.</p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-bold text-lg">⭐ AI Feedback</h3>
          <p className="mt-4 text-gray-500">
            Improve confidence and explain your projects with real-world
            examples.
          </p>
        </div>
      </div>
    </div>
  );
}
