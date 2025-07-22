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
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <section id="home">
          <MainPage darkMode={darkMode} />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="education" className="section bg-gray-50">
          <AcademicSection />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="projects" className="section">
          <ProjectSection />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="experience" className="section bg-gray-50">
          <Internship />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
