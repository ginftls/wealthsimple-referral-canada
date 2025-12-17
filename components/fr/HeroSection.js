'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://www.wealthsimple.com/invite/EYP3LM'
  const referralCode = 'EYP3LM'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 noise-bg">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ws-purple/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ws-pink/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ws-green/20 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Canadian Flag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
          <Image
            src="/canadian-flag.svg"
            alt="Drapeau Canadien"
            width={24}
            height={24}
            className="w-6 h-6"
            priority
          />
          <span className="text-sm font-medium text-white/80">Exclusif pour les Canadiens</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Débloquez votre <span className="gradient-text">Bonus de 25$ Wealthsimple</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
          Rejoignez la plateforme d'investissement la plus fiable du Canada avec notre code de parrainage exclusif et obtenez des récompenses instantanées
        </p>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-ws-light to-ws-dark p-8 md:p-12 rounded-3xl max-w-2xl mx-auto border border-white/10 glow">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/wealthsimple-logo.png"
              alt="Wealthsimple"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold">Code de Parrainage Wealthsimple</span>
          </div>

          {/* Referral Code Display */}
          <div className="bg-ws-darker/50 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-ws-purple/30 relative group">
            <p className="text-sm text-white/60 mb-2">Votre Code Exclusif</p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl font-mono font-bold text-ws-purple hover:text-ws-pink transition-colors cursor-pointer"
              >
                {referralCode}
              </a>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group/copy"
                title="Copier le code"
              >
                <svg className="w-6 h-6 text-white/60 group-hover/copy:text-ws-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            {copied && (
              <p className="text-xs text-ws-green mt-2">Copié dans le presse-papiers!</p>
            )}
          </div>

          {/* CTA Button */}
          <a
            href={referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-ws-purple to-ws-pink rounded-xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-ws-purple/50"
          >
            Réclamez votre Bonus de 25$ Maintenant
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-ws-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sans frais
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-ws-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bonus instantané
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-ws-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Inscription en 5 min
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
