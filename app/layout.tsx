import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Let's Fly Off - Adventure Travel & Tours | Explore the World",
  description: "Discover breathtaking destinations with Let's Fly Off. Expert-guided tours to Bali, Thailand, Vietnam, Sri Lanka & more. Book your adventure today!",
  keywords: "travel, tours, adventure, Bali, Thailand, Vietnam, Sri Lanka, Maldives, group tours, travel packages",
  authors: [{ name: "Let's Fly Off" }],
  creator: "Let's Fly Off",
  publisher: "Let's Fly Off",
  robots: "index, follow",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://letsflyoff.com',
    siteName: "Let's Fly Off",
    title: "Let's Fly Off - Adventure Travel & Tours",
    description: "Discover breathtaking destinations with expert-guided tours. Create unforgettable memories with our travel experiences.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Let's Fly Off - Adventure Travel",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Let's Fly Off - Adventure Travel & Tours",
    description: "Discover breathtaking destinations with expert-guided tours. Create unforgettable memories with our travel experiences.",
    images: ['/og-image.jpg'],
    creator: '@letsflyoff',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://letsflyoff.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/rli3hid.css" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-seasons">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
