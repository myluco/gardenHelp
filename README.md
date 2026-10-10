# Help My Garden 🌸

> An intelligent, open-weight horticultural advisory platform and romantic garden companion.
> Powered by local CrewAI agents and Ollama (lightweight `llama3.2:3b` / `qwen2.5:7b`), designed to run seamlessly on Apple Silicon (Mac M4 Pro 46GB) without resource strain.

---

## 🌻 Overview

**Help My Garden** guides home gardeners and romantic horticulturists in answering seven essential seasonal questions for their specific location and microclimate:

1. **✂️ What to be Pruned**: Exact pruning frequency, seasonal calendar window, tools, and branch anatomy cutting guides.
2. **🧪 What to be Fertilized**: N-P-K profiles, organic soil amendments, compost tea, and feeding frequency.
3. **🐛 What to be Sprayed**: Integrated pest management (IPM), target pests, safe organic sprays (BT, Neem, sulfur), and safe hours to protect pollinators.
4. **🌱 What to be Planted**: Curated for your hardiness zone, strictly divided into **Full Sun**, **Part Shade**, and **Full Shade** categories, highlighting the "Best of the Best" planting windows.
5. **🍅 What to be Harvested**: Sensory readiness cues (e.g., the "blushing" breaker stage for tomatoes, melon slip test, fingernail rind test, scent).
6. **📦 What to be Stored**: Curing requirements, light/dark conditions, cellar temperatures (45-55°F), humidity levels, and preservation tips.
7. **🌰 What can be Started from Seed**: Pre-treatment protocols (soaking, scarification, cold stratification durations), soil germination temperature ranges, light vs. darkness needs, planting depth, and average sprouting days.

---

## 🗂️ Project Structure

```
help_my_garden/
├── README.md                           # Main architecture documentation
├── src/
│   ├── help_my_garden/                 # Python CrewAI engine with uv
│   │   ├── config/
│   │   │   ├── agents.yaml             # Specialized agent roles & goals
│   │   │   └── tasks.yaml              # Structured 7-category gardening tasks
│   │   ├── tools/
│   │   │   ├── climate_tool.py         # Hardiness zone & frost date resolver
│   │   │   └── botanical_tools.py      # Botanical parameters & reference data
│   │   ├── crew.py                     # CrewAI orchestrator for local Ollama
│   │   ├── main.py                     # CLI entry point (uv run help-my-garden)
│   │   ├── server.py                   # FastAPI bridge server
│   │   ├── pyproject.toml              # uv project file
│   │   └── README.md                   # Python setup & Mac M4 Pro guide
│   │
│   ├── assets/
│   │   └── images/                     # Romantic garden & helping hand artwork
│   ├── components/                     # Modular React components
│   ├── data/                           # Comprehensive botanical & zone dataset
│   ├── pages/                          # Primary view layouts
│   └── utils/                          # Geocoding, Ollama client, weather helpers
│
└── ui/                                 # Dedicated UI package structure
    ├── package.json
    ├── vite.config.js
    ├── README.md
    └── src/
        ├── components/
        ├── pages/
        ├── utils/
        ├── index.html
        └── App.jsx
```

---

## 💻 Mac M4 Pro (46GB) Optimization

The system defaults to `llama3.2:3b` with a 4K context window:
- **Memory Footprint**: ~2.2 GB VRAM
- **Free System RAM**: >40 GB retained on 46GB M4 Pro
- **Performance**: Instantaneous generation, 120+ tokens/sec, no CPU thermal throttle.

---

## 🚀 Running the Project

### Python Engine (uv)
```bash
cd src/help_my_garden
uv sync
uv run help-my-garden --address "Asheville, NC" --plant "Heirloom Tomato"
```

### React Web Interface
```bash
npm install
npm run dev
# Browse to http://localhost:3000
```
