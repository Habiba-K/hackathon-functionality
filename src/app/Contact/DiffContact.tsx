"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DiffContact = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="w-full max-w-[1440px] mx-auto sm:px-6 text-center">
        <p className="text-gray-600 mt-2">VISIT OUR OFFICE</p>
        <h2 className=" text-base sm:text-2xl lg:text-3xl font-bold text-gray-800">
          We help small businesses with big ideas
        </h2>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Free Plan */}
          <div className=" rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 border-2 hover:shadow-md hover:border-gray-500 ">
          <div className="flex justify-center">
          <Image
                  src="/images/phone.png"
                  alt="team5"
                  width={50}
                  height={50}
                  className="object-cover "
                />
            </div>
            <p className="text-gray-600 text-xs sm:text-base mt-2">georgia.young@example.com</p>
            <p className="text-gray-600 text-xs sm:text-base mt-2">georgia.young@ple.com</p>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800">Get Support</h2>
            <div className="ml-3 mt-4">
              <button className="rounded-full bg-white text-blue-400 border border-blue-400 md:mr-10 font-bold px-2 sm:px-10 py-3">
                Submit Request
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className=" bg-gray-700 rounded p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 border-2 hover:shadow-md hover:border-gray-500 ">
          <div className="flex justify-center">
          <Image
                  src="/images/location.png"
                  alt="team5"
                  width={50}
                  height={50}
                  className="object-cover "
                />
            </div>
            <p className="text-white text-xs sm:text-base mt-2">georgia.young@example.com</p>
            <p className="text-white text-xs sm:text-base mt-2">georgia.young@ple.com</p>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">Get Support</h2>
            <div className="ml-3 mt-4">
              <button className="rounded-full  text-blue-400 border border-blue-400 md:mr-10 font-bold px-2 sm:px-10 py-3">
                Submit Request
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className=" rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 border-2 hover:shadow-md hover:border-gray-500 ">
          <div className="flex justify-center">
          <Image
                  src="/images/envelop.png"
                  alt="team5"
                  width={50}
                  height={50}
                  className="object-cover "
                />
            </div>
            <p className="text-gray-600 text-xs sm:text-base mt-2">georgia.young@example.com</p>
            <p className="text-gray-600 text-xs sm:text-base mt-2">georgia.young@ple.com</p>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800">Get Support</h2>
            <div className="ml-3 mt-4">
              <button className="rounded-full bg-white text-blue-400 border border-blue-400 md:mr-10 font-bold px-2 sm:px-10 py-3">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiffContact;
