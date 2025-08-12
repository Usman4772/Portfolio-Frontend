import React from "react";
import InputSection from "./InputSection";
import QuickQuestions from "./QuickQuestions";

function Footer() {
  return (
    <div className="w-full min-h-20 py-4 flex flex-col items-center justify-center">
      <QuickQuestions />
      <InputSection />
    </div>
  );
}

export default Footer;
