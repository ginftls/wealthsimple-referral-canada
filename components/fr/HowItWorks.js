'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      title: 'Cliquez sur le Lien',
      description: 'Utilisez notre lien de parrainage exclusif pour accéder à Wealthsimple',
      icon: '🔗',
    },
    {
      number: '02',
      title: 'Inscrivez-vous',
      description: 'Créez votre compte en seulement 5 minutes avec vos informations de base',
      icon: '✍️',
    },
    {
      number: '03',
      title: 'Financez votre Compte',
      description: 'Ajoutez des fonds à votre compte (montant minimum requis)',
      icon: '💰',
    },
    {
      number: '04',
      title: 'Recevez votre Bonus',
      description: 'Recevez votre bonus de 25$ instantanément dans votre compte',
      icon: '🎉',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Comment Utiliser Ce <span className="gradient-text">Code de Parrainage Wealthsimple</span>
          </h2>
          <p className={`text-xl text-white/60 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Commencez en quatre étapes simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="bg-gradient-to-br from-ws-light to-ws-dark p-6 rounded-2xl border border-white/10 hover:border-ws-purple/50 transition-all duration-300 group-hover:scale-105 group-hover:glow h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-ws-purple/60 font-mono text-sm mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-ws-purple/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
