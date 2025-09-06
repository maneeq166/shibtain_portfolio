import React from 'react'
import BG from "../assets/BG.jpg";

function Home() {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={BG} 
        className="h-full w-full object-cover absolute top-0 left-0 -z-10" 
        alt="" 
      />
      
      {/* Centered content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-gambarino text-[72px] font-normal leading-[84px] tracking-[-2.1px] text-white">
          Hey, I’m Shibtain (19)
        </h1>
        <h1 className="font-gambarino text-[72px] font-normal leading-[84px] tracking-[-2.1px] text-white">
          Graphic Dznr.
        </h1>
      </div>
    </div>
  )
}

export default Home
