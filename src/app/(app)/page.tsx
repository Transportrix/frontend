import Image from "next/image";
import HeroSection from "./components/HeroSection";
import QuarteiKwei from "./components/KwarteKwei";
import Julius from "./components/Julius";
import Kwame from "./components/Kwame";
import Jesse from "./components/Jesse";
import BismarkOwiredu from "./components/BismarkOwiredu";
import BismarkAgyei from "./components/BismarkAgyei";
import Enam from "./components/Enam";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="flex flex-col gap-5 px-5 ">
        <QuarteiKwei />
        <Julius />
        <div className="lg:mt-14 ">
          <Kwame />
        </div>{" "}
        {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <Jesse />
        </div> */}
        <BismarkOwiredu />
        <Enam />
      </div>
      <div className="mt-5">
        <BismarkAgyei />
      </div>{" "}
    </main>
  );
}
