"use client";

import React from "react";
import {
  Sparkles,
  Image,
  Share2,
  LayoutTemplate,
  Repeat,
  Palette,
  LucideIcon
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featureList: Feature[] = [
  {
    icon: Sparkles,
    title: "AI-Powered Creativity",
    description:
      "Leverage advanced AI to transform simple text into rich, visually appealing graphics instantly.",
  },
  {
    icon: LayoutTemplate,
    title: "Customizable Templates",
    description:
      "Choose from a wide array of professional templates or design your own to match your brand.",
  },
  {
    icon: Palette,
    title: "Vibrant Color Palettes",
    description:
      "Experiment with diverse color schemes and gradients to make your images truly pop.",
  },
  {
    icon: Repeat,
    title: "Unlimited Revisions",
    description:
      "Generate as many variations as you need until you find the perfect image for your content.",
  },
  {
    icon: Image,
    title: "High-Quality Output",
    description:
      "Download high-resolution images suitable for all social media platforms and personal use.",
  },
  {
    icon: Share2,
    title: "Seamless Sharing",
    description:
      "Directly share your generated images to your favorite social media channels with ease.",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-white"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Unleash Your Visual Storytelling
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {featureList.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 p-3 bg-blue-100 rounded-full">
              <feature.icon size={36} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;