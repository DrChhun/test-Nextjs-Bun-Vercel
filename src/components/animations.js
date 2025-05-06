'use client';

import { animate } from 'motion';
import { useEffect, useRef } from 'react';

// Fade In animation
export function useFadeIn(selector, delay = 0, duration = 0.5) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      animate(
        element,
        { opacity: [0, 1] },
        { delay, duration, easing: 'ease-in-out' }
      );
    });
  }, [selector, delay, duration]);
}

// Slide In animation
export function useSlideIn(selector, direction = 'left', delay = 0, duration = 0.5) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const initialX = direction === 'left' ? -50 : direction === 'right' ? 50 : 0;
    const initialY = direction === 'up' ? 50 : direction === 'down' ? -50 : 0;
    
    elements.forEach(element => {
      animate(
        element,
        { 
          opacity: [0, 1],
          x: [initialX, 0],
          y: [initialY, 0] 
        },
        { delay, duration, easing: 'ease-out' }
      );
    });
  }, [selector, direction, delay, duration]);
}

// Stagger children animation
export function useStaggerChildren(parentSelector, childSelector, delay = 0, stagger = 0.1, duration = 0.5) {
  useEffect(() => {
    const parents = document.querySelectorAll(parentSelector);
    
    parents.forEach(parent => {
      const children = parent.querySelectorAll(childSelector);
      
      children.forEach((child, index) => {
        animate(
          child,
          { opacity: [0, 1], y: [20, 0] },
          { delay: delay + (index * stagger), duration, easing: 'ease-out' }
        );
      });
    });
  }, [parentSelector, childSelector, delay, stagger, duration]);
}

// Scale animation
export function useScale(selector, delay = 0, duration = 0.5) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      animate(
        element,
        { scale: [0.8, 1], opacity: [0, 1] },
        { delay, duration, easing: 'ease-out' }
      );
    });
  }, [selector, delay, duration]);
}

// Bounce animation
export function useBounce(selector, delay = 0, duration = 0.8) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      animate(
        element,
        { y: [0, -15, 0] },
        { 
          delay, 
          duration, 
          easing: ['ease-out', 'ease-in'],
          repeat: 1
        }
      );
    });
  }, [selector, delay, duration]);
}

// Animation for scroll-triggered effects
export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animation = target.dataset.animation || 'fade';
          const delay = parseFloat(target.dataset.delay || 0);
          const duration = parseFloat(target.dataset.duration || 0.5);

          switch (animation) {
            case 'fade':
              animate(
                target,
                { opacity: [0, 1] },
                { delay, duration, easing: 'ease-in-out' }
              );
              break;
            case 'slideUp':
              animate(
                target,
                { opacity: [0, 1], y: [50, 0] },
                { delay, duration, easing: 'ease-out' }
              );
              break;
            case 'slideLeft':
              animate(
                target,
                { opacity: [0, 1], x: [-50, 0] },
                { delay, duration, easing: 'ease-out' }
              );
              break;
            case 'slideRight':
              animate(
                target,
                { opacity: [0, 1], x: [50, 0] },
                { delay, duration, easing: 'ease-out' }
              );
              break;
            case 'scale':
              animate(
                target,
                { opacity: [0, 1], scale: [0.8, 1] },
                { delay, duration, easing: 'ease-out' }
              );
              break;
          }

          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      observer.observe(element);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
} 