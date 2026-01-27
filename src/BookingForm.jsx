import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import carImg from './assets/car.jpg';
import truckImg from './assets/truck.jpg';
const IMAGES = {
  car: carImg,
  truck: truckImg
};

const ADDONS_DATA = {
  Interior: [
    { id: 'pet', name: '🐾 Pet Hair Removal', price: 35, time: '+30 mins', desc: 'Thorough removal of stubborn pet hair.' },
    { id: 'leather', name: '🛋️ Leather Conditioning', price: 35, time: '+45 mins', desc: 'Deep cleaning and conditioning of leather.' },
    { id: 'odor', name: '💨 Odor Elimination', price: 40, time: '+30 mins', desc: 'Neutralize and eliminate unpleasant odors.' },
    { id: 'engine', name: '⚙️ Engine Bay Cleaning', price: 45, time: '+45 mins', desc: 'Careful cleaning of the engine bay.' }
  ],
  Exterior: [
    { id: 'engine', name: '⚙️ Engine Bay Cleaning', price: 45, time: '+45 mins', desc: 'Careful cleaning of the engine bay.' },
    { id: 'wax', name: '✨ Ceramic Wax Application', price: 40, time: '+60 mins', desc: 'Protective wax coating for shine and protection.' },
  ]
};

// Ultimate gets ALL add-ons
ADDONS_DATA['Ultimate (both)'] = [...ADDONS_DATA.Interior]; 

export default function BookingForm() {
  const [vehicleType, setVehicleType] = useState('car'); 
  const [serviceType, setServiceType] = useState('Exterior'); 
  const [activeAddons, setActiveAddons] = useState([]); 
  const [date, setDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // NEW: Loading State

  const [details, setDetails] = useState({ name: '', email: '', phone: '', carModel: '' });

  useEffect(() => { setActiveAddons([]); }, [serviceType, vehicleType]);

  const pricingData = {
    car: {
      Exterior: { price: 70, features: ['Heavy Duty Wash','Cleansing Solution', 'Bug Removal', 'Tire Shine', 'Cleaning Of Windows', 'Bed Rinse'] },
      Interior: { price: 130, features: ['Deep Vacuum Carpets', 'Full Deepclean Floor', 'Door Jambs','Wipedown Dashboard', 'Cleaning Windshield', 'Trunk Furnishing'] },
      'Ultimate (both)': { price: 200, features: ['Full Exterior Wash', 'Full Interior Detail', 'Wax Application', 'Deep Clean Wheels', 'Leather Conditioning'] }
    },
    truck: {
      Exterior: { price: 80, features: ['Heavy Duty Wash', 'Bed Rinse', 'Tire Shine', 'Wheel Wells Cleaned', 'Bug Removal', 'Glass Cleaning'] },
      Interior: { price: 140, features: ['Deep Vacuum', 'Dash Polish', 'Leather Care', 'Door Jambs', 'Full Deepclean Floor', 'Mat Extraction', 'Trunk Furnishing'] },
      'Ultimate (both)': { price: 220, features: ['Full Exterior', 'Full Interior', 'Undercarriage Wash', 'Wax Application', 'Tire Dressing'] }
    }
  };

  const currentService = pricingData[vehicleType][serviceType];
  const availableAddons = ADDONS_DATA[serviceType] || [];
  
  const totalAddonsPrice = activeAddons.reduce((sum, item) => sum + item.price, 0);
  const finalPrice = currentService.price + totalAddonsPrice;

  const toggleAddon = (addon) => {
    if (activeAddons.find(a => a.id === addon.id)) {
      setActiveAddons(activeAddons.filter(a => a.id !== addon.id));
    } else {
      setActiveAddons([...activeAddons, addon]);
    }
  };

  const handleInputChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitToOwner = async (e) => {
    e.preventDefault();
    if (!details.name || !details.email) {
      alert("Please fill in your details.");
      return;
    }

    setIsLoading(true); // START LOADING

    const formData = {
      date: date.toDateString(),
      customerName: details.name,
      email: details.email,
      phone: details.phone,
      vehicleType: vehicleType,
      serviceType: serviceType,
      addons: activeAddons.map(a => a.name).join(", "), 
      price: finalPrice,
      carModel: details.carModel
    };

    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykCrSFF7_R0XW9XYeUjXwvSrptiLHqmmEpLiaJxzfEpkSLkmIaO_R6UlaW47CE1yK5/exec";
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" }
      });

      alert(`Request Sent! Total Estimate: $${finalPrice} \n WE WILL CONTACT YOU SOON.`);
      setDetails({...details, name: '', email: '', phone: '', carModel: ''});
      setShowForm(false);
      setActiveAddons([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending request.");
    } finally {
      setIsLoading(false); // STOP LOADING
    }
  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="header-section">
          <h4 className="mini-title">WASHING PRICE</h4>
          <h1 className="main-title">Choose Your Plan</h1>
          <div className="disclaimer-row">
            <span>Things you don't want us touching</span>
          </div>
        </div>

        <div className="vehicle-tabs">
          <button className={`vehicle-tab ${vehicleType === 'car' ? 'active' : ''}`} onClick={() => setVehicleType('car')}>🚗 Cars</button>
          <button className={`vehicle-tab ${vehicleType === 'truck' ? 'active' : ''}`} onClick={() => setVehicleType('truck')}>🚚 Trucks</button>
        </div>

        <div className="content-grid">
          <div className="image-column">
            <img src={IMAGES[vehicleType]} alt={vehicleType} className="vehicle-image" />
          </div>

          <div className="details-column">
            <h2 className="detail-title">{vehicleType === 'car' ? 'Cars' : 'Trucks'} Detail Prices</h2>
            <div className="service-tabs">
              {Object.keys(pricingData[vehicleType]).map((type) => (
                <button 
                  key={type}
                  className={`service-pill ${serviceType === type ? 'active' : ''}`}
                  onClick={() => setServiceType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="price-display">${finalPrice}.00</div>

            <div className="features-grid">
              {currentService.features.map((feature, i) => (
                <div key={i} className="feature-item"><span className="check-icon">✔</span> {feature}</div>
              ))}
            </div>

            {availableAddons.length > 0 && (
              <div className="addons-section">
                <h3 className="addons-title">Recommended Add-ons</h3>
                <div className="addons-grid">
                  {availableAddons.map((addon) => {
                    const isSelected = activeAddons.find(a => a.id === addon.id);
                    return (
                      <div 
                        key={addon.id} 
                        className={`addon-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleAddon(addon)}
                      >
                        <div className="addon-header">
                          <span className="addon-name">{addon.name}</span>
                          <span className="addon-price">+${addon.price}</span>
                        </div>
                        <div className="addon-time">{addon.time}</div>
                        <p className="addon-desc">{addon.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <button className="book-btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Close Form' : 'Book This Service'}
            </button>
          </div>
        </div>

        {showForm && (
          <div className="booking-form-container fade-in">
            <h3>Finish Booking</h3>
            <div className="form-inputs">
              <input name="name" placeholder="Full Name" onChange={handleInputChange} />
              <input name="email" placeholder="Email" onChange={handleInputChange} />
              <input name="phone" placeholder="Phone Number" onChange={handleInputChange} />
              <input name="carModel" placeholder="Car Model" onChange={handleInputChange} />
              <DatePicker selected={date} onChange={(d) => setDate(d)} className="date-input" />
            </div>
            
            {/* LOADING BUTTON LOGIC */}
            <button 
              onClick={submitToOwner} 
              className="confirm-btn" 
              disabled={isLoading}
              style={{opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer'}}
            >
              {isLoading ? (
                <span className="loader-row">
                  <span className="spinner"></span> Processing...
                </span>
              ) : (
                `CONFIRM APPOINTMENT ($${finalPrice})`
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}