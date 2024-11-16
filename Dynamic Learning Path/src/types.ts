export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  modules: string[];
  duration: string;
  category: string;
}

export interface UserProgress {
  courseId: number;
  completion: number;
  timeSpent: number;
}

export interface UserProfile {
  name: string;
  email: string;
  interests: string[];
  enrolledCourses: number[];
  progress: UserProgress[];
}