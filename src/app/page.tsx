"use client";

import Squares from "@/blocks/Backgrounds/Squares/Squares";
import { useEffect } from "react";
import Image from "next/image";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import toast from 'react-hot-toast';

function App() {


  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      toast.custom(
        <div className="max-w-md bg-pink-500 text-white text-xl text-center border border-white rounded-2xl p-4 shadow-lg whitespace-normal break-words">
           This website is too amazing for your tiny phone screen.  
          <br />
           Please open it on a LAPTOP.  
          <br />
          U broke ass 
        </div>
      );
    }
  }, []);


  return (

    <div className="relative w-full min-h-screen">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares />
      </div>

      {/* Logo in top-left corner */}
      <div className="fixed top-4 left-4 z-20">
        <Image
          src="/logo-light.svg"
          alt="Logo"
          width={120}
          height={100}
          className="h-18 w-auto" // was h-10
          priority
        />
      </div>

      <div className="fixed top-4 right-175">
        <AnimatedNavbar />
      </div>

      <div>
        <Image
          src="/SHIVANSH.svg"
          alt="Logo"
          width={120}
          height={100}
          className="h-18 fixed right-2 top-5" // was h-10
          priority
        />
      </div>

    
    </div>
  );
}

export default App;
