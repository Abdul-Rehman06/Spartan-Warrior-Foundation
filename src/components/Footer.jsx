import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-20 border-t-4 border-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 bg-white p-3 rounded-xl w-fit">
              <img src="/assets/Logo/Logo-Full.png" alt="Spartan Warrior Foundation" className="h-12 w-auto" onError={(e) => e.target.src='/assets/Logo/Logo.png'} />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Providing financial literacy education, credit education resources, classroom access, and tools for individuals ready to learn and take ownership of their financial future.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-12 md:justify-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-accent text-xl mb-2 font-bold">Quick Links</h4>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Disclaimer</Link>
              <Link to="/sponsor-match" className="text-gray-300 hover:text-white transition-colors text-sm">Sponsor Match Details</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Spartan Warrior Foundation. All rights reserved. <br className="md:hidden" />
            We do not provide credit repair services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;