"use client";
import {
  User,
  Briefcase,
  Layers,
  Sparkles,
  Handshake,
  Smile,
} from "lucide-react";

function QuickQuestions() {
  const questions = [
    { icon: User, text: "Me", color: "text-teal-600" },
    { icon: Briefcase, text: "Projects", color: "text-green-600" },
    { icon: Layers, text: "Skills", color: "text-purple-600" },
    { icon: Sparkles, text: "Fun", color: "text-pink-600" },
    { icon: Handshake, text: "Contact", color: "text-orange-600" },
    { icon: Smile, text: "", color: "text-gray-600" },
  ];

  const handleQuestionClick = (text) => {
    if (text) {
      console.log(`Clicked: ${text}`);
      // Add your click handler logic here
    }
  };

  return (
    <div className="flex justify-center py-2">
      <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
        {questions.map((question, index) => {
          const IconComponent = question.icon;
          return (
            <button
              key={index}
              onClick={() => handleQuestionClick(question.text)}
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
