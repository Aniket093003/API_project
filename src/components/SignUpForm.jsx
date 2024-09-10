import React from 'react';

const SignUpForm = ({switchForm}) => {
  return (
    <div className="signup-form flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
        <p className="text-center mt-2">
          Already have an account? 
          <button 
          className="text-blue-500 hover:underline" 
          onClick={() => switchForm('login')}
          >
            Login
            </button>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;