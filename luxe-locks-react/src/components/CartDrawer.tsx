import React, { useCallback } from 'react';
import { useCart } from '../contexts/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeItem, changeQty, getTotalItems, getTotalPrice } = useCart();

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={handleOverlayClick}
      />

      <aside className={`cart-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Your Cart</h2>
          <button
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <a href="/shop" className="btn btn-secondary" onClick={onClose}>Browse the shop</a>
            </div>
          ) : (
            <ul className="cart-items-list">
              {cart.map((item) => (
                <li key={item.name} className="cart-item">
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-qty-control">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => changeQty(item.name, -1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="qty-count">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => changeQty(item.name, 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem(item.name)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total">
              <span>{totalItems === 1 ? '1 item' : `${totalItems} items`}</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary cart-checkout-btn">Checkout</button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;