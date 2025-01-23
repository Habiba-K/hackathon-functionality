import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
           {/* Footer */}
    <footer className="bg-white px-3 sm:px-10">
             {/* Top Section */}
             <section className="py-10  w-full h-30">
                <div className="max-w-screen-xl mx-auto  sm:flex sm:justify-between items-center grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <h1 className="text-[#252b42] text-xl sm:text-2xl font-bold leading-loose tracking-tight mx-2">Bandage</h1>
                    </div>
                    <div className="flex  gap-6">
                      <FaFacebook className="text-blue-500  w-4 h-4 " />
                      <TiSocialYoutube className="text-blue-500 w-4 h-4 " />
                      <FaInstagram className="text-blue-500 w-4 h-4 " />
                      <FaTwitter className="w-4 h-4  text-blue-500" />
                    </div>
                </div>
            </section>
  
            {/* Divider */}
            <div className="border-t border-[#e6e6e6]" />
  
            {/* Main Footer Content */}
            <section className="bg-white py-12">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                        <Link href={"/About"} className="text-[#727272] text-sm font-bold">
                            About Us
                        </Link>
                            <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
                        </nav>
                    </div>
  
                    {/* Legal */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
                        </nav>
                    </div>
  
                    {/* Features */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Features</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
                        </nav>
                    </div>
  
                    {/* Resources */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">API</a>
                        </nav>
                    </div>
  
                    {/* Get in Touch */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                        <div className="mt-3">
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                                    placeholder="Your Email"
                                />
                                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
  
            {/* Bottom Section */}
            <section className="bg-[#FAFAFA] py-4">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
                    <div className="flex gap-4">
                       
                    </div>
                </div>
            </section>
        </footer>
    </div>
  );
};

export default Footer;
