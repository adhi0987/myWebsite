import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";
import { useEffect, useState } from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

interface Props 
{
   themeFunction :()=> void;
   toggleValue : boolean;
}


function Navbar(props:Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect (()=>{
    if(props.toggleValue)
    {
      document.body.setAttribute('data-theme',"dark");
    }else
    {
      document.body.setAttribute('data-theme',"light");
    }
  })

  return (
    <div className="navbar-container">
      <div className="nav-left">Portfolio</div>

      <div className={`nav-right ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="list">
          <ul>
            <li>Home</li>
            <li>Academics</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="theme-btn" >
          {props.toggleValue ?(<button onClick={props.themeFunction}>
            <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
          </button>):(<button onClick={props.themeFunction}><FontAwesomeIcon icon={faSun} style={{color: "#000000",}} /></button>)}
          
        </div>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
      </div>
    </div>
  );
}

export default Navbar;
