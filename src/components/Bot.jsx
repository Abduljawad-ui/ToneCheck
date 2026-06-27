import { useEffect, useState } from 'react'

const messages = [
  "Hmm, this sounds tense...",
  "I sense some frustration!",
  "Let me fix this for you!",
  "Analyzing the vibe...",
  "Here's a kinder version!"
]

function Bot() {
  const [msgIndex, setMsgIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setMsgIndex(i => (i + 1) % messages.length)
        setVisible(true)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center w-44">

      {/* Speech bubble */}
      <div className={`relative bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-2 text-xs font-semibold text-gray-800 whitespace-nowrap mb-3 transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {messages[msgIndex]}
        {/* Tail */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
      </div>

      {/* Bot SVG */}
      <div className="animate-bounce" style={{ animationDuration: '3s' }}>
        <svg width="120" height="145" viewBox="0 0 130 155" fill="none">
          <defs>
            <radialGradient id="bodyG" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#c4b5fd"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </radialGradient>
            <radialGradient id="headG" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ddd6fe"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </radialGradient>
          </defs>
          <rect x="22" y="68" width="86" height="72" rx="22" fill="url(#bodyG)"/>
          <rect x="30" y="76" width="70" height="56" rx="16" fill="rgba(255,255,255,0.15)"/>
          <rect x="38" y="88" width="54" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
          <rect x="38" y="100" width="38" height="6" rx="3" fill="rgba(255,255,255,0.35)"/>
          <rect x="38" y="112" width="46" height="6" rx="3" fill="rgba(255,255,255,0.25)"/>
          <rect x="4" y="80" width="16" height="34" rx="8" fill="url(#bodyG)"/>
          <rect x="110" y="80" width="16" height="34" rx="8" fill="url(#bodyG)"/>
          <rect x="38" y="140" width="16" height="15" rx="7" fill="url(#bodyG)"/>
          <rect x="76" y="140" width="16" height="15" rx="7" fill="url(#bodyG)"/>
          <ellipse cx="65" cy="46" rx="38" ry="40" fill="url(#headG)"/>
          <ellipse cx="52" cy="42" rx="10" ry="11" fill="white"/>
          <ellipse cx="78" cy="42" rx="10" ry="11" fill="white"/>
          <ellipse cx="52" cy="43" rx="5.5" ry="6" fill="#4c1d95"/>
          <ellipse cx="78" cy="43" rx="5.5" ry="6" fill="#4c1d95"/>
          <ellipse cx="53.5" cy="41.5" rx="2" ry="2" fill="white"/>
          <ellipse cx="79.5" cy="41.5" rx="2" ry="2" fill="white"/>
          <rect x="50" y="57" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.7)"/>
          <ellipse cx="38" cy="42" rx="5" ry="5" fill="#f9a8d4" opacity="0.7"/>
          <ellipse cx="92" cy="42" rx="5" ry="5" fill="#f9a8d4" opacity="0.7"/>
          <ellipse cx="65" cy="10" rx="4" ry="4" fill="#a78bfa"/>
          <rect x="63.5" y="14" width="3" height="10" rx="1.5" fill="#a78bfa"/>
        </svg>
      </div>

      {/* Shadow under bot */}
      <div className="w-20 h-3 bg-violet-300/30 rounded-full blur-sm mt-1 animate-pulse" />

    </div>
  )
}

export default Bot