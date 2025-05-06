'use client';

import { useTransition } from '../providers/TransitionProvider';
import { useEffect, useRef } from 'react';
import { animate } from 'motion';

const transitionOptions = [
  { value: 'fade', label: 'Fade' },
  { value: 'slide', label: 'Slide' },
  { value: 'scale', label: 'Scale' },
  { value: 'flip', label: 'Flip' },
  { value: 'swipe', label: 'Swipe' },
  { value: 'zoom', label: 'Zoom' },
];

export default function TransitionController() {
  const { transitionType, setTransitionType } = useTransition();
  const controllerRef = useRef(null);
  
  // Add enter/exit animations for the controller itself
  useEffect(() => {
    if (!controllerRef.current) return;
    
    // Initial animation
    animate(
      controllerRef.current,
      { 
        opacity: [0, 1],
        y: [20, 0],
        scale: [0.9, 1]
      },
      { 
        duration: 0.4,
        easing: [0.34, 1.56, 0.64, 1],
        delay: 0.5
      }
    );
    
    // Add hover effect to the controller
    controllerRef.current.addEventListener('mouseenter', () => {
      animate(
        controllerRef.current,
        { scale: 1.05, y: -5 },
        { duration: 0.2, easing: [0.34, 1.56, 0.64, 1] }
      );
    });
    
    controllerRef.current.addEventListener('mouseleave', () => {
      animate(
        controllerRef.current,
        { scale: 1, y: 0 },
        { duration: 0.2, easing: [0.34, 1.56, 0.64, 1] }
      );
    });
    
    return () => {
      if (controllerRef.current) {
        controllerRef.current.removeEventListener('mouseenter', () => {});
        controllerRef.current.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div 
      ref={controllerRef}
      className="fixed bottom-4 right-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg z-50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium">Transition:</span>
        <select 
          value={transitionType}
          onChange={(e) => {
            setTransitionType(e.target.value);
            // Flash feedback animation on change
            animate(
              controllerRef.current,
              { scale: [1, 1.1, 1] },
              { duration: 0.3, easing: [0.34, 1.56, 0.64, 1] }
            );
          }}
          className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-transparent transition-all hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        >
          {transitionOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
} 