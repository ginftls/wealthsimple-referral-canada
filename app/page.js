import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Disclaimer from '@/components/Disclaimer'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <main className="min-h-screen bg-ws-darker overflow-hidden">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-ws-purple to-ws-pink text-white">
            EN
          </span>
          <a href="/fr" className="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white transition-all duration-300">
            FR
          </a>
        </div>
      </div>

      <HeroSection />
      <HowItWorks />
      <Features />
      <FAQ />
      <Disclaimer />
    </main>
  )
}
