import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const PersonalInfo = () => {
  return (
    <div>
      <section className="text-gray-600 body-font sticky w-full h-[900px] md:h-[500px]">
        <div className="container mx-auto flex px-5 py-20  md:flex-row flex-col items-center w-full md:w-[90%] lg:max-w-[1440px] h-[400px] md:h-[500px]">
          <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="text-[#252B42] text-sm md:text-lg font-medium">
              SUMMER 2020
            </p>
            <h1 className="text-[#252B42] text-2xl  md:text-4xl font-bold my-4 text-bg justify-center title-font sm:text-4xl  mb-4  md:leading-[3.5rem] xl:leading-[4rem]">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-xs md:text-base max-w-[300px] md:max-w-none text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </p>
            <Link href={"/Shop"}>
              <Button className="mt-6 px-6 py-3 bg-[#23A6F0] text-white font-semibold ">
                Get Quote Now
              </Button>
            </Link>
          </div>
          <div className="flex justify-center lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
            <img
              className=" object-contain "
              alt="hero"
              src="/images/aboutimg.png"
            />
          </div>
        </div>
      </section>
      <div className=" container h-auto mx-auto w-full  lg:max-w-[1440px] md:h-[150px]">
        {/* Company Info */}
        
        <div className="text-[#E74040] mb-8 sm:mb-0 sm:ml-32 ">
            Problems trying
        </div>
        <div className=" grid grid-cols-1  lg:grid-cols-2 gap-2 sm:p-10 place-items-center place-content-center h-[96px]">
          {/* Side 1 */}
          <div className=" text-[#252B42] font-bold ml-4 sm:ml-0 text-sm sm:text-xl md:w-[394px] place-items-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </div>

          {/* Side 2 */}
          <div className="sm:w-[394px] text-[#737373] mb-7 sm:mb-0 text-xs sm:text-sm ml-4 sm:ml-0">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
