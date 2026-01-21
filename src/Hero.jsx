import heroBg from './assets/hero.jpg'; // This imports your local file

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${heroBg})` }} 
    >
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="hero-subtitle">WELCOME TO SHARK DETAIL</p>
          <h1 className="hero-title">Professional Washing &<br/>Cleaning of your Car</h1>
          <p className="hero-desc">
            The specialists at Shark Detail are experts in high-quality vehicle detailing. 
            We understand that you value your investment and will treat your car with as much care as you do.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('about')}>Read More</button>
            <button className="btn-secondary" onClick={() => scrollToSection('services')}>Our Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}