"use client"

import Squares from '@/blocks/Backgrounds/Squares/Squares';
import ScrollVelocity from '@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import Image from 'next/image';


function App() {
  

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


      <div className="fixed top-4 right-4 z-40 flex gap-48 bg-pink-200/100 backdrop-blur-lg p-3 rounded-xl shadow-lg">
  <button className="text-pink-400 text-2xl hover:text-white transition">Project</button>
  <button className="text-pink-400 text-2xl hover:text-white transition">About</button>
  <button className="text-pink-400 text-2xl hover:text-white transition">Theme</button>
</div>





      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none w-full">
        <div className="text-pink-400 text-center backdrop-blur-[1px] px-4 py-2 rounded-lg w-full mb-24">
          <ScrollVelocity 
            texts={[
              "For a new moon is set to rise.",
              "新しい月が昇ろうとしている。",
              "क्योंकि एक नया चाँद उदय होने वाला है।",
              "لأن قمراً جديداً على وشك أن يبزغ"
            ]}
          />
        </div>
        
        {/* Moon Button - now clickable */}

      </div>

      {/* Footer with XL 2025 */}
     
    </div>
  );
}

export default App;