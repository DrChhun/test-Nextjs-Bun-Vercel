'use client';

import { usePathname } from 'next/navigation';
import { useState, createContext, useContext, useEffect } from 'react';
import usePageTransitionEffect from '../components/PageTransitionEffect';
import { animate } from 'motion';

// Create a context to manage transition state
const TransitionContext = createContext({
  isTransitioning: false,
  transitionType: 'fade',
  setTransitionType: () => {},
  progress: 0,
});

export const useTransition = () => useContext(TransitionContext);

export default function TransitionProvider({ children, defaultTransitionType = 'fade' }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState(defaultTransitionType);
  const [progress, setProgress] = useState(0);
  
  // Use our effect hook
  usePageTransitionEffect(transitionType, 0.5);
  
  // Track navigation status
  useEffect(() => {
    setIsTransitioning(true);
    setProgress(0);
    
    // Animate progress indicator
    const progressAnimation = animate(
      { progress: 0 },
      { progress: 100 },
      {
        duration: 0.5, 
        easing: [0.34, 0.53, 0.94, 1],
        onUpdate: latest => setProgress(latest.progress),
        onComplete: () => setIsTransitioning(false),
      }
    );
    
    return () => progressAnimation.stop();
  }, [pathname]);
  
  return (
    <TransitionContext.Provider 
      value={{ 
        isTransitioning, 
        transitionType,
        setTransitionType,
        progress,
      }}
    >
      {/* Navigation progress indicator */}
      {isTransitioning && (
        <div 
          className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all"
          style={{ width: `${progress}%` }}
        />
      )}
      {children}
    </TransitionContext.Provider>
  );
} 