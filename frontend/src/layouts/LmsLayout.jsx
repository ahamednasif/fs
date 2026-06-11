import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const LmsLayout = () => {
  const location = useLocation();
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('dashboard')) return 'Dashboard';
    if (path.includes('courses')) return 'All Courses';
    if (path.includes('calendar')) return 'Calendar';
    if (path.includes('profile')) return 'Profile';
    return 'LMS';
  };

  return (
    <div className="flex h-screen w-full bg-[#FFFDF8] font-sans text-gray-800 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 shrink-0 relative z-10">
          <h1 className="text-2xl font-serif font-bold text-gray-800">{getPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-gray-800">Jane Student</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#E91E63] font-bold border-2 border-white shadow-sm overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LmsLayout;
