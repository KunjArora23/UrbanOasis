import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import AdminLoginForm from '../../admin/components/AdminLoginForm';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('userLogin');
  const navigate = useNavigate();

  const handleLogin = (isAdmin) => {
    // Handle login logic here
    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  const handleSignup = () => {
    // Handle signup logic here
    setActiveTab('userLogin');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Auth Toggle */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === 'userLogin' || activeTab === 'userSignup' 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('userLogin')}
            >
              User
            </button>
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === 'adminLogin' 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('adminLogin')}
            >
              Admin
            </button>
          </div>

          {/* User Login Form */}
          {activeTab === 'userLogin' && (
            <LoginForm 
              onLogin={() => handleLogin(false)} 
              onSwitchToSignup={() => setActiveTab('userSignup')} 
            />
          )}

          {/* User Signup Form */}
          {activeTab === 'userSignup' && (
            <SignupForm 
              onSignup={handleSignup} 
              onSwitchToLogin={() => setActiveTab('userLogin')} 
            />
          )}

          {/* Admin Login Form */}
          {activeTab === 'adminLogin' && (
            <AdminLoginForm  />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Urban Oasis . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthPage;
