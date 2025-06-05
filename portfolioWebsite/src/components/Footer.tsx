import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="footer-top">
        <div className="name-section">
          <div className="full-name">Darapu Adhithya Shiva Kumar Reddy</div>
          <div className="matter">Computer Science Student IIT Kharagpur</div>
        </div>
        <div className="links-section">
          <p>Quick Links</p>
          <ul>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Academics</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Internships</a>
            </li>
          </ul>
        </div>
        <div className="contact-section">
          <div className="contact-heading">
            <h2>Connect With Me</h2>
          </div>
          <div className="contact-icon-section">
            <ul>
              <li>
                <a href="/">
                  <i className="fa-brands fa-whatsapp" ></i>
                </a>
              </li>
              <li>
                <a href="/">
                   <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-mail-section">
            <FontAwesomeIcon icon={faEnvelope} /> adhithyashivakumar2511@gmail.com 
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-down" > @2025 Adhithya</div>
    </>
  );
}

export default Footer;
