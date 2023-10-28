import { useState } from 'react';

function HeroInitial() {
  return (
    <div className=" py-12 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">
              Welcome to <span className="text-blue-500">wypen</span>
            </h1>
            <p className="text-lg mb-6 leading-relaxed">
              Discover how we blend sustainability with innovation, offering eco-friendly products and initiatives to create a greener future.
            </p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-md text-sm uppercase font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300">
              Explore More
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="andrew-coelho-aL7SA1ASVdQ-unsplash.jpg" alt="Nature" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroInitial;
