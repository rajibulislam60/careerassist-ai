import React from "react";

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
    <div>
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
    </div>
  );
}
