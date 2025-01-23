import React from "react";
import Arrow from "../ProductDetails/arrow";

const PricingHeader = () => {
  return (
    <div>
      <div className="w-[95%] md:[90%] lg:max-w-[1440px] mx-auto h-[44px] text-center bg-white ">
        {/* Shop Title */}
        <div className="w-full h-[32px]  mb-[8px] ">
            <p className="font-bold text-[#737373] pb-5">PRICING</p>
          <h2 className="font-bold text-3xl lg:text-[44px] leading-[32px]  text-[#252B42] ">
            Simple Pricing
          </h2>
        </div>
        {/* Breadcrumb */}
        <div className="w-full h-[44px] flex justify-center p-20">
          <div className="flex items-center gap-[15px] ">
            <div className="font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Arrow></Arrow>
            <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Pricing
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
