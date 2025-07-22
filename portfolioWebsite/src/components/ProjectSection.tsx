import { 
  faDatabase, 
  faEnvelope, 
  faMicrochip, 
  faMobile, 
  faServer,
  faCode,
  faFolderOpen 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./ProjectCard";

const cardData = [
  {
    icon: <FontAwesomeIcon icon={faServer} />,
    title: "Multi-Process Restaurant System",
    tags: ["Systems Programming", "IPC", "Concurrency"],
    content: "Simulated a dine-in restaurant using C with fork() system calls for concurrent processes. Implemented Inter-Process Communication using shared memory and semaphores for process synchronization.",
    link: "https://github.com/adhi0987/Multi-Process-Restaurant",
    githubLink: "https://github.com/adhi0987/Multi-Process-Restaurant",
    techStack: ["C", "System Calls", "IPC", "Semaphores", "Shared Memory"],
    year: "Mar 2025"
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: "Custom Transport Layer Protocol",
    tags: ["Networking", "TCP/UDP", "Multi-threading"],
    content: "Developed custom TCP over UDP ensuring in-order delivery with multi-threaded system design. Implemented reliable communication with timeout ACKs and efficient re-transmissions.",
    link: "https://github.com/adhi0987/Custom-TCP-Protocol",
    githubLink: "https://github.com/adhi0987/Custom-TCP-Protocol",
    techStack: ["C", "Socket Programming", "Multi-threading", "UDP", "Protocol Design"],
    year: "Mar 2025"
  },
  {
    icon: <FontAwesomeIcon icon={faDatabase} />,
    title: "GramPanchayat Management System",
    tags: ["Full-Stack", "Web Development", "Database"],
    content: "Built a comprehensive full-stack system using Django and PostgreSQL for managing village administration. Features role-based access control and interactive dashboards.",
    link: "https://github.com/adhi0987/GPMS",
    githubLink: "https://github.com/adhi0987/GPMS",
    techStack: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    year: "Feb 2025"
  },
  {
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    title: "32-bit RISC Processor",
    tags: ["Verilog", "Computer Architecture", "Hardware Design"],
    content: "Designed and implemented a 32-bit RISC processor using Verilog with structured instruction encoding. Created comprehensive ISA for 26 operations with 95% testbench coverage.",
    link: "https://github.com/adhi0987/RISC_PROCESSOR",
    githubLink: "https://github.com/adhi0987/RISC_PROCESSOR",
    techStack: ["Verilog", "Vivado", "ISA Design", "ALU", "Control Signals"],
    year: "Oct 2024"
  },
  {
    icon: <FontAwesomeIcon icon={faMobile} />,
    title: "Social Media Application",
    tags: ["Mobile Development", "React Native", "Real-time"],
    content: "Developed a feature-rich social media application using React Native with modern authentication and real-time features. Implemented clean UI/UX with responsive design.",
    link: "https://adhithya-spotlight-app--09pcn93kdm.expo.app/",
    githubLink: "https://github.com/adhi0987/Social-Media-App",
    techStack: ["React Native", "Expo", "Convex", "Clerk Auth", "TypeScript"],
    year: "Dec 2024"
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Task Distribution Server",
    tags: ["Client-Server", "TCP", "Distributed Systems"],
    content: "Implemented a robust client-server model using TCP for efficient task distribution and load balancing. Features fault tolerance and scalable architecture design.",
    link: "https://github.com/adhi0987/Computer_Networks/tree/main/TaskAssigningServerClientModel",
    githubLink: "https://github.com/adhi0987/Computer_Networks/tree/main/TaskAssigningServerClientModel",
    techStack: ["C++", "TCP Sockets", "Multi-threading", "Load Balancing"],
    year: "Nov 2024"
  }
];

function ProjectSection() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-heading">
            <FontAwesomeIcon icon={faFolderOpen} className="mr-4 text-primary-600 dark:text-primary-400" />
            Featured Projects
          </h2>
          <p className="section-subheading">
            A showcase of my technical projects and implementations across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...card} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up animate-delay-800">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/adhi0987"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              View All Projects on GitHub
            </a>
            <a
              href="#experience"
              className="btn-secondary"
            >
              Explore My Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
