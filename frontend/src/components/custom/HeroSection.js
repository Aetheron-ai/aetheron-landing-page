import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ id }) => {
  return (
    <section 
      id={id}
      className="relative h-screen w-full overflow-hidden bg-black"
      data-testid="hero-section"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/lines-yZMTa4QiXI9XTmOnRl4DyrAl/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline 3D Background"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="font-mono text-xs md:text-sm text-white/50 tracking-[0.5em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            WELCOME TO
          </motion.p>

          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <span className="text-metallic">AETHERON</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-white/70 tracking-[0.1em] font-light">
              AI TECHNOLOGIES
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] text-white/40 tracking-widest">SYSTEMS ONLINE</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
