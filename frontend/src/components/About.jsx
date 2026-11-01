import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        
        {/* Visual Content */}
        <div className="animate-fade-in-up" style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
          <div style={{
            position: 'absolute',
            inset: '-10px',
            backgroundColor: 'var(--color-bg)',
            borderRadius: '1.5rem',
            border: '1px solid var(--color-border)',
            transform: 'rotate(2deg)',
            zIndex: 0
          }}></div>
          <img 
            src="/instructor_photo.png" 
            alt="Flour Shower Studio Cake Decorating" 
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              height: 'auto',
              borderRadius: '1.5rem',
              boxShadow: 'var(--shadow-md)',
              objectFit: 'cover'
            }} 
          />
        </div>

        {/* Text Content */}
        <div className="animate-fade-in-up delay-1" style={{ textAlign: 'left' }}>
          <span style={{
            display: 'inline-block',
            color: 'var(--color-primary)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
            fontSize: '0.85rem'
          }}>Advanced Culinary Workshop & Academy</span>
          
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.6rem)',
            marginBottom: '0.75rem',
            lineHeight: 1.2
          }}>
            Where Cake Becomes <br />
            <span style={{ color: 'var(--color-primary)' }}>Edible Illusion & High Art</span>
          </h2>
          <h4 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            color: 'var(--color-text-light)',
            marginBottom: '1.25rem'
          }}>47/1, Raza Abdul Majeed Alim Lane, Kattankudy, Sri Lanka</h4>
          
          <p style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
            marginBottom: '1.2rem',
            lineHeight: 1.7
          }}>
            Flour Shower Studio is an advanced, order in advance culinary workshop rather than a walk in bakery. We specialize in optical illusion baking, luxury multi tier celebration cakes, and full dessert table styling across the Batticaloa region.
          </p>
          <p style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
            marginBottom: '1.75rem',
            lineHeight: 1.7
          }}>
            Our studio also houses an interactive educational academy designed around natural light and professional stainless steel workstations. Students learn real cake baking, structural doweling, board wrapping, and razor sharp buttercream finishes through certificate awarded courses like our signature 2 Tier Real Wedding Cake Stacking Class.
          </p>
          <a 
            href="https://wa.me/94767707765"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost" 
            style={{ 
              border: '2px solid var(--color-primary)', 
              color: 'var(--color-primary)',
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Contact The Studio
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
