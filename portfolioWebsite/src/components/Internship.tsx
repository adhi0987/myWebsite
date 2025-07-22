import { 
  faBriefcase, 
  faTrophy, 
  faUsers, 
  faCalendarAlt, 
  faMapMarkerAlt,
  faAward,
  faStar,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Experience {
  title: string;
  organization: string;
  duration: string;
  location: string;
  type: 'competition' | 'responsibility' | 'achievement';
  description: string[];
  highlights?: string[];
  rank?: string;
  participants?: string;
}

function Internship() {
  const experiences: Experience[] = [
    {
      title: "Governor",
      organization: "Prasthanam | IIT Kharagpur",
      duration: "Aug 2024 - Apr 2025",
      location: "IIT Kharagpur",
      type: "responsibility",
      description: [
        "Directed 3 stage plays and scripted 2 original productions, managing end-to-end execution from casting to live performance",
        "Organized and conducted 3 acting and scriptwriting workshops, enhancing member engagement and skill development",
        "Led a team of 30+ members in creative productions and theatrical events",
        "Managed budget allocation and resource planning for multiple theatrical productions"
      ],
      highlights: ["Leadership", "Creative Direction", "Team Management", "Event Organization"]
    },
    {
      title: "Networksify Hackathon - Top 6 Finalist",
      organization: "OPTIMA",
      duration: "Nov 2023",
      location: "India",
      type: "competition",
      description: [
        "Secured a top-6 position in the final round, competing among 75+ teams from across India",
        "Developed a MIP model to optimize 15-day line haul routes for 4 vehicle types",
        "Incorporated ad-hoc costs across 50 hubs for comprehensive logistics optimization",
        "Presented solution to industry experts and received recognition for innovative approach"
      ],
      rank: "Top 6",
      participants: "75+ teams",
      highlights: ["Optimization", "Logistics", "Mathematical Modeling", "Team Collaboration"]
    },
    {
      title: "National Students' Space Challenge - Top 6 Finalist",
      organization: "NSSC",
      duration: "Nov 2023",
      location: "India",
      type: "competition",
      description: [
        "Presented research on Mars colonization at NSSC; ranked top-10 out of 250+ teams in round one",
        "Advanced to top-6 finalists in paper presentation category",
        "Applied engineering principles to aerospace system design for Mars colonization",
        "Collaborated with team to develop comprehensive technical solution"
      ],
      rank: "Top 6",
      participants: "250+ teams",
      highlights: ["Aerospace Engineering", "Research", "Technical Writing", "Presentation"]
    }
  ];

  const achievements = [
    {
      title: "JEE Main 2022",
      description: "Rank 3364 out of 1.02 million",
      percentage: "Top 0.33%",
      icon: faTrophy
    },
    {
      title: "JEE Advanced 2022", 
      description: "Rank 1916 out of 160,000",
      percentage: "Top 1.2%",
      icon: faAward
    },
    {
      title: "EAPCET 2022",
      description: "Rank 261 out of 300,000", 
      percentage: "Top 0.1%",
      icon: faStar
    },
    {
      title: "NTSE 2020",
      description: "National Talent Search Examination Scholar",
      percentage: "Prestigious",
      icon: faRocket
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200 to-primary-200 dark:from-blue-900/30 dark:to-primary-900/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-heading">
            <FontAwesomeIcon icon={faBriefcase} className="mr-4 text-primary-600 dark:text-primary-400" />
            Experience & Achievements
          </h2>
          <p className="section-subheading">
            Leadership roles, competitions, and academic achievements that shaped my journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slide-up animate-delay-200">
            Leadership & Competitions
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`card p-6 hover:shadow-2xl transform hover:-translate-y-1 animate-slide-up`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon and Type */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                      exp.type === 'responsibility' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      exp.type === 'competition' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                      'bg-gradient-to-br from-green-500 to-green-600'
                    }`}>
                      <FontAwesomeIcon 
                        icon={exp.type === 'responsibility' ? faUsers : faTrophy} 
                        className="text-xl" 
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                          {exp.location}
                        </div>
                        {exp.rank && (
                          <div className="font-semibold text-primary-600 dark:text-primary-400">
                            {exp.rank} out of {exp.participants}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-primary-500 mr-2 mt-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    {exp.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              exp.type === 'responsibility' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                              exp.type === 'competition' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-slide-up animate-delay-600">
            Academic Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`card p-6 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up group`}
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <FontAwesomeIcon icon={achievement.icon} className="text-xl" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {achievement.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold rounded-full">
                      {achievement.percentage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;