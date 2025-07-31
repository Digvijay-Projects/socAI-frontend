"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 py-24 sm:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 relative overflow-hidden">
        {/* Background gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 opacity-70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div> 

        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Revolutionize Your Social Media with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI-Powered Content</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl lg:max-w-none leading-relaxed">
            Designed for **visionary creators**, our intuitive AI platform makes it effortless to generate **unique, trend-setting social media content**. Instantly transform your ideas into stunning Instagram Reels and captivating static images, elevating your online presence and driving engagement like never before.
          </p>
          <Button
            asChild
            className="px-10 py-4 text-xl font-bold rounded-full shadow-2xl transition-all duration-500 ease-in-out
                       bg-gradient-to-r from-blue-600 to-purple-700 text-white
                       hover:from-blue-700 hover:to-purple-800 hover:scale-105 hover:shadow-3xl
                       focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                       animate-pulse-once" 
          >
            <Link href="/auth/dashboard"> 
              Unleash Your Content Superpowers!
            </Link>
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center relative z-10">
          <video
            src="/videos/Feedhope Video.mp4" 
            className="rounded-xl shadow-2xl border-4 border-blue-400 transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md lg:max-w-lg h-auto"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => console.error("Video failed to load:", e)} 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
  );
}