// src/components/VideoGenerator.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface VideoGeneratorProps {
  prompt: string;
  onGenerate: () => void;
  isGenerating: boolean;
}

const VideoGenerator: React.FC<VideoGeneratorProps> = ({ prompt, onGenerate, isGenerating }) => {
  return (
    <div className="p-6 border border-blue-700 rounded-lg bg-blue-950 bg-opacity-40 shadow-xl">
      <h3 className="text-xl font-semibold mb-4 text-blue-200">Video Generation Controls</h3>
      <p className="text-base text-gray-200 mb-5">
        Prompt: <span className="font-semibold text-sky-300">{prompt || 'No prompt set.'}</span>
      </p>
      <Button
        onClick={onGenerate}
        disabled={isGenerating || !prompt}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white py-3 px-6 rounded-lg text-lg font-bold transition-all duration-300 ease-in-out shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isGenerating ? 'Generating Video...' : 'Generate Video Now!'}
      </Button>
      {isGenerating && <p className="text-center text-blue-300 mt-3 text-sm animate-pulse">This may take a few moments. Hang tight!</p>}
      {/* Placeholder for video preview/status */}
    </div>
  );
};

export default VideoGenerator;