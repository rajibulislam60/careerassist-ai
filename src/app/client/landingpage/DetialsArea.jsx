import Container from "@/container/Container";
import React from "react";

const DetailsData = [
  {
    id: 1,
    icon: "🧠",
    title: "AI Career Guidance",
    description:
      "Get personalized career roadmaps and guidance based on your interests, skills and goals.",
  },
  {
    id: 2,
    icon: "📄",
    title: "Resume Builder",
    description:
      "Create ATS-friendly resumes with AI suggestions and professional formatting.",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Interview Preparation",
    description:
      "Practice with AI mock interviews and get real-time feedback to improve.",
  },
  {
    id: 4,
    icon: "📈",
    title: "Skill Development",
    description:
      "Discover in-demand skills and get a personalized learning plan.",
  },
];

export default function DetailsArea() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            Everything You Need for Your Career Growth
          </h3>
          <p className="text-gray-600 mt-3">
            Smart tools to boost your career with AI support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {DetailsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl text-center">{item.icon}</div>

              <h4 className="text-lg font-semibold mt-4 text-center text-gray-900">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-2 text-sm leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
