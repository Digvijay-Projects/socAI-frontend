// src/components/PromptSuggester.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface PromptSuggesterProps {
  type: 'image' | 'video';
  suggestions: string[];
  currentPrompt: string;
  onPromptChange: (prompt: string) => void;
  onApplySuggestion: (suggestion: string) => void;
}

const PromptSuggester: React.FC<PromptSuggesterProps> = ({
  type,
  suggestions,
  currentPrompt,
  onPromptChange,
  onApplySuggestion,
}) => {
  return (
    <div className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-200">
        ✨ Smart Prompt Suggestions for {type === 'video' ? 'Video' : 'Image'}
      </h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <Button
              key={index}
              onClick={() => onApplySuggestion(suggestion)}
              variant="outline"
              className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-full text-sm transition-colors duration-200"
            >
              {suggestion.length > 40 ? `${suggestion.substring(0, 37)}...` : suggestion}
            </Button>
          ))
        ) : (
          <p className="text-gray-400 text-sm italic">No specific suggestions for this theme. Try entering your own!</p>
        )}
      </div>
      <label htmlFor="prompt-input" className="block text-lg font-medium text-gray-200 mb-3">
        Your Custom Prompt:
      </label>
      <Textarea
        id="prompt-input"
        value={currentPrompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder={`Enter your detailed prompt for ${type} generation... e.g., "A cinematic shot of a futuristic city at sunset, flying cars, neon lights, 4K resolution."`}
        rows={6}
        className="w-full bg-gray-800 text-gray-100 border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 resize-y"
      />
      <p className="text-sm text-gray-400 mt-3">
        Be descriptive! The more detail you provide, the better the output.
      </p>
    </div>
  );
};

export default PromptSuggester;