import React from 'react';

const Universe = () => {
  return (
      <div className="mt-10 w-full h-[810px]  bg-[#23856D] max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-center md:p-20">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 px-5 sm:text-center lg:px-10 mt-8 lg:mt-10">
          <h5 className="text-white text-sm lg:text-base font-bold mb-3">
            SUMMER 2020
          </h5>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-4">
          Vita Classic <br />Product
          </h2>
          <h4 className="text-white text-sm sm:text-base lg:text-lg leading-6 mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className=" flex flex-wrap justify-center gap-4 ">
            
            <button className=" font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              $16.48
            </button>
            <button className="bg-[#2DC071] font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
          <div className="relative">
            <img
              src="/images/col-md-6 (1).png"
              alt="Asian"
              className="w-[90%] max-w-[1440px] sm:max-w-[500px] lg:w-[725px] lg:h-[710px] object-cover ml-18"
            />
          </div>
        </div>
      </div>
  );
};

export default Universe;