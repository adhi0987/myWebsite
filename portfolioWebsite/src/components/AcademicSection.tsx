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
    <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-heading">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-4 text-primary-600 dark:text-primary-400" />
            Academic Journey
          </h2>
          <p className="section-subheading">
            My educational background and coursework at prestigious institutions
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slide-up animate-delay-200">
            Educational Background
          </h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`card p-6 hover:shadow-2xl transform hover:-translate-y-1 animate-slide-up`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                        {edu.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-primary-500" />
                      {edu.institute}
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.location}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      {edu.score}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.scoreType}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slide-up animate-delay-400">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`card p-4 hover:shadow-lg transform hover:-translate-y-0.5 animate-slide-up`}
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon 
                    icon={faTrophy} 
                    className="text-yellow-500 text-lg mt-1 flex-shrink-0" 
                  />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slide-up animate-delay-600">
            Key Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`card p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up group`}
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-200 ${
                        course.category === 'systems' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        course.category === 'theory' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                        'bg-gradient-to-br from-purple-500 to-purple-600'
                      }`}>
                        <FontAwesomeIcon icon={course.icon} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {course.name}
                        </h4>
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                          course.category === 'systems' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          course.category === 'theory' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {course.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicSection;
