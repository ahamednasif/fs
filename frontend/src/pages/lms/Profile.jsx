import React from 'react';

const Profile = () => {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Your Profile</h2>
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-50 max-w-2xl">
        <p className="text-gray-500 mb-4">Profile settings placeholder</p>
        <div className="space-y-4">
           {/* Placeholder fields */}
           <div className="h-12 bg-gray-50 rounded-xl w-full"></div>
           <div className="h-12 bg-gray-50 rounded-xl w-full"></div>
           <div className="h-12 bg-gray-50 rounded-xl w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
