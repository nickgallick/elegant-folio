
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
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-black">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="text-lg font-semibold tracking-tight font-poppins">manus</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins">
            Product
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins">
            Pricing
          </a>
          <a href="#company" className="text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins">
            Company
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a 
            href="/login" 
            className="hidden md:inline-flex text-sm font-medium text-gray-600 hover:text-black transition-colors font-poppins"
          >
            Log in
          </a>
          <a 
            href="/signup" 
            className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors font-poppins"
          >
            Try for free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
