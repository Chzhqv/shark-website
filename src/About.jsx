import aboutImg from './assets/about.jpg';

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        
        <div className="features-grid-3">
          <div className="feature-card">
            <div className="f-icon">📱</div>
            <h3>Contactless Washing</h3>
            <p>Order our services online right here!</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">🧴</div>
            <h3>Safety Materials</h3>
            <p>We use chemicals that are safe for your vehicle and for the environment</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">🚿</div>
            <h3>Modern Equipment</h3>
            <p>We use high quality equipment to ensure a great clean</p>
          </div>
        </div>

        <div className="about-split">
          <div className="about-image-wrapper">
            {/* USE IMPORTED IMAGE */}
            <img src={aboutImg} alt="Detailer with Truck" className="about-img" />
          </div>
          <div className="about-text-content">
            <h4 className="section-mini-title">ABOUT US</h4>
            <h2 className="section-main-title">Car Service for your Car</h2>
            <p className="body-text">
              The specialists at Shark Detailing are experts in high-quality vehicle detailing. 
              We understand that you value your investment and will treat your car with as much care as you do. 
              Referral business is our company's main growth – we stand behind our work.
            </p>
            <p className="body-text">
              <strong>Our Mission:</strong> To provide our customers with outstanding service and innovative 
              detailing solutions designed to enhance and protect your automotive investment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}