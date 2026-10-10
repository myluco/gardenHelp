import React, { useState } from 'react';
import { Sparkles, AlertTriangle, CheckCircle2, Calendar, Sun, CloudSun, Cloud, Loader2, Bot, ArrowRight, ShieldAlert } from 'lucide-react';
import { ClimateZoneInfo, SeasonalResearchResult, TaskCategory } from '../types/garden';

interface SeasonalResearchPanelProps {
  zoneInfo: ClimateZoneInfo;
  activeCategory: TaskCategory;
  seasonMode: 'current-season' | 'all-seasons';
  setSeasonMode: (mode: 'current-season' | 'all-seasons') => void;
  onSelectPlantName?: (name: string) => void;
}

export const SeasonalResearchPanel: React.FC<SeasonalResearchPanelProps> = ({
  zoneInfo,
  activeCategory,
  seasonMode,
  setSeasonMode,
  onSelectPlantName,
}) => {
  const [loading, setLoading] = useState(false);
  const [researchData, setResearchData] = useState<SeasonalResearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const currentMonth = 'October';

  const runLiveResearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/garden/seasonal-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: zoneInfo.locationName,
          zone: zoneInfo.zone,
          month: currentMonth,
          category: activeCategory,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data: SeasonalResearchResult = await res.json();
      setResearchData(data);
    } catch (err: any) {
      console.warn('Live LLM seasonal research error:', err);
      setError('Could not complete live LLM search. Botanical fall calendar is active below.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fbf9f4] rounded-2xl border border-[#ded8cb] overflow-hidden shadow-xs mb-8">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#2a4531] to-[#1c3222] p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#98dfa5]">
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Seasonal Intelligence · Current Month: {currentMonth} (Autumn)</span>
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
            Real-Time Seasonal Horticultural Advisory
          </h3>
          <p className="text-xs text-[#cad8cc] mt-0.5">
            Calibrated for {zoneInfo.locationName} ({zoneInfo.zone}) · Frost Risk Window: {zoneInfo.firstAutumnFrost}
          </p>
        </div>

        {/* Season Mode Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-black/25 backdrop-blur-xs rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setSeasonMode('current-season')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              seasonMode === 'current-season'
                ? 'bg-white text-[#1e3423] shadow-xs font-semibold'
                : 'text-[#d3e2d6] hover:text-white'
            }`}
          >
            🍂 Plant Right Now ({currentMonth})
          </button>
          <button
            onClick={() => setSeasonMode('all-seasons')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              seasonMode === 'all-seasons'
                ? 'bg-white text-[#1e3423] shadow-xs font-semibold'
                : 'text-[#d3e2d6] hover:text-white'
            }`}
          >
            📚 All-Season Catalog
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Prominent Warm-Season Reality Banner (Crucial for Tomatoes, Peppers, Squash) */}
        {activeCategory === 'plant' && (
          <div className="bg-[#fff8f0] border-l-4 border-amber-600 p-4 sm:p-5 rounded-r-xl border-y border-r border-[#eddccb] space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-base sm:text-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Autumn Reality Check: What NOT to Plant in {currentMonth}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#7a4922] leading-relaxed">
              <strong>Tomatoes, Peppers, Eggplants, and Melons are warm-season nightshades and cucurbits that CANNOT be planted in {currentMonth}.</strong> As soil temperatures drop below 55°F and daylight wanes, warm-season starts will stagnate and rot. In {currentMonth}, existing tomato vines should be harvested for their final blushing fruits, and spent plants cleared for cold-tolerant fall crops.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#663b19] flex items-center gap-2">
              <span>What to plant right now instead:</span>
              <span className="text-[#204a29] font-bold">Hardneck & Softneck Garlic · Bloomsdale Spinach · Lacinato Kale · Spring-Blooming Bulbs</span>
            </div>
          </div>
        )}

        {/* Action Bar: Run Live LLM Research */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#eee8db]">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#1f3523]">
              {researchData ? researchData.categoryTitle : `Live AI Botanical Research for ${currentMonth}`}
            </h4>
            <p className="text-xs text-[#5d6e5d]">
              Ask the LLM research engine to scan current microclimate data and return exact actions for {zoneInfo.zone}.
            </p>
          </div>

          <button
            onClick={runLiveResearch}
            disabled={loading}
            className="px-4 py-2 bg-[#2d4a34] hover:bg-[#203626] disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-300" />
                <span>Researching {currentMonth} Botany...</span>
              </>
            ) : (
              <>
                <Bot className="w-3.5 h-3.5 text-emerald-300" />
                <span>{researchData ? 'Refresh Live LLM Research' : `Run Live LLM Research (${currentMonth})`}</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="p-3 text-xs bg-[#fff7f5] text-[#913824] rounded-lg border border-[#f3c8be]">
            {error}
          </div>
        )}

        {/* Live LLM Research Results Display */}
        {researchData && (
          <div className="space-y-4 animate-in fade-in duration-300 bg-white p-5 rounded-xl border border-[#ded8cb]">
            <div className="p-3.5 bg-[#f5f1e8] rounded-lg border border-[#e1d7c4] text-xs text-[#394d3b] leading-relaxed">
              <strong className="text-[#1c3321] block font-serif text-sm mb-1">
                Seasonal Synthesis:
              </strong>
              {researchData.seasonalSummary}
            </div>

            {researchData.warmSeasonWarning && (
              <div className="p-3 bg-[#fff8ee] text-[#864c1f] text-xs rounded-lg border border-[#f5dbc2]">
                <strong className="block text-[#683610] mb-0.5">⚠️ Seasonal Boundary Alert:</strong>
                {researchData.warmSeasonWarning}
              </div>
            )}

            {/* Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {researchData.recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#faf8f4] rounded-lg border border-[#ded7c8] hover:border-[#b0c8b2] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl">{rec.emoji}</span>
                      <span className="text-[10px] font-semibold text-[#546b57] capitalize">
                        {rec.light.replace('-', ' ')}
                      </span>
                    </div>
                    <h5 className="font-serif font-bold text-sm text-[#193220]">{rec.name}</h5>
                    {rec.botanicalName && (
                      <p className="text-[11px] italic font-serif text-[#6c7d6d]">{rec.botanicalName}</p>
                    )}
                    <div className="mt-2 text-xs text-[#2b4c30] font-medium bg-[#eeece3] p-1.5 rounded">
                      Timing: {rec.bestTimeNow}
                    </div>
                    <p className="text-xs text-[#445646] mt-2 leading-relaxed">{rec.keyGuidance}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#eae4d5] text-[11px] text-[#637564]">
                    <strong>Tip: </strong>{rec.sensoryOrTechnique}
                  </div>
                </div>
              ))}
            </div>

            {/* Pro Tips */}
            {researchData.proTips && researchData.proTips.length > 0 && (
              <div className="pt-3 border-t border-[#eee8db]">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#4d6650] mb-2">
                  Horticultural Pro-Tips for {currentMonth}
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3d503f]">
                  {researchData.proTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#f8f6f0] p-2 rounded-md border border-[#e8e2d4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
