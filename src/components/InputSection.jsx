"use client";

import { Loader2, Send } from "lucide-react";

function InputSection({ query, setQuery, getAIResponse, loading }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative max-md:px-1 w-full md:w-2/4">
        <input
          disabled={loading}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter" && query) {
              getAIResponse(query);
            }
          }}
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Ask me anything..."}
          className="w-full px-4 py-2 border border-black/25 rounded-full h-16 pr-16"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white rounded-full p-3 transition-colors duration-200 flex items-center justify-center"
          style={{ cursor: !query || loading ? "not-allowed" : "pointer" }}
          onClick={() => getAIResponse(query)}
          disabled={loading || !query}
        >
          {loading ? (
            <Loader2 className="animate-spin w-4 h-4" />
          ) : (
            <Send size={20} className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default InputSection;
