"""Botanical Knowledge Tool for CrewAI.
Provides reference facts for pruning, fertilizing, spraying, sun requirements,
harvest sensory indicators, storage protocols, and seed propagation.
"""

from crewai.tools import BaseTool

BOTANICAL_SPECIES_INDEX = {
    "tomato": {
        "scientific_name": "Solanum lycopersicum",
        "sun_requirement": "Full Sun (6-8+ hours)",
        "pruning": "Prune suckers on indeterminate varieties weekly; remove lower leaves up to 18 inches to prevent blight.",
        "pruning_frequency": "Every 7-10 days during active vegetative growth",
        "pruning_best_time": "Early morning on dry sunny days during summer",
        "fertilizing": "Balanced 5-10-10 or organic tomato food with calcium to prevent blossom end rot. Avoid excess nitrogen.",
        "fertilizing_frequency": "Every 2-3 weeks once fruit sets",
        "pests_diseases": "Tomato hornworm, aphids, early blight, blossom end rot",
        "spray_solution": "Bacillus thuringiensis (BT) for hornworms; copper fungicide or potassium bicarbonate for blight; neem oil for aphids",
        "spray_frequency": "Preventative every 7-14 days or immediately upon pest sighting, late evening",
        "harvest_readiness": "Wait for 'blushing' stage (breaker phase) where the blossom end turns pink/red and skin has a gentle give with rich tomato aroma.",
        "storage": "Store stem-down at room temperature (60-70°F) away from direct sun. NEVER refrigerate unripened fruit as it destroys volatile flavor enzymes.",
        "seed_pretreatment": "Fermentation or 12-hour warm water soak to break seed coat dormancy.",
        "seed_germination_temp": "75°F - 85°F (24°C - 29°C)",
        "seed_light_need": "Darkness to germinate (cover with 1/4 inch fine seed starting mix)",
        "seed_depth": "1/4 inch (6 mm)",
        "sprouting_days": "5 to 10 days"
    },
    "rose": {
        "scientific_name": "Rosa spp.",
        "sun_requirement": "Full Sun (6+ hours)",
        "pruning": "Hard annual prune to open center (vase shape); cut 1/4 inch above outward-facing bud at 45° angle. Regular deadheading.",
        "pruning_frequency": "Major annual prune in late winter/early spring + weekly deadheading during bloom season",
        "pruning_best_time": "Late winter when forsythia blooms (before bud break)",
        "fertilizing": "Balanced organic rose food (rose tone) with alfalfa meal, bone meal, and Epsom salt (magnesium).",
        "fertilizing_frequency": "Every 4-6 weeks from spring through mid-summer; stop 6 weeks before first frost",
        "pests_diseases": "Black spot, powdery mildew, aphids, Japanese beetles",
        "spray_solution": "Neem oil or sulfur fungicide for black spot/mildew; insecticidal soap for aphids; handpick beetles into soapy water",
        "spray_frequency": "Every 10-14 days after rainfall",
        "harvest_readiness": "Harvest cut blooms in early morning when outer petals begin to unfurl but center remains tight; stem cuts made underwater.",
        "storage": "Recut stems under water, place in cool water with floral preservative in a cool, dimly lit room (38-42°F for conditioning).",
        "seed_pretreatment": "Cold moist stratification in refrigerator (34-40°F) for 60 to 90 days after gentle scarification.",
        "seed_germination_temp": "65°F - 70°F (18°C - 21°C)",
        "seed_light_need": "Lightly covered (requires indirect light)",
        "seed_depth": "1/4 inch (6 mm)",
        "sprouting_days": "20 to 45 days"
    },
    "lavender": {
        "scientific_name": "Lavandula angustifolia",
        "sun_requirement": "Full Sun (8+ hours)",
        "pruning": "Cut back stems by 1/3 after flowering to maintain compact mound; never cut into old woody brown base.",
        "pruning_frequency": "Once or twice a year (after first summer flush and light cleanup in spring)",
        "pruning_best_time": "Late summer immediately after flowering flush",
        "fertilizing": "Minimal! Lavender thrives in lean, low-fertility soils. Top-dress with light compost or bone meal only.",
        "fertilizing_frequency": "Once per year in early spring or none if soil is mineral-rich",
        "pests_diseases": "Root rot (Phytophthora) from overwatering, spittlebugs",
        "spray_solution": "Improve drainage; spittlebugs can be washed off with strong stream of plain water. No harsh chemicals needed.",
        "spray_frequency": "As needed (rarely requires chemical sprays)",
        "harvest_readiness": "Cut flower wands when bottom third of the florets on each spike have opened and color is vibrant, on a dry sunny morning.",
        "storage": "Bundle stems with rubber band and hang upside down in a dark, warm, well-ventilated attic or closet for 10-14 days to preserve essential oils.",
        "seed_pretreatment": "Cold stratification for 30 days in moist paper towel in refrigerator.",
        "seed_germination_temp": "65°F - 75°F (18°C - 24°C)",
        "seed_light_need": "Requires light to germinate (surface sow, gently press into soil)",
        "seed_depth": "Surface sow or barely dust with vermiculite",
        "sprouting_days": "14 to 28 days"
    }
}

class BotanicalKnowledgeTool(BaseTool):
    name: str = "botanical_knowledge_tool"
    description: str = (
        "Lookup specific horticultural parameters for plants: pruning cadence, "
        "fertilizer N-P-K, pest sprays, harvest cues, storage rules, and seed propagation."
    )

    def _run(self, plant_name: str) -> str:
        key = plant_name.lower().strip()
        matched = None
        for k, v in BOTANICAL_SPECIES_INDEX.items():
            if k in key:
                matched = v
                break
        
        if matched:
            return (
                f"Botanical Reference for {plant_name.capitalize()}:\n"
                f"- Sun Requirement: {matched['sun_requirement']}\n"
                f"- Pruning: {matched['pruning']} (Freq: {matched['pruning_frequency']}, Best Time: {matched['pruning_best_time']})\n"
                f"- Fertilizing: {matched['fertilizing']} (Freq: {matched['fertilizing_frequency']})\n"
                f"- Pests & Spray: {matched['pests_diseases']} -> Spray: {matched['spray_solution']} (Freq: {matched['spray_frequency']})\n"
                f"- Harvest Readiness Cues: {matched['harvest_readiness']}\n"
                f"- Storage & Curing: {matched['storage']}\n"
                f"- Seed Starting: Pre-treatment: {matched['seed_pretreatment']} | Temp: {matched['seed_germination_temp']} | "
                f"Light: {matched['seed_light_need']} | Depth: {matched['seed_depth']} | Sprout: {matched['sprouting_days']}"
            )
        
        return (
            f"General botanical guidelines apply for {plant_name}. Consult organic permaculture "
            f"standards for pruning, pest IPM, and seed dormancy."
        )
