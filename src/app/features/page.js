'use client';

import { useEffect } from "react";
import { useScrollAnimation, useStaggerChildren } from "../../components/animations";
import { animate } from "motion";

export default function Features() {
  // Enable scroll animations
  useScrollAnimation();
  
  // Apply staggered animation to feature cards
  useStaggerChildren('.features-grid', '.feature-card', 0.2, 0.15, 0.6);
  
  // Add hover animations
  useEffect(() => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        animate(card, 
          { 
            y: -5,
            scale: 1.02,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }, 
          { duration: 0.2 }
        );
      });
      
      card.addEventListener('mouseleave', () => {
        animate(card, 
          { 
            y: 0,
            scale: 1,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }, 
          { duration: 0.2 }
        );
      });
    });
    
    return () => {
      featureCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const features = [
    {
      title: "Modern Design",
      description: "Our platform features a clean, intuitive interface built with the latest design principles. Responsive layouts ensure your experience is seamless across all devices, from mobile phones to desktop computers.",
      icon: "✨"
    },
    {
      title: "Performance First",
      description: "Speed is at the core of everything we build. Our application is optimized for lightning-fast load times and smooth interactions, providing a fluid user experience even under heavy usage.",
      icon: "⚡"
    },
    {
      title: "Developer Experience",
      description: "Built with developers in mind, our platform offers comprehensive documentation, intuitive APIs, and powerful development tools that make extending and customizing the system a breeze.",
      icon: "🛠️"
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights into user behavior with our detailed analytics dashboard. Track key metrics, visualize data trends, and make informed decisions based on real-time information.",
      icon: "📊"
    },
    {
      title: "Enterprise Security",
      description: "Your data's security is our priority. We implement industry-leading security measures, including end-to-end encryption, regular security audits, and compliance with international security standards.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or issues. Whether through chat, email, or phone, we're committed to providing prompt and helpful assistance.",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 
        className="text-4xl font-bold mb-12 text-center"
        data-animate
        data-animation="fade"
      >
        Our Features
      </h1>
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card bg-white dark:bg-black/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 