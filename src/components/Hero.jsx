import Bot from './Bot'

function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-white min-h-[88vh] flex items-center">

      {/* Background blobs */}
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-violet-100/70 blur-3xl -top-40 -left-32 pointer-events-none" />
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-pink-100/60 blur-3xl -top-20 -right-32 pointer-events-none" />
      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-violet-50 blur-3xl bottom-0 right-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse flex-shrink-0" />
              <span className="text-xs font-semibold text-violet-600 tracking-widest uppercase">
                AI-powered tone analysis
              </span>
            </div>

            <h1
              style={{ fontFamily: 'Sora, sans-serif' }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-950 leading-[1.05] tracking-tight mb-4 sm:mb-6"
            >
              Your words<br />matter.{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Make them land.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mb-8 sm:mb-10 mx-auto lg:mx-0">
              Paste any message before you hit send. ToneCheck reads the emotion behind your words, warns you of risks, and rewrites it so it lands exactly the way you intended.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 sm:mb-12">
              <button
                onClick={() => scrollTo('tool')}
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold px-7 py-4 rounded-2xl shadow-xl shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all cursor-pointer text-sm sm:text-base"
              >
                ✨ Analyze my message — free
              </button>
              <button
                onClick={() => scrollTo('how-it-works')}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer font-medium flex items-center gap-2"
              >
                See how it works →
              </button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['🧑‍💻','👩‍💼','🧑‍🎨','👨‍🏫','👩‍🔬'].map((e, i) => (
                  <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-violet-100 to-pink-100 border-2 border-white flex items-center justify-center text-sm shadow-sm">
                    {e}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Trusted by <span className="text-gray-800 font-bold">2,400+</span> people who care how they communicate
              </p>
            </div>
          </div>

          {/* Right — Bot */}
          <div className="flex-shrink-0 relative flex items-center justify-center w-full lg:w-auto mt-4 lg:mt-0">

            {/* Floating cards — desktop only */}
            <div className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 z-20 hidden lg:block">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <div>
                  <p className="text-xs font-bold text-gray-800">Aggressive tone</p>
                  <p className="text-xs text-gray-400">detected in your message</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 z-20 hidden lg:block">
              <div className="flex items-center gap-2">
                <span className="text-lg">✨</span>
                <div>
                  <p className="text-xs font-bold text-gray-800">Rewritten kindly</p>
                  <p className="text-xs text-gray-400">conflict risk dropped 68%</p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-violet-50 to-pink-50 rounded-3xl p-8 sm:p-10 border border-violet-100 shadow-2xl shadow-violet-100">
              <Bot />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero