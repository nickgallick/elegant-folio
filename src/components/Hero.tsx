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

        <div className="text-center pt-8">
          <h2 className="text-xl font-medium mb-10">Use case gallery</h2>
          {/* This will be replaced with the use case gallery component */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
