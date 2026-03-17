import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import DroneSolutions from './components/DroneSolutions';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Leadership from './components/Leadership';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <DroneSolutions />
      <Technologies />
      <WhyChooseUs />
      <Leadership />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
