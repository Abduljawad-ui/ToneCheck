import { useState } from 'react'

function RewriteCard({ rewrites, selectedTone }) {
  const [copied, setCopied] = useState(false)
  const text = rewrites[selectedTone] || ''

  function handleCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="mb-8 bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-sm flex-shrink-0">
          🪄
        </div>
        <span className="text-sm font-bold text-gray-800">
          Rewritten — {selectedTone} version
        </span>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm text-emerald-800 leading-relaxed">
        {text}
      </div>

      <div className="flex justify-end mt-3">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-pink-600 px-4 py-2 rounded-xl shadow-md shadow-violet-200 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {copied ? '✅ Copied!' : '📋 Copy rewrite'}
        </button>
      </div>
    </div>
  )
}

export default RewriteCard