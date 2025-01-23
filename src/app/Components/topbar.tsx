import { ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
const Topbar = (Props:any ) => {
  return (
  <section className={` w-full  p-3 ${Props.bgColor} hidden lg:flex items-center justify-between`}>
      <div className="flex items-center gap-4 ml-6">
        <IoCallOutline className="text-white" />
        <p className="text-white font-bold text-sm">(225) 555-0118</p>
        <BsEnvelope className="text-white" />
        <p className="text-white font-bold text-sm">
          michelle.rivera@example.com
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto flex items-center justify-center">
        <p className="text-white font-bold text-sm">
          Follow Us and get a chance to win 80% off
        </p>
      </div>
      <div className="text-white flex items-center text-sm font-bold gap-6 mr-6 ">
        Follow Us :
        <div className="flex gap-2">
          <FaFacebook className="text-white w-4 h-4 " />
          <TiSocialYoutube className="text-white w-4 h-4 " />
          <FaInstagram className="text-white w-4 h-4 " />
          <FaTwitter className="w-4 h-4  text-white" />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
