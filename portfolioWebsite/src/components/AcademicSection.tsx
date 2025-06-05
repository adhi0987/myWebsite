import {
  faCode,
  faDatabase,
  faMicrochip,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/AcademicSection.css";
function AcademicSection() {
  return (
    <>
    <div className="academic-section">
      <div className="Page-header">
        <div className="title">Academic Background</div>
        <div className="sub-heading">
          Computer Science Courses I've taken at IIT Kharagpur
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-title">
            <div className="card-icon">
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div className="card-heading">
              <h2>Operating Systems</h2>
              <div className="card-tag">CS Core</div>
            </div>
          </div>
          <div className="card-content">
            Study of OS concepts including process management, memory
            management, file systems, and virtualization.
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-title">
            <div className="card-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="card-heading">
              <h2>Compilers</h2>
              <div className="card-tag">CS Core</div>
            </div>
          </div>
          <div className="card-content">
            Design and implementation of compilers, including lexical analysis,
            parsing, semantic analysis, and code generation.
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-title">
            <div className="card-icon">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <div className="card-heading">
              <h2>Computer Networks</h2>
              <div className="card-tag">CS Core</div>
            </div>
          </div>
          <div className="card-content">
            Computer networking fundamentals, protocols, architecture, and
            network programming
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-title">
            <div className="card-icon">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className="card-heading">
              <h2>Database Management System</h2>
              <div className="card-tag">CS Core</div>
            </div>
          </div>
          <div className="card-content">
            Design, implementation, and management of database systems,
            including SQL, normalization, and transaction processing.
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-title">
            <div className="card-icon">
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div className="card-heading">
              <h2>Computer Organisation And Architecture</h2>
              <div className="card-tag">CS Core</div>
            </div>
          </div>
          <div className="card-content">
            Study of computer hardware organization, processor design, memory
            hierarchy, and I/O systems.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AcademicSection;
