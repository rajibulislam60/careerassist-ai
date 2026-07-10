import React from "react";
import { FaCheckCircle, FaStar, FaExclamationCircle } from "react-icons/fa";

export default function SkillDetails() {
  const totalSkills = 38;

  const skillDistribution = [
    {
      name: "Strong",
      count: 14,
      percentage: 37,
      color: "bg-green-500",
      textColor: "text-green-600",
      icon: <FaStar />,
    },
    {
      name: "Average",
      count: 16,
      percentage: 42,
      color: "bg-yellow-400",
      textColor: "text-yellow-500",
      icon: "🟡",
    },
    {
      name: "Weak",
      count: 8,
      percentage: 21,
      color: "bg-red-500",
      textColor: "text-red-500",
      icon: <FaExclamationCircle />,
    },
  ];

  const strengths = [
    "Strong in Frontend Development",
    "Good understanding of JavaScript",
    "Hands-on with Modern Frameworks",
    "Excellent Problem Solving Skills",
    "Responsive UI Design",
    "REST API Integration",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {/* ================= Strengths ================= */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          Your Strengths
        </h3>

        <div className="space-y-4">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-green-50"
            >
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />

              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Skills Distribution ================= */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-8">
          Skills Distribution
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Donut Chart */}
          <div
            className="relative w-44 h-44 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
                #22c55e 0% 37%,
                #facc15 37% 79%,
                #ef4444 79% 100%
              )`,
            }}
          >
            {/* Inner Circle */}
            <div className="w-32 h-32 rounded-full bg-white shadow flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold text-slate-900">
                {totalSkills}
              </h2>

              <p className="text-sm text-slate-500 text-center">
                Total
                <br />
                Skills
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 w-full space-y-6">
            {skillDistribution.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div
                    className={`flex items-center gap-3 font-semibold ${item.textColor}`}
                  >
                    <span className="text-lg">{item.icon}</span>

                    <span>
                      {item.name} ({item.count})
                    </span>
                  </div>

                  <span className="font-bold text-slate-700">
                    {item.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-700`}
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
