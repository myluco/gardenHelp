# Help My Garden - CrewAI Python Engine

An open-weight, agentic horticultural advisory platform designed to run locally using **Ollama** and **CrewAI**, packaged with **uv**.

---

## 💻 Mac M4 Pro (46GB) Optimization Strategy

Running AI locally on Apple Silicon (M4 Pro with 46GB Unified Memory) can easily cause memory throttling or thermal fan spin if oversized 70B+ models are selected.

To guarantee that the machine is **never taken over** and remains whisper-quiet with over **40 GB of RAM free**:
- **Primary Recommended Model**: `llama3.2:3b` (Footprint: ~2.2 GB VRAM, 120+ tokens/sec, near-zero CPU/GPU strain).
- **Alternative High-Reasoning Model**: `qwen2.5:7b-instruct` or `mistral:7b` (Footprint: ~5.1 GB VRAM, leaving >40 GB free).
- Context window is locked to `4096` tokens to prevent memory leaks during multi-agent turns.

---

## 🚀 Quickstart with `uv`

### 1. Install & Prepare Ollama
```bash
# Install Ollama (if not already installed)
brew install ollama

# Pull the lightweight model (takes under 1 minute)
ollama pull llama3.2:3b

# Ensure Ollama daemon is running
ollama serve
```

### 2. Setup Python Environment with `uv`
```bash
# Navigate to the Python module
cd help_my_garden/src/help_my_garden

# Install dependencies in a virtual environment
uv sync
```

### 3. Run the Crew CLI
```bash
# Run advisory for a specific address and plant
uv run help-my-garden --address "Asheville, NC" --plant "Heirloom Tomato"

# Or inspect an English Climbing Rose in Portland
uv run help-my-garden --address "Portland, OR" --plant "English Rose" --model "ollama/llama3.2:3b"
```

### 4. Run the API Server
```bash
uv run garden-api
# Server listens on http://localhost:8000 (CORS enabled for Vite UI)
```

---

## 🌿 Agents & Responsibilities

1. **`garden_planner_agent`**: Resolves climate zone, first/last frost dates, and groups planting options by **Full Sun**, **Part Shade**, and **Full Shade**.
2. **`pruning_specialist`**: Dictates whether pruning is needed, frequency, exact calendar window, and branch cutting techniques.
3. **`soil_fertility_expert`**: Balances N-P-K nutrient profiles, organic amendments, compost tea, and seasonal cutoff dates.
4. **`pest_disease_sentinel`**: IPM strategy, biological sprays (BT, Neem oil, sulfur, insecticidal soap), target pests, and pollinator-safe spray hours.
5. **`harvest_storage_curator`**: Sensory readiness criteria (e.g. "blushing" breaker stage for tomatoes, stem release, aroma) + storage protocols (darkness, curing, root cellar temperature & humidity).
6. **`propagation_master`**: Pre-treatments (scarification, soaking, stratification durations), soil germination temp range, photoblastic light requirements, seed planting depth, and average sprouting days.
