"use client";

import React from "react";
import Container from "./../../../container/Container";

const blogs = [
  {
    id: 1,
    title: "How AI is Changing Career Development in 2026",
    description:
      "Discover how AI tools are helping students and job seekers build better resumes, prepare for interviews, and find jobs faster.",
    author: "CareerAssist Team",
    date: "June 2026",
    tag: "AI Career",
  },
  {
    id: 2,
    title: "Top 10 Resume Mistakes You Must Avoid",
    description:
      "Learn the most common resume mistakes that reduce your chances of getting hired and how to fix them easily.",
    author: "HR Expert",
    date: "May 2026",
    tag: "Resume Tips",
  },
  {
    id: 3,
    title: "How to Prepare for Technical Interviews",
    description:
      "Step-by-step guide to prepare for frontend, backend, and full-stack developer interviews effectively.",
    author: "Dev Guide",
    date: "April 2026",
    tag: "Interview",
  },
  {
    id: 4,
    title: "Best Skills to Become a Full Stack Developer",
    description:
      "A complete roadmap of frontend, backend, and database skills you need to become a job-ready developer.",
    author: "Tech Mentor",
    date: "March 2026",
    tag: "Roadmap",
  },
];

export default function BlogHomePage() {
  return (
    <div className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold">Our Blog</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn career tips, interview strategies, and AI-powered insights to
            grow your professional journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
            >
              {/* Tag */}
              <span className="text-xs bg-[#614bef]/10 text-[#614bef] px-3 py-1 rounded-full">
                {blog.tag}
              </span>

              {/* Title */}
              <h2 className="text-xl font-semibold mt-4 mb-2">{blog.title}</h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>

              {/* Button */}
              <button className="mt-5 text-[#614bef] font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold">Want more career insights?</h2>
          <p className="text-gray-600 mt-2">
            Subscribe to our newsletter and stay updated.
          </p>

          <button className="mt-5 px-6 py-3 bg-[#614bef] text-white rounded-lg">
            Subscribe
          </button>
        </div>
      </Container>
    </div>
  );
}
