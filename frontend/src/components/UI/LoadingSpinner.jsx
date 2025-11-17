import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">{message}</p>
          <p className="text-gray-500 text-sm">Getting everything ready for you</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;