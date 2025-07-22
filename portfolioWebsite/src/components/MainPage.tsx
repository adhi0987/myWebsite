import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { generateCV } from "../utils/cvGenerator";

interface Props {
  darkMode: boolean;
}

function MainPage({ }: Props) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      await generateCV();
    } catch (error) {
      console.error('Error generating CV:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animate-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-soft"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-primary-600 dark:text-primary-400 font-medium animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-up animate-delay-200">
                Darapu Adhithya
                <span className="block text-gradient">Shiva Kumar Reddy</span>
              </h1>
            </div>

            {/* Role */}
            <div className="animate-slide-up animate-delay-400">
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Computer Science Student at 
                <span className="text-primary-600 dark:text-primary-400 font-semibold"> IIT Kharagpur</span>
              </h2>
            </div>

            {/* Description */}
            <div className="animate-slide-up animate-delay-600">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Passionate about computer science with a focus on building practical applications 
                and exploring new technologies. Currently pursuing a dual degree in Computer Science 
                and Engineering at the prestigious Indian Institute of Technology, Kharagpur.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-800">
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="btn-primary group"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating CV...
                  </>
                ) : (
                  <>
                    Download CV
                    <FontAwesomeIcon 
                      icon={faDownload} 
                      className="ml-2 group-hover:translate-y-0.5 transition-transform duration-200" 
                    />
                  </>
                )}
              </button>
              
              <a
                href="#projects"
                className="btn-secondary"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 animate-slide-up animate-delay-1000">
              <a
                href="https://github.com/adhi0987"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/adhithya-darapu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative animate-slide-right">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-purple-500 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-3xl transform -rotate-6 scale-95"></div>
              
              {/* Main Content Area */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    DR
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">8.14</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2025</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Graduation</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">IIT</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Kharagpur</div>
                    </div>
                  </div>
                  
                  {/* Tech Stack Icons */}
                  <div className="flex justify-center space-x-3">
                    {['C++', 'Python', 'React', 'Django'].map((tech, index) => (
                      <div
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
