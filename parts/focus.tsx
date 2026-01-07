"use client";
import React, { useRef } from "react";
import gsap from "gsap";

export default function Focus() {
  const ref = useRef<HTMLSpanElement | null>(null);

  function handleEnter() {
    gsap.to(ref.current, {
      x: 100,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  function handleLeave() {
    gsap.to(ref.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  return (
    <div   onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="flex flex-row text-lg font-mono text-gray-900 dark:text-gray-100">
      <span className="text-8xl">&#123;</span>
      <span ref={ref}
        className="text-8xl cursor-pointer"
      >
        &#125;
      </span>
    </div>
  );
}
