import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import BookingForm from './BookingForm';
import ContactGallery from './ContactGallery';
import './index.css'; 

function App() {
  return (
    <div className="app-container">
      <Header />
      
      {/* Added ID for scrolling */}
      <div id="hero"><Hero /></div>
      
      <div id="about"><About /></div>
      
      <div id="services"><Services /></div>
      
      <div id="booking-section">
        <BookingForm />
      </div>

      <ContactGallery />
    </div>
  );
}

export default App;