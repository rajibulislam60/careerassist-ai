"use client";

import React, { useState } from "react";
import Container from "./../../../container/Container";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Perfect for students and beginners.",
    features: [
      "Basic Career Assessment",
      "Resume Score Analysis",
      "Limited AI Suggestions",
      "Community Support",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$19",
    yearlyPrice: "$190",
    description: "For job seekers who want faster growth.",
    features: [
      "Unlimited Career Assessments",
      "AI Resume Builder",
      "AI Cover Letter Generator",
      "Interview Preparation",
      "Job Matching Recommendations",
      "Priority Support",
    ],
    button: "Start Pro",
    featured: true,
  },
  {
    name: "Premium",
    monthlyPrice: "$49",
    yearlyPrice: "$490",
    description: "Complete career development solution.",
    features: [
      "Everything in Pro",
      "Personalized Career Roadmap",
      "Portfolio Review",
      "Advanced Interview Simulation",
      "LinkedIn Profile Optimization",
      "1-on-1 Career Coaching",
    ],
    button: "Go Premium",
    featured: false,
  },
];

export default function PricingHomePage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl lg:text-6xl font-semibold">Pricing</h2>

          <p className="text-gray-600 py-4 max-w-2xl mx-auto">
            Sign up in less than 30 seconds. Try out our 7 day risk free trial,
            upgrade anytime with no hassle.
          </p>

          {/* Toggle Button */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-12">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-md font-medium transition-all cursor-pointer ${
                billing === "monthly"
                  ? "bg-[#614bef] text-white"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-md font-medium transition-all cursor-pointer ${
                billing === "yearly"
                  ? "bg-[#614bef] text-white"
                  : "text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all ${
                  item.featured
                    ? "bg-[#614bef] text-white border-[#614bef] scale-105"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold">{item.name}</h3>

                <div className="my-5">
                  <span className="text-5xl font-bold">
                    {billing === "monthly"
                      ? item.monthlyPrice
                      : item.yearlyPrice}
                  </span>
                  <span className="text-sm ml-2">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <p
                  className={`mb-6 ${
                    item.featured ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                <ul className="space-y-3 text-left mb-8">
                  {item.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold cursor-pointer ${
                    item.featured
                      ? "bg-white text-[#614bef]"
                      : "bg-[#614bef] text-white"
                  }`}
                >
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
