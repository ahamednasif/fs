import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // We try to fetch from our backend, but fallback to local data if needed
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => {
        console.log('Backend not available, using fallback data.', err);
        setCourses([
          {
            id: 1,
            title: 'Fondant Basics',
            description: 'Master the art of smooth fondant covering and sharp edges.',
            difficulty: 'Beginner',
            image: '/course_fondant.png' 
          },
          {
            id: 2,
            title: 'Tiered Wedding Cakes',
            description: 'Learn structural integrity and elegant floral designs for weddings.',
            difficulty: 'Advanced',
            image: '/course_wedding.png'
          },
          {
            id: 3,
            title: 'Buttercream Florals',
            description: 'Pipe breathtaking, lifelike flowers using glossy buttercream.',
            difficulty: 'Intermediate',
            image: '/course_buttercream.png'
          }
        ]);
      });
  }, []);

  return (
    <section id="courses" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Curriculum</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem' }}>Featured <span style={{ color: 'var(--color-primary)' }}>Courses</span></h2>
          <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            Choose from our selection of premium and meticulously crafted classes to take your baking to the next level.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {courses.map((course, idx) => (
            <div key={course.id} className={`animate-fade-in-up delay-${idx+1}`} style={{
              backgroundColor: 'var(--color-card-bg)',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-med)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ padding: '0.5rem' }}>
                 <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', aspectRatio: '4/3' }}>
                    <img src={course.image.replace('.jpg', '.png')} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)' }}>
                      {course.difficulty}
                    </div>
                 </div>
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{course.title}</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', flexGrow: 1 }}>{course.description}</p>
                <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
           <button className="btn btn-ghost" style={{ border: '2px solid var(--color-border)', padding: '0.75rem 2rem' }}>View All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
