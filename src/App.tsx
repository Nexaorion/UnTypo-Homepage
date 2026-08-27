import { CostCalculator } from './components/CostCalculator'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { OpenSource } from './components/OpenSource'
import { Privacy } from './components/Privacy'
import { WorksEverywhere } from './components/WorksEverywhere'

export default function App() {
  return (
    <div className="grain min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WorksEverywhere />
        <Features />
        <Privacy />
        <CostCalculator />
        <OpenSource />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
