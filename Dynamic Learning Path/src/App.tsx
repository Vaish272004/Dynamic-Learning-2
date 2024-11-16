import React, { useState } from 'react';
import Assessment from './components/Assessment';
import Home from './components/Home';
import Progress from './components/Progress';
import Courses from './components/Courses';
import { UserProfile } from './types';

const mockUserProfile: UserProfile = {
  name: "User",
  email: "user@example.com",
  interests: ["Web Development", "Data Science"],
  enrolledCourses: [1, 2],
  progress: [
    { courseId: 1, completion: 75, timeSpent: 28800 }, // 8 hours
    { courseId: 2, completion: 45, timeSpent: 18000 }, // 5 hours
  ]
};

function App() {
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleAssessmentComplete = (results: number[]) => {
    // In a real app, we would use these results to customize course recommendations
    console.log('Assessment results:', results);
    setHasCompletedAssessment(true);
  };

  if (!hasCompletedAssessment) {
    return <Assessment onComplete={handleAssessmentComplete} />;
  }

  switch (currentPage) {
    case 'progress':
      return <Progress progress={mockUserProfile.progress} onBack={() => setCurrentPage('home')} />;
    case 'courses':
      return <Courses onBack={() => setCurrentPage('home')} />;
    default:
      return (
        <Home
          userProfile={mockUserProfile}
          onNavigate={setCurrentPage}
        />
      );
  }
}

export default App;