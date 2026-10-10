"""FastAPI bridge server connecting React UI to Help My Garden CrewAI agents."""

import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from help_my_garden.crew import HelpMyGardenCrew
from help_my_garden.tools.climate_tool import ClimateZoneLookupTool

app = FastAPI(
    title="Help My Garden API",
    description="Local CrewAI horticultural advisory engine powered by Ollama",
    version="0.1.0"
)

# Enable CORS for local Vite development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

climate_tool = ClimateZoneLookupTool()

class GardenRequest(BaseModel):
    address: str
    plant: str = "Heirloom Tomato"
    model: str = "ollama/llama3.2:3b"

class ZoneRequest(BaseModel):
    address: str

@app.get("/api/health")
def health():
    return {
        "status": "online",
        "service": "Help My Garden CrewAI Backend",
        "recommended_model": "llama3.2:3b (Mac M4 Pro optimized)"
    }

@app.post("/api/climate/zone")
def get_zone(payload: ZoneRequest):
    result = climate_tool._run(payload.address)
    return {"address": payload.address, "climate_summary": result}

@app.post("/api/crew/advise")
def run_crew(payload: GardenRequest):
    try:
        crew = HelpMyGardenCrew(model_name=payload.model)
        result = crew.kickoff(location=payload.address, plant_name=payload.plant)
        return {
            "status": "success",
            "address": payload.address,
            "plant": payload.plant,
            "model": payload.model,
            "output": str(result)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def start():
    port = int(os.getenv("GARDEN_API_PORT", 8000))
    uvicorn.run("help_my_garden.server:app", host="0.0.0.0", port=port, reload=True)

if __name__ == "__main__":
    start()
