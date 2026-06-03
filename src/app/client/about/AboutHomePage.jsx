"use client";

import React from "react";
import Container from "./../../../container/Container";

export default function AboutHomePage() {
  return (
    <div className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold">About Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are building an AI-powered career assistant to help students and
            job seekers achieve their dream jobs faster and smarter.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to empower individuals with the right tools,
              guidance, and AI technology to build strong careers. We focus on
              resume building, interview preparation, and personalized career
              roadmaps.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✔ AI-powered career guidance</li>
              <li>✔ Real-time resume analysis</li>
              <li>✔ Personalized job recommendations</li>
              <li>✔ Easy-to-use modern interface</li>
              <li>✔ Built for students & professionals</li>
            </ul>
          </div>

          {/* Right Side Card */}
          <div className="bg-[#614bef] text-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">What We Provide</h3>

            <p className="mb-6 text-gray-100">
              A complete career development ecosystem that helps you grow from
              beginner to professional level.
            </p>

            <div className="space-y-3">
              <div className="bg-white/10 p-3 rounded-lg">
                AI Resume Builder
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                Interview Preparation System
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                Career Roadmap Generator
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                Job Matching System
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold">
            Start Your Career Journey Today
          </h2>
          <p className="text-gray-600 mt-3">
            Join thousands of users already improving their careers with us.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#614bef] text-white rounded-lg font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </Container>
    </div>
  );
}
