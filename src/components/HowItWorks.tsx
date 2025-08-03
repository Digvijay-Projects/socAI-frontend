'use client';

import Image from "next/image"; 
import Link from "next/link";
import { Button } from "@/components/ui/button"; 

const steps = [
  {
    number: "01",
    title: "Ideate & Define Your Vision",
    description: "Start by selecting a theme and letting our AI suggest powerful prompts. Clearly outline the core message and style for your content.",
    image: "/images/step1_theme_selection.png",
    alt: "Screenshot of theme and prompt selection interface",
  },
  {
    number: "02",
    title: "Generate High-Quality Content",
    description: "With a click, transform your ideas into stunning Instagram Reels or captivating static images, crafted by advanced AI algorithms.",
    image: "/images/step2_generation.png",
    alt: "Screenshot of AI content generation in progress",
  },
  {
    number: "03",
    title: "Refine, Download & Share",
    description: "Review and fine-tune your generated content. Download high-resolution assets perfectly sized for all your social media platforms.",
    image: "/images/step3_download_share.png",
    alt: "Screenshot of content preview and download options",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Soc AI</span> Transforms Your Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our streamlined process makes content creation simple, fast, and remarkably effective.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse' 
              }`}
            >
              <div className="lg:w-1/2 flex justify-center p-4 rounded-xl border border-gray-700 shadow-2xl bg-gray-800/50 transform hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={600}
                  height={400} 
                  layout="responsive" 
                  objectFit="contain" 
                  className="rounded-lg shadow-xl"
                  priority={index === 0} 
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4 opacity-70">
                  {step.number}
                </p>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            asChild
            className="px-10 py-4 text-xl font-bold rounded-full shadow-2xl transition-all duration-500 ease-in-out
                       bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white
                       hover:from-purple-700 hover:to-fuchsia-800 hover:scale-105 hover:shadow-3xl
                       focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
          >
            <Link href="/auth/dashboard">
              Get Started with Soc AI Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}