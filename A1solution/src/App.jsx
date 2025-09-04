import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx"
;
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


