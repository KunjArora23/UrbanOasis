import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Urban Oasis  - User Dashboard</h1>
          <button 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded" 
            onClick={() => navigate('/auth')}
          >
            Logout
          </button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Welcome to your Dashboard</h2>
          <p>You are logged in as a user.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;