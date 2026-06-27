function MetricCards({ warmth, clarity, conflictRisk }) {
  return (
    <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">

      <div className="bg-pink-50 border border-pink-100 rounded-2xl p-3 sm:p-4 text-center">
        <div className="text-xl sm:text-2xl mb-1 sm:mb-2">❤️</div>
        <div className="text-[10px] sm:text-xs text-pink-400 uppercase tracking-wider font-semibold mb-0.5 sm:mb-1">Warmth</div>
        <div className="text-xs sm:text-sm font-bold text-pink-700 leading-tight">{warmth}</div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 sm:p-4 text-center">
        <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💡</div>
        <div className="text-[10px] sm:text-xs text-emerald-400 uppercase tracking-wider font-semibold mb-0.5 sm:mb-1">Clarity</div>
        <div className="text-xs sm:text-sm font-bold text-emerald-700">{clarity}</div>
      </div>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3 sm:p-4 text-center">
        <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💣</div>
        <div className="text-[10px] sm:text-xs text-amber-400 uppercase tracking-wider font-semibold mb-0.5 sm:mb-1 leading-tight">Conflict</div>
        <div className="text-xs sm:text-sm font-bold text-amber-700">{conflictRisk}%</div>
        <div className="mt-1.5 sm:mt-2 h-1.5 bg-amber-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-red-500 rounded-full transition-all duration-1000"
            style={{ width: `${conflictRisk}%` }}
          />
        </div>
      </div>

    </div>
  )
}

export default MetricCards