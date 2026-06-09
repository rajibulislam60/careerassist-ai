import React from "react";
import { FaRobot, FaRegSun } from "react-icons/fa";
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
} from "react-icons/io5";

export default function Sidebar() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[#614bef] flex items-center justify-center text-white text-xl">
          <FaRobot />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold">
          Career Assistant <span className="text-[#614bef]">AI</span>
        </h3>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
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
            <IoSettingsOutline /> <span>Setting</span>
          </li>
          <li className="flex gap-3 items-center cursor-pointer hover:text-blue-500">
            <FaRegSun /> <span>Light Mode</span>
          </li>
          <li className="flex gap-3 items-center cursor-pointer text-red-500 hover:text-red-700">
            <IoLogOutOutline /> <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
