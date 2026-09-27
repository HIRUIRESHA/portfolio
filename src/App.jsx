import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-accent selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;