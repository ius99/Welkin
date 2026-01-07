"use client"
import Clock from "@/parts/clock";
import Image from "next/image";
import TextGifCanvas from "@/parts/ascii";
import { useRef, useEffect } from "react";
import gsap from "gsap";



export default function LandingPage() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      rotation: 360,
      duration: 7,
      repeat: -1,
      ease: "linear",
    });
  }, []);


  return (
    <div className="relative min-h-screen bg-blue-700 dark:bg-[#0a0a0a] font-mono text-gray-900 dark:text-gray-100 grid grid-cols-12 text-white">

      {/* Top bar */}
     
        <div className="col-start-1 text-xl whitespace-nowrap mx-10 my-4 leading-none">
          <Clock />
          <h1>Montreal, Quebec</h1>
        </div>

        <div className="col-start-4 text-xl mt-4 leading-none">
          <h1>Shivansh Yadav</h1>
          <h1>Concordia University</h1>
          <h2></h2>
        </div>

        <div className="col-start-9 text-xl mt-4 whitespace-nowrap tracking-tight leading-none">
          <h1>Systems Programming</h1>
          <h1>Graphics Programming</h1>
          <h2>Web development</h2>
        </div>

        <div className="text-6xl flex items-center justify-center col-start-12 mr-10">
          <span>&#123;</span>
          <div ref = {ref}>
            <Image
              src="/SHIVANSH.svg"
              alt="Profile Picture"
              width={120}  // Adjust size as needed
              height={120}
              className=""
            />
          </div>
          <span className="text-[#39FF14]">&#125;</span>
        </div>
    

      <div className="py-20 col-start-1 ml-10 scale-130">
        <TextGifCanvas />
      </div>

      {/* Bottom-left title */}
      <div className="absolute bottom-[300px] left-[380px] text-[200px] leading-none font-extralight tracking-widest text-center">
        <h1 className="petit-formal">Portfolio</h1>
        <h1 className="bg-[#39FF14]">Website</h1>
      </div>


    </div>
  );
}
