export type LightCategory = 'full-sun' | 'part-shade' | 'full-shade';

export type TaskCategory =
  | 'prune'
  | 'fertilize'
  | 'spray'
  | 'plant'
  | 'harvest'
  | 'store'
  | 'seed';

export interface PlantData {
  id: string;
  name: string;
  botanicalName: string;
  category: 'Vegetable' | 'Fruit' | 'Herb' | 'Flower' | 'Shrub' | 'Tree';
  light: LightCategory;
  suitableZones: number[]; // e.g. [4, 5, 6, 7, 8, 9]
  bestTimeToPlant: string;
  bestTimeToPlantByZone?: Record<string, string>;
  imageEmoji: string;
  heroNote: string;

  plantingMonths?: number[]; // Months when planting is actually viable (1-12)
  viableToPlantInOctober?: boolean;
  octoberStatus?: string; // e.g. "Do not plant now; end-of-season harvest only" or "Prime planting window now!"

  // 1. Pruning
  pruning: {
    needsPruning: boolean;
    frequency: string;
    bestTime: string;
    technique: string;
    toolsNeeded: string;
    warning?: string;
  };

  // 2. Fertilizing
  fertilizing: {
    needsFertilizer: boolean;
    frequency: string;
    npkRatio: string;
    organicRecommendation: string;
    applicationMethod: string;
    cutoffSeason: string;
  };

  // 3. Spraying & IPM
  spraying: {
    commonPestsAndDiseases: string[];
    recommendedSpray: string;
    sprayFrequency: string;
    preventativeTips: string;
    pollinatorSafety: string;
  };

  // 4. Planting
  planting: {
    sunExposureHours: string;
    soilPreference: string;
    spacing: string;
    primePlantingWindow: string;
    companionPlants: string[];
  };

  // 5. Harvesting
  harvesting: {
    sensoryReadinessCues: string[]; // e.g. "Blushing stage: bottom turns rosy pink"
    visualSigns: string;
    tactileSigns: string;
    aromaSigns?: string;
    harvestWindow: string;
    technique: string;
  };

  // 6. Storing
  storing: {
    lightCondition: 'Complete Darkness' | 'Cool Ambient Light' | 'Dry Indirect Light';
    curingRequired: boolean;
    curingDetails?: string;
    idealTemperature: string;
    humidity: string;
    expectedShelfLife: string;
    storageMethod: string;
  };

  // 7. Seed Starting
  seedStarting: {
    preTreatment: string;
    preTreatmentDuration: string;
    germinationTempRange: string;
    requiresLight: boolean;
    plantingDepth: string;
    averageSproutingDays: string;
    directSowVsIndoors: string;
  };
}

export interface ClimateZoneInfo {
  zone: string;
  zoneNumber: number;
  locationName: string;
  lastSpringFrost: string;
  firstAutumnFrost: string;
  growingSeasonDays: number;
  currentSeasonalStage: string;
  microclimateAdvice: string;
}

export interface OllamaConfig {
  baseUrl: string;
  model: string;
  isConnected: boolean;
  temperature: number;
}

export interface SeasonalResearchResult {
  location: string;
  zone: string;
  month: string;
  seasonalSummary: string;
  warmSeasonWarning?: string;
  categoryTitle: string;
  recommendations: Array<{
    name: string;
    botanicalName?: string;
    light: LightCategory;
    type: string;
    bestTimeNow: string;
    keyGuidance: string;
    sensoryOrTechnique: string;
    emoji: string;
  }>;
  proTips: string[];
}
