import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isClickable, setIsClickable] = useState(false);
  const cursorRef = useRef(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const dotSpringConfig = { damping: 35, stiffness: 400 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const dotXSpring = useSpring(dotX, dotSpringConfig);
  const dotYSpring = useSpring(dotY, dotSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const hasDataCursor = target.dataset.cursor || target.closest('[data-cursor]');
      
      if (isLink || isButton || hasDataCursor) {
        setIsHovering(true);
        setIsClickable(true);
        
        if (hasDataCursor) {
          const cursorTarget = target.dataset.cursor || target.closest('[data-cursor]')?.dataset?.cursor;
          setHoverText(cursorTarget || '');
        } else if (isLink) {
          setHoverText('ENTER');
        } else {
          setHoverText('');
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const hasDataCursor = target.dataset.cursor || target.closest('[data-cursor]');
      
      if (isLink || isButton || hasDataCursor) {
        setIsHovering(false);
        setIsClickable(false);
        setHoverText('');
      }
    };

    document.body.classList.add('no-cursor');
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('no-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  // Hide on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        data-testid="custom-cursor"
      >
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            width: isHovering ? 60 : 32,
            height: isHovering ? 60 : 32,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/60"
            animate={{
              scale: isHovering ? 1 : 1,
              borderWidth: isHovering ? 1 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Plus sign for clickable */}
          {isClickable && !hoverText && (
            <motion.span
              className="text-white text-sm font-light"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              +
            </motion.span>
          )}
          
          {/* Hover text */}
          {hoverText && (
            <motion.span
              className="text-white text-[8px] font-mono tracking-wider whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-white"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
