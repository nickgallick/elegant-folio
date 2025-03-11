
import React from 'react';
import { cn } from "@/lib/utils";

interface BackgroundDotsProps {
  className?: string;
}

const BackgroundDots: React.FC<BackgroundDotsProps> = ({ className }) => {
  return (
    <div 
      className={cn(
        "absolute inset-0 dot-pattern opacity-50 pointer-events-none z-0",
        className
      )}
      aria-hidden="true"
    />
  );
};

export default BackgroundDots;
