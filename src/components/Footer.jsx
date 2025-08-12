import React from "react";
import InputSection from "./InputSection";
import QuickQuestions from "./QuickQuestions";

function Footer({ query, setQuery, getAIResponse, loading }) {
  return (
    <div className="w-full min-h-20 py-4 flex flex-col items-center justify-center">
      <QuickQuestions />
      <InputSection
        query={query}
        setQuery={setQuery}
        getAIResponse={getAIResponse}
        loading={loading}
      />
    </div>
  );
}

export default Footer;
