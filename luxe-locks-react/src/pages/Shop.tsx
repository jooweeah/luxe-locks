import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (name: string, price: number) => {
    addToCart(name, price);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Wigs & Shop</h1>
          <p>Curated luxury wigs for every style and occasion</p>
        </div>
      </section>

      <section className="shop-categories">
        <div className="container">
          <div className="categories-grid">
            <a href="#lace-fronts" className="category-card">
              <div className="category-icon">
                <img src="https://placehold.co/300x200/E8DCD2/0F0F0F?text=Lace+Fronts" alt="Lace Front Wigs" />
              </div>
              <h3>Lace Fronts</h3>
              <p>Natural hairline, endless styling</p>
            </a>
            <a href="#closures" className="category-card">
              <div className="category-icon">
                <img src="https://placehold.co/300x200/E8DCD2/0F0F0F?text=Closures" alt="Closure Wigs" />
              </div>
              <h3>Closures</h3>
              <p>Seamless, protective coverage</p>
            </a>
            <a href="#custom-units" className="category-card">
              <div className="category-icon">
                <img src="https://placehold.co/300x200/E8DCD2/0F0F0F?text=Custom+Units" alt="Custom Unit Wigs" />
              </div>
              <h3>Custom Units</h3>
              <p>Made-to-order perfection</p>
            </a>
          </div>
        </div>
      </section>

      <section id="lace-fronts" className="product-section">
        <div className="container">
          <h2 className="section-title">Lace Front Wigs</h2>
          <p className="section-subtitle">Undetectable hairlines with versatile parting options</p>
          <div className="products-grid">
            <article className="product-card">
              <div className="product-image">
                <img src="https://placehold.co/400x500/E8DCD2/0F0F0F?text=Silky+Straight" alt="The Silky Straight Wig" />
                <span className="product-badge">Bestseller</span>
              </div>
              <div className="product-info">
                <h3>The Silky Straight</h3>
                <p className="product-details">22" | 180% Density | Natural Black</p>
                <p className="product-price">$285</p>
                <div className="product-actions">
                  <Link to="/about#contact" className="btn btn-secondary">Inquire</Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart('The Silky Straight', 285)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image">
                <img src="https://placehold.co/400x500/E8DCD2/0F0F0F?text=Body+Wave" alt="The Body Wave Wig" />
              </div>
              <div className="product-info">
                <h3>The Body Wave</h3>
                <p className="product-details">24" | 200% Density | Off Black</p>
                <p className="product-price">$320</p>
                <div className="product-actions">
                  <Link to="/about#contact" className="btn btn-secondary">Inquire</Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart('The Body Wave', 320)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image">
                <img src="https://placehold.co/400x500/E8DCD2/0F0F0F?text=Deep+Wave" alt="The Deep Wave Wig" />
                <span className="product-badge new">New</span>
              </div>
              <div className="product-info">
                <h3>The Deep Wave</h3>
                <p className="product-details">20" | 180% Density | Dark Brown</p>
                <p className="product-price">$295</p>
                <div className="product-actions">
                  <Link to="/about#contact" className="btn btn-secondary">Inquire</Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart('The Deep Wave', 295)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="closures" className="product-section alt-bg">
        <div className="container">
          <h2 className="section-title">Closure Wigs</h2>
          <p className="section-subtitle">Full coverage protection with natural movement</p>
          <div className="products-grid">
            <article className="product-card">
              <div className="product-image">
                <img src="https://placehold.co/400x500/E8DCD2/0F0F0F?text=Classic+Bob" alt="The Classic Bob Wig" />
              </div>
              <div className="product-info">
                <h3>The Classic Bob</h3>
                <p className="product-details">12" | 150% Density | Jet Black</p>
                <p className="product-price">$185</p>
                <div className="product-actions">
                  <Link to="/about#contact" className="btn btn-secondary">Inquire</Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart('The Classic Bob', 185)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image">
                <img src="https://placehold.co/400x500/E8DCD2/0F0F0F?text=Natural+Curl" alt="The Natural Curl Wig" />
                <span className="product-badge">Bestseller</span>
              </div>
              <div className="product-info">
                <h3>The Natural Curl</h3>
                <p className="product-details">16" | 180% Density | Natural Black</p>
                <p className="product-price">$245</p>
                <div className="product-actions">
                  <Link to="/about#contact" className="btn btn-secondary">Inquire</Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart('The Natural Curl', 245)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image">
                <img src="https://placehold.co/400x500/E8DCD2/0F0F0F?text=Honey+Blonde" alt="The Honey Blonde Wig" />
              </div>
              <div className="product-info">
                <h3>The Honey Blonde</h3>
                <p className="product-details">18" | 180% Density | 27/613 Mix</p>
                <p className="product-price">$265</p>
                <div className="product-actions">
                  <Link to="/about#contact" className="btn btn-secondary">Inquire</Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart('The Honey Blonde', 265)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="custom-units" className="product-section">
        <div className="container">
          <h2 className="section-title">Custom Units</h2>
          <p className="section-subtitle">Bespoke wigs crafted to your exact specifications</p>
          <div className="custom-cta">
            <div className="custom-info">
              <h3>Create Your Dream Wig</h3>
              <p>Work directly with our stylists to design a one-of-a-kind piece. Choose your hair texture, length, density, color, and cap construction.</p>
              <ul className="custom-features">
                <li>Free consultation included</li>
                <li>Premium 100% human hair</li>
                <li>HD lace or silk base options</li>
                <li>2-3 week turnaround</li>
              </ul>
              <p className="custom-price">Starting at <span>$500</span></p>
              <Link to="/about#contact" className="btn btn-primary">Request Consultation</Link>
            </div>
            <div className="custom-image">
              <img src="https://placehold.co/500x600/E8DCD2/0F0F0F?text=Custom+Wig+Creation" alt="Custom wig creation process" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;