import interiorImg from './assets/interior.jpg';
import wheelImg from './assets/wheel.jpg';

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        
        <div className="services-header">
          <h4 className="section-mini-title">WHAT WE DO</h4>
          <h2 className="section-main-title">Premium Washing Services</h2>
        </div>

        <div className="services-grid-2">
          
          <div className="service-big-card">
            <img src={interiorImg} alt="Interior Detail" className="service-img" />
            <div className="service-info">
              <h3>Mobile Automotive Detailing</h3>
              <p>
                Interior car cleaning makes your car's interior look new. It includes vacuuming seats and carpets, 
                cleaning surfaces, and removing odors. This ensures a fresh and pleasant driving experience.
              </p>
            </div>
          </div>

          <div className="service-big-card">
            <img src={wheelImg} alt="Wheel Cleaning" className="service-img" />
            <div className="service-info">
              <h3>Tire and wheel cleaning</h3>
              <p>
                Wheel and tire cleaning from the exterior option restores your car's wheels and tires to their best condition. 
                It involves removing dirt and brake dust, scrubbing the tires, and polishing the wheels.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}