
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface BackgroundDotsProps {
  className?: string;
  colorful?: boolean;
}

const BackgroundDots: React.FC<BackgroundDotsProps> = ({ className, colorful = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!colorful || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Make canvas taller for scrolling
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Colors similar to manus.ai
    const colors = [
      'rgba(235, 188, 195, 0.4)', // pink
      'rgba(187, 222, 251, 0.4)', // blue
      'rgba(220, 237, 200, 0.4)', // green
      'rgba(255, 236, 179, 0.4)', // yellow
      'rgba(209, 196, 233, 0.4)', // purple
    ];
    
    const dotSize = 1;
    const density = 20; // Space between dots
    
    // Fill the canvas with colored dots
    const drawDots = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let x = 0; x < canvas.width; x += density) {
        for (let y = 0; y < canvas.height; y += density) {
          // Create a gradient effect based on position
          const colorIndex = Math.floor((x + y) % colors.length);
          ctx.fillStyle = colors[colorIndex];
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    drawDots();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colorful]);
  
  if (colorful) {
    return (
      <canvas 
        ref={canvasRef}
        className={cn(
          "fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30",
          className
        )}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <div 
      className={cn(
        "absolute inset-0 dot-pattern opacity-20 pointer-events-none z-0",
        className
      )}
      aria-hidden="true"
    />
  );
};

export default BackgroundDots;
