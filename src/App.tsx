/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { PLANTS_DATA } from './data/plants';
import { PlantData, TaskCategory, LightCategory } from './types/garden';
import { resolveClimateZoneFromAddress } from './utils/climateZone';
import { checkOllamaConnection } from './utils/ollamaClient';

import { Header } from './components/Header';
import { HeroRomanticGarden } from './components/HeroRomanticGarden';
import { CategoryNav } from './components/CategoryNav';
import { PlantCard } from './components/PlantCard';
import { PlantDetailModal } from './components/PlantDetailModal';
import { CustomPlantAdvisor } from './components/CustomPlantAdvisor';
import { CrewAiInspectorModal } from './components/CrewAiInspectorModal';
import { OllamaSettingsModal } from './components/OllamaSettingsModal';
import { SeasonalResearchPanel } from './components/SeasonalResearchPanel';

import {
  Sun,
  CloudSun,
  Cloud,
  Search,
  Filter,
  Scissors,
  Beaker,
  Bug,
  Apple,
  Archive,
  Sparkles,
  Heart,
  Calendar,
  Layers,
} from 'lucide-react';

export default function App() {
  // Address & Microclimate State
  const [address, setAddress] = useState('Asheville, NC');
  const [zoneInfo, setZoneInfo] = useState(() => resolveClimateZoneFromAddress('Asheville, NC'));
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);

  // 7 Task Categories State (Default to 'plant' or 'prune')
  const [activeCategory, setActiveCategory] = useState<TaskCategory>('plant');
  
  // Sunlight Subcategory for 'plant' task: Sun, Part Shade, Shade (As specifically requested!)
  const [sunlightFilter, setSunlightFilter] = useState<'all' | LightCategory>('all');
  
  // Plant Type Filter (Vegetable, Flower, Herb, Fruit, Shrub)
  const [plantTypeFilter, setPlantTypeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Seasonal Filter Mode: 'current-season' (October right now) vs 'all-seasons' (full reference)
  const [seasonMode, setSeasonMode] = useState<'current-season' | 'all-seasons'>('current-season');

  // Selected plant for modal
  const [selectedPlant, setSelectedPlant] = useState<PlantData | null>(null);

  // Modals state
  const [isCrewAiModalOpen, setIsCrewAiModalOpen] = useState(false);
  const [isOllamaModalOpen, setIsOllamaModalOpen] = useState(false);

  // Location status feedback state
  const [locationStatus, setLocationStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  // Ollama local state
  const [ollamaBaseUrl, setOllamaBaseUrl] = useState('http://localhost:11434');
  const [selectedModel, setSelectedModel] = useState('llama3.2:3b');
  const [ollamaConnected, setOllamaConnected] = useState(false);
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  // Check Ollama connection on mount
  useEffect(() => {
    checkOllamaConnection(ollamaBaseUrl).then((res) => {
      setOllamaConnected(res.connected);
      if (res.connected && res.models.length > 0) {
        setAvailableModels(res.models);
      }
    });
  }, [ollamaBaseUrl]);

  // Handle address update
  const handleAddressSubmit = (newAddress: string) => {
    setAddress(newAddress);
    const resolved = resolveClimateZoneFromAddress(newAddress);
    setZoneInfo(resolved);
    setLocationStatus(null);
  };

  // HTML5 Geolocation
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus({
        type: 'error',
        message: 'Browser does not support geolocation. Your entered location was kept.'
      });
      return;
    }
    setIsDetectingLocation(true);
    setLocationStatus(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setIsDetectingLocation(false);
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=12`);
          if (res.ok) {
            const data = await res.json();
            const city = data.address?.city || data.address?.town || data.address?.village || data.address?.county;
            const state = data.address?.state;
            const postcode = data.address?.postcode;
            const formatted = city && state ? `${city}, ${state}` : (postcode ? `${postcode}, ${city || state || ''}` : `${city || state || 'Local Garden'}`);
            if (formatted.trim()) {
              handleAddressSubmit(formatted);
              setLocationStatus({
                type: 'success',
                message: `Location detected: ${formatted}`
              });
              return;
            }
          }
        } catch {
          // fallback to coordinate string if reverse geocode fails
        }
        const autoName = `Garden (${lat.toFixed(2)}°, ${lon.toFixed(2)}°)`;
        handleAddressSubmit(autoName);
        setLocationStatus({
          type: 'success',
          message: `Location detected: ${autoName}`
        });
      },
      (err) => {
        setIsDetectingLocation(false);
        console.warn('Geolocation denied or failed in browser/iframe:', err);
        // CRITICAL: NEVER overwrite or reset the user's entered address!
        setLocationStatus({
          type: 'info',
          message: 'Location access is unavailable in browser preview. Your entered location was kept.'
        });
      },
      { timeout: 7000 }
    );
  };

  // Filtered plants list
  const filteredPlants = useMemo(() => {
    return PLANTS_DATA.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          p.name.toLowerCase().includes(q) ||
          p.botanicalName.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.heroNote.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // 2. Sunlight filter (especially when in 'plant' category)
      if (activeCategory === 'plant' && sunlightFilter !== 'all') {
        if (p.light !== sunlightFilter) return false;
      }

      // 3. Plant category (Vegetable / Flower / etc)
      if (plantTypeFilter !== 'all') {
        if (p.category !== plantTypeFilter) return false;
      }

      // 4. Current Season Filter: When in 'plant' task and 'current-season' mode,
      // strictly show plants viable to plant right now in October!
      if (activeCategory === 'plant' && seasonMode === 'current-season') {
        if (!p.viableToPlantInOctober) return false;
      }

      return true;
    });
  }, [searchQuery, sunlightFilter, plantTypeFilter, activeCategory, seasonMode]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#242e23] flex flex-col font-sans selection:bg-[#d8eedb] selection:text-[#1c3e23]">
      {/* 1. Header Navigation */}
      <Header
        zoneInfo={zoneInfo}
        onOpenLocation={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenCrewAi={() => setIsCrewAiModalOpen(true)}
        onOpenOllama={() => setIsOllamaModalOpen(true)}
        ollamaConnected={ollamaConnected}
      />

      {/* 2. Hero Section: Helping Hand & Romantic Garden Figure + Address Picker */}
      <HeroRomanticGarden
        currentAddress={address}
        zoneInfo={zoneInfo}
        onAddressSubmit={handleAddressSubmit}
        onDetectLocation={handleDetectLocation}
        isDetectingLocation={isDetectingLocation}
        locationStatus={locationStatus}
      />

      {/* 3. The 7 Core Task Categories Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSunlightFilter('all');
        }}
      />

      {/* 4. Main Garden Tasks Workbench */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-10 w-full">
        {/* Real-time Seasonal Intelligence & LLM Research Panel */}
        <SeasonalResearchPanel
          zoneInfo={zoneInfo}
          activeCategory={activeCategory}
          seasonMode={seasonMode}
          setSeasonMode={setSeasonMode}
        />

        {/* Category Header & Filters */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#e5decb]">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4d6650]">
                {activeCategory === 'prune' && <Scissors className="w-4 h-4 text-[#355f3b]" />}
                {activeCategory === 'fertilize' && <Beaker className="w-4 h-4 text-[#355f3b]" />}
                {activeCategory === 'spray' && <Bug className="w-4 h-4 text-[#355f3b]" />}
                {activeCategory === 'plant' && <Sun className="w-4 h-4 text-[#355f3b]" />}
                {activeCategory === 'harvest' && <Apple className="w-4 h-4 text-[#355f3b]" />}
                {activeCategory === 'store' && <Archive className="w-4 h-4 text-[#355f3b]" />}
                {activeCategory === 'seed' && <Sparkles className="w-4 h-4 text-[#355f3b]" />}
                <span>Category Task Guide · {zoneInfo.zone}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b3121] mt-1">
                {activeCategory === 'prune' && 'What to be Pruned & Timing'}
                {activeCategory === 'fertilize' && 'What to be Fertilized & Cadence'}
                {activeCategory === 'spray' && 'What to be Sprayed & Pest IPM'}
                {activeCategory === 'plant' && 'What to be Planted by Sunlight'}
                {activeCategory === 'harvest' && 'What to be Harvested & Ripeness Cues'}
                {activeCategory === 'store' && 'What to be Stored & Curing Protocols'}
                {activeCategory === 'seed' && 'What Can be Started from Seed'}
              </h2>

              <p className="text-xs sm:text-sm text-[#546654] max-w-2xl mt-1 leading-relaxed">
                {activeCategory === 'prune' &&
                  'Discover if your selected plants require pruning, how often to trim them, and the exact calendar window to avoid frost damage or lost flowers.'}
                {activeCategory === 'fertilize' &&
                  'Balanced organic nutrition, precise N-P-K ratios, compost tea schedules, and seasonal cut-off dates to prevent winter freeze injury.'}
                {activeCategory === 'spray' &&
                  'Targeted integrated pest management (IPM): safe biological sprays for aphids, hornworms, and blight, timed to protect honeybees and pollinators.'}
                {activeCategory === 'plant' &&
                  'Curated species divided into Full Sun, Part Shade, and Full Shade, highlighting the "Best of the Best" planting dates for your location.'}
                {activeCategory === 'harvest' &&
                  'Sensory readiness cues for picking at the peak of flavor: the tomato "blushing" breaker stage, vine slip tests, and aroma.'}
                {activeCategory === 'store' &&
                  'Preserve your bounty with proper dark storage, warm curing for squashes and garlic, root cellar humidity, and shelf life.'}
                {activeCategory === 'seed' &&
                  'Complete propagation blueprints: pre-treatments (soaking/stratification duration), germination temperature, light needs, depth, and average sprouting days.'}
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#728573]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plants, herbs, roses..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#ded8cb] focus:border-[#385e3c] focus:ring-1 focus:ring-[#385e3c] rounded-lg text-xs text-[#1e3323] outline-none"
              />
            </div>
          </div>

          {/* Sunlight Filter Tabs (Specifically for 'plant' category as requested in the prompt) */}
          {activeCategory === 'plant' && (
            <div className="bg-[#f3efe6] p-2.5 rounded-xl border border-[#ded5c2] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-[#304733] mr-1 hidden sm:inline">
                  Sunlight Division:
                </span>
                <button
                  onClick={() => setSunlightFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    sunlightFilter === 'all'
                      ? 'bg-[#27432e] text-white shadow-xs'
                      : 'bg-white/70 text-[#3d503f] hover:bg-white'
                  }`}
                >
                  All Sunlight Exposures
                </button>
                <button
                  onClick={() => setSunlightFilter('full-sun')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    sunlightFilter === 'full-sun'
                      ? 'bg-[#27432e] text-white shadow-xs'
                      : 'bg-white/70 text-[#3d503f] hover:bg-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Full Sun (6+ hrs)</span>
                </button>
                <button
                  onClick={() => setSunlightFilter('part-shade')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    sunlightFilter === 'part-shade'
                      ? 'bg-[#27432e] text-white shadow-xs'
                      : 'bg-white/70 text-[#3d503f] hover:bg-white'
                  }`}
                >
                  <CloudSun className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Part Shade (3-6 hrs)</span>
                </button>
                <button
                  onClick={() => setSunlightFilter('full-shade')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    sunlightFilter === 'full-shade'
                      ? 'bg-[#27432e] text-white shadow-xs'
                      : 'bg-white/70 text-[#3d503f] hover:bg-white'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5 text-blue-500" />
                  <span>Full Shade (&lt;3 hrs)</span>
                </button>
              </div>

              {/* Plant Type Filter */}
              <div className="flex items-center gap-1 text-xs">
                <span className="text-[#647565] mr-1 hidden lg:inline">Type:</span>
                <select
                  value={plantTypeFilter}
                  onChange={(e) => setPlantTypeFilter(e.target.value)}
                  className="px-2.5 py-1 bg-white border border-[#ded8cb] rounded-lg text-xs text-[#2a3c2c] outline-none"
                >
                  <option value="all">All Botanical Types</option>
                  <option value="Vegetable">Vegetables</option>
                  <option value="Flower">Romantic Flowers</option>
                  <option value="Herb">Aromatic Herbs</option>
                  <option value="Fruit">Fruits</option>
                  <option value="Shrub">Shrubs</option>
                </select>
              </div>
            </div>
          )}

          {/* Plant Type Sub-filter for non-plant categories */}
          {activeCategory !== 'plant' && (
            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
                {['all', 'Vegetable', 'Flower', 'Herb', 'Fruit', 'Shrub'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPlantTypeFilter(type)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      plantTypeFilter === type
                        ? 'bg-[#2d4a34] text-white'
                        : 'bg-white text-[#455746] border border-[#ded8cb] hover:bg-[#f5f2e9]'
                    }`}
                  >
                    {type === 'all' ? 'All Types' : type}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#6e806e]">
                Showing {filteredPlants.length} plant{filteredPlants.length === 1 ? '' : 's'}
              </div>
            </div>
          )}

          {/* Active Mode Notice */}
          {activeCategory === 'plant' && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#f7f5ed] border border-[#ded8c9] rounded-xl text-xs text-[#3d503f]">
              <div className="flex items-center gap-2">
                <span>
                  {seasonMode === 'current-season' ? (
                    <>
                      🍂 <strong>October Planting Filter Active:</strong> Showing only plants viable to plant right now in {zoneInfo.zone} ({filteredPlants.length} plants). Warm-season nightshades (like Tomatoes) are filtered out for your area.
                    </>
                  ) : (
                    <>
                      📚 <strong>All-Season Catalog Active:</strong> Showing full year-round botanical collection ({filteredPlants.length} plants). Note the warnings on warm-season crops.
                    </>
                  )}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSeasonMode(seasonMode === 'current-season' ? 'all-seasons' : 'current-season')}
                className="text-xs font-semibold text-[#1c3823] hover:text-[#2f5c38] underline cursor-pointer shrink-0"
              >
                {seasonMode === 'current-season' ? 'Show All Year-Round Plants' : 'Filter to October Only'}
              </button>
            </div>
          )}
        </div>

        {/* 5. Plant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              activeCategory={activeCategory}
              onSelectPlant={(p) => setSelectedPlant(p)}
              zoneNumber={zoneInfo.zoneNumber}
            />
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#ded8cb] p-8">
            <span className="text-4xl block mb-2">🌸</span>
            <h3 className="font-serif text-xl font-bold text-[#1f3523]">
              No garden plants match this filter
            </h3>
            <p className="text-xs text-[#6a7c6a] mt-1 max-w-md mx-auto">
              Try adjusting your sunlight exposure or search query, or use our Custom Plant Advisor below to analyze any variety!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSunlightFilter('all');
                setPlantTypeFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-[#2d4a34] text-white text-xs font-semibold rounded-lg hover:bg-[#203626] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 6. Custom Plant Query Box (CrewAI & Local Ollama Runner) */}
        <CustomPlantAdvisor
          zoneInfo={zoneInfo}
          ollamaConnected={ollamaConnected}
          selectedModel={selectedModel}
        />
      </main>

      {/* 7. Romantic Footer */}
      <footer className="mt-16 bg-[#213525] text-[#e8eee9] border-t border-[#18291c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2d4733]">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Help My Garden
              </span>
              <p className="text-xs text-[#a2b8a4]">
                A tender helping hand for every flower, vine, and harvest.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#c3d6c5]">
              <button
                onClick={() => setIsCrewAiModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
              >
                CrewAI Agent Roles
              </button>
              <span>·</span>
              <button
                onClick={() => setIsOllamaModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
              >
                Mac M4 Pro Setup
              </button>
              <span>·</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
              >
                Return to Top
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#879e89]">
            <p>
              Designed for local inference with Ollama (Llama 3.2 3B & Qwen 2.5 7B) on Apple Silicon.
            </p>
            <p className="flex items-center gap-1 font-serif italic text-white/90">
              <span>May your garden bloom in harmony with the seasons</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PlantDetailModal
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
        zoneString={zoneInfo.zone}
      />

      <CrewAiInspectorModal
        isOpen={isCrewAiModalOpen}
        onClose={() => setIsCrewAiModalOpen(false)}
      />

      <OllamaSettingsModal
        isOpen={isOllamaModalOpen}
        onClose={() => setIsOllamaModalOpen(false)}
        baseUrl={ollamaBaseUrl}
        setBaseUrl={setOllamaBaseUrl}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        isConnected={ollamaConnected}
        setIsConnected={setOllamaConnected}
        availableModels={availableModels}
        setAvailableModels={setAvailableModels}
      />
    </div>
  );
}
