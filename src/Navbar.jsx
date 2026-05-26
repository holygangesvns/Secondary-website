import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Flips to true once you scroll past 40 pixels
      setScrolled(window.scrollY > 40);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-ganges-blue/85 backdrop-blur-xl py-3 shadow-lg border-b border-saffron/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-bold text-2xl tracking-widest uppercase">
          Holy Ganges
        </div>
        <nav className="hidden md:flex gap-8 text-white/80 font-medium">
          <a href="#" className="hover:text-saffron transition-colors">Experiences</a>
          <a href="#" className="hover:text-saffron transition-colors">Dorms</a>
          <a href="#" className="hover:text-saffron transition-colors">Journal</a>
        </nav>
      </div>
    </header>
  );
}