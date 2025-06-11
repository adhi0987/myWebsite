import { useEffect, useState } from "react";
import "../styles/App.css";
import AcademicSection from "./components/AcademicSection";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  useEffect(() => {
    if (toggleTheme) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  });
  const changeTheme = () => {
    setToggleTheme(!toggleTheme);
  };
  return (
    <>
      <div className="navbar">
        <Navbar toggleValue={toggleTheme} themeFunction={changeTheme} />
      </div>
      <div id="home">
        <MainPage toggler={toggleTheme} />
      </div>
      <hr />
      <div id="acads"> 
        <AcademicSection />
      </div>
      <hr />
      <div id="projects">
        <ProjectSection />
      </div>
      <hr />
      <div id="internship">
        <Internship />
      </div>
      <hr />
      <div>
        <Footer />
      </div>
      {/* <Greeting name='adhithya'/> */}
    </>
  );
}

export default App;
