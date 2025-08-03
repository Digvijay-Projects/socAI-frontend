// src/components/AIModelsSection.tsx
'use client';

import React from 'react';

// Hardcoded data for the AI models and their pricing
const aiModels = [
  {
    name: 'Imagen 3.0',
    provider: 'Google',
    contentType: 'Image',
    costPerUnit: '$0.06 / Image',
    useCase: 'High-quality, realistic images with detailed text prompts.',
  },
  {
    name: 'DALL-E 3',
    provider: 'OpenAI',
    contentType: 'Image',
    costPerUnit: '$0.08 / Image',
    useCase: 'Creative and stylized image generation, great for artistic concepts.',
  },
  {
    name: 'RunwayML Gen-2',
    provider: 'RunwayML',
    contentType: 'Video',
    costPerUnit: '$0.10 / Second',
    useCase: 'Generating short, dynamic video clips from text or images.',
  },
  {
    name: 'Stable Diffusion XL',
    provider: 'Stability AI',
    contentType: 'Image',
    costPerUnit: '$0.05 / Image',
    useCase: 'Versatile and fast image generation for a wide range of styles.',
  },
];

export default function AIModelsSection() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
                Our AI Powerhouse: <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Transparent Pricing & Models</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                We believe in complete transparency. Below are the specific AI models that power your content generation, along with their direct cost. The credit cost for each generation is a direct reflection of the model and output type you choose.
            </p>
            </div>

            {/* AI Models Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map((model) => (
                <div
                key={model.name}
                className="p-6 rounded-xl border border-gray-700 bg-gray-800 shadow-xl transition-all duration-300 ease-in-out hover:border-teal-500 hover:shadow-2xl"
                >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${model.contentType === 'Image' ? 'bg-indigo-500 text-white' : 'bg-pink-500 text-white'}`}
                    >
                    {model.contentType}
                    </span>
                </div>
                <p className="text-md text-gray-400 mb-2">
                    <span className="font-semibold text-gray-300">Provider:</span> {model.provider}
                </p>
                <p className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                    {model.costPerUnit}
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                    <p className="font-semibold text-gray-200 mb-1">Recommended Use:</p>
                    <p className="text-sm text-gray-400">{model.useCase}</p>
                </div>
                </div>
            ))}
            </div>

            {/* Credit-Based Costing Explanation */}
            <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
            <p className="text-lg font-semibold text-white mb-2">How Credits Work</p>
            <p className="text-gray-300">
                Our credits are equivalent to USD, giving you full transparency. For example:
            </p>
            <ul className="mt-4 text-left list-disc list-inside space-y-1 text-gray-300">
                <li>A standard image generation costs <span className="font-semibold text-teal-400">$0.06 USD</span> in credits.</li>
                <li>A 15-second video clip costs approximately <span className="font-semibold text-pink-400">$1.50 USD</span> in credits.</li>
            </ul>
            </div>
        </div>
        </section>
    </div>
  );
}