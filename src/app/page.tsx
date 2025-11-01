import Image from "next/image";
import Curtain from "./components/Curtain";
import VillageScene from "./components/VillageScene";
import SceneOne from "./components/SceneOne";

export default function Home() {
  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full z-100">
      <Curtain />
    </div>
    <div className="relative z-50">
      <SceneOne />
    </div>
      {/* <VillageScene /> */}
    </>
  );
}
