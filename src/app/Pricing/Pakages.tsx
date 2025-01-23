"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { GoCheck } from "react-icons/go";
import { Button } from "@/components/ui/button";

type Plan = "monthly" | "yearly";

const Pakages = () => {
  const [plan, setPlan] = useState<Plan>("monthly");

  const pricingData = {
    free: {
      price: "0", 
      features: ["Unlimited product updates","Unlimited product updates","Unlimited product updates"] ,
      unavailablefeatures: ["1GB Cloud storage","Email and community support"]
    },
    standard: {
      monthly: "9.99",
      yearly: "99.99",
      features: ["Unlimited product updates", "Unlimited product updates","Unlimited product updates"],
      unavailablefeatures: ["1GB Cloud storage","Email and community support"]
    },
    premium: {
      monthly: "19.99",
      yearly: "199.99",
      features: ["Unlimited product updates", "Unlimited product updates", "Unlimited product updates"],
      unavailablefeatures: ["1GB Cloud storage","Email and community support"]
    },
  };

  return (
    <div className=" py-10 mt-32">
      <div className="max-w-[1440px] w-full md:[75%] bg-gray-50 mx-auto px-1 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#252B42]">Pricing</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-lg mx-auto">
        Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics 
        </p>

        {/* Plan Toggle */}
        <div className="flex justify-center items-center gap-4 p-5">
          <span className="text-sm text-[#252B42] font-bold">Monthly</span>
          <Switch
            className="border-blue-500"
            checked={plan === "yearly"}
            onChange={(checked) => setPlan(checked ? "yearly" : "monthly")}
          />
          <span className="text-sm  text-[#252B42] font-bold">Yearly</span>
          <div className="bg-[#B2E3FF] text-[#23A6F0] text-xs px-3 py-2 rounded-2xl ml-4">
            Save 25%
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div
            className="md:text-base max-w-lg mx-auto border-2  border-blue-300 rounded-2xl p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 hover:shadow-md hover:border-black "
          >
            <h3 className="text-lg font-bold text-gray-800 ">FREE</h3>
            <p className="mt-2 text-gray-600 md:text-base max-w-lg mx-auto w-[140px] font-bold">Organize across all apps by hand</p>
            <div className="text-3xl font-bold text-blue-500 mt-4">
              {pricingData.free.price} <span className="text-sm  text-[#23A6F0] font-bold">$/per month</span>
            </div>
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              {pricingData.free.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 rounded-lg font-bold text-[#252B42]">
                 <Button color={"blue"}  size={"icon"} className="rounded-full text-white font-bold bg-green-500  ">
                 <GoCheck />
                  </Button> {feature}
                </li>
              ))}
            </ul>
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              {pricingData.free.unavailablefeatures.map((unavailablefeature, idx) => (
                <li key={idx} className="flex items-center gap-2 rounded-lg font-bold text-[#252B42]">
                 <Button color={"gray"}  size={"icon"} className="rounded-full text-white font-bold bg-gray-500 ">
                 <GoCheck />
                  </Button> {unavailablefeature}
                </li>
              ))}
            </ul>
            <Button className="rounded bg-blue-400 text-white px-20 mt-6 font-bold hover:bg-black hover:text-white">Try for Free</Button>
          </div>

          {/* Standard Plan */}
          <div
            className=" md:text-base max-w-lg mx-auto border-2 border-blue-300 rounded-2xl p-6 bg-gray-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1">
            <h3 className="text-lg font-bold text-white">STANDARD</h3>
            <p className="mt-2 text-white md:text-base max-w-lg mx-auto w-[140px] font-bold">Organize across all apps by hand</p>
            <div className="text-3xl font-bold text-blue-500 mt-4">
              {plan === "monthly"
                ? pricingData.standard.monthly
                : pricingData.standard.yearly}{" "}
              <span className="text-sm text-[#23A6F0] font-bold">$/month</span>
            </div>
            <ul className="text-sm text-white mt-4 space-y-2">
              {pricingData.standard.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 rounded-lg font-bold text-white">
                  <Button color={"blue"}  size={"icon"} className="rounded-full text-white font-bold bg-green-500 ">
                 <GoCheck />
                  </Button> {feature}
               </li>
                
              ))}
            </ul>
            <ul className="text-sm text-white mt-4 space-y-2">
              {pricingData.standard.unavailablefeatures.map((unavailablefeature, idx) => (
                <li key={idx} className="flex items-center gap-2 rounded-lg font-bold text-white">
                  <Button color={"gray"}  size={"icon"} className="rounded-full text-white font-bold bg-gray-500 ">
                 <GoCheck />
                  </Button> {unavailablefeature}
                </li>
                
              ))}
            </ul>
            <Button className="rounded bg-blue-400 text-white px-20 mt-6 font-bold hover:bg-black hover:text-white">Try for Free</Button>
          </div>
          {/* Premium Plan */}
          <div
            className="md:text-base max-w-lg mx-auto border-2 border-blue-300 rounded-2xl p-6 hover:shadow-md  hover:border-black transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          >
            <h3 className="text-lg font-bold text-gray-800">PREMIUM</h3>
            <p className="mt-2 text-gray-600 md:text-base max-w-lg mx-auto w-[140px] font-bold">Organize across all apps by hand</p>
            <div className="text-3xl font-bold text-blue-500 mt-4">
              {plan === "monthly"
                ? pricingData.premium.monthly
                : pricingData.premium.yearly}{" "}
              <span className="text-sm text-[#23A6F0] font-bold">$/month</span>
            </div>
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              {pricingData.premium.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 rounded-lg font-bold text-[#252B42]">
                  <Button color={"blue"}  size={"icon"} className="rounded-full text-white font-bold bg-green-500 ">
                    <GoCheck />
                  </Button> {feature}
                </li>
              ))}
            </ul>
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              {pricingData.premium.unavailablefeatures.map((unavailablefeature, idx) => (
                <li key={idx} className="flex items-center gap-2 rounded-lg font-bold text-[#252B42]">
                  <Button color={"blue"}  size={"icon"} className="rounded-full text-white font-bold bg-gray-500 ">
                    <GoCheck />
                  </Button> {unavailablefeature}
                </li>
              ))}
            </ul>
            <Button className="rounded bg-blue-400 text-white px-20 mt-6 font-bold hover:bg-black hover:text-white">Try for Free</Button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Pakages;
