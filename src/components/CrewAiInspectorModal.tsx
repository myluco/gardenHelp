import React, { useState } from 'react';
import { X, Cpu, Terminal, ShieldCheck, FileCode, Check, Copy } from 'lucide-react';

interface CrewAiInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CrewAiInspectorModal: React.FC<CrewAiInspectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'tasks' | 'hardware' | 'uv'>('hardware');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#faf8f5] w-full max-w-4xl rounded-2xl border border-[#ded8cb] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#253f2c] text-[#f7f5ef] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Cpu className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight">
                CrewAI Architecture & Local Ollama Harness
              </h2>
              <p className="text-xs text-[#b8ccbb]">
                Open-weight agent orchestration tailored for Apple Silicon (Mac M4 Pro 46GB)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-[#eeece4] border-b border-[#ddd6c7] p-1.5 overflow-x-auto">
          {[
            { id: 'hardware' as const, label: '💻 Mac M4 Pro (46GB) Safety Profile' },
            { id: 'agents' as const, label: '🤖 CrewAI Agents (6)' },
            { id: 'tasks' as const, label: '📋 Tasks YAML (7 Categories)' },
            { id: 'uv' as const, label: '⚡ uv & CLI Execution' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#27432e] text-white shadow-xs'
                  : 'text-[#445646] hover:text-[#1e3020] hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm text-[#243626]">
          {/* 1. HARDWARE SAFETY */}
          {activeTab === 'hardware' && (
            <div className="space-y-4">
              <div className="bg-[#f0f6f2] border border-[#cbe4d2] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1f4e2b] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#2b6d3c]" />
                  <span>Mac M4 Pro (46 GB Unified Memory) Resource Allocation</span>
                </div>
                <p className="text-xs text-[#38593f] mt-1.5 leading-relaxed">
                  To prevent Ollama and CrewAI from taking over your Mac, the system uses lightweight, ultra-efficient open-weight models (<strong>llama3.2:3b</strong> or <strong>qwen2.5:7b-instruct</strong>) with constrained context windows (4096 tokens).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-xl border border-[#ded8cb]">
                  <span className="text-xs font-semibold text-[#5a6e5b] block">LLM VRAM Footprint</span>
                  <span className="font-serif text-2xl font-bold text-[#1d3321] block mt-1">~2.2 GB</span>
                  <span className="text-[11px] text-[#6d7e6e] mt-1 block">
                    Under 5% of total 46 GB capacity
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ded8cb]">
                  <span className="text-xs font-semibold text-[#5a6e5b] block">Free Memory for System</span>
                  <span className="font-serif text-2xl font-bold text-[#204a29] block mt-1">&gt; 42 GB</span>
                  <span className="text-[11px] text-[#6d7e6e] mt-1 block">
                    Whisper-quiet fans, no thermal throttling
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ded8cb]">
                  <span className="text-xs font-semibold text-[#5a6e5b] block">Inference Speed</span>
                  <span className="font-serif text-2xl font-bold text-[#1d3321] block mt-1">125+ t/s</span>
                  <span className="text-[11px] text-[#6d7e6e] mt-1 block">
                    M4 Neural Engine & GPU accelerated
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#ded8cb] space-y-2">
                <h4 className="font-semibold text-xs text-[#283d2a] uppercase tracking-wider">
                  Recommended Ollama Configuration
                </h4>
                <div className="bg-[#1f2820] text-[#e3ece4] font-mono text-xs p-3 rounded-lg overflow-x-auto">
                  <code>
                    export OLLAMA_NUM_PARALLEL=2<br />
                    export OLLAMA_KEEP_ALIVE=5m<br />
                    ollama pull llama3.2:3b<br />
                    ollama serve
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* 2. AGENTS */}
          {activeTab === 'agents' && (
            <div className="space-y-3">
              {[
                { name: 'garden_planner_agent', role: 'Master Horticultural Orchestrator', goal: 'Decodes hardiness zones, frost dates, and classifies plants into Full Sun, Part Shade, and Full Shade.' },
                { name: 'pruning_specialist', role: 'Master Arborist & Vine Pruning Expert', goal: 'Determines if pruning is needed, exact frequency, season, cutting angle, and sanitizer rules.' },
                { name: 'soil_fertility_expert', role: 'Agronomist & Organic Soil Nutritionist', goal: 'Prescribes N-P-K ratios, compost tea formulas, application cadences, and seasonal cut-off dates.' },
                { name: 'pest_disease_sentinel', role: 'IPM & Organic Spray Specialist', goal: 'Diagnoses specific pests and fungal blights, schedules biological sprays (BT, Neem, Sulfur), and safeguards pollinators.' },
                { name: 'harvest_storage_curator', role: 'Post-Harvest Horticulturalist', goal: 'Identifies sensory ripeness cues (blushing stage, aroma, slip test) and cellar/dark storage protocols.' },
                { name: 'propagation_master', role: 'Seed Germination & Stratification Biologist', goal: 'Details pre-treatments, germination soil temperature, light needs, planting depth, and average sprouting days.' },
              ].map((agent) => (
                <div key={agent.name} className="bg-white p-4 rounded-xl border border-[#ded8cb]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#23452b]">{agent.name}</span>
                    <span className="text-[11px] font-semibold text-[#6a7c6c]">{agent.role}</span>
                  </div>
                  <p className="text-xs text-[#415343] mt-1.5 leading-relaxed">
                    <strong>Goal: </strong>{agent.goal}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 3. TASKS */}
          {activeTab === 'tasks' && (
            <div className="space-y-3">
              <p className="text-xs text-[#526353]">
                Tasks defined in <code className="font-mono bg-[#eee8db] px-1.5 py-0.5 rounded">src/help_my_garden/config/tasks.yaml</code> covering all 7 categories:
              </p>
              <div className="bg-[#1f2820] text-[#dce7dd] font-mono text-xs p-4 rounded-xl overflow-x-auto space-y-2 max-h-96">
                <pre>{`planting_recommendation_task:
  agent: garden_planner_agent
  goal: Classify by Full Sun, Part Shade, Shade + Best-of-best time

pruning_assessment_task:
  agent: pruning_specialist
  goal: Suggest if pruned, how often, best time & cutting angle

fertilization_schedule_task:
  agent: soil_fertility_expert
  goal: Prescribe N-P-K, organic compost & frequency

pest_and_spray_plan_task:
  agent: pest_disease_sentinel
  goal: Identify pests & prescribe safe organic sprays

harvest_evaluation_task:
  agent: harvest_storage_curator
  goal: Sensory cues, blushing stage, skin sheen & ease of detachment

storage_protocol_task:
  agent: harvest_storage_curator
  goal: Complete darkness, curing, temperature & humidity

seed_starting_guide_task:
  agent: propagation_master
  goal: Pre-treatment duration, soil temp, light, depth & sprout days`}</pre>
              </div>
            </div>
          )}

          {/* 4. UV CLI */}
          {activeTab === 'uv' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-[#ded8cb]">
                <h4 className="font-semibold text-xs text-[#283d2a] uppercase tracking-wider mb-2">
                  Running Locally with uv (Fast Python Package Manager)
                </h4>
                <div className="relative">
                  <div className="bg-[#1f2820] text-[#e3ece4] font-mono text-xs p-4 rounded-lg overflow-x-auto">
                    <code>
                      # 1. Enter the Python module<br />
                      cd help_my_garden/src/help_my_garden<br /><br />
                      # 2. Sync dependencies in virtualenv<br />
                      uv sync<br /><br />
                      # 3. Run the Crew CLI with address & plant<br />
                      uv run help-my-garden --address "Asheville, NC" --plant "Heirloom Tomato"<br /><br />
                      # 4. Or start the FastAPI bridge server<br />
                      uv run garden-api
                    </code>
                  </div>
                  <button
                    onClick={() => copyToClipboard('cd help_my_garden/src/help_my_garden\nuv sync\nuv run help-my-garden --address "Asheville, NC" --plant "Heirloom Tomato"')}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Copy command"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
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
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
