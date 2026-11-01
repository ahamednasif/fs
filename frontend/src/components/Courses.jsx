import React, { useState } from 'react';

const courseOfferings = [
  {
    id: 1,
    title: 'Hyper Realistic Illusion Cakes',
    description: 'Optical illusion art like textured pineapple cakes carved and sliced to reveal delectable interior layers.',
    category: 'Optical Illusion Art',
    image: '/course_fondant.png'
  },
  {
    id: 2,
    title: 'Multi Tier Luxury Wedding Cakes',
    description: 'Pure chocolate indulgence, delicate gold leaf accents, fresh strawberries, and structural doweling.',
    category: 'Weddings & Galas',
    image: '/course_wedding.png'
  },
  {
    id: 3,
    title: 'Thematic Spreads & Dessert Tables',
    description: 'Complete themed tables, edible lighthouses, custom cupcakes, boxed fudgy brownies, and strawberry chocolate slices.',
    category: 'Dessert Styling',
    image: '/course_buttercream.png'
  },
  {
    id: 4,
    title: '2 Tier Wedding Cake Stacking Class',
    description: 'Certificate awarded workshop: real cake baking, structural doweling, board wrapping, and flawless buttercream finishes.',
    category: 'Certified Masterclass',
    image: '/hero_cake.png'
  }
];

const Courses = () => {
  const [services] = useState(courseOfferings);

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="animate-fade-in-up">
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Bespoke Portfolio & Certified Academy</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem' }}>Signature Creations & <span style={{ color: 'var(--color-primary)' }}>Studio Masterclasses</span></h2>
          <p style={{ color: 'var(--color-text-light)', maxWidth: '660px', margin: '0.75rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From hyper realistic illusion cakes and multi tier wedding centerpieces to certified in studio masterclasses at professional stainless steel stations.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, idx) => (
            <div key={service.id} className={`animate-fade-in-up delay-${idx+1}`} style={{
              backgroundColor: 'var(--color-card-bg)',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-med)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid var(--color-border)'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ padding: '0.5rem' }}>
                 <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', aspectRatio: '4/3' }}>
                    <img src={service.image?.replace('.jpg', '.png') || '/hero_cake.png'} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.95)', padding: '0.3rem 0.85rem', borderRadius: '2rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}>
                      {service.category || 'Signature Art'}
                    </div>
                 </div>
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '0.92rem', lineHeight: 1.6 }}>{service.description}</p>
                <a 
                  href="https://wa.me/94767707765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.75rem', textDecoration: 'none', textAlign: 'center', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Quote & Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
           <a 
            href="https://wa.me/94767707765"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost" 
            style={{ border: '2px solid var(--color-border)', padding: '0.85rem 2.25rem', textDecoration: 'none', fontWeight: 600 }}
           >
            Request Dynamic Quote / Upcoming Workshop Calendar
           </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
