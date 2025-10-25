import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react'; // Using lucide-react for icons

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="text-center bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-md w-full">
        <AlertTriangle className="mx-auto h-24 w-24 text-red-500 mb-6" />
        
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-600 tracking-wider">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4 mb-2">
          Page Not Found
        </h2>
        
        <p className="text-base md:text-lg text-gray-500 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <Home className="mr-2 h-5 w-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
