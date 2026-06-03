"use client";

import React, { useState } from "react";
import Container from "@/container/Container";
import { FaRobot, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-4 border-b border-gray-200 bg-white relative z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#614bef] flex items-center justify-center text-white text-xl">
              <FaRobot />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold">
              Career Assistant <span className="text-[#614bef]">AI</span>
            </h3>
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-8 items-center text-[17px] font-medium">
              <Link href="/client">
                <li className="hover:text-[#614bef] cursor-pointer transition-all duration-300">
                  Home
                </li>
              </Link>

              <Link href="/client/features">
                <li className="hover:text-[#614bef] cursor-pointer transition-all duration-300">
                  Features
                </li>
              </Link>

              <Link href="/client/pricing">
                <li className="hover:text-[#614bef] cursor-pointer transition-all duration-300">
                  Pricing
                </li>
              </Link>

              <Link href="/client/about">
                <li className="hover:text-[#614bef] cursor-pointer transition-all duration-300">
                  About
                </li>
              </Link>

              <Link href="/client/blog">
                <li className="hover:text-[#614bef] cursor-pointer transition-all duration-300">
                  Blog
                </li>
              </Link>
            </ul>
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <button className="text-lg font-medium hover:text-white hover:bg-[#614bef] px-4 py-2 rounded-[8px] border border-gray-400 transition-all duration-300">
              Log in
            </button>

            <button className="flex items-center gap-2 text-lg font-medium bg-[#614bef] text-white hover:bg-[#452ed8] px-5 py-2 rounded-[8px] transition-all duration-300">
              <FaRobot />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-[#614bef]"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            <li className="hover:text-[#614bef] cursor-pointer">Home</li>

            <li className="hover:text-[#614bef] cursor-pointer">Features</li>

            <li className="hover:text-[#614bef] cursor-pointer">Pricing</li>

            <li className="hover:text-[#614bef] cursor-pointer">About</li>

            <li className="hover:text-[#614bef] cursor-pointer">Blog</li>
          </ul>

          <div className="flex flex-col gap-4 px-6 mt-6">
            <button className="w-full text-lg font-medium hover:text-white hover:bg-[#614bef] px-4 py-3 rounded-[8px] border border-gray-400 transition-all duration-300">
              Log in
            </button>

            <button className="w-full flex items-center justify-center gap-2 text-lg font-medium bg-[#614bef] text-white hover:bg-[#452ed8] px-5 py-3 rounded-[8px] transition-all duration-300">
              <FaRobot />
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
