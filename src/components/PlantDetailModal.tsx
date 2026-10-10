import React, { useState } from 'react';
import { PlantData, TaskCategory } from '../types/garden';
import {
  X,
  Scissors,
  Beaker,
  Bug,
  Sun,
  Apple,
  Archive,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Clock,
  Thermometer,
  Shield,
  Layers,
  Printer,
} from 'lucide-react';

interface PlantDetailModalProps {
  plant: PlantData | null;
  onClose: () => void;
  zoneString: string;
}

export const PlantDetailModal: React.FC<PlantDetailModalProps> = ({
  plant,
  onClose,
  zoneString,
}) => {
  const [activeTab, setActiveTab] = useState<TaskCategory>('prune');

  if (!plant) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#faf8f5] w-full max-w-4xl rounded-2xl border border-[#ded8cb] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#26442e] to-[#1c3322] text-[#f7f5ef] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-12">
            <div className="flex items-center gap-4">
              <span className="text-4xl p-2.5 bg-white/15 rounded-xl border border-white/20">
                {plant.imageEmoji}
              </span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                  {plant.name}
                </h2>
                <p className="text-sm italic font-serif text-[#cad8cb]">
                  {plant.botanicalName}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#cad8cb] mt-1">
                  <span>{plant.category}</span>
                  <span>·</span>
                  <span className="capitalize">{plant.light.replace('-', ' ')}</span>
                  <span>·</span>
                  <span>Optimized for {zoneString}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 text-xs font-medium rounded-lg text-white border border-white/20 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Care Guide</span>
            </button>
          </div>
        </div>

        {/* Tab Strip for 7 Categories */}
        <div className="flex overflow-x-auto bg-[#eeece4] border-b border-[#ddd6c7] p-1.5 scrollbar-none">
          {[
            { id: 'prune' as TaskCategory, label: '1. Prune', icon: Scissors },
            { id: 'fertilize' as TaskCategory, label: '2. Fertilize', icon: Beaker },
            { id: 'spray' as TaskCategory, label: '3. Spray', icon: Bug },
            { id: 'plant' as TaskCategory, label: '4. Plant', icon: Sun },
            { id: 'harvest' as TaskCategory, label: '5. Harvest', icon: Apple },
            { id: 'store' as TaskCategory, label: '6. Store', icon: Archive },
            { id: 'seed' as TaskCategory, label: '7. Seed', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-[#27432e] text-white shadow-xs'
                    : 'text-[#415343] hover:text-[#1c2e1f] hover:bg-white/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#223324]">
          {/* 1. PRUNING */}
          {activeTab === 'prune' && (
            <div className="space-y-4">
              <div className="bg-[#f3f0e6] p-4 rounded-xl border border-[#ded5c2] flex items-start justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#526a54]">
                    Pruning Assessment
                  </h4>
                  <div className="font-serif text-xl font-bold text-[#1f3824] mt-1">
                    {plant.pruning.needsPruning ? 'Pruning Recommended' : 'Low Maintenance / Minimal Pruning'}
                  </div>
                  <p className="text-xs text-[#526352] mt-0.5">
                    Frequency: <span className="font-semibold text-[#1f3824]">{plant.pruning.frequency}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#526a54] block">
                    Best Time of Year
                  </span>
                  <span className="font-serif text-lg font-bold text-[#2d5c36]">
                    {plant.pruning.bestTime}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-[#1c3521]">Technique & Execution</h5>
                <p className="text-sm leading-relaxed text-[#3a4d3c] bg-white p-4 rounded-xl border border-[#e5decb]">
                  {plant.pruning.technique}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3 rounded-lg border border-[#e5decb]">
                    <span className="text-xs font-semibold text-[#506652] block">Tools Needed:</span>
                    <span className="text-xs text-[#283d2a] font-medium">{plant.pruning.toolsNeeded}</span>
                  </div>
                  {plant.pruning.warning && (
                    <div className="bg-[#fff9f2] p-3 rounded-lg border border-[#f5d9bd]">
                      <span className="text-xs font-semibold text-[#a05220] flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Crucial Warning:
                      </span>
                      <span className="text-xs text-[#703b17]">{plant.pruning.warning}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 2. FERTILIZING */}
          {activeTab === 'fertilize' && (
            <div className="space-y-4">
              <div className="bg-[#f3f0e6] p-4 rounded-xl border border-[#ded5c2] flex items-start justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#526a54]">
                    Nutritional Strategy
                  </h4>
                  <div className="font-serif text-xl font-bold text-[#1f3824] mt-1">
                    {plant.fertilizing.frequency}
                  </div>
                  <p className="text-xs text-[#526352] mt-0.5">
                    Target N-P-K: <span className="font-bold text-[#2d5c36]">{plant.fertilizing.npkRatio}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#526a54] block">
                    Seasonal Cut-Off
                  </span>
                  <span className="text-xs font-medium text-[#7a4e28]">
                    {plant.fertilizing.cutoffSeason}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5decb] space-y-3">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#48634a] mb-1">
                    Organic Amendments & Compost Formula
                  </h5>
                  <p className="text-sm text-[#314433] leading-relaxed">
                    {plant.fertilizing.organicRecommendation}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#f0ebd9]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#48634a] mb-1">
                    Application Method
                  </h5>
                  <p className="text-xs text-[#4b5e4d]">
                    {plant.fertilizing.applicationMethod}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. SPRAYING */}
          {activeTab === 'spray' && (
            <div className="space-y-4">
              <div className="bg-[#f3f0e6] p-4 rounded-xl border border-[#ded5c2]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#526a54]">
                  Pest & Disease Defense (IPM)
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {plant.spraying.commonPestsAndDiseases.map((pest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs bg-white text-[#7d3b1f] border border-[#e3d1c1] rounded-md font-medium"
                    >
                      {pest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5decb] space-y-3">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#48634a] mb-1">
                    Recommended Organic Spray Formula
                  </h5>
                  <p className="text-sm font-semibold text-[#1e3823]">
                    {plant.spraying.recommendedSpray}
                  </p>
                  <p className="text-xs text-[#526653] mt-1">
                    Application Frequency: {plant.spraying.sprayFrequency}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f0ebd9] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-xs font-bold text-[#344d36] block">Preventative Cultural Steps:</span>
                    <p className="text-xs text-[#526653] mt-0.5">{plant.spraying.preventativeTips}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#344d36] block flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-[#2e6838]" />
                      Pollinator Safe Window:
                    </span>
                    <p className="text-xs text-[#526653] mt-0.5">{plant.spraying.pollinatorSafety}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. PLANTING */}
          {activeTab === 'plant' && (
            <div className="space-y-4">
              <div className="bg-[#f5f1e6] p-4 rounded-xl border border-[#ded4bf]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#4d6950]">
                  Prime Planting Window
                </div>
                <div className="font-serif text-2xl font-bold text-[#1f3a22] mt-1">
                  {plant.bestTimeToPlant}
                </div>
                <p className="text-xs text-[#5b6e5b] mt-1">
                  {plant.planting.primePlantingWindow}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#e5decb]">
                  <span className="text-xs font-semibold text-[#5a6e5b] block">Sunlight Category</span>
                  <span className="font-serif text-base font-bold text-[#1e3323] capitalize">
                    {plant.light.replace('-', ' ')}
                  </span>
                  <span className="text-[11px] text-[#6e7d6e] block mt-0.5">
                    {plant.planting.sunExposureHours}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#e5decb]">
                  <span className="text-xs font-semibold text-[#5a6e5b] block">Soil Preference</span>
                  <span className="text-xs font-medium text-[#2d4030] block mt-0.5">
                    {plant.planting.soilPreference}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#e5decb]">
                  <span className="text-xs font-semibold text-[#5a6e5b] block">Spacing</span>
                  <span className="text-xs font-medium text-[#2d4030] block mt-0.5">
                    {plant.planting.spacing}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5decb]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#48634a] block mb-2">
                  Beneficial Companion Plants
                </span>
                <div className="flex flex-wrap gap-2">
                  {plant.planting.companionPlants.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#f3efe6] text-[#293d2c] border border-[#ded6c4] rounded-lg text-xs font-medium"
                    >
                      🌿 {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 5. HARVESTING */}
          {activeTab === 'harvest' && (
            <div className="space-y-4">
              <div className="bg-[#fdf3ee] p-4 rounded-xl border border-[#f2d8c9]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#a04e28]">
                  Harvest Evaluation & Sensory Readiness
                </h4>
                <div className="font-serif text-xl font-bold text-[#6d2f14] mt-1">
                  Checklist for Peak Flavor & Texture
                </div>
                <p className="text-xs text-[#87492c] mt-0.5">
                  Typical Season: {plant.harvesting.harvestWindow}
                </p>
              </div>

              {/* Sensory Cues List */}
              <div className="bg-white p-4 rounded-xl border border-[#e5decb] space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#355238]">
                  Key Indicators to Look For:
                </h5>
                <div className="space-y-2">
                  {plant.harvesting.sensoryReadinessCues.map((cue, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#fcfbf8] rounded-lg border border-[#f0ebd9]">
                      <CheckCircle className="w-4 h-4 text-[#356b3e] shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed text-[#263b28] font-medium">{cue}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#f0ebd9]">
                  <div>
                    <span className="text-xs font-bold text-[#455a47] block">Tactile Feel:</span>
                    <p className="text-xs text-[#5d6f5e] mt-0.5">{plant.harvesting.tactileSigns}</p>
                  </div>
                  {plant.harvesting.aromaSigns && (
                    <div>
                      <span className="text-xs font-bold text-[#455a47] block">Aroma Cue:</span>
                      <p className="text-xs text-[#5d6f5e] mt-0.5">{plant.harvesting.aromaSigns}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 6. STORING */}
          {activeTab === 'store' && (
            <div className="space-y-4">
              <div className="bg-[#f3f0e6] p-4 rounded-xl border border-[#ded5c2] flex items-start justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#526a54]">
                    Post-Harvest Preservation
                  </h4>
                  <div className="font-serif text-xl font-bold text-[#1f3824] mt-1">
                    {plant.storing.lightCondition}
                  </div>
                  <p className="text-xs text-[#526352] mt-0.5">
                    Expected Shelf Life: <span className="font-semibold text-[#1f3824]">{plant.storing.expectedShelfLife}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#526a54] block">
                    Ideal Temperature
                  </span>
                  <span className="font-serif text-lg font-bold text-[#2d5c36]">
                    {plant.storing.idealTemperature}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5decb] space-y-3">
                {plant.storing.curingRequired && (
                  <div className="p-3 bg-[#fff8ef] rounded-lg border border-[#f3d9bd]">
                    <span className="text-xs font-bold text-[#944c18] block">
                      ⚠️ Curing Protocol Required:
                    </span>
                    <p className="text-xs text-[#6e3913] mt-1 leading-relaxed">
                      {plant.storing.curingDetails}
                    </p>
                  </div>
                )}

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#48634a] mb-1">
                    Optimal Storage Technique
                  </h5>
                  <p className="text-sm text-[#314433] leading-relaxed">
                    {plant.storing.storageMethod}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f0ebd9] text-xs text-[#5c6e5d]">
                  <strong className="text-[#2b3d2d]">Humidity Level: </strong>
                  {plant.storing.humidity}
                </div>
              </div>
            </div>
          )}

          {/* 7. SEED STARTING */}
          {activeTab === 'seed' && (
            <div className="space-y-4">
              <div className="bg-[#f5f1e6] p-4 rounded-xl border border-[#ded4bf] flex items-start justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#4d6950]">
                    Seed Germination Blueprint
                  </h4>
                  <div className="font-serif text-xl font-bold text-[#1f3a22] mt-1">
                    Sprouts in {plant.seedStarting.averageSproutingDays}
                  </div>
                  <p className="text-xs text-[#5b6e5b] mt-0.5">
                    Method: {plant.seedStarting.directSowVsIndoors}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4d6950] block">
                    Soil Temperature
                  </span>
                  <span className="font-serif text-lg font-bold text-[#275330]">
                    {plant.seedStarting.germinationTempRange}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-[#e5decb]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#48634a] mb-1">
                    Seed Pre-Treatment
                  </h5>
                  <p className="text-xs text-[#314433] leading-relaxed">
                    {plant.seedStarting.preTreatment}
                  </p>
                  <p className="text-[11px] text-[#6d7e6e] mt-2">
                    <strong className="text-[#2c402d]">Duration: </strong>
                    {plant.seedStarting.preTreatmentDuration}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#e5decb] space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#48634a] mb-1">
                    Planting Mechanics
                  </h5>
                  <div className="text-xs text-[#314433]">
                    <strong className="text-[#2c402d]">Light Requirement: </strong>
                    {plant.seedStarting.requiresLight ? 'Needs light (surface sow / gentle press)' : 'Needs darkness (cover with mix)'}
                  </div>
                  <div className="text-xs text-[#314433]">
                    <strong className="text-[#2c402d]">Sowing Depth: </strong>
                    {plant.seedStarting.plantingDepth}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f4f0e7] border-t border-[#ded6c5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2d4a34] hover:bg-[#223927] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Botanical Guide
          </button>
        </div>
      </div>
    </div>
  );
};
