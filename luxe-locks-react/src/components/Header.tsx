import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartToggle }) => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="https://placehold.co/180x50/0F0F0F/C9A24D?text=Luxe+Locks" alt="Luxe Locks" />
        </Link>
        <div className="nav-actions">
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Wigs & Shop</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About & Contact</Link></li>
          </ul>
          <button className="cart-btn" onClick={onCartToggle} aria-label="Shopping cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className={`cart-badge ${cartItemCount === 0 ? 'is-empty' : ''}`}>{cartItemCount}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;