import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, RefreshCw, Cpu, Server } from 'lucide-react';
import { checkOllamaConnection } from '../utils/ollamaClient';

interface OllamaSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  baseUrl: string;
  setBaseUrl: (url: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  availableModels: string[];
  setAvailableModels: (models: string[]) => void;
}

export const OllamaSettingsModal: React.FC<OllamaSettingsModalProps> = ({
  isOpen,
  onClose,
  baseUrl,
  setBaseUrl,
  selectedModel,
  setSelectedModel,
  isConnected,
  setIsConnected,
  availableModels,
  setAvailableModels,
}) => {
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const testConnection = async () => {
    setTesting(true);
    setTestResult(null);
    const result = await checkOllamaConnection(baseUrl);
    setIsConnected(result.connected);
    if (result.connected) {
      setAvailableModels(result.models);
      setTestResult(`Success! Found ${result.models.length} model(s) on ${baseUrl}`);
    } else {
      setTestResult(`Could not reach Ollama: ${result.error || 'Connection failed'}`);
    }
    setTesting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#faf8f5] w-full max-w-xl rounded-2xl border border-[#ded8cb] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#253f2c] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-emerald-300" />
            <div>
              <h3 className="font-serif text-xl font-bold">Ollama Local LLM Configuration</h3>
              <p className="text-xs text-[#b8ccbb]">
                Run open-weight models locally on Mac M4 Pro (46GB)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-[#233525]">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4d6650] mb-1">
              Ollama Daemon URL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="http://localhost:11434"
                className="flex-1 px-3 py-2 bg-white border border-[#d2cbba] rounded-lg font-mono text-xs text-[#1e3323] outline-none"
              />
              <button
                type="button"
                onClick={testConnection}
                disabled={testing}
                className="px-4 py-2 bg-[#2d4a34] hover:bg-[#203626] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
                <span>Test Link</span>
              </button>
            </div>
            {testResult && (
              <p className={`mt-1.5 text-xs ${isConnected ? 'text-[#1c5f2d]' : 'text-[#87381b]'}`}>
                {testResult}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4d6650] mb-1">
              Selected Open-Weight Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#d2cbba] rounded-lg text-xs font-mono text-[#1e3323] outline-none"
            >
              <option value="llama3.2:3b">llama3.2:3b (Recommended for Mac M4 Pro · ~2.2 GB VRAM)</option>
              <option value="qwen2.5:7b-instruct">qwen2.5:7b-instruct (~5.1 GB VRAM)</option>
              <option value="mistral:7b">mistral:7b (~4.8 GB VRAM)</option>
              {availableModels.map((m) => (
                <option key={m} value={m}>
                  {m} (Installed on local machine)
                </option>
              ))}
            </select>
            <p className="text-[11px] text-[#697969] mt-1">
              <strong>Mac M4 Pro Tip:</strong> The 3B model is recommended because it runs at 120+ tokens/sec, leaves 42GB+ RAM free for macOS, and keeps your Mac completely silent.
            </p>
          </div>

          <div className="bg-[#f2efe6] p-4 rounded-xl border border-[#ded5c2] space-y-2">
            <h4 className="font-semibold text-xs text-[#283d2a]">
              Need to start Ollama in your Terminal?
            </h4>
            <div className="bg-[#1f2820] text-[#e3ece4] font-mono text-xs p-3 rounded-lg">
              <code>
                # Pull the lightweight model:<br />
                ollama pull llama3.2:3b<br /><br />
                # Start Ollama with open origins for browser access:<br />
                OLLAMA_ORIGINS="*" ollama serve
              </code>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f4f0e7] border-t border-[#ded6c5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2d4a34] hover:bg-[#223927] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
