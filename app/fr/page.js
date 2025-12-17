import HeroSection from '@/components/fr/HeroSection'
import HowItWorks from '@/components/fr/HowItWorks'
import Features from '@/components/fr/Features'
import FAQ from '@/components/fr/FAQ'
import Disclaimer from '@/components/fr/Disclaimer'

export const metadata = {
  title: 'Code de Parrainage Wealthsimple Canada | Bonus de 25$',
  description: 'Réclamez votre bonus gratuit de 25$ avec le dernier code de parrainage Wealthsimple. Inscrivez-vous pour des comptes d\'investissement, de négociation ou d\'argent comptant au Canada.',
  keywords: 'wealthsimple code parrainage, code référence wealthsimple, wealthsimple canada, bonus 25$, investissement référence, CELI, REER, négociation sans commission',
}

export default function FrenchHome() {
  return (
    <main className="min-h-screen bg-ws-darker overflow-hidden">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
          <a href="/" className="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white transition-all duration-300">
            EN
          </a>
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-ws-purple to-ws-pink text-white">
            FR
          </span>
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
