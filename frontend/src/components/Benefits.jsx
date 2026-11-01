import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Hyper Realistic & Narrative Art',
      description: 'From optical illusion cakes to custom nautical themes with edible lighthouses, our cakes captivate your guests before the first slice.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    },
    {
      title: 'Pro Stainless Steel Academy',
      description: 'Intensive, hands on workshops in a sunlit studio with dedicated stainless steel workstations, real baking, doweling, and certified diplomas.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      title: 'Dynamic Quoting & Coordination',
      description: 'Order in advance service. Coordinate directly on WhatsApp for transparent dynamic quotes based on design weight, complexity, and delivery.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="section" style={{ backgroundColor: 'white', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>The Flour Shower Standard</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem' }}>Why Our Studio Is <span style={{ color: 'var(--color-primary)' }}>Distinct</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {benefits.map((benefit, idx) => (
            <div key={idx} style={{ padding: '2rem 1.5rem', backgroundColor: 'var(--color-bg)', borderRadius: '1.25rem', border: '1px solid var(--color-border)' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(233, 30, 99, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.85rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{benefit.title}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, fontSize: '0.93rem' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
