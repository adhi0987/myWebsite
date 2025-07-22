import { 
  faEnvelope, 
  faHeart,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub, 
  faLinkedin, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/adhi0987',
      icon: faGithub,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/adhithya-darapu',
      icon: faLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      icon: faWhatsapp,
      color: 'hover:text-green-500'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-purple-600/10"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gradient">
                Darapu Adhithya Shiva Kumar Reddy
              </h3>
              <p className="text-gray-300 text-lg">
                Computer Science Student at IIT Kharagpur
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Passionate about technology, innovation, and building solutions that make a difference. 
              Currently pursuing dual degree in Computer Science and Engineering.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:adhithyashivakumar2511@gmail.com"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                adhithyashivakumar2511@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Currently</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-sm">Studying at</p>
                <p className="font-medium text-gray-300">IIT Kharagpur</p>
              </div>
              <div>
                <p className="text-sm">Expected Graduation</p>
                <p className="font-medium text-gray-300">2027</p>
              </div>
              <div>
                <p className="text-sm">Current CGPA</p>
                <p className="font-medium text-primary-400">8.14 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-gray-400">
              <span>© 2025 Adhithya. Made with</span>
              <FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 rounded-lg text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
