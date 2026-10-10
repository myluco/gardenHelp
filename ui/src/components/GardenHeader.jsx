import React from 'react';
import { Sprout } from 'lucide-react';

export default function GardenHeader() {
  return (
    <header className="h-16 border-b border-[#e5decb] bg-[#faf8f5] flex items-center px-6 justify-between">
      <div className="flex items-center gap-2">
        <Sprout className="w-5 h-5 text-[#2d4a34]" />
        <span className="font-serif font-bold text-xl text-[#1e3323]">Help My Garden</span>
      </div>
    </header>
  );
}
