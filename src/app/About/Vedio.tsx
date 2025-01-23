"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react"; // ShadCN Play Icon

const Video = () => {
  return (
    <div className=" py-10">
      <div className="max-w-[1440px] w-[90%] md:w-[65%] lg:[95%] mx-auto px-4">

        {/* Video Wrapper */}
        <div className="relative  aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full"
            poster="/images/vedio.png"
          >
            <source src="/videos/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Icon */}
          <button
            className="absolute inset-0 flex items-center justify-center z-10"
            aria-label="Play Video"
          >
            <div className="bg-white p-5 rounded-full shadow-lg hover:bg-gray-100 transition">
              <Play className="w-12 h-12 text-blue-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;