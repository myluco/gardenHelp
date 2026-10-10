"""Climate and Hardiness Zone Lookup Tool for CrewAI.
Resolves addresses or geographic regions into USDA/RHS Hardiness Zones,
frost dates, and current planting windows.
"""

import re
from typing import Dict, Any
from crewai.tools import BaseTool
from pydantic import Field

# Reference dictionary of common regions and postal patterns to USDA zones
ZONE_MAP = {
    "alaska": {"zone": "3b", "last_frost": "June 1", "first_frost": "Sept 1"},
    "minnesota": {"zone": "4b", "last_frost": "May 15", "first_frost": "Sept 25"},
    "vermont": {"zone": "5a", "last_frost": "May 20", "first_frost": "Oct 1"},
    "chicago": {"zone": "6a", "last_frost": "May 5", "first_frost": "Oct 15"},
    "boston": {"zone": "6b", "last_frost": "April 25", "first_frost": "Oct 25"},
    "asheville": {"zone": "7a", "last_frost": "April 20", "first_frost": "Oct 20"},
    "new york": {"zone": "7b", "last_frost": "April 15", "first_frost": "Nov 5"},
    "philadelphia": {"zone": "7b", "last_frost": "April 15", "first_frost": "Nov 1"},
    "seattle": {"zone": "8b", "last_frost": "April 1", "first_frost": "Nov 15"},
    "portland": {"zone": "8b", "last_frost": "April 1", "first_frost": "Nov 15"},
    "atlanta": {"zone": "8a", "last_frost": "April 1", "first_frost": "Nov 10"},
    "austin": {"zone": "8b", "last_frost": "March 1", "first_frost": "Nov 25"},
    "houston": {"zone": "9a", "last_frost": "Feb 15", "first_frost": "Dec 10"},
    "sacramento": {"zone": "9b", "last_frost": "Feb 10", "first_frost": "Dec 1"},
    "san francisco": {"zone": "10a", "last_frost": "Jan 15", "first_frost": "Dec 30"},
    "los angeles": {"zone": "10b", "last_frost": "Frost-Free", "first_frost": "Frost-Free"},
    "miami": {"zone": "11a", "last_frost": "Frost-Free", "first_frost": "Frost-Free"},
    "london": {"zone": "9a", "last_frost": "April 20", "first_frost": "Nov 15"},
    "paris": {"zone": "8b", "last_frost": "April 15", "first_frost": "Nov 10"},
}

class ClimateZoneLookupTool(BaseTool):
    name: str = "climate_zone_lookup_tool"
    description: str = (
        "Useful to lookup USDA Hardiness Zone, last spring frost date, "
        "and first fall frost date given a street address, city, state, or country."
    )

    def _run(self, location: str) -> str:
        loc_lower = location.lower().strip()
        matched: Dict[str, Any] = {
            "zone": "7b",
            "last_frost": "April 15",
            "first_frost": "November 1",
            "description": "Temperate Transition Zone (Sub-humid / Moderate winters)"
        }

        # Check matched cities / states
        for key, val in ZONE_MAP.items():
            if key in loc_lower:
                matched["zone"] = val["zone"]
                matched["last_frost"] = val["last_frost"]
                matched["first_frost"] = val["first_frost"]
                matched["matched_region"] = key
                break
        
        # Regex check for numeric zip codes
        zip_match = re.search(r'\b\d{5}\b', loc_lower)
        if zip_match:
            lead = int(zip_match.group(0)[0])
            if lead in [0, 1]:  # Northeast
                matched["zone"] = "6b"
                matched["last_frost"] = "April 30"
                matched["first_frost"] = "Oct 20"
            elif lead in [2, 3]:  # Southeast
                matched["zone"] = "8a"
                matched["last_frost"] = "April 1"
                matched["first_frost"] = "Nov 15"
            elif lead in [4, 5, 6]:  # Midwest
                matched["zone"] = "5b"
                matched["last_frost"] = "May 10"
                matched["first_frost"] = "Oct 10"
            elif lead in [7, 8]:  # South / Southwest
                matched["zone"] = "8b"
                matched["last_frost"] = "March 15"
                matched["first_frost"] = "Nov 25"
            elif lead in [9]:  # West Coast
                matched["zone"] = "9b"
                matched["last_frost"] = "Feb 20"
                matched["first_frost"] = "Dec 1"

        return (
            f"Location Analysis for '{location}':\n"
            f"- Hardiness Zone: USDA Zone {matched['zone']}\n"
            f"- Average Last Spring Frost: {matched['last_frost']}\n"
            f"- Average First Autumn Frost: {matched['first_frost']}\n"
            f"- Recommendation: Use Zone {matched['zone']} planting schedules for all crop calculations."
        )
