"use client";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";

export default function DashboardPage() {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    console.log("Search:", input);
  };

  return (
    <div className="p-4">
      <nav className="flex justify-between items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-md lg:text-xl font-semibold">
            Welcome back, Rajibul!
          </h2>
          <p className="text-sm text-gray-600">
            Lets achieve your career goals together.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <IoMdSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="border rounded-lg pl-10 pr-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>

          {/* Bell */}
          <FaRegBell className="text-xl cursor-pointer" />

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              width={40}
              height={40}
              alt="profile"
              className="object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
