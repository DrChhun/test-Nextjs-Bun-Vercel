'use client';

import { useTransition } from '../providers/TransitionProvider';
import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { useHoverEffect } from './HoverEffects';

export default function PageTransition({ children }) {
  const { isTransitioning } = useTransition();
  const containerRef = useRef(null);

  // Apply hover effects to interactive elements using our utility
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Wait for content to fully render before applying effects
    const timer = setTimeout(() => {
      // Apply hover effects to all interactive elements
      const interactive = containerRef.current.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], .interactive'
      );
      
      interactive.forEach(element => {
        // Apply different hover effects based on element type
        if (element.tagName === 'BUTTON' || element.getAttribute('role') === 'button') {
          // Buttons get scale+glow effect
          useHoverEffect({ current: element }, ['scale', 'glow']);
        } else if (element.tagName === 'A') {
          // Links get lift effect
          useHoverEffect({ current: element }, ['lift']);
        } else {
          // Other interactive elements get subtle scale effect
          useHoverEffect({ current: element }, 'scale');
        }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [children]);
  
  return (
    <div 
      ref={containerRef}
      id="page-container"
      className={`w-full transition-all duration-300 ${isTransitioning ? 'pointer-events-none' : ''}`}
      style={{ 
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
} 