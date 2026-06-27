const steps = [
  {
    icon: '📝',
    title: 'Paste your message',
    desc: "Copy any message you're about to send — a text, email, Slack message, anything.",
    color: 'bg-violet-50 border-violet-100',
    iconBg: 'bg-violet-100',
  },
  {
    icon: '🧠',
    title: 'AI reads the tone',
    desc: 'Our AI detects the emotional tone, conflict risk, warmth level, and how the reader will likely feel.',
    color: 'bg-pink-50 border-pink-100',
    iconBg: 'bg-pink-100',
  },
  {
    icon: '✨',
    title: 'Get a better version',
    desc: 'Receive a rewritten version in your chosen tone — kinder, more confident, or more professional.',
    color: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-100',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50/80 border-y border-gray-100 py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-3">How it works</p>
          <h2
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight"
          >
            Three steps to a better message
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-3xl border ${step.color} hover:scale-105 transition-transform`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${step.iconBg} flex items-center justify-center text-2xl sm:text-3xl`}>
                {step.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Sora, sans-serif' }} className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks