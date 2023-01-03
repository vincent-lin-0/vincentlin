import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../pages/About';
import Cards from "../Cards";
import Education from "../pages/Education";

function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Education/>
      <Cards/>
    </>
  );
}

export default Home;