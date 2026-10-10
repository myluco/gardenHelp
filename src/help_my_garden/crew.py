"""CrewAI definition for Help My Garden.
Configured for local open-weight inference with Ollama on Mac M4 Pro (46GB).
Default model: llama3.2:3b or qwen2.5:7b-instruct for lightning-fast, cool, quiet execution.
"""

import os
from pathlib import Path
import yaml
from typing import Dict, Any, Optional

from crewai import Agent, Crew, Process, Task, LLM
from help_my_garden.tools.climate_tool import ClimateZoneLookupTool
from help_my_garden.tools.botanical_tools import BotanicalKnowledgeTool

CONFIG_DIR = Path(__file__).parent / "config"

def load_yaml(filename: str) -> Dict[str, Any]:
    with open(CONFIG_DIR / filename, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

class HelpMyGardenCrew:
    """Help My Garden CrewAI Orchestrator."""

    def __init__(
        self,
        model_name: str = "ollama/gemma4:31b-cloud",
        ollama_base_url: str = "http://localhost:11434",
        temperature: float = 0.3
    ):
        self.model_name = os.getenv("GARDEN_LLM_MODEL", model_name)
        self.ollama_base_url = os.getenv("OLLAMA_API_BASE", ollama_base_url)
        self.temperature = temperature
        
        # Configure LLM for Ollama local inference
        # The 3B/7B model uses ~2.5 - 5.5 GB VRAM, leaving >40GB free on Mac M4 Pro 46GB
        self.llm = LLM(
            model=self.model_name,
            base_url=self.ollama_base_url,
            temperature=self.temperature,
            timeout=60.0,
        )

        self.agents_config = load_yaml("agents.yaml")
        self.tasks_config = load_yaml("tasks.yaml")

        self.climate_tool = ClimateZoneLookupTool()
        self.botanical_tool = BotanicalKnowledgeTool()

    def build_agents(self) -> Dict[str, Agent]:
        agents = {}
        for agent_id, cfg in self.agents_config.items():
            tools = []
            if "planner" in agent_id or "climate" in agent_id:
                tools = [self.climate_tool]
            else:
                tools = [self.botanical_tool, self.climate_tool]

            agents[agent_id] = Agent(
                role=cfg["role"],
                goal=cfg["goal"],
                backstory=cfg["backstory"],
                llm=self.llm,
                tools=tools,
                verbose=True,
                memory=False, # Keeps memory overhead ultralight on local machine
                allow_delegation=False
            )
        return agents

    def build_tasks(self, agents: Dict[str, Agent], location: str, plant_name: str) -> list[Task]:
        tasks = []
        for task_id, cfg in self.tasks_config.items():
            agent_key = cfg.get("agent")
            assigned_agent = agents.get(agent_key)
            if not assigned_agent:
                continue
            
            # Format descriptions with location and plant
            desc = cfg["description"].format(
                location=location,
                plant_name=plant_name
            )
            tasks.append(
                Task(
                    description=desc,
                    expected_output=cfg["expected_output"],
                    agent=assigned_agent
                )
            )
        return tasks

    def kickoff(self, location: str, plant_name: str = "Heirloom Tomato") -> Any:
        agents = self.build_agents()
        tasks = self.build_tasks(agents, location, plant_name)

        crew = Crew(
            agents=list(agents.values()),
            tasks=tasks,
            process=Process.sequential,
            verbose=True
        )

        return crew.kickoff(inputs={"location": location, "plant_name": plant_name})
