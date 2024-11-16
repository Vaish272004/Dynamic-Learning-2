import React from 'react';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { Course } from '../types';

const recommendedCourses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Master the basics of web development with HTML, CSS, and JavaScript",
    modules: ["HTML5 Basics", "CSS3 Styling", "JavaScript Fundamentals", "Responsive Design"],
    duration: "8 weeks",
    category: "Technology"
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Learn the core concepts of data science and analysis",
    modules: ["Statistics Basics", "Python for Data", "Data Visualization", "Machine Learning Intro"],
    duration: "12 weeks",
    category: "Technology"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    description: "Develop comprehensive digital marketing skills",
    modules: ["Social Media Marketing", "SEO Fundamentals", "Content Strategy", "Analytics"],
    duration: "6 weeks",
    category: "Business"
  }
];

export default function Courses({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-[#2a5298] mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <h1 className="text-3xl font-bold text-[#2a5298] mb-8">Recommended Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Modules
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {course.modules.map((module, index) => (
                      <li key={index}>{module}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-[#2a5298] text-white py-2 rounded-lg hover:bg-[#1e3c70] transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}