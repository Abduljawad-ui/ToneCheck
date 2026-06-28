import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ToolSection from './components/ToolSection'
import MessageInput from './components/MessageInput'
import VibeResults from './components/VibeResults'
import MetricCards from './components/MetricCards'
import FeelingCard from './components/FeelingCard'
import RewriteCard from './components/RewriteCard'
import Footer from './components/Footer'
import { useToneCheck } from './hooks/useToneCheck'

function App() {
  const [message, setMessage] = useState('')
  const [selectedTone, setSelectedTone] = useState('Friendly')
  const { analyze, result, loading, error } = useToneCheck()

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ToolSection>
        <MessageInput
          message={message}
          setMessage={setMessage}
          selectedTone={selectedTone}
          setSelectedTone={setSelectedTone}
          onAnalyze={() => analyze(message, selectedTone)}
          loading={loading}
        />
        {error && (
          <p className="text-sm text-red-400 font-medium mb-4">{error}</p>
        )}
        {result && (
          <div className="mt-2">
            <VibeResults vibesDetected={result.vibes} />
            <MetricCards
              warmth={result.warmth}
              clarity={result.clarity}
              conflictRisk={result.conflictRisk}
            />
            <FeelingCard feeling={result.feeling} />
            <RewriteCard rewrites={result.rewrites} selectedTone={selectedTone} />
          </div>
        )}
      </ToolSection>
      <Footer />
    </div>
  )
}

export default App