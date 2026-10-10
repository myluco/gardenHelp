import React from 'react';
import { Scissors, Beaker, Bug, Sun, Apple, Archive, Sparkles } from 'lucide-react';
import { TaskCategory } from '../types/garden';

interface CategoryNavProps {
  activeCategory: TaskCategory;
  onSelectCategory: (cat: TaskCategory) => void;
}

const CATEGORIES: { id: TaskCategory; label: string; icon: React.ComponentType<{ className?: string }>; description: string }[] = [
  {
    id: 'prune',
    label: 'What to Prune',
    icon: Scissors,
    description: 'Technique, frequency & best seasonal timing'
  },
  {
    id: 'fertilize',
    label: 'What to Fertilize',
    icon: Beaker,
    description: 'N-P-K balance, organic compost & frequency'
  },
  {
    id: 'spray',
    label: 'What to Spray',
    icon: Bug,
    description: 'Target pests, diseases & organic IPM remedies'
  },
  {
    id: 'plant',
    label: 'What to Plant',
    icon: Sun,
    description: 'Divided into Full Sun, Part Shade & Shade'
  },
  {
    id: 'harvest',
    label: 'What to Harvest',
    icon: Apple,
    description: 'Sensory readiness & the "blushing" stage'
  },
  {
    id: 'store',
    label: 'What to Store',
    icon: Archive,
    description: 'Curing, dark cellars, humidity & shelf life'
  },
  {
    id: 'seed',
    label: 'Start from Seed',
    icon: Sparkles,
    description: 'Pre-treatment, temp, light & sprouting days'
  }
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-[#f7f4ed] border-b border-[#e2dcce] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-left whitespace-nowrap transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#27432e] text-white border-[#27432e] shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#2b3d2e] border-[#ded8cb] hover:border-[#cbcaa9]'
                }`}
              >
                <div
                  className={`p-1.5 rounded-md ${
                    isActive ? 'bg-[#375a3f] text-[#d6f5db]' : 'bg-[#f1ece1] text-[#426046]'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight">{item.label}</div>
                  <div
                    className={`text-[10px] leading-tight mt-0.5 max-w-[150px] truncate ${
                      isActive ? 'text-[#badfc0]' : 'text-[#738271]'
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
