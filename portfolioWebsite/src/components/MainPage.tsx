import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "../../styles/MainPage.css";
import myImage from "../assets/darkthemecomputer.png";
interface Props {
  toggler: boolean;
}
function MainPage({ toggler }: Props) {
  useEffect(() => {
    if (toggler) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  });
  return (
    <>
      <div className="main-page container">
        <div className="text-container">
          <div className="intro">
            <h1>Darapu Adhithya shiva Kumar Reddy </h1>
            <h2>Computer Science Student </h2>
            <p>
              Currently studying at the prestigious Indian Institute of
              Technology, Kharagpur. Passionate about computer science with a
              focus on building practical applications and exploring new
              technologies.
            </p>
          </div>
          <div className="resume-btn">
            <button>Download CV <FontAwesomeIcon icon={faDownload} /></button>
          </div>
        </div>
        <div className="image-container">
          <img src={myImage} alt=" image not found" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
