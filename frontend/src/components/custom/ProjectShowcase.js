import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Cpu, AlertTriangle, TrendingUp } from 'lucide-react';

const AnimatedNumber = ({ value, suffix = '', inView }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    const duration = 1500;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(numericValue * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [numericValue, inView]);

  return (
    <span className="font-mono">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const GlassPanel = ({ icon: Icon, label, value, suffix, delay, inView }) => (
  <motion.div
    className="bg-black/60 backdrop-blur-xl border border-border-subtle rounded-sm p-4 md:p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-4 h-4 text-text-secondary" />
      <span className="font-mono text-xs text-text-muted tracking-wider">{label}</span>
    </div>
    <p className="text-2xl md:text-3xl text-white">
      <AnimatedNumber value={value} suffix={suffix} inView={inView} />
    </p>
    {/* Pulse indicator */}
    <motion.div
      className="w-2 h-2 rounded-full bg-green-500 mt-3"
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);

const ProjectShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="project"
      ref={sectionRef}
      className="relative min-h-screen bg-black py-24 md:py-32 overflow-hidden"
      data-testid="project-section"
    >
      {/* Scanline effect */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
        animate={{ y: ['-100vh', '100vh'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.3em] block mb-6">
            [ PROJECT ]
          </span>
          
          {/* Massive Typography */}
          <motion.h2
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.04em] text-metallic leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            AETHERBUILT
          </motion.h2>
          
          <motion.p
            className="font-heading text-xl md:text-2xl text-text-secondary mt-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Industrial Machine Intelligence Platform
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Description */}
          <div>
            <motion.p
              className="font-body text-base md:text-lg text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              data-testid="project-description"
            >
              AetherBuilt is an AI-powered machine management and automation application 
              designed to monitor, optimize, and enhance industrial operations in real time.
            </motion.p>

            {/* Feature List */}
            <motion.ul
              className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                'Real-time machine diagnostics',
                'Predictive maintenance alerts',
                'AI-driven optimization',
                'Industrial-grade security'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-text-secondary rounded-full" />
                  <span className="font-body text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.button
              className="btn-metallic px-8 py-4 rounded-sm font-body text-sm tracking-wider text-white/90 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              data-cursor="VIEW PROJECT"
              data-testid="launch-demo-btn"
            >
              Launch Demo
            </motion.button>
          </div>

          {/* Right - Glass Panels */}
          <div className="relative">
            {/* Background image */}
            <motion.div
              className="absolute inset-0 -z-10 opacity-30"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Industrial"
                className="w-full h-full object-cover grayscale rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </motion.div>

            {/* Floating UI Panels */}
            <div className="grid grid-cols-2 gap-4">
              <GlassPanel
                icon={Activity}
                label="MACHINES ONLINE"
                value="1247"
                suffix=""
                delay={0.6}
                inView={isInView}
              />
              <GlassPanel
                icon={Cpu}
                label="CPU EFFICIENCY"
                value="94"
                suffix="%"
                delay={0.7}
                inView={isInView}
              />
              <GlassPanel
                icon={AlertTriangle}
                label="ALERTS TODAY"
                value="3"
                suffix=""
                delay={0.8}
                inView={isInView}
              />
              <GlassPanel
                icon={TrendingUp}
                label="THROUGHPUT"
                value="12"
                suffix="K/hr"
                delay={0.9}
                inView={isInView}
              />
            </div>

            {/* Status bar */}
            <motion.div
              className="mt-4 bg-black/60 backdrop-blur-xl border border-border-subtle rounded-sm p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-text-secondary">SYSTEM OPERATIONAL</span>
                </div>
                <span className="font-mono text-xs text-text-muted">v2.4.1</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-border-subtle opacity-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-border-subtle opacity-20" />
    </section>
  );
};

export default ProjectShowcase;
