
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-3xl mx-auto w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight animate-fade-in">
          Leave it to Manus
        </h1>
        
        <p className="text-base text-gray-600 animate-fade-in max-w-2xl mx-auto font-normal leading-relaxed">
          An AI that listens to your request, thinks about it, and gets to work just like a talented new hire. 
          Manus works on your behalf and enables you to do more of what matters. Work smarter, deliver more.
        </p>

        <div className="mt-10">
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-2 text-sm font-medium">
            Try Manus
          </Button>
        </div>

        <div className="mt-12 mb-16">
          <div className="relative mx-auto">
            <div className="video-thumbnail rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center" style={{ height: "293px", width: "520px" }}>
              <span className="text-gray-500 text-sm">Video Placeholder</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="play-button" aria-label="Play video">
                  <div className="bg-black rounded-full flex items-center justify-center w-12 h-12">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                    </svg>
                  </div>
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
