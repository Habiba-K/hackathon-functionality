import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
const HeroSection = () => {
  return (
     // Main Hero Section
     <div>
      <br /> 
      <div className='mt-2 w-full h-[750px] bg-[url("/images/shop-hero-1-product-slide-1.jpg")] bg-cover bg-center  flex items-center'>
      <div className='container mx-auto px-2 py-16'>
        {/* Content */}
        <div className='text-white md:ml-44'>
          <p className='font-semibold text-lg'>SUMMER 2020</p>
          <h1 className='font-semibold text-[32px] md:text-[58px] leading-[80px] tracking-[0.2px] mt-6'>
            NEW COLLECTION
          </h1>
          <p className='text-lg mt-7 tracking-[0.2px]'>
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <Link href="/Shop">
            <button className='mt-8 rounded-md px-6 py-3 bg-[#2DC071] font-semibold text-xl'>
            SHOP NOW
            </button>
          </Link>
        </div>
      </div>
        </div>
      </div>
    // <div className="bg-white mt-2">
    //   <section className="relative w-full  ">
    //     {/* Background Image */}
    //     <div className="w-full lg:max-w-[1440px] mx-auto h-[260px] sm:h-[400px] md:h-[550px]  lg:h-[716px]">
    //       <Image
    //         src="/images/shop-hero-1-product-slide-1.jpg"
    //         alt="New Collection"
    //         fill
    //         className="object-contain"
    //         priority
    //       />
    //       {/* Text Overlay */}
    //       <div className="absolute inset-0 flex flex-col md:p-40 items-center sm:items-start justify-center text-white px-4">
    //         <p className="text-sm md:text-lg font-medium">SUMMER 2020</p>
    //         <h1 className="text-2xl  md:text-4xl font-bold my-4 text-white">
    //           NEW COLLECTION
    //         </h1>
    //         <p className="text-xs md:text-base max-w-[300px] md:max-w-none">
    //           We know how large objects will act, but things on a small scale.
    //         </p>
    //         <Link href={"/Shop"}>
    //         <Button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600">
    //           SHOP NOW
              
    //         </Button></Link>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default HeroSection;


