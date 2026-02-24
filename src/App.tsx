import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };


  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <div className="max-w-7xl mx-auto my-12 bg-card/80 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden">
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
