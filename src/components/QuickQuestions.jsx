"use client";
import {
  User,
  Briefcase,
  Layers,
  Handshake,
  GraduationCap,
  Smile,
} from "lucide-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function QuickQuestions({ setQuery, getAIResponse }) {
  const questions = [
    {
      icon: User,
      text: "Me",
      color: "text-teal-600",
      prompt: "Tell me about Usman Ali in a short introduction.",
    },
    {
      icon: Briefcase,
      text: "Projects",
      color: "text-green-600",
      prompt: "Show me Usman Ali's projects.",
    },
    {
      icon: Layers,
      text: "Skills",
      color: "text-purple-600",
      prompt: "List Usman Ali's technical skills.",
    },
    {
      icon: Handshake,
      text: "Contact",
      color: "text-orange-600",
      prompt: "Give me Usman Ali's contact information.",
    },
    {
      icon: GraduationCap, // replace with your education icon
      text: "Education",
      color: "text-blue-600",
      prompt: "Tell me about Usman Ali's education.",
    },
    {
      icon: HiOutlineDotsHorizontal,
      text: "",
      color: "text-gray-600",
      prompt: "Tell me something about Usman Ali's career journey.",
    },
  ];
  const handleClick = (prompt) => {
    setQuery(prompt);
    getAIResponse(prompt);
  };

  return (
    <div className="flex justify-center py-2">
      <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
        {questions.map((question, index) => {
          const IconComponent = question.icon;
          return (
            <button
              key={index}
              onClick={() => handleClick(question?.prompt)}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <IconComponent className={`w-5 h-5 ${question.color}`} />
              {question.text && (
                <span className="text-gray-700 font-medium text-sm">
                  {question.text}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickQuestions;
