
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-10 overflow-hidden">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in">
          Leave it to Manus
        </h1>
        
        <p className="text-base text-gray-600 animate-fade-in max-w-2xl mx-auto mb-10">
          An AI that listens to your request, thinks about it, and gets to work just like a talented new hire. 
          Manus works on your behalf and enables you to do more of what matters.
        </p>

        <div className="flex justify-center mb-12">
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-sm font-medium h-auto">
            Try Manus
          </Button>
        </div>

        <div className="mt-10 mb-12">
          <div className="video-thumbnail mx-auto rounded-lg overflow-hidden shadow-md" style={{ maxWidth: "800px" }}>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Manus AI Demo" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="play-button" aria-label="Play video">
                <div className="bg-black rounded-full flex items-center justify-center w-14 h-14">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-xl font-medium mb-10">Use case gallery</h2>
          {/* This will be replaced with the use case gallery component */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
