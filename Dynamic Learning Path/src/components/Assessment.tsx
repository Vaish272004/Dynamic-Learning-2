import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

const careerQuestions = [
  {
    question: "What type of work environment do you prefer?",
    options: ["Creative and flexible", "Structured and organized", "Fast-paced and dynamic", "Research-oriented", "People-focused"]
  },
  {
    question: "Which skill interests you the most?",
    options: ["Problem-solving", "Communication", "Technical analysis", "Creative design", "Strategic planning"]
  },
  {
    question: "What's your preferred way of learning?",
    options: ["Hands-on practice", "Visual demonstrations", "Reading and research", "Group discussions", "Self-paced online"]
  },
  {
    question: "Which industry interests you most?",
    options: ["Technology", "Healthcare", "Business", "Arts and Design", "Education"]
  },
  {
    question: "What's your career goal?",
    options: ["Build innovative solutions", "Help others", "Lead teams", "Create and design", "Analyze and optimize"]
  }
];

export default function Assessment({ onComplete }: { onComplete: (results: number[]) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    if (newAnswers.length === careerQuestions.length) {
      onComplete(newAnswers);
    } else {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <GraduationCap className="w-12 h-12 text-[#2a5298]" />
        </div>
        <h1 className="text-3xl font-bold text-center text-[#2a5298] mb-8">
          Career Path Assessment
        </h1>
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#2a5298] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / careerQuestions.length) * 100}%` }}
            />
          </div>
          <p className="text-center mt-2 text-gray-600">
            Question {currentQuestion + 1} of {careerQuestions.length}
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {careerQuestions[currentQuestion].question}
          </h2>
          <div className="space-y-3">
            {careerQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#2a5298] hover:bg-[#f0f4f8] transition-all duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}