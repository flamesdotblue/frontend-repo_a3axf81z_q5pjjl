import { useEffect } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  useEffect(() => {
    // No-op here; intro animation is orchestrated in App
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="nav-item inline-flex items-center gap-2 font-semibold text-white/90">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
            <Rocket className="h-4 w-4" />
          </span>
          <span>Flames.dev</span>
        </a>
        <ul className="flex items-center gap-6 text-sm text-white/80">
          <li><a className="nav-item hover:text-white" href="#home" onClick={(e)=>handleScroll(e,'#home')}>Home</a></li>
          <li><a className="nav-item hover:text-white" href="#projects" onClick={(e)=>handleScroll(e,'#projects')}>Projects</a></li>
          <li><a className="nav-item hover:text-white" href="#about" onClick={(e)=>handleScroll(e,'#about')}>About</a></li>
          <li><a className="nav-item hover:text-white" href="#contact" onClick={(e)=>handleScroll(e,'#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
