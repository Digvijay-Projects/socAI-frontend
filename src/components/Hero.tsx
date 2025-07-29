"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 py-24 bg-gradient-to-b from-white to-blue-50 dark:bg-gray-900 dark:from-gray-900 dark:to-blue-950">
      <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
          Revolutionize Your Social Media with AI-Powered <span className="text-blue-600 dark:text-blue-400">Content Creation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none dark:text-gray-300">
          Designed for **creators**, our AI-powered platform makes it effortless to generate **unique, on-trend social media content**. Easily create stunning Instagram Reels and captivating static images through our guided workflow, instantly transforming your ideas into engaging visuals to elevate your online presence.
        </p>
        <Button asChild className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          <Link href="/create"> {/* Assuming /create is the path for content generation */}
            Start Creating Content Now
          </Link>
        </Button>
      </div>
      <div className="lg:w-1/2 flex justify-center relative">
        <video
          src="/videos/Feedhope Video.mp4"
          className="rounded-xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md lg:max-w-lg h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}