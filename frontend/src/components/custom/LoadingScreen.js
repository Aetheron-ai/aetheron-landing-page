import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingMessages = [
  'INITIALIZING INTELLIGENCE...',
  'CALIBRATING SYSTEMS...',
  'BOOTING AETHERON CORE...'
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING INTELLIGENCE...');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress < 33) {
      setLoadingText(loadingMessages[0]);
    } else if (progress < 66) {
      setLoadingText(loadingMessages[1]);
    } else {
      setLoadingText(loadingMessages[2]);
    }
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 300);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          data-testid="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: 'easeInOut' }
          }}
        >
          {/* Logo */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{
                filter: [
                  'hue-rotate(0deg) brightness(1)',
                  'hue-rotate(10deg) brightness(1.1)',
                  'hue-rotate(-10deg) brightness(0.9)',
                  'hue-rotate(0deg) brightness(1)'
                ]
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-light tracking-[-0.05em] text-metallic">
                AETHERON
              </h1>
              <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                  x: [-2, 2, -2],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl font-light tracking-[-0.05em] text-red-500/30">
                  AETHERON
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.p
            key={loadingText}
            className="font-mono text-xs md:text-sm text-text-secondary mb-8 tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            data-testid="loading-text"
          >
            {loadingText}
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-64 md:w-80">
            {/* Progress Bar */}
            <div className="relative h-[2px] bg-surface-highlight overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full liquid-chrome rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.p
              className="font-mono text-xs text-text-muted mt-4 text-center"
              data-testid="loading-progress"
            >
              {progress}%
            </motion.p>
          </div>

          {/* Subtle corner decorations */}
          <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-border-subtle opacity-30" />
          <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-border-subtle opacity-30" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-border-subtle opacity-30" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-border-subtle opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
