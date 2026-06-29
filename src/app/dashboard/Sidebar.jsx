"use client";

import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import {
  IoHomeOutline,
  IoChatbubbleEllipsesOutline,
  IoCompassOutline,
  IoDocumentTextOutline,
  IoHardwareChipOutline,
  IoBookOutline,
  IoBookmarkOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoSchoolOutline,
  IoSunnyOutline,
  IoClose,
} from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[30%]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block px-5 py-5 bg-gray-300 min-h-screen">
        <div className="flex items-center gap-2 py-6">
          <div className="w-10 h-10 rounded-full bg-[#614bef] flex items-center justify-center text-white text-xl">
            <FaRobot />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold">
            Career Assistant <span className="text-[#614bef]">AI</span>
          </h3>
        </div>

        <ul className="flex flex-col gap-4">
          <Link href="/dashboard">
            <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
              <IoHomeOutline /> <span>Dashboard</span>
            </li>
          </Link>

          <Link href="/dashboard/chat">
            <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
              <IoChatbubbleEllipsesOutline /> <span>AI Chat</span>
            </li>
          </Link>

          <Link href="/dashboard/roadmap">
            <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
              <IoCompassOutline /> <span>Career Roadmap</span>
            </li>
          </Link>

          <Link href="/dashboard/resume">
            <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
              <IoDocumentTextOutline /> <span>Resume Builder</span>
            </li>
          </Link>
          <Link href="/dashboard/interview">
            <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
              <IoSchoolOutline /> <span>Interview Prep</span>
            </li>
          </Link>

          <Link href="/dashboard/skillanalyzer">
            <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
              <IoHardwareChipOutline /> <span>Skill Analyzer</span>
            </li>
          </Link>

          <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
            <IoBookOutline /> <span>Learning Plan</span>
          </li>

          <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
            <IoBookmarkOutline /> <span>Saved Content</span>
          </li>

          <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
            <IoPersonOutline /> <span>Profile</span>
          </li>

          <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
            <IoSettingsOutline /> <span>Settings</span>
          </li>

          <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
            <IoSunnyOutline /> <span>Light Mode</span>
          </li>

          <li className="flex gap-3 items-center cursor-pointer text-red-500 hover:text-red-700">
            <IoLogOutOutline /> <span>Log Out</span>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden px-5 bg-amber-400">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" text-3xl text-[#614bef]"
        >
          {menuOpen ? <IoClose /> : <HiOutlineMenuAlt4 />}
        </button>
        {menuOpen && (
          <div className="h-screen bg-gray-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 py-2">
                <div className="w-10 h-10 rounded-full bg-[#614bef] flex items-center justify-center text-white text-xl">
                  <FaRobot />
                </div>

                <h3 className="text-xl font-bold">
                  Career Assistant <span className="text-[#614bef]">AI</span>
                </h3>
              </div>
            </div>

            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoHomeOutline /> <span>Dashboard</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoChatbubbleEllipsesOutline /> <span>AI Chat</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoCompassOutline /> <span>Career Roadmap</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoDocumentTextOutline /> <span>Resume Builder</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoSchoolOutline /> <span>Interview Prep</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoHardwareChipOutline /> <span>Skill Analyzer</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoBookOutline /> <span>Learning Plan</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoBookmarkOutline /> <span>Saved Content</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoPersonOutline /> <span>Profile</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoSettingsOutline /> <span>Settings</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
                <IoSunnyOutline /> <span>Light Mode</span>
              </li>

              <li className="flex gap-3 items-center cursor-pointer text-red-500 hover:text-red-700">
                <IoLogOutOutline /> <span>Log Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
