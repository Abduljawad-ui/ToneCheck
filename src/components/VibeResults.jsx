const vibes = [
  { label: 'Aggressive', emoji: '🔥', style: 'bg-red-50 text-red-600 border-red-200' },
  { label: 'Cold', emoji: '❄️', style: 'bg-blue-50 text-blue-600 border-blue-200' },
  { label: 'Passive-aggressive', emoji: '⚠️', style: 'bg-amber-50 text-amber-600 border-amber-200' },
  { label: 'Warm', emoji: '☀️', style: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
  { label: 'Friendly', emoji: '😊', style: 'bg-green-50 text-green-600 border-green-200' },
  { label: 'Professional', emoji: '💼', style: 'bg-teal-50 text-teal-600 border-teal-200' },
]

function VibeResults({ vibesDetected }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Vibe detected
      </p>
      <div className="flex gap-2 flex-wrap">
        {vibesDetected.map(vibe => {
          const match = vibes.find(v => v.label === vibe)
          if (!match) return null
          return (
            <div key={vibe} className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold border ${match.style}`}>
              <span>{match.emoji}</span> {match.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VibeResults