import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      quote: "The Buttercream Florals course completely transformed my small business. My cakes look perfectly professional now, and I can charge premium prices!",
      role: "Home Bakery Owner"
    },
    {
      name: "Emily R.",
      quote: "I've bought other courses before but the detail in Flour Shower's videos is unmatched. It truly feels like you are getting 1-on-1 mentorship.",
      role: "Hobbyist"
    },
    {
      name: "Michael T.",
      quote: "Learning structural integrity for wedding cakes was always intimidating. The tiering methods taught here are foolproof. Highly recommend!",
      role: "Pastry Chef"
    }
  ];

  const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
         <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Student <span style={{ color: 'var(--color-primary)' }}>Success Stories</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((review, idx) => (
            <div key={idx} style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative'
            }}>
              <div style={{ color: 'rgba(233, 30, 99, 0.1)', position: 'absolute', top: '10px', right: '20px', fontSize: '5rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                &rdquo;
              </div>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>
                "{review.quote}"
              </p>
              <div>
                <h4 style={{ fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{review.name}</h4>
                <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
