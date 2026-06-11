import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr minmax(400px, 1fr)',
        gap: '5rem',
        alignItems: 'center'
      }}>
        
        {/* Visual Content */}
        <div className="animate-fade-in-up" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-15px',
            backgroundColor: 'var(--color-bg)',
            borderRadius: '1.5rem',
            border: '1px solid var(--color-border)',
            transform: 'rotate(2deg)',
            zIndex: 0
          }}></div>
          <img 
            src="/instructor_photo.png" 
            alt="Instructor Piping Frosting" 
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              borderRadius: '1.5rem',
              boxShadow: 'var(--shadow-md)',
              objectFit: 'cover'
            }} 
          />
        </div>

        {/* Text Content */}
        <div className="animate-fade-in-up delay-1">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
          }}>
            Meet Your <span style={{ color: 'var(--color-primary)' }}>Instructor</span>
          </h2>
          <h4 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '1.25rem',
            color: 'var(--color-text-light)',
            marginBottom: '1.5rem'
          }}>Head Baker & Founder of Flour Shower</h4>
          
          <p style={{
            color: 'var(--color-text)',
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            With over 15 years of professional baking experience in top-tier kitchens, I'm passionate about translating complex bakery techniques into easy-to-follow lessons for home bakers. 
          </p>
          <p style={{
            color: 'var(--color-text)',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: 1.8
          }}>
            My signature style blends classic elegance with modern flavors, ensuring that every creation not only looks breathtaking but tastes extraordinary. Whether you're a beginner or aspiring professional, I'll guide you step-by-step.
          </p>
          <button className="btn btn-ghost" style={{ 
            border: '2px solid var(--color-primary)', 
            color: 'var(--color-primary)',
            padding: '0.75rem 2rem'
          }}>Read My Story</button>
        </div>

      </div>
{/* Responsive override */}
<style>{`
  @media (max-width: 900px) {
    #about .container {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
    </section>
  );
};

export default About;
