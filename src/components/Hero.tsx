"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 py-24 bg-gradient-to-b from-white to-blue-50 dark:bg-gray-900 dark:from-gray-900 dark:to-blue-950">
      <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        {/* Updated Headline to emphasize AI and content creation */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
          Revolutionize Your Social Media with AI-Powered <span className="text-blue-600 dark:text-blue-400">Content Creation</span>
        </h1>
        {/* Updated Paragraph to highlight target audience, content types, and ease of use */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none dark:text-gray-300">
          Designed specifically for **Indian small businesses**, our AI-powered platform makes it effortless to generate **unique social media content across various themes**, including stunning Instagram Reels and static images. Discover curated trend ideas and captivating visuals to elevate your online presence.
        </p>
        {/* Updated Call to Action */}
        <Button asChild className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          <Link href="/create"> {/* Assuming /create is the path for content generation */}
            Start Creating Content Now
          </Link>
        </Button>
      </div>
      <div className="lg:w-1/2 flex justify-center relative">
        {/* Video element for showcasing dynamic content */}
        <video
          src="/videos/Feedhope Video.mp4"
          className="rounded-xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md lg:max-w-lg h-auto"
          autoPlay
          loop
          muted
          playsInline /* Essential for autoplay on mobile browsers */
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}