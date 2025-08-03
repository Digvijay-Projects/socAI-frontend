// src/components/ImageGenerator.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface ImageGeneratorProps {
  prompt: string;
  onGenerate: () => void;
  isGenerating: boolean;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ prompt, onGenerate, isGenerating }) => {
  return (
    <div className="p-6 border border-emerald-700 rounded-lg bg-emerald-950 bg-opacity-40 shadow-xl">
      <h3 className="text-xl font-semibold mb-4 text-emerald-200">Image Generation Controls</h3>
      <p className="text-base text-gray-200 mb-5">
        Prompt: <span className="font-semibold text-lime-300">{prompt || 'No prompt set.'}</span>
      </p>
      <Button
        onClick={onGenerate}
        disabled={isGenerating || !prompt}
        className="w-full bg-gradient-to-r from-emerald-600 to-lime-700 hover:from-emerald-700 hover:to-lime-800 text-white py-3 px-6 rounded-lg text-lg font-bold transition-all duration-300 ease-in-out shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isGenerating ? 'Generating Image...' : 'Generate Image Now!'}
      </Button>
      {isGenerating && <p className="text-center text-emerald-300 mt-3 text-sm animate-pulse">Working on your image. Almost there!</p>}
      {/* Placeholder for image preview/status */}
    </div>
  );
};

export default ImageGenerator;