import { faBars, faMoon, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../../styles/Navbar.css";

interface Props {
  themeFunction: () => void;
  toggleValue: boolean;
  
}

function Navbar(props: Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (props.toggleValue) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  });

  return (
    <div className="navbar-container">
      <div className="nav-left">Portfolio</div>

      <div className={`nav-right ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="list">
          <ul>
            <li>
              <a href="#home">Home</a>{" "}
            </li>
            <li>
              <a href="#acads">Academics</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="theme-btn">
          {props.toggleValue ? (
            <button onClick={props.themeFunction}>
              <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
            </button>
          ) : (
            <button onClick={props.themeFunction}>
              <FontAwesomeIcon icon={faSun} style={{ color: "#000000" }} />
            </button>
          )}
        </div>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
      </div>
    </div>
  );
}

export default Navbar;
