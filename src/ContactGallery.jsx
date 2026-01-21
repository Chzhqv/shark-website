import { useState } from 'react';

import img1 from './assets/gallery/1.jpg';
import img2 from './assets/gallery/2.jpg';
import img3 from './assets/gallery/3.jpg';
import img4 from './assets/gallery/4.jpg';
import img5 from './assets/gallery/5.jpg';
import img6 from './assets/gallery/6.jpg';
import img7 from './assets/gallery/7.jpg';
import img8 from './assets/gallery/8.jpg';
import img9 from './assets/gallery/9.jpg';
import img10 from './assets/gallery/10.jpg';
import img11 from './assets/gallery/11.jpg';
import img12 from './assets/gallery/12.jpg';
import img13 from './assets/gallery/13.jpg';
import img14 from './assets/gallery/14.jpg';
import img15 from './assets/gallery/15.jpg';
import img16 from './assets/gallery/16.jpg';
import img17 from './assets/gallery/17.jpg';
import img18 from './assets/gallery/18.jpg';
import img19 from './assets/gallery/19.jpg';
import img20 from './assets/gallery/20.jpg';
import img21 from './assets/gallery/21.jpg';

export default function ContactGallery() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Array to loop through images easily
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    
    // Opens user's email client
    window.location.href = `mailto:sharkydetailing@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-split">
            <div className="contact-text">
              <h4 className="section-mini-title">GET IN TOUCH</h4>
              <h2 className="section-main-title">Contact Details</h2>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div><h3>Our Location</h3><p>Mobile Service - We come to you!</p></div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div><h3>Phone Number</h3><p>+1 (437)-450-0227</p></div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div><h3>Email Address</h3><p>sharkydetailing@gmail.com</p></div>
              </div>
            </div>
            
            <form className="simple-contact-form">
              <h3>Send Message</h3>
              <input 
                placeholder="Your Name" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <input 
                placeholder="Your Email" 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
              <textarea 
                placeholder="Message" rows="4"
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
              ></textarea>
              <button onClick={handleSendEmail} className="nav-btn" style={{width: '100%', marginTop: '10px'}}>
                Send Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-main-title" style={{textAlign: 'center', marginBottom: '40px'}}>Our Recent Work</h2>
          
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item-wrapper">
                <img src={img} alt={`Sharky Work ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background: '#050505', padding: '20px', textAlign: 'center', color: '#666', fontSize: '0.8rem'}}>
        <p>© 2026 Shark Detail. All Rights Reserved.</p>
      </footer>
    </>
  );
}