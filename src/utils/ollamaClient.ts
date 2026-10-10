export interface OllamaGenerateResponse {
  response: string;
  model: string;
  total_duration?: number;
  eval_count?: number;
}

export async function checkOllamaConnection(baseUrl: string = 'http://localhost:11434'): Promise<{
  connected: boolean;
  models: string[];
  error?: string;
}> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${baseUrl}/api/tags`, {
      method: 'GET',
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const models = Array.isArray(data.models) ? data.models.map((m: any) => m.name) : [];
      return { connected: true, models };
    }
    return { connected: false, models: [], error: `HTTP ${res.status}` };
  } catch (err: any) {
    return {
      connected: false,
      models: [],
      error: err.name === 'AbortError' ? 'Connection timed out' : 'Ollama daemon not reached at ' + baseUrl,
    };
  }
}

export async function generateWithOllama(
  prompt: string,
  model: string = 'llama3.2:3b',
  baseUrl: string = 'http://localhost:11434',
  systemPrompt?: string
): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  const res = await fetch(`${baseUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: controller.signal,
    body: JSON.stringify({
      model: model.replace('ollama/', ''),
      prompt,
      system: systemPrompt || 'You are an expert botanical and horticultural advisor for Help My Garden.',
      stream: false,
      options: {
        temperature: 0.3,
        num_ctx: 4096,
      },
    }),
  });
  clearTimeout(timeoutId);

  if (!res.ok) {
    throw new Error(`Ollama request failed with status ${res.status}`);
  }

  const data: OllamaGenerateResponse = await res.json();
  return data.response;
}
