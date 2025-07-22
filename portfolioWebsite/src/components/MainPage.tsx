import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { generateCV } from "../utils/cvGenerator";
import "../styles/MainPage.css";

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
    <div className="hero-section">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="hero-title animate-slide-up animate-delay-200">
              Darapu Adhithya
              <span className="hero-name">Shiva Kumar Reddy</span>
            </h1>

            <h2 className="hero-subtitle animate-slide-up animate-delay-400">
              Computer Science Student at 
              <span className="highlight"> IIT Kharagpur</span>
            </h2>

            <p className="hero-description animate-slide-up animate-delay-600">
              Passionate about computer science with a focus on building practical applications 
              and exploring new technologies. Currently pursuing a dual degree in Computer Science 
              and Engineering at the prestigious Indian Institute of Technology, Kharagpur.
            </p>

            <div className="hero-buttons animate-slide-up animate-delay-800">
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="btn btn-primary download-btn"
              >
                {isDownloading ? (
                  <>
                    <div className="spinner"></div>
                    Generating CV...
                  </>
                ) : (
                  <>
                    Download CV
                    <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '8px' }} />
                  </>
                )}
              </button>
              
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>

            <div className="social-links animate-slide-up animate-delay-1000">
              <a
                href="https://github.com/adhi0987"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/adhithya-darapu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-avatar">
                DR
              </div>
              
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">8.14</div>
                  <div className="hero-stat-label">CGPA</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">6+</div>
                  <div className="hero-stat-label">Projects</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">2027</div>
                  <div className="hero-stat-label">Graduation</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">IIT</div>
                  <div className="hero-stat-label">Kharagpur</div>
                </div>
              </div>
              
              <div className="hero-tech-stack">
                {['C++', 'Python', 'React', 'Django'].map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
