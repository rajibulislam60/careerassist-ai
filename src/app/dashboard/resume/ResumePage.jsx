import React from "react";
import { FaLightbulb, FaCheckCircle } from "react-icons/fa";

const chooseItems = [
  {
    id: 1,
    title: "Choose Template",
    status: "done",
  },
  {
    id: 2,
    title: "Input Details",
    status: "done",
  },
  {
    id: 3,
    title: "AI Optimize",
    status: "current",
  },
  {
    id: 4,
    title: "Review & Download",
    status: "pending",
  },
];

export default function ResumePage() {
  return (
    <div className="p-6 h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            AI Resume Builder
          </h2>
          <p className="text-sm lg:text-base text-gray-500 mt-2">
            Build a professional resume tailored to your dream job with AI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Save
          </button>

          <button className="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
            Download
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {chooseItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-4 border rounded-xl bg-white"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold
                ${
                  item.status === "done"
                    ? "bg-green-500"
                    : item.status === "current"
                      ? "bg-violet-600"
                      : "bg-gray-300"
                }`}
            >
              {item.id}
            </div>

            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-500 capitalize">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Resume area */}
      <div className="lg:flex gap-4 mt-4 lg:mt-8 ">
        <div className="w-full lg:w-[75%]">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Resume Template
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <select className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-violet-500">
                  <option value="Modern">Modern</option>
                  <option value="Professional">Professional</option>
                  <option value="Creative">Creative</option>
                </select>

                <button className="px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all">
                  Change Template
                </button>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="border border-gray-200 rounded-xl bg-gray-50 min-h-[600px] flex items-center justify-center mb-6">
              <p className="text-gray-500">Resume Preview Here</p>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="py-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h4>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 border border-violet-200 bg-violet-50 text-violet-700 rounded-lg hover:bg-violet-100 transition-all">
                ✨ AI Optimize
              </button>

              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                📝 Improve Bullet Points
              </button>

              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                📊 Check ATS Score
              </button>

              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                ✔️ Spell Check
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl mt-4 lg:mt-8 p-6">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
              Tailor Your Resume for a Specific Job
            </h3>

            <p className="text-sm text-gray-500 mt-2 max-w-2xl">
              Paste the job description below and our AI will optimize your
              resume to match the role, keywords, and ATS requirements.
            </p>

            <div className="mt-5">
              <textarea
                rows={6}
                placeholder="Paste job description here..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>

            <div className="mt-5">
              <button className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-all shadow-sm">
                ✨ Tailor My Resume
              </button>
            </div>
          </div>
        </div>
        {/* Rating area */}
        <div className="w-full lg:w-[25%]">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              AI Resume Score
            </h3>

            {/* Score Circle */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-28 h-28 rounded-full border-8 border-green-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">92%</span>
              </div>
            </div>

            {/* Status */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-green-600">
                Excellent Match!
              </h4>

              <p className="text-gray-500 mt-2">
                Your resume is highly optimized for your target role and ATS
                systems.
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">ATS Compatibility</span>
                <span className="font-semibold text-green-600">95%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Keyword Match</span>
                <span className="font-semibold text-green-600">90%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Readability</span>
                <span className="font-semibold text-green-600">91%</span>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <FaLightbulb className="text-2xl text-yellow-500" />
              <h3 className="text-xl lg:text-2xl font-bold text-blue-800">
                Pro Tips
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Keep your resume to 1–2 pages.",
                "Use action verbs to start your bullet points.",
                "Quantify your achievements with numbers.",
                "Customize your resume for each job application.",
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-green-500 shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
