import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Luxe Locks</h3>
            <p>Premium hair salon & wig boutique</p>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <address>
              <p>123 Main Street, Suite 100</p>
              <p>Downtown Orlando, FL 32801</p>
              <p><a href="tel:+14075551234">(407) 555-1234</a></p>
              <p><a href="mailto:hello@luxelocks.com">hello@luxelocks.com</a></p>
            </address>
          </div>
          <div className="footer-hours">
            <h4>Hours</h4>
            <p>Tue - Fri: 10am - 7pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sun - Mon: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Luxe Locks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;