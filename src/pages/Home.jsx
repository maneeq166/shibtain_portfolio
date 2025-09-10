import React from "react";
import BG from "../assets/BG.jpg";
import monitor from "../assets/download (3) 2.png";
// import cloud from "../assets/Ellipse 5275.jpg";
import arrow from "../assets/ArrowUpRight.png";

function Home() {
  return (
    <div className="w-full h-screen">
      {/* <img src={cloud} alt="" /> */}

      {/* Centered content */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img src={monitor} alt="" className="absolute top-22 left-15 z-0" />

        <div className="">
          <h1 className="z-20 font-gambarino text-[72px] font-normal leading-[84px] tracking-[-2.1px] text-white">
            Hey, I’m Shibtain <span className="text-[#5348ec]">(19)</span>
          </h1>
          <h1 className="z-20 font-gambarino text-[72px] font-normal leading-[84px] tracking-[-2.1px] text-white">
            Graphic Dznr.
          </h1>
        </div>
      </div>
      <img
        src={BG}
        className="h-full w-full object-cover absolute top-0 left-0 -z-10"
        alt=""
      />
      <div className=" absolute top-[65%] flex flex-col align-items text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F5F5DC] font-Inter font-medium">
        <p>From UI to campaigns and AI-driven media already</p>
        <p>designing for startups & driving numbers</p>

        <div className="flex justify-center border-2 border-white w-[150px] h-[54px]  bg-white/30 p-[10px] mt-5">
          <button className="font-Inter font-semibold text-[16px] text-[#F5F5DC]">
            Know more
          </button>
          <img src={arrow} className="size-[25px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
