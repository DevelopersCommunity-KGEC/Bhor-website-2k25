"use client";

import Image from "next/image";
import { useState, useEffect, use } from "react";
import Curtain from "./components/Curtain";
import VillageScene from "./components/Carousel";
import SceneOne from "./components/SceneOne";
import Border from "./components/Border";
import SceneOneMobile from "./components/SceneOneMobile";

export default function Home() {

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleCurtain = () => {
    document.body.style.overflow = "auto";
    setCanScroll(true);
  }

  return (
    <>
      {!canScroll &&
        <div className="absolute top-0 left-0 w-full h-full z-100">
          <Curtain onAnimationComplete={handleCurtain} />
        </div>
      }
      <div className="hidden lg:block">
      <SceneOne />
      </div>

      <div className="block lg:hidden">
      <SceneOneMobile />
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none">

        {/* TOP BORDER */}
        <div className="absolute top-0 left-0 w-full h-[5vw] min-h-[20px] max-h-[60px]">
          <Image 
                  src="/Border.png"
                  alt="Border"
                  width={1920}
                  height={1080}
                  className="w-full h-auto z-50"
                />
        </div>

        {/* BOTTOM BORDER */}
        <div className="absolute bottom-0 left-0 w-full h-[5vw] min-h-[20px] max-h-[60px]">
          <Image 
                  src="/Border.png"
                  alt="Border"
                  width={1920}
                  height={1080}
                  className="w-full h-auto z-50"
                />
        </div>

        {/* LEFT BORDER — fixed alignment and size */}
        
          <div className="absolute w-full h-full left-[47.8%]">
            <Image 
                    src="/BorderVertical.png"
                    alt="Border"
                    width={1920}
                    height={1080}
                    className="w-full h-auto z-100"
                  />
          </div>

        {/* RIGHT BORDER — fixed alignment and size */}
        
          <div className="w-full h-full left-[-47.8%] absolute">
            <Image 
                    src="/BorderVertical.png"
                    alt="Border"
                    width={1920}
                    height={1080}
                    className="w-full h-auto z-100"
                  />
          </div>

      </div>
      

      <VillageScene />
    </>
  );
}
