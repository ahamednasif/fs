import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Calendar, User, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full shrink-0 shadow-sm">
      <div className="p-6 flex items-center justify-center border-b border-gray-50">
        <div className="w-16 h-16 bg-[#E91E63] rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl shadow-sm">
          FS
        </div>
      </div>
      
      <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
        <NavLink 
          to="/lms/dashboard" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-[#E91E63] text-white shadow-md shadow-pink-500/20' : 'text-gray-600 hover:bg-pink-50 hover:text-[#E91E63]'}`
          }
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="/lms/courses" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-[#E91E63] text-white shadow-md shadow-pink-500/20' : 'text-gray-600 hover:bg-pink-50 hover:text-[#E91E63]'}`
          }
        >
          <BookOpen size={20} />
          <span className="font-medium">All Courses</span>
        </NavLink>
        
        <NavLink 
          to="/lms/calendar" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-[#E91E63] text-white shadow-md shadow-pink-500/20' : 'text-gray-600 hover:bg-pink-50 hover:text-[#E91E63]'}`
          }
        >
          <Calendar size={20} />
          <span className="font-medium">Calendar</span>
        </NavLink>
        
        <NavLink 
          to="/lms/profile" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-[#E91E63] text-white shadow-md shadow-pink-500/20' : 'text-gray-600 hover:bg-pink-50 hover:text-[#E91E63]'}`
          }
        >
          <User size={20} />
          <span className="font-medium">Profile</span>
        </NavLink>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
