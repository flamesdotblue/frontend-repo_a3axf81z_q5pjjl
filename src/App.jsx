import { useEffect } from 'react';
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.nav-item', { y: -20, autoAlpha: 0, stagger: 0.08, duration: 0.6 })
        .from('.hero-heading', { y: 30, autoAlpha: 0, duration: 0.8 }, '-=0.2')
        .from('.hero-subheading', { y: 20, autoAlpha: 0, duration: 0.7 }, '-=0.3')
        .from('.hero-cta', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, '-=0.2');
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
