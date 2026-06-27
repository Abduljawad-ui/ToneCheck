function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 sm:py-10 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs">✦</span>
          </div>
          <span style={{ fontFamily: 'Sora, sans-serif' }} className="text-sm font-bold text-gray-900">ToneCheck</span>
        </div>
        <p className="text-xs text-gray-400">
          Say what you mean. Every time. — Built with care for better human communication.
        </p>
        <p className="text-xs text-gray-300">© 2025 ToneCheck</p>
      </div>
    </footer>
  )
}

export default Footer