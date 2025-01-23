import React from "react";
import Topbar from "../Components/topbar";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Clients from "../Components/Clients";
import Arrow from "../ProductDetails/arrow";
import ProductCrousel from "../Components/ProductCrousel";

const page = () => {
  return (
    <div>
      <Topbar bgColor="bg-[#23856D]"></Topbar>
      <Navbar /> 
      {/* Shop Section */}
      <div className="mt-7 md:mt-9 ">
        {/* category */}
        <section>
          <div className="px-4 md:px-8 text-[#2A254B] mt-5 bg-[#FAFAFA]">
            {/* Title */}
            <div className=" lg:max-w-[1440px] mx-auto h-[44px] flex flex-col justify-center md:flex-row items-center ">
              {/* Shop Title */}
              <div className="w-full h-[32px] flex justify-center md:justify-start items-center mb-[8px] ">
                <h2 className="font-bold text-[24px] leading-[32px] text-[#252B42] mt-5">
                  Shop
                </h2>
              </div>
              {/* Breadcrumb */}
              <div className="w-full h-[44px] flex  items-center justify-center md:justify-end gap-[5px]">
                <div className="flex items-center gap-[15px] ">
                  <div className="font-bold text-[14px] leading-[24px] text-[#252B42]">
                    Home
                  </div>
                  <Arrow></Arrow>
                  <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                    Shop
                  </h6>
                </div>
              </div>
            </div>
            {/* Product Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-12   md:pr-0 md:pl-0">
              {/* Product 1 */}
              <div className=" h-auto">
                <Image
                  src={"/images/cat1.png"}
                  height={700}
                  width={700}
                  alt="chair"
                  className=" object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </div>

              {/* Product 2 */}
              <div className=" h-auto">
                <Image
                  src={"/images/cat2.png"}
                  height={700}
                  width={700}
                  alt="vase"
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </div>

              {/* Product 3 */}
              <div className=" h-auto">
                <Image
                  src={"/images/cat3.png"}
                  height={700}
                  width={700}
                  alt="silky vase"
                  className=" object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </div>

              {/* Product 4 */}
              <div className="h-auto">
                <Image
                  src={"/images/cat4.png"}
                  height={700}
                  width={700}
                  alt="lamp"
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </div>
              <div className="h-auto">
                <Image
                  src={"/images/cat5.png"}
                  height={700}
                  width={700}
                  alt="lamp"
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* popularity */}
      <div className="mt-3 md:mt-0 bg-white py-4 w-[100%] lg:max-w-[1440px] mx-auto flex flex-col justify-center items-center md:flex-row  ">
        <div className=" h-[98px] grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center md:place-items-start ">
          <div className="h-[50px]  items-center flex justify-center md:justify-between">
            <div className="font-bold text-[14px] leading-[24px] text-[#737373]  ">
              Showing all 12 results
            </div>
          </div>
          <div className="w-[177px] h-[46px]  flex gap-[15px] justify-center items-center ">
            <h6 className="ont-bold text-[14px] leading-[24px] text-[#737373]">
              Views:
            </h6>
            <Image
              src="/images/grid.png"
              alt="grid"
              width={46}
              height={46}
              className="flex justify-center"
            />
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={46}
              height={46}
              className="flex justify-center"
            />
          </div>
          <div className="w-[252px] px-[1px] flex  gap-[15px] pt-2 md:pt-0">
            <select className="p-2 sm:p-4  w-[141px] h-[50px] border border-[#DDDDDD] text-[14px] rounded-lg leading-[28px] text-[#737373]">
              <option>Popularity</option>
            </select>
            <button className="w-[94px] h-[50px] px-[20px] py-[10px] flex gap-[10px] bg-[#23A6F0] rounded-lg">
              <h6 className="font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>
     <Clients></Clients>
    <ProductCrousel/>
    </div>
  );
};

export default page;
