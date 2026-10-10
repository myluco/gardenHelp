import { ClimateZoneInfo } from '../types/garden';
import { CLIMATE_ZONES_CATALOG } from '../data/plants';

export function resolveClimateZoneFromAddress(address: string): ClimateZoneInfo {
  const normalized = address.toLowerCase().trim();

  // Check known presets / cities
  for (const [key, data] of Object.entries(CLIMATE_ZONES_CATALOG)) {
    if (normalized.includes(key)) {
      return {
        zone: `USDA Zone ${data.zone}`,
        zoneNumber: data.zoneNumber,
        locationName: address,
        lastSpringFrost: data.lastFrost,
        firstAutumnFrost: data.firstFrost,
        growingSeasonDays: data.days,
        currentSeasonalStage: getSeasonalStage(data.lastFrost, data.firstFrost),
        microclimateAdvice: data.advice
      };
    }
  }

  // Postal code heuristic if US 5-digit zip provided
  const zipMatch = address.match(/\b\d{5}\b/);
  if (zipMatch) {
    const zip = zipMatch[0];
    const prefix2 = parseInt(zip.substring(0, 2), 10);
    const digit = parseInt(zip[0], 10);

    // High fidelity regional checks
    if (prefix2 >= 94 && prefix2 <= 95) {
      // 94xxx / 95xxx = SF Bay Area / San Jose (like 95135)
      return {
        zone: 'USDA Zone 9b',
        zoneNumber: 9,
        locationName: address.includes('San Jose') || address.includes('CA') ? address : `${address} (San Jose / Bay Area, CA)`,
        lastSpringFrost: 'February 15',
        firstAutumnFrost: 'December 10',
        growingSeasonDays: 298,
        currentSeasonalStage: 'Year-Round Coastal Growing',
        microclimateAdvice: 'Northern California / Bay Area (Zone 9b): Mild Mediterranean climate with dry, sunny summers and mild frost-light winters. Superior for heirloom tomatoes, citrus, figs, lavender, and continuous brassica harvests.'
      };
    } else if (prefix2 >= 90 && prefix2 <= 93) {
      // Southern California
      return {
        zone: 'USDA Zone 10a',
        zoneNumber: 10,
        locationName: `${address} (Southern California)`,
        lastSpringFrost: 'January 20 (Virtually Frost-Free)',
        firstAutumnFrost: 'December 30',
        growingSeasonDays: 345,
        currentSeasonalStage: 'Year-Round Subtropical Care',
        microclimateAdvice: 'Southern California (Zone 10a): Semi-arid subtropical microclimate. Abundant winter sun and extended warmth; ensure deep drip irrigation and afternoon shade for tender salad greens.'
      };
    } else if (prefix2 >= 97 && prefix2 <= 98) {
      // Pacific Northwest
      return {
        zone: 'USDA Zone 8b',
        zoneNumber: 8,
        locationName: `${address} (Pacific Northwest)`,
        lastSpringFrost: 'April 10',
        firstAutumnFrost: 'November 15',
        growingSeasonDays: 219,
        currentSeasonalStage: 'Mild Maritime Cultivation',
        microclimateAdvice: 'Pacific Northwest (Zone 8b): Mild, moisture-rich maritime climate. Exceptional for berries, climbing roses, hydrangeas, alliums, and brassicas.'
      };
    }

    if (digit <= 1) {
      return {
        zone: 'USDA Zone 6b',
        zoneNumber: 6,
        locationName: address,
        lastSpringFrost: 'April 25',
        firstAutumnFrost: 'October 25',
        growingSeasonDays: 183,
        currentSeasonalStage: 'Mid Season Planting & Care',
        microclimateAdvice: 'Northeastern temperate zone: moderate summer warmth with brisk autumn frost. Ideal for brassicas and heirloom squashes.'
      };
    } else if (digit <= 3) {
      return {
        zone: 'USDA Zone 8a',
        zoneNumber: 8,
        locationName: address,
        lastSpringFrost: 'April 1',
        firstAutumnFrost: 'November 15',
        growingSeasonDays: 228,
        currentSeasonalStage: 'Peak Warm Season Cultivation',
        microclimateAdvice: 'Southeastern warm zone: abundant rainfall and long growing season. Ensure well-drained beds and organic fungal protection.'
      };
    } else if (digit <= 6) {
      return {
        zone: 'USDA Zone 5b',
        zoneNumber: 5,
        locationName: address,
        lastSpringFrost: 'May 10',
        firstAutumnFrost: 'October 10',
        growingSeasonDays: 153,
        currentSeasonalStage: 'Late Spring / Early Summer Window',
        microclimateAdvice: 'Midwestern prairie zone: rapid spring thaw, intense sunny summers. Focus on mulching to retain soil moisture.'
      };
    } else if (digit <= 8) {
      return {
        zone: 'USDA Zone 8b',
        zoneNumber: 8,
        locationName: address,
        lastSpringFrost: 'March 15',
        firstAutumnFrost: 'November 25',
        growingSeasonDays: 255,
        currentSeasonalStage: 'High Summer Ripening Phase',
        microclimateAdvice: 'Southwest / Rocky transition: warm dry spells. Afternoon shade protects sensitive greens from premature bolting.'
      };
    } else {
      return {
        zone: 'USDA Zone 9b',
        zoneNumber: 9,
        locationName: address,
        lastSpringFrost: 'February 20',
        firstAutumnFrost: 'December 1',
        growingSeasonDays: 284,
        currentSeasonalStage: 'Year-Round Coastal Growing',
        microclimateAdvice: 'Pacific / Western sunny zone: Mediterranean mild winter climate. Perfect for year-round cut flowers and citrus.'
      };
    }
  }

  // Default fallback zone 7b
  return {
    zone: 'USDA Zone 7b',
    zoneNumber: 7,
    locationName: address || 'Temperate Garden',
    lastSpringFrost: 'April 15',
    firstAutumnFrost: 'November 1',
    growingSeasonDays: 200,
    currentSeasonalStage: 'Active Garden Window',
    microclimateAdvice: 'Balanced temperate maritime/inland climate. Supports full spectrum of heirloom vegetables, climbing roses, and aromatic herbs.'
  };
}

function getSeasonalStage(lastFrost: string, firstFrost: string): string {
  const now = new Date();
  const month = now.getMonth(); // 0-indexed: 0 = Jan, 9 = Oct

  if (month >= 2 && month <= 4) {
    return 'Early Spring Seed Starting & Pruning';
  } else if (month >= 5 && month <= 7) {
    return 'Peak Summer Care, Spraying & Succession Planting';
  } else if (month >= 8 && month <= 10) {
    return 'Autumn Harvest, Curing, Storage & Winter Preparation';
  } else {
    return 'Dormant Season Planning & Winter Protection';
  }
}
