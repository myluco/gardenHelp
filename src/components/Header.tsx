import React from 'react';
import { Sprout, MapPin, Cpu, BookOpen, Sparkles } from 'lucide-react';
import { ClimateZoneInfo } from '../types/garden';

interface HeaderProps {
  zoneInfo: ClimateZoneInfo;
  onOpenLocation: () => void;
  onOpenCrewAi: () => void;
  onOpenOllama: () => void;
  ollamaConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  zoneInfo,
  onOpenLocation,
  onOpenCrewAi,
  onOpenOllama,
  ollamaConnected,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#2d4a34] text-[#f7f4ed] flex items-center justify-center shadow-sm">
            <Sprout className="w-6 h-6 stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1e3323]">
                Help My Garden
              </span>
              <span className="hidden sm:inline text-xs font-medium text-[#7d8b7b]">
                Horticultural Companion
              </span>
            </div>
            <p className="text-xs text-[#637361] hidden md:block">
              Tailored to your climate zone · Powered by local CrewAI & Ollama
            </p>
          </div>
        </div>

        {/* Location & Zone Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLocation}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#2b4230] bg-[#eeece4] hover:bg-[#e4e1d7] rounded-md transition-colors cursor-pointer border border-[#dedad0]"
            title="Change garden location"
          >
            <MapPin className="w-3.5 h-3.5 text-[#52795a]" />
            <span className="font-medium max-w-[140px] sm:max-w-[200px] truncate">
              {zoneInfo.locationName}
            </span>
            <span className="text-[#6c7d6c]">·</span>
            <span className="font-semibold text-[#1f3a25]">{zoneInfo.zone}</span>
          </button>

          {/* Ollama & Mac M4 Pro Status */}
          <button
            onClick={onOpenOllama}
            className={`hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs rounded-md transition-colors border ${
              ollamaConnected
                ? 'bg-[#eaf4ed] text-[#1c4d29] border-[#c4e3cc] hover:bg-[#ddedd1]'
                : 'bg-[#f4efe8] text-[#5c4a33] border-[#e2d8ca] hover:bg-[#ece4d6]'
            }`}
            title="Inspect local Ollama open-weight engine"
          >
            <span className={`w-2 h-2 rounded-full ${ollamaConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
            <span className="font-medium">
              {ollamaConnected ? 'Ollama Online' : 'Ollama Ready'}
            </span>
            <span className="text-[11px] text-[#697a66]">M4 Pro Safe</span>
          </button>

          {/* CrewAI Blueprint Drawer */}
          <button
            onClick={onOpenCrewAi}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1e3323] bg-white hover:bg-[#f3f0e8] border border-[#d6d0c2] rounded-md shadow-xs transition-colors"
          >
            <Cpu className="w-3.5 h-3.5 text-[#426b48]" />
            <span className="hidden sm:inline">CrewAI Agents</span>
            <span className="sm:hidden">Agents</span>
          </button>
        </div>
      </div>
    </header>
  );
};
