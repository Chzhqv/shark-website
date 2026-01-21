export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <span>📞 +1 (437)-450-0227</span>
            <span>✉️ sharkydetailing@gmail.com</span>
          </div>
          <div className="social-icons"><span>f</span><span>📷</span></div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container nav-content">
          {/* LOGO IS NOW THE HOME BUTTON */}
          <div className="nav-logo" onClick={() => scrollToSection('hero')} style={{cursor: 'pointer'}}>
            <span className="shark-icon">🦈</span> SHARK DETAIL
          </div>
          
          <ul className="nav-links">
            {/* Removed "Home" text link */}
            <li onClick={() => scrollToSection('about')}>About Us</li>
            <li onClick={() => scrollToSection('services')}>Premium Services</li>
            <li onClick={() => scrollToSection('gallery')}>Gallery</li>
            <li onClick={() => scrollToSection('contact')}>Contact Us</li>
          </ul>

          <button className="nav-btn" onClick={() => scrollToSection('booking-section')}>Request Quote</button>
        </div>
      </nav>
    </div>
  );
}