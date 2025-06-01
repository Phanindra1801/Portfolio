import React from 'react';
import { Calendar, MapPin, Briefcase, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-500 dark:text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-lg transform -rotate-6"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-300 dark:bg-blue-800/30 rounded-lg transform rotate-6"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
                alt="Working at desk" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            I'm a passionate developer who is good at solving complex problems and creating functional websites.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            As a Computer Science student with a strong foundation in web development and problem solving, I've worked on a variety of academic and personal projects — from responsive websites to full-stack applications. I enjoy tackling challenges using data structures and algorithms, and I combine technical skills with a keen eye for design to build solutions that are both effective and user-friendly.  
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Born: January 18, 2005</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Location: Vijayawada,India</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Role: Student</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Freelance: Available</span>
              </div>
            </div>
            <div className="flex space-x-4">

        <a
          href="https://drive.google.com/file/d/1XuvnxNk1pKC5CMOxtuz-0eIohBAPZIpc/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View Resume
          </button>
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1XuvnxNk1pKC5CMOxtuz-0eIohBAPZIpc"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Download Resume
          </button>
        </a>
      </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;