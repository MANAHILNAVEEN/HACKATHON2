"use client"
import React from "react";


const Error = () => {
  return (
    <>
     <div className="w-full h-screen flex items-center justify-center bg-black">
  <div className="text-center p-8 sm:p-10 lg:p-16 bg-white rounded-lg shadow-xl w-full sm:w-[400px] lg:w-[600px]">
    <h1 className="text-9xl font-bold text-orange-400 mb-8 animate-bounce">404</h1>
    <p className="text-xl font-semibold text-gray-700 mb-6">
      Oops! Looks like something went wrong.
    </p>
    <p className="text-sm text-gray-500 mb-6">
      Page cannot be found! Well have it figured out in no time.
    </p>
    <p className="text-sm text-gray-500 mb-8">
      Meanwhile, check out these fresh ideas:
    </p>

    {/* Button */}
    <button
      onClick={() => alert("Menu Clicked")} // Replace this with actual functionality
      className="w-full px-4 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
    >
      Go to Home
    </button>
  </div>
</div>
    </>
  );
};

export default Error;