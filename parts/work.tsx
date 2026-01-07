"use client";

import { Dispatch, SetStateAction, useRef } from "react";
import Ongoingbtn from "./ongoingbtn";

type CursorType = {
  top: number;
  height: number;
  opacity: number;
};

type Props = {
  num: number;
  text: string;
  description: string;
  github: string;
  image: string;
  setCursor: Dispatch<SetStateAction<CursorType>>;
  setActiveProject: Dispatch<SetStateAction<{ image: string } | null>>;
};

export default function Work({
  num,
  text,
  description,
  github,
  image,
  setCursor,
  setActiveProject,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    setCursor({
      top: ref.current.offsetTop,
      height: rect.height,
      opacity: 1,
    });

    setActiveProject({ image });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setActiveProject(null)}
      className="
        relative z-10
        flex justify-between items-center
        py-6 px-6
        border-b border-gray-200
        cursor-pointer
      "
    >
      <div className="flex gap-6">
        <span className="text-gray-400">{num}</span>
        <div>
          <h2 className="text-lg font-medium">{text}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="mt-2">
            <Ongoingbtn />
          </div>
          
        </div>
      </div>

      <a
        href={github}
        target="_blank"
        className="text-sm text-gray-500 hover:text-black transition"
      >
        GitHub →
      </a>
    </div>
  );
}
