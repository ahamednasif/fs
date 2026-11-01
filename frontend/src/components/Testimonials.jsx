import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Fathima R.",
      quote: "The 3 tier chocolate and gold leaf wedding cake was the crown jewel of our reception. Pure chocolate indulgence, glossy strawberries, and impeccable structural stability throughout the night!",
      role: "Wedding Client (Batticaloa)"
    },
    {
      name: "Ahamed M.",
      quote: "The 2 Tier Real Wedding Cake Stacking workshop at the Kattankudy studio was incredible. Working on pro stainless steel stations and mastering doweling and buttercream sharp edges gave me real confidence.",
      role: "Certified Masterclass Graduate"
    },
    {
      name: "Zahra N.",
      quote: "They designed a full nautical sailor theme for my son's birthday with an edible lighthouse, custom cupcakes, and the fudgiest brownies. The guests couldn't stop taking photos!",
      role: "Thematic Celebration Client"
    }
  ];

  const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <section id="reviews" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
         <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Client & Student Experiences</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem' }}>Moments Made Sweet at <span style={{ color: 'var(--color-primary)' }}>Flour Shower</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.75rem'
        }}>
          {reviews.map((review, idx) => (
            <div key={idx} style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{ color: 'rgba(233, 30, 99, 0.1)', position: 'absolute', top: '10px', right: '20px', fontSize: '5rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                &rdquo;
              </div>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p style={{ color: 'var(--color-text)', fontSize: '0.98rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>
                "{review.quote}"
              </p>
              <div>
                <h4 style={{ fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{review.name}</h4>
                <span style={{ color: 'var(--color-text-light)', fontSize: '0.85rem' }}>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
