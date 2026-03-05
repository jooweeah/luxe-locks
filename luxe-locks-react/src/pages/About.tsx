import React from 'react';

const About: React.FC = () => {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About & Contact</h1>
          <p>The story behind Luxe Locks and how to reach us</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p className="lead">Luxe Locks was born from a simple belief: every woman deserves to feel confident, beautiful, and unapologetically herself.</p>
              <p>Founded in 2019 by master stylist Jasmine Laurent, Luxe Locks began as a small studio with a big vision—to create a space where luxury meets accessibility, and where hair isn't just styled, but transformed into a statement of self-expression.</p>
              <p>After over a decade in the beauty industry, Jasmine noticed a gap: women seeking high-quality wig services and protective styling often had to choose between affordability and excellence. Luxe Locks was created to bridge that gap.</p>
              <p>Today, we're proud to serve the Orlando community from our Downtown studio, offering everything from custom wig creations to signature installs that leave our clients feeling like the best version of themselves.</p>
            </div>
            <div className="story-image">
              <img src="https://placehold.co/500x600/E8DCD2/0F0F0F?text=Our+Founder" alt="Jasmine Laurent, founder of Luxe Locks" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-statement">"To empower women through transformative hair experiences that celebrate individuality, protect natural beauty, and inspire confidence from the inside out."</p>
            <div className="values-grid">
              <div className="value-item">
                <h4>Quality First</h4>
                <p>We use only premium products and materials because your hair deserves nothing less.</p>
              </div>
              <div className="value-item">
                <h4>Personalized Care</h4>
                <p>Every client is unique. We take time to understand your needs and craft solutions just for you.</p>
              </div>
              <div className="value-item">
                <h4>Education & Transparency</h4>
                <p>We believe in empowering our clients with knowledge to care for their hair at home.</p>
              </div>
              <div className="value-item">
                <h4>Safe Space</h4>
                <p>Our salon is a judgment-free zone where all women are welcomed and celebrated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions? Ready to book? We'd love to hear from you.</p>

              <div className="info-block">
                <h4>Visit Us</h4>
                <address>
                  <p>123 Main Street, Suite 100</p>
                  <p>Downtown Orlando, FL 32801</p>
                </address>
              </div>

              <div className="info-block">
                <h4>Contact</h4>
                <p><a href="tel:+14075551234">(407) 555-1234</a></p>
                <p><a href="mailto:hello@luxelocks.com">hello@luxelocks.com</a></p>
              </div>

              <div className="info-block">
                <h4>Hours</h4>
                <p>Tuesday - Friday: 10am - 7pm</p>
                <p>Saturday: 9am - 5pm</p>
                <p>Sunday - Monday: Closed</p>
              </div>

              <div className="info-block">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://instagram.com/luxelocks" aria-label="Instagram">Instagram</a>
                  <a href="https://facebook.com/luxelocks" aria-label="Facebook">Facebook</a>
                  <a href="https://tiktok.com/@luxelocks" aria-label="TikTok">TikTok</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" action="#" method="POST">
                <h3>Send Us a Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option value="wig-install">Wig Install</option>
                    <option value="sew-in">Sew-In Weave</option>
                    <option value="braids">Protective Braids</option>
                    <option value="silk-press">Silk Press</option>
                    <option value="custom-wig">Custom Wig Creation</option>
                    <option value="wig-purchase">Wig Purchase Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="booking-section">
        <div className="container">
          <div className="booking-content">
            <h2>Ready to Book?</h2>
            <p>Schedule your appointment online and take the first step toward your transformation.</p>
            <a href="https://styleseat.com" className="btn btn-primary">Book on StyleSeat</a>
            <p className="booking-note">Prefer to call? Reach us at <a href="tel:+14075551234">(407) 555-1234</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;