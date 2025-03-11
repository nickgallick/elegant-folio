
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
          manus
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            Product
          </a>
          <a href="#about" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            About
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a 
            href="/login" 
            className="hidden md:inline-flex text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Log in
          </a>
          <a 
            href="/signup" 
            className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
