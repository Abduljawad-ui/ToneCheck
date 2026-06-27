function FeelingCard({ feeling }) {
  return (
    <div className="mb-4 bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100 rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-sm shadow-md shadow-violet-200 flex-shrink-0">
          👁️
        </div>
        <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">
          How they might feel
        </span>
      </div>
      <p className="text-sm text-violet-700 leading-relaxed">{feeling}</p>
    </div>
  )
}

export default FeelingCard