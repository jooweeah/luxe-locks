import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-tagline">Confidence starts at the crown</h1>
          <p className="hero-subtitle">Premium hair salon & wig boutique in Downtown Orlando</p>
          <Link to="/about" className="btn btn-primary">Book Now</Link>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Transformations</h2>
          <p className="section-subtitle">Hear from the women who trust us with their crown</p>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-quote">
                <p>"Luxe Locks gave me back my confidence. The custom wig they created looks so natural—even my coworkers had no idea. I feel like myself again."</p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">Michelle T.</span>
                <span className="author-service">Custom Wig Client</span>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-quote">
                <p>"I've been to countless salons, but none compare to Luxe Locks. The attention to detail on my install was incredible. I get compliments everywhere I go!"</p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">Jasmine R.</span>
                <span className="author-service">Lace Front Install</span>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-quote">
                <p>"Finally, a salon that understands protective styling! My braids lasted beautifully and my natural hair has never been healthier. Luxe Locks is my forever salon."</p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">Destiny A.</span>
                <span className="author-service">Protective Styling</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;