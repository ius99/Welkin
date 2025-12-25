"use client";

import { useEffect, useRef } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";

export default function TextGifCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Circular ASCII characters
    const asciiChars = ["Y", "◉", "○", "S", "·"];
    const scale = 9;
    const frameDelay = 160;
  
    // Bright yellow for land, white for sea
    const LAND_COLOR = "#FFD700";  // Bright gold/yellow
    const SEA_COLOR = "#FFFFFF";   // White
    const BACKGROUND_COLOR = "#0023EB"; // Dark blue from your code

    let frames: any[] = [];
    let frameIndex = 0;
    let animationId: number;
    let lastTimestamp = 0;

    fetch("/earth_big.gif")
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const gif = parseGIF(buffer);
        frames = decompressFrames(gif, true);
        canvas.width = frames[0].dims.width;
        canvas.height = frames[0].dims.height;
        render(0);
      });

    function render(timestamp: number) {
      if (timestamp - lastTimestamp < frameDelay) {
        animationId = requestAnimationFrame(render);
        return;
      }
      lastTimestamp = timestamp;

      const frame = frames[frameIndex];
      const { width, height } = frame.dims;

      const imgData = ctx.createImageData(width, height);
      imgData.data.set(frame.patch);
      ctx.putImageData(imgData, 0, 0);

      const pixels = ctx.getImageData(0, 0, width, height).data;
      
      // Clear with exact dark blue background
      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, width, height);

      for (let y = 0; y < height; y += scale) {
        for (let x = 0; x < width; x += scale) {
          const i = (y * width + x) * 4;
          
          // Skip transparent pixels
          if (pixels[i + 3] < 10) continue;
          
          const brightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / (3 * 255);
          
          // Adjust threshold to capture the globe shape
          if (brightness < 0.15) continue;
          
          const charIndex = Math.floor(brightness * (asciiChars.length - 1));
          const char = asciiChars[charIndex];
          
          // INVERTED LOGIC: 
          // Lower brightness (darker land in original) → YELLOW
          // Higher brightness (lighter sea in original) → WHITE
          if (brightness < 0.5) {
            // Land areas (original dark pixels)
            ctx.fillStyle = LAND_COLOR;
          } else {
            // Sea areas (original light pixels)
            ctx.fillStyle = SEA_COLOR;
          }
          
          // Enhanced text rendering for better visibility
          ctx.font = `bold ${scale}px monospace`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          
          // Add subtle glow effect for better visibility
          if (brightness < 0.4) {
            ctx.shadowColor = LAND_COLOR;
            ctx.shadowBlur = 2;
          } else {
            ctx.shadowBlur = 0;
          }
          
          // Draw character centered in the grid cell
          ctx.fillText(char, x + scale/2, y + scale/2);
          ctx.shadowBlur = 0; // Reset shadow
        }
      }

      frameIndex = (frameIndex + 1) % frames.length;
      animationId = requestAnimationFrame(render);
    }

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#0023EB", // Match canvas background
    }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          backgroundColor: "#0023EB",
          imageRendering: "pixelated"
        }} 
      />
    </div>
  );
}
