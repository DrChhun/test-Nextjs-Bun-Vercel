'use client';

import { useScrollAnimation } from "../../components/animations";

export default function About() {
  // Enable scroll animations
  useScrollAnimation();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 
        className="text-4xl font-bold mb-8 text-center"
        data-animate
        data-animation="fade"
      >
        About Us
      </h1>
      <div 
        className="bg-white dark:bg-black/20 shadow-md rounded-xl p-8"
        data-animate
        data-animation="slideUp"
        data-delay="0.2"
      >
        <p 
          className="text-lg mb-6"
          data-animate
          data-animation="slideLeft"
          data-delay="0.4"
        >
          Our company is dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age. 
          Founded in 2020, we've quickly grown to become a trusted partner for organizations around the world.
        </p>
        <p 
          className="text-lg mb-6"
          data-animate
          data-animation="slideLeft"
          data-delay="0.6"
        >
          Our team consists of passionate developers, designers, and product specialists who are committed to excellence in everything we do.
          We believe in building products that are not only powerful but also intuitive and accessible to everyone.
        </p>
        <p 
          className="text-lg"
          data-animate
          data-animation="slideLeft"
          data-delay="0.8"
        >
          Our vision is to create technology that makes a positive impact on people's lives and helps businesses achieve their full potential.
        </p>
      </div>
    </div>
  );
} 