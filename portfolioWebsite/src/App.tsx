
import { useEffect, useState } from 'react';
import '../styles/App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import AcademicSection from './components/AcademicSection';
import ProjectSection from './components/ProjectSection';
import Internship from './components/Internship';
import Footer from './components/Footer';

function App() {
  const [toggleTheme , setToggleTheme] = useState(false);
  useEffect(()=>{
    if(toggleTheme)
    {
      document.body.setAttribute('data-theme',"dark");
    }else
    {
      document.body.setAttribute('data-theme',"light");
    }
  });
  const changeTheme = ()=>{
    setToggleTheme(!toggleTheme);
  }
  return (
    <>
      <div className='navbar'><Navbar toggleValue ={toggleTheme} themeFunction={changeTheme}/></div>
      <div><MainPage toggler={toggleTheme}/></div>
      <hr />
      <div><AcademicSection/></div>
      <hr />
      <div><ProjectSection/></div>
      <hr />
      <div><Internship/></div>
      <hr />
      <div><Footer/></div>
      {/* <Greeting name='adhithya'/> */}
    </>
  )
}

export default App
