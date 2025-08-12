"use client";

import { Send } from "lucide-react";

function InputSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-2/6">
        <input
          type="text"
          placeholder={"Ask me anything..."}
          className="w-full px-4 py-2 border border-black/25 rounded-full h-16"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white rounded-full p-3 transition-colors duration-200 flex items-center justify-center">
          <Send size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default InputSection;
