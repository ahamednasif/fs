import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
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
        gridTemplateColumns: 'minmax(400px, 1fr) 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Text Content */}
        <div className="animate-fade-in-up">
          <span style={{
            display: 'inline-block',
            color: 'var(--color-primary)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1rem',
            fontSize: '0.9rem'
          }}>Premium Baking Academy</span>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
          }}>
            Master the Art of <br />
            <span style={{ color: 'var(--color-primary)' }}>Premium Cake Design</span>
          </h1>
          <p style={{
            color: 'var(--color-text-light)',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '500px',
            lineHeight: 1.8
          }}>
            Elevate your baking skills from anywhere in the world. Learn professional, mouth-watering techniques from an industry expert and join our community of passionate bakers.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Start Baking Today</button>
            <button className="btn btn-ghost" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Explore Courses</button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="animate-fade-in-up delay-1" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-20px',
            background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2), rgba(233, 30, 99, 0.05))',
            borderRadius: '2rem',
            transform: 'rotate(-3deg)',
            zIndex: -1
          }}></div>
          <img 
            src="/hero_cake.png" 
            alt="Signature Layered Cake" 
            style={{
              width: '100%',
              borderRadius: '2rem',
              boxShadow: 'var(--shadow-md)',
              objectFit: 'cover'
            }} 
          />
        </div>
      </div>
{/* Simple responsive override */}
<style>{`
  @media (max-width: 900px) {
    #home .container {
      grid-template-columns: 1fr !important;
      text-align: center;
    }
    #home p, #home .btn-group {
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
    }
  }
`}</style>
    </section>
  );
};

export default Hero;
