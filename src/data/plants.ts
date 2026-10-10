import { PlantData } from '../types/garden';

export const PLANTS_DATA: PlantData[] = [
  {
    id: 'heirloom-tomato',
    name: 'Heirloom Tomato',
    botanicalName: 'Solanum lycopersicum (Brandywine & Cherokee Purple)',
    category: 'Vegetable',
    light: 'full-sun',
    suitableZones: [4, 5, 6, 7, 8, 9, 10],
    bestTimeToPlant: 'Late Spring (2-3 weeks after last frost)',
    imageEmoji: '🍅',
    heroNote: 'The crowning jewel of the summer kitchen garden. Famous for rich umami flavor and aromatic foliage.',
    plantingMonths: [4, 5, 6],
    viableToPlantInOctober: false,
    octoberStatus: '⚠️ DO NOT PLANT IN OCTOBER: Warm-season nightshades cannot survive autumn cold or impending frost. In October, focus strictly on harvesting remaining blushing fruit before frost and clearing spent vines.',
    pruning: {
      needsPruning: true,
      frequency: 'Weekly (every 7 to 10 days during vigorous vegetative growth)',
      bestTime: 'Early morning on dry sunny days to allow cut wounds to callus before evening dampness',
      technique: 'Pinch off suckers (axillary shoots between main stem and leaf branches) when under 3 inches long. For indeterminate varieties, prune lower foliage up to 18 inches off the ground to prevent soil-borne fungal spores from splashing up.',
      toolsNeeded: 'Clean bypass shears or thumbnail pinching',
      warning: 'Never prune determinate (bush) tomatoes heavily, as this directly reduces fruit yield.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Every 2 to 3 weeks once first blossoms set fruit',
      npkRatio: '5-10-10 or 4-6-8 (Low nitrogen, high phosphorus and potassium with bioavailable calcium)',
      organicRecommendation: 'Side-dress with well-rotted compost, bone meal for phosphorus, and crushed eggshell powder or gypsum to prevent blossom end rot.',
      applicationMethod: 'Trench along drip line 6 inches away from stem; water deeply. Avoid wetting leaves with nitrogen-heavy tea.',
      cutoffSeason: 'Stop fertilizing 4 weeks before expected first autumn frost to encourage ripening of existing fruit.'
    },
    spraying: {
      commonPestsAndDiseases: ['Tomato Hornworm', 'Aphids', 'Early & Late Blight', 'Septoria Leaf Spot'],
      recommendedSpray: 'Bacillus thuringiensis (BT) for hornworms; copper soap fungicide or potassium bicarbonate for early blight; organic cold-pressed Neem oil for aphids and whiteflies.',
      sprayFrequency: 'Preventative copper spray every 10-14 days in humid climates; BT immediately when caterpillar frass appears.',
      preventativeTips: 'Mulch heavily with clean straw to create a physical barrier between soil pathogens and foliage. Always water at ground level.',
      pollinatorSafety: 'Apply exclusively at dusk or sunset when bees and pollinators have returned to their hives.'
    },
    planting: {
      sunExposureHours: '6 to 8+ hours of direct sunlight',
      soilPreference: 'Loamy, organically rich soil with pH 6.2 - 6.8',
      spacing: '24 to 36 inches apart; stake or trellis securely',
      primePlantingWindow: 'When soil temperature reliably exceeds 60°F (15°C) and night temperatures stay above 50°F (10°C).',
      companionPlants: ['Sweet Basil', 'French Marigolds', 'Nasturtiums', 'Carrots']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Blushing Stage (Breaker Phase): Blossom end shifts from dull green to rosy-pink or pale gold.',
        'Tactile Sensation: Fruit yields slightly to gentle thumb pressure (neither rock hard nor mushy).',
        'Visual Sheen: Skin transitions from glossy waxy green to a velvety, luminous translucent skin.',
        'Stem Ease: Detaches smoothly with gentle upward bend at the natural stem knuckle (pedicel).'
      ],
      visualSigns: 'Color "blushing" at the blossom end, covering at least 25-50% of fruit skin.',
      tactileSigns: 'Yields with slight elasticity under gentle thumb pressure.',
      aromaSigns: 'Sweet, earthy, warm tomato vine fragrance detectable at 6 inches.',
      harvestWindow: 'July through October until the first killing frost.',
      technique: 'Hold tomato gently, lift upward and twist at the stem joint; or snip with pruning shears leaving the green calyx.'
    },
    storing: {
      lightCondition: 'Cool Ambient Light',
      curingRequired: false,
      idealTemperature: '60°F to 70°F (15°C to 21°C)',
      humidity: '60% relative humidity; airy countertop with good airflow',
      expectedShelfLife: '7 to 14 days',
      storageMethod: 'Place shoulder-down (stem end down) in a single layer on a parchment-lined tray. CRITICAL: Never refrigerate unripened tomatoes; cold below 55°F deactivates aroma-producing enzymes and ruins the texture.'
    },
    seedStarting: {
      preTreatment: 'Fermentation in pulp for 3 days or 12-hour warm chamomile tea soak to degrade germination-inhibiting coat enzymes.',
      preTreatmentDuration: '12 to 24 hours warm soak',
      germinationTempRange: '75°F to 85°F (24°C to 29°C) bottom heat',
      requiresLight: false,
      plantingDepth: '1/4 inch (6 mm) under finely sifted seed starting medium',
      averageSproutingDays: '5 to 8 days',
      directSowVsIndoors: 'Start indoors 6 to 8 weeks before your average last spring frost date.'
    }
  },
  {
    id: 'english-climbing-rose',
    name: 'English Climbing Rose',
    botanicalName: 'Rosa (David Austin "Gertrude Jekyll" & "Eden")',
    category: 'Flower',
    light: 'full-sun',
    suitableZones: [5, 6, 7, 8, 9],
    bestTimeToPlant: 'Early Spring (bare root) or Autumn (container-grown)',
    imageEmoji: '🌹',
    heroNote: 'The heart of a romantic English garden, offering velvety petals, climbing arches, and intoxicating myrrh fragrance.',
    pruning: {
      needsPruning: true,
      frequency: 'Major structural pruning once per year + weekly deadheading of spent blossoms',
      bestTime: 'Late winter to very early spring just as forsythia blooms and leaf buds begin to swell',
      technique: 'Train main canes horizontally along trellis wires to stimulate lateral flowering spurs. Prune side flowering shoots back to 2-3 buds (about 4-6 inches). Cut at a 45-degree angle 1/4 inch above an outward-facing bud. Remove the 4 "D"s: Dead, Dying, Damaged, and Diseased wood.',
      toolsNeeded: 'Sharp bypass pruners, loppers for mature canes, and thorn-resistant leather gauntlets',
      warning: 'Disinfect pruner blades with 70% isopropyl alcohol between bushes to avoid spreading canker.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Every 4 to 6 weeks from first spring leaf-out until midsummer',
      npkRatio: '4-8-4 or balanced 10-10-10 rose formulation with magnesium',
      organicRecommendation: 'Top-dress with composted horse manure, alfalfa meal, bone meal, and 1 tablespoon Epsom salts (magnesium sulfate) per bush.',
      applicationMethod: 'Scratch gently into the drip line soil and cover with a 2-inch hardwood mulch barrier.',
      cutoffSeason: 'Halt all nitrogen 6 weeks before first frost to avoid tender growth entering winter freezing.'
    },
    spraying: {
      commonPestsAndDiseases: ['Black Spot (Diplocarpon rosae)', 'Powdery Mildew', 'Aphids', 'Japanese Beetles'],
      recommendedSpray: 'Copper fungicide or wettable sulfur for black spot; cold-pressed neem oil or horticultural soap for aphids.',
      sprayFrequency: 'Every 10 to 14 days during warm, humid spring weather, immediately reapplied after heavy rains.',
      preventativeTips: 'Avoid overhead sprinkler watering; prune centers open to maximize airflow through the cane canopy.',
      pollinatorSafety: 'Spray exclusively at dusk when petals have closed and beneficial bees have ceased foraging.'
    },
    planting: {
      sunExposureHours: '6+ hours of uninterrupted sunlight for maximum bloom count',
      soilPreference: 'Deep, moisture-retentive, rich clay-loam with pH 6.5',
      spacing: '6 to 8 feet apart against a pergola, wall, or sturdy obelisk',
      primePlantingWindow: 'Dormant bare roots in late winter; potted roses in mild autumn or mid-spring.',
      companionPlants: ['English Lavender', 'Catmint (Nepeta)', 'Foxgloves', 'Salvia Caradonna']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Spiral Petal Looseness: Outer 2-3 guard petals have begun to unfurl while the central heart remains tightly cupped.',
        'Sepal Droop: Calyx sepals have peeled backward down the stem.',
        'Firmness: Bud is soft like a ripe marshmallow when gently squeezed.',
        'Morning Dew: Harvest between 6:00 AM and 9:00 AM when stem turgor pressure is peak.'
      ],
      visualSigns: 'Bud is one-third open with color fully saturated.',
      tactileSigns: 'Sepals fully reflexed, bud spongy and yielding.',
      aromaSigns: 'Heirloom Damask or old-rose perfume intensely noticeable.',
      harvestWindow: 'Flush cycles from late spring through late autumn.',
      technique: 'Snip stem at a 45-degree angle underwater or recut immediately in a clean bucket of tepid water.'
    },
    storing: {
      lightCondition: 'Cool Ambient Light',
      curingRequired: false,
      idealTemperature: '38°F to 42°F (3°C to 5°C) for vase conditioning',
      humidity: 'High ambient humidity with fresh clean water',
      expectedShelfLife: '7 to 10 days in vase',
      storageMethod: 'Strip foliage from lower two-thirds of stems; add floral nutrient (citric acid + sugar) to water; keep away from ripening fruit bowl (ethylene gas).'
    },
    seedStarting: {
      preTreatment: 'Scarify hip seeds gently with fine-grit sandpaper, then cold-stratify in moist perlite inside a sealed bag in refrigerator (36-40°F) for 60 to 90 days.',
      preTreatmentDuration: '60 to 90 days cold moist stratification',
      germinationTempRange: '65°F to 70°F (18°C to 21°C)',
      requiresLight: true,
      plantingDepth: '1/4 inch (6 mm) deep',
      averageSproutingDays: '21 to 45 days after stratification',
      directSowVsIndoors: 'Sow in protected seed trays indoors under gentle grow lights.'
    }
  },
  {
    id: 'french-lavender',
    name: 'French Lavender',
    botanicalName: 'Lavandula stoechas / Lavandula angustifolia',
    category: 'Herb',
    light: 'full-sun',
    suitableZones: [5, 6, 7, 8, 9, 10],
    bestTimeToPlant: 'Mid to Late Spring after all frost hazard passes',
    imageEmoji: '🪻',
    heroNote: 'Sun-worshipping Mediterranean perennial renowned for silvery foliage, bee-friendly flower wands, and calming aroma.',
    pruning: {
      needsPruning: true,
      frequency: 'Once or twice annually (after initial summer flush, with light shape-up in spring)',
      bestTime: 'Immediately after the main summer bloom flush has faded',
      technique: 'Shear back flowering stems plus 1 inch of new green leafy growth into a rounded mound. CRITICAL RULE: Never cut down into the old, woody, leafless gray-brown wood, as old wood lacks dormant buds and cannot regenerate.',
      toolsNeeded: 'Sharp hedge shears or hand pruners',
      warning: 'Do not prune in late autumn, as new tender shoots will freeze and kill the crown during winter.'
    },
    fertilizing: {
      needsFertilizer: false,
      frequency: 'Extremely minimal; once per year at most in early spring',
      npkRatio: 'Low fertility (2-4-2) or simply crushed oyster shell / lime',
      organicRecommendation: 'A modest handful of bone meal and coarse compost or horticultural gravel.',
      applicationMethod: 'Broadcast lightly around the drip zone; avoid high nitrogen which causes leggy, scentless growth.',
      cutoffSeason: 'No feeding past May.'
    },
    spraying: {
      commonPestsAndDiseases: ['Root Rot (Phytophthora)', 'Spittlebugs', 'Whiteflies'],
      recommendedSpray: 'Lavender rarely suffers insect damage due to essential oils. For spittlebugs, blast off with garden hose; no chemical spray is recommended.',
      sprayFrequency: 'As needed; avoid moisture retaining sprays.',
      preventativeTips: 'Plant on mounds or gravel beds. Excellent drainage is life or death for lavender.',
      pollinatorSafety: 'Never spray blooming lavender; it is a primary sanctuary for honeybees and bumblebees.'
    },
    planting: {
      sunExposureHours: '8+ hours of intense, baking sun',
      soilPreference: 'Lean, gritty, sandy or rocky alkaline soil (pH 7.0 - 8.0) with rapid drainage',
      spacing: '18 to 24 inches apart',
      primePlantingWindow: 'Spring after soil warms to 55°F (13°C).',
      companionPlants: ['Roses', 'Rosemary', 'Thyme', 'Echinacea']
    },
    harvesting: {
      sensoryReadinessCues: [
        'One-Third Bloom Rule: Bottom 3 to 4 florets on each floral spike have opened while top buds are tight and deeply colored.',
        'Morning Essential Oil Peak: Cut right after morning dew evaporates on a dry sunny morning.',
        'Stem Snap: Stems are stiff and hold their posture without drooping.'
      ],
      visualSigns: 'Rich violet-blue spikes with lowest florets unfurled.',
      tactileSigns: 'Dry, firm stems, petals bursting with essential oil when brushed.',
      aromaSigns: 'Sweet, floral-camphoric aroma released upon the slightest touch.',
      harvestWindow: 'June through August.',
      technique: 'Gather stems in small bunches and cut cleanly 2 inches above the woody foliage mound.'
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: true,
      curingDetails: 'Bundle in groups of 20-30 stems secured with an elastic band; hang upside down in a dark, warm, well-ventilated dry room (attic or closet) for 10-14 days.',
      idealTemperature: '65°F to 75°F (18°C to 24°C)',
      humidity: 'Under 40% humidity (dry air preserves purple color)',
      expectedShelfLife: '1 to 2 years for dried culinary or sachet use',
      storageMethod: 'Once brittle, store whole flower wands or stripped buds in airtight glass mason jars in the dark.'
    },
    seedStarting: {
      preTreatment: 'Cold moist stratification for 30 days in the refrigerator on a damp paper towel or vermiculite.',
      preTreatmentDuration: '30 days cold moist stratification',
      germinationTempRange: '65°F to 75°F (18°C to 24°C)',
      requiresLight: true,
      plantingDepth: 'Surface sow! Press seeds gently into moist seed mix; do not cover with soil.',
      averageSproutingDays: '14 to 28 days (slow and erratic)',
      directSowVsIndoors: 'Start indoors 10 to 12 weeks before final spring frost.'
    }
  },
  {
    id: 'sweet-basil',
    name: 'Sweet Genovese Basil',
    botanicalName: 'Ocimum basilicum',
    category: 'Herb',
    light: 'full-sun',
    suitableZones: [4, 5, 6, 7, 8, 9, 10, 11],
    bestTimeToPlant: 'Late Spring when nighttime temperatures stay above 55°F (13°C)',
    imageEmoji: '🌿',
    heroNote: 'Aromatic culinary soulmate to tomatoes, producing lush emerald leaves rich in spicy-sweet eugenol.',
    pruning: {
      needsPruning: true,
      frequency: 'Every 1 to 2 weeks throughout active growth',
      bestTime: 'Whenever stems reach 6 inches tall or begin developing flower bud spikes',
      technique: 'Pinch the central stem directly above a pair of leaves. This activates two lateral branch nodes, transforming a single stalk into a dense, bushy sphere. Immediately pinch off any flower buds.',
      toolsNeeded: 'Thumb and forefinger or herb snips',
      warning: 'Allowing basil to flower causes the foliage to turn bitter, fibrous, and lose its essential oils.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Every 3 to 4 weeks',
      npkRatio: 'Balanced organic fish emulsion / liquid kelp (5-2-2 or 3-1-2)',
      organicRecommendation: 'Diluted cold-processed fish emulsion or worm casting tea.',
      applicationMethod: 'Drench root zone; avoid splashing sticky liquid on leaves harvested for fresh eating.',
      cutoffSeason: 'Continue until cool autumn arrives.'
    },
    spraying: {
      commonPestsAndDiseases: ['Downy Mildew', 'Japanese Beetles', 'Aphids', 'Slugs'],
      recommendedSpray: 'Potassium bicarbonate or biological Bacillus subtilis for downy mildew; insecticidal soap for aphids.',
      sprayFrequency: 'Weekly preventative during hot, muggy July and August.',
      preventativeTips: 'Provide generous spacing (12 inches) to ensure dry foliage and prevent downy mildew.',
      pollinatorSafety: 'Safe if applied at evening; wash leaves thoroughly before culinary use.'
    },
    planting: {
      sunExposureHours: '6 to 8 hours of sun daily',
      soilPreference: 'Warm, moist, humus-rich soil with pH 6.0 - 7.0',
      spacing: '10 to 12 inches apart',
      primePlantingWindow: 'Two weeks after last spring frost when soil is warm.',
      companionPlants: ['Tomatoes', 'Peppers', 'Bush Beans', 'Marigolds']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Leaf Gloss: Leaves are plump, unwrinkled, deep vibrant green with curved downward margins.',
        'Stem Height: Plant has at least 3 pairs of true leaves.',
        'Aroma Punch: Strong sweet clove-anise scent when lightly stroked.'
      ],
      visualSigns: 'Tender emerald green leaves before floral spike development.',
      tactileSigns: 'Crisp and turgid leaves that snap cleanly when bent.',
      aromaSigns: 'Pungent, sweet herbal scent.',
      harvestWindow: 'June through early October.',
      technique: 'Harvest top leaf clusters with stems rather than plucking individual lower leaves.'
    },
    storing: {
      lightCondition: 'Cool Ambient Light',
      curingRequired: false,
      idealTemperature: '60°F to 68°F (15°C to 20°C)',
      humidity: 'Moderate humidity; treat like fresh-cut flowers',
      expectedShelfLife: '7 to 10 days at room temperature (or 6 months frozen in olive oil)',
      storageMethod: 'Trim stem ends and stand bouquets upright in a glass of water on the kitchen counter away from direct sun. NEVER refrigerate raw basil leaves, as cold temperatures turn them pitch black within hours.'
    },
    seedStarting: {
      preTreatment: 'None required (seeds form a mucilaginous gel when wet).',
      preTreatmentDuration: 'None',
      germinationTempRange: '70°F to 80°F (21°C to 27°C)',
      requiresLight: true,
      plantingDepth: '1/8 inch (3 mm) - barely covered with fine vermiculite',
      averageSproutingDays: '5 to 7 days',
      directSowVsIndoors: 'Start indoors 4 to 6 weeks before last frost or direct sow after frost.'
    }
  },
  {
    id: 'hardneck-garlic',
    name: 'Hardneck Garlic',
    botanicalName: 'Allium sativum var. ophioscorodon',
    category: 'Vegetable',
    light: 'full-sun',
    suitableZones: [3, 4, 5, 6, 7, 8],
    bestTimeToPlant: 'Mid to Late Autumn (3-4 weeks before ground freezes)',
    imageEmoji: '🧄',
    heroNote: 'Winter-hardy aristocrat producing delicious spring scapes and large, easy-to-peel cloves with rich fiery complexity.',
    plantingMonths: [9, 10, 11],
    viableToPlantInOctober: true,
    octoberStatus: '🌟 PRIME TIME TO PLANT IN OCTOBER! Plant individual cloves 2-3 inches deep pointy-end up 3-4 weeks before the ground freezes solid. Roots develop over winter for massive summer heads.',
    pruning: {
      needsPruning: true,
      frequency: 'Once annually in late spring for scape removal',
      bestTime: 'Early summer when flowering scape loops into a complete circle or curl',
      technique: 'Snap or cut the central flower scape right where it emerges from the top leaf axil. Removing the scape diverts all photosynthetic energy down into bulb enlargement (increasing bulb size by 25-30%).',
      toolsNeeded: 'Hand pruners or snap by hand',
      warning: 'Eat the harvested garlic scapes! They are a gourmet spring delicacy sautéed in butter.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Twice: once at autumn planting and once in early spring as green shoots emerge',
      npkRatio: 'High phosphorus/potassium in fall (5-10-10); higher nitrogen in spring (organic blood meal or fish emulsion)',
      organicRecommendation: 'Incorporate generous compost and bone meal into the trench in autumn; top-dress with blood meal in March/April.',
      applicationMethod: 'Side-dress along the rows in early spring before bulb formation starts.',
      cutoffSeason: 'Cease all fertilization completely when scapes emerge in June.'
    },
    spraying: {
      commonPestsAndDiseases: ['Allium Leaf Miner', 'White Rot (Stromatinia cepivora)', 'Thrips'],
      recommendedSpray: 'Spinosad or insecticidal soap for thrips; neem oil for early leaf miners.',
      sprayFrequency: 'Only if pest damage occurs.',
      preventativeTips: 'Rotate allium crops on a 4-year cycle. Never plant garlic where onions or leeks grew previously.',
      pollinatorSafety: 'Garlic scapes do not attract bees before harvest; spray safe.'
    },
    planting: {
      sunExposureHours: '6+ hours full sun',
      soilPreference: 'Loose, crumbly, well-draining sandy loam loaded with compost (pH 6.5 - 7.0)',
      spacing: '6 inches apart in rows 12 inches apart; plant pointy end up 2 inches deep',
      primePlantingWindow: 'October to November (after first light autumn frost).',
      companionPlants: ['Tomatoes', 'Peppers', 'Roses (deters aphids)', 'Strawberries']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Bottom Leaf Browning: Exactly 3 to 4 lower leaves have died and turned brown, while the top 4-5 leaves remain green.',
        'Wrapper Check: Gently brush dirt away from one test bulb; check that cloves feel well-defined and paper wrapper is intact.',
        'Neck Softening: The hard central stem remains rigid but root plate is mature.'
      ],
      visualSigns: 'Lower 3-4 leaves brown and dry; upper leaves still green.',
      tactileSigns: 'Bulb beneath soil feels plump with distinct individual clove ridges.',
      aromaSigns: 'Rich allium perfume.',
      harvestWindow: 'July to early August.',
      technique: 'Loosen soil deeply with a garden fork 6 inches away from stem; gently lift bulb. Do not pull by stem!'
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: true,
      curingDetails: 'Cure unwashed with roots and foliage attached in a dry, dark, well-ventilated space (porch, shed, garage) at 70-80°F for 3 to 4 weeks until roots feel like brush bristles and wrappers are papery.',
      idealTemperature: '50°F to 55°F (10°C to 13°C) with 60% humidity',
      humidity: '55-60% humidity (prevents mold and desiccation)',
      expectedShelfLife: '6 to 9 months',
      storageMethod: 'Trim roots to 1/2 inch, trim stem to 2 inches; store in mesh bags or wire baskets in a cool dark pantry or root cellar. Do NOT refrigerate (chilling triggers premature sprouting).'
    },
    seedStarting: {
      preTreatment: 'Cold vernalization: garlic cloves need 4 to 8 weeks of temperatures below 40°F (4°C) to differentiate into cloves.',
      preTreatmentDuration: 'Natural overwintering in frozen soil or 6 weeks in refrigerator crisper if spring planting',
      germinationTempRange: 'Climatic roots develop at 40°F to 50°F (4°C to 10°C) underground',
      requiresLight: false,
      plantingDepth: '2 to 3 inches deep, pointed tip oriented upwards',
      averageSproutingDays: 'Shoots emerge in spring 14-21 days after soil thaws',
      directSowVsIndoors: 'Direct sow cloves outdoors in autumn.'
    }
  },
  {
    id: 'hydrangea-macrophylla',
    name: 'French Hydrangea (Bigleaf)',
    botanicalName: 'Hydrangea macrophylla ("Endless Summer" & "Nikko Blue")',
    category: 'Shrub',
    light: 'part-shade',
    suitableZones: [5, 6, 7, 8, 9],
    bestTimeToPlant: 'Spring or Early Autumn',
    imageEmoji: '🌸',
    heroNote: 'Romantic cottage garden favorite featuring massive globes of pink or azure blossoms that respond to soil pH.',
    pruning: {
      needsPruning: true,
      frequency: 'Minimal! Only deadhead old blossoms and remove dead winter canes',
      bestTime: 'Mid-summer immediately after flowers fade, or spring only for dead wood',
      technique: 'Cut old faded mophead blossoms back to the first pair of healthy fat buds. WARNING: Bigleaf hydrangeas set next year\'s flower buds in August/September on old wood. Cutting them back in fall or winter will remove next season\'s blooms completely!',
      toolsNeeded: 'Sharp bypass pruners',
      warning: 'Never prune bigleaf hydrangeas down to the ground unless growing a reblooming cultivar.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Once or twice in spring',
      npkRatio: 'Balanced 10-10-10 or 12-4-8; aluminum sulfate for blue blooms (acidic pH < 5.5), garden lime for pink (alkaline pH > 6.5)',
      organicRecommendation: 'Composted oak leaves, pine needle mulch, and cottonseed meal.',
      applicationMethod: 'Spread evenly around perimeter; water deeply.',
      cutoffSeason: 'No fertilizer after July.'
    },
    spraying: {
      commonPestsAndDiseases: ['Powdery Mildew', 'Cercospora Leaf Spot', 'Aphids'],
      recommendedSpray: 'Potassium bicarbonate or neem oil for powdery mildew.',
      sprayFrequency: 'Every 14 days if spotting appears during humid spells.',
      preventativeTips: 'Water exclusively at base in early morning to keep large leaves dry.',
      pollinatorSafety: 'Safe; mophead flowers have sterile outer florets, but fertile lacecaps need evening spray protection.'
    },
    planting: {
      sunExposureHours: 'Part shade: 3 to 5 hours of gentle morning sun with dappled afternoon shade',
      soilPreference: 'Moist, rich, well-draining soil with abundant organic humus',
      spacing: '4 to 6 feet apart',
      primePlantingWindow: 'Spring or early autumn during mild weather.',
      companionPlants: ['Hostas', 'Astilbes', 'Bleeding Hearts', 'Ferns']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Papery Vintage Feel: Cut blooms when petals feel papery and leathery to touch rather than soft and juicy.',
        'Antique Color Transition: Petals begin aging into antique lime green or dusty rose tints.',
        'Turgid Stems: Cut on a cool morning when stems are woody and stiff.'
      ],
      visualSigns: 'Color shifts to vintage muted antique tones.',
      tactileSigns: 'Petals feel dry and parchment-like.',
      aromaSigns: 'Subtle fresh green fragrance.',
      harvestWindow: 'Late summer through autumn for dried arrangements.',
      technique: 'Snip long stems at 45-degree angle; dip stems in boiling water for 30 seconds to dissolve sap before placing in vase.'
    },
    storing: {
      lightCondition: 'Cool Ambient Light',
      curingRequired: true,
      curingDetails: 'Place cut stems in 2 inches of water in a cool room; allow water to naturally evaporate over 2 weeks for forever-dried blooms.',
      idealTemperature: '60°F to 70°F (15°C to 21°C)',
      humidity: 'Low to moderate humidity',
      expectedShelfLife: 'Fresh: 10 days; Dried: several years',
      storageMethod: 'Keep out of direct blazing sunlight to preserve soft pastel hues.'
    },
    seedStarting: {
      preTreatment: 'None required, but most gardeners propagate via soft-wood cuttings in June.',
      preTreatmentDuration: 'None',
      germinationTempRange: '70°F to 75°F (21°C to 24°C)',
      requiresLight: true,
      plantingDepth: 'Surface sow (dust-like seeds)',
      averageSproutingDays: '14 to 21 days',
      directSowVsIndoors: 'Start indoors under dome humidity.'
    }
  },
  {
    id: 'hosta-sieboldiana',
    name: 'Blue Angel Hosta (Plantain Lily)',
    botanicalName: 'Hosta sieboldiana',
    category: 'Flower',
    light: 'full-shade',
    suitableZones: [3, 4, 5, 6, 7, 8, 9],
    bestTimeToPlant: 'Early Spring or Mid Autumn',
    imageEmoji: '🍃',
    heroNote: 'The queen of the shady romantic garden, sporting grand blue-green ribbed leaves and graceful lavender flower scapes.',
    pruning: {
      needsPruning: true,
      frequency: 'Twice a year: snip flower stalks in summer, clean up melted foliage after heavy autumn frost',
      bestTime: 'Late summer for spent flower scapes; late autumn after first hard frost',
      technique: 'Cut spent flower scapes right down to the leaf crown. Once hard frost collapses foliage in November, cut leaves back completely to 1 inch above soil to eliminate slug egg overwintering sites.',
      toolsNeeded: 'Sharp garden shears',
      warning: 'Do not pull wet frosted leaves by hand as you may dislodge the crown.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Once a year in early spring as shoots ("hosta eyes") spear through the soil',
      npkRatio: 'Balanced organic 10-10-10 or rich compost top-dressing',
      organicRecommendation: 'Leaf mold, well-aged cow manure, and composted pine bark.',
      applicationMethod: 'Ring around the crown before leaves unfurl.',
      cutoffSeason: 'No feeding after June.'
    },
    spraying: {
      commonPestsAndDiseases: ['Slugs and Snails', 'Hosta Virus X', 'Deer browsing'],
      recommendedSpray: 'Iron phosphate slug bait (safe for pets and birds); garlic/rosemary deer repellent spray; copper tape barriers.',
      sprayFrequency: 'Every 2-3 weeks for deer repellent or after rain.',
      preventativeTips: 'Beer traps or diatomaceous earth around the perimeter deter slugs effectively.',
      pollinatorSafety: 'Hummingbirds adore hosta blooms; spray repellent only on leaf surfaces.'
    },
    planting: {
      sunExposureHours: 'Full shade to dappled shade (under 3 hours gentle morning sun; zero harsh midday sun)',
      soilPreference: 'Humus-dense, moisture-retentive, rich forest soil (pH 6.5 - 7.0)',
      spacing: '3 to 5 feet apart for giant varieties',
      primePlantingWindow: 'Spring as eyes break ground.',
      companionPlants: ['Bleeding Hearts', 'Japanese Painted Ferns', 'Astilbes', 'Solomon\'s Seal']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Hosta Shoots (Urui delicacy): Harvest young spring rolled spears when 2-4 inches tall before leaves unroll.',
        'Cut Leaf Display: Select fully expanded leaves with intact frosty blue epicuticular wax.',
        'Flower Scapes: Cut when first bottom bells open.'
      ],
      visualSigns: 'Waxy unblemished leaf surfaces.',
      tactileSigns: 'Crisp, succulent stems.',
      aromaSigns: 'Mild sweet floral scent from flowers.',
      harvestWindow: 'Spring through early summer.',
      technique: 'Cut leaf petioles near the crown with clean pruners.'
    },
    storing: {
      lightCondition: 'Cool Ambient Light',
      curingRequired: false,
      idealTemperature: '38°F to 45°F (3°C to 7°C) in floral vase',
      humidity: 'High humidity',
      expectedShelfLife: 'Cut leaves last up to 3 weeks in vase arrangements',
      storageMethod: 'Submerge cut leaf stems in clean water with a drop of bleach.'
    },
    seedStarting: {
      preTreatment: 'Cold stratification for 30 days in moist sand increases germination uniformity.',
      preTreatmentDuration: '30 days cold moist stratification',
      germinationTempRange: '68°F to 75°F (20°C to 24°C)',
      requiresLight: true,
      plantingDepth: '1/8 inch (barely covered with peat mix)',
      averageSproutingDays: '14 to 28 days',
      directSowVsIndoors: 'Sow indoors under grow lights; divisions are far faster.'
    }
  },
  {
    id: 'rainbow-carrots',
    name: 'Heirloom Rainbow Carrots',
    botanicalName: 'Daucus carota subsp. sativus',
    category: 'Vegetable',
    light: 'full-sun',
    suitableZones: [3, 4, 5, 6, 7, 8, 9, 10],
    bestTimeToPlant: 'Early Spring (2-3 weeks before last frost) and Mid-Summer (for autumn harvest)',
    imageEmoji: '🥕',
    heroNote: 'Sweet, crisp heirloom roots in brilliant shades of cosmic purple, solar yellow, and atomic orange.',
    pruning: {
      needsPruning: true,
      frequency: 'Thinning required 2 to 3 times during seedling stage',
      bestTime: 'When carrot seedlings reach 2 inches and 4 inches in height',
      technique: 'Thin seedlings to 2-3 inches apart. Use fine herb snips to snip unwanted tops at soil level rather than pulling, which disturbs fragile companion root hair systems.',
      toolsNeeded: 'Fine point snips or embroidery scissors',
      warning: 'Never leave overcrowded carrots; unthinned carrots become tangled, stunted dwarf roots.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Light feeding once midway through growth',
      npkRatio: 'Low nitrogen, high phosphorus/potassium (2-8-10 or bone meal with greensand)',
      organicRecommendation: 'Aged compost mixed into soil before planting; kelp meal for trace minerals.',
      applicationMethod: 'Scratch lightly between rows.',
      cutoffSeason: 'Stop 6 weeks before harvest.'
    },
    spraying: {
      commonPestsAndDiseases: ['Carrot Rust Fly', 'Wireworms', 'Alternaria Blight'],
      recommendedSpray: 'Beneficial nematodes (Steinernema carpocapsae) drenched in soil for fly larvae; no synthetic spray required.',
      sprayFrequency: 'Apply nematodes in spring and late summer.',
      preventativeTips: 'Erect floating row covers immediately after seeding to physically exclude female carrot rust flies.',
      pollinatorSafety: 'Row covers keep plants protected without harming beneficial pollinators.'
    },
    planting: {
      sunExposureHours: '6+ hours full sun',
      soilPreference: 'Deep, stone-free, loose sandy loam (sifted 12 inches deep) with pH 6.0 - 6.8',
      spacing: '2 to 3 inches apart in rows 10 inches apart',
      primePlantingWindow: '3 weeks before last spring frost; or 10-12 weeks before first autumn freeze.',
      companionPlants: ['Rosemary', 'Sage', 'Leeks', 'Chives (masks scent against rust fly)']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Root Shoulder Diameter: Brush away 1/2 inch of soil at the root base; shoulder should be 3/4 to 1 inch thick.',
        'Foliage Color: Feathered fern tops are lush, dark forest green.',
        'Sweetness Test: Pull one test root after a cool frosty night; cold converts root starches into pure natural sugars.'
      ],
      visualSigns: 'Crown shoulder visible above soil is bright, saturated purple, orange, or gold.',
      tactileSigns: 'Sturdy root resists lateral wiggling.',
      aromaSigns: 'Sweet, earthy carrot perfume from crushed greens.',
      harvestWindow: 'July through December (sweeter after light frosts).',
      technique: 'Water bed deeply the evening prior; loosen soil with a pitchfork alongside the row, grasp greens near root crown, and pull straight up.'
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: false,
      idealTemperature: '32°F to 38°F (0°C to 3°C)',
      humidity: '95% relative humidity (root cellar or crisper)',
      expectedShelfLife: '4 to 6 months',
      storageMethod: 'Twist off carrot greens (leave 1/2 inch stem to prevent nutrient siphoning); do not wash dirt off. Pack unwashed roots in layers of damp sand or sawdust in perforated wooden crates inside a cold, dark cellar.'
    },
    seedStarting: {
      preTreatment: 'Soak seeds in warm water for 12 hours, then rinse and dry on paper towel. Mix with fine dry sand for even broadcasting.',
      preTreatmentDuration: '12 hours soaking',
      germinationTempRange: '55°F to 75°F (13°C to 24°C)',
      requiresLight: false,
      plantingDepth: '1/4 inch (6 mm) deep',
      averageSproutingDays: '14 to 21 days (slow to emerge; keep seedbed consistently damp with a burlap cover)',
      directSowVsIndoors: 'ALWAYS direct sow outdoors. Carrots cannot tolerate root transplant disturbance.'
    }
  },
  {
    id: 'dahlia-pinnata',
    name: 'Romantic Dinnerplate Dahlia',
    botanicalName: 'Dahlia pinnata ("Café au Lait" & "Labyrinth")',
    category: 'Flower',
    light: 'full-sun',
    suitableZones: [7, 8, 9, 10], // lifted as tubers in 3-6
    bestTimeToPlant: 'Late Spring after all frost hazard and soil reaches 60°F (15°C)',
    imageEmoji: '🏵️',
    heroNote: 'Showstopping blooms up to 10 inches across in blush, champagne, and apricot silks that bloom profusely until frost.',
    pruning: {
      needsPruning: true,
      frequency: 'Pinch once at 12-16 inches tall + continuous deadheading',
      bestTime: 'When the young plant is 12 to 16 inches tall with 4-5 sets of true leaves',
      technique: 'Pinch out the central growing stem by 3-4 inches. This triggers 4 to 8 long, sturdy flowering side branches. Disbud secondary side buds on each branch if you want massive "dinnerplate" trophy blooms.',
      toolsNeeded: 'Clean hand pruners',
      warning: 'Failing to pinch leads to a single top-heavy stalk that topples in high winds.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Every 3 to 4 weeks once plants reach 12 inches tall',
      npkRatio: 'Low nitrogen, high phosphorus/potassium (5-10-10 or 0-10-10 liquid kelp/bloom food)',
      organicRecommendation: 'Bone meal, kelp meal, and composted manure mixed in planting hole.',
      applicationMethod: 'Drench soil at drip line.',
      cutoffSeason: 'Stop fertilizing 4 weeks before first fall frost so tubers mature properly.'
    },
    spraying: {
      commonPestsAndDiseases: ['Earwigs', 'Slugs', 'Powdery Mildew', 'Thrips'],
      recommendedSpray: 'Spinosad for earwigs and thrips; potassium bicarbonate for powdery mildew; diatomaceous earth for slugs.',
      sprayFrequency: 'Every 10-14 days as needed.',
      preventativeTips: 'Place organza bags over developing exhibition blooms to physically protect them from hungry bugs.',
      pollinatorSafety: 'Apply sprays late evening after bees depart; avoid spraying open blossoms.'
    },
    planting: {
      sunExposureHours: '6 to 8 hours full sunlight (light afternoon shade in blistering hot Southern climates)',
      soilPreference: 'Rich, well-draining, organically amended loamy soil (pH 6.5 - 7.0)',
      spacing: '18 to 24 inches apart; stake tubers at planting time!',
      primePlantingWindow: 'Spring when soil temperature reaches 60°F (15°C).',
      companionPlants: ['Sweet Alyssum', 'Cosmos', 'Snapdragons', 'Zinnias']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Bloom Openness: Cut when blossom is 3/4 to fully open (unlike roses, dahlias do NOT continue opening after being cut).',
        'Back Petal Freshness: Inspect reverse side of bloom; back petals must feel firm and crisp, not papery or brown.',
        'Morning Harvest: Cut before the heat of the day when stems are deeply hydrated.'
      ],
      visualSigns: 'Full symmetry, back petals fresh and firm.',
      tactileSigns: 'Crisp, velvety petals; firm hollow stem.',
      aromaSigns: 'Faint sweet nectar scent.',
      harvestWindow: 'July through first killing autumn frost.',
      technique: 'Cut deep into the plant right above a leaf node to stimulate longer next-generation cutting stems.'
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: true,
      curingDetails: 'Tuber Winter Storage (Zones 3-7): After first frost blackens foliage, cut stalks to 4 inches, dig clumps gently with a pitchfork, wash off soil, and cure upside down in a warm, dry room for 3 days.',
      idealTemperature: '40°F to 50°F (4°C to 10°C) for tuber winter dormancy',
      humidity: '75-85% humidity (pack in slightly damp vermiculite or peat moss in cardboard boxes)',
      expectedShelfLife: 'Winter dormancy: 6 months; Cut flowers: 5 to 7 days in fresh water',
      storageMethod: 'Check tubers monthly in root cellar; mist if shriveling, discard if rotting.'
    },
    seedStarting: {
      preTreatment: 'None required; or 12-hour warm water soak.',
      preTreatmentDuration: '12 hours',
      germinationTempRange: '70°F to 75°F (21°C to 24°C)',
      requiresLight: false,
      plantingDepth: '1/4 inch deep (6 mm)',
      averageSproutingDays: '5 to 10 days',
      directSowVsIndoors: 'Start indoors 6 to 8 weeks before final spring frost.'
    }
  },
  {
    id: 'winter-butternut-squash',
    name: 'Waltham Butternut Squash',
    botanicalName: 'Cucurbita moschata',
    category: 'Vegetable',
    light: 'full-sun',
    suitableZones: [3, 4, 5, 6, 7, 8, 9, 10],
    bestTimeToPlant: 'Late Spring after soil reaches 70°F (21°C)',
    imageEmoji: '🥣',
    heroNote: 'Rich, nutty, golden heirloom winter squash famed for long winter storage and velvety soups.',
    pruning: {
      needsPruning: true,
      frequency: 'Once in late summer to accelerate fruit ripening',
      bestTime: '4 weeks before expected first autumn frost',
      technique: 'Prune the terminal growing tips of trailing vines and remove any tiny squashes that will not mature before frost. This forces all sap into ripening existing squash.',
      toolsNeeded: 'Hand shears',
      warning: 'Do not remove healthy large fan leaves earlier in the season as they fuel sugar synthesis.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Every 3 weeks until fruit set',
      npkRatio: 'Balanced organic (5-5-5) at planting, shifting to higher potassium (3-5-8) once flowering',
      organicRecommendation: 'Generous compost in the planting mound, fish emulsion, and greensand.',
      applicationMethod: 'Side-dress at base of hills.',
      cutoffSeason: 'Stop fertilizing in mid-August.'
    },
    spraying: {
      commonPestsAndDiseases: ['Squash Vine Borer', 'Squash Bugs', 'Powdery Mildew'],
      recommendedSpray: 'Bacillus thuringiensis (BT) injected into main stems for vine borer larvae; insecticidal soap/neem oil for squash bug nymphs; milk-and-water foliar spray (40% milk, 60% water) for powdery mildew.',
      sprayFrequency: 'Weekly on leaf surfaces during hot humid weather.',
      preventativeTips: 'Place floating row covers over vines until female flowers appear.',
      pollinatorSafety: 'Remove covers once flowers open; squash requires active bees for pollination.'
    },
    planting: {
      sunExposureHours: '6 to 8+ hours full sunlight',
      soilPreference: 'Warm, fertile, well-draining soil loaded with rotted manure (pH 6.0 - 6.8)',
      spacing: 'Hills 6 feet apart; 2 to 3 plants per hill',
      primePlantingWindow: 'Late May to early June when soil is warm.',
      companionPlants: ['Sweet Corn', 'Pole Beans (Three Sisters method)', 'Radishes', 'Borage']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Fingernail Test: Press thumbnail firmly into the squash rind; rind must be rock hard and resist puncture without leaving a dent.',
        'Stem Corking: The vine stem attached to the fruit turns dry, fibrous, woody, and pale tan like cork.',
        'Color Uniformity: Entire skin turns solid matte creamy tan with zero green streaks.',
        'Dull Sheen: Skin loses glossy waxiness and becomes matte.'
      ],
      visualSigns: 'Uniform tan skin with zero green striations; brown corky stem.',
      tactileSigns: 'Rind impenetrable by thumbnail.',
      aromaSigns: 'Rich nutty squash scent.',
      harvestWindow: 'September through October before hard freezing.',
      technique: 'Cut with loppers leaving at least 2 to 3 inches of intact stem handle (fruit without a stem rot quickly in storage).'
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: true,
      curingDetails: 'Cure harvested squash in a warm, sunny, well-ventilated spot (80°F to 85°F with 80% humidity) for 10 to 14 days to harden the skin and convert starches to sugars. Wipe skin with a mild 1:10 vinegar/water solution.',
      idealTemperature: '50°F to 55°F (10°C to 13°C)',
      humidity: '50-60% relative humidity (dry, cool atmosphere prevents rots)',
      expectedShelfLife: '4 to 6 months',
      storageMethod: 'Arrange in single layers on slatted wooden shelves in a cool dark pantry or cellar. Keep from touching each other.'
    },
    seedStarting: {
      preTreatment: 'Soak seeds in warm water for 4 to 8 hours to soften hard seed hull.',
      preTreatmentDuration: '4 to 8 hours',
      germinationTempRange: '70°F to 85°F (21°C to 29°C)',
      requiresLight: false,
      plantingDepth: '1 inch deep (2.5 cm)',
      averageSproutingDays: '5 to 10 days',
      directSowVsIndoors: 'Direct sow outdoors once soil reaches 70°F or start indoors in biodegradable peat pots 3 weeks before last frost.'
    }
  },
  {
    id: 'alpine-strawberry',
    name: 'Alpine Woodland Strawberry',
    botanicalName: 'Fragaria vesca ("Alexandria" & "Yellow Wonder")',
    category: 'Fruit',
    light: 'part-shade',
    suitableZones: [3, 4, 5, 6, 7, 8, 9],
    bestTimeToPlant: 'Early Spring',
    imageEmoji: '🍓',
    heroNote: 'Romantic woodland treasures that yield continuously from June to frost with heavenly concentrated wild perfume.',
    pruning: {
      needsPruning: true,
      frequency: 'Light cleanup twice a year',
      bestTime: 'Early spring to clear dead winter leaves; late autumn cleanup',
      technique: 'Alpine varieties are non-runnering; simply snip away brown, blighted leaves at crown level to stimulate fresh foliage.',
      toolsNeeded: 'Hand snips',
      warning: 'Never bury the central growing crown below soil level.'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Once a month during fruiting season',
      npkRatio: 'Organic 5-5-5 or kelp tea high in potassium',
      organicRecommendation: 'Leaf compost, aged pine needle mulch (acidifies gently), and organic berry fertilizer.',
      applicationMethod: 'Side-dress under mulch.',
      cutoffSeason: 'Stop mid-September.'
    },
    spraying: {
      commonPestsAndDiseases: ['Slugs', 'Birds', 'Gray Mold (Botrytis)'],
      recommendedSpray: 'Iron phosphate slug bait; garlic barrier spray; organic sulfur for powdery mildew.',
      sprayFrequency: 'Preventative during wet rainy weeks.',
      preventativeTips: 'Mulch under plants with clean pine needles or straw to keep ripening berries elevated off moist soil.',
      pollinatorSafety: 'Safe; bees visit flowers daily.'
    },
    planting: {
      sunExposureHours: 'Part shade: 3 to 6 hours of morning sun or dappled light under deciduous fruit trees',
      soilPreference: 'Humus-rich, moisture-retentive, well-draining acidic soil (pH 5.8 - 6.5)',
      spacing: '10 to 12 inches apart as romantic garden path edging',
      primePlantingWindow: 'Spring after heavy ground freezes pass.',
      companionPlants: ['Borage', 'Chives', 'Thyme', 'Blueberries']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Slip Test: Fully ripe berry releases and slips effortlessly into your palm with the gentlest brush.',
        'Aroma Radiance: Intense, tropical cotton-candy aroma wafting from the patch.',
        'Full Color Depth: Vibrant crimson (or pale translucent cream for Yellow Wonder which birds ignore).'
      ],
      visualSigns: 'Color fully uniform without white or green shoulders.',
      tactileSigns: 'Soft, tender, melting consistency.',
      aromaSigns: 'Extremely fragrant wild strawberry perfume.',
      harvestWindow: 'June through October continuously.',
      technique: 'Cup berry between fingers and lift gently; it will detach cleanly without tearing.'
    },
    storing: {
      lightCondition: 'Cool Ambient Light',
      curingRequired: false,
      idealTemperature: '34°F to 38°F (1°C to 3°C)',
      humidity: '85-90% humidity',
      expectedShelfLife: '1 to 2 days fresh (eat straight from the garden!)',
      storageMethod: 'Spread in a single layer on a paper-towel-lined plate in the refrigerator crisper. Do not wash until seconds before consumption.'
    },
    seedStarting: {
      preTreatment: 'Cold stratification in freezer for 2 to 4 weeks breaks seed dormancy.',
      preTreatmentDuration: '14 to 28 days cold stratification',
      germinationTempRange: '65°F to 75°F (18°C to 24°C)',
      requiresLight: true,
      plantingDepth: 'Surface sow! Press into fine seed starting medium; requires light to trigger germination.',
      averageSproutingDays: '14 to 28 days',
      directSowVsIndoors: 'Start indoors 8 to 10 weeks before last spring frost.'
    }
  },
  {
    id: 'english-culinary-spinach',
    name: 'Bloomsdale Heirloom Spinach',
    botanicalName: 'Spinacia oleracea',
    category: 'Vegetable',
    light: 'part-shade',
    suitableZones: [3, 4, 5, 6, 7, 8, 9],
    bestTimeToPlant: 'Very Early Spring (4 weeks before last frost) or Late Summer for winter harvest',
    imageEmoji: '🥬',
    heroNote: 'Classic crinkled savoy leaves of deep forest green, celebrated for supreme iron content and cold-hardiness down to 20°F.',
    plantingMonths: [2, 3, 4, 8, 9, 10],
    viableToPlantInOctober: true,
    octoberStatus: '🌟 EXCELLENT TO PLANT IN OCTOBER! Direct sow seeds in cool autumn soil. Cold temperatures trigger natural sugar accumulation, producing exceptionally sweet leaves through winter and early spring.',
    pruning: {
      needsPruning: true,
      frequency: 'Cut-and-come-again harvesting serves as pruning',
      bestTime: 'Whenever outer leaves reach 3-4 inches in length',
      technique: 'Snip individual outer leaves 1 inch above the crown, leaving the central core intact to produce fresh leaves continuously for 6+ weeks.',
      toolsNeeded: 'Kitchen snips',
      warning: 'Never pull up the entire root system until the plant initiates flowering (bolting).'
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Every 2 to 3 weeks',
      npkRatio: 'High nitrogen organic feed (fish emulsion 5-1-1 or blood meal)',
      organicRecommendation: 'Liquid fish/kelp foliar tea and compost top-dressing.',
      applicationMethod: 'Drench root perimeter.',
      cutoffSeason: 'Cease when warm weather causes bolting.'
    },
    spraying: {
      commonPestsAndDiseases: ['Aphids', 'Leaf Miners', 'Downy Mildew'],
      recommendedSpray: 'Insecticidal soap or neem oil for aphids; row cover barrier against leaf miners.',
      sprayFrequency: 'As needed.',
      preventativeTips: 'Plant in part shade to keep soil cool and delay heat-induced bolting.',
      pollinatorSafety: 'Spinach is wind-pollinated; spray safe.'
    },
    planting: {
      sunExposureHours: 'Part shade to full sun (3 to 5 hours sun is optimal in warmer climates)',
      soilPreference: 'Cool, moisture-retentive, nitrogen-rich soil (pH 6.5 - 7.0)',
      spacing: '4 to 6 inches apart',
      primePlantingWindow: 'Late winter as soon as soil can be worked; or September for sweet winter greens.',
      companionPlants: ['Strawberries', 'Peas', 'Cabbage', 'Onions']
    },
    harvesting: {
      sensoryReadinessCues: [
        'Crinkled Leaf Texture: Deep savoy blistered folds with rich dark emerald color.',
        'Crisp Rib Snap: Leaf stem snaps crisp and juicy between thumb and forefinger.',
        'Pre-Bolting Window: Harvest immediately if central stem begins elongating into a flower spike.'
      ],
      visualSigns: 'Rich crinkled dark green leaves 4-6 inches long.',
      tactileSigns: 'Crisp succulent leaves.',
      aromaSigns: 'Clean mineral, sweet green scent.',
      harvestWindow: 'April-May and October-November.',
      technique: 'Cut outer leaves with shears 1 inch above soil level.'
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: false,
      idealTemperature: '32°F to 36°F (0°C to 2°C)',
      humidity: '95% relative humidity',
      expectedShelfLife: '10 to 14 days in crisper',
      storageMethod: 'Rinse in ice-cold water, spin completely dry in salad spinner, and store in a sealed container lined with a dry cotton cloth in the coldest part of the refrigerator.'
    },
    seedStarting: {
      preTreatment: 'Soak seeds in room temperature water for 24 hours to accelerate sprouting of thick seed coats.',
      preTreatmentDuration: '24 hours water soak',
      germinationTempRange: '45°F to 68°F (7°C to 20°C) - fails above 75°F',
      requiresLight: false,
      plantingDepth: '1/2 inch (12 mm) deep',
      averageSproutingDays: '7 to 12 days in cold soil',
      directSowVsIndoors: 'Direct sow outdoors into chilly spring or autumn soil.'
    }
  },
  {
    id: 'lacinato-kale',
    name: 'Tuscan Lacinato Kale (Dinosaur Kale)',
    botanicalName: 'Brassica oleracea var. palmifolia',
    category: 'Vegetable',
    light: 'part-shade',
    suitableZones: [4, 5, 6, 7, 8, 9, 10],
    bestTimeToPlant: 'Early to Mid Autumn (September - October) for winter harvest',
    imageEmoji: '🥬',
    heroNote: 'Blue-green embossed strap leaves that grow sweeter and more tender after autumn frosts convert starches into natural sugars.',
    plantingMonths: [8, 9, 10],
    viableToPlantInOctober: true,
    octoberStatus: '🌟 PRIME TIME TO PLANT IN OCTOBER! Transplant seedlings or direct sow now. Thrives in cool weather down to 10°F (-12°C).',
    pruning: {
      needsPruning: true,
      frequency: 'Harvest lower leaves continuously as needed',
      bestTime: 'Throughout autumn and winter',
      technique: 'Snip lowest mature leaves near the central stalk, allowing the palm-like top rosette to produce new leaves all winter.',
      toolsNeeded: 'Kitchen snips',
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Once at autumn planting',
      npkRatio: 'Balanced organic 5-5-5 or fish-kelp meal',
      organicRecommendation: 'Top-dress with composted manure and worm castings.',
      applicationMethod: 'Side-dress around root zone and mulch with straw.',
      cutoffSeason: 'No feeding past November.',
    },
    spraying: {
      commonPestsAndDiseases: ['Cabbage White Butterfly', 'Aphids'],
      recommendedSpray: 'Bacillus thuringiensis (BT) if caterpillars appear; autumn cold naturally suppresses most pests.',
      sprayFrequency: 'Rarely needed in October.',
      preventativeTips: 'Use lightweight floating row covers during Indian summer spells.',
      pollinatorSafety: 'Pollinators are largely dormant; spray safe.',
    },
    planting: {
      sunExposureHours: 'Part shade to full sun (4 to 6 hours)',
      soilPreference: 'Fertile, well-draining loamy soil enriched with compost (pH 6.5 - 7.0)',
      spacing: '12 to 18 inches apart',
      primePlantingWindow: 'October in mild winter zones (7-10); late summer in colder zones (4-6).',
      companionPlants: ['Garlic', 'Onions', 'Spinach', 'Thyme'],
    },
    harvesting: {
      sensoryReadinessCues: [
        'Frost Sweetening: Best harvested after the first light frost when flavor is mild and sweet.',
        'Leaf Dimensions: Leaves reach 10-14 inches long and deep blue-slate pebbled texture.',
        'Stem Snap: Leaf stalk snaps crisply at base.',
      ],
      visualSigns: 'Dark blue-black embossed pebbled foliage.',
      tactileSigns: 'Sturdy, textured, crisp leaves.',
      aromaSigns: 'Fresh brassica scent.',
      harvestWindow: 'October through March.',
      technique: 'Snap or cut lower leaves close to stem.',
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: false,
      idealTemperature: '32°F to 36°F (0°C to 2°C)',
      humidity: '95% relative humidity in refrigerator crisper',
      expectedShelfLife: '10 to 14 days fresh (or leaves can remain on living plants in garden all winter)',
      storageMethod: 'Wrap unwashed in damp paper towels inside a vented produce bag.',
    },
    seedStarting: {
      preTreatment: 'None required (seeds germinate vigorously in cool soil).',
      preTreatmentDuration: 'None',
      germinationTempRange: '50°F to 75°F (10°C to 24°C)',
      requiresLight: false,
      plantingDepth: '1/4 to 1/2 inch (6-12 mm)',
      averageSproutingDays: '4 to 8 days',
      directSowVsIndoors: 'Direct sow or transplant 4-week-old starts.',
    },
  },
  {
    id: 'spring-daffodil-allium-bulbs',
    name: 'Heirloom Spring Flower Bulbs (Daffodils & Dutch Alliums)',
    botanicalName: 'Narcissus & Allium hollandicum ("Purple Sensation")',
    category: 'Flower',
    light: 'full-shade',
    suitableZones: [3, 4, 5, 6, 7, 8, 9],
    bestTimeToPlant: 'Mid to Late Autumn (October - November) before ground freezes',
    imageEmoji: '🌷',
    heroNote: 'Essential romantic cottage garden investment. Planted in October chill to root deeply for breathtaking April blooms.',
    plantingMonths: [9, 10, 11],
    viableToPlantInOctober: true,
    octoberStatus: '🌟 PRIME TIME TO PLANT IN OCTOBER! Bulbs require 12-16 weeks of winter chill (vernalization) below 45°F to initiate spring flower buds.',
    pruning: {
      needsPruning: true,
      frequency: 'Deadhead faded flowers in spring; leave green foliage intact for 6 weeks',
      bestTime: 'Spring post-bloom',
      technique: 'Snip seed pods after petals drop, but allow leaves to die back naturally to recharge the bulb for next year.',
      toolsNeeded: 'Hand snips',
    },
    fertilizing: {
      needsFertilizer: true,
      frequency: 'Once at autumn planting',
      npkRatio: 'High phosphorus & potassium bulb food (3-8-8 or organic bone meal)',
      organicRecommendation: 'Mix 1 tablespoon bone meal into each planting hole beneath the bulb.',
      applicationMethod: 'Incorporate into bottom of planting trench; cover with 1 inch of soil before placing bulb.',
      cutoffSeason: 'Autumn planting only.',
    },
    spraying: {
      commonPestsAndDiseases: ['Squirrels / Chipmunks digging bulbs'],
      recommendedSpray: 'Daffodils and alliums are naturally deer, rabbit, and rodent proof due to bitter lycorine alkaloid!',
      sprayFrequency: 'No sprays needed.',
      preventativeTips: 'Layer chicken wire over bulb beds if rodents are aggressive.',
      pollinatorSafety: 'No chemical sprays required.',
    },
    planting: {
      sunExposureHours: 'Full shade to part shade under deciduous trees (leaves are gone when bulbs bloom in spring!)',
      soilPreference: 'Well-draining loamy soil with zero standing winter water (standing water rots bulbs)',
      spacing: '4 to 6 inches apart',
      primePlantingWindow: 'October through November when evening temperatures drop between 40-50°F.',
      companionPlants: ['Hostas', 'Ferns', 'English Ivy', 'Bleeding Hearts'],
    },
    harvesting: {
      sensoryReadinessCues: [
        'Spring Cut Flowers: Cut in spring when flower buds show color ("goose-neck stage") but have not yet unfurled.',
      ],
      visualSigns: 'Bud is swollen and angled 90 degrees.',
      tactileSigns: 'Crisp stem turgor.',
      aromaSigns: 'Sweet honey perfume.',
      harvestWindow: 'March through May.',
      technique: 'Cut at ground level with clean knife.',
    },
    storing: {
      lightCondition: 'Complete Darkness',
      curingRequired: false,
      idealTemperature: 'Keep dry bulbs in cool dark mesh bag at 50-60°F until planting in October.',
      humidity: '40-50% dry humidity',
      expectedShelfLife: 'Plant before winter freeze.',
      storageMethod: 'Plant immediately into soil in October.',
    },
    seedStarting: {
      preTreatment: 'Bulbs are planted directly; propagated by division in autumn.',
      preTreatmentDuration: 'Natural winter vernalization in ground',
      germinationTempRange: 'Root growth occurs underground at 40°F to 50°F',
      requiresLight: false,
      plantingDepth: 'Plant 6 inches deep (pointed tip facing upwards)',
      averageSproutingDays: 'Roots form in autumn; green spears emerge in late winter / early spring',
      directSowVsIndoors: 'Direct plant outdoors in October.',
    },
  }
];

export const CLIMATE_ZONES_CATALOG: Record<string, { zone: string; zoneNumber: number; lastFrost: string; firstFrost: string; days: number; advice: string }> = {
  'asheville': {
    zone: '7a',
    zoneNumber: 7,
    lastFrost: 'April 20',
    firstFrost: 'October 20',
    days: 183,
    advice: 'Mountain microclimate with rich damp summers and crisp autumns. Excellent for heirloom tomatoes, lavender on raised rock beds, and cold-stratified perennials.'
  },
  'portland': {
    zone: '8b',
    zoneNumber: 8,
    lastFrost: 'April 5',
    firstFrost: 'November 15',
    days: 224,
    advice: 'Pacific Northwest maritime climate with mild wet winters and dry sunny summers. Exceptional for roses, hydrangeas, berries, and allium crops.'
  },
  'austin': {
    zone: '8b',
    zoneNumber: 8,
    lastFrost: 'March 1',
    firstFrost: 'November 25',
    days: 269,
    advice: 'Subtropical transition zone with scorching summer peaks. Garden in two distinct seasons: early spring and rich autumn-winter crops. Use part shade for tender greens.'
  },
  'new york': {
    zone: '7b',
    zoneNumber: 7,
    lastFrost: 'April 15',
    firstFrost: 'November 5',
    days: 204,
    advice: 'Coastal temperate zone with four balanced seasons. Start seeds indoors in February-March; enjoy prolonged harvest into late November.'
  },
  'chicago': {
    zone: '6a',
    zoneNumber: 6,
    lastFrost: 'May 5',
    firstFrost: 'October 15',
    days: 163,
    advice: 'Midwestern continental zone with brisk lake breezes. Protect early seedlings with cloches or cold frames; mulching heavily in autumn is vital.'
  },
  'san francisco': {
    zone: '10a',
    zoneNumber: 10,
    lastFrost: 'January 15 (Near Frost-Free)',
    firstFrost: 'December 30',
    days: 345,
    advice: 'Mediterranean coastal climate with summer fog layer and year-round growing capacity. Protect sun-lovers in warmer microclimates.'
  },
  'london': {
    zone: '9a',
    zoneNumber: 9,
    lastFrost: 'April 20',
    firstFrost: 'November 15',
    days: 209,
    advice: 'Temperate maritime climate ideal for cottage gardens, climbing roses, sweet peas, and woodland ferns. Watch for damp-season fungal pathogens.'
  }
};
