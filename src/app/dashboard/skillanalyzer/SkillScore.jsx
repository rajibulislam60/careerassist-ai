import React from "react";
import { FaUser, FaCompass, FaChartLine, FaBriefcase } from "react-icons/fa";

const score = 92;

const steps = [
  {
    id: 1,
    icon: <FaUser />,
    name: "Beginner",
  },
  {
    id: 2,
    icon: <FaCompass />,
    name: "Developing",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    name: "Proficient",
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    name: "Expert",
  },
];

export default function SkillScore() {
  const getStatus = (index) => {
    if (score >= 90) {
      if (index < 3) return "completed";
      return "progress";
    }

    if (score >= 70) {
      if (index < 2) return "completed";
      if (index === 2) return "progress";
      return "";
    }

    if (score >= 40) {
      if (index < 1) return "completed";
      if (index === 1) return "progress";
      return "";
    }

    return index === 0 ? "progress" : "";
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            Overall Skill Score
          </h3>

          <div className="w-36 h-36 rounded-full border-[10px] border-green-500 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-900">{score}%</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-900">
            Excellent Progress! 🚀
          </h2>

          <p className="text-slate-600 mt-3 mb-10 max-w-2xl">
            You have built a strong technical foundation. Continue improving
            your advanced skills and gain more real-world experience to become
            an expert.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Background Line */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-1 bg-slate-200 rounded-full"></div>

            {/* Active Line */}
            <div
              className="hidden md:block absolute top-10 left-[10%] h-1 bg-green-500 rounded-full transition-all duration-700"
              style={{
                width: `${(score / 100) * 80}%`,
              }}
            ></div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((item, index) => {
                const status = getStatus(index);

                return (
                  <div key={item.id} className="text-center">
                    {/* Circle */}
                    <div
                      className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center text-3xl border-4 transition-all duration-300
                        ${
                          status === "completed"
                            ? "bg-green-100 text-green-600 border-green-500"
                            : status === "progress"
                              ? "bg-blue-100 text-blue-600 border-blue-500 shadow-lg scale-105"
                              : "bg-slate-100 text-slate-400 border-slate-300"
                        }`}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h4 className="mt-4 text-lg font-semibold text-slate-800">
                      {item.name}
                    </h4>

                    {/* Status */}
                    <p
                      className={`text-sm mt-2 font-medium ${
                        status === "completed"
                          ? "text-green-600"
                          : status === "progress"
                            ? "text-blue-600"
                            : "text-slate-400"
                      }`}
                    >
                      {status === "completed"
                        ? "Completed"
                        : status === "progress"
                          ? "Current Level"
                          : "Locked"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
