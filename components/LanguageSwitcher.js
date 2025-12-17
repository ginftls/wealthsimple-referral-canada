'use client'

export default function LanguageSwitcher({ isFrench }) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
        <a
          href="/"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !isFrench
              ? 'bg-gradient-to-r from-ws-purple to-ws-pink text-white'
              : 'text-white/60 hover:text-white'
          }`}
        >
          EN
        </a>
        <a
          href="/fr"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isFrench
              ? 'bg-gradient-to-r from-ws-purple to-ws-pink text-white'
              : 'text-white/60 hover:text-white'
          }`}
        >
          FR
        </a>
      </div>
    </div>
  )
}
