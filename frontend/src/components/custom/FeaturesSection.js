import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Brain, Layers, LayoutDashboard, Gauge, Shield } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Real-Time Machine Monitoring',
    description: 'Live status updates across your entire fleet'
  },
  {
    icon: Brain,
    title: 'Predictive AI Analytics',
    description: 'Forecast failures before they occur'
  },
  {
    icon: Layers,
    title: 'Industrial Automation Layer',
    description: 'Seamless integration with existing systems'
  },
  {
    icon: LayoutDashboard,
    title: 'Smart Dashboard Control',
    description: 'Unified command center for operations'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Maximize efficiency across all processes'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Industrial-grade data protection'
  }
];

const FeatureCard = ({ feature, index, isInView }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      className="group relative bg-surface border border-transparent hover:border-border-subtle rounded-sm p-6 md:p-8 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ 
        y: -5,
        backgroundColor: 'rgba(26, 26, 26, 1)'
      }}
      data-testid={`feature-card-${index}`}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)'
        }}
      />

      {/* Icon */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon 
          className="w-8 h-8 text-text-secondary group-hover:text-white transition-colors duration-300" 
          strokeWidth={1}
        />
      </motion.div>

      {/* Content */}
      <h3 className="font-heading text-lg md:text-xl text-white mb-2 tracking-tight">
        {feature.title}
      </h3>
      <p className="font-body text-sm text-text-muted leading-relaxed">
        {feature.description}
      </p>

      {/* Corner accent on hover */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-border-subtle transition-colors duration-300 rounded-tr-sm" />
    </motion.div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
      data-testid="features-section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-black to-black opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.3em] block mb-6">
            [ CAPABILITIES ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] text-white">
            Engineered for
            <span className="text-metallic"> Excellence</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
