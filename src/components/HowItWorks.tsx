"use client";

import React from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      step: "1",
      title: "Enter Your Text",
      description: "Simply type or paste your caption, quote, or any idea into our intuitive text box.",
    },
    {
      step: "2",
      title: "Choose a Style",
      description: "Select from a variety of artistic styles, themes, and layouts to match your vision.",
    },
    {
      step: "3",
      title: "Generate & Download",
      description: "Our AI instantly creates your image. Preview, refine, and download in high resolution.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-blue-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300"
          >
            <div className="text-5xl font-extrabold text-blue-600 mb-4">{step.step}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;