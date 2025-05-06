'use client';

import { animate } from 'motion';

// Predefined hover effects
export const hoverEffects = {
  scale: {
    enter: { scale: 1.05 },
    leave: { scale: 1 }
  },
  lift: {
    enter: { y: -5, scale: 1.02 },
    leave: { y: 0, scale: 1 }
  },
  glow: {
    enter: { boxShadow: '0 5px 15px rgba(0,0,0,0.1)' },
    leave: { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }
  },
  highlight: {
    enter: { backgroundColor: 'rgba(59, 130, 246, 0.1)' },
    leave: { backgroundColor: 'rgba(59, 130, 246, 0)' }
  },
  pulse: {
    enter: { scale: [1, 1.02, 1, 1.01] },
    leave: { scale: 1 }
  }
};

// Default ease curve for smooth animations
const smoothEasing = [0.34, 1.56, 0.64, 1];

/**
 * Hook to add smooth hover effects to elements
 * @param {React.RefObject} ref - Reference to the element or container
 * @param {string|Array} effectType - Effect type or array of effect types
 * @param {string} selector - CSS selector for elements to apply effects to
 * @param {number} duration - Animation duration in seconds
 */
export function useHoverEffect(ref, effectType = 'scale', selector = 'a, button, [role="button"]', duration = 0.2) {
  if (typeof window === 'undefined') return;
  
  const applyEffects = (element) => {
    // Skip elements with the no-hover class
    if (element.classList.contains('no-hover')) return;
    
    // Get effects (can be single or multiple)
    const effects = Array.isArray(effectType) 
      ? effectType.map(type => hoverEffects[type]).filter(Boolean)
      : [hoverEffects[effectType]].filter(Boolean);
    
    if (effects.length === 0) return;
    
    // Combine all enter effects
    const enterProps = effects.reduce((acc, effect) => ({ ...acc, ...effect.enter }), {});
    const leaveProps = effects.reduce((acc, effect) => ({ ...acc, ...effect.leave }), {});
    
    // Add event listeners
    element.addEventListener('mouseenter', () => {
      animate(element, enterProps, { duration, easing: smoothEasing });
    });
    
    element.addEventListener('mouseleave', () => {
      animate(element, leaveProps, { duration, easing: smoothEasing });
    });
    
    element.addEventListener('focus', () => {
      animate(element, enterProps, { duration, easing: smoothEasing });
    });
    
    element.addEventListener('blur', () => {
      animate(element, leaveProps, { duration, easing: smoothEasing });
    });
  };
  
  // Initialize on mount
  if (ref.current) {
    if (selector) {
      // Apply to children matching selector
      ref.current.querySelectorAll(selector).forEach(applyEffects);
    } else {
      // Apply to the ref element itself
      applyEffects(ref.current);
    }
  }
  
  return {
    // Utility to manually apply effects to a new element
    applyToElement: applyEffects
  };
}

/**
 * Standalone function to apply hover effects to an element
 */
export function applyHoverEffect(element, effectType = 'scale', duration = 0.2) {
  if (!element) return;
  
  const effects = Array.isArray(effectType) 
    ? effectType.map(type => hoverEffects[type]).filter(Boolean)
    : [hoverEffects[effectType]].filter(Boolean);
  
  if (effects.length === 0) return;
  
  const enterProps = effects.reduce((acc, effect) => ({ ...acc, ...effect.enter }), {});
  const leaveProps = effects.reduce((acc, effect) => ({ ...acc, ...effect.leave }), {});
  
  element.addEventListener('mouseenter', () => {
    animate(element, enterProps, { duration, easing: smoothEasing });
  });
  
  element.addEventListener('mouseleave', () => {
    animate(element, leaveProps, { duration, easing: smoothEasing });
  });
} 