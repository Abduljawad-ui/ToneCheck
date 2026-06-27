const toneChips = [
  { label: 'Kinder', style: 'bg-pink-50 text-pink-700 border-pink-200' },
  { label: 'Friendly', style: 'bg-violet-50 text-violet-700 border-violet-200' },
  { label: 'Professional', style: 'bg-teal-50 text-teal-700 border-teal-200' },
  { label: 'Confident', style: 'bg-amber-50 text-amber-700 border-amber-200' },
]

function MessageInput({ message, setMessage, selectedTone, setSelectedTone, onAnalyze, loading }) {
  return (
    <div className="mb-4 bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
          <span>💬</span> Your message
        </div>
        <span className="text-xs text-gray-300 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-lg">
          {message.length} chars
        </span>
      </div>

      {/* Textarea */}
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Paste the message you're about to send..."
        rows={4}
        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 resize-none outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all"
      />

      {/* Tone chips */}
      <div className="mt-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Rewrite it as...
        </p>
        <div className="flex gap-2 flex-wrap">
          {toneChips.map(chip => (
            <button
              key={chip.label}
              onClick={() => setSelectedTone(chip.label)}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all cursor-pointer ${chip.style} ${
                selectedTone === chip.label
                  ? 'ring-2 ring-violet-300 ring-offset-1'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Analyze button */}
      <button
        onClick={onAnalyze}
        disabled={!message || loading}
        className="w-full mt-4 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-violet-200 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
      >
        {loading ? '✨ Analyzing...' : '✨ Analyze my message'}
      </button>

    </div>
  )
}

export default MessageInput