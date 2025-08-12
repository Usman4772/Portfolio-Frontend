"use client";

import { useState } from "react";
import Logo from "./Logo";

function BrandingHeader() {
  return (
    <div className=" flex flex-col items-center justify-center py-2 gap-2 px-4">
      <Logo />

      <div className="text-center">
        <h2 className="text-xl font-medium text-gray-700">
          Hey, I&apos;m Usman{" "}
          <span className="inline-block animate-bounce">👋</span>
        </h2>
      </div>

      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
          AI Portfolio
        </h1>
      </div>
    </div>
  );
}

export default BrandingHeader;
