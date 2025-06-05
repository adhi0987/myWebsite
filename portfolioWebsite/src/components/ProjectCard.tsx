import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/ProjectCard.css"
interface Props {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  content: string;
}
function ProjectCard(props: Props) {
  return (
    <>
      <div className="card-container">
        <div className="card-title-box">
          <div className="card-icon-box">{props.icon}</div>
          <div className="card-heading-box">
            <div className="card-title">{props.title}</div>
          </div>
        </div>
        <div className="card-content-box">{props.content}</div>
        <div className="card-tag-box">
          {props.tags.map((tag, index) => (
            <div className="card-tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className="card-link-box">
            <button>view Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
