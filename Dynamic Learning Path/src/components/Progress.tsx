import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { UserProgress } from '../types';
import { ArrowLeft } from 'lucide-react';

const COLORS = ['#2a5298', '#4CAF50', '#FFC107', '#9C27B0'];

export default function Progress({ 
  progress,
  onBack
}: { 
  progress: UserProgress[];
  onBack: () => void;
}) {
  const completionData = progress.map(p => ({
    courseId: `Course ${p.courseId}`,
    completion: p.completion
  }));

  const timeData = progress.map(p => ({
    courseId: `Course ${p.courseId}`,
    hours: Math.round(p.timeSpent / 3600)
  }));

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

        <h1 className="text-3xl font-bold text-[#2a5298] mb-8">Your Learning Progress</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Course Completion Rates</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={completionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="courseId" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completion" fill="#2a5298" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Time Spent (Hours)</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeData}
                    dataKey="hours"
                    nameKey="courseId"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    label
                  >
                    {timeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}