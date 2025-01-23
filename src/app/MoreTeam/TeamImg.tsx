import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Arrow from "../ProductDetails/arrow";
const TeamImg= () => {
  return (
    <div className="bg-[#FAFAFA]  mt-7">
      <div className="text-center ">
      <p className="text-gray-500 text-sm md:text-base pb-4">
            WHAT WE DO
            </p>
            <h2 className="text-lg md:text-2xl font-bold mb-2">
            Innovation tailored for you
            </h2>
      </div>
      {/* Breadcrumb */}
      <div className="w-full h-[44px] flex justify-center px-20">
          <div className="flex items-center gap-[15px] ">
            <div className="font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Arrow></Arrow>
            <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Team
            </h6>
          </div>
        </div>
      <section className="py-12 md:py-16  sm:p-32 ">
        <div className=" mx-auto px-4 ">
          {/* Title */}
          {/* Grid */}
          <div className=" grid grid-cols-1  lg:grid-cols-3 gap-3 w-full lg:max-w-[1440px] mx-auto mt-2 ">
            {/* First Column (MEN) */}
            <div className="relative flex justify-center">
              <Image
                src="/images/team1.png"
                alt="team1"
                width={424}
                height={424}
                className=" md:w-[510px] md:h-[400px] object-cover "
              />
              
            </div>

            {/* Second Column  */}
            <div className="sm:grid grid-rows-1 lg:grid-rows-2 gap-4 justify-center ">
              
              <div className="relative ">
                <Image
                  src="/images/team2.png"
                  alt="team2"
                  width={424}
                  height={424}
                  className="object-cover md:w-[260px] md:h-[200px]"
                />
              </div>
           
              <div className="relative">
                <Image
                  src="/images/team3.png"
                  alt="team3"
                  width={424}
                  height={424}
                  className="object-cover md:w-[260px] md:h-[185px]"
                />
                
              </div>
            </div>

            {/* Third Column with Two Rows */}
            <div className="grid grid-rows-1 lg:grid-rows-2 gap-4 justify-center ">
              
              <div className="relative ">
                <Image
                  src="/images/team4.png"
                  alt="team4"
                  width={424}
                  height={424}
                  className="object-cover md:w-[260px] md:h-[200px]"
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/team5.png"
                  alt="team5"
                  width={424}
                  height={424}
                  className="object-cover md:w-[260px] md:h-[185px]"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamImg;
