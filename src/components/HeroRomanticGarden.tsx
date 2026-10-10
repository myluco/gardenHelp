import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Search, Check, Sparkles, Calendar, Thermometer, ShieldCheck, AlertCircle, Info } from 'lucide-react';
import { ClimateZoneInfo } from '../types/garden';

interface HeroProps {
  currentAddress: string;
  zoneInfo: ClimateZoneInfo;
  onAddressSubmit: (newAddress: string) => void;
  onDetectLocation: () => void;
  isDetectingLocation: boolean;
  locationStatus?: { type: 'success' | 'error' | 'info'; message: string } | null;
}

const PRESET_LOCATIONS = [
  { label: 'Asheville, NC', zone: 'Zone 7a' },
  { label: 'Portland, OR', zone: 'Zone 8b' },
  { label: 'Austin, TX', zone: 'Zone 8b' },
  { label: 'Chicago, IL', zone: 'Zone 6a' },
  { label: 'New York, NY', zone: 'Zone 7b' },
  { label: 'London, UK', zone: 'Zone 9a' },
  { label: 'San Francisco, CA', zone: 'Zone 10a' },
];

export const HeroRomanticGarden: React.FC<HeroProps> = ({
  currentAddress,
  zoneInfo,
  onAddressSubmit,
  onDetectLocation,
  isDetectingLocation,
  locationStatus,
}) => {
  const [inputVal, setInputVal] = useState(currentAddress);
  const [submitted, setSubmitted] = useState(false);

  // Keep input synchronized if address changes from presets or geocoding
  useEffect(() => {
    setInputVal(currentAddress);
  }, [currentAddress]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onAddressSubmit(inputVal.trim());
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  const handleSelectPreset = (loc: string) => {
    setInputVal(loc);
    onAddressSubmit(loc);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 bg-gradient-to-b from-[#faf8f5] via-[#f7f3eb] to-[#f4efe4] border-b border-[#e5dfd2]">
      {/* Subtle Romantic Floral Accent Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2d4a34_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Romantic Introduction & Address Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#466649] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#466649]" />
              <span>Horticultural Wisdom & Botanical Care</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a2f20] leading-[1.12]">
              Help My Garden
            </h1>

            <p className="text-base sm:text-lg text-[#4a5849] leading-relaxed max-w-2xl font-normal">
              Every romantic garden flourishes when tended with gentle intention. Indicate your location to unlock microclimate-tailored schedules for <strong className="font-semibold text-[#1e3323]">pruning</strong>, <strong className="font-semibold text-[#1e3323]">fertilizing</strong>, <strong className="font-semibold text-[#1e3323]">organic spraying</strong>, <strong className="font-semibold text-[#1e3323]">planting by sun exposure</strong>, sensory <strong className="font-semibold text-[#1e3323]">harvesting cues</strong>, <strong className="font-semibold text-[#1e3323]">cellar storage</strong>, and <strong className="font-semibold text-[#1e3323]">seed starting</strong>.
            </p>

            {/* Address Input Form */}
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#ded7c8] shadow-sm max-w-xl">
              <label htmlFor="garden-address" className="block text-xs font-semibold text-[#2f4233] uppercase tracking-wider mb-2">
                Enter Your Garden Address or Postal Code
              </label>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667e6b]" />
                  <input
                    id="garden-address"
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="e.g. 742 Evergreen Terr, Springfield or Asheville, NC"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#fbfaf8] border border-[#d6cfbe] focus:border-[#426b48] focus:ring-1 focus:ring-[#426b48] rounded-lg text-sm text-[#1e3323] placeholder-[#8d9b8b] outline-none transition-all"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#2d4a34] hover:bg-[#233b29] text-white text-sm font-medium rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    {submitted ? <Check className="w-4 h-4 text-emerald-300" /> : <Search className="w-4 h-4" />}
                    <span>Update Garden</span>
                  </button>

                  <button
                    type="button"
                    onClick={onDetectLocation}
                    disabled={isDetectingLocation}
                    className="p-2.5 bg-[#f2efe8] hover:bg-[#e7e3d8] active:bg-[#dedad0] text-[#3c5440] border border-[#d6cfbe] rounded-lg transition-colors cursor-pointer"
                    title="Auto-detect current location via browser GPS (will not erase your address if unavailable)"
                    aria-label="Auto-detect current location"
                  >
                    <Navigation className={`w-4 h-4 ${isDetectingLocation ? 'animate-spin text-[#2d4a34]' : ''}`} />
                  </button>
                </div>
              </form>

              {/* Status feedback if GPS detection succeeded or failed */}
              {locationStatus && (
                <div
                  className={`mt-2.5 px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 border ${
                    locationStatus.type === 'error'
                      ? 'bg-[#fff7f5] text-[#933924] border-[#f4c8be]'
                      : locationStatus.type === 'success'
                      ? 'bg-[#f0f8f3] text-[#1b5e2b] border-[#c0e6cb]'
                      : 'bg-[#f4efe8] text-[#54432d] border-[#ded4c3]'
                  }`}
                >
                  {locationStatus.type === 'error' && <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#933924]" />}
                  {locationStatus.type === 'success' && <Check className="w-3.5 h-3.5 shrink-0 text-[#1b5e2b]" />}
                  {locationStatus.type === 'info' && <Info className="w-3.5 h-3.5 shrink-0 text-[#54432d]" />}
                  <span className="leading-tight">{locationStatus.message}</span>
                </div>
              )}

              {/* Quick Select Presets */}
              <div className="mt-3.5 pt-3 border-t border-[#f0ece1]">
                <div className="text-[11px] font-medium text-[#738271] mb-2 flex items-center gap-1">
                  <span>Common Climate Regions:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_LOCATIONS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => handleSelectPreset(preset.label)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors border ${
                        inputVal.toLowerCase().includes(preset.label.toLowerCase())
                          ? 'bg-[#2d4a34] text-white border-[#2d4a34]'
                          : 'bg-[#faf8f4] text-[#3f5241] border-[#ded7c8] hover:bg-[#f1eee5]'
                      }`}
                    >
                      <span>{preset.label}</span>
                      <span className="opacity-70 text-[10px] ml-1">({preset.zone})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resolved Hardiness Zone & Microclimate Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              <div className="bg-[#f5f1e8] border border-[#e1d9ca] p-3 rounded-lg">
                <div className="flex items-center gap-1.5 text-xs text-[#526a54] mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-[#3b5e40]" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Hardiness Zone</span>
                </div>
                <div className="font-serif text-lg font-bold text-[#1f3824]">
                  {zoneInfo.zone}
                </div>
                <div className="text-[11px] text-[#6d7c6c] mt-0.5">
                  {zoneInfo.growingSeasonDays} day frost-free span
                </div>
              </div>

              <div className="bg-[#f5f1e8] border border-[#e1d9ca] p-3 rounded-lg">
                <div className="flex items-center gap-1.5 text-xs text-[#526a54] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#3b5e40]" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Frost Dates</span>
                </div>
                <div className="text-xs font-semibold text-[#1f3824]">
                  Spring: {zoneInfo.lastSpringFrost}
                </div>
                <div className="text-[11px] text-[#6d7c6c] mt-0.5">
                  Fall: {zoneInfo.firstAutumnFrost}
                </div>
              </div>

              <div className="bg-[#f5f1e8] border border-[#e1d9ca] p-3 rounded-lg">
                <div className="flex items-center gap-1.5 text-xs text-[#526a54] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3b5e40]" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Seasonal Phase</span>
                </div>
                <div className="text-xs font-semibold text-[#1f3824] truncate" title={zoneInfo.currentSeasonalStage}>
                  {zoneInfo.currentSeasonalStage}
                </div>
                <div className="text-[11px] text-[#6d7c6c] mt-0.5">
                  Optimal for active care
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Helping Hand & Romantic Garden Figure */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md lg:max-w-none">
              {/* Romantic Vintage Photo Frame Styling */}
              <div className="relative p-2 bg-[#f4efe6] rounded-2xl border border-[#ded5c4] shadow-md transition-transform duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#e8e2d4]">
                  <img
                    src="/src/assets/images/helping_hand_romantic_garden_1791255826954.jpg"
                    alt="A tender helping hand cupping a blossoming rose and seedling in a romantic garden"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlay Quote / Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-serif italic text-sm sm:text-base drop-shadow-sm">
                      "To plant a garden is to believe in tomorrow."
                    </p>
                    <p className="text-[11px] text-white/80 tracking-wide mt-0.5">
                      The Helping Hand · Romantic Cottage Garden Sanctuary
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Botanical Note Card */}
              <div className="mt-3 text-center">
                <p className="text-xs text-[#6e7d6d] italic font-serif">
                  A loving helping hand guiding you through each bloom, vine, and harvest.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
