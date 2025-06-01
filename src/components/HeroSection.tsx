import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      container.style.backgroundPosition = `${50 + moveX * 0.5}% ${50 + moveY * 0.5}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      style={{ backgroundSize: '120% 120%', transition: 'background-position 0.3s ease-out' }}
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')] opacity-10 bg-cover bg-center" />
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 dark:bg-blue-600 dark:opacity-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 dark:bg-blue-500 dark:opacity-10" />
      
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
          <img 
            src="src/components/1.jpeg" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Phanindra Marisetti
        </h1>
        
        <p className="text-xl sm:text-2xl font-light mb-8 text-gray-700 dark:text-gray-300">
          <span className="inline-block">Full Stack Developer</span>
          <span className="mx-3 text-blue-500 dark:text-blue-400">•</span>
          <span className="inline-block">Software Developer</span>
          <span className="mx-3 text-blue-500 dark:text-blue-400">•</span>
          <span className="inline-block">Tech Enthusiast</span>
        </p>
        
        <p className="mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Creating elegant solutions to complex problems through clean code and thoughtful design.
          Specializing in modern web applications with a focus on user experience.
        </p>
        
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        <span className="text-sm mb-2"></span>
        <ArrowDown className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;