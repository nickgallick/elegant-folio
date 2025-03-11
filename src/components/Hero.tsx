
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-4">
                Meet Manus
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Leave it to Manus
            </h1>
            
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              The AI assistant designed to help you focus on what matters. Manus handles your tasks with precision and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a 
                href="/demo" 
                className="rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                See the demo
              </a>
              <a 
                href="/learn-more" 
                className="rounded-full bg-white border border-gray-200 text-gray-800 px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Learn more
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="video-thumbnail">
              <img 
                src="/hero-video-placeholder.jpg" 
                alt="Manus AI demo video" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="play-button" aria-label="Play video"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
