import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ImmersiveSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const text = "Built for Industrial Evolution.";

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
      data-testid="immersive-section"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-surface/30 via-transparent to-transparent" />
        
        {/* Abstract shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-border-subtle opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-border-subtle opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.03em] leading-tight">
          {text.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.3em]">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className={`inline-block ${wordIndex === 2 || wordIndex === 3 ? 'text-metallic' : 'text-white'}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                  transition={{
                    delay: 0.05 * (wordIndex * 5 + charIndex),
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <motion.p
          className="font-mono text-xs md:text-sm text-text-muted tracking-[0.2em] mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          POWERING THE FUTURE OF MANUFACTURING
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
      </motion.div>

      {/* Corner coordinates */}
      <div className="absolute top-8 left-8 z-10">
        <span className="font-mono text-[10px] text-text-muted tracking-wider">47.6062° N</span>
      </div>
      <div className="absolute top-8 right-8 z-10">
        <span className="font-mono text-[10px] text-text-muted tracking-wider">122.3321° W</span>
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <span className="font-mono text-[10px] text-text-muted tracking-wider">SECTOR_07</span>
      </div>
      <div className="absolute bottom-8 right-8 z-10">
        <span className="font-mono text-[10px] text-text-muted tracking-wider">ACTIVE</span>
      </div>
    </section>
  );
};

export default ImmersiveSection;
