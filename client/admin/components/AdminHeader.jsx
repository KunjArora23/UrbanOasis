import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold text-blue-900">Urban Oasis Admin</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-gray-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            A
          </div>
          <button 
            className="text-red-600 hover:text-red-800 text-sm font-medium" 
            onClick={() => navigate('/auth')}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;