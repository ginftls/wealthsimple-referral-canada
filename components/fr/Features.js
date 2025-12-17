'use client'

import { useEffect, useRef, useState } from 'react'

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: 'Transactions Sans Commission',
      description: 'Achetez et vendez des actions canadiennes et des FNB sans frais de commission',
      icon: '📈',
      highlight: 'Sans Frais Actions CAD',
    },
    {
      title: 'Comptes Fiscalement Avantageux',
      description: 'Ouvrez des comptes CELI, REER et personnels pour optimiser vos impôts',
      icon: '🏦',
      highlight: 'CELI & REER Disponibles',
    },
    {
      title: 'Compte Argent Comptant',
      description: 'Gagnez des taux d\'intérêt compétitifs sur votre argent non investi',
      icon: '💵',
      highlight: 'Taux d\'Intérêt 4.5%',
    },
    {
      title: 'Application Conviviale',
      description: 'Plateforme mobile et web intuitive conçue pour tous les niveaux d\'expérience',
      icon: '📱',
      highlight: 'Note 4.8★',
    },
    {
      title: 'Investissement Automatisé',
      description: 'Laissez les robots-conseillers gérer votre portefeuille avec rééquilibrage intelligent',
      icon: '🤖',
      highlight: 'Option Sans Effort',
    },
    {
      title: 'Actions Fractionnées',
      description: 'Investissez dans des actions coûteuses avec n\'importe quel montant',
      icon: '🔀',
      highlight: 'Commencez avec 1$',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-transparent via-ws-dark/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Pourquoi Choisir <span className="gradient-text">Wealthsimple au Canada?</span>
          </h2>
          <p className={`text-xl text-white/60 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            La plateforme d'investissement à la croissance la plus rapide au Canada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-full bg-gradient-to-br from-ws-light/50 to-ws-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-ws-purple/30 transition-all duration-300 group-hover:scale-105">
                <div className="absolute top-0 right-0 px-3 py-1 bg-ws-purple/20 text-ws-purple text-xs font-bold rounded-bl-xl rounded-tr-2xl">
                  {feature.highlight}
                </div>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-purple mb-2">3M+</div>
            <div className="text-sm text-white/60">Utilisateurs Canadiens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-pink mb-2">30G$+</div>
            <div className="text-sm text-white/60">Actifs Sous Gestion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-green mb-2">0%</div>
            <div className="text-sm text-white/60">Frais de Commission</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-purple mb-2">24/7</div>
            <div className="text-sm text-white/60">Support Client</div>
          </div>
        </div>
      </div>
    </section>
  )
}
