"use client";
import React from "react";
import { useState } from "react";

function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-all duration-300 ${
            isHovered ? "rotate-12 scale-110" : ""
          }`}
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          />
        </svg>
      </div>

      <div
        className={`absolute inset-0 rounded-full  transition-all duration-300 ${
          isHovered ? "scale-125 opacity-100" : "scale-100 opacity-0"
        }`}
      ></div>
    </div>
  );
}

export default Logo;
