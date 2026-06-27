import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'How it works', id: 'how-it-works' },
    { label: 'Try it', id: 'tool' },
  ]

  useEffect(() => {
    const observers = []

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-200 flex-shrink-0">
            <span className="text-white text-sm">✦</span>
          </div>
          <span style={{ fontFamily: 'Sora, sans-serif' }} className="text-[15px] font-bold text-gray-950 tracking-tight">
            ToneCheck
          </span>
        </div>

        {/* Desktop nav tabs */}
        <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-full p-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full cursor-pointer transition-all border-none ${
                activeId === item.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600 bg-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo('tool')}
            className="bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            Try for free
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {menuOpen ? (
                <>
                  <line x1="2" y1="2" x2="16" y2="16" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="2" x2="2" y2="16" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="2" y1="4" x2="16" y2="4" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="2" y1="9" x2="16" y2="9" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="2" y1="14" x2="16" y2="14" stroke="#4b5563" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium text-left py-2.5 px-3 rounded-xl transition-colors border-none bg-transparent cursor-pointer ${
                activeId === item.id
                  ? 'text-violet-600 bg-violet-50'
                  : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar