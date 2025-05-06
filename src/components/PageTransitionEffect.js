'use client';

import { animate, spring } from 'motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Available transition types with smoother configurations
const transitionTypes = {
  fade: {
    enter: { opacity: [0, 1], y: [10, 0] },
    exit: { opacity: [1, 0], y: [0, -10] },
  },
  slide: {
    enter: { opacity: [0, 1], x: [50, 0] },
    exit: { opacity: [1, 0], x: [0, -50] },
  },
  scale: {
    enter: { opacity: [0, 1], scale: [0.95, 1] },
    exit: { opacity: [1, 0], scale: [1, 1.05] },
  },
  flip: {
    enter: { opacity: [0, 1], rotateX: [15, 0] },
    exit: { opacity: [1, 0], rotateX: [0, -15] },
  },
  swipe: {
    enter: { opacity: [0, 1], x: [100, 0], y: [20, 0] },
    exit: { opacity: [1, 0], x: [0, -100], y: [0, 20] },
  },
  zoom: {
    enter: { opacity: [0, 1], scale: [0.8, 1] },
    exit: { opacity: [1, 0], scale: [1, 1.2] },
  },
};

// Spring configurations for smoother animations
const springConfig = {
  stiffness: 300,
  damping: 30,
};

export default function usePageTransitionEffect(type = 'fade', duration = 0.5) {
  const path = usePathname();
  const prevPathRef = useRef(path);
  
  useEffect(() => {
    // Don't run on initial render
    if (prevPathRef.current === path) {
      return;
    }
    
    const transition = transitionTypes[type] || transitionTypes.fade;
    const container = document.getElementById('page-container');
    
    if (container) {
      const runTransition = async () => {
        // Exit animation - use spring for smoothness
        await animate(
          container,
          transition.exit,
          { 
            duration: duration / 2, 
            easing: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
            delay: 0.05
          }
        ).finished;
        
        // Enter animation - use spring for smoothness
        await animate(
          container,
          transition.enter,
          { 
            duration: duration / 2, 
            easing: [0.34, 1.56, 0.64, 1], // Smooth cubic-bezier with slight overshoot
            delay: 0
          }
        ).finished;
      };
      
      runTransition();
      prevPathRef.current = path;
    }
  }, [path, type, duration]);
  
  return null;
} 