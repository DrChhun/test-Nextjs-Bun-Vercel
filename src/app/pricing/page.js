'use client';

import { useEffect } from "react";
import { useScrollAnimation } from "../../components/animations";
import { animate } from "motion";
import Link from "next/link";

export default function Pricing() {
  // Enable scroll animations
  useScrollAnimation();
  
  // Add hover animations for plan cards
  useEffect(() => {
    const planCards = document.querySelectorAll('.plan-card');
    
    planCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const isHighlighted = card.classList.contains('highlighted-plan');
        
        // Skip animation for already highlighted plan
        if (!isHighlighted) {
          animate(card, 
            { 
              y: -8,
              scale: 1.03,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }, 
            { duration: 0.3 }
          );
        }
      });
      
      card.addEventListener('mouseleave', () => {
        const isHighlighted = card.classList.contains('highlighted-plan');
        
        // Skip animation for already highlighted plan
        if (!isHighlighted) {
          animate(card, 
            { 
              y: 0,
              scale: 1,
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }, 
            { duration: 0.3 }
          );
        }
      });
    });
    
    // Add hover animations for buttons
    const buttons = document.querySelectorAll('.plan-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        animate(button, { scale: 1.05 }, { duration: 0.2 });
      });
      
      button.addEventListener('mouseleave', () => {
        animate(button, { scale: 1 }, { duration: 0.2 });
      });
    });
    
    return () => {
      planCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "per month",
      description: "Everything you need to get started",
      features: [
        "Core platform features",
        "Up to 10 users",
        "5GB storage",
        "Basic support",
        "48-hour response time"
      ],
      buttonText: "Get Started",
      highlighted: false,
      link: "/signup"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Perfect for growing businesses",
      features: [
        "All Basic features",
        "Up to 50 users",
        "25GB storage",
        "Priority support",
        "24-hour response time",
        "Advanced analytics"
      ],
      buttonText: "Try Pro",
      highlighted: true,
      link: "/signup"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large-scale operations",
      features: [
        "All Pro features",
        "Unlimited users",
        "100GB storage",
        "Dedicated support",
        "4-hour response time",
        "Custom integrations",
        "SSO authentication"
      ],
      buttonText: "Contact Sales",
      highlighted: false,
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 
        className="text-4xl font-bold mb-6 text-center"
        data-animate
        data-animation="fade"
      >
        Pricing Plans
      </h1>
      <p 
        className="text-lg text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
        data-animate
        data-animation="slideUp"
        data-delay="0.2"
      >
        Choose the perfect plan for your needs. All plans include our core features, updates, and community support.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`plan-card rounded-xl p-8 ${
              plan.highlighted 
                ? 'highlighted-plan bg-blue-600 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/30 scale-105 relative z-10' 
                : 'bg-white dark:bg-black/20 shadow-md'
            }`}
            data-animate
            data-animation="slideUp"
            data-delay={0.3 + (index * 0.15)}
          >
            {plan.highlighted && (
              <div 
                className="absolute -top-4 left-0 right-0 text-center"
                data-animate
                data-animation="scale"
                data-delay="0.8"
              >
                <span className="bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={`ml-1 ${plan.highlighted ? 'text-blue-100' : 'text-foreground/60'}`}>
                {plan.period}
              </span>
            </div>
            <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-foreground/70'}`}>
              {plan.description}
            </p>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg 
                    className={`w-5 h-5 mr-2 ${plan.highlighted ? 'text-blue-200' : 'text-blue-500'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={plan.link}
              className={`plan-button block w-full py-3 rounded-lg font-medium transition-colors text-center ${
                plan.highlighted 
                  ? 'bg-white text-blue-600 hover:bg-blue-50' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 