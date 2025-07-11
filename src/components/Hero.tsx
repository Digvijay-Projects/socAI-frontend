"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          Turn Your Text Into Stunning <span className="text-blue-600">Social Media Images</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none">
          Use AI to create eye-catching images from your captions, quotes, or ideas. Perfect for content creators, marketers, and brands looking to elevate their online presence.
        </p>
        {/* Using a standard button for demonstration. Replace with Next.js Link and Button if applicable */}
        <Button asChild>
          <Link href="/upload">
            Generate Your First Image
          </Link>
        </Button>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        {/* Placeholder for an illustrative image or mock-up */}
        <img
          src="https://placehold.co/600x400/E0F2F7/2C5282?text=AI+Generated+Image+Mockup"
          alt="AI Generated Image Mockup"
          className="rounded-xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500"
        />
      </div>
    </section>
  );
}