'use client';

import { useEffect } from "react";
import { useScrollAnimation, useFadeIn, useSlideIn } from "../../components/animations";
import { animate } from "motion";
import Link from "next/link";

export default function Signup() {
  // Enable animations
  useFadeIn('.signup-title', 0.1, 0.6);
  useSlideIn('.signup-subtitle', 'up', 0.3, 0.6);
  
  // Animation for form fields
  useEffect(() => {
    const formFields = document.querySelectorAll('.form-field');
    
    formFields.forEach((field, index) => {
      animate(
        field,
        { opacity: [0, 1], y: [20, 0] },
        { delay: 0.4 + (index * 0.1), duration: 0.5, easing: 'ease-out' }
      );
      
      // Add focus animations
      const input = field.querySelector('input, textarea');
      if (input) {
        input.addEventListener('focus', () => {
          animate(field, 
            { borderColor: 'rgba(37, 99, 235, 0.5)' }, 
            { duration: 0.3 }
          );
        });
        
        input.addEventListener('blur', () => {
          animate(field, 
            { borderColor: 'rgba(var(--foreground), 0.1)' }, 
            { duration: 0.3 }
          );
        });
      }
    });
    
    // Animate submit button
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
      animate(
        submitButton,
        { opacity: [0, 1], scale: [0.95, 1] },
        { delay: 0.8, duration: 0.5, easing: 'ease-out' }
      );
      
      submitButton.addEventListener('mouseenter', () => {
        animate(submitButton, { scale: 1.05 }, { duration: 0.2 });
      });
      
      submitButton.addEventListener('mouseleave', () => {
        animate(submitButton, { scale: 1 }, { duration: 0.2 });
      });
    }
    
    // Animate login link
    const loginLink = document.querySelector('.login-link');
    if (loginLink) {
      animate(
        loginLink,
        { opacity: [0, 1] },
        { delay: 0.9, duration: 0.5 }
      );
    }
    
    return () => {
      formFields.forEach(field => {
        const input = field.querySelector('input, textarea');
        if (input) {
          input.removeEventListener('focus', () => {});
          input.removeEventListener('blur', () => {});
        }
      });
      
      if (submitButton) {
        submitButton.removeEventListener('mouseenter', () => {});
        submitButton.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-black/20 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="signup-title text-3xl font-bold">Create an Account</h1>
          <p className="signup-subtitle mt-2 text-foreground/70">
            Join thousands of users building amazing projects
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="form-field">
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-foreground/60">
                Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character
              </p>
            </div>
            
            <div className="form-field flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-foreground/80">
                I agree to the <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className="submit-button w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center login-link">
          <p className="text-sm text-foreground/70">
            Already have an account?{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 