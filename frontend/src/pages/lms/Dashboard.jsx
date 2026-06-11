import React from 'react';
import { PlayCircle } from 'lucide-react';

const Dashboard = () => {
  const courseProgress = [
    {
      id: 1,
      title: 'Mastering Macarons: The Complete Guide',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      title: 'Artisan Sourdough for Beginners',
      progress: 30,
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050eb0e9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'The Perfect Croissant Workshop',
      progress: 90,
      image: 'https://images.unsplash.com/photo-1626263468007-88eb7c229f3d?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-500 font-serif">Welcome back, Jane!</h2>
        <p className="text-gray-400 mt-1">Jump right back into your baking journey.</p>
      </div>

      <div className="space-y-4">
        {courseProgress.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row items-center gap-6 border border-gray-50 hover:shadow-md transition-shadow">
            <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 w-full space-y-3">
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              
              <div className="space-y-1 w-full">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Progress</span>
                  <span className="text-[#E91E63] font-bold">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#E91E63] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 pt-4 sm:pt-0">
              <button className="w-full sm:w-auto bg-[#E91E63] hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-sm shadow-pink-500/30 flex items-center justify-center gap-2">
                Continue <PlayCircle size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
