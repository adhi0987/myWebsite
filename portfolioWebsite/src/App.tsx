import { useEffect, useState } from "react";
import "./index.css";
import AcademicSection from "./components/AcademicSection";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <section id="home" className="min-h-screen">
          <MainPage darkMode={darkMode} />
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        
        <section id="education" className="py-16">
          <AcademicSection />
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        
        <section id="projects" className="py-16">
          <ProjectSection />
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        
        <section id="experience" className="py-16">
          <Internship />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
