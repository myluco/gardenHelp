"""CLI runner for Help My Garden Crew."""

import argparse
import sys
from help_my_garden.crew import HelpMyGardenCrew

def run():
    parser = argparse.ArgumentParser(
        description="Help My Garden - Open-weight local CrewAI horticultural advisory engine"
    )
    parser.add_argument(
        "--address", "-a",
        type=str,
        default="Asheville, NC",
        help="Address or geographic location of the garden (e.g. '742 Evergreen Terrace, Springfield' or 'Portland, OR')"
    )
    parser.add_argument(
        "--plant", "-p",
        type=str,
        default="Heirloom Tomato",
        help="Specific plant to inspect (e.g. 'Heirloom Tomato', 'English Rose', 'Lavender', 'Hardneck Garlic')"
    )
    parser.add_argument(
        "--model", "-m",
        type=str,
        default="ollama/llama3.2:3b",
        help="Ollama model string (default: ollama/llama3.2:3b for Mac M4 Pro)"
    )

    args = parser.parse_args()

    print("=" * 60)
    print("🌿 HELP MY GARDEN - CrewAI Local Horticultural Advisory")
    print("=" * 60)
    print(f"📍 Location: {args.address}")
    print(f"🌱 Plant:    {args.plant}")
    print(f"🤖 LLM:      {args.model} via Ollama")
    print("-" * 60)

    crew_instance = HelpMyGardenCrew(model_name=args.model)
    try:
        result = crew_instance.kickoff(location=args.address, plant_name=args.plant)
        print("\n✨ Crew Execution Completed Successfully!\n")
        print(result)
    except Exception as e:
        print(f"\n⚠️ Crew Execution Notice: {e}", file=sys.stderr)
        print("\nTip: Ensure Ollama is running (`ollama serve` and `ollama pull llama3.2:3b`).")

if __name__ == "__main__":
    run()
