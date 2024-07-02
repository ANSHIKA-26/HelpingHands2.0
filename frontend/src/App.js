import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import "./index.css"
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FAQ/>
      <Contact/>
    </div>
  );
}

export default App;
