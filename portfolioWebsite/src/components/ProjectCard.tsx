import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  content: string;
  link: string;
  githubLink?: string;
  techStack: string[];
  year: string;
}

function ProjectCard(props: Props) {
  return (
    <div className="card group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-6 space-y-4 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-200">
              {props.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {props.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {props.year}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {props.content}
        </p>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {props.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary group/btn text-sm"
          >
            <span>View Project</span>
            <FontAwesomeIcon 
              icon={faArrowUpRightFromSquare} 
              className="ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" 
            />
          </a>
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all duration-200 transform hover:scale-105 group/btn"
              aria-label="View on GitHub"
            >
              <FontAwesomeIcon 
                icon={faGithub} 
                className="text-lg group-hover/btn:scale-110 transition-transform duration-200" 
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
