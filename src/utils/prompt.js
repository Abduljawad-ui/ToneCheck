export function buildPrompt(message, tone) {
  return `You are a tone analysis expert. Analyze this message and respond ONLY with a JSON object, no extra text, no markdown:

Message: "${message}"

Respond with exactly this JSON structure:
{
  "vibes": ["one or two of: Aggressive, Cold, Passive-aggressive, Warm, Friendly, Professional"],
  "warmth": "one of: Very low, Low, Medium, High, Very high",
  "clarity": "one of: Low, Medium, High",
  "conflictRisk": 45,
  "feeling": "2 sentences about how the reader might feel",
  "rewrite": "rewrite the message in a ${tone} tone"
}`
}