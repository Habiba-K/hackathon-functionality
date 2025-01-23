"use client";
import Image from "next/image";
const Neutraluniverse = () => {
  return (
    <section className="flex flex-cols-2 md:flex-rows justify-center">
      <div className="md:grid md:grid-cols-2 items-center md:text-start  py-8  sm:py-16 xl:px-32">
        <img
          className="rounded-lg "
          src="../images/col-md-6 (2).png"
          alt=""
          width={400}
          height={400}
        />
        <div>
          <div className="w-full pl-5 sm:pl-0  sm:text-center md:text-start lg:px-10 mt-8 lg:mt-10">
            <h5 className="text-[#BDBDBD] text-sm lg:text-base font-bold mb-3">
            SUMMER 2020
            </h5>
            <h2 className=" text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-4">
            Part of the Neural 
            Universe
            </h2>
            <h4 className=" text-sm sm:text-base lg:text-lg leading-6 mb-6">
              We know how large objects will act, <br />
              but things on a small scale.
            </h4>
            <div className=" flex flex-wrap  gap-4 ">
            <button className="bg-[#2DC071] font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                Buy Now
              </button>
              <button className="border-2 border-emerald-400 font-bold  px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                Read More
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Neutraluniverse;
