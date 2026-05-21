"use client";

import React, { useState } from "react";
import Image from "next/image";
import BGHeroImage from "../images/heroimage.png";
import Container from "@/container/Container";

export default function HeroArea() {
  const [active, setActive] = useState("trial");

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${BGHeroImage.src})`,
      }}
    >
      <Container>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Your <span className="text-[#614bef]">AI</span> Career <br />
            Assistant
          </h1>

          <p className="w-full text-md lg:text-lg font-normal text-gray-700 mt-3">
            Get personalized career guidance, resume enhancement, interview
            preparartion and skill development plans powered by AI.
          </p>

          <div className="flex gap-8 mt-4">
            <button
              onClick={() => setActive("trial")}
              className={`px-3 py-2 lg:px-7 lg:py-4 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                active === "trial"
                  ? "bg-[#614bef] text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-800 hover:border-[#614bef]"
              }`}
            >
              Start Free Trial
            </button>

            <button
              onClick={() => setActive("how")}
              className={`px-3 py-2 lg:px-7 lg:py-4 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                active === "how"
                  ? "bg-[#614bef] text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-800 hover:border-[#614bef]"
              }`}
            >
              See How It Works
            </button>
          </div>

          <p className="text-sm font-light text-gray-700 mt-5">
            Trusted by 10,000+ students & professionals
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              <Image
                src={BGHeroImage}
                alt="user"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={BGHeroImage}
                alt="user"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={BGHeroImage}
                alt="user"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
