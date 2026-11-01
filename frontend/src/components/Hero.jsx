import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'calc(clamp(8rem, 16vw, 10.5rem) + env(safe-area-inset-top, 0px))',
      paddingBottom: 'clamp(3.5rem, 8vw, 6rem)',
      backgroundColor: 'var(--color-bg)',
      overflow: 'hidden'
    }}>
      {/* Background blur decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        filter: 'blur(150px)',
        opacity: 0.1,
        zIndex: 0
      }}></div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        
        {/* Text Content */}
        <div className="animate-fade-in-up" style={{ textAlign: 'left' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}>
            Hyper Realistic Edible Art, Luxury Cakes & <br />
            <span style={{ color: 'var(--color-primary)' }}>Certified Masterclasses</span>
          </h1>
          <p style={{
            color: 'var(--color-text-light)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
            marginBottom: '2rem',
            maxWidth: '540px',
            lineHeight: 1.7
          }}>
            Flour Shower Studio is Batticaloa's destination for high end optical illusion baking, multi tier wedding centerpieces, and complete thematic dessert tables. In our sunlit studio, we also host intensive, certificate awarded physical baking workshops.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/94767707765" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Request Custom Quote
            </a>
            <a href="#services" className="btn btn-ghost" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem', border: '1px solid var(--color-border)', textDecoration: 'none' }}>
              Explore Creations & Classes
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="animate-fade-in-up delay-1" style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{
            position: 'absolute',
            inset: '-10px',
            background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2), rgba(233, 30, 99, 0.05))',
            borderRadius: '2rem',
            transform: 'rotate(-2deg)',
            zIndex: -1
          }}></div>
          <img 
            src="/hero_cake.png" 
            alt="Flour Shower Signature Cake Art" 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '1.75rem',
              boxShadow: 'var(--shadow-md)',
              objectFit: 'cover'
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
