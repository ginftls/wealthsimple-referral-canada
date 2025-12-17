'use client'

import { useState, useEffect } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is this Wealthsimple referral code free?',
      answer: 'Yes! Using our referral code is completely free. In fact, you receive a $25 bonus just for signing up and funding your account. There are no hidden fees or charges.',
    },
    {
      question: 'How long does the bonus take?',
      answer: 'Your $25 bonus is typically credited within 2-3 business days after you meet the funding requirements. Some users report receiving it even sooner.',
    },
    {
      question: 'Who is eligible for the Wealthsimple referral bonus?',
      answer: 'New Wealthsimple users who are Canadian residents (18+) are eligible. You must sign up using the referral link and meet the minimum funding requirements set by Wealthsimple.',
    },
    {
      question: 'What is the minimum deposit required?',
      answer: 'The minimum deposit varies by account type. For Trade accounts, it can be as low as $1. For Invest accounts, typically $500. Check Wealthsimple\'s current terms for exact amounts.',
    },
    {
      question: 'Can I use this code if I already have a Wealthsimple account?',
      answer: 'Unfortunately, referral codes are only valid for new accounts. Existing Wealthsimple users cannot use referral codes for additional bonuses.',
    },
    {
      question: 'Is Wealthsimple safe and regulated?',
      answer: 'Yes, Wealthsimple is regulated by IIROC and is a member of CIPF. Your investments are protected up to $1 million, and cash deposits are CDIC insured up to $100,000.',
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
    script.id = 'faq-schema'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('faq-schema')
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-white/60">
            Everything you need to know about the Wealthsimple referral code
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
