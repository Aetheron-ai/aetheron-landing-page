import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const headline1 = "Engineering Intelligent Machines.";
  const headline2 = "Redefining Industrial Reality.";

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const handleSplineLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-black"
      data-testid="hero-section"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/IsZ0QpMcIw1kJS7qwtIv3M0S/scene.splinecode"
          onLoad={handleSplineLoad}
          style={{ width: '100%', height: '100%' }}
        />
        {/* Fallback gradient while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />
        )}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-[2] grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          {/* Welcome Text */}
          <motion.p
            className="font-mono text-xs md:text-sm text-text-secondary tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="hero-welcome"
          >
            WELCOME TO AETHERON AI TECHNOLOGIES PVT LTD
          </motion.p>

          {/* Main Headlines */}
          <div className="mb-8">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.03em] leading-[0.95] text-white">
              {/* First line */}
              <span className="block mb-2">
                {headline1.split('').map((char, i) => (
                  <motion.span
                    key={`h1-${i}`}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className={`inline-block ${char === ' ' ? 'w-[0.3em]' : ''}`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              
              {/* Second line */}
              <span className="block text-metallic">
                {headline2.split('').map((char, i) => (
                  <motion.span
                    key={`h2-${i}`}
                    custom={i + headline1.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className={`inline-block ${char === ' ' ? 'w-[0.3em]' : ''}`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <motion.p
            className="font-body text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            data-testid="hero-subtext"
          >
            Aetheron AI Technologies builds intelligent machine ecosystems powered by 
            AI-driven automation and industrial precision.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              className="btn-metallic px-8 py-4 rounded-sm font-body text-sm tracking-wider text-white/90 transition-all duration-300 hover:scale-105"
              whileHover={{ 
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              data-cursor="EXPLORE"
              data-testid="hero-cta"
              onClick={() => {
                const projectSection = document.getElementById('project');
                projectSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore AetherBuilt
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <span className="font-mono text-[10px] text-text-muted tracking-widest mb-2">SCROLL</span>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-border-subtle opacity-20 z-10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-border-subtle opacity-20 z-10" />
    </section>
  );
};

export default HeroSection;
