import { faDatabase, faEnvelope, faMicrochip, faMobile, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/ProjectSection.css";
import ProjectCard from "./ProjectCard";
const cardData = [
  {
    icon: <FontAwesomeIcon icon={faDatabase} />,
    title: "Grampachayat Management Systems",
    tags: ["Web Development", "Database", "UI/UX"],
    content:
      "Developed a web interface for GPMS database to streamline village administration processes and improve data accessibility.",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: "Simple Mail Transfer Protocol",
    tags: ["Web Development", "Database", "UI/UX"],
    content:
      "Developed a web interface for GPMS database to streamline village administration processes and improve data accessibility.",
  },
  {
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    title: "Simple RISC Processor",
    tags: ["Web Development", "Database", "UI/UX"],
    content:
      "Developed a web interface for GPMS database to streamline village administration processes and improve data accessibility.",
  },
  {
    icon: <FontAwesomeIcon icon={faServer} />,
    title: "Task distribution client-server model Using TCP ",
    tags: ["Web Development", "Database", "UI/UX"],
    content:
      "Developed a web interface for GPMS database to streamline village administration processes and improve data accessibility.",
  },
  {
    icon: <FontAwesomeIcon icon={faMobile} />,
    title: "Social Media Application Using react-native",
    tags: ["Web Development", "Convex", "Clerk-Authentication"],
    content:
      "Developed a web interface for GPMS database to streamline village administration processes and improve data accessibility.",
  },
];
function ProjectSection() {
  return <>
  <div className="project-section">
    <div className="page-header">
        <div className="page-title">Projects</div>
        <div className="sub-title">A showcase of my technical projects and implementations</div>
    </div>
    <div className="page-content">
        {cardData.map((card,index)=>(<ProjectCard key={index} {...card}/>))}
    </div>
  </div>
  </>;
}

export default ProjectSection;
