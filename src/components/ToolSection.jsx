function ToolSection({ children }) {
  return (
    <section id="tool" className="py-14 sm:py-20 bg-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-3">Try it now — it's free</p>
          <h2
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight mb-4"
          >
            Paste your message below
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto leading-relaxed">
            No sign up needed. Just paste, analyze, and send with confidence.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  )
}

export default ToolSection