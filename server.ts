import express from 'express';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

// Initialize server-side Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Real-time Seasonal LLM Horticultural Research Route
app.post('/api/garden/seasonal-research', async (req, res) => {
  try {
    const { address, zone, month = 'October', category = 'plant' } = req.body;

    const prompt = `You are the master horticultural research agent for "Help My Garden".
A home gardener is at location: "${address}" (Hardiness: ${zone}).
The current time is: ${month} (Autumn/Fall season).
Task to research: "${category}".

IMPORTANT BOTANICAL RULES:
- You must research and provide accurate recommendations for WHAT TO DO RIGHT NOW in ${month} for ${zone}.
- If the category is "plant":
  * Explicitly note that warm-season nightshades (like Tomatoes, Peppers, Eggplants) and tender summer squash CANNOT and MUST NOT be planted outdoors in ${month}. Explain why (soil temperature drops, impending frost, photoperiod).
  * Group viable October plants into 3 strict categories:
    1. Full Sun (6+ hours) - e.g. Hardneck/Softneck Garlic, Shallots, Overwintering Onions, Broad/Fava Beans, Winter Radishes, Spring Bulbs (Daffodils, Alliums, Tulips).
    2. Part Shade (3-6 hours) - e.g. Cold-hardy greens like Bloomsdale Spinach, Lacinato Kale, Winter Butterhead Lettuce, Arugula, Mache/Corn Salad, Bok Choy.
    3. Full Shade (under 3 hours) - e.g. Woodland spring bulbs, winter-hardy ferns.
  * For each, provide the "Best of the Best" planting window for ${month}.
- If the category is "prune", "fertilize", "spray", "harvest", "store", or "seed":
  * Detail exact ${month} seasonal actions, critical warnings (e.g. do not fertilize with high nitrogen in fall; do not prune spring-blooming shrubs now; harvest final blushing tomatoes before frost; cure squashes; store roots in dark cool cellar; direct sow cold-hardy seeds or cold-stratify perennial seeds).

Respond in clean, well-formatted JSON with the following structure:
{
  "location": "${address}",
  "zone": "${zone}",
  "month": "${month}",
  "seasonalSummary": "Brief overview of gardening priorities right now in ${month}",
  "warmSeasonWarning": "Clear explanation of why tomatoes/peppers/squash should not be planted now, and what to do with existing plants instead",
  "categoryTitle": "Title for this category in ${month}",
  "recommendations": [
    {
      "name": "Plant/Task Name",
      "botanicalName": "Scientific name",
      "light": "full-sun | part-shade | full-shade",
      "type": "Vegetable | Flower | Herb | Fruit | Shrub",
      "bestTimeNow": "Exact timing in ${month}",
      "keyGuidance": "Specific instructions for ${month}",
      "sensoryOrTechnique": "Key sensory cue, technique, or depth/spacing",
      "emoji": "🌱"
    }
  ],
  "proTips": [
    "Tip 1 for ${month}",
    "Tip 2 for ${month}"
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text;
    if (!responseText) {
      return res.status(500).json({ error: 'Empty response from LLM' });
    }

    const parsed = JSON.parse(responseText);
    res.json(parsed);
  } catch (error: any) {
    console.error('Error generating seasonal garden research:', error);
    res.status(500).json({
      error: error.message || 'Failed to research seasonal garden advice',
    });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Help My Garden server running at http://0.0.0.0:${port}`);
  });
}

startServer();
