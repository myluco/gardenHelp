import React from 'react';
import { PlantData, TaskCategory } from '../types/garden';
import {
  Scissors,
  Beaker,
  Bug,
  Sun,
  Apple,
  Archive,
  Sparkles,
  Calendar,
  AlertTriangle,
  ChevronRight,
  Clock,
  Thermometer,
  ShieldAlert,
} from 'lucide-react';

interface PlantCardProps {
  plant: PlantData;
  activeCategory: TaskCategory;
  onSelectPlant: (plant: PlantData) => void;
  zoneNumber: number;
}

export const PlantCard: React.FC<PlantCardProps> = ({
  plant,
  activeCategory,
  onSelectPlant,
}) => {
  return (
    <div
      onClick={() => onSelectPlant(plant)}
      className="group bg-white rounded-xl border border-[#ded8cb] hover:border-[#b8cbb8] shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
    >
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-1.5 bg-[#f6f3eb] rounded-lg border border-[#e5decb] flex items-center justify-center">
              {plant.imageEmoji}
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1b3121] group-hover:text-[#2a5c34] transition-colors leading-tight">
                {plant.name}
              </h3>
              <p className="text-xs italic text-[#6f7e6f] font-serif mt-0.5">
                {plant.botanicalName}
              </p>
            </div>
          </div>

          {/* Clean unboxed text metadata (Anti-slop compliant) */}
          <div className="text-right text-[11px] text-[#6c7b6c]">
            <span>{plant.category}</span>
          </div>
        </div>

        {/* Quiet 1-line note */}
        <p className="text-xs text-[#526352] line-clamp-2 mt-2 leading-relaxed">
          {plant.heroNote}
        </p>
      </div>

      {/* Dynamic Content Body Based on Task Category */}
      <div className="px-5 py-3 bg-[#fdfcf9] border-t border-[#f0ebe0] flex-1">
        
        {/* 1. PRUNING */}
        {activeCategory === 'prune' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#3a5d3f]" />
                Pruning Required:
              </span>
              <span className={`font-semibold ${plant.pruning.needsPruning ? 'text-[#1c3823]' : 'text-[#8b6547]'}`}>
                {plant.pruning.needsPruning ? 'Yes' : 'Minimal / No'}
              </span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Frequency: </span>
              {plant.pruning.frequency}
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Best Time: </span>
              <span className="text-[#2d5c36] font-medium">{plant.pruning.bestTime}</span>
            </div>

            <div className="pt-1 text-[#556956] line-clamp-2">
              <span className="font-medium text-[#2d3f30]">Technique: </span>
              {plant.pruning.technique}
            </div>

            {plant.pruning.warning && (
              <div className="mt-1 flex items-start gap-1.5 text-[11px] text-[#8c522f]">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{plant.pruning.warning}</span>
              </div>
            )}
          </div>
        )}

        {/* 2. FERTILIZING */}
        {activeCategory === 'fertilize' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Beaker className="w-3.5 h-3.5 text-[#3a5d3f]" />
                Nutrient Cadence:
              </span>
              <span className="font-semibold text-[#1c3823]">{plant.fertilizing.frequency}</span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">N-P-K Ratio: </span>
              <span className="font-medium text-[#265330]">{plant.fertilizing.npkRatio}</span>
            </div>

            <div className="text-[#435945]">
              <span className="font-semibold text-[#1c3823]">Organic Feed: </span>
              <span className="line-clamp-2">{plant.fertilizing.organicRecommendation}</span>
            </div>

            <div className="text-[11px] text-[#6d7f6e] pt-1">
              <span className="font-medium text-[#3b4e3d]">Cut-off Window: </span>
              {plant.fertilizing.cutoffSeason}
            </div>
          </div>
        )}

        {/* 3. SPRAYING */}
        {activeCategory === 'spray' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Bug className="w-3.5 h-3.5 text-[#3a5d3f]" />
                Pests & Pathogens:
              </span>
              <span className="text-[11px] text-[#805030] font-medium">
                {plant.spraying.commonPestsAndDiseases.length} targets
              </span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Target Pests: </span>
              <span className="text-[#4b5e4d]">
                {plant.spraying.commonPestsAndDiseases.slice(0, 3).join(', ')}
              </span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Organic Spray: </span>
              <span className="line-clamp-2 text-[#24522d] font-medium">
                {plant.spraying.recommendedSpray}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-[#3e6644]">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{plant.spraying.pollinatorSafety}</span>
            </div>
          </div>
        )}

        {/* 4. PLANTING (Divided into Sun / Part Shade / Shade) */}
        {activeCategory === 'plant' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#a3752e]" />
                Light Category:
              </span>
              <span className="font-bold text-[#1c3823] capitalize">
                {plant.light.replace('-', ' ')}
              </span>
            </div>

            {/* Current Season Viability Alert (October) */}
            {plant.viableToPlantInOctober ? (
              <div className="bg-[#edf7ee] p-2 rounded-md border border-[#c2e4c6]">
                <div className="text-[11px] font-bold text-[#1b5e28] flex items-center gap-1">
                  <span>🌟 Viable to Plant Now (October)</span>
                </div>
                <div className="text-[11px] text-[#2c6e3b] mt-0.5 line-clamp-2">
                  {plant.octoberStatus || 'Ideal autumn planting window.'}
                </div>
              </div>
            ) : (
              <div className="bg-[#fff6ea] p-2 rounded-md border border-[#f5dab7]">
                <div className="text-[11px] font-bold text-[#8d4715] flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>⚠️ DO NOT Plant in October</span>
                </div>
                <div className="text-[11px] text-[#7a3e13] mt-0.5 line-clamp-2">
                  {plant.octoberStatus || 'Warm-season crop. Cold soil and frost will prevent growth.'}
                </div>
              </div>
            )}

            <div className="bg-[#f5f1e6] p-2 rounded-md border border-[#e5dccb]">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#294a2f] uppercase tracking-wide">
                <Calendar className="w-3 h-3 text-[#3d6e46]" />
                <span>Standard Prime Window:</span>
              </div>
              <div className="font-serif text-sm font-bold text-[#17381d] mt-0.5">
                {plant.bestTimeToPlant}
              </div>
            </div>

            <div className="text-[#4b5e4d]">
              <span className="font-semibold text-[#1c3823]">Sun Hours: </span>
              {plant.planting.sunExposureHours}
            </div>

            <div className="text-[#4b5e4d] truncate">
              <span className="font-semibold text-[#1c3823]">Companions: </span>
              {plant.planting.companionPlants.join(', ')}
            </div>
          </div>
        )}

        {/* 5. HARVESTING (Sensory cues & Blushing stage) */}
        {activeCategory === 'harvest' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Apple className="w-3.5 h-3.5 text-[#9a4b37]" />
                Harvest Window:
              </span>
              <span className="font-semibold text-[#1c3823]">{plant.harvesting.harvestWindow}</span>
            </div>

            {/* Sensory readiness cues */}
            <div className="space-y-1.5">
              <span className="font-semibold text-[#1c3823] block">Sensory Readiness Cues:</span>
              <ul className="space-y-1 pl-1">
                {plant.harvesting.sensoryReadinessCues.slice(0, 2).map((cue, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-[#3b4f3d] text-[11px]">
                    <span className="text-[#8c5234] font-bold">·</span>
                    <span className="line-clamp-2">{cue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[11px] text-[#556956] pt-1">
              <span className="font-medium text-[#2b3e2d]">Tactile: </span>
              {plant.harvesting.tactileSigns}
            </div>
          </div>
        )}

        {/* 6. STORING */}
        {activeCategory === 'store' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Archive className="w-3.5 h-3.5 text-[#596659]" />
                Light Exposure:
              </span>
              <span className="font-semibold text-[#1c3823]">{plant.storing.lightCondition}</span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Curing Needed: </span>
              <span className={plant.storing.curingRequired ? 'text-[#8b4722] font-semibold' : 'text-[#38593a]'}>
                {plant.storing.curingRequired ? 'Yes (Curing Required)' : 'No Curing Needed'}
              </span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Storage Temp: </span>
              <span className="text-[#2b5632] font-medium">{plant.storing.idealTemperature}</span>
            </div>

            <div className="text-[#435945]">
              <span className="font-semibold text-[#1c3823]">Shelf Life: </span>
              <span className="font-medium">{plant.storing.expectedShelfLife}</span>
            </div>

            <div className="text-[11px] text-[#576958] line-clamp-2 pt-0.5">
              {plant.storing.storageMethod}
            </div>
          </div>
        )}

        {/* 7. SEED STARTING */}
        {activeCategory === 'seed' && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#eee8dc]">
              <span className="text-[#697869] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8a682b]" />
                Sprouting Window:
              </span>
              <span className="font-semibold text-[#1c3823] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#58735b]" />
                {plant.seedStarting.averageSproutingDays}
              </span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Pre-Treatment: </span>
              <span className="line-clamp-2 text-[#465a48]">{plant.seedStarting.preTreatment}</span>
            </div>

            <div className="text-[#304233]">
              <span className="font-semibold text-[#1c3823]">Soil Temp: </span>
              <span className="text-[#2c5833] font-medium flex items-center gap-1 inline-flex">
                <Thermometer className="w-3 h-3 text-[#2c5833]" />
                {plant.seedStarting.germinationTempRange}
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-[#556956]">
                <strong className="text-[#213624]">Light Need: </strong>
                {plant.seedStarting.requiresLight ? 'Light (Surface Sow)' : 'Darkness (Cover)'}
              </span>
              <span className="text-[#556956]">
                <strong className="text-[#213624]">Depth: </strong>
                {plant.seedStarting.plantingDepth}
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3 bg-[#f7f4ed] border-t border-[#e8e2d4] flex items-center justify-between text-xs text-[#2b4b31] font-semibold group-hover:bg-[#f1ebe0] transition-colors">
        <span>View Full Botanical Care</span>
        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
