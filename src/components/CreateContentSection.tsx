// src/components/CreateContentSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThemeSelector from '@/components/ThemeSelector';
import PromptSuggester from '@/components/PromptSuggester';
import VideoGenerator from '@/components/VideoGenerator';
import ImageGenerator from '@/components/ImageGenerator';
import { themes, Theme } from '@/lib/themes';

type GenerationType = 'video' | 'image' | null;

export default function CreateContentSection() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [activeGenerationType, setActiveGenerationType] = useState<GenerationType>(null);
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [suggestedPrompts, setSuggestedPrompts] = useState<{ image: string[], video: string[] }>({ image: [], video: [] });
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (selectedTheme) {
      setSuggestedPrompts({
        image: selectedTheme.imageSuggestions || [],
        video: selectedTheme.videoSuggestions || []
      });
      if (activeGenerationType === 'video') {
          setCurrentPrompt(selectedTheme.defaultVideoPrompt || '');
      } else if (activeGenerationType === 'image') {
          setCurrentPrompt(selectedTheme.defaultImagePrompt || '');
      } else {
          setCurrentPrompt('');
      }
    } else {
      setSuggestedPrompts({ image: [], video: [] });
      setCurrentPrompt('');
    }
  }, [selectedTheme, activeGenerationType]);

  const handleThemeSelect = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    setSelectedTheme(theme || null);
    setActiveGenerationType('video'); // Default to video when theme selected
  };

  const handleApplyPrompt = (prompt: string) => {
    setCurrentPrompt(prompt);
  };

  const handleGenerate = async () => {
    if (!currentPrompt || !activeGenerationType || !selectedTheme) {
      alert('Please select a theme, type, and enter/select a prompt.');
      return;
    }

    setIsGenerating(true);
    try {
      console.log(`Initiating ${activeGenerationType} generation with prompt: "${currentPrompt}" for theme: ${selectedTheme.name}`);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      alert(`${activeGenerationType.charAt(0).toUpperCase() + activeGenerationType.slice(1)} generation initiated successfully! (Simulated)`);
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Failed to initiate generation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    // Removed min-h-screen here as it's now controlled by parent `main`
    // Removed specific bg-gray-100 as parent provides it.
    // Adjusted padding for consistent spacing across full width
    <div className="w-full text-gray-100 py-8 px-4 sm:px-8 lg:px-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Content Creation Hub
      </h1>

      {/* Content wrapper with a max-width, but it's now centered within the full-width parent */}
      <div className="max-w-5xl mx-auto space-y-12"> {/* Increased max-w for more content space */}
        {/* Video Generation Emphasis */}
        <section className={`p-6 sm:p-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out
          ${activeGenerationType === 'video' ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 scale-100 ring-2 ring-blue-500' : 'bg-gray-800 scale-[0.98] opacity-70 hover:opacity-100 hover:shadow-xl'}
        `}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-blue-300">
            🎥 Video Generation: Craft Dynamic Stories
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-300 mb-6 max-w-2xl mx-auto">
            Leverage advanced AI to produce high-quality, engaging video content tailored to your needs.
          </p>

          <div className="flex justify-center mb-8">
            <Button
              onClick={() => setActiveGenerationType('video')}
              className={`px-8 py-4 text-xl font-bold rounded-lg shadow-lg transform transition-all duration-300
                ${activeGenerationType === 'video'
                  ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 ring-2 ring-white scale-105'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white'
                }
              `}
            >
              Start Video Creation
            </Button>
          </div>

          {activeGenerationType === 'video' && (
            <div className="mt-8 space-y-8">
              <ThemeSelector themes={themes} onSelectTheme={handleThemeSelect} selectedThemeId={selectedTheme?.id || ''} />
              {selectedTheme && (
                <>
                  <PromptSuggester
                    type="video"
                    suggestions={suggestedPrompts.video}
                    currentPrompt={currentPrompt}
                    onPromptChange={setCurrentPrompt}
                    onApplySuggestion={handleApplyPrompt}
                  />
                  <VideoGenerator
                    prompt={currentPrompt}
                    onGenerate={handleGenerate}
                    isGenerating={isGenerating}
                  />
                </>
              )}
            </div>
          )}
        </section>

        {/* Image Generation Area */}
        <section className={`p-6 sm:p-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out
          ${activeGenerationType === 'image' ? 'bg-gradient-to-br from-gray-800 via-zinc-800 to-stone-800 scale-100 ring-2 ring-green-500' : 'bg-gray-800 scale-[0.98] opacity-70 hover:opacity-100 hover:shadow-xl'}
        `}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-green-300">
            🖼️ Image Generation: Visualize Your Ideas
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-300 mb-6 max-w-2xl mx-auto">
            Generate high-quality images with precise control, from concept to final render.
          </p>

          <div className="flex justify-center mb-8">
            <Button
              onClick={() => setActiveGenerationType('image')}
              className={`px-8 py-4 text-xl font-bold rounded-lg shadow-lg transform transition-all duration-300
                ${activeGenerationType === 'image'
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600 ring-2 ring-white scale-105'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white'
                }
              `}
            >
              Start Image Creation
            </Button>
          </div>

          {activeGenerationType === 'image' && (
            <div className="mt-8 space-y-8">
              <ThemeSelector themes={themes} onSelectTheme={handleThemeSelect} selectedThemeId={selectedTheme?.id || ''} />
              {selectedTheme && (
                <>
                  <PromptSuggester
                    type="image"
                    suggestions={suggestedPrompts.image}
                    currentPrompt={currentPrompt}
                    onPromptChange={setCurrentPrompt}
                    onApplySuggestion={handleApplyPrompt}
                  />
                  <ImageGenerator
                    prompt={currentPrompt}
                    onGenerate={handleGenerate}
                    isGenerating={isGenerating}
                  />
                </>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}