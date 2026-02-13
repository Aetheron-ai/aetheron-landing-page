import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const textLines = [
    "We don't build apps.",
    "We build intelligent infrastructure."
  ];

  const description = "Aetheron AI integrates AI, machine systems, and industrial software to create intelligent production environments.";

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-surface py-24 md:py-32 overflow-hidden"
      data-testid="about-section"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="font-mono text-xs text-text-muted tracking-[0.3em]">
                [ ABOUT ]
              </span>
            </motion.div>

            {/* Main Text */}
            <div className="mb-8">
              {textLines.map((line, index) => (
                <motion.h2
                  key={index}
                  className={`font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] leading-tight ${
                    index === 1 ? 'text-metallic' : 'text-white'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                >
                  {line}
                </motion.h2>
              ))}
            </div>

            {/* Description */}
            <motion.p
              className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {description}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '50ms', label: 'Latency' },
                { value: '24/7', label: 'Monitoring' }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="font-mono text-2xl md:text-3xl text-white mb-1">{stat.value}</p>
                  <p className="font-mono text-xs text-text-muted tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1692030178613-8742cdf4a1fd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Technology"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-xl border border-border-subtle p-6 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="font-mono text-xs text-text-muted mb-2">ESTABLISHED</p>
                <p className="font-heading text-2xl text-white">2024</p>
              </motion.div>

              {/* Corner decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-border-subtle opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scanline effect */}
      <div className="scanline" />
    </section>
  );
};

export default AboutSection;
