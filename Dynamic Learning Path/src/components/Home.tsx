import React, { useState } from 'react';
import { Book, User, LineChart, Brain } from 'lucide-react';
import { UserProfile } from '../types';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const dailyQuiz: QuizQuestion = {
  question: "What is the key principle of effective learning?",
  options: [
    "Active recall",
    "Passive reading",
    "Cramming information",
    "Studying for long hours"
  ],
  correctAnswer: 0
};

export default function Home({ 
  userProfile,
  onNavigate 
}: { 
  userProfile: UserProfile;
  onNavigate: (page: string) => void;
}) {
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleQuizAnswer = (index: number) => {
    setIsCorrect(index === dailyQuiz.correctAnswer);
    setShowQuizFeedback(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#2a5298]">Welcome back, {userProfile.name}!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => onNavigate('courses')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Book className="w-8 h-8 text-[#2a5298] mb-4" />
            <h2 className="text-xl font-semibold mb-2">Recommended Courses</h2>
            <p className="text-gray-600">Discover personalized learning paths</p>
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <User className="w-8 h-8 text-[#2a5298] mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
            <p className="text-gray-600">View and update your information</p>
          </button>

          <button
            onClick={() => onNavigate('progress')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <LineChart className="w-8 h-8 text-[#2a5298] mb-4" />
            <h2 className="text-xl font-semibold mb-2">Learning Progress</h2>
            <p className="text-gray-600">Track your achievements</p>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-[#2a5298] mr-2" />
            <h2 className="text-xl font-semibold">Daily Knowledge Check</h2>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-800 mb-4">{dailyQuiz.question}</p>
            <div className="space-y-3">
              {dailyQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#2a5298] hover:bg-[#f0f4f8] transition-all duration-200"
                  disabled={showQuizFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showQuizFeedback && (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isCorrect ? 'Correct! Well done!' : 'Not quite right. Try again tomorrow!'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}