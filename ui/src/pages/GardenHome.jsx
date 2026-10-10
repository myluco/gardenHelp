import React from 'react';
import GardenHeader from '../components/GardenHeader';

export default function GardenHome() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <GardenHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-[#1e3323] font-bold">Help My Garden</h1>
        <p className="text-sm text-[#4f6150] mt-2">
          Horticultural companion with pruning, fertilizing, spraying, planting by sun exposure, harvesting cues, storage protocols, and seed starting.
        </p>
      </main>
    </div>
  );
}
