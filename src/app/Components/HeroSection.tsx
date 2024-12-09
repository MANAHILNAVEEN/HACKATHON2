'use client'
import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 py-16 lg:py-32">
          
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left lg:pl-12">
            <p className="text-3xl font-semibold text-orange-500">It’s Quick & Amusing!</p>
            <p className="text-4xl lg:text-5xl font-extrabold text-orange-500">
              The <span className="text-white">Art of Speedy Food Quality</span>
            </p>
            <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa conguePrimary color
            </p>
            <button
              onClick={() => alert("Menu Clicked")}
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              See Menu
            </button>
          </div>

          
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <Image src="/Image.png" alt="Hero Image" width={600} height={500} className="rounded-2xl" />
          </div>
        </div>

      <br />

      <div className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg uppercase mb-2">
            About us
          </h3>
          <h2 className="text-4xl font-bold mb-4">
            We <span className="text-yellow-500">Create the best</span> foody product
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span> Lacus nisi, et ac
              dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span> Quisque diam
              pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-600">
            Read More
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/about1.png" // Replace with your image path
              alt="Food item 1"
              className="rounded-lg"
              width={600}
              height={400}
            />
          </div>
          <div>
            <Image
              src="/about2.png" // Replace with your image path
              alt="Food item 2"
              className="rounded-lg"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/about3.png" // Replace with your image path
              alt="Food item 3"
              className="rounded-lg"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-black text-white min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-orange-500 text-lg font-semibold">Why Choose Us</h2>
        <h1 className="text-4xl font-bold my-4">
          <span className="text-orange-500">Extraordinary</span> Taste <br /> And Experienced
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
        <div className="relative group">
          <img
            src="/choose1.png"
            alt="Tacos"
            className="rounded-lg object-cover h-40 w-full transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Tacos</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/choose2.png"
            alt="Burger"
            className="rounded-lg object-cover h-40 w-full transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Burger</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/choose3.png"
            alt="Fried Chicken"
            className="rounded-lg object-cover h-40 w-full transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Fried Chicken</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/choose4.png"
            alt="Cheeseburger"
            className="rounded-lg object-cover h-40 w-full transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Cheeseburger</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/choose5.png"
            alt="Burger and Fries"
            className="rounded-lg object-cover h-40 w-full transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Burger & Fries</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/choose6.png"
            alt="Salad"
            className="rounded-lg object-cover h-40 w-full transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Salad</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-black text-white py-12 px-6">
      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
        {/* Fast Food Service */}
        <div className="bg-orange-500 text-white rounded-lg py-6 flex flex-col items-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="text-5xl mb-4">
            <i className="fas fa-burger"></i>
          </div>
          <h3 className="font-semibold text-xl">Fast Food</h3>
          <p className="text-gray-300 mt-2">Quick and tasty meals to go!</p>
        </div>

        {/* Lunch Service */}
        <div className="bg-orange-500 text-white rounded-lg py-6 flex flex-col items-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="text-5xl mb-4">
            <i className="fas fa-utensils"></i>
          </div>
          <h3 className="font-semibold text-xl">Lunch</h3>
          <p className="text-gray-300 mt-2">Hearty and fulfilling midday meals.</p>
        </div>

        {/* Dinner Service */}
        <div className="bg-orange-500 text-white rounded-lg py-6 flex flex-col items-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="text-5xl mb-4">
            <i className="fas fa-moon"></i>
          </div>
          <h3 className="font-semibold text-xl">Dinner</h3>
          <p className="text-gray-300 mt-2">Satisfying meals for the evening.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-20 px-6">
  <div className="max-w-3xl mx-auto text-center">
    {/* Heading with styled text */}
    <div className="text-6xl font-extrabold text-orange-500 mb-6">
      <span className="text-7xl">30+</span>
      <span className="text-4xl text-gray-300"> Years of Experience</span>
    </div>

    {/* Experience Text */}
    <p className="text-lg font-medium text-gray-300 max-w-2xl mx-auto mb-6">
      With over 30 years in the industry, we bring unparalleled expertise and passion in delivering high-quality services to our customers.
    </p>

  
    {/* 
    {/* Decorative Line */}
    <div className="relative flex justify-center mb-4">
      <div className="absolute inset-0 w-full h-0.5 bg-gray-700"></div>
      <div className="relative text-gray-500 font-medium px-4">Our Expertise</div>
    </div>
  </div>
</div>

<div className="bg-black text-white py-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 text-center">
    {/* Professional Chefs */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      <div className="text-orange-500 text-4xl mb-4">
        <i className="fas fa-hat-chef"></i>
      </div>
      <div className="mb-4">
        <img
          src="/Group (1).png"
          alt="Professional Chefs"
          className="rounded-lg object-cover h-20 w-20 mx-auto mb-4"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-200">Professional Chefs</h3>
      <p className="text-2xl font-extrabold text-orange-500">420</p>
    </div>

    {/* Items Of Food */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      <div className="text-orange-500 text-4xl mb-4">
        <i className="fas fa-hamburger"></i>
      </div>
      <div className="mb-4">
        <img
          src="/Group (2).png"
          alt="Items of Food"
          className="rounded-lg object-cover h-20 w-20 mx-auto mb-4"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-200">Items Of Food</h3>
      <p className="text-2xl font-extrabold text-orange-500">320</p>
    </div>

    {/* Years Of Experience */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      <div className="text-orange-500 text-4xl mb-4">
        <i className="fas fa-utensils"></i>
      </div>
      <div className="mb-4">
        <img
          src="/Group (3).png"
          alt="Years Of Experience"
          className="rounded-lg object-cover h-20 w-20 mx-auto mb-4"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-200">Years Of Experience</h3>
      <p className="text-2xl font-extrabold text-orange-500">30+</p>
    </div>
  </div>
</div>
    

    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What our client are saying
        </h2>
        <div className="max-w-3xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="/Ellipse 6.png" // Replace with your profile image path
              alt="Alamin Hasan"
              className="w-24 h-24 rounded-full shadow-md mb-6"
            />
            <p className="text-2xl font-semibold text-yellow-500">“</p>
            <p className="text-center text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus.
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">Alamin Hasan</p>
              <p className="text-gray-500">Food Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/unsplash_E6DsqnZbZ4o.png" // Replace with your image path
          alt="Delicious Food"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center max-w-4xl mx-auto py-20 px-6 lg:px-8">
        <h2 className="text-yellow-400 text-sm font-semibold uppercase mb-4">
          Restaurant Active Process
        </h2>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          We Document Every Food <br />
          Bean Process Until it is Saved
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="px-6 py-3 text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Read More
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-6.604 3.86A1 1 0 017 14.196V9.804a1 1 0 01.148-.532l6.604 3.86z"
              />
            </svg>
            Play Video
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default HeroSection;
