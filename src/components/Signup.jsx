
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-phlox text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition duration-200">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-phlox hover:text-purple-700">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
