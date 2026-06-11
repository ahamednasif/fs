import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AuthorityBar from '../components/AuthorityBar';
import About from '../components/About';
import Courses from '../components/Courses';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <About />
        <Courses />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;
