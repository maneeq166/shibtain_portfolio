import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

export default function MobileTestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out animation
      setIsVisible(false);
      
      // After fade out, change to next testimonial and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500); // Half second for fade out
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 z-30">
      <div
        className={`transition-all duration-500 ease-in-out transform ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-full'
        }`}
      >
        <TestimonialCard
          title={testimonials[currentIndex].title}
          avatar={testimonials[currentIndex].avatar}
          name={testimonials[currentIndex].name}
          role={testimonials[currentIndex].role}
        />
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-2 gap-1">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}