import React from "react";
import { FaArrowUp, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { SiDocker, SiOpenai } from "react-icons/si";

const skillGaps = [
  {
    id: 1,
    name: "Backend Development",
    icon: <FaServer />,
    score: 45,
    color: "bg-red-500",
  },
  {
    id: 2,
    name: "MongoDB",
    icon: <FaDatabase />,
    score: 58,
    color: "bg-orange-500",
  },
  {
    id: 3,
    name: "Docker",
    icon: <SiDocker />,
    score: 35,
    color: "bg-blue-500",
  },
  {
    id: 4,
    name: "AI Integration",
    icon: <SiOpenai />,
    score: 62,
    color: "bg-purple-500",
  },
  {
    id: 5,
    name: "DSA",
    icon: <FaCode />,
    score: 40,
    color: "bg-pink-500",
  },
];

export default function SkillOverView() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-8">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900">
            Top Skill Gaps
          </h2>

          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            Focus on these skills to improve your overall profile and career
            growth.
          </p>
        </div>
      </div>

      {/* Skill List */}
      <div className="space-y-5">
        {skillGaps.map((skill) => (
          <div
            key={skill.id}
            className="border border-slate-200 rounded-xl p-3 hover:shadow-lg transition-all duration-300"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${skill.color} text-white flex items-center justify-center text-lg`}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <div>
                  <h4 className="text-base font-semibold text-slate-800">
                    {skill.name}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1">
                    Current Skill Level
                  </p>
                </div>
              </div>

              {/* Score */}
              <div className="text-right">
                <h4 className="text-lg lg:text-xl font-bold text-slate-900">
                  {skill.score}%
                </h4>

                <span className="mt-1 text-xs font-medium text-red-500 flex items-center justify-end gap-1">
                  <FaArrowUp className="text-[10px]" />
                  Needs Improvement
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`${skill.color} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${skill.score}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
