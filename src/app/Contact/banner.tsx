import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative w-full h-[900px] md:h-[500px]">
        <div className="container mx-auto flex px-5 py-20  md:flex-row flex-col items-center w-full md:w-[90%] lg:max-w-[1440px] h-[400px] md:h-[500px]">
          <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="text-[#252B42] text-sm md:text-lg font-bold">
              CONTACT US
            </p>
            <h1 className="text-[#252B42] text-2xl  md:text-4xl font-bold my-4 text-bg justify-center title-font sm:text-4xl  mb-4  md:leading-[3.5rem] xl:leading-[4rem]">
              Get in touch today!
            </h1>
            <p className="mb-8 leading-relaxed text-xs md:text-base max-w-[300px] md:max-w-none text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </p>
            <p className="text-sm font-bold text-[#252B42]">Phone: +451 215 215</p>
            <p className="text-sm font-bold text-[#252B42]">Fax: +451 215 215</p>
            <div className="flex  justify-center">
             <Button size={"icon"} className="rounded-full">
                <FaTwitter className="text-blue-500 w-5 h-5  " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaFacebook className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaInstagram className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaLinkedin className="text-blue-500 w-5 h-5 " />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
            <img
              className=" object-contain "
              alt="hero"
              src="/images/contactimg.png"
            />
          </div>
        </div>
      </section>
   
    </div>
  );
};
export default Banner;
