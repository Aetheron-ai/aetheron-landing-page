import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setCurrentPage('home');
              const element = document.getElementById('home');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <img
              src="https://customer-assets.emergentagent.com/job_nexus-intelligence-2/artifacts/aokj7wyk_Aetheron%20Logo.png"
              alt="Aetheron Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-lg text-white tracking-tight hidden sm:block">
              AETHERON
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  const element = document.getElementById(item.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-mono text-xs tracking-widest transition-colors ${
                  currentPage === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                    const element = document.getElementById(item.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block w-full text-left font-mono text-sm tracking-widest py-2 ${
                    currentPage === item.id ? 'text-white' : 'text-white/50'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;