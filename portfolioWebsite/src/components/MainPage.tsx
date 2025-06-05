import { useEffect } from "react";
import myImage from "../assets/darkthemecomputer.png";
import '../../styles/MainPage.css'
interface Props 
{
  toggler:boolean;
}
function MainPage({toggler}: Props) {
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
            <p>
              hi This is Adhithya shiva Kumar Reddy{" "}
              <h2>Computer Science Student From IIT Kharagpur</h2>
            </p>
          </div>
          <div className="resume-btn">
            <button>Download CV</button>
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
