import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialBar from './components/SocialBar';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <CTABanner />
      <Contact />
      <Footer />
      <SocialBar />
    </div>
  );
}

export default App;
