
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center pt-32 pb-28 px-6 md:px-10 overflow-hidden hero-background">
      <div className="max-w-3xl mx-auto w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in font-poppins">
          Leave it to Manus
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 animate-fade-in max-w-2xl mx-auto font-normal leading-relaxed">
          An AI that listens to your request, thinks about it, and gets to work just like a talented new hire. 
          Manus works on your behalf and enables you to do more of what matters. Work smarter, deliver more.
        </p>

        <div className="mt-12">
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-sm font-medium h-auto font-poppins">
            Try Manus
          </Button>
        </div>

        <div className="mt-16 mb-20">
          <div className="relative mx-auto">
            <div className="video-thumbnail rounded-lg overflow-hidden shadow-md bg-gray-50 flex items-center justify-center" style={{ height: "380px", width: "676px", maxWidth: "100%" }}>
              <span className="text-gray-500 text-sm font-poppins">Video Placeholder</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="play-button" aria-label="Play video">
                  <div className="bg-black rounded-full flex items-center justify-center w-14 h-14">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-10">
          <h2 className="text-xl font-medium mb-10 font-poppins">Use case gallery</h2>
          {/* This will be replaced with the use case gallery component */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
