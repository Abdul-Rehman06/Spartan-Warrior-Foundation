import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/Logo/Main-Logo.png" alt="Spartan Warrior Foundation" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : 'text-primary/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/donate" 
            className="px-5 py-2 rounded-full bg-accent hover:bg-accentHover text-white font-medium transition-all shadow-gold"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 py-6 px-6 flex flex-col gap-4 md:hidden shadow-lg"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/donate" 
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-accent text-center text-white font-semibold shadow-gold"
          >
            Donate Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;