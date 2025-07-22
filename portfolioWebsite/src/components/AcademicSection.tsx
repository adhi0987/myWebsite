import {
  faCode,
  faDatabase,
  faMicrochip,
  faNetworkWired,
  faGraduationCap,
  faTrophy,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/AcademicSection.css";

interface Education {
  year: string;
  degree: string;
  institute: string;
  location: string;
  score: string;
  scoreType: string;
}

interface Course {
  name: string;
  icon: any;
  tag: string;
  description: string;
  category: string;
}

function AcademicSection() {
  const educationData: Education[] = [
    {
      year: "2022 - 2027",
      degree: "M.Tech Dual Degree (5Y) in Computer Science and Engineering",
      institute: "Indian Institute of Technology, Kharagpur",
      location: "West Bengal, India",
      score: "8.14",
      scoreType: "CGPA"
    },
    {
      year: "2020 - 2022",
      degree: "Higher Secondary Education (CBSE)",
      institute: "Lakshya School",
      location: "Andhra Pradesh, India",
      score: "95.4%",
      scoreType: "Percentage"
    },
    {
      year: "2020",
      degree: "Secondary Education (SSC)",
      institute: "Aditya High School",
      location: "Andhra Pradesh, India",
      score: "96%",
      scoreType: "Percentage"
    }
  ];

  const courses: Course[] = [
    {
      name: "Operating Systems",
      icon: faMicrochip,
      tag: "CS Core",
      description: "Study of OS concepts including process management, memory management, file systems, and virtualization with hands-on laboratory experience.",
      category: "systems"
    },
    {
      name: "Compilers",
      icon: faCode,
      tag: "CS Core",
      description: "Design and implementation of compilers, including lexical analysis, parsing, semantic analysis, and code generation techniques.",
      category: "theory"
    },
    {
      name: "Computer Networks",
      icon: faNetworkWired,
      tag: "CS Core",
      description: "Computer networking fundamentals, protocols, network architecture, and practical network programming with laboratory component.",
      category: "systems"
    },
    {
      name: "Database Management Systems",
      icon: faDatabase,
      tag: "CS Core",
      description: "Design, implementation, and management of database systems, including SQL, normalization, transaction processing, and practical applications.",
      category: "application"
    },
    {
      name: "Computer Organisation & Architecture",
      icon: faMicrochip,
      tag: "CS Core",
      description: "Study of computer hardware organization, processor design, memory hierarchy, I/O systems with hands-on laboratory work.",
      category: "systems"
    },
    {
      name: "Algorithms & Data Structures",
      icon: faCode,
      tag: "CS Core",
      description: "Advanced algorithmic techniques, data structure design, complexity analysis, and practical implementation with programming laboratory.",
      category: "theory"
    }
  ];

  const achievements = [
    "JEE Main 2022: Rank 3364 out of 1.02 million (Top 0.33%)",
    "JEE Advanced 2022: Rank 1916 out of 160,000 (Top 1.2%)",
    "EAPCET 2022: Rank 261 out of 300,000 (Top 0.1%)",
    "National Talent Search Examination (NTSE-2020) Scholar"
  ];

  return (
    <div className="academic-section">
      <div className="academic-container">
        {/* Section Header */}
        <div className="academic-header animate-slide-up">
          <h2 className="academic-title">
            <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '1rem', color: '#667eea' }} />
            Academic Journey
          </h2>
          <p className="academic-subtitle">
            My educational background and coursework at prestigious institutions
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          <h3 className="timeline-title animate-slide-up animate-delay-200">
            Educational Background
          </h3>
          <div>
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`education-item animate-slide-up animate-delay-${(index + 1) * 200}`}
              >
                <div className="education-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                
                <div className="education-content">
                  <h4 className="education-degree">
                    {edu.degree}
                  </h4>
                  <div className="education-institute">
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />
                    {edu.institute}
                  </div>
                  <div className="education-location">
                    {edu.location}
                  </div>
                </div>
                
                <div className="education-meta">
                  <div className="education-year">
                    <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '0.5rem' }} />
                    {edu.year}
                  </div>
                  <div className="education-score">
                    {edu.score}
                  </div>
                  <div className="education-score-type">
                    {edu.scoreType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h3 className="timeline-title animate-slide-up animate-delay-400">
            Academic Achievements
          </h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`achievement-card animate-slide-up animate-delay-${(index + 5) * 100}`}
              >
                <FontAwesomeIcon 
                  icon={faTrophy} 
                  className="achievement-icon"
                />
                <p className="achievement-text">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="coursework-section">
          <h3 className="timeline-title animate-slide-up animate-delay-600">
            Key Coursework
          </h3>
          <div className="coursework-grid">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`course-card animate-slide-up animate-delay-${(index + 8) * 100}`}
              >
                <div className="course-header">
                  <div className={`course-icon-wrapper ${course.category}`}>
                    <FontAwesomeIcon icon={course.icon} />
                  </div>
                  <div className="course-info">
                    <h3>{course.name}</h3>
                    <span className={`course-tag ${course.category}`}>
                      {course.tag}
                    </span>
                  </div>
                </div>
                
                <p className="course-description">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicSection;
