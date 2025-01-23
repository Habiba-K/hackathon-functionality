import React from "react";
import Arrow from "./arrow";
import Image from "next/image";
const AdditionalDetails = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto h-[72px] grid grid-cols-1 sm:grid-cols-3 place-items-center  border-b-2">
        <span className="font-semibold text-xs sm:text-sm leading-[24px]  text-[#737373]">
          Description
        </span>
        <span className="font-semibold text-xs sm:text-sm leading-[24px]  text-[#737373]">
          Additional Information
        </span>
        <span className="font-semibold text-xs sm:text-sm leading-[24px] flex text-[#737373]">
          Reviews
          <h1 className="text-xs sm:text-sm leading-sm text-[#23856D]">(0)</h1>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 items-center justify-center bg-white">
        {/* Image Section */}
        <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg place-items-center overflow-hidden">
          <Image
            src="/images/productReview.png"
            alt="Interior Design"
            width={323}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row  justify-center ">
          {/* Text Block */}
          <div className="w-full sm:w-[332px] space-y-4 gap-[5px]">
            <h2 className="text-sm md:text-[24px] font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-xs sm:text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-bold text-xs sm:text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373]  font-bold text-xs sm:text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* List Section */}
          <div className="space-y-6  justify-center gap-[30px]">
            {/* First List */}
            <div>
              <h3 className="text-sm md:text-[24px] font-semibold text-gray-800 mb-[20px]">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-bold text-xs sm:text-sm leading-[20px]">
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>

            {/* Second List */}
            <div>
              <h3 className="text-sm md:text-[24px] font-bold text-gray-800">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-bold text-xs sm:text-sm leading-[20px]">
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <Arrow></Arrow>
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
