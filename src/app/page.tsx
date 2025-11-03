"use client";

import Image from "next/image";
import { useState, useEffect, use } from "react";
import Curtain from "./components/Curtain";
import VillageScene from "./components/VillageScene";
import SceneOne from "./components/SceneOne";

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
      <Curtain onAnimationComplete = {handleCurtain}/>
    </div>
    }
      <SceneOne />

      {/* <VillageScene /> */}
    </>
  );
}
