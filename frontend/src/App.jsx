import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import LmsLayout from './layouts/LmsLayout';
import Dashboard from './pages/lms/Dashboard';
import Courses from './pages/lms/Courses';
import CourseDetail from './pages/lms/CourseDetail';
import Profile from './pages/lms/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected LMS Routes */}
        <Route path="/lms" element={<ProtectedRoute />}>
          <Route element={<LmsLayout />}>
            {/* Redirect /lms directly to /lms/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />
            
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="calendar" element={<div className="p-8">Calendar Placeholder</div>} />
          </Route>
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
