// src/components/ThemeSelector.tsx
import React from 'react';
import { Theme } from '@/lib/themes';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ThemeSelectorProps {
  themes: Theme[];
  onSelectTheme: (themeId: string) => void;
  selectedThemeId: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ themes, onSelectTheme, selectedThemeId }) => {
  return (
    <div className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow-md">
      <label htmlFor="theme-select" className="block text-lg font-medium text-gray-200 mb-3">
        Select a Content Theme:
      </label>
      <Select onValueChange={onSelectTheme} value={selectedThemeId}>
        <SelectTrigger className="w-full bg-gray-800 text-gray-100 border-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <SelectValue placeholder="Choose a theme for your content..." />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-gray-100 border-gray-700 shadow-lg">
          {themes.map(theme => (
            <SelectItem key={theme.id} value={theme.id} className="hover:bg-gray-700 focus:bg-gray-700 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedThemeId && (
        <p className="text-sm text-gray-400 mt-3 italic">
          {themes.find(t => t.id === selectedThemeId)?.description}
        </p>
      )}
    </div>
  );
};

export default ThemeSelector;