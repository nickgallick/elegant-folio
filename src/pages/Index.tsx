import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import BackgroundDots from '@/components/BackgroundDots';

const Index: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Smooth scroll animation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Adding animation classes to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    // Track scroll position for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
