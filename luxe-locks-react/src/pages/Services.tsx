import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Luxury hair care and wig services tailored to your unique style</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-category">
            <div className="category-header">
              <div className="category-text">
                <h2>Salon Services</h2>
                <p className="category-description">Expert styling and care for your natural hair</p>
              </div>
              <div className="category-image">
                <img src="images/salon-services.png" alt="Stylist providing salon services" />
              </div>
            </div>

            <div className="services-list">
              <article className="service-card">
                <div className="service-info">
                  <h3>Wig Install</h3>
                  <p>Full lace front or closure install with customization, including bald cap method for a flawless, undetectable finish.</p>
                </div>
                <div className="service-price">
                  <span className="price">$150 - $250</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Sew-In Weave</h3>
                  <p>Traditional or versatile sew-in with leave-out options. Includes braiding, net application, and styling.</p>
                </div>
                <div className="service-price">
                  <span className="price">$175 - $275</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Protective Braids</h3>
                  <p>Box braids, knotless braids, or cornrows. Gentle technique that protects your natural hair while keeping you stylish.</p>
                </div>
                <div className="service-price">
                  <span className="price">$200 - $350</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Silk Press</h3>
                  <p>Sleek, bouncy, heat-styled finish on natural hair. Includes wash, deep condition, and trim if needed.</p>
                </div>
                <div className="service-price">
                  <span className="price">$85 - $125</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Deep Conditioning Treatment</h3>
                  <p>Intensive moisture and repair treatment for dry, damaged, or transitioning hair. Steam therapy included.</p>
                </div>
                <div className="service-price">
                  <span className="price">$45 - $65</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>
            </div>
          </div>

          <div className="services-category">
            <div className="category-header reverse">
              <div className="category-text">
                <h2>Wig Services</h2>
                <p className="category-description">Custom creations and expert wig care</p>
              </div>
              <div className="category-image">
                <img src="images/wig-services.png" alt="Custom wig styling and creation" />
              </div>
            </div>

            <div className="services-list">
              <article className="service-card">
                <div className="service-info">
                  <h3>Custom Wig Creation</h3>
                  <p>Bespoke wig built to your specifications—density, length, color, and cap construction. Consultation included.</p>
                </div>
                <div className="service-price">
                  <span className="price">$500 - $1,200</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Wig Customization</h3>
                  <p>Transform your unit with bleached knots, tinting, plucking, and baby hair styling for a natural look.</p>
                </div>
                <div className="service-price">
                  <span className="price">$75 - $150</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Wig Revamp & Styling</h3>
                  <p>Bring your wig back to life. Includes wash, condition, detangle, restyle, and minor repairs.</p>
                </div>
                <div className="service-price">
                  <span className="price">$50 - $100</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Wig Coloring</h3>
                  <p>Professional color services for your wig—from subtle highlights to bold transformations. Color-safe products only.</p>
                </div>
                <div className="service-price">
                  <span className="price">$100 - $250</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>

              <article className="service-card">
                <div className="service-info">
                  <h3>Maintenance Package</h3>
                  <p>Monthly wig care subscription. Includes wash, condition, style refresh, and secure reinstall.</p>
                </div>
                <div className="service-price">
                  <span className="price">$120/month</span>
                  <Link to="/about#booking" className="btn btn-secondary">Book Now</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-cta">
        <div className="container">
          <h2>Ready to Transform?</h2>
          <p>Book your appointment today and let us help you feel your most confident.</p>
          <Link to="/about#booking" className="btn btn-primary">Book Your Appointment</Link>
        </div>
      </section>
    </main>
  );
};

export default Services;