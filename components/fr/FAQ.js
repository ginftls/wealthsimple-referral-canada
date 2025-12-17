'use client'

import { useState, useEffect } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Ce code de parrainage Wealthsimple est-il gratuit?',
      answer: 'Oui! L\'utilisation de notre code de parrainage est entièrement gratuite. En fait, vous recevez un bonus de 25$ simplement en vous inscrivant et en finançant votre compte. Il n\'y a pas de frais cachés.',
    },
    {
      question: 'Combien de temps faut-il pour recevoir le bonus?',
      answer: 'Votre bonus de 25$ est généralement crédité dans les 2 à 3 jours ouvrables après avoir satisfait aux exigences de financement. Certains utilisateurs le reçoivent même plus tôt.',
    },
    {
      question: 'Qui est éligible au bonus de parrainage Wealthsimple?',
      answer: 'Les nouveaux utilisateurs de Wealthsimple qui sont résidents canadiens (18 ans et plus) sont éligibles. Vous devez vous inscrire en utilisant le lien de parrainage et respecter les exigences de financement minimum fixées par Wealthsimple.',
    },
    {
      question: 'Quel est le dépôt minimum requis?',
      answer: 'Le dépôt minimum varie selon le type de compte. Pour les comptes Trade, il peut être aussi bas que 1$. Pour les comptes Invest, généralement 500$. Vérifiez les conditions actuelles de Wealthsimple pour les montants exacts.',
    },
    {
      question: 'Puis-je utiliser ce code si j\'ai déjà un compte Wealthsimple?',
      answer: 'Malheureusement, les codes de parrainage ne sont valables que pour les nouveaux comptes. Les utilisateurs existants de Wealthsimple ne peuvent pas utiliser de codes de parrainage pour des bonus supplémentaires.',
    },
    {
      question: 'Wealthsimple est-il sûr et réglementé?',
      answer: 'Oui, Wealthsimple est réglementé par l\'OCRCVM et est membre du FCPE. Vos investissements sont protégés jusqu\'à 1 million de dollars, et les dépôts en espèces sont assurés par la SADC jusqu\'à 100 000$.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    script.id = 'faq-schema-fr'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('faq-schema-fr')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions <span className="gradient-text">Fréquemment Posées</span>
          </h2>
          <p className="text-xl text-white/60">
            Tout ce que vous devez savoir sur le code de parrainage Wealthsimple
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-ws-light/30 to-ws-dark/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-ws-purple/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-ws-purple transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
