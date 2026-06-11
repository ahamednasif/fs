import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-serif font-bold text-gray-800">Course Viewer</h2>
      <div className="w-full aspect-video bg-gray-900 rounded-2xl shadow-md flex items-center justify-center text-white">
        <p className="text-gray-400">Video Player Placeholder for Course ID: {id}</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-50">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Course Information</h3>
        <p className="text-gray-500">Details and resources for you to download...</p>
      </div>
    </div>
  );
};

export default CourseDetail;
