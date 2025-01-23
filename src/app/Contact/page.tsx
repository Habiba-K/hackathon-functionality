import React from "react";
import NavAfterLogin from "../NavAfterLogin/page";
import Banner from "./banner";
import DiffContact from "./DiffContact";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <NavAfterLogin></NavAfterLogin>
      <br />
      <Banner></Banner>
      <DiffContact></DiffContact>
      <div className="mt-2 flex justify-center">
      <Image
        src="/images/teamarrow.png"
        alt="team5"
        width={25}
        height={35}
        className="object-cover font-bold"
      />
      </div>
      <div className="text-center mb-12 mt-5 ">
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto font-bold">
          WE CAN'T WAIT TO MEET YOU
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Talk</h2>

        <button className="rounded bg-[#23A6F0] text-white md:mr-10 font-bold px-10 py-3">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default page;
