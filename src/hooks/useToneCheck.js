import { useState } from 'react'
import { buildPrompt } from '../utils/prompt'

export function useToneCheck() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function analyze(message, tone) {
    if (!message) return
    setLoading(true)
    setResult(null)
    setError(null)
    console.log('Key:', import.meta.env.VITE_OPENROUTER_KEY)
    let data
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
        },
        body: JSON.stringify({
          model: 'openrouter/auto',
          messages: [{ role: 'user', content: buildPrompt(message, tone) }],
        }),
      })

      data = await response.json()
      console.log('API response:', data)

      if (!response.ok) {
        setError('Something went wrong. Please try again.')
        return
      }

      const text = data.choices[0].message.content
      const clean = text.replace(/```json|```/g, '').trim()
      const parsed = JSON.parse(clean)

      setResult({
        vibes: parsed.vibes,
        warmth: parsed.warmth,
        clarity: parsed.clarity,
        conflictRisk: parsed.conflictRisk,
        feeling: parsed.feeling,
        rewrites: { [tone]: parsed.rewrite }
      })

    } catch (err) {
      console.error('Error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { analyze, result, loading, error }
}