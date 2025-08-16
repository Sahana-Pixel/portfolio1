import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  iconColor?: string; // optional icon color class
}

export function ThemeToggle({ isDark, onToggle, iconColor = 'text-pink-500' }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
className="relative p-2 rounded-full bg-white text-black dark:bg-black dark:text-white hover:ring-2 hover:ring-pink-500 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <span
          className={`absolute inset-0 transform transition-transform duration-500 rotate-0 ${
            isDark ? 'rotate-[360deg]' : '-rotate-[360deg]'
          }`}
        >
          {isDark ? (
            <Moon className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <Sun className={`w-5 h-5 ${iconColor}`} />
          )}
        </span>
      </div>
    </button>
  );
}
