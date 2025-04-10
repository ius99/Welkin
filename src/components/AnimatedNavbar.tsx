"use client"

import { ReactNode, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface AnimatedNavbarProps {
  tabs?: string[]; // Optional custom tabs
}

export function AnimatedNavbar({ tabs = ['home', 'pricing', 'features', 'docs', 'blogs'] }: AnimatedNavbarProps) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0
  });

  return (
    <ul className='flex border-2 border-white rounded-full  w-fit mx-auto relative p-2 bg-pink-300 '>
      {tabs.map((tab) => (
        <Tab key={tab} position={position} setPosition={setPosition}>
          {tab}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

function Tab({ children, position, setPosition }: {
  children: ReactNode;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}) {
  const ref = useRef<HTMLLIElement>(null);
  
  const handleMouseEnter = () => {
    if (!ref.current) return;
    
    const { left, width } = ref.current.getBoundingClientRect();
    const parent = ref.current.parentElement?.getBoundingClientRect();
    
    if (!parent) return;
    
    setPosition({
      left: left - parent.left,
      width: width,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setPosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <li 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='text-white text-xs uppercase block relative px-3 py-1.5 z-10 md:px-5 md:py-3 md:text-base cursor-pointer'
    >
      {children}
    </li>
  );
}

function Cursor({ position }: { position: Position }) {
  return (
    <motion.div
      initial={false}
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity
      }}
  
      className='absolute bg-pink-400 h-12 rounded-full top-0 mt-2 '
    />
  );
}