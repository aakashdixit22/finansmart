"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Small Business Owner",
      content: "This platform helped me manage my business finances more efficiently.",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Software Engineer",
      content: "I finally feel more in control of my financial planning thanks to this app.",
    },
    {
      id: 3,
      name: "Olivia Rodriguez",
      title: "Marketing Director",
      content: "The insights provided helped me make smarter investment decisions.",
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Freelance Designer",
      content: "The smart budgeting features make managing my irregular income a breeze.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">What Our Clients Say</h2>
          <p className="text-blue-700 mt-2">See how our platform helps people like you.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md overflow-hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-center mb-4">
              <QuoteIcon className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-gray-800 italic text-center">"{testimonials[activeIndex].content}"</p>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-blue-900">{testimonials[activeIndex].name}</h3>
              <p className="text-blue-600 text-sm">{testimonials[activeIndex].title}</p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            className="p-2 bg-white border border-blue-200 rounded-full text-blue-700 hover:bg-blue-50"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            className="p-2 bg-white border border-blue-200 rounded-full text-blue-700 hover:bg-blue-50"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
