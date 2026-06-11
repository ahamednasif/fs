import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Lifetime Portal Access',
      description: 'Review techniques and revisit your favorite modules anytime. Your enrollment never expires.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'HD Video Tutorials',
      description: 'Step-by-step guidance filmed in stunning high-definition, so you miss absolutely zero details.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
    },
    {
      title: 'Supportive Community',
      description: 'Join an exclusive forum of like-minded bakers. Share your creations and get direct feedback.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'white', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Why Learn <span style={{ color: 'var(--color-primary)' }}>With Us?</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {benefits.map((benefit, idx) => (
            <div key={idx} style={{ padding: '2rem' }}>
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
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>{benefit.title}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
