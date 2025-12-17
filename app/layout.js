import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://wealthsimple-referral-canada.vercel.app'),
  title: 'Wealthsimple Referral Code Canada 2025 - Get $25 Bonus',
  description: 'Claim your $25 bonus with the latest Wealthsimple referral code in Canada. Sign up for investing, trading, or cash accounts. Official partner link.',
  keywords: 'wealthsimple referral code, wealthsimple code parrainage, wealthsimple Canada, wealthsimple bonus $25, invest referral Canada, TFSA, RRSP, commission-free trading',
  authors: [{ name: 'Wealthsimple Referral Canada' }],
  creator: 'Wealthsimple Referral Canada',
  publisher: 'Wealthsimple Referral Canada',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Wealthsimple Referral Code Canada - $25 Bonus',
    description: 'Get $25 free with Wealthsimple referral code. Limited time offer for Canadian residents.',
    url: 'https://wealthsimple-referral-canada.vercel.app',
    siteName: 'Wealthsimple Referral Code Canada',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wealthsimple $25 Referral Bonus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wealthsimple Referral Code Canada',
    description: 'Get $25 free bonus with Wealthsimple',
    images: ['/og-image.jpg'],
  },
  alternates: {
    languages: {
      'en-CA': '/',
      'fr-CA': '/fr',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Wealthsimple Referral Code Canada - Get $25 Bonus",
    "description": "Official Wealthsimple referral code for Canadian residents. Sign up and get $25 bonus when you deposit funds.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CAD",
      "description": "$25 referral bonus for new Wealthsimple accounts"
    },
    "provider": {
      "@type": "Organization",
      "name": "Wealthsimple",
      "url": "https://www.wealthsimple.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    }
  }

  return (
    <html lang="en-CA">
      <head>
        <link rel="canonical" href="https://wealthsimple-referral-canada.vercel.app" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
