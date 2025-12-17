import './globals.css'

export const metadata = {
  metadataBase: new URL('https://your-domain.vercel.app'),
  title: 'Get a Wealthsimple Referral Code in Canada | $25 Bonus',
  description: 'Claim your free $25 bonus with the latest Wealthsimple referral code. Sign up for investing, trading, or cash accounts in Canada. Limited-time offer.',
  keywords: 'wealthsimple referral code, wealthsimple code parrainage, wealthsimple Canada, get $25, invest referral bonus, TFSA, RRSP, commission-free trading',
  authors: [{ name: 'Wealthsimple Referral Canada' }],
  creator: 'Wealthsimple Referral Canada',
  publisher: 'Wealthsimple Referral Canada',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Get a Wealthsimple Referral Code in Canada | $25 Bonus',
    description: 'Claim your free $25 bonus with the latest Wealthsimple referral code. Sign up for investing, trading, or cash accounts in Canada.',
    url: 'https://your-domain.vercel.app',
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
    title: 'Get a Wealthsimple Referral Code in Canada | $25 Bonus',
    description: 'Claim your free $25 bonus with the latest Wealthsimple referral code.',
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
  verification: {
    google: 'your-google-site-verification',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
