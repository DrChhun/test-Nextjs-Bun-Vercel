'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { animate } from 'motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial animation for navbar
    animate(
      '.navbar',
      { y: [-20, 0], opacity: [0, 1] },
      { duration: 0.5, easing: 'ease-out' }
    );
    
    // Staggered animation for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      animate(
        link,
        { opacity: [0, 1], y: [-10, 0] },
        { delay: 0.1 + (index * 0.1), duration: 0.4, easing: 'ease-out' }
      );
    });
    
    // Animation for signup button
    animate(
      '.signup-button',
      { opacity: [0, 1], scale: [0.9, 1] },
      { delay: 0.5, duration: 0.4, easing: 'ease-out' }
    );
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation for mobile menu toggle
  useEffect(() => {
    if (isMenuOpen) {
      animate(
        '.mobile-menu',
        { opacity: [0, 1], height: ['0px', 'auto'] },
        { duration: 0.3, easing: 'ease-out' }
      );
      
      // Staggered animation for mobile menu items
      const mobileLinks = document.querySelectorAll('.mobile-link');
      mobileLinks.forEach((link, index) => {
        animate(
          link,
          { opacity: [0, 1], x: [-20, 0] },
          { delay: 0.1 + (index * 0.05), duration: 0.3, easing: 'ease-out' }
        );
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className={`navbar bg-white dark:bg-black/40 shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                YourCompany
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={`nav-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'border-blue-500 text-foreground' 
                    : 'border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`nav-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/about') 
                    ? 'border-blue-500 text-foreground' 
                    : 'border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20'
                }`}
              >
                About
              </Link>
              <Link 
                href="/features" 
                className={`nav-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/features') 
                    ? 'border-blue-500 text-foreground' 
                    : 'border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20'
                }`}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className={`nav-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/pricing') 
                    ? 'border-blue-500 text-foreground' 
                    : 'border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20'
                }`}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/contact') 
                    ? 'border-blue-500 text-foreground' 
                    : 'border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link 
              href="/signup" 
              className="signup-button ml-3 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`mobile-link block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/') 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300' 
                  : 'border-l-4 border-transparent text-foreground/70 hover:bg-foreground/5 hover:border-foreground/20 hover:text-foreground'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`mobile-link block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/about') 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300' 
                  : 'border-l-4 border-transparent text-foreground/70 hover:bg-foreground/5 hover:border-foreground/20 hover:text-foreground'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/features"
              className={`mobile-link block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/features') 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300' 
                  : 'border-l-4 border-transparent text-foreground/70 hover:bg-foreground/5 hover:border-foreground/20 hover:text-foreground'
              }`}
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`mobile-link block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/pricing') 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300' 
                  : 'border-l-4 border-transparent text-foreground/70 hover:bg-foreground/5 hover:border-foreground/20 hover:text-foreground'
              }`}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`mobile-link block pl-3 pr-4 py-2 text-base font-medium ${
                isActive('/contact') 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300' 
                  : 'border-l-4 border-transparent text-foreground/70 hover:bg-foreground/5 hover:border-foreground/20 hover:text-foreground'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/signup"
              className="mobile-link block px-4 py-2 mx-3 mt-2 text-center text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 